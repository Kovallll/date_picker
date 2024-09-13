import styled from 'styled-components'

import mixins from '@styles/mixins'

export const Section = styled.section`
    background-color: ${({ theme }) => theme.palette.common.white};
    position: absolute;
    top: 0;
`

export const ButtonsWrap = styled.div`
    ${mixins.flexRowCenter}

    justify-content: space-between;
    margin-bottom: ${({ theme }) => theme.spaces.sm + 'px'};
`
