import { DataTwelvePicker } from '../types'

export interface PickerRowProps {
    data: DataTwelvePicker
    handleSelectElement?: (monthId: number) => void
}
