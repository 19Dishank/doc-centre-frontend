import { useState } from "react";
import { Button } from "@/components/ui/button";
import { UploadCloud, X } from "lucide-react";

const FileUpload = ({
    errors,
    setErrors,
    selectedFile,
    setSelectedFile,
    setRegistrationData,
    registrationData,
    fileInputRef
}) => {

    const [isDragging, setIsDragging] = useState(false);

    const processFile = (file) => {
        if (!file) return;

        if (!file.type.startsWith("image/")) {
            setErrors((prev) => ({
                ...prev,
                logo: "Please upload an image file"
            }));
            return;
        }

        if (file.size > 1024 * 1024) {
            setErrors((prev) => ({
                ...prev,
                logo: "Logo must be less than 1MB"
            }));
            return;
        }

        setSelectedFile(file);

        const previewUrl = URL.createObjectURL(file);

        setRegistrationData((prev) => ({
            ...prev,
            logo: previewUrl
        }));

        setErrors((prev) => ({
            ...prev,
            logo: ""
        }));
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        processFile(file);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();

        setIsDragging(false);

        const file = e.dataTransfer.files[0];
        console.log("Dropped file:", file);
        processFile(file);
    };

    const handleDragOver = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(true);
    };

    const handleDragLeave = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(false);
    };

    const handleRemoveFile = () => {
        setSelectedFile(null);

        if (registrationData.logo.startsWith("blob:")) {
            URL.revokeObjectURL(registrationData.logo);
        }

        setRegistrationData((prev) => ({
            ...prev,
            logo: ""
        }));

        if (fileInputRef.current) {
            fileInputRef.current.value = "";
        }
    };

    return (
        <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-slate-700 dark:text-zinc-350">
                Organization Logo
            </label>

            {!registrationData.logo ? (
                <div
                    onClick={() => fileInputRef.current?.click()}
                    onDrop={handleDrop}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    className={`
                        flex flex-col items-center justify-center
                        border-2 border-dashed rounded-lg p-6
                        cursor-pointer transition gap-2
                        ${errors.logo
                            ? "border-red-400"
                            : isDragging
                                ? "border-blue-500 bg-blue-50 dark:bg-blue-950/20"
                                : "border-slate-300 dark:border-zinc-800 hover:bg-slate-50 dark:hover:bg-zinc-900/50"
                        }
                    `}
                >
                    <UploadCloud
                        className={`h-8 w-8 ${
                            isDragging ? "text-blue-500" : "text-slate-400 dark:text-zinc-500"
                        }`}
                    />

                    <span className="text-sm font-medium text-slate-600 dark:text-zinc-400">
                        Drag & drop logo here
                    </span>

                    <span className="text-xs text-slate-400 dark:text-zinc-500">
                        or click to upload
                    </span>

                    <span className="text-xs text-slate-400 dark:text-zinc-500">
                        PNG, JPG, or SVG up to 1MB
                    </span>
                </div>
            ) : (
                <div className="relative flex items-center justify-between border border-slate-200 dark:border-zinc-800 rounded-lg p-3 bg-slate-50 dark:bg-zinc-900">
                    <div className="flex items-center gap-3">
                        <div className="h-16 w-16 rounded border dark:border-zinc-800 bg-white dark:bg-zinc-800 flex items-center justify-center overflow-hidden">
                            <img
                                src={registrationData.logo}
                                alt="Logo preview"
                                className="h-full w-full object-contain"
                            />
                        </div>

                        <div className="flex flex-col">
                            <span className="text-sm font-medium text-slate-700 dark:text-zinc-300 truncate max-w-50">
                                {selectedFile?.name || "Uploaded Image"}
                            </span>

                            <span className="text-xs text-slate-400 dark:text-zinc-500">
                                {(selectedFile?.size / 1024).toFixed(1)} KB
                            </span>
                        </div>
                    </div>

                    <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        onClick={handleRemoveFile}
                        className="h-8 w-8 rounded-full text-slate-500 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-950/20"
                    >
                        <X className="h-4 w-4" />
                    </Button>
                </div>
            )}

            <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                accept="image/*"
                className="hidden"
            />

            {errors.logo && (
                <p className="text-red-500 text-xs">
                    * {errors.logo}
                </p>
            )}
        </div>
    );
};

export default FileUpload;