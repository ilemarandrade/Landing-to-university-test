function printer(id, html, isCarousel) {
    $(id).html(html);

    if (isCarousel) {
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
}

