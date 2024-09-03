export const insertElementInArray = <T>(
    insertId: number,
    array: T[],
    insertElement: T
) => {
    const newArray: T[] = []
    newArray.push(
        ...array.slice(0, insertId - 1),
        insertElement,
        ...array.slice(insertId)
    )
    return newArray
}
