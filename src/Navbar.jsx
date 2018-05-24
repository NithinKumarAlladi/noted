import React from 'react';


export default function Navbar(props) {
    const { store, className } = props;
    const { notes } = store.getState();

    return (
        <div className={`${className} navbar`} >
            <div className="card new-note">
                <button
                    className="btn new-note-btn"
                    onClick={() => { store.dispatch({ type: 'DISPLAY_NEW' }); }}
                >
                    New Note
                </button>
            </div>
            <div className="card notes">
                <div className="notes-list">
                    {
                        notes.map(note => (
                            <div
                                key={note.id}
                                className="btn notes-list-item"
                                onClick={() => { store.dispatch({ type: 'DISPLAY_VIEW', pageId: note.id }); }}
                            >
                                <span className="note-title">{note.title}</span>
                                <div className="note-actions">
                                    <img class = "icons" onClick={(e) => {e.stopPropagation(); store.dispatch({ type: 'DISPLAY_EDIT', pageId: note.id, }); }} src="/icons/edit.svg"/>
                                    <img class = "icons" onClick={(e) => {e.stopPropagation(); store.dispatch({ type: 'DELETE_NOTE', pageId: note.id, }); }} src="/icons/trash-alt.svg"/>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}
