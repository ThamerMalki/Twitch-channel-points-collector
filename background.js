chrome.runtime.onInstalled.addListener((tab) => {
  chrome.browserAction.setBadgeText({
    text: "ON",
  });
  });


