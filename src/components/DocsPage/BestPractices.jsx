import { AlertCircle, CheckCircle } from "lucide-react";

const BestPractices = () => {
    return (
        <section id="best-practices" className="scroll-mt-24 mb-16">
            <div className="flex items-center gap-2 mb-4">
                <span className="text-blue-500 font-mono font-bold text-lg">07</span>
                <h2 className="text-2xl font-bold text-zinc-900">Best Practices</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mt-4">
                <div className="p-5 rounded-xl bg-emerald-50/50 border border-emerald-200">
                    <h4 className="font-bold text-emerald-800 flex items-center gap-2 text-base mb-3">
                        <CheckCircle className="size-5 text-emerald-600" />
                        Do
                    </h4>
                    <ul className="space-y-2.5 text-sm text-emerald-950">
                        <li className="flex items-start gap-2">
                            <span className="text-emerald-600 font-bold">✔</span>
                            Save refreshed tokens after every SDK call
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-emerald-600 font-bold">✔</span>
                            Use <code>ensureSdkSession()</code>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-emerald-600 font-bold">✔</span>
                            Store tokens in your database
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-emerald-600 font-bold">✔</span>
                            Let the SDK handle refresh automatically
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-emerald-600 font-bold">✔</span>
                            Use <code>listItems()</code> for combined listings
                        </li>
                    </ul>
                </div>

                <div className="p-5 rounded-xl bg-rose-50/50 border border-rose-200">
                    <h4 className="font-bold text-rose-800 flex items-center gap-2 text-base mb-3">
                        <AlertCircle className="size-5 text-rose-600" />
                        Don't
                    </h4>
                    <ul className="space-y-2.5 text-sm text-rose-950">
                        <li className="flex items-start gap-2">
                            <span className="text-rose-600 font-bold">✕</span>
                            Call <code>exchangeSSO()</code> on every request
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-rose-600 font-bold">✕</span>
                            Store tokens only in memory
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-rose-600 font-bold">✕</span>
                            Ignore updated refresh tokens
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-rose-600 font-bold">✕</span>
                            Create new SSO sessions unnecessarily
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default BestPractices;