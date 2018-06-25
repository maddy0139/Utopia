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
                            <div id="no-more-tables" className="clsScroll" style={{ "display": "block"}}>
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
                <Paging/>
            </section>
        );
    }
}

export default Requestor;