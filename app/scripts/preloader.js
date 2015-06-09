window.onload = function(){
  $('#preload_wrapper').animate({'opacity': 0},300, function() {
    $('#preload_wrapper').remove();
  });
};