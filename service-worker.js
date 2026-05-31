const cacheName = "tarjetas-trivial-v1";
const filesToCache = [
  "./",
  "index.html",
  "styles.css",
  "extras.css",
  "app.js",
  "saved-boards.js",
  "pwa.js",
  "manifest.webmanifest",
  "icon.svg"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(cacheName).then((cache) => cache.addAll(filesToCache))
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((key) => key !== cacheName).map((key) => caches.delete(key)))
    )
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((cached) => cached || fetch(event.request))
  );
});
