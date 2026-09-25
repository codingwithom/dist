import { c as createLucideIcon, ad as getPipedInstances, ae as getInvidiousInstances } from "./index-BCslxdZG.js";
const __iconNode = [
  [
    "path",
    {
      d: "M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17",
      key: "1q2vi4"
    }
  ],
  ["path", { d: "m10 15 5-3-5-3z", key: "1jp15x" }]
];
const Youtube = createLucideIcon("youtube", __iconNode);
async function raceSuccessful(promises) {
  return new Promise((resolve, reject) => {
    let rejectedCount = 0;
    const errors = [];
    if (promises.length === 0) {
      reject(new Error("No promises to race"));
      return;
    }
    promises.forEach((p) => {
      p.then(resolve).catch((err) => {
        errors.push(err);
        rejectedCount++;
        if (rejectedCount === promises.length) {
          reject(new Error(`All promises failed: ${errors.map((e) => e.message || e).join("; ")}`));
        }
      });
    });
  });
}
async function fetchWithProxy(proxyUrl, type) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 6e3);
  try {
    const res = await fetch(proxyUrl, { signal: controller.signal });
    clearTimeout(timeoutId);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    if (type === "allorigins") {
      const data = await res.json();
      if (!data.contents) throw new Error("Empty contents field");
      return data.contents;
    } else {
      return await res.text();
    }
  } catch (e) {
    clearTimeout(timeoutId);
    throw e;
  }
}
function cleanTitleString(t) {
  if (!t) return "";
  return t.replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&apos;/g, "'").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/\[\s*\d+\s*\]/g, "").replace(/\(\s*\d+\s*\)/g, "").trim();
}
function parseDurationString(str) {
  const parts = str.split(":").map(Number);
  if (parts.some(isNaN)) return 0;
  if (parts.length === 2) {
    return parts[0] * 60 + parts[1];
  } else if (parts.length === 3) {
    return parts[0] * 3600 + parts[1] * 60 + parts[2];
  }
  return 0;
}
function extractJSONFromHTML(html, varName) {
  const index = html.indexOf(varName);
  if (index === -1) return null;
  const startIndex = html.indexOf("{", index);
  if (startIndex === -1) return null;
  let braceCount = 0;
  let inStringDouble = false;
  let inStringSingle = false;
  let escape = false;
  for (let i = startIndex; i < html.length; i++) {
    const char = html[i];
    if (escape) {
      escape = false;
      continue;
    }
    if (char === "\\") {
      escape = true;
      continue;
    }
    if (char === '"' && !inStringSingle) {
      inStringDouble = !inStringDouble;
      continue;
    }
    if (char === "'" && !inStringDouble) {
      inStringSingle = !inStringSingle;
      continue;
    }
    if (!inStringDouble && !inStringSingle) {
      if (char === "{") {
        braceCount++;
      } else if (char === "}") {
        braceCount--;
        if (braceCount === 0) {
          const jsonStr = html.slice(startIndex, i + 1);
          try {
            return JSON.parse(jsonStr);
          } catch (e) {
            console.warn("Brace-counted JSON parse failed:", e);
            return null;
          }
        }
      }
    }
  }
  return null;
}
function findVideosInJson(obj, results = []) {
  if (!obj || typeof obj !== "object") return results;
  if (obj.playlistVideoRenderer) {
    results.push({ type: "playlistVideo", data: obj.playlistVideoRenderer });
  } else if (obj.videoRenderer) {
    results.push({ type: "video", data: obj.videoRenderer });
  } else {
    for (const key of Object.keys(obj)) {
      findVideosInJson(obj[key], results);
    }
  }
  return results;
}
function extractTracksFromHTML(html) {
  let name = "YouTube Playlist";
  const titleMatch = html.match(/<title>(.*?) - YouTube<\/title>/) || html.match(/<meta\s+name="title"\s+content="([^"]+)"/);
  if (titleMatch) {
    name = cleanTitleString(titleMatch[1]);
  }
  const tracks = [];
  const seenIds = /* @__PURE__ */ new Set();
  const json = extractJSONFromHTML(html, "ytInitialData");
  if (json) {
    try {
      const videoItems = findVideosInJson(json);
      for (const item of videoItems) {
        const d = item.data;
        const videoId = d.videoId || d.contentId;
        if (!videoId || seenIds.has(videoId)) continue;
        let title = "Unknown Video";
        if (d.title?.runs?.[0]?.text) {
          title = d.title.runs[0].text;
        } else if (d.title?.simpleText) {
          title = d.title.simpleText;
        } else if (d.title?.content) {
          title = d.title.content;
        }
        let artist = "YouTube";
        if (d.shortBylineText?.runs?.[0]?.text) {
          artist = d.shortBylineText.runs[0].text;
        } else if (d.longBylineText?.runs?.[0]?.text) {
          artist = d.longBylineText.runs[0].text;
        } else if (d.ownerText?.runs?.[0]?.text) {
          artist = d.ownerText.runs[0].text;
        }
        const duration = Number(d.lengthSeconds || (d.lengthText?.simpleText ? parseDurationString(d.lengthText.simpleText) : 0)) || 0;
        seenIds.add(videoId);
        tracks.push({
          title: cleanTitleString(title),
          artist: cleanTitleString(artist),
          thumbnail: `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`,
          duration,
          youtubeId: videoId,
          streamUrl: `https://www.youtube.com/embed/${videoId}`
        });
      }
    } catch (e) {
      console.warn("Failed to process ytInitialData JSON inside HTML scraper:", e);
    }
  }
  if (tracks.length === 0) {
    try {
      const matches = html.matchAll(/href="[^"]*watch\?v=([a-zA-Z0-9_-]{11})[^"]*"/g);
      for (const m of matches) {
        const videoId = m[1];
        if (!seenIds.has(videoId) && seenIds.size < 100) {
          seenIds.add(videoId);
          tracks.push({
            title: `YouTube Video [${videoId}]`,
            artist: "YouTube",
            thumbnail: `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`,
            duration: 0,
            youtubeId: videoId,
            streamUrl: `https://www.youtube.com/embed/${videoId}`
          });
        }
      }
    } catch (e) {
      console.warn("Anchor regex fallback matching failed:", e);
    }
  }
  return { name, tracks };
}
function getElementVal(parent, tagName) {
  let nodes = parent.getElementsByTagName(tagName);
  if (nodes.length > 0 && nodes[0].textContent) return nodes[0].textContent.trim();
  if (tagName.includes(":")) {
    const localName = tagName.split(":")[1];
    nodes = parent.getElementsByTagName(localName);
    if (nodes.length > 0 && nodes[0].textContent) return nodes[0].textContent.trim();
    try {
      nodes = parent.getElementsByTagNameNS("*", localName);
      if (nodes.length > 0 && nodes[0].textContent) return nodes[0].textContent.trim();
    } catch (e) {
    }
  }
  return "";
}
function parseXMLFeed(xmlText, defaultName) {
  const parser = new DOMParser();
  const xmlDoc = parser.parseFromString(xmlText, "text/xml");
  let name = defaultName;
  const feedTitle = xmlDoc.getElementsByTagName("title")[0]?.textContent;
  if (feedTitle) {
    name = feedTitle.trim();
  }
  const entries = xmlDoc.getElementsByTagName("entry");
  const tracks = [];
  for (let i = 0; i < entries.length; i++) {
    const entry = entries[i];
    let videoId = getElementVal(entry, "yt:videoId");
    if (!videoId) {
      const idText = getElementVal(entry, "id");
      if (idText.startsWith("yt:video:")) {
        videoId = idText.replace("yt:video:", "");
      }
    }
    if (!videoId) {
      const linkNodes = entry.getElementsByTagName("link");
      for (let j = 0; j < linkNodes.length; j++) {
        const href = linkNodes[j].getAttribute("href");
        if (href) {
          const m = href.match(/(?:watch\?v=|embed\/|shorts\/|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
          if (m) {
            videoId = m[1];
            break;
          }
        }
      }
    }
    if (!videoId) continue;
    const title = getElementVal(entry, "title") || "Unknown Video";
    let artist = "YouTube";
    const authorNode = entry.getElementsByTagName("author")[0];
    if (authorNode) {
      const nameNode = authorNode.getElementsByTagName("name")[0];
      if (nameNode && nameNode.textContent) {
        artist = nameNode.textContent.trim();
      }
    }
    tracks.push({
      title,
      artist,
      thumbnail: `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`,
      duration: 0,
      youtubeId: videoId,
      streamUrl: `https://www.youtube.com/embed/${videoId}`
    });
  }
  return { type: "playlist", name, tracks };
}
async function fetchVideoMetadataClientSide(youtubeId) {
  const cleanId = youtubeId.trim();
  let title = "YouTube Video";
  let artist = "YouTube";
  let duration = 0;
  const thumbnail = `https://img.youtube.com/vi/${cleanId}/hqdefault.jpg`;
  const streamUrl = `https://www.youtube.com/embed/${cleanId}`;
  try {
    const controller = new AbortController();
    const t = setTimeout(() => controller.abort(), 4e3);
    const res = await fetch(`https://noembed.com/embed?url=https://www.youtube.com/watch?v=${cleanId}`, { signal: controller.signal });
    clearTimeout(t);
    if (res.ok) {
      const data = await res.json();
      if (data && !data.error && data.title) {
        title = cleanTitleString(data.title);
        if (data.author_name) artist = cleanTitleString(data.author_name);
        return { title, artist, thumbnail: data.thumbnail_url || thumbnail, duration, youtubeId: cleanId, streamUrl };
      }
    }
  } catch (e) {
  }
  try {
    const invidiousList = await getInvidiousInstances();
    const pipedList = getPipedInstances();
    const candidateInstances = [...invidiousList.slice(0, 3), ...pipedList.slice(0, 2)];
    const fetchSingle = async (inst) => {
      const controller = new AbortController();
      const t = setTimeout(() => controller.abort(), 4e3);
      try {
        if (inst.includes("piped")) {
          const res = await fetch(`${inst}/streams/${cleanId}`, { signal: controller.signal });
          clearTimeout(t);
          if (!res.ok) throw new Error("Piped fail");
          const d = await res.json();
          return {
            title: cleanTitleString(d.title || title),
            artist: cleanTitleString(d.uploader || artist),
            duration: Number(d.duration || 0),
            thumbnail: d.thumbnailUrl || thumbnail,
            youtubeId: cleanId,
            streamUrl
          };
        } else {
          const res = await fetch(`${inst}/api/v1/videos/${cleanId}`, { signal: controller.signal });
          clearTimeout(t);
          if (!res.ok) throw new Error("Invidious fail");
          const d = await res.json();
          return {
            title: cleanTitleString(d.title || title),
            artist: cleanTitleString(d.author || artist),
            duration: Number(d.lengthSeconds || 0),
            thumbnail: d.videoThumbnails?.[0]?.url || thumbnail,
            youtubeId: cleanId,
            streamUrl
          };
        }
      } catch (err) {
        clearTimeout(t);
        throw err;
      }
    };
    const result = await raceSuccessful(candidateInstances.map((inst) => fetchSingle(inst)));
    return result;
  } catch (e) {
  }
  try {
    const oembedUrl = `https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${cleanId}&format=json`;
    const text = await raceSuccessful([
      fetchWithProxy(`https://api.allorigins.win/raw?url=${encodeURIComponent(oembedUrl)}`, "text"),
      fetchWithProxy(`https://api.allorigins.win/get?url=${encodeURIComponent(oembedUrl)}`, "allorigins"),
      fetchWithProxy(`https://corsproxy.io/?url=${encodeURIComponent(oembedUrl)}`, "text"),
      fetchWithProxy(`https://corsproxy.io/?${encodeURIComponent(oembedUrl)}`, "text"),
      fetchWithProxy(`https://api.codetabs.com/v1/proxy?quest=${encodeURIComponent(oembedUrl)}`, "text")
    ]);
    const d = JSON.parse(text);
    if (d.title) title = cleanTitleString(d.title);
    if (d.author_name) artist = cleanTitleString(d.author_name);
  } catch (e) {
  }
  return { title, artist, thumbnail, duration, youtubeId: cleanId, streamUrl };
}
async function fetchPlaylistClientSide(ytPlaylistId) {
  let playlistId = ytPlaylistId.trim();
  if (playlistId.includes("list=")) {
    const match = playlistId.match(/[?&]list=([^&#]+)/);
    if (match) playlistId = match[1];
  } else if (playlistId.includes("http://") || playlistId.includes("https://") || playlistId.includes("/")) {
    const match = playlistId.match(/playlist\/([^?&#]+)/) || playlistId.match(/playlists\/([^?&#]+)/);
    if (match) playlistId = match[1];
  }
  let embeddedVideoId = null;
  const vMatch = ytPlaylistId.match(/[?&]v=([^&#]+)/) || ytPlaylistId.match(/youtu\.be\/([^?#]+)/);
  if (vMatch) {
    embeddedVideoId = vMatch[1];
  } else if (playlistId.length === 11 && !playlistId.startsWith("PL") && !playlistId.startsWith("RD")) {
    embeddedVideoId = playlistId;
  }
  if (playlistId.startsWith("RD") || playlistId.startsWith("LL") || playlistId.startsWith("WL") || playlistId.startsWith("UL")) {
    if (embeddedVideoId) {
      const single = await fetchVideoMetadataClientSide(embeddedVideoId);
      return {
        type: "playlist",
        name: single.title,
        tracks: [single]
      };
    }
  }
  let playlistName = "YouTube Playlist";
  let tracks = [];
  try {
    const playlistUrl = `https://www.youtube.com/playlist?list=${playlistId}`;
    const htmlText = await raceSuccessful([
      fetchWithProxy(`https://api.allorigins.win/raw?url=${encodeURIComponent(playlistUrl)}`, "text"),
      fetchWithProxy(`https://api.allorigins.win/get?url=${encodeURIComponent(playlistUrl)}`, "allorigins"),
      fetchWithProxy(`https://corsproxy.io/?url=${encodeURIComponent(playlistUrl)}`, "text"),
      fetchWithProxy(`https://corsproxy.io/?${encodeURIComponent(playlistUrl)}`, "text"),
      fetchWithProxy(`https://api.codetabs.com/v1/proxy?quest=${encodeURIComponent(playlistUrl)}`, "text")
    ]);
    const result = extractTracksFromHTML(htmlText);
    tracks = result.tracks;
    if (result.name && result.name !== "YouTube Playlist") playlistName = result.name;
  } catch (htmlErr) {
    console.warn("HTML CORS proxies failed to fetch playlist page, trying RSS XML...", htmlErr);
  }
  if (tracks.length === 0) {
    try {
      const feedUrl = `https://www.youtube.com/feeds/videos.xml?playlist_id=${playlistId}`;
      const xmlText = await raceSuccessful([
        fetchWithProxy(`https://api.allorigins.win/raw?url=${encodeURIComponent(feedUrl)}`, "text"),
        fetchWithProxy(`https://api.allorigins.win/get?url=${encodeURIComponent(feedUrl)}`, "allorigins"),
        fetchWithProxy(`https://corsproxy.io/?url=${encodeURIComponent(feedUrl)}`, "text"),
        fetchWithProxy(`https://corsproxy.io/?${encodeURIComponent(feedUrl)}`, "text"),
        fetchWithProxy(`https://api.codetabs.com/v1/proxy?quest=${encodeURIComponent(feedUrl)}`, "text")
      ]);
      const rssResult = parseXMLFeed(xmlText, playlistName);
      tracks = rssResult.tracks;
      if (rssResult.name && rssResult.name !== "YouTube Playlist") playlistName = rssResult.name;
    } catch (rssErr) {
      console.warn("RSS Feed extraction failed on proxies, trying Mirror instances...", rssErr);
    }
  }
  if (tracks.length === 0) {
    try {
      const piped_instances = getPipedInstances();
      const invidious_instances = await getInvidiousInstances();
      const top_piped = Array.from(/* @__PURE__ */ new Set(["https://pipedapi.tokhmi.xyz", "https://pipedapi.adminforge.de", "https://piped-api.lunar.icu", ...piped_instances])).slice(0, 4);
      const top_invidious = Array.from(/* @__PURE__ */ new Set(["https://inv.tux.pizza", "https://invidious.nerdvpn.de", "https://invidious.flokinet.to", "https://vid.puffyan.us", "https://invidious.jing.rocks", "https://invidious.f5.si", ...invidious_instances])).slice(0, 4);
      const fetchMirror = async (instance, type) => {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 6e3);
        try {
          if (type === "piped") {
            const res = await fetch(`${instance}/playlists/${playlistId}`, { signal: controller.signal });
            clearTimeout(timeoutId);
            if (!res.ok) throw new Error(`Piped mirror failed: HTTP ${res.status}`);
            const data = await res.json();
            const name = data.name || "YouTube Playlist";
            if (!data.relatedStreams || !Array.isArray(data.relatedStreams)) throw new Error("Invalid Piped mirror schema");
            const mappedTracks = data.relatedStreams.map((v) => {
              const youtubeId = v.url ? v.url.includes("?v=") ? v.url.split("?v=")[1].split("&")[0] : v.url.split("/").pop() : "";
              if (!youtubeId) return null;
              const duration = Number(v.duration || v.durationInSec || v.lengthSeconds || 0);
              return {
                title: cleanTitleString(v.title || "Unknown Video"),
                artist: cleanTitleString(v.uploaderName || "YouTube"),
                thumbnail: v.thumbnail || `https://img.youtube.com/vi/${youtubeId}/mqdefault.jpg`,
                duration,
                youtubeId,
                streamUrl: `https://www.youtube.com/embed/${youtubeId}`
              };
            }).filter(Boolean);
            return { name, tracks: mappedTracks };
          } else {
            const res = await fetch(`${instance}/api/v1/playlists/${playlistId}`, { signal: controller.signal });
            clearTimeout(timeoutId);
            if (!res.ok) throw new Error(`Invidious mirror failed: HTTP ${res.status}`);
            const data = await res.json();
            const name = data.title || "YouTube Playlist";
            if (!data.videos || !Array.isArray(data.videos)) throw new Error("Invalid Invidious mirror schema");
            const mappedTracks = data.videos.map((v) => {
              const youtubeId = v.videoId || "";
              if (!youtubeId) return null;
              const duration = Number(v.lengthSeconds || v.durationInSec || v.duration || 0);
              return {
                title: cleanTitleString(v.title || "Unknown Video"),
                artist: cleanTitleString(v.author || "YouTube"),
                thumbnail: `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`,
                duration,
                youtubeId,
                streamUrl: `https://www.youtube.com/embed/${youtubeId}`
              };
            }).filter(Boolean);
            return { name, tracks: mappedTracks };
          }
        } catch (err) {
          clearTimeout(timeoutId);
          throw err;
        }
      };
      const mirrorPromises = [];
      for (const inst of top_piped) {
        mirrorPromises.push(fetchMirror(inst, "piped"));
      }
      for (const inst of top_invidious) {
        mirrorPromises.push(fetchMirror(inst, "invidious"));
      }
      const mirrorRes = await raceSuccessful(mirrorPromises);
      tracks = mirrorRes.tracks;
      playlistName = mirrorRes.name;
    } catch (mirrorErr) {
      console.error("All fallback mirror strategies failed:", mirrorErr);
    }
  }
  if (tracks.length === 0 && embeddedVideoId) {
    try {
      const single = await fetchVideoMetadataClientSide(embeddedVideoId);
      return {
        type: "playlist",
        name: single.title,
        tracks: [single]
      };
    } catch (e) {
    }
  }
  if (tracks.length === 0) {
    throw new Error("Could not extract playlist. Please ensure the playlist is public or try adding individual video links.");
  }
  const seenIds = /* @__PURE__ */ new Set();
  const uniqueTracks = tracks.filter((t) => {
    if (!t.youtubeId) return false;
    if (seenIds.has(t.youtubeId)) return false;
    seenIds.add(t.youtubeId);
    return true;
  });
  return {
    type: "playlist",
    name: playlistName,
    tracks: uniqueTracks.slice(0, 150)
  };
}
async function searchYouTubeVideos(query) {
  const q = encodeURIComponent(query.trim());
  if (!q) return [];
  const fetchWithTimeout = async (url, timeoutMs) => {
    const controller = new AbortController();
    const id = setTimeout(() => controller.abort(), timeoutMs);
    const response = await fetch(url, { signal: controller.signal });
    clearTimeout(id);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    return response;
  };
  const fetchPiped = async (instance) => {
    const res = await fetchWithTimeout(`${instance}/search?q=${q}&filter=all`, 4500);
    const data = await res.json();
    if (!data?.items?.length) throw new Error("No items in Piped");
    const videos = data.items.filter((item) => item.type === "stream" || item.url?.includes("watch?v=") || item.id);
    if (!videos.length) throw new Error("No video streams in Piped");
    return videos.slice(0, 50).map((v) => {
      const vId = v.url?.includes("?v=") ? v.url.split("?v=")[1].split("&")[0] : v.id || v.url?.split("/").pop() || "";
      if (!vId) return null;
      return {
        videoId: vId,
        title: cleanTitleString(v.title || "Unknown"),
        author: cleanTitleString(v.uploaderName || v.uploader || "YouTube"),
        length_seconds: Number(v.duration || v.durationInSec || 0),
        thumbnail: `https://i.ytimg.com/vi/${vId}/hq720.jpg`
      };
    }).filter((v) => Boolean(v && v.videoId));
  };
  const fetchInvidious = async (instance) => {
    const res = await fetchWithTimeout(`${instance}/api/v1/search?q=${q}&type=video`, 4500);
    const data = await res.json();
    if (!Array.isArray(data) || !data.length) throw new Error("No data in Invidious");
    return data.slice(0, 50).map((v) => {
      const vId = v.videoId || "";
      if (!vId) return null;
      return {
        videoId: vId,
        title: cleanTitleString(v.title || "Unknown"),
        author: cleanTitleString(v.author || "YouTube"),
        length_seconds: Number(v.lengthSeconds || v.length_seconds || v.duration || 0),
        thumbnail: `https://i.ytimg.com/vi/${vId}/hq720.jpg`
      };
    }).filter((v) => Boolean(v && v.videoId));
  };
  const fetchProxyScrape = async (proxyUrl) => {
    const res = await fetchWithTimeout(proxyUrl, 5e3);
    const contentType = res.headers.get("content-type") || "";
    let html = "";
    if (contentType.includes("application/json")) {
      const data = await res.json();
      html = data.contents || "";
    } else {
      html = await res.text();
    }
    const match = html.match(/var\s+ytInitialData\s*=\s*(\{[\s\S]+?\});/s) || html.match(/ytInitialData\s*=\s*(\{[\s\S]+?\});/s) || html.match(/window\["ytInitialData"\]\s*=\s*(\{[\s\S]+?\});/s);
    if (match) {
      try {
        const ytData = JSON.parse(match[1]);
        const videos = [];
        const findVideos = (obj) => {
          if (videos.length >= 50) return;
          if (Array.isArray(obj)) {
            for (const item of obj) findVideos(item);
          } else if (obj !== null && typeof obj === "object") {
            if (obj.videoRenderer && obj.videoRenderer.videoId) {
              videos.push(obj.videoRenderer);
            } else {
              for (const key of Object.keys(obj)) findVideos(obj[key]);
            }
          }
        };
        findVideos(ytData);
        if (videos.length > 0) {
          return videos.map((v) => {
            const timeStr = v.lengthText?.simpleText || "0:00";
            const parts = timeStr.split(":").map(Number);
            const length_seconds = parts.length === 3 ? parts[0] * 3600 + parts[1] * 60 + parts[2] : parts.length === 2 ? parts[0] * 60 + parts[1] : parts[0] || 0;
            return {
              videoId: v.videoId,
              title: cleanTitleString(v.title?.runs?.[0]?.text || v.title?.simpleText || "Unknown"),
              author: cleanTitleString(v.ownerText?.runs?.[0]?.text || v.shortBylineText?.runs?.[0]?.text || "YouTube"),
              length_seconds,
              thumbnail: `https://i.ytimg.com/vi/${v.videoId}/hq720.jpg`
            };
          });
        }
      } catch (e) {
      }
    }
    const anchorMatches = Array.from(html.matchAll(/href="[^"]*watch\?v=([a-zA-Z0-9_-]{11})[^"]*"/g));
    const fallbackResults = [];
    const seen = /* @__PURE__ */ new Set();
    for (const m of anchorMatches) {
      const vId = m[1];
      if (!seen.has(vId) && seen.size < 30) {
        seen.add(vId);
        fallbackResults.push({
          videoId: vId,
          title: `YouTube Video [${vId}]`,
          author: "YouTube",
          length_seconds: 0,
          thumbnail: `https://i.ytimg.com/vi/${vId}/hq720.jpg`
        });
      }
    }
    if (fallbackResults.length > 0) return fallbackResults;
    throw new Error("No videos parsed from proxy scrape");
  };
  const fetchLocalApi = async () => {
    const apiBase = typeof import.meta !== "undefined" && "https://cdn.jsdelivr.net/gh/codingwithom/dist@main/" ? "https://cdn.jsdelivr.net/gh/codingwithom/dist@main/".replace(/\/$/, "") : "";
    const res = await fetchWithTimeout(`${apiBase}/api/yt-search?q=${q}`, 4e3);
    const data = await res.json();
    if (data.error) throw new Error(data.error);
    if (!Array.isArray(data.results) || !data.results.length) throw new Error("No results");
    return data.results;
  };
  const invidiousInstances = await getInvidiousInstances();
  const pipedInstances = getPipedInstances();
  const searchTasks = [
    fetchLocalApi(),
    ...pipedInstances.map((inst) => fetchPiped(inst)),
    ...invidiousInstances.map((inst) => fetchInvidious(inst)),
    fetchProxyScrape(`https://api.allorigins.win/raw?url=${encodeURIComponent(`https://www.youtube.com/results?search_query=${q}&gl=US&hl=en`)}`),
    fetchProxyScrape(`https://api.allorigins.win/get?url=${encodeURIComponent(`https://www.youtube.com/results?search_query=${q}&gl=US&hl=en`)}`),
    fetchProxyScrape(`https://corsproxy.io/?url=${encodeURIComponent(`https://www.youtube.com/results?search_query=${q}&gl=US&hl=en`)}`),
    fetchProxyScrape(`https://corsproxy.io/?${encodeURIComponent(`https://www.youtube.com/results?search_query=${q}&gl=US&hl=en`)}`),
    fetchProxyScrape(`https://api.codetabs.com/v1/proxy?quest=${encodeURIComponent(`https://www.youtube.com/results?search_query=${q}&gl=US&hl=en`)}`)
  ];
  try {
    const fastest = await raceSuccessful(searchTasks);
    if (fastest && fastest.length > 0) {
      return fastest.slice(0, 50);
    }
  } catch (err) {
    console.warn("Search providers failed:", err);
  }
  throw new Error("No search results found.");
}
export {
  Youtube as Y,
  fetchVideoMetadataClientSide as a,
  fetchPlaylistClientSide as f,
  searchYouTubeVideos as s
};
