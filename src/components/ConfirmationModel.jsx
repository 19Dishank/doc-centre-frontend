import { X, AlertTriangle, Info, CheckCircle2, AlertCircle } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";

const ConfirmationModal = ({ 
    setIsOpen, 
    heading, 
    subheading, 
    onConfirm, 
    onCancel,
    type = "info", // "info" | "warning" | "danger" | "success"
    confirmText = "Confirm",
    cancelText = "Cancel"
}) => {

    // Dynamic configuration based on the theme type
    const typeConfigs = {
        info: {
            icon: <Info className="size-5 text-blue-600" />,
            iconBg: "bg-blue-50",
            buttonClass: "bg-blue-600 hover:bg-blue-700 text-white"
        },
        warning: {
            icon: <AlertTriangle className="size-5 text-amber-600" />,
            iconBg: "bg-amber-50",
            buttonClass: "bg-amber-600 hover:bg-amber-700 text-white"
        },
        danger: {
            icon: <AlertCircle className="size-5 text-red-600" />,
            iconBg: "bg-red-50",
            buttonClass: "bg-red-600 hover:bg-red-700 text-white"
        },
        success: {
            icon: <CheckCircle2 className="size-5 text-emerald-600" />,
            iconBg: "bg-emerald-50",
            buttonClass: "bg-emerald-600 hover:bg-emerald-700 text-white"
        }
    };

    const currentConfig = typeConfigs[type] || typeConfigs.info;

    const handleConfirm = async () => {
        if (onConfirm) {
            await onConfirm();
        }
        setIsOpen(false);
    };

    const handleCancel = () => {
        if (onCancel) {
            onCancel();
        }
        setIsOpen(false);
    };

    return (
        <div className="bg-zinc-950/40 flex fixed inset-0 justify-center items-center z-100 backdrop-blur">
            <Card className="shadow-2xl p-6 gap-4 w-120 flex flex-col">
                <CardHeader className="p-0 flex flex-row justify-between items-start gap-4">
                    <div className="flex gap-3 items-start">
                        {/* Status Icon */}
                        <div className={`p-2 rounded-full ${currentConfig.iconBg} shrink-0`}>
                            {currentConfig.icon}
                        </div>
                        
                        <div className="flex flex-col gap-1">
                            <CardTitle className="font-semibold text-lg leading-7">
                                {heading}
                            </CardTitle>
                            <CardDescription className="text-sm leading-5 text-zinc-500">
                                {subheading}
                            </CardDescription>
                        </div>
                    </div>

                    {/* Top Close Button */}
                    <Button 
                        variant="ghost" 
                        size="icon" 
                        className="size-8 -mr-1 -mt-1 hover:bg-zinc-100 rounded-full shrink-0" 
                        onClick={handleCancel}
                    >
                        <X className="size-4" />
                    </Button>
                </CardHeader>

                {/* Optional spacing bridge if your layout relies on CardContent */}
                <CardContent className="p-0" />

                <CardFooter className="justify-end gap-2 bg-white px-0 pt-2">
                    <Button variant="outline" onClick={handleCancel}>
                        {cancelText}
                    </Button>
                    <Button className={`font-semibold ${currentConfig.buttonClass}`} onClick={handleConfirm}>
                        {confirmText}
                    </Button>
                </CardFooter>
            </Card>
        </div>
    );
};

export default ConfirmationModal;