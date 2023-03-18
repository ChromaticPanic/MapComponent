export const MarkerActiveRemediation = (props) => {
    const { maps } = props;
    return {
    path: maps.SymbolPath.CIRCLE,
    fillColor: "blue",
    fillOpacity: 0.6,
    strokeWeight: 0,
    rotation: 0,
    scale: 2,
    anchor: new maps.Point(0.5, 0.5),
    };
};

export const MarkerPredictedIncident = (props) => {
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
}

export const MarkerHighPriorityIncident = (props) => {
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
}