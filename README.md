**Note**

# Accessibility Toolkit

## Demo
[Demo](https://test-access-pink.vercel.app/)

## Features

### Text Resizer
Allows users to adjust the text size for better readability.
Options: Small, Medium, Large, Extra-Large.

### Color Adjustments
Enables users to switch to high-contrast or colorblind-friendly modes.
Supports predefined themes and customizable palettes.

### Link Highlighter
Automatically underlines all links to improve visibility.

### Dark/Light Mode
Provides a toggle for dark and light themes.


## Installation
This section shows how to install the package.

### Using npm
```
npm install accessibility-toolkit
```

### Using yarn
```
yarn add accessibility-toolkit
```
### Using pnpm
```
pnpm add accessibility-toolkit
```
## Usage
```js
import { AccessibilityProvider, AccessibilityButton } from 'accessibility-toolkit';

function App() {
    return (
    <AccessibilityProvider>
      <AccessibilityButton />
      <main>
        <h1>Welcome to the Accessibility Toolkit!</h1>
        <p>
          This page demonstrates how to make your web application more accessible to people
          with different needs.
        </p>
        <a href="#">Learn more</a>
      </main>
    </AccessibilityProvider>
  );
}
```
## Dependencies
- [React](https://github.com/facebook/react)
## Dev Dependencies
- [Babel](https://github.com/babel/babel)
- [Jest](https://github.com/jestjs/jest)
- [Jest Transform CSS](https://github.com/dferber90/jest-transform-css)
- [React Testing Library](https://github.com/testing-library/react-testing-
library)