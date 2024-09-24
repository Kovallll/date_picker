import { useRef } from 'react'
import { createPortal } from 'react-dom'

import { closeAltText } from './config'
import { CloseButton, Container, Image, Window } from './styled'
import { ModalProps } from './types'

import { icons } from '@constants'
import { useClickOutside } from '@hooks'

export const Modal = ({ onCloseModal, children }: ModalProps) => {
    const modalRef = useRef(null)
    useClickOutside(modalRef, () => onCloseModal())

    return createPortal(
        <Container>
            <Window ref={modalRef}>
                <CloseButton onClick={onCloseModal}>
                    <Image src={icons.clearIcon} alt={closeAltText} />
                </CloseButton>
                {children}
            </Window>
        </Container>,
        document.body
    )
}
