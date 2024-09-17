import { useMemo, useState, type ReactNode } from "react";

import { TransactionsPageContext } from "contexts/transactionsPageContext";
import {
  selectlCategoriesOpts,
  selectFilteredTranIds,
} from "store/appSlice/selectors";
import { useAppSelector } from "store/store";
import { sortOptions } from "components/Input/selectOptions";

function Providers({ children }: { children: ReactNode }) {
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [filter, setFilter] = useState("");
  const categoriesOpts = useAppSelector(selectlCategoriesOpts);
  const [categoryOpt, setCategOpt] = useState(categoriesOpts[0].value);
  const [sortOpt, setSortOpt] = useState(sortOptions[0].value);

  const transactionsIds = useAppSelector((s) =>
    selectFilteredTranIds(s, filter, categoryOpt, sortOpt)
  );

  const [currentPage, setCurrentPage] = useState(1);
  const paginatedTransactionsIds = useMemo(() => {
    return transactionsIds.slice(
      (currentPage - 1) * itemsPerPage,
      currentPage * itemsPerPage
    );
  }, [transactionsIds, currentPage, itemsPerPage]);

  const totalPages = Math.ceil(transactionsIds.length / itemsPerPage);

  const contextValue = {
    itemsPerPage,
    setItemsPerPage,
    currentPage,
    setCurrentPage,
    totalPages,
    transactionsIds: paginatedTransactionsIds,
    filter,
    setFilter,
    categoryOpt,
    setCategOpt,
    sortOpt,
    setSortOpt,
  };

  return (
    <TransactionsPageContext.Provider value={contextValue}>
      {children}
    </TransactionsPageContext.Provider>
  );
}

export default Providers;
