import React from "react";

import { SelectTypeStore } from "Stores/selectTypeStore";
import { SelectCountriesStore } from "Stores/selectCountriesStore";
import { SelectDateStore } from "Stores/selectDateStore";
import { FetchDataStore } from "Stores/fetchDataStore";
import { SelectCountryStore } from "Stores/selectCountryStore";

export const storesContext = React.createContext({
  selectTypeStore: new SelectTypeStore(),
  selectCountriesStore: new SelectCountriesStore(),
  selectDateStore: new SelectDateStore(),
  fetchDataStore: new FetchDataStore(),
  selectCountryStore: new SelectCountryStore(),
});
