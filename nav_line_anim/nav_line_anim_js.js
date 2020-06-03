(function($) {

	/* local navigation
	----------------------------------- */
	function lnav() {
		var $lnavLine = $('.js-lnav .line');
		var $lnavActive = $('.js-lnav .act');
		var lnavActW = $lnavActive.width();
		var lnavActPos = $lnavActive.position();
		var lnavActLeft = lnavActPos.left;
		var speed = 300;

		if ( $lnavActive.length >= 0 ) {
			lineActStatic();
		}

		$('.js-lnav li a').on('click', function(e) {
			e.preventDefault();    // 仮：リンク無効化
		});

		$('.js-lnav li a').on({
			mouseenter: function() {
				var hoverBtnW = $(this).width();
				var hoverPos = $(this).closest('li').position();
				var hoverLeft = hoverPos.left;
				$lnavLine.stop(false, false).animate({
					'width': hoverBtnW + 'px',
					'left': hoverLeft
				}, speed);
			},
			mouseleave: function() {
				lineActAnim();
			}
		});  //hover

		function lineActAnim() {
			$lnavLine.stop(false, false).animate({
				'width': lnavActW + 'px',
				'left': lnavActLeft
			}, speed);
		}// lineActAnim

		function lineActStatic() {
			$lnavLine.css({
				'width': lnavActW + 'px',
				'left': lnavActLeft
			});
		}// lineActStatic

	}// lnav


	/* 実行
	----------------------------------- */
	$(function() {
		lnav();
	});

})(jQuery);
