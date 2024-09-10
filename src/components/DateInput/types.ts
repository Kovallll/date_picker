export interface DateInputProps {
    handleChangeError: (error: string) => void
    handleKeyboardChange: (isKeyboard: boolean) => void
    handleFocus: () => void
    handleOpenCalendar: () => void
    handleChangeDateInput: (date: string) => void
    date: string
    placeholder?: string
    isDisabled?: boolean
}
