import React, { useId } from 'react';
import './Wire.css';

export interface WireProps {
  id: string;
  sourceX: number;
  sourceY: number;
  targetX: number;
  targetY: number;
  type?: 'normal' | 'diagnostic' | 'control';
  selected?: boolean;
  animated?: boolean;
  label?: string;
  showArrow?: boolean;
  reversed?: boolean; // Added to control arrow direction
  onWireClick?: () => void;
}

/**
 * Wire component represents a connection between a terminal and a port
 * in the BDP system.
 */
export const Wire: React.FC<WireProps> = ({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  type = 'normal',
  selected = false,
  animated = false,
  label,
  showArrow = true,
  reversed = false,
  onWireClick,
}) => {
  // Generate a unique ID for this component instance
  const uniqueId = useId();
  
  // Calculate the control points for the bezier curve
  const dx = targetX - sourceX;
  const controlPointOffset = Math.min(Math.abs(dx) * 0.5, 100);
  
  // Path styling based on wire type
  let strokeColor = '#666';
  let strokeWidth = selected ? 3 : 2;
  let strokeDasharray = '';
  
  switch (type) {
    case 'diagnostic':
      strokeColor = '#ff9900';
      strokeDasharray = '5,5';
      break;
    case 'control':
      strokeColor = '#9370db';
      break;
    default:
      strokeColor = '#666';
  }
  
  // Path definition
  const path = `M ${sourceX} ${sourceY} C ${sourceX + controlPointOffset} ${sourceY}, ${targetX - controlPointOffset} ${targetY}, ${targetX} ${targetY}`;
  
  // Create a truly unique ID for the marker to avoid conflicts
  const markerId = `arrow-${uniqueId}`;
  
  // CSS class for animation
  const pathClass = animated ? 'animated-path' : '';
  
  return (
    <g className="wire-component">
      {/* Arrow marker definition */}
      {showArrow && (
        <defs>
          <marker
            id={markerId}
            markerWidth="10"
            markerHeight="10"
            refX="9"
            refY="5"
            orient="auto"
            markerUnits="strokeWidth"
          >
            <path d="M0,0 L0,10 L10,5 z" fill={strokeColor} />
          </marker>
        </defs>
      )}
      
      {/* Wire path */}
      <path
        d={path}
        className={pathClass}
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        fill="none"
        strokeDasharray={animated ? '5,5' : strokeDasharray}
        markerEnd={showArrow && !reversed ? `url(#${markerId})` : undefined}
        markerStart={showArrow && reversed ? `url(#${markerId})` : undefined}
        onClick={onWireClick}
        style={{ 
          cursor: onWireClick ? 'pointer' : 'default'
        }}
      />
      
      {/* Wire label (if provided) */}
      {label && (
        <text
          x={(sourceX + targetX) / 2}
          y={(sourceY + targetY) / 2 - 10}
          textAnchor="middle"
          fontSize={10}
          fill={strokeColor}
          pointerEvents="none"
        >
          {label}
        </text>
      )}
      
      {/* Add a transparent wider path for easier clicking */}
      <path
        d={path}
        stroke="transparent"
        strokeWidth={10}
        fill="none"
        onClick={onWireClick}
        style={{ cursor: onWireClick ? 'pointer' : 'default' }}
      />
    </g>
  );
};

export default Wire;
