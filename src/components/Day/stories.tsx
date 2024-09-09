import Day from './index'

import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Day> = {
    component: Day,
    title: 'Components/Day',
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        $isDisabled: {
            options: [true, false],
            control: { type: 'radio' },
        },
        $isActive: {
            options: [true, false],
            control: { type: 'radio' },
        },
        $inRange: {
            options: [true, false],
            control: { type: 'radio' },
        },
        $isStartRange: {
            options: [true, false],
            control: { type: 'radio' },
        },
        $isEndRange: {
            options: [true, false],
            control: { type: 'radio' },
        },
    },

    decorators: [
        (Story) => (
            <div style={{ minWidth: '32px' }}>
                <Story />
            </div>
        ),
    ],
}

export default meta
type Story = StoryObj<typeof Day>

export const Active: Story = {
    args: {
        children: 10,
        $isActive: true,
    },
}

export const inRange: Story = {
    args: {
        children: 10,
        $inRange: true,
    },
}

export const startRange: Story = {
    args: {
        children: 10,
        $isStartRange: true,
    },
}

export const endRange: Story = {
    args: {
        children: 10,
        $isEndRange: true,
    },
}

export const disabled: Story = {
    args: {
        children: 10,
        $isDisabled: true,
    },
}
