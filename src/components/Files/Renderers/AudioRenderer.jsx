const AudioRenderer = ({ src }) => {
    return (
        <div className="w-full h-full flex items-center justify-center p-10">
            <audio controls className="w-full">
                <source src={src} />
            </audio>
        </div>
    );
};

export default AudioRenderer;