//関数（function）：繰り返し使われる一連の処理を１つにまとめたもの。同じプログラムを書く代わりにこの関数を呼び出すことで処理実行
function 関数名（引数：入力する値）{
  処理
  return 戻り値：出力する値；
}

function addString(strA) {
  var addStr = "Hello" + strA;
  return addStr;
}

var alertString;
alertString = addString("WebCamp");
alert(alertString);
function addString(strA){
  var addStr = "Hello" + strA;
  return addStr;
}//Hello WebCamp

var promptStr = prompt('何か好きな文字を入力してください');
alert(promptStr);//入力された文字がprompt()関数の戻り値として変数「PromptStr」に格納され、アラートウィンドウに表示される

var user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください。');
alert('あなたの選んだ手は' + user_hand + 'です。');

function getJShand() {
  var js_hand_num = Math.floor( Math.random() * 3 );//Math：与えられた数字のうち最大のものを出す、3のところはランダム生成したい整数値の＋１を指定（０～２）
  if(js_hand_num == 0){
    js_hand = "グー";
  }else if(js_hand_num == 1){
    js_hand = "チョキ";
  }else if(js_hand_num == 2){
    js_hand = "パー";
  }
  return js_hand;
}

//じゃんけんの手を入力してもらうプロンプト欄を作成
var user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください。')
while(user_hand != ("グー"&&"チョキ"&&"パー"&&null)){
  alert('グー・チョキ・パーのいずれかを入力してください。');
  user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください。');
}
//じゃんけんの手をランダムに作成する関数を呼び出す
var js_hand = getJShand();
//ユーザーの手とJavascriptのじゃんけんの手を比べる関数を呼び出し、結果をjudgeに入れる
var judge = winLose(user_hand, js_hand);
//結果を表示する
if (user_hand != null) {
  alert('あなたの選んだ手は' + user_hand + 'です。\nJavaScriptの選んだ手は' + 'です。\n結果は' + judge +'です。');
}else{
  alert('またチャレンジしてね。')
}
//ランダムでじゃんけんの手を作成する関数
function getJShand(){
  var js_hand_num = Math.floor( Math.random() * 3 );
  var hand_name;
  if(js_hand_num == 0){
    hand_name = "グー";
  }else if(js_hand_num == 1){
    hand_name = "チョキ";
  }else if(js_hand_num == 2){
    hand_name = "パー";
  }
  return hand_name;
}
//ユーザーの手とJavascriptのじゃんけんの手を比べる関数
function winLose(user, js){
  var winLoseStr;
  if(user == "グー"){
    if(js == "グー"){
      winLoseStr = "あいこ";
    }else if(js == "チョキ"){
      winLoseStr ="勝ち";
    }else if(js == "パー"){
      winLoseStr = "負け";
    }
  }else if(user == "チョキ"){
    if(js == "グー"){
      winLoseStr = "負け";
    }else if(js == "チョキ"){
      winLoseStr = "あいこ";
    }else if(js == "パー"){
      winLoseStr = "勝ち";
    }
  }else if(user == "パー"){
    if(js == "グー"){
      winLoseStr = "勝ち";
    }else if(js == "チョキ"){
      winLoseStr = "負け";
    }else if(js == "パー"){
      winLoseStr = "あいこ";
    }
  }
  return winLoseStr;
}