export { default as mixins } from './mixins'

const theme = {
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
        sm: '(max-width: 600px)',
        md: '(max-width: 768px)',
        lg: '(max-width: 1000px)',
    },
    padding: {
        sm: '6px',
        md: '8px',
        lg: '10px',
    },
    margin: {
        sm: '6px',
        md: '8px',
        lg: '10px',
    },
    dayHeight: {
        sm: '32px',
        md: '36px',
        lg: '40px',
    },
    arrowScale: {
        sm: 0.9,
        md: 1.1,
        lg: 1.3,
    },
    calendarStyles: {
        small: {
            width: '220px',
            height: '220px',
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
            width: '280px',
            height: '280px',
            borderRadius: '10px',
            border: '1px solid #e1e1e1',
        },
    },
}

export default theme
