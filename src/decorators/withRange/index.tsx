import { ComponentType } from 'react'

import { WithRangeProps } from './types'

import { Range } from '@types'

export const withRange = <T extends WithRangeProps>(
    WrappedComponent: ComponentType<T>
) => {
    const setWithRangeData = (
        ctrl: boolean,
        cellId: number,
        range: Range,
        isSecondInput?: boolean,
        inputDate?: string,
        prevFirstDate?: string,
        prevSecondDate?: string
    ) => {
        const changeStartRange = { start: cellId, end: range.end }

        const changeEndRange = { start: range.start, end: cellId }

        const noCtrlReverseRange = { start: range.end, end: cellId }

        const ctrlReverseRange = { start: cellId, end: range.start }

        const changeStartRangeInput = { start: inputDate, end: prevSecondDate }

        const changeEndRangeInput = { start: prevFirstDate, end: inputDate }

        const noCtrlReverseRangeInput = {
            start: prevSecondDate,
            end: inputDate,
        }

        const ctrlReverseRangeInput = { start: inputDate, end: prevFirstDate }

        if (ctrl && (range.start ?? cellId) > cellId) {
            return {
                range: ctrlReverseRange,
                inputRange: ctrlReverseRangeInput,
            }
        } else if (ctrl && (range.end ?? cellId) > cellId) {
            return {
                range: changeEndRange,
                inputRange: changeEndRangeInput,
            }
        } else if (
            !ctrl &&
            ((range.end ?? cellId) < cellId || isSecondInput) &&
            range.start !== null
        ) {
            return {
                range: changeEndRange,
                inputRange: changeEndRangeInput,
            }
        } else if (!ctrl && (range.end ?? cellId) > cellId) {
            return {
                range: changeStartRange,
                inputRange: changeStartRangeInput,
            }
        } else {
            return {
                range: noCtrlReverseRange,
                inputRange: noCtrlReverseRangeInput,
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
