//初期値
var flagSP = false;
//ブレイクポイント
var breakPoint  = 736;    // iPhone6 Plus横

//ウィンドウ幅を取得
var windowWidth = window.innerWidth;
//innerWidthで取得がうまくいかない時は下記
//var windowWidth = $(window).width();

//設定したブレークポイントと現在のウィンドウ幅を比較して
//ブレークポイントより小さければ、フラグをtrue（＝SPで表示中と判定）とする
if (windowWidth <= breakPoint) {
	flagSP = true;
}

//PC版で実行
if ( flagSP === false ) {
	$(function(){
		//ここに書く
		console.log('PC版');
	});
}

//SP版で実行
if ( flagSP === true ){    //上記PC版用とelseでつなげて書いても可	
$(function(){
		//ここに書く
		console.log('SP版');
	});
}