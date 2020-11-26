$(document).ready(function() {
  $('.box1').css({
    'width': '100px',
    'height': '100px',
    'background-color': '#000'
  });
});

$(function(){
  $('.box1').mouseover(function(){
    $('.box1').addClass('box1-ext');
  });
  $('.box1').mouseout(function(){
    $('.box1').removeClass('box1-ext');
  });
});