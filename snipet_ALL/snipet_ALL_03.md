### Google Tag Managerを適用するときの注意

#### HTMLマークアップ構成
要素を囲むdivのclass名で判断するケースが多い  
div#wrp-XXXX　など、明確な命名規則で構成することを推奨  
※もしマークアップ構成を変更する場合、GTM設定も変更になるので、担当者に要連絡

#### js実装時
return falseは対象外となるので  
aタグを動作させない実装をするときは　preventDefault　を使う

#### CSSの対応
aタグを動作させなくした時点でGTMが拾ってくれなくなるので  
pointer: cursol;　を必ず設定しておくこと