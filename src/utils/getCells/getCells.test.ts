import {
    getAllCellsPrevMonths,
    getCalendarCells,
    getCellsInMonth,
    getCellsNextMonth,
    getCellsPrevMonth,
    getCountCellsPrevYears,
    getDaysInMonth,
    getInitialCells,
    getPopupTableCells,
} from '.'
import { getCalendarCells202400 } from './mockData'

describe('testing getCell utils', () => {
    test('getCountCellsPrevYears cases', () => {
        expect(getCountCellsPrevYears(2024)).toBe(885031)
        expect(getCountCellsPrevYears(2023)).toBe(884590)
        expect(getCountCellsPrevYears(0)).toBe(0)
        expect(getCountCellsPrevYears(-1)).toBe(0)
    })

    test('getAllCellsPrevMonths cases', () => {
        expect(getAllCellsPrevMonths(2024, 0)).toBe(0)
        expect(getAllCellsPrevMonths(2024, 1)).toBe(35)
        expect(getAllCellsPrevMonths(2024, 2)).toBe(70)
        expect(getAllCellsPrevMonths(2023, 1)).toBe(42)
        expect(getAllCellsPrevMonths(0, 1)).toBe(35)
        expect(getAllCellsPrevMonths(0, -1)).toBe(0)
        expect(getAllCellsPrevMonths(-1, -1)).toBe(0)
    })

    test('getCellsPrevMonth cases', () => {
        expect(getCellsPrevMonth(2024, 0)).toBe(0)
        expect(getCellsPrevMonth(2024, 1)).toBe(3)
        expect(getCellsPrevMonth(2024, 2)).toBe(4)
        expect(getCellsPrevMonth(2024, 11)).toBe(6)
        expect(getCellsPrevMonth(0, 0)).toBe(0)
    })

    test('getCellsNextMonth cases', () => {
        expect(getCellsNextMonth(2024, 0)).toBe(4)
        expect(getCellsNextMonth(2024, 1)).toBe(3)
        expect(getCellsNextMonth(2024, 2)).toBe(0)
        expect(getCellsNextMonth(2024, 11)).toBe(5)
        expect(getCellsNextMonth(0, 0)).toBe(4)
    })

    test('getCellsInMonth cases', () => {
        expect(getCellsInMonth(2024, 0)).toBe(35)
        expect(getCellsInMonth(2023, 0)).toBe(42)
        expect(getCellsInMonth(0, 1)).toBe(35)
        expect(getCellsInMonth(-1, -1)).toBe(35)
    })

    test('getDaysInMonth cases', () => {
        expect(getDaysInMonth(2024, 1)).toBe(31)
        expect(getDaysInMonth(2024, 2)).toBe(29)
        expect(getDaysInMonth(-1, 0)).toBe(31)
    })

    test('getInitialCells cases', () => {
        expect(getInitialCells(2)).toStrictEqual([
            { data: [], id: '1' },
            { data: [], id: '2' },
        ])
        expect(getInitialCells(3, ['a', 'b', 'c'])).toStrictEqual([
            { data: 'a', id: '1' },
            { data: 'b', id: '2' },
            { data: 'c', id: '3' },
        ])
        expect(getInitialCells(3, ['a', 'b', 'c'], 2)).toStrictEqual([
            { data: 'c', id: '3' },
            { data: [], id: '4' },
            { data: [], id: '5' },
        ])
    })

    test('getCalendarCells cases', () => {
        expect(getCalendarCells(2024, 0, 0)).toStrictEqual(
            getCalendarCells202400
        )
    })

    test('getPopupTableCells cases', () => {
        expect(getPopupTableCells(0, 0)).toStrictEqual([])
        expect(getPopupTableCells(2, 0)).toStrictEqual(['0', '1'])
    })
})
