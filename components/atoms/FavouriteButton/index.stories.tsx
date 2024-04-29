import { Meta, StoryObj } from '@storybook/react';

import FavouriteButton from '.';


const meta: Meta<typeof FavouriteButton> ={
    component: FavouriteButton,
    title: 'Atoms/FavouriteButton',
    tags: ["autodocs"],
}

export default meta;

type Story = StoryObj<typeof meta>

export const Primary: Story = {}