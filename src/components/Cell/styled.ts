import styled from 'styled-components'

import { DayContainerProps } from './types'

import mixins from '@styles/mixins'

export const Container = styled.button<DayContainerProps>`
    width: ${({ theme }) => theme.fullSize};
    height: ${({ theme }) => mixins.cellHeight(theme)};
    margin: ${({ theme, $isTwelve }) =>
        $isTwelve ? theme.spaces.xs + 'px' : '0'};
    border: ${({ theme, $isTwelve }) =>
        $isTwelve ? theme.twelveStyles.border : theme.noneBorder};
    border-radius: ${({
        theme,
        $isActive,
        $isStartRange,
        $isEndRange,
        $isTwelve,
    }) =>
        mixins.dayBorderRadius(
            theme,
            $isActive,
            $isStartRange,
            $isEndRange,
            $isTwelve
        )};
    background: ${({
        theme,
        $isActive,
        $inRange,
        $isStartRange,
        $isEndRange,
        $isSelectWeek,
        $isTwelveActive,
    }) =>
        mixins.dayBackgroundColor(
            theme,
            $isActive,
            $inRange,
            $isStartRange,
            $isEndRange,
            $isSelectWeek,
            $isTwelveActive
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
    @media (hover: hover) and (pointer: fine) {
        &:hover {
            border-radius: ${({ theme }) => theme.cellBorderRadius + 'px'};
            background: ${({
                theme,
                $isActive,
                $inRange,
                $isStartRange,
                $isEndRange,
                $isHoliday,
            }) =>
                mixins.hoverBackgroundColor(
                    theme,
                    $isActive,
                    $inRange,
                    $isStartRange,
                    $isEndRange,
                    $isHoliday
                )};
        }
    }
`
