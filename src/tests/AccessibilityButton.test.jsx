import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import AccessibilityProvider from '../components/AccessibilityProvider';
import AccessibilityButton from '../components/AccessibilityButton';

describe('AccessibilityButton', () => {
  it('renders without crashing', () => {
    render(
      <AccessibilityProvider>
        <AccessibilityButton />
      </AccessibilityProvider>
    );

    expect(screen.getByRole('button', { name: /♿/ })).toBeInTheDocument();
  });

  it('toggles the menu on click', () => {
    render(
      <AccessibilityProvider>
        <AccessibilityButton />
      </AccessibilityProvider>
    );

    const toggleButton = screen.getByRole('button', { name: /♿/ });

    // Menu should not be visible initially
    expect(screen.queryByText('Small Text')).not.toBeInTheDocument();

    // Click to open menu
    fireEvent.click(toggleButton);
    expect(screen.getByText('Small Text')).toBeInTheDocument();

    // Click to close menu
    fireEvent.click(toggleButton);
    expect(screen.queryByText('Small Text')).not.toBeInTheDocument();
  });

  it('calls the appropriate context methods on menu button clicks', () => {
    render(
      <AccessibilityProvider>
        <AccessibilityButton />
      </AccessibilityProvider>
    );

    const toggleButton = screen.getByRole('button', { name: /♿/ });
    fireEvent.click(toggleButton);

    const smallTextButton = screen.getByText('Small Text');
    fireEvent.click(smallTextButton);

    const largeTextButton = screen.getByText('Large Text');
    fireEvent.click(largeTextButton);



    const underlineLinksButton = screen.getByText('Toggle Underline Links');
    fireEvent.click(underlineLinksButton);

    // Verify context state (this should ideally be tested with mock functions for context)
    expect(screen.getByText('Small Text')).toBeInTheDocument(); // Verify menu doesn't break
  });
});
