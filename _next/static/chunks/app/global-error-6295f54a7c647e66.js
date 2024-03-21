(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6470], {
        3902: function(e, t, r) {
            Promise.resolve().then(r.bind(r, 1223))
        },
        1223: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return a
                }
            });
            var n = r(1396),
                s = r.n(n),
                o = r(2265),
                i = r(7437);

            function a(e) {
                var t = e.error,
                    r = e.reset;
                return (0, o.useEffect)(function() {
                    console.error(t)
                }, [t]), (0, i.jsx)("div", {
                    className: "container flex items-center notfound px-6 py-12 mx-auto",
                    children: (0, i.jsxs)("div", {
                        children: [(0, i.jsx)("p", {
                            className: "text-sm font-medium text-blue-500",
                            children: "Whoops"
                        }), (0, i.jsx)("h1", {
                            className: "mt-3 text-2xl font-semibold text-gray-800 md:text-3xl",
                            children: "Something really terrible just happened..."
                        }), (0, i.jsx)("p", {
                            className: "mt-4 text-gray-500",
                            children: "Please contact us so we can fix this issue."
                        }), (0, i.jsxs)("div", {
                            className: "flex items-center mt-6 gap-x-3",
                            children: [(0, i.jsxs)(s(), {
                                prefetch: !1,
                                href: "/",
                                className: "flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg gap-x-2 sm:w-auto hover:bg-gray-100 ",
                                children: [(0, i.jsx)("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    strokeWidth: "1.5",
                                    stroke: "currentColor",
                                    className: "w-5 h-5 rtl:rotate-180",
                                    children: (0, i.jsx)("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        d: "M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                                    })
                                }), (0, i.jsx)("span", {
                                    children: "Go back"
                                })]
                            }), (0, i.jsx)("button", {
                                className: "w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-lg shrink-0 sm:w-auto hover:bg-blue-600 ",
                                onClick: function() {
                                    return r()
                                },
                                children: "Try it again"
                            })]
                        })]
                    })
                })
            }
        },
        8166: function(e, t, r) {
            "use strict";
            var n = r(2265),
                s = Symbol.for("react.element"),
                o = Symbol.for("react.fragment"),
                i = Object.prototype.hasOwnProperty,
                a = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
                c = {
                    key: !0,
                    ref: !0,
                    __self: !0,
                    __source: !0
                };

            function l(e, t, r) {
                var n, o = {},
                    l = null,
                    u = null;
                for (n in void 0 !== r && (l = "" + r), void 0 !== t.key && (l = "" + t.key), void 0 !== t.ref && (u = t.ref), t) i.call(t, n) && !c.hasOwnProperty(n) && (o[n] = t[n]);
                if (e && e.defaultProps)
                    for (n in t = e.defaultProps) void 0 === o[n] && (o[n] = t[n]);
                return {
                    $$typeof: s,
                    type: e,
                    key: l,
                    ref: u,
                    props: o,
                    _owner: a.current
                }
            }
            t.Fragment = o, t.jsx = l, t.jsxs = l
        },
        7437: function(e, t, r) {
            "use strict";
            e.exports = r(8166)
        },
        1396: function(e, t, r) {
            e.exports = r(2127)
        }
    },
    function(e) {
        e.O(0, [2127, 2971, 4874, 1744], function() {
            return e(e.s = 3902)
        }), _N_E = e.O()
    }
]);