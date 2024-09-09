import styled from 'styled-components'

import mixins from '@styles/mixins'

export const Container = styled.div`
    ${mixins.flexRowCenter()}

    width: ${({ theme }) => theme.fullSize};
`

export const Text = styled.p`
    width: ${({ theme }) => theme.fullSize};
    text-align: center;
    font-size: ${({ theme }) => mixins.fontSize(theme)};
    margin: ${({ theme }) => mixins.margin(theme, '', '0px')};
`
