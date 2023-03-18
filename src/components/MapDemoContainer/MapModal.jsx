// this component is only needed for demoing the click handler on the map markers
// this is a react component that will show a dialog 
// the props are an image a width and a height

import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import ReactModal from 'react-modal';
import PropTypes from 'prop-types';

const MapModal = (props) => {

  const { image, width, height, showModal, setShowModal } = props;

  const handleCloseModal = () => {
    setShowModal(false);
  };
  const imgWidth = width === '400px' ? width : '100%';

  return (
    <div>
      <ReactModal
        isOpen={showModal}
        contentLabel="Example Activity"
        style={{
          content: {
            width: `${width}px`,
            height: `${height}px`,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          },
        }}
      >
        <img
          src={image}
          style={{ maxWidth: '100%', maxHeight: '100%', width: imgWidth }}
          alt="Activity"
          onClick={handleCloseModal}
        />
      </ReactModal>
    </div>
  );
};


MapModal.defaultProps = {
    image: "",
    width: "1920px",
    height: "1080px",
};

MapModal.propTypes = {
    image: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
    showModal: PropTypes.bool.isRequired,
    setShowModal: PropTypes.func.isRequired,
};

export default MapModal;

//ReactDOM.render(<MapModal {...props} />, document.getElementById('main'));
