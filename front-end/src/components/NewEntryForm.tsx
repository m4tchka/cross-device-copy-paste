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
    const [error, setError] = useState(null);
    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        let response = await fetch("http://localhost:5174/snippets", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(snippet),
        });
        let data = (await response.json()) as
            | Promise<
                  {
                      title: string;
                      content: string;
                      files: string[];
                      _id: string;
                  }[]
              >
            | Promise<{ error: string }>;
        if (!response.ok) {
            setError(error);
        } else {
            setError(null);
            console.log("New snippet added: ", data);
        }
        let updatedResponse = await fetch("http://localhost:5174/snippets");
        let updatedData = await updatedResponse.json();
        updateSnippetList(updatedData);
        setSnippet({
            title: "",
            content: "",
            files: [],
        });
        // console.log(data);
    }
    return (
        <>
            <form onSubmit={(e) => handleSubmit(e)}>
                <h3>Snippet Form</h3>
                <div>
                    <label htmlFor="title">Snippet title: </label>
                    <input
                        type="text"
                        name="title"
                        placeholder="title"
                        onChange={(e) => {
                            setSnippet({ ...snippet, title: e.target.value });
                        }}
                        value={snippet.title}
                    />
                </div>
                <div>
                    <label htmlFor="text-content">Snippet: </label>
                    <textarea
                        name="text-content"
                        placeholder="content"
                        onChange={(e) => {
                            setSnippet({ ...snippet, content: e.target.value });
                        }}
                        value={snippet.content}
                    />
                </div>
                <div>
                    <input type="file" />
                </div>
                <input type="Submit"></input>
                {error && <div>{error}</div>}
            </form>
        </>
    );
}
