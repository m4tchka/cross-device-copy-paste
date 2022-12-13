import { useState, useEffect } from "react";
import NewEntryForm from "./NewEntryForm";
import SnippetDisplay from "./SnippetDisplay";
export default function Dashboard() {
    const [currentSnippets, setCurrentSnippets] = useState<
        { title: string; content: string; files: string[]; _id: string }[]
    >([]);
    useEffect(() => {
        (async function fetchSnippets() {
            const response = await fetch(import.meta.env.VITE_SNIPPET_API_URL);
            const data = await response.json();
            setCurrentSnippets(data);
        })();
    }, []);

    return (
        <>
            <h2 className="font-bold underline">Dashboard</h2>
            <div className="flex justify-between">
                <section>
                    <NewEntryForm updateSnippetList={setCurrentSnippets} />
                </section>
                <section>
                    <SnippetDisplay SnippetArray={currentSnippets} updateSnippetList={setCurrentSnippets} />
                </section>
            </div>
        </>
    );
}
