import React from 'react'

import { PublicRoute, PrivateRoute, Loadable } from '@helpers'
import { Layout } from '@layout'

export const designRoutes = [
    {
        path: '/',
        element: <Loadable route="login" folder="design" />,
    },
    {
        path: '/register',
        element: <Loadable route="register" folder="design" />,
    },
    {
        path: 'dashboard',
        element: (
            <Layout>
                <Loadable route="dashboard" folder="design" />
            </Layout>
        ),
    },
    {
        path: '*',
        element: <Loadable route="notfound" folder="design" />,
    },
]

export const appRoutes = [
    // A route object has the same properties as a <Route>
    // element. The `children` is just an array of child routes.
    {
        path: '/',
        element: (
            <PublicRoute>
                <Loadable route="login" folder="screens" />
            </PublicRoute>
        ),
    },
    {
        path: '/register',
        element: (
            <PublicRoute>
                <Loadable route="register" folder="screens" />
            </PublicRoute>
        ),
    },
    {
        path: 'dashboard',
        element: (
            <PrivateRoute>
                <Layout>
                    <Loadable route="dashboard" folder="screens" />
                </Layout>
            </PrivateRoute>
        ),
    },
    {
        path: '*',
        element: <Loadable route="notfound" folder="screens" />,
    },
]
