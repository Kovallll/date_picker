import styled, { css } from 'styled-components'

import mixins from '@styles/mixins'

export const Container = styled.div`
    ${mixins.flexColumnCenter()}

    width: ${({ theme }) => theme.fullSize};
    position: relative;
    z-index: 9;
`

export const Week = styled.div`
    ${mixins.flexRowCenter()}

    width: ${({ theme }) => theme.fullSize};
    cursor: pointer;
`

export const Text = styled.p`
    ${({ theme }) => {
        return css`
            width: ${theme.fullSize};
            text-align: center;
            font-size: ${mixins.fontSize(theme)};
            margin: ${mixins.margin(theme, '', '0px')};
        `
    }}
`
