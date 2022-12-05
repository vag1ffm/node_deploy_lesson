const monthNumber = {
    '01': 'January',
    '02': 'February',
    '03': 'March',
    '04': 'April',
    '05': 'May',
    '06': 'June',
    '07': 'July',
    '08': 'August',
    '09': 'September',
    '10': 'October',
    '11': 'November',
    '12': 'December',

};

export function dataConvert(data) {
    let list = data.split('-')
    let day = list[2]
    let month = monthNumber[list[1]]
    return `${day} ${month}`
}