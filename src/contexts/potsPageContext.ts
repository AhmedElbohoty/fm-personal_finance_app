import React, { createContext, useContext } from "react";

import type { Pot } from "types/data";

type potsPageContext = {
  isPotsFormOpened: boolean;
  setIsPotsFormOpened: React.Dispatch<React.SetStateAction<boolean>>;
  editPot: Pot | null;
  setEditPot: React.Dispatch<React.SetStateAction<Pot | null>>;
  deletePot: Pot | null;
  setDeletePot: React.Dispatch<React.SetStateAction<Pot | null>>;
};

const contextValue: potsPageContext = {
  isPotsFormOpened: false,
  setIsPotsFormOpened: () => {},
  editPot: null,
  setEditPot: () => {},
  deletePot: null,
  setDeletePot: () => {},
};

export const PotsPageContext = createContext(contextValue);

export function usePotsPageContext() {
  const context = useContext(PotsPageContext);

  if (context === undefined) {
    throw new Error(
      "usePotsPageContext must be used within a PotsPageContext Provider"
    );
  }

  return context;
}
