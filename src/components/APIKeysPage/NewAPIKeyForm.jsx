import { generateApiKey } from "@/api/api";
import { toastNotification } from "@/helper/toastNotification";
import { memo, useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Loader, Plus } from "lucide-react";
import NewlyGeneratedKeyDisplay from "./NewlyGeneratedKeyDisplay";

const NewAPIKeyForm = ({ getApiKeys }) => {

    const [newKeyName, setNewKeyName] = useState("")
    const [loading, setLoading] = useState(false);
    const [credentials, setCredentials] = useState(null);

    const handleGenerateKey = async e => {
        setLoading(true);
        try {
            e.preventDefault()
            if (!newKeyName.trim()) return
            const res = await generateApiKey(newKeyName.trim());
            setNewKeyName("");
            setCredentials(res.data);
            getApiKeys();
            toastNotification("API key generated successfully!", "success");
        } catch (error) {
            console.error("Error generating API key: ", error);
            toastNotification(error?.response?.data?.message || "Failed to generate API key. Please try again.", "error");
        } finally {
            setLoading(false);
        }
    }

    return (
        <>
            <form onSubmit={handleGenerateKey} className="flex gap-2 flex-1 w-full">
                <Input
                    id="key-name"
                    placeholder="e.g., Production Web App"
                    value={newKeyName}
                    onChange={e => setNewKeyName(e.target.value)}
                    className="text-sm bg-zinc-50"
                />
                <GenerateButton
                    loading={loading}
                    disabled={!newKeyName.trim() || loading}
                />
            </form>

            {credentials && (
                <NewlyGeneratedKeyDisplay credentials={credentials} setCredentials={setCredentials} />
            )}

        </>
    )
}

export default NewAPIKeyForm

const GenerateButton = memo(({ loading, disabled }) => {
    console.log("Button rendered");

    return (
        <Button
            type="submit"
            disabled={disabled}
            className="gap-2 w-full sm:w-auto shrink-0 cursor-pointer font-semibold bg-[#2b7fff] text-blue-50 shadow-sm disabled:cursor-not-allowed"
        >
            {loading ? (
                <>
                    <Loader className="size-4" />
                    <span>Generating...</span>
                </>
            ) : (
                <>
                    <Plus className="size-4" />
                    <span>Generate Key</span>
                </>
            )}
        </Button>
    );
});