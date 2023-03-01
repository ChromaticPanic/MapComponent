import { Map, Marker } from "pigeon-maps"
import { osm } from 'pigeon-maps/providers'

const MyMap = () => {
    return (
      <Map provider={osm} height={800} defaultCenter={[51.07143, -98.165169]} defaultZoom={8}>
        <Marker width={50} anchor={[51.97386, -98.90937]} />
      </Map>
    )
  }

export default MyMap;