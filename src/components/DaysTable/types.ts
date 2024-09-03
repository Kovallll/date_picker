import { IRange, MonthCellsData, StartDay } from '@types'

export interface DaysTableProps
    extends React.ButtonHTMLAttributes<HTMLDivElement> {
    currentMonth: number
    year: number
    startDay: StartDay
    isWithRange?: boolean
    onClickWithRange?: (
        ctrl: boolean,
        cellId: number,
        range: IRange,
        monthRange: MonthCellsData[]
    ) => { data: MonthCellsData[]; range: IRange }
}
