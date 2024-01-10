$(document).ready(function(){
  // Asegúrate de que el encabezado tenga una posición fija
 //   $('header').css('position', 'fixed');

  $(window).scroll(function(){
    var scroll = $(window).scrollTop();
    if(scroll > 50){
      $('header').css('background', 'blue');
    } else{
      $('header').css('background', 'transparent');
      
    }
  });
});
