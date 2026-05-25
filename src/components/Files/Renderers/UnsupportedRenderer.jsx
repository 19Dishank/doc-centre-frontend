const UnsupportedRenderer = () => {
    return (
        <div className="h-full flex flex-col items-center justify-center text-muted-foreground gap-2 p-40">
            <p>Preview not available</p>
            <p className="text-xs">
                This file type is not supported.
            </p>
        </div>
    );
};

export default UnsupportedRenderer;