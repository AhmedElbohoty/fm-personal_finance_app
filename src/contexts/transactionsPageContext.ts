import { Option } from "components/Input/selectOptions";
import { createContext, useContext } from "react";

import type { Transaction } from "types/data";

type TransactionsPageContextType = {
  itemsPerPage: number;
  setItemsPerPage: React.Dispatch<React.SetStateAction<number>>;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  totalPages: number;
  transactionsIds: Transaction["id"][];
  filter: string;
  setFilter: React.Dispatch<React.SetStateAction<string>>;
  categoryOpt: string;
  setCategOpt: React.Dispatch<React.SetStateAction<string>>;
  sortOpt: string;
  setSortOpt: React.Dispatch<React.SetStateAction<string>>;
  categoriesOpts: Option[];
};

const contextValue: TransactionsPageContextType = {
  itemsPerPage: 10,
  setItemsPerPage: () => {},
  currentPage: 0,
  setCurrentPage: () => {},
  totalPages: 0,
  transactionsIds: [],
  filter: "",
  setFilter: () => {},
  categoryOpt: "",
  setCategOpt: () => {},
  sortOpt: "",
  setSortOpt: () => {},
  categoriesOpts: [],
};

export const TransactionsPageContext = createContext(contextValue);

export function useTransactionsPageContext() {
  const context = useContext(TransactionsPageContext);

  if (context === undefined) {
    throw new Error(
      "useTransactionsPageContext must be used within a TransactionsPageContext Provider"
    );
  }

  return context;
}
