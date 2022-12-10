export interface SnippetType {
    title: string;
    content: string;
    files?: string[];
    _id?: string;
}
interface SnippetsProp {
    SnippetArray: SnippetType[];
}

export default function SnippetDisplay({ SnippetArray }: SnippetsProp) {
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
                    </div>
                );
            })}
        </div>
    );
}
