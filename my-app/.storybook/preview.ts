import type { Preview } from '@storybook/react';
// Ensure CSS imports come before any other code
import '../src/app/storybook.css';
import { fn } from '@storybook/test';

const preview: Preview = {
  parameters: {
    actions: { 
      // Removed argTypesRegex as recommended by Storybook
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    // Force all Next.js components to be client-side rendered
    nextjs: {
      appDirectory: true,
    },
  },
  // Use explicit action assignment with fn
  argTypes: {
    onClick: { action: 'clicked' },
    onMouseEnter: { action: 'mouse entered' },
    onMouseLeave: { action: 'mouse left' },
    onSubmit: { action: 'submitted' },
    onCancel: { action: 'cancelled' },
    onClose: { action: 'closed' },
    onOpen: { action: 'opened' },
  },
  args: {
    // Use fn to spy on event handlers
    onClick: fn(),
    onMouseEnter: fn(),
    onMouseLeave: fn(),
    onSubmit: fn(),
    onCancel: fn(),
    onClose: fn(),
    onOpen: fn(),
  },
};

export default preview;