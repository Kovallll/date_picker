import styled, { css } from 'styled-components'

import { CalendarContainerProps } from './types'

import mixins from '@styles/mixins'

export const CalendarSection = styled.section<CalendarContainerProps>`
    ${mixins.flexColumnCenter()}

    justify-content: start;
    box-sizing: border-box;
    width: ${({ theme, $isWithRange, $isWithInput }) =>
        mixins.elementWidth(
            theme,
            theme.calendarStyles,
            $isWithRange && $isWithInput ? 'rangeWidth' : 'width'
        )};
`

export const ErrorMesssage = styled.div`
    ${({ theme }) => {
        return css`
            font-size: ${theme.fontSizes.md + 'px'};
            color: ${theme.palette.errorColor};
            margin-bottom: ${theme.spaces.lg + 'px'};
            height: ${theme.inputStyles.medium.errorHeight + 'px'};
        `
    }}
`

export const InputBlock = styled.div`
    ${mixins.flexRowCenter()}

    width: ${({ theme }) => theme.fullSize};
    :last-child {
        margin-right: 0;
    }
`

export const Article = styled.article`
    ${({ theme }) => {
        return css`
            ${mixins.flexColumnCenter()}

            width: ${theme.fullSize};
            font-size: ${mixins.fontSize(theme)};
            padding: ${mixins.padding(theme)};
            border: ${mixins.elementBorder(theme, theme.calendarStyles)};
            border-radius: ${mixins.elementBorderRadius(
                theme,
                theme.calendarStyles
            )};
        `
    }}
`
