export default function addDays(date, daysCount) {

    let result = new Date(date);
    result.setDate(result.getDate() + daysCount);
    const year = result.getFullYear();
    const month = (result.getMonth() + 1) >= 10 ? (result.getMonth() + 1) : '0' + (result.getMonth() + 1);
    const days = result.getDate() >= 10 ? result.getDate() : '0' + result.getDate();

    return `${year}-${month}-${days}`;
};

export const dateConvert = (date) => {

    const month = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря']

    const dataYear = date.slice(0, 4);
    const dataMonth = month[date.slice(5, 7) - 1];
    const dataDay = date.slice(8, 10);

    return `${dataDay} ${dataMonth} ${dataYear}`
};