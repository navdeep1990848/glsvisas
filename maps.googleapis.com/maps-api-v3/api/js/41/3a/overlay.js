google.maps.__gjsload__('overlay', function(_) {
    var Nw = _.oa("i"),
        Ow = _.n(),
        Pw = function(a) {
            a.oh = a.oh || new Ow;
            return a.oh
        },
        Qw = function(a) {
            this.La = new _.Vh(function() {
                var b = a.oh;
                if (a.getPanes()) {
                    if (a.getProjection()) {
                        if (!b.i && a.onAdd) a.onAdd();
                        b.i = !0;
                        a.draw()
                    }
                } else {
                    if (b.i)
                        if (a.onRemove) a.onRemove();
                        else a.remove();
                    b.i = !1
                }
            }, 0)
        },
        Rw = function(a, b) {
            function c() {
                return _.Wh(e.La)
            }
            var d = Pw(a),
                e = d.Sf;
            e || (e = d.Sf = new Qw(a));
            _.B(d.Ga || [], _.N.removeListener);
            var f = d.Ra = d.Ra || new _.On,
                g = b.__gm;
            f.bindTo("zoom", g);
            f.bindTo("offset", g);
            f.bindTo("center", g, "projectionCenterQ");
            f.bindTo("projection", b);
            f.bindTo("projectionTopLeft", g);
            f = d.hj = d.hj || new Nw(f);
            f.bindTo("zoom", g);
            f.bindTo("offset", g);
            f.bindTo("projection", b);
            f.bindTo("projectionTopLeft", g);
            a.bindTo("projection", f, "outProjection");
            a.bindTo("panes", g);
            d.Ga = [_.N.addListener(a, "panes_changed", c), _.N.addListener(g, "zoom_changed", c), _.N.addListener(g, "offset_changed", c), _.N.addListener(b, "projection_changed", c), _.N.addListener(g, "projectioncenterq_changed", c)];
            c();
            b instanceof _.Ve && (_.Ti(b, "Ox"), _.mo("Ox", "-p", a))
        },
        Uw = function(a) {
            if (a) {
                var b = a.getMap(),
                    c = a.__gmop;
                if (c) {
                    if (c.map == b) return;
                    a.__gmop = null;
                    c.yh()
                }
                if (b && b instanceof _.Ve) {
                    var d = b.__gm;
                    d.overlayLayer ? a.__gmop = new Sw(b, a, d.overlayLayer) : d.i.then(function(e) {
                        e = e.mb;
                        var f = new Tw(b, e);
                        e.wc(f);
                        d.overlayLayer = f;
                        Uw(a)
                    })
                }
            }
        },
        Sw = function(a, b, c) {
            this.map = a;
            this.lb = b;
            this.qn = c;
            this.Ff = !1;
            _.Ti(this.map, "Ox");
            _.mo("Ox", "-p", this.lb);
            c.j.push(this);
            c.i && Vw(this, c.i);
            c.o.dh()
        },
        Vw = function(a, b) {
            a.lb.get("projection") != b && (a.lb.bindTo("panes", a.map.__gm), a.lb.set("projection",
                b))
        },
        Tw = function(a, b) {
            this.H = a;
            this.o = b;
            this.i = null;
            this.j = []
        };
    _.A(Nw, _.O);
    Nw.prototype.changed = function(a) {
        "outProjection" != a && (a = !!(this.get("offset") && this.get("projectionTopLeft") && this.get("projection") && _.Pc(this.get("zoom"))), a == !this.get("outProjection") && this.set("outProjection", a ? this.i : null))
    };
    _.A(Qw, _.O);
    Sw.prototype.draw = function() {
        this.Ff || (this.Ff = !0, this.lb.onAdd && this.lb.onAdd());
        this.lb.draw && this.lb.draw()
    };
    Sw.prototype.yh = function() {
        _.no("Ox", "-p", this.lb);
        this.lb.unbindAll();
        this.lb.set("panes", null);
        this.lb.set("projection", null);
        _.db(this.qn.j, this);
        this.Ff && (this.Ff = !1, this.lb.onRemove ? this.lb.onRemove() : this.lb.remove())
    };
    Tw.prototype.dispose = _.n();
    Tw.prototype.Nb = function(a, b, c, d, e, f, g, h) {
        var k = this.i = this.i || new _.Ho(this.H, this.o, _.n());
        k.Nb(a, b, c, d, e, f, g, h);
        a = _.Aa(this.j);
        for (b = a.next(); !b.done; b = a.next()) b = b.value, Vw(b, k), b.draw()
    };
    _.rf("overlay", {
        Zh: function(a) {
            if (a) {
                var b = a.getMap();
                if (b && b instanceof _.Ve || a.__gmop) Uw(a);
                else {
                    b = a.getMap();
                    var c = Pw(a),
                        d = c.Dm;
                    c.Dm = b;
                    d && (c = Pw(a), (d = c.Ra) && d.unbindAll(), (d = c.hj) && d.unbindAll(), a.unbindAll(), a.set("panes", null), a.set("projection", null), _.B(c.Ga, _.N.removeListener), c.Ga = null, c.Sf && (c.Sf.La.Kb(), c.Sf = null), _.no("Ox", "-p", a));
                    b && Rw(a, b)
                }
            }
        },
        preventMapHitsFrom: function(a) {
            _.wp(a, {
                onClick: function(b) {
                    return _.Po(b.event)
                },
                Fb: function(b) {
                    return _.Mo(b)
                },
                zd: function(b) {
                    return _.No(b)
                },
                Ub: function(b) {
                    return _.No(b)
                },
                Jb: function(b) {
                    return _.Oo(b)
                }
            }).Sd(!0)
        },
        preventMapHitsAndGesturesFrom: function(a) {
            a.addEventListener("click", _.Pd);
            a.addEventListener("contextmenu", _.Pd);
            a.addEventListener("dblclick", _.Pd);
            a.addEventListener("mousedown", _.Pd);
            a.addEventListener("mousemove", _.Pd);
            a.addEventListener("MSPointerDown", _.Pd);
            a.addEventListener("pointerdown", _.Pd);
            a.addEventListener("touchstart", _.Pd);
            a.addEventListener("wheel", _.Pd)
        }
    });
});