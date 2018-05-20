import React from 'react';

import Page from './Page';

export default function ContentDisplay(props) {
    const { store } = props;
    const { display: { type, pageId } } = store.getState();

    switch (type) {
        case 'new':
            return <Page store={store} isNew />;
        case 'view':
            return <Page store={store} pageId={pageId} />;
        case 'edit':
            return <Page store={store} pageId={pageId} isEditable />;
        default:
            return <Page store={store} isEmpty />;
    }
}
