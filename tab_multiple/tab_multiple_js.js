  $('.boxTabChange').each(function() { //繰り返し処理

      //変数の設定
      var tabSet = $(this);
      var tabBtn = tabSet.find('.tabBtnList li');
      var tabBtnActive = tabSet.find('.tabBtnList li.active');
      var tabBlock = tabSet.find('.tabContents .boxTabBlock');
      var tabBlockID = $(tabBtnActive).find('a').attr('href');

      //初期設定：最初のタブコンテンツを表示
      $(tabBlock).hide();
      $('.tabContents .boxTabBlock' + tabBlockID).show();
      $('.tabBtnList li:first-child').removeClass('default');
      $('.tabBtnList li:first-child').addClass('active');
      $('.tabContents .boxTabBlock:first-child').show();

      //切り替え
      $(tabBtn).on('click', function(e) {
          if ($(this).hasClass('active')) {
              $($(this).find('a').attr('href')).show(); //フェードなし
          } else {
              $(tabBtn).removeClass('active');
              $(this).addClass('active');
              $(tabBlock).fadeOut(1000).hide();
              $($(this).find('a').attr('href')).fadeIn(1000).show();
          }
          e.preventDefault();
      });

      //ロールオーバー時のボタン用の処理とかをここに書く

      //高さ揃えの再実行はこのへんに
      //例
      //$('div).heightLine();
      //$('.tabBtnList li').on('click', function(e) {
      //    $('div).heightLine();
      //    e.preventDefault();
      //});

  });