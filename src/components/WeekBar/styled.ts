import styled from 'styled-components'

import mixins from '@styles/mixins'

export const Container = styled.div`
    width: 100%;
    ${mixins.flexRowCenter()}
`

export const Text = styled.p`
    width: 100%;
    text-align: center;
    font-size: ${({ theme }) => mixins.fontSize(theme)};
    margin: ${({ theme }) => mixins.margin(theme, '', '0px')};
`
