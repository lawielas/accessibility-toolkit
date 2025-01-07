import React from 'react';
import { render, screen } from '@testing-library/react';
import AccessibilityProvider, { useAccessibility } from './AccessibilityProvider';

const TestComponent = () => {
  const { settings, changeFontSize, toggleUnderlineLinks } = useAccessibility();
  return (
    <div>
      <p data-testid="fontSize">{settings.fontSize}</p>
      <p data-testid="underlineLinks">{settings.underlineLinks.toString()}</p>
      <button onClick={() => changeFontSize('large')} data-testid="changeFontSize">
        Change Font Size
      </button>
      <button onClick={toggleUnderlineLinks} data-testid="toggleUnderlineLinks">
        Toggle Underline Links
      </button>
    </div>
  );
};

describe('AccessibilityProvider', () => {
  it('renders without crashing and provides default values', () => {
    render(
      <AccessibilityProvider>
        <TestComponent />
      </AccessibilityProvider>
    );

    expect(screen.getByTestId('fontSize').textContent).toBe('medium');
    expect(screen.getByTestId('underlineLinks').textContent).toBe('false');
  });

  it('updates font size correctly', () => {
    render(
      <AccessibilityProvider>
        <TestComponent />
      </AccessibilityProvider>
    );

    screen.getByTestId('changeFontSize').click();
    expect(screen.getByTestId('fontSize').textContent).toBe('large');
  });


  it('toggles underline links correctly', () => {
    render(
      <AccessibilityProvider>
        <TestComponent />
      </AccessibilityProvider>
    );

    screen.getByTestId('toggleUnderlineLinks').click();
    expect(screen.getByTestId('underlineLinks').textContent).toBe('true');
  });
});
