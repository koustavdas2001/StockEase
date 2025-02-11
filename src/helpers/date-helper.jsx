export const convertDateUnixTimestamp = (date) => {
    return Math.floor(date.getTime() / 1000);
}

export const convertDateUnixTimestampToDate = (unixTimestamp) => {
    const milliseconds = unixTimestamp * 1000;
    return new Date(milliseconds).toLocaleDateString();
}

export const createDate = (date, days, weeks, months, years) => {
    let newDate = new Date(date);
    newDate.setDate(newDate.getDate() + days + 7 * weeks);
    newDate.setMonth(newDate.getMonth() + months);
    newDate.setFullYear(newDate.getFullYear() + years);
}