import PropTypes from "prop-types";
import GoogleMapReact from "google-map-react";
import MapIncidentPin from "./components/MapIncidentPin";
import MapLegend from "./components/MapLegend";
import tracks from "./assets/tracks.geojson";
import { useState } from "react";

const MapView = (props) => {
    const {
        zoom,
        apiKey,
        location,
        width,
        height,
        stations,
        incidentsHigh,
        incidentsMid,
        incidentsLow,
        handleActiveRemediationClick,
        handlePredictedIncidentClick,
        handleHighPriorityIncidentClick,
    } = props;

    const pinStyleCommon = {
        fontSize: "36px",
        position: "absolute",
        //transform: "translate(-20px, -40px)",
        transform: "translate(-18px, -18px)",
    };

    const pinStyleLow = {
        ...pinStyleCommon,
        color: "blue",
    };

    const pinStyleMid = {
        ...pinStyleCommon,
        color: "orange",
    };

    const pinStyleHigh = {
        ...pinStyleCommon,
        color: "red",
    };

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

    const withoutTransform = (style) => {
        const { transform, position, ...rest } = style;
        return rest;
    };

    const legendItems = [
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
    ];

    // Return map bounds based on list of stations
    const getMapBounds = (map, maps, stations) => {
        const bounds = new maps.LatLngBounds();

        stations.forEach((s) => {
            bounds.extend(new maps.LatLng(s.lat, s.lng));
        });
        return bounds;
    };

    // Re-center map when resizing the window
    const bindResizeListener = (map, maps, bounds) => {
        maps.event.addDomListenerOnce(map, "idle", () => {
            maps.event.addDomListener(window, "resize", () => {
                map.fitBounds(bounds);
            });
        });
    };

    const setupTracksLayer = (map) => {
        map.data.loadGeoJson(tracks);
        map.data.setStyle({
            strokeColor: "#d35400",
            strokeWeight: 1.5,
        });
    };

    // Fit map to its bounds after the api is loaded
    const handleApiLoaded = (map, maps, stations) => {
        // Get bounds by our places
        const bounds = getMapBounds(map, maps, stations);
        // Fit map to bounds
        map.fitBounds(bounds);
        // Bind the resize listener
        bindResizeListener(map, maps, bounds);

        map.controls[maps.ControlPosition.LEFT_TOP].push(
            document.getElementById("map-legend")
        );

        setupTracksLayer(map);
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
                    handleApiLoaded(map, maps, stations)
                }
                options={createMapOptions}
            >
                {incidentsHigh.map((i) => (
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
                ))}
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
    incidentsLow: PropTypes.arrayOf(PropTypes.shape({})),
    incidentsMid: PropTypes.arrayOf(PropTypes.shape({})),
    incidentsHigh: PropTypes.arrayOf(PropTypes.shape({})),
    handleActiveRemediationClick: PropTypes.func,
    handlePredictedIncidentClick: PropTypes.func,
    handleHighPriorityIncidentClick: PropTypes.func,
};

MapView.defaultProps = {
    width: 1920,
    height: 1080,
    location: {
        lat: 56.59638974465631,
        lng: -96.64761357599087,
    },
    apiKey: process.env.REACT_APP_GOOGLE_MAPS_KEY,
    zoom: 15,
    tracks: [],
    stations: [
        {
            lat: 53.87655945167964,
            lng: -101.20489774881213,
        },
        {
            lat: 58.80494814618657,
            lng: -94.14294594619656,
        },
    ],
    incidentsLow: [
        {
            lat: 58.591716270539905,
            lng: -94.12363035979969,
        },
    ],
    incidentsMid: [
        {
            lat: 54.49216352504018,
            lng: -99.78903833577601,
        },
    ],
    incidentsHigh: [
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
