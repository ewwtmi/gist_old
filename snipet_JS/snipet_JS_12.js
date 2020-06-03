/* ------------------------------------
特定ブラウザのユーザーにメッセージを表示
※下記はIE6の例
※現在　browser.version　そのものが使えなくなっているので参考までに
------------------------------------ */

if ( $.browser.msie && $.browser.version <= 6 ) {
  $('body').prepend('<div class="errorBlock">テキスト</div>');
}