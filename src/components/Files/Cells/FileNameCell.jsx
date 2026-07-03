import { createFolder, renameFile, renameFolder } from "@/api/file";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import DocumentPreview from "../DocumentPreview";
import { getRegistryIcon } from "@/helper/getRegistryIcon";
import { toastNotification } from "@/helper/toastNotification";

const truncateFileName = (name, maxLength = 40) => {
    if (name?.length > maxLength) {
        return name?.substring(0, maxLength) + "...";
    }
    return name;
};

const FileNameCell = ({
    row,
    setNewFolderRow,
    parentId,
    setParentId,
    getFiles,
    setRenameMode,
    renameMode,
    setNavigationBar,
    showPreview = true,
}) => {
    const [previewDocument, setPreviewDocument] = useState(null);

    const isFolder = !row.originalFileName;
    const isEditing = renameMode === row._id;
    const extension = row.originalFileName?.split(".").pop();
    const fullDisplayName = row.originalFileName
        ? row.originalFileName.split(".").slice(0, -1).join(".")
        : row.name;
    const displayName = truncateFileName(fullDisplayName);

    const [input, setInput] = useState(displayName);

    const handleKeyDown = async ({ key, target }) => {
        const value = target.value;

        if (key === "Escape") {
            row.isNewFolder ? setNewFolderRow(null) : setRenameMode(null);
            return;
        }

        if (key !== "Enter") return;

        if (!value || value.length < 1 || value.length > 100) {
            toastNotification("Folder name should contain 1 to 100 characters", "error");
            return;
        }

        if (row.isNewFolder) {
            try {


                await createFolder({
                    parentFolderId: parentId,
                    name: value,
                });

                setNewFolderRow(null);
                getFiles();
                return;
            } catch (error) {
                toastNotification(
                    error?.response?.data?.errors?.[0]?.msg ||
                    "Error creating folder:", "error");
                return;
            }
        }

        if (isFolder) {
            await renameFolder(row._id, value);
        } else {
            await renameFile(row._id, `${value}.${extension}`);
        }

        setRenameMode(null);
        getFiles();
    };

    const handleChange = ({ target: { value } }) => {
        if (row.isNewFolder) {
            setNewFolderRow((prev) => ({
                ...prev,
                name: value,
            }));
            return;
        }

        setInput(value);
    };

    const handleClick = () => {
        if (row.isGoBackRow) {
            setNavigationBar((prev) => {
                setParentId(prev[prev.length - 2]?.parentId || "");
                return prev.slice(0, -1);
            });
            return;
        }

        if (isFolder) {
            setParentId(row._id);
            setNavigationBar((prev) => [
                ...prev,
                { name: displayName, parentId: row._id },
            ]);
            return;
        }

        setPreviewDocument(row._id);
    };

    const renderContent = () => {
        if (row.isNewFolder) {
            return (
                <Input
                    className="focus:ring-0!"
                    autoFocus
                    placeholder="Folder name should contain 1 to 100 characters"
                    value={row.name}
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                    onBlur={() => setNewFolderRow(null)}
                />
            );
        }

        if (isEditing) {
            return (
                <Input
                    className="focus:ring-0!"
                    autoFocus
                    placeholder={row.originalFileName || row.name}
                    value={input}
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                    onBlur={() => setRenameMode(null)}
                />
            );
        }

        if (row.isGoBackRow) {
            return (
                <div className="flex items-center gap-1 text-[#6b7280] font-black h-8.25">
                    <span>.</span>
                    <span>.</span>
                </div>
            );
        }

        return <span className="w-full truncate">{displayName}</span>;
    };

    return (
        <>
            <div
                onClick={handleClick}
                className="cursor-pointer w-full flex items-center gap-3"
            >
                {getRegistryIcon(row)}
                {renderContent()}
            </div>

            {previewDocument && row.mimeType && showPreview && (
                <DocumentPreview
                    setIsOpen={setPreviewDocument}
                    url={previewDocument}
                    type={extension}
                    item={row}
                />
            )}
        </>
    );
};

export default FileNameCell;