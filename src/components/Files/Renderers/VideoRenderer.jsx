const VideoRenderer = ({ src }) => {
    return (
        <div className="w-full h-full bg-black flex items-center justify-center">
            <video
                src={src}
                controls
                className="max-h-full max-w-full"
            />
        </div>
    );
};

export default VideoRenderer;