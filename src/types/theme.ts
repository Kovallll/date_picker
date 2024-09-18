export interface ElementStyle {
    large: {
        width: string
        borderRadius: string
        [K: string]: string
    }
    medium: {
        width: string
        borderRadius: string
        [K: string]: string
    }
    small: {
        width: string
        borderRadius: string
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
    baseBorder: string
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
    todoCircleStyles: {
        borderRadius: string
        top: string
        right: string
        large: {
            width: string
            height: string
        }
        medium: {
            width: string
            height: string
        }
        small: {
            width: string
            height: string
        }
    }
    modalStyles: {
        buttonsMarginLeft: string
        borderRadius: string
        closePadding: string
        closeRight: string
        closeTop: string
        titleMargin: string
        large: {
            buttonPadding: string
            width: string
            inputPadding: string
            buttonsWidth: string
            todoMaxHeight: string
        }
        medium: {
            buttonPadding: string
            width: string
            inputPadding: string
            buttonsWidth: string
            todoMaxHeight: string
        }
        small: {
            buttonPadding: string
            width: string
            inputPadding: string
            buttonsWidth: string
            todoMaxHeight: string
        }
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

export interface SizeStyles {
    small: {
        [K: string]: string
    }
    medium: {
        [K: string]: string
    }
    large: {
        [K: string]: string
    }
}
