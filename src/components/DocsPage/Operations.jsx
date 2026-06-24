import CodeBlock from "./CodeBlock";

const Operations = () => {
    return (
        <section id="operations" className="scroll-mt-24 mb-16">
            <div className="flex items-center gap-2 mb-4">
                <span className="text-blue-500 font-mono font-bold text-lg">05</span>
                <h2 className="text-2xl font-bold text-zinc-900">Document & Folder Operations</h2>
            </div>
            <div className="prose prose-zinc max-w-none text-zinc-600 leading-relaxed">

                <h3 className="text-lg font-bold text-zinc-900 mb-2">Upload a Document</h3>
                <p className="text-sm text-zinc-600 mb-2">
                    Upload files directly using raw file streams or multer-parsed files.
                </p>
                <CodeBlock
                    code={`const result = await sdk.uploadDocument(req.file);`}
                    language="javascript"
                />

                <h4 className="text-sm font-semibold text-zinc-700 mt-4 mb-2">Upload Result Structure</h4>
                <div className="overflow-x-auto border border-zinc-200 rounded-lg mb-6 bg-white">
                    <table className="min-w-full divide-y divide-zinc-200 text-sm">
                        <thead className="bg-zinc-50">
                            <tr>
                                <th className="px-4 py-2.5 text-left font-semibold text-zinc-700">Field</th>
                                <th className="px-4 py-2.5 text-left font-semibold text-zinc-700">Type</th>
                                <th className="px-4 py-2.5 text-left font-semibold text-zinc-700">Description</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-zinc-200 text-zinc-600">
                            <tr>
                                <td className="px-4 py-2.5 font-mono text-xs text-blue-600">documentId</td>
                                <td className="px-4 py-2.5 font-mono text-xs">string</td>
                                <td className="px-4 py-2.5">Unique identifier for the uploaded file</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2.5 font-mono text-xs text-blue-600">fileName</td>
                                <td className="px-4 py-2.5 font-mono text-xs">string</td>
                                <td className="px-4 py-2.5">Original file name</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2.5 font-mono text-xs text-blue-600">size</td>
                                <td className="px-4 py-2.5 font-mono text-xs">number</td>
                                <td className="px-4 py-2.5">File size in bytes</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h3 className="text-lg font-bold text-zinc-900 mt-6 mb-2">Create a Folder</h3>
                <p className="text-sm text-zinc-600">
                    Folders can be created either at the root level or nested inside a parent folder.
                </p>
                <CodeBlock
                    code={`// Root-level folder\nconst folder = await sdk.createFolder({ name: 'Invoices' });\n\n// Nested folder\nconst folder2 = await sdk.createFolder({\n  name: '2026',\n  parentFolderId: 'folderId'\n});`}
                    language="javascript"
                />

                <h3 className="text-lg font-bold text-zinc-900 mt-6 mb-2">List Items</h3>
                <p className="text-sm text-zinc-600">
                    Retrieve a combined array containing folders and documents.
                </p>
                <CodeBlock
                    code={`// Root\nconst items = await sdk.listItems();\n\n// Specific folder\nconst nested = await sdk.listItems({ parentId: 'folderId' });`}
                    language="javascript"
                />

                <h4 className="text-sm font-semibold text-zinc-700 mt-4 mb-2">Example Response Structure</h4>
                <CodeBlock
                    code={`[\n  { "_id": "...", "name": "Invoices", "type": "folder" },\n  { "_id": "...", "name": "invoice.pdf", "type": "document" }\n]`}
                    language="json"
                />

                <h3 className="text-lg font-bold text-zinc-900 mt-6 mb-2">View a Document</h3>
                <p className="text-sm text-zinc-600">
                    Retrieve a secure temporary viewing URL for a document. You can open it directly in the client browser.
                </p>
                <CodeBlock
                    code={`const result = await sdk.getViewUrl(documentId);\n// → { url: "https://..." }\n\nwindow.open(result.url);`}
                    language="javascript"
                />

                <h3 className="text-lg font-bold text-zinc-900 mt-6 mb-2">Delete a Document or Folder</h3>
                <CodeBlock
                    code={`await sdk.deleteDocument(documentId);\nawait sdk.deleteFolder(folderId);`}
                    language="javascript"
                />
            </div>
        </section>
    );
};

export default Operations;