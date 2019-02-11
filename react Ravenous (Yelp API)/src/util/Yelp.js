const apiKey = 'OVrt_cWVrsmUwn0W5ho3SoLe7MWn0vvxukz3PpRM-nVvHknFg25EAZlu7WRxhTn-2uF_OXrZWv-yi5nkqngXbmAN1Ii7Xlc4kYh6X3lWOxai322hnOEk_i4neHxdXHYx';

const CORSanywhere = 'https://cors-anywhere.herokuapp.com/';

const yelp = {
    search(term, location, sortBy){
        return fetch(`${CORSanywhere}https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,{
            headers: {
                Authorization: `Bearer ${apiKey}`
            }
        }).then(response=>{
            if(response.ok){
                const resp = response.json();
                console.log(resp);
                return resp;
            }
            console.log(response);
            throw new Error (`Status: ${response.status} - ${response.statusText}`);
        }, networkError =>{ console.log(networkError.message) }).then(jsonResponse=>{
            if(jsonResponse.businesses){
                return jsonResponse.businesses.map(business=>{
                    return {
                        id: business.id,
                        imageSrc: business.image_url,
                        name: business.name,
                        address: business.location.address1,
                        city: business.location.city,
                        state: business.location.state,
                        zipCode: business.location.zip_code,
                        category: business.categories.length !== 0 ? business.categories[0].title : '',
                        rating: business.rating,
                        reviewCount: business.review_count
                    }
                });
            }
        }).catch(e=>{ 
            console.log(e);
            return [] });
    }
};

export default yelp;