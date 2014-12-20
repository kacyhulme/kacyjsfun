/* header */
var changeStyle = function() {
  var t = document.getElementById("title");
  t.style.fontSize = "35px";
}

/* left column */
/* left column */
/* left column */
/* left column */
/* left column */
var fruit = function() {
  array = ["apples", "bananas", "oranges" , "kiwi", "strawberries"];
  length = array.length;
  for (i = 0; i < length; i++){
    x = array.pop();
    alert(x);
  }
};

var veggies = function() {
  array = ["beets", "sweet potatoes", "squash" , "onion", "carrots"];
  length = array.length;
  for (i = 0; i < length; i++){
    x = array.pop();
    alert(x);
  }
};

var ageCalculation = function() {
  var userAge = document.getElementById('input1');
  alert("Thank you, your age is " + userAge.value);
};

var changeText = function() {
  document.getElementById("justText").innerHTML = "Here is the NEW text";
};

var changeImage = function() {
  var image = document.getElementById('dogImage');
  if (image.src.match("greta")) {
    image.src = "detroit.jpg";
  } else {
    image.src = "greta.jpg";
  }
};

/* middle column */
/* middle column */
/* middle column */
/* middle column */
/* middle column */

var calculateNum = function() {
  var v = document.getElementById("inputnum");
  alert(v.value);
};

var sliceString = function() {
  var str = document.getElementById("slcString").value;
  var s = str.slice(2);
  document.getElementById("sliceanswer").innerHTML = s;
};

var splitString = function() {
  var x = document.getElementById('sentence');
  var answer = x.value.split(" ");
  document.getElementById("splitthestring").innerHTML = answer;
};

var indexToWord = function() {
  var s = document.getElementById("sentenceforindex").value;
  var w = document.getElementById('wordforindex');
  var indexis = s.indexOf(w.value);
  alert(indexis);
};

/* right column */
/* right column */
/* right column */
/* right column */
/* right column */
/* right column */
var myFunction = function() {
  var x = document.getElementById("numb").value;

  if (isNaN(x) || x < 1 || x > 10) {
    alert("Input not valid");
  } else {
    alert("Input OK");
  }
};

var changeInnerHtml = function(){
  var x = document.getElementById('innerhtml');
  x.innerHTML = "This text has been changed";
};

var writeDate = function(){ //this works but opens a new page
  document.write(Date());
};


var addInputs = function(){
  var x = parseInt(document.getElementById('twonums1').value);
  var y = parseInt(document.getElementById('twonums2').value);
  w = x + y;
  document.getElementById("output").innerHTML = w;
};


/////////////////////////////
function thisFunction() {
  var myFunc= function(num) {
    var sum = num + 2;
    return sum;
  }

  console.log(myFunc(2));

  var myFunc2 = function(myFunc) {
    var sum = myFunc = 2;
    return sum;
  }

  console.log(myFunc2());
};

thisFunction();
