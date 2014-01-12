jQuery(document).ready(function($) {
    // bxSlider
    $('.bxslider').bxSlider({ 
        infiniteLoop: false,
        pager: false
    });

    $('figure>img').each(function(){
        $(this).on('touch mouseover', function(e){
            $('figcaption').removeClass('show');
            $('figcaption.show').addClass('hide');
            $(this).next('figcaption').addClass('show');
            e.preventDefault();
        });
    });
    
    $('figcaption a').each(function(){
        $(this).on('click', function(e){
            $('figcaption').removeClass('show');
            $(this).parent('figcaption').addClass('hide');
            setTimeout(function() {
                $('figcaption').removeClass('hide');
            }, 1000);
            e.preventDefault();
        });
    });

    // $('footer nav a').click(function(e) {
    //     slider.destroy();
    //     $('.royalSlider').load('kit/other-list.kit');
    //     $('footer nav li').removeClass('active');
    //     $(this).parent('li').addClass('active');

    //     e.preventDefault()
    // })
    $('.royalSlider').royalSlider({
        controlNavigation: false,
        transitionType: 'slide',
        transitionSpeed: 300,
        keyboardNavEnabled: true,
        arrowsNavAutoHide: false,
        imageScaleMode: 'none',
        numImagesToPreload: 7,
        navigateByClick: false
    });

    var slider = $(".royalSlider").data('royalSlider');
    $('#nav-3').on('click touch', function(){
        slider.goTo(4);
        $('#nav-2').parent('li').removeClass('active');
        $(this).parent('li').addClass('active');
    });
    $('#nav-2').on('click touch', function(){
        slider.goTo(0);
        $('#nav-3').parent('li').removeClass('active');
        $(this).parent('li').addClass('active');
    });
    slider.ev.on('rsAfterSlideChange', function(event){
        if (slider.currSlideId > 3){
            $('#nav-2').parent('li').removeClass('active'); 
            $('#nav-3').parent('li').addClass('active');
        } else {
            $('#nav-3').parent('li').removeClass('active');
            $('#nav-2').parent('li').addClass('active');
        }
    });

});