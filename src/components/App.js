import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import StatusIndicator from './Dashboard/StatusIndicator';
import TopFilters from './Dashboard/TopFilters';
import DashboardGrid from './Dashboard/DashboardGrid';
import DataServices from './common/DataService/DataServices';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            totalRequests:0,
            awaitingReqCount:0,
            awaitingQualityCount:0,
            awaitingProposalCount:0,
            awaitingDoCount:0,
            allStatusType:[]
        };
    }

    componentDidMount(){
        DataServices.GetAllRequestCount().then(count=>{
            this.setState({totalRequests:count});
        });
        DataServices.GetAwaitingReqReviewCount().then(count=>{
            this.setState({awaitingReqCount:count});
        });
        DataServices.GetAwaitingQualityReviewCount().then(count=>{
            this.setState({awaitingQualityCount:count});
        });
        DataServices.GetAwaitingProposalApprovalCount().then(count=>{
            this.setState({awaitingProposalCount:count});
        });
        DataServices.GetAwaitingDOCount().then(count=>{
            this.setState({awaitingDoCount:count});
        });
        DataServices.GetRequestStatus().then(allStatus =>{
            this.SetStatus(allStatus);
        });
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
    render()
    {
        return (
        <div className="content dashboardContent">
            <StatusIndicator totalRequests={this.state.totalRequests} 
                             awaitingReqCount={this.state.awaitingReqCount}
                             awaitingQualityCount={this.state.awaitingQualityCount}
                             awaitingProposalCount={this.state.awaitingProposalCount}
                             awaitingDoCount={this.state.awaitingDoCount}/>
            <TopFilters allStatusType={this.state.allStatusType}/>
            <DashboardGrid/>
        </div>
        );
    }
}

export default App;
