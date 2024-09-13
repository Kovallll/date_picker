import { Button, Image } from './styled'
import { SwapButtonProps } from './types'

export const SwapButton = ({
    onClick,
    disabled,
    src,
    alt,
}: SwapButtonProps) => {
    return (
        <Button onClick={onClick} disabled={disabled}>
            <Image src={src} aria-hidden="true" alt={alt} />
        </Button>
    )
}
