import { useEffect, useState } from "react";

const CodeRenderer = ({ fileUrl }) => {

    const [content, setContent] = useState("");

    useEffect(() => {
        fetch(fileUrl)
            .then((res) => res.text())
            .then((data) => setContent(data))
            .catch(() => setContent("Failed to load file."));
    }, [fileUrl]);

    return (
        <pre className="p-4 text-sm overflow-auto h-full max-h-150 bg-zinc-950 text-zinc-100">
            <code>{content}</code>
        </pre>
    );
};

export default CodeRenderer;