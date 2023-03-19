import Draggable from "react-draggable";
import { useState } from "react";
import {
    defaultControlStyle,
    pinColorActiveRemediation,
    pinColorHighPriorityIncident,
    pinColorPredictedIncident,
    colorSubAll,
    colorSubFlinFlon,
    colorSubThePas,
    colorSubWekusko,
    colorSubThicket,
    colorSubHerchmer,
    colorSubThompson,
} from "../constants";
import { Button, ButtonGroup, ChakraProvider, VStack } from "@chakra-ui/react";
import {
    ControlIncidentIcon,
    ControlRailIcon,
    ControlIncidentIconDeselected,
    ControlRailIconDeselected,
} from "./MapIcons";

const MapControlView = (props) => {
    const {
        active,
        predicted,
        priority,
        subAll,
        subFlinFlon,
        subThePas,
        subWekusko,
        subThicket,
        subHerchmer,
        subThompson,
        handleClickActiveOn,
        handleClickActiveOff,
        handleClickPredictedOn,
        handleClickPredictedOff,
        handleClickPriorityOn,
        handleClickPriorityOff,
        handleClickSubAllOn,
        handleClickSubFlinFlonOn,
        handleClickSubThePasOn,
        handleClickSubWekuskoOn,
        handleClickSubThicketOn,
        handleClickSubHerchmerOn,
        handleClickSubThompsonOn,
    } = props;
    const [controlStyle, setControlStyle] = useState(defaultControlStyle);
    const incidentIconSize = 16;
    const railIconSize = 26;

    return (
        <Draggable>
            <div id="map-control" style={controlStyle}>
                <ChakraProvider>
                    <ButtonGroup variant="outline" spacing="10">
                        <ButtonGroup variant="outline" spacing="4">
                            <Button
                                leftIcon={
                                    active ? (
                                        <ControlIncidentIcon
                                            size={incidentIconSize}
                                            color={pinColorActiveRemediation}
                                        />
                                    ) : (
                                        <ControlIncidentIconDeselected
                                            size={incidentIconSize}
                                            color={pinColorActiveRemediation}
                                        />
                                    )
                                }
                                colorScheme="Gray"
                                variant="solid"
                                borderColor={pinColorActiveRemediation}
                                onClick={
                                    active
                                        ? handleClickActiveOff
                                        : handleClickActiveOn
                                }
                            >
                                Active Remediation
                            </Button>
                            <Button
                                leftIcon={
                                    predicted ? (
                                        <ControlIncidentIcon
                                            size={incidentIconSize}
                                            color={pinColorPredictedIncident}
                                        />
                                    ) : (
                                        <ControlIncidentIconDeselected
                                            size={incidentIconSize}
                                            color={pinColorPredictedIncident}
                                        />
                                    )
                                }
                                colorScheme="Gray"
                                variant="solid"
                                borderColor={pinColorPredictedIncident}
                                onClick={
                                    predicted
                                        ? handleClickPredictedOff
                                        : handleClickPredictedOn
                                }
                            >
                                Predicted Incident
                            </Button>
                            <Button
                                leftIcon={
                                    priority ? (
                                        <ControlIncidentIcon
                                            size={incidentIconSize}
                                            color={pinColorHighPriorityIncident}
                                        />
                                    ) : (
                                        <ControlIncidentIconDeselected
                                            size={incidentIconSize}
                                            color={pinColorHighPriorityIncident}
                                        />
                                    )
                                }
                                colorScheme="Gray"
                                variant="solid"
                                borderColor={pinColorHighPriorityIncident}
                                onClick={
                                    priority
                                        ? handleClickPriorityOff
                                        : handleClickPriorityOn
                                }
                            >
                                High Priority
                            </Button>
                        </ButtonGroup>
                        <ButtonGroup variant="outline" spacing="4">
                            <Button
                                leftIcon={
                                    subAll ? (
                                        <ControlRailIcon
                                            size={railIconSize}
                                            color={colorSubAll}
                                        />
                                    ) : (
                                        <ControlRailIconDeselected
                                            size={railIconSize}
                                        />
                                    )
                                }
                                colorScheme="Gray"
                                variant="solid"
                                borderColor={colorSubAll}
                            >
                                All
                            </Button>
                            <Button
                                leftIcon={
                                    subFlinFlon ? (
                                        <ControlRailIcon
                                            size={railIconSize}
                                            color={colorSubFlinFlon}
                                        />
                                    ) : (
                                        <ControlRailIconDeselected
                                            size={railIconSize}
                                        />
                                    )
                                }
                                colorScheme="Gray"
                                variant="solid"
                                borderColor={colorSubFlinFlon}
                            >
                                Flin Flon
                            </Button>
                            <Button
                                leftIcon={
                                    subThePas ? (
                                        <ControlRailIcon
                                            size={railIconSize}
                                            color={colorSubThePas}
                                        />
                                    ) : (
                                        <ControlRailIconDeselected
                                            size={railIconSize}
                                        />
                                    )
                                }
                                colorScheme="Gray"
                                variant="solid"
                                borderColor={colorSubThePas}
                            >
                                The Pas
                            </Button>
                            <Button
                                leftIcon={
                                    subWekusko ? (
                                        <ControlRailIcon
                                            size={railIconSize}
                                            color={colorSubWekusko}
                                        />
                                    ) : (
                                        <ControlRailIconDeselected
                                            size={railIconSize}
                                        />
                                    )
                                }
                                colorScheme="Gray"
                                variant="solid"
                                borderColor={colorSubWekusko}
                            >
                                Wekusko
                            </Button>
                            <Button
                                leftIcon={
                                    subThicket ? (
                                        <ControlRailIcon
                                            size={railIconSize}
                                            color={colorSubThicket}
                                        />
                                    ) : (
                                        <ControlRailIconDeselected
                                            size={railIconSize}
                                        />
                                    )
                                }
                                colorScheme="Gray"
                                variant="solid"
                                borderColor={colorSubThicket}
                            >
                                Thicket
                            </Button>
                            <Button
                                leftIcon={
                                    subHerchmer ? (
                                        <ControlRailIcon
                                            size={railIconSize}
                                            color={colorSubHerchmer}
                                        />
                                    ) : (
                                        <ControlRailIconDeselected
                                            size={railIconSize}
                                        />
                                    )
                                }
                                colorScheme="Gray"
                                variant="solid"
                                borderColor={colorSubHerchmer}
                            >
                                Herchmer
                            </Button>
                            <Button
                                leftIcon={
                                    subThompson ? (
                                        <ControlRailIcon
                                            size={railIconSize}
                                            color={colorSubThompson}
                                        />
                                    ) : (
                                        <ControlRailIconDeselected
                                            size={railIconSize}
                                        />
                                    )
                                }
                                colorScheme="Gray"
                                variant="solid"
                                borderColor={colorSubThompson}
                            >
                                Thompson
                            </Button>
                        </ButtonGroup>
                    </ButtonGroup>
                </ChakraProvider>
            </div>
        </Draggable>
    );
};

export default MapControlView;
