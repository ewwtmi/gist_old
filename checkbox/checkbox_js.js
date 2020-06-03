function setCheckbox() {
		//もし対象input要素が見つかったら実行
		if ($('.input-check').length) {

				//クリック処理：input要素をクリックしたら
				$('.input-check').on('click',function(){
						if(this.checked){
								//チェックがついたら親要素にactive追加
								$(this).parent().parent('.btn-check').addClass('active');
						} else {
								//チェックがはずれたら親要素からactive削除
								$(this).parent().parent('.btn-check').removeClass('active');
						}
				});

				//繰り返し処理：対象input要素がチェック済み or チェックついたら親要素にactive追加
				$(".input-check").each(function(){
						if($(this).is(":checked")){
								$(this).parent().parent('.btn-check').addClass('active');
						}
				});

		}
}