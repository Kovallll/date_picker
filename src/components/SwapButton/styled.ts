import styled from 'styled-components'

import mixins from '@styles/mixins'

export const Button = styled.button<{ disabled?: boolean }>`
    ${mixins.flexRowCenter()}

    ${({ theme }) => mixins.arrowScale(theme)};
    width: ${({ theme }) => theme.arrowSize.width + 'px'};
    height: ${({ theme }) => theme.arrowSize.height + 'px'};
    cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
    border: ${({ theme }) => theme.noneBorder};
    background: ${({ theme }) => theme.palette.common.white};
`
