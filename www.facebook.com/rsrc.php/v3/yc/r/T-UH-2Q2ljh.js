if (self.CavalryLogger) {
    CavalryLogger.start_js(["fRxS2"]);
}

self.__DEV__ = self.__DEV__ || 0, self.emptyFunction = function() {};
"use strict";



"use strict";
(function() {
    if (!Array.prototype.flat) {
        var a = function b(a) {
            return a < 1 ? Array.prototype.slice.call(this) : Array.prototype.reduce.call(this, function(c, d) {
                Array.isArray(d) ? c.push.apply(c, b.call(d, a - 1)) : c.push(d);
                return c
            }, [])
        };
        Array.prototype.flat = function() {
            return a.call(this, isNaN(arguments[0]) ? 1 : Number(arguments[0]))
        }
    }
    if (!Array.prototype.flatMap) {
        var b = function(a, b) {
                var d = [];
                for (var e = 0; e < a.length; e++) {
                    var f = b.call(a, a[e], e, a);
                    if (Array.isArray(f)) c.apply(d, f);
                    else if (f != null) throw new TypeError('flatMapArray: Callback must return an array or null, received "' + f.toString() + '" instead')
                }
                return d
            },
            c = Array.prototype.push;
        Array.prototype.flatMap = function(a) {
            var c = arguments[1] || this;
            return b(c, a)
        }
    }
})();


(function() {
    "use strict";
    var a = Array.prototype.indexOf;
    Array.prototype.includes || (Array.prototype.includes = function(d) {
        "use strict";
        if (d !== void 0 && Array.isArray(this) && !Number.isNaN(d)) return a.apply(this, arguments) !== -1;
        var e = Object(this),
            f = e.length ? b(e.length) : 0;
        if (f === 0) return !1;
        var g = arguments.length > 1 ? c(arguments[1]) : 0,
            h = g < 0 ? Math.max(f + g, 0) : g,
            i = Number.isNaN(d);
        while (h < f) {
            var j = e[h];
            if (j === d || i && Number.isNaN(j)) return !0;
            h++
        }
        return !1
    });

    function b(a) {
        return Math.min(Math.max(c(a), 0), Number.MAX_SAFE_INTEGER)
    }

    function c(a) {
        a = Number(a);
        return Number.isFinite(a) && a !== 0 ? d(a) * Math.floor(Math.abs(a)) : a
    }

    function d(a) {
        return a >= 0 ? 1 : -1
    }
})();
var __p;
(function() {
    var a = {},
        b = function(a, b) {
            if (!a && !b) return null;
            var c = {};
            typeof a !== "undefined" && (c.type = a);
            typeof b !== "undefined" && (c.signature = b);
            return c
        },
        c = function(a, c) {
            return b(a && /^[A-Z]/.test(a) ? a : void 0, c && (c.params && c.params.length || c.returns) ? "function(" + (c.params ? c.params.map(function(a) {
                return /\?/.test(a) ? "?" + a.replace("?", "") : a
            }).join(",") : "") + ")" + (c.returns ? ":" + c.returns : "") : void 0)
        },
        d = function(a, b, c) {
            return a
        },
        e = function(a, b, d) {
            "sourcemeta" in __transform_includes && (a.__SMmeta = b);
            if ("typechecks" in __transform_includes) {
                b = c(b ? b.name : void 0, d);
                b && __w(a, b)
            }
            return a
        },
        f = function(a, b, c) {
            return c.apply(a, b)
        },
        g = function(a, b, c, d) {
            d && d.params && __t.apply(a, d.params);
            c = c.apply(a, b);
            d && d.returns && __t([c, d.returns]);
            return c
        };
    g = function(b, c, d, e, f) {
        if (f) {
            f.callId || (f.callId = f.module + ":" + (f.line || 0) + ":" + (f.column || 0));
            e = f.callId;
            a[e] = (a[e] || 0) + 1
        }
        return d.apply(b, c)
    };
    typeof __transform_includes === "undefined" ? (__annotator = d, __bodyWrapper = f) : (__annotator = e, "codeusage" in __transform_includes ? (__annotator = d, __bodyWrapper = g, __bodyWrapper.getCodeUsage = function() {
        return a
    }, __bodyWrapper.clearCodeUsage = function() {
        a = {}
    }) : "typechecks" in __transform_includes ? __bodyWrapper = f : __bodyWrapper = f)
})();
__t = function(a) {
    return a[0]
}, __w = function(a) {
    return a
};



(function(a, b) {
    var c = "keys",
        d = "values",
        e = "entries",
        f = function() {
            var a = h(Array),
                b;
            a || (b = function() {
                "use strict";

                function a(a, b) {
                    this.$1 = a, this.$2 = b, this.$3 = 0
                }
                var b = a.prototype;
                b.next = function() {
                    if (this.$1 == null) return {
                        value: void 0,
                        done: !0
                    };
                    var a = this.$1,
                        b = this.$1.length,
                        f = this.$3,
                        g = this.$2;
                    if (f >= b) {
                        this.$1 = void 0;
                        return {
                            value: void 0,
                            done: !0
                        }
                    }
                    this.$3 = f + 1;
                    if (g === c) return {
                        value: f,
                        done: !1
                    };
                    else if (g === d) return {
                        value: a[f],
                        done: !1
                    };
                    else if (g === e) return {
                        value: [f, a[f]],
                        done: !1
                    }
                };
                b[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"] = function() {
                    return this
                };
                return a
            }());
            return {
                keys: a ? function(a) {
                    return a.keys()
                } : function(a) {
                    return new b(a, c)
                },
                values: a ? function(a) {
                    return a.values()
                } : function(a) {
                    return new b(a, d)
                },
                entries: a ? function(a) {
                    return a.entries()
                } : function(a) {
                    return new b(a, e)
                }
            }
        }(),
        g = function() {
            var a = h(String),
                b;
            a || (b = function() {
                "use strict";

                function a(a) {
                    this.$1 = a, this.$2 = 0
                }
                var b = a.prototype;
                b.next = function() {
                    if (this.$1 == null) return {
                        value: void 0,
                        done: !0
                    };
                    var a = this.$2,
                        b = this.$1,
                        c = b.length;
                    if (a >= c) {
                        this.$1 = void 0;
                        return {
                            value: void 0,
                            done: !0
                        }
                    }
                    var d = b.charCodeAt(a);
                    if (d < 55296 || d > 56319 || a + 1 === c) d = b[a];
                    else {
                        c = b.charCodeAt(a + 1);
                        c < 56320 || c > 57343 ? d = b[a] : d = b[a] + b[a + 1]
                    }
                    this.$2 = a + d.length;
                    return {
                        value: d,
                        done: !1
                    }
                };
                b[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"] = function() {
                    return this
                };
                return a
            }());
            return {
                keys: function() {
                    throw TypeError("Strings default iterator doesn't implement keys.")
                },
                values: a ? function(a) {
                    return a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]()
                } : function(a) {
                    return new b(a)
                },
                entries: function() {
                    throw TypeError("Strings default iterator doesn't implement entries.")
                }
            }
        }();

    function h(a) {
        return typeof a.prototype[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"] === "function" && typeof a.prototype.values === "function" && typeof a.prototype.keys === "function" && typeof a.prototype.entries === "function"
    }
    var i = function() {
            "use strict";

            function a(a, b) {
                this.$1 = a, this.$2 = b, this.$3 = Object.keys(a), this.$4 = 0
            }
            var b = a.prototype;
            b.next = function() {
                var a = this.$3.length,
                    b = this.$4,
                    f = this.$2,
                    g = this.$3[b];
                if (b >= a) {
                    this.$1 = void 0;
                    return {
                        value: void 0,
                        done: !0
                    }
                }
                this.$4 = b + 1;
                if (f === c) return {
                    value: g,
                    done: !1
                };
                else if (f === d) return {
                    value: this.$1[g],
                    done: !1
                };
                else if (f === e) return {
                    value: [g, this.$1[g]],
                    done: !1
                }
            };
            b[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"] = function() {
                return this
            };
            return a
        }(),
        j = {
            keys: function(a) {
                return new i(a, c)
            },
            values: function(a) {
                return new i(a, d)
            },
            entries: function(a) {
                return new i(a, e)
            }
        };

    function k(a, b) {
        if (typeof a === "string") return g[b || d](a);
        else if (Array.isArray(a)) return f[b || d](a);
        else if (a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]) return a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();
        else return j[b || e](a)
    }
    Object.assign(k, {
        KIND_KEYS: c,
        KIND_VALUES: d,
        KIND_ENTRIES: e,
        keys: function(a) {
            return k(a, c)
        },
        values: function(a) {
            return k(a, d)
        },
        entries: function(a) {
            return k(a, e)
        },
        generic: j.entries
    });
    a.FB_enumerate = k
})(typeof global === "undefined" ? this : global);




"use strict";
(function() {
    if (typeof Element === "undefined" || Element.prototype.scroll) return;

    function a(a, b) {
        b === void 0 && (b = !1);
        if (a.length === 0) return;
        var c = a[0],
            d = a[1];
        c = Number(c) || 0;
        d = Number(d) || 0;
        if (a.length === 1) {
            a = a[0];
            if (a == null) return;
            c = a.left;
            d = a.top;
            c !== void 0 && (c = Number(c) || 0);
            d !== void 0 && (d = Number(d) || 0)
        }
        c !== void 0 && (this.scrollLeft = (b ? this.scrollLeft : 0) + c);
        d !== void 0 && (this.scrollTop = (b ? this.scrollTop : 0) + d)
    }
    Element.prototype.scroll = Element.prototype.scrollTo = function() {
        a.call(this, arguments)
    };
    Element.prototype.scrollBy = function() {
        a.call(this, arguments, !0)
    }
})();


typeof window !== "undefined" && window.JSON && JSON.stringify(["\u2028\u2029"]) === '["\u2028\u2029"]' && (JSON.stringify = function(a) {
    var b = /\u2028/g,
        c = /\u2029/g;
    return function(d, e, f) {
        d = a.call(this, d, e, f);
        d && (-1 < d.indexOf("\u2028") && (d = d.replace(b, "\\u2028")), -1 < d.indexOf("\u2029") && (d = d.replace(c, "\\u2029")));
        return d
    }
}(JSON.stringify));


(function() {
    var a = Object.prototype.hasOwnProperty;
    Object.entries = function(b) {
        if (b == null) throw new TypeError("Object.entries called on non-object");
        var c = [];
        for (var d in b) a.call(b, d) && c.push([d, b[d]]);
        return c
    };
    typeof Object.fromEntries !== "function" && (Object.fromEntries = function(a) {
        var b = {};
        for (var a = a, c = Array.isArray(a), d = 0, a = c ? a : a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
            var e;
            if (c) {
                if (d >= a.length) break;
                e = a[d++]
            } else {
                d = a.next();
                if (d.done) break;
                e = d.value
            }
            e = e;
            var f = e[0];
            e = e[1];
            b[f] = e
        }
        return b
    });
    Object.values = function(b) {
        if (b == null) throw new TypeError("Object.values called on non-object");
        var c = [];
        for (var d in b) a.call(b, d) && c.push(b[d]);
        return c
    }
})();


(function(a) {
    a.__m = function(a, b) {
        a.__SMmeta = b;
        return a
    }
})(this);


String.prototype.contains || (String.prototype.contains = String.prototype.includes);
String.prototype.padStart || (String.prototype.padStart = function(a, b) {
    a = a >> 0;
    b = String(b || " ");
    if (this.length > a) return String(this);
    else {
        a = a - this.length;
        a > b.length && (b += b.repeat(a / b.length));
        return b.slice(0, a) + String(this)
    }
}), String.prototype.padEnd || (String.prototype.padEnd = function(a, b) {
    a = a >> 0;
    b = String(b || " ");
    if (this.length > a) return String(this);
    else {
        a = a - this.length;
        a > b.length && (b += b.repeat(a / b.length));
        return String(this) + b.slice(0, a)
    }
});
String.prototype.trimLeft || (String.prototype.trimLeft = function() {
    return this.replace(/^\s+/, "")
}), String.prototype.trimRight || (String.prototype.trimRight = function() {
    return this.replace(/\s+$/, "")
});


(function(a) {
    var b = a.babelHelpers = {},
        c = Object.prototype.hasOwnProperty;
    b.inheritsLoose = function(a, b) {
        Object.assign(a, b);
        a.prototype = Object.create(b && b.prototype);
        a.prototype.constructor = a;
        a.__superConstructor__ = b;
        return b
    };
    b.wrapNativeSuper = function(a) {
        var c = typeof Map === "function" ? new Map() : void 0;
        b.wrapNativeSuper = function(a) {
            if (a === null) return null;
            if (typeof a !== "function") throw new TypeError("Super expression must either be null or a function");
            if (c !== void 0) {
                if (c.has(a)) return c.get(a);
                c.set(a, d)
            }
            b.inheritsLoose(d, a);

            function d() {
                a.apply(this, arguments)
            }
            return d
        };
        return b.wrapNativeSuper(a)
    };
    b.assertThisInitialized = function(a) {
        if (a === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return a
    };
    b._extends = Object.assign;
    b["extends"] = b._extends;
    b.construct = function(a, b) {
        var c = [null];
        c.push.apply(c, b);
        return new(Function.prototype.bind.apply(a, c))()
    };
    b.objectWithoutPropertiesLoose = function(a, b) {
        var d = {};
        for (var e in a) {
            if (!c.call(a, e) || b.indexOf(e) >= 0) continue;
            d[e] = a[e]
        }
        return d
    };
    b.taggedTemplateLiteralLoose = function(a, b) {
        b || (b = a.slice(0));
        a.raw = b;
        return a
    };
    b.bind = Function.prototype.bind
})(typeof global === "undefined" ? self : global);
(function(a) {
    if (a.require != null) return;
    var b = null,
        c = [],
        d = {},
        e = {},
        f = 0,
        g = 0,
        h = 0,
        i = 1,
        j = 2,
        k = 4,
        l = 8,
        m = 16,
        n = {},
        o = Object.prototype.hasOwnProperty,
        p = Object.prototype.toString;

    function q(a) {
        a = Array.prototype.slice.call(a);
        var b = {},
            c, e, f, g;
        while (a.length) {
            e = a.shift();
            if (b[e]) continue;
            b[e] = !0;
            f = d[e];
            if (!f || Q(f)) continue;
            if (f.dependencies)
                for (c = 0; c < f.dependencies.length; c++) g = f.dependencies[c], Q(g) || a.push(g.id)
        }
        for (e in b) o.call(b, e) && a.push(e);
        b = [];
        for (c = 0; c < a.length; c++) {
            e = a[c];
            var h = e;
            f = d[e];
            e = f ? f.dependencies : null;
            if (!f || !e) h += " is not defined";
            else if (Q(f)) h += " is ready";
            else {
                f = [];
                for (var i = 0; i < e.length; i++) g = e[i], Q(g) || f.push(g.id);
                h += " is waiting for " + f.join(", ")
            }
            b.push(h)
        }
        return b.join("\n")
    }

    function r(a) {
        this.name = "ModuleError", this.message = a, this.stack = Error(a).stack, this.framesToPop = 2
    }
    r.prototype = Object.create(Error.prototype);
    r.prototype.constructor = r;
    $ = a.Env || {};
    var s = !!$.gk_nonjs_deps_in_require,
        t = !!$.profile_require_factories,
        u = a.performance || a.msPerformance || a.webkitPerformance || {},
        v;
    if (u.now && u.timing && u.timing.navigationStart) {
        var w = u.timing.navigationStart;
        v = function() {
            return u.now() + w
        }
    } else v = function() {
        return Date.now()
    };
    var x = 0,
        y = 0;

    function z(a) {
        y++;
        var b = d[a];
        if (b && b.exports != null) {
            b.refcount-- === 1 && (d[a] = null);
            return b.exports
        }
        return B(a)
    }

    function A(b) {
        var c = e[b.id];
        if (b.factoryLength === -1) {
            var d = t ? a.ProfilingCounters : null;
            if (d) {
                var f = d.startTiming("FACTORY_COMPILE_TIME");
                b.factoryLength = b.factory.length;
                d = d.stopTiming(f);
                c.compileTime += d
            } else b.factoryLength = b.factory.length
        }
        return b.factoryLength
    }

    function B(c) {
        var f = a.ErrorGuard;
        if (f && !f.inGuard()) return f.applyWithGuard(B, null, [c]);
        f = d[c];
        if (!f) {
            var g = 'Requiring unknown module "' + c + '"';
            throw new r(g)
        }
        var h, i;
        if (f.hasError) throw new r('Requiring module "' + c + '" which threw an exception: ' + f.error.message);
        if (!Q(f)) throw new r('Requiring module "' + c + '" with unresolved dependencies: ' + q([c]));
        I(f);
        g = f.exports = {};
        var k = f.factory,
            m = f.dependencies;
        if (p.call(k) === "[object Function]" && m != null) {
            var o = m.length,
                s;
            try {
                try {
                    S(f)
                } catch (a) {
                    C(a, c)
                }
                var u = [],
                    w = o;
                f.special & l && (u = b.slice(0), u[b.length - 2] = f, u[b.length - 1] = g, w += u.length);
                if (f.special & j) {
                    g = A(f);
                    w = Math.min(o + u.length, g)
                }
                for (var g = 0; g < o; g++) {
                    var y = m[g];
                    u.length < w && u.push(z.call(null, y.id))
                }++x;
                var D, E, F;
                t && (F = v(), D = a.ProfilingCounters, D && (D.incrementCounter("FACTORY_COUNT", 1), E = D.startTiming("FACTORY_EXEC_TIME")));
                e[f.id].factoryRun = !0;
                try {
                    y = f.context != null ? f.context : a;
                    w = k.apply(y, u)
                } catch (a) {
                    C(a, c)
                } finally {
                    if (t) {
                        m = v();
                        o = 0;
                        D && (o = D.stopTiming(E));
                        g = e[f.id];
                        g.factoryTime = o;
                        g.factoryEnd = m;
                        g.factoryStart = F;
                        if (k.__SMmeta)
                            for (var G in k.__SMmeta) Object.prototype.hasOwnProperty.call(k.__SMmeta, G) && (g[G] = k.__SMmeta[G])
                    }
                }
            } catch (a) {
                f.hasError = !0;
                f.error = a;
                f.exports = null;
                throw a
            } finally {}
            w && (f.exports = w);
            if (typeof f.exports === "function") {
                y = f.exports;
                u = y.__superConstructor__;
                (!y.displayName || u && u.displayName === y.displayName) && (y.displayName = (y.name || "(anonymous)") + " [from " + c + "]")
            }
            f.factoryFinished = !0
        } else f.exports = k;
        o = "__isRequired__" + c;
        m = d[o];
        m && !Q(m) && J(o, n);
        f.refcount-- === 1 && (d[c] = null);
        return f.exports
    }

    function C(b, c) {
        b = b instanceof Error ? b : new Error(b);
        var d = a.ErrorSerializer;
        if (d) {
            var e = {};
            e.messageFormat = 'Module "%s"';
            e.messageParams = [c];
            c.startsWith("__") || (e.forcedKey = c);
            d.aggregateError(b, e)
        }
        throw b
    }

    function D() {
        var a = 0;
        for (var b in e) Object.prototype.hasOwnProperty.call(e, b) && (a += e[b].factoryTime);
        return a
    }

    function E() {
        var a = 0;
        for (var b in e) Object.prototype.hasOwnProperty.call(e, b) && (a += e[b].compileTime);
        return a
    }

    function F() {
        return x
    }

    function G() {
        return y
    }

    function H() {
        var a = {};
        for (var b in e) Object.prototype.hasOwnProperty.call(e, b) && (a[b] = e[b]);
        return a
    }

    function I(a) {
        if (a.nonJSDeps) return;
        a.nonJSDeps = !0;
        a.dependencies && a.dependencies.forEach(I)
    }

    function J(b, d, f, g, h, i, j) {
        d === void 0 ? (d = [], f = b, b = O()) : f === void 0 && (f = d, p.call(b) === "[object Array]" ? (d = b, b = O(d.join(","))) : d = []);
        var k = {
                cancel: M.bind(this, b)
            },
            l = K(b);
        if (!d && !f && i) {
            l.refcount += i;
            return k
        }
        e[b] = {
            id: b,
            dependencies: d,
            meta: j,
            category: g,
            defined: t ? v() : null,
            compileTime: null,
            factoryTime: null,
            factoryStart: null,
            factoryEnd: null,
            factoryRun: !1
        };
        if (l.dependencies && l.reload !== !0) return k;
        i && (l.refcount += i);
        b = d.map(K);
        l.factory = f;
        l.dependencies = b;
        l.context = h;
        l.special = g;
        (l.nonJSDeps || fa(l)) && (l.nonJSDeps = !1, I(l));
        R(l);
        if (c.length > 0) {
            var m = c;
            c = [];
            j = a.ScheduleJSWork ? a.ScheduleJSWork : Y;
            j(function() {
                while (m.length > 0) z.call(null, m.pop().id)
            })()
        }
        return k
    }

    function K(a) {
        var b = d[a];
        if (b) return b;
        b = new L(a, 0);
        d[a] = b;
        return b
    }

    function L(a, b, c, d, e, f, g) {
        this.id = a, this.refcount = b, this.exports = c || null, this.factory = d, this.factoryLength = -1, this.factoryFinished = !1, this.dependencies = e, this.depPosition = 0, this.context = f, this.special = g || 0, this.hasError = !1, this.error = null, this.ranRecursiveSideEffects = !1, this.sideEffectDependencyException = null, this.nextDepWaitingHead = null, this.nextDepWaitingNext = null, this.tarjanGeneration = -1, this.tarjanLow = 0, this.tarjanIndex = 0, this.tarjanOnStack = !1, this.nonJSDeps = !1
    }

    function M(a) {
        if (!d[a]) return;
        var b = d[a];
        d[a] = null;
        if (b.dependencies)
            for (var a = 0; a < b.dependencies.length; a++) {
                var c = b.dependencies[a];
                c.refcount-- === 1 && M(c.id)
            }
    }

    function N(a, b, c) {
        return J("__requireLazy__" + (a.length > 0 ? a.join(",") + "__" : "") + f++, a, Z()(b, "requireLazy", {
            propagationType: 0
        }), i | m, c, 1)
    }

    function O(a) {
        return "__mod__" + (a != null ? a + "__" : "") + f++
    }

    function P(a, b, c) {
        c.tarjanGeneration != g && (c.tarjanGeneration = g, c.tarjanLow = c.tarjanIndex = h++, c.tarjanOnStack = !0, b.push(c));
        if (c.dependencies != null)
            for (var d = c.depPosition; d < c.dependencies.length; d++) {
                var e = c.dependencies[d];
                e.tarjanGeneration != g ? (P(a, b, e), c.tarjanLow = Math.min(c.tarjanLow, e.tarjanLow)) : e.tarjanOnStack && (c.tarjanLow = Math.min(c.tarjanLow, e.tarjanIndex))
            }
        if (c.tarjanLow == c.tarjanIndex) {
            e = [];
            do {
                d = b.pop();
                d.tarjanOnStack = !1;
                e.push(d);
                if (c == b[0] && d != c && d.dependencies != null)
                    for (var f = d.depPosition; f < d.dependencies.length; f++) {
                        var i = d.dependencies[f];
                        !Q(i) && a.indexOf(i) == -1 && b.indexOf(i) == -1 && e.indexOf(i) == -1 && a.push(i)
                    }
            } while (d != c)
        }
    }

    function aa(a) {
        var b = a.dependencies;
        if (!b) throw new r("Called _replaceCycleLinkWithSCCDeps on an undefined module");
        g++;
        P(b, [], a);
        a.depPosition++;
        R(a)
    }

    function ba(a, b) {
        var c = b;
        while (!0) {
            if (c.dependencies && c.depPosition != c.dependencies.length) c = c.dependencies[c.depPosition];
            else break;
            if (c == a) {
                aa(a);
                return
            }
        }
        a.nextDepWaitingNext = b.nextDepWaitingHead;
        b.nextDepWaitingHead = a
    }

    function Q(a) {
        return a.dependencies != null && a.depPosition >= a.dependencies.length
    }

    function ca(a) {
        a.depPosition++, R(a)
    }

    function da(a) {
        var b = a.nextDepWaitingHead;
        a.nextDepWaitingHead = null;
        while (b != null) {
            var c = b;
            c.nonJSDeps && I(a);
            b = c.nextDepWaitingNext;
            c.nextDepWaitingNext = null;
            var e = !d[c.id];
            e || ca(c)
        }
    }

    function ea(a) {
        return a.special & i
    }

    function fa(a) {
        return a.special & m
    }

    function R(a) {
        while (a.dependencies != null && a.depPosition < a.dependencies.length) {
            var b = a.dependencies[a.depPosition],
                d = Q(b);
            if (!d && a != b) {
                ba(a, b);
                return
            }
            a.depPosition++
        }
        ea(a) && c.push(a);
        a.nextDepWaitingHead !== null && da(a)
    }

    function S(a) {
        if (a.sideEffectDependencyException != null) throw a.sideEffectDependencyException;
        if (a.ranRecursiveSideEffects) return;
        a.ranRecursiveSideEffects = !0;
        var b = a.dependencies;
        if (b)
            for (var c = 0; c < b.length; c++) {
                var d = b[c];
                try {
                    S(d)
                } catch (b) {
                    a.sideEffectDependencyException = b;
                    throw b
                }
                if (d.special & k) try {
                    z.call(null, d.id)
                } catch (b) {
                    a.sideEffectDependencyException = b;
                    throw b
                }
            }
    }

    function T(a, b) {
        d[a] = new L(a, 0, b), e[a] = {
            id: a,
            dependencies: [],
            category: 0,
            compileTime: null,
            factoryLengthAccessTime: null,
            factoryTime: null,
            factoryStart: null,
            factoryEnd: null,
            factoryRun: !1
        }
    }
    T("module", 0);
    T("exports", 0);
    T("define", J);
    T("global", a);
    T("require", z);
    T("requireDynamic", U);
    T("requireLazy", N);
    T("requireWeak", V);
    T("ifRequired", W);
    T("ifRequireable", X);
    b = [z.call(null, "global"), z.call(null, "require"), z.call(null, "requireDynamic"), z.call(null, "requireLazy"), null, null];
    J.amd = {};
    a.define = J;
    a.require = z;
    a.requireDynamic = U;
    a.requireLazy = N;

    function U(a, b) {
        throw new ReferenceError("requireDynamic is not defined")
    }

    function V(a, b) {
        W.call(null, a, function(a) {
            b(a)
        }, function() {
            J("__requireWeak__" + a + "__" + f++, ["__isRequired__" + a], Z()(function() {
                b(d[a].exports)
            }, "requireWeak"), i, null, 1)
        })
    }

    function W(a, b, c) {
        a = d[a];
        if (a && a.factoryFinished) {
            if (typeof b === "function") return b(a.exports)
        } else if (typeof c === "function") return c()
    }

    function X(a, b, c) {
        if (s !== !0) return W.call(null, a, b, c);
        var e = d[a];
        if (e && e.nonJSDeps && Q(e)) {
            if (typeof b === "function") return b(z.call(null, a))
        } else if (typeof c === "function") return c()
    }
    $ = {
        getModules: function() {
            var a = {};
            for (var b in d) d[b] && Object.prototype.hasOwnProperty.call(d, b) && (a[b] = d[b]);
            return a
        },
        modulesMap: d,
        debugUnresolvedDependencies: q
    };

    function Y(a) {
        return a
    }

    function Z() {
        var b = a.TimeSlice && a.TimeSlice.guard ? a.TimeSlice.guard : Y;
        return function() {
            return b.apply(void 0, arguments)
        }
    }
    T("__getFactoryTime", D);
    T("__getCompileTime", E);
    T("__getTotalFactories", F);
    T("__getTotalRequireCalls", G);
    T("__getModuleTimeDetails", H);
    T("__debug", $);
    a.__d = function(a, b, c, d) {
        Z()(function() {
            J(a, b, c, (d || j) | l, null, null, null)
        }, "define " + a, {
            root: !0
        })()
    };

    function $(a, b) {
        return !0
    }
    if (a.__d_stub) {
        for (var V = 0; V < a.__d_stub.length; V++) a.__d.apply(null, a.__d_stub[V]);
        delete a.__d_stub
    }
    if (a.__rl_stub) {
        for (var X = 0; X < a.__rl_stub.length; X++) N.apply(null, a.__rl_stub[X]);
        delete a.__rl_stub
    }
    U = function() {};
    a.$RefreshReg$ = U;
    a.$RefreshSig$ = function() {
        return function(a) {
            return a
        }
    }
})(this);

(function(a) {
    var b = a.performance;
    b && b.setResourceTimingBufferSize && (b.setResourceTimingBufferSize(1e5), b.onresourcetimingbufferfull = function() {
        a.__isresourcetimingbufferfull = !0
    }, b.setResourceTimingBufferSize = function() {})
})(this);
__d("Env", [], (function(a, b, c, d, e, f) {
    b = {
        ajaxpipe_token: null,
        compat_iframe_token: null,
        iframeKey: "",
        iframeTarget: "",
        iframeToken: "",
        isCQuick: !1,
        start: Date.now(),
        nocatch: !1
    };
    a.Env && Object.assign(b, a.Env);
    a.Env = b;
    e.exports = b
}), null);
__d("ErrorSerializer", [], (function(a, b, c, d, e, f) {
    "use strict";
    var g = {
        debug: 1,
        info: 2,
        warn: 3,
        error: 4,
        fatal: 5
    };

    function h(a) {
        try {
            var b = o(a, /^([\s\S]*)<\!\[EX\[(\[.*\])\]\]>([\s\S]*)$/);
            if (!b) return n(a);
            var c = b[0],
                d = b[1];
            b = b[2];
            d = JSON.parse(d);
            var e = d[0];
            d = d.slice(1);
            e = n(e);
            e.message = c + e.message + b;
            d && d.length > 0 && (e.params = d.map(function(a) {
                return String(a)
            }));
            return e
        } catch (b) {
            return {
                message: "Unable to parse error message %s because %s",
                params: [a, b.message]
            }
        }
    }

    function b(a) {
        return "<![EX[" + JSON.stringify(k(a)) + "]]>"
    }

    function i(a) {
        if (a.messageFormat == null) return h(a.message);
        var b = {
            message: String(a.messageFormat)
        };
        a.messageParams && (b.params = [].concat(a.messageParams));
        b.forcedKey = a.forcedKey;
        a.taalOpcodes && (b.taalOpcodes = a.taalOpcodes);
        return b
    }

    function c(a, b) {
        var c = i(a);
        if (Object.isFrozen(a)) return;
        b.type && ((!a.type || g[a.type] > g[b.type]) && (a.type = b.type));
        if (b.fbloggerMetadata != null) {
            var d = a.fbloggerMetadata || [];
            d.push.apply(d, b.fbloggerMetadata);
            a.fbloggerMetadata = d
        }
        b.project != null && (a.project = b.project);
        b.errorName != null && (a.errorName = b.errorName);
        b.componentStack != null && (a.componentStack = b.componentStack);
        b.deferredSource != null && (a.deferredSource = b.deferredSource);
        d = c.message;
        var e = m(c.params);
        if (b.messageFormat != null) {
            var f;
            d += " [Caught in: " + b.messageFormat + "]";
            e.push.apply(e, (f = b.messageParams) != null ? f : [])
        }
        a.messageFormat = d;
        a.messageParams = e;
        f = b.forcedKey;
        d = c.forcedKey;
        b = f != null && d != null ? f + "_" + d : (e = f) != null ? e : d;
        a.forcedKey = b;
        c.taalOpcodes != null && (a.taalOpcodes = c.taalOpcodes)
    }

    function j(a, b) {
        var c = 0;
        a = a.replace(/%s/g, function() {
            return c < b.length ? b[c++] : "NOPARAM"
        });
        c < b.length && (a += " PARAMS" + JSON.stringify(b.slice(c)));
        return a
    }

    function d(a) {
        var b = a.message || "",
            c = m(a.params);
        return j(b, c) + l(a)
    }

    function k(a) {
        return [a.message + l(a)].concat(m(a.params))
    }

    function l(a) {
        var b = a.taalOpcodes;
        a = a.forcedKey;
        var c = [];
        b && c.push.apply(c, b);
        a && c.push("4" + a.replace(/[^\d\w]/g, "_"));
        return c.length > 0 ? " TAAL[" + c.join(";") + "]" : ""
    }

    function m(a) {
        return ((a = a) != null ? a : []).map(function(a) {
            return String(a)
        })
    }

    function n(a) {
        var b = o(a, /^([\s\S]*) TAAL\[(.*)\]$/);
        b = (b = b) != null ? b : [a, null];
        var c = b[0];
        b = b[1];
        c = {
            message: c
        };
        if (b) {
            var d = [];
            for (var b = b.split(";"), e = Array.isArray(b), f = 0, b = e ? b : b[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                var g;
                if (e) {
                    if (f >= b.length) break;
                    g = b[f++]
                } else {
                    f = b.next();
                    if (f.done) break;
                    g = f.value
                }
                g = g;
                if (g === "1" || g === "2" || g === "3") d.push(parseInt(g, 10));
                else if (g[0] === "4" && g.length > 1) c.forcedKey = g.substring(1);
                else return {
                    message: a
                }
            }
            d.length > 0 && (c.taalOpcodes = d)
        }
        return c
    }

    function o(a, b) {
        if (typeof a === "string") {
            a = a.match(b);
            if (a && a.length > 0) return a.slice(1)
        }
    }
    e.exports = a.ErrorSerializer = {
        aggregateError: c,
        parseFromError: i,
        stringify: b,
        toFormattedMessage: d,
        toReadableMessage: j,
        toMessageWithParams: k,
        toStringParams: m
    }
}), 3);
__d("ErrorXFBDebug", [], (function(a, b, c, d, e, f) {
    "use strict";
    var g = 5,
        h = [],
        i = {
            addFromXHR: function(a) {
                var b = a.getAllResponseHeaders();
                if (b != null && b.indexOf("X-FB-Debug") >= 0) {
                    b = a.getResponseHeader("X-FB-Debug");
                    b && i.add(b)
                }
            },
            add: function(a) {
                h.push(a), h.length > g && h.shift()
            },
            getAll: function() {
                return h
            }
        };
    e.exports = i
}), null);
__d("FBLoggerMetadata", [], (function(a, b, c, d, e, f) {
    "use strict";
    var g = [];
    a = function() {
        function a() {
            this.metadata = [].concat(g)
        }
        var b = a.prototype;
        b.addMetadata = function(a, b, c) {
            this.metadata.push([a, b, c]);
            return this
        };
        b.isEmpty = function() {
            return this.metadata.length === 0
        };
        b.formatMetadata = function() {
            var a = [];
            this.metadata.forEach(function(b) {
                if (b && b.length) {
                    b = b.map(function(a) {
                        return a != null ? String(a).replace(/:/g, "_") : ""
                    }).join(":");
                    a.push(b)
                }
            });
            return a
        };
        a.addGlobalMetadata = function(a, b, c) {
            g.push([a, b, c])
        };
        a.getGlobalMetadata = function() {
            return g
        };
        a.unsetGlobalMetadata = function(a, b) {
            g = g.filter(function(c) {
                return !(Array.isArray(c) && c[0] === a && c[1] === b)
            })
        };
        return a
    }();
    e.exports = a
}), null);
__d("TAALOpcodes", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        PREVIOUS_FILE: 1,
        PREVIOUS_FRAME: 2,
        PREVIOUS_DIR: 3,
        FORCED_KEY: 4
    };
    e.exports = a
}), null);
__d("getSimpleHash", [], (function(a, b, c, d, e, f) {
    "use strict";
    var g = "abcdefghijklmnopqrstuvwxyz012345";

    function a() {
        var a = 0;
        for (var b = arguments.length, c = new Array(b), d = 0; d < b; d++) c[d] = arguments[d];
        for (var e = 0; e < c.length; e++) {
            var f = c[e];
            if (f != null) {
                var h = f.length;
                for (var i = 0; i < h; i++) a = (a << 5) - a + f.charCodeAt(i)
            }
        }
        var j = "";
        for (var k = 0; k < 6; k++) j = g.charAt(a & 31) + j, a >>= 5;
        return j
    }
    e.exports = a
}), null);
__d("performance", [], (function(a, b, c, d, e, f) {
    "use strict";
    b = a.performance || a.msPerformance || a.webkitPerformance || {};
    e.exports = b
}), null);
__d("performanceNow", ["performance"], (function(a, b, c, d, e, f) {
    var g;
    if ((g || (g = b("performance"))).now) c = function() {
        return (g || (g = b("performance"))).now()
    };
    else {
        d = a._cstart;
        f = Date.now();
        var h = typeof d === "number" && d < f ? d : f,
            i = 0;
        c = function() {
            var a = Date.now(),
                b = a - h;
            b < i && (h -= i - b, b = a - h);
            i = b;
            return b
        }
    }
    e.exports = c
}), null);
__d("ErrorNormalizeUtils", ["ErrorSerializer", "ErrorXFBDebug", "FBLoggerMetadata", "TAALOpcodes", "getSimpleHash", "performanceNow"], (function(a, b, c, d, e, f) {
    "use strict";
    var g, h = [/\(([^\s\)\()]+):(\d+):(\d+)\)$/, /@([^\s\)\()]+):(\d+):(\d+)$/, /^([^\s\)\()]+):(\d+):(\d+)$/, /^at ([^\s\)\()]+):(\d+):(\d+)$/];
    Error.stackTraceLimit != null && Error.stackTraceLimit < 80 && (Error.stackTraceLimit = 80);

    function i(a) {
        var b = a.name,
            c = a.message;
        a = a.stack;
        if (a == null) return null;
        if (b != null && c != null && c !== "") {
            var d = b + ": " + c + "\n";
            if (a.startsWith(d)) return a.substr(d.length)
        }
        if (b != null) {
            d = b + "\n";
            if (a.startsWith(d)) return a.substr(d.length)
        }
        if (c != null && c !== "") {
            b = ": " + c + "\n";
            d = a.indexOf(b);
            c = a.substring(0, d);
            if (/^\w+$/.test(c)) return a.substring(d + b.length)
        }
        return a
    }

    function j(a) {
        a = a.trim();
        var b;
        a;
        var c, d, e;
        if (a.includes("charset=utf-8;base64,")) b = "<inlined-file>";
        else {
            var f;
            for (var g = 0; g < h.length; g++) {
                var i = h[g];
                f = a.match(i);
                if (f != null) break
            }
            f != null && f.length === 4 ? (c = f[1], d = parseInt(f[2], 10), e = parseInt(f[3], 10), b = a.substring(0, a.length - f[0].length)) : b = a;
            b = b.replace(/^at /, "").trim()
        }
        i = {
            identifier: b,
            script: c,
            line: d,
            column: e
        };
        i.text = k(i);
        return i
    }

    function k(a) {
        var b = a.identifier,
            c = a.script,
            d = a.line;
        a = a.column;
        b = "    at " + ((b = b) != null ? b : "<unknown>");
        c != null && d != null && a != null && (b += " (" + c + ":" + d + ":" + a + ")");
        return b
    }

    function l(a) {
        return a == null || a === "" ? [] : a.split(/\n\n/)[0].split("\n").map(j)
    }

    function m(a) {
        a = i(a);
        return l(a)
    }

    function n(a) {
        if (a == null || a === "") return null;
        a = a.split("\n");
        a.splice(0, 1);
        return a.map(function(a) {
            return a.trim()
        })
    }

    function o(c) {
        var d, e, f, h = m(c),
            i = b("ErrorSerializer").parseFromError(c),
            k = c.framesToPop;
        if (k != null) {
            var l;
            k = Math.min(k, h.length);
            i.taalOpcodes = (l = i.taalOpcodes) != null ? l : [];
            while (k-- > 0) i.taalOpcodes.unshift(b("TAALOpcodes").PREVIOUS_FRAME)
        }
        l = n(c.componentStack);
        k = l == null ? null : l.map(j);
        var p = c.fbloggerMetadata ? c.fbloggerMetadata : [],
            q = b("FBLoggerMetadata").getGlobalMetadata().map(function(a) {
                return a.join(":")
            });
        p = [].concat(p, q);
        p.length === 0 && (p = void 0);
        q = h.map(function(a) {
            return a.text
        }).join("\n");
        d = (d = c.errorName) != null ? d : c.name;
        var r = c.type || "error",
            s = c.loggingSource,
            t = c.project;
        e = (e = c.lineNumber) != null ? e : c.line;
        f = (f = c.columnNumber) != null ? f : c.column;
        f = {
            column: f == null ? null : String(f),
            clientTime: Math.floor(Date.now() / 1e3),
            componentStackFrames: k,
            deferredSource: c.deferredSource != null ? o(c.deferredSource) : null,
            extra: (f = c.extra) != null ? f : {},
            fbloggerMetadata: p,
            fbtrace_id: c.fbtrace_id,
            guard: (k = c.guard) != null ? k : "",
            guardList: (f = c.guardList) != null ? f : [],
            hash: b("getSimpleHash")(d, q, r, t, s),
            isNormalizedError: !0,
            line: e == null ? null : String(e),
            loggingSource: s,
            message: b("ErrorSerializer").toFormattedMessage(i),
            messageFormat: i.message,
            messageParams: ((p = i.params) != null ? p : []).map(function(a) {
                return String(a)
            }),
            name: d,
            page_time: Math.floor((g || (g = b("performanceNow")))()),
            project: t,
            reactComponentStack: l,
            script: (k = c.fileName) != null ? k : c.sourceURL,
            serverHash: c.serverHash,
            stack: q,
            stackFrames: h,
            type: r,
            xFBDebug: b("ErrorXFBDebug").getAll()
        };
        i.forcedKey != null && (f.forcedKey = i.forcedKey);
        i.taalOpcodes && (f.taalOpcodes = i.taalOpcodes);
        e = a.location;
        e && (f.windowLocationURL = e.href);
        for (var u in f) f[u] == null && delete f[u];
        return f
    }
    e.exports = {
        normalizeError: o,
        formatStackFrame: k
    }
}), null);
__d("ErrorBrowserConsole", [], (function(a, b, c, d, e, f) {
    "use strict";
    var g = !1,
        h = a.console;

    function b(a) {
        var b = h[a.type] ? a.type : "error";
        if (b === "error" && !g) {
            b = a.message;
            h.error("ErrorUtils caught an error:\n\n" + b + "\n\nSubsequent errors won't be logged; see https://fburl.com/debugjs.");
            g = !0
        }
    }
    e.exports = {
        errorListener: b
    }
}), null);
__d("ErrorGuardState", [], (function(a, b, c, d, e, f) {
    "use strict";
    var g = [];
    a = {
        pushGuard: function(a) {
            g.unshift(a)
        },
        popGuard: function() {
            g.shift()
        },
        inGuard: function() {
            return g.length !== 0
        },
        cloneGuardList: function() {
            return g.map(function(a) {
                return a.name
            })
        },
        findDeferredSource: function() {
            for (var a = 0; a < g.length; a++) {
                var b = g[a];
                if (b.deferredSource != null) return b.deferredSource
            }
        }
    };
    e.exports = a
}), null);
__d("err", ["TAALOpcodes"], (function(a, b, c, d, e, f) {
    "use strict";

    function a(a) {
        var c = new Error(a);
        if (c.stack === void 0) try {
            throw c
        } catch (a) {}
        c.messageFormat = a;
        for (var d = arguments.length, e = new Array(d > 1 ? d - 1 : 0), f = 1; f < d; f++) e[f - 1] = arguments[f];
        c.messageParams = e.map(function(a) {
            return String(a)
        });
        c.taalOpcodes = [b("TAALOpcodes").PREVIOUS_FRAME];
        return c
    }
    e.exports = a
}), null);
__d("getErrorSafe", ["TAALOpcodes", "err"], (function(a, b, c, d, e, f) {
    "use strict";

    function a(a) {
        if (a != null && typeof a === "object" && typeof a.message === "string")
            if (Object.isExtensible && Object.isExtensible(a)) return a;
            else {
                var c = b("err")("Non-extensible thrown: %s", String(a.message));
                c.taalOpcodes = c.taalOpcodes || [];
                c.taalOpcodes.push(b("TAALOpcodes").PREVIOUS_FRAME);
                return c
            }
        else {
            c = b("err")("Non-object thrown: %s", String(a));
            c.taalOpcodes = c.taalOpcodes || [];
            c.taalOpcodes.push(b("TAALOpcodes").PREVIOUS_FRAME);
            return c
        }
    }
    e.exports = a
}), null);
__d("ErrorUnhandledRejectionHandler", ["ErrorNormalizeUtils", "err", "getErrorSafe"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = null,
        h = !1,
        i = {
            onunhandledrejection: function(a) {
                if (!g) return;
                var c = a.reason;
                if (c != null && typeof c === "object" && (c.name == null || c.name === "" || c.message == null || c.message === "")) try {
                    var d = b("err")("UnhandledRejection: %s", JSON.stringify(c));
                    d = b("ErrorNormalizeUtils").normalizeError(d)
                } catch (a) {
                    var e = b("err")("UnhandledRejection: (circular) %s", Object.keys(c).join(","));
                    d = b("ErrorNormalizeUtils").normalizeError(e)
                } else d = b("ErrorNormalizeUtils").normalizeError(b("getErrorSafe")(c));
                d.loggingSource || (d.loggingSource = "ONUNHANDLEDREJECTION");
                g.reportNormalizedError(d);
                a.preventDefault()
            },
            setup: function(b) {
                g = b, typeof a.addEventListener === "function" && !h && (h = !0, a.addEventListener("unhandledrejection", i.onunhandledrejection))
            }
        };
    e.exports = i
}), null);
__d("removeFromArray", [], (function(a, b, c, d, e, f) {
    function a(a, b) {
        b = a.indexOf(b);
        b !== -1 && a.splice(b, 1)
    }
    e.exports = a
}), null);
__d("ErrorPubSub", ["ErrorBrowserConsole", "ErrorGuardState", "ErrorNormalizeUtils", "ErrorUnhandledRejectionHandler", "removeFromArray"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = typeof window === "undefined" ? "<self.onerror>" : "<window.onerror>",
        h = "<global.react>",
        i = [],
        j = [],
        k = 50,
        l = !1,
        m = {
            history: j,
            addListener: function(a, b) {
                b === void 0 && (b = !1), i.push(a), b || j.forEach(function(b) {
                    return a(b, (b = b.loggingSource) != null ? b : "DEPRECATED")
                })
            },
            unshiftListener: function(a) {
                i.unshift(a)
            },
            removeListener: function(a) {
                b("removeFromArray")(i, a)
            },
            onerror: function(a, b, c, d, e) {
                e = (e = e) != null ? e : new Error(a || "");
                e.fileName == null && b != null && (e.fileName = b);
                e.line == null && c != null && (e.line = c);
                e.column == null && d != null && (e.column = d);
                e.guard = g;
                e.guardList = [g];
                e.loggingSource = "ONERROR";
                m.reportError(e)
            },
            reportError: function(a) {
                a = b("ErrorNormalizeUtils").normalizeError(a);
                m.reportNormalizedError(a)
            },
            reportNormalizedError: function(a) {
                if (l) return !1;
                var c = b("ErrorGuardState").cloneGuardList();
                a.componentStackFrames && c.unshift(h);
                c.length > 0 && (a.guard = a.guard || c[0], a.guardList = c);
                if (a.deferredSource == null) {
                    c = b("ErrorGuardState").findDeferredSource();
                    c != null && (a.deferredSource = b("ErrorNormalizeUtils").normalizeError(c))
                }
                j.length > k && j.splice(k / 2, 1);
                j.push(a);
                l = !0;
                for (var c = 0; c < i.length; c++) try {
                    var d;
                    i[c](a, (d = a.loggingSource) != null ? d : "DEPRECATED")
                } catch (a) {}
                l = !1;
                return !0
            }
        };
    m.addListener(b("ErrorBrowserConsole").errorListener);
    a.onerror = m.onerror;
    b("ErrorUnhandledRejectionHandler").setup(m);
    e.exports = m
}), 3);
__d("FBLogMessage", ["ErrorNormalizeUtils", "ErrorPubSub", "ErrorSerializer", "FBLoggerMetadata", "TAALOpcodes"], (function(a, b, c, d, e, f) {
    "use strict";
    var g;
    a = function() {
        function a(a) {
            this.project = a, this.events = [], this.metadata = new(b("FBLoggerMetadata"))(), this.taalOpcodes = []
        }
        var c = a.prototype;
        c.$1 = function(c, d) {
            var e = String(d),
                f = this.error,
                h = this.events,
                i = this.project,
                j = this.metadata,
                k = this.forcedKey,
                l;
            for (var m = arguments.length, n = new Array(m > 2 ? m - 2 : 0), o = 2; o < m; o++) n[o - 2] = arguments[o];
            if (this.normalizedError) {
                var p = {
                    message: this.normalizedError.messageFormat + " [Caught in: " + e + "]",
                    params: [].concat(this.normalizedError.messageParams, n),
                    forcedKey: k
                };
                l = Object.assign({}, this.normalizedError, {
                    message: b("ErrorSerializer").toFormattedMessage(p),
                    messageFormat: p.message,
                    messageParams: b("ErrorSerializer").toStringParams(p.params),
                    project: i,
                    type: c
                })
            } else if (f) this.taalOpcodes.length > 0 && new a("fblogger").blameToPreviousFrame().blameToPreviousFrame().warn("Blame helpers do not work with catching"), b("ErrorSerializer").aggregateError(f, {
                messageFormat: e,
                messageParams: b("ErrorSerializer").toStringParams(n),
                errorName: f.name,
                forcedKey: k,
                project: i,
                type: c
            }), l = b("ErrorNormalizeUtils").normalizeError(f);
            else {
                var q = new Error(e);
                if (q.stack === void 0) try {
                    throw q
                } catch (a) {}
                q.messageFormat = e;
                q.messageParams = b("ErrorSerializer").toStringParams(n);
                q.forcedKey = k;
                q.project = i;
                q.name = "FBLogger";
                q.type = c;
                q.taalOpcodes = [b("TAALOpcodes").PREVIOUS_FRAME, b("TAALOpcodes").PREVIOUS_FRAME].concat(this.taalOpcodes);
                l = b("ErrorNormalizeUtils").normalizeError(q)
            }
            l.loggingSource = "FBLOGGER";
            j.isEmpty() || (l.fbloggerMetadata = j.formatMetadata());
            if (h.length > 0)
                if (l.events != null) {
                    var r;
                    (r = l.events).push.apply(r, h)
                } else l.events = h;
            (g || (g = b("ErrorPubSub"))).reportNormalizedError(l)
        };
        c.fatal = function(a) {
            for (var b = arguments.length, c = new Array(b > 1 ? b - 1 : 0), d = 1; d < b; d++) c[d - 1] = arguments[d];
            this.$1.apply(this, ["fatal", a].concat(c))
        };
        c.mustfix = function(a) {
            for (var b = arguments.length, c = new Array(b > 1 ? b - 1 : 0), d = 1; d < b; d++) c[d - 1] = arguments[d];
            this.$1.apply(this, ["error", a].concat(c))
        };
        c.warn = function(a) {
            for (var b = arguments.length, c = new Array(b > 1 ? b - 1 : 0), d = 1; d < b; d++) c[d - 1] = arguments[d];
            this.$1.apply(this, ["warn", a].concat(c))
        };
        c.info = function(a) {
            for (var b = arguments.length, c = new Array(b > 1 ? b - 1 : 0), d = 1; d < b; d++) c[d - 1] = arguments[d];
            this.$1.apply(this, ["info", a].concat(c))
        };
        c.debug = function(a) {};
        c.catching = function(b) {
            !(b instanceof Error) ? new a("fblogger").blameToPreviousFrame().warn("Catching non-Error object is not supported"): this.error = b;
            return this
        };
        c.catchingNormalizedError = function(a) {
            this.normalizedError = a;
            return this
        };
        c.event = function(a) {
            this.events.push(a);
            return this
        };
        c.blameToPreviousFile = function() {
            this.taalOpcodes.push(b("TAALOpcodes").PREVIOUS_FILE);
            return this
        };
        c.blameToPreviousFrame = function() {
            this.taalOpcodes.push(b("TAALOpcodes").PREVIOUS_FRAME);
            return this
        };
        c.blameToPreviousDirectory = function() {
            this.taalOpcodes.push(b("TAALOpcodes").PREVIOUS_DIR);
            return this
        };
        c.addToCategoryKey = function(a) {
            this.forcedKey = a;
            return this
        };
        c.addMetadata = function(a, b, c) {
            this.metadata.addMetadata(a, b, c);
            return this
        };
        return a
    }();
    e.exports = a
}), null);
__d("FBLogger", ["FBLoggerMetadata", "FBLogMessage"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function(a, c) {
        var d = new(b("FBLogMessage"))(a);
        return c != null ? d.event(a + "." + c) : d
    };
    a.addGlobalMetadata = function(a, c, d) {
        b("FBLoggerMetadata").addGlobalMetadata(a, c, d)
    };
    e.exports = a
}), null);
__d("ExecutionContextObservers", [], (function(a, b, c, d, e, f) {
    a = {
        MUTATION_COUNTING: 0,
        PROFILING_COUNTERS: 1,
        REFERENCE_COUNTING: 2,
        HEARTBEAT: 3,
        CALL_STACK: 4,
        TIMESLICE_EXECUTION_LOGGER: 5,
        FLUX_PERF_TOOL: 6
    };
    b = {
        MUTATION_COUNTING: 0,
        REFERENCE_COUNTING: 1,
        PROFILING_COUNTERS: 2,
        HEARTBEAT: 3,
        CALL_STACK: 4,
        TIMESLICE_EXECUTION_LOGGER: 5,
        FLUX_PERF_TOOL: 6
    };
    c = {
        beforeIDs: a,
        afterIDs: b
    };
    e.exports = c
}), null);
__d("unrecoverableViolation", ["ErrorSerializer", "FBLogger", "TAALOpcodes"], (function(a, b, c, d, e, f) {
    "use strict";

    function a(a, c, d) {
        d = d === void 0 ? {} : d;
        d = d.error;
        c = b("FBLogger")(c);
        var e;
        d ? (e = d, c = c.catching(d), b("ErrorSerializer").aggregateError(d, {
            messageFormat: a
        })) : (e = new Error(a), e.taalOpcodes = [b("TAALOpcodes").PREVIOUS_FRAME]);
        c.blameToPreviousFrame().mustfix(a);
        throw e
    }
    e.exports = a
}), null);
__d("CircularBuffer", ["unrecoverableViolation"], (function(a, b, c, d, e, f) {
    a = function() {
        "use strict";

        function a(a) {
            if (a <= 0) throw b("unrecoverableViolation")("Buffer size should be a positive integer", "comet_infra");
            this.$1 = a;
            this.$2 = 0;
            this.$3 = [];
            this.$4 = []
        }
        var c = a.prototype;
        c.write = function(a) {
            var b = this;
            this.$3.length < this.$1 ? this.$3.push(a) : (this.$4.forEach(function(a) {
                return a(b.$3[b.$2])
            }), this.$3[this.$2] = a, this.$2++, this.$2 %= this.$1);
            return this
        };
        c.onEvict = function(a) {
            this.$4.push(a);
            return this
        };
        c.read = function() {
            return this.$3.slice(this.$2).concat(this.$3.slice(0, this.$2))
        };
        c.expand = function(a) {
            if (a > this.$1) {
                var b = this.read();
                this.$2 = 0;
                this.$3 = b;
                this.$1 = a
            }
            return this
        };
        c.dropFirst = function(a) {
            if (a <= this.$1) {
                var b = this.read();
                this.$2 = 0;
                b.splice(0, a);
                this.$3 = b
            }
            return this
        };
        c.clear = function() {
            this.$2 = 0;
            this.$3 = [];
            return this
        };
        c.currentSize = function() {
            return this.$3.length
        };
        return a
    }();
    e.exports = a
}), null);
__d("LogBuffer", ["CircularBuffer"], (function(a, b, c, d, e, f) {
    var g = a.__fbNativeSetTimeout || a.setTimeout,
        h = 5e3,
        i = {},
        j = {};
    c = {
        write: function(a, c) {
            var d = i[a] = i[a] || new(b("CircularBuffer"))(h);
            d.write(c);
            j[a] && j[a].forEach(function(a) {
                try {
                    a(c)
                } catch (a) {}
            })
        },
        read: function(a) {
            if (!i[a]) return [];
            else return i[a].read()
        },
        tail: function(a, b) {
            if (typeof b !== "function") return;
            j[a] = j[a] || [];
            j[a].push(b);
            if (i[a]) {
                a = i[a];
                a.read().forEach(function(a) {
                    try {
                        b(a)
                    } catch (a) {}
                })
            }
        },
        expand: function(a, c) {
            var d = i[a];
            d ? d.expand(c) : i[a] = new(b("CircularBuffer"))(c)
        },
        clear: function(a) {
            i[a] && g(function() {
                i[a].clear()
            }, 0)
        }
    };
    e.exports = c
}), null);
__d("requireCond", [], (function(a, b, c, d, e, f) {
    function a(a, b, c) {
        throw new Error("Cannot use raw untransformed requireCond.")
    }
    e.exports = a
}), null);
__d("TimeSlice", ["requireCond", "cr:717822"], (function(a, b, c, d, e, f) {
    e.exports = b("cr:717822")
}), null);
__d("OnDemandExecutionContextObserver", ["TimeSlice"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        function a() {
            this.$5 = !1, this.$4 = !1, this.$1 = 0, this.$2 = {}, this.$3 = 0
        }
        var c = a.prototype;
        c.onNewContextCreatedWhileEnabled = function(a, b, c) {
            throw Error("unimplemented abstract method")
        };
        c.onNewContextCreatedWhileDisabled = function(a, b, c) {};
        c.onContextCanceled = function(a, b) {};
        c.onBeforeContextStartedWhileEnabled = function(a, b, c) {
            throw Error("unimplemented abstract method")
        };
        c.onBeforeContextStartedWhileDisabled = function(a, b, c) {};
        c.onAfterContextStartedWhileEnabled = function(a, b, c, d) {
            throw Error("unimplemented abstract method")
        };
        c.onAfterContextStartedWhileDisabled = function(a, b, c, d) {};
        c.onAfterContextEndedWhileEnabled = function(a, b, c, d) {
            throw Error("unimplemented abstract method")
        };
        c.onAfterContextEndedWhileDisabled = function(a, b, c, d) {};
        c.onNewContextCreated = function(a, b, c) {
            if (this.isEnabled()) return this.onNewContextCreatedWhileEnabled(a, b, c);
            else {
                this.onNewContextCreatedWhileDisabled(a, b, c);
                return null
            }
        };
        c.onBeforeContextStarted = function(a, b, c) {
            if (this.isEnabled()) return this.onBeforeContextStartedWhileEnabled(a, b, c);
            else {
                this.onBeforeContextStartedWhileDisabled(a, b, c);
                return null
            }
        };
        c.onAfterContextStarted = function(a, b, c, d) {
            c = c;
            if (this.isEnabled()) return this.onAfterContextStartedWhileEnabled(a, b, c, d);
            else {
                this.onAfterContextStartedWhileDisabled(a, b, c, d);
                return null
            }
        };
        c.onAfterContextEnded = function(a, b, c, d) {
            if (this.isEnabled()) {
                var e = c;
                this.onAfterContextEndedWhileEnabled(a, b, e, d)
            } else this.onAfterContextEndedWhileDisabled(a, b, c, d);
            this.$4 && !this.$5 && a.isRoot && (this.onDisable(), this.$4 = !1)
        };
        c.onDisable = function() {};
        c.onEnable = function() {};
        c.getBeforeID = function() {
            throw Error("unimplemented abstract method")
        };
        c.getAfterID = function() {
            throw Error("unimplemented abstract method")
        };
        c.isEnabled = function() {
            return this.$4
        };
        c.__getExpiryCallback = function() {
            var a = this,
                b = ++this.$1;
            this.$2[b] = !0;
            this.$3++;
            return function() {
                a.$2[b] && (delete a.$2[b], a.$3--, a.$3 === 0 && (a.$5 = !1))
            }
        };
        c.expressInterest = function() {
            var a = this.__getExpiryCallback();
            this.isEnabled() || (this.onEnable(), b("TimeSlice").catchUpOnDemandExecutionContextObservers(this));
            this.$4 = !0;
            this.$5 = !0;
            return a
        };
        return a
    }();
    e.exports = a
}), null);
__d("performanceAbsoluteNow", ["performance"], (function(a, b, c, d, e, f) {
    var g;
    if ((g || (g = b("performance"))).now && (g || (g = b("performance"))).timing && (g || (g = b("performance"))).timing.navigationStart) {
        var h = (g || (g = b("performance"))).timing.navigationStart;
        a = function() {
            return (g || (g = b("performance"))).now() + h
        }
    } else a = function() {
        return Date.now()
    };
    e.exports = a
}), null);
__d("Heartbeat", ["Env", "ExecutionContextObservers", "FBLogger", "LogBuffer", "OnDemandExecutionContextObserver", "TimeSlice", "performanceAbsoluteNow"], (function(a, b, c, d, e, f) {
    "use strict";
    var g, h, i;
    c = function(c) {
        babelHelpers.inheritsLoose(d, c);

        function d() {
            var a, b;
            for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++) e[f] = arguments[f];
            return (a = b = c.call.apply(c, [this].concat(e)) || this, b.$HeartbeatObserver1 = 33, b.$HeartbeatObserver2 = 60, b.$HeartbeatObserver3 = null, b.$HeartbeatObserver4 = null, b.$HeartbeatObserver5 = {}, b.$HeartbeatObserver6 = null, b.$HeartbeatObserver7 = [], b.$HeartbeatObserver8 = 1, b.$HeartbeatObserver9 = null, a) || babelHelpers.assertThisInitialized(b)
        }
        var e = d.prototype;
        e.onNewContextCreatedWhileEnabled = function(a, b, c) {
            return null
        };
        e.onBeforeContextStartedWhileEnabled = function(a, b, c) {
            return null
        };
        e.onAfterContextStartedWhileEnabled = function(a, b, c, d) {
            return null
        };
        e.onAfterContextEndedWhileEnabled = function(a, b, c, d) {
            b = a.absBeginTimeMs;
            c = a.absEndTimeMs;
            d = a.name;
            a = a.isRoot;
            a && b != null && c != null && (this.$HeartbeatObserver5[d] ? (this.$HeartbeatObserver10({
                type: "ignored_exec",
                timeMs: b
            }, !0), this.$HeartbeatObserver10({
                type: "ignored_exec",
                timeMs: c
            }, !1)) : (this.$HeartbeatObserver10({
                type: "exec",
                timeMs: b
            }, !0), this.$HeartbeatObserver10({
                type: "exec",
                timeMs: c
            }, !1)))
        };
        e.__getExpiryCallback = function() {
            var a = this,
                d = c.prototype.__getExpiryCallback.call(this),
                e = (g || (g = b("performanceAbsoluteNow")))();
            this.$HeartbeatObserver7.push([e, d]);
            return function() {
                d(), a.$HeartbeatObserver11()
            }
        };
        e.onEnable = function() {
            var c = (h || (h = b("Env"))).timeslice_heartbeat_config || {};
            this.$HeartbeatObserver1 = c.pollIntervalMs || this.$HeartbeatObserver1;
            this.$HeartbeatObserver2 = c.idleGapThresholdMs || this.$HeartbeatObserver2;
            this.$HeartbeatObserver5 = c.ignoredTimesliceNames || this.$HeartbeatObserver5;
            c = a.__fbNativeSetInterval || a.setInterval;
            this.$HeartbeatObserver4 = c(this.$HeartbeatObserver12.bind(this), this.$HeartbeatObserver1);
            c = (g || (g = b("performanceAbsoluteNow")))();
            this.$HeartbeatObserver3 = {
                type: "beat",
                timeMs: c
            };
            this.$HeartbeatObserver6 = c + this.$HeartbeatObserver1;
            this.$HeartbeatObserver9 = c
        };
        e.onDisable = function() {
            this.$HeartbeatObserver4 && clearInterval(this.$HeartbeatObserver4), this.$HeartbeatObserver4 = null
        };
        e.getBeforeID = function() {
            return (i || (i = b("ExecutionContextObservers"))).beforeIDs.HEARTBEAT
        };
        e.getAfterID = function() {
            return (i || (i = b("ExecutionContextObservers"))).afterIDs.HEARTBEAT
        };
        e.$HeartbeatObserver13 = function(a) {
            return a.type == "beat" || a.type == "ignored_exec"
        };
        e.$HeartbeatObserver10 = function(a, c) {
            if (this.$HeartbeatObserver3 == null) {
                b("FBLogger")("FIXME").mustfix("lastEvent should never be null");
                this.$HeartbeatObserver3 = a;
                return
            }
            var d = this.$HeartbeatObserver3.timeMs,
                e = a.timeMs;
            if (c) {
                c = this.$HeartbeatObserver6 + this.$HeartbeatObserver2;
                c = e > c;
                if (this.$HeartbeatObserver3.type === "exec") a.type === "exec" ? this.$HeartbeatObserver14(d, e, c ? "likely_btwn_exec" : "btwn_exec") : this.$HeartbeatObserver13(a) && this.$HeartbeatObserver14(d, e, c ? "likely_post_exec" : "post_exec");
                else if (this.$HeartbeatObserver13(this.$HeartbeatObserver3))
                    if (a.type === "exec") this.$HeartbeatObserver14(d, e, c ? "likely_pre_exec" : "pre_exec");
                    else if (this.$HeartbeatObserver13(a) && c) {
                    c = a.type === "beat" ? "delayed_beat" : "delayed_beat_btwn_ignored";
                    this.$HeartbeatObserver14(d, e, c)
                }
            }
            this.$HeartbeatObserver3 = a
        };
        e.$HeartbeatObserver14 = function(a, c, d) {
            a < c && b("LogBuffer").write("time_slice_heartbeat", {
                begin: a,
                end: c,
                id: this.$HeartbeatObserver8++,
                parentID: null,
                guard: "browser time: " + d,
                representsExecution: !1
            })
        };
        e.$HeartbeatObserver12 = function() {
            var a = (g || (g = b("performanceAbsoluteNow")))();
            this.$HeartbeatObserver11(a);
            this.$HeartbeatObserver10({
                type: "beat",
                timeMs: a
            }, !0);
            this.$HeartbeatObserver6 = a + this.$HeartbeatObserver1
        };
        e.$HeartbeatObserver11 = function(a) {
            a = a || (g || (g = b("performanceAbsoluteNow")))();
            while (this.$HeartbeatObserver7.length > 0) {
                var c = this.$HeartbeatObserver7[0],
                    d = c[0];
                c = c[1];
                if (a - d > k.MAX_SINGLE_INTEREST_TIME_MS) c(), this.$HeartbeatObserver7.shift();
                else break
            }
            d = this.$HeartbeatObserver9;
            a - d > k.MAX_ENABLE_TO_DISABLE_TIME_MS && this.$HeartbeatObserver15()
        };
        e.$HeartbeatObserver15 = function() {
            for (var a = this.$HeartbeatObserver7, b = Array.isArray(a), c = 0, a = b ? a : a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                var d;
                if (b) {
                    if (c >= a.length) break;
                    d = a[c++]
                } else {
                    c = a.next();
                    if (c.done) break;
                    d = c.value
                }
                d = d;
                d[0];
                d = d[1];
                d()
            }
            this.$HeartbeatObserver7 = []
        };
        return d
    }(b("OnDemandExecutionContextObserver"));
    var j = new c();
    b("TimeSlice").registerExecutionContextObserver(j);
    var k = {
        MAX_SINGLE_INTEREST_TIME_MS: 6e4,
        MAX_ENABLE_TO_DISABLE_TIME_MS: 4 * 6e4,
        get: function() {
            return j
        },
        enableHeartbeat: function() {},
        disablePageHeartbeat: function() {}
    };
    e.exports = k
}), 3);
__d("IntervalTrackingBoundedBuffer", ["CircularBuffer", "ErrorPubSub"], (function(a, b, c, d, e, f) {
    "use strict";
    var g, h = 5e3;
    a = function() {
        function a(a) {
            var c = this;
            this.$6 = 0;
            if (a != null) {
                if (a <= 0) throw new Error("Size for a buffer must be greater than zero.")
            } else a = h;
            this.$4 = a;
            this.$1 = new(b("CircularBuffer"))(a);
            this.$1.onEvict(function() {
                c.$6++
            });
            this.$2 = [];
            this.$3 = 1;
            this.$5 = 0
        }
        var c = a.prototype;
        c.open = function() {
            var a = this,
                b = this.$3++,
                c = !1,
                d, e = this.$5,
                f = {
                    id: b,
                    startIdx: e,
                    hasOverflown: function() {
                        return f.getOverflowSize() > 0
                    },
                    getOverflowSize: function() {
                        return d != null ? d : Math.max(a.$6 - e, 0)
                    },
                    close: function() {
                        if (c) return [];
                        else {
                            c = !0;
                            d = a.$6 - e;
                            return a.$7(b)
                        }
                    }
                };
            this.$2.push(f);
            return f
        };
        c.pushElement = function(a) {
            this.$2.length > 0 && (this.$1.write(a), this.$5++);
            return this
        };
        c.isActive = function() {
            return this.$2.length > 0
        };
        c.$8 = function(a) {
            return Math.max(a - this.$6, 0)
        };
        c.$7 = function(a) {
            var c, d, e, f;
            for (var h = 0; h < this.$2.length; h++) {
                var i = this.$2[h],
                    j = i.startIdx;
                i = i.id;
                i === a ? (e = h, f = j) : (d == null || j < d) && (d = j);
                (c == null || j < c) && (c = j)
            }
            if (e == null || c == null || f == null) {
                (g || (g = b("ErrorPubSub"))).reportError(new Error("messed up state inside IntervalTrackingBoundedBuffer"));
                return []
            }
            this.$2.splice(e, 1);
            i = this.$8(f);
            j = this.$1.read().slice(i);
            h = this.$8(d == null ? this.$5 : d) - this.$8(c);
            h > 0 && (this.$1.dropFirst(h), this.$6 += h);
            return j
        };
        return a
    }();
    e.exports = a
}), null);
__d("ProfilingCountersStore", ["IntervalTrackingBoundedBuffer"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = new(b("IntervalTrackingBoundedBuffer"))(),
        h = {
            getInstance: function() {
                return g
            },
            toMap: function(a) {
                var b = {};
                a.forEach(function(a) {
                    return b[a.getTimeSliceContextID()] = a
                });
                return b
            },
            getNestedTotals: function(a) {
                return h._accumulateOverNestedActiveCounters(a, function(a, b) {
                    h._addOnto(b, a.getActiveCounters().getTotals());
                    return b
                }, {})
            },
            _accumulateOverNestedActiveCounters: function(a, b, c) {
                c = c;
                a.hasActiveCounters() && (c = b(a, c));
                if (a.processedNestedContexts != null)
                    for (var a = a.processedNestedContexts, d = Array.isArray(a), e = 0, a = d ? a : a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                        var f;
                        if (d) {
                            if (e >= a.length) break;
                            f = a[e++]
                        } else {
                            e = a.next();
                            if (e.done) break;
                            f = e.value
                        }
                        f = f;
                        c = h._accumulateOverNestedActiveCounters(f, b, c)
                    }
                return c
            },
            _getMaximumAttribution: function(a, b) {
                if (a.length === 0) return null;
                for (var c = a, d = Array.isArray(c), e = 0, c = d ? c : c[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                    var f;
                    if (d) {
                        if (e >= c.length) break;
                        f = c[e++]
                    } else {
                        e = c.next();
                        if (e.done) break;
                        f = e.value
                    }
                    f = f;
                    if (b.propagatedAttributions && b.propagatedAttributions[f] != null) return f
                }
                f = null;
                e = null;
                for (var d = a, c = Array.isArray(d), a = 0, d = c ? d : d[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                    var g;
                    if (c) {
                        if (a >= d.length) break;
                        g = d[a++]
                    } else {
                        a = d.next();
                        if (a.done) break;
                        g = a.value
                    }
                    g = g;
                    if (b.newAttributions && b.newAttributions[g] != null) {
                        var h = b.newAttributions[g].newCounterIdx;
                        (e == null || h < e) && (f = g, e = h)
                    }
                }
                return f
            },
            getNestedTotalsByAttributions: function(a, b) {
                return h._accumulateOverNestedActiveCounters(a, function(a, c) {
                    var d = h._getMaximumAttribution(b, a);
                    if (d) {
                        d = h._getAttributedAndUnattributedForThisContext(d, a);
                        var e = d.attributed;
                        d = d.unattributed;
                        e != null && h._addOnto(c.attributed, e);
                        d != null && h._addOnto(c.unattributed, d)
                    } else h._addOnto(c.unattributed, a.getActiveCounters().getTotals());
                    return c
                }, {
                    attributed: {},
                    unattributed: {}
                })
            },
            _getAttributedAndUnattributedForThisContext: function(a, b) {
                var c = b.getActiveCounters().getTotals();
                if (b.propagatedAttributions != null && b.propagatedAttributions[a] != null) return {
                    attributed: c,
                    unattributed: null
                };
                else if (b.newAttributions != null && b.newAttributions[a] != null) {
                    b = b.newAttributions[a].snapshotAtStart;
                    if (b != null) {
                        a = Object.entries(b);
                        for (var d = 0; d < a.length; d++) {
                            var e = a[d],
                                f = e[0];
                            e = e[1];
                            e = c[f] - e;
                            e === 0 ? delete c[f] : c[f] = e
                        }
                        return {
                            attributed: c,
                            unattributed: b
                        }
                    } else return {
                        attributed: c,
                        unattributed: null
                    }
                } else return {
                    attributed: null,
                    unattributed: c
                }
            },
            _addOnto: function(a, b) {
                b = Object.entries(b);
                for (var c = 0; c < b.length; c++) {
                    var d = b[c],
                        e = d[0];
                    d = d[1];
                    a[e] = (a[e] || 0) + d
                }
            }
        };
    e.exports = h
}), null);
__d("ProfilingCounters", ["ErrorPubSub", "ExecutionContextObservers", "OnDemandExecutionContextObserver", "ProfilingCountersStore", "TimeSlice", "performanceAbsoluteNow"], (function(a, b, c, d, e, f) {
    var g, h, i, j;
    (g || (g = b("performanceAbsoluteNow")))();
    var k = {
            ALL: "ALL",
            ONLY_ON_CONTINUATIONS_AND_FIRST_EXEC: "ONLY_ON_CONTINUATIONS_AND_FIRST_EXEC"
        },
        l = 100,
        m = [],
        n = function(c) {
            "use strict";
            babelHelpers.inheritsLoose(a, c);

            function a() {
                return c.apply(this, arguments) || this
            }
            var d = a.prototype;
            d.onNewContextCreatedWhileEnabled = function(a, b, c) {
                return o.currentContext().getPropagatedContextForChild(!!(c && c.isContinuation))
            };
            d.onBeforeContextStartedWhileEnabled = function(a, b, c) {
                var d = c && c.propagateCounterAttribution,
                    e = null;
                if (a.executionNumber > 0 && b) {
                    var f = Object.entries(b);
                    for (var g = 0; g < f.length; g++) {
                        var h = f[g],
                            i = h[0];
                        h = h[1];
                        var j = h.propagationType;
                        j !== "ONLY_ON_CONTINUATIONS_AND_FIRST_EXEC" && (e = e || {}, e[i] = h)
                    }
                } else e = b;
                j = o.currentContext().getExecutionContext(!!(c && c.isContinuation), e);
                i = new o(!1, j, a.contextID);
                d != null && i.addAttribution(d, k.ALL);
                o.nestContext(i);
                return null
            };
            d.onAfterContextStartedWhileEnabled = function(a, b, c, d) {
                return null
            };
            d.onAfterContextEndedWhileEnabled = function(a, c, d, e) {
                c = o.unnestContext();
                a.isRoot && (h || (h = b("ProfilingCountersStore"))).getInstance().pushElement(c)
            };
            d.getBeforeID = function() {
                return (i || (i = b("ExecutionContextObservers"))).beforeIDs.PROFILING_COUNTERS
            };
            d.getAfterID = function() {
                return (i || (i = b("ExecutionContextObservers"))).afterIDs.PROFILING_COUNTERS
            };
            d.onDisable = function() {
                o.resetState()
            };
            return a
        }(b("OnDemandExecutionContextObserver")),
        o = function() {
            "use strict";
            a.getObserver = function() {
                a.$2 || (a.$2 = new n());
                return a.$2
            };
            a.wrapInSingleContext = function(b) {
                var c = new a(!1, null, 0);
                b.forEach(function(a) {
                    return c.$3(a, !1)
                });
                return c
            };
            a.startTimingInContext = function(b, c) {
                if (!a.getObserver().isEnabled()) return null;
                for (var d = 0; d < m.length; d++) {
                    var e = m[d];
                    if (e.getTimeSliceContextID() === c) return e.getActiveCounters().startTiming(b)
                }
                return null
            };
            a.stopTimingInContext = function(b, c) {
                if (!a.getObserver().isEnabled()) return;
                for (var d = 0; d < m.length; d++) {
                    var e = m[d];
                    if (e.getTimeSliceContextID() === c) {
                        e.getActiveCounters().stopTiming(b);
                        return
                    }
                }
                return
            };
            a.startTiming = function(b) {
                return a.currentContext().getActiveCounters().startTiming(b)
            };
            a.stopTiming = function(b) {
                return a.currentContext().getActiveCounters().stopTiming(b)
            };
            a.incrementCounter = function(b, c) {
                a.currentContext().getActiveCounters().incrementCounter(b, c)
            };
            a.currentContext = function() {
                return m[m.length - 1]
            };

            function a(a, b, c) {
                this.isGlobal = a, this.propagatedAttributions = b, this.newAttributions = null, this.active = null, this.processedNestedContexts = null, this.newAttributionsCount = 0, this.$1 = c
            }
            var b = a.prototype;
            b.addAttribution = function(a, b) {
                this.$4(a) || (this.newAttributions == null && (this.newAttributions = {}), this.newAttributions[a] = {
                    newCounterIdx: this.newAttributionsCount,
                    propagationType: b,
                    snapshotAtStart: this.hasActiveCounters() ? this.getActiveCounters().getTotals() : null
                }, this.newAttributionsCount++);
                return this
            };
            b.$5 = function(a, b) {
                return b != null && b[a] != null
            };
            b.$4 = function(a) {
                return this.$5(a, this.propagatedAttributions) || this.$5(a, this.newAttributions)
            };
            a.$6 = function(a, b, c) {
                for (var d = 0; d < c.length; d++) {
                    var e = c[d],
                        f = e[0];
                    e = e[1];
                    var g = e.propagationType;
                    (g === k.ALL || b) && (a[f] = e)
                }
            };
            b.getPropagatedContextForChild = function(b) {
                var c;
                if (this.newAttributions == null)
                    if (this.propagatedAttributions == null || b) return this.propagatedAttributions;
                    else {
                        c = Object.entries(this.propagatedAttributions);
                        var d = !0;
                        for (var e = 0; e < c.length; e++) {
                            var f = c[e];
                            f[0];
                            f = f[1];
                            if (f.propagationType === k.ONLY_ON_CONTINUATIONS_AND_FIRST_EXEC) {
                                d = !1;
                                break
                            }
                        }
                        if (d) return this.propagatedAttributions
                    }
                f = {};
                this.propagatedAttributions != null && a.$6(f, b, c || Object.entries(this.propagatedAttributions));
                this.newAttributions != null && a.$6(f, b, Object.entries(this.newAttributions));
                return f
            };
            b.getExecutionContext = function(b, c) {
                var d = b ? this.getPropagatedContextForChild(b) || {} : {};
                c && a.$6(d, b, Object.entries(c));
                return d
            };
            b.getActiveCounters = function() {
                this.active == null && (this.active = new p());
                return this.active
            };
            b.$7 = function() {
                return this.isGlobal
            };
            b.hasActiveCounters = function() {
                return this.active != null
            };
            a.nestContext = function(a) {
                m.push(a)
            };
            a.unnestContext = function() {
                if (m.length === 1) throw new Error("popping off the global context");
                var b = m.pop();
                if (b.hasActiveCounters()) var c = b.getActiveCounters();
                (b.hasActiveCounters() || b.processedNestedContexts != null) && a.currentContext().$3(b);
                return b
            };
            b.$3 = function(a, b) {
                b === void 0 && (b = !0);
                if (this.$7()) return;
                else b && this.processedNestedContexts != null && this.processedNestedContexts.length >= l || (this.processedNestedContexts = this.processedNestedContexts || [], this.processedNestedContexts.push(a))
            };
            b.getTimeSliceContextID = function() {
                return this.$1
            };
            a.resetState = function() {
                m = [new a(!0, null, 0)]
            };
            a.getHandle = function() {
                return q
            };
            return a
        }();
    o.AttributionPropagation = k;
    var p = function() {
        "use strict";

        function a() {
            this.$1 = null, this.$2 = null, this.$3 = null, this.$4 = null
        }
        var c = a.prototype;
        c.startTiming = function(c) {
            var d = a.$5++;
            c = {
                value: 0,
                counter: c,
                id: d,
                lastStartTime: 0
            };
            var e = this.$1 || [];
            this.$2 = this.$2 || {};
            this.$2[d] = e.length;
            e.push(c);
            var f = (g || (g = b("performanceAbsoluteNow")))();
            c.lastStartTime = f;
            if (e.length > 1) {
                c = e[e.length - 2];
                c.value += f - c.lastStartTime
            }
            this.$1 = e;
            return d
        };
        c.stopTiming = function(a) {
            var c = (g || (g = b("performanceAbsoluteNow")))(),
                d = this.$2,
                e = this.$1;
            if (d == null || e == null) {
                (j || (j = b("ErrorPubSub"))).reportError(new Error("token does not match the counter context"));
                return 0
            }
            var f = d[a];
            delete d[a];
            if (f == null || e[f] == null) return 0;
            a = null;
            var h = 0;
            while (e.length - 1 > f) {
                var i = e.pop();
                h += i.value;
                delete d[i.id];
                a == null && i.lastStartTime != null && (a = i.lastStartTime)
            }
            i = e.pop();
            i.value += c - (a || i.lastStartTime);
            i.value += h;
            f = this.$4 || {};
            f[i.counter] = f[i.counter] || 0;
            f[i.counter] += i.value;
            e.length > 0 && (e[e.length - 1].lastStartTime = c);
            this.$1 = e;
            this.$4 = f;
            this.$2 = d;
            return i.value
        };
        c.incrementCounter = function(a, b) {
            var c = this.$3 || {};
            c[a] = c[a] || 0;
            c[a] += b;
            this.$3 = c
        };
        c.getTotals = function() {
            return babelHelpers["extends"]({}, this.$4 || {}, this.$3 || {})
        };
        c.openCounterCount = function() {
            return this.$1 != null ? this.$1.length : 0
        };
        return a
    }();
    p.$5 = 1;
    m.push(new o(!0, null, 0));
    b("TimeSlice").registerExecutionContextObserver(o.getObserver());
    var q = o.getObserver().expressInterest();
    a.ProfilingCounters = o;
    e.exports = o
}), 3);
__d("ArtilleryRequestDataCollector", ["Env", "FBLogger", "Heartbeat", "ProfilingCounters", "ProfilingCountersStore", "TimeSlice"], (function(a, b, c, d, e, f) {
    "use strict";
    var g, h;
    a = function() {
        function a(a) {
            a === void 0 && (a = !1), this.$1 = null, this.$2 = !1, this.$3 = null, this.$4 = null, this.$5 = null, this.$2 = a
        }
        var c = a.prototype;
        c.start = function() {
            this.$3 = (g || (g = b("ProfilingCountersStore"))).getInstance().open();
            var a = (h || (h = b("Env"))).timeslice_heartbeat_config || {},
                c = a.isHeartbeatEnabled;
            a = a.isArtilleryOn;
            c && (!this.$2 || a) && this.enablePageHeartbeat();
            this.$2 ? this.$4 = b("ProfilingCounters").getHandle() : this.$4 = b("ProfilingCounters").getObserver().expressInterest();
            this.$5 = b("TimeSlice").getBuffer().open();
            return this
        };
        c.enablePageHeartbeat = function() {
            this.$1 == null && (this.$1 = b("Heartbeat").get().expressInterest())
        };
        c.finish = function() {
            (!this.$3 || !this.$4 || !this.$5 || !this.$1) && b("FBLogger")("artillery").warn("Missing handles. PCData: %s, PCOnDemand: %s, TS: %s, heartbeat: %s", this.$3 == null, this.$4 == null, this.$5 == null, this.$1 == null);
            return this.$6()
        };
        c.disable = function() {
            this.$6()
        };
        c.$6 = function() {
            var a = this.$3 ? this.$3.close() : [];
            this.$3 = null;
            var b = this.$5 ? this.$5.close() : [];
            this.$5 = null;
            this.$4 && this.$4();
            this.$4 = null;
            this.$1 && this.$1();
            this.$1 = null;
            return {
                profilingCountersData: a,
                timeSliceData: b
            }
        };
        return a
    }();
    e.exports = a
}), null);
__d("clearInterval", ["requireCond", "cr:1003267"], (function(a, b, c, d, e, f) {
    e.exports = b("cr:1003267")
}), null);
__d("setInterval", ["requireCond", "cr:896461"], (function(a, b, c, d, e, f) {
    e.exports = b("cr:896461")
}), null);
__d("ArtilleryOnUntilOffLogging", ["ArtilleryRequestDataCollector", "Env", "clearInterval", "performanceAbsoluteNow", "setInterval"], (function(a, b, c, d, e, f) {
    "use strict";
    var g, h, i = null,
        j = null;

    function k() {
        return window.CavalryLogger && window.CavalryLogger.disableArtilleryOnUntilOffLogging || !!(g || (g = b("Env"))).disable_profiling
    }
    var l = null,
        m = {
            disable: function() {
                l == null && (l = (h || (h = b("performanceAbsoluteNow")))()), i && (b("clearInterval")(i), i = null), j && (j.disable(), j = null)
            },
            finish: function() {
                i && (b("clearInterval")(i), i = null);
                if (j) {
                    var a = j.finish();
                    j = null;
                    return a
                }
                return {
                    sampleRecorder: null,
                    profilingCountersData: [],
                    userTimingProfilerData: null,
                    timeSliceData: []
                }
            },
            lastDisableTime: function() {
                return l
            },
            onNewPageLoad: function(a) {
                a === void 0 && (a = !1), a || (m.disable(), l = null), j = new(b("ArtilleryRequestDataCollector"))(a), j.start()
            },
            enablePageHeartbeat: function() {
                j && j.enablePageHeartbeat()
            }
        };
    !k() ? (m.onNewPageLoad(!0), i = b("setInterval")(function() {
        k() && m.disable()
    }, 250)) : l = (h || (h = b("performanceAbsoluteNow")))();
    e.exports = m
}), 3);
__d("$-core", ["TAALOpcodes", "err"], (function(a, b, c, d, e, f) {
    function a(a) {
        return g(a, typeof a === "string" ? document.getElementById(a) : a)
    }

    function c(a) {
        return g(a, typeof a === "string" ? document.getElementById(a) : a)
    }

    function g(a, c) {
        if (!c) {
            a = b("err")('Tried to get element with id of "%s" but it is not present on the page', String(a));
            a.taalOpcodes = a.taalOpcodes || [];
            a.taalOpcodes = [b("TAALOpcodes").PREVIOUS_FILE];
            throw a
        }
        return c
    }
    a.fromIDOrElement = c;
    e.exports = a
}), null);
__d("$", ["$-core"], (function(a, b, c, d, e, f) {
    e.exports = b("$-core")
}), null);
__d("TAAL", ["TAALOpcodes"], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        blameToPreviousFile: function(a) {
            return this.applyOpcodes(a, [b("TAALOpcodes").PREVIOUS_FILE])
        },
        blameToPreviousFrame: function(a) {
            return this.applyOpcodes(a, [b("TAALOpcodes").PREVIOUS_FRAME])
        },
        blameToPreviousDirectory: function(a) {
            return this.applyOpcodes(a, [b("TAALOpcodes").PREVIOUS_DIR])
        },
        applyOpcodes: function(a, b) {
            return b && b.length ? a + " TAAL[" + b.join(";") + "]" : a
        }
    };
    e.exports = a
}), null);
__d("ex", ["ErrorSerializer"], (function(a, b, c, d, e, f) {
    function a(a) {
        for (var c = arguments.length, d = new Array(c > 1 ? c - 1 : 0), e = 1; e < c; e++) d[e - 1] = arguments[e];
        var f = d.map(function(a) {
            return String(a)
        });
        return b("ErrorSerializer").stringify({
            message: a,
            params: f
        })
    }
    e.exports = a
}), null);
__d("sprintf", [], (function(a, b, c, d, e, f) {
    function a(a) {
        for (var b = arguments.length, c = new Array(b > 1 ? b - 1 : 0), d = 1; d < b; d++) c[d - 1] = arguments[d];
        var e = 0;
        return a.replace(/%s/g, function() {
            return String(c[e++])
        })
    }
    e.exports = a
}), null);
__d("invariant", ["Env", "TAAL", "ex", "sprintf"], (function(a, b, c, d, e, f) {
    "use strict";
    var g, h = b("ex");

    function a(a, c) {
        if (!a) {
            var d = c;
            for (var e = arguments.length, f = new Array(e > 2 ? e - 2 : 0), g = 2; g < e; g++) f[g - 2] = arguments[g];
            if (typeof d === "number") {
                var j = i(d, f),
                    k = j.message,
                    l = j.decoderLink;
                d = k;
                f.unshift(l)
            } else if (d === void 0) {
                d = "Invariant: ";
                for (var m = 0; m < f.length; m++) d += "%s,"
            }
            d = b("TAAL").blameToPreviousFrame(d);
            var n = new Error(h.apply(void 0, [d].concat(f)));
            n.name = "Invariant Violation";
            n.messageWithParams = [d].concat(f);
            throw n
        }
    }

    function i(a, c) {
        var d = "Minified invariant #" + a + "; %s";
        c.length > 0 && (d += " Params: " + c.map(function(a) {
            return "%s"
        }).join(", "));
        a = (g || (g = b("Env"))).show_invariant_decoder === !0 ? "visit " + j(a, c) + " to see the full message." : "";
        return {
            message: d,
            decoderLink: a
        }
    }

    function j(a, b) {
        a = "https://our.intern.facebook.com/intern/invariant/" + a + "/";
        b.length > 0 && (a += "?" + b.map(function(a, b) {
            return "args[" + b + "]=" + encodeURIComponent(String(a))
        }).join("&"));
        return a
    }
    e.exports = a
}), null);
__d("ArbiterToken", ["invariant"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = function() {
        function a(a, b) {
            this.unsubscribe = function() {
                for (var a = 0; a < this.$2.length; a++) this.$2[a].remove();
                this.$2.length = 0
            }, this.$1 = a, this.$2 = b
        }
        var b = a.prototype;
        b.isForArbiterInstance = function(a) {
            this.$1 || g(0, 2506);
            return this.$1 === a
        };
        return a
    }();
    e.exports = a
}), null);
__d("ErrorGuard", ["Env", "ErrorGuardState", "ErrorNormalizeUtils", "ErrorPubSub", "ErrorSerializer"], (function(a, b, c, d, e, f) {
    "use strict";
    var g, h, i = "<anonymous guard>";
    b("ErrorGuardState");
    b("ErrorNormalizeUtils");
    g || (g = b("ErrorPubSub"));
    var j = {
        applyWithGuard: function(a, c, d, e) {
            b("ErrorGuardState").pushGuard({
                name: (e == null ? void 0 : e.name) || (a.name ? "func_name:" + a.name : null) || i,
                deferredSource: e == null ? void 0 : e.deferredSource
            });
            if ((h || (h = b("Env"))).nocatch) try {
                return a.apply(c, d)
            } finally {
                b("ErrorGuardState").popGuard()
            }
            try {
                return Function.prototype.apply.call(a, c, d)
            } catch (h) {
                c = (c = e) != null ? c : {};
                var f = c.deferredSource,
                    j = c.onError;
                c = c.onNormalizedError;
                var k = h != null && typeof h === "object" ? h : new Error("applyWithGuard caught non-object");
                b("ErrorSerializer").aggregateError(k, {
                    deferredSource: f,
                    project: (f = e == null ? void 0 : e.project) != null ? f : "ErrorGuard",
                    type: (f = e == null ? void 0 : e.errorType) != null ? f : "fatal"
                });
                e = b("ErrorNormalizeUtils").normalizeError(k);
                e.loggingSource = "GUARDED";
                if (k == null && a) try {
                    e.extra[a.toString().substring(0, 100)] = "function", d != null && d.length && (e.extra[Array.from(d).toString().substring(0, 100)] = "args")
                } catch (a) {}
                f = b("ErrorGuardState").cloneGuardList();
                e.guard = f[0];
                e.guardList = f;
                j && j(k);
                c && c(e);
                (g || (g = b("ErrorPubSub"))).reportNormalizedError(e)
            } finally {
                b("ErrorGuardState").popGuard()
            }
        },
        guard: function(a, b) {
            function c() {
                for (var c = arguments.length, d = new Array(c), e = 0; e < c; e++) d[e] = arguments[e];
                return j.applyWithGuard(a, this, d, b)
            }
            a.__SMmeta && (c.__SMmeta = a.__SMmeta);
            return c
        },
        inGuard: function() {
            return b("ErrorGuardState").inGuard()
        }
    };
    e.exports = a.ErrorGuard = j
}), 3);
__d("CallbackDependencyManager", ["ErrorGuard"], (function(a, b, c, d, e, f) {
    var g;
    a = function() {
        "use strict";

        function a() {
            this.$1 = new Map(), this.$2 = new Map(), this.$3 = 1, this.$4 = new Map()
        }
        var c = a.prototype;
        c.$5 = function(a, b) {
            var c = 0,
                d = new Set();
            for (var e = 0, f = b.length; e < f; e++) d.add(b[e]);
            for (var b = d.keys(), e = Array.isArray(b), f = 0, b = e ? b : b[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                if (e) {
                    if (f >= b.length) break;
                    d = b[f++]
                } else {
                    f = b.next();
                    if (f.done) break;
                    d = f.value
                }
                d = d;
                if (this.$4.get(d)) continue;
                c++;
                var g = this.$1.get(d);
                g === void 0 && (g = new Map(), this.$1.set(d, g));
                g.set(a, (g.get(a) || 0) + 1)
            }
            return c
        };
        c.$6 = function(a) {
            a = this.$1.get(a);
            if (!a) return;
            for (var c = a.entries(), d = Array.isArray(c), e = 0, c = d ? c : c[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                var f;
                if (d) {
                    if (e >= c.length) break;
                    f = c[e++]
                } else {
                    e = c.next();
                    if (e.done) break;
                    f = e.value
                }
                f = f;
                var h = f[0];
                f = f[1] - 1;
                a.set(h, f);
                f <= 0 && a["delete"](h);
                f = this.$2.get(h);
                if (f !== void 0) {
                    f.$7--;
                    if (f.$7 <= 0) {
                        f = f.$8;
                        this.$2["delete"](h);
                        (g || (g = b("ErrorGuard"))).applyWithGuard(f, null, [])
                    }
                }
            }
        };
        c.addDependenciesToExistingCallback = function(a, b) {
            var c = this.$2.get(a);
            if (!c) return null;
            b = this.$5(a, b);
            c.$7 += b;
            return a
        };
        c.isPersistentDependencySatisfied = function(a) {
            return !!this.$4.get(a)
        };
        c.satisfyPersistentDependency = function(a) {
            this.$4.set(a, 1), this.$6(a)
        };
        c.satisfyNonPersistentDependency = function(a) {
            var b = this.$4.get(a) === 1;
            b || this.$4.set(a, 1);
            this.$6(a);
            b || this.$4["delete"](a)
        };
        c.registerCallback = function(a, c) {
            var d = this.$3;
            this.$3++;
            c = this.$5(d, c);
            if (c === 0) {
                (g || (g = b("ErrorGuard"))).applyWithGuard(a, null, []);
                return null
            }
            this.$2.set(d, {
                $8: a,
                $7: c
            });
            return d
        };
        return a
    }();
    e.exports = a
}), null);
__d("EventSubscription", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = function(a) {
        var b = this;
        this.remove = function() {
            b.subscriber && (b.subscriber.removeSubscription(b), b.subscriber = null)
        };
        this.subscriber = a
    };
    e.exports = a
}), null);
__d("EmitterSubscription", ["EventSubscription"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function(a) {
        babelHelpers.inheritsLoose(b, a);

        function b(b, c, d) {
            b = a.call(this, b) || this;
            b.listener = c;
            b.context = d;
            return b
        }
        return b
    }(b("EventSubscription"));
    e.exports = a
}), null);
__d("EventSubscriptionVendor", ["invariant"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = function() {
        function a() {
            this.$1 = {}
        }
        var b = a.prototype;
        b.addSubscription = function(a, b) {
            b.subscriber === this || g(0, 2828);
            this.$1[a] || (this.$1[a] = []);
            var c = this.$1[a].length;
            this.$1[a].push(b);
            b.eventType = a;
            b.key = c;
            return b
        };
        b.removeAllSubscriptions = function(a) {
            a === void 0 ? this.$1 = {} : delete this.$1[a]
        };
        b.removeSubscription = function(a) {
            var b = a.eventType;
            a = a.key;
            b = this.$1[b];
            b && delete b[a]
        };
        b.getSubscriptionsForType = function(a) {
            return this.$1[a]
        };
        return a
    }();
    e.exports = a
}), null);
__d("emptyFunction", [], (function(a, b, c, d, e, f) {
    function a(a) {
        return function() {
            return a
        }
    }
    b = function() {};
    b.thatReturns = a;
    b.thatReturnsFalse = a(!1);
    b.thatReturnsTrue = a(!0);
    b.thatReturnsNull = a(null);
    b.thatReturnsThis = function() {
        return this
    };
    b.thatReturnsArgument = function(a) {
        return a
    };
    e.exports = b
}), null);
__d("BaseEventEmitter", ["EmitterSubscription", "ErrorGuard", "EventSubscriptionVendor", "emptyFunction", "unrecoverableViolation"], (function(a, b, c, d, e, f) {
    var g;
    a = function() {
        "use strict";

        function a() {
            this.$2 = new(b("EventSubscriptionVendor"))(), this.$1 = null
        }
        var c = a.prototype;
        c.addListener = function(a, c, d) {
            return this.$2.addSubscription(a, new(b("EmitterSubscription"))(this.$2, c, d))
        };
        c.once = function(a, b, c) {
            var d = this;
            return this.addListener(a, function() {
                d.removeCurrentListener(), b.apply(c, arguments)
            })
        };
        c.removeAllListeners = function(a) {
            this.$2.removeAllSubscriptions(a)
        };
        c.removeCurrentListener = function() {
            if (!this.$1) throw b("unrecoverableViolation")("Not in an emitting cycle; there is no current subscription", "emitter");
            this.$2.removeSubscription(this.$1)
        };
        c.listeners = function(a) {
            a = this.$2.getSubscriptionsForType(a);
            return a ? a.filter(b("emptyFunction").thatReturnsTrue).map(function(a) {
                return a.listener
            }) : []
        };
        c.emit = function(a) {
            var b = this.$2.getSubscriptionsForType(a);
            if (b) {
                var c = Object.keys(b),
                    d;
                for (var e = 0; e < c.length; e++) {
                    var f = c[e],
                        g = b[f];
                    if (g) {
                        this.$1 = g;
                        if (d == null) {
                            d = [g, a];
                            for (var h = 0, i = arguments.length <= 1 ? 0 : arguments.length - 1; h < i; h++) d[h + 2] = h + 1 < 1 || arguments.length <= h + 1 ? void 0 : arguments[h + 1]
                        } else d[0] = g;
                        this.__emitToSubscription.apply(this, d)
                    }
                }
                this.$1 = null
            }
        };
        c.__emitToSubscription = function(a, c) {
            for (var d = arguments.length, e = new Array(d > 2 ? d - 2 : 0), f = 2; f < d; f++) e[f - 2] = arguments[f];
            (g || (g = b("ErrorGuard"))).applyWithGuard(a.listener, a.context, e, {
                name: "EventEmitter " + c + " event"
            })
        };
        return a
    }();
    e.exports = a
}), null);
__d("EventEmitter", ["BaseEventEmitter"], (function(a, b, c, d, e, f) {
    a = function(a) {
        "use strict";
        babelHelpers.inheritsLoose(b, a);

        function b() {
            return a.apply(this, arguments) || this
        }
        return b
    }(b("BaseEventEmitter"));
    e.exports = a
}), null);
__d("EventEmitterWithHolding", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        function a(a, b) {
            this.$2 = a, this.$3 = b, this.$1 = null, this.$5 = [], this.$4 = 0
        }
        var b = a.prototype;
        b.addListener = function(a, b, c) {
            return this.$2.addListener(a, b, c)
        };
        b.once = function(a, b, c) {
            return this.$2.once(a, b, c)
        };
        b.addRetroactiveListener = function(a, b, c) {
            var d = this.$2.addListener(a, b, c),
                e = this.$5;
            e.push(!1);
            this.$4++;
            this.$3.emitToListener(a, b, c);
            this.$4--;
            e[e.length - 1] && d.remove();
            e.pop();
            return d
        };
        b.removeAllListeners = function(a) {
            this.$2.removeAllListeners(a)
        };
        b.removeCurrentListener = function() {
            if (this.$4) {
                var a = this.$5;
                a[a.length - 1] = !0
            } else this.$2.removeCurrentListener()
        };
        b.listeners = function(a) {
            return this.$2.listeners(a)
        };
        b.emit = function(a) {
            var b;
            for (var c = arguments.length, d = new Array(c > 1 ? c - 1 : 0), e = 1; e < c; e++) d[e - 1] = arguments[e];
            (b = this.$2).emit.apply(b, [a].concat(d))
        };
        b.emitAndHold = function(a) {
            var b, c;
            for (var d = arguments.length, e = new Array(d > 1 ? d - 1 : 0), f = 1; f < d; f++) e[f - 1] = arguments[f];
            this.$1 = (b = this.$3).holdEvent.apply(b, [a].concat(e));
            (c = this.$2).emit.apply(c, [a].concat(e));
            this.$1 = null
        };
        b.releaseCurrentEvent = function() {
            this.$1 != null ? this.$3.releaseEvent(this.$1) : this.$4 > 0 && this.$3.releaseCurrentEvent()
        };
        b.releaseHeldEventType = function(a) {
            this.$3.releaseEventType(a)
        };
        return a
    }();
    e.exports = a
}), null);
__d("EventHolder", ["invariant"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = function() {
        function a() {
            this.$1 = {}, this.$2 = []
        }
        var b = a.prototype;
        b.holdEvent = function(a) {
            this.$1[a] = this.$1[a] || [];
            var b = this.$1[a],
                c = {
                    eventType: a,
                    index: b.length
                };
            for (var d = arguments.length, e = new Array(d > 1 ? d - 1 : 0), f = 1; f < d; f++) e[f - 1] = arguments[f];
            b.push(e);
            return c
        };
        b.emitToListener = function(a, b, c) {
            var d = this,
                e = this.$1[a];
            if (!e) return;
            e.forEach(function(e, f) {
                if (!e) return;
                d.$2.push({
                    eventType: a,
                    index: f
                });
                b.apply(c, e);
                d.$2.pop()
            })
        };
        b.releaseCurrentEvent = function() {
            this.$2.length || g(0, 1764), this.releaseEvent(this.$2[this.$2.length - 1])
        };
        b.releaseEvent = function(a) {
            delete this.$1[a.eventType][a.index]
        };
        b.releaseEventType = function(a) {
            this.$1[a] = []
        };
        return a
    }();
    e.exports = a
}), null);
__d("Arbiter", ["invariant", "ArbiterToken", "CallbackDependencyManager", "ErrorGuard", "EventEmitter", "EventEmitterWithHolding", "EventHolder"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h;

    function i(a) {
        return Array.isArray(a) ? a : [a]
    }

    function j(a) {
        return a instanceof k || a === k ? a : k
    }
    var k = function() {
            function a() {
                var a = new(b("EventEmitter"))();
                this.$3 = new l();
                this.$2 = new(b("EventEmitterWithHolding"))(a, this.$3);
                this.$1 = new(b("CallbackDependencyManager"))();
                this.$4 = []
            }
            var c = a.prototype;
            c.subscribe = function(a, c, d) {
                a = i(a);
                a.forEach(function(a) {
                    a && typeof a === "string" || g(0, 1966, a)
                });
                typeof c === "function" || g(0, 1967, c);
                d = d || "all";
                d === "new" || d === "all" || g(0, 1968, d);
                a = a.map(function(a) {
                    var b = this.$5.bind(this, c, a);
                    b.__SMmeta = c.__SMmeta;
                    if (d === "new") return this.$2.addListener(a, b);
                    this.$4.push({});
                    a = this.$2.addRetroactiveListener(a, b);
                    this.$4.pop();
                    return a
                }, this);
                return new(b("ArbiterToken"))(this, a)
            };
            c.$5 = function(a, c, d) {
                var e = this.$4[this.$4.length - 1];
                if (e[c] === !1) return;
                a = (h || (h = b("ErrorGuard"))).applyWithGuard(a, null, [c, d]);
                a === !1 && this.$2.releaseCurrentEvent();
                e[c] = a
            };
            c.unsubscribeCurrentSubscription = function() {
                this.$2.removeCurrentListener()
            };
            c.releaseCurrentPersistentEvent = function() {
                this.$2.releaseCurrentEvent()
            };
            c.subscribeOnce = function(a, b, c) {
                var d = this;
                a = this.subscribe(a, function(a, c) {
                    d.unsubscribeCurrentSubscription();
                    return b(a, c)
                }, c);
                return a
            };
            c.unsubscribe = function(a) {
                a.isForArbiterInstance(this) || g(0, 1969), a.unsubscribe()
            };
            c.inform = function(a, b, c) {
                var d = Array.isArray(a);
                a = i(a);
                c = c || "event";
                var e = c === "state" || c === "persistent";
                this.$4.push({});
                for (var f = 0; f < a.length; f++) {
                    var h = a[f];
                    h || g(0, 1970, h);
                    this.$3.setHoldingBehavior(h, c);
                    this.$2.emitAndHold(h, b);
                    this.$6(h, b, e)
                }
                h = this.$4.pop();
                return d ? h : h[a[0]]
            };
            c.query = function(a) {
                var b = this.$3.getHoldingBehavior(a);
                !b || b === "state" || g(0, 1971, a);
                b = null;
                this.$3.emitToListener(a, function(a) {
                    b = a
                });
                return b
            };
            c.registerCallback = function(a, b) {
                if (typeof a === "function") return this.$1.registerCallback(a, b);
                else return this.$1.addDependenciesToExistingCallback(a, b)
            };
            c.$6 = function(a, b, c) {
                if (b === null) return;
                c ? this.$1.satisfyPersistentDependency(a) : this.$1.satisfyNonPersistentDependency(a)
            };
            a.subscribe = function(b, c, d) {
                return a.prototype.subscribe.apply(j(this), arguments)
            };
            a.unsubscribeCurrentSubscription = function() {
                return a.prototype.unsubscribeCurrentSubscription.apply(j(this))
            };
            a.releaseCurrentPersistentEvent = function() {
                return a.prototype.releaseCurrentPersistentEvent.apply(j(this))
            };
            a.subscribeOnce = function(b, c, d) {
                return a.prototype.subscribeOnce.apply(j(this), arguments)
            };
            a.unsubscribe = function(b) {
                return a.prototype.unsubscribe.apply(j(this), arguments)
            };
            a.inform = function(b, c, d) {
                return a.prototype.inform.apply(j(this), arguments)
            };
            a.informSingle = function(b, c, d) {
                return a.prototype.inform.apply(j(this), arguments)
            };
            a.query = function(b) {
                return a.prototype.query.apply(j(this), arguments)
            };
            a.registerCallback = function(b, c) {
                return a.prototype.registerCallback.apply(j(this), arguments)
            };
            a.$6 = function(b, c, d) {
                return a.prototype.$6.apply(j(this), arguments)
            };
            a.$5 = function(b, c, d) {
                return a.prototype.$5.apply(j(this), arguments)
            };
            return a
        }(),
        l = function(b) {
            babelHelpers.inheritsLoose(a, b);

            function a() {
                var a;
                a = b.call(this) || this;
                a.$ArbiterEventHolder1 = {};
                return a
            }
            var c = a.prototype;
            c.setHoldingBehavior = function(a, b) {
                this.$ArbiterEventHolder1[a] = b
            };
            c.getHoldingBehavior = function(a) {
                return this.$ArbiterEventHolder1[a]
            };
            c.holdEvent = function(a) {
                var c = this.$ArbiterEventHolder1[a];
                c !== "persistent" && this.$ArbiterEventHolder2(a);
                if (c !== "event") {
                    var d;
                    for (var e = arguments.length, f = new Array(e > 1 ? e - 1 : 0), g = 1; g < e; g++) f[g - 1] = arguments[g];
                    return (d = b.prototype.holdEvent).call.apply(d, [this, a].concat(f))
                }
                return void 0
            };
            c.$ArbiterEventHolder2 = function(a) {
                this.emitToListener(a, this.releaseCurrentEvent, this)
            };
            c.releaseEvent = function(a) {
                a && b.prototype.releaseEvent.call(this, a)
            };
            return a
        }(b("EventHolder"));
    k.call(k);
    e.exports = k
}), null);
__d("BigPipeInstance", [], (function(a, b, c, d, e, f) {
    "use strict";
    var g = null;
    a = {
        Events: {
            init: "BigPipe/init",
            tti: "tti_bigpipe",
            displayed: "all_pagelets_displayed",
            loaded: "all_pagelets_loaded"
        },
        setCurrentInstance_DO_NOT_USE: function(a) {
            g = a
        },
        getCurrentInstance: function() {
            return g
        }
    };
    e.exports = a
}), null);
__d("requireWeak", [], (function(a, b, c, d, e, f) {
    function a(a, b) {
        d && d.call(null, [a], b)
    }
    e.exports = a
}), null);
__d("gkx", ["invariant", "emptyFunction", "requireWeak"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = {},
        i = {};

    function a(a) {
        var c = h[a];
        c != null || g(0, 3444, a);
        i[a] || (i[a] = !0, b("requireWeak")("Banzai", function(b) {
            return b.post("gk2_exposure", {
                identifier: a,
                hash: c.hash
            })
        }));
        return c.result
    }
    a.oculus = function(a) {
        throw new Error("gkx: Unexpected gkx.oculus call.")
    };
    a.work_company = function(a) {
        throw new Error("gkx: Unexpected gkx.work_company call.")
    };
    a.session = function(a) {
        throw new Error("gkx: Unexpected gkx.session call.")
    };
    a.fb_loggedout = function(a) {
        throw new Error("gkx: Unexpected gkx.fb_loggedout call.")
    };
    a.candidate_portal = function(a) {
        throw new Error("gkx: Unexpected gkx.candidate_portal call.")
    };
    a.add = function(a) {
        for (var b in a) b in h || (h[b] = a[b])
    };
    c = b("emptyFunction");
    a.getGKs = function() {
        return null
    };
    a.setPass = c;
    a.setFail = c;
    e.exports = a
}), null);
__d("isEmpty", ["invariant"], (function(a, b, c, d, e, f, g) {
    "use strict";

    function a(a) {
        if (Array.isArray(a)) return a.length === 0;
        else if (typeof a === "object") {
            if (a) {
                !h(a) || a.size === void 0 || g(0, 1445);
                for (var b in a) return !1
            }
            return !0
        } else return !a
    }

    function h(a) {
        return typeof Symbol === "undefined" ? !1 : a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"] != null
    }
    e.exports = a
}), null);
__d("DataStore", ["DataStoreConfig", "gkx", "isEmpty"], (function(a, b, c, d, e, f) {
    "use strict";
    var g, h = b("DataStoreConfig").expandoKey,
        i = b("DataStoreConfig").useExpando,
        j = b("gkx")("1073500") && window.WeakMap ? new window.WeakMap() : null,
        k = {},
        l = 1;

    function m(a) {
        if (typeof a === "string") return "str_" + a;
        else {
            var b;
            return "elem_" + ((b = a.__FB_TOKEN) != null ? b : a.__FB_TOKEN = [l++])[0]
        }
    }

    function n(a) {
        if (j != null && typeof a === "object") {
            j.get(a) === void 0 && j.set(a, {});
            return j.get(a)
        } else if (i && typeof a === "object") return a[h] || (a[h] = {});
        a = m(a);
        return k[a] || (k[a] = {})
    }
    var o = {
        set: function(a, b, c) {
            if (!a) throw new TypeError("DataStore.set: namespace is required, got " + typeof a);
            var d = n(a);
            d[b] = c;
            return a
        },
        get: function(a, b, c) {
            if (!a) throw new TypeError("DataStore.get: namespace is required, got " + typeof a);
            var d = n(a),
                e = d[b];
            if (e === void 0 && a.getAttribute != null)
                if (a.hasAttribute != null && !a.hasAttribute("data-" + b)) e = void 0;
                else {
                    a = a.getAttribute("data-" + b);
                    e = null === a ? void 0 : a
                }
            c !== void 0 && e === void 0 && (e = d[b] = c);
            return e
        },
        remove: function(a, c) {
            if (!a) throw new TypeError("DataStore.remove: namespace is required, got " + typeof a);
            var d = n(a),
                e = d[c];
            delete d[c];
            (g || (g = b("isEmpty")))(d) && o.purge(a);
            return e
        },
        purge: function(a) {
            if (j != null && typeof a === "object") return j["delete"](a);
            else i && typeof a === "object" ? delete a[h] : delete k[m(a)]
        },
        _storage: k
    };
    e.exports = o
}), null);
__d("BigPipePlugins", ["DataStore"], (function(a, b, c, d, e, f) {
    a = function() {
        "use strict";

        function a() {}
        a.runPluginOnPagelet = function(b) {
            a.getPluginList().forEach(function(a) {
                a(b)
            })
        };
        a.getPluginList = function() {
            return [a.$1]
        };
        a.$1 = function(b) {
            if (!b) return;
            b = b.querySelectorAll("div[data-fte]");
            for (var c = 0, d = b.length; c < d; c++) a.$2(b[c], "data-ft", "data-ft")
        };
        a.$2 = function(a, c, d) {
            var e = a.getAttribute(c);
            e && (b("DataStore").set(a, d, e), a.removeAttribute(c))
        };
        return a
    }();
    e.exports = a
}), null);
__d("BootloaderEvents", ["Arbiter"], (function(a, b, c, d, e, f) {
    var g = "bootloader/bootload",
        h = new(b("Arbiter"))(),
        i = new Set();
    e.exports = {
        notifyBootloadStart: function(a) {
            i.add(a)
        },
        notifyBootload: function(a) {
            i["delete"](a), h.inform(g, a, "persistent")
        },
        onBootload: function(a) {
            return h.subscribe(g, function(b, c) {
                return a(c)
            })
        },
        getActiveBootloads: function() {
            return new Set(i)
        }
    }
}), null);
__d("BootloaderEventsManager", ["CallbackDependencyManager", "performanceAbsoluteNow"], (function(a, b, c, d, e, f) {
    var g;
    a = function() {
        "use strict";

        function a() {
            this.$1 = new(b("CallbackDependencyManager"))(), this.$2 = new Map()
        }
        var c = a.prototype;
        c.rsrcDone = function(a) {
            return a
        };
        c.bootload = function(a) {
            return "bl:" + a.join(",")
        };
        c.tierOne = function(a) {
            return "t1:" + a
        };
        c.tierTwoStart = function(a) {
            return "t2s:" + a
        };
        c.tierTwo = function(a) {
            return "t2:" + a
        };
        c.tierThreeStart = function(a) {
            return "t3s:" + a
        };
        c.tierThree = function(a) {
            return "t3:" + a
        };
        c.beDone = function(a) {
            return "beDone:" + a
        };
        c.notify = function(a) {
            this.$2.set(a, (g || (g = b("performanceAbsoluteNow")))()), this.$1.satisfyPersistentDependency(a)
        };
        c.getEventTime = function(a) {
            return this.$2.get(a)
        };
        c.registerCallback = function(a, b) {
            this.$1.registerCallback(a, b)
        };
        return a
    }();
    e.exports = a
}), null);
__d("BitMap", [], (function(a, b, c, d, e, f) {
    var g = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_";
    a = function() {
        "use strict";

        function a() {
            this.$1 = [], this.$2 = null
        }
        var b = a.prototype;
        b.set = function(a) {
            this.$2 != null && !this.$1[a] && (this.$2 = null);
            this.$1[a] = 1;
            return this
        };
        b.toString = function() {
            var a = [];
            for (var b = 0; b < this.$1.length; b++) a.push(this.$1[b] ? 1 : 0);
            return a.length ? i(a.join("")) : ""
        };
        b.toCompressedString = function() {
            if (this.$1.length === 0) return "";
            if (this.$2 != null) return this.$2;
            var a = [],
                b = 1,
                c = this.$1[0] || 0,
                d = c.toString(2);
            for (var e = 1; e < this.$1.length; e++) {
                var f = this.$1[e] || 0;
                f === c ? b++ : (a.push(h(b)), c = f, b = 1)
            }
            b && a.push(h(b));
            return this.$2 = i(d + a.join(""))
        };
        return a
    }();

    function h(a) {
        a = a.toString(2);
        var b = "0".repeat(a.length - 1);
        return b + a
    }

    function i(a) {
        a = (a + "00000").match(/[01]{6}/g);
        var b = "";
        for (var c = 0; a != null && c < a.length; c++) b += g[parseInt(a[c], 2)];
        return b
    }
    e.exports = a
}), null);
__d("CSRBitMap", ["BitMap"], (function(a, b, c, d, e, f) {
    var g = new(b("BitMap"))();
    e.exports = {
        add: function(a) {
            g.set(a)
        },
        toCompressedString: function() {
            return g.toCompressedString()
        }
    }
}), null);
__d("CSRIndexUtil", ["invariant"], (function(a, b, c, d, e, f, g) {
    e.exports = {
        parseCSRIndexes: function(a) {
            a.substr(0, 1) === ":" || g(0, 21456, a);
            return a.substr(1).split(",").map(function(a) {
                return parseInt(a, 10)
            })
        }
    }
}), null);
__d("isFacebookURI", [], (function(a, b, c, d, e, f) {
    var g = null,
        h = ["http", "https"];

    function a(a) {
        g || (g = new RegExp("(^|\\.)facebook\\.com$", "i"));
        if (a.isEmpty() && a.toString() !== "#") return !1;
        return !a.getDomain() && !a.getProtocol() ? !0 : h.indexOf(a.getProtocol()) !== -1 && g.test(a.getDomain())
    }
    a.setRegex = function(a) {
        g = a
    };
    e.exports = a
}), null);
__d("isWorkplaceDotComURI", [], (function(a, b, c, d, e, f) {
    var g = new RegExp("(^|\\.)workplace\\.com$", "i");

    function a(a) {
        return a.getProtocol() === "https" && g.test(a.getDomain())
    }
    e.exports = a
}), null);
__d("BlueCompatBroker", ["Env", "URI", "isCometAltpayJsSdkIframeAllowedDomain", "isFacebookURI", "isWorkplaceDotComURI"], (function(a, b, c, d, e, f) {
    "use strict";
    var g, h, i, j = new Map(),
        k = !1,
        l = function(a) {
            a = new(g || (g = b("URI")))(a);
            return b("isFacebookURI")(a) || b("isWorkplaceDotComURI")(a)
        },
        m = {
            dispatch: function(a) {
                var b = m.getMessageEventString(a, "compatAction");
                if (b != null) {
                    b = j.get(b);
                    b && b(a)
                }
            },
            getMessageEventString: function(a, b) {
                a = a.data;
                if (typeof a === "object") {
                    a = a == null ? void 0 : a[b];
                    if (typeof a === "string") return a
                }
                return ""
            },
            init: function(a) {
                a === void 0 && (a = "");
                if (!k) {
                    document.body && (document.body.style.overflow = "auto");
                    var c = b("isCometAltpayJsSdkIframeAllowedDomain")() ? "https://www.facebook.com/" : document.referrer,
                        d = c.indexOf("/", 8);
                    c = c.substring(0, d);
                    if (l(c)) {
                        d = new MessageChannel();
                        a = a !== "" ? a : (h || (h = b("Env"))).iframeKey;
                        i = d.port1;
                        i.onmessage = m.dispatch;
                        window.parent.postMessage({
                            compatAction: "CompatSetup",
                            iframeKey: a
                        }, c + "/", [d.port2])
                    }
                    try {
                        window.__REACT_DEVTOOLS_GLOBAL_HOOK__ = window.parent.__REACT_DEVTOOLS_GLOBAL_HOOK__
                    } catch (a) {}
                    k = !0
                }
            },
            register: function(a, b) {
                j.set(a, b)
            },
            sendMessage: function(a) {
                k || m.init(), i && i.postMessage(babelHelpers["extends"]({}, a))
            }
        };
    e.exports = m
}), null);
__d("MessengerEnvironment", ["CurrentEnvironment"], (function(a, b, c, d, e, f) {
    "use strict";
    a = babelHelpers["extends"]({}, b("CurrentEnvironment"), {
        messengerui: !1,
        setMessengerUI: function(a) {
            this.messengerui = a
        }
    });
    e.exports = a
}), null);
__d("areEqual", [], (function(a, b, c, d, e, f) {
    var g = [],
        h = [];

    function a(a, b) {
        var c = g.length ? g.pop() : [],
            d = h.length ? h.pop() : [];
        a = i(a, b, c, d);
        c.length = 0;
        d.length = 0;
        g.push(c);
        h.push(d);
        return a
    }

    function i(a, b, c, d) {
        if (a === b) return a !== 0 || 1 / a == 1 / b;
        if (a == null || b == null) return !1;
        if (typeof a !== "object" || typeof b !== "object") return !1;
        var e = Object.prototype.toString,
            f = e.call(a);
        if (f != e.call(b)) return !1;
        switch (f) {
            case "[object String]":
                return a == String(b);
            case "[object Number]":
                return isNaN(a) || isNaN(b) ? !1 : a == Number(b);
            case "[object Date]":
            case "[object Boolean]":
                return +a == +b;
            case "[object RegExp]":
                return a.source == b.source && a.global == b.global && a.multiline == b.multiline && a.ignoreCase == b.ignoreCase
        }
        e = c.length;
        while (e--)
            if (c[e] == a) return d[e] == b;
        c.push(a);
        d.push(b);
        e = 0;
        if (f === "[object Array]") {
            e = a.length;
            if (e !== b.length) return !1;
            while (e--)
                if (!i(a[e], b[e], c, d)) return !1
        } else if (a instanceof Set) {
            if (a.size !== b.size) return !1;
            f = Array.from(b.values());
            for (var e = a, g = Array.isArray(e), h = 0, e = g ? e : e[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                var j;
                if (g) {
                    if (h >= e.length) break;
                    j = e[h++]
                } else {
                    h = e.next();
                    if (h.done) break;
                    j = h.value
                }
                j = j;
                var k = !1;
                for (var l = 0; l < f.length; l++) {
                    var m = f[l];
                    if (i(j, m, c, d)) {
                        k = !0;
                        f.splice(l, 1);
                        break
                    }
                }
                if (k === !1) return !1
            }
            return !0
        } else {
            if (a.constructor !== b.constructor) return !1;
            if (Object.prototype.hasOwnProperty.call(a, "valueOf") && Object.prototype.hasOwnProperty.call(b, "valueOf")) return a.valueOf() == b.valueOf();
            m = Object.keys(a);
            if (m.length != Object.keys(b).length) return !1;
            for (var j = 0; j < m.length; j++) {
                if (m[j] === "_owner") continue;
                if (!Object.prototype.hasOwnProperty.call(b, m[j]) || !i(a[m[j]], b[m[j]], c, d)) return !1
            }
        }
        c.pop();
        d.pop();
        return !0
    }
    e.exports = a
}), null);
__d("isCdnURI", [], (function(a, b, c, d, e, f) {
    "use strict";

    function a(a) {
        if (a.getProtocol() !== "http" && a.getProtocol() !== "https") return !1;
        var b = Number(a.getPort());
        if (!!b && b !== 80 && b !== 443) return !1;
        return a.isSubdomainOfDomain("fbcdn.net") ? !0 : !1
    }
    e.exports = a
}), null);
__d("BlueCompatRouter", ["BlueCompatBroker", "Env", "MessengerEnvironment", "URI", "areEqual", "isCdnURI"], (function(a, b, c, d, e, f) {
    "use strict";
    var g, h, i;
    c = function(b, c) {
        var d, e = a.__fbNativeClearTimeout || window.clearTimeout,
            f = a.__fbNativeSetTimeout || window.setTimeout;
        return function() {
            var a = this,
                g = arguments,
                h = function() {
                    d = null, b.apply(a, g)
                };
            e(d);
            d = f(h, c)
        }
    };
    var j = {
            convertUri: function(a) {
                if (a == null || a === "") return new(g || (g = b("URI")))();
                a = new(g || (g = b("URI")))(a);
                if (a.getDomain().endsWith("messenger.com")) return a.setDomain(a.getDomain().replace(/messenger\.com/i, "facebook.com")).setPath("/messages" + a.getPath());
                else return a
            },
            goFragment: function(a) {
                if ((h || (h = b("Env"))).isCQuick) {
                    a = j.convertUri(a);
                    if (a.getFragment()) {
                        var c = (g || (g = b("URI"))).getRequestURI(!1, !1);
                        if ((i || (i = b("areEqual")))(new(g || (g = b("URI")))(c).setFragment("").getQualifiedURI(), new(g || (g = b("URI")))(a).setFragment("").getQualifiedURI())) return !0
                    }
                }
                return !1
            },
            go: function(a, c) {
                if ((h || (h = b("Env"))).isCQuick) {
                    var d = new(g || (g = b("URI")))(a);
                    a = j.convertUri(a);
                    var e = a.getQualifiedURI();
                    if (b("isCdnURI")(a) || e.getPath().startsWith("/compat")) return !1;
                    a = function() {
                        if (b("MessengerEnvironment").messengerui && e.getPath().startsWith("/messages")) return [!1, "/messages"];
                        if (d.getPath().startsWith("/settings") && e.getPath().startsWith("/settings") && e.getSubdomain() !== d.getSubdomain()) return [!1, "/settings"];
                        if (d.getPath().startsWith("/games") && e.getPath().startsWith("/games")) return [!1, "/games/web"];
                        if (/\/[A-Za-z\-0-9]+\/settings/.test(d.getPath())) return [!1, "/pages/settings"];
                        return /\/[A-Za-z\-0-9]+\/insights/.test(d.getPath()) ? [!1, "/insights"] : [!0, ""]
                    }();
                    var f = a[0];
                    a = a[1];
                    k({
                        compatAction: "route",
                        maintainKey: a,
                        replace: c,
                        uri: String(e)
                    });
                    return f
                }
                return !1
            },
            startChat: function(a) {
                return j.sendMessage({
                    compatAction: "startchat",
                    tabId: a
                })
            },
            chatListener: function(a, b) {
                a.addEventListener("click", function() {
                    j.startChat("fbid:" + b)
                })
            },
            sendMessage: function(a) {
                if ((h || (h = b("Env"))).isCQuick) {
                    b("BlueCompatBroker").init();
                    b("BlueCompatBroker").sendMessage(a);
                    return !0
                }
                return !1
            }
        },
        k = c(j.sendMessage, 250);
    e.exports = j
}), null);
__d("flattenPHPQueryData", ["invariant"], (function(a, b, c, d, e, f, g) {
    function a(a) {
        return h(a, "", {})
    }

    function h(a, b, c) {
        if (a === null || a === void 0) c[b] = void 0;
        else if (typeof a === "object") {
            typeof a.appendChild !== "function" || g(0, 2616);
            for (var d in a) d !== "$$typeof" && Object.prototype.hasOwnProperty.call(a, d) && a[d] !== void 0 && h(a[d], b ? b + "[" + d + "]" : d, c)
        } else c[b] = a;
        return c
    }
    e.exports = a
}), null);
__d("PHPQuerySerializer", ["flattenPHPQueryData"], (function(a, b, c, d, e, f) {
    function a(a) {
        var c = [];
        a = b("flattenPHPQueryData")(a);
        for (var d in a)
            if (Object.prototype.hasOwnProperty.call(a, d)) {
                var e = g(d);
                a[d] === void 0 ? c.push(e) : c.push(e + "=" + g(String(a[d])))
            }
        return c.join("&")
    }

    function g(a) {
        return encodeURIComponent(a).replace(/%5D/g, "]").replace(/%5B/g, "[")
    }
    var h = /^([-_\w]+)((?:\[[-_\w]*\])+)=?(.*)/;

    function i(a) {
        return a === "hasOwnProperty" || a === "__proto__" ? "\ud83d\udf56" : a
    }

    function c(a) {
        if (!a) return {};
        var b = {};
        a = a.replace(/%5B/gi, "[").replace(/%5D/gi, "]");
        a = a.split("&");
        var c = Object.prototype.hasOwnProperty;
        for (var d = 0, e = a.length; d < e; d++) {
            var f = a[d].match(h);
            if (!f) {
                var g = a[d].indexOf("=");
                if (g === -1) b[j(a[d])] = null;
                else {
                    var k = a[d].substring(0, g);
                    g = a[d].substring(g + 1);
                    b[j(k)] = j(g)
                }
            } else {
                k = f[2].split(/\]\[|\[|\]/).slice(0, -1);
                g = f[1];
                f = j(f[3] || "");
                k[0] = g;
                g = b;
                for (var l = 0; l < k.length - 1; l++) {
                    var m = i(k[l]);
                    if (m) {
                        if (!c.call(g, m)) {
                            var n = k[l + 1] && !k[l + 1].match(/^\d{1,3}$/) ? {} : [];
                            g[m] = n;
                            if (g[m] !== n) return b
                        }
                        g = g[m]
                    } else k[l + 1] && !k[l + 1].match(/^\d{1,3}$/) ? g.push({}) : g.push([]), g = g[g.length - 1]
                }
                g instanceof Array && k[k.length - 1] === "" ? g.push(f) : g[i(k[k.length - 1])] = f
            }
        }
        return b
    }

    function j(a) {
        try {
            return decodeURIComponent(a.replace(/\+/g, " "))
        } catch (b) {
            return a
        }
    }
    d = {
        serialize: a,
        encodeComponent: g,
        deserialize: c,
        decodeComponent: j
    };
    e.exports = d
}), null);
__d("PHPQuerySerializerNoEncoding", ["PHPQuerySerializer", "flattenPHPQueryData"], (function(a, b, c, d, e, f) {
    var g;

    function a(a) {
        var c = [];
        a = b("flattenPHPQueryData")(a);
        for (var d in a)
            if (Object.prototype.hasOwnProperty.call(a, d)) {
                var e = h(d);
                a[d] === void 0 ? c.push(e) : c.push(e + "=" + h(String(a[d])))
            }
        return c.join("&")
    }

    function h(a) {
        return a
    }
    c = {
        serialize: a,
        encodeComponent: h,
        deserialize: (g || (g = b("PHPQuerySerializer"))).deserialize,
        decodeComponent: g.decodeComponent
    };
    e.exports = c
}), null);
__d("URIRFC3986", [], (function(a, b, c, d, e, f) {
    var g = new RegExp("^([^:/?#]+:)?(//([^\\\\/?#@]*@)?(\\[[A-Fa-f0-9:.]+\\]|[^\\/?#:]*)(:[0-9]*)?)?([^?#]*)(\\?[^#]*)?(#.*)?");
    a = {
        parse: function(a) {
            if (a.trim() === "") return null;
            a = a.match(g);
            if (a == null) return null;
            var b = {};
            b.uri = a[0] ? a[0] : null;
            b.scheme = a[1] ? a[1].substr(0, a[1].length - 1) : null;
            b.authority = a[2] ? a[2].substr(2) : null;
            b.userinfo = a[3] ? a[3].substr(0, a[3].length - 1) : null;
            b.host = a[2] ? a[4] : null;
            b.port = a[5] ? a[5].substr(1) ? parseInt(a[5].substr(1), 10) : null : null;
            b.path = a[6] ? a[6] : null;
            b.query = a[7] ? a[7].substr(1) : null;
            b.fragment = a[8] ? a[8].substr(1) : null;
            b.isGenericURI = b.authority === null && !!b.scheme;
            return b
        }
    };
    e.exports = a
}), null);
__d("createObjectFrom", [], (function(a, b, c, d, e, f) {
    function g(a, b) {
        if (b === void 0) return g(a, !0);
        var c = {};
        if (Array.isArray(b))
            for (var d = a.length - 1; d >= 0; d--) c[a[d]] = b[d];
        else
            for (var d = a.length - 1; d >= 0; d--) c[a[d]] = b;
        return c
    }
    e.exports = g
}), null);
__d("URISchemes", ["createObjectFrom"], (function(a, b, c, d, e, f) {
    var g = b("createObjectFrom")(["blob", "cmms", "fb", "fba", "fbatwork", "fb-ama", "fb-workchat", "fb-workchat-secure", "fb-messenger", "fb-messenger-public", "fb-messenger-group-thread", "fb-page-messages", "fb-pma", "fbcf", "fbconnect", "fbinternal", "fbmobilehome", "fbrpc", "file", "ftp", "gtalk", "http", "https", "mailto", "wss", "ms-app", "intent", "itms", "itms-apps", "lasso", "market", "svn+ssh", "fbstaging", "tel", "sms", "pebblejs", "sftp", "whatsapp", "moments", "flash", "fblite", "chrome-extension", "webcal", "fb124024574287414", "fb124024574287414rc", "fb124024574287414master", "fb1576585912599779", "fb929757330408142", "designpack", "fbpixelcloud", "fbapi20130214", "fb1196383223757595", "oculus", "oculus.store", "oculus.feed", "skype", "callto", "workchat", "fb236786383180508", "fb1775440806014337", "data", "fb-mk", "munki", "kirigami", "origami-file", "fb-nimble-vrsrecorder", "fb-nimble-monohandtrackingvis", "together", "whatsapp-consumer", "whatsapp-smb"]);
    a = {
        isAllowed: function(a) {
            return a == null || a === "" ? !0 : Object.prototype.hasOwnProperty.call(g, a.toLowerCase())
        }
    };
    e.exports = a
}), null);
__d("isInternalFBURI", [], (function(a, b, c, d, e, f) {
    var g = new RegExp("(^|\\.)internalfb\\.com$", "i");

    function a(a) {
        return g.test(a.getDomain())
    }
    e.exports = a
}), null);
__d("setHostSubdomain", [], (function(a, b, c, d, e, f) {
    function a(a, b) {
        a = a.split(".");
        a.length < 3 ? a.unshift(b) : a[0] = b;
        return a.join(".")
    }
    e.exports = a
}), null);
__d("URIBase", ["invariant", "PHPQuerySerializerNoEncoding", "UriNeedRawQuerySVChecker", "URIRFC3986", "URISchemes", "ex", "isInternalFBURI", "setHostSubdomain"], (function(a, b, c, d, e, f, g) {
    var h, i, j = new RegExp("[\\x00-\\x2c\\x2f\\x3b-\\x40\\x5c\\x5e\\x60\\x7b-\\x7f\\uFDD0-\\uFDEF\\uFFF0-\\uFFFF\\u2047\\u2048\\uFE56\\uFE5F\\uFF03\\uFF0F\\uFF1F]"),
        k = new RegExp("^(?:[^/]*:|[\\x00-\\x1f]*/[\\x00-\\x1f]*/)");

    function l(a, c, d, e) {
        if (!c) return !0;
        if (c instanceof n) {
            a.setProtocol(c.getProtocol());
            a.setDomain(c.getDomain());
            a.setPort(c.getPort());
            a.setPath(c.getPath());
            a.setQueryData(e.deserialize(e.serialize(c.getQueryData())));
            a.setFragment(c.getFragment());
            a.setIsGeneric(c.getIsGeneric());
            a.setForceFragmentSeparator(c.getForceFragmentSeparator());
            a.setOriginalRawQuery(c.getOriginalRawQuery());
            a.setQueryParamModified(!1);
            return !0
        }
        c = c.toString().trim();
        var f = (h || (h = b("URIRFC3986"))).parse(c) || {
            fragment: null,
            scheme: null,
            query: null
        };
        if (!d && !(i || (i = b("URISchemes"))).isAllowed(f.scheme)) return !1;
        a.setProtocol(f.scheme || "");
        if (!d && j.test(f.host || "")) return !1;
        a.setDomain(f.host || "");
        a.setPort(f.port || "");
        a.setPath(f.path || "");
        if (d) a.setQueryData(e.deserialize(f.query || "") || {});
        else try {
            a.setQueryData(e.deserialize(f.query || "") || {})
        } catch (a) {
            return !1
        }
        a.setFragment(f.fragment || "");
        f.fragment === "" && a.setForceFragmentSeparator(!0);
        a.setIsGeneric(f.isGenericURI || !1);
        a.setOriginalRawQuery(f.query);
        a.setQueryParamModified(!1);
        if (f.userinfo !== null)
            if (d) throw new Error(b("ex")("URI.parse: invalid URI (userinfo is not allowed in a URI): %s", c));
            else return !1;
        if (!a.getDomain() && a.getPath().indexOf("\\") !== -1)
            if (d) throw new Error(b("ex")("URI.parse: invalid URI (no domain but multiple back-slashes): %s", c));
            else return !1;
        if (!a.getProtocol() && k.test(c))
            if (d) throw new Error(b("ex")("URI.parse: invalid URI (unsafe protocol-relative URLs): %s", c));
            else return !1;
        if (a.getDomain() && a.getPath() && !a.getPath().startsWith("/"))
            if (d) throw new Error(b("ex")("URI.parse: invalid URI (domain and path where path lacks leading slash): %s", c));
            else return !1;
        return !0
    }
    var m = [],
        n = function() {
            "use strict";
            a.tryParse = function(b, c) {
                var d = new a(null, c);
                return l(d, b, !1, c) ? d : null
            };
            a.isValid = function(b, c) {
                return !!a.tryParse(b, c)
            };

            function a(a, b) {
                b || g(0, 2966), this.$9 = b, this.$7 = "", this.$1 = "", this.$6 = "", this.$5 = "", this.$3 = "", this.$4 = !1, this.$8 = {}, this.$2 = !1, l(this, a, !0, b), this.$11 = !1
            }
            var c = a.prototype;
            c.setProtocol = function(a) {
                (i || (i = b("URISchemes"))).isAllowed(a) || g(0, 587, a);
                this.$7 = a;
                return this
            };
            c.getProtocol = function() {
                return (this.$7 || "").toLowerCase()
            };
            c.setSecure = function(a) {
                return this.setProtocol(a ? "https" : "http")
            };
            c.isSecure = function() {
                return this.getProtocol() === "https"
            };
            c.setDomain = function(a) {
                if (j.test(a)) throw new Error(b("ex")("URI.setDomain: unsafe domain specified: %s for url %s", a, this.toString()));
                this.$1 = a;
                return this
            };
            c.getDomain = function() {
                return this.$1
            };
            c.setPort = function(a) {
                this.$6 = a;
                return this
            };
            c.getPort = function() {
                return this.$6
            };
            c.setPath = function(a) {
                this.$5 = a;
                return this
            };
            c.getPath = function() {
                return this.$5
            };
            c.addQueryData = function(a, b) {
                Object.prototype.toString.call(a) === "[object Object]" ? Object.assign(this.$8, a) : this.$8[a] = b;
                this.$11 = !0;
                return this
            };
            c.setQueryData = function(a) {
                this.$8 = a;
                this.$11 = !0;
                return this
            };
            c.getQueryData = function() {
                return this.$8
            };
            c.setQueryString = function(a) {
                return this.setQueryData(this.$9.deserialize(a))
            };
            c.getQueryString = function(a) {
                a === void 0 && (a = !1);
                return this.$12(!1, a)
            };
            c.$12 = function(a, c) {
                a === void 0 && (a = !1);
                c === void 0 && (c = !1);
                if (!this.$11 && (c || b("UriNeedRawQuerySVChecker").isDomainNeedRawQuery(this.getDomain()))) {
                    return (c = this.$10) != null ? c : ""
                }
                return (a ? b("PHPQuerySerializerNoEncoding") : this.$9).serialize(this.getQueryData())
            };
            c.removeQueryData = function(a) {
                Array.isArray(a) || (a = [a]);
                for (var b = 0, c = a.length; b < c; ++b) delete this.$8[a[b]];
                this.$11 = !0;
                return this
            };
            c.setFragment = function(a) {
                this.$3 = a;
                this.setForceFragmentSeparator(!1);
                return this
            };
            c.getFragment = function() {
                return this.$3
            };
            c.setForceFragmentSeparator = function(a) {
                this.$2 = a;
                return this
            };
            c.getForceFragmentSeparator = function() {
                return this.$2
            };
            c.setIsGeneric = function(a) {
                this.$4 = a;
                return this
            };
            c.getIsGeneric = function() {
                return this.$4
            };
            c.getOriginalRawQuery = function() {
                return this.$10
            };
            c.setOriginalRawQuery = function(a) {
                this.$10 = a;
                return this
            };
            c.setQueryParamModified = function(a) {
                this.$11 = a;
                return this
            };
            c.isEmpty = function() {
                return !(this.getPath() || this.getProtocol() || this.getDomain() || this.getPort() || Object.keys(this.getQueryData()).length > 0 || this.getFragment())
            };
            c.toString = function() {
                return this.$13(!1, !1)
            };
            c.toStringRawQuery = function() {
                return this.$13(!0, !1)
            };
            c.toStringPreserveQuery = function() {
                return this.$13(!1, !0)
            };
            c.$13 = function(a, b) {
                a === void 0 && (a = !1);
                b === void 0 && (b = !1);
                var c = this;
                for (var d = 0; d < m.length; d++) c = m[d](c);
                return c.$14(a, b)
            };
            c.$14 = function(a, b) {
                a === void 0 && (a = !1);
                b === void 0 && (b = !1);
                var c = "",
                    d = this.getProtocol();
                d && (c += d + ":" + (this.getIsGeneric() ? "" : "//"));
                d = this.getDomain();
                d && (c += d);
                d = this.getPort();
                d && (c += ":" + d);
                d = this.getPath();
                d ? c += d : c && (c += "/");
                d = this.$12(a, b);
                d && (c += "?" + d);
                a = this.getFragment();
                a ? c += "#" + a : this.getForceFragmentSeparator() && (c += "#");
                return c
            };
            a.registerFilter = function(a) {
                m.push(a)
            };
            c.getOrigin = function() {
                var a = this.getPort();
                return this.getProtocol() + "://" + this.getDomain() + (a ? ":" + a : "")
            };
            c.getQualifiedURIBase = function() {
                return new a(this, this.$9).qualify()
            };
            c.qualify = function() {
                if (!this.getDomain()) {
                    var b = new a(window.location.href, this.$9);
                    this.setProtocol(b.getProtocol()).setDomain(b.getDomain()).setPort(b.getPort())
                }
                return this
            };
            c.setSubdomain = function(a) {
                var c = this.qualify(),
                    d = c.getDomain();
                b("isInternalFBURI")(c) && a === "our" && (a = "www");
                return this.setDomain(b("setHostSubdomain")(d, a))
            };
            c.getSubdomain = function() {
                if (!this.getDomain()) return "";
                var a = this.getDomain().split(".");
                if (a.length <= 2) return "";
                else return a[0]
            };
            c.isSubdomainOfDomain = function(b) {
                var c = this.getDomain();
                return a.isDomainSubdomainOfDomain(c, b, this.$9)
            };
            a.isDomainSubdomainOfDomain = function(b, c, d) {
                if (c === "" || b === "") return !1;
                if (b.endsWith(c)) {
                    var e = b.length,
                        f = c.length,
                        g = e - f - 1;
                    if (e === f || b[g] === ".") {
                        e = new a(null, d);
                        e.setDomain(c);
                        return a.isValid(e, d)
                    }
                }
                return !1
            };
            return a
        }();
    e.exports = n
}), null);
__d("UriNeedRawQuerySVChecker", ["PHPQuerySerializer", "URIBase", "UriNeedRawQuerySVConfig"], (function(a, b, c, d, e, f) {
    "use strict";
    var g, h, i = ["http", "https"];

    function a(a) {
        if (a == null) return !1;
        a = a instanceof(g || (g = b("URIBase"))) ? a : (g || (g = b("URIBase"))).tryParse(a, h || (h = b("PHPQuerySerializer")));
        if (a == null) return !1;
        var c = a.getProtocol();
        return !i.includes(c) ? !1 : j(a.getDomain())
    }

    function j(a) {
        return a != null && b("UriNeedRawQuerySVConfig").uris.some(function(c) {
            return (g || (g = b("URIBase"))).isDomainSubdomainOfDomain(a, c, h || (h = b("PHPQuerySerializer")))
        })
    }
    e.exports = {
        isUriNeedRawQuery: a,
        isDomainNeedRawQuery: j
    }
}), null);
__d("areSameOrigin", [], (function(a, b, c, d, e, f) {
    function a(a, b) {
        if (a.isEmpty() || b.isEmpty()) return !1;
        if (a.getProtocol() && a.getProtocol() != b.getProtocol()) return !1;
        if (a.getDomain() && a.getDomain() != b.getDomain()) return !1;
        return a.getPort() && a.getPort().toString() !== b.getPort().toString() ? !1 : !0
    }
    e.exports = a
}), null);
__d("ifRequired", [], (function(a, b, c, d, e, f) {
    function a(a, b, c) {
        var e;
        d && d.call(null, [a], function(a) {
            e = a
        });
        if (e && b) return b(e);
        else if (!e && c) return c()
    }
    e.exports = a
}), null);
__d("memoize", ["invariant"], (function(a, b, c, d, e, f, g) {
    function a(a) {
        var b = a,
            c;
        return function() {
            arguments.length && g(0, 4494);
            b && (c = b(), b = null);
            return c
        }
    }
    e.exports = a
}), null);
__d("memoizeStringOnly", [], (function(a, b, c, d, e, f) {
    "use strict";

    function a(a) {
        var b = {};
        return function(c) {
            Object.prototype.hasOwnProperty.call(b, c) || (b[c] = a.call(this, c));
            return b[c]
        }
    }
    e.exports = a
}), null);
__d("unqualifyURI", [], (function(a, b, c, d, e, f) {
    function a(a) {
        return a.setProtocol("").setDomain("").setPort("")
    }
    e.exports = a
}), null);
__d("URI", ["Env", "PHPQuerySerializer", "PHPQuerySerializerNoEncoding", "ReloadPage", "URIBase", "UriNeedRawQuerySVChecker", "areSameOrigin", "ifRequired", "isFacebookURI", "memoize", "memoizeStringOnly", "unqualifyURI", "FBLogger"], (function(a, b, c, d, e, f) {
    var g, h, i, j = b("memoize")(function() {
        return new l(window.location.href)
    });

    function k() {
        return b("ifRequired")("PageTransitions", function(a) {
            if (a.isInitialized()) return a
        })
    }
    var l = function(d) {
        "use strict";
        babelHelpers.inheritsLoose(c, d);

        function c(a) {
            var c;
            b("UriNeedRawQuerySVChecker").isUriNeedRawQuery(a) ? c = d.call(this, a, b("PHPQuerySerializerNoEncoding")) || this : c = d.call(this, a || "", g || (g = b("PHPQuerySerializer"))) || this;
            return babelHelpers.assertThisInitialized(c)
        }
        var e = c.prototype;
        e.setPath = function(a) {
            this.path = a;
            return d.prototype.setPath.call(this, a)
        };
        e.getPath = function() {
            var a = d.prototype.getPath.call(this);
            return a ? a.replace(/^\/+/, "/") : a
        };
        e.setProtocol = function(a) {
            this.protocol = a;
            return d.prototype.setProtocol.call(this, a)
        };
        e.setDomain = function(a) {
            this.domain = a;
            return d.prototype.setDomain.call(this, a)
        };
        e.setPort = function(a) {
            this.port = a;
            return d.prototype.setPort.call(this, a)
        };
        e.setFragment = function(a) {
            this.fragment = a;
            return d.prototype.setFragment.call(this, a)
        };
        e.stripTrailingSlash = function() {
            this.setPath(this.getPath().replace(/\/$/, ""));
            return this
        };
        e.addTrailingSlash = function() {
            var a = this.getPath();
            a.length > 0 && a[a.length - 1] !== "/" && this.setPath(a + "/");
            return this
        };
        e.valueOf = function() {
            return this.toString()
        };
        e.getRegisteredDomain = function() {
            if (!this.getDomain()) return "";
            if (!b("isFacebookURI")(this)) return null;
            var a = this.getDomain().split("."),
                c = a.indexOf("facebook");
            c === -1 && (c = a.indexOf("workplace"));
            return a.slice(c).join(".")
        };
        e.getUnqualifiedURI = function() {
            return b("unqualifyURI")(new c(this))
        };
        e.getQualifiedURI = function() {
            return new c(this).qualify()
        };
        e.isSameOrigin = function(a) {
            a = a;
            a == null ? a = j() : a instanceof c || (a = new c(a.toString()));
            return b("areSameOrigin")(this, a)
        };
        c.go = function(a, b, d) {
            c.goURIOnWindow(a, window, b, d)
        };
        c.goURIOnNewWindow = function(a) {
            c.goURIOnWindow(a, window.open("", "_blank"), !0)
        };
        c.goURIOnWindow = function(d, e, f, g) {
            f === void 0 && (f = !1);
            g === void 0 && (g = !1);
            d = new c(d);
            f = f;
            var i = !e || e === window;
            if ((h || (h = b("Env"))).isCQuick && b("isFacebookURI")(d) && i) {
                i = {};
                i.cquick = (h || (h = b("Env"))).iframeKey;
                i.ctarget = h.iframeTarget;
                i.cquick_token = h.iframeToken;
                d.addQueryData(i);
                f = !1
            }
            i = d.toString();
            d = e ? e : window;
            !f && a.PageTransitions ? a.PageTransitions.go(i, g) : window.location.href === i ? b("ReloadPage").now() : g ? d.location.replace(i) : d.location.href = i
        };
        e.go = function(a, b) {
            c.go(this, a, b)
        };
        c.tryParseURI = function(a) {
            a = (i || (i = b("URIBase"))).tryParse(a, g || (g = b("PHPQuerySerializer")));
            return a ? new c(a) : null
        };
        c.isValidURI = function(a) {
            return (i || (i = b("URIBase"))).isValid(a, g || (g = b("PHPQuerySerializer")))
        };
        c.getRequestURI = function(a, b) {
            a === void 0 && (a = !0);
            b === void 0 && (b = !1);
            if (a) {
                a = k();
                if (a) return a.getCurrentURI(!!b).getQualifiedURI()
            }
            return new c(window.location.href)
        };
        c.getMostRecentURI = function() {
            var a = k();
            return a ? a.getMostRecentURI().getQualifiedURI() : new c(window.location.href)
        };
        c.getNextURI = function() {
            var a = k();
            return a ? a.getNextURI().getQualifiedURI() : new c(window.location.href)
        };
        c.encodeComponent = function(a) {
            return encodeURIComponent(a).replace(/%5D/g, "]").replace(/%5B/g, "[")
        };
        c.decodeComponent = function(a) {
            return decodeURIComponent(a.replace(/\+/g, " "))
        };
        c.normalize = function(a) {
            return a != null && typeof a === "string" ? this.normalizeString(a) : new c(a).toString()
        };
        return c
    }(i || (i = b("URIBase")));
    l.normalizeString = b("memoizeStringOnly")(function(a) {
        return new l(a).toString()
    });
    l.expression = /(((\w+):\/\/)([^\/:]*)(:(\d+))?)?([^#?]*)(\?([^#]*))?(#(.*))?/;
    l.arrayQueryExpression = /^(\w+)((?:\[\w*\])+)=?(.*)/;
    e.exports = l
}), null);
__d("isCometAltpayJsSdkIframeAllowedDomain", ["CometAltpayJsSdkIframeAllowedDomains", "URI"], (function(a, b, c, d, e, f) {
    "use strict";
    var g;
    a = Object.freeze(b("CometAltpayJsSdkIframeAllowedDomains"));
    var h = Object.freeze(a.allowed_domains);
    c = function() {
        var a = new(g || (g = b("URI")))(window.location.href);
        if (h == null || h.length <= 0) return !1;
        var c = h.some(function(c) {
            c = new(g || (g = b("URI")))(c);
            return c == null ? !1 : a.isSameOrigin(c)
        });
        return c ? !0 : !1
    };
    e.exports = c
}), null);
__d("ReloadPage", ["BlueCompatRouter", "Env"], (function(a, b, c, d, e, f) {
    var g;
    c = {
        now: function(c) {
            !(g || (g = b("Env"))).isCQuick ? a.window.location.reload(c) : b("BlueCompatRouter").sendMessage({
                compatAction: "reload"
            })
        },
        delay: function(b) {
            a.setTimeout(this.now.bind(this), b)
        }
    };
    e.exports = c
}), null);
__d("XControllerURIBuilder", ["invariant", "URI", "gkx", "isInternalFBURI"], (function(a, b, c, d, e, f, g) {
    var h;
    a = function() {
        "use strict";

        function a(a, b) {
            this.$1 = {}, this.$2 = a, this.$3 = b
        }
        var c = a.prototype;
        c.setInt = function(a, b) {
            return this.__setParam(a, "Int", b)
        };
        c.setFBID = function(a, b) {
            return this.__setParam(a, "FBID", b)
        };
        c.setFloat = function(a, b) {
            return this.__setParam(a, "Float", b)
        };
        c.setString = function(a, b) {
            return this.__setParam(a, "String", b)
        };
        c.setExists = function(a, b) {
            b === !1 && (b = void 0);
            return this.__setParam(a, "Exists", b)
        };
        c.setBool = function(a, b) {
            return this.__setParam(a, "Bool", b)
        };
        c.setEnum = function(a, b) {
            return this.__setParam(a, "Enum", b)
        };
        c.setPath = function(a, b) {
            return this.__setParam(a, "Path", b)
        };
        c.setIntVector = function(a, b) {
            return this.__setParam(a, "IntVector", b)
        };
        c.setIntKeyset = function(a, b) {
            return this.__setParam(a, "IntKeyset", b)
        };
        c.setIntSet = function(a, b) {
            return this.__setParam(a, "IntSet", b.join(","))
        };
        c.setFloatVector = function(a, b) {
            return this.__setParam(a, "FloatVector", b)
        };
        c.setFloatSet = function(a, b) {
            return this.__setParam(a, "FloatSet", b.join(","))
        };
        c.setStringVector = function(a, b) {
            return this.__setParam(a, "StringVector", b)
        };
        c.setStringKeyset = function(a, b) {
            return this.__setParam(a, "StringKeyset", b)
        };
        c.setStringSet = function(a, b) {
            return this.__setParam(a, "StringSet", b)
        };
        c.setFBIDVector = function(a, b) {
            return this.__setParam(a, "FBIDVector", b)
        };
        c.setFBIDSet = function(a, b) {
            return this.__setParam(a, "FBIDSet", b)
        };
        c.setFBIDKeyset = function(a, b) {
            return this.__setParam(a, "FBIDKeyset", b)
        };
        c.setEnumVector = function(a, b) {
            return this.__setParam(a, "EnumVector", b)
        };
        c.setEnumSet = function(a, b) {
            return this.__setParam(a, "EnumSet", b)
        };
        c.setEnumKeyset = function(a, b) {
            return this.__setParam(a, "EnumKeyset", b)
        };
        c.setIntToIntMap = function(a, b) {
            return this.__setParam(a, "IntToIntMap", b)
        };
        c.setIntToFloatMap = function(a, b) {
            return this.__setParam(a, "IntToFloatMap", b)
        };
        c.setIntToStringMap = function(a, b) {
            return this.__setParam(a, "IntToStringMap", b)
        };
        c.setIntToBoolMap = function(a, b) {
            return this.__setParam(a, "IntToBoolMap", b)
        };
        c.setStringToIntMap = function(a, b) {
            return this.__setParam(a, "StringToIntMap", b)
        };
        c.setStringToFloatMap = function(a, b) {
            return this.__setParam(a, "StringToFloatMap", b)
        };
        c.setStringToStringMap = function(a, b) {
            return this.__setParam(a, "StringToStringMap", b)
        };
        c.setStringToNullableStringMap = function(a, b) {
            return this.__setParam(a, "StringToNullableStringMap", b)
        };
        c.setStringToBoolMap = function(a, b) {
            return this.__setParam(a, "StringToBoolMap", b)
        };
        c.setStringToEnumMap = function(a, b) {
            return this.__setParam(a, "StringToEnumMap", b)
        };
        c.setEnumToStringVectorMap = function(a, b) {
            return this.__setParam(a, "EnumToStringVectorMap", b)
        };
        c.setEnumToBoolMap = function(a, b) {
            return this.__setParam(a, "EnumToBoolMap", b)
        };
        c.setEnumToEnumMap = function(a, b) {
            return this.__setParam(a, "EnumToEnumMap", b)
        };
        c.setEnumToIntMap = function(a, b) {
            return this.__setParam(a, "EnumToIntMap", b)
        };
        c.setEnumToFBIDVectorMap = function(a, b) {
            return this.__setParam(a, "EnumToFBIDVectorMap", b)
        };
        c.setStringToIntDict = function(a, b) {
            return this.__setParam(a, "StringToIntDict", b)
        };
        c.setStringToNullableIntDict = function(a, b) {
            return this.__setParam(a, "StringToNullableIntDict", b)
        };
        c.setStringToFloatDict = function(a, b) {
            return this.__setParam(a, "StringToFloatDict", b)
        };
        c.setStringToNullableFloatDict = function(a, b) {
            return this.__setParam(a, "StringToNullableFloatDict", b)
        };
        c.setStringToStringDict = function(a, b) {
            return this.__setParam(a, "StringToStringDict", b)
        };
        c.setStringToNullableStringDict = function(a, b) {
            return this.__setParam(a, "StringToNullableStringDict", b)
        };
        c.setStringToBoolDict = function(a, b) {
            return this.__setParam(a, "StringToBoolDict", b)
        };
        c.setStringToEnumDict = function(a, b) {
            return this.__setParam(a, "StringToEnumDict", b)
        };
        c.setEnumToIntDict = function(a, b) {
            return this.__setParam(a, "EnumToIntDict", b)
        };
        c.setHackType = function(a, b) {
            return this.__setParam(a, "HackType", b)
        };
        c.setTypeAssert = function(a, b) {
            return this.__setParam(a, "TypeAssert", b)
        };
        c.__validateRequiredParamsExistence = function() {
            for (var a in this.$3) !this.$3[a].required || Object.prototype.hasOwnProperty.call(this.$1, a) || g(0, 903, a)
        };
        c.setParams = function(a) {
            for (var b in a) {
                this.__assertParamExists(b);
                var c = this.$3[b].type;
                this.__setParam(b, c, a[b])
            }
            return this
        };
        c.__assertParamExists = function(a) {
            a in this.$3 || g(0, 904, a)
        };
        c.__setParam = function(a, b, c) {
            this.__assertParamExists(a);
            var d = this.$3[a].type;
            d === b || g(0, 905, a, b, d);
            this.__setParamInt(a, c);
            return this
        };
        c.__setParamInt = function(a, b) {
            this.$1[a] = b
        };
        c.getRequest_LEGACY_UNTYPED = function(a) {
            return a.setReplaceTransportMarkers().setURI(this.getURI())
        };
        c.getURI = function() {
            this.__validateRequiredParamsExistence();
            var a = {},
                c = "",
                d = /^(.*)?\{(\?)?(\*)?(.+?)\}(.*)?$/,
                e = this.$2.split("/"),
                f = !1;
            for (var i = 0; i < e.length; i++) {
                var j = e[i];
                if (j === "") continue;
                var k = d.exec(j);
                if (!k) c += "/" + j;
                else {
                    j = k[2] === "?";
                    var l = k[4],
                        m = this.$3[l];
                    m || g(0, 906, l, this.$2);
                    if (j && f) continue;
                    if (this.$1[l] == null && j) {
                        f = !0;
                        continue
                    }
                    this.$1[l] != null || g(0, 907, l);
                    m = k[1] ? k[1] : "";
                    j = k[5] ? k[5] : "";
                    c += "/" + m + this.$1[l] + j;
                    a[l] = !0
                }
            }
            this.$2.slice(-1) === "/" && (c += "/");
            c === "" && (c = "/");
            k = new(h || (h = b("URI")))(c);
            for (var n in this.$1) {
                m = this.$1[n];
                if (!a[n] && m != null) {
                    j = this.$3[n];
                    k.addQueryData(n, j && j.type === "Exists" ? null : m)
                }
            }
            return k
        };
        c.getLookasideURI = function() {
            var a = "origincache.facebook.com";
            b("isInternalFBURI")((h || (h = b("URI"))).getRequestURI()) ? a = "lookaside.internalfb.com" : b("gkx")("996940") && (a = "lookaside.internmc.facebook.com");
            return this.getURI().setDomain(a).setProtocol("https")
        };
        a.create = function(b, c) {
            return function() {
                return new a(b, c)
            }
        };
        return a
    }();
    a.prototype.getRequest = function(a) {
        return this.getRequest_LEGACY_UNTYPED(a)
    };
    e.exports = a
}), null);
__d("XRequest", ["invariant"], (function(a, b, c, d, e, f, g) {
    var h = function a(b, c, d) {
        var e;
        switch (b) {
            case "Bool":
                e = c && c !== "false" && c !== "0" || !1;
                break;
            case "Int":
                e = c.toString();
                /-?\d+/.test(e) || g(0, 5041, c);
                break;
            case "Float":
                e = parseFloat(c, 10);
                isNaN(e) && g(0, 5042, c);
                break;
            case "FBID":
                e = c.toString();
                for (var f = 0; f < e.length; ++f) {
                    var h = e.charCodeAt(f);
                    48 <= h && h <= 57 || g(0, 5043, c)
                }
                break;
            case "String":
                e = c.toString();
                break;
            case "Enum":
                d === 0 ? e = a("Int", c, null) : d === 1 ? e = a("String", c, null) : d === 2 ? e = c : g(0, 5044, d);
                break;
            default:
                if (h = /^Nullable(\w+)$/.exec(b)) c === null ? e = null : e = a(h[1], c, d);
                else if (f = /^(\w+)Vector$/.exec(b)) {
                    !Array.isArray(c) ? (e = c.toString(), e = e === "" ? [] : e.split(",")) : e = c;
                    var i = f[1];
                    typeof i === "string" || g(0, 5045);
                    e = e.map(function(b) {
                        return a(i, b, d && d.member)
                    })
                } else if (h = /^(\w+)(Set|Keyset)$/.exec(b)) !Array.isArray(c) ? (e = c.toString(), e = e === "" ? [] : e.split(",")) : e = c, e = e.reduce(function(a, b) {
                    a[b] = b;
                    return a
                }, {}), i = h[1], typeof i === "string" || g(0, 5045), e = Object.keys(e).map(function(b) {
                    return a(i, e[b], d && d.member)
                });
                else if (f = /^(\w+)To(\w+)Map$/.exec(b)) {
                    e = {};
                    var j = f[1],
                        k = f[2];
                    typeof j === "string" && typeof k === "string" || g(0, 5045);
                    Object.keys(c).forEach(function(b) {
                        e[a(j, b, d && d.key)] = a(k, c[b], d && d.value)
                    })
                } else g(0, 5046, b)
        }
        return e
    };
    a = function() {
        "use strict";

        function a(a, b, c) {
            this.$1 = b;
            this.$2 = babelHelpers["extends"]({}, c.getQueryData());
            b = a.split("/").filter(function(a) {
                return a
            });
            a = c.getPath().split("/").filter(function(a) {
                return a
            });
            for (var d = 0; d < b.length; ++d) {
                var e = /^\{(\?)?(\*)?(\w+)\}$/.exec(b[d]);
                if (!e) {
                    b[d] === a[d] || g(0, 5047, c.getPath());
                    continue
                }
                var f = !!e[1],
                    h = !!e[2];
                !h || d === b.length - 1 || g(0, 5048, i);
                var i = e[3];
                Object.prototype.hasOwnProperty.call(this.$1, i) || g(0, 5049, i);
                this.$1[i].required ? f && g(0, 5050, i) : f || g(0, 5057, i);
                a[d] && (this.$2[i] = h ? a.slice(d).join("/") : a[d])
            }
            Object.keys(this.$1).forEach(function(a) {
                !this.$1[a].required || Object.prototype.hasOwnProperty.call(this.$2, a) || g(0, 5051)
            }, this)
        }
        var b = a.prototype;
        b.getExists = function(a) {
            return this.$2[a] !== void 0
        };
        b.getBool = function(a) {
            return this.$3(a, "Bool")
        };
        b.getInt = function(a) {
            return this.$3(a, "Int")
        };
        b.getFloat = function(a) {
            return this.$3(a, "Float")
        };
        b.getFBID = function(a) {
            return this.$3(a, "FBID")
        };
        b.getString = function(a) {
            return this.$3(a, "String")
        };
        b.getEnum = function(a) {
            return this.$3(a, "Enum")
        };
        b.getOptionalInt = function(a) {
            return this.$4(a, "Int")
        };
        b.getOptionalFloat = function(a) {
            return this.$4(a, "Float")
        };
        b.getOptionalFBID = function(a) {
            return this.$4(a, "FBID")
        };
        b.getOptionalString = function(a) {
            return this.$4(a, "String")
        };
        b.getOptionalEnum = function(a) {
            return this.$4(a, "Enum")
        };
        b.getIntVector = function(a) {
            return this.$3(a, "IntVector")
        };
        b.getFloatVector = function(a) {
            return this.$3(a, "FloatVector")
        };
        b.getFBIDVector = function(a) {
            return this.$3(a, "FBIDVector")
        };
        b.getStringVector = function(a) {
            return this.$3(a, "StringVector")
        };
        b.getEnumVector = function(a) {
            return this.$3(a, "EnumVector")
        };
        b.getOptionalIntVector = function(a) {
            return this.$4(a, "IntVector")
        };
        b.getOptionalFloatVector = function(a) {
            return this.$4(a, "FloatVector")
        };
        b.getOptionalFBIDVector = function(a) {
            return this.$4(a, "FBIDVector")
        };
        b.getOptionalStringVector = function(a) {
            return this.$4(a, "StringVector")
        };
        b.getOptionalEnumVector = function(a) {
            return this.$4(a, "EnumVector")
        };
        b.getIntSet = function(a) {
            return this.$3(a, "IntSet")
        };
        b.getFBIDSet = function(a) {
            return this.$3(a, "FBIDSet")
        };
        b.getFBIDKeyset = function(a) {
            return this.$3(a, "FBIDKeyset")
        };
        b.getStringSet = function(a) {
            return this.$3(a, "StringSet")
        };
        b.getEnumKeyset = function(a) {
            return this.$3(a, "EnumKeyset")
        };
        b.getOptionalIntSet = function(a) {
            return this.$4(a, "IntSet")
        };
        b.getOptionalFBIDSet = function(a) {
            return this.$4(a, "FBIDSet")
        };
        b.getOptionalFBIDKeyset = function(a) {
            return this.$4(a, "FBIDKeyset")
        };
        b.getOptionalStringSet = function(a) {
            return this.$4(a, "StringSet")
        };
        b.getEnumToBoolMap = function(a) {
            return this.$3(a, "EnumToBoolMap")
        };
        b.getEnumToEnumMap = function(a) {
            return this.$3(a, "EnumToEnumMap")
        };
        b.getEnumToFloatMap = function(a) {
            return this.$3(a, "EnumToFloatMap")
        };
        b.getEnumToIntMap = function(a) {
            return this.$3(a, "EnumToIntMap")
        };
        b.getEnumToStringMap = function(a) {
            return this.$3(a, "EnumToStringMap")
        };
        b.getIntToBoolMap = function(a) {
            return this.$3(a, "IntToBoolMap")
        };
        b.getIntToEnumMap = function(a) {
            return this.$3(a, "IntToEnumMap")
        };
        b.getIntToFloatMap = function(a) {
            return this.$3(a, "IntToFloatMap")
        };
        b.getIntToIntMap = function(a) {
            return this.$3(a, "IntToIntMap")
        };
        b.getIntToStringMap = function(a) {
            return this.$3(a, "IntToStringMap")
        };
        b.getStringToBoolMap = function(a) {
            return this.$3(a, "StringToBoolMap")
        };
        b.getStringToEnumMap = function(a) {
            return this.$3(a, "StringToEnumMap")
        };
        b.getStringToFloatMap = function(a) {
            return this.$3(a, "StringToFloatMap")
        };
        b.getStringToIntMap = function(a) {
            return this.$3(a, "StringToIntMap")
        };
        b.getStringToStringMap = function(a) {
            return this.$3(a, "StringToStringMap")
        };
        b.getOptionalEnumToBoolMap = function(a) {
            return this.$4(a, "EnumToBoolMap")
        };
        b.getOptionalEnumToEnumMap = function(a) {
            return this.$4(a, "EnumToEnumMap")
        };
        b.getOptionalEnumToFloatMap = function(a) {
            return this.$4(a, "EnumToFloatMap")
        };
        b.getOptionalEnumToIntMap = function(a) {
            return this.$4(a, "EnumToIntMap")
        };
        b.getOptionalEnumToStringMap = function(a) {
            return this.$4(a, "EnumToStringMap")
        };
        b.getOptionalIntToBoolMap = function(a) {
            return this.$4(a, "IntToBoolMap")
        };
        b.getOptionalIntToEnumMap = function(a) {
            return this.$4(a, "IntToEnumMap")
        };
        b.getOptionalIntToFloatMap = function(a) {
            return this.$4(a, "IntToFloatMap")
        };
        b.getOptionalIntToIntMap = function(a) {
            return this.$4(a, "IntToIntMap")
        };
        b.getOptionalIntToStringMap = function(a) {
            return this.$4(a, "IntToStringMap")
        };
        b.getOptionalStringToBoolMap = function(a) {
            return this.$4(a, "StringToBoolMap")
        };
        b.getOptionalStringToEnumMap = function(a) {
            return this.$4(a, "StringToEnumMap")
        };
        b.getOptionalStringToFloatMap = function(a) {
            return this.$4(a, "StringToFloatMap")
        };
        b.getOptionalStringToIntMap = function(a) {
            return this.$4(a, "StringToIntMap")
        };
        b.getOptionalStringToStringMap = function(a) {
            return this.$4(a, "StringToStringMap")
        };
        b.getEnumToNullableEnumMap = function(a) {
            return this.$3(a, "EnumToNullableEnumMap")
        };
        b.getEnumToNullableFloatMap = function(a) {
            return this.$3(a, "EnumToNullableFloatMap")
        };
        b.getEnumToNullableIntMap = function(a) {
            return this.$3(a, "EnumToNullableIntMap")
        };
        b.getEnumToNullableStringMap = function(a) {
            return this.$3(a, "EnumToNullableStringMap")
        };
        b.getIntToNullableEnumMap = function(a) {
            return this.$3(a, "IntToNullableEnumMap")
        };
        b.getIntToNullableFloatMap = function(a) {
            return this.$3(a, "IntToNullableFloatMap")
        };
        b.getIntToNullableIntMap = function(a) {
            return this.$3(a, "IntToNullableIntMap")
        };
        b.getIntToNullableStringMap = function(a) {
            return this.$3(a, "IntToNullableStringMap")
        };
        b.getStringToNullableEnumMap = function(a) {
            return this.$3(a, "StringToNullableEnumMap")
        };
        b.getStringToNullableFloatMap = function(a) {
            return this.$3(a, "StringToNullableFloatMap")
        };
        b.getStringToNullableIntMap = function(a) {
            return this.$3(a, "StringToNullableIntMap")
        };
        b.getStringToNullableStringMap = function(a) {
            return this.$3(a, "StringToNullableStringMap")
        };
        b.getOptionalEnumToNullableEnumMap = function(a) {
            return this.$4(a, "EnumToNullableEnumMap")
        };
        b.getOptionalEnumToNullableFloatMap = function(a) {
            return this.$4(a, "EnumToNullableFloatMap")
        };
        b.getOptionalEnumToNullableIntMap = function(a) {
            return this.$4(a, "EnumToNullableIntMap")
        };
        b.getOptionalEnumToNullableStringMap = function(a) {
            return this.$4(a, "EnumToNullableStringMap")
        };
        b.getOptionalIntToNullableEnumMap = function(a) {
            return this.$4(a, "IntToNullableEnumMap")
        };
        b.getOptionalIntToNullableFloatMap = function(a) {
            return this.$4(a, "IntToNullableFloatMap")
        };
        b.getOptionalIntToNullableIntMap = function(a) {
            return this.$4(a, "IntToNullableIntMap")
        };
        b.getOptionalIntToNullableStringMap = function(a) {
            return this.$4(a, "IntToNullableStringMap")
        };
        b.getOptionalStringToNullableEnumMap = function(a) {
            return this.$4(a, "StringToNullableEnumMap")
        };
        b.getOptionalStringToNullableFloatMap = function(a) {
            return this.$4(a, "StringToNullableFloatMap")
        };
        b.getOptionalStringToNullableIntMap = function(a) {
            return this.$4(a, "StringToNullableIntMap")
        };
        b.getOptionalStringToNullableStringMap = function(a) {
            return this.$4(a, "StringToNullableStringMap")
        };
        b.$3 = function(a, b) {
            this.$5(a, b);
            var c = this.$1[a];
            if (!Object.prototype.hasOwnProperty.call(this.$2, a) && c.defaultValue != null) {
                c.required && g(0, 5052);
                return h(b, c.defaultValue, c.enumType)
            }
            c.required || b === "Bool" || c.defaultValue != null || g(0, 5053, b, a, b, a);
            return h(b, this.$2[a], c.enumType)
        };
        b.$4 = function(a, b) {
            this.$5(a, b);
            var c = this.$1[a];
            c.required && g(0, 5054, b, a, b, a);
            c.defaultValue && g(0, 5052);
            return Object.prototype.hasOwnProperty.call(this.$2, a) ? h(b, this.$2[a], c.enumType) : null
        };
        b.$5 = function(a, b) {
            Object.prototype.hasOwnProperty.call(this.$1, a) || g(0, 5055, a), this.$1[a].type === b || g(0, 5056, a, b, this.$1[a].type)
        };
        return a
    }();
    e.exports = a
}), null);
__d("XController", ["XControllerURIBuilder", "XRequest"], (function(a, b, c, d, e, f) {
    a = function() {
        "use strict";

        function a(a, b) {
            this.$1 = a, this.$2 = b
        }
        var c = a.prototype;
        c.getURIBuilder = function(a) {
            var c = new(b("XControllerURIBuilder"))(this.$1, this.$2);
            if (a) {
                var d = this.getRequest(a);
                Object.keys(this.$2).forEach(function(a) {
                    var b = this.$2[a],
                        e = "";
                    !b.required && !Object.prototype.hasOwnProperty.call(b, "defaultValue") && (e = "Optional");
                    e = "get" + e + b.type;
                    e = d[e](a);
                    if (e == null || Object.prototype.hasOwnProperty.call(b, "defaultValue") && e === b.defaultValue) return;
                    b = "set" + b.type;
                    c[b](a, e)
                }, this)
            }
            return c
        };
        c.getRequest = function(a) {
            return new(b("XRequest"))(this.$1, this.$2, a)
        };
        a.create = function(b, c) {
            return new a(b, c)
        };
        return a
    }();
    e.exports = a
}), null);
__d("XHeartbeatController", ["XController"], (function(a, b, c, d, e, f) {
    e.exports = b("XController").create("/nw/", {})
}), null);
__d("clearTimeout", ["requireCond", "cr:806696"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = b("cr:806696")
}), null);
__d("ExecutionEnvironment", [], (function(a, b, c, d, e, f) {
    "use strict";
    b = !!(a !== void 0 && a.document && a.document.createElement);
    c = {
        canUseDOM: b,
        canUseWorkers: typeof Worker !== "undefined",
        canUseEventListeners: b && !!(a.addEventListener || a.attachEvent),
        canUseViewport: b && !!window.screen,
        isInWorker: typeof WorkerGlobalScope === "function"
    };
    e.exports = c
}), null);
__d("getSameOriginTransport", ["ExecutionEnvironment", "ex"], (function(a, b, c, d, e, f) {
    function c() {
        if (!b("ExecutionEnvironment").canUseDOM) throw new Error(b("ex")("getSameOriginTransport: %s", "Same origin transport unavailable in the server environment."));
        try {
            return new a.XMLHttpRequest()
        } catch (a) {
            throw new Error(b("ex")("getSameOriginTransport: %s", a.message))
        }
    }
    e.exports = c
}), null);
__d("killswitch", ["KSConfig"], (function(a, b, c, d, e, f) {
    "use strict";

    function a(a) {
        return b("KSConfig").killed.has(a)
    }
    e.exports = a
}), null);
__d("setTimeout", ["requireCond", "cr:807042"], (function(a, b, c, d, e, f) {
    e.exports = b("cr:807042")
}), null);
__d("NetworkHeartbeat", ["XHeartbeatController", "clearTimeout", "getSameOriginTransport", "killswitch", "setTimeout"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("XHeartbeatController").getURIBuilder().getURI().toString(),
        h = 1e3,
        i = 100,
        j = null,
        k = 0,
        l = null,
        m = b("killswitch")("DISABLE_HEARTBEAT_POLLING");

    function n(a, c) {
        l = b("getSameOriginTransport")(), l.open("GET", g, !0), l.onload = function() {
            l && l.status === 204 && (m = !0), p(a)
        }, l.onerror = function() {
            q(a, c)
        }, l.ontimeout = function() {
            q(a, c)
        }, l.send()
    }

    function o() {
        l = null, i = 100, k = 0, b("clearTimeout")(j)
    }

    function p(a) {
        o(), a()
    }

    function q(a, c) {
        j = b("setTimeout")(function() {
            r(a, c, void 0, !0)
        }, i);
        k++;
        var d = i * Math.pow(2, k);
        d <= h && (i = d);
        c()
    }

    function r(a, b, c, d) {
        c === void 0 && (c = function() {
            return !0
        }), d === void 0 && (d = !1), m || (d || l == null && c()) && n(a, b)
    }

    function a() {
        return l != null
    }
    c = {
        isHeartbeatPending: a,
        maybeStartHeartbeat: r
    };
    e.exports = c
}), null);
__d("NetworkStatusImpl", ["FBLogger", "NetworkHeartbeat", "performanceNow"], (function(a, b, c, d, e, f) {
    "use strict";
    var g, h = [],
        i = window.navigator.onLine,
        j = 2,
        k = 5e3,
        l = [],
        m = [],
        n = 0,
        o = !0,
        p = !1,
        q = function() {
            u(o)
        },
        r = function() {
            u(p)
        };

    function s() {
        var a = h.slice();
        a.forEach(function(a) {
            a({
                online: i
            })
        })
    }

    function t(a) {
        a = h.indexOf(a);
        a > -1 && h.splice(a, 1)
    }

    function u(a) {
        i !== a && !b("NetworkHeartbeat").isHeartbeatPending() && (i = a, b("FBLogger")("NetworkStatus").warn("Network switched to " + (a ? "online" : "offline")), i || b("NetworkHeartbeat").maybeStartHeartbeat(q, r), s())
    }

    function v() {
        var a = (g || (g = b("performanceNow")))();
        l = l.filter(function(b) {
            return w(b.startTime, a)
        });
        m = m.filter(function(b) {
            return w(b.startTime, a)
        });
        return m.length / l.length < j
    }
    var w = function(a, b) {
        return a > b - k
    };
    a = {
        isOnline: function() {
            return i
        },
        onChange: function(a) {
            h.push(a);
            var b = !1;
            return {
                remove: function() {
                    b || (b = !0, t(a))
                }
            }
        },
        reportError: function() {
            var a = (g || (g = b("performanceNow")))();
            l.push({
                startTime: a
            });
            b("NetworkHeartbeat").maybeStartHeartbeat(q, r, v)
        },
        reportSuccess: function() {
            var a = (g || (g = b("performanceNow")))();
            m.push({
                startTime: a
            });
            w(n, a) || (m = m.filter(function(b) {
                return w(b.startTime, a)
            }), n = a)
        }
    };
    window.addEventListener("online", function() {
        u(o)
    });
    window.addEventListener("offline", function() {
        u(p)
    });
    e.exports = a
}), null);
__d("NetworkStatusSham", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        isOnline: function() {
            return !0
        },
        onChange: function(a) {
            return {
                remove: function() {}
            }
        },
        reportError: function() {
            return
        },
        reportSuccess: function() {
            return
        }
    };
    e.exports = a
}), null);
__d("NetworkStatus", ["NetworkStatusImpl", "NetworkStatusSham", "gkx"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("gkx")("1263340") ? b("NetworkStatusImpl") : b("NetworkStatusSham");
    e.exports = a
}), null);
__d("ResourceTypes", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        JS: "js",
        CSS: "css",
        XHR: "xhr"
    };
    e.exports = a
}), null);
__d("TimingAnnotations", [], (function(a, b, c, d, e, f) {
    a = function() {
        "use strict";

        function a() {}
        var b = a.prototype;
        b.addStringAnnotation = function(a, b) {
            return this
        };
        b.addSetAnnotation = function(a, b) {
            return this
        };
        b.addSetElement = function(a, b) {
            return this
        };
        b.registerOnBeforeSend = function(a) {
            return this
        };
        b.addVectorAnnotation = function(a, b) {
            return this
        };
        b.addVectorElement = function(a, b) {
            return this
        };
        return a
    }();
    b = function() {
        "use strict";

        function a() {
            this.$1 = null, this.$2 = null, this.$3 = null, this.$4 = []
        }
        var b = a.prototype;
        b.addStringAnnotation = function(a, b) {
            this.$2 = this.$2 || new Map();
            this.$2.set(a, b);
            return this
        };
        b.addSetAnnotation = function(a, b) {
            var c = this.$1 || new Map(),
                d = c.get(a) || new Set();
            b.forEach(function(a) {
                return d.add(a)
            });
            c.set(a, d);
            this.$1 = c;
            return this
        };
        b.addSetElement = function(a, b) {
            var c = this.$1 || new Map(),
                d = c.get(a) || new Set();
            d.add(b);
            c.set(a, d);
            this.$1 = c;
            return this
        };
        b.addVectorAnnotation = function(a, b) {
            this.$3 = this.$3 || new Map();
            this.$3.set(a, b);
            return this
        };
        b.addVectorElement = function(a, b) {
            var c = this.$3 = this.$3 || new Map(),
                d = this.$3.get(a) || [];
            d.push(b);
            c.set(a, d);
            return this
        };
        b.registerOnBeforeSend = function(a) {
            this.$4.push(a);
            return this
        };
        b.prepareToSend = function() {
            var a = this;
            this.$4.forEach(function(b) {
                return b(a)
            });
            this.$4 = [];
            var b = {};
            if (this.$1 != null)
                for (var c = this.$1, d = Array.isArray(c), e = 0, c = d ? c : c[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                    var f;
                    if (d) {
                        if (e >= c.length) break;
                        f = c[e++]
                    } else {
                        e = c.next();
                        if (e.done) break;
                        f = e.value
                    }
                    f = f;
                    var g = f[0];
                    f = f[1];
                    b[g] = Array.from(f.values())
                }
            g = {};
            if (this.$2 != null)
                for (var f = this.$2, e = Array.isArray(f), d = 0, f = e ? f : f[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                    if (e) {
                        if (d >= f.length) break;
                        c = f[d++]
                    } else {
                        d = f.next();
                        if (d.done) break;
                        c = d.value
                    }
                    c = c;
                    var h = c[0];
                    c = c[1];
                    g[h] = c
                }
            h = {};
            if (this.$3 != null)
                for (var c = this.$3, d = Array.isArray(c), e = 0, c = d ? c : c[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                    if (d) {
                        if (e >= c.length) break;
                        f = c[e++]
                    } else {
                        e = c.next();
                        if (e.done) break;
                        f = e.value
                    }
                    f = f;
                    var i = f[0];
                    f = f[1];
                    h[i] = f
                }
            return {
                setProps: b,
                stringProps: g,
                vectorProps: h
            }
        };
        a.combine = function(a, b) {
            var c;
            a != null && b != null ? (a.stringProps = babelHelpers["extends"]({}, b.stringProps, a.stringProps), a.setProps = babelHelpers["extends"]({}, b.setProps, a.setProps), c = a) : a != null ? c = a : b != null && (c = b);
            return c
        };
        return a
    }();
    b.EmptyTimingAnnotations = a;
    b.EmptyTraceTimingAnnotations = a;
    b.TraceTimingAnnotations = b;
    e.exports = b
}), null);
__d("ResourceTimingsStore", ["CircularBuffer", "ResourceTypes", "TimingAnnotations", "URI", "performanceAbsoluteNow"], (function(a, b, c, d, e, f) {
    "use strict";
    var g, h, i = 1e3,
        j = new(b("TimingAnnotations").EmptyTimingAnnotations)(),
        k = {},
        l = {};
    Object.keys(b("ResourceTypes")).forEach(function(a) {
        a = b("ResourceTypes")[a];
        var c = new(b("CircularBuffer"))(i),
            d = new Map();
        c.onEvict(function(a) {
            d["delete"](a)
        });
        k[a] = {
            idx: 1,
            entries: c
        };
        l[a] = d
    });

    function m(a, c, d) {
        var e;
        switch (a) {
            case "css":
            case "js":
                var f = n.parseMakeHasteURL(c);
                f = f == null ? "unknown_resource" : f[0];
                e = d + "_" + f;
                break;
            case "xhr":
                f = new(g || (g = b("URI")))(c).getQualifiedURI();
                c = f.getDomain() + f.getPath();
                e = d + "_" + c;
                break;
            default:
                a, e = "never here"
        }
        return e
    }
    var n = {
        getUID: function(a, b) {
            var c = k[a],
                d = m(a, b, c.idx);
            c.entries.write(d);
            l[a].set(d, {
                uri: b,
                uid: d
            });
            c.idx++;
            return d
        },
        updateURI: function(a, b, c) {
            a = l[a].get(b);
            a != null && (a.uri = c)
        },
        getMapFor: function(a) {
            return l[a]
        },
        parseMakeHasteURL: function(a) {
            a = a.match(/\/rsrc\.php\/.*\/([^\?]+)/);
            if (!a) return null;
            a = a[1];
            var b = "",
                c = a.match(/\.(\w+)$/);
            c && (b = c[1]);
            return [a, b]
        },
        measureRequestSent: function(a, c) {
            a = l[a];
            a = a.get(c);
            if (a == null || a.requestSent != null) return;
            else a.requestSent = (h || (h = b("performanceAbsoluteNow")))()
        },
        measureResponseReceived: function(a, c) {
            a = l[a];
            a = a.get(c);
            if (a == null || a.requestSent == null || a.responseReceived != null) return;
            else a.responseReceived = (h || (h = b("performanceAbsoluteNow")))()
        },
        annotate: function(a, c) {
            a = l[a];
            a = a.get(c);
            if (!a) return j;
            else {
                c = a.annotations;
                if (c != null) return c;
                else {
                    c = new(b("TimingAnnotations"))();
                    a.annotations = c;
                    return c
                }
            }
        },
        getAnnotationsFor: function(a, b) {
            a = l[a];
            a = a.get(b);
            if (!a) return null;
            else {
                b = a.annotations;
                return b != null ? b.prepareToSend() : null
            }
        }
    };
    e.exports = n
}), null);
__d("nullthrows", [], (function(a, b, c, d, e, f) {
    a = function(a, b) {
        b === void 0 && (b = "Got unexpected null or undefined");
        if (a != null) return a;
        a = new Error(b);
        a.framesToPop = 1;
        throw a
    };
    e.exports = a
}), null);
__d("setIntervalAcrossTransitions", ["requireCond", "cr:896462"], (function(a, b, c, d, e, f) {
    e.exports = b("cr:896462")
}), null);
__d("CSSLoader", ["CSSLoaderConfig", "NetworkStatus", "ResourceTimingsStore", "TimeSlice", "clearInterval", "ifRequired", "isEmpty", "nullthrows", "setIntervalAcrossTransitions"], (function(a, b, c, d, e, f) {
    var g, h = 20,
        i = b("CSSLoaderConfig").timeout,
        j = b("CSSLoaderConfig").loadEventSupported,
        k, l = [],
        m, n = new Map();

    function o(a) {
        if (k) return;
        k = !0;
        var b = document.createElement("link");
        b.onload = function() {
            j = !0, b.parentNode && b.parentNode.removeChild(b)
        };
        b.rel = "stylesheet";
        b.href = "data:text/css;base64,";
        a.appendChild(b)
    }

    function p() {
        var a = [],
            c = [];
        if (Date.now() >= m) {
            for (var d = n.values(), e = Array.isArray(d), f = 0, d = e ? d : d[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                var h;
                if (e) {
                    if (f >= d.length) break;
                    h = d[f++]
                } else {
                    f = d.next();
                    if (f.done) break;
                    h = f.value
                }
                h = h;
                c.push(h.signal);
                a.push(h.error)
            }
            n.clear()
        } else
            for (var h = n, f = Array.isArray(h), e = 0, h = f ? h : h[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                if (f) {
                    if (e >= h.length) break;
                    d = h[e++]
                } else {
                    e = h.next();
                    if (e.done) break;
                    d = e.value
                }
                d = d;
                var j = d[0];
                d = d[1];
                var k = d.signal,
                    l = window.getComputedStyle ? getComputedStyle(k) : k.currentStyle;
                l && parseInt(l.height, 10) > 1 && (a.push(d.load), c.push(k), n["delete"](j))
            }
        for (var l = 0; l < c.length; l++) {
            d = b("nullthrows")(c[l].parentNode);
            d.removeChild(c[l])
        }
        if (!(g || (g = b("isEmpty")))(a)) {
            for (l = 0; l < a.length; l++) a[l]();
            m = Date.now() + i
        }
        return n.size === 0
    }

    function q(a, c, d, e) {
        var f = document.createElement("meta");
        f.id = "bootloader_" + a.replace(/[^a-z0-9]/gi, "_");
        c.appendChild(f);
        c = n.size !== 0;
        m = Date.now() + i;
        n.set(a, {
            signal: f,
            load: d,
            error: e
        });
        if (!c) var g = b("setIntervalAcrossTransitions")(function() {
            p() && b("clearInterval")(g)
        }, h)
    }

    function r(a, c, d, e, f, g) {
        var h = b("ResourceTimingsStore").getUID("css", c);
        b("ifRequired")("TimeSliceAutoclosedInteraction", function(a) {
            return a.getInteractionsActiveRightNow().forEach(function(a) {
                return a.forResourceRequest(h).addStringAnnotation("requested_in_continuation", "true")
            })
        });
        b("ResourceTimingsStore").annotate("css", h).addStringAnnotation("name", a).addStringAnnotation("source", c).addStringAnnotation("caller", "CSSLoader.loadStyleSheet");
        b("ifRequired")("TimeSliceInteraction", function(b) {
            b.informGlobally("CSSLoader.loadStyleSheet").addStringAnnotation("source", c).addStringAnnotation("name", a)
        });
        b("ResourceTimingsStore").measureRequestSent("css", h);
        var i = function() {
                b("ResourceTimingsStore").measureResponseReceived("css", h), e()
            },
            k = b("TimeSlice").getGuardedContinuation("CSSLoader link.onresponse");
        !g ? q(a, d, i, f) : j !== !0 ? (q(a, d, i, f), j === void 0 && o(d)) : (g.onload = k.bind(void 0, function() {
            g.onload = g.onerror = null, i()
        }), g.onerror = k.bind(void 0, function() {
            g.onload = g.onerror = null, f()
        }))
    }
    a = {
        loadStyleSheet: function(a, c, d, e, f, g) {
            var h = document;
            if ("createStyleSheet" in h) {
                var i;
                for (var j = 0; j < l.length; j++)
                    if (l[j].imports.length < 31) {
                        i = j;
                        break
                    }
                if (i === void 0) {
                    try {
                        l.push(h.createStyleSheet())
                    } catch (a) {
                        b("NetworkStatus").reportError();
                        g();
                        return
                    }
                    i = l.length - 1
                }
                b("NetworkStatus").reportSuccess();
                l[i].addImport(c);
                r(a, c, d, f, g, null);
                return
            }
            j = h.createElement("link");
            j.rel = "stylesheet";
            j.type = "text/css";
            j.href = c;
            e && (j.crossOrigin = "anonymous");
            r(a, c, d, f, g, j);
            d.appendChild(j)
        },
        setupEventListeners: function(a, b, c, d, e, f) {
            r(a, b, c, d, e, f)
        }
    };
    e.exports = a
}), null);
__d("TimerStorage", [], (function(a, b, c, d, e, f) {
    a = {
        ANIMATION_FRAME: "ANIMATION_FRAME",
        IDLE_CALLBACK: "IDLE_CALLBACK",
        IMMEDIATE: "IMMEDIATE",
        INTERVAL: "INTERVAL",
        TIMEOUT: "TIMEOUT"
    };
    var g = {};
    Object.keys(a).forEach(function(a) {
        return g[a] = {}
    });
    b = babelHelpers["extends"]({}, a, {
        set: function(a, b) {
            g[a][b] = !0
        },
        unset: function(a, b) {
            delete g[a][b]
        },
        clearAll: function(a, b) {
            Object.keys(g[a]).forEach(b), g[a] = {}
        },
        getStorages: function() {
            return {}
        }
    });
    e.exports = b
}), null);
/**
 * License: https://www.facebook.com/legal/license/ZtTipMAcpq9/
 */
__d("ImmediateImplementation", ["ImmediateImplementationExperiments"], (function(a, b, c, d, e, f) {
    (function(c, d) {
        "use strict";
        var e = 1,
            g = {},
            h = {},
            i = h,
            j = !1,
            k = c.document,
            l, m, n, o = "setImmediate$" + Math.random() + "$";

        function p() {
            var a = c.event;
            return !a ? !1 : a.isTrusted && ["change", "click", "contextmenu", "dblclick", "mouseup", "pointerup", "reset", "submit", "touchend"].includes(a.type) || a.type === "message" && a.source === c && typeof a.data === "string" && a.data.indexOf(o) === 0
        }

        function q(a) {
            var b = a[0];
            a = Array.prototype.slice.call(a, 1);
            g[e] = function() {
                b.apply(void 0, a)
            };
            i = i.next = {
                handle: e++
            };
            return i.handle
        }

        function r() {
            var a, b;
            while (!j && (a = h.next)) {
                h = a;
                if (b = g[a.handle]) {
                    j = !0;
                    try {
                        b(), j = !1
                    } finally {
                        s(a.handle), j && (j = !1, h.next && l(r))
                    }
                }
            }
        }

        function s(a) {
            delete g[a]
        }

        function d() {
            if (c.postMessage && !c.importScripts) {
                var a = !0,
                    b = function b() {
                        a = !1, c.removeEventListener ? c.removeEventListener("message", b, !1) : c.detachEvent("onmessage", b)
                    };
                if (c.addEventListener) c.addEventListener("message", b, !1);
                else if (c.attachEvent) c.attachEvent("onmessage", b);
                else return !1;
                c.postMessage("", "*");
                return a
            }
        }

        function t() {
            var a = function(a) {
                a.source === c && typeof a.data === "string" && a.data.indexOf(o) === 0 && r()
            };
            c.addEventListener ? c.addEventListener("message", a, !1) : c.attachEvent("onmessage", a);
            l = function() {
                var a = q(arguments);
                c.originalPostMessage ? c.originalPostMessage(o + a, "*") : c.postMessage(o + a, "*");
                return a
            };
            m = l
        }

        function u() {
            var a = new MessageChannel(),
                b = !1;
            a.port1.onmessage = function(a) {
                b = !1, r()
            };
            l = function() {
                var c = q(arguments);
                b || (a.port2.postMessage(c), b = !0);
                return c
            };
            n = l
        }

        function v() {
            var a = k.documentElement;
            l = function() {
                var b = q(arguments),
                    c = k.createElement("script");
                c.onreadystatechange = function() {
                    c.onreadystatechange = null, a.removeChild(c), c = null, r()
                };
                a.appendChild(c);
                return b
            }
        }

        function w() {
            l = function() {
                setTimeout(r, 0);
                return q(arguments)
            }
        }
        d() ? c.MessageChannel && b("ImmediateImplementationExperiments").prefer_message_channel ? (t(), u(), l = function() {
            if (p()) return m.apply(null, arguments);
            else return n.apply(null, arguments)
        }) : t() : c.MessageChannel ? u() : k && k.createElement && "onreadystatechange" in k.createElement("script") ? v() : w();
        f.setImmediate = l;
        f.clearImmediate = s
    })(typeof self === "undefined" ? typeof a === "undefined" ? this : a : self)
}), null);
__d("setImmediatePolyfill", ["invariant", "PromiseUsePolyfillSetImmediateGK", "ImmediateImplementation"], (function(a, b, c, d, e, f, g) {
    var h = a.setImmediate;
    if (b("PromiseUsePolyfillSetImmediateGK").www_always_use_polyfill_setimmediate || !h) {
        d = b("ImmediateImplementation");
        h = d.setImmediate
    }

    function c(a) {
        typeof a === "function" || g(0, 5912);
        for (var b = arguments.length, c = new Array(b > 1 ? b - 1 : 0), d = 1; d < b; d++) c[d - 1] = arguments[d];
        return h.apply(void 0, [a].concat(c))
    }
    e.exports = c
}), null);
__d("setImmediateAcrossTransitions", ["TimerStorage", "TimeSlice", "setImmediatePolyfill"], (function(a, b, c, d, e, f) {
    var g = b("TimerStorage").IMMEDIATE;

    function a(a) {
        var c = b("TimeSlice").guard(a, "setImmediate", {
            propagationType: b("TimeSlice").PropagationType.CONTINUATION,
            registerCallStack: !0
        });
        for (var d = arguments.length, e = new Array(d > 1 ? d - 1 : 0), f = 1; f < d; f++) e[f - 1] = arguments[f];
        var h = b("setImmediatePolyfill").apply(void 0, [c].concat(e)),
            i = g + String(h);
        b("TimeSlice").registerForCancelling(i, c);
        return h
    }
    e.exports = a
}), null);
__d("setTimeoutAcrossTransitions", ["requireCond", "cr:986633"], (function(a, b, c, d, e, f) {
    e.exports = b("cr:986633")
}), null);
__d("Promise", ["TimeSlice", "setImmediateAcrossTransitions", "setTimeoutAcrossTransitions"], (function(a, b, c, d, e, f) {
    "use strict";

    function g() {}
    var h = null,
        i = {};

    function j(a) {
        try {
            return a.then
        } catch (a) {
            h = a;
            return i
        }
    }

    function k(a, b) {
        try {
            return a(b)
        } catch (a) {
            h = a;
            return i
        }
    }

    function l(a, b, c) {
        try {
            a(b, c)
        } catch (a) {
            h = a;
            return i
        }
    }

    function m(a) {
        if (typeof this !== "object") throw new TypeError("Promises must be constructed via new");
        if (typeof a !== "function") throw new TypeError("not a function");
        this._state = 0;
        this._value = null;
        this._deferreds = [];
        if (a === g) return;
        t(a, this)
    }
    m._noop = g;
    m.prototype.then = function(a, b) {
        if (this.constructor !== m) return n(this, a, b);
        var c = new m(g);
        o(this, new s(a, b, c));
        return c
    };

    function n(a, b, c) {
        return new a.constructor(function(d, e) {
            var f = new m(g);
            f.then(d, e);
            o(a, new s(b, c, f))
        })
    }

    function o(a, c) {
        while (a._state === 3) a = a._value;
        if (a._state === 0) {
            a._deferreds.push(c);
            return
        }
        b("setImmediateAcrossTransitions")(function() {
            var b = a._state === 1 ? c.onFulfilled : c.onRejected;
            if (b === null) {
                c.continuation(function() {});
                a._state === 1 ? p(c.promise, a._value) : q(c.promise, a._value);
                return
            }
            b = k(c.continuation.bind(null, b), a._value);
            b === i ? q(c.promise, h) : p(c.promise, b)
        })
    }

    function p(a, b) {
        if (b === a) return q(a, new TypeError("A promise cannot be resolved with itself."));
        if (b && (typeof b === "object" || typeof b === "function")) {
            var c = j(b);
            if (c === i) return q(a, h);
            if (c === a.then && b instanceof m) {
                a._state = 3;
                a._value = b;
                r(a);
                return
            } else if (typeof c === "function") {
                t(c.bind(b), a);
                return
            }
        }
        a._state = 1;
        a._value = b;
        r(a)
    }

    function q(a, b) {
        a._state = 2, a._value = b, r(a)
    }

    function r(a) {
        for (var b = 0; b < a._deferreds.length; b++) o(a, a._deferreds[b]);
        a._deferreds = null
    }

    function s(a, c, d) {
        this.onFulfilled = typeof a === "function" ? a : null, this.onRejected = typeof c === "function" ? c : null, this.continuation = b("TimeSlice").getGuardedContinuation("Promise Handler"), this.promise = d
    }

    function t(a, b) {
        var c = !1;
        a = l(a, function(a) {
            if (c) return;
            c = !0;
            p(b, a)
        }, function(a) {
            if (c) return;
            c = !0;
            q(b, a)
        });
        !c && a === i && (c = !0, q(b, h))
    }
    m.prototype.done = function(a, c) {
        var d = new Error("Promise.done"),
            e = arguments.length ? this.then.apply(this, arguments) : this;
        e.then(null, function(a) {
            b("setTimeoutAcrossTransitions")(function() {
                if (a instanceof Error) throw a;
                else {
                    d.message = "" + a;
                    throw d
                }
            }, 0)
        })
    };
    var u = A(!0),
        v = A(!1),
        w = A(null),
        x = A(void 0),
        y = A(0),
        z = A("");

    function A(a) {
        var b = new m(m._noop);
        b._state = 1;
        b._value = a;
        return b
    }
    m.resolve = function(a) {
        if (a instanceof m) return a;
        if (a === null) return w;
        if (a === void 0) return x;
        if (a === !0) return u;
        if (a === !1) return v;
        if (a === 0) return y;
        if (a === "") return z;
        if (typeof a === "object" || typeof a === "function") try {
            var b = a.then;
            if (typeof b === "function") return new m(b.bind(a))
        } catch (a) {
            return new m(function(b, c) {
                c(a)
            })
        }
        return A(a)
    };
    m.all = function(a) {
        Array.isArray(a) || (a = [m.reject(new TypeError("Promise.all must be passed an array."))]);
        var b = Array.prototype.slice.call(a);
        return new m(function(a, c) {
            if (b.length === 0) return a([]);
            var d = b.length;

            function e(f, g) {
                if (g && (typeof g === "object" || typeof g === "function"))
                    if (g instanceof m && g.then === m.prototype.then) {
                        while (g._state === 3) g = g._value;
                        if (g._state === 1) return e(f, g._value);
                        g._state === 2 && c(g._value);
                        g.then(function(a) {
                            e(f, a)
                        }, c);
                        return
                    } else {
                        var h = g.then;
                        if (typeof h === "function") {
                            h = new m(h.bind(g));
                            h.then(function(a) {
                                e(f, a)
                            }, c);
                            return
                        }
                    }
                b[f] = g;
                --d === 0 && a(b)
            }
            for (var f = 0; f < b.length; f++) e(f, b[f])
        })
    };
    m.allSettled = function(a) {
        if (!Array.isArray(a)) return m.reject(new TypeError("Promise.allSettled must be passed an array."));
        var b = Array(a.length),
            c = function(c, d) {
                var e = a[c];
                d = typeof e === "object" && e !== null && typeof e.then === "function";
                b[c] = d ? new m(function(a, b) {
                    e.then(function(b) {
                        a({
                            status: "fulfilled",
                            value: b
                        })
                    }, function(b) {
                        a({
                            status: "rejected",
                            reason: b
                        })
                    })
                }) : m.resolve({
                    status: "fulfilled",
                    value: e
                })
            };
        for (var d = 0, e = a.length; d < e; ++d) c(d, e);
        return m.all(b)
    };
    m.reject = function(a) {
        return new m(function(b, c) {
            c(a)
        })
    };
    m.race = function(a) {
        return new m(function(b, c) {
            a.forEach(function(a) {
                m.resolve(a).then(b, c)
            })
        })
    };
    m.prototype["catch"] = function(a) {
        return this.then(null, a)
    };
    m.prototype["finally"] = function(a) {
        return this.then(function(b) {
            return m.resolve(a()).then(function() {
                return b
            })
        }, function(b) {
            return m.resolve(a()).then(function() {
                throw b
            })
        })
    };
    e.exports = m
}), null);
__d("PromiseAnnotate", [], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = {
        setDisplayName: function(a, b) {
            a.displayName = b;
            return a
        },
        getDisplayName: function(a) {
            a = a.displayName;
            if (typeof a === "string") return a;
            else return null
        }
    }
}), null);
__d("ifRequireable", ["ifRequired"], (function(a, b, c, d, e, f) {
    function a(a, c, d) {
        return b("ifRequired").call(null, a, c, d)
    }
    e.exports = a
}), null);
__d("JSResourceReference", ["Promise", "PromiseAnnotate", "ifRequireable", "ifRequired"], (function(a, b, c, d, e, f) {
    var g = function(a) {
            return a
        },
        h = [],
        i = null;

    function j(a) {
        i ? a(i) : h.push(a)
    }
    a = function() {
        "use strict";
        a.setBootloader = function(a) {
            i = a;
            for (var a = 0; a < h.length; a++) {
                var b = h[a];
                b(i)
            }
            h = []
        };

        function a(a) {
            this.$1 = a
        }
        var c = a.prototype;
        c.getModuleId = function() {
            var a = this.$1;
            return a
        };
        c.getModuleIdAsRef = function() {
            return this.$1
        };
        c.load = function() {
            var a = this,
                c = new(b("Promise"))(function(b) {
                    j(function(c) {
                        return c.loadModules([a.getModuleId()], b, (c = a.$2) != null ? c : "JSResource: unknown caller")
                    })
                });
            b("PromiseAnnotate").setDisplayName(c, "Bootload(" + this.getModuleId() + ")");
            return c
        };
        c.preload = function() {
            var a = this;
            j(function(b) {
                return b.preloadModules([a.getModuleId()])
            })
        };
        c.equals = function(a) {
            return this === a || this.$1 == a.$1
        };
        c.getModuleIfRequireable = function() {
            return b("ifRequireable").call(null, this.$1, g)
        };
        c.getModuleIfRequired = function() {
            return b("ifRequired").call(null, this.$1, g)
        };
        c.__setRef = function(a) {
            this.$2 = a;
            return this
        };
        a.loadAll = function(a, b) {
            var c = {},
                d = !1;
            for (var e = a, f = Array.isArray(e), g = 0, e = f ? e : e[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                var h;
                if (f) {
                    if (g >= e.length) break;
                    h = e[g++]
                } else {
                    g = e.next();
                    if (g.done) break;
                    h = g.value
                }
                h = h;
                h = h.$2;
                h && (d = !0, c[h] = !0)
            }
            j(function(e) {
                return e.loadModules(a.map(function(a) {
                    return a.getModuleId()
                }), b, d ? Object.keys(c).join(":") : "JSResource: unknown caller")
            })
        };
        return a
    }();
    e.exports = a
}), null);
__d("ResourceHasher", ["invariant"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = 0;
    a = {
        getAsyncHash: function(a) {
            return "async:" + a
        },
        createExternalJSHash: function() {
            return "ejs:" + h++
        },
        getValidResourceHash: function(a) {
            typeof a === "string" || g(0, 19551, a);
            return a
        }
    };
    e.exports = a
}), null);
__d("TrustedTypes", ["TrustedTypesConfig"], (function(a, b, c, d, e, f) {
    "use strict";
    if (typeof trustedTypes !== "undefined" && b("TrustedTypesConfig").useTrustedTypes) {
        var g = function(a, c) {
                return function(d) {
                    if (a(d)) return d;
                    try {
                        return c("" + d)
                    } catch (a) {
                        if (b("TrustedTypesConfig").reportOnly) return "" + d;
                        throw a
                    }
                }
            },
            h = trustedTypes;
        a = babelHelpers["extends"]({}, h, {
            createPolicy: function(a, b) {
                a = h.createPolicy(a, b);
                return {
                    createHTML: g(h.isHTML.bind(h), a.createHTML.bind(a)),
                    createScript: g(h.isScript.bind(h), a.createScript.bind(a)),
                    createScriptURL: g(h.isScriptURL.bind(h), a.createScriptURL.bind(a))
                }
            }
        });
        c = a
    } else {
        var i = function(a) {
            return a
        };
        d = {
            isHTML: function() {
                return !1
            },
            isScriptURL: function() {
                return !1
            },
            isScript: function() {
                return !1
            },
            createPolicy: function(a, b) {
                return {
                    createHTML: i,
                    createScriptURL: i,
                    createScript: i
                }
            }
        };
        c = d
    }
    e.exports = c
}), null);
__d("createTrustedScriptURLFromFacebookURI", ["TrustedTypes", "URI", "isCdnURI", "isFacebookURI"], (function(a, b, c, d, e, f) {
    "use strict";
    var g, h = "fburi-scripturls",
        i, j = {
            createScriptURL: function(a) {
                var c = (g || (g = b("URI"))).tryParseURI(a);
                if (c != null && (b("isFacebookURI")(c) || b("isCdnURI")(c))) return a;
                throw new TypeError()
            }
        };

    function k() {
        if (i) return;
        i = b("TrustedTypes").createPolicy(h, j)
    }

    function l() {
        i || k();
        return i
    }

    function a(a) {
        return l().createScriptURL(a)
    }
    e.exports = a
}), null);
__d("Bootloader", ["invariant", "requireCond", "BootloaderConfig", "BootloaderEndpoint", "BootloaderEvents", "BootloaderEventsManager", "CSRBitMap", "CSRIndexUtil", "CSSLoader", "ErrorPubSub", "FBLogger", "JSResourceReference", "cr:696703", "NetworkStatus", "ResourceHasher", "ResourceTimingsStore", "TAAL", "TimeSlice", "createTrustedScriptURLFromFacebookURI", "ex", "ifRequireable", "nullthrows", "performanceAbsoluteNow", "setTimeoutAcrossTransitions"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h, i, j = function() {},
        k = !!b("BootloaderConfig").deferBootloads;
    k && b("setTimeoutAcrossTransitions")(function() {
        return $.undeferBootloads()
    }, 15e3);
    var l = b("BootloaderConfig").retryQueuedBootloads,
        m = [],
        n = [],
        o = new Map(),
        p = new Map(),
        q = new Map(),
        r = new Set(),
        s = new Map(),
        t = null,
        u = new Map(),
        v = new Map(),
        w = new Map(),
        x = [],
        y = new Map(),
        z = new Set(),
        A = !1,
        B = new Set(),
        C = !1,
        D = new(b("BootloaderEventsManager"))(),
        E = b("BootloaderConfig").jsRetries || [],
        F = b("BootloaderConfig").jsRetryAbortNum,
        aa = b("BootloaderConfig").jsRetryAbortTime,
        G = E.length > 0;
    (h || (h = b("ErrorPubSub"))).unshiftListener(function(a) {
        var b = [];
        for (var c = o, d = Array.isArray(c), e = 0, c = d ? c : c[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
            var f;
            if (d) {
                if (e >= c.length) break;
                f = c[e++]
            } else {
                e = c.next();
                if (e.done) break;
                f = e.value
            }
            f = f;
            var g = f[0];
            f[1];
            if (p.has(g)) continue;
            f = J(g);
            if (f.type === "csr" || f.type === "async") continue;
            b.push(f.src)
        }
        a.loadingUrls = b
    });

    function H(a) {
        if (k || !C) return !1;
        if (!l) return !0;
        for (var a = a, b = Array.isArray(a), c = 0, a = b ? a : a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
            var d, e;
            if (b) {
                if (c >= a.length) break;
                e = a[c++]
            } else {
                c = a.next();
                if (c.done) break;
                e = c.value
            }
            e = e;
            e = s.get(e);
            if (!e) return !1;
            e = [e.r, ((d = e.rdfds) == null ? void 0 : d.r) || [], ((d = e.rds) == null ? void 0 : d.r) || []];
            for (var d = 0; d < e.length; d++) {
                var f = e[d];
                for (var f = f, g = Array.isArray(f), h = 0, f = g ? f : f[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                    var i;
                    if (g) {
                        if (h >= f.length) break;
                        i = f[h++]
                    } else {
                        h = f.next();
                        if (h.done) break;
                        i = h.value
                    }
                    i = i;
                    if (!u.has(i)) return !1
                }
            }
        }
        return !0
    }

    function I(a) {
        var c = s.get(a);
        if (!c) throw new Error(b("TAAL").blameToPreviousFile(b("ex")("Bootloader: %s is not in the component map", a)));
        return c
    }

    function J(a) {
        var c = u.get(a);
        if (!c) throw new Error(b("TAAL").blameToPreviousFile(b("ex")("No resource entry for hash: %s", a)));
        return c
    }

    function K(a, c) {
        var d = b("ResourceHasher").getAsyncHash(a);
        if (!u.has(d)) u.set(d, {
            type: "async",
            module: a,
            blocking: !!c
        });
        else {
            a = J(d);
            a.type === "async" || g(0, 21557);
            a.blocking && !c && (a.blocking = !1)
        }
        return d
    }

    function L() {
        t || (t = document.head || document.getElementsByTagName("head")[0] || document.body);
        return t
    }

    function M(a) {
        var b = document.createDocumentFragment();
        a(b);
        L().appendChild(b)
    }

    function N() {
        if (!G) return !1;
        var a = x.length;
        if (a < F) return !0;
        a = x[a - 1] - x[a - F];
        a < aa && (b("FBLogger")("bootloader").warn("JS retry abort"), G = !1);
        return G
    }

    function O(a, b, c) {
        if (o.has(a) || r.has(a)) return;
        r.add(a);
        var d = void 0;
        switch (b.type) {
            case "async":
                S(a, b, c, null);
                return;
            case "css":
                d = "style";
                break;
            case "js":
                d = "script";
                break;
            default:
                d = b.type, g(0, 3721)
        }
        a = document.createElement("link");
        a.href = b.src;
        a.rel = "preload";
        a.as = d;
        b.nc || (a.crossOrigin = "anonymous");
        c.appendChild(a)
    }

    function P(a, c, d, e) {
        var f = document.createElement("script");
        f.src = b("createTrustedScriptURLFromFacebookURI")(c.src);
        f.async = !0;
        c.nc || (f.crossOrigin = "anonymous");
        Q(f, a, c, d);
        e.appendChild(f);
        return f
    }

    function Q(a, c, d, e) {
        var f = a.src,
            g = (i || (i = b("performanceAbsoluteNow")))(),
            h = b("TimeSlice").getGuardedContinuation("Bootloader script.onresponse"),
            j = b("ResourceTimingsStore").getUID("js", f);
        b("ifRequireable")("TimeSliceAutoclosedInteraction", function(a) {
            return a.getInteractionsActiveRightNow().forEach(function(a) {
                return a.forResourceRequest(j).addStringAnnotation("requested_in_continuation", "true")
            })
        });
        b("ResourceTimingsStore").annotate("js", j).addStringAnnotation("name", c).addStringAnnotation("source", f);
        b("ifRequireable")("TimeSliceInteraction", function(a) {
            a.informGlobally("bootloader._loadJS").addStringAnnotation("source", f).addStringAnnotation("name", c)
        });
        b("ResourceTimingsStore").measureRequestSent("js", j);
        a.onload = h.bind(void 0, function() {
            var a;
            a = (a = w.get(f)) != null ? a : 0;
            a && b("FBLogger")("bootloader").info("JS retry success [%s] at %s | time: %s | retries: %s", c, f, (i || (i = b("performanceAbsoluteNow")))() - g, a);
            b("ResourceTimingsStore").measureResponseReceived("js", j);
            e()
        });
        a.onreadystatechange = function() {
            ["loaded", "complete"].includes(this.readyState) && (b("ResourceTimingsStore").measureResponseReceived("js", j), h.bind(void 0, e)())
        };
        a.onerror = h.bind(void 0, function() {
            var h;
            b("ResourceTimingsStore").measureResponseReceived("js", j);
            h = (h = w.get(f)) != null ? h : 0;
            var k = (i || (i = b("performanceAbsoluteNow")))();
            N() && h < E.length ? (x.push(k), setTimeout(function() {
                if (!N()) return;
                var b = a.parentNode;
                b && (b.removeChild(a), P(c, d, e, b))
            }, E[h]), w.set(f, h + 1)) : (q.set(c, k), b("FBLogger")("bootloader").warn("JS loading error [%s] at %s | time: %s | retries: %s | concurrency: %s", c, f, k - g, h, o.size - p.size), b("NetworkStatus").reportError(), e())
        })
    }

    function R(a, c, d) {
        return function() {
            b("FBLogger")("bootloader").warn("CSS timeout [%s] at %s | concurrency: %s", a, c.src, o.size - p.size), q.set(a, (i || (i = b("performanceAbsoluteNow")))()), b("NetworkStatus").reportError(), d()
        }
    }

    function S(a, c, d, e) {
        if (o.has(a)) return;
        o.set(a, (i || (i = b("performanceAbsoluteNow")))());
        window.CavalryLogger && window.CavalryLogger.getInstance().measureResources({
            name: a,
            type: c.type
        }, e);
        switch (c.type) {
            case "js":
                P(a, c, function() {
                    return $.done(a)
                }, d);
                break;
            case "css":
                e = function() {
                    return $.done(a)
                };
                b("CSSLoader").loadStyleSheet(a, c.src, d, !c.nc, e, R(a, c, e));
                break;
            case "async":
                b("BootloaderEndpoint").load(c.module, c.blocking, a);
                break;
            default:
                c.type, g(0, 3721)
        }
    }

    function T(a, c, d, e, f) {
        var h = new Map(),
            i = [];
        for (var a = W(a), j = Array.isArray(a), k = 0, a = j ? a : a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
            var l;
            if (j) {
                if (k >= a.length) break;
                l = a[k++]
            } else {
                k = a.next();
                if (k.done) break;
                l = k.value
            }
            l = l;
            var m = l[0];
            l = l[1];
            switch (l.type) {
                case "css":
                    l.nonblocking || i.push(D.rsrcDone(m));
                    break;
                case "js":
                    i.push(D.rsrcDone(m));
                    break;
                case "async":
                    l.blocking && i.push(D.rsrcDone(m));
                    break;
                default:
                    l.type, g(0, 3721)
            }
            o.has(m) || h.set(m, l);
            e == null ? void 0 : e.set(m, l)
        }
        if (c) {
            var n = b("cr:696703") ? b("cr:696703").getCallbackScheduler() : function(a) {
                return a()
            };
            D.registerCallback(function() {
                n(c)
            }, i)
        }
        for (var m = h, l = Array.isArray(m), k = 0, m = l ? m : m[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
            if (l) {
                if (k >= m.length) break;
                j = m[k++]
            } else {
                k = m.next();
                if (k.done) break;
                j = k.value
            }
            a = j;
            e = a[0];
            i = a[1];
            O(e, i, d);
            S(e, i, d, f)
        }
    }

    function U(a, c, d) {
        u.set(a, c);
        if (c.type === "async" || c.type === "csr") return;
        c = c.p;
        if (c)
            for (var c = b("CSRIndexUtil").parseCSRIndexes(c), e = Array.isArray(c), f = 0, c = e ? c : c[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                var g;
                if (e) {
                    if (f >= c.length) break;
                    g = c[f++]
                } else {
                    f = c.next();
                    if (f.done) break;
                    g = f.value
                }
                g = g;
                (!v.has(g) || d) && (v.set(g, a), b("CSRBitMap").add(g))
            }
    }

    function ba(a, c) {
        var d = D.bootload(c);
        if (z.has(d)) return [d, null];
        z.add(d);
        a = {
            ref: a,
            components: c,
            timesliceContext: b("TimeSlice").getContext(),
            startTime: (i || (i = b("performanceAbsoluteNow")))(),
            callbackStart: 0,
            callbackEnd: 0,
            tierOne: new Map(),
            tierTwo: new Map(),
            tierThree: new Map(),
            beRequests: new Map()
        };
        b("BootloaderEvents").notifyBootloadStart(a);
        return [d, a]
    }

    function V(a) {
        return b("ifRequireable").call(null, a, function() {
            return !0
        }, function() {
            return !1
        })
    }

    function ca(a, c, e, f) {
        y.has(a) || y.set(a, {
            firstBootloadStart: (i || (i = b("performanceAbsoluteNow")))(),
            logData: new Set()
        });
        f && b("nullthrows")(y.get(a)).logData.add(f);
        var g = I(a),
            h = g.r,
            j = g.rdfds,
            k = g.rds;
        g = g.be;
        g = V(a) ? null : K(a, g);
        g == null && D.notify(D.beDone(a));
        T(g != null ? [g].concat(h) : h, function() {
            return D.notify(D.tierOne(a))
        }, e, f == null ? void 0 : f.tierOne);
        T((j == null ? void 0 : j.r) || [], function() {
            return D.registerCallback(function() {
                D.notify(D.tierTwoStart(a)), d.call(null, (j == null ? void 0 : j.m) || [], function() {
                    return D.notify(D.tierTwo(a))
                })
            }, [D.tierOne(a), c])
        }, e, f == null ? void 0 : f.tierTwo);
        T((k == null ? void 0 : k.r) || [], function() {
            return D.registerCallback(function() {
                D.notify(D.tierThreeStart(a)), d.call(null, (k == null ? void 0 : k.m) || [], function() {
                    return D.notify(D.tierThree(a))
                })
            }, [D.tierTwo(a)])
        }, e, f == null ? void 0 : f.tierThree)
    }

    function W(a) {
        var c = new Map();
        for (var a = a, d = Array.isArray(a), e = 0, a = d ? a : a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
            var f;
            if (d) {
                if (e >= a.length) break;
                f = a[e++]
            } else {
                e = a.next();
                if (e.done) break;
                f = e.value
            }
            f = f;
            var h = u.get(f);
            if (!h) {
                b("FBLogger")("bootloader").mustfix("Unable to resolve resource %s.", f);
                continue
            }
            var i;
            if (h.type === "csr") i = b("CSRIndexUtil").parseCSRIndexes(h.src);
            else if (h.p) i = b("CSRIndexUtil").parseCSRIndexes(h.p);
            else {
                c.set(f, h);
                continue
            }
            for (var f = i, h = Array.isArray(f), i = 0, f = h ? f : f[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                var j;
                if (h) {
                    if (i >= f.length) break;
                    j = f[i++]
                } else {
                    i = f.next();
                    if (i.done) break;
                    j = i.value
                }
                j = j;
                j = b("nullthrows")(v.get(j), "No hash for rsrcIndex:" + j);
                var k = J(j);
                k.type !== "csr" || g(0, 20056, j);
                c.set(j, k)
            }
        }
        return c.entries()
    }

    function X(a) {
        var c, d = a.getAttribute("data-bootloader-hash");
        if (d == null) return;
        var e = b("ResourceHasher").getValidResourceHash(d);
        if (a.id) {
            if (B.has(a.id)) return;
            B.add(a.id)
        }
        d = a.tagName == "SCRIPT" ? {
            src: a.src,
            type: "js"
        } : {
            src: a.href,
            type: "css"
        };
        a.crossOrigin == null && (d.nc = 1);
        d.type === "css" && a.getAttribute("data-nonblocking") && (d.nonblocking = 1);
        d.p = a.getAttribute("data-p");
        u.has(e) && !b("BootloaderConfig").silentDups && b("FBLogger")("bootloader").warn("Duplicate resource [%s]: %s", e, d.src);
        U(e, d, !0);
        o.set(e, (i || (i = b("performanceAbsoluteNow")))());
        var f = function() {
            return $.done(e)
        };
        c = d.type === "js" ? !a.getAttribute("async") : ((c = a.parentNode) == null ? void 0 : c.tagName) === "HEAD";
        c || window._btldr && window._btldr[e] ? f() : d.type === "js" ? Q(a, e, d, f) : b("CSSLoader").setupEventListeners(e, d.src, L(), f, R(e, d, f), a)
    }

    function Y() {
        if (A) return;
        A = !0;
        Array.from(document.getElementsByTagName("link")).forEach(function(a) {
            return X(a)
        });
        Array.from(document.getElementsByTagName("script")).forEach(function(a) {
            return X(a)
        })
    }

    function Z() {
        C = !0;
        var a = n;
        n = [];
        a.forEach(function(a) {
            var b = a[0],
                c = a[1],
                d = a[2];
            a = a[3];
            a(function() {
                $.loadModules.apply($, [b, c, d])
            })
        });
        a = m;
        m = [];
        a.forEach(function(a) {
            var b = a[0];
            a = a[1];
            a(function() {
                $.preloadModules.apply($, [b])
            })
        })
    }
    var $ = {
        preloadModules: function(a) {
            if (!H(a)) {
                var c = b("TimeSlice").getGuardedContinuation("Deferred: Bootloader.preloadModules");
                m.push([a, c]);
                return
            }
            var d = [];
            for (var c = a, a = Array.isArray(c), e = 0, c = a ? c : c[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                var f;
                if (a) {
                    if (e >= c.length) break;
                    f = c[e++]
                } else {
                    e = c.next();
                    if (e.done) break;
                    f = e.value
                }
                f = f;
                if (V(f)) continue;
                var g = I(f),
                    h = g.r,
                    i = g.rdfds;
                g = g.be;
                d.push(K(f, g));
                d.push.apply(d, h);
                d.push.apply(d, (i == null ? void 0 : i.r) || [])
            }
            M(function(a) {
                for (var b = W(d), c = Array.isArray(b), e = 0, b = c ? b : b[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                    var f;
                    if (c) {
                        if (e >= b.length) break;
                        f = b[e++]
                    } else {
                        e = b.next();
                        if (e.done) break;
                        f = e.value
                    }
                    f = f;
                    var g = f[0];
                    f = f[1];
                    O(g, f, a)
                }
            })
        },
        loadModules: function(a, c, e) {
            c === void 0 && (c = j);
            e === void 0 && (e = "loadModules: unknown caller");
            var f = !1,
                g = function() {
                    f || c.apply(void 0, arguments)
                },
                h = {
                    remove: function() {
                        f = !0
                    }
                };
            if (!H(a)) {
                var k = "Deferred: Bootloader.loadModules";
                k = b("TimeSlice").getGuardedContinuation(k);
                n.push([a, g, e, k]);
                return h
            }
            k = ba(e, a);
            var l = k[0],
                m = k[1];
            D.registerCallback(d.bind(null, a, function() {
                m && (m.callbackStart = (i || (i = b("performanceAbsoluteNow")))()), g.apply(void 0, arguments), m && (m.callbackEnd = (i || (i = b("performanceAbsoluteNow")))()), D.notify(l)
            }), a.map(function(a) {
                return D.tierOne(a)
            }));
            M(function(b) {
                for (var c = a, d = Array.isArray(c), e = 0, c = d ? c : c[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                    var f;
                    if (d) {
                        if (e >= c.length) break;
                        f = c[e++]
                    } else {
                        e = c.next();
                        if (e.done) break;
                        f = e.value
                    }
                    f = f;
                    ca(f, l, b, m)
                }
            });
            if (m) {
                k = new Set();
                for (var o = a, p = Array.isArray(o), q = 0, o = p ? o : o[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                    var r;
                    if (p) {
                        if (q >= o.length) break;
                        r = o[q++]
                    } else {
                        q = o.next();
                        if (q.done) break;
                        r = q.value
                    }
                    r = r;
                    k.add(D.beDone(r));
                    k.add(D.tierThree(r))
                }
                r = [m.tierOne, m.tierTwo, m.tierThree];
                for (var q = 0; q < r.length; q++) {
                    p = r[q];
                    for (var o = p.keys(), p = Array.isArray(o), s = 0, o = p ? o : o[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                        var t;
                        if (p) {
                            if (s >= o.length) break;
                            t = o[s++]
                        } else {
                            s = o.next();
                            if (s.done) break;
                            t = s.value
                        }
                        t = t;
                        k.add(D.rsrcDone(t))
                    }
                }
                D.registerCallback(function() {
                    return b("BootloaderEvents").notifyBootload(m)
                }, Array.from(k));
                b("ifRequireable")("m#TimeSliceInteraction", function(b) {
                    b.informGlobally("Bootloader.loadResources").addSetAnnotation("requested_hashes", Array.from(m.tierOne.keys())).addSetAnnotation("rdfd_requested_hashes", Array.from(m.tierTwo.keys())).addSetAnnotation("rd_requested_hashes", Array.from(m.tierThree.keys())).addStringAnnotation("bootloader_reference", e).addSetAnnotation("requested_components", a)
                })
            }
            return h
        },
        loadResources: function(a, c, d, e) {
            Y(), M(function(f) {
                return T(a.map(function(a) {
                    return b("ResourceHasher").getValidResourceHash(a)
                }), c, f, e, d)
            })
        },
        requestJSResource_UNSAFE_NEEDS_REVIEW_BY_SECURITY_AND_XFN: function(a) {
            var c = b("ResourceHasher").createExternalJSHash();
            U(c, {
                type: "js",
                src: a,
                nc: 1
            }, !1);
            $.loadResources([c])
        },
        done: function(a) {
            p.set(a, (i || (i = b("performanceAbsoluteNow")))()), window.CavalryLogger && window.CavalryLogger.done_js([a]), D.notify(D.rsrcDone(a))
        },
        beDone: function(a, b, c) {
            var d = new Set();
            for (var e = (e = (e = y.get(a)) == null ? void 0 : e.logData) != null ? e : [], f = Array.isArray(e), g = 0, e = f ? e : e[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                var e, h;
                if (f) {
                    if (g >= e.length) break;
                    h = e[g++]
                } else {
                    g = e.next();
                    if (g.done) break;
                    h = g.value
                }
                h = h;
                h.beRequests.set(b, c);
                for (var h = c.all.keys(), i = Array.isArray(h), j = 0, h = i ? h : h[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                    var k;
                    if (i) {
                        if (j >= h.length) break;
                        k = h[j++]
                    } else {
                        j = h.next();
                        if (j.done) break;
                        k = j.value
                    }
                    k = k;
                    d.add(D.rsrcDone(k))
                }
            }
            D.registerCallback(function() {
                return D.notify(D.beDone(a))
            }, Array.from(d))
        },
        pickupResourcesByIDs: function(a) {
            for (var b = 0; b < a.length; b++) X(document.getElementById(a[b]))
        },
        enableBootload: function(a) {
            for (var b in a) s.has(b) || s.set(b, a[b]);
            Y();
            k || Z()
        },
        undeferBootloads: function() {
            if (window.location.search.indexOf("&__deferBootloads=") !== -1) return;
            k = !1;
            s.size && Z()
        },
        markComponentsAsImmediate: function(a) {
            for (var a = a, c = Array.isArray(a), d = 0, a = c ? a : a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                var e;
                if (c) {
                    if (d >= a.length) break;
                    e = a[d++]
                } else {
                    d = a.next();
                    if (d.done) break;
                    e = d.value
                }
                e = e;
                var f = s.get(e);
                f && f.be && (delete f.be, $.done(b("ResourceHasher").getAsyncHash(e)))
            }
        },
        setResourceMap: function(a, c) {
            for (var d in a) {
                d = b("ResourceHasher").getValidResourceHash(d);
                var e = a[d],
                    f = u.get(d);
                !f ? U(d, e, !1) : (f.type === "js" && e.type === "js" || f.type === "css" && e.type === "css") && (e.d && !f.d && (f.src = e.src, f.d = 1))
            }
            if (c)
                for (var e = c, f = Array.isArray(e), a = 0, e = f ? e : e[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                    if (f) {
                        if (a >= e.length) break;
                        c = e[a++]
                    } else {
                        a = e.next();
                        if (a.done) break;
                        c = a.value
                    }
                    c = c;
                    var g = u.get(c);
                    g && U(c, g, !0)
                }
        },
        getURLToHashMap: function() {
            var a = new Map();
            for (var b = u, c = Array.isArray(b), d = 0, b = c ? b : b[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                var e;
                if (c) {
                    if (d >= b.length) break;
                    e = b[d++]
                } else {
                    d = b.next();
                    if (d.done) break;
                    e = d.value
                }
                e = e;
                var f = e[0];
                e = e[1];
                if (e.type === "async" || e.type === "csr") continue;
                a.set(e.src, f)
            }
            return a
        },
        loadPredictedResourceMap: function(a, b) {
            $.setResourceMap(a), $.loadResources(Object.keys(a), b)
        },
        getCSSResources: function(a) {
            var b = [];
            for (var a = W(a), c = Array.isArray(a), d = 0, a = c ? a : a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                var e;
                if (c) {
                    if (d >= a.length) break;
                    e = a[d++]
                } else {
                    d = a.next();
                    if (d.done) break;
                    e = d.value
                }
                e = e;
                var f = e[0];
                e = e[1];
                e.type === "css" && b.push(f)
            }
            return b
        },
        getBootloadedComponents: function() {
            var a = new Map();
            for (var b = y, c = Array.isArray(b), d = 0, b = c ? b : b[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                var e;
                if (c) {
                    if (d >= b.length) break;
                    e = b[d++]
                } else {
                    d = b.next();
                    if (d.done) break;
                    e = d.value
                }
                e = e;
                var f = e[0];
                e = e[1];
                a.set(f, e.firstBootloadStart)
            }
            return a
        },
        getResourceState: function(a) {
            return {
                loadStart: o.get(a),
                loadEnd: p.get(a),
                loadError: q.get(a)
            }
        },
        getComponentTiming: function(a) {
            var b;
            return {
                tierTwoStart: (b = D.getEventTime(D.tierTwoStart(a))) != null ? b : 0,
                tierTwoEnd: (b = D.getEventTime(D.tierTwo(a))) != null ? b : 0,
                tierThreeStart: (b = D.getEventTime(D.tierThreeStart(a))) != null ? b : 0,
                tierThreeEnd: (b = D.getEventTime(D.tierThree(a))) != null ? b : 0
            }
        },
        getLoadedResourceCount: function() {
            return p.size
        },
        getErrorCount: function() {
            return q.size
        },
        __debug: {
            componentMap: s,
            requested: o,
            resources: u,
            riMap: v,
            retries: w,
            errors: q,
            loaded: p,
            bootloaded: y,
            _resolveCSRs: W,
            _queuedLoadModules: n,
            _dequeueLoadModules: function(a) {
                a = n.splice(a, 1);
                if (!a.length) return;
                a = a[0];
                var b = a[0],
                    c = a[1],
                    d = a[2];
                a = a[3];
                var e = k,
                    f = C,
                    g = l;
                k = !1;
                C = !0;
                l = !1;
                a(function() {
                    $.loadModules.apply($, [b, c, d])
                });
                k = e;
                C = f;
                l = g
            }
        }
    };
    b("JSResourceReference").setBootloader($);
    e.exports = $
}), null);
__d("CSRFGuard", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = "for (;;);";
    var g = /^for ?\(;;\);/;
    b = {
        length: a.length,
        regex: g,
        exists: function(a) {
            return !!a.match(g)
        },
        clean: function(a) {
            var b = a.match(g);
            return b ? a.substr(b[0].length) : b
        }
    };
    e.exports = b
}), null);
__d("BootloaderEndpoint", ["Bootloader", "BootloaderEndpointConfig", "CSRFGuard", "ErrorXFBDebug", "FBLogger", "HasteResponse", "TimeSlice", "getAsyncParams", "getSameOriginTransport", "performanceAbsoluteNow", "setImmediateAcrossTransitions"], (function(a, b, c, d, e, f) {
    "use strict";
    var g, h = b("BootloaderEndpointConfig").endpointURI,
        i = 0,
        j = null,
        k = new Map(),
        l = new Map();

    function m(a, c) {
        var d = {};
        a.size && (d.modules = Array.from(a.keys()).join(","));
        c.size && (d.nb_modules = Array.from(c.keys()).join(","));
        a = Object.entries(babelHelpers["extends"]({}, d, b("getAsyncParams")("GET"))).map(function(a) {
            var b = a[0];
            a = a[1];
            return encodeURIComponent(b) + "=" + encodeURIComponent(String(a))
        }).join("&");
        return h + (h.includes("?") ? "&" : "?") + a
    }

    function n(a, c) {
        var d = m(a, c),
            e = b("getSameOriginTransport")(),
            f = i++,
            h = (g || (g = b("performanceAbsoluteNow")))();
        e.open("GET", d, !0);
        var j = b("TimeSlice").getGuardedContinuation("Bootloader _requestHastePayload");
        e.onreadystatechange = function() {
            if (e.readyState !== 4) return;
            j(function() {
                b("ErrorXFBDebug").addFromXHR(e);
                var g = e.status === 200 ? JSON.parse(b("CSRFGuard").clean(e.responseText)) : null;
                g == null ? b("FBLogger")("bootloader").warn("Invalid response from %s: %s", d, e.responseText.substr(0, 256)) : b("TimeSlice").guard(function() {
                    return o(d, g, a, c, f, h)
                }, "Bootloader receiveEndpointData", {
                    propagationType: b("TimeSlice").PropagationType.CONTINUATION
                })()
            })
        };
        e.send()
    }

    function o(a, c, d, e, f, h) {
        if (c.__error) {
            b("FBLogger")("bootloader").warn("Fatal error from bootloader endpoint: %s", a);
            return
        }
        var i = (g || (g = b("performanceAbsoluteNow")))(),
            j = c.serverGenTime;
        b("HasteResponse").handle(c, function() {
            var a = [d, e];
            for (var c = 0; c < a.length; c++) {
                var f = a[c];
                for (var f = f.values(), g = Array.isArray(f), h = 0, f = g ? f : f[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                    var i;
                    if (g) {
                        if (h >= f.length) break;
                        i = f[h++]
                    } else {
                        h = f.next();
                        if (h.done) break;
                        i = h.value
                    }
                    i = i;
                    b("Bootloader").done(i)
                }
            }
        }, function(a) {
            var c = [d, e];
            for (var g = 0; g < c.length; g++) {
                var k = c[g];
                for (var k = k.keys(), l = Array.isArray(k), m = 0, k = l ? k : k[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                    var n;
                    if (l) {
                        if (m >= k.length) break;
                        n = k[m++]
                    } else {
                        m = k.next();
                        if (m.done) break;
                        n = m.value
                    }
                    n = n;
                    b("Bootloader").beDone(n, f, babelHelpers["extends"]({
                        requestStart: h,
                        responseStart: i,
                        serverGenTime: j
                    }, a))
                }
            }
        })
    }

    function p() {
        var a = k,
            b = l;
        j = null;
        k = new Map();
        l = new Map();
        n(a, b)
    }
    a = {
        load: function(a, c, d) {
            (c ? k : l).set(a, d);
            if (b("BootloaderEndpointConfig").debugNoBatching) {
                p();
                return
            }
            if (j != null) return;
            var f = b("TimeSlice").getGuardedContinuation("Schedule async batch request: Bootloader._loadResources");
            j = b("setImmediateAcrossTransitions")(function() {
                return f(function() {
                    return p()
                })
            })
        }
    };
    e.exports = a
}), null);
__d("bx", ["invariant"], (function(a, b, c, d, e, f, g) {
    var h = {};

    function a(a) {
        var b = h[a];
        !b && g(0, 3199, a);
        return b
    }
    a.add = function(a) {
        var b = !1;
        for (var c in a) c in h || (a[c].loggingID = c, h[c] = a[c])
    };
    a.getURL = function(a) {
        return a.uri
    };
    e.exports = a
}), null);
__d("ix", ["invariant"], (function(a, b, c, d, e, f, g) {
    var h = {};

    function a(a) {
        var b = h[a];
        !b && g(0, 582, a);
        return b
    }
    a.add = function(a) {
        var b = !1;
        for (var c in a) c in h || (a[c].loggingID = c, h[c] = a[c])
    };
    e.exports = a
}), null);
__d("qex", ["invariant", "requireWeak"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = {},
        i = {};
    a = {
        _: function(a) {
            var c = h[a];
            c != null || g(0, 3203, a);
            var d = c.r,
                e = c.l;
            e != null && !i[a] && (i[a] = !0, b("requireWeak")("Banzai", function(a) {
                a.post("qex", {
                    l: e
                })
            }));
            return d
        },
        add: function(a) {
            for (var b in a) b in h || (h[b] = a[b])
        }
    };
    e.exports = a
}), null);
__d("HasteSupportData", ["ix", "bx", "gkx", "qex"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = {
        handle: function(a) {
            var c = a.bxData,
                d = a.gkxData,
                e = a.ixData;
            a = a.qexData;
            c != null && b("bx").add(c);
            d != null && b("gkx").add(d);
            e != null && g.add(e);
            a != null && b("qex").add(a)
        }
    };
    e.exports = a
}), null);
__d("CSSCore", ["invariant"], (function(a, b, c, d, e, f, g) {
    function h(a, b) {
        var c = a;
        while (c.parentNode) c = c.parentNode;
        if (c instanceof Element) {
            c = c.querySelectorAll(b);
            return Array.prototype.indexOf.call(c, a) !== -1
        }
        return !1
    }
    var i = {
        addClass: function(a, b) {
            /\s/.test(b) && g(0, 440, b);
            b && (a.classList ? a.classList.add(b) : i.hasClass(a, b) || (a.className = a.className + " " + b));
            return a
        },
        removeClass: function(a, b) {
            /\s/.test(b) && g(0, 441, b);
            b && (a.classList ? a.classList.remove(b) : i.hasClass(a, b) && (a.className = a.className.replace(new RegExp("(^|\\s)" + b + "(?:\\s|$)", "g"), "$1").replace(/\s+/g, " ").replace(/^\s*|\s*$/g, "")));
            return a
        },
        conditionClass: function(a, b, c) {
            return (c ? i.addClass : i.removeClass)(a, b)
        },
        hasClass: function(a, b) {
            /\s/.test(b) && g(0, 442);
            return a.classList ? !!b && a.classList.contains(b) : (" " + a.className + " ").indexOf(" " + b + " ") > -1
        },
        matchesSelector: function(a, b) {
            var c = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.msMatchesSelector || function(b) {
                return h(a, b)
            };
            return c.call(a, b)
        }
    };
    e.exports = i
}), null);
__d("CSS", ["CSSCore", "$"], (function(a, b, c, d, e, f) {
    a = typeof window != "undefined" ? window.CSS : null;
    var g = "hidden_elem",
        h = {
            supports: a && a.supports.bind(a),
            setClass: function(a, c) {
                b("$").fromIDOrElement(a).className = c || "";
                return a
            },
            hasClass: function(a, c) {
                return a instanceof Document || a instanceof Text ? !1 : b("CSSCore").hasClass(b("$").fromIDOrElement(a), c)
            },
            matchesSelector: function(a, c) {
                return a instanceof Document || a instanceof Text ? !1 : b("CSSCore").matchesSelector(b("$").fromIDOrElement(a), c)
            },
            addClass: function(a, c) {
                return b("CSSCore").addClass(b("$").fromIDOrElement(a), c)
            },
            removeClass: function(a, c) {
                return b("CSSCore").removeClass(b("$").fromIDOrElement(a), c)
            },
            conditionClass: function(a, c, d) {
                return b("CSSCore").conditionClass(b("$").fromIDOrElement(a), c, !!d)
            },
            toggleClass: function(a, b) {
                return h.conditionClass(a, b, !h.hasClass(a, b))
            },
            shown: function(a) {
                return !h.hasClass(a, g)
            },
            hide: function(a) {
                return h.addClass(a, g)
            },
            show: function(a) {
                return h.removeClass(a, g)
            },
            toggle: function(a) {
                return h.toggleClass(a, g)
            },
            conditionShow: function(a, b) {
                return h.conditionClass(a, g, !b)
            }
        };
    e.exports = h
}), null);
__d("Parent", ["CSS"], (function(a, b, c, d, e, f) {
    var g = {
        byTag: function(a, b) {
            b = b.toUpperCase();
            a = g.find(a, function(a) {
                return a.nodeName === b
            });
            return a instanceof Element ? a : null
        },
        byClass: function(a, c) {
            a = g.find(a, function(a) {
                return a instanceof Element && b("CSS").hasClass(a, c)
            });
            return a instanceof Element ? a : null
        },
        bySelector: function(a, b) {
            a = a;
            if (typeof a.matches === "function") {
                while (a && a !== document && !a.matches(b)) a = a.parentNode;
                return a instanceof Element ? a : null
            } else if (typeof a.msMatchesSelector === "function") {
                while (a && a !== document && !a.msMatchesSelector(b)) a = a.parentNode;
                return a instanceof Element ? a : null
            } else return g.bySelector_SLOW(a, b)
        },
        bySelector_SLOW: function(a, b) {
            a = a;
            var c = a;
            while (c.parentNode) c = c.parentNode;
            if (!(c instanceof Element) && !(c instanceof Document)) return null;
            c = c.querySelectorAll(b);
            while (a) {
                if (Array.prototype.indexOf.call(c, a) !== -1) return a instanceof Element ? a : null;
                a = a.parentNode
            }
            return a instanceof Element ? a : null
        },
        byAttribute: function(a, b) {
            a = g.find(a, function(a) {
                return a instanceof Element && !!a.getAttribute(b)
            });
            return a instanceof Element ? a : null
        },
        find: function(a, b) {
            a = a;
            while (a) {
                if (b(a)) return a;
                a = a.parentNode
            }
            return null
        }
    };
    e.exports = g
}), null);
__d("ContextualComponent", ["Parent"], (function(a, b, c, d, e, f) {
    a = function() {
        "use strict";
        a.forNode = function(b) {
            return a.$1.get(b) || null
        };
        a.closestToNode = function(c) {
            c = b("Parent").find(c, function(b) {
                return !!a.forNode(b)
            });
            return c ? a.forNode(c) : null
        };
        a.register = function(b) {
            return new a(b)
        };

        function a(a) {
            var b = a.element,
                c = a.isRoot;
            a = a.parent;
            this.$2 = c;
            this.$3 = b;
            this.$4 = a;
            this.$5 = new Set();
            this.$6 = [];
            this.$7 = [];
            this.$8()
        }
        var c = a.prototype;
        c.onCleanup = function(a) {
            this.$6.push(a)
        };
        c.onUnmount = function(a) {
            this.$7.push(a)
        };
        c.cleanup = function() {
            this.$5.forEach(function(a) {
                return a.cleanup()
            }), this.$6.forEach(function(a) {
                return a()
            }), this.$6 = []
        };
        c.unmount = function() {
            this.cleanup();
            this.$5.forEach(function(a) {
                return a.unmount()
            });
            this.$7.forEach(function(a) {
                return a()
            });
            this.$7 = [];
            var b = this.$4;
            b && (a.$1["delete"](this.$3), b.$9(this))
        };
        c.reinitialize = function() {
            var b = this.$4;
            b && (b.$9(this), this.$4 = void 0);
            a.$1["delete"](this.$3);
            this.$8()
        };
        c.$8 = function() {
            if (!this.$2 && !this.$4) {
                var b = a.closestToNode(this.$3);
                b && (this.$4 = b)
            }
            this.$4 && this.$4.$10(this);
            a.$1.set(this.$3, this)
        };
        c.$10 = function(a) {
            this.$5.add(a)
        };
        c.$9 = function(a) {
            this.$5["delete"](a)
        };
        return a
    }();
    a.$1 = new Map();
    e.exports = a
}), null);
__d("BanzaiLazyQueue", [], (function(a, b, c, d, e, f) {
    var g = [];
    a = {
        queuePost: function(a, b, c) {
            g.push([a, b, c])
        },
        flushQueue: function() {
            var a = g;
            g = [];
            return a
        }
    };
    e.exports = a
}), null);
__d("ge", [], (function(a, b, c, d, e, f) {
    function a(a, b, c) {
        if (typeof a !== "string") return a;
        else if (!b) return document.getElementById(a);
        else return g(a, b, c)
    }

    function g(a, b, c) {
        var d;
        if (h(b) == a) return b;
        else if (b.getElementsByTagName) {
            c = b.getElementsByTagName(c || "*");
            for (d = 0; d < c.length; d++)
                if (h(c[d]) == a) return c[d]
        } else {
            c = b.childNodes;
            for (d = 0; d < c.length; d++) {
                b = g(a, c[d]);
                if (b) return b
            }
        }
        return null
    }

    function h(a) {
        return a.getAttribute ? a.getAttribute("id") : null
    }
    e.exports = a
}), null);
__d("replaceTransportMarkers", ["BanzaiLazyQueue", "ge", "memoize"], (function(a, b, c, d, e, f) {
    var g = new Set();

    function h(a, c, d) {
        var e = d !== void 0 ? c[d] : c,
            f;
        if (Array.isArray(e))
            for (f = 0; f < e.length; f++) h(a, e, f);
        else if (e && typeof e === "object")
            if (e.__m) e.__lazy ? c[d] = b("memoize")(b.bind(null, e.__m)) : c[d] = b.call(null, e.__m);
            else if (e.__jsr) c[d] = new(b.call(null, "JSResourceReference"))(e.__jsr).__setRef("replaceTransportMarkers");
        else if (e.__dr) c[d] = new(b.call(null, "RequireDeferredReference"))(e.__dr).__setRef("replaceTransportMarkers");
        else if (e.__rc) e.__rc[0] === null ? c[d] = null : c[d] = b.call(null, e.__rc[0]), e.__rc[1] && (g.has(e.__rc[1]) || (g.add(e.__rc[1]), b("BanzaiLazyQueue").queuePost("require_cond_exposure_logging", {
            identifier: e.__rc[1]
        })));
        else if (e.__e) c[d] = b("ge")(e.__e);
        else if (e.__rel) c[d] = a.relativeTo;
        else if (e.__bigPipeContext) c[d] = a.bigPipeContext;
        else if (e.__bbox) c[d] = e.__bbox;
        else {
            for (var i in e) h(a, e, i);
            if (e.__map) c[d] = new Map(e.__map);
            else if (e.__set) c[d] = new Set(e.__set);
            else if (e.__imm) {
                f = e.__imm;
                a = f.method;
                e = f.value;
                c[d] = b.call(null, "immutable")[a](e)
            }
        }
    }
    e.exports = h
}), null);
__d("ServerJSDefine", ["BitMap", "replaceTransportMarkers"], (function(a, b, c, d, e, f) {
    var g = 2,
        h = 8,
        i = new(b("BitMap"))(),
        j = {
            getLoadedModuleHash: function() {
                return i.toCompressedString()
            },
            getModuleNameAndHash: function(a) {
                a = a.split("@");
                return {
                    hash: a[1],
                    name: a[0]
                }
            },
            handleDefine: function(a, c, d, f, j) {
                f >= 0 && i.set(f), define(a, c, function(g, h, i, k, c) {
                    g = {
                        data: d
                    };
                    b("replaceTransportMarkers")({
                        relativeTo: j
                    }, g);
                    if (f === -42) {
                        h = d != null && typeof d === "object" && d.__throw8367__;
                        throw new Error(a + ": " + (typeof h === "string" ? h : ""))
                    }
                    c.exports = g.data
                }, g | h)
            },
            handleDefines: function(a, b) {
                a.forEach(function(a) {
                    var c;
                    b != null ? c = [].concat(a, [b]) : c = [].concat(a, [null]);
                    j.handleDefine.apply(null, c)
                })
            }
        };
    e.exports = j
}), null);
__d("__debug", [], (function(a, b, c, d, e, f) {
    e.exports = {}
}), null);
__d("ServerJS", ["ContextualComponent", "ErrorGuard", "ServerJSDefine", "err", "ge", "replaceTransportMarkers", "__debug"], (function(a, b, c, d, e, f) {
    var g, h = 1,
        i = 2,
        j = 16,
        k = 0;
    a = function() {
        "use strict";

        function a() {
            this.$2 = {}, this.$1 = null, this.$4 = {}, this.$3 = void 0
        }
        var c = a.prototype;
        c.handle = function(a, b) {
            return this.$5(a, b, m)
        };
        c.handleWithCustomApplyEach = function(a, b, c) {
            this.$5(b, c, a)
        };
        c.$5 = function(a, c, d) {
            this.$3 = c;
            if (a.__guard != null) throw b("err")("ServerJS.handle called on data that has already been handled");
            a.__guard = !0;
            d(a.define || [], this.$6, this);
            d(a.markup || [], this.$7, this);
            d(a.elements || [], this.$8, this);
            this.$9(a.contexts || []);
            d(a.instances || [], this.$10, this);
            var e = d(a.pre_display_requires || [], this.$11, this);
            e = e.concat(d(a.require || [], this.$11, this));
            return {
                cancel: function() {
                    e.forEach(function(a) {
                        a && a.cancel()
                    })
                }
            }
        };
        c.handlePartial = function(a, b) {
            var c = this;
            (a.instances || []).forEach(function(a) {
                p(c.$2, a)
            });
            (a.markup || []).forEach(function(a) {
                o(c.$2, a)
            });
            (a.elements || []).forEach(function(a) {
                o(c.$2, a)
            });
            return this.handle(a, b)
        };
        c.setRelativeTo = function(a) {
            this.$1 = a;
            return this
        };
        c.cleanup = function(a) {
            var c = Object.keys(this.$2);
            a ? d.call(null, c, a.guard(function() {}, "SeverJS Cleanup requireLazy", {
                propagationType: a.PropagationType.ORPHAN
            })) : d.call(null, c, function() {});
            this.$2 = {};

            function f(c) {
                var d = this.$4[c],
                    a = d[0],
                    f = d[1];
                d = d[2];
                delete this.$4[c];
                f = f ? 'JS::call("' + a + '", "' + f + '", ...)' : 'JS::requireModule("' + a + '")';
                a = b("__debug").debugUnresolvedDependencies([a, c]);
                throw l(b("err")("%s did not fire because it has missing dependencies.\n%s", f, a), d)
            }
            for (var h in this.$4)(g || (g = b("ErrorGuard"))).applyWithGuard(f, this, [h], {
                name: "ServerJS:cleanup id: " + h,
                project: "ServerJSCleanup"
            })
        };
        c.$6 = function(a, c, d, e) {
            return (g || (g = b("ErrorGuard"))).applyWithGuard(b("ServerJSDefine").handleDefine, b("ServerJSDefine"), [a, c, d, e, this.$1], {
                name: "JS::define"
            })
        };
        c.$11 = function(a, c, d, e) {
            return (g || (g = b("ErrorGuard"))).applyWithGuard(this.$12, this, [a, c, d, e], {
                name: c != null ? "JS::call" : "JS::requireModule"
            })
        };
        c.$12 = function(a, c, d, e) {
            a = b("ServerJSDefine").getModuleNameAndHash(a);
            var f = a.name,
                m = a.hash,
                n;
            typeof c === "object" ? a = c : (a = d, n = c);
            d = [f].concat(a || []);
            var o;
            n != null ? o = "__call__" + f + "." + n : o = "__requireModule__" + f;
            o += "__" + k++;
            this.$4[o] = [f, n, m];
            var p = this.$3 && this.$3.bigPipeContext,
                q = (g || (g = b("ErrorGuard"))).guard(function(a) {
                    a = b.call(null, f);
                    delete this.$4[o];
                    e && b("replaceTransportMarkers")({
                        relativeTo: this.$1,
                        bigPipeContext: p
                    }, e);
                    if (n != null) {
                        if (!a[n]) throw l(b("err")('Module %s has no method "%s"', f, n), m);
                        a[n].apply(a, e || []);
                        q.__SMmeta = a[n].__SMmeta || {};
                        q.__SMmeta.module = q.__SMmeta.module || f;
                        q.__SMmeta.name = q.__SMmeta.name || n
                    }
                }.bind(this), {
                    name: n != null ? "JS::call('" + f + "', '" + n + "', ...)" : "JS::requireModule('" + f + "')"
                });
            c = define(o, d, q, h | j | i, this, 1, this.$3);
            return c
        };
        c.$10 = function(a, c, d, e) {
            (g || (g = b("ErrorGuard"))).applyWithGuard(this.$13, this, [a, c, d, e], {
                name: "JS::instance"
            })
        };
        c.$13 = function(a, c, d, e) {
            var f = null;
            a = b("ServerJSDefine").getModuleNameAndHash(a);
            var g = a.name;
            a = a.hash;
            if (c) {
                var h = this.$3 && this.$3.bigPipeContext;
                f = function() {
                    var a = b.call(null, c[0]);
                    b("replaceTransportMarkers")({
                        relativeTo: this.$1,
                        bigPipeContext: h
                    }, d);
                    var e = Object.create(a.prototype);
                    a.apply(e, d);
                    return e
                }.bind(this)
            }
            define(g, c, f, i | j, null, e)
        };
        c.$7 = function(a, c, d) {
            (g || (g = b("ErrorGuard"))).applyWithGuard(this.$14, this, [a, c, d], {
                name: "JS::markup"
            })
        };
        c.$14 = function(a, c, d) {
            a = b("ServerJSDefine").getModuleNameAndHash(a);
            var e = a.name;
            a = a.hash;
            define(e, ["HTML"], function(b) {
                try {
                    return b.replaceJSONWrapper(c).getRootNode()
                } catch (b) {
                    throw l(b, a)
                }
            }, j, null, d)
        };
        c.$8 = function(a, c, d, e) {
            (g || (g = b("ErrorGuard"))).applyWithGuard(this.$15, this, [a, c, d, e], {
                name: "JS::element"
            })
        };
        c.$15 = function(a, c, d, e) {
            a = b("ServerJSDefine").getModuleNameAndHash(a);
            var f = a.name,
                g = a.hash;
            if (c === null && d != null) {
                define(f, null, null, j, null, d);
                return
            }
            a = [];
            var i = j;
            d = d || 0;
            e != null && (a.push(e), i |= h, d++);
            define(f, a, function(a) {
                a = b("ge")(c, a);
                if (!a) {
                    var d = "";
                    throw l(b("err")('Could not find element "%s"%s', c, d), g)
                }
                return a
            }, i, null, d)
        };
        c.$9 = function(a) {
            (g || (g = b("ErrorGuard"))).applyWithGuard(this.$16, this, [a], {
                name: "ContextualComponents"
            })
        };
        c.$16 = function(a) {
            var c = this,
                d = this.$3 && this.$3.bigPipeContext;
            a.map(function(a) {
                b("replaceTransportMarkers")({
                    relativeTo: c.$1,
                    bigPipeContext: d
                }, a);
                var e = a[0];
                return [a, n(e)]
            }).sort(function(a, b) {
                return a[1] - b[1]
            }).forEach(function(a) {
                a = a[0];
                var c = a[0];
                a = a[1];
                b("ContextualComponent").register({
                    element: c,
                    isRoot: a
                })
            })
        };
        return a
    }();

    function l(a, b) {
        a.serverHash = b;
        return a
    }

    function m(a, b, c) {
        return a.map(function(a) {
            return b.apply(c, a)
        })
    }

    function n(a) {
        var b = 0;
        a = a;
        while (a) a = a.parentElement, b++;
        return b
    }

    function o(c, a) {
        var d = b("ServerJSDefine").getModuleNameAndHash(a[0]);
        d = d.name;
        d in c || (a[2] = (a[2] || 0) + 1);
        c[d] = !0
    }

    function p(c, a) {
        var d = b("ServerJSDefine").getModuleNameAndHash(a[0]);
        d = d.name;
        d in c || (a[3] = (a[3] || 0) + 1);
        c[d] = !0
    }
    e.exports = a
}), null);
__d("HasteResponse", ["Bootloader", "HasteSupportData", "ServerJS", "performanceAbsoluteNow"], (function(a, b, c, d, e, f) {
    "use strict";
    var g, h = {
        handleSRPayload: function(a) {
            b("HasteSupportData").handle(a);
            var c = a.resource_map,
                d = a.sot_upgrades;
            a = a.bootloadable;
            c != null && b("Bootloader").setResourceMap(c, d);
            a != null && b("Bootloader").enableBootload(a)
        },
        handle: function(a, c, d) {
            h.handleSRPayload(a);
            var e = a.jsmods;
            a = a.allResources;
            var f = new Map(),
                i = new Map(),
                j = 0,
                k = 0;
            b("Bootloader").loadResources(b("Bootloader").getCSSResources(a || []), function() {
                j = (g || (g = b("performanceAbsoluteNow")))(), new(b("ServerJS"))().handle(e || {}), k = g(), c && c()
            }, null, f);
            b("Bootloader").loadResources(a || [], function() {
                d && d({
                    jsmodsStart: j,
                    jsmodsEnd: k,
                    blocking: f,
                    all: i
                })
            }, null, i)
        }
    };
    e.exports = h
}), null);
__d("promiseDone", ["FBLogger", "TAAL", "setTimeoutAcrossTransitions"], (function(a, b, c, d, e, f) {
    function a(a, c, d) {
        var e = new Error("promiseDone"),
            f = arguments.length > 1 ? a.then(c, d) : a;
        f.then(null, function(a) {
            b("setTimeoutAcrossTransitions")(function() {
                if (a instanceof Error) throw a;
                else {
                    e.message = b("TAAL").blameToPreviousFile(a);
                    throw e
                }
            }, 0)
        })
    }
    e.exports = a
}), null);
__d("RequireDeferredReference", ["Promise", "requireCond", "Bootloader", "cr:696703", "emptyFunction", "ifRequireable", "ifRequired", "performanceNow", "promiseDone", "requireWeak"], (function(a, b, c, d, e, f) {
    "use strict";
    var g, h = function(a) {
        return a
    };
    a = function() {
        function a(a) {
            this.$1 = a
        }
        var c = a.prototype;
        c.getModuleId = function() {
            var a = this.$1;
            return a
        };
        c.getModuleIdAsRef = function() {
            return this.$1
        };
        c.__setRef = function(a) {
            this.$2 = a;
            return this
        };
        c.preload = function() {};
        c.getModuleIfRequired = function() {
            return b("ifRequired").call(null, this.$1, h)
        };
        c.getModuleIfRequireable = function() {
            return b("ifRequireable").call(null, this.$1, h)
        };
        c.load = function() {
            var a = this,
                c = b("ifRequireable")("m#CometInteractionTracingMetrics", function(c) {
                    return c.currentInteractionLogger().addRequireDeferred(a.getModuleId(), (g || (g = b("performanceNow")))())
                });
            return new(b("Promise"))(function(d) {
                b("requireWeak").call(null, a.getModuleId(), function(a) {
                    if (c) {
                        var e = !1;
                        c((g || (g = b("performanceNow")))(), e)
                    }
                    d(a)
                })
            })
        };
        c.loadImmediately = function(a) {
            var c, d = !1,
                e = !1;

            function f(b) {
                if (d || e) return;
                d = !0;
                a(b)
            }
            var g = b("Bootloader").loadModules.call(b("Bootloader"), [this.getModuleId()], f, (c = this.$2) != null ? c : "RequireDeferredReference.loadImmediately()");
            b("requireWeak").call(null, this.getModuleId(), function(a) {
                f(a)
            });
            return {
                remove: function() {
                    e || (e = !0, g.remove())
                }
            }
        };
        c.onReadyImmediately = function(a) {
            var c = this,
                d = !1,
                e = (g || (g = b("performanceNow")))(),
                f = b("ifRequireable")("m#CometInteractionTracingMetrics", function(a) {
                    return a.currentInteractionLogger().addRequireDeferred(c.getModuleId(), e)
                }),
                h = this.getModuleIfRequireable();
            if (h != null) {
                if (f) {
                    var i = !0;
                    f(e, i)
                }
                a(h)
            } else {
                var j = !1;
                if (b("cr:696703")) {
                    var k = b("cr:696703").getCurrentPriorityLevel();
                    this.loadImmediately(function() {
                        for (var c = arguments.length, e = new Array(c), h = 0; h < c; h++) e[h] = arguments[h];
                        b("cr:696703").runWithPriority(k, function() {
                            f && f((g || (g = b("performanceNow")))(), j), d || a.apply(void 0, e)
                        })
                    })
                } else this.loadImmediately(function() {
                    f && f((g || (g = b("performanceNow")))(), j), d || a.apply(void 0, arguments)
                })
            }
            return {
                remove: function() {
                    d = !0
                }
            }
        };
        c.onReady = function(a) {
            var c = this,
                d = !1,
                e = this.getModuleIfRequireable(),
                f = e != null ? b("Promise").resolve(e) : this.load();
            if (e != null) {
                var h = (g || (g = b("performanceNow")))();
                e = b("ifRequireable")("m#CometInteractionTracingMetrics", function(a) {
                    return a.currentInteractionLogger().addRequireDeferred(c.getModuleId(), h)
                });
                if (e) {
                    var i = !0;
                    e(h, i)
                }
            }
            b("promiseDone")(f, function() {
                d || a.apply(void 0, arguments)
            });
            return {
                remove: function() {
                    d = !0
                }
            }
        };
        return a
    }();
    e.exports = a
}), null);
__d("requireDeferred", ["RequireDeferredReference"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = {};

    function h(a, b) {
        g[a] = b
    }

    function i(a) {
        return g[a]
    }

    function a(a) {
        var c = i(a);
        if (c) return c;
        c = new(b("RequireDeferredReference"))(a);
        h(a, c);
        return c
    }
    e.exports = a
}), null);
__d("CurrentCommunity", ["CurrentCommunityInitialData"], (function(a, b, c, d, e, f) {
    a = {
        getID: function() {
            return b("CurrentCommunityInitialData").COMMUNITY_ID || "0"
        },
        getName: function() {
            return b("CurrentCommunityInitialData").COMMUNITY_NAME || ""
        }
    };
    e.exports = a
}), null);
__d("DTSG", ["invariant", "DTSGInitialData"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = b("DTSGInitialData").token || null;
    a = {
        getToken: function() {
            return h
        },
        setToken: function(a) {
            h = a
        },
        refresh: function() {
            g(0, 5809)
        }
    };
    e.exports = a
}), null);
__d("isMessengerDotComURI", [], (function(a, b, c, d, e, f) {
    var g = new RegExp("(^|\\.)messenger\\.com$", "i"),
        h = ["https"];

    function a(a) {
        if (a.isEmpty() && a.toString() !== "#") return !1;
        return !a.getDomain() && !a.getProtocol() ? !1 : h.indexOf(a.getProtocol()) !== -1 && g.test(a.getDomain())
    }
    e.exports = a
}), null);
__d("isOculusDotComURI", [], (function(a, b, c, d, e, f) {
    var g = new RegExp("(^|\\.)oculus\\.com$", "i"),
        h = ["https"];

    function a(a) {
        if (a.isEmpty() && a.toString() !== "#") return !1;
        return !a.getDomain() && !a.getProtocol() ? !1 : h.indexOf(a.getProtocol()) !== -1 && g.test(a.getDomain())
    }
    e.exports = a
}), null);
__d("DTSGUtils", ["SprinkleConfig", "isCdnURI", "isFacebookURI", "isMessengerDotComURI", "isOculusDotComURI", "isWorkplaceDotComURI"], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        getNumericValue: function(a) {
            var c = 0;
            for (var d = 0; d < a.length; d++) c += a.charCodeAt(d);
            c = c.toString();
            return b("SprinkleConfig").should_randomize ? c : b("SprinkleConfig").version + c
        },
        shouldAppendToken: function(a) {
            return !b("isCdnURI")(a) && !a.isSubdomainOfDomain("fbsbx.com") && (b("isFacebookURI")(a) || b("isMessengerDotComURI")(a) || b("isWorkplaceDotComURI")(a) || b("isOculusDotComURI")(a) || a.isSubdomainOfDomain("freebasics.com"))
        }
    };
    e.exports = a
}), null);
__d("DTSG_ASYNC", ["DTSGInitData"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("DTSGInitData").async_get_token || null;
    a = {
        getToken: function() {
            return g
        },
        setToken: function(a) {
            g = a
        }
    };
    e.exports = a
}), null);
__d("StaticSiteData", [], (function(a, b, c, d, e, f) {
    e.exports = {
        pkg_cohort_key: "__pc",
        connection_class_server_guess_key: "__ccg",
        dpr_key: "dpr",
        be_one_ahead_key: "__beoa",
        spin_rev_key: "__spin_r",
        spin_time_key: "__spin_t",
        spin_branch_key: "__spin_b",
        spin_mhenv_key: "__spin_dev_mhenv",
        weblite_key: "__wblt",
        weblite_iframe_key: "__wbltif",
        kite_key: "_ktif",
        haste_session_id_key: "__hsi",
        jsmod_key: "__dyn",
        csr_key: "__csr",
        comet_key: "__comet_req"
    }
}), null);
__d("asyncParams", [], (function(a, b, c, d, e, f) {
    var g = {};
    a = {
        add: function(a, b) {
            g[a] = b
        },
        get: function() {
            return g
        }
    };
    e.exports = a
}), null);
__d("isSocialPlugin", ["CSSCore"], (function(a, b, c, d, e, f) {
    "use strict";

    function a() {
        return !!document.body && b("CSSCore").hasClass(document.body, "plugin")
    }
    e.exports = a
}), null);
__d("getAsyncParams", ["CSRBitMap", "CurrentCommunity", "CurrentUserInitialData", "DTSG", "DTSG_ASYNC", "DTSGUtils", "Env", "ISB", "LSD", "ServerJSDefine", "SiteData", "SprinkleConfig", "StaticSiteData", "WebConnectionClassServerGuess", "WebSession", "asyncParams", "isSocialPlugin"], (function(a, b, c, d, e, f) {
    var g, h, i = 1,
        j = {
            locale: !0,
            cxobfus: !0,
            js_debug: !0,
            cquick: !0,
            ctarget: !0,
            cquick_token: !0,
            wdplevel: !0,
            prod_graphql: !0,
            sri: !0
        };

    function a(a) {
        var c, d = babelHelpers["extends"]({}, b("asyncParams").get(), (c = {
            __user: (g || (g = b("CurrentUserInitialData"))).USER_ID,
            __a: 1
        }, c[b("StaticSiteData").jsmod_key] = b("ServerJSDefine").getLoadedModuleHash(), c[b("StaticSiteData").csr_key] = b("CSRBitMap").toCompressedString(), c.__req = (i++).toString(36), c[b("StaticSiteData").be_one_ahead_key] = b("SiteData").be_one_ahead ? 1 : 0, c[b("StaticSiteData").pkg_cohort_key] = b("SiteData").pkg_cohort, c[b("StaticSiteData").dpr_key] = b("SiteData").pr, c[b("StaticSiteData").connection_class_server_guess_key] = b("WebConnectionClassServerGuess").connectionClass, c.__rev = b("SiteData").client_revision, c.__s = b("WebSession").getId(), c[b("StaticSiteData").haste_session_id_key] = b("SiteData").hsi, c[b("StaticSiteData").comet_key] = b("SiteData").is_comet ? 1 : 0, c));
        b("SiteData").force_blue && (d.force_blue = 1);
        window.location.search.slice(1).split("&").forEach(function(a) {
            a = a.split("=");
            var b = a[0];
            a = a[1];
            (b.substr(0, 4) === "tfc_" || b.substr(0, 4) === "tfi_" || b.substr(0, 3) === "mh_" || j[b] > -1) && (d[b] = a)
        });
        (h || (h = b("Env"))).isCQuick && !d.cquick && (d.cquick = (h || (h = b("Env"))).iframeKey, d.ctarget = h.iframeTarget, d.cquick_token = h.iframeToken);
        if (a == "POST") {
            c = b("DTSG").getCachedToken ? b("DTSG").getCachedToken() : b("DTSG").getToken();
            c && (d.fb_dtsg = c, b("SprinkleConfig").param_name && (d[b("SprinkleConfig").param_name] = b("DTSGUtils").getNumericValue(c)));
            b("LSD").token && (d.lsd = b("LSD").token, b("SprinkleConfig").param_name && !c && (d[b("SprinkleConfig").param_name] = b("DTSGUtils").getNumericValue(b("LSD").token)))
        }
        if (a == "GET") {
            c = b("DTSG_ASYNC").getCachedToken ? b("DTSG_ASYNC").getCachedToken() : b("DTSG_ASYNC").getToken();
            c && (d.fb_dtsg_ag = c, b("SprinkleConfig").param_name && (d[b("SprinkleConfig").param_name] = b("DTSGUtils").getNumericValue(c)))
        }
        b("ISB").token && (d.fb_isb = b("ISB").token);
        b("CurrentCommunity").getID() !== "0" && (d.__cid = b("CurrentCommunity").getID());
        b("isSocialPlugin")() && (d.__sp = 1);
        if (b("SiteData").spin) {
            d[(a = b("StaticSiteData")).spin_rev_key] = b("SiteData")[a.spin_rev_key];
            d[a.spin_branch_key] = b("SiteData")[a.spin_branch_key];
            d[a.spin_time_key] = b("SiteData")[a.spin_time_key];
            b("SiteData")[b("StaticSiteData").spin_mhenv_key] && (d[b("StaticSiteData").spin_mhenv_key] = b("SiteData")[b("StaticSiteData").spin_mhenv_key])
        }
        return d
    }
    e.exports = a
}), null);
/**
 * License: https://www.facebook.com/legal/license/09P_rcHKL4D/
 */
__d("Alea", [], (function(a, b, c, d, e, f) {
    function g() {
        var a = 4022871197,
            b = function(b) {
                b = b.toString();
                for (var c = 0; c < b.length; c++) {
                    a += b.charCodeAt(c);
                    var d = .02519603282416938 * a;
                    a = d >>> 0;
                    d -= a;
                    d *= a;
                    a = d >>> 0;
                    d -= a;
                    a += d * 4294967296
                }
                return (a >>> 0) * 23283064365386963e-26
            };
        b.version = "Mash 0.9";
        return b
    }

    function a() {
        var a = 0,
            b = 0,
            c = 0,
            d = 1;
        for (var e = arguments.length, f = new Array(e), h = 0; h < e; h++) f[h] = arguments[h];
        var i = f.length > 0 ? f : [new Date()],
            j = new g();
        a = j(" ");
        b = j(" ");
        c = j(" ");
        for (var k = 0; k < i.length; k++) a -= j(i[k]), a < 0 && (a += 1), b -= j(i[k]), b < 0 && (b += 1), c -= j(i[k]), c < 0 && (c += 1);
        j = null;
        var l = function() {
            var e = 2091639 * a + d * 23283064365386963e-26;
            a = b;
            b = c;
            c = e - (d = e | 0);
            return c
        };
        l.version = "Alea 0.9";
        l.args = i;
        return l
    }
    e.exports = a
}), null);
__d("Random", ["Alea", "ServerNonce"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = 4294967296,
        h = b("ServerNonce").ServerNonce,
        i;

    function j() {
        i == null && (i = b("Alea")(h));
        return i
    }
    var k = {
        random: function() {
            var b = typeof Uint32Array === "function" ? new Uint32Array(1) : null,
                c = a.crypto || a.msCrypto;
            if (b != null) try {
                var d = c == null ? void 0 : c.getRandomValues;
                if (typeof d === "function") {
                    var e = d.bind(c);
                    return function() {
                        try {
                            e(b)
                        } catch (a) {
                            return j()()
                        }
                        return b[0] / g
                    }
                }
            } catch (a) {}
            return j()
        }(),
        uint32: function() {
            return Math.floor(this.random() * g)
        },
        coinflip: function(a) {
            if (a === 0) return !1;
            return a <= 1 ? !0 : k.random() * a <= 1
        }
    };
    e.exports = k
}), null);
__d("WebSessionDefaultTimeoutMs", [], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = 35e3
}), null);
__d("WebSession", ["FBLogger", "Random", "WebSessionDefaultTimeoutMs", "WebStorage"], (function(a, b, c, d, e, f) {
    "use strict";
    var g, h = 36,
        i = 6,
        j = Math.pow(h, i);

    function k(a) {
        return a == null || Number.isFinite(a) === !1 || a <= 0 ? null : a
    }

    function l(a) {
        if (a == null) return null;
        var c = parseInt(a, 10);
        if ("" + c !== a) {
            b("FBLogger")("web_session").warn("Expected the web session expiry time to parse as an integer. Found `%s`.", String(a));
            return null
        }
        return k(c)
    }

    function m(a) {
        if (a == null) return null;
        if (a.length !== i) {
            b("FBLogger")("web_session").warn("Expected the web session id to be a %d character string. It was %d character(s). Received `%s`.", i, a.length, a);
            return null
        }
        if (/^[a-z0-9]+$/.test(a) === !1) {
            b("FBLogger")("web_session").warn("Expected the web session ID to be a base-%d encoded string. Received `%s`.", h, a);
            return null
        }
        return a
    }

    function n(a) {
        if (a == null) return null;
        if (typeof a !== "string" && a instanceof String === !1) {
            b("FBLogger")("web_session").warn("A non-string value was passed to `coerceSession`. This should be impossible according to this method's Flow type. The value was `%s`.", a);
            return null
        }
        a = a.split(":");
        var c = a[0];
        a = a[1];
        a = l(a);
        c = m(c);
        return a == null || c == null ? null : {
            expiryTime: a,
            id: c
        }
    }

    function o() {
        var a = Math.floor(b("Random").random() * j);
        a = a.toString(h);
        return "0".repeat(i - a.length) + a
    }
    var p = null;

    function q() {
        p == null && (p = o());
        return p
    }

    function r(a) {
        a === void 0 && (a = Date.now());
        var c = (g || (g = b("WebStorage"))).getLocalStorageForRead();
        if (c == null) return null;
        c = n(c.getItem("Session"));
        return c && a < c.expiryTime ? c : null
    }

    function s() {
        var a;
        return (a = r()) == null ? void 0 : a.id
    }

    function t() {
        var a = (g || (g = b("WebStorage"))).getSessionStorageForRead();
        if (a == null) return null;
        a = m(a.getItem("TabId"));
        if (a == null) {
            var c = (g || (g = b("WebStorage"))).getSessionStorage();
            if (c == null) return null;
            var d = o();
            c.setItem("TabId", d);
            return d
        }
        return a
    }
    a = {
        extend: function(a) {
            if (a !== void 0 && k(a) == null) {
                b("FBLogger")("web_session").warn("`WebSession.extend()` was passed an invalid target expiry time `%s`.", a);
                return
            }
            var c = Date.now();
            a = (a = a) != null ? a : c + b("WebSessionDefaultTimeoutMs");
            var d = r(c);
            if (d && d.expiryTime >= a || a <= c) return;
            c = (g || (g = b("WebStorage"))).getLocalStorage();
            if (c != null) {
                d = d == null ? o() : d.id;
                c.setItem("Session", d + ":" + a)
            }
        },
        getId: function() {
            var a, b, c = q();
            a = (a = s()) != null ? a : "";
            b = (b = t()) != null ? b : "";
            return a + ":" + b + ":" + c
        },
        getPageId_DO_NOT_USE: function() {
            return q()
        }
    };
    e.exports = a
}), null);
__d("CookieConsent", ["InitialCookieConsent"], (function(a, b, c, d, e, f) {
    "use strict";
    var g, h = (g || (g = b("InitialCookieConsent"))).deferCookies,
        i = g.shouldShowCookieBanner;
    a = {
        setConsented: function() {
            h = !1, i = !1
        },
        isDeferCookies: function() {
            return h
        },
        isCookiesBlocked: function() {
            return (g || (g = b("InitialCookieConsent"))).noCookies
        },
        shouldShowCookieBanner: function() {
            return i
        }
    };
    e.exports = a
}), null);
__d("WebStorage", ["CookieConsent", "FBLogger", "ex", "gkx", "repairLocalStorage"], (function(a, b, c, d, e, f) {
    "use strict";
    var g, h = {},
        i = {};

    function j(a, c, d) {
        if ((g || (g = b("CookieConsent"))).isCookiesBlocked() || (g || (g = b("CookieConsent"))).isDeferCookies()) return null;
        if (d === "localStorage") {
            a = !1;
            try {
                a = b("gkx")("946894")
            } catch (a) {}
            a && b("repairLocalStorage")()
        }
        Object.prototype.hasOwnProperty.call(h, d) || (h[d] = c(d));
        return h[d]
    }

    function k(a) {
        try {
            return window[a]
        } catch (a) {
            b("FBLogger")("web_storage").warn("Failed to get storage for read %s", a.message)
        }
        return null
    }

    function l(a) {
        try {
            a = window[a];
            if (a) {
                var c = "__test__" + Date.now();
                a.setItem(c, "");
                a.removeItem(c)
            }
            return a
        } catch (a) {
            c = "";
            b("FBLogger")("web_storage").warn("Failed to get storage %s" + c, a.message)
        }
        return null
    }

    function m(a) {
        var b = [];
        for (var c = 0; c < a.length; c++) b.push(a.key(c) || "");
        return b
    }

    function a(a, c, d) {
        if (a == null) return new Error("storage cannot be null");
        var e = null;
        try {
            a.setItem(c, d)
        } catch (g) {
            var f = m(a).map(function(b) {
                var c = (a.getItem(b) || "").length;
                return b + "(" + c + ")"
            });
            e = new Error(b("ex")("%sStorage quota exceeded while setting %s(%s). Items(length) follows: %s", g.name ? g.name + ": " : "", c, d.length, f.join()));
            b("FBLogger")("web_storage").catching(e).mustfix("Error set item")
        }
        return e
    }
    c = {
        getLocalStorage: function() {
            return j(h, l, "localStorage")
        },
        getSessionStorage: function() {
            return j(h, l, "sessionStorage")
        },
        getLocalStorageForRead: function() {
            return j(i, k, "localStorage")
        },
        getSessionStorageForRead: function() {
            return j(i, k, "sessionStorage")
        },
        setItemGuarded: a
    };
    e.exports = c
}), null);
__d("repairLocalStorage", ["requireDeferred"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("requireDeferred")("BanzaiODS"),
        h = 3082,
        i = "webstorage.localstorage.repair",
        j = 1 / 1e4,
        k = function() {
            var a = [],
                b = function(b) {
                    a.push(b)
                },
                c = function(a) {
                    b(a)
                };
            g.onReady(function(d) {
                d.setEntitySample(i, j), b = function(a) {
                    d.bumpEntityKey(h, i, a)
                }, a.forEach(c), a.length = 0
            });
            return c
        }(),
        l = function() {
            var a = [],
                b = function(b, c, d) {
                    a.push({
                        denominator: d,
                        event: b,
                        numerator: c
                    })
                },
                c = function(a, c, d) {
                    b(a, c, d)
                };
            g.onReady(function(d) {
                d.setEntitySample(i, j), b = function(a, b, c) {
                    d.bumpFraction(h, i, a, b, c)
                }, a.forEach(function(a) {
                    var b = a.denominator,
                        d = a.event;
                    a = a.numerator;
                    return c(d, a, b)
                }), a.length = 0
            });
            return c
        }(),
        m = !1;

    function a() {
        if (m === !0) return;
        m = !0;
        var a;
        try {
            a = window.localStorage, k("access_instance.success")
        } catch (a) {
            k("access_instance.fataled");
            return
        }
        if (a == null) {
            k("access_instance.found_null");
            return
        }
        var b = a;
        ["clear", "getItem", "removeItem", "setItem"].forEach(function(a) {
            var c;
            try {
                c = b[a], k("access_stored_value.success." + a), l("evaluate_stored_value.is_poisoned_pct." + a, 0, 1)
            } catch (b) {
                k("access_stored_value.failure." + a);
                return
            }
            if (typeof c === "string") {
                try {
                    delete b[a], k("delete_poisoned_key.success." + a)
                } catch (b) {
                    k("delete_poisoned_key.failed." + a)
                }
                l("evaluate_stored_value.is_poisoned_pct." + a, 1, 0)
            }
        })
    }
    e.exports = a
}), null);
__d("ErrorUtils", ["ErrorNormalizeUtils", "ErrorPubSub", "ErrorGuard"], (function(a, b, c, d, e, f) {
    "use strict";
    var g, h;
    c = {
        history: (g || (g = b("ErrorPubSub"))).history,
        applyWithGuard: function(a, c, d, e, f, g) {
            return (h || (h = b("ErrorGuard"))).applyWithGuard(a, c, (a = d) != null ? a : [], {
                name: f,
                onNormalizedError: e,
                deferredSource: g == null ? void 0 : g.deferredSource
            })
        },
        guard: function(a, c, d) {
            a = (h || (h = b("ErrorGuard"))).guard(a, c != null ? {
                name: c
            } : null);
            d != null && (a = a.bind(d));
            return a
        },
        normalizeError: function(a) {
            a == null && b("ErrorNormalizeUtils").normalizeError(new Error("null error"));
            return a.isNormalizedError === !0 ? a : b("ErrorNormalizeUtils").normalizeError(a)
        }
    };
    e.exports = a.ErrorUtils = c;
    typeof __t === "function" && __t.setHandler && __t.setHandler((g || b("ErrorPubSub")).reportError)
}), 3);
__d("JSCC", [], (function $module_JSCC(global, require, requireDynamic, requireLazy, module, exports) {
    var factories = {};

    function createFactory(constructor) {
        var instance, constructed = !1;
        return function() {
            constructed || (instance = constructor(), constructed = !0);
            return instance
        }
    }
    var JSCC = {
        get: function get(key) {
            if (!factories[key]) throw new Error("JSCC entry is missing");
            return factories[key]()
        },
        init: function init(constructors) {
            for (var key in constructors) factories[key] = createFactory(constructors[key]);
            return function clearJSCC() {
                for (var _key in constructors) delete factories[_key]
            }
        },
        parse: function parse(jsccMapString) {
            return eval(jsccMapString)
        }
    };
    module.exports = JSCC
}), null);
__d("PageEvents", [], (function(a, b, c, d, e, f) {
    a = Object.freeze({
        NATIVE_ONLOAD: "onload/onload",
        BIGPIPE_ONLOAD: "onload/onload_callback",
        AJAXPIPE_ONLOAD: "ajaxpipe/onload_callback",
        NATIVE_DOMREADY: "onload/dom_content_ready",
        BIGPIPE_DOMREADY: "onload/domcontent_callback",
        AJAXPIPE_DOMREADY: "ajaxpipe/domcontent_callback",
        NATIVE_ONBEFOREUNLOAD: "onload/beforeunload",
        NATIVE_ONUNLOAD: "onload/unload",
        AJAXPIPE_ONUNLOAD: "onload/exit",
        AJAXPIPE_SEND: "ajaxpipe/send",
        AJAXPIPE_FIRST_RESPONSE: "ajaxpipe/first_response",
        AJAXPIPE_ONBEFORECLEARCANVAS: "ajaxpipe/onbeforeclearcanvas"
    });
    e.exports = a
}), null);
__d("PageletEventConstsJS", [], (function(a, b, c, d, e, f) {
    e.exports = Object.freeze({
        ARRIVE_END: "arrive",
        ARRIVE_START: "prearrive",
        CSS_END: "css_load",
        CSS_START: "css",
        DISPLAY_END: "display",
        DISPLAY_START: "display_start",
        IMAGES_DISPLAYED: "images_displayed",
        JS_END: "jsdone",
        JS_START: "jsstart",
        ONLOAD_END: "onload",
        ONLOAD_START: "preonload",
        PAGELET_EVENT: "pagelet_events",
        PHASE_BEGIN: "phase_begin",
        SETUP: "setup"
    })
}), null);
__d("PageletSet", ["Arbiter"], (function(a, b, c, d, e, f) {
    var g = {},
        h = {
            hasPagelet: function(a) {
                return Object.prototype.hasOwnProperty.call(g, a)
            },
            getPagelet: function(a) {
                return g[a]
            },
            getOrCreatePagelet: function(a) {
                if (!h.hasPagelet(a)) {
                    var b = new j(a);
                    g[a] = b
                }
                return h.getPagelet(a)
            },
            getPageletIDs: function() {
                return Object.keys(g)
            },
            removePagelet: function(a) {
                if (h.hasPagelet(a)) {
                    var b = h.getPagelet(a);
                    delete g[a];
                    b.destroy()
                }
            }
        };

    function i(a, b) {
        return a.contains ? a.contains(b) : !!(a.compareDocumentPosition(b) & 16)
    }
    var j = function() {
        "use strict";

        function a(a) {
            this.id = a, this.$1 = null, this.$2 = [], this.addDestructor(function() {
                b("Arbiter").inform("pagelet/destroy", {
                    id: this.id,
                    root: this.$1
                })
            }.bind(this))
        }
        var c = a.prototype;
        c.getRoot = function() {
            return this.$1
        };
        c.setRoot = function(a) {
            this.$1 = a
        };
        c.$3 = function() {
            var a = [],
                b = this.$1;
            if (!b) return a;
            var c = h.getPageletIDs();
            for (var d = 0; d < c.length; d++) {
                var e = c[d];
                if (e === this.id) continue;
                e = g[e];
                var f = e.getRoot();
                f && i(b, f) && a.push(e)
            }
            return a
        };
        c.addDestructor = function(a) {
            this.$2.push(a)
        };
        c.destroy = function() {
            var a = this.$3();
            for (var b = 0; b < a.length; b++) {
                var c = a[b];
                h.hasPagelet(c.id) && h.removePagelet(c.id)
            }
            for (var c = 0; c < this.$2.length; c++) {
                a = this.$2[c]();
                a && a()
            }
        };
        return a
    }();
    e.exports = h
}), null);
__d("createCancelableFunction", ["emptyFunction"], (function(a, b, c, d, e, f) {
    function a(a) {
        var c = a;
        a = function() {
            for (var a = arguments.length, b = new Array(a), d = 0; d < a; d++) b[d] = arguments[d];
            return c.apply(this, b)
        };
        a.cancel = function() {
            c = b("emptyFunction")
        };
        return a
    }
    e.exports = a
}), null);
__d("isTruthy", [], (function(a, b, c, d, e, f) {
    "use strict";

    function a(a) {
        return a != null && Boolean(a)
    }
    e.exports = a
}), null);
__d("recoverableViolation", ["FBLogger"], (function(a, b, c, d, e, f) {
    "use strict";

    function a(a, c, d) {
        d = d === void 0 ? {} : d;
        d = d.error;
        c = b("FBLogger")(c);
        d && (c = c.catching(d));
        c.blameToPreviousFrame().mustfix(a);
        return null
    }
    e.exports = a
}), null);
__d("RunBlue", ["Arbiter", "BigPipeInstance", "ContextualComponent", "ExecutionEnvironment", "PageEvents", "TimeSlice", "createCancelableFunction", "emptyFunction", "isTruthy", "performanceAbsoluteNow", "recoverableViolation"], (function(a, b, c, d, e, f) {
    "use strict";
    var g, h = "onunloadhooks",
        i = "onafterunloadhooks";

    function j(c, d) {
        var e = a.CavalryLogger && a.CavalryLogger.getInstance();
        if (!e) return;
        b("isTruthy")(d) ? e.setAbsTimeStamp && e.setAbsTimeStamp(c, d) : e.setTimeStamp(c)
    }

    function c(c) {
        var d = a.PageHooks;
        if (window.domready && d) {
            d.runHook(c, "domreadyhooks:late");
            return {
                remove: b("emptyFunction")
            }
        } else return p("domreadyhooks", c)
    }

    function d(b) {
        var c = a.PageHooks;
        if (window.loaded && c) {
            var d = a.setTimeout(function() {
                c.runHook(b, "onloadhooks:late")
            }, 0);
            return {
                remove: function() {
                    return a.clearTimeout(d)
                }
            }
        } else return p("onloadhooks", b)
    }

    function f(a, b) {
        b = b === void 0 ? !window.loading_page_chrome : b;
        return b ? p("onbeforeleavehooks", a) : p("onbeforeunloadhooks", a)
    }

    function k(a, c) {
        window.onunload || (window.onunload = b("TimeSlice").guard(function() {
            b("Arbiter").inform(b("PageEvents").NATIVE_ONUNLOAD, !0, "state")
        }, "window.onunload"));
        return p(a, c)
    }

    function l(a) {
        return k(h, a)
    }

    function m(a) {
        return k(i, a)
    }

    function n(a) {
        return p("onleavehooks", a)
    }

    function o(a, c) {
        var d = b("createCancelableFunction")(c);
        c = function() {
            d(), d.cancel()
        };
        a = b("ContextualComponent").closestToNode(a);
        a && a.onCleanup(c);
        window.onleavehooks = (window.onleavehooks || []).concat(c);
        return {
            remove: function() {
                d.cancel()
            }
        }
    }

    function p(a, c) {
        var d;
        d = (d = c) != null ? d : b("emptyFunction");
        c || b("recoverableViolation")("Undefined handler is not allowed", "web_speed");
        var e = b("createCancelableFunction")(d);
        window[a] = (window[a] || []).concat(e);
        return {
            remove: function() {
                e.cancel()
            }
        }
    }

    function q(a) {
        window[a] = []
    }
    var r = b("TimeSlice").guard(function() {
        b("Arbiter").inform(b("PageEvents").NATIVE_DOMREADY, !0, "state")
    }, "DOMContentLoaded");
    a._domcontentready = r;

    function s() {
        var c = document,
            d = window;
        if (c.addEventListener) {
            var e = /AppleWebKit.(\d+)/.exec(navigator.userAgent);
            if (e && e[1] < 525) var f = a.setInterval(function() {
                /loaded|complete/.test(c.readyState) && (r(), a.clearInterval(f))
            }, 10);
            else c.addEventListener("DOMContentLoaded", r, !0)
        } else {
            e = d.location.protocol === "https:" ? "//:" : "javascript:void(0)";
            c.write('<script onreadystatechange="if (this.readyState==\'complete\') {this.parentNode.removeChild(this);_domcontentready();}" defer="defer" src="' + e + '"></');
            c.write("script>")
        }
        var g = d.onload;
        d.onload = b("TimeSlice").guard(function() {
            j("t_layout"), g && g(), b("Arbiter").inform(b("PageEvents").NATIVE_ONLOAD, !0, "state")
        }, "window.onload");
        d.onbeforeunload = b("TimeSlice").guard(function(a) {
            var c = {};
            b("Arbiter").inform(b("PageEvents").NATIVE_ONBEFOREUNLOAD, c, "state");
            c.warn || b("Arbiter").inform(b("PageEvents").AJAXPIPE_ONUNLOAD, {
                transition_type: "normal"
            });
            if (c.warn !== void 0) {
                c = c.warn.body != null ? c.warn.body : c.warn;
                a && (a.returnValue = c);
                return c
            } else return
        }, "window.onbeforeunload")
    }

    function t() {
        var a, c = (g || (g = b("performanceAbsoluteNow")))();
        ((a = window.console) == null ? void 0 : a.timeStamp) && window.console.timeStamp('perf_trace {"name": "e2e", "parent": "PageEvents.BIGPIPE_ONLOAD"}');
        j("t_onload", c);
        b("Arbiter").inform(b("PageEvents").BIGPIPE_ONLOAD, {
            ts: c
        }, "state")
    }
    var u = b("Arbiter").registerCallback(function() {
            b("BigPipeInstance").getCurrentInstance() ? b("Arbiter").subscribeOnce(b("BigPipeInstance").Events.displayed, t) : t()
        }, [b("PageEvents").NATIVE_ONLOAD]),
        v = b("Arbiter").registerCallback(function() {
            j("t_domcontent");
            var a = {
                timeTriggered: Date.now()
            };
            b("Arbiter").inform(b("PageEvents").BIGPIPE_DOMREADY, a, "state")
        }, [b("PageEvents").NATIVE_DOMREADY]);
    b("ExecutionEnvironment").canUseDOM && s();
    s = {
        onAfterLoad: d,
        onAfterUnload: m,
        onBeforeUnload: f,
        onCleanupOrLeave: o,
        onLeave: n,
        onLoad: c,
        onUnload: l,
        __domContentCallback: v,
        __onloadCallback: u,
        __removeHook: q
    };
    e.exports = s
}), null);
__d("UserTimingUtils", ["performance"], (function(a, b, c, d, e, f) {
    "use strict";
    var g, h = typeof(g || (g = b("performance"))).mark === "function" && typeof(g || (g = b("performance"))).clearMarks === "function" && typeof(g || (g = b("performance"))).measure === "function" && typeof(g || (g = b("performance"))).clearMeasures === "function",
        i = !1;
    if (h && a.PerformanceMark != null) {
        var j = "__v3",
            k = {};
        Object.defineProperty(k, "startTime", {
            get: function() {
                i = !0
            }
        });
        try {
            (g || (g = b("performance"))).measure(j, {}), new a.PerformanceMark(j, k)
        } catch (a) {} finally {
            (g || (g = b("performance"))).clearMarks(j)
        }
    }

    function c(a) {
        h && (g || (g = b("performance"))).mark(a)
    }

    function d(a, c, d) {
        d === void 0 && (d = !0);
        if (h) {
            try {
                (g || (g = b("performance"))).measure(a, c)
            } catch (a) {}
            d && (g || (g = b("performance"))).clearMarks(c);
            (g || (g = b("performance"))).clearMeasures(a)
        }
    }

    function f(a, c) {
        i && ((g || (g = b("performance"))).measure(a, c), g.clearMeasures(a))
    }
    e.exports = {
        measureEnd: d,
        measureModern: f,
        measureStart: c
    }
}), null);
__d("__getCompileTime", [], (function(a, b, c, d, e, f) {
    e.exports = {}
}), null);
__d("__getFactoryTime", [], (function(a, b, c, d, e, f) {
    e.exports = {}
}), null);
__d("__getTotalFactories", [], (function(a, b, c, d, e, f) {
    e.exports = {}
}), null);
__d("captureUsageSnapshot", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        var a = window.__bodyWrapper;
        if (!a.getCodeUsage) return {
            js_calls: {},
            document_html: "",
            stylesheets: {}
        };
        a = babelHelpers["extends"]({}, a.getCodeUsage());
        var b = String(window.document.body.outerHTML),
            c = {};
        Array.from(document.styleSheets).forEach(function(a) {
            a.href && (c[a.href] = !0)
        });
        return {
            js_calls: a,
            document_html: b,
            stylesheets: c
        }
    };
    e.exports = a
}), null);
__d("fastDeepCopy", [], (function(a, b, c, d, e, f) {
    "use strict";

    function a(a) {
        return typeof a === "object" && a !== null ? g(a) : a
    }

    function g(a) {
        var b = typeof a.constructor === "function" ? a.constructor() : {};
        if (Array.isArray(a))
            for (var c = 0; c < a.length; ++c) {
                var d = a[c];
                b[c] = typeof d === "object" && d !== null ? g(d) : d
            } else
                for (var e in a) {
                    d = a[e];
                    b[e] = typeof d === "object" && d !== null ? g(d) : d
                }
        return b
    }
    e.exports = a
}), null);
__d("BigPipe", ["requireDeferred", "Arbiter", "BigPipeExperiments", "BigPipeInstance", "BigPipePlugins", "Bootloader", "ErrorUtils", "FBLogger", "HasteResponse", "JSCC", "PageEvents", "PageletEventConstsJS", "PageletSet", "RunBlue", "ServerJS", "TimeSlice", "UserTimingUtils", "$", "captureUsageSnapshot", "clearTimeout", "fastDeepCopy", "ge", "gkx", "performanceAbsoluteNow", "setTimeout", "__getTotalFactories", "__getCompileTime", "__getFactoryTime"], (function(a, b, c, d, e, f) {
    var g, h, i = document.documentMode || +(/MSIE.(\d+)/.exec(navigator.userAgent) || [])[1],
        j = console.timeStamp && window.location.search.indexOf("pagelet_ts=1") > 0;

    function k(a, c) {
        b("UserTimingUtils").measureStart(a + " " + c)
    }

    function l(a, c, d) {
        b("UserTimingUtils").measureEnd("\u26cf " + a + " [" + c + "][phase " + d + "]", a + " " + c)
    }

    function m(a, c) {
        if (a)
            for (var d = 0; d < a.length; d++)(g || (g = b("ErrorUtils"))).applyWithGuard(new Function(a[d]), c)
    }
    var n = 1;
    a = function() {
        "use strict";

        function a(c) {
            var d = this;
            this._onDisplayDone = function(a) {
                d.arbiter.registerCallback(a, ["display_done"])
            };
            Object.assign(this, {
                arbiter: b("Arbiter"),
                rootNodeID: "content",
                lid: null,
                isAjax: !1,
                domContentCallback: b("RunBlue").__domContentCallback,
                onloadCallback: b("RunBlue").__onloadCallback,
                domContentEvt: b("PageEvents").BIGPIPE_DOMREADY,
                onloadEvt: b("PageEvents").BIGPIPE_ONLOAD,
                forceFinish: !1,
                config: {},
                _currentPhase: 0,
                _lastPhaseOfLastResponse: -1,
                _lastPhaseBeforeLastResponse: -1,
                _livePagelets: {},
                _phases: {},
                _orderedPhases: [],
                _maxPhase: 0,
                _displayDoneFired: !1,
                _displayDone: !1,
                _awaitingLIDEventQueue: []
            }, c);
            this.config || (this.config = {});
            this.automatic ? this._relevant_instance = b("BigPipeInstance").getCurrentInstance() : b("BigPipeInstance").setCurrentInstance_DO_NOT_USE(this);
            this._serverJS = new(b("ServerJS"))();
            this._informEventExternal(a.Events.init, {
                arbiter: this.arbiter
            }, b("Arbiter"));
            this._displayDoneCallback = this.arbiter.registerCallback(function() {
                var c = b("captureUsageSnapshot")();
                d._informEventExternal(a.Events.displayed, {
                    rid: d.rid,
                    ajax: d.isAjax,
                    usageSnapshot: c
                })
            }, ["display_done"]);
            this.arbiter.registerCallback(this.domContentCallback, ["pagelet_displayed_all"]);
            this._beginPhase(0);
            this.arbiter.registerCallback(this.onloadCallback, ["bigpipe_e2e_reported"]);
            this._loadedCallback = this.arbiter.registerCallback(function() {
                d._informEventExternal(a.Events.loaded, {
                    rid: d.rid,
                    ajax: d.isAjax
                }), d.arbiter.inform("bigpipe_e2e_reported", !0)
            }, ["pagelet_displayed_all"]);
            this.arbiter.registerCallback(function() {
                return d._serverJS.cleanup(b("TimeSlice"))
            }, [this.onloadEvt, "bigpipe_e2e_reported"])
        }
        var c = a.prototype;
        c._beginPhase = function(a) {
            var b = this._getOrCreatePhase(a);
            b.begun = !0;
            this._informEventExternal("phase_begin", {
                phase: a
            });
            this.arbiter.inform("phase_begin_" + a, !0, "state")
        };
        c._getOrCreatePhase = function(a) {
            if (this._phases[a]) return this._phases[a];
            var b = {
                pagelets: [],
                begun: !1,
                complete: !1
            };
            this._phases[a] = b;
            var c = 0;
            while (c < this._orderedPhases.length) {
                if (a < this._orderedPhases[c]) break;
                c++
            }
            this._orderedPhases.splice(c, 0, a);
            return b
        };
        c._tryRenderingNextPhase = function() {
            var a = this._phases[this._currentPhase];
            if (a && a.begun && !a.complete) return;
            for (var a = this._orderedPhases, b = Array.isArray(a), c = 0, a = b ? a : a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                var d;
                if (b) {
                    if (c >= a.length) break;
                    d = a[c++]
                } else {
                    c = a.next();
                    if (c.done) break;
                    d = c.value
                }
                d = d;
                var e = this._phases[d];
                if (e.begun)
                    if (e.complete) continue;
                    else return;
                else {
                    this._currentPhase = d;
                    this._beginPhase(d);
                    return
                }
            }
        };
        c._displayPageletHandler = function(a) {
            this.displayCallback ? this.displayCallback(this._displayPagelet.bind(this, a)) : this._displayPagelet(a)
        };
        c._displayPagelet = function(a) {
            k(a.id, "display");
            a.displayStarted = !0;
            this._informPageletEvent(b("PageletEventConstsJS").DISPLAY_START, a);
            var c = this._getPagelet(a),
                d = [],
                e = {};
            for (var f in a.content) {
                var g = a.content[f];
                a.append && (f = this._getPageletRootID(a));
                var i = b("ge")(f);
                if (!i || f == null) {
                    var j = "Root element %s is missing for pagelet %s";
                    continue
                }
                f === c.id && c.setRoot(i);
                if (g) {
                    if (a.append) q(i, g, d);
                    else if (g.nodeType) i.innerHTML = "", q(i, g, d);
                    else {
                        j = o(g);
                        i.innerHTML = j;
                        e[f] = j;
                        d.push(i)
                    }
                    b("BigPipeExperiments").enable_bigpipe_plugins && b("BigPipePlugins").runPluginOnPagelet(i)
                }
                g = i.getAttribute("data-referrer");
                g || i.setAttribute("data-referrer", f)
            }
            j = null;
            if (a.static_templates) {
                g = b("ge")("static_templates");
                g && (j = o(a.static_templates), a.replace_static_templates_if_exists && (j = r(g, j, d)), q(g, j, d))
            }
            this._informPageletDisplayDetails(a.id, a.jsmods, e, j);
            a.displayed = !0;
            if (a.jsmods) {
                i = this._serverJS.handlePartial(a.jsmods, {
                    pagelet: a.id,
                    bigPipeContext: {
                        onDisplayDone: this._onDisplayDone
                    }
                });
                c.addDestructor(i.cancel.bind(i))
            }
            var m = [];
            d.forEach(function(a) {
                if (typeof a.getElementsByTagName === "function") {
                    a = a.getElementsByTagName("img");
                    for (var b = 0; b < a.length; b++) m.push(a[b].src)
                }
            });
            m.length > 0 && this._informEventExternal("images_displayed", {
                pagelet: a.id,
                timeslice: b("TimeSlice").getContext() ? b("TimeSlice").getContext().contextID : null,
                images: m
            });
            if (b("gkx")("676920")) {
                var n = (h || (h = b("performanceAbsoluteNow")))();
                b("requireDeferred")("VisualCompletionGating").onReady(function(b) {
                    b && b.addElements(a.id, d, n)
                })
            }
            this._informPageletEvent(b("PageletEventConstsJS").DISPLAY_END, a);
            l(a.id, "display", a.phase);
            this.arbiter.inform(a.id + "_displayed", !0, "state")
        };
        c._onPhaseDisplayEnd = function(c) {
            var d = this,
                e = this._getOrCreatePhase(c);
            e.complete = !0;
            if (c === this._ttiPhase) {
                e = {};
                var f = b("captureUsageSnapshot")();
                this.isAjax || (e.cjs_factory_count_tti = b("__getTotalFactories")(), e.cjs_compile_time_tti = b("__getCompileTime")(), e.cjs_factory_time_tti = b("__getFactoryTime")());
                this._informEventExternal(a.Events.tti, {
                    phase: this._ttiPhase,
                    rid: this.rid,
                    ajax: this.isAjax,
                    metrics: e,
                    usageSnapshot: f
                });
                this.arbiter.inform("tti_pagelet_displayed", !0, "state")
            }
            e = b("gkx")("676921");
            var g = !1;
            this._isRelevant() && (c === this._lastPhaseBeforeLastResponse && (g = e, this._fireDisplayDone(function() {
                g && d._nextPhase()
            })), c === this._lastPhaseOfLastResponse && (this._displayDoneFired || (g = e, this._fireDisplayDone(function() {})), this.arbiter.inform("pagelet_displayed_all", !0, "state")));
            !g && c !== this._lastPhaseOfLastResponse && this._nextPhase()
        };
        c._nextPhase = function() {
            this.config.flush_pagelets_asap ? i <= 8 ? b("setTimeout")(this._tryRenderingNextPhase.bind(this), 20) : this._tryRenderingNextPhase() : (this._currentPhase++, i <= 8 ? b("setTimeout")(this._beginPhase.bind(this, this._currentPhase), 20) : this._beginPhase(this._currentPhase))
        };
        c._fireDisplayDone = function(a) {
            this._displayDoneFired = !0, this.arbiter.inform("display_done", !0), this._displayDone = !0, a(), this.lid != null && l("display_done", this.lid, "all")
        };
        c._downloadJsForPagelet = function(a) {
            this._informPageletEvent(b("PageletEventConstsJS").JS_START, a), b("Bootloader").loadResources(a.allResources || [], function() {
                var c = this;
                this._informPageletEvent(b("PageletEventConstsJS").JS_END, a);
                a.requires = a.requires || [];
                (!this.isAjax || a.phase >= 1) && a.requires.push("uipage_onload");
                var d = function() {
                        c._informPageletEvent(b("PageletEventConstsJS").ONLOAD_START, a), c._isRelevantPagelet(a) && m(a.onload), c._informPageletEvent(b("PageletEventConstsJS").ONLOAD_END, a), c.arbiter.inform("pagelet_onload", !0), a.provides && c.arbiter.inform(a.provides, !0, "state")
                    },
                    e = function() {
                        c._isRelevantPagelet(a) && m(a.onafterload)
                    };
                this.arbiter.registerCallback(d, a.requires);
                this.arbiter.registerCallback(e, [this.onloadEvt])
            }.bind(this), a.id)
        };
        c._getPagelet = function(a) {
            a = this._getPageletRootID(a);
            return b("PageletSet").getPagelet(a)
        };
        c._getPageletRootID = function(a) {
            return a.append || Object.keys(a.content)[0] || null
        };
        c._isRelevant = function() {
            var a = b("BigPipeInstance").getCurrentInstance();
            return this == a || this.automatic && this._relevant_instance == a || this.jsNonBlock || this.forceFinish || a && a.allowIrrelevantRequests
        };
        c._isRelevantPagelet = function(a) {
            if (!this._isRelevant()) return !1;
            a = this._getPageletRootID(a);
            return !!this._livePagelets[a]
        };
        c._informEventExternal = function(a, c, d) {
            c = c || {}, d = d || this.arbiter, c.ts || (c.ts = (h || (h = b("performanceAbsoluteNow")))()), j && (console.timeStamp && console.timeStamp(a + " " + (Object.prototype.hasOwnProperty.call(c, "arbiter") ? JSON.stringify(babelHelpers["extends"]({}, c, {
                arbiter: null
            })) : JSON.stringify(c)))), this.lid === null ? this._awaitingLIDEventQueue.push([d, a, c]) : (c.lid = this.lid, d.inform(a, c, "persistent"))
        };
        c._informPageletEvent = function(a, b, c) {
            a = {
                event: a,
                id: b.id,
                ts: c
            };
            b.phase && (a.phase = b.phase);
            b.categories && (a.categories = b.categories);
            b.allResources && (a.allResources = b.allResources);
            b.displayResources && (a.displayResources = b.displayResources);
            this._informEventExternal("pagelet_event", a)
        };
        c._informPageletDisplayDetails = function(a, c, d, e) {
            if (this.config.dispatch_pagelet_replayable_actions) try {
                this._informEventExternal("pagelet_performing_replayable_actions", {
                    id: a,
                    jsmods: b("fastDeepCopy")(c),
                    contentMap: d,
                    staticTemplates: e
                })
            } catch (a) {
                b("FBLogger")("bigpipe_pagelet_replay").catching(a).warn("failed at _informPageletDisplayDetails"), this._informEventExternal("pagelet_performing_replayable_actions_failed", {})
            }
        };
        a.getCurrentInstance = function() {
            return b("BigPipeInstance").getCurrentInstance()
        };
        return a
    }();
    Object.assign(a.prototype, {
        beforePageletArrive: function(a, c) {
            var d = this;
            b("TimeSlice").guard(function() {
                return d._informPageletEvent(b("PageletEventConstsJS").ARRIVE_START, {
                    id: a
                }, c)
            }, "beforePageletArrive " + a, {
                root: !0
            })()
        },
        setPageID: function(a) {
            this.lid = a, this._awaitingLIDEventQueue.forEach(function(b) {
                var c = b[0],
                    d = b[1];
                b = b[2];
                b.lid = a;
                c.inform(d, b, "persistent")
            }), this._awaitingLIDEventQueue = [], this.lid && k("display_done", this.lid)
        },
        onPageletArrive: (g || (g = b("ErrorUtils"))).guard(function(a) {
            var c = this;
            this._informPageletEvent(b("PageletEventConstsJS").ARRIVE_END, a);
            b("HasteResponse").handleSRPayload(a);
            a.content = a.content || {};
            var d = a.phase;
            if (a.all_phases)
                for (var e = a.all_phases, f = Array.isArray(e), g = 0, e = f ? e : e[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                    var h;
                    if (f) {
                        if (g >= e.length) break;
                        h = e[g++]
                    } else {
                        g = e.next();
                        if (g.done) break;
                        h = g.value
                    }
                    h = h;
                    this._getOrCreatePhase(h)
                }
            h = this._getOrCreatePhase(d);
            h.pagelets.push(a.id);
            this._maxPhase = Math.max(d, this._maxPhase);
            a.last_in_phase && this.arbiter.registerCallback(function() {
                return c._onPhaseDisplayEnd(d)
            }, h.pagelets.map(function(a) {
                return a + "_displayed"
            }).concat(["phase_begin_" + d]));
            g = this._getPageletRootID(a);
            var i = b("PageletSet").getOrCreatePagelet(g);
            a.last_pagelet && (this._lastPhaseBeforeLastResponse = this._maxPhase);
            a.the_end && (this._lastPhaseOfLastResponse = d);
            a.tti_phase !== void 0 && (this._ttiPhase = a.tti_phase);
            this._livePagelets[i.id] = !0;
            i.addDestructor(function() {
                delete c._livePagelets[i.id]
            });
            if (a.jscc_map != null && a.jscc_map !== "") {
                f = b("JSCC").parse(a.jscc_map);
                e = b("JSCC").init(f);
                i.addDestructor(e)
            }
            var j, k = [];
            if (a.jsmods) {
                h = a.jsmods.define;
                g = a.jsmods.instances;
                f = a.jsmods.markup;
                e = a.jsmods.pre_display_requires;
                delete a.jsmods.define;
                delete a.jsmods.instances;
                delete a.jsmods.markup;
                delete a.jsmods.pre_display_requires;
                var l = 19e3;
                l = function() {
                    if (a.displayStarted === !0) {
                        b("FBLogger")("BigPipe").warn("registerToBlockDisplayUntilDone_DONOTUSE called after pagelet %s was displayed. This is a no-op.", a.id);
                        return function() {}
                    }
                    var d, e, f = n + "_preDisplayEvent";
                    n++;
                    j ? c.arbiter.registerCallback(j, [f]) : k.push(f);
                    return b("TimeSlice").guard(function() {
                        e = !0, b("clearTimeout")(d), c.arbiter.inform(f, !0, "state")
                    }, "BigPipeDisplayBlockingEvent " + f, {
                        propagationType: b("TimeSlice").PropagationType.EXECUTION
                    })
                };
                this._informPageletDisplayDetails(a.id, {
                    define: h,
                    instances: g,
                    markup: f,
                    pre_display_requires: e
                }, {});
                this._serverJS.handlePartial({
                    define: h,
                    instances: g,
                    markup: f,
                    pre_display_requires: e
                }, {
                    pagelet: a.id,
                    bigPipeContext: {
                        onDisplayDone: this._onDisplayDone,
                        registerToBlockDisplayUntilDone_DONOTUSE: l
                    }
                })
            }
            this.arbiter.registerCallback(this._loadedCallback, ["pagelet_onload"]);
            this._informPageletEvent(b("PageletEventConstsJS").SETUP, a);
            if (a.display_out_of_phase === "asap") k = k.concat(["first_response_displayed", a.id + "_css_end"]);
            else if (a.display_out_of_phase === "after_tti") {
                var m = a.id + "_greedy_render";
                k = k.concat(["first_response_displayed", a.id + "_css_end", m]);
                var o = !1;
                h = function() {
                    if (o) return;
                    c.arbiter.inform(m, !0, "state")
                };
                this.arbiter.registerCallback(h, ["tti_pagelet_displayed"]);
                this.arbiter.registerCallback(h, ["phase_begin_" + d])
            } else k = k.concat(["phase_begin_" + a.phase, a.id + "_css_end"]);
            (a.display_dependency || []).forEach(function(a) {
                return k.push(a + "_displayed")
            });
            if (a.display_group) {
                g = document.body.getElementsByClassName("pagelet-group");
                for (var f = 0; f < g.length; f++) {
                    e = g[f];
                    if (e.id === a.id) break;
                    e.getAttribute("data-display-group") === a.display_group && k.push(e.id + "_displayed")
                }
            }
            j = this.arbiter.registerCallback(function() {
                a.display_delay_ms === void 0 ? c._displayPageletHandler(a) : b("setTimeout")(function() {
                    return c._displayPageletHandler(a)
                }, a.display_delay_ms)
            }, k);
            var p = !1;
            l = function() {
                if (p) return;
                p = !0;
                c._informPageletEvent(b("PageletEventConstsJS").CSS_START, a);
                var d = a.displayResources || [];
                b("Bootloader").loadResources(d, function() {
                    this._informPageletEvent(b("PageletEventConstsJS").CSS_END, a), this.arbiter.inform(a.id + "_css_end", !0, "state")
                }.bind(c), a.id)
            };
            this.config.flush_pagelets_asap ? l() : this.arbiter.registerCallback(l, ["phase_begin_" + d]);
            h = [a.id + "_displayed"];
            this.jsNonBlock || h.push(this.domContentEvt);
            this.arbiter.registerCallback(this._downloadJsForPagelet.bind(this, a), h)
        }, "BigPipe#onPageletArrive")
    });
    a.Events = b("BigPipeInstance").Events;

    function o(a) {
        if (!a || typeof a === "string") return a;
        if (a.container_id) {
            var c = b("$")(a.container_id);
            a = p(c) || "";
            c.parentNode.removeChild(c);
            return a
        }
        a.nodeType;
        return null
    }

    function p(a) {
        if (!a.firstChild) return null;
        if (a.firstChild.nodeType !== 8) return null;
        a = a.firstChild.nodeValue;
        a = a.substring(1, a.length - 1);
        return a.replace(/\\([\s\S]|$)/g, "$1")
    }

    function q(a, b, c) {
        b = s(b);
        for (var d = 0; d < b.childNodes.length; d++) c.push(b.childNodes[d]);
        a.appendChild(b)
    }

    function r(a, b, c) {
        b = s(b);
        var d = document.createDocumentFragment(),
            e = b.childNodes.length;
        for (var f = 0; f < e; f++) {
            var g = b.firstChild,
                h = g.id && document.getElementById(g.id),
                i = h && h.parentNode;
            i === a ? (i.replaceChild(g, h), c.push(g)) : d.appendChild(g)
        }
        return d
    }

    function s(a) {
        if (a.nodeType) return a;
        var b = document.createDocumentFragment();
        a = o(a);
        if (a) {
            var c = document.createElement("div");
            c.innerHTML = a;
            while (c.firstChild) b.appendChild(c.firstChild)
        }
        return b
    }
    e.exports = a
}), null);
__d("MutationObserver", [], (function(a, b, c, d, e, f) {
    b = function() {
        "use strict";

        function a(a) {}
        var b = a.prototype;
        b.observe = function(a, b) {};
        b.disconnect = function() {};
        b.takeRecords = function() {
            return null
        };
        return a
    }();
    c = a.MutationObserver || a.WebKitMutationObserver || b;
    e.exports = c
}), null);
__d("PageDOMMutationObserver", ["ExecutionEnvironment", "MutationObserver"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = new(b("MutationObserver"))(function() {}),
        h = !1,
        i = {
            tryStart: function() {
                var a = typeof g.takeRecords === "function";
                if (!b("ExecutionEnvironment").canUseDOM || !a) {
                    i.tryStart = function() {};
                    i.consumePendingDOMMutations = function() {
                        return 0
                    };
                    return
                }
                if (!window.Env || !document.body || window._splashBody) return;
                i.tryStart = function() {};
                if (!window.Env.dom_mutation_flag) return;
                h = !0;
                g.observe(document.body, {
                    attributes: !0,
                    childList: !0,
                    characterData: !0,
                    subtree: !0
                })
            },
            consumePendingDOMMutations: function() {
                var a = g.takeRecords();
                return a != null ? a.length : 0
            },
            isSupported: function() {
                return h
            }
        };
    e.exports = i
}), null);
__d("ArtilleryComponentSaverOptionsStatic", [], (function(a, b, c, d, e, f) {
    e.exports = {
        options: {
            ads_wait_time_saver: {
                shouldCompress: !1,
                shouldUploadSeparately: !1
            },
            ads_flux_profiler_saver: {
                shouldCompress: !0,
                shouldUploadSeparately: !1
            },
            comet_dev_tools_web_loom_saver: {
                shouldCompress: !0,
                shouldUploadSeparately: !1
            },
            timeslice_execution_saver: {
                shouldCompress: !0,
                shouldUploadSeparately: !1
            },
            interaction_async_request_join_data: {
                shouldCompress: !0,
                shouldUploadSeparately: !0
            },
            resources_saver: {
                shouldCompress: !0,
                shouldUploadSeparately: !1
            }
        }
    }
}), null);
__d("ArtilleryTraceIDUtils", ["Alea", "FBLogger", "ServerNonce"], (function(a, b, c, d, e, f) {
    var g = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
        h = b("Alea")(b("ServerNonce").ServerNonce),
        i = function() {
            var a = 0,
                b = 0,
                c = "";
            for (var d = 10; d >= 0; d--) a < 6 && (b = Math.floor(2147483648 * h()), a = 32), d === 0 && (b &= 7), c = g.charAt(b & 63) + c, b >>= 6, a -= 6;
            return c
        };
    a = {
        newTraceId: function() {
            var a;
            for (var c = 3; c > 0; c--) {
                a = i();
                if (a != this.getDummyId()) return a
            }
            b("FBLogger")("FIXME").mustfix("failed to generate valid Fbtrace id");
            return this.getDummyId()
        },
        newObjectId: function() {
            return this.newTraceId()
        },
        getDummyId: function() {
            return "AAAAAAAAAAA"
        },
        traceIdToBucket: function(a) {
            a = a.charAt(a.length - 1);
            return g.indexOf(a) % 32
        }
    };
    e.exports = a
}), null);
__d("ArtilleryAsyncRequestTracingAnnotator", ["FBLogger", "IntervalTrackingBoundedBuffer", "ResourceTimingsStore", "ResourceTypes"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = [1e3],
        h = new(b("IntervalTrackingBoundedBuffer"))(),
        i = "FB-ART-INFO",
        j = new Map();

    function k(a, b) {
        return b != null && b.artillery_join_data != null ? {
            uid: a,
            ids_for_timings: b.artillery_join_data
        } : null
    }
    a = {
        startTracingWindow: function(a, b, c) {
            c === void 0 && (c = null);
            var d = h.open();
            c = c || g;
            j.set(a, {
                trace_id: a,
                interaction_name: b,
                tracing_levels: c
            });
            return {
                finishTracingWindow: function() {
                    j["delete"](a);
                    return d.close()
                }
            }
        },
        registerAsyncRequest: function(a, c) {
            if (j.size === 0) return function() {};
            else {
                var d = JSON.stringify(Array.from(j.values()));
                a.setRequestHeader(i, d);
                return function(a) {
                    a = k(c, a);
                    a != null ? h.pushElement(a) : (b("FBLogger")("ArtilleryAsyncRequestTracingAnnotator").debug("expected a payload back in the response from the server containing trace information, but nothing arrived."), b("ResourceTimingsStore").annotate(b("ResourceTypes").XHR, c).addStringAnnotation("join_error", "join_data_expected_but_not_found"))
                }
            }
        },
        __active: function() {
            throw new Error("__active should only be available in __DEV__")
        }
    };
    e.exports = a
}), null);
__d("InteractionAsyncRequestJoinDataSource", ["ArtilleryAsyncRequestTracingAnnotator", "FBLogger"], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        registerInteraction: function(a) {
            a.countDown();
            var c = a.traceID,
                d = a.name;
            if (c == null) {
                b("FBLogger")("InteractionAsyncRequestJoinDataSource").mustfix("got a null trace_id for interaction " + d + ". Typically this indicates that only lite tracing was on, which this hook does not support");
                return
            }
            var e = b("ArtilleryAsyncRequestTracingAnnotator").startTracingWindow(c, d);
            a.registerOnBeforeFinish(function(a) {
                var b = e.finishTracingWindow();
                a.recordWithExtraSaver("interaction_async_request_join_data", "entries", b)
            });
            a.registerOnCleanup(function() {
                e.finishTracingWindow()
            })
        }
    };
    e.exports = a
}), null);
__d("TSIAdsReliabilityHook", [], (function(a, b, c, d, e, f) {
    "use strict";
    var g = {
        callbacks: [],
        register: function(a) {
            g.callbacks.push(a)
        },
        event: function(a, b, c) {
            g.callbacks.forEach(function(d) {
                return d(a, b, c)
            })
        }
    };
    e.exports = g
}), null);
__d("TimeSliceExecutionLogger", ["ExecutionContextObservers", "IntervalTrackingBoundedBuffer", "OnDemandExecutionContextObserver", "TimeSlice", "TimingAnnotations", "performanceAbsoluteNow"], (function(a, b, c, d, e, f) {
    "use strict";
    var g, h, i = 1e4,
        j = {
            BEGIN: "b",
            END: "e"
        },
        k = new(b("TimingAnnotations"))(),
        l;
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);

        function c() {
            var c, d;
            for (var e = arguments.length, f = new Array(e), g = 0; g < e; g++) f[g] = arguments[g];
            return (c = d = a.call.apply(a, [this].concat(f)) || this, d.$TimeSliceExecutionLogger1 = new(b("IntervalTrackingBoundedBuffer"))(i), c) || babelHelpers.assertThisInitialized(d)
        }
        var d = c.prototype;
        d.onNewContextCreatedWhileEnabled = function(a, c, d) {
            if (a) return (g || (g = b("performanceAbsoluteNow")))();
            else return null
        };
        d.onBeforeContextStartedWhileEnabled = function(a, b, c) {
            c = {
                type: j.BEGIN,
                ts: a.absBeginTimeMs
            };
            b !== null && (c.creation = b);
            this.$TimeSliceExecutionLogger1.pushElement(c);
            a = l;
            l = null;
            return a
        };
        d.onAfterContextStartedWhileEnabled = function(a, b, c, d) {
            return c
        };
        d.onAfterContextEndedWhileEnabled = function(a, b, c, d) {
            b = a.absEndTimeMs;
            d = {
                type: j.END,
                ts: b,
                name: a.name,
                id: a.contextID
            };
            l && (d.annotations = l.prepareToSend());
            this.$TimeSliceExecutionLogger1.pushElement(d);
            l = c
        };
        d.annotateCurrentExecution = function() {
            if (!this.isEnabled()) return k;
            l == null && (l = new(b("TimingAnnotations"))());
            return l
        };
        d.getBeforeID = function() {
            return (h || (h = b("ExecutionContextObservers"))).beforeIDs.TIMESLICE_EXECUTION_LOGGER
        };
        d.getAfterID = function() {
            return (h || (h = b("ExecutionContextObservers"))).afterIDs.TIMESLICE_EXECUTION_LOGGER
        };
        d.getBuffer = function() {
            return this.$TimeSliceExecutionLogger1
        };
        return c
    }(b("OnDemandExecutionContextObserver"));
    c = new a();
    b("TimeSlice").registerExecutionContextObserver(c);
    e.exports = c
}), null);
__d("TimeSliceExecutionDataSource", ["TimeSliceExecutionLogger", "performanceAbsoluteNow"], (function(a, b, c, d, e, f) {
    "use strict";
    var g;
    a = {
        registerInteraction: function(a) {
            a.countDown();
            var c = (g || (g = b("performanceAbsoluteNow")))(),
                d = b("TimeSliceExecutionLogger").getBuffer().open(),
                e = b("TimeSliceExecutionLogger").expressInterest();
            a.registerOnBeforeFinish(function(a) {
                e();
                var b = d.close(),
                    f = d.hasOverflown();
                a.recordWithExtraSaver("timeslice_execution_saver", "entries", {
                    startTime: c,
                    entries: b,
                    hasOverflown: f
                })
            });
            a.registerOnCleanup(function() {
                e(), d.close()
            })
        }
    };
    e.exports = a
}), null);
__d("TimeSliceInteractionBootloadForPost", ["Bootloader"], (function(a, b, c, d, e, f) {
    "use strict";

    function a(a) {
        b("Bootloader").loadModules(["Banzai", "BanzaiStream", "BanzaiODS", "ResourceTimingBootloaderHelper", "TimeSliceHelper", "SnappyCompressUtil", "PerfXSharedFields"], a, "TimeSliceInteractionBootloadForPost")
    }
    e.exports = a
}), null);
__d("TimeSliceInteractionReliability", ["ifRequired"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = "timeslice_interactions",
        h = !0,
        i = new Map();

    function j(a, b, c) {
        return b + ":" + c + ":" + a
    }

    function a(a, c, d) {
        a = j(a, c, d);
        var f = b("ifRequired")("BanzaiODS", function(a) {
            return a
        });
        if (!f) {
            c = i.get(a) || 0;
            i.set(a, c + 1)
        } else h && (i.forEach(function(a, b) {
            return f.bumpEntityKey(2966, g, b, a)
        }), h = !1), f.bumpEntityKey(2966, g, a, 1)
    }
    e.exports = {
        bumpLifecycleCounter: a
    }
}), null);
__d("Visibility", ["BaseEventEmitter", "ExecutionEnvironment", "TimeSlice"], (function(a, b, c, d, e, f) {
    var g = b("ExecutionEnvironment").canUseDOM,
        h, i;
    g && (document.hidden !== void 0 ? (h = "hidden", i = "visibilitychange") : document.mozHidden !== void 0 ? (h = "mozHidden", i = "mozvisibilitychange") : document.msHidden !== void 0 ? (h = "msHidden", i = "msvisibilitychange") : document.webkitHidden !== void 0 && (h = "webkitHidden", i = "webkitvisibilitychange"));
    a = function(a) {
        "use strict";
        babelHelpers.inheritsLoose(b, a);

        function b() {
            var b, c;
            for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++) e[f] = arguments[f];
            return (b = c = a.call.apply(a, [this].concat(e)) || this, c.HIDDEN = "hidden", c.VISIBLE = "visible", c.hiddenKey = h, c.hiddenEvent = i, b) || babelHelpers.assertThisInitialized(c)
        }
        var c = b.prototype;
        c.isHidden = function() {
            return h ? document[h] : !1
        };
        c.isSupported = function() {
            return g && document.addEventListener && i !== void 0
        };
        return b
    }(b("BaseEventEmitter"));
    var j = new a();
    j.isSupported() && document.addEventListener(j.hiddenEvent, b("TimeSlice").guard(function(a) {
        j.emit(j.isHidden() ? j.HIDDEN : j.VISIBLE, {
            changeTime: a.timeStamp
        })
    }, "visibility change"));
    e.exports = j
}), null);
__d("compactArray", [], (function(a, b, c, d, e, f) {
    "use strict";

    function a(a) {
        var b = [];
        for (var c = 0; c < a.length; ++c) {
            var d = a[c];
            d != null && b.push(d)
        }
        return b
    }
    e.exports = a
}), null);
__d("performanceNavigationStart", ["performance"], (function(a, b, c, d, e, f) {
    var g;
    if ((g || (g = b("performance"))).now)
        if ((g || (g = b("performance"))).timing && (g || (g = b("performance"))).timing.navigationStart) a = function() {
            return (g || (g = b("performance"))).timing.navigationStart
        };
        else {
            if (typeof window._cstart === "number") a = function() {
                return window._cstart
            };
            else {
                var h = Date.now();
                a = function() {
                    return h
                }
            }
            a.isPolyfilled = !0
        }
    else a = function() {
        return 0
    }, a.isPolyfilled = !0;
    e.exports = a
}), null);
__d("nativeRequestAnimationFrame", [], (function(a, b, c, d, e, f) {
    b = a.__fbNativeRequestAnimationFrame || a.requestAnimationFrame || a.webkitRequestAnimationFrame || a.mozRequestAnimationFrame || a.oRequestAnimationFrame || a.msRequestAnimationFrame;
    e.exports = b
}), null);
__d("requestAnimationFramePolyfill", ["nativeRequestAnimationFrame", "performanceNow"], (function(a, b, c, d, e, f) {
    var g, h = 0;
    c = b("nativeRequestAnimationFrame") || function(c) {
        var d = (g || (g = b("performanceNow")))(),
            e = Math.max(0, 16 - (d - h));
        h = d + e;
        return a.setTimeout(function() {
            c((g || (g = b("performanceNow")))())
        }, e)
    };
    e.exports = c
}), null);
__d("IdleCallbackImplementation", ["performanceNow", "requestAnimationFramePolyfill"], (function(a, b, c, d, e, f) {
    var g, h = [],
        i = 0,
        j = 0,
        k = -1,
        l = !1,
        m = 1e3 / 60,
        n = 2;

    function o(a) {
        return a
    }

    function p(a) {
        return a
    }

    function c(b, c) {
        var d = j++;
        h[d] = b;
        r();
        if (c != null && c.timeout > 0) {
            var e = o(d);
            a.setTimeout(function() {
                return x(e)
            }, c.timeout)
        }
        return o(d)
    }

    function q(a) {
        a = p(a);
        h[a] = null
    }

    function r() {
        l || (l = !0, b("requestAnimationFramePolyfill")(function(a) {
            l = !1, t((g || (g = b("performanceNow")))() - a)
        }))
    }

    function s(a) {
        var b = m - n;
        if (a < b) return b - a;
        a = a % m;
        if (a > b || a < n) return 0;
        else return b - a
    }

    function t(a) {
        var c = (g || (g = b("performanceNow")))();
        if (c > k) {
            a = s(a);
            if (a > 0) {
                c = c + a;
                w(c);
                k = c
            }
        }
        u() && r()
    }

    function u() {
        return i < h.length
    }

    function v() {
        while (u()) {
            var a = h[i];
            i++;
            if (a) return a
        }
        return null
    }

    function w(a) {
        var c;
        while ((g || (g = b("performanceNow")))() < a && (c = v())) c(new y(a))
    }

    function x(a) {
        var b = p(a);
        b = h[b];
        b && (q(a), b(new y(null)))
    }
    var y = function() {
        "use strict";

        function a(a) {
            this.didTimeout = a == null, this.$1 = a
        }
        var c = a.prototype;
        c.timeRemaining = function() {
            var a = this.$1;
            if (a != null) {
                var c = (g || (g = b("performanceNow")))();
                if (c < a) return a - c
            }
            return 0
        };
        return a
    }();
    e.exports = {
        requestIdleCallback: c,
        cancelIdleCallback: q
    }
}), null);
__d("requestIdleCallbackAcrossTransitions", ["IdleCallbackImplementation", "TimerStorage", "TimeSlice"], (function(a, b, c, d, e, f) {
    var g = a.requestIdleCallback || b("IdleCallbackImplementation").requestIdleCallback,
        h = b("TimerStorage").IDLE_CALLBACK;
    e.exports = function(c, d) {
        c = b("TimeSlice").guard(c, "requestIdleCallback", {
            propagationType: b("TimeSlice").PropagationType.CONTINUATION,
            registerCallStack: !0
        });
        d = g.call(a, c, d);
        var e = h + String(d);
        b("TimeSlice").registerForCancelling(e, c);
        return d
    }
}), null);
__d("TimeSliceInteraction", ["Arbiter", "ArtilleryComponentSaverOptionsStatic", "ArtilleryTraceIDUtils", "Bootloader", "CircularBuffer", "ErrorPubSub", "ErrorUtils", "FBLogger", "Heartbeat", "InteractionAsyncRequestJoinDataSource", "ProfilingCounters", "ProfilingCountersStore", "Random", "ResourceTimingsStore", "ResourceTypes", "TimeSlice", "TimeSliceExecutionDataSource", "TimeSliceInteractionBootloadForPost", "TimeSliceInteractionReliability", "TimeSliceInteractionSV", "TimingAnnotations", "TSIAdsReliabilityHook", "UserTimingUtils", "Visibility", "compactArray", "nullthrows", "performance", "performanceAbsoluteNow", "performanceNavigationStart", "requestIdleCallbackAcrossTransitions"], (function(a, b, c, d, e, f) {
    var g, h, i, j, k, l = {
        pointGroup: null,
        type: null,
        isPointOfInterest: null
    };
    d = 250;
    var m = new(b("CircularBuffer"))(d);
    new Map();
    f = 100;
    var n = new(b("CircularBuffer"))(f),
        o = new Map(),
        p = !1,
        q = null;
    b("Arbiter").subscribe("perf_nub_interaction_trace", function(a, b) {
        if (q) return;
        p = !0
    });
    var r = new(b("TimingAnnotations").EmptyTimingAnnotations)(),
        s = new(b("TimingAnnotations").EmptyTraceTimingAnnotations)(),
        t = "artillery_javascript_actions",
        u = "artillery_javascript_lite_actions";

    function c(a) {
        var b = "visibility_state_" + a,
            c = {
                isPointOfInterest: !0,
                pointGroup: "visibility_state_changes"
            };
        return function() {
            return B.informGlobally(b, c)
        }
    }
    if (b("Visibility") && b("Visibility").addListener) {
        (d = b("Visibility")).addListener(d.HIDDEN, c("hidden"));
        d.addListener(d.VISIBLE, c("visible"))
    }

    function v(a) {
        if (b("Visibility")) {
            var c = b("Visibility").isHidden() ? b("Visibility").HIDDEN : b("Visibility").VISIBLE;
            a.inform("visibility_state_" + c, {
                pointGroup: "visibility_state_changes"
            })
        }
    }

    function w(a) {
        return p && a === "Event"
    }

    function x(a) {
        var c = b("TimeSliceInteractionSV").interaction_to_coinflip,
            d = b("TimeSliceInteractionSV").interaction_to_lite_coinflip,
            e;
        w(a) ? e = 1 : e = Object.prototype.hasOwnProperty.call(c, a) ? c[a] : b("TimeSliceInteractionSV").default_rate;
        c = Object.prototype.hasOwnProperty.call(d, a) ? d[a] : b("TimeSliceInteractionSV").lite_default_rate;
        d = new Set();
        b("Random").coinflip(c) && d.add("lite");
        b("Random").coinflip(e) && d.add("full");
        a = 0;
        d.has("full") ? a = 1 / e : e === 0 ? a = 0 : a = 1 - 1 / e;
        e = 0;
        d.has("lite") && (e = 1 / c);
        return {
            modes: d,
            probability: a,
            liteProbability: e
        }
    }

    function y() {
        return o.size !== 0
    }

    function z(a) {
        return babelHelpers["extends"]({}, a, {
            annotations: a.annotations.prepareToSend()
        })
    }

    function A(a, c) {
        c = (g || (g = b("ProfilingCountersStore"))).getNestedTotalsByAttributions(c, a);
        a = c.attributed;
        c = c.unattributed;
        var d = {};
        a = Object.entries(a);
        for (var e = 0; e < a.length; e++) {
            var f = a[e],
                h = f[0];
            f = f[1];
            d["internal:" + h] = f
        }
        h = Object.entries(c);
        for (var f = 0; f < h.length; f++) {
            a = h[f];
            e = a[0];
            c = a[1];
            d["external:" + e] = c
        }
        return d
    }
    var B = function() {
        "use strict";
        c.create = function(a, b, d) {
            b === void 0 && (b = []);
            d === void 0 && (d = !1);
            a = new c(a, b, d);
            a.trace().addStringAnnotation("initiatorType", "manually_ended");
            return a
        };
        c.informGlobally = function(a, c) {
            if (!y()) return r;
            var d = (h || (h = b("performanceAbsoluteNow")))(),
                e = new(b("TimingAnnotations"))(),
                f = babelHelpers["extends"]({
                    ts: d,
                    name: a,
                    annotations: e,
                    rawStackTrace: c && c.rawStackTrace || null,
                    guardStack: b("TimeSlice").getGuardNameStack()
                }, l, c);
            e.addStringAnnotation("global_point", "1");
            o.forEach(function(a) {
                return a.push(f)
            });
            return e
        };
        c.informOnPage = function(a, c) {
            var d = (h || (h = b("performanceAbsoluteNow")))(),
                e = new(b("TimingAnnotations"))();
            d = babelHelpers["extends"]({
                ts: d,
                name: a,
                annotations: e,
                rawStackTrace: c && c.rawStackTrace || null,
                guardStack: []
            }, l, c);
            m.write(d);
            return e
        };

        function c(a, c, d) {
            var e = this;
            c === void 0 && (c = []);
            d === void 0 && (d = !1);
            this.$2 = null;
            this.$4 = !0;
            this.$5 = null;
            this.$6 = [];
            this.$7 = !1;
            this.$9 = [];
            this.$10 = [];
            this.$11 = [];
            this.$12 = [];
            this.$13 = new(b("TimingAnnotations").TraceTimingAnnotations)();
            this.$14 = new Map();
            this.$17 = null;
            this.$18 = 1;
            this.$21 = 1;
            this.$25 = !0;
            this.$26 = {};
            var f = x(a),
                j = f.modes,
                k = f.probability;
            f = f.liteProbability;
            this.$15 = j;
            this.$1 = a;
            this.$19 = k;
            this.$20 = f;
            this.$16 = d ? b("performanceNavigationStart")() : (h || (h = b("performanceAbsoluteNow")))();
            this.$24 = new Map();
            this.$8 = new Set();
            k = this.inform("trace_started", {
                type: 3,
                pointGroup: "e2e",
                isPointOfInterest: !0,
                ts: this.$16
            });
            (i || (i = b("performance"))) && (i || (i = b("performance"))).now && k.addStringAnnotation("offset_from_start_of_req_ms", (i || (i = b("performance"))).now().toString());
            v(this);
            o.set(this, []);
            this.isEnabledForMode("full") && (b("TimeSliceInteractionSV").enable_heartbeat && (this.$5 = b("Heartbeat").get().expressInterest()), this.$3 = b("ArtilleryTraceIDUtils").newTraceId());
            j.has("full") && n.write({
                interaction: this,
                ts: (h || (h = b("performanceAbsoluteNow")))()
            });
            if (j.size === 0) this.disable(!0);
            else {
                if (this.isEnabledForMode("full")) {
                    b("TimeSliceInteractionSV").enable_heartbeat && (this.$5 = b("Heartbeat").get().expressInterest());
                    b("TimeSliceInteractionSV").force_async_request_tracing_on && c.push(b("InteractionAsyncRequestJoinDataSource"));
                    f = b("ProfilingCounters").getObserver().expressInterest();
                    this.$11.push(f);
                    w(a) && (q = b("nullthrows")(this.$3), p = !1);
                    this.$22 = (g || (g = b("ProfilingCountersStore"))).getInstance().open();
                    this.$23 = b("TimeSlice").getBuffer().open();
                    this.$11.push(function() {
                        e.$23 && e.$23.close(), e.$22 && e.$22.close()
                    })
                }
                var l = {
                    trace: function() {
                        return e.trace()
                    },
                    countDown: function() {
                        return e.countDown()
                    },
                    forceFinish: function() {
                        return e.finish(!0)
                    },
                    registerOnBeforeFinish: function(a) {
                        return e.registerOnBeforeFinish(a)
                    },
                    registerOnCleanup: function(a) {
                        return e.registerOnCleanUp(a)
                    },
                    traceID: this.$3,
                    name: a
                };
                b("TimeSliceInteractionSV").also_record_new_timeslice_format && c.push(b("TimeSliceExecutionDataSource"));
                var m = b("compactArray")(c.map(function(a) {
                    e.$21++;
                    return a.registerInteraction(l)
                }));
                this.$11.push(function() {
                    m.forEach(function(a) {
                        return a.remove()
                    })
                });
                this.$10.push(function() {
                    e.trace().addStringAnnotation("wait_for_count", "" + e.$21)
                })
            }
            for (var d = j, k = Array.isArray(d), f = 0, d = k ? d : d[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                if (k) {
                    if (f >= d.length) break;
                    c = d[f++]
                } else {
                    f = d.next();
                    if (f.done) break;
                    c = f.value
                }
                j = c;
                b("TimeSliceInteractionReliability").bumpLifecycleCounter("starting", a, j)
            }
        }
        var d = c.prototype;
        d.recordWithExtraSaver = function(a, b, c) {
            if (this.isEnabled()) {
                var d = this.$24.get(a) || {};
                b != null && c != null && (d[b] = c);
                this.$24.set(a, d)
            }
            return this
        };
        d.countDown = function() {
            this.$21--, this.$21 === 0 ? this.$17 && this.$17() : this.$21 < 0 && b("FBLogger")("TimeSliceInteraction").warn("some hook counted down twice")
        };
        d.countUp = function() {
            this.$21 > 0 ? ++this.$21 : b("FBLogger")("TimeSliceInteraction").warn("Attempting to countUp on finished interaction")
        };
        d.inform = function(a, c) {
            var d = c != null && c.isPointOfInterest;
            if (!this.isEnabledForMode("full") && !(this.isEnabledForMode("lite") && d)) return r;
            d = c && c.ts || (h || (h = b("performanceAbsoluteNow")))();
            var e = new(b("TimingAnnotations"))(),
                f = this.isEnabledForMode("full") ? b("TimeSlice").getGuardNameStack() : [];
            this.$9.push(babelHelpers["extends"]({
                ts: d,
                name: a,
                annotations: e,
                rawStackTrace: c && c.rawStackTrace || null,
                guardStack: f
            }, l, c));
            return e
        };
        d.informPointWithOverride = function(a, c) {
            var d = (h || (h = b("performanceAbsoluteNow")))(),
                e = c != null && c.isPointOfInterest;
            if (!this.isEnabledForMode("full") && !(this.isEnabledForMode("lite") && e) || !this.$26) return r;
            e = this.isEnabledForMode("full") ? b("TimeSlice").getGuardNameStack() : [];
            var f = this.$26[a];
            c && (c.rawStackTrace = c.rawStackTrace || null);
            if (f) f.ts = d, f.guardStack = e, Object.assign(f, c || {});
            else {
                f = new(b("TimingAnnotations"))();
                this.$26[a] = babelHelpers["extends"]({
                    ts: d,
                    name: a,
                    annotations: f,
                    rawStackTrace: c && c.rawStackTrace || null,
                    guardStack: e
                }, l, c)
            }
            return this.$26[a].annotations
        };
        d.invokeWithProfiling = function(c, d) {
            if (!this.isEnabledForMode("full")) return d();
            var e = this.inform("start_" + c);
            this.$6.push(e);
            e = (k || (k = b("ErrorUtils"))).applyWithGuard(d, a, null, null, c);
            this.inform("finished_" + c);
            this.$6.pop();
            return e
        };
        d.getCurrentInvocation = function() {
            if (!this.isEnabledForMode("full")) return r;
            else if (this.$6.length < 1) return r;
            else return this.$6[this.$6.length - 1]
        };
        d.finish = function(a) {
            var c = this;
            this.$27(a ? "client_tsi_finish_on_unload" : "client_tsi_finish");
            if (!this.$4) return;
            if (a && this.$17) {
                this.$17();
                return
            }
            if (this.$7) b("FBLogger")("TimeSliceInteraction").warn("Trace was already marked as ended");
            else {
                v(this);
                this.$12.forEach(function(a) {
                    return a(c)
                });
                for (var d = this.$15, e = Array.isArray(d), f = 0, d = e ? d : d[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                    var g;
                    if (e) {
                        if (f >= d.length) break;
                        g = d[f++]
                    } else {
                        f = d.next();
                        if (f.done) break;
                        g = f.value
                    }
                    g = g;
                    b("TimeSliceInteractionReliability").bumpLifecycleCounter("finishing", this.$1, g)
                }
                this.inform("trace_ended", {
                    type: 4,
                    pointGroup: "e2e",
                    isPointOfInterest: !0
                });
                var i = this.isEnabledForMode("lite"),
                    j = this.isEnabledForMode("full");
                j && this.trace().addStringAnnotation("weight", "" + 1 / (this.$18 * this.$19));
                i && this.trace().addStringAnnotation("lite_weight", "" + 1 / (this.$18 * this.$20));
                navigator && navigator.connection && (typeof navigator.connection.downlink === "number" && this.trace().addStringAnnotation("browser_downlink_megabits", navigator.connection.downlink.toString()), typeof navigator.connection.rtt === "number" && this.trace().addStringAnnotation("browser_rtt_ms", navigator.connection.rtt.toString()), typeof navigator.connection.effectiveType === "string" && this.trace().addStringAnnotation("browser_effective_connection_type", navigator.connection.effectiveType));
                var k = (h || (h = b("performanceAbsoluteNow")))(),
                    l = o.get(this);
                o["delete"](this);
                this.$5 && this.$5();
                var m = this.$22 != null ? this.$22.close() : [],
                    n = this.$23 != null ? this.$23.close() : [],
                    p = this.$23 != null ? this.$23.hasOverflown() : !1,
                    r = this.$23 != null ? this.$23.getOverflowSize() : 0;
                if (i || j) {
                    var s = function() {
                        i && c.$28(l), j && c.$29(k, l, m, n, p, r), q && q === c.$3 && (b("Arbiter").inform("time_slice_trace_posted", {
                            traceId: c.$3
                        }), q = null), c.$30()
                    };
                    a ? s() : this.$17 = function() {
                        return b("requestIdleCallbackAcrossTransitions")(function() {
                            return s()
                        })
                    }
                }
                this.countDown();
                this.$7 = !0
            }
        };
        d.registerOnBeforeSend = function(a) {
            this.$4 && this.$10.push(a);
            return this
        };
        d.registerOnBeforeFinish = function(a) {
            this.$4 && this.$12.push(a);
            return this
        };
        d.registerOnCleanUp = function(a) {
            this.$4 && this.$11.push(a);
            return this
        };
        d.trace = function() {
            return !this.$4 ? s : this.$13
        };
        d.getTraceID = function() {
            return this.$4 ? this.$3 : null
        };
        d.setExtraSampleRate = function(a) {
            this.$18 = a;
            return this
        };
        d.isEnabled = function() {
            return this.$4
        };
        d.disable = function(a) {
            a === void 0 && (a = !1);
            o["delete"](this);
            this.$5 && this.$5();
            if (!a && this.$4)
                for (var a = this.$15, c = Array.isArray(a), d = 0, a = c ? a : a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                    var e;
                    if (c) {
                        if (d >= a.length) break;
                        e = a[d++]
                    } else {
                        d = a.next();
                        if (d.done) break;
                        e = d.value
                    }
                    e = e;
                    b("TimeSliceInteractionReliability").bumpLifecycleCounter("disabled", this.$1, e)
                }
            this.$4 = !1;
            this.$30()
        };
        d.disableBanzaiStream = function() {
            this.$25 = !1
        };
        c.getPageLoadPoints = function(a, b) {
            var c = [],
                d = m.read();
            for (var e = d.length - 1; e >= 0; e--) {
                var f = d[e];
                if (f.ts < a) return c;
                else f.ts < b && c.push(z(f))
            }
            return c
        };
        c.getInteractionIDsBetween = function(a, b) {
            var c = [],
                d = n.read();
            for (var e = d.length - 1; e >= 0; e--) {
                var f = d[e],
                    g = f.interaction;
                f = f.ts;
                g = g.getTraceID();
                if (f < a) return c;
                else f < b && g != null && c.push(g)
            }
            return c
        };
        d.receiveAsyncResponse = function(a) {
            a != null && a.artillery_info && this.isEnabledForMode("full") ? this.$31(a.artillery_info.artillery_join_points) : this.disable();
            return this
        };
        d.addArtilleryIDHeader = function(a) {
            this.$4 && a.setRequestHeader("X-ARTILLERY-REQ-METADATA", JSON.stringify({
                trace_id: this.$3
            }));
            return this
        };
        d.forResourceRequest = function(a) {
            if (!this.isEnabledForMode("full")) return r;
            else {
                var c = this.$14.get(a);
                if (c) return c;
                else {
                    c = new(b("TimingAnnotations"))();
                    this.$14.set(a, c);
                    return c
                }
            }
        };
        d.addProfilingCounterAttribution = function(a) {
            this.$8.add(a);
            return this
        };
        d.$31 = function(a) {
            if (!this.isEnabledForMode("full")) return this;
            this.$2 = a;
            return this
        };
        d.$28 = function(a) {
            var c = this;
            this.$10.forEach(function(a) {
                return a()
            });
            this.$10 = [];
            if (!this.isEnabled()) return;
            var d = [];
            a = this.$9.concat(Object.values(this.$26)).concat(a || []);
            a.forEach(function(a) {
                a.isPointOfInterest && d.push({
                    ts: a.ts,
                    name: a.name,
                    pointGroup: a.pointGroup,
                    annotations: a.annotations.prepareToSend()
                })
            });
            var e = {
                trace_id: this.$3,
                action_name: this.$1,
                trace_annotations: this.$13.prepareToSend(),
                points: d
            };
            b("Bootloader").loadModules(["Banzai", "BanzaiODS", "PerfXSharedFields"], function(a, d, f) {
                b("TimeSliceInteractionReliability").bumpLifecycleCounter("posting", c.$1, "lite"), a.post(u, f.addCommonValues(e), a.VITAL)
            }, "TimeSliceInteraction")
        };
        d.$29 = function(a, c, d, e, f, h) {
            var j = this;
            this.$27("client_tsi_post_start");
            this.$10.forEach(function(a) {
                return a()
            });
            this.$10 = [];
            if (!this.isEnabled()) return;
            c = c != null ? this.$9.concat(c) : this.$9;
            c.push.apply(c, Object.values(this.$26));
            var k = c.map(z),
                l = Array.from(this.$8.keys()),
                m = new Map(this.$24.entries());
            b("TimeSliceInteractionBootloadForPost")(function(c, n, o, p, q, r, s) {
                j.$27("client_tsi_post_ready");
                b("TimeSliceInteractionReliability").bumpLifecycleCounter("posting", j.$1, "full");
                o = q.getMetrics(j.$16, a, b("TimeSliceInteractionSV").maxBlockMergeDuration, b("TimeSliceInteractionSV").maxBlockMergeDistance, e, (g || (g = b("ProfilingCountersStore"))).toMap(d), {
                    includeRefTreeIDs: !0,
                    counterFunction: function(a) {
                        return A(l, a)
                    }
                });
                j.$13.addStringAnnotation("overflown_timeslice_buffer", f ? "1" : "0");
                j.$13.addStringAnnotation("overflown_timeslice_entry_count", "" + h);
                if ((i || (i = b("performance"))) && (i || (i = b("performance"))).timing && (i || (i = b("performance"))).timing.navigationStart) {
                    var u = e.length > 0 ? e[0].begin : null;
                    p = p.getMetrics(u != null && u < j.$16 ? u : j.$16, {}, null, a, !0, !0);
                    u = p.data;
                    p = p.diagnostics;
                    p && (j.$13.addStringAnnotation("number_of_valid_entries", p.numValidEntries.toString()), j.$13.addStringAnnotation("number_of_success_metrics", p.numSuccessfulMetrics.toString()));
                    Object.values(u).forEach(function(a) {
                        return a.forEach(function(a) {
                            var c = a.desc,
                                d = a.type,
                                e = j.$14.get(c);
                            e = e && e.prepareToSend();
                            if (d === b("ResourceTypes").JS || d === b("ResourceTypes").CSS || d === b("ResourceTypes").XHR) {
                                d = b("ResourceTimingsStore").getAnnotationsFor(d, c);
                                e = b("TimingAnnotations").combine(e, d)
                            }
                            a.annotations = e
                        })
                    })
                } else u = {};
                var v = {};
                m.forEach(function(a, c) {
                    var d = b("ArtilleryComponentSaverOptionsStatic").options[c];
                    d = !!(d && d.shouldCompress);
                    if (d) {
                        d = r.compressStringToSnappy(JSON.stringify(a));
                        if (d != null) {
                            v[c] = {
                                data: d,
                                isCompressed: !0
                            };
                            return
                        }
                    }
                    v[c] = {
                        isCompressed: !1,
                        data: a
                    }
                });
                p = {
                    trace_id: j.$3,
                    join_points: j.$2,
                    action_name: j.$1,
                    points: k,
                    traceAnnotations: j.$13.prepareToSend(),
                    timeslices: q.formatMetricsForTransport(o),
                    resource_timings: u,
                    extra_savers: v
                };
                p = s.addCommonValues(p);
                b("TimeSliceInteractionSV").compression_enabled && (p = j.$32(r, p));
                q = b("TimeSliceInteractionSV").banzai_stream_coinflip || 0;
                j.$25 && b("TimeSliceInteractionSV").enable_banzai_stream && b("Random").coinflip(q) ? n.post(t, p, {
                    compress: !1
                }) : c.post(t, p, {
                    compress: !1
                })
            })
        };
        d.$32 = function(a, b) {
            var c = ["points", "timeslices", "resource_timings", "sampler_profile"],
                d = {};
            c.forEach(function(c) {
                var e = b[c];
                if (e == null) return;
                e = JSON.stringify(e);
                e = a.compressStringToSnappy(e);
                e !== null && (d[c] = e, delete b[c])
            });
            return babelHelpers["extends"]({}, b, {
                miny: d
            })
        };
        d.$30 = function() {
            delete this.$9, this.$10 = [], this.$11 && (this.$11.forEach(function(a) {
                return a()
            }), this.$11 = []), this.$12 = [], delete this.$26, delete this.$17, delete this.$24
        };
        d.isEnabledForMode = function(a) {
            return this.$4 && !this.$7 && this.$15.has(a)
        };
        d.isDone = function() {
            return this.$7
        };
        d.$27 = function(a) {
            b("TSIAdsReliabilityHook").event(this.$1, a, this.getTraceID())
        };
        c.getAllActiveInteractions = function() {
            return o.keys()
        };
        return c
    }();
    e.exports = B
}), null);
__d("TimeSliceReferenceCounting", ["ExecutionContextObservers", "OnDemandExecutionContextObserver", "ProfilingCounters", "TimeSlice", "requestIdleCallbackAcrossTransitions"], (function(a, b, c, d, e, f) {
    var g, h = [],
        i = [];
    a = null;
    var j = null,
        k = 1,
        l = [];

    function m(a) {
        if (a == null || a.length === 0) return;
        a = a.filter(function(a) {
            return --a.openReferenceCount == 0
        });
        a.length > 0 && (l.push.apply(l, a), b("requestIdleCallbackAcrossTransitions")(b("TimeSlice").guard(n, "invoking onAllChildrenFinished callbacks", {
            propagationType: b("TimeSlice").PropagationType.ORPHAN
        })))
    }

    function n() {
        while (l.length) l.pop().finish()
    }
    var o = function() {
        "use strict";

        function a(b, c) {
            this.$2 = a.$1++, this.$3 = b, this.$4 = [], this.$5 = !1, this.$6 = c, this.openReferenceCount = 1, this.timeslices = [b]
        }
        var b = a.prototype;
        b.isProfiling = function() {
            return this.$6
        };
        b.addCallback = function(a) {
            !this.$5 ? this.$4.push(a) : a();
            return this
        };
        b.finish = function() {
            this.$5 || (this.$5 = !0, this.$4.forEach(function(a) {
                return a()
            }), delete this.$4)
        };
        b.getContinuationExecutionCounterID = function() {
            return this.$2
        };
        b.isInsideContinuationExecution = function() {
            return i.indexOf(this) !== -1
        };
        b.getTimeSliceContextsThisCounted = function() {
            return this.timeslices
        };
        b.getRootContextID = function() {
            return this.$3
        };
        return a
    }();
    o.$1 = 1;

    function p(a, b) {
        a.forEach(function(a) {
            var c = a.getContinuationExecutionCounterID(),
                d = b.find(function(a) {
                    return a.getContinuationExecutionCounterID() === c
                });
            d || b.push(a)
        })
    }
    c = function(a) {
        "use strict";
        babelHelpers.inheritsLoose(c, a);

        function c() {
            return a.apply(this, arguments) || this
        }
        var d = c.prototype;
        d.onNewContextCreatedWhileEnabled = function(a, b, c) {
            var d;
            c.isContinuation && (d = i, d.forEach(function(a) {
                return a.openReferenceCount++
            }));
            a = {
                hasBeenInvoked: !1,
                hasExecutionBeenCounted: !1,
                parentReferenceCounters: d,
                creationID: k++
            };
            return a
        };
        d.onContextCanceled = function(a, b) {
            a = b || {};
            a.hasBeenInvoked || (m(a.parentReferenceCounters), a.hasBeenInvoked = !0)
        };
        d.onBeforeContextStartedWhileEnabled = function(a, c, d) {
            var e = {
                callerProfilingCounterID: j,
                callerReferenceCounters: h,
                callerExecutionCounters: i.slice()
            };
            c = c || {
                hasBeenInvoked: !1,
                creationID: -1
            };
            c.hasBeenInvoked = !0;
            a.executionNumber > 0 ? h = [] : h = c.parentReferenceCounters || [];
            d.extendsExecution ? p(h, i) : i = [];
            i.forEach(function(b) {
                return b.timeslices.push(a.contextID)
            });
            h.filter(function(a) {
                return a.isProfiling()
            }).length > 0 && a.executionNumber === 0 ? j = b("ProfilingCounters").startTimingInContext("REF_COUNTED_TIMESLICE_TIME", a.contextID) : j = null;
            return e
        };
        d.onDisable = function() {
            j = null, h = [], i = []
        };
        d.onAfterContextStartedWhileEnabled = function(a, b, c, d) {
            return c
        };
        d.onAfterContextEndedWhileEnabled = function(a, c, d, e) {
            c = a.contextID;
            j != null && (b("ProfilingCounters").stopTimingInContext(j, c), j = null);
            m(h);
            h = d.callerReferenceCounters;
            i = d.callerExecutionCounters;
            j = d.callerProfilingCounterID
        };
        d.getBeforeID = function() {
            return (g || (g = b("ExecutionContextObservers"))).beforeIDs.REFERENCE_COUNTING
        };
        d.getAfterID = function() {
            return (g || (g = b("ExecutionContextObservers"))).afterIDs.REFERENCE_COUNTING
        };
        return c
    }(b("OnDemandExecutionContextObserver"));
    var q = {
            onAllChildrenFinished: function(a, b) {
                b === void 0 && (b = !1);
                var c = q.getObserver().expressInterest();
                return q.onAllChildrenFinishedWithoutAutoTurningObserverOn(a, c, b)
            },
            onAllChildrenFinishedWithoutAutoTurningObserverOn: function(c, d, e) {
                var f = b("TimeSlice").getContext();
                if (f == null) {
                    d();
                    return null
                }
                f = f.contextID;
                a = new o(f, e);
                a.addCallback(d);
                c && a.addCallback(c);
                h = h.slice();
                h.push(a);
                i = i.slice();
                i.push(a);
                j == null && a.isProfiling() && (j = b("ProfilingCounters").startTimingInContext("REF_COUNTED_TIMESLICE_TIME", f));
                return a
            },
            getObserver: function() {
                return r
            }
        },
        r = new c();
    b("TimeSlice").registerExecutionContextObserver(r);
    e.exports = q
}), null);
__d("TimeSliceAutoclosedInteraction", ["ErrorPubSub", "ProfilingCounters", "TimeSlice", "TimeSliceInteraction", "TimeSliceInteractionSV", "TimeSliceReferenceCounting", "clearTimeout", "setTimeoutAcrossTransitions"], (function(a, b, c, d, e, f) {
    "use strict";
    var g, h = 70 * 1e3;
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);

        function c(c, d) {
            var e;
            d === void 0 && (d = []);
            e = a.call(this, c, d) || this;
            e.$TimeSliceAutoclosedInteraction1 = new Map();
            e.$TimeSliceAutoclosedInteraction2 = 0;
            e.$TimeSliceAutoclosedInteraction3 = !0;
            e.$TimeSliceAutoclosedInteraction4 = [];
            e.$TimeSliceAutoclosedInteraction5 = new Set();
            if (e.isEnabled()) {
                e.trace().addStringAnnotation("initiatorType", "autoclosed");
                var f = b("setTimeoutAcrossTransitions")(b("TimeSlice").guard(function() {
                    e.isDone() || (e.trace().addStringAnnotation("terminated_by_timeout_ms", h.toString()), e.finish())
                }, "timeout for action " + c, {
                    propagationType: b("TimeSlice").PropagationType.EXECUTION
                }), h);
                e.registerOnBeforeSend(function() {
                    e.trace().addStringAnnotation("ref_counting_trees", "" + e.$TimeSliceAutoclosedInteraction2).addStringAnnotation("ref_counters_pending_count", "" + e.$TimeSliceAutoclosedInteraction1.size), b("clearTimeout")(f)
                });
                d = b("TimeSliceReferenceCounting").onAllChildrenFinished(null, !0);
                if (d == null) e.disable(), (g || (g = b("ErrorPubSub"))).reportError(new Error("starting autoclosed interaction outside of a timeslice."));
                else {
                    e.waitForReferenceCounter(d);
                    e.trace().addStringAnnotation("on_demand_reference_counting", b("TimeSliceInteractionSV").on_demand_reference_counting ? "1" : "0");
                    c = "timeslice_interaction_" + e.getTraceID();
                    e.isEnabledForMode("full") && (b("ProfilingCounters").currentContext().addAttribution(c, b("ProfilingCounters").AttributionPropagation.ONLY_ON_CONTINUATIONS_AND_FIRST_EXEC), e.addProfilingCounterAttribution(c))
                }
            }
            return e
        }
        c.getInteractionsActiveRightNow = function() {
            return Array.from(b("TimeSliceInteraction").getAllActiveInteractions()).filter(function(a) {
                return a.$TimeSliceAutoclosedInteraction3 && a.hasActiveReferenceCountingHandle()
            })
        };
        var d = c.prototype;
        d.waitForReferenceCounter = function(a) {
            var c = this;
            if (!this.isEnabled()) return this;
            var d = a.getContinuationExecutionCounterID();
            this.$TimeSliceAutoclosedInteraction1.set(d, a);
            this.$TimeSliceAutoclosedInteraction2++;
            a.addCallback(function() {
                b("TimeSliceInteractionSV").also_record_new_timeslice_format && c.$TimeSliceAutoclosedInteraction1.has(d) && a.getTimeSliceContextsThisCounted().forEach(function(a) {
                    return c.$TimeSliceAutoclosedInteraction5.add(a)
                }), c.$TimeSliceAutoclosedInteraction1["delete"](d) && c.$TimeSliceAutoclosedInteraction1.size === 0 && (c.$TimeSliceAutoclosedInteraction4.forEach(function(a) {
                    return a()
                }), c.$TimeSliceAutoclosedInteraction4 = [], c.isEnabled() && !c.isDone() && (b("TimeSliceInteractionSV").also_record_new_timeslice_format && c.recordWithExtraSaver("timeslice_execution_saver", "reference_counted_contexts", Array.from(c.$TimeSliceAutoclosedInteraction5.values())), c.finish()))
            });
            return this
        };
        d.onReferenceCountedExecutionFinished = function(a) {
            this.$TimeSliceAutoclosedInteraction4.push(a)
        };
        d.hasActiveReferenceCountingHandle = function() {
            for (var a = this.$TimeSliceAutoclosedInteraction1.values(), b = Array.isArray(a), c = 0, a = b ? a : a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                var d;
                if (b) {
                    if (c >= a.length) break;
                    d = a[c++]
                } else {
                    c = a.next();
                    if (c.done) break;
                    d = c.value
                }
                d = d;
                if (d.isInsideContinuationExecution()) return !0
            }
            return !1
        };
        return c
    }(b("TimeSliceInteraction"));
    e.exports = a
}), null);
__d("Keys", [], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = Object.freeze({
        BACKSPACE: 8,
        TAB: 9,
        RETURN: 13,
        SHIFT: 16,
        CTRL: 17,
        ALT: 18,
        PAUSE_BREAK: 19,
        CAPS_LOCK: 20,
        ESC: 27,
        SPACE: 32,
        PAGE_UP: 33,
        PAGE_DOWN: 34,
        END: 35,
        HOME: 36,
        LEFT: 37,
        UP: 38,
        RIGHT: 39,
        DOWN: 40,
        INSERT: 45,
        DELETE: 46,
        ZERO: 48,
        ONE: 49,
        TWO: 50,
        THREE: 51,
        FOUR: 52,
        FIVE: 53,
        SIX: 54,
        SEVEN: 55,
        EIGHT: 56,
        NINE: 57,
        A: 65,
        B: 66,
        C: 67,
        D: 68,
        E: 69,
        F: 70,
        G: 71,
        H: 72,
        I: 73,
        J: 74,
        K: 75,
        L: 76,
        M: 77,
        N: 78,
        O: 79,
        P: 80,
        Q: 81,
        R: 82,
        S: 83,
        T: 84,
        U: 85,
        V: 86,
        W: 87,
        X: 88,
        Y: 89,
        Z: 90,
        LEFT_WINDOW_KEY: 91,
        RIGHT_WINDOW_KEY: 92,
        SELECT_KEY: 93,
        NUMPAD_0: 96,
        NUMPAD_1: 97,
        NUMPAD_2: 98,
        NUMPAD_3: 99,
        NUMPAD_4: 100,
        NUMPAD_5: 101,
        NUMPAD_6: 102,
        NUMPAD_7: 103,
        NUMPAD_8: 104,
        NUMPAD_9: 105,
        MULTIPLY: 106,
        ADD: 107,
        SUBTRACT: 109,
        DECIMAL_POINT: 110,
        DIVIDE: 111,
        F1: 112,
        F2: 113,
        F3: 114,
        F4: 115,
        F5: 116,
        F6: 117,
        F7: 118,
        F8: 119,
        F9: 120,
        F10: 121,
        F11: 122,
        F12: 123,
        NUM_LOCK: 144,
        SCROLL_LOCK: 145,
        SEMI_COLON: 186,
        EQUAL_SIGN: 187,
        COMMA: 188,
        DASH: 189,
        PERIOD: 190,
        FORWARD_SLASH: 191,
        GRAVE_ACCENT: 192,
        OPEN_BRACKET: 219,
        BACK_SLASH: 220,
        CLOSE_BRAKET: 221,
        SINGLE_QUOTE: 222
    })
}), null);
__d("clearImmediatePolyfill", ["ImmediateImplementation"], (function(a, b, c, d, e, f) {
    e.exports = a.clearImmediate || b("ImmediateImplementation").clearImmediate
}), null);
__d("clearImmediate", ["TimerStorage", "TimeSlice", "clearImmediatePolyfill"], (function(a, b, c, d, e, f) {
    var g = b("TimerStorage").IMMEDIATE;

    function a(a) {
        if (a != null) {
            b("TimerStorage").unset(b("TimerStorage").IMMEDIATE, a);
            var c = g + String(a);
            b("TimeSlice").cancelWithToken(c)
        }
        b("clearImmediatePolyfill")(a)
    }
    e.exports = a
}), null);
__d("TimeSliceInteractionCancelHook", ["Keys", "clearImmediate", "requireWeak", "setImmediateAcrossTransitions"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = [];
    a = {
        registerInteraction: function(a) {
            var c = b("setImmediateAcrossTransitions")(function() {
                    g.push(a)
                }),
                d = !1;
            return {
                remove: function() {
                    if (d) return;
                    d = !0;
                    b("clearImmediate")(c);
                    var e = g.indexOf(a);
                    e !== -1 && g.splice(e, 1)
                }
            }
        }
    };
    b("requireWeak")("Event", function(a) {
        a.listen(document, "click", function() {
            g.forEach(function(a) {
                a.trace().addStringAnnotation("clicked_during_interaction", "1")
            })
        }), a.listen(document, "keydown", function(c) {
            a.getKeyCode(c) === b("Keys").ESC && g.forEach(function(a) {
                a.trace().addStringAnnotation("escaped_during_interaction", "1")
            })
        })
    });
    e.exports = a
}), null);
__d("CurrentEventMeta", [], (function(a, b, c, d, e, f) {
    var g = null,
        h = {};
    a = {
        __setCurrentEventID: function(a) {
            g = a
        },
        __informEventDataReady: function(a, b) {
            h[a] && (h[a].forEach(function(a) {
                return a(b)
            }), delete h[a])
        },
        hasCurrentEvent: function() {
            return !!g
        },
        registerForCurrentEventData: function(a) {
            g && (h[g] = h[g] || [], h[g].push(a))
        }
    };
    e.exports = a
}), null);
__d("TimeSliceInteractionEventHook", ["CurrentEventMeta"], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        registerInteraction: function(a) {
            b("CurrentEventMeta").hasCurrentEvent() && (a.countUp(), b("CurrentEventMeta").registerForCurrentEventData(function(b) {
                Object.keys(b).forEach(function(c) {
                    var d = "" + b[c];
                    a.trace().addStringAnnotation(c, d)
                }), a.countDown()
            }));
            return null
        }
    };
    e.exports = a
}), null);
__d("Run", ["requireCond", "cr:925100"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = b("cr:925100")
}), null);
__d("TimeSliceInteractionLeaveHook", ["Run"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = [];
    a = {
        registerInteraction: function(a) {
            g.push(a);
            return {
                remove: function() {
                    var b = g.indexOf(a);
                    b !== -1 && g.splice(b, 1)
                }
            }
        }
    };
    b("Run").onUnload(function() {
        g.forEach(function(a) {
            a.trace().addStringAnnotation("ended_early_because_page_is_unloading", "1"), a.finish(!0)
        })
    });
    e.exports = a
}), null);
__d("EventEmitterWithValidation", ["BaseEventEmitter"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function(a) {
        babelHelpers.inheritsLoose(b, a);

        function b(b, c) {
            var d;
            d = a.call(this) || this;
            d.$EventEmitterWithValidation1 = Object.keys(b);
            d.$EventEmitterWithValidation2 = Boolean(c);
            return d
        }
        var c = b.prototype;
        c.emit = function(b) {
            if (this.$EventEmitterWithValidation1.indexOf(b) === -1) {
                if (this.$EventEmitterWithValidation2) return;
                throw new TypeError(g(b, this.$EventEmitterWithValidation1))
            }
            return a.prototype.emit.apply(this, arguments)
        };
        return b
    }(b("BaseEventEmitter"));

    function g(a, b) {
        a = 'Unknown event type "' + a + '". ';
        a += "Known event types: " + b.join(", ") + ".";
        return a
    }
    e.exports = a
}), null);
__d("mixInEventEmitter", ["invariant", "EventEmitterWithHolding", "EventEmitterWithValidation", "EventHolder"], (function(a, b, c, d, e, f, g) {
    "use strict";

    function a(a, b, c) {
        b || g(0, 3159);
        var d = a.prototype || a;
        d.__eventEmitter && g(0, 3160);
        a = a.constructor;
        a && (a === Object || a === Function || g(0, 3161));
        d.__types = babelHelpers["extends"]({}, d.__types, b);
        d.__ignoreUnknownEvents = Boolean(c);
        Object.assign(d, h)
    }
    var h = {
        emit: function(a, b, c, d, e, f, g) {
            return this.__getEventEmitter().emit(a, b, c, d, e, f, g)
        },
        emitAndHold: function(a, b, c, d, e, f, g) {
            return this.__getEventEmitter().emitAndHold(a, b, c, d, e, f, g)
        },
        addListener: function(a, b, c) {
            return this.__getEventEmitter().addListener(a, b, c)
        },
        once: function(a, b, c) {
            return this.__getEventEmitter().once(a, b, c)
        },
        addRetroactiveListener: function(a, b, c) {
            return this.__getEventEmitter().addRetroactiveListener(a, b, c)
        },
        listeners: function(a) {
            return this.__getEventEmitter().listeners(a)
        },
        removeAllListeners: function() {
            this.__getEventEmitter().removeAllListeners()
        },
        removeCurrentListener: function() {
            this.__getEventEmitter().removeCurrentListener()
        },
        releaseHeldEventType: function(a) {
            this.__getEventEmitter().releaseHeldEventType(a)
        },
        __getEventEmitter: function() {
            if (!this.__eventEmitter) {
                var a = new(b("EventEmitterWithValidation"))(this.__types, this.__ignoreUnknownEvents),
                    c = new(b("EventHolder"))();
                this.__eventEmitter = new(b("EventEmitterWithHolding"))(a, c)
            }
            return this.__eventEmitter
        }
    };
    e.exports = a
}), null);
__d("pageID", ["WebSession"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = b("WebSession").getPageId_DO_NOT_USE()
}), null);
__d("NavigationMetricsCore", ["mixInEventEmitter", "pageID"], (function(a, b, c, d, e, f) {
    var g = {
            NAVIGATION_DONE: "NAVIGATION_DONE",
            EVENT_OCCURRED: "EVENT_OCCURRED"
        },
        h = {
            tti: "tti",
            e2e: "e2e",
            all_pagelets_loaded: "all_pagelets_loaded",
            all_pagelets_displayed: "all_pagelets_displayed"
        },
        i = 0,
        j = {},
        k = function() {
            "use strict";

            function a() {
                this.eventTimings = {
                    tti: null,
                    e2e: null,
                    all_pagelets_loaded: null,
                    all_pagelets_displayed: null
                }, this.lid = b("pageID") + ":" + i++, this.extras = {}
            }
            var c = a.prototype;
            c.getLID = function() {
                return this.lid
            };
            c.setRequestStart = function(a) {
                this.start = a;
                return this
            };
            c.setTTI = function(a) {
                this.eventTimings.tti = a;
                this.$1(h.tti, a);
                return this
            };
            c.setE2E = function(a) {
                this.eventTimings.e2e = a;
                this.$1(h.e2e, a);
                return this
            };
            c.setExtra = function(a, b) {
                this.extras[a] = b;
                return this
            };
            c.setDisplayDone = function(a) {
                this.eventTimings.all_pagelets_displayed = a;
                this.setExtra("all_pagelets_displayed", a);
                this.$1(h.all_pagelets_displayed, a);
                return this
            };
            c.setAllPageletsLoaded = function(a) {
                this.eventTimings.all_pagelets_loaded = a;
                this.setExtra("all_pagelets_loaded", a);
                this.$1(h.all_pagelets_loaded, a);
                return this
            };
            c.setServerLID = function(a) {
                this.serverLID = a;
                return this
            };
            c.$1 = function(a, b) {
                var c = {};
                j != null && this.serverLID != null && j[this.serverLID] != null && (c = j[this.serverLID]);
                c = babelHelpers["extends"]({}, c, {
                    event: a,
                    timestamp: b
                });
                l.emitAndHold(g.EVENT_OCCURRED, this.serverLID, c);
                return this
            };
            c.doneNavigation = function() {
                var a = babelHelpers["extends"]({
                    start: this.start,
                    extras: this.extras
                }, this.eventTimings);
                if (this.serverLID && j[this.serverLID]) {
                    var b = this.serverLID;
                    Object.assign(a, j[b]);
                    delete j[b]
                }
                l.emitAndHold(g.NAVIGATION_DONE, this.lid, a)
            };
            return a
        }(),
        l = {
            Events: g,
            postPagelet: function(a, b, c) {},
            siteInit: function(a) {
                a(k)
            },
            setPage: function(a) {
                if (!a.serverLID) return;
                j[a.serverLID] = {
                    page: a.page,
                    pageType: a.page_type,
                    pageURI: a.page_uri,
                    serverLID: a.serverLID
                }
            },
            getFullPageLoadLid: function() {
                throw new Error("getFullPageLoadLid is not implemented on this site")
            }
        };
    b("mixInEventEmitter")(l, g);
    e.exports = l
}), null);
__d("NavigationMetrics", ["Arbiter", "BigPipeInstance", "NavigationMetricsCore", "PageEvents", "performance"], (function(a, b, c, d, e, f) {
    var g, h = "0";
    b("NavigationMetricsCore").getFullPageLoadLid = function() {
        return h
    };
    b("NavigationMetricsCore").siteInit(function(a) {
        var c = new a(),
            d = !0;
        b("Arbiter").subscribe(b("BigPipeInstance").Events.init, function(e, f) {
            var g = d ? c : new a();
            d && (h = f.lid);
            d = !1;
            g.setServerLID(f.lid);
            e = f.arbiter;
            e.subscribe(b("BigPipeInstance").Events.tti, function(a, b) {
                a = b.ts;
                g.setTTI(a)
            });
            e.subscribe(b("PageEvents").AJAXPIPE_SEND, function(a, b) {
                a = b.ts;
                g.setRequestStart(a)
            });
            e.subscribe(b("PageEvents").AJAXPIPE_ONLOAD, function(a, b) {
                a = b.ts;
                g.setE2E(a).doneNavigation()
            });
            e.subscribe(b("BigPipeInstance").Events.displayed, function(a, b) {
                a = b.ts;
                g.setDisplayDone(a)
            });
            e.subscribe(b("BigPipeInstance").Events.loaded, function(a, b) {
                a = b.ts;
                g.setAllPageletsLoaded(a)
            })
        });
        b("Arbiter").subscribe(b("PageEvents").BIGPIPE_ONLOAD, function(a, e) {
            a = e.ts;
            d = !1;
            c.setRequestStart((g || (g = b("performance"))).timing && (g || (g = b("performance"))).timing.navigationStart).setE2E(a).doneNavigation()
        })
    });
    e.exports = b("NavigationMetricsCore")
}), null);
__d("TimeSliceInteractionPageStatsHook", ["NavigationMetrics"], (function(a, b, c, d, e, f) {
    "use strict";
    var g, h = [];
    b("NavigationMetrics").addRetroactiveListener(b("NavigationMetrics").Events.NAVIGATION_DONE, function(a, b) {
        if (b.pageType !== "normal") return;
        g = {
            start: b.start,
            dd: b.all_pagelets_displayed,
            tti: b.tti,
            e2e: b.e2e
        };
        for (var a = 0; a < h.length; a++) {
            b = h[a];
            i(b);
            b.countDown()
        }
        h = []
    });

    function i(a) {
        g ? (a.trace().addStringAnnotation("page_start", "" + g.start), a.trace().addStringAnnotation("page_tti", "" + g.tti), a.trace().addStringAnnotation("page_dd", "" + g.dd), a.trace().addStringAnnotation("page_e2e", "" + g.e2e)) : (a.countUp(), h.push(a))
    }
    a = {
        registerInteraction: function(a) {
            i(a);
            return {
                remove: function() {
                    var b = h.indexOf(a);
                    b !== -1 && h.splice(b, 1)
                }
            }
        }
    };
    e.exports = a
}), null);
__d("TimeSliceInteractionResourcesDataSource", ["SiteData"], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        registerInteraction: function(a) {
            a.countDown(), a.registerOnBeforeFinish(function(a) {
                a.recordWithExtraSaver("resources_saver", "info", {
                    client_revision: b("SiteData").client_revision,
                    pkg_cohort: b("SiteData").pkg_cohort
                })
            })
        }
    };
    e.exports = a
}), null);
__d("BrowserEventBasedInteraction", ["Bootloader", "FBLogger", "PageDOMMutationObserver", "TimeSliceAutoclosedInteraction", "TimeSliceInteractionCancelHook", "TimeSliceInteractionEventHook", "TimeSliceInteractionLeaveHook", "TimeSliceInteractionPageStatsHook", "TimeSliceInteractionResourcesDataSource", "performanceAbsoluteNow"], (function(a, b, c, d, e, f) {
    "use strict";
    var g, h, i = [b("TimeSliceInteractionCancelHook"), b("TimeSliceInteractionEventHook"), b("TimeSliceInteractionLeaveHook"), b("TimeSliceInteractionPageStatsHook")];
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);

        function c(c, d, e) {
            var f;
            f = a.call(this, "Event", [b("TimeSliceInteractionResourcesDataSource")]) || this;
            f.$BrowserEventBasedInteraction2 = [];
            f.$BrowserEventBasedInteraction4 = null;
            f.$BrowserEventBasedInteraction5 = null;
            f.$BrowserEventBasedInteraction6 = null;
            f.$BrowserEventBasedInteraction7 = 0;
            f.$BrowserEventBasedInteraction8 = 0;
            f.$BrowserEventBasedInteraction1 = d;
            [].push.apply(f.$BrowserEventBasedInteraction2, c);
            f.setExtraSampleRate(e);
            var h = i.map(function(a) {
                a.registerInteraction(babelHelpers.assertThisInitialized(f))
            });
            f.registerOnCleanUp(function() {
                h.forEach(function(a) {
                    return a && a.remove()
                })
            });
            f.registerOnBeforeSend(function() {
                f.trace().addVectorAnnotation("interaction_ids", f.$BrowserEventBasedInteraction2)
            });
            f.trace().addStringAnnotation("is_mutation_observer_supported", (g || (g = b("PageDOMMutationObserver"))).isSupported() ? "1" : "0");
            return f
        }
        var d = c.prototype;
        d.getEventType = function() {
            return this.$BrowserEventBasedInteraction1
        };
        d.tagAsInteractionID = function(a) {
            this.$BrowserEventBasedInteraction2.push(a)
        };
        d.hasInteractionIDs = function(a) {
            for (var a = a, b = Array.isArray(a), c = 0, a = b ? a : a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                var d;
                if (b) {
                    if (c >= a.length) break;
                    d = a[c++]
                } else {
                    c = a.next();
                    if (c.done) break;
                    d = c.value
                }
                d = d;
                if (!this.$BrowserEventBasedInteraction2.includes(d)) return !1
            }
            return !0
        };
        d.addEagerExecution = function(a, b, c) {
            this.waitForReferenceCounter(a), this.addProfilingCounterAttribution(b), [].push.apply(this.$BrowserEventBasedInteraction2, c)
        };
        d.setManualStartAndEnd = function(a, b, c, d) {
            this.$BrowserEventBasedInteraction7++, this.$BrowserEventBasedInteraction8++, this.$BrowserEventBasedInteraction3 = a, this.$BrowserEventBasedInteraction4 = b, this.$BrowserEventBasedInteraction5 = c, this.$BrowserEventBasedInteraction6 = d, this.isEnabled() ? this.addManualInstrumentationData() : d || this.logManualInstrumentationData()
        };
        d.markManualStart = function(a, c) {
            var d = this;
            this.$BrowserEventBasedInteraction7++;
            this.$BrowserEventBasedInteraction4 || (this.$BrowserEventBasedInteraction4 = c || (h || (h = b("performanceAbsoluteNow")))(), this.$BrowserEventBasedInteraction3 = a, this.isEnabled() && (this.countUp(), this.registerOnBeforeFinish(function() {
                d.addManualInstrumentationData()
            })))
        };
        d.markManualEnd = function(a) {
            if (!this.$BrowserEventBasedInteraction4) {
                b("FBLogger")("event_profiler").warn("Attempting to mark end for interaction which never had start marked");
                return
            }
            this.$BrowserEventBasedInteraction8++;
            this.$BrowserEventBasedInteraction5 = a || (h || (h = b("performanceAbsoluteNow")))();
            this.$BrowserEventBasedInteraction6 = this.hasActiveReferenceCountingHandle();
            !this.isEnabled() && !this.$BrowserEventBasedInteraction6 ? this.logManualInstrumentationData() : this.isEnabled() && this.$BrowserEventBasedInteraction8 === 1 && this.countDown()
        };
        d.getManualInstrumentationData = function() {
            var a = {};
            this.$BrowserEventBasedInteraction4 && this.$BrowserEventBasedInteraction3 && (a.manual_instrumentation_start = "" + this.$BrowserEventBasedInteraction4, a.manual_instrumentation_marked_start_count = "" + this.$BrowserEventBasedInteraction7, a.manual_instrumentation_start_reference_counted = "1");
            this.$BrowserEventBasedInteraction5 && (a.manual_instrumentation_end = "" + this.$BrowserEventBasedInteraction5, a.manual_instrumentation_marked_end_count = "" + this.$BrowserEventBasedInteraction8, a.manual_instrumentation_end_reference_counted = this.$BrowserEventBasedInteraction6 ? "1" : "0");
            this.$BrowserEventBasedInteraction4 && this.$BrowserEventBasedInteraction5 && (a.manual_instrumentation_duration = "" + (this.$BrowserEventBasedInteraction5 - this.$BrowserEventBasedInteraction4));
            return a
        };
        d.addManualInstrumentationData = function() {
            var a = this,
                b = this.getManualInstrumentationData();
            Object.keys(b).forEach(function(c) {
                a.trace().addStringAnnotation(c, b[c])
            });
            this.trace().addVectorAnnotation("manual_instrumentation_interaction_ids", this.$BrowserEventBasedInteraction3 || []);
            b.manual_instrumentation_start && this.inform("manual_instrumentation_start", {
                ts: parseFloat(b.manual_instrumentation_start)
            }).addStringAnnotation("visual_role", "global_signpost");
            b.manual_instrumentation_end && this.inform("manual_instrumentation_end", {
                ts: parseFloat(b.manual_instrumentation_end)
            }).addStringAnnotation("visual_role", "global_signpost")
        };
        d.logManualInstrumentationData = function() {
            var a = this,
                c = this.$BrowserEventBasedInteraction3 || [],
                d = this.getManualInstrumentationData();
            d.lite_weight = "1";
            b("Bootloader").loadModules(["TimeSliceInteractionsLiteTypedLogger", "PerfXSharedFields"], function(b, e) {
                new b().setActionName("Event").setTraceAnnotations({
                    stringProps: d,
                    setProps: {},
                    vectorProps: {
                        manual_instrumentation_interaction_ids: c,
                        interaction_ids: a.$BrowserEventBasedInteraction2
                    }
                }).updateData(e.getCommonData()).logVital()
            }, "BrowserEventBasedInteraction")
        };
        d.getActiveBrowserEventBasedInteractions = function() {
            return b("TimeSliceAutoclosedInteraction").getInteractionsActiveRightNow().filter(function(a) {
                return a instanceof c
            })
        };
        return c
    }(b("TimeSliceAutoclosedInteraction"));
    e.exports = a
}), null);
__d("EventProfilerAdsSessionProvider", ["AdsInterfacesSessionConfig"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = {
        sessionID: b("AdsInterfacesSessionConfig").sessionID
    }
}), null);
__d("EventProfilerEagerExecution", ["EventConfig", "FBLogger", "ProfilingCounters", "TimeSliceReferenceCounting"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = 0,
        h = {},
        i = 0,
        j = {},
        k = function() {
            function a(a, c, d) {
                var e = this;
                this.interaction = null;
                this.$2 = [];
                this.$3 = [];
                this.$4 = [];
                this.$5 = [];
                this.id = i++;
                this.$6 = a;
                for (var d = 0; d < a.length; d++) j[a[d]] && b("FBLogger")("event_profiler").blameToPreviousDirectory().mustfix("Declaring multiple eager executions for the same interaction not supported: %s", a[d]), j[a[d]] = this;
                d = "eagerly_executed_tree_" + ++g;
                b("EventConfig").profile_eager_execution && (this.handle = b("TimeSliceReferenceCounting").onAllChildrenFinished(function() {
                    e.finish()
                }, c !== 0), c && b("ProfilingCounters").currentContext().addAttribution(d, b("ProfilingCounters").AttributionPropagation.ONLY_ON_CONTINUATIONS));
                this.sampleWeight = c;
                this.$1 = d;
                h[this.id] = this
            }
            var c = a.prototype;
            c.hasInteractionIDs = function(a) {
                for (var a = a, b = Array.isArray(a), c = 0, a = b ? a : a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                    var d;
                    if (b) {
                        if (c >= a.length) break;
                        d = a[c++]
                    } else {
                        c = a.next();
                        if (c.done) break;
                        d = c.value
                    }
                    d = d;
                    if (!this.$6.includes(d)) return !1
                }
                return !0
            };
            c.__registerInteractionWePotentiallyEagerlyExecutedFor = function(a) {
                this.$2.push(a)
            };
            c.attributeToCurrentlyActiveInteraction = function() {
                var a = this,
                    b = this.handle;
                if (!b) return;
                var c = function() {
                    if (e) {
                        if (f >= d.length) return "break";
                        g = d[f++]
                    } else {
                        f = d.next();
                        if (f.done) return "break";
                        g = f.value
                    }
                    var c = g;
                    if (c.hasActiveReferenceCountingHandle()) {
                        c.addEagerExecution(b, a.$1, a.$3.slice());
                        a.interaction = c;
                        a.$4.forEach(function(a) {
                            return a(c)
                        });
                        a.$4 = [];
                        return "break"
                    }
                };
                for (var d = this.$2, e = Array.isArray(d), f = 0, d = e ? d : d[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                    var g, h = c();
                    if (h === "break") break
                }
            };
            c.tagAsInteractionID = function(a) {
                this.$3.push(a)
            };
            c.withInteraction = function(a) {
                !this.interaction ? this.$4.push(a) : a(this.interaction)
            };
            c.isActive = function() {
                return !!(this.handle && this.handle.isInsideContinuationExecution())
            };
            c.onFinish = function(a) {
                this.$5.push(a)
            };
            c.finish = function() {
                delete h[this.id], this.$5.forEach(function(a) {
                    return a()
                }), this.$5 = []
            };
            return a
        }();
    a = {
        declareEagerExecution: function(a, b, c) {
            a = new k(a, c, b);
            var d = a.id;
            return function() {
                h[d] && h[d].attributeToCurrentlyActiveInteraction()
            }
        },
        getEagerExecution: function(a, b) {
            var c = a.map(function(a) {
                return j[a]
            }).filter(function(b) {
                return b && b.hasInteractionIDs(a)
            });
            b = c.filter(function(a, b) {
                return b === c.indexOf(a)
            });
            return b.length == 1 ? b[0] : null
        },
        getActiveExecutions: function() {
            return Object.values(h).filter(function(a) {
                return a.handle && a.handle.isInsideContinuationExecution()
            })
        }
    };
    e.exports = a
}), null);
__d("EventProfilerInteractionTracker", ["Bootloader", "BrowserEventBasedInteraction", "EventConfig", "EventProfilerEagerExecution", "performanceAbsoluteNow"], (function(a, b, c, d, e, f) {
    "use strict";
    var g, h = [],
        i = b("EventConfig").profile_eager_execution && b("EventConfig").manual_instrumentation;
    a = {
        createNewInteraction: function(a, c, d, e) {
            if (!a.length) return null;
            var f = e && e.sampleWeight || 0,
                g;
            (i || d || f) && (g = new(b("BrowserEventBasedInteraction"))(a, c, 1 / (f || d)));
            if (g && e) {
                var j = e;
                j.__registerInteractionWePotentiallyEagerlyExecutedFor(g);
                g.registerOnBeforeSend(function() {
                    g && g !== j.interaction && (d ? g.setExtraSampleRate(1 / d) : g.disable())
                })
            }
            if (g) {
                var k = g;
                h.push(g);
                g.onReferenceCountedExecutionFinished(function() {
                    var a = h.indexOf(k);
                    a !== -1 && h.splice(a, 1)
                })
            }
            f === 0 && d === 0 && g && g.disable();
            return d === 0 ? null : g
        },
        markManualStart: function(a, c, d) {
            if (!i) return {
                markManualEnd: function() {}
            };
            var e = h.filter(function(b) {
                    return b.hasInteractionIDs(a) && b.getEventType() === c
                }),
                f = b("EventProfilerEagerExecution").getActiveExecutions();
            if (e.length === 1) return j(e[0], a, d);
            else if (f.length === 1) return m(f[0], a, d);
            else {
                e.forEach(function(a) {
                    a.trace().addStringAnnotation("has_manual_instrumentation_conflict", "1")
                });
                return k(a, e.length + f.length, d)
            }
        }
    };

    function j(a, b, c) {
        a.markManualStart(b, c);
        return {
            markManualEnd: function(b) {
                a.markManualEnd(b)
            }
        }
    }

    function k(a, c, d) {
        var e = d || (g || (g = b("performanceAbsoluteNow")))();
        return {
            markManualEnd: function(d) {
                d = d || (g || (g = b("performanceAbsoluteNow")))();
                l(e, d, a, c)
            }
        }
    }

    function l(a, c, d, e) {
        var f = {
            manual_instrumentation_start: "" + a,
            manual_instrumentation_end: "" + c,
            manual_instrumentation_duration: "" + (c - a),
            manual_instrumentation_start_reference_counted: "0",
            manual_instrumentation_end_reference_counted: "0",
            lite_weight: "1"
        };
        e && (f.manual_instrumentation_conflicts = "" + e);
        b("Bootloader").loadModules(["TimeSliceInteractionsLiteTypedLogger", "PerfXSharedFields"], function(a, b) {
            new a().setActionName("Event").setTraceAnnotations({
                stringProps: f,
                setProps: {},
                vectorProps: {
                    manual_instrumentation_interaction_ids: d
                }
            }).updateData(b.getCommonData()).logVital()
        }, "EventProfilerInteractionTracker")
    }

    function m(a, c, d) {
        var e = d || (g || (g = b("performanceAbsoluteNow")))(),
            f, h, i, j = !1;

        function k() {
            f && h !== void 0 && !j && i !== void 0 && (j = !0, h ? h.setManualStartAndEnd(c, e, f, i) : l(e, f, c))
        }
        var m;
        a.withInteraction(function(a) {
            m = a, a.onReferenceCountedExecutionFinished(function() {
                a.hasInteractionIDs(c) ? h = a : h = null, k()
            })
        });
        a.onFinish(function() {
            m || (h = !1, k())
        });
        return {
            markManualEnd: function(c) {
                if (f) return;
                i = a.isActive() || m && m.hasActiveReferenceCountingHandle() || !1;
                f = c || (g || (g = b("performanceAbsoluteNow")))();
                k()
            }
        }
    }
    e.exports = a
}), null);
__d("EventProfilerSampler", ["EventConfig"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("EventConfig").interaction_boost,
        h = b("EventConfig").event_types,
        i = b("EventConfig").sampling || {},
        j = b("EventConfig").page_sampling_boost || 1,
        k = [];
    Object.keys(b("EventConfig").interaction_regexes).forEach(function(a) {
        k.push({
            id: a,
            regex: new RegExp(b("EventConfig").interaction_regexes[a])
        })
    });
    a = "click";
    c = "mouseup";
    var l = [a, c],
        m = a;
    d = {
        canSample: function(a) {
            return !!i[a]
        },
        getEventSampleWeights: function(a, b) {
            a.__samplingWeights == void 0 && (a.__samplingWeights = {
                interaction: n(this.getInteractionWeight(a, b)),
                event: n(this.getEventWeight(a))
            });
            return a.__samplingWeights
        },
        getInteractionWeight: function(a, b) {
            a = a.type in i ? i[a.type] : 1;
            if (!a || !b || !b.length) return 0;
            var c = 1;
            for (var b = b, d = Array.isArray(b), e = 0, b = d ? b : b[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                var f;
                if (d) {
                    if (e >= b.length) break;
                    f = b[e++]
                } else {
                    e = b.next();
                    if (e.done) break;
                    f = e.value
                }
                f = f;
                if (g[f]) {
                    c = g[f];
                    break
                }
            }
            return a * i.__interactionDefault / c
        },
        getEventWeight: function(a) {
            a = a.type in i ? i[a.type] : 1;
            a /= j;
            return a * i.__eventDefault
        },
        getEventInteractionIDs: function(a, b) {
            if (l.indexOf(a) === -1) return [];
            var c = [];
            for (var b = b, d = Array.isArray(b), e = 0, b = d ? b : b[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                var f;
                if (d) {
                    if (e >= b.length) break;
                    f = b[e++]
                } else {
                    e = b.next();
                    if (e.done) break;
                    f = e.value
                }
                f = f;
                for (var g = 0; g < k.length; g++) {
                    var i = k[g];
                    if (i.regex.test(f)) {
                        var j = h[i.id];
                        if (j) {
                            if (j.indexOf(a) === -1) continue
                        } else if (a !== m) continue;
                        c.push(i.id)
                    }
                }
            }
            return c
        }
    };

    function n(a) {
        if (a === 0) return 0;
        var b = i.__min || 1;
        a = Math.round(Math.max(b, a));
        return Math.random() * a < 1 ? a : 0
    }
    e.exports = d
}), null);
__d("SubscriptionList", ["recoverableViolation"], (function(a, b, c, d, e, f) {
    a = function() {
        "use strict";

        function a(a, b) {
            this.$1 = [], this.$2 = a, this.$3 = b
        }
        var c = a.prototype;
        c.add = function(a) {
            var c = this,
                d = {
                    callback: a
                };
            this.$1.push(d);
            this.$2 && this.$1.length === 1 && this.$2();
            return {
                remove: function() {
                    var a = c.$1.indexOf(d);
                    if (a === -1) {
                        b("recoverableViolation")("SubscriptionList: Callback already removed.", "SubscriptionList");
                        return
                    }
                    c.$1.splice(a, 1);
                    c.$3 && c.$1.length === 0 && c.$3()
                }
            }
        };
        c.getCallbacks = function() {
            return this.$1.map(function(a) {
                return a.callback
            })
        };
        c.fireCallbacks = function(a) {
            this.getCallbacks().forEach(function(b) {
                b(a)
            })
        };
        return a
    }();
    e.exports = a
}), null);
__d("isInIframe", [], (function(a, b, c, d, e, f) {
    var g = window != window.top;

    function a() {
        return g
    }
    e.exports = a
}), null);
__d("ScriptPath", ["ErrorGuard", "SubscriptionList", "TimeSlice", "WebStorage", "isInIframe"], (function(a, b, c, d, e, f) {
    "use strict";
    var g, h, i = "sp_pi",
        j = 1e3 * 30,
        k = null,
        l = null,
        m = new(b("SubscriptionList"))(),
        n = null,
        o = [],
        p = b("TimeSlice").guard(function(a, c) {
            m.getCallbacks().forEach(function(d) {
                (g || (g = b("ErrorGuard"))).applyWithGuard(function() {
                    d({
                        source: k,
                        dest: l,
                        cause: a,
                        extraData: c
                    })
                }, null, [])
            })
        }, "ScriptPath Notifying callbacks", {
            propagationType: b("TimeSlice").PropagationType.ORPHAN
        });

    function q() {
        return l ? l.scriptPath : void 0
    }

    function r() {
        var a = (h || (h = b("WebStorage"))).getSessionStorage();
        if (!a || b("isInIframe")()) return;
        h.setItemGuarded(a, i, JSON.stringify({
            pageInfo: l,
            clickPoint: n,
            time: Date.now()
        }))
    }

    function a() {
        var a = (h || (h = b("WebStorage"))).getSessionStorageForRead();
        if (!a) return;
        var c = a.getItem(i);
        if (c) {
            c = JSON.parse(c);
            c && (c.time < Date.now() - j && (a = (h || (h = b("WebStorage"))).getSessionStorage(), a && a.removeItem(i)), l = c.pageInfo, n = c.clickPoint, l && (l.restored = !0))
        }
    }
    a();
    c = {
        set: function(a, b, c) {
            k = l, l = {
                scriptPath: a,
                categoryToken: b,
                extraData: c || {}
            }, o = [], window._script_path = a, p()
        },
        openOverlayView: function(a, b, c) {
            if (!a) return;
            var d = o.length;
            (d === 0 || o[d - 1] !== a) && (k = Object.assign({}, l), l && (l.topViewEndpoint = a), c && c.replaceTopOverlay && d > 0 ? (o[d - 1] = a, p("replace_overlay_view", b)) : (o.push(a), p("open_overlay_view", b)))
        },
        closeOverlayView: function(a, b) {
            a = o.lastIndexOf(a);
            if (a === -1) return;
            k = Object.assign({}, l);
            l && (a > 0 ? l.topViewEndpoint = o[a - 1] : l.topViewEndpoint = null);
            o = o.slice(0, a);
            p("close_overlay_view", b)
        },
        setClickPointInfo: function(a) {
            n = a, r()
        },
        getClickPointInfo: function() {
            return n
        },
        getScriptPath: q,
        getCategoryToken: function() {
            return l ? l.categoryToken : void 0
        },
        getEarlyFlushPage: function() {
            var a;
            return (a = l) == null ? void 0 : (a = a.extraData) == null ? void 0 : a.ef_page
        },
        getTopViewEndpoint: function() {
            var a = o.length;
            return a > 0 ? o[a - 1] : q()
        },
        getPageInfo: function() {
            return l
        },
        getSourcePageInfo: function() {
            return k
        },
        subscribe: function(a) {
            return m.add(b("TimeSlice").guard(a, "ScriptPath.subscribe"))
        },
        shutdown: function() {
            r()
        }
    };
    e.exports = c
}), null);
__d("VersionRange", ["invariant"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = /\./,
        i = /\|\|/,
        j = /\s+\-\s+/,
        k = /^(<=|<|=|>=|~>|~|>|)?\s*(.+)/,
        l = /^(\d*)(.*)/;

    function m(a, b) {
        a = a.split(i);
        if (a.length > 1) return a.some(function(a) {
            return D.contains(a, b)
        });
        else return n(a[0].trim(), b)
    }

    function n(a, b) {
        a = a.split(j);
        a.length > 0 && a.length <= 2 || g(0, 3072);
        if (a.length === 1) return o(a[0], b);
        else {
            var c = a[0];
            a = a[1];
            x(c) && x(a) || g(0, 3073);
            return o(">=" + c, b) && o("<=" + a, b)
        }
    }

    function o(a, b) {
        a = a.trim();
        if (a === "") return !0;
        b = b.split(h);
        a = v(a);
        var c = a.modifier;
        a = a.rangeComponents;
        switch (c) {
            case "<":
                return p(b, a);
            case "<=":
                return q(b, a);
            case ">=":
                return s(b, a);
            case ">":
                return t(b, a);
            case "~":
            case "~>":
                return u(b, a);
            default:
                return r(b, a)
        }
    }

    function p(a, b) {
        return C(a, b) === -1
    }

    function q(a, b) {
        a = C(a, b);
        return a === -1 || a === 0
    }

    function r(a, b) {
        return C(a, b) === 0
    }

    function s(a, b) {
        a = C(a, b);
        return a === 1 || a === 0
    }

    function t(a, b) {
        return C(a, b) === 1
    }

    function u(a, b) {
        var c = b.slice();
        b = b.slice();
        b.length > 1 && b.pop();
        var d = b.length - 1,
            e = parseInt(b[d], 10);
        w(e) && (b[d] = e + 1 + "");
        return s(a, c) && p(a, b)
    }

    function v(a) {
        a = a.split(h);
        var b = a[0].match(k);
        b || g(0, 3074);
        return {
            modifier: b[1],
            rangeComponents: [b[2]].concat(a.slice(1))
        }
    }

    function w(a) {
        return !isNaN(a) && isFinite(a)
    }

    function x(a) {
        return !v(a).modifier
    }

    function y(a, b) {
        for (var c = a.length; c < b; c++) a[c] = "0"
    }

    function z(a, b) {
        a = a.slice();
        b = b.slice();
        y(a, b.length);
        for (var c = 0; c < b.length; c++) {
            var d = b[c].match(/^[x*]$/i);
            if (d) {
                b[c] = a[c] = "0";
                if (d[0] === "*" && c === b.length - 1)
                    for (var d = c; d < a.length; d++) a[d] = "0"
            }
        }
        y(b, a.length);
        return [a, b]
    }

    function A(a, b) {
        var c = a.match(l),
            d = b.match(l);
        c = c && c[1];
        d = d && d[1];
        c = parseInt(c, 10);
        d = parseInt(d, 10);
        if (w(c) && w(d) && c !== d) return B(c, d);
        else return B(a, b)
    }

    function B(a, b) {
        typeof a === typeof b || g(0, 3075);
        if (typeof a === "string" && typeof b === "string")
            if (a > b) return 1;
            else if (a < b) return -1;
        else return 0;
        if (typeof a === "number" && typeof b === "number")
            if (a > b) return 1;
            else if (a < b) return -1;
        else return 0;
        typeof a === typeof b || g(0, 3075);
        return 0
    }

    function C(a, b) {
        a = z(a, b);
        b = a[0];
        a = a[1];
        for (var c = 0; c < a.length; c++) {
            var d = A(b[c], a[c]);
            if (d) return d
        }
        return 0
    }
    var D = {
        contains: function(a, b) {
            return m(a.trim(), b.trim())
        }
    };
    e.exports = D
}), null);
__d("mapObject", [], (function(a, b, c, d, e, f) {
    "use strict";

    function g(a, b, c) {
        if (!a) return null;
        var d = {};
        Object.keys(a).forEach(function(e) {
            d[e] = b.call(c, a[e], e, a)
        });
        return d
    }

    function a(a, b, c) {
        return g(a, b, c)
    }

    function b(a, b, c) {
        return g(a, b, c)
    }
    g.untyped = a;
    g.shape = b;
    e.exports = g
}), null);
__d("UserAgent", ["UserAgentData", "VersionRange", "mapObject", "memoizeStringOnly"], (function(a, b, c, d, e, f) {
    "use strict";
    var g;

    function h(a, c, d, e) {
        if (a === d) return !0;
        if (!d.startsWith(a)) return !1;
        d = d.slice(a.length);
        if (c != null) {
            d = e ? e(d) : d;
            return b("VersionRange").contains(d, c)
        }
        return !1
    }

    function i(a) {
        return b("UserAgentData").platformName === "Windows" ? a.replace(/^\s*NT/, "") : a
    }
    a = {
        isBrowser: function(a) {
            return h(b("UserAgentData").browserName, b("UserAgentData").browserFullVersion, a)
        },
        isBrowserArchitecture: function(a) {
            return h(b("UserAgentData").browserArchitecture, null, a)
        },
        isDevice: function(a) {
            return h(b("UserAgentData").deviceName, null, a)
        },
        isEngine: function(a) {
            return h(b("UserAgentData").engineName, b("UserAgentData").engineVersion, a)
        },
        isPlatform: function(a) {
            return h(b("UserAgentData").platformName, b("UserAgentData").platformFullVersion, a, i)
        },
        isPlatformArchitecture: function(a) {
            return h(b("UserAgentData").platformArchitecture, null, a)
        }
    };
    e.exports = (g || b("mapObject"))(a, b("memoizeStringOnly"))
}), null);
__d("cx", [], (function(a, b, c, d, e, f) {
    function a(a) {
        throw new Error("cx: Unexpected class transformation.")
    }
    e.exports = a
}), null);
__d("getParentClassesForEventProfiler", ["cx"], (function(a, b, c, d, e, f, g) {
    "use strict";

    function h(a) {
        if (!a || !(a instanceof HTMLElement)) return "";
        var b = a.id,
            c = a.nodeName,
            d = a.getAttribute("class");
        c = c ? c.replace(/^#/, "") : "unknown";
        b = b ? "#" + b : "";
        d = d ? " " + d.replace(/\s+/g, " ").trim() : "";
        if (a.getAttribute("rel") === "theater") {
            a = "_342u";
            d = d.length ? d + " " + a : a
        }
        return ":" + c + b + d
    }

    function a(a) {
        var b = [];
        while (a && a instanceof HTMLElement) b.push(h(a)), a = a.parentElement;
        b.reverse();
        return b
    }
    e.exports = a
}), null);
__d("requestAnimationFrameAcrossTransitions", ["requireCond", "cr:1100101"], (function(a, b, c, d, e, f) {
    e.exports = b("cr:1100101")
}), null);
__d("uniqueID", [], (function(a, b, c, d, e, f) {
    var g = "js_",
        h = 36,
        i = 0;

    function a() {
        return g + (i++).toString(h)
    }
    e.exports = a
}), null);
__d("EventProfilerImpl", ["Arbiter", "Bootloader", "BrowserEventBasedInteraction", "CurrentEventMeta", "EventConfig", "EventProfilerAdsSessionProvider", "EventProfilerEagerExecution", "EventProfilerInteractionTracker", "EventProfilerSampler", "Parent", "ScriptPath", "TimeSlice", "TimeSliceAutoclosedInteraction", "UserAgent", "getParentClassesForEventProfiler", "performanceAbsoluteNow", "requestAnimationFrameAcrossTransitions", "setTimeoutAcrossTransitions", "uniqueID"], (function(a, b, c, d, e, f) {
    var g, h = {},
        i = {},
        j = {},
        k = !1,
        l = 0,
        m = new Set(["click", "keydown", "mousewheel", "scroll"]),
        n = null,
        o = null,
        p = null,
        q = !1;
    b("Arbiter").subscribe("perf_nub_interaction_trace", function(a, b) {
        q = !0
    });
    var r = {
        __wrapEventListenHandler: function(a) {
            return b("EventConfig").disable_event_profiler ? a : function(c, d) {
                var e = this;
                if (!b("EventProfilerSampler").canSample(c)) return a.call(this, c, d);
                var f, r = {
                        interaction: 0,
                        event: 0
                    },
                    w = (g || (g = b("performanceAbsoluteNow")))();
                d.id = d.id || b("uniqueID")();
                var x = d.id;
                b("CurrentEventMeta").__setCurrentEventID(x);
                var y = j[x],
                    z = null;
                if (i[x] === void 0 && !y) {
                    z = b("getParentClassesForEventProfiler")(d.target);
                    var A = b("EventProfilerSampler").getEventInteractionIDs(c, z);
                    f = b("EventProfilerEagerExecution").getEagerExecution(A, c);
                    q && c === "click" ? (A.push("PerfNubTrace"), r = {
                        interaction: 1,
                        event: 1
                    }, q = !1) : r = v(d, A);
                    p != null && p.beforeHandlers(x, c);
                    n = b("EventProfilerInteractionTracker").createNewInteraction(A, c, r.interaction, f);
                    A = a.call(this, c, d);
                    j[x] = b("TimeSlice").getGuardedContinuation("Event Bubble Continuation")
                } else r = v(d, []), A = y(function() {
                    j[x] = b("TimeSlice").getGuardedContinuation("Event Bubble Continuation");
                    return a.call(e, c, d)
                });
                f = g();
                if (i[x] === void 0) {
                    z = z;
                    y = t(d);
                    y = y || w;
                    var B = Math.max(w - y, 0),
                        C = u(d.target, "data-referrer"),
                        D = null;
                    b("UserAgent").isBrowser("Chrome") && (D = !!d.cancelable);
                    var E = D && (!!d.deliberateSync || b("UserAgent").isBrowser("Chrome < 51"));
                    i[x] = {
                        event_name: c,
                        event_start_ms: Math.round(y),
                        main_thread_wait_ms: Math.round(B),
                        event_handlers_runtime_ms: 0,
                        script_path: b("ScriptPath").getScriptPath() || "<unknown>",
                        request_animation_frame_wait_ms: 0,
                        set_timeout_wait_ms: 0
                    };
                    h[x] = {
                        event_target_raw: z,
                        weight: r.event,
                        cancelable: !!D,
                        deliberate_sync: !!E,
                        ad_account_id: o,
                        event_end_ms: 0
                    };
                    B = b("EventProfilerAdsSessionProvider").sessionID;
                    B && (h[x].ads_session_id = B);
                    var F = !1;
                    m.has(c) && (!k && l < y && (k = !0, F = !0), h[x].is_first_in_frame = F, h[x].is_first_overlapping = F);
                    if (n) {
                        r = n.trace();
                        r.addVectorAnnotation("event_target_stack", z).addVectorAnnotation("pagelets", C)
                    }
                    var G = n;
                    b("requestAnimationFrameAcrossTransitions")(function() {
                        n = null;
                        var a = (g || (g = b("performanceAbsoluteNow")))();
                        i[x].request_animation_frame_wait_ms = Math.round(a - h[x].event_end_ms);
                        delete h[x].event_end_ms;
                        var d = !1;

                        function e() {
                            if (d) return;
                            d = !0;
                            var e = (g || (g = b("performanceAbsoluteNow")))();
                            i[x].set_timeout_wait_ms = Math.round(e - a);
                            s(x, w, e);
                            m.has(c) && F && (k = !1, l = e);
                            e = j[x];
                            e && (b("TimeSlice").cancel(e), delete j[x]);
                            G && G.inform("TTI", {
                                isPointOfInterest: !0
                            });
                            delete i[x];
                            delete h[x]
                        }
                        b("requestAnimationFrameAcrossTransitions")(e);
                        b("setTimeoutAcrossTransitions")(e, 0)
                    })
                }
                i[x].event_handlers_runtime_ms += f - w;
                h[x].event_end_ms = f;
                p != null && p.afterEachHandler(x, i[x]);
                b("CurrentEventMeta").__setCurrentEventID(null);
                n && n.informPointWithOverride("tti_ts", {
                    isPointOfInterest: !0
                });
                return A
            }
        },
        tagCurrentActiveInteractionsAs: function(a) {
            r.getActiveInteractions().forEach(function(b) {
                b.tagAsInteractionID(a)
            }), b("EventProfilerEagerExecution").getActiveExecutions().forEach(function(b) {
                return b.tagAsInteractionID(a)
            })
        },
        informManualInteractionTimestamp: function(a, b, c) {},
        markManualStart: function(a, c, d) {
            return b("EventProfilerInteractionTracker").markManualStart(a, c, d)
        },
        getActiveInteractions: function() {
            return b("TimeSliceAutoclosedInteraction").getInteractionsActiveRightNow().filter(function(a) {
                return a instanceof b("BrowserEventBasedInteraction") && a.isEnabled()
            })
        },
        informPointOnActiveInteractions: function(a, b, c) {
            r.getActiveInteractions().map(function(d) {
                d = d.inform(a, b);
                c && d.addStringAnnotation("is_goal_point", "1")
            })
        },
        notifyRunningEagerInteraction: function(a, c) {
            var d = v({
                type: c
            }, a);
            return b("EventProfilerEagerExecution").declareEagerExecution(a, c, d.interaction)
        },
        setCurrentAdAccountId: function(a) {
            o = a
        },
        setAdsConfig: function(a) {
            p = a
        }
    };

    function s(a, c, d) {
        c = i[a];
        c.event_handlers_runtime_ms = Math.round(c.event_handlers_runtime_ms);
        var e = Object.assign({}, i[a], h[a]);
        p != null && p.beforeLog(a, e);
        e.weight && b("Bootloader").loadModules(["WebSpeedInteractionsTypedLogger", "PerfXSharedFields"], function(a, b) {
            b.addCommonValues(e), new a().updateData(e).log()
        }, "EventProfilerImpl");
        b("CurrentEventMeta").__informEventDataReady(a, i[a])
    }
    var t = function() {
        function b(a) {
            return null
        }
        if (!a.performance || !a.performance.now || !a.performance.timing || !a.performance.timing.navigationStart) return b;
        var c = a.performance.timing.navigationStart,
            d = a.CustomEvent && (typeof a.CustomEvent === "function" || a.CustomEvent.toString().indexOf("CustomEventConstructor") > -1);
        d = d ? new a.CustomEvent("test").timeStamp : a.document.createEvent("KeyboardEvent").timeStamp;
        return d && d <= a.performance.now() ? function(a) {
            return a.timeStamp + c
        } : b
    }();

    function u(a, c) {
        var d = [];
        while (a && a instanceof HTMLElement) {
            var e = a.getAttribute(c);
            e && d.push(e);
            a = b("Parent").byAttribute(a.parentNode, c)
        }
        return d.reverse()
    }

    function v(a, c) {
        return p != null ? p.getEventSampleWeights(a, c) : b("EventProfilerSampler").getEventSampleWeights(a, c)
    }
    e.exports = r
}), null);
__d("getActiveElement", [], (function(a, b, c, d, e, f) {
    function a(a) {
        a === void 0 && (a = document);
        if (typeof a === "undefined") return null;
        try {
            return a.activeElement || a.body
        } catch (b) {
            return a.body
        }
    }
    e.exports = a
}), null);
__d("FocusListener", ["Arbiter", "CSS", "Parent", "getActiveElement"], (function(a, b, c, d, e, f) {
    var g = {
        expandInput: function(a) {
            b("CSS").addClass(a, "child_is_active"), b("CSS").addClass(a, "child_is_focused"), b("CSS").addClass(a, "child_was_focused"), b("Arbiter").inform("reflow")
        }
    };

    function h(a, c) {
        if (c.getAttribute("data-silentfocuslistener")) return;
        var d = b("Parent").byClass(c, "focus_target");
        d && ("focus" == a || "focusin" == a ? g.expandInput(d) : (c.value === "" && b("CSS").removeClass(d, "child_is_active"), b("CSS").removeClass(d, "child_is_focused")))
    }
    c = b("getActiveElement")();
    c && h("focus", c);

    function a(a) {
        a = a || window.event, h(a.type, a.target || a.srcElement)
    }
    d = document.documentElement;
    d.addEventListener ? (d.addEventListener("focus", a, !0), d.addEventListener("blur", a, !0)) : (d.attachEvent("onfocusin", a), d.attachEvent("onfocusout", a));
    e.exports = g
}), null);
__d("getMarkupWrap", ["invariant", "ExecutionEnvironment"], (function(a, b, c, d, e, f, g) {
    var h = b("ExecutionEnvironment").canUseDOM ? document.createElement("div") : null,
        i = {};
    c = [1, '<select multiple="true">', "</select>"];
    d = [1, "<table>", "</table>"];
    f = [3, "<table><tbody><tr>", "</tr></tbody></table>"];
    var j = [1, '<svg xmlns="http://www.w3.org/2000/svg">', "</svg>"],
        k = {
            "*": [1, "?<div>", "</div>"],
            area: [1, "<map>", "</map>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            param: [1, "<object>", "</object>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            optgroup: c,
            option: c,
            caption: d,
            colgroup: d,
            tbody: d,
            tfoot: d,
            thead: d,
            td: f,
            th: f
        };
    b = ["circle", "clipPath", "defs", "ellipse", "g", "image", "line", "linearGradient", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "text", "tspan"];
    b.forEach(function(a) {
        k[a] = j, i[a] = !0
    });

    function a(a) {
        a = a;
        !h && g(0, 144);
        Object.prototype.hasOwnProperty.call(k, a) || (a = "*");
        Object.prototype.hasOwnProperty.call(i, a) || (a === "*" ? h.innerHTML = "<link />" : h.innerHTML = "<" + a + "></" + a + ">", i[a] = !h.firstChild);
        return i[a] ? k[a] : null
    }
    e.exports = a
}), null);
__d("createNodesFromMarkup", ["invariant", "ExecutionEnvironment", "getMarkupWrap"], (function(a, b, c, d, e, f, g) {
    var h = b("ExecutionEnvironment").canUseDOM ? document.createElement("div") : null,
        i = /^\s*<(\w+)/;

    function j(a) {
        a = a.match(i);
        return a && a[1].toLowerCase()
    }

    function a(a, c) {
        var d = h;
        !h && g(0, 5001);
        var e = j(a);
        e = e && b("getMarkupWrap")(e);
        if (e) {
            d.innerHTML = e[1] + a + e[2];
            e = e[0];
            while (e--) d = d.lastChild
        } else d.innerHTML = a;
        e = d.getElementsByTagName("script");
        e.length && (c || g(0, 5002), Array.from(e).forEach(c));
        a = Array.from(d.childNodes);
        while (d.lastChild) d.removeChild(d.lastChild);
        return a
    }
    e.exports = a
}), null);
__d("evalGlobal", [], (function(a, b, c, d, e, f) {
    function a(a) {
        if (typeof a !== "string") throw new TypeError("JS sent to evalGlobal is not a string. Only strings are permitted.");
        if (!a) return;
        var b = document.createElement("script");
        try {
            b.appendChild(document.createTextNode(a))
        } catch (c) {
            b.text = a
        }
        a = document.getElementsByTagName("head")[0] || document.documentElement;
        a.appendChild(b);
        a.removeChild(b)
    }
    e.exports = a
}), null);
__d("HTML", ["invariant", "Bootloader", "createNodesFromMarkup", "emptyFunction", "evalGlobal"], (function(a, b, c, d, e, f, g) {
    var h = /(<(\w+)[^>]*?)\/>/g,
        i = {
            abbr: !0,
            area: !0,
            br: !0,
            col: !0,
            embed: !0,
            hr: !0,
            img: !0,
            input: !0,
            link: !0,
            meta: !0,
            param: !0
        };
    a = function() {
        "use strict";

        function a(c) {
            c && typeof c.__html === "string" && (c = c.__html);
            if (!(this instanceof a)) return c instanceof a ? c : new a(c);
            if (c) {
                var d = typeof c;
                d === "string" || g(0, 277, d)
            }
            this._markup = c || "";
            this._defer = !1;
            this._nodes = null;
            this._inlineJS = b("emptyFunction");
            this._rootNode = null
        }
        var c = a.prototype;
        c.toString = function() {
            return this._markup
        };
        c.getContent = function() {
            return this._markup
        };
        c.getNodes = function() {
            this._fillCache();
            return this._nodes
        };
        c.getRootNode = function() {
            this._rootNode && g(0, 278);
            var a = this.getNodes();
            if (a.length === 1) this._rootNode = a[0];
            else {
                var b = document.createDocumentFragment();
                for (var c = 0; c < a.length; c++) b.appendChild(a[c]);
                this._rootNode = b
            }
            return this._rootNode
        };
        c.getAction = function() {
            var a = this;
            this._fillCache();
            var b = function() {
                a._inlineJS()
            };
            return this._defer ? function() {
                setTimeout(b, 0)
            } : b
        };
        c._fillCache = function() {
            if (this._nodes !== null) return;
            if (!this._markup) {
                this._nodes = [];
                return
            }
            var a = this._markup.replace(h, function(a, b, c) {
                    return i[c.toLowerCase()] ? a : b + "></" + c + ">"
                }),
                c = null;
            a = b("createNodesFromMarkup")(a, function(a) {
                c = c || [], c.push(a.src ? b("Bootloader").requestJSResource_UNSAFE_NEEDS_REVIEW_BY_SECURITY_AND_XFN.bind(b("Bootloader"), a.src) : b("evalGlobal").bind(null, a.innerHTML)), a.parentNode.removeChild(a)
            });
            c && (this._inlineJS = function() {
                for (var a = 0; a < c.length; a++) c[a]()
            });
            this._nodes = a
        };
        c.setDeferred = function(a) {
            this._defer = !!a;
            return this
        };
        a.isHTML = function(b) {
            return !!b && (b instanceof a || b.__html !== void 0)
        };
        a.replaceJSONWrapper = function(b) {
            return b && b.__html !== void 0 ? new a(b.__html) : b
        };
        return a
    }();
    e.exports = a
}), null);
__d("HardwareCSS", [], (function(a, b, c, d, e, f) {
    function g() {
        if (window != null && window.document && document.body) {
            var a = document.body,
                b = a.getAttribute("class") || "";
            window.navigator && window.navigator.hardwareConcurrency && window.navigator.hardwareConcurrency >= 4 ? a.setAttribute("class", b + " cores-gte4") : a.setAttribute("class", b + " cores-lt4")
        }
    }
    var h = {
        init: function() {
            g(), h.init = function() {}
        }
    };
    e.exports = h
}), null);
__d("InitialJSLoader", ["Arbiter", "Bootloader", "PageEvents", "Run", "ServerJS", "TimeSlice"], (function(a, b, c, d, e, f) {
    var g = {
        INITIAL_JS_READY: "BOOTLOAD/JSREADY",
        loadOnDOMContentReady: function(a, c) {
            b("Arbiter").subscribe(b("PageEvents").BIGPIPE_DOMREADY, function() {
                function d() {
                    b("Bootloader").loadResources(a, function() {
                        b("Arbiter").inform(g.INITIAL_JS_READY, !0, "state")
                    })
                }
                c ? setTimeout(d, c) : d()
            })
        },
        handleServerJS: function(a) {
            var c = new(b("ServerJS"))();
            c.handle(a);
            b("Run").onAfterLoad(c.cleanup.bind(c, b("TimeSlice")))
        }
    };
    e.exports = g
}), null);
__d("MutationCountingExecutionObserver", ["EventConfig", "ExecutionContextObservers", "PageDOMMutationObserver", "ProfilingCounters", "TimeSlice", "ifRequired"], (function(a, b, c, d, e, f) {
    "use strict";
    var g, h, i = [],
        j = !1;

    function k() {
        var a = (g || (g = b("PageDOMMutationObserver"))).consumePendingDOMMutations();
        if (a) {
            b("ProfilingCounters").incrementCounter("DOM_MUTATION", a);
            a = b("ifRequired")("TimeSliceAutoclosedInteraction", function(a) {
                return a
            });
            if (a) {
                a = a.getInteractionsActiveRightNow();
                a.length && a.forEach(function(a) {
                    a.informPointWithOverride("display_done_ts_executed_from_client", {
                        isPointOfInterest: !0
                    });
                    if (!a.__mceoSeenThisRootGuardFrame) {
                        a.__mceoSeenThisRootGuardFrame = !0;
                        a.countUp();
                        i.push(a);
                        j || (j = !0, n.executeOnRootGuardEnded(function() {
                            l(), j = !1
                        }));
                        var c = b("ifRequired")("Visibility", function(a) {
                            return a
                        });
                        c && (c.isHidden() ? a.trace().addStringAnnotation("hidden_during_dd", "1") : a.trace().addStringAnnotation("hidden_during_dd", "0"))
                    }
                })
            }
        }
    }

    function l() {
        if (i.length === 0) return;
        i.forEach(function(a) {
            a.informPointWithOverride("display_done", {
                isPointOfInterest: !0
            }).addStringAnnotation("visual_role", "global_signpost"), a.__mceoSeenThisRootGuardFrame = !1
        });
        if (b("EventConfig").disable_heuristic) {
            i.forEach(function(a) {
                return a.countDown()
            });
            i = [];
            return
        }
        var a = i,
            c = b("ifRequired")("requestAnimationFrameAcrossTransitions", function(a) {
                return a
            }),
            d = b("ifRequired")("setTimeoutAcrossTransitions", function(a) {
                return a
            });
        if (!c || !d) return;
        c(function() {
            a.forEach(function(a) {
                a.informPointWithOverride("display_done_ts_raf", {
                    isPointOfInterest: !0
                })
            }), d(function() {
                a.forEach(function(a) {
                    a.informPointWithOverride("display_done_ts_st", {
                        isPointOfInterest: !0
                    }), a.countDown()
                })
            })
        });
        i = []
    }
    var m = [];
    a = function() {
        function a() {}
        var c = a.prototype;
        c.executeOnRootGuardEnded = function(a) {
            m.push(a)
        };
        c.onNewContextCreated = function(a, b, c) {
            return null
        };
        c.onContextCanceled = function(a, b) {};
        c.onBeforeContextStarted = function(a, c, d) {
            (g || (g = b("PageDOMMutationObserver"))).tryStart();
            k();
            return null
        };
        c.onAfterContextStarted = function(a, b, c, d) {
            return null
        };
        c.onAfterContextEnded = function(a, b, c, d) {
            k();
            if (a && a.isRoot)
                while (m.length) m.pop()()
        };
        c.getBeforeID = function() {
            return (h || (h = b("ExecutionContextObservers"))).beforeIDs.MUTATION_COUNTING
        };
        c.getAfterID = function() {
            return (h || (h = b("ExecutionContextObservers"))).afterIDs.MUTATION_COUNTING
        };
        return a
    }();
    var n = new a();
    b("TimeSlice").registerExecutionContextObserver(n);
    e.exports = n
}), 3);
__d("DOMEvent", ["invariant"], (function(a, b, c, d, e, f, g) {
    a = function() {
        "use strict";

        function a(a) {
            this.event = a || window.event, typeof this.event.srcElement !== "unknown" || g(0, 5798), this.target = this.event.target || this.event.srcElement
        }
        var b = a.prototype;
        b.preventDefault = function() {
            var a = this.event;
            a.preventDefault ? (a.preventDefault(), "defaultPrevented" in a || (a.defaultPrevented = !0)) : a.returnValue = !1;
            return this
        };
        b.isDefaultPrevented = function() {
            var a = this.event;
            return "defaultPrevented" in a ? a.defaultPrevented : a.returnValue === !1
        };
        b.stopPropagation = function() {
            var a = this.event;
            a.stopPropagation ? a.stopPropagation() : a.cancelBubble = !0;
            return this
        };
        b.kill = function() {
            this.stopPropagation().preventDefault();
            return this
        };
        a.killThenCall = function(b) {
            return function(c) {
                new a(c).kill();
                return b()
            }
        };
        return a
    }();
    e.exports = a
}), null);
__d("dedupString", [], (function(a, b, c, d, e, f) {
    "use strict";

    function a(a) {
        var b;
        return Object.keys((b = {}, b[a] = 0, b))[0]
    }
    e.exports = a
}), null);
__d("wrapFunction", [], (function(a, b, c, d, e, f) {
    var g = {};
    a = function(a, b, c) {
        var d = b in g ? g[b](a, c) : a;
        return function() {
            for (var a = arguments.length, b = new Array(a), c = 0; c < a; c++) b[c] = arguments[c];
            return d.apply(this, b)
        }
    };
    a.setWrapper = function(a, b) {
        g[b] = a
    };
    e.exports = a
}), null);
__d("DOMEventListener", ["invariant", "dedupString", "emptyFunction", "wrapFunction"], (function(a, b, c, d, e, f, g) {
    var h = !1;
    try {
        a = Object.defineProperty({}, "passive", {
            get: function() {
                h = !0
            }
        });
        window.addEventListener("test", null, a)
    } catch (a) {}
    var i, j;
    window.addEventListener ? (i = function(a, c, d, e) {
        e === void 0 && (e = !1), d.wrapper = b("wrapFunction")(d, "entry", b("dedupString")("DOMEventListener.add " + c)), a.addEventListener(c, d.wrapper, h ? e : !1)
    }, j = function(a, b, c, d) {
        d === void 0 && (d = !1), a.removeEventListener(b, c.wrapper, h ? d : !1)
    }) : window.attachEvent ? (i = function(a, c, d, e) {
        e === void 0, d.wrapper = b("wrapFunction")(d, "entry", "DOMEventListener.add " + c), a.attachEvent || g(0, 2798), a.attachEvent("on" + c, d.wrapper)
    }, j = function(a, b, c, d) {
        d === void 0, a.detachEvent || g(0, 2799), a.detachEvent("on" + b, c.wrapper)
    }) : j = i = b("emptyFunction");
    c = {
        add: function(a, b, c, d) {
            d === void 0 && (d = !1);
            i(a, b, c, d);
            return {
                remove: function() {
                    j(a, b, c, d)
                }
            }
        },
        remove: j
    };
    e.exports = c
}), null);
__d("isNode", [], (function(a, b, c, d, e, f) {
    function a(a) {
        var b;
        b = a != null ? (b = a.ownerDocument) != null ? b : a : document;
        b = (b = b.defaultView) != null ? b : window;
        return !!(a != null && (typeof b.Node === "function" ? a instanceof b.Node : typeof a === "object" && typeof a.nodeType === "number" && typeof a.nodeName === "string"))
    }
    e.exports = a
}), null);
__d("isTextNode", ["isNode"], (function(a, b, c, d, e, f) {
    function a(a) {
        return b("isNode")(a) && a.nodeType == 3
    }
    e.exports = a
}), null);
__d("containsNode", ["isTextNode"], (function(a, b, c, d, e, f) {
    function g(a, c) {
        if (!a || !c) return !1;
        else if (a === c) return !0;
        else if (b("isTextNode")(a)) return !1;
        else if (b("isTextNode")(c)) return g(a, c.parentNode);
        else if ("contains" in a) return a.contains(c);
        else if (a.compareDocumentPosition) return !!(a.compareDocumentPosition(c) & 16);
        else return !1
    }
    e.exports = g
}), null);
__d("createArrayFromMixed", ["invariant"], (function(a, b, c, d, e, f, g) {
    function h(a) {
        var b = a.length;
        !Array.isArray(a) && (typeof a === "object" || typeof a === "function") || g(0, 3914);
        typeof b === "number" || g(0, 3915);
        b === 0 || b - 1 in a || g(0, 3916);
        typeof a.callee !== "function" || g(0, 3917);
        if (a.hasOwnProperty) try {
            return Array.prototype.slice.call(a)
        } catch (a) {}
        var c = Array(b);
        for (var d = 0; d < b; d++) c[d] = a[d];
        return c
    }

    function i(a) {
        return !!a && (typeof a === "object" || typeof a === "function") && "length" in a && !("setInterval" in a) && typeof a.nodeType !== "number" && (Array.isArray(a) || "callee" in a || "item" in a)
    }

    function a(a) {
        if (!i(a)) return [a];
        else if (Array.isArray(a)) return a.slice();
        else return h(a)
    }
    e.exports = a
}), null);
__d("isElementNode", ["isNode"], (function(a, b, c, d, e, f) {
    function a(a) {
        return b("isNode")(a) && a.nodeType == 1
    }
    e.exports = a
}), null);
__d("DOMQuery", ["CSS", "FBLogger", "containsNode", "createArrayFromMixed", "createObjectFrom", "ge", "ifRequired", "isElementNode", "isNode"], (function(a, b, c, d, e, f) {
    var g = /^\.-?[_a-zA-Z]+[\w-]*$/;

    function h(a, b) {
        return a.hasAttribute ? a.hasAttribute(b) : a.getAttribute(b) !== null
    }
    var i = {
        find: function(a, b) {
            a = i.scry(a, b);
            return a[0]
        },
        findPushSafe: function(a, b, c) {
            b = i.scry(a, b);
            a = i.scry(a, c);
            b.length === 1 && a.length === 1 && b[0] === a[0] ? c = b : c = b.concat(a);
            return c[0]
        },
        scry: function(a, c) {
            if (!a || !a.getElementsByTagName) return [];
            c = c.split(" ");
            var d = [a];
            for (var e = 0; e < c.length; e++) {
                if (d.length === 0) break;
                if (c[e] === "") continue;
                var f = c[e],
                    i = c[e],
                    j = [],
                    k = !1;
                if (f.charAt(0) == "^")
                    if (e === 0) k = !0, f = f.slice(1);
                    else return [];
                f = f.replace(/\[(?:[^=\]]*=(?:\"[^\"]*\"|\'[^\']*\'))?|[.#]/g, " $&");
                f = f.split(" ");
                var l = f[0] || "*",
                    m = l == "*",
                    n = f[1] && f[1].charAt(0) == "#";
                if (n) {
                    n = b("ge")(f[1].slice(1), a, l);
                    if (n && (m || n.tagName.toLowerCase() == l))
                        for (var o = 0; o < d.length; o++)
                            if (k && b("containsNode")(n, d[o])) {
                                j = [n];
                                break
                            } else if (document == d[o] || b("containsNode")(d[o], n) && d[o] !== n) {
                        j = [n];
                        break
                    }
                } else {
                    n = [];
                    o = d.length;
                    var p, q = !k && i.indexOf("[") < 0 && document.querySelectorAll;
                    for (var r = 0; r < o; r++) {
                        if (k) {
                            p = [];
                            var s = d[r].parentNode;
                            while (b("isElementNode")(s))(m || s.tagName.toLowerCase() == l) && p.push(s), s = s.parentNode
                        } else q ? g.test(i) ? p = d[r].getElementsByClassName(i.substring(1)) : p = d[r].querySelectorAll(i) : p = d[r].getElementsByTagName(l);
                        s = p.length;
                        for (var t = 0; t < s; t++) n.push(p[t])
                    }
                    if (!q)
                        for (var p = 1; p < f.length; p++) {
                            s = f[p];
                            t = s.charAt(0) == ".";
                            m = s.substring(1);
                            for (r = 0; r < n.length; r++) {
                                o = n[r];
                                if (!o || o.nodeType !== 1) continue;
                                if (t) {
                                    b("CSS").hasClass(o, m) || delete n[r];
                                    continue
                                } else {
                                    i = s.slice(1, s.length - 1);
                                    l = i.indexOf("=");
                                    if (l < 0) {
                                        if (!h(o, i)) {
                                            delete n[r];
                                            continue
                                        }
                                    } else {
                                        q = i.substr(0, l);
                                        i = i.substr(l + 1);
                                        i = i.slice(1, i.length - 1);
                                        if (o.getAttribute(q) != i) {
                                            delete n[r];
                                            continue
                                        }
                                    }
                                }
                            }
                        }
                    for (r = 0; r < n.length; r++)
                        if (n[r]) {
                            j.push(n[r]);
                            if (k) break
                        }
                }
                d = j
            }
            return d
        },
        getSelection: function() {
            var a = window.getSelection;
            if (a) return a() + "";
            else {
                a = document.selection;
                if (a) return a.createRange().text
            }
            return null
        },
        contains: function(a, c) {
            (typeof a === "string" || typeof c === "string") && b("FBLogger")("dom_query").info("Support for node IDs is deprecated. Use containsNode(ge(<id1>), ge(<id2>)) instead");
            return b("containsNode")(b("ge")(a), b("ge")(c))
        },
        getRootElement: function() {
            var a = b("ifRequired")("Quickling", function(a) {
                return a.isActive() ? b("ge")("content") : null
            });
            return a || document.body
        },
        isNodeOfType: function(a, c) {
            c = b("createArrayFromMixed")(c).join("|").toUpperCase().split("|");
            c = b("createObjectFrom")(c);
            return b("isNode")(a) && a.nodeName in c
        },
        isInputNode: function(a) {
            return i.isNodeOfType(a, ["input", "textarea"]) || a.contentEditable === "true"
        }
    };
    e.exports = i
}), null);
__d("EventProfiler", ["requireCond", "cr:708886"], (function(a, b, c, d, e, f) {
    e.exports = b("cr:708886")
}), null);
__d("Scroll", [], (function(a, b, c, d, e, f) {
    function g(a, b) {
        return !!b && (a === b.documentElement || a === b.body)
    }
    a = {
        getTop: function(a) {
            var b;
            if (a == null) return 0;
            var c = a.ownerDocument;
            return g(a, c) ? (c == null ? void 0 : (b = c.body) == null ? void 0 : b.scrollTop) || (c == null ? void 0 : (b = c.documentElement) == null ? void 0 : b.scrollTop) || 0 : a.scrollTop || 0
        },
        setTop: function(a, b) {
            if (a == null) return;
            var c = a.ownerDocument;
            g(a, c) ? ((c == null ? void 0 : c.body) && (c.body.scrollTop = b || 0), (c == null ? void 0 : c.documentElement) && (c.documentElement.scrollTop = b || 0)) : a.scrollTop = b || 0
        },
        getLeft: function(a) {
            var b, c = a.ownerDocument;
            return g(a, c) ? (c == null ? void 0 : (b = c.body) == null ? void 0 : b.scrollLeft) || (c == null ? void 0 : (b = c.documentElement) == null ? void 0 : b.scrollLeft) || 0 : a.scrollLeft || 0
        },
        setLeft: function(a, b) {
            var c = a.ownerDocument;
            g(a, c) ? ((c == null ? void 0 : c.body) && (c.body.scrollLeft = b || 0), (c == null ? void 0 : c.documentElement) && (c.documentElement.scrollLeft = b || 0)) : a.scrollLeft = b || 0
        }
    };
    e.exports = a
}), null);
__d("clickRefAction", ["Arbiter"], (function(a, b, c, d, e, f) {
    function g(b, a, c, d, e) {
        var f = b + "/" + a;
        this.ue = f;
        this.ue_ts = b;
        this.ue_count = a;
        this.context = c;
        this.ns = null;
        this.node = d;
        this.type = e
    }
    g.prototype.set_namespace = function(a) {
        this.ns = a;
        return this
    };
    g.prototype.coalesce_namespace = function(a) {
        this.ns === null && (this.ns = a);
        return this
    };
    g.prototype.add_event = function() {
        return this
    };
    var h = 0,
        i = [],
        j = Date.now() + 6e4;

    function c(a, c, d, e, f) {
        var k = Date.now(),
            l = d && d.type;
        f = f || {};
        !c && d && (c = d.getTarget());
        var m = 50;
        if (c && e != "FORCE")
            for (var n = i.length - 1; n >= 0 && k - i[n].ue_ts < m; --n)
                if (i[n].node == c && i[n].type == l) return i[n];
        n = new g(k, h, a, c, l);
        i.push(n);
        while (i[0].ue_ts + m < k || i.length > 10) i.shift();
        l = k < j ? "persistent" : "event";
        a == "contextmenu" ? b("Arbiter").inform("ClickRefAction/contextmenu", {
            cfa: n,
            node: c,
            mode: e,
            event: d,
            extra_data: f
        }, l) : a == "middleclick" ? b("Arbiter").inform("ClickRefAction/middleclick", {
            cfa: n,
            node: c,
            mode: e,
            event: d,
            extra_data: f
        }, l) : b("Arbiter").inform("ClickRefAction/new", {
            cfa: n,
            node: c,
            mode: e,
            event: d,
            extra_data: f
        }, l);
        h++;
        return n
    }
    e.exports = a.clickRefAction = c
}), null);
__d("FlowMigrationUtilsForLegacyFiles", ["FBLogger"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = "flow_typing_for_legacy_code";

    function a(a) {
        b("FBLogger")(g).blameToPreviousFile().event(g + ".bad_call").mustfix(a);
        return new Error("[" + g + "] " + a)
    }

    function c(a) {
        return a === !1 || a == null || a === 0 || a === "" || Number.isNaN(a)
    }
    e.exports = {
        invariantViolation: a,
        isFalsy: c
    }
}), null);
__d("getDocumentScrollElement", ["FlowMigrationUtilsForLegacyFiles"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("FlowMigrationUtilsForLegacyFiles").invariantViolation,
        h = typeof navigator !== "undefined" && navigator.userAgent.indexOf("AppleWebKit") > -1;

    function a(a) {
        a = a || document;
        if (a.scrollingElement) return a.scrollingElement;
        a = !h && a.compatMode === "CSS1Compat" ? a.documentElement : a.body;
        a || g("null result in getDocumentScrollElement");
        return a
    }
    e.exports = a
}), null);
__d("getObjectValues", [], (function(a, b, c, d, e, f) {
    function a(a) {
        var b = [];
        for (var c in a) b.push(a[c]);
        return b
    }
    e.exports = a
}), null);
__d("Event", ["Arbiter", "DataStore", "DOMEvent", "DOMEventListener", "DOMQuery", "ErrorGuard", "EventProfiler", "ExecutionEnvironment", "FBLogger", "Parent", "Scroll", "TAAL", "TimeSlice", "UserAgent", "$", "clickRefAction", "dedupString", "getDocumentScrollElement", "getObjectValues"], (function(a, b, c, d, e, f) {
    var g, h = a.Event,
        i = "Event.listeners";
    h.prototype || (h.prototype = {});

    function j(a) {
        (a.type === "click" || a.type === "mouseover" || a.type === "keydown") && b("Arbiter").inform("Event/stop", {
            event: a
        })
    }
    var k = function() {
        "use strict";

        function a(a, b, c) {
            this.cancelBubble = !1, this.target = a, this.type = b, this.data = c
        }
        var c = a.prototype;
        c.getData = function() {
            this.data = this.data || {};
            return this.data
        };
        c.stop = function() {
            return h.stop(this)
        };
        c.prevent = function() {
            return h.prevent(this)
        };
        c.isDefaultPrevented = function() {
            return h.isDefaultPrevented(this)
        };
        c.kill = function() {
            return h.kill(this)
        };
        c.getTarget = function() {
            return new(b("DOMEvent"))(this).target || null
        };
        return a
    }();

    function l(a) {
        if (a instanceof k) return a;
        a || (!window.addEventListener && document.createEventObject ? a = window.event ? document.createEventObject(window.event) : {} : a = {});
        if (!a._inherits_from_prototype)
            for (var b in h.prototype) try {
                a[b] = h.prototype[b]
            } catch (a) {}
        return a
    }
    Object.assign(h.prototype, {
        _inherits_from_prototype: !0,
        getRelatedTarget: function() {
            var a = this.relatedTarget || (this.fromElement === this.srcElement ? this.toElement : this.fromElement);
            return a && a.nodeType ? a : null
        },
        getModifiers: function() {
            var a = {
                control: !!this.ctrlKey,
                shift: !!this.shiftKey,
                alt: !!this.altKey,
                meta: !!this.metaKey
            };
            a.access = b("UserAgent").isPlatform("Mac OS X") ? a.control : a.alt;
            a.any = a.control || a.shift || a.alt || a.meta;
            return a
        },
        isRightClick: function() {
            return this.which ? this.which === 3 : this.button && this.button === 2
        },
        isMiddleClick: function() {
            return this.which ? this.which === 2 : this.button && this.button === 4
        },
        isDefaultRequested: function() {
            return this.getModifiers().any || this.isMiddleClick() || this.isRightClick()
        }
    }, k.prototype);
    Object.assign(h, {
        listen: function(a, c, d, e, f) {
            typeof d === "function" && (d = b("TimeSlice").guard(d, b("dedupString")("Event.js " + c + " handler")));
            !f || typeof f === "boolean" ? f = {
                passive: !1
            } : f = {
                passive: f.passive || !1
            };
            if (!b("ExecutionEnvironment").canUseDOM) return new t(a, d, null, c, e, null, f);
            typeof a === "string" && (a = b("$")(a));
            typeof e === "undefined" && (e = h.Priority.NORMAL);
            if (typeof c === "object") {
                var g = {};
                for (var j in c) g[j] = h.listen(a, j, c[j], e, f);
                return g
            }
            if (c.match(/^on/i)) throw new TypeError("Bad event name `" + c + "': use `click', not `onclick'.");
            if (!a) {
                g = new Error(b("TAAL").blameToPreviousFrame("Cannot listen to an undefined element."));
                b("FBLogger")("event").catching(g).mustfix("Tried to listen to element of type %s", c);
                throw g
            }
            if (a.nodeName == "LABEL" && c == "click") {
                g = a.getElementsByTagName("input");
                a = g.length == 1 ? g[0] : a
            } else if (a === window && c === "scroll") {
                g = b("getDocumentScrollElement")();
                g !== document.documentElement && g !== document.body && (a = g)
            }
            g = b("DataStore").get(a, i, {});
            var k = n[c];
            k && (c = k.base, k.wrap && (d = k.wrap(d)));
            p(a, g, c, f);
            k = g[c];
            e in k || (k[e] = []);
            var l = k[e].length;
            d = new t(a, d, g, c, e, l, f);
            k[e][l] = d;
            k.numHandlers++;
            f.passive || (k.numNonPassiveHandlers++, o(a, g[c], c));
            return d
        },
        stop: function(a) {
            var c = new(b("DOMEvent"))(a).stopPropagation();
            j(c.event);
            return a
        },
        prevent: function(a) {
            new(b("DOMEvent"))(a).preventDefault();
            return a
        },
        isDefaultPrevented: function(a) {
            return new(b("DOMEvent"))(a).isDefaultPrevented(a)
        },
        kill: function(a) {
            a = new(b("DOMEvent"))(a).kill();
            j(a.event);
            return !1
        },
        getKeyCode: function(a) {
            a = new(b("DOMEvent"))(a).event;
            if (!a) return !1;
            switch (a.keyCode) {
                case 63232:
                    return 38;
                case 63233:
                    return 40;
                case 63234:
                    return 37;
                case 63235:
                    return 39;
                case 63272:
                case 63273:
                case 63275:
                    return null;
                case 63276:
                    return 33;
                case 63277:
                    return 34
            }
            if (a.shiftKey) switch (a.keyCode) {
                case 33:
                case 34:
                case 37:
                case 38:
                case 39:
                case 40:
                    return null
            }
            return a.keyCode
        },
        getPriorities: function() {
            if (!m) {
                var a = b("getObjectValues")(h.Priority);
                a.sort(function(a, b) {
                    return a - b
                });
                m = a
            }
            return m
        },
        fire: function(a, b, c) {
            c = new k(a, b, c);
            var d;
            do {
                var e = h.__getHandler(a, b);
                e && (d = e(c));
                a = a.parentNode
            } while (a && d !== !1 && !c.cancelBubble);
            return d !== !1
        },
        __fire: function(a, b, c) {
            a = h.__getHandler(a, b);
            if (a) return a(l(c))
        },
        __getHandler: function(a, c) {
            var d = b("DataStore").get(a, i);
            return d && d[c] ? d[c].domHandler : a["on" + c]
        },
        getPosition: function(a) {
            a = new(b("DOMEvent"))(a).event;
            var c = b("getDocumentScrollElement")(),
                d = a.clientX + b("Scroll").getLeft(c);
            a = a.clientY + b("Scroll").getTop(c);
            return {
                x: d,
                y: a
            }
        }
    });
    var m = null;
    c = function(a) {
        return function(c) {
            if (!b("DOMQuery").contains(this, c.getRelatedTarget())) return a.call(this, c)
        }
    };
    var n;
    !window.navigator.msPointerEnabled ? n = {
        mouseenter: {
            base: "mouseover",
            wrap: c
        },
        mouseleave: {
            base: "mouseout",
            wrap: c
        }
    } : n = {
        mousedown: {
            base: "MSPointerDown"
        },
        mousemove: {
            base: "MSPointerMove"
        },
        mouseup: {
            base: "MSPointerUp"
        },
        mouseover: {
            base: "MSPointerOver"
        },
        mouseout: {
            base: "MSPointerOut"
        },
        mouseenter: {
            base: "MSPointerOver",
            wrap: c
        },
        mouseleave: {
            base: "MSPointerOut",
            wrap: c
        }
    };
    if (b("UserAgent").isBrowser("Firefox < 52")) {
        d = function(a, b) {
            b = l(b);
            var c = b.getTarget();
            while (c) h.__fire(c, a, b), c = c.parentNode
        };
        document.documentElement.addEventListener("focus", d.bind(null, "focusin"), !0);
        document.documentElement.addEventListener("blur", d.bind(null, "focusout"), !0)
    }
    var o = function(a, c, d) {
            var e = c.numNonPassiveHandlers == 0;
            e != c.options.passive && (c.domHandlerRemover.remove(), c.options.passive = e, c.domHandlerRemover = b("DOMEventListener").add(a, d, c.domHandler, {
                passive: e
            }))
        },
        p = function(a, c, d, e) {
            if (d in c) return;
            var f = b("TimeSlice").guard(s.bind(a, d), b("dedupString")("Event listenHandler " + d));
            c[d] = {
                numHandlers: 0,
                numNonPassiveHandlers: 0,
                domHandlerRemover: b("DOMEventListener").add(a, d, f, e),
                domHandler: f,
                options: e
            };
            c = "on" + d;
            if (a[c]) {
                f = a === document.documentElement ? h.Priority._BUBBLE : h.Priority.TRADITIONAL;
                var g = a[c];
                a[c] = null;
                h.listen(a, d, g, f, e)
            }
        };

    function q(a) {
        return !a.href.endsWith("#") ? !1 : a.href === document.location.href || a.href === document.location.href + "#"
    }

    function r(a, b) {
        return a.nodeName === "INPUT" && a.type === b
    }
    var s = b("EventProfiler").__wrapEventListenHandler(function(a, c) {
        c = l(c);
        if (!b("DataStore").get(this, i)) throw new Error("Bad listenHandler context.");
        var d = b("DataStore").get(this, i)[a];
        if (!d) throw new Error("No registered handlers for `" + a + "'.");
        if (a == "click" || a == "contextmenu" || a == "mousedown" && c.which == 2) {
            var e = c.getTarget(),
                f = b("Parent").byTag(e, "a");
            f instanceof HTMLAnchorElement && f.href && q(f) && !r(e, "file") && !r(e, "submit") && c.prevent();
            a == "click" && b("clickRefAction")("click", f, c);
            a == "contextmenu" && b("clickRefAction")("contextmenu", f, c);
            a == "mousedown" && c.which == 2 && b("clickRefAction")("middleclick", f, c)
        }
        e = h.getPriorities();
        for (var a = 0; a < e.length; a++) {
            f = e[a];
            if (f in d) {
                f = d[f];
                for (var g = 0; g < f.length; g++) {
                    if (!f[g]) continue;
                    var j = f[g].fire(this, c);
                    if (j === !1) return c.kill();
                    else c.cancelBubble && c.stop()
                }
            }
        }
        return c.returnValue
    });
    h.Priority = {
        URGENT: -20,
        TRADITIONAL: -10,
        NORMAL: 0,
        _BUBBLE: 1e3
    };
    var t = function() {
        "use strict";

        function a(a, b, c, d, e, f, g) {
            this.$1 = a, this.$2 = b, this.$3 = c, this.$7 = d, this.$6 = e, this.$4 = f, this.$5 = g
        }
        var c = a.prototype;
        c.isRemoved = function() {
            return !this.$3
        };
        c.remove = function() {
            if (b("ExecutionEnvironment").canUseDOM) {
                if (this.isRemoved()) {
                    b("FBLogger")("Event").warn("Event handler has already been removed");
                    return
                }
                var a = this.$3[this.$7];
                a.numHandlers <= 1 ? (a.domHandlerRemover.remove(), delete this.$3[this.$7]) : (delete a[this.$6][this.$4], a.numHandlers--, this.$5.passive || (a.numNonPassiveHandlers--, o(this.$1, this.$3[this.$7], this.$7)));
                this.$3 = null
            }
        };
        c.fire = function(a, c) {
            return b("ExecutionEnvironment").canUseDOM ? (g || (g = b("ErrorGuard"))).applyWithGuard(this.$2, a, [c], {
                name: "eventhandler:" + c.type + ":" + (typeof a.name == "string" ? a.name : a.id)
            }) : !0
        };
        return a
    }();
    a.$E = h.$E = l;
    e.exports = h
}), null);
__d("getSurfaceAwareContainer", ["ge"], (function(a, b, c, d, e, f) {
    "use strict";

    function a() {
        var a = b("ge")("workGalahadWebChromeEntity");
        return a ? a : document.body
    }
    e.exports = a
}), null);
__d("snowliftLoadingSpinner", ["cx", "CSS"], (function(a, b, c, d, e, f, g) {
    "use strict";

    function a(a) {
        b("CSS").addClass(a, "_1m42");
        return function() {
            b("CSS").removeClass(a, "_1m42")
        }
    }
    e.exports = a
}), null);
__d("PhotoSnowliftLoader", ["Arbiter", "Bootloader", "EventProfiler", "FBLogger", "PageEvents", "getSurfaceAwareContainer", "ifRequired", "snowliftLoadingSpinner"], (function(a, b, c, d, e, f) {
    "use strict";

    function g(a, c, d) {
        if (a && a.offer_bypass_snowlift === "1") {
            b("EventProfiler").tagCurrentActiveInteractionsAs("SnowliftOffer");
            m.loadFrame(d);
            b("Bootloader").loadModules(["AsyncRequest"], function(a) {
                new a().setURI(c).send()
            }, "PhotoSnowliftLoader");
            return !0
        }
        return !1
    }

    function h(a, c, d) {
        if (a && a.offerx_bypass_snowlift === "1") {
            b("EventProfiler").tagCurrentActiveInteractionsAs("SnowliftOfferX");
            m.loadFrame(d);
            b("Bootloader").loadModules(["AsyncRequest", "XOfferController"], function(b, c) {
                c = c.getURIBuilder().setFBID("offer_id", a.offerx_id).setEnum("referrer", a.offerx_referrer).setStringVector("__xts__", a.__xts__).setString("__tn__", a.__tn__).getURI();
                new b().setURI(c).send()
            }, "PhotoSnowliftLoader");
            return !0
        }
        return !1
    }

    function i(a, c, d) {
        if (a && a.sales_promo_bypass_snowlift === "1") {
            b("EventProfiler").tagCurrentActiveInteractionsAs("SnowliftSalesPromo");
            m.loadFrame(d);
            b("Bootloader").loadModules(["AsyncRequest", "XSalesPromoWWWDetailsDialogAsyncController"], function(b, c) {
                c = c.getURIBuilder().setFBID("offer_id", a.sales_promo_id).setString("referrer", a.sales_promo_referrer).setStringVector("__xts__", a.__xts__).setString("__tn__", a.__tn__).getURI();
                new b().setURI(c).send()
            }, "PhotoSnowliftLoader");
            return !0
        }
        return !1
    }
    var j = function() {};
    b("Arbiter").subscribe("PhotoSnowlift.OPEN", function() {
        j()
    });
    b("Arbiter").subscribe("SalesPromoDetails.OPEN", function() {
        j()
    });
    b("Arbiter").subscribe("OfferDetails.OPEN", function() {
        j()
    });
    var k = !1,
        l = "",
        m = {
            STAGE_NORMAL_MAX: {
                x: 960,
                y: 960
            },
            SIDEBAR_SIZE_MAX: 360,
            STAGE_CHROME: {
                x: 82,
                y: 42
            },
            load: function(a, c, d) {
                var e = this;
                b("Bootloader").loadModules(["URI"], function(f) {
                    l = "";
                    j();
                    j = b("snowliftLoadingSpinner")(c);
                    var g = String(f.getMostRecentURI().getQueryData().viewas),
                        h = new f(a).getQueryData();
                    h = m.shouldUseSnowlift(h, a, c, g);
                    if (h) {
                        c.getAttribute("data-ploi") && (h = new Image(), h.src = new f(m.getImageURL(c)));
                        e.loadWithSnowLift(a, c, g, d)
                    }
                }, "PhotoSnowliftLoader")
            },
            loadWithSnowLift: function(a, c, d, e) {
                m.loadFrame(d), b("Bootloader").loadModules(["Live", "PhotoTagApproval", "PhotoTagger", "PhotoTags", "TagTokenizer"], function() {}, "PhotoSnowliftLoader"), b("Bootloader").loadModules(["PhotoSnowlift"], function(b) {
                    b.bootstrap(a, c)
                }, e)
            },
            loadFrame: function(a) {
                if (k) return;
                k = !0;
                var c = a ? {
                    viewas: a
                } : {};
                b("Bootloader").loadModules(["AsyncRequest"], function(a) {
                    new a("/ajax/photos/snowlift/init.php").setAllowCrossPageTransition(!0).setMethod("GET").setReadOnly(!0).setData(c).setErrorHandler(function(a) {
                        b("FBLogger")("photo_snowlift").catching(a.toError()).warn("failed to initialize snowlift")
                    }).send()
                }, "PhotoSnowliftLoader")
            },
            shouldUseSnowlift: function(a, b, c, d) {
                c = g(a, b, d);
                var e = h(a, b, d);
                a = i(a, b, d);
                return !c && !a && !e
            },
            getImageURL: function(a) {
                l === "" && b("ifRequired")("URI", function(b) {
                    var c = a.getAttribute("data-ploi"),
                        d = a.getAttribute("data-plsi");
                    b = new b(a.getAttribute("ajaxify")).getQueryData().size.split(",");
                    d && !m.shouldShowHiRes({
                        hasSmallImage: !!d,
                        dimensions: {
                            x: b[0],
                            y: b[1]
                        }
                    }) ? l = d : c ? l = c : l = ""
                });
                return l
            },
            shouldShowHiRes: function(a) {
                b("ifRequired")("Vector", function(b) {
                    if (!a.hasSmallImage) return !1;
                    b = m.getStageSize(a.dimensions);
                    if (b) {
                        b = m.adjustStageSizeForPixelRatio(b);
                        b = m.getImageSizeInStage(a.dimensions, b);
                        if (b) return b.x > m.STAGE_NORMAL_MAX.x || b.y > m.STAGE_NORMAL_MAX.y
                    }
                    return !1
                });
                return !1
            },
            getStageSize: function(a) {
                b("ifRequired")("Vector", function(b) {
                    var c = b.getViewportDimensions(),
                        d = new b(a.x, a.y),
                        e;
                    e = Math.min(d.x, c.x - m.SIDEBAR_SIZE_MAX - m.STAGE_CHROME.x);
                    c = c.y - m.STAGE_CHROME.y;
                    c = Math.min(d.y, c);
                    if (e === 0 && c === 0) return new b(0, 0);
                    var f = e / c;
                    d = d.x / d.y;
                    return f < d ? new b(e, Math.round(e / d)) : new b(Math.round(c * d), c)
                })
            },
            adjustStageSizeForPixelRatio: function(a) {
                b("ifRequired")("Vector", function(b) {
                    window.devicePixelRatio && window.devicePixelRatio > 1 && (a = new b(a.x * window.devicePixelRatio, a.y * window.devicePixelRatio))
                });
                return a
            },
            getImageSizeInStage: function(a, c) {
                b("ifRequired")("Vector", function(b) {
                    var d = a.x,
                        e = a.y;
                    if (d >= c.x || e >= c.y) {
                        var f = c.x / c.y,
                            g = d / e;
                        f < g ? (d = c.x, e = Math.round(d / g)) : f > g ? (e = c.y, d = Math.round(e * g)) : (d = c.x, e = c.y)
                    }
                    return new b(d, e)
                })
            },
            preload: function() {
                b("Arbiter").subscribe(b("PageEvents").BIGPIPE_ONLOAD, function() {
                    var a = b("getSurfaceAwareContainer")();
                    (a && a.classList.contains("home") || a && a.classList.contains("timelineLayout")) && b("ifRequired")("requestIdleCallback", function(a) {
                        a(function() {
                            m.loadFrame()
                        })
                    }, function() {
                        m.loadFrame()
                    })
                })
            }
        };
    e.exports = m
}), null);
__d("PrimerInlineHandlers", ["Bootloader", "CSS", "Parent", "nullthrows", "uniqueID"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = {},
        h = new Map();

    function i(a, c) {
        var d = b("nullthrows")(a.id);
        d in g || (g[d] = 0);
        g[d] === 0 && b("CSS").addClass(a, "bootloading");
        g[d] += c
    }

    function j(a) {
        var c = b("nullthrows")(a.id);
        g[c]--;
        g[c] === 0 && b("CSS").removeClass(a, "bootloading")
    }

    function k(a, b, c, d) {
        var e = d !== void 0 ? c[d] : c,
            f;
        if (Array.isArray(e))
            for (f = 0; f < e.length; f++) k(a, b, e, f);
        else if (e && typeof e === "object")
            if (e.__elem) c[d] = a;
            else if (e.__event) c[d] = b;
        else
            for (var g in e) k(a, b, e, g)
    }

    function l(a, c, d) {
        var f = b("Parent").byClass(a, "stat_elem") || a;
        f.id || f.setAttribute("id", b("uniqueID")());
        d = JSON.parse(a.getAttribute(d));
        i(f, d.length);
        d.forEach(function(d) {
            d = Array.isArray(d) ? m(d) : n(d);
            var g = d.moduleName,
                i = d.methodName,
                l = d.logicalKey,
                o = d.args;
            k(a, c, o);
            var p = b("Bootloader").loadModules.call(b("Bootloader"), [g], function(a) {
                j(f), a[i].apply(a, o)
            }, "Primer: addEventHandler");
            if (l != null) {
                d = h.get(l);
                d !== void 0 && d();
                h.set(l, function() {
                    p.remove(), j(a)
                })
            }
        })
    }

    function m(a) {
        var b = a[0],
            c = a[1];
        a = a.slice(2);
        return {
            moduleName: b,
            methodName: c,
            args: a
        }
    }

    function n(a) {
        var b = a.k,
            c = a.mod,
            d = a.meth;
        a = a.a;
        return {
            logicalKey: b,
            moduleName: c,
            methodName: d,
            args: a
        }
    }
    a = {
        run: function(a, c, d) {
            a = b("Parent").byAttribute(a, d);
            if (!a) return null;
            do l(a, c, d); while (a = b("Parent").byAttribute(a.parentNode, d));
            return !1
        }
    };
    e.exports = a
}), null);
__d("ReactServerPrimer", ["FBLogger", "Parent", "requireWeak"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = new Map();

    function h(a) {
        while (a && a instanceof Node) {
            if (a instanceof HTMLElement && a.getAttribute("data-sr-before")) break;
            var c = a.previousSibling;
            c ? a = c : a = a.parentNode
        }
        if (a instanceof HTMLElement) return a;
        else {
            b("FBLogger")("ServerCallables").mustfix("Failed to find wrapping data-sr-before mount");
            return null
        }
    }

    function i(a, c, d) {
        var e = h(c);
        if (!e) return null;
        var f = !1,
            i = g.get(e);
        i || (i = [], g.set(e, i), f = !0);
        i.push(function() {
            var b = new a.constructor(a.type, a),
                e = d === void 0 ? c : d;
            e.dispatchEvent(b)
        });
        f && b("requireWeak")("ReactServerRenderer", function(a) {
            a.dequeueHydrate(e)
        });
        return !1
    }

    function a(a, c, d) {
        a = b("Parent").byAttribute(d, a);
        return !a ? null : i(c, a, d)
    }

    function c(a) {
        var b = g.get(a);
        b != null && b.forEach(function(a) {
            a()
        });
        g["delete"](a)
    }
    e.exports = {
        findSRBeforeMountElem: h,
        handleEvent: a,
        queueEvent: i,
        notifyReactHydrateMount: c
    }
}), null);
__d("firstClickTimestamp", ["DataStore"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = "first-click-timestamp";
    a = {
        setIfFirstClick: function(a, c) {
            var d = b("DataStore").get(a, g);
            d || b("DataStore").set(a, g, c.toString())
        },
        get: function(a) {
            a = b("DataStore").get(a, g);
            return Number(a)
        }
    };
    e.exports = a
}), null);
__d("CookieStore", ["CookieCoreLoggingConfig", "FBLogger", "Random", "gkx", "performanceNow", "requireDeferred"], (function(a, b, c, d, e, f) {
    "use strict";
    var g, h = b("requireDeferred")("BanzaiScuba");

    function i(a, b, c, d, e, f, g, h) {
        return b + "=" + encodeURIComponent(c) + "; " + (f !== 0 && f != void 0 ? "expires=" + new Date(a + f).toUTCString() + "; " : "") + "path=" + d + "; domain=" + e + (g ? "; secure" : "") + (h ? "; SameSite=" + h : "")
    }

    function j(a, b, c) {
        return a + "=; expires=Thu, 01-Jan-1970 00:00:01 GMT; path=" + b + "; domain=" + c
    }

    function k() {
        if (b("CookieCoreLoggingConfig").sampleRate > 0) {
            var a = (g || (g = b("performanceNow")))(),
                c = document.cookie;
            a = g() - a;
            var d = a > b("CookieCoreLoggingConfig").maximumIgnorableStallMs && b("Random").coinflip(1 / b("CookieCoreLoggingConfig").sampleRate);
            d && b("FBLogger")("cookie_infra").addMetadata("COOKIE_INFRA", "WALL_TIME", String(a)).warn("Cookie read exceeded %s milliseconds.", b("CookieCoreLoggingConfig").maximumIgnorableStallMs);
            return c
        } else return document.cookie
    }
    var l = function() {
        function a() {
            this.$1 = 0
        }
        var c = a.prototype;
        c.setCookie = function(a, b, c, d, e, f, g, h) {
            document.cookie = i(a, b, c, d, e, f, g, h)
        };
        c.clearCookie = function(a, b, c) {
            document.cookie = j(a, b, c)
        };
        c.getCookie = function(a) {
            this.$1++;
            var c = (g || (g = b("performanceNow")))();
            a = k().match("(?:^|;\\s*)" + a + "=(.*?)(?:;|$)");
            c = g() - c;
            var d = 1 / b("CookieCoreLoggingConfig").sampleRateClassic,
                e = b("Random").coinflip(d);
            e && m(d, "classic", c, this.$1);
            return a ? decodeURIComponent(a[1]) : null
        };
        return a
    }();

    function m(a, b, c, d, e, f) {
        h.onReady(function(g) {
            g = new g("cookie_perf", null, {
                addBrowserFields: !0
            });
            g.addInteger("sample_rate", Math.floor(a));
            g.addNormal("type", b);
            g.addInteger("duration_usec", c * 1e3);
            g.addInteger("reads", d);
            typeof e === "number" && g.addInteger("misses", e);
            typeof f === "boolean" && g.addNormal("hit", f);
            g.post()
        })
    }
    var n = 10 * 1e3,
        o = function() {
            function a() {
                this.$1 = {}, this.$2 = 0, this.$3 = 0, this.$4 = 0
            }
            var c = a.prototype;
            c.setCookie = function(a, b, c, d, e, f, g, h) {
                document.cookie = i(a, b, c, d, e, f, g, h), this.$1[b] = {
                    value: c,
                    updated: a
                }
            };
            c.clearCookie = function(a, b, c) {
                document.cookie = j(a, b, c), this.$1[a] = {
                    value: null,
                    updated: Date.now()
                }
            };
            c.getCookie = function(a) {
                var c = (g || (g = b("performanceNow")))();
                a = this.$5(a);
                var d = a.cookie;
                a = a.hit;
                var e = 1 / b("CookieCoreLoggingConfig").sampleRateFastStale,
                    f = b("Random").coinflip(e);
                if (f) {
                    f = (g || (g = b("performanceNow")))() - c;
                    m(e, "fast_stale", f, this.$3, this.$4, a)
                }
                return d
            };
            c.$5 = function(a) {
                var b = Date.now(),
                    c = this.$1[a];
                if (!c) {
                    if (this.$2 + n < b) {
                        this.$6();
                        return {
                            cookie: this.$5(a).cookie,
                            hit: !1
                        }
                    }
                    this.$3++;
                    return {
                        cookie: null,
                        hit: !0
                    }
                }
                if (c.updated + n < b) {
                    this.$6();
                    return {
                        cookie: this.$5(a).cookie,
                        hit: !1
                    }
                }
                this.$3++;
                return {
                    cookie: c.value,
                    hit: !0
                }
            };
            c.$6 = function() {
                this.$4++;
                var a = k().split(";");
                this.$2 = Date.now();
                this.$1 = {};
                for (var a = a, b = Array.isArray(a), c = 0, a = b ? a : a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                    var d;
                    if (b) {
                        if (c >= a.length) break;
                        d = a[c++]
                    } else {
                        c = a.next();
                        if (c.done) break;
                        d = c.value
                    }
                    d = d;
                    d = d.match("\\s*([^=]+)=(.*)");
                    if (!d) continue;
                    this.$1[d[1]] = {
                        value: decodeURIComponent(d[2]),
                        updated: this.$2
                    }
                }
            };
            return a
        }();
    e.exports = {
        newCookieStore: function() {
            return b("gkx")("676837") ? new o() : new l()
        },
        CookieCacheForTest: o,
        CookieStoreSlowForTest: l
    }
}), null);
__d("CookieCore", ["CookieCoreConfig", "CookieStore"], (function(a, b, c, d, e, f) {
    var g = /^.*(\.(facebook|messenger|oculus|instagram|facebookcorewwwi|workplace)\..*)$/i,
        h = /_js_(.*)/,
        i;

    function j() {
        i || (i = b("CookieStore").newCookieStore());
        return i
    }

    function k(a) {
        return window.self != window.top ? !1 : !0
    }
    var l = {
        set: function(a, b) {
            if (!o(a)) return;
            l.setWithoutChecks(a, b, q(a), r(a), p(a), s(a))
        },
        setWithoutChecks: function(a, b, c, d, e, f) {
            var h = Date.now();
            if (c != null)
                if (c > h) c -= h;
                else if (c == 1) {
                l.clear(a, d);
                return
            }
            j().setCookie(h, a, b, d, window.location.hostname.replace(g, "$1"), c, e, f)
        },
        setIfFirstPartyContext: function(a, b) {
            if (!k(a)) return;
            l.set(a, b)
        },
        setWithoutChecksIfFirstPartyContext: function(a, b, c, d, e) {
            if (!k(a)) return;
            l.setWithoutChecks(a, b, c, d, e)
        },
        clear: function(a, b) {
            b === void 0 && (b = "/"), b = b || "/", j().clearCookie(a, b, window.location.hostname.replace(g, "$1"))
        },
        get: function(a) {
            return !o(a) ? null : j().getCookie(a)
        }
    };

    function m(a) {
        return {
            insecure: a.i || !1,
            path: a.p || "/",
            ttlSeconds: a.t || 0,
            sameSite: a.s || "None"
        }
    }

    function n(a) {
        if (b("CookieCoreConfig")[a] !== void 0) return m(b("CookieCoreConfig")[a]);
        a = a.match(h);
        return a && a.length > 1 ? n(a[1]) : null
    }

    function o(a) {
        return n(a) !== null
    }

    function p(a) {
        a = n(a);
        return a == null ? !0 : !a.insecure
    }

    function q(a) {
        a = n(a);
        return a == null ? null : a.ttlSeconds * 1e3
    }

    function r(a) {
        a = n(a);
        return a == null ? "/" : a.path
    }

    function s(a) {
        a = n(a);
        return a == null || a.sameSite == null ? null : a.sameSite
    }
    e.exports = l
}), null);
__d("Cookie", ["Bootloader", "CookieConsent", "CookieCore"], (function(a, b, c, d, e, f) {
    var g;

    function h(a) {
        if ((g || (g = b("CookieConsent"))).isDeferCookies()) {
            b("Bootloader").loadModules(["BanzaiODS"], function(b) {
                b.bumpEntityKey(2966, "defer_cookies", "set." + a)
            }, "Cookie");
            return !1
        }
        return !0
    }

    function i() {
        return !(g || (g = b("CookieConsent"))).isCookiesBlocked()
    }

    function a(a, c) {
        if (!i() || !h(a)) return;
        b("CookieCore").set(a, c)
    }

    function c(a, c) {
        if (!i()) return;
        b("CookieCore").set(a, c)
    }

    function d(a, c, d, e, f) {
        if (!i() || !h(a)) return;
        b("CookieCore").setWithoutChecks(a, c, d, e, f)
    }
    e.exports = babelHelpers["extends"]({}, b("CookieCore"), {
        set: a,
        setWithoutChecks: d,
        setWithoutCheckingUserConsent_DANGEROUS: c
    })
}), null);
__d("trackReferrer", ["Cookie", "Parent"], (function(a, b, c, d, e, f) {
    var g = /^(?:(?:[^:\/?#]+):)?(?:\/\/(?:[^\/?#]*))?([^?#]*)(?:\?([^#]*))?(?:#(.*))?/;

    function h(a) {
        return g.exec(a)[1] || ""
    }

    function a(a, c) {
        a = b("Parent").byAttribute(a, "data-referrer");
        if (a) {
            c = h(c);
            if (!c) return;
            c = c + "|" + a.getAttribute("data-referrer");
            b("Cookie").set("x-src", c)
        }
    }
    e.exports = a
}), null);
__d("Primer", ["invariant", "requireDeferred", "Bootloader", "CSS", "Env", "Event", "Parent", "PhotoSnowliftLoader", "PrimerInlineHandlers", "ReactServerPrimer", "TimeSlice", "clickRefAction", "firstClickTimestamp", "ifRequired", "performanceNow", "trackReferrer"], (function(a, b, c, d, e, f, g) {
    var h, i, j = b("requireDeferred")("AsyncRequest"),
        k = null,
        l = /async(?:-post)?|dialog(?:-post)?|theater|toggle/;
    a = document.documentElement;
    a != null || g(0, 2301);

    function m(a, c, d, e, f) {
        b("firstClickTimestamp").setIfFirstClick(c, (h || (h = b("performanceNow")))());
        var k = c.getAttribute("ajaxify"),
            m = c.href,
            n = e != null && e !== "" ? e : k || m;
        n && b("clickRefAction")("a", c, a).coalesce_namespace("primer");
        if (k && m && !/#$/.test(m)) {
            e = a.which && a.which === 2;
            k = a.altKey || a.ctrlKey || a.metaKey || a.shiftKey;
            if (e || k) return
        }
        m = b("PrimerInlineHandlers").run(d, a, "data-onclick");
        b("trackReferrer")(c, n);
        var o = f || c.rel;
        o = o && o.match(l);
        o = o && o[0];
        e = "Primer: " + o;
        switch (o) {
            case "dialog":
            case "dialog-post":
                b("Bootloader").loadModules(["AsyncDialog"], function(a) {
                    a.bootstrap(n, c, o)
                }, e);
                break;
            case "async":
            case "async-post":
                j.loadImmediately(function(a) {
                    a.bootstrap(n, c, o === "async-post")
                });
                break;
            case "theater":
                !(i || (i = b("Env"))).isCQuick ? b("PhotoSnowliftLoader").load(n, c, e) : b("ifRequired")("PageTransitions", function(a) {
                    a.go(n)
                });
                break;
            case "toggle":
                k = c.parentNode;
                k != null || g(0, 2302);
                b("CSS").toggleClass(k, "openToggler");
                b("Bootloader").loadModules(["Toggler"], function(a) {
                    if (c.parentNode == null) return;
                    a.bootstrap(c)
                }, e);
                break;
            default:
                b("ifRequired")("PageTransitionsRegistrar", function(b) {
                    b.__onClick(a)
                }, function() {});
                return m
        }
        return !1
    }
    b("Event").listen(document, "click", function(a) {
        a = a || window.event;
        if (a.button >= 2) return;
        k = a.target || a.srcElement;
        var c = b("Parent").byTag(k, "A");
        c instanceof HTMLAnchorElement ? c = m(a, c, k) : c = b("PrimerInlineHandlers").run(k, a, "data-onclick");
        c == null && (c = b("ReactServerPrimer").handleEvent("data-sr-onclick", a, k));
        return c
    }, b("Event").Priority._BUBBLE);
    b("Event").listen(document, "submit", function(a) {
        var c = a.getTarget(),
            d = c && c.getAttribute("rel");
        if (c && c.nodeName == "FORM" && (d == "async" || d === "dialog")) {
            b("clickRefAction")("f", c, a).coalesce_namespace("primer");
            var e = k;
            switch (d) {
                case "async":
                    b("Bootloader").loadModules(["FormSubmit"], function(a) {
                        a.send(c, e)
                    }, "Primer: async");
                    break;
                case "dialog":
                    b("Bootloader").loadModules(["FormSubmit", "AsyncDialog"], function(a, b) {
                        a = a.buildRequest(c, e);
                        a && b.send(a)
                    }, "Primer: form dialog");
                    break
            }
            return !1
        } else return b("ifRequired")("PageTransitionsRegistrar", function(b) {
            return b.__onSubmit(a, k)
        })
    }, b("Event").Priority._BUBBLE);
    var n = null;
    c = function(a, c) {
        c = c || window.event;
        n = c.target || c.srcElement;
        var d = b("PrimerInlineHandlers").run(n, c, "data-on" + a);
        o();
        a === "mouseover" && (p(), d == null && n && (d = b("ReactServerPrimer").handleEvent("data-sr-onmouseover", c, n)))
    };
    d = function(a, b) {
        b = b || window.event, n = b.relatedTarget || b.toElement
    };
    var o = function() {
            var a = n,
                c = b("Parent").byAttribute(n, "data-hover");
            if (c) {
                switch (c.getAttribute("data-hover")) {
                    case "tooltip":
                        b("Bootloader").loadModules(["Tooltip"], function(b) {
                            n === a && b.process(c, n)
                        }, "Primer: tooltip");
                        break
                }
                return
            }
        },
        p = function() {
            var a = n,
                c = b("Parent").byAttribute(a, "data-hovercard");
            c && b("Bootloader").loadModules(["Hovercard"], function(b) {
                n === a && b.processNode(c)
            }, "Primer: hovercard")
        };
    a.onmouseover = b("TimeSlice").guard(c.bind(null, "mouseover"), "Primer mouseover");
    a.onmouseout = b("TimeSlice").guard(d.bind(null, "mouseout"), "Primer mouseout");
    f = b("TimeSlice").guard(c.bind(null, "focus"), "Primer focus");
    a.addEventListener ? a.addEventListener("focus", f, !0) : a.attachEvent("onfocusin", f);
    d = b("TimeSlice").guard(c.bind(null, "keypress"), "Primer keypress");
    a.addEventListener && a.addEventListener("keypress", d, !0);
    b("PhotoSnowliftLoader").preload();
    e.exports = {
        primerHandleAjaxify: m
    }
}), null);
__d("ChatConfig", ["invariant", "ChatConfigInitialData"], (function(a, b, c, d, e, f, g) {
    var h = Object.assign({}, b("ChatConfigInitialData")),
        i = {
            get: function(a, b) {
                return a in h ? h[a] : b
            },
            getBool: function(a) {
                return !!i.get(a, !1)
            },
            getNumber: function(a, b) {
                b === void 0 && (b = 0);
                if (a in h) {
                    typeof h[a] === "number" || g(0, 3109);
                    return h[a]
                }
                return b
            },
            set: function(a, b) {
                h[a] = b
            },
            getDebugInfo: function() {
                return h
            }
        };
    e.exports = i
}), null);
__d("SidebarPrelude", ["Arbiter", "Bootloader", "ChatConfig", "CSS", "URI", "qex", "setTimeout"], (function(a, b, c, d, e, f) {
    var g, h = b("ChatConfig").get("sidebar.hide_buddylist_off_homepage"),
        i = b("ChatConfig").get("sidebar.hide_buddylist_off_allpage"),
        j = b("qex")._("1211266") || !1,
        k = "buddylistOff",
        l = "sidebarMode";
    a = {
        addSidebarMode: function(a) {
            var c = document.documentElement;
            if (c) {
                var d = i || j || h && !this.isOnHomepage();
                d ? b("CSS").addClass(c, k) : (b("CSS").removeClass(c, k), h && b("setTimeout")(function() {
                    b("Bootloader").loadModules(["Dock"], function(a) {
                        a.resizeAllFlyouts()
                    }, "SidebarPrelude")
                }));
                c.clientWidth > a && (b("CSS").addClass(c, l), b("Arbiter").inform("sidebar/visibility", !0, "state"))
            }
        },
        addBuddylistMode: function() {
            var a = document.documentElement;
            if (a) {
                var c = i || j || h && !this.isOnHomepage();
                c ? b("CSS").addClass(a, k) : (b("CSS").removeClass(a, k), h && b("setTimeout")(function() {
                    b("Bootloader").loadModules(["Dock"], function(a) {
                        a.resizeAllFlyouts()
                    }, "SidebarPrelude")
                }))
            }
        },
        isOnHomepage: function() {
            return new(g || (g = b("URI")))(window.location.href).getPath() === "/"
        }
    };
    e.exports = a
}), null);
__d("SubmitOnEnterListener", ["Bootloader", "CSS"], (function(a, b, c, d, e, f) {
    document.documentElement.onkeydown = function(a) {
        a = a || window.event;
        var c = a.target || a.srcElement;
        a = a.keyCode == 13 && !a.altKey && !a.ctrlKey && !a.metaKey && !a.shiftKey && b("CSS").hasClass(c, "enter_submit");
        if (a) {
            b("Bootloader").loadModules(["DOM", "Input", "trackReferrer", "Form"], function(a, b, d, e) {
                if (!b.isEmpty(c)) {
                    b = c.form;
                    a = a.scry(b, ".enter_submit_target")[0] || a.scry(b, '[type="submit"]')[0];
                    if (a) {
                        e = e.getAttribute(b, "ajaxify") || e.getAttribute(b, "action");
                        e && d(b, e);
                        a.click()
                    }
                }
            }, "SubmitOnEnterListener");
            return !1
        }
    }
}), null);
__d("SyntaxErrorMonitor", ["Cookie", "ErrorPubSub", "ErrorUtils"], (function(a, b, c, d, e, f) {
    var g, h = "js_ver",
        i = 864e5,
        j = 1262304e6,
        k = null;

    function l(a) {
        return a.name == "SyntaxError" || /syntaxerror/i.test(a.message)
    }

    function m(a) {
        if (l(a)) {
            a = b("Cookie").get(h);
            var c = Math.floor((Date.now() - j) / i);
            if (!a || c - a >= k.bump_freq_day) {
                b("Cookie").set(h, c);
                a || (a = c);
                var d = encodeURIComponent(k.cdn_config);
                d = "/ajax/js_bump/?cdn_config=" + d + "&days=" + c + "&last_update=" + a;
                c = new Image();
                c.src = d
            }
        }
    }
    a = {
        init: function(a) {
            k = a, (g || (g = b("ErrorPubSub"))).addListener(m)
        }
    };
    e.exports = a
}), null);
__d("CallStackExecutionObserver", ["ExecutionContextObservers", "ifRequired", "uniqueID"], (function(a, b, c, d, e, f) {
    "use strict";
    var g, h = null;

    function i(a, b) {
        if (b) {
            var c = b.id,
                d = b.name;
            b = b.interactions;
            var e = Error.stackTraceLimit;
            Error.stackTraceLimit = 1e3;
            var f = new Error().stack;
            Error.stackTraceLimit = e;
            b.forEach(function(b) {
                b.inform(a + ":" + d, {
                    rawStackTrace: f
                }).addStringAnnotation("id", c)
            })
        }
    }
    a = {
        onNewContextCreated: function(a, c, d) {
            a = b("ifRequired")("TimeSliceAutoclosedInteraction", function(a) {
                return a
            });
            a = a ? a.getInteractionsActiveRightNow() : [];
            a = a.filter(function(a) {
                return a.isEnabledForMode("full")
            });
            if (d && d.isContinuation && a.length) {
                var e = b("uniqueID")();
                d = Error.stackTraceLimit;
                Error.stackTraceLimit = 1e3;
                var f = new Error().stack;
                Error.stackTraceLimit = d;
                a.forEach(function(a) {
                    var b = a.inform("created_continuation:" + c, {
                        rawStackTrace: f
                    }).addStringAnnotation("id", e);
                    h && b.addStringAnnotation("parentID", h);
                    a.trace().addStringAnnotation("has_stack_trace", "1")
                });
                return {
                    id: e,
                    parentID: h,
                    name: c,
                    interactions: a
                }
            }
            return null
        },
        onContextCanceled: function(a, b) {
            i("cancelling_continuation", b)
        },
        onBeforeContextStarted: function(a, b, c) {
            a = h;
            b && b.id && (h = b.id);
            return {
                executionParentID: a
            }
        },
        onAfterContextStarted: function(a, b, c, d) {
            i("executing_continuation", b);
            return c
        },
        onAfterContextEnded: function(a, b, c, d) {
            c && (h = c.executionParentID), i("executing_continuation_end", b)
        },
        getBeforeID: function() {
            return (g || (g = b("ExecutionContextObservers"))).beforeIDs.CALL_STACK
        },
        getAfterID: function() {
            return (g || (g = b("ExecutionContextObservers"))).afterIDs.CALL_STACK
        }
    };
    e.exports = a
}), null);
__d("WorkerUtils", [], (function(a, b, c, d, e, f) {
    "use strict";

    function b() {
        try {
            return "WorkerGlobalScope" in a && a instanceof a.WorkerGlobalScope
        } catch (a) {
            return !1
        }
    }
    e.exports = {
        isWorkerContext: b
    }
}), null);
__d("getReusableTimeSliceContinuation", [], (function(a, b, c, d, e, f) {
    "use strict";

    function a(a, b, c) {
        var d = !1,
            e = a.getGuardedContinuation(c),
            f = function(b) {
                e(function() {
                    d || (e = a.getGuardedContinuation(c)), b()
                })
            };
        f.last = function(a) {
            var b = e;
            g();
            b(a)
        };
        f[b] = {
            cancel: function() {
                d || (a.cancel(e), g(), d = !0)
            },
            tokens: [],
            invoked: !1
        };

        function g() {
            d = !0, e = function(a) {
                a()
            }
        }
        return f
    }
    e.exports = a
}), null);
__d("TimeSliceImpl", ["invariant", "CallStackExecutionObserver", "CircularBuffer", "Env", "ErrorGuard", "FBLogger", "IntervalTrackingBoundedBuffer", "WorkerUtils", "getReusableTimeSliceContinuation", "nullthrows", "performanceAbsoluteNow", "wrapFunction"], (function(a, b, c, d, e, f, g) {
    var h, i, j, k = [],
        l = [],
        m = "key" + Math.random(),
        n = 1,
        o = !1,
        p = 0,
        q = 1,
        r = 2,
        s = {},
        t = p,
        u = new(b("CircularBuffer"))(100),
        v = 0,
        w = 0;
    c = (h || (h = b("Env"))).timesliceBufferSize;
    c == null && (c = 5e3);
    var x = new(b("IntervalTrackingBoundedBuffer"))(c),
        y = "stackTraceLimit" in Error,
        z = [],
        A = [],
        B = [];

    function C() {
        return D(z)
    }

    function D(a) {
        return a.length > 0 ? a[a.length - 1] : null
    }

    function E(a, c) {
        var d = {};
        (i || (i = b("ErrorGuard"))).applyWithGuard(I, null, [a, c, d]);
        i.applyWithGuard(J, null, [a, c, d]);
        z.push(a);
        A.push(c);
        B.push(d)
    }

    function F(a, b, c) {
        k.forEach(function(d) {
            var e = d.onNewContextCreated(C(), b, c);
            a[d.getBeforeID()] = e
        })
    }

    function G(a, b) {
        k.forEach(function(c) {
            c.onContextCanceled(a, b[c.getBeforeID()])
        })
    }

    function H(a, b, c) {
        l.forEach(function(d) {
            d.onAfterContextEnded(a, b[d.getBeforeID()], c[d.getBeforeID()], a.meta)
        })
    }

    function I(a, b, c) {
        k.forEach(function(d) {
            var e = d.onBeforeContextStarted(a, b[d.getBeforeID()], a.meta);
            c[d.getBeforeID()] = e
        })
    }

    function J(a, b, c) {
        k.forEach(function(d) {
            var e = d.onAfterContextStarted(a, b[d.getBeforeID()], c[d.getBeforeID()], a.meta);
            c[d.getBeforeID()] = e
        })
    }

    function K() {
        var a = C(),
            c = D(A),
            d = D(B);
        if (a == null || c == null || d == null) {
            b("FBLogger")("TimeSlice").mustfix("popped too many times off the timeslice stack");
            o = !1;
            return
        }(i || (i = b("ErrorGuard"))).applyWithGuard(H, null, [a, c, d]);
        o = !a.isRoot;
        z.pop();
        A.pop();
        B.pop()
    }
    var L = {
        PropagationType: {
            CONTINUATION: 0,
            EXECUTION: 1,
            ORPHAN: 2
        },
        guard: function(a, c, d) {
            var e;
            typeof a === "function" || g(0, 3725);
            typeof c === "string" || g(0, 3726);
            var f = M(d);
            if (a[m]) return a;
            f.root || L.checkCoverage();
            var k;
            o && (k = C());
            var l = {},
                p = 0,
                q = void 0;
            e = (e = (h || (h = b("Env"))).deferred_stack_trace_rate) != null ? e : 0;
            d && d.registerCallStack && e > 0 && Math.random() < 1 / e && (q = new Error("deferred execution source"));
            var r = {
                cancel: function() {
                    r.invoked || (i || (i = b("ErrorGuard"))).applyWithGuard(G, null, [c, l])
                },
                tokens: [],
                invoked: !1
            };
            d = function() {
                var d = (j || (j = b("performanceAbsoluteNow")))(),
                    e = n++,
                    g = {
                        contextID: e,
                        name: c,
                        isRoot: !o,
                        executionNumber: p++,
                        meta: f,
                        absBeginTimeMs: d
                    };
                r.invoked || (r.invoked = !0, r.tokens.length && (r.tokens.forEach(function(a) {
                    delete s[a]
                }), r.tokens = []));
                E(g, l);
                if (k != null) {
                    var h = !!f.isContinuation;
                    k.isRoot ? (g.indirectParentID = k.contextID, g.isEdgeContinuation = h) : (g.indirectParentID = k.indirectParentID, g.isEdgeContinuation = !!(h && k.isEdgeContinuation))
                }
                var m = b("WorkerUtils").isWorkerContext();
                o = !0;
                try {
                    for (var t = arguments.length, u = new Array(t), v = 0; v < t; v++) u[v] = arguments[v];
                    if (!g.isRoot || m) return a.apply(this, u);
                    else return (i || (i = b("ErrorGuard"))).applyWithGuard(a, this, u, {
                        name: "TimeSlice" + (c ? ": " + c : ""),
                        deferredSource: q
                    })
                } finally {
                    var y = C();
                    if (y == null) b("FBLogger")("TimeSlice").mustfix("timeslice stack misaligned, not logging the block"), o = !1;
                    else {
                        var z = y.isRoot,
                            A = y.contextID,
                            B = y.indirectParentID,
                            D = y.isEdgeContinuation,
                            F = (j || (j = b("performanceAbsoluteNow")))();
                        y.absEndTimeMs = F;
                        if (z && d != null) {
                            w += F - d;
                            var G = babelHelpers["extends"]({
                                begin: d,
                                end: F,
                                id: A,
                                indirectParentID: B,
                                representsExecution: !0,
                                isEdgeContinuation: k && D,
                                guard: c
                            }, f, a.__SMmeta);
                            x.pushElement(G)
                        }
                        K()
                    }
                }
            };
            d[m] = r;
            (i || (i = b("ErrorGuard"))).applyWithGuard(F, null, [l, c, f]);
            return d
        },
        copyGuardForWrapper: function(a, b) {
            a && a[m] && (b[m] = a[m]);
            return b
        },
        cancel: function(a) {
            a = a ? a[m] : null;
            a && !a.invoked && (a.cancel(), a.tokens.forEach(function(a) {
                delete s[a]
            }), a.invoked = !0)
        },
        cancelWithToken: function(a) {
            s[a] && L.cancel(s[a])
        },
        registerForCancelling: function(a, b) {
            a && (b[m] && (s[a] || (b[m].invoked || (s[a] = b, b[m].tokens.push(a)))))
        },
        inGuard: function() {
            return o
        },
        checkCoverage: function() {
            var a;
            if (t !== r && !o) {
                y && (a = Error.stackTraceLimit, Error.stackTraceLimit = 50);
                var c = new Error("Missing TimeSlice coverage");
                y && (Error.stackTraceLimit = a);
                t === q && Math.random() < v ? b("FBLogger")("TimeSlice").catching(c).debug("Missing TimeSlice coverage") : t === p && b("nullthrows")(u).write(c)
            }
        },
        setLogging: function(a, c) {
            if (t !== p) return;
            v = c;
            a ? (t = q, b("nullthrows")(u).read().forEach(function(a) {
                Math.random() < v && b("FBLogger")("TimeSlice").catching(a).warn("error from logging buffer")
            })) : t = r;
            b("nullthrows")(u).clear();
            u = void 0
        },
        getContext: function() {
            return C()
        },
        getTotalTime: function() {
            return w
        },
        getGuardedContinuation: function(a) {
            function b(a) {
                for (var b = arguments.length, c = new Array(b > 1 ? b - 1 : 0), d = 1; d < b; d++) c[d - 1] = arguments[d];
                return a.apply(this, c)
            }
            return L.guard(b, a, {
                propagationType: L.PropagationType.CONTINUATION
            })
        },
        getReusableContinuation: function(a) {
            return b("getReusableTimeSliceContinuation")(L, m, a)
        },
        getPlaceholderReusableContinuation: function() {
            var a = function(a) {
                return a()
            };
            a.last = a;
            return a
        },
        getGuardNameStack: function() {
            return z.map(function(a) {
                return a.name
            })
        },
        registerExecutionContextObserver: function(a) {
            var b = !1;
            for (var c = 0; c < k.length; c++)
                if (k[c].getBeforeID() > a.getBeforeID()) {
                    k.splice(c, 0, a);
                    b = !0;
                    break
                }
            b || k.push(a);
            for (var c = 0; c < l.length; c++)
                if (l[c].getAfterID() > a.getAfterID()) {
                    l.splice(c, 0, a);
                    return
                }
            l.push(a)
        },
        catchUpOnDemandExecutionContextObservers: function(a) {
            for (var b = 0; b < z.length; b++) {
                var c = z[b],
                    d = A[b],
                    e = B[b] || {};
                d = a.onBeforeContextStartedWhileEnabled(c, d[a.getBeforeID()], c.meta);
                e[a.getBeforeID()] = d;
                B[b] = e
            }
        },
        getBuffer: function() {
            return x
        }
    };

    function M(a) {
        var b = {};
        a && a.propagateCounterAttribution !== void 0 && (b.propagateCounterAttribution = a.propagateCounterAttribution);
        a && a.root !== void 0 && (b.root = a.root);
        switch (a && a.propagationType) {
            case L.PropagationType.CONTINUATION:
                b.isContinuation = !0;
                b.extendsExecution = !0;
                break;
            case L.PropagationType.ORPHAN:
                b.isContinuation = !1;
                b.extendsExecution = !1;
                break;
            case L.PropagationType.EXECUTION:
            default:
                b.isContinuation = !1, b.extendsExecution = !0
        }
        return b
    }(h || (h = b("Env"))).sample_continuation_stacktraces && L.registerExecutionContextObserver(b("CallStackExecutionObserver"));
    b("wrapFunction").setWrapper(function(a, b) {
        return L.guard(a, b, {
            registerCallStack: !0
        })
    }, "entry");
    a.TimeSlice = L;
    e.exports = L
}), 6);
__d("URLFragmentPrelude", ["URLFragmentPreludeConfig", "requireWeak"], (function(a, b, c, d, e, f) {
    a = /^(?:(?:[^:\/?#]+):)?(?:\/\/(?:[^\/?#]*))?([^?#]*)(?:\?([^#]*))?(?:#(.*))?/;
    var g = /^[^\/\\#!\.\?\*\&\^=]+$/;
    window.location.href.replace(a, function(a, c, d, e) {
        var f;
        f = a = c + (d ? "?" + d : "");
        if (e) {
            var h = e.replace(/^(!|%21)/, "");
            h = h.charAt(0);
            if (h !== "/" && h !== "\\" && b("URLFragmentPreludeConfig").hashtagRedirect) {
                h = e.match(g);
                h && !d && c == "/" && (f = "/hashtag/" + e)
            }
        }
        f != a && (b("requireWeak")("BanzaiODS", function(a) {
            a.bumpEntityKey(3216, "url_fragment_prelude", "blue_redirected")
        }), window.location.replace(f))
    })
}), null);
__d("VisibilityListener", ["Visibility", "performanceNow"], (function(a, b, c, d, e, f) {
    "use strict";
    var g, h = Date.now() - (g || (g = b("performanceNow")))(),
        i = [],
        j = !1,
        k = 1e4;
    i.push({
        key: h,
        value: b("Visibility").isHidden()
    });

    function l(a, b) {
        if (j || i.length > k) {
            j = !0;
            return
        }
        i.push({
            key: a + h,
            value: b
        })
    }
    b("Visibility").addListener(b("Visibility").VISIBLE, function(a) {
        l(a.changeTime, !1)
    });
    b("Visibility").addListener(b("Visibility").HIDDEN, function(a) {
        l(a.changeTime, !0)
    });
    var m = {
        getHiddenTimings: function(a, c) {
            if (j) return null;
            var d;
            for (var a = i.length - 1; a >= 0; a--)
                if (i[a].key <= c) {
                    d = i.slice(0, a + 1);
                    break
                }
            if (d === void 0) return null;
            d[d.length - 1].value !== b("Visibility").isHidden() && (d[d.length] = {
                key: c,
                value: b("Visibility").isHidden()
            });
            return d
        },
        getHiddenTime: function(a, c) {
            var d = m.getHiddenTimings(a, c);
            if (!d) return null;
            if (d.length < 2) return b("Visibility").isHidden() ? c - a : 0;
            var e = d.length - 1;
            c = d[e].value ? c - d[e].key : 0;
            for (--e; e > 0; e--)
                if (d[e].key > a) d[e].value && (c += d[e + 1].key - d[e].key);
                else break;
            d[e].value && (c = d[e + 1].key - a);
            return c
        },
        supported: function() {
            return !0
        }
    };
    e.exports = m
}), 3);
__d("bootstrapWebSession", ["WebSession", "WebSessionDefaultTimeoutMs", "performanceNavigationStart"], (function(a, b, c, d, e, f) {
    "use strict";

    function g(a) {
        a = b("performanceNavigationStart")() || a;
        return Number.isInteger(a) ? a : null
    }
    var h = !1;

    function a(a) {
        if (h === !0) return;
        h = !0;
        a = g(a);
        a != null && a > 0 && b("WebSession").extend(a + b("WebSessionDefaultTimeoutMs"))
    }
    e.exports = a
}), null);
__d("clearIntervalBlue", ["TimerStorage", "TimeSlice"], (function(a, b, c, d, e, f) {
    var g = a.__fbNativeClearTimeout || a.clearTimeout;

    function c(a) {
        if (a != null) {
            b("TimerStorage").unset(b("TimerStorage").INTERVAL, a);
            var c = b("TimerStorage").TIMEOUT + String(a);
            b("TimeSlice").cancelWithToken(c)
        }
        g(a)
    }
    e.exports = c
}), null);
__d("clearTimeoutBlue", ["TimerStorage", "TimeSlice"], (function(a, b, c, d, e, f) {
    var g = a.__fbNativeClearTimeout || a.clearTimeout,
        h = b("TimerStorage").TIMEOUT;

    function c(a) {
        if (a != null) {
            b("TimerStorage").unset(h, a);
            var c = h + String(a);
            b("TimeSlice").cancelWithToken(c)
        }
        g(a)
    }
    e.exports = c
}), null);
__d("legacy:arbiter", ["Arbiter"], (function(a, b, c, d, e, f) {
    a.Arbiter = b("Arbiter")
}), 3);
__d("legacy:bootloader", ["Bootloader"], (function(a, b, c, d, e, f) {
    a.Bootloader = b("Bootloader")
}), 3);
__d("legacy:constructor-cache", ["JSCC"], (function(a, b, c, d, e, f) {
    a.JSCC = b("JSCC")
}), 3);
__d("legacy:css", ["CSS"], (function(a, b, c, d, e, f) {
    a.CSS = b("CSS")
}), 3);
__d("legacy:dom-core", ["$", "ge"], (function(a, b, c, d, e, f) {
    a.$ = a.$ || b("$"), a.ge = b("ge")
}), 3);
__d("legacy:emptyFunction", ["emptyFunction"], (function(a, b, c, d, e, f) {
    a.emptyFunction = b("emptyFunction")
}), 3);
__d("goURI", ["URI"], (function(a, b, c, d, e, f) {
    "use strict";
    var g;
    e.exports = (g || b("URI")).go
}), null);
__d("legacy:goURI", ["goURI"], (function(a, b, c, d, e, f) {
    a.goURI = b("goURI")
}), 3);
__d("legacy:onload", ["Run", "PageEvents"], (function(a, b, c, d, e, f) {
    a.PageEvents = b("PageEvents");
    a.onloadRegister_DEPRECATED = (c = b("Run")).onLoad;
    a.onloadRegister = function() {
        return b("Run").onLoad.apply(this, arguments)
    };
    a.onafterloadRegister_DEPRECATED = c.onAfterLoad;
    a.onafterloadRegister = function() {
        return b("Run").onAfterLoad.apply(this, arguments)
    };
    a.onleaveRegister = c.onLeave;
    a.onbeforeunloadRegister = c.onBeforeUnload;
    a.onunloadRegister = c.onUnload
}), 3);
__d("legacy:parent", ["Parent"], (function(a, b, c, d, e, f) {
    a.Parent = b("Parent")
}), 3);
__d("lowerFacebookDomain", [], (function(a, b, c, d, e, f) {
    b = window.location.hostname.match(/\.(facebook\.sg|facebookcorewwwi\.onion|workplace\.com)$/);
    var g = b ? b[1] : "facebook.com";
    a.setDomain = function(a) {
        g = a
    };
    a.isValidDocumentDomain = function() {
        return document.domain == g ? !0 : !1
    };

    function a() {
        document.domain = g
    }
    e.exports = a
}), null);
__d("lowerDomain", ["lowerFacebookDomain"], (function(a, b, c, d, e, f) {
    ((a = document.domain) != null ? a : "").toLowerCase().match(/(^|\.)(facebook|facebookcorewwwi|workplace)\..*/) && b("lowerFacebookDomain")()
}), null);
__d("markJSEnabled", [], (function(a, b, c, d, e, f) {
    a = document.documentElement;
    a.className = a.className.replace("no_js", "")
}), null);
__d("requestAnimationFrameAcrossTransitionsPriority", ["Env", "ErrorUtils", "FBLogger", "TimerStorage", "TimeSlice", "clearTimeout", "performanceNow", "requestAnimationFramePolyfill", "setTimeoutAcrossTransitions"], (function(a, b, c, d, e, f) {
    var g, h, i, j = b("TimerStorage").ANIMATION_FRAME,
        k = 100,
        l = null,
        m = null,
        n = {},
        o = null,
        p = {
            DEFAULT: 0,
            QUERY_THEN_MUTATE: 1,
            FORCE_CLIENT_REFLOW: 2,
            DISPLAY_DONE_LOGGING: 3,
            SIZE: 4
        };

    function q(c) {
        o = n;
        n = {};
        l = null;
        m && (b("clearTimeout")(m), m = null);
        var d = function(d) {
            if (d === p.FORCE_CLIENT_REFLOW) {
                (g || (g = b("Env"))).gk_raf_force_client_reflow === !0 && window.document.body && window.document.body.getClientRects();
                return "continue"
            }
            var e = o;
            Object.values(e).forEach(function(e) {
                var f = e;
                if (f.deleted || f.priority !== d) return;
                (h || (h = b("ErrorUtils"))).applyWithGuard(function() {
                    f.callback.call(a, c)
                })
            })
        };
        for (var e = 0; e < p.SIZE; e++) {
            var f = d(e);
            if (f === "continue") continue
        }
        o = null
    }

    function r(a, c) {
        c = (c ? c.priority : null) || "DEFAULT";
        c = p[c];
        !m && c > p.DEFAULT && (m = b("setTimeoutAcrossTransitions")(b("TimeSlice").guard(function() {
            m = null, q((i || (i = b("performanceNow")))())
        }, "requestAnimationFrame priorityRAFCallback setTimeout", {
            propagationType: b("TimeSlice").PropagationType.ORPHAN
        }), k));
        a = b("TimeSlice").guard(a, "requestAnimationFrame", {
            propagationType: b("TimeSlice").PropagationType.CONTINUATION,
            registerCallStack: !0
        });
        var d = b("requestAnimationFramePolyfill")(function() {});
        n[d] = {
            callback: a,
            priority: c
        };
        l || (l = b("requestAnimationFramePolyfill")(function(a) {
            l = null, q(a)
        }));
        b("TimeSlice").registerForCancelling(j + d, a);
        return d
    }

    function c(a, b) {
        return r(a, b)
    }
    c.cancelVirtualRAF = function(a) {
        b("TimeSlice").cancel(n[a]);
        delete n[a];
        if (o) {
            a = o[a];
            a && (a.deleted = !0)
        }
    };
    e.exports = c
}), null);
__d("requestAnimationFrameAcrossTransitionsSimple", ["TimerStorage", "TimeSlice", "requestAnimationFramePolyfill"], (function(a, b, c, d, e, f) {
    var g = b("TimerStorage").ANIMATION_FRAME;

    function a(a) {
        a = b("TimeSlice").guard(a, "requestAnimationFrame", {
            propagationType: b("TimeSlice").PropagationType.CONTINUATION
        });
        var c = b("requestAnimationFramePolyfill")(a);
        b("TimeSlice").registerForCancelling(g + c, a);
        return c
    }
    e.exports = a
}), null);
__d("setIntervalAcrossTransitionsBlue", ["TimeSlice"], (function(a, b, c, d, e, f) {
    var g = a.__fbNativeSetInterval || a.setInterval;

    function c(c, d) {
        var e = b("TimeSlice").guard(c, "setInterval");
        for (var f = arguments.length, h = new Array(f > 2 ? f - 2 : 0), i = 2; i < f; i++) h[i - 2] = arguments[i];
        return Function.prototype.apply.call(g, a, [e, d].concat(h))
    }
    e.exports = c
}), null);
__d("setIntervalBlue", ["TimerStorage", "setIntervalAcrossTransitions"], (function(a, b, c, d, e, f) {
    function a(a, c) {
        for (var d = arguments.length, e = new Array(d > 2 ? d - 2 : 0), f = 2; f < d; f++) e[f - 2] = arguments[f];
        var g = b("setIntervalAcrossTransitions").apply(void 0, [a, c].concat(e));
        b("TimerStorage").set(b("TimerStorage").INTERVAL, g);
        return g
    }
    e.exports = a
}), null);
__d("setTimeoutAcrossTransitionsBlue", ["TimerStorage", "TimeSlice"], (function(a, b, c, d, e, f) {
    var g = a.__fbNativeSetTimeout || a.setTimeout,
        h = b("TimerStorage").TIMEOUT;

    function c(c, d) {
        var e = b("TimeSlice").guard(c, "setTimeout", {
            propagationType: b("TimeSlice").PropagationType.CONTINUATION,
            registerCallStack: !0
        });
        for (var f = arguments.length, i = new Array(f > 2 ? f - 2 : 0), j = 2; j < f; j++) i[j - 2] = arguments[j];
        var k = Function.prototype.apply.call(g, a, [e, d].concat(i)),
            l = h + k;
        b("TimeSlice").registerForCancelling(l, e);
        return k
    }
    e.exports = c
}), null);
__d("setTimeoutBlue", ["TimerStorage", "TimeSlice", "setTimeoutAcrossTransitions"], (function(a, b, c, d, e, f) {
    function a(a, c) {
        var d, e = function() {
            b("TimerStorage").unset(b("TimerStorage").TIMEOUT, d);
            for (var c = arguments.length, e = new Array(c), f = 0; f < c; f++) e[f] = arguments[f];
            Function.prototype.apply.call(a, this, e)
        };
        b("TimeSlice").copyGuardForWrapper(a, e);
        for (var f = arguments.length, g = new Array(f > 2 ? f - 2 : 0), h = 2; h < f; h++) g[h - 2] = arguments[h];
        d = b("setTimeoutAcrossTransitions").apply(void 0, [e, c].concat(g));
        b("TimerStorage").set(b("TimerStorage").TIMEOUT, d);
        return d
    }
    e.exports = a
}), null);