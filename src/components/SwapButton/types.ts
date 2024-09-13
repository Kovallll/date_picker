export interface SwapButtonProps {
    onClick: () => void
    disabled?: boolean
    children: React.ReactNode
}

export type SwapButtonContainer = Pick<SwapButtonProps, 'disabled'>
