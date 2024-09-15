import styled, { css } from 'styled-components'

import mixins from '@styles/mixins'

export const DateSection = styled.section`
    ${({ theme }) => {
        return css`
            ${mixins.flexColumnCenter}

            width: ${theme.fullSize};
            max-width: ${mixins.elementMaxWidth(theme, theme.inputStyles)};
            margin-bottom: ${theme.spaces.sm + 'px'};
            margin-right: ${theme.spaces.sm + 'px'};
        `
    }}
`

export const InputBlock = styled.div`
    ${mixins.flexRowCenter}

    width: ${({ theme }) => theme.fullSize};
    position: relative;
`

export const Input = styled.input`
    ${({ theme }) => {
        return css`
            width: ${theme.fullSize};
            border: ${mixins.elementBorder(theme, theme.inputStyles)};
            border-radius: ${mixins.elementBorderRadius(
                theme,
                theme.inputStyles
            )};
            padding: ${mixins.inputPadding(theme)};
            font-size: ${mixins.fontSize(theme)};
        `
    }}
`

export const CalendarImageButton = styled.button`
    ${({ theme }) => {
        return css`
            ${mixins.flexRowCenter}

            cursor: pointer;
            height: ${theme.fullSize};
            position: absolute;
            left: ${mixins.inputShift(theme, 'left')};
            border: ${theme.noneBorder};
            background-color: transparent;
        `
    }}
`

export const Image = styled.img`
    ${({ theme }) => mixins.inputScale(theme)};
`

export const ClearImageButton = styled.button`
    ${({ theme }) => {
        return css`
            ${mixins.flexRowCenter}

            cursor: pointer;
            height: ${theme.fullSize};
            position: absolute;
            right: ${mixins.inputShift(theme, 'right')};
            border: ${theme.noneBorder};
            background-color: transparent;
        `
    }}
`
