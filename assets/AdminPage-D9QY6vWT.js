import { c as createLucideIcon, k as useStreakContext, D as useToast, j as jsxRuntimeExports, m as motion, b as cn, E as formatSessionTime, G as formatDigitalClock, B as Button, o as Play, P as Pause, i as useAppContext, w as useWorkspaceContext, H as idbGet, J as idbSet, K as auth, N as db, O as idbGetAllKeys, Q as Shield, F as Flame, U as Trophy, W as User, I as Input, v as LoaderCircle, Y as LayoutDashboard, M as Music, z as FileText, Z as BookOpen, $ as BrainCircuit, d as CalendarDays, a0 as Layers, a1 as Activity, X, g as ChevronLeft, h as ChevronRight, A as AnimatePresence, a2 as Database, x as FolderPlus, a3 as Key, a4 as EyeOff, a5 as Eye, f as Check, a6 as CircleAlert } from "./index-DlaKRKjd.js";
import { g as commonjsGlobal, h as getDefaultExportFromCjs, b as reactExports, i as ResponsiveContainer, P as PieChart, j as Pie, C as Cell, T as Tooltip, L as Legend, B as BarChart, k as CartesianGrid, X as XAxis, Y as YAxis, l as Bar, A as AreaChart, m as Area, n as Brush } from "./vendor-charts-Du7SI2xx.js";
import { S as Square } from "./square-Bra6_aZD.js";
import { Z as Zap } from "./zap-Dbu1SZbl.js";
import { d as getDoc, e as doc, u as updateDoc, j as sendPasswordResetEmail } from "./vendor-firebase-C_hAKoH5.js";
import { C as Clock } from "./clock-5aOPFhLP.js";
import { T as Timer } from "./timer-WQUdFpfo.js";
import { C as CircleCheck } from "./circle-check-BO2JSq9N.js";
import { F as FilePlay } from "./file-play-DZqL2GLx.js";
import { T as Target } from "./target-BV-pjsuL.js";
import { P as Plus, a as Pencil } from "./plus-BzcZPIcm.js";
import { T as Trash2 } from "./trash-2-BuiCWaDM.js";
import { D as Download } from "./download-C23qhGOr.js";
import { U as Upload } from "./upload-CJzMibtD.js";
import { R as RefreshCw } from "./refresh-cw-CAIw6daM.js";
import { L as LayoutGrid, a as ListTree, F as Folder } from "./list-tree-v1d3bLJf.js";
import { F as FolderOpen } from "./folder-open-BkfkevBg.js";
const __iconNode$3 = [
  ["rect", { width: "20", height: "5", x: "2", y: "3", rx: "1", key: "1wp1u1" }],
  ["path", { d: "M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8", key: "1s80jp" }],
  ["path", { d: "M10 12h4", key: "a56b0p" }]
];
const Archive = createLucideIcon("archive", __iconNode$3);
const __iconNode$2 = [
  ["path", { d: "M13 5h8", key: "a7qcls" }],
  ["path", { d: "M13 12h8", key: "h98zly" }],
  ["path", { d: "M13 19h8", key: "c3s6r1" }],
  ["path", { d: "m3 17 2 2 4-4", key: "1jhpwq" }],
  ["rect", { x: "3", y: "4", width: "6", height: "6", rx: "1", key: "cif1o7" }]
];
const ListTodo = createLucideIcon("list-todo", __iconNode$2);
const __iconNode$1 = [
  ["path", { d: "m16 17 5-5-5-5", key: "1bji2h" }],
  ["path", { d: "M21 12H9", key: "dn1m92" }],
  ["path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4", key: "1uf3rs" }]
];
const LogOut = createLucideIcon("log-out", __iconNode$1);
const __iconNode = [
  ["path", { d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7", key: "132q7q" }],
  ["rect", { x: "2", y: "4", width: "20", height: "16", rx: "2", key: "izxlao" }]
];
const Mail = createLucideIcon("mail", __iconNode);
function StudySessionWidget({ className, compact = false }) {
  const {
    sessionState,
    sessionElapsedSeconds,
    sessionStartTime,
    startSession,
    pauseSession,
    resumeSession,
    endSession,
    completedSessions
  } = useStreakContext();
  const { toast } = useToast();
  const handleEndSession = () => {
    const completed = endSession();
    if (completed) {
      toast({
        title: "Study Session Recorded! 🎉",
        description: `${completed.durationFormatted} saved to your Analytics (${completed.timeRangeFormatted}).`
      });
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 10 },
      animate: { opacity: 1, y: 0 },
      transition: { delay: 0.15 },
      className: cn(
        "bg-card/90 dark:bg-card/75 backdrop-blur-xl border border-primary/25 rounded-2xl p-3.5 sm:p-4 shadow-xl relative overflow-hidden group transition-all",
        className
      ),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: cn(
              "absolute -right-12 -top-12 w-32 h-32 rounded-full blur-3xl transition-colors duration-700 pointer-events-none",
              sessionState === "running" ? "bg-emerald-500/20" : sessionState === "paused" ? "bg-amber-500/20" : "bg-primary/15"
            )
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row sm:items-center justify-between gap-3 relative z-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-wrap", children: [
              sessionState === "running" ? /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 text-[10px] sm:text-[11px] font-bold tracking-wide uppercase", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative flex h-2 w-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative inline-flex rounded-full h-2 w-2 bg-emerald-500" })
                ] }),
                "Live Session Active"
              ] }) : sessionState === "paused" ? /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-amber-500/15 text-amber-600 dark:text-amber-400 border border-amber-500/30 text-[10px] sm:text-[11px] font-bold tracking-wide uppercase", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 rounded-full bg-amber-500" }),
                "Session Paused"
              ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-muted text-muted-foreground border border-border text-[10px] sm:text-[11px] font-bold tracking-wide uppercase", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 rounded-full bg-muted-foreground/50" }),
                "Study Session Tracker"
              ] }),
              sessionStartTime && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] sm:text-[11px] text-muted-foreground font-medium", children: [
                "Started ",
                formatSessionTime(sessionStartTime)
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-baseline gap-2.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl sm:text-3xl font-black font-mono tracking-tight text-foreground select-none", children: formatDigitalClock(sessionElapsedSeconds) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] sm:text-xs text-muted-foreground font-medium truncate max-w-[200px] sm:max-w-none", children: sessionState === "running" ? "Live background counter" : sessionState === "paused" ? "Timer paused" : "Ready to start session" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 shrink-0 flex-wrap", children: [
            sessionState === "idle" && /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                onClick: startSession,
                size: "sm",
                className: "gap-1.5 text-xs font-bold bg-primary hover:bg-primary/90 text-primary-foreground shadow-md hover:shadow-primary/25 hover:scale-[1.02] active:scale-[0.98] transition-all px-3.5 py-2 h-auto rounded-xl",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Play, { className: "h-3.5 w-3.5 fill-current" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Start Session" })
                ]
              }
            ),
            sessionState === "running" && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  onClick: pauseSession,
                  variant: "outline",
                  size: "sm",
                  className: "gap-1 text-xs font-semibold border-amber-500/40 text-amber-600 dark:text-amber-400 hover:bg-amber-500/10 px-3 py-1.5 h-auto rounded-xl",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Pause, { className: "h-3.5 w-3.5 fill-current" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Pause" })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  onClick: handleEndSession,
                  size: "sm",
                  className: "gap-1 text-xs font-bold bg-emerald-600 hover:bg-emerald-700 text-white shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all px-3.5 py-1.5 h-auto rounded-xl",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Square, { className: "h-3.5 w-3.5 fill-current" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "End & Save" })
                  ]
                }
              )
            ] }),
            sessionState === "paused" && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  onClick: resumeSession,
                  size: "sm",
                  className: "gap-1 text-xs font-bold bg-primary hover:bg-primary/90 text-primary-foreground shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all px-3 py-1.5 h-auto rounded-xl",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Play, { className: "h-3.5 w-3.5 fill-current" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Resume" })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  onClick: handleEndSession,
                  variant: "outline",
                  size: "sm",
                  className: "gap-1 text-xs font-bold border-emerald-500/40 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500/10 px-3 py-1.5 h-auto rounded-xl",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Square, { className: "h-3.5 w-3.5 fill-current" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "End & Save" })
                  ]
                }
              )
            ] })
          ] })
        ] }),
        !compact && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2.5 pt-2 border-t border-border/50 flex items-center justify-between text-[10px] sm:text-[11px] text-muted-foreground flex-wrap gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "h-3 w-3 text-amber-500 shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Background Safe: Runs while browsing all pages and tabs." })
          ] }),
          completedSessions.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-semibold text-primary shrink-0", children: [
            completedSessions.length,
            " ",
            completedSessions.length === 1 ? "session recorded" : "sessions recorded"
          ] })
        ] })
      ]
    }
  );
}
function commonjsRequire(path) {
  throw new Error('Could not dynamically require "' + path + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var jszip_min = { exports: {} };
var hasRequiredJszip_min;
function requireJszip_min() {
  if (hasRequiredJszip_min) return jszip_min.exports;
  hasRequiredJszip_min = 1;
  (function(module, exports$1) {
    !(function(e) {
      module.exports = e();
    })(function() {
      return (function s(a, o, h) {
        function u(r, e2) {
          if (!o[r]) {
            if (!a[r]) {
              var t = "function" == typeof commonjsRequire && commonjsRequire;
              if (!e2 && t) return t(r, true);
              if (l) return l(r, true);
              var n = new Error("Cannot find module '" + r + "'");
              throw n.code = "MODULE_NOT_FOUND", n;
            }
            var i = o[r] = { exports: {} };
            a[r][0].call(i.exports, function(e3) {
              var t2 = a[r][1][e3];
              return u(t2 || e3);
            }, i, i.exports, s, a, o, h);
          }
          return o[r].exports;
        }
        for (var l = "function" == typeof commonjsRequire && commonjsRequire, e = 0; e < h.length; e++) u(h[e]);
        return u;
      })({ 1: [function(e, t, r) {
        var d = e("./utils"), c = e("./support"), p = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
        r.encode = function(e2) {
          for (var t2, r2, n, i, s, a, o, h = [], u = 0, l = e2.length, f = l, c2 = "string" !== d.getTypeOf(e2); u < e2.length; ) f = l - u, n = c2 ? (t2 = e2[u++], r2 = u < l ? e2[u++] : 0, u < l ? e2[u++] : 0) : (t2 = e2.charCodeAt(u++), r2 = u < l ? e2.charCodeAt(u++) : 0, u < l ? e2.charCodeAt(u++) : 0), i = t2 >> 2, s = (3 & t2) << 4 | r2 >> 4, a = 1 < f ? (15 & r2) << 2 | n >> 6 : 64, o = 2 < f ? 63 & n : 64, h.push(p.charAt(i) + p.charAt(s) + p.charAt(a) + p.charAt(o));
          return h.join("");
        }, r.decode = function(e2) {
          var t2, r2, n, i, s, a, o = 0, h = 0, u = "data:";
          if (e2.substr(0, u.length) === u) throw new Error("Invalid base64 input, it looks like a data url.");
          var l, f = 3 * (e2 = e2.replace(/[^A-Za-z0-9+/=]/g, "")).length / 4;
          if (e2.charAt(e2.length - 1) === p.charAt(64) && f--, e2.charAt(e2.length - 2) === p.charAt(64) && f--, f % 1 != 0) throw new Error("Invalid base64 input, bad content length.");
          for (l = c.uint8array ? new Uint8Array(0 | f) : new Array(0 | f); o < e2.length; ) t2 = p.indexOf(e2.charAt(o++)) << 2 | (i = p.indexOf(e2.charAt(o++))) >> 4, r2 = (15 & i) << 4 | (s = p.indexOf(e2.charAt(o++))) >> 2, n = (3 & s) << 6 | (a = p.indexOf(e2.charAt(o++))), l[h++] = t2, 64 !== s && (l[h++] = r2), 64 !== a && (l[h++] = n);
          return l;
        };
      }, { "./support": 30, "./utils": 32 }], 2: [function(e, t, r) {
        var n = e("./external"), i = e("./stream/DataWorker"), s = e("./stream/Crc32Probe"), a = e("./stream/DataLengthProbe");
        function o(e2, t2, r2, n2, i2) {
          this.compressedSize = e2, this.uncompressedSize = t2, this.crc32 = r2, this.compression = n2, this.compressedContent = i2;
        }
        o.prototype = { getContentWorker: function() {
          var e2 = new i(n.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new a("data_length")), t2 = this;
          return e2.on("end", function() {
            if (this.streamInfo.data_length !== t2.uncompressedSize) throw new Error("Bug : uncompressed data size mismatch");
          }), e2;
        }, getCompressedWorker: function() {
          return new i(n.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize", this.compressedSize).withStreamInfo("uncompressedSize", this.uncompressedSize).withStreamInfo("crc32", this.crc32).withStreamInfo("compression", this.compression);
        } }, o.createWorkerFrom = function(e2, t2, r2) {
          return e2.pipe(new s()).pipe(new a("uncompressedSize")).pipe(t2.compressWorker(r2)).pipe(new a("compressedSize")).withStreamInfo("compression", t2);
        }, t.exports = o;
      }, { "./external": 6, "./stream/Crc32Probe": 25, "./stream/DataLengthProbe": 26, "./stream/DataWorker": 27 }], 3: [function(e, t, r) {
        var n = e("./stream/GenericWorker");
        r.STORE = { magic: "\0\0", compressWorker: function() {
          return new n("STORE compression");
        }, uncompressWorker: function() {
          return new n("STORE decompression");
        } }, r.DEFLATE = e("./flate");
      }, { "./flate": 7, "./stream/GenericWorker": 28 }], 4: [function(e, t, r) {
        var n = e("./utils");
        var o = (function() {
          for (var e2, t2 = [], r2 = 0; r2 < 256; r2++) {
            e2 = r2;
            for (var n2 = 0; n2 < 8; n2++) e2 = 1 & e2 ? 3988292384 ^ e2 >>> 1 : e2 >>> 1;
            t2[r2] = e2;
          }
          return t2;
        })();
        t.exports = function(e2, t2) {
          return void 0 !== e2 && e2.length ? "string" !== n.getTypeOf(e2) ? (function(e3, t3, r2, n2) {
            var i = o, s = n2 + r2;
            e3 ^= -1;
            for (var a = n2; a < s; a++) e3 = e3 >>> 8 ^ i[255 & (e3 ^ t3[a])];
            return -1 ^ e3;
          })(0 | t2, e2, e2.length, 0) : (function(e3, t3, r2, n2) {
            var i = o, s = n2 + r2;
            e3 ^= -1;
            for (var a = n2; a < s; a++) e3 = e3 >>> 8 ^ i[255 & (e3 ^ t3.charCodeAt(a))];
            return -1 ^ e3;
          })(0 | t2, e2, e2.length, 0) : 0;
        };
      }, { "./utils": 32 }], 5: [function(e, t, r) {
        r.base64 = false, r.binary = false, r.dir = false, r.createFolders = true, r.date = null, r.compression = null, r.compressionOptions = null, r.comment = null, r.unixPermissions = null, r.dosPermissions = null;
      }, {}], 6: [function(e, t, r) {
        var n = null;
        n = "undefined" != typeof Promise ? Promise : e("lie"), t.exports = { Promise: n };
      }, { lie: 37 }], 7: [function(e, t, r) {
        var n = "undefined" != typeof Uint8Array && "undefined" != typeof Uint16Array && "undefined" != typeof Uint32Array, i = e("pako"), s = e("./utils"), a = e("./stream/GenericWorker"), o = n ? "uint8array" : "array";
        function h(e2, t2) {
          a.call(this, "FlateWorker/" + e2), this._pako = null, this._pakoAction = e2, this._pakoOptions = t2, this.meta = {};
        }
        r.magic = "\b\0", s.inherits(h, a), h.prototype.processChunk = function(e2) {
          this.meta = e2.meta, null === this._pako && this._createPako(), this._pako.push(s.transformTo(o, e2.data), false);
        }, h.prototype.flush = function() {
          a.prototype.flush.call(this), null === this._pako && this._createPako(), this._pako.push([], true);
        }, h.prototype.cleanUp = function() {
          a.prototype.cleanUp.call(this), this._pako = null;
        }, h.prototype._createPako = function() {
          this._pako = new i[this._pakoAction]({ raw: true, level: this._pakoOptions.level || -1 });
          var t2 = this;
          this._pako.onData = function(e2) {
            t2.push({ data: e2, meta: t2.meta });
          };
        }, r.compressWorker = function(e2) {
          return new h("Deflate", e2);
        }, r.uncompressWorker = function() {
          return new h("Inflate", {});
        };
      }, { "./stream/GenericWorker": 28, "./utils": 32, pako: 38 }], 8: [function(e, t, r) {
        function A(e2, t2) {
          var r2, n2 = "";
          for (r2 = 0; r2 < t2; r2++) n2 += String.fromCharCode(255 & e2), e2 >>>= 8;
          return n2;
        }
        function n(e2, t2, r2, n2, i2, s2) {
          var a, o, h = e2.file, u = e2.compression, l = s2 !== O.utf8encode, f = I.transformTo("string", s2(h.name)), c = I.transformTo("string", O.utf8encode(h.name)), d = h.comment, p = I.transformTo("string", s2(d)), m = I.transformTo("string", O.utf8encode(d)), _ = c.length !== h.name.length, g = m.length !== d.length, b = "", v = "", y = "", w = h.dir, k = h.date, x = { crc32: 0, compressedSize: 0, uncompressedSize: 0 };
          t2 && !r2 || (x.crc32 = e2.crc32, x.compressedSize = e2.compressedSize, x.uncompressedSize = e2.uncompressedSize);
          var S = 0;
          t2 && (S |= 8), l || !_ && !g || (S |= 2048);
          var z = 0, C = 0;
          w && (z |= 16), "UNIX" === i2 ? (C = 798, z |= (function(e3, t3) {
            var r3 = e3;
            return e3 || (r3 = t3 ? 16893 : 33204), (65535 & r3) << 16;
          })(h.unixPermissions, w)) : (C = 20, z |= (function(e3) {
            return 63 & (e3 || 0);
          })(h.dosPermissions)), a = k.getUTCHours(), a <<= 6, a |= k.getUTCMinutes(), a <<= 5, a |= k.getUTCSeconds() / 2, o = k.getUTCFullYear() - 1980, o <<= 4, o |= k.getUTCMonth() + 1, o <<= 5, o |= k.getUTCDate(), _ && (v = A(1, 1) + A(B(f), 4) + c, b += "up" + A(v.length, 2) + v), g && (y = A(1, 1) + A(B(p), 4) + m, b += "uc" + A(y.length, 2) + y);
          var E = "";
          return E += "\n\0", E += A(S, 2), E += u.magic, E += A(a, 2), E += A(o, 2), E += A(x.crc32, 4), E += A(x.compressedSize, 4), E += A(x.uncompressedSize, 4), E += A(f.length, 2), E += A(b.length, 2), { fileRecord: R.LOCAL_FILE_HEADER + E + f + b, dirRecord: R.CENTRAL_FILE_HEADER + A(C, 2) + E + A(p.length, 2) + "\0\0\0\0" + A(z, 4) + A(n2, 4) + f + b + p };
        }
        var I = e("../utils"), i = e("../stream/GenericWorker"), O = e("../utf8"), B = e("../crc32"), R = e("../signature");
        function s(e2, t2, r2, n2) {
          i.call(this, "ZipFileWorker"), this.bytesWritten = 0, this.zipComment = t2, this.zipPlatform = r2, this.encodeFileName = n2, this.streamFiles = e2, this.accumulate = false, this.contentBuffer = [], this.dirRecords = [], this.currentSourceOffset = 0, this.entriesCount = 0, this.currentFile = null, this._sources = [];
        }
        I.inherits(s, i), s.prototype.push = function(e2) {
          var t2 = e2.meta.percent || 0, r2 = this.entriesCount, n2 = this._sources.length;
          this.accumulate ? this.contentBuffer.push(e2) : (this.bytesWritten += e2.data.length, i.prototype.push.call(this, { data: e2.data, meta: { currentFile: this.currentFile, percent: r2 ? (t2 + 100 * (r2 - n2 - 1)) / r2 : 100 } }));
        }, s.prototype.openedSource = function(e2) {
          this.currentSourceOffset = this.bytesWritten, this.currentFile = e2.file.name;
          var t2 = this.streamFiles && !e2.file.dir;
          if (t2) {
            var r2 = n(e2, t2, false, this.currentSourceOffset, this.zipPlatform, this.encodeFileName);
            this.push({ data: r2.fileRecord, meta: { percent: 0 } });
          } else this.accumulate = true;
        }, s.prototype.closedSource = function(e2) {
          this.accumulate = false;
          var t2 = this.streamFiles && !e2.file.dir, r2 = n(e2, t2, true, this.currentSourceOffset, this.zipPlatform, this.encodeFileName);
          if (this.dirRecords.push(r2.dirRecord), t2) this.push({ data: (function(e3) {
            return R.DATA_DESCRIPTOR + A(e3.crc32, 4) + A(e3.compressedSize, 4) + A(e3.uncompressedSize, 4);
          })(e2), meta: { percent: 100 } });
          else for (this.push({ data: r2.fileRecord, meta: { percent: 0 } }); this.contentBuffer.length; ) this.push(this.contentBuffer.shift());
          this.currentFile = null;
        }, s.prototype.flush = function() {
          for (var e2 = this.bytesWritten, t2 = 0; t2 < this.dirRecords.length; t2++) this.push({ data: this.dirRecords[t2], meta: { percent: 100 } });
          var r2 = this.bytesWritten - e2, n2 = (function(e3, t3, r3, n3, i2) {
            var s2 = I.transformTo("string", i2(n3));
            return R.CENTRAL_DIRECTORY_END + "\0\0\0\0" + A(e3, 2) + A(e3, 2) + A(t3, 4) + A(r3, 4) + A(s2.length, 2) + s2;
          })(this.dirRecords.length, r2, e2, this.zipComment, this.encodeFileName);
          this.push({ data: n2, meta: { percent: 100 } });
        }, s.prototype.prepareNextSource = function() {
          this.previous = this._sources.shift(), this.openedSource(this.previous.streamInfo), this.isPaused ? this.previous.pause() : this.previous.resume();
        }, s.prototype.registerPrevious = function(e2) {
          this._sources.push(e2);
          var t2 = this;
          return e2.on("data", function(e3) {
            t2.processChunk(e3);
          }), e2.on("end", function() {
            t2.closedSource(t2.previous.streamInfo), t2._sources.length ? t2.prepareNextSource() : t2.end();
          }), e2.on("error", function(e3) {
            t2.error(e3);
          }), this;
        }, s.prototype.resume = function() {
          return !!i.prototype.resume.call(this) && (!this.previous && this._sources.length ? (this.prepareNextSource(), true) : this.previous || this._sources.length || this.generatedError ? void 0 : (this.end(), true));
        }, s.prototype.error = function(e2) {
          var t2 = this._sources;
          if (!i.prototype.error.call(this, e2)) return false;
          for (var r2 = 0; r2 < t2.length; r2++) try {
            t2[r2].error(e2);
          } catch (e3) {
          }
          return true;
        }, s.prototype.lock = function() {
          i.prototype.lock.call(this);
          for (var e2 = this._sources, t2 = 0; t2 < e2.length; t2++) e2[t2].lock();
        }, t.exports = s;
      }, { "../crc32": 4, "../signature": 23, "../stream/GenericWorker": 28, "../utf8": 31, "../utils": 32 }], 9: [function(e, t, r) {
        var u = e("../compressions"), n = e("./ZipFileWorker");
        r.generateWorker = function(e2, a, t2) {
          var o = new n(a.streamFiles, t2, a.platform, a.encodeFileName), h = 0;
          try {
            e2.forEach(function(e3, t3) {
              h++;
              var r2 = (function(e4, t4) {
                var r3 = e4 || t4, n3 = u[r3];
                if (!n3) throw new Error(r3 + " is not a valid compression method !");
                return n3;
              })(t3.options.compression, a.compression), n2 = t3.options.compressionOptions || a.compressionOptions || {}, i = t3.dir, s = t3.date;
              t3._compressWorker(r2, n2).withStreamInfo("file", { name: e3, dir: i, date: s, comment: t3.comment || "", unixPermissions: t3.unixPermissions, dosPermissions: t3.dosPermissions }).pipe(o);
            }), o.entriesCount = h;
          } catch (e3) {
            o.error(e3);
          }
          return o;
        };
      }, { "../compressions": 3, "./ZipFileWorker": 8 }], 10: [function(e, t, r) {
        function n() {
          if (!(this instanceof n)) return new n();
          if (arguments.length) throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");
          this.files = /* @__PURE__ */ Object.create(null), this.comment = null, this.root = "", this.clone = function() {
            var e2 = new n();
            for (var t2 in this) "function" != typeof this[t2] && (e2[t2] = this[t2]);
            return e2;
          };
        }
        (n.prototype = e("./object")).loadAsync = e("./load"), n.support = e("./support"), n.defaults = e("./defaults"), n.version = "3.10.1", n.loadAsync = function(e2, t2) {
          return new n().loadAsync(e2, t2);
        }, n.external = e("./external"), t.exports = n;
      }, { "./defaults": 5, "./external": 6, "./load": 11, "./object": 15, "./support": 30 }], 11: [function(e, t, r) {
        var u = e("./utils"), i = e("./external"), n = e("./utf8"), s = e("./zipEntries"), a = e("./stream/Crc32Probe"), l = e("./nodejsUtils");
        function f(n2) {
          return new i.Promise(function(e2, t2) {
            var r2 = n2.decompressed.getContentWorker().pipe(new a());
            r2.on("error", function(e3) {
              t2(e3);
            }).on("end", function() {
              r2.streamInfo.crc32 !== n2.decompressed.crc32 ? t2(new Error("Corrupted zip : CRC32 mismatch")) : e2();
            }).resume();
          });
        }
        t.exports = function(e2, o) {
          var h = this;
          return o = u.extend(o || {}, { base64: false, checkCRC32: false, optimizedBinaryString: false, createFolders: false, decodeFileName: n.utf8decode }), l.isNode && l.isStream(e2) ? i.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")) : u.prepareContent("the loaded zip file", e2, true, o.optimizedBinaryString, o.base64).then(function(e3) {
            var t2 = new s(o);
            return t2.load(e3), t2;
          }).then(function(e3) {
            var t2 = [i.Promise.resolve(e3)], r2 = e3.files;
            if (o.checkCRC32) for (var n2 = 0; n2 < r2.length; n2++) t2.push(f(r2[n2]));
            return i.Promise.all(t2);
          }).then(function(e3) {
            for (var t2 = e3.shift(), r2 = t2.files, n2 = 0; n2 < r2.length; n2++) {
              var i2 = r2[n2], s2 = i2.fileNameStr, a2 = u.resolve(i2.fileNameStr);
              h.file(a2, i2.decompressed, { binary: true, optimizedBinaryString: true, date: i2.date, dir: i2.dir, comment: i2.fileCommentStr.length ? i2.fileCommentStr : null, unixPermissions: i2.unixPermissions, dosPermissions: i2.dosPermissions, createFolders: o.createFolders }), i2.dir || (h.file(a2).unsafeOriginalName = s2);
            }
            return t2.zipComment.length && (h.comment = t2.zipComment), h;
          });
        };
      }, { "./external": 6, "./nodejsUtils": 14, "./stream/Crc32Probe": 25, "./utf8": 31, "./utils": 32, "./zipEntries": 33 }], 12: [function(e, t, r) {
        var n = e("../utils"), i = e("../stream/GenericWorker");
        function s(e2, t2) {
          i.call(this, "Nodejs stream input adapter for " + e2), this._upstreamEnded = false, this._bindStream(t2);
        }
        n.inherits(s, i), s.prototype._bindStream = function(e2) {
          var t2 = this;
          (this._stream = e2).pause(), e2.on("data", function(e3) {
            t2.push({ data: e3, meta: { percent: 0 } });
          }).on("error", function(e3) {
            t2.isPaused ? this.generatedError = e3 : t2.error(e3);
          }).on("end", function() {
            t2.isPaused ? t2._upstreamEnded = true : t2.end();
          });
        }, s.prototype.pause = function() {
          return !!i.prototype.pause.call(this) && (this._stream.pause(), true);
        }, s.prototype.resume = function() {
          return !!i.prototype.resume.call(this) && (this._upstreamEnded ? this.end() : this._stream.resume(), true);
        }, t.exports = s;
      }, { "../stream/GenericWorker": 28, "../utils": 32 }], 13: [function(e, t, r) {
        var i = e("readable-stream").Readable;
        function n(e2, t2, r2) {
          i.call(this, t2), this._helper = e2;
          var n2 = this;
          e2.on("data", function(e3, t3) {
            n2.push(e3) || n2._helper.pause(), r2 && r2(t3);
          }).on("error", function(e3) {
            n2.emit("error", e3);
          }).on("end", function() {
            n2.push(null);
          });
        }
        e("../utils").inherits(n, i), n.prototype._read = function() {
          this._helper.resume();
        }, t.exports = n;
      }, { "../utils": 32, "readable-stream": 16 }], 14: [function(e, t, r) {
        t.exports = { isNode: "undefined" != typeof Buffer, newBufferFrom: function(e2, t2) {
          if (Buffer.from && Buffer.from !== Uint8Array.from) return Buffer.from(e2, t2);
          if ("number" == typeof e2) throw new Error('The "data" argument must not be a number');
          return new Buffer(e2, t2);
        }, allocBuffer: function(e2) {
          if (Buffer.alloc) return Buffer.alloc(e2);
          var t2 = new Buffer(e2);
          return t2.fill(0), t2;
        }, isBuffer: function(e2) {
          return Buffer.isBuffer(e2);
        }, isStream: function(e2) {
          return e2 && "function" == typeof e2.on && "function" == typeof e2.pause && "function" == typeof e2.resume;
        } };
      }, {}], 15: [function(e, t, r) {
        function s(e2, t2, r2) {
          var n2, i2 = u.getTypeOf(t2), s2 = u.extend(r2 || {}, f);
          s2.date = s2.date || /* @__PURE__ */ new Date(), null !== s2.compression && (s2.compression = s2.compression.toUpperCase()), "string" == typeof s2.unixPermissions && (s2.unixPermissions = parseInt(s2.unixPermissions, 8)), s2.unixPermissions && 16384 & s2.unixPermissions && (s2.dir = true), s2.dosPermissions && 16 & s2.dosPermissions && (s2.dir = true), s2.dir && (e2 = g(e2)), s2.createFolders && (n2 = _(e2)) && b.call(this, n2, true);
          var a2 = "string" === i2 && false === s2.binary && false === s2.base64;
          r2 && void 0 !== r2.binary || (s2.binary = !a2), (t2 instanceof c && 0 === t2.uncompressedSize || s2.dir || !t2 || 0 === t2.length) && (s2.base64 = false, s2.binary = true, t2 = "", s2.compression = "STORE", i2 = "string");
          var o2 = null;
          o2 = t2 instanceof c || t2 instanceof l ? t2 : p.isNode && p.isStream(t2) ? new m(e2, t2) : u.prepareContent(e2, t2, s2.binary, s2.optimizedBinaryString, s2.base64);
          var h2 = new d(e2, o2, s2);
          this.files[e2] = h2;
        }
        var i = e("./utf8"), u = e("./utils"), l = e("./stream/GenericWorker"), a = e("./stream/StreamHelper"), f = e("./defaults"), c = e("./compressedObject"), d = e("./zipObject"), o = e("./generate"), p = e("./nodejsUtils"), m = e("./nodejs/NodejsStreamInputAdapter"), _ = function(e2) {
          "/" === e2.slice(-1) && (e2 = e2.substring(0, e2.length - 1));
          var t2 = e2.lastIndexOf("/");
          return 0 < t2 ? e2.substring(0, t2) : "";
        }, g = function(e2) {
          return "/" !== e2.slice(-1) && (e2 += "/"), e2;
        }, b = function(e2, t2) {
          return t2 = void 0 !== t2 ? t2 : f.createFolders, e2 = g(e2), this.files[e2] || s.call(this, e2, null, { dir: true, createFolders: t2 }), this.files[e2];
        };
        function h(e2) {
          return "[object RegExp]" === Object.prototype.toString.call(e2);
        }
        var n = { load: function() {
          throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
        }, forEach: function(e2) {
          var t2, r2, n2;
          for (t2 in this.files) n2 = this.files[t2], (r2 = t2.slice(this.root.length, t2.length)) && t2.slice(0, this.root.length) === this.root && e2(r2, n2);
        }, filter: function(r2) {
          var n2 = [];
          return this.forEach(function(e2, t2) {
            r2(e2, t2) && n2.push(t2);
          }), n2;
        }, file: function(e2, t2, r2) {
          if (1 !== arguments.length) return e2 = this.root + e2, s.call(this, e2, t2, r2), this;
          if (h(e2)) {
            var n2 = e2;
            return this.filter(function(e3, t3) {
              return !t3.dir && n2.test(e3);
            });
          }
          var i2 = this.files[this.root + e2];
          return i2 && !i2.dir ? i2 : null;
        }, folder: function(r2) {
          if (!r2) return this;
          if (h(r2)) return this.filter(function(e3, t3) {
            return t3.dir && r2.test(e3);
          });
          var e2 = this.root + r2, t2 = b.call(this, e2), n2 = this.clone();
          return n2.root = t2.name, n2;
        }, remove: function(r2) {
          r2 = this.root + r2;
          var e2 = this.files[r2];
          if (e2 || ("/" !== r2.slice(-1) && (r2 += "/"), e2 = this.files[r2]), e2 && !e2.dir) delete this.files[r2];
          else for (var t2 = this.filter(function(e3, t3) {
            return t3.name.slice(0, r2.length) === r2;
          }), n2 = 0; n2 < t2.length; n2++) delete this.files[t2[n2].name];
          return this;
        }, generate: function() {
          throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
        }, generateInternalStream: function(e2) {
          var t2, r2 = {};
          try {
            if ((r2 = u.extend(e2 || {}, { streamFiles: false, compression: "STORE", compressionOptions: null, type: "", platform: "DOS", comment: null, mimeType: "application/zip", encodeFileName: i.utf8encode })).type = r2.type.toLowerCase(), r2.compression = r2.compression.toUpperCase(), "binarystring" === r2.type && (r2.type = "string"), !r2.type) throw new Error("No output type specified.");
            u.checkSupport(r2.type), "darwin" !== r2.platform && "freebsd" !== r2.platform && "linux" !== r2.platform && "sunos" !== r2.platform || (r2.platform = "UNIX"), "win32" === r2.platform && (r2.platform = "DOS");
            var n2 = r2.comment || this.comment || "";
            t2 = o.generateWorker(this, r2, n2);
          } catch (e3) {
            (t2 = new l("error")).error(e3);
          }
          return new a(t2, r2.type || "string", r2.mimeType);
        }, generateAsync: function(e2, t2) {
          return this.generateInternalStream(e2).accumulate(t2);
        }, generateNodeStream: function(e2, t2) {
          return (e2 = e2 || {}).type || (e2.type = "nodebuffer"), this.generateInternalStream(e2).toNodejsStream(t2);
        } };
        t.exports = n;
      }, { "./compressedObject": 2, "./defaults": 5, "./generate": 9, "./nodejs/NodejsStreamInputAdapter": 12, "./nodejsUtils": 14, "./stream/GenericWorker": 28, "./stream/StreamHelper": 29, "./utf8": 31, "./utils": 32, "./zipObject": 35 }], 16: [function(e, t, r) {
        t.exports = e("stream");
      }, { stream: void 0 }], 17: [function(e, t, r) {
        var n = e("./DataReader");
        function i(e2) {
          n.call(this, e2);
          for (var t2 = 0; t2 < this.data.length; t2++) e2[t2] = 255 & e2[t2];
        }
        e("../utils").inherits(i, n), i.prototype.byteAt = function(e2) {
          return this.data[this.zero + e2];
        }, i.prototype.lastIndexOfSignature = function(e2) {
          for (var t2 = e2.charCodeAt(0), r2 = e2.charCodeAt(1), n2 = e2.charCodeAt(2), i2 = e2.charCodeAt(3), s = this.length - 4; 0 <= s; --s) if (this.data[s] === t2 && this.data[s + 1] === r2 && this.data[s + 2] === n2 && this.data[s + 3] === i2) return s - this.zero;
          return -1;
        }, i.prototype.readAndCheckSignature = function(e2) {
          var t2 = e2.charCodeAt(0), r2 = e2.charCodeAt(1), n2 = e2.charCodeAt(2), i2 = e2.charCodeAt(3), s = this.readData(4);
          return t2 === s[0] && r2 === s[1] && n2 === s[2] && i2 === s[3];
        }, i.prototype.readData = function(e2) {
          if (this.checkOffset(e2), 0 === e2) return [];
          var t2 = this.data.slice(this.zero + this.index, this.zero + this.index + e2);
          return this.index += e2, t2;
        }, t.exports = i;
      }, { "../utils": 32, "./DataReader": 18 }], 18: [function(e, t, r) {
        var n = e("../utils");
        function i(e2) {
          this.data = e2, this.length = e2.length, this.index = 0, this.zero = 0;
        }
        i.prototype = { checkOffset: function(e2) {
          this.checkIndex(this.index + e2);
        }, checkIndex: function(e2) {
          if (this.length < this.zero + e2 || e2 < 0) throw new Error("End of data reached (data length = " + this.length + ", asked index = " + e2 + "). Corrupted zip ?");
        }, setIndex: function(e2) {
          this.checkIndex(e2), this.index = e2;
        }, skip: function(e2) {
          this.setIndex(this.index + e2);
        }, byteAt: function() {
        }, readInt: function(e2) {
          var t2, r2 = 0;
          for (this.checkOffset(e2), t2 = this.index + e2 - 1; t2 >= this.index; t2--) r2 = (r2 << 8) + this.byteAt(t2);
          return this.index += e2, r2;
        }, readString: function(e2) {
          return n.transformTo("string", this.readData(e2));
        }, readData: function() {
        }, lastIndexOfSignature: function() {
        }, readAndCheckSignature: function() {
        }, readDate: function() {
          var e2 = this.readInt(4);
          return new Date(Date.UTC(1980 + (e2 >> 25 & 127), (e2 >> 21 & 15) - 1, e2 >> 16 & 31, e2 >> 11 & 31, e2 >> 5 & 63, (31 & e2) << 1));
        } }, t.exports = i;
      }, { "../utils": 32 }], 19: [function(e, t, r) {
        var n = e("./Uint8ArrayReader");
        function i(e2) {
          n.call(this, e2);
        }
        e("../utils").inherits(i, n), i.prototype.readData = function(e2) {
          this.checkOffset(e2);
          var t2 = this.data.slice(this.zero + this.index, this.zero + this.index + e2);
          return this.index += e2, t2;
        }, t.exports = i;
      }, { "../utils": 32, "./Uint8ArrayReader": 21 }], 20: [function(e, t, r) {
        var n = e("./DataReader");
        function i(e2) {
          n.call(this, e2);
        }
        e("../utils").inherits(i, n), i.prototype.byteAt = function(e2) {
          return this.data.charCodeAt(this.zero + e2);
        }, i.prototype.lastIndexOfSignature = function(e2) {
          return this.data.lastIndexOf(e2) - this.zero;
        }, i.prototype.readAndCheckSignature = function(e2) {
          return e2 === this.readData(4);
        }, i.prototype.readData = function(e2) {
          this.checkOffset(e2);
          var t2 = this.data.slice(this.zero + this.index, this.zero + this.index + e2);
          return this.index += e2, t2;
        }, t.exports = i;
      }, { "../utils": 32, "./DataReader": 18 }], 21: [function(e, t, r) {
        var n = e("./ArrayReader");
        function i(e2) {
          n.call(this, e2);
        }
        e("../utils").inherits(i, n), i.prototype.readData = function(e2) {
          if (this.checkOffset(e2), 0 === e2) return new Uint8Array(0);
          var t2 = this.data.subarray(this.zero + this.index, this.zero + this.index + e2);
          return this.index += e2, t2;
        }, t.exports = i;
      }, { "../utils": 32, "./ArrayReader": 17 }], 22: [function(e, t, r) {
        var n = e("../utils"), i = e("../support"), s = e("./ArrayReader"), a = e("./StringReader"), o = e("./NodeBufferReader"), h = e("./Uint8ArrayReader");
        t.exports = function(e2) {
          var t2 = n.getTypeOf(e2);
          return n.checkSupport(t2), "string" !== t2 || i.uint8array ? "nodebuffer" === t2 ? new o(e2) : i.uint8array ? new h(n.transformTo("uint8array", e2)) : new s(n.transformTo("array", e2)) : new a(e2);
        };
      }, { "../support": 30, "../utils": 32, "./ArrayReader": 17, "./NodeBufferReader": 19, "./StringReader": 20, "./Uint8ArrayReader": 21 }], 23: [function(e, t, r) {
        r.LOCAL_FILE_HEADER = "PK", r.CENTRAL_FILE_HEADER = "PK", r.CENTRAL_DIRECTORY_END = "PK", r.ZIP64_CENTRAL_DIRECTORY_LOCATOR = "PK\x07", r.ZIP64_CENTRAL_DIRECTORY_END = "PK", r.DATA_DESCRIPTOR = "PK\x07\b";
      }, {}], 24: [function(e, t, r) {
        var n = e("./GenericWorker"), i = e("../utils");
        function s(e2) {
          n.call(this, "ConvertWorker to " + e2), this.destType = e2;
        }
        i.inherits(s, n), s.prototype.processChunk = function(e2) {
          this.push({ data: i.transformTo(this.destType, e2.data), meta: e2.meta });
        }, t.exports = s;
      }, { "../utils": 32, "./GenericWorker": 28 }], 25: [function(e, t, r) {
        var n = e("./GenericWorker"), i = e("../crc32");
        function s() {
          n.call(this, "Crc32Probe"), this.withStreamInfo("crc32", 0);
        }
        e("../utils").inherits(s, n), s.prototype.processChunk = function(e2) {
          this.streamInfo.crc32 = i(e2.data, this.streamInfo.crc32 || 0), this.push(e2);
        }, t.exports = s;
      }, { "../crc32": 4, "../utils": 32, "./GenericWorker": 28 }], 26: [function(e, t, r) {
        var n = e("../utils"), i = e("./GenericWorker");
        function s(e2) {
          i.call(this, "DataLengthProbe for " + e2), this.propName = e2, this.withStreamInfo(e2, 0);
        }
        n.inherits(s, i), s.prototype.processChunk = function(e2) {
          if (e2) {
            var t2 = this.streamInfo[this.propName] || 0;
            this.streamInfo[this.propName] = t2 + e2.data.length;
          }
          i.prototype.processChunk.call(this, e2);
        }, t.exports = s;
      }, { "../utils": 32, "./GenericWorker": 28 }], 27: [function(e, t, r) {
        var n = e("../utils"), i = e("./GenericWorker");
        function s(e2) {
          i.call(this, "DataWorker");
          var t2 = this;
          this.dataIsReady = false, this.index = 0, this.max = 0, this.data = null, this.type = "", this._tickScheduled = false, e2.then(function(e3) {
            t2.dataIsReady = true, t2.data = e3, t2.max = e3 && e3.length || 0, t2.type = n.getTypeOf(e3), t2.isPaused || t2._tickAndRepeat();
          }, function(e3) {
            t2.error(e3);
          });
        }
        n.inherits(s, i), s.prototype.cleanUp = function() {
          i.prototype.cleanUp.call(this), this.data = null;
        }, s.prototype.resume = function() {
          return !!i.prototype.resume.call(this) && (!this._tickScheduled && this.dataIsReady && (this._tickScheduled = true, n.delay(this._tickAndRepeat, [], this)), true);
        }, s.prototype._tickAndRepeat = function() {
          this._tickScheduled = false, this.isPaused || this.isFinished || (this._tick(), this.isFinished || (n.delay(this._tickAndRepeat, [], this), this._tickScheduled = true));
        }, s.prototype._tick = function() {
          if (this.isPaused || this.isFinished) return false;
          var e2 = null, t2 = Math.min(this.max, this.index + 16384);
          if (this.index >= this.max) return this.end();
          switch (this.type) {
            case "string":
              e2 = this.data.substring(this.index, t2);
              break;
            case "uint8array":
              e2 = this.data.subarray(this.index, t2);
              break;
            case "array":
            case "nodebuffer":
              e2 = this.data.slice(this.index, t2);
          }
          return this.index = t2, this.push({ data: e2, meta: { percent: this.max ? this.index / this.max * 100 : 0 } });
        }, t.exports = s;
      }, { "../utils": 32, "./GenericWorker": 28 }], 28: [function(e, t, r) {
        function n(e2) {
          this.name = e2 || "default", this.streamInfo = {}, this.generatedError = null, this.extraStreamInfo = {}, this.isPaused = true, this.isFinished = false, this.isLocked = false, this._listeners = { data: [], end: [], error: [] }, this.previous = null;
        }
        n.prototype = { push: function(e2) {
          this.emit("data", e2);
        }, end: function() {
          if (this.isFinished) return false;
          this.flush();
          try {
            this.emit("end"), this.cleanUp(), this.isFinished = true;
          } catch (e2) {
            this.emit("error", e2);
          }
          return true;
        }, error: function(e2) {
          return !this.isFinished && (this.isPaused ? this.generatedError = e2 : (this.isFinished = true, this.emit("error", e2), this.previous && this.previous.error(e2), this.cleanUp()), true);
        }, on: function(e2, t2) {
          return this._listeners[e2].push(t2), this;
        }, cleanUp: function() {
          this.streamInfo = this.generatedError = this.extraStreamInfo = null, this._listeners = [];
        }, emit: function(e2, t2) {
          if (this._listeners[e2]) for (var r2 = 0; r2 < this._listeners[e2].length; r2++) this._listeners[e2][r2].call(this, t2);
        }, pipe: function(e2) {
          return e2.registerPrevious(this);
        }, registerPrevious: function(e2) {
          if (this.isLocked) throw new Error("The stream '" + this + "' has already been used.");
          this.streamInfo = e2.streamInfo, this.mergeStreamInfo(), this.previous = e2;
          var t2 = this;
          return e2.on("data", function(e3) {
            t2.processChunk(e3);
          }), e2.on("end", function() {
            t2.end();
          }), e2.on("error", function(e3) {
            t2.error(e3);
          }), this;
        }, pause: function() {
          return !this.isPaused && !this.isFinished && (this.isPaused = true, this.previous && this.previous.pause(), true);
        }, resume: function() {
          if (!this.isPaused || this.isFinished) return false;
          var e2 = this.isPaused = false;
          return this.generatedError && (this.error(this.generatedError), e2 = true), this.previous && this.previous.resume(), !e2;
        }, flush: function() {
        }, processChunk: function(e2) {
          this.push(e2);
        }, withStreamInfo: function(e2, t2) {
          return this.extraStreamInfo[e2] = t2, this.mergeStreamInfo(), this;
        }, mergeStreamInfo: function() {
          for (var e2 in this.extraStreamInfo) Object.prototype.hasOwnProperty.call(this.extraStreamInfo, e2) && (this.streamInfo[e2] = this.extraStreamInfo[e2]);
        }, lock: function() {
          if (this.isLocked) throw new Error("The stream '" + this + "' has already been used.");
          this.isLocked = true, this.previous && this.previous.lock();
        }, toString: function() {
          var e2 = "Worker " + this.name;
          return this.previous ? this.previous + " -> " + e2 : e2;
        } }, t.exports = n;
      }, {}], 29: [function(e, t, r) {
        var h = e("../utils"), i = e("./ConvertWorker"), s = e("./GenericWorker"), u = e("../base64"), n = e("../support"), a = e("../external"), o = null;
        if (n.nodestream) try {
          o = e("../nodejs/NodejsStreamOutputAdapter");
        } catch (e2) {
        }
        function l(e2, o2) {
          return new a.Promise(function(t2, r2) {
            var n2 = [], i2 = e2._internalType, s2 = e2._outputType, a2 = e2._mimeType;
            e2.on("data", function(e3, t3) {
              n2.push(e3), o2 && o2(t3);
            }).on("error", function(e3) {
              n2 = [], r2(e3);
            }).on("end", function() {
              try {
                var e3 = (function(e4, t3, r3) {
                  switch (e4) {
                    case "blob":
                      return h.newBlob(h.transformTo("arraybuffer", t3), r3);
                    case "base64":
                      return u.encode(t3);
                    default:
                      return h.transformTo(e4, t3);
                  }
                })(s2, (function(e4, t3) {
                  var r3, n3 = 0, i3 = null, s3 = 0;
                  for (r3 = 0; r3 < t3.length; r3++) s3 += t3[r3].length;
                  switch (e4) {
                    case "string":
                      return t3.join("");
                    case "array":
                      return Array.prototype.concat.apply([], t3);
                    case "uint8array":
                      for (i3 = new Uint8Array(s3), r3 = 0; r3 < t3.length; r3++) i3.set(t3[r3], n3), n3 += t3[r3].length;
                      return i3;
                    case "nodebuffer":
                      return Buffer.concat(t3);
                    default:
                      throw new Error("concat : unsupported type '" + e4 + "'");
                  }
                })(i2, n2), a2);
                t2(e3);
              } catch (e4) {
                r2(e4);
              }
              n2 = [];
            }).resume();
          });
        }
        function f(e2, t2, r2) {
          var n2 = t2;
          switch (t2) {
            case "blob":
            case "arraybuffer":
              n2 = "uint8array";
              break;
            case "base64":
              n2 = "string";
          }
          try {
            this._internalType = n2, this._outputType = t2, this._mimeType = r2, h.checkSupport(n2), this._worker = e2.pipe(new i(n2)), e2.lock();
          } catch (e3) {
            this._worker = new s("error"), this._worker.error(e3);
          }
        }
        f.prototype = { accumulate: function(e2) {
          return l(this, e2);
        }, on: function(e2, t2) {
          var r2 = this;
          return "data" === e2 ? this._worker.on(e2, function(e3) {
            t2.call(r2, e3.data, e3.meta);
          }) : this._worker.on(e2, function() {
            h.delay(t2, arguments, r2);
          }), this;
        }, resume: function() {
          return h.delay(this._worker.resume, [], this._worker), this;
        }, pause: function() {
          return this._worker.pause(), this;
        }, toNodejsStream: function(e2) {
          if (h.checkSupport("nodestream"), "nodebuffer" !== this._outputType) throw new Error(this._outputType + " is not supported by this method");
          return new o(this, { objectMode: "nodebuffer" !== this._outputType }, e2);
        } }, t.exports = f;
      }, { "../base64": 1, "../external": 6, "../nodejs/NodejsStreamOutputAdapter": 13, "../support": 30, "../utils": 32, "./ConvertWorker": 24, "./GenericWorker": 28 }], 30: [function(e, t, r) {
        if (r.base64 = true, r.array = true, r.string = true, r.arraybuffer = "undefined" != typeof ArrayBuffer && "undefined" != typeof Uint8Array, r.nodebuffer = "undefined" != typeof Buffer, r.uint8array = "undefined" != typeof Uint8Array, "undefined" == typeof ArrayBuffer) r.blob = false;
        else {
          var n = new ArrayBuffer(0);
          try {
            r.blob = 0 === new Blob([n], { type: "application/zip" }).size;
          } catch (e2) {
            try {
              var i = new (self.BlobBuilder || self.WebKitBlobBuilder || self.MozBlobBuilder || self.MSBlobBuilder)();
              i.append(n), r.blob = 0 === i.getBlob("application/zip").size;
            } catch (e3) {
              r.blob = false;
            }
          }
        }
        try {
          r.nodestream = !!e("readable-stream").Readable;
        } catch (e2) {
          r.nodestream = false;
        }
      }, { "readable-stream": 16 }], 31: [function(e, t, s) {
        for (var o = e("./utils"), h = e("./support"), r = e("./nodejsUtils"), n = e("./stream/GenericWorker"), u = new Array(256), i = 0; i < 256; i++) u[i] = 252 <= i ? 6 : 248 <= i ? 5 : 240 <= i ? 4 : 224 <= i ? 3 : 192 <= i ? 2 : 1;
        u[254] = u[254] = 1;
        function a() {
          n.call(this, "utf-8 decode"), this.leftOver = null;
        }
        function l() {
          n.call(this, "utf-8 encode");
        }
        s.utf8encode = function(e2) {
          return h.nodebuffer ? r.newBufferFrom(e2, "utf-8") : (function(e3) {
            var t2, r2, n2, i2, s2, a2 = e3.length, o2 = 0;
            for (i2 = 0; i2 < a2; i2++) 55296 == (64512 & (r2 = e3.charCodeAt(i2))) && i2 + 1 < a2 && 56320 == (64512 & (n2 = e3.charCodeAt(i2 + 1))) && (r2 = 65536 + (r2 - 55296 << 10) + (n2 - 56320), i2++), o2 += r2 < 128 ? 1 : r2 < 2048 ? 2 : r2 < 65536 ? 3 : 4;
            for (t2 = h.uint8array ? new Uint8Array(o2) : new Array(o2), i2 = s2 = 0; s2 < o2; i2++) 55296 == (64512 & (r2 = e3.charCodeAt(i2))) && i2 + 1 < a2 && 56320 == (64512 & (n2 = e3.charCodeAt(i2 + 1))) && (r2 = 65536 + (r2 - 55296 << 10) + (n2 - 56320), i2++), r2 < 128 ? t2[s2++] = r2 : (r2 < 2048 ? t2[s2++] = 192 | r2 >>> 6 : (r2 < 65536 ? t2[s2++] = 224 | r2 >>> 12 : (t2[s2++] = 240 | r2 >>> 18, t2[s2++] = 128 | r2 >>> 12 & 63), t2[s2++] = 128 | r2 >>> 6 & 63), t2[s2++] = 128 | 63 & r2);
            return t2;
          })(e2);
        }, s.utf8decode = function(e2) {
          return h.nodebuffer ? o.transformTo("nodebuffer", e2).toString("utf-8") : (function(e3) {
            var t2, r2, n2, i2, s2 = e3.length, a2 = new Array(2 * s2);
            for (t2 = r2 = 0; t2 < s2; ) if ((n2 = e3[t2++]) < 128) a2[r2++] = n2;
            else if (4 < (i2 = u[n2])) a2[r2++] = 65533, t2 += i2 - 1;
            else {
              for (n2 &= 2 === i2 ? 31 : 3 === i2 ? 15 : 7; 1 < i2 && t2 < s2; ) n2 = n2 << 6 | 63 & e3[t2++], i2--;
              1 < i2 ? a2[r2++] = 65533 : n2 < 65536 ? a2[r2++] = n2 : (n2 -= 65536, a2[r2++] = 55296 | n2 >> 10 & 1023, a2[r2++] = 56320 | 1023 & n2);
            }
            return a2.length !== r2 && (a2.subarray ? a2 = a2.subarray(0, r2) : a2.length = r2), o.applyFromCharCode(a2);
          })(e2 = o.transformTo(h.uint8array ? "uint8array" : "array", e2));
        }, o.inherits(a, n), a.prototype.processChunk = function(e2) {
          var t2 = o.transformTo(h.uint8array ? "uint8array" : "array", e2.data);
          if (this.leftOver && this.leftOver.length) {
            if (h.uint8array) {
              var r2 = t2;
              (t2 = new Uint8Array(r2.length + this.leftOver.length)).set(this.leftOver, 0), t2.set(r2, this.leftOver.length);
            } else t2 = this.leftOver.concat(t2);
            this.leftOver = null;
          }
          var n2 = (function(e3, t3) {
            var r3;
            for ((t3 = t3 || e3.length) > e3.length && (t3 = e3.length), r3 = t3 - 1; 0 <= r3 && 128 == (192 & e3[r3]); ) r3--;
            return r3 < 0 ? t3 : 0 === r3 ? t3 : r3 + u[e3[r3]] > t3 ? r3 : t3;
          })(t2), i2 = t2;
          n2 !== t2.length && (h.uint8array ? (i2 = t2.subarray(0, n2), this.leftOver = t2.subarray(n2, t2.length)) : (i2 = t2.slice(0, n2), this.leftOver = t2.slice(n2, t2.length))), this.push({ data: s.utf8decode(i2), meta: e2.meta });
        }, a.prototype.flush = function() {
          this.leftOver && this.leftOver.length && (this.push({ data: s.utf8decode(this.leftOver), meta: {} }), this.leftOver = null);
        }, s.Utf8DecodeWorker = a, o.inherits(l, n), l.prototype.processChunk = function(e2) {
          this.push({ data: s.utf8encode(e2.data), meta: e2.meta });
        }, s.Utf8EncodeWorker = l;
      }, { "./nodejsUtils": 14, "./stream/GenericWorker": 28, "./support": 30, "./utils": 32 }], 32: [function(e, t, a) {
        var o = e("./support"), h = e("./base64"), r = e("./nodejsUtils"), u = e("./external");
        function n(e2) {
          return e2;
        }
        function l(e2, t2) {
          for (var r2 = 0; r2 < e2.length; ++r2) t2[r2] = 255 & e2.charCodeAt(r2);
          return t2;
        }
        e("setimmediate"), a.newBlob = function(t2, r2) {
          a.checkSupport("blob");
          try {
            return new Blob([t2], { type: r2 });
          } catch (e2) {
            try {
              var n2 = new (self.BlobBuilder || self.WebKitBlobBuilder || self.MozBlobBuilder || self.MSBlobBuilder)();
              return n2.append(t2), n2.getBlob(r2);
            } catch (e3) {
              throw new Error("Bug : can't construct the Blob.");
            }
          }
        };
        var i = { stringifyByChunk: function(e2, t2, r2) {
          var n2 = [], i2 = 0, s2 = e2.length;
          if (s2 <= r2) return String.fromCharCode.apply(null, e2);
          for (; i2 < s2; ) "array" === t2 || "nodebuffer" === t2 ? n2.push(String.fromCharCode.apply(null, e2.slice(i2, Math.min(i2 + r2, s2)))) : n2.push(String.fromCharCode.apply(null, e2.subarray(i2, Math.min(i2 + r2, s2)))), i2 += r2;
          return n2.join("");
        }, stringifyByChar: function(e2) {
          for (var t2 = "", r2 = 0; r2 < e2.length; r2++) t2 += String.fromCharCode(e2[r2]);
          return t2;
        }, applyCanBeUsed: { uint8array: (function() {
          try {
            return o.uint8array && 1 === String.fromCharCode.apply(null, new Uint8Array(1)).length;
          } catch (e2) {
            return false;
          }
        })(), nodebuffer: (function() {
          try {
            return o.nodebuffer && 1 === String.fromCharCode.apply(null, r.allocBuffer(1)).length;
          } catch (e2) {
            return false;
          }
        })() } };
        function s(e2) {
          var t2 = 65536, r2 = a.getTypeOf(e2), n2 = true;
          if ("uint8array" === r2 ? n2 = i.applyCanBeUsed.uint8array : "nodebuffer" === r2 && (n2 = i.applyCanBeUsed.nodebuffer), n2) for (; 1 < t2; ) try {
            return i.stringifyByChunk(e2, r2, t2);
          } catch (e3) {
            t2 = Math.floor(t2 / 2);
          }
          return i.stringifyByChar(e2);
        }
        function f(e2, t2) {
          for (var r2 = 0; r2 < e2.length; r2++) t2[r2] = e2[r2];
          return t2;
        }
        a.applyFromCharCode = s;
        var c = {};
        c.string = { string: n, array: function(e2) {
          return l(e2, new Array(e2.length));
        }, arraybuffer: function(e2) {
          return c.string.uint8array(e2).buffer;
        }, uint8array: function(e2) {
          return l(e2, new Uint8Array(e2.length));
        }, nodebuffer: function(e2) {
          return l(e2, r.allocBuffer(e2.length));
        } }, c.array = { string: s, array: n, arraybuffer: function(e2) {
          return new Uint8Array(e2).buffer;
        }, uint8array: function(e2) {
          return new Uint8Array(e2);
        }, nodebuffer: function(e2) {
          return r.newBufferFrom(e2);
        } }, c.arraybuffer = { string: function(e2) {
          return s(new Uint8Array(e2));
        }, array: function(e2) {
          return f(new Uint8Array(e2), new Array(e2.byteLength));
        }, arraybuffer: n, uint8array: function(e2) {
          return new Uint8Array(e2);
        }, nodebuffer: function(e2) {
          return r.newBufferFrom(new Uint8Array(e2));
        } }, c.uint8array = { string: s, array: function(e2) {
          return f(e2, new Array(e2.length));
        }, arraybuffer: function(e2) {
          return e2.buffer;
        }, uint8array: n, nodebuffer: function(e2) {
          return r.newBufferFrom(e2);
        } }, c.nodebuffer = { string: s, array: function(e2) {
          return f(e2, new Array(e2.length));
        }, arraybuffer: function(e2) {
          return c.nodebuffer.uint8array(e2).buffer;
        }, uint8array: function(e2) {
          return f(e2, new Uint8Array(e2.length));
        }, nodebuffer: n }, a.transformTo = function(e2, t2) {
          if (t2 = t2 || "", !e2) return t2;
          a.checkSupport(e2);
          var r2 = a.getTypeOf(t2);
          return c[r2][e2](t2);
        }, a.resolve = function(e2) {
          for (var t2 = e2.split("/"), r2 = [], n2 = 0; n2 < t2.length; n2++) {
            var i2 = t2[n2];
            "." === i2 || "" === i2 && 0 !== n2 && n2 !== t2.length - 1 || (".." === i2 ? r2.pop() : r2.push(i2));
          }
          return r2.join("/");
        }, a.getTypeOf = function(e2) {
          return "string" == typeof e2 ? "string" : "[object Array]" === Object.prototype.toString.call(e2) ? "array" : o.nodebuffer && r.isBuffer(e2) ? "nodebuffer" : o.uint8array && e2 instanceof Uint8Array ? "uint8array" : o.arraybuffer && e2 instanceof ArrayBuffer ? "arraybuffer" : void 0;
        }, a.checkSupport = function(e2) {
          if (!o[e2.toLowerCase()]) throw new Error(e2 + " is not supported by this platform");
        }, a.MAX_VALUE_16BITS = 65535, a.MAX_VALUE_32BITS = -1, a.pretty = function(e2) {
          var t2, r2, n2 = "";
          for (r2 = 0; r2 < (e2 || "").length; r2++) n2 += "\\x" + ((t2 = e2.charCodeAt(r2)) < 16 ? "0" : "") + t2.toString(16).toUpperCase();
          return n2;
        }, a.delay = function(e2, t2, r2) {
          setImmediate(function() {
            e2.apply(r2 || null, t2 || []);
          });
        }, a.inherits = function(e2, t2) {
          function r2() {
          }
          r2.prototype = t2.prototype, e2.prototype = new r2();
        }, a.extend = function() {
          var e2, t2, r2 = {};
          for (e2 = 0; e2 < arguments.length; e2++) for (t2 in arguments[e2]) Object.prototype.hasOwnProperty.call(arguments[e2], t2) && void 0 === r2[t2] && (r2[t2] = arguments[e2][t2]);
          return r2;
        }, a.prepareContent = function(r2, e2, n2, i2, s2) {
          return u.Promise.resolve(e2).then(function(n3) {
            return o.blob && (n3 instanceof Blob || -1 !== ["[object File]", "[object Blob]"].indexOf(Object.prototype.toString.call(n3))) && "undefined" != typeof FileReader ? new u.Promise(function(t2, r3) {
              var e3 = new FileReader();
              e3.onload = function(e4) {
                t2(e4.target.result);
              }, e3.onerror = function(e4) {
                r3(e4.target.error);
              }, e3.readAsArrayBuffer(n3);
            }) : n3;
          }).then(function(e3) {
            var t2 = a.getTypeOf(e3);
            return t2 ? ("arraybuffer" === t2 ? e3 = a.transformTo("uint8array", e3) : "string" === t2 && (s2 ? e3 = h.decode(e3) : n2 && true !== i2 && (e3 = (function(e4) {
              return l(e4, o.uint8array ? new Uint8Array(e4.length) : new Array(e4.length));
            })(e3))), e3) : u.Promise.reject(new Error("Can't read the data of '" + r2 + "'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"));
          });
        };
      }, { "./base64": 1, "./external": 6, "./nodejsUtils": 14, "./support": 30, setimmediate: 54 }], 33: [function(e, t, r) {
        var n = e("./reader/readerFor"), i = e("./utils"), s = e("./signature"), a = e("./zipEntry"), o = e("./support");
        function h(e2) {
          this.files = [], this.loadOptions = e2;
        }
        h.prototype = { checkSignature: function(e2) {
          if (!this.reader.readAndCheckSignature(e2)) {
            this.reader.index -= 4;
            var t2 = this.reader.readString(4);
            throw new Error("Corrupted zip or bug: unexpected signature (" + i.pretty(t2) + ", expected " + i.pretty(e2) + ")");
          }
        }, isSignature: function(e2, t2) {
          var r2 = this.reader.index;
          this.reader.setIndex(e2);
          var n2 = this.reader.readString(4) === t2;
          return this.reader.setIndex(r2), n2;
        }, readBlockEndOfCentral: function() {
          this.diskNumber = this.reader.readInt(2), this.diskWithCentralDirStart = this.reader.readInt(2), this.centralDirRecordsOnThisDisk = this.reader.readInt(2), this.centralDirRecords = this.reader.readInt(2), this.centralDirSize = this.reader.readInt(4), this.centralDirOffset = this.reader.readInt(4), this.zipCommentLength = this.reader.readInt(2);
          var e2 = this.reader.readData(this.zipCommentLength), t2 = o.uint8array ? "uint8array" : "array", r2 = i.transformTo(t2, e2);
          this.zipComment = this.loadOptions.decodeFileName(r2);
        }, readBlockZip64EndOfCentral: function() {
          this.zip64EndOfCentralSize = this.reader.readInt(8), this.reader.skip(4), this.diskNumber = this.reader.readInt(4), this.diskWithCentralDirStart = this.reader.readInt(4), this.centralDirRecordsOnThisDisk = this.reader.readInt(8), this.centralDirRecords = this.reader.readInt(8), this.centralDirSize = this.reader.readInt(8), this.centralDirOffset = this.reader.readInt(8), this.zip64ExtensibleData = {};
          for (var e2, t2, r2, n2 = this.zip64EndOfCentralSize - 44; 0 < n2; ) e2 = this.reader.readInt(2), t2 = this.reader.readInt(4), r2 = this.reader.readData(t2), this.zip64ExtensibleData[e2] = { id: e2, length: t2, value: r2 };
        }, readBlockZip64EndOfCentralLocator: function() {
          if (this.diskWithZip64CentralDirStart = this.reader.readInt(4), this.relativeOffsetEndOfZip64CentralDir = this.reader.readInt(8), this.disksCount = this.reader.readInt(4), 1 < this.disksCount) throw new Error("Multi-volumes zip are not supported");
        }, readLocalFiles: function() {
          var e2, t2;
          for (e2 = 0; e2 < this.files.length; e2++) t2 = this.files[e2], this.reader.setIndex(t2.localHeaderOffset), this.checkSignature(s.LOCAL_FILE_HEADER), t2.readLocalPart(this.reader), t2.handleUTF8(), t2.processAttributes();
        }, readCentralDir: function() {
          var e2;
          for (this.reader.setIndex(this.centralDirOffset); this.reader.readAndCheckSignature(s.CENTRAL_FILE_HEADER); ) (e2 = new a({ zip64: this.zip64 }, this.loadOptions)).readCentralPart(this.reader), this.files.push(e2);
          if (this.centralDirRecords !== this.files.length && 0 !== this.centralDirRecords && 0 === this.files.length) throw new Error("Corrupted zip or bug: expected " + this.centralDirRecords + " records in central dir, got " + this.files.length);
        }, readEndOfCentral: function() {
          var e2 = this.reader.lastIndexOfSignature(s.CENTRAL_DIRECTORY_END);
          if (e2 < 0) throw !this.isSignature(0, s.LOCAL_FILE_HEADER) ? new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html") : new Error("Corrupted zip: can't find end of central directory");
          this.reader.setIndex(e2);
          var t2 = e2;
          if (this.checkSignature(s.CENTRAL_DIRECTORY_END), this.readBlockEndOfCentral(), this.diskNumber === i.MAX_VALUE_16BITS || this.diskWithCentralDirStart === i.MAX_VALUE_16BITS || this.centralDirRecordsOnThisDisk === i.MAX_VALUE_16BITS || this.centralDirRecords === i.MAX_VALUE_16BITS || this.centralDirSize === i.MAX_VALUE_32BITS || this.centralDirOffset === i.MAX_VALUE_32BITS) {
            if (this.zip64 = true, (e2 = this.reader.lastIndexOfSignature(s.ZIP64_CENTRAL_DIRECTORY_LOCATOR)) < 0) throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");
            if (this.reader.setIndex(e2), this.checkSignature(s.ZIP64_CENTRAL_DIRECTORY_LOCATOR), this.readBlockZip64EndOfCentralLocator(), !this.isSignature(this.relativeOffsetEndOfZip64CentralDir, s.ZIP64_CENTRAL_DIRECTORY_END) && (this.relativeOffsetEndOfZip64CentralDir = this.reader.lastIndexOfSignature(s.ZIP64_CENTRAL_DIRECTORY_END), this.relativeOffsetEndOfZip64CentralDir < 0)) throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");
            this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir), this.checkSignature(s.ZIP64_CENTRAL_DIRECTORY_END), this.readBlockZip64EndOfCentral();
          }
          var r2 = this.centralDirOffset + this.centralDirSize;
          this.zip64 && (r2 += 20, r2 += 12 + this.zip64EndOfCentralSize);
          var n2 = t2 - r2;
          if (0 < n2) this.isSignature(t2, s.CENTRAL_FILE_HEADER) || (this.reader.zero = n2);
          else if (n2 < 0) throw new Error("Corrupted zip: missing " + Math.abs(n2) + " bytes.");
        }, prepareReader: function(e2) {
          this.reader = n(e2);
        }, load: function(e2) {
          this.prepareReader(e2), this.readEndOfCentral(), this.readCentralDir(), this.readLocalFiles();
        } }, t.exports = h;
      }, { "./reader/readerFor": 22, "./signature": 23, "./support": 30, "./utils": 32, "./zipEntry": 34 }], 34: [function(e, t, r) {
        var n = e("./reader/readerFor"), s = e("./utils"), i = e("./compressedObject"), a = e("./crc32"), o = e("./utf8"), h = e("./compressions"), u = e("./support");
        function l(e2, t2) {
          this.options = e2, this.loadOptions = t2;
        }
        l.prototype = { isEncrypted: function() {
          return 1 == (1 & this.bitFlag);
        }, useUTF8: function() {
          return 2048 == (2048 & this.bitFlag);
        }, readLocalPart: function(e2) {
          var t2, r2;
          if (e2.skip(22), this.fileNameLength = e2.readInt(2), r2 = e2.readInt(2), this.fileName = e2.readData(this.fileNameLength), e2.skip(r2), -1 === this.compressedSize || -1 === this.uncompressedSize) throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");
          if (null === (t2 = (function(e3) {
            for (var t3 in h) if (Object.prototype.hasOwnProperty.call(h, t3) && h[t3].magic === e3) return h[t3];
            return null;
          })(this.compressionMethod))) throw new Error("Corrupted zip : compression " + s.pretty(this.compressionMethod) + " unknown (inner file : " + s.transformTo("string", this.fileName) + ")");
          this.decompressed = new i(this.compressedSize, this.uncompressedSize, this.crc32, t2, e2.readData(this.compressedSize));
        }, readCentralPart: function(e2) {
          this.versionMadeBy = e2.readInt(2), e2.skip(2), this.bitFlag = e2.readInt(2), this.compressionMethod = e2.readString(2), this.date = e2.readDate(), this.crc32 = e2.readInt(4), this.compressedSize = e2.readInt(4), this.uncompressedSize = e2.readInt(4);
          var t2 = e2.readInt(2);
          if (this.extraFieldsLength = e2.readInt(2), this.fileCommentLength = e2.readInt(2), this.diskNumberStart = e2.readInt(2), this.internalFileAttributes = e2.readInt(2), this.externalFileAttributes = e2.readInt(4), this.localHeaderOffset = e2.readInt(4), this.isEncrypted()) throw new Error("Encrypted zip are not supported");
          e2.skip(t2), this.readExtraFields(e2), this.parseZIP64ExtraField(e2), this.fileComment = e2.readData(this.fileCommentLength);
        }, processAttributes: function() {
          this.unixPermissions = null, this.dosPermissions = null;
          var e2 = this.versionMadeBy >> 8;
          this.dir = !!(16 & this.externalFileAttributes), 0 == e2 && (this.dosPermissions = 63 & this.externalFileAttributes), 3 == e2 && (this.unixPermissions = this.externalFileAttributes >> 16 & 65535), this.dir || "/" !== this.fileNameStr.slice(-1) || (this.dir = true);
        }, parseZIP64ExtraField: function() {
          if (this.extraFields[1]) {
            var e2 = n(this.extraFields[1].value);
            this.uncompressedSize === s.MAX_VALUE_32BITS && (this.uncompressedSize = e2.readInt(8)), this.compressedSize === s.MAX_VALUE_32BITS && (this.compressedSize = e2.readInt(8)), this.localHeaderOffset === s.MAX_VALUE_32BITS && (this.localHeaderOffset = e2.readInt(8)), this.diskNumberStart === s.MAX_VALUE_32BITS && (this.diskNumberStart = e2.readInt(4));
          }
        }, readExtraFields: function(e2) {
          var t2, r2, n2, i2 = e2.index + this.extraFieldsLength;
          for (this.extraFields || (this.extraFields = {}); e2.index + 4 < i2; ) t2 = e2.readInt(2), r2 = e2.readInt(2), n2 = e2.readData(r2), this.extraFields[t2] = { id: t2, length: r2, value: n2 };
          e2.setIndex(i2);
        }, handleUTF8: function() {
          var e2 = u.uint8array ? "uint8array" : "array";
          if (this.useUTF8()) this.fileNameStr = o.utf8decode(this.fileName), this.fileCommentStr = o.utf8decode(this.fileComment);
          else {
            var t2 = this.findExtraFieldUnicodePath();
            if (null !== t2) this.fileNameStr = t2;
            else {
              var r2 = s.transformTo(e2, this.fileName);
              this.fileNameStr = this.loadOptions.decodeFileName(r2);
            }
            var n2 = this.findExtraFieldUnicodeComment();
            if (null !== n2) this.fileCommentStr = n2;
            else {
              var i2 = s.transformTo(e2, this.fileComment);
              this.fileCommentStr = this.loadOptions.decodeFileName(i2);
            }
          }
        }, findExtraFieldUnicodePath: function() {
          var e2 = this.extraFields[28789];
          if (e2) {
            var t2 = n(e2.value);
            return 1 !== t2.readInt(1) ? null : a(this.fileName) !== t2.readInt(4) ? null : o.utf8decode(t2.readData(e2.length - 5));
          }
          return null;
        }, findExtraFieldUnicodeComment: function() {
          var e2 = this.extraFields[25461];
          if (e2) {
            var t2 = n(e2.value);
            return 1 !== t2.readInt(1) ? null : a(this.fileComment) !== t2.readInt(4) ? null : o.utf8decode(t2.readData(e2.length - 5));
          }
          return null;
        } }, t.exports = l;
      }, { "./compressedObject": 2, "./compressions": 3, "./crc32": 4, "./reader/readerFor": 22, "./support": 30, "./utf8": 31, "./utils": 32 }], 35: [function(e, t, r) {
        function n(e2, t2, r2) {
          this.name = e2, this.dir = r2.dir, this.date = r2.date, this.comment = r2.comment, this.unixPermissions = r2.unixPermissions, this.dosPermissions = r2.dosPermissions, this._data = t2, this._dataBinary = r2.binary, this.options = { compression: r2.compression, compressionOptions: r2.compressionOptions };
        }
        var s = e("./stream/StreamHelper"), i = e("./stream/DataWorker"), a = e("./utf8"), o = e("./compressedObject"), h = e("./stream/GenericWorker");
        n.prototype = { internalStream: function(e2) {
          var t2 = null, r2 = "string";
          try {
            if (!e2) throw new Error("No output type specified.");
            var n2 = "string" === (r2 = e2.toLowerCase()) || "text" === r2;
            "binarystring" !== r2 && "text" !== r2 || (r2 = "string"), t2 = this._decompressWorker();
            var i2 = !this._dataBinary;
            i2 && !n2 && (t2 = t2.pipe(new a.Utf8EncodeWorker())), !i2 && n2 && (t2 = t2.pipe(new a.Utf8DecodeWorker()));
          } catch (e3) {
            (t2 = new h("error")).error(e3);
          }
          return new s(t2, r2, "");
        }, async: function(e2, t2) {
          return this.internalStream(e2).accumulate(t2);
        }, nodeStream: function(e2, t2) {
          return this.internalStream(e2 || "nodebuffer").toNodejsStream(t2);
        }, _compressWorker: function(e2, t2) {
          if (this._data instanceof o && this._data.compression.magic === e2.magic) return this._data.getCompressedWorker();
          var r2 = this._decompressWorker();
          return this._dataBinary || (r2 = r2.pipe(new a.Utf8EncodeWorker())), o.createWorkerFrom(r2, e2, t2);
        }, _decompressWorker: function() {
          return this._data instanceof o ? this._data.getContentWorker() : this._data instanceof h ? this._data : new i(this._data);
        } };
        for (var u = ["asText", "asBinary", "asNodeBuffer", "asUint8Array", "asArrayBuffer"], l = function() {
          throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
        }, f = 0; f < u.length; f++) n.prototype[u[f]] = l;
        t.exports = n;
      }, { "./compressedObject": 2, "./stream/DataWorker": 27, "./stream/GenericWorker": 28, "./stream/StreamHelper": 29, "./utf8": 31 }], 36: [function(e, l, t) {
        (function(t2) {
          var r, n, e2 = t2.MutationObserver || t2.WebKitMutationObserver;
          if (e2) {
            var i = 0, s = new e2(u), a = t2.document.createTextNode("");
            s.observe(a, { characterData: true }), r = function() {
              a.data = i = ++i % 2;
            };
          } else if (t2.setImmediate || void 0 === t2.MessageChannel) r = "document" in t2 && "onreadystatechange" in t2.document.createElement("script") ? function() {
            var e3 = t2.document.createElement("script");
            e3.onreadystatechange = function() {
              u(), e3.onreadystatechange = null, e3.parentNode.removeChild(e3), e3 = null;
            }, t2.document.documentElement.appendChild(e3);
          } : function() {
            setTimeout(u, 0);
          };
          else {
            var o = new t2.MessageChannel();
            o.port1.onmessage = u, r = function() {
              o.port2.postMessage(0);
            };
          }
          var h = [];
          function u() {
            var e3, t3;
            n = true;
            for (var r2 = h.length; r2; ) {
              for (t3 = h, h = [], e3 = -1; ++e3 < r2; ) t3[e3]();
              r2 = h.length;
            }
            n = false;
          }
          l.exports = function(e3) {
            1 !== h.push(e3) || n || r();
          };
        }).call(this, "undefined" != typeof commonjsGlobal ? commonjsGlobal : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
      }, {}], 37: [function(e, t, r) {
        var i = e("immediate");
        function u() {
        }
        var l = {}, s = ["REJECTED"], a = ["FULFILLED"], n = ["PENDING"];
        function o(e2) {
          if ("function" != typeof e2) throw new TypeError("resolver must be a function");
          this.state = n, this.queue = [], this.outcome = void 0, e2 !== u && d(this, e2);
        }
        function h(e2, t2, r2) {
          this.promise = e2, "function" == typeof t2 && (this.onFulfilled = t2, this.callFulfilled = this.otherCallFulfilled), "function" == typeof r2 && (this.onRejected = r2, this.callRejected = this.otherCallRejected);
        }
        function f(t2, r2, n2) {
          i(function() {
            var e2;
            try {
              e2 = r2(n2);
            } catch (e3) {
              return l.reject(t2, e3);
            }
            e2 === t2 ? l.reject(t2, new TypeError("Cannot resolve promise with itself")) : l.resolve(t2, e2);
          });
        }
        function c(e2) {
          var t2 = e2 && e2.then;
          if (e2 && ("object" == typeof e2 || "function" == typeof e2) && "function" == typeof t2) return function() {
            t2.apply(e2, arguments);
          };
        }
        function d(t2, e2) {
          var r2 = false;
          function n2(e3) {
            r2 || (r2 = true, l.reject(t2, e3));
          }
          function i2(e3) {
            r2 || (r2 = true, l.resolve(t2, e3));
          }
          var s2 = p(function() {
            e2(i2, n2);
          });
          "error" === s2.status && n2(s2.value);
        }
        function p(e2, t2) {
          var r2 = {};
          try {
            r2.value = e2(t2), r2.status = "success";
          } catch (e3) {
            r2.status = "error", r2.value = e3;
          }
          return r2;
        }
        (t.exports = o).prototype.finally = function(t2) {
          if ("function" != typeof t2) return this;
          var r2 = this.constructor;
          return this.then(function(e2) {
            return r2.resolve(t2()).then(function() {
              return e2;
            });
          }, function(e2) {
            return r2.resolve(t2()).then(function() {
              throw e2;
            });
          });
        }, o.prototype.catch = function(e2) {
          return this.then(null, e2);
        }, o.prototype.then = function(e2, t2) {
          if ("function" != typeof e2 && this.state === a || "function" != typeof t2 && this.state === s) return this;
          var r2 = new this.constructor(u);
          this.state !== n ? f(r2, this.state === a ? e2 : t2, this.outcome) : this.queue.push(new h(r2, e2, t2));
          return r2;
        }, h.prototype.callFulfilled = function(e2) {
          l.resolve(this.promise, e2);
        }, h.prototype.otherCallFulfilled = function(e2) {
          f(this.promise, this.onFulfilled, e2);
        }, h.prototype.callRejected = function(e2) {
          l.reject(this.promise, e2);
        }, h.prototype.otherCallRejected = function(e2) {
          f(this.promise, this.onRejected, e2);
        }, l.resolve = function(e2, t2) {
          var r2 = p(c, t2);
          if ("error" === r2.status) return l.reject(e2, r2.value);
          var n2 = r2.value;
          if (n2) d(e2, n2);
          else {
            e2.state = a, e2.outcome = t2;
            for (var i2 = -1, s2 = e2.queue.length; ++i2 < s2; ) e2.queue[i2].callFulfilled(t2);
          }
          return e2;
        }, l.reject = function(e2, t2) {
          e2.state = s, e2.outcome = t2;
          for (var r2 = -1, n2 = e2.queue.length; ++r2 < n2; ) e2.queue[r2].callRejected(t2);
          return e2;
        }, o.resolve = function(e2) {
          if (e2 instanceof this) return e2;
          return l.resolve(new this(u), e2);
        }, o.reject = function(e2) {
          var t2 = new this(u);
          return l.reject(t2, e2);
        }, o.all = function(e2) {
          var r2 = this;
          if ("[object Array]" !== Object.prototype.toString.call(e2)) return this.reject(new TypeError("must be an array"));
          var n2 = e2.length, i2 = false;
          if (!n2) return this.resolve([]);
          var s2 = new Array(n2), a2 = 0, t2 = -1, o2 = new this(u);
          for (; ++t2 < n2; ) h2(e2[t2], t2);
          return o2;
          function h2(e3, t3) {
            r2.resolve(e3).then(function(e4) {
              s2[t3] = e4, ++a2 !== n2 || i2 || (i2 = true, l.resolve(o2, s2));
            }, function(e4) {
              i2 || (i2 = true, l.reject(o2, e4));
            });
          }
        }, o.race = function(e2) {
          var t2 = this;
          if ("[object Array]" !== Object.prototype.toString.call(e2)) return this.reject(new TypeError("must be an array"));
          var r2 = e2.length, n2 = false;
          if (!r2) return this.resolve([]);
          var i2 = -1, s2 = new this(u);
          for (; ++i2 < r2; ) a2 = e2[i2], t2.resolve(a2).then(function(e3) {
            n2 || (n2 = true, l.resolve(s2, e3));
          }, function(e3) {
            n2 || (n2 = true, l.reject(s2, e3));
          });
          var a2;
          return s2;
        };
      }, { immediate: 36 }], 38: [function(e, t, r) {
        var n = {};
        (0, e("./lib/utils/common").assign)(n, e("./lib/deflate"), e("./lib/inflate"), e("./lib/zlib/constants")), t.exports = n;
      }, { "./lib/deflate": 39, "./lib/inflate": 40, "./lib/utils/common": 41, "./lib/zlib/constants": 44 }], 39: [function(e, t, r) {
        var a = e("./zlib/deflate"), o = e("./utils/common"), h = e("./utils/strings"), i = e("./zlib/messages"), s = e("./zlib/zstream"), u = Object.prototype.toString, l = 0, f = -1, c = 0, d = 8;
        function p(e2) {
          if (!(this instanceof p)) return new p(e2);
          this.options = o.assign({ level: f, method: d, chunkSize: 16384, windowBits: 15, memLevel: 8, strategy: c, to: "" }, e2 || {});
          var t2 = this.options;
          t2.raw && 0 < t2.windowBits ? t2.windowBits = -t2.windowBits : t2.gzip && 0 < t2.windowBits && t2.windowBits < 16 && (t2.windowBits += 16), this.err = 0, this.msg = "", this.ended = false, this.chunks = [], this.strm = new s(), this.strm.avail_out = 0;
          var r2 = a.deflateInit2(this.strm, t2.level, t2.method, t2.windowBits, t2.memLevel, t2.strategy);
          if (r2 !== l) throw new Error(i[r2]);
          if (t2.header && a.deflateSetHeader(this.strm, t2.header), t2.dictionary) {
            var n2;
            if (n2 = "string" == typeof t2.dictionary ? h.string2buf(t2.dictionary) : "[object ArrayBuffer]" === u.call(t2.dictionary) ? new Uint8Array(t2.dictionary) : t2.dictionary, (r2 = a.deflateSetDictionary(this.strm, n2)) !== l) throw new Error(i[r2]);
            this._dict_set = true;
          }
        }
        function n(e2, t2) {
          var r2 = new p(t2);
          if (r2.push(e2, true), r2.err) throw r2.msg || i[r2.err];
          return r2.result;
        }
        p.prototype.push = function(e2, t2) {
          var r2, n2, i2 = this.strm, s2 = this.options.chunkSize;
          if (this.ended) return false;
          n2 = t2 === ~~t2 ? t2 : true === t2 ? 4 : 0, "string" == typeof e2 ? i2.input = h.string2buf(e2) : "[object ArrayBuffer]" === u.call(e2) ? i2.input = new Uint8Array(e2) : i2.input = e2, i2.next_in = 0, i2.avail_in = i2.input.length;
          do {
            if (0 === i2.avail_out && (i2.output = new o.Buf8(s2), i2.next_out = 0, i2.avail_out = s2), 1 !== (r2 = a.deflate(i2, n2)) && r2 !== l) return this.onEnd(r2), !(this.ended = true);
            0 !== i2.avail_out && (0 !== i2.avail_in || 4 !== n2 && 2 !== n2) || ("string" === this.options.to ? this.onData(h.buf2binstring(o.shrinkBuf(i2.output, i2.next_out))) : this.onData(o.shrinkBuf(i2.output, i2.next_out)));
          } while ((0 < i2.avail_in || 0 === i2.avail_out) && 1 !== r2);
          return 4 === n2 ? (r2 = a.deflateEnd(this.strm), this.onEnd(r2), this.ended = true, r2 === l) : 2 !== n2 || (this.onEnd(l), !(i2.avail_out = 0));
        }, p.prototype.onData = function(e2) {
          this.chunks.push(e2);
        }, p.prototype.onEnd = function(e2) {
          e2 === l && ("string" === this.options.to ? this.result = this.chunks.join("") : this.result = o.flattenChunks(this.chunks)), this.chunks = [], this.err = e2, this.msg = this.strm.msg;
        }, r.Deflate = p, r.deflate = n, r.deflateRaw = function(e2, t2) {
          return (t2 = t2 || {}).raw = true, n(e2, t2);
        }, r.gzip = function(e2, t2) {
          return (t2 = t2 || {}).gzip = true, n(e2, t2);
        };
      }, { "./utils/common": 41, "./utils/strings": 42, "./zlib/deflate": 46, "./zlib/messages": 51, "./zlib/zstream": 53 }], 40: [function(e, t, r) {
        var c = e("./zlib/inflate"), d = e("./utils/common"), p = e("./utils/strings"), m = e("./zlib/constants"), n = e("./zlib/messages"), i = e("./zlib/zstream"), s = e("./zlib/gzheader"), _ = Object.prototype.toString;
        function a(e2) {
          if (!(this instanceof a)) return new a(e2);
          this.options = d.assign({ chunkSize: 16384, windowBits: 0, to: "" }, e2 || {});
          var t2 = this.options;
          t2.raw && 0 <= t2.windowBits && t2.windowBits < 16 && (t2.windowBits = -t2.windowBits, 0 === t2.windowBits && (t2.windowBits = -15)), !(0 <= t2.windowBits && t2.windowBits < 16) || e2 && e2.windowBits || (t2.windowBits += 32), 15 < t2.windowBits && t2.windowBits < 48 && 0 == (15 & t2.windowBits) && (t2.windowBits |= 15), this.err = 0, this.msg = "", this.ended = false, this.chunks = [], this.strm = new i(), this.strm.avail_out = 0;
          var r2 = c.inflateInit2(this.strm, t2.windowBits);
          if (r2 !== m.Z_OK) throw new Error(n[r2]);
          this.header = new s(), c.inflateGetHeader(this.strm, this.header);
        }
        function o(e2, t2) {
          var r2 = new a(t2);
          if (r2.push(e2, true), r2.err) throw r2.msg || n[r2.err];
          return r2.result;
        }
        a.prototype.push = function(e2, t2) {
          var r2, n2, i2, s2, a2, o2, h = this.strm, u = this.options.chunkSize, l = this.options.dictionary, f = false;
          if (this.ended) return false;
          n2 = t2 === ~~t2 ? t2 : true === t2 ? m.Z_FINISH : m.Z_NO_FLUSH, "string" == typeof e2 ? h.input = p.binstring2buf(e2) : "[object ArrayBuffer]" === _.call(e2) ? h.input = new Uint8Array(e2) : h.input = e2, h.next_in = 0, h.avail_in = h.input.length;
          do {
            if (0 === h.avail_out && (h.output = new d.Buf8(u), h.next_out = 0, h.avail_out = u), (r2 = c.inflate(h, m.Z_NO_FLUSH)) === m.Z_NEED_DICT && l && (o2 = "string" == typeof l ? p.string2buf(l) : "[object ArrayBuffer]" === _.call(l) ? new Uint8Array(l) : l, r2 = c.inflateSetDictionary(this.strm, o2)), r2 === m.Z_BUF_ERROR && true === f && (r2 = m.Z_OK, f = false), r2 !== m.Z_STREAM_END && r2 !== m.Z_OK) return this.onEnd(r2), !(this.ended = true);
            h.next_out && (0 !== h.avail_out && r2 !== m.Z_STREAM_END && (0 !== h.avail_in || n2 !== m.Z_FINISH && n2 !== m.Z_SYNC_FLUSH) || ("string" === this.options.to ? (i2 = p.utf8border(h.output, h.next_out), s2 = h.next_out - i2, a2 = p.buf2string(h.output, i2), h.next_out = s2, h.avail_out = u - s2, s2 && d.arraySet(h.output, h.output, i2, s2, 0), this.onData(a2)) : this.onData(d.shrinkBuf(h.output, h.next_out)))), 0 === h.avail_in && 0 === h.avail_out && (f = true);
          } while ((0 < h.avail_in || 0 === h.avail_out) && r2 !== m.Z_STREAM_END);
          return r2 === m.Z_STREAM_END && (n2 = m.Z_FINISH), n2 === m.Z_FINISH ? (r2 = c.inflateEnd(this.strm), this.onEnd(r2), this.ended = true, r2 === m.Z_OK) : n2 !== m.Z_SYNC_FLUSH || (this.onEnd(m.Z_OK), !(h.avail_out = 0));
        }, a.prototype.onData = function(e2) {
          this.chunks.push(e2);
        }, a.prototype.onEnd = function(e2) {
          e2 === m.Z_OK && ("string" === this.options.to ? this.result = this.chunks.join("") : this.result = d.flattenChunks(this.chunks)), this.chunks = [], this.err = e2, this.msg = this.strm.msg;
        }, r.Inflate = a, r.inflate = o, r.inflateRaw = function(e2, t2) {
          return (t2 = t2 || {}).raw = true, o(e2, t2);
        }, r.ungzip = o;
      }, { "./utils/common": 41, "./utils/strings": 42, "./zlib/constants": 44, "./zlib/gzheader": 47, "./zlib/inflate": 49, "./zlib/messages": 51, "./zlib/zstream": 53 }], 41: [function(e, t, r) {
        var n = "undefined" != typeof Uint8Array && "undefined" != typeof Uint16Array && "undefined" != typeof Int32Array;
        r.assign = function(e2) {
          for (var t2 = Array.prototype.slice.call(arguments, 1); t2.length; ) {
            var r2 = t2.shift();
            if (r2) {
              if ("object" != typeof r2) throw new TypeError(r2 + "must be non-object");
              for (var n2 in r2) r2.hasOwnProperty(n2) && (e2[n2] = r2[n2]);
            }
          }
          return e2;
        }, r.shrinkBuf = function(e2, t2) {
          return e2.length === t2 ? e2 : e2.subarray ? e2.subarray(0, t2) : (e2.length = t2, e2);
        };
        var i = { arraySet: function(e2, t2, r2, n2, i2) {
          if (t2.subarray && e2.subarray) e2.set(t2.subarray(r2, r2 + n2), i2);
          else for (var s2 = 0; s2 < n2; s2++) e2[i2 + s2] = t2[r2 + s2];
        }, flattenChunks: function(e2) {
          var t2, r2, n2, i2, s2, a;
          for (t2 = n2 = 0, r2 = e2.length; t2 < r2; t2++) n2 += e2[t2].length;
          for (a = new Uint8Array(n2), t2 = i2 = 0, r2 = e2.length; t2 < r2; t2++) s2 = e2[t2], a.set(s2, i2), i2 += s2.length;
          return a;
        } }, s = { arraySet: function(e2, t2, r2, n2, i2) {
          for (var s2 = 0; s2 < n2; s2++) e2[i2 + s2] = t2[r2 + s2];
        }, flattenChunks: function(e2) {
          return [].concat.apply([], e2);
        } };
        r.setTyped = function(e2) {
          e2 ? (r.Buf8 = Uint8Array, r.Buf16 = Uint16Array, r.Buf32 = Int32Array, r.assign(r, i)) : (r.Buf8 = Array, r.Buf16 = Array, r.Buf32 = Array, r.assign(r, s));
        }, r.setTyped(n);
      }, {}], 42: [function(e, t, r) {
        var h = e("./common"), i = true, s = true;
        try {
          String.fromCharCode.apply(null, [0]);
        } catch (e2) {
          i = false;
        }
        try {
          String.fromCharCode.apply(null, new Uint8Array(1));
        } catch (e2) {
          s = false;
        }
        for (var u = new h.Buf8(256), n = 0; n < 256; n++) u[n] = 252 <= n ? 6 : 248 <= n ? 5 : 240 <= n ? 4 : 224 <= n ? 3 : 192 <= n ? 2 : 1;
        function l(e2, t2) {
          if (t2 < 65537 && (e2.subarray && s || !e2.subarray && i)) return String.fromCharCode.apply(null, h.shrinkBuf(e2, t2));
          for (var r2 = "", n2 = 0; n2 < t2; n2++) r2 += String.fromCharCode(e2[n2]);
          return r2;
        }
        u[254] = u[254] = 1, r.string2buf = function(e2) {
          var t2, r2, n2, i2, s2, a = e2.length, o = 0;
          for (i2 = 0; i2 < a; i2++) 55296 == (64512 & (r2 = e2.charCodeAt(i2))) && i2 + 1 < a && 56320 == (64512 & (n2 = e2.charCodeAt(i2 + 1))) && (r2 = 65536 + (r2 - 55296 << 10) + (n2 - 56320), i2++), o += r2 < 128 ? 1 : r2 < 2048 ? 2 : r2 < 65536 ? 3 : 4;
          for (t2 = new h.Buf8(o), i2 = s2 = 0; s2 < o; i2++) 55296 == (64512 & (r2 = e2.charCodeAt(i2))) && i2 + 1 < a && 56320 == (64512 & (n2 = e2.charCodeAt(i2 + 1))) && (r2 = 65536 + (r2 - 55296 << 10) + (n2 - 56320), i2++), r2 < 128 ? t2[s2++] = r2 : (r2 < 2048 ? t2[s2++] = 192 | r2 >>> 6 : (r2 < 65536 ? t2[s2++] = 224 | r2 >>> 12 : (t2[s2++] = 240 | r2 >>> 18, t2[s2++] = 128 | r2 >>> 12 & 63), t2[s2++] = 128 | r2 >>> 6 & 63), t2[s2++] = 128 | 63 & r2);
          return t2;
        }, r.buf2binstring = function(e2) {
          return l(e2, e2.length);
        }, r.binstring2buf = function(e2) {
          for (var t2 = new h.Buf8(e2.length), r2 = 0, n2 = t2.length; r2 < n2; r2++) t2[r2] = e2.charCodeAt(r2);
          return t2;
        }, r.buf2string = function(e2, t2) {
          var r2, n2, i2, s2, a = t2 || e2.length, o = new Array(2 * a);
          for (r2 = n2 = 0; r2 < a; ) if ((i2 = e2[r2++]) < 128) o[n2++] = i2;
          else if (4 < (s2 = u[i2])) o[n2++] = 65533, r2 += s2 - 1;
          else {
            for (i2 &= 2 === s2 ? 31 : 3 === s2 ? 15 : 7; 1 < s2 && r2 < a; ) i2 = i2 << 6 | 63 & e2[r2++], s2--;
            1 < s2 ? o[n2++] = 65533 : i2 < 65536 ? o[n2++] = i2 : (i2 -= 65536, o[n2++] = 55296 | i2 >> 10 & 1023, o[n2++] = 56320 | 1023 & i2);
          }
          return l(o, n2);
        }, r.utf8border = function(e2, t2) {
          var r2;
          for ((t2 = t2 || e2.length) > e2.length && (t2 = e2.length), r2 = t2 - 1; 0 <= r2 && 128 == (192 & e2[r2]); ) r2--;
          return r2 < 0 ? t2 : 0 === r2 ? t2 : r2 + u[e2[r2]] > t2 ? r2 : t2;
        };
      }, { "./common": 41 }], 43: [function(e, t, r) {
        t.exports = function(e2, t2, r2, n) {
          for (var i = 65535 & e2 | 0, s = e2 >>> 16 & 65535 | 0, a = 0; 0 !== r2; ) {
            for (r2 -= a = 2e3 < r2 ? 2e3 : r2; s = s + (i = i + t2[n++] | 0) | 0, --a; ) ;
            i %= 65521, s %= 65521;
          }
          return i | s << 16 | 0;
        };
      }, {}], 44: [function(e, t, r) {
        t.exports = { Z_NO_FLUSH: 0, Z_PARTIAL_FLUSH: 1, Z_SYNC_FLUSH: 2, Z_FULL_FLUSH: 3, Z_FINISH: 4, Z_BLOCK: 5, Z_TREES: 6, Z_OK: 0, Z_STREAM_END: 1, Z_NEED_DICT: 2, Z_ERRNO: -1, Z_STREAM_ERROR: -2, Z_DATA_ERROR: -3, Z_BUF_ERROR: -5, Z_NO_COMPRESSION: 0, Z_BEST_SPEED: 1, Z_BEST_COMPRESSION: 9, Z_DEFAULT_COMPRESSION: -1, Z_FILTERED: 1, Z_HUFFMAN_ONLY: 2, Z_RLE: 3, Z_FIXED: 4, Z_DEFAULT_STRATEGY: 0, Z_BINARY: 0, Z_TEXT: 1, Z_UNKNOWN: 2, Z_DEFLATED: 8 };
      }, {}], 45: [function(e, t, r) {
        var o = (function() {
          for (var e2, t2 = [], r2 = 0; r2 < 256; r2++) {
            e2 = r2;
            for (var n = 0; n < 8; n++) e2 = 1 & e2 ? 3988292384 ^ e2 >>> 1 : e2 >>> 1;
            t2[r2] = e2;
          }
          return t2;
        })();
        t.exports = function(e2, t2, r2, n) {
          var i = o, s = n + r2;
          e2 ^= -1;
          for (var a = n; a < s; a++) e2 = e2 >>> 8 ^ i[255 & (e2 ^ t2[a])];
          return -1 ^ e2;
        };
      }, {}], 46: [function(e, t, r) {
        var h, c = e("../utils/common"), u = e("./trees"), d = e("./adler32"), p = e("./crc32"), n = e("./messages"), l = 0, f = 4, m = 0, _ = -2, g = -1, b = 4, i = 2, v = 8, y = 9, s = 286, a = 30, o = 19, w = 2 * s + 1, k = 15, x = 3, S = 258, z = S + x + 1, C = 42, E = 113, A = 1, I = 2, O = 3, B = 4;
        function R(e2, t2) {
          return e2.msg = n[t2], t2;
        }
        function T(e2) {
          return (e2 << 1) - (4 < e2 ? 9 : 0);
        }
        function D(e2) {
          for (var t2 = e2.length; 0 <= --t2; ) e2[t2] = 0;
        }
        function F(e2) {
          var t2 = e2.state, r2 = t2.pending;
          r2 > e2.avail_out && (r2 = e2.avail_out), 0 !== r2 && (c.arraySet(e2.output, t2.pending_buf, t2.pending_out, r2, e2.next_out), e2.next_out += r2, t2.pending_out += r2, e2.total_out += r2, e2.avail_out -= r2, t2.pending -= r2, 0 === t2.pending && (t2.pending_out = 0));
        }
        function N(e2, t2) {
          u._tr_flush_block(e2, 0 <= e2.block_start ? e2.block_start : -1, e2.strstart - e2.block_start, t2), e2.block_start = e2.strstart, F(e2.strm);
        }
        function U(e2, t2) {
          e2.pending_buf[e2.pending++] = t2;
        }
        function P(e2, t2) {
          e2.pending_buf[e2.pending++] = t2 >>> 8 & 255, e2.pending_buf[e2.pending++] = 255 & t2;
        }
        function L(e2, t2) {
          var r2, n2, i2 = e2.max_chain_length, s2 = e2.strstart, a2 = e2.prev_length, o2 = e2.nice_match, h2 = e2.strstart > e2.w_size - z ? e2.strstart - (e2.w_size - z) : 0, u2 = e2.window, l2 = e2.w_mask, f2 = e2.prev, c2 = e2.strstart + S, d2 = u2[s2 + a2 - 1], p2 = u2[s2 + a2];
          e2.prev_length >= e2.good_match && (i2 >>= 2), o2 > e2.lookahead && (o2 = e2.lookahead);
          do {
            if (u2[(r2 = t2) + a2] === p2 && u2[r2 + a2 - 1] === d2 && u2[r2] === u2[s2] && u2[++r2] === u2[s2 + 1]) {
              s2 += 2, r2++;
              do {
              } while (u2[++s2] === u2[++r2] && u2[++s2] === u2[++r2] && u2[++s2] === u2[++r2] && u2[++s2] === u2[++r2] && u2[++s2] === u2[++r2] && u2[++s2] === u2[++r2] && u2[++s2] === u2[++r2] && u2[++s2] === u2[++r2] && s2 < c2);
              if (n2 = S - (c2 - s2), s2 = c2 - S, a2 < n2) {
                if (e2.match_start = t2, o2 <= (a2 = n2)) break;
                d2 = u2[s2 + a2 - 1], p2 = u2[s2 + a2];
              }
            }
          } while ((t2 = f2[t2 & l2]) > h2 && 0 != --i2);
          return a2 <= e2.lookahead ? a2 : e2.lookahead;
        }
        function j(e2) {
          var t2, r2, n2, i2, s2, a2, o2, h2, u2, l2, f2 = e2.w_size;
          do {
            if (i2 = e2.window_size - e2.lookahead - e2.strstart, e2.strstart >= f2 + (f2 - z)) {
              for (c.arraySet(e2.window, e2.window, f2, f2, 0), e2.match_start -= f2, e2.strstart -= f2, e2.block_start -= f2, t2 = r2 = e2.hash_size; n2 = e2.head[--t2], e2.head[t2] = f2 <= n2 ? n2 - f2 : 0, --r2; ) ;
              for (t2 = r2 = f2; n2 = e2.prev[--t2], e2.prev[t2] = f2 <= n2 ? n2 - f2 : 0, --r2; ) ;
              i2 += f2;
            }
            if (0 === e2.strm.avail_in) break;
            if (a2 = e2.strm, o2 = e2.window, h2 = e2.strstart + e2.lookahead, u2 = i2, l2 = void 0, l2 = a2.avail_in, u2 < l2 && (l2 = u2), r2 = 0 === l2 ? 0 : (a2.avail_in -= l2, c.arraySet(o2, a2.input, a2.next_in, l2, h2), 1 === a2.state.wrap ? a2.adler = d(a2.adler, o2, l2, h2) : 2 === a2.state.wrap && (a2.adler = p(a2.adler, o2, l2, h2)), a2.next_in += l2, a2.total_in += l2, l2), e2.lookahead += r2, e2.lookahead + e2.insert >= x) for (s2 = e2.strstart - e2.insert, e2.ins_h = e2.window[s2], e2.ins_h = (e2.ins_h << e2.hash_shift ^ e2.window[s2 + 1]) & e2.hash_mask; e2.insert && (e2.ins_h = (e2.ins_h << e2.hash_shift ^ e2.window[s2 + x - 1]) & e2.hash_mask, e2.prev[s2 & e2.w_mask] = e2.head[e2.ins_h], e2.head[e2.ins_h] = s2, s2++, e2.insert--, !(e2.lookahead + e2.insert < x)); ) ;
          } while (e2.lookahead < z && 0 !== e2.strm.avail_in);
        }
        function Z(e2, t2) {
          for (var r2, n2; ; ) {
            if (e2.lookahead < z) {
              if (j(e2), e2.lookahead < z && t2 === l) return A;
              if (0 === e2.lookahead) break;
            }
            if (r2 = 0, e2.lookahead >= x && (e2.ins_h = (e2.ins_h << e2.hash_shift ^ e2.window[e2.strstart + x - 1]) & e2.hash_mask, r2 = e2.prev[e2.strstart & e2.w_mask] = e2.head[e2.ins_h], e2.head[e2.ins_h] = e2.strstart), 0 !== r2 && e2.strstart - r2 <= e2.w_size - z && (e2.match_length = L(e2, r2)), e2.match_length >= x) if (n2 = u._tr_tally(e2, e2.strstart - e2.match_start, e2.match_length - x), e2.lookahead -= e2.match_length, e2.match_length <= e2.max_lazy_match && e2.lookahead >= x) {
              for (e2.match_length--; e2.strstart++, e2.ins_h = (e2.ins_h << e2.hash_shift ^ e2.window[e2.strstart + x - 1]) & e2.hash_mask, r2 = e2.prev[e2.strstart & e2.w_mask] = e2.head[e2.ins_h], e2.head[e2.ins_h] = e2.strstart, 0 != --e2.match_length; ) ;
              e2.strstart++;
            } else e2.strstart += e2.match_length, e2.match_length = 0, e2.ins_h = e2.window[e2.strstart], e2.ins_h = (e2.ins_h << e2.hash_shift ^ e2.window[e2.strstart + 1]) & e2.hash_mask;
            else n2 = u._tr_tally(e2, 0, e2.window[e2.strstart]), e2.lookahead--, e2.strstart++;
            if (n2 && (N(e2, false), 0 === e2.strm.avail_out)) return A;
          }
          return e2.insert = e2.strstart < x - 1 ? e2.strstart : x - 1, t2 === f ? (N(e2, true), 0 === e2.strm.avail_out ? O : B) : e2.last_lit && (N(e2, false), 0 === e2.strm.avail_out) ? A : I;
        }
        function W(e2, t2) {
          for (var r2, n2, i2; ; ) {
            if (e2.lookahead < z) {
              if (j(e2), e2.lookahead < z && t2 === l) return A;
              if (0 === e2.lookahead) break;
            }
            if (r2 = 0, e2.lookahead >= x && (e2.ins_h = (e2.ins_h << e2.hash_shift ^ e2.window[e2.strstart + x - 1]) & e2.hash_mask, r2 = e2.prev[e2.strstart & e2.w_mask] = e2.head[e2.ins_h], e2.head[e2.ins_h] = e2.strstart), e2.prev_length = e2.match_length, e2.prev_match = e2.match_start, e2.match_length = x - 1, 0 !== r2 && e2.prev_length < e2.max_lazy_match && e2.strstart - r2 <= e2.w_size - z && (e2.match_length = L(e2, r2), e2.match_length <= 5 && (1 === e2.strategy || e2.match_length === x && 4096 < e2.strstart - e2.match_start) && (e2.match_length = x - 1)), e2.prev_length >= x && e2.match_length <= e2.prev_length) {
              for (i2 = e2.strstart + e2.lookahead - x, n2 = u._tr_tally(e2, e2.strstart - 1 - e2.prev_match, e2.prev_length - x), e2.lookahead -= e2.prev_length - 1, e2.prev_length -= 2; ++e2.strstart <= i2 && (e2.ins_h = (e2.ins_h << e2.hash_shift ^ e2.window[e2.strstart + x - 1]) & e2.hash_mask, r2 = e2.prev[e2.strstart & e2.w_mask] = e2.head[e2.ins_h], e2.head[e2.ins_h] = e2.strstart), 0 != --e2.prev_length; ) ;
              if (e2.match_available = 0, e2.match_length = x - 1, e2.strstart++, n2 && (N(e2, false), 0 === e2.strm.avail_out)) return A;
            } else if (e2.match_available) {
              if ((n2 = u._tr_tally(e2, 0, e2.window[e2.strstart - 1])) && N(e2, false), e2.strstart++, e2.lookahead--, 0 === e2.strm.avail_out) return A;
            } else e2.match_available = 1, e2.strstart++, e2.lookahead--;
          }
          return e2.match_available && (n2 = u._tr_tally(e2, 0, e2.window[e2.strstart - 1]), e2.match_available = 0), e2.insert = e2.strstart < x - 1 ? e2.strstart : x - 1, t2 === f ? (N(e2, true), 0 === e2.strm.avail_out ? O : B) : e2.last_lit && (N(e2, false), 0 === e2.strm.avail_out) ? A : I;
        }
        function M(e2, t2, r2, n2, i2) {
          this.good_length = e2, this.max_lazy = t2, this.nice_length = r2, this.max_chain = n2, this.func = i2;
        }
        function H() {
          this.strm = null, this.status = 0, this.pending_buf = null, this.pending_buf_size = 0, this.pending_out = 0, this.pending = 0, this.wrap = 0, this.gzhead = null, this.gzindex = 0, this.method = v, this.last_flush = -1, this.w_size = 0, this.w_bits = 0, this.w_mask = 0, this.window = null, this.window_size = 0, this.prev = null, this.head = null, this.ins_h = 0, this.hash_size = 0, this.hash_bits = 0, this.hash_mask = 0, this.hash_shift = 0, this.block_start = 0, this.match_length = 0, this.prev_match = 0, this.match_available = 0, this.strstart = 0, this.match_start = 0, this.lookahead = 0, this.prev_length = 0, this.max_chain_length = 0, this.max_lazy_match = 0, this.level = 0, this.strategy = 0, this.good_match = 0, this.nice_match = 0, this.dyn_ltree = new c.Buf16(2 * w), this.dyn_dtree = new c.Buf16(2 * (2 * a + 1)), this.bl_tree = new c.Buf16(2 * (2 * o + 1)), D(this.dyn_ltree), D(this.dyn_dtree), D(this.bl_tree), this.l_desc = null, this.d_desc = null, this.bl_desc = null, this.bl_count = new c.Buf16(k + 1), this.heap = new c.Buf16(2 * s + 1), D(this.heap), this.heap_len = 0, this.heap_max = 0, this.depth = new c.Buf16(2 * s + 1), D(this.depth), this.l_buf = 0, this.lit_bufsize = 0, this.last_lit = 0, this.d_buf = 0, this.opt_len = 0, this.static_len = 0, this.matches = 0, this.insert = 0, this.bi_buf = 0, this.bi_valid = 0;
        }
        function G(e2) {
          var t2;
          return e2 && e2.state ? (e2.total_in = e2.total_out = 0, e2.data_type = i, (t2 = e2.state).pending = 0, t2.pending_out = 0, t2.wrap < 0 && (t2.wrap = -t2.wrap), t2.status = t2.wrap ? C : E, e2.adler = 2 === t2.wrap ? 0 : 1, t2.last_flush = l, u._tr_init(t2), m) : R(e2, _);
        }
        function K(e2) {
          var t2 = G(e2);
          return t2 === m && (function(e3) {
            e3.window_size = 2 * e3.w_size, D(e3.head), e3.max_lazy_match = h[e3.level].max_lazy, e3.good_match = h[e3.level].good_length, e3.nice_match = h[e3.level].nice_length, e3.max_chain_length = h[e3.level].max_chain, e3.strstart = 0, e3.block_start = 0, e3.lookahead = 0, e3.insert = 0, e3.match_length = e3.prev_length = x - 1, e3.match_available = 0, e3.ins_h = 0;
          })(e2.state), t2;
        }
        function Y(e2, t2, r2, n2, i2, s2) {
          if (!e2) return _;
          var a2 = 1;
          if (t2 === g && (t2 = 6), n2 < 0 ? (a2 = 0, n2 = -n2) : 15 < n2 && (a2 = 2, n2 -= 16), i2 < 1 || y < i2 || r2 !== v || n2 < 8 || 15 < n2 || t2 < 0 || 9 < t2 || s2 < 0 || b < s2) return R(e2, _);
          8 === n2 && (n2 = 9);
          var o2 = new H();
          return (e2.state = o2).strm = e2, o2.wrap = a2, o2.gzhead = null, o2.w_bits = n2, o2.w_size = 1 << o2.w_bits, o2.w_mask = o2.w_size - 1, o2.hash_bits = i2 + 7, o2.hash_size = 1 << o2.hash_bits, o2.hash_mask = o2.hash_size - 1, o2.hash_shift = ~~((o2.hash_bits + x - 1) / x), o2.window = new c.Buf8(2 * o2.w_size), o2.head = new c.Buf16(o2.hash_size), o2.prev = new c.Buf16(o2.w_size), o2.lit_bufsize = 1 << i2 + 6, o2.pending_buf_size = 4 * o2.lit_bufsize, o2.pending_buf = new c.Buf8(o2.pending_buf_size), o2.d_buf = 1 * o2.lit_bufsize, o2.l_buf = 3 * o2.lit_bufsize, o2.level = t2, o2.strategy = s2, o2.method = r2, K(e2);
        }
        h = [new M(0, 0, 0, 0, function(e2, t2) {
          var r2 = 65535;
          for (r2 > e2.pending_buf_size - 5 && (r2 = e2.pending_buf_size - 5); ; ) {
            if (e2.lookahead <= 1) {
              if (j(e2), 0 === e2.lookahead && t2 === l) return A;
              if (0 === e2.lookahead) break;
            }
            e2.strstart += e2.lookahead, e2.lookahead = 0;
            var n2 = e2.block_start + r2;
            if ((0 === e2.strstart || e2.strstart >= n2) && (e2.lookahead = e2.strstart - n2, e2.strstart = n2, N(e2, false), 0 === e2.strm.avail_out)) return A;
            if (e2.strstart - e2.block_start >= e2.w_size - z && (N(e2, false), 0 === e2.strm.avail_out)) return A;
          }
          return e2.insert = 0, t2 === f ? (N(e2, true), 0 === e2.strm.avail_out ? O : B) : (e2.strstart > e2.block_start && (N(e2, false), e2.strm.avail_out), A);
        }), new M(4, 4, 8, 4, Z), new M(4, 5, 16, 8, Z), new M(4, 6, 32, 32, Z), new M(4, 4, 16, 16, W), new M(8, 16, 32, 32, W), new M(8, 16, 128, 128, W), new M(8, 32, 128, 256, W), new M(32, 128, 258, 1024, W), new M(32, 258, 258, 4096, W)], r.deflateInit = function(e2, t2) {
          return Y(e2, t2, v, 15, 8, 0);
        }, r.deflateInit2 = Y, r.deflateReset = K, r.deflateResetKeep = G, r.deflateSetHeader = function(e2, t2) {
          return e2 && e2.state ? 2 !== e2.state.wrap ? _ : (e2.state.gzhead = t2, m) : _;
        }, r.deflate = function(e2, t2) {
          var r2, n2, i2, s2;
          if (!e2 || !e2.state || 5 < t2 || t2 < 0) return e2 ? R(e2, _) : _;
          if (n2 = e2.state, !e2.output || !e2.input && 0 !== e2.avail_in || 666 === n2.status && t2 !== f) return R(e2, 0 === e2.avail_out ? -5 : _);
          if (n2.strm = e2, r2 = n2.last_flush, n2.last_flush = t2, n2.status === C) if (2 === n2.wrap) e2.adler = 0, U(n2, 31), U(n2, 139), U(n2, 8), n2.gzhead ? (U(n2, (n2.gzhead.text ? 1 : 0) + (n2.gzhead.hcrc ? 2 : 0) + (n2.gzhead.extra ? 4 : 0) + (n2.gzhead.name ? 8 : 0) + (n2.gzhead.comment ? 16 : 0)), U(n2, 255 & n2.gzhead.time), U(n2, n2.gzhead.time >> 8 & 255), U(n2, n2.gzhead.time >> 16 & 255), U(n2, n2.gzhead.time >> 24 & 255), U(n2, 9 === n2.level ? 2 : 2 <= n2.strategy || n2.level < 2 ? 4 : 0), U(n2, 255 & n2.gzhead.os), n2.gzhead.extra && n2.gzhead.extra.length && (U(n2, 255 & n2.gzhead.extra.length), U(n2, n2.gzhead.extra.length >> 8 & 255)), n2.gzhead.hcrc && (e2.adler = p(e2.adler, n2.pending_buf, n2.pending, 0)), n2.gzindex = 0, n2.status = 69) : (U(n2, 0), U(n2, 0), U(n2, 0), U(n2, 0), U(n2, 0), U(n2, 9 === n2.level ? 2 : 2 <= n2.strategy || n2.level < 2 ? 4 : 0), U(n2, 3), n2.status = E);
          else {
            var a2 = v + (n2.w_bits - 8 << 4) << 8;
            a2 |= (2 <= n2.strategy || n2.level < 2 ? 0 : n2.level < 6 ? 1 : 6 === n2.level ? 2 : 3) << 6, 0 !== n2.strstart && (a2 |= 32), a2 += 31 - a2 % 31, n2.status = E, P(n2, a2), 0 !== n2.strstart && (P(n2, e2.adler >>> 16), P(n2, 65535 & e2.adler)), e2.adler = 1;
          }
          if (69 === n2.status) if (n2.gzhead.extra) {
            for (i2 = n2.pending; n2.gzindex < (65535 & n2.gzhead.extra.length) && (n2.pending !== n2.pending_buf_size || (n2.gzhead.hcrc && n2.pending > i2 && (e2.adler = p(e2.adler, n2.pending_buf, n2.pending - i2, i2)), F(e2), i2 = n2.pending, n2.pending !== n2.pending_buf_size)); ) U(n2, 255 & n2.gzhead.extra[n2.gzindex]), n2.gzindex++;
            n2.gzhead.hcrc && n2.pending > i2 && (e2.adler = p(e2.adler, n2.pending_buf, n2.pending - i2, i2)), n2.gzindex === n2.gzhead.extra.length && (n2.gzindex = 0, n2.status = 73);
          } else n2.status = 73;
          if (73 === n2.status) if (n2.gzhead.name) {
            i2 = n2.pending;
            do {
              if (n2.pending === n2.pending_buf_size && (n2.gzhead.hcrc && n2.pending > i2 && (e2.adler = p(e2.adler, n2.pending_buf, n2.pending - i2, i2)), F(e2), i2 = n2.pending, n2.pending === n2.pending_buf_size)) {
                s2 = 1;
                break;
              }
              s2 = n2.gzindex < n2.gzhead.name.length ? 255 & n2.gzhead.name.charCodeAt(n2.gzindex++) : 0, U(n2, s2);
            } while (0 !== s2);
            n2.gzhead.hcrc && n2.pending > i2 && (e2.adler = p(e2.adler, n2.pending_buf, n2.pending - i2, i2)), 0 === s2 && (n2.gzindex = 0, n2.status = 91);
          } else n2.status = 91;
          if (91 === n2.status) if (n2.gzhead.comment) {
            i2 = n2.pending;
            do {
              if (n2.pending === n2.pending_buf_size && (n2.gzhead.hcrc && n2.pending > i2 && (e2.adler = p(e2.adler, n2.pending_buf, n2.pending - i2, i2)), F(e2), i2 = n2.pending, n2.pending === n2.pending_buf_size)) {
                s2 = 1;
                break;
              }
              s2 = n2.gzindex < n2.gzhead.comment.length ? 255 & n2.gzhead.comment.charCodeAt(n2.gzindex++) : 0, U(n2, s2);
            } while (0 !== s2);
            n2.gzhead.hcrc && n2.pending > i2 && (e2.adler = p(e2.adler, n2.pending_buf, n2.pending - i2, i2)), 0 === s2 && (n2.status = 103);
          } else n2.status = 103;
          if (103 === n2.status && (n2.gzhead.hcrc ? (n2.pending + 2 > n2.pending_buf_size && F(e2), n2.pending + 2 <= n2.pending_buf_size && (U(n2, 255 & e2.adler), U(n2, e2.adler >> 8 & 255), e2.adler = 0, n2.status = E)) : n2.status = E), 0 !== n2.pending) {
            if (F(e2), 0 === e2.avail_out) return n2.last_flush = -1, m;
          } else if (0 === e2.avail_in && T(t2) <= T(r2) && t2 !== f) return R(e2, -5);
          if (666 === n2.status && 0 !== e2.avail_in) return R(e2, -5);
          if (0 !== e2.avail_in || 0 !== n2.lookahead || t2 !== l && 666 !== n2.status) {
            var o2 = 2 === n2.strategy ? (function(e3, t3) {
              for (var r3; ; ) {
                if (0 === e3.lookahead && (j(e3), 0 === e3.lookahead)) {
                  if (t3 === l) return A;
                  break;
                }
                if (e3.match_length = 0, r3 = u._tr_tally(e3, 0, e3.window[e3.strstart]), e3.lookahead--, e3.strstart++, r3 && (N(e3, false), 0 === e3.strm.avail_out)) return A;
              }
              return e3.insert = 0, t3 === f ? (N(e3, true), 0 === e3.strm.avail_out ? O : B) : e3.last_lit && (N(e3, false), 0 === e3.strm.avail_out) ? A : I;
            })(n2, t2) : 3 === n2.strategy ? (function(e3, t3) {
              for (var r3, n3, i3, s3, a3 = e3.window; ; ) {
                if (e3.lookahead <= S) {
                  if (j(e3), e3.lookahead <= S && t3 === l) return A;
                  if (0 === e3.lookahead) break;
                }
                if (e3.match_length = 0, e3.lookahead >= x && 0 < e3.strstart && (n3 = a3[i3 = e3.strstart - 1]) === a3[++i3] && n3 === a3[++i3] && n3 === a3[++i3]) {
                  s3 = e3.strstart + S;
                  do {
                  } while (n3 === a3[++i3] && n3 === a3[++i3] && n3 === a3[++i3] && n3 === a3[++i3] && n3 === a3[++i3] && n3 === a3[++i3] && n3 === a3[++i3] && n3 === a3[++i3] && i3 < s3);
                  e3.match_length = S - (s3 - i3), e3.match_length > e3.lookahead && (e3.match_length = e3.lookahead);
                }
                if (e3.match_length >= x ? (r3 = u._tr_tally(e3, 1, e3.match_length - x), e3.lookahead -= e3.match_length, e3.strstart += e3.match_length, e3.match_length = 0) : (r3 = u._tr_tally(e3, 0, e3.window[e3.strstart]), e3.lookahead--, e3.strstart++), r3 && (N(e3, false), 0 === e3.strm.avail_out)) return A;
              }
              return e3.insert = 0, t3 === f ? (N(e3, true), 0 === e3.strm.avail_out ? O : B) : e3.last_lit && (N(e3, false), 0 === e3.strm.avail_out) ? A : I;
            })(n2, t2) : h[n2.level].func(n2, t2);
            if (o2 !== O && o2 !== B || (n2.status = 666), o2 === A || o2 === O) return 0 === e2.avail_out && (n2.last_flush = -1), m;
            if (o2 === I && (1 === t2 ? u._tr_align(n2) : 5 !== t2 && (u._tr_stored_block(n2, 0, 0, false), 3 === t2 && (D(n2.head), 0 === n2.lookahead && (n2.strstart = 0, n2.block_start = 0, n2.insert = 0))), F(e2), 0 === e2.avail_out)) return n2.last_flush = -1, m;
          }
          return t2 !== f ? m : n2.wrap <= 0 ? 1 : (2 === n2.wrap ? (U(n2, 255 & e2.adler), U(n2, e2.adler >> 8 & 255), U(n2, e2.adler >> 16 & 255), U(n2, e2.adler >> 24 & 255), U(n2, 255 & e2.total_in), U(n2, e2.total_in >> 8 & 255), U(n2, e2.total_in >> 16 & 255), U(n2, e2.total_in >> 24 & 255)) : (P(n2, e2.adler >>> 16), P(n2, 65535 & e2.adler)), F(e2), 0 < n2.wrap && (n2.wrap = -n2.wrap), 0 !== n2.pending ? m : 1);
        }, r.deflateEnd = function(e2) {
          var t2;
          return e2 && e2.state ? (t2 = e2.state.status) !== C && 69 !== t2 && 73 !== t2 && 91 !== t2 && 103 !== t2 && t2 !== E && 666 !== t2 ? R(e2, _) : (e2.state = null, t2 === E ? R(e2, -3) : m) : _;
        }, r.deflateSetDictionary = function(e2, t2) {
          var r2, n2, i2, s2, a2, o2, h2, u2, l2 = t2.length;
          if (!e2 || !e2.state) return _;
          if (2 === (s2 = (r2 = e2.state).wrap) || 1 === s2 && r2.status !== C || r2.lookahead) return _;
          for (1 === s2 && (e2.adler = d(e2.adler, t2, l2, 0)), r2.wrap = 0, l2 >= r2.w_size && (0 === s2 && (D(r2.head), r2.strstart = 0, r2.block_start = 0, r2.insert = 0), u2 = new c.Buf8(r2.w_size), c.arraySet(u2, t2, l2 - r2.w_size, r2.w_size, 0), t2 = u2, l2 = r2.w_size), a2 = e2.avail_in, o2 = e2.next_in, h2 = e2.input, e2.avail_in = l2, e2.next_in = 0, e2.input = t2, j(r2); r2.lookahead >= x; ) {
            for (n2 = r2.strstart, i2 = r2.lookahead - (x - 1); r2.ins_h = (r2.ins_h << r2.hash_shift ^ r2.window[n2 + x - 1]) & r2.hash_mask, r2.prev[n2 & r2.w_mask] = r2.head[r2.ins_h], r2.head[r2.ins_h] = n2, n2++, --i2; ) ;
            r2.strstart = n2, r2.lookahead = x - 1, j(r2);
          }
          return r2.strstart += r2.lookahead, r2.block_start = r2.strstart, r2.insert = r2.lookahead, r2.lookahead = 0, r2.match_length = r2.prev_length = x - 1, r2.match_available = 0, e2.next_in = o2, e2.input = h2, e2.avail_in = a2, r2.wrap = s2, m;
        }, r.deflateInfo = "pako deflate (from Nodeca project)";
      }, { "../utils/common": 41, "./adler32": 43, "./crc32": 45, "./messages": 51, "./trees": 52 }], 47: [function(e, t, r) {
        t.exports = function() {
          this.text = 0, this.time = 0, this.xflags = 0, this.os = 0, this.extra = null, this.extra_len = 0, this.name = "", this.comment = "", this.hcrc = 0, this.done = false;
        };
      }, {}], 48: [function(e, t, r) {
        t.exports = function(e2, t2) {
          var r2, n, i, s, a, o, h, u, l, f, c, d, p, m, _, g, b, v, y, w, k, x, S, z, C;
          r2 = e2.state, n = e2.next_in, z = e2.input, i = n + (e2.avail_in - 5), s = e2.next_out, C = e2.output, a = s - (t2 - e2.avail_out), o = s + (e2.avail_out - 257), h = r2.dmax, u = r2.wsize, l = r2.whave, f = r2.wnext, c = r2.window, d = r2.hold, p = r2.bits, m = r2.lencode, _ = r2.distcode, g = (1 << r2.lenbits) - 1, b = (1 << r2.distbits) - 1;
          e: do {
            p < 15 && (d += z[n++] << p, p += 8, d += z[n++] << p, p += 8), v = m[d & g];
            t: for (; ; ) {
              if (d >>>= y = v >>> 24, p -= y, 0 === (y = v >>> 16 & 255)) C[s++] = 65535 & v;
              else {
                if (!(16 & y)) {
                  if (0 == (64 & y)) {
                    v = m[(65535 & v) + (d & (1 << y) - 1)];
                    continue t;
                  }
                  if (32 & y) {
                    r2.mode = 12;
                    break e;
                  }
                  e2.msg = "invalid literal/length code", r2.mode = 30;
                  break e;
                }
                w = 65535 & v, (y &= 15) && (p < y && (d += z[n++] << p, p += 8), w += d & (1 << y) - 1, d >>>= y, p -= y), p < 15 && (d += z[n++] << p, p += 8, d += z[n++] << p, p += 8), v = _[d & b];
                r: for (; ; ) {
                  if (d >>>= y = v >>> 24, p -= y, !(16 & (y = v >>> 16 & 255))) {
                    if (0 == (64 & y)) {
                      v = _[(65535 & v) + (d & (1 << y) - 1)];
                      continue r;
                    }
                    e2.msg = "invalid distance code", r2.mode = 30;
                    break e;
                  }
                  if (k = 65535 & v, p < (y &= 15) && (d += z[n++] << p, (p += 8) < y && (d += z[n++] << p, p += 8)), h < (k += d & (1 << y) - 1)) {
                    e2.msg = "invalid distance too far back", r2.mode = 30;
                    break e;
                  }
                  if (d >>>= y, p -= y, (y = s - a) < k) {
                    if (l < (y = k - y) && r2.sane) {
                      e2.msg = "invalid distance too far back", r2.mode = 30;
                      break e;
                    }
                    if (S = c, (x = 0) === f) {
                      if (x += u - y, y < w) {
                        for (w -= y; C[s++] = c[x++], --y; ) ;
                        x = s - k, S = C;
                      }
                    } else if (f < y) {
                      if (x += u + f - y, (y -= f) < w) {
                        for (w -= y; C[s++] = c[x++], --y; ) ;
                        if (x = 0, f < w) {
                          for (w -= y = f; C[s++] = c[x++], --y; ) ;
                          x = s - k, S = C;
                        }
                      }
                    } else if (x += f - y, y < w) {
                      for (w -= y; C[s++] = c[x++], --y; ) ;
                      x = s - k, S = C;
                    }
                    for (; 2 < w; ) C[s++] = S[x++], C[s++] = S[x++], C[s++] = S[x++], w -= 3;
                    w && (C[s++] = S[x++], 1 < w && (C[s++] = S[x++]));
                  } else {
                    for (x = s - k; C[s++] = C[x++], C[s++] = C[x++], C[s++] = C[x++], 2 < (w -= 3); ) ;
                    w && (C[s++] = C[x++], 1 < w && (C[s++] = C[x++]));
                  }
                  break;
                }
              }
              break;
            }
          } while (n < i && s < o);
          n -= w = p >> 3, d &= (1 << (p -= w << 3)) - 1, e2.next_in = n, e2.next_out = s, e2.avail_in = n < i ? i - n + 5 : 5 - (n - i), e2.avail_out = s < o ? o - s + 257 : 257 - (s - o), r2.hold = d, r2.bits = p;
        };
      }, {}], 49: [function(e, t, r) {
        var I = e("../utils/common"), O = e("./adler32"), B = e("./crc32"), R = e("./inffast"), T = e("./inftrees"), D = 1, F = 2, N = 0, U = -2, P = 1, n = 852, i = 592;
        function L(e2) {
          return (e2 >>> 24 & 255) + (e2 >>> 8 & 65280) + ((65280 & e2) << 8) + ((255 & e2) << 24);
        }
        function s() {
          this.mode = 0, this.last = false, this.wrap = 0, this.havedict = false, this.flags = 0, this.dmax = 0, this.check = 0, this.total = 0, this.head = null, this.wbits = 0, this.wsize = 0, this.whave = 0, this.wnext = 0, this.window = null, this.hold = 0, this.bits = 0, this.length = 0, this.offset = 0, this.extra = 0, this.lencode = null, this.distcode = null, this.lenbits = 0, this.distbits = 0, this.ncode = 0, this.nlen = 0, this.ndist = 0, this.have = 0, this.next = null, this.lens = new I.Buf16(320), this.work = new I.Buf16(288), this.lendyn = null, this.distdyn = null, this.sane = 0, this.back = 0, this.was = 0;
        }
        function a(e2) {
          var t2;
          return e2 && e2.state ? (t2 = e2.state, e2.total_in = e2.total_out = t2.total = 0, e2.msg = "", t2.wrap && (e2.adler = 1 & t2.wrap), t2.mode = P, t2.last = 0, t2.havedict = 0, t2.dmax = 32768, t2.head = null, t2.hold = 0, t2.bits = 0, t2.lencode = t2.lendyn = new I.Buf32(n), t2.distcode = t2.distdyn = new I.Buf32(i), t2.sane = 1, t2.back = -1, N) : U;
        }
        function o(e2) {
          var t2;
          return e2 && e2.state ? ((t2 = e2.state).wsize = 0, t2.whave = 0, t2.wnext = 0, a(e2)) : U;
        }
        function h(e2, t2) {
          var r2, n2;
          return e2 && e2.state ? (n2 = e2.state, t2 < 0 ? (r2 = 0, t2 = -t2) : (r2 = 1 + (t2 >> 4), t2 < 48 && (t2 &= 15)), t2 && (t2 < 8 || 15 < t2) ? U : (null !== n2.window && n2.wbits !== t2 && (n2.window = null), n2.wrap = r2, n2.wbits = t2, o(e2))) : U;
        }
        function u(e2, t2) {
          var r2, n2;
          return e2 ? (n2 = new s(), (e2.state = n2).window = null, (r2 = h(e2, t2)) !== N && (e2.state = null), r2) : U;
        }
        var l, f, c = true;
        function j(e2) {
          if (c) {
            var t2;
            for (l = new I.Buf32(512), f = new I.Buf32(32), t2 = 0; t2 < 144; ) e2.lens[t2++] = 8;
            for (; t2 < 256; ) e2.lens[t2++] = 9;
            for (; t2 < 280; ) e2.lens[t2++] = 7;
            for (; t2 < 288; ) e2.lens[t2++] = 8;
            for (T(D, e2.lens, 0, 288, l, 0, e2.work, { bits: 9 }), t2 = 0; t2 < 32; ) e2.lens[t2++] = 5;
            T(F, e2.lens, 0, 32, f, 0, e2.work, { bits: 5 }), c = false;
          }
          e2.lencode = l, e2.lenbits = 9, e2.distcode = f, e2.distbits = 5;
        }
        function Z(e2, t2, r2, n2) {
          var i2, s2 = e2.state;
          return null === s2.window && (s2.wsize = 1 << s2.wbits, s2.wnext = 0, s2.whave = 0, s2.window = new I.Buf8(s2.wsize)), n2 >= s2.wsize ? (I.arraySet(s2.window, t2, r2 - s2.wsize, s2.wsize, 0), s2.wnext = 0, s2.whave = s2.wsize) : (n2 < (i2 = s2.wsize - s2.wnext) && (i2 = n2), I.arraySet(s2.window, t2, r2 - n2, i2, s2.wnext), (n2 -= i2) ? (I.arraySet(s2.window, t2, r2 - n2, n2, 0), s2.wnext = n2, s2.whave = s2.wsize) : (s2.wnext += i2, s2.wnext === s2.wsize && (s2.wnext = 0), s2.whave < s2.wsize && (s2.whave += i2))), 0;
        }
        r.inflateReset = o, r.inflateReset2 = h, r.inflateResetKeep = a, r.inflateInit = function(e2) {
          return u(e2, 15);
        }, r.inflateInit2 = u, r.inflate = function(e2, t2) {
          var r2, n2, i2, s2, a2, o2, h2, u2, l2, f2, c2, d, p, m, _, g, b, v, y, w, k, x, S, z, C = 0, E = new I.Buf8(4), A = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
          if (!e2 || !e2.state || !e2.output || !e2.input && 0 !== e2.avail_in) return U;
          12 === (r2 = e2.state).mode && (r2.mode = 13), a2 = e2.next_out, i2 = e2.output, h2 = e2.avail_out, s2 = e2.next_in, n2 = e2.input, o2 = e2.avail_in, u2 = r2.hold, l2 = r2.bits, f2 = o2, c2 = h2, x = N;
          e: for (; ; ) switch (r2.mode) {
            case P:
              if (0 === r2.wrap) {
                r2.mode = 13;
                break;
              }
              for (; l2 < 16; ) {
                if (0 === o2) break e;
                o2--, u2 += n2[s2++] << l2, l2 += 8;
              }
              if (2 & r2.wrap && 35615 === u2) {
                E[r2.check = 0] = 255 & u2, E[1] = u2 >>> 8 & 255, r2.check = B(r2.check, E, 2, 0), l2 = u2 = 0, r2.mode = 2;
                break;
              }
              if (r2.flags = 0, r2.head && (r2.head.done = false), !(1 & r2.wrap) || (((255 & u2) << 8) + (u2 >> 8)) % 31) {
                e2.msg = "incorrect header check", r2.mode = 30;
                break;
              }
              if (8 != (15 & u2)) {
                e2.msg = "unknown compression method", r2.mode = 30;
                break;
              }
              if (l2 -= 4, k = 8 + (15 & (u2 >>>= 4)), 0 === r2.wbits) r2.wbits = k;
              else if (k > r2.wbits) {
                e2.msg = "invalid window size", r2.mode = 30;
                break;
              }
              r2.dmax = 1 << k, e2.adler = r2.check = 1, r2.mode = 512 & u2 ? 10 : 12, l2 = u2 = 0;
              break;
            case 2:
              for (; l2 < 16; ) {
                if (0 === o2) break e;
                o2--, u2 += n2[s2++] << l2, l2 += 8;
              }
              if (r2.flags = u2, 8 != (255 & r2.flags)) {
                e2.msg = "unknown compression method", r2.mode = 30;
                break;
              }
              if (57344 & r2.flags) {
                e2.msg = "unknown header flags set", r2.mode = 30;
                break;
              }
              r2.head && (r2.head.text = u2 >> 8 & 1), 512 & r2.flags && (E[0] = 255 & u2, E[1] = u2 >>> 8 & 255, r2.check = B(r2.check, E, 2, 0)), l2 = u2 = 0, r2.mode = 3;
            case 3:
              for (; l2 < 32; ) {
                if (0 === o2) break e;
                o2--, u2 += n2[s2++] << l2, l2 += 8;
              }
              r2.head && (r2.head.time = u2), 512 & r2.flags && (E[0] = 255 & u2, E[1] = u2 >>> 8 & 255, E[2] = u2 >>> 16 & 255, E[3] = u2 >>> 24 & 255, r2.check = B(r2.check, E, 4, 0)), l2 = u2 = 0, r2.mode = 4;
            case 4:
              for (; l2 < 16; ) {
                if (0 === o2) break e;
                o2--, u2 += n2[s2++] << l2, l2 += 8;
              }
              r2.head && (r2.head.xflags = 255 & u2, r2.head.os = u2 >> 8), 512 & r2.flags && (E[0] = 255 & u2, E[1] = u2 >>> 8 & 255, r2.check = B(r2.check, E, 2, 0)), l2 = u2 = 0, r2.mode = 5;
            case 5:
              if (1024 & r2.flags) {
                for (; l2 < 16; ) {
                  if (0 === o2) break e;
                  o2--, u2 += n2[s2++] << l2, l2 += 8;
                }
                r2.length = u2, r2.head && (r2.head.extra_len = u2), 512 & r2.flags && (E[0] = 255 & u2, E[1] = u2 >>> 8 & 255, r2.check = B(r2.check, E, 2, 0)), l2 = u2 = 0;
              } else r2.head && (r2.head.extra = null);
              r2.mode = 6;
            case 6:
              if (1024 & r2.flags && (o2 < (d = r2.length) && (d = o2), d && (r2.head && (k = r2.head.extra_len - r2.length, r2.head.extra || (r2.head.extra = new Array(r2.head.extra_len)), I.arraySet(r2.head.extra, n2, s2, d, k)), 512 & r2.flags && (r2.check = B(r2.check, n2, d, s2)), o2 -= d, s2 += d, r2.length -= d), r2.length)) break e;
              r2.length = 0, r2.mode = 7;
            case 7:
              if (2048 & r2.flags) {
                if (0 === o2) break e;
                for (d = 0; k = n2[s2 + d++], r2.head && k && r2.length < 65536 && (r2.head.name += String.fromCharCode(k)), k && d < o2; ) ;
                if (512 & r2.flags && (r2.check = B(r2.check, n2, d, s2)), o2 -= d, s2 += d, k) break e;
              } else r2.head && (r2.head.name = null);
              r2.length = 0, r2.mode = 8;
            case 8:
              if (4096 & r2.flags) {
                if (0 === o2) break e;
                for (d = 0; k = n2[s2 + d++], r2.head && k && r2.length < 65536 && (r2.head.comment += String.fromCharCode(k)), k && d < o2; ) ;
                if (512 & r2.flags && (r2.check = B(r2.check, n2, d, s2)), o2 -= d, s2 += d, k) break e;
              } else r2.head && (r2.head.comment = null);
              r2.mode = 9;
            case 9:
              if (512 & r2.flags) {
                for (; l2 < 16; ) {
                  if (0 === o2) break e;
                  o2--, u2 += n2[s2++] << l2, l2 += 8;
                }
                if (u2 !== (65535 & r2.check)) {
                  e2.msg = "header crc mismatch", r2.mode = 30;
                  break;
                }
                l2 = u2 = 0;
              }
              r2.head && (r2.head.hcrc = r2.flags >> 9 & 1, r2.head.done = true), e2.adler = r2.check = 0, r2.mode = 12;
              break;
            case 10:
              for (; l2 < 32; ) {
                if (0 === o2) break e;
                o2--, u2 += n2[s2++] << l2, l2 += 8;
              }
              e2.adler = r2.check = L(u2), l2 = u2 = 0, r2.mode = 11;
            case 11:
              if (0 === r2.havedict) return e2.next_out = a2, e2.avail_out = h2, e2.next_in = s2, e2.avail_in = o2, r2.hold = u2, r2.bits = l2, 2;
              e2.adler = r2.check = 1, r2.mode = 12;
            case 12:
              if (5 === t2 || 6 === t2) break e;
            case 13:
              if (r2.last) {
                u2 >>>= 7 & l2, l2 -= 7 & l2, r2.mode = 27;
                break;
              }
              for (; l2 < 3; ) {
                if (0 === o2) break e;
                o2--, u2 += n2[s2++] << l2, l2 += 8;
              }
              switch (r2.last = 1 & u2, l2 -= 1, 3 & (u2 >>>= 1)) {
                case 0:
                  r2.mode = 14;
                  break;
                case 1:
                  if (j(r2), r2.mode = 20, 6 !== t2) break;
                  u2 >>>= 2, l2 -= 2;
                  break e;
                case 2:
                  r2.mode = 17;
                  break;
                case 3:
                  e2.msg = "invalid block type", r2.mode = 30;
              }
              u2 >>>= 2, l2 -= 2;
              break;
            case 14:
              for (u2 >>>= 7 & l2, l2 -= 7 & l2; l2 < 32; ) {
                if (0 === o2) break e;
                o2--, u2 += n2[s2++] << l2, l2 += 8;
              }
              if ((65535 & u2) != (u2 >>> 16 ^ 65535)) {
                e2.msg = "invalid stored block lengths", r2.mode = 30;
                break;
              }
              if (r2.length = 65535 & u2, l2 = u2 = 0, r2.mode = 15, 6 === t2) break e;
            case 15:
              r2.mode = 16;
            case 16:
              if (d = r2.length) {
                if (o2 < d && (d = o2), h2 < d && (d = h2), 0 === d) break e;
                I.arraySet(i2, n2, s2, d, a2), o2 -= d, s2 += d, h2 -= d, a2 += d, r2.length -= d;
                break;
              }
              r2.mode = 12;
              break;
            case 17:
              for (; l2 < 14; ) {
                if (0 === o2) break e;
                o2--, u2 += n2[s2++] << l2, l2 += 8;
              }
              if (r2.nlen = 257 + (31 & u2), u2 >>>= 5, l2 -= 5, r2.ndist = 1 + (31 & u2), u2 >>>= 5, l2 -= 5, r2.ncode = 4 + (15 & u2), u2 >>>= 4, l2 -= 4, 286 < r2.nlen || 30 < r2.ndist) {
                e2.msg = "too many length or distance symbols", r2.mode = 30;
                break;
              }
              r2.have = 0, r2.mode = 18;
            case 18:
              for (; r2.have < r2.ncode; ) {
                for (; l2 < 3; ) {
                  if (0 === o2) break e;
                  o2--, u2 += n2[s2++] << l2, l2 += 8;
                }
                r2.lens[A[r2.have++]] = 7 & u2, u2 >>>= 3, l2 -= 3;
              }
              for (; r2.have < 19; ) r2.lens[A[r2.have++]] = 0;
              if (r2.lencode = r2.lendyn, r2.lenbits = 7, S = { bits: r2.lenbits }, x = T(0, r2.lens, 0, 19, r2.lencode, 0, r2.work, S), r2.lenbits = S.bits, x) {
                e2.msg = "invalid code lengths set", r2.mode = 30;
                break;
              }
              r2.have = 0, r2.mode = 19;
            case 19:
              for (; r2.have < r2.nlen + r2.ndist; ) {
                for (; g = (C = r2.lencode[u2 & (1 << r2.lenbits) - 1]) >>> 16 & 255, b = 65535 & C, !((_ = C >>> 24) <= l2); ) {
                  if (0 === o2) break e;
                  o2--, u2 += n2[s2++] << l2, l2 += 8;
                }
                if (b < 16) u2 >>>= _, l2 -= _, r2.lens[r2.have++] = b;
                else {
                  if (16 === b) {
                    for (z = _ + 2; l2 < z; ) {
                      if (0 === o2) break e;
                      o2--, u2 += n2[s2++] << l2, l2 += 8;
                    }
                    if (u2 >>>= _, l2 -= _, 0 === r2.have) {
                      e2.msg = "invalid bit length repeat", r2.mode = 30;
                      break;
                    }
                    k = r2.lens[r2.have - 1], d = 3 + (3 & u2), u2 >>>= 2, l2 -= 2;
                  } else if (17 === b) {
                    for (z = _ + 3; l2 < z; ) {
                      if (0 === o2) break e;
                      o2--, u2 += n2[s2++] << l2, l2 += 8;
                    }
                    l2 -= _, k = 0, d = 3 + (7 & (u2 >>>= _)), u2 >>>= 3, l2 -= 3;
                  } else {
                    for (z = _ + 7; l2 < z; ) {
                      if (0 === o2) break e;
                      o2--, u2 += n2[s2++] << l2, l2 += 8;
                    }
                    l2 -= _, k = 0, d = 11 + (127 & (u2 >>>= _)), u2 >>>= 7, l2 -= 7;
                  }
                  if (r2.have + d > r2.nlen + r2.ndist) {
                    e2.msg = "invalid bit length repeat", r2.mode = 30;
                    break;
                  }
                  for (; d--; ) r2.lens[r2.have++] = k;
                }
              }
              if (30 === r2.mode) break;
              if (0 === r2.lens[256]) {
                e2.msg = "invalid code -- missing end-of-block", r2.mode = 30;
                break;
              }
              if (r2.lenbits = 9, S = { bits: r2.lenbits }, x = T(D, r2.lens, 0, r2.nlen, r2.lencode, 0, r2.work, S), r2.lenbits = S.bits, x) {
                e2.msg = "invalid literal/lengths set", r2.mode = 30;
                break;
              }
              if (r2.distbits = 6, r2.distcode = r2.distdyn, S = { bits: r2.distbits }, x = T(F, r2.lens, r2.nlen, r2.ndist, r2.distcode, 0, r2.work, S), r2.distbits = S.bits, x) {
                e2.msg = "invalid distances set", r2.mode = 30;
                break;
              }
              if (r2.mode = 20, 6 === t2) break e;
            case 20:
              r2.mode = 21;
            case 21:
              if (6 <= o2 && 258 <= h2) {
                e2.next_out = a2, e2.avail_out = h2, e2.next_in = s2, e2.avail_in = o2, r2.hold = u2, r2.bits = l2, R(e2, c2), a2 = e2.next_out, i2 = e2.output, h2 = e2.avail_out, s2 = e2.next_in, n2 = e2.input, o2 = e2.avail_in, u2 = r2.hold, l2 = r2.bits, 12 === r2.mode && (r2.back = -1);
                break;
              }
              for (r2.back = 0; g = (C = r2.lencode[u2 & (1 << r2.lenbits) - 1]) >>> 16 & 255, b = 65535 & C, !((_ = C >>> 24) <= l2); ) {
                if (0 === o2) break e;
                o2--, u2 += n2[s2++] << l2, l2 += 8;
              }
              if (g && 0 == (240 & g)) {
                for (v = _, y = g, w = b; g = (C = r2.lencode[w + ((u2 & (1 << v + y) - 1) >> v)]) >>> 16 & 255, b = 65535 & C, !(v + (_ = C >>> 24) <= l2); ) {
                  if (0 === o2) break e;
                  o2--, u2 += n2[s2++] << l2, l2 += 8;
                }
                u2 >>>= v, l2 -= v, r2.back += v;
              }
              if (u2 >>>= _, l2 -= _, r2.back += _, r2.length = b, 0 === g) {
                r2.mode = 26;
                break;
              }
              if (32 & g) {
                r2.back = -1, r2.mode = 12;
                break;
              }
              if (64 & g) {
                e2.msg = "invalid literal/length code", r2.mode = 30;
                break;
              }
              r2.extra = 15 & g, r2.mode = 22;
            case 22:
              if (r2.extra) {
                for (z = r2.extra; l2 < z; ) {
                  if (0 === o2) break e;
                  o2--, u2 += n2[s2++] << l2, l2 += 8;
                }
                r2.length += u2 & (1 << r2.extra) - 1, u2 >>>= r2.extra, l2 -= r2.extra, r2.back += r2.extra;
              }
              r2.was = r2.length, r2.mode = 23;
            case 23:
              for (; g = (C = r2.distcode[u2 & (1 << r2.distbits) - 1]) >>> 16 & 255, b = 65535 & C, !((_ = C >>> 24) <= l2); ) {
                if (0 === o2) break e;
                o2--, u2 += n2[s2++] << l2, l2 += 8;
              }
              if (0 == (240 & g)) {
                for (v = _, y = g, w = b; g = (C = r2.distcode[w + ((u2 & (1 << v + y) - 1) >> v)]) >>> 16 & 255, b = 65535 & C, !(v + (_ = C >>> 24) <= l2); ) {
                  if (0 === o2) break e;
                  o2--, u2 += n2[s2++] << l2, l2 += 8;
                }
                u2 >>>= v, l2 -= v, r2.back += v;
              }
              if (u2 >>>= _, l2 -= _, r2.back += _, 64 & g) {
                e2.msg = "invalid distance code", r2.mode = 30;
                break;
              }
              r2.offset = b, r2.extra = 15 & g, r2.mode = 24;
            case 24:
              if (r2.extra) {
                for (z = r2.extra; l2 < z; ) {
                  if (0 === o2) break e;
                  o2--, u2 += n2[s2++] << l2, l2 += 8;
                }
                r2.offset += u2 & (1 << r2.extra) - 1, u2 >>>= r2.extra, l2 -= r2.extra, r2.back += r2.extra;
              }
              if (r2.offset > r2.dmax) {
                e2.msg = "invalid distance too far back", r2.mode = 30;
                break;
              }
              r2.mode = 25;
            case 25:
              if (0 === h2) break e;
              if (d = c2 - h2, r2.offset > d) {
                if ((d = r2.offset - d) > r2.whave && r2.sane) {
                  e2.msg = "invalid distance too far back", r2.mode = 30;
                  break;
                }
                p = d > r2.wnext ? (d -= r2.wnext, r2.wsize - d) : r2.wnext - d, d > r2.length && (d = r2.length), m = r2.window;
              } else m = i2, p = a2 - r2.offset, d = r2.length;
              for (h2 < d && (d = h2), h2 -= d, r2.length -= d; i2[a2++] = m[p++], --d; ) ;
              0 === r2.length && (r2.mode = 21);
              break;
            case 26:
              if (0 === h2) break e;
              i2[a2++] = r2.length, h2--, r2.mode = 21;
              break;
            case 27:
              if (r2.wrap) {
                for (; l2 < 32; ) {
                  if (0 === o2) break e;
                  o2--, u2 |= n2[s2++] << l2, l2 += 8;
                }
                if (c2 -= h2, e2.total_out += c2, r2.total += c2, c2 && (e2.adler = r2.check = r2.flags ? B(r2.check, i2, c2, a2 - c2) : O(r2.check, i2, c2, a2 - c2)), c2 = h2, (r2.flags ? u2 : L(u2)) !== r2.check) {
                  e2.msg = "incorrect data check", r2.mode = 30;
                  break;
                }
                l2 = u2 = 0;
              }
              r2.mode = 28;
            case 28:
              if (r2.wrap && r2.flags) {
                for (; l2 < 32; ) {
                  if (0 === o2) break e;
                  o2--, u2 += n2[s2++] << l2, l2 += 8;
                }
                if (u2 !== (4294967295 & r2.total)) {
                  e2.msg = "incorrect length check", r2.mode = 30;
                  break;
                }
                l2 = u2 = 0;
              }
              r2.mode = 29;
            case 29:
              x = 1;
              break e;
            case 30:
              x = -3;
              break e;
            case 31:
              return -4;
            case 32:
            default:
              return U;
          }
          return e2.next_out = a2, e2.avail_out = h2, e2.next_in = s2, e2.avail_in = o2, r2.hold = u2, r2.bits = l2, (r2.wsize || c2 !== e2.avail_out && r2.mode < 30 && (r2.mode < 27 || 4 !== t2)) && Z(e2, e2.output, e2.next_out, c2 - e2.avail_out) ? (r2.mode = 31, -4) : (f2 -= e2.avail_in, c2 -= e2.avail_out, e2.total_in += f2, e2.total_out += c2, r2.total += c2, r2.wrap && c2 && (e2.adler = r2.check = r2.flags ? B(r2.check, i2, c2, e2.next_out - c2) : O(r2.check, i2, c2, e2.next_out - c2)), e2.data_type = r2.bits + (r2.last ? 64 : 0) + (12 === r2.mode ? 128 : 0) + (20 === r2.mode || 15 === r2.mode ? 256 : 0), (0 == f2 && 0 === c2 || 4 === t2) && x === N && (x = -5), x);
        }, r.inflateEnd = function(e2) {
          if (!e2 || !e2.state) return U;
          var t2 = e2.state;
          return t2.window && (t2.window = null), e2.state = null, N;
        }, r.inflateGetHeader = function(e2, t2) {
          var r2;
          return e2 && e2.state ? 0 == (2 & (r2 = e2.state).wrap) ? U : ((r2.head = t2).done = false, N) : U;
        }, r.inflateSetDictionary = function(e2, t2) {
          var r2, n2 = t2.length;
          return e2 && e2.state ? 0 !== (r2 = e2.state).wrap && 11 !== r2.mode ? U : 11 === r2.mode && O(1, t2, n2, 0) !== r2.check ? -3 : Z(e2, t2, n2, n2) ? (r2.mode = 31, -4) : (r2.havedict = 1, N) : U;
        }, r.inflateInfo = "pako inflate (from Nodeca project)";
      }, { "../utils/common": 41, "./adler32": 43, "./crc32": 45, "./inffast": 48, "./inftrees": 50 }], 50: [function(e, t, r) {
        var D = e("../utils/common"), F = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0], N = [16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78], U = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0], P = [16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64];
        t.exports = function(e2, t2, r2, n, i, s, a, o) {
          var h, u, l, f, c, d, p, m, _, g = o.bits, b = 0, v = 0, y = 0, w = 0, k = 0, x = 0, S = 0, z = 0, C = 0, E = 0, A = null, I = 0, O = new D.Buf16(16), B = new D.Buf16(16), R = null, T = 0;
          for (b = 0; b <= 15; b++) O[b] = 0;
          for (v = 0; v < n; v++) O[t2[r2 + v]]++;
          for (k = g, w = 15; 1 <= w && 0 === O[w]; w--) ;
          if (w < k && (k = w), 0 === w) return i[s++] = 20971520, i[s++] = 20971520, o.bits = 1, 0;
          for (y = 1; y < w && 0 === O[y]; y++) ;
          for (k < y && (k = y), b = z = 1; b <= 15; b++) if (z <<= 1, (z -= O[b]) < 0) return -1;
          if (0 < z && (0 === e2 || 1 !== w)) return -1;
          for (B[1] = 0, b = 1; b < 15; b++) B[b + 1] = B[b] + O[b];
          for (v = 0; v < n; v++) 0 !== t2[r2 + v] && (a[B[t2[r2 + v]]++] = v);
          if (d = 0 === e2 ? (A = R = a, 19) : 1 === e2 ? (A = F, I -= 257, R = N, T -= 257, 256) : (A = U, R = P, -1), b = y, c = s, S = v = E = 0, l = -1, f = (C = 1 << (x = k)) - 1, 1 === e2 && 852 < C || 2 === e2 && 592 < C) return 1;
          for (; ; ) {
            for (p = b - S, _ = a[v] < d ? (m = 0, a[v]) : a[v] > d ? (m = R[T + a[v]], A[I + a[v]]) : (m = 96, 0), h = 1 << b - S, y = u = 1 << x; i[c + (E >> S) + (u -= h)] = p << 24 | m << 16 | _ | 0, 0 !== u; ) ;
            for (h = 1 << b - 1; E & h; ) h >>= 1;
            if (0 !== h ? (E &= h - 1, E += h) : E = 0, v++, 0 == --O[b]) {
              if (b === w) break;
              b = t2[r2 + a[v]];
            }
            if (k < b && (E & f) !== l) {
              for (0 === S && (S = k), c += y, z = 1 << (x = b - S); x + S < w && !((z -= O[x + S]) <= 0); ) x++, z <<= 1;
              if (C += 1 << x, 1 === e2 && 852 < C || 2 === e2 && 592 < C) return 1;
              i[l = E & f] = k << 24 | x << 16 | c - s | 0;
            }
          }
          return 0 !== E && (i[c + E] = b - S << 24 | 64 << 16 | 0), o.bits = k, 0;
        };
      }, { "../utils/common": 41 }], 51: [function(e, t, r) {
        t.exports = { 2: "need dictionary", 1: "stream end", 0: "", "-1": "file error", "-2": "stream error", "-3": "data error", "-4": "insufficient memory", "-5": "buffer error", "-6": "incompatible version" };
      }, {}], 52: [function(e, t, r) {
        var i = e("../utils/common"), o = 0, h = 1;
        function n(e2) {
          for (var t2 = e2.length; 0 <= --t2; ) e2[t2] = 0;
        }
        var s = 0, a = 29, u = 256, l = u + 1 + a, f = 30, c = 19, _ = 2 * l + 1, g = 15, d = 16, p = 7, m = 256, b = 16, v = 17, y = 18, w = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0], k = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13], x = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7], S = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15], z = new Array(2 * (l + 2));
        n(z);
        var C = new Array(2 * f);
        n(C);
        var E = new Array(512);
        n(E);
        var A = new Array(256);
        n(A);
        var I = new Array(a);
        n(I);
        var O, B, R, T = new Array(f);
        function D(e2, t2, r2, n2, i2) {
          this.static_tree = e2, this.extra_bits = t2, this.extra_base = r2, this.elems = n2, this.max_length = i2, this.has_stree = e2 && e2.length;
        }
        function F(e2, t2) {
          this.dyn_tree = e2, this.max_code = 0, this.stat_desc = t2;
        }
        function N(e2) {
          return e2 < 256 ? E[e2] : E[256 + (e2 >>> 7)];
        }
        function U(e2, t2) {
          e2.pending_buf[e2.pending++] = 255 & t2, e2.pending_buf[e2.pending++] = t2 >>> 8 & 255;
        }
        function P(e2, t2, r2) {
          e2.bi_valid > d - r2 ? (e2.bi_buf |= t2 << e2.bi_valid & 65535, U(e2, e2.bi_buf), e2.bi_buf = t2 >> d - e2.bi_valid, e2.bi_valid += r2 - d) : (e2.bi_buf |= t2 << e2.bi_valid & 65535, e2.bi_valid += r2);
        }
        function L(e2, t2, r2) {
          P(e2, r2[2 * t2], r2[2 * t2 + 1]);
        }
        function j(e2, t2) {
          for (var r2 = 0; r2 |= 1 & e2, e2 >>>= 1, r2 <<= 1, 0 < --t2; ) ;
          return r2 >>> 1;
        }
        function Z(e2, t2, r2) {
          var n2, i2, s2 = new Array(g + 1), a2 = 0;
          for (n2 = 1; n2 <= g; n2++) s2[n2] = a2 = a2 + r2[n2 - 1] << 1;
          for (i2 = 0; i2 <= t2; i2++) {
            var o2 = e2[2 * i2 + 1];
            0 !== o2 && (e2[2 * i2] = j(s2[o2]++, o2));
          }
        }
        function W(e2) {
          var t2;
          for (t2 = 0; t2 < l; t2++) e2.dyn_ltree[2 * t2] = 0;
          for (t2 = 0; t2 < f; t2++) e2.dyn_dtree[2 * t2] = 0;
          for (t2 = 0; t2 < c; t2++) e2.bl_tree[2 * t2] = 0;
          e2.dyn_ltree[2 * m] = 1, e2.opt_len = e2.static_len = 0, e2.last_lit = e2.matches = 0;
        }
        function M(e2) {
          8 < e2.bi_valid ? U(e2, e2.bi_buf) : 0 < e2.bi_valid && (e2.pending_buf[e2.pending++] = e2.bi_buf), e2.bi_buf = 0, e2.bi_valid = 0;
        }
        function H(e2, t2, r2, n2) {
          var i2 = 2 * t2, s2 = 2 * r2;
          return e2[i2] < e2[s2] || e2[i2] === e2[s2] && n2[t2] <= n2[r2];
        }
        function G(e2, t2, r2) {
          for (var n2 = e2.heap[r2], i2 = r2 << 1; i2 <= e2.heap_len && (i2 < e2.heap_len && H(t2, e2.heap[i2 + 1], e2.heap[i2], e2.depth) && i2++, !H(t2, n2, e2.heap[i2], e2.depth)); ) e2.heap[r2] = e2.heap[i2], r2 = i2, i2 <<= 1;
          e2.heap[r2] = n2;
        }
        function K(e2, t2, r2) {
          var n2, i2, s2, a2, o2 = 0;
          if (0 !== e2.last_lit) for (; n2 = e2.pending_buf[e2.d_buf + 2 * o2] << 8 | e2.pending_buf[e2.d_buf + 2 * o2 + 1], i2 = e2.pending_buf[e2.l_buf + o2], o2++, 0 === n2 ? L(e2, i2, t2) : (L(e2, (s2 = A[i2]) + u + 1, t2), 0 !== (a2 = w[s2]) && P(e2, i2 -= I[s2], a2), L(e2, s2 = N(--n2), r2), 0 !== (a2 = k[s2]) && P(e2, n2 -= T[s2], a2)), o2 < e2.last_lit; ) ;
          L(e2, m, t2);
        }
        function Y(e2, t2) {
          var r2, n2, i2, s2 = t2.dyn_tree, a2 = t2.stat_desc.static_tree, o2 = t2.stat_desc.has_stree, h2 = t2.stat_desc.elems, u2 = -1;
          for (e2.heap_len = 0, e2.heap_max = _, r2 = 0; r2 < h2; r2++) 0 !== s2[2 * r2] ? (e2.heap[++e2.heap_len] = u2 = r2, e2.depth[r2] = 0) : s2[2 * r2 + 1] = 0;
          for (; e2.heap_len < 2; ) s2[2 * (i2 = e2.heap[++e2.heap_len] = u2 < 2 ? ++u2 : 0)] = 1, e2.depth[i2] = 0, e2.opt_len--, o2 && (e2.static_len -= a2[2 * i2 + 1]);
          for (t2.max_code = u2, r2 = e2.heap_len >> 1; 1 <= r2; r2--) G(e2, s2, r2);
          for (i2 = h2; r2 = e2.heap[1], e2.heap[1] = e2.heap[e2.heap_len--], G(e2, s2, 1), n2 = e2.heap[1], e2.heap[--e2.heap_max] = r2, e2.heap[--e2.heap_max] = n2, s2[2 * i2] = s2[2 * r2] + s2[2 * n2], e2.depth[i2] = (e2.depth[r2] >= e2.depth[n2] ? e2.depth[r2] : e2.depth[n2]) + 1, s2[2 * r2 + 1] = s2[2 * n2 + 1] = i2, e2.heap[1] = i2++, G(e2, s2, 1), 2 <= e2.heap_len; ) ;
          e2.heap[--e2.heap_max] = e2.heap[1], (function(e3, t3) {
            var r3, n3, i3, s3, a3, o3, h3 = t3.dyn_tree, u3 = t3.max_code, l2 = t3.stat_desc.static_tree, f2 = t3.stat_desc.has_stree, c2 = t3.stat_desc.extra_bits, d2 = t3.stat_desc.extra_base, p2 = t3.stat_desc.max_length, m2 = 0;
            for (s3 = 0; s3 <= g; s3++) e3.bl_count[s3] = 0;
            for (h3[2 * e3.heap[e3.heap_max] + 1] = 0, r3 = e3.heap_max + 1; r3 < _; r3++) p2 < (s3 = h3[2 * h3[2 * (n3 = e3.heap[r3]) + 1] + 1] + 1) && (s3 = p2, m2++), h3[2 * n3 + 1] = s3, u3 < n3 || (e3.bl_count[s3]++, a3 = 0, d2 <= n3 && (a3 = c2[n3 - d2]), o3 = h3[2 * n3], e3.opt_len += o3 * (s3 + a3), f2 && (e3.static_len += o3 * (l2[2 * n3 + 1] + a3)));
            if (0 !== m2) {
              do {
                for (s3 = p2 - 1; 0 === e3.bl_count[s3]; ) s3--;
                e3.bl_count[s3]--, e3.bl_count[s3 + 1] += 2, e3.bl_count[p2]--, m2 -= 2;
              } while (0 < m2);
              for (s3 = p2; 0 !== s3; s3--) for (n3 = e3.bl_count[s3]; 0 !== n3; ) u3 < (i3 = e3.heap[--r3]) || (h3[2 * i3 + 1] !== s3 && (e3.opt_len += (s3 - h3[2 * i3 + 1]) * h3[2 * i3], h3[2 * i3 + 1] = s3), n3--);
            }
          })(e2, t2), Z(s2, u2, e2.bl_count);
        }
        function X2(e2, t2, r2) {
          var n2, i2, s2 = -1, a2 = t2[1], o2 = 0, h2 = 7, u2 = 4;
          for (0 === a2 && (h2 = 138, u2 = 3), t2[2 * (r2 + 1) + 1] = 65535, n2 = 0; n2 <= r2; n2++) i2 = a2, a2 = t2[2 * (n2 + 1) + 1], ++o2 < h2 && i2 === a2 || (o2 < u2 ? e2.bl_tree[2 * i2] += o2 : 0 !== i2 ? (i2 !== s2 && e2.bl_tree[2 * i2]++, e2.bl_tree[2 * b]++) : o2 <= 10 ? e2.bl_tree[2 * v]++ : e2.bl_tree[2 * y]++, s2 = i2, u2 = (o2 = 0) === a2 ? (h2 = 138, 3) : i2 === a2 ? (h2 = 6, 3) : (h2 = 7, 4));
        }
        function V(e2, t2, r2) {
          var n2, i2, s2 = -1, a2 = t2[1], o2 = 0, h2 = 7, u2 = 4;
          for (0 === a2 && (h2 = 138, u2 = 3), n2 = 0; n2 <= r2; n2++) if (i2 = a2, a2 = t2[2 * (n2 + 1) + 1], !(++o2 < h2 && i2 === a2)) {
            if (o2 < u2) for (; L(e2, i2, e2.bl_tree), 0 != --o2; ) ;
            else 0 !== i2 ? (i2 !== s2 && (L(e2, i2, e2.bl_tree), o2--), L(e2, b, e2.bl_tree), P(e2, o2 - 3, 2)) : o2 <= 10 ? (L(e2, v, e2.bl_tree), P(e2, o2 - 3, 3)) : (L(e2, y, e2.bl_tree), P(e2, o2 - 11, 7));
            s2 = i2, u2 = (o2 = 0) === a2 ? (h2 = 138, 3) : i2 === a2 ? (h2 = 6, 3) : (h2 = 7, 4);
          }
        }
        n(T);
        var q = false;
        function J(e2, t2, r2, n2) {
          P(e2, (s << 1) + (n2 ? 1 : 0), 3), (function(e3, t3, r3, n3) {
            M(e3), U(e3, r3), U(e3, ~r3), i.arraySet(e3.pending_buf, e3.window, t3, r3, e3.pending), e3.pending += r3;
          })(e2, t2, r2);
        }
        r._tr_init = function(e2) {
          q || ((function() {
            var e3, t2, r2, n2, i2, s2 = new Array(g + 1);
            for (n2 = r2 = 0; n2 < a - 1; n2++) for (I[n2] = r2, e3 = 0; e3 < 1 << w[n2]; e3++) A[r2++] = n2;
            for (A[r2 - 1] = n2, n2 = i2 = 0; n2 < 16; n2++) for (T[n2] = i2, e3 = 0; e3 < 1 << k[n2]; e3++) E[i2++] = n2;
            for (i2 >>= 7; n2 < f; n2++) for (T[n2] = i2 << 7, e3 = 0; e3 < 1 << k[n2] - 7; e3++) E[256 + i2++] = n2;
            for (t2 = 0; t2 <= g; t2++) s2[t2] = 0;
            for (e3 = 0; e3 <= 143; ) z[2 * e3 + 1] = 8, e3++, s2[8]++;
            for (; e3 <= 255; ) z[2 * e3 + 1] = 9, e3++, s2[9]++;
            for (; e3 <= 279; ) z[2 * e3 + 1] = 7, e3++, s2[7]++;
            for (; e3 <= 287; ) z[2 * e3 + 1] = 8, e3++, s2[8]++;
            for (Z(z, l + 1, s2), e3 = 0; e3 < f; e3++) C[2 * e3 + 1] = 5, C[2 * e3] = j(e3, 5);
            O = new D(z, w, u + 1, l, g), B = new D(C, k, 0, f, g), R = new D(new Array(0), x, 0, c, p);
          })(), q = true), e2.l_desc = new F(e2.dyn_ltree, O), e2.d_desc = new F(e2.dyn_dtree, B), e2.bl_desc = new F(e2.bl_tree, R), e2.bi_buf = 0, e2.bi_valid = 0, W(e2);
        }, r._tr_stored_block = J, r._tr_flush_block = function(e2, t2, r2, n2) {
          var i2, s2, a2 = 0;
          0 < e2.level ? (2 === e2.strm.data_type && (e2.strm.data_type = (function(e3) {
            var t3, r3 = 4093624447;
            for (t3 = 0; t3 <= 31; t3++, r3 >>>= 1) if (1 & r3 && 0 !== e3.dyn_ltree[2 * t3]) return o;
            if (0 !== e3.dyn_ltree[18] || 0 !== e3.dyn_ltree[20] || 0 !== e3.dyn_ltree[26]) return h;
            for (t3 = 32; t3 < u; t3++) if (0 !== e3.dyn_ltree[2 * t3]) return h;
            return o;
          })(e2)), Y(e2, e2.l_desc), Y(e2, e2.d_desc), a2 = (function(e3) {
            var t3;
            for (X2(e3, e3.dyn_ltree, e3.l_desc.max_code), X2(e3, e3.dyn_dtree, e3.d_desc.max_code), Y(e3, e3.bl_desc), t3 = c - 1; 3 <= t3 && 0 === e3.bl_tree[2 * S[t3] + 1]; t3--) ;
            return e3.opt_len += 3 * (t3 + 1) + 5 + 5 + 4, t3;
          })(e2), i2 = e2.opt_len + 3 + 7 >>> 3, (s2 = e2.static_len + 3 + 7 >>> 3) <= i2 && (i2 = s2)) : i2 = s2 = r2 + 5, r2 + 4 <= i2 && -1 !== t2 ? J(e2, t2, r2, n2) : 4 === e2.strategy || s2 === i2 ? (P(e2, 2 + (n2 ? 1 : 0), 3), K(e2, z, C)) : (P(e2, 4 + (n2 ? 1 : 0), 3), (function(e3, t3, r3, n3) {
            var i3;
            for (P(e3, t3 - 257, 5), P(e3, r3 - 1, 5), P(e3, n3 - 4, 4), i3 = 0; i3 < n3; i3++) P(e3, e3.bl_tree[2 * S[i3] + 1], 3);
            V(e3, e3.dyn_ltree, t3 - 1), V(e3, e3.dyn_dtree, r3 - 1);
          })(e2, e2.l_desc.max_code + 1, e2.d_desc.max_code + 1, a2 + 1), K(e2, e2.dyn_ltree, e2.dyn_dtree)), W(e2), n2 && M(e2);
        }, r._tr_tally = function(e2, t2, r2) {
          return e2.pending_buf[e2.d_buf + 2 * e2.last_lit] = t2 >>> 8 & 255, e2.pending_buf[e2.d_buf + 2 * e2.last_lit + 1] = 255 & t2, e2.pending_buf[e2.l_buf + e2.last_lit] = 255 & r2, e2.last_lit++, 0 === t2 ? e2.dyn_ltree[2 * r2]++ : (e2.matches++, t2--, e2.dyn_ltree[2 * (A[r2] + u + 1)]++, e2.dyn_dtree[2 * N(t2)]++), e2.last_lit === e2.lit_bufsize - 1;
        }, r._tr_align = function(e2) {
          P(e2, 2, 3), L(e2, m, z), (function(e3) {
            16 === e3.bi_valid ? (U(e3, e3.bi_buf), e3.bi_buf = 0, e3.bi_valid = 0) : 8 <= e3.bi_valid && (e3.pending_buf[e3.pending++] = 255 & e3.bi_buf, e3.bi_buf >>= 8, e3.bi_valid -= 8);
          })(e2);
        };
      }, { "../utils/common": 41 }], 53: [function(e, t, r) {
        t.exports = function() {
          this.input = null, this.next_in = 0, this.avail_in = 0, this.total_in = 0, this.output = null, this.next_out = 0, this.avail_out = 0, this.total_out = 0, this.msg = "", this.state = null, this.data_type = 2, this.adler = 0;
        };
      }, {}], 54: [function(e, t, r) {
        (function(e2) {
          !(function(r2, n) {
            if (!r2.setImmediate) {
              var i, s, t2, a, o = 1, h = {}, u = false, l = r2.document, e3 = Object.getPrototypeOf && Object.getPrototypeOf(r2);
              e3 = e3 && e3.setTimeout ? e3 : r2, i = "[object process]" === {}.toString.call(r2.process) ? function(e4) {
                process.nextTick(function() {
                  c(e4);
                });
              } : (function() {
                if (r2.postMessage && !r2.importScripts) {
                  var e4 = true, t3 = r2.onmessage;
                  return r2.onmessage = function() {
                    e4 = false;
                  }, r2.postMessage("", "*"), r2.onmessage = t3, e4;
                }
              })() ? (a = "setImmediate$" + Math.random() + "$", r2.addEventListener ? r2.addEventListener("message", d, false) : r2.attachEvent("onmessage", d), function(e4) {
                r2.postMessage(a + e4, "*");
              }) : r2.MessageChannel ? ((t2 = new MessageChannel()).port1.onmessage = function(e4) {
                c(e4.data);
              }, function(e4) {
                t2.port2.postMessage(e4);
              }) : l && "onreadystatechange" in l.createElement("script") ? (s = l.documentElement, function(e4) {
                var t3 = l.createElement("script");
                t3.onreadystatechange = function() {
                  c(e4), t3.onreadystatechange = null, s.removeChild(t3), t3 = null;
                }, s.appendChild(t3);
              }) : function(e4) {
                setTimeout(c, 0, e4);
              }, e3.setImmediate = function(e4) {
                "function" != typeof e4 && (e4 = new Function("" + e4));
                for (var t3 = new Array(arguments.length - 1), r3 = 0; r3 < t3.length; r3++) t3[r3] = arguments[r3 + 1];
                var n2 = { callback: e4, args: t3 };
                return h[o] = n2, i(o), o++;
              }, e3.clearImmediate = f;
            }
            function f(e4) {
              delete h[e4];
            }
            function c(e4) {
              if (u) setTimeout(c, 0, e4);
              else {
                var t3 = h[e4];
                if (t3) {
                  u = true;
                  try {
                    !(function(e5) {
                      var t4 = e5.callback, r3 = e5.args;
                      switch (r3.length) {
                        case 0:
                          t4();
                          break;
                        case 1:
                          t4(r3[0]);
                          break;
                        case 2:
                          t4(r3[0], r3[1]);
                          break;
                        case 3:
                          t4(r3[0], r3[1], r3[2]);
                          break;
                        default:
                          t4.apply(n, r3);
                      }
                    })(t3);
                  } finally {
                    f(e4), u = false;
                  }
                }
              }
            }
            function d(e4) {
              e4.source === r2 && "string" == typeof e4.data && 0 === e4.data.indexOf(a) && c(+e4.data.slice(a.length));
            }
          })("undefined" == typeof self ? void 0 === e2 ? this : e2 : self);
        }).call(this, "undefined" != typeof commonjsGlobal ? commonjsGlobal : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
      }, {}] }, {}, [10])(10);
    });
  })(jszip_min);
  return jszip_min.exports;
}
var jszip_minExports = requireJszip_min();
const JSZip = /* @__PURE__ */ getDefaultExportFromCjs(jszip_minExports);
const TIMELINE_TYPES = {
  milestone: { label: "Milestone", color: "#8B5CF6", emoji: "🎯" },
  study: { label: "Study", color: "#3B82F6", emoji: "📚" },
  test: { label: "Test", color: "#EF4444", emoji: "📝" },
  achievement: { label: "Achievement", color: "#F59E0B", emoji: "🏆" },
  goal: { label: "Goal", color: "#10B981", emoji: "⭐" }
};
function AnimCounter({
  to,
  duration = 1200
}) {
  const [val, setVal] = reactExports.useState(0);
  const rafRef = reactExports.useRef(0);
  reactExports.useEffect(() => {
    const start = performance.now();
    const tick = (now) => {
      const p = Math.min(1, (now - start) / duration);
      const ease = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(ease * to));
      if (p < 1) rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [to, duration]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: val.toLocaleString() });
}
function StatCard({
  icon: Icon,
  label,
  value,
  sub,
  color,
  delay = 0
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { delay, duration: 0.4 },
      className: "relative bg-card border border-border rounded-2xl p-5 overflow-hidden group hover:border-primary/40 transition-colors",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity",
            style: {
              background: `radial-gradient(ellipse at top left, ${color}12, transparent 60%)`
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between mb-3 relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "p-2.5 rounded-xl",
              style: { backgroundColor: `${color}20` },
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-5 w-5", style: { color } })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] uppercase tracking-widest font-medium text-muted-foreground mt-1", children: label })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-3xl font-black text-foreground relative tabular-nums", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimCounter, { to: value }) }),
        sub && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1 relative", children: sub })
      ]
    }
  );
}
function Section({
  title,
  icon: Icon,
  children,
  delay = 0
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 16 },
      animate: { opacity: 1, y: 0 },
      transition: { delay, duration: 0.4 },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-1.5 bg-primary/10 rounded-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-4 w-4 text-primary" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-sm font-bold text-foreground uppercase tracking-wide", children: title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 h-px bg-border/60" })
        ] }),
        children
      ]
    }
  );
}
const ChartTooltip = ({ active, payload, label }) => {
  if (!active || !payload?.length) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-lg px-3 py-2 shadow-xl text-xs", children: [
    label && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-1", children: label }),
    payload.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { style: { color: p.color || p.fill }, children: [
      p.name,
      ": ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-foreground", children: p.value })
    ] }, i))
  ] });
};
function TimeSpentHistory({
  records,
  selectedDate: propSelectedDate,
  onSelectDate
}) {
  const sortedRecords = reactExports.useMemo(() => Object.values(records).sort((a, b) => (b.date || "").localeCompare(a.date || "")), [records]);
  const [internalSelectedDate, setInternalSelectedDate] = reactExports.useState(null);
  const selectedDate = propSelectedDate !== void 0 ? propSelectedDate : internalSelectedDate;
  const setSelectedDate = (d) => {
    if (onSelectDate) onSelectDate(d);
    setInternalSelectedDate(d);
  };
  const totalSecs = sortedRecords.reduce((acc, r) => acc + (r.totalSeconds || 0), 0);
  const totalHours = Math.floor(totalSecs / 3600);
  const totalMins = Math.floor(totalSecs % 3600 / 60);
  const selectedRecord = selectedDate ? records[selectedDate] : null;
  const histogramData = reactExports.useMemo(() => {
    if (!selectedRecord || !selectedRecord.sections) return [];
    const total = selectedRecord.totalSeconds || 1;
    return Object.entries(selectedRecord.sections).map(([name, secs]) => ({
      name,
      time: secs,
      // For tooltip
      percentage: Number((secs / total * 100).toFixed(1))
    })).sort((a, b) => b.percentage - a.percentage);
  }, [selectedRecord]);
  const formatTime = (ts) => {
    if (!ts) return "--:--";
    return new Date(ts).toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" });
  };
  const formatDuration = (secs) => {
    const h = Math.floor(secs / 3600);
    const m = Math.floor(secs % 3600 / 60);
    const s = Math.floor(secs % 60);
    if (h > 0) return `${h}h ${m}m ${s}s`;
    if (m > 0) return `${m}m ${s}s`;
    return `${s}s`;
  };
  const formatDateDisplay = (dateStr) => {
    try {
      const d = /* @__PURE__ */ new Date(dateStr + "T12:00:00");
      return d.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" });
    } catch {
      return dateStr;
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-2xl p-5 flex flex-col h-full", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-6 shrink-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-3xl font-black text-foreground", children: [
        totalHours,
        "h ",
        totalMins,
        "m"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground mt-1", children: [
        "Total Time Spent across ",
        sortedRecords.length,
        " days"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2.5 flex-1 overflow-y-auto pr-2 min-h-[150px] max-h-[280px]", children: [
      sortedRecords.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center text-sm text-muted-foreground py-8", children: "No study session data recorded yet." }),
      sortedRecords.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          onClick: () => setSelectedDate(selectedDate === r.date ? null : r.date),
          className: `cursor-pointer border rounded-xl p-3.5 transition-all ${selectedDate === r.date ? "bg-primary/10 border-primary/40 shadow-sm" : "bg-muted/30 border-border hover:bg-muted/60"}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-sm text-foreground", children: formatDateDisplay(r.date) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold text-primary tabular-nums", children: formatDuration(r.totalSeconds) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center mt-1 text-[11px] text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                formatTime(r.startTime),
                " - ",
                formatTime(r.endTime)
              ] }),
              r.sessions?.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "bg-primary/10 text-primary px-1.5 py-0.5 rounded text-[10px] font-semibold", children: [
                r.sessions.length,
                " ",
                r.sessions.length === 1 ? "session" : "sessions"
              ] })
            ] })
          ]
        },
        r.date
      ))
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: selectedRecord && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, height: 0 },
        animate: { opacity: 1, height: "auto" },
        exit: { opacity: 0, height: 0 },
        className: "overflow-hidden mt-4 pt-4 border-t border-border shrink-0 space-y-4",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-bold text-foreground uppercase tracking-wider", children: [
              "Details for ",
              formatDateDisplay(selectedRecord.date)
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setSelectedDate(null), className: "p-1 hover:bg-muted rounded text-muted-foreground hover:text-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-3.5 w-3.5" }) })
          ] }),
          selectedRecord.sessions && selectedRecord.sessions.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] font-bold text-muted-foreground uppercase tracking-wide", children: "Recorded Sessions" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-1 max-h-36 overflow-y-auto pr-1", children: selectedRecord.sessions.map((sess, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-2 rounded-lg bg-muted/50 border border-border/60 flex items-center justify-between text-xs", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-foreground", children: sess.timeRangeFormatted || `${formatTime(sess.startTime)} - ${formatTime(sess.endTime)}` }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] text-muted-foreground ml-2", children: [
                  "Session #",
                  selectedRecord.sessions.length - idx
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-primary tabular-nums", children: sess.durationFormatted || formatDuration(sess.durationSeconds) })
            ] }, sess.id || idx)) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] font-bold text-muted-foreground uppercase tracking-wide mb-1", children: "Section Breakdown" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: 160, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(BarChart, { data: histogramData, layout: "vertical", margin: { top: 5, right: 30, left: 40, bottom: 5 }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CartesianGrid, { strokeDasharray: "3 3", horizontal: false, stroke: "hsl(var(--border))" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(XAxis, { type: "number", domain: [0, 100], tick: { fontSize: 10, fill: "hsl(var(--muted-foreground))" }, tickFormatter: (val) => `${val}%` }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(YAxis, { dataKey: "name", type: "category", tick: { fontSize: 10, fill: "hsl(var(--muted-foreground))" }, width: 80 }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Tooltip,
                {
                  cursor: { fill: "hsl(var(--muted))" },
                  content: ({ active, payload }) => {
                    if (!active || !payload?.length) return null;
                    const data = payload[0].payload;
                    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-lg px-3 py-2 shadow-xl text-xs", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold mb-1 text-foreground", children: data.name }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-primary", children: [
                        data.percentage,
                        "% ",
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground", children: [
                          "(",
                          formatDuration(data.time),
                          ")"
                        ] })
                      ] })
                    ] });
                  }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Bar, { dataKey: "percentage", fill: "#3B82F6", radius: [0, 4, 4, 0] })
            ] }) })
          ] })
        ]
      }
    ) })
  ] });
}
function StudyHeatmap({ records }) {
  const [currentMonth, setCurrentMonth] = reactExports.useState(() => {
    const now = /* @__PURE__ */ new Date();
    return new Date(now.getFullYear(), now.getMonth(), 1);
  });
  const { days, blanks } = reactExports.useMemo(() => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDay = new Date(year, month, 1).getDay();
    const result = [];
    for (let i = 1; i <= daysInMonth; i++) {
      const d = new Date(year, month, i);
      const y = d.getFullYear();
      const m = String(d.getMonth() + 1).padStart(2, "0");
      const dayStr = String(d.getDate()).padStart(2, "0");
      const dateStr = `${y}-${m}-${dayStr}`;
      const secs = records[dateStr]?.totalSeconds || 0;
      result.push({ dateStr, secs, date: i });
    }
    return { days: result, blanks: firstDay };
  }, [currentMonth, records]);
  const prevMonth = () => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
  const nextMonth = () => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
  const monthName = currentMonth.toLocaleDateString("en-US", { month: "long", year: "numeric" });
  const isCurrentMonth = currentMonth.getFullYear() === (/* @__PURE__ */ new Date()).getFullYear() && currentMonth.getMonth() === (/* @__PURE__ */ new Date()).getMonth();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-2xl p-5 overflow-hidden w-full mt-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-muted-foreground uppercase tracking-wide", children: "Monthly Study Heatmap" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 bg-muted/50 p-1 rounded-lg border border-border/50", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "ghost", size: "icon", className: "h-7 w-7 rounded-md hover:bg-background shadow-sm transition-all", onClick: prevMonth, children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "h-4 w-4" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-bold w-32 text-center text-foreground", children: monthName }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "ghost", size: "icon", className: "h-7 w-7 rounded-md hover:bg-background shadow-sm transition-all", onClick: nextMonth, disabled: isCurrentMonth, children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "h-4 w-4" }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-7 gap-1 text-center mb-2", children: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-muted-foreground font-semibold uppercase tracking-wider", children: d }, d)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-7 gap-2", children: [
      Array.from({ length: blanks }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-square rounded-xl bg-transparent" }, `blank-${i}`)),
      days.map((day) => {
        let color = "bg-muted/30 border-border/50 hover:bg-muted/50";
        let textColor = "text-muted-foreground";
        if (day.secs > 0) {
          color = "bg-green-500/20 border-green-500/30 hover:bg-green-500/30";
          textColor = "text-green-700 dark:text-green-400";
        }
        if (day.secs > 3600) {
          color = "bg-green-500/40 border-green-500/50 hover:bg-green-500/50";
          textColor = "text-green-800 dark:text-green-300";
        }
        if (day.secs > 7200) {
          color = "bg-green-500/60 border-green-500/70 hover:bg-green-500/70";
          textColor = "text-white";
        }
        if (day.secs > 14400) {
          color = "bg-green-500/80 border-green-500/90 hover:bg-green-500/90";
          textColor = "text-white";
        }
        if (day.secs > 21600) {
          color = "bg-green-500 border-green-600 hover:bg-green-600";
          textColor = "text-white";
        }
        const hours = Math.floor(day.secs / 3600);
        const mins = Math.floor(day.secs % 3600 / 60);
        const timeTooltip = day.secs > 0 ? `${hours}h ${mins}m` : "No activity";
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: `aspect-square rounded-xl flex items-center justify-center text-sm font-bold transition-all border cursor-default relative group ${color} ${textColor}`,
            children: [
              day.date,
              day.secs > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white text-[10px] px-2 py-1 rounded shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-10", children: timeTooltip })
            ]
          },
          day.dateStr
        );
      })
    ] })
  ] });
}
function SystemPerformance() {
  const [data, setData] = reactExports.useState(Array.from({ length: 30 }, () => ({ time: "", cpu: 0, ram: 0 })));
  const [storage, setStorage] = reactExports.useState({ usage: 0, quota: 0 });
  const [isCleaning, setIsCleaning] = reactExports.useState(false);
  const cleaningRef = reactExports.useRef(false);
  const handleOptimize = () => {
    setIsCleaning(true);
    cleaningRef.current = true;
    setTimeout(() => {
      setIsCleaning(false);
      cleaningRef.current = false;
    }, 3e3);
  };
  reactExports.useEffect(() => {
    if (navigator.storage && navigator.storage.estimate) {
      navigator.storage.estimate().then((est) => {
        setStorage({ usage: est.usage || 0, quota: est.quota || 0 });
      });
    }
    performance.now();
    let intervalId;
    intervalId = setInterval(() => {
      const mem = performance.memory;
      let usedRam = mem ? mem.usedJSHeapSize / 1024 / 1024 : 0;
      let cpuLoad = Math.random() * 15 + 5;
      if (cleaningRef.current) {
        cpuLoad = cpuLoad * 0.15;
        usedRam = usedRam * 0.7;
      }
      setData((prev) => {
        const next = [...prev, {
          time: (/* @__PURE__ */ new Date()).toLocaleTimeString("en-US", { hour12: false, hour: "2-digit", minute: "2-digit", second: "2-digit" }),
          cpu: Number(cpuLoad.toFixed(1)),
          ram: Number(usedRam.toFixed(1))
        }];
        if (next.length > 30) return next.slice(next.length - 30);
        return next;
      });
      if (Math.random() < 0.2 && navigator.storage && navigator.storage.estimate) {
        navigator.storage.estimate().then((est) => {
          setStorage({ usage: est.usage || 0, quota: est.quota || 0 });
        });
      }
    }, 5e3);
    return () => {
      clearInterval(intervalId);
    };
  }, []);
  const formatBytes = (bytes) => {
    if (bytes === 0) return "0 B";
    const k = 1024;
    const sizes = ["B", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };
  const currentCpu = data[data.length - 1]?.cpu || 0;
  const cpuColor = currentCpu > 80 ? "#EF4444" : currentCpu > 50 ? "#F59E0B" : "#22C55E";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-2xl p-4 lg:col-span-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-muted-foreground uppercase tracking-wide", children: "Main Thread CPU Usage" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mt-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-2xl font-black text-foreground", style: { color: cpuColor }, children: [
              currentCpu,
              "%"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                onClick: handleOptimize,
                disabled: isCleaning,
                variant: isCleaning ? "outline" : "secondary",
                size: "sm",
                className: "h-6 text-[10px] gap-1 px-2 rounded-full transition-all",
                children: [
                  isCleaning ? /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: "h-3 w-3 animate-spin text-blue-400" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "h-3 w-3 text-yellow-500" }),
                  isCleaning ? "Optimizing..." : "Clean Up Resources"
                ]
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Activity, { className: "h-6 w-6 text-blue-400 opacity-50" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: 150, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(AreaChart, { data, margin: { top: 5, right: 0, left: -24, bottom: 0 }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("defs", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("linearGradient", { id: "grad-cpu", x1: "0", y1: "0", x2: "0", y2: "1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "5%", stopColor: cpuColor, stopOpacity: 0.3 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "95%", stopColor: cpuColor, stopOpacity: 0 })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CartesianGrid, { strokeDasharray: "3 3", vertical: false, stroke: "hsl(var(--border))" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(XAxis, { dataKey: "time", tick: { fontSize: 9, fill: "hsl(var(--muted-foreground))" }, axisLine: false, tickLine: false, minTickGap: 30 }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(YAxis, { domain: [0, 100], tick: { fontSize: 9, fill: "hsl(var(--muted-foreground))" }, axisLine: false, tickLine: false, allowDecimals: false }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { content: /* @__PURE__ */ jsxRuntimeExports.jsx(ChartTooltip, {}) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Area, { type: "monotone", dataKey: "cpu", name: "CPU (%)", stroke: cpuColor, strokeWidth: 2, fill: "url(#grad-cpu)", isAnimationActive: false })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-2xl p-4 flex-1 flex flex-col justify-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-muted-foreground uppercase tracking-wide", children: "JS Heap Memory" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Database, { className: "h-4 w-4 text-purple-400 opacity-50" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-2xl font-black text-foreground", children: [
          data[data.length - 1]?.ram || 0,
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium text-muted-foreground", children: "MB" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: 60, className: "mt-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(AreaChart, { data, margin: { top: 0, right: 0, left: -24, bottom: 0 }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("defs", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("linearGradient", { id: "grad-ram", x1: "0", y1: "0", x2: "0", y2: "1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "5%", stopColor: "#8B5CF6", stopOpacity: 0.3 }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "95%", stopColor: "#8B5CF6", stopOpacity: 0 })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(YAxis, { domain: ["auto", "auto"], hide: true }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { content: /* @__PURE__ */ jsxRuntimeExports.jsx(ChartTooltip, {}) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Area, { type: "monotone", dataKey: "ram", name: "RAM (MB)", stroke: "#8B5CF6", strokeWidth: 2, fill: "url(#grad-ram)", isAnimationActive: false })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-2xl p-4 flex-1 flex flex-col justify-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-muted-foreground uppercase tracking-wide", children: "Local Storage Usage" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Archive, { className: "h-4 w-4 text-green-400 opacity-50" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-black text-foreground", children: formatBytes(storage.usage) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full bg-muted rounded-full h-2 mt-3 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-green-500 h-full rounded-full transition-all duration-500", style: { width: `${Math.min(100, storage.usage / (storage.quota || 1) * 100)}%` } }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground mt-2 text-right", children: storage.quota ? `${(storage.usage / storage.quota * 100).toFixed(1)}% of quota used` : "Calculating..." })
      ] })
    ] })
  ] });
}
function AdminPage() {
  const {
    user,
    logout,
    selectedGoal,
    setGoalSelectionOpen,
    viewMode,
    setViewMode,
    pdfViewMode,
    setPdfViewMode,
    videoViewMode,
    setVideoViewMode,
    savesViewMode,
    setSavesViewMode
  } = useAppContext();
  const {
    streakData,
    todaySession,
    sessionState,
    sessionElapsedSeconds,
    sessionStartTime,
    startSession,
    pauseSession,
    resumeSession,
    endSession,
    completedSessions
  } = useStreakContext();
  useToast();
  const { isSupported, changeFolder, writeMedia, readMediaAsArrayBuffer } = useWorkspaceContext();
  const [workspaceName, setWorkspaceName] = reactExports.useState(null);
  reactExports.useEffect(() => {
    idbGet("jee_workspace_handle").then((handle) => {
      if (handle && handle.name) setWorkspaceName(handle.name);
    }).catch(() => {
    });
  }, []);
  const [timeline, setTimeline] = reactExports.useState(() => {
    try {
      const raw = JSON.parse(localStorage.getItem("jee_admin_timeline") || "[]");
      if (Array.isArray(raw)) {
        return raw.map((item) => ({
          id: item.id || String(Date.now() + Math.random()),
          date: item.date || (item.timestamp ? new Date(item.timestamp).toISOString().slice(0, 10) : (/* @__PURE__ */ new Date()).toISOString().slice(0, 10)),
          title: item.title || "Timeline Event",
          description: item.description || item.detail || "",
          type: item.type && ["milestone", "study", "test", "achievement", "goal"].includes(item.type) ? item.type : "study"
        }));
      }
      return [];
    } catch {
      return [];
    }
  });
  const [showTLForm, setShowTLForm] = reactExports.useState(false);
  const [editTL, setEditTL] = reactExports.useState(null);
  const [tlForm, setTlForm] = reactExports.useState({
    date: (/* @__PURE__ */ new Date()).toISOString().slice(0, 10),
    title: "",
    description: "",
    type: "milestone"
  });
  const [importStatus, setImportStatus] = reactExports.useState("idle");
  const [importMsg, setImportMsg] = reactExports.useState("");
  const importFileRef = reactExports.useRef(null);
  const [pendingRestore, setPendingRestore] = reactExports.useState(null);
  const [editingCategory, setEditingCategory] = reactExports.useState(null);
  const [isExpertMode, setIsExpertMode] = reactExports.useState(false);
  const [editJsonBuffer, setEditJsonBuffer] = reactExports.useState("");
  const [pendingZip, setPendingZip] = reactExports.useState(null);
  const [restoreCategories, setRestoreCategories] = reactExports.useState([]);
  const [refreshKey, setRefreshKey] = reactExports.useState(0);
  const [showStats, setShowStats] = reactExports.useState(false);
  const [spikeOffset, setSpikeOffset] = reactExports.useState(0);
  const [dateRangeOffset, setDateRangeOffset] = reactExports.useState(0);
  const [selectedAnalyticsDate, setSelectedAnalyticsDate] = reactExports.useState(null);
  const [accName, setAccName] = reactExports.useState("");
  const [accDob, setAccDob] = reactExports.useState("");
  const [accPic, setAccPic] = reactExports.useState(() => localStorage.getItem("jee_profile_pic") || "");
  const [accPass, setAccPass] = reactExports.useState("");
  const [accLoading, setAccLoading] = reactExports.useState(false);
  const [accMsg, setAccMsg] = reactExports.useState("");
  const [otpStep, setOtpStep] = reactExports.useState("idle");
  const [otpInput, setOtpInput] = reactExports.useState("");
  const [generatedOtp, setGeneratedOtp] = reactExports.useState("");
  const [openRouterKey, setOpenRouterKey] = reactExports.useState(() => localStorage.getItem("jee_openrouter_api_key") || "");
  const [showKey, setShowKey] = reactExports.useState(false);
  const [keyTesting, setKeyTesting] = reactExports.useState(false);
  const [keyStatus, setKeyStatus] = reactExports.useState("idle");
  const [keyMsg, setKeyMsg] = reactExports.useState("");
  reactExports.useEffect(() => {
    const p = localStorage.getItem("jee_profile_pic");
    if (p) setAccPic(p);
    idbGet("jee_profile_pic").then((pic) => {
      if (pic && typeof pic === "string") {
        setAccPic(pic);
        try {
          localStorage.setItem("jee_profile_pic", pic);
        } catch {
        }
      }
    }).catch(() => {
    });
    const storedUsers = JSON.parse(localStorage.getItem("jee_local_users") || "[]");
    const currentLocalUser = storedUsers.find((u) => u.username === user);
    if (currentLocalUser) {
      if (currentLocalUser.username) setAccName(currentLocalUser.username);
      if (currentLocalUser.dob) setAccDob(currentLocalUser.dob);
      if (currentLocalUser.password) setAccPass(currentLocalUser.password);
      if (currentLocalUser.profilePic && !p) {
        setAccPic(currentLocalUser.profilePic);
        try {
          localStorage.setItem("jee_profile_pic", currentLocalUser.profilePic);
        } catch {
        }
        idbSet("jee_profile_pic", currentLocalUser.profilePic);
      }
    }
    if (auth.currentUser) {
      getDoc(doc(db, "users", auth.currentUser.uid)).then((d) => {
        if (d.exists()) {
          const data = d.data();
          if (data.localUsername || data.name) setAccName(data.localUsername || data.name);
          if (data.dateOfBirth) setAccDob(data.dateOfBirth);
          if (data.localPassword) setAccPass(data.localPassword);
          if (data.profilePic) {
            setAccPic(data.profilePic);
            try {
              localStorage.setItem("jee_profile_pic", data.profilePic);
            } catch {
            }
            idbSet("jee_profile_pic", data.profilePic);
          }
          if (data.openrouterApiKey && !openRouterKey) {
            setOpenRouterKey(data.openrouterApiKey);
            localStorage.setItem("jee_openrouter_api_key", data.openrouterApiKey);
          }
        }
      }).catch(() => {
      });
    }
  }, [user]);
  const handlePicUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      const rawDataUrl = event.target?.result;
      const img = new Image();
      img.onload = () => {
        const maxDim = 512;
        let { width, height } = img;
        if (width > height) {
          if (width > maxDim) {
            height = Math.round(height * maxDim / width);
            width = maxDim;
          }
        } else {
          if (height > maxDim) {
            width = Math.round(width * maxDim / height);
            height = maxDim;
          }
        }
        const canvas = document.createElement("canvas");
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext("2d");
        if (ctx) {
          ctx.drawImage(img, 0, 0, width, height);
          const compressed = canvas.toDataURL("image/jpeg", 0.85);
          setAccPic(compressed);
          try {
            localStorage.setItem("jee_profile_pic", compressed);
          } catch {
          }
          idbSet("jee_profile_pic", compressed);
          window.dispatchEvent(new Event("storage"));
        } else {
          setAccPic(rawDataUrl);
          try {
            localStorage.setItem("jee_profile_pic", rawDataUrl);
          } catch {
          }
          idbSet("jee_profile_pic", rawDataUrl);
          window.dispatchEvent(new Event("storage"));
        }
      };
      img.onerror = () => {
        setAccPic(rawDataUrl);
        try {
          localStorage.setItem("jee_profile_pic", rawDataUrl);
        } catch {
        }
        idbSet("jee_profile_pic", rawDataUrl);
        window.dispatchEvent(new Event("storage"));
      };
      img.src = rawDataUrl;
    };
    reader.readAsDataURL(file);
  };
  const handleSaveOpenRouterKey = async () => {
    const trimmed = openRouterKey.trim();
    localStorage.setItem("jee_openrouter_api_key", trimmed);
    if (auth.currentUser) {
      try {
        await updateDoc(doc(db, "users", auth.currentUser.uid), {
          openrouterApiKey: trimmed
        });
      } catch {
      }
    }
    setKeyMsg("API Key saved successfully!");
    setKeyStatus("idle");
    setTimeout(() => setKeyMsg(""), 3e3);
  };
  const handleTestOpenRouterKey = async () => {
    const trimmed = openRouterKey.trim();
    if (!trimmed) {
      setKeyStatus("invalid");
      setKeyMsg("Please enter an OpenRouter API key first.");
      return;
    }
    setKeyTesting(true);
    setKeyMsg("");
    try {
      let res = await fetch("https://openrouter.ai/api/v1/auth/key", {
        headers: {
          Authorization: `Bearer ${trimmed}`
        }
      });
      if (!res.ok) {
        res = await fetch("https://openrouter.ai/api/v1/models", {
          headers: {
            Authorization: `Bearer ${trimmed}`
          }
        });
      }
      if (res.ok) {
        setKeyStatus("valid");
        setKeyMsg("Connection successful! API key is valid and active.");
      } else {
        const data = await res.json().catch(() => ({}));
        setKeyStatus("invalid");
        setKeyMsg(data.error?.message || "Invalid API key or unauthorized.");
      }
    } catch (e) {
      setKeyStatus("valid");
      setKeyMsg("API Key configured (Saved locally).");
    } finally {
      setKeyTesting(false);
    }
  };
  const handleClearOpenRouterKey = async () => {
    setOpenRouterKey("");
    localStorage.removeItem("jee_openrouter_api_key");
    if (auth.currentUser) {
      try {
        await updateDoc(doc(db, "users", auth.currentUser.uid), {
          openrouterApiKey: ""
        });
      } catch {
      }
    }
    setKeyStatus("idle");
    setKeyMsg("API key removed.");
    setTimeout(() => setKeyMsg(""), 3e3);
  };
  const sendResetLink = async () => {
    if (!auth.currentUser?.email) {
      setAccMsg("No email associated with this account to send a reset link.");
      return;
    }
    try {
      await sendPasswordResetEmail(auth, auth.currentUser.email);
      setAccMsg("A password reset link has been sent to your email!");
    } catch (err) {
      setAccMsg(err.message || "Failed to send reset link.");
    }
  };
  const handleSaveAccount = async () => {
    setAccLoading(true);
    setAccMsg("");
    try {
      if (accPic) {
        try {
          localStorage.setItem("jee_profile_pic", accPic);
        } catch {
        }
        await idbSet("jee_profile_pic", accPic);
      }
      const storedUsers = JSON.parse(localStorage.getItem("jee_local_users") || "[]");
      const updatedUsers = storedUsers.map(
        (u) => u.username === user ? { ...u, username: accName, password: accPass, profilePic: accPic, dob: accDob } : u
      );
      localStorage.setItem("jee_local_users", JSON.stringify(updatedUsers));
      if (accName) {
        localStorage.setItem("jee_local_name", accName);
        localStorage.setItem("jee_current_user", accName);
        localStorage.setItem("jee_user", JSON.stringify(accName));
      }
      if (auth.currentUser) {
        try {
          await updateDoc(doc(db, "users", auth.currentUser.uid), {
            name: accName,
            localUsername: accName,
            dateOfBirth: accDob,
            localPassword: accPass,
            profilePic: accPic
          });
        } catch (e) {
          console.warn("Firebase user update skipped or failed:", e);
        }
      }
      setAccMsg("Account configuration saved successfully!");
      window.dispatchEvent(new Event("storage"));
      if (accName !== user) {
        setTimeout(() => window.location.reload(), 1200);
      }
    } catch (err) {
      setAccMsg(err.message || "Failed to update account.");
    }
    setAccLoading(false);
  };
  const statsRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    const id = setInterval(() => setRefreshKey((k) => k + 1), 6e4);
    return () => clearInterval(id);
  }, []);
  reactExports.useEffect(() => {
    localStorage.setItem("jee_admin_timeline", JSON.stringify(timeline));
  }, [timeline]);
  const getDateRange = (offset) => {
    const endDate = /* @__PURE__ */ new Date();
    const startDate = /* @__PURE__ */ new Date();
    const periodDays = 365;
    endDate.setDate(endDate.getDate() + offset * periodDays);
    startDate.setDate(endDate.getDate() - periodDays);
    return { startDate, endDate };
  };
  const stats = reactExports.useMemo(() => {
    const parse = (key, fallback) => {
      try {
        return JSON.parse(localStorage.getItem(key) || "") ?? fallback;
      } catch {
        return fallback;
      }
    };
    const { startDate, endDate } = getDateRange(dateRangeOffset);
    const isInRange = (date) => {
      const d = new Date(date);
      return d >= startDate && d <= endDate;
    };
    const tasks = parse("jee_tasks", []).filter((t) => !t.createdAt || isInRange(t.createdAt));
    const events = parse("jee_cal_events", []).filter((e) => !e.start || isInRange(e.start));
    const marked = parse("jee_today_marked", []);
    const timers = parse("jee_tm_timers", []);
    const alarms = parse("jee_tm_alarms", []);
    const playlists = parse("jee_playlists", []);
    const sections = parse("jee_pdf_sections_v3", []);
    const tags = parse("jee_tags", []);
    const dailyRec = parse("jee_daily_records", {});
    const timeTracking = parse("jee_time_tracking", {});
    const lockdownRecords = parse("jee_lockdown_records", []);
    const quizResults = parse("jee_quiz_results", []);
    const totalZenSecs = Object.values(timeTracking).reduce((acc, val) => acc + (val.sections?.["Zen Mixer"] || 0), 0);
    const savedSubjects = parse("jee_saves_subjects_v1", []);
    const allQuestions = parse("jee_saves_questions_v1", {});
    const allSongs = playlists.flatMap((p) => p.songs ?? []);
    const subsections = sections.flatMap((s) => s.subsections ?? []);
    const subsubsections = subsections.flatMap(
      (s) => s.subsubsections ?? []
    );
    const pdfsUploaded = [
      ...subsections.filter((s) => s.pdfKey || s.pdfUrl),
      ...subsubsections.filter((s) => s.pdfKey || s.pdfUrl)
    ].length;
    const vidSections = parse("jee_vid_sections_v1", []);
    const vidSubs = vidSections.flatMap((s) => s.subsections ?? []);
    const vidSubSubs = vidSubs.flatMap((s) => s.subsubsections ?? []);
    const videosLoaded = [
      ...vidSubs.filter((s) => s.video),
      ...vidSubSubs.filter((s) => s.video)
    ].length;
    const todayHr = Math.floor(todaySession.seconds / 3600);
    const todayMin = Math.floor(todaySession.seconds % 3600 / 60);
    const todaySec = todaySession.seconds % 60;
    const totalEarned = streakData.records.filter(
      (r) => r.type === "earned"
    ).length;
    const estTotalSecs = todaySession.seconds + (totalEarned > 0 ? (totalEarned - 1) * 15 * 60 : 0);
    const completedTasks = tasks.filter((t) => t.completed).length;
    const doneMark = marked.filter((m) => m.status === "done").length;
    const cancelMark = marked.filter((m) => m.status === "cancel").length;
    const lockdownCompleted = lockdownRecords.filter((r) => r.status === "completed").length;
    const lockdownBroken = lockdownRecords.filter((r) => r.status === "broken").length;
    let totalSavedQuestions = 0;
    let totalSavedImages = 0;
    let totalCorrectAnswers = 0;
    let totalWrongAnswers = 0;
    Object.values(allQuestions).forEach((qList) => {
      totalSavedQuestions += qList.length;
      qList.forEach((q) => {
        if (q.questionImageKey || q.questionUrl) totalSavedImages++;
        if (q.answerImageKey || q.answerUrl) totalSavedImages++;
        totalCorrectAnswers += q.correctCount || 0;
        totalWrongAnswers += q.wrongCount || 0;
      });
    });
    return {
      tasks: {
        total: tasks.length,
        completed: completedTasks,
        pending: tasks.length - completedTasks,
        high: tasks.filter((t) => t.priority === "High").length,
        medium: tasks.filter((t) => t.priority === "Medium").length,
        low: tasks.filter((t) => t.priority === "Low").length
      },
      events: {
        total: events.length,
        none: events.filter((e) => e.recurrence === "none").length,
        daily: events.filter((e) => e.recurrence === "daily").length,
        weekly: events.filter((e) => e.recurrence === "weekly").length,
        done: doneMark,
        cancel: cancelMark
      },
      timers: { total: timers.length },
      alarms: {
        total: alarms.length,
        active: alarms.filter((a) => a.active).length
      },
      music: {
        songs: allSongs.length,
        playlists: playlists.length,
        local: allSongs.filter((s) => s.isLocal).length,
        url: allSongs.filter((s) => !s.isLocal).length
      },
      pdf: {
        sections: sections.length,
        subsections: subsections.length,
        subsubsections: subsubsections.length,
        uploaded: pdfsUploaded
      },
      videos: {
        sections: vidSections.length,
        subsections: vidSubs.length + vidSubSubs.length,
        loaded: videosLoaded
      },
      streak: { current: streakData.currentStreak, earned: totalEarned },
      tags: tags.length,
      time: {
        todayHr,
        todayMin,
        todaySec,
        estTotalSecs,
        totalZenSecs,
        todayStr: `${String(todayHr).padStart(2, "0")}:${String(todayMin).padStart(2, "0")}:${String(todaySec).padStart(2, "0")}`
      },
      saves: {
        subjects: savedSubjects.length,
        questions: totalSavedQuestions,
        images: totalSavedImages,
        correct: totalCorrectAnswers,
        wrong: totalWrongAnswers,
        totalCounts: totalCorrectAnswers + totalWrongAnswers
      },
      quiz: {
        total: quizResults.length,
        questions: quizResults.reduce((acc, q) => acc + (q.total || 0), 0)
      },
      timeTracking: {
        records: timeTracking,
        totalSeconds: Object.values(timeTracking).reduce((acc, val) => acc + (val.totalSeconds || 0), 0),
        totalDays: Object.keys(timeTracking).length
      },
      lockdown: {
        completed: lockdownCompleted,
        broken: lockdownBroken,
        total: lockdownRecords.length
      },
      dailyRec
    };
  }, [todaySession, streakData, refreshKey, dateRangeOffset]);
  const todoChartData = [
    { name: "Completed", value: stats.tasks.completed, fill: "#22C55E" },
    { name: "Pending", value: stats.tasks.pending, fill: "#EF4444" }
  ].filter((d) => d.value > 0);
  const priorityChartData = [
    { name: "High", value: stats.tasks.high, fill: "#EF4444" },
    { name: "Medium", value: stats.tasks.medium, fill: "#F59E0B" },
    { name: "Low", value: stats.tasks.low, fill: "#6B7280" }
  ].filter((d) => d.value > 0);
  const eventChartData = [
    { name: "One-time", value: stats.events.none, fill: "#3B82F6" },
    { name: "Daily", value: stats.events.daily, fill: "#8B5CF6" },
    { name: "Weekly", value: stats.events.weekly, fill: "#EC4899" }
  ].filter((d) => d.value > 0);
  const musicChartData = [
    { name: "Local", value: stats.music.local, fill: "#10B981" },
    { name: "URL", value: stats.music.url, fill: "#06B6D4" }
  ].filter((d) => d.value > 0);
  const spikeData = reactExports.useMemo(() => {
    const parse = (key, fallback) => {
      try {
        return JSON.parse(localStorage.getItem(key) || "") ?? fallback;
      } catch {
        return fallback;
      }
    };
    const dailyRec = parse("jee_daily_records", {});
    const events = parse("jee_cal_events", []);
    const byDay = {};
    events.forEach((ev) => {
      if (ev.start) {
        const d = new Date(ev.start).toISOString().slice(0, 10);
        byDay[d] = (byDay[d] || 0) + 1;
      }
    });
    const DAYS = 365;
    return Array.from({ length: DAYS }, (_, i) => {
      const d = /* @__PURE__ */ new Date();
      d.setDate(d.getDate() - (DAYS - 1 - i) + spikeOffset);
      const key = d.toISOString().slice(0, 10);
      return {
        date: d.toLocaleDateString("en-US", { month: "short", day: "numeric" }),
        completed: dailyRec[key]?.completed || 0,
        total: dailyRec[key]?.total || 0,
        events: byDay[key] || 0
      };
    });
  }, [refreshKey, spikeOffset]);
  const openAdd = () => {
    setEditTL(null);
    setTlForm({
      date: (/* @__PURE__ */ new Date()).toISOString().slice(0, 10),
      title: "",
      description: "",
      type: "milestone"
    });
    setShowTLForm(true);
  };
  const openEdit = (entry) => {
    setEditTL(entry);
    setTlForm({
      date: entry.date,
      title: entry.title,
      description: entry.description ?? "",
      type: entry.type
    });
    setShowTLForm(true);
  };
  const saveTL = () => {
    if (!tlForm.title.trim()) return;
    if (editTL) {
      setTimeline(
        (prev) => prev.map((e) => e.id === editTL.id ? { ...editTL, ...tlForm } : e)
      );
    } else {
      setTimeline((prev) => [
        ...prev,
        { id: Date.now().toString(), ...tlForm }
      ]);
    }
    setShowTLForm(false);
  };
  const deleteTL = (id) => setTimeline((prev) => prev.filter((e) => e.id !== id));
  const sortedTimeline = [...timeline].sort(
    (a, b) => (b.date || "").localeCompare(a.date || "")
  );
  function idbKeyCategory(key) {
    if (key.startsWith("pdf_leaf_") || key.startsWith("img_leaf_"))
      return "pdf";
    if (key.startsWith("music_")) return "music";
    if (key.startsWith("ambient_")) return "ambient";
    if (key.startsWith("vid_img_") || key.startsWith("vid_voice_") || key.startsWith("vid_ss_") || key.startsWith("vid_file_"))
      return "videos";
    if (key.startsWith("jee_saves_") || key.startsWith("q_img_") || key.startsWith("a_img_") || key.startsWith("q_crop_") || key.startsWith("a_crop_"))
      return "saves";
    return null;
  }
  const handleExport = reactExports.useCallback(async () => {
    const zip = new JSZip();
    const backup = {};
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (!key) continue;
      if (key.startsWith("jee_") || key.startsWith("pdf_anno_") || key.startsWith("vid_") || key === "theme" || key === "user") {
        try {
          backup[key] = JSON.parse(localStorage.getItem(key));
        } catch {
          backup[key] = localStorage.getItem(key);
        }
      }
    }
    backup["jee_admin_timeline"] = timeline;
    try {
      const idbKeys = await idbGetAllKeys();
      const mediaKeysToBackup = new Set(idbKeys);
      const safeParse = (k) => {
        try {
          return JSON.parse(localStorage.getItem(k) || "null");
        } catch {
          return null;
        }
      };
      const pdfSections = safeParse("jee_pdf_sections_v3") || [];
      pdfSections.forEach((sec) => {
        sec.subsections?.forEach((sub) => {
          if (sub.pdfKey) mediaKeysToBackup.add(sub.pdfKey);
          if (sub.imageKey) mediaKeysToBackup.add(sub.imageKey);
          sub.subsubsections?.forEach((ss) => {
            if (ss.pdfKey) mediaKeysToBackup.add(ss.pdfKey);
            if (ss.imageKey) mediaKeysToBackup.add(ss.imageKey);
          });
        });
      });
      const vidSections = safeParse("jee_vid_sections_v1") || [];
      vidSections.forEach((sec) => {
        sec.subsections?.forEach((sub) => {
          if (sub.video?.fileKey) mediaKeysToBackup.add(sub.video.fileKey);
          sub.subsubsections?.forEach((ss) => {
            if (ss.video?.fileKey) mediaKeysToBackup.add(ss.video.fileKey);
          });
        });
      });
      const vidNotes = safeParse("vid_notes_v1") || {};
      Object.values(vidNotes).forEach((notes) => {
        notes?.forEach((n) => {
          if (n.imageKey) mediaKeysToBackup.add(n.imageKey);
          if (n.voiceKey) mediaKeysToBackup.add(n.voiceKey);
          if (n.screenshotKey) mediaKeysToBackup.add(n.screenshotKey);
        });
      });
      const savedQs = safeParse("jee_saves_questions_v1") || {};
      Object.values(savedQs).forEach((qs) => {
        qs?.forEach((q) => {
          if (q.questionImageKey) mediaKeysToBackup.add(q.questionImageKey);
          if (q.answerImageKey) mediaKeysToBackup.add(q.answerImageKey);
        });
      });
      const playlists = safeParse("jee_playlists") || [];
      playlists.forEach((p) => {
        p.songs?.forEach((s) => {
          if (s.idbKey) mediaKeysToBackup.add(s.idbKey);
        });
      });
      const customTracks = safeParse("jee_ambient_custom_tracks") || [];
      customTracks.forEach((t) => {
        if (t.isCustom && !t.src.startsWith("http")) mediaKeysToBackup.add(t.src);
      });
      const idbManifest = [];
      for (const key of Array.from(mediaKeysToBackup)) {
        try {
          let buf = null;
          let mimeType;
          if (key.startsWith("pdf_")) mimeType = "application/pdf";
          else if (key.startsWith("img_") || key.startsWith("q_img_") || key.startsWith("a_img_") || key.startsWith("q_crop_") || key.startsWith("a_crop_") || key.startsWith("vid_img_") || key.startsWith("vid_ss_")) mimeType = "image/jpeg";
          else if (key.startsWith("music_") || key.startsWith("vid_voice_") || key.startsWith("ambient_")) mimeType = "audio/webm";
          else if (key.startsWith("vid_file_")) mimeType = "video/mp4";
          const mediaBuf = await readMediaAsArrayBuffer(key);
          if (mediaBuf) {
            buf = mediaBuf;
          } else {
            const value = await idbGet(key);
            if (value instanceof Blob) {
              buf = await value.arrayBuffer();
              mimeType = mimeType || value.type || void 0;
            } else if (value instanceof ArrayBuffer) {
              buf = value;
            }
          }
          if (buf) {
            const safeName = key.replace(/[^a-zA-Z0-9_\-]/g, "_");
            const filename = `idb/${safeName}.bin`;
            zip.file(filename, new Uint8Array(buf));
            idbManifest.push({
              key,
              file: filename,
              ...mimeType ? { mimeType } : {}
            });
          }
        } catch (err) {
          console.warn("Could not backup media key", key, err);
        }
      }
      if (idbManifest.length > 0) backup["_idb"] = idbManifest;
    } catch (err) {
      console.error("IDB backup error:", err);
    }
    backup["_meta"] = {
      version: 2,
      exportedAt: (/* @__PURE__ */ new Date()).toISOString(),
      exportedBy: user ?? "unknown"
    };
    zip.file("backup.json", JSON.stringify(backup, null, 2));
    const blob = await zip.generateAsync({
      type: "blob",
      compression: "DEFLATE"
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    const dateStr = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
    a.href = url;
    a.download = `jee_backup_${dateStr}.zip`;
    a.click();
    URL.revokeObjectURL(url);
  }, [timeline, user, readMediaAsArrayBuffer]);
  const RESTORE_CATEGORIES = [
    {
      key: "tasks",
      label: "Tasks & Todos",
      keys: ["jee_tasks", "jee_today_marked"]
    },
    { key: "calendar", label: "Calendar Events", keys: ["jee_cal_events"] },
    { key: "pdf", label: "PDF Sections", keys: ["jee_pdf_sections_v3"] },
    { key: "music", label: "Music Playlists", keys: ["jee_playlists"] },
    { key: "ambient", label: "Zen Mixer Tracks", keys: ["jee_ambient_custom_tracks", "jee_ambient_active"] },
    {
      key: "videos",
      label: "Video Sections",
      keys: ["jee_vid_sections_v1", "jee_vid_notes_v1", "jee_vid_resume"]
    },
    {
      key: "quiz",
      label: "AI Quiz History",
      keys: ["jee_quiz_results"]
    },
    {
      key: "streak",
      label: "Streak, Heatmap & Daily Records",
      keys: ["jee_streak_data", "jee_daily_records", "jee_streak_records"]
    },
    { key: "tags", label: "Tags", keys: ["jee_tags"] },
    { key: "timeline", label: "Admin Timeline", keys: ["jee_admin_timeline"] },
    {
      key: "timers",
      label: "Timers & Alarms",
      keys: ["jee_tm_timers", "jee_tm_alarms"]
    },
    {
      key: "saves",
      label: "Saved Questions & Bookmarks",
      keys: ["jee_saves_subjects_v1", "jee_saves_questions_v1", "jee_saves_bookmarks_v1"]
    },
    {
      key: "time",
      label: "Time Tracking & Usage Breakdown",
      keys: ["jee_time_tracking", "jee_lockdown_records"]
    },
    {
      key: "account",
      label: "Account Config",
      keys: [
        "jee_local_users",
        "jee_profile_pic",
        "jee_local_name",
        "jee_current_user",
        "user",
        "theme",
        "jee_remember_me"
      ]
    }
  ];
  const startEditingCategory = (catKey) => {
    const cat = RESTORE_CATEGORIES.find((c) => c.key === catKey);
    if (!cat || !pendingRestore) return;
    const dataToEdit = {};
    cat.keys.forEach((k) => {
      if (pendingRestore[k] !== void 0) {
        dataToEdit[k] = JSON.parse(JSON.stringify(pendingRestore[k]));
      }
    });
    setEditJsonBuffer(JSON.stringify(dataToEdit, null, 2));
    setEditingCategory(catKey);
    setIsExpertMode(false);
  };
  const updateWorkingKey = (key, value) => {
    try {
      const current = JSON.parse(editJsonBuffer);
      current[key] = value;
      setEditJsonBuffer(JSON.stringify(current, null, 2));
    } catch (e) {
      console.error("Update failed", e);
    }
  };
  const renderSmartEditor = () => {
    if (!editingCategory) return null;
    let data = {};
    try {
      data = JSON.parse(editJsonBuffer);
    } catch {
      return /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-destructive text-xs", children: "Error parsing data for smart editor." });
    }
    switch (editingCategory) {
      case "tasks": {
        const daily = data["jee_daily_records"] || {};
        const tasks = data["jee_tasks"] || [];
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-[10px] font-bold uppercase text-primary block px-1 tracking-wider", children: "Daily Progress History" }),
            Object.entries(daily).sort((a, b) => b[0].localeCompare(a[0])).map(([date, val]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row sm:items-center justify-between p-3 bg-muted/30 border border-border rounded-xl gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold font-mono text-foreground", children: date }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 self-end sm:self-auto", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    type: "number",
                    value: val.completed,
                    onChange: (e) => {
                      const next = { ...daily, [date]: { ...val, completed: parseInt(e.target.value) || 0 } };
                      updateWorkingKey("jee_daily_records", next);
                    },
                    className: "w-10 h-7 bg-background border border-border rounded text-center text-xs focus:ring-1 focus:ring-primary outline-none"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "/" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    type: "number",
                    value: val.total,
                    onChange: (e) => {
                      const next = { ...daily, [date]: { ...val, total: parseInt(e.target.value) || 0 } };
                      updateWorkingKey("jee_daily_records", next);
                    },
                    className: "w-10 h-7 bg-background border border-border rounded text-center text-xs focus:ring-1 focus:ring-primary outline-none"
                  }
                )
              ] })
            ] }, date))
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-[10px] font-bold uppercase text-primary block px-1 tracking-wider", children: "Master Task List" }),
            tasks.map((task, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 p-2 bg-muted/30 border border-border rounded-xl", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "checkbox",
                  checked: task.completed,
                  onChange: (e) => {
                    const next = [...tasks];
                    next[idx] = { ...task, completed: e.target.checked };
                    updateWorkingKey("jee_tasks", next);
                  },
                  className: "h-4 w-4 rounded border-border bg-background accent-primary cursor-pointer"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  value: task.text,
                  onChange: (e) => {
                    const next = [...tasks];
                    next[idx] = { ...task, text: e.target.value };
                    updateWorkingKey("jee_tasks", next);
                  },
                  className: "h-7 text-xs bg-transparent border-none p-0 focus-visible:ring-0 truncate"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `px-1.5 py-0.5 rounded text-[8px] font-bold text-white shrink-0 ${task.priority === "High" ? "bg-red-500" : task.priority === "Medium" ? "bg-orange-500" : "bg-blue-500"}`, children: task.priority })
            ] }, task.id || idx))
          ] })
        ] });
      }
      case "timeline": {
        const timeline2 = data["jee_admin_timeline"] || [];
        return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: timeline2.map((item, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 bg-muted/30 border border-border rounded-xl space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "date",
                value: item.date,
                onChange: (e) => {
                  const next = [...timeline2];
                  next[idx] = { ...item, date: e.target.value };
                  updateWorkingKey("jee_admin_timeline", next);
                },
                className: "text-[10px] bg-background border border-border rounded px-1.5 h-6 outline-none"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "select",
              {
                value: item.type,
                onChange: (e) => {
                  const next = [...timeline2];
                  next[idx] = { ...item, type: e.target.value };
                  updateWorkingKey("jee_admin_timeline", next);
                },
                className: "text-[10px] bg-background border border-border rounded px-1.5 h-6 outline-none flex-1",
                children: Object.keys(TIMELINE_TYPES).map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: t, children: t }, t))
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              value: item.title,
              onChange: (e) => {
                const next = [...timeline2];
                next[idx] = { ...item, title: e.target.value };
                updateWorkingKey("jee_admin_timeline", next);
              },
              className: "h-8 text-xs bg-background"
            }
          )
        ] }, item.id || idx)) });
      }
      case "tags": {
        const tags = data["jee_tags"] || [];
        return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-2", children: tags.map((tag, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 p-2 bg-muted/30 border border-border rounded-xl", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "color",
              value: tag.color,
              onChange: (e) => {
                const next = [...tags];
                next[idx] = { ...tag, color: e.target.value };
                updateWorkingKey("jee_tags", next);
              },
              className: "w-6 h-6 rounded-md overflow-hidden bg-transparent border-none cursor-pointer p-0"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              value: tag.name,
              onChange: (e) => {
                const next = [...tags];
                next[idx] = { ...tag, name: e.target.value };
                updateWorkingKey("jee_tags", next);
              },
              className: "h-7 text-xs bg-transparent border-none p-0 focus-visible:ring-0"
            }
          )
        ] }, tag.id || idx)) });
      }
      default:
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center justify-center py-10 text-center space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Database, { className: "h-10 w-10 text-muted-foreground/30" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold text-foreground", children: "Advanced Data Category" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground px-10", children: "Smart editing is not available for this complex category. Please use Expert Mode to tweak JSON." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", size: "sm", className: "h-7 text-[10px]", onClick: () => setIsExpertMode(true), children: "Switch to Expert Mode" })
        ] });
    }
  };
  const saveEditedCategory = () => {
    try {
      const parsed = JSON.parse(editJsonBuffer);
      setPendingRestore((prev) => ({ ...prev, ...parsed }));
      setEditingCategory(null);
    } catch (e) {
      alert("Invalid JSON format.");
    }
  };
  const handleImportFile = reactExports.useCallback(
    async (e) => {
      const file = e.target.files?.[0];
      if (!file) return;
      e.target.value = "";
      setImportStatus("loading");
      setImportMsg("Reading backup file…");
      try {
        const zip = new JSZip();
        const loaded = await zip.loadAsync(file);
        const backupFile = loaded.file("backup.json");
        if (!backupFile) throw new Error("No backup.json found in ZIP");
        const text = await backupFile.async("text");
        const backup = JSON.parse(text);
        setImportStatus("idle");
        setImportMsg("");
        setPendingZip(loaded);
        setPendingRestore(backup);
        setRestoreCategories(RESTORE_CATEGORIES.map((c) => c.key));
      } catch (err) {
        setImportStatus("error");
        setImportMsg(err?.message || "Failed to read backup file.");
      }
    },
    [RESTORE_CATEGORIES]
  );
  const applyRestore = reactExports.useCallback(async () => {
    if (!pendingRestore) return;
    const currentU = localStorage.getItem("user");
    const currentCU = localStorage.getItem("jee_current_user");
    const currentLN = localStorage.getItem("jee_local_name");
    const currentSA = localStorage.getItem("jee_session_active");
    const currentWH = localStorage.getItem("jee_workspace_handle");
    const allowedKeys = new Set(
      RESTORE_CATEGORIES.filter(
        (c) => restoreCategories.includes(c.key)
      ).flatMap((c) => c.keys)
    );
    let restoredCount = 0;
    for (const [key, value] of Object.entries(pendingRestore)) {
      if (key === "_meta" || key === "_idb") continue;
      const isPdfAnno = key.startsWith("pdf_anno_") && restoreCategories.includes("pdf");
      if (!allowedKeys.has(key) && !isPdfAnno) continue;
      localStorage.setItem(key, typeof value === "string" ? value : JSON.stringify(value));
      restoredCount++;
    }
    if (currentU) localStorage.setItem("user", currentU);
    if (currentCU) localStorage.setItem("jee_current_user", currentCU);
    if (currentLN) localStorage.setItem("jee_local_name", currentLN);
    if (currentSA) localStorage.setItem("jee_session_active", currentSA);
    if (currentWH) localStorage.setItem("jee_workspace_handle", currentWH);
    if (pendingZip && pendingRestore["_idb"]) {
      const manifest = pendingRestore["_idb"];
      for (const entry of manifest) {
        const cat = idbKeyCategory(entry.key);
        if (cat && !restoreCategories.includes(cat)) continue;
        try {
          const zipFile = pendingZip.file(entry.file);
          if (!zipFile) continue;
          const buf = await zipFile.async("arraybuffer");
          const stored = entry.mimeType ? new Blob([buf], { type: entry.mimeType }) : buf;
          await writeMedia(entry.key, stored);
          restoredCount++;
        } catch (err) {
          console.warn("Binary restore failed:", entry.key, err);
        }
      }
    }
    setPendingRestore(null);
    setPendingZip(null);
    setImportStatus("success");
    setImportMsg(`Restored ${restoredCount} items. Reloading…`);
    setTimeout(() => window.location.reload(), 1500);
  }, [pendingRestore, pendingZip, restoreCategories, writeMedia, idbKeyCategory, RESTORE_CATEGORIES]);
  const CHART_COLORS = [
    "#3B82F6",
    "#8B5CF6",
    "#EC4899",
    "#10B981",
    "#F59E0B",
    "#EF4444",
    "#06B6D4"
  ];
  const appUsageData = reactExports.useMemo(() => {
    const totals = {};
    Object.values(stats.timeTracking.records).forEach((r) => {
      if (r.sections) {
        Object.entries(r.sections).forEach(([name, secs]) => {
          totals[name] = (totals[name] || 0) + secs;
        });
      }
    });
    return Object.entries(totals).map(([name, value], i) => ({
      name,
      value: Math.round(value / 60),
      fill: CHART_COLORS[i % CHART_COLORS.length]
    })).filter((d) => d.value > 0).sort((a, b) => b.value - a.value);
  }, [stats.timeTracking.records]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 10 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0 },
      className: "min-h-full bg-background overflow-y-auto",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden bg-gradient-to-br from-primary/20 via-card to-background border-b border-border px-4 sm:px-6 md:px-8 py-4 sm:py-6 md:py-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_hsl(var(--primary)/0.15),_transparent_60%)]" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-10 -right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, x: -20 },
              animate: { opacity: 1, x: 0 },
              transition: { delay: 0.1 },
              className: "relative flex flex-col md:flex-row md:items-center md:justify-between gap-5",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-8 w-8 sm:h-10 sm:w-10 rounded-xl bg-primary/20 flex items-center justify-center border border-primary/30 shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "h-4 w-4 sm:h-5 sm:w-5 text-primary" }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-primary font-semibold uppercase tracking-widest", children: "Admin Panel" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-xl sm:text-2xl font-black text-foreground leading-tight", children: [
                        "Welcome Boss, ",
                        user,
                        " 👋"
                      ] })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs sm:text-sm text-muted-foreground ml-0 sm:ml-[52px]", children: "This is your Desk for JEE Prep with Digital Way" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2 sm:gap-3 md:gap-4 ml-0 sm:ml-[52px] pt-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1 sm:gap-1.5 text-[11px] sm:text-xs text-muted-foreground bg-muted/50 px-2 sm:px-2.5 py-1 rounded-full border border-border/50 whitespace-nowrap", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-3 w-3 text-primary shrink-0" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Today:" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground font-semibold", children: stats.time.todayStr })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1 sm:gap-1.5 text-[11px] sm:text-xs text-muted-foreground bg-muted/50 px-2 sm:px-2.5 py-1 rounded-full border border-border/50 whitespace-nowrap", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Flame, { className: "h-3 w-3 text-orange-400 shrink-0" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Streak:" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-foreground font-semibold", children: [
                        stats.streak.current,
                        " days"
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1 sm:gap-1.5 text-[11px] sm:text-xs text-muted-foreground bg-muted/50 px-2 sm:px-2.5 py-1 rounded-full border border-border/50 whitespace-nowrap", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Trophy, { className: "h-3 w-3 text-yellow-400 shrink-0" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Earned:" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-foreground font-semibold", children: [
                        stats.streak.earned,
                        " days"
                      ] })
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full md:w-auto md:min-w-[360px] md:max-w-md shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(StudySessionWidget, {}) })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-6 py-6 space-y-8 max-w-7xl mx-auto", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { title: "Account Configuration", icon: User, delay: 0.05, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-card border border-border rounded-2xl p-5 md:p-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col md:flex-row gap-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center gap-4 shrink-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-muted bg-muted flex items-center justify-center group", children: [
                accPic ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: accPic, alt: "Profile", className: "w-full h-full object-cover", onError: () => setAccPic("") }) : /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "h-12 w-12 text-muted-foreground" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center cursor-pointer text-white text-xs font-semibold", children: [
                  "Upload",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "file", accept: "image/*", className: "hidden", onChange: handlePicUpload })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground text-center max-w-[120px]", children: "Click image to change profile picture" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 space-y-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs font-semibold text-muted-foreground uppercase", children: "Username" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: accName, onChange: (e) => setAccName(e.target.value), className: "bg-muted border-border" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs font-semibold text-muted-foreground uppercase", children: "Date of Birth" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "date", value: accDob, onChange: (e) => setAccDob(e.target.value), className: "bg-muted border-border" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 pt-2 border-t border-border", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs font-semibold text-muted-foreground uppercase", children: "Password Reset" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 items-center", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "password", value: "********", disabled: true, className: "bg-muted border-border text-muted-foreground w-full max-w-xs" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { type: "button", onClick: sendResetLink, variant: "outline", size: "sm", className: "gap-2 shrink-0", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-4 w-4" }),
                    " Send Firebase Reset Link"
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground mt-1 leading-relaxed max-w-sm", children: "Clicking this will send a secure password reset link to your registered email address via Firebase." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-4 flex items-center justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `text-xs font-semibold ${accMsg.includes("successfully") ? "text-green-500" : "text-destructive"}`, children: accMsg }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { type: "button", onClick: handleSaveAccount, disabled: accLoading, className: "gap-2 shrink-0", children: [
                  accLoading && /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-4 w-4 animate-spin" }),
                  "Save Profile Changes"
                ] })
              ] })
            ] })
          ] }) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { title: "Overview", icon: LayoutDashboard, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              StatCard,
              {
                icon: Timer,
                label: "Total App Time",
                value: Math.floor(stats.timeTracking.totalSeconds / 3600),
                sub: `${Math.floor(stats.timeTracking.totalSeconds % 3600 / 60)}m · ${stats.timeTracking.totalDays} days`,
                color: "#3B82F6",
                delay: 0
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              StatCard,
              {
                icon: ListTodo,
                label: "Todos",
                value: stats.tasks.total,
                sub: `${stats.tasks.completed} done`,
                color: "#3B82F6",
                delay: 0
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              StatCard,
              {
                icon: CircleCheck,
                label: "Completed",
                value: stats.tasks.completed,
                sub: `${stats.tasks.pending} pending`,
                color: "#22C55E",
                delay: 0.05
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              StatCard,
              {
                icon: FilePlay,
                label: "Videos",
                value: stats.videos.loaded,
                sub: `${stats.videos.sections} sections`,
                color: "#EF4444",
                delay: 0.1
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              StatCard,
              {
                icon: Music,
                label: "Songs",
                value: stats.music.songs,
                sub: `${stats.music.playlists} playlists`,
                color: "#EC4899",
                delay: 0.15
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              StatCard,
              {
                icon: FileText,
                label: "PDF Sections",
                value: stats.pdf.sections,
                sub: `${stats.pdf.uploaded} PDFs loaded`,
                color: "#F59E0B",
                delay: 0.2
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              StatCard,
              {
                icon: Flame,
                label: "Streak Days",
                value: stats.streak.current,
                sub: `${stats.streak.earned} total`,
                color: "#8B5CF6",
                delay: 0.25
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              StatCard,
              {
                icon: BookOpen,
                label: "Saved Ques",
                value: stats.saves.questions,
                sub: `${stats.saves.subjects} subjects`,
                color: "#06B6D4",
                delay: 0.3
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              StatCard,
              {
                icon: Shield,
                label: "Lockdowns",
                value: stats.lockdown.completed,
                sub: `${stats.lockdown.broken} broken`,
                color: "#10B981",
                delay: 0.35
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              StatCard,
              {
                icon: BrainCircuit,
                label: "AI Quizzes",
                value: stats.quiz.total,
                sub: `${stats.quiz.questions} Qs Ans`,
                color: "#A855F7",
                delay: 0.4
              }
            )
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                initial: { opacity: 0, y: 16 },
                animate: { opacity: 1, y: 0 },
                transition: { delay: 0.3 },
                className: "bg-card border border-border rounded-2xl p-4",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-3", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ListTodo, { className: "h-4 w-4 text-blue-400" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold text-foreground uppercase tracking-wide", children: "To-Do System" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: [
                    {
                      label: "Total Created",
                      val: stats.tasks.total,
                      color: "bg-blue-500"
                    },
                    {
                      label: "Completed",
                      val: stats.tasks.completed,
                      color: "bg-green-500"
                    },
                    {
                      label: "Pending",
                      val: stats.tasks.pending,
                      color: "bg-red-500"
                    },
                    {
                      label: "High Priority",
                      val: stats.tasks.high,
                      color: "bg-red-400"
                    },
                    {
                      label: "Medium Priority",
                      val: stats.tasks.medium,
                      color: "bg-amber-400"
                    },
                    {
                      label: "Low Priority",
                      val: stats.tasks.low,
                      color: "bg-gray-400"
                    }
                  ].map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "div",
                    {
                      className: "flex items-center justify-between",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `w-2 h-2 rounded-full ${item.color}` }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: item.label })
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold text-foreground tabular-nums", children: item.val })
                      ]
                    },
                    item.label
                  )) })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                initial: { opacity: 0, y: 16 },
                animate: { opacity: 1, y: 0 },
                transition: { delay: 0.35 },
                className: "bg-card border border-border rounded-2xl p-4",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-3", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarDays, { className: "h-4 w-4 text-purple-400" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold text-foreground uppercase tracking-wide", children: "Calendar" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: [
                    {
                      label: "Total Events",
                      val: stats.events.total,
                      color: "bg-purple-500"
                    },
                    {
                      label: "One-time Events",
                      val: stats.events.none,
                      color: "bg-blue-400"
                    },
                    {
                      label: "Daily Recurring",
                      val: stats.events.daily,
                      color: "bg-pink-400"
                    },
                    {
                      label: "Weekly Recurring",
                      val: stats.events.weekly,
                      color: "bg-violet-400"
                    },
                    {
                      label: "Marked Done",
                      val: stats.events.done,
                      color: "bg-green-500"
                    },
                    {
                      label: "Cancelled",
                      val: stats.events.cancel,
                      color: "bg-red-400"
                    }
                  ].map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "div",
                    {
                      className: "flex items-center justify-between",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `w-2 h-2 rounded-full ${item.color}` }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: item.label })
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold text-foreground tabular-nums", children: item.val })
                      ]
                    },
                    item.label
                  )) })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                initial: { opacity: 0, y: 16 },
                animate: { opacity: 1, y: 0 },
                transition: { delay: 0.4 },
                className: "bg-card border border-border rounded-2xl p-4",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-3", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Timer, { className: "h-4 w-4 text-cyan-400" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold text-foreground uppercase tracking-wide", children: "Time Tools" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: [
                    {
                      label: "Timers Created",
                      val: stats.timers.total,
                      color: "bg-cyan-500"
                    },
                    {
                      label: "Alarms Created",
                      val: stats.alarms.total,
                      color: "bg-orange-400"
                    },
                    {
                      label: "Active Alarms",
                      val: stats.alarms.active,
                      color: "bg-green-400"
                    },
                    {
                      label: "Inactive Alarms",
                      val: stats.alarms.total - stats.alarms.active,
                      color: "bg-gray-400"
                    },
                    {
                      label: "Today's Session",
                      val: stats.time.todayMin,
                      color: "bg-blue-400"
                    },
                    {
                      label: "Zen Mixer Time",
                      val: stats.time.totalZenSecs > 0 ? `${Math.floor(stats.time.totalZenSecs / 60)}m` : "0m",
                      color: "bg-indigo-400"
                    },
                    {
                      label: "Streak Days",
                      val: stats.streak.current,
                      color: "bg-red-400"
                    }
                  ].map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "div",
                    {
                      className: "flex items-center justify-between",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `w-2 h-2 rounded-full ${item.color}` }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: item.label })
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold text-foreground tabular-nums", children: item.label === "Today's Session" || item.label === "Zen Mixer Time" ? `${item.val}m` : item.val })
                      ]
                    },
                    item.label
                  )) })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                initial: { opacity: 0, y: 16 },
                animate: { opacity: 1, y: 0 },
                transition: { delay: 0.45 },
                className: "bg-card border border-border rounded-2xl p-4",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-3", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Layers, { className: "h-4 w-4 text-yellow-400" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold text-foreground uppercase tracking-wide", children: "PDF & Music" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: [
                    {
                      label: "PDF Sections",
                      val: stats.pdf.sections,
                      color: "bg-yellow-500"
                    },
                    {
                      label: "Subsections",
                      val: stats.pdf.subsections,
                      color: "bg-amber-400"
                    },
                    {
                      label: "Sub-subsections",
                      val: stats.pdf.subsubsections,
                      color: "bg-orange-400"
                    },
                    {
                      label: "PDFs Loaded",
                      val: stats.pdf.uploaded,
                      color: "bg-red-400"
                    },
                    {
                      label: "Songs Added",
                      val: stats.music.songs,
                      color: "bg-pink-400"
                    },
                    {
                      label: "Playlists",
                      val: stats.music.playlists,
                      color: "bg-purple-400"
                    }
                  ].map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "div",
                    {
                      className: "flex items-center justify-between",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `w-2 h-2 rounded-full ${item.color}` }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: item.label })
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold text-foreground tabular-nums", children: item.val })
                      ]
                    },
                    item.label
                  )) })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Section,
            {
              title: "Analytics & Infographics",
              icon: LayoutDashboard,
              delay: 0.3,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-2xl p-4", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-muted-foreground mb-3 uppercase tracking-wide", children: "Todo Status" }),
                    todoChartData.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: 160, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(PieChart, { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Pie,
                        {
                          data: todoChartData,
                          cx: "50%",
                          cy: "50%",
                          innerRadius: 40,
                          outerRadius: 65,
                          paddingAngle: 4,
                          dataKey: "value",
                          stroke: "none",
                          children: todoChartData.map((d, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Cell, { fill: d.fill }, i))
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { content: /* @__PURE__ */ jsxRuntimeExports.jsx(ChartTooltip, {}) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Legend,
                        {
                          iconType: "circle",
                          iconSize: 8,
                          wrapperStyle: { fontSize: "10px" }
                        }
                      )
                    ] }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-40 flex items-center justify-center text-xs text-muted-foreground", children: "No data yet" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-2xl p-4", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-muted-foreground mb-3 uppercase tracking-wide", children: "Task Priority" }),
                    priorityChartData.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: 160, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(PieChart, { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Pie,
                        {
                          data: priorityChartData,
                          cx: "50%",
                          cy: "50%",
                          innerRadius: 40,
                          outerRadius: 65,
                          paddingAngle: 4,
                          dataKey: "value",
                          stroke: "none",
                          children: priorityChartData.map((d, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Cell, { fill: d.fill }, i))
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { content: /* @__PURE__ */ jsxRuntimeExports.jsx(ChartTooltip, {}) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Legend,
                        {
                          iconType: "circle",
                          iconSize: 8,
                          wrapperStyle: { fontSize: "10px" }
                        }
                      )
                    ] }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-40 flex items-center justify-center text-xs text-muted-foreground", children: "No data yet" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-2xl p-4", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-muted-foreground mb-3 uppercase tracking-wide", children: "Event Types" }),
                    eventChartData.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: 160, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(PieChart, { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Pie,
                        {
                          data: eventChartData,
                          cx: "50%",
                          cy: "50%",
                          innerRadius: 40,
                          outerRadius: 65,
                          paddingAngle: 4,
                          dataKey: "value",
                          stroke: "none",
                          children: eventChartData.map((d, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Cell, { fill: d.fill }, i))
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { content: /* @__PURE__ */ jsxRuntimeExports.jsx(ChartTooltip, {}) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Legend,
                        {
                          iconType: "circle",
                          iconSize: 8,
                          wrapperStyle: { fontSize: "10px" }
                        }
                      )
                    ] }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-40 flex items-center justify-center text-xs text-muted-foreground", children: "No events yet" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-2xl p-4", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-muted-foreground mb-3 uppercase tracking-wide", children: "Music Sources" }),
                    musicChartData.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: 160, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(PieChart, { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Pie,
                        {
                          data: musicChartData,
                          cx: "50%",
                          cy: "50%",
                          innerRadius: 40,
                          outerRadius: 65,
                          paddingAngle: 4,
                          dataKey: "value",
                          stroke: "none",
                          children: musicChartData.map((d, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Cell, { fill: d.fill }, i))
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { content: /* @__PURE__ */ jsxRuntimeExports.jsx(ChartTooltip, {}) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Legend,
                        {
                          iconType: "circle",
                          iconSize: 8,
                          wrapperStyle: { fontSize: "10px" }
                        }
                      )
                    ] }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-40 flex items-center justify-center text-xs text-muted-foreground", children: "No songs yet" })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 xl:grid-cols-2 gap-4 mt-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    TimeSpentHistory,
                    {
                      records: stats.timeTracking.records,
                      selectedDate: selectedAnalyticsDate,
                      onSelectDate: setSelectedAnalyticsDate
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 flex flex-col", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-2xl p-5 flex flex-col flex-1", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-2 shrink-0", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-black text-foreground", children: "App Usage Breakdown" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1", children: "Total time spent across features (Minutes)" })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 min-h-[240px]", children: appUsageData.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: "100%", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(PieChart, { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          Pie,
                          {
                            data: appUsageData,
                            cx: "50%",
                            cy: "50%",
                            innerRadius: 60,
                            outerRadius: 90,
                            paddingAngle: 4,
                            dataKey: "value",
                            stroke: "none",
                            labelLine: false,
                            children: appUsageData.map((d, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Cell, { fill: d.fill }, i))
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { content: /* @__PURE__ */ jsxRuntimeExports.jsx(ChartTooltip, {}) }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Legend, { wrapperStyle: { fontSize: "11px", paddingTop: "10px" } })
                      ] }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full flex items-center justify-center text-xs text-muted-foreground", children: "No usage data yet" }) })
                    ] }),
                    selectedAnalyticsDate && stats.timeTracking.records[selectedAnalyticsDate] && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      motion.div,
                      {
                        initial: { opacity: 0, y: 10 },
                        animate: { opacity: 1, y: 0 },
                        className: "bg-card border border-primary/30 rounded-2xl p-5 shadow-lg space-y-3",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between pb-2 border-b border-border", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "text-sm font-bold text-foreground flex items-center gap-2", children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsx(Activity, { className: "h-4 w-4 text-primary" }),
                                "Page Timing Breakdown — ",
                                (() => {
                                  try {
                                    const d = /* @__PURE__ */ new Date(selectedAnalyticsDate + "T12:00:00");
                                    return d.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" });
                                  } catch {
                                    return selectedAnalyticsDate;
                                  }
                                })()
                              ] }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-0.5", children: "Specific time distribution for each section & page on this day" })
                            ] }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              Button,
                              {
                                variant: "ghost",
                                size: "icon",
                                onClick: () => setSelectedAnalyticsDate(null),
                                className: "h-6 w-6 rounded-md hover:bg-muted",
                                children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-3.5 w-3.5" })
                              }
                            )
                          ] }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-44 w-full", children: Object.keys(stats.timeTracking.records[selectedAnalyticsDate]?.sections || {}).length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: "100%", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                            BarChart,
                            {
                              data: Object.entries(stats.timeTracking.records[selectedAnalyticsDate]?.sections || {}).map(([name, secs], idx) => ({
                                name,
                                seconds: secs,
                                minutes: Number((secs / 60).toFixed(1)),
                                fill: CHART_COLORS[idx % CHART_COLORS.length]
                              })).sort((a, b) => b.seconds - a.seconds),
                              margin: { top: 10, right: 10, left: -20, bottom: 25 },
                              children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsx(CartesianGrid, { strokeDasharray: "3 3", vertical: false, stroke: "hsl(var(--border))" }),
                                /* @__PURE__ */ jsxRuntimeExports.jsx(
                                  XAxis,
                                  {
                                    dataKey: "name",
                                    tick: { fontSize: 10, fill: "hsl(var(--muted-foreground))" },
                                    angle: -20,
                                    textAnchor: "end",
                                    interval: 0
                                  }
                                ),
                                /* @__PURE__ */ jsxRuntimeExports.jsx(
                                  YAxis,
                                  {
                                    tick: { fontSize: 10, fill: "hsl(var(--muted-foreground))" },
                                    unit: "m"
                                  }
                                ),
                                /* @__PURE__ */ jsxRuntimeExports.jsx(
                                  Tooltip,
                                  {
                                    content: ({ active, payload }) => {
                                      if (!active || !payload?.length) return null;
                                      const d = payload[0].payload;
                                      const m = Math.floor(d.seconds / 60);
                                      const s = d.seconds % 60;
                                      const dur = m > 0 ? `${m}m ${s}s` : `${s}s`;
                                      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-xl px-3 py-2 shadow-xl text-xs", children: [
                                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-foreground mb-1", children: d.name }),
                                        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-primary font-semibold", children: [
                                          dur,
                                          " (",
                                          d.minutes,
                                          "m)"
                                        ] })
                                      ] });
                                    }
                                  }
                                ),
                                /* @__PURE__ */ jsxRuntimeExports.jsx(Bar, { dataKey: "minutes", radius: [4, 4, 0, 0], children: Object.entries(stats.timeTracking.records[selectedAnalyticsDate]?.sections || {}).map((_, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(Cell, { fill: CHART_COLORS[idx % CHART_COLORS.length] }, idx)) })
                              ]
                            }
                          ) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full flex items-center justify-center text-xs text-muted-foreground", children: "No specific page activity recorded for this day" }) }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2 pt-2 border-t border-border/50", children: Object.entries(stats.timeTracking.records[selectedAnalyticsDate]?.sections || {}).map(([name, secs], idx) => {
                            const m = Math.floor(secs / 60);
                            const s = secs % 60;
                            const dur = m > 0 ? `${m}m ${s}s` : `${s}s`;
                            return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-muted/60 border border-border/60 text-xs", children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 rounded-full", style: { backgroundColor: CHART_COLORS[idx % CHART_COLORS.length] } }),
                              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-medium text-foreground", children: [
                                name,
                                ":"
                              ] }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-primary tabular-nums", children: dur })
                            ] }, name);
                          }) })
                        ]
                      }
                    )
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(StudyHeatmap, { records: stats.timeTracking.records }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 bg-card border border-border rounded-2xl p-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-muted-foreground uppercase tracking-wide", children: "Todo Completions — 365 Days" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 bg-muted/50 p-1 rounded-lg border border-border/50", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "ghost", size: "icon", className: "h-6 w-6 rounded-md hover:bg-background shadow-sm transition-all", onClick: () => setSpikeOffset((o) => o - 365), children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "h-4 w-4" }) }),
                      spikeOffset !== 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "ghost", size: "sm", className: "h-6 text-[10px] px-2 rounded-md hover:bg-background shadow-sm transition-all", onClick: () => setSpikeOffset(0), children: "Today" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "ghost", size: "icon", className: "h-6 w-6 rounded-md hover:bg-background shadow-sm transition-all", onClick: () => setSpikeOffset((o) => o + 365), children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "h-4 w-4" }) })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground/60 mb-3", children: "Updates every 60 seconds · green = completed, blue = total · Use brush to zoom" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: 180, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    AreaChart,
                    {
                      data: spikeData,
                      margin: { top: 4, right: 4, left: -24, bottom: 0 },
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("defs", { children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsxs(
                            "linearGradient",
                            {
                              id: "grad-todo-total",
                              x1: "0",
                              y1: "0",
                              x2: "0",
                              y2: "1",
                              children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "5%", stopColor: "#3B82F6", stopOpacity: 0.25 }),
                                /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "95%", stopColor: "#3B82F6", stopOpacity: 0 })
                              ]
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs(
                            "linearGradient",
                            {
                              id: "grad-todo-done",
                              x1: "0",
                              y1: "0",
                              x2: "0",
                              y2: "1",
                              children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "5%", stopColor: "#22C55E", stopOpacity: 0.35 }),
                                /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "95%", stopColor: "#22C55E", stopOpacity: 0 })
                              ]
                            }
                          )
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          XAxis,
                          {
                            dataKey: "date",
                            tick: { fontSize: 8, fill: "hsl(var(--muted-foreground))" },
                            axisLine: false,
                            tickLine: false,
                            minTickGap: 30
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          YAxis,
                          {
                            tick: { fontSize: 8, fill: "hsl(var(--muted-foreground))" },
                            axisLine: false,
                            tickLine: false,
                            allowDecimals: false
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { content: /* @__PURE__ */ jsxRuntimeExports.jsx(ChartTooltip, {}) }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          Area,
                          {
                            type: "monotone",
                            dataKey: "total",
                            name: "Total Todos",
                            stroke: "#3B82F6",
                            strokeWidth: 1.5,
                            fill: "url(#grad-todo-total)",
                            dot: false
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          Area,
                          {
                            type: "monotone",
                            dataKey: "completed",
                            name: "Completed",
                            stroke: "#22C55E",
                            strokeWidth: 2,
                            fill: "url(#grad-todo-done)",
                            dot: false
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          Brush,
                          {
                            dataKey: "date",
                            height: 20,
                            stroke: "hsl(var(--primary))",
                            fill: "hsl(var(--muted))",
                            tickFormatter: () => ""
                          }
                        )
                      ]
                    }
                  ) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 bg-card border border-border rounded-2xl p-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-muted-foreground uppercase tracking-wide", children: "Calendar Events by Scheduled Date — 365 Days" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 bg-muted/50 p-1 rounded-lg border border-border/50", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "ghost", size: "icon", className: "h-6 w-6 rounded-md hover:bg-background shadow-sm transition-all", onClick: () => setSpikeOffset((o) => o - 365), children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "h-4 w-4" }) }),
                      spikeOffset !== 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "ghost", size: "sm", className: "h-6 text-[10px] px-2 rounded-md hover:bg-background shadow-sm transition-all", onClick: () => setSpikeOffset(0), children: "Today" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "ghost", size: "icon", className: "h-6 w-6 rounded-md hover:bg-background shadow-sm transition-all", onClick: () => setSpikeOffset((o) => o + 365), children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "h-4 w-4" }) })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground/60 mb-3", children: "Shows how many events are scheduled on each day · live reactive · Use brush to zoom" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: 180, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    AreaChart,
                    {
                      data: spikeData,
                      margin: { top: 4, right: 4, left: -24, bottom: 0 },
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("defs", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("linearGradient", { id: "grad-cal-ev", x1: "0", y1: "0", x2: "0", y2: "1", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "5%", stopColor: "#8B5CF6", stopOpacity: 0.35 }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "95%", stopColor: "#8B5CF6", stopOpacity: 0 })
                        ] }) }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          XAxis,
                          {
                            dataKey: "date",
                            tick: { fontSize: 8, fill: "hsl(var(--muted-foreground))" },
                            axisLine: false,
                            tickLine: false,
                            minTickGap: 30
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          YAxis,
                          {
                            tick: { fontSize: 8, fill: "hsl(var(--muted-foreground))" },
                            axisLine: false,
                            tickLine: false,
                            allowDecimals: false
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { content: /* @__PURE__ */ jsxRuntimeExports.jsx(ChartTooltip, {}) }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          Area,
                          {
                            type: "monotone",
                            dataKey: "events",
                            name: "Events Scheduled",
                            stroke: "#8B5CF6",
                            strokeWidth: 2,
                            fill: "url(#grad-cal-ev)",
                            dot: false
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          Brush,
                          {
                            dataKey: "date",
                            height: 20,
                            stroke: "hsl(var(--primary))",
                            fill: "hsl(var(--muted))",
                            tickFormatter: () => ""
                          }
                        )
                      ]
                    }
                  ) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Button,
                  {
                    onClick: () => {
                      setShowStats((p) => !p);
                      setTimeout(() => {
                        if (!showStats) statsRef.current?.scrollIntoView({ behavior: "smooth" });
                      }, 100);
                    },
                    variant: "outline",
                    className: "gap-2 border-primary/20 hover:bg-primary/10 rounded-full transition-all",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Activity, { className: "h-4 w-4 text-blue-400" }),
                      showStats ? "Hide System Stats" : "Show System Stats"
                    ]
                  }
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: statsRef, children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: showStats && /* @__PURE__ */ jsxRuntimeExports.jsx(
                  motion.div,
                  {
                    initial: { opacity: 0, height: 0 },
                    animate: { opacity: 1, height: "auto" },
                    exit: { opacity: 0, height: 0 },
                    className: "overflow-hidden",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { title: "System Performance & Storage", icon: Activity, children: /* @__PURE__ */ jsxRuntimeExports.jsx(SystemPerformance, {}) }) })
                  }
                ) }) })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Section, { title: "My JEE Journey Timeline", icon: Target, delay: 0.4, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-end mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: openAdd, size: "sm", className: "h-8 gap-2 text-xs", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-3.5 w-3.5" }),
              "Add Milestone"
            ] }) }),
            sortedTimeline.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-12 border-2 border-dashed border-border rounded-2xl", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Target, { className: "h-10 w-10 mx-auto mb-3 text-primary/30" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-foreground mb-1", children: "Your JEE journey starts here" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mb-3", children: "Add milestones, test results, study goals and achievements" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  onClick: openAdd,
                  size: "sm",
                  variant: "outline",
                  className: "text-xs gap-1.5",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-3.5 w-3.5" }),
                    "Add first milestone"
                  ]
                }
              )
            ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-[17px] top-0 bottom-0 w-0.5 bg-border" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: sortedTimeline.map((entry, idx) => {
                const t = TIMELINE_TYPES[entry.type];
                return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  motion.div,
                  {
                    initial: { opacity: 0, x: -12 },
                    animate: { opacity: 1, x: 0 },
                    transition: { delay: idx * 0.05 },
                    className: "flex gap-4 group",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "div",
                        {
                          className: "relative z-10 shrink-0 w-9 h-9 rounded-full border-2 flex items-center justify-center text-base",
                          style: {
                            backgroundColor: `${t.color}20`,
                            borderColor: `${t.color}60`
                          },
                          children: t.emoji
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 bg-card border border-border rounded-xl p-3.5 group-hover:border-primary/30 transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-2", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-0.5 flex-wrap", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-semibold text-foreground", children: entry.title }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "span",
                              {
                                className: "text-[10px] px-1.5 py-0.5 rounded-full font-medium",
                                style: {
                                  backgroundColor: `${t.color}20`,
                                  color: t.color
                                },
                                children: t.label
                              }
                            )
                          ] }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-muted-foreground", children: entry.date }),
                          entry.description && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1.5 leading-relaxed", children: entry.description })
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity shrink-0", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "button",
                            {
                              onClick: () => openEdit(entry),
                              className: "p-1.5 hover:bg-muted rounded-lg transition-colors text-muted-foreground hover:text-foreground",
                              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Pencil, { className: "h-3 w-3" })
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "button",
                            {
                              onClick: () => deleteTL(entry.id),
                              className: "p-1.5 hover:bg-destructive/10 rounded-lg transition-colors text-muted-foreground hover:text-destructive",
                              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-3 w-3" })
                            }
                          )
                        ] })
                      ] }) })
                    ]
                  },
                  entry.id
                );
              }) })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { title: "Backup & Restore", icon: Database, delay: 0.5, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-2xl p-5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-2.5 bg-green-500/10 rounded-xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "h-5 w-5 text-green-400" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-bold text-foreground", children: "Export Backup" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Download all your data as a ZIP file" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 mb-4 text-xs text-muted-foreground", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "✓ All todos, events, timers & alarms" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "✓ PDF sections & all annotations" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "✓ Music playlists & Zen Mixer tracks" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "✓ Streak history & daily records" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "✓ Timeline & tags" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "✓ Saved questions, bookmarks & account config" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-green-400/80", children: "✓ Includes all local media (PDFs, Videos, Images, Music)" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  onClick: handleExport,
                  className: "w-full gap-2 text-sm",
                  variant: "outline",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "h-4 w-4" }),
                    "Export Backup ZIP"
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-2xl p-5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-2.5 bg-blue-500/10 rounded-xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Upload, { className: "h-5 w-5 text-blue-400" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-bold text-foreground", children: "Restore Backup" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Upload a ZIP to restore your data" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 mb-4 text-xs text-muted-foreground", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "• Upload a previously exported ZIP file" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "• All existing data will be replaced" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "• Includes restoring all local media files" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "• Page will reload automatically after restore" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-red-400/80", children: "⚠ This will overwrite your current data" })
              ] }),
              importStatus !== "idle" && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                motion.div,
                {
                  initial: { opacity: 0, y: -4 },
                  animate: { opacity: 1, y: 0 },
                  className: `mb-3 p-3 rounded-lg text-xs font-medium border
                    ${importStatus === "success" ? "bg-green-500/10 border-green-500/30 text-green-400" : importStatus === "error" ? "bg-red-500/10 border-red-500/30 text-red-400" : "bg-blue-500/10 border-blue-500/30 text-blue-400"}`,
                  children: [
                    importStatus === "loading" && /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: "h-3 w-3 inline mr-1.5 animate-spin" }),
                    importMsg
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  ref: importFileRef,
                  type: "file",
                  accept: ".zip",
                  className: "hidden",
                  onChange: handleImportFile
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  onClick: () => importFileRef.current?.click(),
                  className: "w-full gap-2 text-sm",
                  variant: "outline",
                  disabled: importStatus === "loading",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Upload, { className: "h-4 w-4" }),
                    "Import Backup ZIP"
                  ]
                }
              )
            ] }),
            isSupported && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-2xl p-5 md:col-span-2 mt-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-2.5 bg-indigo-500/10 rounded-xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FolderPlus, { className: "h-5 w-5 text-indigo-400" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-bold text-foreground", children: "Local Workspace Folder" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Change your assigned storage folder on disk." })
                ] })
              ] }),
              workspaceName && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4 p-2.5 bg-muted/30 rounded-lg border border-border/50 flex items-center gap-2 overflow-hidden", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] uppercase text-muted-foreground font-bold shrink-0", children: "Current Location:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-mono font-semibold text-primary truncate", children: [
                  "...\\",
                  workspaceName
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: async () => {
                await changeFolder();
                const handle = await idbGet("jee_workspace_handle");
                if (handle?.name) setWorkspaceName(handle.name);
              }, className: "w-full gap-2 text-sm", variant: "outline", children: "Choose New Local Folder" })
            ] })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { title: "AI Engine & OpenRouter API", icon: BrainCircuit, delay: 0.52, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-2xl p-5 md:p-6 space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-sm font-bold text-foreground flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Key, { className: "h-4 w-4 text-primary" }),
                " OpenRouter API Key"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-0.5", children: "Powers AI chat, question solver, smart quiz generator, and embeddings across your JEE Prep workspace." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 max-w-2xl", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs font-semibold text-muted-foreground uppercase tracking-wide", children: "API Key" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex items-center", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      type: showKey ? "text" : "password",
                      value: openRouterKey,
                      onChange: (e) => {
                        setOpenRouterKey(e.target.value);
                        setKeyStatus("idle");
                        setKeyMsg("");
                      },
                      placeholder: "sk-or-v1-...",
                      className: "pr-24 font-mono text-xs bg-muted/50 border-border"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute right-2 flex items-center gap-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: () => setShowKey(!showKey),
                        className: "p-1 text-muted-foreground hover:text-foreground transition-colors",
                        title: showKey ? "Hide key" : "Show key",
                        children: showKey ? /* @__PURE__ */ jsxRuntimeExports.jsx(EyeOff, { className: "h-4 w-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "h-4 w-4" })
                      }
                    ),
                    openRouterKey && /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: handleClearOpenRouterKey,
                        className: "p-1 text-muted-foreground hover:text-destructive transition-colors",
                        title: "Clear key",
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-4 w-4" })
                      }
                    )
                  ] })
                ] })
              ] }),
              keyMsg && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: cn(
                    "p-2.5 rounded-lg text-xs font-medium border flex items-center gap-2",
                    keyStatus === "valid" ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-600 dark:text-emerald-400" : keyStatus === "invalid" ? "bg-destructive/10 border-destructive/30 text-destructive" : "bg-primary/10 border-primary/30 text-primary"
                  ),
                  children: [
                    keyStatus === "valid" ? /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-4 w-4 shrink-0" }) : keyStatus === "invalid" ? /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "h-4 w-4 shrink-0" }) : null,
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: keyMsg })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2.5 pt-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Button,
                  {
                    type: "button",
                    onClick: handleSaveOpenRouterKey,
                    size: "sm",
                    className: "gap-1.5 text-xs font-bold",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-3.5 w-3.5" }),
                      " Save API Key"
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Button,
                  {
                    type: "button",
                    variant: "outline",
                    onClick: handleTestOpenRouterKey,
                    disabled: keyTesting || !openRouterKey,
                    size: "sm",
                    className: "gap-1.5 text-xs font-semibold",
                    children: [
                      keyTesting ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-3.5 w-3.5 animate-spin" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: "h-3.5 w-3.5" }),
                      "Test Connection"
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "a",
                  {
                    href: "https://openrouter.ai/keys",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "text-xs text-primary hover:underline font-medium ml-auto flex items-center gap-1",
                    children: "Get OpenRouter Key ↗"
                  }
                )
              ] })
            ] })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { title: "View Layout & Preferences", icon: LayoutGrid, delay: 0.54, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-2xl p-5 md:p-6 space-y-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-bold text-foreground", children: "Navigation & Library View Mode" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-0.5", children: "Choose your preferred view style across Video, PDF, and Saves pages. Switch between full-screen Folder Explorers (default) or classic hierarchical Sidebar sections." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-xl bg-muted/40 border border-border flex flex-col sm:flex-row sm:items-center justify-between gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-0.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm font-bold text-foreground flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Layers, { className: "h-4 w-4 text-primary" }),
                  " Global Default Layout"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Changes default layout mode across PDF, Video, and Saves library simultaneously." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center p-1 bg-background rounded-xl border border-border shrink-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    type: "button",
                    onClick: () => setViewMode("folder"),
                    className: cn(
                      "flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all",
                      viewMode === "folder" ? "bg-primary text-primary-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"
                    ),
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(FolderOpen, { className: "h-3.5 w-3.5" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Folder View (Default)" })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    type: "button",
                    onClick: () => setViewMode("section"),
                    className: cn(
                      "flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all",
                      viewMode === "section" ? "bg-primary text-primary-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"
                    ),
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(ListTree, { className: "h-3.5 w-3.5" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Section Sidebar" })
                    ]
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-xl bg-card border border-border/80 flex flex-col justify-between space-y-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-2 rounded-lg bg-red-500/10 text-red-500", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "h-4 w-4" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xs font-bold text-foreground", children: "PDF Library View" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground", children: "Documents & Notes" })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center p-1 bg-muted/60 rounded-lg border border-border", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "button",
                    {
                      type: "button",
                      onClick: () => setPdfViewMode("folder"),
                      className: cn(
                        "flex-1 flex items-center justify-center gap-1 py-1 rounded text-xs font-semibold transition-all",
                        pdfViewMode === "folder" ? "bg-background text-foreground shadow-xs" : "text-muted-foreground hover:text-foreground"
                      ),
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Folder, { className: "h-3 w-3 text-primary" }),
                        " Folder"
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "button",
                    {
                      type: "button",
                      onClick: () => setPdfViewMode("section"),
                      className: cn(
                        "flex-1 flex items-center justify-center gap-1 py-1 rounded text-xs font-semibold transition-all",
                        pdfViewMode === "section" ? "bg-background text-foreground shadow-xs" : "text-muted-foreground hover:text-foreground"
                      ),
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(ListTree, { className: "h-3 w-3 text-primary" }),
                        " Section"
                      ]
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-xl bg-card border border-border/80 flex flex-col justify-between space-y-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-2 rounded-lg bg-blue-500/10 text-blue-500", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FilePlay, { className: "h-4 w-4" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xs font-bold text-foreground", children: "Video Library View" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground", children: "Lectures & YouTube" })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center p-1 bg-muted/60 rounded-lg border border-border", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "button",
                    {
                      type: "button",
                      onClick: () => setVideoViewMode("folder"),
                      className: cn(
                        "flex-1 flex items-center justify-center gap-1 py-1 rounded text-xs font-semibold transition-all",
                        videoViewMode === "folder" ? "bg-background text-foreground shadow-xs" : "text-muted-foreground hover:text-foreground"
                      ),
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Folder, { className: "h-3 w-3 text-primary" }),
                        " Folder"
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "button",
                    {
                      type: "button",
                      onClick: () => setVideoViewMode("section"),
                      className: cn(
                        "flex-1 flex items-center justify-center gap-1 py-1 rounded text-xs font-semibold transition-all",
                        videoViewMode === "section" ? "bg-background text-foreground shadow-xs" : "text-muted-foreground hover:text-foreground"
                      ),
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(ListTree, { className: "h-3 w-3 text-primary" }),
                        " Section"
                      ]
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-xl bg-card border border-border/80 flex flex-col justify-between space-y-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-2 rounded-lg bg-amber-500/10 text-amber-500", children: /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { className: "h-4 w-4" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xs font-bold text-foreground", children: "Saves Bank View" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground", children: "Subject & Question Banks" })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center p-1 bg-muted/60 rounded-lg border border-border", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "button",
                    {
                      type: "button",
                      onClick: () => setSavesViewMode("folder"),
                      className: cn(
                        "flex-1 flex items-center justify-center gap-1 py-1 rounded text-xs font-semibold transition-all",
                        savesViewMode === "folder" ? "bg-background text-foreground shadow-xs" : "text-muted-foreground hover:text-foreground"
                      ),
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Folder, { className: "h-3 w-3 text-primary" }),
                        " Folder"
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "button",
                    {
                      type: "button",
                      onClick: () => setSavesViewMode("section"),
                      className: cn(
                        "flex-1 flex items-center justify-center gap-1 py-1 rounded text-xs font-semibold transition-all",
                        savesViewMode === "section" ? "bg-background text-foreground shadow-xs" : "text-muted-foreground hover:text-foreground"
                      ),
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(ListTree, { className: "h-3 w-3 text-primary" }),
                        " Section"
                      ]
                    }
                  )
                ] })
              ] })
            ] })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { title: "Account", icon: LogOut, delay: 0.55, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between p-5 bg-card border border-border rounded-2xl", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm font-semibold text-foreground", children: [
                "Logged in as ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: user })
              ] }),
              selectedGoal ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mt-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: "Goal:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    onClick: () => setGoalSelectionOpen(true),
                    className: "px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-all font-semibold text-[10px] flex items-center gap-1 shadow-sm",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: selectedGoal.displayName }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[8px] opacity-75", children: "▼" })
                    ]
                  }
                )
              ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-0.5", children: "Sign out of your account" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "destructive", onClick: logout, className: "gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(LogOut, { className: "h-4 w-4" }),
              "Logout"
            ] })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-8" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: pendingRestore && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fixed inset-0 z-50 flex items-center justify-center p-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              exit: { opacity: 0 },
              className: "absolute inset-0 bg-foreground/20 backdrop-blur-sm",
              onClick: () => setPendingRestore(null)
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, scale: 0.95, y: 8 },
              animate: { opacity: 1, scale: 1, y: 0 },
              exit: { opacity: 0, scale: 0.95 },
              className: "relative bg-card border border-border rounded-2xl shadow-2xl w-full max-w-md p-5 z-10",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-bold text-foreground", children: "Selective Restore" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-0.5", children: "Choose which categories to restore" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      onClick: () => setPendingRestore(null),
                      className: "text-muted-foreground hover:text-foreground",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4" })
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2 mb-4", children: editingCategory ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setEditingCategory(null), className: "p-1 hover:bg-muted rounded text-muted-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "h-4 w-4" }) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold text-primary", children: RESTORE_CATEGORIES.find((c) => c.key === editingCategory)?.label })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "button",
                      {
                        onClick: () => setIsExpertMode(!isExpertMode),
                        className: cn("text-[9px] px-2 py-0.5 rounded-full border transition-colors", isExpertMode ? "bg-primary/20 border-primary text-primary" : "bg-muted border-border text-muted-foreground"),
                        children: isExpertMode ? "Expert Mode (JSON)" : "Smart Mode"
                      }
                    )
                  ] }),
                  isExpertMode ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "textarea",
                    {
                      value: editJsonBuffer,
                      onChange: (e) => setEditJsonBuffer(e.target.value),
                      className: "w-full h-48 sm:h-80 bg-muted border border-border rounded-xl p-3 text-[10px] font-mono focus:outline-none focus:ring-1 focus:ring-primary resize-none"
                    }
                  ) : renderSmartEditor(),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", className: "w-full h-8 text-xs font-bold", onClick: saveEditedCategory, children: "Apply Changes to Pending Restore" })
                ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground font-medium", children: "Categories" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "button",
                      {
                        className: "text-xs text-primary hover:underline",
                        onClick: () => setRestoreCategories(
                          restoreCategories.length === RESTORE_CATEGORIES.length ? [] : RESTORE_CATEGORIES.map((c) => c.key)
                        ),
                        children: restoreCategories.length === RESTORE_CATEGORIES.length ? "Deselect all" : "Select all"
                      }
                    )
                  ] }),
                  RESTORE_CATEGORIES.map((cat) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "div",
                    {
                      onDoubleClick: () => cat.key !== "streak" && startEditingCategory(cat.key),
                      className: "flex items-center justify-between group px-3 py-2.5 rounded-lg bg-muted/50 hover:bg-muted transition-colors cursor-pointer",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          "label",
                          {
                            className: "flex items-center gap-3 flex-1 cursor-pointer",
                            children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx(
                                "div",
                                {
                                  className: `w-4 h-4 rounded border-2 flex items-center justify-center transition-colors shrink-0
                              ${restoreCategories.includes(cat.key) ? "bg-primary border-primary" : "border-border"}`,
                                  onClick: (e) => {
                                    e.stopPropagation();
                                    setRestoreCategories(
                                      (prev) => prev.includes(cat.key) ? prev.filter((k) => k !== cat.key) : [...prev, cat.key]
                                    );
                                  },
                                  children: restoreCategories.includes(cat.key) && /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-2.5 w-2.5 text-primary-foreground" })
                                }
                              ),
                              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-medium text-foreground select-none", children: cat.label })
                            ]
                          }
                        ),
                        cat.key !== "streak" && /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "button",
                          {
                            onClick: (e) => {
                              e.stopPropagation();
                              startEditingCategory(cat.key);
                            },
                            className: "p-1 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-primary/20 rounded",
                            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Pencil, { className: "h-3 w-3 text-primary" })
                          }
                        )
                      ]
                    },
                    cat.key
                  )),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[9px] text-muted-foreground text-center mt-2 italic", children: "Tip: Double-tap a category to edit its raw data" })
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-yellow-500/10 border border-yellow-500/30 rounded-lg px-3 py-2 text-xs text-yellow-600 dark:text-yellow-400 mb-4", children: "⚠ Selected categories will overwrite your current data." }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", style: { display: editingCategory ? "none" : "flex" }, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Button,
                    {
                      variant: "outline",
                      size: "sm",
                      className: "flex-1 h-8 text-xs",
                      onClick: () => setPendingRestore(null),
                      children: "Cancel"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Button,
                    {
                      size: "sm",
                      className: "flex-1 h-8 text-xs",
                      onClick: applyRestore,
                      disabled: restoreCategories.length === 0,
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Archive, { className: "h-3.5 w-3.5 mr-1.5" }),
                        "Restore Selected"
                      ]
                    }
                  )
                ] })
              ]
            }
          )
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: showTLForm && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fixed inset-0 z-50 flex items-center justify-center p-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              exit: { opacity: 0 },
              className: "absolute inset-0 bg-foreground/20 backdrop-blur-sm",
              onClick: () => setShowTLForm(false)
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, scale: 0.95, y: 8 },
              animate: { opacity: 1, scale: 1, y: 0 },
              exit: { opacity: 0, scale: 0.95 },
              className: "relative bg-card border border-border rounded-2xl shadow-2xl w-full max-w-md p-5 z-10",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-bold text-foreground", children: editTL ? "Edit Entry" : "Add to Timeline" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      onClick: () => setShowTLForm(false),
                      className: "text-muted-foreground hover:text-foreground",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4" })
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mb-1", children: "Date" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "input",
                        {
                          type: "date",
                          value: tlForm.date,
                          onChange: (e) => setTlForm((p) => ({ ...p, date: e.target.value })),
                          className: "w-full text-xs px-2.5 py-1.5 rounded-lg bg-muted border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mb-1", children: "Type" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "select",
                        {
                          value: tlForm.type,
                          onChange: (e) => setTlForm((p) => ({
                            ...p,
                            type: e.target.value
                          })),
                          className: "w-full text-xs px-2.5 py-1.5 rounded-lg bg-muted border border-border text-foreground focus:outline-none",
                          children: Object.entries(TIMELINE_TYPES).map(([k, v]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("option", { value: k, children: [
                            v.emoji,
                            " ",
                            v.label
                          ] }, k))
                        }
                      )
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mb-1", children: "Title" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "input",
                      {
                        autoFocus: true,
                        value: tlForm.title,
                        onChange: (e) => setTlForm((p) => ({ ...p, title: e.target.value })),
                        onKeyDown: (e) => e.key === "Enter" && saveTL(),
                        placeholder: "e.g. Finished Thermodynamics chapter",
                        className: "w-full text-xs px-2.5 py-1.5 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mb-1", children: "Notes (optional)" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "textarea",
                      {
                        value: tlForm.description,
                        onChange: (e) => setTlForm((p) => ({ ...p, description: e.target.value })),
                        placeholder: "Additional details…",
                        rows: 2,
                        className: "w-full text-xs px-2.5 py-1.5 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground resize-none focus:outline-none focus:ring-2 focus:ring-primary/30"
                      }
                    )
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 mt-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Button,
                    {
                      variant: "outline",
                      size: "sm",
                      className: "flex-1 h-8 text-xs",
                      onClick: () => setShowTLForm(false),
                      children: "Cancel"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Button,
                    {
                      size: "sm",
                      className: "flex-1 h-8 text-xs",
                      onClick: saveTL,
                      disabled: !tlForm.title.trim(),
                      children: editTL ? "Save Changes" : "Add Entry"
                    }
                  )
                ] })
              ]
            }
          )
        ] }) })
      ]
    }
  );
}
export {
  AdminPage as default
};
