import PropTypes from "prop-types";
// import MarkerClusterer from '@google/markerclusterer'

export const mapMarkers = (props) => {
    const { mapRef: map, mapsRef, incidents, onMarkerClick } = props;

    const setupListeners = (marker, incident, onMarkerClick) => {
        marker.addListener("click", () => {
            onMarkerClick(incident);
        });
        return marker;
    };

    console.log("mapMarkers: incidents", incidents);
    const markers = incidents.map((i) => {
        const { lat, lng, iconStyle, text, key } = i;
        let newMarker = new mapsRef.Marker({position: {lat, lng}, map, icon: iconStyle, title: text, key});

        setupListeners(newMarker, i, onMarkerClick);
        return newMarker;
    });

    return markers;
}

