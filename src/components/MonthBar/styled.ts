import styled from 'styled-components'

import mixins from '@styles/mixins'

export const Container = styled.div`
    ${mixins.flexRowSB()}

    width: ${({ theme }) => theme.fullSize};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    margin: ${({ theme }) => mixins.margin(theme, '', '0px')};
    font-size: ${({ theme }) => mixins.fontSize(theme)};
`

export const Month = styled.div`
    ${mixins.flexRowCenter()}
`

export const Image = styled.button<{ disabled?: boolean }>`
    ${mixins.flexRowCenter()}

    width: ${({ theme }) => theme.arrowSize.width + 'px'};
    height: ${({ theme }) => theme.arrowSize.height + 'px'};
    transform: scale(${({ theme }) => mixins.arrowScale(theme)});
    cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
    border: ${({ theme }) => theme.noneBorder};
    background: ${({ theme }) => theme.palette.common.white};
`
