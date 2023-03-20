import { MarkerClusterer } from "@googlemaps/markerclusterer";
import { useEffect, useState } from "react";
import { markerIcon } from "../components/MapIcons";

const useClusterer = (map, maps, markers, pinColor, scale, visible) => {
    const [clusterer, setClusterer] = useState(null);
    useEffect(() => {
        if (!map || !markers) return;
        const renderer = {
            render: ({ count, position }) => {
                if (count < 2) return null;
                const anchorFunc = (x, y) => {
                    return new maps.Point(x, y);
                };
                const icon = markerIcon({
                    anchorFunc,
                    color: pinColor,
                    scale,
                    overrides: {
                        strokeOpacity: 0.5,
                        strokeWeight: 6,
                        strokeColor: "#f9e79f",
                    },
                });
                const marker = new maps.Marker({
                    label: {
                        text: String(count),
                        color: "white",
                        fontSize: "11px",
                    },
                    icon,
                    position,
                    // adjust zIndex to be above other markers
                    zIndex: Number(maps.Marker.MAX_ZINDEX) + count,
                });

                maps.event.addListener(marker, "mouseover", () => {
                    marker.setOptions({
                        icon: {
                            ...marker.icon,
                            scale: marker.icon.scale * 1.5,
                        },
                    });
                });

                maps.event.addListener(marker, "mouseout", () => {
                    marker.setOptions({
                        icon: {
                            ...marker.icon,
                            scale: marker.icon.scale / 1.5,
                        },
                    });
                });
                return marker;
            },
        };

        const newClusterer = new MarkerClusterer({ markers, renderer });
        // const newClusterer = new MarkerClusterer({ markers });
        // newClusterer.setMap(map);

        setClusterer(newClusterer);
    }, [map, maps, markers, pinColor, scale]);

    useEffect(() => {
        if (!clusterer) return;
        clusterer.setMap(visible ? map : null);
    }, [clusterer, map, visible]);

    return clusterer;
};

export default useClusterer;
