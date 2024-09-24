import { minMaxCellDate } from '/src/types'

export interface DateBarProps
    extends React.ButtonHTMLAttributes<HTMLDivElement> {
    minMaxDate?: minMaxCellDate
}
