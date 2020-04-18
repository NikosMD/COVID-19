import React from "react";

import { SelectTypeStore } from "Stores/selectTypeStore";

export const storesContext = React.createContext({
  selectTypeStore: new SelectTypeStore()
});
