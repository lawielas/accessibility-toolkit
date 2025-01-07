"use client"

import React, { createContext, useContext, useState} from "react";
import "../index.css"

const AccessibilityContext = createContext()

export const AccessibilityProvider = ({ children }) => {
    const [settings, setSettings] = useState({
        fontSize: 'medium',
        underlineLinks: false
    })

    const changeFontSize = (size) => {
        setSettings((prev) => ({...prev, fontSize: size}))
    }

    const toggleUnderlineLink = () => {
        setSettings((prev) => ({
            ...prev,
            underlineLinks: !prev.underlineLinks
        }))
    }

    return (
        <AccessibilityContext.Provider
            value={{settings, changeFontSize, toggleUnderlineLink}}
        >
            <div className={`theme-${settings.theme} text-${settings.fontSize} ${
                settings.underlineLinks ? 'underline-links' : ''
            }`}>
                {children}
            </div>
        </AccessibilityContext.Provider>
    )
}

export const useAccessibility = () => useContext(AccessibilityContext)