import React from 'react';

class Paging extends React.Component
{
    render()
    {
        return(
            <div className="cspage text-right">
                <ul className="pagination pagination-sm" style={{"marginRight":"58px","marginTop":"11px"}}>
                    <li id="idFirstPage" style={{"display": "none"}}><a href="#" className="fa fa-angle-double-left"></a></li>
                    <li id="idFirstPageTemp" className="disabled"><a href="#" className="fa fa-angle-double-left"></a></li>
                    <li id="idPriviousPage" style={{"margin-right": "4px","display": "none"}}><a href="#" className="fa fa-angle-left"></a></li>
                    <li id="idPriviousPageTemp" className="disabled" style={{"margin-right": "4px"}}><a href="#" className="fa fa-angle-left"></a></li>
                    <select id="idPages">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                    </select>
                    <li className="pageNumber"><span>1 of  1</span></li>
                    <li id="idNextPage" style={{"margin-right": "4px"}}><a href="#" className="fa fa-angle-right"></a></li>
                    <li id="idNextPageTemp" className="disabled" style={{"margin-right": "4px","display":"none"}}><a href="#" className="fa fa-angle-right"></a></li>
                    <li id="idLastPage"><a href="#" className="fa fa-angle-double-right"></a></li>
                    <li id="idLastPageTemp" className="disabled" style={{"display": "none"}}><a href="#" className="fa fa-angle-double-right"></a></li>
                </ul>
            </div>
        );
    }
}
export default Paging;