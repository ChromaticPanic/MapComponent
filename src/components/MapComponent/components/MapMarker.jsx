import PropTypes from "prop-types";
import { Icon } from "@iconify/react";
import MarkerClusterer from '@google/markerclusterer'

export const MapMarkers = (props) => {
    const { map, maps, markers, onMarkerClick, onMarkerMouseOver, onMarkerMouseOut } = props;

    const mapMarkers = markers.map((marker) => {
        const { lat, lng, iconStyle, text, key } = marker;
        return new maps.Marker({position: {lat, lng}, map, icon: iconStyle, title: text, key});
    });

    return mapMarkers;

    // mapMarkers.forEach((marker) => {
    //     marker.addListener("click", () => {
    //         onMarkerClick(marker);
    //     });
    //     marker.addListener("mouseover", () => {
    //         onMarkerMouseOver(marker);
    //     });
    //     marker.addListener("mouseout", () => {
    //         onMarkerMouseOut(marker);
    //     });
    // });
}

