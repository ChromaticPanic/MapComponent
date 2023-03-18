import PropTypes from "prop-types";
import GoogleMapReact from "google-map-react";
import MapIncidentPin from "./components/MapIncidentPin";
import MapLegend from "./components/MapLegend";
import {
    MarkerActiveRemediation,
    MarkerHighPriorityIncident,
    MarkerPredictedIncident,
} from "./components/MapIcons";
import tracks from "./assets/tracks.geojson";
import { useState, useEffect, useMemo } from "react";

const MapView = (props) => {
    const {
        zoom,
        apiKey,
        location,
        width,
        height,
        stations,
        incidentsActiveRemediation,
        incidentsPredictedIncident,
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

    const [iconStyle, setIconStyle] = useState(iconStyles[0]);
    const [legendItems, setLegendItems] = useState([]);
    const [map, setMap] = useState(null);
    const [maps, setMaps] = useState(null);
    const [bounds, setBounds] = useState(null);

    const withoutTransform = (style) => {
        const { transform, position, ...rest } = style;
        return rest;
    };

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
    useEffect(() => {
        if (!map || !maps) return;
        const bounds = new maps.LatLngBounds();

        stations.forEach((s) => {
            bounds.extend(new maps.LatLng(s.lat, s.lng));
        });
        setBounds(bounds);
        map.fitBounds(bounds);
    }, [map, maps, stations]);

    // Re-center map when resizing the window
    useEffect(() => {
        if (!map || !maps) return;
        maps.event.addDomListenerOnce(map, "idle", () => {
            maps.event.addDomListener(window, "resize", () => {
                map.fitBounds(bounds, 20);
            });
        });
    }, [map, maps, bounds]);

    // setup tracks
    useEffect(() => {
        if (!map) return;
        map.data.loadGeoJson(tracks);
        map.data.setStyle({
            strokeColor: "#d35400",
            strokeWeight: 1.5,
        });
    }, [map]);

    // setup legend
    const setupLegend = () => {
        if (!map || !maps) return;
        map.controls[maps.ControlPosition.LEFT_TOP].push(
            document.getElementById("map-legend")
        );
    };

    // Fit map to its bounds after the api is loaded
    const handleApiLoaded = (map, maps) => {
        setMap(map);
        setMaps(maps);
        // Get bounds by our places
        //const bounds = getMapBounds(map, maps, stations);
        // Fit map to bounds
        // Bind the resize listener
        //bindResizeListener(map, maps, bounds);

        // setupTracksLayer(map);

        setupLegend();
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
            <MapLegend legendItems={legendItems} bounds={bounds} />
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
                
                {/* {incidentsHigh.map((i) => (
                    <MapIncidentPin
                        key={i.lat + i.lng}
                        lat={i.lat}
                        lng={i.lng}
                        styleOptions={pinStyleHigh}
                        iconStyle={iconStyle}
                        onClick={handleHighPriorityIncidentClick}
                    />
                ))}
                {incidentsMid.map((i) => (
                    <MapIncidentPin
                        key={i.lat + i.lng}
                        lat={i.lat}
                        lng={i.lng}
                        styleOptions={pinStyleMid}
                        iconStyle={iconStyle}
                        onClick={handlePredictedIncidentClick}
                    />
                ))}
                {incidentsLow.map((i) => (
                    <MapIncidentPin
                        key={i.lat + i.lng}
                        lat={i.lat}
                        lng={i.lng}
                        styleOptions={pinStyleLow}
                        iconStyle={iconStyle}
                        onClick={handleActiveRemediationClick}
                    />
                ))} */}

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
    height: "1080px",
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
            lat: 58.591716270539905,
            lng: -94.12363035979969,
        },
    ],
    incidentsPredicted: [
        {
            lat: 54.49216352504018,
            lng: -99.78903833577601,
        },
    ],
    incidentsHighPriority: [
        {
            lat: 55.30693065357311,
            lng: -97.73583304648153,
        },
    ],
    handleActiveRemediationClick: () => {},
    handlePredictedIncidentClick: () => {},
    handleHighPriorityIncidentClick: () => {},
};

export default MapView;
