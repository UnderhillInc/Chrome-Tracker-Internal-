// Background script to manage state persistence if needed

chrome.runtime.onInstalled.addListener(() => {
    console.log('Extension installed.');
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === 'complete' && tab.url.includes('docs.google.com/forms')) {
        chrome.scripting.executeScript({
            target: { tabId: tabId },
            files: ['content.js']
        });
    }
});
