const Overview = () => {
    return (
        <section id="overview" className="scroll-mt-24 mb-16">
            <div className="flex items-center gap-2 mb-4">
                <span className="text-blue-500 font-mono font-bold text-lg">01</span>
                <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">Overview</h2>
            </div>
            <div className="prose prose-zinc max-w-none text-zinc-600 dark:text-zinc-400 leading-relaxed">
                <p>
                    The DocCenter SDK lets third-party applications integrate with DocCenter to manage authentication and documents directly from a backend service. This eliminates the need to implement complex file management, user uploads, or session persistence details yourself.
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mt-6">
                    {[
                        { title: "SSO Authentication", desc: "Seamless single sign-on mapping third-party users into the DocCenter environment." },
                        { title: "Upload Documents", desc: "Easily upload files to storage and receive document keys." },
                        { title: "Create Folders", desc: "Maintain hierarchy via nested folder trees." },
                        { title: "List Files & Folders", desc: "Query single folders or overall lists." },
                        { title: "View Documents", desc: "Retrieve secure temporary viewing URLs." },
                        { title: "Delete Documents & Folders", desc: "Clean up unwanted resources safely." },
                        { title: "Automatic Token Refresh", desc: "Tokens rotate and refresh silently under the hood." },
                    ].map((feat, index) => (
                        <div key={index} className="p-4 bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200/80 dark:border-zinc-800 shadow-sm flex flex-col gap-1">
                            <span className="font-semibold text-zinc-900 dark:text-zinc-100 text-sm flex items-center gap-2">
                                <span className="size-1.5 rounded-full bg-blue-500"></span>
                                {feat.title}
                            </span>
                            <span className="text-xs text-zinc-500 dark:text-zinc-400">{feat.desc}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Overview;