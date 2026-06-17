const Loader = ({ styles = "", heading, subheading, size = "md" }) => {
    const sizeConfig = {
        sm: {
            card: "w-20 h-25 p-2.5 gap-1",
            scanLine: "h-0.5",
            skeletonGap: "space-y-1 mt-1",
            bar1: "h-1.5 w-5/6",
            bar2: "h-1.5 w-full",
            bar3: "h-1.5 w-4/6",
            bar4: "h-1.5 w-full",
            footer: "pt-1",
            footerBar: "h-1.5 w-1/3",
            pingDot: "h-1.5 w-1.5",
            title: "text-base",
            desc: "text-xs"
        },
        md: {
            card: "w-24 h-28 p-4",
            scanLine: "h-1",
            skeletonGap: "space-y-2 mt-2",
            bar1: "h-2 w-5/6",
            bar2: "h-2 w-full",
            bar3: "h-2 w-4/6",
            bar4: "h-2 w-full",
            footer: "pt-2",
            footerBar: "h-1.5 w-1/3",
            pingDot: "h-2 w-2",
            title: "text-lg",
            desc: "text-sm"
        },
        lg: {
            card: "w-32 h-40 p-5",
            scanLine: "h-1.5",
            skeletonGap: "space-y-3 mt-3",
            bar1: "h-2.5 w-5/6",
            bar2: "h-2.5 w-full",
            bar3: "h-2.5 w-4/6",
            bar4: "h-2.5 w-full",
            footer: "pt-3",
            footerBar: "h-2 w-1/3",
            pingDot: "h-2.5 w-2.5",
            title: "text-xl",
            desc: "text-base"
        }
    };

    const currentSize = sizeConfig[size] || sizeConfig.md;

    return (
        <div className={`${styles} h-full  flex-1 flex flex-col justify-center items-center font-sans animate-fade-in`}>
            <div className="flex flex-col items-center justify-center gap-6 max-w-sm text-center">
                <div className={`relative bg-white rounded-xl shadow-md border border-slate-100 flex flex-col justify-between overflow-hidden ${currentSize.card}`}>
                    
                    <div className={`absolute left-0 right-0 bg-linear-to-r from-blue-400 via-blue-600 to-blue-400 opacity-80 shadow-[0_0_12px_#2563eb] animate-[scan_2s_ease-in-out_infinite] ${currentSize.scanLine}`} />
                    
                    <div className={`w-full ${currentSize.skeletonGap}`}>
                        <div className={`${currentSize.bar1} bg-slate-200 rounded animate-[pulse_1.5s_infinite_100ms]`} />
                        <div className={`${currentSize.bar2} bg-slate-100 rounded animate-[pulse_1.5s_infinite_200ms]`} />
                        <div className={`${currentSize.bar3} bg-slate-200 rounded animate-[pulse_1.5s_infinite_300ms]`} />
                        <div className={`${currentSize.bar4} bg-slate-100 rounded animate-[pulse_1.5s_infinite_400ms]`} />
                    </div>
                    
                    <div className={`flex items-center justify-between w-full border-t border-slate-100 ${currentSize.footer}`}>
                        <div className={`${currentSize.footerBar} bg-blue-100 rounded`} />
                        <div className={`rounded-full bg-blue-600 animate-ping ${currentSize.pingDot}`} />
                    </div>
                </div>
                
                <div className="space-y-1.5">
                    <h3 className={`text-slate-800 font-semibold tracking-tight ${currentSize.title}`}>
                        {heading || "Loading ..."}
                    </h3>
                    <p className={`text-slate-400 font-medium animate-[pulse_2s_infinite] ${currentSize.desc}`}>
                        {subheading || "Please wait a moment"}
                    </p>
                </div>
            </div>
            
            <style>{`
                @keyframes scan {
                    0% { top: 0%; opacity: 0; }
                    10% { opacity: 1; }
                    90% { opacity: 1; }
                    100% { top: 100%; opacity: 0; }
                }
                @keyframes fade-in {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                .animate-fade-in {
                    animation: fade-in 0.3s ease-out forwards;
                }
            `}</style>
        </div>
    );
};

export default Loader;