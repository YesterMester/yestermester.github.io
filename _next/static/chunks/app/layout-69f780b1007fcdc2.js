(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3185], {
        3178: function(e, t, n) {
            Promise.resolve().then(n.t.bind(n, 4868, 23)), Promise.resolve().then(n.bind(n, 724)), Promise.resolve().then(n.t.bind(n, 7739, 23)), Promise.resolve().then(n.t.bind(n, 9039, 23)), Promise.resolve().then(n.bind(n, 3929)), Promise.resolve().then(n.bind(n, 4526)), Promise.resolve().then(n.bind(n, 2177)), Promise.resolve().then(n.bind(n, 6159)), Promise.resolve().then(n.bind(n, 5297)), Promise.resolve().then(n.bind(n, 5539)), Promise.resolve().then(n.bind(n, 2050))
        },
        4725: function(e, t, n) {
            "use strict";
            var a = n(9182);

            function r(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, a)
                }
                return n
            }

            function s(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? r(Object(n), !0).forEach(function(t) {
                        a(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : r(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
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
            var o = n(1024);
            n(2265);
            var l = o._(n(2698));

            function i(e) {
                return {
                    default: (null == e ? void 0 : e.default) || e
                }
            }

            function c(e, t) {
                var n = l.default,
                    a = {
                        loading: function(e) {
                            return e.error, e.isLoading, e.pastDelay, null
                        }
                    };
                "function" == typeof e && (a.loader = e), Object.assign(a, t);
                var r = a.loader;
                return n(s(s({}, a), {}, {
                    loader: function() {
                        return null != r ? r().then(i) : Promise.resolve(i(function() {
                            return null
                        }))
                    }
                }))
            }("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        6102: function(e, t, n) {
            "use strict";

            function a(e) {
                return e.children
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "NoSSR", {
                enumerable: !0,
                get: function() {
                    return a
                }
            }), n(241)
        },
        2698: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "default", {
                enumerable: !0,
                get: function() {
                    return s
                }
            });
            var a = n(1024)._(n(2265)),
                r = n(6102),
                s = function(e) {
                    var t = Object.assign({
                        loader: null,
                        loading: null,
                        ssr: !0
                    }, e);

                    function n(e) {
                        var n = t.loading,
                            s = a.default.createElement(n, {
                                isLoading: !0,
                                pastDelay: !0,
                                error: null
                            }),
                            o = t.ssr ? a.default.Fragment : r.NoSSR,
                            l = t.lazy;
                        return a.default.createElement(a.default.Suspense, {
                            fallback: s
                        }, a.default.createElement(o, null, a.default.createElement(l, e)))
                    }
                    return t.lazy = a.default.lazy(t.loader), n.displayName = "LoadableComponent", n
                }
        },
        3929: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                Footer: function() {
                    return g
                }
            });
            var a = n(6691),
                r = n.n(a),
                s = n(1396),
                o = n.n(s),
                l = n(4644),
                i = n(4033),
                c = n(8408),
                d = n(2985),
                u = n(5304),
                m = n(2631),
                f = n(2265),
                h = n(7437),
                g = function(e) {
                    var t = e.footer,
                        n = (0, i.usePathname)();
                    return ((0, f.useEffect)(function() {
                        for (var e = document.getElementsByClassName("adsbygoogle").length, t = 0; t < e; t++) try {
                            (window.adsbygoogle = window.adsbygoogle || []).push({})
                        } catch (e) {}
                    }, []), n.endsWith("/play")) ? null : (0, h.jsxs)(h.Fragment, {
                        children: [(0, h.jsx)("div", {
                            className: "container mx-auto pb-4 px-4",
                            children: (0, h.jsx)(m.GoogleAd, {
                                type: c.v$.aboveFooter
                            })
                        }), (0, h.jsx)("footer", {
                            className: "bg-gray-900",
                            "aria-labelledby": "footer-heading",
                            children: (0, h.jsxs)("div", {
                                className: "mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32",
                                children: [(0, h.jsxs)("div", {
                                    className: "md:grid md:grid-cols-4 md:gap-8 lg:gap-12",
                                    children: [(0, h.jsxs)("div", {
                                        className: "space-y-8 md:grid-cols-2 md:col-start-1 md:col-span-2",
                                        children: [(0, h.jsx)("div", {
                                            className: "h-32 w-full  mx-auto relative",
                                            children: (0, h.jsx)(r(), {
                                                src: (0, d.OO)(u.Z.contentUrl) + t.logo.url,
                                                fill: !0,
                                                sizes: "128px",
                                                alt: "BestDosGames.com",
                                                className: "object-contain"
                                            })
                                        }), (0, h.jsx)("div", {
                                            className: "text-content text-sm leading-6 text-gray-300 text-center md:text-justify",
                                            children: (0, h.jsx)(l.default, {
                                                content: t.content
                                            })
                                        })]
                                    }), (0, h.jsxs)("div", {
                                        className: "mt-16 grid grid-cols-2 md:col-start-3 md:col-span-2 gap-8 md:mt-0",
                                        children: [(0, h.jsxs)("div", {
                                            className: "text-center md:text-left",
                                            children: [(0, h.jsx)("div", {
                                                className: "text-sm font-semibold leading-6 text-white",
                                                children: t.menu_title_1
                                            }), (0, h.jsx)("ul", {
                                                role: "list",
                                                className: "mt-6 space-y-4",
                                                children: t.menu_1.map(function(e) {
                                                    return (0, h.jsx)("li", {
                                                        role: "listitem",
                                                        children: (0, h.jsx)(o(), {
                                                            href: e.link,
                                                            className: "text-sm leading-6 text-gray-300 hover:text-white",
                                                            prefetch: !1,
                                                            children: e.name
                                                        })
                                                    }, e.id)
                                                })
                                            })]
                                        }), (0, h.jsxs)("div", {
                                            className: "text-center md:text-left",
                                            children: [(0, h.jsx)("div", {
                                                className: "text-sm font-semibold leading-6 text-white",
                                                children: t.menu_title_2
                                            }), (0, h.jsx)("ul", {
                                                role: "list",
                                                className: "mt-6 space-y-4",
                                                children: t.menu_2.map(function(e) {
                                                    return (0, h.jsx)("li", {
                                                        role: "listitem",
                                                        children: (0, h.jsx)(o(), {
                                                            href: e.link,
                                                            className: "text-sm leading-6 text-gray-300 hover:text-white",
                                                            prefetch: !1,
                                                            children: e.name
                                                        })
                                                    }, e.id)
                                                })
                                            }), (0, h.jsx)("div", {
                                                className: "pt-14",
                                                children: (0, h.jsx)("a", {
                                                    href: "https://www.facebook.com/bestdosgamescom",
                                                    target: "_blank",
                                                    className: "inline-block m-auto md:m-0",
                                                    title: "Keep up to date with BestDosGames.com",
                                                    children: (0, h.jsx)("svg", {
                                                        className: "w-8 h-8 text-gray-300 transition hover:text-white",
                                                        stroke: "currentColor",
                                                        fill: "currentColor",
                                                        strokeWidth: "0",
                                                        viewBox: "0 0 512 512",
                                                        height: "1em",
                                                        width: "1em",
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        children: (0, h.jsx)("path", {
                                                            d: "M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"
                                                        })
                                                    })
                                                })
                                            })]
                                        })]
                                    })]
                                }), (0, h.jsxs)("div", {
                                    className: "mt-4 border-t border-white/10 pt-8 pb-8",
                                    children: [(0, h.jsx)("p", {
                                        children: (0, h.jsx)("a", {
                                            href: "https://www.playwire.com/contact-direct-sales",
                                            rel: "noopener",
                                            children: (0, h.jsx)("img", {
                                                src: "https://www.playwire.com/hubfs/Powered-by-Playwire-Badges/Ads-Powered-by-playwire-2021-standalone-small-white-300px.png",
                                                alt: "Ads-Powered-by-playwire-2021-standalone-small-white-300px",
                                                width: "200",
                                                height: "56",
                                                loading: "lazy",
                                                className: "w-[200px] m-auto block h-auto max-w-full"
                                            })
                                        })
                                    }), (0, h.jsx)("p", {
                                        className: "text-center text-gray-400 text-sm my-2",
                                        children: (0, h.jsx)("a", {
                                            href: "https://www.playwire.com/contact-direct-sales",
                                            rel: "noopener",
                                            target: "_blank",
                                            children: "Advertise on this site."
                                        })
                                    })]
                                }), (0, h.jsx)("div", {
                                    className: "border-t border-white/10 pt-8",
                                    children: (0, h.jsx)("p", {
                                        className: "text-xs leading-5 text-gray-400 text-center",
                                        children: "\xa9 2023 ... for everyone who loves DOS games ... :)"
                                    })
                                })]
                            })
                        })]
                    })
                }
        },
        2631: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                GoogleAd: function() {
                    return h
                }
            });
            var a = n(8629),
                r = n(8660),
                s = n(8408),
                o = n(8475),
                l = n.n(o),
                i = n(2265),
                c = n(1872),
                d = n(7437),
                u = n(788);

            function m(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, a)
                }
                return n
            }

            function f(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? m(Object(n), !0).forEach(function(t) {
                        (0, a.Z)(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : m(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            var h = function(e) {
                var t = e.className,
                    n = e.type,
                    a = i.useState(null),
                    o = (0, r.Z)(a, 2),
                    m = o[0],
                    h = o[1];
                (0, i.useEffect)(function() {
                    h((0, c.Z)())
                }, []);
                var g = "",
                    p = "auto",
                    x = "",
                    b = {
                        display: "block"
                    },
                    v = "",
                    w = "",
                    j = "",
                    y = "false";
                switch (n) {
                    case s.v$.gameHeaderContent:
                        g = "7599613794", p = "horizontal";
                        break;
                    case s.v$.gameHeaderLeft:
                        g = "1114096494", p = "horizontal";
                        break;
                    case s.v$.gameAsideRightSmall:
                        g = "6174851486", p = "autorelaxed", j = "image_card_stacked", v = "1", w = "1";
                        break;
                    case s.v$.gameAsideRightBig:
                        g = "6286532120", p = "autorelaxed", j = "image_card_stacked,image_card_stacked", v = "3,2", w = "1,1";
                        break;
                    case s.v$.gameContentBottom:
                        g = "4973450453", x = "in-article", p = "fluid", b = f(f({}, b), {}, {
                            textAlign: "center"
                        });
                        break;
                    case s.v$.aboveFooter:
                        g = "8791870998", p = "autorelaxed", j = "image_card_stacked,image_card_stacked", v = "1,1", w = "6,2";
                        break;
                    case s.v$.betweenSeries:
                        g = "5152008885", p = "autorelaxed", j = "image_card_stacked,image_card_stacked", v = "1,1", w = "6,2";
                        break;
                    case s.v$.preplay:
                        g = "8892921653", p = void 0, b = f(f({}, b), {}, {
                            width: "100%",
                            height: "128px"
                        });
                        break;
                    case s.v$.playAside:
                        g = "8490377224", p = "auto", y = "true"
                }
                return m ? (0, d.jsxs)("div", {
                    className: "ads " + (t || ""),
                    children: [(0, d.jsx)("ins", {
                        className: "adsbygoogle",
                        style: b,
                        "data-ad-client": u.env.NEXT_PUBLIC_GOOGLE_ADS,
                        "data-ad-slot": g,
                        "data-ad-format": p,
                        "data-ad-layout": x,
                        "data-matched-content-ui-type": j,
                        "data-matched-content-rows-num": v,
                        "data-matched-content-columns-num": w,
                        "data-full-width-responsive": y
                    }), (0, d.jsx)(l(), {
                        id: "ads-".concat(m),
                        children: "\n                    (adsbygoogle = window.adsbygoogle || []).push({});\n                "
                    })]
                }, m) : null
            }
        },
        4644: function(e, t, n) {
            "use strict";
            n.r(t);
            var a = n(5304),
                r = n(4033);
            n(2265);
            var s = n(7437);
            t.default = function(e) {
                var t = (0, r.useRouter)(),
                    n = function(e) {
                        var n = e.target.closest("a");
                        if (n && n.href.startsWith(window.location.origin)) {
                            e.preventDefault();
                            var a = n.href.replace(window.location.origin, "");
                            t.push(a)
                        }
                    };
                if (e.isTitle) {
                    var o = e.content;
                    return /^<p>((.|\n)*)<\/p>$/.test(o) && (o = o.substr(3, o.length - 7)), (0, s.jsx)("span", {
                        onClick: n,
                        className: e.className,
                        dangerouslySetInnerHTML: {
                            __html: o
                        }
                    })
                }
                var l = e.content;
                return l && (l = l.replace(/"\/uploads\//g, '"'.concat(a.Z.contentUrl, "/uploads/"))), (0, s.jsx)("div", {
                    onClick: n,
                    className: e.className,
                    dangerouslySetInnerHTML: {
                        __html: l
                    }
                })
            }
        },
        4526: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                Header: function() {
                    return C
                }
            });
            var a = n(6691),
                r = n.n(a),
                s = n(2265);
            let o = s.forwardRef(function({
                    title: e,
                    titleId: t,
                    ...n
                }, a) {
                    return s.createElement("svg", Object.assign({
                        xmlns: "http://www.w3.org/2000/svg",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        strokeWidth: 1.5,
                        stroke: "currentColor",
                        "aria-hidden": "true",
                        "data-slot": "icon",
                        ref: a,
                        "aria-labelledby": t
                    }, n), e ? s.createElement("title", {
                        id: t
                    }, e) : null, s.createElement("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        d: "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    }))
                }),
                l = s.forwardRef(function({
                    title: e,
                    titleId: t,
                    ...n
                }, a) {
                    return s.createElement("svg", Object.assign({
                        xmlns: "http://www.w3.org/2000/svg",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        strokeWidth: 1.5,
                        stroke: "currentColor",
                        "aria-hidden": "true",
                        "data-slot": "icon",
                        ref: a,
                        "aria-labelledby": t
                    }, n), e ? s.createElement("title", {
                        id: t
                    }, e) : null, s.createElement("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        d: "M6 18 18 6M6 6l12 12"
                    }))
                });
            var i = n(1396),
                c = n.n(i),
                d = n(5297),
                u = n(4887),
                m = n(4725),
                f = n.n(m),
                h = n(5539),
                g = n(2050),
                p = n(2985),
                x = n(5304),
                b = n(7437),
                v = function(e) {
                    var t = e.setMobileMenuOpen,
                        n = (0, s.useContext)(g.UserContext),
                        a = n.user,
                        r = n.token,
                        o = n.logoutUser,
                        l = (0, s.useContext)(h.NotificationContext).addFloatingNotification,
                        i = (0, s.useState)(!1),
                        d = i[0],
                        u = i[1];
                    return ((0, s.useEffect)(function() {
                        null === r || d || fetch(x.Z.api.checkToken, {
                            method: "get",
                            credentials: "include",
                            mode: "cors",
                            headers: {
                                "Content-Type": "application/json",
                                Authorization: "Bearer " + r
                            }
                        }).then(function(e) {
                            (500 === e.status || 401 === e.status) && (o(), l({
                                type: "warning",
                                text: "Your login expired, login again.",
                                showBell: !0
                            })), u(!0)
                        }).catch(function() {
                            u(!0), l({
                                type: "warning",
                                text: "Error occured. Contact us please.",
                                showBell: !0
                            })
                        })
                    }, [r, l, o, d]), a) ? (0, b.jsxs)(b.Fragment, {
                        children: [(0, b.jsx)(c(), {
                            href: "/user",
                            className: "font-light leading-6 text-gray-900",
                            onClick: function() {
                                return t(!1)
                            },
                            prefetch: !1,
                            children: a.username
                        }), (0, b.jsx)("button", {
                            className: "sign",
                            onClick: function() {
                                return o()
                            },
                            children: (0, b.jsx)("svg", {
                                className: "w-8 h-8 p-1",
                                stroke: "currentColor",
                                fill: "none",
                                strokeWidth: "2",
                                viewBox: "0 0 24 24",
                                height: "1em",
                                width: "1em",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: (0, b.jsx)("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    d: "M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                                })
                            })
                        })]
                    }) : null
                },
                w = n(724);

            function j() {
                return (0, b.jsx)(b.Fragment, {
                    children: (0, b.jsx)("div", {
                        className: "fixed z-100 top-0 left-0 w-full h-full overflow-auto bg-gray-100 p-4 search-wrapper",
                        children: (0, b.jsxs)("div", {
                            className: "container mx-auto",
                            children: [(0, b.jsx)("div", {
                                className: "flex items-center justify-between",
                                children: (0, b.jsx)(w.default, {
                                    height: "2rem",
                                    width: "200px",
                                    containerClassName: "flex-1"
                                })
                            }), (0, b.jsx)(w.default, {
                                height: "3rem",
                                width: "100%",
                                containerClassName: "flex-1"
                            }), (0, b.jsxs)("div", {
                                className: "mt-4",
                                children: [(0, b.jsx)("h5", {
                                    className: "text-2xl sm:text-3xl mb-2",
                                    children: (0, b.jsx)(w.default, {
                                        height: "1rem",
                                        width: "100px",
                                        containerClassName: "flex-1"
                                    })
                                }), (0, b.jsxs)("ul", {
                                    className: "flex flex-wrap",
                                    children: [(0, b.jsx)("li", {
                                        className: "basis-1/2 p-2 md:basis-1/3 xl:basis-1/4",
                                        children: (0, b.jsx)("div", {
                                            className: "flex flex-col font-normal w-full",
                                            children: (0, b.jsx)(w.default, {
                                                count: 1,
                                                height: "25rem"
                                            })
                                        })
                                    }), (0, b.jsx)("li", {
                                        className: "basis-1/2 p-2 md:basis-1/3 xl:basis-1/4",
                                        children: (0, b.jsx)("div", {
                                            className: "flex flex-col font-normal w-full",
                                            children: (0, b.jsx)(w.default, {
                                                count: 1,
                                                height: "25rem"
                                            })
                                        })
                                    }), (0, b.jsx)("li", {
                                        className: "basis-1/2 p-2 md:basis-1/3 xl:basis-1/4",
                                        children: (0, b.jsx)("div", {
                                            className: "flex flex-col font-normal w-full",
                                            children: (0, b.jsx)(w.default, {
                                                count: 1,
                                                height: "25rem"
                                            })
                                        })
                                    }), (0, b.jsx)("li", {
                                        className: "basis-1/2 p-2 md:basis-1/3 xl:basis-1/4",
                                        children: (0, b.jsx)("div", {
                                            className: "flex flex-col font-normal w-full",
                                            children: (0, b.jsx)(w.default, {
                                                count: 1,
                                                height: "25rem"
                                            })
                                        })
                                    }), (0, b.jsx)("li", {
                                        className: "basis-1/2 p-2 md:basis-1/3 xl:basis-1/4",
                                        children: (0, b.jsx)("div", {
                                            className: "flex flex-col font-normal w-full",
                                            children: (0, b.jsx)(w.default, {
                                                count: 1,
                                                height: "25rem"
                                            })
                                        })
                                    }), (0, b.jsx)("li", {
                                        className: "basis-1/2 p-2 md:basis-1/3 xl:basis-1/4",
                                        children: (0, b.jsx)("div", {
                                            className: "flex flex-col font-normal w-full",
                                            children: (0, b.jsx)(w.default, {
                                                count: 1,
                                                height: "25rem"
                                            })
                                        })
                                    }), (0, b.jsx)("li", {
                                        className: "basis-1/2 p-2 md:basis-1/3 xl:basis-1/4",
                                        children: (0, b.jsx)("div", {
                                            className: "flex flex-col font-normal w-full",
                                            children: (0, b.jsx)(w.default, {
                                                count: 1,
                                                height: "25rem"
                                            })
                                        })
                                    }), (0, b.jsx)("li", {
                                        className: "basis-1/2 p-2 md:basis-1/3 xl:basis-1/4",
                                        children: (0, b.jsx)("div", {
                                            className: "flex flex-col font-normal w-full",
                                            children: (0, b.jsx)(w.default, {
                                                count: 1,
                                                height: "25rem"
                                            })
                                        })
                                    })]
                                })]
                            })]
                        })
                    })
                })
            }
            var y = f()(function() {
                    return n.e(1757).then(n.bind(n, 353))
                }, {
                    loadableGenerated: {
                        webpack: () => [353]
                    },
                    loadableGenerated: {
                        webpack: function() {
                            return [353]
                        }
                    }
                }),
                k = f()(function() {
                    return n.e(3103).then(n.bind(n, 3103))
                }, {
                    loadableGenerated: {
                        webpack: () => [3103]
                    },
                    loadableGenerated: {
                        webpack: function() {
                            return [3103]
                        }
                    }
                }),
                N = f()(function() {
                    return n.e(3839).then(n.bind(n, 3839))
                }, {
                    loadableGenerated: {
                        webpack: () => [3839]
                    },
                    loadableGenerated: {
                        webpack: function() {
                            return [3839]
                        }
                    }
                }),
                S = f()(function() {
                    return n.e(1213).then(n.bind(n, 1213))
                }, {
                    loadableGenerated: {
                        webpack: () => [1213]
                    },
                    loadableGenerated: {
                        webpack: function() {
                            return [1213]
                        }
                    }
                }),
                O = f()(function() {
                    return n.e(4178).then(n.bind(n, 4178))
                }, {
                    loadableGenerated: {
                        webpack: () => [4178]
                    },
                    loadableGenerated: {
                        webpack: function() {
                            return [4178]
                        }
                    }
                }),
                C = function(e) {
                    var t = e.header,
                        n = (0, s.useState)(!1),
                        a = n[0],
                        i = n[1],
                        m = (0, s.useState)(!1),
                        f = m[0],
                        w = m[1],
                        C = (0, s.useContext)(d.ModalContext),
                        P = C.showLogin,
                        _ = C.showRegister,
                        L = C.showReset,
                        E = C.setShowLoginModal,
                        R = C.setShowRegisterModal,
                        U = (0, s.useContext)(g.UserContext),
                        M = U.token,
                        B = U.user,
                        D = (0, s.useContext)(h.NotificationContext).floatingNotifications;
                    return (0, s.useEffect)(function() {
                        var e, t;
                        a ? null === (e = document.getElementById("main-body")) || void 0 === e || e.classList.add("menu-open") : null === (t = document.getElementById("main-body")) || void 0 === t || t.classList.remove("menu-open")
                    }, [a]), (0, s.useEffect)(function() {
                        var e, t;
                        f ? null === (e = document.getElementById("main-body")) || void 0 === e || e.classList.add("search-open") : null === (t = document.getElementById("main-body")) || void 0 === t || t.classList.remove("search-open")
                    }, [f]), (0, b.jsxs)("header", {
                        className: "header fixed w-full top-0 left-0 bg-white z-50 shadow transition-all",
                        children: [(0, b.jsxs)("div", {
                            className: "container mx-auto flex items-center justify-between p-2 sm:px-4",
                            "aria-label": "Global",
                            children: [(0, b.jsxs)("div", {
                                className: "flex flex-1",
                                children: [(0, b.jsx)("nav", {
                                    className: "header-nav top-16 md:top-0 left-0 w-full md:flex md:w-auto md:gap-x-12 transition-opacity p-5 sm:px-0 sm:py-1 bg-white",
                                    children: (0, b.jsxs)("ul", {
                                        className: "p-0 m-0 list-none text-center md:flex md:align-center md:justify-start",
                                        children: [t.menu_left.map(function(e) {
                                            var t, n, a, r;
                                            return (0, b.jsxs)("li", {
                                                className: "".concat(null !== (t = e.submenu) && void 0 !== t && t.length ? "dropdown-nav" : "", " relative block md:inline-block md:pr-5 md:last:pr-0"),
                                                children: [(0, b.jsxs)(c(), {
                                                    href: e.link,
                                                    className: "text-lg md:text-sm font-semibold leading-10 text-gray-900 hover:text-black transition sm:py-4 flex items-center justify-between gap-1",
                                                    onClick: function() {
                                                        return i(!1)
                                                    },
                                                    prefetch: !1,
                                                    children: [(0, b.jsx)("span", {
                                                        children: e.name
                                                    }), null !== (n = e.submenu) && void 0 !== n && n.length ? (0, b.jsx)("svg", {
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        fill: "none",
                                                        viewBox: "0 0 24 24",
                                                        strokeWidth: 1.5,
                                                        stroke: "currentColor",
                                                        className: "w-4 h-4 hidden md:inline-block transition",
                                                        children: (0, b.jsx)("path", {
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round",
                                                            d: "M19.5 8.25l-7.5 7.5-7.5-7.5"
                                                        })
                                                    }) : null]
                                                }), null !== (a = e.submenu) && void 0 !== a && a.length ? (0, b.jsx)("ul", {
                                                    className: "dropdown",
                                                    children: null === (r = e.submenu) || void 0 === r ? void 0 : r.map(function(e) {
                                                        return (0, b.jsx)("li", {
                                                            className: "text-left p-2",
                                                            children: (0, b.jsx)(c(), {
                                                                href: e.link,
                                                                className: "text-lg md:text-sm font-semibold leading-10 text-gray-900 hover:text-black transition sm:inline-block sm:py-",
                                                                onClick: function() {
                                                                    return i(!1)
                                                                },
                                                                prefetch: !1,
                                                                children: e.name
                                                            })
                                                        }, e.id)
                                                    })
                                                }) : null]
                                            }, e.id)
                                        }), (0, b.jsx)("li", {
                                            className: "relative block mt-8 sm:hidden",
                                            children: (0, b.jsx)("button", {
                                                className: "text-sm inline-block uppercase font-semibold leading-6 text-gray-900 m-0 text-center",
                                                onClick: function() {
                                                    R(!0), i(!1)
                                                },
                                                children: "Register"
                                            })
                                        })]
                                    })
                                }), (0, b.jsx)("div", {
                                    className: "flex md:hidden",
                                    children: (0, b.jsxs)("button", {
                                        type: "button",
                                        className: "-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700",
                                        onClick: function() {
                                            return i(!a)
                                        },
                                        children: [(0, b.jsxs)("span", {
                                            className: "sr-only",
                                            children: [a ? "Open" : "Close", " main menu"]
                                        }), a ? (0, b.jsx)(l, {
                                            className: "h-6 w-6"
                                        }) : (0, b.jsx)(o, {
                                            className: "h-6 w-6"
                                        })]
                                    })
                                })]
                            }), (0, b.jsxs)(c(), {
                                href: "/",
                                className: "flex flex-1 max-w-xxs",
                                prefetch: !1,
                                children: [(0, b.jsx)("span", {
                                    className: "sr-only",
                                    children: "BestDosGames.com"
                                }), (0, b.jsx)("div", {
                                    className: "h-12 w-full  mx-auto relative",
                                    children: (0, b.jsx)(r(), {
                                        src: (0, p.OO)(x.Z.contentUrl) + t.logo.url,
                                        fill: !0,
                                        priority: !0,
                                        sizes: "48px",
                                        alt: "BestDosGames.com",
                                        className: "object-contain"
                                    })
                                })]
                            }), (0, b.jsxs)("div", {
                                className: "flex flex-1 justify-end items-center gap-1",
                                children: [(0, b.jsx)("button", {
                                    onClick: function() {
                                        return w(!0)
                                    },
                                    title: "Search game",
                                    className: "mr-4",
                                    children: (0, b.jsx)("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        strokeWidth: 1.5,
                                        stroke: "currentColor",
                                        className: "w-6 h-6",
                                        children: (0, b.jsx)("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            d: "m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                                        })
                                    })
                                }), f ? (0, b.jsx)(s.Suspense, {
                                    fallback: (0, b.jsx)(j, {}),
                                    children: (0, b.jsx)(O, {
                                        onClose: function() {
                                            return w(!1)
                                        }
                                    })
                                }) : null, null === B || null === M ? (0, b.jsxs)(b.Fragment, {
                                    children: [(0, b.jsx)("button", {
                                        className: "text-sm font-semibold leading-6 text-gray-900 hidden sm:block",
                                        onClick: function() {
                                            R(!0), i(!1)
                                        },
                                        children: "Sign in"
                                    }), (0, b.jsx)("span", {
                                        className: "hidden sm:inline",
                                        children: "/"
                                    }), (0, b.jsx)("button", {
                                        className: "text-sm font-semibold leading-6 text-gray-900",
                                        onClick: function() {
                                            E(!0), i(!1)
                                        },
                                        children: "Log in"
                                    })]
                                }) : (0, b.jsx)(v, {
                                    setMobileMenuOpen: i
                                }), (0, b.jsx)("a", {
                                    href: "https://www.facebook.com/bestdosgamescom",
                                    target: "_blank",
                                    className: "inline-block ml-4 hidden xs:block",
                                    title: "Keep up to date with BestDosGames.com",
                                    children: (0, b.jsx)("svg", {
                                        className: "w-6 h-6 text-gray-900 transition hover:text-black",
                                        stroke: "currentColor",
                                        fill: "currentColor",
                                        strokeWidth: "0",
                                        viewBox: "0 0 512 512",
                                        height: "1em",
                                        width: "1em",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: (0, b.jsx)("path", {
                                            d: "M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"
                                        })
                                    })
                                })]
                            })]
                        }), P ? u.createPortal((0, b.jsx)(y, {}), document.body) : null, _ ? u.createPortal((0, b.jsx)(k, {}), document.body) : null, L ? u.createPortal((0, b.jsx)(N, {}), document.body) : null, D.length ? u.createPortal((0, b.jsx)(S, {}), document.body) : null]
                    })
                }
        },
        5304: function(e, t) {
            "use strict";
            var n = "https://server.bestdosgames.com",
                a = "https://backend.bestdosgames.com";
            t.Z = {
                api: {
                    saveFiles: n + "/saves",
                    user: n + "/api/info",
                    saves: n + "/api/saves",
                    deleteUser: n + "/api/delete",
                    checkLogin: n + "/api/check-login",
                    registerUser: n + "/api/register-user",
                    changePassword: n + "/api/change-password",
                    changeUser: n + "/api/modify",
                    loginUser: n + "/api/login",
                    logoutUser: n + "/api/logout",
                    checkToken: n + "/api/check-token",
                    reviews: n + "/api/reviews",
                    comments: n + "/api/comments",
                    gameRate: n + "/api/gameRate",
                    newsletter: n + "/api/newsletter",
                    contact: n + "/api/contact",
                    activity: n + "/api/activity",
                    restorePasswordRequest: n + "/api/restore-password-request",
                    restorePassword: n + "/api/restore-password",
                    gamePlay: n + "/api/play"
                },
                apiContent: {
                    pages: a + "/strankies",
                    games: a + "/hries",
                    header: a + "/hlavicka",
                    footer: a + "/paticka",
                    publishers: a + "/producents",
                    categories: a + "/kategorias",
                    releaseYears: a + "/rok-vydanias",
                    developers: a + "/vyrobcas",
                    archives: a + "/archivy"
                },
                contentUrl: a,
                contentCDNUrl: "https://cdn57650254.blazingcdn.net",
                serverUrl: n,
                clientUrl: "https://bestdosgames.com",
                published: !0
            }
        },
        2177: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                DataContext: function() {
                    return s
                }
            });
            var a = n(2265),
                r = n(7437),
                s = (0, a.createContext)({
                    gameRate: [],
                    setGameRates: function() {
                        return null
                    }
                });
            t.default = function(e) {
                var t = (0, a.useState)([]),
                    n = t[0],
                    o = t[1];
                return (0, r.jsx)(s.Provider, {
                    value: {
                        gameRate: n,
                        setGameRates: function(e, t) {
                            var a = n;
                            (a = a.filter(function(t) {
                                return t.gameId !== e
                            })).push({
                                gameId: e,
                                minus: t.minusRating,
                                plus: t.plusRating
                            }), o(Object.assign([], a))
                        }
                    },
                    children: e.children
                })
            }
        },
        6159: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                LoadingContext: function() {
                    return s
                }
            });
            var a = n(2265),
                r = n(7437),
                s = (0, a.createContext)({
                    loadingSaves: !1,
                    loadingSaveAdd: !1,
                    loadingLogin: !1,
                    loadingUsernameLogin: !1,
                    loadingGameRate: !1,
                    loadingUser: !1,
                    setLoadingSaves: function() {
                        return null
                    },
                    setLoadingSaveAdd: function() {
                        return null
                    },
                    setLoadingLogin: function() {
                        return null
                    },
                    setLoadingUsernameLogin: function() {
                        return null
                    },
                    setLoadingGameRate: function() {
                        return null
                    },
                    setLoadingUser: function() {
                        return null
                    }
                });
            t.default = function(e) {
                var t = (0, a.useState)(!1),
                    n = t[0],
                    o = t[1],
                    l = (0, a.useState)(!1),
                    i = l[0],
                    c = l[1],
                    d = (0, a.useState)(!1),
                    u = d[0],
                    m = d[1],
                    f = (0, a.useState)(!1),
                    h = f[0],
                    g = f[1],
                    p = (0, a.useState)(!1),
                    x = p[0],
                    b = p[1],
                    v = (0, a.useState)(!1),
                    w = v[0],
                    j = v[1];
                return (0, r.jsx)(s.Provider, {
                    value: {
                        loadingSaves: n,
                        loadingSaveAdd: i,
                        loadingLogin: u,
                        loadingUsernameLogin: h,
                        loadingGameRate: x,
                        loadingUser: w,
                        setLoadingSaves: o,
                        setLoadingSaveAdd: c,
                        setLoadingLogin: m,
                        setLoadingUsernameLogin: g,
                        setLoadingGameRate: b,
                        setLoadingUser: j
                    },
                    children: e.children
                })
            }
        },
        5297: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ModalContext: function() {
                    return s
                }
            });
            var a = n(2265),
                r = n(7437),
                s = (0, a.createContext)({
                    showLogin: !1,
                    showReset: !1,
                    showRegister: !1,
                    showConfirmModal: !1,
                    setShowLoginModal: function() {
                        return null
                    },
                    setShowResetModal: function() {
                        return null
                    },
                    setShowRegisterModal: function() {
                        return null
                    },
                    setShowConfirmModal: function() {
                        return null
                    }
                });
            t.default = function(e) {
                var t = (0, a.useState)(!1),
                    n = t[0],
                    o = t[1],
                    l = (0, a.useState)(!1),
                    i = l[0],
                    c = l[1],
                    d = (0, a.useState)(!1),
                    u = d[0],
                    m = d[1],
                    f = (0, a.useState)(!1),
                    h = f[0],
                    g = f[1];
                return (0, r.jsx)(s.Provider, {
                    value: {
                        showLogin: n,
                        showReset: i,
                        showRegister: u,
                        showConfirmModal: h,
                        setShowLoginModal: function(e) {
                            o(e), c(!1), m(!1), g(!1), console.trace()
                        },
                        setShowResetModal: function(e) {
                            o(!1), c(e), m(!1), g(!1), console.trace()
                        },
                        setShowRegisterModal: function(e) {
                            o(!1), c(!1), m(e), g(!1), console.trace()
                        },
                        setShowConfirmModal: function(e) {
                            o(!1), c(!1), m(!1), g(e), console.trace()
                        }
                    },
                    children: e.children
                })
            }
        },
        5539: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                NotificationContext: function() {
                    return c
                }
            });
            var a = n(941),
                r = n(8629),
                s = n(2265),
                o = n(7437);

            function l(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, a)
                }
                return n
            }

            function i(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? l(Object(n), !0).forEach(function(t) {
                        (0, r.Z)(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : l(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            var c = (0, s.createContext)({
                floatingNotificationId: 1,
                floatingNotifications: [],
                addFloatingNotification: function() {
                    return null
                },
                updateNotifications: function() {
                    return null
                },
                deleteFloatingNotification: function() {
                    return null
                }
            });
            t.default = function(e) {
                var t = (0, s.useState)(1),
                    n = t[0],
                    r = t[1],
                    l = (0, s.useState)([]),
                    d = l[0],
                    u = l[1];
                return (0, o.jsx)(c.Provider, {
                    value: {
                        floatingNotificationId: n,
                        floatingNotifications: d,
                        addFloatingNotification: function(e) {
                            var t = i(i({}, e), {}, {
                                id: n + 1,
                                validFrom: new Date,
                                goingToShow: !0,
                                goingToHide: !1
                            });
                            u([].concat((0, a.Z)(d), [t])), r(n + 1)
                        },
                        updateNotifications: function(e) {
                            var t = [];
                            e.forEach(function(e) {
                                var n = Number(new Date().getTime() - new Date(e.validFrom).getTime());
                                n < 4500 ? e.goingToShow = !0 : n > 4500 && (e.goingToHide = !0), n < 5200 && t.push(e)
                            }), u(t)
                        },
                        deleteFloatingNotification: function(e) {
                            var t = d.findIndex(function(t) {
                                return t.id === e
                            });
                            void 0 !== t && u([].concat((0, a.Z)(d.slice(0, t)), (0, a.Z)(d.slice(t + 1))))
                        }
                    },
                    children: e.children
                })
            }
        },
        2050: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                EUserStatus: function() {
                    return c
                },
                EUserType: function() {
                    return i
                },
                UserContext: function() {
                    return d
                }
            });
            var a, r, s = n(2265),
                o = n(1872),
                l = n(7437),
                i = ((a = {}).classic = "classic", a.facebook = "facebook", a.google = "google", a),
                c = ((r = {}).active = "active", r.inactive = "inactive", r),
                d = (0, s.createContext)({
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
                var t = (0, s.useState)(null),
                    n = t[0],
                    a = t[1],
                    r = (0, s.useState)(null),
                    i = r[0],
                    c = r[1],
                    u = (0, s.useState)(null),
                    m = u[0],
                    f = u[1];
                return (0, s.useEffect)(function() {
                    var e = localStorage.getItem("user");
                    null != e && f(Object.assign({}, JSON.parse(e)))
                }, []), (0, s.useEffect)(function() {
                    var e = localStorage.getItem("token");
                    (null != e || "" !== e) && c(e)
                }, []), (0, l.jsx)(d.Provider, {
                    value: {
                        user_id: n,
                        token: i,
                        user: m,
                        logoutUser: function() {
                            c(null), f(null), a((0, o.Z)()), localStorage.removeItem("token"), localStorage.removeItem("user"), localStorage.removeItem("user_id")
                        },
                        loginUser: function(e, t) {
                            localStorage.setItem("token", e || ""), c(e);
                            var n = t ? t.guid : (0, o.Z)();
                            localStorage.setItem("user_id", n), a(n), localStorage.setItem("user", JSON.stringify(t)), f(Object.assign({}, t))
                        },
                        setUser: f,
                        createNewUserId: function() {
                            var e = localStorage.getItem("user_id");
                            null == e && (e = (0, o.Z)()), a(e), localStorage.setItem("user_id", e)
                        }
                    },
                    children: e.children
                })
            }
        },
        8408: function(e, t, n) {
            "use strict";
            n.d(t, {
                S9: function() {
                    return s
                },
                v$: function() {
                    return o
                }
            });
            var a, r, s = ((a = {}).recently_played = "recently_played", a.recently_added = "recently_added", a.most_popular = "most_popular", a.alphabetical = "alphabetical", a),
                o = ((r = {})[r.gameHeaderContent = 0] = "gameHeaderContent", r[r.gameHeaderLeft = 1] = "gameHeaderLeft", r[r.gameAsideRightSmall = 2] = "gameAsideRightSmall", r[r.gameAsideRightBig = 3] = "gameAsideRightBig", r[r.gameContentBottom = 4] = "gameContentBottom", r[r.aboveFooter = 5] = "aboveFooter", r[r.betweenSeries = 6] = "betweenSeries", r[r.preplay = 7] = "preplay", r[r.playAside = 8] = "playAside", r)
        },
        2985: function(e, t, n) {
            "use strict";

            function a(e) {
                var t = e;
                return t.includes("localhost") && (t = t.replace("localhost", "host.docker.internal")), t
            }
            n.d(t, {
                OO: function() {
                    return a
                }
            })
        },
        7739: function() {},
        9039: function() {},
        1396: function(e, t, n) {
            e.exports = n(2127)
        },
        941: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return s
                }
            });
            var a = n(6015),
                r = n(909);

            function s(e) {
                return function(e) {
                    if (Array.isArray(e)) return (0, a.Z)(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || (0, r.Z)(e) || function() {
                    throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
        },
        724: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                SkeletonTheme: function() {
                    return o
                },
                default: function() {
                    return s
                }
            });
            var a = n(2265);
            let r = a.createContext({});

            function s({
                count: e = 1,
                wrapper: t,
                className: n,
                containerClassName: s,
                containerTestId: o,
                circle: l = !1,
                style: i,
                ...c
            }) {
                var d, u, m;
                let f = a.useContext(r),
                    h = { ...c
                    };
                for (let [e, t] of Object.entries(c)) void 0 === t && delete h[e];
                let g = { ...f,
                        ...h,
                        circle: l
                    },
                    p = { ...i,
                        ... function({
                            baseColor: e,
                            highlightColor: t,
                            width: n,
                            height: a,
                            borderRadius: r,
                            circle: s,
                            direction: o,
                            duration: l,
                            enableAnimation: i = !0
                        }) {
                            let c = {};
                            return "rtl" === o && (c["--animation-direction"] = "reverse"), "number" == typeof l && (c["--animation-duration"] = `${l}s`), i || (c["--pseudo-element-display"] = "none"), ("string" == typeof n || "number" == typeof n) && (c.width = n), ("string" == typeof a || "number" == typeof a) && (c.height = a), ("string" == typeof r || "number" == typeof r) && (c.borderRadius = r), s && (c.borderRadius = "50%"), void 0 !== e && (c["--base-color"] = e), void 0 !== t && (c["--highlight-color"] = t), c
                        }(g)
                    },
                    x = "react-loading-skeleton";
                n && (x += ` ${n}`);
                let b = null !== (d = g.inline) && void 0 !== d && d,
                    v = [],
                    w = Math.ceil(e);
                for (let t = 0; t < w; t++) {
                    let n = p;
                    if (w > e && t === w - 1) {
                        let t = null !== (u = n.width) && void 0 !== u ? u : "100%",
                            a = e % 1,
                            r = "number" == typeof t ? t * a : `calc(${t} * ${a})`;
                        n = { ...n,
                            width: r
                        }
                    }
                    let r = a.createElement("span", {
                        className: x,
                        style: n,
                        key: t
                    }, "‌");
                    b ? v.push(r) : v.push(a.createElement(a.Fragment, {
                        key: t
                    }, r, a.createElement("br", null)))
                }
                return a.createElement("span", {
                    className: s,
                    "data-testid": o,
                    "aria-live": "polite",
                    "aria-busy": null === (m = g.enableAnimation) || void 0 === m || m
                }, t ? v.map((e, n) => a.createElement(t, {
                    key: n
                }, e)) : v)
            }

            function o({
                children: e,
                ...t
            }) {
                return a.createElement(r.Provider, {
                    value: t
                }, e)
            }
        }
    },
    function(e) {
        e.O(0, [2127, 6352, 1381, 2971, 4874, 1744], function() {
            return e(e.s = 3178)
        }), _N_E = e.O()
    }
]);