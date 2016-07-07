// resize computerhope.com page size for the popup
var html = document.getElementsByTagName("html");
var width = 220;

function widthIncrease(timestamp) {
  width += 65;
  html[0].style.width = width + "px";
  //if (width >= 600) clearInterval(intervalHandle);
  if (width <= 600) {
    window.requestAnimationFrame(widthIncrease);
  }
}

window.requestAnimationFrame(widthIncrease);

// box to cover page while its loading and resizing
/*
var newItem = document.createElement("div");
var list = document.getElementsByTagName("h1");
list.insertBefore(newItem, list.childNodes[0]);
*/
