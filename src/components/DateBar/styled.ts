import styled from 'styled-components'

import mixins from '@styles/mixins'

export const Container = styled.div`
    ${mixins.flexRowSB()}

    width: ${({ theme }) => theme.fullSize};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    margin: ${({ theme }) => mixins.margin(theme, '', '0px')};
    font-size: ${({ theme }) => mixins.fontSize(theme)};
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
