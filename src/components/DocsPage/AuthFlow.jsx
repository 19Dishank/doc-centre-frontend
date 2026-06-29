import { Info } from "lucide-react";
import CodeBlock from "./CodeBlock";

const AuthFlow = () => {
    return (
        <section id="auth-flow" className="scroll-mt-24 mb-16">
            <div className="flex items-center gap-2 mb-4">
                <span className="text-blue-500 font-mono font-bold text-lg">03</span>
                <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">Authentication Flow</h2>
            </div>
            <div className="prose prose-zinc max-w-none text-zinc-600 dark:text-zinc-400 leading-relaxed">
                <p className="mb-6">
                    DocCenter secures API access using three types of credentials working in coordination:
                </p>

                <div className="grid md:grid-cols-3 gap-4 mb-8">
                    <div className="p-4 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 rounded-xl">
                        <div className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-1">SSO Token</div>
                        <p className="text-xs text-zinc-600 dark:text-zinc-400">A short-lived JWT signed by your backend using the shared SSO secret to identify users.</p>
                    </div>
                    <div className="p-4 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 rounded-xl">
                        <div className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-1">Access Token (AT)</div>
                        <p className="text-xs text-zinc-600 dark:text-zinc-400">Sent with API requests to authenticate document and folder requests directly.</p>
                    </div>
                    <div className="p-4 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 rounded-xl">
                        <div className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-1">Refresh Token (RT)</div>
                        <p className="text-xs text-zinc-600 dark:text-zinc-400">Long-term credential stored on the user record to seamlessly renew access tokens.</p>
                    </div>
                </div>

                <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 mt-6 mb-2">Step 1 — Generate an SSO Token</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                    On the backend, generate an SSO Token by signing a JWT with the user's email address and the SSO secret.
                </p>
                <CodeBlock
                    code={`const jwt = require('jsonwebtoken');\n\nconst ssoToken = jwt.sign(\n  { email: user.email },\n  process.env.DOCCENTRAL_SSO_SECRET,\n  { expiresIn: '5m' }\n);`}
                    language="javascript"
                />

                <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 mt-6 mb-2">Step 2 — Exchange the SSO Token</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                    Call `exchangeSSO` on the initialized SDK instance. This performs a handshake behind the scenes and stores the returned session tokens in the SDK memory.
                </p>
                <CodeBlock
                    code={`await sdk.exchangeSSO(ssoToken);`}
                    language="javascript"
                />
                <p className="text-xs text-zinc-500 dark:text-zinc-450 itailc mt-1">
                    The SDK automatically stores the resulting credentials in memory:
                </p>
                <CodeBlock
                    code={`{\n  accessToken,\n  refreshToken\n}`}
                    language="json"
                />

                <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 mt-6 mb-2">Saving Tokens to Your Database</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                    Extract the acquired tokens from the SDK and persist them on your user record.
                </p>
                <CodeBlock
                    code={`const tokens = sdk.getTokens();\nuser.docCenterTokens = tokens;\nawait user.save();`}
                    language="javascript"
                />

                <div className="my-6 p-4 rounded-xl bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/50 text-amber-900 dark:text-amber-200 flex gap-3 text-sm">
                    <Info className="size-5 shrink-0 text-amber-600 dark:text-amber-400 mt-0.5" />
                    <div>
                        <strong>Note:</strong> Persist <code>accessToken</code> and <code>refreshToken</code> on the user record immediately after exchange so future requests don't need a fresh SSO handshake.
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AuthFlow;