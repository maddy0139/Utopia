import React from 'react';
import $ from 'jquery';

class BespokeReport extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {

        };
        let RequestId = "UnChecked";
        this.SaveToList = this.SaveToList.bind(this);
        this.CheckBoxCheckedOrUnChecked = this.CheckBoxCheckedOrUnChecked.bind(this);
    }

    CheckBoxCheckedOrUnChecked(checkBoxId)
    {

    }
    SaveToList()
    {
        console.log($("#Request ID").checked);
    }
    CreateJson()
    {

    }
    render()
    {
        return(
            <div style={{"marginLeft":"30px"}}>
                <select>
                    <option value="Dashboard">Dashboard</option>
                    <option value="View">View</option>
                </select>
                <br/><br/>
                <input type="checkbox" id="Request ID" value="Request ID" onClick={this.CheckBoxCheckedOrUnChecked.bind(this,"Request ID")}/>Request ID<br/>
                <input type="checkbox" value="Request Title"/>Request Title<br/>
                <input type="checkbox" value="SR ID"/>SR ID<br/>
                <input type="checkbox" value="Expedite?"/>Expedite?<br/>
                <input type="checkbox" value="Request Status"/>Request Status<br/>
                <input type="checkbox" value="Request Description"/>Request Description<br/>
                <input type="checkbox" value="Is this a Child SR?"/>Is this a Child SR?<br/>
                <input type="checkbox" value="Parent SR ID"/>Parent SR ID<br/>
                <input type="checkbox" value="Requester"/>Requester<br/>
                <input type="checkbox" value="Request Funded"/>Request Funded<br/>
                <input type="checkbox" value="Clarity ID"/>Clarity ID<br/>
                <input type="checkbox" value="Requester's Email ID"/>Requester's Email ID <br/>
                <input type="checkbox" value="Requester's Phone Number"/>Requester's Phone Number <br/>
                <input type="checkbox" value="SR Type"/>SR Type<br/>
                <input type="checkbox" value="Vendor Name"/>Vendor Name <br/>
                <input type="checkbox" value="Region"/>Region<br/>
                <input type="checkbox" value="Site Name"/>Site Name <br/>
                <input type="checkbox" value="MCO"/>MCO <br/>
                <input type="checkbox" value="Site Address"/>Site Address <br/>
                <input type="checkbox" value="Country"/>Country<br/>
                <input type="checkbox" value="Date Request Submitted for Requirements Approval"/>Date Request Submitted for Requirements Approval <br/>
                <input type="checkbox" value="Date Request Submitted for Proposal Creation"/>Date Request Submitted for Proposal Creation<br/>
                <input type="checkbox" value="Date Request Cancelled"/>Date Request Cancelled<br/>
                <input type="checkbox" value="Date Request Closed"/>Date Request Closed<br/>
                <input type="checkbox" value="AGE in Calendar Days"/>AGE in Calendar Days<br/>
                <input type="checkbox" value="Legal Entity"/>Legal Entity<br/>
                <input type="checkbox" value="Service Line Approver"/>Service Line Approver<br/>
                <input type="checkbox" value="Technical Project Manager"/>Technical Project Manager<br/>
                <input type="checkbox" value="Proposal Version #"/>Proposal Version #<br/>
                <input type="checkbox" value="Target Requirements Approval Dat"/>Target Requirements Approval Date<br/>
                <input type="checkbox" value="Date Requirements Approved"/>Date Requirements Approved<br/>
                <input type="checkbox" value="Target Proposal Creation Date"/>Target Proposal Creation Date<br/>
                <input type="checkbox" value="Date Proposal Created"/>Date Proposal Created<br/>
                <input type="checkbox" value="Target Proposal Approval Date"/>Target Proposal Approval Date<br/>
                <input type="checkbox" value="Date Proposal Approved"/>Date Proposal Approved<br/>
                <input type="checkbox" value="Requested Delivery Date By"/>Requested Delivery Date By<br/>
                <input type="checkbox" value="Agreed Delivery Date (ADD)"/>Agreed Delivery Date (ADD)<br/>
                <input type="checkbox" value="Target Project Delivery Date"/>Target Project Delivery Date<br/>
                <input type="checkbox" value="Actual Project Delivery Date"/>Actual Project Delivery Date <br/>
                <input type="checkbox" value="Solutions Designer NSR"/>Solutions Designer NSR<br/>
                <input type="checkbox" value="Solutions Designer Proposal"/>Solutions Designer Proposal <br/>
                <input type="checkbox" value="Proposal Approved?"/>Proposal Approved?<br/>
                <input type="checkbox" value="Reason"/>Reason<br/>
                <input type="checkbox" value="Date DO requested"/>Date DO requested <br/>
                <input type="checkbox" value="DO Received Date"/>DO Received Date <br/>
                <input type="checkbox" value="Date DO Submitted to Vendor"/>Date DO Submitted to Vendor<br/>
                <input type="checkbox" value="Cost Center"/>Cost Center <br/>
                <input type="checkbox" value="DO Number"/>DO Number <br/>
                <input type="checkbox" value="One Time Cost (OTC) Euros"/>One Time Cost (OTC) Euros <br/>
                <input type="checkbox" value="New Monthly Recurring Charges (MRC) Euros"/>New Monthly Recurring Charges (MRC) Euros <br/>
                <input type="checkbox" value="Current Monthly Recurring Charges (MRC) Euros"/>Current Monthly Recurring Charges (MRC) Euros <br/>
                <input type="checkbox" value="Delta Monthly Recurring Charges (MRC) Euros"/>Delta Monthly Recurring Charges (MRC) Euros <br/>
                <input type="checkbox" value="Estimated Monthly Recurring Charges (MRC) Euros"/>Estimated Monthly Recurring Charges (MRC) Euros <br/>
                <input type="checkbox" value="SR Details-Customer Satisfaction"/>SR Details-Customer Satisfaction<br/>
                <input type="checkbox" value="Request Complete?"/>Request Complete? <br/>
                <br/>
                <br/>
                <input type="button" value="Save View" onClick={this.SaveToList.bind(this)}/>
            </div>
        );
    }
}
export default BespokeReport;