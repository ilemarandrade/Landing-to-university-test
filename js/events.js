$(document).ready(function(){
  // Asegúrate de que el encabezado tenga una posición fija
 //   $('header').css('position', 'fixed');

  $(window).scroll(function(){
    var scroll = $(window).scrollTop();
    if(scroll > 50){
      $("#header").removeClass("bg-primary").addClass("bg-light")
      $('#header').find('.text-white').removeClass('text-white').addClass('text-primary');
      $("#navbar").addClass("bg-primary");
    } else{
      $("#header").addClass("bg-primary").removeClass("bg-light");
      $('#header').find('.text-primary').removeClass('text-primary').addClass('text-white');;
      $("#navbar").removeClass("bg-primary");
    }
  });
});
