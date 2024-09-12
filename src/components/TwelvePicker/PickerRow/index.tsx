import { memo } from 'react'

import { Container } from './styled'
import { TableRowProps } from './types'

import Cell from '@components/Cell'

const TableRow = ({
    data,
    handleSelectElement,
    changeType,
    activeId,
}: TableRowProps) => {
    const countElements = 3

    const onClickCell = (
        _: React.MouseEvent<HTMLButtonElement, MouseEvent>,
        id: string
    ) => {
        const cellId = Number(id)
        if (changeType === 'month') {
            handleSelectElement(cellId)
        }
        if (changeType === 'year') {
            handleSelectElement(
                Number(data[(cellId - 1) % countElements]?.data)
            )
        }
        if (changeType === 'week') {
            handleSelectElement(
                Number(data[(cellId - 1) % countElements]?.data)
            )
        }
    }
    return (
        <Container>
            {data.map(({ id, data }) => {
                const isTwelveActive =
                    changeType === 'month'
                        ? activeId === Number(id)
                        : activeId === Number(data)
                return (
                    <Cell
                        $isTwelve={true}
                        $isTwelveActive={isTwelveActive}
                        key={id}
                        id={id}
                        onClickCell={onClickCell}
                    >
                        {data}
                    </Cell>
                )
            })}
        </Container>
    )
}

export default memo(TableRow)
