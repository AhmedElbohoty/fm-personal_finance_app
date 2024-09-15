import React, { createContext, useContext } from "react";

import type { Budget } from "types/data";

type budgetsPageContext = {
  isBudgetsFormOpened: boolean;
  setIsBudgetsFormOpened: React.Dispatch<React.SetStateAction<boolean>>;
  editBudget: Budget | null;
  setEditBudget: React.Dispatch<React.SetStateAction<Budget | null>>;
  deleteBudget: Budget | null;
  setDeleteBudget: React.Dispatch<React.SetStateAction<Budget | null>>;
};

const contextValue: budgetsPageContext = {
  isBudgetsFormOpened: false,
  setIsBudgetsFormOpened: () => {},
  editBudget: null,
  setEditBudget: () => {},
  deleteBudget: null,
  setDeleteBudget: () => {},
};

export const BudgetsPageContext = createContext(contextValue);

export function useBudgetsPageContext() {
  const context = useContext(BudgetsPageContext);

  if (context === undefined) {
    throw new Error(
      "useBudgetsPageContext must be used within a BudgetsPageContext Provider"
    );
  }

  return context;
}
