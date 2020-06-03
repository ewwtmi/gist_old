## IE10
直接効き目がある書き方はないみたいなので、やり方に工夫が必要。  
http://bl.ocks.org/feo52/5fa7d986fc416b11ae0d  
http://qiita.com/feo52/items/7d8176aa99989e9d05f6

### まずモダンブラウザ用
```CSS
XXXXX {
	background-color: rgba(0, 0, 0, 0.6);
}
```

### IE9以下に適用
```CSS
XXXXX  {    /* for IE9 under */
	background-color: #666\9;
}
```

### IE10以上に適用＋モダンブラウザ用で上書き
```CSS
XXXXX {
	background-color: #666\9;    /*IE10以下用*/
}

@media all and (-ms-high-contrast:none){
	XXXXX {
		background-color: transparent\0;    /*ここでリセットかける（IE10以上に適用される）*/
		background-color: rgba(0, 0, 0, 0.6);    /*ここでモダンブラウザ用のを持ってきて上書き。バックスラッシュはいらない！*/
	}
}
```

上書きに上書きを重ねて隙間を作るような感じ・・・  
これで、ちょうど隙間にあるIE10だけHackが効く  
※たぶん正解ではない