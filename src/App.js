import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.scss';
import TopNavbar from './components/layout/TopNavbar'
import SignedOut from './components/auth/SignedOut'
import SelectTrip from './components/dashboard-pages/SelectTrip'

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <TopNavbar />
                <Switch>
                    <Route path='/signedout' component={ SignedOut } />
                    <Route path='/select-trip' component={ SelectTrip } />
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
