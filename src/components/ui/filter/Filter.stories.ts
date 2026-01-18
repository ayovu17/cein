import type { Meta, StoryObj } from '@storybook/react-vite'
import { Filter } from './Filter'

const meta = {
  title: 'ui/Filter',
  component: Filter,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Filter>

export default meta
type Story = StoryObj<typeof meta>

export const filter: Story = {
  args: {
    title: 'Filter',
    isActive: false,
    onClick: () => {},
  },
}
