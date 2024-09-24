import { ThemeProvider } from 'styled-components'

import { ThemeProviderProps } from './types'

import { GlobalStyle } from '@styles/global'
import theme from '@styles/theme'

export const ThemeWrapper = ({ children }: ThemeProviderProps) => (
    <>
        <GlobalStyle />
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </>
)

export default ThemeWrapper
