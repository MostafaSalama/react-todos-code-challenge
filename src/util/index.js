/**
 * format the time in like this style "10/13/2020, 1:58:02 AM"
 * @param date {Date}
 * @returns {string}
 */
export function formatDate(date) {
    return date.toLocaleString() ;
}
