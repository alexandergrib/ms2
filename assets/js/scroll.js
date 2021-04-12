// https://codepen.io/jamesreegan/pen/OVMVvg
//Animation code found on code pen, I only changed classes name

$(function(){
  var tickerLength = $('.news--class li').length;
  var tickerHeight = $('.article li').outerHeight();
  $('.news--class li:last-child').prependTo('.news--class');
  $('.news--class').css('marginTop',-tickerHeight);
  function moveTop(){
    $('.news--class').animate({
      top : -tickerHeight
    },600, function(){
     $('.news--class li:first-child').appendTo('.news--class');
      $('.news--class').css('top','');
    });
   }
  setInterval( function(){
    moveTop();
  }, 3000);
  });
