import { ReactNode, useEffect, useState } from "react";

import { WindowSizeContext } from "contexts/windowSizeContext";
import { MAX_SMAL_SCR_WIDTH, MIN_LARGE_SCR_WIDTH } from "utils/constants";

function WindowSizeProvider({ children }: { children: ReactNode }) {
  const [isLargeScr, setIsLargeScr] = useState(
    window.innerWidth > MIN_LARGE_SCR_WIDTH
  );
  const [isSmallScr, setIsSmallScr] = useState(
    window.innerWidth < MAX_SMAL_SCR_WIDTH
  );

  useEffect(() => {
    function resize() {
      const width = window.innerWidth;

      setIsLargeScr(width > MIN_LARGE_SCR_WIDTH);
      setIsSmallScr(width <= MAX_SMAL_SCR_WIDTH);
    }

    window.addEventListener("resize", resize);

    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <WindowSizeContext.Provider value={{ isLargeScr, isSmallScr }}>
      {children}
    </WindowSizeContext.Provider>
  );
}

export default WindowSizeProvider;
