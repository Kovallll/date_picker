import styled from 'styled-components'

import mixins from '@styles/mixins'

export const Container = styled.div`
    ${mixins.flexRowSB()}

    width: ${({ theme }) => theme.fullWidth};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    margin: ${({ theme }) => mixins.margin(theme, '', '0px')};
    font-size: ${({ theme }) => mixins.fontSize(theme)};
`

export const Month = styled.div`
    ${mixins.flexRowCenter()}
`

export const Image = styled.div`
    ${mixins.flexRowCenter()}

    width: ${({ theme }) => theme.arrowSize.width}
    height: ${({ theme }) => theme.arrowSize.height}
    transform: scale(${({ theme }) => mixins.arrowScale(theme)});
`
