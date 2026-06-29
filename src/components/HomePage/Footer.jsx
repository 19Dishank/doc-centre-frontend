import { FileStack } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-white dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-800 w-full mt-auto transition-colors">
            <div className="max-w-7xl mx-auto px-6 md:px-8 py-8 md:py-10">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex items-center gap-3">
                        <div className="size-8 rounded-lg bg-[#2b7fff] flex justify-center items-center shadow-sm">
                            <FileStack className="size-4 text-blue-50" />
                        </div>
                        <span className="text-zinc-500 dark:text-zinc-400 text-sm">
                            © {new Date().getFullYear()} DocCentral. All rights reserved.
                        </span>
                    </div>

                    <nav className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2">
                        {["Privacy", "Terms", "Security", "Status"].map((item) => (
                            <a 
                                key={item} 
                                href={`/${item.toLowerCase()}`}
                                className="text-zinc-500 dark:text-zinc-400 text-sm hover:text-[#2b7fff] dark:hover:text-white transition-colors duration-200"
                            >
                                {item}
                            </a>
                        ))}
                    </nav>
                </div>
            </div>
        </footer>
    );
};

export default Footer;