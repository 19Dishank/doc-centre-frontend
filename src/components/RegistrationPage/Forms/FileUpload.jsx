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
            <label className="font-medium uppercase text-zinc-950 text-[11px] leading-4 tracking-[0.06em]">
                Organization Logo <span className="text-red-500">*</span>
            </label>

            {!registrationData.logo ? (
                <div
                    onClick={() => fileInputRef.current?.click()}
                    onDrop={handleDrop}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    className={`
                        flex items-center gap-3
                        border border-dashed rounded-xl p-2.5
                        cursor-pointer transition-all duration-200
                        ${errors.logo
                            ? "border-red-400 bg-red-50/20"
                            : isDragging
                                ? "border-blue-500 bg-blue-50/30"
                                : "border-slate-200 hover:border-[#2b7fff] hover:bg-slate-50/30"
                        }
                    `}
                >
                    <div className={`p-2 rounded-lg bg-slate-100/80 text-slate-500 shrink-0 transition-colors ${isDragging ? "bg-blue-100 text-blue-600" : ""}`}>
                        <UploadCloud className="h-4.5 w-4.5" />
                    </div>
                    <div className="flex flex-col text-left min-w-0">
                        <span className="text-xs font-semibold text-slate-700">
                            Upload logo image
                        </span>
                        <span className="text-[10px] text-slate-400 mt-0.5">
                            Drag & drop or click (PNG, JPG, SVG up to 1MB)
                        </span>
                    </div>
                </div>
            ) : (
                <div className="relative flex items-center justify-between border border-slate-200 rounded-xl p-2 bg-slate-50">
                    <div className="flex items-center gap-2 min-w-0">
                        <div className="h-10 w-10 rounded-lg border border-slate-200 bg-white flex items-center justify-center overflow-hidden shrink-0">
                            <img
                                src={registrationData.logo}
                                alt="Logo preview"
                                className="h-full w-full object-contain"
                            />
                        </div>

                        <div className="flex flex-col min-w-0">
                            <span className="text-xs font-semibold text-slate-700 truncate max-w-[180px] sm:max-w-[240px]">
                                {selectedFile?.name || "Uploaded Image"}
                            </span>

                            <span className="text-[10px] text-slate-400 mt-0.5">
                                {selectedFile ? `${(selectedFile.size / 1024).toFixed(1)} KB` : "Logo Uploaded"}
                            </span>
                        </div>
                    </div>

                    <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        onClick={handleRemoveFile}
                        className="h-8 w-8 rounded-full text-slate-400 hover:text-red-500 hover:bg-red-50 shrink-0 cursor-pointer"
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