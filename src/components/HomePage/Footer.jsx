import { FileStack } from "lucide-react";

const Footer = () => {
    return (
        <div className="bg-white border-zinc-200 border-t border-r-0 border-b-0 border-l-0 border-solid w-full">
            <div className="max-w-285 flex mx-auto px-8 py-6 justify-between items-center">
                <div className="flex items-center gap-2">
                    <div className="size-6 rounded-sm bg-[#2b7fff] flex justify-center items-center">
                        <FileStack className="size-3.5 text-blue-50" />
                    </div>
                    <span className="text-[#71717b] text-xs leading-4">© 2025 DocuCentral. All rights reserved.</span>
                </div>
                <div className="text-[#71717b] text-xs leading-4 flex items-center gap-6">
                    <a>Privacy</a>
                    <a>Terms</a>
                    <a>Security</a>
                    <a>Status</a>
                </div>
            </div>
        </div>
    );
};

export default Footer;