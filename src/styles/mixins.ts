import { css } from 'styled-components'

import { ElementStyle, SizeStyles, Theme } from '@types'

export default {
    flexRowSE: () => css`
        display: flex;
        justify-content: space-evenly;
        align-items: center;
    `,
    flexRowEnd: () => css`
        display: flex;
        justify-content: end;
        align-items: center;
    `,
    flexRowSB: () => css`
        display: flex;
        justify-content: space-between;
        align-items: center;
    `,
    flexColumnCenter: () => css`
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    `,
    flexRowCenter: () => css`
        display: flex;
        justify-content: center;
        align-items: center;
    `,
    fontSize: (theme: Theme) => css`
        ${theme.fontSizes.lg + 'px'};
        @media (max-width: ${theme.media.md + 'px'}) {
            font-size: ${theme.fontSizes.md + 'px'};
        }
        @media (max-width: ${theme.media.sm + 'px'}) {
            font-size: ${theme.fontSizes.sm + 'px'};
        }
    `,
    cellHeight: (theme: Theme) => css`
        ${theme.cellHeight.lg + 'px'};
        @media (max-width: ${theme.media.md + 'px'}) {
            height: ${theme.cellHeight.md + 'px'};
        }
        @media (max-width: ${theme.media.sm + 'px'}) {
            height: ${theme.cellHeight.sm + 'px'};
        }
    `,
    modalTop: (theme: Theme) => css`
        ${theme.modalStyles.large.top + 'px'};
        @media (max-width: ${theme.media.md + 'px'}) {
            top: ${theme.modalStyles.medium.top + 'px'};
        }
        @media (max-width: ${theme.media.sm + 'px'}) {
            top: ${theme.modalStyles.small.top + 'px'};
        }
    `,
    margin: (theme: Theme, fisrtPos?: string, lastPos?: string) => css`
        ${fisrtPos} ${theme.spaces.lg + 'px'} ${lastPos};
        @media (max-width: ${theme.media.md + 'px'}) {
            margin: ${fisrtPos} ${theme.spaces.md + 'px'} ${lastPos};
        }
        @media (max-width: ${theme.media.sm + 'px'}) {
            margin: ${fisrtPos} ${theme.spaces.sm + 'px'} ${lastPos};
        }
    `,
    padding: (theme: Theme, fisrtPos?: string, lastPos?: string) => css`
        ${fisrtPos} ${theme.spaces.lg + 'px'} ${lastPos};
        @media (max-width: ${theme.media.md + 'px'}) {
            padding: ${fisrtPos} ${theme.spaces.md + 'px'} ${lastPos};
        }
        @media (max-width: ${theme.media.sm + 'px'}) {
            padding: ${fisrtPos} ${theme.spaces.sm + 'px'} ${lastPos};
        }
    `,
    modalPadding: (
        theme: Theme,
        fisrtPos: string,
        elementStyle: SizeStyles,
        type: string
    ) => css`
        ${fisrtPos} ${elementStyle.large[type] + 'px'};
        @media (max-width: ${theme.media.md + 'px'}) {
            padding: ${fisrtPos} ${elementStyle.medium[type] + 'px'};
        }
        @media (max-width: ${theme.media.sm + 'px'}) {
            padding: ${fisrtPos} ${elementStyle.small[type] + 'px'};
        }
    `,
    arrowScale: (theme: Theme) => css`
        transform: scale(${theme.arrowScale.lg});

        @media (max-width: ${theme.media.md + 'px'}) {
            transform: scale(${theme.arrowScale.md});
        }
        @media (max-width: ${theme.media.sm + 'px'}) {
            transform: scale(${theme.arrowScale.sm});
        }
    `,
    inputScale: (theme: Theme) => css`
        transform: scale(${theme.inputScale.lg});

        @media (max-width: ${theme.media.md + 'px'}) {
            transform: scale(${theme.inputScale.md});
        }
        @media (max-width: ${theme.media.sm + 'px'}) {
            transform: scale(${theme.inputScale.sm});
        }
    `,
    inputShift: (theme: Theme, shiftType: string) => css`
        ${theme.spaces.lg + 'px'};

        @media (max-width: ${theme.media.md + 'px'}) {
            ${shiftType}: ${theme.spaces.md + 'px'};
        }
        @media (max-width: ${theme.media.sm + 'px'}) {
            ${shiftType}: ${theme.spaces.sm + 'px'};
        }
    `,
    inputPadding: (theme: Theme) => css`
        ${theme.spaces.lg + 'px'} ${theme.spaces.xl + 'px'};
        @media (max-width: ${theme.media.md + 'px'}) {
            padding: ${theme.spaces.md + 'px'}
                ${String(Number(theme.spaces.xl) - 4) + 'px'};
        }
        @media (max-width: ${theme.media.sm + 'px'}) {
            padding: ${theme.spaces.sm + 'px'}
                ${String(Number(theme.spaces.xl) - 8) + 'px'};
        }
    `,
    elementBorderRadius: (
        theme: Theme,
        elementStyle: ElementStyle,
        $isWithTodos?: boolean
    ) => css`
        ${$isWithTodos
            ? `${elementStyle.large.borderRadius + 'px'} ${elementStyle.large.borderRadius + 'px'} 0px 0px `
            : elementStyle.large.borderRadius + 'px'};
        @media (max-width: ${theme.media.md + 'px'}) {
            ${$isWithTodos
                ? `${elementStyle.medium.borderRadius + 'px'} ${elementStyle.medium.borderRadius + 'px'} 0px 0px `
                : elementStyle.medium.borderRadius + 'px'};
        }
        @media (max-width: ${theme.media.sm + 'px'}) {
            ${$isWithTodos
                ? `${elementStyle.small.borderRadius + 'px'} ${elementStyle.small.borderRadius + 'px'} 0px 0px `
                : elementStyle.small.borderRadius + 'px'};
        }
    `,
    elementBorder: (
        theme: Theme,
        border: string,
        color: string,
        topNone?: boolean
    ) => css`
        ${border + color};
        @media (max-width: ${theme.media.md + 'px'}) {
            border: ${border + color};
            border-top: ${topNone ? 0 : border + color};
        }
        @media (max-width: ${theme.media.sm + 'px'}) {
            border: ${border + color};
            border-top: ${topNone ? 0 : border + color};
        }
    `,
    elementMaxWidth: (theme: Theme, elementStyle: ElementStyle) => css`
        ${elementStyle.large.width + 'px'};
        @media (max-width: ${theme.media.md + 'px'}) {
            max-width: ${elementStyle.medium.width + 'px'};
        }
        @media (max-width: ${theme.media.sm + 'px'}) {
            max-width: ${elementStyle.small.width + 'px'};
        }
    `,
    elementWidth: (
        theme: Theme,
        elementStyle: SizeStyles,
        typeWidth: string
    ) => css`
        ${elementStyle.large[typeWidth] + 'px'};
        @media (max-width: ${theme.media.md + 'px'}) {
            width: ${elementStyle.medium[typeWidth] + 'px'};
        }
        @media (max-width: ${theme.media.sm + 'px'}) {
            width: ${elementStyle.small[typeWidth] + 'px'};
        }
    `,
    elementHeight: (
        theme: Theme,
        elementStyle: SizeStyles,
        typeHeight: string
    ) => css`
        ${elementStyle.large[typeHeight] + 'px'};
        @media (max-width: ${theme.media.md + 'px'}) {
            height: ${elementStyle.medium[typeHeight] + 'px'};
        }
        @media (max-width: ${theme.media.sm + 'px'}) {
            height: ${elementStyle.small[typeHeight] + 'px'};
        }
    `,
    elementMaxHeight: (
        theme: Theme,
        elementStyle: SizeStyles,
        typeHeight: string
    ) => css`
        ${elementStyle.large[typeHeight] + 'px'};
        @media (max-width: ${theme.media.md + 'px'}) {
            height: ${elementStyle.medium[typeHeight] + 'px'};
        }
        @media (max-width: ${theme.media.sm + 'px'}) {
            height: ${elementStyle.small[typeHeight] + 'px'};
        }
    `,
    dayColor: (
        theme: Theme,
        isActive?: boolean,
        inRange?: boolean,
        isStartRange?: boolean,
        isEndRange?: boolean,
        isHoliday?: boolean,
        isNewMonth?: boolean,
        isHigherThanMaxDate?: boolean,
        isWeekend?: boolean,
        isLowerThanMaxDate?: boolean
    ) => {
        if (isHigherThanMaxDate || isLowerThanMaxDate)
            return theme.palette.disabledColor
        if (inRange) return theme.palette.blue
        if (isActive) return theme.palette.common.white
        if (isEndRange) return theme.palette.common.white
        if (isStartRange) return theme.palette.common.white
        if (isNewMonth) return theme.palette.newMonth
        if (isHoliday) return theme.palette.holidayColor
        if (isWeekend) return theme.palette.weekendColor
        else return theme.palette.common.black
    },
    dayBorderRadius: (
        theme: Theme,
        isActive?: boolean,
        isStartRange?: boolean,
        isEndRange?: boolean,
        $isPopup?: boolean
    ) => {
        if (isActive || $isPopup) return theme.cellBorderRadius + 'px'
        else if (isStartRange)
            return `${theme.cellBorderRadius + 'px'} 0px 0px ${theme.cellBorderRadius + 'px'}`
        else if (isEndRange)
            return `0px ${theme.cellBorderRadius + 'px'} ${theme.cellBorderRadius + 'px'} 0px`
        else return '0px'
    },
    dayBackgroundColor: (
        theme: Theme,
        isActive?: boolean,
        inRange?: boolean,
        isStartRange?: boolean,
        isEndRange?: boolean,
        isSelectWeek?: boolean,
        isPopupActive?: boolean
    ) => {
        if (isPopupActive) return theme.palette.selectedWeekColor
        if (inRange) return theme.palette.inRangeBackgroundColor
        if (isActive) return theme.palette.blue
        if (isEndRange) return theme.palette.blue
        if (isStartRange) return theme.palette.lightBlue
        if (isSelectWeek) return theme.palette.selectedWeekColor
        else return theme.palette.common.white
    },
    hoverBackgroundColor: (
        theme: Theme,
        isActive?: boolean,
        inRange?: boolean,
        isStartRange?: boolean,
        isEndRange?: boolean
    ) => {
        const isDarkHover = inRange || isActive || isEndRange || isStartRange

        if (isDarkHover) return theme.palette.darkHoverColor
        else return theme.palette.lightHoverColor
    },
}
