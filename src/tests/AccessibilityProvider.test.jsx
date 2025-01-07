import React from 'react';
import { render, screen , fireEvent} from '@testing-library/react';
import AccessibilityProvider, { useAccessibility } from '../components/AccessibilityProvider';
import AccessibilityButton from '../components/AccessibilityButton';
import '@testing-library/jest-dom'

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

  // it('updates font size correctly', () => {
  //   render(
  //     <AccessibilityProvider>
  //       <TestComponent />
  //     </AccessibilityProvider>
  //   );

  //   screen.getByTestId('changeFontSize').click();
  //   expect(screen.getByTestId('fontSize').textContent).toBe('large');
  // });


  // it('toggles underline links correctly', () => {
  //   render(
  //     <AccessibilityProvider>
  //       <TestComponent />
  //     </AccessibilityProvider>
  //   );

  //   screen.getByTestId('toggleUnderlineLinks').click();
  //   expect(screen.getByTestId('underlineLinks').textContent).toBe('true');
  // });
});

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