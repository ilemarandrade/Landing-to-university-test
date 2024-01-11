$(document).ready(function(){
  // Asegúrate de que el encabezado tenga una posición fija
 //   $('header').css('position', 'fixed');

  $(window).scroll(function(){
    var scroll = $(window).scrollTop();
    if(scroll > 50){
      $("#header").removeClass("bg-primary").addClass("bg-white")
      $('#header').find('.text-white').removeClass('text-white').addClass('text-primary');
      $("#navbar").addClass("bg-primary");
    } else{
      $("#header").addClass("bg-primary").removeClass("bg-white");
      $('#header').find('.text-primary').removeClass('text-primary').addClass('text-white');;
      $("#navbar").removeClass("bg-primary");
    }
  });

  $('.play-button').click(function() {
    console.log("aqui");
    var video = $(this).siblings('.review-video').get(0);
    video.play();
    $(this).hide();
  });

  $('.review-video').click( function() {
    this.currentTime = 0;
    this.load(0);
    $(this).siblings('.play-button').show();
  });

   $('.slide').click( function() {
    console.log("entro aqui")
  });

});
