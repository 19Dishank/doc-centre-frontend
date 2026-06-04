import { AlertTriangle, Loader, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useEffect, useState } from "react"
import { fetchApiKeys, generateApiKey } from "@/api/api"
import { toastNotification } from "@/helper/toastNotification"
import APIKeyDetails from "@/components/APIKeysPage/APIKeyDetails"
import PageHeading from "@/components/PageHeading"

const APIKeysPage = () => {

    const [apiKeys, setApiKeys] = useState([])
    const [newKeyName, setNewKeyName] = useState("")
    const [loading, setLoading] = useState(false);

    const handleGenerateKey = async e => {
        setLoading(true);
        try {
            e.preventDefault()
            if (!newKeyName.trim()) return
            await generateApiKey(newKeyName.trim());
            setNewKeyName("");
            getApiKeys();
            toastNotification("API key generated successfully!", "success");
        } catch (error) {
            console.error("Error generating API key: ", error);
            toastNotification(error?.response?.data?.message || "Failed to generate API key. Please try again.", "error");
        } finally {
            setLoading(false);
        }
    }

    const getApiKeys = async () => {
        try {
            const res = await fetchApiKeys();
            console.log("Fetched API keys: ", res);
            setApiKeys(res.data.apiKeys);
        } catch (error) {
            console.error("Error fetching API keys: ", error);
            toastNotification(error?.response?.data?.message || "Failed to fetch API keys. Please try again.", "error");
        }
    }

    useEffect(() => {
        getApiKeys();
    }, []);


    return (
        <div className="flex flex-col gap-6">

            <PageHeading
                heading="API Keys"
                subheading="Manage your API keys for secure access to our services."
            />

            <div className="rounded-lg bg-amber-50 border-amber-200 border flex p-3 items-start gap-2">
                <AlertTriangle className="size-4 shrink-0 text-amber-600 mt-0.5" />
                <p className="text-amber-900 text-sm leading-5">
                    Keep your API keys secret. Never expose them in client-side code or
                    public repositories.
                </p>
            </div>

            <Card className="p-4 sm:p-6">
                <CardHeader className="p-0 gap-1 mb-4">
                    <CardTitle className="text-base leading-6">
                        Create New Secret Key
                    </CardTitle>
                    <CardDescription className="text-sm text-zinc-500">
                        Give your key a descriptive name to recognize it later.
                    </CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                    <form
                        onSubmit={handleGenerateKey}
                        className="flex flex-col sm:flex-row gap-3 items-end"
                    >
                        <div className="flex flex-col gap-2 flex-1 w-full">
                            <Label
                                htmlFor="key-name"
                                className="font-medium text-sm text-zinc-950"
                            >
                                Key Name
                            </Label>
                            <Input
                                id="key-name"
                                placeholder="e.g., Production Web App"
                                value={newKeyName}
                                onChange={e => setNewKeyName(e.target.value)}
                                className="text-sm bg-zinc-50"
                            />
                        </div>
                        <Button
                            type="submit"
                            disabled={!newKeyName.trim() || loading}
                            className="gap-2 w-full sm:w-auto shrink-0 cursor-pointer font-semibold bg-[#2b7fff] text-blue-50 shadow-sm disabled:cursor-not-allowed"
                        >
                            {loading
                                ? <><Loader className="size-4" /> <span>Generating...</span></>
                                : <><Plus className="size-4" /> <span>Generate Key</span></>
                            }
                        </Button>
                    </form>
                </CardContent>
            </Card>

            <Card className="p-4 sm:p-6">
                <CardHeader className="p-0 gap-1 mb-6">
                    <CardTitle className="text-base leading-6">Active API Keys</CardTitle>
                </CardHeader>
                <CardContent className="p-0 flex flex-col gap-6">
                    {apiKeys.length === 0 ? (
                        <p className="text-sm text-zinc-500 text-center py-4">
                            No API keys generated yet.
                        </p>
                    ) : (
                        apiKeys.map((item, index) => (
                            <APIKeyDetails
                                key={item.id}
                                item={item}
                                index={index}
                                getApiKeys={getApiKeys}
                            />
                        ))
                    )}
                </CardContent>
            </Card>
        </div>
    )
}

export default APIKeysPage
