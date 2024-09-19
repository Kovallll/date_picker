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
    z-index: 10;
`

export const Window = styled.div`
    ${({ theme }) => {
        const border = mixins.elementBorder(
            theme,
            theme.baseBorder,
            theme.palette.newMonth
        )

        return css`
            ${mixins.flexColumnCenter}

            position: relative;
            width: ${mixins.elementWidth(theme, theme.modalStyles, 'width')};
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
