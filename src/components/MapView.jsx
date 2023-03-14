import { Map, Marker } from "pigeon-maps"
import { osm } from 'pigeon-maps/providers'
import PropTypes from 'prop-types';


const MapView = (props) => {
  const { height, width, location } = props;
  const { lat, lng } = location;
    return (
      <Map provider={osm} height={height} width={width} defaultCenter={[lat, lng]} defaultZoom={8}>
        <Marker width={50} anchor={[51.97386, -98.90937]} />
      </Map>
    )
  }

MapView.propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
    location: {
        lat: PropTypes.number,
        lng: PropTypes.number,
    },
    tracks: PropTypes.arrayOf(PropTypes.shape({})),
    stations: PropTypes.arrayOf(PropTypes.shape({})),
    incidentsLow: PropTypes.arrayOf(PropTypes.shape({})),
    incidentsMid: PropTypes.arrayOf(PropTypes.shape({})),
    incidentsHigh: PropTypes.arrayOf(PropTypes.shape({})),
}

MapView.defaultProps = {
    width: 1920,
    height: 1080,
    location: {
        lat: 51.07143,
        lng: -98.165169,
    },
    tracks: [],
    stations: [],
    incidentsLow: [],
    incidentsMid: [],
    incidentsHigh: [],
}

export default MapView;