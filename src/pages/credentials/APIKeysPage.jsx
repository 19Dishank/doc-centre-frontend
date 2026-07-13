import { AlertTriangle } from "lucide-react"
import { useCallback, useState } from "react"
import { fetchApiKeys } from "@/api/api"
import PageHeading from "@/components/PageHeading"
import ActiveAPIKeys from "@/components/APIKeysPage/ActiveAPIKeys"
import GenerateNewKey from "@/components/APIKeysPage/GenerateNewKey"
import useSEO from "@/hooks/useSEO"

const APIKeysPage = () => {

    const [apiKeys, setApiKeys] = useState([])

    const getApiKeys = useCallback(async () => {
        try {
            const res = await fetchApiKeys();
            setApiKeys(res.data.apiKeys);
        } catch (error) {
            console.error("Error fetching API keys: ", error);
        }
    }, []);
    useSEO({
        title: "API Keys "
    })
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

            <GenerateNewKey getApiKeys={getApiKeys} />
            <ActiveAPIKeys apiKeys={apiKeys} getApiKeys={getApiKeys} />
        </div>
    )
}

export default APIKeysPage
