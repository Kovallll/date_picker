import { CalendarWithChangeStartDay } from '.'

import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof CalendarWithChangeStartDay> = {
    title: 'Components/CalendarWithChangeStartDay',
    component: CalendarWithChangeStartDay,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
}
export default meta
type Story = StoryObj<typeof CalendarWithChangeStartDay>

export const Base: Story = {}
