import { useState } from "react";
import { X, Copy, Check } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Label } from "../ui/label";
import { toastNotification } from "@/helper/toastNotification";
import { createShareLink } from "@/api/file";
import FormField from "../ui/form-field";

const ShareDocumentModal = ({ setIsOpen, documentId }) => {

    const [formData, setFormData] = useState({
        expiryTime: ""
    });

    const [errors, setErrors] = useState({
        expiryTime: ""
    });

    const [loading, setLoading] = useState(false);
    const [shareLink, setShareLink] = useState("");
    const [copied, setCopied] = useState(false);

    const validateField = (name, value) => {

        switch (name) {

            case "expiryTime":
                if (!value) return "Expiry time is required";
                else if (Number(value) < 1) return "Expiry time must be greater than 1";
                else if (Number(value) > 60) return "Expiry time must be less than or equal to 60 minutes";
                else if (parseInt(value) !== Number(value)) return "Expiry time must be an integer";

                return "";

            default:
                return "";
        }
    };

    const handleChange = (e) => {

        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));

        setErrors((prev) => ({
            ...prev,
            [name]: validateField(name, value)
        }));
    };

    const validateForm = () => {

        const newErrors = {};

        Object.keys(formData).forEach((key) => {
            newErrors[key] = validateField(key, formData[key]);
        });

        setErrors(newErrors);

        return Object.values(newErrors).every(
            (error) => error === ""
        );
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const isValid = validateForm();
        if (!isValid) return;
        setLoading(true);
        try {
            const payload = { expiryTime: Number(formData.expiryTime) };
            const res = await createShareLink(documentId, payload);
            console.log("Share Link Response:", res);
            setShareLink(res?.data?.url);
            toastNotification("Share link generated successfully!", "success"
            );
        } catch (error) {
            console.error("Error generating share link:", error);
            toastNotification(error?.response?.data?.message || "Failed to generate share link", "error"
            );
        } finally {
            setLoading(false);
        }
    };

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(shareLink);
            setCopied(true);
            toastNotification("Link copied successfully!", "success");
            setTimeout(() => {
                setCopied(false);
            }, 2000);
        } catch (error) {
            console.error(error);
            toastNotification("Failed to copy link", "error");
        }
    };

    return (
        <div className="fixed inset-0 z-100 flex items-center justify-center bg-zinc-950/40 backdrop-blur">
            <Card className="w-120 overflow-hidden animate-in fade-in zoom-in-95 duration-150 border border-zinc-200 bg-white shadow-xl shadow-zinc-900/10 rounded-2xl p-0 gap-0">
                <div className="h-1 w-full bg-linear-to-r from-blue-500 via-blue-600 to-blue-500" />

                <div className="p-6 shadow-2xl flex flex-col gap-4 w-full">

                    <CardHeader className="flex items-start justify-between gap-1 border-b border-zinc-200 p-0">
                        <div className="flex flex-col gap-1">
                            <CardTitle className="text-lg font-semibold leading-7 mr-auto">
                                Share Document
                            </CardTitle>
                            <CardDescription className="text-sm leading-5">
                                Generate a secure share link with expiry time.
                            </CardDescription>
                        </div>

                        <Button
                            variant="ghost"
                            size="icon"
                            className="cursor-pointer size-8 rounded-full -mr-1 -mt-1 hover:bg-zinc-100"
                            onClick={() => setIsOpen(false)}
                        >
                            <X className="size-4" />
                        </Button>

                    </CardHeader>

                    <CardContent className="flex flex-col gap-4 p-0">
                        <FormField
                            name="expiryTime"
                            label="Expiry Time (in minutes)"
                            error={errors.expiryTime}
                            required
                            value={formData.expiryTime}
                            onChange={handleChange}
                            placeholder="Enter expiry time"
                            type="number"
                            min={1}
                            max={60}
                            disabled={!!shareLink}
                        />

                        {shareLink && (
                            <div className="flex flex-col gap-2">
                                <Label className="text-sm font-medium">Share Link</Label>
                                <div className="flex items-center justify-between gap-3 rounded-lg border border-zinc-200 bg-zinc-50 p-3">
                                    <p className="max-w-[320px] truncate text-sm text-zinc-700">
                                        {shareLink}
                                    </p>
                                    <Button
                                        className='cursor-pointer'
                                        type="button"
                                        variant="outline"
                                        size="icon"
                                        onClick={handleCopy}
                                    >
                                        {copied ? <Check className="size-4" /> : <Copy className="size-4" />}
                                    </Button>
                                </div>
                            </div>
                        )}

                    </CardContent>

                    <CardFooter className="justify-end gap-2 bg-white px-0 pb-0">

                        <Button
                            variant="outline"
                            onClick={() => setIsOpen(false)}
                            className="text-zinc-700 cursor-pointer"
                        >
                            Cancel
                        </Button>

                        {!shareLink && (<Button
                            className="bg-[#2b7fff] font-semibold text-blue-50 cursor-pointer"
                            onClick={handleSubmit}
                            disabled={loading || !formData.expiryTime || errors.expiryTime}
                        >
                            {loading ? "Generating..." : "Generate Link"}
                        </Button>)}

                    </CardFooter>

                </div>
            </Card>

        </div>
    );
};

export default ShareDocumentModal;