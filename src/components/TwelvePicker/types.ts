export interface TwelvePickerProps {
    fillData: string[]
    handleSelectElement?: (monthId: number) => void
}

export type DataTwelvePicker = ArrayTwelvePicker[]

export interface ArrayTwelvePicker {
    id: string
    data: string
}
