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
import { Button, ButtonGroup, Stack, Box } from "@chakra-ui/react";
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
        <div>
            <Box
                id="map-controls"
                style={controlStyle}
                bg={"white"}
                overflowX={"auto"}
            >
                <Stack>
                    <ButtonGroup variant="outline" spacing="10" align={"center"}>
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
                                colorScheme="gray"
                                variant="solid"
                                borderColor={pinColorActiveRemediation}
                                isActive={active}
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
                                colorScheme="gray"
                                variant="solid"
                                borderColor={pinColorPredictedIncident}
                                isActive={predicted}
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
                                colorScheme="gray"
                                variant="solid"
                                borderColor={pinColorHighPriorityIncident}
                                isActive={priority}
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
                                colorScheme="gray"
                                variant="solid"
                                borderColor={colorSubFlinFlon}
                                isActive={subFlinFlon}
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
                                colorScheme="gray"
                                variant="solid"
                                borderColor={colorSubThePas}
                                isActive={subThePas}
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
                                colorScheme="gray"
                                variant="solid"
                                borderColor={colorSubWekusko}
                                isActive={subWekusko}
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
                                colorScheme="gray"
                                variant="solid"
                                borderColor={colorSubThicket}
                                isActive={subThicket}
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
                                colorScheme="gray"
                                variant="solid"
                                borderColor={colorSubHerchmer}
                                isActive={subHerchmer}
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
                                colorScheme="gray"
                                variant="solid"
                                borderColor={colorSubThompson}
                                isActive={subThompson}
                            >
                                Thompson
                            </Button>
                        </ButtonGroup>
                    </ButtonGroup>
                </Stack>
            </Box>
        </div>
    );
};

export default MapControlView;
