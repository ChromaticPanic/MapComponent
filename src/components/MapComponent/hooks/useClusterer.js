import { MarkerClusterer } from "@googlemaps/markerclusterer";
import { useEffect, useState } from "react";

const useClusterer = (map, markers, mcOptions) => {
    const [clusterer, setClusterer] = useState(null);
    useEffect(() => {
        if (!map || !markers) return;
        const newClusterer = new MarkerClusterer({markers, mcOptions});
        newClusterer.setMap(map);
        setClusterer(newClusterer);
    }, [map, markers, mcOptions]);
    return [clusterer, setClusterer];
};

export default useClusterer;
