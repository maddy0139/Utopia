import React from 'react';

class SolutionDesignteam extends React.Component
{
    render()
    {
        return(
            <section class="inputSection text-center">
                <div class="container" style="width: 1326px;">
                    <div class="row">
                        <div class="col-md-12">
                            <div id="no-more-tables" class="clsScroll" style="display: none;">
                            <table class="csTable cf" id="RequestsTable" style="display:none;">
                                <thead class="cf">
                                </thead>
                                <tbody>
                                </tbody>
                            </table>
                            <div class="noRecord">No Records Found</div>
                            </div>
                            <div class="fixTableRq">
                            <table id="tblLayoutFix" class="csTable LayoutFix" style="">
                                <colgroup>
                                    <col span="1" class="tblCol1"/>
                                    <col span="8" class="tblCol2"/>
                                    <col span="3" class="tblCol3"/>
                                    <col span="1" class="tblCol4"/>
                                    <col span="1" class="tblCol5"/>
                                    <col span="1" class="tblCol6"/>
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
                                                <a href="#" class="fa fa-sort-alpha-desc" id="RequestID" order="dsc" type="Text"></a>
                                            </div>
                                        </th>
                                        <th id="SRID">
                                            <div>SR ID<a href="#" class="fa fa-sort-alpha-asc" id="SRID" order="asc" type="Text"></a></div>
                                        </th>
                                        <th id="ProjectDescription">
                                        <div>Request Description<a href="#" class="" id="ProjectDescription" order="undefined" type="Text"></a></div>
                                        </th>
                                        <th id="RequestStatus">
                                        <div>Status<a href="#" class="fa fa-sort-alpha-asc" id="RequestStatus" order="asc" type="Lookup"></a></div>
                                        </th>
                                        <th id="Requester">
                                        <div>Requester<a href="#" class="fa fa-sort-alpha-asc" id="Requester" order="asc" type="Lookup"></a></div>
                                        </th>
                                        <th id="ProjectName">
                                        <div>Request Title<a href="#" class="fa fa-sort-alpha-asc" id="ProjectName" order="asc" type="Text"></a></div>
                                        </th>
                                        <th id="Region">
                                        <div>Region<a href="#" class="fa fa-sort-alpha-desc" id="Region" order="dsc" type="Text"></a></div>
                                        </th>
                                        <th id="Countries">
                                        <div>Country<a href="#" class="fa fa-sort-alpha-asc" id="Countries" order="asc" type="Text"></a></div>
                                        </th>
                                        <th id="SRType">
                                        <div>SR Type<a href="#" class="fa fa-sort-alpha-asc" id="SRType" order="asc" type="Lookup"></a></div>
                                        </th>
                                        <th id="Vendors">
                                        <div>Vendor Name<a href="#" class="fa fa-sort-alpha-asc" id="Vendors" order="asc" type="Text"></a></div>
                                        </th>
                                        <th id="ProposalVersion">
                                        <div>Proposal Version No<a href="#" class="fa fa-sort-alpha-asc" id="ProposalVersion" order="asc" type="Text"></a></div>
                                        </th>
                                        <th id="VendorProjectManager">
                                        <div>Vendor Project Manager<a href="#" class="fa fa-sort-alpha-asc" id="VendorProjectManager" order="asc" type="Text"></a></div>
                                        </th>
                                        <th id="RequestSubmittedRequirementsAppr">
                                        <div>Date Request Submitted for Requirements Approval<a href="#" class="fa fa-sort-alpha-asc" id="RequestSubmittedRequirementsAppr" order="asc" type="Date"></a></div>
                                        </th>
                                        <th id="TargetRequirementsApprovalDT">
                                        <div>Target Requirements Approval Date<a href="#" class="fa fa-sort-alpha-asc" id="TargetRequirementsApprovalDT" order="asc" type="Date"></a></div>
                                        </th>
                                        <th id="ProposalApprovedTargetDT">
                                        <div>Target Proposal Approval Date<a href="#" class="fa fa-sort-alpha-asc" id="ProposalApprovedTargetDT" order="asc" type="Date"></a></div>
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
                            <div class="noRecord" style="display: none;">No Records Found</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="cspage text-right">
                    <ul class="pagination pagination-sm" style="margin-right:58px;margin-top:11px">
                        <li id="idFirstPage" style="display: none;"><a href="#" class="fa fa-angle-double-left"></a></li>
                        <li id="idFirstPageTemp" class="disabled"><a href="#" class="fa fa-angle-double-left"></a></li>
                        <li id="idPriviousPage" style="margin-right:4px;" style="display: none;"><a href="#" class="fa fa-angle-left"></a></li>
                        <li id="idPriviousPageTemp" class="disabled" style="margin-right: 4px;"><a href="#" class="fa fa-angle-left"></a></li>
                        <select id="idPages">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                        </select>
                        <li class="pageNumber"><span>1 of  2</span></li>
                        <li id="idNextPage" style="margin-left:4px;"><a href="#" class="fa fa-angle-right"></a></li>
                        <li id="idNextPageTemp" class="disabled" style="margin-left:4px;display:none"><a href="#" class="fa fa-angle-right"></a></li>
                        <li id="idLastPage"><a href="#" class="fa fa-angle-double-right"></a></li>
                        <li id="idLastPageTemp" class="disabled" style="display: none;"><a href="#" class="fa fa-angle-double-right"></a></li>
                    </ul>
                </div>
                </section>
        );
    }
}
export default SolutionDesignteam;