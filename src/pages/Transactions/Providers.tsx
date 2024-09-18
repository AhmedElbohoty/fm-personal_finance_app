import { useSearchParams } from "react-router-dom";
import { useMemo, useState, type ReactNode } from "react";

import { TransactionsPageContext } from "contexts/transactionsPageContext";
import {
  selectCategories,
  selectFilteredTranIds,
} from "store/appSlice/selectors";
import { useAppSelector } from "store/store";
import { sortOptions } from "components/Input/selectOptions";

function Providers({ children }: { children: ReactNode }) {
  const [searchPraram] = useSearchParams();
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState(searchPraram.get("search") || "");

  const categories = useAppSelector(selectCategories);
  const options = useMemo(() => {
    const opts = [{ label: "All tranasactions", value: "all" }];
    categories.forEach((category) => {
      opts.push({ value: category.toLowerCase(), label: category });
    });

    return opts;
  }, [categories]);
  const [categoryOpt, setCategOpt] = useState(getInitCategory());
  const [sortOpt, setSortOpt] = useState(sortOptions[0].value);

  const transactionsIds = useAppSelector((s) =>
    selectFilteredTranIds(s, filter.trim(), categoryOpt, sortOpt)
  );
  const paginatedTransactionsIds = useMemo(() => {
    return transactionsIds.slice(
      (currentPage - 1) * itemsPerPage,
      currentPage * itemsPerPage
    );
  }, [transactionsIds, currentPage, itemsPerPage]);

  const totalPages = Math.ceil(transactionsIds.length / itemsPerPage);

  function getInitCategory() {
    const category = searchPraram.get("category")?.toLowerCase();
    if (!category || !categories.find((c) => c.toLowerCase() === category)) {
      return options[0].value;
    }
    return category;
  }

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
    categoriesOpts: options,
  };

  return (
    <TransactionsPageContext.Provider value={contextValue}>
      {children}
    </TransactionsPageContext.Provider>
  );
}

export default Providers;
