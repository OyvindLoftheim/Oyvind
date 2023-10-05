// footer.js

import React from 'react';
import './footer.css'; // Du må opprette en CSS-fil (footer.css) for stylingen

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2023 Ditt Firma Navn. Alle rettigheter reservert.</p>
      </div>
    </footer>
  );
}

export default Footer;
