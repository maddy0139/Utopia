import React from 'react';
import {Link} from 'react-router';

class Reports extends React.Component{

    render()
    {
        return(
            <div className="content">
                <div className="col-md-5 col-sm-12 actionBtn">
                    <Link to="/" id="linkMyRequest" className="btn btn-tool mg5 hvr-underline-from-left">My Requests</Link>
                </div>
                <section className="inputSection mg20">
                    <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-sm-12">
                        <h3>Report</h3>
                        </div>
                    </div>
                    </div>
                </section>
                <section className="csForm">
                    <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-sm-12 col-xs-12">
                        <div className="form-group">
                            <label>Select Report</label>
                            <div className="customSelect">
                            <select id="idReportType" onchange="toggleMonth()">
                                <option value="0">Report</option>
                                <option value="1">Pending DO Report</option>
                                <option value="2">Monthly Exception Review Report</option>
                                <option value="3">Exception Report</option>
                                <option value="4">Finance Report</option>
                            </select>
                            </div>
                        </div>
                        <div className="form-group">
                            <label>Region</label>
                            <div className="customSelect">
                            <select id="idRegionFilter">
                                <option>Region</option>

                                <option value="1">All</option>
                                <option value="2">Global Requests</option>
                                <option value="3">ASIA-AMET</option>
                                <option value="4">EUROPE</option>
                                <option value="5">LATAM</option>
                                <option value="6">NORTH AMERICA</option>
                            </select>
                            </div>
                        </div>
                        <div className="form-group" id="divYear" >
                            <label>Select Year</label>
                            <div className="customSelect">
                            <select id="idYear">
                                <option value="Year">Year</option>
                                <option value="2016">2016</option>
                                <option value="2017">2017</option>
                                <option value="2018">2018</option>
                            </select>
                            </div>
                        </div>
                        <div className="form-group" id="divMonth" >
                            <label>Select Month</label>
                            <div className="customSelect">
                            <select id="idMonths">
                                <option value="Month">Month</option>
                                <option id="idOptionAll" value="All">All</option>
                                <option value="January">January</option>
                                <option value="February">February</option>
                                <option value="March">March</option>
                                <option value="April">April</option>
                                <option value="May">May</option>
                                <option value="June">June</option>
                                <option value="July">July</option>
                                <option value="August">August</option>
                                <option value="September">September</option>
                                <option value="October">October</option>
                                <option value="November">November</option>
                                <option value="December">December</option>
                            </select>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 col-sm-12 mg20">
                        <a type="button" onclick="ViewReport()" className="btn btn-tool mg5 mgb5 hvr-underline-from-left ">View Report</a>
                        </div>
                    </div>
                    </div>
                </section>
                </div>
        );
    }
}

export default Reports;