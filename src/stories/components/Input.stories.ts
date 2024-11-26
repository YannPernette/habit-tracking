import type { Meta, StoryObj } from '@storybook/vue3'
import Input from '../../components/Input.vue'

const meta: Meta<typeof Input> = {
  component: Input,
  argTypes: {
    placeholder: {
      control: { type: 'text' },
    },
    type: {
      control: { type: 'text' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
}

export default meta

type Story = StoryObj<typeof Input>

const storyOptions: Omit<Story, 'args'> = {
  render: (args) => ({
    components: { Input },
    setup() {
      return { args }
    },
    template: `<Input v-bind="args" />`,
  }),
}


// Exports

export const Normal: Story = {
  ...storyOptions,
  args: {
    placeholder: 'Input text',
    type: 'text',
  },
}

export const Disabled: Story = {
  ...storyOptions,
  args: {
    placeholder: 'Input text',
    type: 'text',
    disabled: true,
  },
}
