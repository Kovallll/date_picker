import { Theme } from '@types'

export { default as mixins } from './mixins'

const theme: Theme = {
    palette: {
        common: {
            black: '#393939',
            white: '#ffffff',
        },
        activeDateBackgroundColor: '#2f80ed',
        activeColor: '#fff',
        endRangeBackgroundColor: '#2f80ed',
        endRangeColor: '#fff',
        startRangeBackgroundColor: '#82b3f4',
        startRangeColor: '#fff',
        inRangeColor: '#2f80ed;',
        inRangeBackgroundColor: '#eaf2fd',
        disabledColor: '#aaa',
    },
    fontSizes: {
        sm: '12',
        md: '16',
        lg: '24',
    },
    fullWidth: '100%',
    fontWeight: {
        bold: '700',
        medium: '500',
    },
    media: {
        sm: '600',
        md: '768',
        lg: '1000',
    },
    cellsBorder: {
        none: '0',
    },
    spaces: {
        sm: '6',
        md: '8',
        lg: '10',
    },
    cellHeight: {
        sm: '32',
        md: '36',
        lg: '40',
    },
    cellBorderRadius: {
        active: '8',
    },
    arrowSize: {
        width: '16',
        height: '16',
    },
    arrowScale: {
        sm: 0.9,
        md: 1.1,
        lg: 1.3,
    },
    calendarStyles: {
        small: {
            width: '200',
            borderRadius: '6',
            border: '1px solid #e1e1e1',
        },
        medium: {
            width: '240',
            borderRadius: '8',
            border: '1px solid #e1e1e1',
        },
        large: {
            width: '300',
            borderRadius: '10',
            border: '1px solid #e1e1e1',
        },
    },
}

export default theme
