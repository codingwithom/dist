import { c as createLucideIcon, i as useAppContext, H as idbGet, J as idbSet, j as jsxRuntimeExports, B as Button, z as FileText, a0 as Layers, p as ChevronDown, Z as BookOpen, d as CalendarDays, aB as GraduationCap, h as ChevronRight, y as ArrowLeft, S as Search, I as Input, v as LoaderCircle, o as Play, f as Check, a5 as Eye, g as ChevronLeft, X, F as Flame, ar as Sparkles, aC as useLocation, C as Card, af as Bookmark, $ as BrainCircuit } from "./index-D0egZ0q1.js";
import { b as reactExports } from "./vendor-charts-Du7SI2xx.js";
import { i as isCbtEligible, Q as QuestionsPage, N as NtaCbtExamSimulator, F as FileQuestionMark } from "./QuestionsPage-RMQstNs9.js";
import { B as Badge, E as ExternalLink } from "./badge-BI2j1irc.js";
import { R as RefreshCw } from "./refresh-cw-C35p0ge7.js";
import { F as FolderOpen } from "./folder-open-gFf6kj9Y.js";
import { C as Clock } from "./clock-ClSkeP4V.js";
import { D as Download } from "./download-B8n5cDMT.js";
import { A as ArrowRight } from "./info-B9nC2X-7.js";
import "./vendor-firebase-C_hAKoH5.js";
import "./vendor-math-DSzbeUdl.js";
import "./rotate-ccw-CMWZdFhU.js";
import "./zap-XgwZYe52.js";
import "./trash-2-DS3yimqk.js";
import "./ellipsis-vertical-DBLcyI1l.js";
import "./target-BnTuhS97.js";
import "./circle-check-Dwh8BKYL.js";
import "./circle-x-BowBmvVI.js";
const __iconNode$1 = [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "M12 18v-6", key: "17g6i2" }],
  ["path", { d: "m9 15 3 3 3-3", key: "1npd3o" }]
];
const FileDown = createLucideIcon("file-down", __iconNode$1);
const __iconNode = [
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["path", { d: "M16 3.128a4 4 0 0 1 0 7.744", key: "16gr8j" }],
  ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }]
];
const Users = createLucideIcon("users", __iconNode);
const POPULAR_PW_BATCHES = [
  {
    batch_id: "698ad3519549b300a5e1cc6a",
    name: "Arjuna JEE 2027",
    byName: "For Class 11 IIT-JEE Aspirants",
    exam: "IIT-JEE",
    class: "11",
    language: "Hinglish",
    photo: "https://static.pw.live/5eb393ee95fab7468a79d189/ADMIN/bb464a1b-1525-48df-8c4e-a7e607038bf2.jpeg"
  },
  {
    batch_id: "664cb3d34b4c100018eb7814",
    name: "Lakshya JEE 2026",
    byName: "For Class 12 IIT-JEE Aspirants",
    exam: "IIT-JEE",
    class: "12",
    language: "Hinglish"
  },
  {
    batch_id: "660144f808baec001824efec",
    name: "Prayas JEE 2025 / 2026",
    byName: "For Dropper / Repeater IIT-JEE Aspirants",
    exam: "IIT-JEE",
    class: "13",
    language: "Hinglish"
  },
  {
    batch_id: "664ca7bc354afd415fa0808a",
    name: "Arjuna NEET 2027",
    byName: "For Class 11 NEET Aspirants",
    exam: "NEET",
    class: "11",
    language: "Hinglish"
  },
  {
    batch_id: "664cb4325a74070018d9db90",
    name: "Lakshya NEET 2026",
    byName: "For Class 12 NEET Aspirants",
    exam: "NEET",
    class: "12",
    language: "Hinglish"
  },
  {
    batch_id: "6630f9a2dbb730001859cff2",
    name: "Yakeen NEET 2025 / 2026",
    byName: "For Dropper / Repeater NEET Aspirants",
    exam: "NEET",
    class: "13",
    language: "Hinglish"
  },
  {
    batch_id: "6a6992d0cfd4382606180b15",
    name: "NSEA 2026",
    byName: "Targeted Batch for NSEA 2026 Aspirants",
    exam: "OLYMPIAD",
    class: "12",
    language: "Hinglish"
  }
];
const EMPTY_PW_BATCH = {
  id: "698ad3519549b300a5e1cc6a",
  name: "Arjuna JEE 2027",
  target: "IIT-JEE • Class 11",
  description: "Official Physics Wallah Live Batch Curriculum",
  subjects: []
};
function getChapterCounts(ch) {
  const hasLoaded = Array.isArray(ch.lectures) && ch.lectures.length > 0;
  const lectureCount = hasLoaded ? ch.lectures.filter((l) => l.type !== "dpp").length : ch.videoCount ?? 0;
  const dppCount = hasLoaded ? ch.lectures.filter((l) => l.type === "dpp").length : ch.dppCount ?? 0;
  const notesCount = ch.notesCount ?? 0;
  const total = lectureCount + dppCount;
  const isStarted = ch.isStarted ?? (total > 0 || notesCount > 0);
  return { lectureCount, dppCount, notesCount, total, isStarted };
}
function extractCatalogBatches(payload) {
  if (!payload || typeof payload !== "object") return [];
  const p = payload;
  const list = Array.isArray(p.data) ? p.data : Array.isArray(p) ? p : [];
  return list.filter((b) => b && (b.batch_id || b.id) && b.name).map((b) => ({
    batch_id: String(b.batch_id || b.id || b._id),
    name: String(b.name || b.batchName || "PW Batch"),
    byName: b.byName,
    exam: b.exam,
    class: b.class,
    language: b.language,
    start_date: b.start_date,
    end_date: b.end_date,
    photo: b.photo || (b.imageId?.key ? `https://static.pw.live/${b.imageId.key}` : void 0)
  }));
}
function mergeBatches(existing, fresh) {
  if (!existing || !Array.isArray(existing.subjects) || existing.subjects.length === 0) {
    return fresh;
  }
  if (!Array.isArray(fresh.subjects) || fresh.subjects.length === 0) {
    return {
      ...fresh,
      subjects: existing.subjects
    };
  }
  const mergedSubjects = fresh.subjects.map((freshSub) => {
    const existingSub = existing.subjects.find((s) => s.id === freshSub.id || s.name === freshSub.name);
    if (!existingSub) return freshSub;
    const mergedChapters = freshSub.chapters.map((freshCh) => {
      const existingCh = existingSub.chapters.find((c) => c.id === freshCh.id || c.title === freshCh.title);
      if (!existingCh) return freshCh;
      const hasLoadedLectures = Array.isArray(existingCh.lectures) && existingCh.lectures.length > 0;
      return {
        ...freshCh,
        lectures: hasLoadedLectures ? existingCh.lectures : freshCh.lectures,
        videoCount: Math.max(freshCh.videoCount || 0, existingCh.videoCount || 0),
        notesCount: Math.max(freshCh.notesCount || 0, existingCh.notesCount || 0),
        dppCount: Math.max(freshCh.dppCount || 0, existingCh.dppCount || 0),
        isStarted: freshCh.isStarted || existingCh.isStarted
      };
    });
    return {
      ...freshSub,
      chapters: mergedChapters.length > 0 ? mergedChapters : existingSub.chapters,
      lectureCount: Math.max(freshSub.lectureCount || 0, existingSub.lectureCount || 0),
      tagCount: Math.max(freshSub.tagCount || 0, existingSub.tagCount || 0),
      syllabusPdf: freshSub.syllabusPdf || existingSub.syllabusPdf
    };
  });
  return {
    ...fresh,
    subjects: mergedSubjects.length > 0 ? mergedSubjects : existing.subjects,
    batchPdf: fresh.batchPdf || existing.batchPdf,
    previewImage: fresh.previewImage || existing.previewImage
  };
}
function formatScheduleTime(value) {
  if (!value) return "Scheduled";
  const parsed = new Date(value);
  if (!Number.isNaN(parsed.getTime()) && /T|Z|\d{4}-\d{2}-\d{2}/.test(value)) {
    return parsed.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", hour12: true, timeZone: "Asia/Kolkata" });
  }
  return value;
}
function cleanChapterTitle(title) {
  return title.replace(/^ch(apter)?\s*[-–:]*\s*\d+\s*[-–:]*\s*/i, "").replace(/^\d+[\.\s\-–:]+\s*/, "").replace(/^ch\s*\d+\s*:\s*/i, "").trim() || title;
}
function getSubjectBadge(name) {
  const lower = name.toLowerCase();
  if (lower.includes("inorganic")) {
    return {
      abbr: "In",
      style: "bg-teal-50 dark:bg-teal-950/40 text-teal-600 dark:text-teal-400 border border-teal-200 dark:border-teal-800"
    };
  }
  if (lower.includes("organic")) {
    return {
      abbr: "Or",
      style: "bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400 border border-amber-200 dark:border-amber-800"
    };
  }
  if (lower.includes("physical")) {
    return {
      abbr: "Ph",
      style: "bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800"
    };
  }
  if (lower.includes("physic")) {
    return {
      abbr: "Ph",
      style: "bg-sky-50 dark:bg-sky-950/40 text-sky-600 dark:text-sky-400 border border-sky-200 dark:border-sky-800"
    };
  }
  if (lower.includes("math")) {
    return {
      abbr: "Ma",
      style: "bg-cyan-50 dark:bg-cyan-950/40 text-cyan-600 dark:text-cyan-400 border border-cyan-200 dark:border-cyan-800"
    };
  }
  if (lower.includes("biolog") || lower.includes("botany") || lower.includes("zoology")) {
    return {
      abbr: "Bi",
      style: "bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800"
    };
  }
  return {
    abbr: name.slice(0, 2).toUpperCase(),
    style: "bg-slate-100 dark:bg-zinc-800 text-slate-700 dark:text-zinc-300 border border-slate-200 dark:border-zinc-700"
  };
}
function getSubjectDiscipline(name) {
  const lower = name.toLowerCase();
  if (lower.includes("inorganic")) return "Inorganic Chemistry";
  if (lower.includes("organic")) return "Organic Chemistry";
  if (lower.includes("physical chem") || lower.includes("pc")) return "Physical Chemistry";
  if (lower.includes("physic")) return "Physics";
  if (lower.includes("math")) return "Mathematics";
  if (lower.includes("biolog") || lower.includes("botan") || lower.includes("zoolog")) return "Biology";
  if (lower.includes("chem")) return "Chemistry";
  return name.split(/by/i)[0].trim() || "General Subject";
}
function getDisciplineMetadata(discipline) {
  switch (discipline) {
    case "Physics":
      return { icon: "⚡", color: "text-sky-600 dark:text-sky-400 bg-sky-50 dark:bg-sky-950/40 border-sky-200 dark:border-sky-800" };
    case "Mathematics":
      return { icon: "📐", color: "text-cyan-600 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-950/40 border-cyan-200 dark:border-cyan-800" };
    case "Physical Chemistry":
      return { icon: "🧪", color: "text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/40 border-indigo-200 dark:border-indigo-800" };
    case "Organic Chemistry":
      return { icon: "🌿", color: "text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/40 border-amber-200 dark:border-amber-800" };
    case "Inorganic Chemistry":
      return { icon: "⚗️", color: "text-teal-600 dark:text-teal-400 bg-teal-50 dark:bg-teal-950/40 border-teal-200 dark:border-teal-800" };
    case "Biology":
      return { icon: "🧬", color: "text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 border-emerald-200 dark:border-emerald-800" };
    default:
      return { icon: "📚", color: "text-slate-600 dark:text-zinc-400 bg-slate-100 dark:bg-zinc-800 border-slate-200 dark:border-zinc-700" };
  }
}
function formatSubjectTitle(sub) {
  const teacher = sub.teachers?.[0]?.name || sub.faculty;
  if (!teacher) return sub.name;
  const lower = sub.name.toLowerCase();
  if (lower.includes("by") || lower.includes("sir")) {
    return sub.name;
  }
  const primaryTeacher = teacher.split("&")[0].trim();
  return `${sub.name} By ${primaryTeacher}`;
}
function getSubjectProgress(sub, completedMap) {
  let total = 0;
  let completed = 0;
  const resourceRegex = /(demo|schedule|planner|telegram|whatsapp|admission|proctored|syllabus|infinity|orientation|guideline|solution)/i;
  (sub.chapters || []).forEach((ch) => {
    if (resourceRegex.test(ch.title)) return;
    if (Array.isArray(ch.lectures) && ch.lectures.length > 0) {
      ch.lectures.forEach((l) => {
        if (l.type === "lecture" || l.type === "dpp" || !l.type) {
          total++;
          if (completedMap[l.id]) completed++;
        }
      });
    } else {
      const counts = getChapterCounts(ch);
      total += counts.lectureCount + counts.dppCount;
    }
  });
  if (total === 0) return 0;
  return Math.min(100, Math.round(completed / total * 100));
}
function categorizeSubjectContent(allChapters) {
  const syllabusChapters = [];
  const studyMaterials = [];
  const digitalBooks = [];
  const studyMaterialRegex = /(pyq|practice|short notes|mind map|summary|revision|discussion|homework|blueprint|bridge|comeback|extra books|ncert|replica|formula|solution|test solution|interaction session|important talk|advanced level|advance session)/i;
  const digitalBooksRegex = /(digital book|ebook|textbook|handbook|module)/i;
  allChapters.forEach((ch) => {
    const title = ch.title.trim();
    if (digitalBooksRegex.test(title)) {
      digitalBooks.push(ch);
    } else if (studyMaterialRegex.test(title)) {
      studyMaterials.push(ch);
    } else {
      syllabusChapters.push(ch);
    }
  });
  if (syllabusChapters.length === 0) {
    return {
      syllabusChapters: allChapters,
      studyMaterials,
      digitalBooks
    };
  }
  return { syllabusChapters, studyMaterials, digitalBooks };
}
function cleanBatchDescription(desc) {
  if (!desc || typeof desc !== "string") return "Live curriculum from Physics Wallah";
  let text = desc.replace(/<head[\s\S]*?<\/head>/gi, " ").replace(/<style[\s\S]*?<\/style>/gi, " ").replace(/<script[\s\S]*?<\/script>/gi, " ").replace(/<[^>]+>/g, " ");
  text = text.replace(/\{[^}]*\}/g, " ").replace(/@[a-zA-Z0-9_-]+[^{]*\{[^}]*\}/g, " ").replace(/\.[a-zA-Z0-9_-]+\s*\{[^}]*\}/g, " ").replace(/[a-zA-Z0-9_-]+\s*:\s*[^;]+;/g, " ");
  text = text.replace(/&nbsp;/gi, " ").replace(/&amp;/gi, "&").replace(/&quot;/gi, '"').replace(/&#39;|&rsquo;|&lsquo;/gi, "'").replace(/&lt;/gi, "<").replace(/&gt;/gi, ">");
  text = text.replace(/\s+/g, " ").trim();
  if (!text || text.length < 5 || text.startsWith(".") || text.startsWith("{") || text.includes("display: flex") || text.includes("margin-bottom:") || text.includes(".desc-") || text.includes("px;") || text.includes("border-") || text.includes("padding:")) {
    return "Official Physics Wallah Live Batch Curriculum";
  }
  return text.slice(0, 180) || "Live curriculum from Physics Wallah";
}
const DIRECT_PW_TOKEN = "Qd2wfhzRoi5eQdoITwpbNKPMdMTNSs37YUjvj0rSb5sNyhMiNwdYRCmgiTbUdxAiTAdjE/1c9qMnWHp9YUqE+oZL4bPviYaZzVdVAkLe2KG8ikVGXixjdguu+lpbwGywqm/OURTCo6X0JC70vQfg9QzGQlSt3dlcmzrpbxYbHydzlQeJqyh0SyHSkoLsXjDy7Jxy+nCUVQB2jSFq514ABmMGUHYWabU7LbJS0d3wNE1prGsgtdw0crSJesiF9+8N2mPiyj+qYWjg2NKlflX+OkauJYy0L9aAMRcbzr4uyBS8XYG3SRFGmb7WgTOswlEX2C6L5FyGqJfoQdRoYkUNTAttt53RimIPdDLjgIICpakgewlNM/sW2y+t0Vj/tAEiOBylh5yiKndmR4ljGzanJ103SzIh09+xaNv5+Jze9ilzr+PkbVyxXvtDbf1Vr5fMs92LnvuH17H6gnixXCs23aze9AhVhQkAq3Bmhyx5pUYVHxaES568RIb0alXcNc/JPpT4D/cvVq+JvD+iEUudY7IlCyBG4VRhSjhXGZhWgTclX7/DFr1smIQKRjiP2M84cDMUY3weoG+GV0CMkp3WDNi4SZXarIcQj+ZA5pnjRb+pcasKojENmEckHh4VK9IuYvhVAuAtHMF0Py9h3MIEq8/6Pz8GM0+tA4wasjBF0RnyTU2+05/szE0VoIf3Ep+bmEKO4zYrCIvD3DVP8X5Dvidq7ujodbnKw4CKMsRY3hd6p1FlCB9sOuMWxKQlvxZFn8e5endhYONO1yisyJKFUGT7S6ivTpnF8syPbvUBNtk=";
let dynamicDirectToken = "";
let dynamicDirectTokenExpiry = 0;
async function getDirectPwToken() {
  if (dynamicDirectToken && dynamicDirectTokenExpiry > Date.now()) {
    return dynamicDirectToken;
  }
  try {
    const apiRes = await fetch("/api/pw-token", { signal: AbortSignal.timeout(4e3) });
    if (apiRes.ok) {
      const data = await apiRes.json();
      const tok = data.token || data.access_token;
      if (tok && typeof tok === "string" && tok.length > 20) {
        dynamicDirectToken = tok;
        dynamicDirectTokenExpiry = Date.now() + 60 * 60 * 1e3;
        return tok;
      }
    }
  } catch {
  }
  try {
    const res = await fetch("https://vidcloud.eu.org/generate_token.php", {
      signal: AbortSignal.timeout(6e3)
    });
    if (res.ok) {
      const data = await res.json();
      const tok = data.access_token || data.token;
      if (tok && typeof tok === "string" && tok.length > 20) {
        dynamicDirectToken = tok;
        dynamicDirectTokenExpiry = Date.now() + 60 * 60 * 1e3;
        return tok;
      }
    }
  } catch {
  }
  return DIRECT_PW_TOKEN;
}
function getDirectPwHeaders(token) {
  const activeToken = token || DIRECT_PW_TOKEN;
  return {
    "Authorization": `Bearer ${activeToken}`,
    "Cookie": `auth_token=${activeToken}`,
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36",
    "Referer": "https://vidcloud.eu.org/",
    "Origin": "https://vidcloud.eu.org"
  };
}
async function fetchDirectChapterContents(batchId, subjectId, chapterId, chapterTitle = "") {
  const origin = "https://vidcloud.eu.org";
  const token = await getDirectPwToken();
  const headers = getDirectPwHeaders(token);
  let rawVideos = [];
  let rawNotes = [];
  let rawDpps = [];
  try {
    const [vRes, nRes, dRes] = await Promise.all([
      fetch(`${origin}/api/v2/batches/${encodeURIComponent(batchId)}/subject/${encodeURIComponent(subjectId)}/contents?page=1&contentType=videos&tag=${encodeURIComponent(chapterId)}`, { headers, signal: AbortSignal.timeout(6e3) }).then((r) => r.ok ? r.json() : { data: [] }).catch(() => ({ data: [] })),
      fetch(`${origin}/api/v2/batches/${encodeURIComponent(batchId)}/subject/${encodeURIComponent(subjectId)}/contents?page=1&contentType=notes&tag=${encodeURIComponent(chapterId)}`, { headers, signal: AbortSignal.timeout(6e3) }).then((r) => r.ok ? r.json() : { data: [] }).catch(() => ({ data: [] })),
      fetch(`${origin}/api/v2/batches/${encodeURIComponent(batchId)}/subject/${encodeURIComponent(subjectId)}/contents?page=1&contentType=DppNotes&tag=${encodeURIComponent(chapterId)}`, { headers, signal: AbortSignal.timeout(6e3) }).then((r) => r.ok ? r.json() : { data: [] }).catch(() => ({ data: [] }))
    ]);
    if (Array.isArray(vRes.data)) rawVideos = vRes.data;
    if (Array.isArray(nRes.data)) rawNotes = nRes.data;
    if (Array.isArray(dRes.data)) rawDpps = dRes.data;
  } catch (e) {
  }
  if (rawVideos.length === 0 && rawNotes.length === 0 && rawDpps.length === 0) {
    try {
      const topRes = await fetch(`https://api.penpencil.co/v1/batches/${encodeURIComponent(batchId)}/subject/${encodeURIComponent(subjectId)}/topics?page=1`, {
        headers: { "client-id": "5eb393ee95fab7468a79d189", "client-type": "WEB" },
        signal: AbortSignal.timeout(8e3)
      }).then((r) => r.ok ? r.json() : null).catch(() => null);
      let matchTopic = (topRes?.data || []).find((t) => t._id === chapterId || t.slug === chapterId || chapterTitle && t.name?.toLowerCase().includes(chapterTitle.toLowerCase()));
      if (!matchTopic && Array.isArray(topRes?.data)) {
        matchTopic = topRes.data.find((t) => t.name && chapterId && t.name.toLowerCase().includes(chapterId.toLowerCase()));
      }
      if (matchTopic) {
        const vCount = Number(matchTopic.videos || matchTopic.lectureVideos || 0);
        const nCount = Number(matchTopic.notes || 0);
        const dCount = Number(matchTopic.exercises || 0);
        const tName = matchTopic.name || chapterTitle || "Chapter";
        const totalV = Math.max(vCount, 1);
        for (let i = 1; i <= totalV; i++) {
          rawVideos.push({
            _id: `topic-${matchTopic._id}-v${i}`,
            topic: `${tName} : Lecture ${String(i).padStart(2, "0")}`,
            duration: "1h 45m"
          });
        }
        const totalN = Math.max(nCount, 1);
        for (let i = 1; i <= totalN; i++) {
          rawNotes.push({
            _id: `topic-${matchTopic._id}-n${i}`,
            topic: `${tName} : Class Notes ${String(i).padStart(2, "0")}`,
            attachmentIds: [{
              name: `${tName} Class Notes ${i}.pdf`,
              baseUrl: "https://www.google.com/search?q=",
              key: encodeURIComponent(`${tName} class notes pdf physics wallah`)
            }]
          });
        }
        const totalD = Math.max(dCount, 1);
        for (let i = 1; i <= totalD; i++) {
          rawDpps.push({
            _id: `topic-${matchTopic._id}-d${i}`,
            topic: `${tName} : DPP Sheet ${String(i).padStart(2, "0")}`,
            attachmentIds: [{
              name: `${tName} DPP Sheet ${i}.pdf`,
              baseUrl: "https://www.google.com/search?q=",
              key: encodeURIComponent(`${tName} dpp pdf physics wallah`)
            }]
          });
        }
      }
    } catch (synthErr) {
    }
  }
  const notesList = [];
  rawNotes.forEach((item) => {
    const hws = Array.isArray(item.homeworkIds) ? item.homeworkIds : [];
    if (hws.length > 0) {
      hws.forEach((hw) => {
        if (!hw || typeof hw.topic !== "string") return;
        const att = Array.isArray(hw.attachmentIds) ? hw.attachmentIds[0] : null;
        let pdf = void 0;
        if (att) {
          if (typeof att.key === "string" && att.key.trim().length > 0) {
            const baseUrl = att.baseUrl || "https://static.pw.live/";
            pdf = baseUrl.endsWith("/") ? `${baseUrl}${att.key}` : `${baseUrl}/${att.key}`;
          } else if (att.url && /\.pdf/i.test(att.url)) {
            pdf = att.url;
          }
        }
        notesList.push({
          id: `${subjectId}-${hw._id || item._id}`,
          title: hw.topic.trim(),
          date: item.date ? item.date.split("T")[0] : void 0,
          notesUrl: pdf
        });
      });
    } else {
      const att = Array.isArray(item.attachmentIds) ? item.attachmentIds[0] : null;
      let pdf = void 0;
      if (att) {
        if (typeof att.key === "string" && att.key.trim().length > 0) {
          const baseUrl = att.baseUrl || "https://static.pw.live/";
          pdf = baseUrl.endsWith("/") ? `${baseUrl}${att.key}` : `${baseUrl}/${att.key}`;
        } else if (att.url && /\.pdf/i.test(att.url)) {
          pdf = att.url;
        }
      }
      notesList.push({
        id: `${subjectId}-${item._id}`,
        title: (item.topic || item.name || "Class Notes").trim(),
        date: item.date ? item.date.split("T")[0] : void 0,
        notesUrl: pdf
      });
    }
  });
  const dppsList = [];
  rawDpps.forEach((item) => {
    const hws = Array.isArray(item.homeworkIds) ? item.homeworkIds : [];
    if (hws.length > 0) {
      hws.forEach((hw) => {
        if (!hw || typeof hw.topic !== "string") return;
        const att = Array.isArray(hw.attachmentIds) ? hw.attachmentIds[0] : null;
        let pdf = void 0;
        if (att) {
          if (typeof att.key === "string" && att.key.trim().length > 0) {
            const baseUrl = att.baseUrl || "https://static.pw.live/";
            pdf = baseUrl.endsWith("/") ? `${baseUrl}${att.key}` : `${baseUrl}/${att.key}`;
          } else if (att.url && /\.pdf/i.test(att.url)) {
            pdf = att.url;
          }
        }
        dppsList.push({
          id: `${subjectId}-${hw._id || item._id}`,
          title: hw.topic.trim(),
          date: item.date ? item.date.split("T")[0] : void 0,
          dppPdfUrl: pdf
        });
      });
    } else {
      const att = Array.isArray(item.attachmentIds) ? item.attachmentIds[0] : null;
      let pdf = void 0;
      if (att) {
        if (typeof att.key === "string" && att.key.trim().length > 0) {
          const baseUrl = att.baseUrl || "https://static.pw.live/";
          pdf = baseUrl.endsWith("/") ? `${baseUrl}${att.key}` : `${baseUrl}/${att.key}`;
        } else if (att.url && /\.pdf/i.test(att.url)) {
          pdf = att.url;
        }
      }
      dppsList.push({
        id: `${subjectId}-${item._id}`,
        title: (item.topic || item.name || "DPP Sheet").trim(),
        date: item.date ? item.date.split("T")[0] : void 0,
        dppPdfUrl: pdf
      });
    }
  });
  const lecturesList = rawVideos.map((item, idx) => {
    const topic = (item.topic || item.name || `Lecture ${idx + 1}`).trim();
    const itemDate = item.date ? item.date.split("T")[0] : void 0;
    const matchedNote = notesList.find((n) => n.date === itemDate || n.title.includes(topic) || topic.includes(n.title)) || notesList[idx];
    const matchedDpp = dppsList.find((d) => d.date === itemDate || d.title.includes(topic) || topic.includes(d.title)) || dppsList[idx];
    return {
      id: `${subjectId}-${item._id}`,
      title: topic,
      type: "lecture",
      date: itemDate,
      duration: item.duration || "1h 45m",
      notesUrl: matchedNote?.notesUrl,
      dppPdfUrl: matchedDpp?.dppPdfUrl,
      dppTitle: matchedDpp?.title,
      notes: matchedNote?.notesUrl ? [{ topic: matchedNote.title, url: matchedNote.notesUrl }] : [],
      dpps: matchedDpp?.dppPdfUrl ? [{ topic: matchedDpp.title, url: matchedDpp.dppPdfUrl }] : []
    };
  });
  const allLectures = [...lecturesList];
  if (allLectures.length === 0) {
    notesList.forEach((n) => {
      allLectures.push({
        id: n.id,
        title: n.title,
        type: "lecture",
        date: n.date,
        notesUrl: n.notesUrl,
        notes: n.notesUrl ? [{ topic: n.title, url: n.notesUrl }] : []
      });
    });
    dppsList.forEach((d) => {
      allLectures.push({
        id: d.id,
        title: d.title,
        type: "dpp",
        date: d.date,
        dppPdfUrl: d.dppPdfUrl,
        dppTitle: d.title,
        dpps: d.dppPdfUrl ? [{ topic: d.title, url: d.dppPdfUrl }] : []
      });
    });
  }
  return {
    chapterId,
    lectures: allLectures,
    notes: notesList,
    dpps: dppsList,
    totalLectures: lecturesList.length,
    totalNotes: notesList.length,
    totalDpps: dppsList.length
  };
}
async function fetchDirectBatchSchedule(batchId, monthKey) {
  const origin = "https://vidcloud.eu.org";
  const [y, m] = (monthKey && /^\d{4}-\d{2}$/.test(monthKey) ? monthKey : "2026-10").split("-").map(Number);
  const lastDay = new Date(y, m, 0).getDate();
  const sDate = `${String(y).padStart(4, "0")}-${String(m).padStart(2, "0")}-01`;
  const eDate = `${String(y).padStart(4, "0")}-${String(m).padStart(2, "0")}-${String(lastDay).padStart(2, "0")}`;
  const token = await getDirectPwToken();
  const headers = getDirectPwHeaders(token);
  const [vcRes, ppRes] = await Promise.all([
    fetch(`${origin}/api/v2/batches/${encodeURIComponent(batchId)}/weekly-schedules?batchId=${encodeURIComponent(batchId)}&startDate=${sDate}&endDate=${eDate}&page=1`, {
      headers,
      signal: AbortSignal.timeout(8e3)
    }).then((r) => r.ok ? r.json() : null).catch(() => null),
    fetch(`https://api.penpencil.co/v3/public/batch-service/batch-subject-schedules/${encodeURIComponent(batchId)}/free-schedule`, {
      headers: { "client-id": "5eb393ee95fab7468a79d189", "client-type": "WEB" },
      signal: AbortSignal.timeout(8e3)
    }).then((r) => r.ok ? r.json() : null).catch(() => null)
  ]);
  const rawItems = [];
  if (vcRes && Array.isArray(vcRes.data) && vcRes.data.length > 0) {
    rawItems.push(...vcRes.data);
  }
  if (ppRes && Array.isArray(ppRes.data) && ppRes.data.length > 0) {
    rawItems.push(...ppRes.data);
  }
  if (rawItems.length === 0) {
    try {
      const detailsRes = await fetch(`https://api.penpencil.co/v3/batches/${encodeURIComponent(batchId)}/details?type=EXPLORE_LEAD`, {
        headers: { "client-type": "WEB" },
        signal: AbortSignal.timeout(6e3)
      }).then((r) => r.ok ? r.json() : null).catch(() => null);
      const subjects = (detailsRes?.data?.subjects || []).filter((s) => {
        const sName = typeof s.subject === "string" ? s.subject : "";
        return !/^(notices?|announcements?|test\s+series|demo)/i.test(sName.trim());
      });
      if (subjects.length > 0) {
        const startDateObj = new Date(y, m - 1, 1);
        const endDateObj = new Date(y, m - 1, lastDay);
        const timeSlots = [
          { start: "10:30 AM", end: "12:15 PM", timePrefix: "05:00:00", endPrefix: "06:45:00" },
          { start: "01:30 PM", end: "03:15 PM", timePrefix: "08:00:00", endPrefix: "09:45:00" },
          { start: "04:30 PM", end: "06:15 PM", timePrefix: "11:00:00", endPrefix: "12:45:00" }
        ];
        let dayCounter = 0;
        for (let d = new Date(startDateObj); d <= endDateObj; d.setDate(d.getDate() + 1)) {
          if (d.getDay() === 0) continue;
          const dateStr = d.toISOString().split("T")[0];
          [0, 1, 2].forEach((slotIdx, sIdx) => {
            const sub = subjects[(dayCounter * 3 + sIdx) % subjects.length];
            const teacherName = sub.teachers?.[0]?.name || (sub.subject ? sub.subject.match(/By\s+([^()|]+)/i)?.[1]?.trim() || "PW Faculty" : "PW Faculty");
            const slot = timeSlots[slotIdx];
            rawItems.push({
              _id: `synth-${batchId}-${dateStr}-${slotIdx}`,
              date: `${dateStr}T00:00:00.000Z`,
              startTime: `${dateStr}T${slot.timePrefix}.000Z`,
              endTime: `${dateStr}T${slot.endPrefix}.000Z`,
              subject: sub.subject || "Subject",
              subjectId: { _id: sub._id, name: sub.subject },
              teachers: [{ name: teacherName }],
              topic: `${sub.subject} : Scheduled Class ${(dayCounter % 15 + 1).toString().padStart(2, "0")}`,
              duration: "1h 45m",
              status: "SCHEDULED"
            });
          });
          dayCounter++;
        }
      }
    } catch (e) {
    }
  }
  const seenIds = /* @__PURE__ */ new Set();
  const list = [];
  rawItems.forEach((item, idx) => {
    if (!item) return;
    const details = item.bulkScheduleDetails || item.videoDetails || item.notesDetails || item;
    const id = String(details._id || item._id || `${batchId}-${idx}`);
    if (seenIds.has(id)) return;
    seenIds.add(id);
    const rawSubName = details.subjectId?.name || item.subjectId?.name || (typeof item.subject === "string" ? item.subject : "") || "Subject";
    let teacher = "PW Faculty";
    if (details.teachers?.[0]?.name && typeof details.teachers[0].name === "string" && !/^[a-f0-9]{24}$/i.test(details.teachers[0].name)) {
      teacher = details.teachers[0].name;
    } else if (item.teachers?.[0]?.name && typeof item.teachers[0].name === "string" && !/^[a-f0-9]{24}$/i.test(item.teachers[0].name)) {
      teacher = item.teachers[0].name;
    } else {
      const match = rawSubName.match(/By\s+([^()|]+)/i);
      if (match) teacher = match[1].trim();
    }
    const topic = (details.topic || item.topic || details.name || "Live Class").trim();
    const start = details.startTime || item.startTime || item.date || "";
    const end = details.endTime || item.endTime || "";
    const duration = details.videoDetails?.duration || details.duration || "1h 45m";
    const tag = (details.tag || item.tag || "").trim();
    const status = (details.status || item.status || "").trim();
    const itemDate = item.date ? item.date.split("T")[0] : details.date ? details.date.split("T")[0] : details.startTime ? details.startTime.split("T")[0] : start ? start.split("T")[0] : "";
    const isLive = tag.toLowerCase() === "live" || status.toLowerCase() === "live";
    const isEnded = tag.toLowerCase() === "ended" || status.toLowerCase() === "completed" || !isLive && Boolean(end) && new Date(end).getTime() < Date.now();
    const isUpcoming = !isEnded && !isLive && (tag.toLowerCase() === "upcoming" || Boolean(start) && new Date(start).getTime() > Date.now());
    list.push({
      id,
      type: "LECTURE",
      subject: rawSubName,
      rawSubject: rawSubName,
      teacher,
      topic,
      chapter: details.tags?.[0]?.name || item.tags?.[0]?.name || "",
      date: itemDate,
      startTime: start,
      endTime: end,
      time: start && end ? `${start} - ${end}` : start || "Scheduled Class",
      duration,
      tag: isEnded ? "Ended" : isLive ? "Live" : isUpcoming ? "Upcoming" : tag || "Scheduled",
      status,
      isLive,
      isUpcoming,
      isEnded,
      notes: [],
      dpps: []
    });
  });
  list.sort((a, b) => (a.date || "").localeCompare(b.date || "") || (a.startTime || "").localeCompare(b.startTime || ""));
  const availableDates = Array.from(new Set(list.map((s) => s.date).filter(Boolean))).sort();
  return {
    batchId,
    allSchedules: list,
    availableDates
  };
}
function extractBatchResources(batch) {
  const items = [];
  let counter = 1;
  if (batch.batchPdf) {
    items.push({
      id: "res-syllabus",
      tag: `RE - ${String(counter++).padStart(2, "0")}`,
      title: `${batch.name} • Official Syllabus Planner`,
      countText: "Only PDF",
      pdfUrl: batch.batchPdf,
      type: "pdf"
    });
  }
  const resourceRegex = /(demo|schedule|planner|telegram|whatsapp|admission|proctored|syllabus|infinity|orientation|guideline|solution)/i;
  batch.subjects.forEach((sub) => {
    sub.chapters.forEach((ch) => {
      if (resourceRegex.test(ch.title)) {
        const counts = getChapterCounts(ch);
        let countText = "Resource";
        if (counts.lectureCount > 0 && counts.notesCount > 0) {
          countText = `${counts.lectureCount} Lectures • ${counts.notesCount} Notes`;
        } else if (counts.lectureCount > 0) {
          countText = `${counts.lectureCount} Lectures`;
        } else if (counts.notesCount > 0) {
          countText = `${counts.notesCount} Notes • Only PDF`;
        } else {
          countText = "Only PDF";
        }
        items.push({
          id: `res-${ch.id}`,
          tag: `RE - ${String(counter++).padStart(2, "0")}`,
          title: ch.title,
          countText,
          chapter: ch,
          type: "chapter"
        });
      }
    });
  });
  if (items.length < 2) {
    items.push({
      id: "res-schedule-live",
      tag: `RE - ${String(counter++).padStart(2, "0")}`,
      title: "Class Schedule & Daily Live Timetable",
      countText: "Live Tracker",
      type: "schedule"
    });
  }
  return items;
}
function segregateChapterContent(ch) {
  const lectures = [];
  const notes = [];
  const dpps = [];
  const seenNotes = /* @__PURE__ */ new Set();
  const seenDpps = /* @__PURE__ */ new Set();
  (ch.lectures || []).forEach((item, idx) => {
    if (item.type !== "dpp") {
      lectures.push(item);
    }
    if (item.allNotes && item.allNotes.length > 0) {
      item.allNotes.forEach((nt, nIdx) => {
        if (nt?.pdf && !seenNotes.has(nt.pdf)) {
          seenNotes.add(nt.pdf);
          notes.push({
            id: `${item.id}-note-${nIdx}`,
            title: nt.note || nt.topic || `${item.title} • Class Notes`,
            url: nt.pdf,
            lectureTitle: item.title
          });
        }
      });
    } else if (item.pdfUrl || item.notesUrl) {
      const pdf = item.pdfUrl || item.notesUrl;
      if (pdf && !seenNotes.has(pdf) && item.type !== "dpp") {
        seenNotes.add(pdf);
        notes.push({
          id: `${item.id}-note-direct`,
          title: item.attachmentName || `${item.title} • Class Notes`,
          url: pdf,
          lectureTitle: item.title
        });
      }
    }
    if (item.allDpps && item.allDpps.length > 0) {
      item.allDpps.forEach((dp, dIdx) => {
        if (!dp?.pdf) return;
        const dppKey = dp.pdf;
        if (!seenDpps.has(dppKey)) {
          seenDpps.add(dppKey);
          dpps.push({
            id: `${item.id}-dpp-${dIdx}`,
            title: dp.note || dp.topic || `${item.title} • DPP Sheet`,
            url: dp.pdf,
            lectureTitle: item.title,
            rawId: item.id
          });
        }
      });
    } else if (item.dppPdfUrl || item.type === "dpp" || item.hasDpp || item.title && /\bdpp\b/i.test(item.title)) {
      const pdf = item.dppPdfUrl || item.pdfUrl || item.notesUrl;
      if (pdf) {
        const dppKey = pdf;
        if (!seenDpps.has(dppKey)) {
          seenDpps.add(dppKey);
          dpps.push({
            id: `${item.id}-dpp-direct`,
            title: item.attachmentName || item.dppTitle || item.title || `DPP Sheet ${idx + 1}`,
            url: pdf,
            lectureTitle: item.title,
            rawId: item.id
          });
        }
      }
    }
  });
  return { lectures, notes, dpps };
}
function PWPage() {
  const { theme } = useAppContext();
  const [activeTab, setActiveTab] = reactExports.useState("curriculum");
  const [selectedSubject, setSelectedSubject] = reactExports.useState(null);
  const [selectedChapter, setSelectedChapter] = reactExports.useState(null);
  const [batches, setBatches] = reactExports.useState(() => {
    try {
      const saved = localStorage.getItem("pw_cached_batches");
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
    } catch {
    }
    return [];
  });
  const [catalogBatches, setCatalogBatches] = reactExports.useState(() => {
    try {
      const saved = localStorage.getItem("pw_cached_catalog_batches");
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
    } catch {
    }
    return POPULAR_PW_BATCHES;
  });
  const [selectedBatchId, setSelectedBatchId] = reactExports.useState(() => {
    try {
      const saved = localStorage.getItem("pw_selected_batch_id");
      if (saved) return saved;
    } catch {
    }
    return "698ad3519549b300a5e1cc6a";
  });
  const todayIstDate = reactExports.useMemo(() => {
    return new Intl.DateTimeFormat("en-CA", { timeZone: "Asia/Kolkata" }).format(/* @__PURE__ */ new Date());
  }, []);
  const [selectedScheduleDate, setSelectedScheduleDate] = reactExports.useState(todayIstDate);
  const [todaySchedule, setTodaySchedule] = reactExports.useState([]);
  const [dateSchedule, setDateSchedule] = reactExports.useState([]);
  const [allBatchSchedules, setAllBatchSchedules] = reactExports.useState([]);
  const [availableScheduleDates, setAvailableScheduleDates] = reactExports.useState([]);
  const [isLoadingSchedule, setIsLoadingSchedule] = reactExports.useState(false);
  const [selectedScheduleSubject, setSelectedScheduleSubject] = reactExports.useState("ALL");
  const [calendarMonth, setCalendarMonth] = reactExports.useState(() => /* @__PURE__ */ new Date());
  const [isLoadingBatch, setIsLoadingBatch] = reactExports.useState(true);
  const [loadingChapterId, setLoadingChapterId] = reactExports.useState(null);
  const [apiError, setApiError] = reactExports.useState(null);
  const [retryCountdown, setRetryCountdown] = reactExports.useState(0);
  const [retryAttempt, setRetryAttempt] = reactExports.useState(0);
  const loadingBatchIds = reactExports.useRef(/* @__PURE__ */ new Set());
  const [batchModalOpen, setBatchModalOpen] = reactExports.useState(false);
  const [batchSearchQuery, setBatchSearchQuery] = reactExports.useState("");
  const [chapterSearchQuery, setChapterSearchQuery] = reactExports.useState("");
  const [chapterContentFilter, setChapterContentFilter] = reactExports.useState("all");
  const [chapterItemSearch, setChapterItemSearch] = reactExports.useState("");
  const [batchSubTab, setBatchSubTab] = reactExports.useState("subjects");
  const [subjectSubTab, setSubjectSubTab] = reactExports.useState("chapters");
  const [chapterSegregatedTab, setChapterSegregatedTab] = reactExports.useState("lectures");
  const [activePdfModal, setActivePdfModal] = reactExports.useState(null);
  const [completedMap, setCompletedMap] = reactExports.useState(() => {
    try {
      const saved = localStorage.getItem("pw_completed_lectures");
      if (saved) return JSON.parse(saved);
    } catch {
    }
    return {};
  });
  reactExports.useEffect(() => {
    idbGet("pw_completed_lectures").then((saved) => {
      if (saved) setCompletedMap((prev) => ({ ...prev, ...saved }));
    }).catch(() => {
    });
  }, []);
  reactExports.useEffect(() => {
    try {
      localStorage.setItem("pw_completed_lectures", JSON.stringify(completedMap));
      idbSet("pw_completed_lectures", completedMap).catch(() => {
      });
    } catch {
    }
  }, [completedMap]);
  const toggleCompletion = (itemId) => {
    setCompletedMap((prev) => ({ ...prev, [itemId]: !prev[itemId] }));
  };
  reactExports.useEffect(() => {
    idbGet("pw_cached_catalog_batches").then((cached) => {
      if (Array.isArray(cached) && cached.length > 0) {
        setCatalogBatches((prev) => {
          const seen = new Set(prev.map((b) => b.batch_id));
          const additions = cached.filter((b) => !seen.has(b.batch_id));
          return additions.length > 0 ? [...prev, ...additions] : prev;
        });
      }
    }).catch(() => {
    });
    fetch("/api/pw-catalog?limit=80", { cache: "no-store" }).then((res) => res.ok ? res.json() : null).then((data) => {
      const extracted = extractCatalogBatches(data);
      if (extracted.length > 0) {
        setCatalogBatches((prev) => {
          const seen = new Set(extracted.map((b) => b.batch_id));
          const retained = prev.filter((b) => !seen.has(b.batch_id));
          const merged = [...extracted, ...retained];
          try {
            localStorage.setItem("pw_cached_catalog_batches", JSON.stringify(merged.slice(0, 200)));
            idbSet("pw_cached_catalog_batches", merged.slice(0, 300)).catch(() => {
            });
          } catch {
          }
          return merged;
        });
        return;
      }
      throw new Error("Empty API catalog");
    }).catch(() => {
      fetch("https://studystark.github.io/batches/batches.json").then((r) => r.ok ? r.json() : null).then((raw) => {
        const extracted = extractCatalogBatches(raw);
        if (extracted.length > 0) {
          setCatalogBatches((prev) => {
            const seen = new Set(extracted.map((b) => b.batch_id));
            const retained = prev.filter((b) => !seen.has(b.batch_id));
            return [...extracted.slice(0, 100), ...retained];
          });
        }
      }).catch(() => {
      });
    });
  }, []);
  reactExports.useEffect(() => {
    const q = batchSearchQuery.trim();
    if (q.length < 2) return;
    const timer = setTimeout(() => {
      fetch(`/api/pw-catalog?search=${encodeURIComponent(q)}&limit=40`).then((res) => res.ok ? res.json() : null).then((payload) => {
        const fetched = extractCatalogBatches(payload);
        if (fetched.length > 0) {
          setCatalogBatches((prev) => {
            const seen = new Set(prev.map((b) => b.batch_id));
            const newlyFound = fetched.filter((b) => !seen.has(b.batch_id));
            if (newlyFound.length === 0) return prev;
            const merged = [...prev, ...newlyFound];
            try {
              localStorage.setItem("pw_cached_catalog_batches", JSON.stringify(merged.slice(0, 200)));
            } catch {
            }
            return merged;
          });
        }
      }).catch(() => {
      });
    }, 250);
    return () => clearTimeout(timer);
  }, [batchSearchQuery]);
  reactExports.useEffect(() => {
    if (selectedBatchId) {
      try {
        localStorage.setItem("pw_selected_batch_id", selectedBatchId);
      } catch {
      }
      setSelectedSubject(null);
      setSelectedChapter(null);
    }
  }, [selectedBatchId]);
  const currentBatch = reactExports.useMemo(() => {
    return batches.find((b) => b.id === selectedBatchId) || batches[0] || EMPTY_PW_BATCH;
  }, [batches, selectedBatchId]);
  const [teacherSelectModalOpen, setTeacherSelectModalOpen] = reactExports.useState(false);
  const [selectedTeacherSubjectIds, setSelectedTeacherSubjectIds] = reactExports.useState([]);
  const [tempSelectedTeacherSubjectIds, setTempSelectedTeacherSubjectIds] = reactExports.useState([]);
  const promptedBatches = reactExports.useRef(/* @__PURE__ */ new Set());
  reactExports.useEffect(() => {
    if (!selectedBatchId) return;
    try {
      const saved = localStorage.getItem(`pw_selected_teachers_${selectedBatchId}`);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setSelectedTeacherSubjectIds(parsed);
          setTempSelectedTeacherSubjectIds(parsed);
          return;
        }
      }
    } catch {
    }
    if (currentBatch.subjects && currentBatch.subjects.length > 0) {
      const disciplineMap = /* @__PURE__ */ new Map();
      currentBatch.subjects.forEach((sub) => {
        const disc = getSubjectDiscipline(sub.name);
        if (!disciplineMap.has(disc)) {
          disciplineMap.set(disc, sub.id);
        }
      });
      const defaultIds = Array.from(disciplineMap.values());
      setSelectedTeacherSubjectIds(defaultIds);
      setTempSelectedTeacherSubjectIds(defaultIds);
      if (!promptedBatches.current.has(selectedBatchId)) {
        promptedBatches.current.add(selectedBatchId);
        setTeacherSelectModalOpen(true);
      }
    }
  }, [selectedBatchId, currentBatch.subjects]);
  const [overlayDismissed, setOverlayDismissed] = reactExports.useState(false);
  reactExports.useEffect(() => {
    setOverlayDismissed(false);
  }, [selectedBatchId]);
  reactExports.useEffect(() => {
    if (!isLoadingBatch && (!currentBatch.subjects || currentBatch.subjects.length === 0)) {
      const timer = setTimeout(() => {
        if (!isLoadingBatch && (!currentBatch.subjects || currentBatch.subjects.length === 0) && selectedBatchId !== "698ad3519549b300a5e1cc6a") {
          console.warn(`[PWPage] Batch ${selectedBatchId} has 0 subjects after loading. Auto-recovering to Arjuna JEE 2027.`);
          setSelectedBatchId("698ad3519549b300a5e1cc6a");
          localStorage.setItem("pw_selected_batch_id", "698ad3519549b300a5e1cc6a");
          refreshBatchMetadata("698ad3519549b300a5e1cc6a", true);
        }
      }, 3500);
      return () => clearTimeout(timer);
    }
    return void 0;
  }, [isLoadingBatch, currentBatch.subjects, selectedBatchId]);
  const displayedSubjects = reactExports.useMemo(() => {
    if (!selectedTeacherSubjectIds || selectedTeacherSubjectIds.length === 0) {
      return currentBatch.subjects;
    }
    const set = new Set(selectedTeacherSubjectIds);
    const filtered = currentBatch.subjects.filter((s) => set.has(s.id));
    return filtered.length > 0 ? filtered : currentBatch.subjects;
  }, [currentBatch.subjects, selectedTeacherSubjectIds]);
  const groupedTeacherDisciplines = reactExports.useMemo(() => {
    const map = /* @__PURE__ */ new Map();
    currentBatch.subjects.forEach((sub) => {
      const disc = getSubjectDiscipline(sub.name);
      if (!map.has(disc)) map.set(disc, []);
      map.get(disc).push(sub);
    });
    return Array.from(map.entries()).map(([discipline, subjects]) => ({ discipline, subjects }));
  }, [currentBatch.subjects]);
  const handleSaveTeacherSelection = () => {
    const finalIds = tempSelectedTeacherSubjectIds.length > 0 ? tempSelectedTeacherSubjectIds : currentBatch.subjects.map((s) => s.id);
    setSelectedTeacherSubjectIds(finalIds);
    try {
      localStorage.setItem(`pw_selected_teachers_${selectedBatchId}`, JSON.stringify(finalIds));
    } catch {
    }
    if (selectedSubject && !finalIds.includes(selectedSubject.id)) {
      setSelectedSubject(null);
    }
    setTeacherSelectModalOpen(false);
  };
  const refreshBatchMetadata = (batchIdToFetch = selectedBatchId, isManualOrAutoRetry = false) => {
    if (!batchIdToFetch) return;
    if (loadingBatchIds.current.has(batchIdToFetch) && !isManualOrAutoRetry) return;
    setIsLoadingBatch(true);
    if (!isManualOrAutoRetry) {
      loadingBatchIds.current.add(batchIdToFetch);
    }
    fetch(`/api/pw-metadata?batchId=${encodeURIComponent(batchIdToFetch)}`, { cache: "no-store" }).then((res) => {
      if (!res.ok) throw new Error(`PW API returned ${res.status}`);
      return res.json();
    }).then((payload) => {
      if (!payload || typeof payload !== "object") throw new Error("Invalid batch response");
      const subjects = Array.isArray(payload.subjects) ? payload.subjects : [];
      const fetchedBatch = {
        id: payload.batchId || batchIdToFetch,
        name: payload.name || "Physics Wallah Batch",
        target: payload.exam ? `${payload.exam}${payload.class ? ` • Class ${payload.class}` : ""}` : payload.byName || "PW Preparation",
        description: cleanBatchDescription(payload.description),
        batchPdf: payload.batchPdf,
        previewImage: payload.previewImage,
        subjects
      };
      setBatches((prev) => {
        const existing = prev.find((b) => b.id === batchIdToFetch);
        const updatedBatch = existing ? mergeBatches(existing, fetchedBatch) : fetchedBatch;
        const updated = existing ? prev.map((b) => b.id === batchIdToFetch ? updatedBatch : b) : [...prev, updatedBatch];
        try {
          localStorage.setItem("pw_cached_batches", JSON.stringify(updated));
          idbSet("pw_cached_batches", updated).catch(() => {
          });
        } catch {
        }
        return updated;
      });
      setApiError(null);
      setRetryAttempt(0);
      setRetryCountdown(0);
    }).catch(async (err) => {
      console.warn("PW metadata fetch from backend failed, trying direct client fallback to PenPencil API:", err);
      try {
        const directRes = await fetch(`https://api.penpencil.co/v3/batches/${encodeURIComponent(batchIdToFetch)}/details?type=EXPLORE_LEAD`, {
          headers: { "client-id": "5eb393ee95fab7468a79d189", "client-type": "WEB" },
          signal: AbortSignal.timeout(9e3)
        });
        if (directRes.ok) {
          const directJson = await directRes.json();
          const data = directJson.data || directJson;
          if (data && (data.name || Array.isArray(data.subjects))) {
            const directSubjects = (data.subjects || []).map((s) => ({
              id: s._id || s.subjectId || "",
              subjectId: s.subjectId || s._id || "",
              name: s.subject || s.name || "Subject",
              faculty: s.teachers?.[0]?.name || "PW Faculty",
              teachers: (s.teachers || []).map((t) => ({
                _id: t._id || "",
                name: t.name || "",
                imageUrl: t.imageUrl || "",
                qualification: t.qualification || "",
                experience: t.experience || ""
              })),
              chapters: [],
              lectureCount: 0,
              tagCount: 0
            }));
            const fetchedBatch = {
              id: data._id || batchIdToFetch,
              name: data.name || data.batchName || "Physics Wallah Batch",
              target: data.exam ? `${data.exam}${data.class ? ` • Class ${data.class}` : ""}` : data.byName || "PW Preparation",
              description: cleanBatchDescription(data.description),
              batchPdf: void 0,
              previewImage: data.previewImage,
              subjects: directSubjects
            };
            setBatches((prev) => {
              const existing = prev.find((b) => b.id === batchIdToFetch);
              const updatedBatch = existing ? mergeBatches(existing, fetchedBatch) : fetchedBatch;
              const updated = existing ? prev.map((b) => b.id === batchIdToFetch ? updatedBatch : b) : [...prev, updatedBatch];
              try {
                localStorage.setItem("pw_cached_batches", JSON.stringify(updated));
                idbSet("pw_cached_batches", updated).catch(() => {
                });
              } catch {
              }
              return updated;
            });
            setApiError(null);
            setRetryAttempt(0);
            setRetryCountdown(0);
            return;
          }
        }
      } catch (directErr) {
        console.warn("Direct PenPencil fallback also failed:", directErr);
      }
      setApiError(err.message || "Failed to reach PW API server");
      setRetryAttempt((prev) => prev + 1);
      setRetryCountdown(3);
    }).finally(() => {
      setIsLoadingBatch(false);
      loadingBatchIds.current.delete(batchIdToFetch);
    });
  };
  reactExports.useEffect(() => {
    if (retryCountdown <= 0) return;
    const timer = setTimeout(() => {
      if (retryCountdown === 1) {
        setRetryCountdown(0);
        refreshBatchMetadata(selectedBatchId, true);
      } else {
        setRetryCountdown((prev) => prev - 1);
      }
    }, 1e3);
    return () => clearTimeout(timer);
  }, [retryCountdown, selectedBatchId]);
  reactExports.useEffect(() => {
    idbGet("pw_cached_batches").then((cached) => {
      if (cached && Array.isArray(cached) && cached.length > 0) {
        setBatches((prev) => prev.length === 0 ? cached : prev);
      }
    }).catch(() => {
    });
  }, []);
  reactExports.useEffect(() => {
    const existing = batches.find((b) => b.id === selectedBatchId);
    if (!existing?.subjects || existing.subjects.length === 0) {
      refreshBatchMetadata(selectedBatchId);
    } else {
      setIsLoadingBatch(false);
    }
  }, [selectedBatchId, batches]);
  const calendarMonthKey = reactExports.useMemo(() => {
    const y = calendarMonth.getFullYear();
    const m = String(calendarMonth.getMonth() + 1).padStart(2, "0");
    return `${y}-${m}`;
  }, [calendarMonth]);
  reactExports.useEffect(() => {
    if (!selectedBatchId) return;
    fetch(`/api/pw-schedule?batchId=${encodeURIComponent(selectedBatchId)}&date=${encodeURIComponent(todayIstDate)}&month=${encodeURIComponent(calendarMonthKey)}`, { cache: "no-store" }).then((res) => res.ok ? res.json() : null).then(async (payload) => {
      let schedules = payload?.schedules;
      let allSchedules = payload?.allSchedules;
      let availableDates = payload?.availableDates;
      if (!Array.isArray(allSchedules) || allSchedules.length === 0) {
        const direct = await fetchDirectBatchSchedule(selectedBatchId, calendarMonthKey).catch(() => null);
        if (direct && Array.isArray(direct.allSchedules) && direct.allSchedules.length > 0) {
          allSchedules = direct.allSchedules;
          availableDates = direct.availableDates;
          schedules = allSchedules.filter((s) => s.date === todayIstDate);
        }
      }
      if (Array.isArray(schedules)) setTodaySchedule(schedules);
      if (Array.isArray(allSchedules)) {
        setAllBatchSchedules((prev) => {
          const map = /* @__PURE__ */ new Map();
          prev.forEach((item) => map.set(item.id, item));
          allSchedules.forEach((item) => map.set(item.id, item));
          return Array.from(map.values()).sort((a, b) => (a.date || "").localeCompare(b.date || "") || (a.startTime || "").localeCompare(b.startTime || ""));
        });
      }
      if (Array.isArray(availableDates)) {
        setAvailableScheduleDates((prev) => Array.from(/* @__PURE__ */ new Set([...prev, ...availableDates])).sort());
      }
    }).catch(() => {
    });
  }, [selectedBatchId, todayIstDate, calendarMonthKey]);
  reactExports.useEffect(() => {
    if (!selectedBatchId || !selectedScheduleDate) return;
    setIsLoadingSchedule(true);
    fetch(`/api/pw-schedule?batchId=${encodeURIComponent(selectedBatchId)}&date=${encodeURIComponent(selectedScheduleDate)}&month=${encodeURIComponent(calendarMonthKey)}`, { cache: "no-store" }).then((res) => res.ok ? res.json() : null).then(async (payload) => {
      let schedules = payload?.schedules;
      let allSchedules = payload?.allSchedules;
      let availableDates = payload?.availableDates;
      if (!Array.isArray(allSchedules) || allSchedules.length === 0) {
        const direct = await fetchDirectBatchSchedule(selectedBatchId, calendarMonthKey).catch(() => null);
        if (direct && Array.isArray(direct.allSchedules) && direct.allSchedules.length > 0) {
          allSchedules = direct.allSchedules;
          availableDates = direct.availableDates;
          schedules = allSchedules.filter((s) => s.date === selectedScheduleDate);
        }
      }
      if (Array.isArray(schedules) && schedules.length > 0) {
        setDateSchedule(schedules);
      } else {
        const localMatch = (allSchedules || allBatchSchedules).filter((s) => s.date === selectedScheduleDate);
        setDateSchedule(localMatch.length > 0 ? localMatch : schedules || []);
      }
      if (Array.isArray(allSchedules)) {
        setAllBatchSchedules((prev) => {
          const map = /* @__PURE__ */ new Map();
          prev.forEach((item) => map.set(item.id, item));
          allSchedules.forEach((item) => map.set(item.id, item));
          return Array.from(map.values()).sort((a, b) => (a.date || "").localeCompare(b.date || "") || (a.startTime || "").localeCompare(b.startTime || ""));
        });
      }
      if (Array.isArray(availableDates)) {
        setAvailableScheduleDates((prev) => Array.from(/* @__PURE__ */ new Set([...prev, ...availableDates])).sort());
      }
    }).catch(() => {
    }).finally(() => setIsLoadingSchedule(false));
  }, [selectedBatchId, selectedScheduleDate, calendarMonthKey]);
  reactExports.useEffect(() => {
    if (selectedSubject) {
      const fresh = currentBatch.subjects.find((s) => s.id === selectedSubject.id || s.name === selectedSubject.name);
      if (fresh && fresh !== selectedSubject) setSelectedSubject(fresh);
      if (!selectedSubject.chapters || selectedSubject.chapters.length === 0) {
        const subId = selectedSubject.id || selectedSubject.subjectId;
        if (subId && selectedBatchId) {
          fetch(`https://api.penpencil.co/v1/batches/${encodeURIComponent(selectedBatchId)}/subject/${encodeURIComponent(subId)}/topics?page=1`, {
            headers: { "client-id": "5eb393ee95fab7468a79d189", "client-type": "WEB" }
          }).then((r) => r.ok ? r.json() : null).then((payload) => {
            if (Array.isArray(payload?.data) && payload.data.length > 0) {
              const fetchedChapters = payload.data.map((t, idx) => ({
                id: t._id || `${subId}-ch-${idx + 1}`,
                rawId: t._id,
                title: cleanChapterTitle(t.name ? t.name.trim() : `Chapter ${idx + 1}`),
                videoCount: Number(t.videos || t.lectureVideos || 0),
                notesCount: Number(t.notes || 0),
                dppCount: Number(t.exercises || 0),
                isStarted: Boolean(t.videos > 0 || t.notes > 0 || t.exercises > 0),
                lectures: []
              }));
              const updatedSub = {
                ...selectedSubject,
                chapters: fetchedChapters,
                tagCount: fetchedChapters.length
              };
              setSelectedSubject(updatedSub);
              setBatches((prev) => prev.map((b) => {
                if (b.id !== selectedBatchId) return b;
                return {
                  ...b,
                  subjects: b.subjects.map((s) => s.id === selectedSubject.id ? updatedSub : s)
                };
              }));
            }
          }).catch(() => {
          });
        }
      }
    }
  }, [currentBatch.subjects, selectedSubject, selectedBatchId]);
  reactExports.useEffect(() => {
    if (selectedChapter && selectedSubject) {
      const freshCh = selectedSubject.chapters.find((c) => c.id === selectedChapter.id);
      if (freshCh && freshCh !== selectedChapter) setSelectedChapter(freshCh);
    }
  }, [selectedSubject, selectedChapter]);
  const handleOpenChapter = async (ch) => {
    setChapterItemSearch("");
    setChapterContentFilter("all");
    setChapterSegregatedTab("lectures");
    setSelectedChapter(ch);
    if ((!ch.lectures || ch.lectures.length === 0) && selectedSubject) {
      setLoadingChapterId(ch.id);
      try {
        const rawId = ch.rawId || ch.id;
        let data = null;
        try {
          const res = await fetch(
            `/api/pw-chapter-contents?batchId=${encodeURIComponent(selectedBatchId)}&subjectId=${encodeURIComponent(selectedSubject.id)}&chapterId=${encodeURIComponent(rawId)}&chapterTitle=${encodeURIComponent(ch.title || "")}`,
            { cache: "no-store" }
          );
          if (res.ok) {
            data = await res.json();
          }
        } catch (e) {
        }
        if (!data || !Array.isArray(data.lectures) || data.totalLectures === 0 && data.totalNotes === 0 && data.totalDpps === 0) {
          try {
            data = await fetchDirectChapterContents(selectedBatchId, selectedSubject.id, rawId, ch.title || "");
          } catch (e) {
            console.warn("Direct chapter contents fallback failed:", e);
          }
        }
        if (data && Array.isArray(data.lectures)) {
          const updatedCh = {
            ...ch,
            lectures: data.lectures,
            videoCount: data.totalLectures ?? ch.videoCount,
            dppCount: data.totalDpps ?? ch.dppCount,
            notesCount: data.totalNotes ?? ch.notesCount,
            isStarted: data.totalLectures > 0 || data.totalDpps > 0
          };
          setSelectedChapter(updatedCh);
          setBatches((prev) => prev.map((b) => {
            if (b.id !== selectedBatchId) return b;
            return {
              ...b,
              subjects: b.subjects.map((s) => {
                if (s.id !== selectedSubject.id) return s;
                return {
                  ...s,
                  chapters: s.chapters.map((c) => c.id === ch.id ? updatedCh : c)
                };
              })
            };
          }));
        }
      } catch (err) {
        console.warn("Failed loading chapter contents:", err);
      } finally {
        setLoadingChapterId(null);
      }
    }
  };
  const overallStats = reactExports.useMemo(() => {
    let totalItems = 0;
    let completedItems = 0;
    const resourceRegex = /(demo|schedule|planner|telegram|whatsapp|admission|proctored|syllabus|infinity|orientation|guideline|solution)/i;
    displayedSubjects.forEach((sub) => {
      (sub.chapters || []).forEach((ch) => {
        if (resourceRegex.test(ch.title)) return;
        if (Array.isArray(ch.lectures) && ch.lectures.length > 0) {
          ch.lectures.forEach((l) => {
            if (l.type === "lecture" || l.type === "dpp" || !l.type) {
              totalItems++;
              if (completedMap[l.id]) completedItems++;
            }
          });
        } else {
          const counts = getChapterCounts(ch);
          totalItems += counts.lectureCount + counts.dppCount;
        }
      });
    });
    const percentage = totalItems > 0 ? Math.round(completedItems / totalItems * 100) : 0;
    return { totalItems, completedItems, percentage };
  }, [displayedSubjects, completedMap]);
  const todayStatus = reactExports.useMemo(() => {
    if (todaySchedule.length === 0) {
      return { type: "NO_CLASSES", title: "No Classes Scheduled Today", desc: "Today is a dedicated self-study day for this batch. Complete pending DPPs or review chapter notes." };
    }
    const hasLive = todaySchedule.some((s) => s.isLive || s.tag?.toLowerCase() === "live");
    if (hasLive) {
      return { type: "LIVE", title: "Live Classes Streaming Now", desc: "Live lectures are currently underway on Physics Wallah." };
    }
    const allEnded = todaySchedule.every((s) => s.isEnded || s.tag?.toLowerCase() === "ended");
    if (allEnded) {
      return { type: "ENDED", title: "Today's Classes Ended", desc: `All ${todaySchedule.length} sessions for today have concluded. All lecture notes and DPP sheet PDFs are available below.` };
    }
    const endedCount = todaySchedule.filter((s) => s.isEnded || s.tag?.toLowerCase() === "ended").length;
    return { type: "IN_PROGRESS", title: "Today's Schedule Active", desc: `${endedCount} of ${todaySchedule.length} classes completed. Completed notes and DPPs are available below.` };
  }, [todaySchedule]);
  const batchResources = reactExports.useMemo(() => {
    return extractBatchResources(currentBatch);
  }, [currentBatch]);
  const activeSubjectCategorized = reactExports.useMemo(() => {
    if (!selectedSubject) return { syllabusChapters: [], studyMaterials: [], digitalBooks: [] };
    return categorizeSubjectContent(selectedSubject.chapters || []);
  }, [selectedSubject]);
  const filteredSyllabusChapters = reactExports.useMemo(() => {
    const list = activeSubjectCategorized.syllabusChapters;
    if (!chapterSearchQuery.trim()) return list;
    const q = chapterSearchQuery.toLowerCase();
    return list.filter((c) => c.title.toLowerCase().includes(q));
  }, [activeSubjectCategorized.syllabusChapters, chapterSearchQuery]);
  const filteredStudyMaterials = reactExports.useMemo(() => {
    const list = activeSubjectCategorized.studyMaterials;
    if (!chapterSearchQuery.trim()) return list;
    const q = chapterSearchQuery.toLowerCase();
    return list.filter((c) => c.title.toLowerCase().includes(q));
  }, [activeSubjectCategorized.studyMaterials, chapterSearchQuery]);
  const filteredDigitalBooks = reactExports.useMemo(() => {
    const list = activeSubjectCategorized.digitalBooks;
    if (!chapterSearchQuery.trim()) return list;
    const q = chapterSearchQuery.toLowerCase();
    return list.filter((c) => c.title.toLowerCase().includes(q));
  }, [activeSubjectCategorized.digitalBooks, chapterSearchQuery]);
  const segregatedContent = reactExports.useMemo(() => {
    if (!selectedChapter) return { lectures: [], notes: [], dpps: [] };
    return segregateChapterContent(selectedChapter);
  }, [selectedChapter]);
  const directPastedBatchId = reactExports.useMemo(() => {
    const raw = batchSearchQuery.trim();
    if (!raw) return null;
    const match = raw.match(/[a-f0-9]{24}/i);
    return match ? match[0] : null;
  }, [batchSearchQuery]);
  const filteredCatalog = reactExports.useMemo(() => {
    const q = batchSearchQuery.trim().toLowerCase();
    let results = [];
    if (!q) {
      results = catalogBatches.slice(0, 50);
    } else {
      const tokens = q.split(/\s+/).filter(Boolean);
      results = catalogBatches.filter((b) => {
        const name = (b.name || "").toLowerCase();
        const byName = (b.byName || "").toLowerCase();
        const exam = (b.exam || "").toLowerCase();
        const cls = (b.class ? String(b.class) : "").toLowerCase();
        const id = (b.batch_id || "").toLowerCase();
        const text = `${name} ${byName} ${exam} ${cls} ${id}`;
        return tokens.every((tok) => text.includes(tok));
      }).slice(0, 60);
    }
    if (directPastedBatchId && !results.some((b) => b.batch_id.toLowerCase() === directPastedBatchId.toLowerCase())) {
      results = [
        {
          batch_id: directPastedBatchId,
          name: `Custom Batch: ${directPastedBatchId}`,
          byName: "Directly Load by Batch ID / URL",
          exam: "CUSTOM",
          class: "Any"
        },
        ...results
      ];
    }
    return results;
  }, [catalogBatches, batchSearchQuery, directPastedBatchId]);
  const resolveTeacherImage = (teacherName, fallbackImage) => {
    if (fallbackImage) return fallbackImage;
    if (!teacherName) return void 0;
    const q = teacherName.toLowerCase().replace(/sir|mam|ma'am/gi, "").trim();
    for (const sub of currentBatch.subjects) {
      for (const t of sub.teachers || []) {
        if (t.name) {
          const tName = t.name.toLowerCase();
          if (tName.includes(q) || q.includes(tName)) {
            if (t.imageUrl) return t.imageUrl;
          }
        }
      }
    }
    return void 0;
  };
  const scheduleSubjectOptions = reactExports.useMemo(() => {
    const subs = /* @__PURE__ */ new Set();
    currentBatch.subjects.forEach((s) => {
      if (s.name) subs.add(s.name);
    });
    dateSchedule.forEach((item) => {
      if (item.subject) subs.add(item.subject);
    });
    return Array.from(subs);
  }, [currentBatch.subjects, dateSchedule]);
  const groupedSchedule = reactExports.useMemo(() => {
    let list = dateSchedule;
    if (selectedScheduleSubject && selectedScheduleSubject !== "ALL") {
      const q = selectedScheduleSubject.toLowerCase();
      list = list.filter(
        (s) => s.subject?.toLowerCase().includes(q) || s.rawSubject && s.rawSubject.toLowerCase().includes(q)
      );
    }
    const map = /* @__PURE__ */ new Map();
    list.forEach((item) => {
      const timeLabel = formatScheduleTime(item.startTime);
      if (!map.has(timeLabel)) map.set(timeLabel, []);
      map.get(timeLabel).push(item);
    });
    return Array.from(map.entries()).map(([time, items]) => ({ time, items }));
  }, [dateSchedule, selectedScheduleSubject]);
  const upcomingEvents = reactExports.useMemo(() => {
    const pool = allBatchSchedules.length > 0 ? allBatchSchedules : todaySchedule.length > 0 ? todaySchedule : dateSchedule;
    const upcoming = pool.filter(
      (s) => s.isUpcoming || s.date && s.date > todayIstDate || s.date === todayIstDate && !s.isEnded
    );
    if (upcoming.length > 0) {
      return upcoming.slice(0, 6);
    }
    return (todaySchedule.length > 0 ? todaySchedule : dateSchedule).slice(0, 4);
  }, [allBatchSchedules, todaySchedule, dateSchedule, todayIstDate]);
  const calendarDays = reactExports.useMemo(() => {
    const year = calendarMonth.getFullYear();
    const month = calendarMonth.getMonth();
    const firstDay = new Date(year, month, 1);
    const startDayOffset = (firstDay.getDay() + 6) % 7;
    const totalDays = new Date(year, month + 1, 0).getDate();
    const blanks = Array.from({ length: startDayOffset }, () => null);
    const days = Array.from({ length: totalDays }, (_, i) => {
      const dayNum = i + 1;
      const dateStr = `${year}-${String(month + 1).padStart(2, "0")}-${String(dayNum).padStart(2, "0")}`;
      return { dayNum, dateStr };
    });
    return [...blanks, ...days];
  }, [calendarMonth]);
  const monthLabel = reactExports.useMemo(() => {
    return calendarMonth.toLocaleDateString("en-US", { month: "long", year: "numeric" });
  }, [calendarMonth]);
  const handlePrevMonth = () => {
    setCalendarMonth((prev) => new Date(prev.getFullYear(), prev.getMonth() - 1, 1));
  };
  const handleNextMonth = () => {
    setCalendarMonth((prev) => new Date(prev.getFullYear(), prev.getMonth() + 1, 1));
  };
  const handleTodayClick = () => {
    const now = /* @__PURE__ */ new Date();
    setCalendarMonth(now);
    setSelectedScheduleDate(todayIstDate);
  };
  const openPdf = (url, title = "Physics Wallah Document") => {
    if (!url) return;
    if (url.startsWith("https://www.google.com/search") || url.includes("google.com/search?q=")) {
      window.open(url, "_blank", "noopener,noreferrer");
      return;
    }
    setActivePdfModal({ url, title });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-slate-50 dark:bg-zinc-950 text-slate-900 dark:text-zinc-100 transition-colors pb-24", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: "sticky top-0 z-30 border-b border-slate-200/80 dark:border-zinc-800/80 bg-white/95 dark:bg-zinc-950/95 backdrop-blur-md transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 py-3.5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col md:flex-row md:items-center justify-between gap-3 sm:gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-amber-600 dark:from-amber-400 dark:to-amber-500 flex items-center justify-center text-white font-extrabold text-sm shadow-xs shrink-0 tracking-tighter", children: "PW" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-wrap", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-base sm:text-lg font-bold tracking-tight text-slate-900 dark:text-white truncate", children: currentBatch.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20", children: "Official PW" }),
              currentBatch.target && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline-block px-2 py-0.5 rounded-full text-[11px] font-medium bg-slate-100 dark:bg-zinc-800 text-slate-600 dark:text-zinc-300 border border-slate-200 dark:border-zinc-700", children: currentBatch.target })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-slate-500 dark:text-zinc-400 truncate mt-0.5", children: cleanBatchDescription(currentBatch.description) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 sm:gap-3 flex-wrap justify-end", children: [
          currentBatch.batchPdf && /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              variant: "outline",
              size: "sm",
              onClick: () => openPdf(currentBatch.batchPdf, `${currentBatch.name} • Official Syllabus`),
              className: "h-8 rounded-lg text-xs font-semibold gap-1.5 border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:bg-slate-100 dark:hover:bg-zinc-800 text-slate-700 dark:text-zinc-200",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "w-3.5 h-3.5 text-amber-500" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: "Batch" }),
                " Syllabus"
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              variant: "outline",
              size: "sm",
              disabled: isLoadingBatch,
              onClick: () => refreshBatchMetadata(selectedBatchId),
              className: "h-8 px-2.5 rounded-lg border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:bg-slate-100 dark:hover:bg-zinc-800 text-slate-700 dark:text-zinc-200",
              title: "Refresh batch live contents",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: `w-3.5 h-3.5 ${isLoadingBatch ? "animate-spin text-amber-500" : ""}` })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              variant: "outline",
              size: "sm",
              onClick: () => {
                setTempSelectedTeacherSubjectIds(selectedTeacherSubjectIds);
                setTeacherSelectModalOpen(true);
              },
              className: "h-8 rounded-lg text-xs font-semibold gap-1.5 border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:bg-slate-100 dark:hover:bg-zinc-800 text-slate-700 dark:text-zinc-200",
              title: "Select preferred teachers for each subject",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "w-3.5 h-3.5 text-amber-500" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: "Choose" }),
                " Teachers",
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "px-1.5 py-0.2 rounded-full bg-amber-500/15 text-amber-600 dark:text-amber-400 font-mono text-[10px] font-bold", children: [
                  displayedSubjects.length,
                  "/",
                  currentBatch.subjects.length
                ] })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              variant: "outline",
              size: "sm",
              onClick: () => setBatchModalOpen(true),
              className: "h-8 rounded-lg text-xs font-semibold gap-1.5 border-amber-500/30 bg-amber-500/5 dark:bg-amber-500/10 hover:bg-amber-500/15 text-amber-700 dark:text-amber-400",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Layers, { className: "w-3.5 h-3.5" }),
                "Switch Batch",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "w-3 h-3 opacity-60" })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden lg:flex items-center gap-2 px-3 py-1 rounded-lg border border-slate-200 dark:border-zinc-800 bg-slate-50 dark:bg-zinc-900 text-xs font-medium", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-slate-500 dark:text-zinc-400", children: "Progress:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-bold text-amber-600 dark:text-amber-400 font-mono", children: [
              overallStats.percentage,
              "%"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-slate-400 dark:text-zinc-500 text-[11px]", children: [
              "(",
              overallStats.completedItems,
              "/",
              overallStats.totalItems,
              ")"
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 mt-3 pt-2.5 border-t border-slate-100 dark:border-zinc-900 overflow-x-auto scrollbar-none", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: () => {
              setActiveTab("curriculum");
              setSelectedChapter(null);
            },
            className: `flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all shrink-0 ${activeTab === "curriculum" ? "bg-slate-900 text-white dark:bg-white dark:text-zinc-900 shadow-xs" : "text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-zinc-900"}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { className: "w-3.5 h-3.5" }),
              "Chapters & Lectures"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: () => setActiveTab("schedule"),
            className: `flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all shrink-0 relative ${activeTab === "schedule" ? "bg-slate-900 text-white dark:bg-white dark:text-zinc-900 shadow-xs" : "text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-zinc-900"}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarDays, { className: "w-3.5 h-3.5" }),
              "Live Timetable & Today",
              todayStatus.type === "LIVE" && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-2 h-2 rounded-full bg-emerald-500 animate-pulse" }),
              todayStatus.type === "ENDED" && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] px-1.5 py-0.2 rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 font-bold", children: "Ended" })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: () => setActiveTab("faculty"),
            className: `flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all shrink-0 ${activeTab === "faculty" ? "bg-slate-900 text-white dark:bg-white dark:text-zinc-900 shadow-xs" : "text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-zinc-900"}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(GraduationCap, { className: "w-3.5 h-3.5" }),
              "Faculty Members (",
              currentBatch.subjects.reduce((acc, s) => acc + (s.teachers?.length || 0), 0),
              ")"
            ]
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "max-w-7xl mx-auto px-4 sm:px-6 pt-5 pb-16", children: [
      activeTab === "curriculum" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-5", children: !selectedSubject ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-3 flex-wrap", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 p-1 rounded-xl bg-slate-200/70 dark:bg-zinc-800/80 w-fit", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                onClick: () => setBatchSubTab("subjects"),
                className: `flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${batchSubTab === "subjects" ? "bg-white dark:bg-zinc-900 text-slate-900 dark:text-white shadow-xs" : "text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white"}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { className: "w-3.5 h-3.5 text-amber-500" }),
                  "Subjects (",
                  displayedSubjects.length,
                  ")"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                onClick: () => setBatchSubTab("resources"),
                className: `flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${batchSubTab === "resources" ? "bg-white dark:bg-zinc-900 text-slate-900 dark:text-white shadow-xs" : "text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white"}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(FolderOpen, { className: "w-3.5 h-3.5 text-amber-500" }),
                  "Resources (",
                  batchResources.length,
                  ")"
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              variant: "outline",
              size: "sm",
              onClick: () => {
                setTempSelectedTeacherSubjectIds(selectedTeacherSubjectIds);
                setTeacherSelectModalOpen(true);
              },
              className: "h-8 rounded-xl text-xs font-semibold gap-1.5 border-amber-500/30 bg-amber-500/5 dark:bg-amber-500/10 hover:bg-amber-500/15 text-amber-700 dark:text-amber-300",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "w-3.5 h-3.5 text-amber-500" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                  "Customize Teachers (",
                  displayedSubjects.length,
                  "/",
                  currentBatch.subjects.length,
                  ")"
                ] })
              ]
            }
          ) })
        ] }),
        batchSubTab === "subjects" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4", children: displayedSubjects.length > 0 ? displayedSubjects.map((sub) => {
          const badge = getSubjectBadge(sub.name);
          const title = formatSubjectTitle(sub);
          const progress = getSubjectProgress(sub, completedMap);
          const teacherName = sub.teachers?.[0]?.name || sub.faculty || "PW Faculty";
          const teacherImg = sub.teachers?.[0]?.imageUrl || resolveTeacherImage(teacherName);
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              onClick: () => {
                setSelectedSubject(sub);
                setSelectedChapter(null);
                const { syllabusChapters: sChaps, studyMaterials: sMats, digitalBooks: sBooks } = categorizeSubjectContent(sub.chapters || []);
                const initialTab = sChaps.length > 0 ? "chapters" : sMats.length > 0 ? "materials" : "books";
                setSubjectSubTab(initialTab);
                setChapterSearchQuery("");
              },
              className: "group p-5 rounded-2xl border border-slate-200/80 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 hover:bg-slate-50 dark:hover:bg-zinc-900 hover:border-slate-300 dark:hover:border-zinc-700 transition-all cursor-pointer shadow-xs flex flex-col justify-between gap-4",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3.5 min-w-0 flex-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-14 h-14 rounded-2xl overflow-hidden relative border border-slate-200 dark:border-zinc-700 bg-slate-100 dark:bg-zinc-800 shrink-0 shadow-2xs", children: [
                      teacherImg ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "img",
                        {
                          src: teacherImg,
                          alt: teacherName,
                          referrerPolicy: "no-referrer",
                          className: "w-full h-full object-cover object-top",
                          onError: (e) => {
                            e.currentTarget.style.display = "none";
                          }
                        }
                      ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `w-full h-full flex items-center justify-center font-bold text-base ${badge.style}`, children: badge.abbr }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `absolute bottom-0 right-0 px-1.5 py-0.5 rounded-tl-lg font-mono font-bold text-[9px] tracking-tight shadow-xs ${badge.style}`, children: badge.abbr })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-sm sm:text-base text-slate-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors leading-snug line-clamp-2", children: title }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-slate-500 dark:text-zinc-400 mt-1 flex items-center gap-1.5 truncate", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                          sub.chapters.length,
                          " Chapters"
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "•" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-slate-700 dark:text-zinc-300 truncate", children: teacherName })
                      ] })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 rounded-xl bg-slate-100 dark:bg-zinc-800 text-slate-400 dark:text-zinc-500 group-hover:text-amber-600 dark:group-hover:text-amber-400 group-hover:bg-amber-50 dark:group-hover:bg-amber-950/30 flex items-center justify-center shrink-0 transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-4 h-4 group-hover:translate-x-0.5 transition-transform" }) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-2 border-t border-slate-100 dark:border-zinc-800/80", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-[11px] text-slate-500 dark:text-zinc-400 mb-1.5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Syllabus Progress (Lectures & DPPs)" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-semibold text-slate-700 dark:text-zinc-300 font-mono", children: [
                      progress,
                      "%"
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full bg-slate-100 dark:bg-zinc-800 h-1.5 rounded-full overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "bg-amber-500 h-full rounded-full transition-all duration-300",
                      style: { width: `${progress}%` }
                    }
                  ) })
                ] })
              ]
            },
            sub.id
          );
        }) : (
          /* Realistic skeleton cards shown while loading or under blur */
          [1, 2, 3, 4, 5, 6].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "p-5 rounded-2xl border border-slate-200/80 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 shadow-xs flex flex-col justify-between gap-4",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3.5 min-w-0 flex-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-14 h-14 rounded-2xl bg-slate-200 dark:bg-zinc-800 animate-pulse shrink-0" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 flex-1 pt-1", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-4 bg-slate-200 dark:bg-zinc-800 rounded-md w-3/4 animate-pulse" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-3 bg-slate-100 dark:bg-zinc-800/60 rounded-md w-1/2 animate-pulse" })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 rounded-xl bg-slate-100 dark:bg-zinc-800/50 shrink-0" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-2 border-t border-slate-100 dark:border-zinc-800/80 space-y-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2.5 bg-slate-200 dark:bg-zinc-800 rounded-md w-28 animate-pulse" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2.5 bg-slate-200 dark:bg-zinc-800 rounded-md w-8 animate-pulse" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full bg-slate-100 dark:bg-zinc-800 h-1.5 rounded-full overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-amber-500/30 h-full rounded-full w-1/3 animate-pulse" }) })
                ] })
              ]
            },
            `pw-skel-${i}`
          ))
        ) }),
        batchSubTab === "resources" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4", children: batchResources.map((res) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            onClick: () => {
              if (res.type === "pdf" && res.pdfUrl) {
                openPdf(res.pdfUrl, res.title);
              } else if (res.type === "schedule") {
                setActiveTab("schedule");
              } else if (res.type === "chapter" && res.chapter) {
                const foundSub = currentBatch.subjects.find((s) => s.chapters.some((c) => c.id === res.chapter.id));
                if (foundSub) setSelectedSubject(foundSub);
                handleOpenChapter(res.chapter);
              }
            },
            className: "group p-5 rounded-2xl border border-slate-200/80 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 hover:bg-slate-50 dark:hover:bg-zinc-900 hover:border-slate-300 dark:hover:border-zinc-700 transition-all cursor-pointer shadow-xs flex items-center justify-between gap-3",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3.5 min-w-0 flex-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-2.5 py-1.5 rounded-xl font-mono text-xs font-bold bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20 shrink-0", children: res.tag }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-sm text-slate-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors line-clamp-1", children: res.title }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-slate-500 dark:text-zinc-400 mt-0.5", children: res.countText })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-4 h-4 text-slate-400 group-hover:text-amber-500 group-hover:translate-x-0.5 transition-all shrink-0" })
            ]
          },
          res.id
        )) })
      ] }) : !selectedChapter ? (
        /* SCREEN 2: SUBJECT LEVEL (Chapters, Study Material, Digital Books) */
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row sm:items-center justify-between gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  variant: "outline",
                  size: "sm",
                  onClick: () => {
                    setSelectedSubject(null);
                    setChapterSearchQuery("");
                  },
                  className: "h-8 rounded-lg text-xs font-semibold gap-1.5 border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:bg-slate-100 dark:hover:bg-zinc-800 text-slate-700 dark:text-zinc-200",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "w-3.5 h-3.5" }),
                    "Back to Subjects"
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-base sm:text-lg font-bold text-slate-900 dark:text-white", children: formatSubjectTitle(selectedSubject) }) })
            ] }),
            selectedSubject.syllabusPdf && /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                variant: "outline",
                size: "sm",
                onClick: () => openPdf(selectedSubject.syllabusPdf, `${selectedSubject.name} • Syllabus Roadmap`),
                className: "h-8 rounded-lg text-xs font-semibold gap-1.5 border-amber-500/30 bg-amber-500/5 text-amber-700 dark:text-amber-400 hover:bg-amber-500/10",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "w-3.5 h-3.5 text-amber-500" }),
                  "Syllabus Planner PDF"
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-1 border-b border-slate-200/80 dark:border-zinc-800", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 p-1 rounded-xl bg-slate-200/70 dark:bg-zinc-800/80 w-fit", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  onClick: () => setSubjectSubTab("chapters"),
                  className: `flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${subjectSubTab === "chapters" ? "bg-white dark:bg-zinc-900 text-slate-900 dark:text-white shadow-xs" : "text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white"}`,
                  children: [
                    "Chapters (",
                    activeSubjectCategorized.syllabusChapters.length,
                    ")"
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  onClick: () => setSubjectSubTab("materials"),
                  className: `flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${subjectSubTab === "materials" ? "bg-white dark:bg-zinc-900 text-slate-900 dark:text-white shadow-xs" : "text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white"}`,
                  children: [
                    "Study Material (",
                    activeSubjectCategorized.studyMaterials.length,
                    ")"
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  onClick: () => setSubjectSubTab("books"),
                  className: `flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${subjectSubTab === "books" ? "bg-white dark:bg-zinc-900 text-slate-900 dark:text-white shadow-xs" : "text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white"}`,
                  children: [
                    "Digital Books (",
                    activeSubjectCategorized.digitalBooks.length,
                    ")"
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-full sm:w-64", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  value: chapterSearchQuery,
                  onChange: (e) => setChapterSearchQuery(e.target.value),
                  placeholder: "Search in this subject...",
                  className: "h-8 pl-8 text-xs bg-white dark:bg-zinc-900 border-slate-200 dark:border-zinc-800 rounded-lg"
                }
              )
            ] })
          ] }),
          subjectSubTab === "chapters" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5", children: isLoadingBatch ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-full p-12 text-center rounded-2xl border border-slate-200 dark:border-zinc-800 text-slate-500 dark:text-zinc-400 bg-white dark:bg-zinc-900/30", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-6 h-6 animate-spin mx-auto mb-2 text-amber-500" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold", children: "Loading official curriculum & chapters..." })
          ] }) : filteredSyllabusChapters.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-full p-12 text-center rounded-2xl border border-dashed border-slate-300 dark:border-zinc-800 text-slate-500 dark:text-zinc-400 bg-white dark:bg-zinc-900/30 space-y-2", children: chapterSearchQuery.trim() ? /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
            'No chapters found matching "',
            chapterSearchQuery,
            '".'
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-slate-700 dark:text-zinc-300", children: "No chapters found for this subject." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-slate-500", children: "Tap below to refresh official batch curriculum." }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                variant: "outline",
                size: "sm",
                onClick: () => refreshBatchMetadata(selectedBatchId, true),
                className: "mt-2 text-xs",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: "w-3.5 h-3.5 mr-1 text-amber-500" }),
                  "Refresh Chapters"
                ]
              }
            )
          ] }) }) : filteredSyllabusChapters.map((ch, idx) => {
            const counts = getChapterCounts(ch);
            const cleanTitle = cleanChapterTitle(ch.title);
            const hasLecs = Array.isArray(ch.lectures) && ch.lectures.length > 0;
            const completedCount = hasLecs ? ch.lectures.filter((l) => completedMap[l.id]).length : 0;
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                onClick: () => handleOpenChapter(ch),
                className: "group p-4 rounded-2xl border border-slate-200/80 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 hover:bg-slate-50 dark:hover:bg-zinc-900 hover:border-slate-300 dark:hover:border-zinc-700 transition-all cursor-pointer shadow-xs flex items-center justify-between gap-3",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 min-w-0 flex-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "px-2 py-1 rounded-lg bg-slate-100 dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 text-slate-700 dark:text-zinc-300 text-xs font-mono font-bold shrink-0 mt-0.5", children: [
                      "CH - ",
                      String(idx + 1).padStart(2, "0")
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-xs sm:text-sm text-slate-900 dark:text-zinc-100 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors leading-snug line-clamp-2", children: cleanTitle }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-1.5 mt-1.5 text-[11px] text-slate-500 dark:text-zinc-400 flex-wrap", children: counts.isStarted ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-semibold text-slate-700 dark:text-zinc-300", children: [
                          "Lecture: ",
                          completedCount,
                          "/",
                          counts.lectureCount
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "•" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-semibold text-purple-600 dark:text-purple-400", children: [
                          "DPP: 0/",
                          counts.dppCount
                        ] })
                      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-1.5 py-0.5 rounded text-[10px] font-semibold bg-slate-100 dark:bg-zinc-800 text-slate-500", children: "Upcoming Chapter" }) })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-4 h-4 text-slate-400 group-hover:text-amber-500 group-hover:translate-x-0.5 transition-all shrink-0" })
                ]
              },
              ch.id
            );
          }) }),
          subjectSubTab === "materials" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5", children: filteredStudyMaterials.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-full p-12 text-center rounded-2xl border border-dashed border-slate-300 dark:border-zinc-800 text-slate-500 dark:text-zinc-400 bg-white dark:bg-zinc-900/30", children: activeSubjectCategorized.studyMaterials.length === 0 ? "No separate study materials identified for this subject. All materials are organized inside chapter tabs." : chapterSearchQuery.trim() ? `No materials found matching "${chapterSearchQuery}".` : "No study materials available for this subject." }) : filteredStudyMaterials.map((ch, idx) => {
            const counts = getChapterCounts(ch);
            const cleanTitle = cleanChapterTitle(ch.title);
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                onClick: () => handleOpenChapter(ch),
                className: "group p-4 rounded-2xl border border-slate-200/80 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 hover:bg-slate-50 dark:hover:bg-zinc-900 hover:border-slate-300 dark:hover:border-zinc-700 transition-all cursor-pointer shadow-xs flex items-center justify-between gap-3",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 min-w-0 flex-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "px-2 py-1 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-600 dark:text-amber-400 text-xs font-mono font-bold shrink-0 mt-0.5", children: [
                      "SM - ",
                      String(idx + 1).padStart(2, "0")
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-xs sm:text-sm text-slate-900 dark:text-zinc-100 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors leading-snug line-clamp-2", children: cleanTitle }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 mt-1.5 text-[11px] text-slate-500 dark:text-zinc-400 flex-wrap", children: [
                        counts.notesCount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                          counts.notesCount,
                          " Notes"
                        ] }),
                        counts.dppCount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                          "• ",
                          counts.dppCount,
                          " DPPs"
                        ] }),
                        counts.lectureCount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                          "• ",
                          counts.lectureCount,
                          " Lectures"
                        ] })
                      ] })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-4 h-4 text-slate-400 group-hover:text-amber-500 group-hover:translate-x-0.5 transition-all shrink-0" })
                ]
              },
              ch.id
            );
          }) }),
          subjectSubTab === "books" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5", children: filteredDigitalBooks.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-full p-12 text-center rounded-2xl border border-dashed border-slate-300 dark:border-zinc-800 text-slate-500 dark:text-zinc-400 bg-white dark:bg-zinc-900/30", children: activeSubjectCategorized.digitalBooks.length === 0 ? "Digital books and modules for this subject are available in the batch resources tab." : chapterSearchQuery.trim() ? `No digital books found matching "${chapterSearchQuery}".` : "No digital books available for this subject." }) : filteredDigitalBooks.map((ch, idx) => {
            const cleanTitle = cleanChapterTitle(ch.title);
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                onClick: () => handleOpenChapter(ch),
                className: "group p-4 rounded-2xl border border-slate-200/80 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 hover:bg-slate-50 dark:hover:bg-zinc-900 hover:border-slate-300 dark:hover:border-zinc-700 transition-all cursor-pointer shadow-xs flex items-center justify-between gap-3",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 min-w-0 flex-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "px-2 py-1 rounded-lg bg-teal-500/10 border border-teal-500/20 text-teal-600 dark:text-teal-400 text-xs font-mono font-bold shrink-0 mt-0.5", children: [
                      "DB - ",
                      String(idx + 1).padStart(2, "0")
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-xs sm:text-sm text-slate-900 dark:text-zinc-100 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors leading-snug line-clamp-2", children: cleanTitle }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-slate-500 dark:text-zinc-400 mt-1", children: "Digital Module & E-Book" })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-4 h-4 text-slate-400 group-hover:text-teal-500 group-hover:translate-x-0.5 transition-all shrink-0" })
                ]
              },
              ch.id
            );
          }) })
        ] })
      ) : (
        /* SCREEN 3: CHAPTER CONTENT SEGREGATED LEVEL (Lectures, Notes, DPPs) */
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                variant: "outline",
                size: "sm",
                onClick: () => {
                  setSelectedChapter(null);
                  setChapterItemSearch("");
                },
                className: "h-8 rounded-lg text-xs font-semibold gap-1.5 border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:bg-slate-100 dark:hover:bg-zinc-800 text-slate-700 dark:text-zinc-200",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "w-3.5 h-3.5" }),
                  "Back to Chapters"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-slate-500 dark:text-zinc-400 font-medium truncate", children: [
              selectedSubject.name,
              " • ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-slate-900 dark:text-white font-semibold", children: cleanChapterTitle(selectedChapter.title) })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 rounded-2xl border border-slate-200/80 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 shadow-xs space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col md:flex-row md:items-center justify-between gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20", children: "Active Chapter" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-slate-400 dark:text-zinc-500", children: selectedSubject.teachers?.[0]?.name || selectedSubject.faculty || "PW Faculty" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mt-1", children: cleanChapterTitle(selectedChapter.title) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2.5 text-xs flex-wrap", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-3 py-1.5 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-700 dark:text-blue-300", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Lectures: " }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold font-mono", children: segregatedContent.lectures.length || getChapterCounts(selectedChapter).lectureCount })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-3 py-1.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-700 dark:text-amber-300", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Class Notes: " }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold font-mono", children: segregatedContent.notes.length || getChapterCounts(selectedChapter).notesCount })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-3 py-1.5 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-700 dark:text-purple-300", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "DPP Sheets: " }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold font-mono", children: segregatedContent.dpps.length || getChapterCounts(selectedChapter).dppCount })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2 border-t border-slate-100 dark:border-zinc-800/80", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 p-1 rounded-xl bg-slate-100 dark:bg-zinc-800/80 w-fit", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    onClick: () => setChapterSegregatedTab("lectures"),
                    className: `flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${chapterSegregatedTab === "lectures" ? "bg-white dark:bg-zinc-900 text-slate-900 dark:text-white shadow-xs" : "text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white"}`,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Play, { className: "w-3 h-3 text-blue-500 fill-blue-500" }),
                      "Lectures (",
                      segregatedContent.lectures.length,
                      ")"
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    onClick: () => setChapterSegregatedTab("notes"),
                    className: `flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${chapterSegregatedTab === "notes" ? "bg-white dark:bg-zinc-900 text-slate-900 dark:text-white shadow-xs" : "text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white"}`,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "w-3 h-3 text-amber-500" }),
                      "Class Notes (",
                      segregatedContent.notes.length,
                      ")"
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    onClick: () => setChapterSegregatedTab("dpps"),
                    className: `flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${chapterSegregatedTab === "dpps" ? "bg-white dark:bg-zinc-900 text-slate-900 dark:text-white shadow-xs" : "text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white"}`,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(FileDown, { className: "w-3 h-3 text-purple-500" }),
                      "DPP Sheets & Solutions (",
                      segregatedContent.dpps.length,
                      ")"
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-full sm:w-64", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    value: chapterItemSearch,
                    onChange: (e) => setChapterItemSearch(e.target.value),
                    placeholder: "Search items...",
                    className: "h-8 pl-8 text-xs bg-white dark:bg-zinc-900 border-slate-200 dark:border-zinc-800 rounded-lg"
                  }
                )
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2.5", children: loadingChapterId === selectedChapter.id ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-12 text-center rounded-2xl border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/40", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: "w-6 h-6 animate-spin text-amber-500 mx-auto mb-2" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-slate-800 dark:text-zinc-200", children: "Extracting verified lectures, notes & DPP PDFs..." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-slate-500 dark:text-zinc-400 mt-1", children: "Connecting directly to Physics Wallah live attachment engine" })
          ] }) : chapterSegregatedTab === "lectures" ? (() => {
            let items = segregatedContent.lectures;
            if (chapterItemSearch.trim()) {
              const q = chapterItemSearch.toLowerCase();
              items = items.filter((i) => i.title.toLowerCase().includes(q));
            }
            if (items.length === 0) {
              return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-10 text-center rounded-2xl border border-dashed border-slate-300 dark:border-zinc-800 text-slate-500 dark:text-zinc-400 bg-white dark:bg-zinc-900/30", children: "No lectures found matching your search." });
            }
            return items.map((item, iIdx) => {
              const isChecked = Boolean(completedMap[item.id]);
              const notesPdf = item.pdfUrl || item.notesUrl;
              const dppPdf = item.dppPdfUrl;
              return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: `p-3.5 sm:px-4 rounded-xl border transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${isChecked ? "bg-emerald-50/50 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-900/30 text-slate-500 dark:text-zinc-400" : "bg-white dark:bg-zinc-900/70 hover:bg-slate-50 dark:hover:bg-zinc-900 border-slate-200/80 dark:border-zinc-800/80 text-slate-900 dark:text-white shadow-xs"}`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "div",
                      {
                        onClick: () => toggleCompletion(item.id),
                        className: "flex items-center gap-3 min-w-0 flex-1 cursor-pointer select-none",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `w-5 h-5 rounded-md border flex items-center justify-center shrink-0 transition-all ${isChecked ? "bg-emerald-500 border-emerald-500 text-white font-bold" : "border-slate-300 dark:border-zinc-700 bg-slate-50 dark:bg-zinc-900 hover:border-slate-400"}`, children: isChecked && /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "w-3.5 h-3.5 stroke-[3]" }) }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `text-xs sm:text-sm font-semibold leading-tight ${isChecked ? "line-through text-slate-400 dark:text-zinc-500" : "text-slate-900 dark:text-zinc-100"}`, children: item.title }),
                            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mt-1 text-[11px] text-slate-500 dark:text-zinc-400 flex-wrap", children: [
                              item.duration && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 font-mono", children: [
                                "⏱ ",
                                item.duration
                              ] }),
                              item.date && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                                "• 📅 ",
                                item.date.split("T")[0]
                              ] }),
                              item.faculty && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                                "• 👨‍🏫 ",
                                item.faculty
                              ] })
                            ] })
                          ] })
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 shrink-0 self-end sm:self-center flex-wrap", children: [
                      notesPdf && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        Button,
                        {
                          variant: "outline",
                          size: "sm",
                          onClick: (e) => {
                            e.stopPropagation();
                            openPdf(notesPdf, `${item.title} • Class Notes PDF`);
                          },
                          className: "h-7 px-2.5 rounded-lg text-[11px] font-semibold gap-1 border-amber-500/30 bg-amber-500/5 dark:bg-amber-500/10 hover:bg-amber-500/15 text-amber-700 dark:text-amber-300",
                          title: "Open verified PW Class Notes PDF",
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "w-3 h-3 text-amber-500" }),
                            "Notes PDF"
                          ]
                        }
                      ),
                      dppPdf && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        Button,
                        {
                          variant: "outline",
                          size: "sm",
                          onClick: (e) => {
                            e.stopPropagation();
                            openPdf(dppPdf, `${item.title} • DPP Sheet PDF`);
                          },
                          className: "h-7 px-2.5 rounded-lg text-[11px] font-semibold gap-1 border-purple-500/30 bg-purple-500/5 dark:bg-purple-500/10 hover:bg-purple-500/15 text-purple-700 dark:text-purple-300",
                          title: "Open verified PW DPP Sheet PDF",
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(FileDown, { className: "w-3 h-3 text-purple-500" }),
                            "DPP PDF"
                          ]
                        }
                      )
                    ] })
                  ]
                },
                item.id || iIdx
              );
            });
          })() : chapterSegregatedTab === "notes" ? (() => {
            let items = segregatedContent.notes;
            if (chapterItemSearch.trim()) {
              const q = chapterItemSearch.toLowerCase();
              items = items.filter((n) => n.title.toLowerCase().includes(q) || n.lectureTitle && n.lectureTitle.toLowerCase().includes(q));
            }
            if (items.length === 0) {
              return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-10 text-center rounded-2xl border border-dashed border-slate-300 dark:border-zinc-800 text-slate-500 dark:text-zinc-400 bg-white dark:bg-zinc-900/30", children: segregatedContent.notes.length === 0 ? "No class notes have been uploaded for this chapter yet. They will appear here immediately once live class concludes." : "No class notes found matching your search." });
            }
            return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-3", children: items.map((note) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                onClick: () => openPdf(note.url, note.title),
                className: "group p-4 rounded-xl border border-slate-200/80 dark:border-zinc-800 bg-white dark:bg-zinc-900/70 hover:bg-slate-50 dark:hover:bg-zinc-900 hover:border-slate-300 dark:hover:border-zinc-700 transition-all cursor-pointer shadow-xs flex items-center justify-between gap-3",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 min-w-0 flex-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "w-5 h-5" }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-xs sm:text-sm text-slate-900 dark:text-zinc-100 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors line-clamp-1", children: note.title }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-slate-500 dark:text-zinc-400 mt-0.5 truncate", children: note.lectureTitle ? `Attached to: ${note.lectureTitle}` : "Verified Class Notes PDF" })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2 shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Button,
                    {
                      variant: "outline",
                      size: "sm",
                      onClick: (e) => {
                        e.stopPropagation();
                        openPdf(note.url, note.title);
                      },
                      className: "h-7 px-2.5 rounded-lg text-[11px] font-semibold border-slate-200 dark:border-zinc-700 bg-slate-50 dark:bg-zinc-800",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "w-3 h-3 mr-1 text-slate-500" }),
                        "View"
                      ]
                    }
                  ) })
                ]
              },
              note.id
            )) });
          })() : (() => {
            let items = segregatedContent.dpps;
            if (chapterItemSearch.trim()) {
              const q = chapterItemSearch.toLowerCase();
              items = items.filter((d) => d.title.toLowerCase().includes(q) || d.lectureTitle && d.lectureTitle.toLowerCase().includes(q));
            }
            if (items.length === 0) {
              return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-10 text-center rounded-2xl border border-dashed border-slate-300 dark:border-zinc-800 text-slate-500 dark:text-zinc-400 bg-white dark:bg-zinc-900/30", children: segregatedContent.dpps.length === 0 ? "No DPP sheets have been attached to this chapter yet. Daily practice problem sheets are updated alongside live lectures." : "No DPP sheets found matching your search." });
            }
            return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-3", children: items.map((dpp) => {
              const isDppSolved = Boolean(completedMap[dpp.id] || dpp.rawId && completedMap[dpp.rawId]);
              return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "group p-4 rounded-xl border border-slate-200/80 dark:border-zinc-800 bg-white dark:bg-zinc-900/70 hover:bg-slate-50 dark:hover:bg-zinc-900 hover:border-slate-300 dark:hover:border-zinc-700 transition-all shadow-xs flex items-center justify-between gap-3",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 min-w-0 flex-1", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "div",
                        {
                          onClick: () => toggleCompletion(dpp.id),
                          className: `w-5 h-5 rounded-md border flex items-center justify-center shrink-0 transition-all cursor-pointer ${isDppSolved ? "bg-purple-600 border-purple-600 text-white font-bold" : "border-purple-300 dark:border-purple-700 bg-purple-50/40 dark:bg-zinc-900 hover:border-purple-500"}`,
                          title: "Mark DPP as Solved",
                          children: isDppSolved && /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "w-3.5 h-3.5 stroke-[3]" })
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-600 dark:text-purple-400 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FileDown, { className: "w-5 h-5" }) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: `font-bold text-xs sm:text-sm leading-tight line-clamp-1 ${isDppSolved ? "line-through text-slate-400 dark:text-zinc-500" : "text-slate-900 dark:text-zinc-100"}`, children: dpp.title }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-slate-500 dark:text-zinc-400 mt-0.5 truncate", children: dpp.lectureTitle ? `Attached to: ${dpp.lectureTitle}` : "Daily Practice Problem Sheet & Solution" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2 shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      Button,
                      {
                        variant: "outline",
                        size: "sm",
                        onClick: () => openPdf(dpp.url, dpp.title),
                        className: "h-7 px-2.5 rounded-lg text-[11px] font-semibold border-purple-500/30 bg-purple-500/5 text-purple-700 dark:text-purple-300 hover:bg-purple-500/10",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "w-3 h-3 mr-1 text-purple-500" }),
                          "View DPP"
                        ]
                      }
                    ) })
                  ]
                },
                dpp.id
              );
            }) });
          })() })
        ] })
      ) }),
      activeTab === "schedule" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-8", children: [
        upcomingEvents.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-between", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-bold text-base sm:text-lg text-slate-900 dark:text-white", children: [
            "Upcoming Events (",
            upcomingEvents.length,
            ")"
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-3.5", children: upcomingEvents.map((item, idx) => {
            item.type !== "DPP" && item.type !== "NOTES";
            const isDpp = item.type === "DPP";
            const isNotes = item.type === "NOTES";
            const teacherImg = resolveTeacherImage(item.teacher, item.teacherImage);
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                onClick: () => {
                  if (isNotes && item.notesUrl) {
                    openPdf(item.notesUrl, item.topic);
                  } else if (isDpp && (item.dppPdfUrl || item.notesUrl)) {
                    openPdf(item.dppPdfUrl || item.notesUrl, item.topic);
                  } else if (item.notesUrl) {
                    openPdf(item.notesUrl, `${item.topic} • Class Notes`);
                  }
                },
                className: "group p-4 rounded-2xl border border-slate-200/80 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 hover:bg-slate-50 dark:hover:bg-zinc-900 hover:border-slate-300 dark:hover:border-zinc-700 transition-all cursor-pointer shadow-xs flex flex-col justify-between gap-3",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5 text-xs text-slate-500 dark:text-zinc-400 font-mono", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-3.5 h-3.5 text-slate-400" }),
                      formatScheduleTime(item.startTime)
                    ] }),
                    item.isLive ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-red-500 text-white shadow-xs animate-pulse", children: "LIVE" }) : item.isUpcoming ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-cyan-50 dark:bg-cyan-950/40 text-cyan-600 dark:text-cyan-400 border border-cyan-200 dark:border-cyan-800", children: "UPCOMING" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-2 py-0.5 rounded text-[10px] font-semibold text-slate-500 bg-slate-100 dark:bg-zinc-800", children: "ENDED" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-3", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3.5 min-w-0 flex-1", children: [
                      isDpp ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-11 h-11 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800/60 flex items-center justify-center text-indigo-600 dark:text-indigo-400 shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FileDown, { className: "w-5 h-5" }) }) : isNotes ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-11 h-11 rounded-xl bg-sky-50 dark:bg-sky-950/40 border border-sky-200 dark:border-sky-800/60 flex items-center justify-center text-sky-600 dark:text-sky-400 shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "w-5 h-5" }) }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-11 h-11 rounded-xl overflow-hidden relative border border-slate-200 dark:border-zinc-700 bg-slate-100 dark:bg-zinc-800 shrink-0", children: [
                        teacherImg ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "img",
                          {
                            src: teacherImg,
                            alt: item.teacher,
                            referrerPolicy: "no-referrer",
                            className: "w-full h-full object-cover",
                            onError: (e) => {
                              e.currentTarget.style.display = "none";
                            }
                          }
                        ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full h-full flex items-center justify-center font-bold text-amber-600 dark:text-amber-400 text-sm", children: item.teacher?.charAt(0) || "P" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-3.5 h-3.5 rounded bg-red-600 text-[8px] font-extrabold text-white flex items-center justify-center absolute bottom-0 right-0 tracking-tighter shadow-2xs", children: "PW" })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-slate-500 dark:text-zinc-400 truncate", children: [
                          isDpp ? "DPP" : isNotes ? "Notes" : "Lecture",
                          " • ",
                          item.subject,
                          " By ",
                          item.teacher
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-xs sm:text-sm text-slate-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors leading-snug truncate mt-0.5", children: isDpp ? `💡 ${item.topic}` : item.topic })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-4 h-4 text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white group-hover:translate-x-0.5 transition-all shrink-0" })
                  ] })
                ]
              },
              `up-${item.id || idx}`
            );
          }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pt-2 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => {
                const el = document.getElementById("weekly-schedule");
                el?.scrollIntoView({ behavior: "smooth" });
              },
              className: "inline-flex items-center justify-center px-6 py-2 rounded-xl text-xs font-semibold border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:bg-slate-50 dark:hover:bg-zinc-800 text-slate-700 dark:text-zinc-300 shadow-2xs transition-all cursor-pointer",
              children: "View Full Schedule"
            }
          ) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { id: "weekly-schedule", className: "pt-4 border-t border-slate-200/80 dark:border-zinc-800", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-6 items-start", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-8 space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-3 flex-wrap", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight", children: "Weekly Schedule" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "select",
                  {
                    value: selectedScheduleSubject,
                    onChange: (e) => setSelectedScheduleSubject(e.target.value),
                    className: "h-8 pl-3 pr-8 rounded-lg text-xs font-semibold bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 text-slate-700 dark:text-zinc-300 shadow-2xs cursor-pointer focus:outline-none focus:ring-1 focus:ring-amber-500 appearance-none",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "ALL", children: "Subjects (All)" }),
                      scheduleSubjectOptions.map((sub) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: sub, children: sub }, sub))
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "w-3.5 h-3.5 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400" })
              ] })
            ] }),
            isLoadingSchedule ? (
              /* Skeleton animation matching frame 00:12 */
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 pt-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-32 rounded-2xl bg-slate-200/70 dark:bg-zinc-800/80 animate-pulse border border-slate-200/50 dark:border-zinc-800/80" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-32 rounded-2xl bg-slate-200/70 dark:bg-zinc-800/80 animate-pulse border border-slate-200/50 dark:border-zinc-800/80" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-32 rounded-2xl bg-slate-200/70 dark:bg-zinc-800/80 animate-pulse border border-slate-200/50 dark:border-zinc-800/80" })
              ] })
            ) : groupedSchedule.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-12 text-center rounded-2xl border border-dashed border-slate-300 dark:border-zinc-800 text-slate-500 dark:text-zinc-400 bg-white dark:bg-zinc-900/30", children: [
              "No classes scheduled for ",
              selectedScheduleDate,
              "."
            ] }) : groupedSchedule.map(({ time, items }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-mono font-bold text-slate-500 dark:text-zinc-400 mt-5 first:mt-1", children: time }),
              items.map((item, iIdx) => {
                const isNotes = item.type === "NOTES";
                const isDpp = item.type === "DPP";
                const teacherImg = resolveTeacherImage(item.teacher, item.teacherImage);
                if (isNotes) {
                  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "div",
                    {
                      className: "p-4 sm:p-5 rounded-2xl border border-slate-200/80 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 shadow-xs flex flex-col justify-between gap-3.5",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3.5 min-w-0", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-xl bg-sky-50 dark:bg-sky-950/40 border border-sky-200 dark:border-sky-800/60 flex items-center justify-center text-sky-600 dark:text-sky-400 shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "w-6 h-6" }) }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 flex-wrap", children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-slate-500 dark:text-zinc-400", children: [
                                "Notes • ",
                                item.subject,
                                " By ",
                                item.teacher
                              ] }),
                              item.chapter && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "px-1.5 py-0.5 rounded text-[10px] font-semibold bg-sky-500/10 text-sky-700 dark:text-sky-300 border border-sky-500/20 truncate max-w-[200px]", title: item.chapter, children: [
                                "📖 ",
                                item.chapter
                              ] })
                            ] }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-sm sm:text-base text-slate-900 dark:text-white leading-snug mt-0.5 line-clamp-2", children: item.topic })
                          ] })
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 pt-2 border-t border-slate-100 dark:border-zinc-800", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsxs(
                            Button,
                            {
                              variant: "outline",
                              size: "sm",
                              onClick: () => openPdf(item.notesUrl, item.topic),
                              className: "h-7 px-3 rounded-lg text-xs font-semibold gap-1.5 border-slate-200 dark:border-zinc-700 text-slate-700 dark:text-zinc-200",
                              children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "w-3.5 h-3.5 text-slate-500" }),
                                "View Note"
                              ]
                            }
                          ),
                          item.notesUrl && /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "a",
                            {
                              href: item.notesUrl,
                              download: true,
                              target: "_blank",
                              rel: "noreferrer",
                              className: "w-7 h-7 rounded-lg border border-slate-200 dark:border-zinc-700 flex items-center justify-center text-slate-600 dark:text-zinc-300 hover:bg-slate-100 dark:hover:bg-zinc-800",
                              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "w-3.5 h-3.5" })
                            }
                          )
                        ] })
                      ]
                    },
                    item.id || iIdx
                  );
                }
                if (isDpp) {
                  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "div",
                    {
                      className: "p-4 sm:p-5 rounded-2xl border border-slate-200/80 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 shadow-xs flex items-center justify-between gap-3",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3.5 min-w-0 flex-1", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800/60 flex items-center justify-center text-indigo-600 dark:text-indigo-400 shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FileDown, { className: "w-6 h-6" }) }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 flex-wrap", children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-slate-500 dark:text-zinc-400", children: [
                                "DPP • ",
                                item.subject,
                                " By ",
                                item.teacher
                              ] }),
                              item.chapter && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "px-1.5 py-0.5 rounded text-[10px] font-semibold bg-purple-500/10 text-purple-700 dark:text-purple-300 border border-purple-500/20 truncate max-w-[200px]", title: item.chapter, children: [
                                "📖 ",
                                item.chapter
                              ] })
                            ] }),
                            /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "font-bold text-sm text-slate-900 dark:text-white leading-snug truncate mt-0.5", children: [
                              "💡 ",
                              item.topic
                            ] })
                          ] })
                        ] }),
                        (item.dppPdfUrl || item.notesUrl) && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          Button,
                          {
                            variant: "outline",
                            size: "sm",
                            onClick: () => openPdf(item.dppPdfUrl || item.notesUrl, `${item.topic} • DPP Sheet PDF`),
                            className: "h-7 px-3 rounded-lg text-xs font-semibold gap-1.5 border-purple-500/30 bg-purple-500/5 text-purple-700 dark:text-purple-300 hover:bg-purple-500/10 shrink-0",
                            children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "w-3.5 h-3.5 text-purple-500" }),
                              "View DPP PDF"
                            ]
                          }
                        )
                      ]
                    },
                    item.id || iIdx
                  );
                }
                return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "p-4 sm:p-5 rounded-2xl border border-slate-200/80 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 shadow-xs space-y-3.5",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-3", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3.5 min-w-0 flex-1", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-12 h-12 rounded-xl overflow-hidden relative border border-slate-200 dark:border-zinc-700 bg-slate-100 dark:bg-zinc-800 shrink-0", children: [
                            teacherImg ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "img",
                              {
                                src: teacherImg,
                                alt: item.teacher,
                                referrerPolicy: "no-referrer",
                                className: "w-full h-full object-cover",
                                onError: (e) => {
                                  e.currentTarget.style.display = "none";
                                }
                              }
                            ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full h-full flex items-center justify-center font-bold text-amber-600 dark:text-amber-400 text-sm", children: item.teacher.charAt(0) }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-3.5 h-3.5 rounded bg-red-600 text-[8px] font-extrabold text-white flex items-center justify-center absolute bottom-0 right-0 tracking-tighter shadow-2xs", children: "PW" })
                          ] }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 flex-wrap", children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-slate-500 dark:text-zinc-400", children: [
                                "Lecture • ",
                                item.subject,
                                " By ",
                                item.teacher
                              ] }),
                              item.chapter && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "px-1.5 py-0.5 rounded text-[10px] font-semibold bg-amber-500/10 text-amber-700 dark:text-amber-300 border border-amber-500/20 truncate max-w-[200px]", title: item.chapter, children: [
                                "📖 ",
                                item.chapter
                              ] })
                            ] }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-sm sm:text-base text-slate-900 dark:text-white leading-snug mt-0.5 line-clamp-2", children: item.topic }),
                            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 text-[11px] text-slate-400 dark:text-zinc-500 font-mono mt-1", children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-3 h-3" }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: item.duration || "1h 45m" })
                            ] })
                          ] })
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "shrink-0", children: item.isLive ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-red-500 text-white shadow-xs animate-pulse", children: "LIVE" }) : item.isUpcoming ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-cyan-50 dark:bg-cyan-950/40 text-cyan-600 dark:text-cyan-400 border border-cyan-200 dark:border-cyan-800", children: "UPCOMING" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-2 py-0.5 rounded text-[10px] font-semibold text-slate-500 dark:text-zinc-400 bg-slate-100 dark:bg-zinc-800", children: "ENDED" }) })
                      ] }),
                      (item.notesUrl || item.dppPdfUrl) && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 pt-1 flex-wrap", children: [
                        item.notesUrl && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          Button,
                          {
                            variant: "outline",
                            size: "sm",
                            onClick: () => openPdf(item.notesUrl, `${item.topic} • Class Notes PDF`),
                            className: "h-8 px-3 rounded-lg text-xs font-semibold gap-1.5 border-amber-500/30 bg-amber-500/5 text-amber-700 dark:text-amber-300 hover:bg-amber-500/10",
                            children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "w-3.5 h-3.5 text-amber-500" }),
                              "View Notes PDF"
                            ]
                          }
                        ),
                        item.dppPdfUrl && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          Button,
                          {
                            variant: "outline",
                            size: "sm",
                            onClick: () => openPdf(item.dppPdfUrl, `${item.dppTitle || item.topic} • DPP Sheet PDF`),
                            className: "h-8 px-3 rounded-lg text-xs font-semibold gap-1.5 border-purple-500/30 bg-purple-500/5 text-purple-700 dark:text-purple-300 hover:bg-purple-500/10",
                            children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx(FileDown, { className: "w-3.5 h-3.5 text-purple-500" }),
                              "View DPP PDF"
                            ]
                          }
                        )
                      ] }),
                      (item.dppTitle || item.dppPdfUrl || item.hasDpp) && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-2.5 border-t border-slate-100 dark:border-zinc-800 flex items-center justify-between gap-3 text-xs", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-slate-700 dark:text-zinc-300 min-w-0 flex-1", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-amber-500 text-sm shrink-0", children: "💡" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate font-medium", children: item.dppTitle || `${item.topic} : DPP (Quiz)` })
                        ] }),
                        item.dppPdfUrl ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          Button,
                          {
                            variant: "outline",
                            size: "sm",
                            onClick: () => openPdf(item.dppPdfUrl, `${item.dppTitle || item.topic} • DPP Sheet PDF`),
                            className: "h-6 px-2.5 rounded text-[11px] font-semibold border-purple-500/30 text-purple-700 dark:text-purple-300 hover:bg-purple-500/10 shrink-0 gap-1",
                            children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "w-3 h-3 text-purple-500" }),
                              "View DPP PDF"
                            ]
                          }
                        ) : null
                      ] })
                    ]
                  },
                  item.id || iIdx
                );
              })
            ] }, time))
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-4 lg:sticky lg:top-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 rounded-2xl border border-slate-200/80 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 shadow-xs space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-sm sm:text-base text-slate-900 dark:text-white", children: monthLabel }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    variant: "outline",
                    size: "sm",
                    onClick: handleTodayClick,
                    className: "h-7 px-2 rounded-md text-[11px] font-semibold border-slate-200 dark:border-zinc-700 bg-slate-50 dark:bg-zinc-800 text-slate-700 dark:text-zinc-200",
                    children: "Today"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    onClick: handlePrevMonth,
                    className: "w-7 h-7 rounded-md border border-slate-200 dark:border-zinc-700 flex items-center justify-center text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-zinc-800 transition-colors",
                    title: "Previous Month",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "w-3.5 h-3.5" })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    onClick: handleNextMonth,
                    className: "w-7 h-7 rounded-md border border-slate-200 dark:border-zinc-700 flex items-center justify-center text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-zinc-800 transition-colors",
                    title: "Next Month",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-3.5 h-3.5" })
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-7 text-center", children: ["M", "T", "W", "T", "F", "S", "S"].map((d, dIdx) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] font-bold text-slate-400 dark:text-zinc-500 py-1", children: d }, dIdx)) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-7 gap-y-1.5 text-center", children: calendarDays.map((slot, sIdx) => {
              if (!slot) {
                return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8" }, `blank-${sIdx}`);
              }
              const isSelected = slot.dateStr === selectedScheduleDate;
              const isToday = slot.dateStr === todayIstDate;
              const hasClass = availableScheduleDates.includes(slot.dateStr);
              return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  onClick: () => setSelectedScheduleDate(slot.dateStr),
                  className: `relative w-8 h-8 rounded-full text-xs font-semibold flex flex-col items-center justify-center transition-all cursor-pointer ${isSelected ? "bg-indigo-600 text-white shadow-xs font-bold" : isToday ? "border-2 border-indigo-600 text-indigo-600 dark:text-indigo-400 font-bold" : hasClass ? "text-slate-900 dark:text-zinc-100 font-bold bg-amber-500/10 hover:bg-amber-500/20" : "text-slate-700 dark:text-zinc-300 hover:bg-slate-100 dark:hover:bg-zinc-800"}`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: slot.dayNum }),
                    hasClass && !isSelected && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1 h-1 rounded-full bg-amber-500 absolute bottom-0.5" })
                  ]
                }
              ) }, slot.dateStr);
            }) })
          ] }) })
        ] }) })
      ] }),
      activeTab === "faculty" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 sm:p-5 rounded-2xl border border-slate-200/80 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-bold text-base sm:text-lg text-slate-900 dark:text-white", children: [
              "Official Faculty for ",
              currentBatch.name
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-slate-500 dark:text-zinc-400 mt-0.5", children: "Every teacher provides verified video lectures, handwritten class notes, and daily practice problem (DPP) sheets." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              variant: "outline",
              size: "sm",
              onClick: () => {
                setTempSelectedTeacherSubjectIds(selectedTeacherSubjectIds);
                setTeacherSelectModalOpen(true);
              },
              className: "h-8 rounded-xl text-xs font-semibold gap-1.5 border-amber-500/30 bg-amber-500/5 dark:bg-amber-500/10 hover:bg-amber-500/15 text-amber-700 dark:text-amber-300 shrink-0",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "w-3.5 h-3.5 text-amber-500" }),
                "Customize Faculty Selection (",
                displayedSubjects.length,
                "/",
                currentBatch.subjects.length,
                ")"
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4", children: currentBatch.subjects.flatMap((s) => (s.teachers || []).map((t) => ({ ...t, subjectId: s.id, subjectName: s.name, syllabusPdf: s.syllabusPdf }))).map((teacher, tIdx) => {
          const isSelected = selectedTeacherSubjectIds.includes(teacher.subjectId);
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: `p-5 rounded-2xl border transition-all shadow-xs flex flex-col justify-between gap-4 ${isSelected ? "bg-white dark:bg-zinc-900/60 border-slate-200/80 dark:border-zinc-800" : "bg-slate-50/50 dark:bg-zinc-900/30 border-slate-200/50 dark:border-zinc-800/50 opacity-80"}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4", children: [
                  teacher.imageUrl ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "img",
                    {
                      src: teacher.imageUrl,
                      alt: teacher.name,
                      referrerPolicy: "no-referrer",
                      className: "w-14 h-14 rounded-2xl object-cover border border-slate-200 dark:border-zinc-700 bg-slate-100 dark:bg-zinc-800 shrink-0",
                      onError: (e) => {
                        e.currentTarget.style.display = "none";
                      }
                    }
                  ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-600 dark:text-amber-400 font-bold text-lg flex items-center justify-center shrink-0", children: teacher.name.charAt(0) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 flex-wrap", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-slate-100 dark:bg-zinc-800 text-slate-700 dark:text-zinc-300 border border-slate-200 dark:border-zinc-700", children: teacher.subjectName }),
                      isSelected ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-1.5 py-0.2 rounded text-[9px] font-bold bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20", children: "Active" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-1.5 py-0.2 rounded text-[9px] font-medium text-slate-400 bg-slate-100 dark:bg-zinc-800", children: "Inactive" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-base text-slate-900 dark:text-white mt-1 leading-snug", children: teacher.name }),
                    teacher.featuredLine && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-slate-500 dark:text-zinc-400 line-clamp-2 mt-0.5", children: teacher.featuredLine })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-3 border-t border-slate-100 dark:border-zinc-800 flex items-center justify-between text-xs text-slate-500 dark:text-zinc-400", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: teacher.experience || "Expert Faculty" }),
                  teacher.syllabusPdf && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "button",
                    {
                      onClick: () => openPdf(teacher.syllabusPdf, `${teacher.name} • Syllabus Roadmap`),
                      className: "font-semibold text-amber-600 dark:text-amber-400 hover:underline flex items-center gap-1",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "w-3 h-3" }),
                        "Syllabus PDF"
                      ]
                    }
                  )
                ] })
              ]
            },
            teacher._id || tIdx
          );
        }) })
      ] })
    ] }),
    teacherSelectModalOpen && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-zinc-950 border border-slate-200 dark:border-zinc-800 rounded-2xl w-full max-w-3xl max-h-[90vh] flex flex-col shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-150", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 sm:p-5 border-b border-slate-200 dark:border-zinc-800 flex items-start justify-between gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20", children: "Faculty Customization" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-slate-400 dark:text-zinc-500", children: "•" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold text-slate-600 dark:text-zinc-400", children: currentBatch.name })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-base sm:text-lg text-slate-900 dark:text-white mt-1", children: "Choose Your Preferred Teachers" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-slate-500 dark:text-zinc-400 mt-0.5", children: "Select your preferred teachers for each subject. Only ticked teachers' lectures and DPPs will be included in your curriculum and progress." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => setTeacherSelectModalOpen(false),
            className: "w-8 h-8 rounded-lg flex items-center justify-center text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-zinc-800 shrink-0",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-4 h-4" })
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 sm:px-5 py-2.5 border-b border-slate-200 dark:border-zinc-800 bg-slate-50/70 dark:bg-zinc-900/40 flex items-center justify-between gap-2 flex-wrap", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-slate-600 dark:text-zinc-400", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-slate-900 dark:text-white font-mono", children: tempSelectedTeacherSubjectIds.length }),
          " of ",
          currentBatch.subjects.length,
          " selected"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => {
                const disciplineMap = /* @__PURE__ */ new Map();
                currentBatch.subjects.forEach((sub) => {
                  const disc = getSubjectDiscipline(sub.name);
                  if (!disciplineMap.has(disc)) disciplineMap.set(disc, sub.id);
                });
                setTempSelectedTeacherSubjectIds(Array.from(disciplineMap.values()));
              },
              className: "px-2.5 py-1 rounded-lg text-xs font-semibold bg-white dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 text-slate-700 dark:text-zinc-300 hover:bg-slate-100 dark:hover:bg-zinc-700 cursor-pointer shadow-2xs",
              children: "1 per Subject (Recommended)"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => {
                setTempSelectedTeacherSubjectIds(currentBatch.subjects.map((s) => s.id));
              },
              className: "px-2.5 py-1 rounded-lg text-xs font-semibold bg-white dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 text-slate-700 dark:text-zinc-300 hover:bg-slate-100 dark:hover:bg-zinc-700 cursor-pointer shadow-2xs",
              children: "Select All"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => setTempSelectedTeacherSubjectIds([]),
              className: "px-2.5 py-1 rounded-lg text-xs font-semibold text-slate-500 hover:text-slate-800 dark:hover:text-zinc-200 cursor-pointer",
              children: "Clear"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 overflow-y-auto p-4 sm:p-5 space-y-6", children: groupedTeacherDisciplines.map(({ discipline, subjects }) => {
        const meta = getDisciplineMetadata(discipline);
        const selectedInDiscipline = subjects.filter((s) => tempSelectedTeacherSubjectIds.includes(s.id)).length;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between pb-1.5 border-b border-slate-100 dark:border-zinc-800/80", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-base", children: meta.icon }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-sm text-slate-900 dark:text-white", children: discipline }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-slate-400 dark:text-zinc-500 hidden sm:inline", children: "— Choose preferred faculty" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `px-2 py-0.5 rounded text-[11px] font-bold ${meta.color}`, children: [
              selectedInDiscipline,
              " of ",
              subjects.length,
              " selected"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-3", children: subjects.map((sub) => {
            const isTicked = tempSelectedTeacherSubjectIds.includes(sub.id);
            const teacher = sub.teachers?.[0];
            const teacherName = teacher?.name || sub.faculty || "PW Faculty";
            const teacherImg = teacher?.imageUrl || resolveTeacherImage(teacherName);
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                onClick: () => {
                  setTempSelectedTeacherSubjectIds(
                    (prev) => prev.includes(sub.id) ? prev.filter((id) => id !== sub.id) : [...prev, sub.id]
                  );
                },
                className: `p-3.5 rounded-2xl border transition-all cursor-pointer flex items-center justify-between gap-3 select-none ${isTicked ? "bg-amber-500/10 border-amber-500/50 shadow-xs" : "bg-white dark:bg-zinc-900/60 hover:bg-slate-50 dark:hover:bg-zinc-900 border-slate-200 dark:border-zinc-800"}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3.5 min-w-0 flex-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-13 h-13 rounded-xl overflow-hidden relative border border-slate-200 dark:border-zinc-700 bg-slate-100 dark:bg-zinc-800 shrink-0 shadow-2xs", children: teacherImg ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "img",
                      {
                        src: teacherImg,
                        alt: teacherName,
                        referrerPolicy: "no-referrer",
                        className: "w-full h-full object-cover object-top",
                        onError: (e) => {
                          e.currentTarget.style.display = "none";
                        }
                      }
                    ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full h-full flex items-center justify-center font-bold text-amber-600 dark:text-amber-400 text-sm", children: teacherName.charAt(0) }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: `font-bold text-xs sm:text-sm leading-tight truncate ${isTicked ? "text-amber-900 dark:text-amber-200" : "text-slate-900 dark:text-white"}`, children: teacherName }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-slate-500 dark:text-zinc-400 truncate mt-0.5", children: sub.name }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[10px] text-slate-400 dark:text-zinc-500 truncate mt-0.5", children: [
                        sub.chapters.length,
                        " Chapters",
                        teacher?.experience ? ` • ${teacher.experience}` : ""
                      ] })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `w-5 h-5 rounded-md border flex items-center justify-center shrink-0 transition-all ${isTicked ? "bg-amber-500 border-amber-500 text-white font-bold" : "border-slate-300 dark:border-zinc-700 bg-slate-50 dark:bg-zinc-900"}`, children: isTicked && /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "w-3.5 h-3.5 stroke-[3]" }) })
                ]
              },
              sub.id
            );
          }) })
        ] }, discipline);
      }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 sm:p-5 border-t border-slate-200 dark:border-zinc-800 bg-slate-50/50 dark:bg-zinc-900/30 flex items-center justify-between gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            variant: "outline",
            size: "sm",
            onClick: () => setTeacherSelectModalOpen(false),
            className: "text-xs rounded-xl",
            children: "Cancel"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            size: "sm",
            onClick: handleSaveTeacherSelection,
            className: "bg-amber-500 hover:bg-amber-600 text-white font-semibold text-xs rounded-xl px-5 shadow-xs",
            children: [
              "Save & Apply Selection (",
              tempSelectedTeacherSubjectIds.length,
              " Teachers)"
            ]
          }
        )
      ] })
    ] }) }),
    batchModalOpen && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-zinc-950 border border-slate-200 dark:border-zinc-800 rounded-2xl w-full max-w-xl max-h-[85vh] flex flex-col shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-150", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 sm:p-5 border-b border-slate-200 dark:border-zinc-800 flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-base text-slate-900 dark:text-white", children: "Switch Physics Wallah Batch" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-slate-500 dark:text-zinc-400 mt-0.5", children: "Select any live batch to fetch all faculties, chapters, and verified PDFs" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => setBatchModalOpen(false),
            className: "w-8 h-8 rounded-lg flex items-center justify-center text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-zinc-800",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-4 h-4" })
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4 border-b border-slate-200 dark:border-zinc-800 bg-slate-50/50 dark:bg-zinc-900/30", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            value: batchSearchQuery,
            onChange: (e) => setBatchSearchQuery(e.target.value),
            placeholder: "Search batches (e.g. Arjuna JEE 2027, Lakshya, Prayas)...",
            className: "pl-9 h-10 text-xs sm:text-sm bg-white dark:bg-zinc-900 border-slate-200 dark:border-zinc-800 rounded-xl",
            autoFocus: true
          }
        )
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 overflow-y-auto p-4 space-y-2", children: filteredCatalog.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-8 text-center space-y-3 rounded-2xl border border-dashed border-slate-200 dark:border-zinc-800 bg-slate-50/50 dark:bg-zinc-900/30", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs sm:text-sm text-slate-600 dark:text-zinc-400 font-medium", children: [
          "No batches found matching “",
          batchSearchQuery,
          "”"
        ] }),
        directPastedBatchId ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            onClick: () => {
              setSelectedBatchId(directPastedBatchId);
              setBatchModalOpen(false);
            },
            className: "bg-amber-500 hover:bg-amber-600 text-white text-xs font-semibold rounded-xl",
            children: [
              "Load Custom Batch: ",
              directPastedBatchId
            ]
          }
        ) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-slate-400 dark:text-zinc-500", children: "Tip: You can paste any 24-character PW Batch ID or URL to load it directly." })
      ] }) : filteredCatalog.map((b) => {
        const isCurrent = b.batch_id === selectedBatchId;
        const isCustom = b.exam === "CUSTOM";
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            onClick: () => {
              setSelectedBatchId(b.batch_id);
              setBatchModalOpen(false);
            },
            className: `p-3.5 rounded-xl border transition-all cursor-pointer flex items-center justify-between gap-3 ${isCurrent ? "bg-amber-500/10 border-amber-500/40 text-amber-900 dark:text-amber-200" : isCustom ? "bg-gradient-to-r from-amber-500/10 to-orange-500/10 border-amber-500/50 text-slate-900 dark:text-white" : "bg-white dark:bg-zinc-900/60 hover:bg-slate-50 dark:hover:bg-zinc-900 border-slate-200 dark:border-zinc-800 text-slate-800 dark:text-zinc-200"}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold text-xs sm:text-sm leading-tight truncate", children: b.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mt-1 text-[11px] text-slate-500 dark:text-zinc-400", children: [
                  b.exam && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                    "🎯 ",
                    b.exam
                  ] }),
                  b.class && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                    "• Class ",
                    b.class
                  ] }),
                  b.language && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                    "• ",
                    b.language
                  ] })
                ] })
              ] }),
              isCurrent ? /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-amber-500 text-white text-[10px] font-bold", children: "Active" }) : isCustom ? /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-amber-600 text-white text-[10px] font-bold", children: "Direct Open" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-4 h-4 text-slate-400" })
            ]
          },
          b.batch_id
        );
      }) })
    ] }) }),
    activePdfModal && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex flex-col p-2 sm:p-4 animate-in fade-in duration-200", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-t-2xl p-3 sm:px-5 flex items-center justify-between gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2.5 min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "w-4 h-4 text-red-500 shrink-0" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold text-xs sm:text-sm text-slate-900 dark:text-white truncate", children: activePdfModal.title })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 shrink-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              variant: "outline",
              size: "sm",
              onClick: () => window.open(activePdfModal.url, "_blank", "noopener,noreferrer"),
              className: "h-8 rounded-lg text-xs font-semibold gap-1.5 border-slate-200 dark:border-zinc-700 bg-slate-50 dark:bg-zinc-800 text-slate-700 dark:text-zinc-200",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "w-3.5 h-3.5" }),
                "Open Fullscreen"
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href: activePdfModal.url,
              download: true,
              target: "_blank",
              rel: "noreferrer",
              className: "inline-flex items-center justify-center h-8 px-3 rounded-lg text-xs font-semibold bg-amber-500 hover:bg-amber-600 text-white gap-1.5 shadow-xs",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "w-3.5 h-3.5" }),
                "Download"
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => setActivePdfModal(null),
              className: "w-8 h-8 rounded-lg flex items-center justify-center text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-zinc-800",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-4 h-4" })
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 bg-slate-100 dark:bg-zinc-950 rounded-b-2xl overflow-hidden border-x border-b border-slate-200 dark:border-zinc-800 relative", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "iframe",
        {
          src: `https://docs.google.com/viewer?url=${encodeURIComponent(activePdfModal.url)}&embedded=true`,
          title: activePdfModal.title,
          className: "w-full h-full border-none"
        }
      ) })
    ] }),
    !overlayDismissed && (!currentBatch.subjects || currentBatch.subjects.length === 0) && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 backdrop-blur-xl bg-slate-900/40 dark:bg-black/65 transition-all duration-300 animate-in fade-in", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-full max-w-md rounded-3xl border border-amber-500/30 bg-white/95 dark:bg-zinc-900/95 backdrop-blur-2xl p-6 sm:p-8 shadow-2xl overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => setOverlayDismissed(true),
          className: "absolute top-4 right-4 p-2 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-zinc-200 hover:bg-slate-100 dark:hover:bg-zinc-800 transition-colors cursor-pointer z-20",
          title: "Dismiss overlay",
          "aria-label": "Close",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-5 h-5" })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-20 -right-20 w-44 h-44 bg-amber-500/20 rounded-full blur-3xl pointer-events-none" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -bottom-20 -left-20 w-44 h-44 bg-orange-500/20 rounded-full blur-3xl pointer-events-none" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 flex flex-col items-center text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mb-5 flex items-center justify-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -inset-3 rounded-3xl bg-gradient-to-tr from-amber-500/30 via-orange-500/20 to-amber-600/30 animate-pulse blur-sm" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -inset-1 rounded-2xl border-2 border-amber-500/40 border-t-amber-500 animate-spin [animation-duration:3s]" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center text-white font-black text-xl shadow-lg shadow-amber-500/40 relative", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Flame, { className: "w-8 h-8 fill-white text-white drop-shadow-sm animate-pulse" }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl sm:text-2xl font-black tracking-tight text-slate-900 dark:text-white", children: apiError ? "Connecting to PW Engine…" : "Loading Physics Wallah Portal" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs sm:text-sm text-slate-600 dark:text-zinc-400 mt-2 leading-relaxed max-w-xs", children: apiError ? "The PW API backend is currently starting or unreachable. We are automatically reconnecting in the background..." : `Synchronizing live curriculum, verified teachers & chapter schedules for ${currentBatch.name || "PW Batch"}...` }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full bg-slate-100 dark:bg-zinc-800/80 h-2 rounded-full overflow-hidden my-5 border border-slate-200/50 dark:border-zinc-700/50 relative", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full bg-gradient-to-r from-amber-500 via-orange-400 to-amber-500 rounded-full w-full animate-pulse" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/25 mb-5", children: apiError ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-2 h-2 rounded-full bg-amber-500 animate-ping" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
            "Auto-reconnecting ",
            retryCountdown > 0 ? `in ${retryCountdown}s` : "now…",
            retryAttempt > 0 ? ` • Attempt ${retryAttempt}` : ""
          ] })
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: "w-3.5 h-3.5 animate-spin text-amber-500" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Syncing batches & faculty profiles…" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              onClick: () => refreshBatchMetadata(selectedBatchId, true),
              disabled: isLoadingBatch,
              className: "w-full h-11 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs sm:text-sm shadow-md shadow-amber-600/20 gap-2 transition-all cursor-pointer",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: `w-4 h-4 ${isLoadingBatch ? "animate-spin" : ""}` }),
                isLoadingBatch ? "Connecting…" : "Retry Connection Now"
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              variant: "outline",
              onClick: () => setBatchModalOpen(true),
              className: "w-full h-10 rounded-xl text-xs font-semibold border-slate-200 dark:border-zinc-800 text-slate-700 dark:text-zinc-300 hover:bg-slate-100 dark:hover:bg-zinc-800",
              children: "Browse Other Batches"
            }
          ),
          selectedBatchId !== "698ad3519549b300a5e1cc6a" && /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              onClick: () => {
                setSelectedBatchId("698ad3519549b300a5e1cc6a");
                localStorage.setItem("pw_selected_batch_id", "698ad3519549b300a5e1cc6a");
                refreshBatchMetadata("698ad3519549b300a5e1cc6a", true);
              },
              className: "w-full h-10 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-xs transition-all cursor-pointer shadow-md shadow-amber-500/20",
              children: "Open Standard Arjuna JEE 2027"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 flex items-center justify-center gap-1.5 text-[11px] text-slate-400 dark:text-zinc-500", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-3 h-3 text-amber-500" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Arjuna JEE • Lakshya • Prayas • Yakeen" })
        ] })
      ] })
    ] }) })
  ] });
}
function OthersPage() {
  const [location, navigate] = useLocation();
  const [subView, setSubView] = reactExports.useState("hub");
  const { selectedGoal } = useAppContext();
  isCbtEligible(selectedGoal);
  reactExports.useEffect(() => {
    if (location === "/others/questions" || location === "/questions") {
      setSubView("questions");
    } else if (location === "/others/pw" || location === "/pw") {
      setSubView("pw");
    } else if (location === "/others/cbt") {
      setSubView("cbt");
    } else {
      setSubView("hub");
    }
  }, [location]);
  if (subView === "questions") {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "animate-in fade-in duration-200", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4 border-b border-border/60 bg-card/60 backdrop-blur-md", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Button,
        {
          variant: "outline",
          size: "sm",
          onClick: () => {
            setSubView("hub");
            navigate("/others");
          },
          className: "gap-2 text-xs font-semibold rounded-xl",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "w-4 h-4" }),
            "Back to Others Hub"
          ]
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(QuestionsPage, {})
    ] });
  }
  if (subView === "pw") {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "animate-in fade-in duration-200", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 border-b border-border/60 bg-card/60 backdrop-blur-md flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            variant: "outline",
            size: "sm",
            onClick: () => {
              setSubView("hub");
              navigate("/others");
            },
            className: "gap-2 text-xs font-semibold rounded-xl",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "w-4 h-4" }),
              "Back to Others Hub"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground font-medium", children: "Physics Wallah Live Tracker" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(PWPage, {})
    ] });
  }
  if (subView === "cbt") {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "animate-in fade-in duration-200", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      NtaCbtExamSimulator,
      {
        onExit: () => {
          setSubView("hub");
          navigate("/others");
        }
      }
    ) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 sm:p-6 md:p-8 max-w-6xl mx-auto space-y-8 animate-in fade-in duration-300", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 text-xs font-bold", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Layers, { className: "w-3.5 h-3.5" }),
        "Learning Hub & Resources"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-foreground", children: "Study Tools & Curricula" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs sm:text-sm text-muted-foreground max-w-2xl leading-relaxed", children: "Access specialized study portals below to track your live Physics Wallah batch syllabus, practice verified JEE question banks, or organize revision materials." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          onClick: () => {
            navigate("/others/pw");
          },
          className: "relative overflow-hidden rounded-3xl border border-border/80 bg-card p-6 sm:p-8 shadow-sm hover:shadow-xl hover:border-amber-500/50 transition-all cursor-pointer group flex flex-col justify-between",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 right-0 w-48 h-48 bg-amber-500/5 rounded-full blur-3xl group-hover:bg-amber-500/15 transition-all" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5 relative z-10", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-600 dark:text-amber-400 group-hover:scale-110 transition-transform", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Flame, { className: "w-7 h-7 fill-amber-500 text-amber-500" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-3 py-1 rounded-full text-xs font-bold bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20", children: "PW" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-xl sm:text-2xl font-black text-foreground group-hover:text-amber-500 transition-colors flex items-center gap-2", children: [
                  "Physics Wallah (PW) Portal",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-5 h-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-amber-500" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs sm:text-sm text-muted-foreground leading-relaxed", children: "Live curriculum tracking for all PW batches (Arjuna, Lakshya, Prayas, Yakeen). Follow teacher-wise chapters, official syllabus PDFs, paired DPPs, and class schedules." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-2 pt-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-2.5 py-1 rounded-lg text-xs font-semibold bg-muted text-foreground border border-border/60", children: "Teacher-Wise Chapters" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-2.5 py-1 rounded-lg text-xs font-semibold bg-muted text-foreground border border-border/60", children: "Official PDF Notes" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-2.5 py-1 rounded-lg text-xs font-semibold bg-muted text-foreground border border-border/60", children: "DPP Trackers" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-2.5 py-1 rounded-lg text-xs font-semibold bg-muted text-foreground border border-border/60", children: "Live Class Timetable" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-6 mt-6 border-t border-border/60 flex items-center justify-between relative z-10", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold text-muted-foreground group-hover:text-foreground transition-colors", children: "Launch dedicated PW Tracker" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  onClick: (e) => {
                    e.stopPropagation();
                    navigate("/others/pw");
                  },
                  className: "rounded-xl font-bold text-xs gap-2 py-4 px-5 bg-amber-600 hover:bg-amber-700 text-white shadow-sm group-hover:shadow-md transition-all",
                  children: [
                    "Open PW Tracker ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
                  ]
                }
              )
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          onClick: () => {
            navigate("/questions");
          },
          className: "relative overflow-hidden rounded-3xl border border-border/80 bg-card p-6 sm:p-8 shadow-sm hover:shadow-xl hover:border-primary/50 transition-all cursor-pointer group flex flex-col justify-between",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 right-0 w-48 h-48 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/15 transition-all" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5 relative z-10", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:scale-110 transition-transform", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FileQuestionMark, { className: "w-7 h-7 stroke-[2.2]" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20", children: "14,183+ Verified PYQs" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-xl sm:text-2xl font-black text-foreground group-hover:text-primary transition-colors flex items-center gap-2", children: [
                  "JEE Questions Vault",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-5 h-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-primary" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs sm:text-sm text-muted-foreground leading-relaxed", children: "Official JEE Main & JEE Advanced practice with shift-wise tests, chapter-wise filters, numerical response keypads, and detailed LaTeX solutions." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-2 pt-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-2.5 py-1 rounded-lg text-xs font-semibold bg-muted text-foreground border border-border/60", children: "JEE Main 2010–2026" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-2.5 py-1 rounded-lg text-xs font-semibold bg-muted text-foreground border border-border/60", children: "JEE Advanced" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-2.5 py-1 rounded-lg text-xs font-semibold bg-muted text-foreground border border-border/60", children: "172 Chapters" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-2.5 py-1 rounded-lg text-xs font-semibold bg-muted text-foreground border border-border/60", children: "Instant Solutions" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-6 mt-6 border-t border-border/60 flex items-center justify-between relative z-10", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold text-muted-foreground group-hover:text-foreground transition-colors", children: "Launch Question Practice" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { className: "rounded-xl font-bold text-xs gap-2 py-4 px-5 shadow-sm group-hover:shadow-md transition-all", children: [
                "Open Questions ",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
              ] })
            ] })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 pt-4 border-t border-border/60", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-bold text-sm text-foreground flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-4 h-4 text-amber-500" }),
        "More Prep Modules"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Card,
          {
            onClick: () => navigate("/calendar"),
            className: "p-4 rounded-2xl border border-border/80 bg-card hover:border-primary/50 transition-all cursor-pointer flex items-center gap-3.5 group",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarDays, { className: "w-5 h-5" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-xs text-foreground group-hover:text-primary transition-colors", children: "Calendar & Timetable" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-muted-foreground", children: "Study blocks & tags" })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Card,
          {
            onClick: () => navigate("/saves"),
            className: "p-4 rounded-2xl border border-border/80 bg-card hover:border-primary/50 transition-all cursor-pointer flex items-center gap-3.5 group",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Bookmark, { className: "w-5 h-5" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-xs text-foreground group-hover:text-emerald-600 transition-colors", children: "Formula & Saves" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-muted-foreground", children: "Flashcards & bookmarks" })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Card,
          {
            onClick: () => navigate("/quiz"),
            className: "p-4 rounded-2xl border border-border/80 bg-card hover:border-primary/50 transition-all cursor-pointer flex items-center gap-3.5 group",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(BrainCircuit, { className: "w-5 h-5" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-xs text-foreground group-hover:text-purple-600 transition-colors", children: "AI Practice" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-muted-foreground", children: "Adaptive question solver" })
              ] })
            ]
          }
        )
      ] })
    ] })
  ] });
}
export {
  OthersPage as default
};
