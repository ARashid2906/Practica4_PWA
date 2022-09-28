self.addEventListener('install', (event)=>{
    console.log("Bienvenido SW instalado")
    const promiseCache= caches.open('cache-v1').then((cache)=>{
        return cache.addAll(
            [
                './',
                './index.html',
                './css/style.css',
                './js/app.js',
                './pages/suma.html',
                './pages/resta.html',
                './pages/multiplicacion.html',
                './pages/division.html',
                './images/Calculator.png',
                'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css',
                'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js'
            ]
        );
        cache.match('/index.html').then((resp)=>{
            resp.text().then((text)=>{
                console.log('match',text);
            })
        });
    })
    event.waitUntil(promiseCache);
})

self.addEventListener('fetch', (event) => {
    const respCache = caches.match(event.request);
    event.respondWith(respCache);
})
