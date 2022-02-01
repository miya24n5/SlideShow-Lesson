// オプションを指定してSkipprの実行
$('.theTarget').skippr({

  //スライドショーの変化
  transition : 'fade',

  //変化にかかる時間
  speed : 1000,

  //easingの種類
  easing : 'easeOutQuart',

  //ナビゲーションの形("block" or "bubble")
  navType : 'bubble',

  //小要素の種類
  childrenElementType : 'div',

  //ナビゲーション矢印の表示(trueで表示)
  arrows : true,

  //スライドショーの自動再生(falseで自動再生なし) (trueで自動再生あり)
  autoPlay : true,

  //自動再生のスライド切替感覚(ミリ秒)
  autoPlayDuration : 5000,

  //キーボードの矢印キーによるスライド送りの設定(trueで有効)
  keyboardOnAlways : true,

  //1枚目のスライド表示時に戻る矢印を表示するかどうか [false]:矢印を隠さない [true]:矢印を隠す
  hidePrevious : false
});