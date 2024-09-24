export interface ModalProps {
    children: React.ReactNode
    onCloseModal: () => void
    isWithRange?: boolean
}

export interface WindowProps {
    $isWithRange: boolean
}
