// resize computerhope.com page size for the popup
var body = $('body');
console.log('scrape is running');

//api key: DA41C62EB0



// var url = chrome.browserAction.onClicked.addListener(function(tab) {
//     var res = encodeURIComponent(tab.url);
//     return res;
// });

// $.getJSON("http://api.smmry.com/&SM_API_KEY=DA41C62EB0&SM_LENGTH=7&SM_WITH_BREAK&SM_" + url, function(data) {
// 	//append data to popup page somewhere
// })

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
	console.log(footerArr)
	return [footerArr, sectionArr, articleArr];
}

var arrays = aTags();

chrome.runtime.sendMessage({
	arrays: arrays,
	article: arrays[2],
	section: arrays[1],
	footer: arrays[0]
}, function(response) {
});
	