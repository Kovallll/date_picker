export interface CellsInitialData {
    id: string
    data: CellData[]
}

export interface CellData {
    id: string
    day: number
}

export interface MonthCellsData {
    id: string
    data: boolean[]
}

export interface Range {
    start: number | null
    end: number | null
}

export interface InputRange {
    start: string
    end: string
}

export type onClickWithRange = (
    ctrl: boolean,
    cellId: number,
    range: Range,
    isSecondInput?: boolean,
    inputDate?: string,
    prevFirstDate?: string,
    prevSecondDate?: string
) => { range: Range; inputRange: InputRange }

export interface ElementStyle {
    large: {
        width: string
        borderRadius: string
        border: string
        [K: string]: string
    }
    medium: {
        width: string
        borderRadius: string
        border: string
        [K: string]: string
    }
    small: {
        width: string
        borderRadius: string
        border: string
        [K: string]: string
    }
}

export interface Theme {
    palette: {
        common: {
            black: string
            white: string
        }
        blue: string
        lightBlue: string
        inRangeBackgroundColor: string
        disabledColor: string
        holidayColor: string
        newMonth: string
        errorColor: string
    }
    fontSizes: {
        sm: string
        md: string
        lg: string
    }
    fontWeight: {
        bold: string
        medium: string
    }
    noneBorder: string
    fullSize: string
    media: {
        sm: string
        md: string
        lg: string
    }
    spaces: {
        sm: string
        md: string
        lg: string
        xl: string
    }
    cellHeight: {
        sm: string
        md: string
        lg: string
    }
    cellBorderRadius: string
    arrowSize: {
        width: string
        height: string
    }
    arrowScale: {
        sm: number
        md: number
        lg: number
    }
    inputScale: {
        sm: number
        md: number
        lg: number
    }
    inputStyles: ElementStyle
    calendarStyles: ElementStyle
}
