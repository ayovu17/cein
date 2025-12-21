import type { Meta, StoryObj } from '@storybook/react-vite'
import { Typography } from './Typography'

const meta = {
  title: 'ui/Typography',
  component: Typography,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Typography>

export default meta
type Story = StoryObj<typeof meta>

export const Typography900: Story = {
  args: {
    variant: 'text-900',
    tag: 'h1',
    children: 'Typography',
  },
}

export const Typography600: Story = {
  args: {
    variant: 'text-600',
    tag: 'h2',
    children: 'Typography',
  },
}

export const Typography500: Story = {
  args: {
    variant: 'text-500',
    tag: 'p',
    children: 'Typography',
  },
}

export const Typography400: Story = {
  args: {
    variant: 'text-400',
    tag: 'p',
    children: 'Typography',
  },
}

export const Typography300: Story = {
  args: {
    variant: 'text-300',
    tag: 'span',
    children: 'Typography',
  },
}

export const Typography100: Story = {
  args: {
    variant: 'text-100',
    tag: 'span',
    children: 'Typography',
  },
}

export const Typography100CapGray: Story = {
  args: {
    variant: 'text-100cap',
    color: 'gray',
    tag: 'span',
    children: 'Typography',
  },
}
