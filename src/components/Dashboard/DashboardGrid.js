import React from 'react';
import Requestor from './Requestor';
import GDMTVendor from './GDMTVendor';
import SuperUser from './SuperUser';
import ProcurementTeam from './ProcurementTeam';

class DashboardGrid extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
        };
        this.SortData = this.SortData.bind(this);
    }
    SortData(sortType){
        this.props.SortData(sortType);
    }
    render()
    {
        return(
            <SuperUser SortData = {this.SortData}/>  
        );
    }
}
export default DashboardGrid;