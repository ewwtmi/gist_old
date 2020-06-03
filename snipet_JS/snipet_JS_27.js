/* ------------------------------------
画面の中心に要素を配置
モーダルウィンドウの配置などに使ったりする
要素の幅、高さを取得しているのである程度なりゆき配置が効く
------------------------------------ */

$(function() {
	jQuery.fn.center = function () {
		this.css("position","absolute");
		this.css("top", ( $(window).height() - this.height() ) / 2+$(window).scrollTop() + "px");
		this.css("left", ( $(window).width() - this.width() ) / 2+$(window).scrollLeft() + "px");
		return this;
	}
	$("#my-id").center();
});