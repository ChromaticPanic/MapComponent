import { Resizable } from 'react-resizable';
import { forwardRef } from 'react';

const MapContainer = forwardRef((props, ref) => {
  const {handleAxis, ...restProps} = props;
  return <div ref={ref} className={`foo handle-${handleAxis}`} {...restProps} />;
});

const MapComponent = () => {
  return (
    <Resizable handle={<MapContainer />} />
  );
}

export default MapComponent;