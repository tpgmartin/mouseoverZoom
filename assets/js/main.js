$('img').mouseover(function() {
  $('#your_div_id').css('display', 'block');
});

$('img').on('mousemove', function(e){
    $('#your_div_id').css({
       left:  e.pageX - 20,
       top:   e.pageY - 20
    });
});