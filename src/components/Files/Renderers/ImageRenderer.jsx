const ImageRenderer = ({ src }) => {
    return (
        <div className="w-full h-full max-h-150 overflow-auto flex items-center justify-center p-4">
            <img
                src={src}
                alt="Preview"
                className="max-w-full max-h-full object-contain rounded-lg"
            />
        </div>
    );
};

export default ImageRenderer;