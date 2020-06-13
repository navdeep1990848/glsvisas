if (self.CavalryLogger) {
    CavalryLogger.start_js(["SX4mL"]);
}

__d("BrowseClientEventLogger", ["csx", "Banzai", "DOMQuery", "SearchLoggingOptions", "ge", "ifRequired"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = "browse_client_event_session",
        i = "search_www_click_error",
        j = "21.";
    a = {
        logData: function(a, c, d, e) {
            e === void 0 && (e = {});
            if (!a || !c) return;
            e.event = a;
            e.client_time = Math.floor(Date.now());
            e.client_time_2 = Date.now() / 1e3;
            e.session_id = c;
            e.vertical = d;
            this.processedSessions = this.processedSessions || [];
            if (this.processedSessions.indexOf(c) !== -1) return;
            a = e.event === "click" && e.clicked_href != null && b("SearchLoggingOptions").signalLinkClicks;
            b("Banzai").post(h, [e], {
                delay: 0,
                retry: !0,
                signal: a
            })
        },
        logClick: function(a) {
            a.gt.event = "click", this.maybeLogVisiblityEvent(a, !0), b("ifRequired")("FacebarTypeaheadRefreshNullstate", function(a) {
                a.setIsNullstateStale(!0)
            })
        },
        maybeLogClientViewEvent: function(a) {
            a.event = "client_view", this.maybeLogVisiblityEvent(a)
        },
        maybeLogVisiblityEvent: function(a, c) {
            c === void 0 && (c = !1);
            var d = null;
            c && (d = a, a = a.gt);
            if (!a || !a.xt || a.xt.indexOf(j) !== 0) {
                c && b("Banzai").post(i, [d], {
                    delay: 0,
                    retry: !0
                });
                return
            }
            var e = JSON.parse(a.xt.substring(3));
            c && (e.click_type = a.click_type, e.tn = a.tn, e.clicked_href = a.clicked_href, d && d.bt && d.bt.ct && (d.bt.ct == "feedback" && (e.feedback_score = d.bt.feedback_score, e.feedback_type = d.bt.feedback_type)));
            c = a.event;
            d = this._getPositionForCurrentDOMNode(e.unit_id);
            e.position = d;
            if (e.display_style === "context_hscroll" && (c === "client_view" || c === "vpvd" || c === "visible" || c === "hidden")) return;
            if (c === "vpvd") {
                if (!a.ft) return;
                e.vpvd_time = a.ft.vpvd_time_delta
            }
            this.logData(c, e.session_id, e.vertical, e)
        },
        _getPositionForCurrentDOMNode: function(a) {
            if (a == null || a == void 0) return null;
            var c = 0,
                d = b("ge")("browse_result_area");
            if (d == null || d == void 0) return null;
            d = b("DOMQuery").scry(d, "._401d");
            for (var e = 0; e < d.length; e++) {
                var f = d[e];
                f = f.getAttribute("data-gt");
                if (f !== null || f !== void 0) {
                    f = JSON.parse(JSON.parse(f).xt.substring(3));
                    if (f.item_type == "result" && f.id !== "" && f.id !== null) {
                        if (f.unit_id == a) return c;
                        c++
                    }
                }
            }
            return null
        },
        logImpression: function(a) {
            a.event = "impression", this.maybeLogVisiblityEvent(a)
        }
    };
    e.exports = a
}), null);
__d("QualityOfConnectionsExperimentTypedLogger", ["Banzai", "GeneratedLoggerUtils", "nullthrows"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        function a() {
            this.$1 = {}
        }
        var c = a.prototype;
        c.log = function() {
            b("GeneratedLoggerUtils").log("logger:QualityOfConnectionsExperimentLoggerConfig", this.$1, b("Banzai").BASIC)
        };
        c.logVital = function() {
            b("GeneratedLoggerUtils").log("logger:QualityOfConnectionsExperimentLoggerConfig", this.$1, b("Banzai").VITAL)
        };
        c.logImmediately = function() {
            b("GeneratedLoggerUtils").log("logger:QualityOfConnectionsExperimentLoggerConfig", this.$1, {
                signal: !0
            })
        };
        c.clear = function() {
            this.$1 = {};
            return this
        };
        c.getData = function() {
            return babelHelpers["extends"]({}, this.$1)
        };
        c.updateData = function(a) {
            this.$1 = babelHelpers["extends"]({}, this.$1, a);
            return this
        };
        c.setError = function(a) {
            this.$1.error = a;
            return this
        };
        c.setEvent = function(a) {
            this.$1.event = a;
            return this
        };
        c.setExperimentGroup = function(a) {
            this.$1.experiment_group = a;
            return this
        };
        c.setFollowPage = function(a) {
            this.$1.follow_page = a;
            return this
        };
        c.setLikePage = function(a) {
            this.$1.like_page = a;
            return this
        };
        c.setPageID = function(a) {
            this.$1.page_id = a;
            return this
        };
        c.setTime = function(a) {
            this.$1.time = a;
            return this
        };
        c.setVC = function(a) {
            this.$1.vc = a;
            return this
        };
        c.setWeight = function(a) {
            this.$1.weight = a;
            return this
        };
        return a
    }();
    c = {
        error: !0,
        event: !0,
        experiment_group: !0,
        follow_page: !0,
        like_page: !0,
        page_id: !0,
        time: !0,
        vc: !0,
        weight: !0
    };
    e.exports = a
}), null);
__d("XFollowPrivacyNuxLogViewAsyncController", ["XController"], (function(a, b, c, d, e, f) {
    e.exports = b("XController").create("/follow/follow_privacy/nux/log/view/", {})
}), null);
__d("XPagesQualityOfConnectionsExperimentController", ["XController"], (function(a, b, c, d, e, f) {
    e.exports = b("XController").create("/pages/quality_of_connections_experiment/", {
        page_id: {
            type: "FBID",
            required: !0
        },
        __asyncDialog: {
            type: "Int"
        }
    })
}), null);
__d("XPubcontentChainedSuggestionsController", ["XController"], (function(a, b, c, d, e, f) {
    e.exports = b("XController").create("/pubcontent/chained_suggestions/", {
        pageid: {
            type: "String"
        },
        profileid: {
            type: "Int"
        },
        eh: {
            type: "Bool",
            defaultValue: !1
        },
        friendid: {
            type: "Int"
        }
    })
}), null);
__d("SubscribeButton", ["Arbiter", "AsyncRequest", "Button", "CSS", "Event", "QualityOfConnectionsExperimentTypedLogger", "TooltipData", "XFollowPrivacyNuxLogViewAsyncController", "XPagesQualityOfConnectionsExperimentController", "XPubcontentChainedSuggestionsController", "qex"], (function(a, b, c, d, e, f) {
    var g = {
        SUBSCRIBED: "FollowingUser",
        UNSUBSCRIBED: "UnfollowingUser",
        _enable: function(a) {
            b("Button").setEnabled(a, !0), b("TooltipData").remove(a)
        },
        _disable: function(a, c) {
            b("Button").setEnabled(a, !1), c && b("TooltipData").set(a, c)
        },
        init: function(a, c, d, e, f, h, i, j, k, l, m, n, o, p, q) {
            q === void 0 && (q = !1);
            var r = !m && !o,
                s = !(k === void 0 || k === null);
            s && !i && !j && g._disable(c, k);
            b("Event").listen(c, "click", function() {
                b("Arbiter").inform(g.SUBSCRIBED, {
                    profile_id: e,
                    contextID: n,
                    suppress: !0
                });
                if (l) {
                    l.show();
                    var a = b("XFollowPrivacyNuxLogViewAsyncController").getURIBuilder().getURI();
                    new(b("AsyncRequest"))(a).send()
                }
                if (p) {
                    a = b("XPagesQualityOfConnectionsExperimentController").getURIBuilder().setFBID("page_id", e).getURI();
                    new(b("AsyncRequest"))().setURI(a).send()
                }
                if (q) {
                    a = b("qex")._("812260");
                    a !== null && new(b("QualityOfConnectionsExperimentTypedLogger"))().setExperimentGroup(a).setEvent("CLICK_FOLLOW").setPageID(e).log()
                }
            });
            b("Arbiter").subscribe(g.SUBSCRIBED, function(k, l) {
                if (e == l.profile_id) {
                    f || d.suppressNextMouseEnter && d.suppressNextMouseEnter();
                    s && (typeof l.connected !== "undefined" && (i = l.connected), (i || j) && g._enable(c));
                    l.focusOnClick !== void 0 && (r = l.focusOnClick);
                    a.swap(r);
                    if (h === !0 && l.chaining !== !1) {
                        k = b("XPubcontentChainedSuggestionsController").getURIBuilder().setInt("profileid", e).getURI();
                        new(b("AsyncRequest"))().setURI(k).send()
                    }
                }
            });
            b("Arbiter").subscribe(g.UNSUBSCRIBED, function(f, h) {
                e == h.profile_id && (a.unswap(r), d.hideFlyout && d.hideFlyout(), s && (typeof h.connected !== "undefined" && (i = h.connected), !i && !j && g._disable(c, k)), b("Arbiter").inform("SubMenu/Reset"))
            })
        },
        initSubscribe: function(a, c) {
            b("Event").listen(a, "click", function() {
                setTimeout(b("Arbiter").inform.bind(b("Arbiter"), g.SUBSCRIBED, {
                    profile_id: c
                }), 0)
            })
        },
        initUnsubscribe: function(a, c, d, e) {
            e === void 0 && (e = !1), b("Event").listen(a, "click", function() {
                setTimeout(b("Arbiter").inform.bind(b("Arbiter"), g.UNSUBSCRIBED, {
                    profile_id: c,
                    contextID: d
                }), 0);
                if (e) {
                    var a = b("qex")._("812260");
                    a !== null && new(b("QualityOfConnectionsExperimentTypedLogger"))().setExperimentGroup(a).setEvent("CLICK_UNFOLLOW").setPageID(c).log()
                }
            })
        },
        initSubscribeMenuItem: function(a, c, d) {
            b("CSS").hide(c), this._initMenuItem(a, c, d)
        },
        initUnsubscribeMenuItem: function(a, c, d) {
            b("CSS").hide(a), this._initMenuItem(a, c, d)
        },
        _initMenuItem: function(a, c, d) {
            this.initSubscribe(a, d), this.initUnsubscribe(c, d), b("Arbiter").subscribe(g.SUBSCRIBED, function(d, e) {
                b("CSS").hide(a), b("CSS").show(c)
            }), b("Arbiter").subscribe(g.UNSUBSCRIBED, function(d, e) {
                b("CSS").hide(c), b("CSS").show(a)
            })
        }
    };
    e.exports = g
}), null);
__d("XPubcontentInlinePhotoPivotsEventsController", ["XController"], (function(a, b, c, d, e, f) {
    e.exports = b("XController").create("/pubcontent/inline_photo_pivots_chaining/events/", {})
}), null);
__d("tidyEvent", ["Run"], (function(a, b, c, d, e, f) {
    var g = [];

    function h() {
        while (g.length) {
            var a = g.shift();
            a.remove ? a.remove() : a.unsubscribe && a.unsubscribe()
        }
    }

    function i(a) {
        var b, c = a;

        function d() {
            if (!b) return;
            b.apply(c, arguments);
            b = null;
            c = null
        }
        if (c && c.remove) b = c.remove, c.remove = d;
        else {
            b = (a = c) == null ? void 0 : a.unsubscribe;
            c.unsubscribe = d
        }
        return c
    }

    function a(a) {
        g.length || b("Run").onLeave(h);
        if (Array.isArray(a))
            for (var c = 0; c < a.length; c++) a[c] && g.push(i(a[c]));
        else a && g.push(i(a));
        return a
    }
    e.exports = a
}), null);
__d("EntstreamAttachmentRelatedShare", ["csx", "cx", "Arbiter", "AsyncRequest", "CSS", "DOM", "Event", "SubscribeButton", "XPubcontentInlinePhotoPivotsEventsController", "ge", "getOrCreateDOMID", "tidyEvent"], (function(a, b, c, d, e, f, g, h) {
    var i = 2,
        j = 3;
    a = {
        loadSuggestedShowsPivotAttachment: function(a, c, d) {
            var e = b("ge")(a);
            if (!e) return;
            var f = b("Arbiter").subscribe(b("SubscribeButton").SUBSCRIBED, function(a, g) {
                f.unsubscribe();
                if (g.profile_id !== c.toString()) return;
                b("Arbiter").inform("show_follow_click", {
                    attachment: e,
                    pageID: c,
                    storyID: d
                })
            })
        },
        loadRelatedAttachment: function(a, c, d) {
            var e = null;
            typeof a === "string" ? e = b("ge")(a) : e = a;
            if (!e) return;
            var f = b("Event").listen(e, "click", function() {
                    f.remove(), b("Arbiter").inform("article_click", {
                        attachment: e,
                        global_share_id: c,
                        is_right_click: !1,
                        share_id: d
                    })
                }),
                g = b("Event").listen(e, "mousedown", function(a) {
                    (a.which === j || a.button === i) && (g.remove(), b("Arbiter").inform("article_click", {
                        attachment: e,
                        global_share_id: c,
                        is_right_click: !0
                    }))
                })
        },
        loadInlineStoryPivotAttachment: function(a, c) {
            var d = b("ge")(a);
            if (!d) return;
            var e = b("Event").listen(d, "click", function() {
                e.remove(), b("Arbiter").inform("photo_click", {
                    attachment: d,
                    storyid: c
                })
            })
        },
        loadRelatedGameAttachment: function(a, c) {
            var d = null;
            typeof a === "string" ? d = b("ge")(a) : d = a;
            if (!d) return;
            b("tidyEvent")(b("Event").listen(d, "click", function() {
                b("Arbiter").inform("game_click", {
                    attachment: d,
                    global_share_id: c
                })
            }));
            b("tidyEvent")(b("Event").listen(d, "mousedown", function(a) {
                (a.which === j || a.button === i) && b("Arbiter").inform("game_click", {
                    attachment: d,
                    global_share_id: c
                })
            }))
        },
        loadRelatedLSCVideoAttachment: function(a, c) {
            var d = null;
            typeof a === "string" ? d = b("ge")(a) : d = a;
            if (!d) return;
            var e = b("Event").listen(d, "click", function() {
                e.remove(), b("Arbiter").inform("video_click", {
                    attachment: d,
                    global_share_id: c
                })
            })
        },
        loadRelatedLSCInlineVideoAttachment: function(a, c) {
            var d = null;
            typeof a === "string" ? d = b("ge")(a) : d = a;
            if (!d) return;
            b("Event").listen(d, "click", function() {
                var a = "^div._4-u2",
                    e = "_1d8v";
                a = b("DOM").scry(d, a);
                a = a.length === 1 ? a[0] : null;
                var f = a.parentNode,
                    g = f.previousSibling;
                while (!g) f = f.parentNode, g = f.previousSibling;
                if (!b("CSS").hasClass(g, e)) var f = b("DOM").create("div", {
                        className: e
                    }),
                    e = b("DOM").insertBefore(a.parentNode, f),
                    a = e.length >= 1 ? e[0] : null;
                else a = g;
                f = b("getOrCreateDOMID")(a);
                new(b("AsyncRequest"))().setURI("/ajax/flash/expand_inline.php").setData({
                    share_id: c,
                    target_div: f,
                    max_width: 470,
                    max_height: 264,
                    replace_target_div: !0
                }).setMethod("GET").setReadOnly(!0).setRelativeTo(d.parentNode).send()
            })
        },
        loadRelatedEventsPivotAttachment: function(a, c) {
            var d = null;
            typeof a === "string" ? d = b("ge")(a) : d = a;
            if (!d) return;
            b("tidyEvent")(b("Event").listen(d, "click", function() {
                b("Arbiter").inform("event_join", {
                    attachment: d,
                    event_id: c
                })
            }))
        },
        loadMapAttachment: function(a, c, d) {
            a = typeof a === "string" ? b("ge")(a) : a;
            if (!a) return;
            var e = typeof c === "string" ? b("ge")(c) : c;
            if (!e) return;
            b("tidyEvent")(b("Event").listen(a, "click", function() {
                b("Arbiter").inform("map_click", {
                    attachment: e,
                    story_id: d
                })
            }))
        },
        loadMapAttachmentActionButton: function(a, c) {
            var d = typeof a === "string" ? b("ge")(a) : a;
            if (!d) return;
            b("tidyEvent")(b("Event").listen(d, "click", function() {
                b("Arbiter").inform("action_button_click", {
                    button: d,
                    story_id: c
                })
            }))
        },
        closeButton: function(a, c) {
            b("Event").listen(a, "click", function() {
                b("DOM").remove(c)
            })
        },
        closeButtonPhotoPivots: function(a, c, d, e) {
            b("Event").listen(a, "click", function() {
                var a = b("XPubcontentInlinePhotoPivotsEventsController").getURIBuilder(),
                    f = {
                        story_id: d,
                        search_query_type: e,
                        event: "hide"
                    };
                new(b("AsyncRequest"))().setMethod("POST").setURI(a.getURI()).setData(f).send();
                b("DOM").remove(c)
            })
        },
        seeAllLinkPhotoPivots: function(a, c, d) {
            b("Event").listen(a, "click", function() {
                var a = b("XPubcontentInlinePhotoPivotsEventsController").getURIBuilder(),
                    e = {
                        story_id: c,
                        search_query_type: d,
                        event: "see_all"
                    };
                new(b("AsyncRequest"))().setMethod("POST").setURI(a.getURI()).setData(e).send()
            })
        },
        removeOldSuggestions: function(a) {
            a = b("ge")(a);
            if (!a) return;
            var c = b("DOM").scry(a.parentNode, "._5d73");
            for (var a = 1; a < c.length; a++) b("DOM").remove(c[a]);
            window.setTimeout(function() {
                b("CSS").show(c[0])
            }, 1e3)
        },
        showHiddenSuggestions: function(a) {
            var c = b("Event").listen(a, "click", function() {
                c.remove();
                var d = "^._1ui8";
                d = b("DOM").scry(a, d);
                if (!d) return;
                b("CSS").hide(d[0]);
                d = d[0].previousSibling;
                while (d) b("CSS").show(d), d = d.previousSibling
            })
        }
    };
    e.exports = a
}), null);
__d("LitestandMessages", [], (function(a, b, c, d, e, f) {
    a = Object.freeze({
        NEWSFEED_LOAD: "LitestandMessages/NewsFeedLoad",
        LEAVE_HOME: "LitestandMessages/LeaveHome",
        STORIES_REQUESTED: "LitestandMessages/StoriesRequested",
        STORIES_INSERTED: "LitestandMessages/StoriesInserted",
        NEWER_STORIES_REQUESTED: "LitestandMessages/NewerStoriesRequested",
        NEWER_STORIES_INSERTED: "LitestandMessages/NewerStoriesInserted",
        NEW_STORIES_CONTAINER_CREATED: "LitestandMessages/NewStoriesContainer",
        RHC_RELOADED: "LitestandMessages/RHCReloaded",
        STREAM_LOAD_ERROR: "LitestandMessages/StreamLoadError",
        DUPLICATE_CURSOR_ERROR: "LitestandMessages/DuplicateCursorError",
        STREAM_LOAD_RETRY: "LitestandMessages/StreamLoadRetry"
    });
    e.exports = a
}), null);
__d("ViewableImpressionUtils", ["csx", "CSS"], (function(a, b, c, d, e, f, g) {
    a = {
        isHorizontallyOffscreen: function(a, c, d) {
            var e = Math.max(c.x, 0);
            d = Math.min(c.x + c.width, d.width);
            return d - e < c.width || b("CSS").matchesSelector(a, ".desktop_hscroll_offscreen")
        }
    };
    e.exports = a
}), null);
__d("VisibilityTrackingHelper", ["Arbiter", "DesktopHscrollUnitEventConstants", "Event", "getViewportDimensions"], (function(a, b, c, d, e, f) {
    a = {
        getEventListeners: function(a, c) {
            var d = [b("Event").listen(document, "DOMContentLoaded", a), b("Event").listen(window, "scroll", a), b("Event").listen(window, "resize", a), b("Arbiter").subscribe(b("DesktopHscrollUnitEventConstants").HSCROLL_ITEM_SHOWN_EVENT, a)];
            c.considerSubtreeModification === !0 && d.push(b("Event").listen(document, "DOMSubtreeModified", a));
            return d
        },
        getViewportInfo: function() {
            return b("getViewportDimensions")()
        },
        isSnippetFlyoutVisible: function() {
            return !1
        }
    };
    e.exports = a
}), null);
__d("ViewableSessionValidationWebResultTypedLogger", ["Banzai", "GeneratedLoggerUtils", "nullthrows"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        function a() {
            this.$1 = {}
        }
        var c = a.prototype;
        c.log = function() {
            b("GeneratedLoggerUtils").log("logger:ViewableSessionValidationWebResultLoggerConfig", this.$1, b("Banzai").BASIC)
        };
        c.logVital = function() {
            b("GeneratedLoggerUtils").log("logger:ViewableSessionValidationWebResultLoggerConfig", this.$1, b("Banzai").VITAL)
        };
        c.logImmediately = function() {
            b("GeneratedLoggerUtils").log("logger:ViewableSessionValidationWebResultLoggerConfig", this.$1, {
                signal: !0
            })
        };
        c.clear = function() {
            this.$1 = {};
            return this
        };
        c.getData = function() {
            return babelHelpers["extends"]({}, this.$1)
        };
        c.updateData = function(a) {
            this.$1 = babelHelpers["extends"]({}, this.$1, a);
            return this
        };
        c.setExtras = function(a) {
            this.$1.extras = a;
            return this
        };
        c.setFailureReason = function(a) {
            this.$1.failure_reason = a;
            return this
        };
        c.setFbFeedLocation = function(a) {
            this.$1.fb_feed_location = a;
            return this
        };
        c.setPrimaryImpressionChannel = function(a) {
            this.$1.primary_impression_channel = a;
            return this
        };
        c.setScrollSpeed = function(a) {
            this.$1.scroll_speed = a;
            return this
        };
        c.setSecondaryImpressionChannel = function(a) {
            this.$1.secondary_impression_channel = a;
            return this
        };
        c.setSessionEndTime = function(a) {
            this.$1.session_end_time = a;
            return this
        };
        c.setSessionKey = function(a) {
            this.$1.session_key = a;
            return this
        };
        c.setSessionStartTime = function(a) {
            this.$1.session_start_time = a;
            return this
        };
        c.setTime = function(a) {
            this.$1.time = a;
            return this
        };
        c.setTimeFromLoad = function(a) {
            this.$1.time_from_load = a;
            return this
        };
        c.setVerificationTime = function(a) {
            this.$1.verification_time = a;
            return this
        };
        c.setVerifyResult = function(a) {
            this.$1.verify_result = a;
            return this
        };
        c.setWeight = function(a) {
            this.$1.weight = a;
            return this
        };
        return a
    }();
    c = {
        extras: !0,
        failure_reason: !0,
        fb_feed_location: !0,
        primary_impression_channel: !0,
        scroll_speed: !0,
        secondary_impression_channel: !0,
        session_end_time: !0,
        session_key: !0,
        session_start_time: !0,
        time: !0,
        time_from_load: !0,
        verification_time: !0,
        verify_result: !0,
        weight: !0
    };
    e.exports = a
}), null);
__d("FullViewLogger", ["Banzai", "ScriptPath", "SubscriptionsHandler", "URI"], (function(a, b, c, d, e, f) {
    var g;
    a = function() {
        "use strict";

        function a() {}
        a.logFromViewableImpressionTracker = function(b) {
            var c = new a();
            c.subscribeToTrackerEvents(b)
        };
        var c = a.prototype;
        c.subscribeToTrackerEvents = function(a) {
            this.subscriptionsHandler = new(b("SubscriptionsHandler"))(), this.subscriptionsHandler.addSubscriptions(a.addListener("full_view", this.onFullView, this))
        };
        c.onFullView = function(a) {
            this.$1() && this.$2(a);
            a = {
                token: a.token,
                fullViewType: a.fullViewType,
                scriptPath: b("ScriptPath").getTopViewEndpoint()
            };
            b("Banzai").post("xtrackable:full_view", a);
            this.$1() && this.$3(a)
        };
        c.$1 = function() {
            return 0
        };
        c.$2 = function(a) {};
        c.$3 = function(a) {};
        return a
    }();
    e.exports = a
}), null);
__d("PercentVisible", [], (function(a, b, c, d, e, f) {
    e.exports = {
        NO_VISIBLE: -1,
        VISIBLE_0_PCT: 0,
        VISIBLE_50_PCT: 50,
        VISIBLE_100_PCT: 100
    }
}), null);
__d("FBFeedImpressionTopMarginGetter", ["getElementPosition", "getStyleProperty"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = null;

    function h() {
        try {
            if (g == null) return 0;
            var a = b("getStyleProperty")(g, "position");
            if (a === "fixed") {
                a = b("getElementPosition")(g);
                return a.height > 0 ? Math.max(0, a.y + a.height) : 0
            }
            return 0
        } catch (a) {
            return 0
        }
    }

    function i() {
        try {
            var a = document.getElementById("bluebarRoot");
            if (a == null) return 0;
            a = a.firstChild;
            if (a == null) return 0;
            a = b("getElementPosition")(a);
            return Math.max(0, a.y + a.height)
        } catch (a) {
            return 0
        }
    }
    a = {
        setActionBar: function(a) {
            g = a
        },
        getTopMargin: function() {
            var a = i(),
                b = h();
            return Math.max(a, b)
        }
    };
    e.exports = a
}), null);
__d("FBImpressionValidationUtils", ["DataAttributeUtils"], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        getFBFeedLocation: function(a) {
            try {
                a = JSON.parse(b("DataAttributeUtils").getDataFt(a));
                return a ? a.fbfeed_location : null
            } catch (a) {
                return null
            }
        }
    };
    e.exports = a
}), null);
__d("FeedAdXoutEventTracker", ["gkx"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = new Set();

    function a(a) {
        b("gkx")("983221") && g.add(a)
    }

    function c(a) {
        b("gkx")("983221") && g["delete"](a)
    }

    function d(a) {
        return b("gkx")("983221") ? g.has(a) : !1
    }
    f = {
        checkIfHidden: d,
        markHidden: a,
        undoHidden: c
    };
    e.exports = f
}), null);
__d("GHLDelay", ["AdImpressionLoggingConfig"], (function(a, b, c, d, e, f) {
    var g = null;
    a = {
        getEnabled: function() {
            return g === null ? b("AdImpressionLoggingConfig").enableDelayedHiddenCheck : g
        },
        setEnabled: function(a) {
            g = a
        }
    };
    e.exports = a
}), null);
__d("GHLTestElement", ["csx", "invariant", "BanzaiODS", "Parent", "URI", "containsNode", "getElementPosition", "gkx"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i;
    a = function(a, c) {
        var d = Array.from(a.querySelectorAll("img"));
        if (b("gkx")("1059877")) {
            var e = (i || (i = b("URI"))).getRequestURI();
            e = e != null ? e.getPath() : "";
            var f = "images" + c,
                g = "length_" + String(d.length);
            m(f + "." + g);
            m(f + ".path_" + e + "." + g)
        }
        d.length > 0 || h(0, 13937);
        f = d.filter(j);
        if (f.length === 0) {
            b("gkx")("1059877") && j(a) && m("images_removed_but_element_exists");
            m("skipping_check_for_incompatible_element" + c);
            return !1
        }
        e = f.filter(function(a) {
            a = b("getElementPosition")(a);
            return a.width > 0 || a.height > 0
        });
        g = e.length === 0;
        return g && !k(a)
    };
    var j = function(a) {
            var c;
            return b("containsNode")(a == null ? void 0 : (c = a.ownerDocument) == null ? void 0 : c.documentElement, a)
        },
        k = function(a) {
            return !!b("Parent").bySelector(a, l)
        },
        l = [".hidden_elem", "._5ds2", "._i6m"].join(","),
        m = function(a) {
            return b("BanzaiODS").bumpEntityKey(2966, "feed_ads", "GHLTestElement.testElementI." + a)
        };
    e.exports = {
        testElementI: a
    }
}), null);
__d("NonBlockingIFrame", ["Promise", "DOM", "TimeSlice"], (function(a, b, c, d, e, f) {
    var g = {},
        h, i;

    function j(a, c) {
        a === void 0 && (a = g);
        c === void 0 && (c = document.body);
        var d = {
            className: "nonBlockingIframe",
            width: 0,
            height: 0,
            frameborder: 0,
            scrolling: "no",
            "aria-hidden": "true"
        };
        a !== g && (d.src = a);
        d = b("DOM").create("iframe", d);
        d.style.left = "-1000px";
        d.style.position = "absolute";
        b("DOM").appendContent(c, d);
        a === g && (d.contentDocument.open(), d.contentDocument.close());
        return d
    }

    function k() {
        return new(b("Promise"))(function(a) {
            h || (h = j()), h.contentDocument.readyState === "complete" ? a(h) : (i || (i = new(b("Promise"))(function(a) {
                h.contentWindow.onload = b("TimeSlice").guard(function() {
                    a(h)
                }, "NonBlockingIFrame window.onload")
            })), a(i))
        })
    }
    a = {
        loadImage: function(a) {
            return k().then(function(c) {
                return new(b("Promise"))(function(d, e) {
                    var f = c.contentWindow.Image,
                        g = new f();
                    g.onload = b("TimeSlice").guard(function() {
                        d(g)
                    }, "NonBlockingIFrame image.onload");
                    g.onerror = b("TimeSlice").guard(function() {
                        e(g)
                    }, "NonBlockingIFrame image.onerror");
                    g.onabort = b("TimeSlice").guard(function() {
                        e(g)
                    }, "NonBlockingIFrame image.onabort");
                    g.src = a
                })
            })
        },
        loadIFrame: function(a) {
            a === void 0 && (a = g);
            return k().then(function(b) {
                b = b.contentDocument.body;
                return j(a, b)
            })
        }
    };
    e.exports = a
}), null);
__d("ViewabilityFramework", [], (function(a, b, c, d, e, f) {
    e.exports = Object.freeze({
        VIEWABLE_TRACKER_BLUE: "current_blue",
        VIEWABLE_TRACKER_BLUE_RHC: "current_blue_rhc",
        VIEWABLE_TRACKER_BLUE_EXIT: "current_blue_exit",
        VIEWABLE_TRACKER_BLUE_AFTER_DEDUP: "current_blue_after_dedup",
        IMPRESSION_API_COMET_ENTER: "impression_api_comet_enter",
        IMPRESSION_API_COMET_EXIT: "impression_api_comet_exit",
        IMPRESSION_API_COMET_AFTER_DEDUP: "impression_api_comet_after_dedup",
        IMPRESSION_API_COMET_AFTER_DEDUP_ORIGINAL: "impression_api_comet_after_dedup_original",
        INTERSECTION_OBSERVER_BLUE: "intersection_observer_blue",
        INTERSECTION_OBSERVER_BLUE_RHC: "intersection_observer_blue_rhc",
        INTERSECTION_OBSERVER_BLUE_EXIT: "intersection_observer_blue_exit",
        INTERSECTION_OBSERVER_BLUE_AFTER_DEDUP: "intersection_observer_blue_after_dedup",
        SCROLL_BASED_BLUE: "scroll_based_blue",
        SCROLL_BASED_BLUE_RHC: "scroll_based_blue_rhc",
        SCROLL_COMET: "scroll_comet",
        SCROLL_COMET_AFTER_DEDUP: "scroll_comet_after_dedup",
        SCROLL_COMET_EXIT: "scroll_comet_exit",
        AD_UNIT_GENERIC_API_COMET: "ad_unit_generic_api_comet",
        AD_UNIT_GENERIC_API_COMET_EXIT: "ad_unit_generic_api_comet_exit",
        AD_UNIT_GENERIC_API_COMET_AFTER_DEDUP: "ad_unit_generic_api_comet_after_dedup",
        AD_UNIT_SCROLL_COMET: "ad_unit_scroll_comet",
        AD_UNIT_SCROLL_COMET_EXIT: "ad_unit_scroll_comet_exit",
        AD_UNIT_SCROLL_COMET_AFTER_DEDUP: "ad_unit_scroll_comet_after_dedup",
        COMET_FULL_VIEW: "comet_full_view"
    })
}), null);
__d("getCentralImpressionScrollSpeed", ["Event"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = 0,
        h = Date.now(),
        i = null,
        j = null;

    function a(a) {
        b("Event").listen(window, "scroll", function() {
            j && clearTimeout(j), j = setTimeout(function() {
                return a()
            }, 100)
        }, b("Event").Priority.NORMAL, {
            passive: !0
        })
    }

    function k() {
        var a = window.scrollY,
            b = Date.now();
        if (i != null && b !== h) {
            var c = a - i;
            g = c / (b - h) * 1e3
        }
        i = a;
        h = b
    }
    a(function() {
        g = 0, i = null
    });
    b("Event").listen(window, "scroll", function() {
        return k()
    }, b("Event").Priority.NORMAL, {
        passive: !0
    });
    e.exports = function() {
        return g
    }
}), null);
__d("getCentralImpressionTimeAfterRefresh", [], (function(a, b, c, d, e, f) {
    "use strict";
    var g = null;
    window.addEventListener("load", function() {
        g = Date.now()
    }, {
        passive: !0
    });
    e.exports = function() {
        return g != null ? Date.now() - g : 0
    }
}), null);
__d("ViewableSessionStore", ["BanzaiODS", "ViewableSessionValidationWebResultTypedLogger", "ge", "getCentralImpressionScrollSpeed", "getCentralImpressionTimeAfterRefresh", "getViewportDimensions", "setTimeout"], (function(a, b, c, d, e, f) {
    var g = "viewable_session_validation",
        h = [],
        i = {};

    function a(a, c, d) {
        try {
            var e = l(a);
            i[e] || (i[e] = {
                context: a,
                isValid: !1
            });
            j(e, c, d);
            !i[e].isValid ? k(e) && (i[e].enterTime = Date.now(), i[e].exitTime = null, i[e].isValid = !0) : k(e) || (i[e].isValid = !1, i[e].exitTime = Date.now())
        } catch (a) {
            b("BanzaiODS").bumpEntityKey(2966, g, "error.onViewUpdate." + a.message)
        }
    }

    function j(a, b, c) {
        var d;
        c = c.getBoundingClientRect();
        var e = c.bottom,
            f = c.top,
            g = c.left;
        c = c.right;
        var h = {};
        d = (d = (d = i[a]) == null ? void 0 : (d = d.boundaryDimensions) == null ? void 0 : d.ref) != null ? d : 0;
        switch (b) {
            case "top":
                h = {
                    top: e,
                    left: g,
                    right: c,
                    ref: ++d
                };
                break;
            case "bottom":
                h = {
                    bottom: f,
                    left: g,
                    right: c,
                    ref: --d
                };
                break
        }
        i[a] = babelHelpers["extends"]({}, i[a], {
            boundaryDimensions: babelHelpers["extends"]({}, (b = i[a]) == null ? void 0 : b.boundaryDimensions, h)
        })
    }

    function k(a) {
        a = (a = i[a]) == null ? void 0 : a.boundaryDimensions;
        if (a == void 0) return !1;
        var c = b("ge")("pagelet_bluebar"),
            d = b("getViewportDimensions")(),
            e = d.width;
        d = d.height;
        var f = document.elementFromPoint(0, 0);
        c = c != null && f != null && c.contains(f) ? f.getBoundingClientRect().bottom : 0;
        f = h.reduce(function(a, b) {
            return Math.max(b.getBoundingClientRect().bottom, a)
        }, c);
        return a.top != void 0 && a.bottom != void 0 && a.top < a.bottom && a.top < d && a.bottom > f && a.left < a.right && a.left < e && a.right > 0
    }

    function l(a) {
        return a.postId
    }

    function m(a) {
        var b = i[a];
        if (b == void 0) return !1;
        var c = b.exitTime;
        return b.isValid === !0 || c != null && Date.now() - c < 1e3 || k(a)
    }

    function n(a, c, d, e) {
        e === void 0 && (e = 1);
        try {
            var f, h = b("getCentralImpressionScrollSpeed")(),
                j = b("getCentralImpressionTimeAfterRefresh")(),
                k = "event_logged." + a + "." + d.toString() + ".";
            f = new(b("ViewableSessionValidationWebResultTypedLogger"))().setVerificationTime(Date.now()).setExtras(JSON.stringify({
                pageId: i[c].context.pageId,
                boundaryDimension: JSON.stringify((f = i[c].boundaryDimensions) != null ? f : "null"),
                viewportDimension: JSON.stringify(b("getViewportDimensions")())
            })).setFbFeedLocation(d).setSessionStartTime(i[c].enterTime).setSessionEndTime(i[c].exitTime).setPrimaryImpressionChannel("viewable_impression_tracker").setSecondaryImpressionChannel("two_div_boundary").setSessionKey(c).setScrollSpeed(h).setTimeFromLoad(j);
            if (m(c)) f.setVerifyResult(1), b("BanzaiODS").bumpEntityKey(2966, g, k + "pass");
            else {
                if (e > 0) {
                    b("setTimeout")(function() {
                        n(a, c, d, e - 1)
                    }, 500);
                    return
                }
                f.setVerifyResult(0).setFailureReason("over-logging");
                b("BanzaiODS").bumpEntityKey(2966, g, k + "overlogging")
            }
            f.log()
        } catch (a) {
            b("BanzaiODS").bumpEntityKey(2966, g, "error.onEventLogged." + a.message)
        }
    }
    e.exports = {
        ViewableSessionStore: i,
        onViewUpdate: a,
        onEventLogged: n,
        setupTopRef: function(a) {
            h.push(a)
        }
    }
}), null);
__d("ghlTestUBT", ["requireCond", "cr:1278084"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = b("cr:1278084")
}), null);
__d("isImpressionTargetOccluded", ["containsNode", "getViewportDimensions"], (function(a, b, c, d, e, f) {
    "use strict";

    function a(a, c, d) {
        d === void 0 && (d = {
            bottom: 0,
            left: 0,
            right: 0,
            top: 0
        });
        try {
            if (!a || !c || !document.elementFromPoint) return !1;
            var e = b("getViewportDimensions")();
            if (e.height === 0 || e.width === 0) return !1;
            var f = c.x,
                g = c.y,
                h = c.width;
            c = c.height;
            h = Math.min(f + h, e.width - 1);
            c = Math.min(g + c, e.height - 1);
            e = [{
                x: f,
                y: g
            }, {
                x: f,
                y: c
            }, {
                x: h,
                y: g
            }, {
                x: h,
                y: c
            }, {
                x: (f + h) / 2,
                y: (g + c) / 2
            }];
            d.top !== 0 && d.top > g && d.top < c && e.push({
                x: (f + h) / 2,
                y: (d.top + c) / 2
            });
            return e.every(function(c) {
                c = document.elementFromPoint(c.x, c.y);
                c = !!c && !b("containsNode")(c, a) && !b("containsNode")(a, c);
                return c
            })
        } catch (a) {
            return !1
        }
    }
    e.exports = a
}), null);
__d("ViewableImpressionTracker", ["csx", "cx", "requireCond", "AdImpressionLoggingConfig", "Banzai", "BanzaiODS", "BrowseClientEventLogger", "DataAttributeUtils", "DOM", "FBFeedImpressionTopMarginGetter", "FBImpressionValidationUtils", "FeedAdXoutEventTracker", "GHLDelay", "GHLTestElement", "NonBlockingIFrame", "PercentVisible", "Run", "Style", "URI", "ViewabilityFramework", "ViewableImpressionUtils", "cr:1095627", "ViewableSessionStore", "Visibility", "WebSession", "WebStorage", "ge", "getCentralImpressionTimeAfterRefresh", "getElementPosition", "cr:943110", "getViewportDimensions", "ghlTestUBT", "gkx", "isImpressionTargetOccluded", "mixInEventEmitter", "qex", "randomInt", "cr:1095628", "ScriptPath"], (function(a, b, c, d, e, f, g, h) {
    var i, j, k = b("FBFeedImpressionTopMarginGetter").getTopMargin,
        l = b("ViewableSessionStore").onEventLogged,
        m = (i || (i = b("WebStorage"))).getLocalStorage(),
        n = "imp_seq_num";
    a = function() {
        "use strict";

        function a(a, c, d) {
            var e = this;
            this.checkAndLogImpressionIfPendingOnExit = function() {
                b("AdImpressionLoggingConfig").enableFlushDelayLogOnCleanup && e.waitForDelayLogged && (clearTimeout(e.delayedLoggingTimeout), e.delayLogImpression())
            };
            this.delayLogImpression = function() {
                e.waitForDelayLogged = !1;
                var a = "other";
                e.element.id.startsWith("hyperfeed") && (a = "16");
                a = b("GHLTestElement").testElementI(e.element, ".vit." + a);
                if (a) {
                    e.$14();
                    b("AdImpressionLoggingConfig").logForHiddenAds && e.logImpression(1, !0, {});
                    return
                }
                e.logImpression(1, !1, {});
                e.$12()
            };
            this.id = a;
            this.element = c;
            this.config = d;
            this.iframe = null;
            this.viewableTimeout = null;
            this.delayedLoggingTimeout = null;
            this.clearSubsequentTimeout = null;
            this.waitForSubsequent = !1;
            this.waitForLogged = !1;
            this.waitForDelayLogged = !1;
            this.isNonViewableLogged = !1;
            this.isVisible = !1;
            this.iframeLogged = !1;
            this.banzaiLogged = !1;
            this.topLeftInViewport = !1;
            this.bottomRightInViewport = !1;
            this.isHidden = !0;
            this.lastInvisibleReason = null;
            this.isSubsequentImp = !1;
            this.lastHiddenCause = "none";
            this.lastImpressedAt = null;
            this.lastEnterWithPercent = null;
            b("Run").onUnload(this.checkAndLogImpressionIfPendingOnExit);
            b("Run").onLeave(this.checkAndLogImpressionIfPendingOnExit);
            b("ghlTestUBT")(function(a) {
                a === !0 && b("GHLDelay").setEnabled(!0)
            })
        }
        var c = a.prototype;
        c.getID = function() {
            return this.id
        };
        c.getConfig = function() {
            return this.config
        };
        c.getPercentInViewport = function() {
            var a = b("getViewportDimensions")(),
                c = b("getElementPosition")(this.element);
            return this.$1(a, c)
        };
        c.$2 = function(a, c, d, e) {
            d === void 0 && (d = 0);
            e === void 0 && (e = !1);
            var f = {
                target_rect: c,
                root: {
                    x: 0,
                    y: d,
                    height: a.height - d,
                    width: a.width
                }
            };
            if (c.height === 0 || c.width === 0) return {
                rects: f,
                percentage: 0,
                invisibleReason: "TARGET_SIZE_0"
            };
            var g = b("Style").get(this.element, "visibility") === "hidden",
                h = b("Style").get(this.element, "opacity") === "0";
            if (c.x < a.width && c.x + c.width > 0 && c.y < a.height && c.y + c.height > d && !g && !h) {
                var i = Math.max(c.x, 0),
                    j = Math.min(c.x + c.width, a.width);
                d = Math.max(c.y, d);
                a = Math.min(c.y + c.height, a.height);
                if (c.height * c.width === 0) return {
                    rects: f,
                    percentage: 100,
                    invisibleReason: null
                };
                c = 100 * (j - i) * (a - d) / (c.height * c.width);
                var k = !1;
                if (c > 0 && (e || this.config.should_not_log_on_occlusion)) {
                    k = b("isImpressionTargetOccluded")(this.element, {
                        x: i,
                        y: d,
                        width: j - i,
                        height: a - d
                    });
                    if (this.config.should_not_log_on_occlusion && k) return {
                        rects: f,
                        percentage: 0,
                        invisibleReason: "IS_OCCLUDED"
                    }
                }
                return {
                    rects: f,
                    percentage: c,
                    invisibleReason: c > 0 ? null : "NOT_IN_VIEWPORT",
                    isOccluded: k
                }
            }
            return {
                rects: f,
                percentage: 0,
                invisibleReason: g ? "TARGET_HIDDEN" : h ? "TARGET_TRANSPARENT" : "NOT_IN_VIEWPORT"
            }
        };
        c.$3 = function(a, b, c) {
            c === void 0 && (c = 0);
            return this.$2(a, b, c).percentage
        };
        c.$4 = function(a, c, d, e) {
            d === void 0 && (d = 0);
            e === void 0 && (e = !1);
            return this.config.require_horizontally_onscreen && b("ViewableImpressionUtils").isHorizontallyOffscreen(this.element, c, a) ? {
                rects: {
                    target_rect: c
                },
                percentage: 0,
                invisibleReason: "NOT_IN_VIEWPORT"
            } : this.$2(a, c, d, e)
        };
        c.$1 = function(a, b, c) {
            c === void 0 && (c = 0);
            return this.$4(a, b, c).percentage
        };
        c.$5 = function(a, c, d) {
            a = this.$3(a, c, d);
            if (a === 0) return b("PercentVisible").NO_VISIBLE;
            else if (a < 50) return b("PercentVisible").VISIBLE_0_PCT;
            else if (a < 100) return b("PercentVisible").VISIBLE_50_PCT;
            else return b("PercentVisible").VISIBLE_100_PCT
        };
        c.$6 = function(a, c, d) {
            d === void 0 && (d = 0);
            var e = Math.max(c.y, d);
            c = Math.min(c.y + c.height, a.height);
            c = 100 * (c - e) / (a.height - d);
            if (c < 50) return b("PercentVisible").VISIBLE_0_PCT;
            else if (c < 100) return b("PercentVisible").VISIBLE_50_PCT;
            else return b("PercentVisible").VISIBLE_100_PCT
        };
        c.$7 = function(a, c) {
            var d = 0,
                e = b("ge")("pagelet_bluebar");
            e && e.offsetHeight && (d = e.offsetHeight + e.offsetTop);
            if (this.config.should_log_viewport_duration) {
                e = this.$6(a, c, d);
                switch (e) {
                    case b("PercentVisible").VISIBLE_0_PCT:
                    case b("PercentVisible").VISIBLE_50_PCT:
                    case b("PercentVisible").VISIBLE_100_PCT:
                        this.emit("viewport_viewability", {
                            tracker: this,
                            id: this.getID(),
                            token: this.getToken(),
                            percentVisible: e
                        });
                        break;
                    default:
                        break
                }
            }
            e = this.$5(a, c, d);
            switch (e) {
                case b("PercentVisible").VISIBLE_0_PCT:
                case b("PercentVisible").VISIBLE_50_PCT:
                case b("PercentVisible").VISIBLE_100_PCT:
                    this.emit("viewability", {
                        tracker: this,
                        id: this.getID(),
                        token: this.getToken(),
                        percentVisible: e
                    });
                    break;
                default:
                    this.emit("hidden", {
                        id: this.getID(),
                        token: this.getToken()
                    });
                    break
            }
        };
        c.$8 = function(a, c) {
            if (b("Style").get(this.element, "visibility") === "hidden" || b("Style").get(this.element, "opacity") === "0") return !1;
            var d = c.x,
                e = c.y,
                f = c.x + c.width;
            c = c.y + c.height;
            this.topLeftInViewport = this.topLeftInViewport || d >= 0 && d <= a.width && e >= 0 && e <= a.height;
            this.bottomRightInViewport = this.bottomRightInViewport || f >= 0 && f <= a.width && c >= 0 && c <= a.height;
            return this.topLeftInViewport && this.bottomRightInViewport
        };
        c.$9 = function(a, b) {
            if (this.hasEmittedFullViewEvent) return;
            this.$8(a, b) && (this.emit("full_view", {
                tracker: this,
                id: this.getID(),
                token: this.getToken(),
                fullViewType: 1
            }), this.hasEmittedFullViewEvent = !0)
        };
        c.$10 = function(a, c, d, e, f) {
            f === void 0 && (f = !1);
            a = a > 0;
            d = d;
            a && b("Visibility").isHidden() && (a = !1, d = "PAGE_VISIBILITY_HIDDEN");
            a && this.isHidden ? (this.lastImpressedAt = Date.now(), this.lastEnterWithPercent = c, this.logViewabilityEventsForAudit(c, this.lastInvisibleReason, e, f), this.isHidden = !1, b("cr:1095627") && b("cr:1095627").onItemEnterViewport(b("ViewabilityFramework").VIEWABLE_TRACKER_BLUE, this.element), b("cr:1095628") && b("cr:1095628")(b("ViewabilityFramework").VIEWABLE_TRACKER_BLUE, this.element, "enter", "blue")) : !a && !this.isHidden && (this.isHidden = !0, this.lastInvisibleReason = d, this.lastHiddenCause = "none", b("cr:1095627") && b("cr:1095627").onItemExitViewport(b("ViewabilityFramework").VIEWABLE_TRACKER_BLUE, this.element), b("cr:1095628") && b("cr:1095628")(b("ViewabilityFramework").VIEWABLE_TRACKER_BLUE, this.element, "exit", "blue"))
        };
        c.onVisible = function(a) {
            var c = this;
            a = this.isVisible;
            var d = b("getViewportDimensions")(),
                e = b("getElementPosition")(this.element),
                f = this.config.count_blue_bar_height ? k() : 0;
            f = this.$4(d, e, f, this.config.detect_occlusion || !1);
            var g = f.percentage,
                h = f.invisibleReason,
                i = f.rects;
            f = f.isOccluded;
            var j = g > this.config.pixel_in_percentage;
            this.config.log_viewability_events_for_infra_validation && this.$10(j, g, h, i, f);
            var l = [];
            h = [];
            (this.config.skip_imp_if_no_images || this.config.check_images_before_log) && (l = Array.from(this.element.querySelectorAll("img")), h = Array.from(this.element.getElementsByClassName("_7cqq")), b("BanzaiODS").bumpEntityKey(2966, "feed_ads", "ViewableImpressionTracker.delayLogImpression.isFeedLoadedCheck." + (l.length === 0) + "." + (h.length === 0)));
            if (this.config.skip_imp_if_no_images && l.length === 0) {
                this.handleLogNonViewableOnInvisible(a);
                this.isVisible = !1;
                return
            }
            this.emit("visible", {
                tracker: this,
                id: this.getID(),
                token: this.getToken(),
                percentInViewport: g
            });
            this.config.should_log_viewability_duration && this.$7(d, e);
            this.$9(d, e);
            if (!j) {
                this.$11();
                this.handleLogNonViewableOnInvisible(a);
                this.isVisible = !1;
                return
            }
            this.isLogged() ? this.$12() : this.$13();
            i = this.config.fam_delivery_integrity_enable_user_hide_ads_check_and_is_feed ? b("FeedAdXoutEventTracker").checkIfHidden(this.element) : !1;
            this.isVisible = !(b("AdImpressionLoggingConfig").blockInvisible && b("Visibility").isHidden()) && !i;
            f = this.isVisible && !a;
            this.isVisible || this.handleLogNonViewableOnInvisible(a);
            if ((this.config.client_no_dedup ? f : this.isVisible) && !this.waitForLogged && !this.waitForDelayLogged && !this.isLogged()) {
                h = function() {
                    c.waitForLogged = !1;
                    if (b("AdImpressionLoggingConfig").blockInvisible && b("Visibility").isHidden()) return;
                    var a = c.getPercentInViewport();
                    a = a > c.config.pixel_in_percentage;
                    if (!a) {
                        c.$14();
                        return
                    }
                    c.config.check_images_before_log && (l.length === 0 && b("BanzaiODS").bumpEntityKey(2966, "feed_ads", "ViewableImpressionTracker.log_without_load." + c.config.trackable_identifier));
                    if (b("GHLDelay").getEnabled() && c.config.can_delay_log_impression === !0) {
                        c.waitForDelayLogged = !0;
                        a = b("AdImpressionLoggingConfig").maxHiddenCheckDelay;
                        a = a - c.config.duration_in_ms;
                        a < 0 && (a = 0);
                        c.delayedLoggingTimeout = setTimeout(c.delayLogImpression, a)
                    } else c.logImpression(1, !1, {}), c.$12()
                };
                this.waitForLogged = !0;
                this.viewableTimeout = setTimeout(h, this.config.duration_in_ms)
            }
        };
        c.handleLogNonViewableOnInvisible = function(a) {
            this.config.log_initial_nonviewable && !this.isLogged() && !this.isNonViewableLogged ? this.logNonViewableImpression() : !this.config.log_initial_nonviewable && !this.isLogged() && a && this.logNonViewableImpression()
        };
        c.onHidden = function(a) {
            var c = this;
            this.lastHiddenCause = a;
            this.isHidden || (this.isHidden = !0, this.lastInvisibleReason = "NOT_IN_VIEWPORT", b("cr:1095627") && b("cr:1095627").onItemExitViewport(b("ViewabilityFramework").VIEWABLE_TRACKER_BLUE, this.element), b("cr:1095628") && b("cr:1095628")(b("ViewabilityFramework").VIEWABLE_TRACKER_BLUE, this.element, "exit", "blue"));
            this.emit("hidden", {
                id: this.getID(),
                token: this.getToken()
            });
            a = this.isVisible;
            this.handleLogNonViewableOnInvisible(a);
            this.isVisible = !1;
            this.waitForLogged && (this.waitForLogged = !1, clearTimeout(this.viewableTimeout));
            this.config.client_no_dedup && this.config.subsequent_gap_in_ms === 0 && this.config.client_track_subsequent_impression ? this.reset() : this.isLogged() && !this.waitForSubsequent && this.config.subsequent_gap_in_ms >= 0 && this.config.client_track_subsequent_impression && (this.waitForSubsequent = !0, this.clearSubsequentTimeout = setTimeout(function() {
                c.waitForSubsequent = !1, c.reset(), c.isVisible && c.onVisible()
            }, this.config.subsequent_gap_in_ms));
            this.$14()
        };
        c.onRemoved = function() {
            this.isVisible = !1
        };
        c.getToken = function() {
            return b("DataAttributeUtils").getDataAttribute(this.element, "data-xt")
        };
        c.logViewabilityEventsForAudit = function(a, c, d, e) {
            var f = this.getToken(),
                g = Math.floor(Date.now() / 1e3),
                h = this.$15(),
                i = b("FBImpressionValidationUtils").getFBFeedLocation(this.element);
            f = {
                xt: f,
                cts: g,
                csp: h,
                endpoint: b("ScriptPath").getTopViewEndpoint(),
                vp: a,
                fbfeed_location: i,
                scroll_speed: b("cr:943110") ? b("cr:943110")() : null,
                time_from_load: b("getCentralImpressionTimeAfterRefresh")(),
                sk: b("WebSession").getId(),
                pre_rs: c,
                sub_imp: this.isSubsequentImp,
                last_hidden_cause: this.lastHiddenCause,
                rects: d,
                behind_popout: e
            };
            g = babelHelpers["extends"]({}, b("Banzai").VITAL);
            g.signal = !0;
            b("Banzai").post("viewability_events:" + (this.config.is_rhc ? b("ViewabilityFramework").VIEWABLE_TRACKER_BLUE_RHC : b("ViewabilityFramework").VIEWABLE_TRACKER_BLUE), f, g);
            this.isSubsequentImp = !0
        };
        c.logImpression = function(a, c, d) {
            if (this.isLogged()) return;
            var e = this.getToken(),
                f = Math.floor(Date.now() / 1e3),
                g = this.$15(),
                h = Date.now() + "_" + (b("randomInt")(0, 4294967295) + 1);
            e = {
                xt: e,
                isv: a,
                cts: f,
                csp: g,
                hba: c,
                etid: h,
                sender: "ViewableImpressionTracker"
            };
            this.config.should_log_endpoint_info && (e.me = b("ScriptPath").getTopViewEndpoint());
            if (b("gkx")("940796") && m) {
                a = m.getItem(n);
                a == null && (a = 0);
                e.event_count = parseInt(a, 10);
                m.setItem(n, e.event_count + 1)
            }
            if (b("Banzai").isEnabled("xtrackable_clientview_batch") && this.config.should_batch || this.config.vital_mode_for_ss || this.config.signal_mode_for_ss) {
                e.transmission_channel = "banzai";
                f = this.config.vital_mode_for_ss ? babelHelpers["extends"]({}, b("Banzai").VITAL) : {};
                f.signal = this.config.signal_mode_for_ss;
                this.logWithBanzai(e, f)
            } else e.transmission_channel = "iframe", this.logWithIFrame(Object.assign(e, d));
            if (b("gkx")("876709")) try {
                g = JSON.parse(b("DataAttributeUtils").getDataFt(this.element));
                c = g.page_id;
                h = g.top_level_post_id;
                a = g.fbfeed_location;
                c && h && l("page_post_impression", h, a)
            } catch (a) {
                b("BanzaiODS").bumpEntityKey(2966, "impression_logging_debug", "viewable_session_validation_exception." + a.message)
            }
        };
        c.logNonViewableImpression = function() {
            if (this.config.nonviewableEnabled) {
                var a = this.getToken();
                b("Banzai").post("xtrackable:nonviewable", {
                    xt: a
                })
            }
            this.isNonViewableLogged = !0
        };
        c.isLogged = function() {
            return this.iframeLogged || this.banzaiLogged
        };
        c.reset = function() {
            this.iframeLogged && (this.iframeLogged = !1), this.iframe && (b("DOM").remove(this.iframe), this.iframe = null), this.banzaiLogged && (this.banzaiLogged = !1), this.isNonViewableLogged = !1, this.isVisible = !1, this.waitForLogged = !1, this.waitForDelayLogged = !1, this.waitForSubsequent = !1
        };
        c.logWithBanzai = function(a, c) {
            this.banzaiLogged = !0;
            b("BrowseClientEventLogger").maybeLogClientViewEvent(a);
            b("Banzai").post("xtrackable:clientview_batch", a, c);
            b("cr:1095628") && b("cr:1095628")(b("ViewabilityFramework").VIEWABLE_TRACKER_BLUE, this.element, "log", "blue");
            if (this.config.log_viewability_events_for_infra_validation) {
                c = babelHelpers["extends"]({}, b("Banzai").VITAL);
                c.signal = !0;
                b("Banzai").post("viewability_events:" + b("ViewabilityFramework").VIEWABLE_TRACKER_BLUE_AFTER_DEDUP, babelHelpers["extends"]({}, a, {
                    fbfeed_location: b("FBImpressionValidationUtils").getFBFeedLocation(this.element),
                    scroll_speed: b("cr:943110") ? b("cr:943110")() : null,
                    time_from_load: b("getCentralImpressionTimeAfterRefresh")(),
                    sk: b("WebSession").getId()
                }), c)
            }
        };
        c.logWithIFrame = function(a) {
            this.iframeLogged = !0, this.config.is_instream_story ? b("NonBlockingIFrame").loadIFrame(new(j || (j = b("URI")))(this.config.impressionURL).addQueryData(a).toString()) : (this.iframe = b("DOM").create("iframe", {
                src: new(j || (j = b("URI")))(this.config.impressionURL).addQueryData(a).toString(),
                width: 0,
                height: 0,
                frameborder: 0,
                scrolling: "no",
                className: "fbEmuTracking"
            }), this.iframe.setAttribute("aria-hidden", "true"), b("DOM").appendContent(this.element, this.iframe))
        };
        c.$15 = function() {
            var a = b("DataAttributeUtils").getDataAttribute(this.element, "data-dedupekey");
            if (a === null) return null;
            var c = this.$16();
            if (c === null || c.length === 0) return null;
            var d = c.length;
            while (--d >= 0) {
                var e = b("DataAttributeUtils").getDataAttribute(c[d], "data-dedupekey");
                if (e !== null && a === e) break
            }
            return d + 1
        };
        c.$16 = function() {
            var a = b("ge")("contentArea");
            if (a) {
                var c = "._5jmm";
                a = b("DOM").scry(a, c);
                return a.filter(function(a) {
                    return b("DataAttributeUtils").getDataAttribute(a, "data-dedupekey")
                })
            } else {
                c = b("ge")("m_newsfeed_stream");
                return c === null ? null : c.getElementsByTagName("article")
            }
        };
        c.$17 = function() {
            return 0
        };
        c.$11 = function() {
            this.$17() && (b("Style").set(this.element, "background-color", "#abab9a"), b("Style").set(this.element, "outline", "3px solid #abab9a"))
        };
        c.$13 = function() {
            this.$17() && (b("Style").set(this.element, "background-color", "#e4f70a"), b("Style").set(this.element, "outline", "3px solid #e4f70a"))
        };
        c.$14 = function() {
            this.$17() && (b("Style").set(this.element, "background-color", null), b("Style").set(this.element, "outline", null))
        };
        c.$12 = function() {
            this.$17() && (b("Style").set(this.element, "background-color", "#047515"), b("Style").set(this.element, "outline", "3px solid #047515"))
        };
        return a
    }();
    b("mixInEventEmitter")(a, {
        visible: !0,
        hidden: !0,
        full_view: !0,
        viewability: !0,
        viewport_viewability: !0,
        viewability_debug: !0
    });
    e.exports = a
}), null);
__d("ViewabilityDurationSegmentLogger", ["Banzai", "PercentVisible", "ViewableImpressionTracker"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = 8e3;
    a = function() {
        a.logFromViewableImpressionTracker = function(b) {
            var c = new a();
            c.subscribeToTrackerEvents(b)
        };

        function a() {
            this.$1 = new Map(), this.$2 = new Map(), this.$3 = new Map(), this.$4 = new Map(), this.$5 = new Map()
        }
        var c = a.prototype;
        c.subscribeToTrackerEvents = function(a) {
            a.addListener("viewability", this.onViewable.bind(this)), a.addListener("viewport_viewability", this.onViewport.bind(this)), a.addListener("hidden", this.onHidden.bind(this))
        };
        c.onViewable = function(a) {
            var c = a.id,
                d = a.percentVisible,
                e = Date.now(),
                f;
            switch (d) {
                case b("PercentVisible").VISIBLE_0_PCT:
                    d = this.$1.get(c);
                    !d ? this.$6(a, b("PercentVisible").VISIBLE_0_PCT, e, "feed_unit") : this.$7(d, c, e);
                    d = this.$2.get(c);
                    d && (f = this.$8(d, c, e, !0), this.$9(f, c));
                    d = this.$4.get(c);
                    d && (f = this.$8(d, c, e, !0), this.$9(f, c));
                    break;
                case b("PercentVisible").VISIBLE_50_PCT:
                    d = this.$1.get(c);
                    !d ? this.$6(a, b("PercentVisible").VISIBLE_0_PCT, e, "feed_unit") : this.$7(d, c, e);
                    d = this.$2.get(c);
                    !d ? this.$6(a, b("PercentVisible").VISIBLE_50_PCT, e, "feed_unit") : this.$7(d, c, e);
                    d = this.$4.get(c);
                    d && (f = this.$8(d, c, e, !0), this.$9(f, c));
                    break;
                case b("PercentVisible").VISIBLE_100_PCT:
                    d = this.$1.get(c);
                    !d ? this.$6(a, b("PercentVisible").VISIBLE_0_PCT, e, "feed_unit") : this.$7(d, c, e);
                    d = this.$2.get(c);
                    !d ? this.$6(a, b("PercentVisible").VISIBLE_50_PCT, e, "feed_unit") : this.$7(d, c, e);
                    d = this.$4.get(c);
                    !d ? this.$6(a, b("PercentVisible").VISIBLE_100_PCT, e, "feed_unit") : this.$7(d, c, e);
                    break
            }
        };
        c.onViewport = function(a) {
            var c = a.id,
                d = a.percentVisible,
                e = Date.now(),
                f;
            switch (d) {
                case b("PercentVisible").VISIBLE_0_PCT:
                    d = this.$3.get(c);
                    d && (f = this.$8(d, c, e, !0), this.$9(f, c));
                    d = this.$5.get(c);
                    d && (f = this.$8(d, c, e, !0), this.$9(f, c));
                    break;
                case b("PercentVisible").VISIBLE_50_PCT:
                    d = this.$3.get(c);
                    !d ? this.$6(a, b("PercentVisible").VISIBLE_50_PCT, e, "viewport") : this.$7(d, c, e);
                    d = this.$5.get(c);
                    d && (f = this.$8(d, c, e, !0), this.$9(f, c));
                    break;
                case b("PercentVisible").VISIBLE_100_PCT:
                    d = this.$3.get(c);
                    !d ? this.$6(a, b("PercentVisible").VISIBLE_50_PCT, e, "viewport") : this.$7(d, c, e);
                    d = this.$5.get(c);
                    !d ? this.$6(a, b("PercentVisible").VISIBLE_100_PCT, e, "viewport") : this.$7(d, c, e);
                    break
            }
        };
        c.onHidden = function(a) {
            a = a.id;
            var b = Date.now(),
                c = this.$1.get(a),
                d = this.$2.get(a),
                e = this.$3.get(a),
                f = this.$4.get(a),
                g = this.$5.get(a);
            c && this.$9(this.$8(c, a, b, !0), a);
            d && this.$9(this.$8(d, a, b, !0), a);
            e && this.$9(this.$8(e, a, b, !0), a);
            f && this.$9(this.$8(f, a, b, !0), a);
            g && this.$9(this.$8(g, a, b, !0), a)
        };
        c.$6 = function(a, c, d, e) {
            d = {
                token: a.token,
                startedTrackingTS: d,
                percentVisible: c,
                visibilityUnit: e,
                intervalMs: 0,
                cumulativeMs: 0,
                segmentIdx: 0
            };
            switch (c) {
                case b("PercentVisible").VISIBLE_0_PCT:
                    this.$1.set(a.id, d);
                    break;
                case b("PercentVisible").VISIBLE_50_PCT:
                    e === "feed_unit" ? this.$2.set(a.id, d) : this.$3.set(a.id, d);
                    break;
                case b("PercentVisible").VISIBLE_100_PCT:
                    e === "feed_unit" ? this.$4.set(a.id, d) : this.$5.set(a.id, d);
                    break
            }
        };
        c.$8 = function(a, c, d, e) {
            d = d - a.startedTrackingTS;
            var f = d - a.cumulativeMs,
                g = a.percentVisible;
            f = {
                token: a.token,
                startedTrackingTS: a.startedTrackingTS,
                percentVisible: g,
                visibilityUnit: a.visibilityUnit,
                intervalMs: f,
                cumulativeMs: d,
                segmentIdx: ++a.segmentIdx
            };
            e && (f.duration = d);
            switch (g) {
                case b("PercentVisible").VISIBLE_0_PCT:
                    this.$1.set(c, f);
                    break;
                case b("PercentVisible").VISIBLE_50_PCT:
                    a.visibilityUnit === "feed_unit" ? this.$2.set(c, f) : this.$3.set(c, f);
                    break;
                case b("PercentVisible").VISIBLE_100_PCT:
                    a.visibilityUnit === "feed_unit" ? this.$4.set(c, f) : this.$5.set(c, f);
                    break
            }
            return f
        };
        c.$7 = function(a, c, d) {
            var e = a.intervalMs,
                f = d - a.startedTrackingTS - a.cumulativeMs;
            if (this.$10(e, f)) {
                e = this.$8(a, c, d, !1);
                b("Banzai").post("xtrackable:viewability", e, b("Banzai").VITAL)
            }
        };
        c.$10 = function(a, b) {
            if (a >= g) return !1;
            if (a == 0) return !0;
            if (a < 1e3) return b >= 1e3;
            a = a / 1e3;
            b = b / 1e3;
            return b >= 2 * a
        };
        c.$9 = function(a, c) {
            var d = a.percentVisible;
            switch (d) {
                case b("PercentVisible").VISIBLE_0_PCT:
                    this.$1["delete"](c);
                    break;
                case b("PercentVisible").VISIBLE_50_PCT:
                    a.visibilityUnit === "feed_unit" ? this.$2["delete"](c) : this.$3["delete"](c);
                    break;
                case b("PercentVisible").VISIBLE_100_PCT:
                    a.visibilityUnit === "feed_unit" ? this.$4["delete"](c) : this.$5["delete"](c);
                    break
            }
            b("Banzai").post("xtrackable:viewability", a, b("Banzai").VITAL)
        };
        return a
    }();
    e.exports = a
}), null);
__d("ViewableImpressionDurationLogger", ["Banzai"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        a.logFromViewableImpressionTracker = function(b) {
            var c = new a();
            c.subscribeToTrackerEvents(b)
        };

        function a() {
            this.$1 = new Map()
        }
        var c = a.prototype;
        c.subscribeToTrackerEvents = function(a) {
            a.addListener("visible", this.onElementVisible.bind(this)), a.addListener("hidden", this.onElementHidden.bind(this))
        };
        c.onElementVisible = function(a) {
            if (this.$1.get(a.id)) return null;
            var b = {
                token: a.token,
                startedTrackingTS: this.getTimeNow()
            };
            this.$1.set(a.id, b);
            return b
        };
        c.onElementHidden = function(a) {
            var b = this.$1.get(a.id);
            if (!b) return !1;
            b.trackingDuration = this.getTimeNow() - b.startedTrackingTS;
            return this.sendLog(a.id)
        };
        c.sendLog = function(a) {
            var c = this.$1.get(a);
            if (!c || !c.trackingDuration) return !1;
            b("Banzai").post("xtrackable:duration", c);
            this.$1["delete"](a);
            return !0
        };
        c.getTimeNow = function() {
            return parseFloat((Date.now() / 1e3).toFixed(2))
        };
        return a
    }();
    e.exports = a
}), null);
__d("ViewableImpressionHeatmapLogger", ["Banzai"], (function(a, b, c, d, e, f) {
    a = function() {
        "use strict";
        a.logFromViewableImpressionTracker = function(b, c) {
            c = new a(c);
            c.subscribeToTrackerEvents(b)
        };

        function a(a) {
            this.loggingDurationMS = a, this.trackingEntries = {}
        }
        var c = a.prototype;
        c.subscribeToTrackerEvents = function(a) {
            this.visibleSubscription = a.addListener("visible", this.onElementVisible, this), this.hiddenSubscription = a.addListener("hidden", this.onElementHidden, this)
        };
        c.onElementVisible = function(a) {
            var b = this.getCurrentTimestamp(),
                c = this.trackingEntries[a.id];
            c || (c = this.createTrackingEntry(a), this.beginTracking(a.id, c), b = c.startedTrackingTS);
            c.viewportProgressEvents.push({
                timestamp: b,
                percentInViewport: a.percentInViewport.toFixed(2)
            })
        };
        c.onElementHidden = function(a) {
            var b = this.getCurrentTimestamp();
            a = this.trackingEntries[a.id];
            if (!a) return;
            a.viewportProgressEvents.push({
                timestamp: b,
                percentInViewport: 0
            })
        };
        c.onTrackingCompleted = function(a) {
            var b = this.trackingEntries[a];
            b.viewportProgressEvents.push({
                timestamp: this.getCurrentTimestamp(),
                percentInViewport: b.tracker.getPercentInViewport().toFixed(2)
            });
            this.$1() && this.$2(a, b);
            this.logToServer(b);
            delete this.trackingEntries[a]
        };
        c.logToServer = function(a) {
            a = a;
            delete a.tracker;
            b("Banzai").post("xtrackable:heatmap", a)
        };
        c.beginTracking = function(a, b) {
            var c = this;
            this.trackingEntries[a] = b;
            setTimeout(function() {
                return c.onTrackingCompleted(a)
            }, this.loggingDurationMS)
        };
        c.createTrackingEntry = function(a) {
            return {
                tracker: a.tracker,
                token: a.token,
                startedTrackingTS: this.getCurrentTimestamp(),
                viewportProgressEvents: []
            }
        };
        c.getCurrentTimestamp = function() {
            return (Date.now() / 1e3).toFixed(2)
        };
        c.$1 = function() {
            return 0
        };
        c.$2 = function(a, b) {
            var c = "Completed tracking for id " + a + " token=" + b.token + " startedTrackingTS=" + b.startedTrackingTS + "\n";
            b.viewportProgressEvents.forEach(function(a) {
                c += "% in view: " + a.percentInViewport + " timestamp=" + a.timestamp + "\n"
            })
        };
        return a
    }();
    e.exports = a
}), null);
__d("VisibilityTracking", ["Banzai", "BrowseClientEventLogger", "DataAttributeUtils", "ErrorUtils", "ScriptPath", "SubscriptionsHandler", "Visibility", "VisibilityTrackingHelper", "collectDataAttributes", "getElementPosition", "gkx", "pageID", "throttle"], (function(a, b, c, d, e, f) {
    var g, h = "visibility_tracking",
        i = "[data-vistracking]",
        j = 500,
        k = 50,
        l = 50,
        m = 50,
        n = 50,
        o = 0;
    a = function() {
        "use strict";

        function a(a) {
            var c = this;
            a = a || {};
            if (!a.bypass_banzai_check && !b("Banzai").isEnabled(h)) return;
            this.visibleElementInfo = {};
            this.doNotForceExitOnUpdateVisible = !1;
            this.getDataFromConfig(a);
            b("Visibility").addListener(b("Visibility").VISIBLE, (g || (g = b("ErrorUtils"))).guard(function() {
                return c.fireEvent("browser")
            }, "VisibilityTracking:visible", this));
            b("Visibility").addListener(b("Visibility").HIDDEN, g.guard(function() {
                return c.clearAllVisibleElements("browser")
            }, "VisibilityTracking:hidden", this));
            b("ScriptPath").subscribe(g.guard(function() {
                return c.updateVisibleElements()
            }, "VisibilityTracking:scriptPath", this));
            b("Banzai").subscribe(b("Banzai").SHUTDOWN, g.guard(function() {
                return c.onUnload()
            }, "VisibilityTracking:banzaiShutdown", this));
            this.fireEventCallback = b("throttle").acrossTransitions(g.guard(function(a) {
                return c.fireEvent(a)
            }, "VisibilityTracking:fireEventCallback", this), this.timeout, this);
            this.listeners = new(b("SubscriptionsHandler"))();
            b("VisibilityTrackingHelper").getEventListeners(function() {
                return c.fireEventCallback()
            }, a).forEach(function(a) {
                this.listeners.addSubscriptions(a)
            }, this);
            this.extraInit && (g || (g = b("ErrorUtils"))).applyWithGuard(this.extraInit.bind(this))
        }
        var c = a.prototype;
        c.getDataFromConfig = function(a) {
            this.config = a, this.root = a.root || document.documentElement, this.selector = a.selector || i, this.visibleEventCallBack = a.visibleEventCallBack || function() {}, this.timeout = a.timeout !== void 0 ? a.timeout : j, this.minOffsetVisibleFromBottom = a.minOffsetVisibleFromBottom !== void 0 ? a.minOffsetVisibleFromBottom : k, this.minOffsetVisibleFromTop = a.minOffsetVisibleFromTop !== void 0 ? a.minOffsetVisibleFromTop : l, this.minOffsetVisibleFromLeft = a.minOffsetVisibleFromLeft !== void 0 ? a.minOffsetVisibleFromLeft : m, this.minOffsetVisibleFromRight = a.minOffsetVisibleFromRight !== void 0 ? a.minOffsetVisibleFromRight : n, this.handleAllHiddenEvents = a.handleAllHiddenEvents !== void 0 ? a.handleAllHiddenEvents : !1, this.handleAllVisibleEvents = a.handleAllVisibleEvents !== void 0 ? a.handleAllVisibleEvents : !1, this.cacheTrackedElements = a.cacheTrackedElements !== void 0 ? a.cacheTrackedElements : !1, this.addCauseToAllHiddenEvents = a.addCauseToAllHiddenEvents != void 0 ? a.addCauseToAllHiddenEvents : !1, this.doNotForceExitOnUpdateVisible = a.doNotForceExitOnUpdateVisible != void 0 ? a.doNotForceExitOnUpdateVisible : !1
        };
        c.getAllTrackedElements = function() {
            if (!this.allTrackedElements) {
                this.allTrackedElements = {};
                var a = [];
                this.config.is_xtrackable ? a = b("DataAttributeUtils").getXTrackableElements() : this.root && this.root.querySelectorAll && (a = this.root.querySelectorAll(this.selector));
                for (var c = 0; c < a.length; c++) {
                    var d = this.getElementID(a[c]);
                    this.allTrackedElements[d.toString()] = a[c]
                }
            }
            return this.allTrackedElements
        };
        c.refreshAllTrackedElements = function() {
            delete this.allTrackedElements;
            return this.getAllTrackedElements()
        };
        c.getDataToLog = function(a) {
            a = Object.assign(b("collectDataAttributes")(a, ["gt"]).gt, {
                client_time: Date.now() / 1e3,
                time_spent_id: b("pageID"),
                script_path: b("ScriptPath").getScriptPath()
            });
            return a
        };
        c.getElementID = function(a) {
            var b = a.$1;
            if (b) return b;
            a.$1 = ++o;
            return o
        };
        c.sendDataToLog = function(a) {
            b("BrowseClientEventLogger").maybeLogVisiblityEvent(a), b("Banzai").post(h, a)
        };
        c.isInstreamAdStoryElement = function(a) {
            return !1
        };
        c.fireEvent = function(a) {
            a === void 0 && (a = "default");
            var c = this.cacheTrackedElements ? this.allTrackedElements : this.refreshAllTrackedElements();
            for (var d in c) {
                var e = c[d],
                    f = b("VisibilityTrackingHelper").getViewportInfo();
                f = this.isVisible(e, f);
                !f && (d in this.visibleElementInfo || this.handleAllHiddenEvents) ? this.handleEvent(e, {
                    name: "hidden",
                    cause: a
                }) : f && (!(d in this.visibleElementInfo) || this.handleAllVisibleEvents) && this.handleEvent(e, {
                    name: "visible",
                    cause: a
                })
            }
            this.clearUntrackedVisibleElements()
        };
        c.isVisible = function(a, c) {
            if (a == null) return !1;
            if (b("gkx")("820050") && b("VisibilityTrackingHelper").isSnippetFlyoutVisible()) return !1;
            a = b("getElementPosition")(a);
            return !!(a.x || a.y || a.width || a.height) && a.y + a.height >= this.minOffsetVisibleFromTop && a.y <= c.height - this.minOffsetVisibleFromBottom && a.x + a.width >= this.minOffsetVisibleFromLeft && a.x <= c.width - this.minOffsetVisibleFromRight
        };
        c.handleEvent = function(a, c) {
            var d = this.getElementID(a).toString(),
                e = this.getDataToLog(a),
                f;
            if (c.name === "visible") {
                var g = Math.floor(Date.now() / 1e3);
                f = b("pageID").concat(":", g.toString(), ":", this.getElementID(a).toString());
                this.visibleElementInfo[d] = {
                    visibility_id: f,
                    elem: a
                }
            } else if (c.name === "hidden") {
                d in this.visibleElementInfo && (f = this.visibleElementInfo[d].visibility_id, delete this.visibleElementInfo[d]);
                if (c.cause === "browser" || this.doNotForceExitOnUpdateVisible && c.cause === "updateVisible") return
            }
            this.sendDataToLog(Object.assign(e, {
                event: c.name,
                visibility_id: f
            }))
        };
        c.clearUntrackedVisibleElements = function() {
            var a = this.getAllTrackedElements();
            for (var b in this.visibleElementInfo)
                if (!(b in a)) {
                    var c = this.visibleElementInfo[b];
                    c.elem && this.handleEvent(c.elem, {
                        name: "hidden",
                        cause: "removed"
                    })
                }
        };
        c.clearAllVisibleElements = function(a) {
            a === void 0 && (a = "default");
            var b = this.getAllTrackedElements();
            for (var c in b) c in this.visibleElementInfo && this.handleEvent(b[c], {
                name: "hidden",
                cause: a
            });
            this.clearUntrackedVisibleElements()
        };
        c.updateVisibleElements = function() {
            this.addCauseToAllHiddenEvents ? this.clearAllVisibleElements("updateVisible") : this.clearAllVisibleElements(), this.fireEvent()
        };
        c.refreshAndFireEvent = function(a) {
            this.refreshAllTrackedElements(), this.fireEventCallback(a)
        };
        c.onUnload = function() {
            this.addCauseToAllHiddenEvents ? this.clearAllVisibleElements("unload") : this.clearAllVisibleElements(), this.listeners && (this.listeners.release(), this.listeners = null), this.extraCleanup && (g || (g = b("ErrorUtils"))).applyWithGuard(this.extraCleanup.bind(this))
        };
        a.init = function(b) {
            return new a(b)
        };
        return a
    }();
    e.exports = a
}), null);
__d("ViewableImpressionEventHandler", ["DataAttributeUtils", "FullViewLogger", "ViewabilityDurationSegmentLogger", "ViewableImpressionDurationLogger", "ViewableImpressionHeatmapLogger", "ViewableImpressionTracker", "VisibilityTracking"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = 1;
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);

        function c() {
            return a.apply(this, arguments) || this
        }
        var d = c.prototype;
        d.extraInit = function() {
            this.impressionTrackers = {}
        };
        d.getDataFromConfig = function(b) {
            a.prototype.getDataFromConfig.call(this, b), this.doHeatmapLogging = b.doHeatmapLogging, this.heatmapLoggingDurationMS = b.heatmapLoggingDurationMS, b.impressionURL = b.impressionURL !== void 0 ? b.impressionURL : "/xti.php", b.nonviewableEnabled = b.nonviewableEnabled !== void 0 ? b.nonviewableEnabled : !1
        };
        d.getImpressionTracking = function(a) {
            var c = this.getElementID(a),
                d = this.impressionTrackers[c];
            if (!d) {
                var e = babelHelpers["extends"]({}, this.getConfigFromElement(a), this.config);
                d = new(b("ViewableImpressionTracker"))(c, a, e);
                this.impressionTrackers[c] = d;
                e.log_impression_duration && b("ViewableImpressionDurationLogger").logFromViewableImpressionTracker(d);
                this.doHeatmapLogging && b("ViewableImpressionHeatmapLogger").logFromViewableImpressionTracker(d, this.heatmapLoggingDurationMS);
                e.should_log_full_views && b("FullViewLogger").logFromViewableImpressionTracker(d);
                e.should_log_viewability_duration && b("ViewabilityDurationSegmentLogger").logFromViewableImpressionTracker(d)
            }
            return d
        };
        d.handleEvent = function(a, b) {
            var c = this.getImpressionTracking(a);
            if (!c) return;
            if (b.name === "visible") c.onVisible(b), this.visibleElementInfo[c.getID()] || (this.visibleElementInfo[c.getID()] = {
                elem: a
            });
            else if (b.name === "hidden") {
                a = c.getConfig();
                b.cause === "default" || a.log_visibility_hidden_when_browser_inactive && b.cause === "browser" || a.addCauseToAllHiddenEvents && (b.cause === "updateVisible" || b.cause === "unload") ? (c.onHidden(b.cause), delete this.visibleElementInfo[c.getID()]) : b.cause === "removed" && (c.onRemoved(), delete this.visibleElementInfo[c.getID()], delete this.impressionTrackers[c.getID()])
            }
        };
        d.isInstreamAdStoryElement = function(a) {
            a = babelHelpers["extends"]({}, this.getConfigFromElement(a), this.config);
            return !!a.is_instream_story
        };
        d.getConfigFromElement = function(a) {
            return JSON.parse(b("DataAttributeUtils").getDataAttribute(a, "data-xt-vimp"))
        };
        d.getElementID = function(a) {
            a.getAttribute("id") || a.setAttribute("id", "xt_uniq_" + g++);
            return a.getAttribute("id")
        };
        return c
    }(b("VisibilityTracking"));
    e.exports = a
}), null);
__d("ViewableImpressionTracking", ["Arbiter", "DesktopHscrollUnitEventConstants", "ErrorUtils", "LitestandMessages", "Run", "ViewableImpressionConfig", "ViewableImpressionEventHandler"], (function(a, b, c, d, e, f) {
    var g;
    a = {
        init: function() {
            b("ViewableImpressionEventHandler").instance === void 0 && (b("ViewableImpressionEventHandler").instance = new(b("ViewableImpressionEventHandler"))(b("ViewableImpressionConfig")), b("ViewableImpressionEventHandler").instance.listeners.addSubscriptions(b("Arbiter").subscribe([b("LitestandMessages").STORIES_INSERTED, "AdsRefreshHandler/AdsLoaded", "MPPInsights/ChartView", "PhotoSnowliftAds/displayUnits", "WebMessengerAdsControl/adjustAds", b("DesktopHscrollUnitEventConstants").HSCROLL_ITEM_INSERTED_EVENT, "WebVideoChannelAds/AdsLoaded", "Stories/cardChanged"], (g || (g = b("ErrorUtils"))).guard(function(a) {
                b("ViewableImpressionEventHandler").instance.refreshAndFireEvent(a)
            }, "ViewableImpressionTracking")))), b("Run").onLoad(function() {
                b("ViewableImpressionEventHandler").instance.refreshAndFireEvent()
            })
        }
    };
    e.exports = a
}), null);
__d("PluginTabLoadMore", ["CSS", "Event"], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        noMoreContent: function() {
            b("Event").fire(this.root, "noMoreContent"), b("CSS").hide(this.spinner)
        },
        setCursor: function(a) {
            b("Event").fire(this.root, "setCursor", a)
        },
        init: function(a, b) {
            this.root = a, this.spinner = b
        }
    };
    e.exports = a
}), null);
__d("ghlInternalBumpODSKey", ["BanzaiODS"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function(a, c) {
        return b("BanzaiODS").bumpEntityKey(2966, "feed_ads", a + "." + c)
    };
    e.exports = a
}), null);
__d("ghlTestUBTFacebook", ["Promise", "requireCond", "cr:1088657", "URI", "ghlInternalBumpODSKey", "promiseDone"], (function(a, b, c, d, e, f) {
    "use strict";
    var g, h = function() {
            return new(b("Promise"))(function(a) {
                var b = window.atob,
                    c = document.body;
                if (b == null || c == null) {
                    a(!1);
                    return
                }
                var d = document.createElement("div");
                d.className = l(b);
                c.appendChild(d);
                b = k(d);
                if (b && b.MozBinding && b.MozBinding.startsWith("url")) {
                    setTimeout(function() {
                        return a(d.clientWidth === 0)
                    }, 5e3);
                    return
                }
                a((b == null ? void 0 : b.display) === "none")
            })
        },
        i = function() {
            return new(b("Promise"))(function(a) {
                var c = document.body;
                if (c == null) {
                    a(!1);
                    return
                }
                var d = document.createElement("img");
                c.appendChild(d);
                d.onload = function() {
                    var b = k(d);
                    a((b == null ? void 0 : b.display) === "none");
                    d.parentNode && d.parentNode.removeChild(d)
                };
                d.onerror = function() {
                    a(!0), d.parentNode && d.parentNode.removeChild(d)
                };
                d.src = new(g || (g = b("URI")))("https://scontent.xx.fbcdn.net/hads-ak-prn2/1487645_6012475414660_1439393861_n.png").toString()
            })
        },
        j = null;
    a = function(a) {
        j == null && (m("init"), j = new(b("Promise"))(function(a) {
            return b("promiseDone")(b("Promise").all([h(), i()]), function(b) {
                var c = b[0];
                b = b[1];
                m("done", c, b);
                c = c || b;
                a(c)
            })
        })), b("promiseDone")(j, a), b("cr:1088657") && b("cr:1088657").i()
    };
    var k = function(a) {
            return window.getComputedStyle(a)
        },
        l = function(a) {
            return [a("QWRCb3g="), a("QWQ="), a("YWR2ZXJ0"), a("cG9zdC1hZHM=")].join(" ")
        },
        m = function() {
            for (var a = arguments.length, c = new Array(a), d = 0; d < a; d++) c[d] = arguments[d];
            return b("ghlInternalBumpODSKey")("ghlTestUBT", String(c.join(".")))
        };
    e.exports = a
}), null);