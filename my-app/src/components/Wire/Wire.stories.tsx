import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Wire } from './Wire';

const meta: Meta<typeof Wire> = {
  title: 'BDP/Wire',
  component: Wire,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    id: { control: 'text' },
    sourceX: { control: { type: 'number', min: 0, max: 500 } },
    sourceY: { control: { type: 'number', min: 0, max: 500 } },
    targetX: { control: { type: 'number', min: 0, max: 500 } },
    targetY: { control: { type: 'number', min: 0, max: 500 } },
    type: { 
      control: 'select', 
      options: ['normal', 'diagnostic', 'control'] 
    },
    selected: { control: 'boolean' },
    animated: { control: 'boolean' },
    label: { control: 'text' },
    showArrow: { control: 'boolean' },
    reversed: { control: 'boolean' },
  },
  args: {
    onWireClick: fn(),
    showArrow: true,
  },
  decorators: [
    (Story) => (
      <svg width="600" height="300">
        <rect x="0" y="0" width="600" height="300" fill="#f8f8f8" />
        <Story />
      </svg>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Wire>;

// Basic wire with default settings
export const Basic: Story = {
  args: {
    id: 'wire-001',
    sourceX: 100,
    sourceY: 150,
    targetX: 500,
    targetY: 150,
    type: 'normal',
    selected: false,
    animated: false,
  },
};

// Wire with a label
export const WithLabel: Story = {
  args: {
    ...Basic.args,
    id: 'wire-label',
    label: 'Data Connection',
  },
};

// Selected wire (highlighted)
export const Selected: Story = {
  args: {
    ...Basic.args,
    id: 'wire-selected',
    selected: true,
  },
};

// Diagnostic wire (dashed)
export const Diagnostic: Story = {
  args: {
    ...Basic.args,
    id: 'wire-diagnostic',
    type: 'diagnostic',
    label: 'Diagnostic Flow',
  },
};

// Control wire (purple)
export const Control: Story = {
  args: {
    ...Basic.args,
    id: 'wire-control',
    type: 'control',
    label: 'Control Signal',
  },
};

// Animated wire (moving dashes)
export const Animated: Story = {
  args: {
    ...Basic.args,
    id: 'wire-animated',
    animated: true,
    label: 'Animated Data Flow',
  },
};

// Curved wire (with vertical offset)
export const Curved: Story = {
  args: {
    id: 'wire-curved',
    sourceX: 100,
    sourceY: 100,
    targetX: 500,
    targetY: 200,
    type: 'normal',
    label: 'Curved Connection',
  },
};

// Wire without arrow
export const WithoutArrow: Story = {
  args: {
    ...Basic.args,
    id: 'wire-no-arrow',
    showArrow: false,
    label: 'No Direction Indicator',
  },
};

// Bidirectional wire example (two wires)
export const Bidirectional: Story = {
  render: () => (
    <>
      <Wire
        id="wire-forward"
        sourceX={100}
        sourceY={150}
        targetX={500}
        targetY={150}
        type="normal"
        label="Forward"
      />
      <Wire
        id="wire-backward"
        sourceX={500}
        sourceY={190}
        targetX={100}
        targetY={190}
        type="normal"
        label="Backward"
        reversed={true}
      />
    </>
  ),
};

// Multiple wires demo
export const MultipleWires: Story = {
  render: () => (
    <>
      <Wire
        id="wire-normal"
        sourceX={50}
        sourceY={50}
        targetX={550}
        targetY={50}
        type="normal"
        label="Data"
      />
      <Wire
        id="wire-diag"
        sourceX={50}
        sourceY={150}
        targetX={550}
        targetY={150}
        type="diagnostic"
        label="Diagnostics"
      />
      <Wire
        id="wire-control"
        sourceX={50}
        sourceY={250}
        targetX={550}
        targetY={250}
        type="control"
        label="Control"
      />
    </>
  ),
};

// Direction indicators for different wire types
export const DirectionIndicators: Story = {
  render: () => (
    <>
      <Wire
        id="normal-dir"
        sourceX={50}
        sourceY={75}
        targetX={550}
        targetY={75}
        type="normal"
        label="Normal Flow"
      />
      <Wire
        id="diag-dir"
        sourceX={50}
        sourceY={150}
        targetX={550}
        targetY={150}
        type="diagnostic"
        label="Diagnostic Flow"
      />
      <Wire
        id="control-dir"
        sourceX={50}
        sourceY={225}
        targetX={550}
        targetY={225}
        type="control"
        label="Control Flow"
      />
    </>
  ),
};

// Arrow direction demo
export const ArrowDirection: Story = {
  render: () => (
    <>
      <Wire
        id="forward-arrow"
        sourceX={100}
        sourceY={100}
        targetX={500}
        targetY={100}
        type="normal"
        label="Standard (Forward) Arrow"
      />
      <Wire
        id="backward-arrow"
        sourceX={500}
        sourceY={180}
        targetX={100}
        targetY={180}
        type="normal"
        label="Standard Backward (Wrong Direction)"
      />
      <Wire
        id="reversed-arrow"
        sourceX={500}
        sourceY={260}
        targetX={100}
        targetY={260}
        type="normal"
        label="Reversed Arrow (Correct Direction)"
        reversed={true}
      />
    </>
  ),
};
