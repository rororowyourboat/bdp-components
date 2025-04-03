import React, { useState } from 'react';
import { Processor, ProcessorProps } from '../Processor/Processor';
import { Wire } from '../Wire/Wire';

export interface Connection {
  id: string;
  sourceProcessor: string;
  sourceTerminal: string;
  targetProcessor: string;
  targetPort: string;
  type?: 'normal' | 'diagnostic' | 'control';
  label?: string;
  showArrow?: boolean;
  animated?: boolean;
  bidirectional?: boolean;
}

export interface ProcessorSystemProps {
  processors: ProcessorProps[];
  connections: Connection[];
  width?: number;
  height?: number;
  onProcessorClick?: (processorId: string) => void;
  onWireClick?: (connectionId: string) => void;
}

/**
 * ProcessorSystem component combines multiple Processors and Wires
 * to create a visual representation of a BDP system.
 */
export const ProcessorSystem: React.FC<ProcessorSystemProps> = ({
  processors,
  connections,
  width = 800,
  height = 600,
  onProcessorClick,
  onWireClick,
}) => {
  const [selectedProcessor, setSelectedProcessor] = useState<string | null>(null);
  const [selectedConnection, setSelectedConnection] = useState<string | null>(null);
  
  // Calculate positions for connections
  type PositionMap = {
    [key: string]: {
      processor: {
        x: number;
        y: number;
        width: number;
        height: number;
      };
      ports: {
        [portId: string]: { x: number; y: number };
      };
      terminals: {
        [terminalId: string]: { x: number; y: number };
      };
    };
  };
  
  // This would normally be calculated based on your layout algorithm
  // For this example, we're using preset positions
  const processorPositions: PositionMap = {};
  
  // Helper to get processor position
  const getProcessorById = (id: string) => {
    return processors.find(p => p.id === id);
  };
  
  // Handle processor click
  const handleProcessorClick = (id: string) => {
    setSelectedProcessor(prevId => prevId === id ? null : id);
    onProcessorClick?.(id);
  };
  
  // Handle wire click
  const handleWireClick = (id: string) => {
    setSelectedConnection(prevId => prevId === id ? null : id);
    onWireClick?.(id);
  };
  
  return (
    <svg width={width} height={height} className="processor-system">
      {/* Background */}
      <rect x="0" y="0" width={width} height={height} fill="#f8f8f8" />
      
      {/* Render Wires */}
      {connections.map(connection => {
        // In a real implementation, these would be calculated from the positions
        // We're using hardcoded values here for the example
        const sourceX = 220; // Example source X
        const sourceY = 150; // Example source Y
        const targetX = 300; // Example target X
        const targetY = 150; // Example target Y
        
        // If the connection is bidirectional, render two wires
        if (connection.bidirectional) {
          return (
            <g key={connection.id}>
              {/* Forward direction */}
              <Wire
                id={`${connection.id}-forward`}
                sourceX={sourceX}
                sourceY={sourceY - 5}
                targetX={targetX}
                targetY={targetY - 5}
                type={connection.type}
                label={connection.label ? `${connection.label} (forward)` : undefined}
                showArrow={connection.showArrow}
                animated={connection.animated}
                selected={selectedConnection === connection.id}
                onWireClick={() => handleWireClick(connection.id)}
              />
              
              {/* Backward direction */}
              <Wire
                id={`${connection.id}-backward`}
                sourceX={targetX}
                sourceY={targetY + 5}
                targetX={sourceX}
                targetY={sourceY + 5}
                type={connection.type}
                label={connection.label ? `${connection.label} (backward)` : undefined}
                showArrow={connection.showArrow}
                animated={connection.animated}
                selected={selectedConnection === connection.id}
                onWireClick={() => handleWireClick(connection.id)}
              />
            </g>
          );
        }
        
        // For normal (unidirectional) connections
        return (
          <Wire
            key={connection.id}
            id={connection.id}
            sourceX={sourceX}
            sourceY={sourceY}
            targetX={targetX}
            targetY={targetY}
            type={connection.type}
            label={connection.label}
            showArrow={connection.showArrow}
            animated={connection.animated}
            selected={selectedConnection === connection.id}
            onWireClick={() => handleWireClick(connection.id)}
          />
        );
      })}
      
      {/* Render Processors */}
      {processors.map((processor, index) => {
        // In a real implementation, these would be calculated by a layout algorithm
        // We're using a simple vertical stack layout for the example
        const xPosition = 50;
        const yPosition = 50 + index * 150;
        
        return (
          <g key={processor.id} transform={`translate(${xPosition}, ${yPosition})`}>
            <Processor
              {...processor}
              selected={selectedProcessor === processor.id}
              onProcessorClick={() => handleProcessorClick(processor.id)}
            />
          </g>
        );
      })}
    </svg>
  );
};

export default ProcessorSystem;
