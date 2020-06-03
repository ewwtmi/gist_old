//フェード表示版 -----------------------------------------------
//初期設定
$('.animFade .boxCaption').css({
		'opacity': '0'
});
//表示
$('.animFade .boxThumb').hover(
		function() {
				$(this).children('.boxCaption').stop().animate({
						'opacity': '1'
				}, 500);
		},
		function() {
				$(this).children('.boxCaption').stop().animate({
						'opacity': '0'
				}, 500);
		}
);

//スライド表示版（下から上へ） -----------------------------------------------
//初期設定
$('.animSlideUp .boxCaption').css({
		'top': '150px'
});
//表示
$('.animSlideUp .boxThumb').hover(
		function() {
				$(this).children('.boxCaption').stop().animate({
						'top': '0'
				}, 500);
		},
		function() {
				$(this).children('.boxCaption').stop().animate({
						'top': '150px'
				}, 500);
		}
);