import { useEffect, useState } from "react";
import { markerIcon } from "../components/MapIcons";
import { mapMarkers } from "../components/MapMarker";
import { withStyle } from "../utils/utils";

const useLoadMarkers = (
    mapRef,
    mapsRef,
    incidents,
    pinColor,
    scale,
    handleClick,
    visible
) => {
    const [markers, setMarkers] = useState([]);

    useEffect(() => {
        if (!mapsRef) return;
        function anchorFunc(x, y) {
            return new mapsRef.Point(x, y);
        }
        const newMarkers = mapMarkers({
            mapsRef: mapsRef,
            incidents: withStyle(
                incidents,
                markerIcon({
                    anchorFunc: anchorFunc,
                    color: pinColor,
                    scale: scale,
                })
            ),
            onMarkerClick: handleClick,
        });
        setMarkers(newMarkers);
    }, [mapsRef, incidents, pinColor, scale, handleClick]);

    useEffect(() => {
      if (!markers) return;
      if (visible) {
        markers.forEach((marker) => marker.setMap(mapRef));
      } else {
        markers.forEach((marker) => marker.setMap(null));
      }
    }, [markers, visible, mapRef]);

    return markers;
};

export default useLoadMarkers;
