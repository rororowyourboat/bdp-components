import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { fn } from '@storybook/test';
import { ProcessorSystem } from './ProcessorSystem';

const meta = {
  title: 'BDP/ProcessorSystem',
  component: ProcessorSystem,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    processors: { control: 'object' },
    connections: { control: 'object' },
    width: { control: { type: 'number', min: 400, max: 1200, step: 50 } },
    height: { control: { type: 'number', min: 300, max: 900, step: 50 } },
  },
  args: {
    onProcessorClick: fn(),
    onWireClick: fn(),
  },
} satisfies Meta<typeof ProcessorSystem>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic system with two processors and one connection
export const Basic: Story = {
  args: {
    processors: [
      {
        id: 'processor-1',
        name: 'Data Source',
        description: 'Generates sample data',
        parent: 'source-block',
        ports: [{ id: 'p1', name: 'Control' }],
        terminals: [{ id: 't1', name: 'Output' }],
      },
      {
        id: 'processor-2',
        name: 'Data Sink',
        description: 'Receives and stores data',
        parent: 'sink-block',
        ports: [{ id: 'p1', name: 'Input' }],
        terminals: [],
      },
    ],
    connections: [
      {
        id: 'conn-1',
        sourceProcessor: 'processor-1',
        sourceTerminal: 't1',
        targetProcessor: 'processor-2',
        targetPort: 'p1',
        type: 'normal',
        label: 'Data Flow',
        showArrow: true,
      },
    ],
    width: 800,
    height: 400,
  },
};

// Example with different wire types
export const WireTypes: Story = {
  args: {
    processors: [
      {
        id: 'processor-1',
        name: 'Data Source',
        description: 'Generates data',
        parent: 'source-block',
        ports: [{ id: 'p1', name: 'Control' }],
        terminals: [
          { id: 't1', name: 'Data' },
          { id: 't2', name: 'Diagnostics' },
          { id: 't3', name: 'Control' }
        ],
      },
      {
        id: 'processor-2',
        name: 'Data Processor',
        description: 'Processes data',
        parent: 'processor-block',
        ports: [
          { id: 'p1', name: 'Data Input' },
          { id: 'p2', name: 'Diagnostics' },
          { id: 'p3', name: 'Control' }
        ],
        terminals: [],
      },
    ],
    connections: [
      {
        id: 'conn-1',
        sourceProcessor: 'processor-1',
        sourceTerminal: 't1',
        targetProcessor: 'processor-2',
        targetPort: 'p1',
        type: 'normal',
        label: 'Data Flow',
        showArrow: true,
      },
      {
        id: 'conn-2',
        sourceProcessor: 'processor-1',
        sourceTerminal: 't2',
        targetProcessor: 'processor-2',
        targetPort: 'p2',
        type: 'diagnostic',
        label: 'Diagnostics',
        showArrow: true,
      },
      {
        id: 'conn-3',
        sourceProcessor: 'processor-1',
        sourceTerminal: 't3',
        targetProcessor: 'processor-2',
        targetPort: 'p3',
        type: 'control',
        label: 'Control Flow',
        showArrow: true,
      },
    ],
    width: 800,
    height: 400,
  },
};

// Example with bidirectional connections
export const BidirectionalConnections: Story = {
  args: {
    processors: [
      {
        id: 'processor-1',
        name: 'Client',
        description: 'Initiates requests',
        parent: 'client-block',
        ports: [{ id: 'p1', name: 'Receive' }],
        terminals: [{ id: 't1', name: 'Send' }],
      },
      {
        id: 'processor-2',
        name: 'Server',
        description: 'Processes requests',
        parent: 'server-block',
        ports: [{ id: 'p1', name: 'Receive' }],
        terminals: [{ id: 't1', name: 'Send' }],
      },
    ],
    connections: [
      {
        id: 'conn-1',
        sourceProcessor: 'processor-1',
        sourceTerminal: 't1',
        targetProcessor: 'processor-2',
        targetPort: 'p1',
        type: 'normal',
        label: 'Request',
        showArrow: true,
      },
      {
        id: 'conn-2',
        sourceProcessor: 'processor-2',
        sourceTerminal: 't1',
        targetProcessor: 'processor-1',
        targetPort: 'p1',
        type: 'normal',
        label: 'Response',
        showArrow: true,
      },
    ],
    width: 800,
    height: 400,
  },
};

// Example with a single bidirectional wire connection
export const SingleBidirectionalConnection: Story = {
  args: {
    processors: [
      {
        id: 'processor-1',
        name: 'Node A',
        description: 'Peer Node',
        parent: 'node-block',
        ports: [{ id: 'p1', name: 'Receive' }],
        terminals: [{ id: 't1', name: 'Send' }],
      },
      {
        id: 'processor-2',
        name: 'Node B',
        description: 'Peer Node',
        parent: 'node-block',
        ports: [{ id: 'p1', name: 'Receive' }],
        terminals: [{ id: 't1', name: 'Send' }],
      },
    ],
    connections: [
      {
        id: 'conn-1',
        sourceProcessor: 'processor-1',
        sourceTerminal: 't1',
        targetProcessor: 'processor-2',
        targetPort: 'p1',
        type: 'normal',
        label: 'Peer Communication',
        bidirectional: true,
        showArrow: true,
      },
    ],
    width: 800,
    height: 400,
  },
};

// Example with animated data flow
export const AnimatedDataFlow: Story = {
  args: {
    processors: [
      {
        id: 'processor-1',
        name: 'Source',
        description: 'Active data source',
        parent: 'source-block',
        ports: [],
        terminals: [{ id: 't1', name: 'Output' }],
      },
      {
        id: 'processor-2',
        name: 'Processor',
        description: 'Processing data',
        parent: 'processor-block',
        ports: [{ id: 'p1', name: 'Input' }],
        terminals: [{ id: 't1', name: 'Output' }],
      },
      {
        id: 'processor-3',
        name: 'Sink',
        description: 'Receiving data',
        parent: 'sink-block',
        ports: [{ id: 'p1', name: 'Input' }],
        terminals: [],
      },
    ],
    connections: [
      {
        id: 'conn-1',
        sourceProcessor: 'processor-1',
        sourceTerminal: 't1',
        targetProcessor: 'processor-2',
        targetPort: 'p1',
        type: 'normal',
        label: 'Active Feed',
        showArrow: true,
        animated: true,
      },
      {
        id: 'conn-2',
        sourceProcessor: 'processor-2',
        sourceTerminal: 't1',
        targetProcessor: 'processor-3',
        targetPort: 'p1',
        type: 'normal',
        label: 'Processed Data',
        showArrow: true,
        animated: true,
      },
    ],
    width: 800,
    height: 400,
  },
};

// A more complete example with realistic positioning
const CompleteExample = () => {
  // Define processors with actual positions for a more realistic layout
  const processors = [
    {
      id: 'source',
      name: 'Source',
      description: 'Data Generator',
      parent: 'source-block',
      ports: [],
      terminals: [{ id: 't1', name: 'Output' }],
    },
    {
      id: 'filter',
      name: 'Filter',
      description: 'Data Filter',
      parent: 'filter-block',
      ports: [{ id: 'p1', name: 'Input' }],
      terminals: [
        { id: 't1', name: 'Output' },
        { id: 't2', name: 'Rejected' },
      ],
    },
    {
      id: 'transform',
      name: 'Transform',
      description: 'Data Transformer',
      parent: 'transform-block',
      ports: [{ id: 'p1', name: 'Input' }],
      terminals: [{ id: 't1', name: 'Output' }],
    },
    {
      id: 'sink',
      name: 'Sink',
      description: 'Data Storage',
      parent: 'sink-block',
      ports: [{ id: 'p1', name: 'Input' }],
      terminals: [],
    },
    {
      id: 'monitor',
      name: 'Monitor',
      description: 'System Monitor',
      parent: 'monitor-block',
      ports: [{ id: 'p1', name: 'Input' }],
      terminals: [],
    },
  ];

  // Render the full system with custom positioning
  return (
    <svg width={800} height={500}>
      {/* Background */}
      <rect x="0" y="0" width={800} height={500} fill="#f8f8f8" />
      
      {/* Connections */}
      {/* Source to Filter */}
      <path
        d="M 220 70 C 260 70, 280 70, 320 70"
        stroke="#666"
        strokeWidth={2}
        fill="none"
        markerEnd="url(#arrow)"
      />
      
      {/* Filter to Transform */}
      <path
        d="M 520 70 C 560 70, 580 70, 620 70"
        stroke="#666"
        strokeWidth={2}
        fill="none"
        markerEnd="url(#arrow)"
      />
      
      {/* Transform to Sink */}
      <path
        d="M 820 70 C 860 70, 880 150, 320 250"
        stroke="#666"
        strokeWidth={2}
        fill="none"
        markerEnd="url(#arrow)"
      />
      
      {/* Filter to Monitor (diagnostic) */}
      <path
        d="M 520 110 C 550 110, 550 250, 320 350"
        stroke="#ff9900"
        strokeWidth={2}
        fill="none"
        strokeDasharray="5,5"
        markerEnd="url(#diagnostic-arrow)"
      />
      
      {/* Arrow definitions */}
      <defs>
        <marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="5" orient="auto">
          <path d="M0,0 L0,10 L10,5 z" fill="#666" />
        </marker>
        <marker id="diagnostic-arrow" markerWidth="10" markerHeight="10" refX="9" refY="5" orient="auto">
          <path d="M0,0 L0,10 L10,5 z" fill="#ff9900" />
        </marker>
      </defs>
      
      {/* Processors */}
      <g transform="translate(20, 20)">
        <Processor {...processors[0]} width={200} height={100} />
      </g>
      
      <g transform="translate(320, 20)">
        <Processor {...processors[1]} width={200} height={100} />
      </g>
      
      <g transform="translate(620, 20)">
        <Processor {...processors[2]} width={200} height={100} />
      </g>
      
      <g transform="translate(320, 200)">
        <Processor {...processors[3]} width={200} height={100} />
      </g>
      
      <g transform="translate(320, 320)">
        <Processor {...processors[4]} width={200} height={100} />
      </g>
      
      {/* Labels */}
      <text x="140" y="480" fontSize={14} textAnchor="middle">Source → Filter → Transform → Sink</text>
      <text x="530" y="390" fontSize={14} textAnchor="middle" fill="#ff9900">Diagnostic Flow</text>
    </svg>
  );
};

// Custom complete example with accurate positioning
export const Complete: Story = {
  render: () => <CompleteExample />,
};

// Import the Processor to use in the custom example
import { Processor } from '../Processor';
