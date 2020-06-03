//初期値
var uaFlag = false;
//MacのUA
var uaMac = navigator.userAgent.indexOf('Mac');
//UAに上記「Mac」があったら、フラグをtrue（＝Macで表示中と判定）
if (uaMac != -1) {
	uaFlag = true;
}

//判定
function UaCheck() {
	if (uaFlag) { //フラグがtrue（＝Macで表示中）だったら
		//Mac判別用classを追加
		$('body').addClass('mac');

		//サンプル：判別結果を出力
		console.log('Macです');
	}
	
	else {    //それ以外
		//サンプル：判別結果を出力
		console.log('それ以外≒Windows');
	}
}