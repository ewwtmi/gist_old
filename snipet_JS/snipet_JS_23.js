/* ------------------------------------
フォームの初期値を消す
------------------------------------ */

$(function() {
	$("input.text1").val("Enter your search text here");
	textFill($('input.text1'));
});

//input focus text function
function textFill(input){
	var originalvalue = input.val();
	input.focus( function(){
		if( $.trim(input.val()) == originalvalue ){ input.val(''); }
	});
	input.blur( function(){
		if( $.trim(input.val()) == '' ){ input.val(originalvalue); }
	});
}