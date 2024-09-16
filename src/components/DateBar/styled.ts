import styled, { css } from 'styled-components'

import mixins from '@styles/mixins'

export const Container = styled.div`
    ${({ theme }) => {
        return css`
            ${mixins.flexRowSB()}

            width: ${theme.fullSize};
            font-weight: ${theme.fontWeight.bold};
            margin: ${mixins.margin(theme, '', '0px')};
            font-size: ${mixins.fontSize(theme)};
        `
    }}
`

export const DateBarBlock = styled.div`
    ${mixins.flexRowCenter()}
    position: relative;
`

export const Month = styled.p`
    cursor: pointer;
    margin-right: ${({ theme }) => theme.spaces.sm + 'px'};
`

export const Year = styled.p`
    cursor: pointer;
`
