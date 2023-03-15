import { Wrapper, Status } from "@googlemaps/react-wrapper";
import MapView from "./MapView";

const MapComponent = () => {
    const render = (status) => {
        if (status === Status.LOADING) return <h3>{status} ..</h3>;
        if (status === Status.FAILURE) return <h3>{status} ...</h3>;
        return null;
    };

    const center = {
        lat: 56.59638974465631,
        lng: -96.64761357599087,
    };

    const height = "100vh";
    const width = "100%";

    return (
        <div id="map-component">
            <MapView center={center} height={height} width={width} />
        </div>
    );
};

export default MapComponent;
