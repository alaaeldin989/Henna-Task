$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        margin: 5,
        dots: true,
        loop: true,
        autoplay: true,
        autoplayTimeout: 1000,
        autoplayHoverPause: true,
        responsive: {
            // أقل من 600 بكسل
            0: {
                items: 1 
            },
            600: {
                items: 2 
            },
          
            1000: {
                items: 4 
            }
        }
    });
});


$(document).ready(function(){
    var owl = $("#product").owlCarousel({
        items: 5,
        loop: true,
        nav: true,
          margin: 0,
          navText: '',
          mouseDrag: false,
        responsive: {
            // أقل من 600 بكسل
            0: {
                items: 1 
            },
            600: {
                items: 2 
            },
          
            1000: {
                items: 6 
            }
        }
    });
});