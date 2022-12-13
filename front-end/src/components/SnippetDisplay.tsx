export interface SnippetType {
    title: string;
    content: string;
    files?: string[];
    _id: string;
}
export interface SnippetsProps {
    SnippetArray: SnippetType[];
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
}

export default function SnippetDisplay({
    SnippetArray,
    updateSnippetList,
}: SnippetsProps) {
    async function handleDelete(id: string) {
        const response = await fetch(
            `${import.meta.env.VITE_SNIPPET_API_URL}/${id}`,
            {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
        const data = await response.json();

        let updatedResponse = await fetch(import.meta.env.VITE_SNIPPET_API_URL);
        let updatedData = await updatedResponse.json();
        updateSnippetList(updatedData);
    }
    return (
        <div className="">
            {SnippetArray.map((elem, ind) => {
                return (
                    <div
                        key={elem._id}
                        className="border-solid border-2 border-sky-500 bg-slate-900 p-8"
                    >
                        <h2>Title: {elem.title}</h2>
                        <p>Contents: {elem.content}</p>
                        {elem.files ? (
                            elem.files.map((file) => {
                                return <img src={file}></img>;
                            })
                        ) : (
                            <></>
                        )}
                        <button onClick={() => handleDelete(elem._id)}>
                            DELETE SNIPPET
                        </button>
                    </div>
                );
            })}
        </div>
    );
}
