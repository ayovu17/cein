import type { Meta, StoryObj } from '@storybook/react-vite'
import { CaretDown, PlusIcon } from '@/components'
import { Dropdown } from './Dropdown'

const meta = {
  title: 'ui/Dropdown',
  component: Dropdown,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Dropdown>

export default meta
type Story = StoryObj<typeof meta>

export const dropdownMD: Story = {
  args: {
    label: 'Dropdown',
    menu: ['Button', 'Button'],
    size: 'md',
  },
}
export const dropdownSM: Story = {
  args: {
    label: 'Dropdown',
    menu: ['Button', 'Button'],
    size: 'sm',
  },
}
export const dropdownXS: Story = {
  args: {
    label: 'Dropdown',
    menu: ['Button', 'Button'],
    size: 'xs',
  },
}

export const DropdownWithIconStart: Story = {
  args: {
    label: 'Dropdown',
    menu: ['Button', 'Button'],
    icon: PlusIcon,
    iconPosition: 'start',
  },
}

export const DropdownWithIconEnd: Story = {
  args: {
    label: 'Dropdown',
    menu: ['Button', 'Button'],
    icon: CaretDown,
    iconPosition: 'end',
  },
}

export const DropdownPlacementRight: Story = {
  args: {
    label: 'Dropdown',
    menu: ['Button', 'Button'],
    placement: 'right',
  },
}

export const DropdownPlacementCenter: Story = {
  args: {
    label: 'Dropdown',
    menu: ['Button', 'Button'],
    placement: 'center',
  },
}

export const DropdownPlacementLeft: Story = {
  args: {
    label: 'Dropdown',
    menu: ['Button', 'Button'],
    placement: 'left',
  },
}
