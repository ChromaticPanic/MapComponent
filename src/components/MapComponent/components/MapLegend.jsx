import { Icon } from "@iconify/react";
import Draggable from "react-draggable";
import { useState } from "react";

const MapLegend = (props) => {
    const { legendItems, map } = props;
    const [legendStyle, setLegendStyle] = useState({
        background: "#ffffff",
        padding: "5px",
        margin: "40px",
        border: "5px solid",
        borderColor: "#85929e",
        borderRadius: "10px",
        fontSize: "20px",
        borderCollapse: "collapse",
        zIndex: "1",
        position: "absolute",
    });

    return (
        <Draggable>
            <div id="map-legend" style={legendStyle}>
                <table cellPadding={0} cellSpacing={0}>
                    <thead>
                        <tr>
                            <th scope="col"></th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {legendItems.map((item) => {
                            return (
                                <tr key={item.name}>
                                    <td>
                                        <Icon
                                            style={item.styleOptions}
                                            icon={item.iconStyle}
                                            className="pin-icon"
                                            onClick={item.onClick}
                                        />
                                    </td>
                                    <td align="left">{item.name}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </Draggable>
    );
};

export default MapLegend;
