import MonthBar from './index'

import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof MonthBar> = {
    title: 'Components/MonthBar',
    component: MonthBar,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        currentMonth: {
            options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
            control: { type: 'select' },
        },
        decrement: () => {},
        increment: () => {},
    },
    decorators: [
        (Story) => (
            <div style={{ minWidth: '200px' }}>
                <Story />
            </div>
        ),
    ],
}
export default meta
type Story = StoryObj<typeof MonthBar>

export const Base: Story = {
    args: {
        currentMonth: 1,
        year: 2024,
    },
}

export const ZeroYear: Story = {
    args: {
        currentMonth: 1,
        year: 0,
    },
}
