/* ------------------------------------
aタグ無効
最近は　preventDefault　を使うのがほとんど
------------------------------------ */

$example.on('click',function(e) {
  e.preventDefault();
});

$example.on('click',function(e) {
  return false;
});