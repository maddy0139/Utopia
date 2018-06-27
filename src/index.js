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
import DashBoard from './components/Dashboard/DashBoard';
import SiteInformation from './components/AddNewRequest/SiteInformation';
import SRType from './components/AddNewRequest/SRType';
import FileAttachement from './components/AddNewRequest/FileAttachement';
import Request from './components/AddNewRequest/Request';
import Reports from './components/Reports/Reports';
import ViewRequest from './components/ViewRequest.js/ViewRequest';

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
        <Route path="AddNewRequest" component={AddNewRequest}/>
        <Route path="AddNewRequest/Request" component={Request}/>
        <Route path="AddNewRequest/SiteInformation" component={SiteInformation}/>
        <Route path="AddNewRequest/SRType" component={SRType}/>
        <Route path="AddNewRequest/FileAttachement" component={FileAttachement}/>
        <Route path="Reports" component={Reports}/>
        <Route path="ViewRequest" component={ViewRequest}/>
      </Route>
    </Router>
</Provider>, 
        document.getElementById('root')
);
