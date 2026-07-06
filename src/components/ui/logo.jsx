import { memo } from "react";

const Logo = ({ width, height, mode }) => {
    return (
        <>
            <img src={`/images/DocCenter${mode === "dark" ? "DarkMode" : "LightMode"}.svg`} alt="DocCenter Logo" width={width} height={height} />
        </>
    );
};

export default memo(Logo);