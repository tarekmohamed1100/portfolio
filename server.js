import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const PORT = Number(process.env.PORT) || 3000;
const ROOT_DIR = path.dirname(fileURLToPath(import.meta.url));
const DIST_DIR = path.join(ROOT_DIR, "dist");
const PUBLIC_DIR = fs.existsSync(DIST_DIR) ? DIST_DIR : ROOT_DIR;
const PAGE = path.join(PUBLIC_DIR, "index.html");

const MIME_TYPES = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".gif": "image/gif",
  ".ico": "image/x-icon",
  ".webp": "image/webp",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
};

function sendText(res, status, message) {
  res.writeHead(status, {
    "Content-Type": "text/plain; charset=utf-8",
    "X-Content-Type-Options": "nosniff",
  });
  res.end(message);
}

const server = http.createServer((req, res) => {
  let url;

  try {
    url = new URL(req.url, `http://${req.headers.host || "localhost"}`);
  } catch {
    sendText(res, 400, "Bad request");
    return;
  }

  if (req.method !== "GET" && req.method !== "HEAD") {
    res.writeHead(405, {
      "Content-Type": "text/plain; charset=utf-8",
      Allow: "GET, HEAD",
    });
    res.end("Method not allowed");
    return;
  }

  if (url.pathname === "/api/health") {
    res.writeHead(200, { "Content-Type": "application/json; charset=utf-8" });
    res.end(JSON.stringify({ ok: true, time: new Date().toISOString() }));
    return;
  }

  let requestedPath;
  try {
    requestedPath = decodeURIComponent(url.pathname);
  } catch {
    sendText(res, 400, "Bad request");
    return;
  }

  const relativePath = requestedPath === "/" ? "index.html" : requestedPath.replace(/^\/+/, "");
  const filePath = path.resolve(PUBLIC_DIR, relativePath);

  if (filePath !== PUBLIC_DIR && !filePath.startsWith(`${PUBLIC_DIR}${path.sep}`)) {
    sendText(res, 403, "Forbidden");
    return;
  }

  fs.readFile(filePath, (err, data) => {
    if (!err) {
      res.writeHead(200, {
        "Content-Type": MIME_TYPES[path.extname(filePath).toLowerCase()] || "application/octet-stream",
        "Cache-Control": path.extname(filePath) === ".html" ? "no-cache" : "public, max-age=3600",
        "X-Content-Type-Options": "nosniff",
      });
      res.end(req.method === "HEAD" ? undefined : data);
      return;
    }

    if (err.code !== "ENOENT" && err.code !== "EISDIR") {
      sendText(res, 500, "Could not load the page");
      return;
    }

    fs.readFile(PAGE, (pageErr, pageData) => {
      if (pageErr) {
        sendText(res, 500, "Could not load the page");
        return;
      }

      res.writeHead(200, {
        "Content-Type": "text/html; charset=utf-8",
        "Cache-Control": "no-cache",
        "X-Content-Type-Options": "nosniff",
      });
      res.end(req.method === "HEAD" ? undefined : pageData);
    });
  });
});

server.listen(PORT, () => {
  console.log(`Portfolio running at http://localhost:${PORT}`);
});

function shutdown() {
  server.close(() => process.exit(0));
}

process.on("SIGTERM", shutdown);
process.on("SIGINT", shutdown);
