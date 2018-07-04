import React from 'react';
import {Link} from 'react-router';

class Header extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {

        };
        this.PrintPage = this.PrintPage.bind(this);
    }
    PrintPage()
    {
        console.log('test');
        window.print();
    }
    render()
    {
        return(
            <section className="inputSection mg20">
                <div className="container" style={{"width": "1240px"}}>
                    <div className="row">
                        <div className="col-md-12 col-sm-12">
                            
                            <Link to="/" className="btn btn-tool mg5 mgb5 hvr-underline-from-left" id="idDashBoard">My Request</Link>
                            
                            <a href="https://unilever.sharepoint.com/sites/QA_utopia/pages/DashBoard.aspx?View=Drafts" className="btn btn-tool mg5 mgb5 hvr-underline-from-left clsDraftRequest"
                                id="idDrafts" style={{"display": "inlineBlock"}}>My Drafts</a>
                            <Link to="Reports" className="btn btn-tool mg5 mgb5 hvr-underline-from-left"
                                id="idReports" >Reports</Link>
                            <Link to="addNewRequest" className="btn btn-tool mg5 mgb5 hvr-underline-from-left"
                                id="idAddRequest" >Add New Request</Link>
                            <Link to="/EditRequest" className="btn btn-tool mg5 mgb5 hvr-underline-from-left" id="idEditRequest">Edit Request</Link>
                            <a className="btn btn-tool mg5 mgb5 hvr-underline-from-left clsDraftRequest"
                                onClick={this.PrintPage.bind(this)} id="idDrafts" style={{"display": "inlineBlock"}}>Print</a>
                        </div>
                    </div>
                    
                </div>
            </section>
        );
    }
}

export default Header;