$(document).ready(
	function()
	{
		$("#tabs").tabs();
		// $('.slider').bxSlider(
		// 	{
		// 	 captions: true,
		// 	}
		// );
		innerSlider();

		$('#searchform').hide();
		$('.search').click(
			function ()
			{
				$('#searchform').toggle();
				return false;
			}
		);

	}
);
function innerSlider()
		{
			var counter = $('.image-counter .current').html();
			var max = $('.image-counter .all').html();
			$('.inner-slider').jcarousel();

			$('.jcarousel-control.prev')
	            .on('jcarouselcontrol:active', function() {
	                $(this).removeClass('inactive');
	            })
	            .on('jcarouselcontrol:inactive', function() {
	                $(this).addClass('inactive');
	            })
	            .jcarouselControl({
	                target: '-=1'
	            }).click(
	            	function()
	            	{
	            		if(!(counter <= 1))
	            		{
	            			counter--;
	            			$('.image-counter .current').html(counter);	
	            		}
	            	}
	            );

	        $('.jcarousel-control.next')
	            .on('jcarouselcontrol:active', function() {
	                $(this).removeClass('inactive');
	            })
	            .click(
	            	function()
	            	{
	            		if(!(counter >= max))
	            		{
	            			counter++;
		            		$('.image-counter .current').html(counter);
		            	}
	            	}
	            )
	            .on('jcarouselcontrol:inactive', function() {
	                $(this).addClass('inactive');
	            })
	            .jcarouselControl({
	                target: '+=1'
	            });

		}