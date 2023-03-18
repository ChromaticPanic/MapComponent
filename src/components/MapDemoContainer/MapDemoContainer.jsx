import MapView from "../MapComponent/MapView";
import MapModal from "./MapModal";
import { useState } from "react";
import { Grid, GridItem, Card } from "@chakra-ui/react";
import img1 from "./Activity1.jpg";
import img2 from "./Activity2.jpg";
import img3 from "./Activity3.jpg";

const solo = true;

const center = {
    lat: 56.59638974465631,
    lng: -96.64761357599087,
};

const height = "100vh";
const width = "100%";

const MapDemoContainer = () => {
    const [image, setImage] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [modalWidth, setModalWidth] = useState(0);
    const [modalHeight, setModalHeight] = useState(0);

    const handleActiveRemediationClick = () => {
        // use assets/Activity2.jpg
        setImage(img2);
        setModalWidth(400);
        setModalHeight(600);
        setShowModal(true);
    };

    const handlePredictedIncidentClick = () => {
        // use assets/Activity3.jpg
        setImage(img3);
        setModalWidth(1920);
        setModalHeight(1080);
        setShowModal(true);
    };

    const handleHighPriorityIncidentClick = () => {
        // use assets/Activity1.jpg
        setImage(img1);
        setModalWidth(1920);
        setModalHeight(1080);
        setShowModal(true);
    };

    return (
        <>
            {showModal ? (
                <MapModal
                    image={image}
                    width={String(modalWidth) + "px"}
                    height={String(modalHeight) + "px"}
                    setShowModal={setShowModal}
                    showModal={showModal}
                />
            ) : solo ? (
                <div id="map-component">
                    <MapView
                        center={center}
                        height={height}
                        width={width}
                        handleActiveRemediationClick={
                            handleActiveRemediationClick
                        }
                        handleHighPriorityIncidentClick={
                            handleHighPriorityIncidentClick
                        }
                        handlePredictedIncidentClick={
                            handlePredictedIncidentClick
                        }
                    />
                </div>
            ) : (
                <Grid templateColumns="repeat(6, 1fr)" gap={6}>
                    <GridItem colSpan={4} rowSpan={2}>
                        <div id="map-component">
                            <MapView
                                center={center}
                                height={height}
                                width={width}
                                handleActiveRemediationClick={
                                    handleActiveRemediationClick
                                }
                                handleHighPriorityIncidentClick={
                                    handleHighPriorityIncidentClick
                                }
                                handlePredictedIncidentClick={
                                    handlePredictedIncidentClick
                                }
                            />
                        </div>
                    </GridItem>
                    <GridItem colSpan={2}>
                        <Card />
                    </GridItem>
                    <GridItem colSpan={2}>
                        <Card />
                    </GridItem>
                    <GridItem colSpan={2}>
                        <Card />
                    </GridItem>
                    <GridItem colSpan={2}>
                        <Card />
                    </GridItem>
                </Grid>
            )}
        </>
    );
};

export default MapDemoContainer;
