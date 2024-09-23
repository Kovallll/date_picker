import { ThemeProvider } from 'styled-components'

import { Modal } from '.'

import '@testing-library/jest-dom'
import theme from '@styles/theme'
import { render } from '@testing-library/react'

test('test DefaultCalendar', async () => {
    const mockFn = jest.fn()
    render(
        <ThemeProvider theme={theme}>
            <Modal onCloseModal={mockFn}>
                <></>
            </Modal>
        </ThemeProvider>
    )
})
