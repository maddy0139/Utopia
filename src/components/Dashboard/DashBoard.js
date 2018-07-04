import React, { Component ,PropTypes} from 'react';
import StatusIndicator from './StatusIndicator';
import TopFilters from './TopFilters';
import DashboardGrid from './DashboardGrid';
import DataServices from '../common/DataService/DataServices';

class DashBoard extends Component {
    constructor(props){
        super(props);
        this.state = {
            totalRequests:0,
            awaitingReqCount:0,
            awaitingQualityCount:0,
            awaitingProposalCount:0,
            awaitingDoCount:0,
            allStatusType:[],
            countries:[],
            SortType:"Ascending"
        };
        this.SortData = this.SortData.bind(this);
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
    SortData(sortByType){
        let srtType = (this.state.SortType === "Ascending") ? "Descending" : "Ascending";
        let cssAddClass = (srtType === "Descending")  ? "fa-sort-alpha-desc" : "fa-sort-alpha-asc";
        let cssRemoveClass = (srtType === "Descending")  ? "fa-sort-alpha-asc" : "fa-sort-alpha-desc";
        this.setState({SortType:srtType});

        $('th #'+sortByType).addClass(cssAddClass).removeClass(cssRemoveClass);
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
            <div >
                <StatusIndicator totalRequests={this.state.totalRequests} 
                                awaitingReqCount={this.state.awaitingReqCount}
                                awaitingQualityCount={this.state.awaitingQualityCount}
                                awaitingProposalCount={this.state.awaitingProposalCount}
                                awaitingDoCount={this.state.awaitingDoCount}/>
                <TopFilters allStatusType={this.state.allStatusType} countries={this.state.countries}/>
                <DashboardGrid SortData={this.SortData}/>
            </div>
        );
    }
}
export default DashBoard;
