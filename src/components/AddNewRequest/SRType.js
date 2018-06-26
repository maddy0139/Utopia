import React from 'react';

class SRType extends React.Component
{
    render()
    {
        return(
                <div className="sf-step sf-step-2 sf-step-active" style={{"width": "1210px","float": "left","marginRight": "10px"}}>
                    <fieldset style={{"height": "476px"}}>
                        <legend className="legend-title">SR Type </legend>
                        <div className="row">
                            <div className="col-md-12 col-sm-12 col-xs-12">
                                <div id="serviceBlockGuidence" className="clsGuidence pull-right">
                                    <a href="#" className="">Service Block Criteria Guideline</a>
                                </div>
                                <div className="form-group">
                                    <div className="addSrType" id="addSrType">
                                        <div className="repeater row col-md-10" style={{"display": "block"}}>
                                            <span className="col-md-6 que_list">Is this request part of a Global Programme affecting Multiple sites/regions and multiple service blocks? (LAN/WAN/VOICE/WIFI)​​?
                                                </span>
                                            <span className="col-md-4 customSelect option_list">
                                                <select id="idSrTypeslection" className="form-control">
                                                <option>-Select-</option>
                                                <option>Yes</option>
                                                <option>No</option>
                                                </select>
                                            </span>
                                            
                                        </div>
                                        <div className="repeater row col-md-10" >
                                            <span className="col-md-6 que_list">
                                            Is this a project which includes either multiple sites and a single service block, or a single site and multiple service blocks?​​ </span>
                                            <span className="col-md-4 customSelect option_list">
                                                <select id="idSrTypeslection" className="form-control">
                                                <option>-Select-</option>
                                                <option>Yes</option>
                                                <option>No</option>
                                                </select>
                                            </span>
                                            
                                        </div>
                                        <div className="repeater row col-md-10" >
                                            <span className="col-md-6 que_list">Is this a Single Site and Single Service Block and Inventory-affecting (hardware)?​​ </span>
                                            <span className="col-md-4 customSelect option_list">
                                                <select id="idSrTypeslection" className="form-control">
                                                <option>-Select-</option>
                                                <option>Yes</option>
                                                <option>No</option>
                                                </select>
                                            </span>
                                            
                                        </div>
                                        <div className="repeater row col-md-10" >
                                            <span className="col-md-6 que_list">Video Conferencing only. Services where a specific OOM (Order of Magnitude) catalogue (price book) is available.
                                                Single Site, Service block defined​​? </span>
                                            <span className="col-md-4 customSelect option_list">
                                                <select id="idSrTypeslection" className="form-control">
                                                <option>-Select-</option>
                                                <option>Yes</option>
                                                <option>No</option>
                                                </select>
                                            </span>
                                            
                                        </div>
                                        <div className="repeater row col-md-10" >
                                            <span className="col-md-6 que_list">Is this Man-hours only. Non-inventory affecting, non-catalogue SRs. Single site, single service block?​​ </span>
                                            <span
                                                className="col-md-4 customSelect option_list">
                                                <select id="idSrTypeslection" className="form-control">
                                                <option>-Select-</option>
                                                <option>Yes</option>
                                                <option>No</option>
                                                </select>
                                            </span>
                                            
                                        </div>
                                        <div className="repeater row col-md-10" >
                                            <span className="col-md-6 que_list">Is this a Service catalogue item? A pre-priced SR. May be raised on other systems (e.g. Remedy 8, Algosec)​​?
                                                </span>
                                            <span className="col-md-4 customSelect option_list">
                                                <select id="idSrTypeslection" className="form-control">
                                                <option>-Select-</option>
                                                <option>Yes</option>
                                                <option>No</option>
                                                </select>
                                            </span>
                                            
                                        </div>
                                        <div className="repeater row col-md-10" >
                                            <span className="col-md-6 que_list">OOM (Order of Magnitude) Budgetary Request providing a cost which is as accurate as possible given the five
                                                (5) day time-frame for quotation *Vendor will not be bound by Order of Magnitude Quotations​​? </span>
                                            <span
                                                className="col-md-4 customSelect option_list">
                                                <select id="idSrTypeslection" className="form-control">
                                                <option>-Select-</option>
                                                <option>Yes</option>
                                                <option>No</option>
                                                </select>
                                            </span>
                                            
                                        </div>
                                        <div className="repeater row col-md-10" >
                                            <span className="col-md-6 que_list">​Is this an NIA (Network Impact Assessment)? </span>
                                            <span className="col-md-4 customSelect option_list">
                                                <select id="idSrTypeslection" className="form-control">
                                                <option>-Select-</option>
                                                <option>Yes</option>
                                                <option>No</option>
                                                </select>
                                            </span>
                                            
                                        </div>
                                        <div className="repeater row col-md-10" >
                                            <span className="col-md-6 que_list">​Is this NIA for less than 100 sites?​ </span>
                                            <span className="col-md-4 customSelect option_list">
                                                <select id="idSrTypeslection" className="form-control">
                                                <option>-Select-</option>
                                                <option>Yes</option>
                                                <option>No</option>
                                                </select>
                                            </span>
                                            
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group"  id="QuestionID">
                                    <label>Question ID</label>
                                    <input type="text" className="form-control" id="QuestionID" readonly=""/>
                                </div>
                                <div className="form-group" id="idSRIdBlock">
                                    <label>SR ID</label>
                                    <input type="text" className="form-control" id="idSRId"/>
                                </div>
                                <div className="form-group" id="idOTCBlock">
                                    <label>One Time Cost (OTC)</label>
                                    <input type="text" className="form-control" id="idOTC"/>
                                </div>
                            </div>
                        </div>
                        <div className="row col-md-10"  id="DoNumberId">
                            <div className=" col-md-6">
                                <div className="row">
                                <label>Do Number
                                    <span style={{"color": "red"}}>*</span>
                                </label>
                                </div>
                            </div>
                            <div className="row col-md-4">
                                <input type="text" className="form-control clsMandatory quetype " id="idDoNumber"/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <span id="" className="clsError" style={{"display": "none", "color": "red"}}>Please enter DO Number.</span>
                            </div>
                            <br/><br/><br/>
                        </div>
                        <div className="row col-md-10" id="QuestionSRTypeId">
                            <div className="col-md-6">
                                <div className="row">
                                <span>SR Type
                                    <span className="" style={{"color": "red"}}>*</span>
                                </span>
                                </div>
                            </div>
                            <div className="row col-md-4">
                                <input type="text" className="form-control quetype" id="idQuestionSRType" readonly=""/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <span id=" " className="clsError " style={{"display": "none", "color": "red"}}>Please answer Questions to decide SR Type</span>
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
        );
    }
}
export default SRType;