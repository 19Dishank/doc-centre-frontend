import { useEffect, useState } from "react";

const TextRenderer = ({ fileUrl }) => {

    const [content, setContent] = useState("");

    useEffect(() => {
        fetch(fileUrl)
            .then((res) => res.text())
            .then((data) => setContent(data))
            .catch(() => setContent("Failed to load file."));
    }, [fileUrl]);

    return (
        <div className="p-4 max-h-[70vh] overflow-y-auto whitespace-pre-wrap text-sm">
            {content}
        </div>
    );
};

export default TextRenderer;