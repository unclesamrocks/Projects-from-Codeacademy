// Create class called Catalog that holds all of the Media items in our library.
class Catalog {
	constructor(title, type){
		this._title = title;
		this._type = type;
		this._collection = {};
	}
	get title(){
		return this._title;
	}
	get type(){
		return this._type;
	}
	get collection(){
		return this._collection;
	}
	set collection(param){
		this._collection = param;
	}
	addMedia(obj){
		//console.log(obj.constructor.name);
		if(typeof obj !== 'object'){
			return console.log('Not an object');
			// checking if type of object and collection is matched:
		} else if(obj.constructor.name !== this.type){
			return console.log('"'+obj.title+'" has wrong collection type - "'+obj.constructor.name+'" instead of "'+this.type+'"');
		} else {
			console.log(obj);
			this.collection[obj.title] = obj;
		}
	}
}

// MEDIA super class
class Media {
	constructor(title){
		this._title = title;
		this._isCheckedOut = false;
		this._ratings = [];
	}
	get title(){
		return this._title;
	}
	get isCheckedOut(){
		return this._isCheckedOut;
	}
	set isCheckedOut(param){
		this._isCheckedOut = param;
	}
	get ratings(){
		return this._ratings;
	}
	set ratings(param){
		this._ratings = param;
	}
	getAverageRating(){
		let numOfRatings = this.ratings.length;
		let sumOfRatings = 0;
		this.ratings.reduce((previousValue, currentValue, index, array)=>{
			sumOfRatings += currentValue;
			/*console.log('tick "'+numOfRatings+'":  '+sumOfRatings);*/
		},0);
		return (sumOfRatings / numOfRatings);
	}
	toggleCheckOutStatus(){
		if(this.isCheckedOut === false){
			this.isCheckedOut = true;
		} else {
			this.isCheckedOut = false;
		}
	}
	addRating(num){
		if(parseFloat(num) < 0 || parseFloat(num) > 5){
			return console.log('Error! Num is: "'+num+'", it is < 0 and > 5');
		} else if (isNaN(parseFloat(num))){
			return console.log('Error! Num is: "'+num+'", it is NaN');
		}
		this.ratings.push(parseFloat(num));
	}
}
// BOOK class
class Book extends Media {
	constructor(title, author, pages){
		super(title);
		this._author = author;
		this._pages = pages;
	}
	get author(){
		return this._author;
	}
	get pages(){
		return this._pages;
	}
}
// MOVIE class
class Movie extends Media {
	constructor(title, director, runTime){
		super(title);
		this._director = director;
		this._runTime = runTime;
	}
	get director(){
		return this._director;
	}
	get runTime(){
		return this._runTime;
	}
}
// CD class
class Cd extends Media {
	constructor(title, artist, songs){
		super(title);
		this._artist = artist;
		this._songs = songs;
	}
	get artist(){
		return this._artist;
	}
	get songs(){
		return this._songs;
	}
	shuffle(){
		// Create a method called shuffle for the CD class. The method returns a randomly sorted array of all the songs in the songs property.

		// https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
		let shuffledArr = this.songs;
		let temp = '';
		/* 
		* Randomize array element order in-place.
 		* Using Durstenfeld shuffle algorithm.
 		*/
		for(let i = shuffledArr.length-1; i>0; i--){
			var x = Math.floor(Math.random()*(i+1));
			temp = shuffledArr[i];
			shuffledArr[i] = shuffledArr[x];
			shuffledArr[x] = temp;
		}
		return shuffledArr;
	}
}

const bookCatalog = new Catalog('Book catalog', 'Book');
const dickensCh = new Book ('Old guy and Sea', 'Charles Dickens', 350);
const historyOfEverything = new Book ('A Short History of Nearly Everything', 'Bill Bryson', 544);
const hardNutt = new Movie ('Hard Hutt', 'Jack Spilbegr', 120);
const nirvana = new Cd ('Nevermind', 'Nirvana', ['Rape Me', 'Smells like teen spirit', 'About a girl', 'School', 'Polly was a cracker']);
bookCatalog.addMedia(dickensCh);
bookCatalog.addMedia(historyOfEverything);
bookCatalog.addMedia(nirvana);
console.log(bookCatalog.collection);
/*console.log(hardNutt);
console.log(nirvana);
nirvana.addRating(3.5);
nirvana.addRating(4.5);
nirvana.addRating(5);
console.log(nirvana.getAverageRating());
console.log(nirvana.isCheckedOut); // fasle
nirvana.toggleCheckOutStatus();
console.log(nirvana.isCheckedOut); // true
nirvana.toggleCheckOutStatus();
console.log(nirvana.isCheckedOut); // false
console.log(nirvana.shuffle());*/