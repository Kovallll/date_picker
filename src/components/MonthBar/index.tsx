import { Container, Image, Month } from './styled.js'

import { icons, months } from '@constants'
import { MonthBarProps } from '@types'

export const MonthBar = ({
    currentMonth,
    year,
    increment,
    decrement,
    ...props
}: MonthBarProps) => {
    return (
        <Container {...props}>
            <Image onClick={decrement}>
                <img src={icons.prevArrowIcon} aria-hidden="true" />
            </Image>
            <Month>
                {months[currentMonth - 1]} {year}
            </Month>
            <Image onClick={increment}>
                <img src={icons.nextArrowIcon} aria-hidden="true" />
            </Image>
        </Container>
    )
}
