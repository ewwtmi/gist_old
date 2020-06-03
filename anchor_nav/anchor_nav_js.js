(function($) {

	/* easing: global
	----------------------------------- */
	$.easing['jswing'] = $.easing['swing'];
	$.extend( $.easing,
	{
		easeOutBounce: function (x, t, b, c, d) {
			if ((t/=d) < (1/2.75)) {
				return c*(7.5625*t*t) + b;
			} else if (t < (2/2.75)) {
				return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
			} else if (t < (2.5/2.75)) {
				return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
			} else {
				return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
			}
		}
	});


	/* スムーススクロール
	----------------------------------- */
	function anchorLink() {
		$('a.js-anchor').on('click',function(e) {
			var sectionTop = $($(this).attr('href')).offset().top;    //スクロールしたい場所
			var SPEED = 500;    //速度
			$('body,html').animate({scrollTop: sectionTop}, SPEED);
			e.preventDefault();
		});
	}


	/* アンカーリンク＋ナビゲーション
	----------------------------------- */
	function shuttle() {
		$('.js-shuttle').each(function() {
			var $btn = $('.shuttle_anchor li');
			var $line = $('.line');

			$btn.find('a').on('click', function(e) {
				// ナビゲーション用のスムーススクロール設定
				var sectionTop = $($(this).attr('href')).offset().top;
				var navHeight = $('.shuttle_anchor').outerHeight();
				var linkSet = sectionTop - navHeight;
				var SPEED = 500;
				$('body,html').animate({scrollTop: linkSet}, SPEED);

				// ボタンクリック時の設定
				if ( $(this).closest('li').hasClass('active') ) {
					$(this).find($line).css({
						'width': '100%',
						'left': '0'
					});
				} else {
					$btn.removeClass('active');
					$btn.find($line).css({
						'width': '0',
						'left': '50%'
					});
					$(this).closest('li').addClass('active');
					$(this).find($line).css({
						'width': '100%',
						'left': '0'
					});
				}
				e.preventDefault();
			});

			// ボタンhover時の設定
			$btn.on({
				mouseenter: function() {
					$(this).addClass('hover');
					if ( !$(this).hasClass('active') ) {
						$(this).find($line).stop(false, true).animate({
							'width': '100%',
							'left': '0'
						}, 500, 'easeOutBounce');
					}
				},
				mouseleave: function() {
					$(this).removeClass('hover');
					if ( !$(this).hasClass('active') ) {
						$(this).find($line).stop(false, true).animate({
							'width': '0',
							'left': '50%'
						}, 500, 'easeOutBounce');
					}
				}
			});

			// 固定表示対象範囲の算出
			var shuttleTop = $('.js-shuttle').offset().top;
			var shuttleHeight = $('.js-shuttle').outerHeight();
			var navHeight = $('.shuttle_anchor').outerHeight();
			var targetStart = shuttleTop;
			// 枠内からナビゲーションがはみ出ない範囲で判定
			var targetEnd = shuttleTop + shuttleHeight - navHeight - 80;  //space

			console.log('shuttleTop -> ' + shuttleTop);
			console.log('shuttleHeight -> ' + shuttleHeight);
			console.log('targetEnd -> ' + targetEnd);

			// スクロール時に対象範囲内に入ったら
			$(window).scroll(function() {
				if ( $(this).scrollTop() >= targetStart && $(this).scrollTop() <= targetEnd ) {
					$('.shuttle_anchor').addClass('scroll');
					console.log('hit!!');
				} else {
					$('.shuttle_anchor').removeClass('scroll')
					console.log('no...');
				}
			});

		});
	}


	/* 実行
	----------------------------------- */
	$(function() {
		anchorLink();
		shuttle();
	});

})(jQuery);
