import { NavLink } from "react-router-dom";

const Footer = () => {
    const links = {
        Product: [
            { label: "Features", to: "/#features" },
            { label: "Pricing", to: "/#pricing" },
            { label: "Changelog", to: "/" },
            { label: "Roadmap", to: "/" },
        ],
        Developers: [
            { label: "API Docs", to: "/docs" },
            { label: "SDK Guide", to: "/docs" },
            { label: "API Keys", to: "/credentials/api-keys" },
        ],
        Legal: [
            { label: "Privacy", to: "/privacy" },
            { label: "Terms", to: "/terms" },
            { label: "Security", to: "/security" },
            { label: "Status", to: "/status" },
        ],
    };

    return (
        <footer className="bg-white border-t border-zinc-200 w-full mt-auto">
            <div className="max-w-[1440px] mx-auto px-6 md:px-8 py-12 md:py-16">
                <div className="flex flex-col md:flex-row justify-between gap-10 mb-12">
                    {/* brand col */}
                    <div className="flex flex-col gap-4 max-w-sm">
                        <div className="flex items-center gap-2.5">
                            <div className="size-8 rounded-lg bg-slate-800 flex items-center justify-center shadow-sm shrink-0">
                                {/* <FileStack className="size-4 text-white" /> */}
                                <img src="/favicon.svg" className="size-4 text-white" />
                            </div>
                            <span className="font-bold text-zinc-900 text-base">DocCenter</span>
                        </div>
                        <p className="text-zinc-400 text-sm leading-relaxed">
                            The modern document management platform for teams that care about organisation, security, and speed.
                        </p>
                        <span className="text-zinc-400 text-xs mt-auto">
                            © {new Date().getFullYear()} DocCenter. All rights reserved.
                        </span>
                    </div>

                    {/* link cols */}
                    <div className="flex flex-wrap gap-12 md:gap-20 lg:gap-24">
                        {Object.entries(links).map(([group, items]) => (
                            <div key={group} className="flex flex-col gap-3 min-w-[120px]">
                                <span className="text-xs font-semibold uppercase tracking-widest text-zinc-400">
                                    {group}
                                </span>
                                {items.map((item) => (
                                    <NavLink
                                        key={item.label}
                                        to={item.to}
                                        className="text-zinc-500 text-sm hover:text-[#2b7fff] transition-colors duration-200"
                                    >
                                        {item.label}
                                    </NavLink>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;