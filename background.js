/*
* background.js
* by Mario Toledo (mariotoledo12@gmail.com)
* 
* in charge of update the badge count every minute
*/

var pollInterval = 1000 * 60; //1 minute, in milliseconds

function startRequest() {
    console.log('teste');
    alert('calling me!');
    updateOnlineStreams();
    chrome.browserAction.setBadgeText({ text: '' + onlineStreams.length });
    window.setTimeout(startRequest, pollInterval);
}