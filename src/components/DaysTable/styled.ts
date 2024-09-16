import styled from 'styled-components'

import mixins from '@styles/mixins'

export const Article = styled.article`
    ${mixins.flexColumnCenter()}

    width: ${({ theme }) => theme.fullSize};
    align-items: unset;
`
