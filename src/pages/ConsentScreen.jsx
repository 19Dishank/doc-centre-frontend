import {
    Eye,
    Upload,
    FolderOpen,
    ShieldCheck,
    ArrowRight,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import useSEO from "@/hooks/useSEO";

export default function ConsentScreen() {
    useSEO({
        title: "Authorize Access",
        description: "Review and grant application permissions to access your DocCenter account assets.",
    });
    return (
        <div className="w-full max-w-xl mx-auto">

            <div className="text-center mb-8">
                <h1 className="text-4xl font-bold tracking-tight">
                    Connect with{" "}
                    <span className="text-blue-500">DocCenter</span>
                </h1>

                <p className="mt-3 text-muted-foreground text-base">
                    DocCenter is requesting access to your account.
                </p>
            </div>

            <Card className="p-6 space-y-6">
                <div>
                    <h3 className="font-semibold text-lg">
                        This will allow DocCenter to:
                    </h3>
                </div>

                <div className="space-y-5">
                    <PermissionItem
                        icon={<Eye className="h-5 w-5" />}
                        title="View your documents"
                        description="Access documents and files stored in your account."
                    />

                    <PermissionItem
                        icon={<Upload className="h-5 w-5" />}
                        title="Upload documents"
                        description="Create and manage files on your behalf."
                    />

                    <PermissionItem
                        icon={<FolderOpen className="h-5 w-5" />}
                        title="Manage folders"
                        description="Create and organize folders and document structures."
                    />
                </div>
            </Card>

            <Card className="mt-5 p-4 bg-muted/40">
                <div className="flex gap-2">
                    <ShieldCheck className="size-5 text-primary" />
                    <div className="text-sm text-muted-foreground">By continuing, you agree to share the requested information with DocCenter.                    </div>
                </div>
            </Card>

            <div className="mt-8 flex gap-4">
                <Button
                    variant="outline"
                    className="flex-1 h-12 cursor-pointer"
                >
                    Cancel
                </Button>

                <Button
                    className="flex-1 h-12 bg-blue-600 cursor-pointer"
                >
                    Allow Access
                    <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
            </div>

            <div className="mt-6 text-center text-sm text-muted-foreground">
                Secure connection powered by DocCenter
            </div>
        </div>
    );
}

function PermissionItem({ icon, title, description }) {
    return (
        <div className="flex gap-4">
            <div className="h-10 w-10 rounded-lg bg-blue-50 text-blue-500 flex items-center justify-center shrink-0">
                {icon}
            </div>

            <div>
                <h4 className="font-medium">{title}</h4>

                <p className="text-sm text-muted-foreground">
                    {description}
                </p>
            </div>
        </div>
    );
}