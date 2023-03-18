import PropTypes from "prop-types";
import { Icon } from "@iconify/react";
import { useState } from "react";

const MapIncidentPin = (props) => {
    const { text, onClick, styleOptions, iconStyle, key } = props;

    const [style, setStyle] = useState(styleOptions);

    const defaultTransform = styleOptions.transform;

    const pxToInt = (px) => parseInt(px.replace("px", ""));

    // increase font size by 50% pixels on hover
    const onMouseHover = () => {
        const newSize = pxToInt(style.fontSize) * 1.5;
        const pinOffset = newSize / 2.0;
        setStyle({
            ...style,
            fontSize: `${newSize}px`,
            cursor: "pointer",
            transform: `translate(-${pinOffset}px, -${pinOffset}px`,
        });
    };

    const onMouseLeave = () => {
        setStyle({
            ...style,
            fontSize: `${pxToInt(style.fontSize) / 1.5}px`,
            cursor: "default",
            transform: defaultTransform,
        });
    };

    return (
    <div className="pin" style={style} key={key} onMouseEnter={onMouseHover} onMouseLeave={onMouseLeave}>
        <Icon icon={iconStyle} className="pin-icon" onClick={onClick} />
        <p className="pin-text">{text}</p>
    </div>
)};

MapIncidentPin.defaultProps = {
    onClick: null,
    styleOptions: {
        color: "black",
    },
    text: "",
};

MapIncidentPin.propTypes = {
    styleOptions: PropTypes.shape({
        color: PropTypes.string,
    }),
    onClick: PropTypes.func,
    text: PropTypes.string,
    iconStyle: PropTypes.string.isRequired,
};

export default MapIncidentPin;
