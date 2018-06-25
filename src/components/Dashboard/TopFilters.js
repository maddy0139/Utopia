import React from 'react';

class TopFilters extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {

        };
    }
    render() {
        return (
            <section className="topPedd">
                <div className="container" style={{ "width": "1240px" }}>
                    <div className="row">
                        <div className="col-md-6 col-sm-12 actionBtn">
                            <a href="#" id="idMyRequests" className="btn btn-tool mg5 mgb5 hvr-underline-from-left active">
                                My Requests
                            </a>
                            <a href="#" id="idDashBoard" className="btn btn-tool mg5 mgb5 hvr-underline-from-left">
                                All Requests
                            </a>
                            <a href="#" id="idMyDrafts" className="btn btn-tool mg5 mgb5 hvr-underline-from-left clsDraftRequest" data-toggle="tooltip" title="" data-original-title="Drafts will be automatically deleted after 30 days of inactivity.">
                                My Drafts
                            </a>
                            <a href="https://unilever.sharepoint.com/sites/QA_utopia/pages/Reports.aspx" id="idReports" className="btn btn-tool mg5 mgb5 hvr-underline-from-left clsReportRequest">
                                Reports
                            </a>
                            <a href="https://unilever.sharepoint.com/sites/QA_utopia/pages/AddServiceRequest.aspx" id="idAddRequest" className="btn btn-tool mg5 mgb5 hvr-underline-from-left clsAddRequest">
                                Add New Request
                            </a>
                            <a href="#" id="idGetDocuments" className="btn btn-tool mg5 mgb5 hvr-underline-from-left clsGetDocuments">
                                Document Templates
                            </a>
                            <span className="note"></span>
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <div className="dlPostion">
                                <div className="form-group btn-search">
                                    <a href="#" className=" fa fa-search" id="btnRequestIdSearch"></a>
                                    <input type="text" className="form-control" placeholder="Request/SR ID" id="idRequestIdSearch" />
                                </div>
                                <div className="customSelect mg5 mgb5">
                                    <select id="idRoles">
                                        <option value="">Roles</option>
                                        <option value="Super User">Super User</option>
                                        <option value="Requester">Requester</option>
                                        <option value="GDMT Vendor">GDMT Vendor</option>
                                        <option value="Solutions Design Team">Solutions Design Team</option>
                                        <option value="Procurement Team">Procurement Team</option>
                                    </select>
                                </div>
                                <div className="customSelect mg5 mgb5">
                                    <select id="idRegionFilter">
                                        <option>All Regions</option>
                                        <option value="1">All</option>
                                        <option value="2">Global Requests</option>
                                        <option value="3">ASIA-AMET</option>
                                        <option value="4">EUROPE</option>
                                        <option value="5">LATAM</option>
                                        <option value="6">NORTH AMERICA</option>
                                    </select>
                                </div>
                                <div className="customSelect mg5 mgb5">
                                    <select id="idCountry">
                                        {this.props.countries.map((item, key) => {
                                            return <option key={key} value={item.Title}>{item.Title}</option>;
                                        }, this)}
                                    </select>
                                </div>
                                <div className="customSelect mgb5">
                                    <select id="idStatusFilter">
                                        {this.props.allStatusType.map((item, key) => {
                                            return <option key={key} value={item.Id}>{item.StatusName}</option>;
                                        }, this)}
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
export default TopFilters;