import styled, { css } from 'styled-components'

import { CellDataProps } from './types'

import mixins from '@styles/mixins'

export const CellData = styled.button<CellDataProps>`
    ${({
        theme,
        $isActive,
        $inRange,
        $isStartRange,
        $isEndRange,
        $isPopup,
        $isPopupActive,
        $isHoliday,
        $isNewMonth,
        $isWeekend,
        $isSelectWeek,
        $isHigherThanMaxDate,
        $isLowerThanMinDate,
    }) => {
        const cellHeight = mixins.cellHeight(theme)
        const borderRadius = mixins.dayBorderRadius(
            theme,
            $isActive,
            $isStartRange,
            $isEndRange,
            $isPopup
        )
        const backgroundColor = mixins.dayBackgroundColor(
            theme,
            $isActive,
            $inRange,
            $isStartRange,
            $isEndRange,
            $isSelectWeek,
            $isPopupActive
        )
        const color = mixins.dayColor(
            theme,
            $isActive,
            $inRange,
            $isStartRange,
            $isEndRange,
            $isHoliday,
            $isNewMonth,
            $isHigherThanMaxDate,
            $isWeekend,
            $isLowerThanMinDate
        )
        const hoverBackground = mixins.hoverBackgroundColor(
            theme,
            $isActive,
            $inRange,
            $isStartRange,
            $isEndRange
        )

        return css`
            width: ${theme.fullSize};
            height: ${cellHeight};
            margin: ${$isPopup ? theme.spaces.xs + 'px' : '0'};
            border: ${$isPopup
                ? theme.popupStyles.border + theme.palette.blue
                : theme.noneBorder};
            border-radius: ${borderRadius};
            background: ${backgroundColor};
            color: ${color};
            font-size: ${mixins.fontSize(theme)};
            cursor: ${$isHigherThanMaxDate || $isLowerThanMinDate
                ? 'default'
                : 'pointer'};
            position: relative;

            @media (hover: hover) and (pointer: fine) {
                &:hover {
                    border-radius: ${theme.cellBorderRadius + 'px'};
                    background: ${$isHigherThanMaxDate || $isLowerThanMinDate
                        ? 'none'
                        : hoverBackground};
                }
            }
        `
    }}
`

export const TodoMark = styled.div`
    ${({ theme }) => {
        return css`
            top: ${theme.todoCircleStyles.top + 'px'};
            right: ${theme.todoCircleStyles.right + 'px'};
            width: ${mixins.elementWidth(
                theme,
                theme.todoCircleStyles,
                'width'
            )};
            height: ${mixins.elementHeight(
                theme,
                theme.todoCircleStyles,
                'height'
            )};
            background-color: ${theme.palette.holidayColor};
            border-radius: ${theme.todoCircleStyles.borderRadius};
            position: absolute;
        `
    }}
`

export const Holiday = styled.div`
    ${mixins.flexRowCenter}

    justify-content: start;
    bottom: ${({ theme }) => theme.holidayTextWidth.bottom + 'px'};
    z-index: 10;
    position: absolute;
    width: ${({ theme }) =>
        mixins.elementWidth(theme, theme.holidayTextWidth, 'width')};
    white-space: nowrap;
`
