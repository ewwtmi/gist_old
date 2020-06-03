//変数の設定
var $shopNavi = $('.shopGlobalNav');
var $shopFooter = $('.shopTopFooter');
var $cmnFooter = $('.shopCommonFooter');
var $localMenuBtn = $('.shopTopLocalnav .listNav li a.linkNavi');

//グローバルナビゲーション 位置固定
$(window).scroll(function() {
    if ($(this).scrollTop() > 170) {   //ヘッダー高さ（これより下にスクロールしたら追従開始）
        $shopNavi.css({
            'position': 'fixed',    //追従する
            'top': '0'
        });
        //グロナビ追従中のページ内リンクメニュー
        $localMenuBtn.on('click', function(e) {    //いつものスムーススクロール用js
            $('html,body').stop().animate({
                scrollTop: $($(this).attr('href')).offset().top
            }, 'slow');
            e.preventDefault();
        });
    } else {    //スクロールの数値がヘッダーよりも小さい場合は
        $shopNavi.css({
            'position': 'relative',    //追従しない
            'top': 'auto'
        });
        
        //グロナビ追従解除後は通常のページ内リンクメニューの動作を実行
        //topLocalMenu();    //下記のスムーススクロール用jsメモを参照
        
        //↑ここにはいつものスムーススクロールのjsを入れてるけど
        //scrollTopの値からヘッダーぶんのpxを差し引いたものにしておく。
        //例：scrollTop: $($(this).attr('href')).offset().top - 40
    }
});