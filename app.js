// good luck !
var btn = $(":button");

btn.each(function() {
  var clr = $(this).attr("data-color");
  $(this).css(('background'), clr);
});

btn.click(function() {
  if ($(':checkbox').is(':checked')) {
    var clr = $(this).attr("data-color");
    $('.main').css('color', clr);
  } else {
    var clr = $(this).attr("data-color");
    $('body').css('background', clr);
  }
})


var randBtn = $('button');

randBtn.click(function() {

var newColor = '#' + (0x1000000 + (Math.random()) * 0xffffff).toString(16).substr(1, 6);
  jQuery(".font-style").animate({
    color: newColor
  }, 2000);
  
  $('body').css('background', newColor)

  var newColor1 = '#' + (0x1000000 + (Math.random()) * 0xffffff).toString(16).substr(1, 6);
  jQuery(".font-style").animate({
    color: newColor1
  }, 2000);
  $('.main').css('color', newColor1)  
});