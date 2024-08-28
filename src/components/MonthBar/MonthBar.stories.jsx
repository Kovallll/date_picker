import { MonthBar } from './index'

export default {
    title: 'Components/MonthBar',
    component: MonthBar,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        size: {
            options: ['small', 'medium', 'large'],
            control: { type: 'select' },
        },
        monthCount: {
            options: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
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
        monthCount: 0,
    },
}

export const Medium = {
    args: {
        size: 'medium',
        monthCount: 0,
    },
}

export const Large = {
    args: {
        size: 'large',
        monthCount: 0,
    },
}
