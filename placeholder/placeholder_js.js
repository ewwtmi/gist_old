//変数の設定
var $searchPlaceholder = $('.keyword .placeholder');
var $searchKeyword = $('.keyword .inputTxt');

//プレースホルダー表示

// プレースホルダーをクリックしたら入力欄にフォーカス
$searchPlaceholder.on('click', function(e) {
    $searchKeyword.focus();
});

 // 入力欄にフォーカスが当たったらプレースホルダーを非表示
$searchKeyword.on('focus', function(e) {
    if ($(this).val() === '') {
        $searchPlaceholder.css('display', 'none');
    }
}).on('blur', function(e) {
     // フォーカスが外れて入力値が空だったらプレースホルダー表示
    if ($(this).val() === '') {
        $searchPlaceholder.css('display', 'block');
    }
}).on('change', function(e) {
    // 内容が変更されて入力値が空だったらプレースホルダー表示
    if ($(this).val() === '') {
        $searchPlaceholder.css('display', 'block');
    }
}).on('keyup', function(e) {
     // キーアップを拾って入力値が空ならプレースホルダー表示。入力されていれば非表示
    var _display = ($(this).val() === "") ? 'block' : 'none';
    $searchPlaceholder.css('display', _display);
});