# BDP Components Library

This directory contains the core components for the Block Diagram Protocol (BDP) system. These components allow you to create visual representations of processing systems using the Processor, Wire, and related components.

## Component Overview

### Processor

The `Processor` component represents a processing block in the BDP system. It has:

- A rectangular body with a name and optional description
- Ports (inputs) on the left side
- Terminals (outputs) on the right side
- Support for selection state

```tsx
import { Processor } from './components/Processor';

<Processor
  id="processor-1"
  name="Data Source"
  description="Generates sample data"
  parent="source-block"
  ports={[{ id: 'p1', name: 'Control' }]}
  terminals={[{ id: 't1', name: 'Output' }]}
  width={200}
  height={100}
  selected={false}
  onPortClick={(portId) => console.log(`Port clicked: ${portId}`)}
  onTerminalClick={(terminalId) => console.log(`Terminal clicked: ${terminalId}`)}
  onProcessorClick={() => console.log('Processor clicked')}
/>
```

### Wire

The `Wire` component represents a connection between processors. It has:

- A curved line connecting a source point to a target point
- Direction indicators (arrows) showing data flow direction
- Support for different connection types (normal, diagnostic, control)
- Optional label to describe the connection
- Support for selection state and animation

```tsx
import { Wire } from './components/Wire';

<Wire
  id="wire-1"
  sourceX={100}
  sourceY={150}
  targetX={300}
  targetY={150}
  type="normal"
  label="Data Flow"
  showArrow={true}
  selected={false}
  animated={false}
  onWireClick={() => console.log('Wire clicked')}
/>
```

### ProcessorSystem

The `ProcessorSystem` component combines Processors and Wires to create a simple system view:

```tsx
import { ProcessorSystem } from './components/ProcessorSystem';

<ProcessorSystem
  processors={[/* array of processor objects */]}
  connections={[/* array of connection objects */]}
  width={800}
  height={600}
  onProcessorClick={(id) => console.log(`Processor clicked: ${id}`)}
  onWireClick={(id) => console.log(`Wire clicked: ${id}`)}
/>
```

### BDPCanvas

The `BDPCanvas` component is a more advanced version that includes support for:

- Zooming
- Grid display
- More precise positioning of elements

```tsx
import { BDPCanvas } from './components/ProcessorSystem';

<BDPCanvas
  processors={[/* array of positioned processor objects */]}
  connections={[/* array of connection objects with coordinates */]}
  width={1000}
  height={800}
  zoom={1.2}
  gridSize={20}
  showGrid={true}
  onProcessorClick={(id) => console.log(`Processor clicked: ${id}`)}
  onWireClick={(id) => console.log(`Wire clicked: ${id}`)}
/>
```

## Component Architecture

The BDP components follow this architecture:

1. **Base Components**:
   - `Processor`: Individual processing blocks
   - `Wire`: Connections between processors

2. **System Components**:
   - `ProcessorSystem`: Simple system with automatic layout
   - `BDPCanvas`: Advanced system with manual positioning and additional features

3. **Types and Interfaces**:
   - Each component exports TypeScript interfaces for its props
   - Common types like `Port`, `Terminal`, and `Connection` are reused

## Usage Examples

See the Storybook stories for each component for detailed usage examples:

- `Processor.stories.ts` - Examples of different processor configurations
- `Wire.stories.ts` - Examples of different wire types and styles
- `ProcessorSystem.stories.tsx` - Examples of simple processor systems
- `BDPCanvas.stories.tsx` - Examples of more complex systems with manual positioning

## Best Practices

1. **Processor Naming**:
   - Use clear, descriptive names for processors
   - Keep description text concise
   - Use consistent naming conventions for ports and terminals

2. **Connection Management**:
   - Use different wire types (normal, diagnostic, control) to indicate different data flows
   - Add labels to connections to describe the data being transmitted
   - Avoid crossing wires when possible

3. **Layout**:
   - Place related processors close to each other
   - Arrange processors in a logical flow from left to right or top to bottom
   - Use consistent spacing between processors

4. **Interaction**:
   - Implement handlers for processor and wire clicks
   - Use the selection state to highlight active elements
   - Consider adding tooltips or additional information on interaction

## Future Enhancements

Potential future enhancements for the BDP components:

1. Drag-and-drop support for processor placement
2. Auto-layout algorithms for complex systems
3. Minimap for navigating large systems
4. Collapsible processor groups
5. Zoom and pan controls for the canvas
6. Port/terminal type validation
7. Data flow simulation and visualization
