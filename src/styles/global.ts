import styled, { createGlobalStyle, css } from 'styled-components'

import mixins from './mixins'

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    body {
        font-family: 'Arial', sans-serif;
    }
`

interface DefaultButtonProps {
    disabled?: boolean
}

export const DefaultButton = styled.button<DefaultButtonProps>`
    ${({ theme, disabled }) => {
        return css`
            ${mixins.flexRowCenter()}

            cursor: ${disabled ? 'default' : 'pointer'};
            background: ${theme.palette.common.white};
        `
    }}
`

export default GlobalStyle
