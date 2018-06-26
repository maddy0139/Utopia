import React from 'react';

class SiteInformation extends React.Component
{
    render()
    {
        return(
                <div className="sf-step sf-step-1 sf-step-active" style={{"width": "1210px", "float": "left","marginRight": "10px"}}>
                    <fieldset style={{"height": "476px"}}>
                        <legend className="legend-title">Site Information</legend>
                        <div className="row">
                            <div className="col-md-3 col-sm-12 col-xs-12">
                                <div className="form-group">
                                    <label>Is this a new site?</label>
                                    <span className="" style={{"color": "red"}}>*</span>
                                    <div className="customSelect">
                                        <select id="idIsNewSite" className="clsMandatory">
                                        <option value="-1">-Select-</option>
                                        <option value="1">Yes</option>
                                        <option value="2">No</option>
                                        </select>
                                    </div>
                                    <span id="" className="clsError" style={{"display": "none", "color": "red"}}>
                                        Please select Yes or No.
                                    </span>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-12 col-xs-12">
                                <div className="form-group" id="SiteNameId" >
                                    <label>Site Name
                                        <span className="" style={{"color": "red"}}>*</span>                                    
                                    </label>
                                    <input type="text" className="form-control ui-autocomplete-input" id="idSiteName" autocomplete="off"/>
                                    <span id="" className="clsError" style={{"display": "none", "color": "red"}}>                                
                                        Please Enter Site Name
                                    </span>
                                </div>
                                <div className="form-group" id="SiteAddressId" >
                                    <label>Site Address</label>
                                    <input type="text" className="form-control" id="idSiteAddress" readonly=""/>
                                </div>
                                <div className="form-group" id="CountryId" >
                                    <label>Country</label>
                                    <input type="text" className="form-control clsMandatory" id="idCountryText" readonly=""/>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="form-group" id="MasterDataLinkId">
                                <span id="masterdataid">Please save this request and click this
                                    <span id="masterdataBlockGuidence">'
                                        <a href="#" className="">
                                            <u>Link</u>
                                        </a>'
                                    </span> for completing the documentation to register this site with the Masterdata team.
                                    <br/>
                                    <br/> Once successfully registered, please update this request and Save or Submit.</span>
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
        );
    }
}
export default SiteInformation;