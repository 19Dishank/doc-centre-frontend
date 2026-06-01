import { Copy, Eye, EyeOff, Trash2 } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Separator } from "../ui/separator";
import { useState } from "react";
import { revokeApiKey } from "@/api/api";

const APIKeyDetails = ({ item, index, getApiKeys }) => {

    const [isVisibleKey, setIsVisibleKey] = useState(false);

    const formatKey = key => {
        return `••••••••••••••••••••••••••••${key.slice(-4)}`
    }

    // // Copy key to clipboard
    // const copyToClipboard = key => {
    //     navigator.clipboard.writeText(key)
    //     // Optional: Add a toast notification helper here
    // }

    // // Revoke/Delete a key
    const handleDeleteKey = async (id) => {
        try {
            await revokeApiKey(id);
            getApiKeys();
        } catch (error) {
            console.error("Error deleting API key: ", error);
        }
    }

    return (
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
                            variant="outline"
                            size="icon"
                            // onClick={() => copyToClipboard(item.key)}
                            className="shrink-0"
                            title="Copy Key"
                        >
                            <Copy className="size-4" />
                        </Button>
                        <Button
                            variant="outline"
                            size="icon"
                            // onClick={() => toggleVisibility(item.id)}
                            className="shrink-0 md:hidden"
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
                            className="shrink-0 gap-2 flex-1 md:flex-initial hidden md:inline-flex w-25"
                        >
                            {isVisibleKey ? (
                                <>
                                    {" "}
                                    <EyeOff className="size-4" /> Hide{" "}
                                </>
                            ) : (
                                <>
                                    {" "}
                                    <Eye className="size-4" /> Reveal{" "}
                                </>
                            )}
                        </Button>
                        <Button
                            variant="outline"
                            onClick={() => handleDeleteKey(item._id)}
                            className="shrink-0 text-red-600 hover:bg-red-50 hover:text-red-700 gap-2 flex-1 md:flex-initial"
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
    );
};

export default APIKeyDetails;