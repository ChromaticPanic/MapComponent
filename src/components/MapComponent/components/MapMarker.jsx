import PropTypes from "prop-types";

export const mapMarkers = (props) => {
    const { mapsRef, incidents, onMarkerClick } = props;

    const setupListeners = (marker, incident, onMarkerClick) => {
        marker.addListener("click", () => {
            onMarkerClick(incident);
        });

        // on mouseover increase scale by multiplying old scale by 1.5
        mapsRef.event.addListener(marker, "mouseover", () => {
            marker.setOptions({
                icon: {
                    ...marker.icon,
                    scale: marker.icon.scale * 1.5,
                },
            });
        });

        // on mouseout decrease scale by dividing old scale by 1.5
        mapsRef.event.addListener(marker, "mouseout", () => {
            marker.setOptions({
                icon: {
                    ...marker.icon,
                    scale: marker.icon.scale / 1.5,
                },
            });
        });

        return marker;
    };

    const markers = incidents.map((i) => {
        const { lat, lng, iconStyle, text, key } = i;
        let newMarker = new mapsRef.Marker({position: {lat, lng}, icon: iconStyle, title: text, key});

        setupListeners(newMarker, i, onMarkerClick);
        return newMarker;
    });

    return markers;
}

