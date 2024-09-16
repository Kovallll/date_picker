import styled, { css } from 'styled-components'

import { SwapButtonContainer } from './types'

import mixins from '@styles/mixins'

export const Button = styled.button<SwapButtonContainer>`
    ${({ theme, disabled }) => {
        return css`
            ${mixins.flexRowCenter()}

            ${mixins.arrowScale(theme)};
            width: ${theme.arrowSize.width + 'px'};
            height: ${theme.arrowSize.height + 'px'};
            cursor: ${disabled ? 'default' : 'pointer'};
            border: ${theme.noneBorder};
            background: ${theme.palette.common.white};
        `
    }}
`

export const Image = styled.img``
