
import MapControlView from "./MapControlView";

const MapControlContainer = (props) => {
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
        setActive,
        setPredicted,
        setPriority,
        setSubFlinFlon,
        setSubThePas,
        setSubWekusko,
        setSubThicket,
        setSubHerchmer,
        setSubThompson,
    } = props;

    const handleClickActive = () => {
        setActive(!active);
    };

    const handleClickPredicted = () => {
        setPredicted(!predicted);
    };

    const handleClickPriority = () => {
        setPriority(!priority);
    };

    const handleClickSubFlinFlon = () => {
        setSubFlinFlon(!subFlinFlon);
    };

    const handleClickSubThePas = () => {
        setSubThePas(!subThePas);
    };

    const handleClickSubWekusko = () => {
        setSubWekusko(!subWekusko);
    };

    const handleClickSubThicket = () => {
        setSubThicket(!subThicket);
    };

    const handleClickSubHerchmer = () => {
        setSubHerchmer(!subHerchmer);
    };

    const handleClickSubThompson = () => {
        setSubThompson(!subThompson);
    };

    return (
        <MapControlView
            active={active}
            predicted={predicted}
            priority={priority}
            subFlinFlon={subFlinFlon}
            subThePas={subThePas}
            subWekusko={subWekusko}
            subThicket={subThicket}
            subHerchmer={subHerchmer}
            subThompson={subThompson}
            handleClickActive={handleClickActive}
            handleClickPredicted={handleClickPredicted}
            handleClickPriority={handleClickPriority}
            handleClickSubFlinFlon={handleClickSubFlinFlon}
            handleClickSubThePas={handleClickSubThePas}
            handleClickSubWekusko={handleClickSubWekusko}
            handleClickSubThicket={handleClickSubThicket}
            handleClickSubHerchmer={handleClickSubHerchmer}
            handleClickSubThompson={handleClickSubThompson}
        />
    );
};

export default MapControlContainer;
