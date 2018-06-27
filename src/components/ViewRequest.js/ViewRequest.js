import React from 'react';
import {Link} from 'react-router';
import Header from './Header';
import StatusIndicator from './StatusIndicator';

class ViewRequest extends React.Component
{
    render()
    {
        return(
            <div>
                <Header/>
                <StatusIndicator/>
            </div>
        );
    }
}
export default ViewRequest;