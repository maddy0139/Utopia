import React from 'react';

class Requestor extends React.Component{

    render()
    {
        return(
            <section className="inputSection text-center">
                <div className="container" style={{"width": "1240px"}}>
                    <div className="row">
                        <div className="col-md-12">
                           <div id="no-more-tables" className="clsScroll" style={{"display": "block"}}>
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
                                                        <a href="#" className="fa fa-sort-alpha-asc" id="SRID" order="asc" type="Text"></a>
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
                                <tbody>
                                </tbody>
                            </table>
                            <div className="noRecord">No Records Found</div>
                            </div>
                            </div>
                    </div>
                </div>
                <div className="cspage text-right">
                    <ul className="pagination pagination-sm" style={{"marginRight":"58px","marginTop":"11px"}}>
                        <li id="idFirstPage" style={{"display": "none"}}><a href="#" className="fa fa-angle-double-left"></a></li>
                        <li id="idFirstPageTemp" className="disabled"><a href="#" className="fa fa-angle-double-left"></a></li>
                        <li id="idPriviousPage" style={{"margin-right": "4px","display": "none"}}><a href="#" className="fa fa-angle-left"></a></li>
                        <li id="idPriviousPageTemp" className="disabled" style={{"margin-right": "4px"}}><a href="#" className="fa fa-angle-left"></a></li>
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
                        <li className="pageNumber"><span>1 of  1</span></li>
                        <li id="idNextPage" style={{"margin-right": "4px"}}><a href="#" className="fa fa-angle-right"></a></li>
                        <li id="idNextPageTemp" className="disabled" style={{"margin-right": "4px","display":"none"}}><a href="#" className="fa fa-angle-right"></a></li>
                        <li id="idLastPage"><a href="#" className="fa fa-angle-double-right"></a></li>
                        <li id="idLastPageTemp" className="disabled" style={{"display": "none"}}><a href="#" className="fa fa-angle-double-right"></a></li>
                    </ul>
                </div>
                </section>
        );
    }
}

export default Requestor;