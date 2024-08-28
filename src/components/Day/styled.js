import styled from 'styled-components'

import mixins from '../../styles/mixins'

export const Container = styled.button`
    width: 100%;
    height: ${({ size, theme }) => mixins.dayHeight(size, theme)};
    display: flex;
    justify-content: center;
    align-items: center;
    border: 0;
    border-radius: ${({ isActive, isStartRange }) =>
        isActive || isStartRange ? '8px' : '0px'};
    background: ${({ isActive, inRange, isStartRange, theme }) =>
        mixins.dayBackgroundColor(isActive, inRange, isStartRange, theme)};
    color: ${({ isActive, inRange, isStartRange, isDisabled, theme }) =>
        mixins.dayColor(isActive, inRange, isStartRange, isDisabled, theme)};
    font-size: ${({ size, theme }) => mixins.fontSize(size, theme)};
`
