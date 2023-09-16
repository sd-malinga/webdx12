import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { currencyState } from "../state/CurrencyState";
import { COUNTRIES } from "./Country";

function CurrencySelector() {
  const [selectedCurrency, setSelectedCurrency] = useRecoilState(currencyState);

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  function changeCurrency(newCurrency) {
    toggleDropdown();
    setSelectedCurrency(newCurrency);
  }
  function DropdownMenu() {
    return (
      <div
        id="dropdownHover"
        className="z-10 absolute rounded-lg shadow w-44 grad pt-1 mt-1"
        style={{ maxHeight: "144px", overflowY: "auto" }}
      >
        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
          {COUNTRIES.map((country) => (
            <li
              key={country.value}
              onClick={() => changeCurrency(country.currency)}
            >
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white flex items-center"
              >
                <img
                  src={`https://purecatamphetamine.github.io/country-flag-icons/3x2/${country.value}.svg`}
                  alt={country.title}
                  className="w-4 h-4 mr-2"
                />
                {country.symbol} {country.currency}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  return (
    <div className="relative inline-block text-white">
      <button
        id="dropdownHoverButton"
        className="text-white font-sm rounded-lg text-sm px-6 py-4 mr-4 text-center inline-flex items-center grad"
        type="button"
        onClick={toggleDropdown}
      >
        <img
          src={`https://purecatamphetamine.github.io/country-flag-icons/3x2/${
            COUNTRIES.find((option) => option.currency === selectedCurrency)
              .value
          }.svg`}
          alt={"FLAG"}
          className="w-4 h-4 mr-2"
        />
        {
          COUNTRIES.find((option) => option.currency === selectedCurrency)
            .symbol
        }{" "}
        {selectedCurrency}
        <svg
          className={`w-2.5 h-2.5 ml-2.5 ${isOpen ? "rotate-180" : ""}`}
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>
      {isOpen && <DropdownMenu />}
    </div>
  );
}

export default CurrencySelector;
