import type { Meta, StoryObj } from '@storybook/react-vite'
import { SearchIcon } from '@/components'
import { Button } from './Button'

const meta = {
  title: 'ui/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const ContainBlack: Story = {
  args: {
    variant: 'contain',
    color: 'black',
    children: 'Button',
  },
}

export const ContainWhite: Story = {
  args: {
    variant: 'contain',
    color: 'white',
    children: 'Button',
  },
}

export const TextMDBlack: Story = {
  args: {
    variant: 'text',
    size: 'md',
    color: 'black',
    children: 'Button',
  },
}

export const TextSMBlack: Story = {
  args: {
    variant: 'text',
    size: 'sm',
    color: 'black',
    children: 'Button',
  },
}

export const TextXSGray: Story = {
  args: {
    variant: 'text',
    size: 'xs',
    color: 'gray',
    children: 'Button',
  },
}

export const Icon: Story = {
  args: {
    variant: 'icon',
    icon: SearchIcon,
  },
}
