IE6、7の場合、開閉したあとに下部の余白・borderが消える  
heightLine.jsと同様に、高さを検出する際の挙動がうまくいってなかった  
スライドさせず、addClassでdisplay:none切り替えに変更したところ回避できた

```JS
// 昔使ってた古いやつ
$(".open").click(function(){
    $("#slideBox").slideToggle("slow");
});

// 複数展開させる場合は
$("#sideMenu .exp").click(function(){
     $(this).children(".expandMenu").slideToggle("fast");
});
```

### リンク先の展開状態を指定する場合

```HTML
<div id="qa01" class="expandBlock">
<dl>
<dt><span class="question">Q1.</span>タイトル</dt>
<dd>
<p class="answer">A1.</p>
<div class="innerBlock">
<p>テキスト</p>
<p class="close"><a href="javascript:void(0);" onclick="return false;">閉じる</a></p>
</div>
</dd>
</dl>
</div><!-- //.expandBlock -->
```

```CSS
.expandBlock dl dt {
     cursor: pointer;
}
.expandBlock dl dt.expand {

}
.expandBlock dl dd {
     display: none;
}
.expandBlock dl dd.open {
     display: block;
}
*:first-child+html .expandBlock dd { /* IE7 Hack／閉じた時にborderが消えるため追加 */
     border-bottom: 1px solid #fbfbfb;
}
* html .expandBlock dd { /* IE6 Hack／閉じた時にborderが消えるため追加 */
     border-bottom: 1px solid #fbfbfb;
}
```

```JS
// タイトル部分
$('.expandBlock dl dt').click(function(){
     $(this).parent('.expandBlock dl').children('dd').toggleClass('open');
     $(this).toggleClass('expand');
});

// 閉じるボタン
$('.expandBlock dl dd .close').click(function(){
     $(this).parent().parent().parent('.expandBlock dl').children('dd').removeClass('open');
     $(this).parent().parent().parent().children('.expandBlock dl dt').removeClass("expand");
});

// 展開時の指定
var hash = window.location.hash;
if(hash == "#qa01") {
     $("#qa01 dl dd").addClass("open");
     $("#qa01 dl dt").addClass("expand");
}
if(hash == "#qa02") {
     $("#qa02 dl dd").addClass("open");
     $("#qa02 dl dt").addClass("expand");
}
```