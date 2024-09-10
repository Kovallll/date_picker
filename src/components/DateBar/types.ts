export interface DateBarProps
    extends React.ButtonHTMLAttributes<HTMLDivElement> {
    currentMonth: number
    year: number
    increment: () => void
    decrement: () => void
    handleChangeCurrentMonth: (monthId: number) => void
    handleChangeYear: (year: number) => void
}
