$(document).ready(function() {
    $(".search-option__btn").click(function() {
        $(".toggle-search").toggle();
        $('header').toggleClass("toggle");
        if (!$('header').hasClass('toggle')) {
            $(".user-input").val('');
            $(".menu-container").removeClass('result');
            $(".search-result").hide();
        }
    });
    $(".mobile__nav-btn").click(function() {
        $(".header__mobile").toggleClass("menu");
        $(".header__mobile").removeClass("toggle")

    });
    $(".mobile__search-btn").click(function() {
        $(".header__mobile").toggleClass("toggle");
        $(".header__mobile").removeClass("menu")
        if (!$('.header__mobile').hasClass('toggle')) {
            $(".user-input").val('');
            $(".mobile__container").removeClass('result');
            $(".search-result").hide();
        }
    });

    $(".user-input").keyup(function(event) {
        if (event.which === 13) {
            $(".search-btn").click();
        }
    });
    $(".search-btn").click(function() {
        $(".search-result").show();
        $('.menu-container').addClass("result")
        $('.mobile__container').addClass("result")
    });

    $(".category__menu-link").click(function() {
        var categoryFilter = $(this).attr("data-filter");
        $(this).addClass("active").parent().siblings().children().removeClass("active");
        $(".category__item").hide();
        if ($(".category__item").hasClass(categoryFilter)) {
            $('.' + categoryFilter).show();
        }
        if (categoryFilter === "all") {
            $(".category__item").show();
        }
    });

    $(".shop-title").click(function() {
        $(this).next().slideToggle().parent().siblings().children(".shop-accordion").slideUp();

    });



    $("#fr-car").owlCarousel({
        loop: true,
        margin: 30,
        items: 1,
        nav: true,
        dots: true,
        responsiveClass: true


    });

    $('#nd-car').owlCarousel({
        loop: true,
        margin: 30,
        responsiveClass: true,
        responsive: {
            0: {
                items: 2,
                nav: false,
                stagePadding: 25
            },
            576: {
                items: 3,
                nav: false,
                stagePadding: 0
            },
            768: {
                items: 4,
                nav: false,
            },
            992: {
                items: 5,
                nav: false
            },
            1200: {
                items: 7,
                nav: false,
            }
        }
    });

    if ($("#myFile").length > 0) {
        $("#myFile").jfilestyle({ input: false, text: "CV YÜKLE" });
    }




});