import { ComponentType } from 'react'

import { WithChangeStartDay } from './types'

import { initialWeekDays, startSunday } from '@constants'

export const withChangeStartDay = <T extends WithChangeStartDay>(
    WrappedComponent: ComponentType<T>
) => {
    const handleChangeWeekDays = () => {
        const sunday = initialWeekDays.slice(initialWeekDays.length - 1)
        const withOutSunday = initialWeekDays.slice(
            0,
            initialWeekDays.length - 1
        )
        const newWeekDays = [...sunday, ...withOutSunday]
        return newWeekDays
    }
    const startDay = startSunday

    const ComponentWithChangeStartDay = (props: T) => {
        return (
            <WrappedComponent
                isChangeStartDay={true}
                handleChangeWeekDays={handleChangeWeekDays}
                startDay={startDay}
                {...props}
            />
        )
    }

    return ComponentWithChangeStartDay
}
