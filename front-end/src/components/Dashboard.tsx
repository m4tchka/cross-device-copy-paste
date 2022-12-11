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
            {/* <div className="border-solid border-2 border-sky-500 bg-slate-900 p-8"> */}
            <h2 className="font-bold underline">Dashboard</h2>
            <div className="flex">
                <section>
                    <NewEntryForm updateSnippetList={setCurrentSnippets} />
                </section>
                <section>
                    <SnippetDisplay SnippetArray={currentSnippets} />
                </section>
                {/* </div> */}
            </div>
        </>
    );
}
