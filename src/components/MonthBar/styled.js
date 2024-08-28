import styled from 'styled-components'

import mixins from '../../styles/mixins'

export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: 700;
    margin: 8px 0px;
    font-size: ${({ size, theme }) => mixins.fontSize(size, theme)};
`

export const Month = styled.div`
    display: flex;
`

export const Image = styled.img`
    width: 16px;
    height: 16px;
    transform: scale(${({ size, theme }) => mixins.arrowScale(size, theme)});
`
