import { memo } from 'react'

import PickerRow from './PickerRow'
import { Container } from './styled'
import { DataTwelvePicker, TwelvePickerProps } from './types'

const TwelvePicker = (props: TwelvePickerProps) => {
    const { fillData, handleSelectElement } = props

    const dataTwelvePicker: DataTwelvePicker[] = []
    const countElementInRow = 3
    const countElementInColumn = 4

    for (let i = 0; i < countElementInColumn; i++) {
        const count = i * countElementInRow
        dataTwelvePicker.push([
            ...Array(countElementInRow)
                .fill({})
                .map((_, index) => ({
                    id: String(index + 1 + count),
                    data: fillData[index + count],
                })),
        ])
    }

    return (
        <Container>
            {dataTwelvePicker.map((data, index) => (
                <PickerRow
                    key={index}
                    data={data}
                    handleSelectElement={handleSelectElement}
                />
            ))}
        </Container>
    )
}

export default memo(TwelvePicker)
