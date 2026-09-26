import { c as createLucideIcon, u as useLocalStorage, j as jsxRuntimeExports, m as motion, B as Button, X, b as cn, T as Tag, g as ChevronLeft, h as ChevronRight, A as AnimatePresence, I as Input, S as Search, e as useTagsContext, f as Check, R as Repeat } from "./index-CSKiqNtJ.js";
import { b as reactExports } from "./vendor-charts-Du7SI2xx.js";
import { P as Plus, a as Pencil } from "./plus-DAVR1Obx.js";
import { T as Trash2 } from "./trash-2-DUaqGf45.js";
import { C as CircleCheck } from "./circle-check-_7gsecGi.js";
import { C as CircleX } from "./circle-x-D9WO7NmT.js";
import "./vendor-firebase-C_hAKoH5.js";
const __iconNode$1 = [
  ["line", { x1: "4", x2: "20", y1: "9", y2: "9", key: "4lhtct" }],
  ["line", { x1: "4", x2: "20", y1: "15", y2: "15", key: "vyu0kd" }],
  ["line", { x1: "10", x2: "8", y1: "3", y2: "21", key: "1ggp8o" }],
  ["line", { x1: "16", x2: "14", y1: "3", y2: "21", key: "weycgp" }]
];
const Hash = createLucideIcon("hash", __iconNode$1);
const __iconNode = [
  [
    "path",
    {
      d: "M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",
      key: "e79jfc"
    }
  ],
  ["circle", { cx: "13.5", cy: "6.5", r: ".5", fill: "currentColor", key: "1okk4w" }],
  ["circle", { cx: "17.5", cy: "10.5", r: ".5", fill: "currentColor", key: "f64h9f" }],
  ["circle", { cx: "6.5", cy: "12.5", r: ".5", fill: "currentColor", key: "qy21gx" }],
  ["circle", { cx: "8.5", cy: "7.5", r: ".5", fill: "currentColor", key: "fotxhn" }]
];
const Palette = createLucideIcon("palette", __iconNode);
const EVENT_COLORS = [
  "#3B82F6",
  "#10B981",
  "#F59E0B",
  "#EF4444",
  "#8B5CF6",
  "#EC4899",
  "#06B6D4",
  "#F97316"
];
const PRESET_COLORS = [
  "#ef4444",
  "#f97316",
  "#f59e0b",
  "#eab308",
  "#22c55e",
  "#10b981",
  "#14b8a6",
  "#3b82f6",
  "#6366f1",
  "#a855f7",
  "#ec4899",
  "#6b7280"
];
const CELL_H = 64;
function pad(n) {
  return n.toString().padStart(2, "0");
}
function fmt(d) {
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}T${pad(d.getHours())}:${pad(d.getMinutes())}`;
}
function EventModal({
  event,
  defaultDate,
  onSave,
  onDelete,
  onClose
}) {
  const d0 = event ? new Date(event.start) : defaultDate || /* @__PURE__ */ new Date();
  const d1 = event ? new Date(event.end) : new Date(d0.getTime() + 60 * 60 * 1e3);
  const [title, setTitle] = reactExports.useState(event?.title || "");
  const [description, setDescription] = reactExports.useState(event?.description || "");
  const [start, setStart] = reactExports.useState(fmt(d0));
  const [end, setEnd] = reactExports.useState(fmt(d1));
  const [color, setColor] = reactExports.useState(event?.color || EVENT_COLORS[0]);
  const [recurrence, setRecurrence] = reactExports.useState(
    event?.recurrence || "none"
  );
  const [tags, setTags] = reactExports.useState(event?.tags || []);
  const { tags: systemTags } = useTagsContext();
  const addTag = (tagId) => {
    if (!tags.includes(tagId)) setTags((p) => [...p, tagId]);
  };
  const handleSave = () => {
    if (!title.trim()) return;
    onSave({
      id: event?.id || Date.now().toString(),
      title: title.trim(),
      description: description.trim() || void 0,
      start: new Date(start).toISOString(),
      end: new Date(end).toISOString(),
      color,
      recurrence,
      tags: tags.length ? tags : void 0
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fixed inset-0 z-50 flex items-center justify-center p-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "absolute inset-0 bg-foreground/20 backdrop-blur-sm",
        onClick: onClose
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, scale: 0.95, y: 10 },
        animate: { opacity: 1, scale: 1, y: 0 },
        exit: { opacity: 0, scale: 0.95, y: 10 },
        className: "relative bg-card border border-border rounded-2xl shadow-xl w-full max-w-md p-5 z-10",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base font-semibold text-foreground", children: event ? "Edit Event" : "New Event" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: onClose,
                className: "text-muted-foreground hover:text-foreground transition-colors",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4" })
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                autoFocus: true,
                placeholder: "Event title",
                value: title,
                onChange: (e) => setTitle(e.target.value),
                onKeyDown: (e) => e.key === "Enter" && handleSave(),
                className: "text-sm font-medium"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mb-1", children: "Start" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    type: "datetime-local",
                    value: start,
                    onChange: (e) => setStart(e.target.value),
                    className: "w-full text-xs px-2 py-1.5 rounded-lg bg-muted border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mb-1", children: "End" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    type: "datetime-local",
                    value: end,
                    onChange: (e) => setEnd(e.target.value),
                    className: "w-full text-xs px-2 py-1.5 rounded-lg bg-muted border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "textarea",
              {
                placeholder: "Description (optional)",
                value: description,
                onChange: (e) => setDescription(e.target.value),
                rows: 2,
                className: "w-full text-xs px-3 py-2 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground resize-none focus:outline-none focus:ring-2 focus:ring-primary/30"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mb-2", children: "Color" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1.5 flex-wrap", children: EVENT_COLORS.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  className: `w-6 h-6 rounded-full transition-all ${color === c ? "ring-2 ring-offset-2 ring-primary scale-110" : "hover:scale-110"}`,
                  style: { backgroundColor: c },
                  onClick: () => setColor(c)
                },
                c
              )) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground mb-2 flex items-center gap-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Palette, { className: "h-3.5 w-3.5" }),
                "Tags"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1 mb-2", children: tags.map((tagId) => {
                const tag = systemTags.find((t) => t.id === tagId);
                return tag ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "span",
                  {
                    className: "flex items-center gap-1 px-2 py-0.5 text-xs rounded-full border transition-colors",
                    style: {
                      backgroundColor: tag.color + "20",
                      borderColor: tag.color + "50",
                      color: tag.color
                    },
                    children: [
                      tag.name,
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "button",
                        {
                          onClick: () => setTags((p) => p.filter((x) => x !== tagId)),
                          className: "hover:opacity-60 transition-opacity",
                          children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-2.5 w-2.5" })
                        }
                      )
                    ]
                  },
                  tagId
                ) : null;
              }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1", children: systemTags.filter((t) => !tags.includes(t.id)).map((tag) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  onClick: () => addTag(tag.id),
                  className: "text-[10px] px-2 py-1 rounded-full border transition-all",
                  style: {
                    backgroundColor: tag.color + "15",
                    borderColor: tag.color + "40",
                    color: tag.color
                  },
                  children: [
                    "+ ",
                    tag.name
                  ]
                },
                tag.id
              )) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Repeat, { className: "h-3.5 w-3.5 text-muted-foreground shrink-0" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "select",
                {
                  value: recurrence,
                  onChange: (e) => setRecurrence(e.target.value),
                  className: "text-xs flex-1 px-2 py-1.5 rounded-lg bg-muted border border-border text-foreground focus:outline-none",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "none", children: "No repeat" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "daily", children: "Daily" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "weekly", children: "Weekly" })
                  ]
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mt-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: event && onDelete && /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                variant: "destructive",
                size: "sm",
                className: "h-8 text-xs",
                onClick: () => {
                  onDelete(event.id);
                  onClose();
                },
                children: "Delete"
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  variant: "outline",
                  size: "sm",
                  className: "h-8 text-xs",
                  onClick: onClose,
                  children: "Cancel"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", className: "h-8 text-xs", onClick: handleSave, children: event ? "Save" : "Create" })
            ] })
          ] })
        ]
      }
    )
  ] });
}
function MiniCalendar({
  currentDate,
  onDateClick
}) {
  const [miniMonth, setMiniMonth] = reactExports.useState(
    new Date(currentDate.getFullYear(), currentDate.getMonth(), 1)
  );
  const firstDay = new Date(miniMonth.getFullYear(), miniMonth.getMonth(), 1);
  const lastDay = new Date(
    miniMonth.getFullYear(),
    miniMonth.getMonth() + 1,
    0
  );
  const startPad = firstDay.getDay();
  const cells = [];
  for (let i = 0; i < startPad; i++) cells.push(null);
  for (let d = 1; d <= lastDay.getDate(); d++)
    cells.push(new Date(miniMonth.getFullYear(), miniMonth.getMonth(), d));
  const today = /* @__PURE__ */ new Date();
  const isToday = (d) => d.toDateString() === today.toDateString();
  const isSel = (d) => d.getDate() === currentDate.getDate() && d.getMonth() === currentDate.getMonth() && d.getFullYear() === currentDate.getFullYear();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-3 py-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold text-foreground", children: miniMonth.toLocaleDateString("en-US", {
        month: "short",
        year: "numeric"
      }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-0.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => setMiniMonth(
              (m) => new Date(m.getFullYear(), m.getMonth() - 1, 1)
            ),
            className: "p-0.5 hover:bg-muted rounded text-muted-foreground hover:text-foreground transition-colors",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "h-3 w-3" })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => setMiniMonth(
              (m) => new Date(m.getFullYear(), m.getMonth() + 1, 1)
            ),
            className: "p-0.5 hover:bg-muted rounded text-muted-foreground hover:text-foreground transition-colors",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "h-3 w-3" })
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-7 gap-y-0.5", children: [
      ["S", "M", "T", "W", "T", "F", "S"].map((d, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "text-center text-[9px] font-medium text-muted-foreground py-0.5",
          children: d
        },
        i
      )),
      cells.map(
        (d, i) => d ? /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => onDateClick(d),
            className: `text-[10px] w-6 h-6 mx-auto rounded-full flex items-center justify-center transition-all font-medium
                ${isSel(d) ? "bg-primary text-primary-foreground" : isToday(d) ? "bg-primary/20 text-primary font-bold" : "text-foreground hover:bg-muted"}`,
            children: d.getDate()
          },
          i
        ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", {}, i)
      )
    ] })
  ] });
}
function MonthView({
  date,
  events,
  onDayClick,
  onEventClick
}) {
  const year = date.getFullYear();
  const month = date.getMonth();
  const firstDay = new Date(year, month, 1);
  const startPad = firstDay.getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const today = /* @__PURE__ */ new Date();
  const cells = [];
  for (let i = startPad - 1; i >= 0; i--) cells.push(new Date(year, month, -i));
  for (let d = 1; d <= daysInMonth; d++) cells.push(new Date(year, month, d));
  while (cells.length % 7 !== 0) {
    const last = cells[cells.length - 1];
    cells.push(
      new Date(last.getFullYear(), last.getMonth(), last.getDate() + 1)
    );
  }
  const isToday = (d) => d.toDateString() === today.toDateString();
  const isCurMonth = (d) => d.getMonth() === month;
  const eventsForDay = (d) => {
    const dS = new Date(d.getFullYear(), d.getMonth(), d.getDate());
    const dE = new Date(d.getFullYear(), d.getMonth(), d.getDate(), 23, 59, 59);
    return events.filter(
      (ev) => new Date(ev.start) <= dE && new Date(ev.end) >= dS
    );
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 overflow-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-7 border-b border-border sticky top-0 bg-background z-10", children: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "py-2 text-center text-xs font-medium text-muted-foreground",
        children: d
      },
      d
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "grid grid-cols-7",
        style: { gridAutoRows: "minmax(100px, 1fr)" },
        children: cells.map((day, i) => {
          const dayEvents = eventsForDay(day);
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: `border-b border-r border-border p-1 cursor-pointer hover:bg-primary/5 transition-colors flex flex-col
                ${!isCurMonth(day) ? "bg-muted/30" : ""}`,
              onClick: () => onDayClick(day),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: `text-xs font-medium w-6 h-6 flex items-center justify-center rounded-full mb-1 shrink-0
                ${isToday(day) ? "bg-primary text-primary-foreground" : isCurMonth(day) ? "text-foreground" : "text-muted-foreground"}`,
                    children: day.getDate()
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 overflow-y-auto space-y-0.5 min-h-0", children: dayEvents.map((ev) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "text-[10px] px-1.5 py-0.5 rounded font-medium truncate cursor-pointer hover:opacity-80 transition-opacity text-white",
                    style: { backgroundColor: ev.color },
                    onClick: (e) => {
                      e.stopPropagation();
                      onEventClick(ev);
                    },
                    children: ev.title
                  },
                  ev.id
                )) })
              ]
            },
            i
          );
        })
      }
    )
  ] });
}
function layoutDayEvents(events, resizingId, ghostEndHour) {
  if (!events.length) return [];
  const items = events.map((ev) => {
    const evStart = new Date(ev.start);
    const evEnd = new Date(ev.end);
    const startH = evStart.getHours() + evStart.getMinutes() / 60;
    const isResizingThis = resizingId === ev.id;
    const rawEndH = isResizingThis ? ghostEndHour : evEnd.getHours() + evEnd.getMinutes() / 60;
    const endH = Math.max(startH + 0.25, rawEndH);
    const top = startH * CELL_H;
    const height = Math.max(CELL_H * 0.35, (endH - startH) * CELL_H);
    return {
      event: ev,
      startH,
      endH,
      top,
      height,
      col: 0,
      totalCols: 1
    };
  });
  items.sort((a, b) => {
    if (Math.abs(a.startH - b.startH) > 1e-3) return a.startH - b.startH;
    return b.endH - b.startH - (a.endH - a.startH);
  });
  const clusters = [];
  let currentCluster = [];
  let clusterEndH = -1;
  for (const item of items) {
    if (currentCluster.length === 0) {
      currentCluster.push(item);
      clusterEndH = item.endH;
    } else {
      if (item.startH < clusterEndH - 1e-3) {
        currentCluster.push(item);
        clusterEndH = Math.max(clusterEndH, item.endH);
      } else {
        clusters.push(currentCluster);
        currentCluster = [item];
        clusterEndH = item.endH;
      }
    }
  }
  if (currentCluster.length > 0) {
    clusters.push(currentCluster);
  }
  for (const cluster of clusters) {
    const colEnds = [];
    for (const item of cluster) {
      let placedCol = -1;
      for (let i = 0; i < colEnds.length; i++) {
        if (colEnds[i] <= item.startH + 1e-3) {
          placedCol = i;
          colEnds[i] = item.endH;
          break;
        }
      }
      if (placedCol === -1) {
        placedCol = colEnds.length;
        colEnds.push(item.endH);
      }
      item.col = placedCol;
    }
    const maxCols = colEnds.length;
    for (const item of cluster) {
      item.totalCols = maxCols;
    }
  }
  return items;
}
function WeekView({
  date,
  events,
  onSlotClick,
  onEventClick,
  onEventUpdate,
  getEventStatus
}) {
  const scrollRef = reactExports.useRef(null);
  const [dragOffsetHour, setDragOffsetHour] = reactExports.useState(0);
  const [draggingId, setDraggingId] = reactExports.useState(null);
  const [resizingId, setResizingId] = reactExports.useState(null);
  const [resizeEndY, setResizeEndY] = reactExports.useState(0);
  const weekStart = new Date(date);
  weekStart.setDate(date.getDate() - date.getDay());
  const days = Array.from({ length: 7 }, (_, i) => {
    const d = new Date(weekStart);
    d.setDate(weekStart.getDate() + i);
    return d;
  });
  const hours = Array.from({ length: 24 }, (_, i) => i);
  const today = /* @__PURE__ */ new Date();
  const nowHour = today.getHours() + today.getMinutes() / 60;
  const isToday = (d) => d.toDateString() === today.toDateString();
  const didScroll = reactExports.useRef(false);
  if (!didScroll.current && scrollRef.current) {
    scrollRef.current.scrollTop = 7 * CELL_H;
    didScroll.current = true;
  }
  const eventsForDay = (d) => {
    const dS = new Date(d.getFullYear(), d.getMonth(), d.getDate());
    const dE = new Date(d.getFullYear(), d.getMonth(), d.getDate(), 23, 59, 59);
    return events.filter(
      (ev) => new Date(ev.start) <= dE && new Date(ev.end) >= dS
    );
  };
  const resizingEvent = resizingId ? events.find((e) => e.id === resizingId) : null;
  const ghostEndHour = resizingEvent ? Math.max(
    new Date(resizingEvent.start).getHours() + new Date(resizingEvent.start).getMinutes() / 60 + 0.25,
    Math.min(24, resizeEndY / CELL_H)
  ) : 0;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 overflow-hidden flex flex-col min-h-0", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex border-b border-border shrink-0 bg-background z-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 shrink-0" }),
      days.map((d, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 py-2 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: d.toLocaleDateString("en-US", { weekday: "short" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: `text-lg font-bold mx-auto w-9 h-9 flex items-center justify-center rounded-full transition-colors
              ${isToday(d) ? "bg-primary text-primary-foreground" : "text-foreground"}`,
            children: d.getDate()
          }
        )
      ] }, i))
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: scrollRef, className: "flex-1 overflow-y-auto overflow-x-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex relative", style: { height: `${24 * CELL_H}px` }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 shrink-0 relative", children: hours.map((h) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "absolute right-2 text-[10px] text-muted-foreground",
          style: { top: h * CELL_H - 7 },
          children: h === 0 ? "" : `${h > 12 ? h - 12 : h}${h >= 12 ? "pm" : "am"}`
        },
        h
      )) }),
      days.map((day, dayIdx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "flex-1 border-l border-border relative h-full",
          children: [
            hours.map((h) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "absolute left-0 right-0 border-b border-border/40 hover:bg-primary/5 cursor-pointer transition-colors",
                style: { top: h * CELL_H, height: CELL_H },
                onDragOver: (e) => {
                  e.preventDefault();
                  e.dataTransfer.dropEffect = "move";
                },
                onDrop: (e) => {
                  e.preventDefault();
                  const eventId = e.dataTransfer.getData("text/plain");
                  const ev = events.find((ev2) => ev2.id === eventId);
                  if (!ev) return;
                  const newStart = new Date(day);
                  const targetHour = Math.max(
                    0,
                    Math.min(23, Math.floor(h - dragOffsetHour))
                  );
                  newStart.setHours(targetHour, 0, 0, 0);
                  const duration = new Date(ev.end).getTime() - new Date(ev.start).getTime();
                  const newEnd = new Date(newStart.getTime() + duration);
                  onEventUpdate({
                    ...ev,
                    start: newStart.toISOString(),
                    end: newEnd.toISOString()
                  });
                  setDraggingId(null);
                },
                onClick: () => {
                  const d = new Date(day);
                  d.setHours(h, 0, 0, 0);
                  onSlotClick(d);
                }
              },
              h
            )),
            layoutDayEvents(eventsForDay(day), resizingId, ghostEndHour).map((layoutItem) => {
              const { event: ev, startH, endH, top, height, col, totalCols } = layoutItem;
              const evStart = new Date(ev.start);
              const evEnd = new Date(ev.end);
              const eventStatus = getEventStatus?.(ev.id);
              const widthPct = 100 / totalCols;
              const leftPct = col * widthPct;
              const leftStyle = totalCols === 1 ? "2px" : `calc(${leftPct}% + 2px)`;
              const widthStyle = totalCols === 1 ? "calc(100% - 4px)" : `calc(${widthPct}% - 4px)`;
              return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  draggable: !resizingId,
                  onDragStart: (e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const offH = (e.clientY - rect.top) / CELL_H;
                    setDragOffsetHour(
                      Math.max(0, Math.min(offH, endH - startH - 0.25))
                    );
                    setDraggingId(ev.id);
                    e.dataTransfer.setData("text/plain", ev.id);
                    e.dataTransfer.effectAllowed = "move";
                  },
                  onDragEnd: () => setDraggingId(null),
                  className: `absolute rounded-lg overflow-hidden group select-none transition-opacity z-10
                      ${draggingId === ev.id ? "opacity-40 cursor-grabbing" : "opacity-100 cursor-grab"}`,
                  style: {
                    top,
                    height,
                    left: leftStyle,
                    width: widthStyle,
                    backgroundColor: ev.color,
                    minHeight: 20
                  },
                  onClick: (e) => {
                    e.stopPropagation();
                    onEventClick(ev);
                  },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-1 h-full flex flex-col overflow-hidden pointer-events-none", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] font-semibold text-white leading-tight truncate", children: ev.title }),
                      height > 38 && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[9px] text-white/80 leading-tight mt-0.5", children: evStart.toLocaleTimeString("en-US", {
                        hour: "numeric",
                        minute: "2-digit"
                      }) }),
                      ev.tags && height > 52 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-0.5 mt-0.5", children: ev.tags.slice(0, 2).map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "span",
                        {
                          className: "text-[8px] bg-white/25 text-white px-1 rounded-full",
                          children: [
                            "#",
                            t
                          ]
                        },
                        t
                      )) })
                    ] }),
                    eventStatus && /* @__PURE__ */ jsxRuntimeExports.jsx(
                      motion.div,
                      {
                        initial: { opacity: 0, scale: 0.8 },
                        animate: { opacity: 1, scale: 1 },
                        className: "absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm rounded-lg",
                        children: eventStatus.status === "done" ? /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-8 w-8 text-green-400" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(CircleX, { className: "h-8 w-8 text-red-400" })
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        className: "absolute bottom-0 left-0 right-0 h-3 opacity-0 group-hover:opacity-100 transition-opacity cursor-s-resize flex items-center justify-center bg-black/20 rounded-b-lg",
                        onPointerDown: (e) => {
                          e.stopPropagation();
                          e.preventDefault();
                          e.currentTarget.setPointerCapture(e.pointerId);
                          setResizingId(ev.id);
                          const endHour = evEnd.getHours() + evEnd.getMinutes() / 60;
                          setResizeEndY(endHour * CELL_H);
                        },
                        onPointerMove: (e) => {
                          if (!scrollRef.current) return;
                          const containerRect = scrollRef.current.getBoundingClientRect();
                          const scrollTop = scrollRef.current.scrollTop;
                          const relY = e.clientY - containerRect.top + scrollTop;
                          setResizeEndY(Math.max(0, relY));
                        },
                        onPointerUp: (e) => {
                          const endH2 = Math.max(
                            startH + 0.25,
                            Math.min(24, resizeEndY / CELL_H)
                          );
                          const newEnd = new Date(evStart);
                          newEnd.setHours(
                            Math.floor(endH2),
                            Math.round(endH2 % 1 * 60),
                            0,
                            0
                          );
                          onEventUpdate({ ...ev, end: newEnd.toISOString() });
                          setResizingId(null);
                          e.currentTarget.releasePointerCapture(e.pointerId);
                        },
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-0.5 bg-white/50 rounded-full" })
                      }
                    )
                  ]
                },
                ev.id
              );
            }),
            isToday(day) && /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "absolute left-0 right-0 z-20 flex items-center pointer-events-none",
                style: { top: nowHour * CELL_H },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-2 h-2 rounded-full bg-red-500 -ml-1 shrink-0" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 h-px bg-red-500" })
                ]
              }
            )
          ]
        },
        dayIdx
      ))
    ] }) })
  ] });
}
function TagEditorSection() {
  const { tags, addTag, updateTag, deleteTag } = useTagsContext();
  const [expanded, setExpanded] = reactExports.useState(true);
  const [newName, setNewName] = reactExports.useState("");
  const [newColor, setNewColor] = reactExports.useState("#3b82f6");
  const [editingId, setEditingId] = reactExports.useState(null);
  const [editName, setEditName] = reactExports.useState("");
  const [editColor, setEditColor] = reactExports.useState("");
  const startAdd = () => {
    if (!newName.trim()) return;
    addTag(newName, newColor);
    setNewName("");
    setNewColor("#3b82f6");
  };
  const startEdit = (id, name, color) => {
    setEditingId(id);
    setEditName(name);
    setEditColor(color);
  };
  const saveEdit = () => {
    if (editName.trim()) updateTag(editingId, editName, editColor);
    setEditingId(null);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-3 pb-3 border-b border-border/50 shrink-0", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        onClick: () => setExpanded(!expanded),
        className: "w-full text-[10px] font-semibold text-muted-foreground uppercase tracking-wider mb-2 flex items-center gap-1 hover:text-foreground transition-colors",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { className: "h-3 w-3" }),
          " Tags (",
          tags.length,
          ")"
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: expanded && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, height: 0 },
        animate: { opacity: 1, height: "auto" },
        exit: { opacity: 0, height: 0 },
        className: "space-y-2 overflow-hidden",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-1.5 mb-2", children: tags.map((tag) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: editingId === tag.id ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 text-[10px]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "w-2 h-5 rounded-full flex-shrink-0",
                style: { backgroundColor: editColor }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                value: editName,
                onChange: (e) => setEditName(e.target.value),
                className: "flex-1 bg-transparent text-foreground outline-none border-b border-primary pb-0",
                autoFocus: true,
                onKeyDown: (e) => {
                  if (e.key === "Enter") saveEdit();
                  if (e.key === "Escape") setEditingId(null);
                }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: saveEdit,
                className: "p-0.5 text-green-400 hover:text-green-300",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-3 w-3" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: () => setEditingId(null),
                className: "p-0.5 text-muted-foreground",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-3 w-3" })
              }
            )
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 text-[10px] p-1.5 rounded border border-border/40 bg-muted/30 hover:bg-muted/60 transition-colors group", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "w-2 h-4 rounded-full flex-shrink-0",
                style: { backgroundColor: tag.color }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex-1 text-foreground font-medium truncate", children: tag.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: () => startEdit(tag.id, tag.name, tag.color),
                className: "p-0.5 text-muted-foreground hover:text-foreground opacity-0 group-hover:opacity-100 transition-all",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Pencil, { className: "h-2.5 w-2.5" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: () => deleteTag(tag.id),
                className: "p-0.5 text-muted-foreground hover:text-destructive opacity-0 group-hover:opacity-100 transition-all",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-2.5 w-2.5" })
              }
            )
          ] }) }, tag.id)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1 text-[10px]", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "w-2 h-7 rounded-full flex-shrink-0",
                  style: { backgroundColor: newColor }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  value: newName,
                  onChange: (e) => setNewName(e.target.value),
                  placeholder: "New tag…",
                  className: "flex-1 bg-muted border border-border rounded px-1.5 py-0.5 text-foreground placeholder:text-muted-foreground outline-none text-[9px]",
                  onKeyDown: (e) => e.key === "Enter" && startAdd()
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: startAdd,
                  disabled: !newName.trim(),
                  className: "p-1 rounded bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-40 text-[10px]",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-3 w-3" })
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-1 px-1", children: [
              PRESET_COLORS.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: () => setNewColor(c),
                  className: `w-4 h-4 rounded-full border-2 transition-all
                      ${newColor === c ? "border-foreground scale-110" : "border-transparent hover:border-muted-foreground"}`,
                  style: { backgroundColor: c }
                },
                c
              )),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-center cursor-pointer", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-4 h-4 rounded-full border-2 border-dashed border-border hover:border-primary/60 flex items-center justify-center flex-shrink-0 transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Hash, { className: "h-1.5 w-1.5 text-muted-foreground" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    type: "color",
                    value: newColor,
                    onChange: (e) => setNewColor(e.target.value),
                    className: "sr-only"
                  }
                )
              ] })
            ] })
          ] })
        ]
      }
    ) })
  ] });
}
function CalendarPage() {
  const [events, setEvents] = useLocalStorage("jee_cal_events", []);
  const [markedEvents] = useLocalStorage("jee_today_marked", []);
  const [currentDate, setCurrentDate] = reactExports.useState(/* @__PURE__ */ new Date());
  const [view, setView] = reactExports.useState("week");
  const [modal, setModal] = reactExports.useState(null);
  const [activeTag, setActiveTag] = reactExports.useState(null);
  const [searchQuery, setSearchQuery] = reactExports.useState("");
  const [showSearch, setShowSearch] = reactExports.useState(false);
  const [showMobileSidebar, setShowMobileSidebar] = reactExports.useState(
    () => typeof window !== "undefined" ? window.innerWidth < 768 : false
  );
  const getTodayStr = () => (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
  const getEventStatus = (eventId) => {
    const today = getTodayStr();
    return markedEvents.find(
      (m) => m.eventId === eventId && new Date(m.timestamp).toISOString().slice(0, 10) === today
    );
  };
  reactExports.useMemo(() => {
    const s = /* @__PURE__ */ new Set();
    events.forEach((e) => e.tags?.forEach((t) => s.add(t)));
    return Array.from(s).sort();
  }, [events]);
  const filteredEvents = reactExports.useMemo(() => {
    return events.filter((ev) => {
      if (activeTag && !(ev.tags || []).includes(activeTag)) return false;
      if (!searchQuery) return true;
      const q = searchQuery.toLowerCase();
      return ev.title.toLowerCase().includes(q) || ev.description?.toLowerCase().includes(q) || new Date(ev.start).toDateString().toLowerCase().includes(q) || new Date(ev.start).toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric"
      }).toLowerCase().includes(q) || (ev.tags || []).some((t) => t.toLowerCase().includes(q));
    });
  }, [events, activeTag, searchQuery]);
  const saveEvent = (ev) => {
    setEvents((prev) => {
      const exists = prev.find((e) => e.id === ev.id);
      return exists ? prev.map((e) => e.id === ev.id ? ev : e) : [...prev, ev];
    });
    setModal(null);
  };
  const deleteEvent = (id) => {
    setEvents((prev) => prev.filter((e) => e.id !== id));
    setModal(null);
  };
  const updateEvent = (ev) => {
    setEvents((prev) => prev.map((e) => e.id === ev.id ? ev : e));
  };
  const navigate = (dir) => {
    setCurrentDate((d) => {
      const n = new Date(d);
      if (view === "month") n.setMonth(d.getMonth() + dir);
      else n.setDate(d.getDate() + dir * 7);
      return n;
    });
  };
  const headerTitle = view === "month" ? currentDate.toLocaleDateString("en-US", {
    month: "long",
    year: "numeric"
  }) : (() => {
    const ws = new Date(currentDate);
    ws.setDate(currentDate.getDate() - currentDate.getDay());
    const we = new Date(ws);
    we.setDate(ws.getDate() + 6);
    return `${ws.toLocaleDateString("en-US", { month: "short", day: "numeric" })} – ${we.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}`;
  })();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 10 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: -10 },
      className: "flex h-full overflow-hidden bg-background",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: cn(
              "w-full md:w-52 shrink-0 border-r border-border flex-col bg-sidebar overflow-y-auto",
              showMobileSidebar ? "flex fixed inset-0 z-[200] bg-background/95 backdrop-blur-xl md:relative md:z-auto md:bg-sidebar" : "hidden md:flex"
            ),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 shrink-0 flex items-center justify-between md:block", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Button,
                  {
                    className: "flex-1 md:w-full gap-2 text-sm mr-2 md:mr-0",
                    onClick: () => setModal({ defaultDate: currentDate }),
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-4 w-4" }),
                      " New Event"
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    onClick: () => setShowMobileSidebar(false),
                    className: "md:hidden h-9 w-9 rounded-md bg-muted text-muted-foreground flex items-center justify-center border border-border",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-5 w-5" })
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                MiniCalendar,
                {
                  currentDate,
                  onDateClick: (d) => {
                    setCurrentDate(d);
                    setView("week");
                    setShowMobileSidebar(false);
                  }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TagEditorSection, {})
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 flex flex-col overflow-hidden min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:hidden flex items-center px-3 py-2 bg-card border-b border-border shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: () => setShowMobileSidebar(true),
              className: "flex items-center gap-1.5 text-xs font-semibold text-foreground",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { className: "h-4 w-4 text-primary" }),
                " Open Menu"
              ]
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 px-4 py-2 border-b border-border shrink-0 bg-background", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                variant: "outline",
                size: "sm",
                className: "h-8 text-xs font-medium px-3 shrink-0",
                onClick: () => setCurrentDate(/* @__PURE__ */ new Date()),
                children: "Today"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-0.5 shrink-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  variant: "ghost",
                  size: "icon",
                  className: "h-8 w-8",
                  onClick: () => navigate(-1),
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "h-4 w-4" })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  variant: "ghost",
                  size: "icon",
                  className: "h-8 w-8",
                  onClick: () => navigate(1),
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "h-4 w-4" })
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-sm font-semibold text-foreground flex-1 truncate", children: headerTitle }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 shrink-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: showSearch && /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.div,
                {
                  initial: { width: 0, opacity: 0 },
                  animate: { width: 180, opacity: 1 },
                  exit: { width: 0, opacity: 0 },
                  className: "overflow-hidden",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      autoFocus: true,
                      placeholder: "Search events, tags…",
                      value: searchQuery,
                      onChange: (e) => setSearchQuery(e.target.value),
                      className: "h-8 text-xs w-full bg-primary/15 border-primary/30 text-foreground placeholder:text-foreground/50",
                      onKeyDown: (e) => e.key === "Escape" && (setShowSearch(false), setSearchQuery(""))
                    }
                  )
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  variant: showSearch || searchQuery ? "default" : "ghost",
                  size: "icon",
                  className: "h-8 w-8 shrink-0",
                  onClick: () => {
                    setShowSearch((p) => !p);
                    if (showSearch) setSearchQuery("");
                  },
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "h-4 w-4" })
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex bg-muted rounded-lg p-0.5 gap-0.5 shrink-0", children: ["month", "week"].map((v) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                variant: view === v ? "default" : "ghost",
                size: "sm",
                className: `h-7 px-3 text-xs capitalize transition-all ${view === v ? "" : "hover:bg-transparent text-muted-foreground"}`,
                onClick: () => setView(v),
                children: v
              },
              v
            )) })
          ] }),
          (activeTag || searchQuery) && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 px-4 py-1.5 border-b border-border bg-primary/5 shrink-0", children: [
            activeTag && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1 text-xs bg-primary/15 text-primary border border-primary/20 px-2 py-0.5 rounded-full", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { className: "h-3 w-3" }),
              "#",
              activeTag,
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: () => setActiveTag(null),
                  className: "hover:text-destructive ml-0.5",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-2.5 w-2.5" })
                }
              )
            ] }),
            searchQuery && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1 text-xs bg-muted text-muted-foreground px-2 py-0.5 rounded-full", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "h-3 w-3" }),
              '"',
              searchQuery,
              '"',
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: () => setSearchQuery(""),
                  className: "hover:text-destructive ml-0.5",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-2.5 w-2.5" })
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground ml-auto", children: [
              filteredEvents.length,
              " event",
              filteredEvents.length !== 1 ? "s" : ""
            ] })
          ] }),
          view === "month" ? /* @__PURE__ */ jsxRuntimeExports.jsx(
            MonthView,
            {
              date: currentDate,
              events: filteredEvents,
              onDayClick: (d) => setModal({ defaultDate: d }),
              onEventClick: (ev) => setModal({ event: ev })
            }
          ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
            WeekView,
            {
              date: currentDate,
              events: filteredEvents,
              onSlotClick: (d) => setModal({ defaultDate: d }),
              onEventClick: (ev) => setModal({ event: ev }),
              onEventUpdate: updateEvent,
              getEventStatus
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: modal && /* @__PURE__ */ jsxRuntimeExports.jsx(
          EventModal,
          {
            event: modal.event,
            defaultDate: modal.defaultDate,
            onSave: saveEvent,
            onDelete: deleteEvent,
            onClose: () => setModal(null)
          }
        ) })
      ]
    }
  );
}
export {
  CalendarPage as default
};
