import { DefaultCalendar } from './index'

export default {
    title: 'Components/DefaultCalendar',
    component: DefaultCalendar,
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
