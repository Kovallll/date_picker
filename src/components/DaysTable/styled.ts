import styled from 'styled-components'

import mixins from '@styles/mixins'

export const Container = styled.article`
    ${mixins.flexColumnCenter()}

    width: ${({ theme }) => theme.fullSize};
    align-items: unset;
`
