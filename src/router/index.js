import React from 'react';
import Loadable from 'react-loadable';

let config = [
    {
        name: '/',
        path: '/',
        exact: true,
        component: Loadable({
            loader: () => import('../pages/home/index.js'),
            loading: () => <div />,
            delay: 300,
        })
    },
    {
        name: 'database',
        path: '/database',
        exact: true,
        component: Loadable({
            loader: () => import('../pages/database/index.js'),
            loading: () => <div />,
            delay: 300,
        })
    },
    {
        name: 'server',
        path: '/server',
        exact: true,
        component: Loadable({
            loader: () => import('../pages/server/index.js'),
            loading: () => <div />,
            delay: 300,
        })
    },
    {
        name: 'web',
        path: '/web',
        exact: true,
        component: Loadable({
            loader: () => import('../pages/web/index.js'),
            loading: () => <div />,
            delay: 300,
        })
    },

    {
        name: 'javascript',
        path: '/javascript',
        exact: true,
        component: Loadable({
            loader: () => import('../pages/javascript/index.js'),
            loading: () => <div />,
            delay: 300,
        })
    },
    {
        name: 'vue',
        path: '/vue',
        exact: true,
        component: Loadable({
            loader: () => import('../pages/vue/index.js'),
            loading: () => <div />,
            delay: 300,
        })
    },
    {
        name: 'react',
        path: '/react',
        exact: true,
        component: Loadable({
            loader: () => import('../pages/react/index.js'),
            loading: () => <div />,
            delay: 300,
        })
    },
    {
        name: 'node',
        path: '/node',
        exact: true,
        component: Loadable({
            loader: () => import('../pages/node/index.js'),
            loading: () => <div />,
            delay: 300,
        })
    },
];
export default config;
