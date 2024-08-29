import styled from 'styled-components'

import mixins from '@styles/mixins'

export const Container = styled.article`
    ${mixins.flexColumnCenter()}

    width: ${({ theme }) => theme.fullWidth}
    align-items: unset;
`

export const WeekRow = styled.div`
    ${mixins.flexRowCenter()}
`
