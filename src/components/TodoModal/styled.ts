import styled, { css } from 'styled-components'

import mixins from '@styles/mixins'

export const Container = styled.div`
    ${mixins.flexColumnCenter}
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    overflow: hidden;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    flex-flow: column nowrap;
    z-index: 10;
`

export const Window = styled.div`
    ${({ theme }) => {
        return css`
            ${mixins.flexColumnCenter}
            position: relative;
            width: ${mixins.elementWidth(theme, theme.modalStyles, 'width')};
            font-size: ${mixins.fontSize(theme)};
            padding: ${mixins.padding(theme)};
            border-radius: ${theme.cellBorderRadius + 'px'};
            border: ${mixins.elementBorder(theme, theme.calendarStyles)};
            color: ${theme.palette.common.black};
            background: ${theme.palette.common.white};
        `
    }}
`

export const CloseButton = styled.button`
    position: absolute;
    background: transparent;
    border: ${({ theme }) => theme.noneBorder};
    cursor: pointer;
    right: 10px;
    top: 8px;
`

export const Title = styled.h1``

export const Image = styled.img``

export const Input = styled.input``

export const TodoCreater = styled.div`
    ${({ theme }) => {
        return css`
            ${mixins.flexRowSE}
            width: ${theme.fullSize};
        `
    }}
`

export const Buttons = styled.div``

export const Button = styled.button``

export const TodoList = styled.div``

export const Todo = styled.div``
