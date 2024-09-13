import styled, { css } from 'styled-components'

import mixins from '@styles/mixins'

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

export const ButtonsWrap = styled.div`
    ${mixins.flexRowCenter}

    justify-content: space-between;
    margin-bottom: ${({ theme }) => theme.spaces.sm + 'px'};
`
