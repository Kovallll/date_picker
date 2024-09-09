import { useState } from 'react'

export const useInputDate = () => {
    const [firstInputDate, setFirstInputDate] = useState('')
    const [secondInputDate, setSecondInputDate] = useState('')

    const handleChangeFirstDateInput = (value: string) => {
        setFirstInputDate(value)
    }

    const handleChangeSecondDateInput = (value: string) => {
        setSecondInputDate(value)
    }

    return {
        firstInputDate,
        handleChangeFirstDateInput,
        secondInputDate,
        handleChangeSecondDateInput,
    }
}
