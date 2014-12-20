/* header */

$(document).ready(function() {
  $('#title').hover(function() {
    $(this).toggleClass('bigtitle');
  });


  $('.fruit').find('button').click(function() {
    $.each(["grapes", "oranges", "kiwi" , "bananas", "apples"], function(index, value) {
      alert(value);
    });
  });

  $('.veggies').find('button').click(function() {
    $.each(["beets", "sweet potatoes", "squash" , "onion", "carrots"], function(index, value) {
      alert(value);
    });
  });
});



/* left column */
/* left column */
/* left column */
/* left column */


$('.age').find('button').click(function() {
  var inputAge = $('#input1').val();
  alert("Thank you, your age is " + inputAge);
});


$('#justText').find('button').click(function() {
  $('p', '#justText').text("this is the new text");
});

$('#dogImage').click(function(e) {
  if ($(this).attr('src')=="greta.jpg") {
    $('#dogImage').attr('src', "detroit.jpg");
  } else {
    $('#dogImage').attr('src', "greta.jpg");
  }
});

/* middle column */
/* middle column */
/* middle column */
/* middle column */
/* middle column */

$('#favnum').find('button').click(function() {
  var inputNum = $('#inputnum').val();
  alert(inputNum);
});

$('.slice').find('button').click(function() {
  var getString = $('#slcString').val();
  var slicedString = getString.slice(2);
  $('#sliceanswer').text(slicedString);
});

$('.split').find('button').click(function() {
  var getSentence = $('#sentence').val();
  var splitSentence = getSentence.split(" ");
  $('#splitthestring').text(splitSentence);
});

$('.innerdiv').find('button').click(function() {
  var senforind = $('#sentenceforindex').val();
  var wordinind = $('#wordforindex');
  var alertword = senforind.indexOf(wordinind.val());
  alert(alertword);
});

/* right column */
/* right column */
/* right column */
/* right column */
/* right column */
/* right column */

$('.numbetween').find('button').click(function() {
  var x = $('#numb').val();
  if (isNaN(x) || x < 1 || x > 10) {
    alert("Input not valid");
  } else {
    alert("Input OK");
  }
});


$('.innerhtml').mouseenter(function() {
  $(this).replaceWith("<p>You moused over this and the old text disappeared forever</p>");
});

$('.secondinnerdiv').find('button').click(function(){
  $('.secondinnerdiv').find('p').replaceWith("<p>Here is the old text</p>");
});

$('.datebutton').find('button').click(function() {
  var d = new Date();
});

$('.addtwonums').find('button').click(function() {
  var x = parseInt($('#twonums1').val());
  var y = parseInt($('#twonums2').val());
  var sum = x + y;
  $('#output').text(sum);
});
