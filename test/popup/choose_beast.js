/*
動物の名前を受け取り、対応する画像の URL を返す
*/
function beastNameToURL(beastName) {
  switch (beastName) {
    case "Frog":
      return chrome.extension.getURL("beasts/frog.jpg");
    case "Snake":
      return chrome.extension.getURL("beasts/snake.jpg");
    case "Turtle":
      return chrome.extension.getURL("beasts/turtle.jpg");
  }
}

/*
ポップアップのクリックイベントをリッスンする。

動物以外がクリックされた場合は最初で return する。

そうでない場合、クリックされたノードの textContent から動物の名前を取得する。

アクティブなタブに content script "beastify.js" を差し込む。

続いて、アクティブなタブへの参照を取得し、"beastify.js" にメッセージを送信する。
このメッセージには、選択された動物に対応する画像の URL を含んでいる。
*/
document.addEventListener("click", function(e) {
  if (!e.target.classList.contains("beast")) {
    return;
  }

  var chosenBeast = e.target.textContent;
  var chosenBeastURL = beastNameToURL(chosenBeast);

  chrome.tabs.executeScript(null, {
    file: "/content_scripts/beastify.js"
  });

  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {beastURL: chosenBeastURL});
  });

});