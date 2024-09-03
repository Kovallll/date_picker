import styled from 'styled-components'

import mixins from '@styles/mixins'

export const Container = styled.section`
    ${mixins.flexColumnCenter()}

    font-size: ${({ theme }) => mixins.fontSize(theme)};
    padding: ${({ theme }) => mixins.padding(theme)};
    border: ${({ theme }) => mixins.calendarBorder(theme)};
    border-radius: ${({ theme }) => mixins.calendarBorderRadius(theme)};
    width: ${({ theme }) => mixins.calendarWidth(theme)};
`
