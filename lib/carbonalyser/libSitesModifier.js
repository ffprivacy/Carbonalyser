let sitesModifier = null;
getOrCreateSitesModifier = async () => {
    if ( sitesModifier === null || sitesModifier === undefined ) {
        const sitesModifierText = (await obrowser.storage.local.get("sitesModifier")).sitesModifier;
        if ( sitesModifierText === undefined ) {
            sitesModifier = {
                "chatgpt.com": 10,
                "google.com": 1
            };
        } else {
            sitesModifier = JSON.parse(sitesModifierText);
        }
        obrowser.storage.local.set({sitesModifier: JSON.stringify(sitesModifier)});
    }
    return sitesModifier;
}

SMSetSite = async (url, energyModifier) => {
    const host = extractHostname(url);
    const sm = await getOrCreateSitesModifier();
    sm[host] = energyModifier;
    await obrowser.storage.local.set({sitesModifier: JSON.stringify(sm)});
}
SMSetSitesModifier = async (newSM) => {
    sitesModifier = newSM;
    await obrowser.storage.local.set({sitesModifier: JSON.stringify(sitesModifier)});
}
SMGetSiteModifier = async (url) => {
    const host = extractHostname(url);
    const sm = await getOrCreateSitesModifier();
    if ( sm[host] === undefined ) {
        return 1;
    } else {
        return sm[host];
    }
}

listenerStorage = async (changes, areaName) => {
    if ( areaName == "local" ) {
        if ( changes["sitesModifier"] !== undefined ) {
            sitesModifier = null;
            sitesModifier = await getOrCreateSitesModifier(null);
        }
    }
}

SM_init = async () => {
    obrowser.storage.onChanged.addListener(listenerStorage);
}

SM_end = () => {
    obrowser.storage.onChanged.removeListener(listenerStorage);
}

SM_init();