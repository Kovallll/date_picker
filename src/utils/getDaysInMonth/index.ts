export const getDaysInMonth = (year: number, month: number) => {
    const days = new Date(year, month, 0).getDate()
    return days
}
