import { memo } from 'react'

import TableRow from './PickerRow'
import { Container } from './styled'
import { DataTwelveTable, TwelveTableProps } from './types'

const TwelveTable = (props: TwelveTableProps) => {
    const { fillData, handleSelectElement, changeType, activeId } = props

    const dataTwelvePicker: DataTwelveTable[] = []
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
                <TableRow
                    key={index}
                    data={data}
                    handleSelectElement={handleSelectElement}
                    changeType={changeType}
                    activeId={activeId}
                />
            ))}
        </Container>
    )
}

export default memo(TwelveTable)
