import React, { useState } from 'react';
import Checkbox from '@mui/material/Checkbox';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function SizeCheckboxes() {
  const [isChecked, setIsChecked] = useState(false); // Tilstand for sjekkboxen

  // Funksjon for å håndtere endringer i sjekkboksen
  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  return (
    <div>
      <Checkbox
        {...label}
        defaultChecked={isChecked} // Oppdater sjekkstatus basert på tilstanden
        size="small"
        onChange={handleCheckboxChange} // Kall funksjonen når sjekkstatus endres
      />
      <Checkbox
        {...label}
        defaultChecked={isChecked} // Oppdater sjekkstatus basert på tilstanden
        onChange={handleCheckboxChange} // Kall funksjonen når sjekkstatus endres
      />
      <Checkbox
        {...label}
        defaultChecked={isChecked} // Oppdater sjekkstatus basert på tilstanden
        sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
        onChange={handleCheckboxChange} // Kall funksjonen når sjekkstatus endres
      />
      {/* Vis en tekst basert på sjekkstatus */}
      {isChecked ? <p>Sjekkboksen er krysset av!</p> : <p>Sjekkboksen er ikke krysset av.</p>}
    </div>
  );
}
