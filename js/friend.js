jQuery(document).ready(function($) {
    
    //$('.royalSlider').load('kit/friend-list.kit');
    $('figure>img').each(function(){
        $(this).click(function(e){
            $('figcaption').removeClass('show');
            $('figcaption.show').addClass('hide');
            $(this).next('figcaption').addClass('show');
            e.preventDefault();
        });
    });
    
    $('figcaption a').each(function(){
        $(this).click(function(e){
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
        navigateByClick: false
    });


});