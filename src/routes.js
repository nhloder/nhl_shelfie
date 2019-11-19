import React from 'react';
import Form from './components/form/Form';
import Dashboard from './components/dashboard/Dashboard';
import { Switch, Route } from 'react-router-dom';

export default (
    <Switch>
        <Route exact path='/' component={Dashboard} />
        <Route path='/add' component={Form}/>
        <Route path='/edit/:id' component={Form}/>
    </Switch>
)