if (self.CavalryLogger) {
    CavalryLogger.start_js(["+kRax"]);
}

__d("DesktopHscrollUnitEventConstants", [], (function(a, b, c, d, e, f) {
    e.exports = {
        HSCROLL_ITEM_INSERTED_EVENT: "DesktopHScrollUnit/itemInserted",
        HSCROLL_ITEM_SHOWN_EVENT: "DesktopHScrollUnit/itemShown",
        HSCROLL_ITEM_HIDE_EVENT: "DesktopHScrollUnit/HideIndividualItem",
        HSCROLL_ITEM_SCROLL_BEFORE_XOUT_EVENT: "DesktopHScrollUnit/scrollItemBeforeXout",
        HSCROLL_ITEM_UNHIDE_EVENT: "DesktopHScrollUnit/unhideIndividualItem",
        HSCROLL_LAST_ITEM_NFX_ACTION_TAKEN: "logLastAdXout",
        HSCROLL_PAGER_ITEM_HIDE_EVENT: "onXoutIndividualItem"
    }
}), null);
__d("AvailableListConstants", [], (function(a, b, c, d, e, f) {
    a = Object.freeze({
        ON_AVAILABILITY_CHANGED: "buddylist/availability-changed",
        ON_UPDATE_ERROR: "buddylist/update-error",
        ON_UPDATED: "buddylist/updated",
        ON_CHAT_NOTIFICATION_CHANGED: "chat-notification-changed",
        OFFLINE: 0,
        IDLE: 1,
        ACTIVE: 2,
        MOBILE: 3,
        WEB_STATUS: "webStatus",
        FB_APP_STATUS: "fbAppStatus",
        MESSENGER_STATUS: "messengerStatus",
        OTHER_STATUS: "otherStatus",
        STATUS_ACTIVE: "active",
        STATUS_IDLE: "idle",
        STATUS_OFFLINE: "offline"
    });
    e.exports = a
}), null);
__d("PresenceUtil", ["CurrentUser", "randomInt"], (function(a, b, c, d, e, f) {
    var g = b("randomInt")(0, 4294967295) + 1;

    function a() {
        return g
    }

    function c() {
        return b("CurrentUser").isLoggedInNow()
    }
    e.exports = {
        getSessionID: a,
        hasUserCookie: c
    }
}), null);
__d("PresencePrivacy", ["Arbiter", "ArbiterMixin", "AsyncRequest", "Bootloader", "ChannelConstants", "CurrentUser", "PresencePrivacyInitialData", "PresenceUtil", "mixin"], (function(a, b, c, d, e, f) {
    var g = "/ajax/chat/privacy/settings.php",
        h = "/ajax/chat/privacy/online_policy.php",
        i = "/ajax/chat/privacy/visibility.php",
        j = "friend_visibility",
        k = "visibility",
        l = "online_policy",
        m = babelHelpers["extends"]({}, (c = b("PresencePrivacyInitialData")).privacyData),
        n = c.visibility,
        o = babelHelpers["extends"]({}, c.privacyData),
        p = n,
        q = c.onlinePolicy,
        r = q,
        s = [],
        t = !1;
    d = function(a) {
        "use strict";
        babelHelpers.inheritsLoose(b, a);

        function b() {
            var b, c;
            for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++) e[f] = arguments[f];
            return (b = c = a.call.apply(a, [this].concat(e)) || this, c.WHITELISTED = 1, c.BLACKLISTED = -1, c.UNLISTED = 0, c.ONLINE = 1, c.OFFLINE = 0, c.ONLINE_TO_WHITELIST = 0, c.ONLINE_TO_BLACKLIST = 1, b) || babelHelpers.assertThisInitialized(c)
        }
        var c = b.prototype;
        c.init = function(a, b, c) {};
        c.setVisibility = function(a) {
            p = n;
            y(a);
            var b = {
                    visibility: a
                },
                c = {
                    type: k,
                    visibility: a
                };
            b = G(i, b, c);
            B(b, c);
            return a
        };
        c.getVisibility = function() {
            return n
        };
        c.setOnlinePolicy = function(a) {
            r = q;
            z(a);
            var b = {
                    online_policy: a
                },
                c = {
                    type: l,
                    online_policy: a
                };
            b = G(h, b, c);
            B(b, c);
            return a
        };
        c.getOnlinePolicy = function() {
            return q
        };
        c.getFriendVisibility = function(a) {
            return m[a] || u.UNLISTED
        };
        c.getFriendsVisibility = function() {
            return m
        };
        c.isUserOffline = function() {
            return this.getVisibility() === u.OFFLINE
        };
        c.allows = function(a) {
            return this.isUserOffline() ? !1 : this.allowsIfViewerIsOnline(a)
        };
        c.allowsIfViewerIsOnline = function(a) {
            var b = this.getOnlinePolicy();
            return b === u.ONLINE_TO_WHITELIST ? m[a] == u.WHITELISTED : m[a] != u.BLACKLISTED
        };
        c.getOnlinePolicyStr = function() {
            if (this.isUserOffline()) return "offline";
            var a = this.getOnlinePolicy();
            if (a === u.ONLINE_TO_WHITELIST) return "online_to_whitelist";
            return a === u.ONLINE_TO_BLACKLIST ? "online_to_blacklist" : "unknown"
        };
        c.setFriendsVisibility = function(a, b) {
            if (a.length > 0) {
                var c = {};
                for (var d = 0; d < a.length; d++) {
                    var e = a[d];
                    o[e] = m[e];
                    c[e] = b
                }
                v(c);
                e = b;
                e == u.UNLISTED && (e = o[a[0]]);
                d = {
                    users: a,
                    setting: b,
                    setting_type: e
                };
                a = {
                    type: j,
                    settings: c
                };
                e = G(g, d, a);
                B(e, a)
            }
            return b
        };
        c.setFriendVisibilityMap = function(a, b) {
            for (var c in a) o[c] = m[c];
            v(a);
            a = {
                type: j,
                settings: a
            };
            B(F(b, a), a)
        };
        c.allow = function(a) {
            if (this.allows(a)) throw new Error("allow() should only be called for users that are not already allowed");
            if (this.getVisibility() === u.OFFLINE) throw new Error("allow() should only be called when the user is already online");
            var b = this.getOnlinePolicy() === u.ONLINE_TO_WHITELIST ? u.WHITELISTED : u.UNLISTED;
            return this.setFriendsVisibility([a], b)
        };
        c.disallow = function(a) {
            if (!this.allows(a)) throw new Error("disallow() should only be called for users that are not already disallowed");
            if (this.getVisibility() === u.OFFLINE) throw new Error("disallow() should only be called when the user is already online");
            var b = this.getOnlinePolicy() === u.ONLINE_TO_BLACKLIST ? u.BLACKLISTED : u.UNLISTED;
            return this.setFriendsVisibility([a], b)
        };
        c.getBlacklist = function() {
            var a = [];
            for (var b in m) m[b] === u.BLACKLISTED && a.push(b);
            return a
        };
        c.getWhitelist = function() {
            var a = [];
            for (var b in m) m[b] === u.WHITELISTED && a.push(b);
            return a
        };
        c.getMapForTest = function() {
            return m
        };
        c.setMapForTest = function(a) {
            m = a
        };
        return b
    }(b("mixin")(b("ArbiterMixin")));
    var u = new d();

    function v(a) {
        var c;
        for (c in a) {
            var d = a[c];
            if (c == b("CurrentUser").getID()) throw new Error("Invalid to set current user's visibility");
            switch (d) {
                case u.WHITELISTED:
                case u.BLACKLISTED:
                case u.UNLISTED:
                    break;
                default:
                    throw new Error("Invalid state: " + d)
            }
        }
        for (c in a) m[c] = a[c];
        u.inform("privacy-changed")
    }

    function w(a, b) {
        var c = {};
        c[a] = b;
        v(c)
    }

    function x(a) {
        b("Bootloader").loadModules(["MessengerMQTTPresenceReporting"], function(b) {
            b.reportChatVisibility(!!a)
        }, "PresencePrivacy")
    }

    function y(a) {
        switch (a) {
            case u.ONLINE:
            case u.OFFLINE:
                break;
            default:
                throw new Error("Invalid visibility: " + a)
        }
        n = a;
        x(a);
        u.inform("privacy-changed");
        u.inform("privacy-user-presence-changed")
    }

    function z(a) {
        switch (a) {
            case u.ONLINE_TO_WHITELIST:
            case u.ONLINE_TO_BLACKLIST:
                break;
            default:
                throw new Error("Invalid default online policy: " + a)
        }
        q = a;
        u.inform("privacy-user-presence-changed");
        u.inform("privacy-changed")
    }

    function A(a, b) {
        t = !0, a.send()
    }

    function B(a, b) {
        s.push({
            request: a,
            data: b
        });
        if (!t) {
            a = s.shift();
            A(a.request, a.data)
        }
    }

    function C(a, b) {
        b = a.type;
        if (b === j) {
            u.inform("privacy-availability-changed");
            for (var c in a.settings) o[c] = a.settings[c]
        } else b === k ? p = a.visibility : b === l && (r = a.online_policy), u.inform("privacy-user-presence-response")
    }

    function D(a, b) {
        n !== p && y(p), q !== r && z(r), Object.assign(m, o), u.inform("privacy-changed"), s = []
    }

    function E(a) {
        t = !1;
        if (s.length > 0) {
            a = s.shift();
            A(a.request, a.data)
        }
    }

    function F(a, c) {
        if (b("PresenceUtil") != null) {
            var d = a.getData();
            d.window_id = b("PresenceUtil").getSessionID();
            a.setData(d)
        }
        a.setHandler(C.bind(this, c)).setErrorHandler(D.bind(this, c)).setTransportErrorHandler(D.bind(this, c)).setFinallyHandler(E.bind(this)).setAllowCrossPageTransition(!0);
        return a
    }

    function G(a, c, d) {
        return F(new(b("AsyncRequest"))(a).setData(c), d)
    }

    function a(a, c) {
        a = c.obj;
        if (a.viewer_id != b("CurrentUser").getID()) throw new Error("Viewer got from the channel is not the real viewer");
        if (a.window_id === b("PresenceUtil").getSessionID()) return;
        var d = a.data;
        if (a.event == "access_control_entry") d.target_ids.forEach(function(a) {
            w(a, d.setting), o[a] = d.setting
        });
        else {
            if (a.event == "visibility_update") {
                c = d.visibility ? u.ONLINE : u.OFFLINE;
                y(c);
                p = c
            } else a.event == "online_policy_update" && (z(d.online_policy), r = d.online_policy);
            u.inform("privacy-user-presence-response")
        }
    }
    u.inform("privacy-changed");
    u.inform("privacy-user-presence-changed", "state");
    b("Arbiter").subscribe(b("ChannelConstants").getArbiterType("privacy_changed"), a.bind(this));
    b("Arbiter").subscribe(b("ChannelConstants").ON_CONFIG, function(a, b) {
        a = b.getConfig("visibility", null);
        if (a !== null && typeof a !== "undefined") {
            b = a ? u.ONLINE : u.OFFLINE;
            y(b)
        }
    }.bind(this));
    e.exports = u
}), null);
__d("ChatVisibility", ["Arbiter", "PresencePrivacy"], (function(a, b, c, d, e, f) {
    var g = {
        isOnline: function() {
            return b("PresencePrivacy").getVisibility() === b("PresencePrivacy").ONLINE
        },
        hasBlackbirdEnabled: function() {
            return this.isVisibleToMostFriends() || this.isVisibleToSomeFriends()
        },
        isVisibleToMostFriends: function() {
            return b("PresencePrivacy").getOnlinePolicy() === b("PresencePrivacy").ONLINE_TO_BLACKLIST && b("PresencePrivacy").getBlacklist().length > 0
        },
        isVisibleToSomeFriends: function() {
            return b("PresencePrivacy").getOnlinePolicy() === b("PresencePrivacy").ONLINE_TO_WHITELIST && b("PresencePrivacy").getWhitelist().length > 0
        },
        goOnline: function(a) {
            b("PresencePrivacy").getVisibility() === b("PresencePrivacy").OFFLINE && (b("PresencePrivacy").setVisibility(b("PresencePrivacy").ONLINE), b("Arbiter").inform("chat-visibility/go-online")), a && a()
        },
        goOffline: function(a) {
            b("PresencePrivacy").getVisibility() === b("PresencePrivacy").ONLINE && (b("PresencePrivacy").setVisibility(b("PresencePrivacy").OFFLINE), b("Arbiter").inform("chat-visibility/go-offline")), a && a()
        },
        toggleVisibility: function() {
            g.isOnline() ? g.goOffline() : g.goOnline()
        }
    };
    e.exports = g
}), null);
__d("ServerTime", ["InitialServerTime"], (function(a, b, c, d, e, f) {
    d(b("InitialServerTime").serverTime);
    var g;

    function a() {
        return Date.now() - g
    }

    function c() {
        return g
    }

    function d(a) {
        g = Date.now() - a
    }
    e.exports = {
        getMillis: a,
        getOffsetMillis: c,
        update: d,
        get: a,
        getSkew: c
    }
}), null);
__d("LastActiveTimes", ["fbt", "ServerTime"], (function(a, b, c, d, e, f, g) {
    var h = {};

    function i(a) {
        if (!a || a < 0) return null;
        a = b("ServerTime").get() / 1e3 - a;
        a = Math.floor(a / 60);
        var c = Math.floor(a / 60),
            d = Math.floor(c / 24);
        if (a <= 1) return g._({
            "*": "{count}m"
        }, [g._param("count", 1, [0])]);
        else if (a < 60) return g._({
            "*": "{count}m"
        }, [g._param("count", a, [0])]);
        else if (c < 24) return g._({
            "*": "{count}h"
        }, [g._param("count", c, [0])]);
        else if (d < 3) return g._({
            "*": "{count}d"
        }, [g._param("count", d, [0])]);
        else return null
    }

    function j(a, b) {
        (!(a in h) || h[a] < b) && (h[a] = b)
    }

    function k(a) {
        if (a in h) return h[a];
        else return 0
    }
    a = {
        update: function(a) {
            for (var b in a) j(b, a[b])
        },
        getShortDisplay: function(a) {
            return i(k(a))
        },
        get: function(a) {
            return k(a)
        },
        getDebugData: function() {
            return h
        }
    };
    e.exports = a
}), null);
__d("FBIDCheck", [], (function(a, b, c, d, e, f) {
    "use strict";
    var g = /^[1-9]\d*$/;
    a = {
        isUser_deprecated: function(a) {
            if (!a || typeof a === "string" && !g.test(a)) return !1;
            a = parseInt(a, 10);
            return !a ? !1 : a > 0 && a < 22e8 || a >= 1e14 && a <= 100099999989999 || a >= 89e12 && a <= 89999999999999 || a >= 6000001e7 && a <= 60000019999999
        }
    };
    e.exports = a
}), null);
__d("PresenceStatus", ["ArbiterMixin", "AvailableListConstants", "AvailableListInitialData", "BanzaiODS", "Bootloader", "ChatVisibility", "CurrentUser", "FBIDCheck", "FBLogger", "LastActiveTimes", "PresenceConfig", "PresencePrivacy", "ServerTime", "createObjectFrom", "debounceAcrossTransitions", "gkx"], (function(a, b, c, d, e, f) {
    b("BanzaiODS").setEntitySample("presence", 1e-4);
    var g = {},
        h = {},
        i = {},
        j = {},
        k = Object.assign({}, b("ArbiterMixin")),
        l = b("debounceAcrossTransitions")(function() {
            return k.inform("change")
        }, 0);

    function m(a) {
        var c, d = parseInt(a.topic.match(/\d+$/), 10);
        a = parseInt(JSON.parse(a.payload).lat, 10);
        var e = Date.now() - a * 1e3;
        e = b("PresenceConfig").get("active_cutoff") * 1e3 - e;
        b("LastActiveTimes").update((c = {}, c[d] = a, c));
        k.checkPresence(d);
        k.get(d) === b("AvailableListConstants").ACTIVE && (window.clearTimeout(j[d].timeout), j[d].timeout = window.setTimeout(function() {
            k.checkPresence(d)
        }, e))
    }

    function n(a) {
        return /^\d+$/.test(a)
    }
    Object.assign(k, {
        resetPresenceData: function() {
            g = {}, h = {}
        },
        reset: function() {
            k.resetPresenceData(), i = {}
        },
        get: function(a) {
            !n(a) && b("PresenceConfig").get("presence_throw_for_malformed_id") && b("FBLogger")("presence").warn("received malformed id '%s'", a);
            if (a == b("CurrentUser").getID()) return b("ChatVisibility").isOnline() ? b("AvailableListConstants").ACTIVE : b("AvailableListConstants").OFFLINE;
            n(a) && !b("FBIDCheck").isUser_deprecated(a) && !j[a] && (b("BanzaiODS").bumpEntityKey(3303, "presence", "page_subscribe"), j[a] = {}, b("PresenceConfig").get("presence_page_green_dot_sub") && b("Bootloader").loadModules(["SkywalkerManager"], function(b) {
                return b.subscribe("presence_push/fb/" + a, m)
            }, "PresenceStatus"));
            var c = b("AvailableListConstants").OFFLINE;
            a in g && (c = g[a]);
            b("PresencePrivacy").allows(a) || (c = b("AvailableListConstants").OFFLINE);
            return c
        },
        getCapabilities: function(a) {
            a = h[a];
            return a ? a : 0
        },
        isPlayingCanvasGameUser: function(a) {
            return !!i[a]
        },
        getGroup: function(a) {
            return a.some(function(a) {
                return a == b("CurrentUser").getID() ? !1 : k.get(a) === b("AvailableListConstants").ACTIVE
            }) ? b("AvailableListConstants").ACTIVE : b("AvailableListConstants").OFFLINE
        },
        set: function(a, c, d, e, f, i) {
            if (a == b("CurrentUser").getID()) return !1;
            var j;
            if (c !== null && c !== void 0) {
                c = c == b("AvailableListConstants").ACTIVE ? b("AvailableListConstants").ACTIVE : b("AvailableListConstants").OFFLINE;
                d = k.get(a);
                j = d != c;
                if ((j || c == b("AvailableListConstants").ACTIVE) && b("FBIDCheck").isUser_deprecated(a)) {
                    b("LastActiveTimes").update((e = {}, e[a] = b("ServerTime").get() / 1e3, e))
                }
                g[a] = c
            }
            d = !1;
            f !== void 0 && f !== null && (d = k.getCapabilities(a) != f, h[a] = f);
            e = j || d;
            e && !i && l();
            return e
        },
        setPlayingCanvasGameFriends: function(a) {
            if (!b("gkx")("678262")) return;
            i = b("createObjectFrom")(a)
        },
        getOnlineIDs: function() {
            var a, c = [];
            for (a in g) k.get(a) === b("AvailableListConstants").ACTIVE && c.push(a);
            return c
        },
        getAllIDs: function() {
            return Object.keys(g)
        },
        getOnlineCount: function() {
            return k.getOnlineIDs().length
        },
        getPresenceStats: function() {
            var a = 0,
                c = 0,
                d = 0;
            for (var e in g) {
                a += 1;
                switch (k.get(e)) {
                    case b("AvailableListConstants").OFFLINE:
                        c += 1;
                        break;
                    case b("AvailableListConstants").ACTIVE:
                        d += 1;
                        break;
                    default:
                        break
                }
            }
            return {
                total: a,
                offline: c,
                active: d
            }
        },
        getAllDebugInfo: function() {
            var a = {};
            for (var b in g) a[b] = {
                p: g[b],
                vc: h[b]
            };
            return a
        },
        setMultiFromMQTT: function(a) {
            var c = {};
            Array.isArray(a) && a.forEach(function(a) {
                a.l && (c[a.u] = a.l), k.set(a.u, a.p, !1, "mqtt", a.c, !0)
            });
            b("LastActiveTimes").update(c);
            l()
        },
        setMultiChatproxy: function(a) {
            var c = {};
            for (var d in a) {
                a[d].lat && (c[d] = a[d].lat);
                var e = a[d].p;
                k.set(d, e, !1, "chatproxy", a[d].vc, !0)
            }
            b("LastActiveTimes").update(c);
            l()
        },
        setMultiActive: function(a, c) {
            var d = !1;
            a.forEach(function(a) {
                k.set(a, b("AvailableListConstants").ACTIVE, !1, c, null, !0) && (d = !0)
            });
            d && l()
        },
        checkPresence: function(a) {
            var c = !1,
                d = Math.ceil(Date.now() / 1e3) - b("LastActiveTimes").get(a);
            k.set(a, d < b("PresenceConfig").get("active_cutoff") ? b("AvailableListConstants").ACTIVE : b("AvailableListConstants").OFFLINE, !1, "pylon", null, !0) && (c = !0);
            c && l()
        }
    });
    b("AvailableListInitialData").activeList && b("AvailableListInitialData").activeList.length > 0 && k.setMultiActive(b("AvailableListInitialData").activeList, "available_list_active");
    b("AvailableListInitialData").playingNow && b("AvailableListInitialData").playingNow.length > 0 && k.setPlayingCanvasGameFriends(b("AvailableListInitialData").playingNow);
    b("AvailableListInitialData").lastActiveTimes && Object.keys(b("AvailableListInitialData").lastActiveTimes).length > 0 && b("LastActiveTimes").update(b("AvailableListInitialData").lastActiveTimes);
    e.exports = k
}), null);
__d("EntstreamFeedObject", ["csx", "CSS", "Parent"], (function(a, b, c, d, e, f, g) {
    var h = {
        getRoot: function(a) {
            return b("Parent").bySelector(a, "._5jmm")
        },
        getHscrollOuterRootIfAvailable: function(a) {
            a = a;
            b("CSS").matchesSelector(a, "._170y") && (a = h.getRoot(a.parentNode));
            return a
        }
    };
    e.exports = h
}), null);
__d("EntstreamFeedObjectTracking", ["csx", "CSS", "DOM", "EntstreamFeedObject", "Focus", "ge"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = new Map();
    e.exports = {
        register: function(a) {
            var c = this.getRoot(a.nodeID);
            if (!c) return;
            var d = b("DOM").scry(c, "._5v9_"),
                e = d && d.length ? d : [c];
            a.actorIDs.forEach(function(a) {
                var b = [].concat(h.get(a) || []);
                b.push.apply(b, e);
                h.set(a, b)
            })
        },
        hideAllFromActor: function(a) {
            var c = this.getRoot(a.nodeID);
            (h.get(a.actorID) || []).forEach(function(a) {
                if (a === c) return;
                b("CSS").hide(a)
            })
        },
        unhideAllFromActor: function(a) {
            var c = this.getRoot(a.nodeID);
            (h.get(a.actorID) || []).forEach(function(a) {
                b("CSS").show(a)
            });
            c && b("Focus").setWithoutOutline(c)
        },
        getRoot: function(a) {
            a = b("ge")(a);
            return a ? b("EntstreamFeedObject").getRoot(a) : null
        }
    }
}), null);
__d("collectDataAttributes", ["DataAttributeUtils", "getContextualParent"], (function(a, b, c, d, e, f) {
    var g = "normal";

    function a(a, c, d) {
        var e = {},
            f = [],
            h = c.length,
            i;
        for (i = 0; i < h; ++i) e[c[i]] = {}, f.push("data-" + c[i]);
        if (d) {
            e[g] = {};
            for (i = 0; i < (d || []).length; ++i) f.push(d[i])
        }
        d = {
            tn: "",
            "tn-debug": ","
        };
        a = a;
        while (a) {
            if (a.getAttribute)
                for (i = 0; i < f.length; ++i) {
                    var j = f[i],
                        k = b("DataAttributeUtils").getDataAttribute(a, j);
                    if (k) {
                        if (i >= h) {
                            e[g][j] === void 0 && (e[g][j] = k);
                            continue
                        }
                        j = JSON.parse(k);
                        for (var l in j) d[l] !== void 0 ? (e[c[i]][l] === void 0 && (e[c[i]][l] = []), e[c[i]][l].push(j[l])) : e[c[i]][l] === void 0 && (e[c[i]][l] = j[l])
                    }
                }
            a = b("getContextualParent")(a)
        }
        for (var m in e)
            for (var n in d) e[m][n] !== void 0 && (e[m][n] = e[m][n].join(d[n]));
        return e
    }
    e.exports = a
}), null);
__d("FeedTrackingAsync", ["Arbiter", "Run", "collectDataAttributes"], (function(a, b, c, d, e, f) {
    var g;
    e.exports.init = function() {
        if (g) return;
        g = b("Arbiter").subscribe("AsyncRequest/send", function(a, c) {
            a = c.request;
            c = a.getRelativeTo();
            if (c) {
                a = a.getData();
                c = b("collectDataAttributes")(c, ["ft"]);
                c.ft && Object.keys(c.ft).length && Object.assign(a, c)
            }
        });
        b("Run").onLeave(function() {
            g && (g.unsubscribe(), g = null)
        })
    }
}), null);
__d("AsyncFormRequestUtils", ["Arbiter"], (function(a, b, c, d, e, f) {
    a = {
        subscribe: function(a, c, d) {
            b("Arbiter").subscribe("AsyncRequest/" + c, function(b, c) {
                b = c.request.relativeTo;
                b && b === a && d(c)
            })
        }
    };
    e.exports = a
}), null);
__d("PluginFeedLikeButton", ["Arbiter", "AsyncFormRequestUtils", "ClientIDs", "CSS", "DOM", "DOMEventListener", "FormSubmit", "Keys", "PluginOptin", "URI"], (function(a, b, c, d, e, f) {
    var g;
    window.resetConfirmStoryLike = function(a) {
        b("CSS").show(b("DOM").find(document, "#likeStory_" + a)), b("DOM").remove(b("DOM").find(document, "#confirmStory_" + a))
    };
    a = {
        addClientId: function(a) {
            a.setAttribute("value", b("ClientIDs").getNewClientID())
        },
        loggedOutLikeButton: function(a, c, d) {
            var e = "";
            if (c === 23) e = "post";
            else if (c === 50) e = "page";
            else throw new Error("Invalid FBFeedLocation type.");
            c = new(b("PluginOptin"))(e).addReturnParams({
                act: "like_" + a
            });
            b("DOMEventListener").add(d, "click", c.start.bind(c))
        },
        init: function(a, c, d, e, f) {
            var h, i = function(a) {
                if (a.type === "keypress")
                    if (a.keyCode === b("Keys").RETURN || a.keyCode === b("Keys").SPACE) b("FormSubmit").send(f);
                    else return;
                b("FormSubmit").send(f)
            };
            (h = b("DOMEventListener")).add(c, "click", i);
            h.add(d, "click", i);
            h.add(c, "keypress", i);
            h.add(d, "keypress", i);
            h = e.getAttribute("value") === "1";
            b("AsyncFormRequestUtils").subscribe(f, "send", function(f) {
                f = e.getAttribute("value") === "1";
                b("CSS").conditionShow(d, f);
                b("CSS").conditionShow(c, !f);
                b("Arbiter").inform("embeddedUfiToggle", {
                    isLike: f,
                    storyToken: a
                });
                e.setAttribute("value", f ? "" : "1")
            });
            b("AsyncFormRequestUtils").subscribe(f, "response", function(f) {
                f = f.response.payload;
                if (f && !f.success) {
                    f = f.isLike;
                    b("CSS").conditionShow(c, f);
                    b("CSS").conditionShow(d, !f);
                    b("Arbiter").inform("revertLike", {
                        isLike: f,
                        storyToken: a
                    });
                    e.setAttribute("value", f ? "1" : "")
                }
            });
            i = new(g || (g = b("URI")))(window.location.search).getQueryData();
            h && i.act === "like_" + a && b("FormSubmit").send(f)
        }
    };
    e.exports = a
}), null);
__d("XUIAmbientNUXTheme", ["cx"], (function(a, b, c, d, e, f, g) {
    a = {
        wrapperClassName: "_2x6q",
        arrowDimensions: {
            offset: 14,
            length: 18
        }
    };
    e.exports = a
}), null);