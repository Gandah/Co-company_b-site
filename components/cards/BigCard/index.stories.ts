import { Meta, StoryObj } from '@storybook/react';

import BigCard from './index';

const meta: Meta<typeof BigCard> ={
    component: BigCard,
    title: 'Components/BigCard',
    tags: ["autodocs"],
}

export default meta;

type Story = StoryObj<typeof meta>

export const Base: Story = {
    args: {

    }
}