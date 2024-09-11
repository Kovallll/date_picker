import { ElementStyle } from '.'

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
        weekendColor: string
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
