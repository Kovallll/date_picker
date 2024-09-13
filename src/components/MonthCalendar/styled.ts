import styled, { css } from 'styled-components'

export const Section = styled.section`
    ${({ theme }) => {
        return css`
            background-color: ${theme.palette.common.white};
            position: absolute;
            top: ${theme.popupStyles.top + 'px'};
            z-index: 10;
        `
    }}
`
