import { Resizable } from 'react-resizable';
import { forwardRef } from 'react';

const MapHolder = forwardRef((props, ref) => {
  const {handleAxis, ...restProps} = props;
  return <div ref={ref} className={`foo handle-${handleAxis}`} {...restProps} />;
});

const MapContainer = () => {
  return (
    <Resizable handle={<MapHolder />} />
  );
}

export default MapContainer;