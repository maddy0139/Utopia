import React from 'react';
import Request from './Request';
import SiteInformation from './SiteInformation';
import SRType from './SRType';
import FileAttachement from './FileAttachement';
import Header from './Header';
import Footer from './Footer';
class AddNewRequest extends React.Component
{
    render()
    {
        return(
            <div className="layout">
            <div className="content">
                <section className="inputSection mg20">
                    <div className="container" style={{"width": "1240px"}}>
                        <div className="row">
                        <div className="col-md-12 col-sm-12">
                            <div className="btn-myrequest">
                                <a id="linkMyRequest" className="btn btn-tool mg5 hvr-underline-from-left">My Requests</a>               
                            </div>
                        </div>
                        <div className="col-md-12 col-sm-12">
                            <div style={{"fontSize": "12px" ,"margin":"10px 0"}}>
                                <span style={{"color": "red"}}>*</span>Indicates required field 
                            </div>
                        </div>
                        </div>
                    </div>
                </section>
                <section className="csForm">
                    <div className="container sf-sky" style={{"width": "1240px"}}>
                        <div className="sf-wizard" id="wizard-box">
                            <div id="wizard" action="" className="sf-nav-on-top">
                                <Header/>
                                <div className="sf-viewport">
                                    <div className="sf-fieldwrap clearfix" style={{"width": "4880px", "marginLeft": "0px"}}>
                                        <Request/>
                                        
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
export default AddNewRequest;