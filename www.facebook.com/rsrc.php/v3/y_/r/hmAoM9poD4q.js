if (self.CavalryLogger) {
    CavalryLogger.start_js(["x7baL"]);
}

__d("isPromise", [], (function(a, b, c, d, e, f) {
    "use strict";

    function a(a) {
        return !!a && typeof a.then === "function"
    }
    e.exports = a
}), null);
__d("getSamplingPolicyConfig_DO_NOT_USE", ["FalcoJSLoggerSamplingPolicies"], (function(a, b, c, d, e, f) {
    "use strict";

    function a(a, c) {
        switch (a) {
            case "falco":
                return {
                    __type: a,
                    e: c,
                    r: b("FalcoJSLoggerSamplingPolicies").rates[c] || 0
                };
            default:
                return a
        }
    }
    e.exports = a
}), null);
__d("FalcoBanzaiTransport", ["Banzai"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = "falco:";

    function h(a, c) {
        var d;
        b("Banzai").post(g + a.name, (d = {}, d.e = a.extra, d.r = a.rate, d), c)
    }
    a = {
        log: function(a) {
            h(a, b("Banzai").BASIC)
        },
        logImmediately: function(a) {
            h(a, b("Banzai").VITAL)
        },
        logCritical: function(a) {
            h(a, {
                signal: !0,
                retry: !0
            })
        }
    };
    e.exports = a
}), null);
__d("JSResource", ["JSResourceReference"], (function(a, b, c, d, e, f) {
    var g = {};

    function h(a, b) {
        g[a] = b
    }

    function i(a) {
        return g[a]
    }

    function a(a) {
        a = a;
        var c = i(a);
        if (c) return c;
        c = new(b("JSResourceReference"))(a);
        h(a, c);
        return c
    }
    a.Reference = b("JSResourceReference");
    a.loadAll = b("JSResourceReference").loadAll;
    e.exports = a
}), null);
__d("FalcoTransport", ["AnalyticsCoreData", "BladeRunnerTypes", "FalcoBanzaiTransport", "JSResource", "Queue", "qex"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("BladeRunnerTypes").StreamStatus;
    c = (a = b("qex")._("1495392")) != null ? a : "banzai";
    var h = c + "_test",
        i = c + "_control",
        j = new(b("Queue"))(),
        k = new(b("Queue"))(),
        l = !1;

    function m(a) {
        return Object.freeze({
            deviceId: b("AnalyticsCoreData").device_id,
            sessionId: a
        })
    }

    function n() {
        if (l) return;
        b("JSResource").loadAll([b("JSResource")("BladeRunnerClient").__setRef("FalcoTransport"), b("JSResource")("BladeRunnerStreamHandler").__setRef("FalcoTransport"), b("JSResource")("FalcoBladeRunnerTransport").__setRef("FalcoTransport"), b("JSResource")("WebSession").__setRef("FalcoTransport")], function(a, c, d, e) {
            a = new a();
            var f = a.requestStream({
                method: "Falco"
            }, JSON.stringify(m(e.getId())), new c(function(a) {
                k.enqueue(a)
            }, null, function(a) {
                switch (a) {
                    case g.REJECTED:
                        j.start(function(a) {
                            return a(b("FalcoBanzaiTransport"))
                        });
                        break;
                    case g.STARTED:
                        var c = new d(f, k);
                        j.start(function(a) {
                            return a(c)
                        });
                        break;
                    case g.CLOSED:
                        j.stop(!0);
                        l = !1;
                        break
                }
            }, function(a) {}, function(a) {}))
        });
        l = !0
    }

    function o(a, b) {
        return {
            name: b + "$" + a.name,
            extra: a.extra,
            rate: a.rate,
            time: a.time
        }
    }
    var p;
    switch (c) {
        case "double_br":
            p = {
                log: function(a) {
                    b("FalcoBanzaiTransport").log(o(a, i)), n(), j.enqueue(function(b) {
                        return b.log(o(a, h))
                    })
                },
                logImmediately: function(a) {
                    b("FalcoBanzaiTransport").logImmediately(o(a, i)), n(), j.enqueue(function(b) {
                        return b.logImmediately(o(a, h))
                    })
                },
                logCritical: function(a) {
                    b("FalcoBanzaiTransport").logCritical(o(a, i)), n(), j.enqueue(function(b) {
                        return b.logCritical(o(a, h))
                    })
                }
            };
            break;
        case "partial_br":
            var q = new Set(((d = b("qex")._("1505135")) != null ? d : "").split(","));
            p = {
                log: function(a) {
                    q.has(a.name) ? (n(), j.enqueue(function(b) {
                        return b.log(a)
                    })) : b("FalcoBanzaiTransport").log(a)
                },
                logImmediately: function(a) {
                    q.has(a.name) ? (n(), j.enqueue(function(b) {
                        return b.logImmediately(a)
                    })) : b("FalcoBanzaiTransport").log(a)
                },
                logCritical: function(a) {
                    q.has(a.name) ? (n(), j.enqueue(function(b) {
                        return b.logCritical(a)
                    })) : b("FalcoBanzaiTransport").logCritical(a)
                }
            };
            break;
        case "br":
            p = {
                log: function(a) {
                    n(), j.enqueue(function(b) {
                        return b.log(a)
                    })
                },
                logImmediately: function(a) {
                    n(), j.enqueue(function(b) {
                        return b.logImmediately(a)
                    })
                },
                logCritical: function(a) {
                    n(), j.enqueue(function(b) {
                        return b.logCritical(a)
                    })
                }
            };
            break;
        case "banzai":
        default:
            p = b("FalcoBanzaiTransport");
            break
    }
    e.exports = p
}), null);
__d("FalcoLoggerInternal", ["regeneratorRuntime", "qex", "FalcoTransport", "FalcoBanzaiTransport", "Random", "isPromise", "performanceAbsoluteNow"], (function(a, b, c, d, e, f) {
    "use strict";
    var g;
    c = (a = b("qex")._("1495391")) != null ? a : !1;
    var h = c ? b("FalcoTransport") : b("FalcoBanzaiTransport");

    function i(a, c, d) {
        var e, f;
        return b("regeneratorRuntime").async(function(g) {
            while (1) switch (g.prev = g.next) {
                case 0:
                    if (!b("Random").coinflip(a)) {
                        g.next = 10;
                        break
                    }
                    e = c();
                    if (!b("isPromise")(e)) {
                        g.next = 8;
                        break
                    }
                    g.next = 5;
                    return b("regeneratorRuntime").awrap(e);
                case 5:
                    f = g.sent;
                    g.next = 9;
                    break;
                case 8:
                    f = e;
                case 9:
                    d(f);
                case 10:
                case "end":
                    return g.stop()
            }
        }, null, this)
    }

    function j(a, c, d) {
        var e = (g || (g = b("performanceAbsoluteNow")))();
        return {
            name: a,
            time: e,
            rate: c,
            extra: d
        }
    }
    e.exports = {
        create: function(a) {
            var b = a.e,
                c = a.r;
            return {
                log: function(a) {
                    i(c, a, function(a) {
                        return h.log(j(b, c, a))
                    })
                },
                logAsync: function(a) {
                    i(c, a, function(a) {
                        return h.log(j(b, c, a))
                    })
                },
                logImmediately: function(a) {
                    i(c, a, function(a) {
                        return h.logImmediately(j(b, c, a))
                    })
                },
                logCritical: function(a) {
                    i(c, a, function(a) {
                        return h.logCritical(j(b, c, a))
                    })
                }
            }
        }
    }
}), null);
__d("requestAnimationFrame", ["TimerStorage", "TimeSlice", "requestAnimationFrameAcrossTransitions"], (function(a, b, c, d, e, f) {
    function a(a, c) {
        function d(c) {
            b("TimerStorage").unset(b("TimerStorage").ANIMATION_FRAME, e), a(c)
        }
        b("TimeSlice").copyGuardForWrapper(a, d);
        d.__originalCallback = a;
        var e = b("requestAnimationFrameAcrossTransitions")(d, c);
        b("TimerStorage").set(b("TimerStorage").ANIMATION_FRAME, e);
        return e
    }
    e.exports = a
}), null);
__d("XHRHttpError", [], (function(a, b, c, d, e, f) {
    "use strict";
    var g = "HTTP_CLIENT_ERROR",
        h = "HTTP_PROXY_ERROR",
        i = "HTTP_SERVER_ERROR",
        j = "HTTP_TRANSPORT_ERROR",
        k = "HTTP_UNKNOWN_ERROR";
    a = {
        HTTP_CLIENT_ERROR: g,
        HTTP_PROXY_ERROR: h,
        HTTP_SERVER_ERROR: i,
        HTTP_TRANSPORT_ERROR: j,
        HTTP_UNKNOWN_ERROR: k,
        getErrorCode: function(a, b) {
            if (b === 0) {
                a = a.getProtocol();
                return a === "file" || a === "ftp" ? null : j
            } else if (b >= 100 && b < 200) return h;
            else if (b >= 200 && b < 300) return null;
            else if (b >= 400 && b < 500) return g;
            else if (b >= 500 && b < 600) return i;
            else if (b >= 12001 && b < 12156) return j;
            else return k
        }
    };
    e.exports = a
}), null);
__d("xhrSimpleDataSerializer", [], (function(a, b, c, d, e, f) {
    "use strict";

    function a(a) {
        var b = [];
        for (var c in a) b.push(encodeURIComponent(c) + "=" + encodeURIComponent(a[c]));
        return b.join("&")
    }
    e.exports = a
}), null);
__d("XHRRequest", ["invariant", "DTSG", "DTSG_ASYNC", "DTSGUtils", "Env", "ErrorGuard", "ErrorXFBDebug", "FBLogger", "Log", "LSD", "NetworkStatus", "ResourceTimingsStore", "ResourceTypes", "SprinkleConfig", "TimeSlice", "URI", "XHRHttpError", "ZeroRewrites", "getAsyncHeaders", "xhrSimpleDataSerializer"], (function(a, b, c, d, e, f, g) {
    var h, i, j, k = {
        loadedBytes: 0,
        totalBytes: 0
    };

    function l(a) {
        return b("ZeroRewrites").rewriteURI(new(h || (h = b("URI")))(a))
    }
    a = function() {
        "use strict";

        function a(a) {
            this.$3 = function() {
                return null
            }, this.$19 = l(a), this.$7 = "POST", this.$6 = {}, this.setResponseType(null), this.setTransportBuilder(b("ZeroRewrites").getTransportBuilderForURI(this.getURI())), this.setDataSerializer(b("xhrSimpleDataSerializer")), this.$11 = b("ResourceTimingsStore").getUID(b("ResourceTypes").XHR, a != null ? a.toString() : "")
        }
        var c = a.prototype;
        c.setURI = function(a) {
            this.$19 = l(a);
            return this
        };
        c.getURI = function() {
            return this.$19
        };
        c.setResponseType = function(a) {
            this.$13 = a;
            return this
        };
        c.setMethod = function(a) {
            this.$7 = a;
            return this
        };
        c.getMethod = function() {
            return this.$7
        };
        c.setData = function(a) {
            this.$2 = a;
            return this
        };
        c.getData = function() {
            return this.$2
        };
        c.setRawData = function(a) {
            this.$10 = a;
            return this
        };
        c.setRequestHeader = function(a, b) {
            this.$6[a] = b;
            return this
        };
        c.setTimeout = function(a) {
            this.$14 = a;
            return this
        };
        c.getTimeout = function() {
            return this.$14
        };
        c.setResponseHandler = function(a) {
            this.$12 = a;
            return this
        };
        c.getResponseHandler = function() {
            return this.$12
        };
        c.setErrorHandler = function(a) {
            this.$5 = a;
            return this
        };
        c.getErrorHandler = function() {
            return this.$5
        };
        c.setNetworkFailureHandler = function(a) {
            this.$8 = a;
            return this
        };
        c.getNetworkFailureHandler = function() {
            return this.$8
        };
        c.getResponseHeader = function(a) {
            var b = this.$9;
            return b ? b.getResponseHeader(a) : null
        };
        c.setAbortHandler = function(a) {
            this.$1 = a;
            return this
        };
        c.getAbortHandler = function() {
            return this.$1
        };
        c.setTimeoutHandler = function(a) {
            this.$15 = a;
            return this
        };
        c.getTimeoutHandler = function() {
            return this.$15
        };
        c.setUploadProgressHandler = function(a) {
            this.$18 = a;
            return this
        };
        c.setDownloadProgressHandler = function(a) {
            this.$4 = a;
            return this
        };
        c.setTransportBuilder = function(a) {
            !this.$17 || !b("ZeroRewrites").isRewritten(this.$19) ? this.$17 = a : b("FBLogger")("iorg-FOS").blameToPreviousFile().mustfix("can not set new TransportBuilder for the request %s", String(this.getURI()));
            return this
        };
        c.setDataSerializer = function(a) {
            this.$3 = a;
            return this
        };
        c.send = function() {
            var a = this.$14,
                c = this.$17;
            if (!c) return;
            var d = c();
            c = this.getURI();
            if (c.toString().includes("/../") || c.toString().includes("/..\\") || c.toString().includes("\\../") || c.toString().includes("\\..\\")) {
                b("Log").error("XHRRequest.send(): path traversal is not allowed.");
                return !1
            }
            var e = new(h || (h = b("URI")))(c).getQualifiedURI().toString(),
                f = this.$11;
            b("ResourceTimingsStore").updateURI(b("ResourceTypes").XHR, f, e);
            b("ResourceTimingsStore").measureRequestSent(b("ResourceTypes").XHR, f);
            this.$9 = d;
            this.$7 === "POST" || !this.$10 || g(0, 2346, this.$10, c);
            e = (i || (i = b("Env"))).force_param;
            e && (this.$2 = babelHelpers["extends"]({}, this.getData() || {}, e));
            if (this.$7 === "GET" && b("DTSGUtils").shouldAppendToken(c)) {
                e = b("DTSG_ASYNC").getCachedToken ? b("DTSG_ASYNC").getCachedToken() : b("DTSG_ASYNC").getToken();
                e && (this.$2 ? this.$2.fb_dtsg_ag = e : this.$2 = {
                    fb_dtsg_ag: e
                }, b("SprinkleConfig").param_name && (this.$2[b("SprinkleConfig").param_name] = b("DTSGUtils").getNumericValue(e)))
            }
            if (this.$7 === "POST" && b("DTSGUtils").shouldAppendToken(c)) {
                e = b("DTSG").getCachedToken ? b("DTSG").getCachedToken() : b("DTSG").getToken();
                e && (this.$2 ? this.$2.fb_dtsg = e : this.$2 = {
                    fb_dtsg: e
                }, b("SprinkleConfig").param_name && (this.$2[b("SprinkleConfig").param_name] = b("DTSGUtils").getNumericValue(e)));
                b("LSD").token && (this.$2 ? this.$2.lsd = b("LSD").token : this.$2 = {
                    lsd: b("LSD").token
                }, b("SprinkleConfig").param_name && !e && (this.$2[b("SprinkleConfig").param_name] = b("DTSGUtils").getNumericValue(b("LSD").token)))
            }
            this.$7 === "GET" || this.$10 ? (c.addQueryData(this.$2), e = this.$10) : e = this.$3(this.$2);

            function j(a) {
                b("ResourceTimingsStore").measureResponseReceived(b("ResourceTypes").XHR, f);
                for (var c = arguments.length, d = new Array(c > 1 ? c - 1 : 0), e = 1; e < c; e++) d[e - 1] = arguments[e];
                a.apply(this, d)
            }
            j = b("TimeSlice").guard(j, "XHRRequest response received", {
                propagationType: b("TimeSlice").PropagationType.CONTINUATION
            });
            d.onreadystatechange = this.$21(j);
            d.onerror = this.$22(j);
            d.upload && this.$18 && (d.upload.onprogress = this.$23.bind(this));
            this.$4 && (d.onprogress = this.$24.bind(this));
            a && (this.$16 = setTimeout(this.$25.bind(this), a));
            this.$20 != null && (d.withCredentials = this.$20);
            d.open(this.$7, c.toString(), !0);
            j = !1;
            if (this.$6)
                for (var k in this.$6) k.toLowerCase() === "content-type" && (j = !0), d.setRequestHeader(k, this.$6[k]);
            this.$7 == "POST" && !this.$10 && !j && d.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            var l = b("getAsyncHeaders")(c);
            Object.keys(l).forEach(function(a) {
                d.setRequestHeader(a, l[a])
            });
            this.$13 === "arraybuffer" && ("responseType" in d ? d.responseType = "arraybuffer" : "overrideMimeType" in d ? d.overrideMimeType("text/plain; charset=x-user-defined") : "setRequestHeader" in d && d.setRequestHeader("Accept-Charset", "x-user-defined"));
            this.$13 === "blob" && (d.responseType = this.$13);
            d.send(e)
        };
        c.abort = function(a) {
            this.$26(), this.$1 && (j || (j = b("ErrorGuard"))).applyWithGuard(this.$1, null, [a], {
                name: "XHRRequest:_abortHandler"
            })
        };
        c.$26 = function() {
            var a = this.$9;
            a && (a.onreadystatechange = null, a.abort());
            this.$27()
        };
        c.$25 = function() {
            this.$26(), this.$15 && (j || (j = b("ErrorGuard"))).applyWithGuard(this.$15, null, [], {
                name: "XHRRequest:_abortHandler"
            })
        };
        c.$28 = function(a) {
            if (this.$13)
                if ("response" in a) return a.response;
                else if (this.$13 === "arraybuffer" && window.VBArray) return window.VBArray(a.responseBody).toArray();
            return a.responseText
        };
        c.$22 = function(a) {
            var c = this,
                d = this.$9;
            return function() {
                var e;
                e = {
                    errorCode: b("XHRHttpError").HTTP_TRANSPORT_ERROR,
                    errorMsg: "Network Failure.",
                    errorType: "Network",
                    errorRawResponseHeaders: null,
                    errorRawTransport: d == null ? void 0 : (e = d.constructor) == null ? void 0 : e.name,
                    errorRawTransportStatus: 0
                };
                c.$8 ? (j || (j = b("ErrorGuard"))).applyWithGuard(a.bind(void 0, c.$8), null, [e], {
                    name: "XHRRequest:_networkFailureHandler"
                }) : a(function() {});
                b("NetworkStatus").reportError()
            }
        };
        c.$21 = function(a) {
            var c = this,
                d = b("TimeSlice").guard(function(a) {
                    for (var b = arguments.length, c = new Array(b > 1 ? b - 1 : 0), d = 1; d < b; d++) c[d - 1] = arguments[d];
                    return a.apply(this, c)
                }, "XHRRequest onreadystatechange", {
                    propagationType: b("TimeSlice").PropagationType.EXECUTION
                });
            return function() {
                var e = c.$9;
                if (e == null) return;
                var f = e.readyState;
                if (f >= 2) {
                    var g = f === 4;
                    g && b("ErrorXFBDebug").addFromXHR(e);
                    var h = c.getURI();
                    h = b("XHRHttpError").getErrorCode(h, e.status);
                    var i = c.$12;
                    if (h != null) {
                        if (g) {
                            var k = {
                                errorCode: h,
                                errorMsg: c.$28(e),
                                errorRawTransport: e.constructor.name,
                                errorRawTransportStatus: e.status,
                                errorRawResponseHeaders: i && i.includeHeaders ? e.getAllResponseHeaders() : null,
                                errorType: e.status ? "HTTP " + e.status : "HTTP"
                            };
                            c.$5 ? (j || (j = b("ErrorGuard"))).applyWithGuard(a.bind(void 0, c.$5), null, [k], {
                                name: "XHRRequest:_errorHandler"
                            }) : a(function() {})
                        }
                    } else if (i) {
                        if (g || i.parseStreaming && f === 3) {
                            k = g ? a : d;
                            f = (i == null ? void 0 : i.includeHeaders) ? e.getAllResponseHeaders() : null;
                            (j || (j = b("ErrorGuard"))).applyWithGuard(k.bind(void 0, i), null, [c.$28(e), f, g], {
                                name: "XHRRequest:handler"
                            })
                        }
                    } else g && a(function() {});
                    g && (h != "HTTP_TRANSPORT_ERROR" && b("NetworkStatus").reportSuccess(), c.$27())
                }
            }
        };
        c.$23 = function(a) {
            k.loadedBytes = a.loaded, k.totalBytes = a.total, this.$18 && (j || (j = b("ErrorGuard"))).applyWithGuard(this.$18, null, [k], {
                name: "XHRRequest:_uploadProgressHandler"
            })
        };
        c.$24 = function(a) {
            a = {
                loadedBytes: a.loaded,
                totalBytes: a.total
            };
            this.$4 && (j || (j = b("ErrorGuard"))).applyWithGuard(this.$4, null, [a], {
                name: "XHRRequest:_downloadProgressHandler"
            })
        };
        c.$27 = function() {
            clearTimeout(this.$16), delete this.$9
        };
        return a
    }();
    e.exports = a
}), null);
__d("ChannelClientID", ["MqttWebDeviceID", "uuid"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = (a = b("MqttWebDeviceID") == null ? void 0 : b("MqttWebDeviceID").clientID) != null ? a : b("uuid")();
    c = {
        getID: function() {
            return g
        }
    };
    e.exports = c
}), null);