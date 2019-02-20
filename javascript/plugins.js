/*global $, jQuery, alert*/

$(document).ready(function () {
    
    "use strict";


    $(".li1").click(function () {

        $(".recipe1").animate({margin: 'left:-500%'}, 2000, function () {$(".recipe2").fadeOut(1000); });

    });
    $(".li2").click(function () {

        $(".recipe2").css("margin-left", "-500%");

    });
    $(".li3").click(function () {

        $(".recipe3").css("margin-right", "-500%");

    });
    $(".li4").click(function () {

        $(".recipe4").css("margin-right", "-500%");

    });
    
    // Nice Scroll
    
    $("html").niceScroll();
    
    $('.carousel').carousel({
        
        interval: 6000
        
    });


function bgchange() {
    // $(".box").css("background-color", "");  // Unnecessary command
    counter = (counter + 1) % array.length;
    nextColor = array[counter];

    $(".box").css("background-color", nextColor); // Also no need to wrap
                                                  // variables with quotes

}
    
    // Show Color Option Div When Click On The Gear
    
    $(".gear-check").click(function () {
        
        $(".color-option").fadeToggle();
        
    });
    
    // Change Theme Color On Click
    
    var colorLi = $(".color-option ul li"),
        
        scrollButton = $("#scroll-top");
    
    colorLi.eq(0).css("backgroundColor", "#E60024").end()
    
           .eq(1).css("backgroundColor", "#E426D5").end()
    
           .eq(2).css("backgroundColor", "#009AFF").end()
    
           .eq(3).css("backgroundColor", "#FFD500");
        
    colorLi.click(function () {
        
        $("link[href*='theme']").attr("href", $(this).attr("data-value"));
        
    });
    
    // Caching The Scroll Top Element
    
    $(window).scroll(function () {
        
        if ($(this).scrollTop() >= 700) {
            
            scrollButton.show();
            
        } else {
            
            scrollButton.hide();
        }
    });
    
    // Click On Button To Scroll Top
    
    scrollButton.click(function () {
        
        $("html,body").animate({ scrollTop : 0 }, 600);
        
    });
    
});

// Loading Screen

$(window).load(function () {
    
    "use strict";
    
    // Loading Elements
    
    $(".loading-overlay .spinner").fadeOut(2000, function () {
        
        // Show The Scroll

        $("body").css("overflow", "auto");
        
        $(this).parent().fadeOut(2000, function () {
            
            $(this).remove();
        });
    });
});
