$(document).ready(function(){
  $(window).scroll(function(){
    var scroll = $(window).scrollTop();
    const isCollapsedMenu = $(".navbar-toggler").attr('aria-expanded') === "false";

    if(!isCollapsedMenu){
      return
    }

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

  $('#modal-video').on('show.bs.modal', function (e) {
    var video = $('.review-video').get(0);
    video.currentTime = 0;
    video.play();
  })

  $(".navbar-toggler").click(function(){
    const isCollapsedMenu = $(".navbar-toggler").attr('aria-expanded') === "false";

    if(isCollapsedMenu){
      $("#header").removeClass("bg-primary").addClass("bg-white")
      $('#header').find('.text-white').removeClass('text-white').addClass('text-primary');
      $("#navbar").addClass("bg-primary");
    } else{
      $("#header").addClass("bg-primary").removeClass("bg-white");
      $('#header').find('.text-primary').removeClass('text-primary').addClass('text-white');;
      $("#navbar").removeClass("bg-primary");
    }
  })

});
