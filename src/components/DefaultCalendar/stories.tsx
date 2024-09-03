import { DefaultCalendar } from '.'

import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof DefaultCalendar> = {
    title: 'Components/DefaultCalendar',
    component: DefaultCalendar,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
}
export default meta
type Story = StoryObj<typeof DefaultCalendar>

export const Base: Story = {}
