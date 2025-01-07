"use client"

import React, {useState} from "react";
import { useAccessibility } from "./AccessibilityProvider";
import "../index.css"

export const AccessibilityButton = () => {
    const [changeFontSize, toggleUnderlineLink] = useAccessibility()
    const [menuOpen, setMenuOpen] = useState(false)

    const toggleMenu = () => setMenuOpen((prev) => !prev)

    return (
        <div>
            <button className="accessibility-button" onClick={toggleMenu}>♿</button>
            {
                menuOpen && (
                    <div className="accessibility-menu">
                      <button onClick={() => changeFontSize('small')}>Small Text</button>
                      <button onClick={() => changeFontSize('medium')}>Medium Text</button>
                      <button onClick={() => changeFontSize('large')}>Large Text</button>
                      <button onClick={toggleTheme}>Toggle Theme</button>
                      <button onClick={toggleUnderlineLinks}>
                        {underlineLinks ? 'Remove Underlines' : 'Underline Links'}
                      </button>
                    </div>
                  )
            }
        </div>
    )
}