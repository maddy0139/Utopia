import React,{PropTypes} from 'react';
import Request from './Request';
import Header from './Header';
import Footer from './Footer';
import {Link} from 'react-router';

class AddNewRequest extends React.Component
{
    render()
    {
        return(
            <div className="content">
                <section className="csForm">
                    <div className="container sf-sky" style={{"width": "1240px"}}>
                        <div className="sf-wizard" id="wizard-box">
                            <div id="wizard" action="" className="sf-nav-on-top">
                                <Header/>
                                {this.props.children}
                                <Footer/>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}
AddNewRequest.PropTypes = {
    children: PropTypes.object.isRequired  
  };
export default AddNewRequest;