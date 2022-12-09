import { useState } from "react";
export default function NewEntryForm() {
    const [snippet, setSnippet] = useState({
        title: "",
        content: "",
        files: [],
    });
    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setSnippet({
            title: "",
            content: "",
            files: [],
        });
        console.log(snippet);
        // console.log(process.env.XYZ)
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
            </form>
        </>
    );
}
