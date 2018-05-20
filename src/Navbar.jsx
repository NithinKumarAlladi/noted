import React from 'react';

export default function Navbar(props) {
    const { store, className } = props;
    const { notes } = store.getState();

    return (
        <div className={`${className} navbar`} >
            <div className="card">
                <button
                    className="new-note-btn"
                    onClick={() => { store.dispatch({ type: 'DISPLAY_NEW' }); }}
                >
                    New Note
                </button>
            </div>
            <div className="card notes">
                <ul className="notes-list">
                    {
                        notes.map(note => (
                            <li key={note.id} onClick={() => { store.dispatch({ type: 'DISPLAY_VIEW', pageId: note.id }); }}>
                                {note.title}
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
}
