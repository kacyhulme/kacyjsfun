var spellItOut = function(){
  var letters = ["A", "L", "M", "O", "N", "D", "S"];
  var length = letters.length;
  for (var i = 0; i < length; i++) {
    var x = 'p' + [i+1];
    addLetter(letters, length, i, x);
  }
}

var addLetter = function(arrayName, lengthOfArray, countNum, domEl){
  setTimeout(function(){
    document.getElementById(domEl).innerHTML = arrayName[countNum];
  }, 400 * countNum);
}

spellItOut();


// code below is an example of a refactor by a senior dev
// var letters = ["A", "L", "M", "O", "N", "D", "S"];

// function addLetter(letter,i) {
//   document.getElementById('p' + i).innerHTML = letter;
// }

// (function timer(i) {
//   addLetter(letters[i], i+1);
//   if (letters[i]) {
//     setTimeout(function() {
//       timer(i+1);
//     }, 400);
//   }
// })(0);
