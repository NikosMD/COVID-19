import React from "react";
import { storesContext } from "Contexts";

export const useStores = () => React.useContext(storesContext);
