import { ThemeProvider } from 'styled-components'

import PopupTableCells from '.'

import '@testing-library/jest-dom'
import theme from '@styles/theme'
import { render } from '@testing-library/react'

test('test PopupTableCells', async () => {
    const mockFn = jest.fn()
    render(
        <ThemeProvider theme={theme}>
            <PopupTableCells
                activeId={1}
                changeType="month"
                fillData={[]}
                handleSelectElement={mockFn}
            />
        </ThemeProvider>
    )
})
