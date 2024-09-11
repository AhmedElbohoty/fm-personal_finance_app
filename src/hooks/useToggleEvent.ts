import { useEffect } from "react";

const useToggleEvent = (nodeId: string, toggle: EventListener) => {
  useEffect(() => {
    const node = document.getElementById(nodeId);
    if (!node) return;

    node.addEventListener("toggle", toggle);

    return () => {
      node.removeEventListener("toggle", toggle);
    };
  }, [nodeId, toggle]);
};

export default useToggleEvent;
