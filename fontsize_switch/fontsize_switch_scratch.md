### プラグインを使わない場合

やろうと思えばできる。できた。  
けどCookieとか面倒なのでプラグインにおまかせしたい  
http://codepen.io/ewwtmi/pen/xgmaba

```JS
$(function() {
	// Reset the font size(back to default)
	var originalFontSize = $('html').css('font-size');
	
	$(".resetFont").click(function(){
		$('html').css('font-size', originalFontSize);
	});

	// Increase the font size(bigger font0
	$(".increaseFont").click(function(){
		var currentFontSize = $('html').css('font-size');
		var currentFontSizeNum = parseFloat(currentFontSize, 10);
		var newFontSize = currentFontSizeNum*1.2;
		$('html').css('font-size', newFontSize);
		return false;
	});

	// Decrease the font size(smaller font)
	$(".decreaseFont").click(function(){
		var currentFontSize = $('html').css('font-size');
		var currentFontSizeNum = parseFloat(currentFontSize, 10);
		var newFontSize = currentFontSizeNum*0.8;
		$('html').css('font-size', newFontSize);
		return false;
	});
});
```

```HTML
<a href="#" class="resetFont">元に戻す</a>
<a href="#" class="increaseFont">+</a>
<a href="#" class="decreaseFont">-</a>
```