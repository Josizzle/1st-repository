$(document).ready(function() {


    $(".demo1 .rotate").textrotator({
        animation: "fade",
        speed: 1000
    });

    $(".rotate").textrotator({
        animation: "dissolve",
        seperator: ",",
        speed: 2000
    });
});