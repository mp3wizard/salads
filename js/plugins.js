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
    $('#tabs').tabs( { hide: { effect: "fade", duration: 400 }, show: { effect: "fade", duration: 400 } } );

    // Animation Popup
    $('#animation').magnificPopup({
      delegate: 'a',
      type: 'iframe'
    });

    $('#wallpaper select').chosen({ 
        disable_search: true,
        width: '135px',
        placeholder_text_single: 'Select Size'
    })

    $('#wallpaper select').on('change', function(evt, params) {
        var value = $(this).val();
        window.open(value);
    });
});
