
import * as pnp from '../../../../node_modules/sp-pnp-js/dist/pnp';
import Promise from 'promise';
import { resolve } from "path";


const DataServices = {};
const Constants = {
};
Constants.Lists = {
    REQUESTS : "Requests",
    STATUS : "status"
};
pnp.setup({
    sp: {
        headers: {
            "Accept": "application/json;odata=verbose"
        }
    }
});

DataServices.GetAllRequestCount = () =>{
    return new Promise((resolve,reject) =>{
        pnp.sp.web.lists.getByTitle(Constants.Lists.REQUESTS).items
        .select("Title")
        .get().then(requests=>{
            resolve(requests.length);
        },error =>{
            reject(error);
        });
    });
};

DataServices.GetAwaitingReqReviewCount =()=>{
    return new Promise((resolve,reject) =>{
        pnp.sp.web.lists.getByTitle(Constants.Lists.REQUESTS).items
        .select("Title","RequestStatus/Title")
        .expand("RequestStatus")
        .filter("RequestStatus/Title eq 'Awaiting Requirements Review'")
        .get().then(requests=>{
            resolve(requests.length);
        },error =>{
            reject(error);
        });
    });
}
DataServices.GetAwaitingQualityReviewCount =()=>{
    return new Promise((resolve,reject) =>{
        pnp.sp.web.lists.getByTitle(Constants.Lists.REQUESTS).items
        .select("Title","RequestStatus/Title")
        .expand("RequestStatus")
        .filter("RequestStatus/Title eq 'Awaiting Quality Review'")
        .get().then(requests=>{
            resolve(requests.length);
        },error =>{
            reject(error);
        });
    });
}
DataServices.GetAwaitingProposalApprovalCount =()=>{
    return new Promise((resolve,reject) =>{
        pnp.sp.web.lists.getByTitle(Constants.Lists.REQUESTS).items
        .select("Title","RequestStatus/Title")
        .expand("RequestStatus")
        .filter("RequestStatus/Title eq 'Awaiting Proposal Approval'")
        .get().then(requests=>{
            resolve(requests.length);
        },error =>{
            reject(error);
        });
    });
}
DataServices.GetAwaitingDOCount =()=>{
    return new Promise((resolve,reject) =>{
        pnp.sp.web.lists.getByTitle(Constants.Lists.REQUESTS).items
        .select("Title","RequestStatus/Title")
        .expand("RequestStatus")
        .filter("RequestStatus/Title eq 'Awaiting DO'")
        .get().then(requests=>{
            resolve(requests.length);
        },error =>{
            reject(error);
        });
    });
}
DataServices.GetRequestStatus =()=>{
    return new Promise((resolve,reject) =>{
        pnp.sp.web.lists.getByTitle(Constants.Lists.STATUS).items
        .select("Title","StatusName","Id")
        .get().then(status =>{
            resolve(status);
        },error => {
            reject(error);
        });
    });
}

export default DataServices;