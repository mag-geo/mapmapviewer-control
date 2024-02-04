var Oe = Object.defineProperty;
var Ee = (t, e, i) => e in t ? Oe(t, e, { enumerable: !0, configurable: !0, writable: !0, value: i }) : t[e] = i;
var U = (t, e, i) => (Ee(t, typeof e != "symbol" ? e + "" : e, i), i);
function C() {
}
function Te(t) {
  return t();
}
function oe() {
  return /* @__PURE__ */ Object.create(null);
}
function S(t) {
  t.forEach(Te);
}
function Ie(t) {
  return typeof t == "function";
}
function $(t, e) {
  return t != t ? e == e : t !== e || t && typeof t == "object" || typeof t == "function";
}
function Me(t) {
  return Object.keys(t).length === 0;
}
function k(t, e) {
  t.appendChild(e);
}
function b(t, e, i) {
  t.insertBefore(e, i || null);
}
function m(t) {
  t.parentNode && t.parentNode.removeChild(t);
}
function Z(t, e) {
  for (let i = 0; i < t.length; i += 1)
    t[i] && t[i].d(e);
}
function L(t) {
  return document.createElement(t);
}
function H(t) {
  return document.createTextNode(t);
}
function M() {
  return H(" ");
}
function D() {
  return H("");
}
function W(t, e, i, l) {
  return t.addEventListener(e, i, l), () => t.removeEventListener(e, i, l);
}
function w(t, e, i) {
  i == null ? t.removeAttribute(e) : t.getAttribute(e) !== i && t.setAttribute(e, i);
}
function Pe(t) {
  return t === "" ? null : +t;
}
function $e(t) {
  return Array.from(t.childNodes);
}
function x(t, e) {
  e = "" + e, t.data !== e && (t.data = /** @type {string} */
  e);
}
function fe(t, e) {
  t.value = e ?? "";
}
let le;
function Q(t) {
  le = t;
}
const F = [], A = [];
let G = [];
const ne = [], qe = /* @__PURE__ */ Promise.resolve();
let ie = !1;
function Ve() {
  ie || (ie = !0, qe.then(Ne));
}
function Y(t) {
  G.push(t);
}
function J(t) {
  ne.push(t);
}
const te = /* @__PURE__ */ new Set();
let z = 0;
function Ne() {
  if (z !== 0)
    return;
  const t = le;
  do {
    try {
      for (; z < F.length; ) {
        const e = F[z];
        z++, Q(e), Ae(e.$$);
      }
    } catch (e) {
      throw F.length = 0, z = 0, e;
    }
    for (Q(null), F.length = 0, z = 0; A.length; )
      A.pop()();
    for (let e = 0; e < G.length; e += 1) {
      const i = G[e];
      te.has(i) || (te.add(i), i());
    }
    G.length = 0;
  } while (F.length);
  for (; ne.length; )
    ne.pop()();
  ie = !1, te.clear(), Q(t);
}
function Ae(t) {
  if (t.fragment !== null) {
    t.update(), S(t.before_update);
    const e = t.dirty;
    t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(Y);
  }
}
function Be(t) {
  const e = [], i = [];
  G.forEach((l) => t.indexOf(l) === -1 ? e.push(l) : i.push(l)), i.forEach((l) => l()), G = e;
}
const X = /* @__PURE__ */ new Set();
let R;
function N() {
  R = {
    r: 0,
    c: [],
    p: R
    // parent group
  };
}
function j() {
  R.r || S(R.c), R = R.p;
}
function c(t, e) {
  t && t.i && (X.delete(t), t.i(e));
}
function d(t, e, i, l) {
  if (t && t.o) {
    if (X.has(t))
      return;
    X.add(t), R.c.push(() => {
      X.delete(t), l && (i && t.d(1), l());
    }), t.o(e);
  } else
    l && l();
}
function B(t) {
  return (t == null ? void 0 : t.length) !== void 0 ? t : Array.from(t);
}
function K(t, e, i) {
  const l = t.$$.props[e];
  l !== void 0 && (t.$$.bound[l] = i, i(t.$$.ctx[l]));
}
function P(t) {
  t && t.c();
}
function O(t, e, i) {
  const { fragment: l, after_update: n } = t.$$;
  l && l.m(e, i), Y(() => {
    const f = t.$$.on_mount.map(Te).filter(Ie);
    t.$$.on_destroy ? t.$$.on_destroy.push(...f) : S(f), t.$$.on_mount = [];
  }), n.forEach(Y);
}
function E(t, e) {
  const i = t.$$;
  i.fragment !== null && (Be(i.after_update), S(i.on_destroy), i.fragment && i.fragment.d(e), i.on_destroy = i.fragment = null, i.ctx = []);
}
function Re(t, e) {
  t.$$.dirty[0] === -1 && (F.push(t), Ve(), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function q(t, e, i, l, n, f, r, s = [-1]) {
  const o = le;
  Q(t);
  const a = t.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: f,
    update: C,
    not_equal: n,
    bound: oe(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (o ? o.$$.context : [])),
    // everything else
    callbacks: oe(),
    dirty: s,
    skip_bound: !1,
    root: e.target || o.$$.root
  };
  r && r(a.root);
  let u = !1;
  if (a.ctx = i ? i(t, e.props || {}, (h, _, ...T) => {
    const p = T.length ? T[0] : _;
    return a.ctx && n(a.ctx[h], a.ctx[h] = p) && (!a.skip_bound && a.bound[h] && a.bound[h](p), u && Re(t, h)), _;
  }) : [], a.update(), u = !0, S(a.before_update), a.fragment = l ? l(a.ctx) : !1, e.target) {
    if (e.hydrate) {
      const h = $e(e.target);
      a.fragment && a.fragment.l(h), h.forEach(m);
    } else
      a.fragment && a.fragment.c();
    e.intro && c(t.$$.fragment), O(t, e.target, e.anchor), Ne();
  }
  Q(o);
}
class V {
  constructor() {
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    U(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    U(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    E(this, 1), this.$destroy = C;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(e, i) {
    if (!Ie(i))
      return C;
    const l = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return l.push(i), () => {
      const n = l.indexOf(i);
      n !== -1 && l.splice(n, 1);
    };
  }
  /**
   * @param {Partial<Props>} props
   * @returns {void}
   */
  $set(e) {
    this.$$set && !Me(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
const Se = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(Se);
function se(t) {
  let e, i, l, n;
  return {
    c() {
      e = L("details"), i = L("summary"), i.textContent = "details", l = M(), n = H(
        /*details*/
        t[0]
      );
    },
    m(f, r) {
      b(f, e, r), k(e, i), k(e, l), k(e, n);
    },
    p(f, r) {
      r & /*details*/
      1 && x(
        n,
        /*details*/
        f[0]
      );
    },
    d(f) {
      f && m(e);
    }
  };
}
function De(t) {
  let e, i = (
    /*details*/
    t[0] !== void 0 && se(t)
  );
  return {
    c() {
      i && i.c(), e = D();
    },
    m(l, n) {
      i && i.m(l, n), b(l, e, n);
    },
    p(l, [n]) {
      /*details*/
      l[0] !== void 0 ? i ? i.p(l, n) : (i = se(l), i.c(), i.m(e.parentNode, e)) : i && (i.d(1), i = null);
    },
    i: C,
    o: C,
    d(l) {
      l && m(e), i && i.d(l);
    }
  };
}
function Ue(t, e, i) {
  let { details: l } = e;
  return t.$$set = (n) => {
    "details" in n && i(0, l = n.details);
  }, [l];
}
class ze extends V {
  constructor(e) {
    super(), q(this, e, Ue, De, $, { details: 0 });
  }
}
function Fe(t) {
  let e, i;
  return {
    c() {
      e = L("span"), i = H(
        /*display*/
        t[0]
      ), w(e, "class", "svelte-wrqqql");
    },
    m(l, n) {
      b(l, e, n), k(e, i);
    },
    p(l, n) {
      n & /*display*/
      1 && x(
        i,
        /*display*/
        l[0]
      );
    },
    d(l) {
      l && m(e);
    }
  };
}
function Ge(t) {
  let e, i, l;
  return {
    c() {
      e = L("a"), i = L("span"), l = H(
        /*display*/
        t[0]
      ), w(i, "class", "svelte-wrqqql"), w(
        e,
        "href",
        /*href*/
        t[1]
      ), w(e, "target", "_blank");
    },
    m(n, f) {
      b(n, e, f), k(e, i), k(i, l);
    },
    p(n, f) {
      f & /*display*/
      1 && x(
        l,
        /*display*/
        n[0]
      ), f & /*href*/
      2 && w(
        e,
        "href",
        /*href*/
        n[1]
      );
    },
    d(n) {
      n && m(e);
    }
  };
}
function He(t) {
  let e;
  function i(f, r) {
    return (
      /*href*/
      f[1] ? Ge : Fe
    );
  }
  let l = i(t), n = l(t);
  return {
    c() {
      n.c(), e = D();
    },
    m(f, r) {
      n.m(f, r), b(f, e, r);
    },
    p(f, [r]) {
      l === (l = i(f)) && n ? n.p(f, r) : (n.d(1), n = l(f), n && (n.c(), n.m(e.parentNode, e)));
    },
    i: C,
    o: C,
    d(f) {
      f && m(e), n.d(f);
    }
  };
}
function Je(t, e, i) {
  let { display: l } = e, { href: n = void 0 } = e;
  return t.$$set = (f) => {
    "display" in f && i(0, l = f.display), "href" in f && i(1, n = f.href);
  }, [l, n];
}
class je extends V {
  constructor(e) {
    super(), q(this, e, Je, He, $, { display: 0, href: 1 });
  }
}
function ae(t, e, i) {
  const l = t.slice();
  return l[2] = e[i], l;
}
function ue(t) {
  let e, i, l = B(
    /*tags*/
    t[0]
  ), n = [];
  for (let r = 0; r < l.length; r += 1)
    n[r] = de(ae(t, l, r));
  const f = (r) => d(n[r], 1, 1, () => {
    n[r] = null;
  });
  return {
    c() {
      e = L("div");
      for (let r = 0; r < n.length; r += 1)
        n[r].c();
      w(e, "class", "mmvc-tags svelte-13uhso8");
    },
    m(r, s) {
      b(r, e, s);
      for (let o = 0; o < n.length; o += 1)
        n[o] && n[o].m(e, null);
      i = !0;
    },
    p(r, s) {
      if (s & /*tagList, tags*/
      3) {
        l = B(
          /*tags*/
          r[0]
        );
        let o;
        for (o = 0; o < l.length; o += 1) {
          const a = ae(r, l, o);
          n[o] ? (n[o].p(a, s), c(n[o], 1)) : (n[o] = de(a), n[o].c(), c(n[o], 1), n[o].m(e, null));
        }
        for (N(), o = l.length; o < n.length; o += 1)
          f(o);
        j();
      }
    },
    i(r) {
      if (!i) {
        for (let s = 0; s < l.length; s += 1)
          c(n[s]);
        i = !0;
      }
    },
    o(r) {
      n = n.filter(Boolean);
      for (let s = 0; s < n.length; s += 1)
        d(n[s]);
      i = !1;
    },
    d(r) {
      r && m(e), Z(n, r);
    }
  };
}
function ce(t) {
  let e, i;
  return e = new je({
    props: {
      display: (
        /*tagList*/
        t[1][
          /*tag*/
          t[2]
        ].display
      ),
      href: (
        /*tagList*/
        t[1][
          /*tag*/
          t[2]
        ].url
      )
    }
  }), {
    c() {
      P(e.$$.fragment);
    },
    m(l, n) {
      O(e, l, n), i = !0;
    },
    p(l, n) {
      const f = {};
      n & /*tagList, tags*/
      3 && (f.display = /*tagList*/
      l[1][
        /*tag*/
        l[2]
      ].display), n & /*tagList, tags*/
      3 && (f.href = /*tagList*/
      l[1][
        /*tag*/
        l[2]
      ].url), e.$set(f);
    },
    i(l) {
      i || (c(e.$$.fragment, l), i = !0);
    },
    o(l) {
      d(e.$$.fragment, l), i = !1;
    },
    d(l) {
      E(e, l);
    }
  };
}
function de(t) {
  let e, i, l = (
    /*tag*/
    t[2] in /*tagList*/
    t[1] && ce(t)
  );
  return {
    c() {
      l && l.c(), e = D();
    },
    m(n, f) {
      l && l.m(n, f), b(n, e, f), i = !0;
    },
    p(n, f) {
      /*tag*/
      n[2] in /*tagList*/
      n[1] ? l ? (l.p(n, f), f & /*tags, tagList*/
      3 && c(l, 1)) : (l = ce(n), l.c(), c(l, 1), l.m(e.parentNode, e)) : l && (N(), d(l, 1, 1, () => {
        l = null;
      }), j());
    },
    i(n) {
      i || (c(l), i = !0);
    },
    o(n) {
      d(l), i = !1;
    },
    d(n) {
      n && m(e), l && l.d(n);
    }
  };
}
function Ke(t) {
  let e, i, l = (
    /*tags*/
    t[0] && ue(t)
  );
  return {
    c() {
      l && l.c(), e = D();
    },
    m(n, f) {
      l && l.m(n, f), b(n, e, f), i = !0;
    },
    p(n, [f]) {
      /*tags*/
      n[0] ? l ? (l.p(n, f), f & /*tags*/
      1 && c(l, 1)) : (l = ue(n), l.c(), c(l, 1), l.m(e.parentNode, e)) : l && (N(), d(l, 1, 1, () => {
        l = null;
      }), j());
    },
    i(n) {
      i || (c(l), i = !0);
    },
    o(n) {
      d(l), i = !1;
    },
    d(n) {
      n && m(e), l && l.d(n);
    }
  };
}
function Qe(t, e, i) {
  let { tags: l } = e, { tagList: n } = e;
  return t.$$set = (f) => {
    "tags" in f && i(0, l = f.tags), "tagList" in f && i(1, n = f.tagList);
  }, [l, n];
}
class We extends V {
  constructor(e) {
    super(), q(this, e, Qe, Ke, $, { tags: 0, tagList: 1 });
  }
}
function Xe(t) {
  let e, i, l;
  return {
    c() {
      e = L("input"), w(e, "type", "range");
    },
    m(n, f) {
      b(n, e, f), fe(
        e,
        /*opacity*/
        t[0]
      ), i || (l = [
        W(
          e,
          "change",
          /*input_change_input_handler*/
          t[3]
        ),
        W(
          e,
          "input",
          /*input_change_input_handler*/
          t[3]
        )
      ], i = !0);
    },
    p(n, [f]) {
      f & /*opacity*/
      1 && fe(
        e,
        /*opacity*/
        n[0]
      );
    },
    i: C,
    o: C,
    d(n) {
      n && m(e), i = !1, S(l);
    }
  };
}
function Ye(t, e, i) {
  let { map: l } = e, { layerId: n } = e, { opacity: f = void 0 } = e;
  if (f === void 0) {
    const s = l.getPaintProperty(n, "raster-opacity");
    f = typeof s == "number" ? s * 100 : 100;
  } else
    l.setPaintProperty(n, "raster-opacity", f / 100);
  function r() {
    f = Pe(this.value), i(0, f);
  }
  return t.$$set = (s) => {
    "map" in s && i(1, l = s.map), "layerId" in s && i(2, n = s.layerId), "opacity" in s && i(0, f = s.opacity);
  }, t.$$.update = () => {
    t.$$.dirty & /*layerId, opacity, map*/
    7 && n && f !== void 0 && l.setPaintProperty(n, "raster-opacity", f / 100);
  }, [f, l, n, r];
}
class Ze extends V {
  constructor(e) {
    super(), q(this, e, Ye, Xe, $, { map: 1, layerId: 2, opacity: 0 });
  }
}
function _e(t, e, i) {
  const l = t.slice();
  return l[4] = e[i][0], l[5] = e[i][1], l[6] = e, l[7] = i, l;
}
function pe(t) {
  let e, i, l, n, f, r, s, o;
  function a() {
    t[3].call(
      i,
      /*key*/
      t[4]
    );
  }
  return n = new je({
    props: { display: (
      /*tag*/
      t[5].display
    ) }
  }), {
    c() {
      e = L("label"), i = L("input"), l = M(), P(n.$$.fragment), f = M(), w(i, "type", "checkbox");
    },
    m(u, h) {
      b(u, e, h), k(e, i), i.checked = /*checked*/
      t[1][
        /*key*/
        t[4]
      ], k(e, l), O(n, e, null), k(e, f), r = !0, s || (o = W(i, "change", a), s = !0);
    },
    p(u, h) {
      t = u, h & /*checked, Object, tagList*/
      3 && (i.checked = /*checked*/
      t[1][
        /*key*/
        t[4]
      ]);
      const _ = {};
      h & /*tagList*/
      1 && (_.display = /*tag*/
      t[5].display), n.$set(_);
    },
    i(u) {
      r || (c(n.$$.fragment, u), r = !0);
    },
    o(u) {
      d(n.$$.fragment, u), r = !1;
    },
    d(u) {
      u && m(e), E(n), s = !1, o();
    }
  };
}
function xe(t) {
  let e, i, l = B(Object.entries(
    /*tagList*/
    t[0]
  )), n = [];
  for (let r = 0; r < l.length; r += 1)
    n[r] = pe(_e(t, l, r));
  const f = (r) => d(n[r], 1, 1, () => {
    n[r] = null;
  });
  return {
    c() {
      e = L("div");
      for (let r = 0; r < n.length; r += 1)
        n[r].c();
      w(e, "class", "mmvc-taglist svelte-xt5d1j");
    },
    m(r, s) {
      b(r, e, s);
      for (let o = 0; o < n.length; o += 1)
        n[o] && n[o].m(e, null);
      i = !0;
    },
    p(r, [s]) {
      if (s & /*Object, tagList, checked*/
      3) {
        l = B(Object.entries(
          /*tagList*/
          r[0]
        ));
        let o;
        for (o = 0; o < l.length; o += 1) {
          const a = _e(r, l, o);
          n[o] ? (n[o].p(a, s), c(n[o], 1)) : (n[o] = pe(a), n[o].c(), c(n[o], 1), n[o].m(e, null));
        }
        for (N(), o = l.length; o < n.length; o += 1)
          f(o);
        j();
      }
    },
    i(r) {
      if (!i) {
        for (let s = 0; s < l.length; s += 1)
          c(n[s]);
        i = !0;
      }
    },
    o(r) {
      n = n.filter(Boolean);
      for (let s = 0; s < n.length; s += 1)
        d(n[s]);
      i = !1;
    },
    d(r) {
      r && m(e), Z(n, r);
    }
  };
}
function et(t, e, i) {
  let { tagList: l } = e, { enabledTags: n = [] } = e, f = Object.fromEntries(Object.keys(l).map((s) => [s, !1]));
  function r(s) {
    f[s] = this.checked, i(1, f);
  }
  return t.$$set = (s) => {
    "tagList" in s && i(0, l = s.tagList), "enabledTags" in s && i(2, n = s.enabledTags);
  }, t.$$.update = () => {
    t.$$.dirty & /*checked*/
    2 && i(2, n = Object.entries(f).filter(([s, o]) => o).map(([s, o]) => s));
  }, [l, f, n, r];
}
class tt extends V {
  constructor(e) {
    super(), q(this, e, et, xe, $, { tagList: 0, enabledTags: 2 });
  }
}
function nt(t) {
  let e, i, l;
  return {
    c() {
      e = L("input"), w(e, "type", "checkbox"), /*checked*/
      (t[0] === void 0 || /*indeterminate*/
      t[1] === void 0) && Y(() => (
        /*input_change_handler*/
        t[6].call(e)
      ));
    },
    m(n, f) {
      b(n, e, f), e.checked = /*checked*/
      t[0], e.indeterminate = /*indeterminate*/
      t[1], i || (l = [
        W(
          e,
          "change",
          /*input_change_handler*/
          t[6]
        ),
        W(
          e,
          "change",
          /*updateVisiblity*/
          t[2]
        )
      ], i = !0);
    },
    p(n, [f]) {
      f & /*checked*/
      1 && (e.checked = /*checked*/
      n[0]), f & /*indeterminate*/
      2 && (e.indeterminate = /*indeterminate*/
      n[1]);
    },
    i: C,
    o: C,
    d(n) {
      n && m(e), i = !1, S(l);
    }
  };
}
function it(t, e, i) {
  let l, n, { map: f } = e, { layerId: r } = e, { visibility: s = void 0 } = e;
  s === void 0 ? s = f.getLayoutProperty(r, "visibility") || "visible" : f.setLayoutProperty(r, "visibility", s);
  const o = () => {
    i(3, s = l ? "visible" : "none");
  };
  function a() {
    l = this.checked, n = this.indeterminate, i(0, l), i(3, s), i(1, n), i(3, s);
  }
  return t.$$set = (u) => {
    "map" in u && i(4, f = u.map), "layerId" in u && i(5, r = u.layerId), "visibility" in u && i(3, s = u.visibility);
  }, t.$$.update = () => {
    t.$$.dirty & /*visibility*/
    8 && i(0, l = s === "visible"), t.$$.dirty & /*visibility*/
    8 && i(1, n = s === "indeterminate"), t.$$.dirty & /*visibility, map, layerId*/
    56 && s !== "indeterminate" && f.setLayoutProperty(r, "visibility", s);
  }, [
    l,
    n,
    o,
    s,
    f,
    r,
    a
  ];
}
class lt extends V {
  constructor(e) {
    super(), q(this, e, it, nt, $, { map: 4, layerId: 5, visibility: 3 });
  }
}
function ge(t, e, i) {
  const l = t.slice();
  return l[9] = e[i], l[10] = e, l[11] = i, l;
}
function he(t) {
  let e, i, l;
  function n(r) {
    t[5](r);
  }
  let f = {
    map: (
      /*map*/
      t[1]
    ),
    layerId: (
      /*option*/
      t[0].layerId
    )
  };
  return (
    /*option*/
    t[0].visibility !== void 0 && (f.visibility = /*option*/
    t[0].visibility), e = new lt({ props: f }), A.push(() => K(e, "visibility", n)), {
      c() {
        P(e.$$.fragment);
      },
      m(r, s) {
        O(e, r, s), l = !0;
      },
      p(r, s) {
        const o = {};
        s & /*map*/
        2 && (o.map = /*map*/
        r[1]), s & /*option*/
        1 && (o.layerId = /*option*/
        r[0].layerId), !i && s & /*option*/
        1 && (i = !0, o.visibility = /*option*/
        r[0].visibility, J(() => i = !1)), e.$set(o);
      },
      i(r) {
        l || (c(e.$$.fragment, r), l = !0);
      },
      o(r) {
        d(e.$$.fragment, r), l = !1;
      },
      d(r) {
        E(e, r);
      }
    }
  );
}
function me(t) {
  let e, i, l;
  function n(r) {
    t[6](r);
  }
  let f = {
    map: (
      /*map*/
      t[1]
    ),
    layerId: (
      /*option*/
      t[0].layerId
    )
  };
  return (
    /*option*/
    t[0].opacity !== void 0 && (f.opacity = /*option*/
    t[0].opacity), e = new Ze({ props: f }), A.push(() => K(e, "opacity", n)), {
      c() {
        P(e.$$.fragment);
      },
      m(r, s) {
        O(e, r, s), l = !0;
      },
      p(r, s) {
        const o = {};
        s & /*map*/
        2 && (o.map = /*map*/
        r[1]), s & /*option*/
        1 && (o.layerId = /*option*/
        r[0].layerId), !i && s & /*option*/
        1 && (i = !0, o.opacity = /*option*/
        r[0].opacity, J(() => i = !1)), e.$set(o);
      },
      i(r) {
        l || (c(e.$$.fragment, r), l = !0);
      },
      o(r) {
        d(e.$$.fragment, r), l = !1;
      },
      d(r) {
        E(e, r);
      }
    }
  );
}
function be(t) {
  let e, i, l, n = (
    /*option*/
    t[0].childrenTagList && ye(t)
  ), f = B(Object.keys(
    /*option*/
    t[0].children
  )), r = [];
  for (let o = 0; o < f.length; o += 1)
    r[o] = ke(ge(t, f, o));
  const s = (o) => d(r[o], 1, 1, () => {
    r[o] = null;
  });
  return {
    c() {
      n && n.c(), e = M();
      for (let o = 0; o < r.length; o += 1)
        r[o].c();
      i = D();
    },
    m(o, a) {
      n && n.m(o, a), b(o, e, a);
      for (let u = 0; u < r.length; u += 1)
        r[u] && r[u].m(o, a);
      b(o, i, a), l = !0;
    },
    p(o, a) {
      if (/*option*/
      o[0].childrenTagList ? n ? (n.p(o, a), a & /*option*/
      1 && c(n, 1)) : (n = ye(o), n.c(), c(n, 1), n.m(e.parentNode, e)) : n && (N(), d(n, 1, 1, () => {
        n = null;
      }), j()), a & /*map, option, Object, enabledTags, undefined*/
      11) {
        f = B(Object.keys(
          /*option*/
          o[0].children
        ));
        let u;
        for (u = 0; u < f.length; u += 1) {
          const h = ge(o, f, u);
          r[u] ? (r[u].p(h, a), c(r[u], 1)) : (r[u] = ke(h), r[u].c(), c(r[u], 1), r[u].m(i.parentNode, i));
        }
        for (N(), u = f.length; u < r.length; u += 1)
          s(u);
        j();
      }
    },
    i(o) {
      if (!l) {
        c(n);
        for (let a = 0; a < f.length; a += 1)
          c(r[a]);
        l = !0;
      }
    },
    o(o) {
      d(n), r = r.filter(Boolean);
      for (let a = 0; a < r.length; a += 1)
        d(r[a]);
      l = !1;
    },
    d(o) {
      o && (m(e), m(i)), n && n.d(o), Z(r, o);
    }
  };
}
function ye(t) {
  let e, i, l;
  function n(r) {
    t[7](r);
  }
  let f = {
    tagList: (
      /*option*/
      t[0].childrenTagList
    )
  };
  return (
    /*enabledTags*/
    t[3] !== void 0 && (f.enabledTags = /*enabledTags*/
    t[3]), e = new tt({ props: f }), A.push(() => K(e, "enabledTags", n)), {
      c() {
        P(e.$$.fragment);
      },
      m(r, s) {
        O(e, r, s), l = !0;
      },
      p(r, s) {
        const o = {};
        s & /*option*/
        1 && (o.tagList = /*option*/
        r[0].childrenTagList), !i && s & /*enabledTags*/
        8 && (i = !0, o.enabledTags = /*enabledTags*/
        r[3], J(() => i = !1)), e.$set(o);
      },
      i(r) {
        l || (c(e.$$.fragment, r), l = !0);
      },
      o(r) {
        d(e.$$.fragment, r), l = !1;
      },
      d(r) {
        E(e, r);
      }
    }
  );
}
function ve(t) {
  let e, i, l;
  function n(r) {
    t[8](
      r,
      /*key*/
      t[9]
    );
  }
  let f = {
    map: (
      /*map*/
      t[1]
    ),
    tagList: (
      /*option*/
      t[0].childrenTagList
    )
  };
  return (
    /*option*/
    t[0].children[
      /*key*/
      t[9]
    ] !== void 0 && (f.option = /*option*/
    t[0].children[
      /*key*/
      t[9]
    ]), e = new Ce({ props: f }), A.push(() => K(e, "option", n)), {
      c() {
        P(e.$$.fragment);
      },
      m(r, s) {
        O(e, r, s), l = !0;
      },
      p(r, s) {
        t = r;
        const o = {};
        s & /*map*/
        2 && (o.map = /*map*/
        t[1]), s & /*option*/
        1 && (o.tagList = /*option*/
        t[0].childrenTagList), !i && s & /*option, Object*/
        1 && (i = !0, o.option = /*option*/
        t[0].children[
          /*key*/
          t[9]
        ], J(() => i = !1)), e.$set(o);
      },
      i(r) {
        l || (c(e.$$.fragment, r), l = !0);
      },
      o(r) {
        d(e.$$.fragment, r), l = !1;
      },
      d(r) {
        E(e, r);
      }
    }
  );
}
function ke(t) {
  let e = (
    /*enabledTags*/
    t[3].every(n)
  ), i, l;
  function n(...r) {
    return (
      /*func*/
      t[4](
        /*key*/
        t[9],
        ...r
      )
    );
  }
  let f = e && ve(t);
  return {
    c() {
      f && f.c(), i = D();
    },
    m(r, s) {
      f && f.m(r, s), b(r, i, s), l = !0;
    },
    p(r, s) {
      t = r, s & /*enabledTags, option*/
      9 && (e = /*enabledTags*/
      t[3].every(n)), e ? f ? (f.p(t, s), s & /*enabledTags, option*/
      9 && c(f, 1)) : (f = ve(t), f.c(), c(f, 1), f.m(i.parentNode, i)) : f && (N(), d(f, 1, 1, () => {
        f = null;
      }), j());
    },
    i(r) {
      l || (c(f), l = !0);
    },
    o(r) {
      d(f), l = !1;
    },
    d(r) {
      r && m(i), f && f.d(r);
    }
  };
}
function rt(t) {
  let e, i, l, n = (
    /*option*/
    t[0].display + ""
  ), f, r, s, o, a, u, h, _, T, p = (
    /*option*/
    t[0].type === "layer" && he(t)
  );
  o = new ze({
    props: { details: (
      /*option*/
      t[0].details
    ) }
  }), u = new We({
    props: {
      tags: (
        /*option*/
        t[0].tags
      ),
      tagList: (
        /*tagList*/
        t[2]
      )
    }
  });
  let y = (
    /*option*/
    t[0].type === "layer" && /*option*/
    t[0].opacityRange && me(t)
  ), v = (
    /*option*/
    t[0].type === "group" && be(t)
  );
  return {
    c() {
      e = L("div"), i = L("label"), l = L("h3"), f = H(n), r = M(), p && p.c(), s = M(), P(o.$$.fragment), a = M(), P(u.$$.fragment), h = M(), y && y.c(), _ = M(), v && v.c(), w(i, "class", "svelte-23mer1"), w(e, "class", "mmvc-node svelte-23mer1");
    },
    m(g, I) {
      b(g, e, I), k(e, i), k(i, l), k(l, f), k(i, r), p && p.m(i, null), k(e, s), O(o, e, null), k(e, a), O(u, e, null), k(e, h), y && y.m(e, null), k(e, _), v && v.m(e, null), T = !0;
    },
    p(g, [I]) {
      (!T || I & /*option*/
      1) && n !== (n = /*option*/
      g[0].display + "") && x(f, n), /*option*/
      g[0].type === "layer" ? p ? (p.p(g, I), I & /*option*/
      1 && c(p, 1)) : (p = he(g), p.c(), c(p, 1), p.m(i, null)) : p && (N(), d(p, 1, 1, () => {
        p = null;
      }), j());
      const re = {};
      I & /*option*/
      1 && (re.details = /*option*/
      g[0].details), o.$set(re);
      const ee = {};
      I & /*option*/
      1 && (ee.tags = /*option*/
      g[0].tags), I & /*tagList*/
      4 && (ee.tagList = /*tagList*/
      g[2]), u.$set(ee), /*option*/
      g[0].type === "layer" && /*option*/
      g[0].opacityRange ? y ? (y.p(g, I), I & /*option*/
      1 && c(y, 1)) : (y = me(g), y.c(), c(y, 1), y.m(e, _)) : y && (N(), d(y, 1, 1, () => {
        y = null;
      }), j()), /*option*/
      g[0].type === "group" ? v ? (v.p(g, I), I & /*option*/
      1 && c(v, 1)) : (v = be(g), v.c(), c(v, 1), v.m(e, null)) : v && (N(), d(v, 1, 1, () => {
        v = null;
      }), j());
    },
    i(g) {
      T || (c(p), c(o.$$.fragment, g), c(u.$$.fragment, g), c(y), c(v), T = !0);
    },
    o(g) {
      d(p), d(o.$$.fragment, g), d(u.$$.fragment, g), d(y), d(v), T = !1;
    },
    d(g) {
      g && m(e), p && p.d(), E(o), E(u), y && y.d(), v && v.d();
    }
  };
}
function ot(t, e, i) {
  let { map: l } = e, { option: n } = e, { tagList: f } = e, r = [];
  const s = (_, T) => {
    var p;
    return n.type === "group" && (n.children[_].tags === void 0 || ((p = n.children[_].tags) == null ? void 0 : p.includes(T)));
  };
  function o(_) {
    t.$$.not_equal(n.visibility, _) && (n.visibility = _, i(0, n));
  }
  function a(_) {
    t.$$.not_equal(n.opacity, _) && (n.opacity = _, i(0, n));
  }
  function u(_) {
    r = _, i(3, r);
  }
  function h(_, T) {
    t.$$.not_equal(n.children[T], _) && (n.children[T] = _, i(0, n));
  }
  return t.$$set = (_) => {
    "map" in _ && i(1, l = _.map), "option" in _ && i(0, n = _.option), "tagList" in _ && i(2, f = _.tagList);
  }, [
    n,
    l,
    f,
    r,
    s,
    o,
    a,
    u,
    h
  ];
}
class Ce extends V {
  constructor(e) {
    super(), q(this, e, ot, rt, $, { map: 1, option: 0, tagList: 2 });
  }
}
function Le(t, e, i) {
  const l = t.slice();
  return l[4] = e[i], l[5] = e, l[6] = i, l;
}
function we(t) {
  let e, i, l, n, f;
  function r(o) {
    t[3](
      o,
      /*key*/
      t[4]
    );
  }
  let s = {
    map: (
      /*map*/
      t[1]
    ),
    tagList: (
      /*tagList*/
      t[2]
    )
  };
  return (
    /*options*/
    t[0][
      /*key*/
      t[4]
    ] !== void 0 && (s.option = /*options*/
    t[0][
      /*key*/
      t[4]
    ]), i = new Ce({ props: s }), A.push(() => K(i, "option", r)), {
      c() {
        e = L("div"), P(i.$$.fragment), n = M(), w(e, "class", "mmvc");
      },
      m(o, a) {
        b(o, e, a), O(i, e, null), k(e, n), f = !0;
      },
      p(o, a) {
        t = o;
        const u = {};
        a & /*map*/
        2 && (u.map = /*map*/
        t[1]), a & /*tagList*/
        4 && (u.tagList = /*tagList*/
        t[2]), !l && a & /*options, Object*/
        1 && (l = !0, u.option = /*options*/
        t[0][
          /*key*/
          t[4]
        ], J(() => l = !1)), i.$set(u);
      },
      i(o) {
        f || (c(i.$$.fragment, o), f = !0);
      },
      o(o) {
        d(i.$$.fragment, o), f = !1;
      },
      d(o) {
        o && m(e), E(i);
      }
    }
  );
}
function ft(t) {
  let e, i, l = B(Object.keys(
    /*options*/
    t[0]
  )), n = [];
  for (let r = 0; r < l.length; r += 1)
    n[r] = we(Le(t, l, r));
  const f = (r) => d(n[r], 1, 1, () => {
    n[r] = null;
  });
  return {
    c() {
      for (let r = 0; r < n.length; r += 1)
        n[r].c();
      e = D();
    },
    m(r, s) {
      for (let o = 0; o < n.length; o += 1)
        n[o] && n[o].m(r, s);
      b(r, e, s), i = !0;
    },
    p(r, [s]) {
      if (s & /*map, tagList, options, Object*/
      7) {
        l = B(Object.keys(
          /*options*/
          r[0]
        ));
        let o;
        for (o = 0; o < l.length; o += 1) {
          const a = Le(r, l, o);
          n[o] ? (n[o].p(a, s), c(n[o], 1)) : (n[o] = we(a), n[o].c(), c(n[o], 1), n[o].m(e.parentNode, e));
        }
        for (N(), o = l.length; o < n.length; o += 1)
          f(o);
        j();
      }
    },
    i(r) {
      if (!i) {
        for (let s = 0; s < l.length; s += 1)
          c(n[s]);
        i = !0;
      }
    },
    o(r) {
      n = n.filter(Boolean);
      for (let s = 0; s < n.length; s += 1)
        d(n[s]);
      i = !1;
    },
    d(r) {
      r && m(e), Z(n, r);
    }
  };
}
function st(t, e, i) {
  let { map: l } = e, { options: n } = e, { tagList: f = {} } = e;
  function r(s, o) {
    t.$$.not_equal(n[o], s) && (n[o] = s, i(0, n));
  }
  return t.$$set = (s) => {
    "map" in s && i(1, l = s.map), "options" in s && i(0, n = s.options), "tagList" in s && i(2, f = s.tagList);
  }, [n, l, f, r];
}
class at extends V {
  constructor(e) {
    super(), q(this, e, st, ft, $, { map: 1, options: 0, tagList: 2 });
  }
}
function ut(t) {
  let e, i, l, n;
  function f(s) {
    t[2](s);
  }
  let r = { map: (
    /*map*/
    t[1]
  ) };
  return (
    /*options*/
    t[0] !== void 0 && (r.options = /*options*/
    t[0]), i = new at({ props: r }), A.push(() => K(i, "options", f)), {
      c() {
        e = L("div"), P(i.$$.fragment), w(e, "class", "maplibregl-ctrl maplibregl-ctrl-group svelte-19buiiy"), w(e, "id", "mapmapviewer-control");
      },
      m(s, o) {
        b(s, e, o), O(i, e, null), n = !0;
      },
      p(s, [o]) {
        const a = {};
        o & /*map*/
        2 && (a.map = /*map*/
        s[1]), !l && o & /*options*/
        1 && (l = !0, a.options = /*options*/
        s[0], J(() => l = !1)), i.$set(a);
      },
      i(s) {
        n || (c(i.$$.fragment, s), n = !0);
      },
      o(s) {
        d(i.$$.fragment, s), n = !1;
      },
      d(s) {
        s && m(e), E(i);
      }
    }
  );
}
function ct(t, e, i) {
  let { map: l } = e, { options: n } = e;
  function f(r) {
    n = r, i(0, n);
  }
  return t.$$set = (r) => {
    "map" in r && i(1, l = r.map), "options" in r && i(0, n = r.options);
  }, [n, l, f];
}
let dt = class extends V {
  constructor(e) {
    super(), q(this, e, ct, ut, $, { map: 1, options: 0 });
  }
};
class gt {
  constructor(e) {
    U(this, "options");
    U(this, "container");
    U(this, "map");
    this.options = e, this.map = null;
  }
  onAdd(e) {
    return this.container = document.createElement("div"), this.map = e, new dt({
      target: this.container,
      props: {
        map: this.map,
        options: this.options
      }
    }), this.container;
  }
  onRemove() {
    var e;
    (e = this.container.parentNode) == null || e.removeChild(this.container), this.map = null;
  }
}
export {
  gt as MapMapViewerControl,
  dt as MapMapViewerControlComponent
};
//# sourceMappingURL=mapmapviewer-control.js.map
