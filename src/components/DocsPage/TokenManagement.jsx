import { Info } from "lucide-react";
import CodeBlock from "./CodeBlock";

const TokenManagement = () => {
    return (
        <section id="token-management" className="scroll-mt-24 mb-16">
            <div className="flex items-center gap-2 mb-4">
                <span className="text-blue-500 font-mono font-bold text-lg">04</span>
                <h2 className="text-2xl font-bold text-zinc-900">Token Management & Session Helper</h2>
            </div>
            <div className="prose prose-zinc max-w-none text-zinc-600 leading-relaxed">
                <h3 className="text-lg font-bold text-zinc-900 mb-2">Restoring a Session</h3>
                <p className="text-sm text-zinc-600">
                    Before calling any SDK operations in an incoming user request, load the stored tokens from the user database back into the SDK.
                </p>
                <CodeBlock
                    code={`const user = await User.findById(req.user.id);\nsdk.setTokens(user.docCenterTokens);\nconst items = await sdk.listItems();`}
                    language="javascript"
                />

                <h3 className="text-lg font-bold text-zinc-900 mt-6 mb-2"><code>ensureSdkSession()</code> Helper</h3>
                <p className="text-sm text-zinc-600">
                    To simplify backend logic, it is highly recommended to implement a helper pattern that reuses existing tokens if they exist, and falls back to a fresh SSO exchange only when necessary.
                </p>
                <CodeBlock
                    code={`async function ensureSdkSession(user, sdk) {\n  if (user.docCenterTokens?.refreshToken) {\n    sdk.setTokens(user.docCenterTokens);\n    return;\n  }\n\n  const ssoToken = jwt.sign(\n    { email: user.email },\n    process.env.DOCCENTER_SSO_SECRET,\n    { expiresIn: '5m' }\n  );\n\n  await sdk.exchangeSSO(ssoToken);\n  user.docCenterTokens = sdk.getTokens();\n  await user.save();\n}`}
                    language="javascript"
                />
                <div className="bg-zinc-100 p-4 rounded-xl border border-zinc-200/80 my-4">
                    <span className="block text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-2">How it works:</span>
                    <ol className="list-decimal pl-5 text-sm text-zinc-600 space-y-1.5">
                        <li>Check whether the user already has a stored refresh token in your database.</li>
                        <li>If so, restore the session using <code>setTokens()</code> and return early.</li>
                        <li>Otherwise, sign a new SSO token and exchange it with the service for fresh credentials.</li>
                        <li>Persist the newly acquired tokens back to the user record for subsequent requests.</li>
                    </ol>
                </div>

                <h3 className="text-lg font-bold text-zinc-900 mt-6 mb-2">Automatic Refresh Token Flow</h3>
                <p className="text-sm text-zinc-600">
                    The SDK handles token expiration transparently. No manual refresh code is needed:
                </p>
                <div className="bg-zinc-100 p-4 rounded-xl border border-zinc-200/80 my-4">
                    <ol className="list-decimal pl-5 text-sm text-zinc-600 space-y-1.5">
                        <li>The SDK detects an expired Access Token during a request.</li>
                        <li>It automatically contacts the authentication server with the Refresh Token.</li>
                        <li>A new Access Token and Refresh Token are received.</li>
                        <li>The SDK retries your original request transparently and returns the result.</li>
                    </ol>
                </div>

                <div className="my-6 p-4 rounded-xl bg-blue-50 border border-blue-200 text-blue-900 flex gap-3 text-sm">
                    <Info className="size-5 shrink-0 text-[#2b7fff] mt-0.5" />
                    <div>
                        <strong>Important:</strong> Because refresh tokens rotate after being used to refresh an access token, you must <strong>always re-save <code>sdk.getTokens()</code></strong> to your database after every SDK invocation:
                    </div>
                </div>

                <CodeBlock
                    code={`sdk.setTokens(user.docCenterTokens);\nconst items = await sdk.listItems();\nuser.docCenterTokens = sdk.getTokens();\nawait user.save();`}
                    language="javascript"
                />

                <h3 className="text-lg font-bold text-zinc-900 mt-6 mb-2">Token Utility Methods</h3>
                <p className="text-sm text-zinc-600 mb-2">
                    Use these helpers to read, write, or destroy token credentials inside the SDK memory:
                </p>
                <CodeBlock
                    code={`const tokens = sdk.getTokens();      // read current tokens\nsdk.setTokens(user.docCenterTokens); // restore a session\nsdk.clearTokens();                  // clear in-memory tokens`}
                    language="javascript"
                />
            </div>
        </section>
    );
};

export default TokenManagement;