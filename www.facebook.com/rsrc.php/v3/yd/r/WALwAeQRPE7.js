if (self.CavalryLogger) {
    CavalryLogger.start_js(["nq6mb"]);
}

__d("BDLanguagesSignalCollector", ["BDSignalCollectorBase", "CustomObjectSignalValueType", "StringArrayObject"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = function(c) {
            babelHelpers.inheritsLoose(a, c);

            function a() {
                return c.call(this, i.signalType) || this
            }
            var d = a.prototype;
            d.executeSignalCollection = function() {
                this.throwIfNotInitialized();
                var a = [].concat(navigator.languages);
                a = new(b("CustomObjectSignalValueType"))(Date.now(), this.getContext(), new(b("StringArrayObject"))(a));
                return {
                    valueOrError: a
                }
            };
            return a
        }(b("BDSignalCollectorBase")),
        h = null,
        i = {
            signalType: 30003,
            get: function() {
                h == null && (h = new g());
                return h
            }
        };
    e.exports = i
}), null);