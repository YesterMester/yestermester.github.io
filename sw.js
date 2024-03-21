if (!self.define) {
    let s, e = {};
    const a = (a, i) => (a = new URL(a + ".js", i).href, e[a] || new Promise((e => {
        if ("document" in self) {
            const s = document.createElement("script");
            s.src = a, s.onload = e, document.head.appendChild(s)
        } else s = a, importScripts(a), e()
    })).then((() => {
        let s = e[a];
        if (!s) throw new Error(`Module ${a} didn’t register its module`);
        return s
    })));
    self.define = (i, n) => {
        const t = s || ("document" in self ? document.currentScript.src : "") || location.href;
        if (e[t]) return;
        let c = {};
        const r = s => a(s, t),
            u = {
                module: {
                    uri: t
                },
                exports: c,
                require: r
            };
        e[t] = Promise.all(i.map((s => u[s] || r(s)))).then((s => (n(...s), c)))
    }
}
define(["./workbox-83b758e3"], (function(s) {
    "use strict";
    importScripts(), self.skipWaiting(), s.clientsClaim(), s.precacheAndRoute([{
        url: "/_next/static/chunks/1213.3bd779e5871d427d.js",
        revision: "3bd779e5871d427d"
    }, {
        url: "/_next/static/chunks/1324.96e57b0cb587ddba.js",
        revision: "96e57b0cb587ddba"
    }, {
        url: "/_next/static/chunks/1381-0997c8f773580af6.js",
        revision: "x9HgwXa6HOi1w5FVsd_bR"
    }, {
        url: "/_next/static/chunks/1757.5a7e9b2c953deb2e.js",
        revision: "5a7e9b2c953deb2e"
    }, {
        url: "/_next/static/chunks/2127-bd15b6eeb49dbe2a.js",
        revision: "x9HgwXa6HOi1w5FVsd_bR"
    }, {
        url: "/_next/static/chunks/3103.6bae6a8c1638fb79.js",
        revision: "6bae6a8c1638fb79"
    }, {
        url: "/_next/static/chunks/3609.20d4745e92318856.js",
        revision: "20d4745e92318856"
    }, {
        url: "/_next/static/chunks/3839.1ea79c1eb95cc59e.js",
        revision: "1ea79c1eb95cc59e"
    }, {
        url: "/_next/static/chunks/4178.9502bdb8e9abe005.js",
        revision: "9502bdb8e9abe005"
    }, {
        url: "/_next/static/chunks/4874-3bc80a9caf010a95.js",
        revision: "x9HgwXa6HOi1w5FVsd_bR"
    }, {
        url: "/_next/static/chunks/5584-5cd1a167385a716b.js",
        revision: "x9HgwXa6HOi1w5FVsd_bR"
    }, {
        url: "/_next/static/chunks/5909-1e31d144a5b68d71.js",
        revision: "x9HgwXa6HOi1w5FVsd_bR"
    }, {
        url: "/_next/static/chunks/6352-c01325d13ad2076c.js",
        revision: "x9HgwXa6HOi1w5FVsd_bR"
    }, {
        url: "/_next/static/chunks/6418.849d32e030af3f94.js",
        revision: "849d32e030af3f94"
    }, {
        url: "/_next/static/chunks/7268-8792a5177d9af048.js",
        revision: "x9HgwXa6HOi1w5FVsd_bR"
    }, {
        url: "/_next/static/chunks/8326-add0660b259bf510.js",
        revision: "x9HgwXa6HOi1w5FVsd_bR"
    }, {
        url: "/_next/static/chunks/app/%5Bslug%5D/loading-a37b7f42400fe4f5.js",
        revision: "x9HgwXa6HOi1w5FVsd_bR"
    }, {
        url: "/_next/static/chunks/app/%5Bslug%5D/page-1b503626e642179c.js",
        revision: "x9HgwXa6HOi1w5FVsd_bR"
    }, {
        url: "/_next/static/chunks/app/categories/%5Bslug%5D/loading-c6d19ec4172cb2cc.js",
        revision: "x9HgwXa6HOi1w5FVsd_bR"
    }, {
        url: "/_next/static/chunks/app/categories/%5Bslug%5D/page-3cf4a202270fccfd.js",
        revision: "x9HgwXa6HOi1w5FVsd_bR"
    }, {
        url: "/_next/static/chunks/app/categories/loading-ca15bc54b83b9815.js",
        revision: "x9HgwXa6HOi1w5FVsd_bR"
    }, {
        url: "/_next/static/chunks/app/categories/page-cc80054fbd1ec64a.js",
        revision: "x9HgwXa6HOi1w5FVsd_bR"
    }, {
        url: "/_next/static/chunks/app/developers/%5Bslug%5D/loading-f7615e23b39a49a0.js",
        revision: "x9HgwXa6HOi1w5FVsd_bR"
    }, {
        url: "/_next/static/chunks/app/developers/%5Bslug%5D/page-5c2a47b5612b30b4.js",
        revision: "x9HgwXa6HOi1w5FVsd_bR"
    }, {
        url: "/_next/static/chunks/app/developers/loading-5bf3fd2415c69c9d.js",
        revision: "x9HgwXa6HOi1w5FVsd_bR"
    }, {
        url: "/_next/static/chunks/app/developers/page-de67eb17bac51cad.js",
        revision: "x9HgwXa6HOi1w5FVsd_bR"
    }, {
        url: "/_next/static/chunks/app/games/%5Bslug%5D/loading-e70f816b92bdf706.js",
        revision: "x9HgwXa6HOi1w5FVsd_bR"
    }, {
        url: "/_next/static/chunks/app/games/%5Bslug%5D/page-48d7bb164ced85f5.js",
        revision: "x9HgwXa6HOi1w5FVsd_bR"
    }, {
        url: "/_next/static/chunks/app/games/%5Bslug%5D/play/loading-7f56644819f2d339.js",
        revision: "x9HgwXa6HOi1w5FVsd_bR"
    }, {
        url: "/_next/static/chunks/app/games/%5Bslug%5D/play/page-fd3ecc713bdca16d.js",
        revision: "x9HgwXa6HOi1w5FVsd_bR"
    }, {
        url: "/_next/static/chunks/app/games/loading-3c2e49e7fac3cdc1.js",
        revision: "x9HgwXa6HOi1w5FVsd_bR"
    }, {
        url: "/_next/static/chunks/app/games/page-733c8eb5a977ba61.js",
        revision: "x9HgwXa6HOi1w5FVsd_bR"
    }, {
        url: "/_next/static/chunks/app/games/popular/loading-625c97e9359f9df7.js",
        revision: "x9HgwXa6HOi1w5FVsd_bR"
    }, {
        url: "/_next/static/chunks/app/games/popular/page-b483997721d78669.js",
        revision: "x9HgwXa6HOi1w5FVsd_bR"
    }, {
        url: "/_next/static/chunks/app/games/recently/loading-aa70ef425b87102b.js",
        revision: "x9HgwXa6HOi1w5FVsd_bR"
    }, {
        url: "/_next/static/chunks/app/games/recently/page-f035ea5550b790a6.js",
        revision: "x9HgwXa6HOi1w5FVsd_bR"
    }, {
        url: "/_next/static/chunks/app/global-error-6295f54a7c647e66.js",
        revision: "x9HgwXa6HOi1w5FVsd_bR"
    }, {
        url: "/_next/static/chunks/app/layout-69f780b1007fcdc2.js",
        revision: "x9HgwXa6HOi1w5FVsd_bR"
    }, {
        url: "/_next/static/chunks/app/loading-05c31fdaf853654c.js",
        revision: "x9HgwXa6HOi1w5FVsd_bR"
    }, {
        url: "/_next/static/chunks/app/not-found-1f78d89920595f3c.js",
        revision: "x9HgwXa6HOi1w5FVsd_bR"
    }, {
        url: "/_next/static/chunks/app/page-562955496da5ac43.js",
        revision: "x9HgwXa6HOi1w5FVsd_bR"
    }, {
        url: "/_next/static/chunks/app/publishers/%5Bslug%5D/loading-ace2ae884eaf2e78.js",
        revision: "x9HgwXa6HOi1w5FVsd_bR"
    }, {
        url: "/_next/static/chunks/app/publishers/%5Bslug%5D/page-ec4db2382b53f290.js",
        revision: "x9HgwXa6HOi1w5FVsd_bR"
    }, {
        url: "/_next/static/chunks/app/publishers/loading-cbe361a20260c77a.js",
        revision: "x9HgwXa6HOi1w5FVsd_bR"
    }, {
        url: "/_next/static/chunks/app/publishers/page-c64dc54093468f6c.js",
        revision: "x9HgwXa6HOi1w5FVsd_bR"
    }, {
        url: "/_next/static/chunks/app/restore-password/page-260830f75b2bdcfc.js",
        revision: "x9HgwXa6HOi1w5FVsd_bR"
    }, {
        url: "/_next/static/chunks/app/user/page-a81cb366817a0220.js",
        revision: "x9HgwXa6HOi1w5FVsd_bR"
    }, {
        url: "/_next/static/chunks/app/years/%5Bslug%5D/loading-d1d64b1a4ee27af9.js",
        revision: "x9HgwXa6HOi1w5FVsd_bR"
    }, {
        url: "/_next/static/chunks/app/years/%5Bslug%5D/page-96b8cdc695dcdfcc.js",
        revision: "x9HgwXa6HOi1w5FVsd_bR"
    }, {
        url: "/_next/static/chunks/app/years/loading-9937681c6c516745.js",
        revision: "x9HgwXa6HOi1w5FVsd_bR"
    }, {
        url: "/_next/static/chunks/app/years/page-357a341ab2460ae6.js",
        revision: "x9HgwXa6HOi1w5FVsd_bR"
    }, {
        url: "/_next/static/chunks/fd9d1056-0e196cd55b9648a3.js",
        revision: "x9HgwXa6HOi1w5FVsd_bR"
    }, {
        url: "/_next/static/chunks/framework-964c2d6016b0d731.js",
        revision: "x9HgwXa6HOi1w5FVsd_bR"
    }, {
        url: "/_next/static/chunks/main-9c338e5b06323a76.js",
        revision: "x9HgwXa6HOi1w5FVsd_bR"
    }, {
        url: "/_next/static/chunks/main-app-055cfb354d694101.js",
        revision: "x9HgwXa6HOi1w5FVsd_bR"
    }, {
        url: "/_next/static/chunks/pages/_app-7dbaf7830a82e6b9.js",
        revision: "x9HgwXa6HOi1w5FVsd_bR"
    }, {
        url: "/_next/static/chunks/pages/_error-996df907bf39526c.js",
        revision: "x9HgwXa6HOi1w5FVsd_bR"
    }, {
        url: "/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",
        revision: "837c0df77fd5009c9e46d446188ecfd0"
    }, {
        url: "/_next/static/chunks/webpack-47afad35ebdc8115.js",
        revision: "x9HgwXa6HOi1w5FVsd_bR"
    }, {
        url: "/_next/static/css/10afd9ac200b1b2f.css",
        revision: "10afd9ac200b1b2f"
    }, {
        url: "/_next/static/css/b690c5221d501a0a.css",
        revision: "b690c5221d501a0a"
    }, {
        url: "/_next/static/media/emulators-ui-loader.6335e0f1.png",
        revision: "6335e0f1"
    }, {
        url: "/_next/static/x9HgwXa6HOi1w5FVsd_bR/_buildManifest.js",
        revision: "b602607aa58700948ec10db33d2f0360"
    }, {
        url: "/_next/static/x9HgwXa6HOi1w5FVsd_bR/_ssgManifest.js",
        revision: "b6652df95db52feb4daf4eca35380933"
    }], {
        ignoreURLParametersMatching: []
    }), s.cleanupOutdatedCaches(), s.registerRoute("/", new s.NetworkFirst({
        cacheName: "start-url",
        plugins: [{
            cacheWillUpdate: async ({
                response: s
            }) => s && "opaqueredirect" === s.type ? new Response(s.body, {
                status: 200,
                statusText: "OK",
                headers: s.headers
            }) : s
        }]
    }), "GET"), s.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i, new s.CacheFirst({
        cacheName: "google-fonts-webfonts",
        plugins: [new s.ExpirationPlugin({
            maxEntries: 4,
            maxAgeSeconds: 31536e3
        })]
    }), "GET"), s.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i, new s.StaleWhileRevalidate({
        cacheName: "google-fonts-stylesheets",
        plugins: [new s.ExpirationPlugin({
            maxEntries: 4,
            maxAgeSeconds: 604800
        })]
    }), "GET"), s.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i, new s.StaleWhileRevalidate({
        cacheName: "static-font-assets",
        plugins: [new s.ExpirationPlugin({
            maxEntries: 4,
            maxAgeSeconds: 604800
        })]
    }), "GET"), s.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i, new s.StaleWhileRevalidate({
        cacheName: "static-image-assets",
        plugins: [new s.ExpirationPlugin({
            maxEntries: 64,
            maxAgeSeconds: 2592e3
        })]
    }), "GET"), s.registerRoute(/\/_next\/static.+\.js$/i, new s.CacheFirst({
        cacheName: "next-static-js-assets",
        plugins: [new s.ExpirationPlugin({
            maxEntries: 64,
            maxAgeSeconds: 86400
        })]
    }), "GET"), s.registerRoute(/\/_next\/image\?url=.+$/i, new s.StaleWhileRevalidate({
        cacheName: "next-image",
        plugins: [new s.ExpirationPlugin({
            maxEntries: 64,
            maxAgeSeconds: 86400
        })]
    }), "GET"), s.registerRoute(/\.(?:mp3|wav|ogg)$/i, new s.CacheFirst({
        cacheName: "static-audio-assets",
        plugins: [new s.RangeRequestsPlugin, new s.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400
        })]
    }), "GET"), s.registerRoute(/\.(?:mp4|webm)$/i, new s.CacheFirst({
        cacheName: "static-video-assets",
        plugins: [new s.RangeRequestsPlugin, new s.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400
        })]
    }), "GET"), s.registerRoute(/\.(?:js)$/i, new s.StaleWhileRevalidate({
        cacheName: "static-js-assets",
        plugins: [new s.ExpirationPlugin({
            maxEntries: 48,
            maxAgeSeconds: 86400
        })]
    }), "GET"), s.registerRoute(/\.(?:css|less)$/i, new s.StaleWhileRevalidate({
        cacheName: "static-style-assets",
        plugins: [new s.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400
        })]
    }), "GET"), s.registerRoute(/\/_next\/data\/.+\/.+\.json$/i, new s.StaleWhileRevalidate({
        cacheName: "next-data",
        plugins: [new s.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400
        })]
    }), "GET"), s.registerRoute(/\.(?:json|xml|csv)$/i, new s.NetworkFirst({
        cacheName: "static-data-assets",
        plugins: [new s.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400
        })]
    }), "GET"), s.registerRoute((({
        sameOrigin: s,
        url: {
            pathname: e
        }
    }) => !(!s || e.startsWith("/api/auth/callback") || !e.startsWith("/api/"))), new s.NetworkFirst({
        cacheName: "apis",
        networkTimeoutSeconds: 10,
        plugins: [new s.ExpirationPlugin({
            maxEntries: 16,
            maxAgeSeconds: 86400
        })]
    }), "GET"), s.registerRoute((({
        request: s,
        url: {
            pathname: e
        },
        sameOrigin: a
    }) => "1" === s.headers.get("RSC") && "1" === s.headers.get("Next-Router-Prefetch") && a && !e.startsWith("/api/")), new s.NetworkFirst({
        cacheName: "pages-rsc-prefetch",
        plugins: [new s.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400
        })]
    }), "GET"), s.registerRoute((({
        request: s,
        url: {
            pathname: e
        },
        sameOrigin: a
    }) => "1" === s.headers.get("RSC") && a && !e.startsWith("/api/")), new s.NetworkFirst({
        cacheName: "pages-rsc",
        plugins: [new s.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400
        })]
    }), "GET"), s.registerRoute((({
        url: {
            pathname: s
        },
        sameOrigin: e
    }) => e && !s.startsWith("/api/")), new s.NetworkFirst({
        cacheName: "pages",
        plugins: [new s.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400
        })]
    }), "GET"), s.registerRoute((({
        sameOrigin: s
    }) => !s), new s.NetworkFirst({
        cacheName: "cross-origin",
        networkTimeoutSeconds: 10,
        plugins: [new s.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 3600
        })]
    }), "GET")
}));