import React from 'react';

import NotfoundPage from './pages/NotfoundPage';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import BlogPage from './pages/BlogPage';
import LoginPage from './pages/LoginPage';


const routes = [
    { 
        path: '/',
        exact: true,
        main: () => <HomePage />
    },
    { 
        path: '/about',
        exact: true,
        main: () => <AboutPage />
    },
    { 
        path: '/blog',
        exact: true,
        main: () => <BlogPage />
    },
    { 
        path: '/login',
        exact: true,
        main: () => <LoginPage  />
    },
    { 
        path: '',
        exact: true,
        main: () => <NotfoundPage />
    },
];

export default routes;