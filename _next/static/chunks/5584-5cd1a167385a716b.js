"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5584], {
        2631: function(e, t, a) {
            a.r(t), a.d(t, {
                GoogleAd: function() {
                    return m
                }
            });
            var r = a(8629),
                n = a(8660),
                s = a(8408),
                o = a(8475),
                i = a.n(o),
                c = a(2265),
                l = a(1872),
                u = a(7437),
                d = a(788);

            function p(e, t) {
                var a = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), a.push.apply(a, r)
                }
                return a
            }

            function g(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var a = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? p(Object(a), !0).forEach(function(t) {
                        (0, r.Z)(e, t, a[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : p(Object(a)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                    })
                }
                return e
            }
            var m = function(e) {
                var t = e.className,
                    a = e.type,
                    r = c.useState(null),
                    o = (0, n.Z)(r, 2),
                    p = o[0],
                    m = o[1];
                (0, c.useEffect)(function() {
                    m((0, l.Z)())
                }, []);
                var h = "",
                    f = "auto",
                    v = "",
                    b = {
                        display: "block"
                    },
                    x = "",
                    y = "",
                    w = "",
                    k = "false";
                switch (a) {
                    case s.v$.gameHeaderContent:
                        h = "7599613794", f = "horizontal";
                        break;
                    case s.v$.gameHeaderLeft:
                        h = "1114096494", f = "horizontal";
                        break;
                    case s.v$.gameAsideRightSmall:
                        h = "6174851486", f = "autorelaxed", w = "image_card_stacked", x = "1", y = "1";
                        break;
                    case s.v$.gameAsideRightBig:
                        h = "6286532120", f = "autorelaxed", w = "image_card_stacked,image_card_stacked", x = "3,2", y = "1,1";
                        break;
                    case s.v$.gameContentBottom:
                        h = "4973450453", v = "in-article", f = "fluid", b = g(g({}, b), {}, {
                            textAlign: "center"
                        });
                        break;
                    case s.v$.aboveFooter:
                        h = "8791870998", f = "autorelaxed", w = "image_card_stacked,image_card_stacked", x = "1,1", y = "6,2";
                        break;
                    case s.v$.betweenSeries:
                        h = "5152008885", f = "autorelaxed", w = "image_card_stacked,image_card_stacked", x = "1,1", y = "6,2";
                        break;
                    case s.v$.preplay:
                        h = "8892921653", f = void 0, b = g(g({}, b), {}, {
                            width: "100%",
                            height: "128px"
                        });
                        break;
                    case s.v$.playAside:
                        h = "8490377224", f = "auto", k = "true"
                }
                return p ? (0, u.jsxs)("div", {
                    className: "ads " + (t || ""),
                    children: [(0, u.jsx)("ins", {
                        className: "adsbygoogle",
                        style: b,
                        "data-ad-client": d.env.NEXT_PUBLIC_GOOGLE_ADS,
                        "data-ad-slot": h,
                        "data-ad-format": f,
                        "data-ad-layout": v,
                        "data-matched-content-ui-type": w,
                        "data-matched-content-rows-num": x,
                        "data-matched-content-columns-num": y,
                        "data-full-width-responsive": k
                    }), (0, u.jsx)(i(), {
                        id: "ads-".concat(p),
                        children: "\n                    (adsbygoogle = window.adsbygoogle || []).push({});\n                "
                    })]
                }, p) : null
            }
        },
        4644: function(e, t, a) {
            a.r(t);
            var r = a(5304),
                n = a(4033);
            a(2265);
            var s = a(7437);
            t.default = function(e) {
                var t = (0, n.useRouter)(),
                    a = function(e) {
                        var a = e.target.closest("a");
                        if (a && a.href.startsWith(window.location.origin)) {
                            e.preventDefault();
                            var r = a.href.replace(window.location.origin, "");
                            t.push(r)
                        }
                    };
                if (e.isTitle) {
                    var o = e.content;
                    return /^<p>((.|\n)*)<\/p>$/.test(o) && (o = o.substr(3, o.length - 7)), (0, s.jsx)("span", {
                        onClick: a,
                        className: e.className,
                        dangerouslySetInnerHTML: {
                            __html: o
                        }
                    })
                }
                var i = e.content;
                return i && (i = i.replace(/"\/uploads\//g, '"'.concat(r.Z.contentUrl, "/uploads/"))), (0, s.jsx)("div", {
                    onClick: a,
                    className: e.className,
                    dangerouslySetInnerHTML: {
                        __html: i
                    }
                })
            }
        },
        5634: function(e, t, a) {
            a.r(t), a(2265);
            var r = a(6691),
                n = a.n(r),
                s = a(2985),
                o = a(5304),
                i = a(4033),
                c = a(7437);
            t.default = function(e) {
                var t = e.image,
                    a = e.name,
                    r = e.url,
                    l = (0, i.useRouter)();
                return (0, c.jsxs)("div", {
                    className: "relative aspect-square sm:w-64 sm:h-64 cursor-pointer",
                    onClick: function() {
                        r && l.push(r)
                    },
                    children: [(0, c.jsx)(n(), {
                        src: (0, s.OO)(o.Z.contentUrl) + t.url,
                        alt: a,
                        title: a,
                        fill: !0,
                        sizes: "256px",
                        priority: !0,
                        className: "absolute inset-0 h-full w-full rounded-2xl bg-gray-50 object-cover"
                    }), (0, c.jsx)("div", {
                        className: "absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10"
                    })]
                })
            }
        },
        7374: function(e, t, a) {
            a.r(t), a(2265);
            var r = a(6691),
                n = a.n(r),
                s = a(5304),
                o = a(2985),
                i = a(4033),
                c = a(7437);
            t.default = function(e) {
                var t = e.game,
                    a = (0, i.useRouter)();
                return (0, c.jsxs)("div", {
                    className: "game-i",
                    onClick: function() {
                        return a.push("/games/" + t.slug)
                    },
                    children: [(0, c.jsx)(n(), {
                        src: (0, o.OO)(s.Z.contentUrl) + t.image_preview.url,
                        alt: t.name + " cover image",
                        title: t.name + " cover image",
                        fill: !0,
                        sizes: "256px",
                        className: "game-img"
                    }), (0, c.jsx)("div", {
                        className: "game-r"
                    })]
                })
            }
        },
        9094: function(e, t, a) {
            a.d(t, {
                Z: function() {
                    return n
                }
            });
            var r = a(7437);

            function n(e) {
                var t = e.center,
                    a = e.shadow,
                    n = e.large,
                    s = e.value,
                    o = !0;
                return (void 0 !== s && (o = s), o) ? (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsxs)("div", {
                        role: "status",
                        className: "z-20 absolute ".concat(t ? "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" : ""),
                        children: [(0, r.jsxs)("svg", {
                            "aria-hidden": "true",
                            className: "".concat(n ? "w-8 h-8" : "w-4 h-4", " text-gray-200 animate-spin fill-blue-600"),
                            viewBox: "0 0 100 101",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: [(0, r.jsx)("path", {
                                d: "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",
                                fill: "currentColor"
                            }), (0, r.jsx)("path", {
                                d: "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",
                                fill: "currentFill"
                            })]
                        }), (0, r.jsx)("span", {
                            className: "sr-only",
                            children: "Loading..."
                        })]
                    }), a ? (0, r.jsx)("div", {
                        className: "absolute left-0 top-0 w-full h-full bg-white opacity-50 z-10 !pointer-events-auto"
                    }) : null]
                }) : null
            }
        },
        6020: function(e, t, a) {
            a.r(t), a.d(t, {
                default: function() {
                    return p
                }
            });
            var r = a(9891),
                n = a(4001),
                s = a.n(n),
                o = a(2265),
                i = a(8210),
                c = a(9950),
                l = a(9330),
                u = a(9094),
                d = a(7437);

            function p(e) {
                var t, a = e.gameName,
                    n = e.gameRate,
                    p = e.showIcons,
                    g = (0, o.useState)(n),
                    m = g[0],
                    h = g[1],
                    f = (0, o.useState)(!1),
                    v = f[0],
                    b = f[1],
                    x = "-",
                    y = m.plusRating + m.minusRating;
                y && (x = Number(m.plusRating / y * 100).toFixed(0) + "%");
                var w = (t = (0, r.Z)(s().mark(function e(t) {
                    return s().wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                "true" == localStorage["storedVote-" + a] ? alert("You can vote just once!") : (localStorage["storedVote-" + a] = "true", b(!0), fetch("/api/rates", {
                                    method: "POST",
                                    headers: {
                                        "Content-Type": "application/json"
                                    },
                                    body: JSON.stringify({
                                        gameName: a,
                                        type: t
                                    })
                                }).then(l.d).then(function(e) {
                                    return e.json()
                                }).then(function(e) {
                                    h(e), b(!1)
                                }).catch(function(e) {
                                    console.log(e), alert("Cant set rate"), b(!1)
                                }));
                            case 1:
                            case "end":
                                return e.stop()
                        }
                    }, e)
                })), function(e) {
                    return t.apply(this, arguments)
                });
                return (0, d.jsxs)("div", {
                    className: "flex items-center justify-start gap-1",
                    children: [(0, d.jsx)(u.Z, {
                        center: !0,
                        shadow: !0,
                        value: v
                    }), (0, d.jsx)("div", {
                        className: "relative rounded-2xl bg-emerald-200 px-3 py-1.5 font-medium text-gray-600",
                        children: x
                    }), p ? (0, d.jsxs)(d.Fragment, {
                        children: [(0, d.jsx)("div", {
                            className: "like-unlike text-emerald-500 hover:text-emerald-800 transition",
                            "data-tooltip": "".concat(m.plusRating, " likes"),
                            onClick: function() {
                                return w("plus")
                            },
                            children: (0, d.jsx)(i.Z, {})
                        }), (0, d.jsx)("div", {
                            className: "like-unlike text-rose-400 hover:text-rose-800 transition",
                            "data-tooltip": "".concat(m.minusRating, " unlikes"),
                            onClick: function() {
                                return w("minus")
                            },
                            children: (0, d.jsx)(c.Z, {})
                        })]
                    }) : null]
                })
            }
        },
        5304: function(e, t) {
            var a = "https://server.bestdosgames.com",
                r = "https://backend.bestdosgames.com";
            t.Z = {
                api: {
                    saveFiles: a + "/saves",
                    user: a + "/api/info",
                    saves: a + "/api/saves",
                    deleteUser: a + "/api/delete",
                    checkLogin: a + "/api/check-login",
                    registerUser: a + "/api/register-user",
                    changePassword: a + "/api/change-password",
                    changeUser: a + "/api/modify",
                    loginUser: a + "/api/login",
                    logoutUser: a + "/api/logout",
                    checkToken: a + "/api/check-token",
                    reviews: a + "/api/reviews",
                    comments: a + "/api/comments",
                    gameRate: a + "/api/gameRate",
                    newsletter: a + "/api/newsletter",
                    contact: a + "/api/contact",
                    activity: a + "/api/activity",
                    restorePasswordRequest: a + "/api/restore-password-request",
                    restorePassword: a + "/api/restore-password",
                    gamePlay: a + "/api/play"
                },
                apiContent: {
                    pages: r + "/strankies",
                    games: r + "/hries",
                    header: r + "/hlavicka",
                    footer: r + "/paticka",
                    publishers: r + "/producents",
                    categories: r + "/kategorias",
                    releaseYears: r + "/rok-vydanias",
                    developers: r + "/vyrobcas",
                    archives: r + "/archivy"
                },
                contentUrl: r,
                contentCDNUrl: "https://cdn57650254.blazingcdn.net",
                serverUrl: a,
                clientUrl: "https://bestdosgames.com",
                published: !0
            }
        },
        8408: function(e, t, a) {
            a.d(t, {
                S9: function() {
                    return s
                },
                v$: function() {
                    return o
                }
            });
            var r, n, s = ((r = {}).recently_played = "recently_played", r.recently_added = "recently_added", r.most_popular = "most_popular", r.alphabetical = "alphabetical", r),
                o = ((n = {})[n.gameHeaderContent = 0] = "gameHeaderContent", n[n.gameHeaderLeft = 1] = "gameHeaderLeft", n[n.gameAsideRightSmall = 2] = "gameAsideRightSmall", n[n.gameAsideRightBig = 3] = "gameAsideRightBig", n[n.gameContentBottom = 4] = "gameContentBottom", n[n.aboveFooter = 5] = "aboveFooter", n[n.betweenSeries = 6] = "betweenSeries", n[n.preplay = 7] = "preplay", n[n.playAside = 8] = "playAside", n)
        },
        9330: function(e, t, a) {
            a.d(t, {
                d: function() {
                    return o
                }
            });
            var r = a(9891),
                n = a(4001),
                s = a.n(n);

            function o(e) {
                return i.apply(this, arguments)
            }

            function i() {
                return (i = (0, r.Z)(s().mark(function e(t) {
                    return s().wrap(function(e) {
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
        2985: function(e, t, a) {
            a.d(t, {
                OO: function() {
                    return r
                }
            });

            function r(e) {
                var t = e;
                return t.includes("localhost") && (t = t.replace("localhost", "host.docker.internal")), t
            }
        }
    }
]);