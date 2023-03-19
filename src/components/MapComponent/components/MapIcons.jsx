
export const markerIcon = (props) => {
    const { anchorFunc, color, scale } = props;
    return {
        path: "M1024 640q79 0 149 30t122 83t82 122t31 149q0 79-30 149t-83 122t-122 82t-149 31q-79 0-149-30t-122-83t-82-122t-31-149q0-79 30-149t83-122t122-82t149-31z",
        fillColor: color,
        fillOpacity: 1,
        strokeWeight: 1,
        strokeColor: "white",
        rotation: 0,
        scale: scale,
        anchor: anchorFunc(1024, 1024),
        fontFamily:"roboto",
        textSize:15,
        textColor:"white",
        labelOrigin: anchorFunc(1024, 1024),
    };
};