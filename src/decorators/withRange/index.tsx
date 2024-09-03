import { ComponentType } from 'react'

import { WithRangeProps } from './types'

import { IRange, MonthCellsData } from '@types'

export const withRange = <T extends WithRangeProps>(
    WrappedComponent: ComponentType<T>
) => {
    const setActualMonthRangeArray = (
        monthRange: MonthCellsData[],
        range: IRange
    ) => {
        const newRangeDays = monthRange.map(({ id: monthId, data }) => {
            const updatedData = data.map((_, index) => {
                if (
                    Number(monthId) + index > range.start &&
                    Number(monthId) + index < range.end
                ) {
                    return true
                } else return false
            })
            return { id: monthId, data: updatedData }
        })
        return newRangeDays
    }

    const setWithRangeData = (
        ctrl: boolean,
        cellId: number,
        range: IRange,
        monthRange: MonthCellsData[]
    ) => {
        const changeStartRange = { start: cellId, end: range.end }
        const changeEndRange = { start: range.start, end: cellId }
        const noCtrlReverseRange = { start: range.end, end: cellId }
        const ctrlReverseRange = { start: cellId, end: range.start }

        if (ctrl && range.start > cellId) {
            return {
                data: setActualMonthRangeArray(monthRange, ctrlReverseRange),
                range: ctrlReverseRange,
            }
        } else if (ctrl && range.end > cellId) {
            return {
                data: setActualMonthRangeArray(monthRange, changeEndRange),
                range: changeEndRange,
            }
        } else if (ctrl && range.end < cellId) {
            return {
                data: setActualMonthRangeArray(monthRange, changeEndRange),
                range: changeEndRange,
            }
        } else if (!ctrl && range.end > cellId) {
            return {
                data: setActualMonthRangeArray(monthRange, changeStartRange),
                range: changeStartRange,
            }
        } else {
            return {
                data: setActualMonthRangeArray(monthRange, noCtrlReverseRange),
                range: noCtrlReverseRange,
            }
        }
    }

    const ComponentWithRange = (props: T) => {
        return (
            <WrappedComponent
                {...props}
                isWithRange={true}
                onClickWithRange={setWithRangeData}
            />
        )
    }

    return ComponentWithRange
}
