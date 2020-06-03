/* ------------------------------------
リンクテキストのあるDiv全体をクリック（タップ）できるようにする
aタグ範囲を広げるだけでなく、補助的に
------------------------------------ */

// 通常リンク（_self）
$(".clickable").click(function(e){
     window.location=$(this).find("a").attr("href");
     e.preventDefault();
});

//別ウィンドウで開く（_blank）
$(".clickable02").click(function(e){
     window.open($(this).find("a").attr("href"), '_blank');
     e.preventDefault();
});