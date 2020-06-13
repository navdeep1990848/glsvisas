if (self.CavalryLogger) {
    CavalryLogger.start_js(["3hYMG"]);
}

__d("ImmutableValue", ["invariant", "isNode"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = "_DONT_EVER_TYPE_THIS_SECRET_KEY";
    a = function() {
        function a(b) {
            b === a[h] || g(0, 5608)
        }
        a.mergeAllPropertiesInto = function(a, b) {
            var c = b.length;
            for (var d = 0; d < c; d++) Object.assign(a, b[d])
        };
        a.deepFreezeRootNode = function(c) {
            if (b("isNode")(c)) return;
            Object.freeze(c);
            for (var d in c) Object.prototype.hasOwnProperty.call(c, d) && a.recurseDeepFreeze(c[d]);
            Object.seal(c)
        };
        a.recurseDeepFreeze = function(c) {
            if (b("isNode")(c) || !a.shouldRecurseFreeze(c)) return;
            Object.freeze(c);
            for (var d in c) Object.prototype.hasOwnProperty.call(c, d) && a.recurseDeepFreeze(c[d]);
            Object.seal(c)
        };
        a.shouldRecurseFreeze = function(b) {
            return typeof b === "object" && !(b instanceof a) && b !== null
        };
        return a
    }();
    a._DONT_EVER_TYPE_THIS_SECRET_KEY = Math.random();
    e.exports = a
}), null);
__d("mergeHelpers", ["invariant", "FbtResultBase"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = 36,
        i = function(a) {
            return typeof a !== "object" || a instanceof Date || a === null || a instanceof b("FbtResultBase")
        },
        j = {
            MAX_MERGE_DEPTH: h,
            isTerminal: i,
            normalizeMergeArg: function(a) {
                return a == null ? {} : a
            },
            checkMergeArrayArgs: function(a, b) {
                Array.isArray(a) && Array.isArray(b) || g(0, 3714, a, b)
            },
            checkMergeObjectArgs: function(a, b) {
                j.checkMergeObjectArg(a), j.checkMergeObjectArg(b)
            },
            checkMergeObjectArg: function(a) {
                !i(a) && !Array.isArray(a) || g(0, 3715, a)
            },
            checkMergeIntoObjectArg: function(a) {
                (!i(a) || typeof a === "function") && !Array.isArray(a) || g(0, 3716, a)
            },
            checkMergeLevel: function(a) {
                a < h || g(0, 3717)
            },
            checkArrayStrategy: function(a) {
                a == null || a in j.ArrayStrategies || g(0, 3718)
            },
            ArrayStrategies: {
                Clobber: "Clobber",
                Concat: "Concat",
                IndexByIndex: "IndexByIndex"
            }
        };
    e.exports = j
}), null);
__d("ImmutableObject", ["invariant", "ImmutableValue", "mergeHelpers"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = b("mergeHelpers").checkMergeObjectArgs,
        i = b("mergeHelpers").isTerminal,
        j = "_DONT_EVER_TYPE_THIS_SECRET_KEY";

    function k(a) {
        a instanceof b("ImmutableValue") || g(0, 3884)
    }
    var l = function(c) {
        babelHelpers.inheritsLoose(a, c);

        function a() {
            var a;
            a = c.call(this, b("ImmutableValue")[j]) || this;
            b("ImmutableValue").mergeAllPropertiesInto(babelHelpers.assertThisInitialized(a), arguments);
            return a
        }
        a.set = function(b, c) {
            k(b);
            typeof c === "object" && c !== void 0 && !Array.isArray(c) || g(0, 3885);
            return new a(b, c)
        };
        a.setProperty = function(b, c, d) {
            var e = {};
            e[c] = d;
            return a.set(b, e)
        };
        a.deleteProperty = function(b, c) {
            var d = {};
            for (var e in b) e !== c && Object.prototype.hasOwnProperty.call(b, e) && (d[e] = b[e]);
            return new a(d)
        };
        a.setDeep = function(a, b) {
            k(a);
            return m(a, b)
        };
        a.values = function(a) {
            return Object.keys(a).map(function(b) {
                return a[b]
            })
        };
        return a
    }(b("ImmutableValue"));

    function m(a, c) {
        h(a, c);
        var d = {},
            e = Object.keys(a);
        for (var f = 0; f < e.length; f++) {
            var g = e[f];
            !Object.prototype.hasOwnProperty.call(c, g) ? d[g] = a[g] : i(a[g]) || i(c[g]) ? d[g] = c[g] : d[g] = m(a[g], c[g])
        }
        g = Object.keys(c);
        for (f = 0; f < g.length; f++) {
            e = g[f];
            if (Object.prototype.hasOwnProperty.call(a, e)) continue;
            d[e] = c[e]
        }
        return a instanceof b("ImmutableValue") ? new l(d) : c instanceof b("ImmutableValue") ? new l(d) : d
    }
    e.exports = l
}), null);
__d("PagePluginEvents", ["ImmutableObject", "keyMirrorRecursive"], (function(a, b, c, d, e, f) {
    "use strict";
    a = new(b("ImmutableObject"))(b("keyMirrorRecursive")({
        page_plugin: {
            tab: {
                configured: "",
                click: "",
                render: ""
            },
            messages: {
                send: "",
                logged_out: "",
                invalid_height: ""
            }
        }
    }));
    e.exports = a
}), null);
__d("XPagePluginLoggingController", ["XController"], (function(a, b, c, d, e, f) {
    e.exports = b("XController").create("/platform/plugin/page/logging/", {})
}), null);
__d("PagePluginLogger", ["AsyncRequest", "XPagePluginLoggingController"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        function a(a, b) {
            this.$1 = a, this.$2 = b
        }
        var c = a.prototype;
        c.notify = function(a, c, d) {
            var e = b("XPagePluginLoggingController").getURIBuilder().getURI();
            new(b("AsyncRequest"))().setURI(e).setMethod("POST").setData({
                event_name: a,
                page_id: this.$1,
                tab: c,
                data: Object.assign(d ? d : {}, {
                    refererURL: this.$2
                })
            }).send()
        };
        return a
    }();
    e.exports = a
}), null);
__d("GridItem.react", ["cx", "React", "joinClasses"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = b("React");

    function a(a) {
        var c = a.alignv,
            d = a.alignh,
            e = a.className;
        a = babelHelpers.objectWithoutPropertiesLoose(a, ["alignv", "alignh", "className"]);
        return h.jsx("td", babelHelpers["extends"]({}, a, {
            className: b("joinClasses")(e, "_51m-" + (c === "top" ? " vTop" : "") + (c === "middle" ? " vMid" : "") + (c === "bottom" ? " vBot" : "") + (d === "left" ? " hLeft" : "") + (d === "center" ? " hCent" : "") + (d === "right" ? " hRght" : ""))
        }))
    }
    e.exports = a
}), null);
__d("Grid.react", ["cx", "GridItem.react", "React", "joinClasses"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = b("React");
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);

        function c() {
            return a.apply(this, arguments) || this
        }
        var d = c.prototype;
        d.render = function() {
            var a = this.props,
                d = a.alignh,
                e = a.alignv,
                f = a.children,
                g = a.cols,
                i = a.fixed,
                j = a.spacing,
                k = h.Children.count(f),
                l = [],
                m = [],
                n = 0;
            h.Children.forEach(f, function(a, f) {
                if (a === null || a === void 0) return;
                var o = a.type === c.GridItem;
                n += o ? Math.max(a.props.colSpan || 0, 1) : 1;
                var p = n === g ? "_51mw" : "";
                o = o ? h.cloneElement(a, {
                    key: a.key || f,
                    alignh: a.props.alignh || d,
                    alignv: a.props.alignv || e,
                    className: b("joinClasses")(a.props.className, j, p)
                }) : h.jsx(b("GridItem.react"), {
                    alignh: d,
                    alignv: e,
                    className: b("joinClasses")(j, p),
                    children: a
                }, a.key || f);
                m.push(o);
                if (n % g === 0 || f + 1 === k) {
                    if (i === !0 && n < g) {
                        for (var p = n; p < g; p++) m.push(h.jsx(b("GridItem.react"), {}, f + p));
                        n = g
                    }
                    l.push(h.jsx("tr", {
                        className: "_51mx",
                        children: m
                    }, f));
                    m = [];
                    n = 0
                }
            });
            return h.jsx("table", babelHelpers["extends"]({}, this.props, {
                className: b("joinClasses")(this.props.className, "uiGrid _51mz" + (i === !0 ? " _5f0n" : "")),
                cellSpacing: "0",
                cellPadding: "0",
                children: h.jsx("tbody", {
                    children: l
                })
            }))
        };
        return c
    }(h.Component);
    a.GridItem = b("GridItem.react");
    e.exports = a
}), null);
__d("isKeyActivation", ["Keys"], (function(a, b, c, d, e, f) {
    "use strict";

    function a(a) {
        var c = 0,
            d = a.charCode;
        a = a.keyCode;
        d != null && d !== 0 ? c = d : a != null && a !== 0 && (c = a);
        return [b("Keys").RETURN, b("Keys").SPACE].includes(c)
    }
    e.exports = a
}), null);
__d("KeyActivationToClickHOC.react", ["React", "isKeyActivation"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("React");
    a = function(a) {
        var c, d;
        return d = c = function(c) {
            babelHelpers.inheritsLoose(d, c);

            function d() {
                var a;
                for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++) e[f] = arguments[f];
                a = c.call.apply(c, [this].concat(e)) || this;
                a.$2 = function(c) {
                    b("isKeyActivation")(c) && (c.preventDefault(), c.stopPropagation(), a.$1 && a.$1.click())
                };
                a.$3 = function(b) {
                    a.$1 = b
                };
                a.$1 = null;
                return a
            }
            var e = d.prototype;
            e.render = function() {
                return g.jsx(a, babelHelpers["extends"]({}, this.props, {
                    keyActivationToClickEvent: this.$2,
                    keyActivationToClickRef: this.$3
                }))
            };
            return d
        }(g.Component), c.displayName = "KeyActivationToClickHOC", d
    };
    e.exports = a
}), null);
__d("ShimButton.react", ["KeyActivationToClickHOC.react", "React", "emptyFunction", "killswitch", "prop-types"], (function(a, b, c, d, e, f) {
    var g = b("React");
    a = function(a) {
        "use strict";
        babelHelpers.inheritsLoose(c, a);

        function c() {
            var b, c;
            for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++) e[f] = arguments[f];
            return (b = c = a.call.apply(a, [this].concat(e)) || this, c.$1 = function(a) {
                c.props.keyActivationToClickRef(a), c.props.onRef(a)
            }, b) || babelHelpers.assertThisInitialized(c)
        }
        var d = c.prototype;
        d.render = function() {
            var a = this.props,
                c = a.children,
                d = a.form,
                e = a.inline,
                f = a.keyActivationToClickEvent;
            a.keyActivationToClickRef;
            a.onRef;
            var h = a.pressed;
            a = babelHelpers.objectWithoutPropertiesLoose(a, ["children", "form", "inline", "keyActivationToClickEvent", "keyActivationToClickRef", "onRef", "pressed"]);
            e = e ? "span" : "div";
            d === "link" && (e = "a");
            f = (d = {}, d[b("killswitch")("SHIM_BUTTON_USE_ONKEYDOWN_INSTEAD_OF_ONKEYPRESS") ? "onKeyPress" : "onKeyDown"] = f, d);
            return g.jsx(e, babelHelpers["extends"]({}, a, {
                "aria-pressed": h,
                ref: this.$1,
                role: "button"
            }, f, {
                children: c
            }))
        };
        return c
    }(g.Component);
    a.defaultProps = {
        form: "none",
        inline: !1,
        keyActivationToClickEvent: c = b("emptyFunction"),
        keyActivationToClickRef: c,
        onClick: c,
        onRef: c,
        tabIndex: "0"
    };
    a.propTypes = {
        children: (d = b("prop-types")).any,
        form: d.oneOf(["none", "link"]),
        inline: d.bool,
        tabIndex: d.oneOf(["-1", "0", -1, 0]),
        onClick: d.func,
        onRef: d.func
    };
    e.exports = b("KeyActivationToClickHOC.react")(a)
}), null);
__d("PluginTabItem.react", ["cx", "React", "ShimButton.react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = b("React");
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);

        function c() {
            return a.apply(this, arguments) || this
        }
        var d = c.prototype;
        d.render = function() {
            var a = this,
                c = this.props.tab.key;
            return h.jsx(b("ShimButton.react"), {
                className: "_eg_" + (this.props.activeTabKey === c ? " _eh2" : ""),
                onClick: function() {
                    return a.props.onSelected(c)
                },
                children: h.jsx("div", {
                    className: "_eh3",
                    children: this.props.tab.title
                })
            })
        };
        return c
    }(h.Component);
    e.exports = a
}), null);
__d("PluginTabControl.react", ["cx", "Grid.react", "PluginTabItem.react", "React"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = b("Grid.react").GridItem,
        i = b("React");
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);

        function c() {
            return a.apply(this, arguments) || this
        }
        var d = c.prototype;
        d.render = function() {
            var a = this;
            return i.jsx(b("Grid.react"), {
                className: "_4v3l",
                cols: this.props.tabs.length,
                fixed: !0,
                children: this.props.tabs.map(function(c) {
                    return i.jsx(h, {
                        className: "_4v3m",
                        children: i.jsx(b("PluginTabItem.react"), {
                            activeTabKey: a.props.activeTabKey,
                            tab: c,
                            onSelected: a.props.onTabSelected
                        })
                    }, c.key)
                })
            })
        };
        return c
    }(i.Component);
    e.exports = a
}), null);
__d("XPluginTabAsyncRendererController", ["XController"], (function(a, b, c, d, e, f) {
    e.exports = b("XController").create("/platform/plugin/tab/renderer/", {})
}), null);
__d("PluginTabFetcher.react", ["csx", "cx", "AsyncRequest", "DOM", "DOMQuery", "Event", "React", "ReactDOM", "XPluginTabAsyncRendererController", "XUISpinner.react"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = b("React");
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);

        function c(b, c) {
            b = a.call(this, b, c) || this;
            b.state = {
                isFetchingComponent: !1,
                asyncContentLoaded: !1
            };
            b.hasMoreContent = !0;
            b.isLoadingContent = !1;
            return b
        }
        var d = c.prototype;
        d.UNSAFE_componentWillReceiveProps = function(a) {
            if (a.isActive === this.props.isActive || !a.isActive) return;
            this.$1()
        };
        d.componentDidMount = function() {
            this.props.isActive && this.$1()
        };
        d.$2 = function() {
            var a = this.refs.container,
                b = a.clientHeight,
                c = a.children[0].clientHeight;
            a = a.scrollTop;
            var d = 100;
            !this.isLoadingContent && this.hasMoreContent && a + b + d > c && (this.isLoadingContent = !0, this.$3())
        };
        d.$3 = function() {
            var a = this,
                c = b("XPluginTabAsyncRendererController").getURIBuilder().getURI(),
                d = this.props.tab.configData;
            new(b("AsyncRequest"))().setURI(c).setMethod("POST").setData({
                cursor: this.cursor,
                config_json: JSON.stringify(d),
                key: this.props.tab.key
            }).setHandler(function(c) {
                a.setState({
                    isFetchingComponent: !1,
                    asyncContentLoaded: !0
                }, function() {
                    var d = c.payload;
                    a.isLoadingContent = !1;
                    if (a.hasMoreContent) {
                        var e = b("DOMQuery").scry(a.refs.container, "._1_lk");
                        e = e[e.length - 1];
                        b("DOM").appendContent(e, d.content.markup)
                    }
                })
            }).send()
        };
        d.$4 = function() {
            var a = this;
            this.scrollListener = b("Event").listen(this.refs.container, "scroll", function() {
                a.scrollTimeout && (clearTimeout(a.scrollTimeout), a.scrollTimeout = null), a.scrollTimeout = setTimeout(function() {
                    return a.$2()
                }, 250)
            });
            var c = b("DOMQuery").find(this.refs.container, "._10b6");
            b("Event").listen(c, "noMoreContent", function() {
                a.hasMoreContent = !1, a.scrollListener.remove()
            });
            b("Event").listen(c, "setCursor", function(b) {
                a.cursor = b.getData()
            })
        };
        d.$1 = function() {
            var a = this;
            if (!this.state.asyncContentLoaded && !this.state.isFetchingComponent) {
                this.setState({
                    isFetchingComponent: !0
                });
                var c = b("XPluginTabAsyncRendererController").getURIBuilder().getURI();
                new(b("AsyncRequest"))().setURI(c).setMethod("POST").setData({
                    config_json: JSON.stringify(this.props.tab.configData),
                    key: this.props.tab.key
                }).setHandler(function(c) {
                    a.setState({
                        isFetchingComponent: !1,
                        asyncContentLoaded: !0
                    }, function() {
                        var d = c.payload;
                        b("DOM").setContent(b("ReactDOM").findDOMNode(a.refs.container), d.content.markup);
                        a.props.tab.canLoadMore && (a.cursor = "", a.$4())
                    })
                }).send()
            }
        };
        d.render = function() {
            return i.jsxs("div", {
                className: this.props.isActive ? "" : "hidden_elem",
                children: [i.jsx("div", {
                    style: {
                        maxHeight: this.props.tabHeight + "px"
                    },
                    className: "_10b4" + (this.state.isFetchingComponent ? " hidden_elem" : ""),
                    ref: "container"
                }), i.jsx("div", {
                    className: "_10b5" + (this.state.isFetchingComponent ? "" : " hidden_elem"),
                    children: i.jsx(b("XUISpinner.react"), {
                        className: "_4g7o",
                        size: "large"
                    })
                })]
            })
        };
        return c
    }(i.Component);
    e.exports = a
}), null);
__d("PluginTabContainer.react", ["cx", "PluginTabControl.react", "PluginTabFetcher.react", "React"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = b("React");
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);

        function c(b, c) {
            b = a.call(this, b, c) || this;
            b.state = {
                activeTabKey: b.props.activeTabKey
            };
            return b
        }
        var d = c.prototype;
        d.componentDidMount = function() {
            var a = this;
            this.props.tabs.map(function(b) {
                return a.onTabLoaded(b)
            })
        };
        d.onTabLoaded = function(a) {};
        d.onTabSelected = function(a) {
            this.setState({
                activeTabKey: a
            })
        };
        d.render = function() {
            var a = this,
                c = this.props.tabs.length;
            return c === 0 ? null : h.jsxs("div", {
                children: [c > 1 ? h.jsx(b("PluginTabControl.react"), {
                    tabs: this.props.tabs,
                    activeTabKey: this.state.activeTabKey,
                    onTabSelected: function(b) {
                        return a.onTabSelected(b)
                    }
                }) : null, h.jsx("div", {
                    className: "_2hkj",
                    children: this.props.tabs.map(function(c) {
                        return h.jsx(b("PluginTabFetcher.react"), {
                            tab: c,
                            isActive: c.key === a.state.activeTabKey,
                            tabHeight: a.props.tabHeight
                        }, c.key)
                    })
                })]
            })
        };
        return c
    }(h.Component);
    e.exports = a
}), null);
__d("PagePluginTabContainer.react", ["PagePluginEvents", "PagePluginLogger", "PluginTabContainer.react"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);

        function c(c, d) {
            d = a.call(this, c, d) || this;
            d.$PagePluginTabContainer1 = new(b("PagePluginLogger"))(c.pageID, c.refererURI);
            return d
        }
        var d = c.prototype;
        d.onTabLoaded = function(a) {
            this.$PagePluginTabContainer1.notify(b("PagePluginEvents").page_plugin.tab.configured, a.key)
        };
        d.onTabSelected = function(c) {
            this.$PagePluginTabContainer1.notify(b("PagePluginEvents").page_plugin.tab.click, c), a.prototype.onTabSelected.call(this, c)
        };
        return c
    }(b("PluginTabContainer.react"));
    e.exports = a
}), null);