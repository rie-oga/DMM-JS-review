$(function() {
  $('#back a').on('click',function(event){
    $('body, html').animate({//animate()はjQueryの関数。'body, html'は、またはの意味。
      scrollTop:0//scrollTop:スクロール位置を取得。０は最上部を意味する。
    }, 800);
    event.preventDefault();//event.preventDefault();aタグの機能を無効にする
  });
});