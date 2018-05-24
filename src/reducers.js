import { combineReducers } from 'redux';
const defaultNoteState = [
    {
    id : 1,
    title : "this is title",
    page : "this is page content",
    },
    {
        id : 2,
        title : "this is other title",
        page : "this is other page content",
    },
    {
        id : 3,
        title : "this is different title",
        page : "this is different page content",
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
       const [currentNote] = notesState.filter(note => note.id === action.pageId);
       currentNote.title = action.title;
       currentNote.page = action.content;
    }

    if(action.type === "DELETE_NOTE"){
        return notesState.filter(note => note.id !== action.pageId);
    }

    return notesState;
}

function displayReducer(displayState = { type: 'empty' }, action) {
    switch (action.type) {
        case 'SAVE_NEW_NOTE':
        case 'SAVE_EDITED_NOTE':
        case 'DELETE_NOTE':
            return { type: 'empty' };
        
        case 'DISPLAY_NEW':
            return { type: 'new' };
    
        case 'DISPLAY_VIEW':
            return { type: 'view', pageId: action.pageId };
    
        case 'DISPLAY_EDIT':
            return {type: 'edit', pageId: action.pageId };

        default: 
            return displayState;
    }
}

const appReducer = combineReducers({ notes: notesReducer, display: displayReducer });

export default appReducer;
