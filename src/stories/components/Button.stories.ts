import type { Meta, StoryObj } from '@storybook/vue3'
import Button from '../../components/Button.vue'

const meta: Meta<typeof Button> = {
  component: Button,
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'outline'],
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
}

export default meta

type Story = StoryObj<typeof Button>

const storyOptions: Omit<Story, 'args'> = {
  render: (args) => ({
    components: { Button },
    setup() {
      return { args }
    },
    template: `<Button v-bind="args">${args.default}</Button>`,
  }),
}


// Exports

export const Primary: Story = {
  ...storyOptions,
  args: {
    default: 'Button',
    variant: 'primary',
  },
}

export const PrimaryDisabled: Story = {
  ...storyOptions,
  args: {
    default: 'Button',
    variant: 'primary',
    disabled: true,
  },
}

export const Outline: Story = {
  ...storyOptions,
  args: {
    default: 'Button',
    variant: 'outline',
  },
}

export const OutlineDisabled: Story = {
  ...storyOptions,
  args: {
    default: 'Button',
    variant: 'outline',
    disabled: true,
  },
}
