import React from 'react';
import Header from './Header';
import Footer from './Footer';

class Request extends React.Component
{
    render()
    {
        return(
            <div className="layout">
            <div className="content">
                <section className="csForm">
                    <div className="container sf-sky" style={{"width": "1240px"}}>
                        <div className="sf-wizard" id="wizard-box">
                            <div id="wizard" action="" className="sf-nav-on-top">
                                <Header module={"Request"}/>
                                <div className="sf-viewport">
                                    <div className="sf-fieldwrap clearfix" style={{"width": "4880px", "marginLeft": "0px"}}>
                                    <div className="sf-step sf-step-0 sf-step-active" style={{ "width": "1210px", "float": "left", "marginRight": "10px"}}>
                                        <fieldset style={{ "height": "460px"}}>
                                        <div className="row">
                                            <div className="col-md-3 col-sm-12">
                                                <div className="form-group">
                                                    <label>Request Title</label>
                                                    <span style={{ "color": "red"}}>*</span>
                                                    <input type="text" className="form-control clsMandatory" id="idProjectName" />
                                                    <span id="idProjectNameChar" className="clsInputBoxMsg">Max 100 Characters</span>
                                                    <span id="" className="clsError" style={{ "display": "none", "color": "red"}}>
                                                        Please enter the Project Name.
                                                    </span>
                                                </div>
                                                <div className="form-group">
                                                    <label>Request Description</label>
                                                    <span className="" style={{"color": "red"}}>*</span>
                                                    <textarea className="form-control clsMandatory" placeholer="Message" id="idReqDescription"></textarea>
                                                    <span id="idReqDescriptionChar" className="clsInputBoxMsg"></span>
                                                    <span id="" className="clsError" style={{"display": "none","color": "red"}}>
                                                        Please enter Request Description.
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="col-md-3 col-sm-12 col-xs-12">
                                                <div className="form-group">
                                                    <label>Requester</label>
                                                    <span className="" style={{"color": "red"}}>*</span>
                                                    <input type="text" className="form-control clsMandatory" id="idRequester" />
                                                    <span id="" className="clsError" style={{"display": "none","color": "red"}}>
                                                        Please enter Requester.
                                                    </span>
                                                    <span id="idReqError" className="clsError" style={{"display": "none","color": "red"}}>
                                                        Please enter only one Requester.
                                                    </span>
                                                </div>
                                                <div className="form-group">
                                                    <label>Requester's Email ID</label>
                                                    <input type="text" className="form-control" id="idReqEmailDetails" readonly=""/>
                                                </div>
                                                <div className="form-group">
                                                    <label>Requester's Phone Number</label>
                                                    <input type="text" className="form-control" id="idReqContactDetails"/>
                                                    <span id="idReqChar" className="clsInputBoxMsg">
                                                        Only 10 digits allowed
                                                    </span>
                                                </div>
                                                <div className="form-group">
                                                    <label>Region(where SR is for)</label>
                                                    <span className="" style={{"color": "red"}}>*</span>
                                                    <div className="customSelect">
                                                        <select id="idRegion" className="clsMandatory">
                                                            <option value="-1">-Select-</option>
                                                            <option value="1">All</option>
                                                            <option value="2">Global Requests</option>
                                                            <option value="3">ASIA-AMET</option>
                                                            <option value="4">EUROPE</option>
                                                            <option value="5">LATAM</option>
                                                            <option value="6">NORTH AMERICA</option>
                                                        </select>
                                                    </div>
                                                    <span id="" className="clsError" style={{"display": "none","color": "red"}}>
                                                        Please select Region.
                                                    </span>
                                                </div>
                                                <div className="form-group">
                                                    <label>MCO(where SR is for)</label>
                                                    <span className="" style={{"color": "red"}}>*</span>
                                                    <div className="customSelect">
                                                        <select id="idMco" className="clsMandatory">
                                                            <option value="-1">-Select-</option>
                                                        </select>
                                                    </div>
                                                    <span id="" className="clsError" style={{"display": "none","color": "red"}}>
                                                        Please select MCO.
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="col-md-3 col-sm-12 col-xs-12">
                                                <div className="form-group">
                                                    <label>Vendor Name</label>
                                                    <span className="" style={{"color": "red"}}>*</span>
                                                    
                                                    <div className="customSelect">
                                                        <select id="idVendorName" className="clsMandatory">
                                                        <option value="-1">-Select-</option>
                                                        <option value="1">British Telecom (BT)</option>
                                                        <option value="2">Other</option></select>
                                                    </div>
                                                    <span id="" className="clsError" style={{"display": "none","color": "red"}}>
                                                        Please select Vendor Name.
                                                    </span>
                                                </div>
                                                <div className="form-group">
                                                    <label>Business Required by date<span className="" style={{"color": "red"}}>*</span></label>
                                                    <div className="input-group date" id="datetimepicker">
                                                        <input type="text" className="form-control" id="idBusinessReqDT"/>
                                                        <span id="" className="clsError" style={{"display": "none","color": "red"}}>
                                                            Please select Business Required by date.
                                                        </span>
                                                        <span className="add-on" data-toggle="tooltip" title="" data-original-title="Please select the latest realistic date when your SR must be delivered by.">
                                                            <i className="fa fa-calendar icon-calendar"></i>
                                                        </span>
                                                    </div>
                                                    <span id="idBRDError" style={{"display": "none","color": "red"}}>
                                                        A historical date is not allowed.  Please select a new date.
                                                    </span>
                                                </div>
                                                <div className="form-group" id="idParentChildBlock">
                                                    <label style={{"marginTop": "20px"}}>Is this a Child SR?</label>							
                                                    <br></br>
                                                    <input className="" type="checkbox" id="idParentChild" name="idParentChild" value="" style={{"display": "inline"}}/>
                                                    <label for="idParentChild"style={{"display": "inline","marginTop":"17px"}}> Yes</label>
                                                </div>
                                                <div className="form-group" id="idParentSRBlock">
                                                    <label>Parent SR ID</label>
                                                    <input className="form-control" type="text" id="idParentSR"/>
                                                </div>
                                                <div className="form-group">
                                                    <label>Vendor Project Manager</label>
                                                    <input type="text" className="form-control" id="idVendorProjectManager"/>
                                                </div>
                                            </div>
                                            <div className="col-md-3 col-sm-12 col-xs-12">
                                                <div className="form-group ">
                                                    <label className="reuester-req">How is the request being funded?
                                                        <span className="" style={{"color": "red"}}>*</span>
                                                    </label>
                                                    <div className="customSelect">
                                                        <select id="idRequestFunded" className="clsMandatory">
                                                            <option value="-1">-Select-</option>
                                                            <option value="1">Project - ITIB funded</option>
                                                            <option value="2">Network Operational</option>
                                                            <option value="3">Geography - IT</option>
                                                        </select>
                                                    </div>
                                                    <span id="" className="clsError" style={{"display": "none","color": "red"}}>
                                                        Please select one option.
                                                    </span>
                                                </div>
                                                <div className="form-group" id="ClarityId" >
                                                    <label>Clarity ID<span className="" style={{"color": "red"}}>*</span></label>
                                                    <input type="text" className="form-control" id="idClarityId"/>
                                                    <span id="" className="clsError" style={{"display": "none","color": "red"}}>
                                                        Please enter Clarity ID.
                                                    </span>
                                                </div>
                                                <div className="form-group" id="SAProjectManagerId" >
                                                    <label>Technical Project Manager<span className="" style={{"color": "red"}}>*</span></label>
                                                    <div id="idSaPm"><div dir="">
                                                        <input type="text" className="form-control" id="idProjectManagerId"/>
                                                        </div>
                                                    </div>
                                                    <span id="" className="clsError" style={{"display": "none","color": "red"}}>
                                                        Please enter Technical Project Manager.
                                                    </span>
                                                </div>
                                                <div className="form-group" id="SAPMDetailsId" >
                                                    <label>
                                                        Email Address<span className="" style={{"color": "red"}}>*</span>
                                                    </label>
                                                    <input type="text" className="form-control" id="idSAPMDetails"/>
                                                    <span id="" className="clsError" style={{"display": "none","color": "red"}}>
                                                        Please enter Email Address.
                                                    </span>
                                                </div>
                                                <div className="form-group" id="CostCenterId" >
                                                    <label>
                                                        Cost Center<span className="" style={{"color": "red"}}>*</span>
                                                    </label>
                                                    <input type="text" className="form-control" id="idCostCenter"/>
                                                    <span id="" className="clsError" style={{"display": "none","color": "red"}}>
                                                        Please enter Cost Center.
                                                    </span>
                                                </div>
                                                <div className="form-group" id="LegalEntityId" >
                                                    <label>
                                                        Legal Entity<span className="" style={{"color": "red"}}>*</span>
                                                    </label>
                                                    <input type="text" className="form-control" id="idLegalEntity"/>
                                                    <span id="" className="clsError" style={{"display": "none","color": "red"}}>
                                                        Please enter Legal Entity.
                                                    </span>
                                                </div>
                                                <div className="form-group" id="ServiceLineApproverId" >
                                                    <label>
                                                        Name of Service Line Approver<span className="" style={{"color": "red"}}>*</span>
                                                    </label>
                                                    <input type="text" className="form-control" id="idServiceLineApprover"/>
                                                    <input type="hidden" id="idServiceLineApproverDetails" value=""/>
                                                    <span id="" className="clsError" style={{"display": "none","color": "red"}}>
                                                        Please enter Service Line Approver.
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-12 col-sm-12 mg20">
                                                <a data-toggle="tooltip" data-html="true" title="" data-original-title="This will clear<br/> all the data from<br/> this screen."
                                                className="btn btn-tool mg5 hvr-underline-from-left " id="btnFirstClearAll" data-dismiss="modal">Clear All</a>
                                                <a data-toggle="tooltip" title="" data-original-title="
                                                    This will save the form as a draft for later submission." className="btn btn-tool mg5 hvr-underline-from-left " id="btnFirstSaveRequest"
                                                data-dismiss="modal">Save</a>
                                            </div>
                                        </div>
                                        </fieldset>
                                    </div>
                                    </div>
                                </div>
                                <Footer/>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            </div>
        );
    }
}
export default Request; 