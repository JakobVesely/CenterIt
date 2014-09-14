(function ($) {

	$.fn.centerIt = function(options){

		var self = this;

		var settings = $.extend({
			parent: 'body',
			vertical: true,
			horizontal: true,
			autoListener: true,
			position: 'absolute'
		}, options);

		var center = function() {

			var top = ($(settings.parent).height()/2) - (self.height()/2);
			var left = ($(settings.parent).width()/2) - (self.width()/2);

			self.css({
				'position': settings.position
			});
			
			if(settings.vertical){
				self.css({'top': top + "px"});	
			}
			
			if(settings.horizontal){
				self.css({'left': left + "px"});	
			}
		};

		$(window).resize(function() {
			if (settings.autoListener){
				center();
			}
		});

		center();
	}

}(jQuery));