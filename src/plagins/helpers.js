import {serverUrl} from "../api/api";

export function getProfessionNameById (professions, id) {
    return professions.find(profession => profession.id === id).profession
}

export function getTitleById (arr, id) {
    return arr.find(item => item._id === id).title
}

const arrMonth = [
    'Января',
    'Февраля',
    'Марта',
    'Апреля',
    'Мая',
    'Июня',
    'Июля',
    'Августа',
    'Сентября',
    'Октября',
    'Ноября',
    'Декабря'
];

export function tsToDate (timestamp, type) {
    let date = new Date(timestamp);
    let hh = date.getHours(); hh = hh < 10 ? '0' + hh : hh;
    let mm = date.getMinutes(); mm = mm < 10 ? '0' + mm : mm;
    let dd = date.getDate(); dd = dd < 10 ? '0'+ dd : dd;
    let MM = date.getMonth() + 1; MM = MM < 10 ? '0' + MM : MM;
    let YYYY = date.getFullYear();
    let MMMM = arrMonth[date.getMonth()];

    switch (type) {
        case "hh:mm dd MMMM YYYY":
            return hh + ':' + mm + ' ' + dd + ' ' + MMMM + ' ' + YYYY;
        case "hh:mm dd:MM:YYYY":
            return hh + ':' + mm + ' ' + dd + ':' + MM + ':' + YYYY;
        case "dd MMMM":
            return dd + ' ' + MMMM;
        default:
            return dd + ':' + MM + ':' + YYYY;
    }
}

export function toDate(date, type) {
    let data = new Date(date)
    let hh = date.getHours(); hh = hh < 10 ? '0' + hh : hh;
    let mm = date.getMinutes(); mm = mm < 10 ? '0' + mm : mm;
    let dd = date.getDate(); dd = dd < 10 ? '0'+ dd : dd;
    let MM = date.getMonth() + 1; MM = MM < 10 ? '0' + MM : MM;
    let YYYY = date.getFullYear();
    let MMMM = arrMonth[date.getMonth()];


    console.log(data.getHours())
    return date
}

export function cropText(text, limit = 100) {
    if (text.length > limit) {
        text = text.slice(0, limit) + '...'
    }
    return text
}

export function fullLink(link) {
    return serverUrl + link.replace('\\', '/')
}