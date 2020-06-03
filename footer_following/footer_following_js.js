//変数の設定
var $pagetopBtn = $('#pagetop');
var $cmnFooter = $('.shopCommonFooter');

$pagetopBtn.hide(); //初期設定：非表示
//show,hideで表示切り替えを設定すると、inline要素はCSSで上書きしてても強制的にinlineになる
//div要素にしておくのが無難。aタグにトリガー持たせているとよくハマる。

$(window).scroll(function() {
		//表示
		if ($(this).scrollTop() > 300) { //ページ上部からこの数値pxの範囲を超えたら表示する
				$pagetopBtn.fadeIn();
		} else {
				$pagetopBtn.fadeOut();
		}

		//位置固定
		//ページの高さを取得
		pageHeight = $(document).height();
		//フッターの高さを取得
		footerHeight = $cmnFooter.innerHeight();
		//ウィンドウの高さ＋スクロールした分＝現在位置
		pagePosition = $(window).height() + $(window).scrollTop();

		//現在位置がフッター位置に重なったらボタン位置のCSSを変更
		if (pageHeight - pagePosition <= footerHeight) {
				$pagetopBtn.css({
						'position': 'absolute',
						'bottom': footerHeight + 20
				});
		} else {
				$pagetopBtn.css({
						'position': 'fixed',
						'bottom': '20px'
				});
		}

});