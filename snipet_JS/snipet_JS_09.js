/* ------------------------------------
ロールオーバーでフェード
※いつものロールオーバー用jsを加工すると構成がややこしくなるので注意

画像A→画像Bへフェードして切り替える場合は下記プラグイン
http://d.hatena.ne.jp/KAZUMiX/20071017/rollover2
画像に「_r.gif」「_o.gif」と命名しておく必要がある

参考：
CSS3アニメーションとjQueryのfadeOut/fadeInを組み合わせると危険
http://migi.hatenablog.com/entry/2013/06/03/233610
------------------------------------ */

// 同じ画像をフェードで半透明にするだけならこれでOK
$(".fade").hover(function(){
  $(this).fadeTo("normal", 0.7);
},function(){
  $(this).fadeTo("normal", 1.0);
});

