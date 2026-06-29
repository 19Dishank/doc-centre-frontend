import CodeBlock from "./CodeBlock";

const BackendPattern = () => {
    return (
        <section id="backend-pattern" className="scroll-mt-24 mb-16">
            <div className="flex items-center gap-2 mb-4">
                <span className="text-blue-500 font-mono font-bold text-lg">06</span>
                <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">Recommended Backend Pattern</h2>
            </div>
            <div className="prose prose-zinc max-w-none text-zinc-600 dark:text-zinc-400 leading-relaxed">
                <p className="mb-4">
                    When integrating the SDK in your web server routes, always combine the <code>ensureSdkSession()</code> helper with a save-after-call pattern inside your routes. This keeps user tokens valid and synchronized with rotating keys:
                </p>
                <CodeBlock
                    code={`router.get('/files', protect, async (req, res) => {\n  const user = await User.findById(req.user.id);\n  \n  // 1. Restore/handshake session\n  await ensureSdkSession(user, sdk);\n  \n  // 2. Perform SDK work\n  const items = await sdk.listItems();\n  \n  // 3. Save rotating tokens back to DB\n  user.docCenterTokens = sdk.getTokens();\n  await user.save();\n  \n  res.json(items);\n});`}
                    language="javascript"
                />
            </div>
        </section>
    );
};

export default BackendPattern;