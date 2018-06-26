import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import DashboardGrid from './components/Dashboard/DashboardGrid';
import AddNewRequest from './components/AddNewRequest/AddNewRequest';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={AddNewRequest} />
        <Route path="addNewRequest" component={AddNewRequest} />
        <Route path="Test" component={DashboardGrid} />
    </Route>    
);