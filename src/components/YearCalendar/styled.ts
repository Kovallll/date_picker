import styled from 'styled-components'

import mixins from '@styles/mixins'

export const Container = styled.section`
    background-color: ${({ theme }) => theme.palette.common.white};
    position: absolute;
    top: ${({ theme }) => theme.twelveStyles.top + 'px'};
    z-index: 10;
`

export const Buttons = styled.div`
    ${mixins.flexRowCenter}

    justify-content: space-between;
    margin-bottom: ${({ theme }) => theme.spaces.sm + 'px'};
`
