import React from 'react';

import NotfoundPage from './pages/NotfoundPage';
import HomePage from './pages/HomePage';
import ArtistPage from './pages/ArtistPage';
import AlbumPage from './pages/AlbumPage';

const routes = [
    { 
        path: '/',
        exact: true,
        main: () => <HomePage />
    },
    { 
        path: '/artist/:id',
        exact: true,
        main: ({match}) => <ArtistPage match={match} />
    },
    { 
        path: '/album/:id',
        exact: true,
        main: ({match}) => <AlbumPage match={match} />
    },
    
    { 
        path: '',
        exact: true,
        main: () => <NotfoundPage />
    },
];

export default routes;