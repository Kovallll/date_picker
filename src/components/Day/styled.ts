import styled from 'styled-components'

import mixins from '@styles/mixins'
import { DayContainerProps } from '@types'

export const Container = styled.button<DayContainerProps>`
    width: ${({ theme }) => theme.fullWidth};
    height: ${({ theme }) => mixins.dayHeight(theme)};
    border: ${({ theme }) => theme.cellsBorder.none};
    border-radius: ${({ isActive, isStartRange }) =>
        isActive || isStartRange ? '8px' : '0px'};
    background: ${({ isActive, inRange, isStartRange, theme }) =>
        mixins.dayBackgroundColor(theme, isActive, inRange, isStartRange)};
    color: ${({ isActive, inRange, isStartRange, isDisabled, theme }) =>
        mixins.dayColor(theme, isActive, inRange, isStartRange, isDisabled)};
    font-size: ${({ theme }) => mixins.fontSize(theme)};
`
