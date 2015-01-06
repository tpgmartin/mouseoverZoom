$('#default').mouseover(function() {
  $('#mouseover').css('display', 'block');
});

$('#default').on('mousemove', function(e){
    $('#mouseover').css({
       left:  e.pageX - 50,
       top:   e.pageY - 50
    });
    var left_percent = -(e.pageX  / 485)*300;
    var top_percent = -(e.pageY / 500)*300;
    $('#zoomed-in').css({
       left: left_percent.toString() + "%",
       top: top_percent.toString() + "%"
    });
});

$('#default').on('mouseleave', function() {
  $('#mouseover').css('display', 'none');
});