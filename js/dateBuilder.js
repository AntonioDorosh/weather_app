export const dataBuilder = (d) => {
    const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ];

    const days = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
    ];

    const day = days[d.getDay()];
    const month = months[d.getMonth()];
    const year = d.getFullYear();
    const date = d.getDate();

    return `${day} ${date} ${month} ${year}`
}