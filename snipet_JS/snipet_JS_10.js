/* ------------------------------------
ボタンクリック＋簡易バリデーション
------------------------------------ */

// ボタンクリック時
$(function(){
	$("fieldset label img").mouseover(function(e){
		var src = $(this).attr('src').replace('_off','_on');
		$(this).attr('src',src);
	})
	.mouseout(function(e){
		var src = $(this).attr('src').replace('_on','_off');
		$(this).attr('src',src);
	})
	.click(function(e) {
		var label = $(this).parent();
		var lFor = label.attr('for');
		var lClass = label.attr('class');
		var btnId = $("#"+lFor).val();
		var fsetId = label.parent().attr('id');

		$("#" + lClass).val(btnId);

		$("#" + fsetId + " img").each(function(i) {
			var src = $(this).attr('src').replace('_select','_off');
			$(this).attr('src',src);
		});

		$(this).attr('src', $(this).attr('src').replace('_off','_select'));
		$(this).attr('src', $(this).attr('src').replace('_on','_select'));
	})
});

// バリデーション
$(function(){
	$(".chk a").click(function(e){
		var v = formValidation();
		if (v) {
			$("#questionForm").submit();
		} else {
			window.alert("全ての質問に答えてください");
		}
		return false;
	});

	$(".chk a img").mouseover(function(e){
		var src = $(this).attr('src').replace('_off','_on');
		$(this).attr('src',src);
	})
	.mouseout(function(e){
		var src = $(this).attr('src').replace('_on','_off');
		$(this).attr('src',src);
	});
});

function formValidation() {
	var r = true;
	$(".answers").each(function() {
		if (!$(this).val()) {
			r = false;
		}
	});
	return r;
}