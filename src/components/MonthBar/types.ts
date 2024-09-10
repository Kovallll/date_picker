export interface MonthBarProps
    extends React.ButtonHTMLAttributes<HTMLDivElement> {
    currentMonth: number
    year: number
    increment: () => void
    decrement: () => void
}
