const MessageMixer = {

  countCharacter(inputString, inputCharacter) {
    let count = 0;
    let string = inputString.toLowerCase();
    let character = inputCharacter.toLowerCase();
    for (let i = 0; i < string.length; i++) {
      if (string[i] === character) {
        count++;
      }
    }
    return count; 
  },

  capitalizeFirstCharacterOfWords(string) {
  let arr = string.split(" ");  
    for (let i = 0; i < arr.length; i++) {  
      let word = arr[i];
      arr[i] = word[0].toUpperCase() + word.substring(1); 
    }
    return arr.join(" "); 
  },

  reverseWord(word) {
    return word.split("").reverse().join("");
  },

  reverseAllWords(sentence) {
    let words = sentence.split(" ");
    for (let i = 0; i < words.length; i++) {
      words[i] = this.reverseWord(words[i]);
    }
    return words.join(" ");
  },


  replaceFirstOccurence(string, toBeReplaced, replaceWith) {
    return string.replace(toBeReplaced, replaceWith);
  },


  replaceAllOccurrences(string, toBeReplaced, replaceWith) {
    return string.split(toBeReplaced).join(replaceWith);
  },

  encode(string) {
  let replacementObject = { "a": "@", "s": "$", "i": "!", "o":"0" };
  for (let key in replacementObject) {
    string = this.replaceAllOccurrences(string, key, replacementObject[key]); 
  }	
  return string;
  },

  palindrome(string){
    /* The body of the function should use string concatenation or interpolation to return the string, a space, and the reverse of the string. */
    return string+' '+this.reverseWord(string);
  },

  pigLatin(sentence, character){
    /* The body of the function should return the sentence split at each of the spaces, and joined back together using the character argument concatenated with a ' '. */
    return sentence.split(' ').join(character+' ');
  },
}

function displayMessage() {
  console.log(MessageMixer.countCharacter("What is the color of the sky?", "t"));
  console.log(MessageMixer.capitalizeFirstCharacterOfWords("What is the color of the sky?"));
  console.log(MessageMixer.reverseWord("What is the color of the sky?"));
  console.log(MessageMixer.reverseAllWords("What is the color of the sky?"));
  console.log(MessageMixer.replaceFirstOccurence("What is the color of the sky?", "sky", "water"));
  console.log('replaceAllOccurrences: '+MessageMixer.replaceAllOccurrences("What is the color of the sky?", "s", "GG"));
  console.log(MessageMixer.encode("What is the color of the sky?"));
  console.log(MessageMixer.palindrome("What is the color of the sky?"));
  console.log(MessageMixer.pigLatin("What is the color of the sky?", '@'));
}

displayMessage();