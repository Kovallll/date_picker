import { Day } from './index'

export default {
    title: 'Components/Day',
    component: Day,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        isDisabled: {
            options: [true, false],
            control: { type: 'radio' },
        },
        isActive: {
            options: [true, false],
            control: { type: 'radio' },
        },
        inRange: {
            options: [true, false],
            control: { type: 'radio' },
        },
        isStartRange: {
            options: [true, false],
            control: { type: 'radio' },
        },
        size: {
            options: ['small', 'medium', 'large'],
            control: { type: 'select' },
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

export const Small = {
    args: {
        size: 'small',
        children: 10,
        isActive: false,
    },
}

export const Medium = {
    args: {
        size: 'medium',
        children: 10,
        isActive: false,
    },
}

export const Large = {
    args: {
        size: 'large',
        children: 10,
        isActive: false,
    },
}

export const Active = {
    args: {
        children: 10,
        isActive: true,
    },
}

export const inRange = {
    args: {
        children: 10,
        inRange: true,
    },
}

export const startRange = {
    args: {
        children: 10,
        isStartRange: true,
    },
}

export const disabled = {
    args: {
        children: 10,
        isDisabled: true,
    },
}
