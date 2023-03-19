import { Icon } from "@iconify/react";
import Draggable from "react-draggable";
import { useState } from "react";
import { defaultControlStyle } from "../constants";
import MapControlView from "./MapControlView";

const MapControlContainer = () => {
   
    const [active, setActive] = useState(true);
    const [predicted, setPredicted] = useState(true);
    const [priority, setPriority] = useState(true);
    const [subAll, setSubAll] = useState(true);
    const [subFlinFlon, setSubFlinFlon] = useState(true);
    const [subThePas, setSubThePas] = useState(true);
    const [subWekusko, setSubWekusko] = useState(true);
    const [subThicket, setSubThicket] = useState(true);
    const [subHerchmer, setSubHerchmer] = useState(true);
    const [subThompson, setSubThompson] = useState(true);


    return (
        <MapControlView 
        active
        predicted
        priority
        subAll
        subFlinFlon
        subThePas
        subWekusko
        subThicket
        subHerchmer
        subThompson />
    );
};

export default MapControlContainer;