import React from 'react';

class StatusIndicator extends React.Component
{
    render()
    {
        return(
            <section className="stage mg20">
                <div className="container" style={{"width": "1240px"}}>
                    <div className="row">
                        <div className="col-md-12 col-sm-12">
                            <hr style={{"width": "100%"}}/>
                            <ul className="csVeiwSt">
                                <li className="active" id="idARR" style={{"marginLeft": "0px" ,"marginRight": "57.8571px"}}>
                                    <span>1</span>
                                    <p>Awaiting Requirements Review</p>
                                </li>
                                <li className="" id="idRA" style={{"marginLeft": "57.8571px" ,"marginRight": "57.8571px"}}>
                                    <span>2</span>
                                    <p>Requirements Approved</p>
                                </li>
                                <li className="" id="idAPA" style={{"marginLeft": "57.8571px" ,"marginRight": "57.8571px"}}>
                                    <span>3</span>
                                    <p>Awaiting Proposal Approval</p>
                                </li>
                                <li className="" id="idPFA" style={{"marginLeft": "57.8571px" ,"marginRight": "57.8571px"}}>
                                    <span>4</span>
                                    <p>Proposal - Fully Approved</p>
                                </li>
                                <li className="" id="idADO" style={{"marginLeft": "57.8571px" ,"marginRight": "57.8571px"}}>
                                    <span>5</span>
                                    <p>Awaiting DO</p>
                                </li>
                                <li className="" id="idII" style={{"marginLeft": "57.8571px" ,"marginRight": "57.8571px"}}>
                                    <span>6</span>
                                    <p>In Implementation</p>
                                </li>
                                <li className="" id="idNIAA" style={{"marginLeft": "57.8571px" ,"marginRight": "57.8571px"}}>
                                    <span>7</span>
                                    <p>Customer Acceptance</p>
                                </li>
                                <li className="" id="idClose" style={{"marginLeft": "57.8571px" ,"marginRight": "0px"}}>
                                    <span>8</span>
                                    <p>Request Close / Cancelled</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
export default StatusIndicator;