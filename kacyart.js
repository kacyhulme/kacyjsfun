/* header */
function changeStyle() {
  var t = document.getElementById("title");
  t.style.fontSize = "35px";
}

/* left column */
/* left column */
/* left column */
/* left column */
/* left column */
function fruit(){
  array = ["apples", "bananas", "oranges" , "kiwi", "strawberries"];
  length = array.length;
  for (i = 0; i < length; i++){
    x = array.pop();
    alert(x);
  }
};

function veggies(){
  array = ["beets", "sweet potatoes", "squash" , "onion", "carrots"];
  length = array.length;
  for (i = 0; i < length; i++){
    x = array.pop();
    alert(x);
  }
};

function ageCalculation(){
  var userAge = document.getElementById('input1');
  alert("Thank you, your age is " + userAge.value);
};

function changeText(){
  document.getElementById("justText").innerHTML = "Here is the NEW text";
};

function changeImage(){
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

function calculateNum(){
  var v = document.getElementById("inputnum");
  alert(v.value);
};

function sliceString() {
  var str = document.getElementById("slcString").value;
  var s = str.slice(2);
  document.getElementById("sliceanswer").innerHTML = s;
};

function splitString(){
    var x = document.getElementById('sentence');
    var answer = x.value.split(" ");
    document.getElementById("splitthestring").innerHTML = answer;
};

function indexToWord(){
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
function myFunction() {
  var x = document.getElementById("numb").value;

  if (isNaN(x) || x < 1 || x > 10) {
    alert("Input not valid");
  } else {
    alert("Input OK");
  }
};

function changeInnerHtml(){
  var x = document.getElementById('innerhtml');
  x.innerHTML = "This text has been changed";
};

function writeDate(){ //this works but opens a new page
  document.write(Date());
};


function addInputs(){
  var x = parseInt(document.getElementById('twonums1').value);
  var y = parseInt(document.getElementById('twonums2').value);
  w = x + y;
  document.getElementById("output").innerHTML = w;
};
