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
        ${theme.fontSizes.lg};
        @media (max-width: ${theme.media.md}) {
            font-size: ${theme.fontSizes.md};
        }
        @media (max-width: ${theme.media.sm}) {
            font-size: ${theme.fontSizes.sm};
        }
    `,
    dayHeight: (theme: Theme) => css`
        ${theme.dayHeight.lg};
        @media (max-width: ${theme.media.md}) {
            height: ${theme.dayHeight.md};
        }
        @media (max-width: ${theme.media.sm}) {
            height: ${theme.dayHeight.sm};
        }
    `,
    margin: (theme: Theme, fisrtPos?: string, lastPos?: string) => css`
        ${fisrtPos} ${theme.spaces.lg} ${lastPos};
        @media (max-width: ${theme.media.md}) {
            margin: ${fisrtPos} ${theme.spaces.md} ${lastPos};
        }
        @media (max-width: ${theme.media.sm}) {
            margin: ${fisrtPos} ${theme.spaces.sm} ${lastPos};
        }
    `,
    padding: (theme: Theme) => css`
        ${theme.spaces.lg};
        @media (max-width: ${theme.media.md}) {
            padding: ${theme.spaces.md};
        }
        @media (max-width: ${theme.media.sm}) {
            padding: ${theme.spaces.sm};
        }
    `,
    arrowScale: (theme: Theme) => css`
        ${theme.arrowScale.lg};
        @media (max-width: ${theme.media.md}) {
            transform: scale(${theme.arrowScale.md});
        }
        @media (max-width: ${theme.media.sm}) {
            transform: scale(${theme.arrowScale.sm});
        }
    `,
    calendarBorderRadius: (theme: Theme) => css`
        ${theme.calendarStyles.large.borderRadius};
        @media (max-width: ${theme.media.md}) {
            border-radius: ${theme.calendarStyles.medium.borderRadius};
        }
        @media (max-width: ${theme.media.sm}) {
            border-radius: ${theme.calendarStyles.small.borderRadius};
        }
    `,
    calendarBorder: (theme: Theme) => css`
        ${theme.calendarStyles.large.border};
        @media (max-width: ${theme.media.md}) {
            border: ${theme.calendarStyles.medium.border};
        }
        @media (max-width: ${theme.media.sm}) {
            border: ${theme.calendarStyles.small.border};
        }
    `,
    calendarWidth: (theme: Theme) => css`
        ${theme.calendarStyles.large.width};
        @media (max-width: ${theme.media.md}) {
            width: ${theme.calendarStyles.medium.width};
        }
        @media (max-width: ${theme.media.sm}) {
            width: ${theme.calendarStyles.small.width};
        }
    `,
    calendarHeight: (theme: Theme) => css`
        ${theme.calendarStyles.large.height};
        @media (max-width: ${theme.media.md}) {
            height: ${theme.calendarStyles.medium.height};
        }
        @media (max-width: ${theme.media.sm}) {
            height: ${theme.calendarStyles.small.height};
        }
    `,
    dayColor: (
        theme: Theme,
        isActive?: boolean,
        inRange?: boolean,
        isStartRange?: boolean,
        isDisabled?: boolean
    ) => {
        if (isDisabled) return theme.palette.disabledColor
        if (inRange) return theme.palette.inRangeColor
        if (isActive) return theme.palette.activeColor
        if (isStartRange) return theme.palette.startRangeColor
        else return theme.palette.common.black
    },
    dayBackgroundColor: (
        theme: Theme,
        isActive?: boolean,
        inRange?: boolean,
        isStartRange?: boolean
    ) => {
        if (inRange) return theme.palette.inRangeBackgroundColor
        if (isActive) return theme.palette.activeDateBackgroundColor
        if (isStartRange) return theme.palette.startRangeBackgroundColor
        else return theme.palette.common.white
    },
}
