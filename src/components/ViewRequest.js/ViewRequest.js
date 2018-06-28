import React from 'react';
import {Link} from 'react-router';
import Header from './Header';
import StatusIndicator from './StatusIndicator';
import SRDetails from './SRDetails';

class ViewRequest extends React.Component
{
    render()
    {
        return(
            <div>
                <Header/>
                <StatusIndicator/>
                <section className="csView">
                    <div className="container" style={{"width":"1240px"}}>
                        <SRDetails/>
                    </div>
                </section>
                
            </div>
        );
    }
}
export default ViewRequest;