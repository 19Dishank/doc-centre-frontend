import { memo } from "react";

const Logo = ({ width, height, mode }) => {
    return (
        <>
            <img src={`/images/DocCentral${mode === "dark" ? "DarkMode" : "LightMode"}.svg`} alt="DocCentral Logo" width={width} height={height} />
        </>
    );
};

export default memo(Logo);