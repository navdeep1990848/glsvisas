if (self.CavalryLogger) {
    CavalryLogger.start_js(["I2uf6"]);
}

__d("Queue", [], (function(a, b, c, d, e, f) {
    var g = {};
    a = function() {
        "use strict";

        function a(a) {
            this._timeout = null, this._interval = (a == null ? void 0 : a.interval) || 0, this._processor = a == null ? void 0 : a.processor, this._queue = [], this._stopped = !0
        }
        var b = a.prototype;
        b._dispatch = function(a) {
            var b = this;
            a === void 0;
            if (this._stopped || this._queue.length === 0) return;
            a = this._processor;
            if (a == null) {
                this._stopped = !0;
                throw new Error("No processor available")
            }
            var c = this._interval;
            if (c != null) a.call(this, this._queue.shift()), this._timeout = setTimeout(function() {
                return b._dispatch()
            }, c);
            else
                while (this._queue.length) a.call(this, this._queue.shift())
        };
        b.enqueue = function(a) {
            this._processor && !this._stopped ? this._processor(a) : this._queue.push(a);
            return this
        };
        b.start = function(a) {
            a && (this._processor = a);
            this._stopped = !1;
            this._dispatch();
            return this
        };
        b.isStarted = function() {
            return !this._stopped
        };
        b.dispatch = function() {
            this._dispatch(!0)
        };
        b.stop = function(a) {
            this._stopped = !0;
            a && this._timeout != null && clearTimeout(this._timeout);
            return this
        };
        b.merge = function(a, b) {
            if (b) {
                (b = this._queue).unshift.apply(b, a._queue)
            } else {
                (b = this._queue).push.apply(b, a._queue)
            }
            a._queue = [];
            this._dispatch();
            return this
        };
        b.getLength = function() {
            return this._queue.length
        };
        a.get = function(b, c) {
            var d;
            b in g ? d = g[b] : d = g[b] = new a(c);
            return d
        };
        a.exists = function(a) {
            return a in g
        };
        a.remove = function(a) {
            return delete g[a]
        };
        return a
    }();
    e.exports = a
}), null);
__d("resolveWindow", [], (function(a, b, c, d, e, f) {
    function a(a) {
        if (a == null) return null;
        var b = window;
        a = a.split(".");
        try {
            for (var c = 0; c < a.length; c++) {
                var d = a[c],
                    e = /^frames\[[\'\"]?([a-zA-Z0-9\-_]+)[\'\"]?\]$/.exec(d);
                if (e) b = b.frames[e[1]];
                else if (d === "opener" || d === "parent" || d === "top") b = b[d];
                else return null
            }
        } catch (a) {
            return null
        }
        return b
    }
    e.exports = a
}), null);
__d("sdk.Scribe", ["QueryString", "UrlMap", "sdk.Runtime"], (function(a, b, c, d, e, f) {
    function a(a, c) {
        if (c.extra != null && typeof c.extra === "object") {
            var d = c.extra;
            d.revision = b("sdk.Runtime").getRevision()
        }
        new Image().src = b("QueryString").appendToUrl(b("UrlMap").resolve("www") + "/common/scribe_endpoint.php", {
            c: a,
            m: JSON.stringify(c)
        })
    }
    c = {
        log: a
    };
    e.exports = c
}), null);
__d("XD", ["Arbiter", "DOM", "DOMDimensions", "Log", "PHPQuerySerializer", "Queue", "URI", "isFacebookURI", "isInIframe", "resolveWindow", "sdk.Scribe"], (function(a, b, c, d, e, f) {
    var g, h, i = {
        _callbacks: [],
        _opts: {
            autoResize: !1,
            allowShrink: !0,
            channelUrl: null,
            hideOverflow: !1,
            resizeTimeout: 1e3,
            resizeWidth: !1
        },
        _lastResizeAckId: 0,
        _resizeCount: 0,
        _resizeTimestamp: 0,
        _shrinker: null,
        _forcedMinWidth: 100,
        init: function(a) {
            this._opts = babelHelpers["extends"]({}, this._opts, a), this._opts.autoResize && this._startResizeMonitor(), b("Arbiter").subscribe("Connect.Unsafe.resize.ack", function(a, b) {
                b.id || (b.id = this._resizeCount), b.id > this._lastResizeAckId && (this._lastResizeAckId = b.id)
            }.bind(this))
        },
        getQueue: function() {
            this._queue || (this._queue = new(b("Queue"))());
            return this._queue
        },
        setChannelUrl: function(a) {
            var b = this;
            this.getQueue().start(function(c) {
                return b.send(c, a)
            })
        },
        send: function(a, c) {
            a === void 0 && (a = null);
            c === void 0 && (c = null);
            c = c || this._opts.channelUrl;
            if (!c) {
                this.getQueue().enqueue(a);
                return
            }
            var d = {};
            c = new(g || (g = b("URI")))(c);
            Object.assign(d, a, (h || (h = b("PHPQuerySerializer"))).deserialize(c.getFragment()));
            c = new g(d.origin);
            if (c.getDomain() === "") {
                b("Log").error("No valid domain for XD message target.");
                return
            }
            var e = c.getOrigin();
            if (typeof d.relation !== "string") {
                b("Log").error("No relation specified to resolve XD target window.");
                return
            }
            var f = b("resolveWindow")(d.relation.replace(/^parent\./, "")),
                i = 1;
            c = function c() {
                try {
                    f.postMessage((h || (h = b("PHPQuerySerializer"))).serialize(d), e)
                } catch (d) {
                    --i ? window.setTimeout(c, 200) : b("sdk.Scribe").log("jssdk_error", {
                        error: "POST_MESSAGE",
                        extra: {
                            message: d.message + ", html/js/modules/XD.js:139",
                            ancestor_origins: JSON.stringify(location.ancestorOrigins),
                            referrer: document.referrer,
                            data: a
                        }
                    })
                }
            };
            c()
        },
        _computeSize: function() {
            var a = b("DOMDimensions").getDocumentDimensions(),
                c = 0;
            if (this._opts.resizeWidth) {
                var d = document.body;
                if (d != null) {
                    if (d.clientWidth < d.scrollWidth) c = a.width;
                    else {
                        d = d.lastElementChild;
                        if (d != null && d instanceof HTMLElement) {
                            d = d;
                            d = d.offsetLeft + d.offsetWidth;
                            d > c && (c = d)
                        }
                    }
                    c = Math.max(c, i._forcedMinWidth)
                } else c = i._forcedMinWidth
            }
            a.width = c;
            this._opts.allowShrink && (this._shrinker || (this._shrinker = b("DOM").create("div")), b("DOM").appendContent(document.body, this._shrinker), a.height = Math.max(this._shrinker.offsetTop, 0));
            return a
        },
        _startResizeMonitor: function() {
            var a, c;
            a = (a = document.documentElement) != null ? a : {};
            if (this._opts.hideOverflow) {
                a.style.overflow = "hidden";
                ((a = document.body) != null ? a : {}).style.overflow = "hidden"
            }
            a = function() {
                var a = this._computeSize(),
                    d = Date.now();
                if (!c || this._opts.allowShrink && c.width != a.width || !this._opts.allowShrink && c.width < a.width || this._opts.allowShrink && c.height != a.height || !this._opts.allowShrink && c.height < a.height) {
                    c = a;
                    this._resizeCount++;
                    this._resizeTimestamp = d;
                    d = {
                        type: "resize",
                        height: a.height,
                        ackData: {
                            id: this._resizeCount
                        },
                        width: 0
                    };
                    a.width && a.width != 0 && (d.width = a.width);
                    try {
                        if (b("isFacebookURI")(new(g || (g = b("URI")))(document.referrer)) && b("isInIframe")() && window.name && window.parent.location && window.parent.location.toString && b("isFacebookURI")(new(g || (g = b("URI")))(window.parent.location))) {
                            a = window.parent.document.getElementsByTagName("iframe");
                            for (var e = 0; e < a.length; e++) a[e].name == window.name && (this._opts.resizeWidth && (a[e].style.width = d.width + "px"), a[e].style.height = d.height + "px")
                        }
                        this.send(d)
                    } catch (a) {
                        this.send(d)
                    }
                }
            }.bind(this);
            a();
            window.setInterval(a, this._opts.resizeTimeout)
        }
    };
    c = babelHelpers["extends"]({}, i);
    e.exports.UnverifiedXD = c;
    e.exports.XD = i;
    a.UnverifiedXD = c;
    a.XD = i
}), null);
__d("SecurePostMessage", ["invariant"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = "*";
    a = {
        sendMessageToSpecificOrigin: function(a, b, c, d) {
            c !== h || g(0, 21157), a.postMessage(b, c, d)
        },
        sendMessageForCurrentOrigin: function(a, b) {
            a.postMessage(b)
        },
        sendMessageAllowAnyOrigin_UNSAFE: function(a, b, c) {
            a.postMessage(b, h, c)
        }
    };
    e.exports = a
}), null);
__d("UnverifiedXD", ["XD"], (function(a, b, c, d, e, f) {
    a = b("XD").UnverifiedXD;
    e.exports = a
}), null);
__d("PluginXDReady", ["Arbiter", "Log", "SecurePostMessage", "UnverifiedXD"], (function(a, b, c, d, e, f) {
    c = {
        handleMessage: function(a) {
            b("Log").debug("PluginXDReady at " + window.name + " handleMessage " + JSON.stringify(a));
            if (!a.method) return;
            try {
                b("Arbiter").inform("Connect.Unsafe." + a.method, JSON.parse(a.params), "persistent")
            } catch (a) {}
        }
    };
    window.addEventListener("message", function(a) {
        b("Log").debug("PluginXDReady at " + window.name + " received message " + JSON.stringify(a.data.message));
        if (a.data.xdArbiterSyn) b("SecurePostMessage").sendMessageAllowAnyOrigin_UNSAFE(a.source, {
            xdArbiterAck: !0
        });
        else if (a.data.xdArbiterHandleMessage) {
            if (!a.data.message.method) return;
            try {
                b("Arbiter").inform("Connect.Unsafe." + a.data.message.method, JSON.parse(a.data.message.params), "persistent")
            } catch (a) {}
        }
    }, !1);
    a.XdArbiter = c;
    b("UnverifiedXD").send({
        xd_action: "plugin_ready",
        name: window.name
    });
    e.exports = null
}), null);
__d("ImageTimingHelper", ["Arbiter", "BigPipe", "URI"], (function(a, b, c, d, e, f) {
    var g, h = {},
        i = {};

    function j(a) {
        var c = a.lid,
            d = a.pagelet,
            e = a.images,
            f = a.timeslice,
            j = a.ts,
            k = h[c];
        k || (k = h[c] = []);
        e.forEach(function(a) {
            try {
                var c = new(g || (g = b("URI")))(a);
                a = c.setFragment("").toString()
            } catch (a) {
                return
            }
            if (i[a]) return;
            i[a] = !0;
            k.push({
                pagelet: d,
                timeslice: f,
                ts: j,
                uri: a
            })
        })
    }
    b("Arbiter").subscribe(b("BigPipe").Events.init, function(a, b) {
        b.lid && b.lid !== "0" && b.arbiter.subscribe("images_displayed", function(a, b) {
            j(b)
        })
    });
    b("Arbiter").subscribe("MRenderingScheduler/images_displayed", function(a, b) {
        j(b)
    });
    e.exports.getImageTimings = function(a) {
        return h[a] || []
    }
}), null);
__d("DataAttributeUtils", ["DataStore"], (function(a, b, c, d, e, f) {
    var g = [];

    function h(a, b) {
        a = a;
        while (a) {
            if (b(a)) return a;
            a = a.parentNode
        }
        return null
    }

    function i(a, b) {
        a = h(a, function(a) {
            return a instanceof Element && !!a.getAttribute(b)
        });
        return a instanceof Element ? a : null
    }
    var j = {
            LEGACY_CLICK_TRACKING_ATTRIBUTE: "data-ft",
            CLICK_TRACKING_DATASTORE_KEY: "data-ft",
            ENABLE_STORE_CLICK_TRACKING: "data-fte",
            IMPRESSION_TRACKING_CONFIG_ATTRIBUTE: "data-xt-vimp",
            IMPRESSION_TRACKING_CONFIG_DATASTORE_KEY: "data-xt-vimp",
            REMOVE_LEGACY_TRACKING: "data-ftr",
            getDataAttribute: function(a, b) {
                return k[b] ? k[b](a) : a.getAttribute(b)
            },
            setDataAttribute: function(a, b, c) {
                return l[b] ? l[b](a, c) : a.setAttribute(b, c)
            },
            getDataFt: function(a) {
                if (a.getAttribute(j.ENABLE_STORE_CLICK_TRACKING)) {
                    var c = b("DataStore").get(a, j.CLICK_TRACKING_DATASTORE_KEY);
                    c || (c = j.moveClickTrackingToDataStore(a, a.getAttribute(j.REMOVE_LEGACY_TRACKING)));
                    return c
                }
                return a.getAttribute(j.LEGACY_CLICK_TRACKING_ATTRIBUTE)
            },
            setDataFt: function(a, c) {
                if (a.getAttribute(j.ENABLE_STORE_CLICK_TRACKING)) {
                    b("DataStore").set(a, j.CLICK_TRACKING_DATASTORE_KEY, c);
                    return
                }
                a.setAttribute(j.LEGACY_CLICK_TRACKING_ATTRIBUTE, c)
            },
            moveXTVimp: function(a) {
                j.moveAttributeToDataStore(a, j.IMPRESSION_TRACKING_CONFIG_ATTRIBUTE, j.IMPRESSION_TRACKING_CONFIG_DATASTORE_KEY), g.push(a.id)
            },
            getXTrackableElements: function() {
                var a = g.map(function(a) {
                        return document.getElementById(a)
                    }).filter(function(a) {
                        return !!a
                    }),
                    b = document.querySelectorAll("[data-xt-vimp]");
                for (var c = 0; c < b.length; c++) a.push(b[c]);
                return a
            },
            getDataAttributeGeneric: function(a, c, d) {
                d = b("DataStore").get(a, d);
                return d !== void 0 ? d : a.getAttribute(c)
            },
            moveAttributeToDataStore: function(a, c, d) {
                var e = a.getAttribute(c);
                e && (b("DataStore").set(a, d, e), a.removeAttribute(c))
            },
            moveClickTrackingToDataStore: function(a, c) {
                var d = a.getAttribute(j.LEGACY_CLICK_TRACKING_ATTRIBUTE);
                d && (b("DataStore").set(a, j.CLICK_TRACKING_DATASTORE_KEY, d), c && a.removeAttribute(j.LEGACY_CLICK_TRACKING_ATTRIBUTE));
                return d
            },
            getClickTrackingParent: function(a) {
                a = i(a, j.LEGACY_CLICK_TRACKING_ATTRIBUTE) || i(a, j.ENABLE_STORE_CLICK_TRACKING);
                return a
            },
            getClickTrackingElements: function(a) {
                return a.querySelectorAll("[" + j.LEGACY_CLICK_TRACKING_ATTRIBUTE + "], [" + j.ENABLE_STORE_CLICK_TRACKING + "]")
            },
            getParentByAttributeOrDataStoreKey: function(a, c, d) {
                while (a && (!a.getAttribute || !a.getAttribute(c)) && b("DataStore").get(a, d) === void 0) a = a.parentNode;
                return a
            }
        },
        k = {
            "data-ft": j.getDataFt,
            "data-xt-vimp": function(a) {
                return j.getDataAttributeGeneric(a, "data-xt-vimp", "data-xt-vimp")
            },
            "data-ad": function(a) {
                return j.getDataAttributeGeneric(a, "data-ad", "data-ad")
            },
            "data-xt": function(a) {
                return j.getDataAttributeGeneric(a, "data-xt", "data-xt")
            }
        },
        l = {
            "data-ft": j.setDataFt,
            "data-xt": function(a, c) {
                b("DataStore").set(a, "data-xt", c)
            }
        };
    e.exports = j
}), null);