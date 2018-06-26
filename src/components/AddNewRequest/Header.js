import React from 'react';

class Header extends React.Component
{
    render()
    {
        return(
            <div className="sf-nav-wrap clearfix sf-nav-top">
                <ul className="sf-nav clearfix">
                <li className="sf-nav-step sf-nav-step-0 sf-li-number sf-active sf-nav-link">
                    <span className="sf-nav-subtext">Request</span>
                    <div className="sf-nav-number">
                    <span className="sf-nav-number-inner">1</span>
                    </div>
                    <div></div>
                </li>
                <li className="sf-nav-step sf-nav-step-1 sf-li-number sf-nav-link">
                    <span className="sf-nav-subtext">Site Information</span>
                    <div className="sf-nav-number">
                    <span className="sf-nav-number-inner">2</span>
                    </div>
                    <div></div>
                </li>
                <li className="sf-nav-step sf-nav-step-2 sf-li-number sf-nav-link">
                    <span className="sf-nav-subtext">SR Type </span>
                    <div className="sf-nav-number">
                    <span className="sf-nav-number-inner">3</span>
                    </div>
                    <div></div>
                </li>
                <li className="sf-nav-step sf-nav-step-3 sf-li-number sf-nav-link">
                    <span className="sf-nav-subtext">File Attachment</span>
                    <div className="sf-nav-number">
                    <span className="sf-nav-number-inner">4</span>
                    </div>
                    <div></div>
                </li>
                </ul>
            </div>
        );
    }
}

export default Header;