import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Processor } from './Processor';

// A story component that demonstrates connected processors
const ProcessorNetwork = () => {
  // SVG for the connection lines
  const renderConnections = () => (
    <g>
      {/* Arrow definition */}
      <defs>
        <marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="5" orient="auto">
          <path d="M0,0 L0,10 L10,5 z" fill="#666" />
        </marker>
      </defs>
      
      {/* Connection from Processor 1 to Processor 2 */}
      <path
        d="M 220 70 C 260 70, 280 70, 320 70"
        stroke="#666"
        strokeWidth={2}
        fill="none"
        markerEnd="url(#arrow)"
      />
      
      {/* Connection from Processor 1 to Processor 3 */}
      <path
        d="M 220 110 C 250 110, 250 150, 320 150"
        stroke="#666"
        strokeWidth={2}
        fill="none"
        markerEnd="url(#arrow)"
      />
      
      {/* Connection from Processor 2 to Processor 3 */}
      <path
        d="M 220 190 C 250 190, 250 190, 320 190"
        stroke="#666"
        strokeWidth={2}
        fill="none"
        markerEnd="url(#arrow)"
      />
    </g>
  );

  return (
    <svg width="800" height="300">
      {/* Background */}
      <rect x="0" y="0" width="800" height="300" fill="#f8f8f8" />
      
      {/* Connections between processors */}
      {renderConnections()}
      
      {/* Place Processors */}
      <g transform="translate(10, 10)">
        <Processor
          id="processor-1"
          name="Data Source"
          description="Generates sample data"
          parent="source-block"
          ports={[{ id: 'p1', name: 'Control' }]}
          terminals={[
            { id: 't1', name: 'Main Output' },
            { id: 't2', name: 'Status' }
          ]}
          width={200}
          height={120}
        />
      </g>
      
      <g transform="translate(320, 10)">
        <Processor
          id="processor-2"
          name="Transformer"
          description="Processes incoming data"
          parent="transformer-block"
          ports={[{ id: 'p1', name: 'Input' }]}
          terminals={[{ id: 't1', name: 'Result' }]}
          width={200}
          height={120}
        />
      </g>
      
      <g transform="translate(320, 150)">
        <Processor
          id="processor-3"
          name="Data Sink"
          description="Stores processed results"
          parent="sink-block"
          ports={[
            { id: 'p1', name: 'Data' },
            { id: 'p2', name: 'Config' }
          ]}
          terminals={[]}
          width={200}
          height={120}
        />
      </g>
    </svg>
  );
};

const meta = {
  title: 'BDP/Processor/Examples',
  component: ProcessorNetwork,
  parameters: {
    layout: 'centered',
    componentSubtitle: 'Example of connected processors in a network',
  },
} satisfies Meta<typeof ProcessorNetwork>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SimpleNetwork: Story = {};

// Define a more complex network with more nodes
const ComplexProcessorNetwork = () => {
  return (
    <svg width="1000" height="500">
      {/* Background */}
      <rect x="0" y="0" width="1000" height="500" fill="#f8f8f8" />
      
      {/* Marker definitions */}
      <defs>
        <marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="5" orient="auto">
          <path d="M0,0 L0,10 L10,5 z" fill="#666" />
        </marker>
        <marker id="diagnostic-arrow" markerWidth="10" markerHeight="10" refX="9" refY="5" orient="auto">
          <path d="M0,0 L0,10 L10,5 z" fill="#ff9900" />
        </marker>
      </defs>
      
      {/* Connections */}
      <g>
        {/* Input to Process 1 */}
        <path
          d="M 220 70 C 250 70, 270 70, 300 70"
          stroke="#666"
          strokeWidth={2}
          fill="none"
          markerEnd="url(#arrow)"
        />
        
        {/* Input to Process 2 */}
        <path
          d="M 220 170 C 250 170, 270 170, 300 170"
          stroke="#666"
          strokeWidth={2}
          fill="none"
          markerEnd="url(#arrow)"
        />
        
        {/* Process 1 to Aggregator */}
        <path
          d="M 520 70 C 550 70, 570 120, 600 120"
          stroke="#666"
          strokeWidth={2}
          fill="none"
          markerEnd="url(#arrow)"
        />
        
        {/* Process 2 to Aggregator */}
        <path
          d="M 520 170 C 550 170, 570 150, 600 150"
          stroke="#666"
          strokeWidth={2}
          fill="none"
          markerEnd="url(#arrow)"
        />
        
        {/* Aggregator to Output */}
        <path
          d="M 820 135 C 850 135, 870 135, 900 135"
          stroke="#666"
          strokeWidth={2}
          fill="none"
          markerEnd="url(#arrow)"
        />
        
        {/* Process 1 to Monitor */}
        <path
          d="M 520 90 C 540 90, 560 250, 600 250"
          stroke="#ff9900"
          strokeWidth={2}
          fill="none"
          strokeDasharray="5,5"
          markerEnd="url(#diagnostic-arrow)"
        />
        
        {/* Process 2 to Monitor */}
        <path
          d="M 520 190 C 540 190, 560 270, 600 270"
          stroke="#ff9900"
          strokeWidth={2}
          fill="none"
          strokeDasharray="5,5"
          markerEnd="url(#diagnostic-arrow)"
        />
      </g>
      
      {/* Processors */}
      <g transform="translate(10, 10)">
        <Processor
          id="input-1"
          name="Sensor A"
          description="Temperature readings"
          parent="sensor-block"
          ports={[]}
          terminals={[{ id: 't1', name: 'Readings' }]}
          width={200}
          height={80}
        />
      </g>
      
      <g transform="translate(10, 110)">
        <Processor
          id="input-2"
          name="Sensor B"
          description="Humidity readings"
          parent="sensor-block"
          ports={[]}
          terminals={[{ id: 't1', name: 'Readings' }]}
          width={200}
          height={80}
        />
      </g>
      
      <g transform="translate(300, 10)">
        <Processor
          id="process-1"
          name="Temperature Filter"
          description="Filters temperature data"
          parent="filter-block"
          ports={[{ id: 'p1', name: 'Raw Data' }]}
          terminals={[
            { id: 't1', name: 'Filtered Data' },
            { id: 't2', name: 'Diagnostics' }
          ]}
          width={220}
          height={120}
        />
      </g>
      
      <g transform="translate(300, 150)">
        <Processor
          id="process-2"
          name="Humidity Filter"
          description="Filters humidity data"
          parent="filter-block"
          ports={[{ id: 'p1', name: 'Raw Data' }]}
          terminals={[
            { id: 't1', name: 'Filtered Data' },
            { id: 't2', name: 'Diagnostics' }
          ]}
          width={220}
          height={120}
        />
      </g>
      
      <g transform="translate(600, 80)">
        <Processor
          id="aggregator"
          name="Data Aggregator"
          description="Combines sensor data"
          parent="aggregator-block"
          ports={[
            { id: 'p1', name: 'Temp Data' },
            { id: 'p2', name: 'Humidity Data' }
          ]}
          terminals={[{ id: 't1', name: 'Combined Data' }]}
          width={220}
          height={120}
          selected={true}
        />
      </g>
      
      <g transform="translate(600, 220)">
        <Processor
          id="monitor"
          name="System Monitor"
          description="Monitors process health"
          parent="monitor-block"
          ports={[
            { id: 'p1', name: 'Temp Diag' },
            { id: 'p2', name: 'Humidity Diag' }
          ]}
          terminals={[]}
          width={220}
          height={100}
        />
      </g>
      
      <g transform="translate(900, 80)">
        <Processor
          id="output"
          name="Data Store"
          description="Stores processed data"
          parent="storage-block"
          ports={[{ id: 'p1', name: 'Data Input' }]}
          terminals={[]}
          width={180}
          height={100}
        />
      </g>
      
      {/* Legend */}
      <g transform="translate(20, 420)">
        <text x="0" y="0" fontSize="14" fontWeight="bold">Legend:</text>
        <line x1="0" y1="15" x2="30" y2="15" stroke="#666" strokeWidth="2" markerEnd="url(#arrow)" />
        <text x="40" y="20" fontSize="12">Data Flow</text>
        
        <line x1="150" y1="15" x2="180" y2="15" stroke="#ff9900" strokeWidth="2" strokeDasharray="5,5" markerEnd="url(#diagnostic-arrow)" />
        <text x="190" y="20" fontSize="12">Diagnostic Flow</text>
        
        <rect x="300" y="5" width="20" height="15" fill="#f5f5f5" stroke="#007acc" strokeWidth="2" rx="2" ry="2" />
        <text x="330" y="20" fontSize="12">Selected Processor</text>
      </g>
    </svg>
  );
};

export const ComplexNetwork: Story = {
  render: () => <ComplexProcessorNetwork />
};
