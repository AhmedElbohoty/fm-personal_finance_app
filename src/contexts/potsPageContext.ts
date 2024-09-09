import { createContext, MutableRefObject, useContext } from "react";

type potsPageContext = {
  potsFormRef: MutableRefObject<HTMLDialogElement | null>;
};

const contextValue: potsPageContext = {
  potsFormRef: { current: null },
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
