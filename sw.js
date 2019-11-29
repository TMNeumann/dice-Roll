//importScripts('/cache-polyfill.js');


self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('Roll').then(function(cache) {
     return cache.addAll([
      '/',
      '/index.html',
      '/index.html?homescreen=1',
      '/?homescreen=1',
      './main.css',
      './manifest.json',
      './sw.js',
      './images/icons/icon-72x72.png',
      './images/icons/icon-96x96.png',
      './images/icons/icon-128x128.png',
      './images/icons/icon-144x144.png',
      './images/icons/icon-152x152.png',
      './images/icons/icon-192x192.png',
     ]);
   })
 );
});

self.addEventListener('fetch', function(event) {

console.log(event.request.url);

event.respondWith(

caches.match(event.request).then(function(response) {

return response || fetch(event.request);

})

);

});