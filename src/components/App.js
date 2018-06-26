import React, { Component ,PropTypes} from 'react';
import StatusIndicator from './Dashboard/StatusIndicator';
import TopFilters from './Dashboard/TopFilters';
import DashboardGrid from './Dashboard/DashboardGrid';
import DataServices from './common/DataService/DataServices';
import AddNewRequest from './AddNewRequest/AddNewRequest';
import Header from './common/Header';
import { Switch, Route, Link } from "react-router-dom"
import DashBoard from './Dashboard/DashBoard';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            totalRequests:0,
            awaitingReqCount:0,
            awaitingQualityCount:0,
            awaitingProposalCount:0,
            awaitingDoCount:0,
            allStatusType:[],
            countries:[]
        };
    }

    componentDidMount(){
        DataServices.GetAllRequestCount().then(count=>{
            this.SetTotalRequestCount(count);
        });
        DataServices.GetAwaitingReqReviewCount().then(count=>{
            this.SetAwaitingReqReviewCount(count);
        });
        DataServices.GetAwaitingQualityReviewCount().then(count=>{
            this.SetAwaitingQualityReviewCount(count);
        });
        DataServices.GetAwaitingProposalApprovalCount().then(count=>{
            this.SetAwaitingProposalApprovalCount(count);
        });
        DataServices.GetAwaitingDOCount().then(count=>{
            this.SetAwaitingDOCount(count);
        });
        DataServices.GetRequestStatus().then(allStatus =>{
            this.SetStatus(allStatus);
        });
        DataServices.GetCountryList().then(countries =>{
            this.SetCountries(countries);
        });
        DataServices.GetAllRequest().then(requests =>{
        });
    }
    SetTotalRequestCount(count){
        this.setState({totalRequests:count});
    }
    SetAwaitingReqReviewCount(count){
        this.setState({awaitingReqCount:count});
    }
    SetAwaitingQualityReviewCount(count){
        this.setState({awaitingQualityCount:count});
    }
    SetAwaitingProposalApprovalCount(count){
        this.setState({awaitingProposalCount:count});
    }
    SetAwaitingDOCount(count){
        this.setState({awaitingDoCount:count});
    }
    SetStatus(allStatus) 
    {
        let reactHandler = this;
        let arrayVar = reactHandler.state.allStatusType.splice(0);
        arrayVar.push({"Title":"All Status","ID":"","StatusName":"All Status"});
        $.each(allStatus,(index,item)=>{
            arrayVar.push({"Title":item.Title,"ID":item.Id,"StatusName":item.StatusName});
        });
        reactHandler.setState({allStatusType:arrayVar});
        
    }
    SetCountries(countries)
    {
        let reactHandler = this;
        let arrayVar = reactHandler.state.countries.splice(0);
        arrayVar.push({"Title":"All Countries"});
        $.each(countries,(index,item)=>{
            arrayVar.push({"Title":item.Title});
        });
        reactHandler.setState({countries:arrayVar});
    }
    render()
    {
        return (
        <div className="content dashboardContent">
            {this.props.children}
        </div>
        );
    }
}
App.PropTypes = {
    children: PropTypes.object.isRequired  
  };

export default App;
