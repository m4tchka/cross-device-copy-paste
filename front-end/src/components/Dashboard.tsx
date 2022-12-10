import { useState, useEffect } from "react";
import NewEntryForm from "./NewEntryForm";
import SnippetDisplay from "./SnippetDisplay";
import { SnippetType } from "./SnippetDisplay";
export default function Dashboard() {
    const [currentSnippets, setCurrentSnippets] = useState([]);
    useEffect(() => {
        // const fetchSnippets = async () => {
        //     const response = await fetch(import.meta.env.VITE_SNIPPET_API_URL);
        //     const data = await response.json();
        //     setCurrentSnippets(data);
        // };
        // fetchSnippets();
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
            <section>
                <NewEntryForm updateSnipppetFunc={setCurrentSnippets} />
            </section>
            {/*             <button
                onClick={() => {
                    console.log("Current snippets:", currentSnippets);
                }}
            >CONSOLE LOG CURRENT SNIPPETS</button> */}
            <section>
                <p>test</p>
                <p>test</p>
                <SnippetDisplay SnippetArray={currentSnippets} />
            </section>
            {/* </div> */}
        </>
    );
}
