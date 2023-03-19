
import {
    defaultControlStyle,
    pinColorActiveRemediation,
    pinColorHighPriorityIncident,
    pinColorPredictedIncident,
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
        subFlinFlon,
        subThePas,
        subWekusko,
        subThicket,
        subHerchmer,
        subThompson,
        handleClickActive,
        handleClickPredicted,
        handleClickPriority,
        handleClickSubFlinFlon,
        handleClickSubThePas,
        handleClickSubWekusko,
        handleClickSubThicket,
        handleClickSubHerchmer,
        handleClickSubThompson,
    } = props;
    const incidentIconSize = 16;
    const railIconSize = 26;

    return (
        <div>
            <Box
                id="map-controls"
                style={defaultControlStyle}
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
                                        ? handleClickActive(false)
                                        : handleClickActive(true)
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
                                        ? handleClickPredicted(false)
                                        : handleClickPredicted(true)
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
                                        ? handleClickPriority(false)
                                        : handleClickPriority(true)
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
                                onClick={ subFlinFlon ? handleClickSubFlinFlon(false) : handleClickSubFlinFlon(true) }
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
                                onClick={ subThePas ? handleClickSubThePas(false) : handleClickSubThePas(true) }
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
                                onClick={ subWekusko ? handleClickSubWekusko(false) : handleClickSubWekusko(true) }
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
                                onClick={ subThicket ? handleClickSubThicket(false) : handleClickSubThicket(true) }
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
                                onClick={ subHerchmer ? handleClickSubHerchmer(false) : handleClickSubHerchmer(true) }
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
                                onClick={ subThompson ? handleClickSubThompson(false) : handleClickSubThompson(true) }
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
