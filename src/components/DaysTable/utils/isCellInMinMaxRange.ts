import { minMaxCellDate } from '@types'

export const isCellInMinMaxRange = (
    cellId: number,
    minMaxDate: minMaxCellDate
) => {
    const { minDate, maxDate, minDateCellId, maxDateCellId } = minMaxDate
    const isMinValid =
        !minMaxDate || minDate === '' ? true : minDateCellId <= cellId
    const isMaxValid =
        !minMaxDate || maxDate === '' ? true : cellId <= maxDateCellId
    const isMinMaxValid = isMinValid && isMaxValid

    return isMinMaxValid
}
