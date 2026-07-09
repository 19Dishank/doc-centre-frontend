import { DropdownMenu as DropdownMenuPrimitive } from "radix-ui";
import { Check, ChevronRight, Circle } from "lucide-react";
import { cn } from "@/lib/utils";

function DropdownMenu({ ...props }) {
    return <DropdownMenuPrimitive.Root {...props} />;
}

function DropdownMenuTrigger({ ...props }) {
    return <DropdownMenuPrimitive.Trigger {...props} />;
}

function DropdownMenuGroup({ ...props }) {
    return <DropdownMenuPrimitive.Group {...props} />;
}

function DropdownMenuPortal({ ...props }) {
    return <DropdownMenuPrimitive.Portal {...props} />;
}

function DropdownMenuSub({ ...props }) {
    return <DropdownMenuPrimitive.Sub {...props} />;
}

function DropdownMenuRadioGroup({ ...props }) {
    return <DropdownMenuPrimitive.RadioGroup {...props} />;
}

function DropdownMenuSubTrigger({ className, inset, children, ...props }) {
    return (
        <DropdownMenuPrimitive.SubTrigger
            className={cn(
                "flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-zinc-100 data-[state=open]:bg-zinc-100",
                inset && "pl-8",
                className
            )}
            {...props}
        >
            {children}
            <ChevronRight className="ml-auto size-4" />
        </DropdownMenuPrimitive.SubTrigger>
    );
}

function DropdownMenuSubContent({ className, ...props }) {
    return (
        <DropdownMenuPrimitive.SubContent
            className={cn(
                "z-50 min-w-32 overflow-hidden rounded-md border border-zinc-200 bg-white p-1 shadow-lg",
                "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
                className
            )}
            {...props}
        />
    );
}

function DropdownMenuContent({ className, sideOffset = 4, ...props }) {
    return (
        <DropdownMenuPrimitive.Portal>
            <DropdownMenuPrimitive.Content
                sideOffset={sideOffset}
                className={cn(
                    "z-50 min-w-40 overflow-hidden rounded-md border border-zinc-200 bg-white p-1 shadow-lg",
                    "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
                    "data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
                    className
                )}
                {...props}
            />
        </DropdownMenuPrimitive.Portal>
    );
}

function DropdownMenuItem({ className, inset, ...props }) {
    return (
        <DropdownMenuPrimitive.Item
            className={cn(
                "relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-zinc-100 data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
                inset && "pl-8",
                className
            )}
            {...props}
        />
    );
}

function DropdownMenuCheckboxItem({ className, children, checked, ...props }) {
    return (
        <DropdownMenuPrimitive.CheckboxItem
            className={cn(
                "relative flex cursor-pointer select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-zinc-100 data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
                className
            )}
            checked={checked}
            {...props}
        >
            <span className="absolute left-2 flex size-3.5 items-center justify-center">
                <DropdownMenuPrimitive.ItemIndicator>
                    <Check className="size-4" />
                </DropdownMenuPrimitive.ItemIndicator>
            </span>
            {children}
        </DropdownMenuPrimitive.CheckboxItem>
    );
}

function DropdownMenuRadioItem({ className, children, ...props }) {
    return (
        <DropdownMenuPrimitive.RadioItem
            className={cn(
                "relative flex cursor-pointer select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-zinc-100 data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
                className
            )}
            {...props}
        >
            <span className="absolute left-2 flex size-3.5 items-center justify-center">
                <DropdownMenuPrimitive.ItemIndicator>
                    <Circle className="size-2 fill-current" />
                </DropdownMenuPrimitive.ItemIndicator>
            </span>
            {children}
        </DropdownMenuPrimitive.RadioItem>
    );
}

function DropdownMenuLabel({ className, inset, ...props }) {
    return (
        <DropdownMenuPrimitive.Label
            className={cn(
                "px-2 py-1.5 text-sm font-semibold",
                inset && "pl-8",
                className
            )}
            {...props}
        />
    );
}

function DropdownMenuSeparator({ className, ...props }) {
    return (
        <DropdownMenuPrimitive.Separator
            className={cn("-mx-1 my-1 h-px bg-zinc-200", className)}
            {...props}
        />
    );
}

function DropdownMenuShortcut({ className, ...props }) {
    return (
        <span
            className={cn("ml-auto text-xs tracking-widest text-zinc-400", className)}
            {...props}
        />
    );
}

export {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuCheckboxItem,
    DropdownMenuRadioItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuGroup,
    DropdownMenuPortal,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuRadioGroup,
};