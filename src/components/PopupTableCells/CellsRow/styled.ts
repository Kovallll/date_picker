import styled from 'styled-components'

import mixins from '@styles/mixins'

export const Container = styled.div`
    ${mixins.flexRowCenter}

    width: ${({ theme }) =>
        mixins.elementWidth(theme, theme.inputStyles, 'width')};
`
