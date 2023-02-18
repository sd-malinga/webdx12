import React, { useState } from "react";
import CountrySelector from "./Selector";
import { COUNTRIES } from "./Country";

const Countries = ({ country, setCountry }) => {
  const [isOpen, setIsOpen] = useState(false);
  // Default this to a country's code to preselect it
  return (
    <CountrySelector
      id={"country-selector"}
      open={isOpen}
      onToggle={() => setIsOpen(!isOpen)}
      onChange={setCountry}
      selectedValue={COUNTRIES.find((option) => option.value === country)}
    />
  );
};

export default Countries;
