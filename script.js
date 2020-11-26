$('#tab-contents .tab[id != "tab1"]').hide();//ある値に等しくない要素を非表示にする
//$()関数→　特定の属性を持つ要素や属性値を絞り込むことができる　$('要素[属性]')
$('#tab-menu a').on('click', function(event) {
  $("#tab-contents .tab").hide();//一旦すべてを非表示
  $("#tab-menu .active").removeClass("active");//tab1からactiveクラスを削除
  $(this).addClass("active");//クリックされたものにactiveクラスを付与
  $($(this).attr("href")).show();//attr()は、HTML要素の属性を取得したり設定できるメソッド、href属性を取得し、showで表示
  event.preventDefault();
});