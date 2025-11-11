let SU_intervalID = null;
insertUpdatedSitesModifier = async () => {
  try {
    const response = await fetch("https://raw.githubusercontent.com/ffprivacy/CarbonalyzerData/refs/heads/main/sitesModifier.json");
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const newSM = await response.json();
    await SMSetSitesModifier(newSM);
    await obrowser.storage.local.set({ sitesModifierLastRefresh: JSON.stringify(Date.now()) });
    console.log("Sites modifier updated from remote.");
  } catch (err) {
    console.error("Error fetching or parsing sites modifier from remote:", err);
  }
}

/**
 * Init the script.
 */
SU_init = async () => {
    const interval = await getPref("analysis.sites.refreshMs");
    await insertUpdatedSitesModifier();
    SU_intervalID = setInterval(insertUpdatedSitesModifier, interval);
    await getOrCreateSitesModifier();
}

/**
 * Stop the script.
 */
SU_stop = () => {
    clearInterval(SU_intervalID);
    SU_intervalID = null;
}

SU_init();