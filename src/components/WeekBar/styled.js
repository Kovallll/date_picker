import styled from 'styled-components'

import mixins from '../../styles/mixins'

export const Container = styled.div`
    display: flex;
    justify-content: space-evenly;
    font-size: ${({ size, theme }) => mixins.fontSize(size, theme)};
`

export const Text = styled.p`
    margin: ${({ size, theme }) => mixins.margin(size, theme)};
`
