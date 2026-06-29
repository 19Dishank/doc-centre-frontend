const Introduction = () => {
    return (
        <div className="mb-10 pb-8 border-b border-zinc-200 dark:border-zinc-800">
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-50 dark:bg-blue-950/40 text-[#2b7fff] mb-4">
                <span>Integration Guide • V1.0</span>
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl">
                DocCenter SDK Documentation
            </h1>
            <p className="mt-4 text-base md:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-3xl">
                A complete reference for integrating SSO authentication, document storage, and folder management into your Node.js or Javascript application.
            </p>
            <div className="flex flex-wrap gap-2 mt-6">
                {["SSO AUTH", "TOKEN REFRESH", "UPLOAD / VIEW / DELETE", "FOLDER MANAGEMENT", "NODE.JS"].map((tag) => (
                    <span key={tag} className="text-xs font-mono font-medium text-zinc-500 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-900 border border-zinc-200/60 dark:border-zinc-800 px-2.5 py-1 rounded-md">
                        {tag}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default Introduction;