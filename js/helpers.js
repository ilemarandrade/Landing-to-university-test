function printer(id, html, carouselName) {
    $(id).html(html);

    if (carouselName === "team") {
        $('#container-our-team').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 1500,
            arrows: false,
            dots: false,
            pauseOnHover: false,
            adaptiveHeight: true,
            mobileFirst: true,
            variableWidth: true,
            responsive: [{
                breakpoint: 1020,
                settings: {
                    variableWidth: false,
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 778,
                settings: {
                    variableWidth: false,
                    slidesToShow: 3
                }
            },
            ]
        });
    }
    else if (carouselName === "reviews") {
        $('#container-reviews').slick({
            arrows: false,
            dots: true,
        });
        $('.play-button').click(function () {
            var name = $(this).data("name");
            
            $("#modal-video").addClass("show");
            $("#modal-title").html(name)
        });


    }
}

