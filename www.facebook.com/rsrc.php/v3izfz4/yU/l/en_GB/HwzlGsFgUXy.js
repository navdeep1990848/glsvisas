if (self.CavalryLogger) {
    CavalryLogger.start_js(["b1KuI"]);
}

__d("FetchStreamConfig", [], (function(a, b, c, d, e, f) {
    e.exports = {
        delim: "/*<!-- fetch-stream -->*/"
    }
}), null);
__d("GenderConst", [], (function(a, b, c, d, e, f) {
    e.exports = {
        NOT_A_PERSON: 0,
        FEMALE_SINGULAR: 1,
        MALE_SINGULAR: 2,
        FEMALE_SINGULAR_GUESS: 3,
        MALE_SINGULAR_GUESS: 4,
        MIXED_SINGULAR: 5,
        MIXED_PLURAL: 5,
        NEUTER_SINGULAR: 6,
        UNKNOWN_SINGULAR: 7,
        FEMALE_PLURAL: 8,
        MALE_PLURAL: 9,
        NEUTER_PLURAL: 10,
        UNKNOWN_PLURAL: 11
    }
}), null);
__d("IntlVariations", [], (function(a, b, c, d, e, f) {
    e.exports = {
        BITMASK_NUMBER: 28,
        BITMASK_GENDER: 3,
        NUMBER_ZERO: 16,
        NUMBER_ONE: 4,
        NUMBER_TWO: 8,
        NUMBER_FEW: 20,
        NUMBER_MANY: 12,
        NUMBER_OTHER: 24,
        GENDER_MALE: 1,
        GENDER_FEMALE: 2,
        GENDER_UNKNOWN: 3
    }
}), null);
__d("InlineFbtResult", ["requireCond", "cr:1183579"], (function(a, b, c, d, e, f) {
    e.exports = b("cr:1183579")
}), null);
__d("FbtReactUtil", [], (function(a, b, c, d, e, f) {
    a = typeof Symbol === "function" && Symbol["for"] && Symbol["for"]("react.element") || 60103;
    var g = !1;
    b = {
        REACT_ELEMENT_TYPE: a,
        injectReactShim: function(a) {
            var b = {
                validated: !0
            };
            g ? Object.defineProperty(a, "_store", {
                configurable: !1,
                enumerable: !1,
                writable: !1,
                value: b
            }) : a._store = b
        }
    };
    e.exports = b
}), null);
__d("FbtResult", ["FbtReactUtil", "FbtResultBase"], (function(a, b, c, d, e, f) {
    var g = function(a) {
        return a.content
    };
    a = function(a) {
        "use strict";
        babelHelpers.inheritsLoose(c, a);

        function c(c, d) {
            d = a.call(this, c, d) || this;
            d.$$typeof = b("FbtReactUtil").REACT_ELEMENT_TYPE;
            d.key = null;
            d.ref = null;
            d.type = g;
            d.props = {
                content: c
            };
            return d
        }
        c.get = function(a) {
            return new c(a.contents, a.errorListener)
        };
        return c
    }(b("FbtResultBase"));
    e.exports = a
}), null);
__d("getUnwrappedFbt", ["FbtResultGK"], (function(a, b, c, d, e, f) {
    function a(a) {
        a = a.contents;
        var c = b("FbtResultGK").inlineMode,
            d = b("FbtResultGK").shouldReturnFbtResult;
        if (!d && c !== "REPORT") return (a == null ? void 0 : a.length) === 1 && typeof a[0] === "string" ? a[0] : a
    }
    e.exports = a
}), null);
__d("getFbtResult", ["FbtResult", "FbtResultGK", "InlineFbtResult", "SiteData", "TransAppInlineMode", "getUnwrappedFbt", "gkx", "recoverableViolation"], (function(a, b, c, d, e, f) {
    var g = b("FbtResultGK").inlineMode;
    if (b("SiteData").is_comet && g === "TRANSLATION") {
        b("recoverableViolation")("TransAppInlineMode=TRANSLATION should not happen on Comet yet. " + ("[inlineMode=" + ((c = g) != null ? c : "") + "]") + ("[runtime_site_is_comet=" + String(b("gkx")("708253")) + "]"), "internationalization")
    }

    function a(a) {
        var c = b("getUnwrappedFbt")(a);
        if (c != null) return c;
        c = a.contents;
        var d = a.patternString,
            e = a.patternHash;
        return g != null && g !== "NO_INLINE" ? new(b("InlineFbtResult"))(c, g, d, e) : b("FbtResult").get(a)
    }
    e.exports = a
}), null);
__d("guid", [], (function(a, b, c, d, e, f) {
    function a() {
        return "f" + (Math.random() * (1 << 30)).toString(16).replace(".", "")
    }
    e.exports = a
}), null);
__d("ArbiterMixin", ["Arbiter", "guid"], (function(a, b, c, d, e, f) {
    var g = "arbiter$" + b("guid")(),
        h = Object.prototype.hasOwnProperty;
    a = {
        _getArbiterInstance: function() {
            return h.call(this, g) ? this[g] : this[g] = new(b("Arbiter"))()
        },
        inform: function(a, b, c) {
            return this._getArbiterInstance().inform(a, b, c)
        },
        subscribe: function(a, b, c) {
            return this._getArbiterInstance().subscribe(a, b, c)
        },
        subscribeOnce: function(a, b, c) {
            return this._getArbiterInstance().subscribeOnce(a, b, c)
        },
        unsubscribe: function(a) {
            this._getArbiterInstance().unsubscribe(a)
        },
        unsubscribeCurrentSubscription: function() {
            this._getArbiterInstance().unsubscribeCurrentSubscription()
        },
        releaseCurrentPersistentEvent: function() {
            this._getArbiterInstance().releaseCurrentPersistentEvent()
        },
        registerCallback: function(a, b) {
            return this._getArbiterInstance().registerCallback(a, b)
        },
        query: function(a) {
            return this._getArbiterInstance().query(a)
        }
    };
    e.exports = a
}), null);
__d("AsyncDOM", ["CSS", "DOM", "FBLogger"], (function(a, b, c, d, e, f) {
    a = {
        invoke: function(a, c) {
            for (var d = 0; d < a.length; ++d) {
                var e = a[d],
                    f = e[0],
                    g = e[1],
                    h = e[2];
                e = e[3];
                h = h && c || null;
                g && (h = b("DOM").scry(h || document.documentElement, g)[0]);
                f != "eval" && !h && b("FBLogger")("async_dom").warn("Could not find relativeTo element for %s AsyncDOM operation based on selector: %s", f, g);
                switch (f) {
                    case "eval":
                        new Function(e).apply(h);
                        break;
                    case "hide":
                        b("CSS").hide(h);
                        break;
                    case "show":
                        b("CSS").show(h);
                        break;
                    case "setContent":
                        b("DOM").setContent(h, e);
                        break;
                    case "appendContent":
                        b("DOM").appendContent(h, e);
                        break;
                    case "prependContent":
                        b("DOM").prependContent(h, e);
                        break;
                    case "insertAfter":
                        b("DOM").insertAfter(h, e);
                        break;
                    case "insertBefore":
                        b("DOM").insertBefore(h, e);
                        break;
                    case "remove":
                        b("DOM").remove(h);
                        break;
                    case "replace":
                        b("DOM").replace(h, e);
                        break;
                    default:
                        b("FBLogger")("async_dom").warn("Received invalid command %s for AsyncDOM operation", f)
                }
            }
        }
    };
    e.exports = a
}), null);
__d("AsyncResponse", ["invariant", "Bootloader", "FBLogger", "HTML"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = function() {
        function a(a, b) {
            this.error = 0, this.errorSummary = null, this.errorDescription = null, this.onload = null, this.replay = !1, this.payload = b, this.request = a, this.silentError = !1, this.transientError = !1, this.blockedAction = !1, this.is_last = !0, this.responseHeaders = null
        }
        var c = a.prototype;
        c.getRequest = function() {
            return this.request
        };
        c.getPayload = function() {
            return this.payload
        };
        c.toError = function() {
            this.error !== 0 || g(0, 5599);
            var a = this.errorSummary || "",
                b = this.getErrorDescriptionString() || "",
                c = new Error(a.toString() + ": " + b);
            Object.assign(c, {
                code: this.error,
                description: this.errorDescription || "",
                descriptionString: b,
                response: this,
                summary: a,
                isSilent: this.silentError,
                isTransient: this.transientError
            });
            return c
        };
        c.getError = function() {
            return this.error
        };
        c.getErrorSummary = function() {
            return this.errorSummary
        };
        c.setErrorSummary = function(a) {
            a = a === void 0 ? null : a;
            this.errorSummary = a;
            return this
        };
        c.getErrorDescription = function() {
            return this.errorDescription
        };
        c.getErrorDescriptionString = function() {
            var a = this.getErrorDescription();
            if (a == null) return null;
            if (b("HTML").isHTML(a)) {
                var c = new(b("HTML"))(a);
                return c.getRootNode().textContent
            }
            return a.toString()
        };
        c.getErrorIsWarning = function() {
            return !!this.errorIsWarning
        };
        c.isTransient = function() {
            return !!this.transientError
        };
        c.isBlockedAction = function() {
            return !!this.blockedAction
        };
        c.getResponseHeader = function(a) {
            var b = this.responseHeaders;
            if (!b) return null;
            b = b.replace(/^\n/, "");
            a = a.toLowerCase();
            b = b.split("\r\n");
            for (var c = 0; c < b.length; ++c) {
                var d = b[c],
                    e = d.indexOf(": ");
                if (e <= 0) continue;
                var f = d.substring(0, e).toLowerCase();
                if (f === a) return d.substring(e + 2)
            }
            return null
        };
        a.defaultErrorHandler = function(c) {
            try {
                !c.silentError ? a.verboseErrorHandler(c) : b("FBLogger")("async_response").catching(c.toError()).warn("default error handler called")
            } catch (a) {
                alert(c)
            }
        };
        a.verboseErrorHandler = function(a, c) {
            b("Bootloader").loadModules(["ExceptionDialog"], function(b) {
                return b.showAsyncError(a, c)
            }, "AsyncResponse")
        };
        return a
    }();
    e.exports = a
}), null);
__d("Deferred", ["Promise"], (function(a, b, c, d, e, f) {
    "use strict";
    b("Promise").resolve();
    a = function() {
        function a(a) {
            var c = this;
            a = a || b("Promise");
            this.$1 = !1;
            this.$2 = new a(function(a, b) {
                c.$3 = a, c.$4 = b
            })
        }
        var c = a.prototype;
        c.getPromise = function() {
            return this.$2
        };
        c.resolve = function(a) {
            this.$1 = !0, this.$3(a)
        };
        c.reject = function(a) {
            this.$1 = !0, this.$4(a)
        };
        c.isSettled = function() {
            return this.$1
        };
        return a
    }();
    e.exports = a
}), null);
__d("regeneratorRuntime", ["Promise"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = Object.prototype.hasOwnProperty,
        h = typeof Symbol === "function" && (typeof Symbol === "function" ? Symbol.iterator : "@@iterator") || "@@iterator",
        i = e.exports;

    function j(a, b, c, d) {
        b = Object.create((b || q).prototype);
        d = new z(d || []);
        b._invoke = w(a, c, d);
        return b
    }
    i.wrap = j;

    function k(a, b, c) {
        try {
            return {
                type: "normal",
                arg: a.call(b, c)
            }
        } catch (a) {
            return {
                type: "throw",
                arg: a
            }
        }
    }
    var l = "suspendedStart",
        m = "suspendedYield",
        n = "executing",
        o = "completed",
        p = {};

    function q() {}

    function r() {}

    function s() {}
    var t = s.prototype = q.prototype;
    r.prototype = t.constructor = s;
    s.constructor = r;
    r.displayName = "GeneratorFunction";

    function a(a) {
        ["next", "throw", "return"].forEach(function(b) {
            a[b] = function(a) {
                return this._invoke(b, a)
            }
        })
    }
    i.isGeneratorFunction = function(a) {
        a = typeof a === "function" && a.constructor;
        return a ? a === r || (a.displayName || a.name) === "GeneratorFunction" : !1
    };
    i.mark = function(a) {
        Object.setPrototypeOf ? Object.setPrototypeOf(a, s) : Object.assign(a, s);
        a.prototype = Object.create(t);
        return a
    };
    i.awrap = function(a) {
        return new u(a)
    };

    function u(a) {
        this.arg = a
    }

    function v(a) {
        function c(c, f) {
            var g = a[c](f);
            c = g.value;
            return c instanceof u ? b("Promise").resolve(c.arg).then(d, e) : b("Promise").resolve(c).then(function(a) {
                g.value = a;
                return g
            })
        }
        typeof process === "object" && process.domain && (c = process.domain.bind(c));
        var d = c.bind(a, "next"),
            e = c.bind(a, "throw");
        c.bind(a, "return");
        var f;

        function g(a, d) {
            var e = f ? f.then(function() {
                return c(a, d)
            }) : new(b("Promise"))(function(b) {
                b(c(a, d))
            });
            f = e["catch"](function(a) {});
            return e
        }
        this._invoke = g
    }
    a(v.prototype);
    i.async = function(a, b, c, d) {
        var e = new v(j(a, b, c, d));
        return i.isGeneratorFunction(b) ? e : e.next().then(function(a) {
            return a.done ? a.value : e.next()
        })
    };

    function w(a, b, c) {
        var d = l;
        return function(e, f) {
            if (d === n) throw new Error("Generator is already running");
            if (d === o) {
                if (e === "throw") throw f;
                return B()
            }
            while (!0) {
                var g = c.delegate;
                if (g) {
                    if (e === "return" || e === "throw" && g.iterator[e] === void 0) {
                        c.delegate = null;
                        var h = g.iterator["return"];
                        if (h) {
                            h = k(h, g.iterator, f);
                            if (h.type === "throw") {
                                e = "throw";
                                f = h.arg;
                                continue
                            }
                        }
                        if (e === "return") continue
                    }
                    h = k(g.iterator[e], g.iterator, f);
                    if (h.type === "throw") {
                        c.delegate = null;
                        e = "throw";
                        f = h.arg;
                        continue
                    }
                    e = "next";
                    f = void 0;
                    var i = h.arg;
                    if (i.done) c[g.resultName] = i.value, c.next = g.nextLoc;
                    else {
                        d = m;
                        return i
                    }
                    c.delegate = null
                }
                if (e === "next") d === m ? c.sent = f : c.sent = void 0;
                else if (e === "throw") {
                    if (d === l) {
                        d = o;
                        throw f
                    }
                    c.dispatchException(f) && (e = "next", f = void 0)
                } else e === "return" && c.abrupt("return", f);
                d = n;
                h = k(a, b, c);
                if (h.type === "normal") {
                    d = c.done ? o : m;
                    var i = {
                        value: h.arg,
                        done: c.done
                    };
                    if (h.arg === p) c.delegate && e === "next" && (f = void 0);
                    else return i
                } else h.type === "throw" && (d = o, e = "throw", f = h.arg)
            }
        }
    }
    a(t);
    t[h] = function() {
        return this
    };
    t.toString = function() {
        return "[object Generator]"
    };

    function x(a) {
        var b = {
            tryLoc: a[0]
        };
        1 in a && (b.catchLoc = a[1]);
        2 in a && (b.finallyLoc = a[2], b.afterLoc = a[3]);
        this.tryEntries.push(b)
    }

    function y(a) {
        var b = a.completion || {};
        b.type = "normal";
        delete b.arg;
        a.completion = b
    }

    function z(a) {
        this.tryEntries = [{
            tryLoc: "root"
        }], a.forEach(x, this), this.reset(!0)
    }
    i.keys = function(a) {
        var b = [];
        for (var c in a) b.push(c);
        b.reverse();
        return function c() {
            while (b.length) {
                var d = b.pop();
                if (d in a) {
                    c.value = d;
                    c.done = !1;
                    return c
                }
            }
            c.done = !0;
            return c
        }
    };

    function A(a) {
        if (a) {
            var b = a[h];
            if (b) return b.call(a);
            if (typeof a.next === "function") return a;
            if (!isNaN(a.length)) {
                var c = -1;
                b = function b() {
                    while (++c < a.length)
                        if (g.call(a, c)) {
                            b.value = a[c];
                            b.done = !1;
                            return b
                        }
                    b.value = void 0;
                    b.done = !0;
                    return b
                };
                return b.next = b
            }
        }
        return {
            next: B
        }
    }
    i.values = A;

    function B() {
        return {
            value: void 0,
            done: !0
        }
    }
    z.prototype = {
        constructor: z,
        reset: function(a) {
            this.prev = 0;
            this.next = 0;
            this.sent = void 0;
            this.done = !1;
            this.delegate = null;
            this.tryEntries.forEach(y);
            if (!a)
                for (var b in this) b.charAt(0) === "t" && g.call(this, b) && !isNaN(+b.slice(1)) && (this[b] = void 0)
        },
        stop: function() {
            this.done = !0;
            var a = this.tryEntries[0];
            a = a.completion;
            if (a.type === "throw") throw a.arg;
            return this.rval
        },
        dispatchException: function(a) {
            if (this.done) throw a;
            var b = this;

            function c(c, d) {
                f.type = "throw";
                f.arg = a;
                b.next = c;
                return !!d
            }
            for (var d = this.tryEntries.length - 1; d >= 0; --d) {
                var e = this.tryEntries[d],
                    f = e.completion;
                if (e.tryLoc === "root") return c("end");
                if (e.tryLoc <= this.prev) {
                    var h = g.call(e, "catchLoc"),
                        i = g.call(e, "finallyLoc");
                    if (h && i) {
                        if (this.prev < e.catchLoc) return c(e.catchLoc, !0);
                        else if (this.prev < e.finallyLoc) return c(e.finallyLoc)
                    } else if (h) {
                        if (this.prev < e.catchLoc) return c(e.catchLoc, !0)
                    } else if (i) {
                        if (this.prev < e.finallyLoc) return c(e.finallyLoc)
                    } else throw new Error("try statement without catch or finally")
                }
            }
        },
        abrupt: function(a, b) {
            for (var c = this.tryEntries.length - 1; c >= 0; --c) {
                var d = this.tryEntries[c];
                if (d.tryLoc <= this.prev && g.call(d, "finallyLoc") && this.prev < d.finallyLoc) {
                    var e = d;
                    break
                }
            }
            e && (a === "break" || a === "continue") && e.tryLoc <= b && b <= e.finallyLoc && (e = null);
            d = e ? e.completion : {};
            d.type = a;
            d.arg = b;
            e ? this.next = e.finallyLoc : this.complete(d);
            return p
        },
        complete: function(a, b) {
            if (a.type === "throw") throw a.arg;
            a.type === "break" || a.type === "continue" ? this.next = a.arg : a.type === "return" ? (this.rval = a.arg, this.next = "end") : a.type === "normal" && b && (this.next = b)
        },
        finish: function(a) {
            for (var b = this.tryEntries.length - 1; b >= 0; --b) {
                var c = this.tryEntries[b];
                if (c.finallyLoc === a) {
                    this.complete(c.completion, c.afterLoc);
                    y(c);
                    return p
                }
            }
        },
        "catch": function(a) {
            for (var b = this.tryEntries.length - 1; b >= 0; --b) {
                var c = this.tryEntries[b];
                if (c.tryLoc === a) {
                    var d = c.completion;
                    if (d.type === "throw") {
                        var e = d.arg;
                        y(c)
                    }
                    return e
                }
            }
            throw new Error("illegal catch attempt")
        },
        delegateYield: function(a, b, c) {
            this.delegate = {
                iterator: A(a),
                resultName: b,
                nextLoc: c
            };
            return p
        }
    }
}), null);
__d("StreamBlockReader", ["Promise", "regeneratorRuntime"], (function(a, b, c, d, e, f) {
    a = function() {
        "use strict";

        function a(a) {
            var c = this;
            if (!a.getReader) throw new Error("No getReader method found on given object");
            this.$3 = a.getReader();
            this.$1 = "";
            this.$2 = null;
            this.$4 = !1;
            this.$5 = "utf-8";
            this.$6 = "";
            this.$9 = !1;
            this.$8 = function() {
                return b("Promise").reject("Sorry, you are somehow using this too early.")
            };
            this.$7 = new(b("Promise"))(function(a, b) {
                c.$8 = a
            })
        }
        var c = a.prototype;
        c.changeEncoding = function(a) {
            if (this.$2) throw new Error("Decoder already in use, encoding cannot be changed");
            this.$5 = a
        };
        c.$10 = function() {
            if (!self.TextDecoder) throw new Error("TextDecoder is not supported here");
            this.$2 || (this.$2 = new self.TextDecoder(this.$5));
            return this.$2
        };
        c.$11 = function() {
            if (this.$9) throw new Error("Something else is already reading from this reader");
            this.$9 = !0
        };
        c.$12 = function() {
            this.$9 = !1
        };
        c.isDone = function() {
            return this.$4
        };
        c.$13 = function() {
            var a, c, d, e;
            return b("regeneratorRuntime").async(function(f) {
                while (1) switch (f.prev = f.next) {
                    case 0:
                        if (!(this.$6 !== "")) {
                            f.next = 4;
                            break
                        }
                        a = this.$6;
                        this.$6 = "";
                        return f.abrupt("return", a);
                    case 4:
                        if (!this.isDone()) {
                            f.next = 6;
                            break
                        }
                        throw new Error("You cannot read from a stream that is done");
                    case 6:
                        f.next = 8;
                        return b("regeneratorRuntime").awrap(this.$3.read());
                    case 8:
                        c = f.sent;
                        d = c.done;
                        e = c.value;
                        this.$4 = d;
                        d && this.$8();
                        return f.abrupt("return", e ? this.$10().decode(e, {
                            stream: !d
                        }) : "");
                    case 14:
                    case "end":
                        return f.stop()
                }
            }, null, this)
        };
        c.readNextBlock = function() {
            var a;
            return b("regeneratorRuntime").async(function(b) {
                while (1) switch (b.prev = b.next) {
                    case 0:
                        this.$11();
                        a = this.$13();
                        this.$12();
                        return b.abrupt("return", a);
                    case 4:
                    case "end":
                        return b.stop()
                }
            }, null, this)
        };
        c.readUntilStringOrEnd = function(a) {
            return b("regeneratorRuntime").async(function(c) {
                while (1) switch (c.prev = c.next) {
                    case 0:
                        c.next = 2;
                        return b("regeneratorRuntime").awrap(this.readUntilOneOfStringOrEnd_DO_NOT_USE([a]));
                    case 2:
                        return c.abrupt("return", c.sent);
                    case 3:
                    case "end":
                        return c.stop()
                }
            }, null, this)
        };
        c.readUntilStringOrThrow = function(a) {
            var c, d, e;
            return b("regeneratorRuntime").async(function(f) {
                while (1) switch (f.prev = f.next) {
                    case 0:
                        if (a) {
                            f.next = 2;
                            break
                        }
                        throw new Error("cannot read empty string");
                    case 2:
                        this.$11(), c = "", d = 0;
                    case 5:
                        if (this.isDone()) {
                            f.next = 23;
                            break
                        }
                        f.t0 = c;
                        f.next = 9;
                        return b("regeneratorRuntime").awrap(this.$13());
                    case 9:
                        c = f.t0 += f.sent;
                        if (!(c.length < a.length)) {
                            f.next = 12;
                            break
                        }
                        return f.abrupt("continue", 5);
                    case 12:
                        e = c.substring(d).indexOf(a);
                        if (!(e !== -1)) {
                            f.next = 20;
                            break
                        }
                        e += d;
                        this.$6 = c.substring(e + a.length);
                        this.$12();
                        return f.abrupt("return", c.substring(0, e));
                    case 20:
                        d = c.length - a.length + 1;
                    case 21:
                        f.next = 5;
                        break;
                    case 23:
                        this.$6 = c;
                        this.$12();
                        throw new Error("Breakpoint not found");
                    case 26:
                    case "end":
                        return f.stop()
                }
            }, null, this)
        };
        c.readUntilOneOfStringOrEnd_DO_NOT_USE = function(a) {
            var c, d, e, f;
            return b("regeneratorRuntime").async(function(g) {
                while (1) switch (g.prev = g.next) {
                    case 0:
                        this.$11(), c = "";
                    case 2:
                        if (this.isDone()) {
                            g.next = 20;
                            break
                        }
                        g.t0 = c;
                        g.next = 6;
                        return b("regeneratorRuntime").awrap(this.$13());
                    case 6:
                        c = g.t0 += g.sent, d = 0;
                    case 8:
                        if (!(d < a.length)) {
                            g.next = 18;
                            break
                        }
                        e = a[d];
                        f = c.indexOf(e);
                        if (!(f !== -1)) {
                            g.next = 15;
                            break
                        }
                        this.$6 = c.substring(f + e.length);
                        this.$12();
                        return g.abrupt("return", c.substring(0, f));
                    case 15:
                        d++;
                        g.next = 8;
                        break;
                    case 18:
                        g.next = 2;
                        break;
                    case 20:
                        this.$12();
                        return g.abrupt("return", c);
                    case 22:
                    case "end":
                        return g.stop()
                }
            }, null, this)
        };
        c.waitUntilDone = function() {
            return b("regeneratorRuntime").async(function(a) {
                while (1) switch (a.prev = a.next) {
                    case 0:
                        return a.abrupt("return", this.$7);
                    case 1:
                    case "end":
                        return a.stop()
                }
            }, null, this)
        };
        return a
    }();
    e.exports = a
}), null);
__d("mixin", [], (function(a, b, c, d, e, f) {
    function a() {
        var a = function() {},
            b = 0,
            c;
        while (b < 0 || arguments.length <= b ? void 0 : arguments[b]) {
            c = b < 0 || arguments.length <= b ? void 0 : arguments[b];
            for (var d in c) Object.prototype.hasOwnProperty.call(c, d) && (a.prototype[d] = c[d]);
            b += 1
        }
        return a
    }
    e.exports = a
}), null);
__d("FetchStreamTransport", ["regeneratorRuntime", "ArbiterMixin", "FBLogger", "FetchStreamConfig", "StreamBlockReader", "TimeSlice", "URI", "mixin", "nullthrows"], (function $module_FetchStreamTransport(global, require, requireDynamic, requireLazy, module, exports) {
    var c_URI, instance_count = 0,
        FetchStreamTransport = function(_ref) {
            "use strict";
            babelHelpers.inheritsLoose(FetchStreamTransport, _ref);

            function FetchStreamTransport(uri) {
                var _this;
                if (!self.ReadableStream || !self.fetch || !Request || !TextDecoder) throw new Error("fetch stream transport is not supported here");
                _this = _ref.call(this) || this;
                _this.$FetchStreamTransport6 = null;
                _this.$FetchStreamTransport1 = uri;
                _this.$FetchStreamTransport3 = !1;
                _this.$FetchStreamTransport4 = !1;
                _this.$FetchStreamTransport5 = !1;
                _this.$FetchStreamTransport2 = ++instance_count;
                return babelHelpers.assertThisInitialized(_this) || babelHelpers.assertThisInitialized(_this)
            }
            var _proto = FetchStreamTransport.prototype;
            _proto.hasFinished = function hasFinished() {
                return this.$FetchStreamTransport5
            };
            _proto.getRequestURI = function getRequestURI() {
                return new(c_URI || (c_URI = require("URI")))(this.$FetchStreamTransport1).addQueryData({
                    __a: 1,
                    __adt: this.$FetchStreamTransport2,
                    __req: "fetchstream_" + this.$FetchStreamTransport2,
                    ajaxpipe_fetch_stream: 1
                })
            };
            _proto.send = function send() {
                if (this.$FetchStreamTransport3) throw new Error("FetchStreamTransport instances cannot be re-used.");
                this.$FetchStreamTransport3 = !0;
                var req = new Request(this.getRequestURI().toString(), {
                    mode: "same-origin",
                    credentials: "include"
                });
                this.$FetchStreamTransport6 = require("TimeSlice").getGuardedContinuation("FetchStreamTransport: waiting on first response");
                var fetchPromise = self.fetch(req, {
                    redirect: "follow"
                });
                this.$FetchStreamTransport7(fetchPromise)
            };
            _proto.$FetchStreamTransport7 = function $FetchStreamTransport7(fetchPromise) {
                var _this2 = this,
                    response, reader, first, _loop, _ret;
                return require("regeneratorRuntime").async(function $FetchStreamTransport7$(_context2) {
                    while (1) switch (_context2.prev = _context2.next) {
                        case 0:
                            _context2.prev = 0;
                            _context2.next = 3;
                            return require("regeneratorRuntime").awrap(fetchPromise);
                        case 3:
                            response = _context2.sent;
                            _context2.next = 9;
                            break;
                        case 6:
                            _context2.prev = 6, _context2.t0 = _context2["catch"](0), this.abort();
                        case 9:
                            if (!(!response || !response.body || !response.ok)) {
                                _context2.next = 12;
                                break
                            }
                            this.abort();
                            return _context2.abrupt("return");
                        case 12:
                            reader = new(require("StreamBlockReader"))(response.body), first = !0, _loop = function _loop() {
                                var nextData;
                                return require("regeneratorRuntime").async(function _loop$(_context) {
                                    while (1) switch (_context.prev = _context.next) {
                                        case 0:
                                            _context.next = 2;
                                            return require("regeneratorRuntime").awrap(reader.readUntilStringOrEnd(require("FetchStreamConfig").delim));
                                        case 2:
                                            nextData = _context.sent;
                                            if (!_this2.$FetchStreamTransport4) {
                                                _context.next = 5;
                                                break
                                            }
                                            return _context.abrupt("return", "break");
                                        case 5:
                                            require("nullthrows")(_this2.$FetchStreamTransport6)(function() {
                                                if (first && nextData.startsWith("<")) {
                                                    require("FBLogger")("FetchStreamTransport").mustfix("Endpoint: %s is sending a raw HTML response instead of properly formatted payload", _this2.$FetchStreamTransport1.toString());
                                                    var node = document.createElement("div");
                                                    node.innerHTML = nextData;
                                                    var scripts = node.getElementsByTagName("script");
                                                    for (var i = 0; i < scripts.length; i++) eval(scripts[i].innerHTML);
                                                    _this2.$FetchStreamTransport5 = !0;
                                                    return
                                                }
                                                first = !1;
                                                var parsedResponse = JSON.parse(nextData);
                                                reader.isDone() || parsedResponse.finished ? _this2.$FetchStreamTransport5 = !0 : _this2.$FetchStreamTransport6 = require("TimeSlice").getGuardedContinuation("FetchStreamTransport: waiting on next response");
                                                _this2.inform("response", parsedResponse.content)
                                            });
                                        case 6:
                                        case "end":
                                            return _context.stop()
                                    }
                                }, null, this)
                            };
                        case 15:
                            if (!(!this.$FetchStreamTransport5 && !this.$FetchStreamTransport4)) {
                                _context2.next = 23;
                                break
                            }
                            _context2.next = 18;
                            return require("regeneratorRuntime").awrap(_loop());
                        case 18:
                            _ret = _context2.sent;
                            if (!(_ret === "break")) {
                                _context2.next = 21;
                                break
                            }
                            return _context2.abrupt("break", 23);
                        case 21:
                            _context2.next = 15;
                            break;
                        case 23:
                        case "end":
                            return _context2.stop()
                    }
                }, null, this, [
                    [0, 6]
                ])
            };
            _proto.abort = function abort() {
                var _this3 = this;
                if (this.$FetchStreamTransport4 || this.$FetchStreamTransport5) return;
                this.$FetchStreamTransport4 = !0;
                this.$FetchStreamTransport5 = !0;
                if (this.$FetchStreamTransport6) {
                    var continuation = this.$FetchStreamTransport6;
                    continuation(function() {
                        _this3.inform("abort")
                    })
                } else this.inform("abort")
            };
            return FetchStreamTransport
        }(require("mixin")(require("ArbiterMixin")));
    module.exports = FetchStreamTransport
}), null);
__d("HTTPErrors", ["emptyFunction"], (function(a, b, c, d, e, f) {
    a = {
        get: b("emptyFunction"),
        getAll: b("emptyFunction")
    };
    e.exports = a
}), null);
__d("JSONPTransport", ["ArbiterMixin", "DOM", "HTML", "TimeSlice", "URI", "mixin"], (function(a, b, c, d, e, f) {
    var g, h = {},
        i = 2,
        j = "jsonp",
        k = "iframe";

    function l(a) {
        delete h[a]
    }
    a = function(a) {
        "use strict";
        babelHelpers.inheritsLoose(c, a);

        function c(b, c) {
            var d;
            d = a.call(this) || this;
            d._type = b;
            d._uri = c;
            d._hasResponse = !1;
            h[d.getID()] = babelHelpers.assertThisInitialized(d);
            return d
        }
        var d = c.prototype;
        d.getID = function() {
            return this._id || (this._id = i++)
        };
        d.hasFinished = function() {
            return !(this.getID() in h)
        };
        d.getRequestURI = function() {
            return new(g || (g = b("URI")))(this._uri).addQueryData({
                __a: 1,
                __adt: this.getID(),
                __req: "jsonp_" + this.getID()
            })
        };
        d.getTransportFrame = function() {
            if (this._iframe) return this._iframe;
            var a = "transport_frame_" + this.getID();
            a = b("HTML")('<iframe class="hidden_elem" name="' + a + '" src="javascript:void(0)" />');
            return this._iframe = b("DOM").appendContent(document.body, a)[0]
        };
        d.send = function() {
            this._type === j ? setTimeout(function() {
                b("DOM").appendContent(document.body, b("DOM").create("script", {
                    src: this.getRequestURI().toString(),
                    type: "text/javascript"
                }))
            }.bind(this), 0) : (this.getTransportFrame().onload = this._checkForErrors.bind(this), this.getTransportFrame().src = this.getRequestURI().toString()), this._continuation = b("TimeSlice").getGuardedContinuation("JSONPTransport: waiting for first response")
        };
        d.createContinuationForFileForm_DO_NOT_USE = function() {
            this._continuation = b("TimeSlice").getGuardedContinuation("JSONPTransport: waiting for first response")
        };
        d.handleResponse = function(a) {
            var c = this;
            this._continuation(function() {
                c.inform("response", a), c.hasFinished() ? setTimeout(c._cleanup.bind(c), 0) : c._continuation = b("TimeSlice").getGuardedContinuation("JSONPTransport: waiting for next response")
            })
        };
        d.abort = function() {
            if (this._aborted) return;
            this._aborted = !0;
            this._cleanup();
            l(this.getID());
            this.inform("abort");
            this._continuation && b("TimeSlice").cancel(this._continuation)
        };
        d._checkForErrors = function() {
            this._hasResponse || this.abort()
        };
        d._cleanup = function() {
            this._iframe && (b("DOM").remove(this._iframe), this._iframe = null)
        };
        c.respond = function(a, b, c) {
            var d = h[a];
            d && (d._hasResponse = !0, c || l(a), d._type == k && (typeof b === "string" ? b = JSON.parse(b) : b = JSON.parse(JSON.stringify(b))), d.handleResponse(b))
        };
        return c
    }(b("mixin")(b("ArbiterMixin")));
    a.respond = b("TimeSlice").guard(a.respond, "JSONPTransport.respond", {
        root: !0
    });
    e.exports = a
}), null);
__d("SessionName", ["SessionNameConfig"], (function(a, b, c, d, e, f) {
    e.exports = {
        getName: function() {
            return b("SessionNameConfig").seed
        }
    }
}), null);
__d("bind", [], (function(a, b, c, d, e, f) {
    function a(a, b) {
        var c = Array.prototype.slice.call(arguments, 2);
        if (typeof b !== "string") return Function.prototype.bind.apply(b, [a].concat(c));

        function d() {
            var d = c.concat(Array.prototype.slice.call(arguments));
            if (a[b]) return a[b].apply(a, d)
        }
        d.toString = function() {
            return "bound lazily: " + a[b]
        };
        return d
    }
    e.exports = a
}), null);
__d("errorCode", [], (function(a, b, c, d, e, f) {
    "use strict";

    function a(a) {
        throw new Error('errorCode("' + a + '"): This should not happen. Oh noes!')
    }
    e.exports = a
}), null);
__d("executeAfter", [], (function(a, b, c, d, e, f) {
    function a(a, b, c) {
        return function() {
            a.apply(c || this, arguments), b.apply(c || this, arguments)
        }
    }
    e.exports = a
}), null);
__d("FbtErrorListenerWWW", ["FBLogger", "killswitch"], (function(a, b, c, d, e, f) {
    a = function() {
        "use strict";

        function a(a) {
            this.$1 = a.hash, this.$2 = a.translation
        }
        var c = a.prototype;
        c.onStringSerializationError = function(a) {
            var c = "Context not logged.";
            if (!b("killswitch")("JS_RELIABILITY_FBT_LOGGING")) try {
                var d = JSON.stringify(a);
                d != null && (c = d.substr(0, 250))
            } catch (a) {
                c = a.message
            }
            d = (a == null ? void 0 : (d = a.constructor) == null ? void 0 : d.name) || "";
            b("FBLogger")("fbt").blameToPreviousDirectory().blameToPreviousDirectory().mustfix('Converting to a string will drop content data. Hash="%s" Translation="%s" Content="%s" (type=%s,%s)', this.$1, this.$2, c, typeof a, d)
        };
        c.onStringMethodUsed = function(a) {
            b("FBLogger")("fbt").blameToPreviousDirectory().blameToPreviousDirectory().mustfix("Error using fbt string. Used method %s on Fbt string. Fbt string is designed to be immutable and should not be manipulated.", a)
        };
        return a
    }();
    e.exports = a
}), null);
__d("FbtPureStringResult", ["FbtResult"], (function(a, b, c, d, e, f) {
    a = function(a) {
        "use strict";
        babelHelpers.inheritsLoose(b, a);

        function b() {
            return a.apply(this, arguments) || this
        }
        return b
    }(b("FbtResult"));
    e.exports = a
}), null);
__d("getFbsResult", ["FbtPureStringResult"], (function(a, b, c, d, e, f) {
    function a(a) {
        return new(b("FbtPureStringResult"))(a.contents, a.errorListener)
    }
    e.exports = a
}), null);
__d("getTranslatedInput", [], (function(a, b, c, d, e, f) {
    var g = "B!N@$T",
        h = {};

    function a(a) {
        var b = a.table;
        typeof b === "string" && b.startsWith(g) && (b in h || (h[b] = JSON.parse(b.substring(g.length))), b = h[b]);
        return {
            table: b,
            args: a.args
        }
    }
    e.exports = a
}), null);
__d("FbtEnv", ["requireDeferred", "Banzai", "FbtErrorListenerWWW", "IntlViewerContext", "getFbsResult", "getFbtResult", "getTranslatedInput", "promiseDone", "FbtHooks"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("requireDeferred")("FbtLogging"),
        h = !1;
    a = {
        setupOnce: function() {
            if (h) return;
            h = !0;
            b("FbtHooks").register({
                errorListener: function(a) {
                    return new(b("FbtErrorListenerWWW"))(a)
                },
                getFbsResult: b("getFbsResult"),
                getFbtResult: b("getFbtResult"),
                getTranslatedInput: b("getTranslatedInput"),
                onTranslationOverride: function(a) {
                    return b("Banzai").post("intl_qt_event", {
                        hash: a
                    })
                },
                getViewerContext: function() {
                    return b("IntlViewerContext")
                },
                logImpression: function(a) {
                    return b("promiseDone")(g.load().then(function(b) {
                        return b == null ? void 0 : b.logImpression(a)
                    }))
                }
            })
        }
    };
    e.exports = a
}), null);
__d("FbtHooksImpl", [], (function(a, b, c, d, e, f) {
    var g = {};
    a = {
        getErrorListener: function(a) {
            return g.errorListener == null ? void 0 : g.errorListener(a)
        },
        logImpression: function(a) {
            g.logImpression == null ? void 0 : g.logImpression(a)
        },
        onTranslationOverride: function(a) {
            g.onTranslationOverride == null ? void 0 : g.onTranslationOverride(a)
        },
        getFbsResult: function(a) {
            return g.getFbsResult(a)
        },
        getFbtResult: function(a) {
            return g.getFbtResult(a)
        },
        getTranslatedInput: function(a) {
            var b;
            return (b = g.getTranslatedInput == null ? void 0 : g.getTranslatedInput(a)) != null ? b : a
        },
        getViewerContext: function() {
            return g.getViewerContext()
        },
        register: function(a) {
            Object.assign(g, a)
        }
    };
    e.exports = a
}), null);
__d("FbtHooks", ["FbtEnv", "FbtHooksImpl"], (function(a, b, c, d, e, f) {
    e.exports = b("FbtHooksImpl"), b("FbtEnv").setupOnce()
}), null);
__d("FbtTable", ["invariant"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = {
        ARG: {
            INDEX: 0,
            SUBSTITUTION: 1
        },
        access: function(a, b, c) {
            if (c >= b.length) {
                typeof a === "string" || Array.isArray(a) || g(0, 21388, JSON.stringify(a));
                return a
            }
            var d = b[c];
            d = d[h.ARG.INDEX];
            if (d == null) return h.access(a, b, c + 1);
            typeof a !== "string" && !Array.isArray(a) || g(0, 20954, typeof a);
            for (var e = 0; e < d.length; ++e) {
                var f = a[d[e]];
                if (f == null) continue;
                f = h.access(f, b, c + 1);
                if (f != null) return f
            }
            return null
        }
    };
    e.exports = h
}), null);
__d("FbtTableAccessor", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        getEnumResult: function(a) {
            return [
                [a], null
            ]
        },
        getGenderResult: function(a, b, c) {
            return [a, b]
        },
        getNumberResult: function(a, b, c) {
            return [a, b]
        },
        getSubstitution: function(a) {
            return [null, a]
        },
        getPronounResult: function(a) {
            return [
                [a, "*"], null
            ]
        }
    };
    e.exports = a
}), null);
__d("FbtNumberType", ["IntlNumberTypeConfig", "IntlVariations"], (function(a, b, c, d, e, f) {
    a = new Function("IntlVariations", '"use strict"; return (function(n) {' + b("IntlNumberTypeConfig").impl + "});")(b("IntlVariations"));
    e.exports = {
        getVariation: a
    }
}), null);
__d("IntlNumberType", ["FbtNumberType"], (function(a, b, c, d, e, f) {
    a = {
        get: function(a) {
            return b("FbtNumberType")
        }
    };
    e.exports = a
}), null);
__d("IntlVariationResolverImpl", ["invariant", "FbtHooks", "IntlNumberType", "IntlVariations"], (function(a, b, c, d, e, f, g) {
    var h = "_1";
    a = {
        EXACTLY_ONE: h,
        getNumberVariations: function(a) {
            var c = b("IntlNumberType").get(b("FbtHooks").getViewerContext().locale).getVariation(a);
            c & b("IntlVariations").BITMASK_NUMBER || g(0, 11647, c, typeof c);
            return a === 1 ? [h, c, "*"] : [c, "*"]
        },
        getGenderVariations: function(a) {
            a & b("IntlVariations").BITMASK_GENDER || g(0, 11648, a, typeof a);
            return [a, "*"]
        }
    };
    e.exports = a
}), null);
__d("IntlVariationResolver", ["IntlHoldoutGK", "IntlVariationResolverImpl"], (function(a, b, c, d, e, f) {
    var g = b("IntlVariationResolverImpl").EXACTLY_ONE;
    a = {
        getNumberVariations: function(a) {
            return b("IntlHoldoutGK").inIntlHoldout ? a === 1 ? [g, "*"] : ["*"] : b("IntlVariationResolverImpl").getNumberVariations(a)
        },
        getGenderVariations: function(a) {
            return b("IntlHoldoutGK").inIntlHoldout ? ["*"] : b("IntlVariationResolverImpl").getGenderVariations(a)
        }
    };
    e.exports = a
}), null);
__d("NumberFormatConsts", ["NumberFormatConfig"], (function(a, b, c, d, e, f) {
    a = {
        get: function(a) {
            return b("NumberFormatConfig")
        }
    };
    e.exports = a
}), null);
__d("escapeRegex", [], (function(a, b, c, d, e, f) {
    "use strict";

    function a(a) {
        return a.replace(/([.?*+\^$\[\]\\(){}|\-])/g, "\\$1")
    }
    e.exports = a
}), null);
__d("intlNumUtils", ["FbtHooks", "NumberFormatConsts", "escapeRegex"], (function(a, b, c, d, e, f) {
    var g = 3;
    f = ["\u0433\u0440\u043d.", "\u0434\u0435\u043d.", "\u043b\u0432.", "\u043c\u0430\u043d.", "\u0564\u0580.", "\u062c.\u0645.", "\u062f.\u0625.", "\u062f.\u0627.", "\u062f.\u0628.", "\u062f.\u062a.", "\u062f.\u062c.", "\u062f.\u0639.", "\u062f.\u0643.", "\u062f.\u0644.", "\u062f.\u0645.", "\u0631.\u0633.", "\u0631.\u0639.", "\u0631.\u0642.", "\u0631.\u064a.", "\u0644.\u0633.", "\u0644.\u0644.", "\u0783.", "B/.", "Bs.", "Fr.", "kr.", "L.", "p.", "S/."];
    var h = {};

    function i(a) {
        h[a] || (h[a] = new RegExp(a, "i"));
        return h[a]
    }
    var j = i(f.reduce(function(a, c, d) {
        return a + (d ? "|" : "") + "(" + b("escapeRegex")(c) + ")"
    }, ""));

    function k(a, c, d, e, f, h, j) {
        d === void 0 && (d = "");
        e === void 0 && (e = ".");
        f === void 0 && (f = 0);
        h === void 0 && (h = {
            primaryGroupSize: g,
            secondaryGroupSize: g
        });
        var k = h.primaryGroupSize || g;
        h = h.secondaryGroupSize || k;
        j = j && j.digits;
        var m;
        c == null ? m = a.toString() : typeof a === "string" ? m = q(a, c) : m = o(a, c);
        a = m.split(".");
        c = a[0];
        m = a[1];
        if (Math.abs(parseInt(c, 10)).toString().length >= f) {
            a = "$1" + d + "$2$3";
            f = "(\\d)(\\d{" + (k - 0) + "})($|\\D)";
            k = c.replace(i(f), a);
            if (k != c) {
                c = k;
                f = "(\\d)(\\d{" + (h - 0) + "})(" + b("escapeRegex")(d) + ")";
                h = i(f);
                while ((k = c.replace(h, a)) != c) c = k
            }
        }
        j != null && (c = l(c, j), m = m && l(m, j));
        d = c;
        m && (d += e + m);
        return d
    }

    function l(a, b) {
        var c = "";
        for (var d = 0; d < a.length; ++d) {
            var e = b[a.charCodeAt(d) - 48];
            c += e !== void 0 ? e : a[d]
        }
        return c
    }

    function a(a, c) {
        var d = b("NumberFormatConsts").get(b("FbtHooks").getViewerContext().locale);
        return k(a, c, "", d.decimalSeparator, d.minDigitsForThousandsSeparator, d.standardDecimalPatternInfo, d.numberingSystemData)
    }

    function m(a, c) {
        var d = b("NumberFormatConsts").get(b("FbtHooks").getViewerContext().locale);
        return k(a, c, d.numberDelimiter, d.decimalSeparator, d.minDigitsForThousandsSeparator, d.standardDecimalPatternInfo, d.numberingSystemData)
    }

    function n(a) {
        return a && Math.floor(Math.log10(Math.abs(a)))
    }

    function c(a, b, c) {
        var d = n(a),
            e = a;
        d < c && (e = a * Math.pow(10, -d + c));
        a = Math.pow(10, n(e) - c + 1);
        e = Math.round(e / a) * a;
        if (d < c) {
            e /= Math.pow(10, -d + c);
            if (b == null) return m(e, c - d - 1)
        }
        return m(e, b)
    }

    function o(a, b) {
        b = b == null ? 0 : b;
        var c = Math.pow(10, b);
        a = a;
        a = Math.round(a * c) / c;
        a += "";
        if (!b) return a;
        if (a.indexOf("e-") !== -1) return a;
        c = a.indexOf(".");
        var d;
        c == -1 ? (a += ".", d = b) : d = b - (a.length - c - 1);
        for (var b = 0, c = d; b < c; b++) a += "0";
        return a
    }
    var p = function(a, b) {
        a = a;
        for (var c = 0; c < b; c++) a += "0";
        return a
    };

    function q(a, b) {
        var c = a.indexOf("."),
            d = c === -1 ? a : a.slice(0, c);
        a = c === -1 ? "" : a.slice(c + 1);
        return b != null ? d + "." + p(a.slice(0, b), b - a.length) : d
    }

    function r(a, c, d) {
        d === void 0 && (d = "");
        var e = t(),
            f = a;
        e && (f = a.split("").map(function(a) {
            return e[a] || a
        }).join("").trim());
        f = f.replace(/^[^\d]*\-/, "\x02");
        f = f.replace(j, "");
        a = b("escapeRegex")(c);
        c = b("escapeRegex")(d);
        d = i("^[^\\d]*\\d.*" + a + ".*\\d[^\\d]*$");
        if (!d.test(f)) {
            d = i("(^[^\\d]*)" + a + "(\\d*[^\\d]*$)");
            if (d.test(f)) {
                f = f.replace(d, "$1\x01$2");
                return s(f)
            }
            d = i("^[^\\d]*[\\d " + b("escapeRegex")(c) + "]*[^\\d]*$");
            d.test(f) || (f = "");
            return s(f)
        }
        d = i("(^[^\\d]*[\\d " + c + "]*)" + a + "(\\d*[^\\d]*$)");
        f = d.test(f) ? f.replace(d, "$1\x01$2") : "";
        return s(f)
    }

    function s(a) {
        a = a.replace(/[^0-9\u0001\u0002]/g, "").replace("\x01", ".").replace("\x02", "-");
        var b = Number(a);
        return a === "" || isNaN(b) ? null : b
    }

    function t() {
        var a = b("NumberFormatConsts").get(b("FbtHooks").getViewerContext().locale),
            c = {};
        a = a.numberingSystemData && a.numberingSystemData.digits;
        if (a == null) return null;
        for (var d = 0; d < a.length; d++) c[a.charAt(d)] = d.toString();
        return c
    }

    function d(a) {
        var c = b("NumberFormatConsts").get(b("FbtHooks").getViewerContext().locale);
        return r(a, c.decimalSeparator || ".", c.numberDelimiter)
    }
    var u = {
        formatNumber: a,
        formatNumberRaw: k,
        formatNumberWithThousandDelimiters: m,
        formatNumberWithLimitedSigFig: c,
        parseNumber: d,
        parseNumberRaw: r,
        truncateLongNumber: q,
        getFloatString: function(a, b, c) {
            a = String(a);
            a = a.split(".");
            b = u.getIntegerString(a[0], b);
            return a.length === 1 ? b : b + c + a[1]
        },
        getIntegerString: function(a, b) {
            b = b;
            b === "" && (b = ",");
            a = String(a);
            var c = /(\d+)(\d{3})/;
            while (c.test(a)) a = a.replace(c, "$1" + b + "$2");
            return a
        }
    };
    e.exports = u
}), null);
__d("IntlPhonologicalRewrites", ["IntlPhonologicalRules"], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        get: function(a) {
            return b("IntlPhonologicalRules")
        }
    };
    e.exports = a
}), null);
__d("IntlPunctuation", ["FbtHooks", "IntlPhonologicalRewrites"], (function(a, b, c, d, e, f) {
    d = "[.!?\u3002\uff01\uff1f\u0964\u2026\u0eaf\u1801\u0e2f\uff0e]";
    var g = new RegExp(d + "[)\"'\xbb\u0f3b\u0f3d\u2019\u201d\u203a\u3009\u300b\u300d\u300f\u3011\u3015\u3017\u3019\u301b\u301e\u301f\ufd3f\uff07\uff09\uff3d\\s]*$"),
        h = {};

    function i(a) {
        var b;
        b = (b = a) != null ? b : "";
        var c = h[b];
        c == null && (c = h[b] = j(a));
        return c
    }

    function j(a) {
        var c = [];
        a = b("IntlPhonologicalRewrites").get(a);
        for (var d in a.patterns) {
            var e = a.patterns[d];
            for (var f in a.meta) {
                var g = new RegExp(f.slice(1, -1), "g"),
                    h = a.meta[f];
                d = d.replace(g, h);
                e = e.replace(g, h)
            }
            e === "javascript" && (e = function(a) {
                return a.slice(1).toLowerCase()
            });
            c.push([new RegExp(d.slice(1, -1), "g"), e])
        }
        return c
    }

    function a(a) {
        var c = i(b("FbtHooks").getViewerContext().locale);
        a = a;
        for (var d = 0; d < c.length; d++) {
            var e = c[d],
                f = e[0];
            e = e[1];
            a = a.replace(f, e)
        }
        return a.replace(/\x01/g, "")
    }

    function c(a) {
        return typeof a !== "string" ? !1 : g.test(a)
    }
    e.exports = {
        PUNCT_CHAR_CLASS: d,
        endsInPunct: c,
        applyPhonologicalRules: a
    }
}), null);
__d("substituteTokens", ["invariant", "IntlPunctuation"], (function(a, b, c, d, e, f, g) {
    var h = new RegExp("\\{([^}]+)\\}(" + b("IntlPunctuation").PUNCT_CHAR_CLASS + "*)", "g");

    function i(a) {
        return a
    }

    function a(a, c) {
        if (c == null) return a;
        typeof c === "object" || g(0, 6041, a);
        var d = [],
            e = [];
        a = a.replace(h, function(a, f, g) {
            a = c[f];
            if (a != null && typeof a === "object") {
                d.push(a);
                e.push(f);
                return "\x17" + g
            } else if (a === null) return "";
            return String(a) + (b("IntlPunctuation").endsInPunct(String(a)) ? "" : g)
        }).split("\x17").map(b("IntlPunctuation").applyPhonologicalRules);
        if (a.length === 1) return a[0];
        var f = a[0] !== "" ? [a[0]] : [];
        for (var j = 0; j < d.length; j++) f.push(i(d[j])), a[j + 1] !== "" && f.push(a[j + 1]);
        return f
    }
    e.exports = a
}), null);
__d("fbt", ["invariant", "FbtEnv", "FbtHooks", "FbtQTOverrides", "FbtResultBase", "FbtTable", "FbtTableAccessor", "GenderConst", "IntlVariationResolver", "intlNumUtils", "substituteTokens"], (function(a, b, c, d, e, f, g) {
    b("FbtEnv").setupOnce();
    var h = b("FbtQTOverrides").overrides,
        i = b("IntlVariationResolver").getGenderVariations,
        j = b("IntlVariationResolver").getNumberVariations,
        k = !1,
        l = b("FbtTable").ARG,
        m = {
            NUMBER: 0,
            GENDER: 1
        },
        n = {
            OBJECT: 0,
            POSSESSIVE: 1,
            REFLEXIVE: 2,
            SUBJECT: 3
        },
        o = {};
    c = function() {};
    c._ = function(a, c, d) {
        if (((d == null ? void 0 : d.hk) || (d == null ? void 0 : d.ehk)) && k) return {
            text: a,
            fbt: !0,
            hashKey: d.hk
        };
        a = b("FbtHooks").getTranslatedInput({
            table: a,
            args: c,
            options: d
        });
        c = a.table;
        d = a.args;
        a = {};
        if (c.__vcg != null) {
            d = d || [];
            var e = b("FbtHooks").getViewerContext();
            e = e.GENDER;
            var f = i(e);
            d.unshift(b("FbtTableAccessor").getGenderResult(f, null, e))
        }
        d && (typeof c !== "string" && (c = b("FbtTable").access(c, d, 0)), a = Object.assign.apply(Object, [{}].concat(d.map(function(a) {
            return a[l.SUBSTITUTION] || {}
        }))), c !== null || g(0, 479));
        var j;
        if (Array.isArray(c)) {
            f = c[0];
            j = c[1];
            e = "1_" + j;
            h[e] != null && h[e] !== "" && (f = h[e], b("FbtHooks").onTranslationOverride(j));
            b("FbtHooks").logImpression(j)
        } else if (typeof c === "string") f = c;
        else throw new Error("Table access did not result in string: " + (c === void 0 ? "undefined" : JSON.stringify(c)) + ", Type: " + typeof c);
        d = o[f];
        e = p(a);
        if (d && !e) return d;
        else {
            c = b("substituteTokens")(f, a);
            d = r(c, f, j);
            e || (o[f] = d);
            return d
        }
    };

    function p(a) {
        for (var b in a) return !0;
        return !1
    }
    c._enum = function(a, c) {
        return b("FbtTableAccessor").getEnumResult(a)
    };
    c._subject = function(a) {
        return b("FbtTableAccessor").getGenderResult(i(a), null, a)
    };
    c._param = function(a, c, d) {
        var e;
        e = (e = {}, e[a] = c, e);
        if (d)
            if (d[0] === m.NUMBER) {
                var f = d.length > 1 ? d[1] : c;
                typeof f === "number" || g(0, 484);
                var h = j(f);
                typeof c === "number" && (e[a] = b("intlNumUtils").formatNumberWithThousandDelimiters(c));
                return b("FbtTableAccessor").getNumberResult(h, e, f)
            } else if (d[0] === m.GENDER) {
            d.length > 1 || g(0, 485);
            a = d[1];
            c = i(a);
            return b("FbtTableAccessor").getGenderResult(c, e, a)
        } else g(0, 486);
        else return b("FbtTableAccessor").getSubstitution(e)
    };
    c._plural = function(a, c, d) {
        var e = j(a),
            f = {};
        c && (typeof d === "number" ? f[c] = b("intlNumUtils").formatNumberWithThousandDelimiters(d) : f[c] = d || b("intlNumUtils").formatNumberWithThousandDelimiters(a));
        return b("FbtTableAccessor").getNumberResult(e, f, a)
    };
    c._pronoun = function(a, c, d) {
        c !== b("GenderConst").NOT_A_PERSON || !d || !d.human || g(0, 487);
        d = q(a, c);
        return b("FbtTableAccessor").getPronounResult(d)
    };

    function q(a, c) {
        switch (c) {
            case b("GenderConst").NOT_A_PERSON:
                return a === n.OBJECT || a === n.REFLEXIVE ? b("GenderConst").NOT_A_PERSON : b("GenderConst").UNKNOWN_PLURAL;
            case b("GenderConst").FEMALE_SINGULAR:
            case b("GenderConst").FEMALE_SINGULAR_GUESS:
                return b("GenderConst").FEMALE_SINGULAR;
            case b("GenderConst").MALE_SINGULAR:
            case b("GenderConst").MALE_SINGULAR_GUESS:
                return b("GenderConst").MALE_SINGULAR;
            case b("GenderConst").MIXED_SINGULAR:
            case b("GenderConst").FEMALE_PLURAL:
            case b("GenderConst").MALE_PLURAL:
            case b("GenderConst").NEUTER_PLURAL:
            case b("GenderConst").UNKNOWN_PLURAL:
                return b("GenderConst").UNKNOWN_PLURAL;
            case b("GenderConst").NEUTER_SINGULAR:
            case b("GenderConst").UNKNOWN_SINGULAR:
                return a === n.REFLEXIVE ? b("GenderConst").NOT_A_PERSON : b("GenderConst").UNKNOWN_PLURAL
        }
        return b("GenderConst").NOT_A_PERSON
    }
    c._name = function(a, c, d) {
        var e = i(d),
            f = {};
        f[a] = c;
        return b("FbtTableAccessor").getGenderResult(e, f, d)
    };

    function r(a, c, d) {
        a = typeof a === "string" ? [a] : a;
        var e = b("FbtHooks").getErrorListener({
            translation: c,
            hash: d
        });
        a = b("FbtHooks").getFbtResult({
            contents: a,
            errorListener: e,
            patternString: c,
            patternHash: d
        });
        return a
    }
    c.enableJsonExportMode = function() {
        k = !0
    };
    c.disableJsonExportMode = function() {
        k = !1
    };

    function a(a) {
        return a instanceof b("FbtResultBase")
    }
    c.isFbtInstance = a;
    e.exports = c
}), null);
__d("getAsyncHeaders", ["ZeroCategoryHeader", "isFacebookURI"], (function(a, b, c, d, e, f) {
    function a(a) {
        var c = {};
        b("isFacebookURI")(a) && b("ZeroCategoryHeader").value && (c[b("ZeroCategoryHeader").header] = b("ZeroCategoryHeader").value);
        return c
    }
    e.exports = a
}), null);
__d("AsyncRequest", ["errorCode", "fbt", "invariant", "Promise", "Arbiter", "ArtilleryAsyncRequestTracingAnnotator", "AsyncDOM", "AsyncRequestConfig", "AsyncResponse", "Bootloader", "CSS", "Deferred", "DTSG", "DTSG_ASYNC", "Env", "ErrorGuard", "ErrorXFBDebug", "Event", "FBLogger", "FetchStreamTransport", "HasteResponse", "HTTPErrors", "JSCC", "Parent", "PHPQuerySerializer", "ProfilingCounters", "ResourceTimingsStore", "ResourceTypes", "ServerJS", "SessionName", "TimeSlice", "URI", "UserAgent_DEPRECATED", "ZeroRewrites", "bind", "clearTimeout", "emptyFunction", "evalGlobal", "executeAfter", "ge", "getAsyncHeaders", "getAsyncParams", "goURI", "ifRequired", "isEmpty", "isFacebookURI", "isInternalFBURI", "isMessengerDotComURI", "isWorkplaceDotComURI", "killswitch", "promiseDone", "replaceTransportMarkers", "setTimeout", "setTimeoutAcrossTransitions"], (function $module_AsyncRequest(global, require, requireDynamic, requireLazy, module, exports, errorCode, fbt, invariant) {
    "use strict";
    var c_ErrorGuard, c_URI, c_Env, c_isEmpty, c_PHPQuerySerializer, nineteenSecInMs = 19e3,
        INTERNAL_SERVER_ERROR = 500,
        NO_NETWORK_CONNECTION = 1006,
        NETWORK_ERROR = 1004,
        ABORTED_DUE_TO_PAGE_TRANSITION = 1010,
        WARNING_ERROR_CODES = new Set([INTERNAL_SERVER_ERROR, ABORTED_DUE_TO_PAGE_TRANSITION, NETWORK_ERROR, NO_NETWORK_CONNECTION]);

    function hasUnloaded() {
        try {
            return !window.domready
        } catch (_unused) {
            return !0
        }
    }

    function supportsProgress(transport) {
        return "onprogress" in transport
    }

    function supportsUploadProgress(transport) {
        return "upload" in transport && "onprogress" in transport.upload
    }

    function supportsCrossOrigin(transport) {
        return "withCredentials" in transport
    }

    function isNetworkError(transport) {
        return transport.status in {
            0: 1,
            12029: 1,
            12030: 1,
            12031: 1,
            12152: 1
        }
    }

    function validateResponseHandler(handler) {
        var valid = !handler || typeof handler === "function";
        valid || require("FBLogger")("asyncresponse").mustfix("AsyncRequest response handlers must be functions. Pass a function, or use bind() to build one.");
        return valid
    }
    var last_id = 2,
        id_threshold = last_id,
        ignore_id_update = !1;
    require("Arbiter").subscribe("page_transition", function(_, message) {
        !ignore_id_update ? id_threshold = message.id : ignore_id_update = !1
    });
    var JSON_HIJACKING_SHIELD = "for (;;);",
        JSON_HIJACKING_SHIELD_LEN = JSON_HIJACKING_SHIELD.length,
        AsyncRequest = function() {
            function AsyncRequest(uri) {
                var _this = this,
                    emptyFunction;
                this._allowIrrelevantRequests = !1;
                this._delayPreDisplayJS = !1;
                this._shouldReplaceTransportMarkers = !1;
                this._dispatchErrorResponse = function(asyncResponse, errorHandler) {
                    var error = asyncResponse.getError();
                    _this.clearStatusIndicator();
                    if (!_this._isRelevant() || error === ABORTED_DUE_TO_PAGE_TRANSITION) {
                        _this.abort();
                        return
                    }
                    if (_this._isServerDialogErrorCode(error)) {
                        var is_confirmation = error == 1357008 || error == 1357007;
                        _this.interceptHandler(asyncResponse);
                        error == 1357041 ? _this._solveQuicksandChallenge(asyncResponse) : error == 1357007 ? _this._displayServerDialog(asyncResponse, is_confirmation, !0) : _this._displayServerDialog(asyncResponse, is_confirmation)
                    } else if (_this.initialHandler(asyncResponse) !== !1) {
                        require("clearTimeout")(_this.timer);
                        try {
                            errorHandler(asyncResponse)
                        } catch (e) {
                            _this.finallyHandler(asyncResponse);
                            throw e
                        }
                        _this.finallyHandler(asyncResponse)
                    }
                };
                this._onStateChange = function() {
                    var transport = _this.transport;
                    if (!transport) return;
                    try {
                        AsyncRequest._inflightCount--;
                        require("ResourceTimingsStore").measureResponseReceived(require("ResourceTypes").XHR, _this.resourceTimingStoreUID);
                        try {
                            transport.getResponseHeader("X-FB-Debug") && (_this._xFbServer = transport.getResponseHeader("X-FB-Debug"), require("ErrorXFBDebug").add(_this._xFbServer))
                        } catch (_unused2) {}
                        if (transport.status >= 200 && transport.status < 300) AsyncRequest.lastSuccessTime = Date.now(), _this._handleXHRResponse(transport);
                        else if (require("UserAgent_DEPRECATED").webkit() && typeof transport.status === "undefined") _this._invokeErrorHandler(1002);
                        else if (require("AsyncRequestConfig").retryOnNetworkError && isNetworkError(transport) && _this.remainingRetries > 0 && !_this._requestTimeout) {
                            _this.remainingRetries--;
                            delete _this.transport;
                            _this.send(!0);
                            return
                        } else _this._invokeErrorHandler();
                        _this.getOption("asynchronous_DEPRECATED") !== !1 && delete _this.transport
                    } catch (exception) {
                        if (hasUnloaded()) return;
                        delete _this.transport;
                        _this.remainingRetries > 0 ? (_this.remainingRetries--, _this.send(!0)) : (_this.getOption("suppressErrorAlerts") || require("FBLogger")("AsyncRequest").catching(exception).mustfix("AsyncRequest exception when attempting to handle a state change"), _this._invokeErrorHandler(1007))
                    }
                };
                this.continuation = require("TimeSlice").getPlaceholderReusableContinuation();
                this.transport = null;
                this.method = "POST";
                this.uri = "";
                this.timeout = null;
                this.timer = null;
                this.initialHandler = emptyFunction = require("emptyFunction");
                this.handler = null;
                this.uploadProgressHandler = null;
                this.errorHandler = require("AsyncResponse").defaultErrorHandler;
                this.transportErrorHandler = null;
                this.timeoutHandler = null;
                this.interceptHandler = emptyFunction;
                this.finallyHandler = emptyFunction;
                this.abortHandler = emptyFunction;
                this.serverDialogCancelHandler = null;
                this.relativeTo = null;
                this.statusElement = null;
                this.statusClass = "";
                this.data = {};
                this.headers = {};
                this.file = null;
                this.context = {};
                this.readOnly = !1;
                this.writeRequiredParams = [];
                this.remainingRetries = 0;
                this.userActionID = "-";
                this.allowInteractionServerTracing = !0;
                this.resourceTimingStoreUID = require("ResourceTimingsStore").getUID(require("ResourceTypes").XHR, uri != null ? uri.toString() : "");
                this.flushedResponseTextParseIndex = 0;
                this.option = {
                    asynchronous_DEPRECATED: !0,
                    suppressErrorHandlerWarning: !1,
                    suppressEvaluation: !1,
                    suppressErrorAlerts: !1,
                    retries: 0,
                    jsonp: !1,
                    bundle: !1,
                    useIframeTransport: !1,
                    handleErrorAfterUnload: !1,
                    useFetchWithIframeFallback: !1
                };
                this.transportErrorHandler = require("bind")(this, "errorHandler");
                uri !== void 0 && this.setURI(uri);
                this.setAllowCrossPageTransition(require("AsyncRequestConfig").asyncRequestsSurviveTransitionsDefault || !1)
            }
            var _proto = AsyncRequest.prototype;
            _proto._dispatchResponse = function _dispatchResponse(asyncResponse) {
                this.clearStatusIndicator();
                if (!this._isRelevant()) {
                    this._invokeErrorHandler(ABORTED_DUE_TO_PAGE_TRANSITION);
                    return
                }
                if (this.initialHandler(asyncResponse) === !1) return;
                require("clearTimeout")(this.timer);
                if (asyncResponse.jscc_map) {
                    var jsccMap = require("JSCC").parse(asyncResponse.jscc_map);
                    require("JSCC").init(jsccMap)
                }
                var suppress_js, handler = this.getHandler();
                if (handler) try {
                    suppress_js = this._shouldSuppressJS(handler(asyncResponse))
                } catch (e) {
                    asyncResponse.is_last && this.finallyHandler(asyncResponse);
                    throw e
                }
                suppress_js || this._handleJSResponse(asyncResponse);
                asyncResponse.is_last && this.finallyHandler(asyncResponse)
            };
            _proto._shouldSuppressJS = function _shouldSuppressJS(handler_return_value) {
                return handler_return_value === AsyncRequest.suppressOnloadToken
            };
            _proto._handlePreDisplayServerJS = function _handlePreDisplayServerJS(serverJS, preDisplayJSMods) {
                var _displayStarted = !1,
                    preDisplayPromises = [],
                    registerToBlockDisplayUntilDone_DONOTUSE = function registerToBlockDisplayUntilDone_DONOTUSE() {
                        if (_displayStarted) {
                            require("FBLogger")("AsyncResponse").warn("registerToBlockDisplayUntilDone_DONOTUSE called after AsyncResponse display started. This is a no-op.");
                            return function() {}
                        }
                        var timeoutId, deferrable = new(require("Deferred"))();
                        preDisplayPromises.push(deferrable.getPromise());
                        return require("TimeSlice").guard(function() {
                            timeoutId && require("clearTimeout")(timeoutId), deferrable.resolve()
                        }, "AsyncRequestDisplayBlockingEvent", {
                            propagationType: require("TimeSlice").PropagationType.EXECUTION
                        })
                    };
                serverJS.handle(preDisplayJSMods, {
                    bigPipeContext: {
                        registerToBlockDisplayUntilDone_DONOTUSE: registerToBlockDisplayUntilDone_DONOTUSE
                    }
                });
                _displayStarted = !0;
                return preDisplayPromises
            };
            _proto._hasEvalDomOp = function _hasEvalDomOp(domOps) {
                return domOps && domOps.length ? domOps.some(function(op) {
                    return op[0] === "eval"
                }) : !1
            };
            _proto._handleJSResponse = function _handleJSResponse(asyncResponse) {
                var relativeTo = this.getRelativeTo(),
                    domOps = asyncResponse.domops,
                    dtsgToken = asyncResponse.dtsgToken,
                    dtsgAsyncGetToken = asyncResponse.dtsgAsyncGetToken,
                    jsMods = asyncResponse.jsmods,
                    serverJS, savedServerJSInstance = asyncResponse.savedServerJSInstance;
                savedServerJSInstance && savedServerJSInstance instanceof require("ServerJS") ? serverJS = savedServerJSInstance : serverJS = new(require("ServerJS"))();
                serverJS.setRelativeTo(relativeTo);
                if (jsMods) {
                    var preDisplayJSMods = {};
                    preDisplayJSMods.define = jsMods.define;
                    preDisplayJSMods.instances = jsMods.instances;
                    preDisplayJSMods.markup = jsMods.markup;
                    delete jsMods.define;
                    delete jsMods.instances;
                    delete jsMods.markup;
                    this._hasEvalDomOp(domOps) && (preDisplayJSMods.elements = jsMods.elements, delete jsMods.elements);
                    serverJS.handle(preDisplayJSMods)
                }
                dtsgToken && require("DTSG").setToken(dtsgToken);
                dtsgAsyncGetToken && require("DTSG_ASYNC").setToken(dtsgAsyncGetToken);
                domOps && require("AsyncDOM").invoke(domOps, relativeTo);
                jsMods && serverJS.handle(jsMods);
                this._handleJSRegisters(asyncResponse, "onload");
                this._handleJSRegisters(asyncResponse, "onafterload")
            };
            _proto._handleJSRegisters = function _handleJSRegisters(asyncResponse, phase) {
                var registers = asyncResponse[phase];
                if (registers)
                    for (var ii = 0; ii < registers.length; ii++)(c_ErrorGuard || (c_ErrorGuard = require("ErrorGuard"))).applyWithGuard(new Function(registers[ii]), this, [])
            };
            _proto.invokeResponseHandler = function invokeResponseHandler(interpreted) {
                if (typeof interpreted.redirect !== "undefined") {
                    require("setTimeout")(function() {
                        this.setURI(interpreted.redirect).send()
                    }.bind(this), 0);
                    return
                }
                if (interpreted.bootloadOnly !== void 0) {
                    var toBootload = typeof interpreted.bootloadOnly === "string" ? JSON.parse(interpreted.bootloadOnly) : interpreted.bootloadOnly,
                        _loop = function _loop() {
                            if (_isArray) {
                                if (_i >= _iterator.length) return "break";
                                _ref = _iterator[_i++]
                            } else {
                                _i = _iterator.next();
                                if (_i.done) return "break";
                                _ref = _i.value
                            }
                            var rsrcs = _ref;
                            require("TimeSlice").guard(function() {
                                require("Bootloader").loadPredictedResourceMap(rsrcs)
                            }, "Bootloader.loadPredictedResourceMap", {
                                root: !0
                            })()
                        };
                    for (var _iterator = toBootload, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                        var _ref, _ret = _loop();
                        if (_ret === "break") break
                    }
                    return
                }
                if (!this.handler && !this.errorHandler && !this.transportErrorHandler && !this.preBootloadHandler && this.initialHandler === require("emptyFunction") && this.finallyHandler === require("emptyFunction")) return;
                var response = interpreted.asyncResponse;
                if (typeof response !== "undefined") {
                    this._artilleryHandle != null && this._artilleryHandle(response);
                    if (!this._isRelevant()) {
                        this._invokeErrorHandler(ABORTED_DUE_TO_PAGE_TRANSITION);
                        return
                    }
                    response.inlinejs && require("evalGlobal")(response.inlinejs);
                    response.lid && (this._responseTime = Date.now(), global.CavalryLogger && (this.cavalry = global.CavalryLogger.getInstance(response.lid)), this.lid = response.lid);
                    require("HasteResponse").handleSRPayload(response);
                    var dispatch, arbiter_event;
                    if (response.getError() && !response.getErrorIsWarning()) {
                        var handler = this.getErrorHandler().bind(this);
                        dispatch = (c_ErrorGuard || (c_ErrorGuard = require("ErrorGuard"))).guard(this._dispatchErrorResponse, {
                            name: "AsyncRequest#_dispatchErrorResponse for " + this.getURI()
                        });
                        dispatch = dispatch.bind(this, response, handler);
                        arbiter_event = "error"
                    } else {
                        dispatch = (c_ErrorGuard || (c_ErrorGuard = require("ErrorGuard"))).guard(this._dispatchResponse.bind(this), {
                            name: "AsyncRequest#_dispatchResponse for " + this.getURI()
                        });
                        dispatch = dispatch.bind(this, response);
                        arbiter_event = "response";
                        var domOps = response.domops;
                        if (!this._delayPreDisplayJS && response.jsmods && response.jsmods.pre_display_requires && !this._hasEvalDomOp(domOps) && !require("killswitch")("ASYNC_REQUEST_EARLY_RENDERING_OF_PREDISPLAY_PRIORITY_JS")) {
                            var jsMods = response.jsmods,
                                preDisplayJSMods = {};
                            preDisplayJSMods.define = jsMods.define;
                            preDisplayJSMods.instances = jsMods.instances;
                            preDisplayJSMods.markup = jsMods.markup;
                            delete jsMods.define;
                            delete jsMods.instances;
                            delete jsMods.markup;
                            preDisplayJSMods.pre_display_requires = jsMods.pre_display_requires;
                            delete jsMods.pre_display_requires;
                            var serverJS = new(require("ServerJS"))();
                            serverJS.setRelativeTo(this.getRelativeTo());
                            response.savedServerJSInstance = serverJS;
                            var preDisplayPromises = this._handlePreDisplayServerJS(serverJS, preDisplayJSMods);
                            if (preDisplayPromises && preDisplayPromises.length) {
                                var realDispatch = dispatch;
                                dispatch = function dispatch() {
                                    require("promiseDone")(require("Promise").all(preDisplayPromises).then(realDispatch))
                                }
                            }
                        }
                    }
                    dispatch = require("executeAfter")(dispatch, function() {
                        require("Arbiter").inform("AsyncRequest/" + arbiter_event, {
                            request: this,
                            response: response
                        })
                    }.bind(this));
                    this.preBootloadHandler && this.preBootloadHandler(response);
                    response.css = response.css || [];
                    response.js = response.js || [];
                    require("Bootloader").loadResources(response.css.concat(response.js), require("AsyncRequestConfig").immediateDispatch ? dispatch : function() {
                        require("setTimeout")(dispatch, 0)
                    }, this.getURI())
                } else typeof interpreted.transportError !== "undefined" ? this._xFbServer ? this._invokeErrorHandler(1008) : this._invokeErrorHandler(1012) : this._invokeErrorHandler(1007)
            };
            _proto._invokeErrorHandler = function _invokeErrorHandler(explicitError) {
                var transport = this.transport;
                if (!transport) return;
                var error;
                if (this.responseText === "") error = 1002;
                else if (this._requestAborted) error = 1011;
                else {
                    try {
                        error = explicitError || transport.status || NETWORK_ERROR
                    } catch (_unused3) {
                        error = 1005
                    }!1 === navigator.onLine && (error = NO_NETWORK_CONNECTION)
                }
                var desc, summary, silent = !0;
                if (error === NO_NETWORK_CONNECTION) summary = fbt._("No network connection"), desc = fbt._("Your browser appears to be offline. Please check your Internet connection and try again.");
                else if (error >= 300 && error <= 399) {
                    summary = fbt._("Redirection");
                    desc = fbt._("Your access to Facebook was redirected or blocked by a third party at this time, please contact your ISP or reload.");
                    var location = transport.getResponseHeader("Location");
                    location && require("goURI")(location, !0);
                    silent = !0
                } else summary = fbt._("Oops!"), desc = fbt._("Something went wrong. We're working on getting this fixed as soon as we can. You may be able to try again.");
                var async_response = new(require("AsyncResponse"))(this, transport);
                Object.assign(async_response, {
                    error: error,
                    errorSummary: summary,
                    errorDescription: desc,
                    silentError: silent
                });
                require("setTimeout")(function() {
                    require("Arbiter").inform("AsyncRequest/error", {
                        request: this,
                        response: async_response
                    })
                }.bind(this), 0);
                if (hasUnloaded() && !this.getOption("handleErrorAfterUnload")) return;
                if (!this.transportErrorHandler) {
                    require("FBLogger")("asyncresponse").mustfix("Async request to %s failed with a %d error, but there was no error handler available to deal with it.", this.getURI(), error);
                    return
                }
                var error_handler = this.getTransportErrorHandler().bind(this);
                !(this.getOption("suppressErrorAlerts") || WARNING_ERROR_CODES.has(error)) ? require("FBLogger")("asyncresponse").addToCategoryKey(String(error)).mustfix("Async request failed with error %s: %s when requesting %s", error, desc.toString(), this.getURI()): WARNING_ERROR_CODES.has(error) && require("FBLogger")("asyncresponse").addToCategoryKey(String(error)).warn("Async request failed with error %s: %s when requesting %s", error, desc.toString(), this.getURI());
                (c_ErrorGuard || (c_ErrorGuard = require("ErrorGuard"))).applyWithGuard(this._dispatchErrorResponse, this, [async_response, error_handler])
            };
            _proto._isServerDialogErrorCode = function _isServerDialogErrorCode(error) {
                return error == 1357008 || error == 1357007 || error == 1357041 || error == 1442002 || error == 1357001
            };
            _proto._solveQuicksandChallenge = function _solveQuicksandChallenge(async_response) {
                var payload = async_response.getPayload();
                require("Bootloader").loadModules(["QuickSandSolver"], function(QuickSandSolver) {
                    QuickSandSolver.solveAndSendRequestBack(this, payload)
                }.bind(this), "AsyncRequest")
            };
            _proto._displayServerDialog = function _displayServerDialog(async_response, is_confirmation, allow_get) {
                allow_get === void 0 && (allow_get = !1);
                var payload = async_response.getPayload();
                if (payload.__dialog !== void 0) {
                    this._displayServerLegacyDialog(async_response, is_confirmation);
                    return
                }
                var json = payload.__dialogx;
                new(require("ServerJS"))().handle(json);
                require("Bootloader").loadModules(["ConfirmationDialog"], function(ConfirmationDialog) {
                    ConfirmationDialog.setupConfirmation(async_response, this, allow_get)
                }.bind(this), "AsyncRequest")
            };
            _proto._displayServerLegacyDialog = function _displayServerLegacyDialog(async_response, is_confirmation) {
                var model = async_response.getPayload().__dialog;
                require("Bootloader").loadModules(["Dialog"], function(Dialog) {
                    var dialog = new Dialog(model);
                    is_confirmation && dialog.setHandler(this._displayConfirmationHandler.bind(this, dialog));
                    dialog.setCancelHandler(function() {
                        var handler = this.getServerDialogCancelHandler();
                        try {
                            handler && handler(async_response)
                        } catch (e) {
                            throw e
                        } finally {
                            this.finallyHandler(async_response)
                        }
                    }.bind(this)).setCausalElement(this.relativeTo).show()
                }.bind(this), "AsyncRequest")
            };
            _proto._displayConfirmationHandler = function _displayConfirmationHandler(dialog) {
                this.data.confirmed = 1, Object.assign(this.data, dialog.getFormData()), this.send()
            };
            _proto.setJSONPTransport = function setJSONPTransport(transport) {
                transport.subscribe("response", this._handleJSONPResponse.bind(this)), transport.subscribe("abort", this._handleJSONPAbort.bind(this)), this.transport = transport
            };
            _proto._handleJSONPResponse = function _handleJSONPResponse(_, data) {
                var transport = this.transport;
                if (!transport) return;
                data.bootloadOnly || (this.is_first = this.is_first === void 0);
                var interpreted = this._interpretResponse(data);
                interpreted.asyncResponse && (interpreted.asyncResponse.is_first = this.is_first, interpreted.asyncResponse.is_last = transport.hasFinished());
                this.invokeResponseHandler(interpreted);
                transport.hasFinished() && delete this.transport
            };
            _proto._handleJSONPAbort = function _handleJSONPAbort() {
                this._invokeErrorHandler(), delete this.transport
            };
            _proto._handleXHRResponse = function _handleXHRResponse(transport) {
                var interpreted;
                if (this.getOption("suppressEvaluation")) interpreted = {
                    asyncResponse: new(require("AsyncResponse"))(this, transport)
                };
                else try {
                    this._handleFlushedResponse();
                    var text = transport.responseText;
                    text = this._filterOutFlushedText(text);
                    var safe_text = this._unshieldResponseText(text),
                        _response;
                    try {
                        _response = JSON.parse(safe_text)
                    } catch (error) {
                        _response = eval("(" + safe_text + ")"), require("FBLogger")("async_request").catching(error).warn("JSON.parse encountered an exception, fallback to eval. Endpoint: " + new(c_URI || (c_URI = require("URI")))(this.uri).getPath())
                    }
                    interpreted = this._interpretResponse(_response)
                } catch (error) {
                    interpreted = error.message, require("FBLogger")("async_request").catching(error).warn("Failed to handle response")
                }
                this.invokeResponseHandler(interpreted)
            };
            _proto._handleFlushedResponse = function _handleFlushedResponse() {
                var flushedResponseHandler = this.flushedResponseHandler,
                    transport = this.transport;
                if (flushedResponseHandler && transport) {
                    var jsonShieldIndex = transport.responseText.indexOf(JSON_HIJACKING_SHIELD),
                        flushedTextEndIndex = jsonShieldIndex === -1 ? transport.responseText.length : jsonShieldIndex;
                    flushedResponseHandler(transport.responseText.substring(this.flushedResponseTextParseIndex, flushedTextEndIndex));
                    this.flushedResponseTextParseIndex = flushedTextEndIndex
                }
            };
            _proto._unshieldResponseText = function _unshieldResponseText(text) {
                if (text.length <= JSON_HIJACKING_SHIELD_LEN) throw new Error("Response too short on async");
                var offset = 0;
                while (text.charAt(offset) == " " || text.charAt(offset) == "\n") offset++;
                offset && text.substring(offset, offset + JSON_HIJACKING_SHIELD_LEN) == JSON_HIJACKING_SHIELD;
                return text.substring(offset + JSON_HIJACKING_SHIELD_LEN)
            };
            _proto._filterOutFlushedText = function _filterOutFlushedText(text) {
                if (!this.flushedResponseHandler) return text;
                var index = text.indexOf(JSON_HIJACKING_SHIELD);
                return index < 0 ? text : text.substr(index)
            };
            _proto._interpretResponse = function _interpretResponse(response) {
                if (response.redirect) return {
                    redirect: response.redirect
                };
                if (response.bootloadOnly) return {
                    bootloadOnly: response.bootloadOnly
                };
                var isServerDialog = response.error && this._isServerDialogErrorCode(response.error);
                this._shouldReplaceTransportMarkers && response.payload && !isServerDialog && require("replaceTransportMarkers")({
                    relativeTo: this.getRelativeTo(),
                    bigPipeContext: null
                }, response.payload);
                var r = new(require("AsyncResponse"))(this);
                if (response.__ar != 1) require("FBLogger")("AsyncRequest").warn("AsyncRequest to endpoint %s returned a JSON response, but it is not properly formatted. The endpoint needs to provide a response using the AsyncResponse class in PHP.", this.getURI()), r.payload = response;
                else {
                    Object.assign(r, response);
                    var transport = this.transport;
                    transport && transport.getAllResponseHeaders !== void 0 && (r.responseHeaders = transport.getAllResponseHeaders())
                }
                return {
                    asyncResponse: r
                }
            };
            _proto._isMultiplexable = function _isMultiplexable() {
                if (this.getOption("jsonp") || this.getOption("useIframeTransport") || this.getOption("useFetchWithIframeFallback")) {
                    require("FBLogger")("AsyncRequest").mustfix("You cannot bundle AsyncRequest that uses jsonp or iframe transport.");
                    return !1
                }
                if (!require("isFacebookURI")(new(c_URI || (c_URI = require("URI")))(this.uri))) {
                    require("FBLogger")("AsyncRequest").mustfix("You can not bundle AsyncRequest sent to non-facebook URIs.  Uri: %s", this.getURI());
                    return !1
                }
                if (!this.getOption("asynchronous_DEPRECATED")) {
                    require("FBLogger")("AsyncRequest").mustfix("We cannot bundle synchronous AsyncRequests");
                    return !1
                }
                return !0
            };
            _proto.handleResponse = function handleResponse(response) {
                var interpreted = this._interpretResponse(response);
                this.invokeResponseHandler(interpreted)
            };
            _proto.setMethod = function setMethod(m) {
                this.method = m.toString().toUpperCase();
                return this
            };
            _proto.getMethod = function getMethod() {
                return this.method
            };
            _proto.setData = function setData(obj) {
                this.data = obj;
                return this
            };
            _proto.setRequestHeader = function setRequestHeader(name, value) {
                this.headers[name] = value;
                return this
            };
            _proto.setRawData = function setRawData(raw_data) {
                this.rawData = raw_data;
                return this
            };
            _proto.getData = function getData() {
                return this.data
            };
            _proto.setContextData = function setContextData(key, value, enabled) {
                enabled = enabled === void 0 ? !0 : enabled;
                enabled && (this.context["_log_" + key] = value);
                return this
            };
            _proto._setUserActionID = function _setUserActionID() {
                this.userActionID = (require("SessionName").getName() || "-") + "/-"
            };
            _proto.setURI = function setURI(uri) {
                typeof uri === "string" && uri.match(/^\/?u_\d+_\d+/) && require("FBLogger")("asyncrequest").warn("Invalid URI %s", uri);
                var uri_obj = new(c_URI || (c_URI = require("URI")))(uri);
                if ((this.getOption("useIframeTransport") || this.getOption("useFetchWithIframeFallback")) && !require("isFacebookURI")(uri_obj)) return this;
                if (!this._allowCrossOrigin && !this.getOption("jsonp") && !this.getOption("useIframeTransport") && !this.getOption("useFetchWithIframeFallback") && !uri_obj.isSameOrigin()) return this;
                this._setUserActionID();
                if (!uri || uri_obj.isEmpty()) {
                    require("FBLogger")("async_request").mustfix("URI cannot be empty");
                    return this
                }
                this.uri = require("ZeroRewrites").rewriteURI(uri_obj);
                return this
            };
            _proto.getURI = function getURI() {
                return this.uri.toString()
            };
            _proto.delayPreDisplayJS = function delayPreDisplayJS(shouldDelayJS) {
                shouldDelayJS === void 0 && (shouldDelayJS = !0);
                this._delayPreDisplayJS = shouldDelayJS;
                return this
            };
            _proto.setInitialHandler = function setInitialHandler(fn) {
                this.initialHandler = fn;
                return this
            };
            _proto.setPayloadHandler = function setPayloadHandler(fn) {
                this.setHandler(function(response) {
                    fn(response.payload)
                });
                return this
            };
            _proto.setHandler = function setHandler(fn) {
                validateResponseHandler(fn) && (this.handler = fn);
                return this
            };
            _proto.setFlushedResponseHandler = function setFlushedResponseHandler(fn) {
                validateResponseHandler(fn) && (this.flushedResponseHandler = fn);
                return this
            };
            _proto.getHandler = function getHandler() {
                return this.handler || require("emptyFunction")
            };
            _proto.setProgressHandler = function setProgressHandler(fn) {
                validateResponseHandler(fn) && (this.progressHandler = fn);
                return this
            };
            _proto.setUploadProgressHandler = function setUploadProgressHandler(fn) {
                validateResponseHandler(fn) && (this.uploadProgressHandler = fn);
                return this
            };
            _proto.setErrorHandler = function setErrorHandler(fn) {
                validateResponseHandler(fn) && (this.errorHandler = fn);
                return this
            };
            _proto.setTransportErrorHandler = function setTransportErrorHandler(fn) {
                this.transportErrorHandler = fn;
                return this
            };
            _proto.getErrorHandler = function getErrorHandler() {
                return this.errorHandler || require("emptyFunction")
            };
            _proto.getTransportErrorHandler = function getTransportErrorHandler() {
                return this.transportErrorHandler || require("emptyFunction")
            };
            _proto.setTimeoutHandler = function setTimeoutHandler(timeout, fn) {
                validateResponseHandler(fn) && (this.timeout = timeout, this.timeoutHandler = fn);
                return this
            };
            _proto.resetTimeout = function resetTimeout(timeout) {
                if (!(this.timeoutHandler === null))
                    if (timeout === null) this.timeout = null, require("clearTimeout")(this.timer), this.timer = null;
                    else {
                        var clear_on_quickling_event = !this._allowCrossPageTransition;
                        this.timeout = timeout;
                        require("clearTimeout")(this.timer);
                        clear_on_quickling_event ? this.timer = require("setTimeout")(this._handleTimeout.bind(this), this.timeout) : this.timer = require("setTimeoutAcrossTransitions")(this._handleTimeout.bind(this), this.timeout)
                    }
                return this
            };
            _proto._handleTimeout = function _handleTimeout() {
                var _this2 = this;
                this.continuation.last(function() {
                    _this2._requestTimeout = !0;
                    var func = _this2.timeoutHandler;
                    _this2.abandon();
                    func && func(_this2);
                    require("setTimeout")(function() {
                        require("Arbiter").inform("AsyncRequest/timeout", {
                            request: this
                        })
                    }.bind(_this2), 0)
                })
            };
            _proto.disableInteractionServerTracing = function disableInteractionServerTracing() {
                this.allowInteractionServerTracing = !1;
                return this
            };
            _proto.setNewSerial = function setNewSerial() {
                this.id = ++last_id;
                return this
            };
            _proto.setInterceptHandler = function setInterceptHandler(fn) {
                this.interceptHandler = fn;
                return this
            };
            _proto.setFinallyHandler = function setFinallyHandler(fn) {
                this.finallyHandler = fn;
                return this
            };
            _proto.setAbortHandler = function setAbortHandler(fn) {
                this.abortHandler = fn;
                return this
            };
            _proto.getServerDialogCancelHandler = function getServerDialogCancelHandler() {
                return this.serverDialogCancelHandler
            };
            _proto.setServerDialogCancelHandler = function setServerDialogCancelHandler(fn) {
                this.serverDialogCancelHandler = fn;
                return this
            };
            _proto.setPreBootloadHandler = function setPreBootloadHandler(fn) {
                this.preBootloadHandler = fn;
                return this
            };
            _proto.setReadOnly = function setReadOnly(readOnly) {
                typeof readOnly !== "boolean" || (this.readOnly = readOnly);
                return this
            };
            _proto.getReadOnly = function getReadOnly() {
                return this.readOnly
            };
            _proto.setRelativeTo = function setRelativeTo(element) {
                this.relativeTo = element;
                return this
            };
            _proto.getRelativeTo = function getRelativeTo() {
                return this.relativeTo
            };
            _proto.setStatusClass = function setStatusClass(c) {
                this.statusClass = c;
                return this
            };
            _proto.setStatusElement = function setStatusElement(element) {
                this.statusElement = element;
                return this
            };
            _proto.getStatusElement = function getStatusElement() {
                return require("ge")(this.statusElement)
            };
            _proto._isRelevant = function _isRelevant() {
                if (this._allowCrossPageTransition) return !0;
                return !this.id ? !0 : this.id > id_threshold
            };
            _proto.clearStatusIndicator = function clearStatusIndicator() {
                var statusElem = this.getStatusElement();
                statusElem && (require("CSS").removeClass(statusElem, "async_saving"), require("CSS").removeClass(statusElem, this.statusClass))
            };
            _proto.addStatusIndicator = function addStatusIndicator() {
                var statusElem = this.getStatusElement();
                statusElem && (require("CSS").addClass(statusElem, "async_saving"), require("CSS").addClass(statusElem, this.statusClass))
            };
            _proto.specifiesWriteRequiredParams = function specifiesWriteRequiredParams() {
                return this.writeRequiredParams.every(function(param) {
                    this.data[param] = this.data[param] || (c_Env || (c_Env = require("Env")))[param] || (require("ge")(param) || {}).value;
                    return this.data[param] !== void 0 ? !0 : !1
                }, this)
            };
            _proto.setOption = function setOption(opt, v) {
                typeof this.option[opt] !== "undefined" && (this.option[opt] = v);
                return this
            };
            _proto.getOption = function getOption(opt) {
                typeof this.option[opt] === "undefined";
                return this.option[opt]
            };
            _proto.abort = function abort() {
                var _this3 = this;
                this.continuation.last(function() {
                    var transport = _this3.transport;
                    if (transport) {
                        var old_handler = _this3.getTransportErrorHandler();
                        _this3.setOption("suppressErrorAlerts", !0);
                        _this3.setTransportErrorHandler(require("emptyFunction"));
                        _this3._requestAborted = !0;
                        transport.abort();
                        _this3.setTransportErrorHandler(old_handler)
                    }
                    _this3.abortHandler();
                    AsyncMultiplex.unschedule(_this3)
                })
            };
            _proto.abandon = function abandon() {
                var _this4 = this;
                this.continuation.last(function() {
                    var emptyFunction;
                    require("clearTimeout")(_this4.timer);
                    _this4.setOption("suppressErrorAlerts", !0).setHandler(emptyFunction = require("emptyFunction")).setErrorHandler(emptyFunction).setTransportErrorHandler(emptyFunction).setProgressHandler(emptyFunction).setUploadProgressHandler(emptyFunction);
                    var transport = _this4.transport;
                    transport && (_this4._requestAborted = !0, supportsProgress(transport) && delete transport.onprogress, supportsUploadProgress(transport) && delete transport.upload.onprogress, transport.abort());
                    _this4.abortHandler();
                    AsyncMultiplex.unschedule(_this4)
                })
            };
            _proto.setNectarData = function setNectarData(nctrParams) {
                nctrParams && (this.data.nctr === void 0 && (this.data.nctr = {}), Object.assign(this.data.nctr, nctrParams));
                return this
            };
            _proto.setNectarModuleDataSafe = function setNectarModuleDataSafe(elem) {
                var setNectarModuleData = this.setNectarModuleData;
                setNectarModuleData && setNectarModuleData.call(this, elem);
                return this
            };
            _proto.setAllowCrossPageTransition = function setAllowCrossPageTransition(allow) {
                this._allowCrossPageTransition = !!allow;
                this.timer && this.resetTimeout(this.timeout);
                return this
            };
            _proto.getAllowIrrelevantRequests = function getAllowIrrelevantRequests() {
                return this._allowIrrelevantRequests
            };
            _proto.setAllowIrrelevantRequests = function setAllowIrrelevantRequests(allowIrrelevantRequests) {
                this._allowIrrelevantRequests = allowIrrelevantRequests;
                return this
            };
            _proto.setAllowCrossOrigin = function setAllowCrossOrigin(allow) {
                this._allowCrossOrigin = allow;
                return this
            };
            _proto.setAllowCredentials = function setAllowCredentials(allow) {
                this._allowCredentials = allow;
                return this
            };
            _proto.setIsBackgroundRequest = function setIsBackgroundRequest(isBackgroundRequest) {
                this._isBackgroundRequest = isBackgroundRequest;
                return this
            };
            _proto.setReplaceTransportMarkers = function setReplaceTransportMarkers(value) {
                value === void 0 && (value = !0);
                this._shouldReplaceTransportMarkers = value;
                return this
            };
            _proto.sendAndReturnAbortHandler = function sendAndReturnAbortHandler() {
                var _this5 = this;
                this.send();
                return function() {
                    return _this5.abort()
                }
            };
            _proto.send = function send(isRetry) {
                var _this6 = this;
                isRetry = isRetry || !1;
                if (!this.uri) return !1;
                this.errorHandler || !this.getOption("suppressErrorHandlerWarning");
                this.getOption("jsonp") && this.method != "GET" && this.setMethod("GET");
                (this.getOption("useIframeTransport") || this.getOption("useFetchWithIframeFallback")) && this.method != "GET" && this.setMethod("GET");
                this.timeoutHandler !== null && (this.getOption("jsonp") || this.getOption("useIframeTransport") || this.getOption("useFetchWithIframeFallback"));
                if (!this.getReadOnly()) {
                    this.specifiesWriteRequiredParams();
                    if (this.method != "POST") return !1
                }
                if (document.location.search.toString().includes(this.uri.toString())) return !1;
                if (this.uri.toString().includes("/../") || this.uri.toString().includes("\\../") || this.uri.toString().includes("/..\\") || this.uri.toString().includes("\\..\\")) return !1;
                Object.assign(this.data, require("getAsyncParams")(this.method));
                this.allowInteractionServerTracing && (this._artilleryHandle = require("ArtilleryAsyncRequestTracingAnnotator").registerAsyncRequest(this, this.resourceTimingStoreUID));
                (c_isEmpty || (c_isEmpty = require("isEmpty")))(this.context) || (Object.assign(this.data, this.context), this.data.ajax_log = 1);
                (c_Env || (c_Env = require("Env"))).force_param && Object.assign(this.data, (c_Env || (c_Env = require("Env"))).force_param);
                this._setUserActionID();
                if (this.getOption("bundle") && this._isMultiplexable()) {
                    AsyncMultiplex.schedule(this);
                    return !0
                }
                this.setNewSerial();
                this.getOption("asynchronous_DEPRECATED") || this.uri.addQueryData({
                    __sjax: 1
                });
                require("Arbiter").inform("AsyncRequest/send", {
                    request: this
                });
                var uri_str, query;
                this.method == "GET" && this.uri.addQueryData({
                    fb_dtsg_ag: require("DTSG_ASYNC").getToken()
                });
                this.method == "GET" || this.rawData ? (uri_str = this.uri.addQueryData(this.data).toString(), query = this.rawData || "") : (this._allowCrossOrigin && this.uri.addQueryData({
                    __a: 1
                }), uri_str = this.uri.toString(), query = (c_PHPQuerySerializer || (c_PHPQuerySerializer = require("PHPQuerySerializer"))).serialize(this.data));
                if (this.transport) return !1;
                if (this.getOption("useFetchWithIframeFallback")) try {
                    var _transport2 = new(require("FetchStreamTransport"))(this.uri);
                    this.setJSONPTransport(_transport2);
                    this._markRequestSent();
                    _transport2.send();
                    this.setOption("useIframeTransport", !1);
                    return !0
                } catch (_unused4) {
                    this.setOption("useFetchWithIframeFallback", !1), this.setOption("useIframeTransport", !0)
                }
                if (this.getOption("jsonp") || this.getOption("useIframeTransport")) {
                    requireLazy(["JSONPTransport"], function(JSONPTransport) {
                        var transport = new JSONPTransport(this.getOption("jsonp") ? "jsonp" : "iframe", this.uri);
                        this.setJSONPTransport(transport);
                        this._markRequestSent();
                        transport.send();
                        require("ProfilingCounters").incrementCounter("ASYNC_REQUEST_COUNT", 1)
                    }.bind(this));
                    return !0
                }
                this.flushedResponseHandler && (this.flushedResponseTextParseIndex = 0);
                var transport = require("ZeroRewrites").getTransportBuilderForURI(this.uri)();
                if (!transport) return !1;
                this.schedule("AsyncRequest.send");
                transport.onreadystatechange = function() {
                    var _transport = _this6.transport;
                    _transport && _transport.readyState >= 2 && _transport.readyState <= 3 && _this6._handleFlushedResponse();
                    transport.readyState === 4 && _this6.continuation.last(_this6._onStateChange)
                };
                this.progressHandler && supportsProgress(transport) && (transport.onprogress = function() {
                    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
                    _this6.continuation(function() {
                        _this6.progressHandler && _this6.progressHandler.apply(_this6, args)
                    })
                });
                this.uploadProgressHandler && supportsUploadProgress(transport) && (transport.upload.onprogress = function() {
                    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) args[_key2] = arguments[_key2];
                    _this6.continuation(function() {
                        _this6.uploadProgressHandler && _this6.uploadProgressHandler.apply(_this6, args)
                    })
                });
                isRetry || (this.remainingRetries = this.getOption("retries"));
                this.transport = transport;
                try {
                    transport.open(this.method, uri_str, this.getOption("asynchronous_DEPRECATED"))
                } catch (exception) {
                    return !1
                }
                if (!this.uri.isSameOrigin() && !this.getOption("jsonp") && !this.getOption("useIframeTransport") && !this.getOption("useFetchWithIframeFallback")) {
                    if (!supportsCrossOrigin(transport)) return !1;
                    this._canSendCredentials() && (transport.withCredentials = !0)
                }
                this.method == "POST" && !this.rawData && transport.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
                this._isBackgroundRequest && transport.setRequestHeader("X_FB_BACKGROUND_STATE", "1");
                var asyncHeaders = require("getAsyncHeaders")(this.uri);
                Object.keys(asyncHeaders).forEach(function(name) {
                    transport && transport.setRequestHeader(name, asyncHeaders[name])
                });
                require("Arbiter").inform("AsyncRequest/will_send", {
                    request: this
                });
                if (transport)
                    for (var headerName in this.headers) Object.prototype.hasOwnProperty.call(this.headers, headerName) && transport.setRequestHeader(headerName, this.headers[headerName]);
                this.addStatusIndicator();
                this._markRequestSent();
                transport.send(query);
                this.timeout !== null && this.resetTimeout(this.timeout);
                AsyncRequest._inflightCount++;
                require("ProfilingCounters").incrementCounter("ASYNC_REQUEST_COUNT", 1);
                return !0
            };
            _proto.schedule = function schedule(name) {
                this.continuation = require("TimeSlice").getReusableContinuation(name)
            };
            _proto._canSendCredentials = function _canSendCredentials() {
                if (this._allowCredentials === !1) return !1;
                var uri = new(c_URI || (c_URI = require("URI")))(this.uri);
                return require("isFacebookURI")(uri) || require("isInternalFBURI")(uri) || require("isMessengerDotComURI")(uri) || require("isWorkplaceDotComURI")(uri)
            };
            _proto._markRequestSent = function _markRequestSent() {
                var _this7 = this,
                    fullURI = new(c_URI || (c_URI = require("URI")))(this.getURI()).getQualifiedURI().toString();
                require("ResourceTimingsStore").updateURI(require("ResourceTypes").XHR, this.resourceTimingStoreUID, fullURI);
                require("ResourceTimingsStore").annotate(require("ResourceTypes").XHR, this.resourceTimingStoreUID).addStringAnnotation("uri", fullURI);
                require("ifRequired")("TimeSliceAutoclosedInteraction", function(TimeSliceAutoclosedInteraction) {
                    return TimeSliceAutoclosedInteraction.getInteractionsActiveRightNow().forEach(function(interaction) {
                        return interaction.forResourceRequest(_this7.resourceTimingStoreUID).addStringAnnotation("requested_in_continuation", "true")
                    })
                });
                require("ResourceTimingsStore").measureRequestSent(require("ResourceTypes").XHR, this.resourceTimingStoreUID)
            };
            _proto.promisePayload = function promisePayload(isRetry) {
                return this.exec().then(function(response) {
                    return response.payload
                }, function(response) {
                    throw response.toError()
                })
            };
            _proto.exec = function exec(isRetry) {
                var _this8 = this;
                if (this.getHandler() !== require("emptyFunction") || this.getErrorHandler() !== require("AsyncResponse").defaultErrorHandler) throw new Error("exec is an async function and does not allow previously set handlers");
                return new(require("Promise"))(function(resolve, reject) {
                    _this8.setHandler(resolve).setErrorHandler(reject).send(isRetry)
                })
            };
            AsyncRequest.bootstrap = function bootstrap(href, elem, is_post) {
                var method = "GET",
                    readonly = !0,
                    data = {};
                (is_post || elem && elem.rel == "async-post") && (method = "POST", readonly = !1, href && (href = new(c_URI || (c_URI = require("URI")))(href), data = href.getQueryData(), href.setQueryData({})));
                var status_elem = require("Parent").byClass(elem, "stat_elem") || elem;
                if (status_elem && require("CSS").hasClass(status_elem, "async_saving")) return !1;
                var async = new AsyncRequest(href).setReadOnly(readonly).setMethod(method).setData(data).setNectarModuleDataSafe(elem).setRelativeTo(elem);
                elem && (async.setHandler(function(response) {
                    require("Event").fire(elem, "success", {
                        response: response
                    })
                }), async.setErrorHandler(function(response) {
                    require("Event").fire(elem, "error", {
                        response: response
                    }) !== !1 && require("AsyncResponse").defaultErrorHandler(response)
                }));
                if (status_elem instanceof HTMLElement) {
                    async.setStatusElement(status_elem);
                    var status_class = status_elem.getAttribute("data-status-class");
                    status_class && async.setStatusClass(status_class)
                }
                async.send();
                return !1
            };
            AsyncRequest.post = function post(href, data) {
                new AsyncRequest(href).setReadOnly(!1).setMethod("POST").setData(data).send();
                return !1
            };
            AsyncRequest.postStatic = function postStatic(href, data) {
                AsyncRequest.post(href, data)
            };
            AsyncRequest.getLastID = function getLastID() {
                return last_id
            };
            AsyncRequest.ignoreUpdate = function ignoreUpdate() {
                ignore_id_update = !0
            };
            AsyncRequest.getInflightCount = function getInflightCount() {
                return this._inflightCount
            };
            return AsyncRequest
        }();
    AsyncRequest._inflightCount = 0;
    var _asyncMultiplex, _pendingAsyncMultiplexes = [],
        AsyncMultiplex = function() {
            function AsyncMultiplex() {
                this._requests = []
            }
            var _proto2 = AsyncMultiplex.prototype;
            _proto2.add = function add(request) {
                this._requests.push(request)
            };
            _proto2.remove = function remove(request) {
                var requests = this._requests,
                    requestsSent = this._requestsSent;
                for (var ii = 0, jj = requests.length; ii < jj; ii++) requests[ii] === request && (requestsSent ? requests[ii] = null : requests.splice(ii, 1))
            };
            _proto2.send = function send() {
                this._requestsSent && invariant(0, 4390);
                this._requestsSent = !0;
                this._wrapperRequest = null;
                var requests = this._requests;
                if (!requests.length) return;
                var request;
                if (requests.length === 1) request = requests[0];
                else {
                    var data = requests.filter(Boolean).map(function(request) {
                        return [request.uri.getPath(), (c_PHPQuerySerializer || (c_PHPQuerySerializer = require("PHPQuerySerializer"))).serialize(request.data)]
                    });
                    request = this._wrapperRequest = new AsyncRequest("/ajax/proxy.php").setAllowCrossPageTransition(!0).setData({
                        data: data
                    }).setHandler(this._handler.bind(this)).setTransportErrorHandler(this._transportErrorHandler.bind(this))
                }
                request && request.setOption("bundle", !1).send()
            };
            _proto2._handler = function _handler(response) {
                var _this9 = this,
                    responses = response.getPayload().responses;
                if (responses.length !== this._requests.length) return;
                var _loop2 = function _loop2(ii) {
                    var request = _this9._requests[ii];
                    if (!request) return "continue";
                    var request_path = request.uri.getPath();
                    _this9._wrapperRequest && (request.id = _this9._wrapperRequest.id);
                    if (responses[ii][0] !== request_path) {
                        request.continuation.last(function() {
                            request.invokeResponseHandler({
                                transportError: "Wrong response order in bundled request to " + request_path
                            })
                        });
                        return "continue"
                    }
                    request.continuation.last(function() {
                        request.handleResponse(responses[ii][1])
                    })
                };
                for (var ii = 0; ii < this._requests.length; ii++) {
                    var _ret2 = _loop2(ii);
                    if (_ret2 === "continue") continue
                }
                _pendingAsyncMultiplexes.splice(_pendingAsyncMultiplexes.indexOf(this, 1))
            };
            _proto2._transportErrorHandler = function _transportErrorHandler(response) {
                var interpreted = {
                        transportError: response.errorDescription
                    },
                    paths = this._requests.filter(Boolean).map(function(request) {
                        this._wrapperRequest && (request.id = this._wrapperRequest.id);
                        request.invokeResponseHandler(interpreted);
                        return request.uri.getPath()
                    }, this)
            };
            AsyncMultiplex.schedule = function schedule(request) {
                request.schedule("AsyncMultiplex.schedule");
                _asyncMultiplex || (_asyncMultiplex = new AsyncMultiplex(), _pendingAsyncMultiplexes.push(_asyncMultiplex), require("TimeSlice").guard(function() {
                    require("setTimeoutAcrossTransitions")(function() {
                        _asyncMultiplex && (_asyncMultiplex.send(), _asyncMultiplex = null)
                    }, 0)
                }, "AsyncMultiplex.schedule", {
                    propagationType: require("TimeSlice").PropagationType.ORPHAN
                })());
                _asyncMultiplex.add(request);
                return _asyncMultiplex
            };
            AsyncMultiplex.unschedule = function unschedule(request) {
                _pendingAsyncMultiplexes.forEach(function(asyncMultiplex) {
                    asyncMultiplex.remove(request)
                })
            };
            return AsyncMultiplex
        }();
    AsyncRequest.suppressOnloadToken = {};
    global.AsyncRequest = AsyncRequest;
    module.exports = AsyncRequest
}), null);
__d("idx", [], (function(a, b, c, d, e, f) {
    "use strict";

    function a(a, d) {
        try {
            return d(a)
        } catch (a) {
            if (a instanceof TypeError)
                if (b(a)) return null;
                else if (c(a)) return void 0;
            throw a
        }
    }
    var g;

    function b(a) {
        a = a.message;
        g || (g = i("null"));
        return g.test(a)
    }
    var h;

    function c(a) {
        a = a.message;
        h || (h = i("undefined"));
        return h.test(a)
    }

    function i(a) {
        return new RegExp("^" + a + " | " + a + "$|^[^\\(]* " + a + " ")
    }
    e.exports = a
}), null);
__d("intlSummarizeNumber", ["FbtNumberType", "IntlCompactDecimalNumberFormatConfig", "IntlVariations", "intlNumUtils"], (function(a, b, c, d, e, f) {
    var g = 3,
        h = 14,
        i = {
            ROUND: "ROUND",
            TRUNCATE: "TRUNCATE"
        },
        j = {
            SHORT: "SHORT",
            LONG: "LONG"
        };

    function a(a, c, d, e) {
        d === void 0 && (d = j.SHORT);
        e === void 0 && (e = i.ROUND);
        d = b("IntlCompactDecimalNumberFormatConfig")[d == j.SHORT ? "short_patterns" : "long_patterns"];
        var f = a === 0 ? 0 : Math.floor(Math.log10(Math.abs(a)));
        f > h && (f = h);
        var l = k(a, f, c, e, d),
            m = l[0],
            n = l[1];
        l = l[2];
        if (l) {
            f += 1;
            l = k(a, f, c, e, d);
            m = l[0];
            n = l[1];
            l[2]
        }
        e = b("FbtNumberType").getVariation(m) || b("IntlVariations").NUMBER_OTHER;
        l = f.toString();
        l = (d = d) != null ? (d = d[l]) != null ? d[e.toString()] : d : d;
        if (!l || f < g || l.positive_prefix_pattern === "" && l.positive_suffix_pattern === "") {
            e = c === void 0 ? 0 : c;
            return b("intlNumUtils").formatNumberWithThousandDelimiters(a, e)
        }
        return l && l.min_integer_digits === 0 && m === 1 ? l.positive_prefix_pattern + l.positive_suffix_pattern : (l && l.positive_prefix_pattern || "") + b("intlNumUtils").formatNumberWithThousandDelimiters(m, n) + (l && l.positive_suffix_pattern || "")
    }

    function k(a, c, d, e, f) {
        var g = c.toString();
        g = (f = f) != null ? (f = f[g]) != null ? f[b("IntlVariations").NUMBER_OTHER.toString()] : f : f;
        f = g && g.min_integer_digits || c + 1;
        var j = c - f + 1;
        j = Math.abs(a) / Math.pow(10, j);
        var k = d != null;
        d = k ? d : g && g.min_fraction_digits;
        d == null && (d = c > 2 ? 1 : 0);
        g = e == i.TRUNCATE ? b("intlNumUtils").truncateLongNumber(j.toString(), d) : j.toFixed(d);
        e = parseFloat(g) * (a < 0 ? -1 : 1);
        return [e, e % 1 === 0 && !k ? 0 : d, g.length > f + (d > 0 ? d + 1 : 0) + (j >= 0 ? 0 : 1) && c < h]
    }
    e.exports = a
}), null);
__d("PluginIconButton", ["fbt", "invariant", "CSS", "DOM", "Event", "intlSummarizeNumber"], (function(a, b, c, d, e, f, g, h) {
    a = function() {
        "use strict";

        function a(a, c, d, e) {
            var f = this;
            a.removeAttribute("id");
            e === null || d !== null || h(0, 2812);
            this.$1 = a;
            this.$2 = d;
            this.$3 = e;
            c === !1 && (b("Event").listen(a, "click", function() {
                return f.toggleButton()
            }), b("Event").listen(a, "toggle", function() {
                return f.toggleButton()
            }))
        }
        var c = a.prototype;
        c.toggleButton = function() {
            var a = this;
            b("CSS").hasClass(this.$1, "active") === !1 ? (b("CSS").addClass(this.$1, "active"), this.$4(!0), b("CSS").addClass(this.$1, "is_animating"), setTimeout(function() {
                b("CSS").removeClass(a.$1, "is_animating")
            }, 240)) : (b("CSS").removeClass(this.$1, "active"), this.$4(!1))
        };
        c.setTitle = function(a) {
            this.$1.setAttribute("title", a)
        };
        c.$4 = function(a) {
            var c = function(a) {
                return g._("{count}", [g._param("count", b("intlSummarizeNumber")(a, 0))])
            };
            this.$3 != null && this.$3 < 1e3 && (this.$3 = a ? this.$3 + 1 : this.$3 - 1, b("DOM").setContent(this.$2, c(this.$3)))
        };
        c.isActivated = function() {
            return b("CSS").hasClass(this.$1, "active")
        };
        return a
    }();
    e.exports = a
}), null);
__d("XSharePluginLoggingController", ["XController"], (function(a, b, c, d, e, f) {
    e.exports = b("XController").create("/platform/plugin/share/logging/", {})
}), null);
__d("PluginShareActions", ["AsyncRequest", "Event", "XSharePluginLoggingController"], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        init: function(a, c, d, e, f, g, h) {
            b("Event").listen(f, "click", function(f) {
                new(b("AsyncRequest"))().setURI(b("XSharePluginLoggingController").getURIBuilder().getURI()).setData({
                    app_id: g,
                    href: a,
                    layout: c,
                    event: "click",
                    has_iframe: d,
                    referer_url: e
                }).send()
            })
        }
    };
    e.exports = a
}), null);
__d("getElementText", ["isElementNode", "isTextNode"], (function(a, b, c, d, e, f) {
    var g = null;

    function a(a) {
        if (b("isTextNode")(a)) return a.data;
        else if (b("isElementNode")(a)) {
            if (g === null) {
                var c = document.createElement("div");
                g = c.textContent != null ? "textContent" : "innerText"
            }
            return a[g]
        } else return ""
    }
    e.exports = a
}), null);
__d("forEachObject", [], (function(a, b, c, d, e, f) {
    "use strict";
    var g = Object.prototype.hasOwnProperty;

    function a(a, b, c) {
        for (var d in a) {
            var e = d;
            g.call(a, e) && b.call(c, a[e], e, a)
        }
    }
    e.exports = a
}), null);
__d("FbtLogging", ["requireCond", "cr:1094907"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = b("cr:1094907")
}), null);
__d("BanzaiLogger", ["Banzai"], (function(a, b, c, d, e, f) {
    function g(a) {
        return {
            log: function(c, d) {
                b("Banzai").post("logger:" + c, d, a)
            },
            create: g
        }
    }
    a = g();
    e.exports = a
}), null);