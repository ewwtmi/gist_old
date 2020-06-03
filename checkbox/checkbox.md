プラグインの方が圧倒的に楽だし時間かからないけど  
案件の都合上、やたら古いjQueryしか使えないというケースが発生（ちなみに1.4.2）  
iCheckは1.7.x以降でないと対応していないようだったので、取り急ぎ「それっぽいもの」を作ってみた

参考：  
http://www.maratz.com/blog/archives/2006/06/11/fancy-checkboxes-and-radio-buttons/

jQuery版デモ  
http://webdesign.maratz.com/lab/fancy-checkboxes-and-radio-buttons/jquery.html

ここから、不要なものを除いたりinputタグ直の指定をclass指定にしたり  
（案件のレギュレーション上、input:checkedなど直接の指定が不可だった）

書いてみたら案外簡単だったので記録しておく。  
jQueryが動けばOKなので、click部分の書き方だけ注意しておけば、バージョンも不問と思われる  
ただしIE6では動作確認ができていない。IE7、8は動いた  
input:checkedで指定したら動くかも？
