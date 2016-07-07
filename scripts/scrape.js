// resize computerhope.com page size for the popup
var body = $('body');
console.log('scrape is running');

// test sending a message
chrome.runtime.sendMessage({}, function(response) {
  console.log(response.farewell);
});
