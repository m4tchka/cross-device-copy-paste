import NewEntryForm from "./NewEntryForm";
import SnippetDisplay from "./SnippetDisplay";
export default function Dashboard() {
    return (
        <>
            {/* <div className="border-solid border-2 border-sky-500 bg-slate-900 p-8"> */}
            <h2 className="font-bold underline">Dashboard</h2>
            <section>
                <NewEntryForm />
            </section>
            <section>
                <p>test</p>
                <p>test</p>
                <p>test</p>
                <p>test</p>
                <SnippetDisplay />
            </section>
            {/* </div> */}
        </>
    );
}
