(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9284], {
        5256: function(e, t, r) {
            Promise.resolve().then(r.bind(r, 1084))
        },
        6639: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                function(e, t) {
                    for (var r in t) Object.defineProperty(e, r, {
                        enumerable: !0,
                        get: t[r]
                    })
                }(t, {
                    requestIdleCallback: function() {
                        return r
                    },
                    cancelIdleCallback: function() {
                        return n
                    }
                });
            var r = "undefined" != typeof self && self.requestIdleCallback && self.requestIdleCallback.bind(window) || function(e) {
                    var t = Date.now();
                    return self.setTimeout(function() {
                        e({
                            didTimeout: !1,
                            timeRemaining: function() {
                                return Math.max(0, 50 - (Date.now() - t))
                            }
                        })
                    }, 1)
                },
                n = "undefined" != typeof self && self.cancelIdleCallback && self.cancelIdleCallback.bind(window) || function(e) {
                    return clearTimeout(e)
                };
            ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        4725: function(e, t, r) {
            "use strict";
            var n = r(9182);

            function s(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function a(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? s(Object(r), !0).forEach(function(t) {
                        n(e, t, r[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : s(Object(r)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "default", {
                enumerable: !0,
                get: function() {
                    return c
                }
            });
            var o = r(1024);
            r(2265);
            var l = o._(r(2698));

            function i(e) {
                return {
                    default: (null == e ? void 0 : e.default) || e
                }
            }

            function c(e, t) {
                var r = l.default,
                    n = {
                        loading: function(e) {
                            return e.error, e.isLoading, e.pastDelay, null
                        }
                    };
                "function" == typeof e && (n.loader = e), Object.assign(n, t);
                var s = n.loader;
                return r(a(a({}, n), {}, {
                    loader: function() {
                        return null != s ? s().then(i) : Promise.resolve(i(function() {
                            return null
                        }))
                    }
                }))
            }("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        6102: function(e, t, r) {
            "use strict";

            function n(e) {
                return e.children
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "NoSSR", {
                enumerable: !0,
                get: function() {
                    return n
                }
            }), r(241)
        },
        2698: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "default", {
                enumerable: !0,
                get: function() {
                    return a
                }
            });
            var n = r(1024)._(r(2265)),
                s = r(6102),
                a = function(e) {
                    var t = Object.assign({
                        loader: null,
                        loading: null,
                        ssr: !0
                    }, e);

                    function r(e) {
                        var r = t.loading,
                            a = n.default.createElement(r, {
                                isLoading: !0,
                                pastDelay: !0,
                                error: null
                            }),
                            o = t.ssr ? n.default.Fragment : s.NoSSR,
                            l = t.lazy;
                        return n.default.createElement(n.default.Suspense, {
                            fallback: a
                        }, n.default.createElement(o, null, n.default.createElement(l, e)))
                    }
                    return t.lazy = n.default.lazy(t.loader), r.displayName = "LoadableComponent", r
                }
        },
        1084: function(e, t, r) {
            "use strict";
            r.r(t);
            var n = r(2265),
                s = r(2050),
                a = r(8475),
                o = r.n(a),
                l = r(4725),
                i = r.n(l),
                c = r(9094),
                u = r(8408),
                d = r(5304),
                f = r(9330),
                m = r(2631),
                p = r(7437),
                g = i()(function() {
                    return r.e(1324).then(r.bind(r, 1324))
                }, {
                    loadableGenerated: {
                        webpack: () => [1324]
                    },
                    loadableGenerated: {
                        webpack: function() {
                            return [1324]
                        }
                    }
                });
            t.default = function(e) {
                var t = e.game,
                    r = (0, n.useContext)(s.UserContext),
                    a = r.user_id,
                    l = r.createNewUserId,
                    i = (0, n.useState)(!1),
                    h = i[0],
                    v = i[1],
                    x = (0, n.useState)(!1),
                    j = x[0],
                    y = x[1],
                    b = (0, n.useState)(!1),
                    w = b[0],
                    k = b[1];
                return ((0, n.useEffect)(function() {
                    y(!0), fetch(d.Z.api.gamePlay + "/" + t.slug, {
                        method: "post",
                        credentials: "include",
                        mode: "cors",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({})
                    }).then(f.d).then(function(e) {
                        return e.json()
                    }).then(function(e) {
                        y(!1)
                    }).catch(function() {
                        y(!1)
                    })
                }, [t.slug]), (0, n.useEffect)(function() {
                    return w && document.body.classList.add("is-play"),
                        function() {
                            document.body.classList.remove("is-play")
                        }
                }, [w]), (0, n.useEffect)(function() {
                    var e = !1,
                        t = window.setInterval(function() {
                            "undefined" == typeof Dos || h || (window.clearInterval(t), e = !0, v(!0))
                        }, 250);
                    return function() {
                        e || window.clearInterval(t)
                    }
                }, [h]), (0, n.useEffect)(function() {
                    null === a && l()
                }, [a, l]), (0, n.useEffect)(function() {
                    if (t) {
                        if (document.body && !document.body.classList.contains(t.slug)) document.body.classList.add(t.slug);
                        else {
                            var e;
                            null === (e = document.body) || void 0 === e || e.classList.remove(t.slug)
                        }
                    }
                }, [t]), w) ? (0, p.jsxs)("div", {
                    className: "game-box-main",
                    children: [(0, p.jsx)(c.Z, {
                        center: !0,
                        shadow: !0,
                        large: !0,
                        value: j
                    }), "jsdos" === t.game_type ? (0, p.jsxs)(p.Fragment, {
                        children: [(0, p.jsx)(o(), {
                            id: "js-dos",
                            src: "/js-dos/js-dos.js",
                            onLoad: function() {
                                emulators.pathPrefix = "/js-dos/"
                            }
                        }), (0, p.jsx)("script", {
                            src: "/emulators-ui/emulators-ui.js",
                            defer: !0
                        })]
                    }) : null, "iframe" === t.game_type && t.iframe_link ? (0, p.jsx)("div", {
                        className: "game-box",
                        children: (0, p.jsx)("iframe", {
                            className: "iframe-element",
                            src: t.iframe_link,
                            frameBorder: "0"
                        })
                    }) : "jsdos" === t.game_type && t.jsdos_bundle ? (0, p.jsx)("div", {
                        className: "game-box",
                        children: (0, p.jsx)("div", {
                            className: "game-box-wrapper",
                            children: h ? (0, p.jsx)(g, {
                                gameName: t.slug,
                                source: d.Z.contentCDNUrl + t.jsdos_bundle.url,
                                infoBox: t.infoBox
                            }) : null
                        })
                    }) : null, (0, p.jsx)("div", {
                        className: "game-aside",
                        children: (0, p.jsx)(m.GoogleAd, {
                            className: "w-full h-full",
                            type: u.v$.playAside
                        })
                    })]
                }) : (0, p.jsxs)("div", {
                    className: "preplay h-full p-4 min-h-[40rem]",
                    onClick: function() {
                        return k(!0)
                    },
                    children: [(0, p.jsx)("div", {
                        className: "relative max-w-4xl w-full h-32 mb-16",
                        children: (0, p.jsx)(m.GoogleAd, {
                            className: "",
                            type: u.v$.preplay
                        })
                    }), (0, p.jsx)("div", {
                        className: "play-icon",
                        children: (0, p.jsx)("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            strokeWidth: 1.5,
                            stroke: "currentColor",
                            className: "w-6 h-6",
                            children: (0, p.jsx)("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                d: "M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
                            })
                        })
                    }), (0, p.jsxs)("h2", {
                        children: ["Play ", t.name]
                    }), (0, p.jsxs)("div", {
                        className: "border border-gray-400 p-4 rounded-md text-center mt-4 sm:mt-12 max-w-4xl",
                        children: [(0, p.jsxs)("h3", {
                            className: "uppercase pb-4 border-b-2 mb-2 sm:mb-7 border-gray-200",
                            children: [(0, p.jsx)("strong", {
                                children: "Never"
                            }), " lost your game progress"]
                        }), (0, p.jsxs)("ul", {
                            role: "list",
                            className: "space-y-3 grid grid-cols-7 pb-2 sm:pb-6",
                            children: [(0, p.jsxs)("li", {
                                className: "flex items-center justify-start flex-col !m-0",
                                children: [(0, p.jsx)("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    strokeWidth: 1.5,
                                    stroke: "currentColor",
                                    className: "w-8 h-8 md:w-12 md:h-12",
                                    children: (0, p.jsx)("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        d: "M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                                    })
                                }), (0, p.jsx)("span", {
                                    className: "leading-4 mt-2 text-sm",
                                    children: "Create & login to account"
                                })]
                            }), (0, p.jsx)("li", {
                                className: "flex items-center justify-center !m-0",
                                children: (0, p.jsx)("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    strokeWidth: 1.5,
                                    stroke: "currentColor",
                                    className: "w-6 h-6",
                                    children: (0, p.jsx)("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        d: "M8.25 4.5l7.5 7.5-7.5 7.5"
                                    })
                                })
                            }), (0, p.jsxs)("li", {
                                className: "flex items-center justify-start flex-col !m-0",
                                children: [(0, p.jsxs)("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    strokeWidth: 1.5,
                                    stroke: "currentColor",
                                    className: "w-8 h-8 md:w-12 md:h-12",
                                    children: [(0, p.jsx)("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        d: "M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                    }), (0, p.jsx)("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        d: "M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z"
                                    })]
                                }), (0, p.jsx)("span", {
                                    className: "leading-4 mt-2 text-sm",
                                    children: "Play game"
                                })]
                            }), (0, p.jsx)("li", {
                                className: "flex items-center justify-center !m-0",
                                children: (0, p.jsx)("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    strokeWidth: 1.5,
                                    stroke: "currentColor",
                                    className: "w-6 h-6",
                                    children: (0, p.jsx)("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        d: "M8.25 4.5l7.5 7.5-7.5 7.5"
                                    })
                                })
                            }), (0, p.jsxs)("li", {
                                className: "flex items-center justify-start flex-col !m-0",
                                children: [(0, p.jsxs)("svg", {
                                    className: "w-8 h-8 md:w-12 md:h-12",
                                    viewBox: "0 0 24 24",
                                    role: "img",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    stroke: "#000000",
                                    strokeWidth: "1",
                                    strokeLinecap: "square",
                                    strokeLinejoin: "miter",
                                    fill: "none",
                                    color: "#000000",
                                    children: [(0, p.jsx)("path", {
                                        d: "M17.2928932,3.29289322 L21,7 L21,20 C21,20.5522847 20.5522847,21 20,21 L4,21 C3.44771525,21 3,20.5522847 3,20 L3,4 C3,3.44771525 3.44771525,3 4,3 L16.5857864,3 C16.8510029,3 17.1053568,3.10535684 17.2928932,3.29289322 Z"
                                    }), (0, p.jsx)("rect", {
                                        width: "10",
                                        height: "8",
                                        x: "7",
                                        y: "13"
                                    }), (0, p.jsx)("rect", {
                                        width: "8",
                                        height: "5",
                                        x: "8",
                                        y: "3"
                                    })]
                                }), (0, p.jsx)("span", {
                                    className: "leading-4 mt-2 text-sm",
                                    children: "Save your progress"
                                })]
                            }), (0, p.jsx)("li", {
                                className: "flex items-center justify-center !m-0",
                                children: (0, p.jsx)("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    strokeWidth: 1.5,
                                    stroke: "currentColor",
                                    className: "w-6 h-6",
                                    children: (0, p.jsx)("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        d: "M8.25 4.5l7.5 7.5-7.5 7.5"
                                    })
                                })
                            }), (0, p.jsxs)("li", {
                                className: "flex items-center justify-start flex-col !m-0",
                                children: [(0, p.jsx)("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    strokeWidth: 1.5,
                                    stroke: "currentColor",
                                    className: "w-8 h-8 md:w-12 md:h-12",
                                    children: (0, p.jsx)("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        d: "M10.5 19.5h3m-6.75 2.25h10.5a2.25 2.25 0 002.25-2.25v-15a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 4.5v15a2.25 2.25 0 002.25 2.25z"
                                    })
                                }), (0, p.jsx)("span", {
                                    className: "leading-4 mt-2 text-sm",
                                    children: "Continue later at any device"
                                })]
                            })]
                        })]
                    }), (0, p.jsx)("div", {
                        className: "relative max-w-4xl w-full h-32 mt-8",
                        children: (0, p.jsx)(m.GoogleAd, {
                            className: "",
                            type: u.v$.preplay
                        })
                    })]
                })
            }
        },
        2631: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                GoogleAd: function() {
                    return p
                }
            });
            var n = r(8629),
                s = r(8660),
                a = r(8408),
                o = r(8475),
                l = r.n(o),
                i = r(2265),
                c = r(1872),
                u = r(7437),
                d = r(788);

            function f(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function m(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? f(Object(r), !0).forEach(function(t) {
                        (0, n.Z)(e, t, r[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : f(Object(r)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }
            var p = function(e) {
                var t = e.className,
                    r = e.type,
                    n = i.useState(null),
                    o = (0, s.Z)(n, 2),
                    f = o[0],
                    p = o[1];
                (0, i.useEffect)(function() {
                    p((0, c.Z)())
                }, []);
                var g = "",
                    h = "auto",
                    v = "",
                    x = {
                        display: "block"
                    },
                    j = "",
                    y = "",
                    b = "",
                    w = "false";
                switch (r) {
                    case a.v$.gameHeaderContent:
                        g = "7599613794", h = "horizontal";
                        break;
                    case a.v$.gameHeaderLeft:
                        g = "1114096494", h = "horizontal";
                        break;
                    case a.v$.gameAsideRightSmall:
                        g = "6174851486", h = "autorelaxed", b = "image_card_stacked", j = "1", y = "1";
                        break;
                    case a.v$.gameAsideRightBig:
                        g = "6286532120", h = "autorelaxed", b = "image_card_stacked,image_card_stacked", j = "3,2", y = "1,1";
                        break;
                    case a.v$.gameContentBottom:
                        g = "4973450453", v = "in-article", h = "fluid", x = m(m({}, x), {}, {
                            textAlign: "center"
                        });
                        break;
                    case a.v$.aboveFooter:
                        g = "8791870998", h = "autorelaxed", b = "image_card_stacked,image_card_stacked", j = "1,1", y = "6,2";
                        break;
                    case a.v$.betweenSeries:
                        g = "5152008885", h = "autorelaxed", b = "image_card_stacked,image_card_stacked", j = "1,1", y = "6,2";
                        break;
                    case a.v$.preplay:
                        g = "8892921653", h = void 0, x = m(m({}, x), {}, {
                            width: "100%",
                            height: "128px"
                        });
                        break;
                    case a.v$.playAside:
                        g = "8490377224", h = "auto", w = "true"
                }
                return f ? (0, u.jsxs)("div", {
                    className: "ads " + (t || ""),
                    children: [(0, u.jsx)("ins", {
                        className: "adsbygoogle",
                        style: x,
                        "data-ad-client": d.env.NEXT_PUBLIC_GOOGLE_ADS,
                        "data-ad-slot": g,
                        "data-ad-format": h,
                        "data-ad-layout": v,
                        "data-matched-content-ui-type": b,
                        "data-matched-content-rows-num": j,
                        "data-matched-content-columns-num": y,
                        "data-full-width-responsive": w
                    }), (0, u.jsx)(l(), {
                        id: "ads-".concat(f),
                        children: "\n                    (adsbygoogle = window.adsbygoogle || []).push({});\n                "
                    })]
                }, f) : null
            }
        },
        9094: function(e, t, r) {
            "use strict";
            r.d(t, {
                Z: function() {
                    return s
                }
            });
            var n = r(7437);

            function s(e) {
                var t = e.center,
                    r = e.shadow,
                    s = e.large,
                    a = e.value,
                    o = !0;
                return (void 0 !== a && (o = a), o) ? (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsxs)("div", {
                        role: "status",
                        className: "z-20 absolute ".concat(t ? "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" : ""),
                        children: [(0, n.jsxs)("svg", {
                            "aria-hidden": "true",
                            className: "".concat(s ? "w-8 h-8" : "w-4 h-4", " text-gray-200 animate-spin fill-blue-600"),
                            viewBox: "0 0 100 101",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: [(0, n.jsx)("path", {
                                d: "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",
                                fill: "currentColor"
                            }), (0, n.jsx)("path", {
                                d: "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",
                                fill: "currentFill"
                            })]
                        }), (0, n.jsx)("span", {
                            className: "sr-only",
                            children: "Loading..."
                        })]
                    }), r ? (0, n.jsx)("div", {
                        className: "absolute left-0 top-0 w-full h-full bg-white opacity-50 z-10 !pointer-events-auto"
                    }) : null]
                }) : null
            }
        },
        5304: function(e, t) {
            "use strict";
            var r = "https://server.bestdosgames.com",
                n = "https://backend.bestdosgames.com";
            t.Z = {
                api: {
                    saveFiles: r + "/saves",
                    user: r + "/api/info",
                    saves: r + "/api/saves",
                    deleteUser: r + "/api/delete",
                    checkLogin: r + "/api/check-login",
                    registerUser: r + "/api/register-user",
                    changePassword: r + "/api/change-password",
                    changeUser: r + "/api/modify",
                    loginUser: r + "/api/login",
                    logoutUser: r + "/api/logout",
                    checkToken: r + "/api/check-token",
                    reviews: r + "/api/reviews",
                    comments: r + "/api/comments",
                    gameRate: r + "/api/gameRate",
                    newsletter: r + "/api/newsletter",
                    contact: r + "/api/contact",
                    activity: r + "/api/activity",
                    restorePasswordRequest: r + "/api/restore-password-request",
                    restorePassword: r + "/api/restore-password",
                    gamePlay: r + "/api/play"
                },
                apiContent: {
                    pages: n + "/strankies",
                    games: n + "/hries",
                    header: n + "/hlavicka",
                    footer: n + "/paticka",
                    publishers: n + "/producents",
                    categories: n + "/kategorias",
                    releaseYears: n + "/rok-vydanias",
                    developers: n + "/vyrobcas",
                    archives: n + "/archivy"
                },
                contentUrl: n,
                contentCDNUrl: "https://cdn57650254.blazingcdn.net",
                serverUrl: r,
                clientUrl: "https://bestdosgames.com",
                published: !0
            }
        },
        2050: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                EUserStatus: function() {
                    return c
                },
                EUserType: function() {
                    return i
                },
                UserContext: function() {
                    return u
                }
            });
            var n, s, a = r(2265),
                o = r(1872),
                l = r(7437),
                i = ((n = {}).classic = "classic", n.facebook = "facebook", n.google = "google", n),
                c = ((s = {}).active = "active", s.inactive = "inactive", s),
                u = (0, a.createContext)({
                    user_id: null,
                    token: null,
                    user: null,
                    logoutUser: function() {
                        return null
                    },
                    loginUser: function() {
                        return null
                    },
                    setUser: function() {
                        return null
                    },
                    createNewUserId: function() {
                        return null
                    }
                });
            t.default = function(e) {
                var t = (0, a.useState)(null),
                    r = t[0],
                    n = t[1],
                    s = (0, a.useState)(null),
                    i = s[0],
                    c = s[1],
                    d = (0, a.useState)(null),
                    f = d[0],
                    m = d[1];
                return (0, a.useEffect)(function() {
                    var e = localStorage.getItem("user");
                    null != e && m(Object.assign({}, JSON.parse(e)))
                }, []), (0, a.useEffect)(function() {
                    var e = localStorage.getItem("token");
                    (null != e || "" !== e) && c(e)
                }, []), (0, l.jsx)(u.Provider, {
                    value: {
                        user_id: r,
                        token: i,
                        user: f,
                        logoutUser: function() {
                            c(null), m(null), n((0, o.Z)()), localStorage.removeItem("token"), localStorage.removeItem("user"), localStorage.removeItem("user_id")
                        },
                        loginUser: function(e, t) {
                            localStorage.setItem("token", e || ""), c(e);
                            var r = t ? t.guid : (0, o.Z)();
                            localStorage.setItem("user_id", r), n(r), localStorage.setItem("user", JSON.stringify(t)), m(Object.assign({}, t))
                        },
                        setUser: m,
                        createNewUserId: function() {
                            var e = localStorage.getItem("user_id");
                            null == e && (e = (0, o.Z)()), n(e), localStorage.setItem("user_id", e)
                        }
                    },
                    children: e.children
                })
            }
        },
        8408: function(e, t, r) {
            "use strict";
            r.d(t, {
                S9: function() {
                    return a
                },
                v$: function() {
                    return o
                }
            });
            var n, s, a = ((n = {}).recently_played = "recently_played", n.recently_added = "recently_added", n.most_popular = "most_popular", n.alphabetical = "alphabetical", n),
                o = ((s = {})[s.gameHeaderContent = 0] = "gameHeaderContent", s[s.gameHeaderLeft = 1] = "gameHeaderLeft", s[s.gameAsideRightSmall = 2] = "gameAsideRightSmall", s[s.gameAsideRightBig = 3] = "gameAsideRightBig", s[s.gameContentBottom = 4] = "gameContentBottom", s[s.aboveFooter = 5] = "aboveFooter", s[s.betweenSeries = 6] = "betweenSeries", s[s.preplay = 7] = "preplay", s[s.playAside = 8] = "playAside", s)
        },
        9330: function(e, t, r) {
            "use strict";
            r.d(t, {
                d: function() {
                    return o
                }
            });
            var n = r(9891),
                s = r(4001),
                a = r.n(s);

            function o(e) {
                return l.apply(this, arguments)
            }

            function l() {
                return (l = (0, n.Z)(a().mark(function e(t) {
                    return a().wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (500 !== t.status) {
                                    e.next = 5;
                                    break
                                }
                                return e.next = 3, t.json().then(function(e) {
                                    throw void 0 !== e.error.message && alert(e.error.message), Error(t.statusText)
                                });
                            case 3:
                                e.next = 12;
                                break;
                            case 5:
                                if (t.ok) {
                                    e.next = 11;
                                    break
                                }
                                if (!(t.status > 400 && t.status <= 500)) {
                                    e.next = 9;
                                    break
                                }
                                throw console.error("Request warning", t), Error(t.statusText);
                            case 9:
                                throw console.error("Request error", t), Error(t.statusText);
                            case 11:
                                return e.abrupt("return", t);
                            case 12:
                            case "end":
                                return e.stop()
                        }
                    }, e)
                }))).apply(this, arguments)
            }
        },
        8166: function(e, t, r) {
            "use strict";
            var n = r(2265),
                s = Symbol.for("react.element"),
                a = Symbol.for("react.fragment"),
                o = Object.prototype.hasOwnProperty,
                l = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
                i = {
                    key: !0,
                    ref: !0,
                    __self: !0,
                    __source: !0
                };

            function c(e, t, r) {
                var n, a = {},
                    c = null,
                    u = null;
                for (n in void 0 !== r && (c = "" + r), void 0 !== t.key && (c = "" + t.key), void 0 !== t.ref && (u = t.ref), t) o.call(t, n) && !i.hasOwnProperty(n) && (a[n] = t[n]);
                if (e && e.defaultProps)
                    for (n in t = e.defaultProps) void 0 === a[n] && (a[n] = t[n]);
                return {
                    $$typeof: s,
                    type: e,
                    key: c,
                    ref: u,
                    props: a,
                    _owner: l.current
                }
            }
            t.Fragment = a, t.jsx = c, t.jsxs = c
        },
        7437: function(e, t, r) {
            "use strict";
            e.exports = r(8166)
        },
        9891: function(e, t, r) {
            "use strict";

            function n(e, t, r, n, s, a, o) {
                try {
                    var l = e[a](o),
                        i = l.value
                } catch (e) {
                    r(e);
                    return
                }
                l.done ? t(i) : Promise.resolve(i).then(n, s)
            }

            function s(e) {
                return function() {
                    var t = this,
                        r = arguments;
                    return new Promise(function(s, a) {
                        var o = e.apply(t, r);

                        function l(e) {
                            n(o, s, a, l, i, "next", e)
                        }

                        function i(e) {
                            n(o, s, a, l, i, "throw", e)
                        }
                        l(void 0)
                    })
                }
            }
            r.d(t, {
                Z: function() {
                    return s
                }
            })
        }
    },
    function(e) {
        e.O(0, [1381, 2971, 4874, 1744], function() {
            return e(e.s = 5256)
        }), _N_E = e.O()
    }
]);