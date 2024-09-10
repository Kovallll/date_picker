import { Calendar } from '.'

import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Calendar> = {
    title: 'Components/Calendar',
    component: Calendar,
    tags: ['autodocs'],
    argTypes: {
        isWithRange: {
            control: { type: 'boolean' },
        },
        isWithInput: {
            control: { type: 'boolean' },
        },
    },
}
export default meta
type Story = StoryObj<typeof Calendar>

export const DefaultCalendar: Story = {
    args: {
        isWithRange: false,
        isWithInput: false,
    },
}

export const CalendarWithRange: Story = {
    args: {
        isWithRange: true,
        isWithInput: false,
    },
}

export const CalendarWithInput: Story = {
    args: {
        isWithInput: true,
        isWithRange: false,
    },
}

export const CalendarWithRangeInput: Story = {
    args: {
        isWithInput: true,
        isWithRange: true,
    },
}

export const CalendarWithMinMaxDate: Story = {
    args: {
        isWithInput: true,
        isWithRange: true,
        minDate: '6/01/2024',
        maxDate: '15/02/2024',
    },
}
