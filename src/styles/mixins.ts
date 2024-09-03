import { css } from 'styled-components'

import { Theme } from '@types'

export default {
    flexRowSE: () => css`
        display: flex;
        justify-content: space-evenly;
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
    margin: (theme: Theme, fisrtPos?: string, lastPos?: string) => css`
        ${fisrtPos} ${theme.spaces.lg + 'px'} ${lastPos};
        @media (max-width: ${theme.media.md + 'px'}) {
            margin: ${fisrtPos} ${theme.spaces.md + 'px'} ${lastPos};
        }
        @media (max-width: ${theme.media.sm + 'px'}) {
            margin: ${fisrtPos} ${theme.spaces.sm + 'px'} ${lastPos};
        }
    `,
    padding: (theme: Theme) => css`
        ${theme.spaces.lg + 'px'};
        @media (max-width: ${theme.media.md + 'px'}) {
            padding: ${theme.spaces.md + 'px'};
        }
        @media (max-width: ${theme.media.sm + 'px'}) {
            padding: ${theme.spaces.sm + 'px'};
        }
    `,
    arrowScale: (theme: Theme) => css`
        ${theme.arrowScale.lg + ')'};

        @media (max-width: ${theme.media.md + 'px'}) {
            transform: scale(${theme.arrowScale.md});
        }
        @media (max-width: ${theme.media.sm + 'px'}) {
            transform: scale(${theme.arrowScale.sm});
        }
    `,
    calendarBorderRadius: (theme: Theme) => css`
        ${theme.calendarStyles.large.borderRadius + 'px'};
        @media (max-width: ${theme.media.md + 'px'}) {
            border-radius: ${theme.calendarStyles.medium.borderRadius + 'px'};
        }
        @media (max-width: ${theme.media.sm + 'px'}) {
            border-radius: ${theme.calendarStyles.small.borderRadius + 'px'};
        }
    `,
    calendarBorder: (theme: Theme) => css`
        ${theme.calendarStyles.large.border};
        @media (max-width: ${theme.media.md + 'px'}) {
            border: ${theme.calendarStyles.medium.border};
        }
        @media (max-width: ${theme.media.sm + 'px'}) {
            border: ${theme.calendarStyles.small.border};
        }
    `,
    calendarWidth: (theme: Theme) => css`
        ${theme.calendarStyles.large.width + 'px'};
        @media (max-width: ${theme.media.md + 'px'}) {
            width: ${theme.calendarStyles.medium.width + 'px'};
        }
        @media (max-width: ${theme.media.sm + 'px'}) {
            width: ${theme.calendarStyles.small.width + 'px'};
        }
    `,
    dayColor: (
        theme: Theme,
        isActive?: boolean,
        inRange?: boolean,
        isStartRange?: boolean,
        isDisabled?: boolean,
        isEndRange?: boolean
    ) => {
        if (isDisabled) return theme.palette.disabledColor
        if (inRange) return theme.palette.inRangeColor
        if (isActive) return theme.palette.activeColor
        if (isEndRange) return theme.palette.endRangeColor
        if (isStartRange) return theme.palette.startRangeColor
        else return theme.palette.common.black
    },
    dayBorderRadius: (
        theme: Theme,
        isActive?: boolean,
        isStartRange?: boolean,
        isEndRange?: boolean
    ) => {
        if (isActive) return theme.cellBorderRadius.active + 'px'
        else if (isStartRange)
            return `${theme.cellBorderRadius.active + 'px'} 0px 0px ${theme.cellBorderRadius.active + 'px'}`
        else if (isEndRange)
            return `0px ${theme.cellBorderRadius.active + 'px'} ${theme.cellBorderRadius.active + 'px'} 0px`
        else return '0px'
    },
    dayBackgroundColor: (
        theme: Theme,
        isActive?: boolean,
        inRange?: boolean,
        isStartRange?: boolean,
        isEndRange?: boolean
    ) => {
        if (inRange) return theme.palette.inRangeBackgroundColor
        if (isActive) return theme.palette.activeDateBackgroundColor
        if (isEndRange) return theme.palette.endRangeBackgroundColor
        if (isStartRange) return theme.palette.startRangeBackgroundColor
        else return theme.palette.common.white
    },
}
