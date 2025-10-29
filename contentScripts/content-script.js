(function() {

  let domSize = 0;

function estimateDOMSize() {
  domSize = new Blob([document.documentElement.outerHTML]).size;
}

function estimateResourcesSize() {
  const entries = performance.getEntriesByType("resource");
  return entries.reduce((sum, e) => sum + (e.transferSize || 0), 0);
}

function formatBytes(bytes) {
  const units = ["B", "KB", "MB", "GB"];
  let i = 0;
  while (bytes >= 1024 && i < units.length - 1) {
    bytes /= 1024;
    i++;
  }
  return `${bytes.toFixed(2)} ${units[i]}`;
}

function logPageSize() {
  const resourcesSize = estimateResourcesSize();
  const totalSize = domSize + resourcesSize;

  console.log("DOM size:", formatBytes(domSize));
  console.log("Resources size:", formatBytes(resourcesSize));
  console.log("Total estimated page size:", formatBytes(totalSize), " : ",  totalSize);
}

document.addEventListener("DOMContentLoaded", () => {
  estimateDOMSize();
  logPageSize();
});


// Observe DOM changes
const observer = new MutationObserver(() => logPageSize());
observer.observe(document, { childList: true, subtree: true, attributes: true });

// Hook into fetch
const originalFetch = window.fetch;
window.fetch = async (...args) => {
  const response = await originalFetch.apply(this, args);
  response.clone().blob().finally(logPageSize);
  return response;
};

// Hook into XMLHttpRequest
const originalXHR = window.XMLHttpRequest;
window.XMLHttpRequest = function() {
  const xhr = new originalXHR();
  xhr.addEventListener("loadend", logPageSize);
  return xhr;
};
})();