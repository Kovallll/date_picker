import { memo } from 'react'

import { Container } from './styled'
import { PickerRowProps } from './types'

import Cell from '@components/Cell'
import { Month, months } from '@constants'

const PickerRow = ({ data, handleSelectElement }: PickerRowProps) => {
    const countElements = 3

    const onClickCell = (
        _: React.MouseEvent<HTMLButtonElement, MouseEvent>,
        id: string
    ) => {
        const cellId = Number(id)
        if (months.includes(data[0]?.data as Month) && handleSelectElement) {
            handleSelectElement(cellId)
        }
        if (!months.includes(data[0]?.data as Month) && handleSelectElement) {
            handleSelectElement(
                Number(data[(cellId - 1) % countElements]?.data)
            )
        }
    }
    return (
        <Container>
            {data.map(({ id, data }) => (
                <Cell
                    $isTwelve={true}
                    key={id}
                    id={id}
                    onClickCell={onClickCell}
                >
                    {data}
                </Cell>
            ))}
        </Container>
    )
}

export default memo(PickerRow)
