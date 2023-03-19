import { MarkerClusterer } from "@googlemaps/markerclusterer";
import { useEffect, useState } from "react";
import { markerIcon } from "../components/MapIcons";

const useClusterer = (map, maps, markers, pinColor, scale) => {
    const [clusterer, setClusterer] = useState(null);
    useEffect(() => {
        if (!map || !markers) return;
        const renderer = {
            render: ({ count, position }) => {
                const anchorFunc = (x, y) => {
                    return new maps.Point(x, y);
                };
                const icon = markerIcon({
                    anchorFunc,
                    color: pinColor,
                    scale,
                    text: count.toString(),
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
        newClusterer.setMap(map);

        setClusterer(newClusterer);
    }, [map, maps, markers, pinColor, scale]);
    return [clusterer, setClusterer];
};

export default useClusterer;
