
import { Icon } from '@iconify/react';

const legendStyle = {
    background: "#b8b0b0",
    padding: "10px",
    margin: "10px",
    border: "3px solid #000",
};

const MapLegend = (props) => {
    const { legendItems } = props;
    return (
        <div id="map-legend" style={legendStyle}>
            <h3>Legend</h3>
            {legendItems.map((item) => {
                return (
                    <div key={item.name + "1"}>
                        <div key={item.name + "2"} style={item.styleOptions}>
                        <Icon icon={item.iconStyle} className="pin-icon" onClick={item.onClick} />
                        </div>
                        <div key={item.name + "3"} >{item.name}</div>
                    </div>
                );
            })}
        </div>
    );
};

export default MapLegend;
