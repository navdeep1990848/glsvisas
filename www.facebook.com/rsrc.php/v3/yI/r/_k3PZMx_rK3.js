if (self.CavalryLogger) {
    CavalryLogger.start_js(["LQ204"]);
}

__d("isValidReactElement", [], (function(a, b, c, d, e, f) {
    var g = typeof Symbol === "function" && Symbol["for"] && Symbol["for"]("react.element") || 60103;

    function a(a) {
        return !!(typeof a === "object" && a !== null && a.$$typeof === g)
    }
    e.exports = a
}), null);
__d("BootloadedReact", ["Bootloader", "isValidReactElement"], (function(a, b, c, d, e, f) {
    var g = function(a) {
        b("Bootloader").loadModules(["ReactDOM"], a, "BootloadedReact")
    };
    a = {
        isValidElement: function(a) {
            return b("isValidReactElement")(a)
        },
        render: function(a, b, c) {
            g(function(d) {
                d.render(a, b, function() {
                    c && c(this)
                })
            })
        },
        unmountComponentAtNode: function(a, b) {
            g(function(c) {
                c.unmountComponentAtNode(a), b && b()
            })
        }
    };
    e.exports = a
}), null);
__d("getOrCreateDOMID", ["uniqueID"], (function(a, b, c, d, e, f) {
    function a(a) {
        a.id || (a.id = b("uniqueID")());
        return a.id
    }
    e.exports = a
}), null);
__d("ContextualThing", ["CSS", "containsNode", "ge", "getOrCreateDOMID"], (function(a, b, c, d, e, f) {
    var g = {
        register: function(a, c) {
            a.setAttribute("data-ownerid", b("getOrCreateDOMID")(c))
        },
        containsIncludingLayers: function(a, c) {
            c = c;
            while (c) {
                if (b("containsNode")(a, c)) return !0;
                c = g.getContext(c)
            }
            return !1
        },
        getContext: function(a) {
            a = a;
            var c;
            while (a) {
                if (a.getAttribute && (c = a.getAttribute("data-ownerid"))) return b("ge")(c);
                a = a.parentNode
            }
            return null
        },
        parentByClass: function(a, c) {
            a = a;
            var d;
            while (a && !b("CSS").hasClass(a, c)) a.getAttribute && (d = a.getAttribute("data-ownerid")) ? a = b("ge")(d) : a = a.parentNode;
            return a
        }
    };
    e.exports = g
}), null);
__d("isContentEditable", [], (function(a, b, c, d, e, f) {
    "use strict";

    function a(a) {
        a = a;
        while (a instanceof HTMLElement) {
            if (a.contentEditable === "true" || a.contentEditable === "plaintext-only") return !0;
            a = a.parentElement
        }
        return !1
    }
    e.exports = a
}), null);
__d("isElementInteractive", ["isContentEditable"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = new Set(["EMBED", "INPUT", "OBJECT", "SELECT", "TEXTAREA"]),
        h = new Set(["button", "checkbox", "radio", "submit"]);

    function a(a) {
        if (!a instanceof HTMLElement) return !1;
        var c = b("isContentEditable")(a),
            d = g.has(a.nodeName);
        a = a instanceof HTMLInputElement && h.has(a.type);
        return (c || d) && !a
    }
    e.exports = a
}), null);
__d("KeyEventController", ["Bootloader", "DOMQuery", "Event", "Run", "emptyFunction", "getElementText", "isContentEditable", "isElementInteractive", "isEmpty"], (function(a, b, c, d, e, f) {
    var g, h = null,
        i = {
            BACKSPACE: [8],
            TAB: [9],
            RETURN: [13],
            ALT: [18],
            ESCAPE: [27],
            LEFT: [37, 63234],
            UP: [38, 63232],
            RIGHT: [39, 63235],
            DOWN: [40, 63233],
            NUMPAD_ADD: [43],
            NUMPAD_SUBSTRACT: [45],
            DELETE: [46],
            COMMA: [188],
            PERIOD: [190],
            SLASH: [191],
            "`": [192],
            "[": [219],
            "]": [221],
            PAGE_UP: [33],
            PAGE_DOWN: [34],
            END: [35],
            HOME: [36],
            SPACE: [32],
            KP_DOT: [46, 110],
            "-": [189],
            "=": [187],
            FORWARD_SLASH: [191]
        },
        j = (a = {}, a[8] = 1, a[9] = 1, a[13] = 1, a[27] = 1, a[32] = 1, a[37] = 1, a[63234] = 1, a[38] = 1, a[63232] = 1, a[39] = 1, a[63235] = 1, a[40] = 1, a[63233] = 1, a[46] = 1, a);
    c = function() {
        "use strict";

        function a() {
            var a = this;
            this.handlers = {};
            ["keyup", "keydown", "keypress"].forEach(function(b) {
                return document.addEventListener(b, a.onkeyevent.bind(a, "on" + b))
            })
        }
        var c = a.prototype;
        c.mapKey = function(a) {
            if (/^[0-9]$/.test(a + "")) {
                typeof a !== "number" && (a = a.charCodeAt(0) - 48);
                return [48 + a, 96 + a]
            }
            a += "";
            var b = i[a.toUpperCase()];
            return b ? b : [a.toUpperCase().charCodeAt(0)]
        };
        c.onkeyevent = function(a, c) {
            c = b("Event").$E(c);
            var d = this.handlers[c.keyCode] || this.handlers[c.which];
            if (d)
                for (var e = 0; e < d.length; e++) {
                    var f = d[e].callback,
                        g = d[e].filter;
                    try {
                        if (!g || g(c, a)) {
                            g = function() {
                                var d = f(c, a),
                                    e = c.which || c.keyCode;
                                b("Bootloader").loadModules(["KeyEventTypedLogger"], function(a) {
                                    new a().setAction("key_shortcut").setKey(c.key || "").setKeyChar(String.fromCharCode(e)).setKeyCode(e).addToExtraData("is_trusted", c.isTrusted).log()
                                }, "KeyEventController");
                                if (d === !1) return {
                                    v: b("Event").kill(c)
                                }
                            }();
                            if (typeof g === "object") return g.v
                        }
                    } catch (a) {}
                }
            return !0
        };
        c.resetHandlers = function() {
            for (var a in this.handlers)
                if (Object.prototype.hasOwnProperty.call(this.handlers, a)) {
                    var b = this.handlers[a].filter(function(a) {
                        return a.preserve()
                    });
                    b.length ? this.handlers[a] = b : delete this.handlers[a]
                }
        };
        a.getInstance = function() {
            return h || (h = new a())
        };
        a.defaultFilter = function(c, d) {
            c = b("Event").$E(c);
            return a.filterEventTypes(c, d) && a.filterEventTargets(c, d) && a.filterEventModifiers(c, d)
        };
        a.filterEventTypes = function(a, b) {
            return b === "onkeydown" ? !0 : !1
        };
        a.filterEventTargets = function(a, c) {
            c = a.getTarget();
            return !b("isElementInteractive")(c) || a.keyCode in j && (b("DOMQuery").isNodeOfType(c, ["input", "textarea"]) && c.value.length === 0 || b("isContentEditable")(c) && b("getElementText")(c).length === 0)
        };
        a.filterEventModifiers = function(a, b) {
            return a.ctrlKey || a.altKey || a.metaKey || a.repeat ? !1 : !0
        };
        a.registerKeyAcrossTransitions = function(c, d, e, f) {
            e === void 0 && (e = a.defaultFilter);
            f === void 0 && (f = !1);
            return a.registerKey(c, d, e, f, b("emptyFunction").thatReturnsTrue)
        };
        a.registerKey = function(c, d, e, f, h) {
            e === void 0 && (e = a.defaultFilter);
            f === void 0 && (f = !1);
            h === void 0 && (h = b("emptyFunction").thatReturnsFalse);
            var i = a.getInstance(),
                j = c == null ? [] : i.mapKey(c);
            (g || (g = b("isEmpty")))(i.handlers) && b("Run").onLeave(i.resetHandlers.bind(i));
            var k = {};
            for (var l = 0; l < j.length; l++) {
                c = "" + j[l];
                (!i.handlers[c] || f) && (i.handlers[c] = []);
                var m = {
                    callback: d,
                    filter: e,
                    preserve: h
                };
                k[c] = m;
                i.handlers[c].push(m)
            }
            return {
                remove: function() {
                    for (var a in k) {
                        if (i.handlers[a] && i.handlers[a].length) {
                            var b = i.handlers[a].indexOf(k[a]);
                            b >= 0 && i.handlers[a].splice(b, 1)
                        }
                        delete k[a]
                    }
                }
            }
        };
        return a
    }();
    e.exports = c
}), null);
__d("KeyStatus", ["Event", "ExecutionEnvironment"], (function(a, b, c, d, e, f) {
    var g = null,
        h = null;

    function i() {
        h || (h = b("Event").listen(window, "blur", function() {
            g = null, j()
        }))
    }

    function j() {
        h && (h.remove(), h = null)
    }

    function a(a) {
        g = b("Event").getKeyCode(a), i()
    }

    function c() {
        g = null, j()
    }
    if (b("ExecutionEnvironment").canUseDOM) {
        d = document.documentElement;
        if (d)
            if (d.addEventListener) d.addEventListener("keydown", a, !0), d.addEventListener("keyup", c, !0);
            else if (d.attachEvent) {
            f = d.attachEvent;
            f("onkeydown", a);
            f("onkeyup", c)
        }
    }
    d = {
        isKeyDown: function() {
            return !!g
        },
        getKeyDownCode: function() {
            return g
        }
    };
    e.exports = d
}), null);
__d("BehaviorsMixin", [], (function(a, b, c, d, e, f) {
    var g = function() {
            "use strict";

            function a(a) {
                this.$1 = a, this.$2 = !1
            }
            var b = a.prototype;
            b.enable = function() {
                this.$2 || (this.$2 = !0, this.$1.enable())
            };
            b.disable = function() {
                this.$2 && (this.$2 = !1, this.$1.disable())
            };
            return a
        }(),
        h = 1;

    function i(a) {
        a.__BEHAVIOR_ID || (a.__BEHAVIOR_ID = h++);
        return a.__BEHAVIOR_ID
    }
    a = {
        enableBehavior: function(a) {
            this._behaviors || (this._behaviors = {});
            var b = i(a);
            this._behaviors[b] || (this._behaviors[b] = new g(new a(this)));
            this._behaviors[b].enable();
            return this
        },
        disableBehavior: function(a) {
            if (this._behaviors) {
                a = i(a);
                this._behaviors[a] && this._behaviors[a].disable()
            }
            return this
        },
        enableBehaviors: function(a) {
            a.forEach(this.enableBehavior, this);
            return this
        },
        destroyBehaviors: function() {
            if (this._behaviors) {
                for (var a in this._behaviors) this._behaviors[a].disable();
                this._behaviors = {}
            }
        },
        hasBehavior: function(a) {
            return this._behaviors && i(a) in this._behaviors
        }
    };
    e.exports = a
}), null);
__d("setImmediate", ["TimerStorage", "TimeSlice", "setImmediateAcrossTransitions"], (function(a, b, c, d, e, f) {
    function a(a) {
        var c, d = function() {
            b("TimerStorage").unset(b("TimerStorage").IMMEDIATE, c);
            for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++) e[f] = arguments[f];
            Function.prototype.apply.call(a, this, e)
        };
        b("TimeSlice").copyGuardForWrapper(a, d);
        for (var e = arguments.length, f = new Array(e > 1 ? e - 1 : 0), g = 1; g < e; g++) f[g - 1] = arguments[g];
        c = b("setImmediateAcrossTransitions").apply(void 0, [d].concat(f));
        b("TimerStorage").set(b("TimerStorage").IMMEDIATE, c);
        return c
    }
    e.exports = a
}), null);
__d("Layer", ["invariant", "KeyStatus", "ArbiterMixin", "BehaviorsMixin", "BootloadedReact", "ContextualThing", "CSS", "DataStore", "DOM", "Event", "FBLogger", "HTML", "KeyEventController", "Parent", "Style", "ge", "isNode", "mixin", "removeFromArray", "setImmediate"], (function(a, b, c, d, e, f, g) {
    b("KeyStatus");
    var h = [],
        i = function(c) {
            "use strict";
            babelHelpers.inheritsLoose(a, c);

            function a(a, d) {
                var e;
                e = c.call(this) || this;
                e._config = a || {};
                if (d) {
                    e._configure(e._config, d);
                    a = e._config.addedBehaviors || [];
                    e.enableBehaviors(e._getDefaultBehaviors().concat(a))
                } else b("FBLogger")("layer").warn("The markup param wasn't provided to the Layer constructor");
                return e
            }
            var d = a.prototype;
            d.init = function(a) {
                this._configure(this._config, a);
                a = this._config.addedBehaviors || [];
                this.enableBehaviors(this._getDefaultBehaviors().concat(a));
                this._initialized = !0;
                return this
            };
            d._configure = function(a, c) {
                var d = this;
                if (c) {
                    var e = b("isNode")(c),
                        f = typeof c === "string" || b("HTML").isHTML(c);
                    this.containsReactComponent = b("BootloadedReact").isValidElement(c);
                    !e && !f && !this.containsReactComponent && b("FBLogger")("layer").warn("Layer must be init with HTML, DOM node or React instance");
                    if (f) c = b("HTML")(c).getRootNode();
                    else if (this.containsReactComponent) {
                        e = document.createElement("div");
                        var g = !0;
                        b("BootloadedReact").render(c, e, function() {
                            d.inform("reactshow"), g || d.updatePosition()
                        });
                        g = !1;
                        c = this._reactContainer = e
                    }
                }
                this._root = this._buildWrapper(a, c);
                a.attributes && b("DOM").setAttributes(this._root, a.attributes);
                a.classNames && a.classNames.forEach(b("CSS").addClass.bind(null, this._root));
                b("CSS").addClass(this._root, "uiLayer");
                a.causalElement && (this._causalElement = b("ge")(a.causalElement));
                a.permanent && (this._permanent = a.permanent);
                a.isStrictlyControlled && (this._isStrictlyControlled = a.isStrictlyControlled);
                b("DataStore").set(this._root, "layer", this)
            };
            d._getDefaultBehaviors = function() {
                return []
            };
            d.getCausalElement = function() {
                return this._causalElement
            };
            d.setCausalElement = function(a) {
                this._causalElement = a;
                return this
            };
            d.getInsertParent = function() {
                return this._insertParent || document.body
            };
            d.getRoot = function() {
                this._root || (this._destroyed ? b("FBLogger")("layer").warn("No root node for this Layer. It has either not yet been set or the Layer has been destroyed.  This layer has been destroyed.") : b("FBLogger")("layer").warn("No root node for this Layer. It has probably not been set."));
                return this._root
            };
            d.getContentRoot = function() {
                return this.getRoot()
            };
            d._buildWrapper = function(a, b) {
                return b
            };
            d.setInsertParent = function(a) {
                a && (this._shown && a !== this.getInsertParent() && (b("DOM").appendContent(a, this.getRoot()), this.updatePosition()), this._insertParent = a);
                return this
            };
            d.showAfterDelay = function(a) {
                window.setTimeout(this.show.bind(this), a)
            };
            d.show = function() {
                var c = this;
                if (this._shown) return this;
                var d = this.getRoot();
                d != null || g(0, 5142);
                this.inform("beforeshow");
                b("Style").set(d, "visibility", "hidden");
                b("Style").set(d, "overflow", "hidden");
                b("CSS").show(d);
                b("DOM").appendContent(this.getInsertParent(), d);
                this.updatePosition() !== !1 ? (this._shown = !0, this.inform("show"), a.inform("show", this), this._permanent || window.setTimeout(function() {
                    c._shown && h.push(c)
                }, 0)) : b("CSS").hide(d);
                b("Style").set(d, "visibility", "");
                b("Style").set(d, "overflow", "");
                b("Style").set(d, "opacity", "1");
                this.inform("aftershow");
                return this
            };
            d.hide = function(a) {
                if (this._isStrictlyControlled) {
                    this._shown && this.inform("runhide", a);
                    return this
                }
                return this._hide()
            };
            d._hide = function() {
                if (this._hiding || !this._shown || this.inform("beforehide") === !1) return this;
                this._hiding = !0;
                this.inform("starthide") !== !1 && this.finishHide();
                return this
            };
            d.conditionShow = function(a) {
                return a ? this.show() : this._hide()
            };
            d.finishHide = function() {
                if (this._shown) {
                    this._permanent || b("removeFromArray")(h, this);
                    this._hiding = !1;
                    this._shown = !1;
                    var c = this.getRoot();
                    c != null || g(0, 5143);
                    b("CSS").hide(c);
                    this.inform("hide");
                    a.inform("hide", this)
                }
            };
            d.isShown = function() {
                return this._shown
            };
            d.updatePosition = function() {
                return !0
            };
            d.destroy = function() {
                this.containsReactComponent && b("BootloadedReact").unmountComponentAtNode(this._reactContainer);
                this.finishHide();
                var c = this.getRoot();
                b("DOM").remove(c);
                this.destroyBehaviors();
                this.inform("destroy");
                a.inform("destroy", this);
                b("DataStore").remove(c, "layer");
                this._root = this._causalElement = null;
                this._destroyed = !0
            };
            a.init = function(a, b) {
                a.init(b)
            };
            a.initAndShow = function(a, b) {
                a.init(b).show()
            };
            a.show = function(a) {
                a.show()
            };
            a.showAfterDelay = function(a, b) {
                a.showAfterDelay(b)
            };
            a.getTopmostLayer = function() {
                return h[h.length - 1]
            };
            a.informBlur = function(a) {
                j = null;
                k = null;
                var c = h.length;
                if (!c) return;
                while (c--) {
                    var d = h[c],
                        e = d.getContentRoot();
                    e != null || g(0, 5144);
                    if (b("ContextualThing").containsIncludingLayers(e, a)) return;
                    if (d.inform("blur", {
                            target: a
                        }) === !1 || d.isShown()) return
                }
            };
            return a
        }(b("mixin")(b("ArbiterMixin"), b("BehaviorsMixin")));
    Object.assign(i, b("ArbiterMixin"));
    Object.assign(i.prototype, {
        _destroyed: !1,
        _initialized: !1,
        _root: null,
        _shown: !1,
        _hiding: !1,
        _causalElement: null,
        _reactContainer: null
    });
    b("Event").listen(document.documentElement, "keydown", function(a) {
        if (b("KeyEventController").filterEventTargets(a, "keydown"))
            for (var c = h.length - 1; c >= 0; c--)
                if (h[c].inform("key", a) === !1) return !1;
        return !0
    }, b("Event").Priority.URGENT);
    var j;
    b("Event").listen(document.documentElement, "mousedown", function(a) {
        j = a.getTarget()
    });
    var k;
    b("Event").listen(document.documentElement, "mouseup", function(a) {
        k = a.getTarget(), b("setImmediate")(function() {
            j = null, k = null
        })
    });
    b("Event").listen(document.documentElement, "click", function(a) {
        var c = j,
            d = k;
        j = null;
        k = null;
        var e = h.length;
        if (!e) return;
        e = a.getTarget();
        if (e !== d || e !== c) return;
        if (!b("DOM").contains(document.documentElement, e)) return;
        if (e.offsetWidth != null && !e.offsetWidth) return;
        if (b("Parent").byClass(e, "generic_dialog")) return;
        i.informBlur(e)
    });
    e.exports = i
}), null);
__d("getViewportDimensions", ["UserAgent"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = function() {
        var a = null;
        return function() {
            var b = document.body;
            if (b == null) return null;
            (a == null || !b.contains(a)) && (a = document.createElement("div"), a.style.left = Number.MAX_SAFE_INTEGER + "px", a.style.width = "100%", a.style.height = "100%", a.style.position = "fixed", b.appendChild(a));
            return a
        }
    }();

    function h() {
        var a;
        document.documentElement && (a = document.documentElement.clientWidth);
        a == null && document.body && (a = document.body.clientWidth);
        return a || 0
    }

    function i() {
        var a;
        document.documentElement && (a = document.documentElement.clientHeight);
        a == null && document.body && (a = document.body.clientHeight);
        return a || 0
    }

    function j() {
        return {
            width: window.innerWidth || h(),
            height: window.innerHeight || i()
        }
    }
    j.withoutScrollbars = function() {
        return b("UserAgent").isPlatform("Android") ? j() : {
            width: h(),
            height: i()
        }
    };
    j.layout = function() {
        var a, b = g();
        return {
            width: (a = b == null ? void 0 : b.clientWidth) != null ? a : h(),
            height: (a = b == null ? void 0 : b.clientHeight) != null ? a : i()
        }
    };
    e.exports = j
}), null);
__d("PopupWindow", ["DOMDimensions", "DOMQuery", "FlowMigrationUtilsForLegacyFiles", "Layer", "Popup", "getViewportDimensions"], (function(a, b, c, d, e, f) {
    var g = b("FlowMigrationUtilsForLegacyFiles").invariantViolation,
        h = b("FlowMigrationUtilsForLegacyFiles").isFalsy,
        i = {
            _opts: {
                allowShrink: !0,
                strategy: "vector",
                timeout: 100,
                widthElement: null
            },
            init: function(a) {
                Object.assign(i._opts, a), window.setInterval(i._resizeCheck, i._opts.timeout)
            },
            _resizeCheck: function() {
                var a = b("getViewportDimensions")(),
                    c = i._getDocumentSize(),
                    d = b("Layer").getTopmostLayer();
                if (d) {
                    d = (d = d.getRoot()) == null ? void 0 : d.firstChild;
                    d || g("topMostLayer.getRoot().firstChild is null.");
                    var e = b("DOMDimensions").getElementDimensions(d);
                    e.height += b("DOMDimensions").measureElementBox(d, "height", !0, !0, !0);
                    e.width += b("DOMDimensions").measureElementBox(d, "width", !0, !0, !0);
                    c.height = Math.max(c.height, e.height);
                    c.width = Math.max(c.width, e.width)
                }
                d = c.height - a.height;
                e = c.width - a.width;
                e < 0 && h(i._opts.widthElement) && (e = 0);
                e = e > 1 ? e : 0;
                h(i._opts.allowShrink) && d < 0 && (d = 0);
                if (d || e) try {
                    window.console && window.console.firebug, window.resizeBy(e, d), e && window.moveBy(e / -2, 0)
                } catch (a) {}
            },
            _getDocumentSize: function() {
                var c = b("DOMDimensions").getDocumentDimensions();
                if (i._opts.strategy === "offsetHeight") {
                    var d = document.body;
                    if (!d) g("document.body is null.");
                    else {
                        c.height = (d = d.offsetHeight) != null ? d : 0
                    }
                }
                if (h(i._opts.widthElement) && typeof i._opts.widthElement === "string") {
                    d = b("DOMQuery").scry(document.body, i._opts.widthElement)[0];
                    d && (c.width = b("DOMDimensions").getElementDimensions(d).width)
                }
                d = a.Dialog;
                d && d.max_bottom && d.max_bottom > c.height && (c.height = d.max_bottom);
                return c
            },
            open: function(a, c, d, e) {
                return b("Popup").open(a, d, c, e)
            }
        };
    e.exports = i
}), null);
__d("PluginCSSReflowHack", ["Style"], (function(a, b, c, d, e, f) {
    a = {
        trigger: function(a) {
            setTimeout(function() {
                var c = "border-bottom-width",
                    d = b("Style").get(a, c);
                b("Style").set(a, c, parseInt(d, 10) + 1 + "px");
                b("Style").set(a, c, d)
            }, 1e3)
        }
    };
    e.exports = a
}), null);
__d("PluginMessage", ["DOMEventListener"], (function(a, b, c, d, e, f) {
    a = {
        listen: function() {
            b("DOMEventListener").add(window, "message", function(a) {
                if (/\.facebook\.com$/.test(a.origin) && /^FB_POPUP:/.test(a.data)) {
                    a = JSON.parse(a.data.substring(9));
                    "reload" in a && /^https?:/.test(a.reload) && document.location.replace(a.reload)
                }
            })
        }
    };
    e.exports = a
}), null);
__d("PluginConfirm", ["DOMEvent", "DOMEventListener", "PlatformVersioning", "PluginMessage", "PopupWindow", "URI"], (function(a, b, c, d, e, f) {
    var g;

    function h(a) {
        Object.assign(this, {
            plugin: a,
            confirm_params: {},
            return_params: (g || (g = b("URI"))).getRequestURI().getQueryData()
        }), this.addReturnParams({
            ret: "sentry"
        }), delete this.return_params.hash
    }
    Object.assign(h.prototype, {
        addConfirmParams: function(a) {
            Object.assign(this.confirm_params, a)
        },
        addReturnParams: function(a) {
            Object.assign(this.return_params, a);
            return this
        },
        start: function() {
            var a = b("PlatformVersioning").versionAwareURI(new(g || (g = b("URI")))("/plugins/error/confirm/" + this.plugin)).addQueryData(this.confirm_params).addQueryData({
                secure: g.getRequestURI().isSecure(),
                plugin: this.plugin,
                return_params: JSON.stringify(this.return_params)
            });
            this.popup = b("PopupWindow").open(a.toString(), 320, 486);
            b("PluginMessage").listen();
            return this
        }
    });
    h.starter = function(a, b, c) {
        a = new h(a);
        a.addConfirmParams(b || {});
        a.addReturnParams(c || {});
        return a.start.bind(a)
    };
    h.listen = function(a, c, d, e) {
        b("DOMEventListener").add(a, "click", function(a) {
            new(b("DOMEvent"))(a).kill(), h.starter(c, d, e)()
        })
    };
    e.exports = h
}), null);
__d("PluginConnection", ["Arbiter", "CSS", "Plugin"], (function(a, b, c, d, e, f) {
    var g = function() {};
    Object.assign(g.prototype, {
        init: function(a, c, d, e) {
            e = e || b("Plugin").CONNECT;
            this.identifier = a;
            this.element = c;
            this.css = d;
            b("Arbiter").subscribe([b("Plugin").CONNECT, b("Plugin").DISCONNECT], function(f, g) {
                a === g.href && b("CSS")[f === e ? "addClass" : "removeClass"](c, d);
                return !0
            });
            return this
        },
        connected: function() {
            return b("CSS").hasClass(this.element, this.css)
        },
        connect: function() {
            return b("Arbiter").inform(b("Plugin").CONNECT, {
                href: this.identifier
            }, "state")
        },
        disconnect: function() {
            return b("Arbiter").inform(b("Plugin").DISCONNECT, {
                href: this.identifier
            }, "state")
        },
        toggle: function() {
            return this.connected() ? this.disconnect() : this.connect()
        }
    });
    g.init = function(a) {
        for (var b, c = 0; c < a.length; c++) b = new g(), b.init.apply(b, a[c])
    };
    e.exports = g
}), null);
__d("PluginPageActionLogger", ["BanzaiLogger", "BanzaiODS", "DOMEventListener", "DOMQuery"], (function(a, b, c, d, e, f) {
    a = {
        initializeClickLoggers: function(a, c, d, e, f, g, h, i, j, k) {
            function l(f, g) {
                f = b("DOMQuery").scry(e, "." + f)[0];
                if (!f) return;
                b("DOMEventListener").add(f, "click", function(e) {
                    b("BanzaiODS").bumpEntityKey(2966, "platform_www", "platform.plugin.page.action"), b("BanzaiLogger").log("PagePluginActionsLoggerConfig", {
                        page_id: c,
                        page_plugin_action: g,
                        page_plugin_action_type: "click",
                        referer_url: d,
                        is_sdk: a
                    })
                })
            }
            l(f, "page_like");
            l(g, "page_unlike");
            l(h, "page_avatar");
            l(i, "page_permalink");
            l(j, "page_share");
            l(k, "page_cta")
        }
    };
    e.exports = a
}), null);
__d("randomInt", ["invariant"], (function(a, b, c, d, e, f, g) {
    function a(a, b) {
        a = b === void 0 ? [0, a] : [a, b];
        b = a[0];
        a = a[1];
        a > b || g(0, 1180, a, b);
        var c = this.random || Math.random;
        return Math.floor(b + c() * (a - b))
    }
    e.exports = a
}), null);
__d("ClientIDs", ["randomInt"], (function(a, b, c, d, e, f) {
    var g = new Set();
    a = {
        getNewClientID: function() {
            var a = Date.now();
            a = a + ":" + (b("randomInt")(0, 4294967295) + 1);
            g.add(a);
            return a
        },
        isExistingClientID: function(a) {
            return g.has(a)
        }
    };
    e.exports = a
}), null);
__d("csx", [], (function(a, b, c, d, e, f) {
    function a(a) {
        throw new Error("csx: Unexpected class selector transformation.")
    }
    e.exports = a
}), null);