import { c as createLucideIcon, s as useConstant, t as useMusicContext, i as useAppContext, j as jsxRuntimeExports, h as ChevronRight, X, A as AnimatePresence, m as motion, I as Input, B as Button, f as Check, M as Music, P as Pause, o as Play, S as Search, v as LoaderCircle } from "./index-DCXNzjIX.js";
import { b as reactExports } from "./vendor-charts-Du7SI2xx.js";
import { Y as Youtube, f as fetchPlaylistClientSide, a as fetchVideoMetadataClientSide, s as searchYouTubeVideos } from "./search-BqFnDqKo.js";
import { L as Library, R as Radio } from "./radio-FB_IzLfa.js";
import { P as Plus, a as Pencil } from "./plus-gFEq-yG-.js";
import { T as Trash2 } from "./trash-2-CuPzRtqX.js";
import { C as Clock } from "./clock-Cb_LsjXi.js";
import { E as EllipsisVertical } from "./ellipsis-vertical-DhBhwekx.js";
import { U as Upload } from "./upload-aIVzR2d7.js";
import { R as ReorderGroup, a as ReorderItem } from "./Item-Ct55daLB.js";
import "./vendor-firebase-C_hAKoH5.js";
const __iconNode = [
  ["path", { d: "M9 17H7A5 5 0 0 1 7 7h2", key: "8i5ue5" }],
  ["path", { d: "M15 7h2a5 5 0 1 1 0 10h-2", key: "1b9ql8" }],
  ["line", { x1: "8", x2: "16", y1: "12", y2: "12", key: "1jonct" }]
];
const Link2 = createLucideIcon("link-2", __iconNode);
class DragControls {
  constructor() {
    this.componentControls = /* @__PURE__ */ new Set();
  }
  /**
   * Subscribe a component's internal `VisualElementDragControls` to the user-facing API.
   *
   * @internal
   */
  subscribe(controls) {
    this.componentControls.add(controls);
    return () => this.componentControls.delete(controls);
  }
  /**
   * Start a drag gesture on every `motion` component that has this set of drag controls
   * passed into it via the `dragControls` prop.
   *
   * ```jsx
   * dragControls.start(e, {
   *   snapToCursor: true
   * })
   * ```
   *
   * @param event - PointerEvent
   * @param options - Options
   *
   * @public
   */
  start(event, options) {
    this.componentControls.forEach((controls) => {
      controls.start(event.nativeEvent || event, options);
    });
  }
  /**
   * Cancels a drag gesture.
   *
   * ```jsx
   * dragControls.cancel()
   * ```
   *
   * @public
   */
  cancel() {
    this.componentControls.forEach((controls) => {
      controls.cancel();
    });
  }
  /**
   * Stops a drag gesture.
   *
   * ```jsx
   * dragControls.stop()
   * ```
   *
   * @public
   */
  stop() {
    this.componentControls.forEach((controls) => {
      controls.stop();
    });
  }
}
const createDragControls = () => new DragControls();
function useDragControls() {
  return useConstant(createDragControls);
}
try {
  if (typeof window !== "undefined" && typeof document !== "undefined") {
    Object.defineProperty(document, "hidden", { get: () => false });
    Object.defineProperty(document, "visibilityState", { get: () => "visible" });
    window.addEventListener("visibilitychange", (e) => e.stopImmediatePropagation(), true);
  }
} catch (e) {
}
const GRADIENTS = [
  ["from-purple-800", "to-indigo-900"],
  ["from-blue-800", "to-cyan-900"],
  ["from-green-800", "to-emerald-900"],
  ["from-rose-800", "to-pink-900"],
  ["from-orange-800", "to-amber-900"],
  ["from-teal-800", "to-cyan-900"]
];
function getGrad(name) {
  return GRADIENTS[name.charCodeAt(0) % GRADIENTS.length];
}
function formatTime(s) {
  if (!isFinite(s) || s <= 0) return "—";
  return `${Math.floor(s / 60)}:${Math.floor(s % 60).toString().padStart(2, "0")}`;
}
function extractYouTubeId(url) {
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
function extractYouTubePlaylistId(url) {
  const m = url.match(/[?&]list=([^&#]+)/);
  return m ? m[1] : null;
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
    /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setOpen(!open), className: "p-1 text-muted-foreground hover:text-foreground outline-none transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(EllipsisVertical, { className: "h-4 w-4" }) }),
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
function EditSongModal({
  playlistId,
  song,
  onClose
}) {
  const { updateSong } = useMusicContext();
  const [title, setTitle] = reactExports.useState(song.title);
  const [artist, setArtist] = reactExports.useState(song.artist);
  const [description, setDescription] = reactExports.useState(song.description || "");
  const [tags, setTags] = reactExports.useState(song.tags || []);
  const [tagInput, setTagInput] = reactExports.useState("");
  const addTag = () => {
    const t = tagInput.trim().toLowerCase().replace(/,/g, "");
    if (t && !tags.includes(t)) setTags((p) => [...p, t]);
    setTagInput("");
  };
  const handleSave = () => {
    updateSong(playlistId, song.id, {
      title: title.trim() || song.title,
      artist: artist.trim() || song.artist,
      description: description.trim() || void 0,
      tags: tags.length ? tags : void 0
    });
    onClose();
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      className: "fixed inset-0 bg-black/70 backdrop-blur-sm z-[100] flex items-center justify-center p-4",
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      onClick: onClose,
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          className: "bg-card border border-border rounded-xl p-6 w-full max-w-md shadow-2xl",
          initial: { scale: 0.95, y: 20 },
          animate: { scale: 1, y: 0 },
          exit: { scale: 0.95, y: 20 },
          onClick: (e) => e.stopPropagation(),
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg font-bold text-foreground", children: "Edit Song Details" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: onClose, className: "text-muted-foreground hover:text-foreground transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-5 w-5" }) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs text-muted-foreground mb-1.5 block font-medium uppercase tracking-wide", children: "Title" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    autoFocus: true,
                    value: title,
                    onChange: (e) => setTitle(e.target.value),
                    className: "w-full px-3 py-2.5 bg-muted border border-border rounded-lg text-sm text-foreground placeholder:text-muted-foreground outline-none focus:ring-2 focus:ring-[#1DB954]/50 transition-all"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs text-muted-foreground mb-1.5 block font-medium uppercase tracking-wide", children: "Artist" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    value: artist,
                    onChange: (e) => setArtist(e.target.value),
                    className: "w-full px-3 py-2.5 bg-muted border border-border rounded-lg text-sm text-foreground placeholder:text-muted-foreground outline-none focus:ring-2 focus:ring-[#1DB954]/50 transition-all"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs text-muted-foreground mb-1.5 block font-medium uppercase tracking-wide", children: "Description" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "textarea",
                  {
                    value: description,
                    onChange: (e) => setDescription(e.target.value),
                    rows: 2,
                    placeholder: "Add a description…",
                    className: "w-full px-3 py-2.5 bg-muted border border-border rounded-lg text-sm text-foreground placeholder:text-muted-foreground outline-none resize-none focus:ring-2 focus:ring-[#1DB954]/50 transition-all"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs text-muted-foreground mb-1.5 block font-medium uppercase tracking-wide", children: "Tags" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1 mb-2 min-h-[24px]", children: tags.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1 px-2 py-0.5 bg-[#1DB954]/20 text-[#1DB954] text-xs rounded-full", children: [
                  "#",
                  t,
                  /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setTags((p) => p.filter((x) => x !== t)), className: "hover:text-red-400 transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-2.5 w-2.5" }) })
                ] }, t)) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "input",
                    {
                      value: tagInput,
                      onChange: (e) => setTagInput(e.target.value),
                      onKeyDown: (e) => (e.key === "Enter" || e.key === ",") && (e.preventDefault(), addTag()),
                      placeholder: "Add tag — press Enter",
                      className: "flex-1 px-3 py-2 bg-muted border border-border rounded-lg text-xs text-foreground placeholder:text-muted-foreground outline-none"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      onClick: addTag,
                      className: "px-3 py-2 bg-muted hover:bg-accent border border-border rounded-lg text-xs text-foreground transition-colors",
                      children: "Add"
                    }
                  )
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 mt-6 justify-end", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: onClose,
                  className: "px-5 py-2 border border-border text-muted-foreground hover:text-foreground rounded-full text-sm transition-colors",
                  children: "Cancel"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: handleSave,
                  className: "px-5 py-2 bg-[#1DB954] text-black font-bold rounded-full text-sm hover:bg-[#1ed760] transition-colors",
                  children: "Save"
                }
              )
            ] })
          ]
        }
      )
    }
  );
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
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `relative w-full h-full bg-muted/60 flex items-center justify-center overflow-hidden rounded ${className || ""}`, children: [
    !hasError && currentSrc ? /* @__PURE__ */ jsxRuntimeExports.jsx(
      "img",
      {
        src: currentSrc,
        alt: "",
        referrerPolicy: "no-referrer",
        loading: "lazy",
        className: `w-full h-full object-cover transition-opacity duration-300 ${loaded ? "opacity-100" : "opacity-0"}`,
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
function YouTubeSearchModal({
  playlistId,
  onClose,
  onSongAdded
}) {
  const { addSongToPlaylist, playlists, playSong } = useMusicContext();
  const [searchQuery, setSearchQuery] = reactExports.useState("");
  const [results, setResults] = reactExports.useState([]);
  const [loading, setLoading] = reactExports.useState(false);
  const [error, setError] = reactExports.useState("");
  const [currentPage, setCurrentPage] = reactExports.useState(1);
  const itemsPerPage = 10;
  const currentPlaylist = playlists.find((p) => p.id === playlistId);
  const localResults = reactExports.useMemo(() => {
    if (!searchQuery.trim() || !currentPlaylist) return [];
    const q = searchQuery.toLowerCase();
    return currentPlaylist.songs.filter(
      (s) => s.title.toLowerCase().includes(q) || s.artist.toLowerCase().includes(q) || s.description?.toLowerCase().includes(q) || s.tags?.some((t) => t.toLowerCase().includes(q))
    );
  }, [searchQuery, currentPlaylist]);
  const handleSearch = async () => {
    const raw = searchQuery.trim();
    if (!raw) return;
    setLoading(true);
    setError("");
    setResults([]);
    setCurrentPage(1);
    const isYtUrl = raw.includes("youtube.com") || raw.includes("youtu.be");
    if (isYtUrl) {
      const ytPlaylistId = extractYouTubePlaylistId(raw);
      const ytId = extractYouTubeId(raw);
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
  const handleAddSong = (result) => {
    const song = {
      id: Date.now().toString(),
      title: result.title,
      artist: result.author,
      youtubeId: result.videoId,
      url: `https://www.youtube.com/watch?v=${result.videoId}`,
      coverUrl: result.thumbnail,
      duration: result.length_seconds
    };
    addSongToPlaylist(playlistId, song);
    onSongAdded?.(song);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      className: "fixed inset-0 bg-black/70 backdrop-blur-sm z-[100] flex items-center justify-center p-4",
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
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: onClose, className: "text-muted-foreground hover:text-foreground transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-5 w-5" }) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 md:p-6 border-b border-border flex-shrink-0 space-y-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    type: "text",
                    placeholder: "Search for songs, albums, artists...",
                    value: searchQuery,
                    onChange: (e) => setSearchQuery(e.target.value),
                    onKeyDown: (e) => e.key === "Enter" && handleSearch(),
                    autoFocus: true,
                    className: "flex-1 px-3 py-2 bg-muted border border-border rounded-lg text-sm text-foreground placeholder:text-muted-foreground outline-none focus:ring-2 focus:ring-[#1DB954]/50"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    onClick: handleSearch,
                    disabled: loading || !searchQuery.trim(),
                    className: "px-4 py-2 bg-[#1DB954] text-black font-semibold rounded-lg hover:bg-[#1ed760] disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center gap-2",
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
              results.length === 0 && localResults.length === 0 && !loading && searchQuery && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-8 text-muted-foreground", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Music, { className: "h-12 w-12 mx-auto mb-3 opacity-20" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "No results. Try searching for something else." })
              ] }),
              results.length === 0 && localResults.length === 0 && !loading && !searchQuery && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-8 text-muted-foreground", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "h-12 w-12 mx-auto mb-3 opacity-20" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Enter a search term above to find songs" })
              ] }),
              localResults.length > 0 && !loading && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6 flex-shrink-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-xs font-bold text-[#1DB954] uppercase tracking-widest mb-3 flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Library, { className: "h-4 w-4" }),
                  ' In "',
                  currentPlaylist?.name,
                  '"'
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: localResults.map((song) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  motion.div,
                  {
                    initial: { opacity: 0, y: 10 },
                    animate: { opacity: 1, y: 0 },
                    className: "group flex items-center gap-3 p-3 rounded-lg border border-[#1DB954]/20 bg-[#1DB954]/5 hover:bg-[#1DB954]/10 transition-colors cursor-pointer",
                    onClick: () => {
                      playSong(song, playlistId);
                      onClose();
                    },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 md:w-14 md:h-14 rounded flex-shrink-0 overflow-hidden bg-black/20", children: song.coverUrl ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: song.coverUrl, className: "w-full h-full object-cover" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Music, { className: "w-full h-full p-3 text-[#1DB954]/50" }) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-foreground truncate group-hover:text-[#1DB954] transition-colors", children: song.title }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground truncate", children: song.artist })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "p-2 bg-[#1DB954] hover:bg-[#1ed760] text-black rounded-full transition-colors flex-shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Play, { className: "h-4 w-4 ml-0.5" }) })
                    ]
                  },
                  song.id
                )) })
              ] }),
              localResults.length > 0 && results.length > 0 && !loading && /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-xs font-bold text-red-500 uppercase tracking-widest mb-3 flex items-center gap-2 pt-4 border-t border-border", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Youtube, { className: "h-4 w-4" }),
                " YouTube Results"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2 md:space-y-3 flex-1", children: results.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage).map((result) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                motion.div,
                {
                  initial: { opacity: 0, y: 10 },
                  animate: { opacity: 1, y: 0 },
                  className: "group flex items-start gap-3 p-3 rounded-lg border border-border hover:bg-muted/50 transition-colors cursor-pointer",
                  onClick: () => handleAddSong(result),
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-16 md:w-20 md:h-20 rounded flex-shrink-0 overflow-hidden bg-muted", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      BlurImage,
                      {
                        src: result.thumbnail,
                        alt: result.title,
                        className: "w-full h-full object-cover"
                      }
                    ) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-foreground truncate group-hover:text-[#1DB954] transition-colors", children: result.title }),
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
                          handleAddSong(result);
                        },
                        className: "px-3 py-2 bg-[#1DB954]/10 hover:bg-[#1DB954]/20 text-[#1DB954] rounded-lg text-xs font-semibold transition-colors flex-shrink-0 flex items-center gap-1",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-3.5 w-3.5" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: "Add" })
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
                /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-8 w-8 animate-spin text-[#1DB954]" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-3", children: "Searching..." })
              ] })
            ] })
          ]
        }
      )
    }
  );
}
function AddSongModal({
  playlistId,
  onClose,
  onSongAdded,
  onPlaylistCreated
}) {
  const { addSongToPlaylist, addLocalSongToPlaylist, addPlaylistWithSongs, playlists } = useMusicContext();
  const [tab, setTab] = reactExports.useState("file");
  const fileRef = reactExports.useRef(null);
  const [url, setUrl] = reactExports.useState("");
  const [title, setTitle] = reactExports.useState("");
  const [artist, setArtist] = reactExports.useState("");
  const [streamInput, setStreamInput] = reactExports.useState("");
  const [fetchState, setFetchState] = reactExports.useState("idle");
  const [fetchError, setFetchError] = reactExports.useState("");
  const [mediaResult, setMediaResult] = reactExports.useState(null);
  const [importing, setImporting] = reactExports.useState(false);
  const [progress, setProgress] = reactExports.useState(0);
  const completeFetch = (result) => {
    setProgress(100);
    setTimeout(() => {
      setMediaResult(result);
      setFetchState("done");
    }, 450);
  };
  const failFetch = (errMsg) => {
    setProgress(0);
    setFetchError(errMsg);
    setFetchState("error");
  };
  reactExports.useEffect(() => {
    let timer;
    if (fetchState === "loading") {
      setProgress(5);
      timer = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 95) return prev;
          if (prev < 30) return prev + 6;
          if (prev < 60) return prev + 2.5;
          if (prev < 80) return prev + 1;
          if (prev < 90) return prev + 0.4;
          return prev + 0.1;
        });
      }, 100);
    } else if (fetchState !== "done") {
      setProgress(0);
    }
    return () => clearInterval(timer);
  }, [fetchState]);
  const currentPlaylistName = playlists.find((p) => p.id === playlistId)?.name ?? "playlist";
  const handleFile = async (e) => {
    const files = Array.from(e.target.files || []);
    if (!files.length) return;
    let firstSong = null;
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const blobUrl = URL.createObjectURL(file);
      const parts = file.name.replace(/\.[^/.]+$/, "").split(" - ");
      const id = `${Date.now()}_${Math.random().toString(36).slice(2)}`;
      const song = {
        id,
        title: parts[1]?.trim() || parts[0]?.trim() || file.name,
        artist: parts[0]?.trim() || "Unknown Artist",
        url: blobUrl,
        isLocal: true,
        idbKey: `music_${id}`
      };
      await addLocalSongToPlaylist(playlistId, song, await file.arrayBuffer());
      if (i === 0) firstSong = song;
    }
    onClose();
    if (firstSong) onSongAdded?.(firstSong, playlistId);
  };
  const handleUrl = () => {
    if (!url.trim()) return;
    const song = {
      id: Date.now().toString(),
      title: title || url.split("/").pop() || "Unknown",
      artist: artist || "Unknown Artist",
      url: url.trim()
    };
    addSongToPlaylist(playlistId, song);
    onClose();
    onSongAdded?.(song, playlistId);
  };
  const handleFetchStream = async () => {
    const raw = streamInput.trim();
    if (!raw) return;
    setFetchState("loading");
    setFetchError("");
    setMediaResult(null);
    setProgress(5);
    try {
      const res = await fetch(`/api/media-info?url=${encodeURIComponent(raw)}`);
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || "Failed to fetch media info");
      completeFetch(json);
      return;
    } catch {
    }
    try {
      const fetchHtml = async (targetUrl) => {
        try {
          const controller2 = new AbortController();
          const timeout2 = setTimeout(() => controller2.abort(), 8e3);
          const res = await fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(targetUrl)}`, { signal: controller2.signal });
          clearTimeout(timeout2);
          if (res.ok) {
            const data = await res.json();
            if (data.contents) return data.contents;
          }
        } catch (e) {
        }
        try {
          const controller2 = new AbortController();
          const timeout2 = setTimeout(() => controller2.abort(), 8e3);
          const res = await fetch(`https://api.codetabs.com/v1/proxy?quest=${encodeURIComponent(targetUrl)}`, { signal: controller2.signal });
          clearTimeout(timeout2);
          if (res.ok) return await res.text();
        } catch (e) {
        }
        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), 8e3);
        const res2 = await fetch(`https://corsproxy.io/?${encodeURIComponent(targetUrl)}`, { signal: controller.signal });
        clearTimeout(timeout);
        if (!res2.ok) throw new Error("Failed to fetch proxy");
        return await res2.text();
      };
      const ytId = extractYouTubeId(raw);
      const ytPlaylistId = extractYouTubePlaylistId(raw);
      const spotifyInfo = (() => {
        const m = raw.match(/open\.spotify\.com\/(playlist|album|track)\/([a-zA-Z0-9]+)/);
        return m ? { type: m[1], id: m[2] } : null;
      })();
      if (ytPlaylistId && !ytPlaylistId.startsWith("RD") && !ytPlaylistId.startsWith("LL") && !ytPlaylistId.startsWith("WL") && !raw.includes("watch?v=")) {
        try {
          const clientResult = await fetchPlaylistClientSide(ytPlaylistId);
          const formattedTracks = clientResult.tracks.map((t) => ({
            type: "track",
            title: t.title,
            artist: t.artist,
            thumbnail: t.thumbnail,
            duration: t.duration,
            streamUrl: t.streamUrl,
            youtubeId: t.youtubeId
          }));
          completeFetch({
            type: "playlist",
            name: clientResult.name,
            thumbnail: formattedTracks[0]?.thumbnail || "",
            trackCount: formattedTracks.length,
            tracks: formattedTracks
          });
          return;
        } catch (err) {
          if (!ytId) {
            throw new Error(`YouTube Playlist Error: ${err.message}`);
          }
        }
      }
      if (ytId) {
        try {
          const trackMeta = await fetchVideoMetadataClientSide(ytId);
          completeFetch({
            type: "track",
            title: trackMeta.title,
            artist: trackMeta.artist,
            thumbnail: trackMeta.thumbnail,
            duration: trackMeta.duration,
            streamUrl: trackMeta.streamUrl,
            youtubeId: ytId
          });
          return;
        } catch (e) {
          throw new Error("Could not fetch YouTube video info.");
        }
      } else if (ytPlaylistId) {
        try {
          const clientResult = await fetchPlaylistClientSide(ytPlaylistId);
          const formattedTracks = clientResult.tracks.map((t) => ({
            type: "track",
            title: t.title,
            artist: t.artist,
            thumbnail: t.thumbnail,
            duration: t.duration,
            streamUrl: t.streamUrl,
            youtubeId: t.youtubeId
          }));
          completeFetch({
            type: "playlist",
            name: clientResult.name,
            thumbnail: formattedTracks[0]?.thumbnail || "",
            trackCount: formattedTracks.length,
            tracks: formattedTracks
          });
          return;
        } catch (err) {
          throw new Error(`YouTube Playlist Error: ${err.message}`);
        }
      } else if (spotifyInfo) {
        let isPlaylist2 = spotifyInfo.type === "playlist" || spotifyInfo.type === "album";
        let token = "";
        let playlistName = `Spotify ${spotifyInfo.type}`;
        const tokenStrategies = [
          () => fetchHtml("https://open.spotify.com/get_access_token?reason=transport&productType=embed"),
          () => fetch("https://open.spotify.com/get_access_token?reason=transport&productType=embed").then((r) => r.text()),
          () => fetchHtml("https://open.spotify.com").then((html) => {
            const tokenMatch = html.match(/"accessToken":"([^"]+)"/) || html.match(/"accessToken": "([^"]+)"/);
            if (tokenMatch?.[1]) return JSON.stringify({ accessToken: tokenMatch[1] });
            throw new Error("Token not found");
          })
        ];
        try {
          const tokenHtml = await Promise.any(tokenStrategies.map((s) => s()));
          const tokenData = JSON.parse(tokenHtml);
          token = tokenData.accessToken;
        } catch (e) {
        }
        if (isPlaylist2) {
          let data = null;
          if (token) {
            try {
              const apiUrl = spotifyInfo.type === "playlist" ? `https://api.spotify.com/v1/playlists/${spotifyInfo.id}` : `https://api.spotify.com/v1/albums/${spotifyInfo.id}`;
              const plRes = await fetch(apiUrl, { headers: { "Authorization": `Bearer ${token}` } });
              if (plRes.ok) data = await plRes.json();
            } catch (e) {
              console.error("Failed to fetch Spotify API:", e);
            }
          }
          const tracks = [];
          if (data) {
            const items = spotifyInfo.type === "playlist" ? data.tracks.items : data.tracks.items;
            for (const item of items) {
              const track = spotifyInfo.type === "playlist" ? item.track : item;
              if (!track) continue;
              tracks.push({
                type: "track",
                title: track.name,
                artist: track.artists.map((a) => a.name).join(", "),
                thumbnail: track.album?.images?.[0]?.url || data.images?.[0]?.url,
                duration: Math.floor(track.duration_ms / 1e3),
                streamUrl: `ytsearch:${track.name} ${track.artists[0]?.name} audio`
              });
            }
          } else {
            throw new Error(`Could not fetch Spotify ${spotifyInfo.type}. Please try again or add tracks individually.`);
          }
          if (tracks.length === 0) throw new Error(`Spotify ${spotifyInfo.type} is empty or unavailable.`);
          completeFetch({
            type: "playlist",
            name: data?.name || playlistName,
            thumbnail: data?.images?.[0]?.url || tracks.find((t) => t.thumbnail)?.thumbnail,
            trackCount: tracks.length,
            tracks
          });
          return;
        }
        let oData = null;
        try {
          const oembedUrl = `https://open.spotify.com/oembed?url=${encodeURIComponent(raw)}`;
          const proxyData = await fetchHtml(oembedUrl);
          oData = JSON.parse(proxyData);
        } catch (e) {
          throw new Error("Could not fetch Spotify track info. Please check the URL.");
        }
        if (!oData) throw new Error("Spotify track not found.");
        const trackTitle = oData.title || "Spotify Track";
        const trackArtist = oData.provider_name || oData.author_name || "Spotify";
        completeFetch({
          type: "track",
          title: trackTitle,
          artist: trackArtist,
          thumbnail: oData.thumbnail_url,
          duration: 0,
          streamUrl: `ytsearch:${trackTitle} ${trackArtist} audio`
        });
      } else {
        throw new Error("Not a recognizable YouTube or Spotify URL");
      }
    } catch (err) {
      failFetch(err instanceof Error ? err.message : "Could not fetch media info. Check the URL.");
    }
  };
  const handleAddTrack = () => {
    if (!mediaResult || mediaResult.type !== "track") return;
    const mr = mediaResult;
    const song = {
      id: Date.now().toString(),
      title: mr.title,
      artist: mr.artist,
      url: mr.streamUrl,
      youtubeId: mr.youtubeId ?? void 0,
      coverUrl: mr.thumbnail,
      duration: mr.duration
    };
    addSongToPlaylist(playlistId, song);
    onClose();
    onSongAdded?.(song, playlistId);
  };
  const buildSongs = (tracks) => tracks.map((t, i) => ({
    id: `${Date.now()}_${i}`,
    title: t.title,
    artist: t.artist,
    url: t.streamUrl,
    youtubeId: t.youtubeId ?? void 0,
    coverUrl: t.thumbnail,
    duration: t.duration
  }));
  const handleAddAllToCurrent = () => {
    if (!mediaResult || mediaResult.type !== "playlist") return;
    setImporting(true);
    const songs = buildSongs(mediaResult.tracks);
    songs.forEach((s) => addSongToPlaylist(playlistId, s));
    setTimeout(() => {
      setImporting(false);
      onClose();
    }, 400);
  };
  const handleCreateNewPlaylist = () => {
    if (!mediaResult || mediaResult.type !== "playlist") return;
    setImporting(true);
    const songs = buildSongs(mediaResult.tracks);
    const newId = addPlaylistWithSongs(mediaResult.name, songs);
    setTimeout(() => {
      setImporting(false);
      onPlaylistCreated?.(newId);
      onClose();
    }, 400);
  };
  const TABS = [
    { key: "file", label: "Upload", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Upload, { className: "h-3.5 w-3.5 inline mr-1.5" }) },
    { key: "url", label: "URL", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Link2, { className: "h-3.5 w-3.5 inline mr-1.5" }) },
    { key: "stream", label: "YouTube", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Radio, { className: "h-3.5 w-3.5 inline mr-1.5" }) }
  ];
  const isPlaylist = mediaResult?.type === "playlist";
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      className: "fixed inset-0 bg-black/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4",
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      onClick: onClose,
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          className: `bg-card border border-border rounded-xl p-6 shadow-2xl w-full ${isPlaylist ? "max-w-lg" : "max-w-md"}`,
          initial: { scale: 0.95, y: 20 },
          animate: { scale: 1, y: 0 },
          exit: { scale: 0.95, y: 20 },
          onClick: (e) => e.stopPropagation(),
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-bold text-foreground", children: "Add to playlist" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "ghost", size: "icon", onClick: onClose, className: "h-8 w-8 text-muted-foreground hover:text-foreground hover:bg-accent", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-5 w-5" }) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-0 mb-5 border-b border-border", children: TABS.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                onClick: () => setTab(t.key),
                className: `px-3 py-2 text-sm font-medium transition-colors whitespace-nowrap ${tab === t.key ? "text-foreground border-b-2 border-[#1DB954] -mb-px" : "text-muted-foreground hover:text-foreground"}`,
                children: [
                  t.icon,
                  t.label
                ]
              },
              t.key
            )) }),
            tab === "file" && /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "border-2 border-dashed border-border rounded-xl p-10 text-center cursor-pointer hover:border-[#1DB954]/60 hover:bg-[#1DB954]/5 transition-colors",
                onClick: () => fileRef.current?.click(),
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Music, { className: "h-10 w-10 mx-auto mb-3 text-muted-foreground/50" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground font-medium mb-1", children: "Choose files" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "MP3, WAV, OGG, M4A" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-[#1DB954]/60 mt-2", children: "Edit details will open after upload" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("input", { ref: fileRef, type: "file", accept: "audio/*", multiple: true, className: "hidden", onChange: handleFile })
                ]
              }
            ),
            tab === "url" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: url, onChange: (e) => setUrl(e.target.value), placeholder: "https://example.com/song.mp3", className: "bg-muted border-border text-foreground placeholder:text-muted-foreground focus-visible:ring-[#1DB954]" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: title, onChange: (e) => setTitle(e.target.value), placeholder: "Song title", className: "bg-muted border-border text-foreground placeholder:text-muted-foreground" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: artist, onChange: (e) => setArtist(e.target.value), placeholder: "Artist name", className: "bg-muted border-border text-foreground placeholder:text-muted-foreground" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { className: "w-full bg-[#1DB954] hover:bg-[#1ed760] text-black font-bold rounded-full mt-2", onClick: handleUrl, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-4 w-4 mr-2" }),
                "Add Song"
              ] })
            ] }),
            tab === "stream" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    value: streamInput,
                    onChange: (e) => {
                      setStreamInput(e.target.value);
                      setFetchState("idle");
                      setMediaResult(null);
                    },
                    onKeyDown: (e) => e.key === "Enter" && handleFetchStream(),
                    placeholder: "Paste YouTube link…",
                    className: "flex-1 px-3 py-2.5 bg-muted border border-border rounded-lg text-sm text-foreground placeholder:text-muted-foreground outline-none focus:ring-2 focus:ring-[#1DB954]/50"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    onClick: handleFetchStream,
                    disabled: fetchState === "loading" || !streamInput.trim(),
                    className: "relative overflow-hidden px-4 py-2.5 bg-[#1DB954] disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#1ed760] text-black font-bold rounded-lg text-sm transition-all duration-300 flex items-center gap-1.5 active:scale-95 shrink-0",
                    children: [
                      fetchState === "loading" && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          motion.div,
                          {
                            className: "absolute inset-y-0 left-0 bg-gradient-to-r from-white/10 via-white/35 to-white/50 border-r-2 border-white/90 shadow-[0_0_12px_rgba(255,255,255,1)] z-0",
                            initial: { width: "0%" },
                            animate: { width: `${progress}%` },
                            transition: { type: "tween", ease: "easeOut", duration: 0.15 }
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          motion.div,
                          {
                            className: "absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent z-0",
                            animate: { x: ["-100%", "100%"] },
                            transition: { repeat: Infinity, duration: 1.4, ease: "linear" }
                          }
                        )
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative z-10 flex items-center gap-1.5", children: fetchState === "loading" ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-4 w-4 animate-spin shrink-0" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                          "Detecting (",
                          Math.round(progress),
                          "%)"
                        ] })
                      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Radio, { className: "h-4 w-4 shrink-0" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Fetch" })
                      ] }) })
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1.5 flex-wrap", children: [
                "youtube.com/watch?v=…",
                "youtube.com/playlist?list=…"
              ].map((hint) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-muted-foreground/60 bg-muted/60 px-2 py-0.5 rounded-full font-mono", children: hint }, hint)) }),
              fetchState === "error" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-red-500/10 border border-red-500/30 rounded-lg px-3 py-2.5 text-xs text-red-400", children: fetchError }),
              fetchState === "done" && mediaResult?.type === "track" && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                motion.div,
                {
                  initial: { opacity: 0, y: 6 },
                  animate: { opacity: 1, y: 0 },
                  className: "bg-muted/60 rounded-xl overflow-hidden border border-border",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 p-3 items-center", children: [
                      mediaResult.thumbnail ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: mediaResult.thumbnail, alt: "", className: "w-14 h-14 rounded-lg object-cover shrink-0" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-14 h-14 rounded-lg bg-muted flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Music, { className: "h-6 w-6 text-muted-foreground/50" }) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-foreground truncate", children: mediaResult.title }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground truncate", children: mediaResult.artist }),
                        mediaResult.duration > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground/60 mt-0.5", children: formatTime(mediaResult.duration) })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-2 h-2 rounded-full bg-[#1DB954] animate-pulse shrink-0", title: "Ready to stream" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-3 pb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      Button,
                      {
                        className: "w-full bg-[#1DB954] hover:bg-[#1ed760] text-black font-bold rounded-full text-sm",
                        onClick: handleAddTrack,
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-4 w-4 mr-2" }),
                          "Add to playlist"
                        ]
                      }
                    ) })
                  ]
                }
              ),
              fetchState === "done" && mediaResult?.type === "playlist" && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                motion.div,
                {
                  initial: { opacity: 0, y: 6 },
                  animate: { opacity: 1, y: 0 },
                  className: "bg-muted/60 rounded-xl border border-border overflow-hidden",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 p-4 items-center border-b border-border", children: [
                      mediaResult.thumbnail ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: mediaResult.thumbnail, alt: "", className: "w-14 h-14 rounded-lg object-cover shrink-0" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-14 h-14 rounded-lg bg-gradient-to-br from-purple-700 to-indigo-900 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Library, { className: "h-6 w-6 text-white/60" }) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] uppercase tracking-widest text-[#1DB954] font-bold mb-0.5", children: "Playlist detected" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-bold text-foreground truncate", children: mediaResult.name }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
                          mediaResult.tracks.length,
                          " songs",
                          mediaResult.trackCount > mediaResult.tracks.length && ` (showing ${mediaResult.tracks.length} of ${mediaResult.trackCount})`
                        ] })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-h-48 overflow-y-auto", children: mediaResult.tracks.map((t, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 px-4 py-2 hover:bg-accent/30 transition-colors", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-muted-foreground/50 w-4 text-right shrink-0", children: i + 1 }),
                      t.thumbnail ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: t.thumbnail, alt: "", className: "w-8 h-8 rounded object-cover shrink-0" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 rounded bg-muted shrink-0" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-foreground truncate", children: t.title }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground truncate", children: t.artist })
                      ] }),
                      t.duration > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-muted-foreground/50 shrink-0", children: formatTime(t.duration) })
                    ] }, i)) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 flex flex-col gap-2 border-t border-border", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        Button,
                        {
                          className: "w-full bg-[#1DB954] hover:bg-[#1ed760] text-black font-bold rounded-full text-sm",
                          onClick: handleCreateNewPlaylist,
                          disabled: importing,
                          children: [
                            importing ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-4 w-4 mr-2 animate-spin" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-4 w-4 mr-2" }),
                            'Create new playlist "',
                            mediaResult.name,
                            '"'
                          ]
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        Button,
                        {
                          variant: "outline",
                          className: "w-full border-border text-foreground hover:bg-muted/60 rounded-full text-sm",
                          onClick: handleAddAllToCurrent,
                          disabled: importing,
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-4 w-4 mr-2" }),
                            "Add all ",
                            mediaResult.tracks.length,
                            ' songs to "',
                            currentPlaylistName,
                            '"'
                          ]
                        }
                      )
                    ] })
                  ]
                }
              ),
              fetchState === "idle" && !mediaResult && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-6 text-muted-foreground/40", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Youtube, { className: "h-8 w-8 mx-auto mb-2 opacity-40" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs", children: "Paste a YouTube link — single track or entire playlist" })
              ] })
            ] })
          ]
        }
      )
    }
  );
}
function SongListItem({
  song,
  idx,
  selId,
  isActive,
  activeItemId,
  isPlayingThis,
  duration,
  playSong,
  removeSongFromPlaylist,
  setEditSong,
  setActiveItemId
}) {
  const controls = useDragControls();
  const isMobile = typeof window !== "undefined" ? window.innerWidth < 768 : false;
  const [sg0, sg1] = getGrad(song.title);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(ReorderItem, { as: "div", value: song, dragListener: !isMobile, dragControls: controls, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { delay: idx * 0.02 },
        className: `md:hidden grid gap-2 px-2 py-2 rounded-md transition-colors border border-border/30 ${isActive ? "bg-muted border-[#1DB954]/30" : activeItemId === song.id ? "bg-muted/70" : "hover:bg-muted/40"}`,
        style: { gridTemplateColumns: "auto 1fr auto" },
        onClick: () => {
          setActiveItemId(song.id);
          playSong(song, selId);
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "flex items-center justify-center flex-shrink-0 cursor-grab active:cursor-grabbing px-2 py-1",
              onPointerDown: (e) => {
                if (isMobile) {
                  e.preventDefault();
                  controls.start(e);
                }
              },
              style: { touchAction: "none" },
              onClick: (e) => e.stopPropagation(),
              children: isPlayingThis ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-end gap-0.5 h-4", children: [0, 1, 2].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { className: "w-0.5 bg-[#1DB954] rounded-full", animate: { height: ["30%", "100%", "30%"] }, transition: { repeat: Infinity, duration: 0.6, delay: i * 0.2 } }, i)) }) : isActive ? /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[#1DB954] font-semibold text-xs", children: [
                "| ",
                idx + 1
              ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground text-xs", children: [
                "| ",
                idx + 1
              ] })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 min-w-0 pointer-events-none", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `w-8 h-8 rounded flex-shrink-0 flex items-center justify-center bg-gradient-to-br ${sg0} ${sg1}`, children: song.coverUrl ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: song.coverUrl, alt: "", className: "w-full h-full object-cover rounded" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Music, { className: "h-3 w-3 text-white/50" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `text-xs font-medium truncate ${isActive ? "text-[#1DB954]" : "text-foreground"}`, children: song.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground truncate", children: song.artist })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(ThreeDotMenu, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { icon: Pencil, label: "Edit", onClick: (e) => {
              e.stopPropagation();
              setEditSong({ song, playlistId: selId });
            } }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { icon: Trash2, label: "Delete", destructive: true, onClick: (e) => {
              e.stopPropagation();
              removeSongFromPlaylist(selId, song.id);
            } })
          ] }) })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { delay: idx * 0.02 },
        className: `hidden md:grid group gap-4 px-4 py-3 rounded-md cursor-pointer transition-colors ${isActive ? "bg-muted" : activeItemId === song.id ? "bg-muted/70" : "hover:bg-muted/40"}`,
        style: { gridTemplateColumns: "28px 1fr 80px 64px" },
        onClick: () => {
          setActiveItemId(song.id);
          playSong(song, selId);
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center text-sm font-semibold pointer-events-none", children: isPlayingThis ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-end gap-0.5 h-4", children: [0, 1, 2].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { className: "w-0.5 bg-[#1DB954] rounded-full", animate: { height: ["30%", "100%", "30%"] }, transition: { repeat: Infinity, duration: 0.6, delay: i * 0.2 } }, i)) }) : isActive ? /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[#1DB954] text-sm", children: [
            "| ",
            idx + 1
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground group-hover:hidden text-sm", children: [
              "| ",
              idx + 1
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Play, { className: "h-3.5 w-3.5 text-foreground hidden group-hover:block" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 min-w-0 pointer-events-none", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `w-10 h-10 rounded flex-shrink-0 flex items-center justify-center bg-gradient-to-br ${sg0} ${sg1}`, children: song.coverUrl ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: song.coverUrl, alt: "", className: "w-full h-full object-cover rounded" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Music, { className: "h-4 w-4 text-white/50" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `text-sm font-medium truncate ${isActive ? "text-[#1DB954]" : "text-foreground"}`, children: song.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground truncate", children: song.artist }),
              song.description && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground/60 truncate", children: song.description }),
              song.tags && song.tags.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1 mt-0.5 flex-wrap", children: song.tags.slice(0, 3).map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[9px] bg-[#1DB954]/15 text-[#1DB954] px-1.5 py-0.5 rounded-full", children: [
                "#",
                t
              ] }, t)) })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center pointer-events-none", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-muted-foreground", children: isActive ? formatTime(duration) : "—" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(ThreeDotMenu, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { icon: Pencil, label: "Rename / Edit", shortcut: "F2", onClick: (e) => {
              e.stopPropagation();
              setEditSong({ song, playlistId: selId });
            } }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { icon: Trash2, label: "Delete", shortcut: "Del", destructive: true, onClick: (e) => {
              e.stopPropagation();
              removeSongFromPlaylist(selId, song.id);
            } })
          ] }) })
        ]
      }
    )
  ] });
}
function MusicPage() {
  const musicCtx = useMusicContext();
  const {
    playlists,
    currentSong,
    currentPlaylistId,
    isPlaying,
    duration,
    volume,
    progress,
    addPlaylist,
    deletePlaylist,
    renamePlaylist,
    removeSongFromPlaylist,
    playSong,
    nextSong
  } = musicCtx;
  const { theme } = useAppContext();
  const [selId, setSelId] = reactExports.useState(playlists[0]?.id || "default");
  const [showAdd, setShowAdd] = reactExports.useState(false);
  const [showSearch, setShowSearch] = reactExports.useState(false);
  const [editSong, setEditSong] = reactExports.useState(null);
  const [newName, setNewName] = reactExports.useState("");
  const [showNew, setShowNew] = reactExports.useState(false);
  const [editId, setEditId] = reactExports.useState(null);
  const [editName, setEditName] = reactExports.useState("");
  const [filterTab, setFilterTab] = reactExports.useState("all");
  const [showMobileSidebar, setShowMobileSidebar] = reactExports.useState(() => typeof window !== "undefined" ? window.innerWidth < 768 : false);
  const [activeItemId, setActiveItemId] = reactExports.useState(null);
  const [localPlaylists, setLocalPlaylists] = reactExports.useState(playlists);
  reactExports.useEffect(() => setLocalPlaylists(playlists), [playlists]);
  reactExports.useEffect(() => {
    const onKey = (e) => {
      const tag = e.target?.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA") return;
      let itemType = null;
      let targetPlaylist = null;
      let targetSong = null;
      if (activeItemId) {
        targetPlaylist = playlists.find((p) => p.id === activeItemId);
        if (targetPlaylist) {
          itemType = "playlist";
        } else {
          for (const p of playlists) {
            targetSong = p.songs.find((s) => s.id === activeItemId);
            if (targetSong) {
              itemType = "song";
              targetPlaylist = p;
              break;
            }
          }
        }
      }
      if (!e.ctrlKey && !e.metaKey && e.key.toLowerCase() === "n") {
        e.preventDefault();
        if (itemType === "song") setShowAdd(true);
        else setShowNew(true);
      } else if (e.key === "F2") {
        if (!itemType) return;
        e.preventDefault();
        if (itemType === "playlist") {
          setEditId(targetPlaylist.id);
          setEditName(targetPlaylist.name);
        } else if (itemType === "song") setEditSong({ song: targetSong, playlistId: targetPlaylist.id });
      } else if (e.key === "Delete") {
        if (!itemType) return;
        e.preventDefault();
        if (itemType === "playlist" && targetPlaylist.id !== "default") deletePlaylist(targetPlaylist.id);
        else if (itemType === "song") removeSongFromPlaylist(targetPlaylist.id, targetSong.id);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [activeItemId, playlists, deletePlaylist, removeSongFromPlaylist]);
  const bgClass = "bg-background";
  const sidebarBg = "bg-sidebar";
  const textClass = "text-foreground";
  const mutedTextClass = "text-muted-foreground";
  const accentColor = "#1DB954";
  const accentHover = "#1ed760";
  const sel = localPlaylists.find((p) => p.id === selId) || localPlaylists[0];
  const [g0, g1] = sel ? getGrad(sel.name) : getGrad("default");
  const createPlaylist = () => {
    if (!newName.trim()) return;
    addPlaylist(newName.trim());
    setNewName("");
    setShowNew(false);
  };
  const saveRename = () => {
    if (editId && editName.trim()) renamePlaylist(editId, editName.trim());
    setEditId(null);
  };
  const SidebarContent = reactExports.useMemo(() => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `w-full md:w-48 lg:w-56 xl:w-72 flex-shrink-0 flex flex-col p-1 md:p-2 gap-2 overflow-hidden ${showMobileSidebar ? "flex fixed inset-0 z-[200] bg-background/95 backdrop-blur-xl md:relative md:z-auto md:bg-transparent" : "hidden md:flex"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `${sidebarBg} rounded-lg flex-1 flex flex-col overflow-hidden border border-border`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 flex-shrink-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: `flex items-center gap-2 ${mutedTextClass} hover:text-foreground transition-colors font-bold text-sm`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Library, { className: "h-5 w-5" }),
          "Your Library"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-0.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => setShowNew((v) => !v),
              className: `h-8 w-8 flex items-center justify-center rounded-full hover:bg-muted/60 ${mutedTextClass} hover:text-foreground transition-colors`,
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-4 w-4" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: `hidden md:flex h-8 w-8 items-center justify-center rounded-full hover:bg-muted/60 ${mutedTextClass} hover:text-foreground transition-colors`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "h-4 w-4" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setShowMobileSidebar(false), className: `md:hidden h-8 w-8 flex items-center justify-center rounded-full bg-muted/30 hover:bg-muted/60 ${mutedTextClass} hover:text-foreground transition-colors ml-1`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2", children: ["all", "playlists"].map((f) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => setFilterTab(f),
          className: `px-3 py-1 rounded-full text-xs font-medium transition-colors capitalize
                    ${filterTab === f ? "bg-foreground text-background" : "bg-muted text-foreground hover:bg-muted/70"}`,
          children: f === "all" ? "All" : "Playlists"
        },
        f
      )) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: showNew && /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: { opacity: 0, height: 0 }, animate: { opacity: 1, height: "auto" }, exit: { opacity: 0, height: 0 }, className: "px-4 overflow-hidden flex-shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 mb-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Input,
        {
          value: newName,
          onChange: (e) => setNewName(e.target.value),
          placeholder: "Playlist name",
          className: "bg-muted text-foreground placeholder:text-muted-foreground/50 border-0 h-8 text-sm focus-visible:ring-[#1DB954]",
          onKeyDown: (e) => e.key === "Enter" && createPlaylist(),
          autoFocus: true
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "icon", className: `h-8 w-8 text-black flex-shrink-0`, style: { backgroundColor: accentColor }, onMouseEnter: (e) => e.currentTarget.style.backgroundColor = accentHover, onMouseLeave: (e) => e.currentTarget.style.backgroundColor = accentColor, onClick: createPlaylist, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-3.5 w-3.5" }) })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ReorderGroup, { as: "div", axis: "y", values: localPlaylists, onReorder: (newPlaylists) => {
      setLocalPlaylists(newPlaylists);
      musicCtx.reorderPlaylists?.(newPlaylists);
    }, className: "flex-1 overflow-y-auto px-2 pb-2 space-y-0.5", children: localPlaylists.map((p) => {
      const [pg0, pg1] = getGrad(p.name);
      const isActive = p.id === selId;
      const isPlayingThis = currentPlaylistId === p.id && isPlaying;
      return /* @__PURE__ */ jsxRuntimeExports.jsx(ReorderItem, { as: "div", value: p, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: `group flex items-center gap-3 px-2 py-2 rounded-md cursor-pointer transition-colors
                    ${isActive ? "bg-muted" : activeItemId === p.id ? "bg-muted/70" : "hover:bg-muted/50"}`,
          onClick: () => {
            setSelId(p.id);
            setActiveItemId(p.id);
            setShowMobileSidebar(false);
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `w-10 h-10 rounded flex-shrink-0 flex items-center justify-center bg-gradient-to-br ${pg0} ${pg1}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Music, { className: "h-4 w-4 text-white/60" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
              editId === p.id ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  className: `bg-transparent text-sm ${textClass} outline-none border-b border-[#1DB954] w-full`,
                  value: editName,
                  onChange: (e) => setEditName(e.target.value),
                  onBlur: saveRename,
                  onKeyDown: (e) => e.key === "Enter" && saveRename(),
                  autoFocus: true,
                  onClick: (e) => e.stopPropagation()
                }
              ) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `text-sm font-medium truncate ${isActive ? "text-foreground" : "text-muted-foreground group-hover:text-foreground"}`, children: p.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground/60", children: [
                "Playlist · ",
                p.songs.length,
                " songs"
              ] })
            ] }),
            isPlayingThis && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-end gap-0.5 h-4 flex-shrink-0", children: [0, 1, 2].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { className: "w-0.5 bg-[#1DB954] rounded-full", animate: { height: ["30%", "100%", "30%"] }, transition: { repeat: Infinity, duration: 0.6, delay: i * 0.2 } }, i)) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(ThreeDotMenu, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { icon: Pencil, label: "Rename", shortcut: "F2", onClick: (e) => {
                e.stopPropagation();
                setEditId(p.id);
                setEditName(p.name);
              } }),
              p.id !== "default" && /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { icon: Trash2, label: "Delete", shortcut: "Del", destructive: true, onClick: (e) => {
                e.stopPropagation();
                deletePlaylist(p.id);
              } })
            ] })
          ]
        },
        p.id
      ) }, p.id);
    }) })
  ] }) }), [localPlaylists, selId, currentPlaylistId, isPlaying, showNew, newName, editId, editName, filterTab, showMobileSidebar, activeItemId]);
  const SongTableContent = reactExports.useMemo(() => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 overflow-y-auto px-2 sm:px-4 md:px-6 pb-4", children: !sel || sel.songs.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center justify-center py-16 sm:py-20 text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Music, { className: "h-12 sm:h-16 w-12 sm:w-16 text-foreground/10 mb-3 sm:mb-4" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground font-semibold mb-1 text-sm sm:text-base", children: "It's quiet in here" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-xs sm:text-sm mb-4 sm:mb-6", children: "Add songs to get started." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        onClick: () => setShowAdd(true),
        className: "px-4 sm:px-6 py-1.5 sm:py-2 border border-border text-foreground rounded-full text-xs sm:text-sm font-semibold hover:border-foreground transition-colors",
        children: "Add songs"
      }
    )
  ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "hidden md:grid gap-4 px-2 sm:px-4 py-2 border-b border-border mb-1 text-xs font-medium text-muted-foreground uppercase tracking-wider select-none",
        style: { gridTemplateColumns: "28px 1fr 80px 64px" },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-center", children: "#" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Title" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-3.5 w-3.5" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", {})
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ReorderGroup, { as: "div", axis: "y", values: sel.songs, onReorder: (newSongs) => {
      setLocalPlaylists((prev) => prev.map((p) => p.id === selId ? { ...p, songs: newSongs } : p));
      musicCtx.reorderSongs?.(selId, newSongs);
    }, className: "space-y-1", children: sel.songs.map((song, idx) => {
      const isActive = currentSong?.id === song.id;
      const isPlayingThis = isActive && isPlaying;
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        SongListItem,
        {
          song,
          idx,
          selId,
          isActive,
          activeItemId,
          isPlayingThis,
          duration,
          playSong,
          removeSongFromPlaylist,
          setEditSong,
          setActiveItemId
        },
        song.id
      );
    }) })
  ] }) }), [sel, selId, currentSong, isPlaying, activeItemId, duration]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 }, className: `flex h-full ${bgClass} pb-20 overflow-hidden flex-col md:flex-row`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(AnimatePresence, { children: [
      showAdd && /* @__PURE__ */ jsxRuntimeExports.jsx(
        AddSongModal,
        {
          playlistId: selId,
          onClose: () => setShowAdd(false),
          onSongAdded: (song, pid) => setEditSong({ song, playlistId: pid }),
          onPlaylistCreated: (newId) => setSelId(newId)
        }
      ),
      showSearch && /* @__PURE__ */ jsxRuntimeExports.jsx(
        YouTubeSearchModal,
        {
          playlistId: selId,
          onClose: () => setShowSearch(false),
          onSongAdded: (song) => setEditSong({ song, playlistId: selId })
        }
      ),
      editSong && /* @__PURE__ */ jsxRuntimeExports.jsx(
        EditSongModal,
        {
          song: editSong.song,
          playlistId: editSong.playlistId,
          onClose: () => setEditSong(null)
        }
      )
    ] }),
    SidebarContent,
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 flex flex-col overflow-hidden rounded-none sm:rounded-lg bg-card m-0 sm:m-2 sm:ml-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `bg-gradient-to-b ${g0} ${g1} px-3 sm:px-4 md:px-6 pt-14 sm:pt-8 md:pt-14 pb-2 sm:pb-3 md:pb-5 flex-shrink-0 relative`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setShowMobileSidebar(true), className: "md:hidden absolute top-4 left-4 z-10 px-3 py-1.5 bg-black/20 rounded-full text-white/90 hover:text-white hover:bg-black/40 backdrop-blur-md flex items-center gap-1.5 text-xs font-medium transition-colors", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Library, { className: "h-3.5 w-3.5" }),
          " Library"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row sm:items-end gap-3 sm:gap-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `w-32 h-32 sm:w-40 sm:h-40 md:w-44 md:h-44 bg-gradient-to-br ${g0} ${g1} shadow-2xl rounded-sm flex items-center justify-center flex-shrink-0`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Music, { className: "h-12 sm:h-16 md:h-20 w-12 sm:w-16 md:w-20 text-white/20" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 pb-0 sm:pb-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[9px] sm:text-[10px] md:text-[11px] font-bold text-white uppercase tracking-widest mb-1 sm:mb-2", children: "Playlist" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl sm:text-3xl md:text-4xl font-black text-white leading-none mb-2 sm:mb-4 truncate", children: sel?.name || "Library" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs sm:text-sm text-white/70", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-white", children: "OM" }),
              " · ",
              sel?.songs.length || 0,
              " songs"
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 flex items-center gap-2 sm:gap-3 md:gap-5 flex-shrink-0 bg-gradient-to-b from-background/20 to-transparent flex-wrap", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => {
              const s = sel?.songs[0];
              if (s) playSong(s, selId);
            },
            className: "w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-[#1DB954] hover:bg-[#1ed760] hover:scale-105 rounded-full flex items-center justify-center transition-all shadow-lg flex-shrink-0",
            children: isPlaying && currentPlaylistId === selId ? /* @__PURE__ */ jsxRuntimeExports.jsx(Pause, { className: "h-4 sm:h-5 md:h-6 w-4 sm:w-5 md:w-6 text-black" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Play, { className: "h-4 sm:h-5 md:h-6 w-4 sm:w-5 md:w-6 text-black ml-1" })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setShowAdd(true), className: "flex items-center gap-1 sm:gap-1.5 text-muted-foreground hover:text-foreground text-xs sm:text-sm font-medium transition-colors flex-shrink-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-3.5 sm:h-4 w-3.5 sm:w-4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: "Add" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setShowSearch(true), className: "flex items-center gap-1 sm:gap-1.5 text-muted-foreground hover:text-foreground text-xs sm:text-sm font-medium transition-colors flex-shrink-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "h-3.5 sm:h-4 w-3.5 sm:w-4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: "Search" })
        ] })
      ] }),
      SongTableContent
    ] })
  ] });
}
export {
  MusicPage as default
};
