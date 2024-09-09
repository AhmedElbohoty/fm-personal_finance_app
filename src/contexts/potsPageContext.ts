import React, { createContext, useContext } from "react";

type potsPageContext = {
  isPotsFormOpened: boolean;
  setIsPotsFormOpened: React.Dispatch<React.SetStateAction<boolean>>;
};

const contextValue: potsPageContext = {
  isPotsFormOpened: false,
  setIsPotsFormOpened: () => {},
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
