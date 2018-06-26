import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import './style/hover.css';
import './style/main.css';
import './style/custom.css';
import './style/wizard.css';
import './style/font-awesome.css';
import * as $ from 'jquery';
import './style/font-awesome.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import { createStore, combineReducers } from 'redux'
import {Provider} from 'react-redux';
import { Router, Route, browserHistory,IndexRoute  } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import AddNewRequest from './components/AddNewRequest/AddNewRequest';
import DashboardGrid from './components/Dashboard/DashboardGrid';
import Requestor from './components/Dashboard/GDMTVendor';
import DashBoard from './components/Dashboard/DashBoard';
import Header from './components/common/Header';

const store = createStore(
        combineReducers({
          routing: routerReducer
        })
      );
const history = syncHistoryWithStore(browserHistory, store);

render(
<Provider store={store}>
<Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={DashBoard}/>
        <Route path="addNewRequest" component={AddNewRequest}/>
        <Route path="App" component={App}/>
      </Route>
    </Router>
</Provider>, 
        document.getElementById('root')
);
