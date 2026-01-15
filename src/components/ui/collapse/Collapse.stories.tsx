import type { Meta, StoryObj } from '@storybook/react-vite'
import { Collapse } from './Collapse'

const meta = {
  title: 'ui/Collapse',
  component: Collapse,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Collapse>

export default meta
type Story = StoryObj<typeof meta>

export const collapse: Story = {
  args: {
    label: 'Collapse',
    color: 'black',
    children: <Collapse label="Inner Collapse" color="gray">children</Collapse>,
  },
}
