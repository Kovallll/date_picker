import styled from 'styled-components'

import { DayContainerProps } from './types'

import mixins from '@styles/mixins'

export const Container = styled.button<DayContainerProps>`
    width: ${({ theme }) => theme.fullSize};
    height: ${({ theme }) => mixins.cellHeight(theme)};
    border: ${({ theme }) => theme.noneBorder};
    border-radius: ${({ theme, $isActive, $isStartRange, $isEndRange }) =>
        mixins.dayBorderRadius(theme, $isActive, $isStartRange, $isEndRange)};
    background: ${({
        theme,
        $isActive,
        $inRange,
        $isStartRange,
        $isEndRange,
    }) =>
        mixins.dayBackgroundColor(
            theme,
            $isActive,
            $inRange,
            $isStartRange,
            $isEndRange
        )};
    color: ${({
        theme,
        $isActive,
        $inRange,
        $isStartRange,
        $isEndRange,
        $isHoliday,
        $isWeekend,
        $isNewMonth,
    }) =>
        mixins.dayColor(
            theme,
            $isActive,
            $inRange,
            $isStartRange,
            $isEndRange,
            $isHoliday,
            $isWeekend,
            $isNewMonth
        )};
    font-size: ${({ theme }) => mixins.fontSize(theme)};
    cursor: pointer;
    position: relative;
`

export const Wrap = styled.div``

export const Holiday = styled.div`
    ${mixins.flexRowCenter}
    justify-content: start;

    bottom: 30px;
    z-index: 10;
    position: absolute;
    width: ${({ theme }) =>
        mixins.elementWidth(theme, theme.holidayTextWidth, 'width')};
    white-space: nowrap;
`
