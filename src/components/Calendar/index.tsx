import { createContext } from 'react'
import { ThemeProvider } from 'styled-components'

import { CalendarProps } from './types'

import { defaultProps } from '@constants'
import { withRange } from '@decorators'
import calendarCreater from '@service'
import GlobalStyle from '@styles/global'
import theme from '@styles/theme'

export const InputContext = createContext(false)

export const Calendar = (props: CalendarProps) => {
    const {
        initialYear = defaultProps.defaultYear,
        initialMonth = defaultProps.defaultMonth,
        isWithInput = false,
        isWithRange,
    } = props

    const calendar = new calendarCreater()
    if (isWithRange) {
        calendar.addFeature(withRange)
    }

    const Calendar = calendar.getCalendar()
    return (
        <ThemeProvider theme={theme}>
            <InputContext.Provider value={isWithInput}>
                <GlobalStyle />
                <Calendar
                    initialYear={initialYear}
                    initialMonth={initialMonth}
                />
            </InputContext.Provider>
        </ThemeProvider>
    )
}
