import styled, { css } from 'styled-components'

import { CellItemProps } from './types'

import mixins from '@styles/mixins'

export const CellItem = styled.button<CellItemProps>`
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
            $isPopupActive,
            $isSelectWeek
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

            @media (hover: hover) and (pointer: fine) {
                &:hover {
                    border-radius: ${theme.cellBorderRadius + 'px'};
                    background: ${hoverBackground};
                }
            }
        `
    }}
`
