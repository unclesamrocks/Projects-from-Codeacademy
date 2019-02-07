class School {
	constructor(name, level, numberOfStudents){
		this._name = name;
		this._level = level;
		this._numberOfStudents = numberOfStudents;
	}
	get name(){
		return this._name;
	}
	get level(){
		return this._level;
	}
	set level(val){
		if(val === 'primary' || val === 'middle' || val === 'high'){
			this._level = val;
			return;
		} else {
			return 'level expect "primary", "middle", or "high"';
		}
	}
	get numberOfStudents(){
		return this._numberOfStudents;
	}
	set numberOfStudents(num){
		if(!isNaN(num)){
			this._numberOfStudents = num;
			return;
		} else {
			return 'numberOfStudents expect number';
		}
		
	}
	quickFacts(){
		/*
			SCHOOL NAME educates NUMBER OF STUDENTS students at the LEVEL school level.
		*/
		return console.log(this.name+' educates '+this.numberOfStudents+' students at the '+this.level+' school level.');
	}
	static pickSubstituteTeacher(substituteTeachers){
		if(!Array.isArray(substituteTeachers)){
			return 'substituteTeachers expects Array';
		} else {
			let randIn = Math.floor(Math.random()*(substituteTeachers.length-1));
			return substituteTeachers[randIn];
		}
	}
}

class Primary extends School {
	constructor(name, numberOfStudents, pickupPolicy){
		super(name, numberOfStudents);
		this._level = 'primary';
		this._pickupPolicy = pickupPolicy;
	}
	get pickupPolicy(){
		return this._pickupPolicy;
	}
	set pickupPolicy(string){
		if(typeof string === 'String'){
			this._pickupPolicy = string;
			return;
		} else {
			return 'pickupPolicy excepts string';
		}
	}
}

class Middle extends School {
	constructor(name, numberOfStudents){
		super(name, numberOfStudents);
		this._level = 'middle';
	}
}

class High extends School {
	constructor(name, numberOfStudents, sportsTeams){
		super(name, numberOfStudents);
		this.level = 'high';
		this._sportsTeams = sportsTeams;
	}
	get sportsTeams(){
		return this._sportsTeams;
	}
	set sportsTeams(arr){
		if(Array.isArray(arr)){
			this._sportsTeams = arr;
			return
		} else {
			return 'sportsTeams expects array';
		}
	}
}

const lorraineHansbury = new Primary ('Lorraine Hansbury', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.');

lorraineHansbury.quickFacts();

console.log(School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']));

const alSmith = new High ('Al E. Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);

console.log(alSmith.sportsTeams);
