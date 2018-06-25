import React from 'react';
import Paging from './Paging';

class Requestor extends React.Component{

    render()
    {
        return(
            <section className="inputSection text-center">
                <div className="container" style={{ "width": "1240px"}}>
                    <div className="row">
                        <div className="col-md-12">
                            <div id="no-more-tables" className="clsScroll" style={{ "display": "none"}}>
                                <table className="csTable cf" id="RequestsTable">
                                    <thead className="cf">
                                        <tr>
                                            <th id="RequestID">
                                                <div>Request ID
                                                    <a href="#" className="fa fa-sort-alpha-desc" id="RequestID" order="dsc" type="Text"></a>
                                                </div>
                                            </th>
                                            <th id="SRID">
                                                <div>SR ID
                                                    <a href="#" className="fa fa-sort-alpha-asc" id="SRID" order="asc" type="Text">
                                                    </a>
                                                </div>
                                            </th>
                                            <th id="ProjectName">
                                                <div>Request Title
                                                    <a href="#" className="fa fa-sort-alpha-asc" id="ProjectName" order="asc" type="Text"></a>
                                                </div>
                                            </th>
                                            <th id="Countries">
                                                <div>Country
                                                    <a href="#" className="fa fa-sort-alpha-asc" id="Countries" order="asc" type="Text"></a>
                                                </div>
                                            </th>
                                            <th id="SRType">
                                                <div>SR Type
                                                    <a href="#" className="fa fa-sort-alpha-asc" id="SRType" order="asc" type="Lookup"></a>
                                                </div>
                                            </th>
                                            <th id="Vendors">
                                                <div>Vendor Name
                                                    <a href="#" className="fa fa-sort-alpha-asc" id="Vendors" order="asc" type="Text"></a>
                                                </div>
                                            </th>
                                            <th id="RequestCreatedDT">
                                                <div>Date Request Created
                                                    <a href="#" className="fa fa-sort-alpha-desc" id="RequestCreatedDT" order="dsc" type="Date"></a>
                                                </div>
                                            </th>
                                            <th id="ProposalApprovedTargetDT">
                                                <div>Target Proposal Approval Date
                                                    <a href="#" className="fa fa-sort-alpha-asc" id="ProposalApprovedTargetDT" order="asc" type="Date"></a>
                                                </div>
                                            </th>
                                            <th id="RequestStatus">
                                                <div>Status
                                                    <a href="#" className="fa fa-sort-alpha-asc" id="RequestStatus" order="asc" type="Lookup"></a>
                                                </div>
                                            </th>
                                            <th id="Created">
                                                <div>Age
                                                    <a href="#" className="fa fa-sort-alpha-asc" id="Created" order="asc" type="TicketAge"></a>
                                                </div>
                                            </th>
                                            <th id="ID">
                                                <div>Actions
                                                    <a href="#" className="" id="ID" order="" type="Action"></a>
                                                </div>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody></tbody>
                                </table>
                                <div className="noRecord" style={{ "display": "block"}}>No Records Found</div>
                            </div>
                            <div className="fixTableRq" style={{ "display": "block"}}>
                                <table id="tblLayoutFix" className="csTable LayoutFix">
                                    <colgroup>
                                        <col span="1" className="tblCol1" />
                                        <col span="17" className="tblCol2" />
                                        <col span="3" className="tblCol3" />
                                        <col span="5" className="tblCol4" />
                                        <col span="6" className="tblCol5" />
                                        <col span="4" className="tblCol6" />
                                        <col span="4" className="tblCol7" />
                                        <col span="3" className="tblCol8" />
                                        <col span="4" className="tblCol9" />
                                        <col span="3" className="tblCol10" />
                                        <col span="1" className="tblCol11" />
                                        <col span="0" className="tblCol12" />
                                        <col span="1" className="tblCol1" />
                                        <col span="17" className="tblCol2" />
                                        <col span="3" className="tblCol3" />
                                        <col span="5" className="tblCol4" />
                                        <col span="6" className="tblCol5" />
                                        <col span="4" className="tblCol6" />
                                        <col span="4" className="tblCol7" />
                                        <col span="3" className="tblCol8" />
                                        <col span="4" className="tblCol9" />
                                        <col span="3" className="tblCol10" />
                                        <col span="1" className="tblCol11" />
                                        <col span="0" className="tblCol12" />
                                    </colgroup>
                                    <thead>
                                        <tr>
                                            <th colspan="1">Basic Info</th>
                                            <th colspan="17">SR Details</th>
                                            <th colspan="3">Vendor</th>
                                            <th colspan="5">General Dates</th>
                                            <th colspan="6">Financials</th>
                                            <th colspan="4">Requirements Validation</th>
                                            <th colspan="4">Proposal Creation</th>
                                            <th colspan="3">Proposal Approval</th>
                                            <th colspan="4">DO Creation</th>
                                            <th colspan="3">Delivery</th>
                                            <th colspan="1">Comments</th>
                                            <th colspan="0">Actions</th>
                                        </tr>
                                        <tr>
                                            <th id="RequestID">
                                                <div>Request ID
                                                    <a href="#" className="fa fa-sort-alpha-desc" id="RequestID" order="dsc" type="Text"></a>
                                                </div>
                                            </th>
                                            <th id="SRID">
                                                <div>SR ID
                                                    <a href="#" className="fa fa-sort-alpha-asc" id="SRID" order="asc" type="Text"></a>
                                                </div>
                                            </th>
                                            <th id="ProjectName">
                                                <div>Request Title
                                                    <a href="#" className="fa fa-sort-alpha-asc" id="ProjectName" order="asc"
                                                        type="Text"></a>
                                                </div>
                                            </th>
                                            <th id="ClarityID">
                                                <div>Clarity ID
                                                    <a href="#" className="fa fa-sort-alpha-asc" id="ClarityID" order="asc" type="Text"></a>
                                                </div>
                                            </th>
                                            <th id="ParentChild">
                                                <div>Is this a Child SR?
                                                    <a href="#" className="fa fa-sort-alpha-asc" id="ParentChild" order="asc"
                                                        type="Text"></a>
                                                </div>
                                            </th>
                                            <th id="ParentSR">
                                                <div>Parent SR No
                                                    <a href="#" className="fa fa-sort-alpha-asc" id="ParentSR" order="asc" type="Text"></a>
                                                </div>
                                            </th>
                                            <th id="ProjectDescription">
                                                <div>Request Description
                                                    <a href="#" className="" id="ProjectDescription" order="undefined"
                                                        type="Text"></a>
                                                </div>
                                            </th>
                                            <th id="RequestStatus">
                                                <div>Status
                                                    <a href="#" className="fa fa-sort-alpha-asc" id="RequestStatus" order="asc" type="Lookup"></a>
                                                </div>
                                            </th>
                                            <th id="IsPriority">
                                                <div>Expedite?
                                                    <a href="#" className="fa fa-sort-alpha-asc" id="IsPriority" order="asc" type="Text"></a>
                                                </div>
                                            </th>
                                            <th id="Created">
                                                <div>Age
                                                    <a href="#" className="fa fa-sort-alpha-asc" id="Created" order="asc" type="TicketAge"></a>
                                                </div>
                                            </th>
                                            <th id="Requester">
                                                <div>Requester
                                                    <a href="#" className="fa fa-sort-alpha-asc" id="Requester" order="asc" type="Lookup"></a>
                                                </div>
                                            </th>
                                            <th id="RequesterContact">
                                                <div>Requester Contact Details
                                                    <a href="#" className="fa fa-sort-alpha-asc" id="RequesterContact"
                                                        order="asc" type="Text"></a>
                                                </div>
                                            </th>
                                            <th id="Region">
                                                <div>Region
                                                    <a href="#" className="fa fa-sort-alpha-desc" id="Region" order="dsc" type="Text"></a>
                                                </div>
                                            </th>
                                            <th id="MCO">
                                                <div>MCO
                                                    <a href="#" className="fa fa-sort-alpha-asc" id="MCO" order="asc" type="Text"></a>
                                                </div>
                                            </th>
                                            <th id="Countries">
                                                <div>Country
                                                    <a href="#" className="fa fa-sort-alpha-asc" id="Countries" order="asc" type="Text"></a>
                                                </div>
                                            </th>
                                            <th id="SiteName">
                                                <div>Site Name
                                                    <a href="#" className="fa fa-sort-alpha-asc" id="SiteName" order="asc" type="Text"></a>
                                                </div>
                                            </th>
                                            <th id="SRType">
                                                <div>SR Type
                                                    <a href="#" className="fa fa-sort-alpha-asc" id="SRType" order="asc" type="Lookup"></a>
                                                </div>
                                            </th>
                                            <th id="AttachedDocuments">
                                                <div>Attached Documents
                                                    <a href="#" className="" id="AttachedDocuments" order="undefined" type="Text"></a>
                                                </div>
                                            </th>
                                            <th id="Vendors">
                                                <div>Vendor Name
                                                    <a href="#" className="fa fa-sort-alpha-asc" id="Vendors" order="asc" type="Text"></a>
                                                </div>
                                            </th>
                                            <th id="ProposalVersion">
                                                <div>Proposal Version No
                                                    <a href="#" className="fa fa-sort-alpha-asc" id="ProposalVersion"
                                                        order="asc" type="Text"></a>
                                                </div>
                                            </th>
                                            <th id="VendorProjectManager">
                                                <div>Vendor Project Manager
                                                    <a href="#" className="fa fa-sort-alpha-asc" id="VendorProjectManager"
                                                        order="asc" type="Text"></a>
                                                </div>
                                            </th>
                                            <th id="ProposalRequiredDT">
                                                <div>Proposal Required by Date
                                                    <a href="#" className="fa fa-sort-alpha-asc" id="ProposalRequiredDT"
                                                        order="asc" type="Date"></a>
                                                </div>
                                            </th>
                                            <th id="RequestedDeliveryDT">
                                                <div>Requested Delivery Date by
                                                    <a href="#" className="fa fa-sort-alpha-asc" id="RequestedDeliveryDT"
                                                        order="asc" type="Date"></a>
                                                </div>
                                            </th>
                                            <th id="RequestSubmittedRequirementsAppr">
                                                <div>Date Request Submitted for Requirements Approval
                                                    <a href="#" className="fa fa-sort-alpha-asc"
                                                        id="RequestSubmittedRequirementsAppr" order="asc" type="Date"></a>
                                                </div>
                                            </th>
                                            <th id="RequestClosedDT">
                                                <div>Date Request Closed
                                                    <a href="#" className="fa fa-sort-alpha-asc" id="RequestClosedDT"
                                                        order="asc" type="Date"></a>
                                                </div>
                                            </th>
                                            <th id="RequestCancelledDT">
                                                <div>Date Request Cancelled
                                                    <a href="#" className="fa fa-sort-alpha-asc" id="RequestCancelledDT"
                                                        order="asc" type="Date"></a>
                                                </div>
                                            </th>
                                            <th id="CostCenter">
                                                <div>Cost Center
                                                    <a href="#" className="fa fa-sort-alpha-asc" id="CostCenter" order="asc" type="Text"></a>
                                                </div>
                                            </th>
                                            <th id="CurrencyTypeLocal">
                                                <div>Currency
                                                    <a href="#" className="fa fa-sort-alpha-asc" id="CurrencyTypeLocal" order="asc"
                                                        type="Text"></a>
                                                </div>
                                            </th>
                                            <th id="MRC">
                                                <div>Monthly Recurring Cost (MRC)
                                                    <a href="#" className="fa fa-sort-alpha-asc" id="MRC" order="asc"
                                                        type="Text"></a>
                                                </div>
                                            </th>
                                            <th id="OTC">
                                                <div>One Time Cost (OTC) Euros
                                                    <a href="#" className="fa fa-sort-alpha-asc" id="OTC" order="asc"
                                                        type="Text"></a>
                                                </div>
                                            </th>
                                            <th id="TotalCostOTCLocal">
                                                <div>Total Cost (local currency)
                                                    <a href="#" className="fa fa-sort-alpha-asc" id="TotalCostOTCLocal"
                                                        order="asc" type="Text"></a>
                                                </div>
                                            </th>
                                            <th id="TotalCostOTCEuros">
                                                <div>Total Cost (Euros)
                                                    <a href="#" className="fa fa-sort-alpha-asc" id="TotalCostOTCEuros"
                                                        order="asc" type="Text"></a>
                                                </div>
                                            </th>
                                            <th id="RequestSubmittedRequirementsAppr">
                                                <div>Date Request Submitted for Requirements Approval
                                                    <a href="#" className="fa fa-sort-alpha-asc"
                                                        id="RequestSubmittedRequirementsAppr" order="asc" type="Date"></a>
                                                </div>
                                            </th>
                                            <th id="TargetRequirementsApprovalDT">
                                                <div>Target Requirements Approval Date
                                                    <a href="#" className="fa fa-sort-alpha-asc" id="TargetRequirementsApprovalDT"
                                                        order="asc" type="Date"></a>
                                                </div>
                                            </th>
                                            <th id="RequirementsApprovedDT">
                                                <div>Date Requirements Approved
                                                    <a href="#" className="fa fa-sort-alpha-asc" id="RequirementsApprovedDT"
                                                        order="asc" type="Date"></a>
                                                </div>
                                            </th>
                                            <th id="RequirementsValidationRAG">
                                                <div>Requirements Approval RAG
                                                    <a href="#" className="" id="RequirementsValidationRAG" order="undefined"
                                                        type="RAG"></a>
                                                </div>
                                            </th>
                                            <th id="ProposalCreationSubmittedDT">
                                                <div>Date Request Submitted for Proposal Creation
                                                    <a href="#" className="fa fa-sort-alpha-asc"
                                                        id="ProposalCreationSubmittedDT" order="asc" type="Date"></a>
                                                </div>
                                            </th>
                                            <th id="TargetProposalCreationDT">
                                                <div>Target Proposal Creation Date
                                                    <a href="#" className="fa fa-sort-alpha-asc" id="TargetProposalCreationDT"
                                                        order="asc" type="Date"></a>
                                                </div>
                                            </th>
                                            <th id="ProposalCreatedDT">
                                                <div>Date Proposal Created
                                                    <a href="#" className="fa fa-sort-alpha-asc" id="ProposalCreatedDT"
                                                        order="asc" type="Date"></a>
                                                </div>
                                            </th>
                                            <th id="ProposalCreationRAG">
                                                <div>Proposal Creation RAG
                                                    <a href="#" className="" id="ProposalCreationRAG" order="undefined"
                                                        type="RAG"></a>
                                                </div>
                                            </th>
                                            <th id="ProposalApprovedTargetDT">
                                                <div>Target Proposal Approval Date
                                                    <a href="#" className="fa fa-sort-alpha-asc" id="ProposalApprovedTargetDT"
                                                        order="asc" type="Date"></a>
                                                </div>
                                            </th>
                                            <th id="ProposalApprovedDT">
                                                <div>Date Proposal Approved
                                                    <a href="#" className="fa fa-sort-alpha-asc" id="ProposalApprovedDT"
                                                        order="asc" type="Date"></a>
                                                </div>
                                            </th>
                                            <th id="ProposalApprovalRAG">
                                                <div>Proposal Approval RAG
                                                    <a href="#" className="" id="ProposalApprovalRAG" order="undefined"
                                                        type="RAG"></a>
                                                </div>
                                            </th>
                                            <th id="DORequestedDT">
                                                <div>Date DO requested
                                                    <a href="#" className="fa fa-sort-alpha-asc" id="DORequestedDT" order="asc"
                                                        type="Date"></a>
                                                </div>
                                            </th>
                                            <th id="TargetDOCreationDT">
                                                <div>Target DO Creation
                                                    <a href="#" className="fa fa-sort-alpha-asc" id="TargetDOCreationDT"
                                                        order="asc" type="Date"></a>
                                                </div>
                                            </th>
                                            <th id="DOReceivedDT">
                                                <div>Date DO received
                                                    <a href="#" className="fa fa-sort-alpha-asc" id="DOReceivedDT" order="asc"
                                                        type="Date"></a>
                                                </div>
                                            </th>
                                            <th id="DOCreationRAGDT">
                                                <div>DO Creation RAG
                                                    <a href="#" className="" id="DOCreationRAGDT" order="undefined" type="RAG"></a>
                                                </div>
                                            </th>
                                            <th id="AgreedDeliveryDT">
                                                <div>Agreed Delivery Date (ADD)
                                                    <a href="#" className="fa fa-sort-alpha-asc" id="AgreedDeliveryDT"
                                                        order="asc" type="Date"></a>
                                                </div>
                                            </th>
                                            <th id="TargetProjectDeliveryDT">
                                                <div>Target Project Delivery Date
                                                    <a href="#" className="fa fa-sort-alpha-asc" id="TargetProjectDeliveryDT"
                                                        order="asc" type="Date"></a>
                                                </div>
                                            </th>
                                            <th id="ActualProjectDeliveryDT">
                                                <div>Actual Project Delivery Date
                                                    <a href="#" className="fa fa-sort-alpha-asc" id="ActualProjectDeliveryDT"
                                                        order="asc" type="Date"></a>
                                                </div>
                                            </th>
                                            <th id="_Comments">
                                                <div>Comments
                                                    <a href="#" className="" id="_Comments" order="undefined" type="Comments"></a>
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
                                        <tr id="tr_256">
                                            <td data-title="Request ID">
                                                <div>
                                                    <a href="https://unilever.sharepoint.com/sites/QA_utopia/pages/ViewServiceRequest.aspx?ReqId=256">GDM00000256</a>
                                                </div>
                                            </td>
                                            <td data-title="SR ID">
                                                <div></div>
                                            </td>
                                            <td data-title="Request Title">
                                                <div>Si Hughes Test 8th Feb 2018</div>
                                            </td>
                                            <td data-title="Clarity ID">
                                                <div></div>
                                            </td>
                                            <td data-title="Is this a Child SR?">
                                                <div>No</div>
                                            </td>
                                            <td data-title="Parent SR No">
                                                <div></div>
                                            </td>
                                            <td data-title="Request Description">
                                                <div>test</div>
                                            </td>
                                            <td data-title="Status">
                                                <div>In Proposal Creation</div>
                                            </td>
                                            <td data-title="Expedite?">
                                                <div>No</div>
                                            </td>
                                            <td data-title="Age">
                                                <div>134</div>
                                            </td>
                                            <td data-title="Requester">
                                                <div>Hughes, Simon</div>
                                            </td>
                                            <td data-title="Requester Contact Details">
                                                <div>+44 07342 065719</div>
                                            </td>
                                            <td data-title="Region">
                                                <div>EUROPE</div>
                                            </td>
                                            <td data-title="MCO">
                                                <div>UK and Ireland</div>
                                            </td>
                                            <td data-title="Country">
                                                <div></div>
                                            </td>
                                            <td data-title="Site Name">
                                                <div>NEW PORT SUNLIGHT TEST</div>
                                            </td>
                                            <td data-title="SR Type">
                                                <div>AT0</div>
                                            </td>
                                            <td data-title="Attached Documents">
                                                <div>
                                                    <i className="fa fa-file disabled" aria-hidden="true"></i>
                                                </div>
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
                                            <td data-title="Proposal Required by Date">
                                                <div></div>
                                            </td>
                                            <td data-title="Requested Delivery Date by">
                                                <div></div>
                                            </td>
                                            <td data-title="Date Request Submitted for Requirements Approval">
                                                <div>08/02/2018</div>
                                            </td>
                                            <td data-title="Date Request Closed">
                                                <div></div>
                                            </td>
                                            <td data-title="Date Request Cancelled">
                                                <div></div>
                                            </td>
                                            <td data-title="Cost Center">
                                                <div>123456</div>
                                            </td>
                                            <td data-title="Currency">
                                                <div></div>
                                            </td>
                                            <td data-title="Monthly Recurring Cost (MRC)">
                                                <div></div>
                                            </td>
                                            <td data-title="One Time Cost (OTC) Euros">
                                                <div></div>
                                            </td>
                                            <td data-title="Total Cost (local currency)">
                                                <div></div>
                                            </td>
                                            <td data-title="Total Cost (Euros)">
                                                <div></div>
                                            </td>
                                            <td data-title="Date Request Submitted for Requirements Approval">
                                                <div>08/02/2018</div>
                                            </td>
                                            <td data-title="Target Requirements Approval Date">
                                                <div>15/02/2018</div>
                                            </td>
                                            <td data-title="Date Requirements Approved">
                                                <div></div>
                                            </td>
                                            <td data-title="Requirements Approval RAG">
                                                <i className="csRed fa fa-circle" aria-hidden="true"></i>
                                            </td>
                                            <td data-title="Date Request Submitted for Proposal Creation">
                                                <div>08/06/2018</div>
                                            </td>
                                            <td data-title="Target Proposal Creation Date">
                                                <div>N/A</div>
                                            </td>
                                            <td data-title="Date Proposal Created">
                                                <div>14/06/2018</div>
                                            </td>
                                            <td data-title="Proposal Creation RAG"></td>
                                            <td data-title="Target Proposal Approval Date">
                                                <div></div>
                                            </td>
                                            <td data-title="Date Proposal Approved">
                                                <div>14/06/2018</div>
                                            </td>
                                            <td data-title="Proposal Approval RAG"></td>
                                            <td data-title="Date DO requested">
                                                <div></div>
                                            </td>
                                            <td data-title="Target DO Creation">
                                                <div></div>
                                            </td>
                                            <td data-title="Date DO received">
                                                <div></div>
                                            </td>
                                            <td data-title="DO Creation RAG"></td>
                                            <td data-title="Agreed Delivery Date (ADD)">
                                                <div></div>
                                            </td>
                                            <td data-title="Target Project Delivery Date ">
                                                <div></div>
                                            </td>
                                            <td data-title="Actual Project Delivery Date">
                                                <div></div>
                                            </td>
                                            <td data-title="Comments">
                                                <div>
                                                    <a reqid="GDM00000256" comments="[{&quot;Status&quot;:&quot;In Proposal Creation&quot;,&quot;Text&quot;:&quot;&quot;,&quot;Attachments&quot;:&quot;&quot;,&quot;FileNames&quot;:&quot;&quot;,&quot;PostedDateTime&quot;:&quot;08/06/2018 08:41 PM&quot;,&quot;PostedBy&quot;:&quot;Patil, Prajakta&quot;,&quot;ProcurementClarification&quot;:&quot;&quot;,&quot;CSATReason&quot;:&quot;&quot;}]" onclick="ShowComment(this)" href="#">
                                                        <i className="fa fa-comments" aria-hidden="true"></i>
                                                    </a>
                                                </div>
                                            </td>
                                            <td>
                                                <div>
                                                    <a className="fa fa-copy clsCopyRequest" data-toggle="tooltip" title="" href="https://unilever.sharepoint.com/sites/QA_utopia/pages/AddServiceRequest.aspx?ReqId=256&amp;IsCopy=1" data-original-title="Copy Request"></a>
                                                    <a className="fa fa-edit clsEditRequest" data-toggle="tooltip" title="" href="https://unilever.sharepoint.com/sites/QA_utopia/pages/EditServiceRequest.aspx?ReqId=256&amp;Source=Dashboard" style={{ "display": "inlineBlock"}} data-original-title="Edit Request"></a>
                                                    <a className="fa fa-trash-o clsDeleteRequest" href="#" data-toggle="tooltip" title="" onclick="ShowDeleteRequestModel(256,this)" style={{ "display": "none"}} data-original-title="Delete Request"></a>
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

export default Requestor;