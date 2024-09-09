import styled from 'styled-components'

import { CalendarContainerProps } from './types'

import mixins from '@styles/mixins'

export const Container = styled.section<CalendarContainerProps>`
    ${mixins.flexColumnCenter()}

    box-sizing: border-box;
    width: ${({ theme, $isWithRange, $isWithInput }) =>
        mixins.elementWidth(
            theme,
            theme.inputStyles,
            $isWithRange && $isWithInput ? 'rangeWidth' : 'width'
        )};
`

export const ErrorMesssage = styled.div`
    font-size: ${({ theme }) => theme.fontSizes.md + 'px'};
    color: ${({ theme }) => theme.palette.errorColor};
    margin-bottom: ${({ theme }) => theme.spaces.lg + 'px'};
    height: ${({ theme }) => theme.inputStyles.medium.errorHeight + 'px'};
`

export const InputBlock = styled.div`
    ${mixins.flexRowCenter()}

    width: ${({ theme }) => theme.fullSize};
    :last-child {
        margin-right: 0;
    }
`

export const CalendarBlock = styled.article`
    ${mixins.flexColumnCenter()}

    width: ${({ theme }) => theme.fullSize};
    font-size: ${({ theme }) => mixins.fontSize(theme)};
    padding: ${({ theme }) => mixins.padding(theme)};
    border: ${({ theme }) => mixins.elementBorder(theme, theme.calendarStyles)};
    border-radius: ${({ theme }) =>
        mixins.elementBorderRadius(theme, theme.calendarStyles)};
`
