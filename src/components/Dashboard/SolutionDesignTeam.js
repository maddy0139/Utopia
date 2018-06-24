import React from 'react';
import Paging from './Paging';

class SolutionDesignteam extends React.Component
{
    render()
    {
        return(
            <section className="inputSection text-center">
                <div className="container" style={{"width": "1326px"}}>
                    <div className="row">
                        <div className="col-md-12">
                            <div id="no-more-tables" className="clsScroll" style={{"display": "none"}}>
                            <table className="csTable cf" id="RequestsTable" style={{"display": "none"}}>
                                <thead className="cf">
                                </thead>
                                <tbody>
                                </tbody>
                            </table>
                            <div className="noRecord">No Records Found</div>
                            </div>
                            <div className="fixTableRq">
                            <table id="tblLayoutFix" className="csTable LayoutFix">
                                <colgroup>
                                    <col span="1" className="tblCol1"/>
                                    <col span="8" className="tblCol2"/>
                                    <col span="3" className="tblCol3"/>
                                    <col span="1" className="tblCol4"/>
                                    <col span="1" className="tblCol5"/>
                                    <col span="1" className="tblCol6"/>
                                </colgroup>
                                <thead>
                                    <tr>
                                        <th colspan="1">Basic Info</th>
                                        <th colspan="8">SR Details</th>
                                        <th colspan="3">Vendor</th>
                                        <th colspan="1">General Dates</th>
                                        <th colspan="1">Requirements Validation</th>
                                        <th colspan="1">Proposal Approval</th>
                                    </tr>
                                    <tr>
                                        <th id="RequestID">
                                            <div>Request ID
                                                <a href="#" className="fa fa-sort-alpha-desc" id="RequestID" order="dsc" type="Text"></a>
                                            </div>
                                        </th>
                                        <th id="SRID">
                                            <div>SR ID<a href="#" className="fa fa-sort-alpha-asc" id="SRID" order="asc" type="Text"></a></div>
                                        </th>
                                        <th id="ProjectDescription">
                                        <div>Request Description<a href="#" className="" id="ProjectDescription" order="undefined" type="Text"></a></div>
                                        </th>
                                        <th id="RequestStatus">
                                        <div>Status<a href="#" className="fa fa-sort-alpha-asc" id="RequestStatus" order="asc" type="Lookup"></a></div>
                                        </th>
                                        <th id="Requester">
                                        <div>Requester<a href="#" className="fa fa-sort-alpha-asc" id="Requester" order="asc" type="Lookup"></a></div>
                                        </th>
                                        <th id="ProjectName">
                                        <div>Request Title<a href="#" className="fa fa-sort-alpha-asc" id="ProjectName" order="asc" type="Text"></a></div>
                                        </th>
                                        <th id="Region">
                                        <div>Region<a href="#" className="fa fa-sort-alpha-desc" id="Region" order="dsc" type="Text"></a></div>
                                        </th>
                                        <th id="Countries">
                                        <div>Country<a href="#" className="fa fa-sort-alpha-asc" id="Countries" order="asc" type="Text"></a></div>
                                        </th>
                                        <th id="SRType">
                                        <div>SR Type<a href="#" className="fa fa-sort-alpha-asc" id="SRType" order="asc" type="Lookup"></a></div>
                                        </th>
                                        <th id="Vendors">
                                        <div>Vendor Name<a href="#" className="fa fa-sort-alpha-asc" id="Vendors" order="asc" type="Text"></a></div>
                                        </th>
                                        <th id="ProposalVersion">
                                        <div>Proposal Version No<a href="#" className="fa fa-sort-alpha-asc" id="ProposalVersion" order="asc" type="Text"></a></div>
                                        </th>
                                        <th id="VendorProjectManager">
                                        <div>Vendor Project Manager<a href="#" className="fa fa-sort-alpha-asc" id="VendorProjectManager" order="asc" type="Text"></a></div>
                                        </th>
                                        <th id="RequestSubmittedRequirementsAppr">
                                        <div>Date Request Submitted for Requirements Approval<a href="#" className="fa fa-sort-alpha-asc" id="RequestSubmittedRequirementsAppr" order="asc" type="Date"></a></div>
                                        </th>
                                        <th id="TargetRequirementsApprovalDT">
                                        <div>Target Requirements Approval Date<a href="#" className="fa fa-sort-alpha-asc" id="TargetRequirementsApprovalDT" order="asc" type="Date"></a></div>
                                        </th>
                                        <th id="ProposalApprovedTargetDT">
                                        <div>Target Proposal Approval Date<a href="#" className="fa fa-sort-alpha-asc" id="ProposalApprovedTargetDT" order="asc" type="Date"></a></div>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr id="tr_242">
                                        <td data-title="Request ID">
                                        <div><a href="https://unilever.sharepoint.com/sites/QA_utopia/pages/ViewServiceRequest.aspx?ReqId=242">GDM00000242</a></div>
                                        </td>
                                        <td data-title="SR ID">
                                        <div></div>
                                        </td>
                                        <td data-title="Request Description">
                                        <div>dfdf</div>
                                        </td>
                                        <td data-title="Status">
                                        <div>Awaiting Requirements Review</div>
                                        </td>
                                        <td data-title="Requester">
                                        <div>Simon, Mary</div>
                                        </td>
                                        <td data-title="Request Title">
                                        <div>gg</div>
                                        </td>
                                        <td data-title="Region">
                                        <div>Global Requests</div>
                                        </td>
                                        <td data-title="Country">
                                        <div>EL SALVADOR</div>
                                        </td>
                                        <td data-title="SR Type">
                                        <div>AT1</div>
                                        </td>
                                        <td data-title="Vendor Name">
                                        <div>British Telecom (BT)</div>
                                        </td>
                                        <td data-title="Proposal Version No">
                                        <div></div>
                                        </td>
                                        <td data-title="Vendor Project Manager">
                                        <div></div>
                                        </td>
                                        <td data-title="Date Request Submitted for Requirements Approval">
                                        <div>06/10/2017</div>
                                        </td>
                                        <td data-title="Target Requirements Approval Date">
                                        <div>13/10/2017</div>
                                        </td>
                                        <td data-title="Target Proposal Approval Date">
                                        <div>12/12/2017</div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className="noRecord" style={{"display": "none"}}>No Records Found</div>
                            </div>
                        </div>
                    </div>
                </div>
                <Paging/>
                </section>
        );
    }
}
export default SolutionDesignteam;