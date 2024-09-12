import { Button } from './styled'
import { SwapButtonProps } from './types'

export const SwapButton = ({
    onClick,
    disabled,
    children,
}: SwapButtonProps) => {
    return (
        <Button onClick={onClick} disabled={disabled}>
            {children}
        </Button>
    )
}
