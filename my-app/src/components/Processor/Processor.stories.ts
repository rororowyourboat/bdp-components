import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Processor } from './Processor';

const meta = {
  title: 'BDP/Processor',
  component: Processor,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    id: { control: 'text' },
    name: { control: 'text' },
    description: { control: 'text' },
    parent: { control: 'text' },
    width: { control: { type: 'range', min: 150, max: 500, step: 10 } },
    height: { control: { type: 'range', min: 80, max: 300, step: 10 } },
    selected: { control: 'boolean' },
    ports: { control: 'object' },
    terminals: { control: 'object' },
    subsystem: { control: 'object' },
  },
  args: {
    onPortClick: fn(),
    onTerminalClick: fn(),
    onProcessorClick: fn(),
  },
} satisfies Meta<typeof Processor>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic processor with minimal configuration
export const Basic: Story = {
  args: {
    id: 'proc-001',
    name: 'Basic Processor',
    description: 'A simple processing block',
    parent: 'toolbox-block-001',
    ports: [
      { id: 'port-001', name: 'Input 1' },
      { id: 'port-002', name: 'Input 2' },
    ],
    terminals: [
      { id: 'term-001', name: 'Output' },
    ],
    width: 270,
    height: 120,
    selected: false,
  },
};

// Processor with many inputs and outputs
export const Complex: Story = {
  args: {
    id: 'proc-002',
    name: 'Complex Processor',
    description: 'Multiple inputs and outputs',
    parent: 'toolbox-block-002',
    ports: [
      { id: 'port-001', name: 'Data In' },
      { id: 'port-002', name: 'Config' },
      { id: 'port-003', name: 'Control' },
      { id: 'port-004', name: 'Reference' },
    ],
    terminals: [
      { id: 'term-001', name: 'Main Output' },
      { id: 'term-002', name: 'Error' },
      { id: 'term-003', name: 'Status' },
    ],
    width: 240,
    height: 180,
    selected: false,
  },
};

// Processor with no description
export const Minimal: Story = {
  args: {
    id: 'proc-003',
    name: 'Minimal Processor',
    parent: 'toolbox-block-003',
    ports: [
      { id: 'port-001', name: 'In' },
    ],
    terminals: [
      { id: 'term-001', name: 'Out' },
    ],
    width: 180,
    height: 80,
    selected: false,
  },
};

// Selected processor (highlighted)
export const Selected: Story = {
  args: {
    ...Basic.args,
    selected: true,
  },
};

// Processor with subsystem
export const WithSubsystem: Story = {
  args: {
    ...Complex.args,
    subsystem: {
      systemId: 'sys-001',
      portMappings: [
        { portId: 'port-001', processorId: 'internal-proc-001' },
        { portId: 'port-002', processorId: 'internal-proc-002' },
      ],
      terminalMappings: [
        { terminalId: 'term-001', processorId: 'internal-proc-003' },
      ],
    },
  },
};
