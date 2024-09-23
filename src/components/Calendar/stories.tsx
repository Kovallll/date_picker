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
    args: {},
}

export const CalendarWithRange: Story = {
    args: {
        isWithRange: true,
    },
}

export const CalendarWithInput: Story = {
    args: {
        isWithInput: true,
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
        isWithMinMax: true,
        minDate: '06/09/2024',
        maxDate: '24/09/2024',
    },
}

export const CalendarWithStartSunday: Story = {
    args: {
        isWithStartSunday: true,
    },
}

export const CalendarWithTodos: Story = {
    args: {
        isWithRange: false,
        isWithInput: false,
        isWithTodos: true,
    },
}

export const CalendarWithCustomHolidays: Story = {
    args: {
        isWithHoliday: true,
        holidaysData: [
            { date: '07/01/2024', holiday: 'title' },
            { date: '12/01/2024', holiday: '' },
            { date: '14/01/2024', holiday: 'Any holiday' },
            { date: '09/010/2024', holiday: 'value' },
        ],
    },
}
