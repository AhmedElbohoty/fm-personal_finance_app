import { useEffect } from "react";

function useResizeAnimationStopper() {
  useEffect(() => {
    let resizeTimer: NodeJS.Timeout;

    const handleResize = () => {
      document.body.classList.add("resize-animation-stopper");
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        document.body.classList.remove("resize-animation-stopper");
      }, 400);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
}

export default useResizeAnimationStopper;
