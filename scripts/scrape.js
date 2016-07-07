// resize computerhope.com page size for the popup
var body = $('body');
console.log('scrape is running');

function aTags() {
	//create and populate array for article tags
	var articleArr = [];
	$("article a").each(function () {
		var parentTag = $( this ).parent().get( 0 ).tagName;
		var textStuff = $(this).text();
		var obj = {
			parent: parentTag,
			href: this.href,
			text: textStuff
		}
		articleArr.push(obj);
	})

	//create and populate array for section tags
	var sectionArr = [];
	$("section a").each(function () {
		var parentTag = $( this ).parent().get( 0 ).tagName;
		var textStuff = $(this).text();
		var obj = {
			parent: parentTag,
			href: this.href,
			text: textStuff
		}
		sectionArr.push(obj);
	})

	//create and populate array for footer tags
	var footerArr = [];
	$("footer a").each(function () {
		var parentTag = $( this ).parent().get( 0 ).tagName;
		var textStuff = $(this).text();
		var obj = {
			parent: parentTag,
			href: this.href,
			text: textStuff
		}
		footerArr.push(obj);
	})
	console.log('article length: ' + articleArr.length, "footer length: " + footerArr.length)
}

aTags();

// test sending a message
chrome.runtime.sendMessage({
	article: articleArr,
	section: sectionArr,
	footer: footerArr
}, function(response) {
  console.log(response.farewell);
});
