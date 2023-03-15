import PropTypes from "prop-types";
import GoogleMapReact from "google-map-react";
import MapIncidentPin from "./MapIncidentPin";

const MapView = (props) => {
    const {
        zoom,
        apiKey,
        location,
        stations,
        incidentsHigh,
        incidentsMid,
        incidentsLow,
    } = props;

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
    };

    const createMapOptions = (maps) => {
        return {
            panControl: true,
            mapTypeControl: true,
            mapTypeId: maps.MapTypeId.HYBRID,
            // mapTypeControlOptions: {
            //     style: maps.MapTypeControlStyle.HORIZONTAL_BAR,
            //     position: maps.ControlPosition.BOTTOM_CENTER,
            //     mapTypeIds: [
            //         maps.MapTypeId.ROADMAP,
            //         maps.MapTypeId.SATELLITE,
            //         maps.MapTypeId.HYBRID
            //     ]
            // },
            scrollwheel: true,
        };
    };

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
        color: "yellow",
    };

    const pinStyleHigh = {
        ...pinStyleCommon,
        color: "red",
    };

    return (
        <div className="google-map" style={{ height: "100vh", width: "100%" }}>
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
                        lat={i.lat}
                        lng={i.lng}
                        styleOptions={pinStyleHigh}
                    />
                ))}
                {incidentsMid.map((i) => (
                    <MapIncidentPin
                        lat={i.lat}
                        lng={i.lng}
                        styleOptions={pinStyleMid}
                    />
                ))}
                {incidentsLow.map((i) => (
                    <MapIncidentPin
                        lat={i.lat}
                        lng={i.lng}
                        styleOptions={pinStyleLow}
                    />
                ))}
            </GoogleMapReact>
        </div>
    );
};

MapView.propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
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
