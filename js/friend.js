jQuery(document).ready(function($) {
    // bxSlider
    $('.bxslider').bxSlider({ 
        infiniteLoop: false,
        pager: false
    });
    //show balloon
    $('figure>img').each(function(){
        $(this).on('touch mouseover', function(e){
            $('figcaption').removeClass('show');
            $('figcaption.show').addClass('hide');
            $(this).next('figcaption').addClass('show');
            e.preventDefault();
        });
    });

    //Momelon Baloon
    $('.momelon-right').on('touch mouseover', function(e){
      $('figcaption').removeClass('show');
      $('figcaption.show').addClass('hide');
      $('#c-momelon').addClass('show');
      e.preventDefault();
    });

    // The Gang
    $('.momelon-left').on('touch mouseover', function(e){
      $('figcaption').removeClass('show');
      $('figcaption.show').addClass('hide');
      $('#c-gang').addClass('show');
      e.preventDefault();
    });
    // Dr. Vann
    $('.dr_vann-left').on('touch mouseover', function(e){
      $('figcaption').removeClass('show');
      $('figcaption.show').addClass('hide');
      $('#dr_vann').addClass('show');
      e.preventDefault();
    });

    // I-Pong
    $('.dr_vann-right').on('touch mouseover', function(e){
      $('figcaption').removeClass('show');
      $('figcaption.show').addClass('hide');
      $('#i-pong').addClass('show');
      e.preventDefault();
    });

    //Close button
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

    var doSlider = function(){
		$('.royalSlider').royalSlider({
			controlNavigation: false,
			transitionType: 'slide',
			transitionSpeed: 300,
			keyboardNavEnabled: true,
			arrowsNavAutoHide: false,
			imageScaleMode: 'none',
			numImagesToPreload: 7,
			navigateByClick: false,
			imageAlignCenter: false
		});
		setTimeout(function(){ $('figcaption').removeClass('show');  $('.jaja').find('figcaption').addClass('show'); }, 800)

		var slider = $(".royalSlider").data('royalSlider');


		$('#nav-3').on('click touch', function(){
			slider.goTo($('.munbear').parent().attr('index'));
			$('#nav-2').parent('li').removeClass('active');
			$(this).parent('li').addClass('active');
			setTimeout(function() {
				$('figcaption').removeClass('show'); 
				$('.munbear').find('figcaption').addClass('show');
			}, 600);

		});

		$('#nav-2').on('click touch', function(){
			slider.goTo(0);
			$('#nav-3').parent('li').removeClass('active');
			$(this).parent('li').addClass('active');
			setTimeout(function() {
				$('figcaption').removeClass('show'); 
				$('.jaja').find('figcaption').addClass('show');
			}, 600)
		});

		slider.ev.on('rsAfterSlideChange', function(event){
			if (slider.currSlideId > $('.munbear').parent().attr('index')-1){
				$('#nav-2').parent('li').removeClass('active'); 
				$('#nav-3').parent('li').addClass('active');
			} else {
				$('#nav-3').parent('li').removeClass('active');
				$('#nav-2').parent('li').addClass('active');
			}
		});
	};
    
    var checkFigure = function(){
		var bodyWidth = $('body').width();
		var padding = 220;
		var twidth = bodyWidth - padding;
		var royalSlider = $('.royalSlider');
		$('figure').each(function(){
			$(this).appendTo(royalSlider);
		});
		$('.rsContent').remove();
		var arr = [];
		var sum = 0;
		var index = 0;
		$('figure').each(function(i){
			var width = $('img',this).width()+50;
			sum+=width;
			if(sum>twidth) {sum=width;index++;}
			arr[index] = arr[index]||[];
			arr[index].push($(this));
		});
		for(var i=0;i<arr.length;i++){
			if(!arr[i]) continue;
			var rsCt = $('<div class="rsContent" index="'+i+'"></div>');
			rsCt.appendTo(royalSlider);
			for(var j=0;j<arr[i].length;j++){
				rsCt.append(arr[i][j]);
			}
		}
		doSlider();
	};
	checkFigure();
});
