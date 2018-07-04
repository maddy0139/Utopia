import React from 'react';
import Paging from './Paging';
import {Link} from 'react-router';


class ProcurementTeam extends React.Component{

    constructor(props)
    {
        super(props);
        this.state={

        };
        this.SortData = this.SortData.bind(this);
    }
    SortData(sortType){
        this.props.SortData(sortType);        
    }
    render()
    {
        return(
            <section className="inputSection text-center">
                <div className="container" style={{ "width": "1240px"}}>
                    <div className="row">
                        <div className="col-md-12">
                            <div id="no-more-tables" className="clsScroll" style={{ "display": "block"}}>
                                <table className="csTable cf" id="RequestsTable">
                                    <thead className="cf">
                                        <tr>
                                            <th id="RequestID">
                                                <div>Request ID
                                                    <a href="#" onClick={this.SortData.bind(this,"Request ID")} className="fa fa-sort-alpha-asc" id="RequestID" order="dsc" type="Text"></a>
                                                </div>
                                            </th>
                                            <th id="SRID">
                                                <div>SR ID
                                                    <a href="#" onClick={this.SortData.bind(this,"SR ID")} className="fa fa-sort-alpha-asc" id="SRID" order="asc" type="Text"></a>
                                                </div>
                                            </th>
                                            <th id="ProjectName">
                                                <div>Request Title
                                                    <a href="#" onClick={this.SortData.bind(this,"Request Title")} className="fa fa-sort-alpha-asc" id="ProjectName" order="asc"
                                                        type="Text"></a>
                                                </div>
                                            </th>
                                            <th id="Countries">
                                                <div>Country
                                                    <a href="#" onClick={this.SortData.bind(this,"Country")} className="fa fa-sort-alpha-asc" id="Countries" order="asc" type="Text"></a>
                                                </div>
                                            </th>
                                            <th id="SRType">
                                                <div>SR Type
                                                    <a href="#" onClick={this.SortData.bind(this,"SR Type")}className="fa fa-sort-alpha-asc" id="SRType" order="asc" type="Lookup"></a>
                                                </div>
                                            </th>
                                            <th id="Vendors">
                                                <div>Vendor Name
                                                    <a href="#" onClick={this.SortData.bind(this,"Vendor Name")} className="fa fa-sort-alpha-asc" id="Vendors" order="asc" type="Text"></a>
                                                </div>
                                            </th>
                                            <th id="RequestCreatedDT">
                                                <div>Date Request Created
                                                    <a href="#" onClick={this.SortData.bind(this,"Date Requested Created")} className="fa fa-sort-alpha-desc" id="RequestCreatedDT"
                                                        order="dsc" type="Date"></a>
                                                </div>
                                            </th>
                                            <th id="ProposalApprovedTargetDT">
                                                <div>Target Proposal Approval Date
                                                    <a href="#" onClick={this.SortData.bind(this,"Target Proposal Approval Date")} className="fa fa-sort-alpha-asc" id="ProposalApprovedTargetDT"
                                                        order="asc" type="Date"></a>
                                                </div>
                                            </th>
                                            <th id="RequestStatus">
                                                <div>Status
                                                    <a href="#" onClick={this.SortData.bind(this,"Status")} className="fa fa-sort-alpha-asc" id="RequestStatus" order="asc" type="Lookup"></a>
                                                </div>
                                            </th>
                                            <th id="Created">
                                                <div>Age
                                                    <a href="#" onClick={this.SortData.bind(this,"Age")} className="fa fa-sort-alpha-asc" id="Created" order="asc" type="TicketAge"></a>
                                                </div>
                                            </th>
                                            <th id="ID">
                                                <div>Actions
                                                    <a href="#" className="" id="ID" order="" type="Action"></a>
                                                </div>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr id="tr_255">
                                            <td data-title="Request ID">
                                                <div>
                                                    <Link to="/sites/Box/pages/utopia.aspx/ViewRequest">GDM00000255</Link>
                                                </div>
                                            </td>
                                            <td data-title="SR ID">
                                                <div></div>
                                            </td>
                                            <td data-title="Request Title">
                                                <div>AM_Test_F</div>
                                            </td>
                                            <td data-title="Country">
                                                <div></div>
                                            </td>
                                            <td data-title="SR Type">
                                                <div>AT0</div>
                                            </td>
                                            <td data-title="Vendor Name">
                                                <div>British Telecom (BT)</div>
                                            </td>
                                            <td data-title="Date Request Created">
                                                <div>05/02/2018</div>
                                            </td>
                                            <td data-title="Target Proposal Approval Date">
                                                <div></div>
                                            </td>
                                            <td data-title="Status">
                                                <div>Proposal - Procurement Approval Required</div>
                                            </td>
                                            <td data-title="Age">
                                                <div>139</div>
                                            </td>
                                            <td>
                                                <div>
                                                    <a className="fa fa-copy clsCopyRequest" data-toggle="tooltip" title="" href="https://unilever.sharepoint.com/sites/QA_utopia/pages/AddServiceRequest.aspx?ReqId=255&amp;IsCopy=1"
                                                        data-original-title="Copy Request"></a>
                                                    <a className="fa fa-edit clsEditRequest" data-toggle="tooltip" title="" href="https://unilever.sharepoint.com/sites/QA_utopia/pages/EditServiceRequest.aspx?ReqId=255&amp;Source=Dashboard"
                                                        data-original-title="Edit Request"></a>
                                                    <a className="fa fa-trash-o clsDeleteRequest" href="#" data-toggle="tooltip"
                                                        title="" onclick="ShowDeleteRequestModel(255,this)" data-original-title="Delete Request"></a>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div className="noRecord" style={{ "display": "none"}}>No Records Found</div>
                            </div>
                        </div>
                    </div>
                </div>
                <Paging/>
            </section>
        );
    }
}

export default ProcurementTeam;