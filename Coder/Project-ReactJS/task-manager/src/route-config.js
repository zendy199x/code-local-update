import React from 'react';

import NotfoundPage from './pages/NotfoundPage';
import TaskPage from './pages/TaskPage';
import SignupPage from './pages/SignupPage';
import SigninPage from './pages/SigninPage';
import UserPage from './pages/UserPage';

const routes = [
    { 
        path: '/',
        exact: true,
        main: () => <TaskPage  />
    },
    { 
        path: '/user',
        exact: true,
        main: () => <UserPage />
    },
    { 
        path: '/signin',
        exact: true,
        main: () => <SigninPage />
    },
    { 
        path: '/task',
        exact: true,
        main: () => <TaskPage  />
    },
    { 
        path: '/signup',
        exact: true,
        main: () => <SignupPage />
    },
    { 
        path: '',
        exact: true,
        main: () => <NotfoundPage />
    },
];

export default routes;
