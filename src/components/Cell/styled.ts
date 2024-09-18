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
        $isDisabled,
        $isHoliday,
        $isNewMonth,
        $isSelectWeek,
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
            $isDisabled,
            $isEndRange,
            $isHoliday,
            $isNewMonth
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
            cursor: pointer;
            position: relative;

            @media (hover: hover) and (pointer: fine) {
                &:hover {
                    border-radius: ${theme.cellBorderRadius + 'px'};
                    background: ${hoverBackground};
                }
            }
        `
    }}
`

export const TodoCircle = styled.div`
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
