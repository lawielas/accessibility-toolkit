"use client"

import React, { createContext, useContext, useState} from "react";
import "../index.css"

const AccessibilityContext = createContext();

const AccessibilityProvider = ({ children }) => {
  const [settings, setSettings] = useState({
    fontSize: 'medium',
    theme: 'light',
    underlineLinks: false,
  });

  const changeFontSize = (size) => {
    setSettings((prev) => ({ ...prev, fontSize: size }));
  };

  const toggleTheme = () => {
    setSettings((prev) => ({
      ...prev,
      theme: prev.theme === 'light' ? 'dark' : 'light',
    }));
  };

  const toggleUnderlineLinks = () => {
    setSettings((prev) => ({
      ...prev,
      underlineLinks: !prev.underlineLinks,
    }));
  };

  return (
    <AccessibilityContext.Provider
      value={{
        settings,
        changeFontSize,
        toggleTheme,
        toggleUnderlineLinks,
      }}
    >
      <div
        className={`theme-${settings.theme} text-${settings.fontSize} ${
          settings.underlineLinks ? 'underline-links' : ''
        }`}
      >
        {children}
      </div>
    </AccessibilityContext.Provider>
  );
};

const useAccessibility = () => useContext(AccessibilityContext);

export default AccessibilityProvider;
export { useAccessibility };