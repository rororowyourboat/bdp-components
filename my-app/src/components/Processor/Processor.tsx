import React from 'react';

export interface Port {
  id: string;
  name?: string;
}

export interface Terminal {
  id: string;
  name?: string;
}

export interface PortMapping {
  portId: string;
  processorId: string;
}

export interface TerminalMapping {
  terminalId: string;
  processorId: string;
}

export interface Subsystem {
  systemId: string;
  portMappings: PortMapping[];
  terminalMappings: TerminalMapping[];
}

export interface ProcessorProps {
  id: string;
  name: string;
  description?: string;
  parent: string;
  ports: Port[];
  terminals: Terminal[];
  subsystem?: Subsystem;
  width?: number;
  height?: number;
  selected?: boolean;
  onPortClick?: (portId: string) => void;
  onTerminalClick?: (terminalId: string) => void;
  onProcessorClick?: () => void;
}

/**
 * Processor component represents a processing block in the BDP system.
 * It has ports (inputs) and terminals (outputs) that can be connected to other processors.
 */
export const Processor: React.FC<ProcessorProps> = ({
  id,
  name,
  description,
  ports,
  terminals,
  width = 200,
  height = 100,
  selected = false,
  onPortClick,
  onTerminalClick,
  onProcessorClick,
}) => {
  // Calculate spacing for ports and terminals
  const portSpacing = height / (ports.length + 1);
  const terminalSpacing = height / (terminals.length + 1);
  
  // Margins and sizes
  const margin = 10;
  const textMargin = 5;
  const portRadius = 8;
  const fontSize = 12;
  
  // Colors
  const backgroundColor = '#f5f5f5';
  const strokeColor = selected ? '#007acc' : '#333';
  const portColor = '#4a90e2';
  const terminalColor = '#50c878';
  const strokeWidth = selected ? 2 : 1;

  return (
    <svg 
      width={width + margin * 2} 
      height={height + margin * 2} 
      className="processor-component"
    >
      {/* Main processor body */}
      <rect
        x={margin}
        y={margin}
        width={width}
        height={height}
        fill={backgroundColor}
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        rx={4}
        ry={4}
        onClick={onProcessorClick}
        style={{ cursor: onProcessorClick ? 'pointer' : 'default' }}
      />
      
      {/* Processor name */}
      <text
        x={margin + width / 2}
        y={margin + 20}
        textAnchor="middle"
        fontSize={fontSize + 2}
        fontWeight="bold"
        fill="#333"
      >
        {name}
      </text>
      
      {/* Description (if provided) */}
      {description && (
        <text
          x={margin + width / 2}
          y={margin + 40}
          textAnchor="middle"
          fontSize={fontSize}
          fill="#666"
        >
          {description.length > 25 ? `${description.substring(0, 25)}...` : description}
        </text>
      )}
      
      {/* Ports (inputs) */}
      {ports.map((port, index) => (
        <g key={`port-${port.id}`} onClick={() => onPortClick?.(port.id)}>
          <circle
            cx={margin}
            cy={margin + (index + 1) * portSpacing}
            r={portRadius}
            fill={portColor}
            style={{ cursor: onPortClick ? 'pointer' : 'default' }}
          />
          <text
            x={margin + portRadius + textMargin}
            y={margin + (index + 1) * portSpacing + 4}
            fontSize={fontSize}
            fill="#333"
          >
            {port.name || `Port ${index + 1}`}
          </text>
        </g>
      ))}
      
      {/* Terminals (outputs) */}
      {terminals.map((terminal, index) => (
        <g key={`terminal-${terminal.id}`} onClick={() => onTerminalClick?.(terminal.id)}>
          <circle
            cx={margin + width}
            cy={margin + (index + 1) * terminalSpacing}
            r={portRadius}
            fill={terminalColor}
            style={{ cursor: onTerminalClick ? 'pointer' : 'default' }}
          />
          <text
            x={margin + width - portRadius - textMargin}
            y={margin + (index + 1) * terminalSpacing + 4}
            fontSize={fontSize}
            textAnchor="end"
            fill="#333"
          >
            {terminal.name || `Terminal ${index + 1}`}
          </text>
        </g>
      ))}
      
      {/* ID label (small, at bottom for reference) */}
      <text
        x={margin + width / 2}
        y={margin + height - 10}
        textAnchor="middle"
        fontSize={fontSize - 2}
        fill="#999"
      >
        ID: {id}
      </text>
    </svg>
  );
};

export default Processor;
