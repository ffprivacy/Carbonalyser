let SU_intervalID = null;
insertUpdatedSitesModifier = async () => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://raw.githubusercontent.com/carbonalyser/CarbonalyzerData/main/sitesModifier.json", true);
    xhr.onreadystatechange = async function() {
        if ( xhr.readyState === 4 ) {
            if ( xhr.status === 200 ) {
                try {
                    const newSM = JSON.parse(xhr.responseText);
                    await SMSetSitesModifier(newSM);
                    console.log("Sites modifier updated from remote.");
                } catch (err) {
                    console.error("Error parsing sites modifier from remote:", err);
                }
            } else {
                console.warn("Could not fetch updated sites modifier, status:", xhr.status);
            }
        }
    };
    xhr.send();
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