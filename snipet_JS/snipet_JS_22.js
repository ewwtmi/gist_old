/* ------------------------------------
右クリックを無効
cookie操作のプラグインと組み合わせる方法もあり
参考：
http://javascript.webcreativepark.net/library/jquery-cookie
------------------------------------ */

$(function() {
	$(document).bind("contextmenu",function(e){
		return false;
	});
});