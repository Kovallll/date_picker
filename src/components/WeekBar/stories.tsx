import WeekBar from './index'

import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof WeekBar> = {
    title: 'Components/WeekBar',
    component: WeekBar,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
    decorators: [
        (Story) => (
            <div style={{ minWidth: '240px' }}>
                <Story />
            </div>
        ),
    ],
}
export default meta
type Story = StoryObj<typeof WeekBar>

export const Base: Story = {
    args: {},
}
