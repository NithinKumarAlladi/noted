import React from 'react';

export default function Page(props) {
    const {
        store, isNew, isEmpty, isEditable, pageId,
    } = props;

    if (isEmpty) {
        return <div className="card page">Open something!</div>;
    }

    if (isNew) {
        return <div className="card page">new form</div>;
    }

    const { notes } = store.getState();

    const [currentNote] = notes.filter(note => note.id === pageId);

    return (
        (isEditable)
            ? <div className="card page" >editing - {currentNote.page}</div>
            : <div className="card page" >{currentNote.page}</div>
    );
}
