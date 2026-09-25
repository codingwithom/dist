import { c as createLucideIcon, u as useLocalStorage, i as useAppContext, w as useWorkspaceContext, j as jsxRuntimeExports, m as motion, g as ChevronLeft, ae as Bookmark, x as FolderPlus, v as LoaderCircle, p as ChevronDown, b as cn, I as Input, B as Button, y as ArrowLeft, a5 as Eye, a4 as EyeOff, A as AnimatePresence, X, f as Check, S as Search, h as ChevronRight } from "./index-DucFcVv6.js";
import { b as reactExports, d as reactDomExports } from "./vendor-charts-Du7SI2xx.js";
import { L as LayoutGrid, a as ListTree, F as Folder } from "./list-tree-CUyt6NBn.js";
import { F as FilePlus } from "./file-plus-BLHM93qG.js";
import { a as Pencil, P as Plus } from "./plus-DK-LmxfR.js";
import { T as Trash2 } from "./trash-2-BwKrFsWB.js";
import { C as Clock } from "./clock-Dn95ubyF.js";
import { S as Save, I as Image, a as ZoomIn, Z as ZoomOut } from "./zoom-out-bSWAlmJp.js";
import { F as FolderOpen } from "./folder-open-85bAvNOa.js";
import { E as EllipsisVertical } from "./ellipsis-vertical-D00LzK7t.js";
import { U as Upload } from "./upload-BhsDURiI.js";
import { C as CircleCheckBig, a as Copy } from "./copy-B6s2ly70.js";
import { R as ReorderGroup, a as ReorderItem } from "./Item-BawYKTRH.js";
import "./vendor-firebase-C_hAKoH5.js";
const __iconNode$3 = [
  ["path", { d: "M5 7a2 2 0 0 0-2 2v11", key: "1yhqjt" }],
  ["path", { d: "M5.803 18H5a2 2 0 0 0 0 4h9.5a.5.5 0 0 0 .5-.5V21", key: "edzzo5" }],
  [
    "path",
    {
      d: "M9 15V4a2 2 0 0 1 2-2h9.5a.5.5 0 0 1 .5.5v14a.5.5 0 0 1-.5.5H11a2 2 0 0 1 0-4h10",
      key: "1nwzrg"
    }
  ]
];
const BookCopy = createLucideIcon("book-copy", __iconNode$3);
const __iconNode$2 = [
  ["path", { d: "M12 8V4H8", key: "hb8ula" }],
  ["rect", { width: "16", height: "12", x: "4", y: "8", rx: "2", key: "enze0r" }],
  ["path", { d: "M2 14h2", key: "vft8re" }],
  ["path", { d: "M20 14h2", key: "4cs60a" }],
  ["path", { d: "M15 13v2", key: "1xurst" }],
  ["path", { d: "M9 13v2", key: "rq6x2g" }]
];
const Bot = createLucideIcon("bot", __iconNode$2);
const __iconNode$1 = [
  [
    "path",
    {
      d: "M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",
      key: "sc7q7i"
    }
  ]
];
const Funnel = createLucideIcon("funnel", __iconNode$1);
const __iconNode = [["path", { d: "M5 12h14", key: "1ays0h" }]];
const Minus = createLucideIcon("minus", __iconNode);
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
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: open && /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: { opacity: 0, scale: 0.95, y: -5 }, animate: { opacity: 1, scale: 1, y: 0 }, exit: { opacity: 0, scale: 0.95, y: -5 }, transition: { duration: 0.1 }, className: "absolute right-0 top-full mt-1 w-44 bg-card border border-border rounded-md shadow-xl z-[300] py-1 flex flex-col", children }) })
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
function QuestionEditorModal({
  sourceId,
  initialData,
  onClose,
  onSave
}) {
  const [name, setName] = reactExports.useState(initialData?.name || "");
  const [description, setDescription] = reactExports.useState(initialData?.description || "");
  const [answerText, setAnswerText] = reactExports.useState(initialData?.answerText || "");
  const [questionUrl, setQuestionUrl] = reactExports.useState(initialData?.questionUrl || "");
  const [answerUrl, setAnswerUrl] = reactExports.useState(initialData?.answerUrl || "");
  const [isCorrect, setIsCorrect] = reactExports.useState(initialData?.isCorrect);
  const [qImageFile, setQImageFile] = reactExports.useState(null);
  const [aImageFile, setAImageFile] = reactExports.useState(null);
  const qFileRef = reactExports.useRef(null);
  const aFileRef = reactExports.useRef(null);
  const [qPreview, setQPreview] = reactExports.useState(null);
  const [aPreview, setAPreview] = reactExports.useState(null);
  const { writeMedia, readMediaAsBlob } = useWorkspaceContext();
  const [isSaving, setIsSaving] = reactExports.useState(false);
  reactExports.useEffect(() => {
    if (qImageFile) {
      const url = URL.createObjectURL(qImageFile);
      setQPreview(url);
      return () => URL.revokeObjectURL(url);
    } else if (initialData?.questionImageKey) {
      let active = true;
      readMediaAsBlob(initialData.questionImageKey).then((blob) => {
        if (blob && active) setQPreview(URL.createObjectURL(blob));
      });
      return () => {
        active = false;
      };
    } else {
      setQPreview(null);
      return () => {
      };
    }
  }, [qImageFile, initialData?.questionImageKey, readMediaAsBlob]);
  reactExports.useEffect(() => {
    if (aImageFile) {
      const url = URL.createObjectURL(aImageFile);
      setAPreview(url);
      return () => URL.revokeObjectURL(url);
    } else if (initialData?.answerImageKey) {
      let active = true;
      readMediaAsBlob(initialData.answerImageKey).then((blob) => {
        if (blob && active) setAPreview(URL.createObjectURL(blob));
      });
      return () => {
        active = false;
      };
    } else {
      setAPreview(null);
      return () => {
      };
    }
  }, [aImageFile, initialData?.answerImageKey, readMediaAsBlob]);
  const handleSave = async () => {
    if (!name.trim()) return;
    setIsSaving(true);
    let qKey = initialData?.questionImageKey;
    let aKey = initialData?.answerImageKey;
    if (qImageFile) {
      qKey = `q_img_${Date.now()}`;
      await writeMedia(qKey, qImageFile);
    } else if (qPreview === null) {
      qKey = void 0;
    }
    if (aImageFile) {
      aKey = `a_img_${Date.now()}`;
      await writeMedia(aKey, aImageFile);
    } else if (aPreview === null) {
      aKey = void 0;
    }
    await onSave(sourceId, {
      ...initialData ? { id: initialData.id } : {},
      name: name.trim(),
      description: description.trim() || void 0,
      answerText: answerText.trim() || void 0,
      questionUrl: questionUrl.trim() || void 0,
      answerUrl: answerUrl.trim() || void 0,
      questionImageKey: qKey,
      answerImageKey: aKey,
      isCorrect
    });
    setIsSaving(false);
    onClose();
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "h-full flex flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between px-4 py-3 border-b border-border shrink-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-sm font-bold text-foreground flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(FilePlus, { className: "h-4 w-4 text-primary" }),
        " ",
        initialData ? "Edit Question" : "New Question"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: onClose, className: "p-1 hover:bg-muted rounded text-muted-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4" }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 overflow-y-auto p-4 space-y-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] font-bold text-muted-foreground uppercase tracking-wider", children: "Question Name/Number" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { autoFocus: true, value: name, onChange: (e) => setName(e.target.value), placeholder: "e.g. Q12 or JEE Main 2024", className: "h-9 text-xs" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] font-bold text-muted-foreground uppercase tracking-wider", children: "Question Image / URL" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative group aspect-video rounded-xl bg-muted/30 border-2 border-dashed border-border flex items-center justify-center overflow-hidden mb-2", children: [
          qPreview || questionUrl ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: qPreview || questionUrl, className: "w-full h-full object-contain", alt: "Preview", onError: (e) => e.currentTarget.style.display = "none" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => {
              setQPreview(null);
              setQuestionUrl("");
              setQImageFile(null);
            }, className: "absolute top-2 right-2 p-1 bg-black/60 text-white rounded-md opacity-0 group-hover:opacity-100 transition-opacity", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4" }) })
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center p-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Image, { className: "h-8 w-8 mx-auto text-muted-foreground/20 mb-2" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground/40", children: "URL auto-fetch / File drop" })
          ] }),
          !(qPreview || questionUrl) && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white text-[10px] font-medium", children: "Auto-fetching from Source" }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: questionUrl, onChange: (e) => {
            setQuestionUrl(e.target.value);
            if (qImageFile) setQImageFile(null);
          }, placeholder: "Enter question URL", className: "flex-1 h-8 text-xs" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", size: "icon", className: "h-8 w-8 shrink-0", onClick: () => qFileRef.current?.click(), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Upload, { className: "h-4 w-4" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { ref: qFileRef, type: "file", accept: "image/*", className: "hidden", onChange: (e) => {
            if (e.target.files?.[0]) {
              setQImageFile(e.target.files[0]);
              setQuestionUrl("");
            }
          } })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 pt-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] font-bold text-muted-foreground uppercase tracking-wider", children: "Answer Details" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { value: answerText, onChange: (e) => setAnswerText(e.target.value), placeholder: "Plain text answer / steps...", rows: 3, className: "w-full text-xs px-3 py-2 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground resize-none focus:outline-none focus:ring-2 focus:ring-primary/30" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: answerUrl, onChange: (e) => {
              setAnswerUrl(e.target.value);
              if (aImageFile) setAImageFile(null);
            }, placeholder: "Answer image URL", className: "flex-1 h-8 text-xs" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", size: "icon", className: "h-8 w-8 shrink-0", onClick: () => aFileRef.current?.click(), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Image, { className: "h-4 w-4" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { ref: aFileRef, type: "file", accept: "image/*", className: "hidden", onChange: (e) => {
              if (e.target.files?.[0]) {
                setAImageFile(e.target.files[0]);
                setAnswerUrl("");
              }
            } })
          ] }),
          (aPreview || answerUrl) && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "h-20 rounded-lg bg-muted/50 border border-border overflow-hidden relative group", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: aPreview || answerUrl, className: "w-full h-full object-contain", alt: "" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => {
              setAPreview(null);
              setAnswerUrl("");
              setAImageFile(null);
            }, className: "absolute top-1 right-1 p-1 bg-black/60 text-white rounded-md opacity-0 group-hover:opacity-100 transition-opacity", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-3 w-3" }) })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-2 space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] font-bold text-muted-foreground uppercase tracking-wider", children: "Option Status" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                onClick: () => setIsCorrect(true),
                className: cn(
                  "flex-1 py-1.5 rounded-lg border flex items-center justify-center gap-1.5 text-[10px] font-bold transition-all",
                  isCorrect === true ? "bg-green-500/10 border-green-500 text-green-500" : "bg-muted text-muted-foreground border-transparent hover:bg-muted/80"
                ),
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-3.5 w-3.5" }),
                  " Correct"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                onClick: () => setIsCorrect(false),
                className: cn(
                  "flex-1 py-1.5 rounded-lg border flex items-center justify-center gap-1.5 text-[10px] font-bold transition-all",
                  isCorrect === false ? "bg-red-500/10 border-red-500 text-red-500" : "bg-muted text-muted-foreground border-transparent hover:bg-muted/80"
                ),
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-3.5 w-3.5" }),
                  " Incorrect"
                ]
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] font-bold text-muted-foreground uppercase tracking-wider", children: "Description" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { value: description, onChange: (e) => setDescription(e.target.value), placeholder: "Add description...", rows: 2, className: "w-full text-xs px-3 py-2 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground resize-none focus:outline-none focus:ring-2 focus:ring-primary/30" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4 border-t border-border bg-muted/20 shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", size: "sm", className: "flex-1 text-xs", onClick: onClose, children: "Cancel" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", className: "flex-1 text-xs font-bold", onClick: handleSave, disabled: isSaving, children: isSaving ? "Saving..." : initialData ? "Save Changes" : "Add Question" })
    ] }) })
  ] });
}
function BookmarkSelectModal({
  sourceId,
  questionId,
  bookmarkFolders,
  setBookmarkFolders,
  onClose
}) {
  const [newFolderName, setNewFolderName] = reactExports.useState("");
  const toggleBookmark = (folderId) => {
    setBookmarkFolders(bookmarkFolders.map((f) => {
      if (f.id === folderId) {
        const exists = f.bookmarks.some((b) => b.sourceId === sourceId && b.questionId === questionId);
        if (exists) {
          return { ...f, bookmarks: f.bookmarks.filter((b) => !(b.sourceId === sourceId && b.questionId === questionId)) };
        } else {
          return { ...f, bookmarks: [...f.bookmarks, { sourceId, questionId }] };
        }
      }
      return f;
    }));
  };
  const createFolder = () => {
    if (!newFolderName.trim()) return;
    const newFolder = {
      id: Date.now().toString(),
      name: newFolderName.trim(),
      bookmarks: [{ sourceId, questionId }]
    };
    setBookmarkFolders([...bookmarkFolders, newFolder]);
    setNewFolderName("");
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-[400] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm", onClick: onClose, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, scale: 0.95 },
      animate: { opacity: 1, scale: 1 },
      exit: { opacity: 0, scale: 0.95 },
      onClick: (e) => e.stopPropagation(),
      className: "bg-card border border-border rounded-xl shadow-2xl w-full max-w-sm p-4 flex flex-col max-h-[80vh]",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-sm", children: "Save to Bookmark Folder" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: onClose, className: "p-1 hover:bg-muted rounded text-muted-foreground hover:text-foreground transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4" }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 overflow-y-auto space-y-1 mb-4 min-h-[100px]", children: bookmarkFolders.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground text-center py-4", children: "No folders yet." }) : bookmarkFolders.map((f) => {
          const isSaved = f.bookmarks.some((b) => b.sourceId === sourceId && b.questionId === questionId);
          return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { onClick: () => toggleBookmark(f.id), className: "flex items-center justify-between p-2 hover:bg-muted rounded-lg cursor-pointer transition-colors", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium", children: f.name }),
            isSaved && /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-4 w-4 text-yellow-500" })
          ] }, f.id);
        }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 pt-3 border-t border-border", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { placeholder: "New folder name", value: newFolderName, onChange: (e) => setNewFolderName(e.target.value), onKeyDown: (e) => e.key === "Enter" && createFolder(), className: "h-8 text-xs" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", className: "h-8 shrink-0", onClick: createFolder, disabled: !newFolderName.trim(), children: "Create & Save" })
        ] })
      ]
    }
  ) });
}
function WorkspaceImage({ mediaKey, fallbackUrl, className }) {
  const { readMediaAsBlob } = useWorkspaceContext();
  const [url, setUrl] = reactExports.useState(null);
  reactExports.useEffect(() => {
    if (mediaKey) {
      readMediaAsBlob(mediaKey).then((blob) => {
        if (blob) setUrl(URL.createObjectURL(blob));
      });
    }
    return () => {
      if (url) URL.revokeObjectURL(url);
    };
  }, [mediaKey, readMediaAsBlob]);
  const finalUrl = url || fallbackUrl;
  if (!finalUrl) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: finalUrl, className, alt: "", loading: "lazy" });
}
let tesseractPromise = null;
const loadTesseract = () => {
  if (tesseractPromise) return tesseractPromise;
  tesseractPromise = new Promise((resolve, reject) => {
    if (window.Tesseract) {
      resolve(window.Tesseract);
      return;
    }
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/tesseract.js@5/dist/tesseract.min.js";
    script.onload = () => resolve(window.Tesseract);
    script.onerror = () => {
      tesseractPromise = null;
      reject(new Error("Failed to load Tesseract.js"));
    };
    document.body.appendChild(script);
  });
  return tesseractPromise;
};
function ZoomableImage({ src }) {
  const [scale, setScale] = reactExports.useState(1);
  const [pos, setPos] = reactExports.useState({ x: 0, y: 0 });
  const [dragging, setDragging] = reactExports.useState(false);
  const [startPos, setStartPos] = reactExports.useState({ x: 0, y: 0 });
  const containerRef = reactExports.useRef(null);
  const imgRef = reactExports.useRef(null);
  const [isExtracting, setIsExtracting] = reactExports.useState(false);
  const [extracted, setExtracted] = reactExports.useState(false);
  const onPointerDown = (e) => {
    if (e.button !== 2 && e.button !== 0) return;
    e.preventDefault();
    setDragging(true);
    setStartPos({ x: e.clientX - pos.x, y: e.clientY - pos.y });
    e.target.setPointerCapture(e.pointerId);
  };
  const onPointerMove = (e) => {
    if (!dragging) return;
    setPos({
      x: e.clientX - startPos.x,
      y: e.clientY - startPos.y
    });
  };
  const onPointerUp = (e) => {
    setDragging(false);
    e.target.releasePointerCapture(e.pointerId);
  };
  const onWheel = (e) => {
    if (!containerRef.current) return;
    const delta = e.deltaY * -5e-3;
    const newScale = Math.min(Math.max(0.5, scale + delta), 5);
    const rect = containerRef.current.getBoundingClientRect();
    const cursorX = e.clientX - rect.left - rect.width / 2;
    const cursorY = e.clientY - rect.top - rect.height / 2;
    const newX = cursorX + (pos.x - cursorX) * (newScale / scale);
    const newY = cursorY + (pos.y - cursorY) * (newScale / scale);
    setScale(newScale);
    setPos({ x: newX, y: newY });
  };
  const handleExtractText = async () => {
    if (!imgRef.current) return;
    setIsExtracting(true);
    setExtracted(false);
    try {
      const Tesseract = await loadTesseract();
      const result = await Tesseract.recognize(src, "eng");
      const text = result.data.text.trim();
      if (text) {
        if (navigator.clipboard && navigator.clipboard.writeText) {
          await navigator.clipboard.writeText(text);
        } else {
          const textArea = document.createElement("textarea");
          textArea.value = text;
          document.body.appendChild(textArea);
          textArea.select();
          try {
            document.execCommand("copy");
          } catch (e) {
          }
          textArea.remove();
        }
        setExtracted(true);
        setTimeout(() => setExtracted(false), 2e3);
      } else {
        alert("No text found in this image.");
      }
    } catch (err) {
      console.error("OCR Error:", err);
      alert("Failed to extract text from image. If it's from an external URL, CORS restrictions might block it.");
    } finally {
      setIsExtracting(false);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ref: containerRef, className: "relative overflow-hidden bg-muted/30 border border-border rounded-lg touch-none flex-1 min-h-0", onWheel, onContextMenu: (e) => e.preventDefault(), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute right-2 top-2 z-10 flex flex-col gap-2 bg-black/50 p-1 rounded-md", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: handleExtractText, title: "Extract & Copy Text (OCR)", className: "p-1 text-white hover:bg-white/20 rounded transition-colors flex items-center justify-center", children: isExtracting ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-4 w-4 animate-spin" }) : extracted ? /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "h-4 w-4 text-green-400" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Copy, { className: "h-4 w-4" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setScale((s) => Math.min(s + 0.2, 5)), className: "p-1 text-white hover:bg-white/20 rounded transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ZoomIn, { className: "h-4 w-4" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => {
        setScale(1);
        setPos({ x: 0, y: 0 });
      }, className: "p-1 text-white hover:bg-white/20 rounded text-[10px] font-bold font-mono text-center transition-colors", children: "1x" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setScale((s) => Math.max(s - 0.2, 0.5)), className: "p-1 text-white hover:bg-white/20 rounded transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ZoomOut, { className: "h-4 w-4" }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full h-full flex items-center justify-center overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "img",
      {
        ref: imgRef,
        src,
        alt: "Viewer",
        className: "max-w-full max-h-full object-contain transition-transform select-none",
        crossOrigin: "anonymous",
        style: {
          transform: `translate(${pos.x}px, ${pos.y}px) scale(${scale})`,
          cursor: dragging ? "grabbing" : "grab"
        },
        onPointerDown,
        onPointerMove,
        onPointerUp,
        onPointerCancel: onPointerUp,
        draggable: false
      }
    ) })
  ] });
}
function ZoomableWorkspaceImage({ mediaKey, fallbackUrl }) {
  const { readMediaAsBlob } = useWorkspaceContext();
  const [url, setUrl] = reactExports.useState(null);
  reactExports.useEffect(() => {
    if (mediaKey) {
      readMediaAsBlob(mediaKey).then((blob) => {
        if (blob) setUrl(URL.createObjectURL(blob));
      });
    }
    return () => {
      if (url) URL.revokeObjectURL(url);
    };
  }, [mediaKey, readMediaAsBlob]);
  const finalUrl = url || fallbackUrl;
  if (!finalUrl) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ZoomableImage, { src: finalUrl });
}
function QuestionDetailModal({
  question,
  sourceId,
  type,
  onClose,
  isBookmarked,
  onBookmark
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      className: "fixed inset-0 bg-black/80 backdrop-blur-sm z-[100] flex items-center justify-center p-2 sm:p-4",
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      onClick: onClose,
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          className: "bg-card border border-border rounded-xl flex flex-col w-full max-w-4xl shadow-2xl h-[95vh] md:h-[85vh] overflow-hidden",
          initial: { scale: 0.95, y: 20 },
          animate: { scale: 1, y: 0 },
          exit: { scale: 0.95, y: 20 },
          onClick: (e) => e.stopPropagation(),
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between px-4 py-3 border-b border-border shrink-0 bg-muted/20", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-lg font-bold text-foreground flex items-center gap-2", children: [
                question.name,
                " ",
                type === "answer" ? "- Answer" : "",
                /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: (e) => {
                  e.stopPropagation();
                  onBookmark();
                }, className: "p-1 rounded-md transition-colors hover:bg-muted", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Bookmark, { className: cn("h-5 w-5", isBookmarked ? "fill-yellow-500 text-yellow-500" : "text-muted-foreground") }) })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: onClose, className: "p-2 bg-muted hover:bg-accent rounded-full text-muted-foreground hover:text-foreground transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-5 w-5" }) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 overflow-hidden flex flex-col p-4 space-y-4", children: type === "question" ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-h-0 flex flex-col space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground shrink-0", children: "Scroll to zoom, drag to pan (Right-click or Left-click)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(ZoomableWorkspaceImage, { mediaKey: question.questionImageKey, fallbackUrl: question.questionUrl })
              ] }),
              question.description && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "shrink-0 space-y-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-sm font-bold text-foreground flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(BookCopy, { className: "h-4 w-4 text-primary" }),
                  " Description"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-muted/30 p-3 rounded-lg border border-border text-sm text-foreground whitespace-pre-wrap leading-relaxed max-h-32 overflow-y-auto", children: question.description })
              ] })
            ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              question.answerText && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-muted/30 p-4 rounded-lg border border-border text-sm text-foreground whitespace-pre-wrap leading-relaxed shrink-0 max-h-40 overflow-y-auto", children: question.answerText }),
              (question.answerImageKey || question.answerUrl) && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-h-0 flex flex-col space-y-2 pt-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground shrink-0", children: "Scroll to zoom, drag to pan" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(ZoomableWorkspaceImage, { mediaKey: question.answerImageKey, fallbackUrl: question.answerUrl })
              ] })
            ] }) })
          ]
        }
      )
    }
  );
}
function StopwatchWidget({ onClose }) {
  const [isRunning, setIsRunning] = reactExports.useState(false);
  const [savedTimes, setSavedTimes] = reactExports.useState([]);
  const lastUpdateRef = reactExports.useRef(0);
  const rafRef = reactExports.useRef(0);
  const displayRef = reactExports.useRef(null);
  const currentElapsedRef = reactExports.useRef(0);
  const formatTime = (ms) => {
    const totalSecs = Math.floor(ms / 1e3);
    const mins = Math.floor(totalSecs / 60);
    const secs = totalSecs % 60;
    const millis = Math.floor(ms % 1e3 / 10);
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}.${millis.toString().padStart(2, "0")}`;
  };
  const update = reactExports.useCallback(() => {
    const now = performance.now();
    currentElapsedRef.current += now - lastUpdateRef.current;
    if (displayRef.current) {
      displayRef.current.textContent = formatTime(currentElapsedRef.current);
    }
    lastUpdateRef.current = now;
    rafRef.current = requestAnimationFrame(update);
  }, []);
  reactExports.useEffect(() => {
    if (isRunning) {
      lastUpdateRef.current = performance.now();
      rafRef.current = requestAnimationFrame(update);
    } else {
      cancelAnimationFrame(rafRef.current);
    }
    return () => cancelAnimationFrame(rafRef.current);
  }, [isRunning, update]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: -20, scale: 0.95 },
      animate: { opacity: 1, y: 0, scale: 1 },
      exit: { opacity: 0, y: -20, scale: 0.95 },
      className: "absolute top-4 left-1/2 -translate-x-1/2 z-50 bg-card/95 backdrop-blur-md border border-border shadow-2xl rounded-2xl p-4 w-72 flex flex-col",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center mb-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-xs font-bold text-muted-foreground uppercase tracking-widest flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-3.5 w-3.5" }),
            " Stopwatch"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: onClose, className: "p-1 hover:bg-muted rounded text-muted-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-3.5 w-3.5" }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center py-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { ref: displayRef, className: "text-4xl font-black tabular-nums text-foreground", children: formatTime(currentElapsedRef.current) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 mb-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: isRunning ? "destructive" : "default", className: "flex-1 font-bold h-8 text-xs", onClick: () => {
            setIsRunning(!isRunning);
          }, children: isRunning ? "Stop" : currentElapsedRef.current > 0 ? "Resume" : "Start" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "outline", className: "flex-1 font-bold h-8 text-xs", onClick: () => {
            if (currentElapsedRef.current > 0) setSavedTimes((prev) => [currentElapsedRef.current, ...prev]);
            setIsRunning(false);
          }, children: "Save" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "outline", className: "flex-1 font-bold h-8 text-xs", onClick: () => {
            setIsRunning(false);
            currentElapsedRef.current = 0;
            if (displayRef.current) displayRef.current.textContent = formatTime(0);
            setSavedTimes([]);
          }, children: "Reset" })
        ] }),
        savedTimes.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 pt-2 border-t border-border max-h-32 overflow-y-auto space-y-1 pr-1", children: savedTimes.map((t, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center text-xs px-2 py-1.5 bg-muted/50 rounded-md", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground font-semibold", children: [
            "Lap ",
            savedTimes.length - i
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono font-bold text-foreground", children: formatTime(t) })
        ] }, i)) })
      ]
    }
  );
}
function SavesPage() {
  const [subjects, setSubjects] = useLocalStorage("jee_saves_subjects_v1", []);
  const [allQuestions, setAllQuestions] = useLocalStorage("jee_saves_questions_v1", {});
  const [bookmarkFolders, setBookmarkFolders] = useLocalStorage("jee_saves_bookmarks_v1", []);
  const [isLoading, setIsLoading] = reactExports.useState(false);
  const { savesViewMode, setSavesViewMode } = useAppContext();
  const [folderSubjId, setFolderSubjId] = reactExports.useState(null);
  const [folderChapId, setFolderChapId] = reactExports.useState(null);
  const [folderSearch, setFolderSearch] = reactExports.useState("");
  const currentFolderSubj = reactExports.useMemo(() => subjects.find((s) => s.id === folderSubjId), [subjects, folderSubjId]);
  const currentFolderChap = reactExports.useMemo(() => currentFolderSubj?.chapters.find((c) => c.id === folderChapId), [currentFolderSubj, folderChapId]);
  const [activeItemId, setActiveItemId] = reactExports.useState(null);
  const [activeSourceId, setActiveSourceId] = reactExports.useState(null);
  const [activeBookmarkFolderId, setActiveBookmarkFolderId] = reactExports.useState(null);
  const [renamingId, setRenamingId] = reactExports.useState(null);
  const [renameVal, setRenameVal] = reactExports.useState("");
  const [showSidebar, setShowSidebar] = reactExports.useState(true);
  const [showBookmarksPanel, setShowBookmarksPanel] = reactExports.useState(false);
  const [showAddModal, setShowAddModal] = reactExports.useState(false);
  const [editingQuestion, setEditingQuestion] = reactExports.useState(null);
  const [detailQuestion, setDetailQuestion] = reactExports.useState(null);
  const [showAddPanel, setShowAddPanel] = reactExports.useState(false);
  const [showStopwatch, setShowStopwatch] = reactExports.useState(false);
  const [bookmarkingQuestion, setBookmarkingQuestion] = reactExports.useState(null);
  const [newBookmarkFolderName, setNewBookmarkFolderName] = reactExports.useState("");
  const [filterBy, setFilterBy] = reactExports.useState("date");
  const [filterOpen, setFilterOpen] = reactExports.useState(false);
  const [isCompactMode, setIsCompactMode] = reactExports.useState(false);
  const [isPrinting, setIsPrinting] = reactExports.useState(false);
  const { writeMedia, readMediaAsArrayBuffer } = useWorkspaceContext();
  reactExports.useEffect(() => {
    if (isPrinting) {
      const timer = setTimeout(() => {
        window.print();
        setIsPrinting(false);
      }, 1500);
      return () => clearTimeout(timer);
    }
    return () => {
    };
  }, [isPrinting]);
  const getSourceName = (id) => {
    for (const sub of subjects) {
      for (const chap of sub.chapters) {
        const src = chap.sources.find((s) => s.id === id);
        if (src) return `${sub.name} > ${chap.name} > ${src.name}`;
      }
    }
    return "Export";
  };
  const addSubject = reactExports.useCallback(() => {
    const id = Date.now().toString();
    const newSubjects = [...subjects, { id, name: "New Subject", expanded: true, chapters: [] }];
    setSubjects(newSubjects);
    setRenamingId(id);
    setRenameVal("New Subject");
  }, [subjects]);
  const addChapter = reactExports.useCallback((subjectId) => {
    const id = Date.now().toString();
    const newSubjects = subjects.map((s) => s.id === subjectId ? { ...s, expanded: true, chapters: [...s.chapters, { id, name: "New Chapter", expanded: true, sources: [] }] } : s);
    setSubjects(newSubjects);
    setRenamingId(id);
    setRenameVal("New Chapter");
  }, [subjects]);
  const addSource = reactExports.useCallback((subjectId, chapterId) => {
    const id = Date.now().toString();
    const newSubjects = subjects.map((s) => s.id === subjectId ? { ...s, chapters: s.chapters.map((c) => c.id === chapterId ? { ...c, expanded: true, sources: [...c.sources, { id, name: "New Source" }] } : c) } : s);
    setSubjects(newSubjects);
    setRenamingId(id);
    setRenameVal("New Source");
  }, [subjects]);
  const commitRename = () => {
    if (!renamingId || !renameVal.trim()) {
      setRenamingId(null);
      return;
    }
    const newSubjects = subjects.map((s) => {
      if (s.id === renamingId) return { ...s, name: renameVal.trim() };
      return {
        ...s,
        chapters: s.chapters.map((c) => {
          if (c.id === renamingId) return { ...c, name: renameVal.trim() };
          return {
            ...c,
            sources: c.sources.map((src) => src.id === renamingId ? { ...src, name: renameVal.trim() } : src)
          };
        })
      };
    });
    setSubjects(newSubjects);
    setRenamingId(null);
  };
  const deleteSubject = reactExports.useCallback((id) => {
    const newSubjects = subjects.filter((s) => s.id !== id);
    setSubjects(newSubjects);
  }, [subjects]);
  const deleteChapter = reactExports.useCallback((subjectId, chapterId) => {
    const newSubjects = subjects.map((s) => s.id === subjectId ? { ...s, chapters: s.chapters.filter((c) => c.id !== chapterId) } : s);
    setSubjects(newSubjects);
  }, [subjects]);
  const deleteSource = reactExports.useCallback((subjectId, chapterId, sourceId) => {
    const newSubjects = subjects.map((s) => s.id === subjectId ? { ...s, chapters: s.chapters.map((c) => c.id === chapterId ? { ...c, sources: c.sources.filter((src) => src.id !== sourceId) } : c) } : s);
    setSubjects(newSubjects);
    if (activeSourceId === sourceId) setActiveSourceId(null);
  }, [subjects, activeSourceId]);
  const toggleSubject = (id) => {
    const newSubjects = subjects.map((s) => s.id === id ? { ...s, expanded: !s.expanded } : s);
    setSubjects(newSubjects);
  };
  const toggleChapter = (subjectId, chapterId) => {
    const newSubjects = subjects.map((s) => s.id === subjectId ? { ...s, chapters: s.chapters.map((c) => c.id === chapterId ? { ...c, expanded: !c.expanded } : c) } : s);
    setSubjects(newSubjects);
  };
  const isBookmarked = reactExports.useCallback((sourceId, questionId) => {
    return bookmarkFolders.some((f) => f.bookmarks.some((b) => b.sourceId === sourceId && b.questionId === questionId));
  }, [bookmarkFolders]);
  reactExports.useEffect(() => {
    const onKey = (e) => {
      const tag = e.target?.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA") return;
      let activeItemInfo = null;
      if (activeItemId) {
        for (const sub of subjects) {
          if (sub.id === activeItemId) {
            activeItemInfo = { type: "subject", subjectId: sub.id, name: sub.name };
            break;
          }
          for (const chap of sub.chapters) {
            if (chap.id === activeItemId) {
              activeItemInfo = { type: "chapter", subjectId: sub.id, chapterId: chap.id, name: chap.name };
              break;
            }
            for (const src of chap.sources) {
              if (src.id === activeItemId) {
                activeItemInfo = { type: "source", subjectId: sub.id, chapterId: chap.id, sourceId: src.id, name: src.name };
                break;
              }
            }
          }
        }
      }
      if (!e.ctrlKey && !e.metaKey && e.key.toLowerCase() === "n") {
        e.preventDefault();
        if (!activeItemInfo) addSubject();
        else if (activeItemInfo.type === "subject") addChapter(activeItemInfo.subjectId);
        else if (activeItemInfo.type === "chapter") addSource(activeItemInfo.subjectId, activeItemInfo.chapterId);
      } else if (e.key === "F2") {
        if (!activeItemInfo) return;
        e.preventDefault();
        setRenamingId(activeItemId);
        setRenameVal(activeItemInfo.name);
      } else if (e.key === "Delete") {
        if (!activeItemInfo) return;
        e.preventDefault();
        if (activeItemInfo.type === "subject") deleteSubject(activeItemInfo.subjectId);
        else if (activeItemInfo.type === "chapter") deleteChapter(activeItemInfo.subjectId, activeItemInfo.chapterId);
        else if (activeItemInfo.type === "source") deleteSource(activeItemInfo.subjectId, activeItemInfo.chapterId, activeItemInfo.sourceId);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [
    activeItemId,
    subjects,
    addSubject,
    addChapter,
    addSource,
    deleteSubject,
    deleteChapter,
    deleteSource,
    setRenamingId,
    // These are fine as they only affect local UI state
    setRenameVal
    //
  ]);
  const handleSaveQuestion = async (sourceId, questionData) => {
    if (questionData.id) {
      setAllQuestions((prev) => ({
        ...prev,
        [sourceId]: (prev[sourceId] || []).map((q) => q.id === questionData.id ? { ...q, ...questionData } : q)
      }));
    } else {
      const newQuestion = {
        ...questionData,
        id: Date.now().toString(),
        createdAt: Date.now()
      };
      setAllQuestions((prev) => ({ ...prev, [sourceId]: [...prev[sourceId] || [], newQuestion] }));
    }
  };
  const deleteQuestion = (sourceId, questionId) => {
    setAllQuestions((prev) => ({
      ...prev,
      [sourceId]: (prev[sourceId] || []).filter((q) => q.id !== questionId)
    }));
  };
  const activeQuestionsWithSource = reactExports.useMemo(() => {
    if (activeBookmarkFolderId) {
      const folder = bookmarkFolders.find((f) => f.id === activeBookmarkFolderId);
      if (!folder) return [];
      const qs = [];
      folder.bookmarks.forEach((b) => {
        const srcQs = allQuestions[b.sourceId] || [];
        const q = srcQs.find((q2) => q2.id === b.questionId);
        if (q) qs.push({ question: q, sourceId: b.sourceId });
      });
      return qs;
    }
    if (activeSourceId) {
      return (allQuestions[activeSourceId] || []).map((q) => ({ question: q, sourceId: activeSourceId }));
    }
    return [];
  }, [activeSourceId, activeBookmarkFolderId, bookmarkFolders, allQuestions]);
  const sortedQuestions = reactExports.useMemo(() => {
    let qs = [...activeQuestionsWithSource];
    switch (filterBy) {
      case "date":
        qs.sort((a, b) => b.question.createdAt - a.question.createdAt);
        break;
      case "name":
        qs.sort((a, b) => a.question.name.localeCompare(b.question.name));
        break;
      case "number":
        qs.sort((a, b) => {
          const numA = parseInt(a.question.name.match(/\d+/)?.[0] || "0");
          const numB = parseInt(b.question.name.match(/\d+/)?.[0] || "0");
          if (numA !== numB) return numA - numB;
          return a.question.name.localeCompare(b.question.name);
        });
        break;
      case "solved":
        qs.sort((a, b) => (b.question.correctCount || 0) - (a.question.correctCount || 0));
        break;
      case "unsolved":
        qs.sort((a, b) => (b.question.wrongCount || 0) - (a.question.wrongCount || 0));
        break;
      case "review":
        qs = qs.filter((a) => !a.question.nextReview || a.question.nextReview <= Date.now());
        qs.sort((a, b) => (a.question.nextReview || 0) - (b.question.nextReview || 0));
        break;
    }
    return qs;
  }, [activeQuestionsWithSource, filterBy]);
  const QuestionCard = ({ question, sourceId }) => {
    const [isAnswerRevealed, setIsAnswerRevealed] = reactExports.useState(false);
    const [isMinimized, setIsMinimized] = reactExports.useState(false);
    const hasAnswer = !!(question.answerText || question.answerImageKey || question.answerUrl);
    const bookmarked = isBookmarked(sourceId, question.id);
    if (isCompactMode) {
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "bg-card border border-border rounded-xl flex flex-col group overflow-hidden shadow-sm hover:shadow-md transition-shadow relative p-2",
          onClick: () => setDetailQuestion({ type: "question", question, sourceId }),
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center pb-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-xs truncate cursor-pointer", children: question.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    onClick: (e) => {
                      e.stopPropagation();
                      setBookmarkingQuestion({ sourceId, questionId: question.id });
                    },
                    className: cn("p-1 transition-opacity", bookmarked ? "opacity-100" : "opacity-0 group-hover:opacity-100"),
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Bookmark, { className: cn("h-3.5 w-3.5 transition-colors", bookmarked ? "fill-yellow-500 text-yellow-500" : "text-muted-foreground hover:text-foreground") })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    onClick: (e) => {
                      e.stopPropagation();
                      setIsMinimized(!isMinimized);
                    },
                    className: "p-1 opacity-0 group-hover:opacity-100 transition-opacity text-muted-foreground hover:text-foreground",
                    children: isMinimized ? /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-3.5 w-3.5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Minus, { className: "h-3.5 w-3.5" })
                  }
                )
              ] })
            ] }),
            !isMinimized && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-white dark:bg-zinc-900/50 w-full flex items-center justify-center cursor-pointer rounded-md overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(WorkspaceImage, { mediaKey: question.questionImageKey, fallbackUrl: question.questionUrl, className: "w-full h-auto object-contain" }) })
          ]
        }
      );
    }
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "bg-card border border-border rounded-xl flex flex-col group overflow-hidden shadow-sm hover:shadow-md transition-shadow relative",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center px-3 py-2 bg-muted/30 border-b border-border cursor-pointer", onClick: () => setDetailQuestion({ type: "question", question, sourceId }), children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-sm truncate", children: question.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: (e) => {
                    e.stopPropagation();
                    setBookmarkingQuestion({ sourceId, questionId: question.id });
                  },
                  className: cn("p-1 transition-opacity", bookmarked ? "opacity-100 md:opacity-100" : "opacity-100 md:opacity-0 group-hover:opacity-100"),
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Bookmark, { className: cn("h-4 w-4 transition-colors", bookmarked ? "fill-yellow-500 text-yellow-500" : "text-muted-foreground hover:text-foreground") })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: (e) => {
                    e.stopPropagation();
                    setIsMinimized(!isMinimized);
                  },
                  className: "p-1 transition-colors text-muted-foreground hover:text-foreground",
                  children: isMinimized ? /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-4 w-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Minus, { className: "h-4 w-4" })
                }
              ),
              question.isCorrect === true && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-6 h-6 rounded-md bg-green-500/10 flex items-center justify-center border border-green-500/20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-3.5 w-3.5 text-green-500" }) }),
              question.isCorrect === false && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-6 h-6 rounded-md bg-red-500/10 flex items-center justify-center border border-red-500/20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-3.5 w-3.5 text-red-500" }) }),
              question.isCorrect === void 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-6 h-6 rounded-md bg-muted/50 flex items-center justify-center border border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Minus, { className: "h-3.5 w-3.5 text-muted-foreground" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(ThreeDotMenu, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { icon: Pencil, label: "Edit Question", onClick: (e) => {
                  e.stopPropagation();
                  setEditingQuestion({ sourceId, question });
                } }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { icon: Trash2, label: "Delete Question", destructive: true, onClick: (e) => {
                  e.stopPropagation();
                  deleteQuestion(sourceId, question.id);
                } })
              ] })
            ] })
          ] }),
          !isMinimized && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-white dark:bg-zinc-900/50 w-full flex items-center justify-center p-2 cursor-pointer", onClick: () => setDetailQuestion({ type: "question", question, sourceId }), children: /* @__PURE__ */ jsxRuntimeExports.jsx(WorkspaceImage, { mediaKey: question.questionImageKey, fallbackUrl: question.questionUrl, className: "w-full h-auto object-contain rounded-md" }) }),
            hasAnswer && /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "p-3 text-xs bg-muted/20 border-t border-border border-dashed cursor-pointer relative group overflow-hidden",
                onClick: (e) => {
                  e.stopPropagation();
                  if (!isAnswerRevealed) {
                    setIsAnswerRevealed(true);
                  } else {
                    setDetailQuestion({ type: "answer", question, sourceId });
                  }
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn("transition-all duration-300", !isAnswerRevealed && "blur-[6px] select-none opacity-50"), children: [
                    question.answerText && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-2 whitespace-pre-wrap font-medium text-blue-500", children: question.answerText }),
                    (question.answerImageKey || question.answerUrl) && /* @__PURE__ */ jsxRuntimeExports.jsx(WorkspaceImage, { mediaKey: question.answerImageKey, fallbackUrl: question.answerUrl, className: "w-full max-h-40 object-contain rounded-md border border-border" })
                  ] }),
                  !isAnswerRevealed && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "bg-background/90 text-foreground px-3 py-1.5 rounded-full text-xs font-semibold shadow-sm flex items-center gap-1.5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "h-3.5 w-3.5" }),
                    " Click to Reveal Answer"
                  ] }) })
                ]
              }
            )
          ] })
        ]
      }
    );
  };
  const renderSavesFolderExplorer = () => {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 flex flex-col h-full overflow-hidden bg-background", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 px-4 py-3 border-b border-border bg-card/50 backdrop-blur-md shrink-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 flex-wrap min-w-0 text-sm", children: [
          folderSubjId !== null && /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              variant: "ghost",
              size: "sm",
              onClick: () => {
                if (folderChapId) setFolderChapId(null);
                else setFolderSubjId(null);
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
                setFolderSubjId(null);
                setFolderChapId(null);
              },
              className: cn(
                "flex items-center gap-1.5 font-bold transition-colors hover:text-primary",
                !folderSubjId ? "text-foreground" : "text-muted-foreground"
              ),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(FolderOpen, { className: "h-4 w-4 text-primary shrink-0" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Saves Bank" })
              ]
            }
          ),
          currentFolderSubj && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground font-semibold", children: "/" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: () => setFolderChapId(null),
                className: cn(
                  "font-semibold transition-colors hover:text-primary truncate max-w-[140px] sm:max-w-[200px]",
                  !folderChapId ? "text-foreground font-bold" : "text-muted-foreground"
                ),
                children: currentFolderSubj.name
              }
            )
          ] }),
          currentFolderChap && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground font-semibold", children: "/" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-foreground truncate max-w-[140px] sm:max-w-[200px]", children: currentFolderChap.name })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 shrink-0 flex-wrap", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex-1 sm:w-48", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-2.5 top-2.5 h-3.5 w-3.5 text-muted-foreground" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                value: folderSearch,
                onChange: (e) => setFolderSearch(e.target.value),
                placeholder: "Search saves bank...",
                className: "h-8 pl-8 text-xs bg-muted/50 border-border rounded-lg"
              }
            ),
            folderSearch && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setFolderSearch(""), className: "absolute right-2 top-2 text-muted-foreground hover:text-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-3.5 w-3.5" }) })
          ] }),
          !folderSubjId ? /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", onClick: addSubject, className: "h-8 gap-1.5 text-xs font-semibold shadow-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(FolderPlus, { className: "h-3.5 w-3.5" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: "New Subject" })
          ] }) : !folderChapId ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-1.5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", variant: "outline", onClick: () => currentFolderSubj && addChapter(currentFolderSubj.id), className: "h-8 gap-1.5 text-xs", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(FolderPlus, { className: "h-3.5 w-3.5 text-primary" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "New Chapter" })
          ] }) }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", onClick: () => currentFolderSubj && currentFolderChap && addSource(currentFolderSubj.id, currentFolderChap.id), className: "h-8 gap-1.5 text-xs", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(FilePlus, { className: "h-3.5 w-3.5" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "New Source" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "outline", size: "sm", className: "h-8 gap-1.5 text-xs", onClick: () => setShowBookmarksPanel(true), children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Bookmark, { className: "h-3.5 w-3.5 text-yellow-500 fill-yellow-500" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden md:inline", children: "Bookmarks" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center p-0.5 bg-muted rounded-lg border border-border shrink-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                onClick: () => setSavesViewMode("folder"),
                className: cn(
                  "flex items-center gap-1 px-2.5 py-1 text-xs font-semibold rounded-md transition-all",
                  savesViewMode === "folder" ? "bg-card text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"
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
                onClick: () => setSavesViewMode("section"),
                className: cn(
                  "flex items-center gap-1 px-2.5 py-1 text-xs font-semibold rounded-md transition-all",
                  savesViewMode === "section" ? "bg-card text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"
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
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4", children: subjects.flatMap((sub) => [
          ...sub.name.toLowerCase().includes(folderSearch.toLowerCase()) ? [{ type: "subj", item: sub, subjId: sub.id, path: [sub.name] }] : [],
          ...sub.chapters?.flatMap((chap) => [
            ...chap.name.toLowerCase().includes(folderSearch.toLowerCase()) ? [{ type: "chap", item: chap, subjId: sub.id, chapId: chap.id, path: [sub.name, chap.name] }] : [],
            ...chap.sources?.map((src) => ({
              type: "src",
              item: src,
              subjId: sub.id,
              chapId: chap.id,
              srcId: src.id,
              path: [sub.name, chap.name, src.name],
              count: allQuestions[src.id]?.length || 0,
              isMatch: src.name.toLowerCase().includes(folderSearch.toLowerCase()) || allQuestions[src.id]?.some((q) => q.name.toLowerCase().includes(folderSearch.toLowerCase()) || q.description?.toLowerCase().includes(folderSearch.toLowerCase()))
            })).filter((s) => s.isMatch) || []
          ]) || []
        ]).map((res, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            onClick: () => {
              if (res.type === "subj") {
                setFolderSubjId(res.subjId);
                setFolderChapId(null);
                setFolderSearch("");
              } else if (res.type === "chap") {
                setFolderSubjId(res.subjId);
                setFolderChapId(res.chapId);
                setFolderSearch("");
              } else if (res.type === "src") {
                setActiveItemId(res.srcId);
                setActiveSourceId(res.srcId);
                setActiveBookmarkFolderId(null);
              }
            },
            className: "p-4 rounded-xl bg-card border border-border hover:border-primary/50 hover:shadow-md transition-all cursor-pointer group flex flex-col justify-between",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 mb-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-2.5 rounded-xl bg-primary/10 text-primary shrink-0 group-hover:scale-105 transition-transform", children: res.type === "src" ? /* @__PURE__ */ jsxRuntimeExports.jsx(BookCopy, { className: "h-5 w-5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Folder, { className: "h-5 w-5" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-bold text-foreground truncate group-hover:text-primary transition-colors", children: res.item.name }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground truncate mt-0.5", children: res.path.join(" / ") })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[11px] text-primary font-semibold flex items-center justify-end gap-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: res.type === "src" ? `Open Bank (${res.count} Qs)` : "Open Folder" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "h-3 w-3" })
              ] })
            ]
          },
          idx
        )) })
      ] }) : !folderSubjId ? (
        /* Level 1: Root Subject Folders */
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-between mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-sm font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Folder, { className: "h-4 w-4 text-primary" }),
            " Subject Folders (",
            subjects.length,
            ")"
          ] }) }),
          subjects.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-20 border-2 border-dashed border-border rounded-2xl max-w-lg mx-auto", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(FolderPlus, { className: "h-12 w-12 mx-auto text-primary/30 mb-3" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base font-bold text-foreground mb-1", children: "No question subjects yet" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mb-4", children: "Create your first subject folder (e.g. Physics, Chemistry, Maths) to organize question banks." }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: addSubject, className: "gap-2 text-xs font-semibold", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(FolderPlus, { className: "h-4 w-4" }),
              " Create Subject Folder"
            ] })
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4", children: [
            subjects.map((sub) => {
              const totalChaps = sub.chapters?.length || 0;
              const totalQs = sub.chapters?.reduce((acc, chap) => acc + (chap.sources?.reduce((sacc, src) => sacc + (allQuestions[src.id]?.length || 0), 0) || 0), 0) || 0;
              return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  onClick: () => setFolderSubjId(sub.id),
                  className: "group relative p-5 rounded-2xl bg-card border border-border/80 hover:border-primary/50 hover:shadow-lg hover:-translate-y-0.5 transition-all cursor-pointer flex flex-col justify-between min-h-[140px]",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-2 mb-3", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-12 w-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 flex items-center justify-center text-primary group-hover:scale-110 transition-transform shadow-inner", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Folder, { className: "h-6 w-6 fill-primary/20" }) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(ThreeDotMenu, { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { icon: FolderPlus, label: "Add Chapter", onClick: (e) => {
                          e.stopPropagation();
                          addChapter(sub.id);
                        } }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { icon: Pencil, label: "Rename", onClick: (e) => {
                          e.stopPropagation();
                          setRenamingId(sub.id);
                          setRenameVal(sub.name);
                        } }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { icon: Trash2, label: "Delete", destructive: true, onClick: (e) => {
                          e.stopPropagation();
                          deleteSubject(sub.id);
                        } })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      renamingId === sub.id ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Input,
                        {
                          autoFocus: true,
                          value: renameVal,
                          onChange: (e) => setRenameVal(e.target.value),
                          onBlur: commitRename,
                          onKeyDown: (e) => e.key === "Enter" && commitRename(),
                          onClick: (e) => e.stopPropagation(),
                          className: "h-7 text-xs font-bold"
                        }
                      ) : /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base font-bold text-foreground group-hover:text-primary transition-colors truncate", children: sub.name }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground mt-1 font-medium", children: [
                        totalChaps,
                        " ",
                        totalChaps === 1 ? "chapter" : "chapters",
                        " · ",
                        totalQs,
                        " ",
                        totalQs === 1 ? "question" : "questions"
                      ] })
                    ] })
                  ]
                },
                sub.id
              );
            }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                onClick: addSubject,
                className: "p-5 rounded-2xl border-2 border-dashed border-border/80 hover:border-primary/50 hover:bg-primary/5 transition-all flex flex-col items-center justify-center gap-2 text-muted-foreground hover:text-primary min-h-[140px] group",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-3 rounded-full bg-muted group-hover:bg-primary/10 group-hover:scale-110 transition-all", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-5 w-5" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold", children: "New Subject Folder" })
                ]
              }
            )
          ] })
        ] })
      ) : !folderChapId ? (
        /* Level 2: Inside a Subject -> Chapters */
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-between mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-sm font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(FolderOpen, { className: "h-4 w-4 text-primary" }),
            " Chapters in ",
            currentFolderSubj?.name,
            " (",
            currentFolderSubj?.chapters?.length || 0,
            ")"
          ] }) }),
          !currentFolderSubj?.chapters || currentFolderSubj.chapters.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-20 border-2 border-dashed border-border rounded-2xl max-w-lg mx-auto", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(FolderPlus, { className: "h-12 w-12 mx-auto text-primary/30 mb-3" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base font-bold text-foreground mb-1", children: "No chapters added yet" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground mb-4", children: [
              "Add a chapter to organize sources and questions under ",
              currentFolderSubj?.name,
              "."
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: () => currentFolderSubj && addChapter(currentFolderSubj.id), className: "gap-2 text-xs font-semibold", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(FolderPlus, { className: "h-4 w-4" }),
              " Add Chapter"
            ] })
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4", children: [
            currentFolderSubj.chapters.map((chap) => {
              const totalSources = chap.sources?.length || 0;
              const totalQs = chap.sources?.reduce((acc, src) => acc + (allQuestions[src.id]?.length || 0), 0) || 0;
              return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  onClick: () => setFolderChapId(chap.id),
                  className: "group relative p-5 rounded-2xl bg-card border border-border/80 hover:border-primary/50 hover:shadow-lg hover:-translate-y-0.5 transition-all cursor-pointer flex flex-col justify-between min-h-[140px]",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-2 mb-3", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-12 w-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 flex items-center justify-center text-primary group-hover:scale-110 transition-transform shadow-inner", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Folder, { className: "h-6 w-6 fill-primary/20" }) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(ThreeDotMenu, { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { icon: FilePlus, label: "Add Source", onClick: (e) => {
                          e.stopPropagation();
                          if (currentFolderSubj) addSource(currentFolderSubj.id, chap.id);
                        } }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { icon: Pencil, label: "Rename", onClick: (e) => {
                          e.stopPropagation();
                          setRenamingId(chap.id);
                          setRenameVal(chap.name);
                        } }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { icon: Trash2, label: "Delete", destructive: true, onClick: (e) => {
                          e.stopPropagation();
                          if (currentFolderSubj) deleteChapter(currentFolderSubj.id, chap.id);
                        } })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      renamingId === chap.id ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Input,
                        {
                          autoFocus: true,
                          value: renameVal,
                          onChange: (e) => setRenameVal(e.target.value),
                          onBlur: commitRename,
                          onKeyDown: (e) => e.key === "Enter" && commitRename(),
                          onClick: (e) => e.stopPropagation(),
                          className: "h-7 text-xs font-bold"
                        }
                      ) : /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base font-bold text-foreground group-hover:text-primary transition-colors truncate", children: chap.name }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground mt-1 font-medium truncate", children: [
                        totalSources,
                        " ",
                        totalSources === 1 ? "source" : "sources",
                        " · ",
                        totalQs,
                        " ",
                        totalQs === 1 ? "question" : "questions"
                      ] })
                    ] })
                  ]
                },
                chap.id
              );
            }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                onClick: () => currentFolderSubj && addChapter(currentFolderSubj.id),
                className: "p-5 rounded-2xl border-2 border-dashed border-border/80 hover:border-primary/50 hover:bg-primary/5 transition-all flex flex-col items-center justify-center gap-2 text-muted-foreground hover:text-primary min-h-[140px] group",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-3 rounded-full bg-muted group-hover:bg-primary/10 group-hover:scale-110 transition-all", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-5 w-5" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold", children: "New Chapter" })
                ]
              }
            )
          ] })
        ] })
      ) : (
        /* Level 3: Inside a Chapter -> Sources */
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-between mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-sm font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(BookCopy, { className: "h-4 w-4 text-primary" }),
            " Sources in ",
            currentFolderChap?.name,
            " (",
            currentFolderChap?.sources?.length || 0,
            ")"
          ] }) }),
          !currentFolderChap?.sources || currentFolderChap.sources.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-20 border-2 border-dashed border-border rounded-2xl max-w-lg mx-auto", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(FilePlus, { className: "h-12 w-12 mx-auto text-primary/30 mb-3" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base font-bold text-foreground mb-1", children: "No question sources yet" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mb-4", children: "Add a source folder (e.g. PYQs 2024, Irodov, Mock Tests) to save questions." }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: () => currentFolderSubj && currentFolderChap && addSource(currentFolderSubj.id, currentFolderChap.id), className: "gap-2 text-xs font-semibold", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(FilePlus, { className: "h-4 w-4" }),
              " Add Source"
            ] })
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4", children: [
            currentFolderChap.sources.map((src) => {
              const count = allQuestions[src.id]?.length || 0;
              return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  onClick: () => {
                    setActiveItemId(src.id);
                    setActiveSourceId(src.id);
                    setActiveBookmarkFolderId(null);
                  },
                  className: "group relative p-5 rounded-2xl bg-card border border-border/80 hover:border-primary/50 hover:shadow-lg hover:-translate-y-0.5 transition-all cursor-pointer flex flex-col justify-between min-h-[140px]",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-2 mb-3", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-12 w-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 flex items-center justify-center text-primary group-hover:scale-110 transition-transform shadow-inner", children: /* @__PURE__ */ jsxRuntimeExports.jsx(BookCopy, { className: "h-6 w-6 text-primary" }) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(ThreeDotMenu, { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { icon: Pencil, label: "Rename", onClick: (e) => {
                          e.stopPropagation();
                          setRenamingId(src.id);
                          setRenameVal(src.name);
                        } }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { icon: Trash2, label: "Delete", destructive: true, onClick: (e) => {
                          e.stopPropagation();
                          if (currentFolderSubj && currentFolderChap) deleteSource(currentFolderSubj.id, currentFolderChap.id, src.id);
                        } })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      renamingId === src.id ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Input,
                        {
                          autoFocus: true,
                          value: renameVal,
                          onChange: (e) => setRenameVal(e.target.value),
                          onBlur: commitRename,
                          onKeyDown: (e) => e.key === "Enter" && commitRename(),
                          onClick: (e) => e.stopPropagation(),
                          className: "h-7 text-xs font-bold"
                        }
                      ) : /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base font-bold text-foreground group-hover:text-primary transition-colors truncate", children: src.name }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground mt-1 font-medium truncate", children: [
                        count,
                        " ",
                        count === 1 ? "question saved" : "questions saved"
                      ] })
                    ] })
                  ]
                },
                src.id
              );
            }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                onClick: () => currentFolderSubj && currentFolderChap && addSource(currentFolderSubj.id, currentFolderChap.id),
                className: "p-5 rounded-2xl border-2 border-dashed border-border/80 hover:border-primary/50 hover:bg-primary/5 transition-all flex flex-col items-center justify-center gap-2 text-muted-foreground hover:text-primary min-h-[140px] group",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-3 rounded-full bg-muted group-hover:bg-primary/10 group-hover:scale-110 transition-all", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-5 w-5" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold", children: "New Source" })
                ]
              }
            )
          ] })
        ] })
      ) })
    ] });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { id: "print-root" }),
    isPrinting && reactDomExports.createPortal(
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-8 max-w-4xl mx-auto space-y-6 bg-white text-black font-sans", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-b-2 border-black pb-4 flex justify-between items-end", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-black uppercase tracking-wider", children: "JEE Question Bank" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-gray-500 mt-1", children: [
              "Source: ",
              activeSourceId ? getSourceName(activeSourceId) : "Bookmarks"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs font-bold", children: [
              "Total: ",
              activeQuestionsWithSource.length,
              " Questions"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-gray-400", children: (/* @__PURE__ */ new Date()).toLocaleDateString() })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-6", children: sortedQuestions.map(({ question, sourceId }) => /* @__PURE__ */ jsxRuntimeExports.jsx(QuestionCard, { question, sourceId }, question.id)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("style", { dangerouslySetInnerHTML: { __html: `
            @media print {
              body, html {
                background: white !important;
                color: black !important;
                height: auto !important;
                overflow: visible !important;
              }
              #root {
                display: none !important;
              }
              #print-root {
                display: block !important;
                position: static !important;
                width: 100%;
                height: auto !important;
                overflow: visible !important;
              }
            }
          ` } })
      ] }),
      document.body
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -20 },
        className: cn("flex h-full overflow-hidden bg-background", isPrinting && "hidden"),
        children: [
          savesViewMode === "section" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn("w-full md:w-64 shrink-0 border-r border-border flex flex-col bg-sidebar", showSidebar ? "flex fixed inset-0 z-[200] bg-background/95 backdrop-blur-xl md:relative md:z-auto md:bg-sidebar" : "hidden"), children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between px-3 py-2.5 border-b border-border shrink-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setShowSidebar(false), className: "h-6 w-6 flex items-center justify-center rounded hover:bg-muted text-muted-foreground hover:text-foreground transition-colors", title: "Close sidebar", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "h-3.5 w-3.5" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-semibold text-foreground uppercase tracking-wide flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Bookmark, { className: "h-4 w-4" }),
                  "Saves"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setSavesViewMode("folder"), className: "h-6 w-6 flex items-center justify-center rounded hover:bg-muted text-muted-foreground hover:text-foreground transition-colors", title: "Switch to Folder View", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LayoutGrid, { className: "h-3.5 w-3.5 text-primary" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: addSubject, className: "h-6 w-6 flex items-center justify-center rounded hover:bg-muted text-muted-foreground hover:text-foreground transition-colors", title: "New Subject", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FolderPlus, { className: "h-3.5 w-3.5" }) })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(ReorderGroup, { as: "div", axis: "y", values: subjects, onReorder: setSubjects, className: "flex-1 overflow-y-auto p-1.5 space-y-0.5", children: [
              isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center h-full text-muted-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-6 w-6 animate-spin" }) }) : subjects.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-8 px-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Bookmark, { className: "h-8 w-8 mx-auto mb-2 text-primary/30" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "No subjects yet" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    onClick: addSubject,
                    className: "text-[10px] text-primary hover:underline mt-1",
                    children: "+ Create subject"
                  }
                )
              ] }) : null,
              subjects.map((sub) => /* @__PURE__ */ jsxRuntimeExports.jsxs(ReorderItem, { as: "div", value: sub, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn("group flex items-center gap-1 px-2 py-1.5 cursor-pointer rounded-lg", activeItemId === sub.id ? "bg-accent/40" : "hover:bg-muted/50"), onClick: () => setActiveItemId(sub.id), children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: (e) => {
                    e.stopPropagation();
                    toggleSubject(sub.id);
                  }, className: "text-muted-foreground hover:text-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: cn("h-3 w-3 transition-transform", !sub.expanded && "-rotate-90") }) }),
                  renamingId === sub.id ? /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { autoFocus: true, value: renameVal, onChange: (e) => setRenameVal(e.target.value), onBlur: commitRename, onKeyDown: (e) => e.key === "Enter" && commitRename(), className: "h-6 text-xs" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex-1 text-xs font-semibold text-foreground truncate", children: sub.name }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(ThreeDotMenu, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { icon: FilePlus, label: "Add Chapter", onClick: () => addChapter(sub.id) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { icon: Pencil, label: "Rename", onClick: () => {
                      setRenamingId(sub.id);
                      setRenameVal(sub.name);
                    } }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { icon: Trash2, label: "Delete", destructive: true, onClick: () => deleteSubject(sub.id) })
                  ] })
                ] }),
                sub.expanded && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { onPointerDown: (e) => e.stopPropagation(), className: "pl-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ReorderGroup, { as: "div", axis: "y", values: sub.chapters, onReorder: (newChaps) => {
                  const newSubjects = subjects.map((s) => s.id === sub.id ? { ...s, chapters: newChaps } : s);
                  setSubjects(newSubjects);
                }, className: "space-y-0.5 mt-0.5", children: sub.chapters.map((chap) => /* @__PURE__ */ jsxRuntimeExports.jsxs(ReorderItem, { as: "div", value: chap, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn("group flex items-center gap-1 pl-5 pr-2 py-1.5 cursor-pointer rounded-lg", activeItemId === chap.id ? "bg-accent/40" : "hover:bg-muted/50"), onClick: () => setActiveItemId(chap.id), children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: (e) => {
                      e.stopPropagation();
                      toggleChapter(sub.id, chap.id);
                    }, className: "text-muted-foreground hover:text-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: cn("h-3 w-3 transition-transform", !chap.expanded && "-rotate-90") }) }),
                    renamingId === chap.id ? /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { autoFocus: true, value: renameVal, onChange: (e) => setRenameVal(e.target.value), onBlur: commitRename, onKeyDown: (e) => e.key === "Enter" && commitRename(), className: "h-6 text-xs" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex-1 text-xs text-foreground truncate", children: chap.name }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(ThreeDotMenu, { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { icon: FilePlus, label: "Add Source", onClick: () => addSource(sub.id, chap.id) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { icon: Pencil, label: "Rename", onClick: () => {
                        setRenamingId(chap.id);
                        setRenameVal(chap.name);
                      } }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { icon: Trash2, label: "Delete", destructive: true, onClick: () => deleteChapter(sub.id, chap.id) })
                    ] })
                  ] }),
                  chap.expanded && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { onPointerDown: (e) => e.stopPropagation(), className: "pl-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(ReorderGroup, { as: "div", axis: "y", values: chap.sources, onReorder: (newSrcs) => {
                    const newSubjects = subjects.map((s) => s.id === sub.id ? { ...s, chapters: s.chapters.map((c) => c.id === chap.id ? { ...c, sources: newSrcs } : c) } : s);
                    setSubjects(newSubjects);
                  }, className: "space-y-0.5 mt-0.5", children: [
                    chap.sources.map((src) => /* @__PURE__ */ jsxRuntimeExports.jsx(ReorderItem, { as: "div", value: src, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn("group flex items-center gap-1 pl-9 pr-2 py-1.5 cursor-pointer rounded-lg", activeSourceId === src.id && !activeBookmarkFolderId ? "bg-primary/10 text-primary" : "hover:bg-muted/50 text-muted-foreground hover:text-foreground"), onClick: () => {
                      setActiveItemId(src.id);
                      setActiveSourceId(src.id);
                      setActiveBookmarkFolderId(null);
                      setShowSidebar(false);
                    }, children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-3 h-3 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-1 h-1 bg-muted-foreground rounded-full" }) }),
                      renamingId === src.id ? /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { autoFocus: true, value: renameVal, onChange: (e) => setRenameVal(e.target.value), onBlur: commitRename, onKeyDown: (e) => e.key === "Enter" && commitRename(), className: "h-5 text-xs" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex-1 text-xs truncate", children: src.name }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(ThreeDotMenu, { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { icon: Pencil, label: "Rename", onClick: () => {
                          setRenamingId(src.id);
                          setRenameVal(src.name);
                        } }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { icon: Trash2, label: "Delete", destructive: true, onClick: () => deleteSource(sub.id, chap.id, src.id) })
                      ] })
                    ] }) }, src.id)),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "button",
                      {
                        onClick: () => addSource(sub.id, chap.id),
                        className: "flex items-center gap-1 pl-9 pr-2 py-1 text-[10px] text-muted-foreground hover:text-primary transition-colors w-full",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(FilePlus, { className: "h-2.5 w-2.5" }),
                          "+ Add source"
                        ]
                      }
                    )
                  ] }) })
                ] }, chap.id)) }) }),
                sub.expanded && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    onClick: () => addChapter(sub.id),
                    className: "flex items-center gap-1 pl-5 pr-2 py-1 text-[10px] text-muted-foreground hover:text-primary transition-colors w-full",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(FilePlus, { className: "h-2.5 w-2.5" }),
                      "+ Add chapter"
                    ]
                  }
                )
              ] }, sub.id))
            ] })
          ] }),
          savesViewMode === "folder" && !activeSourceId && !activeBookmarkFolderId ? renderSavesFolderExplorer() : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 flex flex-col overflow-hidden min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("flex items-center px-3 py-2 bg-card border-b border-border shrink-0", showSidebar && "hidden"), children: /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setShowSidebar(true), className: "flex items-center gap-1.5 text-xs font-semibold text-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(FolderPlus, { className: "h-4 w-4 text-primary" }),
              " Open Bank"
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 px-3 py-1.5 border-b border-border bg-card/80 backdrop-blur-sm flex-shrink-0 flex-wrap", children: [
              savesViewMode === "folder" && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  variant: "outline",
                  size: "sm",
                  className: "h-7 gap-1.5 text-xs shrink-0 bg-primary/10 hover:bg-primary/20 text-primary border-primary/20 font-semibold",
                  onClick: () => {
                    setActiveSourceId(null);
                    setActiveBookmarkFolderId(null);
                  },
                  title: "Back to Folders",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "h-3 w-3" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Back to Folders" })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", className: "h-7 gap-1.5 text-xs shrink-0", onClick: () => activeSourceId && setShowAddPanel((p) => !p), disabled: !activeSourceId, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-3 w-3" }),
                " Add New Ques"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: showStopwatch ? "secondary" : "outline", size: "sm", className: cn("h-7 gap-1.5 text-xs shrink-0", showStopwatch && "bg-primary/10 text-primary border-primary/20"), onClick: () => setShowStopwatch(!showStopwatch), children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-3 w-3" }),
                " Stopwatch"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "outline", size: "sm", className: cn("h-7 gap-1.5 text-xs shrink-0", showBookmarksPanel && "bg-primary/10 text-primary border-primary/20"), onClick: () => setShowBookmarksPanel(true), children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Bookmark, { className: "h-3 w-3 text-yellow-500 fill-yellow-500" }),
                " Bookmarks"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: filterOpen ? "secondary" : "outline", size: "sm", className: cn("h-7 gap-1.5 text-xs shrink-0", filterOpen && "bg-primary/10 text-primary hover:bg-primary/20 border-primary/20"), onClick: () => setFilterOpen(!filterOpen), children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Funnel, { className: "h-3 w-3" }),
                " Filter"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "outline", size: "sm", className: "h-7 gap-1.5 text-xs shrink-0", onClick: () => setIsCompactMode((p) => !p), children: [
                isCompactMode ? /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "h-3 w-3" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(EyeOff, { className: "h-3 w-3" }),
                isCompactMode ? "Show Full" : "Hide/Show"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  onClick: () => setSavesViewMode(savesViewMode === "folder" ? "section" : "folder"),
                  className: "h-7 px-2 flex items-center gap-1 rounded-md border border-border bg-muted/60 text-xs font-semibold text-muted-foreground hover:text-foreground transition-all shrink-0",
                  title: "Switch layout mode",
                  children: [
                    savesViewMode === "folder" ? /* @__PURE__ */ jsxRuntimeExports.jsx(ListTree, { className: "h-3 w-3 text-primary" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(LayoutGrid, { className: "h-3 w-3 text-primary" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: savesViewMode === "folder" ? "Sidebar Mode" : "Folder Mode" })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "secondary", size: "sm", className: "h-7 gap-1.5 text-xs shrink-0", onClick: () => setIsPrinting(true), disabled: !activeSourceId && !activeBookmarkFolderId || activeQuestionsWithSource.length === 0, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Save, { className: "h-3 w-3" }),
                " Save as PDF"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: filterOpen && /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                initial: { height: 0, opacity: 0 },
                animate: { height: "auto", opacity: 1 },
                exit: { height: 0, opacity: 0 },
                className: "bg-muted/30 border-b border-border overflow-hidden shrink-0",
                children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 py-2.5 flex items-center gap-2 flex-wrap", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground font-semibold mr-1", children: "Sort & Filter by:" }),
                  [
                    { id: "number", label: "Question Number" },
                    { id: "name", label: "Question Name" },
                    { id: "date", label: "Date Added" },
                    { id: "solved", label: "Solved Count" },
                    { id: "unsolved", label: "Unsolved Count" },
                    { id: "review", label: "Due for Review" }
                  ].map((opt) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      onClick: () => setFilterBy(opt.id),
                      className: cn(
                        "px-3 py-1.5 rounded-full text-xs transition-colors border",
                        filterBy === opt.id ? "border-primary text-primary font-bold bg-primary/10" : "border-border/60 text-foreground hover:bg-muted bg-background"
                      ),
                      children: opt.label
                    },
                    opt.id
                  ))
                ] })
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 flex overflow-hidden relative", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: showStopwatch && /* @__PURE__ */ jsxRuntimeExports.jsx(StopwatchWidget, { onClose: () => setShowStopwatch(false) }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 overflow-auto bg-muted/30 p-4", children: isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center h-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-8 w-8 animate-spin text-primary" }) }) : !activeSourceId && !activeBookmarkFolderId ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center h-full text-center text-muted-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(BookCopy, { className: "h-12 w-12 opacity-20" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-foreground", children: "Select a source or bookmark folder" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs", children: "Choose an item from the left panel or bookmarks menu to see saved questions." })
              ] }) }) : activeQuestionsWithSource.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center h-full text-center text-muted-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Bot, { className: "h-12 w-12 opacity-20" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-foreground", children: "No questions found here." }),
                activeSourceId && /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", className: "mt-2 text-xs", onClick: () => setShowAddPanel(true), children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-3 w-3 mr-1" }),
                  " Add First Question"
                ] })
              ] }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("columns-1 sm:columns-2 gap-4 space-y-4", isCompactMode ? "md:columns-4 lg:columns-5 xl:columns-6 gap-2 space-y-2" : "md:columns-3 lg:columns-4 xl:columns-5"), children: sortedQuestions.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "break-inside-avoid", children: /* @__PURE__ */ jsxRuntimeExports.jsx(QuestionCard, { question: item.question, sourceId: item.sourceId }) }, `${item.sourceId}-${item.question.id}`)) }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(AnimatePresence, { children: [
                showAddPanel && activeSourceId && /* @__PURE__ */ jsxRuntimeExports.jsx(
                  motion.div,
                  {
                    initial: { width: 0, opacity: 0 },
                    animate: { width: 340, opacity: 1 },
                    exit: { width: 0, opacity: 0 },
                    className: "border-l border-border bg-card overflow-hidden shrink-0 hidden lg:flex flex-col",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      QuestionEditorModal,
                      {
                        sourceId: activeSourceId,
                        onClose: () => setShowAddPanel(false),
                        onSave: handleSaveQuestion
                      }
                    )
                  }
                ),
                editingQuestion && /* @__PURE__ */ jsxRuntimeExports.jsx(
                  motion.div,
                  {
                    initial: { width: 0, opacity: 0 },
                    animate: { width: 340, opacity: 1 },
                    exit: { width: 0, opacity: 0 },
                    className: "border-l border-border bg-card overflow-hidden shrink-0 hidden lg:flex flex-col",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      QuestionEditorModal,
                      {
                        sourceId: editingQuestion.sourceId,
                        initialData: editingQuestion.question,
                        onClose: () => setEditingQuestion(null),
                        onSave: handleSaveQuestion
                      }
                    )
                  }
                )
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(AnimatePresence, { children: [
            (showAddPanel || editingQuestion) && activeSourceId && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                initial: { opacity: 0 },
                animate: { opacity: 1 },
                exit: { opacity: 0 },
                className: "fixed inset-0 bg-black/60 backdrop-blur-sm z-[250] flex items-center justify-center p-4",
                onClick: () => {
                  setShowAddPanel(false);
                  setEditingQuestion(null);
                },
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  motion.div,
                  {
                    initial: { scale: 0.9, y: 20 },
                    animate: { scale: 1, y: 0 },
                    exit: { scale: 0.9, y: 20 },
                    className: "bg-card border border-border rounded-2xl w-full max-w-sm max-h-[85vh] overflow-hidden shadow-2xl",
                    onClick: (e) => e.stopPropagation(),
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      QuestionEditorModal,
                      {
                        sourceId: editingQuestion ? editingQuestion.sourceId : activeSourceId,
                        initialData: editingQuestion?.question,
                        onClose: () => {
                          setShowAddPanel(false);
                          setEditingQuestion(null);
                        },
                        onSave: handleSaveQuestion
                      }
                    )
                  }
                )
              }
            ) }),
            detailQuestion && /* @__PURE__ */ jsxRuntimeExports.jsx(
              QuestionDetailModal,
              {
                question: detailQuestion.question,
                type: detailQuestion.type,
                sourceId: detailQuestion.sourceId,
                onClose: () => setDetailQuestion(null),
                isBookmarked: isBookmarked(detailQuestion.sourceId, detailQuestion.question.id),
                onBookmark: () => setBookmarkingQuestion({ sourceId: detailQuestion.sourceId, questionId: detailQuestion.question.id })
              }
            ),
            bookmarkingQuestion && /* @__PURE__ */ jsxRuntimeExports.jsx(
              BookmarkSelectModal,
              {
                sourceId: bookmarkingQuestion.sourceId,
                questionId: bookmarkingQuestion.questionId,
                bookmarkFolders,
                setBookmarkFolders,
                onClose: () => setBookmarkingQuestion(null)
              }
            ),
            showBookmarksPanel && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.div,
                {
                  initial: { opacity: 0 },
                  animate: { opacity: 1 },
                  exit: { opacity: 0 },
                  className: "fixed inset-0 z-[250] bg-black/40 backdrop-blur-sm",
                  onClick: () => setShowBookmarksPanel(false)
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                motion.div,
                {
                  initial: { x: "100%" },
                  animate: { x: 0 },
                  exit: { x: "100%" },
                  transition: { type: "spring", damping: 25, stiffness: 200 },
                  className: "fixed top-0 right-0 bottom-0 w-80 bg-card border-l border-border shadow-2xl z-[300] flex flex-col",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between p-4 border-b border-border shrink-0", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-bold flex items-center gap-2", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Bookmark, { className: "h-5 w-5 text-yellow-500 fill-yellow-500" }),
                        " Bookmark Folders"
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setShowBookmarksPanel(false), className: "p-1 hover:bg-muted rounded-md text-muted-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-5 w-5" }) })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4 border-b border-border shrink-0 bg-muted/20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Input,
                        {
                          value: newBookmarkFolderName,
                          onChange: (e) => setNewBookmarkFolderName(e.target.value),
                          onKeyDown: (e) => {
                            if (e.key === "Enter" && newBookmarkFolderName.trim()) {
                              setBookmarkFolders([...bookmarkFolders, { id: Date.now().toString(), name: newBookmarkFolderName.trim(), bookmarks: [] }]);
                              setNewBookmarkFolderName("");
                            }
                          },
                          placeholder: "New Folder Name",
                          className: "h-8 text-xs"
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Button,
                        {
                          size: "sm",
                          className: "h-8 shrink-0 px-2",
                          disabled: !newBookmarkFolderName.trim(),
                          onClick: () => {
                            setBookmarkFolders([...bookmarkFolders, { id: Date.now().toString(), name: newBookmarkFolderName.trim(), bookmarks: [] }]);
                            setNewBookmarkFolderName("");
                          },
                          children: /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-4 w-4" })
                        }
                      )
                    ] }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 overflow-y-auto p-2 space-y-1", children: bookmarkFolders.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-8 text-muted-foreground", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Bookmark, { className: "h-8 w-8 mx-auto mb-2 opacity-20" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs", children: "No bookmark folders yet." })
                    ] }) : bookmarkFolders.map((folder) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "div",
                      {
                        onClick: () => {
                          setActiveBookmarkFolderId(folder.id);
                          setActiveSourceId(null);
                          setShowBookmarksPanel(false);
                        },
                        className: cn("p-3 hover:bg-muted cursor-pointer rounded-lg flex items-center justify-between group transition-colors", activeBookmarkFolderId === folder.id ? "bg-primary/10 text-primary" : ""),
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 overflow-hidden", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(FolderPlus, { className: "h-4 w-4 shrink-0" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-sm truncate", children: folder.name })
                          ] }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 shrink-0", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold bg-muted-foreground/10 px-2 py-0.5 rounded-full", children: folder.bookmarks.length }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "button",
                              {
                                onClick: (e) => {
                                  e.stopPropagation();
                                  setBookmarkFolders(bookmarkFolders.filter((f) => f.id !== folder.id));
                                  if (activeBookmarkFolderId === folder.id) setActiveBookmarkFolderId(null);
                                },
                                className: "opacity-0 group-hover:opacity-100 text-red-500 hover:bg-red-500/20 p-1 rounded transition-all",
                                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-3.5 w-3.5" })
                              }
                            )
                          ] })
                        ]
                      },
                      folder.id
                    )) })
                  ]
                }
              )
            ] })
          ] })
        ]
      }
    )
  ] });
}
export {
  SavesPage as default
};
