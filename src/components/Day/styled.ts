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
        $isDisabled,
        $isEndRange,
        $isHoliday,
        $isNewMonth,
    }) =>
        mixins.dayColor(
            theme,
            $isActive,
            $inRange,
            $isStartRange,
            $isDisabled,
            $isEndRange,
            $isHoliday,
            $isNewMonth
        )};
    font-size: ${({ theme }) => mixins.fontSize(theme)};
    cursor: pointer;
`
