import { useCallback, useRef } from "react";
import {
  computePosition,
  offset,
  flip,
  shift,
  autoUpdate,
} from "@floating-ui/dom";
import type {
  ReferenceElement,
  FloatingElement,
  OffsetOptions,
  ShiftOptions,
  Strategy,
  Placement,
  AutoUpdateOptions,
} from "@floating-ui/dom";

type Options = {
  strategy: Strategy;
  placement: Placement;
  offsetOptions: OffsetOptions;
  shiftOptions: ShiftOptions;
};

const defaultOptions: Options = {
  strategy: "fixed",
  placement: "bottom-end",
  offsetOptions: 8,
  shiftOptions: { padding: 8 },
};

function computeElemPosition(
  reference: ReferenceElement,
  floating: FloatingElement,
  options: Options
) {
  const { strategy, placement, offsetOptions, shiftOptions } = options;

  const middleware = [
    offset(offsetOptions),
    flip(),
    shift({ padding: shiftOptions.padding }),
  ];

  computePosition(reference, floating, {
    strategy,
    placement,
    middleware,
  }).then(({ x, y }) => {
    Object.assign(floating.style, {
      left: `${x}px`,
      top: `${y}px`,
    });
  });

  return () => {
    const autoUpdateOptions: AutoUpdateOptions = { ancestorResize: true };

    return autoUpdate(
      reference,
      floating,
      () => computeElemPosition(reference, floating, options),
      autoUpdateOptions
    );
  };
}

function usePopover(options: Options = defaultOptions) {
  const refElem = useRef(null);
  const cleanup = useRef<(() => void) | null>(null);

  const floatElem = useCallback(
    (node: HTMLElement) => {
      if (!node || !refElem.current) return;
      if (cleanup.current) cleanup.current();

      node.showPopover();
      const updatePosition = computeElemPosition(
        refElem.current,
        node,
        options
      );

      cleanup.current = updatePosition();
    },
    [refElem, options]
  );

  return { refElem, floatElem };
}

export default usePopover;
