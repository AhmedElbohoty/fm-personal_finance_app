import { ReactNode, useState } from "react";

import { PotsPageContext } from "contexts/potsPageContext";
import type { Pot } from "types/data";

function Providers({ children }: { children: ReactNode }) {
  const [isPotsFormOpened, setIsPotsFormOpened] = useState(false);
  const [editPot, setEditPot] = useState<Pot | null>(null);
  const [deletePot, setDeletePot] = useState<Pot | null>(null);

  const contextValue = {
    isPotsFormOpened,
    setIsPotsFormOpened,
    editPot,
    setEditPot,
    deletePot,
    setDeletePot,
  };

  return (
    <PotsPageContext.Provider value={contextValue}>
      {children}
    </PotsPageContext.Provider>
  );
}

export default Providers;
