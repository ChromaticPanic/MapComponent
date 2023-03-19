import PropTypes from "prop-types";
import GoogleMapReact from "google-map-react";
import MapLegend from "./components/MapLegend";
import tracks from "./assets/tracks.geojson";
import { useState, useEffect, useMemo } from "react";
import { useLoadMarkers, useClusterer } from "./hooks";

const MapView = (props) => {
    const {
        zoom,
        apiKey,
        location,
        width,
        height: heightProp,
        stations,
        incidentsActiveRemediation,
        incidentsPredicted,
        incidentsHighPriority,
        handleActiveRemediationClick,
        handlePredictedIncidentClick,
        handleHighPriorityIncidentClick,
    } = props;

    const pinStyleCommon = useMemo(() => {
        return {
            fontSize: "36px",
            position: "absolute",
            //transform: "translate(-20px, -40px)",
            transform: "translate(-18px, -18px)",
        };
    }, []);

    const pinStyleLow = useMemo(() => {
        return {
            ...pinStyleCommon,
            color: "blue",
        };
    }, [pinStyleCommon]);

    const pinStyleMid = useMemo(() => {
        return {
            ...pinStyleCommon,
            color: "orange",
        };
    }, [pinStyleCommon]);

    const pinStyleHigh = useMemo(() => {
        return {
            ...pinStyleCommon,
            color: "red",
        };
    }, [pinStyleCommon]);

    const iconStyles = [
        "fluent-mdl2:location-dot",
        "fluent-mdl2:location-fill",
        "raphael:location",
        "mdi:map-marker-radius-outline",
        "ic:twotone-location-on",
        "ic:sharp-location-on",
        "mdi:location-radius",
        "openmoji:location-indicator",
    ];

    const zoomNoClusterThreshold = 1;

    const [iconStyle, setIconStyle] = useState(iconStyles[0]);
    const [legendItems, setLegendItems] = useState([]);
    const [mapRef, setMap] = useState(null);
    const [mapsRef, setMaps] = useState(null);
    const [bounds, setBounds] = useState(null);
    const [zoomLevel, setZoomLevel] = useState(zoom);
    const [height, setHeight] = useState(heightProp);

    const withoutTransform = (style) => {
        const { transform, position, ...rest } = style;
        return rest;
    };

    const scaleSmSolo = 0.0125;
    const scaleMdSolo = 0.015;
    const scaleLgSolo = 0.025;
    const scaleMdCluster = 0.035;
    const scaleLgCluster = 0.05;
    const scaleXlCluster = 0.1;
    const pinColorActiveRemediation = "blue";
    const pinColorPredictedIncident = "orange";
    const pinColorHighPriorityIncident = "red";

    // will probably get removed
    useEffect(() => {
        setLegendItems([
            {
                name: "Active Remediation",
                iconStyle: iconStyle,
                styleOptions: withoutTransform(pinStyleLow),
            },
            {
                name: "Predicted Incident",
                iconStyle: iconStyle,
                styleOptions: withoutTransform(pinStyleMid),
            },
            {
                name: "High Priority Incident",
                iconStyle: iconStyle,
                styleOptions: withoutTransform(pinStyleHigh),
            },
        ]);
    }, [iconStyle, pinStyleHigh, pinStyleLow, pinStyleMid]);

    // Set map bounds based on list of stations
    const setupMap = () => {
        if (!mapRef || !mapsRef) return;
        const bounds = new mapsRef.LatLngBounds();

        stations.forEach((s) => {
            bounds.extend(new mapsRef.LatLng(s.lat, s.lng));
        });
        setBounds(bounds);
        mapRef.fitBounds(bounds);
        setZoomLevel(mapRef.getZoom());
    };
    useEffect(setupMap, [mapRef, mapsRef, stations]);

    // resize map when window is resized
    const resizeObserver = new ResizeObserver(e => {
        if (!mapRef || !bounds) return;
        mapRef.fitBounds(bounds, 20);
    });
    
    resizeObserver.observe(document.body);

    // setup tracks
    const setupTracks = () => {
        if (!mapRef) return;
        mapRef.data.loadGeoJson(tracks);
        mapRef.data.setStyle({
            strokeColor: "#d35400",
            strokeWeight: 1.5,
        });
    };
    useEffect(setupTracks, [mapRef]);

    // setup legend
    const setupLegend = () => {
        if (!mapRef || !mapsRef) return;
        mapRef.controls[mapsRef.ControlPosition.LEFT_TOP].push(
            document.getElementById("map-legend")
        );
    };
    useEffect(setupLegend, [mapRef, mapsRef]);

    const [markersActiveRemediation, setMarkersActiveRemediation] =
        useLoadMarkers(
            mapRef,
            mapsRef,
            incidentsActiveRemediation,
            pinColorActiveRemediation,
            scaleLgSolo,
            handleActiveRemediationClick
        );
    const [markersPredictedIncident, setMarkersPredictedIncident] =
        useLoadMarkers(
            mapRef,
            mapsRef,
            incidentsPredicted,
            pinColorPredictedIncident,
            scaleLgSolo,
            handlePredictedIncidentClick
        );
    const [markersHighPriorityIncident, setMarkersHighPriorityIncident] =
        useLoadMarkers(
            mapRef,
            mapsRef,
            incidentsHighPriority,
            pinColorHighPriorityIncident,
            scaleLgSolo,
            handleHighPriorityIncidentClick
        );

    const [
        markersActiveRemediationCluster,
        setMarkersActiveRemediationCluster,
    ] = useClusterer(
        mapRef,
        mapsRef,
        markersActiveRemediation,
        pinColorActiveRemediation,
        scaleMdCluster
    );

    const [
        markersPredictedIncidentCluster,
        setMarkersPredictedIncidentCluster,
    ] = useClusterer(
        mapRef,
        mapsRef,
        markersPredictedIncident,
        pinColorPredictedIncident,
        scaleMdCluster
    );

    const [
        markersHighPriorityIncidentCluster,
        setMarkersHighPriorityIncidentCluster,
    ] = useClusterer(
        mapRef,
        mapsRef,
        markersHighPriorityIncident,
        pinColorHighPriorityIncident,
        scaleMdCluster
    );

    const handleHideMarkers = (markers) => {
        markers.forEach((marker) => {
            marker.setMap(null);
        });
    };

    const handleShowMarkers = (markers) => {
        markers.forEach((marker) => {
            marker.setMap(mapRef);
        });
    };

    const handleSelectSubdivision = (subdivision) => {
    };

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
                style: maps.MapTypeControlStyle.HORIZONTAL_BAR,
                position: maps.ControlPosition.TOP_CENTER,
            },
            scrollwheel: true,
        };
    };

    return (
        <div className="google-map" style={{ width: width, height: height }}>
            <MapLegend legendItems={legendItems} />
            <GoogleMapReact
                bootstrapURLKeys={{ key: apiKey }}
                defaultCenter={location}
                defaultZoom={zoom}
                yesIWantToUseGoogleMapApiInternals
                onGoogleApiLoaded={({ map, maps }) =>
                    handleApiLoaded(map, maps)
                }
                options={createMapOptions}
            >
            </GoogleMapReact>
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
