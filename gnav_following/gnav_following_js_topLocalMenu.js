// スムーススクロール（アンカーリンク）を同時に実装している場合は、
// スムーススクロール側で、到達位置の調整が必要になるので注意。
// 下記の場合は、グロナビのバーの高さが40pxだったので、その分ずらして調整。

// ↓こんな感じでずらしverのjsを関数で作っておき、使い回した。

function topLocalMenu() {
     var $localMenuBtn = $('.localnav .listNav li a.linkNavi');

     $localMenuBtn.on('click', function(e) {
          $('html,body').stop().animate({
               scrollTop: $($(this).attr('href')).offset().top - 40
          }, 'slow');
          e.preventDefault();
     });

}