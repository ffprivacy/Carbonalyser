(async function() {

function getDisabledUrls() {
  return new Promise(resolve => {
    chrome.runtime.sendMessage({ action: 'GET_DISABLED_URLS' }, r => {
      const list = r.serialized.map(o => new RegExp(o.source, o.flags))
      resolve(list)
    })
  })
}
DISABLED_URLS = await getDisabledUrls();

isRestricted = (url) => {
  for(const turl of DISABLED_URLS) {
      if ( turl.test(url) ) {
          return true;
      }
  }
  return false;
}
function estimateDOMSize() {
  let domSize = 0;
  for(let nav of performance.getEntriesByType("navigation")) {
    domSize += nav.transferSize;
  }
  return domSize;
}

const trackedResources = new Map();

function estimateResourcesSize() {
  const entries = performance.getEntriesByType("resource");
  for (const e of entries) {
    if (!trackedResources.has(e.name)) {
      trackedResources.set(e.name, e.transferSize || 0);
    }
  }
  let total = 0;
  for (const size of trackedResources.values()) {
    total += size;
  }
  return total;
}

let currentTotalSize = 0;
function sendPageSizeChange() {
  const domSize = estimateDOMSize();
  const resourcesSize = estimateResourcesSize();
  const newTotalSize = domSize + resourcesSize;

  let delta = newTotalSize - currentTotalSize;
  if ( delta < 0 ) {
    console.warn("issue with the delta newTotalSize=" + newTotalSize + " currentTotalSize=" + currentTotalSize + " delta=" + delta + " domSize=" + domSize + " resourcesSize=" + resourcesSize);
  }
  chrome.runtime.sendMessage({
    action: "page-size-change",
    origin: location.origin,
    delta_bytes: delta
  });
  currentTotalSize = newTotalSize;
}

if ( isRestricted(document.location.origin) ) {
  console.warn(`${document.location.origin} is a restricted origin, ignoring`);
} else {
  // Estimate initial sizess
  sendPageSizeChange();
  
  // Observe DOM changes
  const observer = new MutationObserver(() => sendPageSizeChange());
  observer.observe(document, { childList: true, subtree: true, attributes: true });
}

})();