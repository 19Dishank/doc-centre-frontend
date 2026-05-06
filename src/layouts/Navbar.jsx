import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Bell, ChevronDown, ChevronRight, Home } from "lucide-react";

const Navbar = () => {
    return (
        <header
            className="bg-white border-zinc-200 border-t-0 border-r-0 border-b-1 border-l-0 border-solid flex px-8 justify-between items-center h-15"
            data-id="1d2fa370-7b78-5da4-ac4f-77cfff227a1f"
        >
            <div
                className="text-sm leading-5 flex items-center gap-2"
                data-id="64859d1c-619f-5c31-a328-820d2f06d16a"
            >
                <Home
                    className="size-4 text-[#71717b]"
                    data-id="3923d2c0-b12d-54c3-bb50-2b007372993f"
                />
                <ChevronRight
                    className="size-3 text-[#71717b]"
                    data-id="e54ed920-73a9-56c8-ac4e-afd302b6b38c"
                />
                <span
                    className="font-medium"
                    data-id="11623ed8-ab0c-54f2-a5db-15c65830e7a1"
                >
                    Dashboard
                </span>
            </div>
            <div
                className="flex items-center gap-4"
                data-id="d3c72b98-c61a-59a4-b360-8cf66defc5e4"
            >
                <div
                    className="relative"
                    data-id="02a0ba5b-7116-5187-b9d1-17f2f883a0c7"
                >
                    <Button
                        variant="ghost"
                        size="icon"
                        className="size-9"
                        data-id="cc1a7013-dc1a-50ee-a24c-5513eaaf3a31"
                    >
                        <Bell
                            className="size-4"
                            data-id="aaa94cde-11f3-5f3c-b9d2-2c782b25fcd7"
                        />
                    </Button>
                    <span
                        className="size-2 rounded-full bg-[#e7000b] absolute right-1.5 top-1.5"
                        data-id="620fe367-3a8b-58a8-b704-783d5dfd09d4"
                    />
                </div>
                <Button
                    variant="outline"
                    className="text-sm leading-5 gap-2 h-9"
                    data-id="58e5879b-74b9-56e4-9d15-f3f6d9284d78"
                >
                    <Avatar
                        className="size-5"
                        data-id="8775c94b-dc40-52ef-9ea5-0eaaef2e5f7f"
                    >
                        <AvatarFallback
                            className="bg-[#2b7fff] text-blue-50 text-[10px]"
                            data-id="6a82d230-2b87-5ea2-a356-be782be2bea0"
                        >
                            A
                        </AvatarFallback>
                    </Avatar>
                    Acme Corp
                    <ChevronDown
                        className="size-3"
                        data-id="3cee22e6-9d59-5039-8e74-5217349b4613"
                    />
                </Button>
                <Avatar
                    className="size-9"
                    data-id="78f579d9-825d-57c8-a008-b1ddbff9abca"
                >
                    <AvatarFallback
                        className="font-medium bg-[#2b7fff] text-blue-50 text-xs leading-4"
                        data-id="af139131-c97b-56e0-9166-c5496deffd50"
                    >
                        JD
                    </AvatarFallback>
                </Avatar>
            </div>
        </header>
    );
};

export default Navbar;