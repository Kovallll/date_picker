import styled, { css } from 'styled-components'

import {
    CalendarArticleProps,
    CalendarContainerProps,
    TodoButtonProps,
} from './types'

import mixins from '@styles/mixins'

export const CalendarSection = styled.section<CalendarContainerProps>`
    ${({ theme, $isWithRange, $isWithInput }) => {
        const width = mixins.elementWidth(
            theme,
            theme.calendarStyles,
            $isWithRange && $isWithInput ? 'rangeWidth' : 'width'
        )

        return css`
            ${mixins.flexColumnCenter()}

            justify-content: start;
            box-sizing: border-box;
            width: ${width};
        `
    }}
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

export const CalendarArticle = styled.article<CalendarArticleProps>`
    ${({ theme, $isWithTodos }) => {
        const border = mixins.elementBorder(
            theme,
            theme.baseBorder,
            theme.palette.newMonth
        )
        const borderRadius = mixins.elementBorderRadius(
            theme,
            theme.calendarStyles,
            $isWithTodos
        )

        return css`
            ${mixins.flexColumnCenter()}

            position: relative;
            width: ${theme.fullSize};
            font-size: ${mixins.fontSize(theme)};
            padding: ${mixins.padding(theme)};
            background-color: ${theme.palette.common.white};
            border: ${border};
            border-radius: ${borderRadius};
        `
    }}
`

export const TodoButton = styled.button<TodoButtonProps>`
    ${({ theme, $isDisabled }) => {
        const border = mixins.elementBorder(
            theme,
            theme.baseBorder,
            theme.palette.newMonth,
            true
        )
        const color = $isDisabled
            ? theme.palette.newMonth
            : theme.palette.common.black

        return css`
            width: ${theme.fullSize};
            font-size: ${mixins.fontSize(theme)};
            padding: ${mixins.padding(theme)};
            border-radius: ${`0px 0px ${theme.cellBorderRadius}px ${theme.cellBorderRadius}px`};
            border: ${border};
            border-top: ${theme.noneBorder};
            color: ${color};
            background: ${theme.palette.common.white};
            cursor: ${$isDisabled ? 'default' : 'pointer'};
        `
    }}
`
