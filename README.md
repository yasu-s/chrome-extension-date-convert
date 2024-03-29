# chrome-extension-date-convert

## Overview

* A Chrome extension that converts date format strings to millisecond format.

## Used library

* moment.js

## Usage

### 1. Download Sample

```bash
git clone git@github.com:yasu-s/chrome-extension-date-convert.git
```

### 2. Install extensions

1. Launch Chrome.
1. Transition to extensions.
1. Turn on "Developer mode".
1. Click “Load unpacked”
1. Select "chrome-extension-date-convert/src" folder.

## Execution result

![chrome-ext](https://user-images.githubusercontent.com/2668146/68124872-b117b480-ff53-11e9-996c-ff2cb59d45b4.gif)

## Sample Source

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

## URL

* [Manifest File Format](https://developer.chrome.com/extensions/manifest)
