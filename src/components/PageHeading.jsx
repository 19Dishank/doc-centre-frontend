const PageHeading = ({heading, subheading}) => {
    return (
        <div className="flex flex-col gap-1">
            <h1 className="font-semibold text-2xl md:text-3xl leading-8 tracking-tight text-zinc-950">
                {heading}
            </h1>
            <p className="text-zinc-500 text-sm md:text-base">
                {subheading}
            </p>
        </div>
    );
};

export default PageHeading;