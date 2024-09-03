import { IRange, MonthCellsData } from '@types'

export interface DefaultCalendarProps
    extends React.ButtonHTMLAttributes<HTMLDivElement> {
    countOfRows?: number
    initialYear?: number
    initialMonth?: number
    isWithRange?: boolean
    onClickWithRange?: (
        ctrl: boolean,
        cellId: number,
        range: IRange,
        monthRange: MonthCellsData[]
    ) => { data: MonthCellsData[]; range: IRange }
}
