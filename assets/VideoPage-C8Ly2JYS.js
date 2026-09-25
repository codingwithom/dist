import { c as createLucideIcon, a7 as useVideoContext, w as useWorkspaceContext, u as useLocalStorage, i as useAppContext, a8 as loadYouTubeApi, j as jsxRuntimeExports, X, p as ChevronDown, h as ChevronRight, b as cn, m as motion, x as FolderPlus, B as Button, y as ArrowLeft, A as AnimatePresence, a9 as SkipBack, P as Pause, o as Play, aa as SkipForward, R as Repeat, S as Search, ab as VolumeX, ac as Volume1, V as Volume2, M as Music, g as ChevronLeft, v as LoaderCircle, f as Check } from "./index-BCslxdZG.js";
import { b as reactExports } from "./vendor-charts-Du7SI2xx.js";
import { Y as Youtube, f as fetchPlaylistClientSide, a as fetchVideoMetadataClientSide, s as searchYouTubeVideos } from "./search-Bp3zyD_E.js";
import { L as LayoutGrid, a as ListTree, F as Folder } from "./list-tree-67spCCB_.js";
import { P as Plus, a as Pencil } from "./plus-BVIy5UOh.js";
import { F as FilePlay } from "./file-play-D3w-9YAj.js";
import { F as FilePlus } from "./file-plus-yNqu6TK1.js";
import { T as Trash2 } from "./trash-2-Cd34uOWV.js";
import { G as Globe } from "./globe-CyUycPaX.js";
import { S as Settings, M as Mic } from "./settings-BsNJgCRa.js";
import { C as Clock } from "./clock-Ckh6GfAU.js";
import { F as FolderOpen } from "./folder-open-BoM27UJH.js";
import { E as EllipsisVertical } from "./ellipsis-vertical-X736QESM.js";
import { R as ReorderGroup, a as ReorderItem } from "./Item-BJOpLMlD.js";
import "./vendor-firebase-C_hAKoH5.js";
const __iconNode$6 = [
  [
    "path",
    {
      d: "M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z",
      key: "18u6gg"
    }
  ],
  ["circle", { cx: "12", cy: "13", r: "3", key: "1vg3eu" }]
];
const Camera = createLucideIcon("camera", __iconNode$6);
const __iconNode$5 = [
  ["rect", { width: "18", height: "14", x: "3", y: "5", rx: "2", ry: "2", key: "12ruh7" }],
  ["path", { d: "M7 15h4M15 15h2M7 11h2M13 11h4", key: "1ueiar" }]
];
const Captions = createLucideIcon("captions", __iconNode$5);
const __iconNode$4 = [
  ["path", { d: "m12 14 4-4", key: "9kzdfg" }],
  ["path", { d: "M3.34 19a10 10 0 1 1 17.32 0", key: "19p75a" }]
];
const Gauge = createLucideIcon("gauge", __iconNode$4);
const __iconNode$3 = [
  ["path", { d: "M8 3H5a2 2 0 0 0-2 2v3", key: "1dcmit" }],
  ["path", { d: "M21 8V5a2 2 0 0 0-2-2h-3", key: "1e4gt3" }],
  ["path", { d: "M3 16v3a2 2 0 0 0 2 2h3", key: "wsl5sc" }],
  ["path", { d: "M16 21h3a2 2 0 0 0 2-2v-3", key: "18trek" }]
];
const Maximize = createLucideIcon("maximize", __iconNode$3);
const __iconNode$2 = [
  ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
  ["path", { d: "m21 3-7 7", key: "1l2asr" }],
  ["path", { d: "m3 21 7-7", key: "tjx5ai" }],
  ["path", { d: "M9 21H3v-6", key: "wtvkvv" }]
];
const Maximize2 = createLucideIcon("maximize-2", __iconNode$2);
const __iconNode$1 = [
  ["path", { d: "m14 10 7-7", key: "oa77jy" }],
  ["path", { d: "M20 10h-6V4", key: "mjg0md" }],
  ["path", { d: "m3 21 7-7", key: "tjx5ai" }],
  ["path", { d: "M4 14h6v6", key: "rmj7iw" }]
];
const Minimize2 = createLucideIcon("minimize-2", __iconNode$1);
const __iconNode = [
  ["path", { d: "M16 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8Z", key: "qazsjp" }],
  ["path", { d: "M15 3v4a2 2 0 0 0 2 2h4", key: "40519r" }]
];
const StickyNote = createLucideIcon("sticky-note", __iconNode);
try {
  if (typeof window !== "undefined" && typeof document !== "undefined") {
    Object.defineProperty(document, "hidden", { get: () => false });
    Object.defineProperty(document, "visibilityState", {
      get: () => "visible"
    });
    window.addEventListener(
      "visibilitychange",
      (e) => e.stopImmediatePropagation(),
      true
    );
  }
} catch (e) {
}
const SECTION_COLORS = [
  "#6B7280",
  "#3B82F6",
  "#22C55E",
  "#EF4444",
  "#F59E0B",
  "#8B5CF6",
  "#EC4899",
  "#06B6D4"
];
function getYouTubeId(url) {
  const patterns = [
    /[?&]v=([^&#]+)/,
    /youtu\.be\/([^?#]+)/,
    /youtube\.com\/embed\/([^?#]+)/,
    /youtube\.com\/shorts\/([^?#]+)/
  ];
  for (const p of patterns) {
    const m = url.match(p);
    if (m) return m[1];
  }
  return null;
}
function getSourceLabel(videoType, src) {
  if (!videoType || !src) return "";
  if (videoType === "youtube") return "YouTube";
  if (src.startsWith("blob:")) return "Local File";
  try {
    return new URL(src).hostname || "Online";
  } catch {
    return "Online";
  }
}
function formatTime(s) {
  if (!isFinite(s) || s < 0) return "0:00";
  const h = Math.floor(s / 3600), m = Math.floor(s % 3600 / 60), sec = Math.floor(s % 60);
  if (h > 0)
    return `${h}:${String(m).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;
  return `${m}:${String(sec).padStart(2, "0")}`;
}
function uuid() {
  if (typeof crypto !== "undefined" && crypto.randomUUID)
    return crypto.randomUUID();
  return Date.now().toString(36) + Math.random().toString(36).slice(2);
}
function ThreeDotMenu({ children }) {
  const [open, setOpen] = reactExports.useState(false);
  const ref = reactExports.useRef(null);
  reactExports.useEffect(() => {
    const handleClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    if (open) document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex items-center shrink-0", ref, onClick: (e) => e.stopPropagation(), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setOpen(!open), className: "p-1 text-muted-foreground hover:text-foreground outline-none transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(EllipsisVertical, { className: "h-3.5 w-3.5" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: open && /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: { opacity: 0, scale: 0.95, y: -5 }, animate: { opacity: 1, scale: 1, y: 0 }, exit: { opacity: 0, scale: 0.95, y: -5 }, transition: { duration: 0.1 }, className: "absolute left-0 top-full mt-1 w-44 bg-card border border-border rounded-md shadow-xl z-[300] py-1 flex flex-col", children }) })
  ] });
}
function MenuItem({ icon: Icon, label, onClick, shortcut, destructive }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: (e) => {
    onClick(e);
  }, className: `w-full flex items-center justify-between px-3 py-1.5 text-xs transition-colors hover:bg-muted ${destructive ? "text-destructive hover:text-destructive" : "text-foreground"}`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
      Icon && /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-3.5 w-3.5" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: label })
    ] }),
    shortcut && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-muted-foreground tracking-widest", children: shortcut })
  ] });
}
function DualRangeSlider({ duration, currentTime, value, onChange, onSeekPreview }) {
  const trackRef = reactExports.useRef(null);
  const [dragging, setDragging] = reactExports.useState(null);
  const handlePointerDown = (e, thumb) => {
    e.stopPropagation();
    e.currentTarget.setPointerCapture(e.pointerId);
    setDragging(thumb);
  };
  const handlePointerMove = (e) => {
    if (!dragging || !trackRef.current) return;
    const rect = trackRef.current.getBoundingClientRect();
    const pct = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    const t = pct * duration;
    if (dragging === "a") {
      const newA = Math.min(t, value[1] - 0.5);
      onChange([newA, value[1]]);
      onSeekPreview?.(newA);
    } else {
      const newB = Math.max(t, value[0] + 0.5);
      onChange([value[0], newB]);
      onSeekPreview?.(Math.max(value[0], newB - 1));
    }
  };
  const handlePointerUp = (e) => {
    if (dragging) {
      e.currentTarget.releasePointerCapture(e.pointerId);
      setDragging(null);
    }
  };
  const pctA = duration > 0 ? value[0] / duration * 100 : 0;
  const pctB = duration > 0 ? value[1] / duration * 100 : 100;
  const pctC = duration > 0 ? currentTime / duration * 100 : 0;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ref: trackRef, className: "relative h-1.5 bg-muted/60 rounded-full w-full mx-2 flex-1 touch-none", onPointerMove: handlePointerMove, onPointerUp: handlePointerUp, onPointerCancel: handlePointerUp, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 bottom-0 bg-primary/20 rounded-full pointer-events-none", style: { left: 0, width: `${pctC}%` } }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 bottom-0 bg-primary/40 rounded-full pointer-events-none", style: { left: `${pctA}%`, width: `${pctB - pctA}%` } }),
    pctC > pctA && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 bottom-0 bg-primary rounded-full pointer-events-none", style: { left: `${pctA}%`, width: `${Math.min(pctB - pctA, pctC - pctA)}%` } }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-1/2 -translate-y-1/2 w-3.5 h-3.5 bg-primary border-2 border-white rounded-full shadow cursor-ew-resize hover:scale-125 transition-transform z-10", style: { left: `calc(${pctA}% - 7px)` }, onPointerDown: (e) => handlePointerDown(e, "a") }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-1/2 -translate-y-1/2 w-3.5 h-3.5 bg-primary border-2 border-white rounded-full shadow cursor-ew-resize hover:scale-125 transition-transform z-10", style: { left: `calc(${pctB}% - 7px)` }, onPointerDown: (e) => handlePointerDown(e, "b") })
  ] });
}
function ScreenshotEditor({
  videoRef,
  isYoutube,
  onSave,
  onClose
}) {
  const canvasRef = reactExports.useRef(null);
  const [penColor, setPenColor] = reactExports.useState("#EF4444");
  const [penSize, setPenSize] = reactExports.useState(3);
  const [drawing, setDrawing] = reactExports.useState(false);
  const [captured, setCaptured] = reactExports.useState(false);
  const lastPos = reactExports.useRef(null);
  reactExports.useEffect(() => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (isYoutube) {
      ctx.fillStyle = "#1a1a1a";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#ffffff";
      ctx.font = "14px sans-serif";
      ctx.textAlign = "center";
      ctx.fillText(
        "YouTube screenshots blocked by browser",
        canvas.width / 2,
        canvas.height / 2 - 10
      );
      ctx.fillText(
        "(Cross-origin restriction)",
        canvas.width / 2,
        canvas.height / 2 + 15
      );
      setCaptured(true);
    } else if (videoRef.current) {
      try {
        canvas.width = videoRef.current.videoWidth || 640;
        canvas.height = videoRef.current.videoHeight || 360;
        ctx.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
        ctx.getImageData(0, 0, 1, 1);
        setCaptured(true);
      } catch (err) {
        ctx.fillStyle = "#333";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "#fff";
        ctx.font = "14px sans-serif";
        ctx.textAlign = "center";
        ctx.fillText(
          "Screenshot blocked by browser (CORS)",
          canvas.width / 2,
          canvas.height / 2 - 10
        );
        ctx.fillText(
          "Try downloading the video and using the local file",
          canvas.width / 2,
          canvas.height / 2 + 15
        );
        setCaptured(false);
      }
    }
  }, [isYoutube, videoRef]);
  const getPos = (e) => {
    const rect = canvasRef.current.getBoundingClientRect();
    const scaleX = canvasRef.current.width / rect.width;
    const scaleY = canvasRef.current.height / rect.height;
    return {
      x: (e.clientX - rect.left) * scaleX,
      y: (e.clientY - rect.top) * scaleY
    };
  };
  const onMouseDown = (e) => {
    setDrawing(true);
    lastPos.current = getPos(e);
  };
  const onMouseMove = (e) => {
    if (!drawing || !canvasRef.current || !lastPos.current) return;
    const ctx = canvasRef.current.getContext("2d");
    const pos = getPos(e);
    ctx.strokeStyle = penColor;
    ctx.lineWidth = penSize;
    ctx.lineCap = "round";
    ctx.beginPath();
    ctx.moveTo(lastPos.current.x, lastPos.current.y);
    ctx.lineTo(pos.x, pos.y);
    ctx.stroke();
    lastPos.current = pos;
  };
  const onMouseUp = () => {
    setDrawing(false);
    lastPos.current = null;
  };
  const handleSave = () => {
    if (!canvasRef.current) return;
    try {
      canvasRef.current.toBlob((blob) => {
        if (blob) onSave(blob);
      }, "image/png");
    } catch (err) {
      alert("Cannot save screenshot due to cross-origin restrictions.");
      onClose();
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fixed inset-0 z-[400] flex items-center justify-center p-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "absolute inset-0 bg-black/60 backdrop-blur-sm",
        onClick: onClose
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, scale: 0.95 },
        animate: { opacity: 1, scale: 1 },
        exit: { opacity: 0, scale: 0.95 },
        className: "relative bg-card border border-border rounded-2xl shadow-2xl z-10 w-full max-w-2xl",
        onClick: (e) => e.stopPropagation(),
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between p-3 border-b border-border", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm font-bold text-foreground flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Camera, { className: "h-4 w-4 text-primary" }),
              "Screenshot Editor"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-1", children: [
                "#EF4444",
                "#3B82F6",
                "#22C55E",
                "#F59E0B",
                "#FFFFFF",
                "#000000"
              ].map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: () => setPenColor(c),
                  className: "w-5 h-5 rounded-full border-2 transition-transform hover:scale-110",
                  style: {
                    backgroundColor: c,
                    borderColor: penColor === c ? "#8B5CF6" : "transparent"
                  }
                },
                c
              )) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "range",
                  min: "1",
                  max: "10",
                  value: penSize,
                  onChange: (e) => setPenSize(+e.target.value),
                  className: "w-16 accent-primary",
                  title: "Pen size"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  size: "sm",
                  onClick: handleSave,
                  className: "h-7 text-xs gap-1.5",
                  disabled: !captured,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-3 w-3" }),
                    "Save to Note"
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: onClose,
                  className: "text-muted-foreground hover:text-foreground",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4" })
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "canvas",
              {
                ref: canvasRef,
                width: 640,
                height: 360,
                className: "w-full rounded-lg border border-border cursor-crosshair",
                style: { touchAction: "none" },
                onMouseDown,
                onMouseMove,
                onMouseUp,
                onMouseLeave: onMouseUp
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground mt-1.5 text-center", children: "Draw on the screenshot, then click Save" })
          ] })
        ]
      }
    )
  ] });
}
function VideoUploadModal({
  onLocal,
  onYoutube,
  onUrl,
  onSearch,
  onClose,
  title = "Add Video"
}) {
  const [tab, setTab] = reactExports.useState(
    "local"
  );
  const [inputUrl, setInputUrl] = reactExports.useState("");
  const [err, setErr] = reactExports.useState("");
  const fileRef = reactExports.useRef(null);
  const handleSubmitUrl = () => {
    if (!inputUrl.trim()) {
      setErr("Please enter a URL.");
      return;
    }
    if (tab === "youtube") {
      const id = getYouTubeId(inputUrl.trim());
      if (!id) {
        setErr("Could not extract YouTube video ID. Check the URL.");
        return;
      }
      onYoutube(inputUrl.trim());
    } else {
      onUrl(inputUrl.trim());
    }
  };
  const tabs = [
    { id: "local", icon: FilePlay, label: "Local" },
    { id: "youtube", icon: Youtube, label: "YT Link" },
    { id: "search", icon: Search, label: "Search" },
    { id: "url", icon: Globe, label: "URL" }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fixed inset-0 z-[200] flex items-center justify-center p-4", children: [
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
        initial: { opacity: 0, scale: 0.95, y: 8 },
        animate: { opacity: 1, scale: 1, y: 0 },
        exit: { opacity: 0, scale: 0.95 },
        className: "relative bg-card border border-border rounded-2xl shadow-2xl w-full max-w-sm p-5 z-10",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-semibold text-foreground", children: title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: onClose,
                className: "text-muted-foreground hover:text-foreground transition-colors",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4" })
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1 mb-4 bg-muted rounded-lg p-1", children: tabs.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: () => {
                setTab(t.id);
                setErr("");
                setInputUrl("");
              },
              className: cn(
                "flex-1 flex items-center justify-center gap-1.5 text-xs py-1.5 rounded-md transition-all font-medium",
                tab === t.id ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"
              ),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(t.icon, { className: "h-3.5 w-3.5" }),
                t.label
              ]
            },
            t.id
          )) }),
          tab === "local" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "border-2 border-dashed border-border rounded-xl p-8 text-center cursor-pointer hover:border-primary/50 hover:bg-primary/5 transition-all",
                onClick: () => fileRef.current?.click(),
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(FilePlay, { className: "h-8 w-8 mx-auto mb-2 text-primary/50" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-foreground mb-1", children: "Choose a video file" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "MP4, WebM, MOV, AVI supported" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                ref: fileRef,
                type: "file",
                accept: "video/*",
                className: "hidden",
                onChange: (e) => {
                  const f = e.target.files?.[0];
                  if (f) onLocal(f);
                }
              }
            )
          ] }),
          (tab === "youtube" || tab === "url") && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mb-1.5", children: tab === "youtube" ? "Paste YouTube video URL" : "Paste direct video URL (MP4, WebM, etc.)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  autoFocus: true,
                  type: "url",
                  placeholder: tab === "youtube" ? "https://youtube.com/watch?v=..." : "https://example.com/video.mp4",
                  value: inputUrl,
                  onChange: (e) => {
                    setInputUrl(e.target.value);
                    setErr("");
                  },
                  onKeyDown: (e) => e.key === "Enter" && handleSubmitUrl(),
                  className: "w-full text-xs px-3 py-2 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
                }
              ),
              err && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-destructive mt-1", children: err })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                className: "w-full h-8 text-xs gap-1.5",
                onClick: handleSubmitUrl,
                disabled: !inputUrl.trim(),
                children: tab === "youtube" ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Youtube, { className: "h-3.5 w-3.5" }),
                  "Add YouTube"
                ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Globe, { className: "h-3.5 w-3.5" }),
                  "Add URL"
                ] })
              }
            )
          ] }),
          tab === "search" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-4 text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "h-10 w-10 mx-auto mb-2 opacity-50" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-foreground font-medium", children: "Search YouTube directly" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs opacity-70 mt-1", children: "Find and add videos without leaving the app" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                className: "w-full h-8 text-xs gap-1.5",
                onClick: () => onSearch?.(),
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "h-3.5 w-3.5" }),
                  "Open YouTube Search"
                ]
              }
            )
          ] })
        ]
      }
    )
  ] });
}
function SpeedPopup({
  speed,
  onChange,
  onClose
}) {
  const [inputVal, setInputVal] = reactExports.useState(String(speed));
  const PRESETS = [0.25, 0.5, 0.75, 1, 1.25, 1.5, 2, 3, 4, 6, 8];
  const apply = (v) => {
    const c = Math.max(0.1, Math.min(8, v));
    onChange(c);
    setInputVal(String(c));
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-[300]", onClick: onClose, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, scale: 0.95, y: 4 },
      animate: { opacity: 1, scale: 1, y: 0 },
      exit: { opacity: 0, scale: 0.95 },
      className: "absolute bottom-14 left-1/2 -translate-x-1/2 bg-card border border-border rounded-2xl shadow-2xl p-4 w-64",
      onClick: (e) => e.stopPropagation(),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold text-foreground uppercase tracking-wide", children: "Playback Speed" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: onClose,
              className: "text-muted-foreground hover:text-foreground",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-3.5 w-3.5" })
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-3xl font-black text-primary tabular-nums", children: [
          speed.toFixed(2),
          "x"
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "range",
            min: "0.1",
            max: "8",
            step: "0.05",
            value: speed,
            onChange: (e) => {
              onChange(parseFloat(e.target.value));
              setInputVal(e.target.value);
            },
            className: "w-full accent-primary mb-1"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: "0.1x" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: "8x" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "number",
              min: "0.1",
              max: "8",
              step: "0.05",
              value: inputVal,
              onChange: (e) => setInputVal(e.target.value),
              onBlur: () => {
                const v = parseFloat(inputVal);
                if (!isNaN(v)) apply(v);
              },
              onKeyDown: (e) => {
                if (e.key === "Enter") {
                  const v = parseFloat(inputVal);
                  if (!isNaN(v)) apply(v);
                }
              },
              className: "flex-1 text-xs px-2.5 py-1.5 rounded-lg bg-muted border border-border text-foreground text-center focus:outline-none focus:ring-2 focus:ring-primary/30"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: "Custom" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-4 gap-1", children: PRESETS.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: () => apply(p),
            className: cn(
              "text-[10px] py-1 rounded-lg font-medium transition-all border",
              Math.abs(speed - p) < 0.01 ? "bg-primary/20 text-primary border-primary/40" : "bg-muted text-muted-foreground border-border hover:bg-accent hover:text-foreground"
            ),
            children: [
              p,
              "x"
            ]
          },
          p
        )) })
      ]
    }
  ) });
}
function VideoSettingsPopup({
  videoType,
  videoSrc,
  ytPlayer,
  videoEl,
  onClose
}) {
  const [view, setView] = reactExports.useState("main");
  const [ccTracks, setCcTracks] = reactExports.useState([]);
  const [activeCc, setActiveCc] = reactExports.useState(null);
  const [qualities, setQualities] = reactExports.useState([]);
  const [activeQuality, setActiveQuality] = reactExports.useState(null);
  const [audioTracks, setAudioTracks] = reactExports.useState([]);
  const [activeAudio, setActiveAudio] = reactExports.useState(null);
  const QUALITY_LABELS = {
    highres: "Highest",
    hd2160: "4K (2160p)",
    hd1440: "1440p",
    hd1080: "1080p",
    hd720: "720p",
    large: "480p",
    medium: "360p",
    small: "240p",
    tiny: "144p",
    auto: "Auto"
  };
  const syncVideoSettings = reactExports.useCallback(() => {
    if (videoType === "youtube" && ytPlayer) {
      if (typeof ytPlayer.loadModule === "function") {
        try {
          ytPlayer.loadModule("captions");
        } catch {
        }
        try {
          ytPlayer.loadModule("audioTrack");
        } catch {
        }
      }
      if (typeof ytPlayer.getAvailableQualityLevels === "function") {
        const q = ytPlayer.getAvailableQualityLevels();
        setQualities(
          q.filter((level) => level !== "auto").map((level) => ({ id: level, label: QUALITY_LABELS[level] || level }))
        );
        setActiveQuality(ytPlayer.getPlaybackQuality() || "auto");
      } else {
        setQualities([{ id: "auto", label: "Auto" }]);
        setActiveQuality("auto");
      }
      if (typeof ytPlayer.getOption === "function") {
        const tracks = ytPlayer.getOption("captions", "tracklist") || [];
        setCcTracks(
          tracks.map((t) => ({
            id: t.languageCode || t.id || String(t.languageName || t.displayName || ""),
            label: t.displayName || t.languageName || t.languageCode || `CC ${t.languageCode || t.id || "unknown"}`
          }))
        );
        const active = ytPlayer.getOption("captions", "track");
        setActiveCc(active ? active.languageCode || active.id || null : null);
      } else {
        setCcTracks([]);
        setActiveCc(null);
      }
      let foundYtAudio = false;
      let aTracks = [];
      if (typeof ytPlayer.getAvailableAudioTracks === "function") {
        aTracks = ytPlayer.getAvailableAudioTracks() || [];
      }
      if ((!aTracks || aTracks.length === 0) && typeof ytPlayer.getOption === "function") {
        aTracks = ytPlayer.getOption("audioTrack", "tracklist") || ytPlayer.getOption("audio", "tracklist") || [];
      }
      if (aTracks && aTracks.length > 0) {
        setAudioTracks(aTracks.map((t, i) => ({
          id: t.id || t.languageCode || String(i),
          label: t.name || t.displayName || t.languageName || t.label || `Track ${i + 1}`
        })));
        let activeId = "0";
        if (typeof ytPlayer.getAudioTrack === "function") {
          const active = ytPlayer.getAudioTrack();
          activeId = active?.id || active?.languageCode || "0";
        } else if (typeof ytPlayer.getOption === "function") {
          const active = ytPlayer.getOption("audioTrack", "track") || ytPlayer.getOption("audio", "track");
          activeId = active?.id || active?.languageCode || "0";
        }
        setActiveAudio(activeId);
        foundYtAudio = true;
      }
      if (!foundYtAudio) {
        setAudioTracks([{ id: "default", label: "Default Audio" }]);
        setActiveAudio("default");
      }
    } else if (videoType === "html5" && videoEl) {
      const v = videoEl;
      const textTracks = Array.from(v.textTracks || []).filter(
        (t) => t.kind === "subtitles" || t.kind === "captions"
      );
      setCcTracks(
        textTracks.map((t, i) => ({
          id: String(i),
          label: t.label || t.language || `Track ${i + 1}`
        }))
      );
      const activeT = textTracks.findIndex((t) => t.mode === "showing");
      setActiveCc(activeT >= 0 ? String(activeT) : null);
      const aTracks = Array.from(v.audioTracks || []);
      if (aTracks.length > 0) {
        setAudioTracks(
          aTracks.map((t, i) => ({
            id: String(i),
            label: t.label || t.language || `Audio ${i + 1}`
          }))
        );
        const activeA = aTracks.findIndex((t) => t.enabled);
        setActiveAudio(activeA >= 0 ? String(activeA) : null);
      } else {
        setAudioTracks([{ id: "default", label: "Default Audio" }]);
        setActiveAudio("default");
      }
      setQualities([{ id: "original", label: "Original" }]);
      setActiveQuality("original");
    }
  }, [videoType, ytPlayer, videoEl, videoSrc]);
  reactExports.useEffect(() => {
    syncVideoSettings();
  }, [syncVideoSettings]);
  reactExports.useEffect(() => {
    if (videoType !== "html5" || !videoEl) return;
    const refresh = () => syncVideoSettings();
    videoEl.addEventListener("loadedmetadata", refresh);
    videoEl.addEventListener("loadeddata", refresh);
    return () => {
      videoEl.removeEventListener("loadedmetadata", refresh);
      videoEl.removeEventListener("loadeddata", refresh);
    };
  }, [videoType, videoEl, syncVideoSettings]);
  const setCc = (id) => {
    if (videoType === "youtube" && ytPlayer) {
      if (id === null) {
        if (typeof ytPlayer.setOption === "function") {
          ytPlayer.setOption("captions", "track", {});
        }
      } else {
        if (typeof ytPlayer.loadModule === "function") {
          try {
            ytPlayer.loadModule("captions");
          } catch {
          }
        }
        if (typeof ytPlayer.setOption === "function") {
          ytPlayer.setOption("captions", "track", { languageCode: id });
        }
      }
    } else if (videoType === "html5" && videoEl) {
      const tracks = Array.from(videoEl.textTracks || []).filter(
        (t) => t.kind === "subtitles" || t.kind === "captions"
      );
      tracks.forEach((t, i) => {
        t.mode = String(i) === id ? "showing" : "hidden";
      });
    }
    setActiveCc(id);
    setView("main");
  };
  const setQuality = (id) => {
    if (videoType === "youtube" && ytPlayer) {
      const target = id === "auto" ? "default" : id;
      if (typeof ytPlayer.setPlaybackQualityRange === "function") {
        if (id === "auto") {
          try {
            ytPlayer.setPlaybackQualityRange("default", "highres");
          } catch {
          }
          try {
            ytPlayer.setPlaybackQuality("default");
          } catch {
          }
        } else {
          try {
            ytPlayer.setPlaybackQualityRange(id, id);
          } catch {
          }
        }
        try {
          ytPlayer.setPlaybackQualityRange(id === "auto" ? "default" : id, id === "auto" ? "highres" : id);
        } catch {
        }
      }
      if (typeof ytPlayer.setPlaybackQuality === "function") {
        try {
          ytPlayer.setPlaybackQuality(id === "auto" ? "default" : id);
        } catch {
        }
        try {
          ytPlayer.setPlaybackQuality(target);
        } catch {
        }
      }
      if (typeof ytPlayer.loadVideoById === "function") {
        const videoData = typeof ytPlayer.getVideoData === "function" ? ytPlayer.getVideoData() : null;
        const vId = videoData?.video_id || (videoSrc ? getYouTubeId(videoSrc) : null);
        if (vId) {
          const currentTime = typeof ytPlayer.getCurrentTime === "function" ? ytPlayer.getCurrentTime() : 0;
          const isPlaying = typeof ytPlayer.getPlayerState === "function" ? ytPlayer.getPlayerState() === 1 : true;
          ytPlayer.loadVideoById({
            videoId: vId,
            startSeconds: currentTime,
            suggestedQuality: id === "auto" ? "default" : id
          });
          if (!isPlaying && typeof ytPlayer.pauseVideo === "function") {
            setTimeout(() => ytPlayer.pauseVideo(), 150);
          }
          try {
            ytPlayer.loadVideoById(vId, currentTime, target);
          } catch {
          }
          setTimeout(() => {
            if (typeof ytPlayer.setPlaybackQualityRange === "function") {
              try {
                ytPlayer.setPlaybackQualityRange(id === "auto" ? "default" : id, id === "auto" ? "highres" : id);
              } catch {
              }
            }
            if (typeof ytPlayer.setPlaybackQuality === "function") {
              try {
                ytPlayer.setPlaybackQuality(target);
              } catch {
              }
            }
            if (!isPlaying && typeof ytPlayer.pauseVideo === "function") {
              ytPlayer.pauseVideo();
            }
          }, 200);
        }
      }
    }
    setActiveQuality(id);
    setView("main");
  };
  const setAudio = (id) => {
    if (videoType === "youtube" && ytPlayer) {
      if (typeof ytPlayer.loadModule === "function") {
        try {
          ytPlayer.loadModule("audioTrack");
        } catch {
        }
      }
      if (typeof ytPlayer.setAudioTrack === "function") {
        const trackList = ytPlayer.getAvailableAudioTracks?.() || [];
        const track = trackList.find((t) => t.id === id || t.languageCode === id);
        if (track) {
          try {
            ytPlayer.setAudioTrack(track);
          } catch {
          }
        } else {
          try {
            ytPlayer.setAudioTrack({ id });
          } catch {
          }
          try {
            ytPlayer.setAudioTrack({ languageCode: id });
          } catch {
          }
          try {
            ytPlayer.setAudioTrack(id);
          } catch {
          }
        }
      }
      if (typeof ytPlayer.setOption === "function") {
        const track = { id };
        try {
          ytPlayer.setOption("audioTrack", "track", track);
        } catch {
        }
        try {
          ytPlayer.setOption("audioTrack", "track", id);
        } catch {
        }
        try {
          ytPlayer.setOption("audio", "track", track);
        } catch {
        }
        try {
          ytPlayer.setOption("audio", "track", id);
        } catch {
        }
      }
    } else if (videoType === "html5" && videoEl) {
      const tracks = Array.from(videoEl.audioTracks || []);
      tracks.forEach((t, i) => {
        t.enabled = String(i) === id;
      });
    }
    setActiveAudio(id);
    setView("main");
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-[300]", onClick: onClose, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, scale: 0.95, y: 4 },
      animate: { opacity: 1, scale: 1, y: 0 },
      exit: { opacity: 0, scale: 0.95 },
      className: "absolute bottom-14 right-4 sm:right-1/4 bg-card border border-border rounded-2xl shadow-2xl p-2 w-64 max-h-80 overflow-y-auto",
      onClick: (e) => e.stopPropagation(),
      children: [
        view === "main" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setView("cc"), className: "flex items-center justify-between p-2 hover:bg-muted rounded-lg transition-colors text-sm text-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Captions, { className: "w-4 h-4" }),
              " Subtitles/CC"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground flex items-center gap-1", children: [
              activeCc ? ccTracks.find((t) => t.id === activeCc)?.label || "On" : "Off",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-3 h-3" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setView("quality"), className: "flex items-center justify-between p-2 hover:bg-muted rounded-lg transition-colors text-sm text-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Settings, { className: "w-4 h-4" }),
              " Quality"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground flex items-center gap-1", children: [
              activeQuality ? QUALITY_LABELS[activeQuality] || activeQuality : "Auto",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-3 h-3" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setView("audio"), className: "flex items-center justify-between p-2 hover:bg-muted rounded-lg transition-colors text-sm text-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Music, { className: "w-4 h-4" }),
              " Audio Track"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground flex items-center gap-1", children: [
              audioTracks.find((t) => t.id === activeAudio)?.label || "Default",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-3 h-3" })
            ] })
          ] })
        ] }),
        view !== "main" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 p-2 border-b border-border mb-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setView("main"), className: "p-1 hover:bg-muted rounded-md transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "w-4 h-4" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-semibold capitalize", children: view === "cc" ? "Subtitles/CC" : view === "quality" ? "Quality" : "Audio Track" })
          ] }),
          view === "cc" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setCc(null), className: cn("text-left p-2 text-sm rounded-lg hover:bg-muted transition-colors", activeCc === null && "bg-primary/10 text-primary"), children: "Off" }),
            ccTracks.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setCc(t.id), className: cn("text-left p-2 text-sm rounded-lg hover:bg-muted transition-colors", activeCc === t.id && "bg-primary/10 text-primary"), children: t.label }, t.id)),
            ccTracks.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground p-2 text-center", children: "No tracks available" })
          ] }),
          view === "quality" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setQuality("auto"), className: cn("text-left p-2 text-sm rounded-lg hover:bg-muted transition-colors", activeQuality === "auto" && "bg-primary/10 text-primary"), children: "Auto" }),
            qualities.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setQuality(t.id), className: cn("text-left p-2 text-sm rounded-lg hover:bg-muted transition-colors", activeQuality === t.id && "bg-primary/10 text-primary"), children: t.label }, t.id))
          ] }),
          view === "audio" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-1", children: audioTracks.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setAudio(t.id), className: cn("text-left p-2 text-sm rounded-lg hover:bg-muted transition-colors", activeAudio === t.id && "bg-primary/10 text-primary"), children: t.label }, t.id)) })
        ] })
      ]
    }
  ) });
}
function BlurImage({ src, alt, className }) {
  const [loaded, setLoaded] = reactExports.useState(false);
  const [hasError, setHasError] = reactExports.useState(false);
  const [errorIndex, setErrorIndex] = reactExports.useState(0);
  reactExports.useEffect(() => {
    setLoaded(false);
    setHasError(false);
    setErrorIndex(0);
  }, [src]);
  const ytIdMatch = src ? src.match(/\/vi\/([a-zA-Z0-9_-]{11})\//) : null;
  const ytId = ytIdMatch ? ytIdMatch[1] : null;
  const fallbacks = ytId ? [
    `https://i.ytimg.com/vi/${ytId}/hq720.jpg`,
    `https://img.youtube.com/vi/${ytId}/hq720.jpg`,
    `https://i.ytimg.com/vi/${ytId}/hqdefault.jpg`,
    `https://img.youtube.com/vi/${ytId}/hqdefault.jpg`,
    `https://i.ytimg.com/vi/${ytId}/mqdefault.jpg`,
    `https://img.youtube.com/vi/${ytId}/mqdefault.jpg`,
    `https://img.youtube.com/vi/${ytId}/0.jpg`
  ] : src ? [src] : [];
  const currentSrc = fallbacks[errorIndex] || "";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn("relative w-full h-full bg-muted/60 flex items-center justify-center overflow-hidden rounded", className), children: [
    !hasError && currentSrc ? /* @__PURE__ */ jsxRuntimeExports.jsx(
      "img",
      {
        src: currentSrc,
        alt: "",
        referrerPolicy: "no-referrer",
        loading: "lazy",
        className: cn(
          "w-full h-full object-cover transition-opacity duration-300",
          loaded ? "opacity-100" : "opacity-0"
        ),
        onLoad: () => setLoaded(true),
        onError: () => {
          if (errorIndex + 1 < fallbacks.length) {
            setErrorIndex((prev) => prev + 1);
          } else {
            setHasError(true);
            setLoaded(true);
          }
        }
      }
    ) : null,
    (!loaded || hasError || !currentSrc) && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-muted/90 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Youtube, { className: "w-5 h-5 opacity-40 text-muted-foreground" }) })
  ] });
}
function YouTubeVideoSearchModal({
  onClose,
  onVideoSelected
}) {
  const [searchQuery, setSearchQuery] = reactExports.useState("");
  const [results, setResults] = reactExports.useState([]);
  const [loading, setLoading] = reactExports.useState(false);
  const [error, setError] = reactExports.useState("");
  const [currentPage, setCurrentPage] = reactExports.useState(1);
  const itemsPerPage = 10;
  const handleSearch = async () => {
    const raw = searchQuery.trim();
    if (!raw) return;
    setLoading(true);
    setError("");
    setResults([]);
    setCurrentPage(1);
    const extractYouTubePlaylistId = (url) => {
      const m = url.match(/[?&]list=([^&#]+)/);
      return m ? m[1] : null;
    };
    const isYtUrl = raw.includes("youtube.com") || raw.includes("youtu.be");
    if (isYtUrl) {
      const ytPlaylistId = extractYouTubePlaylistId(raw);
      const ytId = getYouTubeId(raw);
      if (ytPlaylistId && !ytPlaylistId.startsWith("RD") && !ytPlaylistId.startsWith("LL") && !ytPlaylistId.startsWith("WL") && !raw.includes("watch?v=")) {
        try {
          let tracks = [];
          try {
            const res = await fetch(`/api/media-info?url=${encodeURIComponent(raw)}`);
            if (res.ok) {
              const data = await res.json();
              if (data.type === "playlist" && Array.isArray(data.tracks)) {
                tracks = data.tracks.map((t) => ({
                  videoId: t.youtubeId || t.videoId,
                  title: t.title,
                  author: t.artist || t.author || "YouTube",
                  length_seconds: t.duration || t.length_seconds || 0,
                  thumbnail: t.thumbnail || `https://img.youtube.com/vi/${t.youtubeId || t.videoId}/mqdefault.jpg`
                }));
              }
            }
          } catch (e) {
          }
          if (tracks.length === 0) {
            try {
              const clientResult = await fetchPlaylistClientSide(ytPlaylistId);
              tracks = clientResult.tracks.map((t) => ({
                videoId: t.youtubeId,
                title: t.title,
                author: t.artist,
                length_seconds: t.duration,
                thumbnail: t.thumbnail
              }));
            } catch (clientErr) {
              console.error("Client-side fallback extraction failed", clientErr);
            }
          }
          if (tracks.length > 0) {
            setResults(tracks);
            setLoading(false);
            return;
          }
        } catch (err) {
        }
      }
      if (ytId) {
        try {
          const trackMeta = await fetchVideoMetadataClientSide(ytId);
          setResults([{
            videoId: ytId,
            title: trackMeta.title,
            author: trackMeta.artist,
            length_seconds: trackMeta.duration,
            thumbnail: trackMeta.thumbnail
          }]);
        } catch (err) {
          setResults([{
            videoId: ytId,
            title: "YouTube Video",
            author: "YouTube",
            length_seconds: 0,
            thumbnail: `https://img.youtube.com/vi/${ytId}/hqdefault.jpg`
          }]);
        } finally {
          setLoading(false);
        }
        return;
      } else if (ytPlaylistId) {
        try {
          const clientResult = await fetchPlaylistClientSide(ytPlaylistId);
          const tracks = clientResult.tracks.map((t) => ({
            videoId: t.youtubeId,
            title: t.title,
            author: t.artist,
            length_seconds: t.duration,
            thumbnail: t.thumbnail
          }));
          if (tracks.length === 0) throw new Error("No tracks found in playlist or playlist is private.");
          setResults(tracks);
        } catch (err) {
          setError(err.message || "Failed to load playlist.");
        } finally {
          setLoading(false);
        }
        return;
      }
    }
    try {
      const searchResults = await searchYouTubeVideos(raw);
      if (searchResults && searchResults.length > 0) {
        setResults(searchResults.slice(0, 50));
      } else {
        setError("No results found. Try a different search term.");
      }
    } catch (err) {
      setError("Search failed. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };
  const handleSelectVideo = (result) => {
    onVideoSelected?.(result.videoId, result.title);
    onClose();
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      className: "fixed inset-0 bg-black/70 backdrop-blur-sm z-[300] flex items-center justify-center p-4",
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      onClick: onClose,
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          className: "bg-card border border-border rounded-xl w-full max-w-2xl shadow-2xl max-h-[90vh] overflow-hidden flex flex-col",
          initial: { scale: 0.95, y: 20 },
          animate: { scale: 1, y: 0 },
          exit: { scale: 0.95, y: 20 },
          onClick: (e) => e.stopPropagation(),
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between p-4 md:p-6 border-b border-border flex-shrink-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Youtube, { className: "h-5 w-5 text-red-500" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg font-bold text-foreground", children: "Search YouTube" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: onClose,
                  className: "text-muted-foreground hover:text-foreground transition-colors",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-5 w-5" })
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 md:p-6 border-b border-border flex-shrink-0 space-y-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    type: "text",
                    placeholder: "Search for videos, tutorials, lectures...",
                    value: searchQuery,
                    onChange: (e) => setSearchQuery(e.target.value),
                    onKeyDown: (e) => e.key === "Enter" && handleSearch(),
                    autoFocus: true,
                    className: "flex-1 px-3 py-2 bg-muted border border-border rounded-lg text-sm text-foreground placeholder:text-muted-foreground outline-none focus:ring-2 focus:ring-primary/50"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    onClick: handleSearch,
                    disabled: loading || !searchQuery.trim(),
                    className: "px-4 py-2 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center gap-2",
                    children: [
                      loading ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-4 w-4 animate-spin" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "h-4 w-4" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: "Search" })
                    ]
                  }
                )
              ] }),
              error && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-red-400", children: error }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Showing up to 50 results" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 overflow-y-auto p-4 md:p-6 flex flex-col", children: [
              results.length === 0 && !loading && searchQuery && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-8 text-muted-foreground", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(FilePlay, { className: "h-12 w-12 mx-auto mb-3 opacity-20" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "No results. Try searching for something else." })
              ] }),
              results.length === 0 && !loading && !searchQuery && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-8 text-muted-foreground", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "h-12 w-12 mx-auto mb-3 opacity-20" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Enter a search term above to find videos" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2 md:space-y-3 flex-1", children: results.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage).map((result) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                motion.div,
                {
                  initial: { opacity: 0, y: 10 },
                  animate: { opacity: 1, y: 0 },
                  className: "group flex items-start gap-3 p-3 rounded-lg border border-border hover:bg-muted/50 transition-colors cursor-pointer",
                  onClick: () => handleSelectVideo(result),
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-16 md:w-24 md:h-14 rounded flex-shrink-0 overflow-hidden bg-muted", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      BlurImage,
                      {
                        src: result.thumbnail,
                        alt: result.title,
                        className: "w-full h-full object-cover"
                      }
                    ) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-foreground truncate group-hover:text-primary transition-colors", children: result.title }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground truncate", children: result.author }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground/60 mt-1", children: [
                        Math.floor(result.length_seconds / 60),
                        ":",
                        String(result.length_seconds % 60).padStart(2, "0")
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "button",
                      {
                        onClick: (e) => {
                          e.stopPropagation();
                          handleSelectVideo(result);
                        },
                        className: "px-3 py-2 bg-primary/10 hover:bg-primary/20 text-primary rounded-lg text-xs font-semibold transition-colors flex-shrink-0 flex items-center gap-1",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-3.5 w-3.5" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: "Select" })
                        ]
                      }
                    )
                  ]
                },
                result.videoId
              )) }),
              Math.ceil(results.length / itemsPerPage) > 1 && !loading && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between pt-4 mt-2 border-t border-border shrink-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    variant: "outline",
                    size: "sm",
                    onClick: () => setCurrentPage((p) => Math.max(1, p - 1)),
                    disabled: currentPage === 1,
                    className: "text-xs",
                    children: "Previous"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground font-medium", children: [
                  "Page ",
                  currentPage,
                  " of ",
                  Math.ceil(results.length / itemsPerPage)
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    variant: "outline",
                    size: "sm",
                    onClick: () => setCurrentPage((p) => Math.min(Math.ceil(results.length / itemsPerPage), p + 1)),
                    disabled: currentPage === Math.ceil(results.length / itemsPerPage),
                    className: "text-xs",
                    children: "Next"
                  }
                )
              ] }),
              loading && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center justify-center py-12", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-8 w-8 animate-spin text-primary" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-3", children: "Searching..." })
              ] })
            ] })
          ]
        }
      )
    }
  );
}
function VideoPage() {
  const videoCtx = useVideoContext();
  const { writeMedia, readMediaAsBlob, deleteMedia } = useWorkspaceContext();
  const [sections, setSections] = useLocalStorage(
    "vid_sections_v1",
    []
  );
  const [activeItemId, setActiveItemId] = reactExports.useState(null);
  const [allNotes, setAllNotes] = useLocalStorage(
    "vid_notes_v1",
    {}
  );
  const { videoViewMode, setVideoViewMode } = useAppContext();
  const [folderSecId, setFolderSecId] = reactExports.useState(null);
  const [folderSubId, setFolderSubId] = reactExports.useState(null);
  const [folderSearch, setFolderSearch] = reactExports.useState("");
  const currentFolderSec = reactExports.useMemo(() => sections.find((s) => s.id === folderSecId), [sections, folderSecId]);
  const currentFolderSub = reactExports.useMemo(() => currentFolderSec?.subsections.find((sub) => sub.id === folderSubId), [currentFolderSec, folderSubId]);
  const [activeLeafId, setActiveLeafId] = reactExports.useState(null);
  const [renamingId, setRenamingId] = reactExports.useState(null);
  const [renameVal, setRenameVal] = reactExports.useState("");
  const [uploadTarget, setUploadTarget] = reactExports.useState(null);
  const [replaceVideoTarget, setReplaceVideoTarget] = reactExports.useState(null);
  const [activeColorPicker, setActiveColorPicker] = reactExports.useState(
    null
  );
  const [videoType, setVideoType] = reactExports.useState(null);
  const [videoSrc, setVideoSrc] = reactExports.useState(null);
  const [videoTitle, setVideoTitle] = reactExports.useState("");
  const [isPlaying, setIsPlaying] = reactExports.useState(false);
  const [volume, setVolume] = reactExports.useState(0.8);
  const [muted, setMuted] = reactExports.useState(false);
  const [currentTime, setCurrentTime] = reactExports.useState(0);
  const [duration, setDuration] = reactExports.useState(0);
  const [speed, setSpeed] = reactExports.useState(1);
  const [showSpeedPopup, setShowSpeedPopup] = reactExports.useState(false);
  const [isMiniPlayer, setIsMiniPlayer] = reactExports.useState(false);
  const [isFullscreen, setIsFullscreen] = reactExports.useState(false);
  const [showControls, setShowControls] = reactExports.useState(true);
  const [showNotes, setShowNotes] = reactExports.useState(true);
  const [showMobileSidebar, setShowMobileSidebar] = reactExports.useState(
    () => typeof window !== "undefined" ? window.innerWidth < 768 : false
  );
  const [recording, setRecording] = reactExports.useState(false);
  const [recordingTime, setRecordingTime] = reactExports.useState(0);
  const [editingBlockId, setEditingBlockId] = reactExports.useState(null);
  const [editingText, setEditingText] = reactExports.useState("");
  const [mediaUrls, setMediaUrls] = reactExports.useState({});
  const [addBlockOpen, setAddBlockOpen] = reactExports.useState(false);
  const [recordingTargetBlockId, setRecordingTargetBlockId] = reactExports.useState(null);
  const [screenshotTargetBlockId, setScreenshotTargetBlockId] = reactExports.useState(null);
  const [imageTargetBlockId, setImageTargetBlockId] = reactExports.useState(
    null
  );
  const [newNoteText, setNewNoteText] = reactExports.useState("");
  const [showYouTubeSearch, setShowYouTubeSearch] = reactExports.useState(false);
  const [showSettingsMenu, setShowSettingsMenu] = reactExports.useState(false);
  const [showAB, setShowAB] = reactExports.useState(false);
  const [loopAB, setLoopAB] = reactExports.useState(null);
  const loopABRef = reactExports.useRef(loopAB);
  reactExports.useEffect(() => {
    loopABRef.current = loopAB;
  }, [loopAB]);
  const forcedPlayRef = reactExports.useRef(false);
  const videoRef = reactExports.useRef(null);
  const ytPlayerRef = reactExports.useRef(null);
  const ytDivRef = reactExports.useRef(null);
  const progressIntervalRef = reactExports.useRef(
    null
  );
  const mediaRecorderRef = reactExports.useRef(null);
  const audioChunksRef = reactExports.useRef([]);
  const recordTimerRef = reactExports.useRef(null);
  const miniRef = reactExports.useRef(null);
  const miniDragRef = reactExports.useRef({
    active: false,
    startX: 0,
    startY: 0,
    posX: 0,
    posY: 0
  });
  const imageInputRef = reactExports.useRef(null);
  const blockImageInputRef = reactExports.useRef(null);
  const playerContainerRef = reactExports.useRef(null);
  const fsContainerRef = reactExports.useRef(null);
  const volumeObjRef = reactExports.useRef(volume);
  const mutedObjRef = reactExports.useRef(muted);
  const speedObjRef = reactExports.useRef(speed);
  const currentTimeRef = reactExports.useRef(currentTime);
  const durationRef = reactExports.useRef(duration);
  const controlsTimerRef = reactExports.useRef(null);
  const lastSaveRef = reactExports.useRef(0);
  const activeLeafIdRef = reactExports.useRef(activeLeafId);
  reactExports.useEffect(() => {
    return () => {
      if (recordTimerRef.current) {
        clearInterval(recordTimerRef.current);
      }
      if (mediaRecorderRef.current) {
        try {
          mediaRecorderRef.current.stop();
        } catch (e) {
        }
      }
    };
  }, []);
  reactExports.useEffect(() => {
    volumeObjRef.current = volume;
  }, [volume]);
  reactExports.useEffect(() => {
    mutedObjRef.current = muted;
  }, [muted]);
  reactExports.useEffect(() => {
    speedObjRef.current = speed;
  }, [speed]);
  reactExports.useEffect(() => {
    currentTimeRef.current = currentTime;
  }, [currentTime]);
  reactExports.useEffect(() => {
    durationRef.current = duration;
  }, [duration]);
  reactExports.useEffect(() => {
    activeLeafIdRef.current = activeLeafId;
  }, [activeLeafId]);
  reactExports.useEffect(() => {
    if (showAB && duration > 0 && !loopAB) {
      setLoopAB([0, duration]);
    } else if (!showAB) {
      setLoopAB(null);
    }
  }, [showAB, duration]);
  const notes = (activeLeafId ? allNotes[activeLeafId] : null) ?? [];
  function setNotes(updater) {
    if (!activeLeafId) return;
    setAllNotes((prev) => ({
      ...prev,
      [activeLeafId]: updater(prev[activeLeafId] ?? [])
    }));
  }
  reactExports.useCallback(
    (leafId) => {
      for (const sec of sections) {
        for (const sub of sec.subsections) {
          if (sub.id === leafId) return { video: sub.video, name: sub.name };
          for (const ss of sub.subsubsections) {
            if (ss.id === leafId) return { video: ss.video, name: ss.name };
          }
        }
      }
      return null;
    },
    [sections]
  );
  const findLeafTarget = reactExports.useCallback(
    (leafId) => {
      if (!leafId) return null;
      for (const sec of sections) {
        for (const sub of sec.subsections) {
          if (sub.id === leafId) return { sectionId: sec.id, subId: sub.id };
          for (const ss of sub.subsubsections) {
            if (ss.id === leafId)
              return { sectionId: sec.id, subId: sub.id, subSubId: ss.id };
          }
        }
      }
      return null;
    },
    [sections]
  );
  reactExports.useEffect(() => {
    if (!activeLeafId) return;
    const loadMedia = async () => {
      const urls = {};
      for (const block of notes) {
        const keys = [
          block.imageKey,
          block.voiceKey,
          block.screenshotKey
        ].filter(Boolean);
        for (const key of keys) {
          if (!mediaUrls[key]) {
            const blob = await readMediaAsBlob(key);
            if (blob) urls[key] = URL.createObjectURL(blob);
          }
        }
      }
      if (Object.keys(urls).length > 0)
        setMediaUrls((prev) => ({ ...prev, ...urls }));
    };
    loadMedia();
  }, [notes, activeLeafId]);
  const loadLeafVideo = reactExports.useCallback(
    async (leafId) => {
      const leaf = sections.reduce((acc, sec) => {
        if (acc) return acc;
        for (const sub of sec.subsections) {
          if (sub.id === leafId) return { video: sub.video, name: sub.name };
          for (const ss of sub.subsubsections) {
            if (ss.id === leafId) return { video: ss.video, name: ss.name };
          }
        }
        return null;
      }, null);
      if (!leaf?.video) {
        setVideoType(null);
        setVideoSrc(null);
        setVideoTitle(leaf?.name ?? "");
        return;
      }
      const { video, name } = leaf;
      setVideoTitle(name);
      setIsPlaying(false);
      setCurrentTime(0);
      setDuration(0);
      setLoopAB(null);
      setShowAB(false);
      if (video.type === "local" && video.fileKey) {
        const blob = await readMediaAsBlob(video.fileKey);
        if (blob) {
          const url = URL.createObjectURL(blob);
          setVideoType("html5");
          setVideoSrc(url);
        }
      } else if (video.type === "youtube" && video.url) {
        setVideoType("youtube");
        setVideoSrc(video.url);
      } else if (video.type === "url" && video.url) {
        setVideoType("html5");
        setVideoSrc(video.url);
      }
    },
    [sections]
  );
  reactExports.useEffect(() => {
    if (activeLeafId) loadLeafVideo(activeLeafId);
  }, [activeLeafId, loadLeafVideo]);
  reactExports.useEffect(() => {
    if (!activeLeafId || !videoType || !videoSrc) return;
    try {
      const saved = JSON.parse(
        localStorage.getItem("jee_vid_resume") || "null"
      );
      if (saved && saved.leafId === activeLeafId && Date.now() - saved.savedAt < 6e5 && saved.time > 5) {
        setTimeout(() => handleSeek(saved.time), 800);
      }
    } catch {
    }
  }, [activeLeafId, videoSrc]);
  reactExports.useEffect(() => {
    if (videoType !== "youtube" || !videoSrc) return;
    const videoId = getYouTubeId(videoSrc);
    if (!videoId) return;
    let cancelled = false;
    loadYouTubeApi().then(() => {
      if (cancelled || !ytDivRef.current) return;
      if (ytPlayerRef.current) {
        try {
          ytPlayerRef.current.destroy();
        } catch {
        }
        ytPlayerRef.current = null;
      }
      ytPlayerRef.current = new window.YT.Player(ytDivRef.current, {
        videoId,
        playerVars: {
          autoplay: 0,
          controls: 0,
          showinfo: 0,
          rel: 0,
          modestbranding: 1,
          iv_load_policy: 3,
          cc_load_policy: 1,
          fs: 0,
          disablekb: 1,
          enablejsapi: 1,
          playsinline: 1,
          origin: window.location.origin
        },
        events: {
          onReady: (e) => {
            setDuration(e.target.getDuration() || 0);
            e.target.setVolume(volumeObjRef.current * 100);
            if (mutedObjRef.current) e.target.mute();
            else e.target.unMute();
            e.target.setPlaybackRate(speedObjRef.current);
            try {
              e.target.loadModule("captions");
            } catch {
            }
          },
          onStateChange: (e) => {
            const YT = window.YT.PlayerState;
            if (e.data === YT.PLAYING) setIsPlaying(true);
            else if (e.data === YT.PAUSED || e.data === YT.ENDED)
              setIsPlaying(false);
            if (e.data === YT.PLAYING) setDuration(e.target.getDuration() || 0);
          }
        }
      });
    });
    return () => {
      cancelled = true;
      if (ytPlayerRef.current) {
        try {
          ytPlayerRef.current.destroy();
        } catch {
        }
        ytPlayerRef.current = null;
      }
    };
  }, [videoType, videoSrc]);
  reactExports.useEffect(() => {
    if (!isPlaying) {
      if (progressIntervalRef.current)
        clearInterval(progressIntervalRef.current);
      return;
    }
    progressIntervalRef.current = setInterval(() => {
      let t = 0;
      if (videoType === "youtube" && ytPlayerRef.current && typeof ytPlayerRef.current.getCurrentTime === "function") {
        t = ytPlayerRef.current.getCurrentTime();
        setCurrentTime(t);
        setDuration(typeof ytPlayerRef.current.getDuration === "function" ? ytPlayerRef.current.getDuration() || 0 : durationRef.current);
        if (loopABRef.current) {
          if (t >= loopABRef.current[1] || t < loopABRef.current[0]) {
            ytPlayerRef.current.seekTo(loopABRef.current[0], true);
          }
        }
      } else if (videoRef.current) {
        t = videoRef.current.currentTime;
        setCurrentTime(t);
        setDuration(videoRef.current.duration || 0);
        if (loopABRef.current) {
          if (t >= loopABRef.current[1] || t < loopABRef.current[0]) {
            videoRef.current.currentTime = loopABRef.current[0];
          }
        }
      }
      if (isMiniPlayer && videoCtx.miniState) {
        videoCtx.updateMiniState({ currentTime: t });
      }
      if (Date.now() - lastSaveRef.current > 5e3) {
        lastSaveRef.current = Date.now();
        const leafId = activeLeafIdRef.current;
        if (leafId && videoType) {
          try {
            localStorage.setItem(
              "jee_vid_resume",
              JSON.stringify({ leafId, time: t, savedAt: Date.now() })
            );
          } catch {
          }
        }
      }
    }, 150);
    return () => {
      if (progressIntervalRef.current)
        clearInterval(progressIntervalRef.current);
    };
  }, [isPlaying, videoType, isMiniPlayer, videoCtx]);
  reactExports.useEffect(() => {
    const onFsChange = () => setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener("fullscreenchange", onFsChange);
    return () => document.removeEventListener("fullscreenchange", onFsChange);
  }, []);
  const resetControlsTimer = reactExports.useCallback(() => {
    if (!isFullscreen) return;
    setShowControls(true);
    if (controlsTimerRef.current) clearTimeout(controlsTimerRef.current);
    controlsTimerRef.current = setTimeout(() => setShowControls(false), 3e3);
  }, [isFullscreen]);
  reactExports.useEffect(() => {
    if (!isFullscreen) {
      setShowControls(true);
      return;
    }
    resetControlsTimer();
    return () => {
      if (controlsTimerRef.current) clearTimeout(controlsTimerRef.current);
    };
  }, [isFullscreen, resetControlsTimer]);
  const handlePlayPause = reactExports.useCallback(() => {
    if (videoType === "youtube" && ytPlayerRef.current) {
      if (typeof ytPlayerRef.current.getPlayerState === "function") {
        const state = ytPlayerRef.current.getPlayerState();
        if (state === 1 && typeof ytPlayerRef.current.pauseVideo === "function") ytPlayerRef.current.pauseVideo();
        else if (typeof ytPlayerRef.current.playVideo === "function") ytPlayerRef.current.playVideo();
      }
    } else if (videoRef.current) {
      if (videoRef.current.paused) videoRef.current.play().catch(() => {
      });
      else videoRef.current.pause();
    }
  }, [videoType]);
  const handleSeek = reactExports.useCallback(
    (time) => {
      const t = Math.max(0, Math.min(durationRef.current, time));
      if (videoType === "youtube" && ytPlayerRef.current) {
        if (typeof ytPlayerRef.current.seekTo === "function") {
          ytPlayerRef.current.seekTo(t, true);
        }
      } else if (videoRef.current) {
        videoRef.current.currentTime = t;
      }
      setCurrentTime(t);
    },
    [videoType]
  );
  const handleSeekRelative = reactExports.useCallback(
    (delta) => handleSeek(currentTimeRef.current + delta),
    [handleSeek]
  );
  const handleVolumeChange = reactExports.useCallback(
    (v) => {
      const vol = Math.max(0, Math.min(1, v));
      setVolume(vol);
      if (videoType === "youtube" && ytPlayerRef.current) {
        if (typeof ytPlayerRef.current.setVolume === "function") {
          ytPlayerRef.current.setVolume(vol * 100);
        }
        if (vol > 0 && mutedObjRef.current) {
          if (typeof ytPlayerRef.current.unMute === "function") ytPlayerRef.current.unMute();
          setMuted(false);
        }
      } else if (videoRef.current) {
        videoRef.current.volume = vol;
      }
    },
    [videoType]
  );
  const handleMute = reactExports.useCallback(() => {
    setMuted((prev) => {
      const next = !prev;
      if (videoType === "youtube" && ytPlayerRef.current) {
        if (next && typeof ytPlayerRef.current.mute === "function") ytPlayerRef.current.mute();
        else if (!next && typeof ytPlayerRef.current.unMute === "function") ytPlayerRef.current.unMute();
      } else if (videoRef.current) {
        videoRef.current.muted = next;
      }
      return next;
    });
  }, [videoType]);
  const handleSpeedChange = reactExports.useCallback(
    (s) => {
      setSpeed(s);
      if (videoType === "youtube" && ytPlayerRef.current) {
        if (typeof ytPlayerRef.current.setPlaybackRate === "function") {
          ytPlayerRef.current.setPlaybackRate(s);
        }
      } else if (videoRef.current) {
        videoRef.current.playbackRate = s;
      }
    },
    [videoType]
  );
  const toggleFullscreen = reactExports.useCallback(() => {
    if (!fsContainerRef.current) return;
    if (!document.fullscreenElement) {
      fsContainerRef.current.requestFullscreen().catch(() => {
      });
    } else {
      document.exitFullscreen().catch(() => {
      });
    }
  }, []);
  const handleMiniPlayer = reactExports.useCallback(() => {
    if (isMiniPlayer) {
      const resumeTime = videoCtx.miniState?.currentTime ?? currentTimeRef.current;
      setIsMiniPlayer(false);
      videoCtx.deactivateMiniPlayer();
      setTimeout(() => handleSeek(resumeTime), 100);
    } else {
      const src = videoSrc ?? "";
      const ytId = videoType === "youtube" ? getYouTubeId(src) ?? "" : "";
      const state = {
        leafId: activeLeafId ?? "",
        videoType,
        src,
        ytVideoId: ytId,
        title: videoTitle,
        sourceLabel: getSourceLabel(videoType, videoSrc),
        currentTime: currentTimeRef.current,
        isPlaying,
        speed,
        volume,
        muted
      };
      videoCtx.activateMiniPlayer(state);
      setIsMiniPlayer(true);
      const x = Math.max(20, window.innerWidth - 360);
      const y = Math.max(20, window.innerHeight - 240);
      miniDragRef.current.posX = x;
      miniDragRef.current.posY = y;
      if (miniRef.current)
        miniRef.current.style.transform = `translate(${x}px, ${y}px)`;
    }
  }, [
    isMiniPlayer,
    videoCtx,
    videoSrc,
    videoType,
    videoTitle,
    isPlaying,
    speed,
    volume,
    muted,
    activeLeafId,
    handleSeek
  ]);
  reactExports.useEffect(() => {
    const handler = (e) => {
      const tag = e.target?.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA") return;
      if (!videoType) return;
      switch (e.key) {
        case " ":
          e.preventDefault();
          handlePlayPause();
          resetControlsTimer();
          break;
        case "ArrowLeft":
          e.preventDefault();
          handleSeekRelative(-5);
          resetControlsTimer();
          break;
        case "ArrowRight":
          e.preventDefault();
          handleSeekRelative(5);
          resetControlsTimer();
          break;
        case "ArrowUp":
          e.preventDefault();
          handleVolumeChange(volumeObjRef.current + 0.1);
          break;
        case "ArrowDown":
          e.preventDefault();
          handleVolumeChange(volumeObjRef.current - 0.1);
          break;
        case "m":
        case "M":
          handleMute();
          break;
        case "i":
        case "I":
          handleMiniPlayer();
          break;
        case "f":
        case "F":
          toggleFullscreen();
          break;
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [
    videoType,
    handlePlayPause,
    handleSeekRelative,
    handleVolumeChange,
    handleMute,
    handleMiniPlayer,
    toggleFullscreen,
    resetControlsTimer
  ]);
  const onMiniPointerDown = reactExports.useCallback(
    (e) => {
      if (e.target.closest("button") || e.target.closest("input"))
        return;
      miniDragRef.current.active = true;
      miniDragRef.current.startX = e.clientX - miniDragRef.current.posX;
      miniDragRef.current.startY = e.clientY - miniDragRef.current.posY;
      e.currentTarget.setPointerCapture(e.pointerId);
      e.preventDefault();
    },
    []
  );
  const onMiniPointerMove = reactExports.useCallback(
    (e) => {
      if (!miniDragRef.current.active) return;
      const x = Math.max(
        0,
        Math.min(
          window.innerWidth - 320,
          e.clientX - miniDragRef.current.startX
        )
      );
      const y = Math.max(
        0,
        Math.min(
          window.innerHeight - 200,
          e.clientY - miniDragRef.current.startY
        )
      );
      miniDragRef.current.posX = x;
      miniDragRef.current.posY = y;
      if (miniRef.current)
        miniRef.current.style.transform = `translate(${x}px, ${y}px)`;
    },
    []
  );
  const onMiniPointerUp = reactExports.useCallback(() => {
    miniDragRef.current.active = false;
  }, []);
  reactExports.useEffect(() => {
    const v = videoRef.current;
    if (!v || videoType !== "html5") return;
    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);
    const onMeta = () => setDuration(v.duration || 0);
    const onTime = () => {
      setCurrentTime(v.currentTime);
      setDuration(v.duration || 0);
    };
    v.addEventListener("play", onPlay);
    v.addEventListener("pause", onPause);
    v.addEventListener("loadedmetadata", onMeta);
    v.addEventListener("timeupdate", onTime);
    v.volume = volume;
    v.muted = muted;
    v.playbackRate = speed;
    return () => {
      v.removeEventListener("play", onPlay);
      v.removeEventListener("pause", onPause);
      v.removeEventListener("loadedmetadata", onMeta);
      v.removeEventListener("timeupdate", onTime);
    };
  }, [videoSrc, videoType]);
  const handleBlockImageFile = async (e) => {
    const file = e.target.files?.[0];
    if (!file || !activeLeafId || !imageTargetBlockId) return;
    e.target.value = "";
    const key = `vid_img_${activeLeafId}_${Date.now()}`;
    await writeMedia(key, file);
    const url = URL.createObjectURL(file);
    setMediaUrls((prev) => ({ ...prev, [key]: url }));
    setNotes(
      (prev) => prev.map(
        (b) => b.id === imageTargetBlockId ? { ...b, imageKey: key, imageName: file.name } : b
      )
    );
    setImageTargetBlockId(null);
  };
  const startRecordingForBlock = async (blockId) => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      audioChunksRef.current = [];
      setRecordingTargetBlockId(blockId);
      const mr = new MediaRecorder(stream);
      mr.ondataavailable = (e) => {
        if (e.data.size > 0) audioChunksRef.current.push(e.data);
      };
      mr.onstop = async () => {
        stream.getTracks().forEach((t) => t.stop());
        const blob = new Blob(audioChunksRef.current, { type: "audio/webm" });
        if (!activeLeafId || !blockId) return;
        const key = `vid_voice_${activeLeafId}_${Date.now()}`;
        const dur = recordingTime;
        await writeMedia(key, blob);
        const url = URL.createObjectURL(blob);
        setMediaUrls((prev) => ({ ...prev, [key]: url }));
        if (blockId === "NEW") {
          const ts = videoType === "youtube" && ytPlayerRef.current && typeof ytPlayerRef.current.getCurrentTime === "function" ? ytPlayerRef.current.getCurrentTime() ?? currentTime : videoRef.current?.currentTime ?? currentTime;
          const block = {
            id: uuid(),
            type: "timeline",
            timestamp: ts,
            voiceKey: key,
            voiceDuration: dur,
            createdAt: Date.now()
          };
          setNotes((prev) => [...prev, block]);
        } else {
          setNotes(
            (prev) => prev.map(
              (b) => b.id === blockId ? { ...b, voiceKey: key, voiceDuration: dur } : b
            )
          );
        }
        setRecordingTime(0);
        setRecordingTargetBlockId(null);
      };
      mr.start();
      mediaRecorderRef.current = mr;
      setRecording(true);
      setRecordingTime(0);
      recordTimerRef.current = setInterval(
        () => setRecordingTime((t) => t + 1),
        1e3
      );
    } catch {
      alert("Microphone access denied or not available.");
    }
  };
  const stopRecording = () => {
    mediaRecorderRef.current?.stop();
    mediaRecorderRef.current = null;
    setRecording(false);
    if (recordTimerRef.current) clearInterval(recordTimerRef.current);
  };
  const handleScreenshotSave = async (blob) => {
    if (!activeLeafId || !screenshotTargetBlockId) return;
    const key = `vid_ss_${activeLeafId}_${Date.now()}`;
    await writeMedia(key, blob);
    const url = URL.createObjectURL(blob);
    setMediaUrls((prev) => ({ ...prev, [key]: url }));
    if (screenshotTargetBlockId === "NEW") {
      const ts = videoType === "youtube" && ytPlayerRef.current && typeof ytPlayerRef.current.getCurrentTime === "function" ? ytPlayerRef.current.getCurrentTime() ?? currentTime : videoRef.current?.currentTime ?? currentTime;
      const block = {
        id: uuid(),
        type: "timeline",
        timestamp: ts,
        screenshotKey: key,
        createdAt: Date.now()
      };
      setNotes((prev) => [...prev, block]);
    } else {
      setNotes(
        (prev) => prev.map(
          (b) => b.id === screenshotTargetBlockId ? { ...b, screenshotKey: key } : b
        )
      );
    }
    setScreenshotTargetBlockId(null);
  };
  const deleteBlock = async (block) => {
    const keysToDelete = [
      block.imageKey,
      block.voiceKey,
      block.screenshotKey
    ].filter(Boolean);
    for (const key of keysToDelete) {
      await deleteMedia(key);
      setMediaUrls((prev) => {
        const n = { ...prev };
        if (prev[key]) URL.revokeObjectURL(prev[key]);
        delete n[key];
        return n;
      });
    }
    setNotes((prev) => prev.filter((b) => b.id !== block.id));
  };
  const saveTextEdit = (blockId) => {
    setNotes(
      (prev) => prev.map((b) => b.id === blockId ? { ...b, text: editingText } : b)
    );
    setEditingBlockId(null);
  };
  const addQuickNote = () => {
    if (!newNoteText.trim()) return;
    const ts = videoType === "youtube" && ytPlayerRef.current && typeof ytPlayerRef.current.getCurrentTime === "function" ? ytPlayerRef.current.getCurrentTime() ?? currentTime : videoRef.current?.currentTime ?? currentTime;
    const block = {
      id: uuid(),
      type: "timeline",
      timestamp: ts,
      text: newNoteText,
      createdAt: Date.now()
    };
    setNotes((prev) => [...prev, block]);
    setNewNoteText("");
  };
  const jumpToTimestamp = (ts) => {
    handleSeek(ts);
    if (videoType === "youtube" && ytPlayerRef.current) {
      if (typeof ytPlayerRef.current.playVideo === "function") ytPlayerRef.current.playVideo();
    } else if (videoRef.current) videoRef.current.play().catch(() => {
    });
  };
  const addSection = () => {
    const id = uuid();
    setSections((prev) => [
      ...prev,
      { id, name: "New Section", expanded: true, subsections: [] }
    ]);
    setRenamingId(id);
    setRenameVal("New Section");
  };
  const addSubsection = (secId) => {
    const id = uuid();
    setSections(
      (prev) => prev.map(
        (s) => s.id === secId ? {
          ...s,
          expanded: true,
          subsections: [
            ...s.subsections,
            {
              id,
              name: "New Subsection",
              expanded: true,
              subsubsections: []
            }
          ]
        } : s
      )
    );
    setRenamingId(id);
    setRenameVal("New Subsection");
  };
  const addSubSubsection = (secId, subId) => {
    const id = uuid();
    setSections(
      (prev) => prev.map(
        (s) => s.id === secId ? {
          ...s,
          subsections: s.subsections.map(
            (sub) => sub.id === subId ? {
              ...sub,
              expanded: true,
              subsubsections: [
                ...sub.subsubsections,
                { id, name: "New Item" }
              ]
            } : sub
          )
        } : s
      )
    );
    setRenamingId(id);
    setRenameVal("New Item");
  };
  const deleteSection = (id) => setSections((prev) => prev.filter((s) => s.id !== id));
  const deleteSubsection = (secId, subId) => setSections(
    (prev) => prev.map(
      (s) => s.id === secId ? {
        ...s,
        subsections: s.subsections.filter((sub) => sub.id !== subId)
      } : s
    )
  );
  const deleteSubSubsection = (secId, subId, ssId) => setSections(
    (prev) => prev.map(
      (s) => s.id === secId ? {
        ...s,
        subsections: s.subsections.map(
          (sub) => sub.id === subId ? {
            ...sub,
            subsubsections: sub.subsubsections.filter(
              (ss) => ss.id !== ssId
            )
          } : sub
        )
      } : s
    )
  );
  const toggleSection = (id) => setSections(
    (prev) => prev.map((s) => s.id === id ? { ...s, expanded: !s.expanded } : s)
  );
  const toggleSubsection = (secId, subId) => setSections(
    (prev) => prev.map(
      (s) => s.id === secId ? {
        ...s,
        subsections: s.subsections.map(
          (sub) => sub.id === subId ? { ...sub, expanded: !sub.expanded } : sub
        )
      } : s
    )
  );
  const setSubColor = (secId, subId, color) => {
    setSections(
      (prev) => prev.map(
        (s) => s.id === secId ? {
          ...s,
          subsections: s.subsections.map(
            (sub) => sub.id === subId ? { ...sub, color } : sub
          )
        } : s
      )
    );
  };
  const setSubSubColor = (secId, subId, ssId, color) => {
    setSections(
      (prev) => prev.map(
        (s) => s.id === secId ? {
          ...s,
          subsections: s.subsections.map(
            (sub) => sub.id === subId ? {
              ...sub,
              subsubsections: sub.subsubsections.map(
                (ss) => ss.id === ssId ? { ...ss, color } : ss
              )
            } : sub
          )
        } : s
      )
    );
  };
  const commitRename = (type, secId, subId, ssId) => {
    const name = renameVal.trim() || "Untitled";
    if (type === "section")
      setSections(
        (prev) => prev.map((s) => s.id === secId ? { ...s, name } : s)
      );
    else if (type === "sub" && subId)
      setSections(
        (prev) => prev.map(
          (s) => s.id === secId ? {
            ...s,
            subsections: s.subsections.map(
              (sub) => sub.id === subId ? { ...sub, name } : sub
            )
          } : s
        )
      );
    else if (type === "subsub" && subId && ssId)
      setSections(
        (prev) => prev.map(
          (s) => s.id === secId ? {
            ...s,
            subsections: s.subsections.map(
              (sub) => sub.id === subId ? {
                ...sub,
                subsubsections: sub.subsubsections.map(
                  (ss) => ss.id === ssId ? { ...ss, name } : ss
                )
              } : sub
            )
          } : s
        )
      );
    setRenamingId(null);
  };
  reactExports.useEffect(() => {
    const onKey = (e) => {
      const tag = e.target?.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA") return;
      let activeItemInfo = null;
      if (activeItemId) {
        for (const sec of sections) {
          if (sec.id === activeItemId) {
            activeItemInfo = { type: "section", secId: sec.id, name: sec.name };
            break;
          }
          for (const sub of sec.subsections) {
            if (sub.id === activeItemId) {
              activeItemInfo = { type: "sub", secId: sec.id, subId: sub.id, name: sub.name };
              break;
            }
            for (const ss of sub.subsubsections) {
              if (ss.id === activeItemId) {
                activeItemInfo = { type: "subsub", secId: sec.id, subId: sub.id, subSubId: ss.id, name: ss.name };
                break;
              }
            }
          }
        }
      }
      if (!e.ctrlKey && !e.metaKey && e.key.toLowerCase() === "n") {
        e.preventDefault();
        if (!activeItemInfo) addSection();
        else if (activeItemInfo.type === "section") addSubsection(activeItemInfo.secId);
        else if (activeItemInfo.type === "sub") addSubSubsection(activeItemInfo.secId, activeItemInfo.subId);
      } else if (e.key === "F2") {
        if (!activeItemInfo) return;
        e.preventDefault();
        setRenamingId(activeItemId);
        setRenameVal(activeItemInfo.name);
      } else if (e.key === "Delete") {
        if (!activeItemInfo) return;
        e.preventDefault();
        if (activeItemInfo.type === "section") deleteSection(activeItemInfo.secId);
        else if (activeItemInfo.type === "sub") deleteSubsection(activeItemInfo.secId, activeItemInfo.subId);
        else if (activeItemInfo.type === "subsub") deleteSubSubsection(activeItemInfo.secId, activeItemInfo.subId, activeItemInfo.subSubId);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [activeItemId, sections, setSections]);
  const handleVideoUpload = async (file, target) => {
    if (!target) return;
    const key = `vid_file_${target.subSubId ?? target.subId}_${Date.now()}`;
    const blob = new Blob([await file.arrayBuffer()], { type: file.type });
    await writeMedia(key, blob);
    const videoData = {
      type: "local",
      fileKey: key,
      fileName: file.name
    };
    applyVideoToLeaf(target, videoData);
    setUploadTarget(null);
    setReplaceVideoTarget(null);
    if (target.subSubId) setActiveLeafId(target.subSubId);
    else setActiveLeafId(target.subId);
  };
  const applyVideoToLeaf = (target, videoData) => {
    setSections(
      (prev) => prev.map(
        (s) => s.id !== target.sectionId ? s : {
          ...s,
          subsections: s.subsections.map(
            (sub) => sub.id !== target.subId ? sub : target.subSubId ? {
              ...sub,
              subsubsections: sub.subsubsections.map(
                (ss) => ss.id === target.subSubId ? { ...ss, video: videoData } : ss
              )
            } : { ...sub, video: videoData }
          )
        }
      )
    );
  };
  const progress = duration > 0 ? currentTime / duration * 100 : 0;
  const ColorPicker = ({
    id,
    current,
    onSelect
  }) => /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: activeColorPicker === id && /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      initial: { opacity: 0, scale: 0.9 },
      animate: { opacity: 1, scale: 1 },
      exit: { opacity: 0, scale: 0.9 },
      className: "absolute left-full ml-1 top-0 z-50 bg-card border border-border rounded-xl shadow-xl p-1.5 grid grid-cols-4 gap-0.5",
      onClick: (e) => e.stopPropagation(),
      children: SECTION_COLORS.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => {
            onSelect(c);
            setActiveColorPicker(null);
          },
          className: "w-5 h-5 rounded-full border-2 hover:scale-110 transition-transform",
          style: {
            backgroundColor: c,
            borderColor: current === c ? "white" : "transparent"
          }
        },
        c
      ))
    }
  ) });
  const renderNotesPanelContent = () => /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-2 md:p-3 border-b border-border flex items-center justify-between shrink-0 bg-background/50 backdrop-blur-md", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] md:text-xs font-bold text-foreground uppercase tracking-wide flex items-center gap-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(StickyNote, { className: "h-3.5 md:h-4 w-3.5 md:w-4 text-primary" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Video Notes" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => setShowNotes(false),
          className: "p-1.5 hover:bg-accent rounded-lg text-muted-foreground hover:text-foreground transition-colors",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4" })
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 overflow-y-auto p-3 space-y-4", children: [
      notes.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(StickyNote, { className: "h-10 w-10 mx-auto mb-3 text-primary/20" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-foreground", children: "No notes yet" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1", children: "Capture a screenshot, voice note, or text below." })
      ] }),
      [...notes].sort((a, b) => (a.timestamp ?? 0) - (b.timestamp ?? 0)).map((block) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group flex flex-col gap-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: () => jumpToTimestamp(block.timestamp ?? 0),
              className: "flex items-center gap-1.5 px-2 py-0.5 bg-primary/10 hover:bg-primary/20 text-primary rounded-full text-[10px] font-semibold transition-colors",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-3 w-3" }),
                formatTime(block.timestamp ?? 0)
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: () => {
                  setEditingBlockId(block.id);
                  setEditingText(block.text ?? "");
                },
                className: "p-1 text-muted-foreground hover:text-primary transition-colors",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Pencil, { className: "h-3 w-3" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: () => deleteBlock(block),
                className: "p-1 text-muted-foreground hover:text-destructive transition-colors",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-3 w-3" })
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-xl p-3 shadow-sm space-y-2.5 relative", children: [
          editingBlockId === block.id ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "textarea",
              {
                autoFocus: true,
                value: editingText,
                onChange: (e) => setEditingText(e.target.value),
                className: "w-full text-xs px-2 py-1.5 rounded-lg bg-muted border border-border text-foreground resize-none focus:outline-none focus:ring-1 focus:ring-primary/30 min-h-[60px]"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-end gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  size: "sm",
                  variant: "ghost",
                  className: "h-6 text-[10px]",
                  onClick: () => setEditingBlockId(null),
                  children: "Cancel"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  size: "sm",
                  className: "h-6 text-[10px]",
                  onClick: () => saveTextEdit(block.id),
                  children: "Save"
                }
              )
            ] })
          ] }) : block.text ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-foreground whitespace-pre-wrap leading-relaxed", children: block.text }) : null,
          block.type === "image" && block.imageKey && mediaUrls[block.imageKey] && /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: mediaUrls[block.imageKey],
              alt: "Note",
              className: "w-full rounded-md object-cover border border-border"
            }
          ),
          block.type === "voice" && block.voiceKey && mediaUrls[block.voiceKey] && /* @__PURE__ */ jsxRuntimeExports.jsx(
            "audio",
            {
              src: mediaUrls[block.voiceKey],
              controls: true,
              className: "w-full h-8",
              style: { height: "32px" }
            }
          ),
          block.screenshotKey && mediaUrls[block.screenshotKey] && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative group/media mt-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: mediaUrls[block.screenshotKey],
                alt: "Screenshot",
                className: "w-full rounded-md object-cover border border-border"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute top-1 right-1 px-1.5 py-0.5 bg-black/60 backdrop-blur-sm rounded text-[8px] text-white/90 flex items-center gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Camera, { className: "h-2.5 w-2.5" }),
              " Screenshot"
            ] })
          ] }),
          block.imageKey && block.type !== "image" && mediaUrls[block.imageKey] && /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: mediaUrls[block.imageKey],
              alt: "Attached",
              className: "w-full rounded-md object-cover border border-border mt-1"
            }
          ),
          block.voiceKey && block.type !== "voice" && mediaUrls[block.voiceKey] && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 bg-muted/50 p-2 rounded-lg border border-border mt-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Mic, { className: "h-3 w-3 text-primary" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "audio",
              {
                src: mediaUrls[block.voiceKey],
                controls: true,
                className: "w-full h-6",
                style: { height: "24px" }
              }
            )
          ] }),
          !editingBlockId && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-2 mt-2 border-t border-border/50 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity", children: [
            !block.screenshotKey && /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                onClick: () => setScreenshotTargetBlockId(block.id),
                className: "text-[10px] text-muted-foreground hover:text-primary flex items-center gap-1",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Camera, { className: "h-3 w-3" }),
                  " Add Screen"
                ]
              }
            ),
            !block.voiceKey && /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                onClick: () => startRecordingForBlock(block.id),
                className: "text-[10px] text-muted-foreground hover:text-primary flex items-center gap-1",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Mic, { className: "h-3 w-3" }),
                  " Add Voice"
                ]
              }
            )
          ] })
        ] })
      ] }, block.id))
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-3 bg-card border-t border-border shrink-0", children: recording && recordingTargetBlockId === "NEW" ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between bg-red-500/10 p-3 rounded-lg border border-red-500/20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-red-500", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-semibold", children: [
          "Recording... ",
          formatTime(recordingTime)
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: stopRecording,
          className: "px-3 py-1.5 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors text-xs font-bold shadow-sm",
          children: "Stop & Save"
        }
      )
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-2 relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "textarea",
        {
          value: newNoteText,
          onChange: (e) => setNewNoteText(e.target.value),
          onKeyDown: (e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              addQuickNote();
            }
          },
          placeholder: "Type a note (auto-captures time)...",
          className: "w-full text-xs px-3 py-2.5 rounded-lg bg-muted/50 border border-border text-foreground placeholder:text-muted-foreground resize-none focus:outline-none focus:ring-1 focus:ring-primary/50 min-h-[60px]"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mt-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: () => setScreenshotTargetBlockId("NEW"),
              className: "flex items-center gap-1.5 px-2 py-1.5 text-muted-foreground hover:bg-accent hover:text-primary rounded-lg transition-colors text-[10px] font-medium border border-transparent hover:border-border",
              title: "Capture Screenshot",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Camera, { className: "h-3.5 w-3.5" }),
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden xl:inline", children: "Screenshot" })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: () => startRecordingForBlock("NEW"),
              className: "flex items-center gap-1.5 px-2 py-1.5 text-muted-foreground hover:bg-accent hover:text-primary rounded-lg transition-colors text-[10px] font-medium border border-transparent hover:border-border",
              title: "Record Voice Note",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Mic, { className: "h-3.5 w-3.5" }),
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden xl:inline", children: "Voice Note" })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            size: "sm",
            className: "h-7 text-xs font-semibold px-4",
            onClick: addQuickNote,
            disabled: !newNoteText.trim(),
            children: "Post Note"
          }
        )
      ] })
    ] }) })
  ] });
  const SidebarContent = reactExports.useMemo(() => /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: cn(
        "w-full md:w-48 lg:w-56 xl:w-60 shrink-0 border-r border-border flex-col bg-card/95 backdrop-blur-xl overflow-hidden",
        showMobileSidebar ? "flex fixed inset-0 z-[200] md:relative md:z-auto md:bg-card/50" : "hidden md:flex md:bg-card/50"
      ),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-2 md:p-3 border-b border-border flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] md:text-xs font-bold text-foreground uppercase tracking-wide", children: "Video Lib" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: () => setVideoViewMode("folder"),
                className: "h-6 w-6 rounded-lg bg-primary/10 hover:bg-primary/20 flex items-center justify-center text-primary transition-colors flex-shrink-0",
                title: "Switch to Folder View",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(LayoutGrid, { className: "h-3.5 w-3.5" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: addSection,
                className: "h-6 w-6 rounded-lg bg-primary/10 hover:bg-primary/20 flex items-center justify-center text-primary transition-colors flex-shrink-0",
                title: "Add section",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-3.5 w-3.5" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: () => setShowMobileSidebar(false),
                className: "md:hidden h-6 w-6 rounded-lg bg-muted hover:bg-accent flex items-center justify-center text-muted-foreground flex-shrink-0",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-3.5 w-3.5" })
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(ReorderGroup, { as: "div", axis: "y", values: sections, onReorder: setSections, className: "flex-1 overflow-y-auto p-1.5 md:p-2 space-y-0.5", children: [
          sections.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-8 px-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(FilePlay, { className: "h-8 w-8 mx-auto mb-2 text-primary/30" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "No sections" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground/60 mt-1", children: "Click + to add" })
          ] }),
          sections.map((sec) => /* @__PURE__ */ jsxRuntimeExports.jsxs(ReorderItem, { as: "div", value: sec, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: `group flex items-center gap-1 px-2 py-1.5 rounded-lg transition-colors cursor-pointer ${activeItemId === sec.id ? "bg-accent/40" : "hover:bg-accent/30"}`,
                onClick: () => setActiveItemId(sec.id),
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      onClick: () => toggleSection(sec.id),
                      className: "text-muted-foreground shrink-0",
                      children: sec.expanded ? /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "h-3.5 w-3.5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "h-3.5 w-3.5" })
                    }
                  ),
                  renamingId === sec.id ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "input",
                    {
                      autoFocus: true,
                      value: renameVal,
                      onChange: (e) => setRenameVal(e.target.value),
                      onBlur: () => commitRename("section", sec.id),
                      onKeyDown: (e) => {
                        if (e.key === "Enter") commitRename("section", sec.id);
                        if (e.key === "Escape") setRenamingId(null);
                      },
                      className: "flex-1 text-xs bg-muted border border-primary/40 rounded px-1.5 py-0.5 text-foreground focus:outline-none"
                    }
                  ) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex-1 text-xs font-semibold text-foreground truncate", children: sec.name }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(ThreeDotMenu, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { icon: FilePlus, label: "Add Subsection", shortcut: "N", onClick: (e) => {
                      e.stopPropagation();
                      addSubsection(sec.id);
                    } }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { icon: Pencil, label: "Rename", shortcut: "F2", onClick: (e) => {
                      e.stopPropagation();
                      setRenamingId(sec.id);
                      setRenameVal(sec.name);
                    } }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { icon: Trash2, label: "Delete", shortcut: "Del", destructive: true, onClick: (e) => {
                      e.stopPropagation();
                      deleteSection(sec.id);
                    } })
                  ] })
                ]
              }
            ),
            sec.expanded && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { onPointerDown: (e) => e.stopPropagation(), children: /* @__PURE__ */ jsxRuntimeExports.jsx(ReorderGroup, { as: "div", axis: "y", values: sec.subsections, onReorder: (newSubs) => setSections((prev) => prev.map((s) => s.id === sec.id ? { ...s, subsections: newSubs } : s)), className: "space-y-0.5 mt-0.5", children: sec.subsections.map((sub) => /* @__PURE__ */ jsxRuntimeExports.jsxs(ReorderItem, { as: "div", value: sub, className: "ml-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: cn(
                    "group flex items-center gap-1 px-2 py-1.5 rounded-lg hover:bg-accent/30 transition-colors cursor-pointer",
                    activeLeafId === sub.id && sub.subsubsections.length === 0 && "bg-primary/10 text-primary",
                    activeItemId === sub.id && "bg-accent/40"
                  ),
                  onClick: () => {
                    setActiveItemId(sub.id);
                    if (sub.subsubsections.length === 0) {
                      setActiveLeafId(sub.id);
                      setShowMobileSidebar(false);
                    } else toggleSubsection(sec.id, sub.id);
                  },
                  children: [
                    sub.subsubsections.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "button",
                      {
                        onClick: (e) => {
                          e.stopPropagation();
                          toggleSubsection(sec.id, sub.id);
                        },
                        className: "text-muted-foreground shrink-0",
                        children: sub.expanded ? /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "h-3.5 w-3.5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "h-3.5 w-3.5" })
                      }
                    ),
                    sub.subsubsections.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-3.5 shrink-0" }),
                    renamingId === sub.id ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "input",
                      {
                        autoFocus: true,
                        value: renameVal,
                        onChange: (e) => setRenameVal(e.target.value),
                        onBlur: () => commitRename("sub", sec.id, sub.id),
                        onKeyDown: (e) => {
                          if (e.key === "Enter")
                            commitRename("sub", sec.id, sub.id);
                          if (e.key === "Escape") setRenamingId(null);
                        },
                        className: "flex-1 text-xs bg-muted border border-primary/40 rounded px-1.5 py-0.5 text-foreground focus:outline-none",
                        onClick: (e) => e.stopPropagation()
                      }
                    ) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex-1 text-xs text-foreground truncate", children: sub.name }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "div",
                      {
                        className: "relative shrink-0",
                        onClick: (e) => e.stopPropagation(),
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "button",
                            {
                              onClick: () => setActiveColorPicker(
                                activeColorPicker === sub.id ? null : sub.id
                              ),
                              className: "w-3 h-3 rounded-full border border-border hover:scale-125 transition-transform",
                              style: {
                                backgroundColor: sub.video ? sub.color ?? (sub.video.type === "youtube" ? "#EF4444" : sub.video.type === "local" ? "#22C55E" : "#3B82F6") : sub.color ?? "#6B7280"
                              },
                              title: "Change color"
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            ColorPicker,
                            {
                              id: sub.id,
                              current: sub.color,
                              onSelect: (c) => setSubColor(sec.id, sub.id, c)
                            }
                          )
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(ThreeDotMenu, { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { icon: Plus, label: "Add/Replace Video", onClick: (e) => {
                        e.stopPropagation();
                        setUploadTarget({ sectionId: sec.id, subId: sub.id });
                      } }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { icon: FilePlus, label: "Add Item", shortcut: "N", onClick: (e) => {
                        e.stopPropagation();
                        addSubSubsection(sec.id, sub.id);
                      } }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { icon: Pencil, label: "Rename", shortcut: "F2", onClick: (e) => {
                        e.stopPropagation();
                        setRenamingId(sub.id);
                        setRenameVal(sub.name);
                      } }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { icon: Trash2, label: "Delete", shortcut: "Del", destructive: true, onClick: (e) => {
                        e.stopPropagation();
                        deleteSubsection(sec.id, sub.id);
                      } })
                    ] })
                  ]
                }
              ),
              sub.expanded && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { onPointerDown: (e) => e.stopPropagation(), children: /* @__PURE__ */ jsxRuntimeExports.jsx(ReorderGroup, { as: "div", axis: "y", values: sub.subsubsections, onReorder: (newSubSubs) => setSections((prev) => prev.map((s) => s.id === sec.id ? { ...s, subsections: s.subsections.map((su) => su.id === sub.id ? { ...su, subsubsections: newSubSubs } : su) } : s)), className: "space-y-0.5 mt-0.5", children: sub.subsubsections.map((ss) => /* @__PURE__ */ jsxRuntimeExports.jsx(ReorderItem, { as: "div", value: ss, className: "ml-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: cn(
                    "group flex items-center gap-1.5 px-2 py-1.5 rounded-lg transition-colors cursor-pointer",
                    activeLeafId === ss.id ? "bg-primary/10 text-primary" : activeItemId === ss.id ? "bg-accent/40 text-foreground" : "hover:bg-accent/30 text-muted-foreground hover:text-foreground"
                  ),
                  onClick: () => {
                    setActiveItemId(ss.id);
                    setActiveLeafId(ss.id);
                    setShowMobileSidebar(false);
                  },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-2 h-px bg-border mr-0.5 shrink-0" }),
                    renamingId === ss.id ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "input",
                      {
                        autoFocus: true,
                        value: renameVal,
                        onChange: (e) => setRenameVal(e.target.value),
                        onBlur: () => commitRename("subsub", sec.id, sub.id, ss.id),
                        onKeyDown: (e) => {
                          if (e.key === "Enter")
                            commitRename(
                              "subsub",
                              sec.id,
                              sub.id,
                              ss.id
                            );
                          if (e.key === "Escape") setRenamingId(null);
                        },
                        className: "flex-1 text-xs bg-muted border border-primary/40 rounded px-1.5 py-0.5 text-foreground focus:outline-none",
                        onClick: (e) => e.stopPropagation()
                      }
                    ) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex-1 text-xs truncate", children: ss.name }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "div",
                      {
                        className: "relative shrink-0",
                        onClick: (e) => e.stopPropagation(),
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "button",
                            {
                              onClick: () => setActiveColorPicker(
                                activeColorPicker === ss.id ? null : ss.id
                              ),
                              className: "w-3 h-3 rounded-full border border-border hover:scale-125 transition-transform",
                              style: {
                                backgroundColor: ss.video ? ss.color ?? (ss.video.type === "youtube" ? "#EF4444" : ss.video.type === "local" ? "#22C55E" : "#3B82F6") : ss.color ?? "#6B7280"
                              },
                              title: "Change color"
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            ColorPicker,
                            {
                              id: ss.id,
                              current: ss.color,
                              onSelect: (c) => setSubSubColor(sec.id, sub.id, ss.id, c)
                            }
                          )
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(ThreeDotMenu, { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { icon: Plus, label: "Add/Replace Video", onClick: (e) => {
                        e.stopPropagation();
                        setUploadTarget({ sectionId: sec.id, subId: sub.id, subSubId: ss.id });
                      } }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { icon: Pencil, label: "Rename", shortcut: "F2", onClick: (e) => {
                        e.stopPropagation();
                        setRenamingId(ss.id);
                        setRenameVal(ss.name);
                      } }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { icon: Trash2, label: "Delete", shortcut: "Del", destructive: true, onClick: (e) => {
                        e.stopPropagation();
                        deleteSubSubsection(sec.id, sub.id, ss.id);
                      } })
                    ] })
                  ]
                }
              ) }, ss.id)) }) })
            ] }, sub.id)) }) })
          ] }, sec.id))
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-1.5 md:p-2 border-t border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-1 md:gap-1.5 text-[9px] md:text-[10px] text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-0.5 md:gap-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-1.5 h-1.5 rounded-full bg-green-400" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: "Local" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-0.5 md:gap-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-1.5 h-1.5 rounded-full bg-red-400" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: "YouTube" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-0.5 md:gap-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-1.5 h-1.5 rounded-full bg-blue-400" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: "URL" })
          ] })
        ] }) })
      ]
    }
  ), [sections, activeItemId, activeLeafId, renamingId, renameVal, activeColorPicker, showMobileSidebar]);
  const MemoizedNotesPanel = reactExports.useMemo(() => renderNotesPanelContent(), [notes, editingBlockId, editingText, mediaUrls, recording, recordingTime, recordingTargetBlockId, newNoteText, screenshotTargetBlockId]);
  const renderVideoFolderExplorer = () => {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 flex flex-col h-full overflow-hidden bg-background", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 px-4 py-3 border-b border-border bg-card/50 backdrop-blur-md shrink-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 flex-wrap min-w-0 text-sm", children: [
          folderSecId !== null && /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              variant: "ghost",
              size: "sm",
              onClick: () => {
                if (folderSubId) setFolderSubId(null);
                else setFolderSecId(null);
              },
              className: "h-8 px-2 text-xs gap-1 mr-1 text-muted-foreground hover:text-foreground",
              title: "Go back",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "h-3.5 w-3.5" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Back" })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: () => {
                setFolderSecId(null);
                setFolderSubId(null);
              },
              className: cn(
                "flex items-center gap-1.5 font-bold transition-colors hover:text-primary",
                !folderSecId ? "text-foreground" : "text-muted-foreground"
              ),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(FolderOpen, { className: "h-4 w-4 text-primary shrink-0" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Video Library" })
              ]
            }
          ),
          currentFolderSec && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground font-semibold", children: "/" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: () => setFolderSubId(null),
                className: cn(
                  "font-semibold transition-colors hover:text-primary truncate max-w-[140px] sm:max-w-[200px]",
                  !folderSubId ? "text-foreground font-bold" : "text-muted-foreground"
                ),
                children: currentFolderSec.name
              }
            )
          ] }),
          currentFolderSub && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground font-semibold", children: "/" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-foreground truncate max-w-[140px] sm:max-w-[200px]", children: currentFolderSub.name })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 shrink-0 flex-wrap", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex-1 sm:w-48", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-2.5 top-2.5 h-3.5 w-3.5 text-muted-foreground" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                value: folderSearch,
                onChange: (e) => setFolderSearch(e.target.value),
                placeholder: "Search videos...",
                className: "h-8 w-full pl-8 pr-7 text-xs bg-muted/50 border border-border rounded-lg text-foreground placeholder:text-muted-foreground outline-none focus:ring-1 focus:ring-primary/50"
              }
            ),
            folderSearch && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setFolderSearch(""), className: "absolute right-2 top-2 text-muted-foreground hover:text-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-3.5 w-3.5" }) })
          ] }),
          !folderSecId ? /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", onClick: addSection, className: "h-8 gap-1.5 text-xs font-semibold shadow-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(FolderPlus, { className: "h-3.5 w-3.5" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: "New Folder" })
          ] }) : !folderSubId ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-1.5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", variant: "outline", onClick: () => currentFolderSec && addSubsection(currentFolderSec.id), className: "h-8 gap-1.5 text-xs", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(FolderPlus, { className: "h-3.5 w-3.5 text-primary" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "New Sub-folder" })
          ] }) }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", onClick: () => currentFolderSec && currentFolderSub && addSubSubsection(currentFolderSec.id, currentFolderSub.id), className: "h-8 gap-1.5 text-xs", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(FilePlus, { className: "h-3.5 w-3.5" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Add Video Item" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center p-0.5 bg-muted rounded-lg border border-border shrink-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                onClick: () => setVideoViewMode("folder"),
                className: cn(
                  "flex items-center gap-1 px-2.5 py-1 text-xs font-semibold rounded-md transition-all",
                  videoViewMode === "folder" ? "bg-card text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"
                ),
                title: "Folder Explorer View",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(LayoutGrid, { className: "h-3.5 w-3.5 text-primary" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden md:inline", children: "Folders" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                onClick: () => setVideoViewMode("section"),
                className: cn(
                  "flex items-center gap-1 px-2.5 py-1 text-xs font-semibold rounded-md transition-all",
                  videoViewMode === "section" ? "bg-card text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"
                ),
                title: "Classic Section Sidebar View",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ListTree, { className: "h-3.5 w-3.5" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden md:inline", children: "Sections" })
                ]
              }
            )
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 overflow-y-auto p-4 sm:p-6", children: folderSearch.trim() !== "" ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4", children: [
          'Search Results for "',
          folderSearch,
          '"'
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4", children: sections.flatMap((sec) => [
          ...sec.name.toLowerCase().includes(folderSearch.toLowerCase()) ? [{ type: "sec", item: sec, secId: sec.id, path: [sec.name] }] : [],
          ...sec.subsections?.flatMap((sub) => [
            ...sub.name.toLowerCase().includes(folderSearch.toLowerCase()) || sub.video?.fileName?.toLowerCase().includes(folderSearch.toLowerCase()) ? [{ type: "sub", item: sub, secId: sec.id, subId: sub.id, path: [sec.name, sub.name], hasVideo: !!sub.video }] : [],
            ...sub.subsubsections?.filter((ss) => ss.name.toLowerCase().includes(folderSearch.toLowerCase()) || ss.video?.fileName?.toLowerCase().includes(folderSearch.toLowerCase())).map((ss) => ({ type: "ssub", item: ss, secId: sec.id, subId: sub.id, subSubId: ss.id, path: [sec.name, sub.name, ss.name], hasVideo: !!ss.video })) || []
          ]) || []
        ]).map((res, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            onClick: () => {
              if (res.type === "sec") {
                setFolderSecId(res.secId);
                setFolderSubId(null);
                setFolderSearch("");
              } else if (res.type === "sub") {
                if (res.hasVideo) {
                  setActiveItemId(res.subId);
                  setActiveLeafId(res.subId);
                } else {
                  setFolderSecId(res.secId);
                  setFolderSubId(res.subId);
                  setFolderSearch("");
                }
              } else if (res.type === "ssub") {
                setActiveItemId(res.subSubId);
                setActiveLeafId(res.subSubId);
              }
            },
            className: "p-4 rounded-xl bg-card border border-border hover:border-primary/50 hover:shadow-md transition-all cursor-pointer group flex flex-col justify-between",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 mb-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-2.5 rounded-xl bg-primary/10 text-primary shrink-0 group-hover:scale-105 transition-transform", children: res.hasVideo ? /* @__PURE__ */ jsxRuntimeExports.jsx(FilePlay, { className: "h-5 w-5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Folder, { className: "h-5 w-5" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-bold text-foreground truncate group-hover:text-primary transition-colors", children: res.item.name }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground truncate mt-0.5", children: res.path.join(" / ") })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[11px] text-primary font-semibold flex items-center justify-end gap-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: res.hasVideo ? "Play Video" : "Open Folder" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "h-3 w-3" })
              ] })
            ]
          },
          idx
        )) })
      ] }) : !folderSecId ? (
        /* Level 1: Root Section Folders */
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-between mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-sm font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Folder, { className: "h-4 w-4 text-primary" }),
            " Video Folders (",
            sections.length,
            ")"
          ] }) }),
          sections.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-20 border-2 border-dashed border-border rounded-2xl max-w-lg mx-auto", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(FolderPlus, { className: "h-12 w-12 mx-auto text-primary/30 mb-3" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base font-bold text-foreground mb-1", children: "No video folders yet" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mb-4", children: "Create your first subject folder to organize lectures and YouTube playlists." }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: addSection, className: "gap-2 text-xs font-semibold", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(FolderPlus, { className: "h-4 w-4" }),
              " Create Video Folder"
            ] })
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4", children: [
            sections.map((sec) => {
              const totalSubs = sec.subsections?.length || 0;
              const totalVideos = sec.subsections?.reduce((acc, sub) => acc + (sub.subsubsections?.length || (sub.video ? 1 : 0)), 0) || 0;
              return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  onClick: () => setFolderSecId(sec.id),
                  className: "group relative p-5 rounded-2xl bg-card border border-border/80 hover:border-primary/50 hover:shadow-lg hover:-translate-y-0.5 transition-all cursor-pointer flex flex-col justify-between min-h-[140px]",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-2 mb-3", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-12 w-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 flex items-center justify-center text-primary group-hover:scale-110 transition-transform shadow-inner", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Folder, { className: "h-6 w-6 fill-primary/20" }) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(ThreeDotMenu, { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { icon: FolderPlus, label: "Add Sub-folder", onClick: (e) => {
                          e.stopPropagation();
                          addSubsection(sec.id);
                        } }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { icon: Pencil, label: "Rename", onClick: (e) => {
                          e.stopPropagation();
                          setRenamingId(sec.id);
                          setRenameVal(sec.name);
                        } }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { icon: Trash2, label: "Delete", destructive: true, onClick: (e) => {
                          e.stopPropagation();
                          deleteSection(sec.id);
                        } })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      renamingId === sec.id ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "input",
                        {
                          autoFocus: true,
                          value: renameVal,
                          onChange: (e) => setRenameVal(e.target.value),
                          onBlur: () => commitRename("section", sec.id),
                          onKeyDown: (e) => {
                            if (e.key === "Enter") commitRename("section", sec.id);
                            if (e.key === "Escape") setRenamingId(null);
                          },
                          onClick: (e) => e.stopPropagation(),
                          className: "w-full text-sm font-bold bg-background border border-primary rounded px-2 py-1 outline-none text-foreground"
                        }
                      ) : /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base font-bold text-foreground group-hover:text-primary transition-colors truncate", children: sec.name }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground mt-1 font-medium", children: [
                        totalSubs,
                        " ",
                        totalSubs === 1 ? "subfolder" : "subfolders",
                        " · ",
                        totalVideos,
                        " ",
                        totalVideos === 1 ? "video" : "videos"
                      ] })
                    ] })
                  ]
                },
                sec.id
              );
            }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                onClick: addSection,
                className: "p-5 rounded-2xl border-2 border-dashed border-border/80 hover:border-primary/50 hover:bg-primary/5 transition-all flex flex-col items-center justify-center gap-2 text-muted-foreground hover:text-primary min-h-[140px] group",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-3 rounded-full bg-muted group-hover:bg-primary/10 group-hover:scale-110 transition-all", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-5 w-5" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold", children: "New Video Folder" })
                ]
              }
            )
          ] })
        ] })
      ) : !folderSubId ? (
        /* Level 2: Inside a Section -> Subsections & Direct Videos */
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-between mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-sm font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(FolderOpen, { className: "h-4 w-4 text-primary" }),
            " Inside ",
            currentFolderSec?.name,
            " (",
            currentFolderSec?.subsections?.length || 0,
            ")"
          ] }) }),
          !currentFolderSec?.subsections || currentFolderSec.subsections.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-20 border-2 border-dashed border-border rounded-2xl max-w-lg mx-auto", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(FolderPlus, { className: "h-12 w-12 mx-auto text-primary/30 mb-3" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base font-bold text-foreground mb-1", children: "Folder is empty" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mb-4", children: "Add a sub-folder or lecture videos to this section." }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: () => currentFolderSec && addSubsection(currentFolderSec.id), className: "gap-2 text-xs font-semibold", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(FolderPlus, { className: "h-4 w-4" }),
              " Add Sub-folder"
            ] })
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4", children: [
            currentFolderSec.subsections.map((sub) => {
              const isSubFolder = sub.subsubsections && sub.subsubsections.length > 0;
              const hasVideo = !!sub.video;
              return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  onClick: () => {
                    if (isSubFolder) {
                      setFolderSubId(sub.id);
                    } else if (hasVideo) {
                      setActiveItemId(sub.id);
                      setActiveLeafId(sub.id);
                    } else {
                      setFolderSubId(sub.id);
                    }
                  },
                  className: "group relative p-5 rounded-2xl bg-card border border-border/80 hover:border-primary/50 hover:shadow-lg hover:-translate-y-0.5 transition-all cursor-pointer flex flex-col justify-between min-h-[140px]",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-2 mb-3", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-12 w-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 flex items-center justify-center text-primary group-hover:scale-110 transition-transform shadow-inner", children: hasVideo && !isSubFolder ? sub.video?.type === "youtube" ? /* @__PURE__ */ jsxRuntimeExports.jsx(Youtube, { className: "h-6 w-6 text-red-500" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(FilePlay, { className: "h-6 w-6 text-primary" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Folder, { className: "h-6 w-6 fill-primary/20" }) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(ThreeDotMenu, { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { icon: Plus, label: "Add/Replace Video", onClick: (e) => {
                          e.stopPropagation();
                          if (currentFolderSec) setUploadTarget({ sectionId: currentFolderSec.id, subId: sub.id });
                        } }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { icon: FilePlus, label: "Add Sub-item", onClick: (e) => {
                          e.stopPropagation();
                          if (currentFolderSec) addSubSubsection(currentFolderSec.id, sub.id);
                        } }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { icon: Pencil, label: "Rename", onClick: (e) => {
                          e.stopPropagation();
                          setRenamingId(sub.id);
                          setRenameVal(sub.name);
                        } }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { icon: Trash2, label: "Delete", destructive: true, onClick: (e) => {
                          e.stopPropagation();
                          if (currentFolderSec) deleteSubsection(currentFolderSec.id, sub.id);
                        } })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      renamingId === sub.id ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "input",
                        {
                          autoFocus: true,
                          value: renameVal,
                          onChange: (e) => setRenameVal(e.target.value),
                          onBlur: () => commitRename("sub", currentFolderSec.id, sub.id),
                          onKeyDown: (e) => {
                            if (e.key === "Enter") commitRename("sub", currentFolderSec.id, sub.id);
                            if (e.key === "Escape") setRenamingId(null);
                          },
                          onClick: (e) => e.stopPropagation(),
                          className: "w-full text-sm font-bold bg-background border border-primary rounded px-2 py-1 outline-none text-foreground"
                        }
                      ) : /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base font-bold text-foreground group-hover:text-primary transition-colors truncate", children: sub.name }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1 font-medium truncate", children: isSubFolder ? `${sub.subsubsections.length} items inside` : hasVideo ? sub.video?.type === "youtube" ? "YouTube Video" : "Local / URL Video" : "Empty folder" })
                    ] })
                  ]
                },
                sub.id
              );
            }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                onClick: () => currentFolderSec && addSubsection(currentFolderSec.id),
                className: "p-5 rounded-2xl border-2 border-dashed border-border/80 hover:border-primary/50 hover:bg-primary/5 transition-all flex flex-col items-center justify-center gap-2 text-muted-foreground hover:text-primary min-h-[140px] group",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-3 rounded-full bg-muted group-hover:bg-primary/10 group-hover:scale-110 transition-all", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-5 w-5" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold", children: "New Sub-folder" })
                ]
              }
            )
          ] })
        ] })
      ) : (
        /* Level 3: Inside a Subsection -> Video Items */
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-between mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-sm font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(FilePlay, { className: "h-4 w-4 text-primary" }),
            " Videos in ",
            currentFolderSub?.name,
            " (",
            currentFolderSub?.subsubsections?.length || 0,
            ")"
          ] }) }),
          !currentFolderSub?.subsubsections || currentFolderSub.subsubsections.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-20 border-2 border-dashed border-border rounded-2xl max-w-lg mx-auto", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(FilePlus, { className: "h-12 w-12 mx-auto text-primary/30 mb-3" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base font-bold text-foreground mb-1", children: "No videos added yet" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mb-4", children: "Add a video item to this folder." }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: () => currentFolderSec && currentFolderSub && addSubSubsection(currentFolderSec.id, currentFolderSub.id), className: "gap-2 text-xs font-semibold", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(FilePlus, { className: "h-4 w-4" }),
              " Add Video Item"
            ] })
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4", children: [
            currentFolderSub.subsubsections.map((ssub) => {
              const hasVideo = !!ssub.video;
              return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  onClick: () => {
                    setActiveItemId(ssub.id);
                    setActiveLeafId(ssub.id);
                  },
                  className: "group relative p-5 rounded-2xl bg-card border border-border/80 hover:border-primary/50 hover:shadow-lg hover:-translate-y-0.5 transition-all cursor-pointer flex flex-col justify-between min-h-[140px]",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-2 mb-3", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-12 w-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 flex items-center justify-center text-primary group-hover:scale-110 transition-transform shadow-inner", children: ssub.video?.type === "youtube" ? /* @__PURE__ */ jsxRuntimeExports.jsx(Youtube, { className: "h-6 w-6 text-red-500" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(FilePlay, { className: "h-6 w-6 text-primary" }) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(ThreeDotMenu, { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { icon: Plus, label: "Add/Replace Video", onClick: (e) => {
                          e.stopPropagation();
                          if (currentFolderSec && currentFolderSub) setUploadTarget({ sectionId: currentFolderSec.id, subId: currentFolderSub.id, subSubId: ssub.id });
                        } }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { icon: Pencil, label: "Rename", onClick: (e) => {
                          e.stopPropagation();
                          setRenamingId(ssub.id);
                          setRenameVal(ssub.name);
                        } }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { icon: Trash2, label: "Delete", destructive: true, onClick: (e) => {
                          e.stopPropagation();
                          if (currentFolderSec && currentFolderSub) deleteSubSubsection(currentFolderSec.id, currentFolderSub.id, ssub.id);
                        } })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      renamingId === ssub.id ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "input",
                        {
                          autoFocus: true,
                          value: renameVal,
                          onChange: (e) => setRenameVal(e.target.value),
                          onBlur: () => {
                            if (currentFolderSec && currentFolderSub) commitRename("subsub", currentFolderSec.id, currentFolderSub.id, ssub.id);
                          },
                          onKeyDown: (e) => {
                            if (e.key === "Enter" && currentFolderSec && currentFolderSub) commitRename("subsub", currentFolderSec.id, currentFolderSub.id, ssub.id);
                            if (e.key === "Escape") setRenamingId(null);
                          },
                          onClick: (e) => e.stopPropagation(),
                          className: "w-full text-sm font-bold bg-background border border-primary rounded px-2 py-1 outline-none text-foreground"
                        }
                      ) : /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base font-bold text-foreground group-hover:text-primary transition-colors truncate", children: ssub.name }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1 font-medium truncate", children: hasVideo ? ssub.video?.type === "youtube" ? "YouTube Video" : "Local / URL Video" : "No video attached" })
                    ] })
                  ]
                },
                ssub.id
              );
            }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                onClick: () => currentFolderSec && currentFolderSub && addSubSubsection(currentFolderSec.id, currentFolderSub.id),
                className: "p-5 rounded-2xl border-2 border-dashed border-border/80 hover:border-primary/50 hover:bg-primary/5 transition-all flex flex-col items-center justify-center gap-2 text-muted-foreground hover:text-primary min-h-[140px] group",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-3 rounded-full bg-muted group-hover:bg-primary/10 group-hover:scale-110 transition-all", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-5 w-5" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold", children: "Add Video Item" })
                ]
              }
            )
          ] })
        ] })
      ) })
    ] });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 10 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0 },
      className: "flex h-full overflow-hidden bg-background flex-col md:flex-row",
      children: [
        videoViewMode === "section" && SidebarContent,
        videoViewMode === "folder" && !activeLeafId ? renderVideoFolderExplorer() : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 flex flex-col overflow-hidden", children: [
          !activeLeafId && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 flex flex-col relative", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:hidden flex items-center px-3 py-2 bg-card border-b border-border shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                onClick: () => setShowMobileSidebar(true),
                className: "flex items-center gap-1.5 text-xs font-semibold text-foreground",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(FolderPlus, { className: "h-4 w-4 text-primary" }),
                  " Open Library"
                ]
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 flex items-center justify-center p-4 md:p-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(FilePlay, { className: "h-12 md:h-16 w-12 md:w-16 mx-auto mb-3 md:mb-4 text-primary/20" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base md:text-lg font-bold text-foreground mb-1", children: "Select a video" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs md:text-sm text-muted-foreground mb-4", children: "Choose a section in the left panel, then add a video" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row items-center justify-center gap-2 md:gap-4 text-[10px] md:text-xs text-muted-foreground", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1 md:gap-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(FilePlay, { className: "h-3 md:h-3.5 w-3 md:w-3.5" }),
                  "Local MP4"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1 md:gap-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Youtube, { className: "h-3 md:h-3.5 w-3 md:w-3.5 text-red-400" }),
                  "YouTube"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1 md:gap-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Globe, { className: "h-3 md:h-3.5 w-3 md:w-3.5" }),
                  "Video URL"
                ] })
              ] })
            ] }) })
          ] }),
          activeLeafId && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 flex flex-col overflow-hidden", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-2 px-3 py-1.5 bg-card/80 border-b border-border backdrop-blur-sm shrink-0 flex-wrap", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                videoViewMode === "folder" && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Button,
                  {
                    variant: "outline",
                    size: "sm",
                    className: "h-7 gap-1.5 text-xs shrink-0 bg-primary/10 hover:bg-primary/20 text-primary border-primary/20 font-semibold",
                    onClick: () => setActiveLeafId(null),
                    title: "Back to Folders",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "h-3 w-3" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Back to Folders" })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold text-foreground truncate max-w-[180px] sm:max-w-xs", children: videoTitle || "Video Player" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    onClick: () => setVideoViewMode(videoViewMode === "folder" ? "section" : "folder"),
                    className: "h-7 px-2 flex items-center gap-1 rounded-md border border-border bg-muted/60 text-xs font-semibold text-muted-foreground hover:text-foreground transition-all shrink-0",
                    title: "Switch layout mode",
                    children: [
                      videoViewMode === "folder" ? /* @__PURE__ */ jsxRuntimeExports.jsx(ListTree, { className: "h-3 w-3 text-primary" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(LayoutGrid, { className: "h-3 w-3 text-primary" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: videoViewMode === "folder" ? "Sidebar Mode" : "Folder Mode" })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Button,
                  {
                    variant: "ghost",
                    size: "sm",
                    className: "h-7 gap-1 text-xs text-muted-foreground hover:text-foreground",
                    onClick: () => setShowNotes(!showNotes),
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(StickyNote, { className: "h-3.5 w-3.5" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: showNotes ? "Hide Notes" : "Show Notes" })
                    ]
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:hidden flex items-center justify-between px-3 py-2 bg-card border-b border-border shrink-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  onClick: () => setShowMobileSidebar(true),
                  className: "flex items-center gap-1.5 text-xs font-semibold text-foreground",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(FolderPlus, { className: "h-4 w-4 text-primary" }),
                    " Library"
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  onClick: () => setShowNotes(true),
                  className: "flex items-center gap-1.5 text-xs font-semibold text-foreground",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(StickyNote, { className: "h-4 w-4 text-primary" }),
                    " Notes"
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 flex flex-col lg:flex-row overflow-hidden gap-0 lg:gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 flex flex-col overflow-hidden rounded-none lg:rounded-lg bg-black", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    ref: fsContainerRef,
                    className: cn(
                      "relative flex-1 min-h-0 bg-black flex flex-col",
                      isMiniPlayer && "hidden"
                    ),
                    onMouseMove: resetControlsTimer,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "div",
                        {
                          ref: playerContainerRef,
                          className: "flex-1 relative flex items-center justify-center overflow-hidden",
                          children: [
                            videoType && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute top-0 left-0 right-0 z-20 flex flex-col sm:flex-row items-start sm:items-center gap-2 px-2 sm:px-3 py-2 bg-gradient-to-b from-black/80 to-transparent pointer-events-none", children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white text-xs sm:text-sm font-semibold truncate", children: videoTitle }),
                              getSourceLabel(videoType, videoSrc) && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-white/50 text-[10px] shrink-0", children: [
                                "— ",
                                getSourceLabel(videoType, videoSrc)
                              ] })
                            ] }),
                            !videoType && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center text-white/60 p-4", children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx(FilePlay, { className: "h-8 md:h-12 w-8 md:w-12 mx-auto mb-2 md:mb-3 opacity-30" }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs md:text-sm font-medium", children: "No video loaded" }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] md:text-xs opacity-60 mt-1", children: "Click + next to a section to add a video" }),
                              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                                Button,
                                {
                                  variant: "outline",
                                  size: "sm",
                                  className: "mt-4 text-xs gap-1.5 border-white/20 text-white hover:bg-white/10",
                                  onClick: () => {
                                    for (const sec of sections) {
                                      for (const sub of sec.subsections) {
                                        if (sub.id === activeLeafId) {
                                          setUploadTarget({
                                            sectionId: sec.id,
                                            subId: sub.id
                                          });
                                          return;
                                        }
                                        for (const ss of sub.subsubsections) {
                                          if (ss.id === activeLeafId) {
                                            setUploadTarget({
                                              sectionId: sec.id,
                                              subId: sub.id,
                                              subSubId: ss.id
                                            });
                                            return;
                                          }
                                        }
                                      }
                                    }
                                  },
                                  children: [
                                    /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-3.5 w-3.5" }),
                                    "Add Video"
                                  ]
                                }
                              )
                            ] }),
                            videoType === "html5" && videoSrc && /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "video",
                              {
                                ref: videoRef,
                                src: videoSrc,
                                className: "w-full h-full object-contain",
                                playsInline: true,
                                crossOrigin: "anonymous",
                                onLoadedMetadata: (e) => setDuration(e.currentTarget.duration || 0),
                                onClick: handlePlayPause
                              }
                            ),
                            videoType === "youtube" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-full h-full", children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full h-full pointer-events-none", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: ytDivRef, className: "w-full h-full" }) }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx(
                                "div",
                                {
                                  className: "absolute inset-0 z-10",
                                  onClick: handlePlayPause,
                                  onDoubleClick: toggleFullscreen,
                                  style: {
                                    cursor: "pointer",
                                    background: "transparent"
                                  }
                                }
                              )
                            ] })
                          ]
                        }
                      ),
                      videoType && /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: (showControls || !isFullscreen) && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        motion.div,
                        {
                          initial: { opacity: 0 },
                          animate: { opacity: 1 },
                          exit: { opacity: 0 },
                          className: cn(
                            isFullscreen ? "absolute bottom-0 left-0 right-0 z-30 bg-gradient-to-t from-black/90 via-black/60 to-transparent" : "bg-card border-t border-border"
                          ),
                          children: [
                            !isFullscreen && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between px-4 pt-2", children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
                                videoType === "youtube" && /* @__PURE__ */ jsxRuntimeExports.jsx(Youtube, { className: "h-3.5 w-3.5 text-red-400" }),
                                videoType === "html5" && videoSrc?.startsWith("blob:") && /* @__PURE__ */ jsxRuntimeExports.jsx(FilePlay, { className: "h-3.5 w-3.5 text-green-400" }),
                                videoType === "html5" && !videoSrc?.startsWith("blob:") && /* @__PURE__ */ jsxRuntimeExports.jsx(Globe, { className: "h-3.5 w-3.5 text-blue-400" }),
                                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-medium text-foreground truncate max-w-48", children: videoTitle })
                              ] }),
                              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1", children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsx(
                                  "button",
                                  {
                                    onClick: handleMiniPlayer,
                                    className: "p-1.5 hover:bg-accent rounded-lg text-muted-foreground hover:text-foreground transition-colors",
                                    title: "Mini Player (I)",
                                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Minimize2, { className: "h-3.5 w-3.5" })
                                  }
                                ),
                                /* @__PURE__ */ jsxRuntimeExports.jsx(
                                  "button",
                                  {
                                    onClick: () => setShowNotes((p) => !p),
                                    className: cn(
                                      "p-1.5 rounded-lg transition-colors",
                                      showNotes ? "bg-primary/10 text-primary" : "text-muted-foreground hover:bg-accent hover:text-foreground"
                                    ),
                                    title: "Toggle Notes",
                                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(StickyNote, { className: "h-3.5 w-3.5" })
                                  }
                                )
                              ] })
                            ] }),
                            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 py-2 space-y-1.5", children: [
                              showAB ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 pb-1", children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: cn("text-[10px] font-bold", isFullscreen ? "text-primary" : "text-primary"), children: "A" }),
                                /* @__PURE__ */ jsxRuntimeExports.jsx(
                                  DualRangeSlider,
                                  {
                                    duration,
                                    currentTime,
                                    value: loopAB || [0, duration],
                                    onChange: setLoopAB,
                                    onSeekPreview: (t) => {
                                      handleSeek(t);
                                      if (!isPlaying && !forcedPlayRef.current) {
                                        forcedPlayRef.current = true;
                                        handlePlayPause();
                                        setTimeout(() => forcedPlayRef.current = false, 500);
                                      }
                                    }
                                  }
                                ),
                                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: cn("text-[10px] font-bold", isFullscreen ? "text-primary" : "text-primary"), children: "B" })
                              ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx(
                                "div",
                                {
                                  className: "relative group cursor-pointer",
                                  onClick: (e) => {
                                    const rect = e.currentTarget.getBoundingClientRect();
                                    handleSeek(
                                      (e.clientX - rect.left) / rect.width * duration
                                    );
                                    resetControlsTimer();
                                  },
                                  children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("h-1.5 rounded-full overflow-hidden group-hover:h-2.5 transition-all", isFullscreen ? "bg-white/20" : "bg-primary/20"), children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                                    "div",
                                    {
                                      className: "h-full bg-primary rounded-full",
                                      style: { width: `${progress}%` }
                                    }
                                  ) })
                                }
                              ),
                              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsx(
                                  "button",
                                  {
                                    onClick: () => {
                                      handleSeekRelative(-10);
                                      resetControlsTimer();
                                    },
                                    className: cn("p-1.5 rounded-lg transition-colors", isFullscreen ? "text-white/80 hover:bg-white/10" : "text-muted-foreground hover:bg-accent hover:text-foreground"),
                                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(SkipBack, { className: "h-3.5 w-3.5" })
                                  }
                                ),
                                /* @__PURE__ */ jsxRuntimeExports.jsx(
                                  "button",
                                  {
                                    onClick: () => {
                                      handlePlayPause();
                                      resetControlsTimer();
                                    },
                                    className: "p-2 bg-primary hover:bg-primary/80 rounded-xl text-primary-foreground transition-colors",
                                    children: isPlaying ? /* @__PURE__ */ jsxRuntimeExports.jsx(Pause, { className: "h-4 w-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Play, { className: "h-4 w-4" })
                                  }
                                ),
                                /* @__PURE__ */ jsxRuntimeExports.jsx(
                                  "button",
                                  {
                                    onClick: () => {
                                      handleSeekRelative(10);
                                      resetControlsTimer();
                                    },
                                    className: cn("p-1.5 rounded-lg transition-colors", isFullscreen ? "text-white/80 hover:bg-white/10" : "text-muted-foreground hover:bg-accent hover:text-foreground"),
                                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(SkipForward, { className: "h-3.5 w-3.5" })
                                  }
                                ),
                                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: cn("text-xs tabular-nums", isFullscreen ? "text-white/70" : "text-muted-foreground"), children: [
                                  formatTime(currentTime),
                                  " /",
                                  " ",
                                  formatTime(duration)
                                ] }),
                                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1" }),
                                /* @__PURE__ */ jsxRuntimeExports.jsx(
                                  "button",
                                  {
                                    onClick: () => setShowAB((p) => !p),
                                    className: cn("p-1.5 rounded-lg transition-colors", showAB ? "text-primary bg-primary/10" : isFullscreen ? "text-white/80 hover:bg-white/10" : "text-muted-foreground hover:bg-accent hover:text-foreground"),
                                    title: "A-B Loop",
                                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Repeat, { className: "h-3.5 w-3.5" })
                                  }
                                ),
                                /* @__PURE__ */ jsxRuntimeExports.jsx(
                                  "button",
                                  {
                                    onClick: () => setShowYouTubeSearch(true),
                                    className: cn("p-1.5 rounded-lg transition-colors", isFullscreen ? "text-white/80 hover:bg-white/10" : "text-muted-foreground hover:bg-accent hover:text-foreground"),
                                    title: "Search YouTube",
                                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "h-3.5 w-3.5" })
                                  }
                                ),
                                /* @__PURE__ */ jsxRuntimeExports.jsx(
                                  "button",
                                  {
                                    onClick: handleMute,
                                    className: cn("p-1.5 rounded-lg transition-colors", isFullscreen ? "text-white/80 hover:bg-white/10" : "text-muted-foreground hover:bg-accent hover:text-foreground"),
                                    children: muted || volume === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(VolumeX, { className: "h-3.5 w-3.5" }) : volume < 0.5 ? /* @__PURE__ */ jsxRuntimeExports.jsx(Volume1, { className: "h-3.5 w-3.5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Volume2, { className: "h-3.5 w-3.5" })
                                  }
                                ),
                                /* @__PURE__ */ jsxRuntimeExports.jsx(
                                  "input",
                                  {
                                    type: "range",
                                    min: "0",
                                    max: "1",
                                    step: "0.02",
                                    value: muted ? 0 : volume,
                                    onChange: (e) => handleVolumeChange(parseFloat(e.target.value)),
                                    className: "w-16 accent-primary"
                                  }
                                ),
                                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                                    "button",
                                    {
                                      onClick: () => setShowSpeedPopup((p) => !p),
                                      className: cn("flex items-center gap-1 px-2 py-1 rounded-lg text-xs font-medium transition-colors border", isFullscreen ? "bg-white/10 text-white/80 hover:bg-white/20 border-white/20" : "bg-muted text-foreground hover:bg-accent border-border"),
                                      children: [
                                        /* @__PURE__ */ jsxRuntimeExports.jsx(Gauge, { className: "h-3 w-3" }),
                                        speed.toFixed(2),
                                        "x"
                                      ]
                                    }
                                  ),
                                  /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: showSpeedPopup && /* @__PURE__ */ jsxRuntimeExports.jsx(
                                    SpeedPopup,
                                    {
                                      speed,
                                      onChange: handleSpeedChange,
                                      onClose: () => setShowSpeedPopup(false)
                                    }
                                  ) })
                                ] }),
                                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                                    "button",
                                    {
                                      onClick: () => setShowSettingsMenu((p) => !p),
                                      className: cn("p-1.5 rounded-lg transition-colors", isFullscreen ? "text-white/80 hover:bg-white/10" : "text-muted-foreground hover:bg-accent hover:text-foreground"),
                                      title: "Settings (Quality, CC, Audio)",
                                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Settings, { className: "h-3.5 w-3.5" })
                                    }
                                  ),
                                  /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: showSettingsMenu && /* @__PURE__ */ jsxRuntimeExports.jsx(
                                    VideoSettingsPopup,
                                    {
                                      videoType,
                                      videoSrc,
                                      ytPlayer: ytPlayerRef.current,
                                      videoEl: videoRef.current,
                                      onClose: () => setShowSettingsMenu(false)
                                    }
                                  ) })
                                ] }),
                                !isFullscreen && /* @__PURE__ */ jsxRuntimeExports.jsx(
                                  "button",
                                  {
                                    onClick: handleMiniPlayer,
                                    className: cn("p-1.5 rounded-lg transition-colors", isFullscreen ? "text-white/80 hover:bg-white/10" : "text-muted-foreground hover:bg-accent hover:text-foreground"),
                                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Minimize2, { className: "h-3.5 w-3.5" })
                                  }
                                ),
                                /* @__PURE__ */ jsxRuntimeExports.jsx(
                                  "button",
                                  {
                                    onClick: toggleFullscreen,
                                    className: cn("p-1.5 rounded-lg transition-colors", isFullscreen ? "text-white/80 hover:bg-white/10" : "text-muted-foreground hover:bg-accent hover:text-foreground"),
                                    children: isFullscreen ? /* @__PURE__ */ jsxRuntimeExports.jsx(Maximize2, { className: "h-3.5 w-3.5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Maximize, { className: "h-3.5 w-3.5" })
                                  }
                                )
                              ] }),
                              !isFullscreen && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground text-center", children: "Space: play/pause · ← →: seek 5s · ↑ ↓: volume · M: mute · I: mini · F: fullscreen" })
                            ] })
                          ]
                        }
                      ) })
                    ]
                  }
                ),
                isMiniPlayer && videoType && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 flex items-center justify-center bg-background/50", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Minimize2, { className: "h-10 w-10 mx-auto mb-3 text-primary/40" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-foreground", children: "Playing in Mini Player" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1", children: videoTitle }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Button,
                    {
                      size: "sm",
                      variant: "outline",
                      onClick: handleMiniPlayer,
                      className: "mt-3 gap-1.5 text-xs",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Maximize2, { className: "h-3 w-3" }),
                        "Return to Full Player"
                      ]
                    }
                  )
                ] }) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: showNotes && !isMiniPlayer && /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.div,
                {
                  initial: { opacity: 0 },
                  animate: { opacity: 1 },
                  exit: { opacity: 0 },
                  transition: { duration: 0.15 },
                  className: cn(
                    "border-l border-border bg-card/50 flex flex-col overflow-hidden shrink-0 w-full lg:w-80 h-[40vh] lg:h-auto"
                  ),
                  children: MemoizedNotesPanel
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: showNotes && isFullscreen && /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.div,
                {
                  initial: { opacity: 0, x: 24 },
                  animate: { opacity: 1, x: 0 },
                  exit: { opacity: 0, x: 24 },
                  transition: { duration: 0.15 },
                  className: "absolute top-0 right-0 bottom-0 z-40 w-full max-w-[28rem] border-l border-border bg-card/95 backdrop-blur-md shadow-2xl overflow-hidden",
                  children: MemoizedNotesPanel
                }
              ) })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: isMiniPlayer && videoType && /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            ref: miniRef,
            className: "fixed top-0 left-0 z-[9998] w-80 rounded-2xl overflow-hidden shadow-2xl border border-border bg-black",
            style: {
              transform: `translate(${miniDragRef.current.posX}px, ${miniDragRef.current.posY}px)`
            },
            onPointerDown: onMiniPointerDown,
            onPointerMove: onMiniPointerMove,
            onPointerUp: onMiniPointerUp,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between px-2 py-1.5 bg-card/90 backdrop-blur cursor-grab active:cursor-grabbing border-b border-border/50", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0 mr-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-foreground font-medium truncate", children: videoTitle }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[9px] text-muted-foreground", children: getSourceLabel(videoType, videoSrc) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-0.5 shrink-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      onClick: handlePlayPause,
                      className: "p-1 hover:bg-accent rounded text-foreground/80",
                      children: isPlaying ? /* @__PURE__ */ jsxRuntimeExports.jsx(Pause, { className: "h-3 w-3" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Play, { className: "h-3 w-3" })
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      onClick: handleMiniPlayer,
                      className: "p-1 hover:bg-accent rounded text-foreground/80",
                      title: "Exit mini player (I)",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Maximize2, { className: "h-3 w-3" })
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      onClick: () => {
                        setIsMiniPlayer(false);
                        videoCtx.deactivateMiniPlayer();
                        setVideoType(null);
                        setVideoSrc(null);
                      },
                      className: "p-1 hover:bg-red-500/20 hover:text-red-400 rounded text-foreground/80",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-3 w-3" })
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", style: { aspectRatio: "16/9" }, children: [
                videoType === "html5" && videoSrc && /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "video",
                  {
                    src: videoSrc,
                    className: "w-full h-full object-contain",
                    playsInline: true,
                    autoPlay: isPlaying,
                    muted,
                    onClick: handlePlayPause,
                    ref: (node) => {
                      if (node) {
                        node.currentTime = currentTimeRef.current;
                        node.playbackRate = speedObjRef.current;
                        node.volume = volumeObjRef.current;
                        if (isPlaying) node.play().catch(() => {
                        });
                      }
                    }
                  }
                ),
                videoType === "youtube" && videoSrc && (() => {
                  const ytId = getYouTubeId(videoSrc);
                  return ytId ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full h-full pointer-events-none", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "iframe",
                    {
                      src: `https://www.youtube-nocookie.com/embed/${ytId}?start=${Math.floor(currentTimeRef.current)}&autoplay=1&rel=0&modestbranding=1&controls=0&iv_load_policy=3&showinfo=0&disablekb=1&fs=0`,
                      className: "w-full h-full border-0",
                      allow: "autoplay; fullscreen",
                      allowFullScreen: true
                    }
                  ) }) : null;
                })(),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-0 left-0 right-0 h-1 bg-black/40 pointer-events-none", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "h-full bg-primary",
                    style: { width: `${progress}%` }
                  }
                ) })
              ] })
            ]
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(AnimatePresence, { children: [
          (uploadTarget || replaceVideoTarget) && /* @__PURE__ */ jsxRuntimeExports.jsx(
            VideoUploadModal,
            {
              title: replaceVideoTarget ? "Replace Video" : "Add Video",
              onLocal: (file) => handleVideoUpload(file, uploadTarget ?? replaceVideoTarget),
              onYoutube: (url) => {
                const t = uploadTarget ?? replaceVideoTarget;
                applyVideoToLeaf(t, { type: "youtube", url });
                setUploadTarget(null);
                setReplaceVideoTarget(null);
                if (t.subSubId) setActiveLeafId(t.subSubId);
                else setActiveLeafId(t.subId);
              },
              onUrl: (url) => {
                const t = uploadTarget ?? replaceVideoTarget;
                applyVideoToLeaf(t, { type: "url", url });
                setUploadTarget(null);
                setReplaceVideoTarget(null);
                if (t.subSubId) setActiveLeafId(t.subSubId);
                else setActiveLeafId(t.subId);
              },
              onSearch: () => setShowYouTubeSearch(true),
              onClose: () => {
                setUploadTarget(null);
                setReplaceVideoTarget(null);
              }
            }
          ),
          showYouTubeSearch && /* @__PURE__ */ jsxRuntimeExports.jsx(
            YouTubeVideoSearchModal,
            {
              onClose: () => setShowYouTubeSearch(false),
              onVideoSelected: (videoId, title) => {
                const target = uploadTarget ?? replaceVideoTarget ?? findLeafTarget(activeLeafId);
                if (target) {
                  applyVideoToLeaf(target, {
                    type: "youtube",
                    url: `https://www.youtube.com/watch?v=${videoId}`,
                    fileName: title
                  });
                  if (target.subSubId) setActiveLeafId(target.subSubId);
                  else setActiveLeafId(target.subId);
                }
                setUploadTarget(null);
                setReplaceVideoTarget(null);
                setShowYouTubeSearch(false);
              }
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: screenshotTargetBlockId && /* @__PURE__ */ jsxRuntimeExports.jsx(
          ScreenshotEditor,
          {
            videoRef,
            isYoutube: videoType === "youtube",
            onSave: handleScreenshotSave,
            onClose: () => setScreenshotTargetBlockId(null)
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            ref: imageInputRef,
            type: "file",
            accept: "image/*",
            className: "hidden",
            onChange: () => {
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            ref: blockImageInputRef,
            type: "file",
            accept: "image/*",
            className: "hidden",
            onChange: handleBlockImageFile
          }
        )
      ]
    }
  );
}
export {
  VideoPage as default
};
