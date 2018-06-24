import React from 'react';

class ProcurementTeam extends React.Component{

    render()
    {
        return(
            <section class="inputSection text-center">
                <div class="container" style="width: 1326px;">
                    <div class="row">
                        <div class="col-md-12">
                            <div id="no-more-tables" class="clsScroll" style="display: block;">
                            <table class="csTable cf" id="RequestsTable" style="">
                                <thead class="cf">
                                    <tr>
                                        <th id="RequestID">
                                        <div>Request ID<a href="#" class="fa fa-sort-alpha-desc" id="RequestID" order="dsc" type="Text"></a></div>
                                        </th>
                                        <th id="SRID">
                                        <div>SR ID<a href="#" class="fa fa-sort-alpha-asc" id="SRID" order="asc" type="Text"></a></div>
                                        </th>
                                        <th id="ProjectName">
                                        <div>Request Title<a href="#" class="fa fa-sort-alpha-asc" id="ProjectName" order="asc" type="Text"></a></div>
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
                                        <th id="RequestCreatedDT">
                                        <div>Date Request Created<a href="#" class="fa fa-sort-alpha-desc" id="RequestCreatedDT" order="dsc" type="Date"></a></div>
                                        </th>
                                        <th id="ProposalApprovedTargetDT">
                                        <div>Target Proposal Approval Date<a href="#" class="fa fa-sort-alpha-asc" id="ProposalApprovedTargetDT" order="asc" type="Date"></a></div>
                                        </th>
                                        <th id="RequestStatus">
                                        <div>Status<a href="#" class="fa fa-sort-alpha-asc" id="RequestStatus" order="asc" type="Lookup"></a></div>
                                        </th>
                                        <th id="Created">
                                        <div>Age<a href="#" class="fa fa-sort-alpha-asc" id="Created" order="asc" type="TicketAge"></a></div>
                                        </th>
                                        <th id="ID">
                                        <div>Actions<a href="#" class="" id="ID" order="" type="Action"></a></div>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr id="tr_255">
                                        <td data-title="Request ID">
                                        <div><a href="https://unilever.sharepoint.com/sites/QA_utopia/pages/ViewServiceRequest.aspx?ReqId=255">GDM00000255</a></div>
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
                                        <div><a class="fa fa-copy clsCopyRequest" data-toggle="tooltip" title="" href="https://unilever.sharepoint.com/sites/QA_utopia/pages/AddServiceRequest.aspx?ReqId=255&amp;IsCopy=1" data-original-title="Copy Request"></a><a class="fa fa-edit clsEditRequest" data-toggle="tooltip" title="" href="https://unilever.sharepoint.com/sites/QA_utopia/pages/EditServiceRequest.aspx?ReqId=255&amp;Source=Dashboard" style="" data-original-title="Edit Request"></a><a class="fa fa-trash-o clsDeleteRequest" href="#" data-toggle="tooltip" title="" onclick="ShowDeleteRequestModel(255,this)" data-original-title="Delete Request"></a></div>
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
                        <li class="pageNumber"><span>1 of  1</span></li>
                        <li id="idNextPage" style="margin-left: 4px; display: none;"><a href="#" class="fa fa-angle-right"></a></li>
                        <li id="idNextPageTemp" class="disabled" style="margin-left: 4px;"><a href="#" class="fa fa-angle-right"></a></li>
                        <li id="idLastPage" style="display: none;"><a href="#" class="fa fa-angle-double-right"></a></li>
                        <li id="idLastPageTemp" class="disabled" style="display: inline;"><a href="#" class="fa fa-angle-double-right"></a></li>
                    </ul>
                </div>
                </section>
        );
    }
}

export default ProcurementTeam;