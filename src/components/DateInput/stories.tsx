import { DateInput } from '.'

import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof DateInput> = {
    title: 'Components/DateInput',
    component: DateInput,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
}
export default meta
type Story = StoryObj<typeof DateInput>

export const Base: Story = {
    args: {},
}
