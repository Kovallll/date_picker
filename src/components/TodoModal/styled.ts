import styled, { css } from 'styled-components'

import { ButtonsProps, InputProps, TodoTextProps } from './types'

import { DefaultButton } from '@styles/global'
import mixins from '@styles/mixins'

export const Title = styled.h2`
    margin-bottom: ${({ theme }) => theme.modalStyles.titleMargin + 'px'};
`

export const Input = styled.input<InputProps>`
    ${({ theme, $isCheckbox }) => {
        const border = mixins.elementBorder(
            theme,
            theme.baseBorder,
            theme.palette.blue
        )
        const padding = mixins.modalPadding(
            theme,
            '4px',
            theme.modalStyles,
            'inputPadding'
        )
        const width = $isCheckbox
            ? theme.modalStyles.checkBoxWidth
            : mixins.elementWidth(theme, theme.modalStyles, 'inputWidth')

        return css`
            padding: ${padding};
            font-size: ${mixins.fontSize(theme)};
            border-radius: ${theme.modalStyles.borderRadius + 'px'};
            border: ${border};
            width: ${width};
        `
    }}
`

export const TodoCreater = styled.div`
    ${({ theme }) => {
        return css`
            ${mixins.flexRowSE}

            width: ${theme.fullSize};
        `
    }}
`

export const Buttons = styled.div<ButtonsProps>`
    ${({ theme, $isCheckModal }) => {
        const width = $isCheckModal
            ? theme.fullSize
            : mixins.elementWidth(theme, theme.modalStyles, 'buttonsWidth')
        return css`
            ${$isCheckModal ? mixins.flexRowSE : mixins.flexRowSB}

            width: ${width};
            margin-left: ${theme.modalStyles.buttonsMarginLeft + 'px'};
        `
    }}
`

export const Button = styled(DefaultButton)`
    ${({ theme, disabled }) => {
        const padding = mixins.modalPadding(
            theme,
            '2px',
            theme.modalStyles,
            'buttonPadding'
        )
        const color = disabled
            ? theme.palette.newMonth
            : theme.palette.common.black
        const borderColor = disabled
            ? theme.palette.newMonth
            : theme.palette.blue

        return css`
            padding: ${padding};
            border: ${mixins.elementBorder(theme, theme.baseBorder, borderColor)}
            border-radius: ${theme.modalStyles.borderRadius + 'px'};
            color: ${color};
            font-size: ${mixins.fontSize(theme)};
        `
    }}
`

export const Image = styled.img`
    ${({ theme }) => {
        const width = mixins.elementWidth(
            theme,
            theme.modalStyles,
            'buttonImageSize'
        )
        const height = mixins.elementHeight(
            theme,
            theme.modalStyles,
            'buttonImageSize'
        )
        return css`
            ${mixins.flexRowSB}

            width: ${width};
            height: ${height};
        `
    }}
`

export const TodoList = styled.div`
    ${({ theme }) => {
        const maxHeight = mixins.elementMaxHeight(
            theme,
            theme.modalStyles,
            'todoMaxHeight'
        )

        return css`
            margin-top: ${mixins.margin(theme)};
            max-height: ${maxHeight};
            overflow-y: auto;
        `
    }}
`

export const TodoText = styled.p<TodoTextProps>`
    ${({ theme, $isChecked }) => {
        return css`
            padding: ${mixins.padding(theme, '0px')};
            text-decoration: ${$isChecked ? 'line-through' : 'none'};
        `
    }}
`

export const Todo = styled.div`
    ${mixins.flexRowEnd}

    margin-bottom: ${({ theme }) => mixins.margin(theme)};
`
