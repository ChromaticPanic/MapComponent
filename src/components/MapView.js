import { Map, Marker } from "pigeon-maps"
import { osm } from 'pigeon-maps/providers'
import PropTypes from 'prop-types';


const MapView = (props) => {
    return (
      <Map provider={osm} height={props.height} width={props.width} defaultCenter={[51.07143, -98.165169]} defaultZoom={8}>
        <Marker width={50} anchor={[51.97386, -98.90937]} />
      </Map>
    )
  }

MapView.propTypes = {
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
}

MapView.defaultProps = {
    width: 1920,
    height: 1080,
}

export default MapView;