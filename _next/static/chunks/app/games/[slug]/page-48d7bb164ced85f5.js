(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6039], {
        4755: function(e, n, r) {
            Promise.resolve().then(r.t.bind(r, 6785, 23)), Promise.resolve().then(r.t.bind(r, 2127, 23)), Promise.resolve().then(r.bind(r, 6102)), Promise.resolve().then(r.bind(r, 111)), Promise.resolve().then(r.bind(r, 5634)), Promise.resolve().then(r.bind(r, 7374)), Promise.resolve().then(r.bind(r, 7991)), Promise.resolve().then(r.bind(r, 2631)), Promise.resolve().then(r.bind(r, 4644)), Promise.resolve().then(r.bind(r, 6020))
        },
        7991: function(e, n, r) {
            "use strict";
            r.r(n), r.d(n, {
                GameSocial: function() {
                    return i
                }
            }), r(2265);
            var t = r(7918),
                l = r(5304),
                a = r(7437),
                i = function(e) {
                    var n = e.game;
                    return (0, a.jsxs)("div", {
                        className: "pb-4 inline-block",
                        children: [(0, a.jsx)("p", {
                            className: "text-sm text-gray-500 pb-2",
                            children: "Share game"
                        }), (0, a.jsxs)("div", {
                            className: "flex items-center justify-start gap-2",
                            children: [(0, a.jsx)(t.Dk, {
                                url: l.Z.clientUrl + "/games/" + n.slug,
                                title: "Share ".concat(n.name, " game on facebook"),
                                children: (0, a.jsx)(t.Vq, {
                                    size: 26,
                                    round: !0
                                })
                            }), (0, a.jsx)(t.B, {
                                url: l.Z.clientUrl + "/games/" + n.slug,
                                children: (0, a.jsx)(t.Zm, {
                                    size: 26,
                                    round: !0
                                })
                            }), (0, a.jsx)(t.iR, {
                                url: l.Z.clientUrl + "/games/" + n.slug,
                                children: (0, a.jsx)(t.MP, {
                                    size: 26,
                                    round: !0
                                })
                            }), (0, a.jsx)(t.tq, {
                                url: l.Z.clientUrl + "/games/" + n.slug,
                                children: (0, a.jsx)(t.YG, {
                                    size: 26,
                                    round: !0
                                })
                            })]
                        })]
                    })
                }
        },
        111: function(e, n, r) {
            "use strict";
            r.r(n);
            var t = r(2265),
                l = r(6691),
                a = r.n(l),
                i = r(5304),
                s = r(2985),
                o = r(7437);
            n.default = function(e) {
                var n = e.game,
                    r = (0, t.useState)(),
                    l = r[0],
                    c = r[1],
                    g = (0, t.useCallback)(function() {
                        c(function(e) {
                            return (e || 0) + 1 === n.gallery.length ? 0 : (e || 0) + 1
                        })
                    }, [n.gallery.length]),
                    u = (0, t.useCallback)(function() {
                        c(function(e) {
                            return (e || 0) - 1 < 0 ? n.gallery.length - 1 : (e || 0) - 1
                        })
                    }, [n.gallery.length]);
                (0, t.useEffect)(function() {
                    var e = function(e) {
                        var n = e.key;
                        "Escape" === n && c(void 0), ("ArrowLeft" === n || "ArrowUp" === n) && u(), ("ArrowRight" === n || "ArrowDown" === n) && g()
                    };
                    return document.addEventListener("keyup", e),
                        function() {
                            document.removeEventListener("keyup", e)
                        }
                }, [u, g]);
                var d = (0, t.useMemo)(function() {
                    return void 0 !== l && n.gallery[l] ? n.gallery[l] : void 0
                }, [l, n.gallery]);
                return (0, o.jsxs)(o.Fragment, {
                    children: [n.gallery.length ? (0, o.jsx)("ul", {
                        role: "list",
                        className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 p-4",
                        children: n.gallery.map(function(e, r) {
                            return (0, o.jsx)("li", {
                                role: "listitem",
                                children: (0, o.jsx)(a(), {
                                    className: "game-gg",
                                    width: e.width,
                                    height: e.height,
                                    sizes: "\n                                    (max-width: 64Opx) 185px, \n                                    (max-width: 768px) 181px,\n                                    (max-width: 1024px) 224px,\n                                    (max-width: 1280px) 228px, \n                                    (max-width: 1535px) 292px, \n                                    356px\n                                ",
                                    src: (0, s.OO)(i.Z.contentUrl) + e.url,
                                    onClick: function() {
                                        c(r)
                                    },
                                    alt: e.alternativeText ? e.alternativeText : "Gameplay screen of ".concat(n.name, " (").concat(r + 1, "/").concat(n.gallery.length, ")"),
                                    title: e.alternativeText ? e.alternativeText : "Gameplay screen of ".concat(n.name, " (").concat(r + 1, "/").concat(n.gallery.length, ")")
                                })
                            }, r)
                        })
                    }) : null, d ? (0, o.jsxs)("div", {
                        className: "game-gallery",
                        children: [(0, o.jsx)("div", {
                            className: "game-gallery-wrapper",
                            children: (0, o.jsx)(a(), {
                                className: "game-gallery-image",
                                width: d.width,
                                height: d.height,
                                src: (0, s.OO)(i.Z.contentUrl) + d.url,
                                alt: d.alternativeText ? d.alternativeText : "Gameplay screen of ".concat(n.name, " (").concat((l || 0) + 1, "/").concat(n.gallery.length, ")"),
                                title: d.alternativeText ? d.alternativeText : "Gameplay screen of ".concat(n.name, " (").concat((l || 0) + 1, "/").concat(n.gallery.length, ")")
                            })
                        }), (0, o.jsx)("div", {
                            className: "game-gallery-close",
                            onClick: function() {
                                return c(void 0)
                            },
                            children: (0, o.jsx)("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                strokeWidth: 1.5,
                                stroke: "currentColor",
                                className: "w-6 h-6",
                                children: (0, o.jsx)("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    d: "M6 18L18 6M6 6l12 12"
                                })
                            })
                        }), (0, o.jsx)("div", {
                            className: "game-gallery-icon game-gallery-left",
                            onClick: function() {
                                return u()
                            },
                            children: (0, o.jsx)("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                strokeWidth: 1.5,
                                stroke: "currentColor",
                                className: "w-6 h-6",
                                children: (0, o.jsx)("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    d: "M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                                })
                            })
                        }), (0, o.jsx)("div", {
                            className: "game-gallery-icon game-gallery-right",
                            onClick: function() {
                                return g()
                            },
                            children: (0, o.jsx)("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                strokeWidth: 1.5,
                                stroke: "currentColor",
                                className: "w-6 h-6",
                                children: (0, o.jsx)("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    d: "M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                                })
                            })
                        })]
                    }) : null]
                })
            }
        }
    },
    function(e) {
        e.O(0, [2127, 6352, 1381, 8326, 5584, 2971, 4874, 1744], function() {
            return e(e.s = 4755)
        }), _N_E = e.O()
    }
]);