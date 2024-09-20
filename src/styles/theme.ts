import { Theme } from '@types'

export { default as mixins } from './mixins'

const theme: Theme = {
    palette: {
        common: {
            black: '#393939',
            white: '#ffffff',
        },
        blue: '#2f80ed',
        lightBlue: '#82b3f4',
        inRangeBackgroundColor: '#eaf2fd',
        disabledColor: '#ddd',
        weekendColor: '#BB0000',
        holidayColor: '#FFCF00',
        newMonth: '#aaa',
        errorColor: '#FF2222',
        lightHoverColor: '#eee',
        darkHoverColor: '#faefaf',
        selectedWeekColor: '#c2eceb',
    },
    fontSizes: {
        sm: '10',
        md: '12',
        lg: '14',
    },
    fullSize: '100%',
    fontWeight: {
        bold: '700',
        medium: '500',
    },
    media: {
        sm: '600',
        md: '768',
        lg: '1000',
    },
    noneBorder: '0',
    baseBorder: '1px solid',
    holidayTextWidth: {
        bottom: '30',
        small: {
            height: '20',
            width: '100',
        },
        medium: {
            height: '20',
            width: '120',
        },
        large: {
            height: '20',
            width: '140',
        },
    },
    popupStyles: {
        border: '1px solid',
        top: '26',
    },
    modalStyles: {
        buttonsMarginLeft: '4',
        borderRadius: '16',
        closePadding: '2',
        closeRight: '10',
        closeTop: '8',
        titleMargin: '4',
        checkBoxWidth: '20',
        large: {
            top: '130',
            inputWidth: '110',
            buttonPadding: '16',
            inputPadding: '8',
            buttonsWidth: '138',
            todoMaxHeight: '200',
            buttonImageSize: '24',
        },
        medium: {
            top: '116',
            inputWidth: '96',
            buttonPadding: '12',
            inputPadding: '6',
            buttonsWidth: '104',
            todoMaxHeight: '150',
            buttonImageSize: '16',
        },
        small: {
            top: '104',
            inputWidth: '80',
            buttonPadding: '8',
            inputPadding: '4',
            buttonsWidth: '76',
            todoMaxHeight: '120',
            buttonImageSize: '12',
        },
    },
    todoCircleStyles: {
        borderRadius: '50%',
        top: '2',
        right: '2',
        large: {
            width: '8',
            height: '8',
        },
        medium: {
            width: '6',
            height: '6',
        },
        small: {
            width: '4',
            height: '4',
        },
    },
    spaces: {
        xs: '1',
        sm: '6',
        md: '8',
        lg: '10',
        xl: '36',
    },
    cellHeight: {
        sm: '26',
        md: '32',
        lg: '40',
    },
    cellBorderRadius: '8',
    arrowSize: {
        width: '16',
        height: '16',
    },
    arrowScale: {
        sm: 0.9,
        md: 1.1,
        lg: 1.3,
    },
    inputScale: {
        sm: 0.8,
        md: 0.9,
        lg: 1,
    },
    inputStyles: {
        small: {
            borderRadius: '6',
            width: '180',
            rangeWidth: '320',
            errorHeight: '20',
        },
        medium: {
            borderRadius: '8',
            width: '220',
            rangeWidth: '360',
            errorHeight: '20',
        },
        large: {
            borderRadius: '10',
            width: '270',
            rangeWidth: '400',
            errorHeight: '20',
        },
    },
    calendarStyles: {
        small: {
            width: '180',
            popupWidth: '170',
            rangeWidth: '320',
            borderRadius: '6',
            border: '1px solid',
        },
        medium: {
            width: '220',
            popupWidth: '210',
            rangeWidth: '360',
            borderRadius: '8',
            border: '1px solid',
        },
        large: {
            width: '270',
            popupWidth: '260',
            rangeWidth: '400',
            borderRadius: '10',
            border: '1px solid',
        },
    },
}

export default theme
