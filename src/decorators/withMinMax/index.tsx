import { ComponentType } from 'react'

import { WithMinMax } from './types'

import { defaultMinMaxDate } from '@constants'
import { minMaxDate } from '@types'
import { getValidInputCell } from '@utils'

export const withMinMax = <T extends WithMinMax>(
    WrappedComponent: ComponentType<T>,
    minMaxDate: minMaxDate | undefined
) => {
    const {
        isValidDate: isValidMinDate,
        inputCellId: minDateCellId,
        inputMonth: minMonth,
        inputYear: minYear,
    } = getValidInputCell(minMaxDate?.minDate ?? '')
    const {
        isValidDate: isValidMaxDate,
        inputCellId: maxDateCellId,
        inputMonth: maxMonth,
        inputYear: maxYear,
    } = getValidInputCell(minMaxDate?.maxDate ?? '')

    let newMinMaxDate = {
        minDate: minMaxDate?.minDate ?? '',
        maxDate: minMaxDate?.maxDate ?? '',
        minDateCellId,
        maxDateCellId,
        minMonth,
        maxMonth,
        minYear,
        maxYear,
    }

    if (!isValidMinDate) {
        newMinMaxDate.minDate = ''
        newMinMaxDate.minDateCellId = 0
    }
    if (!isValidMaxDate) {
        newMinMaxDate.maxDate = ''
        newMinMaxDate.maxDateCellId = 0
    }
    if (newMinMaxDate.maxDate < newMinMaxDate.minDate) {
        newMinMaxDate = defaultMinMaxDate
    }
    const ComponentWithChangeStartDay = (props: T) => {
        return (
            <WrappedComponent
                isWithMinMax={true}
                minMaxDate={newMinMaxDate}
                {...props}
            />
        )
    }

    return ComponentWithChangeStartDay
}
