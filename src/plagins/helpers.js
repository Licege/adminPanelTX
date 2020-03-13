export function getProfessionNameById (professions, id) {
    return professions.find(profession => profession.id === id).profession
}

export function getCategoryNameById (categories, id) {
    return categories.find(category => category.id === id).title
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
    let hh = date.getHours();
    let mm = date.getMinutes();
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