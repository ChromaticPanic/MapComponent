import PropTypes from "prop-types";
import { Icon } from '@iconify/react';

const MapIncidentPin = ({ text, onClick, styleOptions }) => (
    <div className="pin" style={styleOptions}>
        <Icon icon="mdi:map-marker-radius-outline" className="pin-icon" onClick={onClick} />
        <p className="pin-text">{text}</p>
    </div>
);

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
};

export default MapIncidentPin;
