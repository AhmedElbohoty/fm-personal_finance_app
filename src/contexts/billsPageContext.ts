import { createContext, useContext } from "react";

import type { Transaction } from "types/data";

type BillsPageContextType = {
  transactionsIds: Transaction["id"][];
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  sortOpt: string;
  setSortOpt: React.Dispatch<React.SetStateAction<string>>;
};

const contextValue: BillsPageContextType = {
  transactionsIds: [],
  search: "",
  setSearch: () => {},
  sortOpt: "",
  setSortOpt: () => {},
};

export const BillsPageContext = createContext(contextValue);

export function useBillsPageContext() {
  const context = useContext(BillsPageContext);

  if (context === undefined) {
    throw new Error(
      "useBillsPageContext must be used within a BillsPageContext Provider"
    );
  }

  return context;
}
