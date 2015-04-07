'use strict'
$(document).ready(function() {
    // call owl-carousel lower images
    $("#owl-demo").owlCarousel({

        autoPlay: 3000, //Set AutoPlay to 3 seconds

        items: 4,

    });
    // oriDomi using Jquery
    var $folded = $('.graphart').oriDomi({
        vPanels: 5,

    });
    // oriDomi effect
    $folded.oriDomi('twist', 20);

    // Call for oriDomi effect using Javascript
    var folded = new OriDomi('.grandMotel', {
        vPanels: 10,
        ripple: true,

    });

  




});