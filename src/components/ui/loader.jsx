const Loader = ({ styles, heading, subheading }) => {
    return (
        <div className={`${styles} flex flex-col justify-center items-center flex-1 font-sans animate-fade-in`}>
            <div className="flex flex-col items-center justify-center gap-6 max-w-sm text-center">
                <div className="relative w-24 h-28 bg-white rounded-xl shadow-md border border-slate-100 flex flex-col p-4 justify-between overflow-hidden">
                    <div className="absolute left-0 right-0 h-1 bg-linear-to-r from-blue-400 via-blue-600 to-blue-400 opacity-80 shadow-[0_0_12px_#2563eb] animate-[scan_2s_ease-in-out_infinite]" />
                    <div className="space-y-2 w-full mt-2">
                        <div className="h-2 w-5/6 bg-slate-200 rounded animate-[pulse_1.5s_infinite_100ms]" />
                        <div className="h-2 w-full bg-slate-100 rounded animate-[pulse_1.5s_infinite_200ms]" />
                        <div className="h-2 w-4/6 bg-slate-200 rounded animate-[pulse_1.5s_infinite_300ms]" />
                        <div className="h-2 w-full bg-slate-100 rounded animate-[pulse_1.5s_infinite_400ms]" />
                    </div>
                    <div className="flex items-center justify-between w-full border-t border-slate-100 pt-2">
                        <div className="h-1.5 w-1/3 bg-blue-100 rounded" />
                        <div className="h-2 w-2 rounded-full bg-blue-600 animate-ping" />
                    </div>
                </div>
                <div className="space-y-1.5">
                    <h3 className="text-slate-800 font-semibold text-lg tracking-tight">
                        {heading || "Loading ..."}
                    </h3>
                    <p className="text-slate-400 text-sm font-medium animate-[pulse_2s_infinite]">
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