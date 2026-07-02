const FeatureCard = ({ icon: Icon, title, desc, children }) => {
    return (
        <div className="flex flex-col gap-4 bg-white rounded-2xl border border-zinc-200 p-6 shadow-sm">
            <div className="size-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center">
                <Icon className="size-5 text-[#2b7fff]" />
            </div>
            <div className="flex flex-col gap-1.5">
                <h3 className="text-base font-bold text-zinc-950">{title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{desc}</p>
            </div>
            <div className="bg-zinc-50 rounded-xl border border-zinc-100 p-3 mt-1">
                {children}
            </div>
        </div>
    );
};

export default FeatureCard;