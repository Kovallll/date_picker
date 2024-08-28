export default {
    fontSize: (size, theme) => {
        if (size === 'large') return theme.fontSizes.lg
        else if (size === 'medium') return theme.fontSizes.md
        else return theme.fontSizes.sm
    },
    dayHeight: (size, theme) => {
        if (size === 'large') return theme.dayHeight.lg
        else if (size === 'medium') return theme.dayHeight.md
        else return theme.dayHeight.sm
    },
    margin: (size, theme) => {
        if (size === 'large') return theme.margin.lg
        else if (size === 'medium') return theme.margin.md
        else return theme.margin.sm
    },
    arrowScale: (size, theme) => {
        if (size === 'large') return theme.arrowScale.lg
        else if (size === 'medium') return theme.arrowScale.md
        else return theme.arrowScale.sm
    },
    padding: (size, theme) => {
        if (size === 'large') return theme.padding.lg
        else if (size === 'medium') return theme.padding.md
        else return theme.padding.sm
    },
    calendarBorderRadius: (size, theme) => {
        if (size === 'large') return theme.calendarStyles.large.borderRadius
        else if (size === 'medium')
            return theme.calendarStyles.medium.borderRadius
        else return theme.calendarStyles.small.borderRadius
    },
    calendarBorder: (size, theme) => {
        if (size === 'large') return theme.calendarStyles.large.border
        else if (size === 'medium') return theme.calendarStyles.medium.border
        else return theme.calendarStyles.small.border
    },
    calendarWidth: (size, theme) => {
        if (size === 'large') return theme.calendarStyles.large.width
        else if (size === 'medium') return theme.calendarStyles.medium.width
        else return theme.calendarStyles.small.width
    },
    calendarHeight: (size, theme) => {
        if (size === 'large') return theme.calendarStyles.large.height
        else if (size === 'medium') return theme.calendarStyles.medium.height
        else return theme.calendarStyles.small.height
    },
    dayColor: (isActive, inRange, isStartRange, isDisabled, theme) => {
        if (isDisabled) return theme.palette.disabledColor
        if (inRange) return theme.palette.inRangeColor
        if (isActive) return theme.palette.activeColor
        if (isStartRange) return theme.palette.startRangeColor
        else return theme.palette.common.black
    },
    dayBackgroundColor: (isActive, inRange, isStartRange, theme) => {
        if (inRange) return theme.palette.inRangeBackgroundColor
        if (isActive) return theme.palette.activeDateBackgroundColor
        if (isStartRange) return theme.palette.startRangeBackgroundColor
        else return theme.palette.common.white
    },
}
