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
        lightHoverColor: string
        darkHoverColor: string
        selectedWeekColor: string
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
        xs: string
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
    popupStyles: {
        border: string
        top: string
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
