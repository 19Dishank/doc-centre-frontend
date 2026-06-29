const Reference = () => {
    return (

        <section id="reference" className="scroll-mt-24 mb-16">
            <div className="flex items-center gap-2 mb-4">
                <span className="text-blue-500 font-mono font-bold text-lg">08</span>
                <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">SDK Feature Reference</h2>
            </div>

            <div className="overflow-x-auto border border-zinc-200 dark:border-zinc-800 rounded-lg bg-white dark:bg-zinc-900 mt-4">
                <table className="min-w-full divide-y divide-zinc-200 dark:divide-zinc-800 text-sm">
                    <thead className="bg-zinc-50 dark:bg-zinc-900/50">
                        <tr>
                            <th className="px-6 py-3 text-left font-semibold text-zinc-700 dark:text-zinc-350">Category</th>
                            <th className="px-6 py-3 text-left font-semibold text-zinc-700 dark:text-zinc-350">Methods / Capabilities</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800 text-zinc-600 dark:text-zinc-300">
                        <tr>
                            <td className="px-6 py-4 font-semibold text-zinc-900 dark:text-zinc-100 bg-zinc-50/30 dark:bg-zinc-900/30">Authentication</td>
                            <td className="px-6 py-4">
                                <div className="flex flex-wrap gap-1.5">
                                    {["exchangeSSO()", "getTokens()", "setTokens()", "clearTokens()"].map((method) => (
                                        <code key={method} className="bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 font-mono text-xs px-2 py-0.5 rounded border border-zinc-200/50 dark:border-zinc-700/50">
                                            {method}
                                        </code>
                                    ))}
                                    <span className="text-xs text-zinc-500 dark:text-zinc-400 self-center ml-1 font-sans">Automatic Refresh</span>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="px-6 py-4 font-semibold text-zinc-900 dark:text-zinc-100 bg-zinc-50/30 dark:bg-zinc-900/30">Documents</td>
                            <td className="px-6 py-4">
                                <div className="flex flex-wrap gap-1.5">
                                    {["uploadDocument()", "getViewUrl()", "deleteDocument()"].map((method) => (
                                        <code key={method} className="bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 font-mono text-xs px-2 py-0.5 rounded border border-zinc-200/50 dark:border-zinc-700/50">
                                            {method}
                                        </code>
                                    ))}
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="px-6 py-4 font-semibold text-zinc-900 dark:text-zinc-100 bg-zinc-50/30 dark:bg-zinc-900/30">Folders</td>
                            <td className="px-6 py-4">
                                <div className="flex flex-wrap gap-1.5">
                                    {["createFolder()", "deleteFolder()"].map((method) => (
                                        <code key={method} className="bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 font-mono text-xs px-2 py-0.5 rounded border border-zinc-200/50 dark:border-zinc-700/50">
                                            {method}
                                        </code>
                                    ))}
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="px-6 py-4 font-semibold text-zinc-900 dark:text-zinc-100 bg-zinc-50/30 dark:bg-zinc-900/30">Explorer</td>
                            <td className="px-6 py-4">
                                <code className="bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 font-mono text-xs px-2 py-0.5 rounded border border-zinc-200/50 dark:border-zinc-700/50">
                                    listItems()
                                </code>
                            </td>
                        </tr>
                        <tr>
                            <td className="px-6 py-4 font-semibold text-zinc-900 dark:text-zinc-100 bg-zinc-50/30 dark:bg-zinc-900/30">Security</td>
                            <td className="px-6 py-4 text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                                Access Token Authentication, Refresh Token Rotation, Automatic Token Refresh, Tenant Isolation
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="mt-8 text-center text-xs text-zinc-400 dark:text-zinc-500 font-mono border-t border-zinc-200 dark:border-zinc-800 pt-6">
                DocCenter SDK Documentation • For internal integration use only • Generated 2026
            </div>
        </section>
    );
};

export default Reference;