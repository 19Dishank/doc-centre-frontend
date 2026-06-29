import CodeBlock from "./CodeBlock";

const Installation = () => {
    return (
        <section id="installation" className="scroll-mt-24 mb-16">
            <div className="flex items-center gap-2 mb-4">
                <span className="text-blue-500 font-mono font-bold text-lg">02</span>
                <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">Installation & Initialization</h2>
            </div>
            <div className="prose prose-zinc max-w-none text-zinc-600 dark:text-zinc-400 leading-relaxed">
                <p className="mb-4">
                    To start using the SDK, install the package via npm inside your project directory.
                </p>
                <h4 className="text-sm font-semibold text-zinc-700 dark:text-zinc-300 uppercase tracking-wider mb-2">Install via NPM</h4>
                <CodeBlock code="npm install doc-center-sdk" language="bash" />

                <h4 className="text-sm font-semibold text-zinc-700 dark:text-zinc-300 uppercase tracking-wider mt-6 mb-2">Initialize the SDK</h4>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-2">
                    Import and instantiate the SDK using your API key. It is recommended to use environment variables for keys.
                </p>
                <CodeBlock
                    code={`const DocCenter = require('doc-center-sdk');\n\nconst sdk = new DocCenter({\n  apiKey: process.env.DOCCENTER_API_KEY\n});`}
                    language="javascript"
                />
            </div>
        </section>
    );
};

export default Installation;