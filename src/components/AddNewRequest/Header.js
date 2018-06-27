import React from 'react';
import {Link} from 'react-router';

class Header extends React.Component
{
    constructor(props){
        super(props);
        this.state = {
            active:null
        };

    }

    componentWillReceiveProps(nextProps){
        console.log(nextProps);

    }
    render()
    {
        return(
            <div className="sf-nav-wrap clearfix sf-nav-top">
                    <div style={{"float":"left"}}>
                        <div className="btn-myrequest">
                            <Link to="/" id="linkMyRequest" className="btn btn-tool mg5 hvr-underline-from-left">My Requests</Link>               
                        </div>
                        <div style={{"fontSize": "12px" ,"margin":"10px 0"}}>
                            <span style={{"color": "red"}}>*</span>Indicates required field 
                        </div>
                    </div>
                    <ul className="sf-nav clearfix">
                        <Link to="/addNewRequest/Request" className="">
                            <li className={this.props.module==="Request"?"sf-nav-step sf-nav-step-0 sf-li-number sf-nav-link sf-active":"sf-nav-step sf-nav-step-0 sf-li-number sf-nav-link"}>
                                    <span className="sf-nav-subtext">Request</span>
                                <div className="sf-nav-number">
                                <span className="sf-nav-number-inner">1</span>
                                </div>
                                <div></div>
                            </li>
                        </Link>
                        <Link to="/addNewRequest/SiteInformation" className="">
                            <li className={this.props.module==="SiteInformation"?"sf-nav-step sf-nav-step-0 sf-li-number sf-nav-link sf-active":"sf-nav-step sf-nav-step-0 sf-li-number sf-nav-link"}>
                                    <span className="sf-nav-subtext">Site Information</span>
                                <div className="sf-nav-number">
                                <span className="sf-nav-number-inner">2</span>
                                </div>
                                <div></div>
                            </li>
                        </Link>
                        <Link to="/addNewRequest/SRType" className="">                            
                            <li className={this.props.module==="SRType"?"sf-nav-step sf-nav-step-0 sf-li-number sf-nav-link sf-active":"sf-nav-step sf-nav-step-0 sf-li-number sf-nav-link"}>
                                    <span className="sf-nav-subtext">SR Type </span>
                                <div className="sf-nav-number">
                                <span className="sf-nav-number-inner">3</span>
                                </div>
                                <div></div>
                            </li>
                        </Link>
                        <Link to="/addNewRequest/FileAttachement" className="">                            
                            <li className={this.props.module==="FileAttachement"?"sf-nav-step sf-nav-step-0 sf-li-number sf-nav-link sf-active":"sf-nav-step sf-nav-step-0 sf-li-number sf-nav-link"}>
                                    <span className="sf-nav-subtext">File Attachment</span>
                                <div className="sf-nav-number">
                                <span className="sf-nav-number-inner">4</span>
                                </div>
                                <div></div>
                            </li>
                        </Link>
                    </ul>
            </div>
        );
    }
}

export default Header;