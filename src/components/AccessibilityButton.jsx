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
        <svg className="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M9 6.82954C10.1652 6.4177 11 5.30646 11 4.00024C11 2.34339 9.65686 1.00024 8 1.00024C6.34315 1.00024 5 2.34339 5 4.00024C5 5.30646 5.83481 6.4177 7 6.82954V12.0002C7 13.6571 8.34315 15.0002 10 15.0002H14.9296C15.264 15.0002 15.5762 15.1673 15.7617 15.4455L18.4913 19.54C19.1914 20.5901 20.6772 20.7373 21.5696 19.8448L22.7071 18.7074C23.0976 18.3168 23.0976 17.6837 22.7071 17.2931C22.3166 16.9026 21.6834 16.9026 21.2929 17.2931L20.1554 18.4306L17.4258 14.3361C16.8694 13.5015 15.9327 13.0002 14.9296 13.0002H10C9.44772 13.0002 9 12.5525 9 12.0002V11.0002H15C15.5523 11.0002 16 10.5525 16 10.0002C16 9.44796 15.5523 9.00025 15 9.00025H9V6.82954ZM8 5.10758C7.38844 5.10758 6.89267 4.61181 6.89267 4.00024C6.89267 3.38868 7.38844 2.89291 8 2.89291C8.61157 2.89291 9.10734 3.38868 9.10734 4.00024C9.10734 4.61181 8.61157 5.10758 8 5.10758Z" fill="#0F0F0F"></path> <path d="M4.6328 9.07414C5.10517 8.78987 5.69738 9.0279 5.91645 9.53381C6.13552 10.0397 5.89604 10.6205 5.43795 10.9272C4.92993 11.2673 4.48018 11.6911 4.10882 12.1826C3.53598 12.9408 3.16922 13.8345 3.04425 14.7765C2.91928 15.7185 3.04036 16.6768 3.3957 17.5582C3.75103 18.4395 4.32852 19.2138 5.07194 19.8058C5.81535 20.3977 6.69937 20.787 7.63791 20.9359C8.57646 21.0847 9.53756 20.988 10.4276 20.6552C11.3177 20.3223 12.1065 19.7647 12.7171 19.0366C13.1129 18.5645 13.4251 18.0313 13.6428 17.46C13.8391 16.9448 14.3514 16.5813 14.8936 16.6815C15.4357 16.7816 15.8004 17.3054 15.6291 17.8295C15.3326 18.7372 14.8644 19.583 14.2468 20.3194C13.4147 21.3117 12.3399 22.0716 11.1269 22.5252C9.91394 22.9787 8.6042 23.1105 7.32518 22.9077C6.04617 22.7048 4.84148 22.1742 3.82838 21.3676C2.81528 20.561 2.02831 19.5058 1.54407 18.3047C1.05983 17.1037 0.894836 15.7977 1.06514 14.5139C1.23545 13.2302 1.73525 12.0124 2.51589 10.9791C3.09523 10.2123 3.81459 9.56654 4.6328 9.07414Z" fill="#0F0F0F"></path> </g></svg>
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