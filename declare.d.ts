import 'styled-components'
import { Theme } from '@types'

declare module '*.svg' {
    const content: string
    export default content
}

declare module 'styled-components' {
    export interface DefaultTheme extends Theme {}
}
declare module 'react/jsx-runtime' {
    export default any
}
