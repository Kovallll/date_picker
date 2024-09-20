import { ThemeProvider } from 'styled-components'

import DefaultCalendar from '.'

import '@testing-library/jest-dom'
import theme from '@styles/theme'
import { render, screen } from '@testing-library/react'

test('test DefaultCalendar', async () => {
    render(
        <ThemeProvider theme={theme}>
            <DefaultCalendar />
        </ThemeProvider>
    )
    screen.getAllByText('1')
})
