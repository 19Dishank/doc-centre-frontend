import { memo } from "react";
import { NavLink } from "react-router-dom";

const Logo = ({ width, height, mode }) => {
    return (
        <NavLink to="/" className="flex items-center gap-2">
            <img src={`/images/DocCentral${mode === "dark" ? "DarkMode" : "LightMode"}.svg`} alt="DocCentral Logo" width={width} height={height} />
        </NavLink>
    );
};

export default memo(Logo);