"use strict";

$(document).ready(function() {

    // owl carousel
    $("#owl-demo").owlCarousel({

        autoPlay: 3000, //Set AutoPlay to 3 seconds

        items: 4,
        // itemsDesktop : [1199,3],
        // itemsDesktopSmall : [979,3]

    });

    // text rotator code //
    $(".rotate").textrotator({
        animation: "dissolve",
        seperator: ",",
        speed: 2000,
    });

    // wow.min.js code //

    new WOW().init();

    // countTo code //
    $('.timer').countTo({
        from: 0,
        to: 50,
        speed: 5000,
        reFreshInterval: 50,
    });
    $('.timed').countTo({
        from: 0,
        to: 3000,
        speed: 3500,
        reFreshInterval: 50,
    });
    $('.times').countTo({
        from: 0,
        to: 350,
        speed: 3000,
        reFreshInterval: 50,
    });
});

// OriDomi folding paper effect
var folded = new OriDomi(document.getElementsByClassName('paper')[0]);

var demo = new OriDomi('.paper2', {
    vPanels: 10,
});