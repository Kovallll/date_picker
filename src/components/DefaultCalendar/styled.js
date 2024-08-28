import styled from 'styled-components'

import mixins from '../../styles/mixins'

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    font-size: ${({ size, theme }) => mixins.fontSize(size, theme)};
    padding: ${({ size, theme }) => mixins.padding(size, theme)};
    border: ${({ size, theme }) => mixins.calendarBorder(size, theme)};
    border-radius: ${({ size, theme }) =>
        mixins.calendarBorderRadius(size, theme)};
    width: ${({ size, theme }) => mixins.calendarWidth(size, theme)};
    height: ${({ size, theme }) => mixins.calendarHeight(size, theme)};
`

export const DateBlock = styled.div`
    display: flex;
`
