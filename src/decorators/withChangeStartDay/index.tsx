import { ComponentType } from 'react'

import { WithChangeStartDay } from './types'

export const withChangeStartDay = <T extends WithChangeStartDay>(
    WrappedComponent: ComponentType<T>
) => {
    const ComponentWithChangeStartDay = (props: T) => {
        return <WrappedComponent isChangeStartDay={true} {...props} />
    }

    return ComponentWithChangeStartDay
}
