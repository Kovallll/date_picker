import { InputProviderProps } from './types'

import { InputContext } from '@context'

export const InputProvider = ({
    children,
    isWithInput,
}: InputProviderProps) => {
    return (
        <InputContext.Provider value={isWithInput}>
            {children}
        </InputContext.Provider>
    )
}
