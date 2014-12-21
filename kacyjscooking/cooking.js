function spellItOut(){
  setTimeout(function() {
    letters = ["A", "L", "M", "O", "N", "D", "S"];
    length = letters.length;
    console.log(length);
    for (i = 0; i < length; i++) {
      var x = 'p' + [i+1];
      console.log(x);
      document.getElementById(x).innerHTML = letters[i];
    }
  }, 800);
}

spellItOut();
