import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle
} from "@/components/ui/card"
import NewAPIKeyForm from "./NewAPIKeyForm";

const GenerateNewKey = ({ getApiKeys }) => {
    return (
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
                <div className="flex flex-col gap-3 items-end">
                    <div className="font-medium text-sm text-zinc-950 w-fit mr-auto">Key Name</div>
                    <NewAPIKeyForm getApiKeys={getApiKeys} />
                </div>
            </CardContent>
        </Card >
    );
};

export default GenerateNewKey;