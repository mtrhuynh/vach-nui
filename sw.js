// Vách Núi service worker — pass-through only (enables PWA install;
//  never caches, so the page's own freshness logic stays in charge).
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {});
