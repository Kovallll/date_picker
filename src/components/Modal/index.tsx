import { useRef } from 'react'

import { CloseButton, Container, Image, Window } from './styled'
import { ModalProps } from './types'

import { icons } from '@constants'
import { useClickOutside } from '@hooks'

export const Modal = ({ onCloseModal, children }: ModalProps) => {
    const modalRef = useRef(null)
    useClickOutside(modalRef, () => onCloseModal())

    return (
        <Container>
            <Window ref={modalRef}>
                <CloseButton onClick={onCloseModal}>
                    <Image src={icons.clearIcon} />
                </CloseButton>
                {children}
            </Window>
        </Container>
    )
}
