import { type ReactNode, useState } from "react";

import { BudgetsPageContext } from "contexts/budgetsPageContext";
import { Budget } from "types/data";

// CSS prefix: .providers-
import "./style.css";

function Providers({ children }: { children: ReactNode }) {
  const [isBudgetsFormOpened, setIsBudgetsFormOpened] = useState(false);
  const [editBudget, setEditBudget] = useState<Budget | null>(null);
  const [deleteBudget, setDeleteBudget] = useState<Budget | null>(null);

  const contextValue = {
    isBudgetsFormOpened,
    setIsBudgetsFormOpened,
    editBudget,
    setEditBudget,
    deleteBudget,
    setDeleteBudget,
  };

  return (
    <BudgetsPageContext.Provider value={contextValue}>
      {children}
    </BudgetsPageContext.Provider>
  );
}

export default Providers;
