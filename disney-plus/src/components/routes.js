import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom';
import React from 'react'
import Home from '../components/Home/Home'
import Detail from './Detail/Detail';
import Login from './Login/Login';
export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/home">
                    <Home />
                </Route>
                <Route path="/detail" component={Detail} />
                <Route exact path="/" component={Login} />
            </Switch>
        </BrowserRouter>
    )
}
//   <Redirect from="/" to="/home" />
