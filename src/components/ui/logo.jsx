import React, { memo } from "react";

const Logo = ({ width, height, mode, className, onClick }) => {
    return (
        <React.Fragment>
            <img
                src={`/images/DocCenter${mode === "dark" ? "DarkMode" : "LightMode"}.svg`}
                alt="DocCenter Logo"
                width={width}
                height={height}
                className={`${onClick ? "cursor-pointer" : ""} ${className}`}
                onClick={onClick}
            />
        </React.Fragment>
    );
};

export default memo(Logo);