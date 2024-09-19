import styled from 'styled-components'

import mixins from '@styles/mixins'

export const Container = styled.div`
    ${mixins.flexColumnCenter}

    width: ${({ theme }) =>
        mixins.elementWidth(theme, theme.calendarStyles, 'popupWidth')};
`
