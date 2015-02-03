"use strict"


$(document).ready(function() {

    // text rotator code //
    $(".rotate").textrotator({
        animation: "dissolve",
        seperator: ",",
        speed: 2000
    });

    // wow.min.js code //
    new WOW().init();

});