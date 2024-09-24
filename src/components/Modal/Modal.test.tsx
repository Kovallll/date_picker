import { useState } from 'react'
import { ThemeProvider } from 'styled-components'

import { Modal } from '.'

import '@testing-library/jest-dom'
import theme from '@styles/theme'
import { fireEvent, render, screen } from '@testing-library/react'

const TestModal = () => {
    const [isOpen, setIsOpen] = useState(true)

    const onClick = () => {
        setIsOpen((prev) => !prev)
    }

    return (
        <>
            <div>Outside Modal</div>
            <Modal onCloseModal={onClick}>
                <>
                    <div>In Modal</div>
                    {isOpen && <div>Open</div>}
                </>
            </Modal>
        </>
    )
}

test('test Modal outside click', () => {
    render(
        <ThemeProvider theme={theme}>
            <TestModal />
        </ThemeProvider>
    )
    const elementInModal = screen.getByText('In Modal')
    const elementOutsideModal = screen.getByText('Outside Modal')
    const openElement = screen.queryByText('Open')
    expect(openElement).toBeInTheDocument()

    fireEvent.click(elementInModal)
    expect(openElement).toBeInTheDocument()

    fireEvent.click(elementOutsideModal)
    expect(openElement).not.toBeInTheDocument()
})

test('test Modal close button click', () => {
    render(
        <ThemeProvider theme={theme}>
            <TestModal />
        </ThemeProvider>
    )
    const openElement = screen.queryByText('Open')
    expect(openElement).toBeInTheDocument()

    const closeButton = screen.getByAltText('closeIcon')
        .parentElement as HTMLButtonElement
    fireEvent.click(closeButton)
    expect(openElement).not.toBeInTheDocument()
})
