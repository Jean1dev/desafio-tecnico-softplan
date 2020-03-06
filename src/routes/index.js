import React from 'react'
import { Switch } from 'react-router-dom'
import RouteWrapper from './Router'
import Dashboard from '../pages/dashboard'
import HeroDetails from '../pages/hero-details'

export default function Routes() {
    return (
        <Switch>
            <RouteWrapper path="/" exact component={Dashboard}/>
            <RouteWrapper path="/hero-details/*" exact component={HeroDetails}/>
        </Switch>
    )
}