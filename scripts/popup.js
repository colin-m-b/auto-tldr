"use strict";
var form = document.getElementById("form");
var body = document.body;

var heightSize = 0;
var widthSize = 0;

// for dynamic popup window open
function sizeIncrease(timestamp) {
  if (heightSize <= 480) heightSize += 30;
  if (widthSize <= 220) widthSize += 14;
  body.style.height = heightSize + "px";
  body.style.width = widthSize + "px";
  if (widthSize <= 220 || heightSize <= 480) {
    window.requestAnimationFrame(sizeIncrease);
  } else form.submit();
}
window.requestAnimationFrame(sizeIncrease);

/*
function bodySizeInc() {
  var newHeight = heightSize.split("p");
  var newWidth = widthSize.split("p");
  heightSize = Number(newHeight[0]) + 6 + "px";
  widthSize = Number(newWidth[0]) + 4 + "px";
  body.style.height = heightSize;
  body.style.width = widthSize;
}
//setInterval(bodySizeInc, 4)
*/
