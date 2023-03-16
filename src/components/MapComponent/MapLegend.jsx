import { Icon } from "@iconify/react";

const legendStyle = {
    background: "#ffffff",
    padding: "5px",
    margin: "40px",
    border: "5px solid",
    borderColor: "#f4d03f",
    borderRadius: "10px",
    fontSize: "20px",
    borderCollapse: "collapse",
};

const MapLegend = (props) => {
    const { legendItems } = props;
    return (
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
    );
};

export default MapLegend;
