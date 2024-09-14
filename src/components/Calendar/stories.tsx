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

export const CalendarWithStartSunday: Story = {
    args: {
        isWithRange: false,
        isWithInput: false,
        isWithStartSunday: true,
    },
}

export const CalendarWithCustomHolidays: Story = {
    args: {
        isWithRange: false,
        isWithInput: false,
        holidaysData: [
            { date: '07/01/2024', holiday: 'title' },
            { date: '12/01/2024', holiday: '' },
            { date: '14/01/2024', holiday: 'Any holiday' },
            { date: '09/010/2024', holiday: 'value' },
        ],
    },
}
