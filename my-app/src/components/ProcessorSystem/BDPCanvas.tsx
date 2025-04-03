import React, { useState, useRef, useEffect } from 'react';
import { Processor, ProcessorProps } from '../Processor/Processor';
import { Wire } from '../Wire/Wire';

export interface ProcessorPosition {
  id: string;
  x: number;
  y: number;
  processor: ProcessorProps;
}

export interface ConnectionPosition {
  id: string;
  sourceX: number;
  sourceY: number;
  targetX: number;
  targetY: number;
  type?: 'normal' | 'diagnostic' | 'control';
  label?: string;
  showArrow?: boolean;
  animated?: boolean;
}

export interface BDPCanvasProps {
  processors: ProcessorPosition[];
  connections: ConnectionPosition[];
  width?: number;
  height?: number;
  zoom?: number;
  gridSize?: number;
  showGrid?: boolean;
  onProcessorClick?: (processorId: string) => void;
  onWireClick?: (connectionId: string) => void;
}

/**
 * BDPCanvas is a more advanced component for displaying and interacting with
 * a Block Diagram Protocol system, with support for zooming, panning, and grid.
 */
export const BDPCanvas: React.FC<BDPCanvasProps> = ({
  processors,
  connections,
  width = 800,
  height = 600,
  zoom = 1,
  gridSize = 20,
  showGrid = true,
  onProcessorClick,
  onWireClick,
}) => {
  const [selectedProcessor, setSelectedProcessor] = useState<string | null>(null);
  const [selectedConnection, setSelectedConnection] = useState<string | null>(null);
  
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
  
  // Render background grid
  const renderGrid = () => {
    if (!showGrid) return null;
    
    const lines = [];
    const scaledGridSize = gridSize * zoom;
    
    // Vertical lines
    for (let x = 0; x <= width; x += scaledGridSize) {
      lines.push(
        <line 
          key={`v-${x}`} 
          x1={x} 
          y1={0} 
          x2={x} 
          y2={height} 
          stroke="#ddd" 
          strokeWidth={1} 
        />
      );
    }
    
    // Horizontal lines
    for (let y = 0; y <= height; y += scaledGridSize) {
      lines.push(
        <line 
          key={`h-${y}`} 
          x1={0} 
          y1={y} 
          x2={width} 
          y2={y} 
          stroke="#ddd" 
          strokeWidth={1} 
        />
      );
    }
    
    return <g className="grid">{lines}</g>;
  };
  
  return (
    <div className="bdp-canvas-container" style={{ width, height, overflow: 'hidden', border: '1px solid #ccc' }}>
      <svg width={width} height={height} className="bdp-canvas">
        {/* Background */}
        <rect x={0} y={0} width={width} height={height} fill="#f8f8f8" />
        
        {/* Grid */}
        {renderGrid()}
        
        {/* Connections */}
        {connections.map(connection => (
          <Wire
            key={connection.id}
            id={connection.id}
            sourceX={connection.sourceX * zoom}
            sourceY={connection.sourceY * zoom}
            targetX={connection.targetX * zoom}
            targetY={connection.targetY * zoom}
            type={connection.type}
            label={connection.label}
            showArrow={connection.showArrow !== undefined ? connection.showArrow : true}
            animated={connection.animated}
            selected={selectedConnection === connection.id}
            onWireClick={() => handleWireClick(connection.id)}
          />
        ))}
        
        {/* Processors */}
        {processors.map(position => (
          <g 
            key={position.id} 
            transform={`translate(${position.x * zoom}, ${position.y * zoom}) scale(${zoom})`}
          >
            <Processor
              {...position.processor}
              selected={selectedProcessor === position.id}
              onProcessorClick={() => handleProcessorClick(position.id)}
            />
          </g>
        ))}
      </svg>
    </div>
  );
};

export default BDPCanvas;
