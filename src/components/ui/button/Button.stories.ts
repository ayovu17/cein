import type { Meta, StoryObj } from '@storybook/react-vite'
import { SearchIcon } from '@/components/ui'
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

export const Text: Story = {
  args: {
    variant: 'text',
    children: 'Button',
  },
}

export const Icon: Story = {
  args: {
    icon: SearchIcon,
  },
}
