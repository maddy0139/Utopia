import React from 'react';
class StatusIndicator extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
        };
    }
    render()
    {
        return(
            <section className="inputSection text-left">
                <div className="container" style={{"width": "1240px"}}>
                    
                        <ul className="inputTxt">	
                            <li style={{"marginLeft":"0px","marginRight":"0px"}}><div className="inputvalues"><a id="idTotalRequests">{this.props.totalRequests}</a></div><span>Total Requests</span></li>
                            <li style={{"marginLeft":"0px","marginRight":"0px"}}><div className="inputvalues"><a id="idAwaitingReq">{this.props.awaitingReqCount}</a></div><span>Awaiting Req Review</span></li>
                            <li style={{"marginLeft":"0px","marginRight":"0px"}}><div className="inputvalues"><a id="idAwaitingQualityReview">{this.props.awaitingQualityCount}</a></div><span>Awaiting Quality Review</span></li>
                            <li style={{"marginLeft":"0px","marginRight":"0px"}}><div className="inputvalues"><a id="idAwaitingProposalApproval">{this.props.awaitingProposalCount}</a></div><span>Awaiting Proposal Approval</span></li>
                            <li style={{"marginLeft":"0px","marginRight":"0px"}}><div className="inputvalues"><a id="idAwatingDO">{this.props.awaitingDoCount}</a></div><span>Awaiting DO</span></li>
                        </ul>
                    
                </div>
            </section>
        );
    }
}   

export default StatusIndicator;