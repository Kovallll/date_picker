import {
    getAllCellsPrevMonths,
    getCalendarCells,
    getCellsInMonth,
    getCellsNextMonth,
    getCellsPrevMonth,
    getCountCellsPrevYears,
    getDaysInMonth,
    getInitialCells,
} from '.'

describe('testing utils', () => {
    test('getCountCellsPrevYears', () => {
        expect(getCountCellsPrevYears(2024)).toBe(885031)
        expect(getCountCellsPrevYears(2023)).toBe(884590)
        expect(getCountCellsPrevYears(0)).toBe(0)
        expect(getCountCellsPrevYears(-1)).toBe(0)
    })

    test('getAllCellsPrevMonths', () => {
        expect(getAllCellsPrevMonths(2024, 0)).toBe(0)
        expect(getAllCellsPrevMonths(2024, 1)).toBe(35)
        expect(getAllCellsPrevMonths(2024, 2)).toBe(70)
        expect(getAllCellsPrevMonths(2023, 1)).toBe(42)
        expect(getAllCellsPrevMonths(0, 1)).toBe(35)
        expect(getAllCellsPrevMonths(0, -1)).toBe(0)
        expect(getAllCellsPrevMonths(-1, -1)).toBe(0)
    })

    test('getCellsPrevMonth', () => {
        expect(getCellsPrevMonth(2024, 0)).toBe(0)
        expect(getCellsPrevMonth(2024, 1)).toBe(3)
        expect(getCellsPrevMonth(2024, 2)).toBe(4)
        expect(getCellsPrevMonth(2024, 11)).toBe(6)
        expect(getCellsPrevMonth(0, 0)).toBe(0)
    })

    test('getCellsNextMonth', () => {
        expect(getCellsNextMonth(2024, 0)).toBe(4)
        expect(getCellsNextMonth(2024, 1)).toBe(3)
        expect(getCellsNextMonth(2024, 2)).toBe(0)
        expect(getCellsNextMonth(2024, 11)).toBe(5)
        expect(getCellsNextMonth(0, 0)).toBe(6)
    })

    test('getCellsInMonth', () => {
        expect(getCellsInMonth(2024, 0)).toBe(35)
        expect(getCellsInMonth(2023, 0)).toBe(42)
        expect(getCellsInMonth(0, 1)).toBe(35)
        expect(getCellsInMonth(-1, -1)).toBe(35)
    })

    test('getDaysInMonth', () => {
        expect(getDaysInMonth(2024, 0)).toBe(31)
        expect(getDaysInMonth(2024, 1)).toBe(29)
        expect(getDaysInMonth(2024, 2)).toBe(31)
        expect(getDaysInMonth(-1, 0)).toBe(31)
    })

    test('getInitialCells', () => {
        expect(getInitialCells(6)).toBe(31)
        expect(getInitialCells(3, ['a', 'b', 'c'])).toBe(29)
        expect(getInitialCells(3, ['a', 'b', 'c'], 2)).toBe(31)
    })

    test('getCalendarCells', () => {
        expect(getCalendarCells(2024, 0, 0)).toBe(31)
        expect(getCalendarCells(2024, 0, 1)).toBe(29)
        expect(getCalendarCells(2023, 0, 0)).toBe(31)
    })
})
