
const CACHE_NAME = 'dubai-trip-v17';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './manifest.json',
  './app-icon.png'
];

// Cài đặt Service Worker và lưu cache tĩnh
self.addEventListener('install', (event) => {
  self.skipWaiting(); // Kích hoạt ngay lập tức, không chờ
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('Opened cache');
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
});

// Kích hoạt và xóa cache cũ
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Chiến lược Cache: Stale-while-revalidate kết hợp Dynamic Caching
// Giúp tự động lưu các file JS/CSS sinh ra khi build mà không cần khai báo trước
self.addEventListener('fetch', (event) => {
  // Chỉ cache các request GET
  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }

      return fetch(event.request).then((networkResponse) => {
        // Kiểm tra response hợp lệ
        if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
          return networkResponse;
        }

        // Clone response để lưu vào cache
        const responseToCache = networkResponse.clone();

        caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, responseToCache);
        });

        return networkResponse;
      });
    })
  );
});
