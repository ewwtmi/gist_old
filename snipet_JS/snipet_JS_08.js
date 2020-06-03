/* ------------------------------------
外部リンクを別ウィンドウで開く
jQuery側で_blank属性を追加する場合
------------------------------------ */

// 外部リンクは全て別ウインドウにする場合
$('a[href^="http://"]').attr("target", "_blank");

// rel="external" 属性を追加した場合のみ別ウインドウにする場合
// <a href="http://blog.verygoodtown.com" rel="external">
$("a[rel='external']").click(function(){
  this.target = "_blank";
});