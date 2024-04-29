import { Meta, StoryObj } from '@storybook/react';

import Redirect from '.';


const meta: Meta<typeof Redirect> ={
    component: Redirect,
    title: 'Atoms/Redirect',
    tags: ["autodocs"],
}

export default meta;

type Story = StoryObj<typeof meta>

export const Base: Story = {}