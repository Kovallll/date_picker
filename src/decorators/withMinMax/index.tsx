import { ComponentType } from 'react'

import { WithMinMax } from './types'

import { minMaxDate } from '@types'
import { getValidInputCell } from '@utils'

export const withMinMax = <T extends WithMinMax>(
    WrappedComponent: ComponentType<T>,
    minMaxDate: minMaxDate | undefined
) => {
    const { isValidDate: isValidMinDate, inputCellId: minDateCellId } =
        getValidInputCell(minMaxDate?.minDate ?? '')
    const { isValidDate: isValidMaxDate, inputCellId: maxDateCellId } =
        getValidInputCell(minMaxDate?.maxDate ?? '')

    const newMinMaxDate = {
        minDate: minMaxDate?.minDate,
        maxDate: minMaxDate?.maxDate,
        minDateCellId,
        maxDateCellId,
    }

    if (!isValidMinDate) {
        newMinMaxDate.minDate = ''
        newMinMaxDate.minDateCellId = 0
    }
    if (!isValidMaxDate) {
        newMinMaxDate.maxDate = ''
        newMinMaxDate.maxDateCellId = 0
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
