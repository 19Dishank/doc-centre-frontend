import { Image, FileText, Folder, Video } from "lucide-react";

export const getRegistryIcons = (type) => {
    const iconClass = "size-4 shrink-0";

    const icons = {
        Folder: <Folder className={`${iconClass} fill-yellow-400 text-yellow-500`} />,
        PDF: <FileText className={`${iconClass} text-red-500`} />,
        DOCX: <FileText className={`${iconClass} text-blue-500`} />,
        PNG: <Image className={`${iconClass} text-green-500`} />,
        MP4: <Video className={`${iconClass} text-purple-500`} />,
    };

    return icons[type] || <FileText className={`${iconClass} text-gray-500`} />;
};
