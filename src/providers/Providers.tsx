import { ReactNode } from "react";

import WindowSizeProvider from "providers/WindowSizeProvider";

function Providers({ children }: { children: ReactNode }) {
  return <WindowSizeProvider>{children}</WindowSizeProvider>;
}

export default Providers;
