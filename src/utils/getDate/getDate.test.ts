import {
    getDateFormat,
    getHolidaysData,
    getMonthAndDaysByWeek,
    getMonthByWeek,
    getValidInputCell,
} from '.'

describe('testing utils', () => {
    test('getDateFormat', () => {
        expect(getDateFormat(2024, 10, 1)).toBe('01/10/2024')
        expect(getDateFormat(2024, 10, 31)).toBe('31/10/2024')
        expect(getDateFormat(2024, 10, 32)).toBe('01/11/2024')
    })

    test('getHolidaysData', () => {
        expect(getHolidaysData([])).toStrictEqual([])
        expect(
            getHolidaysData([{ date: '02/01/2024', holiday: '' }])
        ).toStrictEqual([{ holiday: '', id: '885032' }])
        expect(
            getHolidaysData([{ date: '03/01/2024', holiday: 'test' }])
        ).toStrictEqual([{ holiday: 'test', id: '885033' }])
        expect(
            getHolidaysData([{ date: '02/123/2024', holiday: '' }])
        ).toStrictEqual([undefined])
    })

    test('getValidInputCell', () => {
        expect(getValidInputCell('01/01/2024', '12/02/2023')).toStrictEqual({
            isValidDate: true,
            inputCellId: 885031,
            inputYear: 2024,
            inputMonth: 1,
            inputDay: 1,
        })
        expect(getValidInputCell('12//2023', '12/02/2023')).toStrictEqual({
            isValidDate: false,
            inputCellId: 884645,
            inputYear: 2023,
            inputMonth: 2,
            inputDay: 12,
        })
    })

    test('getMonthAndDaysByWeek', () => {
        expect(getMonthAndDaysByWeek(2024, 1, 0)).toStrictEqual({
            monthStart: 1,
            monthEnd: 1,
            days: [1, 2, 3, 4, 5, 6, 7],
        })
        expect(getMonthAndDaysByWeek(2024, 9, 0)).toStrictEqual({
            monthStart: 2,
            monthEnd: 3,
            days: [26, 27, 28, 29, 1, 2, 3],
        })
    })

    test('getMonthByWeek', () => {
        expect(getMonthByWeek(2024, 1)).toBe(1)
        expect(getMonthByWeek(2024, 10)).toBe(3)
        expect(getMonthByWeek(2024, 52)).toBe(12)
    })
})
