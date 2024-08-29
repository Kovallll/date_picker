import styled from 'styled-components'

import mixins from '@styles/mixins'

export const Container = styled.div`
    width: 100%;
    ${mixins.flexRowSB()}
    font-weight: 700;
    margin: 8px 0px;
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
