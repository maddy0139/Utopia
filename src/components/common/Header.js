import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';

const Header = () => {
    return (
      <nav>
        <Link to="/App" >Home</Link>
        {" | "}
        <Link to="addNewRequest">Add New Request</Link>
      </nav>  
    );
};

export default Header;