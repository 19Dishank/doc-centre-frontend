import { AlertCircle, CheckCircle } from "lucide-react";

const BestPractices = () => {
    return (
        <section id="best-practices" className="scroll-mt-24 mb-16">
            <div className="flex items-center gap-2 mb-4">
                <span className="text-blue-500 font-mono font-bold text-lg">07</span>
                <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">Best Practices</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mt-4">
                <div className="p-5 rounded-xl bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-900/50">
                    <h4 className="font-bold text-emerald-800 dark:text-emerald-450 flex items-center gap-2 text-base mb-3">
                        <CheckCircle className="size-5 text-emerald-600 dark:text-emerald-400" />
                        Do
                    </h4>
                    <ul className="space-y-2.5 text-sm text-emerald-950 dark:text-emerald-300">
                        <li className="flex items-start gap-2">
                            <span className="text-emerald-600 dark:text-emerald-450 font-bold">✔</span>
                            Save refreshed tokens after every SDK call
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-emerald-600 dark:text-emerald-450 font-bold">✔</span>
                            Use <code>ensureSdkSession()</code>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-emerald-600 dark:text-emerald-450 font-bold">✔</span>
                            Store tokens in your database
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-emerald-600 dark:text-emerald-450 font-bold">✔</span>
                            Let the SDK handle refresh automatically
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-emerald-600 dark:text-emerald-450 font-bold">✔</span>
                            Use <code>listItems()</code> for combined listings
                        </li>
                    </ul>
                </div>

                <div className="p-5 rounded-xl bg-rose-50/50 dark:bg-rose-950/20 border border-rose-200 dark:border-rose-900/50">
                    <h4 className="font-bold text-rose-800 dark:text-rose-450 flex items-center gap-2 text-base mb-3">
                        <AlertCircle className="size-5 text-rose-600 dark:text-rose-450" />
                        Don't
                    </h4>
                    <ul className="space-y-2.5 text-sm text-rose-950 dark:text-rose-300">
                        <li className="flex items-start gap-2">
                            <span className="text-rose-600 dark:text-rose-450 font-bold">✕</span>
                            Call <code>exchangeSSO()</code> on every request
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-rose-600 dark:text-rose-450 font-bold">✕</span>
                            Store tokens only in memory
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-rose-600 dark:text-rose-450 font-bold">✕</span>
                            Ignore updated refresh tokens
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-rose-600 dark:text-rose-450 font-bold">✕</span>
                            Create new SSO sessions unnecessarily
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default BestPractices;