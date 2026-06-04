import { Check, Copy, Eye, EyeOff, Trash2 } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Separator } from "../ui/separator";
import { useState } from "react";
import { revokeApiKey } from "@/api/api";
import { toastNotification } from "@/helper/toastNotification";
import ConfirmationModal from "../ConfirmationModel";

const APIKeyDetails = ({ item, index, getApiKeys }) => {

    const [isVisibleKey, setIsVisibleKey] = useState(false);
    const [copied, setCopied] = useState(false);
    const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);

    const formatKey = key => {
        return `••••••••••••••••••••••••••••${key.slice(-4)}`
    }

    const handleDeleteKey = async (id) => {
        try {
            await revokeApiKey(id);
            getApiKeys();
        } catch (error) {
            console.error("Error deleting API key: ", error);
        }
    }

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(item.hashedKey);
            setCopied(true);
            toastNotification("Key copied successfully!", "success");
            setTimeout(() => {
                setCopied(false);
            }, 2000);
        } catch (error) {
            console.error(error);
            toastNotification("Failed to copy key", "error");
        }
    };

    return (
        <>
            <div key={item.id} className="flex flex-col gap-4">
                {index > 0 && <Separator className="mb-2" />}

                <div className="flex flex-col gap-2">
                    <Label className="font-semibold text-sm text-zinc-950">
                        {item.name}
                    </Label>

                    <div className="flex flex-col md:flex-row md:items-center gap-2">
                        <div className="flex items-center gap-2 flex-1 w-full">
                            <Input
                                value={isVisibleKey ? item.hashedKey : formatKey(item.hashedKey)}
                                readOnly={true}
                                className="font-mono text-sm leading-5 flex-1 min-w-0 bg-zinc-50"
                            />
                            <Button
                                className='cursor-pointer'
                                type="button"
                                variant="outline"
                                size="icon"
                                onClick={handleCopy}
                            >
                                {copied ? <Check className="size-4" /> : <Copy className="size-4" />}
                            </Button>
                            <Button
                                variant="outline"
                                size="icon"
                                className="shrink-0 md:hidden cursor-alias"
                            >
                                {isVisibleKey ? (
                                    <EyeOff className="size-4" />
                                ) : (
                                    <Eye className="size-4" />
                                )}
                            </Button>
                        </div>

                        <div className="flex items-center gap-2 w-full md:w-auto">
                            <Button
                                variant="outline"
                                onClick={() => setIsVisibleKey(!isVisibleKey)}
                                className="shrink-0 gap-2 flex-1 md:flex-initial hidden md:inline-flex w-25 cursor-pointer"
                            >
                                {isVisibleKey
                                    ? <><EyeOff className="size-4" /> <span>Hide</span></>
                                    : <><Eye className="size-4" /> <span>Reveal</span></>}
                            </Button>
                            <Button
                                variant="outline"
                                onClick={() => setIsConfirmationModalOpen(true)}
                                className="cursor-pointer shrink-0 text-red-600 hover:bg-red-50 hover:text-red-700 gap-2 flex-1 md:flex-initial"
                            >
                                <Trash2 className="size-4" /> Revoke
                            </Button>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4 max-w-xs">
                    <div className="flex flex-col gap-0.5">
                        <span className="text-zinc-500 text-xs">Created</span>
                        <span className="font-medium text-xs text-zinc-950">
                            {new Date(item.createdAt).toLocaleDateString(undefined, {
                                year: "numeric",
                                month: "short",
                                day: "numeric"
                            })}
                        </span>
                    </div>
                    <div className="flex flex-col gap-0.5">
                        <span className="text-zinc-500 text-xs">Last used</span>
                        <span className="font-medium text-xs text-zinc-950">
                            {item.lastUsed ? new Date(item.lastUsed).toLocaleDateString(undefined, {
                                year: "numeric",
                                month: "short",
                                day: "numeric"
                            }) : "Never"}
                        </span>
                    </div>
                </div>
            </div>

            {isConfirmationModalOpen && (
                <ConfirmationModal
                    setIsOpen={setIsConfirmationModalOpen}
                    heading={`Delete API Key "${item.name}"`}
                    subheading={`Are you sure you want to delete API Key "${item.name}"? This action cannot be undone.`}
                    onConfirm={() => handleDeleteKey(item._id)}
                    onCancel={() => setIsConfirmationModalOpen(false)}
                    type="danger"
                />
            )}
        </>
    );
};

export default APIKeyDetails;