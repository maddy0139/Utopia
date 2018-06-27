import React, { Component ,PropTypes} from 'react';
import DataServices from './common/DataService/DataServices';

class App extends Component {

    
    render()
    {
        return (
        <div className="layout">
            <div className="content dashboardContent">
                {this.props.children}
            </div>
        </div>
        );
    }
}
App.PropTypes = {
    children: PropTypes.object.isRequired  
  };

export default App;
