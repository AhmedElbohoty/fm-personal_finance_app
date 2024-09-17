import React, { createContext, useContext } from "react";

import type { Pot } from "types/data";

type PotsPageContextType = {
  isPotsFormOpened: boolean;
  setIsPotsFormOpened: React.Dispatch<React.SetStateAction<boolean>>;
  editPot: Pot | null;
  setEditPot: React.Dispatch<React.SetStateAction<Pot | null>>;
  deletePot: Pot | null;
  setDeletePot: React.Dispatch<React.SetStateAction<Pot | null>>;
  addToPot: Pot | null;
  setAddToPot: React.Dispatch<React.SetStateAction<Pot | null>>;
  withdrawFromPot: Pot | null;
  setWithdrawFromPot: React.Dispatch<React.SetStateAction<Pot | null>>;
};

const contextValue: PotsPageContextType = {
  isPotsFormOpened: false,
  setIsPotsFormOpened: () => {},
  editPot: null,
  setEditPot: () => {},
  deletePot: null,
  setDeletePot: () => {},
  addToPot: null,
  setAddToPot: () => {},
  withdrawFromPot: null,
  setWithdrawFromPot: () => {},
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
