### 画面サイズに合わせてclassを切り替える場合

```JS
$(function() {
	function checkWindowSize() {
		if ( $(window).width() > 1200 ) {
			$('body').addClass('large');
		}
		else {
			$('body').removeClass('large');
		}
	}
	$(window).resize(checkWindowSize);
});
```