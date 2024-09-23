import { memo } from 'react'

import TableRow from './CellsRow'
import { Container } from './styled'
import { DataPopupTableCells, PopupTableCellsProps } from './types'

import {    countElementInPopupTableColumn,    countElementInPopupTableRow} from '@constants'
import { getInitialCells } from '@utils'

const PopupTableCells = (props: PopupTableCellsProps) => {
    const { fillData, handleSelectElement, changeType, activeId } = props

    const dataPopupTableCells: DataPopupTableCells[] = []

    for (let i = 0; i < countElementInPopupTableColumn; i++) {
        const count = i * countElementInPopupTableRow
        dataPopupTableCells.push(
            getInitialCells(countElementInPopupTableRow, fillData, count)
        )
    }

    return (
        <Container>
            {dataPopupTableCells.map((data, index) => (
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

export default memo(PopupTableCells)
