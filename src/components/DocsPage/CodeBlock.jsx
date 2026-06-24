import { Check, Copy } from "lucide-react";
import { useState } from "react";

const CodeBlock = ({ code, language = "javascript" }) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(code);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error("Failed to copy text", err);
        }
    };

    return (
        <div className="relative group my-4 rounded-lg border border-zinc-200 bg-zinc-950 font-mono text-sm leading-relaxed overflow-hidden shadow-sm">
            <div className="flex justify-between items-center px-4 py-2 border-b border-zinc-800 bg-zinc-900/50 text-zinc-400 text-xs">
                <span>{language}</span>
                <button
                    onClick={handleCopy}
                    className="flex items-center gap-1 hover:text-white transition-colors cursor-pointer"
                >
                    {copied ? (
                        <>
                            <Check className="size-3.5 text-green-500" />
                            <span className="text-green-500 font-medium">Copied!</span>
                        </>
                    ) : (
                        <>
                            <Copy className="size-3.5" />
                            <span>Copy</span>
                        </>
                    )}
                </button>
            </div>
            <pre className="p-4 overflow-x-auto text-zinc-100 font-normal text-xs md:text-sm">
                <code>{code}</code>
            </pre>
        </div>
    );
};

export default CodeBlock;