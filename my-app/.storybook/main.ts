import type { StorybookConfig } from "@storybook/react-vite";
import { mergeConfig } from 'vite';
import { resolve } from 'path';

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@chromatic-com/storybook",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  viteFinal: async (config) => {
    // Merge custom configuration
    return mergeConfig(config, {
      resolve: {
        alias: {
          'next/image': resolve(__dirname, './mocks/next-image.js'),
          'next/link': resolve(__dirname, './mocks/next-link.js'),
        },
      },
      define: {
        'process.env': {},
      },
      server: {
        headers: {
          // Adjust Content Security Policy to allow eval (required by some Storybook features)
          'Content-Security-Policy': "script-src 'self' 'unsafe-eval'; object-src 'self'"
        }
      }
    });
  },
};

export default config;