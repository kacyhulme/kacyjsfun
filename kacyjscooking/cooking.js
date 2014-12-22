var spellItOut = function(){
  var letters = ["A", "L", "M", "O", "N", "D", "S"];
  var length = letters.length;
  for (var i = 0; i < length; i++) {
    var x = 'p' + [i+1];
    timeDelay(letters, length, i, x);
  }
}

var timeDelay = function(arrayName, lengthOfArray, countNum, domEl){
  setTimeout(function(){
    document.getElementById(domEl).innerHTML = arrayName[countNum];
  }, 1000);
}

spellItOut();
