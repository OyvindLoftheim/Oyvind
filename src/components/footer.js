// footer.js

import React from 'react';
import './footer.css'; // Du må opprette en CSS-fil (footer.css) for stylingen
import { Stack } from "@mui/material";
import { Stack } from "@mui/material";
import { Stack } from "@mui/material";
import { Stack } from "@mui/material";
import { Stack } from "@mui/material";
import * as React from "react";
import * as React from "react";
import * as React from "react";
import * as React from "react";
import * as React from "react";
import ContactForm from "./components/ContactForm";
import ContactForm from "./components/ContactForm";
import ContactForm from "./components/ContactForm";
import ContactForm from "./components/ContactForm";
import ContactForm from "./components/ContactForm";
import Description from "./components/Description";
import Description from "./components/Description";
import Description from "./components/Description";
import Description from "./components/Description";
import Description from "./components/Description";
import Profile from "./components/Profile";
import Profile from "./components/Profile";
import Profile from "./components/Profile";
import Profile from "./components/Profile";
import Profile from "./components/Profile";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2023 Ditt Firma Navn. Alle rettigheter reservert.</p>
      </div>
    </footer>
  );
}

export default Footer;export default function App() {
  return (
    <Stack maxWidth="sm" direction="column" spacing={2} margin="auto" p={2}>
      <Profile />
      <Description />
      <ContactForm />
      < /><footer />
    </Stack>
  );
}

