// this component is only needed for demoing the click handler on the map markers
// this is a react component that will show a dialog
// the props are an image a width and a height

import PropTypes from "prop-types";
import { Modal, ModalOverlay, ModalContent, ModalBody } from "@chakra-ui/react";

const MapModal = (props) => {
    const { image, width, height, setShowModal, isOpen, onClose } =
        props;

    const handleCloseModal = () => {
        setShowModal(false);
        onClose();
    };
    
    let maxHeight = height;
    let maxWidth = width;
    let imgWidth = "100%";
    if( width === "400px" ) {
        maxHeight = null;
        maxWidth = null;
    };


    return (
        <>
            <Modal isOpen={isOpen} onClose={handleCloseModal} isCentered>
                <ModalOverlay />
                <ModalContent maxH={maxHeight} maxW={maxWidth}>
                    <ModalBody>
                        <img
                            src={image}
                            style={{ width: imgWidth, display: "block" }}
                            alt="Activity"
                            onClick={handleCloseModal}
                        />
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
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
    setShowModal: PropTypes.func.isRequired,
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default MapModal;

//ReactDOM.render(<MapModal {...props} />, document.getElementById('main'));
