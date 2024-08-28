import { WeekBar } from './index'

export default {
    title: 'Components/WeekBar',
    component: WeekBar,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        size: {
            options: ['small', 'medium', 'large'],
            control: { type: 'select' },
        },
    },
    decorators: [
        (Story) => (
            <div style={{ minWidth: '200px' }}>
                <Story />
            </div>
        ),
    ],
}

export const Small = {
    args: {
        size: 'small',
    },
}

export const Medium = {
    args: {
        size: 'medium',
    },
}

export const Large = {
    args: {
        size: 'large',
    },
}
