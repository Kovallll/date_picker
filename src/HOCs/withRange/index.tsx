import { ComponentType } from 'react'

import { DefaultCalendarProps } from '/src/types'

interface WithRangeProps extends Pick<DefaultCalendarProps, 'isWithRange'> {}

const withRange = <T extends WithRangeProps>(
    WrappedComponent: ComponentType<T>
) => {
    const ComponentWithRange = (props: Omit<T, keyof WithRangeProps>) => {
        return <WrappedComponent {...(props as T)} isWithRange={true} />
    }

    return ComponentWithRange
}

export default withRange
