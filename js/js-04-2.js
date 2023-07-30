 function findWordInSentence() {
    var sentence = prompt("Enter a sentence:");
    var word = prompt("Enter a word to search for:");
  
    sentence = sentence.toLowerCase();
    word = word.toLowerCase();
  
    if (sentence.indexOf(word) !== -1) {
        console.log("The word '" + word + "' was found in the sentence.");
    } else {
        console.log("The word '" + word + "' was not found in the sentence.");
    }
  }
  console.log(findWordInSentence())
  