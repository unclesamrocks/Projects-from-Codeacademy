// Page Elements
const $input = $('#city');
const $submit = $('#button');
const $destination = $('#destination');
const $container = $('.container');
const $venueDivs = [$("#venue1"), $("#venue2"), $("#venue3"), $("#venue4")];
const $weatherDivs = [$("#weather1"), $("#weather2"), $("#weather3"), $("#weather4")];
const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

// Add AJAX functions here:
const getVenues = async () => {
  const city = $input.val();
  const limit = 10;
  const urlToFetch = `${url}${city}&limit=${limit}&client_id=${clientId}&client_secret=${clientSecret}&v=20190128`;

  try{
    const response = await fetch(urlToFetch);
    // console.log(response);
    if(response.ok){
      const jsonResponse = await response.json();
      // console.log(jsonResponse);
      const venues = jsonResponse.response.groups[0].items.map(item => item.venue);
      // console.log(venues);
      return venues;
    }
    throw new Error('response.ok - false');
  } catch(e) {
    console.log(e);
    throw new Error('nothing to pass');
  }

}

const getForecast = async () => {
  const city = $input.val();
  const hour = 11;
  const urlToFetch = `${forecastUrl}&q=${city}&days=4`;
  try{
    const response = await fetch(urlToFetch);
    // console.log(response);
    if(response.ok){
      const jsonResponse = await response.json();
      // console.log(jsonResponse);
      const days = jsonResponse.forecast.forecastday;
      return days;
    }
    throw new Error('response.ok - false');
  } catch(e) {
    console.log(e);
    throw new Error('nothing to pass');
  }
}


// Render functions
const renderVenues = (venues) => {
  $venueDivs.forEach(($venue, index) => {
    // Add your code here:
    const venue = venues[index];
    const venueIcon = venue.categories[0].icon;
    const venueImgSrc = `${venueIcon.prefix}bg_64${venueIcon.suffix}`;
    
    let venueContent = createVenueHTML(venue.name, venue.location, venueImgSrc);
    
    $venue.append(venueContent);
  });
  $destination.append(`<h2>${venues[0].location.city}</h2>`);
}

const renderForecast = (days) => {
    $weatherDivs.forEach(($day, index) => {
      const currentDay = days[index];
      let weatherContent = createWeatherHTML(currentDay);
      $day.append(weatherContent);
    });
}

const executeSearch = () => {
  $container.css("visibility", "hidden");
  $venueDivs.forEach(venue => venue.empty());
  $weatherDivs.forEach(day => day.empty());
  $destination.empty();
  
  getVenues().then(venues=>{
    renderVenues(venues);
    $container.css("visibility", "visible");
  }, someError=>{
    console.log(someError);
  });
  getForecast().then(days=>{
    renderForecast(days);
    $container.css("visibility", "visible");
  }, someError=>{
    console.log(someError);
  });
  return false;
}

$submit.click(executeSearch)
