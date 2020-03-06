import React from 'react'

import { Route } from 'react-router-dom'
import defaultLayout from '../pages/_layout/default'

export default function RouteWrapper({
    component: Component,
    ...others
}) {

    const Layout = defaultLayout

    return (
        <Route
            {...others}
            render={props => (
                <Layout>
                    <Component {...props}></Component>
                </Layout>
            )}
        >
        </Route>
    )
}