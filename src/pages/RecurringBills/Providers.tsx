import { useState, type ReactNode } from "react";
import { BillsPageContext } from "contexts/billsPageContext";

import { sortOptions } from "components/Input/selectOptions";
import { selectRecurringBillsIds } from "store/appSlice/selectors";
import { useAppSelector } from "store/store";

// CSS prefix: .providers-
import "./style.css";

function Providers({ children }: { children: ReactNode }) {
  const [search, setSearch] = useState("");
  const [sortOpt, setSortOpt] = useState(sortOptions[0].value);
  const transactionsIds = useAppSelector((s) =>
    selectRecurringBillsIds(s, search, sortOpt)
  );

  const contextValue = {
    search,
    setSearch,
    sortOpt,
    setSortOpt,
    transactionsIds,
  };

  return (
    <BillsPageContext.Provider value={contextValue}>
      {children}
    </BillsPageContext.Provider>
  );
}

export default Providers;
