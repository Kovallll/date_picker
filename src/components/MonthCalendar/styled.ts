import styled from 'styled-components'

export const Container = styled.section`
    background-color: ${({ theme }) => theme.palette.common.white};
    position: absolute;
    top: ${({ theme }) => theme.twelveStyles.top + 'px'};
    z-index: 10;
`
