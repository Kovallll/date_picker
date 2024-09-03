export const getInitialCells = <T>(
    len: number,
    array: Array<T> = [],
    initialId: number = 0
) => {
    return [
        ...Array(len)
            .fill({})
            .map((_, index) => ({
                id: String(initialId * 12 + index + 1),
                data: array,
            })),
    ]
}
