"use client"

import React, {useState} from "react";
import "../index.css"
import { useAccessibility } from './AccessibilityProvider';

const AccessibilityButton = () => {
  const { changeFontSize, toggleTheme, toggleUnderlineLinks } = useAccessibility();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <div>
      <button className="accessibility-button" onClick={toggleMenu}>
        ♿
      </button>
      {menuOpen && (
        <div className="accessibility-menu">
          <button onClick={() => changeFontSize('small')}>Small Text</button>
          <button onClick={() => changeFontSize('medium')}>Medium Text</button>
          <button onClick={() => changeFontSize('large')}>Large Text</button>
          <button onClick={toggleUnderlineLinks}>Toggle Underline Links</button>
        </div>
      )}
    </div>
  );
};

export default AccessibilityButton;