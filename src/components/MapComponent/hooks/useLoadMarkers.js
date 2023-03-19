import { useEffect, useState } from "react";
import {
    markerIcon,
} from "../components/MapIcons";
import { mapMarkers } from "../components/MapMarker";
import { withStyle } from "../utils/utils";

const useLoadMarkers = (mapRef, mapsRef, incidents, pinColor, scale, handleClick) => {
    const [markers, setMarkers] = useState([]);
  
    useEffect(() => {
      if (!mapRef || !mapsRef) return;
      function anchorFunc(x, y) {
        return new mapsRef.Point(x, y);
      }
      const newMarkers = mapMarkers({
        mapRef: mapRef,
        mapsRef: mapsRef,
        incidents: withStyle(
          incidents,
          markerIcon({ anchorFunc: anchorFunc, color: pinColor, scale: scale })
        ),
        onMarkerClick: handleClick,
      });
      setMarkers(newMarkers);
    }, [mapRef, mapsRef, incidents, pinColor, scale, handleClick]);
  
    return [markers, setMarkers];
  };

export default useLoadMarkers;