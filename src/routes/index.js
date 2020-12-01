import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Login from '../components/Login'
import Home from '../components/Home'
import PageNotFound from '../components/PageNotFound'

const AppRouter = () => {

    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={Login} />
                    <Route path="/home" component={Home} />
                    <Route path="**" component={PageNotFound} />
                </Switch>
            </BrowserRouter>
        </>
    )
}

export default AppRouter