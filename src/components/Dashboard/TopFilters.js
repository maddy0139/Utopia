import React from 'react';

class TopFilters extends React.Component {
    render() {
        return(
            <section className="topPedd">
                <div className="container" style={{"width": "1240px"}}>
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
                                        <option>Country</option>
                                        <option value="ALGERIA">ALGERIA</option>
                                        <option value="ARGENTINA">ARGENTINA</option>
                                        <option value="AUSTRALIA">AUSTRALIA</option>
                                        <option value="AUSTRIA">AUSTRIA</option>
                                        <option value="AZERBAIJAN">AZERBAIJAN</option>
                                        <option value="BAHRAIN">BAHRAIN</option>
                                        <option value="BANGLADESH">BANGLADESH</option>
                                        <option value="BELARUS">BELARUS</option>
                                        <option value="BELGIUM">BELGIUM</option>
                                        <option value="BENIN">BENIN</option>
                                        <option value="BOLIVIA">BOLIVIA</option>
                                        <option value="BOSNIA AND HERZEGOVINA">BOSNIA AND HERZEGOVINA</option>
                                        <option value="BRAZIL">BRAZIL</option>
                                        <option value="BULGARIA">BULGARIA</option>
                                        <option value="BURKINA FASO">BURKINA FASO</option>
                                        <option value="CAMBODIA">CAMBODIA</option>
                                        <option value="CAMEROON">CAMEROON</option>
                                        <option value="CANADA">CANADA</option>
                                        <option value="CHILE">CHILE</option>
                                        <option value="CHINA">CHINA</option>
                                        <option value="COLOMBIA">COLOMBIA</option>
                                        <option value="CONGO, THE DEMOCRATIC REPUBLIC">CONGO, THE DEMOCRATIC REPUBLIC</option>
                                        <option value="COSTA RICA">COSTA RICA</option>
                                        <option value="CÔTE D'IVOIRE">CÔTE D'IVOIRE</option>
                                        <option value="CROATIA">CROATIA</option>
                                        <option value="CUBA">CUBA</option>
                                        <option value="CYPRUS">CYPRUS</option>
                                        <option value="CZECH REPUBLIC">CZECH REPUBLIC</option>
                                        <option value="DENMARK">DENMARK</option>
                                        <option value="DOMINICAN REPUBLIC">DOMINICAN REPUBLIC</option>
                                        <option value="ECUADOR">ECUADOR</option>
                                        <option value="EGYPT">EGYPT</option>
                                        <option value="EL SALVADOR">EL SALVADOR</option>
                                        <option value="ESTONIA">ESTONIA</option>
                                        <option value="ETHIOPIA">ETHIOPIA</option>
                                        <option value="FINLAND">FINLAND</option>
                                        <option value="FRANCE">FRANCE</option>
                                        <option value="GERMANY">GERMANY</option>
                                        <option value="GHANA">GHANA</option>
                                        <option value="GREECE">GREECE</option>
                                        <option value="GUATEMALA">GUATEMALA</option>
                                        <option value="HONDURAS">HONDURAS</option>
                                        <option value="HONG KONG">HONG KONG</option>
                                        <option value="HUNGARY">HUNGARY</option>
                                        <option value="INDIA">INDIA</option>
                                        <option value="INDONESIA">INDONESIA</option>
                                        <option value="IRAN">IRAN</option>
                                        <option value="IRELAND">IRELAND</option>
                                        <option value="ISRAEL">ISRAEL</option>
                                        <option value="ITALY">ITALY</option>
                                        <option value="JAMAICA">JAMAICA</option>
                                        <option value="JAPAN">JAPAN</option>
                                        <option value="JORDAN">JORDAN</option>
                                        <option value="KAZAKHSTAN">KAZAKHSTAN</option>
                                        <option value="KENYA">KENYA</option>
                                        <option value="KOREA, REPUBLIC OF">KOREA, REPUBLIC OF</option>
                                        <option value="KUWAIT">KUWAIT</option>
                                        <option value="LAO">LAO</option>
                                        <option value="LATVIA">LATVIA</option>
                                        <option value="LEBANON">LEBANON</option>
                                        <option value="LITHUANIA">LITHUANIA</option>
                                        <option value="MALAWI">MALAWI</option>
                                        <option value="MALAYSIA">MALAYSIA</option>
                                        <option value="MALI">MALI</option>
                                        <option value="MEXICO">MEXICO</option>
                                        <option value="MOROCCO">MOROCCO</option>
                                        <option value="MOZAMBIQUE">MOZAMBIQUE</option>
                                        <option value="MYANMAR">MYANMAR</option>
                                        <option value="NEPAL">NEPAL</option>
                                        <option value="NETHERLANDS">NETHERLANDS</option>
                                        <option value="NEW ZEALAND">NEW ZEALAND</option>
                                        <option value="NICARAGUA">NICARAGUA</option>
                                        <option value="NIGER">NIGER</option>
                                        <option value="NIGERIA">NIGERIA</option>
                                        <option value="NORWAY">NORWAY</option>
                                        <option value="OMAN">OMAN</option>
                                        <option value="PAKISTAN">PAKISTAN</option>
                                        <option value="PALESTINE">PALESTINE</option>
                                        <option value="PANAMA">PANAMA</option>
                                        <option value="PARAGUAY">PARAGUAY</option>
                                        <option value="PERU">PERU</option>
                                        <option value="PHILIPPINES">PHILIPPINES</option>
                                        <option value="POLAND">POLAND</option>
                                        <option value="PORTUGAL">PORTUGAL</option>
                                        <option value="PUERTO RICO">PUERTO RICO</option>
                                        <option value="QATAR">QATAR</option><option value="ROMANIA">ROMANIA</option>
                                        <option value="RUSSIAN FEDERATION">RUSSIAN FEDERATION</option>
                                        <option value="RWANDA">RWANDA</option>
                                        <option value="SAUDI ARABIA">SAUDI ARABIA</option>
                                        <option value="SENEGAL">SENEGAL</option>
                                        <option value="SERBIA">SERBIA</option>
                                        <option value="SINGAPORE">SINGAPORE</option>
                                        <option value="SLOVAKIA">SLOVAKIA</option>
                                        <option value="SLOVENIA">SLOVENIA</option>
                                        <option value="SOUTH AFRICA">SOUTH AFRICA</option>
                                        <option value="SPAIN">SPAIN</option>
                                        <option value="SRI LANKA">SRI LANKA</option>
                                        <option value="SWEDEN">SWEDEN</option>
                                        <option value="SWITZERLAND">SWITZERLAND</option>
                                        <option value="SYRIA">SYRIA</option>
                                        <option value="TAIWAN, PROVINCE OF CHINA">TAIWAN, PROVINCE OF CHINA</option>
                                        <option value="TANZANIA, UNITED REPUBLIC OF">TANZANIA, UNITED REPUBLIC OF</option>
                                        <option value="THAILAND">THAILAND</option>
                                        <option value="TOGO">TOGO</option>
                                        <option value="TRINIDAD AND TOBAGO">TRINIDAD AND TOBAGO</option>
                                        <option value="TUNISIA">TUNISIA</option>
                                        <option value="TURKEY">TURKEY</option>
                                        <option value="UGANDA">UGANDA</option>
                                        <option value="UKRAINE">UKRAINE</option>
                                        <option value="UNITED ARAB EMIRATES">UNITED ARAB EMIRATES</option>
                                        <option value="UNITED KINGDOM">UNITED KINGDOM</option>
                                        <option value="UNITED STATES">UNITED STATES</option>
                                        <option value="URUGUAY">URUGUAY</option>
                                        <option value="VENEZUELA">VENEZUELA</option>
                                        <option value="VIETNAM">VIETNAM</option>
                                        <option value="YEMEN">YEMEN</option>
                                        <option value="ZAMBIA">ZAMBIA</option>
                                        <option value="ZIMBABWE">ZIMBABWE</option>
                                    </select>
                                </div>
                                <div className="customSelect mgb5">
                                    <select id="idStatusFilter">
                                        {this.props.allStatusType.map((item,key) =>{
                                            return <option key={key} value={item.ID}>{item.StatusName}</option>;
                                            },this)
                                        }
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