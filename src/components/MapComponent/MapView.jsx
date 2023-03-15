import PropTypes from "prop-types";
import GoogleMapReact from "google-map-react";
import MapIncidentPin from "./MapIncidentPin";
import MapLegend from "./MapLegend";
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
    } = props;

    const pinStyleCommon = {
        fontSize: "36px",
        position: "absolute",
        transform: "translate(-20px, -40px)",
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
        const { transform, ...rest } = style;
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
                    />
                ))}
                {incidentsMid.map((i) => (
                    <MapIncidentPin
                        key={i.lat + i.lng}
                        lat={i.lat}
                        lng={i.lng}
                        styleOptions={pinStyleMid}
                        iconStyle={iconStyle}
                    />
                ))}
                {incidentsLow.map((i) => (
                    <MapIncidentPin
                        key={i.lat + i.lng}
                        lat={i.lat}
                        lng={i.lng}
                        styleOptions={pinStyleLow}
                        iconStyle={iconStyle}
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
};

MapView.defaultProps = {
    width: 1920,
    height: 1080,
    location: {
        lat: 56.59638974465631,
        lng: -96.64761357599087,
    },
    apiKey: process.env.REACT_APP_GOOGLE_MAPS_KEY,
    zoom: 10,
    tracks: [],
    stations: [
        {
            lat: 53.78397438209464,
            lng: -101.7078783406435,
        },
        {
            lat: 58.80494814618657,
            lng: -94.14294594619656,
        },
    ],
    incidentsLow: [
        {
            lat: 58.19956756459539,
            lng: -94.44012038064184,
        },
    ],
    incidentsMid: [
        {
            lat: 55.228859176296965,
            lng: -99.37479370706016,
        },
    ],
    incidentsHigh: [
        {
            lat: 55.57435200674502,
            lng: -98.2498302730497,
        },
    ],
};

export default MapView;
