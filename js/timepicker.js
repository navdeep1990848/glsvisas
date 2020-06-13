// ===== flipclock 2015-08-31 
var Base = function() {};
Base.extend = function(a, b) {
    "use strict";
    var c = Base.prototype.extend;
    Base._prototyping = !0;
    var d = new this;
    c.call(d, a), d.base = function() {}, delete Base._prototyping;
    var e = d.constructor,
        f = d.constructor = function() {
            if (!Base._prototyping)
                if (this._constructing || this.constructor == f) this._constructing = !0, e.apply(this, arguments), delete this._constructing;
                else if (null !== arguments[0]) return (arguments[0].extend || c).call(arguments[0], d)
        };
    return f.ancestor = this, f.extend = this.extend, f.forEach = this.forEach, f.implement = this.implement, f.prototype = d, f.toString = this.toString, f.valueOf = function(a) {
        return "object" == a ? f : e.valueOf()
    }, c.call(f, b), "function" == typeof f.init && f.init(), f
}, Base.prototype = {
    extend: function(a, b) {
        if (arguments.length > 1) {
            var c = this[a];
            if (c && "function" == typeof b && (!c.valueOf || c.valueOf() != b.valueOf()) && /\bbase\b/.test(b)) {
                var d = b.valueOf();
                b = function() {
                    var a = this.base || Base.prototype.base;
                    this.base = c;
                    var b = d.apply(this, arguments);
                    return this.base = a, b
                }, b.valueOf = function(a) {
                    return "object" == a ? b : d
                }, b.toString = Base.toString
            }
            this[a] = b
        } else if (a) {
            var e = Base.prototype.extend;
            Base._prototyping || "function" == typeof this || (e = this.extend || e);
            for (var f = {
                    toSource: null
                }, g = ["constructor", "toString", "valueOf"], h = Base._prototyping ? 0 : 1; i = g[h++];) a[i] != f[i] && e.call(this, i, a[i]);
            for (var i in a) f[i] || e.call(this, i, a[i])
        }
        return this
    }
}, Base = Base.extend({
    constructor: function() {
        this.extend(arguments[0])
    }
}, {
    ancestor: Object,
    version: "1.1",
    forEach: function(a, b, c) {
        for (var d in a) void 0 === this.prototype[d] && b.call(c, a[d], d, a)
    },
    implement: function() {
        for (var a = 0; a < arguments.length; a++) "function" == typeof arguments[a] ? arguments[a](this.prototype) : this.prototype.extend(arguments[a]);
        return this
    },
    toString: function() {
        return String(this.valueOf())
    }
});
var FlipClock;
! function(a) {
    "use strict";
    FlipClock = function(a, b, c) {
        return b instanceof Object && b instanceof Date == !1 && (c = b, b = 0), new FlipClock.Factory(a, b, c)
    }, FlipClock.Lang = {}, FlipClock.Base = Base.extend({
        buildDate: "2014-12-12",
        version: "0.7.7",
        constructor: function(b, c) {
            "object" != typeof b && (b = {}), "object" != typeof c && (c = {}), this.setOptions(a.extend(!0, {}, b, c))
        },
        callback: function(a) {
            if ("function" == typeof a) {
                for (var b = [], c = 1; c <= arguments.length; c++) arguments[c] && b.push(arguments[c]);
                a.apply(this, b)
            }
        },
        log: function(a) {
            window.console && console.log && console.log(a)
        },
        getOption: function(a) {
            return this[a] ? this[a] : !1
        },
        getOptions: function() {
            return this
        },
        setOption: function(a, b) {
            this[a] = b
        },
        setOptions: function(a) {
            for (var b in a) "undefined" != typeof a[b] && this.setOption(b, a[b])
        }
    })
}(jQuery),
function(a) {
    "use strict";
    FlipClock.Face = FlipClock.Base.extend({
        autoStart: !0,
        dividers: [],
        factory: !1,
        lists: [],
        constructor: function(a, b) {
            this.dividers = [], this.lists = [], this.base(b), this.factory = a
        },
        build: function() {
            this.autoStart && this.start()
        },
        createdivider: function(b, c, d) {
            "boolean" != typeof c && c || (d = c, c = b);
            var e = ['<span class="' + this.factory.classes.dot + ' top"></span>', '<span class="' + this.factory.classes.dot + ' bottom"></span>'].join("");
            d && (e = ""), b = this.factory.localize(b);
            var f = ['<span class="' + this.factory.classes.divider + " " + (c ? c : "").toLowerCase() + '">', '<span class="' + this.factory.classes.label + '">' + (b ? b : "") + "</span>", e, "</span>"],
                g = a(f.join(""));
            return this.dividers.push(g), g
        },
        createList: function(a, b) {
            "object" == typeof a && (b = a, a = 0);
            var c = new FlipClock.List(this.factory, a, b);
            return this.lists.push(c), c
        },
        reset: function() {
            this.factory.time = new FlipClock.Time(this.factory, this.factory.original ? Math.round(this.factory.original) : 0, {
                minimumDigits: this.factory.minimumDigits
            }), this.flip(this.factory.original, !1)
        },
        appendDigitToClock: function(a) {
            a.$el.append(!1)
        },
        addDigit: function(a) {
            var b = this.createList(a, {
                classes: {
                    active: this.factory.classes.active,
                    before: this.factory.classes.before,
                    flip: this.factory.classes.flip
                }
            });
            this.appendDigitToClock(b)
        },
        start: function() {},
        stop: function() {},
        autoIncrement: function() {
            this.factory.countdown ? this.decrement() : this.increment()
        },
        increment: function() {
            this.factory.time.addSecond()
        },
        decrement: function() {
            0 == this.factory.time.getTimeSeconds() ? this.factory.stop() : this.factory.time.subSecond()
        },
        flip: function(b, c) {
            var d = this;
            a.each(b, function(a, b) {
                var e = d.lists[a];
                e ? (c || b == e.digit || e.play(), e.select(b)) : d.addDigit(b)
            })
        }
    })
}(jQuery),
function(a) {
    "use strict";
    FlipClock.Factory = FlipClock.Base.extend({
        animationRate: 1e3,
        autoStart: !0,
        callbacks: {
            destroy: !1,
            create: !1,
            init: !1,
            interval: !1,
            start: !1,
            stop: !1,
            reset: !1
        },
        classes: {
            active: "flip-clock-active",
            before: "flip-clock-before",
            divider: "flip-clock-divider",
            dot: "flip-clock-dot",
            label: "flip-clock-label",
            flip: "flip",
            play: "play",
            wrapper: "flip-clock-wrapper"
        },
        clockFace: "HourlyCounter",
        countdown: !1,
        defaultClockFace: "HourlyCounter",
        defaultLanguage: "english",
        $el: !1,
        face: !0,
        lang: !1,
        language: "english",
        minimumDigits: 0,
        original: !1,
        running: !1,
        time: !1,
        timer: !1,
        $wrapper: !1,
        constructor: function(b, c, d) {
            d || (d = {}), this.lists = [], this.running = !1, this.base(d), this.$el = a(b).addClass(this.classes.wrapper), this.$wrapper = this.$el, this.original = c instanceof Date ? c : c ? Math.round(c) : 0, this.time = new FlipClock.Time(this, this.original, {
                minimumDigits: this.minimumDigits,
                animationRate: this.animationRate
            }), this.timer = new FlipClock.Timer(this, d), this.loadLanguage(this.language), this.loadClockFace(this.clockFace, d), this.autoStart && this.start()
        },
        loadClockFace: function(a, b) {
            var c, d = "Face",
                e = !1;
            return a = a.ucfirst() + d, this.face.stop && (this.stop(), e = !0), this.$el.html(""), this.time.minimumDigits = this.minimumDigits, c = FlipClock[a] ? new FlipClock[a](this, b) : new FlipClock[this.defaultClockFace + d](this, b), c.build(), this.face = c, e && this.start(), this.face
        },
        loadLanguage: function(a) {
            var b;
            return b = FlipClock.Lang[a.ucfirst()] ? FlipClock.Lang[a.ucfirst()] : FlipClock.Lang[a] ? FlipClock.Lang[a] : FlipClock.Lang[this.defaultLanguage], this.lang = b
        },
        localize: function(a, b) {
            var c = this.lang;
            if (!a) return null;
            var d = a.toLowerCase();
            return "object" == typeof b && (c = b), c && c[d] ? c[d] : a
        },
        start: function(a) {
            var b = this;
            b.running || b.countdown && !(b.countdown && b.time.time > 0) ? b.log("Trying to start timer when countdown already at 0") : (b.face.start(b.time), b.timer.start(function() {
                b.flip(), "function" == typeof a && a()
            }))
        },
        stop: function(a) {
            this.face.stop(), this.timer.stop(a);
            for (var b in this.lists) this.lists.hasOwnProperty(b) && this.lists[b].stop()
        },
        reset: function(a) {
            this.timer.reset(a), this.face.reset()
        },
        setTime: function(a) {
            this.time.time = a, this.flip(!0)
        },
        getTime: function(a) {
            return this.time
        },
        setCountdown: function(a) {
            var b = this.running;
            this.countdown = a ? !0 : !1, b && (this.stop(), this.start())
        },
        flip: function(a) {
            this.face.flip(!1, a)
        }
    })
}(jQuery),
function(a) {
    "use strict";
    FlipClock.List = FlipClock.Base.extend({
        digit: 0,
        classes: {
            active: "flip-clock-active",
            before: "flip-clock-before",
            flip: "flip"
        },
        factory: !1,
        $el: !1,
        $obj: !1,
        items: [],
        lastDigit: 0,
        constructor: function(a, b, c) {
            this.factory = a, this.digit = b, this.lastDigit = b, this.$el = this.createList(), this.$obj = this.$el, b > 0 && this.select(b), this.factory.$el.append(this.$el)
        },
        select: function(a) {
            if ("undefined" == typeof a ? a = this.digit : this.digit = a, this.digit != this.lastDigit) {
                var b = this.$el.find("." + this.classes.before).removeClass(this.classes.before);
                this.$el.find("." + this.classes.active).removeClass(this.classes.active).addClass(this.classes.before), this.appendListItem(this.classes.active, this.digit), b.remove(), this.lastDigit = this.digit
            }
        },
        play: function() {
            this.$el.addClass(this.factory.classes.play)
        },
        stop: function() {
            var a = this;
            setTimeout(function() {
                a.$el.removeClass(a.factory.classes.play)
            }, this.factory.timer.interval)
        },
        createListItem: function(a, b) {
            return ['<li class="' + (a ? a : "") + '">', '<a href="#">', '<div class="up">', '<div class="shadow"></div>', '<div class="inn">' + (b ? b : "") + "</div>", "</div>", '<div class="down">', '<div class="shadow"></div>', '<div class="inn">' + (b ? b : "") + "</div>", "</div>", "</a>", "</li>"].join("")
        },
        appendListItem: function(a, b) {
            var c = this.createListItem(a, b);
            this.$el.append(c)
        },
        createList: function() {
            var b = this.getPrevDigit() ? this.getPrevDigit() : this.digit,
                c = a(['<ul class="' + this.classes.flip + " " + (this.factory.running ? this.factory.classes.play : "") + '">', this.createListItem(this.classes.before, b), this.createListItem(this.classes.active, this.digit), "</ul>"].join(""));
            return c
        },
        getNextDigit: function() {
            return 9 == this.digit ? 0 : this.digit + 1
        },
        getPrevDigit: function() {
            return 0 == this.digit ? 9 : this.digit - 1
        }
    })
}(jQuery),
function(a) {
    "use strict";
    String.prototype.ucfirst = function() {
        return this.substr(0, 1).toUpperCase() + this.substr(1)
    }, a.fn.FlipClock = function(b, c) {
        return new FlipClock(a(this), b, c)
    }, a.fn.flipClock = function(b, c) {
        return a.fn.FlipClock(b, c)
    }
}(jQuery),
function(a) {
    "use strict";
    FlipClock.Time = FlipClock.Base.extend({
        time: 0,
        factory: !1,
        minimumDigits: 0,
        constructor: function(a, b, c) {
            "object" != typeof c && (c = {}), c.minimumDigits || (c.minimumDigits = a.minimumDigits), this.base(c), this.factory = a, b && (this.time = b)
        },
        convertDigitsToArray: function(a) {
            var b = [];
            a = a.toString();
            for (var c = 0; c < a.length; c++) a[c].match(/^\d*$/g) && b.push(a[c]);
            return b
        },
        digit: function(a) {
            var b = this.toString(),
                c = b.length;
            return b[c - a] ? b[c - a] : !1
        },
        digitize: function(b) {
            var c = [];
            if (a.each(b, function(a, b) {
                    b = b.toString(), 1 == b.length && (b = "0" + b);
                    for (var d = 0; d < b.length; d++) c.push(b.charAt(d))
                }), c.length > this.minimumDigits && (this.minimumDigits = c.length), this.minimumDigits > c.length)
                for (var d = c.length; d < this.minimumDigits; d++) c.unshift("0");
            return c
        },
        getDateObject: function() {
            return this.time instanceof Date ? this.time : new Date((new Date).getTime() + 1e3 * this.getTimeSeconds())
        },
        getDayCounter: function(a) {
            var b = [this.getDays(), this.getHours(!0), this.getMinutes(!0)];
            return a && b.push(this.getSeconds(!0)), this.digitize(b)
        },
        getDays: function(a) {
            var b = this.getTimeSeconds() / 60 / 60 / 24;
            return a && (b %= 7), Math.floor(b)
        },
        getHourCounter: function() {
            var a = this.digitize([this.getHours(), this.getMinutes(!0), this.getSeconds(!0)]);
            return a
        },
        getHourly: function() {
            return this.getHourCounter()
        },
        getHours: function(a) {
            var b = this.getTimeSeconds() / 60 / 60;
            return a && (b %= 24), Math.floor(b)
        },
        getMilitaryTime: function(a, b) {
            "undefined" == typeof b && (b = !0), a || (a = this.getDateObject());
            var c = [a.getHours(), a.getMinutes()];
            return b === !0 && c.push(a.getSeconds()), this.digitize(c)
        },
        getMinutes: function(a) {
            var b = this.getTimeSeconds() / 60;
            return a && (b %= 60), Math.floor(b)
        },
        getMinuteCounter: function() {
            var a = this.digitize([this.getMinutes(), this.getSeconds(!0)]);
            return a
        },
        getTimeSeconds: function(a) {
            return a || (a = new Date), this.time instanceof Date ? this.factory.countdown ? Math.max(this.time.getTime() / 1e3 - a.getTime() / 1e3, 0) : a.getTime() / 1e3 - this.time.getTime() / 1e3 : this.time
        },
        getTime: function(a, b) {
            "undefined" == typeof b && (b = !0), a || (a = this.getDateObject()), console.log(a);
            var c = a.getHours(),
                d = [c > 12 ? c - 12 : 0 === c ? 12 : c, a.getMinutes()];
            return b === !0 && d.push(a.getSeconds()), this.digitize(d)
        },
        getSeconds: function(a) {
            var b = this.getTimeSeconds();
            return a && (60 == b ? b = 0 : b %= 60), Math.ceil(b)
        },
        getWeeks: function(a) {
            var b = this.getTimeSeconds() / 60 / 60 / 24 / 7;
            return a && (b %= 52), Math.floor(b)
        },
        removeLeadingZeros: function(b, c) {
            var d = 0,
                e = [];
            return a.each(c, function(a, f) {
                b > a ? d += parseInt(c[a], 10) : e.push(c[a])
            }), 0 === d ? e : c
        },
        addSeconds: function(a) {
            this.time instanceof Date ? this.time.setSeconds(this.time.getSeconds() + a) : this.time += a
        },
        addSecond: function() {
            this.addSeconds(1)
        },
        subSeconds: function(a) {
            this.time instanceof Date ? this.time.setSeconds(this.time.getSeconds() - a) : this.time -= a
        },
        subSecond: function() {
            this.subSeconds(1)
        },
        toString: function() {
            return this.getTimeSeconds().toString()
        }
    })
}(jQuery),
function(a) {
    "use strict";
    FlipClock.Timer = FlipClock.Base.extend({
        callbacks: {
            destroy: !1,
            create: !1,
            init: !1,
            interval: !1,
            start: !1,
            stop: !1,
            reset: !1
        },
        count: 0,
        factory: !1,
        interval: 1e3,
        animationRate: 1e3,
        constructor: function(a, b) {
            this.base(b), this.factory = a, this.callback(this.callbacks.init), this.callback(this.callbacks.create)
        },
        getElapsed: function() {
            return this.count * this.interval
        },
        getElapsedTime: function() {
            return new Date(this.time + this.getElapsed())
        },
        reset: function(a) {
            clearInterval(this.timer), this.count = 0, this._setInterval(a), this.callback(this.callbacks.reset)
        },
        start: function(a) {
            this.factory.running = !0, this._createTimer(a), this.callback(this.callbacks.start)
        },
        stop: function(a) {
            this.factory.running = !1, this._clearInterval(a), this.callback(this.callbacks.stop), this.callback(a)
        },
        _clearInterval: function() {
            clearInterval(this.timer)
        },
        _createTimer: function(a) {
            this._setInterval(a)
        },
        _destroyTimer: function(a) {
            this._clearInterval(), this.timer = !1, this.callback(a), this.callback(this.callbacks.destroy)
        },
        _interval: function(a) {
            this.callback(this.callbacks.interval), this.callback(a), this.count++
        },
        _setInterval: function(a) {
            var b = this;
            b._interval(a), b.timer = setInterval(function() {
                b._interval(a)
            }, this.interval)
        }
    })
}(jQuery),
function(a) {
    FlipClock.TwentyFourHourClockFace = FlipClock.Face.extend({
        constructor: function(a, b) {
            this.base(a, b)
        },
        build: function(b) {
            var c = this,
                d = this.factory.$el.find("ul");
            this.factory.time.time || (this.factory.original = new Date, this.factory.time = new FlipClock.Time(this.factory, this.factory.original));
            var b = b ? b : this.factory.time.getMilitaryTime(!1, this.showSeconds);
            b.length > d.length && a.each(b, function(a, b) {
                c.createList(b)
            }), this.createdivider(), this.createdivider(), a(this.dividers[0]).insertBefore(this.lists[this.lists.length - 2].$el), a(this.dividers[1]).insertBefore(this.lists[this.lists.length - 4].$el), this.base()
        },
        flip: function(a, b) {
            this.autoIncrement(), a = a ? a : this.factory.time.getMilitaryTime(!1, this.showSeconds), this.base(a, b)
        }
    })
}(jQuery),
function(a) {
    FlipClock.CounterFace = FlipClock.Face.extend({
        shouldAutoIncrement: !1,
        constructor: function(a, b) {
            "object" != typeof b && (b = {}), a.autoStart = b.autoStart ? !0 : !1, b.autoStart && (this.shouldAutoIncrement = !0), a.increment = function() {
                a.countdown = !1, a.setTime(a.getTime().getTimeSeconds() + 1)
            }, a.decrement = function() {
                a.countdown = !0;
                var b = a.getTime().getTimeSeconds();
                b > 0 && a.setTime(b - 1)
            }, a.setValue = function(b) {
                a.setTime(b)
            }, a.setCounter = function(b) {
                a.setTime(b)
            }, this.base(a, b)
        },
        build: function() {
            var b = this,
                c = this.factory.$el.find("ul"),
                d = this.factory.getTime().digitize([this.factory.getTime().time]);
            d.length > c.length && a.each(d, function(a, c) {
                var d = b.createList(c);
                d.select(c)
            }), a.each(this.lists, function(a, b) {
                b.play()
            }), this.base()
        },
        flip: function(a, b) {
            this.shouldAutoIncrement && this.autoIncrement(), a || (a = this.factory.getTime().digitize([this.factory.getTime().time])), this.base(a, b)
        },
        reset: function() {
            this.factory.time = new FlipClock.Time(this.factory, this.factory.original ? Math.round(this.factory.original) : 0), this.flip()
        }
    })
}(jQuery),
function(a) {
    FlipClock.DailyCounterFace = FlipClock.Face.extend({
        showSeconds: !0,
        constructor: function(a, b) {
            this.base(a, b)
        },
        build: function(b) {
            var c = this,
                d = this.factory.$el.find("ul"),
                e = 0;
            b = b ? b : this.factory.time.getDayCounter(this.showSeconds), b.length > d.length && a.each(b, function(a, b) {
                c.createList(b)
            }), this.showSeconds ? a(this.createdivider("Seconds")).insertBefore(this.lists[this.lists.length - 2].$el) : e = 2, a(this.createdivider("Minutes")).insertBefore(this.lists[this.lists.length - 4 + e].$el), a(this.createdivider("Hours")).insertBefore(this.lists[this.lists.length - 6 + e].$el), a(this.createdivider("Days", !0)).insertBefore(this.lists[0].$el), this.base()
        },
        flip: function(a, b) {
            a || (a = this.factory.time.getDayCounter(this.showSeconds)), this.autoIncrement(), this.base(a, b)
        }
    })
}(jQuery),
function(a) {
    FlipClock.HourlyCounterFace = FlipClock.Face.extend({
        constructor: function(a, b) {
            this.base(a, b)
        },
        build: function(b, c) {
            var d = this,
                e = this.factory.$el.find("ul");
            c = c ? c : this.factory.time.getHourCounter(), c.length > e.length && a.each(c, function(a, b) {
                d.createList(b)
            }), a(this.createdivider("Seconds")).insertBefore(this.lists[this.lists.length - 2].$el), a(this.createdivider("Minutes")).insertBefore(this.lists[this.lists.length - 4].$el), b || a(this.createdivider("Hours", !0)).insertBefore(this.lists[0].$el), this.base()
        },
        flip: function(a, b) {
            a || (a = this.factory.time.getHourCounter()), this.autoIncrement(), this.base(a, b)
        },
        appendDigitToClock: function(a) {
            this.base(a), this.dividers[0].insertAfter(this.dividers[0].next())
        }
    })
}(jQuery),
function(a) {
    FlipClock.MinuteCounterFace = FlipClock.HourlyCounterFace.extend({
        clearExcessDigits: !1,
        constructor: function(a, b) {
            this.base(a, b)
        },
        build: function() {
            this.base(!0, this.factory.time.getMinuteCounter())
        },
        flip: function(a, b) {
            a || (a = this.factory.time.getMinuteCounter()), this.base(a, b)
        }
    })
}(jQuery),
function(a) {
    FlipClock.TwelveHourClockFace = FlipClock.TwentyFourHourClockFace.extend({
        meridium: !1,
        meridiumText: "AM",
        build: function() {
            var b = this.factory.time.getTime(!1, this.showSeconds);
            this.base(b), this.meridiumText = this.getMeridium(), this.meridium = a(['<ul class="flip-clock-meridium">', "<li>", '<a href="#">' + this.meridiumText + "</a>", "</li>", "</ul>"].join("")), this.meridium.insertAfter(this.lists[this.lists.length - 1].$el)
        },
        flip: function(a, b) {
            this.meridiumText != this.getMeridium() && (this.meridiumText = this.getMeridium(), this.meridium.find("a").html(this.meridiumText)), this.base(this.factory.time.getTime(!1, this.showSeconds), b)
        },
        getMeridium: function() {
            return (new Date).getHours() >= 12 ? "PM" : "AM"
        },
        isPM: function() {
            return "PM" == this.getMeridium() ? !0 : !1
        },
        isAM: function() {
            return "AM" == this.getMeridium() ? !0 : !1
        }
    })
}(jQuery),
function(a) {
    FlipClock.Lang.Arabic = {
        years: "Ø³Ù†ÙˆØ§Øª",
        months: "Ø´Ù‡ÙˆØ±",
        days: "Ø£ÙŠØ§Ù…",
        hours: "Ø³Ø§Ø¹Ø§Øª",
        minutes: "Ø¯Ù‚Ø§Ø¦Ù‚",
        seconds: "Ø«ÙˆØ§Ù†ÙŠ"
    }, FlipClock.Lang.ar = FlipClock.Lang.Arabic, FlipClock.Lang["ar-ar"] = FlipClock.Lang.Arabic, FlipClock.Lang.arabic = FlipClock.Lang.Arabic
}(jQuery),
function(a) {
    FlipClock.Lang.Danish = {
        years: "Ã…r",
        months: "MÃ¥neder",
        days: "Dage",
        hours: "Timer",
        minutes: "Minutter",
        seconds: "Sekunder"
    }, FlipClock.Lang.da = FlipClock.Lang.Danish, FlipClock.Lang["da-dk"] = FlipClock.Lang.Danish, FlipClock.Lang.danish = FlipClock.Lang.Danish
}(jQuery),
function(a) {
    FlipClock.Lang.German = {
        years: "Jahre",
        months: "Monate",
        days: "Tage",
        hours: "Stunden",
        minutes: "Minuten",
        seconds: "Sekunden"
    }, FlipClock.Lang.de = FlipClock.Lang.German, FlipClock.Lang["de-de"] = FlipClock.Lang.German, FlipClock.Lang.german = FlipClock.Lang.German
}(jQuery),
function(a) {
    FlipClock.Lang.English = {
        years: "Years",
        months: "Months",
        days: "Days",
        hours: "Hours",
        minutes: "Minutes",
        seconds: "Seconds"
    }, FlipClock.Lang.en = FlipClock.Lang.English, FlipClock.Lang["en-us"] = FlipClock.Lang.English, FlipClock.Lang.english = FlipClock.Lang.English
}(jQuery),
function(a) {
    FlipClock.Lang.Spanish = {
        years: "AÃ±os",
        months: "Meses",
        days: "DÃ­as",
        hours: "Horas",
        minutes: "Minutos",
        seconds: "Segundos"
    }, FlipClock.Lang.es = FlipClock.Lang.Spanish, FlipClock.Lang["es-es"] = FlipClock.Lang.Spanish, FlipClock.Lang.spanish = FlipClock.Lang.Spanish
}(jQuery),
function(a) {
    FlipClock.Lang.Finnish = {
        years: "Vuotta",
        months: "Kuukautta",
        days: "PÃ¤ivÃ¤Ã¤",
        hours: "Tuntia",
        minutes: "Minuuttia",
        seconds: "Sekuntia"
    }, FlipClock.Lang.fi = FlipClock.Lang.Finnish, FlipClock.Lang["fi-fi"] = FlipClock.Lang.Finnish, FlipClock.Lang.finnish = FlipClock.Lang.Finnish
}(jQuery),
function(a) {
    FlipClock.Lang.French = {
        years: "Ans",
        months: "Mois",
        days: "Jours",
        hours: "Heures",
        minutes: "Minutes",
        seconds: "Secondes"
    }, FlipClock.Lang.fr = FlipClock.Lang.French, FlipClock.Lang["fr-ca"] = FlipClock.Lang.French, FlipClock.Lang.french = FlipClock.Lang.French
}(jQuery),
function(a) {
    FlipClock.Lang.Italian = {
        years: "Anni",
        months: "Mesi",
        days: "Giorni",
        hours: "Ore",
        minutes: "Minuti",
        seconds: "Secondi"
    }, FlipClock.Lang.it = FlipClock.Lang.Italian, FlipClock.Lang["it-it"] = FlipClock.Lang.Italian, FlipClock.Lang.italian = FlipClock.Lang.Italian
}(jQuery),
function(a) {
    FlipClock.Lang.Latvian = {
        years: "Gadi",
        months: "MÄ“neÅ¡i",
        days: "Dienas",
        hours: "Stundas",
        minutes: "MinÅ«tes",
        seconds: "Sekundes"
    }, FlipClock.Lang.lv = FlipClock.Lang.Latvian, FlipClock.Lang["lv-lv"] = FlipClock.Lang.Latvian, FlipClock.Lang.latvian = FlipClock.Lang.Latvian
}(jQuery),
function(a) {
    FlipClock.Lang.Dutch = {
        years: "Jaren",
        months: "Maanden",
        days: "Dagen",
        hours: "Uren",
        minutes: "Minuten",
        seconds: "Seconden"
    }, FlipClock.Lang.nl = FlipClock.Lang.Dutch, FlipClock.Lang["nl-be"] = FlipClock.Lang.Dutch, FlipClock.Lang.dutch = FlipClock.Lang.Dutch
}(jQuery),
function(a) {
    FlipClock.Lang.Norwegian = {
        years: "Ã…r",
        months: "MÃ¥neder",
        days: "Dager",
        hours: "Timer",
        minutes: "Minutter",
        seconds: "Sekunder"
    }, FlipClock.Lang.no = FlipClock.Lang.Norwegian, FlipClock.Lang.nb = FlipClock.Lang.Norwegian, FlipClock.Lang["no-nb"] = FlipClock.Lang.Norwegian, FlipClock.Lang.norwegian = FlipClock.Lang.Norwegian
}(jQuery),
function(a) {
    FlipClock.Lang.Portuguese = {
        years: "Anos",
        months: "Meses",
        days: "Dias",
        hours: "Horas",
        minutes: "Minutos",
        seconds: "Segundos"
    }, FlipClock.Lang.pt = FlipClock.Lang.Portuguese, FlipClock.Lang["pt-br"] = FlipClock.Lang.Portuguese, FlipClock.Lang.portuguese = FlipClock.Lang.Portuguese
}(jQuery),
function(a) {
    FlipClock.Lang.Russian = {
        years: "Ð»ÐµÑ‚",
        months: "Ð¼ÐµÑÑÑ†ÐµÐ²",
        days: "Ð´Ð½ÐµÐ¹",
        hours: "Ñ‡Ð°ÑÐ¾Ð²",
        minutes: "Ð¼Ð¸Ð½ÑƒÑ‚",
        seconds: "ÑÐµÐºÑƒÐ½Ð´"
    }, FlipClock.Lang.ru = FlipClock.Lang.Russian, FlipClock.Lang["ru-ru"] = FlipClock.Lang.Russian, FlipClock.Lang.russian = FlipClock.Lang.Russian
}(jQuery),
function(a) {
    FlipClock.Lang.Swedish = {
        years: "Ã…r",
        months: "MÃ¥nader",
        days: "Dagar",
        hours: "Timmar",
        minutes: "Minuter",
        seconds: "Sekunder"
    }, FlipClock.Lang.sv = FlipClock.Lang.Swedish, FlipClock.Lang["sv-se"] = FlipClock.Lang.Swedish, FlipClock.Lang.swedish = FlipClock.Lang.Swedish
}(jQuery),
function(a) {
    FlipClock.Lang.Chinese = {
        years: "å¹´",
        months: "æœˆ",
        days: "æ—¥",
        hours: "æ—¶",
        minutes: "åˆ†",
        seconds: "ç§’"
    }, FlipClock.Lang.zh = FlipClock.Lang.Chinese, FlipClock.Lang["zh-cn"] = FlipClock.Lang.Chinese, FlipClock.Lang.chinese = FlipClock.Lang.Chinese
}(jQuery);

/* jquery-timepicker 3 */
! function(e) {
    "function" == typeof define && define.amd ? define(["jquery", "jquery-ui"], e) : e(jQuery)
}(function($) {
    if ($.ui.timepicker = $.ui.timepicker || {}, !$.ui.timepicker.version) {
        $.extend($.ui, {
            timepicker: {
                version: "1.6.3"
            }
        });
        var Timepicker = function() {
            this.regional = [], this.regional[""] = {
                currentText: "Now",
                closeText: "Done",
                amNames: ["AM", "A"],
                pmNames: ["PM", "P"],
                timeFormat: "HH:mm",
                timeSuffix: "",
                timeOnlyTitle: "Choose Time",
                timeText: "Time",
                hourText: "Hour",
                minuteText: "Minute",
                secondText: "Second",
                millisecText: "Millisecond",
                microsecText: "Microsecond",
                timezoneText: "Time Zone",
                isRTL: !1
            }, this._defaults = {
                showButtonPanel: !0,
                timeOnly: !1,
                timeOnlyShowDate: !1,
                showHour: null,
                showMinute: null,
                showSecond: null,
                showMillisec: null,
                showMicrosec: null,
                showTimezone: null,
                showTime: !0,
                stepHour: 1,
                stepMinute: 1,
                stepSecond: 1,
                stepMillisec: 1,
                stepMicrosec: 1,
                hour: 0,
                minute: 0,
                second: 0,
                millisec: 0,
                microsec: 0,
                timezone: null,
                hourMin: 0,
                minuteMin: 0,
                secondMin: 0,
                millisecMin: 0,
                microsecMin: 0,
                hourMax: 23,
                minuteMax: 59,
                secondMax: 59,
                millisecMax: 999,
                microsecMax: 999,
                minDateTime: null,
                maxDateTime: null,
                maxTime: null,
                minTime: null,
                onSelect: null,
                hourGrid: 0,
                minuteGrid: 0,
                secondGrid: 0,
                millisecGrid: 0,
                microsecGrid: 0,
                alwaysSetTime: !0,
                divider: " ",
                altFieldTimeOnly: !0,
                altTimeFormat: null,
                altdivider: null,
                altTimeSuffix: null,
                altRedirectFocus: !0,
                pickerTimeFormat: null,
                pickerTimeSuffix: null,
                showTimepicker: !0,
                timezoneList: null,
                addSliderAccess: !1,
                sliderAccessArgs: null,
                controlType: "slider",
                oneLine: !1,
                defaultValue: null,
                parse: "strict",
                afterInject: null
            }, $.extend(this._defaults, this.regional[""])
        };
        $.extend(Timepicker.prototype, {
            $input: null,
            $altInput: null,
            $timeObj: null,
            inst: null,
            hour_slider: null,
            minute_slider: null,
            second_slider: null,
            millisec_slider: null,
            microsec_slider: null,
            timezone_select: null,
            maxTime: null,
            minTime: null,
            hour: 0,
            minute: 0,
            second: 0,
            millisec: 0,
            microsec: 0,
            timezone: null,
            hourMinOriginal: null,
            minuteMinOriginal: null,
            secondMinOriginal: null,
            millisecMinOriginal: null,
            microsecMinOriginal: null,
            hourMaxOriginal: null,
            minuteMaxOriginal: null,
            secondMaxOriginal: null,
            millisecMaxOriginal: null,
            microsecMaxOriginal: null,
            ampm: "",
            formattedDate: "",
            formattedTime: "",
            formattedDateTime: "",
            timezoneList: null,
            units: ["hour", "minute", "second", "millisec", "microsec"],
            support: {},
            control: null,
            setDefaults: function(e) {
                return extendRemove(this._defaults, e || {}), this
            },
            _newInst: function($input, opts) {
                var tp_inst = new Timepicker,
                    inlineSettings = {},
                    fns = {},
                    overrides, i;
                for (var attrName in this._defaults)
                    if (this._defaults.hasOwnProperty(attrName)) {
                        var attrValue = $input.attr("time:" + attrName);
                        if (attrValue) try {
                            inlineSettings[attrName] = eval(attrValue)
                        } catch (err) {
                            inlineSettings[attrName] = attrValue
                        }
                    }
                overrides = {
                    beforeShow: function(e, t) {
                        return $.isFunction(tp_inst._defaults.evnts.beforeShow) ? tp_inst._defaults.evnts.beforeShow.call($input[0], e, t, tp_inst) : void 0
                    },
                    onChangeMonthYear: function(e, t, i) {
                        $.isFunction(tp_inst._defaults.evnts.onChangeMonthYear) && tp_inst._defaults.evnts.onChangeMonthYear.call($input[0], e, t, i, tp_inst)
                    },
                    onClose: function(e, t) {
                        tp_inst.timeDefined === !0 && "" !== $input.val() && tp_inst._updateDateTime(t), $.isFunction(tp_inst._defaults.evnts.onClose) && tp_inst._defaults.evnts.onClose.call($input[0], e, t, tp_inst)
                    }
                };
                for (i in overrides) overrides.hasOwnProperty(i) && (fns[i] = opts[i] || this._defaults[i] || null);
                tp_inst._defaults = $.extend({}, this._defaults, inlineSettings, opts, overrides, {
                    evnts: fns,
                    timepicker: tp_inst
                }), tp_inst.amNames = $.map(tp_inst._defaults.amNames, function(e) {
                    return e.toUpperCase()
                }), tp_inst.pmNames = $.map(tp_inst._defaults.pmNames, function(e) {
                    return e.toUpperCase()
                }), tp_inst.support = detectSupport(tp_inst._defaults.timeFormat + (tp_inst._defaults.pickerTimeFormat ? tp_inst._defaults.pickerTimeFormat : "") + (tp_inst._defaults.altTimeFormat ? tp_inst._defaults.altTimeFormat : "")), "string" == typeof tp_inst._defaults.controlType ? ("slider" === tp_inst._defaults.controlType && "undefined" == typeof $.ui.slider && (tp_inst._defaults.controlType = "select"), tp_inst.control = tp_inst._controls[tp_inst._defaults.controlType]) : tp_inst.control = tp_inst._defaults.controlType;
                var timezoneList = [-720, -660, -600, -570, -540, -480, -420, -360, -300, -270, -240, -210, -180, -120, -60, 0, 60, 120, 180, 210, 240, 270, 300, 330, 345, 360, 390, 420, 480, 525, 540, 570, 600, 630, 660, 690, 720, 765, 780, 840];
                null !== tp_inst._defaults.timezoneList && (timezoneList = tp_inst._defaults.timezoneList);
                var tzl = timezoneList.length,
                    tzi = 0,
                    tzv = null;
                if (tzl > 0 && "object" != typeof timezoneList[0])
                    for (; tzl > tzi; tzi++) tzv = timezoneList[tzi], timezoneList[tzi] = {
                        value: tzv,
                        label: $.timepicker.timezoneOffsetString(tzv, tp_inst.support.iso8601)
                    };
                return tp_inst._defaults.timezoneList = timezoneList, tp_inst.timezone = null !== tp_inst._defaults.timezone ? $.timepicker.timezoneOffsetNumber(tp_inst._defaults.timezone) : -1 * (new Date).getTimezoneOffset(), tp_inst.hour = tp_inst._defaults.hour < tp_inst._defaults.hourMin ? tp_inst._defaults.hourMin : tp_inst._defaults.hour > tp_inst._defaults.hourMax ? tp_inst._defaults.hourMax : tp_inst._defaults.hour, tp_inst.minute = tp_inst._defaults.minute < tp_inst._defaults.minuteMin ? tp_inst._defaults.minuteMin : tp_inst._defaults.minute > tp_inst._defaults.minuteMax ? tp_inst._defaults.minuteMax : tp_inst._defaults.minute, tp_inst.second = tp_inst._defaults.second < tp_inst._defaults.secondMin ? tp_inst._defaults.secondMin : tp_inst._defaults.second > tp_inst._defaults.secondMax ? tp_inst._defaults.secondMax : tp_inst._defaults.second, tp_inst.millisec = tp_inst._defaults.millisec < tp_inst._defaults.millisecMin ? tp_inst._defaults.millisecMin : tp_inst._defaults.millisec > tp_inst._defaults.millisecMax ? tp_inst._defaults.millisecMax : tp_inst._defaults.millisec, tp_inst.microsec = tp_inst._defaults.microsec < tp_inst._defaults.microsecMin ? tp_inst._defaults.microsecMin : tp_inst._defaults.microsec > tp_inst._defaults.microsecMax ? tp_inst._defaults.microsecMax : tp_inst._defaults.microsec, tp_inst.ampm = "", tp_inst.$input = $input, tp_inst._defaults.altField && (tp_inst.$altInput = $(tp_inst._defaults.altField), tp_inst._defaults.altRedirectFocus === !0 && tp_inst.$altInput.css({
                    cursor: "pointer"
                }).focus(function() {
                    $input.trigger("focus")
                })), (0 === tp_inst._defaults.minDate || 0 === tp_inst._defaults.minDateTime) && (tp_inst._defaults.minDate = new Date), (0 === tp_inst._defaults.maxDate || 0 === tp_inst._defaults.maxDateTime) && (tp_inst._defaults.maxDate = new Date), void 0 !== tp_inst._defaults.minDate && tp_inst._defaults.minDate instanceof Date && (tp_inst._defaults.minDateTime = new Date(tp_inst._defaults.minDate.getTime())), void 0 !== tp_inst._defaults.minDateTime && tp_inst._defaults.minDateTime instanceof Date && (tp_inst._defaults.minDate = new Date(tp_inst._defaults.minDateTime.getTime())), void 0 !== tp_inst._defaults.maxDate && tp_inst._defaults.maxDate instanceof Date && (tp_inst._defaults.maxDateTime = new Date(tp_inst._defaults.maxDate.getTime())), void 0 !== tp_inst._defaults.maxDateTime && tp_inst._defaults.maxDateTime instanceof Date && (tp_inst._defaults.maxDate = new Date(tp_inst._defaults.maxDateTime.getTime())), tp_inst.$input.bind("focus", function() {
                    tp_inst._onFocus()
                }), tp_inst
            },
            _addTimePicker: function(e) {
                var t = $.trim(this.$altInput && this._defaults.altFieldTimeOnly ? this.$input.val() + " " + this.$altInput.val() : this.$input.val());
                this.timeDefined = this._parseTime(t), this._limitMinMaxDateTime(e, !1), this._injectTimePicker(), this._afterInject()
            },
            _parseTime: function(e, t) {
                if (this.inst || (this.inst = $.datepicker._getInst(this.$input[0])), t || !this._defaults.timeOnly) {
                    var i = $.datepicker._get(this.inst, "dateFormat");
                    try {
                        var s = parseDateTimeInternal(i, this._defaults.timeFormat, e, $.datepicker._getFormatConfig(this.inst), this._defaults);
                        if (!s.timeObj) return !1;
                        $.extend(this, s.timeObj)
                    } catch (n) {
                        return $.timepicker.log("Error parsing the date/time string: " + n + "\ndate/time string = " + e + "\ntimeFormat = " + this._defaults.timeFormat + "\ndateFormat = " + i), !1
                    }
                    return !0
                }
                var a = $.datepicker.parseTime(this._defaults.timeFormat, e, this._defaults);
                return a ? ($.extend(this, a), !0) : !1
            },
            _afterInject: function() {
                var e = this.inst.settings;
                $.isFunction(e.afterInject) && e.afterInject.call(this)
            },
            _injectTimePicker: function() {
                var e = this.inst.dpDiv,
                    t = this.inst.settings,
                    i = this,
                    s = "",
                    n = "",
                    a = null,
                    r = {},
                    l = {},
                    o = null,
                    u = 0,
                    c = 0;
                if (0 === e.find("div.ui-timepicker-div").length && t.showTimepicker) {
                    var m = " ui_tpicker_unit_hide",
                        d = '<div class="ui-timepicker-div' + (t.isRTL ? " ui-timepicker-rtl" : "") + (t.oneLine && "select" === t.controlType ? " ui-timepicker-oneLine" : "") + '"><dl><dt class="ui_tpicker_time_label' + (t.showTime ? "" : m) + '">' + t.timeText + '</dt><dd class="ui_tpicker_time ' + (t.showTime ? "" : m) + '"><input class="ui_tpicker_time_input" ' + (t.timeInput ? "" : "disabled") + "/></dd>";
                    for (u = 0, c = this.units.length; c > u; u++) {
                        if (s = this.units[u], n = s.substr(0, 1).toUpperCase() + s.substr(1), a = null !== t["show" + n] ? t["show" + n] : this.support[s], r[s] = parseInt(t[s + "Max"] - (t[s + "Max"] - t[s + "Min"]) % t["step" + n], 10), l[s] = 0, d += '<dt class="ui_tpicker_' + s + "_label" + (a ? "" : m) + '">' + t[s + "Text"] + '</dt><dd class="ui_tpicker_' + s + (a ? "" : m) + '"><div class="ui_tpicker_' + s + "_slider" + (a ? "" : m) + '"></div>', a && t[s + "Grid"] > 0) {
                            if (d += '<div style="padding-left: 1px"><table class="ui-tpicker-grid-label"><tr>', "hour" === s)
                                for (var p = t[s + "Min"]; p <= r[s]; p += parseInt(t[s + "Grid"], 10)) {
                                    l[s]++;
                                    var h = $.datepicker.formatTime(this.support.ampm ? "hht" : "HH", {
                                        hour: p
                                    }, t);
                                    d += '<td data-for="' + s + '">' + h + "</td>"
                                } else
                                    for (var f = t[s + "Min"]; f <= r[s]; f += parseInt(t[s + "Grid"], 10)) l[s]++, d += '<td data-for="' + s + '">' + (10 > f ? "0" : "") + f + "</td>";
                            d += "</tr></table></div>"
                        }
                        d += "</dd>"
                    }
                    var _ = null !== t.showTimezone ? t.showTimezone : this.support.timezone;
                    d += '<dt class="ui_tpicker_timezone_label' + (_ ? "" : m) + '">' + t.timezoneText + "</dt>", d += '<dd class="ui_tpicker_timezone' + (_ ? "" : m) + '"></dd>', d += "</dl></div>";
                    var g = $(d);
                    for (t.timeOnly === !0 && (g.prepend('<div class="ui-widget-header ui-helper-clearfix ui-corner-all"><div class="ui-datepicker-title">' + t.timeOnlyTitle + "</div></div>"), e.find(".ui-datepicker-header, .ui-datepicker-calendar").hide()), u = 0, c = i.units.length; c > u; u++) s = i.units[u], n = s.substr(0, 1).toUpperCase() + s.substr(1), a = null !== t["show" + n] ? t["show" + n] : this.support[s], i[s + "_slider"] = i.control.create(i, g.find(".ui_tpicker_" + s + "_slider"), s, i[s], t[s + "Min"], r[s], t["step" + n]), a && t[s + "Grid"] > 0 && (o = 100 * l[s] * t[s + "Grid"] / (r[s] - t[s + "Min"]), g.find(".ui_tpicker_" + s + " table").css({
                        width: o + "%",
                        marginLeft: t.isRTL ? "0" : o / (-2 * l[s]) + "%",
                        marginRight: t.isRTL ? o / (-2 * l[s]) + "%" : "0",
                        borderCollapse: "collapse"
                    }).find("td").click(function(e) {
                        var t = $(this),
                            n = t.html(),
                            a = parseInt(n.replace(/[^0-9]/g), 10),
                            r = n.replace(/[^apm]/gi),
                            l = t.data("for");
                        "hour" === l && (-1 !== r.indexOf("p") && 12 > a ? a += 12 : -1 !== r.indexOf("a") && 12 === a && (a = 0)), i.control.value(i, i[l + "_slider"], s, a), i._onTimeChange(), i._onSelectHandler()
                    }).css({
                        cursor: "pointer",
                        width: 100 / l[s] + "%",
                        textAlign: "center",
                        overflow: "hidden"
                    }));
                    if (this.timezone_select = g.find(".ui_tpicker_timezone").append("<select></select>").find("select"), $.fn.append.apply(this.timezone_select, $.map(t.timezoneList, function(e, t) {
                            return $("<option />").val("object" == typeof e ? e.value : e).text("object" == typeof e ? e.label : e)
                        })), "undefined" != typeof this.timezone && null !== this.timezone && "" !== this.timezone) {
                        var M = -1 * new Date(this.inst.selectedYear, this.inst.selectedMonth, this.inst.selectedDay, 12).getTimezoneOffset();
                        M === this.timezone ? selectLocalTimezone(i) : this.timezone_select.val(this.timezone)
                    } else "undefined" != typeof this.hour && null !== this.hour && "" !== this.hour ? this.timezone_select.val(t.timezone) : selectLocalTimezone(i);
                    this.timezone_select.change(function() {
                        i._onTimeChange(), i._onSelectHandler(), i._afterInject()
                    });
                    var v = e.find(".ui-datepicker-buttonpane");
                    if (v.length ? v.before(g) : e.append(g), this.$timeObj = g.find(".ui_tpicker_time_input"), this.$timeObj.change(function() {
                            var e = i.inst.settings.timeFormat,
                                t = $.datepicker.parseTime(e, this.value),
                                s = new Date;
                            t ? (s.setHours(t.hour), s.setMinutes(t.minute), s.setSeconds(t.second), $.datepicker._setTime(i.inst, s)) : (this.value = i.formattedTime, this.blur())
                        }), null !== this.inst) {
                        var k = this.timeDefined;
                        this._onTimeChange(), this.timeDefined = k
                    }
                    if (this._defaults.addSliderAccess) {
                        var T = this._defaults.sliderAccessArgs,
                            D = this._defaults.isRTL;
                        T.isRTL = D, setTimeout(function() {
                            if (0 === g.find(".ui-slider-access").length) {
                                g.find(".ui-slider:visible").sliderAccess(T);
                                var e = g.find(".ui-slider-access:eq(0)").outerWidth(!0);
                                e && g.find("table:visible").each(function() {
                                    var t = $(this),
                                        i = t.outerWidth(),
                                        s = t.css(D ? "marginRight" : "marginLeft").toString().replace("%", ""),
                                        n = i - e,
                                        a = s * n / i + "%",
                                        r = {
                                            width: n,
                                            marginRight: 0,
                                            marginLeft: 0
                                        };
                                    r[D ? "marginRight" : "marginLeft"] = a, t.css(r)
                                })
                            }
                        }, 10)
                    }
                    i._limitMinMaxDateTime(this.inst, !0)
                }
            },
            _limitMinMaxDateTime: function(e, t) {
                var i = this._defaults,
                    s = new Date(e.selectedYear, e.selectedMonth, e.selectedDay);
                if (this._defaults.showTimepicker) {
                    if (null !== $.datepicker._get(e, "minDateTime") && void 0 !== $.datepicker._get(e, "minDateTime") && s) {
                        var n = $.datepicker._get(e, "minDateTime"),
                            a = new Date(n.getFullYear(), n.getMonth(), n.getDate(), 0, 0, 0, 0);
                        (null === this.hourMinOriginal || null === this.minuteMinOriginal || null === this.secondMinOriginal || null === this.millisecMinOriginal || null === this.microsecMinOriginal) && (this.hourMinOriginal = i.hourMin, this.minuteMinOriginal = i.minuteMin, this.secondMinOriginal = i.secondMin, this.millisecMinOriginal = i.millisecMin, this.microsecMinOriginal = i.microsecMin), e.settings.timeOnly || a.getTime() === s.getTime() ? (this._defaults.hourMin = n.getHours(), this.hour <= this._defaults.hourMin ? (this.hour = this._defaults.hourMin, this._defaults.minuteMin = n.getMinutes(), this.minute <= this._defaults.minuteMin ? (this.minute = this._defaults.minuteMin, this._defaults.secondMin = n.getSeconds(), this.second <= this._defaults.secondMin ? (this.second = this._defaults.secondMin, this._defaults.millisecMin = n.getMilliseconds(), this.millisec <= this._defaults.millisecMin ? (this.millisec = this._defaults.millisecMin, this._defaults.microsecMin = n.getMicroseconds()) : (this.microsec < this._defaults.microsecMin && (this.microsec = this._defaults.microsecMin), this._defaults.microsecMin = this.microsecMinOriginal)) : (this._defaults.millisecMin = this.millisecMinOriginal, this._defaults.microsecMin = this.microsecMinOriginal)) : (this._defaults.secondMin = this.secondMinOriginal, this._defaults.millisecMin = this.millisecMinOriginal, this._defaults.microsecMin = this.microsecMinOriginal)) : (this._defaults.minuteMin = this.minuteMinOriginal, this._defaults.secondMin = this.secondMinOriginal, this._defaults.millisecMin = this.millisecMinOriginal, this._defaults.microsecMin = this.microsecMinOriginal)) : (this._defaults.hourMin = this.hourMinOriginal, this._defaults.minuteMin = this.minuteMinOriginal, this._defaults.secondMin = this.secondMinOriginal, this._defaults.millisecMin = this.millisecMinOriginal, this._defaults.microsecMin = this.microsecMinOriginal)
                    }
                    if (null !== $.datepicker._get(e, "maxDateTime") && void 0 !== $.datepicker._get(e, "maxDateTime") && s) {
                        var r = $.datepicker._get(e, "maxDateTime"),
                            l = new Date(r.getFullYear(), r.getMonth(), r.getDate(), 0, 0, 0, 0);
                        (null === this.hourMaxOriginal || null === this.minuteMaxOriginal || null === this.secondMaxOriginal || null === this.millisecMaxOriginal) && (this.hourMaxOriginal = i.hourMax, this.minuteMaxOriginal = i.minuteMax, this.secondMaxOriginal = i.secondMax, this.millisecMaxOriginal = i.millisecMax, this.microsecMaxOriginal = i.microsecMax), e.settings.timeOnly || l.getTime() === s.getTime() ? (this._defaults.hourMax = r.getHours(), this.hour >= this._defaults.hourMax ? (this.hour = this._defaults.hourMax, this._defaults.minuteMax = r.getMinutes(), this.minute >= this._defaults.minuteMax ? (this.minute = this._defaults.minuteMax, this._defaults.secondMax = r.getSeconds(), this.second >= this._defaults.secondMax ? (this.second = this._defaults.secondMax, this._defaults.millisecMax = r.getMilliseconds(), this.millisec >= this._defaults.millisecMax ? (this.millisec = this._defaults.millisecMax, this._defaults.microsecMax = r.getMicroseconds()) : (this.microsec > this._defaults.microsecMax && (this.microsec = this._defaults.microsecMax), this._defaults.microsecMax = this.microsecMaxOriginal)) : (this._defaults.millisecMax = this.millisecMaxOriginal, this._defaults.microsecMax = this.microsecMaxOriginal)) : (this._defaults.secondMax = this.secondMaxOriginal, this._defaults.millisecMax = this.millisecMaxOriginal, this._defaults.microsecMax = this.microsecMaxOriginal)) : (this._defaults.minuteMax = this.minuteMaxOriginal, this._defaults.secondMax = this.secondMaxOriginal, this._defaults.millisecMax = this.millisecMaxOriginal, this._defaults.microsecMax = this.microsecMaxOriginal)) : (this._defaults.hourMax = this.hourMaxOriginal, this._defaults.minuteMax = this.minuteMaxOriginal, this._defaults.secondMax = this.secondMaxOriginal, this._defaults.millisecMax = this.millisecMaxOriginal, this._defaults.microsecMax = this.microsecMaxOriginal)
                    }
                    if (null !== e.settings.minTime) {
                        var o = new Date("01/01/1970 " + e.settings.minTime);
                        this.hour < o.getHours() ? (this.hour = this._defaults.hourMin = o.getHours(), this.minute = this._defaults.minuteMin = o.getMinutes()) : this.hour === o.getHours() && this.minute < o.getMinutes() ? this.minute = this._defaults.minuteMin = o.getMinutes() : this._defaults.hourMin < o.getHours() ? (this._defaults.hourMin = o.getHours(), this._defaults.minuteMin = o.getMinutes()) : this._defaults.hourMin === o.getHours() === this.hour && this._defaults.minuteMin < o.getMinutes() ? this._defaults.minuteMin = o.getMinutes() : this._defaults.minuteMin = 0
                    }
                    if (null !== e.settings.maxTime) {
                        var u = new Date("01/01/1970 " + e.settings.maxTime);
                        this.hour > u.getHours() ? (this.hour = this._defaults.hourMax = u.getHours(), this.minute = this._defaults.minuteMax = u.getMinutes()) : this.hour === u.getHours() && this.minute > u.getMinutes() ? this.minute = this._defaults.minuteMax = u.getMinutes() : this._defaults.hourMax > u.getHours() ? (this._defaults.hourMax = u.getHours(), this._defaults.minuteMax = u.getMinutes()) : this._defaults.hourMax === u.getHours() === this.hour && this._defaults.minuteMax > u.getMinutes() ? this._defaults.minuteMax = u.getMinutes() : this._defaults.minuteMax = 59
                    }
                    if (void 0 !== t && t === !0) {
                        var c = parseInt(this._defaults.hourMax - (this._defaults.hourMax - this._defaults.hourMin) % this._defaults.stepHour, 10),
                            m = parseInt(this._defaults.minuteMax - (this._defaults.minuteMax - this._defaults.minuteMin) % this._defaults.stepMinute, 10),
                            d = parseInt(this._defaults.secondMax - (this._defaults.secondMax - this._defaults.secondMin) % this._defaults.stepSecond, 10),
                            p = parseInt(this._defaults.millisecMax - (this._defaults.millisecMax - this._defaults.millisecMin) % this._defaults.stepMillisec, 10),
                            h = parseInt(this._defaults.microsecMax - (this._defaults.microsecMax - this._defaults.microsecMin) % this._defaults.stepMicrosec, 10);
                        this.hour_slider && (this.control.options(this, this.hour_slider, "hour", {
                            min: this._defaults.hourMin,
                            max: c,
                            step: this._defaults.stepHour
                        }), this.control.value(this, this.hour_slider, "hour", this.hour - this.hour % this._defaults.stepHour)), this.minute_slider && (this.control.options(this, this.minute_slider, "minute", {
                            min: this._defaults.minuteMin,
                            max: m,
                            step: this._defaults.stepMinute
                        }), this.control.value(this, this.minute_slider, "minute", this.minute - this.minute % this._defaults.stepMinute)), this.second_slider && (this.control.options(this, this.second_slider, "second", {
                            min: this._defaults.secondMin,
                            max: d,
                            step: this._defaults.stepSecond
                        }), this.control.value(this, this.second_slider, "second", this.second - this.second % this._defaults.stepSecond)), this.millisec_slider && (this.control.options(this, this.millisec_slider, "millisec", {
                            min: this._defaults.millisecMin,
                            max: p,
                            step: this._defaults.stepMillisec
                        }), this.control.value(this, this.millisec_slider, "millisec", this.millisec - this.millisec % this._defaults.stepMillisec)), this.microsec_slider && (this.control.options(this, this.microsec_slider, "microsec", {
                            min: this._defaults.microsecMin,
                            max: h,
                            step: this._defaults.stepMicrosec
                        }), this.control.value(this, this.microsec_slider, "microsec", this.microsec - this.microsec % this._defaults.stepMicrosec))
                    }
                }
            },
            _onTimeChange: function() {
                if (this._defaults.showTimepicker) {
                    var e = this.hour_slider ? this.control.value(this, this.hour_slider, "hour") : !1,
                        t = this.minute_slider ? this.control.value(this, this.minute_slider, "minute") : !1,
                        i = this.second_slider ? this.control.value(this, this.second_slider, "second") : !1,
                        s = this.millisec_slider ? this.control.value(this, this.millisec_slider, "millisec") : !1,
                        n = this.microsec_slider ? this.control.value(this, this.microsec_slider, "microsec") : !1,
                        a = this.timezone_select ? this.timezone_select.val() : !1,
                        r = this._defaults,
                        l = r.pickerTimeFormat || r.timeFormat,
                        o = r.pickerTimeSuffix || r.timeSuffix;
                    "object" == typeof e && (e = !1), "object" == typeof t && (t = !1), "object" == typeof i && (i = !1), "object" == typeof s && (s = !1), "object" == typeof n && (n = !1), "object" == typeof a && (a = !1), e !== !1 && (e = parseInt(e, 10)), t !== !1 && (t = parseInt(t, 10)), i !== !1 && (i = parseInt(i, 10)), s !== !1 && (s = parseInt(s, 10)), n !== !1 && (n = parseInt(n, 10)), a !== !1 && (a = a.toString());
                    var u = r[12 > e ? "amNames" : "pmNames"][0],
                        c = e !== parseInt(this.hour, 10) || t !== parseInt(this.minute, 10) || i !== parseInt(this.second, 10) || s !== parseInt(this.millisec, 10) || n !== parseInt(this.microsec, 10) || this.ampm.length > 0 && 12 > e != (-1 !== $.inArray(this.ampm.toUpperCase(), this.amNames)) || null !== this.timezone && a !== this.timezone.toString();
                    if (c && (e !== !1 && (this.hour = e), t !== !1 && (this.minute = t), i !== !1 && (this.second = i), s !== !1 && (this.millisec = s), n !== !1 && (this.microsec = n), a !== !1 && (this.timezone = a), this.inst || (this.inst = $.datepicker._getInst(this.$input[0])), this._limitMinMaxDateTime(this.inst, !0)), this.support.ampm && (this.ampm = u), this.formattedTime = $.datepicker.formatTime(r.timeFormat, this, r), this.$timeObj && (l === r.timeFormat ? this.$timeObj.val(this.formattedTime + o) : this.$timeObj.val($.datepicker.formatTime(l, this, r) + o), this.$timeObj[0].setSelectionRange)) {
                        var m = this.$timeObj[0].selectionStart,
                            d = this.$timeObj[0].selectionEnd;
                        this.$timeObj[0].setSelectionRange(m, d)
                    }
                    this.timeDefined = !0, c && this._updateDateTime()
                }
            },
            _onSelectHandler: function() {
                var e = this._defaults.onSelect || this.inst.settings.onSelect,
                    t = this.$input ? this.$input[0] : null;
                e && t && e.apply(t, [this.formattedDateTime, this])
            },
            _updateDateTime: function(e) {
                e = this.inst || e;
                var t = e.currentYear > 0 ? new Date(e.currentYear, e.currentMonth, e.currentDay) : new Date(e.selectedYear, e.selectedMonth, e.selectedDay),
                    i = $.datepicker._daylightSavingAdjust(t),
                    s = $.datepicker._get(e, "dateFormat"),
                    n = $.datepicker._getFormatConfig(e),
                    a = null !== i && this.timeDefined;
                this.formattedDate = $.datepicker.formatDate(s, null === i ? new Date : i, n);
                var r = this.formattedDate;
                if ("" === e.lastVal && (e.currentYear = e.selectedYear, e.currentMonth = e.selectedMonth, e.currentDay = e.selectedDay), this._defaults.timeOnly === !0 && this._defaults.timeOnlyShowDate === !1 ? r = this.formattedTime : (this._defaults.timeOnly !== !0 && (this._defaults.alwaysSetTime || a) || this._defaults.timeOnly === !0 && this._defaults.timeOnlyShowDate === !0) && (r += this._defaults.divider + this.formattedTime + this._defaults.timeSuffix), this.formattedDateTime = r, this._defaults.showTimepicker)
                    if (this.$altInput && this._defaults.timeOnly === !1 && this._defaults.altFieldTimeOnly === !0) this.$altInput.val(this.formattedTime), this.$input.val(this.formattedDate);
                    else if (this.$altInput) {
                    this.$input.val(r);
                    var l = "",
                        o = null !== this._defaults.altdivider ? this._defaults.altdivider : this._defaults.divider,
                        u = null !== this._defaults.altTimeSuffix ? this._defaults.altTimeSuffix : this._defaults.timeSuffix;
                    this._defaults.timeOnly || (l = this._defaults.altFormat ? $.datepicker.formatDate(this._defaults.altFormat, null === i ? new Date : i, n) : this.formattedDate, l && (l += o)), l += null !== this._defaults.altTimeFormat ? $.datepicker.formatTime(this._defaults.altTimeFormat, this, this._defaults) + u : this.formattedTime + u, this.$altInput.val(l)
                } else this.$input.val(r);
                else this.$input.val(this.formattedDate);
                this.$input.trigger("change")
            },
            _onFocus: function() {
                if (!this.$input.val() && this._defaults.defaultValue) {
                    this.$input.val(this._defaults.defaultValue);
                    var e = $.datepicker._getInst(this.$input.get(0)),
                        t = $.datepicker._get(e, "timepicker");
                    if (t && t._defaults.timeOnly && e.input.val() !== e.lastVal) try {
                        $.datepicker._updateDatepicker(e)
                    } catch (i) {
                        $.timepicker.log(i)
                    }
                }
            },
            _controls: {
                slider: {
                    create: function(e, t, i, s, n, a, r) {
                        var l = e._defaults.isRTL;
                        return t.prop("slide", null).slider({
                            orientation: "horizontal",
                            value: l ? -1 * s : s,
                            min: l ? -1 * a : n,
                            max: l ? -1 * n : a,
                            step: r,
                            slide: function(t, s) {
                                e.control.value(e, $(this), i, l ? -1 * s.value : s.value), e._onTimeChange()
                            },
                            stop: function(t, i) {
                                e._onSelectHandler()
                            }
                        })
                    },
                    options: function(e, t, i, s, n) {
                        if (e._defaults.isRTL) {
                            if ("string" == typeof s) return "min" === s || "max" === s ? void 0 !== n ? t.slider(s, -1 * n) : Math.abs(t.slider(s)) : t.slider(s);
                            var a = s.min,
                                r = s.max;
                            return s.min = s.max = null, void 0 !== a && (s.max = -1 * a), void 0 !== r && (s.min = -1 * r), t.slider(s)
                        }
                        return "string" == typeof s && void 0 !== n ? t.slider(s, n) : t.slider(s)
                    },
                    value: function(e, t, i, s) {
                        return e._defaults.isRTL ? void 0 !== s ? t.slider("value", -1 * s) : Math.abs(t.slider("value")) : void 0 !== s ? t.slider("value", s) : t.slider("value")
                    }
                },
                select: {
                    create: function(e, t, i, s, n, a, r) {
                        for (var l = '<select class="ui-timepicker-select ui-state-default ui-corner-all" data-unit="' + i + '" data-min="' + n + '" data-max="' + a + '" data-step="' + r + '">', o = e._defaults.pickerTimeFormat || e._defaults.timeFormat, u = n; a >= u; u += r) l += '<option value="' + u + '"' + (u === s ? " selected" : "") + ">", l += "hour" === i ? $.datepicker.formatTime($.trim(o.replace(/[^ht ]/gi, "")), {
                            hour: u
                        }, e._defaults) : "millisec" === i || "microsec" === i || u >= 10 ? u : "0" + u.toString(), l += "</option>";
                        return l += "</select>", t.children("select").remove(), $(l).appendTo(t).change(function(t) {
                            e._onTimeChange(), e._onSelectHandler(), e._afterInject()
                        }), t
                    },
                    options: function(e, t, i, s, n) {
                        var a = {},
                            r = t.children("select");
                        if ("string" == typeof s) {
                            if (void 0 === n) return r.data(s);
                            a[s] = n
                        } else a = s;
                        return e.control.create(e, t, r.data("unit"), r.val(), a.min >= 0 ? a.min : r.data("min"), a.max || r.data("max"), a.step || r.data("step"))
                    },
                    value: function(e, t, i, s) {
                        var n = t.children("select");
                        return void 0 !== s ? n.val(s) : n.val()
                    }
                }
            }
        }), $.fn.extend({
            timepicker: function(e) {
                e = e || {};
                var t = Array.prototype.slice.call(arguments);
                return "object" == typeof e && (t[0] = $.extend(e, {
                    timeOnly: !0
                })), $(this).each(function() {
                    $.fn.datetimepicker.apply($(this), t)
                })
            },
            datetimepicker: function(e) {
                e = e || {};
                var t = arguments;
                return "string" == typeof e ? "getDate" === e || "option" === e && 2 === t.length && "string" == typeof t[1] ? $.fn.datepicker.apply($(this[0]), t) : this.each(function() {
                    var e = $(this);
                    e.datepicker.apply(e, t)
                }) : this.each(function() {
                    var t = $(this);
                    t.datepicker($.timepicker._newInst(t, e)._defaults)
                })
            }
        }), $.datepicker.parseDateTime = function(e, t, i, s, n) {
            var a = parseDateTimeInternal(e, t, i, s, n);
            if (a.timeObj) {
                var r = a.timeObj;
                a.date.setHours(r.hour, r.minute, r.second, r.millisec), a.date.setMicroseconds(r.microsec)
            }
            return a.date
        }, $.datepicker.parseTime = function(e, t, i) {
            var s = extendRemove(extendRemove({}, $.timepicker._defaults), i || {}),
                n = (-1 !== e.replace(/\'.*?\'/g, "").indexOf("Z"), function(e, t, i) {
                    var s, n = function(e, t) {
                            var i = [];
                            return e && $.merge(i, e), t && $.merge(i, t), i = $.map(i, function(e) {
                                return e.replace(/[.*+?|()\[\]{}\\]/g, "\\$&")
                            }), "(" + i.join("|") + ")?"
                        },
                        a = function(e) {
                            var t = e.toLowerCase().match(/(h{1,2}|m{1,2}|s{1,2}|l{1}|c{1}|t{1,2}|z|'.*?')/g),
                                i = {
                                    h: -1,
                                    m: -1,
                                    s: -1,
                                    l: -1,
                                    c: -1,
                                    t: -1,
                                    z: -1
                                };
                            if (t)
                                for (var s = 0; s < t.length; s++) - 1 === i[t[s].toString().charAt(0)] && (i[t[s].toString().charAt(0)] = s + 1);
                            return i
                        },
                        r = "^" + e.toString().replace(/([hH]{1,2}|mm?|ss?|[tT]{1,2}|[zZ]|[lc]|'.*?')/g, function(e) {
                            var t = e.length;
                            switch (e.charAt(0).toLowerCase()) {
                                case "h":
                                    return 1 === t ? "(\\d?\\d)" : "(\\d{" + t + "})";
                                case "m":
                                    return 1 === t ? "(\\d?\\d)" : "(\\d{" + t + "})";
                                case "s":
                                    return 1 === t ? "(\\d?\\d)" : "(\\d{" + t + "})";
                                case "l":
                                    return "(\\d?\\d?\\d)";
                                case "c":
                                    return "(\\d?\\d?\\d)";
                                case "z":
                                    return "(z|[-+]\\d\\d:?\\d\\d|\\S+)?";
                                case "t":
                                    return n(i.amNames, i.pmNames);
                                default:
                                    return "(" + e.replace(/\'/g, "").replace(/(\.|\$|\^|\\|\/|\(|\)|\[|\]|\?|\+|\*)/g, function(e) {
                                        return "\\" + e
                                    }) + ")?"
                            }
                        }).replace(/\s/g, "\\s?") + i.timeSuffix + "$",
                        l = a(e),
                        o = "";
                    s = t.match(new RegExp(r, "i"));
                    var u = {
                        hour: 0,
                        minute: 0,
                        second: 0,
                        millisec: 0,
                        microsec: 0
                    };
                    return s ? (-1 !== l.t && (void 0 === s[l.t] || 0 === s[l.t].length ? (o = "", u.ampm = "") : (o = -1 !== $.inArray(s[l.t].toUpperCase(), $.map(i.amNames, function(e, t) {
                        return e.toUpperCase()
                    })) ? "AM" : "PM", u.ampm = i["AM" === o ? "amNames" : "pmNames"][0])), -1 !== l.h && ("AM" === o && "12" === s[l.h] ? u.hour = 0 : "PM" === o && "12" !== s[l.h] ? u.hour = parseInt(s[l.h], 10) + 12 : u.hour = Number(s[l.h])), -1 !== l.m && (u.minute = Number(s[l.m])), -1 !== l.s && (u.second = Number(s[l.s])), -1 !== l.l && (u.millisec = Number(s[l.l])), -1 !== l.c && (u.microsec = Number(s[l.c])), -1 !== l.z && void 0 !== s[l.z] && (u.timezone = $.timepicker.timezoneOffsetNumber(s[l.z])), u) : !1
                }),
                a = function(e, t, i) {
                    try {
                        var s = new Date("2012-01-01 " + t);
                        if (isNaN(s.getTime()) && (s = new Date("2012-01-01T" + t), isNaN(s.getTime()) && (s = new Date("01/01/2012 " + t), isNaN(s.getTime())))) throw "Unable to parse time with native Date: " + t;
                        return {
                            hour: s.getHours(),
                            minute: s.getMinutes(),
                            second: s.getSeconds(),
                            millisec: s.getMilliseconds(),
                            microsec: s.getMicroseconds(),
                            timezone: -1 * s.getTimezoneOffset()
                        }
                    } catch (a) {
                        try {
                            return n(e, t, i)
                        } catch (r) {
                            $.timepicker.log("Unable to parse \ntimeString: " + t + "\ntimeFormat: " + e)
                        }
                    }
                    return !1
                };
            return "function" == typeof s.parse ? s.parse(e, t, s) : "loose" === s.parse ? a(e, t, s) : n(e, t, s)
        }, $.datepicker.formatTime = function(e, t, i) {
            i = i || {}, i = $.extend({}, $.timepicker._defaults, i), t = $.extend({
                hour: 0,
                minute: 0,
                second: 0,
                millisec: 0,
                microsec: 0,
                timezone: null
            }, t);
            var s = e,
                n = i.amNames[0],
                a = parseInt(t.hour, 10);
            return a > 11 && (n = i.pmNames[0]), s = s.replace(/(?:HH?|hh?|mm?|ss?|[tT]{1,2}|[zZ]|[lc]|'.*?')/g, function(e) {
                switch (e) {
                    case "HH":
                        return ("0" + a).slice(-2);
                    case "H":
                        return a;
                    case "hh":
                        return ("0" + convert24to12(a)).slice(-2);
                    case "h":
                        return convert24to12(a);
                    case "mm":
                        return ("0" + t.minute).slice(-2);
                    case "m":
                        return t.minute;
                    case "ss":
                        return ("0" + t.second).slice(-2);
                    case "s":
                        return t.second;
                    case "l":
                        return ("00" + t.millisec).slice(-3);
                    case "c":
                        return ("00" + t.microsec).slice(-3);
                    case "z":
                        return $.timepicker.timezoneOffsetString(null === t.timezone ? i.timezone : t.timezone, !1);
                    case "Z":
                        return $.timepicker.timezoneOffsetString(null === t.timezone ? i.timezone : t.timezone, !0);
                    case "T":
                        return n.charAt(0).toUpperCase();
                    case "TT":
                        return n.toUpperCase();
                    case "t":
                        return n.charAt(0).toLowerCase();
                    case "tt":
                        return n.toLowerCase();
                    default:
                        return e.replace(/'/g, "")
                }
            })
        }, $.datepicker._base_selectDate = $.datepicker._selectDate, $.datepicker._selectDate = function(e, t) {
            var i, s = this._getInst($(e)[0]),
                n = this._get(s, "timepicker");
            n && s.settings.showTimepicker ? (n._limitMinMaxDateTime(s, !0), i = s.inline, s.inline = s.stay_open = !0, this._base_selectDate(e, t), s.inline = i, s.stay_open = !1, this._notifyChange(s), this._updateDatepicker(s)) : this._base_selectDate(e, t)
        }, $.datepicker._base_updateDatepicker = $.datepicker._updateDatepicker, $.datepicker._updateDatepicker = function(e) {
            var t = e.input[0];
            if (!($.datepicker._curInst && $.datepicker._curInst !== e && $.datepicker._datepickerShowing && $.datepicker._lastInput !== t || "boolean" == typeof e.stay_open && e.stay_open !== !1)) {
                this._base_updateDatepicker(e);
                var i = this._get(e, "timepicker");
                i && i._addTimePicker(e)
            }
        }, $.datepicker._base_doKeyPress = $.datepicker._doKeyPress, $.datepicker._doKeyPress = function(e) {
            var t = $.datepicker._getInst(e.target),
                i = $.datepicker._get(t, "timepicker");
            if (i && $.datepicker._get(t, "constrainInput")) {
                var s = i.support.ampm,
                    n = null !== i._defaults.showTimezone ? i._defaults.showTimezone : i.support.timezone,
                    a = $.datepicker._possibleChars($.datepicker._get(t, "dateFormat")),
                    r = i._defaults.timeFormat.toString().replace(/[hms]/g, "").replace(/TT/g, s ? "APM" : "").replace(/Tt/g, s ? "AaPpMm" : "").replace(/tT/g, s ? "AaPpMm" : "").replace(/T/g, s ? "AP" : "").replace(/tt/g, s ? "apm" : "").replace(/t/g, s ? "ap" : "") + " " + i._defaults.divider + i._defaults.timeSuffix + (n ? i._defaults.timezoneList.join("") : "") + i._defaults.amNames.join("") + i._defaults.pmNames.join("") + a,
                    l = String.fromCharCode(void 0 === e.charCode ? e.keyCode : e.charCode);
                return e.ctrlKey || " " > l || !a || r.indexOf(l) > -1
            }
            return $.datepicker._base_doKeyPress(e)
        }, $.datepicker._base_updateAlternate = $.datepicker._updateAlternate, $.datepicker._updateAlternate = function(e) {
            var t = this._get(e, "timepicker");
            if (t) {
                var i = t._defaults.altField;
                if (i) {
                    var s = (t._defaults.altFormat || t._defaults.dateFormat, this._getDate(e)),
                        n = $.datepicker._getFormatConfig(e),
                        a = "",
                        r = t._defaults.altdivider ? t._defaults.altdivider : t._defaults.divider,
                        l = t._defaults.altTimeSuffix ? t._defaults.altTimeSuffix : t._defaults.timeSuffix,
                        o = null !== t._defaults.altTimeFormat ? t._defaults.altTimeFormat : t._defaults.timeFormat;
                    a += $.datepicker.formatTime(o, t, t._defaults) + l, t._defaults.timeOnly || t._defaults.altFieldTimeOnly || null === s || (a = t._defaults.altFormat ? $.datepicker.formatDate(t._defaults.altFormat, s, n) + r + a : t.formattedDate + r + a), $(i).val(e.input.val() ? a : "")
                }
            } else $.datepicker._base_updateAlternate(e)
        }, $.datepicker._base_doKeyUp = $.datepicker._doKeyUp, $.datepicker._doKeyUp = function(e) {
            var t = $.datepicker._getInst(e.target),
                i = $.datepicker._get(t, "timepicker");
            if (i && i._defaults.timeOnly && t.input.val() !== t.lastVal) try {
                $.datepicker._updateDatepicker(t)
            } catch (s) {
                $.timepicker.log(s)
            }
            return $.datepicker._base_doKeyUp(e)
        }, $.datepicker._base_gotoToday = $.datepicker._gotoToday, $.datepicker._gotoToday = function(e) {
            var t = this._getInst($(e)[0]);
            this._base_gotoToday(e);
            var i = this._get(t, "timepicker");
            if (i) {
                var s = $.timepicker.timezoneOffsetNumber(i.timezone),
                    n = new Date;
                n.setMinutes(n.getMinutes() + n.getTimezoneOffset() + parseInt(s, 10)), this._setTime(t, n), this._setDate(t, n), i._onSelectHandler()
            }
        }, $.datepicker._disableTimepickerDatepicker = function(e) {
            var t = this._getInst(e);
            if (t) {
                var i = this._get(t, "timepicker");
                $(e).datepicker("getDate"), i && (t.settings.showTimepicker = !1, i._defaults.showTimepicker = !1, i._updateDateTime(t))
            }
        }, $.datepicker._enableTimepickerDatepicker = function(e) {
            var t = this._getInst(e);
            if (t) {
                var i = this._get(t, "timepicker");
                $(e).datepicker("getDate"), i && (t.settings.showTimepicker = !0, i._defaults.showTimepicker = !0, i._addTimePicker(t), i._updateDateTime(t))
            }
        }, $.datepicker._setTime = function(e, t) {
            var i = this._get(e, "timepicker");
            if (i) {
                var s = i._defaults;
                i.hour = t ? t.getHours() : s.hour, i.minute = t ? t.getMinutes() : s.minute, i.second = t ? t.getSeconds() : s.second, i.millisec = t ? t.getMilliseconds() : s.millisec, i.microsec = t ? t.getMicroseconds() : s.microsec, i._limitMinMaxDateTime(e, !0), i._onTimeChange(), i._updateDateTime(e)
            }
        }, $.datepicker._setTimeDatepicker = function(e, t, i) {
            var s = this._getInst(e);
            if (s) {
                var n = this._get(s, "timepicker");
                if (n) {
                    this._setDateFromField(s);
                    var a;
                    t && ("string" == typeof t ? (n._parseTime(t, i), a = new Date, a.setHours(n.hour, n.minute, n.second, n.millisec), a.setMicroseconds(n.microsec)) : (a = new Date(t.getTime()), a.setMicroseconds(t.getMicroseconds())), "Invalid Date" === a.toString() && (a = void 0), this._setTime(s, a))
                }
            }
        }, $.datepicker._base_setDateDatepicker = $.datepicker._setDateDatepicker, $.datepicker._setDateDatepicker = function(e, t) {
            var i = this._getInst(e),
                s = t;
            if (i) {
                "string" == typeof t && (s = new Date(t), s.getTime() || (this._base_setDateDatepicker.apply(this, arguments), s = $(e).datepicker("getDate")));
                var n, a = this._get(i, "timepicker");
                s instanceof Date ? (n = new Date(s.getTime()), n.setMicroseconds(s.getMicroseconds())) : n = s, a && n && (a.support.timezone || null !== a._defaults.timezone || (a.timezone = -1 * n.getTimezoneOffset()), s = $.timepicker.timezoneAdjust(s, $.timepicker.timezoneOffsetString(-s.getTimezoneOffset()), a.timezone), n = $.timepicker.timezoneAdjust(n, $.timepicker.timezoneOffsetString(-n.getTimezoneOffset()), a.timezone)), this._updateDatepicker(i), this._base_setDateDatepicker.apply(this, arguments), this._setTimeDatepicker(e, n, !0)
            }
        }, $.datepicker._base_getDateDatepicker = $.datepicker._getDateDatepicker, $.datepicker._getDateDatepicker = function(e, t) {
            var i = this._getInst(e);
            if (i) {
                var s = this._get(i, "timepicker");
                if (s) {
                    void 0 === i.lastVal && this._setDateFromField(i, t);
                    var n = this._getDate(i),
                        a = null;
                    return a = s.$altInput && s._defaults.altFieldTimeOnly ? s.$input.val() + " " + s.$altInput.val() : "INPUT" !== s.$input.get(0).tagName && s.$altInput ? s.$altInput.val() : s.$input.val(), n && s._parseTime(a, !i.settings.timeOnly) && (n.setHours(s.hour, s.minute, s.second, s.millisec), n.setMicroseconds(s.microsec), null != s.timezone && (s.support.timezone || null !== s._defaults.timezone || (s.timezone = -1 * n.getTimezoneOffset()), n = $.timepicker.timezoneAdjust(n, s.timezone, $.timepicker.timezoneOffsetString(-n.getTimezoneOffset())))), n
                }
                return this._base_getDateDatepicker(e, t)
            }
        }, $.datepicker._base_parseDate = $.datepicker.parseDate, $.datepicker.parseDate = function(e, t, i) {
            var s;
            try {
                s = this._base_parseDate(e, t, i)
            } catch (n) {
                if (!(n.indexOf(":") >= 0)) throw n;
                s = this._base_parseDate(e, t.substring(0, t.length - (n.length - n.indexOf(":") - 2)), i), $.timepicker.log("Error parsing the date string: " + n + "\ndate string = " + t + "\ndate format = " + e)
            }
            return s
        }, $.datepicker._base_formatDate = $.datepicker._formatDate, $.datepicker._formatDate = function(e, t, i, s) {
            var n = this._get(e, "timepicker");
            return n ? (n._updateDateTime(e), n.$input.val()) : this._base_formatDate(e)
        }, $.datepicker._base_optionDatepicker = $.datepicker._optionDatepicker, $.datepicker._optionDatepicker = function(e, t, i) {
            var s, n = this._getInst(e);
            if (!n) return null;
            var a = this._get(n, "timepicker");
            if (a) {
                var r, l, o, u, c = null,
                    m = null,
                    d = null,
                    p = a._defaults.evnts,
                    h = {};
                if ("string" == typeof t) {
                    if ("minDate" === t || "minDateTime" === t) c = i;
                    else if ("maxDate" === t || "maxDateTime" === t) m = i;
                    else if ("onSelect" === t) d = i;
                    else if (p.hasOwnProperty(t)) {
                        if ("undefined" == typeof i) return p[t];
                        h[t] = i, s = {}
                    }
                } else if ("object" == typeof t) {
                    t.minDate ? c = t.minDate : t.minDateTime ? c = t.minDateTime : t.maxDate ? m = t.maxDate : t.maxDateTime && (m = t.maxDateTime);
                    for (r in p) p.hasOwnProperty(r) && t[r] && (h[r] = t[r])
                }
                for (r in h) h.hasOwnProperty(r) && (p[r] = h[r], s || (s = $.extend({}, t)), delete s[r]);
                if (s && isEmptyObject(s)) return;
                if (c ? (c = 0 === c ? new Date : new Date(c), a._defaults.minDate = c, a._defaults.minDateTime = c) : m ? (m = 0 === m ? new Date : new Date(m), a._defaults.maxDate = m, a._defaults.maxDateTime = m) : d && (a._defaults.onSelect = d), c || m) return u = $(e), o = u.datetimepicker("getDate"), l = this._base_optionDatepicker.call($.datepicker, e, s || t, i), u.datetimepicker("setDate", o), l
            }
            return void 0 === i ? this._base_optionDatepicker.call($.datepicker, e, t) : this._base_optionDatepicker.call($.datepicker, e, s || t, i)
        };
        var isEmptyObject = function(e) {
                var t;
                for (t in e)
                    if (e.hasOwnProperty(t)) return !1;
                return !0
            },
            extendRemove = function(e, t) {
                $.extend(e, t);
                for (var i in t)(null === t[i] || void 0 === t[i]) && (e[i] = t[i]);
                return e
            },
            detectSupport = function(e) {
                var t = e.replace(/'.*?'/g, "").toLowerCase(),
                    i = function(e, t) {
                        return -1 !== e.indexOf(t) ? !0 : !1
                    };
                return {
                    hour: i(t, "h"),
                    minute: i(t, "m"),
                    second: i(t, "s"),
                    millisec: i(t, "l"),
                    microsec: i(t, "c"),
                    timezone: i(t, "z"),
                    ampm: i(t, "t") && i(e, "h"),
                    iso8601: i(e, "Z")
                }
            },
            convert24to12 = function(e) {
                return e %= 12, 0 === e && (e = 12), String(e)
            },
            computeEffectiveSetting = function(e, t) {
                return e && e[t] ? e[t] : $.timepicker._defaults[t]
            },
            splitDateTime = function(e, t) {
                var i = computeEffectiveSetting(t, "divider"),
                    s = computeEffectiveSetting(t, "timeFormat"),
                    n = s.split(i),
                    a = n.length,
                    r = e.split(i),
                    l = r.length;
                return l > 1 ? {
                    dateString: r.splice(0, l - a).join(i),
                    timeString: r.splice(0, a).join(i)
                } : {
                    dateString: e,
                    timeString: ""
                }
            },
            parseDateTimeInternal = function(e, t, i, s, n) {
                var a, r, l;
                if (r = splitDateTime(i, n), a = $.datepicker._base_parseDate(e, r.dateString, s), "" === r.timeString) return {
                    date: a
                };
                if (l = $.datepicker.parseTime(t, r.timeString, n), !l) throw "Wrong time format";
                return {
                    date: a,
                    timeObj: l
                }
            },
            selectLocalTimezone = function(e, t) {
                if (e && e.timezone_select) {
                    var i = t || new Date;
                    e.timezone_select.val(-i.getTimezoneOffset())
                }
            };
        $.timepicker = new Timepicker, $.timepicker.timezoneOffsetString = function(e, t) {
            if (isNaN(e) || e > 840 || -720 > e) return e;
            var i = e,
                s = i % 60,
                n = (i - s) / 60,
                a = t ? ":" : "",
                r = (i >= 0 ? "+" : "-") + ("0" + Math.abs(n)).slice(-2) + a + ("0" + Math.abs(s)).slice(-2);
            return "+00:00" === r ? "Z" : r
        }, $.timepicker.timezoneOffsetNumber = function(e) {
            var t = e.toString().replace(":", "");
            return "Z" === t.toUpperCase() ? 0 : /^(\-|\+)\d{4}$/.test(t) ? ("-" === t.substr(0, 1) ? -1 : 1) * (60 * parseInt(t.substr(1, 2), 10) + parseInt(t.substr(3, 2), 10)) : parseInt(e, 10)
        }, $.timepicker.timezoneAdjust = function(e, t, i) {
            var s = $.timepicker.timezoneOffsetNumber(t),
                n = $.timepicker.timezoneOffsetNumber(i);
            return isNaN(n) || e.setMinutes(e.getMinutes() + -s - -n), e
        }, $.timepicker.timeRange = function(e, t, i) {
            return $.timepicker.handleRange("timepicker", e, t, i)
        }, $.timepicker.datetimeRange = function(e, t, i) {
            $.timepicker.handleRange("datetimepicker", e, t, i)
        }, $.timepicker.dateRange = function(e, t, i) {
            $.timepicker.handleRange("datepicker", e, t, i)
        }, $.timepicker.handleRange = function(e, t, i, s) {
            function n(n, a) {
                var r = t[e]("getDate"),
                    l = i[e]("getDate"),
                    o = n[e]("getDate");
                if (null !== r) {
                    var u = new Date(r.getTime()),
                        c = new Date(r.getTime());
                    u.setMilliseconds(u.getMilliseconds() + s.minInterval), c.setMilliseconds(c.getMilliseconds() + s.maxInterval), s.minInterval > 0 && u > l ? i[e]("setDate", u) : s.maxInterval > 0 && l > c ? i[e]("setDate", c) : r > l && a[e]("setDate", o)
                }
            }

            function a(t, i, n) {
                if (t.val()) {
                    var a = t[e].call(t, "getDate");
                    null !== a && s.minInterval > 0 && ("minDate" === n && a.setMilliseconds(a.getMilliseconds() + s.minInterval), "maxDate" === n && a.setMilliseconds(a.getMilliseconds() - s.minInterval)), a.getTime && i[e].call(i, "option", n, a)
                }
            }
            s = $.extend({}, {
                minInterval: 0,
                maxInterval: 0,
                start: {},
                end: {}
            }, s);
            var r = !1;
            return "timepicker" === e && (r = !0, e = "datetimepicker"), $.fn[e].call(t, $.extend({
                timeOnly: r,
                onClose: function(e, t) {
                    n($(this), i)
                },
                onSelect: function(e) {
                    a($(this), i, "minDate")
                }
            }, s, s.start)), $.fn[e].call(i, $.extend({
                timeOnly: r,
                onClose: function(e, i) {
                    n($(this), t)
                },
                onSelect: function(e) {
                    a($(this), t, "maxDate")
                }
            }, s, s.end)), n(t, i), a(t, i, "minDate"), a(i, t, "maxDate"), $([t.get(0), i.get(0)])
        }, $.timepicker.log = function() {
            window.console && window.console.log && window.console.log.apply && window.console.log.apply(window.console, Array.prototype.slice.call(arguments))
        }, $.timepicker._util = {
            _extendRemove: extendRemove,
            _isEmptyObject: isEmptyObject,
            _convert24to12: convert24to12,
            _detectSupport: detectSupport,
            _selectLocalTimezone: selectLocalTimezone,
            _computeEffectiveSetting: computeEffectiveSetting,
            _splitDateTime: splitDateTime,
            _parseDateTimeInternal: parseDateTimeInternal
        }, Date.prototype.getMicroseconds || (Date.prototype.microseconds = 0, Date.prototype.getMicroseconds = function() {
            return this.microseconds
        }, Date.prototype.setMicroseconds = function(e) {
            return this.setMilliseconds(this.getMilliseconds() + Math.floor(e / 1e3)), this.microseconds = e % 1e3, this
        }), $.timepicker.version = "1.6.3"
    }
});

/* jquery-timepicker v1.8.11 - A jQuery timepicker plugin inspired by Google Calendar. It supports both mouse and keyboard navigation. | Copyright (c) 2016 Jon Thornton - http://jonthornton.github.com/jquery-timepicker/ | License: MIT */
! function(a) {
    "object" == typeof exports && exports && "object" == typeof module && module && module.exports === exports ? a(require("jquery")) : "function" == typeof define && define.amd ? define(["jquery"], a) : a(jQuery)
}(function(a) {
    function b(a) {
        var b = a[0];
        return b.offsetWidth > 0 && b.offsetHeight > 0
    }

    function c(b) {
        if (b.minTime && (b.minTime = u(b.minTime)), b.maxTime && (b.maxTime = u(b.maxTime)), b.durationTime && "function" != typeof b.durationTime && (b.durationTime = u(b.durationTime)), "now" == b.scrollDefault) b.scrollDefault = function() {
            return b.roundingFunction(u(new Date), b)
        };
        else if (b.scrollDefault && "function" != typeof b.scrollDefault) {
            var c = b.scrollDefault;
            b.scrollDefault = function() {
                return b.roundingFunction(u(c), b)
            }
        } else b.minTime && (b.scrollDefault = function() {
            return b.roundingFunction(b.minTime, b)
        });
        if ("string" === a.type(b.timeFormat) && b.timeFormat.match(/[gh]/) && (b._twelveHourTime = !0), b.showOnFocus === !1 && -1 != b.showOn.indexOf("focus") && b.showOn.splice(b.showOn.indexOf("focus"), 1), b.disableTimeRanges.length > 0) {
            for (var d in b.disableTimeRanges) b.disableTimeRanges[d] = [u(b.disableTimeRanges[d][0]), u(b.disableTimeRanges[d][1])];
            b.disableTimeRanges = b.disableTimeRanges.sort(function(a, b) {
                return a[0] - b[0]
            });
            for (var d = b.disableTimeRanges.length - 1; d > 0; d--) b.disableTimeRanges[d][0] <= b.disableTimeRanges[d - 1][1] && (b.disableTimeRanges[d - 1] = [Math.min(b.disableTimeRanges[d][0], b.disableTimeRanges[d - 1][0]), Math.max(b.disableTimeRanges[d][1], b.disableTimeRanges[d - 1][1])], b.disableTimeRanges.splice(d, 1))
        }
        return b
    }

    function d(b) {
        var c = b.data("timepicker-settings"),
            d = b.data("timepicker-list");
        if (d && d.length && (d.remove(), b.data("timepicker-list", !1)), c.useSelect) {
            d = a("<select />", {
                "class": "ui-timepicker-select"
            });
            var g = d
        } else {
            d = a("<ul />", {
                "class": "ui-timepicker-list"
            });
            var g = a("<div />", {
                "class": "ui-timepicker-wrapper",
                tabindex: -1
            });
            g.css({
                display: "none",
                position: "absolute"
            }).append(d)
        }
        if (c.noneOption)
            if (c.noneOption === !0 && (c.noneOption = c.useSelect ? "Time..." : "None"), a.isArray(c.noneOption)) {
                for (var h in c.noneOption)
                    if (parseInt(h, 10) == h) {
                        var j = e(c.noneOption[h], c.useSelect);
                        d.append(j)
                    }
            } else {
                var j = e(c.noneOption, c.useSelect);
                d.append(j)
            }
        if (c.className && g.addClass(c.className), (null !== c.minTime || null !== c.durationTime) && c.showDuration) {
            "function" == typeof c.step ? "function" : c.step;
            g.addClass("ui-timepicker-with-duration"), g.addClass("ui-timepicker-step-" + c.step)
        }
        var l = c.minTime;
        "function" == typeof c.durationTime ? l = u(c.durationTime()) : null !== c.durationTime && (l = c.durationTime);
        var m = null !== c.minTime ? c.minTime : 0,
            o = null !== c.maxTime ? c.maxTime : m + w - 1;
        m > o && (o += w), o === w - 1 && "string" === a.type(c.timeFormat) && c.show2400 && (o = w);
        var p = c.disableTimeRanges,
            q = 0,
            v = p.length,
            x = c.step;
        "function" != typeof x && (x = function() {
            return c.step
        });
        for (var h = m, z = 0; o >= h; z++, h += 60 * x(z)) {
            var A = h,
                B = t(A, c);
            if (c.useSelect) {
                var C = a("<option />", {
                    value: B
                });
                C.text(B)
            } else {
                var C = a("<li />");
                C.addClass(43200 > A % 86400 ? "ui-timepicker-am" : "ui-timepicker-pm"), C.data("time", 86400 >= A ? A : A % 86400), C.text(B)
            }
            if ((null !== c.minTime || null !== c.durationTime) && c.showDuration) {
                var D = s(h - l, c.step);
                if (c.useSelect) C.text(C.text() + " (" + D + ")");
                else {
                    var E = a("<span />", {
                        "class": "ui-timepicker-duration"
                    });
                    E.text(" (" + D + ")"), C.append(E)
                }
            }
            v > q && (A >= p[q][1] && (q += 1), p[q] && A >= p[q][0] && A < p[q][1] && (c.useSelect ? C.prop("disabled", !0) : C.addClass("ui-timepicker-disabled"))), d.append(C)
        }
        if (g.data("timepicker-input", b), b.data("timepicker-list", g), c.useSelect) b.val() && d.val(f(u(b.val()), c)), d.on("focus", function() {
            a(this).data("timepicker-input").trigger("showTimepicker")
        }), d.on("blur", function() {
            a(this).data("timepicker-input").trigger("hideTimepicker")
        }), d.on("change", function() {
            n(b, a(this).val(), "select")
        }), n(b, d.val(), "initial"), b.hide().after(d);
        else {
            var F = c.appendTo;
            "string" == typeof F ? F = a(F) : "function" == typeof F && (F = F(b)), F.append(g), k(b, d), d.on("mousedown touchstart", "li", function(c) {
                b.off("focus.timepicker"), b.on("focus.timepicker-ie-hack", function() {
                    b.off("focus.timepicker-ie-hack"), b.on("focus.timepicker", y.show)
                }), i(b) || b[0].focus(), d.find("li").removeClass("ui-timepicker-selected"), a(this).addClass("ui-timepicker-selected"), r(b) && (b.trigger("hideTimepicker"), d.on("mouseup.timepicker touchend.timepicker", "li", function(a) {
                    d.off("mouseup.timepicker touchend.timepicker"), g.hide()
                }))
            })
        }
    }

    function e(b, c) {
        var d, e, f;
        return "object" == typeof b ? (d = b.label, e = b.className, f = b.value) : "string" == typeof b ? d = b : a.error("Invalid noneOption value"), c ? a("<option />", {
            value: f,
            "class": e,
            text: d
        }) : a("<li />", {
            "class": e,
            text: d
        }).data("time", String(f))
    }

    function f(a, b) {
        return a = b.roundingFunction(a, b), null !== a ? t(a, b) : void 0
    }

    function g() {
        return new Date(1970, 0, 1, 0, 0, 0)
    }

    function h(b) {
        var c = a(b.target),
            d = c.closest(".ui-timepicker-input");
        0 === d.length && 0 === c.closest(".ui-timepicker-wrapper").length && (y.hide(), a(document).unbind(".ui-timepicker"), a(window).unbind(".ui-timepicker"))
    }

    function i(a) {
        var b = a.data("timepicker-settings");
        return (window.navigator.msMaxTouchPoints || "ontouchstart" in document) && b.disableTouchKeyboard
    }

    function j(b, c, d) {
        if (!d && 0 !== d) return !1;
        var e = b.data("timepicker-settings"),
            f = !1,
            d = e.roundingFunction(d, e);
        return c.find("li").each(function(b, c) {
            var e = a(c);
            if ("number" == typeof e.data("time")) return e.data("time") == d ? (f = e, !1) : void 0
        }), f
    }

    function k(a, b) {
        b.find("li").removeClass("ui-timepicker-selected");
        var c = u(m(a), a.data("timepicker-settings"));
        if (null !== c) {
            var d = j(a, b, c);
            if (d) {
                var e = d.offset().top - b.offset().top;
                (e + d.outerHeight() > b.outerHeight() || 0 > e) && b.scrollTop(b.scrollTop() + d.position().top - d.outerHeight()), d.addClass("ui-timepicker-selected")
            }
        }
    }

    function l(b, c) {
        if ("" !== this.value && "timepicker" != c) {
            var d = a(this);
            if (!d.is(":focus") || b && "change" == b.type) {
                var e = d.data("timepicker-settings"),
                    f = u(this.value, e);
                if (null === f) return void d.trigger("timeFormatError");
                var g = !1;
                null !== e.minTime && f < e.minTime ? g = !0 : null !== e.maxTime && f > e.maxTime && (g = !0), a.each(e.disableTimeRanges, function() {
                    return f >= this[0] && f < this[1] ? (g = !0, !1) : void 0
                }), e.forceRoundTime && (f = e.roundingFunction(f, e));
                var h = t(f, e);
                g ? n(d, h, "error") && d.trigger("timeRangeError") : n(d, h)
            }
        }
    }

    function m(a) {
        return a.is("input") ? a.val() : a.data("ui-timepicker-value")
    }

    function n(a, b, c) {
        if (a.is("input")) {
            a.val(b);
            var d = a.data("timepicker-settings");
            d.useSelect && "select" != c && "initial" != c && a.data("timepicker-list").val(f(u(b), d))
        }
        return a.data("ui-timepicker-value") != b ? (a.data("ui-timepicker-value", b), "select" == c ? a.trigger("selectTime").trigger("changeTime").trigger("change", "timepicker") : "error" != c && a.trigger("changeTime"), !0) : (a.trigger("selectTime"), !1)
    }

    function o(a) {
        switch (a.keyCode) {
            case 13:
            case 9:
                return;
            default:
                a.preventDefault()
        }
    }

    function p(c) {
        var d = a(this),
            e = d.data("timepicker-list");
        if (!e || !b(e)) {
            if (40 != c.keyCode) return !0;
            y.show.call(d.get(0)), e = d.data("timepicker-list"), i(d) || d.focus()
        }
        switch (c.keyCode) {
            case 13:
                return r(d) && y.hide.apply(this), c.preventDefault(), !1;
            case 38:
                var f = e.find(".ui-timepicker-selected");
                return f.length ? f.is(":first-child") || (f.removeClass("ui-timepicker-selected"), f.prev().addClass("ui-timepicker-selected"), f.prev().position().top < f.outerHeight() && e.scrollTop(e.scrollTop() - f.outerHeight())) : (e.find("li").each(function(b, c) {
                    return a(c).position().top > 0 ? (f = a(c), !1) : void 0
                }), f.addClass("ui-timepicker-selected")), !1;
            case 40:
                return f = e.find(".ui-timepicker-selected"), 0 === f.length ? (e.find("li").each(function(b, c) {
                    return a(c).position().top > 0 ? (f = a(c), !1) : void 0
                }), f.addClass("ui-timepicker-selected")) : f.is(":last-child") || (f.removeClass("ui-timepicker-selected"), f.next().addClass("ui-timepicker-selected"), f.next().position().top + 2 * f.outerHeight() > e.outerHeight() && e.scrollTop(e.scrollTop() + f.outerHeight())), !1;
            case 27:
                e.find("li").removeClass("ui-timepicker-selected"), y.hide();
                break;
            case 9:
                y.hide();
                break;
            default:
                return !0
        }
    }

    function q(c) {
        var d = a(this),
            e = d.data("timepicker-list"),
            f = d.data("timepicker-settings");
        if (!e || !b(e) || f.disableTextInput) return !0;
        switch (c.keyCode) {
            case 96:
            case 97:
            case 98:
            case 99:
            case 100:
            case 101:
            case 102:
            case 103:
            case 104:
            case 105:
            case 48:
            case 49:
            case 50:
            case 51:
            case 52:
            case 53:
            case 54:
            case 55:
            case 56:
            case 57:
            case 65:
            case 77:
            case 80:
            case 186:
            case 8:
            case 46:
                f.typeaheadHighlight ? k(d, e) : e.hide()
        }
    }

    function r(a) {
        var b = a.data("timepicker-settings"),
            c = a.data("timepicker-list"),
            d = null,
            e = c.find(".ui-timepicker-selected");
        return e.hasClass("ui-timepicker-disabled") ? !1 : (e.length && (d = e.data("time")), null !== d && ("string" != typeof d && (d = t(d, b)), n(a, d, "select")), !0)
    }

    function s(a, b) {
        a = Math.abs(a);
        var c, d, e = Math.round(a / 60),
            f = [];
        return 60 > e ? f = [e, x.mins] : (c = Math.floor(e / 60), d = e % 60, 30 == b && 30 == d && (c += x.decimal + 5), f.push(c), f.push(1 == c ? x.hr : x.hrs), 30 != b && d && (f.push(d), f.push(x.mins))), f.join(" ")
    }

    function t(b, c) {
        if (null === b) return null;
        var d = new Date(v.valueOf() + 1e3 * b);
        if (isNaN(d.getTime())) return null;
        if ("function" === a.type(c.timeFormat)) return c.timeFormat(d);
        for (var e, f, g = "", h = 0; h < c.timeFormat.length; h++) switch (f = c.timeFormat.charAt(h)) {
            case "a":
                g += d.getHours() > 11 ? x.pm : x.am;
                break;
            case "A":
                g += d.getHours() > 11 ? x.PM : x.AM;
                break;
            case "g":
                e = d.getHours() % 12, g += 0 === e ? "12" : e;
                break;
            case "G":
                e = d.getHours(), b === w && (e = 24), g += e;
                break;
            case "h":
                e = d.getHours() % 12, 0 !== e && 10 > e && (e = "0" + e), g += 0 === e ? "12" : e;
                break;
            case "H":
                e = d.getHours(), b === w && (e = c.show2400 ? 24 : 0), g += e > 9 ? e : "0" + e;
                break;
            case "i":
                var i = d.getMinutes();
                g += i > 9 ? i : "0" + i;
                break;
            case "s":
                b = d.getSeconds(), g += b > 9 ? b : "0" + b;
                break;
            case "\\":
                h++, g += c.timeFormat.charAt(h);
                break;
            default:
                g += f
        }
        return g
    }

    function u(a, b) {
        if ("" === a) return null;
        if (!a || a + 0 == a) return a;
        if ("object" == typeof a) return 3600 * a.getHours() + 60 * a.getMinutes() + a.getSeconds();
        a = a.toLowerCase().replace(/[\s\.]/g, ""), ("a" == a.slice(-1) || "p" == a.slice(-1)) && (a += "m");
        var c = "(" + x.am.replace(".", "") + "|" + x.pm.replace(".", "") + "|" + x.AM.replace(".", "") + "|" + x.PM.replace(".", "") + ")?",
            d = new RegExp("^" + c + "([0-9]?[0-9])\\W?([0-5][0-9])?\\W?([0-5][0-9])?" + c + "$"),
            e = a.match(d);
        if (!e) return null;
        var f = parseInt(1 * e[2], 10),
            g = f > 24 ? f % 24 : f,
            h = e[1] || e[5],
            i = g;
        if (12 >= g && h) {
            var j = h == x.pm || h == x.PM;
            i = 12 == g ? j ? 12 : 0 : g + (j ? 12 : 0)
        }
        var k = 1 * e[3] || 0,
            l = 1 * e[4] || 0,
            m = 3600 * i + 60 * k + l;
        if (12 > g && !h && b && b._twelveHourTime && b.scrollDefault) {
            var n = m - b.scrollDefault();
            0 > n && n >= w / -2 && (m = (m + w / 2) % w)
        }
        return m
    }
    var v = g(),
        w = 86400,
        x = {
            am: "am",
            pm: "pm",
            AM: "AM",
            PM: "PM",
            decimal: ".",
            mins: "mins",
            hr: "hr",
            hrs: "hrs"
        },
        y = {
            init: function(b) {
                return this.each(function() {
                    var e = a(this),
                        f = [];
                    for (var g in a.fn.timepicker.defaults) e.data(g) && (f[g] = e.data(g));
                    var h = a.extend({}, a.fn.timepicker.defaults, f, b);
                    if (h.lang && (x = a.extend(x, h.lang)), h = c(h), e.data("timepicker-settings", h), e.addClass("ui-timepicker-input"), h.useSelect) d(e);
                    else {
                        if (e.prop("autocomplete", "off"), h.showOn)
                            for (var i in h.showOn) e.on(h.showOn[i] + ".timepicker", y.show);
                        e.on("change.timepicker", l), e.on("keydown.timepicker", p), e.on("keyup.timepicker", q), h.disableTextInput && e.on("keydown.timepicker", o), l.call(e.get(0))
                    }
                })
            },
            show: function(c) {
                var e = a(this),
                    f = e.data("timepicker-settings");
                if (c && c.preventDefault(), f.useSelect) return void e.data("timepicker-list").focus();
                i(e) && e.blur();
                var g = e.data("timepicker-list");
                if (!e.prop("readonly") && (g && 0 !== g.length && "function" != typeof f.durationTime || (d(e), g = e.data("timepicker-list")), !b(g))) {
                    e.data("ui-timepicker-value", e.val()), k(e, g), y.hide(), g.show();
                    var l = {};
                    f.orientation.match(/r/) ? l.left = e.offset().left + e.outerWidth() - g.outerWidth() + parseInt(g.css("marginLeft").replace("px", ""), 10) : l.left = e.offset().left + parseInt(g.css("marginLeft").replace("px", ""), 10);
                    var n;
                    n = f.orientation.match(/t/) ? "t" : f.orientation.match(/b/) ? "b" : e.offset().top + e.outerHeight(!0) + g.outerHeight() > a(window).height() + a(window).scrollTop() ? "t" : "b", "t" == n ? (g.addClass("ui-timepicker-positioned-top"), l.top = e.offset().top - g.outerHeight() + parseInt(g.css("marginTop").replace("px", ""), 10)) : (g.removeClass("ui-timepicker-positioned-top"), l.top = e.offset().top + e.outerHeight() + parseInt(g.css("marginTop").replace("px", ""), 10)), g.offset(l);
                    var o = g.find(".ui-timepicker-selected");
                    if (!o.length) {
                        var p = u(m(e));
                        null !== p ? o = j(e, g, p) : f.scrollDefault && (o = j(e, g, f.scrollDefault()))
                    }
                    if (o && o.length) {
                        var q = g.scrollTop() + o.position().top - o.outerHeight();
                        g.scrollTop(q)
                    } else g.scrollTop(0);
                    return f.stopScrollPropagation && a(document).on("wheel.ui-timepicker", ".ui-timepicker-wrapper", function(b) {
                        b.preventDefault();
                        var c = a(this).scrollTop();
                        a(this).scrollTop(c + b.originalEvent.deltaY)
                    }), a(document).on("touchstart.ui-timepicker mousedown.ui-timepicker", h), a(window).on("resize.ui-timepicker", h), f.closeOnWindowScroll && a(document).on("scroll.ui-timepicker", h), e.trigger("showTimepicker"), this
                }
            },
            hide: function(c) {
                var d = a(this),
                    e = d.data("timepicker-settings");
                return e && e.useSelect && d.blur(), a(".ui-timepicker-wrapper").each(function() {
                    var c = a(this);
                    if (b(c)) {
                        var d = c.data("timepicker-input"),
                            e = d.data("timepicker-settings");
                        e && e.selectOnBlur && r(d), c.hide(), d.trigger("hideTimepicker")
                    }
                }), this
            },
            option: function(b, e) {
                return "string" == typeof b && "undefined" == typeof e ? a(this).data("timepicker-settings")[b] : this.each(function() {
                    var f = a(this),
                        g = f.data("timepicker-settings"),
                        h = f.data("timepicker-list");
                    "object" == typeof b ? g = a.extend(g, b) : "string" == typeof b && (g[b] = e), g = c(g), f.data("timepicker-settings", g), h && (h.remove(), f.data("timepicker-list", !1)), g.useSelect && d(f)
                })
            },
            getSecondsFromMidnight: function() {
                return u(m(this))
            },
            getTime: function(a) {
                var b = this,
                    c = m(b);
                if (!c) return null;
                var d = u(c);
                if (null === d) return null;
                a || (a = v);
                var e = new Date(a);
                return e.setHours(d / 3600), e.setMinutes(d % 3600 / 60), e.setSeconds(d % 60), e.setMilliseconds(0), e
            },
            setTime: function(a) {
                var b = this,
                    c = b.data("timepicker-settings");
                if (c.forceRoundTime) var d = f(u(a), c);
                else var d = t(u(a), c);
                return a && null === d && c.noneOption && (d = a), n(b, d), b.data("timepicker-list") && k(b, b.data("timepicker-list")), this
            },
            remove: function() {
                var a = this;
                if (a.hasClass("ui-timepicker-input")) {
                    var b = a.data("timepicker-settings");
                    return a.removeAttr("autocomplete", "off"), a.removeClass("ui-timepicker-input"), a.removeData("timepicker-settings"), a.off(".timepicker"), a.data("timepicker-list") && a.data("timepicker-list").remove(), b.useSelect && a.show(), a.removeData("timepicker-list"), this
                }
            }
        };
    a.fn.timepicker = function(b) {
        return this.length ? y[b] ? this.hasClass("ui-timepicker-input") ? y[b].apply(this, Array.prototype.slice.call(arguments, 1)) : this : "object" != typeof b && b ? void a.error("Method " + b + " does not exist on jQuery.timepicker") : y.init.apply(this, arguments) : this
    }, a.fn.timepicker.defaults = {
        appendTo: "body",
        className: null,
        closeOnWindowScroll: !1,
        disableTextInput: !1,
        disableTimeRanges: [],
        disableTouchKeyboard: !1,
        durationTime: null,
        forceRoundTime: !1,
        maxTime: null,
        minTime: null,
        noneOption: !1,
        orientation: "l",
        roundingFunction: function(a, b) {
            if (null === a) return null;
            if ("number" != typeof b.step) return a;
            var c = a % (60 * b.step);
            return c >= 30 * b.step ? a += 60 * b.step - c : a -= c, a
        },
        scrollDefault: null,
        selectOnBlur: !1,
        show2400: !1,
        showDuration: !1,
        showOn: ["click", "focus"],
        showOnFocus: !0,
        step: 30,
        stopScrollPropagation: !1,
        timeFormat: "g:ia",
        typeaheadHighlight: !0,
        useSelect: !1
    }
});

/**
 * Time-To jQuery plug-in
 * Show countdown timer or realtime clock
 *
 * @author Alexey Teterin <altmoc@gmail.com>
 * @version 1.2.0
 * @license MIT http://opensource.org/licenses/MIT
 * @date 2016-11-02
 */
! function(t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof exports ? module.exports = t(require("jquery")) : t(jQuery)
}(function(t) {
    function i(i, n) {
        var o, l, r, d, c, u, h, p, f, m = this.data(),
            y = this.find("ul"),
            g = !1;
        if (m.vals && 0 !== y.length) {
            for (i || (i = m.seconds), m.intervalId && (g = !0, clearTimeout(m.intervalId)), l = (o = Math.floor(i / s)) * s, l += (r = Math.floor((i - l) / a)) * a, c = i - (l += 60 * (d = Math.floor((i - l) / 60))), u = (o < 100 ? "0" + (o < 10 ? "0" : "") : "") + o + (r < 10 ? "0" : "") + r + (d < 10 ? "0" : "") + d + (c < 10 ? "0" : "") + c, h = m.vals.length - 1, p = u.length - 1; h >= 0; h -= 1, p -= 1) f = parseInt(u.substr(p, 1), 10), m.vals[h] = f, y.eq(h).children().html(f);
            (g || n) && (m.ttStartTime = t.now(), m.intervalId = setTimeout(e.bind(this), 1e3), this.data("intervalId", m.intervalId))
        }
    }

    function e(i) {
        var s, a, n, o, l, r, d = this,
            c = this.find("ul"),
            u = this.data();
        if (!u.vals || 0 === c.length) return u.intervalId && (clearTimeout(u.intervalId), this.data("intervalId", null)), void(u.callback && u.callback());
        void 0 === i && (i = u.iSec), s = u.vals[i], a = c.eq(i), n = a.children(), o = u.countdown ? -1 : 1, n.eq(1).html(s), s += o, i === u.iSec && (l = u.tickTimeout, r = t.now() - u.ttStartTime, u.sec += o, l += Math.abs(u.seconds - u.sec) * l - r, u.intervalId = setTimeout(e.bind(this), l)), (s < 0 || s > u.limits[i]) && (s < 0 ? (s = u.limits[i], i === u.iHour && u.displayDays > 0 && i > 0 && 0 === u.vals[i - 1] && (s = 3)) : s = 0, i > 0 && e.call(this, i - 1)), n.eq(0).html(s), t.support.transition ? (a.addClass("transition"), a.css({
            top: 0
        }), setTimeout(function() {
            a.removeClass("transition"), n.eq(1).html(s), a.css({
                top: "-" + u.height + "px"
            }), o > 0 || i !== u.iSec || (u.sec === u.countdownAlertLimit && c.parent().addClass("timeTo-alert"), 0 === u.sec && (c.parent().removeClass("timeTo-alert"), u.intervalId && (clearTimeout(u.intervalId), d.data("intervalId", null)), "function" == typeof u.callback && u.callback()))
        }, 410)) : a.stop().animate({
            top: 0
        }, 400, i !== u.iSec ? null : function() {
            n.eq(1).html(s), a.css({
                top: "-" + u.height + "px"
            }), o > 0 || i !== u.iSec || (u.sec === u.countdownAlertLimit ? c.parent().addClass("timeTo-alert") : 0 === u.sec && (c.parent().removeClass("timeTo-alert"), u.intervalId && (clearTimeout(u.intervalId), d.data("intervalId", null)), "function" == typeof u.callback && u.callback()))
        }), u.vals[i] = s
    }
    var s = 86400,
        a = 3600,
        n = {
            callback: null,
            captionSize: 0,
            countdown: !0,
            countdownAlertLimit: 10,
            displayCaptions: !1,
            displayDays: 0,
            displayHours: !0,
            fontFamily: "Verdana, sans-serif",
            fontSize: 0,
            lang: "en",
            languages: {},
            seconds: 0,
            start: !0,
            theme: "white",
            width: 25,
            height: 30,
            gap: 11,
            vals: [0, 0, 0, 0, 0, 0, 0, 0, 0],
            limits: [9, 9, 9, 2, 9, 5, 9, 5, 9],
            iSec: 8,
            iHour: 4,
            tickTimeout: 1e3,
            intervalId: null
        },
        o = {
            start: function(s) {
                var a;
                s && (i.call(this, s), a = setTimeout(e.bind(this), 1e3), this.data("ttStartTime", t.now()), this.data("intervalId", a))
            },
            stop: function() {
                var t = this.data();
                return t.intervalId && (clearTimeout(t.intervalId), this.data("intervalId", null)), t
            },
            reset: function(t) {
                var e = o.stop.call(this),
                    s = void 0 === t ? e.seconds : t;
                this.find("div").css({
                    backgroundPosition: "left center"
                }), this.find("ul").parent().removeClass("timeTo-alert"), i.call(this, s, !0)
            }
        },
        l = {
            en: {
                days: "days",
                hours: "hours",
                min: "minutes",
                sec: "seconds"
            },
            ru: {
                days: "Ð´Ð½ÐµÐ¹",
                hours: "Ñ‡Ð°ÑÐ¾Ð²",
                min: "Ð¼Ð¸Ð½ÑƒÑ‚",
                sec: "ÑÐµÐºÑƒÐ½Ð´"
            },
            ua: {
                days: "Ð´Ð½iÐ²",
                hours: "Ð³Ð¾Ð´Ð¸Ð½",
                min: "Ñ…Ð²Ð¸Ð»Ð¸Ð½",
                sec: "ÑÐµÐºÑƒÐ½Ð´"
            },
            de: {
                days: "Tag",
                hours: "Uhr",
                min: "Minuten",
                sec: "Secunden"
            },
            fr: {
                days: "jours",
                hours: "heures",
                min: "minutes",
                sec: "secondes"
            },
            sp: {
                days: "dÃ­as",
                hours: "horas",
                min: "minutos",
                sec: "segundos"
            },
            it: {
                days: "giorni",
                hours: "ore",
                min: "minuti",
                sec: "secondi"
            },
            nl: {
                days: "dagen",
                hours: "uren",
                min: "minuten",
                sec: "seconden"
            },
            no: {
                days: "dager",
                hours: "timer",
                min: "minutter",
                sec: "sekunder"
            },
            pt: {
                days: "dias",
                hours: "horas",
                min: "minutos",
                sec: "segundos"
            },
            tr: {
                days: "gÃ¼n",
                hours: "saat",
                min: "dakika",
                sec: "saniye"
            }
        };
    return void 0 === t.support.transition && (t.support.transition = function() {
        var t = (document.body || document.documentElement).style;
        return void 0 !== t.transition || void 0 !== t.WebkitTransition || void 0 !== t.MozTransition || void 0 !== t.MsTransition || void 0 !== t.OTransition
    }()), t.fn.timeTo = function() {
        var e, r, d, c, u, h, p, f, m, y = {},
            g = t.now();
        for (e = 0; e < arguments.length; e += 1) r = arguments[e], 0 === e && "string" == typeof r ? c = r : "object" == typeof r ? "function" == typeof r.getTime ? y.timeTo = r : y = t.extend(y, r) : "function" == typeof r ? y.callback = r : (d = parseInt(r, 10), isNaN(d) || (y.seconds = d));
        if (y.timeTo) y.timeTo.getTime ? u = y.timeTo.getTime() : "number" == typeof y.timeTo && (u = y.timeTo), y.seconds = u > g ? Math.floor((u - g) / 1e3) : 0;
        else if (y.time || !y.seconds)
            if ((u = y.time) || (u = new Date), "object" == typeof u && u.getTime) y.seconds = u.getHours() * a + 60 * u.getMinutes() + u.getSeconds(), y.countdown = !1;
            else if ("string" == typeof u) {
            for (p = u.split(":"), f = 0, m = 1; p.length;) f += p.pop() * m, m *= 60;
            y.seconds = f, y.countdown = !1
        }
        return !1 !== y.countdown && y.seconds > s && void 0 === y.displayDays ? (h = Math.floor(y.seconds / s), y.displayDays = h < 10 && 1 || h < 100 && 2 || 3) : !0 === y.displayDays ? y.displayDays = 3 : y.displayDays && (y.displayDays = y.displayDays > 0 ? Math.floor(y.displayDays) : 3), this.each(function() {
            var e, s, a, r, d, u, h, p, f, m, g, v, T, I, w, S, x, b, M, k, D, z, C = t(this),
                $ = C.data();
            if ($.intervalId && (clearInterval($.intervalId), $.intervalId = null), $.vals) "reset" !== c && t.extend($, y);
            else {
                if (s = $.opt ? $.options : y, e = Object.keys(n).reduce(function(t, i) {
                        return Array.isArray(n[i]) ? t[i] = n[i].slice(0) : t[i] = n[i], t
                    }, {}), $ = t.extend(e, s), $.options = s, $.height = Math.round(100 * $.fontSize / 93) || $.height, $.width = Math.round(.8 * $.fontSize + .13 * $.height) || $.width, $.displayHours = !(!$.displayDays && !$.displayHours), r = {
                        fontFamily: $.fontFamily
                    }, $.fontSize > 0 && (r.fontSize = $.fontSize + "px"), d = $.languages[$.lang] || l[$.lang], C.addClass("timeTo").addClass("timeTo-" + $.theme).css(r), u = Math.round($.height / 10), h = '<ul style="left:' + u + "px; top:-" + $.height + 'px"><li>0</li><li>0</li></ul></div>', p = $.fontSize ? ' style="width:' + $.width + "px; height:" + $.height + 'px;"' : ' style=""', f = '<div class="first"' + p + ">" + h, m = "<div" + p + ">" + h, g = "<span>:</span>", v = Math.round(2 * $.width + 3), T = $.captionSize || $.fontSize && Math.round(.43 * $.fontSize), I = T ? "font-size:" + T + "px;" : "", w = T ? ' style="' + I + '"' : "", S = ($.displayCaptions ? ($.displayHours ? '<figure style="max-width:' + v + 'px">$1<figcaption' + w + ">" + d.hours + "</figcaption></figure>" + g : "") + '<figure style="max-width:' + v + 'px">$1<figcaption' + w + ">" + d.min + "</figcaption></figure>" + g + '<figure style="max-width:' + v + 'px">$1<figcaption' + w + ">" + d.sec + "</figcaption></figure>" : ($.displayHours ? "$1" + g : "") + "$1" + g + "$1").replace(/\$1/g, f + m), $.displayDays > 0) {
                    for (x = .4 * $.fontSize || n.gap, b = f, a = $.displayDays - 1; a > 0; a -= 1) b += 1 === a ? m.replace('">', "margin-right:" + Math.round(x) + 'px">') : m;
                    S = ($.displayCaptions ? '<figure style="width:' + Math.round($.width * $.displayDays + x + 4) + 'px">$1<figcaption style="' + I + "padding-right:" + Math.round(x) + 'px">' + d.days + "</figcaption></figure>" : "$1").replace(/\$1/, b) + S
                }
                C.html(S)
            }
            if ((M = C.find("div")).length < $.vals.length) {
                for (k = $.vals.length - M.length, D = $.vals, z = $.limits, $.vals = [], $.limits = [], a = 0; a < M.length; a += 1) $.vals[a] = D[k + a], $.limits[a] = z[k + a];
                $.iSec = $.vals.length - 1, $.iHour = $.vals.length - 5
            }
            $.sec = $.seconds, C.data($), c && o[c] ? o[c].call(C, $.seconds) : $.start ? o.start.call(C, $.seconds) : i.call(C, $.seconds)
        })
    }, t
});

/*!
 * @copyright Copyright &copy; Kartik Visweswaran, Krajee.com, 2014 - 2017
 * @version 1.3.4
 *
 * Date formatter utility library that allows formatting date/time variables or Date objects using PHP DateTime format.
 * This library is a standalone javascript library and does not depend on other libraries or plugins like jQuery.
 * 
 * @see http://php.net/manual/en/function.date.php
 *
 * For more JQuery plugins visit http://plugins.krajee.com
 * For more Yii related demos visit http://demos.krajee.com
 */
var DateFormatter;
! function() {
    "use strict";
    var e, t, a, n, r, o, i;
    o = 864e5, i = 3600, e = function(e, t) {
        return "string" == typeof e && "string" == typeof t && e.toLowerCase() === t.toLowerCase()
    }, t = function(e, a, n) {
        var r = e.toString();
        return n = n || "0", r.length < a ? t(n + r, a) : r
    }, a = function(e) {
        var t, n;
        for (e = e || {}, t = 1; t < arguments.length; t++)
            if (n = arguments[t])
                for (var r in n) n.hasOwnProperty(r) && ("object" == typeof n[r] ? a(e[r], n[r]) : e[r] = n[r]);
        return e
    }, n = function(e, t) {
        for (var a = 0; a < t.length; a++)
            if (t[a].toLowerCase() === e.toLowerCase()) return a;
        return -1
    }, r = {
        dateSettings: {
            days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            meridiem: ["AM", "PM"],
            ordinal: function(e) {
                var t = e % 10,
                    a = {
                        1: "st",
                        2: "nd",
                        3: "rd"
                    };
                return 1 !== Math.floor(e % 100 / 10) && a[t] ? a[t] : "th"
            }
        },
        separators: /[ \-+\/\.T:@]/g,
        validParts: /[dDjlNSwzWFmMntLoYyaABgGhHisueTIOPZcrU]/g,
        intParts: /[djwNzmnyYhHgGis]/g,
        tzParts: /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,
        tzClip: /[^-+\dA-Z]/g
    }, DateFormatter = function(e) {
        var t = this,
            n = a(r, e);
        t.dateSettings = n.dateSettings, t.separators = n.separators, t.validParts = n.validParts, t.intParts = n.intParts, t.tzParts = n.tzParts, t.tzClip = n.tzClip
    }, DateFormatter.prototype = {
        constructor: DateFormatter,
        getMonth: function(e) {
            var t, a = this;
            return t = n(e, a.dateSettings.monthsShort) + 1, 0 === t && (t = n(e, a.dateSettings.months) + 1), t
        },
        parseDate: function(t, a) {
            var n, r, o, i, s, d, u, l, f, c, m = this,
                h = !1,
                g = !1,
                p = m.dateSettings,
                y = {
                    date: null,
                    year: null,
                    month: null,
                    day: null,
                    hour: 0,
                    min: 0,
                    sec: 0
                };
            if (!t) return null;
            if (t instanceof Date) return t;
            if ("U" === a) return o = parseInt(t), o ? new Date(1e3 * o) : t;
            switch (typeof t) {
                case "number":
                    return new Date(t);
                case "string":
                    break;
                default:
                    return null
            }
            if (n = a.match(m.validParts), !n || 0 === n.length) throw new Error("Invalid date format definition.");
            for (r = t.replace(m.separators, "\x00").split("\x00"), o = 0; o < r.length; o++) switch (i = r[o], s = parseInt(i), n[o]) {
                case "y":
                case "Y":
                    if (!s) return null;
                    f = i.length, y.year = 2 === f ? parseInt((70 > s ? "20" : "19") + i) : s, h = !0;
                    break;
                case "m":
                case "n":
                case "M":
                case "F":
                    if (isNaN(s)) {
                        if (d = m.getMonth(i), !(d > 0)) return null;
                        y.month = d
                    } else {
                        if (!(s >= 1 && 12 >= s)) return null;
                        y.month = s
                    }
                    h = !0;
                    break;
                case "d":
                case "j":
                    if (!(s >= 1 && 31 >= s)) return null;
                    y.day = s, h = !0;
                    break;
                case "g":
                case "h":
                    if (u = n.indexOf("a") > -1 ? n.indexOf("a") : n.indexOf("A") > -1 ? n.indexOf("A") : -1, c = r[u], -1 !== u) l = e(c, p.meridiem[0]) ? 0 : e(c, p.meridiem[1]) ? 12 : -1, s >= 1 && 12 >= s && -1 !== l ? y.hour = s % 12 === 0 ? l : s + l : s >= 0 && 23 >= s && (y.hour = s);
                    else {
                        if (!(s >= 0 && 23 >= s)) return null;
                        y.hour = s
                    }
                    g = !0;
                    break;
                case "G":
                case "H":
                    if (!(s >= 0 && 23 >= s)) return null;
                    y.hour = s, g = !0;
                    break;
                case "i":
                    if (!(s >= 0 && 59 >= s)) return null;
                    y.min = s, g = !0;
                    break;
                case "s":
                    if (!(s >= 0 && 59 >= s)) return null;
                    y.sec = s, g = !0
            }
            if (h === !0 && y.year && y.month && y.day) y.date = new Date(y.year, y.month - 1, y.day, y.hour, y.min, y.sec, 0);
            else {
                if (g !== !0) return null;
                y.date = new Date(0, 0, 0, y.hour, y.min, y.sec, 0)
            }
            return y.date
        },
        guessDate: function(e, t) {
            if ("string" != typeof e) return e;
            var a, n, r, o, i, s, d = this,
                u = e.replace(d.separators, "\x00").split("\x00"),
                l = /^[djmn]/g,
                f = t.match(d.validParts),
                c = new Date,
                m = 0;
            if (!l.test(f[0])) return e;
            for (r = 0; r < u.length; r++) {
                if (m = 2, i = u[r], s = parseInt(i.substr(0, 2)), isNaN(s)) return null;
                switch (r) {
                    case 0:
                        "m" === f[0] || "n" === f[0] ? c.setMonth(s - 1) : c.setDate(s);
                        break;
                    case 1:
                        "m" === f[0] || "n" === f[0] ? c.setDate(s) : c.setMonth(s - 1);
                        break;
                    case 2:
                        if (n = c.getFullYear(), a = i.length, m = 4 > a ? a : 4, n = parseInt(4 > a ? n.toString().substr(0, 4 - a) + i : i.substr(0, 4)), !n) return null;
                        c.setFullYear(n);
                        break;
                    case 3:
                        c.setHours(s);
                        break;
                    case 4:
                        c.setMinutes(s);
                        break;
                    case 5:
                        c.setSeconds(s)
                }
                o = i.substr(m), o.length > 0 && u.splice(r + 1, 0, o)
            }
            return c
        },
        parseFormat: function(e, a) {
            var n, r = this,
                s = r.dateSettings,
                d = /\\?(.?)/gi,
                u = function(e, t) {
                    return n[e] ? n[e]() : t
                };
            return n = {
                d: function() {
                    return t(n.j(), 2)
                },
                D: function() {
                    return s.daysShort[n.w()]
                },
                j: function() {
                    return a.getDate()
                },
                l: function() {
                    return s.days[n.w()]
                },
                N: function() {
                    return n.w() || 7
                },
                w: function() {
                    return a.getDay()
                },
                z: function() {
                    var e = new Date(n.Y(), n.n() - 1, n.j()),
                        t = new Date(n.Y(), 0, 1);
                    return Math.round((e - t) / o)
                },
                W: function() {
                    var e = new Date(n.Y(), n.n() - 1, n.j() - n.N() + 3),
                        a = new Date(e.getFullYear(), 0, 4);
                    return t(1 + Math.round((e - a) / o / 7), 2)
                },
                F: function() {
                    return s.months[a.getMonth()]
                },
                m: function() {
                    return t(n.n(), 2)
                },
                M: function() {
                    return s.monthsShort[a.getMonth()]
                },
                n: function() {
                    return a.getMonth() + 1
                },
                t: function() {
                    return new Date(n.Y(), n.n(), 0).getDate()
                },
                L: function() {
                    var e = n.Y();
                    return e % 4 === 0 && e % 100 !== 0 || e % 400 === 0 ? 1 : 0
                },
                o: function() {
                    var e = n.n(),
                        t = n.W(),
                        a = n.Y();
                    return a + (12 === e && 9 > t ? 1 : 1 === e && t > 9 ? -1 : 0)
                },
                Y: function() {
                    return a.getFullYear()
                },
                y: function() {
                    return n.Y().toString().slice(-2)
                },
                a: function() {
                    return n.A().toLowerCase()
                },
                A: function() {
                    var e = n.G() < 12 ? 0 : 1;
                    return s.meridiem[e]
                },
                B: function() {
                    var e = a.getUTCHours() * i,
                        n = 60 * a.getUTCMinutes(),
                        r = a.getUTCSeconds();
                    return t(Math.floor((e + n + r + i) / 86.4) % 1e3, 3)
                },
                g: function() {
                    return n.G() % 12 || 12
                },
                G: function() {
                    return a.getHours()
                },
                h: function() {
                    return t(n.g(), 2)
                },
                H: function() {
                    return t(n.G(), 2)
                },
                i: function() {
                    return t(a.getMinutes(), 2)
                },
                s: function() {
                    return t(a.getSeconds(), 2)
                },
                u: function() {
                    return t(1e3 * a.getMilliseconds(), 6)
                },
                e: function() {
                    var e = /\((.*)\)/.exec(String(a))[1];
                    return e || "Coordinated Universal Time"
                },
                I: function() {
                    var e = new Date(n.Y(), 0),
                        t = Date.UTC(n.Y(), 0),
                        a = new Date(n.Y(), 6),
                        r = Date.UTC(n.Y(), 6);
                    return e - t !== a - r ? 1 : 0
                },
                O: function() {
                    var e = a.getTimezoneOffset(),
                        n = Math.abs(e);
                    return (e > 0 ? "-" : "+") + t(100 * Math.floor(n / 60) + n % 60, 4)
                },
                P: function() {
                    var e = n.O();
                    return e.substr(0, 3) + ":" + e.substr(3, 2)
                },
                T: function() {
                    var e = (String(a).match(r.tzParts) || [""]).pop().replace(r.tzClip, "");
                    return e || "UTC"
                },
                Z: function() {
                    return 60 * -a.getTimezoneOffset()
                },
                c: function() {
                    return "Y-m-d\\TH:i:sP".replace(d, u)
                },
                r: function() {
                    return "D, d M Y H:i:s O".replace(d, u)
                },
                U: function() {
                    return a.getTime() / 1e3 || 0
                }
            }, u(e, e)
        },
        formatDate: function(e, t) {
            var a, n, r, o, i, s = this,
                d = "",
                u = "\\";
            if ("string" == typeof e && (e = s.parseDate(e, t), !e)) return null;
            if (e instanceof Date) {
                for (r = t.length, a = 0; r > a; a++) i = t.charAt(a), "S" !== i && i !== u && (a > 0 && t.charAt(a - 1) === u ? d += i : (o = s.parseFormat(i, e), a !== r - 1 && s.intParts.test(i) && "S" === t.charAt(a + 1) && (n = parseInt(o) || 0, o += s.dateSettings.ordinal(n)), d += o));
                return d
            }
            return ""
        }
    }
}(),
function(e) {
    "function" == typeof define && define.amd ? define(["jquery", "jquery-mousewheel"], e) : "object" == typeof exports ? module.exports = e : e(jQuery)
}(function(e) {
    "use strict";

    function t(e, t, a) {
        this.date = e, this.desc = t, this.style = a
    }
    var a = {
            i18n: {
                ar: {
                    months: ["ÙƒØ§Ù†ÙˆÙ† Ø§Ù„Ø«Ø§Ù†ÙŠ", "Ø´Ø¨Ø§Ø·", "Ø¢Ø°Ø§Ø±", "Ù†ÙŠØ³Ø§Ù†", "Ù…Ø§ÙŠÙˆ", "Ø­Ø²ÙŠØ±Ø§Ù†", "ØªÙ…ÙˆØ²", "Ø¢Ø¨", "Ø£ÙŠÙ„ÙˆÙ„", "ØªØ´Ø±ÙŠÙ† Ø§Ù„Ø£ÙˆÙ„", "ØªØ´Ø±ÙŠÙ† Ø§Ù„Ø«Ø§Ù†ÙŠ", "ÙƒØ§Ù†ÙˆÙ† Ø§Ù„Ø£ÙˆÙ„"],
                    dayOfWeekShort: ["Ù†", "Ø«", "Ø¹", "Ø®", "Ø¬", "Ø³", "Ø­"],
                    dayOfWeek: ["Ø§Ù„Ø£Ø­Ø¯", "Ø§Ù„Ø§Ø«Ù†ÙŠÙ†", "Ø§Ù„Ø«Ù„Ø§Ø«Ø§Ø¡", "Ø§Ù„Ø£Ø±Ø¨Ø¹Ø§Ø¡", "Ø§Ù„Ø®Ù…ÙŠØ³", "Ø§Ù„Ø¬Ù…Ø¹Ø©", "Ø§Ù„Ø³Ø¨Øª", "Ø§Ù„Ø£Ø­Ø¯"]
                },
                ro: {
                    months: ["Ianuarie", "Februarie", "Martie", "Aprilie", "Mai", "Iunie", "Iulie", "August", "Septembrie", "Octombrie", "Noiembrie", "Decembrie"],
                    dayOfWeekShort: ["Du", "Lu", "Ma", "Mi", "Jo", "Vi", "SÃ¢"],
                    dayOfWeek: ["DuminicÄƒ", "Luni", "MarÅ£i", "Miercuri", "Joi", "Vineri", "SÃ¢mbÄƒtÄƒ"]
                },
                id: {
                    months: ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"],
                    dayOfWeekShort: ["Min", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"],
                    dayOfWeek: ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"]
                },
                is: {
                    months: ["JanÃºar", "FebrÃºar", "Mars", "AprÃ­l", "MaÃ­", "JÃºnÃ­", "JÃºlÃ­", "ÃgÃºst", "September", "OktÃ³ber", "NÃ³vember", "Desember"],
                    dayOfWeekShort: ["Sun", "MÃ¡n", "ÃžriÃ°", "MiÃ°", "Fim", "FÃ¶s", "Lau"],
                    dayOfWeek: ["Sunnudagur", "MÃ¡nudagur", "ÃžriÃ°judagur", "MiÃ°vikudagur", "Fimmtudagur", "FÃ¶studagur", "Laugardagur"]
                },
                bg: {
                    months: ["Ð¯Ð½ÑƒÐ°Ñ€Ð¸", "Ð¤ÐµÐ²Ñ€ÑƒÐ°Ñ€Ð¸", "ÐœÐ°Ñ€Ñ‚", "ÐÐ¿Ñ€Ð¸Ð»", "ÐœÐ°Ð¹", "Ð®Ð½Ð¸", "Ð®Ð»Ð¸", "ÐÐ²Ð³ÑƒÑÑ‚", "Ð¡ÐµÐ¿Ñ‚ÐµÐ¼Ð²Ñ€Ð¸", "ÐžÐºÑ‚Ð¾Ð¼Ð²Ñ€Ð¸", "ÐÐ¾ÐµÐ¼Ð²Ñ€Ð¸", "Ð”ÐµÐºÐµÐ¼Ð²Ñ€Ð¸"],
                    dayOfWeekShort: ["ÐÐ´", "ÐŸÐ½", "Ð’Ñ‚", "Ð¡Ñ€", "Ð§Ñ‚", "ÐŸÑ‚", "Ð¡Ð±"],
                    dayOfWeek: ["ÐÐµÐ´ÐµÐ»Ñ", "ÐŸÐ¾Ð½ÐµÐ´ÐµÐ»Ð½Ð¸Ðº", "Ð’Ñ‚Ð¾Ñ€Ð½Ð¸Ðº", "Ð¡Ñ€ÑÐ´Ð°", "Ð§ÐµÑ‚Ð²ÑŠÑ€Ñ‚ÑŠÐº", "ÐŸÐµÑ‚ÑŠÐº", "Ð¡ÑŠÐ±Ð¾Ñ‚Ð°"]
                },
                fa: {
                    months: ["ÙØ±ÙˆØ±Ø¯ÛŒÙ†", "Ø§Ø±Ø¯ÛŒØ¨Ù‡Ø´Øª", "Ø®Ø±Ø¯Ø§Ø¯", "ØªÛŒØ±", "Ù…Ø±Ø¯Ø§Ø¯", "Ø´Ù‡Ø±ÛŒÙˆØ±", "Ù…Ù‡Ø±", "Ø¢Ø¨Ø§Ù†", "Ø¢Ø°Ø±", "Ø¯ÛŒ", "Ø¨Ù‡Ù…Ù†", "Ø§Ø³ÙÙ†Ø¯"],
                    dayOfWeekShort: ["ÛŒÚ©Ø´Ù†Ø¨Ù‡", "Ø¯ÙˆØ´Ù†Ø¨Ù‡", "Ø³Ù‡ Ø´Ù†Ø¨Ù‡", "Ú†Ù‡Ø§Ø±Ø´Ù†Ø¨Ù‡", "Ù¾Ù†Ø¬Ø´Ù†Ø¨Ù‡", "Ø¬Ù…Ø¹Ù‡", "Ø´Ù†Ø¨Ù‡"],
                    dayOfWeek: ["ÛŒÚ©â€ŒØ´Ù†Ø¨Ù‡", "Ø¯ÙˆØ´Ù†Ø¨Ù‡", "Ø³Ù‡â€ŒØ´Ù†Ø¨Ù‡", "Ú†Ù‡Ø§Ø±Ø´Ù†Ø¨Ù‡", "Ù¾Ù†Ø¬â€ŒØ´Ù†Ø¨Ù‡", "Ø¬Ù…Ø¹Ù‡", "Ø´Ù†Ø¨Ù‡", "ÛŒÚ©â€ŒØ´Ù†Ø¨Ù‡"]
                },
                ru: {
                    months: ["Ð¯Ð½Ð²Ð°Ñ€ÑŒ", "Ð¤ÐµÐ²Ñ€Ð°Ð»ÑŒ", "ÐœÐ°Ñ€Ñ‚", "ÐÐ¿Ñ€ÐµÐ»ÑŒ", "ÐœÐ°Ð¹", "Ð˜ÑŽÐ½ÑŒ", "Ð˜ÑŽÐ»ÑŒ", "ÐÐ²Ð³ÑƒÑÑ‚", "Ð¡ÐµÐ½Ñ‚ÑÐ±Ñ€ÑŒ", "ÐžÐºÑ‚ÑÐ±Ñ€ÑŒ", "ÐÐ¾ÑÐ±Ñ€ÑŒ", "Ð”ÐµÐºÐ°Ð±Ñ€ÑŒ"],
                    dayOfWeekShort: ["Ð’Ñ", "ÐŸÐ½", "Ð’Ñ‚", "Ð¡Ñ€", "Ð§Ñ‚", "ÐŸÑ‚", "Ð¡Ð±"],
                    dayOfWeek: ["Ð’Ð¾ÑÐºÑ€ÐµÑÐµÐ½ÑŒÐµ", "ÐŸÐ¾Ð½ÐµÐ´ÐµÐ»ÑŒÐ½Ð¸Ðº", "Ð’Ñ‚Ð¾Ñ€Ð½Ð¸Ðº", "Ð¡Ñ€ÐµÐ´Ð°", "Ð§ÐµÑ‚Ð²ÐµÑ€Ð³", "ÐŸÑÑ‚Ð½Ð¸Ñ†Ð°", "Ð¡ÑƒÐ±Ð±Ð¾Ñ‚Ð°"]
                },
                uk: {
                    months: ["Ð¡Ñ–Ñ‡ÐµÐ½ÑŒ", "Ð›ÑŽÑ‚Ð¸Ð¹", "Ð‘ÐµÑ€ÐµÐ·ÐµÐ½ÑŒ", "ÐšÐ²Ñ–Ñ‚ÐµÐ½ÑŒ", "Ð¢Ñ€Ð°Ð²ÐµÐ½ÑŒ", "Ð§ÐµÑ€Ð²ÐµÐ½ÑŒ", "Ð›Ð¸Ð¿ÐµÐ½ÑŒ", "Ð¡ÐµÑ€Ð¿ÐµÐ½ÑŒ", "Ð’ÐµÑ€ÐµÑÐµÐ½ÑŒ", "Ð–Ð¾Ð²Ñ‚ÐµÐ½ÑŒ", "Ð›Ð¸ÑÑ‚Ð¾Ð¿Ð°Ð´", "Ð“Ñ€ÑƒÐ´ÐµÐ½ÑŒ"],
                    dayOfWeekShort: ["ÐÐ´Ð»", "ÐŸÐ½Ð´", "Ð’Ñ‚Ñ€", "Ð¡Ñ€Ð´", "Ð§Ñ‚Ð²", "ÐŸÑ‚Ð½", "Ð¡Ð±Ñ‚"],
                    dayOfWeek: ["ÐÐµÐ´Ñ–Ð»Ñ", "ÐŸÐ¾Ð½ÐµÐ´Ñ–Ð»Ð¾Ðº", "Ð’Ñ–Ð²Ñ‚Ð¾Ñ€Ð¾Ðº", "Ð¡ÐµÑ€ÐµÐ´Ð°", "Ð§ÐµÑ‚Ð²ÐµÑ€", "ÐŸ'ÑÑ‚Ð½Ð¸Ñ†Ñ", "Ð¡ÑƒÐ±Ð¾Ñ‚Ð°"]
                },
                en: {
                    months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                    dayOfWeekShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                    dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
                },
                el: {
                    months: ["Î™Î±Î½Î¿Ï…Î¬ÏÎ¹Î¿Ï‚", "Î¦ÎµÎ²ÏÎ¿Ï…Î¬ÏÎ¹Î¿Ï‚", "ÎœÎ¬ÏÏ„Î¹Î¿Ï‚", "Î‘Ï€ÏÎ¯Î»Î¹Î¿Ï‚", "ÎœÎ¬Î¹Î¿Ï‚", "Î™Î¿ÏÎ½Î¹Î¿Ï‚", "Î™Î¿ÏÎ»Î¹Î¿Ï‚", "Î‘ÏÎ³Î¿Ï…ÏƒÏ„Î¿Ï‚", "Î£ÎµÏ€Ï„Î­Î¼Î²ÏÎ¹Î¿Ï‚", "ÎŸÎºÏ„ÏŽÎ²ÏÎ¹Î¿Ï‚", "ÎÎ¿Î­Î¼Î²ÏÎ¹Î¿Ï‚", "Î”ÎµÎºÎ­Î¼Î²ÏÎ¹Î¿Ï‚"],
                    dayOfWeekShort: ["ÎšÏ…Ï", "Î”ÎµÏ…", "Î¤ÏÎ¹", "Î¤ÎµÏ„", "Î ÎµÎ¼", "Î Î±Ï", "Î£Î±Î²"],
                    dayOfWeek: ["ÎšÏ…ÏÎ¹Î±ÎºÎ®", "Î”ÎµÏ…Ï„Î­ÏÎ±", "Î¤ÏÎ¯Ï„Î·", "Î¤ÎµÏ„Î¬ÏÏ„Î·", "Î Î­Î¼Ï€Ï„Î·", "Î Î±ÏÎ±ÏƒÎºÎµÏ…Î®", "Î£Î¬Î²Î²Î±Ï„Î¿"]
                },
                de: {
                    months: ["Januar", "Februar", "MÃ¤rz", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"],
                    dayOfWeekShort: ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"],
                    dayOfWeek: ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"]
                },
                nl: {
                    months: ["januari", "februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december"],
                    dayOfWeekShort: ["zo", "ma", "di", "wo", "do", "vr", "za"],
                    dayOfWeek: ["zondag", "maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag"]
                },
                tr: {
                    months: ["Ocak", "Åžubat", "Mart", "Nisan", "MayÄ±s", "Haziran", "Temmuz", "AÄŸustos", "EylÃ¼l", "Ekim", "KasÄ±m", "AralÄ±k"],
                    dayOfWeekShort: ["Paz", "Pts", "Sal", "Ã‡ar", "Per", "Cum", "Cts"],
                    dayOfWeek: ["Pazar", "Pazartesi", "SalÄ±", "Ã‡arÅŸamba", "PerÅŸembe", "Cuma", "Cumartesi"]
                },
                fr: {
                    months: ["Janvier", "FÃ©vrier", "Mars", "Avril", "Mai", "Juin", "Juillet", "AoÃ»t", "Septembre", "Octobre", "Novembre", "DÃ©cembre"],
                    dayOfWeekShort: ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"],
                    dayOfWeek: ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"]
                },
                es: {
                    months: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
                    dayOfWeekShort: ["Dom", "Lun", "Mar", "MiÃ©", "Jue", "Vie", "SÃ¡b"],
                    dayOfWeek: ["Domingo", "Lunes", "Martes", "MiÃ©rcoles", "Jueves", "Viernes", "SÃ¡bado"]
                },
                th: {
                    months: ["à¸¡à¸à¸£à¸²à¸„à¸¡", "à¸à¸¸à¸¡à¸ à¸²à¸žà¸±à¸™à¸˜à¹Œ", "à¸¡à¸µà¸™à¸²à¸„à¸¡", "à¹€à¸¡à¸©à¸²à¸¢à¸™", "à¸žà¸¤à¸©à¸ à¸²à¸„à¸¡", "à¸¡à¸´à¸–à¸¸à¸™à¸²à¸¢à¸™", "à¸à¸£à¸à¸Žà¸²à¸„à¸¡", "à¸ªà¸´à¸‡à¸«à¸²à¸„à¸¡", "à¸à¸±à¸™à¸¢à¸²à¸¢à¸™", "à¸•à¸¸à¸¥à¸²à¸„à¸¡", "à¸žà¸¤à¸¨à¸ˆà¸´à¸à¸²à¸¢à¸™", "à¸˜à¸±à¸™à¸§à¸²à¸„à¸¡"],
                    dayOfWeekShort: ["à¸­à¸².", "à¸ˆ.", "à¸­.", "à¸ž.", "à¸žà¸¤.", "à¸¨.", "à¸ª."],
                    dayOfWeek: ["à¸­à¸²à¸—à¸´à¸•à¸¢à¹Œ", "à¸ˆà¸±à¸™à¸—à¸£à¹Œ", "à¸­à¸±à¸‡à¸„à¸²à¸£", "à¸žà¸¸à¸˜", "à¸žà¸¤à¸«à¸±à¸ª", "à¸¨à¸¸à¸à¸£à¹Œ", "à¹€à¸ªà¸²à¸£à¹Œ", "à¸­à¸²à¸—à¸´à¸•à¸¢à¹Œ"]
                },
                pl: {
                    months: ["styczeÅ„", "luty", "marzec", "kwiecieÅ„", "maj", "czerwiec", "lipiec", "sierpieÅ„", "wrzesieÅ„", "paÅºdziernik", "listopad", "grudzieÅ„"],
                    dayOfWeekShort: ["nd", "pn", "wt", "Å›r", "cz", "pt", "sb"],
                    dayOfWeek: ["niedziela", "poniedziaÅ‚ek", "wtorek", "Å›roda", "czwartek", "piÄ…tek", "sobota"]
                },
                pt: {
                    months: ["Janeiro", "Fevereiro", "MarÃ§o", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
                    dayOfWeekShort: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"],
                    dayOfWeek: ["Domingo", "Segunda", "TerÃ§a", "Quarta", "Quinta", "Sexta", "SÃ¡bado"]
                },
                ch: {
                    months: ["ä¸€æœˆ", "äºŒæœˆ", "ä¸‰æœˆ", "å››æœˆ", "äº”æœˆ", "å…­æœˆ", "ä¸ƒæœˆ", "å…«æœˆ", "ä¹æœˆ", "åæœˆ", "åä¸€æœˆ", "åäºŒæœˆ"],
                    dayOfWeekShort: ["æ—¥", "ä¸€", "äºŒ", "ä¸‰", "å››", "äº”", "å…­"]
                },
                se: {
                    months: ["Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "September", "Oktober", "November", "December"],
                    dayOfWeekShort: ["SÃ¶n", "MÃ¥n", "Tis", "Ons", "Tor", "Fre", "LÃ¶r"]
                },
                km: {
                    months: ["áž˜áž€ážšáž¶â€‹", "áž€áž»áž˜áŸ’áž—áŸˆ", "áž˜áž·áž“áž¶â€‹", "áž˜áŸážŸáž¶â€‹", "áž§ážŸáž—áž¶â€‹", "áž˜áž·ážáž»áž“áž¶â€‹", "áž€áž€áŸ’áž€ážŠáž¶â€‹", "ážŸáž¸áž áž¶â€‹", "áž€áž‰áŸ’áž‰áž¶â€‹", "ážáž»áž›áž¶â€‹", "ážœáž·áž…áŸ’áž‹áž·áž€áž¶â€‹", "áž’áŸ’áž“áž¼â€‹"],
                    dayOfWeekShort: ["áž¢áž¶áž‘áž·â€‹", "áž…áž“áŸ’áž‘â€‹", "áž¢áž„áŸ’áž‚áž¶ážšâ€‹", "áž–áž»áž’â€‹", "áž–áŸ’ážšáž â€‹â€‹", "ážŸáž»áž€áŸ’ážšâ€‹", "ážŸáŸ…ážšáŸ"],
                    dayOfWeek: ["áž¢áž¶áž‘áž·ážáŸ’áž™â€‹", "áž…áž“áŸ’áž‘â€‹", "áž¢áž„áŸ’áž‚áž¶ážšâ€‹", "áž–áž»áž’â€‹", "áž–áŸ’ážšáž ážŸáŸ’áž”ážáž·áŸâ€‹", "ážŸáž»áž€áŸ’ážšâ€‹", "ážŸáŸ…ážšáŸ"]
                },
                kr: {
                    months: ["1ì›”", "2ì›”", "3ì›”", "4ì›”", "5ì›”", "6ì›”", "7ì›”", "8ì›”", "9ì›”", "10ì›”", "11ì›”", "12ì›”"],
                    dayOfWeekShort: ["ì¼", "ì›”", "í™”", "ìˆ˜", "ëª©", "ê¸ˆ", "í† "],
                    dayOfWeek: ["ì¼ìš”ì¼", "ì›”ìš”ì¼", "í™”ìš”ì¼", "ìˆ˜ìš”ì¼", "ëª©ìš”ì¼", "ê¸ˆìš”ì¼", "í† ìš”ì¼"]
                },
                it: {
                    months: ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"],
                    dayOfWeekShort: ["Dom", "Lun", "Mar", "Mer", "Gio", "Ven", "Sab"],
                    dayOfWeek: ["Domenica", "LunedÃ¬", "MartedÃ¬", "MercoledÃ¬", "GiovedÃ¬", "VenerdÃ¬", "Sabato"]
                },
                da: {
                    months: ["January", "Februar", "Marts", "April", "Maj", "Juni", "July", "August", "September", "Oktober", "November", "December"],
                    dayOfWeekShort: ["SÃ¸n", "Man", "Tir", "Ons", "Tor", "Fre", "LÃ¸r"],
                    dayOfWeek: ["sÃ¸ndag", "mandag", "tirsdag", "onsdag", "torsdag", "fredag", "lÃ¸rdag"]
                },
                no: {
                    months: ["Januar", "Februar", "Mars", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Desember"],
                    dayOfWeekShort: ["SÃ¸n", "Man", "Tir", "Ons", "Tor", "Fre", "LÃ¸r"],
                    dayOfWeek: ["SÃ¸ndag", "Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag", "LÃ¸rdag"]
                },
                ja: {
                    months: ["1æœˆ", "2æœˆ", "3æœˆ", "4æœˆ", "5æœˆ", "6æœˆ", "7æœˆ", "8æœˆ", "9æœˆ", "10æœˆ", "11æœˆ", "12æœˆ"],
                    dayOfWeekShort: ["æ—¥", "æœˆ", "ç«", "æ°´", "æœ¨", "é‡‘", "åœŸ"],
                    dayOfWeek: ["æ—¥æ›œ", "æœˆæ›œ", "ç«æ›œ", "æ°´æ›œ", "æœ¨æ›œ", "é‡‘æ›œ", "åœŸæ›œ"]
                },
                vi: {
                    months: ["ThÃ¡ng 1", "ThÃ¡ng 2", "ThÃ¡ng 3", "ThÃ¡ng 4", "ThÃ¡ng 5", "ThÃ¡ng 6", "ThÃ¡ng 7", "ThÃ¡ng 8", "ThÃ¡ng 9", "ThÃ¡ng 10", "ThÃ¡ng 11", "ThÃ¡ng 12"],
                    dayOfWeekShort: ["CN", "T2", "T3", "T4", "T5", "T6", "T7"],
                    dayOfWeek: ["Chá»§ nháº­t", "Thá»© hai", "Thá»© ba", "Thá»© tÆ°", "Thá»© nÄƒm", "Thá»© sÃ¡u", "Thá»© báº£y"]
                },
                sl: {
                    months: ["Januar", "Februar", "Marec", "April", "Maj", "Junij", "Julij", "Avgust", "September", "Oktober", "November", "December"],
                    dayOfWeekShort: ["Ned", "Pon", "Tor", "Sre", "ÄŒet", "Pet", "Sob"],
                    dayOfWeek: ["Nedelja", "Ponedeljek", "Torek", "Sreda", "ÄŒetrtek", "Petek", "Sobota"]
                },
                cs: {
                    months: ["Leden", "Ãšnor", "BÅ™ezen", "Duben", "KvÄ›ten", "ÄŒerven", "ÄŒervenec", "Srpen", "ZÃ¡Å™Ã­", "Å˜Ã­jen", "Listopad", "Prosinec"],
                    dayOfWeekShort: ["Ne", "Po", "Ãšt", "St", "ÄŒt", "PÃ¡", "So"]
                },
                hu: {
                    months: ["JanuÃ¡r", "FebruÃ¡r", "MÃ¡rcius", "Ãprilis", "MÃ¡jus", "JÃºnius", "JÃºlius", "Augusztus", "Szeptember", "OktÃ³ber", "November", "December"],
                    dayOfWeekShort: ["Va", "HÃ©", "Ke", "Sze", "Cs", "PÃ©", "Szo"],
                    dayOfWeek: ["vasÃ¡rnap", "hÃ©tfÅ‘", "kedd", "szerda", "csÃ¼tÃ¶rtÃ¶k", "pÃ©ntek", "szombat"]
                },
                az: {
                    months: ["Yanvar", "Fevral", "Mart", "Aprel", "May", "Iyun", "Iyul", "Avqust", "Sentyabr", "Oktyabr", "Noyabr", "Dekabr"],
                    dayOfWeekShort: ["B", "Be", "Ã‡a", "Ã‡", "Ca", "C", "Åž"],
                    dayOfWeek: ["Bazar", "Bazar ertÉ™si", "Ã‡É™rÅŸÉ™nbÉ™ axÅŸamÄ±", "Ã‡É™rÅŸÉ™nbÉ™", "CÃ¼mÉ™ axÅŸamÄ±", "CÃ¼mÉ™", "ÅžÉ™nbÉ™"]
                },
                bs: {
                    months: ["Januar", "Februar", "Mart", "April", "Maj", "Jun", "Jul", "Avgust", "Septembar", "Oktobar", "Novembar", "Decembar"],
                    dayOfWeekShort: ["Ned", "Pon", "Uto", "Sri", "ÄŒet", "Pet", "Sub"],
                    dayOfWeek: ["Nedjelja", "Ponedjeljak", "Utorak", "Srijeda", "ÄŒetvrtak", "Petak", "Subota"]
                },
                ca: {
                    months: ["Gener", "Febrer", "MarÃ§", "Abril", "Maig", "Juny", "Juliol", "Agost", "Setembre", "Octubre", "Novembre", "Desembre"],
                    dayOfWeekShort: ["Dg", "Dl", "Dt", "Dc", "Dj", "Dv", "Ds"],
                    dayOfWeek: ["Diumenge", "Dilluns", "Dimarts", "Dimecres", "Dijous", "Divendres", "Dissabte"]
                },
                "en-GB": {
                    months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                    dayOfWeekShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                    dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
                },
                et: {
                    months: ["Jaanuar", "Veebruar", "MÃ¤rts", "Aprill", "Mai", "Juuni", "Juuli", "August", "September", "Oktoober", "November", "Detsember"],
                    dayOfWeekShort: ["P", "E", "T", "K", "N", "R", "L"],
                    dayOfWeek: ["PÃ¼hapÃ¤ev", "EsmaspÃ¤ev", "TeisipÃ¤ev", "KolmapÃ¤ev", "NeljapÃ¤ev", "Reede", "LaupÃ¤ev"]
                },
                eu: {
                    months: ["Urtarrila", "Otsaila", "Martxoa", "Apirila", "Maiatza", "Ekaina", "Uztaila", "Abuztua", "Iraila", "Urria", "Azaroa", "Abendua"],
                    dayOfWeekShort: ["Ig.", "Al.", "Ar.", "Az.", "Og.", "Or.", "La."],
                    dayOfWeek: ["Igandea", "Astelehena", "Asteartea", "Asteazkena", "Osteguna", "Ostirala", "Larunbata"]
                },
                fi: {
                    months: ["Tammikuu", "Helmikuu", "Maaliskuu", "Huhtikuu", "Toukokuu", "KesÃ¤kuu", "HeinÃ¤kuu", "Elokuu", "Syyskuu", "Lokakuu", "Marraskuu", "Joulukuu"],
                    dayOfWeekShort: ["Su", "Ma", "Ti", "Ke", "To", "Pe", "La"],
                    dayOfWeek: ["sunnuntai", "maanantai", "tiistai", "keskiviikko", "torstai", "perjantai", "lauantai"]
                },
                gl: {
                    months: ["Xan", "Feb", "Maz", "Abr", "Mai", "Xun", "Xul", "Ago", "Set", "Out", "Nov", "Dec"],
                    dayOfWeekShort: ["Dom", "Lun", "Mar", "Mer", "Xov", "Ven", "Sab"],
                    dayOfWeek: ["Domingo", "Luns", "Martes", "MÃ©rcores", "Xoves", "Venres", "SÃ¡bado"]
                },
                hr: {
                    months: ["SijeÄanj", "VeljaÄa", "OÅ¾ujak", "Travanj", "Svibanj", "Lipanj", "Srpanj", "Kolovoz", "Rujan", "Listopad", "Studeni", "Prosinac"],
                    dayOfWeekShort: ["Ned", "Pon", "Uto", "Sri", "ÄŒet", "Pet", "Sub"],
                    dayOfWeek: ["Nedjelja", "Ponedjeljak", "Utorak", "Srijeda", "ÄŒetvrtak", "Petak", "Subota"]
                },
                ko: {
                    months: ["1ì›”", "2ì›”", "3ì›”", "4ì›”", "5ì›”", "6ì›”", "7ì›”", "8ì›”", "9ì›”", "10ì›”", "11ì›”", "12ì›”"],
                    dayOfWeekShort: ["ì¼", "ì›”", "í™”", "ìˆ˜", "ëª©", "ê¸ˆ", "í† "],
                    dayOfWeek: ["ì¼ìš”ì¼", "ì›”ìš”ì¼", "í™”ìš”ì¼", "ìˆ˜ìš”ì¼", "ëª©ìš”ì¼", "ê¸ˆìš”ì¼", "í† ìš”ì¼"]
                },
                lt: {
                    months: ["Sausio", "Vasario", "Kovo", "BalandÅ¾io", "GeguÅ¾Ä—s", "BirÅ¾elio", "Liepos", "RugpjÅ«Äio", "RugsÄ—jo", "Spalio", "LapkriÄio", "GruodÅ¾io"],
                    dayOfWeekShort: ["Sek", "Pir", "Ant", "Tre", "Ket", "Pen", "Å eÅ¡"],
                    dayOfWeek: ["Sekmadienis", "Pirmadienis", "Antradienis", "TreÄiadienis", "Ketvirtadienis", "Penktadienis", "Å eÅ¡tadienis"]
                },
                lv: {
                    months: ["JanvÄris", "FebruÄris", "Marts", "AprÄ«lis ", "Maijs", "JÅ«nijs", "JÅ«lijs", "Augusts", "Septembris", "Oktobris", "Novembris", "Decembris"],
                    dayOfWeekShort: ["Sv", "Pr", "Ot", "Tr", "Ct", "Pk", "St"],
                    dayOfWeek: ["SvÄ“tdiena", "Pirmdiena", "Otrdiena", "TreÅ¡diena", "Ceturtdiena", "Piektdiena", "Sestdiena"]
                },
                mk: {
                    months: ["Ñ˜Ð°Ð½ÑƒÐ°Ñ€Ð¸", "Ñ„ÐµÐ²Ñ€ÑƒÐ°Ñ€Ð¸", "Ð¼Ð°Ñ€Ñ‚", "Ð°Ð¿Ñ€Ð¸Ð»", "Ð¼Ð°Ñ˜", "Ñ˜ÑƒÐ½Ð¸", "Ñ˜ÑƒÐ»Ð¸", "Ð°Ð²Ð³ÑƒÑÑ‚", "ÑÐµÐ¿Ñ‚ÐµÐ¼Ð²Ñ€Ð¸", "Ð¾ÐºÑ‚Ð¾Ð¼Ð²Ñ€Ð¸", "Ð½Ð¾ÐµÐ¼Ð²Ñ€Ð¸", "Ð´ÐµÐºÐµÐ¼Ð²Ñ€Ð¸"],
                    dayOfWeekShort: ["Ð½ÐµÐ´", "Ð¿Ð¾Ð½", "Ð²Ñ‚Ð¾", "ÑÑ€Ðµ", "Ñ‡ÐµÑ‚", "Ð¿ÐµÑ‚", "ÑÐ°Ð±"],
                    dayOfWeek: ["ÐÐµÐ´ÐµÐ»Ð°", "ÐŸÐ¾Ð½ÐµÐ´ÐµÐ»Ð½Ð¸Ðº", "Ð’Ñ‚Ð¾Ñ€Ð½Ð¸Ðº", "Ð¡Ñ€ÐµÐ´Ð°", "Ð§ÐµÑ‚Ð²Ñ€Ñ‚Ð¾Ðº", "ÐŸÐµÑ‚Ð¾Ðº", "Ð¡Ð°Ð±Ð¾Ñ‚Ð°"]
                },
                mn: {
                    months: ["1-Ñ€ ÑÐ°Ñ€", "2-Ñ€ ÑÐ°Ñ€", "3-Ñ€ ÑÐ°Ñ€", "4-Ñ€ ÑÐ°Ñ€", "5-Ñ€ ÑÐ°Ñ€", "6-Ñ€ ÑÐ°Ñ€", "7-Ñ€ ÑÐ°Ñ€", "8-Ñ€ ÑÐ°Ñ€", "9-Ñ€ ÑÐ°Ñ€", "10-Ñ€ ÑÐ°Ñ€", "11-Ñ€ ÑÐ°Ñ€", "12-Ñ€ ÑÐ°Ñ€"],
                    dayOfWeekShort: ["Ð”Ð°Ð²", "ÐœÑÐ³", "Ð›Ñ…Ð°", "ÐŸÒ¯Ñ€", "Ð‘ÑÐ½", "Ð‘ÑÐ¼", "ÐÑÐ¼"],
                    dayOfWeek: ["Ð”Ð°Ð²Ð°Ð°", "ÐœÑÐ³Ð¼Ð°Ñ€", "Ð›Ñ…Ð°Ð³Ð²Ð°", "ÐŸÒ¯Ñ€ÑÐ²", "Ð‘Ð°Ð°ÑÐ°Ð½", "Ð‘ÑÐ¼Ð±Ð°", "ÐÑÐ¼"]
                },
                "pt-BR": {
                    months: ["Janeiro", "Fevereiro", "MarÃ§o", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
                    dayOfWeekShort: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "SÃ¡b"],
                    dayOfWeek: ["Domingo", "Segunda", "TerÃ§a", "Quarta", "Quinta", "Sexta", "SÃ¡bado"]
                },
                sk: {
                    months: ["JanuÃ¡r", "FebruÃ¡r", "Marec", "AprÃ­l", "MÃ¡j", "JÃºn", "JÃºl", "August", "September", "OktÃ³ber", "November", "December"],
                    dayOfWeekShort: ["Ne", "Po", "Ut", "St", "Å t", "Pi", "So"],
                    dayOfWeek: ["NedeÄ¾a", "Pondelok", "Utorok", "Streda", "Å tvrtok", "Piatok", "Sobota"]
                },
                sq: {
                    months: ["Janar", "Shkurt", "Mars", "Prill", "Maj", "Qershor", "Korrik", "Gusht", "Shtator", "Tetor", "NÃ«ntor", "Dhjetor"],
                    dayOfWeekShort: ["Die", "HÃ«n", "Mar", "MÃ«r", "Enj", "Pre", "Shtu"],
                    dayOfWeek: ["E Diel", "E HÃ«nÃ«", "E MartÄ“", "E MÃ«rkurÃ«", "E Enjte", "E Premte", "E ShtunÃ«"]
                },
                "sr-YU": {
                    months: ["Januar", "Februar", "Mart", "April", "Maj", "Jun", "Jul", "Avgust", "Septembar", "Oktobar", "Novembar", "Decembar"],
                    dayOfWeekShort: ["Ned", "Pon", "Uto", "Sre", "Äet", "Pet", "Sub"],
                    dayOfWeek: ["Nedelja", "Ponedeljak", "Utorak", "Sreda", "ÄŒetvrtak", "Petak", "Subota"]
                },
                sr: {
                    months: ["Ñ˜Ð°Ð½ÑƒÐ°Ñ€", "Ñ„ÐµÐ±Ñ€ÑƒÐ°Ñ€", "Ð¼Ð°Ñ€Ñ‚", "Ð°Ð¿Ñ€Ð¸Ð»", "Ð¼Ð°Ñ˜", "Ñ˜ÑƒÐ½", "Ñ˜ÑƒÐ»", "Ð°Ð²Ð³ÑƒÑÑ‚", "ÑÐµÐ¿Ñ‚ÐµÐ¼Ð±Ð°Ñ€", "Ð¾ÐºÑ‚Ð¾Ð±Ð°Ñ€", "Ð½Ð¾Ð²ÐµÐ¼Ð±Ð°Ñ€", "Ð´ÐµÑ†ÐµÐ¼Ð±Ð°Ñ€"],
                    dayOfWeekShort: ["Ð½ÐµÐ´", "Ð¿Ð¾Ð½", "ÑƒÑ‚Ð¾", "ÑÑ€Ðµ", "Ñ‡ÐµÑ‚", "Ð¿ÐµÑ‚", "ÑÑƒÐ±"],
                    dayOfWeek: ["ÐÐµÐ´ÐµÑ™Ð°", "ÐŸÐ¾Ð½ÐµÐ´ÐµÑ™Ð°Ðº", "Ð£Ñ‚Ð¾Ñ€Ð°Ðº", "Ð¡Ñ€ÐµÐ´Ð°", "Ð§ÐµÑ‚Ð²Ñ€Ñ‚Ð°Ðº", "ÐŸÐµÑ‚Ð°Ðº", "Ð¡ÑƒÐ±Ð¾Ñ‚Ð°"]
                },
                sv: {
                    months: ["Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "September", "Oktober", "November", "December"],
                    dayOfWeekShort: ["SÃ¶n", "MÃ¥n", "Tis", "Ons", "Tor", "Fre", "LÃ¶r"],
                    dayOfWeek: ["SÃ¶ndag", "MÃ¥ndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "LÃ¶rdag"]
                },
                "zh-TW": {
                    months: ["ä¸€æœˆ", "äºŒæœˆ", "ä¸‰æœˆ", "å››æœˆ", "äº”æœˆ", "å…­æœˆ", "ä¸ƒæœˆ", "å…«æœˆ", "ä¹æœˆ", "åæœˆ", "åä¸€æœˆ", "åäºŒæœˆ"],
                    dayOfWeekShort: ["æ—¥", "ä¸€", "äºŒ", "ä¸‰", "å››", "äº”", "å…­"],
                    dayOfWeek: ["æ˜ŸæœŸæ—¥", "æ˜ŸæœŸä¸€", "æ˜ŸæœŸäºŒ", "æ˜ŸæœŸä¸‰", "æ˜ŸæœŸå››", "æ˜ŸæœŸäº”", "æ˜ŸæœŸå…­"]
                },
                zh: {
                    months: ["ä¸€æœˆ", "äºŒæœˆ", "ä¸‰æœˆ", "å››æœˆ", "äº”æœˆ", "å…­æœˆ", "ä¸ƒæœˆ", "å…«æœˆ", "ä¹æœˆ", "åæœˆ", "åä¸€æœˆ", "åäºŒæœˆ"],
                    dayOfWeekShort: ["æ—¥", "ä¸€", "äºŒ", "ä¸‰", "å››", "äº”", "å…­"],
                    dayOfWeek: ["æ˜ŸæœŸæ—¥", "æ˜ŸæœŸä¸€", "æ˜ŸæœŸäºŒ", "æ˜ŸæœŸä¸‰", "æ˜ŸæœŸå››", "æ˜ŸæœŸäº”", "æ˜ŸæœŸå…­"]
                },
                he: {
                    months: ["×™× ×•××¨", "×¤×‘×¨×•××¨", "×ž×¨×¥", "××¤×¨×™×œ", "×ž××™", "×™×•× ×™", "×™×•×œ×™", "××•×’×•×¡×˜", "×¡×¤×˜×ž×‘×¨", "××•×§×˜×•×‘×¨", "× ×•×‘×ž×‘×¨", "×“×¦×ž×‘×¨"],
                    dayOfWeekShort: ["×'", "×‘'", "×’'", "×“'", "×”'", "×•'", "×©×‘×ª"],
                    dayOfWeek: ["×¨××©×•×Ÿ", "×©× ×™", "×©×œ×™×©×™", "×¨×‘×™×¢×™", "×—×ž×™×©×™", "×©×™×©×™", "×©×‘×ª", "×¨××©×•×Ÿ"]
                },
                hy: {
                    months: ["Õ€Õ¸Ö‚Õ¶Õ¾Õ¡Ö€", "Õ“Õ¥Õ¿Ö€Õ¾Õ¡Ö€", "Õ„Õ¡Ö€Õ¿", "Ô±ÕºÖ€Õ«Õ¬", "Õ„Õ¡ÕµÕ«Õ½", "Õ€Õ¸Ö‚Õ¶Õ«Õ½", "Õ€Õ¸Ö‚Õ¬Õ«Õ½", "Õ•Õ£Õ¸Õ½Õ¿Õ¸Õ½", "ÕÕ¥ÕºÕ¿Õ¥Õ´Õ¢Õ¥Ö€", "Õ€Õ¸Õ¯Õ¿Õ¥Õ´Õ¢Õ¥Ö€", "Õ†Õ¸ÕµÕ¥Õ´Õ¢Õ¥Ö€", "Ô´Õ¥Õ¯Õ¿Õ¥Õ´Õ¢Õ¥Ö€"],
                    dayOfWeekShort: ["Ô¿Õ«", "ÔµÖ€Õ¯", "ÔµÖ€Ö„", "Õ‰Õ¸Ö€", "Õ€Õ¶Õ£", "ÕˆÖ‚Ö€Õ¢", "Õ‡Õ¢Õ©"],
                    dayOfWeek: ["Ô¿Õ«Ö€Õ¡Õ¯Õ«", "ÔµÖ€Õ¯Õ¸Ö‚Õ·Õ¡Õ¢Õ©Õ«", "ÔµÖ€Õ¥Ö„Õ·Õ¡Õ¢Õ©Õ«", "Õ‰Õ¸Ö€Õ¥Ö„Õ·Õ¡Õ¢Õ©Õ«", "Õ€Õ«Õ¶Õ£Õ·Õ¡Õ¢Õ©Õ«", "ÕˆÖ‚Ö€Õ¢Õ¡Õ©", "Õ‡Õ¡Õ¢Õ¡Õ©"]
                },
                kg: {
                    months: ["Ò®Ñ‡Ñ‚Ò¯Ð½ Ð°Ð¹Ñ‹", "Ð‘Ð¸Ñ€Ð´Ð¸Ð½ Ð°Ð¹Ñ‹", "Ð–Ð°Ð»Ð³Ð°Ð½ ÐšÑƒÑ€Ð°Ð½", "Ð§Ñ‹Ð½ ÐšÑƒÑ€Ð°Ð½", "Ð‘ÑƒÐ³Ñƒ", "ÐšÑƒÐ»Ð¶Ð°", "Ð¢ÐµÐºÐµ", "Ð‘Ð°Ñˆ ÐžÐ¾Ð½Ð°", "ÐÑÐº ÐžÐ¾Ð½Ð°", "Ð¢Ð¾Ð³ÑƒÐ·Ð´ÑƒÐ½ Ð°Ð¹Ñ‹", "Ð–ÐµÑ‚Ð¸Ð½Ð¸Ð½ Ð°Ð¹Ñ‹", "Ð‘ÐµÑˆÑ‚Ð¸Ð½ Ð°Ð¹Ñ‹"],
                    dayOfWeekShort: ["Ð–ÐµÐº", "Ð”Ò¯Ð¹", "Ð¨ÐµÐ¹", "Ð¨Ð°Ñ€", "Ð‘ÐµÐ¹", "Ð–ÑƒÐ¼", "Ð˜ÑˆÐµ"],
                    dayOfWeek: ["Ð–ÐµÐºÑˆÐµÐ¼Ð±", "Ð”Ò¯Ð¹ÑˆÓ©Ð¼Ð±", "Ð¨ÐµÐ¹ÑˆÐµÐ¼Ð±", "Ð¨Ð°Ñ€ÑˆÐµÐ¼Ð±", "Ð‘ÐµÐ¹ÑˆÐµÐ¼Ð±Ð¸", "Ð–ÑƒÐ¼Ð°", "Ð˜ÑˆÐµÐ½Ð±"]
                },
                rm: {
                    months: ["Schaner", "Favrer", "Mars", "Avrigl", "Matg", "Zercladur", "Fanadur", "Avust", "Settember", "October", "November", "December"],
                    dayOfWeekShort: ["Du", "Gli", "Ma", "Me", "Gie", "Ve", "So"],
                    dayOfWeek: ["Dumengia", "Glindesdi", "Mardi", "Mesemna", "Gievgia", "Venderdi", "Sonda"]
                },
                ka: {
                    months: ["áƒ˜áƒáƒœáƒ•áƒáƒ áƒ˜", "áƒ—áƒ”áƒ‘áƒ”áƒ áƒ•áƒáƒšáƒ˜", "áƒ›áƒáƒ áƒ¢áƒ˜", "áƒáƒžáƒ áƒ˜áƒšáƒ˜", "áƒ›áƒáƒ˜áƒ¡áƒ˜", "áƒ˜áƒ•áƒœáƒ˜áƒ¡áƒ˜", "áƒ˜áƒ•áƒšáƒ˜áƒ¡áƒ˜", "áƒáƒ’áƒ•áƒ˜áƒ¡áƒ¢áƒ", "áƒ¡áƒ”áƒ¥áƒ¢áƒ”áƒ›áƒ‘áƒ”áƒ áƒ˜", "áƒáƒ¥áƒ¢áƒáƒ›áƒ‘áƒ”áƒ áƒ˜", "áƒœáƒáƒ”áƒ›áƒ‘áƒ”áƒ áƒ˜", "áƒ“áƒ”áƒ™áƒ”áƒ›áƒ‘áƒ”áƒ áƒ˜"],
                    dayOfWeekShort: ["áƒ™áƒ•", "áƒáƒ áƒ¨", "áƒ¡áƒáƒ›áƒ¨", "áƒáƒ—áƒ®", "áƒ®áƒ£áƒ—", "áƒžáƒáƒ ", "áƒ¨áƒáƒ‘"],
                    dayOfWeek: ["áƒ™áƒ•áƒ˜áƒ áƒ", "áƒáƒ áƒ¨áƒáƒ‘áƒáƒ—áƒ˜", "áƒ¡áƒáƒ›áƒ¨áƒáƒ‘áƒáƒ—áƒ˜", "áƒáƒ—áƒ®áƒ¨áƒáƒ‘áƒáƒ—áƒ˜", "áƒ®áƒ£áƒ—áƒ¨áƒáƒ‘áƒáƒ—áƒ˜", "áƒžáƒáƒ áƒáƒ¡áƒ™áƒ”áƒ•áƒ˜", "áƒ¨áƒáƒ‘áƒáƒ—áƒ˜"]
                }
            },
            ownerDocument: document,
            contentWindow: window,
            value: "",
            rtl: !1,
            format: "Y/m/d H:i",
            formatTime: "H:i",
            formatDate: "Y/m/d",
            startDate: !1,
            step: 60,
            monthChangeSpinner: !0,
            closeOnDateSelect: !1,
            closeOnTimeSelect: !0,
            closeOnWithoutClick: !0,
            closeOnInputClick: !0,
            timepicker: !0,
            datepicker: !0,
            weeks: !1,
            defaultTime: !1,
            defaultDate: !1,
            minDate: !1,
            maxDate: !1,
            minTime: !1,
            maxTime: !1,
            disabledMinTime: !1,
            disabledMaxTime: !1,
            allowTimes: [],
            opened: !1,
            initTime: !0,
            inline: !1,
            theme: "",
            onSelectDate: function() {},
            onSelectTime: function() {},
            onChangeMonth: function() {},
            onGetWeekOfYear: function() {},
            onChangeYear: function() {},
            onChangeDateTime: function() {},
            onShow: function() {},
            onClose: function() {},
            onGenerate: function() {},
            withoutCopyright: !0,
            inverseButton: !1,
            hours12: !1,
            next: "xdsoft_next",
            prev: "xdsoft_prev",
            dayOfWeekStart: 0,
            parentID: "body",
            timeHeightInTimePicker: 25,
            timepickerScrollbar: !0,
            todayButton: !0,
            prevButton: !0,
            nextButton: !0,
            defaultSelect: !0,
            scrollMonth: !0,
            scrollTime: !0,
            scrollInput: !0,
            lazyInit: !1,
            mask: !1,
            validateOnBlur: !0,
            allowBlank: !0,
            yearStart: 1950,
            yearEnd: 2050,
            monthStart: 0,
            monthEnd: 11,
            style: "",
            id: "",
            fixed: !1,
            roundTime: "round",
            className: "",
            weekends: [],
            highlightedDates: [],
            highlightedPeriods: [],
            allowDates: [],
            allowDateRe: null,
            disabledDates: [],
            disabledWeekDays: [],
            yearOffset: 0,
            beforeShowDay: null,
            enterLikeTab: !0,
            showApplyButton: !1
        },
        n = null,
        r = "en",
        o = "en",
        i = {
            meridiem: ["AM", "PM"]
        },
        s = function() {
            var t = a.i18n[o],
                r = {
                    days: t.dayOfWeek,
                    daysShort: t.dayOfWeekShort,
                    months: t.months,
                    monthsShort: e.map(t.months, function(e) {
                        return e.substring(0, 3)
                    })
                };
            "function" == typeof DateFormatter && (n = new DateFormatter({
                dateSettings: e.extend({}, i, r)
            }))
        };
    e.datetimepicker = {
        setLocale: function(e) {
            var t = a.i18n[e] ? e : r;
            o != t && (o = t, s())
        },
        setDateFormatter: function(e) {
            n = e
        },
        RFC_2822: "D, d M Y H:i:s O",
        ATOM: "Y-m-dTH:i:sP",
        ISO_8601: "Y-m-dTH:i:sO",
        RFC_822: "D, d M y H:i:s O",
        RFC_850: "l, d-M-y H:i:s T",
        RFC_1036: "D, d M y H:i:s O",
        RFC_1123: "D, d M Y H:i:s O",
        RSS: "D, d M Y H:i:s O",
        W3C: "Y-m-dTH:i:sP"
    }, s(), window.getComputedStyle || (window.getComputedStyle = function(e, t) {
        return this.el = e, this.getPropertyValue = function(t) {
            var a = /(\-([a-z]){1})/g;
            return "float" === t && (t = "styleFloat"), a.test(t) && (t = t.replace(a, function(e, t, a) {
                return a.toUpperCase()
            })), e.currentStyle[t] || null
        }, this
    }), Array.prototype.indexOf || (Array.prototype.indexOf = function(e, t) {
        var a, n;
        for (a = t || 0, n = this.length; n > a; a += 1)
            if (this[a] === e) return a;
        return -1
    }), Date.prototype.countDaysInMonth = function() {
        return new Date(this.getFullYear(), this.getMonth() + 1, 0).getDate()
    }, e.fn.xdsoftScroller = function(t, a) {
        return this.each(function() {
            var n, r, o, i, s, d = e(this),
                u = function(e) {
                    var t, a = {
                        x: 0,
                        y: 0
                    };
                    return "touchstart" === e.type || "touchmove" === e.type || "touchend" === e.type || "touchcancel" === e.type ? (t = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0], a.x = t.clientX, a.y = t.clientY) : ("mousedown" === e.type || "mouseup" === e.type || "mousemove" === e.type || "mouseover" === e.type || "mouseout" === e.type || "mouseenter" === e.type || "mouseleave" === e.type) && (a.x = e.clientX, a.y = e.clientY), a
                },
                l = 100,
                f = !1,
                c = 0,
                m = 0,
                h = 0,
                g = !1,
                p = 0,
                y = function() {};
            return "hide" === a ? void d.find(".xdsoft_scrollbar").hide() : (e(this).hasClass("xdsoft_scroller_box") || (n = d.children().eq(0), r = d[0].clientHeight, o = n[0].offsetHeight, i = e('<div class="xdsoft_scrollbar"></div>'), s = e('<div class="xdsoft_scroller"></div>'), i.append(s), d.addClass("xdsoft_scroller_box").append(i), y = function(e) {
                var t = u(e).y - c + p;
                0 > t && (t = 0), t + s[0].offsetHeight > h && (t = h - s[0].offsetHeight), d.trigger("scroll_element.xdsoft_scroller", [l ? t / l : 0])
            }, s.on("touchstart.xdsoft_scroller mousedown.xdsoft_scroller", function(n) {
                r || d.trigger("resize_scroll.xdsoft_scroller", [a]), c = u(n).y, p = parseInt(s.css("margin-top"), 10), h = i[0].offsetHeight, "mousedown" === n.type || "touchstart" === n.type ? (t.ownerDocument && e(t.ownerDocument.body).addClass("xdsoft_noselect"), e([t.ownerDocument.body, t.contentWindow]).on("touchend mouseup.xdsoft_scroller", function o() {
                    e([t.ownerDocument.body, t.contentWindow]).off("touchend mouseup.xdsoft_scroller", o).off("mousemove.xdsoft_scroller", y).removeClass("xdsoft_noselect")
                }), e(t.ownerDocument.body).on("mousemove.xdsoft_scroller", y)) : (g = !0, n.stopPropagation(), n.preventDefault())
            }).on("touchmove", function(e) {
                g && (e.preventDefault(), y(e))
            }).on("touchend touchcancel", function() {
                g = !1, p = 0
            }), d.on("scroll_element.xdsoft_scroller", function(e, t) {
                r || d.trigger("resize_scroll.xdsoft_scroller", [t, !0]), t = t > 1 ? 1 : 0 > t || isNaN(t) ? 0 : t, s.css("margin-top", l * t), setTimeout(function() {
                    n.css("marginTop", -parseInt((n[0].offsetHeight - r) * t, 10))
                }, 10)
            }).on("resize_scroll.xdsoft_scroller", function(e, t, a) {
                var u, f;
                r = d[0].clientHeight, o = n[0].offsetHeight, u = r / o, f = u * i[0].offsetHeight, u > 1 ? s.hide() : (s.show(), s.css("height", parseInt(f > 10 ? f : 10, 10)), l = i[0].offsetHeight - s[0].offsetHeight, a !== !0 && d.trigger("scroll_element.xdsoft_scroller", [t || Math.abs(parseInt(n.css("marginTop"), 10)) / (o - r)]))
            }), d.on("mousewheel", function(e) {
                var t = Math.abs(parseInt(n.css("marginTop"), 10));
                return t -= 20 * e.deltaY, 0 > t && (t = 0), d.trigger("scroll_element.xdsoft_scroller", [t / (o - r)]), e.stopPropagation(), !1
            }), d.on("touchstart", function(e) {
                f = u(e), m = Math.abs(parseInt(n.css("marginTop"), 10))
            }), d.on("touchmove", function(e) {
                if (f) {
                    e.preventDefault();
                    var t = u(e);
                    d.trigger("scroll_element.xdsoft_scroller", [(m - (t.y - f.y)) / (o - r)])
                }
            }), d.on("touchend touchcancel", function() {
                f = !1, m = 0
            })), void d.trigger("resize_scroll.xdsoft_scroller", [a]))
        })
    }, e.fn.datetimepicker = function(r, i) {
        var s, d, u = this,
            l = 48,
            f = 57,
            c = 96,
            m = 105,
            h = 17,
            g = 46,
            p = 13,
            y = 27,
            v = 8,
            D = 37,
            b = 38,
            k = 39,
            x = 40,
            T = 9,
            S = 116,
            w = 65,
            O = 67,
            M = 86,
            W = 90,
            _ = 89,
            C = !1,
            F = e.isPlainObject(r) || !r ? e.extend(!0, {}, a, r) : e.extend(!0, {}, a),
            P = 0,
            A = function(e) {
                e.on("open.xdsoft focusin.xdsoft mousedown.xdsoft touchstart", function t() {
                    e.is(":disabled") || e.data("xdsoft_datetimepicker") || (clearTimeout(P), P = setTimeout(function() {
                        e.data("xdsoft_datetimepicker") || s(e), e.off("open.xdsoft focusin.xdsoft mousedown.xdsoft touchstart", t).trigger("open.xdsoft")
                    }, 100))
                })
            };
        return s = function(a) {
            function i() {
                var e, t = !1;
                return F.startDate ? t = j.strToDate(F.startDate) : (t = F.value || (a && a.val && a.val() ? a.val() : ""), t ? t = j.strToDateTime(t) : F.defaultDate && (t = j.strToDateTime(F.defaultDate), F.defaultTime && (e = j.strtotime(F.defaultTime), t.setHours(e.getHours()), t.setMinutes(e.getMinutes())))), t && j.isValidDate(t) ? J.data("changed", !0) : t = "", t || 0
            }

            function s(t) {
                var n = function(e, t) {
                        var a = e.replace(/([\[\]\/\{\}\(\)\-\.\+]{1})/g, "\\$1").replace(/_/g, "{digit+}").replace(/([0-9]{1})/g, "{digit$1}").replace(/\{digit([0-9]{1})\}/g, "[0-$1_]{1}").replace(/\{digit[\+]\}/g, "[0-9_]{1}");
                        return new RegExp(a).test(t)
                    },
                    r = function(e) {
                        try {
                            if (t.ownerDocument.selection && t.ownerDocument.selection.createRange) {
                                var a = t.ownerDocument.selection.createRange();
                                return a.getBookmark().charCodeAt(2) - 2
                            }
                            if (e.setSelectionRange) return e.selectionStart
                        } catch (n) {
                            return 0
                        }
                    },
                    o = function(e, a) {
                        if (e = "string" == typeof e || e instanceof String ? t.ownerDocument.getElementById(e) : e, !e) return !1;
                        if (e.createTextRange) {
                            var n = e.createTextRange();
                            return n.collapse(!0), n.moveEnd("character", a), n.moveStart("character", a), n.select(), !0
                        }
                        return e.setSelectionRange ? (e.setSelectionRange(a, a), !0) : !1
                    };
                t.mask && a.off("keydown.xdsoft"), t.mask === !0 && ("undefined" != typeof moment ? t.mask = t.format.replace(/Y{4}/g, "9999").replace(/Y{2}/g, "99").replace(/M{2}/g, "19").replace(/D{2}/g, "39").replace(/H{2}/g, "29").replace(/m{2}/g, "59").replace(/s{2}/g, "59") : t.mask = t.format.replace(/Y/g, "9999").replace(/F/g, "9999").replace(/m/g, "19").replace(/d/g, "39").replace(/H/g, "29").replace(/i/g, "59").replace(/s/g, "59")), "string" === e.type(t.mask) && (n(t.mask, a.val()) || (a.val(t.mask.replace(/[0-9]/g, "_")), o(a[0], 0)), a.on("keydown.xdsoft", function(i) {
                    var s, d, u = this.value,
                        F = i.which;
                    if (F >= l && f >= F || F >= c && m >= F || F === v || F === g) {
                        for (s = r(this), d = F !== v && F !== g ? String.fromCharCode(F >= c && m >= F ? F - l : F) : "_", F !== v && F !== g || !s || (s -= 1, d = "_");
                            /[^0-9_]/.test(t.mask.substr(s, 1)) && s < t.mask.length && s > 0;) s += F === v || F === g ? -1 : 1;
                        if (u = u.substr(0, s) + d + u.substr(s + 1), "" === e.trim(u)) u = t.mask.replace(/[0-9]/g, "_");
                        else if (s === t.mask.length) return i.preventDefault(), !1;
                        for (s += F === v || F === g ? 0 : 1;
                            /[^0-9_]/.test(t.mask.substr(s, 1)) && s < t.mask.length && s > 0;) s += F === v || F === g ? -1 : 1;
                        n(t.mask, u) ? (this.value = u, o(this, s)) : "" === e.trim(u) ? this.value = t.mask.replace(/[0-9]/g, "_") : a.trigger("error_input.xdsoft")
                    } else if (-1 !== [w, O, M, W, _].indexOf(F) && C || -1 !== [y, b, x, D, k, S, h, T, p].indexOf(F)) return !0;
                    return i.preventDefault(), !1
                }))
            }
            var d, u, P, A, Y, j, H, J = e('<div class="xdsoft_datetimepicker xdsoft_noselect"></div>'),
                z = e('<div class="xdsoft_copyright"><a target="_blank" href="http://xdsoft.net/jqplugins/datetimepicker/">xdsoft.net</a></div>'),
                I = e('<div class="xdsoft_datepicker active"></div>'),
                N = e('<div class="xdsoft_monthpicker"><button type="button" class="xdsoft_prev"></button><button type="button" class="xdsoft_today_button"></button><div class="xdsoft_label xdsoft_month"><span></span><i></i></div><div class="xdsoft_label xdsoft_year"><span></span><i></i></div><button type="button" class="xdsoft_next"></button></div>'),
                L = e('<div class="xdsoft_calendar"></div>'),
                E = e('<div class="xdsoft_timepicker active"><button type="button" class="xdsoft_prev"></button><div class="xdsoft_time_box"></div><button type="button" class="xdsoft_next"></button></div>'),
                R = E.find(".xdsoft_time_box").eq(0),
                B = e('<div class="xdsoft_time_variant"></div>'),
                V = e('<button type="button" class="xdsoft_save_selected blue-gradient-button">Save Selected</button>'),
                G = e('<div class="xdsoft_select xdsoft_monthselect"><div></div></div>'),
                U = e('<div class="xdsoft_select xdsoft_yearselect"><div></div></div>'),
                q = !1,
                X = 0;
            F.id && J.attr("id", F.id), F.style && J.attr("style", F.style), F.weeks && J.addClass("xdsoft_showweeks"), F.rtl && J.addClass("xdsoft_rtl"), J.addClass("xdsoft_" + F.theme), J.addClass(F.className), N.find(".xdsoft_month span").after(G), N.find(".xdsoft_year span").after(U), N.find(".xdsoft_month,.xdsoft_year").on("touchstart mousedown.xdsoft", function(t) {
                var a, n, r = e(this).find(".xdsoft_select").eq(0),
                    o = 0,
                    i = 0,
                    s = r.is(":visible");
                for (N.find(".xdsoft_select").hide(), j.currentTime && (o = j.currentTime[e(this).hasClass("xdsoft_month") ? "getMonth" : "getFullYear"]()), r[s ? "hide" : "show"](), a = r.find("div.xdsoft_option"), n = 0; n < a.length && a.eq(n).data("value") !== o; n += 1) i += a[0].offsetHeight;
                return r.xdsoftScroller(F, i / (r.children()[0].offsetHeight - r[0].clientHeight)), t.stopPropagation(), !1
            }), N.find(".xdsoft_select").xdsoftScroller(F).on("touchstart mousedown.xdsoft", function(e) {
                e.stopPropagation(), e.preventDefault()
            }).on("touchstart mousedown.xdsoft", ".xdsoft_option", function() {
                (void 0 === j.currentTime || null === j.currentTime) && (j.currentTime = j.now());
                var t = j.currentTime.getFullYear();
                j && j.currentTime && j.currentTime[e(this).parent().parent().hasClass("xdsoft_monthselect") ? "setMonth" : "setFullYear"](e(this).data("value")), e(this).parent().parent().hide(), J.trigger("xchange.xdsoft"), F.onChangeMonth && e.isFunction(F.onChangeMonth) && F.onChangeMonth.call(J, j.currentTime, J.data("input")), t !== j.currentTime.getFullYear() && e.isFunction(F.onChangeYear) && F.onChangeYear.call(J, j.currentTime, J.data("input"))
            }), J.getValue = function() {
                return j.getCurrentTime()
            }, J.setOptions = function(r) {
                var o = {};
                F = e.extend(!0, {}, F, r),
                    r.allowTimes && e.isArray(r.allowTimes) && r.allowTimes.length && (F.allowTimes = e.extend(!0, [], r.allowTimes)), r.weekends && e.isArray(r.weekends) && r.weekends.length && (F.weekends = e.extend(!0, [], r.weekends)), r.allowDates && e.isArray(r.allowDates) && r.allowDates.length && (F.allowDates = e.extend(!0, [], r.allowDates)), r.allowDateRe && "[object String]" === Object.prototype.toString.call(r.allowDateRe) && (F.allowDateRe = new RegExp(r.allowDateRe)), r.highlightedDates && e.isArray(r.highlightedDates) && r.highlightedDates.length && (e.each(r.highlightedDates, function(a, r) {
                        var i, s = e.map(r.split(","), e.trim),
                            d = new t(n.parseDate(s[0], F.formatDate), s[1], s[2]),
                            u = n.formatDate(d.date, F.formatDate);
                        void 0 !== o[u] ? (i = o[u].desc, i && i.length && d.desc && d.desc.length && (o[u].desc = i + "\n" + d.desc)) : o[u] = d
                    }), F.highlightedDates = e.extend(!0, [], o)), r.highlightedPeriods && e.isArray(r.highlightedPeriods) && r.highlightedPeriods.length && (o = e.extend(!0, [], F.highlightedDates), e.each(r.highlightedPeriods, function(a, r) {
                        var i, s, d, u, l, f, c;
                        if (e.isArray(r)) i = r[0], s = r[1], d = r[2], c = r[3];
                        else {
                            var m = e.map(r.split(","), e.trim);
                            i = n.parseDate(m[0], F.formatDate), s = n.parseDate(m[1], F.formatDate), d = m[2], c = m[3]
                        }
                        for (; s >= i;) u = new t(i, d, c), l = n.formatDate(i, F.formatDate), i.setDate(i.getDate() + 1), void 0 !== o[l] ? (f = o[l].desc, f && f.length && u.desc && u.desc.length && (o[l].desc = f + "\n" + u.desc)) : o[l] = u
                    }), F.highlightedDates = e.extend(!0, [], o)), r.disabledDates && e.isArray(r.disabledDates) && r.disabledDates.length && (F.disabledDates = e.extend(!0, [], r.disabledDates)), r.disabledWeekDays && e.isArray(r.disabledWeekDays) && r.disabledWeekDays.length && (F.disabledWeekDays = e.extend(!0, [], r.disabledWeekDays)), !F.open && !F.opened || F.inline || a.trigger("open.xdsoft"), F.inline && (q = !0, J.addClass("xdsoft_inline"), a.after(J).hide()), F.inverseButton && (F.next = "xdsoft_prev", F.prev = "xdsoft_next"), F.datepicker ? I.addClass("active") : I.removeClass("active"), F.timepicker ? E.addClass("active") : E.removeClass("active"), F.value && (j.setCurrentTime(F.value), a && a.val && a.val(j.str)), isNaN(F.dayOfWeekStart) ? F.dayOfWeekStart = 0 : F.dayOfWeekStart = parseInt(F.dayOfWeekStart, 10) % 7, F.timepickerScrollbar || R.xdsoftScroller(F, "hide"), F.minDate && /^[\+\-](.*)$/.test(F.minDate) && (F.minDate = n.formatDate(j.strToDateTime(F.minDate), F.formatDate)), F.maxDate && /^[\+\-](.*)$/.test(F.maxDate) && (F.maxDate = n.formatDate(j.strToDateTime(F.maxDate), F.formatDate)), V.toggle(F.showApplyButton), N.find(".xdsoft_today_button").css("visibility", F.todayButton ? "visible" : "hidden"), N.find("." + F.prev).css("visibility", F.prevButton ? "visible" : "hidden"), N.find("." + F.next).css("visibility", F.nextButton ? "visible" : "hidden"), s(F), F.validateOnBlur && a.off("blur.xdsoft").on("blur.xdsoft", function() {
                        if (F.allowBlank && (!e.trim(e(this).val()).length || "string" == typeof F.mask && e.trim(e(this).val()) === F.mask.replace(/[0-9]/g, "_"))) e(this).val(null), J.data("xdsoft_datetime").empty();
                        else {
                            var t = n.parseDate(e(this).val(), F.format);
                            if (t) e(this).val(n.formatDate(t, F.format));
                            else {
                                var a = +[e(this).val()[0], e(this).val()[1]].join(""),
                                    r = +[e(this).val()[2], e(this).val()[3]].join("");
                                !F.datepicker && F.timepicker && a >= 0 && 24 > a && r >= 0 && 60 > r ? e(this).val([a, r].map(function(e) {
                                    return e > 9 ? e : "0" + e
                                }).join(":")) : e(this).val(n.formatDate(j.now(), F.format))
                            }
                            J.data("xdsoft_datetime").setCurrentTime(e(this).val())
                        }
                        J.trigger("changedatetime.xdsoft"), J.trigger("close.xdsoft")
                    }), F.dayOfWeekStartPrev = 0 === F.dayOfWeekStart ? 6 : F.dayOfWeekStart - 1, J.trigger("xchange.xdsoft").trigger("afterOpen.xdsoft")
            }, J.data("options", F).on("touchstart mousedown.xdsoft", function(e) {
                return e.stopPropagation(), e.preventDefault(), U.hide(), G.hide(), !1
            }), R.append(B), R.xdsoftScroller(F), J.on("afterOpen.xdsoft", function() {
                R.xdsoftScroller(F)
            }), J.append(I).append(E), F.withoutCopyright !== !0 && J.append(z), I.append(N).append(L).append(V), e(F.parentID).append(J), d = function() {
                var t = this;
                t.now = function(e) {
                    var a, n, r = new Date;
                    return !e && F.defaultDate && (a = t.strToDateTime(F.defaultDate), r.setDate(1), r.setFullYear(a.getFullYear()), r.setMonth(a.getMonth()), r.setDate(a.getDate())), F.yearOffset && r.setFullYear(r.getFullYear() + F.yearOffset), !e && F.defaultTime && (n = t.strtotime(F.defaultTime), r.setHours(n.getHours()), r.setMinutes(n.getMinutes())), r
                }, t.isValidDate = function(e) {
                    return "[object Date]" !== Object.prototype.toString.call(e) ? !1 : !isNaN(e.getTime())
                }, t.setCurrentTime = function(e, a) {
                    "string" == typeof e ? t.currentTime = t.strToDateTime(e) : t.isValidDate(e) ? t.currentTime = e : e || a || !F.allowBlank ? t.currentTime = t.now() : t.currentTime = null, J.trigger("xchange.xdsoft")
                }, t.empty = function() {
                    t.currentTime = null
                }, t.getCurrentTime = function(e) {
                    return t.currentTime
                }, t.nextMonth = function() {
                    (void 0 === t.currentTime || null === t.currentTime) && (t.currentTime = t.now());
                    var a, n = t.currentTime.getMonth() + 1;
                    return 12 === n && (t.currentTime.setFullYear(t.currentTime.getFullYear() + 1), n = 0), a = t.currentTime.getFullYear(), t.currentTime.setDate(Math.min(new Date(t.currentTime.getFullYear(), n + 1, 0).getDate(), t.currentTime.getDate())), t.currentTime.setMonth(n), F.onChangeMonth && e.isFunction(F.onChangeMonth) && F.onChangeMonth.call(J, j.currentTime, J.data("input")), a !== t.currentTime.getFullYear() && e.isFunction(F.onChangeYear) && F.onChangeYear.call(J, j.currentTime, J.data("input")), J.trigger("xchange.xdsoft"), n
                }, t.prevMonth = function() {
                    (void 0 === t.currentTime || null === t.currentTime) && (t.currentTime = t.now());
                    var a = t.currentTime.getMonth() - 1;
                    return -1 === a && (t.currentTime.setFullYear(t.currentTime.getFullYear() - 1), a = 11), t.currentTime.setDate(Math.min(new Date(t.currentTime.getFullYear(), a + 1, 0).getDate(), t.currentTime.getDate())), t.currentTime.setMonth(a), F.onChangeMonth && e.isFunction(F.onChangeMonth) && F.onChangeMonth.call(J, j.currentTime, J.data("input")), J.trigger("xchange.xdsoft"), a
                }, t.getWeekOfYear = function(t) {
                    if (F.onGetWeekOfYear && e.isFunction(F.onGetWeekOfYear)) {
                        var a = F.onGetWeekOfYear.call(J, t);
                        if ("undefined" != typeof a) return a
                    }
                    var n = new Date(t.getFullYear(), 0, 1);
                    return 4 != n.getDay() && n.setMonth(0, 1 + (4 - n.getDay() + 7) % 7), Math.ceil(((t - n) / 864e5 + n.getDay() + 1) / 7)
                }, t.strToDateTime = function(e) {
                    var a, r, o = [];
                    return e && e instanceof Date && t.isValidDate(e) ? e : (o = /^(\+|\-)(.*)$/.exec(e), o && (o[2] = n.parseDate(o[2], F.formatDate)), o && o[2] ? (a = o[2].getTime() - 6e4 * o[2].getTimezoneOffset(), r = new Date(t.now(!0).getTime() + parseInt(o[1] + "1", 10) * a)) : r = e ? n.parseDate(e, F.format) : t.now(), t.isValidDate(r) || (r = t.now()), r)
                }, t.strToDate = function(e) {
                    if (e && e instanceof Date && t.isValidDate(e)) return e;
                    var a = e ? n.parseDate(e, F.formatDate) : t.now(!0);
                    return t.isValidDate(a) || (a = t.now(!0)), a
                }, t.strtotime = function(e) {
                    if (e && e instanceof Date && t.isValidDate(e)) return e;
                    var a = e ? n.parseDate(e, F.formatTime) : t.now(!0);
                    return t.isValidDate(a) || (a = t.now(!0)), a
                }, t.str = function() {
                    return n.formatDate(t.currentTime, F.format)
                }, t.currentTime = this.now()
            }, j = new d, V.on("touchend click", function(e) {
                e.preventDefault(), J.data("changed", !0), j.setCurrentTime(i()), a.val(j.str()), J.trigger("close.xdsoft")
            }), N.find(".xdsoft_today_button").on("touchend mousedown.xdsoft", function() {
                J.data("changed", !0), j.setCurrentTime(0, !0), J.trigger("afterOpen.xdsoft")
            }).on("dblclick.xdsoft", function() {
                var e, t, n = j.getCurrentTime();
                n = new Date(n.getFullYear(), n.getMonth(), n.getDate()), e = j.strToDate(F.minDate), e = new Date(e.getFullYear(), e.getMonth(), e.getDate()), e > n || (t = j.strToDate(F.maxDate), t = new Date(t.getFullYear(), t.getMonth(), t.getDate()), n > t || (a.val(j.str()), a.trigger("change"), J.trigger("close.xdsoft")))
            }), N.find(".xdsoft_prev,.xdsoft_next").on("touchend mousedown.xdsoft", function() {
                var t = e(this),
                    a = 0,
                    n = !1;
                ! function r(e) {
                    t.hasClass(F.next) ? j.nextMonth() : t.hasClass(F.prev) && j.prevMonth(), F.monthChangeSpinner && (n || (a = setTimeout(r, e || 100)))
                }(500), e([F.ownerDocument.body, F.contentWindow]).on("touchend mouseup.xdsoft", function o() {
                    clearTimeout(a), n = !0, e([F.ownerDocument.body, F.contentWindow]).off("touchend mouseup.xdsoft", o)
                })
            }), E.find(".xdsoft_prev,.xdsoft_next").on("touchend mousedown.xdsoft", function() {
                var t = e(this),
                    a = 0,
                    n = !1,
                    r = 110;
                ! function o(e) {
                    var i = R[0].clientHeight,
                        s = B[0].offsetHeight,
                        d = Math.abs(parseInt(B.css("marginTop"), 10));
                    t.hasClass(F.next) && s - i - F.timeHeightInTimePicker >= d ? B.css("marginTop", "-" + (d + F.timeHeightInTimePicker) + "px") : t.hasClass(F.prev) && d - F.timeHeightInTimePicker >= 0 && B.css("marginTop", "-" + (d - F.timeHeightInTimePicker) + "px"), R.trigger("scroll_element.xdsoft_scroller", [Math.abs(parseInt(B[0].style.marginTop, 10) / (s - i))]), r = r > 10 ? 10 : r - 10, n || (a = setTimeout(o, e || r))
                }(500), e([F.ownerDocument.body, F.contentWindow]).on("touchend mouseup.xdsoft", function i() {
                    clearTimeout(a), n = !0, e([F.ownerDocument.body, F.contentWindow]).off("touchend mouseup.xdsoft", i)
                })
            }), u = 0, J.on("xchange.xdsoft", function(t) {
                clearTimeout(u), u = setTimeout(function() {
                    if (void 0 === j.currentTime || null === j.currentTime) {
                        if (F.allowBlank) return;
                        j.currentTime = j.now()
                    }
                    for (var t, i, s, d, u, l, f, c, m, h, g = "", p = new Date(j.currentTime.getFullYear(), j.currentTime.getMonth(), 1, 12, 0, 0), y = 0, v = j.now(), D = !1, b = !1, k = [], x = !0, T = "", S = ""; p.getDay() !== F.dayOfWeekStart;) p.setDate(p.getDate() - 1);
                    for (g += "<table><thead><tr>", F.weeks && (g += "<th></th>"), t = 0; 7 > t; t += 1) g += "<th>" + F.i18n[o].dayOfWeekShort[(t + F.dayOfWeekStart) % 7] + "</th>";
                    for (g += "</tr></thead>", g += "<tbody>", F.maxDate !== !1 && (D = j.strToDate(F.maxDate), D = new Date(D.getFullYear(), D.getMonth(), D.getDate(), 23, 59, 59, 999)), F.minDate !== !1 && (b = j.strToDate(F.minDate), b = new Date(b.getFullYear(), b.getMonth(), b.getDate())); y < j.currentTime.countDaysInMonth() || p.getDay() !== F.dayOfWeekStart || j.currentTime.getMonth() === p.getMonth();) k = [], y += 1, s = p.getDay(), d = p.getDate(), u = p.getFullYear(), l = p.getMonth(), f = j.getWeekOfYear(p), h = "", k.push("xdsoft_date"), c = F.beforeShowDay && e.isFunction(F.beforeShowDay.call) ? F.beforeShowDay.call(J, p) : null, F.allowDateRe && "[object RegExp]" === Object.prototype.toString.call(F.allowDateRe) ? F.allowDateRe.test(n.formatDate(p, F.formatDate)) || k.push("xdsoft_disabled") : F.allowDates && F.allowDates.length > 0 ? -1 === F.allowDates.indexOf(n.formatDate(p, F.formatDate)) && k.push("xdsoft_disabled") : D !== !1 && p > D || b !== !1 && b > p || c && c[0] === !1 ? k.push("xdsoft_disabled") : -1 !== F.disabledDates.indexOf(n.formatDate(p, F.formatDate)) ? k.push("xdsoft_disabled") : -1 !== F.disabledWeekDays.indexOf(s) ? k.push("xdsoft_disabled") : a.is("[readonly]") && k.push("xdsoft_disabled"), c && "" !== c[1] && k.push(c[1]), j.currentTime.getMonth() !== l && k.push("xdsoft_other_month"), (F.defaultSelect || J.data("changed")) && n.formatDate(j.currentTime, F.formatDate) === n.formatDate(p, F.formatDate) && k.push("xdsoft_current"), n.formatDate(v, F.formatDate) === n.formatDate(p, F.formatDate) && k.push("xdsoft_today"), (0 === p.getDay() || 6 === p.getDay() || -1 !== F.weekends.indexOf(n.formatDate(p, F.formatDate))) && k.push("xdsoft_weekend"), void 0 !== F.highlightedDates[n.formatDate(p, F.formatDate)] && (i = F.highlightedDates[n.formatDate(p, F.formatDate)], k.push(void 0 === i.style ? "xdsoft_highlighted_default" : i.style), h = void 0 === i.desc ? "" : i.desc), F.beforeShowDay && e.isFunction(F.beforeShowDay) && k.push(F.beforeShowDay(p)), x && (g += "<tr>", x = !1, F.weeks && (g += "<th>" + f + "</th>")), g += '<td data-date="' + d + '" data-month="' + l + '" data-year="' + u + '" class="xdsoft_date xdsoft_day_of_week' + p.getDay() + " " + k.join(" ") + '" title="' + h + '"><div>' + d + "</div></td>", p.getDay() === F.dayOfWeekStartPrev && (g += "</tr>", x = !0), p.setDate(d + 1);
                    if (g += "</tbody></table>", L.html(g), N.find(".xdsoft_label span").eq(0).text(F.i18n[o].months[j.currentTime.getMonth()]), N.find(".xdsoft_label span").eq(1).text(j.currentTime.getFullYear()), T = "", S = "", l = "", m = function(t, r) {
                            var o, i, s = j.now(),
                                d = F.allowTimes && e.isArray(F.allowTimes) && F.allowTimes.length;
                            s.setHours(t), t = parseInt(s.getHours(), 10), s.setMinutes(r), r = parseInt(s.getMinutes(), 10), o = new Date(j.currentTime), o.setHours(t), o.setMinutes(r), k = [], F.minDateTime !== !1 && F.minDateTime > o || F.maxTime !== !1 && j.strtotime(F.maxTime).getTime() < s.getTime() || F.minTime !== !1 && j.strtotime(F.minTime).getTime() > s.getTime() ? k.push("xdsoft_disabled") : F.minDateTime !== !1 && F.minDateTime > o || F.disabledMinTime !== !1 && s.getTime() > j.strtotime(F.disabledMinTime).getTime() && F.disabledMaxTime !== !1 && s.getTime() < j.strtotime(F.disabledMaxTime).getTime() ? k.push("xdsoft_disabled") : a.is("[readonly]") && k.push("xdsoft_disabled"), i = new Date(j.currentTime), i.setHours(parseInt(j.currentTime.getHours(), 10)), d || i.setMinutes(Math[F.roundTime](j.currentTime.getMinutes() / F.step) * F.step), (F.initTime || F.defaultSelect || J.data("changed")) && i.getHours() === parseInt(t, 10) && (!d && F.step > 59 || i.getMinutes() === parseInt(r, 10)) && (F.defaultSelect || J.data("changed") ? k.push("xdsoft_current") : F.initTime && k.push("xdsoft_init_time")), parseInt(v.getHours(), 10) === parseInt(t, 10) && parseInt(v.getMinutes(), 10) === parseInt(r, 10) && k.push("xdsoft_today"), T += '<div class="xdsoft_time ' + k.join(" ") + '" data-hour="' + t + '" data-minute="' + r + '">' + n.formatDate(s, F.formatTime) + "</div>"
                        }, F.allowTimes && e.isArray(F.allowTimes) && F.allowTimes.length)
                        for (y = 0; y < F.allowTimes.length; y += 1) S = j.strtotime(F.allowTimes[y]).getHours(), l = j.strtotime(F.allowTimes[y]).getMinutes(), m(S, l);
                    else
                        for (y = 0, t = 0; y < (F.hours12 ? 12 : 24); y += 1)
                            for (t = 0; 60 > t; t += F.step) S = (10 > y ? "0" : "") + y, l = (10 > t ? "0" : "") + t, m(S, l);
                    for (B.html(T), r = "", y = 0, y = parseInt(F.yearStart, 10) + F.yearOffset; y <= parseInt(F.yearEnd, 10) + F.yearOffset; y += 1) r += '<div class="xdsoft_option ' + (j.currentTime.getFullYear() === y ? "xdsoft_current" : "") + '" data-value="' + y + '">' + y + "</div>";
                    for (U.children().eq(0).html(r), y = parseInt(F.monthStart, 10), r = ""; y <= parseInt(F.monthEnd, 10); y += 1) r += '<div class="xdsoft_option ' + (j.currentTime.getMonth() === y ? "xdsoft_current" : "") + '" data-value="' + y + '">' + F.i18n[o].months[y] + "</div>";
                    G.children().eq(0).html(r), e(J).trigger("generate.xdsoft")
                }, 10), t.stopPropagation()
            }).on("afterOpen.xdsoft", function() {
                if (F.timepicker) {
                    var e, t, a, n;
                    B.find(".xdsoft_current").length ? e = ".xdsoft_current" : B.find(".xdsoft_init_time").length && (e = ".xdsoft_init_time"), e ? (t = R[0].clientHeight, a = B[0].offsetHeight, n = B.find(e).index() * F.timeHeightInTimePicker + 1, n > a - t && (n = a - t), R.trigger("scroll_element.xdsoft_scroller", [parseInt(n, 10) / (a - t)])) : R.trigger("scroll_element.xdsoft_scroller", [0])
                }
            }), P = 0, L.on("touchend click.xdsoft", "td", function(t) {
                t.stopPropagation(), P += 1;
                var n = e(this),
                    r = j.currentTime;
                return (void 0 === r || null === r) && (j.currentTime = j.now(), r = j.currentTime), n.hasClass("xdsoft_disabled") ? !1 : (r.setDate(1), r.setFullYear(n.data("year")), r.setMonth(n.data("month")), r.setDate(n.data("date")), J.trigger("select.xdsoft", [r]), a.val(j.str()), F.onSelectDate && e.isFunction(F.onSelectDate) && F.onSelectDate.call(J, j.currentTime, J.data("input"), t), J.data("changed", !0), J.trigger("xchange.xdsoft"), J.trigger("changedatetime.xdsoft"), (P > 1 || F.closeOnDateSelect === !0 || F.closeOnDateSelect === !1 && !F.timepicker) && !F.inline && J.trigger("close.xdsoft"), void setTimeout(function() {
                    P = 0
                }, 200))
            }), B.on("touchend click.xdsoft", "div", function(t) {
                t.stopPropagation();
                var a = e(this),
                    n = j.currentTime;
                return (void 0 === n || null === n) && (j.currentTime = j.now(), n = j.currentTime), a.hasClass("xdsoft_disabled") ? !1 : (n.setHours(a.data("hour")), n.setMinutes(a.data("minute")), J.trigger("select.xdsoft", [n]), J.data("input").val(j.str()), F.onSelectTime && e.isFunction(F.onSelectTime) && F.onSelectTime.call(J, j.currentTime, J.data("input"), t), J.data("changed", !0), J.trigger("xchange.xdsoft"), J.trigger("changedatetime.xdsoft"), void(F.inline !== !0 && F.closeOnTimeSelect === !0 && J.trigger("close.xdsoft")))
            }), I.on("mousewheel.xdsoft", function(e) {
                return F.scrollMonth ? (e.deltaY < 0 ? j.nextMonth() : j.prevMonth(), !1) : !0
            }), a.on("mousewheel.xdsoft", function(e) {
                return F.scrollInput ? !F.datepicker && F.timepicker ? (A = B.find(".xdsoft_current").length ? B.find(".xdsoft_current").eq(0).index() : 0, A + e.deltaY >= 0 && A + e.deltaY < B.children().length && (A += e.deltaY), B.children().eq(A).length && B.children().eq(A).trigger("mousedown"), !1) : F.datepicker && !F.timepicker ? (I.trigger(e, [e.deltaY, e.deltaX, e.deltaY]), a.val && a.val(j.str()), J.trigger("changedatetime.xdsoft"), !1) : void 0 : !0
            }), J.on("changedatetime.xdsoft", function(t) {
                if (F.onChangeDateTime && e.isFunction(F.onChangeDateTime)) {
                    var a = J.data("input");
                    F.onChangeDateTime.call(J, j.currentTime, a, t), delete F.value, a.trigger("change")
                }
            }).on("generate.xdsoft", function() {
                F.onGenerate && e.isFunction(F.onGenerate) && F.onGenerate.call(J, j.currentTime, J.data("input")), q && (J.trigger("afterOpen.xdsoft"), q = !1)
            }).on("click.xdsoft", function(e) {
                e.stopPropagation()
            }), A = 0, H = function(e, t) {
                do
                    if (e = e.parentNode, t(e) === !1) break; while ("HTML" !== e.nodeName)
            }, Y = function() {
                var t, a, n, r, o, i, s, d, u, l, f, c, m;
                if (d = J.data("input"), t = d.offset(), a = d[0], l = "top", n = t.top + a.offsetHeight - 1, r = t.left, o = "absolute", u = e(F.contentWindow).width(), c = e(F.contentWindow).height(), m = e(F.contentWindow).scrollTop(), F.ownerDocument.documentElement.clientWidth - t.left < I.parent().outerWidth(!0)) {
                    var h = I.parent().outerWidth(!0) - a.offsetWidth;
                    r -= h
                }
                "rtl" === d.parent().css("direction") && (r -= J.outerWidth() - d.outerWidth()), F.fixed ? (n -= m, r -= e(F.contentWindow).scrollLeft(), o = "fixed") : (s = !1, H(a, function(e) {
                    return "fixed" === F.contentWindow.getComputedStyle(e).getPropertyValue("position") ? (s = !0, !1) : void 0
                }), s ? (o = "fixed", n + J.outerHeight() > c + m ? (l = "bottom", n = c + m - t.top) : n -= m) : n + a.offsetHeight > c + m && (n = t.top - a.offsetHeight + 1), 0 > n && (n = 0), r + a.offsetWidth > u && (r = u - a.offsetWidth)), i = J[0], H(i, function(e) {
                    var t;
                    return t = F.contentWindow.getComputedStyle(e).getPropertyValue("position"), "relative" === t && u >= e.offsetWidth ? (r -= (u - e.offsetWidth) / 2, !1) : void 0
                }), f = {
                    position: o,
                    left: r,
                    top: "",
                    bottom: ""
                }, f[l] = n, J.css(f)
            }, J.on("open.xdsoft", function(t) {
                var a = !0;
                F.onShow && e.isFunction(F.onShow) && (a = F.onShow.call(J, j.currentTime, J.data("input"), t)), a !== !1 && (J.show(), Y(), e(F.contentWindow).off("resize.xdsoft", Y).on("resize.xdsoft", Y), F.closeOnWithoutClick && e([F.ownerDocument.body, F.contentWindow]).on("touchstart mousedown.xdsoft", function n() {
                    J.trigger("close.xdsoft"), e([F.ownerDocument.body, F.contentWindow]).off("touchstart mousedown.xdsoft", n)
                }))
            }).on("close.xdsoft", function(t) {
                var a = !0;
                N.find(".xdsoft_month,.xdsoft_year").find(".xdsoft_select").hide(), F.onClose && e.isFunction(F.onClose) && (a = F.onClose.call(J, j.currentTime, J.data("input"), t)), a === !1 || F.opened || F.inline || J.hide(), t.stopPropagation()
            }).on("toggle.xdsoft", function() {
                J.is(":visible") ? J.trigger("close.xdsoft") : J.trigger("open.xdsoft")
            }).data("input", a), X = 0, J.data("xdsoft_datetime", j), J.setOptions(F), j.setCurrentTime(i()), a.data("xdsoft_datetimepicker", J).on("open.xdsoft focusin.xdsoft mousedown.xdsoft touchstart", function() {
                a.is(":disabled") || a.data("xdsoft_datetimepicker").is(":visible") && F.closeOnInputClick || (clearTimeout(X), X = setTimeout(function() {
                    a.is(":disabled") || (q = !0, j.setCurrentTime(i(), !0), F.mask && s(F), J.trigger("open.xdsoft"))
                }, 100))
            }).on("keydown.xdsoft", function(t) {
                var a, n = t.which;
                return -1 !== [p].indexOf(n) && F.enterLikeTab ? (a = e("input:visible,textarea:visible,button:visible,a:visible"), J.trigger("close.xdsoft"), a.eq(a.index(this) + 1).focus(), !1) : -1 !== [T].indexOf(n) ? (J.trigger("close.xdsoft"), !0) : void 0
            }).on("blur.xdsoft", function() {
                J.trigger("close.xdsoft")
            })
        }, d = function(t) {
            var a = t.data("xdsoft_datetimepicker");
            a && (a.data("xdsoft_datetime", null), a.remove(), t.data("xdsoft_datetimepicker", null).off(".xdsoft"), e(F.contentWindow).off("resize.xdsoft"), e([F.contentWindow, F.ownerDocument.body]).off("mousedown.xdsoft touchstart"), t.unmousewheel && t.unmousewheel())
        }, e(F.ownerDocument).off("keydown.xdsoftctrl keyup.xdsoftctrl").on("keydown.xdsoftctrl", function(e) {
            e.keyCode === h && (C = !0)
        }).on("keyup.xdsoftctrl", function(e) {
            e.keyCode === h && (C = !1)
        }), this.each(function() {
            var t, a = e(this).data("xdsoft_datetimepicker");
            if (a) {
                if ("string" === e.type(r)) switch (r) {
                    case "show":
                        e(this).select().focus(), a.trigger("open.xdsoft");
                        break;
                    case "hide":
                        a.trigger("close.xdsoft");
                        break;
                    case "toggle":
                        a.trigger("toggle.xdsoft");
                        break;
                    case "destroy":
                        d(e(this));
                        break;
                    case "reset":
                        this.value = this.defaultValue, this.value && a.data("xdsoft_datetime").isValidDate(n.parseDate(this.value, F.format)) || a.data("changed", !1), a.data("xdsoft_datetime").setCurrentTime(this.value);
                        break;
                    case "validate":
                        t = a.data("input"), t.trigger("blur.xdsoft");
                        break;
                    default:
                        a[r] && e.isFunction(a[r]) && (u = a[r](i))
                } else a.setOptions(r);
                return 0
            }
            "string" !== e.type(r) && (!F.lazyInit || F.open || F.inline ? s(e(this)) : A(e(this)))
        }), u
    }, e.fn.datetimepicker.defaults = a
}),
function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof exports ? module.exports = e : e(jQuery)
}(function(e) {
    function t(t) {
        var i = t || window.event,
            s = d.call(arguments, 1),
            u = 0,
            f = 0,
            c = 0,
            m = 0,
            h = 0,
            g = 0;
        if (t = e.event.fix(i), t.type = "mousewheel", "detail" in i && (c = -1 * i.detail), "wheelDelta" in i && (c = i.wheelDelta), "wheelDeltaY" in i && (c = i.wheelDeltaY), "wheelDeltaX" in i && (f = -1 * i.wheelDeltaX), "axis" in i && i.axis === i.HORIZONTAL_AXIS && (f = -1 * c, c = 0), u = 0 === c ? f : c, "deltaY" in i && (c = -1 * i.deltaY, u = c), "deltaX" in i && (f = i.deltaX, 0 === c && (u = -1 * f)), 0 !== c || 0 !== f) {
            if (1 === i.deltaMode) {
                var p = e.data(this, "mousewheel-line-height");
                u *= p, c *= p, f *= p
            } else if (2 === i.deltaMode) {
                var y = e.data(this, "mousewheel-page-height");
                u *= y, c *= y, f *= y
            }
            if (m = Math.max(Math.abs(c), Math.abs(f)), (!o || o > m) && (o = m, n(i, m) && (o /= 40)), n(i, m) && (u /= 40, f /= 40, c /= 40), u = Math[u >= 1 ? "floor" : "ceil"](u / o), f = Math[f >= 1 ? "floor" : "ceil"](f / o), c = Math[c >= 1 ? "floor" : "ceil"](c / o), l.settings.normalizeOffset && this.getBoundingClientRect) {
                var v = this.getBoundingClientRect();
                h = t.clientX - v.left, g = t.clientY - v.top
            }
            return t.deltaX = f, t.deltaY = c, t.deltaFactor = o, t.offsetX = h, t.offsetY = g, t.deltaMode = 0, s.unshift(t, u, f, c), r && clearTimeout(r), r = setTimeout(a, 200), (e.event.dispatch || e.event.handle).apply(this, s)
        }
    }

    function a() {
        o = null
    }

    function n(e, t) {
        return l.settings.adjustOldDeltas && "mousewheel" === e.type && t % 120 === 0
    }
    var r, o, i = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
        s = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
        d = Array.prototype.slice;
    if (e.event.fixHooks)
        for (var u = i.length; u;) e.event.fixHooks[i[--u]] = e.event.mouseHooks;
    var l = e.event.special.mousewheel = {
        version: "3.1.12",
        setup: function() {
            if (this.addEventListener)
                for (var a = s.length; a;) this.addEventListener(s[--a], t, !1);
            else this.onmousewheel = t;
            e.data(this, "mousewheel-line-height", l.getLineHeight(this)), e.data(this, "mousewheel-page-height", l.getPageHeight(this))
        },
        teardown: function() {
            if (this.removeEventListener)
                for (var a = s.length; a;) this.removeEventListener(s[--a], t, !1);
            else this.onmousewheel = null;
            e.removeData(this, "mousewheel-line-height"), e.removeData(this, "mousewheel-page-height")
        },
        getLineHeight: function(t) {
            var a = e(t),
                n = a["offsetParent" in e.fn ? "offsetParent" : "parent"]();
            return n.length || (n = e("body")), parseInt(n.css("fontSize"), 10) || parseInt(a.css("fontSize"), 10) || 16
        },
        getPageHeight: function(t) {
            return e(t).height()
        },
        settings: {
            adjustOldDeltas: !0,
            normalizeOffset: !0
        }
    };
    e.fn.extend({
        mousewheel: function(e) {
            return e ? this.bind("mousewheel", e) : this.trigger("mousewheel")
        },
        unmousewheel: function(e) {
            return this.unbind("mousewheel", e)
        }
    })
});