// 神外修仙錄 service worker
// 版本變更時，舊快取會自動清除
const VERSION = 'sxxl-v2';
const CACHE = `sxxl-${VERSION}`;

// 第一次安裝時預先快取核心資源
const CORE = [
  './',
  './index.html',
  './manifest.webmanifest',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './library/manifest.json'
];

self.addEventListener('install', (e) => {
  self.skipWaiting();
  e.waitUntil(
    caches.open(CACHE).then((c) => c.addAll(CORE).catch(() => {}))
  );
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

// 策略：
//   library/*.json + index.html / "/" → network-first（要新）
//   icons / manifest / sw → cache-first（離線可用、極少變動）
self.addEventListener('fetch', (e) => {
  const url = new URL(e.request.url);
  if (e.request.method !== 'GET') return;

  const isLibrary = url.pathname.includes('/library/') && url.pathname.endsWith('.json');
  const isHTML = url.pathname.endsWith('.html') || url.pathname.endsWith('/');

  if (isLibrary || isHTML) {
    // 網路優先，失敗才用快取
    e.respondWith(
      fetch(e.request).then((resp) => {
        if (resp.ok) {
          const copy = resp.clone();
          caches.open(CACHE).then((c) => c.put(e.request, copy));
        }
        return resp;
      }).catch(() => caches.match(e.request))
    );
    return;
  }

  // 其他資源（icons / manifest / png）：快取優先
  e.respondWith(
    caches.match(e.request).then((cached) =>
      cached || fetch(e.request).then((resp) => {
        if (resp.ok) {
          const copy = resp.clone();
          caches.open(CACHE).then((c) => c.put(e.request, copy));
        }
        return resp;
      })
    )
  );
});
