"use strict";
//var form = document.getElementById("form");
var form = $('#form');
var body = $('body');
var box = $('#box');

// jquery test
var newBox = $('<div><h1>Auto TLDR</h1></div>');
body.append(newBox);

// pass in the jquery file and scraping script into the current page
chrome.tabs.executeScript(null, {file: "scripts/jquery-3.0.0.min.js"}, function() {
  chrome.tabs.executeScript(null, {file: "scripts/scrape.js"});
});

// sendReponse is a method
chrome.runtime.onMessage.addListener(
  function (request, sender, sendResponse) {

  }
);


// for dynamic popup window open
var heightSize = 0;
var widthSize = 0;

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
