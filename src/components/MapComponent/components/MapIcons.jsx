import { defaultMarkerIcon } from "../constants";

export const markerIcon = (props) => {
    const { anchorFunc, color, scale, overrides } = props;

    let icon = {
        ...defaultMarkerIcon,
        fillColor: color,
        scale: scale,
        anchor: anchorFunc(1024, 1024),
        labelOrigin: anchorFunc(1024, 1024),
    };

    if (overrides) {
        icon = { ...icon, ...overrides };
    }

    return icon;
};

export const ControlIncidentIcon = (props) => {
    const { color, size } = props;

    let values = {
        width: 24,
        height: 24,
        fill: "black",
    };

    if (color) {
        values = { ...values, fill: color };
    }

    if (size) {
        values = { ...values, width: size, height: size };
    }

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={values.width}
            height={values.height}
            viewBox="0 0 24 24"
            fill={values.fill}
        >
            <path
                fill={values.fill}
                d="M12 22q-2.075 0-3.9-.788q-1.825-.787-3.175-2.137q-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175q1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138q1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175q-1.35 1.35-3.175 2.137Q14.075 22 12 22Z"
            />
        </svg>
    );
};

export const ControlIncidentIconDeselected = (props) => {
    const { color, size } = props;

    let values = {
        width: 24,
        height: 24,
        fill: "black",
    };

    if (color) {
        values = { ...values, fill: color };
    }

    if (size) {
        values = { ...values, width: size, height: size };
    }

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={values.width}
            height={values.height}
            viewBox="0 0 24 24"
        >
            <path
                stroke={values.fill}
                strokeWidth="2"
                d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10s10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8z"
            />
        </svg>
    );
};

export const ControlRailIcon = (props) => {
    const { color, size } = props;

    let values = {
        width: 24,
        height: 24,
        fill: "black",
    };

    if (color) {
        values = { ...values, fill: color };
    }

    if (size) {
        values = { ...values, width: size, height: size };
    }

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={values.width}
            height={values.height}
            viewBox="0 0 24 24"
        >
            <path
                fill="none"
                stroke={values.fill}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 15L15 4m5 5L9 20m-4-8l7 7M8.5 8.5l7 7M12 5l7 7"
            />
        </svg>
    );
};

export const ControlRailIconDeselected = (props) => {
    const { color, size } = props;

    let values = {
        width: 24,
        height: 24,
        fill: "#b3b3b3",
    };

    if (color) {
        values = { ...values, fill: color };
    }

    if (size) {
        values = { ...values, width: size, height: size };
    }

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={values.width}
            height={values.height}
            viewBox="0 0 24 24"
        >
            <path
                fill="none"
                stroke={values.fill}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 15L15 4m5 5L9 20m-4-8l7 7M8.5 8.5l7 7M12 5l7 7"
            />
        </svg>
    );
};
