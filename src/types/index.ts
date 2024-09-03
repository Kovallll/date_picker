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

export interface IRange {
    start: number
    end: number
}

export interface Theme {
    palette: {
        common: {
            black: string
            white: string
        }
        activeDateBackgroundColor: string
        activeColor: string
        startRangeBackgroundColor: string
        endRangeBackgroundColor: string
        endRangeColor: string
        startRangeColor: string
        inRangeColor: string
        inRangeBackgroundColor: string
        disabledColor: string
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
    cellsBorder: {
        none: string
    }
    fullWidth: string
    media: {
        sm: string
        md: string
        lg: string
    }
    spaces: {
        sm: string
        md: string
        lg: string
    }
    cellHeight: {
        sm: string
        md: string
        lg: string
    }
    cellBorderRadius: {
        active: string
    }
    arrowSize: {
        width: string
        height: string
    }
    arrowScale: {
        sm: number
        md: number
        lg: number
    }
    calendarStyles: {
        small: {
            width: string
            borderRadius: string
            border: string
        }
        medium: {
            width: string
            borderRadius: string
            border: string
        }
        large: {
            width: string
            borderRadius: string
            border: string
        }
    }
}
