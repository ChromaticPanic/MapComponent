
export const withStyle = (incidents, style) => {
    return incidents.map((i) => {
        return {
            ...i,
            iconStyle: style,
        };
    });
};