import styled, { css } from 'styled-components'

import { ButtonProps, TodoTextProps } from './types'

import mixins from '@styles/mixins'

export const Title = styled.h1`
    margin-bottom: ${({ theme }) => theme.modalStyles.titleMargin + 'px'};
`

export const Input = styled.input`
    ${({ theme }) => {
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

        return css`
            padding: ${padding};
            font-size: ${mixins.fontSize(theme)};
            border-radius: ${theme.modalStyles.borderRadius + 'px'};
            border: ${border};
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

export const Buttons = styled.div`
    ${({ theme }) => {
        const width = mixins.elementWidth(
            theme,
            theme.modalStyles,
            'buttonsWidth'
        )
        return css`
            ${mixins.flexRowSB}

            width: ${width};
            margin-left: ${theme.modalStyles.buttonsMarginLeft + 'px'};
        `
    }}
`

export const Button = styled.button<ButtonProps>`
    ${({ theme, $isDisabled }) => {
        const padding = mixins.modalPadding(
            theme,
            '4px',
            theme.modalStyles,
            'buttonPadding'
        )
        const color = $isDisabled
            ? theme.palette.newMonth
            : theme.palette.common.white
        const bgColor = $isDisabled
            ? theme.palette.common.white
            : theme.palette.lightBlue

        return css`
            padding: ${padding};
            background-color: ${bgColor};
            border: ${mixins.elementBorder(theme, theme.baseBorder, theme.palette.blue)}
            border-radius: ${theme.modalStyles.borderRadius + 'px'};
            cursor: ${$isDisabled ? 'default' : 'pointer'};
            color: ${color};
            font-size: ${mixins.fontSize(theme)};
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
