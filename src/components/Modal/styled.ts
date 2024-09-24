import styled, { css } from 'styled-components'

import { WindowProps } from './types'

import mixins from '@styles/mixins'

export const Container = styled.div`
    ${mixins.flexColumnCenter}

    position: absolute;
    top: ${({ theme }) => mixins.modalTop(theme)};
    z-index: 10;
`

export const Window = styled.div<WindowProps>`
    ${({ theme, $isWithRange }) => {
        const border = mixins.elementBorder(
            theme,
            theme.baseBorder,
            theme.palette.newMonth
        )

        return css`
            ${mixins.flexColumnCenter}

            position: relative;
            width: ${mixins.elementWidth(
                theme,
                theme.calendarStyles,
                $isWithRange ? 'rangeWidth' : 'width'
            )};
            font-size: ${mixins.fontSize(theme)};
            padding: ${mixins.padding(theme)};
            border-radius: ${theme.cellBorderRadius + 'px'};
            border: ${border};
            color: ${theme.palette.common.black};
            background: ${theme.palette.common.white};
        `
    }}
`

export const CloseButton = styled.button`
    ${({ theme }) => {
        return css`
            position: absolute;
            background: transparent;
            border: ${theme.noneBorder};
            cursor: pointer;
            right: ${theme.modalStyles.closeRight + 'px'};
            top: ${theme.modalStyles.closeTop + 'px'};
            padding: ${theme.modalStyles.closePadding + 'px'};
        `
    }}
`

export const Image = styled.img``
