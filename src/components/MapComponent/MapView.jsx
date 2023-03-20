import PropTypes from "prop-types";
import GoogleMapReact from "google-map-react";
//import MapLegend from "./components/MapLegend";
import MapControl from "./components/MapControlContainer";
import tracks from "./assets/trackssubds.geojson";
// import tracksFlinFlon from "./assets/tracksFlinFlon.geojson";
// import tracksThePas from "./assets/tracksThePas.geojson";
// import tracksWekusko from "./assets/tracksWekusko.geojson";
// import tracksThicket from "./assets/tracksThicket.geojson";
// import tracksHerchmer from "./assets/tracksHerchmer.geojson";
// import tracksThompson from "./assets/tracksThompson.geojson";
import { useState, useEffect } from "react";
import { useLoadMarkers, useClusterer } from "./hooks";
import {
    scaleMdSolo,
    scaleMdCluster,
    pinColorActiveRemediation,
    pinColorHighPriorityIncident,
    pinColorPredictedIncident,
    colorSubFlinFlon,
    colorSubThePas,
    colorSubWekusko,
    colorSubThicket,
    colorSubHerchmer,
    colorSubThompson,
    limitsFlinFlon,
    limitsThePas,
    limitsWekusko,
    limitsThicket,
    limitsHerchmer,
    limitsThompson,
} from "./constants";

const MapView = (props) => {
    const {
        zoom,
        apiKey,
        location,
        width,
        height: heightProp,
        incidentsActiveRemediation,
        incidentsPredicted,
        incidentsHighPriority,
        handleActiveRemediationClick,
        handlePredictedIncidentClick,
        handleHighPriorityIncidentClick,
    } = props;

    const [mapRef, setMap] = useState(null);
    const [mapsRef, setMaps] = useState(null);
    const [bounds, setBounds] = useState(null);
    const [zoomLevel, setZoomLevel] = useState(zoom);
    const [height, setHeight] = useState(heightProp);

    const [active, setActive] = useState(true);
    const [predicted, setPredicted] = useState(true);
    const [priority, setPriority] = useState(true);
    const [subFlinFlon, setSubFlinFlon] = useState(false);
    const [subThePas, setSubThePas] = useState(false);
    const [subWekusko, setSubWekusko] = useState(false);
    const [subThicket, setSubThicket] = useState(false);
    const [subHerchmer, setSubHerchmer] = useState(false);
    const [subThompson, setSubThompson] = useState(false);
    const [viewArea, setViewArea] = useState([]);

    useEffect(() => {
        if (viewArea.length === 0) {
            let newArea = [];
            limitsFlinFlon.forEach((s) => {
                newArea.push(s);
            });
            limitsThePas.forEach((s) => {
                newArea.push(s);
            });
            limitsHerchmer.forEach((s) => {
                newArea.push(s);
            });
            setViewArea(newArea);
        }
    }, [viewArea]);

    // Set map bounds based on list of stations
    const setupMap = () => {
        if (!mapRef || !mapsRef || viewArea.length === 0) return;
        const bounds = new mapsRef.LatLngBounds();

        viewArea.forEach((s) => {
            bounds.extend(new mapsRef.LatLng(s.lat, s.lng));
        });
        setBounds(bounds);
        mapRef.fitBounds(bounds);
        setZoomLevel(mapRef.getZoom());
    };
    useEffect(setupMap, [mapRef, mapsRef, viewArea]);

    // resize map when window is resized
    const resizeObserver = new ResizeObserver((e) => {
        if (!mapRef || !bounds) return;
        mapRef.fitBounds(bounds, 40);
    });

    resizeObserver.observe(document.body);

    const trackStyler = (feature) => {
        const trackName = feature.getProperty("SUBDI1NAME");

        let color = "#d35400";
        if (trackName === "Flin Flon") {
            color = colorSubFlinFlon;
        } else if (trackName === "The Pas Terminal") {
            color = colorSubThePas;
        } else if (trackName === "Wekusko") {
            color = colorSubWekusko;
        } else if (trackName === "Thicket") {
            color = colorSubThicket;
        } else if (trackName === "Herchmer") {
            color = colorSubHerchmer;
        } else if (trackName === "Thompson") {
            color = colorSubThompson;
        }
        
        return {
            strokeColor: color,
            strokeWeight: 2.4,
        };
    };

    // setup tracks
    const setupTracks = () => {
        if (!mapRef) return;
        mapRef.data.loadGeoJson(tracks);
        mapRef.data.setStyle(trackStyler);
    };
    useEffect(setupTracks, [mapRef]);

    const markersActiveRemediation =
        useLoadMarkers(
            mapRef,
            mapsRef,
            incidentsActiveRemediation,
            pinColorActiveRemediation,
            scaleMdSolo,
            handleActiveRemediationClick,
            active
        );
    const markersPredictedIncident =
        useLoadMarkers(
            mapRef,
            mapsRef,
            incidentsPredicted,
            pinColorPredictedIncident,
            scaleMdSolo,
            handlePredictedIncidentClick,
            predicted
        );
    const markersHighPriorityIncident =
        useLoadMarkers(
            mapRef,
            mapsRef,
            incidentsHighPriority,
            pinColorHighPriorityIncident,
            scaleMdSolo,
            handleHighPriorityIncidentClick,
            priority
        );

    const markersActiveRemediationCluster = useClusterer(
        mapRef,
        mapsRef,
        markersActiveRemediation,
        pinColorActiveRemediation,
        scaleMdCluster,
        active
    );

    const markersPredictedIncidentCluster = useClusterer(
        mapRef,
        mapsRef,
        markersPredictedIncident,
        pinColorPredictedIncident,
        scaleMdCluster,
        predicted
    );

    const markersHighPriorityIncidentCluster = useClusterer(
        mapRef,
        mapsRef,
        markersHighPriorityIncident,
        pinColorHighPriorityIncident,
        scaleMdCluster,
        priority
    );

    const resetFocus = () => {
        if (!mapRef || !mapsRef) return;
        let newArea = [];

        if (subFlinFlon) {
            limitsFlinFlon.forEach((point) => {
                newArea.push(point);
            });
        }
        if (subThicket) {
            limitsThicket.forEach((point) => {
                newArea.push(point);
            });
        }
        if (subThompson) {
            limitsThompson.forEach((point) => {
                newArea.push(point);
            });
        }
        if (subThePas) {
            limitsThePas.forEach((point) => {
                newArea.push(point);
            });
        }
        if (subWekusko) {
            limitsWekusko.forEach((point) => {
                newArea.push(point);
            });
        }
        if (subHerchmer) {
            limitsHerchmer.forEach((point) => {
                newArea.push(point);
            });
        }
        setViewArea(newArea);
    };
    useEffect(resetFocus, [
        mapRef,
        mapsRef,
        subFlinFlon,
        subThicket,
        subThompson,
        subThePas,
        subWekusko,
        subHerchmer,
    ]);

    const updateVisibility = () => {
        if (!mapRef || !mapsRef) return;
        mapRef.data.forEach((feature) => {
            let visible = false;
            const trackName = feature.getProperty("SUBDI1NAME");

            // if all false then visible
            if (
                !subFlinFlon &&
                !subThicket &&
                !subThompson &&
                !subThePas &&
                !subWekusko &&
                !subHerchmer
            ) {
                visible = true;
            }
            if (subFlinFlon && trackName === "Flin Flon") {
                visible = true;
            }
            if (subThicket && trackName === "Thicket") {
                visible = true;
            }
            if (subThompson && trackName === "Thompson") {
                visible = true;
            }
            if (subThePas && trackName === "The Pas Terminal") {
                visible = true;
            }
            if (subWekusko && trackName === "Wekusko") {
                visible = true;
            }
            if (subHerchmer && trackName === "Herchmer") {
                visible = true;
            }
            mapRef.data.overrideStyle(feature, { visible: visible });
        });
    };
    useEffect(updateVisibility, [
        mapRef,
        mapsRef,
        subFlinFlon,
        subThicket,
        subThompson,
        subThePas,
        subWekusko,
        subHerchmer,
    ]);

    const handleApiLoaded = (map, maps) => {
        setMap(map);
        setMaps(maps);
    };

    const createMapOptions = (maps) => {
        return {
            panControl: true,
            mapTypeControl: true,
            mapTypeId: maps.MapTypeId.HYBRID,
            mapTypeControlOptions: {
                style: maps.MapTypeControlStyle.DROPDOWN_MENU,
                position: maps.ControlPosition.TOP_RIGHT,
            },
            zoomControlOptions: {
                position: maps.ControlPosition.RIGHT_CENTER,
            },
            scaleControl: true,
            scrollwheel: true,
            fullscreenControl: false,
        };
    };

    return (
        <div
            className="google-map"
            style={{ width: width, height: height, position: "relative" }}
        >
            <MapControl
                active={active}
                predicted={predicted}
                priority={priority}
                subFlinFlon={subFlinFlon}
                subThePas={subThePas}
                subWekusko={subWekusko}
                subThicket={subThicket}
                subHerchmer={subHerchmer}
                subThompson={subThompson}
                setActive={setActive}
                setPredicted={setPredicted}
                setPriority={setPriority}
                setSubFlinFlon={setSubFlinFlon}
                setSubThePas={setSubThePas}
                setSubWekusko={setSubWekusko}
                setSubThicket={setSubThicket}
                setSubHerchmer={setSubHerchmer}
                setSubThompson={setSubThompson}
            />
            <GoogleMapReact
                bootstrapURLKeys={{ key: apiKey }}
                defaultCenter={location}
                defaultZoom={zoom}
                yesIWantToUseGoogleMapApiInternals
                onGoogleApiLoaded={({ map, maps }) =>
                    handleApiLoaded(map, maps)
                }
                options={createMapOptions}
            ></GoogleMapReact>
        </div>
    );
};

MapView.propTypes = {
    width: PropTypes.string,
    height: PropTypes.string,
    location: PropTypes.shape({
        lat: PropTypes.number.isRequired,
        lng: PropTypes.number.isRequired,
    }).isRequired,
    apiKey: PropTypes.string,
    zoom: PropTypes.number,
    tracks: PropTypes.arrayOf(PropTypes.shape({})),
    stations: PropTypes.arrayOf(PropTypes.shape({})),
    incidentsActiveRemediation: PropTypes.arrayOf(PropTypes.shape({})),
    incidentsPredicted: PropTypes.arrayOf(PropTypes.shape({})),
    incidentsHighPriority: PropTypes.arrayOf(PropTypes.shape({})),
    handleActiveRemediationClick: PropTypes.func,
    handlePredictedIncidentClick: PropTypes.func,
    handleHighPriorityIncidentClick: PropTypes.func,
};

MapView.defaultProps = {
    width: "100%",
    height: "100vh",
    location: {
        lat: 56.59638974465631,
        lng: -96.64761357599087,
    },
    apiKey: process.env.REACT_APP_GOOGLE_MAPS_KEY,
    zoom: 15,
    tracks: [],
    stations: [
        {
            lat: 53.58840162560527,
            lng: -101.40858907838962,
        },
        {
            lat: 58.80494814618657,
            lng: -94.14294594619656,
        },
    ],
    incidentsActiveRemediation: [
        {
            id: "1",
            lat: 58.591716270539905,
            lng: -94.12363035979969,
            iconStyle: null,
            text: null,
            key: null,
        },
    ],
    incidentsPredicted: [
        {
            id: "2",
            lat: 54.49216352504018,
            lng: -99.78903833577601,
            iconStyle: null,
            text: null,
            key: null,
        },
    ],
    incidentsHighPriority: [
        {
            id: "3",
            lat: 55.30693065357311,
            lng: -97.73583304648153,
            iconStyle: null,
            text: null,
            key: null,
        },
    ],
    handleActiveRemediationClick: () => {},
    handlePredictedIncidentClick: () => {},
    handleHighPriorityIncidentClick: () => {},
};

export default MapView;
