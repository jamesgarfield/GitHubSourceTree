// ==UserScript==
// @name       GitHubSourceTree
// @namespace  http://really-serious.biz/
// @version    1.1.1
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
    //Find the clone url for this repo
    const gitURL = $(".js-url-field")[0].value

    var sourceTreeNode = gitHubNode.cloneNode();
    sourceTreeNode.href = 'sourcetree://cloneRepo/' + gitURL;
    sourceTreeNode.innerHTML = '<span class="octicon octicon-device-desktop"></span>Clone in SourceTree';
    
    parentNode.insertBefore(sourceTreeNode, insertBeforeNode);
}