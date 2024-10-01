if (!self.define) {
  let e,
    a = {};
  const s = (s, t) => (
    (s = new URL(s + '.js', t).href),
    a[s] ||
      new Promise((a) => {
        if ('document' in self) {
          const e = document.createElement('script');
          (e.src = s), (e.onload = a), document.head.appendChild(e);
        } else (e = s), importScripts(s), a();
      }).then(() => {
        let e = a[s];
        if (!e) throw new Error(`Module ${s} didn’t register its module`);
        return e;
      })
  );
  self.define = (t, i) => {
    const n =
      e ||
      ('document' in self ? document.currentScript.src : '') ||
      location.href;
    if (a[n]) return;
    let c = {};
    const r = (e) => s(e, n),
      o = { module: { uri: n }, exports: c, require: r };
    a[n] = Promise.all(t.map((e) => o[e] || r(e))).then((e) => (i(...e), c));
  };
}
define(['./workbox-f1770938'], function (e) {
  'use strict';
  importScripts(),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        {
          url: '/_next/static/atNIXQ8lT7EUHHRFI4-wA/_buildManifest.js',
          revision: '50654c4134ba6f71b423498e9447ee91'
        },
        {
          url: '/_next/static/atNIXQ8lT7EUHHRFI4-wA/_ssgManifest.js',
          revision: 'b6652df95db52feb4daf4eca35380933'
        },
        {
          url: '/_next/static/chunks/13-42fc82bceb7e8a30.js',
          revision: 'atNIXQ8lT7EUHHRFI4-wA'
        },
        {
          url: '/_next/static/chunks/184-4dca86e6be741b78.js',
          revision: 'atNIXQ8lT7EUHHRFI4-wA'
        },
        {
          url: '/_next/static/chunks/326-bbeb8ccf748f7f1a.js',
          revision: 'atNIXQ8lT7EUHHRFI4-wA'
        },
        {
          url: '/_next/static/chunks/409-549ced12700768a1.js',
          revision: 'atNIXQ8lT7EUHHRFI4-wA'
        },
        {
          url: '/_next/static/chunks/413-b87acdec997ffb2f.js',
          revision: 'atNIXQ8lT7EUHHRFI4-wA'
        },
        {
          url: '/_next/static/chunks/app/(pages)/contacto/page-0a9bab6829740656.js',
          revision: 'atNIXQ8lT7EUHHRFI4-wA'
        },
        {
          url: '/_next/static/chunks/app/(pages)/nosotros/page-121076c840bcfb7b.js',
          revision: 'atNIXQ8lT7EUHHRFI4-wA'
        },
        {
          url: '/_next/static/chunks/app/(pages)/precios/page-a55cf7e81c1f2228.js',
          revision: 'atNIXQ8lT7EUHHRFI4-wA'
        },
        {
          url: '/_next/static/chunks/app/(pages)/preguntas/page-1e04d404ab04231c.js',
          revision: 'atNIXQ8lT7EUHHRFI4-wA'
        },
        {
          url: '/_next/static/chunks/app/_not-found-ad97e4aa302344e8.js',
          revision: 'atNIXQ8lT7EUHHRFI4-wA'
        },
        {
          url: '/_next/static/chunks/app/layout-0c897f16a42ff263.js',
          revision: 'atNIXQ8lT7EUHHRFI4-wA'
        },
        {
          url: '/_next/static/chunks/app/page-c50504b113894789.js',
          revision: 'atNIXQ8lT7EUHHRFI4-wA'
        },
        {
          url: '/_next/static/chunks/fd9d1056-eb9db65ebcf596bd.js',
          revision: 'atNIXQ8lT7EUHHRFI4-wA'
        },
        {
          url: '/_next/static/chunks/framework-c5181c9431ddc45b.js',
          revision: 'atNIXQ8lT7EUHHRFI4-wA'
        },
        {
          url: '/_next/static/chunks/main-3c02ec908da3a325.js',
          revision: 'atNIXQ8lT7EUHHRFI4-wA'
        },
        {
          url: '/_next/static/chunks/main-app-869ffe6374de670a.js',
          revision: 'atNIXQ8lT7EUHHRFI4-wA'
        },
        {
          url: '/_next/static/chunks/pages/_app-1534f180665c857f.js',
          revision: 'atNIXQ8lT7EUHHRFI4-wA'
        },
        {
          url: '/_next/static/chunks/pages/_error-b646007f40c4f0a8.js',
          revision: 'atNIXQ8lT7EUHHRFI4-wA'
        },
        {
          url: '/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js',
          revision: '837c0df77fd5009c9e46d446188ecfd0'
        },
        {
          url: '/_next/static/chunks/webpack-36a0ae67e6f294d6.js',
          revision: 'atNIXQ8lT7EUHHRFI4-wA'
        },
        {
          url: '/_next/static/css/59182e4229e33312.css',
          revision: '59182e4229e33312'
        },
        {
          url: '/_next/static/media/05a31a2ca4975f99-s.woff2',
          revision: 'f1b44860c66554b91f3b1c81556f73ca'
        },
        {
          url: '/_next/static/media/513657b02c5c193f-s.woff2',
          revision: 'c4eb7f37bc4206c901ab08601f21f0f2'
        },
        {
          url: '/_next/static/media/51ed15f9841b9f9d-s.woff2',
          revision: 'bb9d99fb9bbc695be80777ca2c1c2bee'
        },
        {
          url: '/_next/static/media/Evelyn.7789592e.png',
          revision: '86aeb9022d023d6d607f5924c889a7bb'
        },
        {
          url: '/_next/static/media/Ricardo.8d0b8b9a.png',
          revision: 'edd3e987dcd94c3bfd5482428f0a14f8'
        },
        {
          url: '/_next/static/media/c9a5bc6a7c948fb0-s.p.woff2',
          revision: '74c3556b9dad12fb76f84af53ba69410'
        },
        {
          url: '/_next/static/media/camera-back.bfd0140f.jpg',
          revision: '55540dff130bc06bf5907d4ad95d16a4'
        },
        {
          url: '/_next/static/media/camera-front.a439f820.jpg',
          revision: '5260c12b8c8c5973a5055c11a066e356'
        },
        {
          url: '/_next/static/media/d6b16ce4a6175f26-s.woff2',
          revision: 'dd930bafc6297347be3213f22cc53d3e'
        },
        {
          url: '/_next/static/media/dma.b48a97d3.svg',
          revision: '40edf9b2c4193289b88d16d0e1c166ba'
        },
        {
          url: '/_next/static/media/ec159349637c90ad-s.woff2',
          revision: '0e89df9522084290e01e4127495fae99'
        },
        {
          url: '/_next/static/media/fasta.3e57f65d.svg',
          revision: '6dd6f212ecc1c8c95fc0c255b85da053'
        },
        {
          url: '/_next/static/media/fd4db3eb5472fc27-s.woff2',
          revision: '71f3fcaf22131c3368d9ec28ef839831'
        },
        {
          url: '/_next/static/media/hero.965e1006.jpg',
          revision: 'a2f2d7ffef4dbcef091ee8ffd853c7d7'
        },
        {
          url: '/_next/static/media/hero2.aba75039.jpg',
          revision: '4af1260257f36b99293a1ffad5cf3ddc'
        },
        {
          url: '/_next/static/media/logoCv1.f4287884.png',
          revision: '646ea00899ca9e6dfe94ed5f9aa978ca'
        },
        {
          url: '/_next/static/media/pablo.b01f2cc8.png',
          revision: '7061a97918c19b455010b6f649f762a9'
        },
        {
          url: '/_next/static/media/profe.e9e1c138.png',
          revision: '375dbf5c3ff1d8b56e89d69b60e0b637'
        },
        {
          url: '/_next/static/media/ronda.132d6778.webp',
          revision: 'e7877e18e822db40918f1f534843b8a9'
        },
        {
          url: '/_next/static/media/testimonial1.66594d56.jpg',
          revision: '85fcf8d34e160ef4a4560f6cf670ad06'
        },
        {
          url: '/_next/static/media/testimonial2.33ebcb2f.jpg',
          revision: 'ac7db64b85418d50d5602a64ec00d98a'
        },
        {
          url: '/_next/static/media/testimonial3.14aa9d13.jpg',
          revision: 'de0fe56fd31a48c335a9b1c66bdbaaa2'
        }
      ],
      { ignoreURLParametersMatching: [] }
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      '/',
      new e.NetworkFirst({
        cacheName: 'start-url',
        plugins: [
          {
            cacheWillUpdate: async ({ response: e }) =>
              e && 'opaqueredirect' === e.type
                ? new Response(e.body, {
                    status: 200,
                    statusText: 'OK',
                    headers: e.headers
                  })
                : e
          }
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: 'google-fonts-webfonts',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
      new e.StaleWhileRevalidate({
        cacheName: 'google-fonts-stylesheets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-font-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-image-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 2592e3 })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /\/_next\/static.+\.js$/i,
      new e.CacheFirst({
        cacheName: 'next-static-js-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /\/_next\/image\?url=.+$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'next-image',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:mp3|wav|ogg)$/i,
      new e.CacheFirst({
        cacheName: 'static-audio-assets',
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:mp4|webm)$/i,
      new e.CacheFirst({
        cacheName: 'static-video-assets',
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-js-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 48, maxAgeSeconds: 86400 })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-style-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /\/_next\/data\/.+\/.+\.json$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'next-data',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: 'static-data-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      ({ sameOrigin: e, url: { pathname: a } }) =>
        !(!e || a.startsWith('/api/auth/') || !a.startsWith('/api/')),
      new e.NetworkFirst({
        cacheName: 'apis',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      ({ request: e, url: { pathname: a }, sameOrigin: s }) =>
        '1' === e.headers.get('RSC') &&
        '1' === e.headers.get('Next-Router-Prefetch') &&
        s &&
        !a.startsWith('/api/'),
      new e.NetworkFirst({
        cacheName: 'pages-rsc-prefetch',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      ({ request: e, url: { pathname: a }, sameOrigin: s }) =>
        '1' === e.headers.get('RSC') && s && !a.startsWith('/api/'),
      new e.NetworkFirst({
        cacheName: 'pages-rsc',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      ({ url: { pathname: e }, sameOrigin: a }) => a && !e.startsWith('/api/'),
      new e.NetworkFirst({
        cacheName: 'pages',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      ({ sameOrigin: e }) => !e,
      new e.NetworkFirst({
        cacheName: 'cross-origin',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 })
        ]
      }),
      'GET'
    );
});
