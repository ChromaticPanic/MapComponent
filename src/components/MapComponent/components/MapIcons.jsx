
export const markerIcon = (props) => {
    const { anchorFunc, color, scale } = props;
    return {
        path: "M1024 640q79 0 149 30t122 83t82 122t31 149q0 79-30 149t-83 122t-122 82t-149 31q-79 0-149-30t-122-83t-82-122t-31-149q0-79 30-149t83-122t122-82t149-31z",
        fillColor: color,
        fillOpacity: 0.8,
        strokeWeight: 1,
        strokeColor: color,
        rotation: 0,
        scale: scale,
        anchor: anchorFunc(1024, 1024),
    };
};
export const markerActiveRemediation = (props) => {
    const { anchorFunc } = props;
    return {
        path: "M1024 640q79 0 149 30t122 83t82 122t31 149q0 79-30 149t-83 122t-122 82t-149 31q-79 0-149-30t-122-83t-82-122t-31-149q0-79 30-149t83-122t122-82t149-31z",
        fillColor: "blue",
        fillOpacity: 0.8,
        strokeWeight: 1,
        strokeColor: "blue",
        rotation: 0,
        scale: 0.025,
        anchor: anchorFunc(1024, 1024),
    };
};

export const markerPredictedIncident = (props) => {
    const { maps } = props;
    return {
        path: maps.SymbolPath.CIRCLE,
        fillColor: "orange",
        fillOpacity: 0.6,
        strokeWeight: 0,
        rotation: 0,
        scale: 2,
        anchor: new maps.Point(0.5, 0.5),
    };
};

export const markerHighPriorityIncident = (props) => {
    const { maps } = props;
    return {
        path: maps.SymbolPath.CIRCLE,
        fillColor: "red",
        fillOpacity: 0.6,
        strokeWeight: 0,
        rotation: 0,
        scale: 2,
        anchor: new maps.Point(0.5, 0.5),
    };
};
