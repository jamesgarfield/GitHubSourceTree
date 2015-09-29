// ==UserScript==
// @name       GitHubSourceTree
// @namespace  http://really-serious.biz/
// @version    1.1.3
// @description  Adds a "Clone in SourceTree" button to github pages
// @respository  https://github.com/jamesgarfield/GitHubSourceTree
// @updateURL  https://github.com/jamesgarfield/GitHubSourceTree/raw/master/GitHubSourceTree.user.js
// @match https://github.com/*
// @match https://*.github.com/*
// @grant none
// @licence MIT(3)
// @copyright  2014+, James Garfield
// ==/UserScript==

//Firefox/GreaseMonkey apppears to not like IIFEs, so use of a named function is required
ghst_init();
function ghst_init(){
    const $ = document.querySelectorAll.bind(document);

    //GitHub's "Clone in Desktop" Button
    const gitHubNode = $(".clone-options + a")[0]
    const parentNode = gitHubNode.parentNode;

    //Insert our button between the GitHub Clone button and whatever is after it.
    const insertBeforeNode = gitHubNode.nextSibling;
    
    var sourceTreeNode = gitHubNode.cloneNode();
    sourceTreeNode.href = '#';
    sourceTreeNode.innerHTML = '<span class="octicon octicon-device-desktop"></span>&nbsp;Clone in SourceTree';
		sourceTreeNode.onclick = function() {
			//Find the clone url for this repo. We peek the currently selected schema.
			const gitURL = $("div.js-clone-url.open")[0].querySelector(".js-url-field").value;
			
			window.location.href='sourcetree://cloneRepo/' + gitURL;
			return false;
		};
    
    parentNode.insertBefore(sourceTreeNode, insertBeforeNode);
}
