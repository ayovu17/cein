import type { Meta, StoryObj } from '@storybook/react-vite'
import { ColorPicker } from './ColorPicker'

const meta = {
  title: 'ui/ColorPicker',
  component: ColorPicker,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ColorPicker>

export default meta
type Story = StoryObj<typeof meta>

export const PickedColorPicker: Story = {
  args: {
    value: 'black',
    pickedColor: 'black',
    pickColor: () => {},
  },
}

export const UnpickedColorPicker: Story = {
  args: {
    value: 'black',
    pickedColor: 'camel',
    pickColor: () => {},
  },
}
