import { combineReducers } from 'redux';
const defaultNoteState = [
    {
    id : 1,
    title : "this is title",
    page : "this is page content",
    }
]
function notesReducer(notesState = defaultNoteState, action) {
    if(action.type === 'SAVE_NEW_NOTE'){
        return[
            ...notesState,
            {
                id : Date.now(),
                title : action.title,
                page : action.content,
            }
        ]
    }
    if(action.type === "SAVE_EDITED_NOTE"){
       const [currentNote] = notesState.filter(note => note.id === action.id);
       currentNote.title = action.title;
       currentNote.page = action.content;
    }

    return notesState;
}

function displayReducer(displayState = { type: 'empty' }, action) {
    if(action.type === 'SAVE_NEW_NOTE'){
        return { type: 'empty' };
    }

    if(action.type === 'SAVE_EDITED_NOTE'){
        return { type: 'empty' };
    }

    if (action.type === 'DISPLAY_NEW') {
        return { type: 'new' };
    }

    if (action.type === 'DISPLAY_VIEW') {
        return { type: 'view', pageId: action.pageId };
    }

    if(action.type === 'DISPLAY_EDIT'){
        return {type: 'edit', pageId: action.pageId };
    }

    return displayState;
}

const appReducer = combineReducers({ notes: notesReducer, display: displayReducer });

export default appReducer;
