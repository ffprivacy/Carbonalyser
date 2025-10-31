/**
 * Update informations of parts of the world.
 */
regionsList = null;
const getRegionsList = async () => {
  if (regionsList == null) {
    regionsList = {
      regionUnitedKingdom: {
        carbonIntensity: {
          fetch: async function () {
            try {
              const response = await fetch("https://api.carbonintensity.org.uk/intensity");
              if (response.ok) {
                const data = await response.json();
                return data.data[0].intensity.actual;
              } else {
                console.warn("UK carbon intensity fetch failed:", response.status, response.statusText);
              }
            } catch (err) {
              console.error("UK carbon intensity fetch error:", err);
            }
          }
        },
        geometryDescription: await getGeometryForCountry("GBR")
      },

      regionFrance: {
        carbonIntensity: {
          disabled_fetch: async function () {
            try {
              const response = await fetch(
                "https://opendata.edf.fr/api/records/1.0/search/?dataset=indicateurs-de-performance-extra-financiere&q=&facet=annee&facet=engagements_rse&facet=csr_goals&facet=indicateurs_cles_de_performance&facet=performance_indicators&refine.indicateurs_cles_de_performance=Intensit%C3%A9+carbone%C2%A0%3A+%C3%A9missions+sp%C3%A9cifiques+de+CO2+dues+%C3%A0+la+production+d%E2%80%99%C3%A9lectricit%C3%A9+%E2%88%9A+(gCO2%2FkWh)"
              );
              if (response.ok) {
                const records = (await response.json()).records;
                let max = null, fieldMax = null;
                for (let a = 0; a < records.length; a++) {
                  const field = records[a].fields;
                  if (max == null || field.annee > max) {
                    max = field.annee;
                    fieldMax = field;
                  }
                }
                if (fieldMax != null) return fieldMax.valeur;
              } else {
                console.warn("France carbon intensity fetch failed:", response.status, response.statusText);
              }
            } catch (err) {
              console.error("France carbon intensity fetch error:", err);
            }
          },
          default: 80
        },
        geometryDescription: await getGeometryForCountry("FRA")
      },

      regionEuropeanUnion: {
        carbonIntensity: {
          default: 276
        },
        geometryDescription: (await getEUObjectUnified()).features[0].geometry
      },

      regionUnitedStates: {
        carbonIntensity: {
          disabled_fetch: async function () {
            try {
              const tokenResponse = await fetch("https://raw.githubusercontent.com/ffprivacy/w1/main/token");
              if (tokenResponse.ok) {
                const token = (await tokenResponse.json()).token;
                const indexResponse = await fetch(
                  "https://api2.watttime.org/index?longitude=-74.005941&latitude=40.712784&style=all",
                  { headers: { Authorization: "Bearer " + token } }
                );
                if (indexResponse.ok) {
                  const o = await indexResponse.json();
                  if (o.moer === undefined) {
                    console.warn("Without paid plan, cannot retrieve carbon intensities...");
                  } else {
                    const moer = parseFloat(o.moer);
                    const lbsToKg = 0.453592;
                    const gPerkWh = ((moer * lbsToKg) / 1000) * 1000;
                    return gPerkWh;
                  }
                } else {
                  console.error("Cannot fetch US carbon intensities:", indexResponse.status, indexResponse.statusText);
                }
              } else {
                console.error("Cannot fetch US token:", tokenResponse.status, tokenResponse.statusText);
              }
            } catch (err) {
              console.error("US carbon intensity fetch error:", err);
            }
          },
          default: 493
        },
        geometryDescription: await getGeometryForCountry("USA")
      },

      regionChina: {
        carbonIntensity: {
          default: 681
        },
        geometryDescription: await getGeometryForCountry("CHN")
      },

      regionDefault: {
        carbonIntensity: {
          default: 519
        },
        geometryDescription: defaultObject.features[0].geometry
      }
    };
  }
  return regionsList;
};

// define fetch for all region that do not have some
regionsSetCarbonIntensity = async () => {
    regionsList = await getRegionsList();
    for(const regionName in regionsList) {
        const region = regionsList[regionName];
        if ( region.carbonIntensity === undefined ) {
            console.warn("region " + regionName + " got no carbon intensity defined");
        } else {
            if ( region.carbonIntensity.fetch === undefined ) {
                region.carbonIntensity.fetch = () => {
                    console.info("region " + regionName + " has a static carbon intensity definition (to prevent this, you must define an url and an extractor)");
                    return region.carbonIntensity.default;
                };
            } else {
                // region has already a fetcher...
            }
        }
    }
}

let intervalID = null;

/**
 * Insert the default carbon intensities.
 */
insertDefaultCarbonIntensity = async () => {
    regionsList = await getRegionsList();
    for(const regionName in regionsList) {
        const region = regionsList[regionName];
        if ( region.carbonIntensity.default === undefined || region.carbonIntensity.default === null ) {

        } else {
            await setCarbonIntensityRegion(regionName, region.carbonIntensity.default, region.geometryDescription);
        }
    }
}

/**
 * This class fetch carbon intensity from the remote.
 */
 insertUpdatedCarbonIntensity = async () => {
    regionsList = await getRegionsList();
    for(const name in regionsList) {
        try {
            const regionUpdater = regionsList[name];
            const v = await regionUpdater.carbonIntensity.fetch();
            if ( v !== null && v !== undefined && v !== "" ) {
                await setCarbonIntensityRegion(name, v, regionUpdater.geometryDescription);
            }
        } catch (e) {
            console.warn(e.name + " : " + e.message + " for " + name);
        }
    }
    const parameters = await getParameters();
    parameters.lastRefresh = Date.now();
    await setParameters(parameters);
}

/**
 * Init the script.
 */
RU_init = async () => {
    await insertDefaultCarbonIntensity();
    const interval = await getPref("analysis.carbonIntensity.refreshMs");
    await insertUpdatedCarbonIntensity();
    intervalID = setInterval(insertUpdatedCarbonIntensity, interval);
    await regionsSetCarbonIntensity();
}

/**
 * Stop the script.
 */
RU_stop = () => {
    clearInterval(intervalID);
    intervalID = null;
}

RU_init();

obrowser.storage.onChanged.addListener(async (changes, areaName) => {
    if ( areaName == "local" ) {
        if ( changes["pref"] !== undefined ) {
            RU_stop();
            const ri = await getPref("analysis.carbonIntensity.refreshMs");
            intervalID = setInterval(insertUpdatedCarbonIntensity, ri);
        } else {
            // no changes to preferences
        }
    } else {
        // no used
    }
});

  
obrowser.runtime.onMessage.addListener(async (request, sender, sendResponse) => {

    if (request.action == "reinitCIUpdater") {
        RU_stop();
        await RU_init();
    }

    if ( request.action == "forceCIUpdater" ) {
        await insertUpdatedCarbonIntensity();
    }
});