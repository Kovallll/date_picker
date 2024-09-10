import { useCallback, useState } from 'react'

export const useInputDate = () => {
    const [firstInputDate, setFirstInputDate] = useState('')
    const [secondInputDate, setSecondInputDate] = useState('')

    const handleChangeFirstDateInput = useCallback((value: string) => {
        setFirstInputDate(value)
    }, [])

    const handleChangeSecondDateInput = useCallback((value: string) => {
        setSecondInputDate(value)
    }, [])

    return {
        firstInputDate,
        handleChangeFirstDateInput,
        secondInputDate,
        handleChangeSecondDateInput,
    }
}
