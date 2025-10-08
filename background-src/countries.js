/**
 * Maintain in memory list of countries.
 */

// https://datahub.io/core/geo-countries#python
let countriesObject = null;
getCountriesObject = async () => {
    if ( countriesObject == null ) {
        const response = await fetch("data/countries.geojson");
        if (!response.ok) throw new Error(`fetch failed ${response.status} - ${response.statusText}`);
        countriesObject = await response.json();
    }
    return countriesObject
}
/**
 * Take ISO_A3 country code and return geomtry if found in the current definition.
 */
getGeometryForCountry = async (country) => {
    if (typeof(country) === "string") {
        for(const feature of (await getCountriesObject()).features) {
            if ( feature.properties.ISO_A3 === country ) {
                return feature.geometry;
            }
        }
        throw "Country " + country + " not found";
    } else {
        throw "Type " + typeof(country) + " not reconized for country";
    } 
}

// https://european-union.europa.eu/principles-countries-history/country-profiles_fr
// last checked 24/06/2022
const countriesEU_ISO_A3 = ["DEU","AUT","BEL","BGR","CYP","HRV","DNK","ESP","EST","FIN","FRA","GRC","HUN","IRL","ITA","LVA","LTU","LUX","MLT","NLD","POL","PRT","ROU","SVK","SVN","SWE","CZE"];
const countriesEUObject = {
    type: "FeatureCollection",
    features: []
};
let countriesEUFlattenMultiPolygon = null;
getCountriesEUFlattenMultiPolygon = async () => {
    if ( countriesEUFlattenMultiPolygon == null ) {
        countriesEUFlattenMultiPolygon = [];
        countriesObject = await getCountriesObject();
        for(const ISO_A3 of countriesEU_ISO_A3) {
            for(const feature of countriesObject.features) {
                if ( feature.properties.ISO_A3 === ISO_A3) {
                    countriesEUObject.features.push(feature);
                    if ( feature.geometry.type === "Polygon" ) {
                        countriesEUFlattenMultiPolygon.push(feature.geometry.coordinates);
                    } else if ( feature.geometry.type === "MultiPolygon" ) {
                        for(const polygon of feature.geometry.coordinates ) {
                            countriesEUFlattenMultiPolygon.push(polygon);
                        }
                    } else {
                        throw "cannot merge a geometry of type " + feature.geometry.type;
                    }
                    break;
                }
            }
        }
    }
    return countriesEUFlattenMultiPolygon;
}
/**
 * Holds all addressable space in EU.
 */
let EUObjectUnified = null;
getEUObjectUnified = async () => {
    if ( EUObjectUnified == null ) {
        EUObjectUnified = {
            type: "FeatureCollection",
            features: [
                {
                    type: "Feature",
                    properties: {
                    },
                    geometry: {
                    type: "MultiPolygon",
                    coordinates: await getCountriesEUFlattenMultiPolygon()
                    }
                }
            ]
        };
    }
    return EUObjectUnified;
}