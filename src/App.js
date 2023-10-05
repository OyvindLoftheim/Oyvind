import * as React from "react";
import { Stack } from "@mui/material";
import Profile from "./components/Profile";
import Description from "./components/Description";
import ContactForm from "./components/ContactForm";
import SomeComponent from "./components/SomeComponent";
import FloatingActionButtonExtendedSize from "./components/Floating";
import Sjekkboks from "./components/Sjekkboks";
import SizeCheckboxes from "./components/SizeCheckboxes";

export default function App() {
  return (
    <Stack maxWidth="sm" direction="column" spacing={2} margin="auto" p={2}>
      <Profile />
      <Description />
      <Sjekkboks />
      <SomeComponent />
      <SizeCheckboxes />
      <FloatingActionButtonExtendedSize />
      
      <ContactForm />
    </Stack>
  );
}
