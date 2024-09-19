import { minMaxCellDate } from '@types'

export const isInputDateInMinMaxRange = (
    minMaxDate: minMaxCellDate,
    firstInputCellId: number,
    secondInputCellId: number,
    firstInputDate: string,
    secondInputDate: string
) => {
    const { minDate, maxDate, minDateCellId, maxDateCellId } = minMaxDate

    const isMinFirstInput =
        minDate === '' ? true : minDateCellId <= firstInputCellId
    const isMaxFirstInput =
        maxDate === '' ? true : firstInputCellId <= maxDateCellId
    const isMinSecondInput =
        minDate === '' ? true : minDateCellId <= secondInputCellId
    const isMaxSecondInput =
        maxDate === '' ? true : secondInputCellId <= maxDateCellId
    const isFirstMinMax =
        firstInputDate === '' ? true : isMinFirstInput && isMaxFirstInput
    const isSecondMinMax =
        secondInputDate === '' ? true : isMinSecondInput && isMaxSecondInput

    return { isFirstMinMax, isSecondMinMax }
}
