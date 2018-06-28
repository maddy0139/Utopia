import React from 'react';
import Collapsible from 'react-collapsible';

class SRDetails extends React.Component
{
    render()
    {
        return (
            <div className="row">
                <Collapsible trigger="SR Details" triggerTagName="div">
                <div className="collapsibleRow">
                        <div className="form-group" id="idRequestID">
                            <label>Request ID</label>
                            <p>GDM00000257</p>
                        </div>
                        <div className="form-group" id="idProjectName">
                            <label>Request Title</label>
                            <p>Demo request 1</p>
                        </div>
                    </div>

                    <div className="collapsibleRow">
                        <div className="form-group" id="idSRID">
                            <label>SR ID</label>
                            <p></p>
                        </div>
                        <div className="form-group" id="idIsPriority">
                            <label>Expedite?</label>
                            <p>No</p>
                        </div>
                    </div>
                    <div className="collapsibleRow">
                        <div className="form-group" id="idRequestStatus">
                            <label>Request Status</label>
                            <p>Awaiting Requirements Review</p>
                        </div>
                        <div className="form-group" id="idProjectDescription">
                            <label>Request Description</label>
                            <p>collapsibleRow</p>
                        </div>
                    </div>
                    <div className="collapsibleRow">
                        <div className="form-group" id="idParentOrChild">
                            <label>Is this a Child SR?</label>
                            <p>No</p>
                        </div>
                        <div className="form-group" id="idParentSR">
                            <label>Parent SR ID</label>
                            <p></p>
                        </div>
                    </div>
                    <div className="collapsibleRow">
                        <div className="form-group" id="idRequester">
                            <label>Requester</label>
                            <p>Rawat, Priyesh</p>
                        </div>
                        <div className="form-group" id="idRequestFunded">
                            <label>Request Funded</label>
                            <p>Project - ITIB funded</p>
                        </div>
                    </div>
                    <div className="collapsibleRow">
                        <div className="form-group" id="idClarityID">
                            <label>Clarity ID</label>
                            <p>123</p>
                        </div>
                        <div className="form-group" id="idRequesterEmailId">
                            <label>Requester's Email ID</label>
                            <p>Priyesh.Rawat@unilever.com</p>
                        </div>
                    </div>

                    <div className="collapsibleRow">
                        <div className="form-group" id="idRequesterContact">
                            <label>Requester's Phone Number</label>
                            <p></p>
                        </div>
                        <div className="form-group" id="idSRType">
                            <label>SR Type</label>
                            <p>AT0</p>
                        </div>
                    </div>

                    <div className="collapsibleRow">
                        <div className="form-group" id="idVendors">
                            <label>Vendor Name</label>
                            <p>British Telecom (BT)</p>
                        </div>
                        <div className="form-group" id="idRegion">
                            <label>Region</label>
                            <p>All</p>
                        </div>
                    </div>

                    <div className="collapsibleRow">
                        <div className="form-group" id="idSiteName">
                            <label>Site Name</label>
                            <p>Chicago -2816 South Kilbourn</p>
                        </div>
                        <div className="form-group" id="idMCO">
                            <label>MCO</label>
                            <p>Italy</p>
                        </div>
                    </div>

                    <div className="collapsibleRow">
                        <div className="form-group" id="idSiteAddress">
                            <label>Site Address</label>
                            <p>2816 South Kilbourn Avenue,,,,Chicago,Illinois</p>
                        </div>
                        <div className="form-group" id="idCountries">
                            <label>Country</label>
                            <p>UNITED STATES OF AMERICA</p>
                        </div>
                    </div>

                </Collapsible>
                <Collapsible trigger="SR Details - Proposal" triggerTagName="div">
                    <div className="collapsibleRow">
                        <div className="form-group" id="idProposalVersion">
                            <label>Proposal Version #</label>
                            <p></p>
                        </div>
                        <div className="form-group" id="idTargetRequirementsApprovalDT">
                            <label>Target Requirements Approval Date</label>
                            <p>04/07/2018</p>
                        </div>
                    </div>
                    <div className="collapsibleRow">
                        <div className="form-group" id="idRequirementsApprovedDT">
                            <label>Date Requirements Approved</label>
                            <p></p>
                        </div>
                        <div className="form-group" id="idTargetProposalCreationDT">
                            <label>Target Proposal Creation Date</label>
                            <p></p>
                        </div>
                    </div>
                    <div className="collapsibleRow">
                        <div className="form-group" id="idProposalCreatedDT">
                            <label>Date Proposal Created</label>
                            <p></p>
                        </div>
                        <div className="form-group" id="idProposalApprovedTargetDT">
                            <label>Target Proposal Approval Date</label>
                            <p></p>
                        </div>
                    </div>
                    <div className="collapsibleRow">
                        <div className="form-group" id="idProposalApprovedDT">
                            <label>Date Proposal Approved</label>
                            <p></p>
                        </div>
                        <div className="form-group" id="idRequestedDeliveryDate">
                            <label>Requested Delivery Date By</label>
                            <p></p>
                        </div>
                    </div>
                    <div className="collapsibleRow">
                        <div className="form-group" id="idAgreedDeliveryDT">
                            <label>Agreed Delivery Date (ADD)</label>
                            <p></p>
                        </div>
                        <div className="form-group" id="idTargetProjectDeliveryDT">
                            <label>Target Project Delivery Date</label>
                            <p></p>
                        </div>
                    </div>
                    <div className="collapsibleRow">
                        <div className="form-group" id="idActualProjectDeliveryDT">
                            <label>Actual Project Delivery Date</label>
                            <p></p>
                        </div>
                        <div className="form-group">
                            <label>Solutions Designer NSR</label>
                            <div id="idSolutionsDesignerNSR" className="clsPeopleType " multiselect="true">
                            </div>
                        </div>
                    </div>
                    <div className="collapsibleRow">
                        <div className="form-group">
                            <label>Solutions Designer Proposal </label>
                            <div id="idSolutionsDesignerProposal" className="clsPeopleType " multiselect="true">
                            </div>
                        </div>
                    </div>
                </Collapsible>
                <Collapsible trigger="R Details-Procurement" triggerTagName="div">
                    <div className="collapsibleRow">
                        <div className="form-group" id="idDivIsProcurementProposalApproved">
                            <label>Proposal Approved?</label>
                            <br/>
                            <div className="customSelect">
                                <select id="idIsProcurementProposalApproved" disabled="">
                                    <option>-Select-</option>
                                    <option>Yes</option>
                                    <option>No</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-group" id="idDivProcurementClarification">
                            <label>Reason
                                <span id="spnMandatoryProcurementClarification" style={{"color": "red","display": "none"}}>*</span> (Please explain why the proposal required commercial clarification)</label>
                            <textarea className="form-control" rows="3" id="idProcurementClarification" disabled>								</textarea>
                        </div>
                    </div>
                </Collapsible>
                <Collapsible trigger="SR Details - Financials" triggerTagName="div">
                    <div className="collapsibleRow">
                        <div className="form-group" id="idTargetDOCreationDT">
                            <label>Target DO Creation Date</label>
                            <p></p>
                        </div>
                        <div className="form-group" id="idDORequestedDT">
                            <label>Date DO requested</label>
                            <p></p>
                        </div>
                    </div>
                    <div className="collapsibleRow">
                        <div className="form-group" id="idDOReceivedDT">
                            <label>DO Received Date</label>
                            <p></p>
                        </div>
                        <div className="form-group" id="idVendorSubmittedDODT">
                            <label>Date DO Submitted to Vendor</label>
                            <p></p>
                        </div>
                    </div>
                    <div className="collapsibleRow">
                        <div className="form-group" id="idCostCenter">
                            <label>Cost Center</label>
                            <p></p>
                        </div>
                        <div className="form-group" id="idCurrencyTypeLocal">
                            <label>DO Number</label>
                            <p></p>
                        </div>
                    </div>
                    <div className="collapsibleRow">
                        <div className="form-group" id="idOTC">
                            <label>One Time Cost (OTC) Euros</label>
                            <p></p>
                        </div>
                        <div className="form-group" id="idQuantity">
                            <label>New Monthly Recurring Charges (MRC) Euros</label>
                            <p></p>
                        </div>
                    </div>
                    <div className="collapsibleRow">
                        <div className="form-group" id="idIncrementalRecurringCostperAnnum">
                            <label>Current Monthly Recurring Charges (MRC) Euros</label>
                            <p></p>
                        </div>
                        <div className="form-group" id="idPricePerUnit">
                            <label>Delta Monthly Recurring Charges (MRC) Euros</label>
                            <p></p>
                        </div>
                    </div>
                    <div className="collapsibleRow">
                        <div className="form-group" id="idNewMonthlyRecurringCost">
                            <label>Estimated Monthly Recurring Charges (MRC) Euros</label>
                            <p></p>
                        </div>
                    </div>
                </Collapsible>
                <Collapsible trigger="SR Details-Customer Satisfaction" triggerTagName="div">
                    <div className="collapsibleRow">
                        <div className="form-group" id="idDivIsCSATCompleted">
                            <label>Request Complete?</label>
                            <br/>
                            <div className="customSelect">
                                <select id="idIsCSATCompleted" disabled="">
                                    <option>-Select-</option>
                                    <option>Yes</option>
                                    <option>No</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-group" id="idDivCSATRating">
                            <label>Please score the SR
                                <span id="spnMandatoryCSATRating" style={{ "color": "red", "display": "none"}}>*</span>
                            </label>
                            <br/>
                            <div className="customSelect">
                                <select id="idCSATRating" disabled="">
                                    <option value="-1">-Select-</option>
                                    <option value="25">1. Extremely Satisfied</option>
                                    <option value="26">2. Very Satisfied</option>
                                    <option value="27">3. Fairly Satisfied</option>
                                    <option value="28">4. Fairly Dissatisfied</option>
                                    <option value="29">5. Very Dissatisfied</option>
                                    <option value="30">6. Extremely Dissatisfied</option>
                                </select>
                            </div>
                            <span className="clsError" style={{ "color": "red", "display": "none"}}>Please select Rating.</span>
                        </div>
                    </div>
                    <div className="collapsibleRow">
                        <div className="form-group" id="idDivCSATReason">
                            <label>Reason</label>
                            <br/>
                            <textarea id="idCSATReason" disabled className="form-control" rows="3">								</textarea>
                        </div>
                        <div className="form-group" id="idDivCSATFeedback">
                            <label>Requester Feedback for the SR from first raising to final completion
                                <span id="spnMandatoryCSATFeedback" style={{ "color": "red", "display": "none"}}>*</span>
                            </label>
                            <br/>
                            <textarea id="idCSATFeedback" disabled className="form-control" rows="3">								</textarea>
                            <span id="idCSATFeedbackChar" className="clsInputBoxMsg" style={{ "color": "red", "display": "none"}}>Please enter more information.</span>
                            <span id="" className="clsError" style={{ "color": "red", "display": "none"}}>Please enter Feedback.</span>
                        </div>
                    </div>
                </Collapsible>
                <Collapsible trigger="Attachements" triggerTagName="div">
                    <div className="collapsibleRow">
                        <p id="idDocumentsSubmitted">
                            
                        </p>
                    </div>
                </Collapsible>
            </div>
        );
    }
}
export default SRDetails;
