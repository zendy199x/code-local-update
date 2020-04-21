import React from 'react';

import HomePage from './pages/HomePage/HomePage';
import AboutPage from './pages/AboutPage/AboutPage';
import AccountPage from './pages/AccountPage/AccountPage';
import BlogPage from './pages/BlogPage/BlogPage';
import CartPage from './pages/CartPage/CartPage';
import PortfolioPage from './pages/PortfolioPage/PortfolioPage';
import PortfolioInfo from './components/PortfolioInfo';
import ShopPage from './pages/ShopPage/ShopPage';
import ShopItemPage from './pages/ShopItemPage/ShopItemPage';
import NotfoundPage from './pages/NotfoundPage/NotfoundPage';


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
        path: '/account',
        exact: true,
        main: () => <AccountPage />
    },
    {
        path: '/blog',
        exact: true,
        main: () => <BlogPage />
    },
    {
        path: '/cart',
        exact: true,
        main: () => <CartPage />
    },
    {
        path: '/portfolio',
        exact: true,
        main: () => <PortfolioPage />
    },
    {
        path: '/portfolio/:name',
        exact: true,
        main: ({match}) => <PortfolioInfo match={match}/>
    },
    {
        path: '/shop',
        exact: true,
        main: () => <ShopPage />
    },
    {
        path: '/shop/:name/:id',
        exact: true,
        main: ({match}) => <ShopItemPage match={match} />
    },
    {
        path: '',
        exact: true,
        main: () => <NotfoundPage />
    }
];

export default routes;