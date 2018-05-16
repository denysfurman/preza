


jQuery(document).ready(function($){

    $('.control , .icon-material-search , .icon-material-search img , .btn-material').click( function(){
        $('body').addClass('search-active');
        $('.input-search').focus();
        $('.icon-close').fadeIn();
    });

    $('.icon-close').click( function(){
        $('body').removeClass('search-active');
        $('.icon-close').fadeOut();
    });

});


$(function() {
    var ele   = $('#scroll');
    var speed = 70, scroll = 5, scrolling;

    $('#scroll-up').mouseenter(function() {
        // Scroll the element up
        scrolling = window.setInterval(function() {
            ele.scrollTop( ele.scrollTop() - scroll );
        }, speed);
    });

    $('#scroll-down').mouseenter(function() {
        // Scroll the element down
        scrolling = window.setInterval(function() {
            ele.scrollTop( ele.scrollTop() + scroll );
        }, speed);
    });

    $('#scroll-up, #scroll-down').bind({
        click: function(e) {
            // Prevent the default click action
            e.preventDefault();
        },
        mouseleave: function() {
            if (scrolling) {
                window.clearInterval(scrolling);
                scrolling = false;
            }
        }
    });
});





