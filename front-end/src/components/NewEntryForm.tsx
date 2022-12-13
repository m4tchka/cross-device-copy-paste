import { useState } from "react";
type Props = {
    updateSnippetList: React.Dispatch<
        React.SetStateAction<
            {
                title: string;
                content: string;
                files: string[];
                _id: string;
            }[]
        >
    >;
};
export default function NewEntryForm({ updateSnippetList }: Props) {
    const [snippet, setSnippet] = useState({
        title: "",
        content: "",
        files: [],
    });
    const [error, setError] = useState<string | undefined>(undefined);
    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        let response = await fetch(import.meta.env.VITE_SNIPPET_API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(snippet),
        });
        let data: {
            title: string;
            content: string;
            files: string[];
            _id: string;
            error?: string;
        } = await response.json();

        console.log("---------DATA---------", data.error);
        if (!response.ok) {
            console.log("ERROR >>>>", data.error);
            setError(data.error);
        } else {
            setError(undefined);
            console.log("New snippet added: ", data);
        }
        let updatedResponse = await fetch(import.meta.env.VITE_SNIPPET_API_URL);
        let updatedData = await updatedResponse.json();
        updateSnippetList(updatedData);
        setSnippet({
            title: "",
            content: "",
            files: [],
        });
    }
    return (
        <div className="flex flex-col justify-between h-full flex-1">
            <form
                className="bg-green2 border-none p-2 rounded text-offwhite"
                onSubmit={(e) => handleSubmit(e)}
            >
                <h3>Snippet Form</h3>
                <div>
                    <label className="block" htmlFor="title">Snippet title: </label>
                    <input
                        type="text"
                        name="title"
                        placeholder="title"
                        onChange={(e) => {
                            setSnippet({ ...snippet, title: e.target.value });
                        }}
                        value={snippet.title}
                        className="block p-2 mt-2.5 mb-5 w-full border-2 border-solid rounded box-border"/* "block w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" */
                    />
                </div>
                <div>
                    <label className="block" htmlFor="text-content">Snippet: </label>
                    <textarea
                        name="text-content"
                        placeholder="content"
                        onChange={(e) => {
                            setSnippet({ ...snippet, content: e.target.value });
                        }}
                        value={snippet.content}
                        className="block p-2 mt-2.5 mb-5 w-full border-2 border-solid rounded box-border"/* "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" */
                    />
                </div>
                <div>
                    <input className="block" type="file" />
                </div>
                <input className="rounded" type="Submit"></input>
            </form>
            <div className="p-2.5 bg-offwhite border-2 border-solid border-error text-error rounded my-20px">
                ERROR: {error}
            </div>
        </div>
    );
}
