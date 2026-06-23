// demo.test.tsx — clean version, no cast needed
import { render, screen } from '@testing-library/react';
import { type ComponentType } from 'react';
import { composeStories } from '@storybook/react';
import * as DemoStories from './demo.stories';

const { Default } = composeStories(DemoStories as any) as {
  Default: ComponentType<any>;
};

test('renders Auto-Scroll Text Field with label', async () => {
  render(<Default />);
  expect(await screen.findByText('Auto-Scroll Text Field')).toBeVisible();
});

test('renders helper text below the input', async () => {
  render(<Default />);
  expect(
    await screen.findByText('After you stop typing the text will auto-scroll to the end.'),
  ).toBeVisible();
});

test('renders input with correct testId', async () => {
  render(<Default />);
  expect(await screen.findByTestId('auto-scroll-text-field-12345678')).toBeVisible();
});