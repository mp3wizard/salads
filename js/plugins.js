// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.
jQuery(document).ready(function($) {
    $(".royalSlider").royalSlider({
        controlNavigation: false,
        transitionType: 'slide',
        transitionSpeed: 300,
        keyboardNavEnabled: true,
        arrowsNavAutoHide: false,
        imageScaleMode: 'none',
        navigateByClick: false,
        block: {
            // animated blocks options go gere
            moveEffect: 'bottom'
        }
    });

    var slider = $(".royalSlider").data('royalSlider');
    slider.ev.on('rsAfterInit', function(event) {
        $('figcaption a').each(function(){ 
            $(this).click(function(){ 
                alert(555)
                return false;
            })
        })
    });  
});