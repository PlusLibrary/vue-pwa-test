var CACHE_NAME = 'pwa-vue-caches';
var CACHE_URL = [
    '/poster-keisuke.github.io/',
];

self.addEventListener('install', function(event) {
    event.waitUntil(
        caches
            .open(CACHE_NAME)
            .then((cache) => {
                return cache.addAll(CACHE_URL);
            })
    );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches
            .match(event.request)
            .then((response) => {
                return response ? response : fetch(event.request);
            })
    );
});

console.log("Service Worker done")