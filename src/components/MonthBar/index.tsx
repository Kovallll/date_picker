import { memo } from 'react'

import { nextImageAlt, prevImageAlt } from './config'
import { Container, Image, Month } from './styled'
import { MonthBarProps } from './types'

import { icons, months } from '@constants'

const MonthBar = (props: MonthBarProps) => {
    const { currentMonth, year, increment, decrement, ...restProps } = props

    const isDisabled = year === 0 && currentMonth === 1
    const disabledPrevButton = isDisabled ? true : false
    const disabledPrevIcon = isDisabled
        ? icons.disabledPrevArrowIcon
        : icons.prevArrowIcon

    return (
        <Container {...restProps}>
            <Image onClick={decrement} disabled={disabledPrevButton}>
                <img
                    src={disabledPrevIcon}
                    aria-hidden="true"
                    alt={prevImageAlt}
                />
            </Image>
            <Month>
                {months[currentMonth - 1]} {year}
            </Month>
            <Image onClick={increment}>
                <img
                    src={icons.nextArrowIcon}
                    aria-hidden="true"
                    alt={nextImageAlt}
                />
            </Image>
        </Container>
    )
}

export default memo(MonthBar)
