import React from 'react';

export default function Page(props) {
    const {
        store, isNew, isEmpty, isEditable, pageId,
    } = props;

    if (isEmpty) {
        return <div className="card page">Open something!</div>;
    }

    if (isNew) {
        return (
            <div className="card page">
                <div>
                    <textarea id="titleInput" />
                    <br />
                    <textarea id="contentInput" />
                    <button
                        onClick={() => {
                            const inputTitle = document.getElementById("titleInput").value;
                            const inputContent = document.getElementById("contentInput").value;
                            store.dispatch({ type: 'SAVE_NEW_NOTE', title: inputTitle, content: inputContent });
                        }}
                    >
                        Save
                    </button>
                </div>
            </div>
        )
    }

    const { notes } = store.getState();

    const [currentNote] = notes.filter(note => note.id === pageId);

    return (
        (isEditable)
            ? <div className="card page" >
                <textarea id="titleInput">
                    {currentNote.title}
                </textarea>
                <br />
                <textarea id="contentInput">
                    {currentNote.page}
                </textarea>
                <button onClick={()=>{
                    const inputTitle = document.getElementById("titleInput").value;
                    const inputContent = document.getElementById("contentInput").value;
                    store.dispatch({ type: 'SAVE_EDITED_NOTE', id: currentNote.id, title: inputTitle, content: inputContent });
                }}>
                    Save
                </button>
            </div>
            : <div className="card page" ><div className="viewPage">{currentNote.page}</div></div>
    );
}
