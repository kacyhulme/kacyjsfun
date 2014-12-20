# to compile coffee run coffee -o javascripts/ -c coffeescripts/

$ ->
  $('#title').hover ->
    $(@).toggleClass 'bigtitle'

  array = ["apples", "bananas", "oranges" , "kiwi", "strawberries"];
  array.pop for i in array.length
