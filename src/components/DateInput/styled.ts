import styled from 'styled-components'

import mixins from '@styles/mixins'

export const Container = styled.section`
    ${mixins.flexColumnCenter}

    width: ${({ theme }) => theme.fullSize};
    max-width: ${({ theme }) =>
        mixins.elementMaxWidth(theme, theme.inputStyles)};
    margin-bottom: ${({ theme }) => theme.spaces.sm + 'px'};
    margin-right: ${({ theme }) => theme.spaces.sm + 'px'};
`

export const InputBlock = styled.div`
    ${mixins.flexRowCenter}

    width: ${({ theme }) => theme.fullSize};
    position: relative;
`

export const Input = styled.input`
    width: ${({ theme }) => theme.fullSize};
    border: ${({ theme }) => mixins.elementBorder(theme, theme.inputStyles)};
    border-radius: ${({ theme }) =>
        mixins.elementBorderRadius(theme, theme.inputStyles)};
    padding: ${({ theme }) => mixins.inputPadding(theme)};
    font-size: ${({ theme }) => mixins.fontSize(theme)};
`

export const CalendarImageButton = styled.button`
    ${mixins.flexRowCenter}

    cursor: pointer;
    height: ${({ theme }) => theme.fullSize};
    position: absolute;
    left: ${({ theme }) => mixins.inputShift(theme, 'left')};
    border: ${({ theme }) => theme.noneBorder};
    background-color: transparent;
`

export const Image = styled.img`
    ${({ theme }) => mixins.inputScale(theme)};
`

export const ClearImageButton = styled.button`
    ${mixins.flexRowCenter}

    cursor: pointer;
    height: ${({ theme }) => theme.fullSize};
    position: absolute;
    right: ${({ theme }) => mixins.inputShift(theme, 'right')};
    border: ${({ theme }) => theme.noneBorder};
    background-color: transparent;
`
