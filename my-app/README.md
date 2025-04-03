# BDP Components Project

This project provides reusable React components for the Block Diagram Protocol (BDP) system. The components allow you to create, visualize, and interact with processing blocks and connections in a block diagram style.

## Overview

The BDP Components project includes:

- Reusable visual components for processors, wires, and systems
- Storybook documentation and examples
- TypeScript types and interfaces
- Interactive examples

## Components

The main components include:

- **Processor**: Represents a processing block with inputs (ports) and outputs (terminals)
- **Wire**: Represents a connection between processors
- **ProcessorSystem**: Combines processors and wires in a simple system view
- **BDPCanvas**: Advanced system view with grid, zoom, and positioning features

For detailed documentation on each component, see the [components README](./src/components/README.md).

## Getting Started

### Development Server

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Storybook

To run the Storybook documentation and examples:

```bash
npm run storybook
# or
yarn storybook
# or
pnpm storybook
# or
bun storybook
```

Open [http://localhost:6006](http://localhost:6006) to view the Storybook.

## Usage Examples

### Basic Processor

```tsx
import { Processor } from './src/components/Processor';

<Processor
  id="processor-1"
  name="Data Source"
  description="Generates sample data"
  parent="source-block"
  ports={[{ id: 'p1', name: 'Control' }]}
  terminals={[{ id: 't1', name: 'Output' }]}
/>
```

### Wire Connection

```tsx
import { Wire } from './src/components/Wire';

<Wire
  id="wire-1"
  sourceX={100}
  sourceY={150}
  targetX={300}
  targetY={150}
  type="normal"
  label="Data Flow"
/>
```

### Complete System

```tsx
import { BDPCanvas } from './src/components/ProcessorSystem';

<BDPCanvas
  processors={[
    {
      id: 'proc-1',
      x: 50,
      y: 50,
      processor: {
        id: 'source',
        name: 'Data Source',
        parent: 'source-block',
        ports: [],
        terminals: [{ id: 't1', name: 'Output' }],
      },
    },
    // ... more processors
  ]}
  connections={[
    {
      id: 'conn-1',
      sourceX: 250,
      sourceY: 80,
      targetX: 300,
      targetY: 80,
      label: 'Data Flow',
    },
    // ... more connections
  ]}
/>
```

## Project Structure

- `/src/components` - Core BDP components
- `/src/components/Processor` - Processor component and stories
- `/src/components/Wire` - Wire component and stories
- `/src/components/ProcessorSystem` - System components and stories
- `/src/stories` - Default Storybook examples

## Contributing

1. Fork the repository
2. Create a new branch for your feature
3. Add or update components as needed
4. Add Storybook stories for examples
5. Update documentation
6. Submit a pull request

## Learn More

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

For more information about Storybook:

- [Storybook Documentation](https://storybook.js.org/docs) - learn about Storybook features.
