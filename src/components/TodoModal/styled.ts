import styled, { css } from 'styled-components'

import { ButtonProps, TodoTextProps } from './types'

import mixins from '@styles/mixins'

export const Title = styled.h1`
    margin-bottom: ${({ theme }) => theme.modalStyles.titleMargin + 'px'};
`

export const Input = styled.input`
    ${({ theme }) => {
        return css`
            padding: ${mixins.modalPadding(
                theme,
                '4px',
                theme.modalStyles,
                'inputPadding'
            )};
            font-size: ${mixins.fontSize(theme)};
            border-radius: ${theme.modalStyles.borderRadius + 'px'};
            border: ${mixins.elementBorder(
                theme,
                theme.baseBorder,
                theme.palette.blue
            )};
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
        return css`
            ${mixins.flexRowSB}

            width: ${mixins.elementWidth(
                theme,
                theme.modalStyles,
                'buttonsWidth'
            )};
            margin-left: ${theme.modalStyles.buttonsMarginLeft + 'px'};
        `
    }}
`

export const Button = styled.button<ButtonProps>`
    ${({ theme, $isDisabled }) => {
        return css`
            padding: ${mixins.modalPadding(
                theme,
                '4px',
                theme.modalStyles,
                'buttonPadding'
            )};
            background-color: ${
                $isDisabled
                    ? theme.palette.common.white
                    : theme.palette.lightBlue
            };
             border: ${mixins.elementBorder(theme, theme.baseBorder, theme.palette.blue)}
            border-radius: ${theme.modalStyles.borderRadius + 'px'};
            cursor: ${$isDisabled ? 'default' : 'pointer'};
            color: ${
                $isDisabled
                    ? theme.palette.newMonth
                    : theme.palette.common.white
            };
            font-size: ${mixins.fontSize(theme)};
        `
    }}
`

export const TodoList = styled.div`
    ${({ theme }) => {
        return css`
            margin-top: ${mixins.margin(theme)};
            max-height: ${mixins.elementMaxHeight(
                theme,
                theme.modalStyles,
                'todoMaxHeight'
            )};
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
