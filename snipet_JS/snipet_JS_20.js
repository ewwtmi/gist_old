/* ------------------------------------
チェックボックス全て選択/解除
------------------------------------ */

$('.chkAll a').click(function(){
	$('#checkArea input[type=checkbox]').prop('checked', true);
});
$('.chkClear a').click(function(){
	$('#checkArea input[type=checkbox]').prop('checked', false);
});