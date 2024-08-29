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
        startRangeBackgroundColor: '#82b3f4',
        startRangeColor: '#fff',
        inRangeColor: '#2f80ed;',
        inRangeBackgroundColor: '#eaf2fd',
        disabledColor: '#aaa',
    },
    fontSizes: {
        sm: '12px',
        md: '16px',
        lg: '24px',
    },
    media: {
        sm: '600px',
        md: '768px',
        lg: '1000px',
    },
    spaces: {
        sm: '6px',
        md: '8px',
        lg: '10px',
    },
    dayHeight: {
        sm: '32px',
        md: '36px',
        lg: '40px',
    },
    arrowSize: {
        width: '16px',
        height: '16px',
    },
    arrowScale: {
        sm: 0.9,
        md: 1.1,
        lg: 1.3,
    },
    calendarStyles: {
        small: {
            width: '200px',
            height: '210px',
            borderRadius: '6px',
            border: '1px solid #e1e1e1',
        },
        medium: {
            width: '240px',
            height: '240px',
            borderRadius: '8px',
            border: '1px solid #e1e1e1',
        },
        large: {
            width: '300px',
            height: '300px',
            borderRadius: '10px',
            border: '1px solid #e1e1e1',
        },
    },
}

export default theme
