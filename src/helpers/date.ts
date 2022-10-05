export function postDateString(date: Date) {
    const [day, month, year] = date.toUTCString().split(' ').slice(1, 4);

    return `${month} ${day}, ${year}`;
}