if (self.CavalryLogger) {
    CavalryLogger.start_js(["9HZf4"]);
}

__d("StringArrayObject", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        function a(a) {
            this.strings = [], this.strings = a
        }
        var b = a.prototype;
        b.toJSON = function() {
            return this.strings
        };
        b.isEqual = function(b) {
            if (!(b instanceof a)) return !1;
            if (b.strings === this.strings) return !0;
            if (b.strings.length !== this.strings.length) return !1;
            for (var c = 0; c < this.strings.length; c++)
                if (this.strings[c] !== b.strings[c]) return !1;
            return !0
        };
        return a
    }();
    e.exports = a
}), null);