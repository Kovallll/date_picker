export interface SwapButtonProps {
    onClick: () => void
    disabled?: boolean
    src: string
    alt: string
}

export type SwapButtonContainer = Pick<SwapButtonProps, 'disabled'>
