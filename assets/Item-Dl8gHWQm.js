import { ag as interpolate, s as useConstant, ah as motionValue, ai as MotionConfigContext, aj as useIsomorphicLayoutEffect, ak as cancelFrame, al as frame, am as collectMotionValues, an as mixNumber, ao as moveItem, m as motion, j as jsxRuntimeExports, ap as isMotionValue } from "./index-CrNMMc0h.js";
import { b as reactExports } from "./vendor-charts-Du7SI2xx.js";
function transform(...args) {
  const useImmediate = !Array.isArray(args[0]);
  const argOffset = useImmediate ? 0 : -1;
  const inputValue = args[0 + argOffset];
  const inputRange = args[1 + argOffset];
  const outputRange = args[2 + argOffset];
  const options = args[3 + argOffset];
  const interpolator = interpolate(inputRange, outputRange, options);
  return useImmediate ? interpolator(inputValue) : interpolator;
}
function useMotionValue(initial) {
  const value = useConstant(() => motionValue(initial));
  const { isStatic } = reactExports.useContext(MotionConfigContext);
  if (isStatic) {
    const [, setLatest] = reactExports.useState(initial);
    reactExports.useEffect(() => value.on("change", setLatest), []);
  }
  return value;
}
function useCombineMotionValues(values, combineValues) {
  const value = useMotionValue(combineValues());
  const updateValue = () => value.set(combineValues());
  updateValue();
  useIsomorphicLayoutEffect(() => {
    const scheduleUpdate = () => frame.preRender(updateValue, false, true);
    const subscriptions = values.map((v) => v.on("change", scheduleUpdate));
    return () => {
      subscriptions.forEach((unsubscribe) => unsubscribe());
      cancelFrame(updateValue);
    };
  });
  return value;
}
function useComputed(compute) {
  collectMotionValues.current = [];
  compute();
  const value = useCombineMotionValues(collectMotionValues.current, compute);
  collectMotionValues.current = void 0;
  return value;
}
function useTransform(input, inputRangeOrTransformer, outputRangeOrMap, options) {
  if (typeof input === "function") {
    return useComputed(input);
  }
  const outputRange = outputRangeOrMap;
  const transformer = typeof inputRangeOrTransformer === "function" ? inputRangeOrTransformer : transform(inputRangeOrTransformer, outputRange, options);
  const result = Array.isArray(input) ? useListTransform(input, transformer) : useListTransform([input], ([latest]) => transformer(latest));
  const inputAccelerate = !Array.isArray(input) ? input.accelerate : void 0;
  if (inputAccelerate && !inputAccelerate.isTransformed && typeof inputRangeOrTransformer !== "function" && Array.isArray(outputRangeOrMap) && options?.clamp !== false) {
    result.accelerate = {
      ...inputAccelerate,
      times: inputRangeOrTransformer,
      keyframes: outputRangeOrMap,
      isTransformed: true,
      ...{}
    };
  }
  return result;
}
function useListTransform(values, transformer) {
  const latest = useConstant(() => []);
  return useCombineMotionValues(values, () => {
    latest.length = 0;
    const numValues = values.length;
    for (let i = 0; i < numValues; i++) {
      latest[i] = values[i].get();
    }
    return transformer(latest);
  });
}
const ReorderContext = reactExports.createContext(null);
function checkReorder(order, value, offset, velocity) {
  if (!velocity)
    return order;
  const index = order.findIndex((item2) => item2.value === value);
  if (index === -1)
    return order;
  const nextOffset = velocity > 0 ? 1 : -1;
  const nextItem = order[index + nextOffset];
  if (!nextItem)
    return order;
  const item = order[index];
  const nextLayout = nextItem.layout;
  const nextItemCenter = mixNumber(nextLayout.min, nextLayout.max, 0.5);
  if (nextOffset === 1 && item.layout.max + offset > nextItemCenter || nextOffset === -1 && item.layout.min + offset < nextItemCenter) {
    return moveItem(order, index, index + nextOffset);
  }
  return order;
}
function ReorderGroupComponent({ children, as = "ul", axis = "y", onReorder, values, ...props }, externalRef) {
  const Component = useConstant(() => motion[as]);
  const order = [];
  const isReordering = reactExports.useRef(false);
  const groupRef = reactExports.useRef(null);
  const context = {
    axis,
    groupRef,
    registerItem: (value, layout) => {
      const idx = order.findIndex((entry) => value === entry.value);
      if (idx !== -1) {
        order[idx].layout = layout[axis];
      } else {
        order.push({ value, layout: layout[axis] });
      }
      order.sort(compareMin);
    },
    updateOrder: (item, offset, velocity) => {
      if (isReordering.current)
        return;
      const newOrder = checkReorder(order, item, offset, velocity);
      if (order !== newOrder) {
        isReordering.current = true;
        onReorder(newOrder.map(getValue).filter((value) => values.indexOf(value) !== -1));
      }
    }
  };
  reactExports.useEffect(() => {
    isReordering.current = false;
  });
  const setRef = (element) => {
    groupRef.current = element;
    if (typeof externalRef === "function") {
      externalRef(element);
    } else if (externalRef) {
      externalRef.current = element;
    }
  };
  const groupStyle = {
    overflowAnchor: "none",
    ...props.style
  };
  return jsxRuntimeExports.jsx(Component, { ...props, style: groupStyle, ref: setRef, ignoreStrict: true, children: jsxRuntimeExports.jsx(ReorderContext.Provider, { value: context, children }) });
}
const ReorderGroup = /* @__PURE__ */ reactExports.forwardRef(ReorderGroupComponent);
function getValue(item) {
  return item.value;
}
function compareMin(a, b) {
  return a.layout.min - b.layout.min;
}
const threshold = 50;
const maxSpeed = 25;
const overflowStyles = /* @__PURE__ */ new Set(["auto", "scroll"]);
const initialScrollLimits = /* @__PURE__ */ new WeakMap();
const activeScrollEdge = /* @__PURE__ */ new WeakMap();
let currentGroupElement = null;
function resetAutoScrollState() {
  if (currentGroupElement) {
    const scrollableAncestor = findScrollableAncestor(currentGroupElement, "y");
    if (scrollableAncestor) {
      activeScrollEdge.delete(scrollableAncestor);
      initialScrollLimits.delete(scrollableAncestor);
    }
    const scrollableAncestorX = findScrollableAncestor(currentGroupElement, "x");
    if (scrollableAncestorX && scrollableAncestorX !== scrollableAncestor) {
      activeScrollEdge.delete(scrollableAncestorX);
      initialScrollLimits.delete(scrollableAncestorX);
    }
    currentGroupElement = null;
  }
}
function isScrollableElement(element, axis) {
  const style = getComputedStyle(element);
  const overflow = axis === "x" ? style.overflowX : style.overflowY;
  const isDocumentScroll = element === document.body || element === document.documentElement;
  return overflowStyles.has(overflow) || isDocumentScroll;
}
function findScrollableAncestor(element, axis) {
  let current = element?.parentElement;
  while (current) {
    if (isScrollableElement(current, axis)) {
      return current;
    }
    current = current.parentElement;
  }
  return null;
}
function getScrollAmount(pointerPosition, scrollElement, axis) {
  const rect = scrollElement.getBoundingClientRect();
  const start = axis === "x" ? Math.max(0, rect.left) : Math.max(0, rect.top);
  const end = axis === "x" ? Math.min(window.innerWidth, rect.right) : Math.min(window.innerHeight, rect.bottom);
  const distanceFromStart = pointerPosition - start;
  const distanceFromEnd = end - pointerPosition;
  if (distanceFromStart < threshold) {
    const intensity = 1 - distanceFromStart / threshold;
    return { amount: -maxSpeed * intensity * intensity, edge: "start" };
  } else if (distanceFromEnd < threshold) {
    const intensity = 1 - distanceFromEnd / threshold;
    return { amount: maxSpeed * intensity * intensity, edge: "end" };
  }
  return { amount: 0, edge: null };
}
function autoScrollIfNeeded(groupElement, pointerPosition, axis, velocity) {
  if (!groupElement)
    return;
  currentGroupElement = groupElement;
  const scrollableAncestor = findScrollableAncestor(groupElement, axis);
  if (!scrollableAncestor)
    return;
  const viewportPointerPosition = pointerPosition - (axis === "x" ? window.scrollX : window.scrollY);
  const { amount: scrollAmount, edge } = getScrollAmount(viewportPointerPosition, scrollableAncestor, axis);
  if (edge === null) {
    activeScrollEdge.delete(scrollableAncestor);
    initialScrollLimits.delete(scrollableAncestor);
    return;
  }
  const currentActiveEdge = activeScrollEdge.get(scrollableAncestor);
  const isDocumentScroll = scrollableAncestor === document.body || scrollableAncestor === document.documentElement;
  if (currentActiveEdge !== edge) {
    const shouldStart = edge === "start" && velocity < 0 || edge === "end" && velocity > 0;
    if (!shouldStart)
      return;
    activeScrollEdge.set(scrollableAncestor, edge);
    const maxScroll = axis === "x" ? scrollableAncestor.scrollWidth - (isDocumentScroll ? window.innerWidth : scrollableAncestor.clientWidth) : scrollableAncestor.scrollHeight - (isDocumentScroll ? window.innerHeight : scrollableAncestor.clientHeight);
    initialScrollLimits.set(scrollableAncestor, maxScroll);
  }
  if (scrollAmount > 0) {
    const initialLimit = initialScrollLimits.get(scrollableAncestor);
    const currentScroll = axis === "x" ? isDocumentScroll ? window.scrollX : scrollableAncestor.scrollLeft : isDocumentScroll ? window.scrollY : scrollableAncestor.scrollTop;
    if (currentScroll >= initialLimit)
      return;
  }
  if (axis === "x") {
    if (isDocumentScroll) {
      window.scrollBy({ left: scrollAmount });
    } else {
      scrollableAncestor.scrollLeft += scrollAmount;
    }
  } else {
    if (isDocumentScroll) {
      window.scrollBy({ top: scrollAmount });
    } else {
      scrollableAncestor.scrollTop += scrollAmount;
    }
  }
}
function useDefaultMotionValue(value, defaultValue = 0) {
  return isMotionValue(value) ? value : useMotionValue(defaultValue);
}
function ReorderItemComponent({ children, style = {}, value, as = "li", onDrag, onDragEnd, layout = true, ...props }, externalRef) {
  const Component = useConstant(() => motion[as]);
  const context = reactExports.useContext(ReorderContext);
  const point = {
    x: useDefaultMotionValue(style.x),
    y: useDefaultMotionValue(style.y)
  };
  const zIndex = useTransform([point.x, point.y], ([latestX, latestY]) => latestX || latestY ? 1 : "unset");
  const { axis, registerItem, updateOrder, groupRef } = context;
  return jsxRuntimeExports.jsx(Component, { drag: axis, ...props, dragSnapToOrigin: true, style: { ...style, x: point.x, y: point.y, zIndex }, layout, onDrag: (event, gesturePoint) => {
    const { velocity, point: pointerPoint } = gesturePoint;
    const offset = point[axis].get();
    updateOrder(value, offset, velocity[axis]);
    autoScrollIfNeeded(groupRef.current, pointerPoint[axis], axis, velocity[axis]);
    onDrag && onDrag(event, gesturePoint);
  }, onDragEnd: (event, gesturePoint) => {
    resetAutoScrollState();
    onDragEnd && onDragEnd(event, gesturePoint);
  }, onLayoutMeasure: (measured) => {
    registerItem(value, measured);
  }, ref: externalRef, ignoreStrict: true, children });
}
const ReorderItem = /* @__PURE__ */ reactExports.forwardRef(ReorderItemComponent);
export {
  ReorderGroup as R,
  ReorderItem as a
};
