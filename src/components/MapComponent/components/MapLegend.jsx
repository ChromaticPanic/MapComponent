import { Icon } from "@iconify/react";
import Draggable from "react-draggable";
import { useState } from "react";
import { defaultLegendStyle } from "../constants";

const MapLegend = (props) => {
    const { legendItems, map } = props;
    const [legendStyle, setLegendStyle] = useState(defaultLegendStyle);

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
