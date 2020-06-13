if (self.CavalryLogger) {
    CavalryLogger.start_js(["GCWrR"]);
}

__d("BDOperationTypedLogger", ["Banzai", "GeneratedLoggerUtils", "nullthrows"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        function a() {
            this.$1 = {}
        }
        var c = a.prototype;
        c.log = function() {
            b("GeneratedLoggerUtils").log("logger:BDOperationLoggerConfig", this.$1, b("Banzai").BASIC)
        };
        c.logVital = function() {
            b("GeneratedLoggerUtils").log("logger:BDOperationLoggerConfig", this.$1, b("Banzai").VITAL)
        };
        c.logImmediately = function() {
            b("GeneratedLoggerUtils").log("logger:BDOperationLoggerConfig", this.$1, {
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
        c.setBdSessionID = function(a) {
            this.$1.bd_session_id = a;
            return this
        };
        c.setComponent = function(a) {
            this.$1.component = a;
            return this
        };
        c.setDurationUs = function(a) {
            this.$1.duration_us = a;
            return this
        };
        c.setExceptionMessage = function(a) {
            this.$1.exception_message = a;
            return this
        };
        c.setExceptionStackTrace = function(a) {
            this.$1.exception_stack_trace = a;
            return this
        };
        c.setExceptionType = function(a) {
            this.$1.exception_type = a;
            return this
        };
        c.setIntValue = function(a) {
            this.$1.int_value = a;
            return this
        };
        c.setLevel = function(a) {
            this.$1.level = a;
            return this
        };
        c.setOperation = function(a) {
            this.$1.operation = a;
            return this
        };
        c.setOperationInfo = function(a) {
            this.$1.operation_info = b("GeneratedLoggerUtils").serializeMap(a);
            return this
        };
        c.setSessionlets = function(a) {
            this.$1.sessionlets = b("GeneratedLoggerUtils").serializeVector(a);
            return this
        };
        c.setTime = function(a) {
            this.$1.time = a;
            return this
        };
        c.setWeight = function(a) {
            this.$1.weight = a;
            return this
        };
        return a
    }();
    c = {
        bd_session_id: !0,
        component: !0,
        duration_us: !0,
        exception_message: !0,
        exception_stack_trace: !0,
        exception_type: !0,
        int_value: !0,
        level: !0,
        operation: !0,
        operation_info: !0,
        sessionlets: !0,
        time: !0,
        weight: !0
    };
    e.exports = a
}), null);
__d("BDCollectionTypeEnum", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = Object.freeze({
        STATIC: 0,
        DYNAMIC: 1,
        BIOMETRIC: 2
    });
    e.exports = a
}), null);
__d("BDLoggingConstants", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        ERROR: "error",
        WARNING: "warning",
        INFO: "info"
    };
    b = {
        KEY_NOT_FOUND: "key_not_found",
        APPEND_SIGNAL: "bd_append_signal",
        APPEND_SIGNAL_FAIL: "bd_append_signal_fail",
        HB_COLLECTED: "append_hb",
        HB_COLLECTION_FAILED: "hb_collection_failed",
        BD_EXCEPTION: "bd_exception",
        SIGNAL_NOT_IMPLEMENTED: "signal_not_implemented",
        SIGNAL_VALUE_NULL: "signal_value_null",
        EMPTY_SIGNAL_CONFIG: "empty_signal_config",
        INVALID_BUFFER_SIZE: "invalid_buffer_size",
        INVALID_DURATION: "invalid_duration",
        SIGNAL_FLAGS_MISSING: "signal_flags_missing",
        DYNAMIC_SIGNAL_COLLECTION_STARTED: "dynamic_signal_collection_started",
        INVALID_GUID: "invalid_guid",
        INVALID_LENGTH: "invalid_length",
        GET_LOCAL_STORAGE_ERROR: "get_local_storage_error",
        WEB_STORAGE: "web_storage",
        PARSE_CONFIG_ERROR: "parse_config_error",
        HB_START_FAILURE: "hb_start_failure",
        HB_ALREADY_RUNNING: "hb_already_running",
        TRY_RESTARTING_HB: "try_restarting_hb",
        BANZAI_LOG_ERROR: "banzai_log_error"
    };
    c = "JS";
    e.exports = {
        LEVELS: a,
        OPERATIONS: b,
        COMPONENT_NAME: c
    }
}), null);
__d("BDOperationLogHelper", ["BDLoggingConstants", "BDOperationTypedLogger", "Random"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = {
        logInfo: function(a, c, d, e) {
            g.log(a, b("BDLoggingConstants").LEVELS.INFO, c, d, e)
        },
        logWarning: function(a, c, d, e) {
            g.log(a, b("BDLoggingConstants").LEVELS.WARNING, c, d, e)
        },
        logError: function(a, c, d, e) {
            g.log(a, b("BDLoggingConstants").LEVELS.ERROR, c, d, e)
        },
        log: function(a, c, d, e, f) {
            e === void 0 && (e = {});
            if (b("Random").coinflip(g.getFlipSamplingByOperation(d))) {
                if (e === null) throw new Error("opeartion info null");
                e.source = a;
                new(b("BDOperationTypedLogger"))().setLevel(c).setDurationUs(f).setOperation(d).setComponent(b("BDLoggingConstants").COMPONENT_NAME).setOperationInfo(e).log()
            }
        },
        getFlipSamplingByOperation: function(a) {
            var c = b("BDLoggingConstants").OPERATIONS;
            switch (a) {
                case c.APPEND_SIGNAL:
                case c.HB_COLLECTED:
                case c.SIGNAL_NOT_IMPLEMENTED:
                    return 1e3;
                default:
                    return 1
            }
        }
    };
    e.exports = g
}), null);
__d("BDUtils", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        uuid: function() {
            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(a) {
                var b = Math.random() * 16 | 0;
                a = a == "x" ? b : b & 3 | 8;
                return a.toString(16)
            })
        }
    };
    e.exports = a
}), null);
__d("BdPdcSignalsFalcoEvent", ["FalcoLoggerInternal", "getSamplingPolicyConfig_DO_NOT_USE"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("getSamplingPolicyConfig_DO_NOT_USE")("falco", "bd_pdc_signals");
    c = b("FalcoLoggerInternal").create(a);
    e.exports = c
}), null);
/**
 * License: https://www.facebook.com/legal/license/MDzNl_j9yvg/
 */
__d("javascript-blowfish-1.0.5", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = {};
    var g = {
        exports: a
    };

    function h() {
        var a = function(b, c) {
            this.key = b, (c === "ecb" || c === "cbc") && (this.mode = c), this.sBox0 = a.sBox0.slice(), this.sBox1 = a.sBox1.slice(), this.sBox2 = a.sBox2.slice(), this.sBox3 = a.sBox3.slice(), this.pArray = a.pArray.slice(), this.generateSubkeys(b)
        };
        a.prototype = {
            sBox0: null,
            sBox1: null,
            sBox2: null,
            sBox3: null,
            pArray: null,
            key: null,
            mode: "ecb",
            iv: "abc12345",
            keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
            encrypt: function(a, b) {
                if (this.mode === "ecb") return this.encryptECB(a);
                if (this.mode === "cbc") return this.encryptCBC(a, b);
                throw new Error("\u041d\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u043d\u044b\u0439 \u0440\u0435\u0436\u0438\u043c \u0448\u0438\u0444\u0440\u043e\u0432\u0430\u043d\u0438\u044f.")
            },
            decrypt: function(a, b) {
                if (this.mode === "ecb") return this.decryptECB(a);
                if (this.mode === "cbc") return this.decryptCBC(a, b);
                throw new Error("\u041d\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u043d\u044b\u0439 \u0440\u0435\u0436\u0438\u043c \u0448\u0438\u0444\u0440\u043e\u0432\u0430\u043d\u0438\u044f.")
            },
            encryptECB: function(a) {
                a = this.utf8Decode(a);
                var b = Math.ceil(a.length / 8),
                    c = "";
                for (var d = 0; d < b; d++) {
                    var e = a.substr(d * 8, 8);
                    if (e.length < 8) {
                        var f = 8 - e.length;
                        while (0 < f--) e += "\0"
                    }
                    var g;
                    f = this.split64by32(e);
                    e = f[0];
                    g = f[1];
                    f = this.encipher(e, g);
                    e = f[0];
                    g = f[1];
                    c += this.num2block32(e) + this.num2block32(g)
                }
                return c
            },
            encryptCBC: function(a, b) {
                a = this.utf8Decode(a);
                var c = Math.ceil(a.length / 8),
                    d;
                b = this.split64by32(b);
                d = b[0];
                b = b[1];
                var e = "";
                for (var f = 0; f < c; f++) {
                    var g = a.substr(f * 8, 8);
                    if (g.length < 8) {
                        var h = 8 - g.length;
                        while (0 < h--) g += "\0"
                    }
                    var i;
                    h = this.split64by32(g);
                    g = h[0];
                    i = h[1];
                    g = this.xor(g, d);
                    i = this.xor(i, b);
                    h = this.encipher(g, i);
                    g = h[0];
                    i = h[1];
                    d = g;
                    b = i;
                    e += this.num2block32(g) + this.num2block32(i)
                }
                return e
            },
            decryptECB: function(a) {
                var b = Math.ceil(a.length / 8),
                    c = "";
                for (var d = 0; d < b; d++) {
                    var e = a.substr(d * 8, 8);
                    if (e.length < 8) throw new Error("\u0417\u0430\u0448\u0438\u0444\u0440\u043e\u0432\u0430\u043d\u043d\u0430\u044f \u0441\u0442\u0440\u043e\u043a\u0430 \u043f\u043e\u0432\u0440\u0435\u0436\u0434\u0435\u043d\u0430: \u0434\u043b\u0438\u043d\u043d\u0430 \u0437\u0430\u0448\u0438\u0444\u0440\u043e\u0432\u0430\u043d\u043d\u043e\u0439 \u0441\u0442\u0440\u043e\u043a\u0438 \u0434\u043e\u043b\u0436\u043d\u0430 \u0431\u044b\u0442\u044c \u043a\u0440\u0430\u0442\u043d\u0430 8 \u0431\u0430\u044b\u0439\u0442\u0430\u043c.");
                    var f, g;
                    e = this.split64by32(e);
                    f = e[0];
                    g = e[1];
                    e = this.decipher(f, g);
                    f = e[0];
                    g = e[1];
                    c += this.num2block32(f) + this.num2block32(g)
                }
                c = this.utf8Encode(c);
                return c
            },
            decryptCBC: function(a, b) {
                var c = Math.ceil(a.length / 8),
                    d, e, f;
                b = this.split64by32(b);
                d = b[0];
                b = b[1];
                var g = "";
                for (var h = 0; h < c; h++) {
                    var i = a.substr(h * 8, 8);
                    if (i.length < 8) throw new Error("\u0417\u0430\u0448\u0438\u0444\u0440\u043e\u0432\u0430\u043d\u043d\u0430\u044f \u0441\u0442\u0440\u043e\u043a\u0430 \u043f\u043e\u0432\u0440\u0435\u0436\u0434\u0435\u043d\u0430: \u0434\u043b\u0438\u043d\u043d\u0430 \u0437\u0430\u0448\u0438\u0444\u0440\u043e\u0432\u0430\u043d\u043d\u043e\u0439 \u0441\u0442\u0440\u043e\u043a\u0438 \u0434\u043e\u043b\u0436\u043d\u0430 \u0431\u044b\u0442\u044c \u043a\u0440\u0430\u0442\u043d\u0430 8 \u0431\u0430\u0439\u0442\u0430\u043c.");
                    var j, k;
                    i = this.split64by32(i);
                    j = i[0];
                    k = i[1];
                    e = j;
                    f = k;
                    i = this.decipher(j, k);
                    j = i[0];
                    k = i[1];
                    j = this.xor(j, d);
                    k = this.xor(k, b);
                    d = e;
                    b = f;
                    g += this.num2block32(j) + this.num2block32(k)
                }
                g = this.utf8Encode(g);
                return g
            },
            F: function(a) {
                var b = a >>> 24,
                    c = a << 8 >>> 24,
                    d = a << 16 >>> 24;
                a = a << 24 >>> 24;
                b = this.addMod32(this.sBox0[b], this.sBox1[c]);
                b = this.xor(b, this.sBox2[d]);
                b = this.addMod32(b, this.sBox3[a]);
                return b
            },
            encipher: function(a, b) {
                var c;
                for (var d = 0; d < 16; d++) a = this.xor(a, this.pArray[d]), b = this.xor(this.F(a), b), c = a, a = b, b = c;
                c = a;
                a = b;
                b = c;
                b = this.xor(b, this.pArray[16]);
                a = this.xor(a, this.pArray[17]);
                return [a, b]
            },
            decipher: function(a, b) {
                var c;
                a = this.xor(a, this.pArray[17]);
                b = this.xor(b, this.pArray[16]);
                c = a;
                a = b;
                b = c;
                for (var d = 15; d >= 0; d--) c = a, a = b, b = c, b = this.xor(this.F(a), b), a = this.xor(a, this.pArray[d]);
                return [a, b]
            },
            generateSubkeys: function(a) {
                var b = 0,
                    c = 0,
                    d, e;
                for (d = 0; d < 18; d++) {
                    for (e = 4; e > 0; e--) b = this.fixNegative(b << 8 | a.charCodeAt(c)), c = (c + 1) % a.length;
                    this.pArray[d] = this.xor(this.pArray[d], b);
                    b = 0
                }
                e = [0, 0];
                for (d = 0; d < 18; d += 2) e = this.encipher(e[0], e[1]), this.pArray[d] = e[0], this.pArray[d + 1] = e[1];
                for (d = 0; d < 256; d += 2) e = this.encipher(e[0], e[1]), this.sBox0[d] = e[0], this.sBox0[d + 1] = e[1];
                for (d = 0; d < 256; d += 2) e = this.encipher(e[0], e[1]), this.sBox1[d] = e[0], this.sBox1[d + 1] = e[1];
                for (d = 0; d < 256; d += 2) e = this.encipher(e[0], e[1]), this.sBox2[d] = e[0], this.sBox2[d + 1] = e[1];
                for (d = 0; d < 256; d += 2) e = this.encipher(e[0], e[1]), this.sBox3[d] = e[0], this.sBox3[d + 1] = e[1]
            },
            block32toNum: function(a) {
                return this.fixNegative(a.charCodeAt(0) << 24 | a.charCodeAt(1) << 16 | a.charCodeAt(2) << 8 | a.charCodeAt(3))
            },
            num2block32: function(a) {
                return String.fromCharCode(a >>> 24) + String.fromCharCode(a << 8 >>> 24) + String.fromCharCode(a << 16 >>> 24) + String.fromCharCode(a << 24 >>> 24)
            },
            xor: function(a, b) {
                return this.fixNegative(a ^ b)
            },
            addMod32: function(a, b) {
                return this.fixNegative(a + b | 0)
            },
            fixNegative: function(a) {
                return a >>> 0
            },
            split64by32: function(a) {
                var b = a.substring(0, 4);
                a = a.substring(4, 8);
                return [this.block32toNum(b), this.block32toNum(a)]
            },
            utf8Decode: function(a) {
                var b = "";
                for (var c = 0; c < a.length; c++) {
                    var d = a.charCodeAt(c);
                    d < 128 ? b += String.fromCharCode(d) : d > 127 && d < 2048 ? (b += String.fromCharCode(d >> 6 | 192), b += String.fromCharCode(d & 63 | 128)) : (b += String.fromCharCode(d >> 12 | 224), b += String.fromCharCode(d >> 6 & 63 | 128), b += String.fromCharCode(d & 63 | 128))
                }
                return b
            },
            utf8Encode: function(a) {
                var b = "",
                    c = 0,
                    d = 0,
                    e = 0,
                    f;
                while (c < a.length) d = a.charCodeAt(c), d < 128 ? (b += String.fromCharCode(d), c++) : d > 191 && d < 224 ? (e = a.charCodeAt(c + 1), b += String.fromCharCode((d & 31) << 6 | e & 63), c += 2) : (e = a.charCodeAt(c + 1), f = a.charCodeAt(c + 2), b += String.fromCharCode((d & 15) << 12 | (e & 63) << 6 | f & 63), c += 3);
                return b
            },
            base64Encode: function(a) {
                var b = "",
                    c, d, e, f, g, h, i = 0;
                while (i < a.length) c = a.charCodeAt(i++), d = a.charCodeAt(i++), e = a.charCodeAt(i++), f = c >> 2, c = (c & 3) << 4 | d >> 4, g = (d & 15) << 2 | e >> 6, h = e & 63, isNaN(d) ? g = h = 64 : isNaN(e) && (h = 64), b = b + this.keyStr.charAt(f) + this.keyStr.charAt(c) + this.keyStr.charAt(g) + this.keyStr.charAt(h);
                return b
            },
            base64Decode: function(a) {
                var b = "",
                    c, d, e, f, g, h = 0;
                a = a.replace(/[^A-Za-z0-9\+\/\=]/g, "");
                while (h < a.length) d = this.keyStr.indexOf(a.charAt(h++)), e = this.keyStr.indexOf(a.charAt(h++)), f = this.keyStr.indexOf(a.charAt(h++)), g = this.keyStr.indexOf(a.charAt(h++)), d = d << 2 | e >> 4, e = (e & 15) << 4 | f >> 2, c = (f & 3) << 6 | g, b = b + String.fromCharCode(d), f != 64 && (b = b + String.fromCharCode(e)), g != 64 && (b = b + String.fromCharCode(c));
                return b
            },
            trimZeros: function(a) {
                return a.replace(/\0+$/g, "")
            }
        };
        a.pArray = [608135816, 2242054355, 320440878, 57701188, 2752067618, 698298832, 137296536, 3964562569, 1160258022, 953160567, 3193202383, 887688300, 3232508343, 3380367581, 1065670069, 3041331479, 2450970073, 2306472731];
        a.sBox0 = [3509652390, 2564797868, 805139163, 3491422135, 3101798381, 1780907670, 3128725573, 4046225305, 614570311, 3012652279, 134345442, 2240740374, 1667834072, 1901547113, 2757295779, 4103290238, 227898511, 1921955416, 1904987480, 2182433518, 2069144605, 3260701109, 2620446009, 720527379, 3318853667, 677414384, 3393288472, 3101374703, 2390351024, 1614419982, 1822297739, 2954791486, 3608508353, 3174124327, 2024746970, 1432378464, 3864339955, 2857741204, 1464375394, 1676153920, 1439316330, 715854006, 3033291828, 289532110, 2706671279, 2087905683, 3018724369, 1668267050, 732546397, 1947742710, 3462151702, 2609353502, 2950085171, 1814351708, 2050118529, 680887927, 999245976, 1800124847, 3300911131, 1713906067, 1641548236, 4213287313, 1216130144, 1575780402, 4018429277, 3917837745, 3693486850, 3949271944, 596196993, 3549867205, 258830323, 2213823033, 772490370, 2760122372, 1774776394, 2652871518, 566650946, 4142492826, 1728879713, 2882767088, 1783734482, 3629395816, 2517608232, 2874225571, 1861159788, 326777828, 3124490320, 2130389656, 2716951837, 967770486, 1724537150, 2185432712, 2364442137, 1164943284, 2105845187, 998989502, 3765401048, 2244026483, 1075463327, 1455516326, 1322494562, 910128902, 469688178, 1117454909, 936433444, 3490320968, 3675253459, 1240580251, 122909385, 2157517691, 634681816, 4142456567, 3825094682, 3061402683, 2540495037, 79693498, 3249098678, 1084186820, 1583128258, 426386531, 1761308591, 1047286709, 322548459, 995290223, 1845252383, 2603652396, 3431023940, 2942221577, 3202600964, 3727903485, 1712269319, 422464435, 3234572375, 1170764815, 3523960633, 3117677531, 1434042557, 442511882, 3600875718, 1076654713, 1738483198, 4213154764, 2393238008, 3677496056, 1014306527, 4251020053, 793779912, 2902807211, 842905082, 4246964064, 1395751752, 1040244610, 2656851899, 3396308128, 445077038, 3742853595, 3577915638, 679411651, 2892444358, 2354009459, 1767581616, 3150600392, 3791627101, 3102740896, 284835224, 4246832056, 1258075500, 768725851, 2589189241, 3069724005, 3532540348, 1274779536, 3789419226, 2764799539, 1660621633, 3471099624, 4011903706, 913787905, 3497959166, 737222580, 2514213453, 2928710040, 3937242737, 1804850592, 3499020752, 2949064160, 2386320175, 2390070455, 2415321851, 4061277028, 2290661394, 2416832540, 1336762016, 1754252060, 3520065937, 3014181293, 791618072, 3188594551, 3933548030, 2332172193, 3852520463, 3043980520, 413987798, 3465142937, 3030929376, 4245938359, 2093235073, 3534596313, 375366246, 2157278981, 2479649556, 555357303, 3870105701, 2008414854, 3344188149, 4221384143, 3956125452, 2067696032, 3594591187, 2921233993, 2428461, 544322398, 577241275, 1471733935, 610547355, 4027169054, 1432588573, 1507829418, 2025931657, 3646575487, 545086370, 48609733, 2200306550, 1653985193, 298326376, 1316178497, 3007786442, 2064951626, 458293330, 2589141269, 3591329599, 3164325604, 727753846, 2179363840, 146436021, 1461446943, 4069977195, 705550613, 3059967265, 3887724982, 4281599278, 3313849956, 1404054877, 2845806497, 146425753, 1854211946];
        a.sBox1 = [1266315497, 3048417604, 3681880366, 3289982499, 290971e4, 1235738493, 2632868024, 2414719590, 3970600049, 1771706367, 1449415276, 3266420449, 422970021, 1963543593, 2690192192, 3826793022, 1062508698, 1531092325, 1804592342, 2583117782, 2714934279, 4024971509, 1294809318, 4028980673, 1289560198, 2221992742, 1669523910, 35572830, 157838143, 1052438473, 1016535060, 1802137761, 1753167236, 1386275462, 3080475397, 2857371447, 1040679964, 2145300060, 2390574316, 1461121720, 2956646967, 4031777805, 4028374788, 33600511, 2920084762, 1018524850, 629373528, 3691585981, 3515945977, 2091462646, 2486323059, 586499841, 988145025, 935516892, 3367335476, 2599673255, 2839830854, 265290510, 3972581182, 2759138881, 3795373465, 1005194799, 847297441, 406762289, 1314163512, 1332590856, 1866599683, 4127851711, 750260880, 613907577, 1450815602, 3165620655, 3734664991, 3650291728, 3012275730, 3704569646, 1427272223, 778793252, 1343938022, 2676280711, 2052605720, 1946737175, 3164576444, 3914038668, 3967478842, 3682934266, 1661551462, 3294938066, 4011595847, 840292616, 3712170807, 616741398, 312560963, 711312465, 1351876610, 322626781, 1910503582, 271666773, 2175563734, 1594956187, 70604529, 3617834859, 1007753275, 1495573769, 4069517037, 2549218298, 2663038764, 504708206, 2263041392, 3941167025, 2249088522, 1514023603, 1998579484, 1312622330, 694541497, 2582060303, 2151582166, 1382467621, 776784248, 2618340202, 3323268794, 2497899128, 2784771155, 503983604, 4076293799, 907881277, 423175695, 432175456, 1378068232, 4145222326, 3954048622, 3938656102, 3820766613, 2793130115, 2977904593, 26017576, 3274890735, 3194772133, 1700274565, 1756076034, 4006520079, 3677328699, 720338349, 1533947780, 354530856, 688349552, 3973924725, 1637815568, 332179504, 3949051286, 53804574, 2852348879, 3044236432, 1282449977, 3583942155, 3416972820, 4006381244, 1617046695, 2628476075, 3002303598, 1686838959, 431878346, 2686675385, 1700445008, 1080580658, 1009431731, 832498133, 3223435511, 2605976345, 2271191193, 2516031870, 1648197032, 4164389018, 2548247927, 300782431, 375919233, 238389289, 3353747414, 2531188641, 2019080857, 1475708069, 455242339, 2609103871, 448939670, 3451063019, 1395535956, 2413381860, 1841049896, 1491858159, 885456874, 4264095073, 4001119347, 1565136089, 3898914787, 1108368660, 540939232, 1173283510, 2745871338, 3681308437, 4207628240, 3343053890, 4016749493, 1699691293, 1103962373, 3625875870, 2256883143, 3830138730, 1031889488, 3479347698, 1535977030, 4236805024, 3251091107, 2132092099, 1774941330, 1199868427, 1452454533, 157007616, 2904115357, 342012276, 595725824, 1480756522, 206960106, 497939518, 591360097, 863170706, 2375253569, 3596610801, 1814182875, 2094937945, 3421402208, 1082520231, 3463918190, 2785509508, 435703966, 3908032597, 1641649973, 2842273706, 3305899714, 1510255612, 2148256476, 2655287854, 3276092548, 4258621189, 236887753, 3681803219, 274041037, 1734335097, 3815195456, 3317970021, 1899903192, 1026095262, 4050517792, 356393447, 2410691914, 3873677099, 3682840055];
        a.sBox2 = [3913112168, 2491498743, 4132185628, 2489919796, 1091903735, 1979897079, 3170134830, 3567386728, 3557303409, 857797738, 1136121015, 1342202287, 507115054, 2535736646, 337727348, 3213592640, 1301675037, 2528481711, 1895095763, 1721773893, 3216771564, 62756741, 2142006736, 835421444, 2531993523, 1442658625, 3659876326, 2882144922, 676362277, 1392781812, 170690266, 3921047035, 1759253602, 3611846912, 1745797284, 664899054, 1329594018, 3901205900, 3045908486, 2062866102, 2865634940, 3543621612, 3464012697, 1080764994, 553557557, 3656615353, 3996768171, 991055499, 499776247, 1265440854, 648242737, 3940784050, 980351604, 3713745714, 1749149687, 3396870395, 4211799374, 3640570775, 1161844396, 3125318951, 1431517754, 545492359, 4268468663, 3499529547, 1437099964, 2702547544, 3433638243, 2581715763, 2787789398, 1060185593, 1593081372, 2418618748, 4260947970, 69676912, 2159744348, 86519011, 2512459080, 3838209314, 1220612927, 3339683548, 133810670, 1090789135, 1078426020, 1569222167, 845107691, 3583754449, 4072456591, 1091646820, 628848692, 1613405280, 3757631651, 526609435, 236106946, 48312990, 2942717905, 3402727701, 1797494240, 859738849, 992217954, 4005476642, 2243076622, 3870952857, 3732016268, 765654824, 3490871365, 2511836413, 1685915746, 3888969200, 1414112111, 2273134842, 3281911079, 4080962846, 172450625, 2569994100, 980381355, 4109958455, 2819808352, 2716589560, 2568741196, 3681446669, 3329971472, 1835478071, 660984891, 3704678404, 4045999559, 3422617507, 3040415634, 1762651403, 1719377915, 3470491036, 2693910283, 3642056355, 3138596744, 1364962596, 2073328063, 1983633131, 926494387, 3423689081, 2150032023, 4096667949, 1749200295, 3328846651, 309677260, 2016342300, 1779581495, 3079819751, 111262694, 1274766160, 443224088, 298511866, 1025883608, 3806446537, 1145181785, 168956806, 3641502830, 3584813610, 1689216846, 3666258015, 3200248200, 1692713982, 2646376535, 4042768518, 1618508792, 1610833997, 3523052358, 4130873264, 2001055236, 3610705100, 2202168115, 4028541809, 2961195399, 1006657119, 2006996926, 3186142756, 1430667929, 3210227297, 1314452623, 4074634658, 4101304120, 2273951170, 1399257539, 3367210612, 3027628629, 1190975929, 2062231137, 2333990788, 2221543033, 2438960610, 1181637006, 548689776, 2362791313, 3372408396, 3104550113, 3145860560, 296247880, 1970579870, 3078560182, 3769228297, 1714227617, 3291629107, 3898220290, 166772364, 1251581989, 493813264, 448347421, 195405023, 2709975567, 677966185, 3703036547, 1463355134, 2715995803, 1338867538, 1343315457, 2802222074, 2684532164, 233230375, 2599980071, 2000651841, 3277868038, 1638401717, 4028070440, 3237316320, 6314154, 819756386, 300326615, 590932579, 1405279636, 3267499572, 3150704214, 2428286686, 3959192993, 3461946742, 1862657033, 1266418056, 963775037, 2089974820, 2263052895, 1917689273, 448879540, 3550394620, 3981727096, 150775221, 3627908307, 1303187396, 508620638, 2975983352, 2726630617, 1817252668, 1876281319, 1457606340, 908771278, 3720792119, 3617206836, 2455994898, 1729034894, 1080033504];
        a.sBox3 = [976866871, 3556439503, 2881648439, 1522871579, 1555064734, 1336096578, 3548522304, 2579274686, 3574697629, 3205460757, 3593280638, 3338716283, 3079412587, 564236357, 2993598910, 1781952180, 1464380207, 3163844217, 3332601554, 1699332808, 1393555694, 1183702653, 3581086237, 1288719814, 691649499, 2847557200, 2895455976, 3193889540, 2717570544, 1781354906, 1676643554, 2592534050, 3230253752, 1126444790, 2770207658, 2633158820, 2210423226, 2615765581, 2414155088, 3127139286, 673620729, 2805611233, 1269405062, 4015350505, 3341807571, 4149409754, 1057255273, 2012875353, 2162469141, 2276492801, 2601117357, 993977747, 3918593370, 2654263191, 753973209, 36408145, 2530585658, 25011837, 3520020182, 2088578344, 530523599, 2918365339, 1524020338, 1518925132, 3760827505, 3759777254, 1202760957, 3985898139, 3906192525, 674977740, 4174734889, 2031300136, 2019492241, 3983892565, 4153806404, 3822280332, 352677332, 2297720250, 60907813, 90501309, 3286998549, 1016092578, 2535922412, 2839152426, 457141659, 509813237, 4120667899, 652014361, 1966332200, 2975202805, 55981186, 2327461051, 676427537, 3255491064, 2882294119, 3433927263, 1307055953, 942726286, 933058658, 2468411793, 3933900994, 4215176142, 1361170020, 2001714738, 2830558078, 3274259782, 1222529897, 1679025792, 2729314320, 3714953764, 1770335741, 151462246, 3013232138, 1682292957, 1483529935, 471910574, 1539241949, 458788160, 3436315007, 1807016891, 3718408830, 978976581, 1043663428, 3165965781, 1927990952, 4200891579, 2372276910, 3208408903, 3533431907, 1412390302, 2931980059, 4132332400, 1947078029, 3881505623, 4168226417, 2941484381, 1077988104, 1320477388, 886195818, 18198404, 3786409e3, 2509781533, 112762804, 3463356488, 1866414978, 891333506, 18488651, 661792760, 1628790961, 3885187036, 3141171499, 876946877, 2693282273, 1372485963, 791857591, 2686433993, 3759982718, 3167212022, 3472953795, 2716379847, 445679433, 3561995674, 3504004811, 3574258232, 54117162, 3331405415, 2381918588, 3769707343, 4154350007, 1140177722, 4074052095, 668550556, 3214352940, 367459370, 261225585, 2610173221, 4209349473, 3468074219, 3265815641, 314222801, 3066103646, 3808782860, 282218597, 3406013506, 3773591054, 379116347, 1285071038, 846784868, 2669647154, 3771962079, 3550491691, 2305946142, 453669953, 1268987020, 3317592352, 3279303384, 3744833421, 2610507566, 3859509063, 266596637, 3847019092, 517658769, 3462560207, 3443424879, 370717030, 4247526661, 2224018117, 4143653529, 4112773975, 2788324899, 2477274417, 1456262402, 2901442914, 1517677493, 1846949527, 2295493580, 3734397586, 2176403920, 1280348187, 1908823572, 3871786941, 846861322, 1172426758, 3287448474, 3383383037, 1655181056, 3139813346, 901632758, 1897031941, 2986607138, 3066810236, 3447102507, 1393639104, 373351379, 950779232, 625454576, 3124240540, 4148612726, 2007998917, 544563296, 2244738638, 2330496472, 2058025392, 1291430526, 424198748, 50039436, 29584100, 3605783033, 2429876329, 2791104160, 1057563949, 3255363231, 3075367218, 3463963227, 1469046755, 985887462];
        g.exports = a
    }
    var i = !1,
        j = function() {
            i || (i = !0, h());
            return g.exports
        };
    b = function(a) {
        switch (a) {
            case void 0:
                return j()
        }
    };
    e.exports = b
}), null);
__d("javascript-blowfish", ["javascript-blowfish-1.0.5"], (function(a, b, c, d, e, f) {
    e.exports = b("javascript-blowfish-1.0.5")()
}), null);
__d("BDClientSignalCollectionTrigger", ["regeneratorRuntime", "Promise", "BDClientConfig", "BDCollectionTypeEnum", "BDLoggingConstants", "BDOperationLogHelper", "BdPdcSignalsFalcoEvent", "BDServerConfig", "BDSignalBuffer", "BDUtils", "SignalCollectionManager", "WebStorage", "javascript-blowfish"], (function(a, b, c, d, e, f) {
    "use strict";
    var g, h = b("BDLoggingConstants").OPERATIONS,
        i = "BDClientSignalCollectionTrigger",
        j = "signal_flush_timestamp",
        k = !1,
        l = !1,
        m = !1,
        n = 0,
        o = 4,
        p = 1,
        q = 30,
        r = 5,
        s, t, u = b("BDClientConfig").get(),
        v = Object.freeze({
            NONE: 0,
            VITAL: 1,
            CRITICAL: 2
        }),
        w = {
            startSignalCollection: function(a) {
                return b("regeneratorRuntime").async(function(c) {
                    while (1) switch (c.prev = c.next) {
                        case 0:
                            if (k) {
                                c.next = 14;
                                break
                            }
                            k = !0;
                            b("BDServerConfig").parseConfig(a);
                            if (u.isParsingDone()) {
                                c.next = 7;
                                break
                            }
                            b("BDOperationLogHelper").logError(i, h.PARSE_CONFIG_ERROR, {
                                config: JSON.stringify(a)
                            });
                            k = !1;
                            return c.abrupt("return");
                        case 7:
                            a != null && (o = a.hbcbc && a.hbcbc > 0 ? a.hbcbc : o, p = a.hbvbc && a.hbvbc > 0 ? a.hbvbc : p, q = a.hbbi && a.hbbi > 0 ? a.hbbi : q);
                            w.startHeartbeatDelayed();
                            t = new(b("Promise"))(function(a, c) {
                                try {
                                    u.getClientReputationTier() !== 0 && (u.getDynamicSignals().length > 0 && (w.collectDynamicSignals(), b("BDOperationLogHelper").logInfo(i, h.DYNAMIC_SIGNAL_COLLECTION_STARTED, {
                                        ts: Date.now().toString()
                                    }))), a()
                                } catch (a) {
                                    c(a)
                                }
                            });
                            if (!(u.getClientReputationTier() !== 0)) {
                                c.next = 14;
                                break
                            }
                            c.next = 13;
                            return b("regeneratorRuntime").awrap(t);
                        case 13:
                            w.startSignalPosting();
                        case 14:
                            k && !l && !m && r > 0 && (r -= 1, b("BDOperationLogHelper").logWarning(i, h.TRY_RESTARTING_HB), w.startHeartbeatDelayed());
                        case 15:
                        case "end":
                            return c.stop()
                    }
                }, null, this)
            },
            retrieveSignals: function() {
                return b("regeneratorRuntime").async(function(a) {
                    while (1) switch (a.prev = a.next) {
                        case 0:
                            a.next = 2;
                            return b("regeneratorRuntime").awrap(t);
                        case 2:
                            w.postSignals([b("BDCollectionTypeEnum").DYNAMIC, b("BDCollectionTypeEnum").BIOMETRIC, b("BDCollectionTypeEnum").STATIC]);
                        case 3:
                        case "end":
                            return a.stop()
                    }
                }, null, this)
            },
            postSignals: function(a) {
                w.collectStaticSignals(), w.setTimestampInStorage(Date.now(), j), w._postSignalsHelper(b("BDSignalBuffer").getSignalsAsJSONString(a), v.NONE)
            },
            _postSignalsHelper: function(a, c) {
                var d = b("BDUtils").uuid(),
                    e = u.getConfigGenerationTimeStamp(),
                    f = u.getClientReputationTier(),
                    g = w.encryptDataUsingAsid(d, a);
                a = function() {
                    return {
                        asid: d,
                        ct: e,
                        rt: f,
                        sjd: g
                    }
                };
                var j = !1;
                try {
                    c === v.CRITICAL ? b("BdPdcSignalsFalcoEvent").logCritical(a) : c === v.VITAL ? b("BdPdcSignalsFalcoEvent").logImmediately(a) : b("BdPdcSignalsFalcoEvent").log(a), j = !0
                } catch (a) {
                    b("BDOperationLogHelper").logError(i, h.BANZAI_LOG_ERROR, a), j = !1
                } finally {
                    return j
                }
            },
            getInitialVector: function(a) {
                if (a.length !== 16) {
                    b("BDOperationLogHelper").logError(i, h.INVALID_LENGTH);
                    return ""
                }
                var c = "";
                for (var d = 0; d < 8; d++) c += String.fromCharCode(a.charCodeAt(d) ^ a.charCodeAt(8 + d));
                return c
            },
            encryptDataUsingAsid: function(a, c) {
                if (a.length !== 36) {
                    b("BDOperationLogHelper").logError(i, h.INVALID_GUID);
                    return c
                }
                a = a.slice(19, 23) + a.slice(24, 36);
                var d = w.getInitialVector(a);
                a = new(b("javascript-blowfish"))(a, "cbc");
                return a.base64Encode(a.encrypt(c, d))
            },
            startSignalPosting: function() {
                var a = w.getTimestampInStorage(j);
                a = Date.now() - a;
                a >= u.getFlushDurationByReputationTierMs() ? w.postSignalsIntermittently() : window.setTimeout(w.postSignalsIntermittently, u.getFlushDurationByReputationTierMs() - a)
            },
            postSignalsIntermittently: function() {
                var a;
                w.postSignals([(a = b("BDCollectionTypeEnum")).STATIC]);
                window.setInterval(w.postSignals([a.STATIC, a.DYNAMIC, a.BIOMETRIC]), u.getFlushDurationByReputationTierMs())
            },
            setTimestampInStorage: function(a, c) {
                var d = (g || (g = b("WebStorage"))).getLocalStorage();
                if (!d) {
                    b("BDOperationLogHelper").logError(i, h.GET_LOCAL_STORAGE_ERROR);
                    return
                }
                d = g.setItemGuarded(d, c, a.toString());
                d != null && b("BDOperationLogHelper").logError(i, h.WEB_STORAGE, {
                    error: d.message
                })
            },
            getTimestampInStorage: function(a) {
                var c = (g || (g = b("WebStorage"))).getLocalStorage();
                if (!c) {
                    b("BDOperationLogHelper").logError(i, h.GET_LOCAL_STORAGE_ERROR);
                    return 0
                }
                c = c.getItem(a);
                if (c == null) return 0;
                a = Number.parseInt(c, 10);
                return Number.isFinite(a) ? a : 0
            },
            resetHeartbeatStartedForTest: function() {
                l = !1, m = !1
            },
            startHeartbeatDelayed: function() {
                if (l || m) return;
                var a = w.getTimestampInStorage(w.HEARTBEAT_TIMESTAMP_STORAGE_KEY);
                a = Date.now() - a;
                try {
                    a >= u.getHeartbeatIntervalMs() ? w.startHeartbeat() : (window.setTimeout(function() {
                        return w.startHeartbeat()
                    }, u.getHeartbeatIntervalMs() - a), m = !0)
                } catch (c) {
                    b("BDOperationLogHelper").logError(i, h.HB_START_FAILURE, {
                        lastBeatSince: a.toString(),
                        hbi: u.getHeartbeatIntervalMs().toString(),
                        e: c
                    })
                }
            },
            HEARTBEAT_TIMESTAMP_STORAGE_KEY: "hb_timestamp",
            startHeartbeat: function() {
                !l && u.getHeartbeatIntervalMs() > 0 && (w.collectHeartbeatTimes(o, p), n !== 0 && (window.clearInterval(n), b("BDOperationLogHelper").logWarning(i, h.HB_ALREADY_RUNNING)), n = window.setInterval(function() {
                    return w.collectHeartbeatTimes(o, p)
                }, u.getHeartbeatIntervalMs()), l = !0)
            },
            collectHeartbeatTimes: function(a, b) {
                if (a <= 0 && b <= 0) return;
                a > 0 && w.collectHeartbeat(v.CRITICAL);
                b > 0 && w.collectHeartbeat(v.VITAL);
                (a > 1 || b > 1) && window.setTimeout(function() {
                    return w.collectHeartbeatTimes(a - 1, b - 1)
                }, q * 1e3)
            },
            collectHeartbeat: function(a) {
                var c;
                c = u == null ? void 0 : (c = u.getHeartbeatSignal()) == null ? void 0 : (c = c.getSignalCollector(u.getClientReputationTier())) == null ? void 0 : c.executeSignalCollection();
                if (c == null) {
                    b("BDOperationLogHelper").logError(i, h.HB_COLLECTION_FAILED, {
                        urgency: a.toString()
                    });
                    return
                } else b("BDOperationLogHelper").logInfo(i, h.HB_COLLECTED, {
                    urgency: a.toString()
                });
                w.postHeartbeat(a, c) && w.setTimestampInStorage(Date.now(), w.HEARTBEAT_TIMESTAMP_STORAGE_KEY)
            },
            postHeartbeat: function(a, b) {
                var c = {};
                c[38e3] = [b == null ? void 0 : b.valueOrError];
                b = JSON.stringify(c);
                return w._postSignalsHelper(b, a)
            },
            collectStaticSignals: function() {
                w.collectSignalsOneTime(u.getStaticSignals())
            },
            collectDynamicSignals: function() {
                w.stopDynamicSignalCollection(), s = window.setInterval(function() {
                    w.collectSignalsOneTime(u.getDynamicSignals())
                }, u.getPeriodicCollectionIntervalMs())
            },
            stopDynamicSignalCollection: function() {
                s != null && (window.clearInterval(s), s = null)
            },
            collectSignalsOneTime: function(a) {
                var c = u.getClientReputationTier();
                c !== 0 && b("SignalCollectionManager").get().collectSignals(a, c)
            }
        };
    e.exports = w
}), null);
__d("BDSignalBufferData", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = {};
    e.exports = a
}), null);
__d("BDSignalWrapper", ["BDSignalBufferData", "SignalCollectorMap"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        function a(a, b) {
            this.signalFlags = a, this.signalType = b
        }
        var c = a.prototype;
        c.getSignalCollector = function(a) {
            if (this.canExecuteForReputationTier(a)) {
                return (a = b("SignalCollectorMap")[this.signalType]) == null ? void 0 : a.get(this.signalFlags)
            }
            return null
        };
        c.canExecuteForReputationTier = function(a) {
            return this.signalType === 38e3 ? !0 : this.signalFlags.includes(a)
        };
        c.getBufferConfig = function() {
            return b("BDSignalBufferData")[this.signalType]
        };
        return a
    }();
    e.exports = a
}), null);
__d("SignalErrorValueTypeDef", [], (function(a, b, c, d, e, f) {
    "use strict";
    var g = "ec",
        h = "en",
        i = "es",
        j = 500;
    a = function() {
        function a(a, b, c) {
            this.$1 = a, this.$2 = b, c != null && (this.$3 = c.substr(0, j))
        }
        var b = a.prototype;
        b.getErrorCode = function() {
            return this.$1
        };
        b.getErrorName = function() {
            return this.$2
        };
        b.getErrorDetails = function() {
            return this.$3
        };
        b.isEqual = function(a) {
            return this.$1 === a.getErrorCode() && this.$3 === a.getErrorDetails() && this.$2 === a.getErrorName()
        };
        b.toJSON = function() {
            var a = {};
            a[g] = this.$1;
            switch (this.$1) {
                case 0:
                    a[h] = this.$2;
                    a[i] = this.$3;
                    break
            }
            return a
        };
        return a
    }();
    e.exports = {
        SignalErrorValueTypeDef: a
    }
}), null);
__d("SignalValueTypeDef", ["BDLoggingConstants", "BDOperationLogHelper", "SignalErrorValueTypeDef"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("BDLoggingConstants").OPERATIONS,
        h = "SignalValueTypeDef",
        i = "t",
        j = "ctx",
        k = "v",
        l = "e",
        m = {
            NUMBER: "NUMBER",
            STRING: "STRING",
            BOOLEAN: "BOOLEAN",
            CUSTOM_OBJECT: "CUSTOM_OBJECT",
            INT_ARRAY: "INT_ARRAY",
            TOUCH: "TOUCH",
            MAP: "MAP",
            LIST: "LIST",
            SENSOR: "SENSOR",
            ERROR: "ERROR"
        };
    a = function() {
        function a(a, b, c, d, e) {
            this.$1 = a, this.$2 = b, this.$3 = c, this.$4 = d, this.$5 = e != null ? e : 0
        }
        var c = a.prototype;
        c.getTimeStampMS = function() {
            return this.$1
        };
        c.getSignalContext = function() {
            return this.$2
        };
        c.getSignalValue = function() {
            return this.$3
        };
        c.getSignalValueType = function() {
            return this.$4
        };
        c.isEqual = function(a, c) {
            if (a == null) {
                b("BDOperationLogHelper").logWarning(h, g.SIGNAL_VALUE_NULL);
                return !1
            }
            if (this.getSignalValueType() !== a.getSignalValueType()) return !1;
            if (this.getSignalValueType() === m.ERROR && a.getSignalValueType() === m.ERROR) return this.equalValue(a);
            var d = !1;
            c.has(128) && (d = this.equalValue(a));
            c.has(256) && (d = d && this.getSignalContext() != null && a.getSignalContext() != null && this.getSignalContext().getSignalValueContextName() === a.getSignalContext().getSignalValueContextName());
            c.has(512) && (d = d && Math.abs(this.getTimeStampMS() - a.getTimeStampMS()) <= this.$5);
            return d
        };
        c.equalValue = function(a) {
            if (this.isPrimitiveType()) return this.getSignalValue() === a.getSignalValue();
            throw new Error("Must implement in the subclasses")
        };
        c.toJSON = function(a) {
            var c = {};
            a && (c[i] = this.$1 / 1e3, this.$2 != null && (c[j] = this.$2));
            this.$3 == null ? c[l] = new(b("SignalErrorValueTypeDef").SignalErrorValueTypeDef)(2) : this.addValueOrErrorToJSON(c);
            return c
        };
        c.addValueOrErrorToJSON = function(a) {
            if (this.isPrimitiveType()) a[k] = this.$3;
            else throw new Error("Must implement in the subclasses")
        };
        c.isPrimitiveType = function() {
            switch (typeof this.$3) {
                case "number":
                case "boolean":
                case "string":
                    return !0;
                default:
                    return !1
            }
        };
        return a
    }();
    e.exports = {
        SignalValueTypeDef: a,
        VALUE_TYPES: m,
        BD_VALUE: k,
        BD_ERROR: l
    }
}), null);
__d("SignalCollectionManager", ["BDClientConfig", "BDLoggingConstants", "BDOperationLogHelper", "BDSignalBuffer", "SignalValueTypeDef"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("BDLoggingConstants").OPERATIONS,
        h = "SignalCollectionManager",
        i = function() {
            function a() {}
            var c = a.prototype;
            c.collectSignals = function(a, b) {
                var c = this;
                a.forEach(function(a) {
                    a.signalFlags.includes(4) ? c.$1(a, b) : c.$2(a, b)
                })
            };
            c.isEqualToLastCollectedSignal = function(a, c) {
                var d = b("BDSignalBuffer").getLastSignalFormatBySignalId(c.signalType);
                return d.valueOrError == void 0 ? !1 : a.isEqual(d.valueOrError, new Set(c.signalFlags))
            };
            c.getCircularBufferSize = function(a) {
                var c = b("BDClientConfig").get(),
                    d = c.getBufferSizeBySignalId(a.signalType);
                if (d != null && c.getBufferSizeBySignalId(a.signalType) > 0) return d;
                if (!a.signalFlags.includes(2)) return c.getStaticSignalBufferSize();
                else if (a.signalFlags.includes(4)) return c.getBiometricSignalBufferSize();
                else return c.getDynamicSignalBufferSize()
            };
            c.$2 = function(a, c) {
                c = a.getSignalCollector(c);
                if (c != null) {
                    a.getBufferConfig() == null && b("BDSignalBuffer").initialize(a.signalType, this.getCircularBufferSize(a));
                    try {
                        c = c.executeSignalCollection();
                        c.valueOrError && !this.isEqualToLastCollectedSignal(c.valueOrError, a) && b("BDSignalBuffer").appendSignal(a.signalType, c)
                    } catch (a) {
                        b("BDOperationLogHelper").logError(h, g.BD_EXCEPTION, {
                            error: a
                        })
                    }
                } else b("BDOperationLogHelper").logWarning(h, g.SIGNAL_NOT_IMPLEMENTED, {
                    id: a.signalType.toString()
                })
            };
            c.$1 = function(a, c) {
                b("BDOperationLogHelper").logWarning(h, g.SIGNAL_NOT_IMPLEMENTED, {
                    id: a.signalType.toString()
                })
            };
            return a
        }(),
        j = null;
    a = {
        get: function() {
            j == null && (j = new i());
            return j
        }
    };
    e.exports = a
}), null);
__d("SignalValueContext", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        function a(a) {
            this.cn = a
        }
        var b = a.prototype;
        b.getSignalValueContextName = function() {
            return this.cn
        };
        return a
    }();
    e.exports = a
}), null);
__d("BDSignalCollectorBase", ["BDSignalBufferData", "SignalValueContext"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        function a(a) {
            this.signalType = a
        }
        var c = a.prototype;
        c.executeSignalCollection = function() {
            throw new Error("Child class responsibility to implement executeSignalCollection")
        };
        a.getSanitizedURI = function() {
            var a = window.location.href,
                b = a.indexOf("?");
            return b < 0 ? a : a.substring(0, b)
        };
        c.getContext = function() {
            return new(b("SignalValueContext"))(a.getSanitizedURI())
        };
        c.throwIfNotInitialized = function() {
            if (!(this.signalType in b("BDSignalBufferData"))) throw new Error("Signal is not intialized")
        };
        return a
    }();
    e.exports = a
}), null);
__d("NumberSignalValueType", ["SignalValueTypeDef"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);

        function c(c, d, e) {
            return a.call(this, c, d, e, b("SignalValueTypeDef").VALUE_TYPES.NUMBER) || this
        }
        return c
    }(b("SignalValueTypeDef").SignalValueTypeDef);
    e.exports = a
}), null);
__d("BDMimeTypeCountSignalCollector", ["BDSignalCollectorBase", "NumberSignalValueType"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = function(c) {
            babelHelpers.inheritsLoose(a, c);

            function a() {
                return c.call(this, i.signalType) || this
            }
            var d = a.prototype;
            d.executeSignalCollection = function() {
                this.throwIfNotInitialized();
                var a = navigator.mimeTypes ? navigator.mimeTypes.length : -1;
                a = new(b("NumberSignalValueType"))(Date.now(), this.getContext(), a);
                return {
                    valueOrError: a
                }
            };
            return a
        }(b("BDSignalCollectorBase")),
        h = null,
        i = {
            signalType: 30002,
            get: function() {
                h == null && (h = new g());
                return h
            }
        };
    e.exports = i
}), null);
__d("StringSignalValueType", ["SignalValueTypeDef"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);

        function c(c, d, e) {
            return a.call(this, c, d, e, b("SignalValueTypeDef").VALUE_TYPES.STRING) || this
        }
        return c
    }(b("SignalValueTypeDef").SignalValueTypeDef);
    e.exports = a
}), null);
__d("BDNavigatorVendorSignalCollector", ["BDSignalCollectorBase", "StringSignalValueType"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = function(c) {
            babelHelpers.inheritsLoose(a, c);

            function a() {
                return c.call(this, i.signalType) || this
            }
            var d = a.prototype;
            d.executeSignalCollection = function() {
                this.throwIfNotInitialized();
                var a = navigator.vendor;
                a = new(b("StringSignalValueType"))(Date.now(), this.getContext(), a);
                return {
                    valueOrError: a
                }
            };
            return a
        }(b("BDSignalCollectorBase")),
        h = null,
        i = {
            signalType: 30012,
            get: function() {
                h == null && (h = new g());
                return h
            }
        };
    e.exports = i
}), null);
__d("BDPluginCountSignalCollector", ["BDSignalCollectorBase", "NumberSignalValueType"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = function(c) {
            babelHelpers.inheritsLoose(a, c);

            function a() {
                return c.call(this, i.signalType) || this
            }
            var d = a.prototype;
            d.executeSignalCollection = function() {
                this.throwIfNotInitialized();
                var a = navigator.plugins ? navigator.plugins.length : -1;
                a = new(b("NumberSignalValueType"))(Date.now(), this.getContext(), a);
                return {
                    valueOrError: a
                }
            };
            return a
        }(b("BDSignalCollectorBase")),
        h = null,
        i = {
            signalType: 30001,
            get: function() {
                h == null && (h = new g());
                return h
            }
        };
    e.exports = i
}), null);
__d("BooleanSignalValueType", ["SignalValueTypeDef"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);

        function c(c, d, e) {
            return a.call(this, c, d, e, b("SignalValueTypeDef").VALUE_TYPES.BOOLEAN) || this
        }
        return c
    }(b("SignalValueTypeDef").SignalValueTypeDef);
    e.exports = a
}), null);
__d("BDWebdriverSignalCollector", ["BDSignalCollectorBase", "BooleanSignalValueType"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = function(c) {
            babelHelpers.inheritsLoose(a, c);

            function a() {
                return c.call(this, i.signalType) || this
            }
            var d = a.prototype;
            d.executeSignalCollection = function() {
                this.throwIfNotInitialized();
                var a = !!navigator.webdriver;
                a = new(b("BooleanSignalValueType"))(Date.now(), this.getContext(), a);
                return {
                    valueOrError: a
                }
            };
            return a
        }(b("BDSignalCollectorBase")),
        h = null,
        i = {
            signalType: 3e4,
            get: function() {
                h == null && (h = new g());
                return h
            }
        };
    e.exports = i
}), null);
__d("CustomObjectSignalValueType", ["SignalValueTypeDef"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);

        function c(c, d, e) {
            return a.call(this, c, d, e, b("SignalValueTypeDef").VALUE_TYPES.CUSTOM_OBJECT) || this
        }
        var d = c.prototype;
        d.equalValue = function(a) {
            return this.getSignalValue().isEqual(a.getSignalValue())
        };
        d.addValueOrErrorToJSON = function(a) {
            a[b("SignalValueTypeDef").BD_VALUE] = this.getSignalValue().toJSON()
        };
        return c
    }(b("SignalValueTypeDef").SignalValueTypeDef);
    e.exports = a
}), null);
__d("DimensionObject", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        function a(a, b) {
            this.width = null, this.height = null, this.width = a, this.height = b
        }
        var b = a.prototype;
        b.toJSON = function() {
            return {
                w: this.width,
                h: this.height
            }
        };
        b.isEqual = function(b) {
            if (b instanceof a) return this.width === b.width && this.height === b.height;
            else return !1
        };
        return a
    }();
    e.exports = a
}), null);
__d("BDWindowOuterDimensionSignalCollector", ["BDSignalCollectorBase", "CustomObjectSignalValueType", "DimensionObject"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = function(c) {
            babelHelpers.inheritsLoose(a, c);

            function a() {
                return c.call(this, i.signalType) || this
            }
            var d = a.prototype;
            d.executeSignalCollection = function() {
                this.throwIfNotInitialized();
                var a = window.outerHeight,
                    c = window.outerWidth;
                c = new(b("CustomObjectSignalValueType"))(Date.now(), this.getContext(), new(b("DimensionObject"))(c, a));
                return {
                    valueOrError: c
                }
            };
            return a
        }(b("BDSignalCollectorBase")),
        h = null,
        i = {
            signalType: 30005,
            get: function() {
                h == null && (h = new g());
                return h
            }
        };
    e.exports = i
}), null);
__d("SignalCollectorMap", ["BDWebdriverSignalCollector", "BDPluginCountSignalCollector", "BDMimeTypeCountSignalCollector", "BDLanguagesSignalCollector", "BDWindowOuterDimensionSignalCollector", "BDNavigatorVendorSignalCollector", "BDHeartbeatSignalCollector"], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        3e4: b("BDWebdriverSignalCollector"),
        30001: b("BDPluginCountSignalCollector"),
        30002: b("BDMimeTypeCountSignalCollector"),
        30003: b("BDLanguagesSignalCollector"),
        30005: b("BDWindowOuterDimensionSignalCollector"),
        30012: b("BDNavigatorVendorSignalCollector"),
        38e3: b("BDHeartbeatSignalCollector")
    };
    e.exports = a
}), null);
__d("BDHeartbeatSignalCollector", ["BDSignalCollectorBase", "CustomObjectSignalValueType", "HeartbeatObject"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = function(c) {
            babelHelpers.inheritsLoose(a, c);

            function a() {
                return c.call(this, i.signalType) || this
            }
            var d = a.prototype;
            d.executeSignalCollection = function() {
                var a = new(b("CustomObjectSignalValueType"))(Date.now(), this.getContext(), new(b("HeartbeatObject"))());
                return {
                    valueOrError: a
                }
            };
            return a
        }(b("BDSignalCollectorBase")),
        h = null,
        i = {
            signalType: 38e3,
            get: function() {
                h == null && (h = new g());
                return h
            }
        };
    e.exports = i
}), null);
__d("BDSignalBuffer", ["BDClientConfig", "BDCollectionTypeEnum", "BDLoggingConstants", "BDOperationLogHelper", "BDSignalBufferData"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("BDLoggingConstants").OPERATIONS,
        h = "BDSignalBuffer";
    a = {
        initialize: function(a, c) {
            if (a in b("BDSignalBufferData")) return;
            var d = 1;
            c !== void 0 && (d = c);
            b("BDSignalBufferData")[a] = {
                values: [],
                max_buffer_size: d
            }
        },
        clearBuffer: function(a) {
            if (a in b("BDSignalBufferData")) b("BDSignalBufferData")[a].values = [];
            else throw new Error("Tried to clear signal buffer that was not intialized:")
        },
        appendSignal: function(a, c) {
            if (a in b("BDSignalBufferData")) {
                var d = b("BDSignalBufferData")[a],
                    e = d.values;
                d = d.max_buffer_size;
                e.length >= d && e.shift();
                e.push(c);
                b("BDOperationLogHelper").logInfo(h, g.APPEND_SIGNAL, {
                    id: a.toString()
                })
            } else {
                b("BDOperationLogHelper").logError(h, g.APPEND_SIGNAL_FAIL, {
                    id: a.toString()
                });
                throw new Error("Tried to append signal that was not intialized:")
            }
        },
        getLastSignalFormatBySignalId: function(a) {
            var c;
            a = b("BDSignalBufferData")[a];
            c = a == null ? void 0 : (c = a.values) == null ? void 0 : c.length;
            return c != null && c > 0 ? a.values[c - 1] : {
                valueOrError: void 0
            }
        },
        retrieveSignal: function(a) {
            return b("BDSignalBufferData")[a].values
        },
        retrieveSignals: function(a) {
            var c = {};
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
                f in b("BDSignalBufferData") && (c[f] = this.retrieveSignal(f).map(function(a) {
                    return a.valueOrError
                }))
            }
            return c
        },
        getSignalsAsJSONString: function(a) {
            a = this._getSignalIdsByCollectionType(a);
            return JSON.stringify(this.retrieveSignals(a))
        },
        _getSignalIdsByCollectionType: function(a) {
            var c = b("BDClientConfig").get(),
                d = [];
            a.forEach(function(a) {
                switch (a) {
                    case b("BDCollectionTypeEnum").STATIC:
                        d = [].concat(d, c.getStaticSignals());
                        break;
                    case b("BDCollectionTypeEnum").DYNAMIC:
                        d = [].concat(d, c.getDynamicSignals());
                        break;
                    case b("BDCollectionTypeEnum").BIOMETRIC:
                        d = [].concat(d, c.getBiometricSignals());
                        break
                }
            });
            return d.map(function(a) {
                return a.signalType
            })
        }
    };
    e.exports = a
}), null);
__d("BDClientConfig", ["BDLoggingConstants", "BDOperationLogHelper", "BDSignalWrapper"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("BDLoggingConstants").OPERATIONS,
        h = "BDClientConfig",
        i = function() {
            function a() {
                this.reputationTier = 0, this.staticSignalBufferSize = 1, this.dynamicSignalBufferSize = 1, this.biometricSignalBufferSize = 1, this.staticSignals = [], this.dynamicSignals = [], this.biometricSignals = [], this.heartbeatSignal = new(b("BDSignalWrapper"))([], 38e3), this.bufferSizeBySignalIdMap = {}, this.periodicCollectionIntervalMs = Number.MAX_SAFE_INTEGER, this.signalConfigGenerationTimeStampMs = 0, this.suspiciousTiersFlushDurationMs = Number.MAX_SAFE_INTEGER, this.allTiersFlushDurationMs = Number.MAX_SAFE_INTEGER, this.heartbeatIntervalMs = -1, this.parsingDone = !1, this.bufferSizeBySignalIdMap[38e3] = 1
            }
            var c = a.prototype;
            c.setClientReputationTier = function(a) {
                this.reputationTier = a;
                return this
            };
            c.getClientReputationTier = function() {
                return this.reputationTier
            };
            c.setStaticSignalBufferSize = function(a) {
                a > 0 ? this.staticSignalBufferSize = a : b("BDOperationLogHelper").logError(h, g.INVALID_BUFFER_SIZE, {
                    size: a.toString(),
                    type: "s"
                });
                return this
            };
            c.getStaticSignalBufferSize = function() {
                return this.staticSignalBufferSize
            };
            c.setDynamicSignalBufferSize = function(a) {
                a > 1 ? this.dynamicSignalBufferSize = a : b("BDOperationLogHelper").logError(h, g.INVALID_BUFFER_SIZE, {
                    size: a.toString(),
                    type: "d"
                });
                return this
            };
            c.getDynamicSignalBufferSize = function() {
                return this.dynamicSignalBufferSize
            };
            c.setBiometricSignalBufferSize = function(a) {
                a > 1 ? this.biometricSignalBufferSize = a : b("BDOperationLogHelper").logError(h, g.INVALID_BUFFER_SIZE, {
                    size: a.toString(),
                    type: "b"
                });
                return this
            };
            c.getBiometricSignalBufferSize = function() {
                return this.biometricSignalBufferSize
            };
            c.setConfigGenerationTimeStamp = function(a) {
                this.signalConfigGenerationTimeStampMs = a;
                return this
            };
            c.getConfigGenerationTimeStamp = function() {
                return this.signalConfigGenerationTimeStampMs
            };
            c.setHeartbeatIntervalMinutes = function(a) {
                this.heartbeatIntervalMs = a * 60 * 1e3;
                return this
            };
            c.getHeartbeatIntervalMs = function() {
                return this.heartbeatIntervalMs
            };
            c.setSuspiciousTiersFlushDurationMinutes = function(a) {
                a > 0 ? this.suspiciousTiersFlushDurationMs = a * 60 * 1e3 : b("BDOperationLogHelper").logError(h, g.INVALID_DURATION, {
                    size: a.toString(),
                    type: "fds"
                });
                return this
            };
            c.getSuspiciousTiersFlushDurationMs = function() {
                return this.suspiciousTiersFlushDurationMs
            };
            c.setAllTiersFlushDurationMinutes = function(a) {
                a > 0 ? this.allTiersFlushDurationMs = a * 60 * 1e3 : b("BDOperationLogHelper").logError(h, g.INVALID_DURATION, {
                    size: a.toString(),
                    type: "fda"
                });
                return this
            };
            c.getAllTiersFlushDurationMs = function() {
                return this.allTiersFlushDurationMs
            };
            c.getFlushDurationByReputationTierMs = function() {
                return this.reputationTier === 262144 ? this.allTiersFlushDurationMs : this.suspiciousTiersFlushDurationMs
            };
            c.addMultipleSignalsToClientConfig = function(a) {
                var b = this;
                a.forEach(function(a) {
                    return b.addSignalToClientConfig(a)
                });
                return this
            };
            c.addSignalToClientConfig = function(a) {
                var c = a.getSignalFlags(),
                    d = a.getSignalId(),
                    e = new(b("BDSignalWrapper"))(c, d);
                if (d === 38e3) {
                    this.heartbeatSignal = e;
                    return this
                }!c.includes(2) ? this.staticSignals.push(e) : c.includes(4) ? this.biometricSignals.push(e) : this.dynamicSignals.push(e);
                a.getBufferSize() > 0 && (this.bufferSizeBySignalIdMap[a.getSignalId()] = a.getBufferSize());
                return this
            };
            c.setPeriodicCollectionIntervalSeconds = function(a) {
                a > 0 ? this.periodicCollectionIntervalMs = a * 1e3 : b("BDOperationLogHelper").logError(h, g.INVALID_DURATION, {
                    size: a.toString(),
                    type: "pi"
                });
                return this
            };
            c.getPeriodicCollectionIntervalMs = function() {
                return this.periodicCollectionIntervalMs
            };
            c.getDynamicSignals = function() {
                return this.dynamicSignals
            };
            c.getStaticSignals = function() {
                return this.staticSignals
            };
            c.getBiometricSignals = function() {
                return this.biometricSignals
            };
            c.getHeartbeatSignal = function() {
                return this.heartbeatSignal
            };
            c.getBufferSizeBySignalId = function(a) {
                return this.bufferSizeBySignalIdMap[a]
            };
            c.setParsingDone = function(a) {
                this.parsingDone = a
            };
            c.isParsingDone = function() {
                return this.parsingDone
            };
            return a
        }(),
        j = null;
    a = {
        get: function() {
            j == null && (j = new i());
            return j
        }
    };
    e.exports = a
}), null);
__d("BotDetection_SignalFlags", [], (function(a, b, c, d, e, f) {
    e.exports = Object.freeze({
        ACTIVE: 1,
        DYNAMIC: 2,
        BIOMETRIC: 4,
        DEPRECATED: 8,
        WEB: 16,
        IOS_NATIVE: 32,
        ANDROID_NATIVE: 64,
        EQUAL_BY_VALUE: 128,
        EQUAL_BY_CONTEXT: 256,
        EQUAL_BY_TIMESTAMP: 512,
        SUSPICIOUS_TIER: 1024,
        PARANOID_TIER: 2048,
        RANDOM_SAMPLE_TIER_DEPRECATED: 4096,
        BENIGN_TIER: 262144,
        EMPLOYEES_TIER: 524288,
        BUNDLE: 8192,
        ONSITE: 16384,
        OFFSITE: 32768,
        OFFSITE_SENSITIVE: 65536,
        SENSITIVE: 131072
    })
}), null);
__d("BDServerSignalConfig", ["BDLoggingConstants", "BDOperationLogHelper", "BotDetection_SignalFlags"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("BDLoggingConstants").OPERATIONS,
        h = "BDServerSignalConfig";
    a = function() {
        function a(a, b, c) {
            this.parsedSignalFlags = [], this.signalId = a, this.signalFlags = b, this.bufferSize = c
        }
        var c = a.prototype;
        c.getSignalId = function() {
            return this.signalId
        };
        c.getSignalFlags = function() {
            var a = this;
            if (this.parsedSignalFlags.length === 0) {
                var c = Object.keys(b("BotDetection_SignalFlags"));
                c.forEach(function(c) {
                    (b("BotDetection_SignalFlags")[c] & a.signalFlags) === b("BotDetection_SignalFlags")[c] && a.parsedSignalFlags.push(b("BotDetection_SignalFlags")[c])
                })
            }
            this.parsedSignalFlags.length === 0 && b("BDOperationLogHelper").logError(h, g.SIGNAL_FLAGS_MISSING, {
                id: this.signalId.toString(),
                flags: this.signalFlags.toString()
            });
            return this.parsedSignalFlags
        };
        c.getBufferSize = function() {
            return this.bufferSize != null ? this.bufferSize : 0
        };
        return a
    }();
    e.exports = a
}), null);
__d("BDServerConfig", ["BDClientConfig", "BDLoggingConstants", "BDOperationLogHelper", "BDServerSignalConfig"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("BDLoggingConstants").OPERATIONS,
        h = "BDServerConfig";
    a = {
        parseConfig: function(a) {
            var c = [];
            try {
                var d = JSON.parse(a.sc),
                    e = new Map(d.c);
                e.forEach(function(a, d) {
                    return c.push(new(b("BDServerSignalConfig"))(d, a))
                });
                if (e.size === 0) {
                    b("BDOperationLogHelper").logError(h, g.EMPTY_SIGNAL_CONFIG);
                    return
                }
                e = b("BDClientConfig").get();
                e.setClientReputationTier(a.rt).setPeriodicCollectionIntervalSeconds(a.i).addMultipleSignalsToClientConfig(c).setConfigGenerationTimeStamp(d.t).setAllTiersFlushDurationMinutes(a.fda).setSuspiciousTiersFlushDurationMinutes(a.fds).setHeartbeatIntervalMinutes(a.hbi).setStaticSignalBufferSize(a.sbs).setDynamicSignalBufferSize(a.dbs).setBiometricSignalBufferSize(a.bbs).setParsingDone(!0)
            } catch (a) {
                b("BDOperationLogHelper").logError(h, g.PARSE_CONFIG_ERROR, {
                    e: a
                })
            }
        }
    };
    e.exports = a
}), null);
__d("HeartbeatObject", ["BDClientSignalCollectionTrigger"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        function a() {
            this.isAppForeground = !0
        }
        var b = a.prototype;
        b.toJSON = function() {
            return {
                f: this.isAppForeground
            }
        };
        b.isEqual = function(a) {
            return !1
        };
        return a
    }();
    e.exports = a
}), null);