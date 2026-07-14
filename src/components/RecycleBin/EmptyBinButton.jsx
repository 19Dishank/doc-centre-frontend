import { emptyBin } from "@/api/file";
import { useState } from "react";
import { Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import ConfirmationModal from "../ConfirmationModal";
import { toastNotification } from "@/helper/toastNotification";

const EmptyBinButton = ({ getBinData, disabled }) => {
    const [confirmationModalOpen, setConfirmationModalOpen] = useState(false);
    const [isDeleting, setIsDeleting] = useState(false);

    const handleClick = () => {
        setConfirmationModalOpen(true);
    };

    const handleEmptyBin = async () => {
        setIsDeleting(true);
        try {
            const res = await emptyBin();
            await getBinData();
            setConfirmationModalOpen(false);
            toastNotification(res.message, "success")
        } catch (error) {
            console.error("Error emptying bin:", error);
            // toastNotification(
            //     error?.response?.data?.message || "Failed to empty recycle bin. Please try again.",
            //     "error"
            // );
        } finally {
            setIsDeleting(false);
        }
    };

    return (
        <>
            <Button
                variant="outline"
                disabled={disabled}
                onClick={handleClick}
                className="cursor-pointer gap-2 text-red-500 border-red-200 hover:bg-red-50 hover:text-red-600 hover:border-red-300 disabled:cursor-not-allowed disabled:opacity-50"
            >
                <Trash2 className="size-4" />
                Empty Bin
            </Button>

            {confirmationModalOpen && (
                <ConfirmationModal
                    setIsOpen={setConfirmationModalOpen}
                    heading="Empty recycle bin?"
                    subheading="This will permanently delete every file and folder currently in the recycle bin. This action cannot be undone."
                    onConfirm={handleEmptyBin}
                    onCancel={() => setConfirmationModalOpen(false)}
                    type="danger"
                    loading={isDeleting}
                    confirmText="Yes, empty it"
                    loadingText="Emptying..."
                />
            )}
        </>
    );
};

export default EmptyBinButton;