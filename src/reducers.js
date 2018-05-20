import { combineReducers } from 'redux';

const defaultNotesState = [
    {
        id: '1',
        title: 'Some Title',
        page: 'Some Title - Some really long content',
    },
    {
        id: '2',
        title: 'Some Other Title',
        page: 'Some Other Title - Some really long content',
    },
    {
        id: '3',
        title: 'Another title',
        page: 'Another title - Some really long content',
    },
    {
        id: '4',
        title: 'Yet another title',
        page: 'Yet another title - Some really long content',
    },
];

function notesReducer(notesState = defaultNotesState, action) {
    if (action.type === 'Test') {
        return notesState;
    }

    return notesState;
}

function displayReducer(displayState = { type: 'empty' }, action) {
    if (action.type === 'DISPLAY_NEW') {
        return { type: 'new' };
    }

    if (action.type === 'DISPLAY_VIEW') {
        return { type: 'view', pageId: action.pageId };
    }

    return displayState;
}

const appReducer = combineReducers({ notes: notesReducer, display: displayReducer });

export default appReducer;
