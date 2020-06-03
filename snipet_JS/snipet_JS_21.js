/* ------------------------------------
jQueryでインクルード
------------------------------------ */

$(function(){
  jQuery('#news_html').load("/include/news.html");
  return false;
});

// .loadboxの中に、index.htmlの、#openという要素を読み込ませる
$('.loadbox').load('index.html #open');