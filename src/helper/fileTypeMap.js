import {
    Image,
    Video,
    Music,
    FileText,
    FileSpreadsheet,
    Presentation,
    FileCode,
    FileCode2,
    Component,
    Globe,
    Palette,
    Braces,
    Database,
    NotebookText,
    Logs,
    Cog,
    Type,
    Mail,
    DraftingCompass,
    PenTool,
    Box,
    Download,
    Table,
    File,
    FileArchive
} from "lucide-react";

export const FILE_TYPE_MAP = {
    pdf: {
        extensions: ["pdf"],
        icon: FileText,
        className: "text-red-500",
    },

    word: {
        extensions: ["doc", "docx"],
        icon: FileText,
        className: "text-blue-600",
    },

    text: {
        extensions: ["txt", "rtf"],
        icon: FileText,
        className: "text-gray-500",
    },

    spreadsheet: {
        extensions: ["xls", "xlsx"],
        icon: FileSpreadsheet,
        className: "text-emerald-600",
    },

    csv: {
        extensions: ["csv"],
        icon: Table,
        className: "text-green-600",
    },

    presentation: {
        extensions: ["ppt", "pptx"],
        icon: Presentation,
        className: "text-orange-500",
    },

    image: {
        extensions: [
            "png",
            "jpg",
            "jpeg",
            "gif",
            "webp",
            "svg",
            "bmp",
            "ico",
            "avif",
            "jfif",
            "tiff",
        ],
        icon: Image,
        className: "text-green-500",
    },

    video: {
        extensions: [
            "mp4",
            "mkv",
            "avi",
            "mov",
            "webm",
            "flv",
            "wmv",
            "m4v",
        ],
        icon: Video,
        className: "text-purple-500",
    },

    audio: {
        extensions: [
            "mp3",
            "wav",
            "ogg",
            "flac",
            "aac",
            "m4a",
            "wma",
        ],
        icon: Music,
        className: "text-pink-500",
    },

    archive: {
        extensions: [
            "zip",
            "rar",
            "7z",
            "tar",
            "gz",
            "bz2",
            "xz",
        ],
        icon: FileArchive,
        className: "text-amber-600",
    },

    javascript: {
        extensions: ["js", "mjs", "cjs"],
        icon: FileCode,
        className: "text-yellow-500",
    },

    typescript: {
        extensions: ["ts"],
        icon: FileCode2,
        className: "text-blue-500",
    },

    react: {
        extensions: ["jsx", "tsx"],
        icon: Component,
        className: "text-cyan-500",
    },

    html: {
        extensions: ["html", "htm"],
        icon: Globe,
        className: "text-orange-600",
    },

    styles: {
        extensions: ["css", "scss", "sass", "less"],
        icon: Palette,
        className: "text-pink-600",
    },

    json: {
        extensions: ["json"],
        icon: Braces,
        className: "text-yellow-600",
    },

    xml: {
        extensions: ["xml"],
        icon: FileCode,
        className: "text-orange-500",
    },

    yaml: {
        extensions: ["yaml", "yml"],
        icon: FileCode,
        className: "text-red-400",
    },

    python: {
        extensions: ["py"],
        icon: FileCode,
        className: "text-blue-500",
    },

    java: {
        extensions: ["java"],
        icon: FileCode,
        className: "text-red-500",
    },

    cpp: {
        extensions: ["c", "cpp", "h", "hpp"],
        icon: FileCode,
        className: "text-indigo-500",
    },

    php: {
        extensions: ["php"],
        icon: FileCode,
        className: "text-violet-500",
    },

    go: {
        extensions: ["go"],
        icon: FileCode,
        className: "text-sky-500",
    },

    rust: {
        extensions: ["rs"],
        icon: FileCode,
        className: "text-orange-700",
    },

    kotlin: {
        extensions: ["kt"],
        icon: FileCode,
        className: "text-purple-600",
    },

    swift: {
        extensions: ["swift"],
        icon: FileCode,
        className: "text-orange-500",
    },

    sql: {
        extensions: ["sql"],
        icon: Database,
        className: "text-blue-700",
    },

    markdown: {
        extensions: ["md"],
        icon: NotebookText,
        className: "text-gray-700",
    },

    log: {
        extensions: ["log"],
        icon: Logs,
        className: "text-gray-500",
    },

    database: {
        extensions: ["db", "sqlite", "mdb"],
        icon: Database,
        className: "text-blue-600",
    },

    executable: {
        extensions: ["exe", "msi", "apk", "app", "deb", "rpm"],
        icon: Cog,
        className: "text-slate-600",
    },

    font: {
        extensions: ["ttf", "otf", "woff", "woff2"],
        icon: Type,
        className: "text-violet-500",
    },

    email: {
        extensions: ["eml", "msg"],
        icon: Mail,
        className: "text-blue-500",
    },

    cad: {
        extensions: ["dwg", "dxf"],
        icon: DraftingCompass,
        className: "text-orange-600",
    },

    design: {
        extensions: ["psd", "ai", "xd", "fig"],
        icon: PenTool,
        className: "text-pink-600",
    },

    model3d: {
        extensions: ["obj", "fbx", "stl", "blend", "3ds"],
        icon: Box,
        className: "text-teal-600",
    },

    torrent: {
        extensions: ["torrent"],
        icon: Download,
        className: "text-green-700",
    },

    unknown: {
        extensions: [],
        icon: File,
        className: "text-gray-400",
    },
};