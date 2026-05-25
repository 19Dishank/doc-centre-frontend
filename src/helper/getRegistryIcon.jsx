import {
    Image,
    FileText,
    Folder,
    Video,
    FileCode,
    FileArchive,
    Music,
    FileSpreadsheet,
    Presentation,
    File,
} from "lucide-react";

const iconClass = "size-4 shrink-0";

// Centralized file type configuration
const FILE_TYPE_MAP = {
    image: {
        extensions: ["png", "jpg", "jpeg", "gif", "webp", "svg", "bmp", "ico", "avif", "jfif"],
        icon: Image,
        className: "text-green-500",
    },

    video: {
        extensions: ["mp4", "mkv", "avi", "mov", "webm", "flv"],
        icon: Video,
        className: "text-purple-500",
    },

    audio: {
        extensions: ["mp3", "wav", "ogg", "flac", "aac"],
        icon: Music,
        className: "text-pink-500",
    },

    document: {
        extensions: ["pdf", "doc", "docx", "txt", "rtf"],
        icon: FileText,
        className: "text-blue-500",
    },

    spreadsheet: {
        extensions: ["xls", "xlsx", "csv"],
        icon: FileSpreadsheet,
        className: "text-emerald-600",
    },

    presentation: {
        extensions: ["ppt", "pptx"],
        icon: Presentation,
        className: "text-orange-500",
    },

    code: {
        extensions: [
            "js",
            "jsx",
            "ts",
            "tsx",
            "html",
            "css",
            "scss",
            "json",
            "xml",
            "yaml",
            "yml",
            "py",
            "java",
            "c",
            "cpp",
            "php",
            "rb",
            "go",
            "rs",
            "swift",
            "kt",
            "sql",
        ],
        icon: FileCode,
        className: "text-yellow-500",
    },

    archive: {
        extensions: ["zip", "rar", "7z", "tar", "gz"],
        icon: FileArchive,
        className: "text-amber-600",
    },
};

export const getRegistryIcon = (item) => {

    const isFolder =
        item?.type === "folder" ||
        (!item?.originalFileName && !item?.mimeType);

    if (isFolder) {
        return (
            <Folder
                className={`${iconClass} fill-yellow-400 text-yellow-500`}
            />
        );
    }

    const extension = item?.originalFileName
        ?.split(".")
        ?.pop()
        ?.toLowerCase();

    for (const type of Object.values(FILE_TYPE_MAP)) {
        if (type.extensions.includes(extension)) {
            const Icon = type.icon;

            return (
                <Icon className={`${iconClass} ${type.className}`} />
            );
        }
    }

    return <File className={`${iconClass} text-gray-500`} />;
};