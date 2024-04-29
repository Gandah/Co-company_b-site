import { Meta, StoryObj } from '@storybook/react';

import DetailCard from './index';

const meta: Meta<typeof DetailCard> ={
    component: DetailCard,
    title: 'Components/DetailCard',
    tags: ["autodocs"],
}

export default meta;

type Story = StoryObj<typeof meta>

export const Base: Story = {
    args: {

    }
}