import { ThemeProvider } from 'styled-components'

import { WeekRow } from '.'

import '@testing-library/jest-dom'
import { initialWeekDays } from '@constants'
import theme from '@styles/theme'
import { render, screen } from '@testing-library/react'

test('test WeekRow', async () => {
    const mockFn = jest.fn()
    render(
        <ThemeProvider theme={theme}>
            <WeekRow
                activeCellId=""
                data={[{ id: '1', day: 1 }]}
                firstDayIndex={1}
                handleClickDay={mockFn}
                range={{ start: 1, end: 1 }}
                startDay={1}
                weekDays={initialWeekDays}
            />
        </ThemeProvider>
    )

    screen.getByText('1')
})
