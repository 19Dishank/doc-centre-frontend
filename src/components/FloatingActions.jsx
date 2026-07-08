import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Plus, X } from "lucide-react";
import { cn } from "@/lib/utils";

const positions = {
    "top-left": "top-6 left-6",
    "top-right": "top-6 right-6",
    "bottom-left": "bottom-6 left-6",
    "bottom-right": "bottom-6 right-6",
};

const wrappers = {
    fixed: "fixed z-50",
    absolute: "absolute z-50",
    relative: "relative",
    inline: "relative inline-flex",
};

const menus = {
    top: "absolute bottom-full right-0 mb-2 flex flex-col items-end gap-2",
    bottom: "absolute top-full right-0 mt-2 flex flex-col items-end gap-2",
    left: "absolute right-full top-0 mr-2 flex flex-row items-center gap-2",
    right: "absolute left-full top-0 ml-2 flex flex-row items-center gap-2",
};

export default function FloatingActions({
    children,

    mode = "fixed",
    position = "bottom-right",
    offset,

    direction = "top",

    icon,
    closeIcon,

    className,
    menuClassName,
    fabClassName,

    buttonProps = {},
}) {
    const [open, setOpen] = useState(false);

    return (
        <div
            className={cn(
                wrappers[mode],
                mode !== "inline" && (offset ?? positions[position]),
                className
            )}
        >
            <div
                className={cn(
                    menus[direction],
                    "transition-all duration-200",
                    open
                        ? "opacity-100 scale-100 pointer-events-auto"
                        : "opacity-0 scale-95 pointer-events-none",
                    menuClassName
                )}
            >
                {children}
            </div>

            <Button
                size="icon"
                onClick={() => setOpen((v) => !v)}
                className={cn(
                    "size-14 rounded-full shadow-xl",
                    fabClassName
                )}
                {...buttonProps}
            >
                {open
                    ? closeIcon ?? <X className="size-5" />
                    : icon ?? <Plus className="size-5" />}
            </Button>
        </div>
    );
}