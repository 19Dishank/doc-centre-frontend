import { memo } from "react";

const PageHeading = ({ heading, subheading }) => {
    return (
        <div className="space-y-0.5">
            <h1 className="text-xl md:text-2xl font-semibold tracking-tight text-zinc-900">
                {heading}
            </h1>
            {subheading && (
                <p className="text-sm text-zinc-500">
                    {subheading}
                </p>
            )}
        </div>
    );
};

export default memo(PageHeading);