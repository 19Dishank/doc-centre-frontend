import { Image, FileText, Folder, Video, FileCode, FileArchive } from "lucide-react";

export const getRegistryIcons = (type, extension) => {
    const iconClass = "size-4 shrink-0";

    if (type === "folder") {
        return <Folder className={`${iconClass} fill-yellow-400 text-yellow-500`} />;
    } else {

        switch (extension) {

            case "pdf":
                return <FileText className={`${iconClass} text-red-500`} />;
            case "docx":
            case "doc":
                return <FileText className={`${iconClass} text-blue-500`} />;

            case "png":
            case "jpeg":
            case "jpg":
                return <Image className={`${iconClass} text-green-500`} />;
            case "svg":
                return <FileCode className={`${iconClass} text-orange-500`} />;

            case "zip":
            case "rar":
            case "7z":
                return <FileArchive className={`${iconClass} text-amber-600`} />;

            case "mp4":
            case "mkv":
                return <Video className={`${iconClass} text-purple-500`} />;

            default:
                return <FileText className={`${iconClass} text-gray-500`} />;
        }
    }
};
