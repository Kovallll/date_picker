import { CalendarWithRange } from '.'

import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof CalendarWithRange> = {
    title: 'Components/CalendarWithRange',
    component: CalendarWithRange,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
}
export default meta
type Story = StoryObj<typeof CalendarWithRange>

export const Base: Story = {}
