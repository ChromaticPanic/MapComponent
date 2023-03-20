

export const scaleSmSolo = 0.0125;
export const scaleMdSolo = 0.015;
export const scaleLgSolo = 0.025;
export const scaleMdCluster = 0.035;
export const scaleLgCluster = 0.05;
export const scaleXlCluster = 0.1;
export const pinColorActiveRemediation = "#3A5F93";
export const pinColorPredictedIncident = "#FEB92D";
export const pinColorHighPriorityIncident = "#E82B49";
export const legendIconSize = "20px";
export const subdivisions = [
    "All",
    "Flin Flon",
    "The Pas",
    "Wekusko",
    "Thicket",
    "Herchmer",
    "Thompson",
];

export const colorSubAll = "black";
export const colorSubFlinFlon = "#C8B2A8";
export const colorSubThePas = "#ffc900";
export const colorSubWekusko = "white";
export const colorSubThicket = "#BB8FD0";
export const colorSubHerchmer = "#EDC47F";
export const colorSubThompson = "#78ff5f";

export const limitsFlinFlon = [
    {
        lat: 54.84436759709995,
        lng: -101.96258669537703
    },
    {
        lat: 53.663379849962396,
        lng: -101.12992975070046
    }
];

export const limitsThePas = [
    {
        lat: 53.839277405601834,
        lng: -101.25656026839334
    },
    {
        lat: 53.74869959304107,
        lng: -101.22238806062148
    }
];

export const limitsWekusko = [
    {
        lat: 53.81042448046114,
        lng: -101.36654809109417
    },
    {
        lat: 55.037062695569034,
        lng: -98.53311833656625
    }
];

export const limitsThicket = [
    {
        lat: 54.86130170839179,
        lng: -98.69693911997605
    },
    {
        lat: 56.40078920340232,
        lng: -94.55883719438754
    }
];

export const limitsHerchmer = [
    {
        lat: 56.3277351329905,
        lng: -94.76593373841469
    },
    {
        lat: 58.8299226347405,
        lng: -94.00332023576732
    }
];

export const limitsThompson = [
    {
        lat: 55.79689666900781,
        lng: -97.93486103547043
    },
    {
        lat: 55.43124371253696,
        lng: -97.35499071219444
    }
];

export const defaultLegendStyle = {
    background: "#ffffff",
    padding: "5px",
    margin: "40px",
    border: "5px solid",
    borderColor: "#85929e",
    borderRadius: "10px",
    fontSize: "18px",
    borderCollapse: "collapse",
    zIndex: "1",
    position: "absolute",
};
export const defaultControlStyle = {
    background: "#5b5b5b",
    padding: "10px",
    //margin: "40px",
    width: "100%",
    border: "3px solid",
    borderColor: "gray",
    borderRadius: "10px",
    bottom: "0px",
    left: "0px",
    zIndex: "1",
    position: "absolute",
};

export const defaultMarkerIcon = {
    path: "M1024 640q79 0 149 30t122 83t82 122t31 149q0 79-30 149t-83 122t-122 82t-149 31q-79 0-149-30t-122-83t-82-122t-31-149q0-79 30-149t83-122t122-82t149-31z",
    fillColor: "white",
    fillOpacity: 1,
    strokeOpacity: 0.8,
    strokeWeight: 1,
    strokeColor: "white",
    rotation: 0,
    scale: 1,
    anchor: null,
    fontFamily:"roboto",
    textSize:15,
    textColor:"white",
    labelOrigin: null,
};