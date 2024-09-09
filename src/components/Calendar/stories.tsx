import { Calendar } from '.'

import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Calendar> = {
    title: 'Components/Calendar',
    component: Calendar,
    parameters: {
        layout: 'centered',
    },
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
