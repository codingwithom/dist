import { c as createLucideIcon, j as jsxRuntimeExports, a as createSlot, b as cn, u as useLocalStorage, C as Card, A as AnimatePresence, I as Input, B as Button, m as motion, d as CalendarDays, e as useTagsContext, f as Check, X, T as Tag, g as ChevronLeft, h as ChevronRight, L as Link, i as useAppContext, k as useStreakContext, F as Flame, l as TARGET_SECONDS, V as Volume2, n as ChevronUp, P as Pause, o as Play, p as ChevronDown, q as useLockdown, r as Lock } from "./index-HDO9hi2b.js";
import { b as reactExports } from "./vendor-charts-Du7SI2xx.js";
import { C as CircleCheck } from "./circle-check-BQPSrTwW.js";
import { P as Plus, a as Pencil } from "./plus-DGBYb9es.js";
import { T as Timer } from "./timer-RsD384UB.js";
import { T as Trash2 } from "./trash-2-C02mSuyr.js";
import { C as Clock } from "./clock-BGrZK7tl.js";
import { C as CircleX } from "./circle-x-CZ9fY1vF.js";
import { Z as Zap } from "./zap-DQzZGEKr.js";
import { R as RotateCcw } from "./rotate-ccw-DRuuxWST.js";
import "./vendor-firebase-C_hAKoH5.js";
const __iconNode$4 = [
  ["circle", { cx: "12", cy: "13", r: "8", key: "3y4lt7" }],
  ["path", { d: "M12 9v4l2 2", key: "1c63tq" }],
  ["path", { d: "M5 3 2 6", key: "18tl5t" }],
  ["path", { d: "m22 6-3-3", key: "1opdir" }],
  ["path", { d: "M6.38 18.7 4 21", key: "17xu3x" }],
  ["path", { d: "M17.64 18.67 20 21", key: "kv2oe2" }]
];
const AlarmClock = createLucideIcon("alarm-clock", __iconNode$4);
const __iconNode$3 = [
  [
    "path",
    {
      d: "M4 22V4a1 1 0 0 1 .4-.8A6 6 0 0 1 8 2c3 0 5 2 7.333 2q2 0 3.067-.8A1 1 0 0 1 20 4v10a1 1 0 0 1-.4.8A6 6 0 0 1 16 16c-3 0-5-2-8-2a6 6 0 0 0-4 1.528",
      key: "1jaruq"
    }
  ]
];
const Flag = createLucideIcon("flag", __iconNode$3);
const __iconNode$2 = [
  ["path", { d: "M13 5h8", key: "a7qcls" }],
  ["path", { d: "M13 12h8", key: "h98zly" }],
  ["path", { d: "M13 19h8", key: "c3s6r1" }],
  ["path", { d: "m3 17 2 2 4-4", key: "1jhpwq" }],
  ["path", { d: "m3 7 2 2 4-4", key: "1obspn" }]
];
const ListChecks = createLucideIcon("list-checks", __iconNode$2);
const __iconNode$1 = [
  [
    "path",
    {
      d: "M14 9.536V7a4 4 0 0 1 4-4h1.5a.5.5 0 0 1 .5.5V5a4 4 0 0 1-4 4 4 4 0 0 0-4 4c0 2 1 3 1 5a5 5 0 0 1-1 3",
      key: "139s4v"
    }
  ],
  ["path", { d: "M4 9a5 5 0 0 1 8 4 5 5 0 0 1-8-4", key: "1dlkgp" }],
  ["path", { d: "M5 21h14", key: "11awu3" }]
];
const Sprout = createLucideIcon("sprout", __iconNode$1);
const __iconNode = [
  ["path", { d: "M12 10v2.2l1.6 1", key: "n3r21l" }],
  [
    "path",
    { d: "m16.13 7.66-.81-4.05a2 2 0 0 0-2-1.61h-2.68a2 2 0 0 0-2 1.61l-.78 4.05", key: "18k57s" }
  ],
  ["path", { d: "m7.88 16.36.8 4a2 2 0 0 0 2 1.61h2.72a2 2 0 0 0 2-1.61l.81-4.05", key: "16ny36" }],
  ["circle", { cx: "12", cy: "12", r: "6", key: "1vlfrh" }]
];
const Watch = createLucideIcon("watch", __iconNode);
function createContextScope(scopeName, createContextScopeDeps = []) {
  let defaultContexts = [];
  function createContext3(rootComponentName, defaultContext) {
    const BaseContext = reactExports.createContext(defaultContext);
    BaseContext.displayName = rootComponentName + "Context";
    const index = defaultContexts.length;
    defaultContexts = [...defaultContexts, defaultContext];
    const Provider = (props) => {
      const { scope, children, ...context } = props;
      const Context = scope?.[scopeName]?.[index] || BaseContext;
      const value = reactExports.useMemo(() => context, Object.values(context));
      return /* @__PURE__ */ jsxRuntimeExports.jsx(Context.Provider, { value, children });
    };
    Provider.displayName = rootComponentName + "Provider";
    function useContext2(consumerName, scope) {
      const Context = scope?.[scopeName]?.[index] || BaseContext;
      const context = reactExports.useContext(Context);
      if (context) return context;
      if (defaultContext !== void 0) return defaultContext;
      throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``);
    }
    return [Provider, useContext2];
  }
  const createScope = () => {
    const scopeContexts = defaultContexts.map((defaultContext) => {
      return reactExports.createContext(defaultContext);
    });
    return function useScope(scope) {
      const contexts = scope?.[scopeName] || scopeContexts;
      return reactExports.useMemo(
        () => ({ [`__scope${scopeName}`]: { ...scope, [scopeName]: contexts } }),
        [scope, contexts]
      );
    };
  };
  createScope.scopeName = scopeName;
  return [createContext3, composeContextScopes(createScope, ...createContextScopeDeps)];
}
function composeContextScopes(...scopes) {
  const baseScope = scopes[0];
  if (scopes.length === 1) return baseScope;
  const createScope = () => {
    const scopeHooks = scopes.map((createScope2) => ({
      useScope: createScope2(),
      scopeName: createScope2.scopeName
    }));
    return function useComposedScopes(overrideScopes) {
      const nextScopes = scopeHooks.reduce((nextScopes2, { useScope, scopeName }) => {
        const scopeProps = useScope(overrideScopes);
        const currentScope = scopeProps[`__scope${scopeName}`];
        return { ...nextScopes2, ...currentScope };
      }, {});
      return reactExports.useMemo(() => ({ [`__scope${baseScope.scopeName}`]: nextScopes }), [nextScopes]);
    };
  };
  createScope.scopeName = baseScope.scopeName;
  return createScope;
}
var NODES = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "select",
  "span",
  "svg",
  "ul"
];
var Primitive = NODES.reduce((primitive, node) => {
  const Slot = createSlot(`Primitive.${node}`);
  const Node = reactExports.forwardRef((props, forwardedRef) => {
    const { asChild, ...primitiveProps } = props;
    const Comp = asChild ? Slot : node;
    if (typeof window !== "undefined") {
      window[/* @__PURE__ */ Symbol.for("radix-ui")] = true;
    }
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Comp, { ...primitiveProps, ref: forwardedRef });
  });
  Node.displayName = `Primitive.${node}`;
  return { ...primitive, [node]: Node };
}, {});
var PROGRESS_NAME = "Progress";
var DEFAULT_MAX = 100;
var [createProgressContext] = createContextScope(PROGRESS_NAME);
var [ProgressProvider, useProgressContext] = createProgressContext(PROGRESS_NAME);
var Progress$1 = reactExports.forwardRef(
  (props, forwardedRef) => {
    const {
      __scopeProgress,
      value: valueProp = null,
      max: maxProp,
      getValueLabel = defaultGetValueLabel,
      ...progressProps
    } = props;
    if ((maxProp || maxProp === 0) && !isValidMaxNumber(maxProp)) {
      console.error(getInvalidMaxError(`${maxProp}`, "Progress"));
    }
    const max = isValidMaxNumber(maxProp) ? maxProp : DEFAULT_MAX;
    if (valueProp !== null && !isValidValueNumber(valueProp, max)) {
      console.error(getInvalidValueError(`${valueProp}`, "Progress"));
    }
    const value = isValidValueNumber(valueProp, max) ? valueProp : null;
    const valueLabel = isNumber(value) ? getValueLabel(value, max) : void 0;
    return /* @__PURE__ */ jsxRuntimeExports.jsx(ProgressProvider, { scope: __scopeProgress, value, max, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Primitive.div,
      {
        "aria-valuemax": max,
        "aria-valuemin": 0,
        "aria-valuenow": isNumber(value) ? value : void 0,
        "aria-valuetext": valueLabel,
        role: "progressbar",
        "data-state": getProgressState(value, max),
        "data-value": value ?? void 0,
        "data-max": max,
        ...progressProps,
        ref: forwardedRef
      }
    ) });
  }
);
Progress$1.displayName = PROGRESS_NAME;
var INDICATOR_NAME = "ProgressIndicator";
var ProgressIndicator = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeProgress, ...indicatorProps } = props;
    const context = useProgressContext(INDICATOR_NAME, __scopeProgress);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Primitive.div,
      {
        "data-state": getProgressState(context.value, context.max),
        "data-value": context.value ?? void 0,
        "data-max": context.max,
        ...indicatorProps,
        ref: forwardedRef
      }
    );
  }
);
ProgressIndicator.displayName = INDICATOR_NAME;
function defaultGetValueLabel(value, max) {
  return `${Math.round(value / max * 100)}%`;
}
function getProgressState(value, maxValue) {
  return value == null ? "indeterminate" : value === maxValue ? "complete" : "loading";
}
function isNumber(value) {
  return typeof value === "number";
}
function isValidMaxNumber(max) {
  return isNumber(max) && !isNaN(max) && max > 0;
}
function isValidValueNumber(value, max) {
  return isNumber(value) && !isNaN(value) && value <= max && value >= 0;
}
function getInvalidMaxError(propValue, componentName) {
  return `Invalid prop \`max\` of value \`${propValue}\` supplied to \`${componentName}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${DEFAULT_MAX}\`.`;
}
function getInvalidValueError(propValue, componentName) {
  return `Invalid prop \`value\` of value \`${propValue}\` supplied to \`${componentName}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${DEFAULT_MAX} if no \`max\` prop is set)
  - \`null\` or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`;
}
var Root = Progress$1;
var Indicator = ProgressIndicator;
const Progress = reactExports.forwardRef(({ className, value, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Root,
  {
    ref,
    className: cn(
      "relative h-2 w-full overflow-hidden rounded-full bg-primary/20",
      className
    ),
    ...props,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Indicator,
      {
        className: "h-full w-full flex-1 bg-primary transition-all",
        style: { transform: `translateX(-${100 - (value || 0)}%)` }
      }
    )
  }
));
Progress.displayName = Root.displayName;
const PRIORITY_COLORS = {
  High: "bg-red-500/20 text-red-400 border-red-500/30",
  Medium: "bg-amber-500/20 text-amber-400 border-amber-500/30",
  Low: "bg-muted text-muted-foreground border-border"
};
function getTodayStr$1() {
  return (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
}
function getCurrentMonth() {
  const now = /* @__PURE__ */ new Date();
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}`;
}
function formatTimer(s) {
  const h = Math.floor(s / 3600);
  const m = Math.floor(s % 3600 / 60);
  const sec = s % 60;
  if (h > 0) return `${h}:${m.toString().padStart(2, "0")}:${sec.toString().padStart(2, "0")}`;
  return `${m.toString().padStart(2, "0")}:${sec.toString().padStart(2, "0")}`;
}
function isVisibleToday(task) {
  const today = getTodayStr$1();
  if (task.recurring) return true;
  if (task.scheduledDates && task.scheduledDates.length > 0) {
    return task.scheduledDates.includes(today);
  }
  return task.createdDate === today;
}
function TagSelector({
  value,
  onChange
}) {
  const { tags } = useTagsContext();
  if (tags.length === 0) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-1.5 items-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { className: "h-3 w-3 text-muted-foreground" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        type: "button",
        onClick: () => onChange(void 0),
        className: `px-2 py-1 text-xs rounded-md border transition-colors ${!value ? "border-border bg-muted text-muted-foreground" : "border-border/50 text-muted-foreground hover:border-border"}`,
        children: "None"
      }
    ),
    tags.map((tag) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        type: "button",
        onClick: () => onChange(value === tag.id ? void 0 : tag.id),
        className: `px-2 py-1 text-xs rounded-md border-2 font-semibold transition-all ${value === tag.id ? "opacity-100 scale-105" : "opacity-60 hover:opacity-80"}`,
        style: value === tag.id ? {
          borderColor: tag.color,
          backgroundColor: tag.color + "25",
          color: tag.color
        } : {
          borderColor: tag.color + "60",
          backgroundColor: "transparent",
          color: tag.color
        },
        children: tag.name
      },
      tag.id
    ))
  ] });
}
function MiniCalendar({
  selected,
  onChange,
  onClose
}) {
  const now = /* @__PURE__ */ new Date();
  const [viewYear, setViewYear] = reactExports.useState(now.getFullYear());
  const [viewMonth, setViewMonth] = reactExports.useState(now.getMonth());
  const [local, setLocal] = reactExports.useState(selected);
  const firstDay = new Date(viewYear, viewMonth, 1).getDay();
  const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();
  const monthLabel = new Date(viewYear, viewMonth).toLocaleDateString("en-US", {
    month: "long",
    year: "numeric"
  });
  const prevMonth = () => {
    if (viewMonth === 0) {
      setViewMonth(11);
      setViewYear((y) => y - 1);
    } else setViewMonth((m) => m - 1);
  };
  const nextMonth = () => {
    if (viewMonth === 11) {
      setViewMonth(0);
      setViewYear((y) => y + 1);
    } else setViewMonth((m) => m + 1);
  };
  const toggleDate = (d) => setLocal((prev) => prev.includes(d) ? prev.filter((x) => x !== d) : [...prev, d]);
  const cells = Array(firstDay).fill(null);
  for (let d = 1; d <= daysInMonth; d++) {
    cells.push(
      `${viewYear}-${String(viewMonth + 1).padStart(2, "0")}-${String(d).padStart(2, "0")}`
    );
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute z-50 top-full mt-1 left-0 bg-card border border-border rounded-xl shadow-2xl p-3 w-60", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: prevMonth, className: "p-1 text-muted-foreground hover:text-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "h-3.5 w-3.5" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold text-foreground", children: monthLabel }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: nextMonth, className: "p-1 text-muted-foreground hover:text-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "h-3.5 w-3.5" }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-7 gap-0.5 mb-1", children: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((d) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center text-[9px] text-muted-foreground font-medium py-0.5", children: d }, d)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-7 gap-0.5", children: cells.map(
      (dateStr, i) => dateStr === null ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", {}, `e${i}`) : /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => toggleDate(dateStr),
          className: `text-[11px] rounded-md py-1 font-medium transition-colors ${local.includes(dateStr) ? "bg-primary text-primary-foreground" : dateStr === getTodayStr$1() ? "border border-primary/50 text-primary" : "text-muted-foreground hover:text-foreground hover:bg-muted"}`,
          children: parseInt(dateStr.slice(8))
        },
        dateStr
      )
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mt-2 pt-2 border-t border-border", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] text-muted-foreground", children: [
        local.length,
        " selected"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: onClose,
            className: "text-[10px] text-muted-foreground hover:text-white px-2 py-0.5 rounded",
            children: "Cancel"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => {
              onChange(local);
              onClose();
            },
            className: "text-[10px] bg-primary/20 text-primary border border-primary/30 rounded px-2 py-0.5 hover:bg-primary/30",
            children: "Save"
          }
        )
      ] })
    ] })
  ] });
}
function AddTaskForm({ onAdd }) {
  const [title, setTitle] = reactExports.useState("");
  const [priority, setPriority] = reactExports.useState("Medium");
  const [deadlineMonth, setDeadlineMonth] = reactExports.useState(getCurrentMonth);
  const [recurring, setRecurring] = reactExports.useState(false);
  const [scheduledDates, setScheduledDates] = reactExports.useState([]);
  const [tagId, setTagId] = reactExports.useState(void 0);
  const [expanded, setExpanded] = reactExports.useState(false);
  const [showCal, setShowCal] = reactExports.useState(false);
  const submit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    onAdd({
      id: Date.now().toString(),
      title: title.trim(),
      priority,
      completed: false,
      progress: 0,
      deadlineMonth: deadlineMonth || void 0,
      recurring,
      scheduledDates: scheduledDates.length > 0 ? scheduledDates : void 0,
      timerSeconds: 0,
      timerRunning: false,
      createdDate: getTodayStr$1(),
      tagId
    });
    setTitle("");
    setDeadlineMonth(getCurrentMonth());
    setPriority("Medium");
    setRecurring(false);
    setScheduledDates([]);
    setTagId(void 0);
    setExpanded(false);
    setShowCal(false);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: submit, className: "mb-4 space-y-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Input,
        {
          value: title,
          onChange: (e) => setTitle(e.target.value),
          placeholder: "Add a todo...",
          className: "bg-muted border-border flex-1",
          onFocus: () => setExpanded(true),
          "data-testid": "input-new-task"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "submit", className: "flex-shrink-0", "data-testid": "button-add-task", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-4 w-4" }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: expanded && /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0, height: 0 },
        animate: { opacity: 1, height: "auto" },
        exit: { opacity: 0, height: 0 },
        className: "overflow-visible",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 pt-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-1.5 items-center", children: [
            ["High", "Medium", "Low"].map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                className: `px-2 py-1 text-xs rounded-md border transition-colors ${priority === p ? PRIORITY_COLORS[p] : "border-white/10 text-muted-foreground hover:border-white/20"}`,
                onClick: () => setPriority(p),
                "data-testid": `priority-${p}`,
                children: p
              },
              p
            )),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "month",
                value: deadlineMonth,
                onChange: (e) => setDeadlineMonth(e.target.value),
                className: "h-7 text-xs bg-muted border border-border rounded-md px-2 text-foreground",
                "data-testid": "input-deadline"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TagSelector, { value: tagId, onChange: setTagId }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-1.5 items-center relative", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                className: `px-2 py-1 text-xs rounded-md border transition-colors ${recurring ? "border-primary text-primary bg-primary/10" : "border-border text-muted-foreground hover:border-primary/50"}`,
                onClick: () => {
                  setRecurring((v) => !v);
                  if (!recurring) setScheduledDates([]);
                },
                "data-testid": "toggle-recurring",
                children: "Daily Repeat"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  className: `flex items-center gap-1 px-2 py-1 text-xs rounded-md border transition-colors ${scheduledDates.length > 0 ? "border-green-500/40 text-green-400 bg-green-500/10" : "border-border text-muted-foreground hover:border-primary/50"}`,
                  onClick: () => {
                    setShowCal((v) => !v);
                    setRecurring(false);
                  },
                  "data-testid": "button-choose-dates",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarDays, { className: "h-3 w-3" }),
                    scheduledDates.length > 0 ? `${scheduledDates.length} date${scheduledDates.length > 1 ? "s" : ""} chosen` : "Choose Dates"
                  ]
                }
              ),
              showCal && /* @__PURE__ */ jsxRuntimeExports.jsx(
                MiniCalendar,
                {
                  selected: scheduledDates,
                  onChange: setScheduledDates,
                  onClose: () => setShowCal(false)
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                className: "text-xs text-muted-foreground hover:text-white ml-auto",
                onClick: () => setExpanded(false),
                children: "Collapse"
              }
            )
          ] })
        ] })
      }
    ) })
  ] });
}
function TaskItem({
  task,
  onUpdate,
  onDelete
}) {
  const { getTag } = useTagsContext();
  const [editing, setEditing] = reactExports.useState(false);
  const [editTitle, setEditTitle] = reactExports.useState(task.title);
  const [editPriority, setEditPriority] = reactExports.useState(task.priority);
  const [editDeadline, setEditDeadline] = reactExports.useState(task.deadlineMonth ?? "");
  const [editTagId, setEditTagId] = reactExports.useState(task.tagId);
  const intervalRef = reactExports.useRef(null);
  const tag = task.tagId ? getTag(task.tagId) : void 0;
  reactExports.useEffect(() => {
    if (task.timerRunning) {
      intervalRef.current = setInterval(() => {
        onUpdate({ ...task, timerSeconds: task.timerSeconds + 1 });
      }, 1e3);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [task.timerRunning, task.timerSeconds]);
  const saveEdit = () => {
    if (editTitle.trim()) {
      onUpdate({
        ...task,
        title: editTitle.trim(),
        priority: editPriority,
        deadlineMonth: editDeadline || void 0,
        tagId: editTagId
      });
    }
    setEditing(false);
  };
  const deadlineLabel = task.deadlineMonth ? (/* @__PURE__ */ new Date(task.deadlineMonth + "-15")).toLocaleDateString("en-US", { month: "short", year: "numeric" }) : null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      layout: true,
      initial: { opacity: 0, y: 8 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, x: -20, height: 0 },
      className: `rounded-xl border transition-all ${task.completed ? "opacity-50 bg-muted border-transparent" : "bg-muted/50 border-border hover:border-primary/30"}`,
      style: !task.completed && tag ? { borderColor: tag.color + "50" } : {},
      "data-testid": `task-item-${task.id}`,
      children: [
        tag && !task.completed && /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "h-0.5 w-full rounded-t-xl",
            style: { backgroundColor: tag.color }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 flex items-start gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              className: `mt-0.5 w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all ${task.completed ? "bg-primary border-primary" : "border-muted-foreground hover:border-primary"}`,
              onClick: () => onUpdate({ ...task, completed: !task.completed, progress: task.completed ? 0 : 100 }),
              "data-testid": `button-toggle-${task.id}`,
              children: task.completed && /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-3 w-3 text-primary-foreground" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
            editing ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5 mb-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  value: editTitle,
                  onChange: (e) => setEditTitle(e.target.value),
                  className: "w-full bg-transparent text-sm text-foreground outline-none border-b border-primary pb-0.5",
                  autoFocus: true,
                  onKeyDown: (e) => {
                    if (e.key === "Enter") saveEdit();
                    if (e.key === "Escape") setEditing(false);
                  },
                  "data-testid": `input-edit-task-${task.id}`
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1 flex-wrap items-center", children: [
                ["High", "Medium", "Low"].map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    className: `px-1.5 py-0.5 text-[10px] rounded border transition-colors ${editPriority === p ? PRIORITY_COLORS[p] : "border-border text-muted-foreground"}`,
                    onClick: () => setEditPriority(p),
                    children: p
                  },
                  p
                )),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    type: "month",
                    value: editDeadline,
                    onChange: (e) => setEditDeadline(e.target.value),
                    className: "h-5 text-[10px] bg-muted border border-border rounded px-1 text-foreground"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TagSelector, { value: editTagId, onChange: setEditTagId }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: saveEdit, className: "text-green-400 p-0.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-3 w-3" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setEditing(false), className: "text-muted-foreground p-0.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-3 w-3" }) })
              ] })
            ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: `text-sm font-medium leading-snug cursor-pointer hover:text-foreground transition-colors ${task.completed ? "line-through text-muted-foreground" : "text-foreground"}`,
                  onDoubleClick: () => setEditing(true),
                  "data-testid": `task-title-${task.id}`,
                  children: task.title
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-1.5 mt-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-[10px] font-medium px-1.5 py-0.5 rounded border ${PRIORITY_COLORS[task.priority]}`, children: task.priority }),
                tag && /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: "text-[10px] font-bold px-1.5 py-0.5 rounded border",
                    style: {
                      borderColor: tag.color + "60",
                      backgroundColor: tag.color + "20",
                      color: tag.color
                    },
                    children: tag.name
                  }
                ),
                deadlineLabel && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] text-muted-foreground", children: [
                  "Due ",
                  deadlineLabel
                ] }),
                task.recurring && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-primary bg-primary/10 px-1.5 py-0.5 rounded border border-primary/20", children: "Daily" }),
                task.scheduledDates && task.scheduledDates.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] text-green-400 bg-green-500/10 px-1.5 py-0.5 rounded border border-green-500/20", children: [
                  task.scheduledDates.length,
                  " date",
                  task.scheduledDates.length > 1 ? "s" : ""
                ] })
              ] })
            ] }),
            !editing && task.progress > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 space-y-0.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-[10px] text-muted-foreground", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Progress" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                  task.progress,
                  "%"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Progress, { value: task.progress, className: "h-1" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 flex-shrink-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                className: `flex items-center gap-1 text-[10px] tabular-nums px-1.5 py-1 rounded transition-colors ${task.timerRunning ? "bg-primary/20 text-primary" : "text-muted-foreground hover:text-white"}`,
                onClick: () => onUpdate({ ...task, timerRunning: !task.timerRunning }),
                "data-testid": `button-timer-${task.id}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Timer, { className: "h-3 w-3" }),
                  formatTimer(task.timerSeconds)
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                className: "p-1 text-muted-foreground hover:text-white transition-colors",
                onClick: () => setEditing(true),
                "data-testid": `button-edit-${task.id}`,
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Pencil, { className: "h-3 w-3" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                className: "p-1 text-muted-foreground hover:text-destructive transition-colors",
                onClick: () => onDelete(task.id),
                "data-testid": `button-delete-${task.id}`,
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-3 w-3" })
              }
            )
          ] })
        ] }),
        !task.completed && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-3 pb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "range",
            min: 0,
            max: 100,
            value: task.progress,
            onChange: (e) => onUpdate({ ...task, progress: parseInt(e.target.value) }),
            className: "w-full accent-primary cursor-pointer h-1",
            "data-testid": `range-progress-${task.id}`
          }
        ) })
      ]
    }
  );
}
function useTodoStats() {
  const [tasks] = useLocalStorage("jee_tasks", []);
  const [dailyRecords] = useLocalStorage("jee_daily_records", {});
  const today = getTodayStr$1();
  const todayTasks = tasks.filter(isVisibleToday);
  const todayCompleted = todayTasks.filter((t) => t.completed).length;
  const todayTotal = todayTasks.length;
  let totalCompleted = todayCompleted;
  let totalTasks = todayTotal;
  Object.entries(dailyRecords).forEach(([date, rec]) => {
    if (date !== today) {
      totalCompleted += rec.completed;
      totalTasks += rec.total;
    }
  });
  const pct = totalTasks > 0 ? Math.round(totalCompleted / totalTasks * 100) : 0;
  return { totalCompleted, totalTasks, pct, todayCompleted, todayTotal };
}
function TodoSystem() {
  const [tasks, setTasks] = useLocalStorage("jee_tasks", []);
  const [, setDailyRecords] = useLocalStorage("jee_daily_records", {});
  const [sortBy, setSortBy] = reactExports.useState("default");
  const today = getTodayStr$1();
  const todayTasks = tasks.filter(isVisibleToday);
  const sorted = [...todayTasks].sort((a, b) => {
    if (sortBy === "deadline") {
      if (!a.deadlineMonth) return 1;
      if (!b.deadlineMonth) return -1;
      return a.deadlineMonth.localeCompare(b.deadlineMonth);
    }
    if (sortBy === "progress") return b.progress - a.progress;
    return 0;
  });
  const completed = todayTasks.filter((t) => t.completed).length;
  const pct = todayTasks.length ? Math.round(completed / todayTasks.length * 100) : 0;
  reactExports.useEffect(() => {
    if (todayTasks.length > 0) {
      const rec = { completed, total: todayTasks.length };
      setDailyRecords((prev) => ({ ...prev, [today]: rec }));
    }
  }, [completed, todayTasks.length]);
  const addTask = (task) => setTasks((prev) => [task, ...prev]);
  const updateTask = (t) => setTasks((prev) => prev.map((x) => x.id === t.id ? t : x));
  const deleteTask = (id) => setTasks((prev) => prev.filter((x) => x.id !== id));
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-4 bg-card/50 backdrop-blur-sm border-border flex flex-col", style: { minHeight: 480 }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-base font-bold text-foreground", children: "ToDo List" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
          completed,
          "/",
          todayTasks.length,
          " today"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "select",
        {
          value: sortBy,
          onChange: (e) => setSortBy(e.target.value),
          className: "text-xs bg-muted border border-border rounded-md px-2 py-1 text-foreground",
          "data-testid": "select-sort",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "default", children: "Default" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "deadline", children: "By Deadline" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "progress", children: "By Progress" })
          ]
        }
      )
    ] }),
    todayTasks.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-xs text-muted-foreground mb-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Today's Progress" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
          pct,
          "%"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Progress, { value: pct, className: "h-1.5" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AddTaskForm, { onAdd: addTask }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 overflow-y-auto space-y-2 pr-1", style: { maxHeight: 320 }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: sorted.map((task) => /* @__PURE__ */ jsxRuntimeExports.jsx(TaskItem, { task, onUpdate: updateTask, onDelete: deleteTask }, task.id)) }),
      sorted.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center justify-center py-12 text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-10 w-10 mb-2 opacity-20" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-foreground", children: "No todos for today" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs mt-1", children: "Add a todo above to get started" })
      ] })
    ] })
  ] });
}
function getTodayStr() {
  return (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
}
function formatTime(isoString) {
  const d = new Date(isoString);
  return d.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", hour12: true });
}
function CalendarWidget() {
  const [events] = useLocalStorage("jee_cal_events", []);
  const [markedEvents, setMarkedEvents] = useLocalStorage("jee_today_marked", []);
  const { tags: systemTags, getTag } = useTagsContext();
  const today = getTodayStr();
  const todayEvents = events.filter((ev) => {
    const evDate = new Date(ev.start).toISOString().slice(0, 10);
    const isMarked = markedEvents.some((m) => m.eventId === ev.id && new Date(m.timestamp).toISOString().slice(0, 10) === today);
    return evDate === today && !isMarked;
  }).sort((a, b) => new Date(a.start).getTime() - new Date(b.start).getTime());
  const handleMark = (eventId, status) => {
    setMarkedEvents((prev) => [...prev, { eventId, status, timestamp: Date.now() }]);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-5 bg-card/50 backdrop-blur-sm border-border flex flex-col", style: { minHeight: 240 }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-base font-bold text-foreground flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-4 w-4 text-primary" }),
        "Today's Schedule"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { href: "/calendar", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-primary hover:text-primary/80 flex items-center gap-0.5 cursor-pointer group transition-colors", children: [
        "View Calendar",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "group-hover:translate-x-0.5 transition-transform", children: "→" })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 overflow-y-auto space-y-2", children: todayEvents.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center justify-center py-10 text-muted-foreground h-full", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-8 w-8 mb-2 opacity-20" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-center", children: "No events scheduled for today." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { href: "/calendar", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] text-primary hover:underline cursor-pointer mt-2", children: "Add Event →" }) })
    ] }) : todayEvents.map((ev, idx) => {
      const startTime = formatTime(ev.start);
      const endTime = formatTime(ev.end);
      const hasPWTag = ev.tags?.includes("tag_pw");
      const barColor = hasPWTag ? "#ef4444" : ev.color;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, x: -8 },
          animate: { opacity: 1, x: 0 },
          transition: { delay: idx * 0.05 },
          className: "rounded-lg border p-3 transition-all hover:border-primary/40 hover:bg-background/50 relative group",
          style: {
            borderColor: ev.color + "50",
            backgroundColor: ev.color + "0a"
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2.5 mb-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "w-1 h-6 rounded-full flex-shrink-0 mt-0.5",
                  style: { backgroundColor: barColor }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-foreground truncate", children: ev.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 text-[10px] text-muted-foreground mt-0.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-3 w-3" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                    startTime,
                    " – ",
                    endTime
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  motion.button,
                  {
                    whileHover: { scale: 1.1 },
                    whileTap: { scale: 0.95 },
                    onClick: () => handleMark(ev.id, "done"),
                    className: "p-1.5 rounded-full hover:bg-green-500/20 transition-colors",
                    title: "Mark as done",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-4 w-4 text-green-500" })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  motion.button,
                  {
                    whileHover: { scale: 1.1 },
                    whileTap: { scale: 0.95 },
                    onClick: () => handleMark(ev.id, "cancel"),
                    className: "p-1.5 rounded-full hover:bg-red-500/20 transition-colors",
                    title: "Mark as cancelled",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleX, { className: "h-4 w-4 text-red-500" })
                  }
                )
              ] })
            ] }),
            ev.description && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground mb-1.5 line-clamp-2 ml-3.5", children: ev.description }),
            ev.tags && ev.tags.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1 ml-3.5", children: ev.tags.map((tagId) => {
              const tag = getTag(tagId);
              return tag ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: "text-[9px] px-1.5 py-0.5 rounded-full border font-medium",
                  style: {
                    backgroundColor: tag.color + "20",
                    borderColor: tag.color + "50",
                    color: tag.color
                  },
                  children: tag.name
                },
                tagId
              ) : null;
            }) })
          ]
        },
        ev.id
      );
    }) })
  ] });
}
function ClockWidget() {
  const { theme } = useAppContext();
  const [time, setTime] = reactExports.useState("");
  const [date, setDate] = reactExports.useState("");
  const [is24Hour, setIs24Hour] = reactExports.useState(false);
  const isDark = theme === "dark";
  reactExports.useEffect(() => {
    const updateClock = () => {
      const now = /* @__PURE__ */ new Date();
      const hours = is24Hour ? now.getHours() : now.getHours() % 12 || 12;
      const minutes = now.getMinutes().toString().padStart(2, "0");
      const seconds = now.getSeconds().toString().padStart(2, "0");
      const ampm = is24Hour ? "" : now.getHours() >= 12 ? "PM" : "AM";
      const timeString = `${hours.toString().padStart(2, "0")}:${minutes}:${seconds}`;
      const dateString = now.toLocaleDateString("en-US", {
        weekday: "long",
        month: "short",
        day: "numeric"
      });
      setTime(timeString);
      setDate(`${dateString}${ampm ? " " + ampm : ""}`);
    };
    updateClock();
    const interval = setInterval(updateClock, 1e3);
    return () => clearInterval(interval);
  }, [is24Hour]);
  const bgClass = isDark ? "bg-card" : "bg-white";
  const textClass = isDark ? "text-foreground" : "text-gray-900";
  const mutedClass = isDark ? "text-muted-foreground" : "text-gray-600";
  const buttonBgActive = isDark ? "bg-primary text-primary-foreground" : "bg-primary/20 text-primary";
  const buttonBgInactive = isDark ? "bg-muted" : "bg-gray-200";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: `${bgClass} border-border p-6 flex flex-col items-center justify-center min-h-80`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: `h-5 w-5 ${mutedClass}` }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: `text-lg font-semibold ${textClass}`, children: "Clock" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center space-y-4 flex-1 flex flex-col items-center justify-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `text-6xl md:text-7xl font-mono font-bold ${textClass} tabular-nums tracking-tight`, children: time || "00:00:00" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `text-xl md:text-2xl font-medium ${mutedClass}`, children: date || "Loading..." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mt-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => setIs24Hour(false),
            className: `px-4 py-2 rounded-lg text-sm font-medium transition-colors ${!is24Hour ? buttonBgActive : buttonBgInactive} ${!is24Hour ? "" : mutedClass}`,
            children: "12H"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => setIs24Hour(true),
            className: `px-4 py-2 rounded-lg text-sm font-medium transition-colors ${is24Hour ? buttonBgActive : buttonBgInactive} ${is24Hour ? "" : mutedClass}`,
            children: "24H"
          }
        )
      ] })
    ] })
  ] });
}
function FireIcon({
  active,
  size = "md"
}) {
  const cls = {
    xs: "h-3.5 w-3.5",
    sm: "h-5 w-5",
    md: "h-6 w-6",
    lg: "h-9 w-9",
    xl: "h-14 w-14"
  };
  if (!active) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Flame, { className: `${cls[size]} text-muted-foreground/35` });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      animate: { scale: [1, 1.14, 0.96, 1.08, 1], rotate: [-4, 4, -2, 3, 0] },
      transition: { duration: 2, repeat: Infinity, ease: "easeInOut" },
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Flame,
        {
          className: cls[size],
          style: {
            color: "#f97316",
            filter: "drop-shadow(0 0 6px rgba(249,115,22,0.8)) drop-shadow(0 0 14px rgba(234,179,8,0.45))"
          }
        }
      )
    }
  );
}
function WeekGrid() {
  const { streakData, todaySession } = useStreakContext();
  const today = /* @__PURE__ */ new Date();
  const todayStr = today.toISOString().slice(0, 10);
  const dayOfWeek = today.getDay();
  const mondayOffset = dayOfWeek === 0 ? -6 : 1 - dayOfWeek;
  const monday = new Date(today);
  monday.setDate(today.getDate() + mondayOffset);
  const labels = ["M", "T", "W", "T", "F", "S", "S"];
  const weekDates = labels.map((_, i) => {
    const d = new Date(monday);
    d.setDate(monday.getDate() + i);
    return d.toISOString().slice(0, 10);
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1.5 justify-between mt-4", children: labels.map((lbl, i) => {
    const dateStr = weekDates[i];
    const record = streakData.records.find((r) => r.date === dateStr);
    const isToday = dateStr === todayStr;
    const isFuture = dateStr > todayStr;
    const isEarned = record?.type === "earned" || isToday && todaySession.streakEarned;
    const isExtended = record?.type === "extended";
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center gap-1 flex-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "span",
        {
          className: `text-[9px] font-bold uppercase tracking-wider ${isToday ? "text-orange-500" : "text-muted-foreground"}`,
          children: lbl
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: `w-8 h-8 rounded-full flex items-center justify-center border-2 transition-all
                ${isEarned ? "border-orange-400 bg-gradient-to-br from-orange-100 to-amber-100 dark:from-orange-950/50 dark:to-amber-950/50 shadow-md shadow-orange-200 dark:shadow-orange-900/30" : isExtended ? "border-blue-400 bg-blue-50 dark:bg-blue-950/40" : isToday ? "border-primary/60 bg-primary/10" : isFuture ? "border-border/25 bg-transparent" : "border-border/40 bg-muted/30"}`,
          children: isEarned ? isToday ? /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { animate: { scale: [1, 1.15, 1] }, transition: { duration: 1.6, repeat: Infinity, delay: i * 0.12 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Flame, { className: "h-4 w-4", style: { color: "#f97316", filter: "drop-shadow(0 0 4px rgba(249,115,22,0.6))" } }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Flame, { className: "h-4 w-4", style: { color: "#f97316" } }) : isExtended ? /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "h-3.5 w-3.5 text-blue-400" }) : isToday ? /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              className: "w-2 h-2 rounded-full bg-primary",
              animate: { scale: [1, 1.4, 1] },
              transition: { duration: 1.5, repeat: Infinity }
            }
          ) : null
        }
      )
    ] }, i);
  }) });
}
function fmtDate(dateStr) {
  const d = /* @__PURE__ */ new Date(dateStr + "T12:00:00");
  return d.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric", year: "numeric" });
}
function fmtTime(seconds) {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m}m ${s.toString().padStart(2, "0")}s`;
}
function StreakModal({ onClose }) {
  const { streakData, todaySession, todayProgress, extendStreak, canExtend, extendsLeft } = useStreakContext();
  const [extended, setExtended] = reactExports.useState(false);
  const handleExtend = () => {
    const ok = extendStreak();
    if (ok) setExtended(true);
  };
  const secsLeft = Math.max(0, TARGET_SECONDS - todaySession.seconds);
  const minsLeft = Math.ceil(secsLeft / 60);
  const sortedRecords = [...streakData.records].sort(
    (a, b) => (b.date || "").localeCompare(a.date || "")
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fixed inset-0 z-50 flex items-center justify-center p-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        className: "absolute inset-0 bg-black/50 backdrop-blur-sm",
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        onClick: onClose
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, scale: 0.88, y: 24 },
        animate: { opacity: 1, scale: 1, y: 0 },
        exit: { opacity: 0, scale: 0.88, y: 24 },
        transition: { type: "spring", stiffness: 300, damping: 22 },
        className: "relative bg-card border border-border rounded-2xl shadow-2xl w-full max-w-sm z-10 overflow-hidden",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 dark:from-orange-950/40 dark:via-amber-950/30 dark:to-yellow-950/20 px-5 pt-5 pb-4 border-b border-orange-200/50 dark:border-orange-800/30", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: onClose,
                className: "absolute top-3 right-3 h-7 w-7 flex items-center justify-center rounded-full hover:bg-black/10 dark:hover:bg-white/10 text-muted-foreground transition-colors",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  motion.span,
                  {
                    initial: { scale: 0.7, opacity: 0 },
                    animate: { scale: 1, opacity: 1 },
                    className: "text-7xl font-black leading-none",
                    style: {
                      color: "#f97316",
                      textShadow: "3px 3px 0px rgba(234, 88, 12, 0.25)",
                      WebkitTextStroke: "1.5px rgba(234, 88, 12, 0.35)"
                    },
                    children: streakData.currentStreak
                  },
                  streakData.currentStreak
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -bottom-1 -right-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FireIcon, { active: todaySession.streakEarned, size: "sm" }) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl font-bold text-foreground leading-tight", children: "Days Streak!!" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1", children: "Every day counts!" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Keep the momentum going!" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(WeekGrid, {})
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-5 py-3 border-b border-border", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold text-foreground", children: "Today's Progress" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-medium text-muted-foreground", children: [
                fmtTime(todaySession.seconds),
                " / 10m"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2.5 bg-muted rounded-full overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                className: `h-full rounded-full transition-colors ${todaySession.streakEarned ? "bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-400" : "bg-primary"}`,
                initial: { width: 0 },
                animate: { width: `${todayProgress}%` },
                transition: { duration: 0.8, ease: "easeOut" }
              }
            ) }),
            todaySession.streakEarned ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-orange-500 font-semibold mt-1", children: "✓ Today's streak earned!" }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[10px] text-muted-foreground mt-1", children: [
              minsLeft,
              " min left to earn today's streak"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-5 py-3 border-b border-border", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-foreground", children: "Extend Streak" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[10px] text-muted-foreground", children: [
                  extendsLeft,
                  " / 5 uses remaining this month"
                ] }),
                extended && /* @__PURE__ */ jsxRuntimeExports.jsx(
                  motion.p,
                  {
                    initial: { opacity: 0, y: -4 },
                    animate: { opacity: 1, y: 0 },
                    className: "text-[10px] text-blue-500 font-medium mt-0.5",
                    children: "✓ Streak extended for today!"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  onClick: handleExtend,
                  disabled: !canExtend || extended,
                  className: `shrink-0 flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold transition-all
                ${canExtend && !extended ? "bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white shadow-md hover:shadow-orange-500/30 active:scale-95" : "bg-muted text-muted-foreground cursor-not-allowed"}`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "h-3 w-3" }),
                    "Extend"
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1 mt-2", children: Array.from({ length: 5 }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: `h-1 flex-1 rounded-full transition-colors ${i < extendsLeft ? "bg-orange-400" : "bg-muted"}`
              },
              i
            )) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-h-48 overflow-y-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-5 py-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-2", children: "History" }),
            sortedRecords.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Flame, { className: "h-8 w-8 mx-auto text-muted-foreground/20 mb-2" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "No records yet — start your streak!" })
            ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: sortedRecords.map((r, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                initial: { opacity: 0, x: -8 },
                animate: { opacity: 1, x: 0 },
                transition: { delay: i * 0.04 },
                className: "flex items-center gap-2",
                children: [
                  r.type === "earned" ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Flame,
                    {
                      className: "h-3.5 w-3.5 flex-shrink-0",
                      style: { color: "#f97316" }
                    }
                  ) : /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "h-3.5 w-3.5 text-blue-400 flex-shrink-0" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-foreground flex-1 truncate", children: fmtDate(r.date) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: `text-[9px] px-2 py-0.5 rounded-full font-semibold whitespace-nowrap
                        ${r.type === "earned" ? "bg-orange-500/15 text-orange-600 dark:text-orange-400" : "bg-blue-500/15 text-blue-600 dark:text-blue-400"}`,
                      children: r.type === "earned" ? "Streak Earned" : "Extended"
                    }
                  )
                ]
              },
              i
            )) })
          ] }) })
        ]
      }
    )
  ] });
}
function StreakCard() {
  const { streakData, todaySession, todayProgress } = useStreakContext();
  const [showModal, setShowModal] = reactExports.useState(false);
  const todayDone = todaySession.streakEarned;
  const todayMins = Math.floor(todaySession.seconds / 60);
  const todaySecs = todaySession.seconds % 60;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: `p-4 border-border relative overflow-hidden transition-all ${todayDone ? "bg-gradient-to-br from-orange-50/60 to-amber-50/40 dark:from-orange-950/20 dark:to-amber-950/10" : "bg-card"}`, children: [
      todayDone && /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          className: "absolute inset-0 rounded-xl pointer-events-none",
          animate: { opacity: [0.4, 0.7, 0.4] },
          transition: { duration: 2.5, repeat: Infinity },
          style: {
            background: "radial-gradient(ellipse at 20% 50%, rgba(249,115,22,0.08) 0%, transparent 70%)"
          }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: () => setShowModal(true),
            className: `relative flex-shrink-0 h-12 w-12 rounded-full flex items-center justify-center border transition-all hover:scale-105 active:scale-95
              ${todayDone ? "bg-orange-500/15 border-orange-400/50 shadow-lg shadow-orange-500/20" : "bg-muted border-border hover:border-primary/40"}`,
            title: "View streak details",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(FireIcon, { active: todayDone, size: "md" }),
              streakData.currentStreak > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-1 -right-1 h-5 min-w-5 rounded-full bg-orange-500 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] font-bold text-white px-1", children: streakData.currentStreak }) })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground font-medium", children: "Prep Streak" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-2xl font-bold text-foreground tabular-nums leading-tight", children: [
            streakData.currentStreak,
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-base font-semibold text-muted-foreground", children: streakData.currentStreak === 1 ? "Day" : "Days" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-0.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-muted-foreground", children: todayDone ? "✓ Streak earned today!" : `${todayMins}m ${todaySecs.toString().padStart(2, "0")}s / 10m` }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] font-semibold text-muted-foreground", children: [
                todayProgress,
                "%"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1.5 bg-muted rounded-full overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                className: `h-full rounded-full ${todayDone ? "bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-400" : "bg-primary"}`,
                initial: { width: 0 },
                animate: { width: `${todayProgress}%` },
                transition: { duration: 0.6, ease: "easeOut" }
              }
            ) })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: showModal && /* @__PURE__ */ jsxRuntimeExports.jsx(StreakModal, { onClose: () => setShowModal(false) }) })
  ] });
}
let audioCtx = null;
let _volume = 0.7;
function setBeepVolume(v) {
  _volume = Math.max(0, Math.min(1, v));
}
function getBeepVolume() {
  return _volume;
}
function getCtx() {
  if (!audioCtx || audioCtx.state === "closed") {
    audioCtx = new AudioContext();
  }
  return audioCtx;
}
function beep(freq, startTime, duration, gain = 0.4) {
  const ctx = getCtx();
  const osc = ctx.createOscillator();
  const g = ctx.createGain();
  osc.connect(g);
  g.connect(ctx.destination);
  osc.type = "sine";
  osc.frequency.setValueAtTime(freq, startTime);
  const scaledGain = gain * _volume;
  g.gain.setValueAtTime(0, startTime);
  g.gain.linearRampToValueAtTime(scaledGain, startTime + 0.01);
  g.gain.exponentialRampToValueAtTime(1e-4, startTime + duration);
  osc.start(startTime);
  osc.stop(startTime + duration + 0.05);
}
function playTimerDone() {
  try {
    if (_volume === 0) return;
    const ctx = getCtx();
    const t = ctx.currentTime;
    beep(880, t, 0.18);
    beep(880, t + 0.22, 0.18);
    beep(1100, t + 0.44, 0.35, 0.5);
  } catch {
  }
}
function playAlarmRing() {
  try {
    if (_volume === 0) return;
    const ctx = getCtx();
    const t = ctx.currentTime;
    for (let i = 0; i < 5; i++) {
      beep(960, t + i * 0.28, 0.18);
      beep(760, t + i * 0.28 + 0.12, 0.1, 0.3);
    }
  } catch {
  }
}
const DAY_NAMES = ["S", "M", "T", "W", "T", "F", "S"];
const SOUNDS = ["Chime", "Bells", "Beep", "Alert"];
const STORAGE_TIMERS = "jee_tm_timers";
const STORAGE_ALARMS = "jee_tm_alarms";
function fmtSecs(s) {
  const h = Math.floor(s / 3600);
  const m = Math.floor(s % 3600 / 60);
  const sec = s % 60;
  if (h > 0) return `${h}:${String(m).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;
  return `${String(m).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;
}
function fmtMs(ms) {
  const h = Math.floor(ms / 36e5);
  const m = Math.floor(ms % 36e5 / 6e4);
  const s = Math.floor(ms % 6e4 / 1e3);
  const cs = Math.floor(ms % 1e3 / 10);
  return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}.${String(cs).padStart(2, "0")}`;
}
function timeUntil(h12, m, isPM) {
  const now = /* @__PURE__ */ new Date();
  const targetHour = isPM ? h12 === 12 ? 12 : h12 + 12 : h12 === 12 ? 0 : h12;
  const target = new Date(now);
  target.setHours(targetHour, m, 0, 0);
  if (target <= now) target.setDate(target.getDate() + 1);
  const diff = target.getTime() - now.getTime();
  const totalMins = Math.floor(diff / 6e4);
  const hours = Math.floor(totalMins / 60);
  const mins = totalMins % 60;
  if (hours === 0) return `in ${mins}m`;
  if (mins === 0) return `in ${hours}h`;
  return `in ${hours}h ${mins}m`;
}
function loadTimers() {
  try {
    const raw = localStorage.getItem(STORAGE_TIMERS);
    if (raw) return JSON.parse(raw).map((t) => ({ ...t, running: false }));
  } catch {
  }
  return [];
}
function loadAlarms() {
  try {
    const raw = localStorage.getItem(STORAGE_ALARMS);
    if (raw) return JSON.parse(raw);
  } catch {
  }
  return [];
}
function SpinInput({
  value,
  min,
  max,
  wrap = false,
  onChange,
  className
}) {
  const [raw, setRaw] = reactExports.useState(String(value).padStart(2, "0"));
  reactExports.useEffect(() => {
    setRaw(String(value).padStart(2, "0"));
  }, [value]);
  const clamp = (n) => {
    if (wrap) {
      const range = max - min + 1;
      return ((n - min) % range + range) % range + min;
    }
    return Math.min(max, Math.max(min, n));
  };
  const commit = (raw2) => {
    const n = parseInt(raw2, 10);
    onChange(isNaN(n) ? value : clamp(n));
  };
  const onWheel = (e) => {
    e.preventDefault();
    e.stopPropagation();
    onChange(clamp(value + (e.deltaY > 0 ? 1 : -1)));
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "input",
    {
      type: "text",
      inputMode: "numeric",
      value: raw,
      onChange: (e) => setRaw(e.target.value),
      onBlur: () => commit(raw),
      onKeyDown: (e) => {
        if (e.key === "Enter") commit(raw);
        if (e.key === "ArrowUp") {
          e.preventDefault();
          onChange(clamp(value + 1));
        }
        if (e.key === "ArrowDown") {
          e.preventDefault();
          onChange(clamp(value - 1));
        }
      },
      onWheel,
      className,
      style: { cursor: "ns-resize" }
    }
  );
}
function VolumeControl({ isDark }) {
  const [vol, setVol] = reactExports.useState(() => getBeepVolume());
  const barRef = reactExports.useRef(null);
  const dragging = reactExports.useRef(false);
  const applyVol = (v) => {
    const clamped = Math.max(0, Math.min(1, v));
    setVol(clamped);
    setBeepVolume(clamped);
  };
  const posToVol = (clientX) => {
    const rect = barRef.current?.getBoundingClientRect();
    if (!rect) return vol;
    return (clientX - rect.left) / rect.width;
  };
  const onMouseDown = (e) => {
    if (e.button !== 0) return;
    dragging.current = true;
    applyVol(posToVol(e.clientX));
    e.preventDefault();
  };
  reactExports.useEffect(() => {
    const onMove = (e) => {
      if (dragging.current) applyVol(posToVol(e.clientX));
    };
    const onUp = () => {
      dragging.current = false;
    };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
    };
  });
  const onWheel = (e) => {
    e.preventDefault();
    applyVol(vol + (e.deltaY > 0 ? -0.05 : 0.05));
  };
  const mc = isDark ? "text-gray-400" : "text-gray-500";
  const trackBg = isDark ? "bg-white/10" : "bg-gray-200";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 min-w-[140px]", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Volume2, { className: `h-4 w-4 shrink-0 ${mc}` }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        ref: barRef,
        onMouseDown,
        onWheel,
        className: `relative h-2 flex-1 rounded-full ${trackBg} cursor-pointer select-none`,
        title: `Beep volume: ${Math.round(vol * 100)}%`,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "h-full rounded-full bg-blue-500 pointer-events-none transition-none",
              style: { width: `${vol * 100}%` }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-blue-400 border-2 border-white shadow pointer-events-none",
              style: { left: `calc(${vol * 100}% - 6px)` }
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `text-[10px] font-medium tabular-nums w-7 text-right ${mc}`, children: [
      Math.round(vol * 100),
      "%"
    ] })
  ] });
}
function ProgressRing({ remaining, total, size = 120 }) {
  const r = size / 2 - 8;
  const circ = 2 * Math.PI * r;
  const pct = total > 0 ? remaining / total : 0;
  const offset = circ * (1 - pct);
  const done = remaining === 0 && total > 0;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { width: size, height: size, className: "absolute inset-0", style: { transform: "rotate(-90deg)" }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: size / 2, cy: size / 2, r, fill: "none", strokeWidth: 5, stroke: "currentColor", className: "text-border/40" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "circle",
      {
        cx: size / 2,
        cy: size / 2,
        r,
        fill: "none",
        strokeWidth: 5,
        stroke: done ? "#22c55e" : "#3b82f6",
        strokeDasharray: circ,
        strokeDashoffset: offset,
        strokeLinecap: "round",
        style: { transition: "stroke-dashoffset 0.9s linear, stroke 0.3s" }
      }
    )
  ] });
}
function TimersSection({ isDark }) {
  const [timers, setTimers] = reactExports.useState(loadTimers);
  const [modalOpen, setModalOpen] = reactExports.useState(false);
  const [editing, setEditing] = reactExports.useState(null);
  const [name, setName] = reactExports.useState("Timer");
  const [h, setH] = reactExports.useState(0);
  const [m, setM] = reactExports.useState(5);
  const [s, setS] = reactExports.useState(0);
  reactExports.useEffect(() => {
    localStorage.setItem(STORAGE_TIMERS, JSON.stringify(timers));
  }, [timers]);
  reactExports.useEffect(() => {
    const interval = setInterval(() => {
      setTimers(
        (prev) => prev.map((t) => {
          if (!t.running) return t;
          if (t.remaining <= 1) {
            playTimerDone();
            if ("Notification" in window && Notification.permission === "granted") {
              new Notification(`⏰ "${t.name}" finished!`);
            }
            if (t.totalSecs >= 1500) {
              const currentPlants = JSON.parse(localStorage.getItem("jee_tm_garden") || "[]");
              const types = ["🌲", "🌳", "🌵", "🪴", "🌴", "🌻", "🍁", "🍄", "🌺"];
              const plantType = types[Math.floor(Math.random() * types.length)];
              currentPlants.push({ id: Date.now(), name: t.name, date: (/* @__PURE__ */ new Date()).toISOString(), type: plantType });
              localStorage.setItem("jee_tm_garden", JSON.stringify(currentPlants));
            }
            return { ...t, running: false, remaining: 0 };
          }
          return { ...t, remaining: t.remaining - 1 };
        })
      );
    }, 1e3);
    return () => clearInterval(interval);
  }, []);
  const openAdd = () => {
    setEditing(null);
    setName("Timer");
    setH(0);
    setM(5);
    setS(0);
    setModalOpen(true);
  };
  const openEdit = (t) => {
    setEditing(t);
    setName(t.name);
    setH(Math.floor(t.totalSecs / 3600));
    setM(Math.floor(t.totalSecs % 3600 / 60));
    setS(t.totalSecs % 60);
    setModalOpen(true);
  };
  const save = () => {
    const totalSecs = h * 3600 + m * 60 + s;
    if (totalSecs <= 0) return;
    if (editing) {
      setTimers((prev) => prev.map(
        (t) => t.id === editing.id ? { ...t, name, totalSecs, remaining: totalSecs, running: false } : t
      ));
    } else {
      setTimers((prev) => [...prev, { id: Date.now().toString(), name, totalSecs, remaining: totalSecs, running: false }]);
    }
    setModalOpen(false);
  };
  const toggle = (id) => setTimers((prev) => prev.map((t) => t.id === id && t.remaining > 0 ? { ...t, running: !t.running } : t));
  const reset = (id) => setTimers((prev) => prev.map((t) => t.id === id ? { ...t, remaining: t.totalSecs, running: false } : t));
  const del = (id) => setTimers((prev) => prev.filter((t) => t.id !== id));
  const tc = isDark ? "text-white" : "text-gray-900";
  const mc = isDark ? "text-gray-400" : "text-gray-500";
  const cardBg = isDark ? "bg-muted/20" : "bg-gray-50";
  const modalBg = isDark ? "bg-card border-white/10" : "bg-white border-gray-200";
  const addBg = isDark ? "bg-white/5 hover:bg-white/10 border-white/10" : "bg-gray-50 hover:bg-gray-100 border-gray-200";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 mb-2", children: [
      timers.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `${cardBg} rounded-xl p-4 border border-border/30 flex flex-col items-center gap-3`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between w-full", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-sm font-semibold ${tc} truncate flex-1`, children: t.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-0.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => openEdit(t), className: `${mc} hover:text-primary p-1.5 rounded`, title: "Edit", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronUp, { className: "h-3 w-3" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => del(t.id), className: `${mc} hover:text-destructive p-1.5 rounded`, title: "Delete", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-3 w-3" }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", style: { width: 120, height: 120 }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ProgressRing, { remaining: t.remaining, total: t.totalSecs, size: 120 }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 flex flex-col items-center justify-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-xl font-mono font-bold ${tc} tabular-nums`, children: fmtSecs(t.remaining) }),
            t.remaining === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-green-500 font-medium", children: "Done!" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => toggle(t.id),
              disabled: t.remaining === 0,
              className: "h-9 w-9 rounded-full bg-blue-600 hover:bg-blue-500 text-white flex items-center justify-center disabled:opacity-40 shadow-md shadow-blue-500/20 transition-all",
              children: t.running ? /* @__PURE__ */ jsxRuntimeExports.jsx(Pause, { className: "h-4 w-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Play, { className: "h-4 w-4 ml-0.5" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => reset(t.id),
              className: `h-9 w-9 rounded-full border border-border ${isDark ? "hover:bg-white/10" : "hover:bg-gray-100"} ${mc} flex items-center justify-center transition-all`,
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(RotateCcw, { className: "h-4 w-4" })
            }
          )
        ] })
      ] }, t.id)),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          onClick: openAdd,
          className: `${addBg} border-2 border-dashed rounded-xl flex flex-col items-center justify-center gap-2 min-h-[11rem] transition-colors`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: `h-6 w-6 ${mc}` }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-sm ${mc}`, children: "Add Timer" })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: modalOpen && /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        className: "fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4",
        onClick: (e) => e.target === e.currentTarget && setModalOpen(false),
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { scale: 0.9, opacity: 0 },
            animate: { scale: 1, opacity: 1 },
            exit: { scale: 0.9, opacity: 0 },
            className: `${modalBg} border rounded-2xl p-6 w-full max-w-sm`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: `text-lg font-bold ${tc}`, children: editing ? "Edit Timer" : "New Timer" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setModalOpen(false), className: mc, children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-5 w-5" }) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: name, onChange: (e) => setName(e.target.value), placeholder: "Timer Name", className: "mb-5" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center gap-4 mb-6", children: [{ val: h, set: setH, min: 0, max: 23, label: "HH" }, { val: m, set: setM, min: 0, max: 59, label: "MM" }, { val: s, set: setS, min: 0, max: 59, label: "SS" }].map((item, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center gap-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => item.set((v) => Math.min(item.max, v + 1)), className: `${mc} hover:text-primary p-1`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronUp, { className: "h-4 w-4" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  SpinInput,
                  {
                    value: item.val,
                    min: item.min,
                    max: item.max,
                    onChange: (v) => item.set(v),
                    className: `text-3xl font-mono font-bold bg-transparent border-none outline-none text-center tabular-nums w-12 ${tc}`
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => item.set((v) => Math.max(0, v - 1)), className: `${mc} hover:text-primary p-1`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "h-4 w-4" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-[10px] ${mc} font-medium`, children: item.label })
              ] }, idx)) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", className: "flex-1", onClick: () => setModalOpen(false), children: "Cancel" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { className: "flex-1", onClick: save, children: "Save Timer" })
              ] })
            ]
          }
        )
      }
    ) })
  ] });
}
function StopwatchSection({ isDark }) {
  const [running, setRunning] = reactExports.useState(false);
  const [laps, setLaps] = reactExports.useState([]);
  const startRef = reactExports.useRef(null);
  const baseRef = reactExports.useRef(0);
  const rafRef = reactExports.useRef(0);
  const displayRef = reactExports.useRef(null);
  const currentElapsedRef = reactExports.useRef(0);
  const tick = reactExports.useCallback(() => {
    if (startRef.current !== null) {
      const current = baseRef.current + (Date.now() - startRef.current);
      currentElapsedRef.current = current;
      if (displayRef.current) {
        displayRef.current.textContent = fmtMs(current);
      }
      rafRef.current = requestAnimationFrame(tick);
    }
  }, []);
  const start = () => {
    startRef.current = Date.now();
    setRunning(true);
    rafRef.current = requestAnimationFrame(tick);
  };
  const pause = () => {
    baseRef.current = currentElapsedRef.current;
    startRef.current = null;
    cancelAnimationFrame(rafRef.current);
    setRunning(false);
  };
  const reset = () => {
    cancelAnimationFrame(rafRef.current);
    startRef.current = null;
    baseRef.current = 0;
    currentElapsedRef.current = 0;
    if (displayRef.current) displayRef.current.textContent = fmtMs(0);
    setLaps([]);
    setRunning(false);
  };
  const lap = () => {
    const prevTotal = laps.length > 0 ? laps[laps.length - 1].totalMs : 0;
    setLaps((prev) => [...prev, { n: prev.length + 1, lapMs: currentElapsedRef.current - prevTotal, totalMs: currentElapsedRef.current }]);
  };
  reactExports.useEffect(() => () => cancelAnimationFrame(rafRef.current), []);
  const tc = isDark ? "text-white" : "text-gray-900";
  const mc = isDark ? "text-gray-400" : "text-gray-500";
  const rowBg = isDark ? "border-white/10 hover:bg-white/5" : "border-gray-100 hover:bg-gray-50";
  const theadBg = isDark ? "bg-white/5 text-gray-400" : "bg-gray-50 text-gray-500";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center gap-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: displayRef, className: `text-5xl sm:text-6xl md:text-7xl font-mono font-bold ${tc} tabular-nums tracking-tight select-none`, children: fmtMs(currentElapsedRef.current) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: running ? pause : start,
          className: "h-16 w-16 rounded-full bg-blue-600 hover:bg-blue-500 active:scale-95 text-white flex items-center justify-center shadow-lg shadow-blue-500/30 transition-all",
          children: running ? /* @__PURE__ */ jsxRuntimeExports.jsx(Pause, { className: "h-7 w-7" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Play, { className: "h-7 w-7 ml-1" })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: lap,
          disabled: !running,
          className: `h-14 w-14 rounded-full border-2 border-border ${isDark ? "hover:bg-white/10" : "hover:bg-gray-100"} ${mc} flex items-center justify-center disabled:opacity-40 transition-all active:scale-95`,
          title: "Lap",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(Flag, { className: "h-5 w-5" })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: reset,
          className: `h-14 w-14 rounded-full border-2 border-border ${isDark ? "hover:bg-white/10" : "hover:bg-gray-100"} ${mc} flex items-center justify-center transition-all active:scale-95`,
          title: "Reset",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(RotateCcw, { className: "h-5 w-5" })
        }
      )
    ] }),
    laps.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full max-h-56 overflow-y-auto rounded-xl border border-border/40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: theadBg, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-2.5 text-left text-xs font-semibold uppercase tracking-wider", children: "Lap" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-2.5 text-left text-xs font-semibold uppercase tracking-wider", children: "Lap Time" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-2.5 text-left text-xs font-semibold uppercase tracking-wider", children: "Total" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: [...laps].reverse().map((l) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: `border-t ${rowBg} transition-colors`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: `px-4 py-2.5 font-medium ${mc}`, children: [
          "#",
          l.n
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: `px-4 py-2.5 font-mono text-sm ${tc}`, children: fmtMs(l.lapMs) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: `px-4 py-2.5 font-mono text-sm ${mc}`, children: fmtMs(l.totalMs) })
      ] }, l.n)) })
    ] }) }),
    laps.length === 0 && !running && currentElapsedRef.current === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `text-sm ${mc}`, children: "Press play to start timing" })
  ] });
}
function AlarmsSection({ isDark }) {
  const [alarms, setAlarms] = reactExports.useState(loadAlarms);
  const [modalOpen, setModalOpen] = reactExports.useState(false);
  const [editing, setEditing] = reactExports.useState(null);
  const [label, setLabel] = reactExports.useState("Alarm");
  const [hour, setHour] = reactExports.useState(8);
  const [minute, setMinute] = reactExports.useState(0);
  const [isPM, setIsPM] = reactExports.useState(false);
  const [days, setDays] = reactExports.useState(Array(7).fill(false));
  const [sound, setSound] = reactExports.useState("Chime");
  const [snooze, setSnooze] = reactExports.useState(5);
  const [repeat, setRepeat] = reactExports.useState(false);
  const [, tick] = reactExports.useState(0);
  reactExports.useEffect(() => {
    localStorage.setItem(STORAGE_ALARMS, JSON.stringify(alarms));
  }, [alarms]);
  reactExports.useEffect(() => {
    const id = setInterval(() => tick((t) => t + 1), 6e4);
    return () => clearInterval(id);
  }, []);
  reactExports.useEffect(() => {
    const check = () => {
      const now = /* @__PURE__ */ new Date();
      const ch = now.getHours(), cm = now.getMinutes(), cs = now.getSeconds();
      if (cs !== 0) return;
      alarms.forEach((a) => {
        if (!a.active) return;
        const ah = a.isPM ? a.hour === 12 ? 12 : a.hour + 12 : a.hour === 12 ? 0 : a.hour;
        if (ah === ch && a.minute === cm) {
          playAlarmRing();
          if ("Notification" in window && Notification.permission === "granted") {
            new Notification(`🔔 ${a.label || "Alarm"}!`);
          }
        }
      });
    };
    const id = setInterval(check, 1e3);
    return () => clearInterval(id);
  }, [alarms]);
  const openAdd = () => {
    setEditing(null);
    setLabel("Alarm");
    setHour(8);
    setMinute(0);
    setIsPM(false);
    setDays(Array(7).fill(false));
    setSound("Chime");
    setSnooze(5);
    setRepeat(false);
    setModalOpen(true);
  };
  const openEdit = (a) => {
    setEditing(a);
    setLabel(a.label);
    setHour(a.hour);
    setMinute(a.minute);
    setIsPM(a.isPM);
    setDays([...a.days]);
    setSound(a.sound);
    setSnooze(a.snooze);
    setRepeat(a.days.some(Boolean));
    setModalOpen(true);
  };
  const save = () => {
    const alarm = {
      id: editing?.id || Date.now().toString(),
      label,
      hour,
      minute,
      isPM,
      days: repeat ? days : Array(7).fill(false),
      sound,
      snooze,
      active: editing?.active ?? true
    };
    if (editing) setAlarms((prev) => prev.map((a) => a.id === editing.id ? alarm : a));
    else setAlarms((prev) => [...prev, alarm]);
    setModalOpen(false);
  };
  const toggleActive = (id) => setAlarms((prev) => prev.map((a) => a.id === id ? { ...a, active: !a.active } : a));
  const del = (id) => setAlarms((prev) => prev.filter((a) => a.id !== id));
  const tc = isDark ? "text-white" : "text-gray-900";
  const mc = isDark ? "text-gray-400" : "text-gray-500";
  const cardBg = isDark ? "bg-muted/20" : "bg-gray-50";
  const modalBg = isDark ? "bg-card border-white/10" : "bg-white border-gray-200";
  const addBg = isDark ? "bg-white/5 hover:bg-white/10 border-white/10" : "bg-gray-50 hover:bg-gray-100 border-gray-200";
  const selBg = isDark ? "bg-white/5 text-white" : "bg-white text-gray-900";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4 mb-2", children: [
      alarms.map((a) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `${cardBg} rounded-xl p-4 border border-border/30 space-y-2`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: `text-2xl font-bold tabular-nums transition-colors ${a.active ? tc : mc}`, children: [
              String(a.hour).padStart(2, "0"),
              ":",
              String(a.minute).padStart(2, "0"),
              " ",
              a.isPM ? "PM" : "AM"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: `text-xs ${mc}`, children: [
              timeUntil(a.hour, a.minute, a.isPM),
              " · ",
              a.label
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 shrink-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: () => toggleActive(a.id),
                className: `w-11 h-6 rounded-full transition-colors relative shrink-0 ${a.active ? "bg-blue-600" : isDark ? "bg-white/20" : "bg-gray-300"}`,
                children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `absolute top-1 w-4 h-4 rounded-full bg-white shadow transition-all duration-200 ${a.active ? "left-6" : "left-1"}` })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => openEdit(a), className: `${mc} hover:text-primary p-1`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronUp, { className: "h-3.5 w-3.5" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => del(a.id), className: `${mc} hover:text-destructive p-1`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-3.5 w-3.5" }) })
          ] })
        ] }),
        a.days.some(Boolean) && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1", children: a.days.map((on, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `w-6 h-6 rounded-full text-[10px] flex items-center justify-center font-medium transition-colors
                    ${on ? "bg-blue-600 text-white" : isDark ? "bg-white/10 text-gray-500" : "bg-gray-200 text-gray-400"}`, children: DAY_NAMES[i] }, i)) })
      ] }, a.id)),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          onClick: openAdd,
          className: `${addBg} border-2 border-dashed rounded-xl flex flex-col items-center justify-center gap-2 min-h-24 transition-colors`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: `h-6 w-6 ${mc}` }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-sm ${mc}`, children: "Add Alarm" })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: modalOpen && /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        className: "fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4",
        onClick: (e) => e.target === e.currentTarget && setModalOpen(false),
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { scale: 0.9, opacity: 0 },
            animate: { scale: 1, opacity: 1 },
            exit: { scale: 0.9, opacity: 0 },
            className: `${modalBg} border rounded-2xl p-6 w-full max-w-sm space-y-4`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: `text-lg font-bold ${tc}`, children: editing ? "Edit Alarm" : "New Alarm" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setModalOpen(false), className: mc, children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-5 w-5" }) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: label, onChange: (e) => setLabel(e.target.value), placeholder: "Alarm label" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center gap-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setHour((h) => h === 12 ? 1 : h + 1), className: `${mc} hover:text-primary p-1`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronUp, { className: "h-4 w-4" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    SpinInput,
                    {
                      value: hour,
                      min: 1,
                      max: 12,
                      wrap: true,
                      onChange: setHour,
                      className: `text-4xl font-mono font-bold bg-transparent border-none outline-none text-center tabular-nums w-14 ${tc}`
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setHour((h) => h === 1 ? 12 : h - 1), className: `${mc} hover:text-primary p-1`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "h-4 w-4" }) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-3xl font-bold ${tc} mb-1`, children: ":" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center gap-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setMinute((m) => (m + 1) % 60), className: `${mc} hover:text-primary p-1`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronUp, { className: "h-4 w-4" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    SpinInput,
                    {
                      value: minute,
                      min: 0,
                      max: 59,
                      wrap: true,
                      onChange: setMinute,
                      className: `text-4xl font-mono font-bold bg-transparent border-none outline-none text-center tabular-nums w-14 ${tc}`
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setMinute((m) => (m - 1 + 60) % 60), className: `${mc} hover:text-primary p-1`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "h-4 w-4" }) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1.5 ml-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setIsPM(false), className: `px-3 py-1.5 rounded-lg text-sm font-semibold transition-colors ${!isPM ? "bg-blue-600 text-white" : `border border-border ${mc}`}`, children: "AM" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setIsPM(true), className: `px-3 py-1.5 rounded-lg text-sm font-semibold transition-colors ${isPM ? "bg-blue-600 text-white" : `border border-border ${mc}`}`, children: "PM" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-center gap-2 mb-2 cursor-pointer", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "checkbox", checked: repeat, onChange: (e) => setRepeat(e.target.checked), className: "rounded accent-blue-600" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-sm font-medium ${tc}`, children: "Repeat" })
                ] }),
                repeat && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1.5", children: DAY_NAMES.map((d, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    onClick: () => setDays((prev) => {
                      const n = [...prev];
                      n[i] = !n[i];
                      return n;
                    }),
                    className: `w-9 h-9 rounded-full text-xs font-semibold transition-colors
                          ${days[i] ? "bg-blue-600 text-white" : `border border-border ${mc} hover:border-blue-400`}`,
                    children: d
                  },
                  i
                )) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: `text-xs font-medium ${mc} mb-1 block`, children: "Sound" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "select",
                    {
                      value: sound,
                      onChange: (e) => setSound(e.target.value),
                      className: `w-full text-sm rounded-lg border border-border px-3 py-2 outline-none ${selBg}`,
                      children: SOUNDS.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: s, children: s }, s))
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: `text-xs font-medium ${mc} mb-1 block`, children: "Snooze" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "select",
                    {
                      value: snooze,
                      onChange: (e) => setSnooze(Number(e.target.value)),
                      className: `w-full text-sm rounded-lg border border-border px-3 py-2 outline-none ${selBg}`,
                      children: [5, 10, 20].map((n) => /* @__PURE__ */ jsxRuntimeExports.jsxs("option", { value: n, children: [
                        n,
                        " min"
                      ] }, n))
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 pt-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", className: "flex-1", onClick: () => setModalOpen(false), children: "Cancel" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { className: "flex-1", onClick: save, children: "Save Alarm" })
              ] })
            ]
          }
        )
      }
    ) })
  ] });
}
function GardenSection({ isDark }) {
  const [plants, setPlants] = reactExports.useState([]);
  reactExports.useEffect(() => {
    const raw = localStorage.getItem("jee_tm_garden");
    if (raw) setPlants(JSON.parse(raw));
  }, []);
  const tc = isDark ? "text-white" : "text-gray-900";
  const mc = isDark ? "text-gray-400" : "text-gray-500";
  const cardBg = isDark ? "bg-muted/20" : "bg-gray-50";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: `text-xl font-bold ${tc} flex items-center justify-center gap-2`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Sprout, { className: "h-5 w-5 text-green-500" }),
        " Focus Garden"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `text-sm ${mc}`, children: "Grow a plant for every 25+ min timer completed!" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-4 justify-center max-h-80 overflow-y-auto p-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: plants.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `text-sm ${mc} py-8`, children: "No plants yet. Start a 25-minute timer to grow your first plant!" }) : plants.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { scale: 0, opacity: 0 },
        animate: { scale: 1, opacity: 1 },
        transition: { type: "spring", delay: Math.min(i * 0.05, 1) },
        className: `w-24 h-24 ${cardBg} border border-border/40 rounded-2xl flex flex-col items-center justify-center p-2 relative overflow-hidden group shadow-sm`,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              whileHover: { scale: 1.1, rotate: [0, -5, 5, 0] },
              className: "text-4xl drop-shadow-lg",
              children: p.type || ["🌲", "🌳", "🌵", "🪴", "🌴", "🌻"][p.id % 6]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-white font-bold truncate w-full text-center px-1", children: p.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[8px] text-white/70", children: new Date(p.date).toLocaleDateString() })
          ] })
        ]
      },
      p.id
    )) }) })
  ] });
}
const TABS = [
  { key: "timers", label: "Timers", icon: Timer },
  { key: "stopwatch", label: "Stopwatch", icon: Watch },
  { key: "alarms", label: "Alarms", icon: AlarmClock }
];
function TimeManagementWidget() {
  const { theme } = useAppContext();
  const isDark = theme === "dark";
  const [tab, setTab] = reactExports.useState("timers");
  reactExports.useEffect(() => {
    if ("Notification" in window && Notification.permission === "default") {
      Notification.requestPermission();
    }
  }, []);
  const tc = isDark ? "text-white" : "text-gray-900";
  const mc = isDark ? "text-gray-400" : "text-gray-500";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `border border-border rounded-2xl p-6 bg-card`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-9 w-9 rounded-lg bg-blue-500/15 flex items-center justify-center border border-blue-500/25 shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-5 w-5 text-blue-400" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: `text-lg font-bold ${tc} flex-1`, children: "Time Management" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(VolumeControl, { isDark })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `flex border-b border-border mb-6 gap-1`, children: TABS.map(({ key, label, icon: Icon }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        onClick: () => setTab(key),
        className: `flex items-center gap-2 px-4 py-2.5 text-sm font-medium transition-all border-b-2 -mb-px
              ${tab === key ? "border-blue-500 text-blue-400" : `border-transparent ${mc} hover:text-foreground`}`,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-4 w-4" }),
          label
        ]
      },
      key
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 8 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -8 },
        transition: { duration: 0.15 },
        children: [
          tab === "timers" && /* @__PURE__ */ jsxRuntimeExports.jsx(TimersSection, { isDark }),
          tab === "stopwatch" && /* @__PURE__ */ jsxRuntimeExports.jsx(StopwatchSection, { isDark }),
          tab === "alarms" && /* @__PURE__ */ jsxRuntimeExports.jsx(AlarmsSection, { isDark })
        ]
      },
      tab
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 pt-6 border-t border-border/60", children: /* @__PURE__ */ jsxRuntimeExports.jsx(GardenSection, { isDark }) })
  ] });
}
function ResizableSection({
  storageKey,
  defaultHeight,
  defaultWidth,
  minHeight = 80,
  minWidth = 120,
  children,
  className = "",
  noOverflow = false
}) {
  const [height, setHeight] = reactExports.useState(() => {
    try {
      const saved = localStorage.getItem(`jee_resize_h_${storageKey}`);
      if (saved) return Math.max(minHeight, parseInt(saved, 10));
    } catch {
    }
    return "auto";
  });
  const [width, setWidth] = reactExports.useState(() => {
    if (!defaultWidth) return void 0;
    try {
      const saved = localStorage.getItem(`jee_resize_w_${storageKey}`);
      if (saved) return Math.max(minWidth, parseInt(saved, 10));
    } catch {
    }
    return void 0;
  });
  const [activeEdge, setActiveEdge] = reactExports.useState(null);
  const startPosRef = reactExports.useRef(0);
  const startSizeRef = reactExports.useRef(0);
  const containerRef = reactExports.useRef(null);
  const startResize = reactExports.useCallback(
    (edge, e) => {
      e.preventDefault();
      setActiveEdge(edge);
      if (edge === "top" || edge === "bottom") {
        startPosRef.current = e.clientY;
        const currentH = height === "auto" ? containerRef.current?.getBoundingClientRect().height ?? (defaultHeight ?? 200) : height;
        startSizeRef.current = currentH;
        setHeight(currentH);
      } else {
        startPosRef.current = e.clientX;
        startSizeRef.current = width ?? defaultWidth ?? 200;
      }
    },
    [height, width, defaultHeight, defaultWidth]
  );
  reactExports.useEffect(() => {
    if (!activeEdge) return;
    const onMove = (e) => {
      if (activeEdge === "bottom") {
        const delta = e.clientY - startPosRef.current;
        setHeight(Math.max(minHeight, startSizeRef.current + delta));
      } else if (activeEdge === "top") {
        const delta = startPosRef.current - e.clientY;
        setHeight(Math.max(minHeight, startSizeRef.current + delta));
      } else if (activeEdge === "right") {
        const delta = e.clientX - startPosRef.current;
        setWidth(Math.max(minWidth, startSizeRef.current + delta));
      } else if (activeEdge === "left") {
        const delta = startPosRef.current - e.clientX;
        setWidth(Math.max(minWidth, startSizeRef.current + delta));
      }
    };
    const onUp = () => {
      setActiveEdge(null);
      setHeight((h) => {
        if (h !== "auto") {
          try {
            localStorage.setItem(`jee_resize_h_${storageKey}`, String(h));
          } catch {
          }
        }
        return h;
      });
      if (defaultWidth) {
        setWidth((w) => {
          if (w !== void 0) {
            try {
              localStorage.setItem(`jee_resize_w_${storageKey}`, String(w));
            } catch {
            }
          }
          return w;
        });
      }
    };
    const cursors = {
      top: "ns-resize",
      bottom: "ns-resize",
      left: "ew-resize",
      right: "ew-resize"
    };
    document.body.style.cursor = cursors[activeEdge] || "";
    document.body.style.userSelect = "none";
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
      document.body.style.cursor = "";
      document.body.style.userSelect = "";
    };
  }, [activeEdge, storageKey, minHeight, minWidth, defaultWidth]);
  const handleBase = "absolute z-10 select-none";
  const hEdge = `${handleBase} left-2 right-2 h-3 cursor-ns-resize`;
  const vEdge = `${handleBase} top-2 bottom-2 w-3 cursor-ew-resize`;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      ref: containerRef,
      className: `relative flex flex-col ${className}`,
      style: {
        height: height === "auto" ? void 0 : height,
        ...width !== void 0 ? { width, flexShrink: 0 } : {}
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: `flex-1 min-h-0 ${noOverflow ? "overflow-hidden" : "overflow-y-auto"}`,
            style: {},
            children
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `${hEdge} top-0`, onMouseDown: (e) => startResize("top", e) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `${hEdge} bottom-0`, onMouseDown: (e) => startResize("bottom", e) }),
        defaultWidth !== void 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `${vEdge} left-0`, onMouseDown: (e) => startResize("left", e) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `${vEdge} right-0`, onMouseDown: (e) => startResize("right", e) })
        ] })
      ]
    }
  );
}
function TodoTrackerCard() {
  const { totalCompleted, totalTasks, pct } = useTodoStats();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-4 bg-card border-border flex items-center gap-4 h-full", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-12 w-12 rounded-full bg-green-500/15 flex items-center justify-center border border-green-500/25 flex-shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ListChecks, { className: "h-6 w-6 text-green-500" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "ToDo Tracker" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-baseline gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-2xl font-bold text-foreground tabular-nums", children: [
          totalCompleted,
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm text-muted-foreground font-normal", children: [
            "/",
            totalTasks
          ] })
        ] }),
        totalTasks > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "span",
          {
            className: `text-sm font-semibold tabular-nums ${pct >= 80 ? "text-green-500" : pct >= 50 ? "text-amber-500" : "text-muted-foreground"}`,
            children: [
              pct,
              "%"
            ]
          }
        )
      ] }),
      totalTasks === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "No todos yet" })
    ] })
  ] });
}
function LockdownOverlay({ children }) {
  const { isActive } = useLockdown();
  if (!isActive) return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-full w-full rounded-2xl overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "blur-md opacity-30 pointer-events-none h-full select-none transition-all", children }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 flex items-center justify-center z-10 pointer-events-none", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-background/90 px-4 py-2 rounded-xl border border-red-500/50 flex items-center gap-2 text-red-500 font-bold shadow-xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "h-5 w-5" }),
      " Locked"
    ] }) })
  ] });
}
const FlipUnit = ({ value, label }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center mx-2", children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: "relative w-16 h-20 bg-muted rounded-lg flex items-center justify-center text-3xl font-bold text-foreground shadow-sm overflow-hidden border border-border",
      style: { perspective: "400px" },
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "popLayout", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { y: "60%", opacity: 0, rotateX: -90 },
          animate: { y: 0, opacity: 1, rotateX: 0 },
          exit: { y: "-60%", opacity: 0, rotateX: 90 },
          transition: { duration: 0.35, ease: [0.4, 0, 0.2, 1] },
          className: "absolute select-none",
          style: { transformOrigin: "center" },
          children: value.toString().padStart(2, "0")
        },
        value
      ) })
    }
  ),
  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground mt-2 font-medium tracking-wider uppercase", children: label })
] });
function CountdownTimer() {
  const { selectedGoal } = useAppContext();
  const getDefaultTargetDate = () => {
    const nextYear = (/* @__PURE__ */ new Date()).getFullYear() + 1;
    const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
    if (!selectedGoal) return "2028-04-06T00:00:00";
    switch (selectedGoal.category) {
      case "NEET":
        return `${nextYear}-05-02T00:00:00`;
      case "UPSC":
        return `${nextYear}-06-05T00:00:00`;
      case "Boards":
      case "School":
        return `${nextYear}-03-01T00:00:00`;
      case "Olympiads":
        return `${nextYear}-11-15T00:00:00`;
      case "Skills":
        return `${currentYear}-12-31T23:59:59`;
      case "JEE":
      default:
        return "2028-04-06T00:00:00";
    }
  };
  const defaultDate = getDefaultTargetDate();
  const [targetDate, setTargetDate] = useLocalStorage("target_date", defaultDate);
  const [isEditing, setIsEditing] = reactExports.useState(false);
  const [editValue, setEditValue] = reactExports.useState(targetDate);
  const [timeLeft, setTimeLeft] = reactExports.useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  reactExports.useEffect(() => {
    setTargetDate(defaultDate);
    setEditValue(defaultDate);
  }, [selectedGoal]);
  reactExports.useEffect(() => {
    const calculateTimeLeft = () => {
      const target = new Date(targetDate).getTime();
      const now = Date.now();
      const difference = target - now;
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1e3 * 60 * 60 * 24)),
          hours: Math.floor(difference / (1e3 * 60 * 60) % 24),
          minutes: Math.floor(difference / 1e3 / 60 % 60),
          seconds: Math.floor(difference / 1e3 % 60)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };
    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1e3);
    return () => clearInterval(timer);
  }, [targetDate]);
  const handleSave = () => {
    setTargetDate(editValue);
    setIsEditing(false);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-6 bg-card/50 backdrop-blur-sm border-border relative overflow-hidden group w-full h-full flex flex-col justify-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center mb-6 relative z-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-sm font-bold text-muted-foreground tracking-widest uppercase", children: selectedGoal ? `${selectedGoal.displayName} Countdown` : "JEE 2028 Countdown" }),
      isEditing ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            type: "datetime-local",
            value: editValue,
            onChange: (e) => setEditValue(e.target.value),
            className: "h-8 text-xs bg-muted border-border",
            "data-testid": "input-target-date"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            size: "icon",
            variant: "ghost",
            className: "h-8 w-8",
            onClick: handleSave,
            "data-testid": "button-save-date",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-4 w-4 text-green-500" })
          }
        )
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          size: "icon",
          variant: "ghost",
          className: "h-8 w-8 opacity-50 hover:opacity-100",
          onClick: () => setIsEditing(true),
          "data-testid": "button-edit-date",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(Pencil, { className: "h-4 w-4" })
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-center relative z-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(FlipUnit, { value: timeLeft.days, label: "Days" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-4xl text-muted-foreground/40 font-light mt-4", children: ":" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FlipUnit, { value: timeLeft.hours, label: "Hours" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-4xl text-muted-foreground/40 font-light mt-4", children: ":" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FlipUnit, { value: timeLeft.minutes, label: "Minutes" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-4xl text-muted-foreground/40 font-light mt-4", children: ":" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FlipUnit, { value: timeLeft.seconds, label: "Seconds" })
    ] })
  ] });
}
function HomePage() {
  const { user } = useAppContext();
  const dateStr = (/* @__PURE__ */ new Date()).toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric"
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: -20 },
      className: "p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto pb-32 space-y-4 sm:space-y-5",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "pt-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-primary font-medium mb-1 text-sm", children: dateStr }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-2xl sm:text-3xl xl:text-4xl font-bold text-foreground tracking-tight leading-tight", children: [
            "Welcome back, ",
            user
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mt-1 text-sm sm:text-base", children: "Stay focused. Every minute counts." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ResizableSection, { storageKey: "countdown", minHeight: 180, noOverflow: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(LockdownOverlay, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CountdownTimer, {}) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4 sm:gap-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ResizableSection, { storageKey: "streak", minHeight: 90, children: /* @__PURE__ */ jsxRuntimeExports.jsx(LockdownOverlay, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(StreakCard, {}) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ResizableSection, { storageKey: "todo-tracker", minHeight: 90, children: /* @__PURE__ */ jsxRuntimeExports.jsx(TodoTrackerCard, {}) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5 items-start", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ResizableSection, { storageKey: "todo-system", minHeight: 200, children: /* @__PURE__ */ jsxRuntimeExports.jsx(TodoSystem, {}) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ResizableSection, { storageKey: "calendar", minHeight: 200, children: /* @__PURE__ */ jsxRuntimeExports.jsx(LockdownOverlay, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarWidget, {}) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ResizableSection, { storageKey: "clock", minHeight: 180, children: /* @__PURE__ */ jsxRuntimeExports.jsx(ClockWidget, {}) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "xl:col-span-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ResizableSection, { storageKey: "time-mgmt", minHeight: 200, children: /* @__PURE__ */ jsxRuntimeExports.jsx(TimeManagementWidget, {}) }) })
        ] })
      ]
    }
  );
}
export {
  HomePage as default
};
