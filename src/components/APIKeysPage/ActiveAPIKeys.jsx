import { memo, useEffect, useState } from "react";
import { DataTable } from "../DataTable";
import { Trash2 } from "lucide-react";
import { Button } from "../ui/button";
import ConfirmationModal from "../ConfirmationModal";
import { revokeApiKey } from "@/api/api";
import { toastNotification } from "@/helper/toastNotification";

const ActiveAPIKeys = ({ apiKeys, getApiKeys }) => {

    const formatKey = keySuffix => {
        return (
            <>
                <span className="hidden sm:inline">••••••••••••••••••••••••••••</span>
                <span className="sm:hidden">••••</span>
                {keySuffix}
            </>
        );
    };

    useEffect(() => {
        getApiKeys();
    }, []);

    const columns = [
        {
            key: "name",
            header: "Name",
            width: "w-[30%] sm:w-[15%]",
        },
        {
            key: "key_suffix",
            header: "API Key",
            width: "w-[40%] sm:w-[25%]",
            render: (row) => (
                <span className="font-mono">
                    {formatKey(row?.key_suffix)}
                </span>
            ),
        },
        {
            key: "isActive",
            header: "Status",
            width: "w-[15%] sm:w-[10%]",
            render: (row) => (
                <span
                    className={`px-2 py-1 rounded text-xs ${row.isActive
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                        }`}
                >
                    {row.isActive ? "Active" : "Inactive"}
                </span>
            ),
        },
        {
            key: "createdAt",
            header: "Created At",
            width: "w-[20%] sm:w-[15%]",
            headerClassName: "hidden sm:table-cell",
            cellClassName: "hidden sm:table-cell",
            render: (row) =>
                new Date(row.createdAt).toLocaleString(),
        },
        {
            key: "actions",
            header: "Actions",
            width: "w-[15%]",
            align: "right",
            render: (row) => <ActionsCell row={row} getApiKeys={getApiKeys} />,
        },
    ];

    return (
        <>
            <DataTable
                columns={columns}
                data={apiKeys}
                emptyMessage="No Keys Found"
            />
        </>
    );
};

export default memo(ActiveAPIKeys);

const ActionsCell = ({ row: item, getApiKeys }) => {

    const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);
    const [isDeleting, setIsDeleting] = useState(false);

    const handleDeleteKey = async (id) => {
        setIsDeleting(true);
        try {
            await revokeApiKey(id);
            getApiKeys();
            toastNotification("API key revoked successfully!", "success");
        } catch (error) {
            console.error("Error deleting API key: ", error);
        } finally {
            setIsDeleting(false);
            setIsConfirmationModalOpen(false);
        }
    }

    return (
        <>
            <div className="flex justify-end items-center gap-0.5">
                <Button
                    onClick={() => setIsConfirmationModalOpen(true)}
                    variant="ghost"
                    size="icon"
                    className="size-8 text-red-400 hover:text-red-600 hover:bg-red-50 cursor-pointer"
                >
                    <Trash2 className="size-3.5" />
                </Button>
            </div>

            {isConfirmationModalOpen && (
                <ConfirmationModal
                    setIsOpen={setIsConfirmationModalOpen}
                    heading={`Delete API Key "${item.name}"`}
                    subheading={`Are you sure you want to delete API Key "${item.name}"? This action cannot be undone.`}
                    onConfirm={() => handleDeleteKey(item._id)}
                    onCancel={() => setIsConfirmationModalOpen(false)}
                    type="danger"
                    loading={isDeleting}
                    confirmText="Yes, delete it"
                    loadingText="Deleting..."
                />
            )}

        </>
    )
}
