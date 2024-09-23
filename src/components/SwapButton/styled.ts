import styled, { css } from 'styled-components'

import { DefaultButton } from '@styles/global'
import mixins from '@styles/mixins'

export const Button = styled(DefaultButton)`
    ${({ theme }) => {
        return css`
            ${mixins.arrowScale(theme)};
            width: ${theme.arrowSize.width + 'px'};
            height: ${theme.arrowSize.height + 'px'};
            border: ${theme.noneBorder};
        `
    }}
`

export const Image = styled.img``
