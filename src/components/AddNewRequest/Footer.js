import React from 'react';

class Footer extends React.Component{

    render()
    {
        return(
            <div class="sf-controls clearfix">
                <a id="btnSubmitRequest" className="btn btn-tool mg5 hvr-underline-from-left btn-sbmt sf-btn-finish" style={{"display": "none"}}>Submit</a>
                <a className="next-btn sf-right sf-btn sf-btn-next" href="#">Next</a>
                <a className="prev-btn sf-left sf-btn sf-btn-prev" href="#" style={{"display": "block"}}>Prev</a>
            </div>
        );
    }
}

export default Footer;