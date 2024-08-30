import styled from 'styled-components'

import mixins from '@styles/mixins'

export const Container = styled.article`
    width: 100%;
    ${mixins.flexColumnCenter()}
    align-items: unset;
`

export const WeekRow = styled.div`
    ${mixins.flexRowCenter()}
`
