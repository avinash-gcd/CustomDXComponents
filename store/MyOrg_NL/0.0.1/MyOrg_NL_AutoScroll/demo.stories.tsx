import type { Meta, StoryObj } from '@storybook/react';
import {
  PegaExtensionsAutoScrollTextField,
  type PegaExtensionsAutoScrollTextFieldProps,
} from './index';

export default {
  title: 'Fields/Auto-Scroll Text Field',
  component: PegaExtensionsAutoScrollTextField,
  argTypes: {
    fieldMetadata: {
      table: {
        disable: true,
      },
    },
    additionalProps: {
      table: {
        disable: true,
      },
    },
    displayMode: {
      table: {
        disable: true,
      },
    },
    hasSuggestions: {
      table: {
        disable: true,
      },
    },
    getPConnect: {
      table: {
        disable: true,
      },
    },
  } as any,
  parameters: {
    a11y: {
      context: '#storybook-root',
      config: {
        rules: [
          {
            id: 'autocomplete-valid',
            enabled: false,
          },
        ],
      },
    },
  },
} satisfies Meta<typeof PegaExtensionsAutoScrollTextField>;

type Story = StoryObj<typeof PegaExtensionsAutoScrollTextField>;

// ─── PCore / PConnect stubs ────────────────────────────────────────────────

const setPCore = () => {
  (window as any).PCore = {
    getComponentsRegistry: () => {
      return {
        getLazyComponent: (f: string) => f,
      };
    },
    getEnvironmentInfo: () => {
      return {
        getTimeZone: () => 'local',
      };
    },
  };
};

const setPConnect = () => {
  return {
    getStateProps: () => {
      return {
        value: '.AutoScrollText',
      };
    },
    getActionsApi: () => {
      return {
        openWorkByHandle: () => {
          /* nothing */
        },
        createWork: () => {
          /* nothing */
        },
        updateFieldValue: () => {
          /* nothing */
        },
        triggerFieldChange: () => {
          /* nothing */
        },
        showCasePreview: () => {
          /* nothing */
        },
      };
    },
    ignoreSuggestion: () => {
      /* nothing */
    },
    acceptSuggestion: () => {
      /* nothing */
    },
    setInheritedProps: () => {
      /* nothing */
    },
    resolveConfigProps: () => {
      /* nothing */
    },
  };
};

// ─── Story factory helper ─────────────────────────────────────────────────

const AutoScrollDemo = (inputs: PegaExtensionsAutoScrollTextFieldProps) => {
  return {
    render: (args: PegaExtensionsAutoScrollTextFieldProps) => {
      setPCore();
      const props = {
        ...args,
        additionalProps: { style: { maxWidth: '22rem' } },
        getPConnect: setPConnect,
      };
      return <PegaExtensionsAutoScrollTextField {...props} />;
    },
    args: inputs,
  };
};

// ─── Stories ──────────────────────────────────────────────────────────────

export const Default: Story = AutoScrollDemo({
  label: 'Auto-Scroll Text Field',
  placeholder: 'Type a long value to see it scroll…',
  helperText: 'After you stop typing the text will auto-scroll to the end.',
  idleTimeout: 2000,
  testId: 'auto-scroll-text-field-12345678',
  value: '',
  readOnly: false,
  disabled: false,
  required: false,
  labelHidden: false,
  validatemessage: '',
  getPConnect: undefined
});

export const WithLongValue: Story = AutoScrollDemo({
  label: 'Pre-filled long text',
  helperText: 'Idle for 1.5s to trigger auto-scroll',
  idleTimeout: 1500,
  testId: 'auto-scroll-text-field-long',
  value: 'The quick brown fox jumps over the lazy dog — demonstrating a very long overflow value in a fixed-width input field',
  readOnly: false,
  disabled: false,
  required: false,
  labelHidden: false,
  validatemessage: '',
  getPConnect: undefined
});

export const ReadOnly: Story = AutoScrollDemo({
  label: 'Read-only field',
  helperText: 'Auto-scroll still fires on this field',
  idleTimeout: 2000,
  testId: 'auto-scroll-text-field-readonly',
  value: 'Read-only value — auto-scroll is still active on long content',
  readOnly: true,
  disabled: false,
  required: false,
  labelHidden: false,
  validatemessage: '',
  getPConnect: undefined
});

export const Disabled: Story = AutoScrollDemo({
  label: 'Disabled field',
  helperText: '',
  idleTimeout: 2000,
  testId: 'auto-scroll-text-field-disabled',
  value: 'This field is disabled — no scroll triggered',
  readOnly: false,
  disabled: true,
  required: false,
  labelHidden: false,
  validatemessage: '',
  getPConnect: undefined
});

export const WithValidationError: Story = AutoScrollDemo({
  label: 'Field with validation error',
  helperText: '',
  idleTimeout: 2000,
  testId: 'auto-scroll-text-field-error',
  value: '',
  readOnly: false,
  disabled: false,
  required: true,
  labelHidden: false,
  validatemessage: 'This field is required.',
  getPConnect: undefined
});