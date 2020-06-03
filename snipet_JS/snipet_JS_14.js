/* ------------------------------------
フォーカスしているフォームのラベルにクラスをつける
------------------------------------ */

$("form :input").focus(function() {
	$("label[for='" + this.id + "']").addClass("labelfocus");
});
$("form :input").blur(function() {
	$("label[for='" + this.id + "']").removeClass("labelfocus");
});

//単純にclassを追加するならこちら
$('input[type=text],textarea').focus(function(){
	$(this).addClass('focus');
}).blur(function(){
	$(this).removeClass('focus');
});