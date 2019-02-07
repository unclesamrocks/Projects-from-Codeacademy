const _ = {
  clamp(number, lowBound, uppBound){
      return Math.min(Math.max(number, lowBound), uppBound);
  	},
  inRange(number, valStart, valEnd){
      if(valEnd === undefined){
				valEnd = valStart;
        valStart = 0;
      }
    	if(valStart > valEnd){
        let temp = valStart;
        valStart = valEnd;
        valEnd = temp;
      }
    	if(number > valStart && number < valEnd){
        return true;
      } else {
        return false;
      }
  },
  words(str){ //using special build in string.method .split():
    return str.split(' ');
  },
  pad(str, len){
    let before = 0;
    let after = 0;
    let paddedString = ' ';
    let finalResult = '';
    if(str.length >= len){
      return str;
    } else {
      let x = len - str.length;
      if((x%2)){
        before = Math.floor(x/2);
        after = x - before;			
      } else {
        before = Math.floor(x/2);
        after = x - before;
      }
      finalResult = paddedString.repeat(before)+str+paddedString.repeat(after);
      return finalResult;	
    }
  },
  has(obj, key){
    return Object.keys(obj).includes(key);
  },
  invert(obj){
 		if(typeof obj !== 'object'){
			return 'Error, function only use objects';
		}
		let result = {};
		let keys = Object.keys(obj);
		for(let i=0; i<keys.length; i++){
			result[obj[keys[i]]] = keys[i];
		}
		return result;   
  },
  findKey(obj, predicate){
    let keys = Object.keys(obj);
    for(let i=0; i<keys.length;i++){
      let value = obj[keys[i]];
			let predicateReturnValue = predicate(value);
      if (predicateReturnValue){
        return keys[i];
      }
      return undefined;
    }
  },
  drop(array, number){
    if (number === undefined){
      number = 1;
    }
    return array.slice(number);
  },
  dropWhile(array, predicate){
    return this.drop(array, array.findIndex(function(element, index){return !predicate(element, index, array)}));
  },
  chunk(arr, size){
    if(size === undefined){
      size = 1;
    };
    let newArr = [];
    for(let i=0;i<arr.length;i+=size){
      let portion = arr.slice(i,i+size);
      newArr.push(portion);
    	}
    return newArr
  }
  };




// Do not write or modify code below this line.
module.exports = _;