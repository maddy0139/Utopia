import React from 'react';
import Header from './Header';
import Footer from './Footer';


class FileAttachement extends React.Component
{
    render()
    {
        return(
            <div className="layout">
            <div className="content">
                <section className="csForm">
                    <div className="container sf-sky" style={{"width": "1240px"}}>
                        <div className="sf-wizard" id="wizard-box">
                            <div id="wizard" action="" className="sf-nav-on-top">
                                <Header module={"FileAttachement"}/>
                                <div className="sf-viewport">
                                    <div className="sf-fieldwrap clearfix" style={{"width": "4880px", "marginLeft": "0px"}}>
                                    <div className="sf-step sf-step-3 sf-step-active" style={{ "width": "1210px", "float": "left", "marginRight": "10px"}}>
                                        <fieldset style={{ "height": "470px"}}>
                                            <legend className="legend-title">File Attachment</legend>
                                            <div className="row">
                                                <div className="col-md-4 col-sm-12 col-xs-12">
                                                    <a id="idGetDocuments" className="btn btn-tool mg5 mgb5 hvr-underline-from-left clsGetDocuments">Document Templates</a>
                                                    <div className="form-group">
                                                        <label className="csblue">
                                                            Please attach your technical details here if standard SR.<br/>  
                                                            If NIA please attach the NIA details and DO document (DO document only required upfront for 100 sites or less)
                                                        </label>
                                                        <input type="text" className="form-control" style={{"display": "none"}}/>
                                                        <button type="button" className="clsUploadDocs" id="serviceReqDocs">Select File &nbsp;&nbsp;<i className=" fa fa-upload"></i></button>
                                                        <input id="getFile" type="file" multiple="multiple" style={{"display": "none"}}/> 
                                                        <table className="clsFileUpload" id="fileTable" style={{"width": "285px"}}>
                                                            <tbody className="cf">
                                                                <tr>
                                                                    <th>File Name</th>
                                                                    <th>Action</th>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-12 col-sm-12 mg20">
                                                    <a data-toggle="tooltip" data-html="true" title="" data-original-title="This will clear<br/> all the data from<br/> this screen."
                                                    className="btn btn-tool mg5 hvr-underline-from-left " id="btnFirstClearAll" data-dismiss="modal">Clear All</a>
                                                    <a data-toggle="tooltip" title="" data-original-title="
                                                        This will save the form as a draft for later submission." className="btn btn-tool mg5 hvr-underline-from-left " id="btnFirstSaveRequest"
                                                    data-dismiss="modal">Save</a>
                                                </div>
                                            </div>
                                        </fieldset>
                                    </div>
                                    </div>
                                </div>
                                <Footer/>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            </div>
                
        );
    }
}
export default FileAttachement;