import React from 'react'
import { Switch } from 'react-router-dom'
import RouteWrapper from './Router'
import Dashboard from '../pages/dashboard'
import HeroDetails from '../pages/hero-details'
import EditHero from '../pages/edit-hero'
import MyHeros from '../pages/my-heros'

export default function Routes() {
    return (
        <Switch>
            <RouteWrapper path="/" exact component={Dashboard}/>
            <RouteWrapper path="/hero-details" exact component={HeroDetails}/>
            <RouteWrapper path="/edit-hero" exact component={EditHero}/>
            <RouteWrapper path="/my-heros" exact component={MyHeros}/>
        </Switch>
    )
}