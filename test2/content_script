/*
beastify():
* document.body に含まれるノードをすべて削除し、
* 選択された動物を挿入し、
* リスナを削除する 
*/
function beastify(request, sender, sendResponse) {
  removeEverything();
  insertBeast(request.beastURL);
  chrome.runtime.onMessage.removeListener(beastify);
}

/*
document.body に含まれるノードをすべて削除する
*/
function removeEverything() {
  while (document.body.firstChild) {
    document.body.firstChild.remove();
  }
}

/*
動物の画像の URL を受け取り、画像を指す IMG 要素の作成・スタイル適用を行い、
作成したノードをドキュメント内に挿入する
*/
function insertBeast(beastURL) {
  var beastImage = document.createElement("img");
  beastImage.setAttribute("src", beastURL);
  beastImage.setAttribute("style", "width: 100vw");
  beastImage.setAttribute("style", "height: 100vh");
  document.body.appendChild(beastImage);
}

/*
アドオンからのメッセージを受信するリスナに beastify() を指定する
*/
chrome.runtime.onMessage.addListener(beastify);