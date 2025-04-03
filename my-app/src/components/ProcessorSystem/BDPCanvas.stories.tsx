import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { BDPCanvas } from './BDPCanvas';

const meta = {
  title: 'BDP/BDPCanvas',
  component: BDPCanvas,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    zoom: { control: { type: 'range', min: 0.5, max: 2, step: 0.1 } },
    gridSize: { control: { type: 'range', min: 10, max: 50, step: 5 } },
    showGrid: { control: 'boolean' },
    width: { control: { type: 'range', min: 400, max: 1200, step: 50 } },
    height: { control: { type: 'range', min: 300, max: 900, step: 50 } },
  },
  args: {
    zoom: 1,
    gridSize: 20,
    showGrid: true,
    width: 800,
    height: 600,
    onProcessorClick: fn(),
    onWireClick: fn(),
  },
} satisfies Meta<typeof BDPCanvas>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic example with a few processors and connections
export const Basic: Story = {
  args: {
    processors: [
      {
        id: 'proc-1',
        x: 50,
        y: 50,
        processor: {
          id: 'source',
          name: 'Data Source',
          description: 'Generates data',
          parent: 'source-block',
          ports: [],
          terminals: [{ id: 't1', name: 'Output' }],
        },
      },
      {
        id: 'proc-2',
        x: 300,
        y: 50,
        processor: {
          id: 'process',
          name: 'Processor',
          description: 'Processes data',
          parent: 'process-block',
          ports: [{ id: 'p1', name: 'Input' }],
          terminals: [{ id: 't1', name: 'Output' }],
        },
      },
      {
        id: 'proc-3',
        x: 550,
        y: 50,
        processor: {
          id: 'sink',
          name: 'Data Sink',
          description: 'Stores data',
          parent: 'sink-block',
          ports: [{ id: 'p1', name: 'Input' }],
          terminals: [],
        },
      },
    ],
    connections: [
      {
        id: 'conn-1',
        sourceX: 250,
        sourceY: 80,
        targetX: 300,
        targetY: 80,
        label: 'Raw Data',
        showArrow: true,
      },
      {
        id: 'conn-2',
        sourceX: 500,
        sourceY: 80,
        targetX: 550,
        targetY: 80,
        label: 'Processed Data',
        showArrow: true,
      },
    ],
  },
};

// Showcase different wire types with arrows and animation
export const WireFeatures: Story = {
  args: {
    processors: [
      {
        id: 'proc-1',
        x: 50,
        y: 100,
        processor: {
          id: 'source',
          name: 'Source',
          parent: 'source-block',
          ports: [],
          terminals: [{ id: 't1', name: 'Output' }],
        },
      },
      {
        id: 'proc-2',
        x: 550,
        y: 100,
        processor: {
          id: 'sink',
          name: 'Sink',
          parent: 'sink-block',
          ports: [{ id: 'p1', name: 'Input' }],
          terminals: [],
        },
      },
    ],
    connections: [
      // Normal wire with arrow
      {
        id: 'conn-1',
        sourceX: 250,
        sourceY: 80,
        targetX: 550,
        targetY: 80,
        label: 'Normal Wire',
        type: 'normal',
        showArrow: true,
      },
      // Diagnostic wire with arrow
      {
        id: 'conn-2',
        sourceX: 250,
        sourceY: 120,
        targetX: 550,
        targetY: 120,
        label: 'Diagnostic Wire',
        type: 'diagnostic',
        showArrow: true,
      },
      // Control wire with arrow
      {
        id: 'conn-3',
        sourceX: 250,
        sourceY: 160,
        targetX: 550,
        targetY: 160,
        label: 'Control Wire',
        type: 'control',
        showArrow: true,
      },
      // Animated wire
      {
        id: 'conn-4',
        sourceX: 250,
        sourceY: 200,
        targetX: 550,
        targetY: 200,
        label: 'Animated Wire',
        type: 'normal',
        showArrow: true,
        animated: true,
      },
      // Wire without arrow
      {
        id: 'conn-5',
        sourceX: 250,
        sourceY: 240,
        targetX: 550,
        targetY: 240,
        label: 'No Arrow',
        type: 'normal',
        showArrow: false,
      },
    ],
    width: 800,
    height: 300,
  },
};

// Bidirectional wire example (implemented as two separate wires)
export const BidirectionalWires: Story = {
  args: {
    processors: [
      {
        id: 'proc-1',
        x: 50,
        y: 50,
        processor: {
          id: 'node-a',
          name: 'Node A',
          parent: 'node-block',
          ports: [{ id: 'p1', name: 'Input' }],
          terminals: [{ id: 't1', name: 'Output' }],
        },
      },
      {
        id: 'proc-2',
        x: 550,
        y: 50,
        processor: {
          id: 'node-b',
          name: 'Node B',
          parent: 'node-block',
          ports: [{ id: 'p1', name: 'Input' }],
          terminals: [{ id: 't1', name: 'Output' }],
        },
      },
    ],
    connections: [
      // Forward direction
      {
        id: 'conn-1-forward',
        sourceX: 250,
        sourceY: 75,
        targetX: 550,
        targetY: 75,
        label: 'Request',
        type: 'normal',
        showArrow: true,
      },
      // Backward direction
      {
        id: 'conn-1-backward',
        sourceX: 550,
        sourceY: 95,
        targetX: 250,
        targetY: 95,
        label: 'Response',
        type: 'normal',
        showArrow: true,
      },
    ],
    width: 800,
    height: 200,
  },
};

// Complex system with different processor types and connection types
export const ComplexSystem: Story = {
  args: {
    processors: [
      // Input layer
      {
        id: 'proc-1',
        x: 50,
        y: 50,
        processor: {
          id: 'input-a',
          name: 'Sensor A',
          parent: 'input-block',
          ports: [],
          terminals: [{ id: 't1', name: 'Data' }],
        },
      },
      {
        id: 'proc-2',
        x: 50,
        y: 200,
        processor: {
          id: 'input-b',
          name: 'Sensor B',
          parent: 'input-block',
          ports: [],
          terminals: [{ id: 't1', name: 'Data' }],
        },
      },
      // Processing layer
      {
        id: 'proc-3',
        x: 300,
        y: 50,
        processor: {
          id: 'filter-a',
          name: 'Filter A',
          description: 'Filters sensor A data',
          parent: 'filter-block',
          ports: [{ id: 'p1', name: 'Input' }],
          terminals: [
            { id: 't1', name: 'Output' },
            { id: 't2', name: 'Diagnostics' },
          ],
        },
      },
      {
        id: 'proc-4',
        x: 300,
        y: 200,
        processor: {
          id: 'filter-b',
          name: 'Filter B',
          description: 'Filters sensor B data',
          parent: 'filter-block',
          ports: [{ id: 'p1', name: 'Input' }],
          terminals: [
            { id: 't1', name: 'Output' },
            { id: 't2', name: 'Diagnostics' },
          ],
        },
      },
      // Aggregation layer
      {
        id: 'proc-5',
        x: 550,
        y: 125,
        processor: {
          id: 'aggregator',
          name: 'Data Aggregator',
          description: 'Combines filtered data',
          parent: 'aggregator-block',
          ports: [
            { id: 'p1', name: 'Input A' },
            { id: 'p2', name: 'Input B' },
          ],
          terminals: [{ id: 't1', name: 'Combined Output' }],
        },
      },
      // Output layer
      {
        id: 'proc-6',
        x: 800,
        y: 125,
        processor: {
          id: 'output',
          name: 'Data Storage',
          description: 'Stores processed data',
          parent: 'output-block',
          ports: [{ id: 'p1', name: 'Input' }],
          terminals: [],
        },
      },
      // Monitoring
      {
        id: 'proc-7',
        x: 550,
        y: 350,
        processor: {
          id: 'monitor',
          name: 'System Monitor',
          description: 'Monitors system health',
          parent: 'monitor-block',
          ports: [
            { id: 'p1', name: 'Diag A' },
            { id: 'p2', name: 'Diag B' },
          ],
          terminals: [],
        },
      },
    ],
    connections: [
      // Data flow connections
      {
        id: 'conn-1',
        sourceX: 250,
        sourceY: 80,
        targetX: 300,
        targetY: 80,
        label: 'Sensor A Data',
        showArrow: true,
      },
      {
        id: 'conn-2',
        sourceX: 250,
        sourceY: 230,
        targetX: 300,
        targetY: 230,
        label: 'Sensor B Data',
        showArrow: true,
      },
      {
        id: 'conn-3',
        sourceX: 500,
        sourceY: 80,
        targetX: 550,
        targetY: 140,
        label: 'Filtered A',
        showArrow: true,
      },
      {
        id: 'conn-4',
        sourceX: 500,
        sourceY: 230,
        targetX: 550,
        targetY: 160,
        label: 'Filtered B',
        showArrow: true,
      },
      {
        id: 'conn-5',
        sourceX: 750,
        sourceY: 140,
        targetX: 800,
        targetY: 140,
        label: 'Aggregated Data',
        showArrow: true,
      },
      // Diagnostic connections
      {
        id: 'conn-6',
        sourceX: 500,
        sourceY: 110,
        targetX: 550,
        targetY: 360,
        type: 'diagnostic',
        label: 'Filter A Diagnostics',
        showArrow: true,
      },
      {
        id: 'conn-7',
        sourceX: 500,
        sourceY: 260,
        targetX: 550,
        targetY: 380,
        type: 'diagnostic',
        label: 'Filter B Diagnostics',
        showArrow: true,
      },
    ],
    width: 1000,
    height: 500,
  },
};

// Example with zoom controls to demonstrate scalability
export const Zoomed: Story = {
  args: {
    ...Basic.args,
    zoom: 1.5,
  },
};

// Example without grid for a cleaner look
export const NoGrid: Story = {
  args: {
    ...Basic.args,
    showGrid: false,
  },
};

// Example with animated data flow visualization
export const AnimatedDataFlow: Story = {
  args: {
    processors: [
      {
        id: 'proc-1',
        x: 50,
        y: 100,
        processor: {
          id: 'source',
          name: 'Data Source',
          description: 'Real-time data',
          parent: 'source-block',
          ports: [],
          terminals: [
            { id: 't1', name: 'High Priority' },
            { id: 't2', name: 'Normal Priority' },
            { id: 't3', name: 'Low Priority' },
          ],
        },
      },
      {
        id: 'proc-2',
        x: 300,
        y: 50,
        processor: {
          id: 'processor-a',
          name: 'Processor A',
          description: 'High priority',
          parent: 'processor-block',
          ports: [{ id: 'p1', name: 'Input' }],
          terminals: [{ id: 't1', name: 'Output' }],
        },
      },
      {
        id: 'proc-3',
        x: 300,
        y: 150,
        processor: {
          id: 'processor-b',
          name: 'Processor B',
          description: 'Normal priority',
          parent: 'processor-block',
          ports: [{ id: 'p1', name: 'Input' }],
          terminals: [{ id: 't1', name: 'Output' }],
        },
      },
      {
        id: 'proc-4',
        x: 300,
        y: 250,
        processor: {
          id: 'processor-c',
          name: 'Processor C',
          description: 'Low priority',
          parent: 'processor-block',
          ports: [{ id: 'p1', name: 'Input' }],
          terminals: [{ id: 't1', name: 'Output' }],
        },
      },
      {
        id: 'proc-5',
        x: 550,
        y: 150,
        processor: {
          id: 'sink',
          name: 'Data Sink',
          description: 'Aggregated data',
          parent: 'sink-block',
          ports: [
            { id: 'p1', name: 'High' },
            { id: 'p2', name: 'Normal' },
            { id: 'p3', name: 'Low' },
          ],
          terminals: [],
        },
      },
    ],
    connections: [
      // Source to processors
      {
        id: 'conn-1',
        sourceX: 250,
        sourceY: 70,
        targetX: 300,
        targetY: 60,
        label: 'High Priority',
        type: 'normal',
        showArrow: true,
        animated: true,
      },
      {
        id: 'conn-2',
        sourceX: 250,
        sourceY: 100,
        targetX: 300,
        targetY: 160,
        label: 'Normal Priority',
        type: 'normal',
        showArrow: true,
        animated: true,
      },
      {
        id: 'conn-3',
        sourceX: 250,
        sourceY: 130,
        targetX: 300,
        targetY: 260,
        label: 'Low Priority',
        type: 'normal',
        showArrow: true,
        animated: true,
      },
      // Processors to sink
      {
        id: 'conn-4',
        sourceX: 500,
        sourceY: 60,
        targetX: 550,
        targetY: 130,
        label: 'Processed High',
        type: 'normal',
        showArrow: true,
        animated: true,
      },
      {
        id: 'conn-5',
        sourceX: 500,
        sourceY: 160,
        targetX: 550,
        targetY: 150,
        label: 'Processed Normal',
        type: 'normal',
        showArrow: true,
        animated: true,
      },
      {
        id: 'conn-6',
        sourceX: 500,
        sourceY: 260,
        targetX: 550,
        targetY: 170,
        label: 'Processed Low',
        type: 'normal',
        showArrow: true,
        animated: true,
      },
    ],
    width: 800,
    height: 400,
  },
};
