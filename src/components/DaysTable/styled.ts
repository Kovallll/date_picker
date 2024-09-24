import styled, { css } from 'styled-components'

import mixins from '@styles/mixins'

export const Article = styled.article`
    ${({ theme }) => {
        return css`
            ${mixins.flexColumnCenter()}

            width: ${theme.fullSize};
            background-color: ${theme.palette.common.white};
            align-items: unset;
        `
    }}
`
