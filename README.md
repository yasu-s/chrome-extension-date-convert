# chrome-extension-date-convert

## 概要

* 日付フォーマットの文字列をミリ秒形式に変換するChrome拡張です。

## 使用ライブラリ

* moment

## 動作確認

### 1. サンプルのダウンロード

```bash
git clone git@github.com:yasu-s/chrome-extension-date-convert.git
```

### 2. 拡張機能のインストール

1. Chromeを起動
1. 拡張機能に遷移
1. 「デベロッパーモード」をON
1. 「パッケージ化されていない拡張機能を読み込む」をクリック
1. 「chrome-extension-date-convert/src」フォルダを選択

## 実行結果

![chrome-ext](https://user-images.githubusercontent.com/2668146/68124872-b117b480-ff53-11e9-996c-ff2cb59d45b4.gif)

## サンプルソース

### src/manifest.json

```json
{
  "manifest_version": 2,
  "name": "Date Convert",
  "version": "1.0",
  "description": "Date Convert",
  "browser_action": {
    "default_popup": "popup.html",
    "default_icon": "date.png"
  },
  "icons" : {
    "32": "date.png",
    "128": "date.png"
  }
}
```

### src/popup.html

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
</head>
<body style="margin: 0px;">
  <div style="padding: 10px; background: lemonchiffon;">
    <div>
      <h3 style="margin: 0px;">Date Convert</h3>
    </div>
    <div>
      <input type="text" id="txtDate" placeholder="yyyy/MM/dd HH:mm:ss">
    </div>
    <div>
      <input type="text" id="txtDateResult" readonly>
    </div>
  </div>
  <script src="/moment.min.js"></script>
  <script src="/popup.js"></script>
</html>
```

### src/popup.js

```js
const txtDate = document.getElementById("txtDate");

txtDate.addEventListener('keyup', function(){
  const result = document.getElementById("txtDateResult");
  const date = moment(txtDate.value).toDate();
  result.value = date.getTime().toString();
});
```

## 参考URL

* [Manifest File Format](https://developer.chrome.com/extensions/manifest)
