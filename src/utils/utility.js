import moment from "moment";

function formatedDate(dateString){
    return moment(dateString).format("MMM DD");
}

function timeAgo(dateString){
    return moment(dateString).fromNow();
}

export const utilityFnc = {
    formatedDate,
    timeAgo
}