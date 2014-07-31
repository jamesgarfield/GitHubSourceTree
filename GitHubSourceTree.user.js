// ==UserScript==
// @name       GitHubSourceTree
// @namespace  http://really-serious.biz/
// @version    1.0.1
// @description  Adds a "Clone in SourceTree" button to github pages
// @respository  https://github.com/jamesgarfield/GitHubSourceTree
// @match https://*github.com/*
// @copyright  2014+, James Garfield
// ==/UserScript==

(function(){
	const $ = document.querySelectorAll.bind(document);
    
    const gitHubNode = $(".clone-options + a")[0]

    if (!gitHubNode) {
    	return;
    }

    const parentNode = gitHubNode.parentNode;
    const insertBeforeNode = gitHubNode.nextSibling;
    const gitURL = $(".clone-url-box .js-url-field")[0].value
    
    var sourceTreeNode = gitHubNode.cloneNode();
    sourceTreeNode.href = 'sourcetree://cloneRepo/' + gitURL;
    sourceTreeNode.innerHTML = '<span class="octicon octicon-device-desktop"></span>Clone in SourceTree';
    
    parentNode.insertBefore(sourceTreeNode, insertBeforeNode);
    
})()

