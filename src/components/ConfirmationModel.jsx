import { createPortal } from "react-dom"; // Add this import
import { X, AlertTriangle, Info, CheckCircle2, AlertCircle } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";

const ConfirmationModal = ({ 
    setIsOpen, 
    heading, 
    subheading, 
    onConfirm, 
    onCancel,
    type = "info", 
    confirmText = "Confirm",
    cancelText = "Cancel"
}) => {

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

    // Use a React Portal to break out of the table row's stacking context
    return createPortal(
        <div className="bg-zinc-950/40 flex fixed inset-0 justify-center items-center z-[9999] backdrop-blur p-4">
            <Card className="shadow-2xl p-5 sm:p-6 flex flex-col gap-4 w-full max-w-md sm:max-w-lg animate-in fade-in zoom-in-95 duration-150">
                <CardHeader className="p-0 flex flex-row justify-between items-start gap-4">
                    <div className="flex gap-3 items-start min-w-0">
                        <div className={`p-2 rounded-full ${currentConfig.iconBg} shrink-0`}>
                            {currentConfig.icon}
                        </div>
                        
                        <div className="flex flex-col gap-1 min-w-0">
                            <CardTitle className="font-semibold text-base sm:text-lg text-zinc-950 truncate">
                                {heading}
                            </CardTitle>
                            <CardDescription className="text-xs sm:text-sm leading-relaxed text-zinc-500 break-words">
                                {subheading}
                            </CardDescription>
                        </div>
                    </div>

                    <Button 
                        variant="ghost" 
                        size="icon" 
                        className="size-8 -mr-1 -mt-1 hover:bg-zinc-100 rounded-full shrink-0 cursor-pointer" 
                        onClick={handleCancel}
                    >
                        <X className="size-4 text-zinc-500" />
                    </Button>
                </CardHeader>

                <CardContent className="p-0" />

                <CardFooter className="flex justify-end gap-2 bg-white px-0 w-full">
                    <Button 
                        variant="outline" 
                        onClick={handleCancel}
                        className="text-zinc-700 cursor-pointer"
                    >
                        {cancelText}
                    </Button>
                    <Button 
                        className={`cursor-pointer font-semibold ${currentConfig.buttonClass}`} 
                        onClick={handleConfirm}
                    >
                        {confirmText}
                    </Button>
                </CardFooter>
            </Card>
        </div>,
        document.body 
    );
};

export default ConfirmationModal;