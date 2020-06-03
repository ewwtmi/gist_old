### グロナビ下層メニューをプルダウン式で実装した時のトラブル

トリガーとなるボタン（li）内にリストタグを入れ子して・・・という構造だったのだが  
トリガー（起点）の指定によってはバブリングを起こす、または動作が想定と逆になるケース発生。  
hoverイベントではなく、mouseenter等に切り分けて、それぞれslideUp、slideDownで対処。  
※再現できた環境が割と低スペックPC、かつ無茶な操作だったので  
どこまで対応するかは別問題だけど、留意はしておいて損はない。hoverに頼りすぎない

```JS
// 修正前
$btn = $('.gnav li');    //ここが重複してた
$gnavBtn.hover(function() {
    $(this).addClass('hover');
    $($(this).find('.lower')).stop(false, true).slideToggle(300);
}, function() {
    $(this).removeClass('hover');
    $($(this).find('.lower')).stop(false, true).slideToggle(300);
});

// 修正後
$btn = $('.gnav-btn');    //トリガーを絞る
$gnavBtn.on({
    mouseenter: function() {
        $(this).addClass('hover');
        $($(this).find('.lower')).stop(true, false).slideDown(300);
    },
    mouseleave: function() {
        $(this).removeClass('hover');
        $($(this).find('.lower')).stop(true, false).slideUp(300);
    }
});
```