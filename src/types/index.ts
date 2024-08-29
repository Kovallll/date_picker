export * from './props'

export interface DaysTable {
    id: string
    data: DaysData[]
}

export interface DaysData {
    id: string
    day: number
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
    fullWidth: string
    dayHeight: {
        sm: string
        md: string
        lg: string
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
    cellsBorder: {
        none: string
    }
    calendarStyles: {
        small: {
            width: string
            height: string
            borderRadius: string
            border: string
        }
        medium: {
            width: string
            height: string
            borderRadius: string
            border: string
        }
        large: {
            width: string
            height: string
            borderRadius: string
            border: string
        }
    }
}
