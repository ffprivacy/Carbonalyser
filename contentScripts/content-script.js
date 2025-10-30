(function() {

let domSize = 0;

function estimateDOMSize() {
  domSize = new Blob([document.documentElement.outerHTML]).size;
}

function estimateResourcesSize() {
  const entries = performance.getEntriesByType("resource");
  return entries.reduce((sum, e) => sum + (e.transferSize || 0), 0);
}

let currentTotalSize = 0;
function sendPageSizeChange() {
  const resourcesSize = estimateResourcesSize();
  const newTotalSize = domSize + resourcesSize;

  let delta = newTotalSize - currentTotalSize;
  if ( delta < 0 ) {
    delta = newTotalSize;
  }
  chrome.runtime.sendMessage({
    action: "page-size-change",
    origin: location.origin,
    delta_bytes: delta
  });
  currentTotalSize = newTotalSize;
}

document.addEventListener("DOMContentLoaded", () => {
  estimateDOMSize();
  sendPageSizeChange();
});


// Observe DOM changes
const observer = new MutationObserver(() => sendPageSizeChange());
observer.observe(document, { childList: true, subtree: true, attributes: true });

// Hook into fetch
const originalFetch = window.fetch;
window.fetch = async (...args) => {
  const response = await originalFetch.apply(this, args);
  response.clone().blob().finally(sendPageSizeChange);
  return response;
};

// Hook into XMLHttpRequest
const originalXHR = window.XMLHttpRequest;
window.XMLHttpRequest = function() {
  const xhr = new originalXHR();
  xhr.addEventListener("loadend", sendPageSizeChange);
  return xhr;
};
})();