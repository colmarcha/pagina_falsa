/*-----------------------------------------------------------------------------------*\
 * PISliderJS - Pure JS Slider
 * version: 2.0
 * Author: ZakariaMouhid
 * Profile: https://codecanyon.net/user/zakariamouhid/portfolio?ref=zakariamouhid
\*-----------------------------------------------------------------------------------*/
(function (f, ia) {
	"object" === typeof module && module && "object" === typeof module.exports ? module.exports = ia(f) : f.PISliderJS = ia(f)
})(this, function (f) {
	function ia(a, g) {
		if (!a) return -1;
		if (a.indexOf) return a.indexOf(g);
		var b, d = a.length;
		for (b = 0; b < d; b += 1)
			if (a[b] === g) return b;
		return -1
	}

	function G(a, g) {
		var b, d = a.length;
		for (b = 0; b < d && !1 !== g(a[b], b, a); b += 1);
	}

	function B(a, b) {
		return "object" === typeof a && "function" === typeof a.hasOwnProperty ? a.hasOwnProperty(b) : Da.prototype.hasOwnProperty.call(a, b)
	}

	function bb(a, b) {
		var g,
			d = [],
			f = a ? a.length : 0;
		for (g = 0; g < f; g += 1) d[g] = b(a[g], g, a);
		return d
	}

	function cb(a) {
		var b, t = a ? a.length : 0,
			d = [];
		for (b = 0; b < t; b += 1) d[b] = a[b];
		return d
	}

	function E(a, b, t, d) {
		if (/\s/.test(b)) {
			b = b.split(/\s+/);
			var g;
			for (g = 0; g < b.length; g += 1) E(a, b[g], t, d)
		} else a.addEventListener ? a.addEventListener(b, t, d) : a.attachEvent && (a === f && "load" !== b && "resize" !== b && (a = L), a.attachEvent("on" + b, t, d))
	}

	function J(a, b, t) {
		if (/\s/.test(b)) {
			b = b.split(/\s+/);
			var d;
			for (d = 0; d < b.length; d += 1) J(a, b[d], t)
		} else a.removeEventListener ? a.removeEventListener(b,
			t) : a.detachEvent && (a === f && "load" !== b && "resize" !== b && (a = L), a.detachEvent("on" + b, t))
	}

	function h(a, b, t) {
		var d, g;
		if (a instanceof Array)
			for (d = 0; d < a.length; d += 1)
				if (3 === arguments.length) a[d].style[b] = t;
				else
					for (g in b) "undefined" !== typeof b[g] && B(b, g) && (a[d].style[g] = b[g]);
		else if (3 === arguments.length) a.style[b] = t;
		else
			for (g in b) "undefined" !== typeof b[g] && B(b, g) && (a.style[g] = b[g])
	}

	function P(a, b) {
		if (b) {
			var g;
			if (/\s/.test(b)) {
				var d = b.replace(/(^\s+)|(\s+$)/g, "").split(/\s+/);
				for (g = 0; g < d.length; g += 1) P(a,
					d[g])
			} else {
				if (a.classList && a.classList.add) return a.classList.add(b);
				d = a.className.replace(/(^\s+)|(\s+$)/g, "").split(/\s+/);
				g = ia(d, b); - 1 === g && (d.push(b), a.className = d.join(" "))
			}
		}
	}

	function aa(a, b) {
		if (b) {
			var g;
			if (/\s/.test(b)) {
				var d = b.replace(/(^\s+)|(\s+$)/g, "").split(/\s+/);
				for (g = 0; g < d.length; g += 1) aa(a, d[g])
			} else {
				if (a.classList && a.classList.remove) return a.classList.remove(b);
				d = a.className.replace(/(^\s+)|(\s+$)/g, "").split(/\s+/);
				g = ia(d, b); - 1 < g && (d.splice(g, 1), a.className = d.join(" "))
			}
		}
	}

	function jb(a) {
		a &&
			(a.remove ? a.remove() : a.parentNode && a.parentNode.removeChild && a.parentNode.removeChild(a))
	}

	function Pa(a) {
		a.preventDefault && a.preventDefault();
		return a.returnValue = !1
	}

	function T(a, b) {
		return (a % b + b) % b
	}

	function db(a, b) {
		for (var g in b) "undefined" !== typeof b[g] && B(b, g) && (a[g] = b[g]);
		return a
	}

	function Qa(a) {
		var b, f = a ? a.length : 0,
			d = [];
		if (a && 1 === a.nodeType) d.push(a);
		else
			for (b = 0; b < f; b += 1) {
				var h = a[b];
				h && 1 === h.nodeType && d.push(a[b])
			}
		return d
	}

	function Ra(a) {
		return /^touch/.test(a.type) ? a.touches && 0 < a.touches.length ?
			a.touches[0].pageX || 0 : a.changedTouches && 0 < a.changedTouches.length ? a.changedTouches[0].pageX || 0 : 0 : a.pageX || a.clientX || 0
	}

	function Sa(a) {
		return /^touch/.test(a.type) ? a.touches && 0 < a.touches.length ? a.touches[0].pageY || 0 : a.changedTouches && 0 < a.changedTouches.length ? a.changedTouches[0].pageY || 0 : 0 : a.pageY || a.clientY || 0
	}

	function U(a) {
		if (a === f) return f.innerWidth || U(L.documentElement) || U(L.body);
		if ("function" === typeof a.getBoundingClientRect) {
			var b = a.getBoundingClientRect();
			if (b.width) return b.width
		}
		return a.clientWidth ||
			a.offsetWidth || 0
	}

	function M(a) {
		if (a === f) return f.innerHeight || M(L.documentElement) || M(L.body);
		if ("function" === typeof a.getBoundingClientRect) {
			var b = a.getBoundingClientRect();
			if (b.height) return b.height
		}
		return a.clientHeight || a.offsetHeight || 0
	}

	function Ta(a, g) {
		if ("number" === typeof a) return b.max(a || 0, 0);
		if ("string" !== typeof a) return 0;
		var h = U(f) / 100,
			d = M(f) / 100;
		a = a.replace(/^calc/gi, "");
		a = a.replace(/%/g, "*" + g / 100);
		a = a.replace(/px/gi, "*1");
		a = a.replace(/vw/gi, "*" + h);
		a = a.replace(/vh/gi, "*" + d);
		a = a.replace(/vmin/gi,
			"*" + b.min(d, h));
		a = a.replace(/vmax/gi, "*" + b.max(d, h));
		if (/^[\(\)\+\*\-\/\s0-9\.e]+$/i.test(a)) {
			try {
				a = eb(a)
			} catch (xb) {}
			return b.max(+a || 0, 0)
		}
		return 0
	}

	function ub(a) {
		var b = [],
			f;
		if ("object" === typeof a)
			for (f in a) "object" === typeof a[f] && B(a, f) && !isNaN(f) && 0 <= +f && b.push({
				size: +f,
				options: db({}, a[f])
			});
		b.sort(function (a, b) {
			return a.size - b.size
		});
		return b
	}

	function Ua(a) {
		function g(c) {
			var a = !1;
			var e = !!c.fade;
			B(c, "fade") && e !== w && (a = !0, w = e);
			e = !!c.rtl;
			B(c, "rtl") && e !== x && (a = !0, x = e);
			e = c.shadow;
			e = "string" === typeof e ?
				e : e ? "#000" : !1;
			B(c, "shadow") && e !== Q && (Q = e);
			e = b.abs(parseInt(c.defaultMerge, 10)) || 1;
			B(c, "defaultMerge") && e !== Ea && (a = !0, Ea = e);
			e = c.merge;
			e = "string" === typeof e ? e : e ? "data-merge" : !1;
			B(c, "merge") && e !== ba && (a = !0, ba = e);
			e = !!c.vertical;
			B(c, "vertical") && e !== y && (a = !0, y = e);
			e = !!c.loop;
			B(c, "loop") && e !== C && (a = !0, C = e);
			e = !!c.center;
			B(c, "center") && e !== V && (a = !0, V = e);
			e = c.gutter;
			B(c, "gutter") && e !== la && (a = !0, la = e);
			e = b.abs(parseInt(c.columns, 10)) || 1;
			B(c, "columns") && e !== Va && (Va = e);
			e = !!c.drag;
			B(c, "drag") && e !== ma && (a = !0, ma = e);
			e = c.autoHeight;
			e = "min" === e || "max" === e ? e : e ? "max" : !1;
			B(c, "autoHeight") && e !== O && (a = !0, O = e);
			e = c.autoPlay;
			e = !1 === e ? !1 : !0 === e ? 3E3 : isNaN(e) ? !1 : b.abs(+e);
			B(c, "autoPlay") && e !== W && (W = e);
			e = c.duration;
			e = isNaN(e) ? 500 : b.abs(+e);
			B(c, "duration") && e !== ja && (ja = e);
			e = c.timing;
			e = "string" === typeof e && "function" === typeof ra[e] ? ra[e] : "function" === typeof e ? e : ra.ease;
			B(c, "timing") && e !== R && (R = e);
			return a
		}

		function t(c) {
			return u + (ca[c] - 1) * (u + l)
		}

		function d(c) {
			return (V ? (A - t(c)) / 2 : 0) + -(n[c] % n[p]) * (u + l)
		}

		function ia() {
			if (!w) {
				ca.length =
					n.length = 0;
				D = Va;
				var c, a = 0;
				for (c = n[0] = 0; c < p; c += 1) n[c + 1] = n[c] + (ca[c] = b.min(Wa[c] || Ea, D));
				if (n[p] < D)
					for (D = n[p], c = n[0] = 0; c < p; c += 1) n[c + 1] = n[c] + (ca[c] = b.min(Wa[c] || Ea, D));
				q = p - 1;
				if (!C && !V) {
					for (; 0 < c && a < D;) a += ca[--c];
					q = c;
					if (a !== D)
						for (ca[c] += D - a; c < p;) n[c + 1] = n[c] + ca[c], c += 1
				}
				for (c = 0; c < H.length; c += 1)
					for (a = 0; a < H[c].length; a += 1) h(H[c][a], "display", a > q ? "none" : "")
			}
		}

		function Xa() {
			if (!w && C) {
				for (; X.length;) jb(X.pop());
				for (; n[X.length] < D;) {
					var c = r[X.length % r.length].cloneNode(!0);
					S.appendChild(c);
					X.push(c);
					P(c, Fa)
				}
			}
		}

		function Ga(c, a, e) {
			var k = -(n[c] % n[p]) * (u + l),
				f = b.min(.5, t(c) / 2);
			1 === e ? k -= f : 2 === e ? k -= t(c) / 2 : 3 === e && (k -= t(c) - f);
			if (C) a = -T(-a, n[p] * (u + l)), e = a - A <= k && k <= a, !e && c < X.length && (k -= n[p] * (u + l));
			else if (!V && Q && (a = b.max(d(q), b.min(a, d(0)))), 0 === c && a >= d(0) || c === p - 1 && a <= d(q)) return !0;
			return a - A <= k && k <= a
		}

		function Da(c, a) {
			return Ga(c, a, 2) || Ga(c, a, 1) || Ga(c, a, 3)
		}

		function Ha(c, a) {
			return Ga(c, a, 1) && Ga(c, a, 3)
		}

		function sa() {
			if (w) return z;
			var c;
			if (C) {
				if (V) {
					var a = -T(-m + A / 2, n[p] * (u + l)) + A / 2;
					for (c = 0; c < p; c += 1) {
						var b = d(c) + t(c) /
							2 + l / 2;
						var f = d(c) - t(c) / 2 - l / 2;
						if (b >= a && a >= f) return c
					}
				} else
					for (a = -T(-m, n[p] * (u + l)), c = 0; c < p; c += 1)
						if (b = d(c) + l / 2, f = d(c) - t(c) - l / 2, b >= a && a >= f) return T(b - a <= a - f ? c : c + 1, q + 1);
				return 0
			}
			if (m >= d(0)) return 0;
			if (m > d(q))
				if (V)
					for (c = 0; c < p - 1; c += 1) {
						if (f = d(c) - t(c) / 2 - l / 2, m >= f) return c
					} else
						for (c = 0; c < p - 1; c += 1)
							if (b = d(c) + l / 2, f = d(c) - t(c) - l / 2, b >= m && m > f) return b - m <= m - f ? c : c + 1;
			return q
		}

		function Ia() {
			if (O && (w || !y)) {
				var a;
				if (w) var k = M(r[z]);
				else
					for (k = "min" === O ? Infinity : 0, a = 0; a < p; a += 1) Da(a, m) && ("max" === O && (k = b.max(k, M(r[a]))), "min" ===
						O && (k = b.min(k, M(r[a]))));
				v.style.height !== k + "px" && h(v, "height", k + "px")
			}
		}

		function ab() {
			if (!C && !w) {
				var a = d(q),
					k = d(0);
				m < a && (m = a - u * (b.exp(2 * (a - m) / u) - 1) / 2);
				m > k && (m = k + u * (b.exp(2 * (m - k) / u) - 1) / 2)
			}
		}

		function kb() {
			C && (m = -T(-m, n[p] * (u + l)));
			if (!(w || C || V) && Q) {
				var a = 0;
				m < d(q) ? (a = b.min(d(q) - m, A) / 2, h(Y, y ? "top" : x ? "right" : "left", ""), h(Y, y ? "bottom" : x ? "left" : "right", 0)) : m > d(0) && (a = b.min(m - d(0), A) / 2, h(Y, y ? "top" : x ? "right" : "left", 0), h(Y, y ? "bottom" : x ? "left" : "right", ""));
				h(Y, "boxShadow", "0 0 " + a + "px " + a / 5 + "px " + Q)
			}
			a = m;
			C || V ||
				!Q || (a = b.max(d(q), b.min(m, d(0))));
			h(S, y ? "top" : x ? "right" : "left", a + "px");
			var k;
			for (a = 0; a < p; a += 1) {
				if (Da(a, m)) {
					for (k = 0; k < Z.length; k += 1) Z[k][a] && P(Z[k][a], I);
					P(r[a], I)
				} else {
					for (k = 0; k < Z.length; k += 1) Z[k][a] && aa(Z[k][a], I);
					aa(r[a], I)
				}
				for (k = 0; k < H.length; k += 1) H[k][a] && (aa(H[k][a], I), h(H[k][a], "display", a > q ? "none" : ""))
			}
			for (k = 0; k < H.length; k += 1) a = b.floor(b.min(H[k].length, q + 1) * sa() / (q + 1)), H[k][a] && P(H[k][a], I);
			Ia()
		}

		function db(a, k) {
			function c() {
				var a = +new Date;
				a - f < lb ? (m = g + (h - g) * R((a - f) / lb), da = ta(c)) : (m = h, fb());
				kb()
			}
			na(da);
			ua(oa);
			var f = +new Date;
			if (C) {
				var d = n[p] * (u + l);
				var g = -T(-m, d);
				var h = -T(-a, d);
				var q = b.abs(h - g);
				var r = b.abs(h - g + d);
				var Ja = b.abs(h - g - d);
				var F = b.min(q, r, Ja);
				F !== q && F === r ? g -= d : F !== q && F === Ja && (h -= d)
			} else g = m, h = a;
			var lb = k ? 0 : ja;
			da = ta(c)
		}

		function eb(a, k) {
			function c() {
				var e = +new Date;
				if (e - n < Ja) {
					for (d = 0; d < p; d += 1) F = ea[d], F.view && (f = F.opacityInit, g = d === a ? 1 : 0, F.opacity = b.min(b.max(f + (g - f) * R((e - n) / Ja), 0), 1), h(r[d], "opacity", F.opacity));
					da = ta(c)
				} else {
					for (d = 0; d < p; d += 1) F = ea[d], F.view && (h(r[d], "opacity",
						F.opacity = F.view = g = d === a ? 1 : 0), h(r[d], "visibility", g ? "" : "hidden"));
					fb()
				}
			}
			var d, f, g;
			na(da);
			ua(oa);
			for (d = 0; d < Z.length; d += 1) {
				var m = Z[d];
				m[z] && aa(m[z], I);
				m[a] && P(m[a], I)
			}
			for (d = 0; d < H.length; d += 1) {
				m = H[d];
				var l = b.floor(b.min(m.length, q + 1) * z / (q + 1));
				m[l] && aa(m[l], I);
				l = b.floor(b.min(m.length, q + 1) * a / (q + 1));
				m[l] && P(m[l], I)
			}
			z = a;
			var n = +new Date;
			var Ja = k || !vb ? 0 : ja;
			ea[a].view = 1;
			h(r[a], "visibility", "");
			for (d = 0; d < p; d += 1) {
				var F = ea[d];
				F.view && (F.opacityInit = F.opacity)
			}
			Ia();
			da = ta(c)
		}

		function N(a, k) {
			a = b.max(0, b.min(a, q));
			w ? eb(a, k) : (db(d(a), k), z = a)
		}

		function va() {
			w || C ? N(T(z - 1, q + 1), 0) : 0 < z && N(z - 1, 0)
		}

		function wa() {
			w || C ? N(T(z + 1, q + 1), 0) : z < q && N(z + 1, 0)
		}

		function fb() {
			ua(oa);
			!1 !== W && (oa = mb(function () {
				1 !== xa || w || C || z !== q || (xa = -1); - 1 !== xa || w || C || 0 !== z || (xa = 1);
				1 === xa ? wa() : va()
			}, W))
		}

		function nb(a) {
			function c(a, c) {
				m = y ? n + (c - p) : n + (l - a) * (x ? 1 : -1);
				if (!C && !w) {
					var e = d(q),
						k = d(0);
					m < e && (m = e - u * b.log(2 * (e - m) / u + 1) / 2);
					m > k && (m = k + u * b.log(2 * (m - k) / u + 1) / 2)
				}
				kb()
			}

			function e(a) {
				w || c(Ra(a), Sa(a));
				Pa(a)
			}

			function g(a) {
				var c = Ra(a),
					d = Sa(a);
				if (c !== l || d !== p) J(f,
					"mousemove touchmove", g), /^touch/.test(a.type) && (!y && b.abs(c - l) < b.abs(d - p) || y && b.abs(c - l) > b.abs(d - p)) || (e(a), E(f, "mousemove", e, !1), E(f, "touchmove", e, gb), ya = za = !0, P(v, Aa))
			}

			function h(a) {
				fb();
				if (ya) {
					var d = Ra(a);
					a = Sa(a);
					if (w) y ? (a < p && wa(), a > p && va()) : ((x && d > l || !x && d < l) && wa(), (x && d < l || !x && d > l) && va());
					else {
						c(d, a);
						var k = sa();
						if (k === r)
							if (y) a < p && (k += 1), a > p && --k;
							else {
								if (x && d > l || !x && d < l) k += 1;
								(x && d < l || !x && d > l) && --k
							}
						C ? N(T(k, q + 1), 0) : N(b.max(0, b.min(k, q)), 0)
					}
				} else N(sa(), 1);
				za = !1;
				aa(v, Aa);
				J(f, "mousemove touchmove",
					g);
				J(f, "mousemove touchmove", e);
				J(f, "mouseup touchend", h)
			}
			if (ma) {
				ab();
				var l = Ra(a),
					p = Sa(a),
					n = m,
					r = sa();
				ya = za = !1;
				na(da);
				ua(oa);
				E(f, "mouseup touchend", h, !1);
				E(f, "mousemove", g, !1);
				E(f, "touchmove", g, gb)
			}
		}

		function Ya() {
			if (p) {
				var a;
				Ba = Ka ? M(fa) : U(fa);
				for (a = ka.length - 1; 0 <= a; --a)
					if (Ba >= ka[a].size) {
						if (g(ka[a].options)) {
							hb();
							Za();
							return
						}
						break
					}
				ua(oa);
				na(da);
				ya = za = !1;
				ia();
				A = b.max(!w && y ? M(v) : U(v), 1);
				l = w ? 0 : b.min(A / (D - 1), Ta(la, A));
				if (w) Ia();
				else {
					u = b.max(0, A - l * (D - 1)) / D;
					y ? h(r, "marginBottom", l + "px") : (h(r, "float", x ? "right" :
						"left"), h(r, x ? "marginLeft" : "marginRight", l + "px"));
					for (a = 0; a < p; a += 1) h(r[a], y ? "height" : "width", t(a) + "px");
					Xa();
					h(S, y ? "height" : "width", (n[p] + n[X.length]) * (u + l) + "px")
				}
				N(z, !0)
			}
		}

		function Ca() {
			Ia();
			if ((Ka ? M(fa) : U(fa)) !== Ba) Ya();
			else if (!w) {
				var a = b.max(y ? M(v) : U(v), 1);
				a !== A ? Ya() : (a = b.min(a / (D - 1), Ta(la, a)), a !== l && Ya())
			}
			na($a);
			$a = ta(Ca)
		}

		function ob(a) {
			ma && ya && Pa(a)
		}

		function pb(a) {
			ma && za && Pa(a)
		}

		function qb(a) {
			ma && Pa(a)
		}

		function rb(a, b) {
			var c, d = Ha(q, a);
			b = b || [];
			for (c = b.length = 0; c <= q; c += 1)
				if (Ha(c, a)) b.length && b[b.length -
					1] + 1 !== c ? b.unshift(b[0] - 1) : b.push(c);
				else if (b.length && !d) break;
			return b
		}

		function pa(a) {
			if (!(a >= p))
				if (pa.list1 || (pa.list1 = []), pa.list2 || (pa.list2 = []), w) N(a, 0);
				else if (!Ha(a, m)) {
				var c = pa.list1,
					e = pa.list2,
					f = sa(),
					g, h = a;
				if (C) {
					rb(m, c);
					var l = Infinity;
					for (g = 0; g <= q; g += 1)
						if (Ha(a, d(g))) {
							var n = rb(d(g), e);
							if (c.length && n.length) {
								var r = c[0],
									t = c[c.length - 1],
									u = n[0],
									v = n[n.length - 1];
								r = t <= u ? u - t - 1 : v <= r ? r - v - 1 : r < v ? u - t - 1 : r - v - 1;
								n = b.min(r, p - c.length - n.length - r)
							} else n = Infinity;
							n < l ? (l = n, h = g) : n === l && b.min(b.abs(f - g), b.abs(f +
								p - g)) <= b.min(b.abs(f - h), b.abs(f + p - h)) && (h = g)
						}
				} else
					for (g = 0; g <= q; g += 1) Ha(a, d(g)) && (h = b.abs(f - g) < b.abs(f - h) ? g : h);
				N(h, 0)
			}
		}

		function qa(a) {
			qa.events || (qa.events = []);
			qa.events[a] || (qa.events[a] = function () {
				pa(a)
			});
			return qa.events[a]
		}

		function wb(a, d) {
			a > q || (1 === arguments.length && (d = q + 1), N(0 === q ? a : b.ceil(a * q / b.min(d - 1, q)), 0))
		}

		function ha(a, b) {
			ha.events || (ha.events = []);
			ha.events[b] || (ha.events[b] = []);
			ha.events[b][a] || (ha.events[b][a] = function () {
				wb(a, b)
			});
			return ha.events[b][a]
		}

		function Za() {
			if (K && La.children.length) {
				var a;
				Ba = Ka ? M(fa) : U(fa);
				for (a = ka.length - 1; 0 <= a; --a)
					if (Ba >= ka[a].size) {
						g(ka[a].options);
						break
					}
				ib = cb(La.children);
				ea = [];
				X = [];
				S = L.createElement("div");
				v = L.createElement("div");
				Y = L.createElement("div");
				Wa = [];
				ca = [];
				n = [];
				r = bb(ib, function (a) {
					var c = L.createElement("div");
					c.appendChild(a);
					S.appendChild(c);
					P(c, Ma);
					Wa.push(ba ? b.abs(parseInt(a.getAttribute(ba), 10)) || 0 : 0);
					ea.push({
						opacity: 0,
						opacityInit: 0,
						view: 0
					});
					return c
				});
				p = r.length;
				v.appendChild(S);
				v.appendChild(Y);
				La.appendChild(v);
				P(v, Na);
				P(S, Oa);
				ya = za = K = !1;
				xa =
					1;
				m = 0;
				h(La, {
					visibility: ""
					//overflow: "hidden"
				});
				h(v, {
					display: "block",
					//overflow: "hidden",
					position: "relative",
					width: "100%",
					height: "100%"
				});
				h(S, {
					width: "100%",
					height: "100%",
					position: "relative",
					//overflow: "hidden",
					"float": x ? "right" : "left"
				});
				h(Y, {
					position: "absolute",
					height: "100%",
					width: 0
				});
				E(v, "mousedown touchstart", nb, !1);
				E(v, "dragstart", qb, !1);
				E(v, "click", ob, !1);
				E(f, "wheel keydown DOMMouseScroll mousewheel", pb, !1);
				E(f, "resize load", Ca, !1);
				E(L, "DOMContentLoaded", Ca, !1);
				$a = ta(Ca);
				y ? h(Y, {
						left: 0,
						height: 0,
						width: "100%"
					}) :
					h(Y, {
						top: 0,
						width: 0,
						height: "100%"
					});
				Ba = Ka ? M(fa) : U(fa);
				ia();
				w ? (q = p - 1, G(H, function (a) {
					h(a, "display", "")
				}), h(S, {
					width: "100%",
					height: "100%"
				}), h(r, {
					position: "absolute",
					width: "100%",
					opacity: 0,
					left: 0,
					top: 0,
					visibility: "hidden"
				}), h(r[z], {
					opacity: 1,
					visibility: ""
				}), ea[z].opacity = ea[z].opacityInit = ea[z].view = 1, Ia()) : y ? (h(r, "minWidth", "1px"), A = b.max(M(v), 1), l = b.min(A / (D - 1), Ta(la, A)), u = b.max(0, A - l * (D - 1)) / D, h(r, {
						"float": x ? "right" : "left",
						width: "100%",
						marginBottom: l + "px"
					}), G(r, function (a, b) {
						h(a, "height", t(b) + "px")
					}),
					Xa(), h(S, "height", (n[p] + n[X.length]) * (u + l) + "px")) : (h(r, "minHeight", "1px"), A = b.max(U(v), 1), l = b.min(A / (D - 1), Ta(la, A)), u = b.max(0, A - l * (D - 1)) / D, x ? h(r, {
					"float": "right",
					marginLeft: l + "px"
				}) : h(r, {
					"float": "left",
					marginRight: l + "px"
				}), G(r, function (a, b) {
					h(a, "width", t(b) + "px")
				}), Xa(), h(S, "width", (n[p] + n[X.length]) * (u + l) + "px"));
				G(sb, function (a) {
					E(a, "click", va, !1)
				});
				G(tb, function (a) {
					E(a, "click", wa, !1)
				});
				G(Z, function (a) {
					G(a, function (a, b) {
						E(a, "click", qa(b), !1)
					})
				});
				G(H, function (a) {
					G(a, function (b, c) {
						E(b, "click", ha(c,
							a.length), !1)
					})
				});
				N(z, 1)
			}
		}

		function hb() {
			K || (K = !0, ua(oa), na(da), na($a), jb(v), G(ib, function (a) {
				La.appendChild(a)
			}), J(v, "mousedown touchstart", nb), J(v, "dragstart", qb), J(v, "click", ob), J(f, "wheel keydown DOMMouseScroll mousewheel", pb), J(f, "resize load", Ca), J(L, "DOMContentLoaded", Ca), G(sb, function (a) {
				J(a, "click", va)
			}), G(tb, function (a) {
				J(a, "click", wa)
			}), G(Z, function (a) {
				G(a, function (a, b) {
					J(a, "click", qa(b));
					aa(a, I)
				})
			}), G(H, function (a) {
				G(a, function (b, c) {
					J(b, "click", ha(c, a.length));
					aa(b, I)
				})
			}))
		}
		if (!(this instanceof Ua)) return new Ua(a);
		var r, ib, S, v, Y, Wa, q, ea, p, l, A, m, ca, n, u, D, da, ya, za, oa, xa, X, $a, Ba;
		var K = !0;
		var z = 0;
		var La = a.target;
		var w = !!a.fade;
		var x = !!a.rtl;
		var Q = a.shadow;
		Q = "string" === typeof Q ? Q : Q ? "#000" : !1;
		var Ea = b.abs(parseInt(a.defaultMerge, 10)) || 1;
		var ba = a.merge;
		ba = "string" === typeof ba ? ba : ba ? "data-merge" : !1;
		var sb = Qa(a.prev);
		var tb = Qa(a.next);
		var H = bb(Qa(a.points), function (a) {
			return cb(a.children)
		});
		var Z = bb(Qa(a.thumbs), function (a) {
			return cb(a.children)
		});
		var y = !!a.vertical;
		var C = !!a.loop;
		var V = !!a.center;
		var la = a.gutter;
		var Va = a.columns;
		var ka = ub(a.responsive);
		var fa = a.responsiveBase || f;
		var Ka = !!a.responsiveBaseVertical;
		var ma = !!a.drag;
		var O = a.autoHeight;
		O = "min" === O || "max" === O ? O : O ? "max" : !1;
		var W = a.autoPlay;
		W = !1 === W ? !1 : !0 === W ? 3E3 : isNaN(W) ? !1 : b.abs(+W);
		var ja = a.duration;
		ja = isNaN(ja) ? 500 : b.abs(+ja);
		var R = a.timing;
		R = "string" === typeof R && "function" === typeof ra[R] ? ra[R] : "function" === typeof R ? R : ra.ease;
		var I = a.activeClass;
		I = "string" === typeof I ? I : "active";
		var Aa = a.draggedClass;
		Aa = "string" === typeof Aa ? Aa :
			"dragged";
		var Fa = a.clonedClass;
		Fa = "string" === typeof Fa ? Fa : "cloned";
		var Oa = a.itemsClass;
		Oa = "string" === typeof Oa ? Oa : "items";
		var Ma = a.itemClass;
		Ma = "string" === typeof Ma ? Ma : "item";
		var Na = a.stageClass;
		Na = "string" === typeof Na ? Na : "stage";
		this.init = function () {
			Za();
			return this
		};
		this.destroy = function () {
			hb();
			return this
		};
		this.to = function (a) {
			K || 0 <= a && a <= q && N(parseInt(a, 10), 0)
		};
		this.toPrev = function () {
			K || va()
		};
		this.toNext = function () {
			K || wa()
		};
		this.currentIndex = function () {
			if (!K) return sa()
		};
		this.maxIndex = function () {
			if (!K) return q
		};
		this.minIndex = function () {
			if (!K) return 0
		};
		this.updateClones = function () {
			K || Xa()
		};
		this.setOptions = function (a) {
			g(a) && !K ? (hb(), Za()) : K || Ya()
		};
		this.getOptions = function () {
			if (!K) return {
				fade: w,
				rtl: x,
				shadow: Q,
				defaultMerge: Ea,
				merge: ba,
				vertical: y,
				responsive: !!ka.length,
				responsiveBase: fa,
				responsiveBaseVertical: Ka,
				loop: C,
				center: V,
				gutter: la,
				columns: Va,
				drag: ma,
				autoHeight: O,
				autoPlay: W,
				duration: ja,
				timingFunction: R,
				activeClass: I,
				draggedClass: Aa,
				clonedClass: Fa,
				itemsClass: Oa,
				itemClass: Ma,
				stageClass: Na
			}
		};
		this.disableResponsive =
			function () {
				ka.length = 0
			};
		Za()
	}
	var L = f.document;
	var ab = f.jQuery || f.Zepto;
	var b = f.Math;
	var Da = f.Object;
	var ua = f.clearTimeout;
	var mb = f.setTimeout;
	var eb = eval;
	var ra = {
		ease: function (a) {
			return 1 - b.sin((a - 1) * (a - 1) * b.PI / 2)
		},
		"ease-in-out": function (a) {
			return (1 + b.sin((a - .5) * b.PI)) / 2
		},
		"ease-out": function (a) {
			return b.cos((a - 1) * b.PI / 2)
		},
		"ease-in": function (a) {
			return 1 - b.cos(a * b.PI / 2)
		},
		linear: function (a) {
			return a
		},
		elastic: function (a) {
			return 0 === a || 1 === a ? a : b.pow(a - 1, 5) * b.sin(3 * b.PI / (2 * a - 2)) + 1
		}
	};
	var ta = f.requestAnimationFrame ||
		f.webkitRequestAnimationFrame || f.mozRequestAnimationFrame || f.msRequestAnimationFrame || f.oRequestAnimationFrame || function (a) {
			return mb(a, 16)
		};
	var na = f.cancelAnimationFrame || f.cancelRequestAnimationFrame || f.webkitCancelAnimationFrame || f.webkitCancelRequestAnimationFrame || f.mozCancelAnimationFrame || f.mozCancelRequestAnimationFrame || f.msCancelAnimationFrame || f.msCancelRequestAnimationFrame || f.oCancelAnimationFrame || f.oCancelRequestAnimationFrame || f.clearTimeout;
	try {
		var gb = !1;
		E(f, "test", null, Da.defineProperty({},
			"passive", {
				get: function () {
					gb = {
						passive: !1
					}
				}
			}))
	} catch (a) {}
	var vb = "undefined" !== typeof L.createElement("span").style.opacity;
	ab && (ab.fn.PISliderJS = function (a) {
		return this.map(function () {
			a.target = this;
			return new Ua(a)
		})
	});
	return Ua
});