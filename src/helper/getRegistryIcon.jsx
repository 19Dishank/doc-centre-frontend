import {
    Folder,
    File,
} from "lucide-react";
import { FILE_TYPE_MAP } from "./fileTypeMap";

const iconClass = "size-4 shrink-0";

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