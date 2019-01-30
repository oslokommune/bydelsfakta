(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  ['chunk-vendors'],
  {
    '01f9': function(t, n, e) {
      'use strict';
      var r = e('2d00'),
        i = e('5ca1'),
        o = e('2aba'),
        a = e('32e9'),
        u = e('84f2'),
        c = e('41a0'),
        f = e('7f20'),
        s = e('38fd'),
        l = e('2b4c')('iterator'),
        h = !([].keys && 'next' in [].keys()),
        d = '@@iterator',
        p = 'keys',
        v = 'values',
        y = function() {
          return this;
        };
      t.exports = function(t, n, e, g, b, m, _) {
        c(e, n, g);
        var w,
          x,
          M,
          S = function(t) {
            if (!h && t in C) return C[t];
            switch (t) {
              case p:
                return function() {
                  return new e(this, t);
                };
              case v:
                return function() {
                  return new e(this, t);
                };
            }
            return function() {
              return new e(this, t);
            };
          },
          A = n + ' Iterator',
          E = b == v,
          k = !1,
          C = t.prototype,
          T = C[l] || C[d] || (b && C[b]),
          O = T || S(b),
          N = b ? (E ? S('entries') : O) : void 0,
          P = ('Array' == n && C.entries) || T;
        if (
          (P &&
            ((M = s(P.call(new t()))),
            M !== Object.prototype && M.next && (f(M, A, !0), r || 'function' == typeof M[l] || a(M, l, y))),
          E &&
            T &&
            T.name !== v &&
            ((k = !0),
            (O = function() {
              return T.call(this);
            })),
          (r && !_) || (!h && !k && C[l]) || a(C, l, O),
          (u[n] = O),
          (u[A] = y),
          b)
        )
          if (((w = { values: E ? O : S(v), keys: m ? O : S(p), entries: N }), _)) for (x in w) x in C || o(C, x, w[x]);
          else i(i.P + i.F * (h || k), n, w);
        return w;
      };
    },
    '02f4': function(t, n, e) {
      var r = e('4588'),
        i = e('be13');
      t.exports = function(t) {
        return function(n, e) {
          var o,
            a,
            u = String(i(n)),
            c = r(e),
            f = u.length;
          return c < 0 || c >= f
            ? t
              ? ''
              : void 0
            : ((o = u.charCodeAt(c)),
              o < 55296 || o > 56319 || c + 1 === f || (a = u.charCodeAt(c + 1)) < 56320 || a > 57343
                ? t
                  ? u.charAt(c)
                  : o
                : t
                  ? u.slice(c, c + 2)
                  : a - 56320 + ((o - 55296) << 10) + 65536);
        };
      };
    },
    '0390': function(t, n, e) {
      'use strict';
      var r = e('02f4')(!0);
      t.exports = function(t, n, e) {
        return n + (e ? r(t, n).length : 1);
      };
    },
    '042e': function(t, n, e) {
      var r = e('5ca1');
      r(r.S, 'Math', { fround: e('91ca') });
    },
    '049f': function(t, n, e) {
      var r = e('5ca1');
      r(r.S, 'Math', { log1p: e('d6c6') });
    },
    '04ff': function(t, n, e) {
      var r = e('5ca1'),
        i = e('3ca5');
      r(r.S + r.F * (Number.parseInt != i), 'Number', { parseInt: i });
    },
    '097d': function(t, n, e) {
      'use strict';
      var r = e('5ca1'),
        i = e('8378'),
        o = e('7726'),
        a = e('ebd6'),
        u = e('bcaa');
      r(r.P + r.R, 'Promise', {
        finally: function(t) {
          var n = a(this, i.Promise || o.Promise),
            e = 'function' == typeof t;
          return this.then(
            e
              ? function(e) {
                  return u(n, t()).then(function() {
                    return e;
                  });
                }
              : t,
            e
              ? function(e) {
                  return u(n, t()).then(function() {
                    throw e;
                  });
                }
              : t
          );
        },
      });
    },
    '09fa': function(t, n, e) {
      var r = e('4588'),
        i = e('9def');
      t.exports = function(t) {
        if (void 0 === t) return 0;
        var n = r(t),
          e = i(n);
        if (n !== e) throw RangeError('Wrong length!');
        return e;
      };
    },
    '0a49': function(t, n, e) {
      var r = e('9b43'),
        i = e('626a'),
        o = e('4bf8'),
        a = e('9def'),
        u = e('cd1c');
      t.exports = function(t, n) {
        var e = 1 == t,
          c = 2 == t,
          f = 3 == t,
          s = 4 == t,
          l = 6 == t,
          h = 5 == t || l,
          d = n || u;
        return function(n, u, p) {
          for (
            var v,
              y,
              g = o(n),
              b = i(g),
              m = r(u, p, 3),
              _ = a(b.length),
              w = 0,
              x = e ? d(n, _) : c ? d(n, 0) : void 0;
            _ > w;
            w++
          )
            if ((h || w in b) && ((v = b[w]), (y = m(v, w, g)), t))
              if (e) x[w] = y;
              else if (y)
                switch (t) {
                  case 3:
                    return !0;
                  case 5:
                    return v;
                  case 6:
                    return w;
                  case 2:
                    x.push(v);
                }
              else if (s) return !1;
          return l ? -1 : f || s ? s : x;
        };
      };
    },
    '0b21': function(t, n, e) {
      var r = e('5ca1');
      r(r.S, 'Math', { sign: e('96fb') });
    },
    '0bfb': function(t, n, e) {
      'use strict';
      var r = e('cb7c');
      t.exports = function() {
        var t = r(this),
          n = '';
        return (
          t.global && (n += 'g'),
          t.ignoreCase && (n += 'i'),
          t.multiline && (n += 'm'),
          t.unicode && (n += 'u'),
          t.sticky && (n += 'y'),
          n
        );
      };
    },
    '0d58': function(t, n, e) {
      var r = e('ce10'),
        i = e('e11e');
      t.exports =
        Object.keys ||
        function(t) {
          return r(t, i);
        };
    },
    '0d6d': function(t, n, e) {
      var r = e('d3f4'),
        i = e('67ab').onFreeze;
      e('5eda')('freeze', function(t) {
        return function(n) {
          return t && r(n) ? t(i(n)) : n;
        };
      });
    },
    '0f88': function(t, n, e) {
      var r,
        i = e('7726'),
        o = e('32e9'),
        a = e('ca5a'),
        u = a('typed_array'),
        c = a('view'),
        f = !(!i.ArrayBuffer || !i.DataView),
        s = f,
        l = 0,
        h = 9,
        d = 'Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array'.split(
          ','
        );
      while (l < h) (r = i[d[l++]]) ? (o(r.prototype, u, !0), o(r.prototype, c, !0)) : (s = !1);
      t.exports = { ABV: f, CONSTR: s, TYPED: u, VIEW: c };
    },
    '10ad': function(t, n, e) {
      'use strict';
      var r,
        i = e('0a49')(0),
        o = e('2aba'),
        a = e('67ab'),
        u = e('7333'),
        c = e('643e'),
        f = e('d3f4'),
        s = e('79e5'),
        l = e('b39a'),
        h = 'WeakMap',
        d = a.getWeak,
        p = Object.isExtensible,
        v = c.ufstore,
        y = {},
        g = function(t) {
          return function() {
            return t(this, arguments.length > 0 ? arguments[0] : void 0);
          };
        },
        b = {
          get: function(t) {
            if (f(t)) {
              var n = d(t);
              return !0 === n ? v(l(this, h)).get(t) : n ? n[this._i] : void 0;
            }
          },
          set: function(t, n) {
            return c.def(l(this, h), t, n);
          },
        },
        m = (t.exports = e('e0b8')(h, g, b, c, !0, !0));
      s(function() {
        return 7 != new m().set((Object.freeze || Object)(y), 7).get(y);
      }) &&
        ((r = c.getConstructor(g, h)),
        u(r.prototype, b),
        (a.NEED = !0),
        i(['delete', 'has', 'get', 'set'], function(t) {
          var n = m.prototype,
            e = n[t];
          o(n, t, function(n, i) {
            if (f(n) && !p(n)) {
              this._f || (this._f = new r());
              var o = this._f[t](n, i);
              return 'set' == t ? this : o;
            }
            return e.call(this, n, i);
          });
        }));
    },
    1169: function(t, n, e) {
      var r = e('2d95');
      t.exports =
        Array.isArray ||
        function(t) {
          return 'Array' == r(t);
        };
    },
    '11e9': function(t, n, e) {
      var r = e('52a7'),
        i = e('4630'),
        o = e('6821'),
        a = e('6a99'),
        u = e('69a8'),
        c = e('c69a'),
        f = Object.getOwnPropertyDescriptor;
      n.f = e('9e1e')
        ? f
        : function(t, n) {
            if (((t = o(t)), (n = a(n, !0)), c))
              try {
                return f(t, n);
              } catch (e) {}
            if (u(t, n)) return i(!r.f.call(t, n), t[n]);
          };
    },
    '130f': function(t, n, e) {
      var r = e('5ca1'),
        i = e('1991');
      r(r.G + r.B, { setImmediate: i.set, clearImmediate: i.clear });
    },
    1448: function(t, n, e) {
      'use strict';
      e('386b')('strike', function(t) {
        return function() {
          return t(this, 'strike', '', '');
        };
      });
    },
    1495: function(t, n, e) {
      var r = e('86cc'),
        i = e('cb7c'),
        o = e('0d58');
      t.exports = e('9e1e')
        ? Object.defineProperties
        : function(t, n) {
            i(t);
            var e,
              a = o(n),
              u = a.length,
              c = 0;
            while (u > c) r.f(t, (e = a[c++]), n[e]);
            return t;
          };
    },
    '14b9': function(t, n, e) {
      var r = e('5ca1');
      r(r.P, 'String', { repeat: e('9744') });
    },
    '15ac': function(t, n, e) {
      e('ec30')('Int16', 2, function(t) {
        return function(n, e, r) {
          return t(this, n, e, r);
        };
      });
    },
    '165b': function(t, n, e) {
      var r = e('d3f4');
      e('5eda')('isExtensible', function(t) {
        return function(n) {
          return !!r(n) && (!t || t(n));
        };
      });
    },
    1991: function(t, n, e) {
      var r,
        i,
        o,
        a = e('9b43'),
        u = e('31f4'),
        c = e('fab2'),
        f = e('230e'),
        s = e('7726'),
        l = s.process,
        h = s.setImmediate,
        d = s.clearImmediate,
        p = s.MessageChannel,
        v = s.Dispatch,
        y = 0,
        g = {},
        b = 'onreadystatechange',
        m = function() {
          var t = +this;
          if (g.hasOwnProperty(t)) {
            var n = g[t];
            delete g[t], n();
          }
        },
        _ = function(t) {
          m.call(t.data);
        };
      (h && d) ||
        ((h = function(t) {
          var n = [],
            e = 1;
          while (arguments.length > e) n.push(arguments[e++]);
          return (
            (g[++y] = function() {
              u('function' == typeof t ? t : Function(t), n);
            }),
            r(y),
            y
          );
        }),
        (d = function(t) {
          delete g[t];
        }),
        'process' == e('2d95')(l)
          ? (r = function(t) {
              l.nextTick(a(m, t, 1));
            })
          : v && v.now
            ? (r = function(t) {
                v.now(a(m, t, 1));
              })
            : p
              ? ((i = new p()), (o = i.port2), (i.port1.onmessage = _), (r = a(o.postMessage, o, 1)))
              : s.addEventListener && 'function' == typeof postMessage && !s.importScripts
                ? ((r = function(t) {
                    s.postMessage(t + '', '*');
                  }),
                  s.addEventListener('message', _, !1))
                : (r =
                    b in f('script')
                      ? function(t) {
                          c.appendChild(f('script'))[b] = function() {
                            c.removeChild(this), m.call(t);
                          };
                        }
                      : function(t) {
                          setTimeout(a(m, t, 1), 0);
                        })),
        (t.exports = { set: h, clear: d });
    },
    '1c4c': function(t, n, e) {
      'use strict';
      var r = e('9b43'),
        i = e('5ca1'),
        o = e('4bf8'),
        a = e('1fa8'),
        u = e('33a4'),
        c = e('9def'),
        f = e('f1ae'),
        s = e('27ee');
      i(
        i.S +
          i.F *
            !e('5cc5')(function(t) {
              Array.from(t);
            }),
        'Array',
        {
          from: function(t) {
            var n,
              e,
              i,
              l,
              h = o(t),
              d = 'function' == typeof this ? this : Array,
              p = arguments.length,
              v = p > 1 ? arguments[1] : void 0,
              y = void 0 !== v,
              g = 0,
              b = s(h);
            if ((y && (v = r(v, p > 2 ? arguments[2] : void 0, 2)), void 0 == b || (d == Array && u(b))))
              for (n = c(h.length), e = new d(n); n > g; g++) f(e, g, y ? v(h[g], g) : h[g]);
            else
              for (l = b.call(h), e = new d(); !(i = l.next()).done; g++)
                f(e, g, y ? a(l, v, [i.value, g], !0) : i.value);
            return (e.length = g), e;
          },
        }
      );
    },
    '1fa8': function(t, n, e) {
      var r = e('cb7c');
      t.exports = function(t, n, e, i) {
        try {
          return i ? n(r(e)[0], e[1]) : n(e);
        } catch (a) {
          var o = t['return'];
          throw (void 0 !== o && r(o.call(t)), a);
        }
      };
    },
    '20d6': function(t, n, e) {
      'use strict';
      var r = e('5ca1'),
        i = e('0a49')(6),
        o = 'findIndex',
        a = !0;
      o in [] &&
        Array(1)[o](function() {
          a = !1;
        }),
        r(r.P + r.F * a, 'Array', {
          findIndex: function(t) {
            return i(this, t, arguments.length > 1 ? arguments[1] : void 0);
          },
        }),
        e('9c6c')(o);
    },
    '214f': function(t, n, e) {
      'use strict';
      e('b0c5');
      var r = e('2aba'),
        i = e('32e9'),
        o = e('79e5'),
        a = e('be13'),
        u = e('2b4c'),
        c = e('520a'),
        f = u('species'),
        s = !o(function() {
          var t = /./;
          return (
            (t.exec = function() {
              var t = [];
              return (t.groups = { a: '7' }), t;
            }),
            '7' !== ''.replace(t, '$<a>')
          );
        }),
        l = (function() {
          var t = /(?:)/,
            n = t.exec;
          t.exec = function() {
            return n.apply(this, arguments);
          };
          var e = 'ab'.split(t);
          return 2 === e.length && 'a' === e[0] && 'b' === e[1];
        })();
      t.exports = function(t, n, e) {
        var h = u(t),
          d = !o(function() {
            var n = {};
            return (
              (n[h] = function() {
                return 7;
              }),
              7 != ''[t](n)
            );
          }),
          p = d
            ? !o(function() {
                var n = !1,
                  e = /a/;
                return (
                  (e.exec = function() {
                    return (n = !0), null;
                  }),
                  'split' === t &&
                    ((e.constructor = {}),
                    (e.constructor[f] = function() {
                      return e;
                    })),
                  e[h](''),
                  !n
                );
              })
            : void 0;
        if (!d || !p || ('replace' === t && !s) || ('split' === t && !l)) {
          var v = /./[h],
            y = e(a, h, ''[t], function(t, n, e, r, i) {
              return n.exec === c
                ? d && !i
                  ? { done: !0, value: v.call(n, e, r) }
                  : { done: !0, value: t.call(e, n, r) }
                : { done: !1 };
            }),
            g = y[0],
            b = y[1];
          r(String.prototype, t, g),
            i(
              RegExp.prototype,
              h,
              2 == n
                ? function(t, n) {
                    return b.call(t, this, n);
                  }
                : function(t) {
                    return b.call(t, this);
                  }
            );
        }
      };
    },
    '217b': function(t, n, e) {
      'use strict';
      var r = e('d3f4'),
        i = e('38fd'),
        o = e('2b4c')('hasInstance'),
        a = Function.prototype;
      o in a ||
        e('86cc').f(a, o, {
          value: function(t) {
            if ('function' != typeof this || !r(t)) return !1;
            if (!r(this.prototype)) return t instanceof this;
            while ((t = i(t))) if (this.prototype === t) return !0;
            return !1;
          },
        });
    },
    2251: function(t, n, e) {
      var r = e('5ca1'),
        i = e('cb7c'),
        o = Object.isExtensible;
      r(r.S, 'Reflect', {
        isExtensible: function(t) {
          return i(t), !o || o(t);
        },
      });
    },
    '230e': function(t, n, e) {
      var r = e('d3f4'),
        i = e('7726').document,
        o = r(i) && r(i.createElement);
      t.exports = function(t) {
        return o ? i.createElement(t) : {};
      };
    },
    2397: function(t, n, e) {
      var r = e('5ca1'),
        i = e('2aeb'),
        o = e('d8e8'),
        a = e('cb7c'),
        u = e('d3f4'),
        c = e('79e5'),
        f = e('f0c1'),
        s = (e('7726').Reflect || {}).construct,
        l = c(function() {
          function t() {}
          return !(s(function() {}, [], t) instanceof t);
        }),
        h = !c(function() {
          s(function() {});
        });
      r(r.S + r.F * (l || h), 'Reflect', {
        construct: function(t, n) {
          o(t), a(n);
          var e = arguments.length < 3 ? t : o(arguments[2]);
          if (h && !l) return s(t, n, e);
          if (t == e) {
            switch (n.length) {
              case 0:
                return new t();
              case 1:
                return new t(n[0]);
              case 2:
                return new t(n[0], n[1]);
              case 3:
                return new t(n[0], n[1], n[2]);
              case 4:
                return new t(n[0], n[1], n[2], n[3]);
            }
            var r = [null];
            return r.push.apply(r, n), new (f.apply(t, r))();
          }
          var c = e.prototype,
            d = i(u(c) ? c : Object.prototype),
            p = Function.apply.call(t, d, n);
          return u(p) ? p : d;
        },
      });
    },
    '23c6': function(t, n, e) {
      var r = e('2d95'),
        i = e('2b4c')('toStringTag'),
        o =
          'Arguments' ==
          r(
            (function() {
              return arguments;
            })()
          ),
        a = function(t, n) {
          try {
            return t[n];
          } catch (e) {}
        };
      t.exports = function(t) {
        var n, e, u;
        return void 0 === t
          ? 'Undefined'
          : null === t
            ? 'Null'
            : 'string' == typeof (e = a((n = Object(t)), i))
              ? e
              : o
                ? r(n)
                : 'Object' == (u = r(n)) && 'function' == typeof n.callee
                  ? 'Arguments'
                  : u;
      };
    },
    '242a': function(t, n, e) {
      'use strict';
      e('386b')('sup', function(t) {
        return function() {
          return t(this, 'sup', '', '');
        };
      });
    },
    '252c': function(t, n, e) {
      'use strict';
      (function(t) {
        function e() {
          var t = window.navigator.userAgent,
            n = t.indexOf('MSIE ');
          if (n > 0) return parseInt(t.substring(n + 5, t.indexOf('.', n)), 10);
          var e = t.indexOf('Trident/');
          if (e > 0) {
            var r = t.indexOf('rv:');
            return parseInt(t.substring(r + 3, t.indexOf('.', r)), 10);
          }
          var i = t.indexOf('Edge/');
          return i > 0 ? parseInt(t.substring(i + 5, t.indexOf('.', i)), 10) : -1;
        }
        var r = void 0;
        function i() {
          i.init || ((i.init = !0), (r = -1 !== e()));
        }
        var o = {
          render: function() {
            var t = this,
              n = t.$createElement,
              e = t._self._c || n;
            return e('div', { staticClass: 'resize-observer', attrs: { tabindex: '-1' } });
          },
          staticRenderFns: [],
          _scopeId: 'data-v-b329ee4c',
          name: 'resize-observer',
          methods: {
            compareAndNotify: function() {
              (this._w === this.$el.offsetWidth && this._h === this.$el.offsetHeight) ||
                ((this._w = this.$el.offsetWidth), (this._h = this.$el.offsetHeight), this.$emit('notify'));
            },
            addResizeHandlers: function() {
              this._resizeObject.contentDocument.defaultView.addEventListener('resize', this.compareAndNotify),
                this.compareAndNotify();
            },
            removeResizeHandlers: function() {
              this._resizeObject &&
                this._resizeObject.onload &&
                (!r &&
                  this._resizeObject.contentDocument &&
                  this._resizeObject.contentDocument.defaultView.removeEventListener('resize', this.compareAndNotify),
                delete this._resizeObject.onload);
            },
          },
          mounted: function() {
            var t = this;
            i(),
              this.$nextTick(function() {
                (t._w = t.$el.offsetWidth), (t._h = t.$el.offsetHeight);
              });
            var n = document.createElement('object');
            (this._resizeObject = n),
              n.setAttribute('aria-hidden', 'true'),
              n.setAttribute('tabindex', -1),
              (n.onload = this.addResizeHandlers),
              (n.type = 'text/html'),
              r && this.$el.appendChild(n),
              (n.data = 'about:blank'),
              r || this.$el.appendChild(n);
          },
          beforeDestroy: function() {
            this.removeResizeHandlers();
          },
        };
        function a(t) {
          t.component('resize-observer', o), t.component('ResizeObserver', o);
        }
        var u = { version: '0.4.5', install: a },
          c = null;
        'undefined' !== typeof window ? (c = window.Vue) : 'undefined' !== typeof t && (c = t.Vue),
          c && c.use(u),
          (n['a'] = u);
      }.call(this, e('c8ba')));
    },
    '25c9': function(t, n, e) {
      var r = e('5ca1'),
        i = Math.exp;
      r(r.S, 'Math', {
        cosh: function(t) {
          return (i((t = +t)) + i(-t)) / 2;
        },
      });
    },
    '25db': function(t, n, e) {
      e('5eda')('getOwnPropertyNames', function() {
        return e('7bbc').f;
      });
    },
    2621: function(t, n) {
      n.f = Object.getOwnPropertySymbols;
    },
    '27ee': function(t, n, e) {
      var r = e('23c6'),
        i = e('2b4c')('iterator'),
        o = e('84f2');
      t.exports = e('8378').getIteratorMethod = function(t) {
        if (void 0 != t) return t[i] || t['@@iterator'] || o[r(t)];
      };
    },
    2877: function(t, n, e) {
      'use strict';
      function r(t, n, e, r, i, o, a, u) {
        var c,
          f = 'function' === typeof t ? t.options : t;
        if (
          (n && ((f.render = n), (f.staticRenderFns = e), (f._compiled = !0)),
          r && (f.functional = !0),
          o && (f._scopeId = 'data-v-' + o),
          a
            ? ((c = function(t) {
                (t =
                  t ||
                  (this.$vnode && this.$vnode.ssrContext) ||
                  (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext)),
                  t || 'undefined' === typeof __VUE_SSR_CONTEXT__ || (t = __VUE_SSR_CONTEXT__),
                  i && i.call(this, t),
                  t && t._registeredComponents && t._registeredComponents.add(a);
              }),
              (f._ssrRegister = c))
            : i &&
              (c = u
                ? function() {
                    i.call(this, this.$root.$options.shadowRoot);
                  }
                : i),
          c)
        )
          if (f.functional) {
            f._injectStyles = c;
            var s = f.render;
            f.render = function(t, n) {
              return c.call(n), s(t, n);
            };
          } else {
            var l = f.beforeCreate;
            f.beforeCreate = l ? [].concat(l, c) : [c];
          }
        return { exports: t, options: f };
      }
      e.d(n, 'a', function() {
        return r;
      });
    },
    '28a5': function(t, n, e) {
      'use strict';
      var r = e('aae3'),
        i = e('cb7c'),
        o = e('ebd6'),
        a = e('0390'),
        u = e('9def'),
        c = e('5f1b'),
        f = e('520a'),
        s = Math.min,
        l = [].push,
        h = 'split',
        d = 'length',
        p = 'lastIndex',
        v = !!(function() {
          try {
            return new RegExp('x', 'y');
          } catch (t) {}
        })();
      e('214f')('split', 2, function(t, n, e, y) {
        var g;
        return (
          (g =
            'c' == 'abbc'[h](/(b)*/)[1] ||
            4 != 'test'[h](/(?:)/, -1)[d] ||
            2 != 'ab'[h](/(?:ab)*/)[d] ||
            4 != '.'[h](/(.?)(.?)/)[d] ||
            '.'[h](/()()/)[d] > 1 ||
            ''[h](/.?/)[d]
              ? function(t, n) {
                  var i = String(this);
                  if (void 0 === t && 0 === n) return [];
                  if (!r(t)) return e.call(i, t, n);
                  var o,
                    a,
                    u,
                    c = [],
                    s =
                      (t.ignoreCase ? 'i' : '') +
                      (t.multiline ? 'm' : '') +
                      (t.unicode ? 'u' : '') +
                      (t.sticky ? 'y' : ''),
                    h = 0,
                    v = void 0 === n ? 4294967295 : n >>> 0,
                    y = new RegExp(t.source, s + 'g');
                  while ((o = f.call(y, i))) {
                    if (
                      ((a = y[p]),
                      a > h &&
                        (c.push(i.slice(h, o.index)),
                        o[d] > 1 && o.index < i[d] && l.apply(c, o.slice(1)),
                        (u = o[0][d]),
                        (h = a),
                        c[d] >= v))
                    )
                      break;
                    y[p] === o.index && y[p]++;
                  }
                  return (
                    h === i[d] ? (!u && y.test('')) || c.push('') : c.push(i.slice(h)), c[d] > v ? c.slice(0, v) : c
                  );
                }
              : '0'[h](void 0, 0)[d]
                ? function(t, n) {
                    return void 0 === t && 0 === n ? [] : e.call(this, t, n);
                  }
                : e),
          [
            function(e, r) {
              var i = t(this),
                o = void 0 == e ? void 0 : e[n];
              return void 0 !== o ? o.call(e, i, r) : g.call(String(i), e, r);
            },
            function(t, n) {
              var r = y(g, t, this, n, g !== e);
              if (r.done) return r.value;
              var f = i(t),
                l = String(this),
                h = o(f, RegExp),
                d = f.unicode,
                p = (f.ignoreCase ? 'i' : '') + (f.multiline ? 'm' : '') + (f.unicode ? 'u' : '') + (v ? 'y' : 'g'),
                b = new h(v ? f : '^(?:' + f.source + ')', p),
                m = void 0 === n ? 4294967295 : n >>> 0;
              if (0 === m) return [];
              if (0 === l.length) return null === c(b, l) ? [l] : [];
              var _ = 0,
                w = 0,
                x = [];
              while (w < l.length) {
                b.lastIndex = v ? w : 0;
                var M,
                  S = c(b, v ? l : l.slice(w));
                if (null === S || (M = s(u(b.lastIndex + (v ? 0 : w)), l.length)) === _) w = a(l, w, d);
                else {
                  if ((x.push(l.slice(_, w)), x.length === m)) return x;
                  for (var A = 1; A <= S.length - 1; A++) if ((x.push(S[A]), x.length === m)) return x;
                  w = _ = M;
                }
              }
              return x.push(l.slice(_)), x;
            },
          ]
        );
      });
    },
    '2aba': function(t, n, e) {
      var r = e('7726'),
        i = e('32e9'),
        o = e('69a8'),
        a = e('ca5a')('src'),
        u = 'toString',
        c = Function[u],
        f = ('' + c).split(u);
      (e('8378').inspectSource = function(t) {
        return c.call(t);
      }),
        (t.exports = function(t, n, e, u) {
          var c = 'function' == typeof e;
          c && (o(e, 'name') || i(e, 'name', n)),
            t[n] !== e &&
              (c && (o(e, a) || i(e, a, t[n] ? '' + t[n] : f.join(String(n)))),
              t === r ? (t[n] = e) : u ? (t[n] ? (t[n] = e) : i(t, n, e)) : (delete t[n], i(t, n, e)));
        })(Function.prototype, u, function() {
          return ('function' == typeof this && this[a]) || c.call(this);
        });
    },
    '2aeb': function(t, n, e) {
      var r = e('cb7c'),
        i = e('1495'),
        o = e('e11e'),
        a = e('613b')('IE_PROTO'),
        u = function() {},
        c = 'prototype',
        f = function() {
          var t,
            n = e('230e')('iframe'),
            r = o.length,
            i = '<',
            a = '>';
          (n.style.display = 'none'),
            e('fab2').appendChild(n),
            (n.src = 'javascript:'),
            (t = n.contentWindow.document),
            t.open(),
            t.write(i + 'script' + a + 'document.F=Object' + i + '/script' + a),
            t.close(),
            (f = t.F);
          while (r--) delete f[c][o[r]];
          return f();
        };
      t.exports =
        Object.create ||
        function(t, n) {
          var e;
          return (
            null !== t ? ((u[c] = r(t)), (e = new u()), (u[c] = null), (e[a] = t)) : (e = f()),
            void 0 === n ? e : i(e, n)
          );
        };
    },
    '2b0e': function(t, n, e) {
      'use strict';
      (function(t) {
        /*!
 * Vue.js v2.5.21
 * (c) 2014-2018 Evan You
 * Released under the MIT License.
 */
        var e = Object.freeze({});
        function r(t) {
          return void 0 === t || null === t;
        }
        function i(t) {
          return void 0 !== t && null !== t;
        }
        function o(t) {
          return !0 === t;
        }
        function a(t) {
          return !1 === t;
        }
        function u(t) {
          return 'string' === typeof t || 'number' === typeof t || 'symbol' === typeof t || 'boolean' === typeof t;
        }
        function c(t) {
          return null !== t && 'object' === typeof t;
        }
        var f = Object.prototype.toString;
        function s(t) {
          return '[object Object]' === f.call(t);
        }
        function l(t) {
          return '[object RegExp]' === f.call(t);
        }
        function h(t) {
          var n = parseFloat(String(t));
          return n >= 0 && Math.floor(n) === n && isFinite(t);
        }
        function d(t) {
          return null == t ? '' : 'object' === typeof t ? JSON.stringify(t, null, 2) : String(t);
        }
        function p(t) {
          var n = parseFloat(t);
          return isNaN(n) ? t : n;
        }
        function v(t, n) {
          for (var e = Object.create(null), r = t.split(','), i = 0; i < r.length; i++) e[r[i]] = !0;
          return n
            ? function(t) {
                return e[t.toLowerCase()];
              }
            : function(t) {
                return e[t];
              };
        }
        v('slot,component', !0);
        var y = v('key,ref,slot,slot-scope,is');
        function g(t, n) {
          if (t.length) {
            var e = t.indexOf(n);
            if (e > -1) return t.splice(e, 1);
          }
        }
        var b = Object.prototype.hasOwnProperty;
        function m(t, n) {
          return b.call(t, n);
        }
        function _(t) {
          var n = Object.create(null);
          return function(e) {
            var r = n[e];
            return r || (n[e] = t(e));
          };
        }
        var w = /-(\w)/g,
          x = _(function(t) {
            return t.replace(w, function(t, n) {
              return n ? n.toUpperCase() : '';
            });
          }),
          M = _(function(t) {
            return t.charAt(0).toUpperCase() + t.slice(1);
          }),
          S = /\B([A-Z])/g,
          A = _(function(t) {
            return t.replace(S, '-$1').toLowerCase();
          });
        function E(t, n) {
          function e(e) {
            var r = arguments.length;
            return r ? (r > 1 ? t.apply(n, arguments) : t.call(n, e)) : t.call(n);
          }
          return (e._length = t.length), e;
        }
        function k(t, n) {
          return t.bind(n);
        }
        var C = Function.prototype.bind ? k : E;
        function T(t, n) {
          n = n || 0;
          var e = t.length - n,
            r = new Array(e);
          while (e--) r[e] = t[e + n];
          return r;
        }
        function O(t, n) {
          for (var e in n) t[e] = n[e];
          return t;
        }
        function N(t) {
          for (var n = {}, e = 0; e < t.length; e++) t[e] && O(n, t[e]);
          return n;
        }
        function P(t, n, e) {}
        var R = function(t, n, e) {
            return !1;
          },
          j = function(t) {
            return t;
          };
        function L(t, n) {
          if (t === n) return !0;
          var e = c(t),
            r = c(n);
          if (!e || !r) return !e && !r && String(t) === String(n);
          try {
            var i = Array.isArray(t),
              o = Array.isArray(n);
            if (i && o)
              return (
                t.length === n.length &&
                t.every(function(t, e) {
                  return L(t, n[e]);
                })
              );
            if (t instanceof Date && n instanceof Date) return t.getTime() === n.getTime();
            if (i || o) return !1;
            var a = Object.keys(t),
              u = Object.keys(n);
            return (
              a.length === u.length &&
              a.every(function(e) {
                return L(t[e], n[e]);
              })
            );
          } catch (f) {
            return !1;
          }
        }
        function I(t, n) {
          for (var e = 0; e < t.length; e++) if (L(t[e], n)) return e;
          return -1;
        }
        function $(t) {
          var n = !1;
          return function() {
            n || ((n = !0), t.apply(this, arguments));
          };
        }
        var F = 'data-server-rendered',
          D = ['component', 'directive', 'filter'],
          z = [
            'beforeCreate',
            'created',
            'beforeMount',
            'mounted',
            'beforeUpdate',
            'updated',
            'beforeDestroy',
            'destroyed',
            'activated',
            'deactivated',
            'errorCaptured',
          ],
          U = {
            optionMergeStrategies: Object.create(null),
            silent: !1,
            productionTip: !1,
            devtools: !1,
            performance: !1,
            errorHandler: null,
            warnHandler: null,
            ignoredElements: [],
            keyCodes: Object.create(null),
            isReservedTag: R,
            isReservedAttr: R,
            isUnknownElement: R,
            getTagNamespace: P,
            parsePlatformTagName: j,
            mustUseProp: R,
            async: !0,
            _lifecycleHooks: z,
          };
        function B(t) {
          var n = (t + '').charCodeAt(0);
          return 36 === n || 95 === n;
        }
        function q(t, n, e, r) {
          Object.defineProperty(t, n, { value: e, enumerable: !!r, writable: !0, configurable: !0 });
        }
        var V = /[^\w.$]/;
        function H(t) {
          if (!V.test(t)) {
            var n = t.split('.');
            return function(t) {
              for (var e = 0; e < n.length; e++) {
                if (!t) return;
                t = t[n[e]];
              }
              return t;
            };
          }
        }
        var Y,
          G = '__proto__' in {},
          W = 'undefined' !== typeof window,
          X = 'undefined' !== typeof WXEnvironment && !!WXEnvironment.platform,
          K = X && WXEnvironment.platform.toLowerCase(),
          Q = W && window.navigator.userAgent.toLowerCase(),
          Z = Q && /msie|trident/.test(Q),
          J = Q && Q.indexOf('msie 9.0') > 0,
          tt = Q && Q.indexOf('edge/') > 0,
          nt = (Q && Q.indexOf('android'), (Q && /iphone|ipad|ipod|ios/.test(Q)) || 'ios' === K),
          et = (Q && /chrome\/\d+/.test(Q), {}.watch),
          rt = !1;
        if (W)
          try {
            var it = {};
            Object.defineProperty(it, 'passive', {
              get: function() {
                rt = !0;
              },
            }),
              window.addEventListener('test-passive', null, it);
          } catch (ua) {}
        var ot = function() {
            return (
              void 0 === Y &&
                (Y = !W && !X && 'undefined' !== typeof t && (t['process'] && 'server' === t['process'].env.VUE_ENV)),
              Y
            );
          },
          at = W && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;
        function ut(t) {
          return 'function' === typeof t && /native code/.test(t.toString());
        }
        var ct,
          ft = 'undefined' !== typeof Symbol && ut(Symbol) && 'undefined' !== typeof Reflect && ut(Reflect.ownKeys);
        ct =
          'undefined' !== typeof Set && ut(Set)
            ? Set
            : (function() {
                function t() {
                  this.set = Object.create(null);
                }
                return (
                  (t.prototype.has = function(t) {
                    return !0 === this.set[t];
                  }),
                  (t.prototype.add = function(t) {
                    this.set[t] = !0;
                  }),
                  (t.prototype.clear = function() {
                    this.set = Object.create(null);
                  }),
                  t
                );
              })();
        var st = P,
          lt = 0,
          ht = function() {
            (this.id = lt++), (this.subs = []);
          };
        (ht.prototype.addSub = function(t) {
          this.subs.push(t);
        }),
          (ht.prototype.removeSub = function(t) {
            g(this.subs, t);
          }),
          (ht.prototype.depend = function() {
            ht.target && ht.target.addDep(this);
          }),
          (ht.prototype.notify = function() {
            var t = this.subs.slice();
            for (var n = 0, e = t.length; n < e; n++) t[n].update();
          }),
          (ht.target = null);
        var dt = [];
        function pt(t) {
          dt.push(t), (ht.target = t);
        }
        function vt() {
          dt.pop(), (ht.target = dt[dt.length - 1]);
        }
        var yt = function(t, n, e, r, i, o, a, u) {
            (this.tag = t),
              (this.data = n),
              (this.children = e),
              (this.text = r),
              (this.elm = i),
              (this.ns = void 0),
              (this.context = o),
              (this.fnContext = void 0),
              (this.fnOptions = void 0),
              (this.fnScopeId = void 0),
              (this.key = n && n.key),
              (this.componentOptions = a),
              (this.componentInstance = void 0),
              (this.parent = void 0),
              (this.raw = !1),
              (this.isStatic = !1),
              (this.isRootInsert = !0),
              (this.isComment = !1),
              (this.isCloned = !1),
              (this.isOnce = !1),
              (this.asyncFactory = u),
              (this.asyncMeta = void 0),
              (this.isAsyncPlaceholder = !1);
          },
          gt = { child: { configurable: !0 } };
        (gt.child.get = function() {
          return this.componentInstance;
        }),
          Object.defineProperties(yt.prototype, gt);
        var bt = function(t) {
          void 0 === t && (t = '');
          var n = new yt();
          return (n.text = t), (n.isComment = !0), n;
        };
        function mt(t) {
          return new yt(void 0, void 0, void 0, String(t));
        }
        function _t(t) {
          var n = new yt(
            t.tag,
            t.data,
            t.children && t.children.slice(),
            t.text,
            t.elm,
            t.context,
            t.componentOptions,
            t.asyncFactory
          );
          return (
            (n.ns = t.ns),
            (n.isStatic = t.isStatic),
            (n.key = t.key),
            (n.isComment = t.isComment),
            (n.fnContext = t.fnContext),
            (n.fnOptions = t.fnOptions),
            (n.fnScopeId = t.fnScopeId),
            (n.asyncMeta = t.asyncMeta),
            (n.isCloned = !0),
            n
          );
        }
        var wt = Array.prototype,
          xt = Object.create(wt),
          Mt = ['push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse'];
        Mt.forEach(function(t) {
          var n = wt[t];
          q(xt, t, function() {
            var e = [],
              r = arguments.length;
            while (r--) e[r] = arguments[r];
            var i,
              o = n.apply(this, e),
              a = this.__ob__;
            switch (t) {
              case 'push':
              case 'unshift':
                i = e;
                break;
              case 'splice':
                i = e.slice(2);
                break;
            }
            return i && a.observeArray(i), a.dep.notify(), o;
          });
        });
        var St = Object.getOwnPropertyNames(xt),
          At = !0;
        function Et(t) {
          At = t;
        }
        var kt = function(t) {
          (this.value = t),
            (this.dep = new ht()),
            (this.vmCount = 0),
            q(t, '__ob__', this),
            Array.isArray(t) ? (G ? Ct(t, xt) : Tt(t, xt, St), this.observeArray(t)) : this.walk(t);
        };
        function Ct(t, n) {
          t.__proto__ = n;
        }
        function Tt(t, n, e) {
          for (var r = 0, i = e.length; r < i; r++) {
            var o = e[r];
            q(t, o, n[o]);
          }
        }
        function Ot(t, n) {
          var e;
          if (c(t) && !(t instanceof yt))
            return (
              m(t, '__ob__') && t.__ob__ instanceof kt
                ? (e = t.__ob__)
                : At && !ot() && (Array.isArray(t) || s(t)) && Object.isExtensible(t) && !t._isVue && (e = new kt(t)),
              n && e && e.vmCount++,
              e
            );
        }
        function Nt(t, n, e, r, i) {
          var o = new ht(),
            a = Object.getOwnPropertyDescriptor(t, n);
          if (!a || !1 !== a.configurable) {
            var u = a && a.get,
              c = a && a.set;
            (u && !c) || 2 !== arguments.length || (e = t[n]);
            var f = !i && Ot(e);
            Object.defineProperty(t, n, {
              enumerable: !0,
              configurable: !0,
              get: function() {
                var n = u ? u.call(t) : e;
                return ht.target && (o.depend(), f && (f.dep.depend(), Array.isArray(n) && jt(n))), n;
              },
              set: function(n) {
                var r = u ? u.call(t) : e;
                n === r ||
                  (n !== n && r !== r) ||
                  (u && !c) ||
                  (c ? c.call(t, n) : (e = n), (f = !i && Ot(n)), o.notify());
              },
            });
          }
        }
        function Pt(t, n, e) {
          if (Array.isArray(t) && h(n)) return (t.length = Math.max(t.length, n)), t.splice(n, 1, e), e;
          if (n in t && !(n in Object.prototype)) return (t[n] = e), e;
          var r = t.__ob__;
          return t._isVue || (r && r.vmCount) ? e : r ? (Nt(r.value, n, e), r.dep.notify(), e) : ((t[n] = e), e);
        }
        function Rt(t, n) {
          if (Array.isArray(t) && h(n)) t.splice(n, 1);
          else {
            var e = t.__ob__;
            t._isVue || (e && e.vmCount) || (m(t, n) && (delete t[n], e && e.dep.notify()));
          }
        }
        function jt(t) {
          for (var n = void 0, e = 0, r = t.length; e < r; e++)
            (n = t[e]), n && n.__ob__ && n.__ob__.dep.depend(), Array.isArray(n) && jt(n);
        }
        (kt.prototype.walk = function(t) {
          for (var n = Object.keys(t), e = 0; e < n.length; e++) Nt(t, n[e]);
        }),
          (kt.prototype.observeArray = function(t) {
            for (var n = 0, e = t.length; n < e; n++) Ot(t[n]);
          });
        var Lt = U.optionMergeStrategies;
        function It(t, n) {
          if (!n) return t;
          for (var e, r, i, o = Object.keys(n), a = 0; a < o.length; a++)
            (e = o[a]), (r = t[e]), (i = n[e]), m(t, e) ? r !== i && s(r) && s(i) && It(r, i) : Pt(t, e, i);
          return t;
        }
        function $t(t, n, e) {
          return e
            ? function() {
                var r = 'function' === typeof n ? n.call(e, e) : n,
                  i = 'function' === typeof t ? t.call(e, e) : t;
                return r ? It(r, i) : i;
              }
            : n
              ? t
                ? function() {
                    return It(
                      'function' === typeof n ? n.call(this, this) : n,
                      'function' === typeof t ? t.call(this, this) : t
                    );
                  }
                : n
              : t;
        }
        function Ft(t, n) {
          return n ? (t ? t.concat(n) : Array.isArray(n) ? n : [n]) : t;
        }
        function Dt(t, n, e, r) {
          var i = Object.create(t || null);
          return n ? O(i, n) : i;
        }
        (Lt.data = function(t, n, e) {
          return e ? $t(t, n, e) : n && 'function' !== typeof n ? t : $t(t, n);
        }),
          z.forEach(function(t) {
            Lt[t] = Ft;
          }),
          D.forEach(function(t) {
            Lt[t + 's'] = Dt;
          }),
          (Lt.watch = function(t, n, e, r) {
            if ((t === et && (t = void 0), n === et && (n = void 0), !n)) return Object.create(t || null);
            if (!t) return n;
            var i = {};
            for (var o in (O(i, t), n)) {
              var a = i[o],
                u = n[o];
              a && !Array.isArray(a) && (a = [a]), (i[o] = a ? a.concat(u) : Array.isArray(u) ? u : [u]);
            }
            return i;
          }),
          (Lt.props = Lt.methods = Lt.inject = Lt.computed = function(t, n, e, r) {
            if (!t) return n;
            var i = Object.create(null);
            return O(i, t), n && O(i, n), i;
          }),
          (Lt.provide = $t);
        var zt = function(t, n) {
          return void 0 === n ? t : n;
        };
        function Ut(t, n) {
          var e = t.props;
          if (e) {
            var r,
              i,
              o,
              a = {};
            if (Array.isArray(e)) {
              r = e.length;
              while (r--) (i = e[r]), 'string' === typeof i && ((o = x(i)), (a[o] = { type: null }));
            } else if (s(e)) for (var u in e) (i = e[u]), (o = x(u)), (a[o] = s(i) ? i : { type: i });
            else 0;
            t.props = a;
          }
        }
        function Bt(t, n) {
          var e = t.inject;
          if (e) {
            var r = (t.inject = {});
            if (Array.isArray(e)) for (var i = 0; i < e.length; i++) r[e[i]] = { from: e[i] };
            else if (s(e))
              for (var o in e) {
                var a = e[o];
                r[o] = s(a) ? O({ from: o }, a) : { from: a };
              }
            else 0;
          }
        }
        function qt(t) {
          var n = t.directives;
          if (n)
            for (var e in n) {
              var r = n[e];
              'function' === typeof r && (n[e] = { bind: r, update: r });
            }
        }
        function Vt(t, n, e) {
          if (
            ('function' === typeof n && (n = n.options),
            Ut(n, e),
            Bt(n, e),
            qt(n),
            !n._base && (n.extends && (t = Vt(t, n.extends, e)), n.mixins))
          )
            for (var r = 0, i = n.mixins.length; r < i; r++) t = Vt(t, n.mixins[r], e);
          var o,
            a = {};
          for (o in t) u(o);
          for (o in n) m(t, o) || u(o);
          function u(r) {
            var i = Lt[r] || zt;
            a[r] = i(t[r], n[r], e, r);
          }
          return a;
        }
        function Ht(t, n, e, r) {
          if ('string' === typeof e) {
            var i = t[n];
            if (m(i, e)) return i[e];
            var o = x(e);
            if (m(i, o)) return i[o];
            var a = M(o);
            if (m(i, a)) return i[a];
            var u = i[e] || i[o] || i[a];
            return u;
          }
        }
        function Yt(t, n, e, r) {
          var i = n[t],
            o = !m(e, t),
            a = e[t],
            u = Kt(Boolean, i.type);
          if (u > -1)
            if (o && !m(i, 'default')) a = !1;
            else if ('' === a || a === A(t)) {
              var c = Kt(String, i.type);
              (c < 0 || u < c) && (a = !0);
            }
          if (void 0 === a) {
            a = Gt(r, i, t);
            var f = At;
            Et(!0), Ot(a), Et(f);
          }
          return a;
        }
        function Gt(t, n, e) {
          if (m(n, 'default')) {
            var r = n.default;
            return t && t.$options.propsData && void 0 === t.$options.propsData[e] && void 0 !== t._props[e]
              ? t._props[e]
              : 'function' === typeof r && 'Function' !== Wt(n.type)
                ? r.call(t)
                : r;
          }
        }
        function Wt(t) {
          var n = t && t.toString().match(/^\s*function (\w+)/);
          return n ? n[1] : '';
        }
        function Xt(t, n) {
          return Wt(t) === Wt(n);
        }
        function Kt(t, n) {
          if (!Array.isArray(n)) return Xt(n, t) ? 0 : -1;
          for (var e = 0, r = n.length; e < r; e++) if (Xt(n[e], t)) return e;
          return -1;
        }
        function Qt(t, n, e) {
          if (n) {
            var r = n;
            while ((r = r.$parent)) {
              var i = r.$options.errorCaptured;
              if (i)
                for (var o = 0; o < i.length; o++)
                  try {
                    var a = !1 === i[o].call(r, t, n, e);
                    if (a) return;
                  } catch (ua) {
                    Zt(ua, r, 'errorCaptured hook');
                  }
            }
          }
          Zt(t, n, e);
        }
        function Zt(t, n, e) {
          if (U.errorHandler)
            try {
              return U.errorHandler.call(null, t, n, e);
            } catch (ua) {
              Jt(ua, null, 'config.errorHandler');
            }
          Jt(t, n, e);
        }
        function Jt(t, n, e) {
          if ((!W && !X) || 'undefined' === typeof console) throw t;
          console.error(t);
        }
        var tn,
          nn,
          en = [],
          rn = !1;
        function on() {
          rn = !1;
          var t = en.slice(0);
          en.length = 0;
          for (var n = 0; n < t.length; n++) t[n]();
        }
        var an = !1;
        if ('undefined' !== typeof setImmediate && ut(setImmediate))
          nn = function() {
            setImmediate(on);
          };
        else if (
          'undefined' === typeof MessageChannel ||
          (!ut(MessageChannel) && '[object MessageChannelConstructor]' !== MessageChannel.toString())
        )
          nn = function() {
            setTimeout(on, 0);
          };
        else {
          var un = new MessageChannel(),
            cn = un.port2;
          (un.port1.onmessage = on),
            (nn = function() {
              cn.postMessage(1);
            });
        }
        if ('undefined' !== typeof Promise && ut(Promise)) {
          var fn = Promise.resolve();
          tn = function() {
            fn.then(on), nt && setTimeout(P);
          };
        } else tn = nn;
        function sn(t) {
          return (
            t._withTask ||
            (t._withTask = function() {
              an = !0;
              try {
                return t.apply(null, arguments);
              } finally {
                an = !1;
              }
            })
          );
        }
        function ln(t, n) {
          var e;
          if (
            (en.push(function() {
              if (t)
                try {
                  t.call(n);
                } catch (ua) {
                  Qt(ua, n, 'nextTick');
                }
              else e && e(n);
            }),
            rn || ((rn = !0), an ? nn() : tn()),
            !t && 'undefined' !== typeof Promise)
          )
            return new Promise(function(t) {
              e = t;
            });
        }
        var hn = new ct();
        function dn(t) {
          pn(t, hn), hn.clear();
        }
        function pn(t, n) {
          var e,
            r,
            i = Array.isArray(t);
          if (!((!i && !c(t)) || Object.isFrozen(t) || t instanceof yt)) {
            if (t.__ob__) {
              var o = t.__ob__.dep.id;
              if (n.has(o)) return;
              n.add(o);
            }
            if (i) {
              e = t.length;
              while (e--) pn(t[e], n);
            } else {
              (r = Object.keys(t)), (e = r.length);
              while (e--) pn(t[r[e]], n);
            }
          }
        }
        var vn,
          yn = _(function(t) {
            var n = '&' === t.charAt(0);
            t = n ? t.slice(1) : t;
            var e = '~' === t.charAt(0);
            t = e ? t.slice(1) : t;
            var r = '!' === t.charAt(0);
            return (t = r ? t.slice(1) : t), { name: t, once: e, capture: r, passive: n };
          });
        function gn(t) {
          function n() {
            var t = arguments,
              e = n.fns;
            if (!Array.isArray(e)) return e.apply(null, arguments);
            for (var r = e.slice(), i = 0; i < r.length; i++) r[i].apply(null, t);
          }
          return (n.fns = t), n;
        }
        function bn(t, n, e, i, a, u) {
          var c, f, s, l;
          for (c in t)
            (f = t[c]),
              (s = n[c]),
              (l = yn(c)),
              r(f) ||
                (r(s)
                  ? (r(f.fns) && (f = t[c] = gn(f)),
                    o(l.once) && (f = t[c] = a(l.name, f, l.capture)),
                    e(l.name, f, l.capture, l.passive, l.params))
                  : f !== s && ((s.fns = f), (t[c] = s)));
          for (c in n) r(t[c]) && ((l = yn(c)), i(l.name, n[c], l.capture));
        }
        function mn(t, n, e) {
          var a;
          t instanceof yt && (t = t.data.hook || (t.data.hook = {}));
          var u = t[n];
          function c() {
            e.apply(this, arguments), g(a.fns, c);
          }
          r(u) ? (a = gn([c])) : i(u.fns) && o(u.merged) ? ((a = u), a.fns.push(c)) : (a = gn([u, c])),
            (a.merged = !0),
            (t[n] = a);
        }
        function _n(t, n, e) {
          var o = n.options.props;
          if (!r(o)) {
            var a = {},
              u = t.attrs,
              c = t.props;
            if (i(u) || i(c))
              for (var f in o) {
                var s = A(f);
                wn(a, c, f, s, !0) || wn(a, u, f, s, !1);
              }
            return a;
          }
        }
        function wn(t, n, e, r, o) {
          if (i(n)) {
            if (m(n, e)) return (t[e] = n[e]), o || delete n[e], !0;
            if (m(n, r)) return (t[e] = n[r]), o || delete n[r], !0;
          }
          return !1;
        }
        function xn(t) {
          for (var n = 0; n < t.length; n++) if (Array.isArray(t[n])) return Array.prototype.concat.apply([], t);
          return t;
        }
        function Mn(t) {
          return u(t) ? [mt(t)] : Array.isArray(t) ? An(t) : void 0;
        }
        function Sn(t) {
          return i(t) && i(t.text) && a(t.isComment);
        }
        function An(t, n) {
          var e,
            a,
            c,
            f,
            s = [];
          for (e = 0; e < t.length; e++)
            (a = t[e]),
              r(a) ||
                'boolean' === typeof a ||
                ((c = s.length - 1),
                (f = s[c]),
                Array.isArray(a)
                  ? a.length > 0 &&
                    ((a = An(a, (n || '') + '_' + e)),
                    Sn(a[0]) && Sn(f) && ((s[c] = mt(f.text + a[0].text)), a.shift()),
                    s.push.apply(s, a))
                  : u(a)
                    ? Sn(f)
                      ? (s[c] = mt(f.text + a))
                      : '' !== a && s.push(mt(a))
                    : Sn(a) && Sn(f)
                      ? (s[c] = mt(f.text + a.text))
                      : (o(t._isVList) && i(a.tag) && r(a.key) && i(n) && (a.key = '__vlist' + n + '_' + e + '__'),
                        s.push(a)));
          return s;
        }
        function En(t, n) {
          return (
            (t.__esModule || (ft && 'Module' === t[Symbol.toStringTag])) && (t = t.default), c(t) ? n.extend(t) : t
          );
        }
        function kn(t, n, e, r, i) {
          var o = bt();
          return (o.asyncFactory = t), (o.asyncMeta = { data: n, context: e, children: r, tag: i }), o;
        }
        function Cn(t, n, e) {
          if (o(t.error) && i(t.errorComp)) return t.errorComp;
          if (i(t.resolved)) return t.resolved;
          if (o(t.loading) && i(t.loadingComp)) return t.loadingComp;
          if (!i(t.contexts)) {
            var a = (t.contexts = [e]),
              u = !0,
              f = function(t) {
                for (var n = 0, e = a.length; n < e; n++) a[n].$forceUpdate();
                t && (a.length = 0);
              },
              s = $(function(e) {
                (t.resolved = En(e, n)), u || f(!0);
              }),
              l = $(function(n) {
                i(t.errorComp) && ((t.error = !0), f(!0));
              }),
              h = t(s, l);
            return (
              c(h) &&
                ('function' === typeof h.then
                  ? r(t.resolved) && h.then(s, l)
                  : i(h.component) &&
                    'function' === typeof h.component.then &&
                    (h.component.then(s, l),
                    i(h.error) && (t.errorComp = En(h.error, n)),
                    i(h.loading) &&
                      ((t.loadingComp = En(h.loading, n)),
                      0 === h.delay
                        ? (t.loading = !0)
                        : setTimeout(function() {
                            r(t.resolved) && r(t.error) && ((t.loading = !0), f(!1));
                          }, h.delay || 200)),
                    i(h.timeout) &&
                      setTimeout(function() {
                        r(t.resolved) && l(null);
                      }, h.timeout))),
              (u = !1),
              t.loading ? t.loadingComp : t.resolved
            );
          }
          t.contexts.push(e);
        }
        function Tn(t) {
          return t.isComment && t.asyncFactory;
        }
        function On(t) {
          if (Array.isArray(t))
            for (var n = 0; n < t.length; n++) {
              var e = t[n];
              if (i(e) && (i(e.componentOptions) || Tn(e))) return e;
            }
        }
        function Nn(t) {
          (t._events = Object.create(null)), (t._hasHookEvent = !1);
          var n = t.$options._parentListeners;
          n && Ln(t, n);
        }
        function Pn(t, n) {
          vn.$on(t, n);
        }
        function Rn(t, n) {
          vn.$off(t, n);
        }
        function jn(t, n) {
          var e = vn;
          return function r() {
            var i = n.apply(null, arguments);
            null !== i && e.$off(t, r);
          };
        }
        function Ln(t, n, e) {
          (vn = t), bn(n, e || {}, Pn, Rn, jn, t), (vn = void 0);
        }
        function In(t) {
          var n = /^hook:/;
          (t.prototype.$on = function(t, e) {
            var r = this;
            if (Array.isArray(t)) for (var i = 0, o = t.length; i < o; i++) r.$on(t[i], e);
            else (r._events[t] || (r._events[t] = [])).push(e), n.test(t) && (r._hasHookEvent = !0);
            return r;
          }),
            (t.prototype.$once = function(t, n) {
              var e = this;
              function r() {
                e.$off(t, r), n.apply(e, arguments);
              }
              return (r.fn = n), e.$on(t, r), e;
            }),
            (t.prototype.$off = function(t, n) {
              var e = this;
              if (!arguments.length) return (e._events = Object.create(null)), e;
              if (Array.isArray(t)) {
                for (var r = 0, i = t.length; r < i; r++) e.$off(t[r], n);
                return e;
              }
              var o = e._events[t];
              if (!o) return e;
              if (!n) return (e._events[t] = null), e;
              if (n) {
                var a,
                  u = o.length;
                while (u--)
                  if (((a = o[u]), a === n || a.fn === n)) {
                    o.splice(u, 1);
                    break;
                  }
              }
              return e;
            }),
            (t.prototype.$emit = function(t) {
              var n = this,
                e = n._events[t];
              if (e) {
                e = e.length > 1 ? T(e) : e;
                for (var r = T(arguments, 1), i = 0, o = e.length; i < o; i++)
                  try {
                    e[i].apply(n, r);
                  } catch (ua) {
                    Qt(ua, n, 'event handler for "' + t + '"');
                  }
              }
              return n;
            });
        }
        function $n(t, n) {
          var e = {};
          if (!t) return e;
          for (var r = 0, i = t.length; r < i; r++) {
            var o = t[r],
              a = o.data;
            if (
              (a && a.attrs && a.attrs.slot && delete a.attrs.slot,
              (o.context !== n && o.fnContext !== n) || !a || null == a.slot)
            )
              (e.default || (e.default = [])).push(o);
            else {
              var u = a.slot,
                c = e[u] || (e[u] = []);
              'template' === o.tag ? c.push.apply(c, o.children || []) : c.push(o);
            }
          }
          for (var f in e) e[f].every(Fn) && delete e[f];
          return e;
        }
        function Fn(t) {
          return (t.isComment && !t.asyncFactory) || ' ' === t.text;
        }
        function Dn(t, n) {
          n = n || {};
          for (var e = 0; e < t.length; e++) Array.isArray(t[e]) ? Dn(t[e], n) : (n[t[e].key] = t[e].fn);
          return n;
        }
        var zn = null;
        function Un(t) {
          var n = zn;
          return (
            (zn = t),
            function() {
              zn = n;
            }
          );
        }
        function Bn(t) {
          var n = t.$options,
            e = n.parent;
          if (e && !n.abstract) {
            while (e.$options.abstract && e.$parent) e = e.$parent;
            e.$children.push(t);
          }
          (t.$parent = e),
            (t.$root = e ? e.$root : t),
            (t.$children = []),
            (t.$refs = {}),
            (t._watcher = null),
            (t._inactive = null),
            (t._directInactive = !1),
            (t._isMounted = !1),
            (t._isDestroyed = !1),
            (t._isBeingDestroyed = !1);
        }
        function qn(t) {
          (t.prototype._update = function(t, n) {
            var e = this,
              r = e.$el,
              i = e._vnode,
              o = Un(e);
            (e._vnode = t),
              (e.$el = i ? e.__patch__(i, t) : e.__patch__(e.$el, t, n, !1)),
              o(),
              r && (r.__vue__ = null),
              e.$el && (e.$el.__vue__ = e),
              e.$vnode && e.$parent && e.$vnode === e.$parent._vnode && (e.$parent.$el = e.$el);
          }),
            (t.prototype.$forceUpdate = function() {
              var t = this;
              t._watcher && t._watcher.update();
            }),
            (t.prototype.$destroy = function() {
              var t = this;
              if (!t._isBeingDestroyed) {
                Xn(t, 'beforeDestroy'), (t._isBeingDestroyed = !0);
                var n = t.$parent;
                !n || n._isBeingDestroyed || t.$options.abstract || g(n.$children, t),
                  t._watcher && t._watcher.teardown();
                var e = t._watchers.length;
                while (e--) t._watchers[e].teardown();
                t._data.__ob__ && t._data.__ob__.vmCount--,
                  (t._isDestroyed = !0),
                  t.__patch__(t._vnode, null),
                  Xn(t, 'destroyed'),
                  t.$off(),
                  t.$el && (t.$el.__vue__ = null),
                  t.$vnode && (t.$vnode.parent = null);
              }
            });
        }
        function Vn(t, n, e) {
          var r;
          return (
            (t.$el = n),
            t.$options.render || (t.$options.render = bt),
            Xn(t, 'beforeMount'),
            (r = function() {
              t._update(t._render(), e);
            }),
            new fe(
              t,
              r,
              P,
              {
                before: function() {
                  t._isMounted && !t._isDestroyed && Xn(t, 'beforeUpdate');
                },
              },
              !0
            ),
            (e = !1),
            null == t.$vnode && ((t._isMounted = !0), Xn(t, 'mounted')),
            t
          );
        }
        function Hn(t, n, r, i, o) {
          var a = !!(o || t.$options._renderChildren || i.data.scopedSlots || t.$scopedSlots !== e);
          if (
            ((t.$options._parentVnode = i),
            (t.$vnode = i),
            t._vnode && (t._vnode.parent = i),
            (t.$options._renderChildren = o),
            (t.$attrs = i.data.attrs || e),
            (t.$listeners = r || e),
            n && t.$options.props)
          ) {
            Et(!1);
            for (var u = t._props, c = t.$options._propKeys || [], f = 0; f < c.length; f++) {
              var s = c[f],
                l = t.$options.props;
              u[s] = Yt(s, l, n, t);
            }
            Et(!0), (t.$options.propsData = n);
          }
          r = r || e;
          var h = t.$options._parentListeners;
          (t.$options._parentListeners = r), Ln(t, r, h), a && ((t.$slots = $n(o, i.context)), t.$forceUpdate());
        }
        function Yn(t) {
          while (t && (t = t.$parent)) if (t._inactive) return !0;
          return !1;
        }
        function Gn(t, n) {
          if (n) {
            if (((t._directInactive = !1), Yn(t))) return;
          } else if (t._directInactive) return;
          if (t._inactive || null === t._inactive) {
            t._inactive = !1;
            for (var e = 0; e < t.$children.length; e++) Gn(t.$children[e]);
            Xn(t, 'activated');
          }
        }
        function Wn(t, n) {
          if ((!n || ((t._directInactive = !0), !Yn(t))) && !t._inactive) {
            t._inactive = !0;
            for (var e = 0; e < t.$children.length; e++) Wn(t.$children[e]);
            Xn(t, 'deactivated');
          }
        }
        function Xn(t, n) {
          pt();
          var e = t.$options[n];
          if (e)
            for (var r = 0, i = e.length; r < i; r++)
              try {
                e[r].call(t);
              } catch (ua) {
                Qt(ua, t, n + ' hook');
              }
          t._hasHookEvent && t.$emit('hook:' + n), vt();
        }
        var Kn = [],
          Qn = [],
          Zn = {},
          Jn = !1,
          te = !1,
          ne = 0;
        function ee() {
          (ne = Kn.length = Qn.length = 0), (Zn = {}), (Jn = te = !1);
        }
        function re() {
          var t, n;
          for (
            te = !0,
              Kn.sort(function(t, n) {
                return t.id - n.id;
              }),
              ne = 0;
            ne < Kn.length;
            ne++
          )
            (t = Kn[ne]), t.before && t.before(), (n = t.id), (Zn[n] = null), t.run();
          var e = Qn.slice(),
            r = Kn.slice();
          ee(), ae(e), ie(r), at && U.devtools && at.emit('flush');
        }
        function ie(t) {
          var n = t.length;
          while (n--) {
            var e = t[n],
              r = e.vm;
            r._watcher === e && r._isMounted && !r._isDestroyed && Xn(r, 'updated');
          }
        }
        function oe(t) {
          (t._inactive = !1), Qn.push(t);
        }
        function ae(t) {
          for (var n = 0; n < t.length; n++) (t[n]._inactive = !0), Gn(t[n], !0);
        }
        function ue(t) {
          var n = t.id;
          if (null == Zn[n]) {
            if (((Zn[n] = !0), te)) {
              var e = Kn.length - 1;
              while (e > ne && Kn[e].id > t.id) e--;
              Kn.splice(e + 1, 0, t);
            } else Kn.push(t);
            Jn || ((Jn = !0), ln(re));
          }
        }
        var ce = 0,
          fe = function(t, n, e, r, i) {
            (this.vm = t),
              i && (t._watcher = this),
              t._watchers.push(this),
              r
                ? ((this.deep = !!r.deep),
                  (this.user = !!r.user),
                  (this.lazy = !!r.lazy),
                  (this.sync = !!r.sync),
                  (this.before = r.before))
                : (this.deep = this.user = this.lazy = this.sync = !1),
              (this.cb = e),
              (this.id = ++ce),
              (this.active = !0),
              (this.dirty = this.lazy),
              (this.deps = []),
              (this.newDeps = []),
              (this.depIds = new ct()),
              (this.newDepIds = new ct()),
              (this.expression = ''),
              'function' === typeof n ? (this.getter = n) : ((this.getter = H(n)), this.getter || (this.getter = P)),
              (this.value = this.lazy ? void 0 : this.get());
          };
        (fe.prototype.get = function() {
          var t;
          pt(this);
          var n = this.vm;
          try {
            t = this.getter.call(n, n);
          } catch (ua) {
            if (!this.user) throw ua;
            Qt(ua, n, 'getter for watcher "' + this.expression + '"');
          } finally {
            this.deep && dn(t), vt(), this.cleanupDeps();
          }
          return t;
        }),
          (fe.prototype.addDep = function(t) {
            var n = t.id;
            this.newDepIds.has(n) ||
              (this.newDepIds.add(n), this.newDeps.push(t), this.depIds.has(n) || t.addSub(this));
          }),
          (fe.prototype.cleanupDeps = function() {
            var t = this.deps.length;
            while (t--) {
              var n = this.deps[t];
              this.newDepIds.has(n.id) || n.removeSub(this);
            }
            var e = this.depIds;
            (this.depIds = this.newDepIds),
              (this.newDepIds = e),
              this.newDepIds.clear(),
              (e = this.deps),
              (this.deps = this.newDeps),
              (this.newDeps = e),
              (this.newDeps.length = 0);
          }),
          (fe.prototype.update = function() {
            this.lazy ? (this.dirty = !0) : this.sync ? this.run() : ue(this);
          }),
          (fe.prototype.run = function() {
            if (this.active) {
              var t = this.get();
              if (t !== this.value || c(t) || this.deep) {
                var n = this.value;
                if (((this.value = t), this.user))
                  try {
                    this.cb.call(this.vm, t, n);
                  } catch (ua) {
                    Qt(ua, this.vm, 'callback for watcher "' + this.expression + '"');
                  }
                else this.cb.call(this.vm, t, n);
              }
            }
          }),
          (fe.prototype.evaluate = function() {
            (this.value = this.get()), (this.dirty = !1);
          }),
          (fe.prototype.depend = function() {
            var t = this.deps.length;
            while (t--) this.deps[t].depend();
          }),
          (fe.prototype.teardown = function() {
            if (this.active) {
              this.vm._isBeingDestroyed || g(this.vm._watchers, this);
              var t = this.deps.length;
              while (t--) this.deps[t].removeSub(this);
              this.active = !1;
            }
          });
        var se = { enumerable: !0, configurable: !0, get: P, set: P };
        function le(t, n, e) {
          (se.get = function() {
            return this[n][e];
          }),
            (se.set = function(t) {
              this[n][e] = t;
            }),
            Object.defineProperty(t, e, se);
        }
        function he(t) {
          t._watchers = [];
          var n = t.$options;
          n.props && de(t, n.props),
            n.methods && we(t, n.methods),
            n.data ? pe(t) : Ot((t._data = {}), !0),
            n.computed && ge(t, n.computed),
            n.watch && n.watch !== et && xe(t, n.watch);
        }
        function de(t, n) {
          var e = t.$options.propsData || {},
            r = (t._props = {}),
            i = (t.$options._propKeys = []),
            o = !t.$parent;
          o || Et(!1);
          var a = function(o) {
            i.push(o);
            var a = Yt(o, n, e, t);
            Nt(r, o, a), o in t || le(t, '_props', o);
          };
          for (var u in n) a(u);
          Et(!0);
        }
        function pe(t) {
          var n = t.$options.data;
          (n = t._data = 'function' === typeof n ? ve(n, t) : n || {}), s(n) || (n = {});
          var e = Object.keys(n),
            r = t.$options.props,
            i = (t.$options.methods, e.length);
          while (i--) {
            var o = e[i];
            0, (r && m(r, o)) || B(o) || le(t, '_data', o);
          }
          Ot(n, !0);
        }
        function ve(t, n) {
          pt();
          try {
            return t.call(n, n);
          } catch (ua) {
            return Qt(ua, n, 'data()'), {};
          } finally {
            vt();
          }
        }
        var ye = { lazy: !0 };
        function ge(t, n) {
          var e = (t._computedWatchers = Object.create(null)),
            r = ot();
          for (var i in n) {
            var o = n[i],
              a = 'function' === typeof o ? o : o.get;
            0, r || (e[i] = new fe(t, a || P, P, ye)), i in t || be(t, i, o);
          }
        }
        function be(t, n, e) {
          var r = !ot();
          'function' === typeof e
            ? ((se.get = r ? me(n) : _e(e)), (se.set = P))
            : ((se.get = e.get ? (r && !1 !== e.cache ? me(n) : _e(e.get)) : P), (se.set = e.set || P)),
            Object.defineProperty(t, n, se);
        }
        function me(t) {
          return function() {
            var n = this._computedWatchers && this._computedWatchers[t];
            if (n) return n.dirty && n.evaluate(), ht.target && n.depend(), n.value;
          };
        }
        function _e(t) {
          return function() {
            return t.call(this, this);
          };
        }
        function we(t, n) {
          t.$options.props;
          for (var e in n) t[e] = 'function' !== typeof n[e] ? P : C(n[e], t);
        }
        function xe(t, n) {
          for (var e in n) {
            var r = n[e];
            if (Array.isArray(r)) for (var i = 0; i < r.length; i++) Me(t, e, r[i]);
            else Me(t, e, r);
          }
        }
        function Me(t, n, e, r) {
          return s(e) && ((r = e), (e = e.handler)), 'string' === typeof e && (e = t[e]), t.$watch(n, e, r);
        }
        function Se(t) {
          var n = {
              get: function() {
                return this._data;
              },
            },
            e = {
              get: function() {
                return this._props;
              },
            };
          Object.defineProperty(t.prototype, '$data', n),
            Object.defineProperty(t.prototype, '$props', e),
            (t.prototype.$set = Pt),
            (t.prototype.$delete = Rt),
            (t.prototype.$watch = function(t, n, e) {
              var r = this;
              if (s(n)) return Me(r, t, n, e);
              (e = e || {}), (e.user = !0);
              var i = new fe(r, t, n, e);
              if (e.immediate)
                try {
                  n.call(r, i.value);
                } catch (o) {
                  Qt(o, r, 'callback for immediate watcher "' + i.expression + '"');
                }
              return function() {
                i.teardown();
              };
            });
        }
        function Ae(t) {
          var n = t.$options.provide;
          n && (t._provided = 'function' === typeof n ? n.call(t) : n);
        }
        function Ee(t) {
          var n = ke(t.$options.inject, t);
          n &&
            (Et(!1),
            Object.keys(n).forEach(function(e) {
              Nt(t, e, n[e]);
            }),
            Et(!0));
        }
        function ke(t, n) {
          if (t) {
            for (
              var e = Object.create(null),
                r = ft
                  ? Reflect.ownKeys(t).filter(function(n) {
                      return Object.getOwnPropertyDescriptor(t, n).enumerable;
                    })
                  : Object.keys(t),
                i = 0;
              i < r.length;
              i++
            ) {
              var o = r[i],
                a = t[o].from,
                u = n;
              while (u) {
                if (u._provided && m(u._provided, a)) {
                  e[o] = u._provided[a];
                  break;
                }
                u = u.$parent;
              }
              if (!u)
                if ('default' in t[o]) {
                  var c = t[o].default;
                  e[o] = 'function' === typeof c ? c.call(n) : c;
                } else 0;
            }
            return e;
          }
        }
        function Ce(t, n) {
          var e, r, o, a, u;
          if (Array.isArray(t) || 'string' === typeof t)
            for (e = new Array(t.length), r = 0, o = t.length; r < o; r++) e[r] = n(t[r], r);
          else if ('number' === typeof t) for (e = new Array(t), r = 0; r < t; r++) e[r] = n(r + 1, r);
          else if (c(t))
            for (a = Object.keys(t), e = new Array(a.length), r = 0, o = a.length; r < o; r++)
              (u = a[r]), (e[r] = n(t[u], u, r));
          return i(e) || (e = []), (e._isVList = !0), e;
        }
        function Te(t, n, e, r) {
          var i,
            o = this.$scopedSlots[t];
          o ? ((e = e || {}), r && (e = O(O({}, r), e)), (i = o(e) || n)) : (i = this.$slots[t] || n);
          var a = e && e.slot;
          return a ? this.$createElement('template', { slot: a }, i) : i;
        }
        function Oe(t) {
          return Ht(this.$options, 'filters', t, !0) || j;
        }
        function Ne(t, n) {
          return Array.isArray(t) ? -1 === t.indexOf(n) : t !== n;
        }
        function Pe(t, n, e, r, i) {
          var o = U.keyCodes[n] || e;
          return i && r && !U.keyCodes[n] ? Ne(i, r) : o ? Ne(o, t) : r ? A(r) !== n : void 0;
        }
        function Re(t, n, e, r, i) {
          if (e)
            if (c(e)) {
              var o;
              Array.isArray(e) && (e = N(e));
              var a = function(a) {
                if ('class' === a || 'style' === a || y(a)) o = t;
                else {
                  var u = t.attrs && t.attrs.type;
                  o = r || U.mustUseProp(n, u, a) ? t.domProps || (t.domProps = {}) : t.attrs || (t.attrs = {});
                }
                var c = x(a);
                if (!(a in o) && !(c in o) && ((o[a] = e[a]), i)) {
                  var f = t.on || (t.on = {});
                  f['update:' + c] = function(t) {
                    e[a] = t;
                  };
                }
              };
              for (var u in e) a(u);
            } else;
          return t;
        }
        function je(t, n) {
          var e = this._staticTrees || (this._staticTrees = []),
            r = e[t];
          return r && !n
            ? r
            : ((r = e[t] = this.$options.staticRenderFns[t].call(this._renderProxy, null, this)),
              Ie(r, '__static__' + t, !1),
              r);
        }
        function Le(t, n, e) {
          return Ie(t, '__once__' + n + (e ? '_' + e : ''), !0), t;
        }
        function Ie(t, n, e) {
          if (Array.isArray(t))
            for (var r = 0; r < t.length; r++) t[r] && 'string' !== typeof t[r] && $e(t[r], n + '_' + r, e);
          else $e(t, n, e);
        }
        function $e(t, n, e) {
          (t.isStatic = !0), (t.key = n), (t.isOnce = e);
        }
        function Fe(t, n) {
          if (n)
            if (s(n)) {
              var e = (t.on = t.on ? O({}, t.on) : {});
              for (var r in n) {
                var i = e[r],
                  o = n[r];
                e[r] = i ? [].concat(i, o) : o;
              }
            } else;
          return t;
        }
        function De(t) {
          (t._o = Le),
            (t._n = p),
            (t._s = d),
            (t._l = Ce),
            (t._t = Te),
            (t._q = L),
            (t._i = I),
            (t._m = je),
            (t._f = Oe),
            (t._k = Pe),
            (t._b = Re),
            (t._v = mt),
            (t._e = bt),
            (t._u = Dn),
            (t._g = Fe);
        }
        function ze(t, n, r, i, a) {
          var u,
            c = a.options;
          m(i, '_uid') ? ((u = Object.create(i)), (u._original = i)) : ((u = i), (i = i._original));
          var f = o(c._compiled),
            s = !f;
          (this.data = t),
            (this.props = n),
            (this.children = r),
            (this.parent = i),
            (this.listeners = t.on || e),
            (this.injections = ke(c.inject, i)),
            (this.slots = function() {
              return $n(r, i);
            }),
            f && ((this.$options = c), (this.$slots = this.slots()), (this.$scopedSlots = t.scopedSlots || e)),
            c._scopeId
              ? (this._c = function(t, n, e, r) {
                  var o = Je(u, t, n, e, r, s);
                  return o && !Array.isArray(o) && ((o.fnScopeId = c._scopeId), (o.fnContext = i)), o;
                })
              : (this._c = function(t, n, e, r) {
                  return Je(u, t, n, e, r, s);
                });
        }
        function Ue(t, n, r, o, a) {
          var u = t.options,
            c = {},
            f = u.props;
          if (i(f)) for (var s in f) c[s] = Yt(s, f, n || e);
          else i(r.attrs) && qe(c, r.attrs), i(r.props) && qe(c, r.props);
          var l = new ze(r, c, a, o, t),
            h = u.render.call(null, l._c, l);
          if (h instanceof yt) return Be(h, r, l.parent, u, l);
          if (Array.isArray(h)) {
            for (var d = Mn(h) || [], p = new Array(d.length), v = 0; v < d.length; v++)
              p[v] = Be(d[v], r, l.parent, u, l);
            return p;
          }
        }
        function Be(t, n, e, r, i) {
          var o = _t(t);
          return (o.fnContext = e), (o.fnOptions = r), n.slot && ((o.data || (o.data = {})).slot = n.slot), o;
        }
        function qe(t, n) {
          for (var e in n) t[x(e)] = n[e];
        }
        De(ze.prototype);
        var Ve = {
            init: function(t, n) {
              if (t.componentInstance && !t.componentInstance._isDestroyed && t.data.keepAlive) {
                var e = t;
                Ve.prepatch(e, e);
              } else {
                var r = (t.componentInstance = Ge(t, zn));
                r.$mount(n ? t.elm : void 0, n);
              }
            },
            prepatch: function(t, n) {
              var e = n.componentOptions,
                r = (n.componentInstance = t.componentInstance);
              Hn(r, e.propsData, e.listeners, n, e.children);
            },
            insert: function(t) {
              var n = t.context,
                e = t.componentInstance;
              e._isMounted || ((e._isMounted = !0), Xn(e, 'mounted')),
                t.data.keepAlive && (n._isMounted ? oe(e) : Gn(e, !0));
            },
            destroy: function(t) {
              var n = t.componentInstance;
              n._isDestroyed || (t.data.keepAlive ? Wn(n, !0) : n.$destroy());
            },
          },
          He = Object.keys(Ve);
        function Ye(t, n, e, a, u) {
          if (!r(t)) {
            var f = e.$options._base;
            if ((c(t) && (t = f.extend(t)), 'function' === typeof t)) {
              var s;
              if (r(t.cid) && ((s = t), (t = Cn(s, f, e)), void 0 === t)) return kn(s, n, e, a, u);
              (n = n || {}), cr(t), i(n.model) && Ke(t.options, n);
              var l = _n(n, t, u);
              if (o(t.options.functional)) return Ue(t, l, n, e, a);
              var h = n.on;
              if (((n.on = n.nativeOn), o(t.options.abstract))) {
                var d = n.slot;
                (n = {}), d && (n.slot = d);
              }
              We(n);
              var p = t.options.name || u,
                v = new yt(
                  'vue-component-' + t.cid + (p ? '-' + p : ''),
                  n,
                  void 0,
                  void 0,
                  void 0,
                  e,
                  { Ctor: t, propsData: l, listeners: h, tag: u, children: a },
                  s
                );
              return v;
            }
          }
        }
        function Ge(t, n) {
          var e = { _isComponent: !0, _parentVnode: t, parent: n },
            r = t.data.inlineTemplate;
          return (
            i(r) && ((e.render = r.render), (e.staticRenderFns = r.staticRenderFns)), new t.componentOptions.Ctor(e)
          );
        }
        function We(t) {
          for (var n = t.hook || (t.hook = {}), e = 0; e < He.length; e++) {
            var r = He[e],
              i = n[r],
              o = Ve[r];
            i === o || (i && i._merged) || (n[r] = i ? Xe(o, i) : o);
          }
        }
        function Xe(t, n) {
          var e = function(e, r) {
            t(e, r), n(e, r);
          };
          return (e._merged = !0), e;
        }
        function Ke(t, n) {
          var e = (t.model && t.model.prop) || 'value',
            r = (t.model && t.model.event) || 'input';
          (n.props || (n.props = {}))[e] = n.model.value;
          var o = n.on || (n.on = {}),
            a = o[r],
            u = n.model.callback;
          i(a) ? (Array.isArray(a) ? -1 === a.indexOf(u) : a !== u) && (o[r] = [u].concat(a)) : (o[r] = u);
        }
        var Qe = 1,
          Ze = 2;
        function Je(t, n, e, r, i, a) {
          return (Array.isArray(e) || u(e)) && ((i = r), (r = e), (e = void 0)), o(a) && (i = Ze), tr(t, n, e, r, i);
        }
        function tr(t, n, e, r, o) {
          if (i(e) && i(e.__ob__)) return bt();
          if ((i(e) && i(e.is) && (n = e.is), !n)) return bt();
          var a, u, c;
          (Array.isArray(r) &&
            'function' === typeof r[0] &&
            ((e = e || {}), (e.scopedSlots = { default: r[0] }), (r.length = 0)),
          o === Ze ? (r = Mn(r)) : o === Qe && (r = xn(r)),
          'string' === typeof n)
            ? ((u = (t.$vnode && t.$vnode.ns) || U.getTagNamespace(n)),
              (a = U.isReservedTag(n)
                ? new yt(U.parsePlatformTagName(n), e, r, void 0, void 0, t)
                : (e && e.pre) || !i((c = Ht(t.$options, 'components', n)))
                  ? new yt(n, e, r, void 0, void 0, t)
                  : Ye(c, e, t, r, n)))
            : (a = Ye(n, e, t, r));
          return Array.isArray(a) ? a : i(a) ? (i(u) && nr(a, u), i(e) && er(e), a) : bt();
        }
        function nr(t, n, e) {
          if (((t.ns = n), 'foreignObject' === t.tag && ((n = void 0), (e = !0)), i(t.children)))
            for (var a = 0, u = t.children.length; a < u; a++) {
              var c = t.children[a];
              i(c.tag) && (r(c.ns) || (o(e) && 'svg' !== c.tag)) && nr(c, n, e);
            }
        }
        function er(t) {
          c(t.style) && dn(t.style), c(t.class) && dn(t.class);
        }
        function rr(t) {
          (t._vnode = null), (t._staticTrees = null);
          var n = t.$options,
            r = (t.$vnode = n._parentVnode),
            i = r && r.context;
          (t.$slots = $n(n._renderChildren, i)),
            (t.$scopedSlots = e),
            (t._c = function(n, e, r, i) {
              return Je(t, n, e, r, i, !1);
            }),
            (t.$createElement = function(n, e, r, i) {
              return Je(t, n, e, r, i, !0);
            });
          var o = r && r.data;
          Nt(t, '$attrs', (o && o.attrs) || e, null, !0), Nt(t, '$listeners', n._parentListeners || e, null, !0);
        }
        function ir(t) {
          De(t.prototype),
            (t.prototype.$nextTick = function(t) {
              return ln(t, this);
            }),
            (t.prototype._render = function() {
              var t,
                n = this,
                r = n.$options,
                i = r.render,
                o = r._parentVnode;
              o && (n.$scopedSlots = o.data.scopedSlots || e), (n.$vnode = o);
              try {
                t = i.call(n._renderProxy, n.$createElement);
              } catch (ua) {
                Qt(ua, n, 'render'), (t = n._vnode);
              }
              return t instanceof yt || (t = bt()), (t.parent = o), t;
            });
        }
        var or = 0;
        function ar(t) {
          t.prototype._init = function(t) {
            var n = this;
            (n._uid = or++),
              (n._isVue = !0),
              t && t._isComponent ? ur(n, t) : (n.$options = Vt(cr(n.constructor), t || {}, n)),
              (n._renderProxy = n),
              (n._self = n),
              Bn(n),
              Nn(n),
              rr(n),
              Xn(n, 'beforeCreate'),
              Ee(n),
              he(n),
              Ae(n),
              Xn(n, 'created'),
              n.$options.el && n.$mount(n.$options.el);
          };
        }
        function ur(t, n) {
          var e = (t.$options = Object.create(t.constructor.options)),
            r = n._parentVnode;
          (e.parent = n.parent), (e._parentVnode = r);
          var i = r.componentOptions;
          (e.propsData = i.propsData),
            (e._parentListeners = i.listeners),
            (e._renderChildren = i.children),
            (e._componentTag = i.tag),
            n.render && ((e.render = n.render), (e.staticRenderFns = n.staticRenderFns));
        }
        function cr(t) {
          var n = t.options;
          if (t.super) {
            var e = cr(t.super),
              r = t.superOptions;
            if (e !== r) {
              t.superOptions = e;
              var i = fr(t);
              i && O(t.extendOptions, i),
                (n = t.options = Vt(e, t.extendOptions)),
                n.name && (n.components[n.name] = t);
            }
          }
          return n;
        }
        function fr(t) {
          var n,
            e = t.options,
            r = t.extendOptions,
            i = t.sealedOptions;
          for (var o in e) e[o] !== i[o] && (n || (n = {}), (n[o] = sr(e[o], r[o], i[o])));
          return n;
        }
        function sr(t, n, e) {
          if (Array.isArray(t)) {
            var r = [];
            (e = Array.isArray(e) ? e : [e]), (n = Array.isArray(n) ? n : [n]);
            for (var i = 0; i < t.length; i++) (n.indexOf(t[i]) >= 0 || e.indexOf(t[i]) < 0) && r.push(t[i]);
            return r;
          }
          return t;
        }
        function lr(t) {
          this._init(t);
        }
        function hr(t) {
          t.use = function(t) {
            var n = this._installedPlugins || (this._installedPlugins = []);
            if (n.indexOf(t) > -1) return this;
            var e = T(arguments, 1);
            return (
              e.unshift(this),
              'function' === typeof t.install ? t.install.apply(t, e) : 'function' === typeof t && t.apply(null, e),
              n.push(t),
              this
            );
          };
        }
        function dr(t) {
          t.mixin = function(t) {
            return (this.options = Vt(this.options, t)), this;
          };
        }
        function pr(t) {
          t.cid = 0;
          var n = 1;
          t.extend = function(t) {
            t = t || {};
            var e = this,
              r = e.cid,
              i = t._Ctor || (t._Ctor = {});
            if (i[r]) return i[r];
            var o = t.name || e.options.name;
            var a = function(t) {
              this._init(t);
            };
            return (
              (a.prototype = Object.create(e.prototype)),
              (a.prototype.constructor = a),
              (a.cid = n++),
              (a.options = Vt(e.options, t)),
              (a['super'] = e),
              a.options.props && vr(a),
              a.options.computed && yr(a),
              (a.extend = e.extend),
              (a.mixin = e.mixin),
              (a.use = e.use),
              D.forEach(function(t) {
                a[t] = e[t];
              }),
              o && (a.options.components[o] = a),
              (a.superOptions = e.options),
              (a.extendOptions = t),
              (a.sealedOptions = O({}, a.options)),
              (i[r] = a),
              a
            );
          };
        }
        function vr(t) {
          var n = t.options.props;
          for (var e in n) le(t.prototype, '_props', e);
        }
        function yr(t) {
          var n = t.options.computed;
          for (var e in n) be(t.prototype, e, n[e]);
        }
        function gr(t) {
          D.forEach(function(n) {
            t[n] = function(t, e) {
              return e
                ? ('component' === n && s(e) && ((e.name = e.name || t), (e = this.options._base.extend(e))),
                  'directive' === n && 'function' === typeof e && (e = { bind: e, update: e }),
                  (this.options[n + 's'][t] = e),
                  e)
                : this.options[n + 's'][t];
            };
          });
        }
        function br(t) {
          return t && (t.Ctor.options.name || t.tag);
        }
        function mr(t, n) {
          return Array.isArray(t)
            ? t.indexOf(n) > -1
            : 'string' === typeof t
              ? t.split(',').indexOf(n) > -1
              : !!l(t) && t.test(n);
        }
        function _r(t, n) {
          var e = t.cache,
            r = t.keys,
            i = t._vnode;
          for (var o in e) {
            var a = e[o];
            if (a) {
              var u = br(a.componentOptions);
              u && !n(u) && wr(e, o, r, i);
            }
          }
        }
        function wr(t, n, e, r) {
          var i = t[n];
          !i || (r && i.tag === r.tag) || i.componentInstance.$destroy(), (t[n] = null), g(e, n);
        }
        ar(lr), Se(lr), In(lr), qn(lr), ir(lr);
        var xr = [String, RegExp, Array],
          Mr = {
            name: 'keep-alive',
            abstract: !0,
            props: { include: xr, exclude: xr, max: [String, Number] },
            created: function() {
              (this.cache = Object.create(null)), (this.keys = []);
            },
            destroyed: function() {
              for (var t in this.cache) wr(this.cache, t, this.keys);
            },
            mounted: function() {
              var t = this;
              this.$watch('include', function(n) {
                _r(t, function(t) {
                  return mr(n, t);
                });
              }),
                this.$watch('exclude', function(n) {
                  _r(t, function(t) {
                    return !mr(n, t);
                  });
                });
            },
            render: function() {
              var t = this.$slots.default,
                n = On(t),
                e = n && n.componentOptions;
              if (e) {
                var r = br(e),
                  i = this,
                  o = i.include,
                  a = i.exclude;
                if ((o && (!r || !mr(o, r))) || (a && r && mr(a, r))) return n;
                var u = this,
                  c = u.cache,
                  f = u.keys,
                  s = null == n.key ? e.Ctor.cid + (e.tag ? '::' + e.tag : '') : n.key;
                c[s]
                  ? ((n.componentInstance = c[s].componentInstance), g(f, s), f.push(s))
                  : ((c[s] = n), f.push(s), this.max && f.length > parseInt(this.max) && wr(c, f[0], f, this._vnode)),
                  (n.data.keepAlive = !0);
              }
              return n || (t && t[0]);
            },
          },
          Sr = { KeepAlive: Mr };
        function Ar(t) {
          var n = {
            get: function() {
              return U;
            },
          };
          Object.defineProperty(t, 'config', n),
            (t.util = { warn: st, extend: O, mergeOptions: Vt, defineReactive: Nt }),
            (t.set = Pt),
            (t.delete = Rt),
            (t.nextTick = ln),
            (t.options = Object.create(null)),
            D.forEach(function(n) {
              t.options[n + 's'] = Object.create(null);
            }),
            (t.options._base = t),
            O(t.options.components, Sr),
            hr(t),
            dr(t),
            pr(t),
            gr(t);
        }
        Ar(lr),
          Object.defineProperty(lr.prototype, '$isServer', { get: ot }),
          Object.defineProperty(lr.prototype, '$ssrContext', {
            get: function() {
              return this.$vnode && this.$vnode.ssrContext;
            },
          }),
          Object.defineProperty(lr, 'FunctionalRenderContext', { value: ze }),
          (lr.version = '2.5.21');
        var Er = v('style,class'),
          kr = v('input,textarea,option,select,progress'),
          Cr = function(t, n, e) {
            return (
              ('value' === e && kr(t) && 'button' !== n) ||
              ('selected' === e && 'option' === t) ||
              ('checked' === e && 'input' === t) ||
              ('muted' === e && 'video' === t)
            );
          },
          Tr = v('contenteditable,draggable,spellcheck'),
          Or = v(
            'allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,translate,truespeed,typemustmatch,visible'
          ),
          Nr = 'http://www.w3.org/1999/xlink',
          Pr = function(t) {
            return ':' === t.charAt(5) && 'xlink' === t.slice(0, 5);
          },
          Rr = function(t) {
            return Pr(t) ? t.slice(6, t.length) : '';
          },
          jr = function(t) {
            return null == t || !1 === t;
          };
        function Lr(t) {
          var n = t.data,
            e = t,
            r = t;
          while (i(r.componentInstance)) (r = r.componentInstance._vnode), r && r.data && (n = Ir(r.data, n));
          while (i((e = e.parent))) e && e.data && (n = Ir(n, e.data));
          return $r(n.staticClass, n.class);
        }
        function Ir(t, n) {
          return { staticClass: Fr(t.staticClass, n.staticClass), class: i(t.class) ? [t.class, n.class] : n.class };
        }
        function $r(t, n) {
          return i(t) || i(n) ? Fr(t, Dr(n)) : '';
        }
        function Fr(t, n) {
          return t ? (n ? t + ' ' + n : t) : n || '';
        }
        function Dr(t) {
          return Array.isArray(t) ? zr(t) : c(t) ? Ur(t) : 'string' === typeof t ? t : '';
        }
        function zr(t) {
          for (var n, e = '', r = 0, o = t.length; r < o; r++)
            i((n = Dr(t[r]))) && '' !== n && (e && (e += ' '), (e += n));
          return e;
        }
        function Ur(t) {
          var n = '';
          for (var e in t) t[e] && (n && (n += ' '), (n += e));
          return n;
        }
        var Br = { svg: 'http://www.w3.org/2000/svg', math: 'http://www.w3.org/1998/Math/MathML' },
          qr = v(
            'html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot'
          ),
          Vr = v(
            'svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view',
            !0
          ),
          Hr = function(t) {
            return qr(t) || Vr(t);
          };
        function Yr(t) {
          return Vr(t) ? 'svg' : 'math' === t ? 'math' : void 0;
        }
        var Gr = Object.create(null);
        function Wr(t) {
          if (!W) return !0;
          if (Hr(t)) return !1;
          if (((t = t.toLowerCase()), null != Gr[t])) return Gr[t];
          var n = document.createElement(t);
          return t.indexOf('-') > -1
            ? (Gr[t] = n.constructor === window.HTMLUnknownElement || n.constructor === window.HTMLElement)
            : (Gr[t] = /HTMLUnknownElement/.test(n.toString()));
        }
        var Xr = v('text,number,password,search,email,tel,url');
        function Kr(t) {
          if ('string' === typeof t) {
            var n = document.querySelector(t);
            return n || document.createElement('div');
          }
          return t;
        }
        function Qr(t, n) {
          var e = document.createElement(t);
          return 'select' !== t
            ? e
            : (n.data && n.data.attrs && void 0 !== n.data.attrs.multiple && e.setAttribute('multiple', 'multiple'), e);
        }
        function Zr(t, n) {
          return document.createElementNS(Br[t], n);
        }
        function Jr(t) {
          return document.createTextNode(t);
        }
        function ti(t) {
          return document.createComment(t);
        }
        function ni(t, n, e) {
          t.insertBefore(n, e);
        }
        function ei(t, n) {
          t.removeChild(n);
        }
        function ri(t, n) {
          t.appendChild(n);
        }
        function ii(t) {
          return t.parentNode;
        }
        function oi(t) {
          return t.nextSibling;
        }
        function ai(t) {
          return t.tagName;
        }
        function ui(t, n) {
          t.textContent = n;
        }
        function ci(t, n) {
          t.setAttribute(n, '');
        }
        var fi = Object.freeze({
            createElement: Qr,
            createElementNS: Zr,
            createTextNode: Jr,
            createComment: ti,
            insertBefore: ni,
            removeChild: ei,
            appendChild: ri,
            parentNode: ii,
            nextSibling: oi,
            tagName: ai,
            setTextContent: ui,
            setStyleScope: ci,
          }),
          si = {
            create: function(t, n) {
              li(n);
            },
            update: function(t, n) {
              t.data.ref !== n.data.ref && (li(t, !0), li(n));
            },
            destroy: function(t) {
              li(t, !0);
            },
          };
        function li(t, n) {
          var e = t.data.ref;
          if (i(e)) {
            var r = t.context,
              o = t.componentInstance || t.elm,
              a = r.$refs;
            n
              ? Array.isArray(a[e])
                ? g(a[e], o)
                : a[e] === o && (a[e] = void 0)
              : t.data.refInFor
                ? Array.isArray(a[e])
                  ? a[e].indexOf(o) < 0 && a[e].push(o)
                  : (a[e] = [o])
                : (a[e] = o);
          }
        }
        var hi = new yt('', {}, []),
          di = ['create', 'activate', 'update', 'remove', 'destroy'];
        function pi(t, n) {
          return (
            t.key === n.key &&
            ((t.tag === n.tag && t.isComment === n.isComment && i(t.data) === i(n.data) && vi(t, n)) ||
              (o(t.isAsyncPlaceholder) && t.asyncFactory === n.asyncFactory && r(n.asyncFactory.error)))
          );
        }
        function vi(t, n) {
          if ('input' !== t.tag) return !0;
          var e,
            r = i((e = t.data)) && i((e = e.attrs)) && e.type,
            o = i((e = n.data)) && i((e = e.attrs)) && e.type;
          return r === o || (Xr(r) && Xr(o));
        }
        function yi(t, n, e) {
          var r,
            o,
            a = {};
          for (r = n; r <= e; ++r) (o = t[r].key), i(o) && (a[o] = r);
          return a;
        }
        function gi(t) {
          var n,
            e,
            a = {},
            c = t.modules,
            f = t.nodeOps;
          for (n = 0; n < di.length; ++n)
            for (a[di[n]] = [], e = 0; e < c.length; ++e) i(c[e][di[n]]) && a[di[n]].push(c[e][di[n]]);
          function s(t) {
            return new yt(f.tagName(t).toLowerCase(), {}, [], void 0, t);
          }
          function l(t, n) {
            function e() {
              0 === --e.listeners && h(t);
            }
            return (e.listeners = n), e;
          }
          function h(t) {
            var n = f.parentNode(t);
            i(n) && f.removeChild(n, t);
          }
          function d(t, n, e, r, a, u, c) {
            if ((i(t.elm) && i(u) && (t = u[c] = _t(t)), (t.isRootInsert = !a), !p(t, n, e, r))) {
              var s = t.data,
                l = t.children,
                h = t.tag;
              i(h)
                ? ((t.elm = t.ns ? f.createElementNS(t.ns, h) : f.createElement(h, t)),
                  x(t),
                  m(t, l, n),
                  i(s) && w(t, n),
                  b(e, t.elm, r))
                : o(t.isComment)
                  ? ((t.elm = f.createComment(t.text)), b(e, t.elm, r))
                  : ((t.elm = f.createTextNode(t.text)), b(e, t.elm, r));
            }
          }
          function p(t, n, e, r) {
            var a = t.data;
            if (i(a)) {
              var u = i(t.componentInstance) && a.keepAlive;
              if ((i((a = a.hook)) && i((a = a.init)) && a(t, !1), i(t.componentInstance)))
                return y(t, n), b(e, t.elm, r), o(u) && g(t, n, e, r), !0;
            }
          }
          function y(t, n) {
            i(t.data.pendingInsert) && (n.push.apply(n, t.data.pendingInsert), (t.data.pendingInsert = null)),
              (t.elm = t.componentInstance.$el),
              _(t) ? (w(t, n), x(t)) : (li(t), n.push(t));
          }
          function g(t, n, e, r) {
            var o,
              u = t;
            while (u.componentInstance)
              if (((u = u.componentInstance._vnode), i((o = u.data)) && i((o = o.transition)))) {
                for (o = 0; o < a.activate.length; ++o) a.activate[o](hi, u);
                n.push(u);
                break;
              }
            b(e, t.elm, r);
          }
          function b(t, n, e) {
            i(t) && (i(e) ? f.parentNode(e) === t && f.insertBefore(t, n, e) : f.appendChild(t, n));
          }
          function m(t, n, e) {
            if (Array.isArray(n)) {
              0;
              for (var r = 0; r < n.length; ++r) d(n[r], e, t.elm, null, !0, n, r);
            } else u(t.text) && f.appendChild(t.elm, f.createTextNode(String(t.text)));
          }
          function _(t) {
            while (t.componentInstance) t = t.componentInstance._vnode;
            return i(t.tag);
          }
          function w(t, e) {
            for (var r = 0; r < a.create.length; ++r) a.create[r](hi, t);
            (n = t.data.hook), i(n) && (i(n.create) && n.create(hi, t), i(n.insert) && e.push(t));
          }
          function x(t) {
            var n;
            if (i((n = t.fnScopeId))) f.setStyleScope(t.elm, n);
            else {
              var e = t;
              while (e) i((n = e.context)) && i((n = n.$options._scopeId)) && f.setStyleScope(t.elm, n), (e = e.parent);
            }
            i((n = zn)) &&
              n !== t.context &&
              n !== t.fnContext &&
              i((n = n.$options._scopeId)) &&
              f.setStyleScope(t.elm, n);
          }
          function M(t, n, e, r, i, o) {
            for (; r <= i; ++r) d(e[r], o, t, n, !1, e, r);
          }
          function S(t) {
            var n,
              e,
              r = t.data;
            if (i(r))
              for (i((n = r.hook)) && i((n = n.destroy)) && n(t), n = 0; n < a.destroy.length; ++n) a.destroy[n](t);
            if (i((n = t.children))) for (e = 0; e < t.children.length; ++e) S(t.children[e]);
          }
          function A(t, n, e, r) {
            for (; e <= r; ++e) {
              var o = n[e];
              i(o) && (i(o.tag) ? (E(o), S(o)) : h(o.elm));
            }
          }
          function E(t, n) {
            if (i(n) || i(t.data)) {
              var e,
                r = a.remove.length + 1;
              for (
                i(n) ? (n.listeners += r) : (n = l(t.elm, r)),
                  i((e = t.componentInstance)) && i((e = e._vnode)) && i(e.data) && E(e, n),
                  e = 0;
                e < a.remove.length;
                ++e
              )
                a.remove[e](t, n);
              i((e = t.data.hook)) && i((e = e.remove)) ? e(t, n) : n();
            } else h(t.elm);
          }
          function k(t, n, e, o, a) {
            var u,
              c,
              s,
              l,
              h = 0,
              p = 0,
              v = n.length - 1,
              y = n[0],
              g = n[v],
              b = e.length - 1,
              m = e[0],
              _ = e[b],
              w = !a;
            while (h <= v && p <= b)
              r(y)
                ? (y = n[++h])
                : r(g)
                  ? (g = n[--v])
                  : pi(y, m)
                    ? (T(y, m, o, e, p), (y = n[++h]), (m = e[++p]))
                    : pi(g, _)
                      ? (T(g, _, o, e, b), (g = n[--v]), (_ = e[--b]))
                      : pi(y, _)
                        ? (T(y, _, o, e, b),
                          w && f.insertBefore(t, y.elm, f.nextSibling(g.elm)),
                          (y = n[++h]),
                          (_ = e[--b]))
                        : pi(g, m)
                          ? (T(g, m, o, e, p), w && f.insertBefore(t, g.elm, y.elm), (g = n[--v]), (m = e[++p]))
                          : (r(u) && (u = yi(n, h, v)),
                            (c = i(m.key) ? u[m.key] : C(m, n, h, v)),
                            r(c)
                              ? d(m, o, t, y.elm, !1, e, p)
                              : ((s = n[c]),
                                pi(s, m)
                                  ? (T(s, m, o, e, p), (n[c] = void 0), w && f.insertBefore(t, s.elm, y.elm))
                                  : d(m, o, t, y.elm, !1, e, p)),
                            (m = e[++p]));
            h > v ? ((l = r(e[b + 1]) ? null : e[b + 1].elm), M(t, l, e, p, b, o)) : p > b && A(t, n, h, v);
          }
          function C(t, n, e, r) {
            for (var o = e; o < r; o++) {
              var a = n[o];
              if (i(a) && pi(t, a)) return o;
            }
          }
          function T(t, n, e, u, c, s) {
            if (t !== n) {
              i(n.elm) && i(u) && (n = u[c] = _t(n));
              var l = (n.elm = t.elm);
              if (o(t.isAsyncPlaceholder)) i(n.asyncFactory.resolved) ? P(t.elm, n, e) : (n.isAsyncPlaceholder = !0);
              else if (o(n.isStatic) && o(t.isStatic) && n.key === t.key && (o(n.isCloned) || o(n.isOnce)))
                n.componentInstance = t.componentInstance;
              else {
                var h,
                  d = n.data;
                i(d) && i((h = d.hook)) && i((h = h.prepatch)) && h(t, n);
                var p = t.children,
                  v = n.children;
                if (i(d) && _(n)) {
                  for (h = 0; h < a.update.length; ++h) a.update[h](t, n);
                  i((h = d.hook)) && i((h = h.update)) && h(t, n);
                }
                r(n.text)
                  ? i(p) && i(v)
                    ? p !== v && k(l, p, v, e, s)
                    : i(v)
                      ? (i(t.text) && f.setTextContent(l, ''), M(l, null, v, 0, v.length - 1, e))
                      : i(p)
                        ? A(l, p, 0, p.length - 1)
                        : i(t.text) && f.setTextContent(l, '')
                  : t.text !== n.text && f.setTextContent(l, n.text),
                  i(d) && i((h = d.hook)) && i((h = h.postpatch)) && h(t, n);
              }
            }
          }
          function O(t, n, e) {
            if (o(e) && i(t.parent)) t.parent.data.pendingInsert = n;
            else for (var r = 0; r < n.length; ++r) n[r].data.hook.insert(n[r]);
          }
          var N = v('attrs,class,staticClass,staticStyle,key');
          function P(t, n, e, r) {
            var a,
              u = n.tag,
              c = n.data,
              f = n.children;
            if (((r = r || (c && c.pre)), (n.elm = t), o(n.isComment) && i(n.asyncFactory)))
              return (n.isAsyncPlaceholder = !0), !0;
            if (i(c) && (i((a = c.hook)) && i((a = a.init)) && a(n, !0), i((a = n.componentInstance))))
              return y(n, e), !0;
            if (i(u)) {
              if (i(f))
                if (t.hasChildNodes())
                  if (i((a = c)) && i((a = a.domProps)) && i((a = a.innerHTML))) {
                    if (a !== t.innerHTML) return !1;
                  } else {
                    for (var s = !0, l = t.firstChild, h = 0; h < f.length; h++) {
                      if (!l || !P(l, f[h], e, r)) {
                        s = !1;
                        break;
                      }
                      l = l.nextSibling;
                    }
                    if (!s || l) return !1;
                  }
                else m(n, f, e);
              if (i(c)) {
                var d = !1;
                for (var p in c)
                  if (!N(p)) {
                    (d = !0), w(n, e);
                    break;
                  }
                !d && c['class'] && dn(c['class']);
              }
            } else t.data !== n.text && (t.data = n.text);
            return !0;
          }
          return function(t, n, e, u) {
            if (!r(n)) {
              var c = !1,
                l = [];
              if (r(t)) (c = !0), d(n, l);
              else {
                var h = i(t.nodeType);
                if (!h && pi(t, n)) T(t, n, l, null, null, u);
                else {
                  if (h) {
                    if ((1 === t.nodeType && t.hasAttribute(F) && (t.removeAttribute(F), (e = !0)), o(e) && P(t, n, l)))
                      return O(n, l, !0), t;
                    t = s(t);
                  }
                  var p = t.elm,
                    v = f.parentNode(p);
                  if ((d(n, l, p._leaveCb ? null : v, f.nextSibling(p)), i(n.parent))) {
                    var y = n.parent,
                      g = _(n);
                    while (y) {
                      for (var b = 0; b < a.destroy.length; ++b) a.destroy[b](y);
                      if (((y.elm = n.elm), g)) {
                        for (var m = 0; m < a.create.length; ++m) a.create[m](hi, y);
                        var w = y.data.hook.insert;
                        if (w.merged) for (var x = 1; x < w.fns.length; x++) w.fns[x]();
                      } else li(y);
                      y = y.parent;
                    }
                  }
                  i(v) ? A(v, [t], 0, 0) : i(t.tag) && S(t);
                }
              }
              return O(n, l, c), n.elm;
            }
            i(t) && S(t);
          };
        }
        var bi = {
          create: mi,
          update: mi,
          destroy: function(t) {
            mi(t, hi);
          },
        };
        function mi(t, n) {
          (t.data.directives || n.data.directives) && _i(t, n);
        }
        function _i(t, n) {
          var e,
            r,
            i,
            o = t === hi,
            a = n === hi,
            u = xi(t.data.directives, t.context),
            c = xi(n.data.directives, n.context),
            f = [],
            s = [];
          for (e in c)
            (r = u[e]),
              (i = c[e]),
              r
                ? ((i.oldValue = r.value), Si(i, 'update', n, t), i.def && i.def.componentUpdated && s.push(i))
                : (Si(i, 'bind', n, t), i.def && i.def.inserted && f.push(i));
          if (f.length) {
            var l = function() {
              for (var e = 0; e < f.length; e++) Si(f[e], 'inserted', n, t);
            };
            o ? mn(n, 'insert', l) : l();
          }
          if (
            (s.length &&
              mn(n, 'postpatch', function() {
                for (var e = 0; e < s.length; e++) Si(s[e], 'componentUpdated', n, t);
              }),
            !o)
          )
            for (e in u) c[e] || Si(u[e], 'unbind', t, t, a);
        }
        var wi = Object.create(null);
        function xi(t, n) {
          var e,
            r,
            i = Object.create(null);
          if (!t) return i;
          for (e = 0; e < t.length; e++)
            (r = t[e]),
              r.modifiers || (r.modifiers = wi),
              (i[Mi(r)] = r),
              (r.def = Ht(n.$options, 'directives', r.name, !0));
          return i;
        }
        function Mi(t) {
          return t.rawName || t.name + '.' + Object.keys(t.modifiers || {}).join('.');
        }
        function Si(t, n, e, r, i) {
          var o = t.def && t.def[n];
          if (o)
            try {
              o(e.elm, t, e, r, i);
            } catch (ua) {
              Qt(ua, e.context, 'directive ' + t.name + ' ' + n + ' hook');
            }
        }
        var Ai = [si, bi];
        function Ei(t, n) {
          var e = n.componentOptions;
          if ((!i(e) || !1 !== e.Ctor.options.inheritAttrs) && (!r(t.data.attrs) || !r(n.data.attrs))) {
            var o,
              a,
              u,
              c = n.elm,
              f = t.data.attrs || {},
              s = n.data.attrs || {};
            for (o in (i(s.__ob__) && (s = n.data.attrs = O({}, s)), s)) (a = s[o]), (u = f[o]), u !== a && ki(c, o, a);
            for (o in ((Z || tt) && s.value !== f.value && ki(c, 'value', s.value), f))
              r(s[o]) && (Pr(o) ? c.removeAttributeNS(Nr, Rr(o)) : Tr(o) || c.removeAttribute(o));
          }
        }
        function ki(t, n, e) {
          t.tagName.indexOf('-') > -1
            ? Ci(t, n, e)
            : Or(n)
              ? jr(e)
                ? t.removeAttribute(n)
                : ((e = 'allowfullscreen' === n && 'EMBED' === t.tagName ? 'true' : n), t.setAttribute(n, e))
              : Tr(n)
                ? t.setAttribute(n, jr(e) || 'false' === e ? 'false' : 'true')
                : Pr(n)
                  ? jr(e)
                    ? t.removeAttributeNS(Nr, Rr(n))
                    : t.setAttributeNS(Nr, n, e)
                  : Ci(t, n, e);
        }
        function Ci(t, n, e) {
          if (jr(e)) t.removeAttribute(n);
          else {
            if (Z && !J && ('TEXTAREA' === t.tagName || 'INPUT' === t.tagName) && 'placeholder' === n && !t.__ieph) {
              var r = function(n) {
                n.stopImmediatePropagation(), t.removeEventListener('input', r);
              };
              t.addEventListener('input', r), (t.__ieph = !0);
            }
            t.setAttribute(n, e);
          }
        }
        var Ti = { create: Ei, update: Ei };
        function Oi(t, n) {
          var e = n.elm,
            o = n.data,
            a = t.data;
          if (!(r(o.staticClass) && r(o.class) && (r(a) || (r(a.staticClass) && r(a.class))))) {
            var u = Lr(n),
              c = e._transitionClasses;
            i(c) && (u = Fr(u, Dr(c))), u !== e._prevClass && (e.setAttribute('class', u), (e._prevClass = u));
          }
        }
        var Ni,
          Pi = { create: Oi, update: Oi },
          Ri = '__r',
          ji = '__c';
        function Li(t) {
          if (i(t[Ri])) {
            var n = Z ? 'change' : 'input';
            (t[n] = [].concat(t[Ri], t[n] || [])), delete t[Ri];
          }
          i(t[ji]) && ((t.change = [].concat(t[ji], t.change || [])), delete t[ji]);
        }
        function Ii(t, n, e) {
          var r = Ni;
          return function i() {
            var o = n.apply(null, arguments);
            null !== o && Fi(t, i, e, r);
          };
        }
        function $i(t, n, e, r) {
          (n = sn(n)), Ni.addEventListener(t, n, rt ? { capture: e, passive: r } : e);
        }
        function Fi(t, n, e, r) {
          (r || Ni).removeEventListener(t, n._withTask || n, e);
        }
        function Di(t, n) {
          if (!r(t.data.on) || !r(n.data.on)) {
            var e = n.data.on || {},
              i = t.data.on || {};
            (Ni = n.elm), Li(e), bn(e, i, $i, Fi, Ii, n.context), (Ni = void 0);
          }
        }
        var zi = { create: Di, update: Di };
        function Ui(t, n) {
          if (!r(t.data.domProps) || !r(n.data.domProps)) {
            var e,
              o,
              a = n.elm,
              u = t.data.domProps || {},
              c = n.data.domProps || {};
            for (e in (i(c.__ob__) && (c = n.data.domProps = O({}, c)), u)) r(c[e]) && (a[e] = '');
            for (e in c) {
              if (((o = c[e]), 'textContent' === e || 'innerHTML' === e)) {
                if ((n.children && (n.children.length = 0), o === u[e])) continue;
                1 === a.childNodes.length && a.removeChild(a.childNodes[0]);
              }
              if ('value' === e) {
                a._value = o;
                var f = r(o) ? '' : String(o);
                Bi(a, f) && (a.value = f);
              } else a[e] = o;
            }
          }
        }
        function Bi(t, n) {
          return !t.composing && ('OPTION' === t.tagName || qi(t, n) || Vi(t, n));
        }
        function qi(t, n) {
          var e = !0;
          try {
            e = document.activeElement !== t;
          } catch (ua) {}
          return e && t.value !== n;
        }
        function Vi(t, n) {
          var e = t.value,
            r = t._vModifiers;
          if (i(r)) {
            if (r.lazy) return !1;
            if (r.number) return p(e) !== p(n);
            if (r.trim) return e.trim() !== n.trim();
          }
          return e !== n;
        }
        var Hi = { create: Ui, update: Ui },
          Yi = _(function(t) {
            var n = {},
              e = /;(?![^(]*\))/g,
              r = /:(.+)/;
            return (
              t.split(e).forEach(function(t) {
                if (t) {
                  var e = t.split(r);
                  e.length > 1 && (n[e[0].trim()] = e[1].trim());
                }
              }),
              n
            );
          });
        function Gi(t) {
          var n = Wi(t.style);
          return t.staticStyle ? O(t.staticStyle, n) : n;
        }
        function Wi(t) {
          return Array.isArray(t) ? N(t) : 'string' === typeof t ? Yi(t) : t;
        }
        function Xi(t, n) {
          var e,
            r = {};
          if (n) {
            var i = t;
            while (i.componentInstance) (i = i.componentInstance._vnode), i && i.data && (e = Gi(i.data)) && O(r, e);
          }
          (e = Gi(t.data)) && O(r, e);
          var o = t;
          while ((o = o.parent)) o.data && (e = Gi(o.data)) && O(r, e);
          return r;
        }
        var Ki,
          Qi = /^--/,
          Zi = /\s*!important$/,
          Ji = function(t, n, e) {
            if (Qi.test(n)) t.style.setProperty(n, e);
            else if (Zi.test(e)) t.style.setProperty(n, e.replace(Zi, ''), 'important');
            else {
              var r = no(n);
              if (Array.isArray(e)) for (var i = 0, o = e.length; i < o; i++) t.style[r] = e[i];
              else t.style[r] = e;
            }
          },
          to = ['Webkit', 'Moz', 'ms'],
          no = _(function(t) {
            if (((Ki = Ki || document.createElement('div').style), (t = x(t)), 'filter' !== t && t in Ki)) return t;
            for (var n = t.charAt(0).toUpperCase() + t.slice(1), e = 0; e < to.length; e++) {
              var r = to[e] + n;
              if (r in Ki) return r;
            }
          });
        function eo(t, n) {
          var e = n.data,
            o = t.data;
          if (!(r(e.staticStyle) && r(e.style) && r(o.staticStyle) && r(o.style))) {
            var a,
              u,
              c = n.elm,
              f = o.staticStyle,
              s = o.normalizedStyle || o.style || {},
              l = f || s,
              h = Wi(n.data.style) || {};
            n.data.normalizedStyle = i(h.__ob__) ? O({}, h) : h;
            var d = Xi(n, !0);
            for (u in l) r(d[u]) && Ji(c, u, '');
            for (u in d) (a = d[u]), a !== l[u] && Ji(c, u, null == a ? '' : a);
          }
        }
        var ro = { create: eo, update: eo },
          io = /\s+/;
        function oo(t, n) {
          if (n && (n = n.trim()))
            if (t.classList)
              n.indexOf(' ') > -1
                ? n.split(io).forEach(function(n) {
                    return t.classList.add(n);
                  })
                : t.classList.add(n);
            else {
              var e = ' ' + (t.getAttribute('class') || '') + ' ';
              e.indexOf(' ' + n + ' ') < 0 && t.setAttribute('class', (e + n).trim());
            }
        }
        function ao(t, n) {
          if (n && (n = n.trim()))
            if (t.classList)
              n.indexOf(' ') > -1
                ? n.split(io).forEach(function(n) {
                    return t.classList.remove(n);
                  })
                : t.classList.remove(n),
                t.classList.length || t.removeAttribute('class');
            else {
              var e = ' ' + (t.getAttribute('class') || '') + ' ',
                r = ' ' + n + ' ';
              while (e.indexOf(r) >= 0) e = e.replace(r, ' ');
              (e = e.trim()), e ? t.setAttribute('class', e) : t.removeAttribute('class');
            }
        }
        function uo(t) {
          if (t) {
            if ('object' === typeof t) {
              var n = {};
              return !1 !== t.css && O(n, co(t.name || 'v')), O(n, t), n;
            }
            return 'string' === typeof t ? co(t) : void 0;
          }
        }
        var co = _(function(t) {
            return {
              enterClass: t + '-enter',
              enterToClass: t + '-enter-to',
              enterActiveClass: t + '-enter-active',
              leaveClass: t + '-leave',
              leaveToClass: t + '-leave-to',
              leaveActiveClass: t + '-leave-active',
            };
          }),
          fo = W && !J,
          so = 'transition',
          lo = 'animation',
          ho = 'transition',
          po = 'transitionend',
          vo = 'animation',
          yo = 'animationend';
        fo &&
          (void 0 === window.ontransitionend &&
            void 0 !== window.onwebkittransitionend &&
            ((ho = 'WebkitTransition'), (po = 'webkitTransitionEnd')),
          void 0 === window.onanimationend &&
            void 0 !== window.onwebkitanimationend &&
            ((vo = 'WebkitAnimation'), (yo = 'webkitAnimationEnd')));
        var go = W
          ? window.requestAnimationFrame
            ? window.requestAnimationFrame.bind(window)
            : setTimeout
          : function(t) {
              return t();
            };
        function bo(t) {
          go(function() {
            go(t);
          });
        }
        function mo(t, n) {
          var e = t._transitionClasses || (t._transitionClasses = []);
          e.indexOf(n) < 0 && (e.push(n), oo(t, n));
        }
        function _o(t, n) {
          t._transitionClasses && g(t._transitionClasses, n), ao(t, n);
        }
        function wo(t, n, e) {
          var r = Mo(t, n),
            i = r.type,
            o = r.timeout,
            a = r.propCount;
          if (!i) return e();
          var u = i === so ? po : yo,
            c = 0,
            f = function() {
              t.removeEventListener(u, s), e();
            },
            s = function(n) {
              n.target === t && ++c >= a && f();
            };
          setTimeout(function() {
            c < a && f();
          }, o + 1),
            t.addEventListener(u, s);
        }
        var xo = /\b(transform|all)(,|$)/;
        function Mo(t, n) {
          var e,
            r = window.getComputedStyle(t),
            i = (r[ho + 'Delay'] || '').split(', '),
            o = (r[ho + 'Duration'] || '').split(', '),
            a = So(i, o),
            u = (r[vo + 'Delay'] || '').split(', '),
            c = (r[vo + 'Duration'] || '').split(', '),
            f = So(u, c),
            s = 0,
            l = 0;
          n === so
            ? a > 0 && ((e = so), (s = a), (l = o.length))
            : n === lo
              ? f > 0 && ((e = lo), (s = f), (l = c.length))
              : ((s = Math.max(a, f)),
                (e = s > 0 ? (a > f ? so : lo) : null),
                (l = e ? (e === so ? o.length : c.length) : 0));
          var h = e === so && xo.test(r[ho + 'Property']);
          return { type: e, timeout: s, propCount: l, hasTransform: h };
        }
        function So(t, n) {
          while (t.length < n.length) t = t.concat(t);
          return Math.max.apply(
            null,
            n.map(function(n, e) {
              return Ao(n) + Ao(t[e]);
            })
          );
        }
        function Ao(t) {
          return 1e3 * Number(t.slice(0, -1).replace(',', '.'));
        }
        function Eo(t, n) {
          var e = t.elm;
          i(e._leaveCb) && ((e._leaveCb.cancelled = !0), e._leaveCb());
          var o = uo(t.data.transition);
          if (!r(o) && !i(e._enterCb) && 1 === e.nodeType) {
            var a = o.css,
              u = o.type,
              f = o.enterClass,
              s = o.enterToClass,
              l = o.enterActiveClass,
              h = o.appearClass,
              d = o.appearToClass,
              v = o.appearActiveClass,
              y = o.beforeEnter,
              g = o.enter,
              b = o.afterEnter,
              m = o.enterCancelled,
              _ = o.beforeAppear,
              w = o.appear,
              x = o.afterAppear,
              M = o.appearCancelled,
              S = o.duration,
              A = zn,
              E = zn.$vnode;
            while (E && E.parent) (E = E.parent), (A = E.context);
            var k = !A._isMounted || !t.isRootInsert;
            if (!k || w || '' === w) {
              var C = k && h ? h : f,
                T = k && v ? v : l,
                O = k && d ? d : s,
                N = (k && _) || y,
                P = k && 'function' === typeof w ? w : g,
                R = (k && x) || b,
                j = (k && M) || m,
                L = p(c(S) ? S.enter : S);
              0;
              var I = !1 !== a && !J,
                F = To(P),
                D = (e._enterCb = $(function() {
                  I && (_o(e, O), _o(e, T)), D.cancelled ? (I && _o(e, C), j && j(e)) : R && R(e), (e._enterCb = null);
                }));
              t.data.show ||
                mn(t, 'insert', function() {
                  var n = e.parentNode,
                    r = n && n._pending && n._pending[t.key];
                  r && r.tag === t.tag && r.elm._leaveCb && r.elm._leaveCb(), P && P(e, D);
                }),
                N && N(e),
                I &&
                  (mo(e, C),
                  mo(e, T),
                  bo(function() {
                    _o(e, C), D.cancelled || (mo(e, O), F || (Co(L) ? setTimeout(D, L) : wo(e, u, D)));
                  })),
                t.data.show && (n && n(), P && P(e, D)),
                I || F || D();
            }
          }
        }
        function ko(t, n) {
          var e = t.elm;
          i(e._enterCb) && ((e._enterCb.cancelled = !0), e._enterCb());
          var o = uo(t.data.transition);
          if (r(o) || 1 !== e.nodeType) return n();
          if (!i(e._leaveCb)) {
            var a = o.css,
              u = o.type,
              f = o.leaveClass,
              s = o.leaveToClass,
              l = o.leaveActiveClass,
              h = o.beforeLeave,
              d = o.leave,
              v = o.afterLeave,
              y = o.leaveCancelled,
              g = o.delayLeave,
              b = o.duration,
              m = !1 !== a && !J,
              _ = To(d),
              w = p(c(b) ? b.leave : b);
            0;
            var x = (e._leaveCb = $(function() {
              e.parentNode && e.parentNode._pending && (e.parentNode._pending[t.key] = null),
                m && (_o(e, s), _o(e, l)),
                x.cancelled ? (m && _o(e, f), y && y(e)) : (n(), v && v(e)),
                (e._leaveCb = null);
            }));
            g ? g(M) : M();
          }
          function M() {
            x.cancelled ||
              (!t.data.show && e.parentNode && ((e.parentNode._pending || (e.parentNode._pending = {}))[t.key] = t),
              h && h(e),
              m &&
                (mo(e, f),
                mo(e, l),
                bo(function() {
                  _o(e, f), x.cancelled || (mo(e, s), _ || (Co(w) ? setTimeout(x, w) : wo(e, u, x)));
                })),
              d && d(e, x),
              m || _ || x());
          }
        }
        function Co(t) {
          return 'number' === typeof t && !isNaN(t);
        }
        function To(t) {
          if (r(t)) return !1;
          var n = t.fns;
          return i(n) ? To(Array.isArray(n) ? n[0] : n) : (t._length || t.length) > 1;
        }
        function Oo(t, n) {
          !0 !== n.data.show && Eo(n);
        }
        var No = W
            ? {
                create: Oo,
                activate: Oo,
                remove: function(t, n) {
                  !0 !== t.data.show ? ko(t, n) : n();
                },
              }
            : {},
          Po = [Ti, Pi, zi, Hi, ro, No],
          Ro = Po.concat(Ai),
          jo = gi({ nodeOps: fi, modules: Ro });
        J &&
          document.addEventListener('selectionchange', function() {
            var t = document.activeElement;
            t && t.vmodel && Bo(t, 'input');
          });
        var Lo = {
          inserted: function(t, n, e, r) {
            'select' === e.tag
              ? (r.elm && !r.elm._vOptions
                  ? mn(e, 'postpatch', function() {
                      Lo.componentUpdated(t, n, e);
                    })
                  : Io(t, n, e.context),
                (t._vOptions = [].map.call(t.options, Do)))
              : ('textarea' === e.tag || Xr(t.type)) &&
                ((t._vModifiers = n.modifiers),
                n.modifiers.lazy ||
                  (t.addEventListener('compositionstart', zo),
                  t.addEventListener('compositionend', Uo),
                  t.addEventListener('change', Uo),
                  J && (t.vmodel = !0)));
          },
          componentUpdated: function(t, n, e) {
            if ('select' === e.tag) {
              Io(t, n, e.context);
              var r = t._vOptions,
                i = (t._vOptions = [].map.call(t.options, Do));
              if (
                i.some(function(t, n) {
                  return !L(t, r[n]);
                })
              ) {
                var o = t.multiple
                  ? n.value.some(function(t) {
                      return Fo(t, i);
                    })
                  : n.value !== n.oldValue && Fo(n.value, i);
                o && Bo(t, 'change');
              }
            }
          },
        };
        function Io(t, n, e) {
          $o(t, n, e),
            (Z || tt) &&
              setTimeout(function() {
                $o(t, n, e);
              }, 0);
        }
        function $o(t, n, e) {
          var r = n.value,
            i = t.multiple;
          if (!i || Array.isArray(r)) {
            for (var o, a, u = 0, c = t.options.length; u < c; u++)
              if (((a = t.options[u]), i)) (o = I(r, Do(a)) > -1), a.selected !== o && (a.selected = o);
              else if (L(Do(a), r)) return void (t.selectedIndex !== u && (t.selectedIndex = u));
            i || (t.selectedIndex = -1);
          }
        }
        function Fo(t, n) {
          return n.every(function(n) {
            return !L(n, t);
          });
        }
        function Do(t) {
          return '_value' in t ? t._value : t.value;
        }
        function zo(t) {
          t.target.composing = !0;
        }
        function Uo(t) {
          t.target.composing && ((t.target.composing = !1), Bo(t.target, 'input'));
        }
        function Bo(t, n) {
          var e = document.createEvent('HTMLEvents');
          e.initEvent(n, !0, !0), t.dispatchEvent(e);
        }
        function qo(t) {
          return !t.componentInstance || (t.data && t.data.transition) ? t : qo(t.componentInstance._vnode);
        }
        var Vo = {
            bind: function(t, n, e) {
              var r = n.value;
              e = qo(e);
              var i = e.data && e.data.transition,
                o = (t.__vOriginalDisplay = 'none' === t.style.display ? '' : t.style.display);
              r && i
                ? ((e.data.show = !0),
                  Eo(e, function() {
                    t.style.display = o;
                  }))
                : (t.style.display = r ? o : 'none');
            },
            update: function(t, n, e) {
              var r = n.value,
                i = n.oldValue;
              if (!r !== !i) {
                e = qo(e);
                var o = e.data && e.data.transition;
                o
                  ? ((e.data.show = !0),
                    r
                      ? Eo(e, function() {
                          t.style.display = t.__vOriginalDisplay;
                        })
                      : ko(e, function() {
                          t.style.display = 'none';
                        }))
                  : (t.style.display = r ? t.__vOriginalDisplay : 'none');
              }
            },
            unbind: function(t, n, e, r, i) {
              i || (t.style.display = t.__vOriginalDisplay);
            },
          },
          Ho = { model: Lo, show: Vo },
          Yo = {
            name: String,
            appear: Boolean,
            css: Boolean,
            mode: String,
            type: String,
            enterClass: String,
            leaveClass: String,
            enterToClass: String,
            leaveToClass: String,
            enterActiveClass: String,
            leaveActiveClass: String,
            appearClass: String,
            appearActiveClass: String,
            appearToClass: String,
            duration: [Number, String, Object],
          };
        function Go(t) {
          var n = t && t.componentOptions;
          return n && n.Ctor.options.abstract ? Go(On(n.children)) : t;
        }
        function Wo(t) {
          var n = {},
            e = t.$options;
          for (var r in e.propsData) n[r] = t[r];
          var i = e._parentListeners;
          for (var o in i) n[x(o)] = i[o];
          return n;
        }
        function Xo(t, n) {
          if (/\d-keep-alive$/.test(n.tag)) return t('keep-alive', { props: n.componentOptions.propsData });
        }
        function Ko(t) {
          while ((t = t.parent)) if (t.data.transition) return !0;
        }
        function Qo(t, n) {
          return n.key === t.key && n.tag === t.tag;
        }
        var Zo = function(t) {
            return t.tag || Tn(t);
          },
          Jo = function(t) {
            return 'show' === t.name;
          },
          ta = {
            name: 'transition',
            props: Yo,
            abstract: !0,
            render: function(t) {
              var n = this,
                e = this.$slots.default;
              if (e && ((e = e.filter(Zo)), e.length)) {
                0;
                var r = this.mode;
                0;
                var i = e[0];
                if (Ko(this.$vnode)) return i;
                var o = Go(i);
                if (!o) return i;
                if (this._leaving) return Xo(t, i);
                var a = '__transition-' + this._uid + '-';
                o.key =
                  null == o.key
                    ? o.isComment
                      ? a + 'comment'
                      : a + o.tag
                    : u(o.key)
                      ? 0 === String(o.key).indexOf(a)
                        ? o.key
                        : a + o.key
                      : o.key;
                var c = ((o.data || (o.data = {})).transition = Wo(this)),
                  f = this._vnode,
                  s = Go(f);
                if (
                  (o.data.directives && o.data.directives.some(Jo) && (o.data.show = !0),
                  s && s.data && !Qo(o, s) && !Tn(s) && (!s.componentInstance || !s.componentInstance._vnode.isComment))
                ) {
                  var l = (s.data.transition = O({}, c));
                  if ('out-in' === r)
                    return (
                      (this._leaving = !0),
                      mn(l, 'afterLeave', function() {
                        (n._leaving = !1), n.$forceUpdate();
                      }),
                      Xo(t, i)
                    );
                  if ('in-out' === r) {
                    if (Tn(o)) return f;
                    var h,
                      d = function() {
                        h();
                      };
                    mn(c, 'afterEnter', d),
                      mn(c, 'enterCancelled', d),
                      mn(l, 'delayLeave', function(t) {
                        h = t;
                      });
                  }
                }
                return i;
              }
            },
          },
          na = O({ tag: String, moveClass: String }, Yo);
        delete na.mode;
        var ea = {
          props: na,
          beforeMount: function() {
            var t = this,
              n = this._update;
            this._update = function(e, r) {
              var i = Un(t);
              t.__patch__(t._vnode, t.kept, !1, !0), (t._vnode = t.kept), i(), n.call(t, e, r);
            };
          },
          render: function(t) {
            for (
              var n = this.tag || this.$vnode.data.tag || 'span',
                e = Object.create(null),
                r = (this.prevChildren = this.children),
                i = this.$slots.default || [],
                o = (this.children = []),
                a = Wo(this),
                u = 0;
              u < i.length;
              u++
            ) {
              var c = i[u];
              if (c.tag)
                if (null != c.key && 0 !== String(c.key).indexOf('__vlist'))
                  o.push(c), (e[c.key] = c), ((c.data || (c.data = {})).transition = a);
                else;
            }
            if (r) {
              for (var f = [], s = [], l = 0; l < r.length; l++) {
                var h = r[l];
                (h.data.transition = a), (h.data.pos = h.elm.getBoundingClientRect()), e[h.key] ? f.push(h) : s.push(h);
              }
              (this.kept = t(n, null, f)), (this.removed = s);
            }
            return t(n, null, o);
          },
          updated: function() {
            var t = this.prevChildren,
              n = this.moveClass || (this.name || 'v') + '-move';
            t.length &&
              this.hasMove(t[0].elm, n) &&
              (t.forEach(ra),
              t.forEach(ia),
              t.forEach(oa),
              (this._reflow = document.body.offsetHeight),
              t.forEach(function(t) {
                if (t.data.moved) {
                  var e = t.elm,
                    r = e.style;
                  mo(e, n),
                    (r.transform = r.WebkitTransform = r.transitionDuration = ''),
                    e.addEventListener(
                      po,
                      (e._moveCb = function t(r) {
                        (r && r.target !== e) ||
                          (r && !/transform$/.test(r.propertyName)) ||
                          (e.removeEventListener(po, t), (e._moveCb = null), _o(e, n));
                      })
                    );
                }
              }));
          },
          methods: {
            hasMove: function(t, n) {
              if (!fo) return !1;
              if (this._hasMove) return this._hasMove;
              var e = t.cloneNode();
              t._transitionClasses &&
                t._transitionClasses.forEach(function(t) {
                  ao(e, t);
                }),
                oo(e, n),
                (e.style.display = 'none'),
                this.$el.appendChild(e);
              var r = Mo(e);
              return this.$el.removeChild(e), (this._hasMove = r.hasTransform);
            },
          },
        };
        function ra(t) {
          t.elm._moveCb && t.elm._moveCb(), t.elm._enterCb && t.elm._enterCb();
        }
        function ia(t) {
          t.data.newPos = t.elm.getBoundingClientRect();
        }
        function oa(t) {
          var n = t.data.pos,
            e = t.data.newPos,
            r = n.left - e.left,
            i = n.top - e.top;
          if (r || i) {
            t.data.moved = !0;
            var o = t.elm.style;
            (o.transform = o.WebkitTransform = 'translate(' + r + 'px,' + i + 'px)'), (o.transitionDuration = '0s');
          }
        }
        var aa = { Transition: ta, TransitionGroup: ea };
        (lr.config.mustUseProp = Cr),
          (lr.config.isReservedTag = Hr),
          (lr.config.isReservedAttr = Er),
          (lr.config.getTagNamespace = Yr),
          (lr.config.isUnknownElement = Wr),
          O(lr.options.directives, Ho),
          O(lr.options.components, aa),
          (lr.prototype.__patch__ = W ? jo : P),
          (lr.prototype.$mount = function(t, n) {
            return (t = t && W ? Kr(t) : void 0), Vn(this, t, n);
          }),
          W &&
            setTimeout(function() {
              U.devtools && at && at.emit('init', lr);
            }, 0),
          (n['a'] = lr);
      }.call(this, e('c8ba')));
    },
    '2b4c': function(t, n, e) {
      var r = e('5537')('wks'),
        i = e('ca5a'),
        o = e('7726').Symbol,
        a = 'function' == typeof o,
        u = (t.exports = function(t) {
          return r[t] || (r[t] = (a && o[t]) || (a ? o : i)('Symbol.' + t));
        });
      u.store = r;
    },
    '2d00': function(t, n) {
      t.exports = !1;
    },
    '2d34': function(t, n, e) {
      var r = e('5ca1'),
        i = e('38fd'),
        o = e('cb7c');
      r(r.S, 'Reflect', {
        getPrototypeOf: function(t) {
          return i(o(t));
        },
      });
    },
    '2d5c': function(t, n) {
      var e = Math.expm1;
      t.exports =
        !e || e(10) > 22025.465794806718 || e(10) < 22025.465794806718 || -2e-17 != e(-2e-17)
          ? function(t) {
              return 0 == (t = +t) ? t : t > -1e-6 && t < 1e-6 ? t + (t * t) / 2 : Math.exp(t) - 1;
            }
          : e;
    },
    '2d95': function(t, n) {
      var e = {}.toString;
      t.exports = function(t) {
        return e.call(t).slice(8, -1);
      };
    },
    '2e08': function(t, n, e) {
      var r = e('9def'),
        i = e('9744'),
        o = e('be13');
      t.exports = function(t, n, e, a) {
        var u = String(o(t)),
          c = u.length,
          f = void 0 === e ? ' ' : String(e),
          s = r(n);
        if (s <= c || '' == f) return u;
        var l = s - c,
          h = i.call(f, Math.ceil(l / f.length));
        return h.length > l && (h = h.slice(0, l)), a ? h + u : u + h;
      };
    },
    '2e37': function(t, n, e) {
      var r = e('5ca1');
      r(r.S, 'Number', { EPSILON: Math.pow(2, -52) });
    },
    '2f21': function(t, n, e) {
      'use strict';
      var r = e('79e5');
      t.exports = function(t, n) {
        return (
          !!t &&
          r(function() {
            n ? t.call(null, function() {}, 1) : t.call(null);
          })
        );
      };
    },
    '2f62': function(t, n, e) {
      'use strict';
      /**
       * vuex v3.0.1
       * (c) 2017 Evan You
       * @license MIT
       */ var r = function(t) {
          var n = Number(t.version.split('.')[0]);
          if (n >= 2) t.mixin({ beforeCreate: r });
          else {
            var e = t.prototype._init;
            t.prototype._init = function(t) {
              void 0 === t && (t = {}), (t.init = t.init ? [r].concat(t.init) : r), e.call(this, t);
            };
          }
          function r() {
            var t = this.$options;
            t.store
              ? (this.$store = 'function' === typeof t.store ? t.store() : t.store)
              : t.parent && t.parent.$store && (this.$store = t.parent.$store);
          }
        },
        i = 'undefined' !== typeof window && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;
      function o(t) {
        i &&
          ((t._devtoolHook = i),
          i.emit('vuex:init', t),
          i.on('vuex:travel-to-state', function(n) {
            t.replaceState(n);
          }),
          t.subscribe(function(t, n) {
            i.emit('vuex:mutation', t, n);
          }));
      }
      function a(t, n) {
        Object.keys(t).forEach(function(e) {
          return n(t[e], e);
        });
      }
      function u(t) {
        return null !== t && 'object' === typeof t;
      }
      function c(t) {
        return t && 'function' === typeof t.then;
      }
      var f = function(t, n) {
          (this.runtime = n), (this._children = Object.create(null)), (this._rawModule = t);
          var e = t.state;
          this.state = ('function' === typeof e ? e() : e) || {};
        },
        s = { namespaced: { configurable: !0 } };
      (s.namespaced.get = function() {
        return !!this._rawModule.namespaced;
      }),
        (f.prototype.addChild = function(t, n) {
          this._children[t] = n;
        }),
        (f.prototype.removeChild = function(t) {
          delete this._children[t];
        }),
        (f.prototype.getChild = function(t) {
          return this._children[t];
        }),
        (f.prototype.update = function(t) {
          (this._rawModule.namespaced = t.namespaced),
            t.actions && (this._rawModule.actions = t.actions),
            t.mutations && (this._rawModule.mutations = t.mutations),
            t.getters && (this._rawModule.getters = t.getters);
        }),
        (f.prototype.forEachChild = function(t) {
          a(this._children, t);
        }),
        (f.prototype.forEachGetter = function(t) {
          this._rawModule.getters && a(this._rawModule.getters, t);
        }),
        (f.prototype.forEachAction = function(t) {
          this._rawModule.actions && a(this._rawModule.actions, t);
        }),
        (f.prototype.forEachMutation = function(t) {
          this._rawModule.mutations && a(this._rawModule.mutations, t);
        }),
        Object.defineProperties(f.prototype, s);
      var l = function(t) {
        this.register([], t, !1);
      };
      function h(t, n, e) {
        if ((n.update(e), e.modules))
          for (var r in e.modules) {
            if (!n.getChild(r)) return void 0;
            h(t.concat(r), n.getChild(r), e.modules[r]);
          }
      }
      (l.prototype.get = function(t) {
        return t.reduce(function(t, n) {
          return t.getChild(n);
        }, this.root);
      }),
        (l.prototype.getNamespace = function(t) {
          var n = this.root;
          return t.reduce(function(t, e) {
            return (n = n.getChild(e)), t + (n.namespaced ? e + '/' : '');
          }, '');
        }),
        (l.prototype.update = function(t) {
          h([], this.root, t);
        }),
        (l.prototype.register = function(t, n, e) {
          var r = this;
          void 0 === e && (e = !0);
          var i = new f(n, e);
          if (0 === t.length) this.root = i;
          else {
            var o = this.get(t.slice(0, -1));
            o.addChild(t[t.length - 1], i);
          }
          n.modules &&
            a(n.modules, function(n, i) {
              r.register(t.concat(i), n, e);
            });
        }),
        (l.prototype.unregister = function(t) {
          var n = this.get(t.slice(0, -1)),
            e = t[t.length - 1];
          n.getChild(e).runtime && n.removeChild(e);
        });
      var d;
      var p = function(t) {
          var n = this;
          void 0 === t && (t = {}), !d && 'undefined' !== typeof window && window.Vue && C(window.Vue);
          var e = t.plugins;
          void 0 === e && (e = []);
          var r = t.strict;
          void 0 === r && (r = !1);
          var i = t.state;
          void 0 === i && (i = {}),
            'function' === typeof i && (i = i() || {}),
            (this._committing = !1),
            (this._actions = Object.create(null)),
            (this._actionSubscribers = []),
            (this._mutations = Object.create(null)),
            (this._wrappedGetters = Object.create(null)),
            (this._modules = new l(t)),
            (this._modulesNamespaceMap = Object.create(null)),
            (this._subscribers = []),
            (this._watcherVM = new d());
          var a = this,
            u = this,
            c = u.dispatch,
            f = u.commit;
          (this.dispatch = function(t, n) {
            return c.call(a, t, n);
          }),
            (this.commit = function(t, n, e) {
              return f.call(a, t, n, e);
            }),
            (this.strict = r),
            m(this, i, [], this._modules.root),
            b(this, i),
            e.forEach(function(t) {
              return t(n);
            }),
            d.config.devtools && o(this);
        },
        v = { state: { configurable: !0 } };
      function y(t, n) {
        return (
          n.indexOf(t) < 0 && n.push(t),
          function() {
            var e = n.indexOf(t);
            e > -1 && n.splice(e, 1);
          }
        );
      }
      function g(t, n) {
        (t._actions = Object.create(null)),
          (t._mutations = Object.create(null)),
          (t._wrappedGetters = Object.create(null)),
          (t._modulesNamespaceMap = Object.create(null));
        var e = t.state;
        m(t, e, [], t._modules.root, !0), b(t, e, n);
      }
      function b(t, n, e) {
        var r = t._vm;
        t.getters = {};
        var i = t._wrappedGetters,
          o = {};
        a(i, function(n, e) {
          (o[e] = function() {
            return n(t);
          }),
            Object.defineProperty(t.getters, e, {
              get: function() {
                return t._vm[e];
              },
              enumerable: !0,
            });
        });
        var u = d.config.silent;
        (d.config.silent = !0),
          (t._vm = new d({ data: { $$state: n }, computed: o })),
          (d.config.silent = u),
          t.strict && A(t),
          r &&
            (e &&
              t._withCommit(function() {
                r._data.$$state = null;
              }),
            d.nextTick(function() {
              return r.$destroy();
            }));
      }
      function m(t, n, e, r, i) {
        var o = !e.length,
          a = t._modules.getNamespace(e);
        if ((r.namespaced && (t._modulesNamespaceMap[a] = r), !o && !i)) {
          var u = E(n, e.slice(0, -1)),
            c = e[e.length - 1];
          t._withCommit(function() {
            d.set(u, c, r.state);
          });
        }
        var f = (r.context = _(t, a, e));
        r.forEachMutation(function(n, e) {
          var r = a + e;
          x(t, r, n, f);
        }),
          r.forEachAction(function(n, e) {
            var r = n.root ? e : a + e,
              i = n.handler || n;
            M(t, r, i, f);
          }),
          r.forEachGetter(function(n, e) {
            var r = a + e;
            S(t, r, n, f);
          }),
          r.forEachChild(function(r, o) {
            m(t, n, e.concat(o), r, i);
          });
      }
      function _(t, n, e) {
        var r = '' === n,
          i = {
            dispatch: r
              ? t.dispatch
              : function(e, r, i) {
                  var o = k(e, r, i),
                    a = o.payload,
                    u = o.options,
                    c = o.type;
                  return (u && u.root) || (c = n + c), t.dispatch(c, a);
                },
            commit: r
              ? t.commit
              : function(e, r, i) {
                  var o = k(e, r, i),
                    a = o.payload,
                    u = o.options,
                    c = o.type;
                  (u && u.root) || (c = n + c), t.commit(c, a, u);
                },
          };
        return (
          Object.defineProperties(i, {
            getters: {
              get: r
                ? function() {
                    return t.getters;
                  }
                : function() {
                    return w(t, n);
                  },
            },
            state: {
              get: function() {
                return E(t.state, e);
              },
            },
          }),
          i
        );
      }
      function w(t, n) {
        var e = {},
          r = n.length;
        return (
          Object.keys(t.getters).forEach(function(i) {
            if (i.slice(0, r) === n) {
              var o = i.slice(r);
              Object.defineProperty(e, o, {
                get: function() {
                  return t.getters[i];
                },
                enumerable: !0,
              });
            }
          }),
          e
        );
      }
      function x(t, n, e, r) {
        var i = t._mutations[n] || (t._mutations[n] = []);
        i.push(function(n) {
          e.call(t, r.state, n);
        });
      }
      function M(t, n, e, r) {
        var i = t._actions[n] || (t._actions[n] = []);
        i.push(function(n, i) {
          var o = e.call(
            t,
            {
              dispatch: r.dispatch,
              commit: r.commit,
              getters: r.getters,
              state: r.state,
              rootGetters: t.getters,
              rootState: t.state,
            },
            n,
            i
          );
          return (
            c(o) || (o = Promise.resolve(o)),
            t._devtoolHook
              ? o.catch(function(n) {
                  throw (t._devtoolHook.emit('vuex:error', n), n);
                })
              : o
          );
        });
      }
      function S(t, n, e, r) {
        t._wrappedGetters[n] ||
          (t._wrappedGetters[n] = function(t) {
            return e(r.state, r.getters, t.state, t.getters);
          });
      }
      function A(t) {
        t._vm.$watch(
          function() {
            return this._data.$$state;
          },
          function() {
            0;
          },
          { deep: !0, sync: !0 }
        );
      }
      function E(t, n) {
        return n.length
          ? n.reduce(function(t, n) {
              return t[n];
            }, t)
          : t;
      }
      function k(t, n, e) {
        return u(t) && t.type && ((e = n), (n = t), (t = t.type)), { type: t, payload: n, options: e };
      }
      function C(t) {
        (d && t === d) || ((d = t), r(d));
      }
      (v.state.get = function() {
        return this._vm._data.$$state;
      }),
        (v.state.set = function(t) {
          0;
        }),
        (p.prototype.commit = function(t, n, e) {
          var r = this,
            i = k(t, n, e),
            o = i.type,
            a = i.payload,
            u = (i.options, { type: o, payload: a }),
            c = this._mutations[o];
          c &&
            (this._withCommit(function() {
              c.forEach(function(t) {
                t(a);
              });
            }),
            this._subscribers.forEach(function(t) {
              return t(u, r.state);
            }));
        }),
        (p.prototype.dispatch = function(t, n) {
          var e = this,
            r = k(t, n),
            i = r.type,
            o = r.payload,
            a = { type: i, payload: o },
            u = this._actions[i];
          if (u)
            return (
              this._actionSubscribers.forEach(function(t) {
                return t(a, e.state);
              }),
              u.length > 1
                ? Promise.all(
                    u.map(function(t) {
                      return t(o);
                    })
                  )
                : u[0](o)
            );
        }),
        (p.prototype.subscribe = function(t) {
          return y(t, this._subscribers);
        }),
        (p.prototype.subscribeAction = function(t) {
          return y(t, this._actionSubscribers);
        }),
        (p.prototype.watch = function(t, n, e) {
          var r = this;
          return this._watcherVM.$watch(
            function() {
              return t(r.state, r.getters);
            },
            n,
            e
          );
        }),
        (p.prototype.replaceState = function(t) {
          var n = this;
          this._withCommit(function() {
            n._vm._data.$$state = t;
          });
        }),
        (p.prototype.registerModule = function(t, n, e) {
          void 0 === e && (e = {}),
            'string' === typeof t && (t = [t]),
            this._modules.register(t, n),
            m(this, this.state, t, this._modules.get(t), e.preserveState),
            b(this, this.state);
        }),
        (p.prototype.unregisterModule = function(t) {
          var n = this;
          'string' === typeof t && (t = [t]),
            this._modules.unregister(t),
            this._withCommit(function() {
              var e = E(n.state, t.slice(0, -1));
              d.delete(e, t[t.length - 1]);
            }),
            g(this);
        }),
        (p.prototype.hotUpdate = function(t) {
          this._modules.update(t), g(this, !0);
        }),
        (p.prototype._withCommit = function(t) {
          var n = this._committing;
          (this._committing = !0), t(), (this._committing = n);
        }),
        Object.defineProperties(p.prototype, v);
      var T = L(function(t, n) {
          var e = {};
          return (
            j(n).forEach(function(n) {
              var r = n.key,
                i = n.val;
              (e[r] = function() {
                var n = this.$store.state,
                  e = this.$store.getters;
                if (t) {
                  var r = I(this.$store, 'mapState', t);
                  if (!r) return;
                  (n = r.context.state), (e = r.context.getters);
                }
                return 'function' === typeof i ? i.call(this, n, e) : n[i];
              }),
                (e[r].vuex = !0);
            }),
            e
          );
        }),
        O = L(function(t, n) {
          var e = {};
          return (
            j(n).forEach(function(n) {
              var r = n.key,
                i = n.val;
              e[r] = function() {
                var n = [],
                  e = arguments.length;
                while (e--) n[e] = arguments[e];
                var r = this.$store.commit;
                if (t) {
                  var o = I(this.$store, 'mapMutations', t);
                  if (!o) return;
                  r = o.context.commit;
                }
                return 'function' === typeof i ? i.apply(this, [r].concat(n)) : r.apply(this.$store, [i].concat(n));
              };
            }),
            e
          );
        }),
        N = L(function(t, n) {
          var e = {};
          return (
            j(n).forEach(function(n) {
              var r = n.key,
                i = n.val;
              (i = t + i),
                (e[r] = function() {
                  if (!t || I(this.$store, 'mapGetters', t)) return this.$store.getters[i];
                }),
                (e[r].vuex = !0);
            }),
            e
          );
        }),
        P = L(function(t, n) {
          var e = {};
          return (
            j(n).forEach(function(n) {
              var r = n.key,
                i = n.val;
              e[r] = function() {
                var n = [],
                  e = arguments.length;
                while (e--) n[e] = arguments[e];
                var r = this.$store.dispatch;
                if (t) {
                  var o = I(this.$store, 'mapActions', t);
                  if (!o) return;
                  r = o.context.dispatch;
                }
                return 'function' === typeof i ? i.apply(this, [r].concat(n)) : r.apply(this.$store, [i].concat(n));
              };
            }),
            e
          );
        }),
        R = function(t) {
          return {
            mapState: T.bind(null, t),
            mapGetters: N.bind(null, t),
            mapMutations: O.bind(null, t),
            mapActions: P.bind(null, t),
          };
        };
      function j(t) {
        return Array.isArray(t)
          ? t.map(function(t) {
              return { key: t, val: t };
            })
          : Object.keys(t).map(function(n) {
              return { key: n, val: t[n] };
            });
      }
      function L(t) {
        return function(n, e) {
          return 'string' !== typeof n ? ((e = n), (n = '')) : '/' !== n.charAt(n.length - 1) && (n += '/'), t(n, e);
        };
      }
      function I(t, n, e) {
        var r = t._modulesNamespaceMap[e];
        return r;
      }
      var $ = {
        Store: p,
        install: C,
        version: '3.0.1',
        mapState: T,
        mapMutations: O,
        mapGetters: N,
        mapActions: P,
        createNamespacedHelpers: R,
      };
      n['a'] = $;
    },
    '2fdb': function(t, n, e) {
      'use strict';
      var r = e('5ca1'),
        i = e('d2c8'),
        o = 'includes';
      r(r.P + r.F * e('5147')(o), 'String', {
        includes: function(t) {
          return !!~i(this, t, o).indexOf(t, arguments.length > 1 ? arguments[1] : void 0);
        },
      });
    },
    '31f4': function(t, n) {
      t.exports = function(t, n, e) {
        var r = void 0 === e;
        switch (n.length) {
          case 0:
            return r ? t() : t.call(e);
          case 1:
            return r ? t(n[0]) : t.call(e, n[0]);
          case 2:
            return r ? t(n[0], n[1]) : t.call(e, n[0], n[1]);
          case 3:
            return r ? t(n[0], n[1], n[2]) : t.call(e, n[0], n[1], n[2]);
          case 4:
            return r ? t(n[0], n[1], n[2], n[3]) : t.call(e, n[0], n[1], n[2], n[3]);
        }
        return t.apply(e, n);
      };
    },
    '32d7': function(t, n, e) {
      var r = e('5ca1');
      r(r.S, 'Math', {
        clz32: function(t) {
          return (t >>>= 0) ? 31 - Math.floor(Math.log(t + 0.5) * Math.LOG2E) : 32;
        },
      });
    },
    '32e9': function(t, n, e) {
      var r = e('86cc'),
        i = e('4630');
      t.exports = e('9e1e')
        ? function(t, n, e) {
            return r.f(t, n, i(1, e));
          }
        : function(t, n, e) {
            return (t[n] = e), t;
          };
    },
    '33a4': function(t, n, e) {
      var r = e('84f2'),
        i = e('2b4c')('iterator'),
        o = Array.prototype;
      t.exports = function(t) {
        return void 0 !== t && (r.Array === t || o[i] === t);
      };
    },
    '34ef': function(t, n, e) {
      e('ec30')('Uint8', 1, function(t) {
        return function(n, e, r) {
          return t(this, n, e, r);
        };
      });
    },
    '36bd': function(t, n, e) {
      'use strict';
      var r = e('4bf8'),
        i = e('77f1'),
        o = e('9def');
      t.exports = function(t) {
        var n = r(this),
          e = o(n.length),
          a = arguments.length,
          u = i(a > 1 ? arguments[1] : void 0, e),
          c = a > 2 ? arguments[2] : void 0,
          f = void 0 === c ? e : i(c, e);
        while (f > u) n[u++] = t;
        return n;
      };
    },
    '37c8': function(t, n, e) {
      n.f = e('2b4c');
    },
    3846: function(t, n, e) {
      e('9e1e') && 'g' != /./g.flags && e('86cc').f(RegExp.prototype, 'flags', { configurable: !0, get: e('0bfb') });
    },
    '386b': function(t, n, e) {
      var r = e('5ca1'),
        i = e('79e5'),
        o = e('be13'),
        a = /"/g,
        u = function(t, n, e, r) {
          var i = String(o(t)),
            u = '<' + n;
          return '' !== e && (u += ' ' + e + '="' + String(r).replace(a, '&quot;') + '"'), u + '>' + i + '</' + n + '>';
        };
      t.exports = function(t, n) {
        var e = {};
        (e[t] = n(u)),
          r(
            r.P +
              r.F *
                i(function() {
                  var n = ''[t]('"');
                  return n !== n.toLowerCase() || n.split('"').length > 3;
                }),
            'String',
            e
          );
      };
    },
    '386d': function(t, n, e) {
      'use strict';
      var r = e('cb7c'),
        i = e('83a1'),
        o = e('5f1b');
      e('214f')('search', 1, function(t, n, e, a) {
        return [
          function(e) {
            var r = t(this),
              i = void 0 == e ? void 0 : e[n];
            return void 0 !== i ? i.call(e, r) : new RegExp(e)[n](String(r));
          },
          function(t) {
            var n = a(e, t, this);
            if (n.done) return n.value;
            var u = r(t),
              c = String(this),
              f = u.lastIndex;
            i(f, 0) || (u.lastIndex = 0);
            var s = o(u, c);
            return i(u.lastIndex, f) || (u.lastIndex = f), null === s ? -1 : s.index;
          },
        ];
      });
    },
    '38fd': function(t, n, e) {
      var r = e('69a8'),
        i = e('4bf8'),
        o = e('613b')('IE_PROTO'),
        a = Object.prototype;
      t.exports =
        Object.getPrototypeOf ||
        function(t) {
          return (
            (t = i(t)),
            r(t, o)
              ? t[o]
              : 'function' == typeof t.constructor && t instanceof t.constructor
                ? t.constructor.prototype
                : t instanceof Object
                  ? a
                  : null
          );
        };
    },
    '3a72': function(t, n, e) {
      var r = e('7726'),
        i = e('8378'),
        o = e('2d00'),
        a = e('37c8'),
        u = e('86cc').f;
      t.exports = function(t) {
        var n = i.Symbol || (i.Symbol = o ? {} : r.Symbol || {});
        '_' == t.charAt(0) || t in n || u(n, t, { value: a.f(t) });
      };
    },
    '3b2b': function(t, n, e) {
      var r = e('7726'),
        i = e('5dbc'),
        o = e('86cc').f,
        a = e('9093').f,
        u = e('aae3'),
        c = e('0bfb'),
        f = r.RegExp,
        s = f,
        l = f.prototype,
        h = /a/g,
        d = /a/g,
        p = new f(h) !== h;
      if (
        e('9e1e') &&
        (!p ||
          e('79e5')(function() {
            return (d[e('2b4c')('match')] = !1), f(h) != h || f(d) == d || '/a/i' != f(h, 'i');
          }))
      ) {
        f = function(t, n) {
          var e = this instanceof f,
            r = u(t),
            o = void 0 === n;
          return !e && r && t.constructor === f && o
            ? t
            : i(
                p ? new s(r && !o ? t.source : t, n) : s((r = t instanceof f) ? t.source : t, r && o ? c.call(t) : n),
                e ? this : l,
                f
              );
        };
        for (
          var v = function(t) {
              (t in f) ||
                o(f, t, {
                  configurable: !0,
                  get: function() {
                    return s[t];
                  },
                  set: function(n) {
                    s[t] = n;
                  },
                });
            },
            y = a(s),
            g = 0;
          y.length > g;

        )
          v(y[g++]);
        (l.constructor = f), (f.prototype = l), e('2aba')(r, 'RegExp', f);
      }
      e('7a56')('RegExp');
    },
    '3ca5': function(t, n, e) {
      var r = e('7726').parseInt,
        i = e('aa77').trim,
        o = e('fdef'),
        a = /^[-+]?0[xX]/;
      t.exports =
        8 !== r(o + '08') || 22 !== r(o + '0x16')
          ? function(t, n) {
              var e = i(String(t), 3);
              return r(e, n >>> 0 || (a.test(e) ? 16 : 10));
            }
          : r;
    },
    '41a0': function(t, n, e) {
      'use strict';
      var r = e('2aeb'),
        i = e('4630'),
        o = e('7f20'),
        a = {};
      e('32e9')(a, e('2b4c')('iterator'), function() {
        return this;
      }),
        (t.exports = function(t, n, e) {
          (t.prototype = r(a, { next: i(1, e) })), o(t, n + ' Iterator');
        });
    },
    4504: function(t, n, e) {
      'use strict';
      var r = e('5ca1'),
        i = e('4bf8'),
        o = e('d8e8'),
        a = e('86cc');
      e('9e1e') &&
        r(r.P + e('c5b4'), 'Object', {
          __defineGetter__: function(t, n) {
            a.f(i(this), t, { get: o(n), enumerable: !0, configurable: !0 });
          },
        });
    },
    '456d': function(t, n, e) {
      var r = e('4bf8'),
        i = e('0d58');
      e('5eda')('keys', function() {
        return function(t) {
          return i(r(t));
        };
      });
    },
    4588: function(t, n) {
      var e = Math.ceil,
        r = Math.floor;
      t.exports = function(t) {
        return isNaN((t = +t)) ? 0 : (t > 0 ? r : e)(t);
      };
    },
    4630: function(t, n) {
      t.exports = function(t, n) {
        return { enumerable: !(1 & t), configurable: !(2 & t), writable: !(4 & t), value: n };
      };
    },
    4795: function(t, n, e) {
      var r = e('7726'),
        i = e('5ca1'),
        o = e('a25f'),
        a = [].slice,
        u = /MSIE .\./.test(o),
        c = function(t) {
          return function(n, e) {
            var r = arguments.length > 2,
              i = !!r && a.call(arguments, 2);
            return t(
              r
                ? function() {
                    ('function' == typeof n ? n : Function(n)).apply(this, i);
                  }
                : n,
              e
            );
          };
        };
      i(i.G + i.B + i.F * u, { setTimeout: c(r.setTimeout), setInterval: c(r.setInterval) });
    },
    '48c0': function(t, n, e) {
      'use strict';
      e('386b')('bold', function(t) {
        return function() {
          return t(this, 'b', '', '');
        };
      });
    },
    4917: function(t, n, e) {
      'use strict';
      var r = e('cb7c'),
        i = e('9def'),
        o = e('0390'),
        a = e('5f1b');
      e('214f')('match', 1, function(t, n, e, u) {
        return [
          function(e) {
            var r = t(this),
              i = void 0 == e ? void 0 : e[n];
            return void 0 !== i ? i.call(e, r) : new RegExp(e)[n](String(r));
          },
          function(t) {
            var n = u(e, t, this);
            if (n.done) return n.value;
            var c = r(t),
              f = String(this);
            if (!c.global) return a(c, f);
            var s = c.unicode;
            c.lastIndex = 0;
            var l,
              h = [],
              d = 0;
            while (null !== (l = a(c, f))) {
              var p = String(l[0]);
              (h[d] = p), '' === p && (c.lastIndex = o(f, i(c.lastIndex), s)), d++;
            }
            return 0 === d ? null : h;
          },
        ];
      });
    },
    '4a59': function(t, n, e) {
      var r = e('9b43'),
        i = e('1fa8'),
        o = e('33a4'),
        a = e('cb7c'),
        u = e('9def'),
        c = e('27ee'),
        f = {},
        s = {};
      n = t.exports = function(t, n, e, l, h) {
        var d,
          p,
          v,
          y,
          g = h
            ? function() {
                return t;
              }
            : c(t),
          b = r(e, l, n ? 2 : 1),
          m = 0;
        if ('function' != typeof g) throw TypeError(t + ' is not iterable!');
        if (o(g)) {
          for (d = u(t.length); d > m; m++)
            if (((y = n ? b(a((p = t[m]))[0], p[1]) : b(t[m])), y === f || y === s)) return y;
        } else
          for (v = g.call(t); !(p = v.next()).done; ) if (((y = i(v, b, p.value, n)), y === f || y === s)) return y;
      };
      (n.BREAK = f), (n.RETURN = s);
    },
    '4bf8': function(t, n, e) {
      var r = e('be13');
      t.exports = function(t) {
        return Object(r(t));
      };
    },
    '4dda': function(t, n, e) {
      e('ec30')('Float64', 8, function(t) {
        return function(n, e, r) {
          return t(this, n, e, r);
        };
      });
    },
    '4f7f': function(t, n, e) {
      'use strict';
      var r = e('c26b'),
        i = e('b39a'),
        o = 'Set';
      t.exports = e('e0b8')(
        o,
        function(t) {
          return function() {
            return t(this, arguments.length > 0 ? arguments[0] : void 0);
          };
        },
        {
          add: function(t) {
            return r.def(i(this, o), (t = 0 === t ? 0 : t), t);
          },
        },
        r
      );
    },
    '504c': function(t, n, e) {
      var r = e('0d58'),
        i = e('6821'),
        o = e('52a7').f;
      t.exports = function(t) {
        return function(n) {
          var e,
            a = i(n),
            u = r(a),
            c = u.length,
            f = 0,
            s = [];
          while (c > f) o.call(a, (e = u[f++])) && s.push(t ? [e, a[e]] : a[e]);
          return s;
        };
      };
    },
    5147: function(t, n, e) {
      var r = e('2b4c')('match');
      t.exports = function(t) {
        var n = /./;
        try {
          '/./'[t](n);
        } catch (e) {
          try {
            return (n[r] = !1), !'/./'[t](n);
          } catch (i) {}
        }
        return !0;
      };
    },
    '520a': function(t, n, e) {
      'use strict';
      var r = e('0bfb'),
        i = RegExp.prototype.exec,
        o = String.prototype.replace,
        a = i,
        u = 'lastIndex',
        c = (function() {
          var t = /a/,
            n = /b*/g;
          return i.call(t, 'a'), i.call(n, 'a'), 0 !== t[u] || 0 !== n[u];
        })(),
        f = void 0 !== /()??/.exec('')[1],
        s = c || f;
      s &&
        (a = function(t) {
          var n,
            e,
            a,
            s,
            l = this;
          return (
            f && (e = new RegExp('^' + l.source + '$(?!\\s)', r.call(l))),
            c && (n = l[u]),
            (a = i.call(l, t)),
            c && a && (l[u] = l.global ? a.index + a[0].length : n),
            f &&
              a &&
              a.length > 1 &&
              o.call(a[0], e, function() {
                for (s = 1; s < arguments.length - 2; s++) void 0 === arguments[s] && (a[s] = void 0);
              }),
            a
          );
        }),
        (t.exports = a);
    },
    '52a7': function(t, n) {
      n.f = {}.propertyIsEnumerable;
    },
    '536b': function(t, n, e) {
      var r = e('5ca1'),
        i = Math.asinh;
      function o(t) {
        return isFinite((t = +t)) && 0 != t ? (t < 0 ? -o(-t) : Math.log(t + Math.sqrt(t * t + 1))) : t;
      }
      r(r.S + r.F * !(i && 1 / i(0) > 0), 'Math', { asinh: o });
    },
    '551c': function(t, n, e) {
      'use strict';
      var r,
        i,
        o,
        a,
        u = e('2d00'),
        c = e('7726'),
        f = e('9b43'),
        s = e('23c6'),
        l = e('5ca1'),
        h = e('d3f4'),
        d = e('d8e8'),
        p = e('f605'),
        v = e('4a59'),
        y = e('ebd6'),
        g = e('1991').set,
        b = e('8079')(),
        m = e('a5b8'),
        _ = e('9c80'),
        w = e('a25f'),
        x = e('bcaa'),
        M = 'Promise',
        S = c.TypeError,
        A = c.process,
        E = A && A.versions,
        k = (E && E.v8) || '',
        C = c[M],
        T = 'process' == s(A),
        O = function() {},
        N = (i = m.f),
        P = !!(function() {
          try {
            var t = C.resolve(1),
              n = ((t.constructor = {})[e('2b4c')('species')] = function(t) {
                t(O, O);
              });
            return (
              (T || 'function' == typeof PromiseRejectionEvent) &&
              t.then(O) instanceof n &&
              0 !== k.indexOf('6.6') &&
              -1 === w.indexOf('Chrome/66')
            );
          } catch (r) {}
        })(),
        R = function(t) {
          var n;
          return !(!h(t) || 'function' != typeof (n = t.then)) && n;
        },
        j = function(t, n) {
          if (!t._n) {
            t._n = !0;
            var e = t._c;
            b(function() {
              var r = t._v,
                i = 1 == t._s,
                o = 0,
                a = function(n) {
                  var e,
                    o,
                    a,
                    u = i ? n.ok : n.fail,
                    c = n.resolve,
                    f = n.reject,
                    s = n.domain;
                  try {
                    u
                      ? (i || (2 == t._h && $(t), (t._h = 1)),
                        !0 === u ? (e = r) : (s && s.enter(), (e = u(r)), s && (s.exit(), (a = !0))),
                        e === n.promise ? f(S('Promise-chain cycle')) : (o = R(e)) ? o.call(e, c, f) : c(e))
                      : f(r);
                  } catch (l) {
                    s && !a && s.exit(), f(l);
                  }
                };
              while (e.length > o) a(e[o++]);
              (t._c = []), (t._n = !1), n && !t._h && L(t);
            });
          }
        },
        L = function(t) {
          g.call(c, function() {
            var n,
              e,
              r,
              i = t._v,
              o = I(t);
            if (
              (o &&
                ((n = _(function() {
                  T
                    ? A.emit('unhandledRejection', i, t)
                    : (e = c.onunhandledrejection)
                      ? e({ promise: t, reason: i })
                      : (r = c.console) && r.error && r.error('Unhandled promise rejection', i);
                })),
                (t._h = T || I(t) ? 2 : 1)),
              (t._a = void 0),
              o && n.e)
            )
              throw n.v;
          });
        },
        I = function(t) {
          return 1 !== t._h && 0 === (t._a || t._c).length;
        },
        $ = function(t) {
          g.call(c, function() {
            var n;
            T ? A.emit('rejectionHandled', t) : (n = c.onrejectionhandled) && n({ promise: t, reason: t._v });
          });
        },
        F = function(t) {
          var n = this;
          n._d || ((n._d = !0), (n = n._w || n), (n._v = t), (n._s = 2), n._a || (n._a = n._c.slice()), j(n, !0));
        },
        D = function(t) {
          var n,
            e = this;
          if (!e._d) {
            (e._d = !0), (e = e._w || e);
            try {
              if (e === t) throw S("Promise can't be resolved itself");
              (n = R(t))
                ? b(function() {
                    var r = { _w: e, _d: !1 };
                    try {
                      n.call(t, f(D, r, 1), f(F, r, 1));
                    } catch (i) {
                      F.call(r, i);
                    }
                  })
                : ((e._v = t), (e._s = 1), j(e, !1));
            } catch (r) {
              F.call({ _w: e, _d: !1 }, r);
            }
          }
        };
      P ||
        ((C = function(t) {
          p(this, C, M, '_h'), d(t), r.call(this);
          try {
            t(f(D, this, 1), f(F, this, 1));
          } catch (n) {
            F.call(this, n);
          }
        }),
        (r = function(t) {
          (this._c = []),
            (this._a = void 0),
            (this._s = 0),
            (this._d = !1),
            (this._v = void 0),
            (this._h = 0),
            (this._n = !1);
        }),
        (r.prototype = e('dcbc')(C.prototype, {
          then: function(t, n) {
            var e = N(y(this, C));
            return (
              (e.ok = 'function' != typeof t || t),
              (e.fail = 'function' == typeof n && n),
              (e.domain = T ? A.domain : void 0),
              this._c.push(e),
              this._a && this._a.push(e),
              this._s && j(this, !1),
              e.promise
            );
          },
          catch: function(t) {
            return this.then(void 0, t);
          },
        })),
        (o = function() {
          var t = new r();
          (this.promise = t), (this.resolve = f(D, t, 1)), (this.reject = f(F, t, 1));
        }),
        (m.f = N = function(t) {
          return t === C || t === a ? new o(t) : i(t);
        })),
        l(l.G + l.W + l.F * !P, { Promise: C }),
        e('7f20')(C, M),
        e('7a56')(M),
        (a = e('8378')[M]),
        l(l.S + l.F * !P, M, {
          reject: function(t) {
            var n = N(this),
              e = n.reject;
            return e(t), n.promise;
          },
        }),
        l(l.S + l.F * (u || !P), M, {
          resolve: function(t) {
            return x(u && this === a ? C : this, t);
          },
        }),
        l(
          l.S +
            l.F *
              !(
                P &&
                e('5cc5')(function(t) {
                  C.all(t)['catch'](O);
                })
              ),
          M,
          {
            all: function(t) {
              var n = this,
                e = N(n),
                r = e.resolve,
                i = e.reject,
                o = _(function() {
                  var e = [],
                    o = 0,
                    a = 1;
                  v(t, !1, function(t) {
                    var u = o++,
                      c = !1;
                    e.push(void 0),
                      a++,
                      n.resolve(t).then(function(t) {
                        c || ((c = !0), (e[u] = t), --a || r(e));
                      }, i);
                  }),
                    --a || r(e);
                });
              return o.e && i(o.v), e.promise;
            },
            race: function(t) {
              var n = this,
                e = N(n),
                r = e.reject,
                i = _(function() {
                  v(t, !1, function(t) {
                    n.resolve(t).then(e.resolve, r);
                  });
                });
              return i.e && r(i.v), e.promise;
            },
          }
        );
    },
    5537: function(t, n, e) {
      var r = e('8378'),
        i = e('7726'),
        o = '__core-js_shared__',
        a = i[o] || (i[o] = {});
      (t.exports = function(t, n) {
        return a[t] || (a[t] = void 0 !== n ? n : {});
      })('versions', []).push({
        version: r.version,
        mode: e('2d00') ? 'pure' : 'global',
        copyright: '© 2018 Denis Pushkarev (zloirock.ru)',
      });
    },
    '55dd': function(t, n, e) {
      'use strict';
      var r = e('5ca1'),
        i = e('d8e8'),
        o = e('4bf8'),
        a = e('79e5'),
        u = [].sort,
        c = [1, 2, 3];
      r(
        r.P +
          r.F *
            (a(function() {
              c.sort(void 0);
            }) ||
              !a(function() {
                c.sort(null);
              }) ||
              !e('2f21')(u)),
        'Array',
        {
          sort: function(t) {
            return void 0 === t ? u.call(o(this)) : u.call(o(this), i(t));
          },
        }
      );
    },
    5695: function(t, n, e) {
      var r = e('5ca1'),
        i = e('77f1'),
        o = String.fromCharCode,
        a = String.fromCodePoint;
      r(r.S + r.F * (!!a && 1 != a.length), 'String', {
        fromCodePoint: function(t) {
          var n,
            e = [],
            r = arguments.length,
            a = 0;
          while (r > a) {
            if (((n = +arguments[a++]), i(n, 1114111) !== n)) throw RangeError(n + ' is not a valid code point');
            e.push(n < 65536 ? o(n) : o(55296 + ((n -= 65536) >> 10), (n % 1024) + 56320));
          }
          return e.join('');
        },
      });
    },
    5698: function(t, n, e) {
      'use strict';
      e.r(n);
      var r = '5.7.0',
        i = function(t, n) {
          return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
        },
        o = function(t) {
          return (
            1 === t.length && (t = a(t)),
            {
              left: function(n, e, r, i) {
                null == r && (r = 0), null == i && (i = n.length);
                while (r < i) {
                  var o = (r + i) >>> 1;
                  t(n[o], e) < 0 ? (r = o + 1) : (i = o);
                }
                return r;
              },
              right: function(n, e, r, i) {
                null == r && (r = 0), null == i && (i = n.length);
                while (r < i) {
                  var o = (r + i) >>> 1;
                  t(n[o], e) > 0 ? (i = o) : (r = o + 1);
                }
                return r;
              },
            }
          );
        };
      function a(t) {
        return function(n, e) {
          return i(t(n), e);
        };
      }
      var u = o(i),
        c = u.right,
        f = u.left,
        s = c,
        l = function(t, n) {
          null == n && (n = h);
          var e = 0,
            r = t.length - 1,
            i = t[0],
            o = new Array(r < 0 ? 0 : r);
          while (e < r) o[e] = n(i, (i = t[++e]));
          return o;
        };
      function h(t, n) {
        return [t, n];
      }
      var d = function(t, n, e) {
          var r,
            i,
            o,
            a,
            u = t.length,
            c = n.length,
            f = new Array(u * c);
          for (null == e && (e = h), r = o = 0; r < u; ++r) for (a = t[r], i = 0; i < c; ++i, ++o) f[o] = e(a, n[i]);
          return f;
        },
        p = function(t, n) {
          return n < t ? -1 : n > t ? 1 : n >= t ? 0 : NaN;
        },
        v = function(t) {
          return null === t ? NaN : +t;
        },
        y = function(t, n) {
          var e,
            r,
            i = t.length,
            o = 0,
            a = -1,
            u = 0,
            c = 0;
          if (null == n) while (++a < i) isNaN((e = v(t[a]))) || ((r = e - u), (u += r / ++o), (c += r * (e - u)));
          else while (++a < i) isNaN((e = v(n(t[a], a, t)))) || ((r = e - u), (u += r / ++o), (c += r * (e - u)));
          if (o > 1) return c / (o - 1);
        },
        g = function(t, n) {
          var e = y(t, n);
          return e ? Math.sqrt(e) : e;
        },
        b = function(t, n) {
          var e,
            r,
            i,
            o = t.length,
            a = -1;
          if (null == n) {
            while (++a < o)
              if (null != (e = t[a]) && e >= e) {
                r = i = e;
                while (++a < o) null != (e = t[a]) && (r > e && (r = e), i < e && (i = e));
              }
          } else
            while (++a < o)
              if (null != (e = n(t[a], a, t)) && e >= e) {
                r = i = e;
                while (++a < o) null != (e = n(t[a], a, t)) && (r > e && (r = e), i < e && (i = e));
              }
          return [r, i];
        },
        m = Array.prototype,
        _ = m.slice,
        w = m.map,
        x = function(t) {
          return function() {
            return t;
          };
        },
        M = function(t) {
          return t;
        },
        S = function(t, n, e) {
          (t = +t), (n = +n), (e = (i = arguments.length) < 2 ? ((n = t), (t = 0), 1) : i < 3 ? 1 : +e);
          var r = -1,
            i = 0 | Math.max(0, Math.ceil((n - t) / e)),
            o = new Array(i);
          while (++r < i) o[r] = t + r * e;
          return o;
        },
        A = Math.sqrt(50),
        E = Math.sqrt(10),
        k = Math.sqrt(2),
        C = function(t, n, e) {
          var r,
            i,
            o,
            a,
            u = -1;
          if (((n = +n), (t = +t), (e = +e), t === n && e > 0)) return [t];
          if (((r = n < t) && ((i = t), (t = n), (n = i)), 0 === (a = T(t, n, e)) || !isFinite(a))) return [];
          if (a > 0) {
            (t = Math.ceil(t / a)), (n = Math.floor(n / a)), (o = new Array((i = Math.ceil(n - t + 1))));
            while (++u < i) o[u] = (t + u) * a;
          } else {
            (t = Math.floor(t * a)), (n = Math.ceil(n * a)), (o = new Array((i = Math.ceil(t - n + 1))));
            while (++u < i) o[u] = (t - u) / a;
          }
          return r && o.reverse(), o;
        };
      function T(t, n, e) {
        var r = (n - t) / Math.max(0, e),
          i = Math.floor(Math.log(r) / Math.LN10),
          o = r / Math.pow(10, i);
        return i >= 0
          ? (o >= A ? 10 : o >= E ? 5 : o >= k ? 2 : 1) * Math.pow(10, i)
          : -Math.pow(10, -i) / (o >= A ? 10 : o >= E ? 5 : o >= k ? 2 : 1);
      }
      function O(t, n, e) {
        var r = Math.abs(n - t) / Math.max(0, e),
          i = Math.pow(10, Math.floor(Math.log(r) / Math.LN10)),
          o = r / i;
        return o >= A ? (i *= 10) : o >= E ? (i *= 5) : o >= k && (i *= 2), n < t ? -i : i;
      }
      var N = function(t) {
          return Math.ceil(Math.log(t.length) / Math.LN2) + 1;
        },
        P = function() {
          var t = M,
            n = b,
            e = N;
          function r(r) {
            var i,
              o,
              a = r.length,
              u = new Array(a);
            for (i = 0; i < a; ++i) u[i] = t(r[i], i, r);
            var c = n(u),
              f = c[0],
              l = c[1],
              h = e(u, f, l);
            Array.isArray(h) || ((h = O(f, l, h)), (h = S(Math.ceil(f / h) * h, l, h)));
            var d = h.length;
            while (h[0] <= f) h.shift(), --d;
            while (h[d - 1] > l) h.pop(), --d;
            var p,
              v = new Array(d + 1);
            for (i = 0; i <= d; ++i) (p = v[i] = []), (p.x0 = i > 0 ? h[i - 1] : f), (p.x1 = i < d ? h[i] : l);
            for (i = 0; i < a; ++i) (o = u[i]), f <= o && o <= l && v[s(h, o, 0, d)].push(r[i]);
            return v;
          }
          return (
            (r.value = function(n) {
              return arguments.length ? ((t = 'function' === typeof n ? n : x(n)), r) : t;
            }),
            (r.domain = function(t) {
              return arguments.length ? ((n = 'function' === typeof t ? t : x([t[0], t[1]])), r) : n;
            }),
            (r.thresholds = function(t) {
              return arguments.length
                ? ((e = 'function' === typeof t ? t : Array.isArray(t) ? x(_.call(t)) : x(t)), r)
                : e;
            }),
            r
          );
        },
        R = function(t, n, e) {
          if ((null == e && (e = v), (r = t.length))) {
            if ((n = +n) <= 0 || r < 2) return +e(t[0], 0, t);
            if (n >= 1) return +e(t[r - 1], r - 1, t);
            var r,
              i = (r - 1) * n,
              o = Math.floor(i),
              a = +e(t[o], o, t),
              u = +e(t[o + 1], o + 1, t);
            return a + (u - a) * (i - o);
          }
        },
        j = function(t, n, e) {
          return (
            (t = w.call(t, v).sort(i)),
            Math.ceil((e - n) / (2 * (R(t, 0.75) - R(t, 0.25)) * Math.pow(t.length, -1 / 3)))
          );
        },
        L = function(t, n, e) {
          return Math.ceil((e - n) / (3.5 * g(t) * Math.pow(t.length, -1 / 3)));
        },
        I = function(t, n) {
          var e,
            r,
            i = t.length,
            o = -1;
          if (null == n) {
            while (++o < i)
              if (null != (e = t[o]) && e >= e) {
                r = e;
                while (++o < i) null != (e = t[o]) && e > r && (r = e);
              }
          } else
            while (++o < i)
              if (null != (e = n(t[o], o, t)) && e >= e) {
                r = e;
                while (++o < i) null != (e = n(t[o], o, t)) && e > r && (r = e);
              }
          return r;
        },
        $ = function(t, n) {
          var e,
            r = t.length,
            i = r,
            o = -1,
            a = 0;
          if (null == n) while (++o < r) isNaN((e = v(t[o]))) ? --i : (a += e);
          else while (++o < r) isNaN((e = v(n(t[o], o, t)))) ? --i : (a += e);
          if (i) return a / i;
        },
        F = function(t, n) {
          var e,
            r = t.length,
            o = -1,
            a = [];
          if (null == n) while (++o < r) isNaN((e = v(t[o]))) || a.push(e);
          else while (++o < r) isNaN((e = v(n(t[o], o, t)))) || a.push(e);
          return R(a.sort(i), 0.5);
        },
        D = function(t) {
          var n,
            e,
            r,
            i = t.length,
            o = -1,
            a = 0;
          while (++o < i) a += t[o].length;
          e = new Array(a);
          while (--i >= 0) {
            (r = t[i]), (n = r.length);
            while (--n >= 0) e[--a] = r[n];
          }
          return e;
        },
        z = function(t, n) {
          var e,
            r,
            i = t.length,
            o = -1;
          if (null == n) {
            while (++o < i)
              if (null != (e = t[o]) && e >= e) {
                r = e;
                while (++o < i) null != (e = t[o]) && r > e && (r = e);
              }
          } else
            while (++o < i)
              if (null != (e = n(t[o], o, t)) && e >= e) {
                r = e;
                while (++o < i) null != (e = n(t[o], o, t)) && r > e && (r = e);
              }
          return r;
        },
        U = function(t, n) {
          var e = n.length,
            r = new Array(e);
          while (e--) r[e] = t[n[e]];
          return r;
        },
        B = function(t, n) {
          if ((e = t.length)) {
            var e,
              r,
              o = 0,
              a = 0,
              u = t[a];
            null == n && (n = i);
            while (++o < e) (n((r = t[o]), u) < 0 || 0 !== n(u, u)) && ((u = r), (a = o));
            return 0 === n(u, u) ? a : void 0;
          }
        },
        q = function(t, n, e) {
          var r,
            i,
            o = (null == e ? t.length : e) - (n = null == n ? 0 : +n);
          while (o) (i = (Math.random() * o--) | 0), (r = t[o + n]), (t[o + n] = t[i + n]), (t[i + n] = r);
          return t;
        },
        V = function(t, n) {
          var e,
            r = t.length,
            i = -1,
            o = 0;
          if (null == n) while (++i < r) (e = +t[i]) && (o += e);
          else while (++i < r) (e = +n(t[i], i, t)) && (o += e);
          return o;
        },
        H = function(t) {
          if (!(i = t.length)) return [];
          for (var n = -1, e = z(t, Y), r = new Array(e); ++n < e; )
            for (var i, o = -1, a = (r[n] = new Array(i)); ++o < i; ) a[o] = t[o][n];
          return r;
        };
      function Y(t) {
        return t.length;
      }
      var G = function() {
          return H(arguments);
        },
        W = Array.prototype.slice,
        X = function(t) {
          return t;
        },
        K = 1,
        Q = 2,
        Z = 3,
        J = 4,
        tt = 1e-6;
      function nt(t) {
        return 'translate(' + (t + 0.5) + ',0)';
      }
      function et(t) {
        return 'translate(0,' + (t + 0.5) + ')';
      }
      function rt(t) {
        return function(n) {
          return +t(n);
        };
      }
      function it(t) {
        var n = Math.max(0, t.bandwidth() - 1) / 2;
        return (
          t.round() && (n = Math.round(n)),
          function(e) {
            return +t(e) + n;
          }
        );
      }
      function ot() {
        return !this.__axis;
      }
      function at(t, n) {
        var e = [],
          r = null,
          i = null,
          o = 6,
          a = 6,
          u = 3,
          c = t === K || t === J ? -1 : 1,
          f = t === J || t === Q ? 'x' : 'y',
          s = t === K || t === Z ? nt : et;
        function l(l) {
          var h = null == r ? (n.ticks ? n.ticks.apply(n, e) : n.domain()) : r,
            d = null == i ? (n.tickFormat ? n.tickFormat.apply(n, e) : X) : i,
            p = Math.max(o, 0) + u,
            v = n.range(),
            y = +v[0] + 0.5,
            g = +v[v.length - 1] + 0.5,
            b = (n.bandwidth ? it : rt)(n.copy()),
            m = l.selection ? l.selection() : l,
            _ = m.selectAll('.domain').data([null]),
            w = m
              .selectAll('.tick')
              .data(h, n)
              .order(),
            x = w.exit(),
            M = w
              .enter()
              .append('g')
              .attr('class', 'tick'),
            S = w.select('line'),
            A = w.select('text');
          (_ = _.merge(
            _.enter()
              .insert('path', '.tick')
              .attr('class', 'domain')
              .attr('stroke', 'currentColor')
          )),
            (w = w.merge(M)),
            (S = S.merge(
              M.append('line')
                .attr('stroke', 'currentColor')
                .attr(f + '2', c * o)
            )),
            (A = A.merge(
              M.append('text')
                .attr('fill', 'currentColor')
                .attr(f, c * p)
                .attr('dy', t === K ? '0em' : t === Z ? '0.71em' : '0.32em')
            )),
            l !== m &&
              ((_ = _.transition(l)),
              (w = w.transition(l)),
              (S = S.transition(l)),
              (A = A.transition(l)),
              (x = x
                .transition(l)
                .attr('opacity', tt)
                .attr('transform', function(t) {
                  return isFinite((t = b(t))) ? s(t) : this.getAttribute('transform');
                })),
              M.attr('opacity', tt).attr('transform', function(t) {
                var n = this.parentNode.__axis;
                return s(n && isFinite((n = n(t))) ? n : b(t));
              })),
            x.remove(),
            _.attr(
              'd',
              t === J || t == Q
                ? a
                  ? 'M' + c * a + ',' + y + 'H0.5V' + g + 'H' + c * a
                  : 'M0.5,' + y + 'V' + g
                : a
                  ? 'M' + y + ',' + c * a + 'V0.5H' + g + 'V' + c * a
                  : 'M' + y + ',0.5H' + g
            ),
            w.attr('opacity', 1).attr('transform', function(t) {
              return s(b(t));
            }),
            S.attr(f + '2', c * o),
            A.attr(f, c * p).text(d),
            m
              .filter(ot)
              .attr('fill', 'none')
              .attr('font-size', 10)
              .attr('font-family', 'sans-serif')
              .attr('text-anchor', t === Q ? 'start' : t === J ? 'end' : 'middle'),
            m.each(function() {
              this.__axis = b;
            });
        }
        return (
          (l.scale = function(t) {
            return arguments.length ? ((n = t), l) : n;
          }),
          (l.ticks = function() {
            return (e = W.call(arguments)), l;
          }),
          (l.tickArguments = function(t) {
            return arguments.length ? ((e = null == t ? [] : W.call(t)), l) : e.slice();
          }),
          (l.tickValues = function(t) {
            return arguments.length ? ((r = null == t ? null : W.call(t)), l) : r && r.slice();
          }),
          (l.tickFormat = function(t) {
            return arguments.length ? ((i = t), l) : i;
          }),
          (l.tickSize = function(t) {
            return arguments.length ? ((o = a = +t), l) : o;
          }),
          (l.tickSizeInner = function(t) {
            return arguments.length ? ((o = +t), l) : o;
          }),
          (l.tickSizeOuter = function(t) {
            return arguments.length ? ((a = +t), l) : a;
          }),
          (l.tickPadding = function(t) {
            return arguments.length ? ((u = +t), l) : u;
          }),
          l
        );
      }
      function ut(t) {
        return at(K, t);
      }
      function ct(t) {
        return at(Q, t);
      }
      function ft(t) {
        return at(Z, t);
      }
      function st(t) {
        return at(J, t);
      }
      var lt = { value: function() {} };
      function ht() {
        for (var t, n = 0, e = arguments.length, r = {}; n < e; ++n) {
          if (!(t = arguments[n] + '') || t in r) throw new Error('illegal type: ' + t);
          r[t] = [];
        }
        return new dt(r);
      }
      function dt(t) {
        this._ = t;
      }
      function pt(t, n) {
        return t
          .trim()
          .split(/^|\s+/)
          .map(function(t) {
            var e = '',
              r = t.indexOf('.');
            if ((r >= 0 && ((e = t.slice(r + 1)), (t = t.slice(0, r))), t && !n.hasOwnProperty(t)))
              throw new Error('unknown type: ' + t);
            return { type: t, name: e };
          });
      }
      function vt(t, n) {
        for (var e, r = 0, i = t.length; r < i; ++r) if ((e = t[r]).name === n) return e.value;
      }
      function yt(t, n, e) {
        for (var r = 0, i = t.length; r < i; ++r)
          if (t[r].name === n) {
            (t[r] = lt), (t = t.slice(0, r).concat(t.slice(r + 1)));
            break;
          }
        return null != e && t.push({ name: n, value: e }), t;
      }
      dt.prototype = ht.prototype = {
        constructor: dt,
        on: function(t, n) {
          var e,
            r = this._,
            i = pt(t + '', r),
            o = -1,
            a = i.length;
          if (!(arguments.length < 2)) {
            if (null != n && 'function' !== typeof n) throw new Error('invalid callback: ' + n);
            while (++o < a)
              if ((e = (t = i[o]).type)) r[e] = yt(r[e], t.name, n);
              else if (null == n) for (e in r) r[e] = yt(r[e], t.name, null);
            return this;
          }
          while (++o < a) if ((e = (t = i[o]).type) && (e = vt(r[e], t.name))) return e;
        },
        copy: function() {
          var t = {},
            n = this._;
          for (var e in n) t[e] = n[e].slice();
          return new dt(t);
        },
        call: function(t, n) {
          if ((e = arguments.length - 2) > 0)
            for (var e, r, i = new Array(e), o = 0; o < e; ++o) i[o] = arguments[o + 2];
          if (!this._.hasOwnProperty(t)) throw new Error('unknown type: ' + t);
          for (r = this._[t], o = 0, e = r.length; o < e; ++o) r[o].value.apply(n, i);
        },
        apply: function(t, n, e) {
          if (!this._.hasOwnProperty(t)) throw new Error('unknown type: ' + t);
          for (var r = this._[t], i = 0, o = r.length; i < o; ++i) r[i].value.apply(n, e);
        },
      };
      var gt = ht,
        bt = 'http://www.w3.org/1999/xhtml',
        mt = {
          svg: 'http://www.w3.org/2000/svg',
          xhtml: bt,
          xlink: 'http://www.w3.org/1999/xlink',
          xml: 'http://www.w3.org/XML/1998/namespace',
          xmlns: 'http://www.w3.org/2000/xmlns/',
        },
        _t = function(t) {
          var n = (t += ''),
            e = n.indexOf(':');
          return (
            e >= 0 && 'xmlns' !== (n = t.slice(0, e)) && (t = t.slice(e + 1)),
            mt.hasOwnProperty(n) ? { space: mt[n], local: t } : t
          );
        };
      function wt(t) {
        return function() {
          var n = this.ownerDocument,
            e = this.namespaceURI;
          return e === bt && n.documentElement.namespaceURI === bt ? n.createElement(t) : n.createElementNS(e, t);
        };
      }
      function xt(t) {
        return function() {
          return this.ownerDocument.createElementNS(t.space, t.local);
        };
      }
      var Mt = function(t) {
        var n = _t(t);
        return (n.local ? xt : wt)(n);
      };
      function St() {}
      var At = function(t) {
          return null == t
            ? St
            : function() {
                return this.querySelector(t);
              };
        },
        Et = function(t) {
          'function' !== typeof t && (t = At(t));
          for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
            for (var o, a, u = n[i], c = u.length, f = (r[i] = new Array(c)), s = 0; s < c; ++s)
              (o = u[s]) &&
                (a = t.call(o, o.__data__, s, u)) &&
                ('__data__' in o && (a.__data__ = o.__data__), (f[s] = a));
          return new fe(r, this._parents);
        };
      function kt() {
        return [];
      }
      var Ct = function(t) {
          return null == t
            ? kt
            : function() {
                return this.querySelectorAll(t);
              };
        },
        Tt = function(t) {
          'function' !== typeof t && (t = Ct(t));
          for (var n = this._groups, e = n.length, r = [], i = [], o = 0; o < e; ++o)
            for (var a, u = n[o], c = u.length, f = 0; f < c; ++f)
              (a = u[f]) && (r.push(t.call(a, a.__data__, f, u)), i.push(a));
          return new fe(r, i);
        },
        Ot = function(t) {
          return function() {
            return this.matches(t);
          };
        };
      if ('undefined' !== typeof document) {
        var Nt = document.documentElement;
        if (!Nt.matches) {
          var Pt = Nt.webkitMatchesSelector || Nt.msMatchesSelector || Nt.mozMatchesSelector || Nt.oMatchesSelector;
          Ot = function(t) {
            return function() {
              return Pt.call(this, t);
            };
          };
        }
      }
      var Rt = Ot,
        jt = function(t) {
          'function' !== typeof t && (t = Rt(t));
          for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
            for (var o, a = n[i], u = a.length, c = (r[i] = []), f = 0; f < u; ++f)
              (o = a[f]) && t.call(o, o.__data__, f, a) && c.push(o);
          return new fe(r, this._parents);
        },
        Lt = function(t) {
          return new Array(t.length);
        },
        It = function() {
          return new fe(this._enter || this._groups.map(Lt), this._parents);
        };
      function $t(t, n) {
        (this.ownerDocument = t.ownerDocument),
          (this.namespaceURI = t.namespaceURI),
          (this._next = null),
          (this._parent = t),
          (this.__data__ = n);
      }
      $t.prototype = {
        constructor: $t,
        appendChild: function(t) {
          return this._parent.insertBefore(t, this._next);
        },
        insertBefore: function(t, n) {
          return this._parent.insertBefore(t, n);
        },
        querySelector: function(t) {
          return this._parent.querySelector(t);
        },
        querySelectorAll: function(t) {
          return this._parent.querySelectorAll(t);
        },
      };
      var Ft = function(t) {
          return function() {
            return t;
          };
        },
        Dt = '$';
      function zt(t, n, e, r, i, o) {
        for (var a, u = 0, c = n.length, f = o.length; u < f; ++u)
          (a = n[u]) ? ((a.__data__ = o[u]), (r[u] = a)) : (e[u] = new $t(t, o[u]));
        for (; u < c; ++u) (a = n[u]) && (i[u] = a);
      }
      function Ut(t, n, e, r, i, o, a) {
        var u,
          c,
          f,
          s = {},
          l = n.length,
          h = o.length,
          d = new Array(l);
        for (u = 0; u < l; ++u)
          (c = n[u]) && ((d[u] = f = Dt + a.call(c, c.__data__, u, n)), f in s ? (i[u] = c) : (s[f] = c));
        for (u = 0; u < h; ++u)
          (f = Dt + a.call(t, o[u], u, o)),
            (c = s[f]) ? ((r[u] = c), (c.__data__ = o[u]), (s[f] = null)) : (e[u] = new $t(t, o[u]));
        for (u = 0; u < l; ++u) (c = n[u]) && s[d[u]] === c && (i[u] = c);
      }
      var Bt = function(t, n) {
          if (!t)
            return (
              (d = new Array(this.size())),
              (f = -1),
              this.each(function(t) {
                d[++f] = t;
              }),
              d
            );
          var e = n ? Ut : zt,
            r = this._parents,
            i = this._groups;
          'function' !== typeof t && (t = Ft(t));
          for (var o = i.length, a = new Array(o), u = new Array(o), c = new Array(o), f = 0; f < o; ++f) {
            var s = r[f],
              l = i[f],
              h = l.length,
              d = t.call(s, s && s.__data__, f, r),
              p = d.length,
              v = (u[f] = new Array(p)),
              y = (a[f] = new Array(p)),
              g = (c[f] = new Array(h));
            e(s, l, v, y, g, d, n);
            for (var b, m, _ = 0, w = 0; _ < p; ++_)
              if ((b = v[_])) {
                _ >= w && (w = _ + 1);
                while (!(m = y[w]) && ++w < p);
                b._next = m || null;
              }
          }
          return (a = new fe(a, r)), (a._enter = u), (a._exit = c), a;
        },
        qt = function() {
          return new fe(this._exit || this._groups.map(Lt), this._parents);
        },
        Vt = function(t) {
          for (
            var n = this._groups,
              e = t._groups,
              r = n.length,
              i = e.length,
              o = Math.min(r, i),
              a = new Array(r),
              u = 0;
            u < o;
            ++u
          )
            for (var c, f = n[u], s = e[u], l = f.length, h = (a[u] = new Array(l)), d = 0; d < l; ++d)
              (c = f[d] || s[d]) && (h[d] = c);
          for (; u < r; ++u) a[u] = n[u];
          return new fe(a, this._parents);
        },
        Ht = function() {
          for (var t = this._groups, n = -1, e = t.length; ++n < e; )
            for (var r, i = t[n], o = i.length - 1, a = i[o]; --o >= 0; )
              (r = i[o]) && (a && a !== r.nextSibling && a.parentNode.insertBefore(r, a), (a = r));
          return this;
        },
        Yt = function(t) {
          function n(n, e) {
            return n && e ? t(n.__data__, e.__data__) : !n - !e;
          }
          t || (t = Gt);
          for (var e = this._groups, r = e.length, i = new Array(r), o = 0; o < r; ++o) {
            for (var a, u = e[o], c = u.length, f = (i[o] = new Array(c)), s = 0; s < c; ++s) (a = u[s]) && (f[s] = a);
            f.sort(n);
          }
          return new fe(i, this._parents).order();
        };
      function Gt(t, n) {
        return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
      }
      var Wt = function() {
          var t = arguments[0];
          return (arguments[0] = this), t.apply(null, arguments), this;
        },
        Xt = function() {
          var t = new Array(this.size()),
            n = -1;
          return (
            this.each(function() {
              t[++n] = this;
            }),
            t
          );
        },
        Kt = function() {
          for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
            for (var r = t[n], i = 0, o = r.length; i < o; ++i) {
              var a = r[i];
              if (a) return a;
            }
          return null;
        },
        Qt = function() {
          var t = 0;
          return (
            this.each(function() {
              ++t;
            }),
            t
          );
        },
        Zt = function() {
          return !this.node();
        },
        Jt = function(t) {
          for (var n = this._groups, e = 0, r = n.length; e < r; ++e)
            for (var i, o = n[e], a = 0, u = o.length; a < u; ++a) (i = o[a]) && t.call(i, i.__data__, a, o);
          return this;
        };
      function tn(t) {
        return function() {
          this.removeAttribute(t);
        };
      }
      function nn(t) {
        return function() {
          this.removeAttributeNS(t.space, t.local);
        };
      }
      function en(t, n) {
        return function() {
          this.setAttribute(t, n);
        };
      }
      function rn(t, n) {
        return function() {
          this.setAttributeNS(t.space, t.local, n);
        };
      }
      function on(t, n) {
        return function() {
          var e = n.apply(this, arguments);
          null == e ? this.removeAttribute(t) : this.setAttribute(t, e);
        };
      }
      function an(t, n) {
        return function() {
          var e = n.apply(this, arguments);
          null == e ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, e);
        };
      }
      var un = function(t, n) {
          var e = _t(t);
          if (arguments.length < 2) {
            var r = this.node();
            return e.local ? r.getAttributeNS(e.space, e.local) : r.getAttribute(e);
          }
          return this.each(
            (null == n ? (e.local ? nn : tn) : 'function' === typeof n ? (e.local ? an : on) : e.local ? rn : en)(e, n)
          );
        },
        cn = function(t) {
          return (t.ownerDocument && t.ownerDocument.defaultView) || (t.document && t) || t.defaultView;
        };
      function fn(t) {
        return function() {
          this.style.removeProperty(t);
        };
      }
      function sn(t, n, e) {
        return function() {
          this.style.setProperty(t, n, e);
        };
      }
      function ln(t, n, e) {
        return function() {
          var r = n.apply(this, arguments);
          null == r ? this.style.removeProperty(t) : this.style.setProperty(t, r, e);
        };
      }
      var hn = function(t, n, e) {
        return arguments.length > 1
          ? this.each((null == n ? fn : 'function' === typeof n ? ln : sn)(t, n, null == e ? '' : e))
          : dn(this.node(), t);
      };
      function dn(t, n) {
        return (
          t.style.getPropertyValue(n) ||
          cn(t)
            .getComputedStyle(t, null)
            .getPropertyValue(n)
        );
      }
      function pn(t) {
        return function() {
          delete this[t];
        };
      }
      function vn(t, n) {
        return function() {
          this[t] = n;
        };
      }
      function yn(t, n) {
        return function() {
          var e = n.apply(this, arguments);
          null == e ? delete this[t] : (this[t] = e);
        };
      }
      var gn = function(t, n) {
        return arguments.length > 1
          ? this.each((null == n ? pn : 'function' === typeof n ? yn : vn)(t, n))
          : this.node()[t];
      };
      function bn(t) {
        return t.trim().split(/^|\s+/);
      }
      function mn(t) {
        return t.classList || new _n(t);
      }
      function _n(t) {
        (this._node = t), (this._names = bn(t.getAttribute('class') || ''));
      }
      function wn(t, n) {
        var e = mn(t),
          r = -1,
          i = n.length;
        while (++r < i) e.add(n[r]);
      }
      function xn(t, n) {
        var e = mn(t),
          r = -1,
          i = n.length;
        while (++r < i) e.remove(n[r]);
      }
      function Mn(t) {
        return function() {
          wn(this, t);
        };
      }
      function Sn(t) {
        return function() {
          xn(this, t);
        };
      }
      function An(t, n) {
        return function() {
          (n.apply(this, arguments) ? wn : xn)(this, t);
        };
      }
      _n.prototype = {
        add: function(t) {
          var n = this._names.indexOf(t);
          n < 0 && (this._names.push(t), this._node.setAttribute('class', this._names.join(' ')));
        },
        remove: function(t) {
          var n = this._names.indexOf(t);
          n >= 0 && (this._names.splice(n, 1), this._node.setAttribute('class', this._names.join(' ')));
        },
        contains: function(t) {
          return this._names.indexOf(t) >= 0;
        },
      };
      var En = function(t, n) {
        var e = bn(t + '');
        if (arguments.length < 2) {
          var r = mn(this.node()),
            i = -1,
            o = e.length;
          while (++i < o) if (!r.contains(e[i])) return !1;
          return !0;
        }
        return this.each(('function' === typeof n ? An : n ? Mn : Sn)(e, n));
      };
      function kn() {
        this.textContent = '';
      }
      function Cn(t) {
        return function() {
          this.textContent = t;
        };
      }
      function Tn(t) {
        return function() {
          var n = t.apply(this, arguments);
          this.textContent = null == n ? '' : n;
        };
      }
      var On = function(t) {
        return arguments.length
          ? this.each(null == t ? kn : ('function' === typeof t ? Tn : Cn)(t))
          : this.node().textContent;
      };
      function Nn() {
        this.innerHTML = '';
      }
      function Pn(t) {
        return function() {
          this.innerHTML = t;
        };
      }
      function Rn(t) {
        return function() {
          var n = t.apply(this, arguments);
          this.innerHTML = null == n ? '' : n;
        };
      }
      var jn = function(t) {
        return arguments.length
          ? this.each(null == t ? Nn : ('function' === typeof t ? Rn : Pn)(t))
          : this.node().innerHTML;
      };
      function Ln() {
        this.nextSibling && this.parentNode.appendChild(this);
      }
      var In = function() {
        return this.each(Ln);
      };
      function $n() {
        this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
      }
      var Fn = function() {
          return this.each($n);
        },
        Dn = function(t) {
          var n = 'function' === typeof t ? t : Mt(t);
          return this.select(function() {
            return this.appendChild(n.apply(this, arguments));
          });
        };
      function zn() {
        return null;
      }
      var Un = function(t, n) {
        var e = 'function' === typeof t ? t : Mt(t),
          r = null == n ? zn : 'function' === typeof n ? n : At(n);
        return this.select(function() {
          return this.insertBefore(e.apply(this, arguments), r.apply(this, arguments) || null);
        });
      };
      function Bn() {
        var t = this.parentNode;
        t && t.removeChild(this);
      }
      var qn = function() {
        return this.each(Bn);
      };
      function Vn() {
        return this.parentNode.insertBefore(this.cloneNode(!1), this.nextSibling);
      }
      function Hn() {
        return this.parentNode.insertBefore(this.cloneNode(!0), this.nextSibling);
      }
      var Yn = function(t) {
          return this.select(t ? Hn : Vn);
        },
        Gn = function(t) {
          return arguments.length ? this.property('__data__', t) : this.node().__data__;
        },
        Wn = {},
        Xn = null;
      if ('undefined' !== typeof document) {
        var Kn = document.documentElement;
        'onmouseenter' in Kn || (Wn = { mouseenter: 'mouseover', mouseleave: 'mouseout' });
      }
      function Qn(t, n, e) {
        return (
          (t = Zn(t, n, e)),
          function(n) {
            var e = n.relatedTarget;
            (e && (e === this || 8 & e.compareDocumentPosition(this))) || t.call(this, n);
          }
        );
      }
      function Zn(t, n, e) {
        return function(r) {
          var i = Xn;
          Xn = r;
          try {
            t.call(this, this.__data__, n, e);
          } finally {
            Xn = i;
          }
        };
      }
      function Jn(t) {
        return t
          .trim()
          .split(/^|\s+/)
          .map(function(t) {
            var n = '',
              e = t.indexOf('.');
            return e >= 0 && ((n = t.slice(e + 1)), (t = t.slice(0, e))), { type: t, name: n };
          });
      }
      function te(t) {
        return function() {
          var n = this.__on;
          if (n) {
            for (var e, r = 0, i = -1, o = n.length; r < o; ++r)
              (e = n[r]),
                (t.type && e.type !== t.type) || e.name !== t.name
                  ? (n[++i] = e)
                  : this.removeEventListener(e.type, e.listener, e.capture);
            ++i ? (n.length = i) : delete this.__on;
          }
        };
      }
      function ne(t, n, e) {
        var r = Wn.hasOwnProperty(t.type) ? Qn : Zn;
        return function(i, o, a) {
          var u,
            c = this.__on,
            f = r(n, o, a);
          if (c)
            for (var s = 0, l = c.length; s < l; ++s)
              if ((u = c[s]).type === t.type && u.name === t.name)
                return (
                  this.removeEventListener(u.type, u.listener, u.capture),
                  this.addEventListener(u.type, (u.listener = f), (u.capture = e)),
                  void (u.value = n)
                );
          this.addEventListener(t.type, f, e),
            (u = { type: t.type, name: t.name, value: n, listener: f, capture: e }),
            c ? c.push(u) : (this.__on = [u]);
        };
      }
      var ee = function(t, n, e) {
        var r,
          i,
          o = Jn(t + ''),
          a = o.length;
        if (!(arguments.length < 2)) {
          for (u = n ? ne : te, null == e && (e = !1), r = 0; r < a; ++r) this.each(u(o[r], n, e));
          return this;
        }
        var u = this.node().__on;
        if (u)
          for (var c, f = 0, s = u.length; f < s; ++f)
            for (r = 0, c = u[f]; r < a; ++r) if ((i = o[r]).type === c.type && i.name === c.name) return c.value;
      };
      function re(t, n, e, r) {
        var i = Xn;
        (t.sourceEvent = Xn), (Xn = t);
        try {
          return n.apply(e, r);
        } finally {
          Xn = i;
        }
      }
      function ie(t, n, e) {
        var r = cn(t),
          i = r.CustomEvent;
        'function' === typeof i
          ? (i = new i(n, e))
          : ((i = r.document.createEvent('Event')),
            e ? (i.initEvent(n, e.bubbles, e.cancelable), (i.detail = e.detail)) : i.initEvent(n, !1, !1)),
          t.dispatchEvent(i);
      }
      function oe(t, n) {
        return function() {
          return ie(this, t, n);
        };
      }
      function ae(t, n) {
        return function() {
          return ie(this, t, n.apply(this, arguments));
        };
      }
      var ue = function(t, n) {
          return this.each(('function' === typeof n ? ae : oe)(t, n));
        },
        ce = [null];
      function fe(t, n) {
        (this._groups = t), (this._parents = n);
      }
      function se() {
        return new fe([[document.documentElement]], ce);
      }
      fe.prototype = se.prototype = {
        constructor: fe,
        select: Et,
        selectAll: Tt,
        filter: jt,
        data: Bt,
        enter: It,
        exit: qt,
        merge: Vt,
        order: Ht,
        sort: Yt,
        call: Wt,
        nodes: Xt,
        node: Kt,
        size: Qt,
        empty: Zt,
        each: Jt,
        attr: un,
        style: hn,
        property: gn,
        classed: En,
        text: On,
        html: jn,
        raise: In,
        lower: Fn,
        append: Dn,
        insert: Un,
        remove: qn,
        clone: Yn,
        datum: Gn,
        on: ee,
        dispatch: ue,
      };
      var le = se,
        he = function(t) {
          return 'string' === typeof t
            ? new fe([[document.querySelector(t)]], [document.documentElement])
            : new fe([[t]], ce);
        },
        de = function(t) {
          return he(Mt(t).call(document.documentElement));
        },
        pe = 0;
      function ve() {
        return new ye();
      }
      function ye() {
        this._ = '@' + (++pe).toString(36);
      }
      ye.prototype = ve.prototype = {
        constructor: ye,
        get: function(t) {
          var n = this._;
          while (!(n in t)) if (!(t = t.parentNode)) return;
          return t[n];
        },
        set: function(t, n) {
          return (t[this._] = n);
        },
        remove: function(t) {
          return this._ in t && delete t[this._];
        },
        toString: function() {
          return this._;
        },
      };
      var ge = function() {
          var t,
            n = Xn;
          while ((t = n.sourceEvent)) n = t;
          return n;
        },
        be = function(t, n) {
          var e = t.ownerSVGElement || t;
          if (e.createSVGPoint) {
            var r = e.createSVGPoint();
            return (
              (r.x = n.clientX), (r.y = n.clientY), (r = r.matrixTransform(t.getScreenCTM().inverse())), [r.x, r.y]
            );
          }
          var i = t.getBoundingClientRect();
          return [n.clientX - i.left - t.clientLeft, n.clientY - i.top - t.clientTop];
        },
        me = function(t) {
          var n = ge();
          return n.changedTouches && (n = n.changedTouches[0]), be(t, n);
        },
        _e = function(t) {
          return 'string' === typeof t
            ? new fe([document.querySelectorAll(t)], [document.documentElement])
            : new fe([null == t ? [] : t], ce);
        },
        we = function(t, n, e) {
          arguments.length < 3 && ((e = n), (n = ge().changedTouches));
          for (var r, i = 0, o = n ? n.length : 0; i < o; ++i) if ((r = n[i]).identifier === e) return be(t, r);
          return null;
        },
        xe = function(t, n) {
          null == n && (n = ge().touches);
          for (var e = 0, r = n ? n.length : 0, i = new Array(r); e < r; ++e) i[e] = be(t, n[e]);
          return i;
        };
      function Me() {
        Xn.stopImmediatePropagation();
      }
      var Se = function() {
          Xn.preventDefault(), Xn.stopImmediatePropagation();
        },
        Ae = function(t) {
          var n = t.document.documentElement,
            e = he(t).on('dragstart.drag', Se, !0);
          'onselectstart' in n
            ? e.on('selectstart.drag', Se, !0)
            : ((n.__noselect = n.style.MozUserSelect), (n.style.MozUserSelect = 'none'));
        };
      function Ee(t, n) {
        var e = t.document.documentElement,
          r = he(t).on('dragstart.drag', null);
        n &&
          (r.on('click.drag', Se, !0),
          setTimeout(function() {
            r.on('click.drag', null);
          }, 0)),
          'onselectstart' in e
            ? r.on('selectstart.drag', null)
            : ((e.style.MozUserSelect = e.__noselect), delete e.__noselect);
      }
      var ke = function(t) {
        return function() {
          return t;
        };
      };
      function Ce(t, n, e, r, i, o, a, u, c, f) {
        (this.target = t),
          (this.type = n),
          (this.subject = e),
          (this.identifier = r),
          (this.active = i),
          (this.x = o),
          (this.y = a),
          (this.dx = u),
          (this.dy = c),
          (this._ = f);
      }
      function Te() {
        return !Xn.button;
      }
      function Oe() {
        return this.parentNode;
      }
      function Ne(t) {
        return null == t ? { x: Xn.x, y: Xn.y } : t;
      }
      function Pe() {
        return 'ontouchstart' in this;
      }
      Ce.prototype.on = function() {
        var t = this._.on.apply(this._, arguments);
        return t === this._ ? this : t;
      };
      var Re = function() {
          var t,
            n,
            e,
            r,
            i = Te,
            o = Oe,
            a = Ne,
            u = Pe,
            c = {},
            f = gt('start', 'drag', 'end'),
            s = 0,
            l = 0;
          function h(t) {
            t.on('mousedown.drag', d)
              .filter(u)
              .on('touchstart.drag', y)
              .on('touchmove.drag', g)
              .on('touchend.drag touchcancel.drag', b)
              .style('touch-action', 'none')
              .style('-webkit-tap-highlight-color', 'rgba(0,0,0,0)');
          }
          function d() {
            if (!r && i.apply(this, arguments)) {
              var a = m('mouse', o.apply(this, arguments), me, this, arguments);
              a &&
                (he(Xn.view)
                  .on('mousemove.drag', p, !0)
                  .on('mouseup.drag', v, !0),
                Ae(Xn.view),
                Me(),
                (e = !1),
                (t = Xn.clientX),
                (n = Xn.clientY),
                a('start'));
            }
          }
          function p() {
            if ((Se(), !e)) {
              var r = Xn.clientX - t,
                i = Xn.clientY - n;
              e = r * r + i * i > l;
            }
            c.mouse('drag');
          }
          function v() {
            he(Xn.view).on('mousemove.drag mouseup.drag', null), Ee(Xn.view, e), Se(), c.mouse('end');
          }
          function y() {
            if (i.apply(this, arguments)) {
              var t,
                n,
                e = Xn.changedTouches,
                r = o.apply(this, arguments),
                a = e.length;
              for (t = 0; t < a; ++t) (n = m(e[t].identifier, r, we, this, arguments)) && (Me(), n('start'));
            }
          }
          function g() {
            var t,
              n,
              e = Xn.changedTouches,
              r = e.length;
            for (t = 0; t < r; ++t) (n = c[e[t].identifier]) && (Se(), n('drag'));
          }
          function b() {
            var t,
              n,
              e = Xn.changedTouches,
              i = e.length;
            for (
              r && clearTimeout(r),
                r = setTimeout(function() {
                  r = null;
                }, 500),
                t = 0;
              t < i;
              ++t
            )
              (n = c[e[t].identifier]) && (Me(), n('end'));
          }
          function m(t, n, e, r, i) {
            var o,
              u,
              l,
              d = e(n, t),
              p = f.copy();
            if (
              re(new Ce(h, 'beforestart', o, t, s, d[0], d[1], 0, 0, p), function() {
                return null != (Xn.subject = o = a.apply(r, i)) && ((u = o.x - d[0] || 0), (l = o.y - d[1] || 0), !0);
              })
            )
              return function a(f) {
                var v,
                  y = d;
                switch (f) {
                  case 'start':
                    (c[t] = a), (v = s++);
                    break;
                  case 'end':
                    delete c[t], --s;
                  case 'drag':
                    (d = e(n, t)), (v = s);
                    break;
                }
                re(new Ce(h, f, o, t, v, d[0] + u, d[1] + l, d[0] - y[0], d[1] - y[1], p), p.apply, p, [f, r, i]);
              };
          }
          return (
            (h.filter = function(t) {
              return arguments.length ? ((i = 'function' === typeof t ? t : ke(!!t)), h) : i;
            }),
            (h.container = function(t) {
              return arguments.length ? ((o = 'function' === typeof t ? t : ke(t)), h) : o;
            }),
            (h.subject = function(t) {
              return arguments.length ? ((a = 'function' === typeof t ? t : ke(t)), h) : a;
            }),
            (h.touchable = function(t) {
              return arguments.length ? ((u = 'function' === typeof t ? t : ke(!!t)), h) : u;
            }),
            (h.on = function() {
              var t = f.on.apply(f, arguments);
              return t === f ? h : t;
            }),
            (h.clickDistance = function(t) {
              return arguments.length ? ((l = (t = +t) * t), h) : Math.sqrt(l);
            }),
            h
          );
        },
        je = function(t, n, e) {
          (t.prototype = n.prototype = e), (e.constructor = t);
        };
      function Le(t, n) {
        var e = Object.create(t.prototype);
        for (var r in n) e[r] = n[r];
        return e;
      }
      function Ie() {}
      var $e = 0.7,
        Fe = 1 / $e,
        De = '\\s*([+-]?\\d+)\\s*',
        ze = '\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*',
        Ue = '\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*',
        Be = /^#([0-9a-f]{3})$/,
        qe = /^#([0-9a-f]{6})$/,
        Ve = new RegExp('^rgb\\(' + [De, De, De] + '\\)$'),
        He = new RegExp('^rgb\\(' + [Ue, Ue, Ue] + '\\)$'),
        Ye = new RegExp('^rgba\\(' + [De, De, De, ze] + '\\)$'),
        Ge = new RegExp('^rgba\\(' + [Ue, Ue, Ue, ze] + '\\)$'),
        We = new RegExp('^hsl\\(' + [ze, Ue, Ue] + '\\)$'),
        Xe = new RegExp('^hsla\\(' + [ze, Ue, Ue, ze] + '\\)$'),
        Ke = {
          aliceblue: 15792383,
          antiquewhite: 16444375,
          aqua: 65535,
          aquamarine: 8388564,
          azure: 15794175,
          beige: 16119260,
          bisque: 16770244,
          black: 0,
          blanchedalmond: 16772045,
          blue: 255,
          blueviolet: 9055202,
          brown: 10824234,
          burlywood: 14596231,
          cadetblue: 6266528,
          chartreuse: 8388352,
          chocolate: 13789470,
          coral: 16744272,
          cornflowerblue: 6591981,
          cornsilk: 16775388,
          crimson: 14423100,
          cyan: 65535,
          darkblue: 139,
          darkcyan: 35723,
          darkgoldenrod: 12092939,
          darkgray: 11119017,
          darkgreen: 25600,
          darkgrey: 11119017,
          darkkhaki: 12433259,
          darkmagenta: 9109643,
          darkolivegreen: 5597999,
          darkorange: 16747520,
          darkorchid: 10040012,
          darkred: 9109504,
          darksalmon: 15308410,
          darkseagreen: 9419919,
          darkslateblue: 4734347,
          darkslategray: 3100495,
          darkslategrey: 3100495,
          darkturquoise: 52945,
          darkviolet: 9699539,
          deeppink: 16716947,
          deepskyblue: 49151,
          dimgray: 6908265,
          dimgrey: 6908265,
          dodgerblue: 2003199,
          firebrick: 11674146,
          floralwhite: 16775920,
          forestgreen: 2263842,
          fuchsia: 16711935,
          gainsboro: 14474460,
          ghostwhite: 16316671,
          gold: 16766720,
          goldenrod: 14329120,
          gray: 8421504,
          green: 32768,
          greenyellow: 11403055,
          grey: 8421504,
          honeydew: 15794160,
          hotpink: 16738740,
          indianred: 13458524,
          indigo: 4915330,
          ivory: 16777200,
          khaki: 15787660,
          lavender: 15132410,
          lavenderblush: 16773365,
          lawngreen: 8190976,
          lemonchiffon: 16775885,
          lightblue: 11393254,
          lightcoral: 15761536,
          lightcyan: 14745599,
          lightgoldenrodyellow: 16448210,
          lightgray: 13882323,
          lightgreen: 9498256,
          lightgrey: 13882323,
          lightpink: 16758465,
          lightsalmon: 16752762,
          lightseagreen: 2142890,
          lightskyblue: 8900346,
          lightslategray: 7833753,
          lightslategrey: 7833753,
          lightsteelblue: 11584734,
          lightyellow: 16777184,
          lime: 65280,
          limegreen: 3329330,
          linen: 16445670,
          magenta: 16711935,
          maroon: 8388608,
          mediumaquamarine: 6737322,
          mediumblue: 205,
          mediumorchid: 12211667,
          mediumpurple: 9662683,
          mediumseagreen: 3978097,
          mediumslateblue: 8087790,
          mediumspringgreen: 64154,
          mediumturquoise: 4772300,
          mediumvioletred: 13047173,
          midnightblue: 1644912,
          mintcream: 16121850,
          mistyrose: 16770273,
          moccasin: 16770229,
          navajowhite: 16768685,
          navy: 128,
          oldlace: 16643558,
          olive: 8421376,
          olivedrab: 7048739,
          orange: 16753920,
          orangered: 16729344,
          orchid: 14315734,
          palegoldenrod: 15657130,
          palegreen: 10025880,
          paleturquoise: 11529966,
          palevioletred: 14381203,
          papayawhip: 16773077,
          peachpuff: 16767673,
          peru: 13468991,
          pink: 16761035,
          plum: 14524637,
          powderblue: 11591910,
          purple: 8388736,
          rebeccapurple: 6697881,
          red: 16711680,
          rosybrown: 12357519,
          royalblue: 4286945,
          saddlebrown: 9127187,
          salmon: 16416882,
          sandybrown: 16032864,
          seagreen: 3050327,
          seashell: 16774638,
          sienna: 10506797,
          silver: 12632256,
          skyblue: 8900331,
          slateblue: 6970061,
          slategray: 7372944,
          slategrey: 7372944,
          snow: 16775930,
          springgreen: 65407,
          steelblue: 4620980,
          tan: 13808780,
          teal: 32896,
          thistle: 14204888,
          tomato: 16737095,
          turquoise: 4251856,
          violet: 15631086,
          wheat: 16113331,
          white: 16777215,
          whitesmoke: 16119285,
          yellow: 16776960,
          yellowgreen: 10145074,
        };
      function Qe(t) {
        var n;
        return (
          (t = (t + '').trim().toLowerCase()),
          (n = Be.exec(t))
            ? ((n = parseInt(n[1], 16)),
              new er(((n >> 8) & 15) | ((n >> 4) & 240), ((n >> 4) & 15) | (240 & n), ((15 & n) << 4) | (15 & n), 1))
            : (n = qe.exec(t))
              ? Ze(parseInt(n[1], 16))
              : (n = Ve.exec(t))
                ? new er(n[1], n[2], n[3], 1)
                : (n = He.exec(t))
                  ? new er((255 * n[1]) / 100, (255 * n[2]) / 100, (255 * n[3]) / 100, 1)
                  : (n = Ye.exec(t))
                    ? Je(n[1], n[2], n[3], n[4])
                    : (n = Ge.exec(t))
                      ? Je((255 * n[1]) / 100, (255 * n[2]) / 100, (255 * n[3]) / 100, n[4])
                      : (n = We.exec(t))
                        ? ir(n[1], n[2] / 100, n[3] / 100, 1)
                        : (n = Xe.exec(t))
                          ? ir(n[1], n[2] / 100, n[3] / 100, n[4])
                          : Ke.hasOwnProperty(t)
                            ? Ze(Ke[t])
                            : 'transparent' === t
                              ? new er(NaN, NaN, NaN, 0)
                              : null
        );
      }
      function Ze(t) {
        return new er((t >> 16) & 255, (t >> 8) & 255, 255 & t, 1);
      }
      function Je(t, n, e, r) {
        return r <= 0 && (t = n = e = NaN), new er(t, n, e, r);
      }
      function tr(t) {
        return t instanceof Ie || (t = Qe(t)), t ? ((t = t.rgb()), new er(t.r, t.g, t.b, t.opacity)) : new er();
      }
      function nr(t, n, e, r) {
        return 1 === arguments.length ? tr(t) : new er(t, n, e, null == r ? 1 : r);
      }
      function er(t, n, e, r) {
        (this.r = +t), (this.g = +n), (this.b = +e), (this.opacity = +r);
      }
      function rr(t) {
        return (t = Math.max(0, Math.min(255, Math.round(t) || 0))), (t < 16 ? '0' : '') + t.toString(16);
      }
      function ir(t, n, e, r) {
        return r <= 0 ? (t = n = e = NaN) : e <= 0 || e >= 1 ? (t = n = NaN) : n <= 0 && (t = NaN), new ur(t, n, e, r);
      }
      function or(t) {
        if (t instanceof ur) return new ur(t.h, t.s, t.l, t.opacity);
        if ((t instanceof Ie || (t = Qe(t)), !t)) return new ur();
        if (t instanceof ur) return t;
        t = t.rgb();
        var n = t.r / 255,
          e = t.g / 255,
          r = t.b / 255,
          i = Math.min(n, e, r),
          o = Math.max(n, e, r),
          a = NaN,
          u = o - i,
          c = (o + i) / 2;
        return (
          u
            ? ((a = n === o ? (e - r) / u + 6 * (e < r) : e === o ? (r - n) / u + 2 : (n - e) / u + 4),
              (u /= c < 0.5 ? o + i : 2 - o - i),
              (a *= 60))
            : (u = c > 0 && c < 1 ? 0 : a),
          new ur(a, u, c, t.opacity)
        );
      }
      function ar(t, n, e, r) {
        return 1 === arguments.length ? or(t) : new ur(t, n, e, null == r ? 1 : r);
      }
      function ur(t, n, e, r) {
        (this.h = +t), (this.s = +n), (this.l = +e), (this.opacity = +r);
      }
      function cr(t, n, e) {
        return 255 * (t < 60 ? n + ((e - n) * t) / 60 : t < 180 ? e : t < 240 ? n + ((e - n) * (240 - t)) / 60 : n);
      }
      je(Ie, Qe, {
        displayable: function() {
          return this.rgb().displayable();
        },
        hex: function() {
          return this.rgb().hex();
        },
        toString: function() {
          return this.rgb() + '';
        },
      }),
        je(
          er,
          nr,
          Le(Ie, {
            brighter: function(t) {
              return (t = null == t ? Fe : Math.pow(Fe, t)), new er(this.r * t, this.g * t, this.b * t, this.opacity);
            },
            darker: function(t) {
              return (t = null == t ? $e : Math.pow($e, t)), new er(this.r * t, this.g * t, this.b * t, this.opacity);
            },
            rgb: function() {
              return this;
            },
            displayable: function() {
              return (
                0 <= this.r &&
                this.r <= 255 &&
                0 <= this.g &&
                this.g <= 255 &&
                0 <= this.b &&
                this.b <= 255 &&
                0 <= this.opacity &&
                this.opacity <= 1
              );
            },
            hex: function() {
              return '#' + rr(this.r) + rr(this.g) + rr(this.b);
            },
            toString: function() {
              var t = this.opacity;
              return (
                (t = isNaN(t) ? 1 : Math.max(0, Math.min(1, t))),
                (1 === t ? 'rgb(' : 'rgba(') +
                  Math.max(0, Math.min(255, Math.round(this.r) || 0)) +
                  ', ' +
                  Math.max(0, Math.min(255, Math.round(this.g) || 0)) +
                  ', ' +
                  Math.max(0, Math.min(255, Math.round(this.b) || 0)) +
                  (1 === t ? ')' : ', ' + t + ')')
              );
            },
          })
        ),
        je(
          ur,
          ar,
          Le(Ie, {
            brighter: function(t) {
              return (t = null == t ? Fe : Math.pow(Fe, t)), new ur(this.h, this.s, this.l * t, this.opacity);
            },
            darker: function(t) {
              return (t = null == t ? $e : Math.pow($e, t)), new ur(this.h, this.s, this.l * t, this.opacity);
            },
            rgb: function() {
              var t = (this.h % 360) + 360 * (this.h < 0),
                n = isNaN(t) || isNaN(this.s) ? 0 : this.s,
                e = this.l,
                r = e + (e < 0.5 ? e : 1 - e) * n,
                i = 2 * e - r;
              return new er(
                cr(t >= 240 ? t - 240 : t + 120, i, r),
                cr(t, i, r),
                cr(t < 120 ? t + 240 : t - 120, i, r),
                this.opacity
              );
            },
            displayable: function() {
              return (
                ((0 <= this.s && this.s <= 1) || isNaN(this.s)) &&
                0 <= this.l &&
                this.l <= 1 &&
                0 <= this.opacity &&
                this.opacity <= 1
              );
            },
          })
        );
      var fr = Math.PI / 180,
        sr = 180 / Math.PI,
        lr = 18,
        hr = 0.96422,
        dr = 1,
        pr = 0.82521,
        vr = 4 / 29,
        yr = 6 / 29,
        gr = 3 * yr * yr,
        br = yr * yr * yr;
      function mr(t) {
        if (t instanceof xr) return new xr(t.l, t.a, t.b, t.opacity);
        if (t instanceof Or) {
          if (isNaN(t.h)) return new xr(t.l, 0, 0, t.opacity);
          var n = t.h * fr;
          return new xr(t.l, Math.cos(n) * t.c, Math.sin(n) * t.c, t.opacity);
        }
        t instanceof er || (t = tr(t));
        var e,
          r,
          i = Er(t.r),
          o = Er(t.g),
          a = Er(t.b),
          u = Mr((0.2225045 * i + 0.7168786 * o + 0.0606169 * a) / dr);
        return (
          i === o && o === a
            ? (e = r = u)
            : ((e = Mr((0.4360747 * i + 0.3850649 * o + 0.1430804 * a) / hr)),
              (r = Mr((0.0139322 * i + 0.0971045 * o + 0.7141733 * a) / pr))),
          new xr(116 * u - 16, 500 * (e - u), 200 * (u - r), t.opacity)
        );
      }
      function _r(t, n) {
        return new xr(t, 0, 0, null == n ? 1 : n);
      }
      function wr(t, n, e, r) {
        return 1 === arguments.length ? mr(t) : new xr(t, n, e, null == r ? 1 : r);
      }
      function xr(t, n, e, r) {
        (this.l = +t), (this.a = +n), (this.b = +e), (this.opacity = +r);
      }
      function Mr(t) {
        return t > br ? Math.pow(t, 1 / 3) : t / gr + vr;
      }
      function Sr(t) {
        return t > yr ? t * t * t : gr * (t - vr);
      }
      function Ar(t) {
        return 255 * (t <= 0.0031308 ? 12.92 * t : 1.055 * Math.pow(t, 1 / 2.4) - 0.055);
      }
      function Er(t) {
        return (t /= 255) <= 0.04045 ? t / 12.92 : Math.pow((t + 0.055) / 1.055, 2.4);
      }
      function kr(t) {
        if (t instanceof Or) return new Or(t.h, t.c, t.l, t.opacity);
        if ((t instanceof xr || (t = mr(t)), 0 === t.a && 0 === t.b)) return new Or(NaN, 0, t.l, t.opacity);
        var n = Math.atan2(t.b, t.a) * sr;
        return new Or(n < 0 ? n + 360 : n, Math.sqrt(t.a * t.a + t.b * t.b), t.l, t.opacity);
      }
      function Cr(t, n, e, r) {
        return 1 === arguments.length ? kr(t) : new Or(e, n, t, null == r ? 1 : r);
      }
      function Tr(t, n, e, r) {
        return 1 === arguments.length ? kr(t) : new Or(t, n, e, null == r ? 1 : r);
      }
      function Or(t, n, e, r) {
        (this.h = +t), (this.c = +n), (this.l = +e), (this.opacity = +r);
      }
      je(
        xr,
        wr,
        Le(Ie, {
          brighter: function(t) {
            return new xr(this.l + lr * (null == t ? 1 : t), this.a, this.b, this.opacity);
          },
          darker: function(t) {
            return new xr(this.l - lr * (null == t ? 1 : t), this.a, this.b, this.opacity);
          },
          rgb: function() {
            var t = (this.l + 16) / 116,
              n = isNaN(this.a) ? t : t + this.a / 500,
              e = isNaN(this.b) ? t : t - this.b / 200;
            return (
              (n = hr * Sr(n)),
              (t = dr * Sr(t)),
              (e = pr * Sr(e)),
              new er(
                Ar(3.1338561 * n - 1.6168667 * t - 0.4906146 * e),
                Ar(-0.9787684 * n + 1.9161415 * t + 0.033454 * e),
                Ar(0.0719453 * n - 0.2289914 * t + 1.4052427 * e),
                this.opacity
              )
            );
          },
        })
      ),
        je(
          Or,
          Tr,
          Le(Ie, {
            brighter: function(t) {
              return new Or(this.h, this.c, this.l + lr * (null == t ? 1 : t), this.opacity);
            },
            darker: function(t) {
              return new Or(this.h, this.c, this.l - lr * (null == t ? 1 : t), this.opacity);
            },
            rgb: function() {
              return mr(this).rgb();
            },
          })
        );
      var Nr = -0.14861,
        Pr = 1.78277,
        Rr = -0.29227,
        jr = -0.90649,
        Lr = 1.97294,
        Ir = Lr * jr,
        $r = Lr * Pr,
        Fr = Pr * Rr - jr * Nr;
      function Dr(t) {
        if (t instanceof Ur) return new Ur(t.h, t.s, t.l, t.opacity);
        t instanceof er || (t = tr(t));
        var n = t.r / 255,
          e = t.g / 255,
          r = t.b / 255,
          i = (Fr * r + Ir * n - $r * e) / (Fr + Ir - $r),
          o = r - i,
          a = (Lr * (e - i) - Rr * o) / jr,
          u = Math.sqrt(a * a + o * o) / (Lr * i * (1 - i)),
          c = u ? Math.atan2(a, o) * sr - 120 : NaN;
        return new Ur(c < 0 ? c + 360 : c, u, i, t.opacity);
      }
      function zr(t, n, e, r) {
        return 1 === arguments.length ? Dr(t) : new Ur(t, n, e, null == r ? 1 : r);
      }
      function Ur(t, n, e, r) {
        (this.h = +t), (this.s = +n), (this.l = +e), (this.opacity = +r);
      }
      function Br(t, n, e, r, i) {
        var o = t * t,
          a = o * t;
        return ((1 - 3 * t + 3 * o - a) * n + (4 - 6 * o + 3 * a) * e + (1 + 3 * t + 3 * o - 3 * a) * r + a * i) / 6;
      }
      je(
        Ur,
        zr,
        Le(Ie, {
          brighter: function(t) {
            return (t = null == t ? Fe : Math.pow(Fe, t)), new Ur(this.h, this.s, this.l * t, this.opacity);
          },
          darker: function(t) {
            return (t = null == t ? $e : Math.pow($e, t)), new Ur(this.h, this.s, this.l * t, this.opacity);
          },
          rgb: function() {
            var t = isNaN(this.h) ? 0 : (this.h + 120) * fr,
              n = +this.l,
              e = isNaN(this.s) ? 0 : this.s * n * (1 - n),
              r = Math.cos(t),
              i = Math.sin(t);
            return new er(
              255 * (n + e * (Nr * r + Pr * i)),
              255 * (n + e * (Rr * r + jr * i)),
              255 * (n + e * (Lr * r)),
              this.opacity
            );
          },
        })
      );
      var qr = function(t) {
          var n = t.length - 1;
          return function(e) {
            var r = e <= 0 ? (e = 0) : e >= 1 ? ((e = 1), n - 1) : Math.floor(e * n),
              i = t[r],
              o = t[r + 1],
              a = r > 0 ? t[r - 1] : 2 * i - o,
              u = r < n - 1 ? t[r + 2] : 2 * o - i;
            return Br((e - r / n) * n, a, i, o, u);
          };
        },
        Vr = function(t) {
          var n = t.length;
          return function(e) {
            var r = Math.floor(((e %= 1) < 0 ? ++e : e) * n),
              i = t[(r + n - 1) % n],
              o = t[r % n],
              a = t[(r + 1) % n],
              u = t[(r + 2) % n];
            return Br((e - r / n) * n, i, o, a, u);
          };
        },
        Hr = function(t) {
          return function() {
            return t;
          };
        };
      function Yr(t, n) {
        return function(e) {
          return t + e * n;
        };
      }
      function Gr(t, n, e) {
        return (
          (t = Math.pow(t, e)),
          (n = Math.pow(n, e) - t),
          (e = 1 / e),
          function(r) {
            return Math.pow(t + r * n, e);
          }
        );
      }
      function Wr(t, n) {
        var e = n - t;
        return e ? Yr(t, e > 180 || e < -180 ? e - 360 * Math.round(e / 360) : e) : Hr(isNaN(t) ? n : t);
      }
      function Xr(t) {
        return 1 === (t = +t)
          ? Kr
          : function(n, e) {
              return e - n ? Gr(n, e, t) : Hr(isNaN(n) ? e : n);
            };
      }
      function Kr(t, n) {
        var e = n - t;
        return e ? Yr(t, e) : Hr(isNaN(t) ? n : t);
      }
      var Qr = (function t(n) {
        var e = Xr(n);
        function r(t, n) {
          var r = e((t = nr(t)).r, (n = nr(n)).r),
            i = e(t.g, n.g),
            o = e(t.b, n.b),
            a = Kr(t.opacity, n.opacity);
          return function(n) {
            return (t.r = r(n)), (t.g = i(n)), (t.b = o(n)), (t.opacity = a(n)), t + '';
          };
        }
        return (r.gamma = t), r;
      })(1);
      function Zr(t) {
        return function(n) {
          var e,
            r,
            i = n.length,
            o = new Array(i),
            a = new Array(i),
            u = new Array(i);
          for (e = 0; e < i; ++e) (r = nr(n[e])), (o[e] = r.r || 0), (a[e] = r.g || 0), (u[e] = r.b || 0);
          return (
            (o = t(o)),
            (a = t(a)),
            (u = t(u)),
            (r.opacity = 1),
            function(t) {
              return (r.r = o(t)), (r.g = a(t)), (r.b = u(t)), r + '';
            }
          );
        };
      }
      var Jr = Zr(qr),
        ti = Zr(Vr),
        ni = function(t, n) {
          var e,
            r = n ? n.length : 0,
            i = t ? Math.min(r, t.length) : 0,
            o = new Array(i),
            a = new Array(r);
          for (e = 0; e < i; ++e) o[e] = pi(t[e], n[e]);
          for (; e < r; ++e) a[e] = n[e];
          return function(t) {
            for (e = 0; e < i; ++e) a[e] = o[e](t);
            return a;
          };
        },
        ei = function(t, n) {
          var e = new Date();
          return (
            (t = +t),
            (n -= t),
            function(r) {
              return e.setTime(t + n * r), e;
            }
          );
        },
        ri = function(t, n) {
          return (
            (t = +t),
            (n -= t),
            function(e) {
              return t + n * e;
            }
          );
        },
        ii = function(t, n) {
          var e,
            r = {},
            i = {};
          for (e in ((null !== t && 'object' === typeof t) || (t = {}),
          (null !== n && 'object' === typeof n) || (n = {}),
          n))
            e in t ? (r[e] = pi(t[e], n[e])) : (i[e] = n[e]);
          return function(t) {
            for (e in r) i[e] = r[e](t);
            return i;
          };
        },
        oi = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
        ai = new RegExp(oi.source, 'g');
      function ui(t) {
        return function() {
          return t;
        };
      }
      function ci(t) {
        return function(n) {
          return t(n) + '';
        };
      }
      var fi,
        si,
        li,
        hi,
        di = function(t, n) {
          var e,
            r,
            i,
            o = (oi.lastIndex = ai.lastIndex = 0),
            a = -1,
            u = [],
            c = [];
          (t += ''), (n += '');
          while ((e = oi.exec(t)) && (r = ai.exec(n)))
            (i = r.index) > o && ((i = n.slice(o, i)), u[a] ? (u[a] += i) : (u[++a] = i)),
              (e = e[0]) === (r = r[0])
                ? u[a]
                  ? (u[a] += r)
                  : (u[++a] = r)
                : ((u[++a] = null), c.push({ i: a, x: ri(e, r) })),
              (o = ai.lastIndex);
          return (
            o < n.length && ((i = n.slice(o)), u[a] ? (u[a] += i) : (u[++a] = i)),
            u.length < 2
              ? c[0]
                ? ci(c[0].x)
                : ui(n)
              : ((n = c.length),
                function(t) {
                  for (var e, r = 0; r < n; ++r) u[(e = c[r]).i] = e.x(t);
                  return u.join('');
                })
          );
        },
        pi = function(t, n) {
          var e,
            r = typeof n;
          return null == n || 'boolean' === r
            ? Hr(n)
            : ('number' === r
                ? ri
                : 'string' === r
                  ? (e = Qe(n))
                    ? ((n = e), Qr)
                    : di
                  : n instanceof Qe
                    ? Qr
                    : n instanceof Date
                      ? ei
                      : Array.isArray(n)
                        ? ni
                        : ('function' !== typeof n.valueOf && 'function' !== typeof n.toString) || isNaN(n)
                          ? ii
                          : ri)(t, n);
        },
        vi = function(t) {
          var n = t.length;
          return function(e) {
            return t[Math.max(0, Math.min(n - 1, Math.floor(e * n)))];
          };
        },
        yi = function(t, n) {
          var e = Wr(+t, +n);
          return function(t) {
            var n = e(t);
            return n - 360 * Math.floor(n / 360);
          };
        },
        gi = function(t, n) {
          return (
            (t = +t),
            (n -= t),
            function(e) {
              return Math.round(t + n * e);
            }
          );
        },
        bi = 180 / Math.PI,
        mi = { translateX: 0, translateY: 0, rotate: 0, skewX: 0, scaleX: 1, scaleY: 1 },
        _i = function(t, n, e, r, i, o) {
          var a, u, c;
          return (
            (a = Math.sqrt(t * t + n * n)) && ((t /= a), (n /= a)),
            (c = t * e + n * r) && ((e -= t * c), (r -= n * c)),
            (u = Math.sqrt(e * e + r * r)) && ((e /= u), (r /= u), (c /= u)),
            t * r < n * e && ((t = -t), (n = -n), (c = -c), (a = -a)),
            {
              translateX: i,
              translateY: o,
              rotate: Math.atan2(n, t) * bi,
              skewX: Math.atan(c) * bi,
              scaleX: a,
              scaleY: u,
            }
          );
        };
      function wi(t) {
        return 'none' === t
          ? mi
          : (fi || ((fi = document.createElement('DIV')), (si = document.documentElement), (li = document.defaultView)),
            (fi.style.transform = t),
            (t = li.getComputedStyle(si.appendChild(fi), null).getPropertyValue('transform')),
            si.removeChild(fi),
            (t = t.slice(7, -1).split(',')),
            _i(+t[0], +t[1], +t[2], +t[3], +t[4], +t[5]));
      }
      function xi(t) {
        return null == t
          ? mi
          : (hi || (hi = document.createElementNS('http://www.w3.org/2000/svg', 'g')),
            hi.setAttribute('transform', t),
            (t = hi.transform.baseVal.consolidate()) ? ((t = t.matrix), _i(t.a, t.b, t.c, t.d, t.e, t.f)) : mi);
      }
      function Mi(t, n, e, r) {
        function i(t) {
          return t.length ? t.pop() + ' ' : '';
        }
        function o(t, r, i, o, a, u) {
          if (t !== i || r !== o) {
            var c = a.push('translate(', null, n, null, e);
            u.push({ i: c - 4, x: ri(t, i) }, { i: c - 2, x: ri(r, o) });
          } else (i || o) && a.push('translate(' + i + n + o + e);
        }
        function a(t, n, e, o) {
          t !== n
            ? (t - n > 180 ? (n += 360) : n - t > 180 && (t += 360),
              o.push({ i: e.push(i(e) + 'rotate(', null, r) - 2, x: ri(t, n) }))
            : n && e.push(i(e) + 'rotate(' + n + r);
        }
        function u(t, n, e, o) {
          t !== n
            ? o.push({ i: e.push(i(e) + 'skewX(', null, r) - 2, x: ri(t, n) })
            : n && e.push(i(e) + 'skewX(' + n + r);
        }
        function c(t, n, e, r, o, a) {
          if (t !== e || n !== r) {
            var u = o.push(i(o) + 'scale(', null, ',', null, ')');
            a.push({ i: u - 4, x: ri(t, e) }, { i: u - 2, x: ri(n, r) });
          } else (1 === e && 1 === r) || o.push(i(o) + 'scale(' + e + ',' + r + ')');
        }
        return function(n, e) {
          var r = [],
            i = [];
          return (
            (n = t(n)),
            (e = t(e)),
            o(n.translateX, n.translateY, e.translateX, e.translateY, r, i),
            a(n.rotate, e.rotate, r, i),
            u(n.skewX, e.skewX, r, i),
            c(n.scaleX, n.scaleY, e.scaleX, e.scaleY, r, i),
            (n = e = null),
            function(t) {
              var n,
                e = -1,
                o = i.length;
              while (++e < o) r[(n = i[e]).i] = n.x(t);
              return r.join('');
            }
          );
        };
      }
      var Si = Mi(wi, 'px, ', 'px)', 'deg)'),
        Ai = Mi(xi, ', ', ')', ')'),
        Ei = Math.SQRT2,
        ki = 2,
        Ci = 4,
        Ti = 1e-12;
      function Oi(t) {
        return ((t = Math.exp(t)) + 1 / t) / 2;
      }
      function Ni(t) {
        return ((t = Math.exp(t)) - 1 / t) / 2;
      }
      function Pi(t) {
        return ((t = Math.exp(2 * t)) - 1) / (t + 1);
      }
      var Ri = function(t, n) {
        var e,
          r,
          i = t[0],
          o = t[1],
          a = t[2],
          u = n[0],
          c = n[1],
          f = n[2],
          s = u - i,
          l = c - o,
          h = s * s + l * l;
        if (h < Ti)
          (r = Math.log(f / a) / Ei),
            (e = function(t) {
              return [i + t * s, o + t * l, a * Math.exp(Ei * t * r)];
            });
        else {
          var d = Math.sqrt(h),
            p = (f * f - a * a + Ci * h) / (2 * a * ki * d),
            v = (f * f - a * a - Ci * h) / (2 * f * ki * d),
            y = Math.log(Math.sqrt(p * p + 1) - p),
            g = Math.log(Math.sqrt(v * v + 1) - v);
          (r = (g - y) / Ei),
            (e = function(t) {
              var n = t * r,
                e = Oi(y),
                u = (a / (ki * d)) * (e * Pi(Ei * n + y) - Ni(y));
              return [i + u * s, o + u * l, (a * e) / Oi(Ei * n + y)];
            });
        }
        return (e.duration = 1e3 * r), e;
      };
      function ji(t) {
        return function(n, e) {
          var r = t((n = ar(n)).h, (e = ar(e)).h),
            i = Kr(n.s, e.s),
            o = Kr(n.l, e.l),
            a = Kr(n.opacity, e.opacity);
          return function(t) {
            return (n.h = r(t)), (n.s = i(t)), (n.l = o(t)), (n.opacity = a(t)), n + '';
          };
        };
      }
      var Li = ji(Wr),
        Ii = ji(Kr);
      function $i(t, n) {
        var e = Kr((t = wr(t)).l, (n = wr(n)).l),
          r = Kr(t.a, n.a),
          i = Kr(t.b, n.b),
          o = Kr(t.opacity, n.opacity);
        return function(n) {
          return (t.l = e(n)), (t.a = r(n)), (t.b = i(n)), (t.opacity = o(n)), t + '';
        };
      }
      function Fi(t) {
        return function(n, e) {
          var r = t((n = Tr(n)).h, (e = Tr(e)).h),
            i = Kr(n.c, e.c),
            o = Kr(n.l, e.l),
            a = Kr(n.opacity, e.opacity);
          return function(t) {
            return (n.h = r(t)), (n.c = i(t)), (n.l = o(t)), (n.opacity = a(t)), n + '';
          };
        };
      }
      var Di = Fi(Wr),
        zi = Fi(Kr);
      function Ui(t) {
        return (function n(e) {
          function r(n, r) {
            var i = t((n = zr(n)).h, (r = zr(r)).h),
              o = Kr(n.s, r.s),
              a = Kr(n.l, r.l),
              u = Kr(n.opacity, r.opacity);
            return function(t) {
              return (n.h = i(t)), (n.s = o(t)), (n.l = a(Math.pow(t, e))), (n.opacity = u(t)), n + '';
            };
          }
          return (e = +e), (r.gamma = n), r;
        })(1);
      }
      var Bi = Ui(Wr),
        qi = Ui(Kr);
      function Vi(t, n) {
        var e = 0,
          r = n.length - 1,
          i = n[0],
          o = new Array(r < 0 ? 0 : r);
        while (e < r) o[e] = t(i, (i = n[++e]));
        return function(t) {
          var n = Math.max(0, Math.min(r - 1, Math.floor((t *= r))));
          return o[n](t - n);
        };
      }
      var Hi,
        Yi,
        Gi = function(t, n) {
          for (var e = new Array(n), r = 0; r < n; ++r) e[r] = t(r / (n - 1));
          return e;
        },
        Wi = 0,
        Xi = 0,
        Ki = 0,
        Qi = 1e3,
        Zi = 0,
        Ji = 0,
        to = 0,
        no = 'object' === typeof performance && performance.now ? performance : Date,
        eo =
          'object' === typeof window && window.requestAnimationFrame
            ? window.requestAnimationFrame.bind(window)
            : function(t) {
                setTimeout(t, 17);
              };
      function ro() {
        return Ji || (eo(io), (Ji = no.now() + to));
      }
      function io() {
        Ji = 0;
      }
      function oo() {
        this._call = this._time = this._next = null;
      }
      function ao(t, n, e) {
        var r = new oo();
        return r.restart(t, n, e), r;
      }
      function uo() {
        ro(), ++Wi;
        var t,
          n = Hi;
        while (n) (t = Ji - n._time) >= 0 && n._call.call(null, t), (n = n._next);
        --Wi;
      }
      function co() {
        (Ji = (Zi = no.now()) + to), (Wi = Xi = 0);
        try {
          uo();
        } finally {
          (Wi = 0), so(), (Ji = 0);
        }
      }
      function fo() {
        var t = no.now(),
          n = t - Zi;
        n > Qi && ((to -= n), (Zi = t));
      }
      function so() {
        var t,
          n,
          e = Hi,
          r = 1 / 0;
        while (e)
          e._call
            ? (r > e._time && (r = e._time), (t = e), (e = e._next))
            : ((n = e._next), (e._next = null), (e = t ? (t._next = n) : (Hi = n)));
        (Yi = t), lo(r);
      }
      function lo(t) {
        if (!Wi) {
          Xi && (Xi = clearTimeout(Xi));
          var n = t - Ji;
          n > 24
            ? (t < 1 / 0 && (Xi = setTimeout(co, t - no.now() - to)), Ki && (Ki = clearInterval(Ki)))
            : (Ki || ((Zi = no.now()), (Ki = setInterval(fo, Qi))), (Wi = 1), eo(co));
        }
      }
      oo.prototype = ao.prototype = {
        constructor: oo,
        restart: function(t, n, e) {
          if ('function' !== typeof t) throw new TypeError('callback is not a function');
          (e = (null == e ? ro() : +e) + (null == n ? 0 : +n)),
            this._next || Yi === this || (Yi ? (Yi._next = this) : (Hi = this), (Yi = this)),
            (this._call = t),
            (this._time = e),
            lo();
        },
        stop: function() {
          this._call && ((this._call = null), (this._time = 1 / 0), lo());
        },
      };
      var ho = function(t, n, e) {
          var r = new oo();
          return (
            (n = null == n ? 0 : +n),
            r.restart(
              function(e) {
                r.stop(), t(e + n);
              },
              n,
              e
            ),
            r
          );
        },
        po = function(t, n, e) {
          var r = new oo(),
            i = n;
          return null == n
            ? (r.restart(t, n, e), r)
            : ((n = +n),
              (e = null == e ? ro() : +e),
              r.restart(
                function o(a) {
                  (a += i), r.restart(o, (i += n), e), t(a);
                },
                n,
                e
              ),
              r);
        },
        vo = gt('start', 'end', 'interrupt'),
        yo = [],
        go = 0,
        bo = 1,
        mo = 2,
        _o = 3,
        wo = 4,
        xo = 5,
        Mo = 6,
        So = function(t, n, e, r, i, o) {
          var a = t.__transition;
          if (a) {
            if (e in a) return;
          } else t.__transition = {};
          Co(t, e, {
            name: n,
            index: r,
            group: i,
            on: vo,
            tween: yo,
            time: o.time,
            delay: o.delay,
            duration: o.duration,
            ease: o.ease,
            timer: null,
            state: go,
          });
        };
      function Ao(t, n) {
        var e = ko(t, n);
        if (e.state > go) throw new Error('too late; already scheduled');
        return e;
      }
      function Eo(t, n) {
        var e = ko(t, n);
        if (e.state > mo) throw new Error('too late; already started');
        return e;
      }
      function ko(t, n) {
        var e = t.__transition;
        if (!e || !(e = e[n])) throw new Error('transition not found');
        return e;
      }
      function Co(t, n, e) {
        var r,
          i = t.__transition;
        function o(t) {
          (e.state = bo), e.timer.restart(a, e.delay, e.time), e.delay <= t && a(t - e.delay);
        }
        function a(o) {
          var f, s, l, h;
          if (e.state !== bo) return c();
          for (f in i)
            if (((h = i[f]), h.name === e.name)) {
              if (h.state === _o) return ho(a);
              h.state === wo
                ? ((h.state = Mo), h.timer.stop(), h.on.call('interrupt', t, t.__data__, h.index, h.group), delete i[f])
                : +f < n && ((h.state = Mo), h.timer.stop(), delete i[f]);
            }
          if (
            (ho(function() {
              e.state === _o && ((e.state = wo), e.timer.restart(u, e.delay, e.time), u(o));
            }),
            (e.state = mo),
            e.on.call('start', t, t.__data__, e.index, e.group),
            e.state === mo)
          ) {
            for (e.state = _o, r = new Array((l = e.tween.length)), f = 0, s = -1; f < l; ++f)
              (h = e.tween[f].value.call(t, t.__data__, e.index, e.group)) && (r[++s] = h);
            r.length = s + 1;
          }
        }
        function u(n) {
          var i = n < e.duration ? e.ease.call(null, n / e.duration) : (e.timer.restart(c), (e.state = xo), 1),
            o = -1,
            a = r.length;
          while (++o < a) r[o].call(null, i);
          e.state === xo && (e.on.call('end', t, t.__data__, e.index, e.group), c());
        }
        function c() {
          for (var r in ((e.state = Mo), e.timer.stop(), delete i[n], i)) return;
          delete t.__transition;
        }
        (i[n] = e), (e.timer = ao(o, 0, e.time));
      }
      var To = function(t, n) {
          var e,
            r,
            i,
            o = t.__transition,
            a = !0;
          if (o) {
            for (i in ((n = null == n ? null : n + ''), o))
              (e = o[i]).name === n
                ? ((r = e.state > mo && e.state < xo),
                  (e.state = Mo),
                  e.timer.stop(),
                  r && e.on.call('interrupt', t, t.__data__, e.index, e.group),
                  delete o[i])
                : (a = !1);
            a && delete t.__transition;
          }
        },
        Oo = function(t) {
          return this.each(function() {
            To(this, t);
          });
        };
      function No(t, n) {
        var e, r;
        return function() {
          var i = Eo(this, t),
            o = i.tween;
          if (o !== e) {
            r = e = o;
            for (var a = 0, u = r.length; a < u; ++a)
              if (r[a].name === n) {
                (r = r.slice()), r.splice(a, 1);
                break;
              }
          }
          i.tween = r;
        };
      }
      function Po(t, n, e) {
        var r, i;
        if ('function' !== typeof e) throw new Error();
        return function() {
          var o = Eo(this, t),
            a = o.tween;
          if (a !== r) {
            i = (r = a).slice();
            for (var u = { name: n, value: e }, c = 0, f = i.length; c < f; ++c)
              if (i[c].name === n) {
                i[c] = u;
                break;
              }
            c === f && i.push(u);
          }
          o.tween = i;
        };
      }
      var Ro = function(t, n) {
        var e = this._id;
        if (((t += ''), arguments.length < 2)) {
          for (var r, i = ko(this.node(), e).tween, o = 0, a = i.length; o < a; ++o)
            if ((r = i[o]).name === t) return r.value;
          return null;
        }
        return this.each((null == n ? No : Po)(e, t, n));
      };
      function jo(t, n, e) {
        var r = t._id;
        return (
          t.each(function() {
            var t = Eo(this, r);
            (t.value || (t.value = {}))[n] = e.apply(this, arguments);
          }),
          function(t) {
            return ko(t, r).value[n];
          }
        );
      }
      var Lo = function(t, n) {
        var e;
        return ('number' === typeof n ? ri : n instanceof Qe ? Qr : (e = Qe(n)) ? ((n = e), Qr) : di)(t, n);
      };
      function Io(t) {
        return function() {
          this.removeAttribute(t);
        };
      }
      function $o(t) {
        return function() {
          this.removeAttributeNS(t.space, t.local);
        };
      }
      function Fo(t, n, e) {
        var r, i;
        return function() {
          var o = this.getAttribute(t);
          return o === e ? null : o === r ? i : (i = n((r = o), e));
        };
      }
      function Do(t, n, e) {
        var r, i;
        return function() {
          var o = this.getAttributeNS(t.space, t.local);
          return o === e ? null : o === r ? i : (i = n((r = o), e));
        };
      }
      function zo(t, n, e) {
        var r, i, o;
        return function() {
          var a,
            u = e(this);
          if (null != u)
            return (a = this.getAttribute(t)), a === u ? null : a === r && u === i ? o : (o = n((r = a), (i = u)));
          this.removeAttribute(t);
        };
      }
      function Uo(t, n, e) {
        var r, i, o;
        return function() {
          var a,
            u = e(this);
          if (null != u)
            return (
              (a = this.getAttributeNS(t.space, t.local)),
              a === u ? null : a === r && u === i ? o : (o = n((r = a), (i = u)))
            );
          this.removeAttributeNS(t.space, t.local);
        };
      }
      var Bo = function(t, n) {
        var e = _t(t),
          r = 'transform' === e ? Ai : Lo;
        return this.attrTween(
          t,
          'function' === typeof n
            ? (e.local ? Uo : zo)(e, r, jo(this, 'attr.' + t, n))
            : null == n
              ? (e.local ? $o : Io)(e)
              : (e.local ? Do : Fo)(e, r, n + '')
        );
      };
      function qo(t, n) {
        function e() {
          var e = this,
            r = n.apply(e, arguments);
          return (
            r &&
            function(n) {
              e.setAttributeNS(t.space, t.local, r(n));
            }
          );
        }
        return (e._value = n), e;
      }
      function Vo(t, n) {
        function e() {
          var e = this,
            r = n.apply(e, arguments);
          return (
            r &&
            function(n) {
              e.setAttribute(t, r(n));
            }
          );
        }
        return (e._value = n), e;
      }
      var Ho = function(t, n) {
        var e = 'attr.' + t;
        if (arguments.length < 2) return (e = this.tween(e)) && e._value;
        if (null == n) return this.tween(e, null);
        if ('function' !== typeof n) throw new Error();
        var r = _t(t);
        return this.tween(e, (r.local ? qo : Vo)(r, n));
      };
      function Yo(t, n) {
        return function() {
          Ao(this, t).delay = +n.apply(this, arguments);
        };
      }
      function Go(t, n) {
        return (
          (n = +n),
          function() {
            Ao(this, t).delay = n;
          }
        );
      }
      var Wo = function(t) {
        var n = this._id;
        return arguments.length ? this.each(('function' === typeof t ? Yo : Go)(n, t)) : ko(this.node(), n).delay;
      };
      function Xo(t, n) {
        return function() {
          Eo(this, t).duration = +n.apply(this, arguments);
        };
      }
      function Ko(t, n) {
        return (
          (n = +n),
          function() {
            Eo(this, t).duration = n;
          }
        );
      }
      var Qo = function(t) {
        var n = this._id;
        return arguments.length ? this.each(('function' === typeof t ? Xo : Ko)(n, t)) : ko(this.node(), n).duration;
      };
      function Zo(t, n) {
        if ('function' !== typeof n) throw new Error();
        return function() {
          Eo(this, t).ease = n;
        };
      }
      var Jo = function(t) {
          var n = this._id;
          return arguments.length ? this.each(Zo(n, t)) : ko(this.node(), n).ease;
        },
        ta = function(t) {
          'function' !== typeof t && (t = Rt(t));
          for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
            for (var o, a = n[i], u = a.length, c = (r[i] = []), f = 0; f < u; ++f)
              (o = a[f]) && t.call(o, o.__data__, f, a) && c.push(o);
          return new Ma(r, this._parents, this._name, this._id);
        },
        na = function(t) {
          if (t._id !== this._id) throw new Error();
          for (
            var n = this._groups,
              e = t._groups,
              r = n.length,
              i = e.length,
              o = Math.min(r, i),
              a = new Array(r),
              u = 0;
            u < o;
            ++u
          )
            for (var c, f = n[u], s = e[u], l = f.length, h = (a[u] = new Array(l)), d = 0; d < l; ++d)
              (c = f[d] || s[d]) && (h[d] = c);
          for (; u < r; ++u) a[u] = n[u];
          return new Ma(a, this._parents, this._name, this._id);
        };
      function ea(t) {
        return (t + '')
          .trim()
          .split(/^|\s+/)
          .every(function(t) {
            var n = t.indexOf('.');
            return n >= 0 && (t = t.slice(0, n)), !t || 'start' === t;
          });
      }
      function ra(t, n, e) {
        var r,
          i,
          o = ea(n) ? Ao : Eo;
        return function() {
          var a = o(this, t),
            u = a.on;
          u !== r && (i = (r = u).copy()).on(n, e), (a.on = i);
        };
      }
      var ia = function(t, n) {
        var e = this._id;
        return arguments.length < 2 ? ko(this.node(), e).on.on(t) : this.each(ra(e, t, n));
      };
      function oa(t) {
        return function() {
          var n = this.parentNode;
          for (var e in this.__transition) if (+e !== t) return;
          n && n.removeChild(this);
        };
      }
      var aa = function() {
          return this.on('end.remove', oa(this._id));
        },
        ua = function(t) {
          var n = this._name,
            e = this._id;
          'function' !== typeof t && (t = At(t));
          for (var r = this._groups, i = r.length, o = new Array(i), a = 0; a < i; ++a)
            for (var u, c, f = r[a], s = f.length, l = (o[a] = new Array(s)), h = 0; h < s; ++h)
              (u = f[h]) &&
                (c = t.call(u, u.__data__, h, f)) &&
                ('__data__' in u && (c.__data__ = u.__data__), (l[h] = c), So(l[h], n, e, h, l, ko(u, e)));
          return new Ma(o, this._parents, n, e);
        },
        ca = function(t) {
          var n = this._name,
            e = this._id;
          'function' !== typeof t && (t = Ct(t));
          for (var r = this._groups, i = r.length, o = [], a = [], u = 0; u < i; ++u)
            for (var c, f = r[u], s = f.length, l = 0; l < s; ++l)
              if ((c = f[l])) {
                for (var h, d = t.call(c, c.__data__, l, f), p = ko(c, e), v = 0, y = d.length; v < y; ++v)
                  (h = d[v]) && So(h, n, e, v, d, p);
                o.push(d), a.push(c);
              }
          return new Ma(o, a, n, e);
        },
        fa = le.prototype.constructor,
        sa = function() {
          return new fa(this._groups, this._parents);
        };
      function la(t, n) {
        var e, r, i;
        return function() {
          var o = dn(this, t),
            a = (this.style.removeProperty(t), dn(this, t));
          return o === a ? null : o === e && a === r ? i : (i = n((e = o), (r = a)));
        };
      }
      function ha(t) {
        return function() {
          this.style.removeProperty(t);
        };
      }
      function da(t, n, e) {
        var r, i;
        return function() {
          var o = dn(this, t);
          return o === e ? null : o === r ? i : (i = n((r = o), e));
        };
      }
      function pa(t, n, e) {
        var r, i, o;
        return function() {
          var a = dn(this, t),
            u = e(this);
          return (
            null == u && (this.style.removeProperty(t), (u = dn(this, t))),
            a === u ? null : a === r && u === i ? o : (o = n((r = a), (i = u)))
          );
        };
      }
      var va = function(t, n, e) {
        var r = 'transform' === (t += '') ? Si : Lo;
        return null == n
          ? this.styleTween(t, la(t, r)).on('end.style.' + t, ha(t))
          : this.styleTween(t, 'function' === typeof n ? pa(t, r, jo(this, 'style.' + t, n)) : da(t, r, n + ''), e);
      };
      function ya(t, n, e) {
        function r() {
          var r = this,
            i = n.apply(r, arguments);
          return (
            i &&
            function(n) {
              r.style.setProperty(t, i(n), e);
            }
          );
        }
        return (r._value = n), r;
      }
      var ga = function(t, n, e) {
        var r = 'style.' + (t += '');
        if (arguments.length < 2) return (r = this.tween(r)) && r._value;
        if (null == n) return this.tween(r, null);
        if ('function' !== typeof n) throw new Error();
        return this.tween(r, ya(t, n, null == e ? '' : e));
      };
      function ba(t) {
        return function() {
          this.textContent = t;
        };
      }
      function ma(t) {
        return function() {
          var n = t(this);
          this.textContent = null == n ? '' : n;
        };
      }
      var _a = function(t) {
          return this.tween('text', 'function' === typeof t ? ma(jo(this, 'text', t)) : ba(null == t ? '' : t + ''));
        },
        wa = function() {
          for (var t = this._name, n = this._id, e = Aa(), r = this._groups, i = r.length, o = 0; o < i; ++o)
            for (var a, u = r[o], c = u.length, f = 0; f < c; ++f)
              if ((a = u[f])) {
                var s = ko(a, n);
                So(a, t, e, f, u, {
                  time: s.time + s.delay + s.duration,
                  delay: 0,
                  duration: s.duration,
                  ease: s.ease,
                });
              }
          return new Ma(r, this._parents, t, e);
        },
        xa = 0;
      function Ma(t, n, e, r) {
        (this._groups = t), (this._parents = n), (this._name = e), (this._id = r);
      }
      function Sa(t) {
        return le().transition(t);
      }
      function Aa() {
        return ++xa;
      }
      var Ea = le.prototype;
      function ka(t) {
        return +t;
      }
      function Ca(t) {
        return t * t;
      }
      function Ta(t) {
        return t * (2 - t);
      }
      function Oa(t) {
        return ((t *= 2) <= 1 ? t * t : --t * (2 - t) + 1) / 2;
      }
      function Na(t) {
        return t * t * t;
      }
      function Pa(t) {
        return --t * t * t + 1;
      }
      function Ra(t) {
        return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
      }
      Ma.prototype = Sa.prototype = {
        constructor: Ma,
        select: ua,
        selectAll: ca,
        filter: ta,
        merge: na,
        selection: sa,
        transition: wa,
        call: Ea.call,
        nodes: Ea.nodes,
        node: Ea.node,
        size: Ea.size,
        empty: Ea.empty,
        each: Ea.each,
        on: ia,
        attr: Bo,
        attrTween: Ho,
        style: va,
        styleTween: ga,
        text: _a,
        remove: aa,
        tween: Ro,
        delay: Wo,
        duration: Qo,
        ease: Jo,
      };
      var ja = 3,
        La = (function t(n) {
          function e(t) {
            return Math.pow(t, n);
          }
          return (n = +n), (e.exponent = t), e;
        })(ja),
        Ia = (function t(n) {
          function e(t) {
            return 1 - Math.pow(1 - t, n);
          }
          return (n = +n), (e.exponent = t), e;
        })(ja),
        $a = (function t(n) {
          function e(t) {
            return ((t *= 2) <= 1 ? Math.pow(t, n) : 2 - Math.pow(2 - t, n)) / 2;
          }
          return (n = +n), (e.exponent = t), e;
        })(ja),
        Fa = Math.PI,
        Da = Fa / 2;
      function za(t) {
        return 1 - Math.cos(t * Da);
      }
      function Ua(t) {
        return Math.sin(t * Da);
      }
      function Ba(t) {
        return (1 - Math.cos(Fa * t)) / 2;
      }
      function qa(t) {
        return Math.pow(2, 10 * t - 10);
      }
      function Va(t) {
        return 1 - Math.pow(2, -10 * t);
      }
      function Ha(t) {
        return ((t *= 2) <= 1 ? Math.pow(2, 10 * t - 10) : 2 - Math.pow(2, 10 - 10 * t)) / 2;
      }
      function Ya(t) {
        return 1 - Math.sqrt(1 - t * t);
      }
      function Ga(t) {
        return Math.sqrt(1 - --t * t);
      }
      function Wa(t) {
        return ((t *= 2) <= 1 ? 1 - Math.sqrt(1 - t * t) : Math.sqrt(1 - (t -= 2) * t) + 1) / 2;
      }
      var Xa = 4 / 11,
        Ka = 6 / 11,
        Qa = 8 / 11,
        Za = 0.75,
        Ja = 9 / 11,
        tu = 10 / 11,
        nu = 0.9375,
        eu = 21 / 22,
        ru = 63 / 64,
        iu = 1 / Xa / Xa;
      function ou(t) {
        return 1 - au(1 - t);
      }
      function au(t) {
        return (t = +t) < Xa
          ? iu * t * t
          : t < Qa
            ? iu * (t -= Ka) * t + Za
            : t < tu
              ? iu * (t -= Ja) * t + nu
              : iu * (t -= eu) * t + ru;
      }
      function uu(t) {
        return ((t *= 2) <= 1 ? 1 - au(1 - t) : au(t - 1) + 1) / 2;
      }
      var cu = 1.70158,
        fu = (function t(n) {
          function e(t) {
            return t * t * ((n + 1) * t - n);
          }
          return (n = +n), (e.overshoot = t), e;
        })(cu),
        su = (function t(n) {
          function e(t) {
            return --t * t * ((n + 1) * t + n) + 1;
          }
          return (n = +n), (e.overshoot = t), e;
        })(cu),
        lu = (function t(n) {
          function e(t) {
            return ((t *= 2) < 1 ? t * t * ((n + 1) * t - n) : (t -= 2) * t * ((n + 1) * t + n) + 2) / 2;
          }
          return (n = +n), (e.overshoot = t), e;
        })(cu),
        hu = 2 * Math.PI,
        du = 1,
        pu = 0.3,
        vu = (function t(n, e) {
          var r = Math.asin(1 / (n = Math.max(1, n))) * (e /= hu);
          function i(t) {
            return n * Math.pow(2, 10 * --t) * Math.sin((r - t) / e);
          }
          return (
            (i.amplitude = function(n) {
              return t(n, e * hu);
            }),
            (i.period = function(e) {
              return t(n, e);
            }),
            i
          );
        })(du, pu),
        yu = (function t(n, e) {
          var r = Math.asin(1 / (n = Math.max(1, n))) * (e /= hu);
          function i(t) {
            return 1 - n * Math.pow(2, -10 * (t = +t)) * Math.sin((t + r) / e);
          }
          return (
            (i.amplitude = function(n) {
              return t(n, e * hu);
            }),
            (i.period = function(e) {
              return t(n, e);
            }),
            i
          );
        })(du, pu),
        gu = (function t(n, e) {
          var r = Math.asin(1 / (n = Math.max(1, n))) * (e /= hu);
          function i(t) {
            return (
              ((t = 2 * t - 1) < 0
                ? n * Math.pow(2, 10 * t) * Math.sin((r - t) / e)
                : 2 - n * Math.pow(2, -10 * t) * Math.sin((r + t) / e)) / 2
            );
          }
          return (
            (i.amplitude = function(n) {
              return t(n, e * hu);
            }),
            (i.period = function(e) {
              return t(n, e);
            }),
            i
          );
        })(du, pu),
        bu = { time: null, delay: 0, duration: 250, ease: Ra };
      function mu(t, n) {
        var e;
        while (!(e = t.__transition) || !(e = e[n])) if (!(t = t.parentNode)) return (bu.time = ro()), bu;
        return e;
      }
      var _u = function(t) {
        var n, e;
        t instanceof Ma
          ? ((n = t._id), (t = t._name))
          : ((n = Aa()), ((e = bu).time = ro()), (t = null == t ? null : t + ''));
        for (var r = this._groups, i = r.length, o = 0; o < i; ++o)
          for (var a, u = r[o], c = u.length, f = 0; f < c; ++f) (a = u[f]) && So(a, t, n, f, u, e || mu(a, n));
        return new Ma(r, this._parents, t, n);
      };
      (le.prototype.interrupt = Oo), (le.prototype.transition = _u);
      var wu = [null],
        xu = function(t, n) {
          var e,
            r,
            i = t.__transition;
          if (i)
            for (r in ((n = null == n ? null : n + ''), i))
              if ((e = i[r]).state > bo && e.name === n) return new Ma([[t]], wu, n, +r);
          return null;
        },
        Mu = function(t) {
          return function() {
            return t;
          };
        },
        Su = function(t, n, e) {
          (this.target = t), (this.type = n), (this.selection = e);
        };
      function Au() {
        Xn.stopImmediatePropagation();
      }
      var Eu = function() {
          Xn.preventDefault(), Xn.stopImmediatePropagation();
        },
        ku = { name: 'drag' },
        Cu = { name: 'space' },
        Tu = { name: 'handle' },
        Ou = { name: 'center' },
        Nu = {
          name: 'x',
          handles: ['e', 'w'].map(Du),
          input: function(t, n) {
            return t && [[t[0], n[0][1]], [t[1], n[1][1]]];
          },
          output: function(t) {
            return t && [t[0][0], t[1][0]];
          },
        },
        Pu = {
          name: 'y',
          handles: ['n', 's'].map(Du),
          input: function(t, n) {
            return t && [[n[0][0], t[0]], [n[1][0], t[1]]];
          },
          output: function(t) {
            return t && [t[0][1], t[1][1]];
          },
        },
        Ru = {
          name: 'xy',
          handles: ['n', 'e', 's', 'w', 'nw', 'ne', 'se', 'sw'].map(Du),
          input: function(t) {
            return t;
          },
          output: function(t) {
            return t;
          },
        },
        ju = {
          overlay: 'crosshair',
          selection: 'move',
          n: 'ns-resize',
          e: 'ew-resize',
          s: 'ns-resize',
          w: 'ew-resize',
          nw: 'nwse-resize',
          ne: 'nesw-resize',
          se: 'nwse-resize',
          sw: 'nesw-resize',
        },
        Lu = { e: 'w', w: 'e', nw: 'ne', ne: 'nw', se: 'sw', sw: 'se' },
        Iu = { n: 's', s: 'n', nw: 'sw', ne: 'se', se: 'ne', sw: 'nw' },
        $u = { overlay: 1, selection: 1, n: null, e: 1, s: null, w: -1, nw: -1, ne: 1, se: 1, sw: -1 },
        Fu = { overlay: 1, selection: 1, n: -1, e: null, s: 1, w: null, nw: -1, ne: -1, se: 1, sw: 1 };
      function Du(t) {
        return { type: t };
      }
      function zu() {
        return !Xn.button;
      }
      function Uu() {
        var t = this.ownerSVGElement || this;
        return [[0, 0], [t.width.baseVal.value, t.height.baseVal.value]];
      }
      function Bu(t) {
        while (!t.__brush) if (!(t = t.parentNode)) return;
        return t.__brush;
      }
      function qu(t) {
        return t[0][0] === t[1][0] || t[0][1] === t[1][1];
      }
      function Vu(t) {
        var n = t.__brush;
        return n ? n.dim.output(n.selection) : null;
      }
      function Hu() {
        return Wu(Nu);
      }
      function Yu() {
        return Wu(Pu);
      }
      var Gu = function() {
        return Wu(Ru);
      };
      function Wu(t) {
        var n,
          e = Uu,
          r = zu,
          i = gt(a, 'start', 'brush', 'end'),
          o = 6;
        function a(n) {
          var e = n
            .property('__brush', l)
            .selectAll('.overlay')
            .data([Du('overlay')]);
          e
            .enter()
            .append('rect')
            .attr('class', 'overlay')
            .attr('pointer-events', 'all')
            .attr('cursor', ju.overlay)
            .merge(e)
            .each(function() {
              var t = Bu(this).extent;
              he(this)
                .attr('x', t[0][0])
                .attr('y', t[0][1])
                .attr('width', t[1][0] - t[0][0])
                .attr('height', t[1][1] - t[0][1]);
            }),
            n
              .selectAll('.selection')
              .data([Du('selection')])
              .enter()
              .append('rect')
              .attr('class', 'selection')
              .attr('cursor', ju.selection)
              .attr('fill', '#777')
              .attr('fill-opacity', 0.3)
              .attr('stroke', '#fff')
              .attr('shape-rendering', 'crispEdges');
          var r = n.selectAll('.handle').data(t.handles, function(t) {
            return t.type;
          });
          r.exit().remove(),
            r
              .enter()
              .append('rect')
              .attr('class', function(t) {
                return 'handle handle--' + t.type;
              })
              .attr('cursor', function(t) {
                return ju[t.type];
              }),
            n
              .each(u)
              .attr('fill', 'none')
              .attr('pointer-events', 'all')
              .style('-webkit-tap-highlight-color', 'rgba(0,0,0,0)')
              .on('mousedown.brush touchstart.brush', s);
        }
        function u() {
          var t = he(this),
            n = Bu(this).selection;
          n
            ? (t
                .selectAll('.selection')
                .style('display', null)
                .attr('x', n[0][0])
                .attr('y', n[0][1])
                .attr('width', n[1][0] - n[0][0])
                .attr('height', n[1][1] - n[0][1]),
              t
                .selectAll('.handle')
                .style('display', null)
                .attr('x', function(t) {
                  return 'e' === t.type[t.type.length - 1] ? n[1][0] - o / 2 : n[0][0] - o / 2;
                })
                .attr('y', function(t) {
                  return 's' === t.type[0] ? n[1][1] - o / 2 : n[0][1] - o / 2;
                })
                .attr('width', function(t) {
                  return 'n' === t.type || 's' === t.type ? n[1][0] - n[0][0] + o : o;
                })
                .attr('height', function(t) {
                  return 'e' === t.type || 'w' === t.type ? n[1][1] - n[0][1] + o : o;
                }))
            : t
                .selectAll('.selection,.handle')
                .style('display', 'none')
                .attr('x', null)
                .attr('y', null)
                .attr('width', null)
                .attr('height', null);
        }
        function c(t, n) {
          return t.__brush.emitter || new f(t, n);
        }
        function f(t, n) {
          (this.that = t), (this.args = n), (this.state = t.__brush), (this.active = 0);
        }
        function s() {
          if (Xn.touches) {
            if (Xn.changedTouches.length < Xn.touches.length) return Eu();
          } else if (n) return;
          if (r.apply(this, arguments)) {
            var e,
              i,
              o,
              a,
              f,
              s,
              l,
              h,
              d,
              p,
              v,
              y,
              g,
              b = this,
              m = Xn.target.__data__.type,
              _ = 'selection' === (Xn.metaKey ? (m = 'overlay') : m) ? ku : Xn.altKey ? Ou : Tu,
              w = t === Pu ? null : $u[m],
              x = t === Nu ? null : Fu[m],
              M = Bu(b),
              S = M.extent,
              A = M.selection,
              E = S[0][0],
              k = S[0][1],
              C = S[1][0],
              T = S[1][1],
              O = w && x && Xn.shiftKey,
              N = me(b),
              P = N,
              R = c(b, arguments).beforestart();
            'overlay' === m
              ? (M.selection = A = [
                  [(e = t === Pu ? E : N[0]), (o = t === Nu ? k : N[1])],
                  [(f = t === Pu ? C : e), (l = t === Nu ? T : o)],
                ])
              : ((e = A[0][0]), (o = A[0][1]), (f = A[1][0]), (l = A[1][1])),
              (i = e),
              (a = o),
              (s = f),
              (h = l);
            var j = he(b).attr('pointer-events', 'none'),
              L = j.selectAll('.overlay').attr('cursor', ju[m]);
            if (Xn.touches) j.on('touchmove.brush', $, !0).on('touchend.brush touchcancel.brush', D, !0);
            else {
              var I = he(Xn.view)
                .on('keydown.brush', z, !0)
                .on('keyup.brush', U, !0)
                .on('mousemove.brush', $, !0)
                .on('mouseup.brush', D, !0);
              Ae(Xn.view);
            }
            Au(), To(b), u.call(b), R.start();
          }
          function $() {
            var t = me(b);
            !O || y || g || (Math.abs(t[0] - P[0]) > Math.abs(t[1] - P[1]) ? (g = !0) : (y = !0)),
              (P = t),
              (v = !0),
              Eu(),
              F();
          }
          function F() {
            var t;
            switch (((d = P[0] - N[0]), (p = P[1] - N[1]), _)) {
              case Cu:
              case ku:
                w && ((d = Math.max(E - e, Math.min(C - f, d))), (i = e + d), (s = f + d)),
                  x && ((p = Math.max(k - o, Math.min(T - l, p))), (a = o + p), (h = l + p));
                break;
              case Tu:
                w < 0
                  ? ((d = Math.max(E - e, Math.min(C - e, d))), (i = e + d), (s = f))
                  : w > 0 && ((d = Math.max(E - f, Math.min(C - f, d))), (i = e), (s = f + d)),
                  x < 0
                    ? ((p = Math.max(k - o, Math.min(T - o, p))), (a = o + p), (h = l))
                    : x > 0 && ((p = Math.max(k - l, Math.min(T - l, p))), (a = o), (h = l + p));
                break;
              case Ou:
                w && ((i = Math.max(E, Math.min(C, e - d * w))), (s = Math.max(E, Math.min(C, f + d * w)))),
                  x && ((a = Math.max(k, Math.min(T, o - p * x))), (h = Math.max(k, Math.min(T, l + p * x))));
                break;
            }
            s < i &&
              ((w *= -1),
              (t = e),
              (e = f),
              (f = t),
              (t = i),
              (i = s),
              (s = t),
              m in Lu && L.attr('cursor', ju[(m = Lu[m])])),
              h < a &&
                ((x *= -1),
                (t = o),
                (o = l),
                (l = t),
                (t = a),
                (a = h),
                (h = t),
                m in Iu && L.attr('cursor', ju[(m = Iu[m])])),
              M.selection && (A = M.selection),
              y && ((i = A[0][0]), (s = A[1][0])),
              g && ((a = A[0][1]), (h = A[1][1])),
              (A[0][0] === i && A[0][1] === a && A[1][0] === s && A[1][1] === h) ||
                ((M.selection = [[i, a], [s, h]]), u.call(b), R.brush());
          }
          function D() {
            if ((Au(), Xn.touches)) {
              if (Xn.touches.length) return;
              n && clearTimeout(n),
                (n = setTimeout(function() {
                  n = null;
                }, 500)),
                j.on('touchmove.brush touchend.brush touchcancel.brush', null);
            } else Ee(Xn.view, v), I.on('keydown.brush keyup.brush mousemove.brush mouseup.brush', null);
            j.attr('pointer-events', 'all'),
              L.attr('cursor', ju.overlay),
              M.selection && (A = M.selection),
              qu(A) && ((M.selection = null), u.call(b)),
              R.end();
          }
          function z() {
            switch (Xn.keyCode) {
              case 16:
                O = w && x;
                break;
              case 18:
                _ === Tu &&
                  (w && ((f = s - d * w), (e = i + d * w)), x && ((l = h - p * x), (o = a + p * x)), (_ = Ou), F());
                break;
              case 32:
                (_ !== Tu && _ !== Ou) ||
                  (w < 0 ? (f = s - d) : w > 0 && (e = i - d),
                  x < 0 ? (l = h - p) : x > 0 && (o = a - p),
                  (_ = Cu),
                  L.attr('cursor', ju.selection),
                  F());
                break;
              default:
                return;
            }
            Eu();
          }
          function U() {
            switch (Xn.keyCode) {
              case 16:
                O && ((y = g = O = !1), F());
                break;
              case 18:
                _ === Ou && (w < 0 ? (f = s) : w > 0 && (e = i), x < 0 ? (l = h) : x > 0 && (o = a), (_ = Tu), F());
                break;
              case 32:
                _ === Cu &&
                  (Xn.altKey
                    ? (w && ((f = s - d * w), (e = i + d * w)), x && ((l = h - p * x), (o = a + p * x)), (_ = Ou))
                    : (w < 0 ? (f = s) : w > 0 && (e = i), x < 0 ? (l = h) : x > 0 && (o = a), (_ = Tu)),
                  L.attr('cursor', ju[m]),
                  F());
                break;
              default:
                return;
            }
            Eu();
          }
        }
        function l() {
          var n = this.__brush || { selection: null };
          return (n.extent = e.apply(this, arguments)), (n.dim = t), n;
        }
        return (
          (a.move = function(n, e) {
            n.selection
              ? n
                  .on('start.brush', function() {
                    c(this, arguments)
                      .beforestart()
                      .start();
                  })
                  .on('interrupt.brush end.brush', function() {
                    c(this, arguments).end();
                  })
                  .tween('brush', function() {
                    var n = this,
                      r = n.__brush,
                      i = c(n, arguments),
                      o = r.selection,
                      a = t.input('function' === typeof e ? e.apply(this, arguments) : e, r.extent),
                      f = pi(o, a);
                    function s(t) {
                      (r.selection = 1 === t && qu(a) ? null : f(t)), u.call(n), i.brush();
                    }
                    return o && a ? s : s(1);
                  })
              : n.each(function() {
                  var n = this,
                    r = arguments,
                    i = n.__brush,
                    o = t.input('function' === typeof e ? e.apply(n, r) : e, i.extent),
                    a = c(n, r).beforestart();
                  To(n),
                    (i.selection = null == o || qu(o) ? null : o),
                    u.call(n),
                    a
                      .start()
                      .brush()
                      .end();
                });
          }),
          (f.prototype = {
            beforestart: function() {
              return 1 === ++this.active && ((this.state.emitter = this), (this.starting = !0)), this;
            },
            start: function() {
              return this.starting && ((this.starting = !1), this.emit('start')), this;
            },
            brush: function() {
              return this.emit('brush'), this;
            },
            end: function() {
              return 0 === --this.active && (delete this.state.emitter, this.emit('end')), this;
            },
            emit: function(n) {
              re(new Su(a, n, t.output(this.state.selection)), i.apply, i, [n, this.that, this.args]);
            },
          }),
          (a.extent = function(t) {
            return arguments.length
              ? ((e = 'function' === typeof t ? t : Mu([[+t[0][0], +t[0][1]], [+t[1][0], +t[1][1]]])), a)
              : e;
          }),
          (a.filter = function(t) {
            return arguments.length ? ((r = 'function' === typeof t ? t : Mu(!!t)), a) : r;
          }),
          (a.handleSize = function(t) {
            return arguments.length ? ((o = +t), a) : o;
          }),
          (a.on = function() {
            var t = i.on.apply(i, arguments);
            return t === i ? a : t;
          }),
          a
        );
      }
      var Xu = Math.cos,
        Ku = Math.sin,
        Qu = Math.PI,
        Zu = Qu / 2,
        Ju = 2 * Qu,
        tc = Math.max;
      function nc(t) {
        return function(n, e) {
          return t(n.source.value + n.target.value, e.source.value + e.target.value);
        };
      }
      var ec = function() {
          var t = 0,
            n = null,
            e = null,
            r = null;
          function i(i) {
            var o,
              a,
              u,
              c,
              f,
              s,
              l = i.length,
              h = [],
              d = S(l),
              p = [],
              v = [],
              y = (v.groups = new Array(l)),
              g = new Array(l * l);
            (o = 0), (f = -1);
            while (++f < l) {
              (a = 0), (s = -1);
              while (++s < l) a += i[f][s];
              h.push(a), p.push(S(l)), (o += a);
            }
            n &&
              d.sort(function(t, e) {
                return n(h[t], h[e]);
              }),
              e &&
                p.forEach(function(t, n) {
                  t.sort(function(t, r) {
                    return e(i[n][t], i[n][r]);
                  });
                }),
              (o = tc(0, Ju - t * l) / o),
              (c = o ? t : Ju / l),
              (a = 0),
              (f = -1);
            while (++f < l) {
              (u = a), (s = -1);
              while (++s < l) {
                var b = d[f],
                  m = p[b][s],
                  _ = i[b][m],
                  w = a,
                  x = (a += _ * o);
                g[m * l + b] = { index: b, subindex: m, startAngle: w, endAngle: x, value: _ };
              }
              (y[b] = { index: b, startAngle: u, endAngle: a, value: h[b] }), (a += c);
            }
            f = -1;
            while (++f < l) {
              s = f - 1;
              while (++s < l) {
                var M = g[s * l + f],
                  A = g[f * l + s];
                (M.value || A.value) && v.push(M.value < A.value ? { source: A, target: M } : { source: M, target: A });
              }
            }
            return r ? v.sort(r) : v;
          }
          return (
            (i.padAngle = function(n) {
              return arguments.length ? ((t = tc(0, n)), i) : t;
            }),
            (i.sortGroups = function(t) {
              return arguments.length ? ((n = t), i) : n;
            }),
            (i.sortSubgroups = function(t) {
              return arguments.length ? ((e = t), i) : e;
            }),
            (i.sortChords = function(t) {
              return arguments.length ? (null == t ? (r = null) : ((r = nc(t))._ = t), i) : r && r._;
            }),
            i
          );
        },
        rc = Array.prototype.slice,
        ic = function(t) {
          return function() {
            return t;
          };
        },
        oc = Math.PI,
        ac = 2 * oc,
        uc = 1e-6,
        cc = ac - uc;
      function fc() {
        (this._x0 = this._y0 = this._x1 = this._y1 = null), (this._ = '');
      }
      function sc() {
        return new fc();
      }
      fc.prototype = sc.prototype = {
        constructor: fc,
        moveTo: function(t, n) {
          this._ += 'M' + (this._x0 = this._x1 = +t) + ',' + (this._y0 = this._y1 = +n);
        },
        closePath: function() {
          null !== this._x1 && ((this._x1 = this._x0), (this._y1 = this._y0), (this._ += 'Z'));
        },
        lineTo: function(t, n) {
          this._ += 'L' + (this._x1 = +t) + ',' + (this._y1 = +n);
        },
        quadraticCurveTo: function(t, n, e, r) {
          this._ += 'Q' + +t + ',' + +n + ',' + (this._x1 = +e) + ',' + (this._y1 = +r);
        },
        bezierCurveTo: function(t, n, e, r, i, o) {
          this._ += 'C' + +t + ',' + +n + ',' + +e + ',' + +r + ',' + (this._x1 = +i) + ',' + (this._y1 = +o);
        },
        arcTo: function(t, n, e, r, i) {
          (t = +t), (n = +n), (e = +e), (r = +r), (i = +i);
          var o = this._x1,
            a = this._y1,
            u = e - t,
            c = r - n,
            f = o - t,
            s = a - n,
            l = f * f + s * s;
          if (i < 0) throw new Error('negative radius: ' + i);
          if (null === this._x1) this._ += 'M' + (this._x1 = t) + ',' + (this._y1 = n);
          else if (l > uc)
            if (Math.abs(s * u - c * f) > uc && i) {
              var h = e - o,
                d = r - a,
                p = u * u + c * c,
                v = h * h + d * d,
                y = Math.sqrt(p),
                g = Math.sqrt(l),
                b = i * Math.tan((oc - Math.acos((p + l - v) / (2 * y * g))) / 2),
                m = b / g,
                _ = b / y;
              Math.abs(m - 1) > uc && (this._ += 'L' + (t + m * f) + ',' + (n + m * s)),
                (this._ +=
                  'A' +
                  i +
                  ',' +
                  i +
                  ',0,0,' +
                  +(s * h > f * d) +
                  ',' +
                  (this._x1 = t + _ * u) +
                  ',' +
                  (this._y1 = n + _ * c));
            } else this._ += 'L' + (this._x1 = t) + ',' + (this._y1 = n);
          else;
        },
        arc: function(t, n, e, r, i, o) {
          (t = +t), (n = +n), (e = +e);
          var a = e * Math.cos(r),
            u = e * Math.sin(r),
            c = t + a,
            f = n + u,
            s = 1 ^ o,
            l = o ? r - i : i - r;
          if (e < 0) throw new Error('negative radius: ' + e);
          null === this._x1
            ? (this._ += 'M' + c + ',' + f)
            : (Math.abs(this._x1 - c) > uc || Math.abs(this._y1 - f) > uc) && (this._ += 'L' + c + ',' + f),
            e &&
              (l < 0 && (l = (l % ac) + ac),
              l > cc
                ? (this._ +=
                    'A' +
                    e +
                    ',' +
                    e +
                    ',0,1,' +
                    s +
                    ',' +
                    (t - a) +
                    ',' +
                    (n - u) +
                    'A' +
                    e +
                    ',' +
                    e +
                    ',0,1,' +
                    s +
                    ',' +
                    (this._x1 = c) +
                    ',' +
                    (this._y1 = f))
                : l > uc &&
                  (this._ +=
                    'A' +
                    e +
                    ',' +
                    e +
                    ',0,' +
                    +(l >= oc) +
                    ',' +
                    s +
                    ',' +
                    (this._x1 = t + e * Math.cos(i)) +
                    ',' +
                    (this._y1 = n + e * Math.sin(i))));
        },
        rect: function(t, n, e, r) {
          this._ +=
            'M' + (this._x0 = this._x1 = +t) + ',' + (this._y0 = this._y1 = +n) + 'h' + +e + 'v' + +r + 'h' + -e + 'Z';
        },
        toString: function() {
          return this._;
        },
      };
      var lc = sc;
      function hc(t) {
        return t.source;
      }
      function dc(t) {
        return t.target;
      }
      function pc(t) {
        return t.radius;
      }
      function vc(t) {
        return t.startAngle;
      }
      function yc(t) {
        return t.endAngle;
      }
      var gc = function() {
          var t = hc,
            n = dc,
            e = pc,
            r = vc,
            i = yc,
            o = null;
          function a() {
            var a,
              u = rc.call(arguments),
              c = t.apply(this, u),
              f = n.apply(this, u),
              s = +e.apply(this, ((u[0] = c), u)),
              l = r.apply(this, u) - Zu,
              h = i.apply(this, u) - Zu,
              d = s * Xu(l),
              p = s * Ku(l),
              v = +e.apply(this, ((u[0] = f), u)),
              y = r.apply(this, u) - Zu,
              g = i.apply(this, u) - Zu;
            if (
              (o || (o = a = lc()),
              o.moveTo(d, p),
              o.arc(0, 0, s, l, h),
              (l === y && h === g) || (o.quadraticCurveTo(0, 0, v * Xu(y), v * Ku(y)), o.arc(0, 0, v, y, g)),
              o.quadraticCurveTo(0, 0, d, p),
              o.closePath(),
              a)
            )
              return (o = null), a + '' || null;
          }
          return (
            (a.radius = function(t) {
              return arguments.length ? ((e = 'function' === typeof t ? t : ic(+t)), a) : e;
            }),
            (a.startAngle = function(t) {
              return arguments.length ? ((r = 'function' === typeof t ? t : ic(+t)), a) : r;
            }),
            (a.endAngle = function(t) {
              return arguments.length ? ((i = 'function' === typeof t ? t : ic(+t)), a) : i;
            }),
            (a.source = function(n) {
              return arguments.length ? ((t = n), a) : t;
            }),
            (a.target = function(t) {
              return arguments.length ? ((n = t), a) : n;
            }),
            (a.context = function(t) {
              return arguments.length ? ((o = null == t ? null : t), a) : o;
            }),
            a
          );
        },
        bc = '$';
      function mc() {}
      function _c(t, n) {
        var e = new mc();
        if (t instanceof mc)
          t.each(function(t, n) {
            e.set(n, t);
          });
        else if (Array.isArray(t)) {
          var r,
            i = -1,
            o = t.length;
          if (null == n) while (++i < o) e.set(i, t[i]);
          else while (++i < o) e.set(n((r = t[i]), i, t), r);
        } else if (t) for (var a in t) e.set(a, t[a]);
        return e;
      }
      mc.prototype = _c.prototype = {
        constructor: mc,
        has: function(t) {
          return bc + t in this;
        },
        get: function(t) {
          return this[bc + t];
        },
        set: function(t, n) {
          return (this[bc + t] = n), this;
        },
        remove: function(t) {
          var n = bc + t;
          return n in this && delete this[n];
        },
        clear: function() {
          for (var t in this) t[0] === bc && delete this[t];
        },
        keys: function() {
          var t = [];
          for (var n in this) n[0] === bc && t.push(n.slice(1));
          return t;
        },
        values: function() {
          var t = [];
          for (var n in this) n[0] === bc && t.push(this[n]);
          return t;
        },
        entries: function() {
          var t = [];
          for (var n in this) n[0] === bc && t.push({ key: n.slice(1), value: this[n] });
          return t;
        },
        size: function() {
          var t = 0;
          for (var n in this) n[0] === bc && ++t;
          return t;
        },
        empty: function() {
          for (var t in this) if (t[0] === bc) return !1;
          return !0;
        },
        each: function(t) {
          for (var n in this) n[0] === bc && t(this[n], n.slice(1), this);
        },
      };
      var wc = _c,
        xc = function() {
          var t,
            n,
            e,
            r = [],
            i = [];
          function o(e, i, a, u) {
            if (i >= r.length) return null != t && e.sort(t), null != n ? n(e) : e;
            var c,
              f,
              s,
              l = -1,
              h = e.length,
              d = r[i++],
              p = wc(),
              v = a();
            while (++l < h) (s = p.get((c = d((f = e[l])) + ''))) ? s.push(f) : p.set(c, [f]);
            return (
              p.each(function(t, n) {
                u(v, n, o(t, i, a, u));
              }),
              v
            );
          }
          function a(t, e) {
            if (++e > r.length) return t;
            var o,
              u = i[e - 1];
            return (
              null != n && e >= r.length
                ? (o = t.entries())
                : ((o = []),
                  t.each(function(t, n) {
                    o.push({ key: n, values: a(t, e) });
                  })),
              null != u
                ? o.sort(function(t, n) {
                    return u(t.key, n.key);
                  })
                : o
            );
          }
          return (e = {
            object: function(t) {
              return o(t, 0, Mc, Sc);
            },
            map: function(t) {
              return o(t, 0, Ac, Ec);
            },
            entries: function(t) {
              return a(o(t, 0, Ac, Ec), 0);
            },
            key: function(t) {
              return r.push(t), e;
            },
            sortKeys: function(t) {
              return (i[r.length - 1] = t), e;
            },
            sortValues: function(n) {
              return (t = n), e;
            },
            rollup: function(t) {
              return (n = t), e;
            },
          });
        };
      function Mc() {
        return {};
      }
      function Sc(t, n, e) {
        t[n] = e;
      }
      function Ac() {
        return wc();
      }
      function Ec(t, n, e) {
        t.set(n, e);
      }
      function kc() {}
      var Cc = wc.prototype;
      function Tc(t, n) {
        var e = new kc();
        if (t instanceof kc)
          t.each(function(t) {
            e.add(t);
          });
        else if (t) {
          var r = -1,
            i = t.length;
          if (null == n) while (++r < i) e.add(t[r]);
          else while (++r < i) e.add(n(t[r], r, t));
        }
        return e;
      }
      kc.prototype = Tc.prototype = {
        constructor: kc,
        has: Cc.has,
        add: function(t) {
          return (t += ''), (this[bc + t] = t), this;
        },
        remove: Cc.remove,
        clear: Cc.clear,
        values: Cc.keys,
        size: Cc.size,
        empty: Cc.empty,
        each: Cc.each,
      };
      var Oc = Tc,
        Nc = function(t) {
          var n = [];
          for (var e in t) n.push(e);
          return n;
        },
        Pc = function(t) {
          var n = [];
          for (var e in t) n.push(t[e]);
          return n;
        },
        Rc = function(t) {
          var n = [];
          for (var e in t) n.push({ key: e, value: t[e] });
          return n;
        },
        jc = Array.prototype,
        Lc = jc.slice,
        Ic = function(t, n) {
          return t - n;
        },
        $c = function(t) {
          var n = 0,
            e = t.length,
            r = t[e - 1][1] * t[0][0] - t[e - 1][0] * t[0][1];
          while (++n < e) r += t[n - 1][1] * t[n][0] - t[n - 1][0] * t[n][1];
          return r;
        },
        Fc = function(t) {
          return function() {
            return t;
          };
        },
        Dc = function(t, n) {
          var e,
            r = -1,
            i = n.length;
          while (++r < i) if ((e = zc(t, n[r]))) return e;
          return 0;
        };
      function zc(t, n) {
        for (var e = n[0], r = n[1], i = -1, o = 0, a = t.length, u = a - 1; o < a; u = o++) {
          var c = t[o],
            f = c[0],
            s = c[1],
            l = t[u],
            h = l[0],
            d = l[1];
          if (Uc(c, l, n)) return 0;
          s > r !== d > r && e < ((h - f) * (r - s)) / (d - s) + f && (i = -i);
        }
        return i;
      }
      function Uc(t, n, e) {
        var r;
        return Bc(t, n, e) && qc(t[(r = +(t[0] === n[0]))], e[r], n[r]);
      }
      function Bc(t, n, e) {
        return (n[0] - t[0]) * (e[1] - t[1]) === (e[0] - t[0]) * (n[1] - t[1]);
      }
      function qc(t, n, e) {
        return (t <= n && n <= e) || (e <= n && n <= t);
      }
      var Vc = function() {},
        Hc = [
          [],
          [[[1, 1.5], [0.5, 1]]],
          [[[1.5, 1], [1, 1.5]]],
          [[[1.5, 1], [0.5, 1]]],
          [[[1, 0.5], [1.5, 1]]],
          [[[1, 1.5], [0.5, 1]], [[1, 0.5], [1.5, 1]]],
          [[[1, 0.5], [1, 1.5]]],
          [[[1, 0.5], [0.5, 1]]],
          [[[0.5, 1], [1, 0.5]]],
          [[[1, 1.5], [1, 0.5]]],
          [[[0.5, 1], [1, 0.5]], [[1.5, 1], [1, 1.5]]],
          [[[1.5, 1], [1, 0.5]]],
          [[[0.5, 1], [1.5, 1]]],
          [[[1, 1.5], [1.5, 1]]],
          [[[0.5, 1], [1, 1.5]]],
          [],
        ],
        Yc = function() {
          var t = 1,
            n = 1,
            e = N,
            r = c;
          function i(t) {
            var n = e(t);
            if (Array.isArray(n)) n = n.slice().sort(Ic);
            else {
              var r = b(t),
                i = r[0],
                a = r[1];
              (n = O(i, a, n)), (n = S(Math.floor(i / n) * n, Math.floor(a / n) * n, n));
            }
            return n.map(function(n) {
              return o(t, n);
            });
          }
          function o(t, n) {
            var e = [],
              i = [];
            return (
              a(t, n, function(o) {
                r(o, t, n), $c(o) > 0 ? e.push([o]) : i.push(o);
              }),
              i.forEach(function(t) {
                for (var n, r = 0, i = e.length; r < i; ++r) if (-1 !== Dc((n = e[r])[0], t)) return void n.push(t);
              }),
              { type: 'MultiPolygon', value: n, coordinates: e }
            );
          }
          function a(e, r, i) {
            var o,
              a,
              c,
              f,
              s,
              l,
              h = new Array(),
              d = new Array();
            (o = a = -1), (f = e[0] >= r), Hc[f << 1].forEach(p);
            while (++o < t - 1) (c = f), (f = e[o + 1] >= r), Hc[c | (f << 1)].forEach(p);
            Hc[f << 0].forEach(p);
            while (++a < n - 1) {
              (o = -1), (f = e[a * t + t] >= r), (s = e[a * t] >= r), Hc[(f << 1) | (s << 2)].forEach(p);
              while (++o < t - 1)
                (c = f),
                  (f = e[a * t + t + o + 1] >= r),
                  (l = s),
                  (s = e[a * t + o + 1] >= r),
                  Hc[c | (f << 1) | (s << 2) | (l << 3)].forEach(p);
              Hc[f | (s << 3)].forEach(p);
            }
            (o = -1), (s = e[a * t] >= r), Hc[s << 2].forEach(p);
            while (++o < t - 1) (l = s), (s = e[a * t + o + 1] >= r), Hc[(s << 2) | (l << 3)].forEach(p);
            function p(t) {
              var n,
                e,
                r = [t[0][0] + o, t[0][1] + a],
                c = [t[1][0] + o, t[1][1] + a],
                f = u(r),
                s = u(c);
              (n = d[f])
                ? (e = h[s])
                  ? (delete d[n.end],
                    delete h[e.start],
                    n === e
                      ? (n.ring.push(c), i(n.ring))
                      : (h[n.start] = d[e.end] = { start: n.start, end: e.end, ring: n.ring.concat(e.ring) }))
                  : (delete d[n.end], n.ring.push(c), (d[(n.end = s)] = n))
                : (n = h[s])
                  ? (e = d[f])
                    ? (delete h[n.start],
                      delete d[e.end],
                      n === e
                        ? (n.ring.push(c), i(n.ring))
                        : (h[e.start] = d[n.end] = { start: e.start, end: n.end, ring: e.ring.concat(n.ring) }))
                    : (delete h[n.start], n.ring.unshift(r), (h[(n.start = f)] = n))
                  : (h[f] = d[s] = { start: f, end: s, ring: [r, c] });
            }
            Hc[s << 3].forEach(p);
          }
          function u(n) {
            return 2 * n[0] + n[1] * (t + 1) * 4;
          }
          function c(e, r, i) {
            e.forEach(function(e) {
              var o,
                a = e[0],
                u = e[1],
                c = 0 | a,
                f = 0 | u,
                s = r[f * t + c];
              a > 0 && a < t && c === a && ((o = r[f * t + c - 1]), (e[0] = a + (i - o) / (s - o) - 0.5)),
                u > 0 && u < n && f === u && ((o = r[(f - 1) * t + c]), (e[1] = u + (i - o) / (s - o) - 0.5));
            });
          }
          return (
            (i.contour = o),
            (i.size = function(e) {
              if (!arguments.length) return [t, n];
              var r = Math.ceil(e[0]),
                o = Math.ceil(e[1]);
              if (!(r > 0) || !(o > 0)) throw new Error('invalid size');
              return (t = r), (n = o), i;
            }),
            (i.thresholds = function(t) {
              return arguments.length
                ? ((e = 'function' === typeof t ? t : Array.isArray(t) ? Fc(Lc.call(t)) : Fc(t)), i)
                : e;
            }),
            (i.smooth = function(t) {
              return arguments.length ? ((r = t ? c : Vc), i) : r === c;
            }),
            i
          );
        };
      function Gc(t, n, e) {
        for (var r = t.width, i = t.height, o = 1 + (e << 1), a = 0; a < i; ++a)
          for (var u = 0, c = 0; u < r + e; ++u)
            u < r && (c += t.data[u + a * r]),
              u >= e &&
                (u >= o && (c -= t.data[u - o + a * r]),
                (n.data[u - e + a * r] = c / Math.min(u + 1, r - 1 + o - u, o)));
      }
      function Wc(t, n, e) {
        for (var r = t.width, i = t.height, o = 1 + (e << 1), a = 0; a < r; ++a)
          for (var u = 0, c = 0; u < i + e; ++u)
            u < i && (c += t.data[a + u * r]),
              u >= e &&
                (u >= o && (c -= t.data[a + (u - o) * r]),
                (n.data[a + (u - e) * r] = c / Math.min(u + 1, i - 1 + o - u, o)));
      }
      function Xc(t) {
        return t[0];
      }
      function Kc(t) {
        return t[1];
      }
      function Qc() {
        return 1;
      }
      var Zc = function() {
          var t = Xc,
            n = Kc,
            e = Qc,
            r = 960,
            i = 500,
            o = 20,
            a = 2,
            u = 3 * o,
            c = (r + 2 * u) >> a,
            f = (i + 2 * u) >> a,
            s = Fc(20);
          function l(r) {
            var i = new Float32Array(c * f),
              l = new Float32Array(c * f);
            r.forEach(function(r, o, s) {
              var l = (+t(r, o, s) + u) >> a,
                h = (+n(r, o, s) + u) >> a,
                d = +e(r, o, s);
              l >= 0 && l < c && h >= 0 && h < f && (i[l + h * c] += d);
            }),
              Gc({ width: c, height: f, data: i }, { width: c, height: f, data: l }, o >> a),
              Wc({ width: c, height: f, data: l }, { width: c, height: f, data: i }, o >> a),
              Gc({ width: c, height: f, data: i }, { width: c, height: f, data: l }, o >> a),
              Wc({ width: c, height: f, data: l }, { width: c, height: f, data: i }, o >> a),
              Gc({ width: c, height: f, data: i }, { width: c, height: f, data: l }, o >> a),
              Wc({ width: c, height: f, data: l }, { width: c, height: f, data: i }, o >> a);
            var d = s(i);
            if (!Array.isArray(d)) {
              var p = I(i);
              (d = O(0, p, d)), (d = S(0, Math.floor(p / d) * d, d)), d.shift();
            }
            return Yc()
              .thresholds(d)
              .size([c, f])(i)
              .map(h);
          }
          function h(t) {
            return (t.value *= Math.pow(2, -2 * a)), t.coordinates.forEach(d), t;
          }
          function d(t) {
            t.forEach(p);
          }
          function p(t) {
            t.forEach(v);
          }
          function v(t) {
            (t[0] = t[0] * Math.pow(2, a) - u), (t[1] = t[1] * Math.pow(2, a) - u);
          }
          function y() {
            return (u = 3 * o), (c = (r + 2 * u) >> a), (f = (i + 2 * u) >> a), l;
          }
          return (
            (l.x = function(n) {
              return arguments.length ? ((t = 'function' === typeof n ? n : Fc(+n)), l) : t;
            }),
            (l.y = function(t) {
              return arguments.length ? ((n = 'function' === typeof t ? t : Fc(+t)), l) : n;
            }),
            (l.weight = function(t) {
              return arguments.length ? ((e = 'function' === typeof t ? t : Fc(+t)), l) : e;
            }),
            (l.size = function(t) {
              if (!arguments.length) return [r, i];
              var n = Math.ceil(t[0]),
                e = Math.ceil(t[1]);
              if (!(n >= 0) && !(n >= 0)) throw new Error('invalid size');
              return (r = n), (i = e), y();
            }),
            (l.cellSize = function(t) {
              if (!arguments.length) return 1 << a;
              if (!((t = +t) >= 1)) throw new Error('invalid cell size');
              return (a = Math.floor(Math.log(t) / Math.LN2)), y();
            }),
            (l.thresholds = function(t) {
              return arguments.length
                ? ((s = 'function' === typeof t ? t : Array.isArray(t) ? Fc(Lc.call(t)) : Fc(t)), l)
                : s;
            }),
            (l.bandwidth = function(t) {
              if (!arguments.length) return Math.sqrt(o * (o + 1));
              if (!((t = +t) >= 0)) throw new Error('invalid bandwidth');
              return (o = Math.round((Math.sqrt(4 * t * t + 1) - 1) / 2)), y();
            }),
            l
          );
        },
        Jc = {},
        tf = {},
        nf = 34,
        ef = 10,
        rf = 13;
      function of(t) {
        return new Function(
          'd',
          'return {' +
            t
              .map(function(t, n) {
                return JSON.stringify(t) + ': d[' + n + ']';
              })
              .join(',') +
            '}'
        );
      }
      function af(t, n) {
        var e = of(t);
        return function(r, i) {
          return n(e(r), i, t);
        };
      }
      function uf(t) {
        var n = Object.create(null),
          e = [];
        return (
          t.forEach(function(t) {
            for (var r in t) r in n || e.push((n[r] = r));
          }),
          e
        );
      }
      var cf = function(t) {
          var n = new RegExp('["' + t + '\n\r]'),
            e = t.charCodeAt(0);
          function r(t, n) {
            var e,
              r,
              o = i(t, function(t, i) {
                if (e) return e(t, i - 1);
                (r = t), (e = n ? af(t, n) : of(t));
              });
            return (o.columns = r || []), o;
          }
          function i(t, n) {
            var r,
              i = [],
              o = t.length,
              a = 0,
              u = 0,
              c = o <= 0,
              f = !1;
            function s() {
              if (c) return tf;
              if (f) return (f = !1), Jc;
              var n,
                r,
                i = a;
              if (t.charCodeAt(i) === nf) {
                while ((a++ < o && t.charCodeAt(a) !== nf) || t.charCodeAt(++a) === nf);
                return (
                  (n = a) >= o
                    ? (c = !0)
                    : (r = t.charCodeAt(a++)) === ef
                      ? (f = !0)
                      : r === rf && ((f = !0), t.charCodeAt(a) === ef && ++a),
                  t.slice(i + 1, n - 1).replace(/""/g, '"')
                );
              }
              while (a < o) {
                if ((r = t.charCodeAt((n = a++))) === ef) f = !0;
                else if (r === rf) (f = !0), t.charCodeAt(a) === ef && ++a;
                else if (r !== e) continue;
                return t.slice(i, n);
              }
              return (c = !0), t.slice(i, o);
            }
            t.charCodeAt(o - 1) === ef && --o, t.charCodeAt(o - 1) === rf && --o;
            while ((r = s()) !== tf) {
              var l = [];
              while (r !== Jc && r !== tf) l.push(r), (r = s());
              (n && null == (l = n(l, u++))) || i.push(l);
            }
            return i;
          }
          function o(n, e) {
            return (
              null == e && (e = uf(n)),
              [e.map(c).join(t)]
                .concat(
                  n.map(function(n) {
                    return e
                      .map(function(t) {
                        return c(n[t]);
                      })
                      .join(t);
                  })
                )
                .join('\n')
            );
          }
          function a(t) {
            return t.map(u).join('\n');
          }
          function u(n) {
            return n.map(c).join(t);
          }
          function c(t) {
            return null == t ? '' : n.test((t += '')) ? '"' + t.replace(/"/g, '""') + '"' : t;
          }
          return { parse: r, parseRows: i, format: o, formatRows: a };
        },
        ff = cf(','),
        sf = ff.parse,
        lf = ff.parseRows,
        hf = ff.format,
        df = ff.formatRows,
        pf = cf('\t'),
        vf = pf.parse,
        yf = pf.parseRows,
        gf = pf.format,
        bf = pf.formatRows;
      function mf(t) {
        if (!t.ok) throw new Error(t.status + ' ' + t.statusText);
        return t.blob();
      }
      var _f = function(t, n) {
        return fetch(t, n).then(mf);
      };
      function wf(t) {
        if (!t.ok) throw new Error(t.status + ' ' + t.statusText);
        return t.arrayBuffer();
      }
      var xf = function(t, n) {
        return fetch(t, n).then(wf);
      };
      function Mf(t) {
        if (!t.ok) throw new Error(t.status + ' ' + t.statusText);
        return t.text();
      }
      var Sf = function(t, n) {
        return fetch(t, n).then(Mf);
      };
      function Af(t) {
        return function(n, e, r) {
          return (
            2 === arguments.length && 'function' === typeof e && ((r = e), (e = void 0)),
            Sf(n, e).then(function(n) {
              return t(n, r);
            })
          );
        };
      }
      function Ef(t, n, e, r) {
        3 === arguments.length && 'function' === typeof e && ((r = e), (e = void 0));
        var i = cf(t);
        return Sf(n, e).then(function(t) {
          return i.parse(t, r);
        });
      }
      var kf = Af(sf),
        Cf = Af(vf),
        Tf = function(t, n) {
          return new Promise(function(e, r) {
            var i = new Image();
            for (var o in n) i[o] = n[o];
            (i.onerror = r),
              (i.onload = function() {
                e(i);
              }),
              (i.src = t);
          });
        };
      function Of(t) {
        if (!t.ok) throw new Error(t.status + ' ' + t.statusText);
        return t.json();
      }
      var Nf = function(t, n) {
        return fetch(t, n).then(Of);
      };
      function Pf(t) {
        return function(n, e) {
          return Sf(n, e).then(function(n) {
            return new DOMParser().parseFromString(n, t);
          });
        };
      }
      var Rf = Pf('application/xml'),
        jf = Pf('text/html'),
        Lf = Pf('image/svg+xml'),
        If = function(t, n) {
          var e;
          function r() {
            var r,
              i,
              o = e.length,
              a = 0,
              u = 0;
            for (r = 0; r < o; ++r) (i = e[r]), (a += i.x), (u += i.y);
            for (a = a / o - t, u = u / o - n, r = 0; r < o; ++r) (i = e[r]), (i.x -= a), (i.y -= u);
          }
          return (
            null == t && (t = 0),
            null == n && (n = 0),
            (r.initialize = function(t) {
              e = t;
            }),
            (r.x = function(n) {
              return arguments.length ? ((t = +n), r) : t;
            }),
            (r.y = function(t) {
              return arguments.length ? ((n = +t), r) : n;
            }),
            r
          );
        },
        $f = function(t) {
          return function() {
            return t;
          };
        },
        Ff = function() {
          return 1e-6 * (Math.random() - 0.5);
        },
        Df = function(t) {
          var n = +this._x.call(null, t),
            e = +this._y.call(null, t);
          return zf(this.cover(n, e), n, e, t);
        };
      function zf(t, n, e, r) {
        if (isNaN(n) || isNaN(e)) return t;
        var i,
          o,
          a,
          u,
          c,
          f,
          s,
          l,
          h,
          d = t._root,
          p = { data: r },
          v = t._x0,
          y = t._y0,
          g = t._x1,
          b = t._y1;
        if (!d) return (t._root = p), t;
        while (d.length)
          if (
            ((f = n >= (o = (v + g) / 2)) ? (v = o) : (g = o),
            (s = e >= (a = (y + b) / 2)) ? (y = a) : (b = a),
            (i = d),
            !(d = d[(l = (s << 1) | f)]))
          )
            return (i[l] = p), t;
        if (((u = +t._x.call(null, d.data)), (c = +t._y.call(null, d.data)), n === u && e === c))
          return (p.next = d), i ? (i[l] = p) : (t._root = p), t;
        do {
          (i = i ? (i[l] = new Array(4)) : (t._root = new Array(4))),
            (f = n >= (o = (v + g) / 2)) ? (v = o) : (g = o),
            (s = e >= (a = (y + b) / 2)) ? (y = a) : (b = a);
        } while ((l = (s << 1) | f) === (h = ((c >= a) << 1) | (u >= o)));
        return (i[h] = d), (i[l] = p), t;
      }
      function Uf(t) {
        var n,
          e,
          r,
          i,
          o = t.length,
          a = new Array(o),
          u = new Array(o),
          c = 1 / 0,
          f = 1 / 0,
          s = -1 / 0,
          l = -1 / 0;
        for (e = 0; e < o; ++e)
          isNaN((r = +this._x.call(null, (n = t[e])))) ||
            isNaN((i = +this._y.call(null, n))) ||
            ((a[e] = r), (u[e] = i), r < c && (c = r), r > s && (s = r), i < f && (f = i), i > l && (l = i));
        for (
          s < c && ((c = this._x0), (s = this._x1)),
            l < f && ((f = this._y0), (l = this._y1)),
            this.cover(c, f).cover(s, l),
            e = 0;
          e < o;
          ++e
        )
          zf(this, a[e], u[e], t[e]);
        return this;
      }
      var Bf = function(t, n) {
          if (isNaN((t = +t)) || isNaN((n = +n))) return this;
          var e = this._x0,
            r = this._y0,
            i = this._x1,
            o = this._y1;
          if (isNaN(e)) (i = (e = Math.floor(t)) + 1), (o = (r = Math.floor(n)) + 1);
          else {
            if (!(e > t || t > i || r > n || n > o)) return this;
            var a,
              u,
              c = i - e,
              f = this._root;
            switch ((u = ((n < (r + o) / 2) << 1) | (t < (e + i) / 2))) {
              case 0:
                do {
                  (a = new Array(4)), (a[u] = f), (f = a);
                } while (((c *= 2), (i = e + c), (o = r + c), t > i || n > o));
                break;
              case 1:
                do {
                  (a = new Array(4)), (a[u] = f), (f = a);
                } while (((c *= 2), (e = i - c), (o = r + c), e > t || n > o));
                break;
              case 2:
                do {
                  (a = new Array(4)), (a[u] = f), (f = a);
                } while (((c *= 2), (i = e + c), (r = o - c), t > i || r > n));
                break;
              case 3:
                do {
                  (a = new Array(4)), (a[u] = f), (f = a);
                } while (((c *= 2), (e = i - c), (r = o - c), e > t || r > n));
                break;
            }
            this._root && this._root.length && (this._root = f);
          }
          return (this._x0 = e), (this._y0 = r), (this._x1 = i), (this._y1 = o), this;
        },
        qf = function() {
          var t = [];
          return (
            this.visit(function(n) {
              if (!n.length)
                do {
                  t.push(n.data);
                } while ((n = n.next));
            }),
            t
          );
        },
        Vf = function(t) {
          return arguments.length
            ? this.cover(+t[0][0], +t[0][1]).cover(+t[1][0], +t[1][1])
            : isNaN(this._x0)
              ? void 0
              : [[this._x0, this._y0], [this._x1, this._y1]];
        },
        Hf = function(t, n, e, r, i) {
          (this.node = t), (this.x0 = n), (this.y0 = e), (this.x1 = r), (this.y1 = i);
        },
        Yf = function(t, n, e) {
          var r,
            i,
            o,
            a,
            u,
            c,
            f,
            s = this._x0,
            l = this._y0,
            h = this._x1,
            d = this._y1,
            p = [],
            v = this._root;
          v && p.push(new Hf(v, s, l, h, d)),
            null == e ? (e = 1 / 0) : ((s = t - e), (l = n - e), (h = t + e), (d = n + e), (e *= e));
          while ((c = p.pop()))
            if (!(!(v = c.node) || (i = c.x0) > h || (o = c.y0) > d || (a = c.x1) < s || (u = c.y1) < l))
              if (v.length) {
                var y = (i + a) / 2,
                  g = (o + u) / 2;
                p.push(
                  new Hf(v[3], y, g, a, u),
                  new Hf(v[2], i, g, y, u),
                  new Hf(v[1], y, o, a, g),
                  new Hf(v[0], i, o, y, g)
                ),
                  (f = ((n >= g) << 1) | (t >= y)) &&
                    ((c = p[p.length - 1]), (p[p.length - 1] = p[p.length - 1 - f]), (p[p.length - 1 - f] = c));
              } else {
                var b = t - +this._x.call(null, v.data),
                  m = n - +this._y.call(null, v.data),
                  _ = b * b + m * m;
                if (_ < e) {
                  var w = Math.sqrt((e = _));
                  (s = t - w), (l = n - w), (h = t + w), (d = n + w), (r = v.data);
                }
              }
          return r;
        },
        Gf = function(t) {
          if (isNaN((o = +this._x.call(null, t))) || isNaN((a = +this._y.call(null, t)))) return this;
          var n,
            e,
            r,
            i,
            o,
            a,
            u,
            c,
            f,
            s,
            l,
            h,
            d = this._root,
            p = this._x0,
            v = this._y0,
            y = this._x1,
            g = this._y1;
          if (!d) return this;
          if (d.length)
            while (1) {
              if (
                ((f = o >= (u = (p + y) / 2)) ? (p = u) : (y = u),
                (s = a >= (c = (v + g) / 2)) ? (v = c) : (g = c),
                (n = d),
                !(d = d[(l = (s << 1) | f)]))
              )
                return this;
              if (!d.length) break;
              (n[(l + 1) & 3] || n[(l + 2) & 3] || n[(l + 3) & 3]) && ((e = n), (h = l));
            }
          while (d.data !== t) if (((r = d), !(d = d.next))) return this;
          return (
            (i = d.next) && delete d.next,
            r
              ? (i ? (r.next = i) : delete r.next, this)
              : n
                ? (i ? (n[l] = i) : delete n[l],
                  (d = n[0] || n[1] || n[2] || n[3]) &&
                    d === (n[3] || n[2] || n[1] || n[0]) &&
                    !d.length &&
                    (e ? (e[h] = d) : (this._root = d)),
                  this)
                : ((this._root = i), this)
          );
        };
      function Wf(t) {
        for (var n = 0, e = t.length; n < e; ++n) this.remove(t[n]);
        return this;
      }
      var Xf = function() {
          return this._root;
        },
        Kf = function() {
          var t = 0;
          return (
            this.visit(function(n) {
              if (!n.length)
                do {
                  ++t;
                } while ((n = n.next));
            }),
            t
          );
        },
        Qf = function(t) {
          var n,
            e,
            r,
            i,
            o,
            a,
            u = [],
            c = this._root;
          c && u.push(new Hf(c, this._x0, this._y0, this._x1, this._y1));
          while ((n = u.pop()))
            if (!t((c = n.node), (r = n.x0), (i = n.y0), (o = n.x1), (a = n.y1)) && c.length) {
              var f = (r + o) / 2,
                s = (i + a) / 2;
              (e = c[3]) && u.push(new Hf(e, f, s, o, a)),
                (e = c[2]) && u.push(new Hf(e, r, s, f, a)),
                (e = c[1]) && u.push(new Hf(e, f, i, o, s)),
                (e = c[0]) && u.push(new Hf(e, r, i, f, s));
            }
          return this;
        },
        Zf = function(t) {
          var n,
            e = [],
            r = [];
          this._root && e.push(new Hf(this._root, this._x0, this._y0, this._x1, this._y1));
          while ((n = e.pop())) {
            var i = n.node;
            if (i.length) {
              var o,
                a = n.x0,
                u = n.y0,
                c = n.x1,
                f = n.y1,
                s = (a + c) / 2,
                l = (u + f) / 2;
              (o = i[0]) && e.push(new Hf(o, a, u, s, l)),
                (o = i[1]) && e.push(new Hf(o, s, u, c, l)),
                (o = i[2]) && e.push(new Hf(o, a, l, s, f)),
                (o = i[3]) && e.push(new Hf(o, s, l, c, f));
            }
            r.push(n);
          }
          while ((n = r.pop())) t(n.node, n.x0, n.y0, n.x1, n.y1);
          return this;
        };
      function Jf(t) {
        return t[0];
      }
      var ts = function(t) {
        return arguments.length ? ((this._x = t), this) : this._x;
      };
      function ns(t) {
        return t[1];
      }
      var es = function(t) {
        return arguments.length ? ((this._y = t), this) : this._y;
      };
      function rs(t, n, e) {
        var r = new is(null == n ? Jf : n, null == e ? ns : e, NaN, NaN, NaN, NaN);
        return null == t ? r : r.addAll(t);
      }
      function is(t, n, e, r, i, o) {
        (this._x = t),
          (this._y = n),
          (this._x0 = e),
          (this._y0 = r),
          (this._x1 = i),
          (this._y1 = o),
          (this._root = void 0);
      }
      function os(t) {
        var n = { data: t.data },
          e = n;
        while ((t = t.next)) e = e.next = { data: t.data };
        return n;
      }
      var as = (rs.prototype = is.prototype);
      function us(t) {
        return t.x + t.vx;
      }
      function cs(t) {
        return t.y + t.vy;
      }
      (as.copy = function() {
        var t,
          n,
          e = new is(this._x, this._y, this._x0, this._y0, this._x1, this._y1),
          r = this._root;
        if (!r) return e;
        if (!r.length) return (e._root = os(r)), e;
        t = [{ source: r, target: (e._root = new Array(4)) }];
        while ((r = t.pop()))
          for (var i = 0; i < 4; ++i)
            (n = r.source[i]) &&
              (n.length ? t.push({ source: n, target: (r.target[i] = new Array(4)) }) : (r.target[i] = os(n)));
        return e;
      }),
        (as.add = Df),
        (as.addAll = Uf),
        (as.cover = Bf),
        (as.data = qf),
        (as.extent = Vf),
        (as.find = Yf),
        (as.remove = Gf),
        (as.removeAll = Wf),
        (as.root = Xf),
        (as.size = Kf),
        (as.visit = Qf),
        (as.visitAfter = Zf),
        (as.x = ts),
        (as.y = es);
      var fs = function(t) {
        var n,
          e,
          r = 1,
          i = 1;
        function o() {
          for (var t, o, u, c, f, s, l, h = n.length, d = 0; d < i; ++d)
            for (o = rs(n, us, cs).visitAfter(a), t = 0; t < h; ++t)
              (u = n[t]), (s = e[u.index]), (l = s * s), (c = u.x + u.vx), (f = u.y + u.vy), o.visit(p);
          function p(t, n, e, i, o) {
            var a = t.data,
              h = t.r,
              d = s + h;
            if (!a) return n > c + d || i < c - d || e > f + d || o < f - d;
            if (a.index > u.index) {
              var p = c - a.x - a.vx,
                v = f - a.y - a.vy,
                y = p * p + v * v;
              y < d * d &&
                (0 === p && ((p = Ff()), (y += p * p)),
                0 === v && ((v = Ff()), (y += v * v)),
                (y = ((d - (y = Math.sqrt(y))) / y) * r),
                (u.vx += (p *= y) * (d = (h *= h) / (l + h))),
                (u.vy += (v *= y) * d),
                (a.vx -= p * (d = 1 - d)),
                (a.vy -= v * d));
            }
          }
        }
        function a(t) {
          if (t.data) return (t.r = e[t.data.index]);
          for (var n = (t.r = 0); n < 4; ++n) t[n] && t[n].r > t.r && (t.r = t[n].r);
        }
        function u() {
          if (n) {
            var r,
              i,
              o = n.length;
            for (e = new Array(o), r = 0; r < o; ++r) (i = n[r]), (e[i.index] = +t(i, r, n));
          }
        }
        return (
          'function' !== typeof t && (t = $f(null == t ? 1 : +t)),
          (o.initialize = function(t) {
            (n = t), u();
          }),
          (o.iterations = function(t) {
            return arguments.length ? ((i = +t), o) : i;
          }),
          (o.strength = function(t) {
            return arguments.length ? ((r = +t), o) : r;
          }),
          (o.radius = function(n) {
            return arguments.length ? ((t = 'function' === typeof n ? n : $f(+n)), u(), o) : t;
          }),
          o
        );
      };
      function ss(t) {
        return t.index;
      }
      function ls(t, n) {
        var e = t.get(n);
        if (!e) throw new Error('missing: ' + n);
        return e;
      }
      var hs = function(t) {
        var n,
          e,
          r,
          i,
          o,
          a = ss,
          u = s,
          c = $f(30),
          f = 1;
        function s(t) {
          return 1 / Math.min(i[t.source.index], i[t.target.index]);
        }
        function l(r) {
          for (var i = 0, a = t.length; i < f; ++i)
            for (var u, c, s, l, h, d, p, v = 0; v < a; ++v)
              (u = t[v]),
                (c = u.source),
                (s = u.target),
                (l = s.x + s.vx - c.x - c.vx || Ff()),
                (h = s.y + s.vy - c.y - c.vy || Ff()),
                (d = Math.sqrt(l * l + h * h)),
                (d = ((d - e[v]) / d) * r * n[v]),
                (l *= d),
                (h *= d),
                (s.vx -= l * (p = o[v])),
                (s.vy -= h * p),
                (c.vx += l * (p = 1 - p)),
                (c.vy += h * p);
        }
        function h() {
          if (r) {
            var u,
              c,
              f = r.length,
              s = t.length,
              l = wc(r, a);
            for (u = 0, i = new Array(f); u < s; ++u)
              (c = t[u]),
                (c.index = u),
                'object' !== typeof c.source && (c.source = ls(l, c.source)),
                'object' !== typeof c.target && (c.target = ls(l, c.target)),
                (i[c.source.index] = (i[c.source.index] || 0) + 1),
                (i[c.target.index] = (i[c.target.index] || 0) + 1);
            for (u = 0, o = new Array(s); u < s; ++u)
              (c = t[u]), (o[u] = i[c.source.index] / (i[c.source.index] + i[c.target.index]));
            (n = new Array(s)), d(), (e = new Array(s)), p();
          }
        }
        function d() {
          if (r) for (var e = 0, i = t.length; e < i; ++e) n[e] = +u(t[e], e, t);
        }
        function p() {
          if (r) for (var n = 0, i = t.length; n < i; ++n) e[n] = +c(t[n], n, t);
        }
        return (
          null == t && (t = []),
          (l.initialize = function(t) {
            (r = t), h();
          }),
          (l.links = function(n) {
            return arguments.length ? ((t = n), h(), l) : t;
          }),
          (l.id = function(t) {
            return arguments.length ? ((a = t), l) : a;
          }),
          (l.iterations = function(t) {
            return arguments.length ? ((f = +t), l) : f;
          }),
          (l.strength = function(t) {
            return arguments.length ? ((u = 'function' === typeof t ? t : $f(+t)), d(), l) : u;
          }),
          (l.distance = function(t) {
            return arguments.length ? ((c = 'function' === typeof t ? t : $f(+t)), p(), l) : c;
          }),
          l
        );
      };
      function ds(t) {
        return t.x;
      }
      function ps(t) {
        return t.y;
      }
      var vs = 10,
        ys = Math.PI * (3 - Math.sqrt(5)),
        gs = function(t) {
          var n,
            e = 1,
            r = 0.001,
            i = 1 - Math.pow(r, 1 / 300),
            o = 0,
            a = 0.6,
            u = wc(),
            c = ao(s),
            f = gt('tick', 'end');
          function s() {
            l(), f.call('tick', n), e < r && (c.stop(), f.call('end', n));
          }
          function l() {
            var n,
              r,
              c = t.length;
            for (
              e += (o - e) * i,
                u.each(function(t) {
                  t(e);
                }),
                n = 0;
              n < c;
              ++n
            )
              (r = t[n]),
                null == r.fx ? (r.x += r.vx *= a) : ((r.x = r.fx), (r.vx = 0)),
                null == r.fy ? (r.y += r.vy *= a) : ((r.y = r.fy), (r.vy = 0));
          }
          function h() {
            for (var n, e = 0, r = t.length; e < r; ++e) {
              if (((n = t[e]), (n.index = e), isNaN(n.x) || isNaN(n.y))) {
                var i = vs * Math.sqrt(e),
                  o = e * ys;
                (n.x = i * Math.cos(o)), (n.y = i * Math.sin(o));
              }
              (isNaN(n.vx) || isNaN(n.vy)) && (n.vx = n.vy = 0);
            }
          }
          function d(n) {
            return n.initialize && n.initialize(t), n;
          }
          return (
            null == t && (t = []),
            h(),
            (n = {
              tick: l,
              restart: function() {
                return c.restart(s), n;
              },
              stop: function() {
                return c.stop(), n;
              },
              nodes: function(e) {
                return arguments.length ? ((t = e), h(), u.each(d), n) : t;
              },
              alpha: function(t) {
                return arguments.length ? ((e = +t), n) : e;
              },
              alphaMin: function(t) {
                return arguments.length ? ((r = +t), n) : r;
              },
              alphaDecay: function(t) {
                return arguments.length ? ((i = +t), n) : +i;
              },
              alphaTarget: function(t) {
                return arguments.length ? ((o = +t), n) : o;
              },
              velocityDecay: function(t) {
                return arguments.length ? ((a = 1 - t), n) : 1 - a;
              },
              force: function(t, e) {
                return arguments.length > 1 ? (null == e ? u.remove(t) : u.set(t, d(e)), n) : u.get(t);
              },
              find: function(n, e, r) {
                var i,
                  o,
                  a,
                  u,
                  c,
                  f = 0,
                  s = t.length;
                for (null == r ? (r = 1 / 0) : (r *= r), f = 0; f < s; ++f)
                  (u = t[f]), (i = n - u.x), (o = e - u.y), (a = i * i + o * o), a < r && ((c = u), (r = a));
                return c;
              },
              on: function(t, e) {
                return arguments.length > 1 ? (f.on(t, e), n) : f.on(t);
              },
            })
          );
        },
        bs = function() {
          var t,
            n,
            e,
            r,
            i = $f(-30),
            o = 1,
            a = 1 / 0,
            u = 0.81;
          function c(r) {
            var i,
              o = t.length,
              a = rs(t, ds, ps).visitAfter(s);
            for (e = r, i = 0; i < o; ++i) (n = t[i]), a.visit(l);
          }
          function f() {
            if (t) {
              var n,
                e,
                o = t.length;
              for (r = new Array(o), n = 0; n < o; ++n) (e = t[n]), (r[e.index] = +i(e, n, t));
            }
          }
          function s(t) {
            var n,
              e,
              i,
              o,
              a,
              u = 0,
              c = 0;
            if (t.length) {
              for (i = o = a = 0; a < 4; ++a)
                (n = t[a]) && (e = Math.abs(n.value)) && ((u += n.value), (c += e), (i += e * n.x), (o += e * n.y));
              (t.x = i / c), (t.y = o / c);
            } else {
              (n = t), (n.x = n.data.x), (n.y = n.data.y);
              do {
                u += r[n.data.index];
              } while ((n = n.next));
            }
            t.value = u;
          }
          function l(t, i, c, f) {
            if (!t.value) return !0;
            var s = t.x - n.x,
              l = t.y - n.y,
              h = f - i,
              d = s * s + l * l;
            if ((h * h) / u < d)
              return (
                d < a &&
                  (0 === s && ((s = Ff()), (d += s * s)),
                  0 === l && ((l = Ff()), (d += l * l)),
                  d < o && (d = Math.sqrt(o * d)),
                  (n.vx += (s * t.value * e) / d),
                  (n.vy += (l * t.value * e) / d)),
                !0
              );
            if (!(t.length || d >= a)) {
              (t.data !== n || t.next) &&
                (0 === s && ((s = Ff()), (d += s * s)),
                0 === l && ((l = Ff()), (d += l * l)),
                d < o && (d = Math.sqrt(o * d)));
              do {
                t.data !== n && ((h = (r[t.data.index] * e) / d), (n.vx += s * h), (n.vy += l * h));
              } while ((t = t.next));
            }
          }
          return (
            (c.initialize = function(n) {
              (t = n), f();
            }),
            (c.strength = function(t) {
              return arguments.length ? ((i = 'function' === typeof t ? t : $f(+t)), f(), c) : i;
            }),
            (c.distanceMin = function(t) {
              return arguments.length ? ((o = t * t), c) : Math.sqrt(o);
            }),
            (c.distanceMax = function(t) {
              return arguments.length ? ((a = t * t), c) : Math.sqrt(a);
            }),
            (c.theta = function(t) {
              return arguments.length ? ((u = t * t), c) : Math.sqrt(u);
            }),
            c
          );
        },
        ms = function(t, n, e) {
          var r,
            i,
            o,
            a = $f(0.1);
          function u(t) {
            for (var a = 0, u = r.length; a < u; ++a) {
              var c = r[a],
                f = c.x - n || 1e-6,
                s = c.y - e || 1e-6,
                l = Math.sqrt(f * f + s * s),
                h = ((o[a] - l) * i[a] * t) / l;
              (c.vx += f * h), (c.vy += s * h);
            }
          }
          function c() {
            if (r) {
              var n,
                e = r.length;
              for (i = new Array(e), o = new Array(e), n = 0; n < e; ++n)
                (o[n] = +t(r[n], n, r)), (i[n] = isNaN(o[n]) ? 0 : +a(r[n], n, r));
            }
          }
          return (
            'function' !== typeof t && (t = $f(+t)),
            null == n && (n = 0),
            null == e && (e = 0),
            (u.initialize = function(t) {
              (r = t), c();
            }),
            (u.strength = function(t) {
              return arguments.length ? ((a = 'function' === typeof t ? t : $f(+t)), c(), u) : a;
            }),
            (u.radius = function(n) {
              return arguments.length ? ((t = 'function' === typeof n ? n : $f(+n)), c(), u) : t;
            }),
            (u.x = function(t) {
              return arguments.length ? ((n = +t), u) : n;
            }),
            (u.y = function(t) {
              return arguments.length ? ((e = +t), u) : e;
            }),
            u
          );
        },
        _s = function(t) {
          var n,
            e,
            r,
            i = $f(0.1);
          function o(t) {
            for (var i, o = 0, a = n.length; o < a; ++o) (i = n[o]), (i.vx += (r[o] - i.x) * e[o] * t);
          }
          function a() {
            if (n) {
              var o,
                a = n.length;
              for (e = new Array(a), r = new Array(a), o = 0; o < a; ++o)
                e[o] = isNaN((r[o] = +t(n[o], o, n))) ? 0 : +i(n[o], o, n);
            }
          }
          return (
            'function' !== typeof t && (t = $f(null == t ? 0 : +t)),
            (o.initialize = function(t) {
              (n = t), a();
            }),
            (o.strength = function(t) {
              return arguments.length ? ((i = 'function' === typeof t ? t : $f(+t)), a(), o) : i;
            }),
            (o.x = function(n) {
              return arguments.length ? ((t = 'function' === typeof n ? n : $f(+n)), a(), o) : t;
            }),
            o
          );
        },
        ws = function(t) {
          var n,
            e,
            r,
            i = $f(0.1);
          function o(t) {
            for (var i, o = 0, a = n.length; o < a; ++o) (i = n[o]), (i.vy += (r[o] - i.y) * e[o] * t);
          }
          function a() {
            if (n) {
              var o,
                a = n.length;
              for (e = new Array(a), r = new Array(a), o = 0; o < a; ++o)
                e[o] = isNaN((r[o] = +t(n[o], o, n))) ? 0 : +i(n[o], o, n);
            }
          }
          return (
            'function' !== typeof t && (t = $f(null == t ? 0 : +t)),
            (o.initialize = function(t) {
              (n = t), a();
            }),
            (o.strength = function(t) {
              return arguments.length ? ((i = 'function' === typeof t ? t : $f(+t)), a(), o) : i;
            }),
            (o.y = function(n) {
              return arguments.length ? ((t = 'function' === typeof n ? n : $f(+n)), a(), o) : t;
            }),
            o
          );
        },
        xs = function(t, n) {
          if ((e = (t = n ? t.toExponential(n - 1) : t.toExponential()).indexOf('e')) < 0) return null;
          var e,
            r = t.slice(0, e);
          return [r.length > 1 ? r[0] + r.slice(2) : r, +t.slice(e + 1)];
        },
        Ms = function(t) {
          return (t = xs(Math.abs(t))), t ? t[1] : NaN;
        },
        Ss = function(t, n) {
          return function(e, r) {
            var i = e.length,
              o = [],
              a = 0,
              u = t[0],
              c = 0;
            while (i > 0 && u > 0) {
              if ((c + u + 1 > r && (u = Math.max(1, r - c)), o.push(e.substring((i -= u), i + u)), (c += u + 1) > r))
                break;
              u = t[(a = (a + 1) % t.length)];
            }
            return o.reverse().join(n);
          };
        },
        As = function(t) {
          return function(n) {
            return n.replace(/[0-9]/g, function(n) {
              return t[+n];
            });
          };
        },
        Es = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
      function ks(t) {
        return new Cs(t);
      }
      function Cs(t) {
        if (!(n = Es.exec(t))) throw new Error('invalid format: ' + t);
        var n;
        (this.fill = n[1] || ' '),
          (this.align = n[2] || '>'),
          (this.sign = n[3] || '-'),
          (this.symbol = n[4] || ''),
          (this.zero = !!n[5]),
          (this.width = n[6] && +n[6]),
          (this.comma = !!n[7]),
          (this.precision = n[8] && +n[8].slice(1)),
          (this.trim = !!n[9]),
          (this.type = n[10] || '');
      }
      (ks.prototype = Cs.prototype),
        (Cs.prototype.toString = function() {
          return (
            this.fill +
            this.align +
            this.sign +
            this.symbol +
            (this.zero ? '0' : '') +
            (null == this.width ? '' : Math.max(1, 0 | this.width)) +
            (this.comma ? ',' : '') +
            (null == this.precision ? '' : '.' + Math.max(0, 0 | this.precision)) +
            (this.trim ? '~' : '') +
            this.type
          );
        });
      var Ts,
        Os,
        Ns,
        Ps,
        Rs = function(t) {
          t: for (var n, e = t.length, r = 1, i = -1; r < e; ++r)
            switch (t[r]) {
              case '.':
                i = n = r;
                break;
              case '0':
                0 === i && (i = r), (n = r);
                break;
              default:
                if (i > 0) {
                  if (!+t[r]) break t;
                  i = 0;
                }
                break;
            }
          return i > 0 ? t.slice(0, i) + t.slice(n + 1) : t;
        },
        js = function(t, n) {
          var e = xs(t, n);
          if (!e) return t + '';
          var r = e[0],
            i = e[1],
            o = i - (Ts = 3 * Math.max(-8, Math.min(8, Math.floor(i / 3)))) + 1,
            a = r.length;
          return o === a
            ? r
            : o > a
              ? r + new Array(o - a + 1).join('0')
              : o > 0
                ? r.slice(0, o) + '.' + r.slice(o)
                : '0.' + new Array(1 - o).join('0') + xs(t, Math.max(0, n + o - 1))[0];
        },
        Ls = function(t, n) {
          var e = xs(t, n);
          if (!e) return t + '';
          var r = e[0],
            i = e[1];
          return i < 0
            ? '0.' + new Array(-i).join('0') + r
            : r.length > i + 1
              ? r.slice(0, i + 1) + '.' + r.slice(i + 1)
              : r + new Array(i - r.length + 2).join('0');
        },
        Is = {
          '%': function(t, n) {
            return (100 * t).toFixed(n);
          },
          b: function(t) {
            return Math.round(t).toString(2);
          },
          c: function(t) {
            return t + '';
          },
          d: function(t) {
            return Math.round(t).toString(10);
          },
          e: function(t, n) {
            return t.toExponential(n);
          },
          f: function(t, n) {
            return t.toFixed(n);
          },
          g: function(t, n) {
            return t.toPrecision(n);
          },
          o: function(t) {
            return Math.round(t).toString(8);
          },
          p: function(t, n) {
            return Ls(100 * t, n);
          },
          r: Ls,
          s: js,
          X: function(t) {
            return Math.round(t)
              .toString(16)
              .toUpperCase();
          },
          x: function(t) {
            return Math.round(t).toString(16);
          },
        },
        $s = function(t) {
          return t;
        },
        Fs = ['y', 'z', 'a', 'f', 'p', 'n', 'µ', 'm', '', 'k', 'M', 'G', 'T', 'P', 'E', 'Z', 'Y'],
        Ds = function(t) {
          var n = t.grouping && t.thousands ? Ss(t.grouping, t.thousands) : $s,
            e = t.currency,
            r = t.decimal,
            i = t.numerals ? As(t.numerals) : $s,
            o = t.percent || '%';
          function a(t) {
            t = ks(t);
            var a = t.fill,
              u = t.align,
              c = t.sign,
              f = t.symbol,
              s = t.zero,
              l = t.width,
              h = t.comma,
              d = t.precision,
              p = t.trim,
              v = t.type;
            'n' === v ? ((h = !0), (v = 'g')) : Is[v] || (null == d && (d = 12), (p = !0), (v = 'g')),
              (s || ('0' === a && '=' === u)) && ((s = !0), (a = '0'), (u = '='));
            var y = '$' === f ? e[0] : '#' === f && /[boxX]/.test(v) ? '0' + v.toLowerCase() : '',
              g = '$' === f ? e[1] : /[%p]/.test(v) ? o : '',
              b = Is[v],
              m = /[defgprs%]/.test(v);
            function _(t) {
              var e,
                o,
                f,
                _ = y,
                w = g;
              if ('c' === v) (w = b(t) + w), (t = '');
              else {
                t = +t;
                var x = t < 0;
                if (
                  ((t = b(Math.abs(t), d)),
                  p && (t = Rs(t)),
                  x && 0 === +t && (x = !1),
                  (_ = (x ? ('(' === c ? c : '-') : '-' === c || '(' === c ? '' : c) + _),
                  (w = ('s' === v ? Fs[8 + Ts / 3] : '') + w + (x && '(' === c ? ')' : '')),
                  m)
                ) {
                  (e = -1), (o = t.length);
                  while (++e < o)
                    if (((f = t.charCodeAt(e)), 48 > f || f > 57)) {
                      (w = (46 === f ? r + t.slice(e + 1) : t.slice(e)) + w), (t = t.slice(0, e));
                      break;
                    }
                }
              }
              h && !s && (t = n(t, 1 / 0));
              var M = _.length + t.length + w.length,
                S = M < l ? new Array(l - M + 1).join(a) : '';
              switch ((h && s && ((t = n(S + t, S.length ? l - w.length : 1 / 0)), (S = '')), u)) {
                case '<':
                  t = _ + t + w + S;
                  break;
                case '=':
                  t = _ + S + t + w;
                  break;
                case '^':
                  t = S.slice(0, (M = S.length >> 1)) + _ + t + w + S.slice(M);
                  break;
                default:
                  t = S + _ + t + w;
                  break;
              }
              return i(t);
            }
            return (
              (d = null == d ? 6 : /[gprs]/.test(v) ? Math.max(1, Math.min(21, d)) : Math.max(0, Math.min(20, d))),
              (_.toString = function() {
                return t + '';
              }),
              _
            );
          }
          function u(t, n) {
            var e = a(((t = ks(t)), (t.type = 'f'), t)),
              r = 3 * Math.max(-8, Math.min(8, Math.floor(Ms(n) / 3))),
              i = Math.pow(10, -r),
              o = Fs[8 + r / 3];
            return function(t) {
              return e(i * t) + o;
            };
          }
          return { format: a, formatPrefix: u };
        };
      function zs(t) {
        return (Os = Ds(t)), (Ns = Os.format), (Ps = Os.formatPrefix), Os;
      }
      zs({ decimal: '.', thousands: ',', grouping: [3], currency: ['$', ''] });
      var Us = function(t) {
          return Math.max(0, -Ms(Math.abs(t)));
        },
        Bs = function(t, n) {
          return Math.max(0, 3 * Math.max(-8, Math.min(8, Math.floor(Ms(n) / 3))) - Ms(Math.abs(t)));
        },
        qs = function(t, n) {
          return (t = Math.abs(t)), (n = Math.abs(n) - t), Math.max(0, Ms(n) - Ms(t)) + 1;
        },
        Vs = function() {
          return new Hs();
        };
      function Hs() {
        this.reset();
      }
      Hs.prototype = {
        constructor: Hs,
        reset: function() {
          this.s = this.t = 0;
        },
        add: function(t) {
          Gs(Ys, t, this.t), Gs(this, Ys.s, this.s), this.s ? (this.t += Ys.t) : (this.s = Ys.t);
        },
        valueOf: function() {
          return this.s;
        },
      };
      var Ys = new Hs();
      function Gs(t, n, e) {
        var r = (t.s = n + e),
          i = r - n,
          o = r - i;
        t.t = n - o + (e - i);
      }
      var Ws = 1e-6,
        Xs = 1e-12,
        Ks = Math.PI,
        Qs = Ks / 2,
        Zs = Ks / 4,
        Js = 2 * Ks,
        tl = 180 / Ks,
        nl = Ks / 180,
        el = Math.abs,
        rl = Math.atan,
        il = Math.atan2,
        ol = Math.cos,
        al = Math.ceil,
        ul = Math.exp,
        cl = (Math.floor, Math.log),
        fl = Math.pow,
        sl = Math.sin,
        ll =
          Math.sign ||
          function(t) {
            return t > 0 ? 1 : t < 0 ? -1 : 0;
          },
        hl = Math.sqrt,
        dl = Math.tan;
      function pl(t) {
        return t > 1 ? 0 : t < -1 ? Ks : Math.acos(t);
      }
      function vl(t) {
        return t > 1 ? Qs : t < -1 ? -Qs : Math.asin(t);
      }
      function yl(t) {
        return (t = sl(t / 2)) * t;
      }
      function gl() {}
      function bl(t, n) {
        t && _l.hasOwnProperty(t.type) && _l[t.type](t, n);
      }
      var ml = {
          Feature: function(t, n) {
            bl(t.geometry, n);
          },
          FeatureCollection: function(t, n) {
            var e = t.features,
              r = -1,
              i = e.length;
            while (++r < i) bl(e[r].geometry, n);
          },
        },
        _l = {
          Sphere: function(t, n) {
            n.sphere();
          },
          Point: function(t, n) {
            (t = t.coordinates), n.point(t[0], t[1], t[2]);
          },
          MultiPoint: function(t, n) {
            var e = t.coordinates,
              r = -1,
              i = e.length;
            while (++r < i) (t = e[r]), n.point(t[0], t[1], t[2]);
          },
          LineString: function(t, n) {
            wl(t.coordinates, n, 0);
          },
          MultiLineString: function(t, n) {
            var e = t.coordinates,
              r = -1,
              i = e.length;
            while (++r < i) wl(e[r], n, 0);
          },
          Polygon: function(t, n) {
            xl(t.coordinates, n);
          },
          MultiPolygon: function(t, n) {
            var e = t.coordinates,
              r = -1,
              i = e.length;
            while (++r < i) xl(e[r], n);
          },
          GeometryCollection: function(t, n) {
            var e = t.geometries,
              r = -1,
              i = e.length;
            while (++r < i) bl(e[r], n);
          },
        };
      function wl(t, n, e) {
        var r,
          i = -1,
          o = t.length - e;
        n.lineStart();
        while (++i < o) (r = t[i]), n.point(r[0], r[1], r[2]);
        n.lineEnd();
      }
      function xl(t, n) {
        var e = -1,
          r = t.length;
        n.polygonStart();
        while (++e < r) wl(t[e], n, 1);
        n.polygonEnd();
      }
      var Ml,
        Sl,
        Al,
        El,
        kl,
        Cl = function(t, n) {
          t && ml.hasOwnProperty(t.type) ? ml[t.type](t, n) : bl(t, n);
        },
        Tl = Vs(),
        Ol = Vs(),
        Nl = {
          point: gl,
          lineStart: gl,
          lineEnd: gl,
          polygonStart: function() {
            Tl.reset(), (Nl.lineStart = Pl), (Nl.lineEnd = Rl);
          },
          polygonEnd: function() {
            var t = +Tl;
            Ol.add(t < 0 ? Js + t : t), (this.lineStart = this.lineEnd = this.point = gl);
          },
          sphere: function() {
            Ol.add(Js);
          },
        };
      function Pl() {
        Nl.point = jl;
      }
      function Rl() {
        Ll(Ml, Sl);
      }
      function jl(t, n) {
        (Nl.point = Ll), (Ml = t), (Sl = n), (t *= nl), (n *= nl), (Al = t), (El = ol((n = n / 2 + Zs))), (kl = sl(n));
      }
      function Ll(t, n) {
        (t *= nl), (n *= nl), (n = n / 2 + Zs);
        var e = t - Al,
          r = e >= 0 ? 1 : -1,
          i = r * e,
          o = ol(n),
          a = sl(n),
          u = kl * a,
          c = El * o + u * ol(i),
          f = u * r * sl(i);
        Tl.add(il(f, c)), (Al = t), (El = o), (kl = a);
      }
      var Il = function(t) {
        return Ol.reset(), Cl(t, Nl), 2 * Ol;
      };
      function $l(t) {
        return [il(t[1], t[0]), vl(t[2])];
      }
      function Fl(t) {
        var n = t[0],
          e = t[1],
          r = ol(e);
        return [r * ol(n), r * sl(n), sl(e)];
      }
      function Dl(t, n) {
        return t[0] * n[0] + t[1] * n[1] + t[2] * n[2];
      }
      function zl(t, n) {
        return [t[1] * n[2] - t[2] * n[1], t[2] * n[0] - t[0] * n[2], t[0] * n[1] - t[1] * n[0]];
      }
      function Ul(t, n) {
        (t[0] += n[0]), (t[1] += n[1]), (t[2] += n[2]);
      }
      function Bl(t, n) {
        return [t[0] * n, t[1] * n, t[2] * n];
      }
      function ql(t) {
        var n = hl(t[0] * t[0] + t[1] * t[1] + t[2] * t[2]);
        (t[0] /= n), (t[1] /= n), (t[2] /= n);
      }
      var Vl,
        Hl,
        Yl,
        Gl,
        Wl,
        Xl,
        Kl,
        Ql,
        Zl,
        Jl,
        th = Vs(),
        nh = {
          point: eh,
          lineStart: ih,
          lineEnd: oh,
          polygonStart: function() {
            (nh.point = ah), (nh.lineStart = uh), (nh.lineEnd = ch), th.reset(), Nl.polygonStart();
          },
          polygonEnd: function() {
            Nl.polygonEnd(),
              (nh.point = eh),
              (nh.lineStart = ih),
              (nh.lineEnd = oh),
              Tl < 0 ? ((Vl = -(Yl = 180)), (Hl = -(Gl = 90))) : th > Ws ? (Gl = 90) : th < -Ws && (Hl = -90),
              (Jl[0] = Vl),
              (Jl[1] = Yl);
          },
        };
      function eh(t, n) {
        Zl.push((Jl = [(Vl = t), (Yl = t)])), n < Hl && (Hl = n), n > Gl && (Gl = n);
      }
      function rh(t, n) {
        var e = Fl([t * nl, n * nl]);
        if (Ql) {
          var r = zl(Ql, e),
            i = [r[1], -r[0], 0],
            o = zl(i, r);
          ql(o), (o = $l(o));
          var a,
            u = t - Wl,
            c = u > 0 ? 1 : -1,
            f = o[0] * tl * c,
            s = el(u) > 180;
          s ^ (c * Wl < f && f < c * t)
            ? ((a = o[1] * tl), a > Gl && (Gl = a))
            : ((f = ((f + 360) % 360) - 180),
              s ^ (c * Wl < f && f < c * t)
                ? ((a = -o[1] * tl), a < Hl && (Hl = a))
                : (n < Hl && (Hl = n), n > Gl && (Gl = n))),
            s
              ? t < Wl
                ? fh(Vl, t) > fh(Vl, Yl) && (Yl = t)
                : fh(t, Yl) > fh(Vl, Yl) && (Vl = t)
              : Yl >= Vl
                ? (t < Vl && (Vl = t), t > Yl && (Yl = t))
                : t > Wl
                  ? fh(Vl, t) > fh(Vl, Yl) && (Yl = t)
                  : fh(t, Yl) > fh(Vl, Yl) && (Vl = t);
        } else Zl.push((Jl = [(Vl = t), (Yl = t)]));
        n < Hl && (Hl = n), n > Gl && (Gl = n), (Ql = e), (Wl = t);
      }
      function ih() {
        nh.point = rh;
      }
      function oh() {
        (Jl[0] = Vl), (Jl[1] = Yl), (nh.point = eh), (Ql = null);
      }
      function ah(t, n) {
        if (Ql) {
          var e = t - Wl;
          th.add(el(e) > 180 ? e + (e > 0 ? 360 : -360) : e);
        } else (Xl = t), (Kl = n);
        Nl.point(t, n), rh(t, n);
      }
      function uh() {
        Nl.lineStart();
      }
      function ch() {
        ah(Xl, Kl), Nl.lineEnd(), el(th) > Ws && (Vl = -(Yl = 180)), (Jl[0] = Vl), (Jl[1] = Yl), (Ql = null);
      }
      function fh(t, n) {
        return (n -= t) < 0 ? n + 360 : n;
      }
      function sh(t, n) {
        return t[0] - n[0];
      }
      function lh(t, n) {
        return t[0] <= t[1] ? t[0] <= n && n <= t[1] : n < t[0] || t[1] < n;
      }
      var hh,
        dh,
        ph,
        vh,
        yh,
        gh,
        bh,
        mh,
        _h,
        wh,
        xh,
        Mh,
        Sh,
        Ah,
        Eh,
        kh,
        Ch = function(t) {
          var n, e, r, i, o, a, u;
          if (((Gl = Yl = -(Vl = Hl = 1 / 0)), (Zl = []), Cl(t, nh), (e = Zl.length))) {
            for (Zl.sort(sh), n = 1, r = Zl[0], o = [r]; n < e; ++n)
              (i = Zl[n]),
                lh(r, i[0]) || lh(r, i[1])
                  ? (fh(r[0], i[1]) > fh(r[0], r[1]) && (r[1] = i[1]), fh(i[0], r[1]) > fh(r[0], r[1]) && (r[0] = i[0]))
                  : o.push((r = i));
            for (a = -1 / 0, e = o.length - 1, n = 0, r = o[e]; n <= e; r = i, ++n)
              (i = o[n]), (u = fh(r[1], i[0])) > a && ((a = u), (Vl = i[0]), (Yl = r[1]));
          }
          return (Zl = Jl = null), Vl === 1 / 0 || Hl === 1 / 0 ? [[NaN, NaN], [NaN, NaN]] : [[Vl, Hl], [Yl, Gl]];
        },
        Th = {
          sphere: gl,
          point: Oh,
          lineStart: Ph,
          lineEnd: Lh,
          polygonStart: function() {
            (Th.lineStart = Ih), (Th.lineEnd = $h);
          },
          polygonEnd: function() {
            (Th.lineStart = Ph), (Th.lineEnd = Lh);
          },
        };
      function Oh(t, n) {
        (t *= nl), (n *= nl);
        var e = ol(n);
        Nh(e * ol(t), e * sl(t), sl(n));
      }
      function Nh(t, n, e) {
        ++hh, (ph += (t - ph) / hh), (vh += (n - vh) / hh), (yh += (e - yh) / hh);
      }
      function Ph() {
        Th.point = Rh;
      }
      function Rh(t, n) {
        (t *= nl), (n *= nl);
        var e = ol(n);
        (Ah = e * ol(t)), (Eh = e * sl(t)), (kh = sl(n)), (Th.point = jh), Nh(Ah, Eh, kh);
      }
      function jh(t, n) {
        (t *= nl), (n *= nl);
        var e = ol(n),
          r = e * ol(t),
          i = e * sl(t),
          o = sl(n),
          a = il(
            hl((a = Eh * o - kh * i) * a + (a = kh * r - Ah * o) * a + (a = Ah * i - Eh * r) * a),
            Ah * r + Eh * i + kh * o
          );
        (dh += a),
          (gh += a * (Ah + (Ah = r))),
          (bh += a * (Eh + (Eh = i))),
          (mh += a * (kh + (kh = o))),
          Nh(Ah, Eh, kh);
      }
      function Lh() {
        Th.point = Oh;
      }
      function Ih() {
        Th.point = Fh;
      }
      function $h() {
        Dh(Mh, Sh), (Th.point = Oh);
      }
      function Fh(t, n) {
        (Mh = t), (Sh = n), (t *= nl), (n *= nl), (Th.point = Dh);
        var e = ol(n);
        (Ah = e * ol(t)), (Eh = e * sl(t)), (kh = sl(n)), Nh(Ah, Eh, kh);
      }
      function Dh(t, n) {
        (t *= nl), (n *= nl);
        var e = ol(n),
          r = e * ol(t),
          i = e * sl(t),
          o = sl(n),
          a = Eh * o - kh * i,
          u = kh * r - Ah * o,
          c = Ah * i - Eh * r,
          f = hl(a * a + u * u + c * c),
          s = vl(f),
          l = f && -s / f;
        (_h += l * a),
          (wh += l * u),
          (xh += l * c),
          (dh += s),
          (gh += s * (Ah + (Ah = r))),
          (bh += s * (Eh + (Eh = i))),
          (mh += s * (kh + (kh = o))),
          Nh(Ah, Eh, kh);
      }
      var zh = function(t) {
          (hh = dh = ph = vh = yh = gh = bh = mh = _h = wh = xh = 0), Cl(t, Th);
          var n = _h,
            e = wh,
            r = xh,
            i = n * n + e * e + r * r;
          return i < Xs &&
            ((n = gh),
            (e = bh),
            (r = mh),
            dh < Ws && ((n = ph), (e = vh), (r = yh)),
            (i = n * n + e * e + r * r),
            i < Xs)
            ? [NaN, NaN]
            : [il(e, n) * tl, vl(r / hl(i)) * tl];
        },
        Uh = function(t) {
          return function() {
            return t;
          };
        },
        Bh = function(t, n) {
          function e(e, r) {
            return (e = t(e, r)), n(e[0], e[1]);
          }
          return (
            t.invert &&
              n.invert &&
              (e.invert = function(e, r) {
                return (e = n.invert(e, r)), e && t.invert(e[0], e[1]);
              }),
            e
          );
        };
      function qh(t, n) {
        return [el(t) > Ks ? t + Math.round(-t / Js) * Js : t, n];
      }
      function Vh(t, n, e) {
        return (t %= Js) ? (n || e ? Bh(Yh(t), Gh(n, e)) : Yh(t)) : n || e ? Gh(n, e) : qh;
      }
      function Hh(t) {
        return function(n, e) {
          return (n += t), [n > Ks ? n - Js : n < -Ks ? n + Js : n, e];
        };
      }
      function Yh(t) {
        var n = Hh(t);
        return (n.invert = Hh(-t)), n;
      }
      function Gh(t, n) {
        var e = ol(t),
          r = sl(t),
          i = ol(n),
          o = sl(n);
        function a(t, n) {
          var a = ol(n),
            u = ol(t) * a,
            c = sl(t) * a,
            f = sl(n),
            s = f * e + u * r;
          return [il(c * i - s * o, u * e - f * r), vl(s * i + c * o)];
        }
        return (
          (a.invert = function(t, n) {
            var a = ol(n),
              u = ol(t) * a,
              c = sl(t) * a,
              f = sl(n),
              s = f * i - c * o;
            return [il(c * i + f * o, u * e + s * r), vl(s * e - u * r)];
          }),
          a
        );
      }
      qh.invert = qh;
      var Wh = function(t) {
        function n(n) {
          return (n = t(n[0] * nl, n[1] * nl)), (n[0] *= tl), (n[1] *= tl), n;
        }
        return (
          (t = Vh(t[0] * nl, t[1] * nl, t.length > 2 ? t[2] * nl : 0)),
          (n.invert = function(n) {
            return (n = t.invert(n[0] * nl, n[1] * nl)), (n[0] *= tl), (n[1] *= tl), n;
          }),
          n
        );
      };
      function Xh(t, n, e, r, i, o) {
        if (e) {
          var a = ol(n),
            u = sl(n),
            c = r * e;
          null == i
            ? ((i = n + r * Js), (o = n - c / 2))
            : ((i = Kh(a, i)), (o = Kh(a, o)), (r > 0 ? i < o : i > o) && (i += r * Js));
          for (var f, s = i; r > 0 ? s > o : s < o; s -= c) (f = $l([a, -u * ol(s), -u * sl(s)])), t.point(f[0], f[1]);
        }
      }
      function Kh(t, n) {
        (n = Fl(n)), (n[0] -= t), ql(n);
        var e = pl(-n[1]);
        return ((-n[2] < 0 ? -e : e) + Js - Ws) % Js;
      }
      var Qh = function() {
          var t,
            n,
            e = Uh([0, 0]),
            r = Uh(90),
            i = Uh(6),
            o = { point: a };
          function a(e, r) {
            t.push((e = n(e, r))), (e[0] *= tl), (e[1] *= tl);
          }
          function u() {
            var a = e.apply(this, arguments),
              u = r.apply(this, arguments) * nl,
              c = i.apply(this, arguments) * nl;
            return (
              (t = []),
              (n = Vh(-a[0] * nl, -a[1] * nl, 0).invert),
              Xh(o, u, c, 1),
              (a = { type: 'Polygon', coordinates: [t] }),
              (t = n = null),
              a
            );
          }
          return (
            (u.center = function(t) {
              return arguments.length ? ((e = 'function' === typeof t ? t : Uh([+t[0], +t[1]])), u) : e;
            }),
            (u.radius = function(t) {
              return arguments.length ? ((r = 'function' === typeof t ? t : Uh(+t)), u) : r;
            }),
            (u.precision = function(t) {
              return arguments.length ? ((i = 'function' === typeof t ? t : Uh(+t)), u) : i;
            }),
            u
          );
        },
        Zh = function() {
          var t,
            n = [];
          return {
            point: function(n, e) {
              t.push([n, e]);
            },
            lineStart: function() {
              n.push((t = []));
            },
            lineEnd: gl,
            rejoin: function() {
              n.length > 1 && n.push(n.pop().concat(n.shift()));
            },
            result: function() {
              var e = n;
              return (n = []), (t = null), e;
            },
          };
        },
        Jh = function(t, n) {
          return el(t[0] - n[0]) < Ws && el(t[1] - n[1]) < Ws;
        };
      function td(t, n, e, r) {
        (this.x = t), (this.z = n), (this.o = e), (this.e = r), (this.v = !1), (this.n = this.p = null);
      }
      var nd = function(t, n, e, r, i) {
        var o,
          a,
          u = [],
          c = [];
        if (
          (t.forEach(function(t) {
            if (!((n = t.length - 1) <= 0)) {
              var n,
                e,
                r = t[0],
                a = t[n];
              if (Jh(r, a)) {
                for (i.lineStart(), o = 0; o < n; ++o) i.point((r = t[o])[0], r[1]);
                i.lineEnd();
              } else
                u.push((e = new td(r, t, null, !0))),
                  c.push((e.o = new td(r, null, e, !1))),
                  u.push((e = new td(a, t, null, !1))),
                  c.push((e.o = new td(a, null, e, !0)));
            }
          }),
          u.length)
        ) {
          for (c.sort(n), ed(u), ed(c), o = 0, a = c.length; o < a; ++o) c[o].e = e = !e;
          var f,
            s,
            l = u[0];
          while (1) {
            var h = l,
              d = !0;
            while (h.v) if ((h = h.n) === l) return;
            (f = h.z), i.lineStart();
            do {
              if (((h.v = h.o.v = !0), h.e)) {
                if (d) for (o = 0, a = f.length; o < a; ++o) i.point((s = f[o])[0], s[1]);
                else r(h.x, h.n.x, 1, i);
                h = h.n;
              } else {
                if (d) for (f = h.p.z, o = f.length - 1; o >= 0; --o) i.point((s = f[o])[0], s[1]);
                else r(h.x, h.p.x, -1, i);
                h = h.p;
              }
              (h = h.o), (f = h.z), (d = !d);
            } while (!h.v);
            i.lineEnd();
          }
        }
      };
      function ed(t) {
        if ((n = t.length)) {
          var n,
            e,
            r = 0,
            i = t[0];
          while (++r < n) (i.n = e = t[r]), (e.p = i), (i = e);
          (i.n = e = t[0]), (e.p = i);
        }
      }
      var rd = Vs(),
        id = function(t, n) {
          var e = n[0],
            r = n[1],
            i = sl(r),
            o = [sl(e), -ol(e), 0],
            a = 0,
            u = 0;
          rd.reset(), 1 === i ? (r = Qs + Ws) : -1 === i && (r = -Qs - Ws);
          for (var c = 0, f = t.length; c < f; ++c)
            if ((l = (s = t[c]).length))
              for (
                var s, l, h = s[l - 1], d = h[0], p = h[1] / 2 + Zs, v = sl(p), y = ol(p), g = 0;
                g < l;
                ++g, d = m, v = w, y = x, h = b
              ) {
                var b = s[g],
                  m = b[0],
                  _ = b[1] / 2 + Zs,
                  w = sl(_),
                  x = ol(_),
                  M = m - d,
                  S = M >= 0 ? 1 : -1,
                  A = S * M,
                  E = A > Ks,
                  k = v * w;
                if (
                  (rd.add(il(k * S * sl(A), y * x + k * ol(A))), (a += E ? M + S * Js : M), E ^ (d >= e) ^ (m >= e))
                ) {
                  var C = zl(Fl(h), Fl(b));
                  ql(C);
                  var T = zl(o, C);
                  ql(T);
                  var O = (E ^ (M >= 0) ? -1 : 1) * vl(T[2]);
                  (r > O || (r === O && (C[0] || C[1]))) && (u += E ^ (M >= 0) ? 1 : -1);
                }
              }
          return (a < -Ws || (a < Ws && rd < -Ws)) ^ (1 & u);
        },
        od = function(t, n, e, r) {
          return function(i) {
            var o,
              a,
              u,
              c = n(i),
              f = Zh(),
              s = n(f),
              l = !1,
              h = {
                point: d,
                lineStart: v,
                lineEnd: y,
                polygonStart: function() {
                  (h.point = g), (h.lineStart = b), (h.lineEnd = m), (a = []), (o = []);
                },
                polygonEnd: function() {
                  (h.point = d), (h.lineStart = v), (h.lineEnd = y), (a = D(a));
                  var t = id(o, r);
                  a.length
                    ? (l || (i.polygonStart(), (l = !0)), nd(a, ud, t, e, i))
                    : t && (l || (i.polygonStart(), (l = !0)), i.lineStart(), e(null, null, 1, i), i.lineEnd()),
                    l && (i.polygonEnd(), (l = !1)),
                    (a = o = null);
                },
                sphere: function() {
                  i.polygonStart(), i.lineStart(), e(null, null, 1, i), i.lineEnd(), i.polygonEnd();
                },
              };
            function d(n, e) {
              t(n, e) && i.point(n, e);
            }
            function p(t, n) {
              c.point(t, n);
            }
            function v() {
              (h.point = p), c.lineStart();
            }
            function y() {
              (h.point = d), c.lineEnd();
            }
            function g(t, n) {
              u.push([t, n]), s.point(t, n);
            }
            function b() {
              s.lineStart(), (u = []);
            }
            function m() {
              g(u[0][0], u[0][1]), s.lineEnd();
              var t,
                n,
                e,
                r,
                c = s.clean(),
                h = f.result(),
                d = h.length;
              if ((u.pop(), o.push(u), (u = null), d))
                if (1 & c) {
                  if (((e = h[0]), (n = e.length - 1) > 0)) {
                    for (l || (i.polygonStart(), (l = !0)), i.lineStart(), t = 0; t < n; ++t)
                      i.point((r = e[t])[0], r[1]);
                    i.lineEnd();
                  }
                } else d > 1 && 2 & c && h.push(h.pop().concat(h.shift())), a.push(h.filter(ad));
            }
            return h;
          };
        };
      function ad(t) {
        return t.length > 1;
      }
      function ud(t, n) {
        return ((t = t.x)[0] < 0 ? t[1] - Qs - Ws : Qs - t[1]) - ((n = n.x)[0] < 0 ? n[1] - Qs - Ws : Qs - n[1]);
      }
      var cd = od(
        function() {
          return !0;
        },
        fd,
        ld,
        [-Ks, -Qs]
      );
      function fd(t) {
        var n,
          e = NaN,
          r = NaN,
          i = NaN;
        return {
          lineStart: function() {
            t.lineStart(), (n = 1);
          },
          point: function(o, a) {
            var u = o > 0 ? Ks : -Ks,
              c = el(o - e);
            el(c - Ks) < Ws
              ? (t.point(e, (r = (r + a) / 2 > 0 ? Qs : -Qs)),
                t.point(i, r),
                t.lineEnd(),
                t.lineStart(),
                t.point(u, r),
                t.point(o, r),
                (n = 0))
              : i !== u &&
                c >= Ks &&
                (el(e - i) < Ws && (e -= i * Ws),
                el(o - u) < Ws && (o -= u * Ws),
                (r = sd(e, r, o, a)),
                t.point(i, r),
                t.lineEnd(),
                t.lineStart(),
                t.point(u, r),
                (n = 0)),
              t.point((e = o), (r = a)),
              (i = u);
          },
          lineEnd: function() {
            t.lineEnd(), (e = r = NaN);
          },
          clean: function() {
            return 2 - n;
          },
        };
      }
      function sd(t, n, e, r) {
        var i,
          o,
          a = sl(t - e);
        return el(a) > Ws ? rl((sl(n) * (o = ol(r)) * sl(e) - sl(r) * (i = ol(n)) * sl(t)) / (i * o * a)) : (n + r) / 2;
      }
      function ld(t, n, e, r) {
        var i;
        if (null == t)
          (i = e * Qs),
            r.point(-Ks, i),
            r.point(0, i),
            r.point(Ks, i),
            r.point(Ks, 0),
            r.point(Ks, -i),
            r.point(0, -i),
            r.point(-Ks, -i),
            r.point(-Ks, 0),
            r.point(-Ks, i);
        else if (el(t[0] - n[0]) > Ws) {
          var o = t[0] < n[0] ? Ks : -Ks;
          (i = (e * o) / 2), r.point(-o, i), r.point(0, i), r.point(o, i);
        } else r.point(n[0], n[1]);
      }
      var hd = function(t) {
          var n = ol(t),
            e = 6 * nl,
            r = n > 0,
            i = el(n) > Ws;
          function o(n, r, i, o) {
            Xh(o, t, e, i, n, r);
          }
          function a(t, e) {
            return ol(t) * ol(e) > n;
          }
          function u(t) {
            var n, e, o, u, s;
            return {
              lineStart: function() {
                (u = o = !1), (s = 1);
              },
              point: function(l, h) {
                var d,
                  p = [l, h],
                  v = a(l, h),
                  y = r ? (v ? 0 : f(l, h)) : v ? f(l + (l < 0 ? Ks : -Ks), h) : 0;
                if (
                  (!n && (u = o = v) && t.lineStart(),
                  v !== o &&
                    ((d = c(n, p)), (!d || Jh(n, d) || Jh(p, d)) && ((p[0] += Ws), (p[1] += Ws), (v = a(p[0], p[1])))),
                  v !== o)
                )
                  (s = 0),
                    v
                      ? (t.lineStart(), (d = c(p, n)), t.point(d[0], d[1]))
                      : ((d = c(n, p)), t.point(d[0], d[1]), t.lineEnd()),
                    (n = d);
                else if (i && n && r ^ v) {
                  var g;
                  y & e ||
                    !(g = c(p, n, !0)) ||
                    ((s = 0),
                    r
                      ? (t.lineStart(), t.point(g[0][0], g[0][1]), t.point(g[1][0], g[1][1]), t.lineEnd())
                      : (t.point(g[1][0], g[1][1]), t.lineEnd(), t.lineStart(), t.point(g[0][0], g[0][1])));
                }
                !v || (n && Jh(n, p)) || t.point(p[0], p[1]), (n = p), (o = v), (e = y);
              },
              lineEnd: function() {
                o && t.lineEnd(), (n = null);
              },
              clean: function() {
                return s | ((u && o) << 1);
              },
            };
          }
          function c(t, e, r) {
            var i = Fl(t),
              o = Fl(e),
              a = [1, 0, 0],
              u = zl(i, o),
              c = Dl(u, u),
              f = u[0],
              s = c - f * f;
            if (!s) return !r && t;
            var l = (n * c) / s,
              h = (-n * f) / s,
              d = zl(a, u),
              p = Bl(a, l),
              v = Bl(u, h);
            Ul(p, v);
            var y = d,
              g = Dl(p, y),
              b = Dl(y, y),
              m = g * g - b * (Dl(p, p) - 1);
            if (!(m < 0)) {
              var _ = hl(m),
                w = Bl(y, (-g - _) / b);
              if ((Ul(w, p), (w = $l(w)), !r)) return w;
              var x,
                M = t[0],
                S = e[0],
                A = t[1],
                E = e[1];
              S < M && ((x = M), (M = S), (S = x));
              var k = S - M,
                C = el(k - Ks) < Ws,
                T = C || k < Ws;
              if (
                (!C && E < A && ((x = A), (A = E), (E = x)),
                T
                  ? C
                    ? (A + E > 0) ^ (w[1] < (el(w[0] - M) < Ws ? A : E))
                    : A <= w[1] && w[1] <= E
                  : (k > Ks) ^ (M <= w[0] && w[0] <= S))
              ) {
                var O = Bl(y, (-g + _) / b);
                return Ul(O, p), [w, $l(O)];
              }
            }
          }
          function f(n, e) {
            var i = r ? t : Ks - t,
              o = 0;
            return n < -i ? (o |= 1) : n > i && (o |= 2), e < -i ? (o |= 4) : e > i && (o |= 8), o;
          }
          return od(a, u, o, r ? [0, -t] : [-Ks, t - Ks]);
        },
        dd = function(t, n, e, r, i, o) {
          var a,
            u = t[0],
            c = t[1],
            f = n[0],
            s = n[1],
            l = 0,
            h = 1,
            d = f - u,
            p = s - c;
          if (((a = e - u), d || !(a > 0))) {
            if (((a /= d), d < 0)) {
              if (a < l) return;
              a < h && (h = a);
            } else if (d > 0) {
              if (a > h) return;
              a > l && (l = a);
            }
            if (((a = i - u), d || !(a < 0))) {
              if (((a /= d), d < 0)) {
                if (a > h) return;
                a > l && (l = a);
              } else if (d > 0) {
                if (a < l) return;
                a < h && (h = a);
              }
              if (((a = r - c), p || !(a > 0))) {
                if (((a /= p), p < 0)) {
                  if (a < l) return;
                  a < h && (h = a);
                } else if (p > 0) {
                  if (a > h) return;
                  a > l && (l = a);
                }
                if (((a = o - c), p || !(a < 0))) {
                  if (((a /= p), p < 0)) {
                    if (a > h) return;
                    a > l && (l = a);
                  } else if (p > 0) {
                    if (a < l) return;
                    a < h && (h = a);
                  }
                  return (
                    l > 0 && ((t[0] = u + l * d), (t[1] = c + l * p)),
                    h < 1 && ((n[0] = u + h * d), (n[1] = c + h * p)),
                    !0
                  );
                }
              }
            }
          }
        },
        pd = 1e9,
        vd = -pd;
      function yd(t, n, e, r) {
        function i(i, o) {
          return t <= i && i <= e && n <= o && o <= r;
        }
        function o(i, o, u, f) {
          var s = 0,
            l = 0;
          if (null == i || (s = a(i, u)) !== (l = a(o, u)) || (c(i, o) < 0) ^ (u > 0))
            do {
              f.point(0 === s || 3 === s ? t : e, s > 1 ? r : n);
            } while ((s = (s + u + 4) % 4) !== l);
          else f.point(o[0], o[1]);
        }
        function a(r, i) {
          return el(r[0] - t) < Ws
            ? i > 0
              ? 0
              : 3
            : el(r[0] - e) < Ws
              ? i > 0
                ? 2
                : 1
              : el(r[1] - n) < Ws
                ? i > 0
                  ? 1
                  : 0
                : i > 0
                  ? 3
                  : 2;
        }
        function u(t, n) {
          return c(t.x, n.x);
        }
        function c(t, n) {
          var e = a(t, 1),
            r = a(n, 1);
          return e !== r ? e - r : 0 === e ? n[1] - t[1] : 1 === e ? t[0] - n[0] : 2 === e ? t[1] - n[1] : n[0] - t[0];
        }
        return function(a) {
          var c,
            f,
            s,
            l,
            h,
            d,
            p,
            v,
            y,
            g,
            b,
            m = a,
            _ = Zh(),
            w = { point: x, lineStart: E, lineEnd: k, polygonStart: S, polygonEnd: A };
          function x(t, n) {
            i(t, n) && m.point(t, n);
          }
          function M() {
            for (var n = 0, e = 0, i = f.length; e < i; ++e)
              for (var o, a, u = f[e], c = 1, s = u.length, l = u[0], h = l[0], d = l[1]; c < s; ++c)
                (o = h),
                  (a = d),
                  (l = u[c]),
                  (h = l[0]),
                  (d = l[1]),
                  a <= r
                    ? d > r && (h - o) * (r - a) > (d - a) * (t - o) && ++n
                    : d <= r && (h - o) * (r - a) < (d - a) * (t - o) && --n;
            return n;
          }
          function S() {
            (m = _), (c = []), (f = []), (b = !0);
          }
          function A() {
            var t = M(),
              n = b && t,
              e = (c = D(c)).length;
            (n || e) &&
              (a.polygonStart(),
              n && (a.lineStart(), o(null, null, 1, a), a.lineEnd()),
              e && nd(c, u, t, o, a),
              a.polygonEnd()),
              (m = a),
              (c = f = s = null);
          }
          function E() {
            (w.point = C), f && f.push((s = [])), (g = !0), (y = !1), (p = v = NaN);
          }
          function k() {
            c && (C(l, h), d && y && _.rejoin(), c.push(_.result())), (w.point = x), y && m.lineEnd();
          }
          function C(o, a) {
            var u = i(o, a);
            if ((f && s.push([o, a]), g)) (l = o), (h = a), (d = u), (g = !1), u && (m.lineStart(), m.point(o, a));
            else if (u && y) m.point(o, a);
            else {
              var c = [(p = Math.max(vd, Math.min(pd, p))), (v = Math.max(vd, Math.min(pd, v)))],
                _ = [(o = Math.max(vd, Math.min(pd, o))), (a = Math.max(vd, Math.min(pd, a)))];
              dd(c, _, t, n, e, r)
                ? (y || (m.lineStart(), m.point(c[0], c[1])), m.point(_[0], _[1]), u || m.lineEnd(), (b = !1))
                : u && (m.lineStart(), m.point(o, a), (b = !1));
            }
            (p = o), (v = a), (y = u);
          }
          return w;
        };
      }
      var gd,
        bd,
        md,
        _d = function() {
          var t,
            n,
            e,
            r = 0,
            i = 0,
            o = 960,
            a = 500;
          return (e = {
            stream: function(e) {
              return t && n === e ? t : (t = yd(r, i, o, a)((n = e)));
            },
            extent: function(u) {
              return arguments.length
                ? ((r = +u[0][0]), (i = +u[0][1]), (o = +u[1][0]), (a = +u[1][1]), (t = n = null), e)
                : [[r, i], [o, a]];
            },
          });
        },
        wd = Vs(),
        xd = { sphere: gl, point: gl, lineStart: Md, lineEnd: gl, polygonStart: gl, polygonEnd: gl };
      function Md() {
        (xd.point = Ad), (xd.lineEnd = Sd);
      }
      function Sd() {
        xd.point = xd.lineEnd = gl;
      }
      function Ad(t, n) {
        (t *= nl), (n *= nl), (gd = t), (bd = sl(n)), (md = ol(n)), (xd.point = Ed);
      }
      function Ed(t, n) {
        (t *= nl), (n *= nl);
        var e = sl(n),
          r = ol(n),
          i = el(t - gd),
          o = ol(i),
          a = sl(i),
          u = r * a,
          c = md * e - bd * r * o,
          f = bd * e + md * r * o;
        wd.add(il(hl(u * u + c * c), f)), (gd = t), (bd = e), (md = r);
      }
      var kd = function(t) {
          return wd.reset(), Cl(t, xd), +wd;
        },
        Cd = [null, null],
        Td = { type: 'LineString', coordinates: Cd },
        Od = function(t, n) {
          return (Cd[0] = t), (Cd[1] = n), kd(Td);
        },
        Nd = {
          Feature: function(t, n) {
            return Rd(t.geometry, n);
          },
          FeatureCollection: function(t, n) {
            var e = t.features,
              r = -1,
              i = e.length;
            while (++r < i) if (Rd(e[r].geometry, n)) return !0;
            return !1;
          },
        },
        Pd = {
          Sphere: function() {
            return !0;
          },
          Point: function(t, n) {
            return jd(t.coordinates, n);
          },
          MultiPoint: function(t, n) {
            var e = t.coordinates,
              r = -1,
              i = e.length;
            while (++r < i) if (jd(e[r], n)) return !0;
            return !1;
          },
          LineString: function(t, n) {
            return Ld(t.coordinates, n);
          },
          MultiLineString: function(t, n) {
            var e = t.coordinates,
              r = -1,
              i = e.length;
            while (++r < i) if (Ld(e[r], n)) return !0;
            return !1;
          },
          Polygon: function(t, n) {
            return Id(t.coordinates, n);
          },
          MultiPolygon: function(t, n) {
            var e = t.coordinates,
              r = -1,
              i = e.length;
            while (++r < i) if (Id(e[r], n)) return !0;
            return !1;
          },
          GeometryCollection: function(t, n) {
            var e = t.geometries,
              r = -1,
              i = e.length;
            while (++r < i) if (Rd(e[r], n)) return !0;
            return !1;
          },
        };
      function Rd(t, n) {
        return !(!t || !Pd.hasOwnProperty(t.type)) && Pd[t.type](t, n);
      }
      function jd(t, n) {
        return 0 === Od(t, n);
      }
      function Ld(t, n) {
        var e = Od(t[0], t[1]),
          r = Od(t[0], n),
          i = Od(n, t[1]);
        return r + i <= e + Ws;
      }
      function Id(t, n) {
        return !!id(t.map($d), Fd(n));
      }
      function $d(t) {
        return (t = t.map(Fd)), t.pop(), t;
      }
      function Fd(t) {
        return [t[0] * nl, t[1] * nl];
      }
      var Dd = function(t, n) {
        return (t && Nd.hasOwnProperty(t.type) ? Nd[t.type] : Rd)(t, n);
      };
      function zd(t, n, e) {
        var r = S(t, n - Ws, e).concat(n);
        return function(t) {
          return r.map(function(n) {
            return [t, n];
          });
        };
      }
      function Ud(t, n, e) {
        var r = S(t, n - Ws, e).concat(n);
        return function(t) {
          return r.map(function(n) {
            return [n, t];
          });
        };
      }
      function Bd() {
        var t,
          n,
          e,
          r,
          i,
          o,
          a,
          u,
          c,
          f,
          s,
          l,
          h = 10,
          d = h,
          p = 90,
          v = 360,
          y = 2.5;
        function g() {
          return { type: 'MultiLineString', coordinates: b() };
        }
        function b() {
          return S(al(r / p) * p, e, p)
            .map(s)
            .concat(S(al(u / v) * v, a, v).map(l))
            .concat(
              S(al(n / h) * h, t, h)
                .filter(function(t) {
                  return el(t % p) > Ws;
                })
                .map(c)
            )
            .concat(
              S(al(o / d) * d, i, d)
                .filter(function(t) {
                  return el(t % v) > Ws;
                })
                .map(f)
            );
        }
        return (
          (g.lines = function() {
            return b().map(function(t) {
              return { type: 'LineString', coordinates: t };
            });
          }),
          (g.outline = function() {
            return {
              type: 'Polygon',
              coordinates: [
                s(r).concat(
                  l(a).slice(1),
                  s(e)
                    .reverse()
                    .slice(1),
                  l(u)
                    .reverse()
                    .slice(1)
                ),
              ],
            };
          }),
          (g.extent = function(t) {
            return arguments.length ? g.extentMajor(t).extentMinor(t) : g.extentMinor();
          }),
          (g.extentMajor = function(t) {
            return arguments.length
              ? ((r = +t[0][0]),
                (e = +t[1][0]),
                (u = +t[0][1]),
                (a = +t[1][1]),
                r > e && ((t = r), (r = e), (e = t)),
                u > a && ((t = u), (u = a), (a = t)),
                g.precision(y))
              : [[r, u], [e, a]];
          }),
          (g.extentMinor = function(e) {
            return arguments.length
              ? ((n = +e[0][0]),
                (t = +e[1][0]),
                (o = +e[0][1]),
                (i = +e[1][1]),
                n > t && ((e = n), (n = t), (t = e)),
                o > i && ((e = o), (o = i), (i = e)),
                g.precision(y))
              : [[n, o], [t, i]];
          }),
          (g.step = function(t) {
            return arguments.length ? g.stepMajor(t).stepMinor(t) : g.stepMinor();
          }),
          (g.stepMajor = function(t) {
            return arguments.length ? ((p = +t[0]), (v = +t[1]), g) : [p, v];
          }),
          (g.stepMinor = function(t) {
            return arguments.length ? ((h = +t[0]), (d = +t[1]), g) : [h, d];
          }),
          (g.precision = function(h) {
            return arguments.length
              ? ((y = +h), (c = zd(o, i, 90)), (f = Ud(n, t, y)), (s = zd(u, a, 90)), (l = Ud(r, e, y)), g)
              : y;
          }),
          g.extentMajor([[-180, -90 + Ws], [180, 90 - Ws]]).extentMinor([[-180, -80 - Ws], [180, 80 + Ws]])
        );
      }
      function qd() {
        return Bd()();
      }
      var Vd,
        Hd,
        Yd,
        Gd,
        Wd = function(t, n) {
          var e = t[0] * nl,
            r = t[1] * nl,
            i = n[0] * nl,
            o = n[1] * nl,
            a = ol(r),
            u = sl(r),
            c = ol(o),
            f = sl(o),
            s = a * ol(e),
            l = a * sl(e),
            h = c * ol(i),
            d = c * sl(i),
            p = 2 * vl(hl(yl(o - r) + a * c * yl(i - e))),
            v = sl(p),
            y = p
              ? function(t) {
                  var n = sl((t *= p)) / v,
                    e = sl(p - t) / v,
                    r = e * s + n * h,
                    i = e * l + n * d,
                    o = e * u + n * f;
                  return [il(i, r) * tl, il(o, hl(r * r + i * i)) * tl];
                }
              : function() {
                  return [e * tl, r * tl];
                };
          return (y.distance = p), y;
        },
        Xd = function(t) {
          return t;
        },
        Kd = Vs(),
        Qd = Vs(),
        Zd = {
          point: gl,
          lineStart: gl,
          lineEnd: gl,
          polygonStart: function() {
            (Zd.lineStart = Jd), (Zd.lineEnd = ep);
          },
          polygonEnd: function() {
            (Zd.lineStart = Zd.lineEnd = Zd.point = gl), Kd.add(el(Qd)), Qd.reset();
          },
          result: function() {
            var t = Kd / 2;
            return Kd.reset(), t;
          },
        };
      function Jd() {
        Zd.point = tp;
      }
      function tp(t, n) {
        (Zd.point = np), (Vd = Yd = t), (Hd = Gd = n);
      }
      function np(t, n) {
        Qd.add(Gd * t - Yd * n), (Yd = t), (Gd = n);
      }
      function ep() {
        np(Vd, Hd);
      }
      var rp = Zd,
        ip = 1 / 0,
        op = ip,
        ap = -ip,
        up = ap,
        cp = {
          point: fp,
          lineStart: gl,
          lineEnd: gl,
          polygonStart: gl,
          polygonEnd: gl,
          result: function() {
            var t = [[ip, op], [ap, up]];
            return (ap = up = -(op = ip = 1 / 0)), t;
          },
        };
      function fp(t, n) {
        t < ip && (ip = t), t > ap && (ap = t), n < op && (op = n), n > up && (up = n);
      }
      var sp,
        lp,
        hp,
        dp,
        pp = cp,
        vp = 0,
        yp = 0,
        gp = 0,
        bp = 0,
        mp = 0,
        _p = 0,
        wp = 0,
        xp = 0,
        Mp = 0,
        Sp = {
          point: Ap,
          lineStart: Ep,
          lineEnd: Tp,
          polygonStart: function() {
            (Sp.lineStart = Op), (Sp.lineEnd = Np);
          },
          polygonEnd: function() {
            (Sp.point = Ap), (Sp.lineStart = Ep), (Sp.lineEnd = Tp);
          },
          result: function() {
            var t = Mp ? [wp / Mp, xp / Mp] : _p ? [bp / _p, mp / _p] : gp ? [vp / gp, yp / gp] : [NaN, NaN];
            return (vp = yp = gp = bp = mp = _p = wp = xp = Mp = 0), t;
          },
        };
      function Ap(t, n) {
        (vp += t), (yp += n), ++gp;
      }
      function Ep() {
        Sp.point = kp;
      }
      function kp(t, n) {
        (Sp.point = Cp), Ap((hp = t), (dp = n));
      }
      function Cp(t, n) {
        var e = t - hp,
          r = n - dp,
          i = hl(e * e + r * r);
        (bp += (i * (hp + t)) / 2), (mp += (i * (dp + n)) / 2), (_p += i), Ap((hp = t), (dp = n));
      }
      function Tp() {
        Sp.point = Ap;
      }
      function Op() {
        Sp.point = Pp;
      }
      function Np() {
        Rp(sp, lp);
      }
      function Pp(t, n) {
        (Sp.point = Rp), Ap((sp = hp = t), (lp = dp = n));
      }
      function Rp(t, n) {
        var e = t - hp,
          r = n - dp,
          i = hl(e * e + r * r);
        (bp += (i * (hp + t)) / 2),
          (mp += (i * (dp + n)) / 2),
          (_p += i),
          (i = dp * t - hp * n),
          (wp += i * (hp + t)),
          (xp += i * (dp + n)),
          (Mp += 3 * i),
          Ap((hp = t), (dp = n));
      }
      var jp = Sp;
      function Lp(t) {
        this._context = t;
      }
      Lp.prototype = {
        _radius: 4.5,
        pointRadius: function(t) {
          return (this._radius = t), this;
        },
        polygonStart: function() {
          this._line = 0;
        },
        polygonEnd: function() {
          this._line = NaN;
        },
        lineStart: function() {
          this._point = 0;
        },
        lineEnd: function() {
          0 === this._line && this._context.closePath(), (this._point = NaN);
        },
        point: function(t, n) {
          switch (this._point) {
            case 0:
              this._context.moveTo(t, n), (this._point = 1);
              break;
            case 1:
              this._context.lineTo(t, n);
              break;
            default:
              this._context.moveTo(t + this._radius, n), this._context.arc(t, n, this._radius, 0, Js);
              break;
          }
        },
        result: gl,
      };
      var Ip,
        $p,
        Fp,
        Dp,
        zp,
        Up = Vs(),
        Bp = {
          point: gl,
          lineStart: function() {
            Bp.point = qp;
          },
          lineEnd: function() {
            Ip && Vp($p, Fp), (Bp.point = gl);
          },
          polygonStart: function() {
            Ip = !0;
          },
          polygonEnd: function() {
            Ip = null;
          },
          result: function() {
            var t = +Up;
            return Up.reset(), t;
          },
        };
      function qp(t, n) {
        (Bp.point = Vp), ($p = Dp = t), (Fp = zp = n);
      }
      function Vp(t, n) {
        (Dp -= t), (zp -= n), Up.add(hl(Dp * Dp + zp * zp)), (Dp = t), (zp = n);
      }
      var Hp = Bp;
      function Yp() {
        this._string = [];
      }
      function Gp(t) {
        return 'm0,' + t + 'a' + t + ',' + t + ' 0 1,1 0,' + -2 * t + 'a' + t + ',' + t + ' 0 1,1 0,' + 2 * t + 'z';
      }
      Yp.prototype = {
        _radius: 4.5,
        _circle: Gp(4.5),
        pointRadius: function(t) {
          return (t = +t) !== this._radius && ((this._radius = t), (this._circle = null)), this;
        },
        polygonStart: function() {
          this._line = 0;
        },
        polygonEnd: function() {
          this._line = NaN;
        },
        lineStart: function() {
          this._point = 0;
        },
        lineEnd: function() {
          0 === this._line && this._string.push('Z'), (this._point = NaN);
        },
        point: function(t, n) {
          switch (this._point) {
            case 0:
              this._string.push('M', t, ',', n), (this._point = 1);
              break;
            case 1:
              this._string.push('L', t, ',', n);
              break;
            default:
              null == this._circle && (this._circle = Gp(this._radius)),
                this._string.push('M', t, ',', n, this._circle);
              break;
          }
        },
        result: function() {
          if (this._string.length) {
            var t = this._string.join('');
            return (this._string = []), t;
          }
          return null;
        },
      };
      var Wp = function(t, n) {
          var e,
            r,
            i = 4.5;
          function o(t) {
            return t && ('function' === typeof i && r.pointRadius(+i.apply(this, arguments)), Cl(t, e(r))), r.result();
          }
          return (
            (o.area = function(t) {
              return Cl(t, e(rp)), rp.result();
            }),
            (o.measure = function(t) {
              return Cl(t, e(Hp)), Hp.result();
            }),
            (o.bounds = function(t) {
              return Cl(t, e(pp)), pp.result();
            }),
            (o.centroid = function(t) {
              return Cl(t, e(jp)), jp.result();
            }),
            (o.projection = function(n) {
              return arguments.length ? ((e = null == n ? ((t = null), Xd) : (t = n).stream), o) : t;
            }),
            (o.context = function(t) {
              return arguments.length
                ? ((r = null == t ? ((n = null), new Yp()) : new Lp((n = t))),
                  'function' !== typeof i && r.pointRadius(i),
                  o)
                : n;
            }),
            (o.pointRadius = function(t) {
              return arguments.length ? ((i = 'function' === typeof t ? t : (r.pointRadius(+t), +t)), o) : i;
            }),
            o.projection(t).context(n)
          );
        },
        Xp = function(t) {
          return { stream: Kp(t) };
        };
      function Kp(t) {
        return function(n) {
          var e = new Qp();
          for (var r in t) e[r] = t[r];
          return (e.stream = n), e;
        };
      }
      function Qp() {}
      function Zp(t, n, e) {
        var r = t.clipExtent && t.clipExtent();
        return (
          t.scale(150).translate([0, 0]),
          null != r && t.clipExtent(null),
          Cl(e, t.stream(pp)),
          n(pp.result()),
          null != r && t.clipExtent(r),
          t
        );
      }
      function Jp(t, n, e) {
        return Zp(
          t,
          function(e) {
            var r = n[1][0] - n[0][0],
              i = n[1][1] - n[0][1],
              o = Math.min(r / (e[1][0] - e[0][0]), i / (e[1][1] - e[0][1])),
              a = +n[0][0] + (r - o * (e[1][0] + e[0][0])) / 2,
              u = +n[0][1] + (i - o * (e[1][1] + e[0][1])) / 2;
            t.scale(150 * o).translate([a, u]);
          },
          e
        );
      }
      function tv(t, n, e) {
        return Jp(t, [[0, 0], n], e);
      }
      function nv(t, n, e) {
        return Zp(
          t,
          function(e) {
            var r = +n,
              i = r / (e[1][0] - e[0][0]),
              o = (r - i * (e[1][0] + e[0][0])) / 2,
              a = -i * e[0][1];
            t.scale(150 * i).translate([o, a]);
          },
          e
        );
      }
      function ev(t, n, e) {
        return Zp(
          t,
          function(e) {
            var r = +n,
              i = r / (e[1][1] - e[0][1]),
              o = -i * e[0][0],
              a = (r - i * (e[1][1] + e[0][1])) / 2;
            t.scale(150 * i).translate([o, a]);
          },
          e
        );
      }
      Qp.prototype = {
        constructor: Qp,
        point: function(t, n) {
          this.stream.point(t, n);
        },
        sphere: function() {
          this.stream.sphere();
        },
        lineStart: function() {
          this.stream.lineStart();
        },
        lineEnd: function() {
          this.stream.lineEnd();
        },
        polygonStart: function() {
          this.stream.polygonStart();
        },
        polygonEnd: function() {
          this.stream.polygonEnd();
        },
      };
      var rv = 16,
        iv = ol(30 * nl),
        ov = function(t, n) {
          return +n ? uv(t, n) : av(t);
        };
      function av(t) {
        return Kp({
          point: function(n, e) {
            (n = t(n, e)), this.stream.point(n[0], n[1]);
          },
        });
      }
      function uv(t, n) {
        function e(r, i, o, a, u, c, f, s, l, h, d, p, v, y) {
          var g = f - r,
            b = s - i,
            m = g * g + b * b;
          if (m > 4 * n && v--) {
            var _ = a + h,
              w = u + d,
              x = c + p,
              M = hl(_ * _ + w * w + x * x),
              S = vl((x /= M)),
              A = el(el(x) - 1) < Ws || el(o - l) < Ws ? (o + l) / 2 : il(w, _),
              E = t(A, S),
              k = E[0],
              C = E[1],
              T = k - r,
              O = C - i,
              N = b * T - g * O;
            ((N * N) / m > n || el((g * T + b * O) / m - 0.5) > 0.3 || a * h + u * d + c * p < iv) &&
              (e(r, i, o, a, u, c, k, C, A, (_ /= M), (w /= M), x, v, y),
              y.point(k, C),
              e(k, C, A, _, w, x, f, s, l, h, d, p, v, y));
          }
        }
        return function(n) {
          var r,
            i,
            o,
            a,
            u,
            c,
            f,
            s,
            l,
            h,
            d,
            p,
            v = {
              point: y,
              lineStart: g,
              lineEnd: m,
              polygonStart: function() {
                n.polygonStart(), (v.lineStart = _);
              },
              polygonEnd: function() {
                n.polygonEnd(), (v.lineStart = g);
              },
            };
          function y(e, r) {
            (e = t(e, r)), n.point(e[0], e[1]);
          }
          function g() {
            (s = NaN), (v.point = b), n.lineStart();
          }
          function b(r, i) {
            var o = Fl([r, i]),
              a = t(r, i);
            e(s, l, f, h, d, p, (s = a[0]), (l = a[1]), (f = r), (h = o[0]), (d = o[1]), (p = o[2]), rv, n),
              n.point(s, l);
          }
          function m() {
            (v.point = y), n.lineEnd();
          }
          function _() {
            g(), (v.point = w), (v.lineEnd = x);
          }
          function w(t, n) {
            b((r = t), n), (i = s), (o = l), (a = h), (u = d), (c = p), (v.point = b);
          }
          function x() {
            e(s, l, f, h, d, p, i, o, r, a, u, c, rv, n), (v.lineEnd = m), m();
          }
          return v;
        };
      }
      var cv = Kp({
        point: function(t, n) {
          this.stream.point(t * nl, n * nl);
        },
      });
      function fv(t) {
        return Kp({
          point: function(n, e) {
            var r = t(n, e);
            return this.stream.point(r[0], r[1]);
          },
        });
      }
      function sv(t, n, e) {
        function r(r, i) {
          return [n + t * r, e - t * i];
        }
        return (
          (r.invert = function(r, i) {
            return [(r - n) / t, (e - i) / t];
          }),
          r
        );
      }
      function lv(t, n, e, r) {
        var i = ol(r),
          o = sl(r),
          a = i * t,
          u = o * t,
          c = i / t,
          f = o / t,
          s = (o * e - i * n) / t,
          l = (o * n + i * e) / t;
        function h(t, r) {
          return [a * t - u * r + n, e - u * t - a * r];
        }
        return (
          (h.invert = function(t, n) {
            return [c * t - f * n + s, l - f * t - c * n];
          }),
          h
        );
      }
      function hv(t) {
        return dv(function() {
          return t;
        })();
      }
      function dv(t) {
        var n,
          e,
          r,
          i,
          o,
          a,
          u,
          c,
          f,
          s,
          l = 150,
          h = 480,
          d = 250,
          p = 0,
          v = 0,
          y = 0,
          g = 0,
          b = 0,
          m = 0,
          _ = null,
          w = cd,
          x = null,
          M = Xd,
          S = 0.5;
        function A(t) {
          return c(t[0] * nl, t[1] * nl);
        }
        function E(t) {
          return (t = c.invert(t[0], t[1])), t && [t[0] * tl, t[1] * tl];
        }
        function k() {
          var t = lv(l, 0, 0, m).apply(null, n(p, v)),
            r = (m ? lv : sv)(l, h - t[0], d - t[1], m);
          return (e = Vh(y, g, b)), (u = Bh(n, r)), (c = Bh(e, u)), (a = ov(u, S)), C();
        }
        function C() {
          return (f = s = null), A;
        }
        return (
          (A.stream = function(t) {
            return f && s === t ? f : (f = cv(fv(e)(w(a(M((s = t)))))));
          }),
          (A.preclip = function(t) {
            return arguments.length ? ((w = t), (_ = void 0), C()) : w;
          }),
          (A.postclip = function(t) {
            return arguments.length ? ((M = t), (x = r = i = o = null), C()) : M;
          }),
          (A.clipAngle = function(t) {
            return arguments.length ? ((w = +t ? hd((_ = t * nl)) : ((_ = null), cd)), C()) : _ * tl;
          }),
          (A.clipExtent = function(t) {
            return arguments.length
              ? ((M =
                  null == t
                    ? ((x = r = i = o = null), Xd)
                    : yd((x = +t[0][0]), (r = +t[0][1]), (i = +t[1][0]), (o = +t[1][1]))),
                C())
              : null == x
                ? null
                : [[x, r], [i, o]];
          }),
          (A.scale = function(t) {
            return arguments.length ? ((l = +t), k()) : l;
          }),
          (A.translate = function(t) {
            return arguments.length ? ((h = +t[0]), (d = +t[1]), k()) : [h, d];
          }),
          (A.center = function(t) {
            return arguments.length ? ((p = (t[0] % 360) * nl), (v = (t[1] % 360) * nl), k()) : [p * tl, v * tl];
          }),
          (A.rotate = function(t) {
            return arguments.length
              ? ((y = (t[0] % 360) * nl), (g = (t[1] % 360) * nl), (b = t.length > 2 ? (t[2] % 360) * nl : 0), k())
              : [y * tl, g * tl, b * tl];
          }),
          (A.angle = function(t) {
            return arguments.length ? ((m = (t % 360) * nl), k()) : m * tl;
          }),
          (A.precision = function(t) {
            return arguments.length ? ((a = ov(u, (S = t * t))), C()) : hl(S);
          }),
          (A.fitExtent = function(t, n) {
            return Jp(A, t, n);
          }),
          (A.fitSize = function(t, n) {
            return tv(A, t, n);
          }),
          (A.fitWidth = function(t, n) {
            return nv(A, t, n);
          }),
          (A.fitHeight = function(t, n) {
            return ev(A, t, n);
          }),
          function() {
            return (n = t.apply(this, arguments)), (A.invert = n.invert && E), k();
          }
        );
      }
      function pv(t) {
        var n = 0,
          e = Ks / 3,
          r = dv(t),
          i = r(n, e);
        return (
          (i.parallels = function(t) {
            return arguments.length ? r((n = t[0] * nl), (e = t[1] * nl)) : [n * tl, e * tl];
          }),
          i
        );
      }
      function vv(t) {
        var n = ol(t);
        function e(t, e) {
          return [t * n, sl(e) / n];
        }
        return (
          (e.invert = function(t, e) {
            return [t / n, vl(e * n)];
          }),
          e
        );
      }
      function yv(t, n) {
        var e = sl(t),
          r = (e + sl(n)) / 2;
        if (el(r) < Ws) return vv(t);
        var i = 1 + e * (2 * r - e),
          o = hl(i) / r;
        function a(t, n) {
          var e = hl(i - 2 * r * sl(n)) / r;
          return [e * sl((t *= r)), o - e * ol(t)];
        }
        return (
          (a.invert = function(t, n) {
            var e = o - n;
            return [(il(t, el(e)) / r) * ll(e), vl((i - (t * t + e * e) * r * r) / (2 * r))];
          }),
          a
        );
      }
      var gv = function() {
          return pv(yv)
            .scale(155.424)
            .center([0, 33.6442]);
        },
        bv = function() {
          return gv()
            .parallels([29.5, 45.5])
            .scale(1070)
            .translate([480, 250])
            .rotate([96, 0])
            .center([-0.6, 38.7]);
        };
      function mv(t) {
        var n = t.length;
        return {
          point: function(e, r) {
            var i = -1;
            while (++i < n) t[i].point(e, r);
          },
          sphere: function() {
            var e = -1;
            while (++e < n) t[e].sphere();
          },
          lineStart: function() {
            var e = -1;
            while (++e < n) t[e].lineStart();
          },
          lineEnd: function() {
            var e = -1;
            while (++e < n) t[e].lineEnd();
          },
          polygonStart: function() {
            var e = -1;
            while (++e < n) t[e].polygonStart();
          },
          polygonEnd: function() {
            var e = -1;
            while (++e < n) t[e].polygonEnd();
          },
        };
      }
      var _v = function() {
        var t,
          n,
          e,
          r,
          i,
          o,
          a = bv(),
          u = gv()
            .rotate([154, 0])
            .center([-2, 58.5])
            .parallels([55, 65]),
          c = gv()
            .rotate([157, 0])
            .center([-3, 19.9])
            .parallels([8, 18]),
          f = {
            point: function(t, n) {
              o = [t, n];
            },
          };
        function s(t) {
          var n = t[0],
            a = t[1];
          return (o = null), e.point(n, a), o || (r.point(n, a), o) || (i.point(n, a), o);
        }
        function l() {
          return (t = n = null), s;
        }
        return (
          (s.invert = function(t) {
            var n = a.scale(),
              e = a.translate(),
              r = (t[0] - e[0]) / n,
              i = (t[1] - e[1]) / n;
            return (i >= 0.12 && i < 0.234 && r >= -0.425 && r < -0.214
              ? u
              : i >= 0.166 && i < 0.234 && r >= -0.214 && r < -0.115
                ? c
                : a
            ).invert(t);
          }),
          (s.stream = function(e) {
            return t && n === e ? t : (t = mv([a.stream((n = e)), u.stream(e), c.stream(e)]));
          }),
          (s.precision = function(t) {
            return arguments.length ? (a.precision(t), u.precision(t), c.precision(t), l()) : a.precision();
          }),
          (s.scale = function(t) {
            return arguments.length
              ? (a.scale(t), u.scale(0.35 * t), c.scale(t), s.translate(a.translate()))
              : a.scale();
          }),
          (s.translate = function(t) {
            if (!arguments.length) return a.translate();
            var n = a.scale(),
              o = +t[0],
              s = +t[1];
            return (
              (e = a
                .translate(t)
                .clipExtent([[o - 0.455 * n, s - 0.238 * n], [o + 0.455 * n, s + 0.238 * n]])
                .stream(f)),
              (r = u
                .translate([o - 0.307 * n, s + 0.201 * n])
                .clipExtent([[o - 0.425 * n + Ws, s + 0.12 * n + Ws], [o - 0.214 * n - Ws, s + 0.234 * n - Ws]])
                .stream(f)),
              (i = c
                .translate([o - 0.205 * n, s + 0.212 * n])
                .clipExtent([[o - 0.214 * n + Ws, s + 0.166 * n + Ws], [o - 0.115 * n - Ws, s + 0.234 * n - Ws]])
                .stream(f)),
              l()
            );
          }),
          (s.fitExtent = function(t, n) {
            return Jp(s, t, n);
          }),
          (s.fitSize = function(t, n) {
            return tv(s, t, n);
          }),
          (s.fitWidth = function(t, n) {
            return nv(s, t, n);
          }),
          (s.fitHeight = function(t, n) {
            return ev(s, t, n);
          }),
          s.scale(1070)
        );
      };
      function wv(t) {
        return function(n, e) {
          var r = ol(n),
            i = ol(e),
            o = t(r * i);
          return [o * i * sl(n), o * sl(e)];
        };
      }
      function xv(t) {
        return function(n, e) {
          var r = hl(n * n + e * e),
            i = t(r),
            o = sl(i),
            a = ol(i);
          return [il(n * o, r * a), vl(r && (e * o) / r)];
        };
      }
      var Mv = wv(function(t) {
        return hl(2 / (1 + t));
      });
      Mv.invert = xv(function(t) {
        return 2 * vl(t / 2);
      });
      var Sv = function() {
          return hv(Mv)
            .scale(124.75)
            .clipAngle(179.999);
        },
        Av = wv(function(t) {
          return (t = pl(t)) && t / sl(t);
        });
      Av.invert = xv(function(t) {
        return t;
      });
      var Ev = function() {
        return hv(Av)
          .scale(79.4188)
          .clipAngle(179.999);
      };
      function kv(t, n) {
        return [t, cl(dl((Qs + n) / 2))];
      }
      kv.invert = function(t, n) {
        return [t, 2 * rl(ul(n)) - Qs];
      };
      var Cv = function() {
        return Tv(kv).scale(961 / Js);
      };
      function Tv(t) {
        var n,
          e,
          r,
          i = hv(t),
          o = i.center,
          a = i.scale,
          u = i.translate,
          c = i.clipExtent,
          f = null;
        function s() {
          var o = Ks * a(),
            u = i(Wh(i.rotate()).invert([0, 0]));
          return c(
            null == f
              ? [[u[0] - o, u[1] - o], [u[0] + o, u[1] + o]]
              : t === kv
                ? [[Math.max(u[0] - o, f), n], [Math.min(u[0] + o, e), r]]
                : [[f, Math.max(u[1] - o, n)], [e, Math.min(u[1] + o, r)]]
          );
        }
        return (
          (i.scale = function(t) {
            return arguments.length ? (a(t), s()) : a();
          }),
          (i.translate = function(t) {
            return arguments.length ? (u(t), s()) : u();
          }),
          (i.center = function(t) {
            return arguments.length ? (o(t), s()) : o();
          }),
          (i.clipExtent = function(t) {
            return arguments.length
              ? (null == t ? (f = n = e = r = null) : ((f = +t[0][0]), (n = +t[0][1]), (e = +t[1][0]), (r = +t[1][1])),
                s())
              : null == f
                ? null
                : [[f, n], [e, r]];
          }),
          s()
        );
      }
      function Ov(t) {
        return dl((Qs + t) / 2);
      }
      function Nv(t, n) {
        var e = ol(t),
          r = t === n ? sl(t) : cl(e / ol(n)) / cl(Ov(n) / Ov(t)),
          i = (e * fl(Ov(t), r)) / r;
        if (!r) return kv;
        function o(t, n) {
          i > 0 ? n < -Qs + Ws && (n = -Qs + Ws) : n > Qs - Ws && (n = Qs - Ws);
          var e = i / fl(Ov(n), r);
          return [e * sl(r * t), i - e * ol(r * t)];
        }
        return (
          (o.invert = function(t, n) {
            var e = i - n,
              o = ll(r) * hl(t * t + e * e);
            return [(il(t, el(e)) / r) * ll(e), 2 * rl(fl(i / o, 1 / r)) - Qs];
          }),
          o
        );
      }
      var Pv = function() {
        return pv(Nv)
          .scale(109.5)
          .parallels([30, 30]);
      };
      function Rv(t, n) {
        return [t, n];
      }
      Rv.invert = Rv;
      var jv = function() {
        return hv(Rv).scale(152.63);
      };
      function Lv(t, n) {
        var e = ol(t),
          r = t === n ? sl(t) : (e - ol(n)) / (n - t),
          i = e / r + t;
        if (el(r) < Ws) return Rv;
        function o(t, n) {
          var e = i - n,
            o = r * t;
          return [e * sl(o), i - e * ol(o)];
        }
        return (
          (o.invert = function(t, n) {
            var e = i - n;
            return [(il(t, el(e)) / r) * ll(e), i - ll(r) * hl(t * t + e * e)];
          }),
          o
        );
      }
      var Iv = function() {
          return pv(Lv)
            .scale(131.154)
            .center([0, 13.9389]);
        },
        $v = 1.340264,
        Fv = -0.081106,
        Dv = 893e-6,
        zv = 0.003796,
        Uv = hl(3) / 2,
        Bv = 12;
      function qv(t, n) {
        var e = vl(Uv * sl(n)),
          r = e * e,
          i = r * r * r;
        return [
          (t * ol(e)) / (Uv * ($v + 3 * Fv * r + i * (7 * Dv + 9 * zv * r))),
          e * ($v + Fv * r + i * (Dv + zv * r)),
        ];
      }
      qv.invert = function(t, n) {
        for (var e, r, i, o = n, a = o * o, u = a * a * a, c = 0; c < Bv; ++c)
          if (
            ((r = o * ($v + Fv * a + u * (Dv + zv * a)) - n),
            (i = $v + 3 * Fv * a + u * (7 * Dv + 9 * zv * a)),
            (o -= e = r / i),
            (a = o * o),
            (u = a * a * a),
            el(e) < Xs)
          )
            break;
        return [(Uv * t * ($v + 3 * Fv * a + u * (7 * Dv + 9 * zv * a))) / ol(o), vl(sl(o) / Uv)];
      };
      var Vv = function() {
        return hv(qv).scale(177.158);
      };
      function Hv(t, n) {
        var e = ol(n),
          r = ol(t) * e;
        return [(e * sl(t)) / r, sl(n) / r];
      }
      Hv.invert = xv(rl);
      var Yv = function() {
        return hv(Hv)
          .scale(144.049)
          .clipAngle(60);
      };
      function Gv(t, n, e, r) {
        return 1 === t && 1 === n && 0 === e && 0 === r
          ? Xd
          : Kp({
              point: function(i, o) {
                this.stream.point(i * t + e, o * n + r);
              },
            });
      }
      var Wv = function() {
        var t,
          n,
          e,
          r,
          i,
          o,
          a = 1,
          u = 0,
          c = 0,
          f = 1,
          s = 1,
          l = Xd,
          h = null,
          d = Xd;
        function p() {
          return (r = i = null), o;
        }
        return (o = {
          stream: function(t) {
            return r && i === t ? r : (r = l(d((i = t))));
          },
          postclip: function(r) {
            return arguments.length ? ((d = r), (h = t = n = e = null), p()) : d;
          },
          clipExtent: function(r) {
            return arguments.length
              ? ((d =
                  null == r
                    ? ((h = t = n = e = null), Xd)
                    : yd((h = +r[0][0]), (t = +r[0][1]), (n = +r[1][0]), (e = +r[1][1]))),
                p())
              : null == h
                ? null
                : [[h, t], [n, e]];
          },
          scale: function(t) {
            return arguments.length ? ((l = Gv((a = +t) * f, a * s, u, c)), p()) : a;
          },
          translate: function(t) {
            return arguments.length ? ((l = Gv(a * f, a * s, (u = +t[0]), (c = +t[1]))), p()) : [u, c];
          },
          reflectX: function(t) {
            return arguments.length ? ((l = Gv(a * (f = t ? -1 : 1), a * s, u, c)), p()) : f < 0;
          },
          reflectY: function(t) {
            return arguments.length ? ((l = Gv(a * f, a * (s = t ? -1 : 1), u, c)), p()) : s < 0;
          },
          fitExtent: function(t, n) {
            return Jp(o, t, n);
          },
          fitSize: function(t, n) {
            return tv(o, t, n);
          },
          fitWidth: function(t, n) {
            return nv(o, t, n);
          },
          fitHeight: function(t, n) {
            return ev(o, t, n);
          },
        });
      };
      function Xv(t, n) {
        var e = n * n,
          r = e * e;
        return [
          t * (0.8707 - 0.131979 * e + r * (r * (0.003971 * e - 0.001529 * r) - 0.013791)),
          n * (1.007226 + e * (0.015085 + r * (0.028874 * e - 0.044475 - 0.005916 * r))),
        ];
      }
      Xv.invert = function(t, n) {
        var e,
          r = n,
          i = 25;
        do {
          var o = r * r,
            a = o * o;
          r -= e =
            (r * (1.007226 + o * (0.015085 + a * (0.028874 * o - 0.044475 - 0.005916 * a))) - n) /
            (1.007226 + o * (0.045255 + a * (0.259866 * o - 0.311325 - 0.005916 * 11 * a)));
        } while (el(e) > Ws && --i > 0);
        return [t / (0.8707 + (o = r * r) * (o * (o * o * o * (0.003971 - 0.001529 * o) - 0.013791) - 0.131979)), r];
      };
      var Kv = function() {
        return hv(Xv).scale(175.295);
      };
      function Qv(t, n) {
        return [ol(n) * sl(t), sl(n)];
      }
      Qv.invert = xv(vl);
      var Zv = function() {
        return hv(Qv)
          .scale(249.5)
          .clipAngle(90 + Ws);
      };
      function Jv(t, n) {
        var e = ol(n),
          r = 1 + ol(t) * e;
        return [(e * sl(t)) / r, sl(n) / r];
      }
      Jv.invert = xv(function(t) {
        return 2 * rl(t);
      });
      var ty = function() {
        return hv(Jv)
          .scale(250)
          .clipAngle(142);
      };
      function ny(t, n) {
        return [cl(dl((Qs + n) / 2)), -t];
      }
      ny.invert = function(t, n) {
        return [-n, 2 * rl(ul(t)) - Qs];
      };
      var ey = function() {
        var t = Tv(ny),
          n = t.center,
          e = t.rotate;
        return (
          (t.center = function(t) {
            return arguments.length ? n([-t[1], t[0]]) : ((t = n()), [t[1], -t[0]]);
          }),
          (t.rotate = function(t) {
            return arguments.length
              ? e([t[0], t[1], t.length > 2 ? t[2] + 90 : 90])
              : ((t = e()), [t[0], t[1], t[2] - 90]);
          }),
          e([0, 0, 90]).scale(159.155)
        );
      };
      function ry(t, n) {
        return t.parent === n.parent ? 1 : 2;
      }
      function iy(t) {
        return t.reduce(oy, 0) / t.length;
      }
      function oy(t, n) {
        return t + n.x;
      }
      function ay(t) {
        return 1 + t.reduce(uy, 0);
      }
      function uy(t, n) {
        return Math.max(t, n.y);
      }
      function cy(t) {
        var n;
        while ((n = t.children)) t = n[0];
        return t;
      }
      function fy(t) {
        var n;
        while ((n = t.children)) t = n[n.length - 1];
        return t;
      }
      var sy = function() {
        var t = ry,
          n = 1,
          e = 1,
          r = !1;
        function i(i) {
          var o,
            a = 0;
          i.eachAfter(function(n) {
            var e = n.children;
            e ? ((n.x = iy(e)), (n.y = ay(e))) : ((n.x = o ? (a += t(n, o)) : 0), (n.y = 0), (o = n));
          });
          var u = cy(i),
            c = fy(i),
            f = u.x - t(u, c) / 2,
            s = c.x + t(c, u) / 2;
          return i.eachAfter(
            r
              ? function(t) {
                  (t.x = (t.x - i.x) * n), (t.y = (i.y - t.y) * e);
                }
              : function(t) {
                  (t.x = ((t.x - f) / (s - f)) * n), (t.y = (1 - (i.y ? t.y / i.y : 1)) * e);
                }
          );
        }
        return (
          (i.separation = function(n) {
            return arguments.length ? ((t = n), i) : t;
          }),
          (i.size = function(t) {
            return arguments.length ? ((r = !1), (n = +t[0]), (e = +t[1]), i) : r ? null : [n, e];
          }),
          (i.nodeSize = function(t) {
            return arguments.length ? ((r = !0), (n = +t[0]), (e = +t[1]), i) : r ? [n, e] : null;
          }),
          i
        );
      };
      function ly(t) {
        var n = 0,
          e = t.children,
          r = e && e.length;
        if (r) while (--r >= 0) n += e[r].value;
        else n = 1;
        t.value = n;
      }
      var hy = function() {
          return this.eachAfter(ly);
        },
        dy = function(t) {
          var n,
            e,
            r,
            i,
            o = this,
            a = [o];
          do {
            (n = a.reverse()), (a = []);
            while ((o = n.pop())) if ((t(o), (e = o.children), e)) for (r = 0, i = e.length; r < i; ++r) a.push(e[r]);
          } while (a.length);
          return this;
        },
        py = function(t) {
          var n,
            e,
            r = this,
            i = [r];
          while ((r = i.pop())) if ((t(r), (n = r.children), n)) for (e = n.length - 1; e >= 0; --e) i.push(n[e]);
          return this;
        },
        vy = function(t) {
          var n,
            e,
            r,
            i = this,
            o = [i],
            a = [];
          while ((i = o.pop()))
            if ((a.push(i), (n = i.children), n)) for (e = 0, r = n.length; e < r; ++e) o.push(n[e]);
          while ((i = a.pop())) t(i);
          return this;
        },
        yy = function(t) {
          return this.eachAfter(function(n) {
            var e = +t(n.data) || 0,
              r = n.children,
              i = r && r.length;
            while (--i >= 0) e += r[i].value;
            n.value = e;
          });
        },
        gy = function(t) {
          return this.eachBefore(function(n) {
            n.children && n.children.sort(t);
          });
        },
        by = function(t) {
          var n = this,
            e = my(n, t),
            r = [n];
          while (n !== e) (n = n.parent), r.push(n);
          var i = r.length;
          while (t !== e) r.splice(i, 0, t), (t = t.parent);
          return r;
        };
      function my(t, n) {
        if (t === n) return t;
        var e = t.ancestors(),
          r = n.ancestors(),
          i = null;
        (t = e.pop()), (n = r.pop());
        while (t === n) (i = t), (t = e.pop()), (n = r.pop());
        return i;
      }
      var _y = function() {
          var t = this,
            n = [t];
          while ((t = t.parent)) n.push(t);
          return n;
        },
        wy = function() {
          var t = [];
          return (
            this.each(function(n) {
              t.push(n);
            }),
            t
          );
        },
        xy = function() {
          var t = [];
          return (
            this.eachBefore(function(n) {
              n.children || t.push(n);
            }),
            t
          );
        },
        My = function() {
          var t = this,
            n = [];
          return (
            t.each(function(e) {
              e !== t && n.push({ source: e.parent, target: e });
            }),
            n
          );
        };
      function Sy(t, n) {
        var e,
          r,
          i,
          o,
          a,
          u = new Ty(t),
          c = +t.value && (u.value = t.value),
          f = [u];
        null == n && (n = Ey);
        while ((e = f.pop()))
          if ((c && (e.value = +e.data.value), (i = n(e.data)) && (a = i.length)))
            for (e.children = new Array(a), o = a - 1; o >= 0; --o)
              f.push((r = e.children[o] = new Ty(i[o]))), (r.parent = e), (r.depth = e.depth + 1);
        return u.eachBefore(Cy);
      }
      function Ay() {
        return Sy(this).eachBefore(ky);
      }
      function Ey(t) {
        return t.children;
      }
      function ky(t) {
        t.data = t.data.data;
      }
      function Cy(t) {
        var n = 0;
        do {
          t.height = n;
        } while ((t = t.parent) && t.height < ++n);
      }
      function Ty(t) {
        (this.data = t), (this.depth = this.height = 0), (this.parent = null);
      }
      Ty.prototype = Sy.prototype = {
        constructor: Ty,
        count: hy,
        each: dy,
        eachAfter: vy,
        eachBefore: py,
        sum: yy,
        sort: gy,
        path: by,
        ancestors: _y,
        descendants: wy,
        leaves: xy,
        links: My,
        copy: Ay,
      };
      var Oy = Array.prototype.slice;
      function Ny(t) {
        var n,
          e,
          r = t.length;
        while (r) (e = (Math.random() * r--) | 0), (n = t[r]), (t[r] = t[e]), (t[e] = n);
        return t;
      }
      var Py = function(t) {
        var n,
          e,
          r = 0,
          i = (t = Ny(Oy.call(t))).length,
          o = [];
        while (r < i) (n = t[r]), e && Ly(e, n) ? ++r : ((e = $y((o = Ry(o, n)))), (r = 0));
        return e;
      };
      function Ry(t, n) {
        var e, r;
        if (Iy(n, t)) return [n];
        for (e = 0; e < t.length; ++e) if (jy(n, t[e]) && Iy(Dy(t[e], n), t)) return [t[e], n];
        for (e = 0; e < t.length - 1; ++e)
          for (r = e + 1; r < t.length; ++r)
            if (jy(Dy(t[e], t[r]), n) && jy(Dy(t[e], n), t[r]) && jy(Dy(t[r], n), t[e]) && Iy(zy(t[e], t[r], n), t))
              return [t[e], t[r], n];
        throw new Error();
      }
      function jy(t, n) {
        var e = t.r - n.r,
          r = n.x - t.x,
          i = n.y - t.y;
        return e < 0 || e * e < r * r + i * i;
      }
      function Ly(t, n) {
        var e = t.r - n.r + 1e-6,
          r = n.x - t.x,
          i = n.y - t.y;
        return e > 0 && e * e > r * r + i * i;
      }
      function Iy(t, n) {
        for (var e = 0; e < n.length; ++e) if (!Ly(t, n[e])) return !1;
        return !0;
      }
      function $y(t) {
        switch (t.length) {
          case 1:
            return Fy(t[0]);
          case 2:
            return Dy(t[0], t[1]);
          case 3:
            return zy(t[0], t[1], t[2]);
        }
      }
      function Fy(t) {
        return { x: t.x, y: t.y, r: t.r };
      }
      function Dy(t, n) {
        var e = t.x,
          r = t.y,
          i = t.r,
          o = n.x,
          a = n.y,
          u = n.r,
          c = o - e,
          f = a - r,
          s = u - i,
          l = Math.sqrt(c * c + f * f);
        return { x: (e + o + (c / l) * s) / 2, y: (r + a + (f / l) * s) / 2, r: (l + i + u) / 2 };
      }
      function zy(t, n, e) {
        var r = t.x,
          i = t.y,
          o = t.r,
          a = n.x,
          u = n.y,
          c = n.r,
          f = e.x,
          s = e.y,
          l = e.r,
          h = r - a,
          d = r - f,
          p = i - u,
          v = i - s,
          y = c - o,
          g = l - o,
          b = r * r + i * i - o * o,
          m = b - a * a - u * u + c * c,
          _ = b - f * f - s * s + l * l,
          w = d * p - h * v,
          x = (p * _ - v * m) / (2 * w) - r,
          M = (v * y - p * g) / w,
          S = (d * m - h * _) / (2 * w) - i,
          A = (h * g - d * y) / w,
          E = M * M + A * A - 1,
          k = 2 * (o + x * M + S * A),
          C = x * x + S * S - o * o,
          T = -(E ? (k + Math.sqrt(k * k - 4 * E * C)) / (2 * E) : C / k);
        return { x: r + x + M * T, y: i + S + A * T, r: T };
      }
      function Uy(t, n, e) {
        var r,
          i,
          o,
          a,
          u = t.x - n.x,
          c = t.y - n.y,
          f = u * u + c * c;
        f
          ? ((i = n.r + e.r),
            (i *= i),
            (a = t.r + e.r),
            (a *= a),
            i > a
              ? ((r = (f + a - i) / (2 * f)),
                (o = Math.sqrt(Math.max(0, a / f - r * r))),
                (e.x = t.x - r * u - o * c),
                (e.y = t.y - r * c + o * u))
              : ((r = (f + i - a) / (2 * f)),
                (o = Math.sqrt(Math.max(0, i / f - r * r))),
                (e.x = n.x + r * u - o * c),
                (e.y = n.y + r * c + o * u)))
          : ((e.x = n.x + e.r), (e.y = n.y));
      }
      function By(t, n) {
        var e = t.r + n.r - 1e-6,
          r = n.x - t.x,
          i = n.y - t.y;
        return e > 0 && e * e > r * r + i * i;
      }
      function qy(t) {
        var n = t._,
          e = t.next._,
          r = n.r + e.r,
          i = (n.x * e.r + e.x * n.r) / r,
          o = (n.y * e.r + e.y * n.r) / r;
        return i * i + o * o;
      }
      function Vy(t) {
        (this._ = t), (this.next = null), (this.previous = null);
      }
      function Hy(t) {
        if (!(i = t.length)) return 0;
        var n, e, r, i, o, a, u, c, f, s, l;
        if (((n = t[0]), (n.x = 0), (n.y = 0), !(i > 1))) return n.r;
        if (((e = t[1]), (n.x = -e.r), (e.x = n.r), (e.y = 0), !(i > 2))) return n.r + e.r;
        Uy(e, n, (r = t[2])),
          (n = new Vy(n)),
          (e = new Vy(e)),
          (r = new Vy(r)),
          (n.next = r.previous = e),
          (e.next = n.previous = r),
          (r.next = e.previous = n);
        t: for (u = 3; u < i; ++u) {
          Uy(n._, e._, (r = t[u])), (r = new Vy(r)), (c = e.next), (f = n.previous), (s = e._.r), (l = n._.r);
          do {
            if (s <= l) {
              if (By(c._, r._)) {
                (e = c), (n.next = e), (e.previous = n), --u;
                continue t;
              }
              (s += c._.r), (c = c.next);
            } else {
              if (By(f._, r._)) {
                (n = f), (n.next = e), (e.previous = n), --u;
                continue t;
              }
              (l += f._.r), (f = f.previous);
            }
          } while (c !== f.next);
          (r.previous = n), (r.next = e), (n.next = e.previous = e = r), (o = qy(n));
          while ((r = r.next) !== e) (a = qy(r)) < o && ((n = r), (o = a));
          e = n.next;
        }
        (n = [e._]), (r = e);
        while ((r = r.next) !== e) n.push(r._);
        for (r = Py(n), u = 0; u < i; ++u) (n = t[u]), (n.x -= r.x), (n.y -= r.y);
        return r.r;
      }
      var Yy = function(t) {
        return Hy(t), t;
      };
      function Gy(t) {
        return null == t ? null : Wy(t);
      }
      function Wy(t) {
        if ('function' !== typeof t) throw new Error();
        return t;
      }
      function Xy() {
        return 0;
      }
      var Ky = function(t) {
        return function() {
          return t;
        };
      };
      function Qy(t) {
        return Math.sqrt(t.value);
      }
      var Zy = function() {
        var t = null,
          n = 1,
          e = 1,
          r = Xy;
        function i(i) {
          return (
            (i.x = n / 2),
            (i.y = e / 2),
            t
              ? i
                  .eachBefore(Jy(t))
                  .eachAfter(tg(r, 0.5))
                  .eachBefore(ng(1))
              : i
                  .eachBefore(Jy(Qy))
                  .eachAfter(tg(Xy, 1))
                  .eachAfter(tg(r, i.r / Math.min(n, e)))
                  .eachBefore(ng(Math.min(n, e) / (2 * i.r))),
            i
          );
        }
        return (
          (i.radius = function(n) {
            return arguments.length ? ((t = Gy(n)), i) : t;
          }),
          (i.size = function(t) {
            return arguments.length ? ((n = +t[0]), (e = +t[1]), i) : [n, e];
          }),
          (i.padding = function(t) {
            return arguments.length ? ((r = 'function' === typeof t ? t : Ky(+t)), i) : r;
          }),
          i
        );
      };
      function Jy(t) {
        return function(n) {
          n.children || (n.r = Math.max(0, +t(n) || 0));
        };
      }
      function tg(t, n) {
        return function(e) {
          if ((r = e.children)) {
            var r,
              i,
              o,
              a = r.length,
              u = t(e) * n || 0;
            if (u) for (i = 0; i < a; ++i) r[i].r += u;
            if (((o = Hy(r)), u)) for (i = 0; i < a; ++i) r[i].r -= u;
            e.r = o + u;
          }
        };
      }
      function ng(t) {
        return function(n) {
          var e = n.parent;
          (n.r *= t), e && ((n.x = e.x + t * n.x), (n.y = e.y + t * n.y));
        };
      }
      var eg = function(t) {
          (t.x0 = Math.round(t.x0)), (t.y0 = Math.round(t.y0)), (t.x1 = Math.round(t.x1)), (t.y1 = Math.round(t.y1));
        },
        rg = function(t, n, e, r, i) {
          var o,
            a = t.children,
            u = -1,
            c = a.length,
            f = t.value && (r - n) / t.value;
          while (++u < c) (o = a[u]), (o.y0 = e), (o.y1 = i), (o.x0 = n), (o.x1 = n += o.value * f);
        },
        ig = function() {
          var t = 1,
            n = 1,
            e = 0,
            r = !1;
          function i(i) {
            var a = i.height + 1;
            return (i.x0 = i.y0 = e), (i.x1 = t), (i.y1 = n / a), i.eachBefore(o(n, a)), r && i.eachBefore(eg), i;
          }
          function o(t, n) {
            return function(r) {
              r.children && rg(r, r.x0, (t * (r.depth + 1)) / n, r.x1, (t * (r.depth + 2)) / n);
              var i = r.x0,
                o = r.y0,
                a = r.x1 - e,
                u = r.y1 - e;
              a < i && (i = a = (i + a) / 2),
                u < o && (o = u = (o + u) / 2),
                (r.x0 = i),
                (r.y0 = o),
                (r.x1 = a),
                (r.y1 = u);
            };
          }
          return (
            (i.round = function(t) {
              return arguments.length ? ((r = !!t), i) : r;
            }),
            (i.size = function(e) {
              return arguments.length ? ((t = +e[0]), (n = +e[1]), i) : [t, n];
            }),
            (i.padding = function(t) {
              return arguments.length ? ((e = +t), i) : e;
            }),
            i
          );
        },
        og = '$',
        ag = { depth: -1 },
        ug = {};
      function cg(t) {
        return t.id;
      }
      function fg(t) {
        return t.parentId;
      }
      var sg = function() {
        var t = cg,
          n = fg;
        function e(e) {
          var r,
            i,
            o,
            a,
            u,
            c,
            f,
            s = e.length,
            l = new Array(s),
            h = {};
          for (i = 0; i < s; ++i)
            (r = e[i]),
              (u = l[i] = new Ty(r)),
              null != (c = t(r, i, e)) && (c += '') && ((f = og + (u.id = c)), (h[f] = f in h ? ug : u));
          for (i = 0; i < s; ++i)
            if (((u = l[i]), (c = n(e[i], i, e)), null != c && (c += ''))) {
              if (((a = h[og + c]), !a)) throw new Error('missing: ' + c);
              if (a === ug) throw new Error('ambiguous: ' + c);
              a.children ? a.children.push(u) : (a.children = [u]), (u.parent = a);
            } else {
              if (o) throw new Error('multiple roots');
              o = u;
            }
          if (!o) throw new Error('no root');
          if (
            ((o.parent = ag),
            o
              .eachBefore(function(t) {
                (t.depth = t.parent.depth + 1), --s;
              })
              .eachBefore(Cy),
            (o.parent = null),
            s > 0)
          )
            throw new Error('cycle');
          return o;
        }
        return (
          (e.id = function(n) {
            return arguments.length ? ((t = Wy(n)), e) : t;
          }),
          (e.parentId = function(t) {
            return arguments.length ? ((n = Wy(t)), e) : n;
          }),
          e
        );
      };
      function lg(t, n) {
        return t.parent === n.parent ? 1 : 2;
      }
      function hg(t) {
        var n = t.children;
        return n ? n[0] : t.t;
      }
      function dg(t) {
        var n = t.children;
        return n ? n[n.length - 1] : t.t;
      }
      function pg(t, n, e) {
        var r = e / (n.i - t.i);
        (n.c -= r), (n.s += e), (t.c += r), (n.z += e), (n.m += e);
      }
      function vg(t) {
        var n,
          e = 0,
          r = 0,
          i = t.children,
          o = i.length;
        while (--o >= 0) (n = i[o]), (n.z += e), (n.m += e), (e += n.s + (r += n.c));
      }
      function yg(t, n, e) {
        return t.a.parent === n.parent ? t.a : e;
      }
      function gg(t, n) {
        (this._ = t),
          (this.parent = null),
          (this.children = null),
          (this.A = null),
          (this.a = this),
          (this.z = 0),
          (this.m = 0),
          (this.c = 0),
          (this.s = 0),
          (this.t = null),
          (this.i = n);
      }
      function bg(t) {
        var n,
          e,
          r,
          i,
          o,
          a = new gg(t, 0),
          u = [a];
        while ((n = u.pop()))
          if ((r = n._.children))
            for (n.children = new Array((o = r.length)), i = o - 1; i >= 0; --i)
              u.push((e = n.children[i] = new gg(r[i], i))), (e.parent = n);
        return ((a.parent = new gg(null, 0)).children = [a]), a;
      }
      gg.prototype = Object.create(Ty.prototype);
      var mg = function() {
          var t = lg,
            n = 1,
            e = 1,
            r = null;
          function i(i) {
            var u = bg(i);
            if ((u.eachAfter(o), (u.parent.m = -u.z), u.eachBefore(a), r)) i.eachBefore(c);
            else {
              var f = i,
                s = i,
                l = i;
              i.eachBefore(function(t) {
                t.x < f.x && (f = t), t.x > s.x && (s = t), t.depth > l.depth && (l = t);
              });
              var h = f === s ? 1 : t(f, s) / 2,
                d = h - f.x,
                p = n / (s.x + h + d),
                v = e / (l.depth || 1);
              i.eachBefore(function(t) {
                (t.x = (t.x + d) * p), (t.y = t.depth * v);
              });
            }
            return i;
          }
          function o(n) {
            var e = n.children,
              r = n.parent.children,
              i = n.i ? r[n.i - 1] : null;
            if (e) {
              vg(n);
              var o = (e[0].z + e[e.length - 1].z) / 2;
              i ? ((n.z = i.z + t(n._, i._)), (n.m = n.z - o)) : (n.z = o);
            } else i && (n.z = i.z + t(n._, i._));
            n.parent.A = u(n, i, n.parent.A || r[0]);
          }
          function a(t) {
            (t._.x = t.z + t.parent.m), (t.m += t.parent.m);
          }
          function u(n, e, r) {
            if (e) {
              var i,
                o = n,
                a = n,
                u = e,
                c = o.parent.children[0],
                f = o.m,
                s = a.m,
                l = u.m,
                h = c.m;
              while (((u = dg(u)), (o = hg(o)), u && o))
                (c = hg(c)),
                  (a = dg(a)),
                  (a.a = n),
                  (i = u.z + l - o.z - f + t(u._, o._)),
                  i > 0 && (pg(yg(u, n, r), n, i), (f += i), (s += i)),
                  (l += u.m),
                  (f += o.m),
                  (h += c.m),
                  (s += a.m);
              u && !dg(a) && ((a.t = u), (a.m += l - s)), o && !hg(c) && ((c.t = o), (c.m += f - h), (r = n));
            }
            return r;
          }
          function c(t) {
            (t.x *= n), (t.y = t.depth * e);
          }
          return (
            (i.separation = function(n) {
              return arguments.length ? ((t = n), i) : t;
            }),
            (i.size = function(t) {
              return arguments.length ? ((r = !1), (n = +t[0]), (e = +t[1]), i) : r ? null : [n, e];
            }),
            (i.nodeSize = function(t) {
              return arguments.length ? ((r = !0), (n = +t[0]), (e = +t[1]), i) : r ? [n, e] : null;
            }),
            i
          );
        },
        _g = function(t, n, e, r, i) {
          var o,
            a = t.children,
            u = -1,
            c = a.length,
            f = t.value && (i - e) / t.value;
          while (++u < c) (o = a[u]), (o.x0 = n), (o.x1 = r), (o.y0 = e), (o.y1 = e += o.value * f);
        },
        wg = (1 + Math.sqrt(5)) / 2;
      function xg(t, n, e, r, i, o) {
        var a,
          u,
          c,
          f,
          s,
          l,
          h,
          d,
          p,
          v,
          y,
          g = [],
          b = n.children,
          m = 0,
          _ = 0,
          w = b.length,
          x = n.value;
        while (m < w) {
          (c = i - e), (f = o - r);
          do {
            s = b[_++].value;
          } while (!s && _ < w);
          for (l = h = s, v = Math.max(f / c, c / f) / (x * t), y = s * s * v, p = Math.max(h / y, y / l); _ < w; ++_) {
            if (
              ((s += u = b[_].value),
              u < l && (l = u),
              u > h && (h = u),
              (y = s * s * v),
              (d = Math.max(h / y, y / l)),
              d > p)
            ) {
              s -= u;
              break;
            }
            p = d;
          }
          g.push((a = { value: s, dice: c < f, children: b.slice(m, _) })),
            a.dice ? rg(a, e, r, i, x ? (r += (f * s) / x) : o) : _g(a, e, r, x ? (e += (c * s) / x) : i, o),
            (x -= s),
            (m = _);
        }
        return g;
      }
      var Mg = (function t(n) {
          function e(t, e, r, i, o) {
            xg(n, t, e, r, i, o);
          }
          return (
            (e.ratio = function(n) {
              return t((n = +n) > 1 ? n : 1);
            }),
            e
          );
        })(wg),
        Sg = function() {
          var t = Mg,
            n = !1,
            e = 1,
            r = 1,
            i = [0],
            o = Xy,
            a = Xy,
            u = Xy,
            c = Xy,
            f = Xy;
          function s(t) {
            return (t.x0 = t.y0 = 0), (t.x1 = e), (t.y1 = r), t.eachBefore(l), (i = [0]), n && t.eachBefore(eg), t;
          }
          function l(n) {
            var e = i[n.depth],
              r = n.x0 + e,
              s = n.y0 + e,
              l = n.x1 - e,
              h = n.y1 - e;
            l < r && (r = l = (r + l) / 2),
              h < s && (s = h = (s + h) / 2),
              (n.x0 = r),
              (n.y0 = s),
              (n.x1 = l),
              (n.y1 = h),
              n.children &&
                ((e = i[n.depth + 1] = o(n) / 2),
                (r += f(n) - e),
                (s += a(n) - e),
                (l -= u(n) - e),
                (h -= c(n) - e),
                l < r && (r = l = (r + l) / 2),
                h < s && (s = h = (s + h) / 2),
                t(n, r, s, l, h));
          }
          return (
            (s.round = function(t) {
              return arguments.length ? ((n = !!t), s) : n;
            }),
            (s.size = function(t) {
              return arguments.length ? ((e = +t[0]), (r = +t[1]), s) : [e, r];
            }),
            (s.tile = function(n) {
              return arguments.length ? ((t = Wy(n)), s) : t;
            }),
            (s.padding = function(t) {
              return arguments.length ? s.paddingInner(t).paddingOuter(t) : s.paddingInner();
            }),
            (s.paddingInner = function(t) {
              return arguments.length ? ((o = 'function' === typeof t ? t : Ky(+t)), s) : o;
            }),
            (s.paddingOuter = function(t) {
              return arguments.length
                ? s
                    .paddingTop(t)
                    .paddingRight(t)
                    .paddingBottom(t)
                    .paddingLeft(t)
                : s.paddingTop();
            }),
            (s.paddingTop = function(t) {
              return arguments.length ? ((a = 'function' === typeof t ? t : Ky(+t)), s) : a;
            }),
            (s.paddingRight = function(t) {
              return arguments.length ? ((u = 'function' === typeof t ? t : Ky(+t)), s) : u;
            }),
            (s.paddingBottom = function(t) {
              return arguments.length ? ((c = 'function' === typeof t ? t : Ky(+t)), s) : c;
            }),
            (s.paddingLeft = function(t) {
              return arguments.length ? ((f = 'function' === typeof t ? t : Ky(+t)), s) : f;
            }),
            s
          );
        },
        Ag = function(t, n, e, r, i) {
          var o,
            a,
            u = t.children,
            c = u.length,
            f = new Array(c + 1);
          for (f[0] = a = o = 0; o < c; ++o) f[o + 1] = a += u[o].value;
          function s(t, n, e, r, i, o, a) {
            if (t >= n - 1) {
              var c = u[t];
              return (c.x0 = r), (c.y0 = i), (c.x1 = o), void (c.y1 = a);
            }
            var l = f[t],
              h = e / 2 + l,
              d = t + 1,
              p = n - 1;
            while (d < p) {
              var v = (d + p) >>> 1;
              f[v] < h ? (d = v + 1) : (p = v);
            }
            h - f[d - 1] < f[d] - h && t + 1 < d && --d;
            var y = f[d] - l,
              g = e - y;
            if (o - r > a - i) {
              var b = (r * g + o * y) / e;
              s(t, d, y, r, i, b, a), s(d, n, g, b, i, o, a);
            } else {
              var m = (i * g + a * y) / e;
              s(t, d, y, r, i, o, m), s(d, n, g, r, m, o, a);
            }
          }
          s(0, c, t.value, n, e, r, i);
        },
        Eg = function(t, n, e, r, i) {
          (1 & t.depth ? _g : rg)(t, n, e, r, i);
        },
        kg = (function t(n) {
          function e(t, e, r, i, o) {
            if ((a = t._squarify) && a.ratio === n) {
              var a,
                u,
                c,
                f,
                s,
                l = -1,
                h = a.length,
                d = t.value;
              while (++l < h) {
                for (u = a[l], c = u.children, f = u.value = 0, s = c.length; f < s; ++f) u.value += c[f].value;
                u.dice
                  ? rg(u, e, r, i, (r += ((o - r) * u.value) / d))
                  : _g(u, e, r, (e += ((i - e) * u.value) / d), o),
                  (d -= u.value);
              }
            } else (t._squarify = a = xg(n, t, e, r, i, o)), (a.ratio = n);
          }
          return (
            (e.ratio = function(n) {
              return t((n = +n) > 1 ? n : 1);
            }),
            e
          );
        })(wg),
        Cg = function(t) {
          var n,
            e = -1,
            r = t.length,
            i = t[r - 1],
            o = 0;
          while (++e < r) (n = i), (i = t[e]), (o += n[1] * i[0] - n[0] * i[1]);
          return o / 2;
        },
        Tg = function(t) {
          var n,
            e,
            r = -1,
            i = t.length,
            o = 0,
            a = 0,
            u = t[i - 1],
            c = 0;
          while (++r < i)
            (n = u),
              (u = t[r]),
              (c += e = n[0] * u[1] - u[0] * n[1]),
              (o += (n[0] + u[0]) * e),
              (a += (n[1] + u[1]) * e);
          return (c *= 3), [o / c, a / c];
        },
        Og = function(t, n, e) {
          return (n[0] - t[0]) * (e[1] - t[1]) - (n[1] - t[1]) * (e[0] - t[0]);
        };
      function Ng(t, n) {
        return t[0] - n[0] || t[1] - n[1];
      }
      function Pg(t) {
        for (var n = t.length, e = [0, 1], r = 2, i = 2; i < n; ++i) {
          while (r > 1 && Og(t[e[r - 2]], t[e[r - 1]], t[i]) <= 0) --r;
          e[r++] = i;
        }
        return e.slice(0, r);
      }
      var Rg = function(t) {
          if ((e = t.length) < 3) return null;
          var n,
            e,
            r = new Array(e),
            i = new Array(e);
          for (n = 0; n < e; ++n) r[n] = [+t[n][0], +t[n][1], n];
          for (r.sort(Ng), n = 0; n < e; ++n) i[n] = [r[n][0], -r[n][1]];
          var o = Pg(r),
            a = Pg(i),
            u = a[0] === o[0],
            c = a[a.length - 1] === o[o.length - 1],
            f = [];
          for (n = o.length - 1; n >= 0; --n) f.push(t[r[o[n]][2]]);
          for (n = +u; n < a.length - c; ++n) f.push(t[r[a[n]][2]]);
          return f;
        },
        jg = function(t, n) {
          for (var e, r, i = t.length, o = t[i - 1], a = n[0], u = n[1], c = o[0], f = o[1], s = !1, l = 0; l < i; ++l)
            (o = t[l]),
              (e = o[0]),
              (r = o[1]),
              r > u !== f > u && a < ((c - e) * (u - r)) / (f - r) + e && (s = !s),
              (c = e),
              (f = r);
          return s;
        },
        Lg = function(t) {
          var n,
            e,
            r = -1,
            i = t.length,
            o = t[i - 1],
            a = o[0],
            u = o[1],
            c = 0;
          while (++r < i)
            (n = a), (e = u), (o = t[r]), (a = o[0]), (u = o[1]), (n -= a), (e -= u), (c += Math.sqrt(n * n + e * e));
          return c;
        },
        Ig = function() {
          return Math.random();
        },
        $g = (function t(n) {
          function e(t, e) {
            return (
              (t = null == t ? 0 : +t),
              (e = null == e ? 1 : +e),
              1 === arguments.length ? ((e = t), (t = 0)) : (e -= t),
              function() {
                return n() * e + t;
              }
            );
          }
          return (e.source = t), e;
        })(Ig),
        Fg = (function t(n) {
          function e(t, e) {
            var r, i;
            return (
              (t = null == t ? 0 : +t),
              (e = null == e ? 1 : +e),
              function() {
                var o;
                if (null != r) (o = r), (r = null);
                else
                  do {
                    (r = 2 * n() - 1), (o = 2 * n() - 1), (i = r * r + o * o);
                  } while (!i || i > 1);
                return t + e * o * Math.sqrt((-2 * Math.log(i)) / i);
              }
            );
          }
          return (e.source = t), e;
        })(Ig),
        Dg = (function t(n) {
          function e() {
            var t = Fg.source(n).apply(this, arguments);
            return function() {
              return Math.exp(t());
            };
          }
          return (e.source = t), e;
        })(Ig),
        zg = (function t(n) {
          function e(t) {
            return function() {
              for (var e = 0, r = 0; r < t; ++r) e += n();
              return e;
            };
          }
          return (e.source = t), e;
        })(Ig),
        Ug = (function t(n) {
          function e(t) {
            var e = zg.source(n)(t);
            return function() {
              return e() / t;
            };
          }
          return (e.source = t), e;
        })(Ig),
        Bg = (function t(n) {
          function e(t) {
            return function() {
              return -Math.log(1 - n()) / t;
            };
          }
          return (e.source = t), e;
        })(Ig),
        qg = Array.prototype,
        Vg = qg.map,
        Hg = qg.slice,
        Yg = { name: 'implicit' };
      function Gg(t) {
        var n = wc(),
          e = [],
          r = Yg;
        function i(i) {
          var o = i + '',
            a = n.get(o);
          if (!a) {
            if (r !== Yg) return r;
            n.set(o, (a = e.push(i)));
          }
          return t[(a - 1) % t.length];
        }
        return (
          (t = null == t ? [] : Hg.call(t)),
          (i.domain = function(t) {
            if (!arguments.length) return e.slice();
            (e = []), (n = wc());
            var r,
              o,
              a = -1,
              u = t.length;
            while (++a < u) n.has((o = (r = t[a]) + '')) || n.set(o, e.push(r));
            return i;
          }),
          (i.range = function(n) {
            return arguments.length ? ((t = Hg.call(n)), i) : t.slice();
          }),
          (i.unknown = function(t) {
            return arguments.length ? ((r = t), i) : r;
          }),
          (i.copy = function() {
            return Gg()
              .domain(e)
              .range(t)
              .unknown(r);
          }),
          i
        );
      }
      function Wg() {
        var t,
          n,
          e = Gg().unknown(void 0),
          r = e.domain,
          i = e.range,
          o = [0, 1],
          a = !1,
          u = 0,
          c = 0,
          f = 0.5;
        function s() {
          var e = r().length,
            s = o[1] < o[0],
            l = o[s - 0],
            h = o[1 - s];
          (t = (h - l) / Math.max(1, e - u + 2 * c)),
            a && (t = Math.floor(t)),
            (l += (h - l - t * (e - u)) * f),
            (n = t * (1 - u)),
            a && ((l = Math.round(l)), (n = Math.round(n)));
          var d = S(e).map(function(n) {
            return l + t * n;
          });
          return i(s ? d.reverse() : d);
        }
        return (
          delete e.unknown,
          (e.domain = function(t) {
            return arguments.length ? (r(t), s()) : r();
          }),
          (e.range = function(t) {
            return arguments.length ? ((o = [+t[0], +t[1]]), s()) : o.slice();
          }),
          (e.rangeRound = function(t) {
            return (o = [+t[0], +t[1]]), (a = !0), s();
          }),
          (e.bandwidth = function() {
            return n;
          }),
          (e.step = function() {
            return t;
          }),
          (e.round = function(t) {
            return arguments.length ? ((a = !!t), s()) : a;
          }),
          (e.padding = function(t) {
            return arguments.length ? ((u = c = Math.max(0, Math.min(1, t))), s()) : u;
          }),
          (e.paddingInner = function(t) {
            return arguments.length ? ((u = Math.max(0, Math.min(1, t))), s()) : u;
          }),
          (e.paddingOuter = function(t) {
            return arguments.length ? ((c = Math.max(0, Math.min(1, t))), s()) : c;
          }),
          (e.align = function(t) {
            return arguments.length ? ((f = Math.max(0, Math.min(1, t))), s()) : f;
          }),
          (e.copy = function() {
            return Wg()
              .domain(r())
              .range(o)
              .round(a)
              .paddingInner(u)
              .paddingOuter(c)
              .align(f);
          }),
          s()
        );
      }
      function Xg(t) {
        var n = t.copy;
        return (
          (t.padding = t.paddingOuter),
          delete t.paddingInner,
          delete t.paddingOuter,
          (t.copy = function() {
            return Xg(n());
          }),
          t
        );
      }
      function Kg() {
        return Xg(Wg().paddingInner(1));
      }
      var Qg = function(t) {
          return function() {
            return t;
          };
        },
        Zg = function(t) {
          return +t;
        },
        Jg = [0, 1];
      function tb(t, n) {
        return (n -= t = +t)
          ? function(e) {
              return (e - t) / n;
            }
          : Qg(n);
      }
      function nb(t) {
        return function(n, e) {
          var r = t((n = +n), (e = +e));
          return function(t) {
            return t <= n ? 0 : t >= e ? 1 : r(t);
          };
        };
      }
      function eb(t) {
        return function(n, e) {
          var r = t((n = +n), (e = +e));
          return function(t) {
            return t <= 0 ? n : t >= 1 ? e : r(t);
          };
        };
      }
      function rb(t, n, e, r) {
        var i = t[0],
          o = t[1],
          a = n[0],
          u = n[1];
        return (
          o < i ? ((i = e(o, i)), (a = r(u, a))) : ((i = e(i, o)), (a = r(a, u))),
          function(t) {
            return a(i(t));
          }
        );
      }
      function ib(t, n, e, r) {
        var i = Math.min(t.length, n.length) - 1,
          o = new Array(i),
          a = new Array(i),
          u = -1;
        t[i] < t[0] && ((t = t.slice().reverse()), (n = n.slice().reverse()));
        while (++u < i) (o[u] = e(t[u], t[u + 1])), (a[u] = r(n[u], n[u + 1]));
        return function(n) {
          var e = s(t, n, 1, i) - 1;
          return a[e](o[e](n));
        };
      }
      function ob(t, n) {
        return n
          .domain(t.domain())
          .range(t.range())
          .interpolate(t.interpolate())
          .clamp(t.clamp());
      }
      function ab(t, n) {
        var e,
          r,
          i,
          o = Jg,
          a = Jg,
          u = pi,
          c = !1;
        function f() {
          return (e = Math.min(o.length, a.length) > 2 ? ib : rb), (r = i = null), s;
        }
        function s(n) {
          return (r || (r = e(o, a, c ? nb(t) : t, u)))(+n);
        }
        return (
          (s.invert = function(t) {
            return (i || (i = e(a, o, tb, c ? eb(n) : n)))(+t);
          }),
          (s.domain = function(t) {
            return arguments.length ? ((o = Vg.call(t, Zg)), f()) : o.slice();
          }),
          (s.range = function(t) {
            return arguments.length ? ((a = Hg.call(t)), f()) : a.slice();
          }),
          (s.rangeRound = function(t) {
            return (a = Hg.call(t)), (u = gi), f();
          }),
          (s.clamp = function(t) {
            return arguments.length ? ((c = !!t), f()) : c;
          }),
          (s.interpolate = function(t) {
            return arguments.length ? ((u = t), f()) : u;
          }),
          f()
        );
      }
      var ub = function(t, n, e) {
        var r,
          i = t[0],
          o = t[t.length - 1],
          a = O(i, o, null == n ? 10 : n);
        switch (((e = ks(null == e ? ',f' : e)), e.type)) {
          case 's':
            var u = Math.max(Math.abs(i), Math.abs(o));
            return null != e.precision || isNaN((r = Bs(a, u))) || (e.precision = r), Ps(e, u);
          case '':
          case 'e':
          case 'g':
          case 'p':
          case 'r':
            null != e.precision ||
              isNaN((r = qs(a, Math.max(Math.abs(i), Math.abs(o))))) ||
              (e.precision = r - ('e' === e.type));
            break;
          case 'f':
          case '%':
            null != e.precision || isNaN((r = Us(a))) || (e.precision = r - 2 * ('%' === e.type));
            break;
        }
        return Ns(e);
      };
      function cb(t) {
        var n = t.domain;
        return (
          (t.ticks = function(t) {
            var e = n();
            return C(e[0], e[e.length - 1], null == t ? 10 : t);
          }),
          (t.tickFormat = function(t, e) {
            return ub(n(), t, e);
          }),
          (t.nice = function(e) {
            null == e && (e = 10);
            var r,
              i = n(),
              o = 0,
              a = i.length - 1,
              u = i[o],
              c = i[a];
            return (
              c < u && ((r = u), (u = c), (c = r), (r = o), (o = a), (a = r)),
              (r = T(u, c, e)),
              r > 0
                ? ((u = Math.floor(u / r) * r), (c = Math.ceil(c / r) * r), (r = T(u, c, e)))
                : r < 0 && ((u = Math.ceil(u * r) / r), (c = Math.floor(c * r) / r), (r = T(u, c, e))),
              r > 0
                ? ((i[o] = Math.floor(u / r) * r), (i[a] = Math.ceil(c / r) * r), n(i))
                : r < 0 && ((i[o] = Math.ceil(u * r) / r), (i[a] = Math.floor(c * r) / r), n(i)),
              t
            );
          }),
          t
        );
      }
      function fb() {
        var t = ab(tb, ri);
        return (
          (t.copy = function() {
            return ob(t, fb());
          }),
          cb(t)
        );
      }
      function sb() {
        var t = [0, 1];
        function n(t) {
          return +t;
        }
        return (
          (n.invert = n),
          (n.domain = n.range = function(e) {
            return arguments.length ? ((t = Vg.call(e, Zg)), n) : t.slice();
          }),
          (n.copy = function() {
            return sb().domain(t);
          }),
          cb(n)
        );
      }
      var lb = function(t, n) {
        t = t.slice();
        var e,
          r = 0,
          i = t.length - 1,
          o = t[r],
          a = t[i];
        return (
          a < o && ((e = r), (r = i), (i = e), (e = o), (o = a), (a = e)), (t[r] = n.floor(o)), (t[i] = n.ceil(a)), t
        );
      };
      function hb(t, n) {
        return (n = Math.log(n / t))
          ? function(e) {
              return Math.log(e / t) / n;
            }
          : Qg(n);
      }
      function db(t, n) {
        return t < 0
          ? function(e) {
              return -Math.pow(-n, e) * Math.pow(-t, 1 - e);
            }
          : function(e) {
              return Math.pow(n, e) * Math.pow(t, 1 - e);
            };
      }
      function pb(t) {
        return isFinite(t) ? +('1e' + t) : t < 0 ? 0 : t;
      }
      function vb(t) {
        return 10 === t
          ? pb
          : t === Math.E
            ? Math.exp
            : function(n) {
                return Math.pow(t, n);
              };
      }
      function yb(t) {
        return t === Math.E
          ? Math.log
          : (10 === t && Math.log10) ||
              (2 === t && Math.log2) ||
              ((t = Math.log(t)),
              function(n) {
                return Math.log(n) / t;
              });
      }
      function gb(t) {
        return function(n) {
          return -t(-n);
        };
      }
      function bb() {
        var t = ab(hb, db).domain([1, 10]),
          n = t.domain,
          e = 10,
          r = yb(10),
          i = vb(10);
        function o() {
          return (r = yb(e)), (i = vb(e)), n()[0] < 0 && ((r = gb(r)), (i = gb(i))), t;
        }
        return (
          (t.base = function(t) {
            return arguments.length ? ((e = +t), o()) : e;
          }),
          (t.domain = function(t) {
            return arguments.length ? (n(t), o()) : n();
          }),
          (t.ticks = function(t) {
            var o,
              a = n(),
              u = a[0],
              c = a[a.length - 1];
            (o = c < u) && ((h = u), (u = c), (c = h));
            var f,
              s,
              l,
              h = r(u),
              d = r(c),
              p = null == t ? 10 : +t,
              v = [];
            if (!(e % 1) && d - h < p) {
              if (((h = Math.round(h) - 1), (d = Math.round(d) + 1), u > 0)) {
                for (; h < d; ++h)
                  for (s = 1, f = i(h); s < e; ++s)
                    if (((l = f * s), !(l < u))) {
                      if (l > c) break;
                      v.push(l);
                    }
              } else
                for (; h < d; ++h)
                  for (s = e - 1, f = i(h); s >= 1; --s)
                    if (((l = f * s), !(l < u))) {
                      if (l > c) break;
                      v.push(l);
                    }
            } else v = C(h, d, Math.min(d - h, p)).map(i);
            return o ? v.reverse() : v;
          }),
          (t.tickFormat = function(n, o) {
            if ((null == o && (o = 10 === e ? '.0e' : ','), 'function' !== typeof o && (o = Ns(o)), n === 1 / 0))
              return o;
            null == n && (n = 10);
            var a = Math.max(1, (e * n) / t.ticks().length);
            return function(t) {
              var n = t / i(Math.round(r(t)));
              return n * e < e - 0.5 && (n *= e), n <= a ? o(t) : '';
            };
          }),
          (t.nice = function() {
            return n(
              lb(n(), {
                floor: function(t) {
                  return i(Math.floor(r(t)));
                },
                ceil: function(t) {
                  return i(Math.ceil(r(t)));
                },
              })
            );
          }),
          (t.copy = function() {
            return ob(t, bb().base(e));
          }),
          t
        );
      }
      function mb(t, n) {
        return t < 0 ? -Math.pow(-t, n) : Math.pow(t, n);
      }
      function _b() {
        var t = 1,
          n = ab(r, i),
          e = n.domain;
        function r(n, e) {
          return (e = mb(e, t) - (n = mb(n, t)))
            ? function(r) {
                return (mb(r, t) - n) / e;
              }
            : Qg(e);
        }
        function i(n, e) {
          return (
            (e = mb(e, t) - (n = mb(n, t))),
            function(r) {
              return mb(n + e * r, 1 / t);
            }
          );
        }
        return (
          (n.exponent = function(n) {
            return arguments.length ? ((t = +n), e(e())) : t;
          }),
          (n.copy = function() {
            return ob(n, _b().exponent(t));
          }),
          cb(n)
        );
      }
      function wb() {
        return _b().exponent(0.5);
      }
      function xb() {
        var t = [],
          n = [],
          e = [];
        function r() {
          var r = 0,
            i = Math.max(1, n.length);
          e = new Array(i - 1);
          while (++r < i) e[r - 1] = R(t, r / i);
          return o;
        }
        function o(t) {
          if (!isNaN((t = +t))) return n[s(e, t)];
        }
        return (
          (o.invertExtent = function(r) {
            var i = n.indexOf(r);
            return i < 0 ? [NaN, NaN] : [i > 0 ? e[i - 1] : t[0], i < e.length ? e[i] : t[t.length - 1]];
          }),
          (o.domain = function(n) {
            if (!arguments.length) return t.slice();
            t = [];
            for (var e, o = 0, a = n.length; o < a; ++o) (e = n[o]), null == e || isNaN((e = +e)) || t.push(e);
            return t.sort(i), r();
          }),
          (o.range = function(t) {
            return arguments.length ? ((n = Hg.call(t)), r()) : n.slice();
          }),
          (o.quantiles = function() {
            return e.slice();
          }),
          (o.copy = function() {
            return xb()
              .domain(t)
              .range(n);
          }),
          o
        );
      }
      function Mb() {
        var t = 0,
          n = 1,
          e = 1,
          r = [0.5],
          i = [0, 1];
        function o(t) {
          if (t <= t) return i[s(r, t, 0, e)];
        }
        function a() {
          var i = -1;
          r = new Array(e);
          while (++i < e) r[i] = ((i + 1) * n - (i - e) * t) / (e + 1);
          return o;
        }
        return (
          (o.domain = function(e) {
            return arguments.length ? ((t = +e[0]), (n = +e[1]), a()) : [t, n];
          }),
          (o.range = function(t) {
            return arguments.length ? ((e = (i = Hg.call(t)).length - 1), a()) : i.slice();
          }),
          (o.invertExtent = function(o) {
            var a = i.indexOf(o);
            return a < 0 ? [NaN, NaN] : a < 1 ? [t, r[0]] : a >= e ? [r[e - 1], n] : [r[a - 1], r[a]];
          }),
          (o.copy = function() {
            return Mb()
              .domain([t, n])
              .range(i);
          }),
          cb(o)
        );
      }
      function Sb() {
        var t = [0.5],
          n = [0, 1],
          e = 1;
        function r(r) {
          if (r <= r) return n[s(t, r, 0, e)];
        }
        return (
          (r.domain = function(i) {
            return arguments.length ? ((t = Hg.call(i)), (e = Math.min(t.length, n.length - 1)), r) : t.slice();
          }),
          (r.range = function(i) {
            return arguments.length ? ((n = Hg.call(i)), (e = Math.min(t.length, n.length - 1)), r) : n.slice();
          }),
          (r.invertExtent = function(e) {
            var r = n.indexOf(e);
            return [t[r - 1], t[r]];
          }),
          (r.copy = function() {
            return Sb()
              .domain(t)
              .range(n);
          }),
          r
        );
      }
      var Ab = new Date(),
        Eb = new Date();
      function kb(t, n, e, r) {
        function i(n) {
          return t((n = new Date(+n))), n;
        }
        return (
          (i.floor = i),
          (i.ceil = function(e) {
            return t((e = new Date(e - 1))), n(e, 1), t(e), e;
          }),
          (i.round = function(t) {
            var n = i(t),
              e = i.ceil(t);
            return t - n < e - t ? n : e;
          }),
          (i.offset = function(t, e) {
            return n((t = new Date(+t)), null == e ? 1 : Math.floor(e)), t;
          }),
          (i.range = function(e, r, o) {
            var a,
              u = [];
            if (((e = i.ceil(e)), (o = null == o ? 1 : Math.floor(o)), !(e < r) || !(o > 0))) return u;
            do {
              u.push((a = new Date(+e))), n(e, o), t(e);
            } while (a < e && e < r);
            return u;
          }),
          (i.filter = function(e) {
            return kb(
              function(n) {
                if (n >= n) while ((t(n), !e(n))) n.setTime(n - 1);
              },
              function(t, r) {
                if (t >= t)
                  if (r < 0) while (++r <= 0) while ((n(t, -1), !e(t)));
                  else while (--r >= 0) while ((n(t, 1), !e(t)));
              }
            );
          }),
          e &&
            ((i.count = function(n, r) {
              return Ab.setTime(+n), Eb.setTime(+r), t(Ab), t(Eb), Math.floor(e(Ab, Eb));
            }),
            (i.every = function(t) {
              return (
                (t = Math.floor(t)),
                isFinite(t) && t > 0
                  ? t > 1
                    ? i.filter(
                        r
                          ? function(n) {
                              return r(n) % t === 0;
                            }
                          : function(n) {
                              return i.count(0, n) % t === 0;
                            }
                      )
                    : i
                  : null
              );
            })),
          i
        );
      }
      var Cb = kb(
        function() {},
        function(t, n) {
          t.setTime(+t + n);
        },
        function(t, n) {
          return n - t;
        }
      );
      Cb.every = function(t) {
        return (
          (t = Math.floor(t)),
          isFinite(t) && t > 0
            ? t > 1
              ? kb(
                  function(n) {
                    n.setTime(Math.floor(n / t) * t);
                  },
                  function(n, e) {
                    n.setTime(+n + e * t);
                  },
                  function(n, e) {
                    return (e - n) / t;
                  }
                )
              : Cb
            : null
        );
      };
      var Tb = Cb,
        Ob = Cb.range,
        Nb = 1e3,
        Pb = 6e4,
        Rb = 36e5,
        jb = 864e5,
        Lb = 6048e5,
        Ib = kb(
          function(t) {
            t.setTime(Math.floor(t / Nb) * Nb);
          },
          function(t, n) {
            t.setTime(+t + n * Nb);
          },
          function(t, n) {
            return (n - t) / Nb;
          },
          function(t) {
            return t.getUTCSeconds();
          }
        ),
        $b = Ib,
        Fb = Ib.range,
        Db = kb(
          function(t) {
            t.setTime(Math.floor(t / Pb) * Pb);
          },
          function(t, n) {
            t.setTime(+t + n * Pb);
          },
          function(t, n) {
            return (n - t) / Pb;
          },
          function(t) {
            return t.getMinutes();
          }
        ),
        zb = Db,
        Ub = Db.range,
        Bb = kb(
          function(t) {
            var n = (t.getTimezoneOffset() * Pb) % Rb;
            n < 0 && (n += Rb), t.setTime(Math.floor((+t - n) / Rb) * Rb + n);
          },
          function(t, n) {
            t.setTime(+t + n * Rb);
          },
          function(t, n) {
            return (n - t) / Rb;
          },
          function(t) {
            return t.getHours();
          }
        ),
        qb = Bb,
        Vb = Bb.range,
        Hb = kb(
          function(t) {
            t.setHours(0, 0, 0, 0);
          },
          function(t, n) {
            t.setDate(t.getDate() + n);
          },
          function(t, n) {
            return (n - t - (n.getTimezoneOffset() - t.getTimezoneOffset()) * Pb) / jb;
          },
          function(t) {
            return t.getDate() - 1;
          }
        ),
        Yb = Hb,
        Gb = Hb.range;
      function Wb(t) {
        return kb(
          function(n) {
            n.setDate(n.getDate() - ((n.getDay() + 7 - t) % 7)), n.setHours(0, 0, 0, 0);
          },
          function(t, n) {
            t.setDate(t.getDate() + 7 * n);
          },
          function(t, n) {
            return (n - t - (n.getTimezoneOffset() - t.getTimezoneOffset()) * Pb) / Lb;
          }
        );
      }
      var Xb = Wb(0),
        Kb = Wb(1),
        Qb = Wb(2),
        Zb = Wb(3),
        Jb = Wb(4),
        tm = Wb(5),
        nm = Wb(6),
        em = Xb.range,
        rm = Kb.range,
        im = Qb.range,
        om = Zb.range,
        am = Jb.range,
        um = tm.range,
        cm = nm.range,
        fm = kb(
          function(t) {
            t.setDate(1), t.setHours(0, 0, 0, 0);
          },
          function(t, n) {
            t.setMonth(t.getMonth() + n);
          },
          function(t, n) {
            return n.getMonth() - t.getMonth() + 12 * (n.getFullYear() - t.getFullYear());
          },
          function(t) {
            return t.getMonth();
          }
        ),
        sm = fm,
        lm = fm.range,
        hm = kb(
          function(t) {
            t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
          },
          function(t, n) {
            t.setFullYear(t.getFullYear() + n);
          },
          function(t, n) {
            return n.getFullYear() - t.getFullYear();
          },
          function(t) {
            return t.getFullYear();
          }
        );
      hm.every = function(t) {
        return isFinite((t = Math.floor(t))) && t > 0
          ? kb(
              function(n) {
                n.setFullYear(Math.floor(n.getFullYear() / t) * t), n.setMonth(0, 1), n.setHours(0, 0, 0, 0);
              },
              function(n, e) {
                n.setFullYear(n.getFullYear() + e * t);
              }
            )
          : null;
      };
      var dm = hm,
        pm = hm.range,
        vm = kb(
          function(t) {
            t.setUTCSeconds(0, 0);
          },
          function(t, n) {
            t.setTime(+t + n * Pb);
          },
          function(t, n) {
            return (n - t) / Pb;
          },
          function(t) {
            return t.getUTCMinutes();
          }
        ),
        ym = vm,
        gm = vm.range,
        bm = kb(
          function(t) {
            t.setUTCMinutes(0, 0, 0);
          },
          function(t, n) {
            t.setTime(+t + n * Rb);
          },
          function(t, n) {
            return (n - t) / Rb;
          },
          function(t) {
            return t.getUTCHours();
          }
        ),
        mm = bm,
        _m = bm.range,
        wm = kb(
          function(t) {
            t.setUTCHours(0, 0, 0, 0);
          },
          function(t, n) {
            t.setUTCDate(t.getUTCDate() + n);
          },
          function(t, n) {
            return (n - t) / jb;
          },
          function(t) {
            return t.getUTCDate() - 1;
          }
        ),
        xm = wm,
        Mm = wm.range;
      function Sm(t) {
        return kb(
          function(n) {
            n.setUTCDate(n.getUTCDate() - ((n.getUTCDay() + 7 - t) % 7)), n.setUTCHours(0, 0, 0, 0);
          },
          function(t, n) {
            t.setUTCDate(t.getUTCDate() + 7 * n);
          },
          function(t, n) {
            return (n - t) / Lb;
          }
        );
      }
      var Am = Sm(0),
        Em = Sm(1),
        km = Sm(2),
        Cm = Sm(3),
        Tm = Sm(4),
        Om = Sm(5),
        Nm = Sm(6),
        Pm = Am.range,
        Rm = Em.range,
        jm = km.range,
        Lm = Cm.range,
        Im = Tm.range,
        $m = Om.range,
        Fm = Nm.range,
        Dm = kb(
          function(t) {
            t.setUTCDate(1), t.setUTCHours(0, 0, 0, 0);
          },
          function(t, n) {
            t.setUTCMonth(t.getUTCMonth() + n);
          },
          function(t, n) {
            return n.getUTCMonth() - t.getUTCMonth() + 12 * (n.getUTCFullYear() - t.getUTCFullYear());
          },
          function(t) {
            return t.getUTCMonth();
          }
        ),
        zm = Dm,
        Um = Dm.range,
        Bm = kb(
          function(t) {
            t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
          },
          function(t, n) {
            t.setUTCFullYear(t.getUTCFullYear() + n);
          },
          function(t, n) {
            return n.getUTCFullYear() - t.getUTCFullYear();
          },
          function(t) {
            return t.getUTCFullYear();
          }
        );
      Bm.every = function(t) {
        return isFinite((t = Math.floor(t))) && t > 0
          ? kb(
              function(n) {
                n.setUTCFullYear(Math.floor(n.getUTCFullYear() / t) * t),
                  n.setUTCMonth(0, 1),
                  n.setUTCHours(0, 0, 0, 0);
              },
              function(n, e) {
                n.setUTCFullYear(n.getUTCFullYear() + e * t);
              }
            )
          : null;
      };
      var qm = Bm,
        Vm = Bm.range;
      function Hm(t) {
        if (0 <= t.y && t.y < 100) {
          var n = new Date(-1, t.m, t.d, t.H, t.M, t.S, t.L);
          return n.setFullYear(t.y), n;
        }
        return new Date(t.y, t.m, t.d, t.H, t.M, t.S, t.L);
      }
      function Ym(t) {
        if (0 <= t.y && t.y < 100) {
          var n = new Date(Date.UTC(-1, t.m, t.d, t.H, t.M, t.S, t.L));
          return n.setUTCFullYear(t.y), n;
        }
        return new Date(Date.UTC(t.y, t.m, t.d, t.H, t.M, t.S, t.L));
      }
      function Gm(t) {
        return { y: t, m: 0, d: 1, H: 0, M: 0, S: 0, L: 0 };
      }
      function Wm(t) {
        var n = t.dateTime,
          e = t.date,
          r = t.time,
          i = t.periods,
          o = t.days,
          a = t.shortDays,
          u = t.months,
          c = t.shortMonths,
          f = a_(i),
          s = u_(i),
          l = a_(o),
          h = u_(o),
          d = a_(a),
          p = u_(a),
          v = a_(u),
          y = u_(u),
          g = a_(c),
          b = u_(c),
          m = {
            a: R,
            A: j,
            b: L,
            B: I,
            c: null,
            d: k_,
            e: k_,
            f: P_,
            H: C_,
            I: T_,
            j: O_,
            L: N_,
            m: R_,
            M: j_,
            p: $,
            Q: cw,
            s: fw,
            S: L_,
            u: I_,
            U: $_,
            V: F_,
            w: D_,
            W: z_,
            x: null,
            X: null,
            y: U_,
            Y: B_,
            Z: q_,
            '%': uw,
          },
          _ = {
            a: F,
            A: D,
            b: z,
            B: U,
            c: null,
            d: V_,
            e: V_,
            f: X_,
            H: H_,
            I: Y_,
            j: G_,
            L: W_,
            m: K_,
            M: Q_,
            p: B,
            Q: cw,
            s: fw,
            S: Z_,
            u: J_,
            U: tw,
            V: nw,
            w: ew,
            W: rw,
            x: null,
            X: null,
            y: iw,
            Y: ow,
            Z: aw,
            '%': uw,
          },
          w = {
            a: E,
            A: k,
            b: C,
            B: T,
            c: O,
            d: g_,
            e: g_,
            f: M_,
            H: m_,
            I: m_,
            j: b_,
            L: x_,
            m: y_,
            M: __,
            p: A,
            Q: A_,
            s: E_,
            S: w_,
            u: f_,
            U: s_,
            V: l_,
            w: c_,
            W: h_,
            x: N,
            X: P,
            y: p_,
            Y: d_,
            Z: v_,
            '%': S_,
          };
        function x(t, n) {
          return function(e) {
            var r,
              i,
              o,
              a = [],
              u = -1,
              c = 0,
              f = t.length;
            e instanceof Date || (e = new Date(+e));
            while (++u < f)
              37 === t.charCodeAt(u) &&
                (a.push(t.slice(c, u)),
                null != (i = t_[(r = t.charAt(++u))]) ? (r = t.charAt(++u)) : (i = 'e' === r ? ' ' : '0'),
                (o = n[r]) && (r = o(e, i)),
                a.push(r),
                (c = u + 1));
            return a.push(t.slice(c, u)), a.join('');
          };
        }
        function M(t, n) {
          return function(e) {
            var r,
              i,
              o = Gm(1900),
              a = S(o, t, (e += ''), 0);
            if (a != e.length) return null;
            if ('Q' in o) return new Date(o.Q);
            if (('p' in o && (o.H = (o.H % 12) + 12 * o.p), 'V' in o)) {
              if (o.V < 1 || o.V > 53) return null;
              'w' in o || (o.w = 1),
                'Z' in o
                  ? ((r = Ym(Gm(o.y))),
                    (i = r.getUTCDay()),
                    (r = i > 4 || 0 === i ? Em.ceil(r) : Em(r)),
                    (r = xm.offset(r, 7 * (o.V - 1))),
                    (o.y = r.getUTCFullYear()),
                    (o.m = r.getUTCMonth()),
                    (o.d = r.getUTCDate() + ((o.w + 6) % 7)))
                  : ((r = n(Gm(o.y))),
                    (i = r.getDay()),
                    (r = i > 4 || 0 === i ? Kb.ceil(r) : Kb(r)),
                    (r = Yb.offset(r, 7 * (o.V - 1))),
                    (o.y = r.getFullYear()),
                    (o.m = r.getMonth()),
                    (o.d = r.getDate() + ((o.w + 6) % 7)));
            } else
              ('W' in o || 'U' in o) &&
                ('w' in o || (o.w = 'u' in o ? o.u % 7 : 'W' in o ? 1 : 0),
                (i = 'Z' in o ? Ym(Gm(o.y)).getUTCDay() : n(Gm(o.y)).getDay()),
                (o.m = 0),
                (o.d = 'W' in o ? ((o.w + 6) % 7) + 7 * o.W - ((i + 5) % 7) : o.w + 7 * o.U - ((i + 6) % 7)));
            return 'Z' in o ? ((o.H += (o.Z / 100) | 0), (o.M += o.Z % 100), Ym(o)) : n(o);
          };
        }
        function S(t, n, e, r) {
          var i,
            o,
            a = 0,
            u = n.length,
            c = e.length;
          while (a < u) {
            if (r >= c) return -1;
            if (((i = n.charCodeAt(a++)), 37 === i)) {
              if (((i = n.charAt(a++)), (o = w[i in t_ ? n.charAt(a++) : i]), !o || (r = o(t, e, r)) < 0)) return -1;
            } else if (i != e.charCodeAt(r++)) return -1;
          }
          return r;
        }
        function A(t, n, e) {
          var r = f.exec(n.slice(e));
          return r ? ((t.p = s[r[0].toLowerCase()]), e + r[0].length) : -1;
        }
        function E(t, n, e) {
          var r = d.exec(n.slice(e));
          return r ? ((t.w = p[r[0].toLowerCase()]), e + r[0].length) : -1;
        }
        function k(t, n, e) {
          var r = l.exec(n.slice(e));
          return r ? ((t.w = h[r[0].toLowerCase()]), e + r[0].length) : -1;
        }
        function C(t, n, e) {
          var r = g.exec(n.slice(e));
          return r ? ((t.m = b[r[0].toLowerCase()]), e + r[0].length) : -1;
        }
        function T(t, n, e) {
          var r = v.exec(n.slice(e));
          return r ? ((t.m = y[r[0].toLowerCase()]), e + r[0].length) : -1;
        }
        function O(t, e, r) {
          return S(t, n, e, r);
        }
        function N(t, n, r) {
          return S(t, e, n, r);
        }
        function P(t, n, e) {
          return S(t, r, n, e);
        }
        function R(t) {
          return a[t.getDay()];
        }
        function j(t) {
          return o[t.getDay()];
        }
        function L(t) {
          return c[t.getMonth()];
        }
        function I(t) {
          return u[t.getMonth()];
        }
        function $(t) {
          return i[+(t.getHours() >= 12)];
        }
        function F(t) {
          return a[t.getUTCDay()];
        }
        function D(t) {
          return o[t.getUTCDay()];
        }
        function z(t) {
          return c[t.getUTCMonth()];
        }
        function U(t) {
          return u[t.getUTCMonth()];
        }
        function B(t) {
          return i[+(t.getUTCHours() >= 12)];
        }
        return (
          (m.x = x(e, m)),
          (m.X = x(r, m)),
          (m.c = x(n, m)),
          (_.x = x(e, _)),
          (_.X = x(r, _)),
          (_.c = x(n, _)),
          {
            format: function(t) {
              var n = x((t += ''), m);
              return (
                (n.toString = function() {
                  return t;
                }),
                n
              );
            },
            parse: function(t) {
              var n = M((t += ''), Hm);
              return (
                (n.toString = function() {
                  return t;
                }),
                n
              );
            },
            utcFormat: function(t) {
              var n = x((t += ''), _);
              return (
                (n.toString = function() {
                  return t;
                }),
                n
              );
            },
            utcParse: function(t) {
              var n = M(t, Ym);
              return (
                (n.toString = function() {
                  return t;
                }),
                n
              );
            },
          }
        );
      }
      var Xm,
        Km,
        Qm,
        Zm,
        Jm,
        t_ = { '-': '', _: ' ', 0: '0' },
        n_ = /^\s*\d+/,
        e_ = /^%/,
        r_ = /[\\^$*+?|[\]().{}]/g;
      function i_(t, n, e) {
        var r = t < 0 ? '-' : '',
          i = (r ? -t : t) + '',
          o = i.length;
        return r + (o < e ? new Array(e - o + 1).join(n) + i : i);
      }
      function o_(t) {
        return t.replace(r_, '\\$&');
      }
      function a_(t) {
        return new RegExp('^(?:' + t.map(o_).join('|') + ')', 'i');
      }
      function u_(t) {
        var n = {},
          e = -1,
          r = t.length;
        while (++e < r) n[t[e].toLowerCase()] = e;
        return n;
      }
      function c_(t, n, e) {
        var r = n_.exec(n.slice(e, e + 1));
        return r ? ((t.w = +r[0]), e + r[0].length) : -1;
      }
      function f_(t, n, e) {
        var r = n_.exec(n.slice(e, e + 1));
        return r ? ((t.u = +r[0]), e + r[0].length) : -1;
      }
      function s_(t, n, e) {
        var r = n_.exec(n.slice(e, e + 2));
        return r ? ((t.U = +r[0]), e + r[0].length) : -1;
      }
      function l_(t, n, e) {
        var r = n_.exec(n.slice(e, e + 2));
        return r ? ((t.V = +r[0]), e + r[0].length) : -1;
      }
      function h_(t, n, e) {
        var r = n_.exec(n.slice(e, e + 2));
        return r ? ((t.W = +r[0]), e + r[0].length) : -1;
      }
      function d_(t, n, e) {
        var r = n_.exec(n.slice(e, e + 4));
        return r ? ((t.y = +r[0]), e + r[0].length) : -1;
      }
      function p_(t, n, e) {
        var r = n_.exec(n.slice(e, e + 2));
        return r ? ((t.y = +r[0] + (+r[0] > 68 ? 1900 : 2e3)), e + r[0].length) : -1;
      }
      function v_(t, n, e) {
        var r = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(n.slice(e, e + 6));
        return r ? ((t.Z = r[1] ? 0 : -(r[2] + (r[3] || '00'))), e + r[0].length) : -1;
      }
      function y_(t, n, e) {
        var r = n_.exec(n.slice(e, e + 2));
        return r ? ((t.m = r[0] - 1), e + r[0].length) : -1;
      }
      function g_(t, n, e) {
        var r = n_.exec(n.slice(e, e + 2));
        return r ? ((t.d = +r[0]), e + r[0].length) : -1;
      }
      function b_(t, n, e) {
        var r = n_.exec(n.slice(e, e + 3));
        return r ? ((t.m = 0), (t.d = +r[0]), e + r[0].length) : -1;
      }
      function m_(t, n, e) {
        var r = n_.exec(n.slice(e, e + 2));
        return r ? ((t.H = +r[0]), e + r[0].length) : -1;
      }
      function __(t, n, e) {
        var r = n_.exec(n.slice(e, e + 2));
        return r ? ((t.M = +r[0]), e + r[0].length) : -1;
      }
      function w_(t, n, e) {
        var r = n_.exec(n.slice(e, e + 2));
        return r ? ((t.S = +r[0]), e + r[0].length) : -1;
      }
      function x_(t, n, e) {
        var r = n_.exec(n.slice(e, e + 3));
        return r ? ((t.L = +r[0]), e + r[0].length) : -1;
      }
      function M_(t, n, e) {
        var r = n_.exec(n.slice(e, e + 6));
        return r ? ((t.L = Math.floor(r[0] / 1e3)), e + r[0].length) : -1;
      }
      function S_(t, n, e) {
        var r = e_.exec(n.slice(e, e + 1));
        return r ? e + r[0].length : -1;
      }
      function A_(t, n, e) {
        var r = n_.exec(n.slice(e));
        return r ? ((t.Q = +r[0]), e + r[0].length) : -1;
      }
      function E_(t, n, e) {
        var r = n_.exec(n.slice(e));
        return r ? ((t.Q = 1e3 * +r[0]), e + r[0].length) : -1;
      }
      function k_(t, n) {
        return i_(t.getDate(), n, 2);
      }
      function C_(t, n) {
        return i_(t.getHours(), n, 2);
      }
      function T_(t, n) {
        return i_(t.getHours() % 12 || 12, n, 2);
      }
      function O_(t, n) {
        return i_(1 + Yb.count(dm(t), t), n, 3);
      }
      function N_(t, n) {
        return i_(t.getMilliseconds(), n, 3);
      }
      function P_(t, n) {
        return N_(t, n) + '000';
      }
      function R_(t, n) {
        return i_(t.getMonth() + 1, n, 2);
      }
      function j_(t, n) {
        return i_(t.getMinutes(), n, 2);
      }
      function L_(t, n) {
        return i_(t.getSeconds(), n, 2);
      }
      function I_(t) {
        var n = t.getDay();
        return 0 === n ? 7 : n;
      }
      function $_(t, n) {
        return i_(Xb.count(dm(t), t), n, 2);
      }
      function F_(t, n) {
        var e = t.getDay();
        return (t = e >= 4 || 0 === e ? Jb(t) : Jb.ceil(t)), i_(Jb.count(dm(t), t) + (4 === dm(t).getDay()), n, 2);
      }
      function D_(t) {
        return t.getDay();
      }
      function z_(t, n) {
        return i_(Kb.count(dm(t), t), n, 2);
      }
      function U_(t, n) {
        return i_(t.getFullYear() % 100, n, 2);
      }
      function B_(t, n) {
        return i_(t.getFullYear() % 1e4, n, 4);
      }
      function q_(t) {
        var n = t.getTimezoneOffset();
        return (n > 0 ? '-' : ((n *= -1), '+')) + i_((n / 60) | 0, '0', 2) + i_(n % 60, '0', 2);
      }
      function V_(t, n) {
        return i_(t.getUTCDate(), n, 2);
      }
      function H_(t, n) {
        return i_(t.getUTCHours(), n, 2);
      }
      function Y_(t, n) {
        return i_(t.getUTCHours() % 12 || 12, n, 2);
      }
      function G_(t, n) {
        return i_(1 + xm.count(qm(t), t), n, 3);
      }
      function W_(t, n) {
        return i_(t.getUTCMilliseconds(), n, 3);
      }
      function X_(t, n) {
        return W_(t, n) + '000';
      }
      function K_(t, n) {
        return i_(t.getUTCMonth() + 1, n, 2);
      }
      function Q_(t, n) {
        return i_(t.getUTCMinutes(), n, 2);
      }
      function Z_(t, n) {
        return i_(t.getUTCSeconds(), n, 2);
      }
      function J_(t) {
        var n = t.getUTCDay();
        return 0 === n ? 7 : n;
      }
      function tw(t, n) {
        return i_(Am.count(qm(t), t), n, 2);
      }
      function nw(t, n) {
        var e = t.getUTCDay();
        return (t = e >= 4 || 0 === e ? Tm(t) : Tm.ceil(t)), i_(Tm.count(qm(t), t) + (4 === qm(t).getUTCDay()), n, 2);
      }
      function ew(t) {
        return t.getUTCDay();
      }
      function rw(t, n) {
        return i_(Em.count(qm(t), t), n, 2);
      }
      function iw(t, n) {
        return i_(t.getUTCFullYear() % 100, n, 2);
      }
      function ow(t, n) {
        return i_(t.getUTCFullYear() % 1e4, n, 4);
      }
      function aw() {
        return '+0000';
      }
      function uw() {
        return '%';
      }
      function cw(t) {
        return +t;
      }
      function fw(t) {
        return Math.floor(+t / 1e3);
      }
      function sw(t) {
        return (Xm = Wm(t)), (Km = Xm.format), (Qm = Xm.parse), (Zm = Xm.utcFormat), (Jm = Xm.utcParse), Xm;
      }
      sw({
        dateTime: '%x, %X',
        date: '%-m/%-d/%Y',
        time: '%-I:%M:%S %p',
        periods: ['AM', 'PM'],
        days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        shortDays: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        months: [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
          'August',
          'September',
          'October',
          'November',
          'December',
        ],
        shortMonths: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      });
      var lw = '%Y-%m-%dT%H:%M:%S.%LZ';
      function hw(t) {
        return t.toISOString();
      }
      var dw = Date.prototype.toISOString ? hw : Zm(lw),
        pw = dw;
      function vw(t) {
        var n = new Date(t);
        return isNaN(n) ? null : n;
      }
      var yw = +new Date('2000-01-01T00:00:00.000Z') ? vw : Jm(lw),
        gw = yw,
        bw = 1e3,
        mw = 60 * bw,
        _w = 60 * mw,
        ww = 24 * _w,
        xw = 7 * ww,
        Mw = 30 * ww,
        Sw = 365 * ww;
      function Aw(t) {
        return new Date(t);
      }
      function Ew(t) {
        return t instanceof Date ? +t : +new Date(+t);
      }
      function kw(t, n, e, r, i, a, u, c, f) {
        var s = ab(tb, ri),
          l = s.invert,
          h = s.domain,
          d = f('.%L'),
          p = f(':%S'),
          v = f('%I:%M'),
          y = f('%I %p'),
          g = f('%a %d'),
          b = f('%b %d'),
          m = f('%B'),
          _ = f('%Y'),
          w = [
            [u, 1, bw],
            [u, 5, 5 * bw],
            [u, 15, 15 * bw],
            [u, 30, 30 * bw],
            [a, 1, mw],
            [a, 5, 5 * mw],
            [a, 15, 15 * mw],
            [a, 30, 30 * mw],
            [i, 1, _w],
            [i, 3, 3 * _w],
            [i, 6, 6 * _w],
            [i, 12, 12 * _w],
            [r, 1, ww],
            [r, 2, 2 * ww],
            [e, 1, xw],
            [n, 1, Mw],
            [n, 3, 3 * Mw],
            [t, 1, Sw],
          ];
        function x(o) {
          return (u(o) < o
            ? d
            : a(o) < o
              ? p
              : i(o) < o
                ? v
                : r(o) < o
                  ? y
                  : n(o) < o
                    ? e(o) < o
                      ? g
                      : b
                    : t(o) < o
                      ? m
                      : _)(o);
        }
        function M(n, e, r, i) {
          if ((null == n && (n = 10), 'number' === typeof n)) {
            var a = Math.abs(r - e) / n,
              u = o(function(t) {
                return t[2];
              }).right(w, a);
            u === w.length
              ? ((i = O(e / Sw, r / Sw, n)), (n = t))
              : u
                ? ((u = w[a / w[u - 1][2] < w[u][2] / a ? u - 1 : u]), (i = u[1]), (n = u[0]))
                : ((i = Math.max(O(e, r, n), 1)), (n = c));
          }
          return null == i ? n : n.every(i);
        }
        return (
          (s.invert = function(t) {
            return new Date(l(t));
          }),
          (s.domain = function(t) {
            return arguments.length ? h(Vg.call(t, Ew)) : h().map(Aw);
          }),
          (s.ticks = function(t, n) {
            var e,
              r = h(),
              i = r[0],
              o = r[r.length - 1],
              a = o < i;
            return (
              a && ((e = i), (i = o), (o = e)),
              (e = M(t, i, o, n)),
              (e = e ? e.range(i, o + 1) : []),
              a ? e.reverse() : e
            );
          }),
          (s.tickFormat = function(t, n) {
            return null == n ? x : f(n);
          }),
          (s.nice = function(t, n) {
            var e = h();
            return (t = M(t, e[0], e[e.length - 1], n)) ? h(lb(e, t)) : s;
          }),
          (s.copy = function() {
            return ob(s, kw(t, n, e, r, i, a, u, c, f));
          }),
          s
        );
      }
      var Cw = function() {
          return kw(dm, sm, Xb, Yb, qb, zb, $b, Tb, Km).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]);
        },
        Tw = function() {
          return kw(qm, zm, Am, xm, mm, ym, $b, Tb, Zm).domain([Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)]);
        };
      function Ow(t) {
        var n = 0,
          e = 1,
          r = 1,
          i = !1;
        function o(e) {
          var o = (e - n) * r;
          return t(i ? Math.max(0, Math.min(1, o)) : o);
        }
        return (
          (o.domain = function(t) {
            return arguments.length ? ((n = +t[0]), (e = +t[1]), (r = n === e ? 0 : 1 / (e - n)), o) : [n, e];
          }),
          (o.clamp = function(t) {
            return arguments.length ? ((i = !!t), o) : i;
          }),
          (o.interpolator = function(n) {
            return arguments.length ? ((t = n), o) : t;
          }),
          (o.copy = function() {
            return Ow(t)
              .domain([n, e])
              .clamp(i);
          }),
          cb(o)
        );
      }
      function Nw(t) {
        var n = 0,
          e = 0.5,
          r = 1,
          i = 1,
          o = 1,
          a = !1;
        function u(n) {
          var r = 0.5 + ((n = +n) - e) * (n < e ? i : o);
          return t(a ? Math.max(0, Math.min(1, r)) : r);
        }
        return (
          (u.domain = function(t) {
            return arguments.length
              ? ((n = +t[0]),
                (e = +t[1]),
                (r = +t[2]),
                (i = n === e ? 0 : 0.5 / (e - n)),
                (o = e === r ? 0 : 0.5 / (r - e)),
                u)
              : [n, e, r];
          }),
          (u.clamp = function(t) {
            return arguments.length ? ((a = !!t), u) : a;
          }),
          (u.interpolator = function(n) {
            return arguments.length ? ((t = n), u) : t;
          }),
          (u.copy = function() {
            return Nw(t)
              .domain([n, e, r])
              .clamp(a);
          }),
          cb(u)
        );
      }
      var Pw = function(t) {
          var n = (t.length / 6) | 0,
            e = new Array(n),
            r = 0;
          while (r < n) e[r] = '#' + t.slice(6 * r, 6 * ++r);
          return e;
        },
        Rw = Pw('1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf'),
        jw = Pw('7fc97fbeaed4fdc086ffff99386cb0f0027fbf5b17666666'),
        Lw = Pw('1b9e77d95f027570b3e7298a66a61ee6ab02a6761d666666'),
        Iw = Pw('a6cee31f78b4b2df8a33a02cfb9a99e31a1cfdbf6fff7f00cab2d66a3d9affff99b15928'),
        $w = Pw('fbb4aeb3cde3ccebc5decbe4fed9a6ffffcce5d8bdfddaecf2f2f2'),
        Fw = Pw('b3e2cdfdcdaccbd5e8f4cae4e6f5c9fff2aef1e2cccccccc'),
        Dw = Pw('e41a1c377eb84daf4a984ea3ff7f00ffff33a65628f781bf999999'),
        zw = Pw('66c2a5fc8d628da0cbe78ac3a6d854ffd92fe5c494b3b3b3'),
        Uw = Pw('8dd3c7ffffb3bebadafb807280b1d3fdb462b3de69fccde5d9d9d9bc80bdccebc5ffed6f'),
        Bw = function(t) {
          return Jr(t[t.length - 1]);
        },
        qw = new Array(3)
          .concat(
            'd8b365f5f5f55ab4ac',
            'a6611adfc27d80cdc1018571',
            'a6611adfc27df5f5f580cdc1018571',
            '8c510ad8b365f6e8c3c7eae55ab4ac01665e',
            '8c510ad8b365f6e8c3f5f5f5c7eae55ab4ac01665e',
            '8c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e',
            '8c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e',
            '5430058c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e003c30',
            '5430058c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e003c30'
          )
          .map(Pw),
        Vw = Bw(qw),
        Hw = new Array(3)
          .concat(
            'af8dc3f7f7f77fbf7b',
            '7b3294c2a5cfa6dba0008837',
            '7b3294c2a5cff7f7f7a6dba0008837',
            '762a83af8dc3e7d4e8d9f0d37fbf7b1b7837',
            '762a83af8dc3e7d4e8f7f7f7d9f0d37fbf7b1b7837',
            '762a839970abc2a5cfe7d4e8d9f0d3a6dba05aae611b7837',
            '762a839970abc2a5cfe7d4e8f7f7f7d9f0d3a6dba05aae611b7837',
            '40004b762a839970abc2a5cfe7d4e8d9f0d3a6dba05aae611b783700441b',
            '40004b762a839970abc2a5cfe7d4e8f7f7f7d9f0d3a6dba05aae611b783700441b'
          )
          .map(Pw),
        Yw = Bw(Hw),
        Gw = new Array(3)
          .concat(
            'e9a3c9f7f7f7a1d76a',
            'd01c8bf1b6dab8e1864dac26',
            'd01c8bf1b6daf7f7f7b8e1864dac26',
            'c51b7de9a3c9fde0efe6f5d0a1d76a4d9221',
            'c51b7de9a3c9fde0eff7f7f7e6f5d0a1d76a4d9221',
            'c51b7dde77aef1b6dafde0efe6f5d0b8e1867fbc414d9221',
            'c51b7dde77aef1b6dafde0eff7f7f7e6f5d0b8e1867fbc414d9221',
            '8e0152c51b7dde77aef1b6dafde0efe6f5d0b8e1867fbc414d9221276419',
            '8e0152c51b7dde77aef1b6dafde0eff7f7f7e6f5d0b8e1867fbc414d9221276419'
          )
          .map(Pw),
        Ww = Bw(Gw),
        Xw = new Array(3)
          .concat(
            '998ec3f7f7f7f1a340',
            '5e3c99b2abd2fdb863e66101',
            '5e3c99b2abd2f7f7f7fdb863e66101',
            '542788998ec3d8daebfee0b6f1a340b35806',
            '542788998ec3d8daebf7f7f7fee0b6f1a340b35806',
            '5427888073acb2abd2d8daebfee0b6fdb863e08214b35806',
            '5427888073acb2abd2d8daebf7f7f7fee0b6fdb863e08214b35806',
            '2d004b5427888073acb2abd2d8daebfee0b6fdb863e08214b358067f3b08',
            '2d004b5427888073acb2abd2d8daebf7f7f7fee0b6fdb863e08214b358067f3b08'
          )
          .map(Pw),
        Kw = Bw(Xw),
        Qw = new Array(3)
          .concat(
            'ef8a62f7f7f767a9cf',
            'ca0020f4a58292c5de0571b0',
            'ca0020f4a582f7f7f792c5de0571b0',
            'b2182bef8a62fddbc7d1e5f067a9cf2166ac',
            'b2182bef8a62fddbc7f7f7f7d1e5f067a9cf2166ac',
            'b2182bd6604df4a582fddbc7d1e5f092c5de4393c32166ac',
            'b2182bd6604df4a582fddbc7f7f7f7d1e5f092c5de4393c32166ac',
            '67001fb2182bd6604df4a582fddbc7d1e5f092c5de4393c32166ac053061',
            '67001fb2182bd6604df4a582fddbc7f7f7f7d1e5f092c5de4393c32166ac053061'
          )
          .map(Pw),
        Zw = Bw(Qw),
        Jw = new Array(3)
          .concat(
            'ef8a62ffffff999999',
            'ca0020f4a582bababa404040',
            'ca0020f4a582ffffffbababa404040',
            'b2182bef8a62fddbc7e0e0e09999994d4d4d',
            'b2182bef8a62fddbc7ffffffe0e0e09999994d4d4d',
            'b2182bd6604df4a582fddbc7e0e0e0bababa8787874d4d4d',
            'b2182bd6604df4a582fddbc7ffffffe0e0e0bababa8787874d4d4d',
            '67001fb2182bd6604df4a582fddbc7e0e0e0bababa8787874d4d4d1a1a1a',
            '67001fb2182bd6604df4a582fddbc7ffffffe0e0e0bababa8787874d4d4d1a1a1a'
          )
          .map(Pw),
        tx = Bw(Jw),
        nx = new Array(3)
          .concat(
            'fc8d59ffffbf91bfdb',
            'd7191cfdae61abd9e92c7bb6',
            'd7191cfdae61ffffbfabd9e92c7bb6',
            'd73027fc8d59fee090e0f3f891bfdb4575b4',
            'd73027fc8d59fee090ffffbfe0f3f891bfdb4575b4',
            'd73027f46d43fdae61fee090e0f3f8abd9e974add14575b4',
            'd73027f46d43fdae61fee090ffffbfe0f3f8abd9e974add14575b4',
            'a50026d73027f46d43fdae61fee090e0f3f8abd9e974add14575b4313695',
            'a50026d73027f46d43fdae61fee090ffffbfe0f3f8abd9e974add14575b4313695'
          )
          .map(Pw),
        ex = Bw(nx),
        rx = new Array(3)
          .concat(
            'fc8d59ffffbf91cf60',
            'd7191cfdae61a6d96a1a9641',
            'd7191cfdae61ffffbfa6d96a1a9641',
            'd73027fc8d59fee08bd9ef8b91cf601a9850',
            'd73027fc8d59fee08bffffbfd9ef8b91cf601a9850',
            'd73027f46d43fdae61fee08bd9ef8ba6d96a66bd631a9850',
            'd73027f46d43fdae61fee08bffffbfd9ef8ba6d96a66bd631a9850',
            'a50026d73027f46d43fdae61fee08bd9ef8ba6d96a66bd631a9850006837',
            'a50026d73027f46d43fdae61fee08bffffbfd9ef8ba6d96a66bd631a9850006837'
          )
          .map(Pw),
        ix = Bw(rx),
        ox = new Array(3)
          .concat(
            'fc8d59ffffbf99d594',
            'd7191cfdae61abdda42b83ba',
            'd7191cfdae61ffffbfabdda42b83ba',
            'd53e4ffc8d59fee08be6f59899d5943288bd',
            'd53e4ffc8d59fee08bffffbfe6f59899d5943288bd',
            'd53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd',
            'd53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd',
            '9e0142d53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd5e4fa2',
            '9e0142d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd5e4fa2'
          )
          .map(Pw),
        ax = Bw(ox),
        ux = new Array(3)
          .concat(
            'e5f5f999d8c92ca25f',
            'edf8fbb2e2e266c2a4238b45',
            'edf8fbb2e2e266c2a42ca25f006d2c',
            'edf8fbccece699d8c966c2a42ca25f006d2c',
            'edf8fbccece699d8c966c2a441ae76238b45005824',
            'f7fcfde5f5f9ccece699d8c966c2a441ae76238b45005824',
            'f7fcfde5f5f9ccece699d8c966c2a441ae76238b45006d2c00441b'
          )
          .map(Pw),
        cx = Bw(ux),
        fx = new Array(3)
          .concat(
            'e0ecf49ebcda8856a7',
            'edf8fbb3cde38c96c688419d',
            'edf8fbb3cde38c96c68856a7810f7c',
            'edf8fbbfd3e69ebcda8c96c68856a7810f7c',
            'edf8fbbfd3e69ebcda8c96c68c6bb188419d6e016b',
            'f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d6e016b',
            'f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d810f7c4d004b'
          )
          .map(Pw),
        sx = Bw(fx),
        lx = new Array(3)
          .concat(
            'e0f3dba8ddb543a2ca',
            'f0f9e8bae4bc7bccc42b8cbe',
            'f0f9e8bae4bc7bccc443a2ca0868ac',
            'f0f9e8ccebc5a8ddb57bccc443a2ca0868ac',
            'f0f9e8ccebc5a8ddb57bccc44eb3d32b8cbe08589e',
            'f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe08589e',
            'f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe0868ac084081'
          )
          .map(Pw),
        hx = Bw(lx),
        dx = new Array(3)
          .concat(
            'fee8c8fdbb84e34a33',
            'fef0d9fdcc8afc8d59d7301f',
            'fef0d9fdcc8afc8d59e34a33b30000',
            'fef0d9fdd49efdbb84fc8d59e34a33b30000',
            'fef0d9fdd49efdbb84fc8d59ef6548d7301f990000',
            'fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301f990000',
            'fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301fb300007f0000'
          )
          .map(Pw),
        px = Bw(dx),
        vx = new Array(3)
          .concat(
            'ece2f0a6bddb1c9099',
            'f6eff7bdc9e167a9cf02818a',
            'f6eff7bdc9e167a9cf1c9099016c59',
            'f6eff7d0d1e6a6bddb67a9cf1c9099016c59',
            'f6eff7d0d1e6a6bddb67a9cf3690c002818a016450',
            'fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016450',
            'fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016c59014636'
          )
          .map(Pw),
        yx = Bw(vx),
        gx = new Array(3)
          .concat(
            'ece7f2a6bddb2b8cbe',
            'f1eef6bdc9e174a9cf0570b0',
            'f1eef6bdc9e174a9cf2b8cbe045a8d',
            'f1eef6d0d1e6a6bddb74a9cf2b8cbe045a8d',
            'f1eef6d0d1e6a6bddb74a9cf3690c00570b0034e7b',
            'fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0034e7b',
            'fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0045a8d023858'
          )
          .map(Pw),
        bx = Bw(gx),
        mx = new Array(3)
          .concat(
            'e7e1efc994c7dd1c77',
            'f1eef6d7b5d8df65b0ce1256',
            'f1eef6d7b5d8df65b0dd1c77980043',
            'f1eef6d4b9dac994c7df65b0dd1c77980043',
            'f1eef6d4b9dac994c7df65b0e7298ace125691003f',
            'f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125691003f',
            'f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125698004367001f'
          )
          .map(Pw),
        _x = Bw(mx),
        wx = new Array(3)
          .concat(
            'fde0ddfa9fb5c51b8a',
            'feebe2fbb4b9f768a1ae017e',
            'feebe2fbb4b9f768a1c51b8a7a0177',
            'feebe2fcc5c0fa9fb5f768a1c51b8a7a0177',
            'feebe2fcc5c0fa9fb5f768a1dd3497ae017e7a0177',
            'fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a0177',
            'fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a017749006a'
          )
          .map(Pw),
        xx = Bw(wx),
        Mx = new Array(3)
          .concat(
            'edf8b17fcdbb2c7fb8',
            'ffffcca1dab441b6c4225ea8',
            'ffffcca1dab441b6c42c7fb8253494',
            'ffffccc7e9b47fcdbb41b6c42c7fb8253494',
            'ffffccc7e9b47fcdbb41b6c41d91c0225ea80c2c84',
            'ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea80c2c84',
            'ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea8253494081d58'
          )
          .map(Pw),
        Sx = Bw(Mx),
        Ax = new Array(3)
          .concat(
            'f7fcb9addd8e31a354',
            'ffffccc2e69978c679238443',
            'ffffccc2e69978c67931a354006837',
            'ffffccd9f0a3addd8e78c67931a354006837',
            'ffffccd9f0a3addd8e78c67941ab5d238443005a32',
            'ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443005a32',
            'ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443006837004529'
          )
          .map(Pw),
        Ex = Bw(Ax),
        kx = new Array(3)
          .concat(
            'fff7bcfec44fd95f0e',
            'ffffd4fed98efe9929cc4c02',
            'ffffd4fed98efe9929d95f0e993404',
            'ffffd4fee391fec44ffe9929d95f0e993404',
            'ffffd4fee391fec44ffe9929ec7014cc4c028c2d04',
            'ffffe5fff7bcfee391fec44ffe9929ec7014cc4c028c2d04',
            'ffffe5fff7bcfee391fec44ffe9929ec7014cc4c02993404662506'
          )
          .map(Pw),
        Cx = Bw(kx),
        Tx = new Array(3)
          .concat(
            'ffeda0feb24cf03b20',
            'ffffb2fecc5cfd8d3ce31a1c',
            'ffffb2fecc5cfd8d3cf03b20bd0026',
            'ffffb2fed976feb24cfd8d3cf03b20bd0026',
            'ffffb2fed976feb24cfd8d3cfc4e2ae31a1cb10026',
            'ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cb10026',
            'ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cbd0026800026'
          )
          .map(Pw),
        Ox = Bw(Tx),
        Nx = new Array(3)
          .concat(
            'deebf79ecae13182bd',
            'eff3ffbdd7e76baed62171b5',
            'eff3ffbdd7e76baed63182bd08519c',
            'eff3ffc6dbef9ecae16baed63182bd08519c',
            'eff3ffc6dbef9ecae16baed64292c62171b5084594',
            'f7fbffdeebf7c6dbef9ecae16baed64292c62171b5084594',
            'f7fbffdeebf7c6dbef9ecae16baed64292c62171b508519c08306b'
          )
          .map(Pw),
        Px = Bw(Nx),
        Rx = new Array(3)
          .concat(
            'e5f5e0a1d99b31a354',
            'edf8e9bae4b374c476238b45',
            'edf8e9bae4b374c47631a354006d2c',
            'edf8e9c7e9c0a1d99b74c47631a354006d2c',
            'edf8e9c7e9c0a1d99b74c47641ab5d238b45005a32',
            'f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45005a32',
            'f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45006d2c00441b'
          )
          .map(Pw),
        jx = Bw(Rx),
        Lx = new Array(3)
          .concat(
            'f0f0f0bdbdbd636363',
            'f7f7f7cccccc969696525252',
            'f7f7f7cccccc969696636363252525',
            'f7f7f7d9d9d9bdbdbd969696636363252525',
            'f7f7f7d9d9d9bdbdbd969696737373525252252525',
            'fffffff0f0f0d9d9d9bdbdbd969696737373525252252525',
            'fffffff0f0f0d9d9d9bdbdbd969696737373525252252525000000'
          )
          .map(Pw),
        Ix = Bw(Lx),
        $x = new Array(3)
          .concat(
            'efedf5bcbddc756bb1',
            'f2f0f7cbc9e29e9ac86a51a3',
            'f2f0f7cbc9e29e9ac8756bb154278f',
            'f2f0f7dadaebbcbddc9e9ac8756bb154278f',
            'f2f0f7dadaebbcbddc9e9ac8807dba6a51a34a1486',
            'fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a34a1486',
            'fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a354278f3f007d'
          )
          .map(Pw),
        Fx = Bw($x),
        Dx = new Array(3)
          .concat(
            'fee0d2fc9272de2d26',
            'fee5d9fcae91fb6a4acb181d',
            'fee5d9fcae91fb6a4ade2d26a50f15',
            'fee5d9fcbba1fc9272fb6a4ade2d26a50f15',
            'fee5d9fcbba1fc9272fb6a4aef3b2ccb181d99000d',
            'fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181d99000d',
            'fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181da50f1567000d'
          )
          .map(Pw),
        zx = Bw(Dx),
        Ux = new Array(3)
          .concat(
            'fee6cefdae6be6550d',
            'feeddefdbe85fd8d3cd94701',
            'feeddefdbe85fd8d3ce6550da63603',
            'feeddefdd0a2fdae6bfd8d3ce6550da63603',
            'feeddefdd0a2fdae6bfd8d3cf16913d948018c2d04',
            'fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d948018c2d04',
            'fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d94801a636037f2704'
          )
          .map(Pw),
        Bx = Bw(Ux),
        qx = qi(zr(300, 0.5, 0), zr(-240, 0.5, 1)),
        Vx = qi(zr(-100, 0.75, 0.35), zr(80, 1.5, 0.8)),
        Hx = qi(zr(260, 0.75, 0.35), zr(80, 1.5, 0.8)),
        Yx = zr(),
        Gx = function(t) {
          (t < 0 || t > 1) && (t -= Math.floor(t));
          var n = Math.abs(t - 0.5);
          return (Yx.h = 360 * t - 100), (Yx.s = 1.5 - 1.5 * n), (Yx.l = 0.8 - 0.9 * n), Yx + '';
        },
        Wx = nr(),
        Xx = Math.PI / 3,
        Kx = (2 * Math.PI) / 3,
        Qx = function(t) {
          var n;
          return (
            (t = (0.5 - t) * Math.PI),
            (Wx.r = 255 * (n = Math.sin(t)) * n),
            (Wx.g = 255 * (n = Math.sin(t + Xx)) * n),
            (Wx.b = 255 * (n = Math.sin(t + Kx)) * n),
            Wx + ''
          );
        };
      function Zx(t) {
        var n = t.length;
        return function(e) {
          return t[Math.max(0, Math.min(n - 1, Math.floor(e * n)))];
        };
      }
      var Jx = Zx(
          Pw(
            '44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725'
          )
        ),
        tM = Zx(
          Pw(
            '00000401000501010601010802010902020b02020d03030f03031204041405041606051806051a07061c08071e0907200a08220b09240c09260d0a290e0b2b100b2d110c2f120d31130d34140e36150e38160f3b180f3d19103f1a10421c10441d11471e114920114b21114e22115024125325125527125829115a2a115c2c115f2d11612f116331116533106734106936106b38106c390f6e3b0f703d0f713f0f72400f74420f75440f764510774710784910784a10794c117a4e117b4f127b51127c52137c54137d56147d57157e59157e5a167e5c167f5d177f5f187f601880621980641a80651a80671b80681c816a1c816b1d816d1d816e1e81701f81721f817320817521817621817822817922827b23827c23827e24828025828125818326818426818627818827818928818b29818c29818e2a81902a81912b81932b80942c80962c80982d80992d809b2e7f9c2e7f9e2f7fa02f7fa1307ea3307ea5317ea6317da8327daa337dab337cad347cae347bb0357bb2357bb3367ab5367ab73779b83779ba3878bc3978bd3977bf3a77c03a76c23b75c43c75c53c74c73d73c83e73ca3e72cc3f71cd4071cf4070d0416fd2426fd3436ed5446dd6456cd8456cd9466bdb476adc4869de4968df4a68e04c67e24d66e34e65e44f64e55064e75263e85362e95462ea5661eb5760ec5860ed5a5fee5b5eef5d5ef05f5ef1605df2625df2645cf3655cf4675cf4695cf56b5cf66c5cf66e5cf7705cf7725cf8745cf8765cf9785df9795df97b5dfa7d5efa7f5efa815ffb835ffb8560fb8761fc8961fc8a62fc8c63fc8e64fc9065fd9266fd9467fd9668fd9869fd9a6afd9b6bfe9d6cfe9f6dfea16efea36ffea571fea772fea973feaa74feac76feae77feb078feb27afeb47bfeb67cfeb77efeb97ffebb81febd82febf84fec185fec287fec488fec68afec88cfeca8dfecc8ffecd90fecf92fed194fed395fed597fed799fed89afdda9cfddc9efddea0fde0a1fde2a3fde3a5fde5a7fde7a9fde9aafdebacfcecaefceeb0fcf0b2fcf2b4fcf4b6fcf6b8fcf7b9fcf9bbfcfbbdfcfdbf'
          )
        ),
        nM = Zx(
          Pw(
            '00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4'
          )
        ),
        eM = Zx(
          Pw(
            '0d088710078813078916078a19068c1b068d1d068e20068f2206902406912605912805922a05932c05942e05952f059631059733059735049837049938049a3a049a3c049b3e049c3f049c41049d43039e44039e46039f48039f4903a04b03a14c02a14e02a25002a25102a35302a35502a45601a45801a45901a55b01a55c01a65e01a66001a66100a76300a76400a76600a76700a86900a86a00a86c00a86e00a86f00a87100a87201a87401a87501a87701a87801a87a02a87b02a87d03a87e03a88004a88104a78305a78405a78606a68707a68808a68a09a58b0aa58d0ba58e0ca48f0da4910ea3920fa39410a29511a19613a19814a099159f9a169f9c179e9d189d9e199da01a9ca11b9ba21d9aa31e9aa51f99a62098a72197a82296aa2395ab2494ac2694ad2793ae2892b02991b12a90b22b8fb32c8eb42e8db52f8cb6308bb7318ab83289ba3388bb3488bc3587bd3786be3885bf3984c03a83c13b82c23c81c33d80c43e7fc5407ec6417dc7427cc8437bc9447aca457acb4679cc4778cc4977cd4a76ce4b75cf4c74d04d73d14e72d24f71d35171d45270d5536fd5546ed6556dd7566cd8576bd9586ada5a6ada5b69db5c68dc5d67dd5e66de5f65de6164df6263e06363e16462e26561e26660e3685fe4695ee56a5de56b5de66c5ce76e5be76f5ae87059e97158e97257ea7457eb7556eb7655ec7754ed7953ed7a52ee7b51ef7c51ef7e50f07f4ff0804ef1814df1834cf2844bf3854bf3874af48849f48948f58b47f58c46f68d45f68f44f79044f79143f79342f89441f89540f9973ff9983ef99a3efa9b3dfa9c3cfa9e3bfb9f3afba139fba238fca338fca537fca636fca835fca934fdab33fdac33fdae32fdaf31fdb130fdb22ffdb42ffdb52efeb72dfeb82cfeba2cfebb2bfebd2afebe2afec029fdc229fdc328fdc527fdc627fdc827fdca26fdcb26fccd25fcce25fcd025fcd225fbd324fbd524fbd724fad824fada24f9dc24f9dd25f8df25f8e125f7e225f7e425f6e626f6e826f5e926f5eb27f4ed27f3ee27f3f027f2f227f1f426f1f525f0f724f0f921'
          )
        ),
        rM = function(t) {
          return function() {
            return t;
          };
        },
        iM = Math.abs,
        oM = Math.atan2,
        aM = Math.cos,
        uM = Math.max,
        cM = Math.min,
        fM = Math.sin,
        sM = Math.sqrt,
        lM = 1e-12,
        hM = Math.PI,
        dM = hM / 2,
        pM = 2 * hM;
      function vM(t) {
        return t > 1 ? 0 : t < -1 ? hM : Math.acos(t);
      }
      function yM(t) {
        return t >= 1 ? dM : t <= -1 ? -dM : Math.asin(t);
      }
      function gM(t) {
        return t.innerRadius;
      }
      function bM(t) {
        return t.outerRadius;
      }
      function mM(t) {
        return t.startAngle;
      }
      function _M(t) {
        return t.endAngle;
      }
      function wM(t) {
        return t && t.padAngle;
      }
      function xM(t, n, e, r, i, o, a, u) {
        var c = e - t,
          f = r - n,
          s = a - i,
          l = u - o,
          h = (s * (n - o) - l * (t - i)) / (l * c - s * f);
        return [t + h * c, n + h * f];
      }
      function MM(t, n, e, r, i, o, a) {
        var u = t - e,
          c = n - r,
          f = (a ? o : -o) / sM(u * u + c * c),
          s = f * c,
          l = -f * u,
          h = t + s,
          d = n + l,
          p = e + s,
          v = r + l,
          y = (h + p) / 2,
          g = (d + v) / 2,
          b = p - h,
          m = v - d,
          _ = b * b + m * m,
          w = i - o,
          x = h * v - p * d,
          M = (m < 0 ? -1 : 1) * sM(uM(0, w * w * _ - x * x)),
          S = (x * m - b * M) / _,
          A = (-x * b - m * M) / _,
          E = (x * m + b * M) / _,
          k = (-x * b + m * M) / _,
          C = S - y,
          T = A - g,
          O = E - y,
          N = k - g;
        return (
          C * C + T * T > O * O + N * N && ((S = E), (A = k)),
          { cx: S, cy: A, x01: -s, y01: -l, x11: S * (i / w - 1), y11: A * (i / w - 1) }
        );
      }
      var SM = function() {
        var t = gM,
          n = bM,
          e = rM(0),
          r = null,
          i = mM,
          o = _M,
          a = wM,
          u = null;
        function c() {
          var c,
            f,
            s = +t.apply(this, arguments),
            l = +n.apply(this, arguments),
            h = i.apply(this, arguments) - dM,
            d = o.apply(this, arguments) - dM,
            p = iM(d - h),
            v = d > h;
          if ((u || (u = c = lc()), l < s && ((f = l), (l = s), (s = f)), l > lM))
            if (p > pM - lM)
              u.moveTo(l * aM(h), l * fM(h)),
                u.arc(0, 0, l, h, d, !v),
                s > lM && (u.moveTo(s * aM(d), s * fM(d)), u.arc(0, 0, s, d, h, v));
            else {
              var y,
                g,
                b = h,
                m = d,
                _ = h,
                w = d,
                x = p,
                M = p,
                S = a.apply(this, arguments) / 2,
                A = S > lM && (r ? +r.apply(this, arguments) : sM(s * s + l * l)),
                E = cM(iM(l - s) / 2, +e.apply(this, arguments)),
                k = E,
                C = E;
              if (A > lM) {
                var T = yM((A / s) * fM(S)),
                  O = yM((A / l) * fM(S));
                (x -= 2 * T) > lM ? ((T *= v ? 1 : -1), (_ += T), (w -= T)) : ((x = 0), (_ = w = (h + d) / 2)),
                  (M -= 2 * O) > lM ? ((O *= v ? 1 : -1), (b += O), (m -= O)) : ((M = 0), (b = m = (h + d) / 2));
              }
              var N = l * aM(b),
                P = l * fM(b),
                R = s * aM(w),
                j = s * fM(w);
              if (E > lM) {
                var L = l * aM(m),
                  I = l * fM(m),
                  $ = s * aM(_),
                  F = s * fM(_);
                if (p < hM) {
                  var D = x > lM ? xM(N, P, $, F, L, I, R, j) : [R, j],
                    z = N - D[0],
                    U = P - D[1],
                    B = L - D[0],
                    q = I - D[1],
                    V = 1 / fM(vM((z * B + U * q) / (sM(z * z + U * U) * sM(B * B + q * q))) / 2),
                    H = sM(D[0] * D[0] + D[1] * D[1]);
                  (k = cM(E, (s - H) / (V - 1))), (C = cM(E, (l - H) / (V + 1)));
                }
              }
              M > lM
                ? C > lM
                  ? ((y = MM($, F, N, P, l, C, v)),
                    (g = MM(L, I, R, j, l, C, v)),
                    u.moveTo(y.cx + y.x01, y.cy + y.y01),
                    C < E
                      ? u.arc(y.cx, y.cy, C, oM(y.y01, y.x01), oM(g.y01, g.x01), !v)
                      : (u.arc(y.cx, y.cy, C, oM(y.y01, y.x01), oM(y.y11, y.x11), !v),
                        u.arc(0, 0, l, oM(y.cy + y.y11, y.cx + y.x11), oM(g.cy + g.y11, g.cx + g.x11), !v),
                        u.arc(g.cx, g.cy, C, oM(g.y11, g.x11), oM(g.y01, g.x01), !v)))
                  : (u.moveTo(N, P), u.arc(0, 0, l, b, m, !v))
                : u.moveTo(N, P),
                s > lM && x > lM
                  ? k > lM
                    ? ((y = MM(R, j, L, I, s, -k, v)),
                      (g = MM(N, P, $, F, s, -k, v)),
                      u.lineTo(y.cx + y.x01, y.cy + y.y01),
                      k < E
                        ? u.arc(y.cx, y.cy, k, oM(y.y01, y.x01), oM(g.y01, g.x01), !v)
                        : (u.arc(y.cx, y.cy, k, oM(y.y01, y.x01), oM(y.y11, y.x11), !v),
                          u.arc(0, 0, s, oM(y.cy + y.y11, y.cx + y.x11), oM(g.cy + g.y11, g.cx + g.x11), v),
                          u.arc(g.cx, g.cy, k, oM(g.y11, g.x11), oM(g.y01, g.x01), !v)))
                    : u.arc(0, 0, s, w, _, v)
                  : u.lineTo(R, j);
            }
          else u.moveTo(0, 0);
          if ((u.closePath(), c)) return (u = null), c + '' || null;
        }
        return (
          (c.centroid = function() {
            var e = (+t.apply(this, arguments) + +n.apply(this, arguments)) / 2,
              r = (+i.apply(this, arguments) + +o.apply(this, arguments)) / 2 - hM / 2;
            return [aM(r) * e, fM(r) * e];
          }),
          (c.innerRadius = function(n) {
            return arguments.length ? ((t = 'function' === typeof n ? n : rM(+n)), c) : t;
          }),
          (c.outerRadius = function(t) {
            return arguments.length ? ((n = 'function' === typeof t ? t : rM(+t)), c) : n;
          }),
          (c.cornerRadius = function(t) {
            return arguments.length ? ((e = 'function' === typeof t ? t : rM(+t)), c) : e;
          }),
          (c.padRadius = function(t) {
            return arguments.length ? ((r = null == t ? null : 'function' === typeof t ? t : rM(+t)), c) : r;
          }),
          (c.startAngle = function(t) {
            return arguments.length ? ((i = 'function' === typeof t ? t : rM(+t)), c) : i;
          }),
          (c.endAngle = function(t) {
            return arguments.length ? ((o = 'function' === typeof t ? t : rM(+t)), c) : o;
          }),
          (c.padAngle = function(t) {
            return arguments.length ? ((a = 'function' === typeof t ? t : rM(+t)), c) : a;
          }),
          (c.context = function(t) {
            return arguments.length ? ((u = null == t ? null : t), c) : u;
          }),
          c
        );
      };
      function AM(t) {
        this._context = t;
      }
      AM.prototype = {
        areaStart: function() {
          this._line = 0;
        },
        areaEnd: function() {
          this._line = NaN;
        },
        lineStart: function() {
          this._point = 0;
        },
        lineEnd: function() {
          (this._line || (0 !== this._line && 1 === this._point)) && this._context.closePath(),
            (this._line = 1 - this._line);
        },
        point: function(t, n) {
          switch (((t = +t), (n = +n), this._point)) {
            case 0:
              (this._point = 1), this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
              break;
            case 1:
              this._point = 2;
            default:
              this._context.lineTo(t, n);
              break;
          }
        },
      };
      var EM = function(t) {
        return new AM(t);
      };
      function kM(t) {
        return t[0];
      }
      function CM(t) {
        return t[1];
      }
      var TM = function() {
          var t = kM,
            n = CM,
            e = rM(!0),
            r = null,
            i = EM,
            o = null;
          function a(a) {
            var u,
              c,
              f,
              s = a.length,
              l = !1;
            for (null == r && (o = i((f = lc()))), u = 0; u <= s; ++u)
              !(u < s && e((c = a[u]), u, a)) === l && ((l = !l) ? o.lineStart() : o.lineEnd()),
                l && o.point(+t(c, u, a), +n(c, u, a));
            if (f) return (o = null), f + '' || null;
          }
          return (
            (a.x = function(n) {
              return arguments.length ? ((t = 'function' === typeof n ? n : rM(+n)), a) : t;
            }),
            (a.y = function(t) {
              return arguments.length ? ((n = 'function' === typeof t ? t : rM(+t)), a) : n;
            }),
            (a.defined = function(t) {
              return arguments.length ? ((e = 'function' === typeof t ? t : rM(!!t)), a) : e;
            }),
            (a.curve = function(t) {
              return arguments.length ? ((i = t), null != r && (o = i(r)), a) : i;
            }),
            (a.context = function(t) {
              return arguments.length ? (null == t ? (r = o = null) : (o = i((r = t))), a) : r;
            }),
            a
          );
        },
        OM = function() {
          var t = kM,
            n = null,
            e = rM(0),
            r = CM,
            i = rM(!0),
            o = null,
            a = EM,
            u = null;
          function c(c) {
            var f,
              s,
              l,
              h,
              d,
              p = c.length,
              v = !1,
              y = new Array(p),
              g = new Array(p);
            for (null == o && (u = a((d = lc()))), f = 0; f <= p; ++f) {
              if (!(f < p && i((h = c[f]), f, c)) === v)
                if ((v = !v)) (s = f), u.areaStart(), u.lineStart();
                else {
                  for (u.lineEnd(), u.lineStart(), l = f - 1; l >= s; --l) u.point(y[l], g[l]);
                  u.lineEnd(), u.areaEnd();
                }
              v &&
                ((y[f] = +t(h, f, c)), (g[f] = +e(h, f, c)), u.point(n ? +n(h, f, c) : y[f], r ? +r(h, f, c) : g[f]));
            }
            if (d) return (u = null), d + '' || null;
          }
          function f() {
            return TM()
              .defined(i)
              .curve(a)
              .context(o);
          }
          return (
            (c.x = function(e) {
              return arguments.length ? ((t = 'function' === typeof e ? e : rM(+e)), (n = null), c) : t;
            }),
            (c.x0 = function(n) {
              return arguments.length ? ((t = 'function' === typeof n ? n : rM(+n)), c) : t;
            }),
            (c.x1 = function(t) {
              return arguments.length ? ((n = null == t ? null : 'function' === typeof t ? t : rM(+t)), c) : n;
            }),
            (c.y = function(t) {
              return arguments.length ? ((e = 'function' === typeof t ? t : rM(+t)), (r = null), c) : e;
            }),
            (c.y0 = function(t) {
              return arguments.length ? ((e = 'function' === typeof t ? t : rM(+t)), c) : e;
            }),
            (c.y1 = function(t) {
              return arguments.length ? ((r = null == t ? null : 'function' === typeof t ? t : rM(+t)), c) : r;
            }),
            (c.lineX0 = c.lineY0 = function() {
              return f()
                .x(t)
                .y(e);
            }),
            (c.lineY1 = function() {
              return f()
                .x(t)
                .y(r);
            }),
            (c.lineX1 = function() {
              return f()
                .x(n)
                .y(e);
            }),
            (c.defined = function(t) {
              return arguments.length ? ((i = 'function' === typeof t ? t : rM(!!t)), c) : i;
            }),
            (c.curve = function(t) {
              return arguments.length ? ((a = t), null != o && (u = a(o)), c) : a;
            }),
            (c.context = function(t) {
              return arguments.length ? (null == t ? (o = u = null) : (u = a((o = t))), c) : o;
            }),
            c
          );
        },
        NM = function(t, n) {
          return n < t ? -1 : n > t ? 1 : n >= t ? 0 : NaN;
        },
        PM = function(t) {
          return t;
        },
        RM = function() {
          var t = PM,
            n = NM,
            e = null,
            r = rM(0),
            i = rM(pM),
            o = rM(0);
          function a(a) {
            var u,
              c,
              f,
              s,
              l,
              h = a.length,
              d = 0,
              p = new Array(h),
              v = new Array(h),
              y = +r.apply(this, arguments),
              g = Math.min(pM, Math.max(-pM, i.apply(this, arguments) - y)),
              b = Math.min(Math.abs(g) / h, o.apply(this, arguments)),
              m = b * (g < 0 ? -1 : 1);
            for (u = 0; u < h; ++u) (l = v[(p[u] = u)] = +t(a[u], u, a)) > 0 && (d += l);
            for (
              null != n
                ? p.sort(function(t, e) {
                    return n(v[t], v[e]);
                  })
                : null != e &&
                  p.sort(function(t, n) {
                    return e(a[t], a[n]);
                  }),
                u = 0,
                f = d ? (g - h * m) / d : 0;
              u < h;
              ++u, y = s
            )
              (c = p[u]),
                (l = v[c]),
                (s = y + (l > 0 ? l * f : 0) + m),
                (v[c] = { data: a[c], index: u, value: l, startAngle: y, endAngle: s, padAngle: b });
            return v;
          }
          return (
            (a.value = function(n) {
              return arguments.length ? ((t = 'function' === typeof n ? n : rM(+n)), a) : t;
            }),
            (a.sortValues = function(t) {
              return arguments.length ? ((n = t), (e = null), a) : n;
            }),
            (a.sort = function(t) {
              return arguments.length ? ((e = t), (n = null), a) : e;
            }),
            (a.startAngle = function(t) {
              return arguments.length ? ((r = 'function' === typeof t ? t : rM(+t)), a) : r;
            }),
            (a.endAngle = function(t) {
              return arguments.length ? ((i = 'function' === typeof t ? t : rM(+t)), a) : i;
            }),
            (a.padAngle = function(t) {
              return arguments.length ? ((o = 'function' === typeof t ? t : rM(+t)), a) : o;
            }),
            a
          );
        },
        jM = IM(EM);
      function LM(t) {
        this._curve = t;
      }
      function IM(t) {
        function n(n) {
          return new LM(t(n));
        }
        return (n._curve = t), n;
      }
      function $M(t) {
        var n = t.curve;
        return (
          (t.angle = t.x),
          delete t.x,
          (t.radius = t.y),
          delete t.y,
          (t.curve = function(t) {
            return arguments.length ? n(IM(t)) : n()._curve;
          }),
          t
        );
      }
      LM.prototype = {
        areaStart: function() {
          this._curve.areaStart();
        },
        areaEnd: function() {
          this._curve.areaEnd();
        },
        lineStart: function() {
          this._curve.lineStart();
        },
        lineEnd: function() {
          this._curve.lineEnd();
        },
        point: function(t, n) {
          this._curve.point(n * Math.sin(t), n * -Math.cos(t));
        },
      };
      var FM = function() {
          return $M(TM().curve(jM));
        },
        DM = function() {
          var t = OM().curve(jM),
            n = t.curve,
            e = t.lineX0,
            r = t.lineX1,
            i = t.lineY0,
            o = t.lineY1;
          return (
            (t.angle = t.x),
            delete t.x,
            (t.startAngle = t.x0),
            delete t.x0,
            (t.endAngle = t.x1),
            delete t.x1,
            (t.radius = t.y),
            delete t.y,
            (t.innerRadius = t.y0),
            delete t.y0,
            (t.outerRadius = t.y1),
            delete t.y1,
            (t.lineStartAngle = function() {
              return $M(e());
            }),
            delete t.lineX0,
            (t.lineEndAngle = function() {
              return $M(r());
            }),
            delete t.lineX1,
            (t.lineInnerRadius = function() {
              return $M(i());
            }),
            delete t.lineY0,
            (t.lineOuterRadius = function() {
              return $M(o());
            }),
            delete t.lineY1,
            (t.curve = function(t) {
              return arguments.length ? n(IM(t)) : n()._curve;
            }),
            t
          );
        },
        zM = function(t, n) {
          return [(n = +n) * Math.cos((t -= Math.PI / 2)), n * Math.sin(t)];
        },
        UM = Array.prototype.slice;
      function BM(t) {
        return t.source;
      }
      function qM(t) {
        return t.target;
      }
      function VM(t) {
        var n = BM,
          e = qM,
          r = kM,
          i = CM,
          o = null;
        function a() {
          var a,
            u = UM.call(arguments),
            c = n.apply(this, u),
            f = e.apply(this, u);
          if (
            (o || (o = a = lc()),
            t(
              o,
              +r.apply(this, ((u[0] = c), u)),
              +i.apply(this, u),
              +r.apply(this, ((u[0] = f), u)),
              +i.apply(this, u)
            ),
            a)
          )
            return (o = null), a + '' || null;
        }
        return (
          (a.source = function(t) {
            return arguments.length ? ((n = t), a) : n;
          }),
          (a.target = function(t) {
            return arguments.length ? ((e = t), a) : e;
          }),
          (a.x = function(t) {
            return arguments.length ? ((r = 'function' === typeof t ? t : rM(+t)), a) : r;
          }),
          (a.y = function(t) {
            return arguments.length ? ((i = 'function' === typeof t ? t : rM(+t)), a) : i;
          }),
          (a.context = function(t) {
            return arguments.length ? ((o = null == t ? null : t), a) : o;
          }),
          a
        );
      }
      function HM(t, n, e, r, i) {
        t.moveTo(n, e), t.bezierCurveTo((n = (n + r) / 2), e, n, i, r, i);
      }
      function YM(t, n, e, r, i) {
        t.moveTo(n, e), t.bezierCurveTo(n, (e = (e + i) / 2), r, e, r, i);
      }
      function GM(t, n, e, r, i) {
        var o = zM(n, e),
          a = zM(n, (e = (e + i) / 2)),
          u = zM(r, e),
          c = zM(r, i);
        t.moveTo(o[0], o[1]), t.bezierCurveTo(a[0], a[1], u[0], u[1], c[0], c[1]);
      }
      function WM() {
        return VM(HM);
      }
      function XM() {
        return VM(YM);
      }
      function KM() {
        var t = VM(GM);
        return (t.angle = t.x), delete t.x, (t.radius = t.y), delete t.y, t;
      }
      var QM = {
          draw: function(t, n) {
            var e = Math.sqrt(n / hM);
            t.moveTo(e, 0), t.arc(0, 0, e, 0, pM);
          },
        },
        ZM = {
          draw: function(t, n) {
            var e = Math.sqrt(n / 5) / 2;
            t.moveTo(-3 * e, -e),
              t.lineTo(-e, -e),
              t.lineTo(-e, -3 * e),
              t.lineTo(e, -3 * e),
              t.lineTo(e, -e),
              t.lineTo(3 * e, -e),
              t.lineTo(3 * e, e),
              t.lineTo(e, e),
              t.lineTo(e, 3 * e),
              t.lineTo(-e, 3 * e),
              t.lineTo(-e, e),
              t.lineTo(-3 * e, e),
              t.closePath();
          },
        },
        JM = Math.sqrt(1 / 3),
        tS = 2 * JM,
        nS = {
          draw: function(t, n) {
            var e = Math.sqrt(n / tS),
              r = e * JM;
            t.moveTo(0, -e), t.lineTo(r, 0), t.lineTo(0, e), t.lineTo(-r, 0), t.closePath();
          },
        },
        eS = 0.8908130915292852,
        rS = Math.sin(hM / 10) / Math.sin((7 * hM) / 10),
        iS = Math.sin(pM / 10) * rS,
        oS = -Math.cos(pM / 10) * rS,
        aS = {
          draw: function(t, n) {
            var e = Math.sqrt(n * eS),
              r = iS * e,
              i = oS * e;
            t.moveTo(0, -e), t.lineTo(r, i);
            for (var o = 1; o < 5; ++o) {
              var a = (pM * o) / 5,
                u = Math.cos(a),
                c = Math.sin(a);
              t.lineTo(c * e, -u * e), t.lineTo(u * r - c * i, c * r + u * i);
            }
            t.closePath();
          },
        },
        uS = {
          draw: function(t, n) {
            var e = Math.sqrt(n),
              r = -e / 2;
            t.rect(r, r, e, e);
          },
        },
        cS = Math.sqrt(3),
        fS = {
          draw: function(t, n) {
            var e = -Math.sqrt(n / (3 * cS));
            t.moveTo(0, 2 * e), t.lineTo(-cS * e, -e), t.lineTo(cS * e, -e), t.closePath();
          },
        },
        sS = -0.5,
        lS = Math.sqrt(3) / 2,
        hS = 1 / Math.sqrt(12),
        dS = 3 * (hS / 2 + 1),
        pS = {
          draw: function(t, n) {
            var e = Math.sqrt(n / dS),
              r = e / 2,
              i = e * hS,
              o = r,
              a = e * hS + e,
              u = -o,
              c = a;
            t.moveTo(r, i),
              t.lineTo(o, a),
              t.lineTo(u, c),
              t.lineTo(sS * r - lS * i, lS * r + sS * i),
              t.lineTo(sS * o - lS * a, lS * o + sS * a),
              t.lineTo(sS * u - lS * c, lS * u + sS * c),
              t.lineTo(sS * r + lS * i, sS * i - lS * r),
              t.lineTo(sS * o + lS * a, sS * a - lS * o),
              t.lineTo(sS * u + lS * c, sS * c - lS * u),
              t.closePath();
          },
        },
        vS = [QM, ZM, nS, uS, aS, fS, pS],
        yS = function() {
          var t = rM(QM),
            n = rM(64),
            e = null;
          function r() {
            var r;
            if ((e || (e = r = lc()), t.apply(this, arguments).draw(e, +n.apply(this, arguments)), r))
              return (e = null), r + '' || null;
          }
          return (
            (r.type = function(n) {
              return arguments.length ? ((t = 'function' === typeof n ? n : rM(n)), r) : t;
            }),
            (r.size = function(t) {
              return arguments.length ? ((n = 'function' === typeof t ? t : rM(+t)), r) : n;
            }),
            (r.context = function(t) {
              return arguments.length ? ((e = null == t ? null : t), r) : e;
            }),
            r
          );
        },
        gS = function() {};
      function bS(t, n, e) {
        t._context.bezierCurveTo(
          (2 * t._x0 + t._x1) / 3,
          (2 * t._y0 + t._y1) / 3,
          (t._x0 + 2 * t._x1) / 3,
          (t._y0 + 2 * t._y1) / 3,
          (t._x0 + 4 * t._x1 + n) / 6,
          (t._y0 + 4 * t._y1 + e) / 6
        );
      }
      function mS(t) {
        this._context = t;
      }
      mS.prototype = {
        areaStart: function() {
          this._line = 0;
        },
        areaEnd: function() {
          this._line = NaN;
        },
        lineStart: function() {
          (this._x0 = this._x1 = this._y0 = this._y1 = NaN), (this._point = 0);
        },
        lineEnd: function() {
          switch (this._point) {
            case 3:
              bS(this, this._x1, this._y1);
            case 2:
              this._context.lineTo(this._x1, this._y1);
              break;
          }
          (this._line || (0 !== this._line && 1 === this._point)) && this._context.closePath(),
            (this._line = 1 - this._line);
        },
        point: function(t, n) {
          switch (((t = +t), (n = +n), this._point)) {
            case 0:
              (this._point = 1), this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
              break;
            case 1:
              this._point = 2;
              break;
            case 2:
              (this._point = 3), this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6);
            default:
              bS(this, t, n);
              break;
          }
          (this._x0 = this._x1), (this._x1 = t), (this._y0 = this._y1), (this._y1 = n);
        },
      };
      var _S = function(t) {
        return new mS(t);
      };
      function wS(t) {
        this._context = t;
      }
      wS.prototype = {
        areaStart: gS,
        areaEnd: gS,
        lineStart: function() {
          (this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN),
            (this._point = 0);
        },
        lineEnd: function() {
          switch (this._point) {
            case 1:
              this._context.moveTo(this._x2, this._y2), this._context.closePath();
              break;
            case 2:
              this._context.moveTo((this._x2 + 2 * this._x3) / 3, (this._y2 + 2 * this._y3) / 3),
                this._context.lineTo((this._x3 + 2 * this._x2) / 3, (this._y3 + 2 * this._y2) / 3),
                this._context.closePath();
              break;
            case 3:
              this.point(this._x2, this._y2), this.point(this._x3, this._y3), this.point(this._x4, this._y4);
              break;
          }
        },
        point: function(t, n) {
          switch (((t = +t), (n = +n), this._point)) {
            case 0:
              (this._point = 1), (this._x2 = t), (this._y2 = n);
              break;
            case 1:
              (this._point = 2), (this._x3 = t), (this._y3 = n);
              break;
            case 2:
              (this._point = 3),
                (this._x4 = t),
                (this._y4 = n),
                this._context.moveTo((this._x0 + 4 * this._x1 + t) / 6, (this._y0 + 4 * this._y1 + n) / 6);
              break;
            default:
              bS(this, t, n);
              break;
          }
          (this._x0 = this._x1), (this._x1 = t), (this._y0 = this._y1), (this._y1 = n);
        },
      };
      var xS = function(t) {
        return new wS(t);
      };
      function MS(t) {
        this._context = t;
      }
      MS.prototype = {
        areaStart: function() {
          this._line = 0;
        },
        areaEnd: function() {
          this._line = NaN;
        },
        lineStart: function() {
          (this._x0 = this._x1 = this._y0 = this._y1 = NaN), (this._point = 0);
        },
        lineEnd: function() {
          (this._line || (0 !== this._line && 3 === this._point)) && this._context.closePath(),
            (this._line = 1 - this._line);
        },
        point: function(t, n) {
          switch (((t = +t), (n = +n), this._point)) {
            case 0:
              this._point = 1;
              break;
            case 1:
              this._point = 2;
              break;
            case 2:
              this._point = 3;
              var e = (this._x0 + 4 * this._x1 + t) / 6,
                r = (this._y0 + 4 * this._y1 + n) / 6;
              this._line ? this._context.lineTo(e, r) : this._context.moveTo(e, r);
              break;
            case 3:
              this._point = 4;
            default:
              bS(this, t, n);
              break;
          }
          (this._x0 = this._x1), (this._x1 = t), (this._y0 = this._y1), (this._y1 = n);
        },
      };
      var SS = function(t) {
        return new MS(t);
      };
      function AS(t, n) {
        (this._basis = new mS(t)), (this._beta = n);
      }
      AS.prototype = {
        lineStart: function() {
          (this._x = []), (this._y = []), this._basis.lineStart();
        },
        lineEnd: function() {
          var t = this._x,
            n = this._y,
            e = t.length - 1;
          if (e > 0) {
            var r,
              i = t[0],
              o = n[0],
              a = t[e] - i,
              u = n[e] - o,
              c = -1;
            while (++c <= e)
              (r = c / e),
                this._basis.point(
                  this._beta * t[c] + (1 - this._beta) * (i + r * a),
                  this._beta * n[c] + (1 - this._beta) * (o + r * u)
                );
          }
          (this._x = this._y = null), this._basis.lineEnd();
        },
        point: function(t, n) {
          this._x.push(+t), this._y.push(+n);
        },
      };
      var ES = (function t(n) {
        function e(t) {
          return 1 === n ? new mS(t) : new AS(t, n);
        }
        return (
          (e.beta = function(n) {
            return t(+n);
          }),
          e
        );
      })(0.85);
      function kS(t, n, e) {
        t._context.bezierCurveTo(
          t._x1 + t._k * (t._x2 - t._x0),
          t._y1 + t._k * (t._y2 - t._y0),
          t._x2 + t._k * (t._x1 - n),
          t._y2 + t._k * (t._y1 - e),
          t._x2,
          t._y2
        );
      }
      function CS(t, n) {
        (this._context = t), (this._k = (1 - n) / 6);
      }
      CS.prototype = {
        areaStart: function() {
          this._line = 0;
        },
        areaEnd: function() {
          this._line = NaN;
        },
        lineStart: function() {
          (this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN), (this._point = 0);
        },
        lineEnd: function() {
          switch (this._point) {
            case 2:
              this._context.lineTo(this._x2, this._y2);
              break;
            case 3:
              kS(this, this._x1, this._y1);
              break;
          }
          (this._line || (0 !== this._line && 1 === this._point)) && this._context.closePath(),
            (this._line = 1 - this._line);
        },
        point: function(t, n) {
          switch (((t = +t), (n = +n), this._point)) {
            case 0:
              (this._point = 1), this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
              break;
            case 1:
              (this._point = 2), (this._x1 = t), (this._y1 = n);
              break;
            case 2:
              this._point = 3;
            default:
              kS(this, t, n);
              break;
          }
          (this._x0 = this._x1),
            (this._x1 = this._x2),
            (this._x2 = t),
            (this._y0 = this._y1),
            (this._y1 = this._y2),
            (this._y2 = n);
        },
      };
      var TS = (function t(n) {
        function e(t) {
          return new CS(t, n);
        }
        return (
          (e.tension = function(n) {
            return t(+n);
          }),
          e
        );
      })(0);
      function OS(t, n) {
        (this._context = t), (this._k = (1 - n) / 6);
      }
      OS.prototype = {
        areaStart: gS,
        areaEnd: gS,
        lineStart: function() {
          (this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN),
            (this._point = 0);
        },
        lineEnd: function() {
          switch (this._point) {
            case 1:
              this._context.moveTo(this._x3, this._y3), this._context.closePath();
              break;
            case 2:
              this._context.lineTo(this._x3, this._y3), this._context.closePath();
              break;
            case 3:
              this.point(this._x3, this._y3), this.point(this._x4, this._y4), this.point(this._x5, this._y5);
              break;
          }
        },
        point: function(t, n) {
          switch (((t = +t), (n = +n), this._point)) {
            case 0:
              (this._point = 1), (this._x3 = t), (this._y3 = n);
              break;
            case 1:
              (this._point = 2), this._context.moveTo((this._x4 = t), (this._y4 = n));
              break;
            case 2:
              (this._point = 3), (this._x5 = t), (this._y5 = n);
              break;
            default:
              kS(this, t, n);
              break;
          }
          (this._x0 = this._x1),
            (this._x1 = this._x2),
            (this._x2 = t),
            (this._y0 = this._y1),
            (this._y1 = this._y2),
            (this._y2 = n);
        },
      };
      var NS = (function t(n) {
        function e(t) {
          return new OS(t, n);
        }
        return (
          (e.tension = function(n) {
            return t(+n);
          }),
          e
        );
      })(0);
      function PS(t, n) {
        (this._context = t), (this._k = (1 - n) / 6);
      }
      PS.prototype = {
        areaStart: function() {
          this._line = 0;
        },
        areaEnd: function() {
          this._line = NaN;
        },
        lineStart: function() {
          (this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN), (this._point = 0);
        },
        lineEnd: function() {
          (this._line || (0 !== this._line && 3 === this._point)) && this._context.closePath(),
            (this._line = 1 - this._line);
        },
        point: function(t, n) {
          switch (((t = +t), (n = +n), this._point)) {
            case 0:
              this._point = 1;
              break;
            case 1:
              this._point = 2;
              break;
            case 2:
              (this._point = 3),
                this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
              break;
            case 3:
              this._point = 4;
            default:
              kS(this, t, n);
              break;
          }
          (this._x0 = this._x1),
            (this._x1 = this._x2),
            (this._x2 = t),
            (this._y0 = this._y1),
            (this._y1 = this._y2),
            (this._y2 = n);
        },
      };
      var RS = (function t(n) {
        function e(t) {
          return new PS(t, n);
        }
        return (
          (e.tension = function(n) {
            return t(+n);
          }),
          e
        );
      })(0);
      function jS(t, n, e) {
        var r = t._x1,
          i = t._y1,
          o = t._x2,
          a = t._y2;
        if (t._l01_a > lM) {
          var u = 2 * t._l01_2a + 3 * t._l01_a * t._l12_a + t._l12_2a,
            c = 3 * t._l01_a * (t._l01_a + t._l12_a);
          (r = (r * u - t._x0 * t._l12_2a + t._x2 * t._l01_2a) / c),
            (i = (i * u - t._y0 * t._l12_2a + t._y2 * t._l01_2a) / c);
        }
        if (t._l23_a > lM) {
          var f = 2 * t._l23_2a + 3 * t._l23_a * t._l12_a + t._l12_2a,
            s = 3 * t._l23_a * (t._l23_a + t._l12_a);
          (o = (o * f + t._x1 * t._l23_2a - n * t._l12_2a) / s), (a = (a * f + t._y1 * t._l23_2a - e * t._l12_2a) / s);
        }
        t._context.bezierCurveTo(r, i, o, a, t._x2, t._y2);
      }
      function LS(t, n) {
        (this._context = t), (this._alpha = n);
      }
      LS.prototype = {
        areaStart: function() {
          this._line = 0;
        },
        areaEnd: function() {
          this._line = NaN;
        },
        lineStart: function() {
          (this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN),
            (this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0);
        },
        lineEnd: function() {
          switch (this._point) {
            case 2:
              this._context.lineTo(this._x2, this._y2);
              break;
            case 3:
              this.point(this._x2, this._y2);
              break;
          }
          (this._line || (0 !== this._line && 1 === this._point)) && this._context.closePath(),
            (this._line = 1 - this._line);
        },
        point: function(t, n) {
          if (((t = +t), (n = +n), this._point)) {
            var e = this._x2 - t,
              r = this._y2 - n;
            this._l23_a = Math.sqrt((this._l23_2a = Math.pow(e * e + r * r, this._alpha)));
          }
          switch (this._point) {
            case 0:
              (this._point = 1), this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
              break;
            case 1:
              this._point = 2;
              break;
            case 2:
              this._point = 3;
            default:
              jS(this, t, n);
              break;
          }
          (this._l01_a = this._l12_a),
            (this._l12_a = this._l23_a),
            (this._l01_2a = this._l12_2a),
            (this._l12_2a = this._l23_2a),
            (this._x0 = this._x1),
            (this._x1 = this._x2),
            (this._x2 = t),
            (this._y0 = this._y1),
            (this._y1 = this._y2),
            (this._y2 = n);
        },
      };
      var IS = (function t(n) {
        function e(t) {
          return n ? new LS(t, n) : new CS(t, 0);
        }
        return (
          (e.alpha = function(n) {
            return t(+n);
          }),
          e
        );
      })(0.5);
      function $S(t, n) {
        (this._context = t), (this._alpha = n);
      }
      $S.prototype = {
        areaStart: gS,
        areaEnd: gS,
        lineStart: function() {
          (this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN),
            (this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0);
        },
        lineEnd: function() {
          switch (this._point) {
            case 1:
              this._context.moveTo(this._x3, this._y3), this._context.closePath();
              break;
            case 2:
              this._context.lineTo(this._x3, this._y3), this._context.closePath();
              break;
            case 3:
              this.point(this._x3, this._y3), this.point(this._x4, this._y4), this.point(this._x5, this._y5);
              break;
          }
        },
        point: function(t, n) {
          if (((t = +t), (n = +n), this._point)) {
            var e = this._x2 - t,
              r = this._y2 - n;
            this._l23_a = Math.sqrt((this._l23_2a = Math.pow(e * e + r * r, this._alpha)));
          }
          switch (this._point) {
            case 0:
              (this._point = 1), (this._x3 = t), (this._y3 = n);
              break;
            case 1:
              (this._point = 2), this._context.moveTo((this._x4 = t), (this._y4 = n));
              break;
            case 2:
              (this._point = 3), (this._x5 = t), (this._y5 = n);
              break;
            default:
              jS(this, t, n);
              break;
          }
          (this._l01_a = this._l12_a),
            (this._l12_a = this._l23_a),
            (this._l01_2a = this._l12_2a),
            (this._l12_2a = this._l23_2a),
            (this._x0 = this._x1),
            (this._x1 = this._x2),
            (this._x2 = t),
            (this._y0 = this._y1),
            (this._y1 = this._y2),
            (this._y2 = n);
        },
      };
      var FS = (function t(n) {
        function e(t) {
          return n ? new $S(t, n) : new OS(t, 0);
        }
        return (
          (e.alpha = function(n) {
            return t(+n);
          }),
          e
        );
      })(0.5);
      function DS(t, n) {
        (this._context = t), (this._alpha = n);
      }
      DS.prototype = {
        areaStart: function() {
          this._line = 0;
        },
        areaEnd: function() {
          this._line = NaN;
        },
        lineStart: function() {
          (this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN),
            (this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0);
        },
        lineEnd: function() {
          (this._line || (0 !== this._line && 3 === this._point)) && this._context.closePath(),
            (this._line = 1 - this._line);
        },
        point: function(t, n) {
          if (((t = +t), (n = +n), this._point)) {
            var e = this._x2 - t,
              r = this._y2 - n;
            this._l23_a = Math.sqrt((this._l23_2a = Math.pow(e * e + r * r, this._alpha)));
          }
          switch (this._point) {
            case 0:
              this._point = 1;
              break;
            case 1:
              this._point = 2;
              break;
            case 2:
              (this._point = 3),
                this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
              break;
            case 3:
              this._point = 4;
            default:
              jS(this, t, n);
              break;
          }
          (this._l01_a = this._l12_a),
            (this._l12_a = this._l23_a),
            (this._l01_2a = this._l12_2a),
            (this._l12_2a = this._l23_2a),
            (this._x0 = this._x1),
            (this._x1 = this._x2),
            (this._x2 = t),
            (this._y0 = this._y1),
            (this._y1 = this._y2),
            (this._y2 = n);
        },
      };
      var zS = (function t(n) {
        function e(t) {
          return n ? new DS(t, n) : new PS(t, 0);
        }
        return (
          (e.alpha = function(n) {
            return t(+n);
          }),
          e
        );
      })(0.5);
      function US(t) {
        this._context = t;
      }
      US.prototype = {
        areaStart: gS,
        areaEnd: gS,
        lineStart: function() {
          this._point = 0;
        },
        lineEnd: function() {
          this._point && this._context.closePath();
        },
        point: function(t, n) {
          (t = +t),
            (n = +n),
            this._point ? this._context.lineTo(t, n) : ((this._point = 1), this._context.moveTo(t, n));
        },
      };
      var BS = function(t) {
        return new US(t);
      };
      function qS(t) {
        return t < 0 ? -1 : 1;
      }
      function VS(t, n, e) {
        var r = t._x1 - t._x0,
          i = n - t._x1,
          o = (t._y1 - t._y0) / (r || (i < 0 && -0)),
          a = (e - t._y1) / (i || (r < 0 && -0)),
          u = (o * i + a * r) / (r + i);
        return (qS(o) + qS(a)) * Math.min(Math.abs(o), Math.abs(a), 0.5 * Math.abs(u)) || 0;
      }
      function HS(t, n) {
        var e = t._x1 - t._x0;
        return e ? ((3 * (t._y1 - t._y0)) / e - n) / 2 : n;
      }
      function YS(t, n, e) {
        var r = t._x0,
          i = t._y0,
          o = t._x1,
          a = t._y1,
          u = (o - r) / 3;
        t._context.bezierCurveTo(r + u, i + u * n, o - u, a - u * e, o, a);
      }
      function GS(t) {
        this._context = t;
      }
      function WS(t) {
        this._context = new XS(t);
      }
      function XS(t) {
        this._context = t;
      }
      function KS(t) {
        return new GS(t);
      }
      function QS(t) {
        return new WS(t);
      }
      function ZS(t) {
        this._context = t;
      }
      function JS(t) {
        var n,
          e,
          r = t.length - 1,
          i = new Array(r),
          o = new Array(r),
          a = new Array(r);
        for (i[0] = 0, o[0] = 2, a[0] = t[0] + 2 * t[1], n = 1; n < r - 1; ++n)
          (i[n] = 1), (o[n] = 4), (a[n] = 4 * t[n] + 2 * t[n + 1]);
        for (i[r - 1] = 2, o[r - 1] = 7, a[r - 1] = 8 * t[r - 1] + t[r], n = 1; n < r; ++n)
          (e = i[n] / o[n - 1]), (o[n] -= e), (a[n] -= e * a[n - 1]);
        for (i[r - 1] = a[r - 1] / o[r - 1], n = r - 2; n >= 0; --n) i[n] = (a[n] - i[n + 1]) / o[n];
        for (o[r - 1] = (t[r] + i[r - 1]) / 2, n = 0; n < r - 1; ++n) o[n] = 2 * t[n + 1] - i[n + 1];
        return [i, o];
      }
      (GS.prototype = {
        areaStart: function() {
          this._line = 0;
        },
        areaEnd: function() {
          this._line = NaN;
        },
        lineStart: function() {
          (this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN), (this._point = 0);
        },
        lineEnd: function() {
          switch (this._point) {
            case 2:
              this._context.lineTo(this._x1, this._y1);
              break;
            case 3:
              YS(this, this._t0, HS(this, this._t0));
              break;
          }
          (this._line || (0 !== this._line && 1 === this._point)) && this._context.closePath(),
            (this._line = 1 - this._line);
        },
        point: function(t, n) {
          var e = NaN;
          if (((t = +t), (n = +n), t !== this._x1 || n !== this._y1)) {
            switch (this._point) {
              case 0:
                (this._point = 1), this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
                break;
              case 1:
                this._point = 2;
                break;
              case 2:
                (this._point = 3), YS(this, HS(this, (e = VS(this, t, n))), e);
                break;
              default:
                YS(this, this._t0, (e = VS(this, t, n)));
                break;
            }
            (this._x0 = this._x1), (this._x1 = t), (this._y0 = this._y1), (this._y1 = n), (this._t0 = e);
          }
        },
      }),
        ((WS.prototype = Object.create(GS.prototype)).point = function(t, n) {
          GS.prototype.point.call(this, n, t);
        }),
        (XS.prototype = {
          moveTo: function(t, n) {
            this._context.moveTo(n, t);
          },
          closePath: function() {
            this._context.closePath();
          },
          lineTo: function(t, n) {
            this._context.lineTo(n, t);
          },
          bezierCurveTo: function(t, n, e, r, i, o) {
            this._context.bezierCurveTo(n, t, r, e, o, i);
          },
        }),
        (ZS.prototype = {
          areaStart: function() {
            this._line = 0;
          },
          areaEnd: function() {
            this._line = NaN;
          },
          lineStart: function() {
            (this._x = []), (this._y = []);
          },
          lineEnd: function() {
            var t = this._x,
              n = this._y,
              e = t.length;
            if (e)
              if ((this._line ? this._context.lineTo(t[0], n[0]) : this._context.moveTo(t[0], n[0]), 2 === e))
                this._context.lineTo(t[1], n[1]);
              else
                for (var r = JS(t), i = JS(n), o = 0, a = 1; a < e; ++o, ++a)
                  this._context.bezierCurveTo(r[0][o], i[0][o], r[1][o], i[1][o], t[a], n[a]);
            (this._line || (0 !== this._line && 1 === e)) && this._context.closePath(),
              (this._line = 1 - this._line),
              (this._x = this._y = null);
          },
          point: function(t, n) {
            this._x.push(+t), this._y.push(+n);
          },
        });
      var tA = function(t) {
        return new ZS(t);
      };
      function nA(t, n) {
        (this._context = t), (this._t = n);
      }
      nA.prototype = {
        areaStart: function() {
          this._line = 0;
        },
        areaEnd: function() {
          this._line = NaN;
        },
        lineStart: function() {
          (this._x = this._y = NaN), (this._point = 0);
        },
        lineEnd: function() {
          0 < this._t && this._t < 1 && 2 === this._point && this._context.lineTo(this._x, this._y),
            (this._line || (0 !== this._line && 1 === this._point)) && this._context.closePath(),
            this._line >= 0 && ((this._t = 1 - this._t), (this._line = 1 - this._line));
        },
        point: function(t, n) {
          switch (((t = +t), (n = +n), this._point)) {
            case 0:
              (this._point = 1), this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
              break;
            case 1:
              this._point = 2;
            default:
              if (this._t <= 0) this._context.lineTo(this._x, n), this._context.lineTo(t, n);
              else {
                var e = this._x * (1 - this._t) + t * this._t;
                this._context.lineTo(e, this._y), this._context.lineTo(e, n);
              }
              break;
          }
          (this._x = t), (this._y = n);
        },
      };
      var eA = function(t) {
        return new nA(t, 0.5);
      };
      function rA(t) {
        return new nA(t, 0);
      }
      function iA(t) {
        return new nA(t, 1);
      }
      var oA = function(t, n) {
          if ((i = t.length) > 1)
            for (var e, r, i, o = 1, a = t[n[0]], u = a.length; o < i; ++o)
              for (r = a, a = t[n[o]], e = 0; e < u; ++e) a[e][1] += a[e][0] = isNaN(r[e][1]) ? r[e][0] : r[e][1];
        },
        aA = function(t) {
          var n = t.length,
            e = new Array(n);
          while (--n >= 0) e[n] = n;
          return e;
        };
      function uA(t, n) {
        return t[n];
      }
      var cA = function() {
          var t = rM([]),
            n = aA,
            e = oA,
            r = uA;
          function i(i) {
            var o,
              a,
              u = t.apply(this, arguments),
              c = i.length,
              f = u.length,
              s = new Array(f);
            for (o = 0; o < f; ++o) {
              for (var l, h = u[o], d = (s[o] = new Array(c)), p = 0; p < c; ++p)
                (d[p] = l = [0, +r(i[p], h, p, i)]), (l.data = i[p]);
              d.key = h;
            }
            for (o = 0, a = n(s); o < f; ++o) s[a[o]].index = o;
            return e(s, a), s;
          }
          return (
            (i.keys = function(n) {
              return arguments.length ? ((t = 'function' === typeof n ? n : rM(UM.call(n))), i) : t;
            }),
            (i.value = function(t) {
              return arguments.length ? ((r = 'function' === typeof t ? t : rM(+t)), i) : r;
            }),
            (i.order = function(t) {
              return arguments.length ? ((n = null == t ? aA : 'function' === typeof t ? t : rM(UM.call(t))), i) : n;
            }),
            (i.offset = function(t) {
              return arguments.length ? ((e = null == t ? oA : t), i) : e;
            }),
            i
          );
        },
        fA = function(t, n) {
          if ((r = t.length) > 0) {
            for (var e, r, i, o = 0, a = t[0].length; o < a; ++o) {
              for (i = e = 0; e < r; ++e) i += t[e][o][1] || 0;
              if (i) for (e = 0; e < r; ++e) t[e][o][1] /= i;
            }
            oA(t, n);
          }
        },
        sA = function(t, n) {
          if ((u = t.length) > 1)
            for (var e, r, i, o, a, u, c = 0, f = t[n[0]].length; c < f; ++c)
              for (o = a = 0, e = 0; e < u; ++e)
                (i = (r = t[n[e]][c])[1] - r[0]) >= 0
                  ? ((r[0] = o), (r[1] = o += i))
                  : i < 0
                    ? ((r[1] = a), (r[0] = a += i))
                    : (r[0] = o);
        },
        lA = function(t, n) {
          if ((e = t.length) > 0) {
            for (var e, r = 0, i = t[n[0]], o = i.length; r < o; ++r) {
              for (var a = 0, u = 0; a < e; ++a) u += t[a][r][1] || 0;
              i[r][1] += i[r][0] = -u / 2;
            }
            oA(t, n);
          }
        },
        hA = function(t, n) {
          if ((i = t.length) > 0 && (r = (e = t[n[0]]).length) > 0) {
            for (var e, r, i, o = 0, a = 1; a < r; ++a) {
              for (var u = 0, c = 0, f = 0; u < i; ++u) {
                for (var s = t[n[u]], l = s[a][1] || 0, h = s[a - 1][1] || 0, d = (l - h) / 2, p = 0; p < u; ++p) {
                  var v = t[n[p]],
                    y = v[a][1] || 0,
                    g = v[a - 1][1] || 0;
                  d += y - g;
                }
                (c += l), (f += d * l);
              }
              (e[a - 1][1] += e[a - 1][0] = o), c && (o -= f / c);
            }
            (e[a - 1][1] += e[a - 1][0] = o), oA(t, n);
          }
        },
        dA = function(t) {
          var n = t.map(pA);
          return aA(t).sort(function(t, e) {
            return n[t] - n[e];
          });
        };
      function pA(t) {
        var n,
          e = 0,
          r = -1,
          i = t.length;
        while (++r < i) (n = +t[r][1]) && (e += n);
        return e;
      }
      var vA = function(t) {
          return dA(t).reverse();
        },
        yA = function(t) {
          var n,
            e,
            r = t.length,
            i = t.map(pA),
            o = aA(t).sort(function(t, n) {
              return i[n] - i[t];
            }),
            a = 0,
            u = 0,
            c = [],
            f = [];
          for (n = 0; n < r; ++n) (e = o[n]), a < u ? ((a += i[e]), c.push(e)) : ((u += i[e]), f.push(e));
          return f.reverse().concat(c);
        },
        gA = function(t) {
          return aA(t).reverse();
        },
        bA = function(t) {
          return function() {
            return t;
          };
        };
      function mA(t) {
        return t[0];
      }
      function _A(t) {
        return t[1];
      }
      function wA() {
        this._ = null;
      }
      function xA(t) {
        t.U = t.C = t.L = t.R = t.P = t.N = null;
      }
      function MA(t, n) {
        var e = n,
          r = n.R,
          i = e.U;
        i ? (i.L === e ? (i.L = r) : (i.R = r)) : (t._ = r),
          (r.U = i),
          (e.U = r),
          (e.R = r.L),
          e.R && (e.R.U = e),
          (r.L = e);
      }
      function SA(t, n) {
        var e = n,
          r = n.L,
          i = e.U;
        i ? (i.L === e ? (i.L = r) : (i.R = r)) : (t._ = r),
          (r.U = i),
          (e.U = r),
          (e.L = r.R),
          e.L && (e.L.U = e),
          (r.R = e);
      }
      function AA(t) {
        while (t.L) t = t.L;
        return t;
      }
      wA.prototype = {
        constructor: wA,
        insert: function(t, n) {
          var e, r, i;
          if (t) {
            if (((n.P = t), (n.N = t.N), t.N && (t.N.P = n), (t.N = n), t.R)) {
              t = t.R;
              while (t.L) t = t.L;
              t.L = n;
            } else t.R = n;
            e = t;
          } else
            this._
              ? ((t = AA(this._)), (n.P = null), (n.N = t), (t.P = t.L = n), (e = t))
              : ((n.P = n.N = null), (this._ = n), (e = null));
          (n.L = n.R = null), (n.U = e), (n.C = !0), (t = n);
          while (e && e.C)
            (r = e.U),
              e === r.L
                ? ((i = r.R),
                  i && i.C
                    ? ((e.C = i.C = !1), (r.C = !0), (t = r))
                    : (t === e.R && (MA(this, e), (t = e), (e = t.U)), (e.C = !1), (r.C = !0), SA(this, r)))
                : ((i = r.L),
                  i && i.C
                    ? ((e.C = i.C = !1), (r.C = !0), (t = r))
                    : (t === e.L && (SA(this, e), (t = e), (e = t.U)), (e.C = !1), (r.C = !0), MA(this, r))),
              (e = t.U);
          this._.C = !1;
        },
        remove: function(t) {
          t.N && (t.N.P = t.P), t.P && (t.P.N = t.N), (t.N = t.P = null);
          var n,
            e,
            r,
            i = t.U,
            o = t.L,
            a = t.R;
          if (
            ((e = o ? (a ? AA(a) : o) : a),
            i ? (i.L === t ? (i.L = e) : (i.R = e)) : (this._ = e),
            o && a
              ? ((r = e.C),
                (e.C = t.C),
                (e.L = o),
                (o.U = e),
                e !== a
                  ? ((i = e.U), (e.U = t.U), (t = e.R), (i.L = t), (e.R = a), (a.U = e))
                  : ((e.U = i), (i = e), (t = e.R)))
              : ((r = t.C), (t = e)),
            t && (t.U = i),
            !r)
          )
            if (t && t.C) t.C = !1;
            else {
              do {
                if (t === this._) break;
                if (t === i.L) {
                  if (
                    ((n = i.R),
                    n.C && ((n.C = !1), (i.C = !0), MA(this, i), (n = i.R)),
                    (n.L && n.L.C) || (n.R && n.R.C))
                  ) {
                    (n.R && n.R.C) || ((n.L.C = !1), (n.C = !0), SA(this, n), (n = i.R)),
                      (n.C = i.C),
                      (i.C = n.R.C = !1),
                      MA(this, i),
                      (t = this._);
                    break;
                  }
                } else if (
                  ((n = i.L), n.C && ((n.C = !1), (i.C = !0), SA(this, i), (n = i.L)), (n.L && n.L.C) || (n.R && n.R.C))
                ) {
                  (n.L && n.L.C) || ((n.R.C = !1), (n.C = !0), MA(this, n), (n = i.L)),
                    (n.C = i.C),
                    (i.C = n.L.C = !1),
                    SA(this, i),
                    (t = this._);
                  break;
                }
                (n.C = !0), (t = i), (i = i.U);
              } while (!t.C);
              t && (t.C = !1);
            }
        },
      };
      var EA = wA;
      function kA(t, n, e, r) {
        var i = [null, null],
          o = nE.push(i) - 1;
        return (
          (i.left = t),
          (i.right = n),
          e && TA(i, t, n, e),
          r && TA(i, n, t, r),
          JA[t.index].halfedges.push(o),
          JA[n.index].halfedges.push(o),
          i
        );
      }
      function CA(t, n, e) {
        var r = [n, e];
        return (r.left = t), r;
      }
      function TA(t, n, e, r) {
        t[0] || t[1] ? (t.left === e ? (t[1] = r) : (t[0] = r)) : ((t[0] = r), (t.left = n), (t.right = e));
      }
      function OA(t, n, e, r, i) {
        var o,
          a = t[0],
          u = t[1],
          c = a[0],
          f = a[1],
          s = u[0],
          l = u[1],
          h = 0,
          d = 1,
          p = s - c,
          v = l - f;
        if (((o = n - c), p || !(o > 0))) {
          if (((o /= p), p < 0)) {
            if (o < h) return;
            o < d && (d = o);
          } else if (p > 0) {
            if (o > d) return;
            o > h && (h = o);
          }
          if (((o = r - c), p || !(o < 0))) {
            if (((o /= p), p < 0)) {
              if (o > d) return;
              o > h && (h = o);
            } else if (p > 0) {
              if (o < h) return;
              o < d && (d = o);
            }
            if (((o = e - f), v || !(o > 0))) {
              if (((o /= v), v < 0)) {
                if (o < h) return;
                o < d && (d = o);
              } else if (v > 0) {
                if (o > d) return;
                o > h && (h = o);
              }
              if (((o = i - f), v || !(o < 0))) {
                if (((o /= v), v < 0)) {
                  if (o > d) return;
                  o > h && (h = o);
                } else if (v > 0) {
                  if (o < h) return;
                  o < d && (d = o);
                }
                return (
                  !(h > 0 || d < 1) ||
                  (h > 0 && (t[0] = [c + h * p, f + h * v]), d < 1 && (t[1] = [c + d * p, f + d * v]), !0)
                );
              }
            }
          }
        }
      }
      function NA(t, n, e, r, i) {
        var o = t[1];
        if (o) return !0;
        var a,
          u,
          c = t[0],
          f = t.left,
          s = t.right,
          l = f[0],
          h = f[1],
          d = s[0],
          p = s[1],
          v = (l + d) / 2,
          y = (h + p) / 2;
        if (p === h) {
          if (v < n || v >= r) return;
          if (l > d) {
            if (c) {
              if (c[1] >= i) return;
            } else c = [v, e];
            o = [v, i];
          } else {
            if (c) {
              if (c[1] < e) return;
            } else c = [v, i];
            o = [v, e];
          }
        } else if (((a = (l - d) / (p - h)), (u = y - a * v), a < -1 || a > 1))
          if (l > d) {
            if (c) {
              if (c[1] >= i) return;
            } else c = [(e - u) / a, e];
            o = [(i - u) / a, i];
          } else {
            if (c) {
              if (c[1] < e) return;
            } else c = [(i - u) / a, i];
            o = [(e - u) / a, e];
          }
        else if (h < p) {
          if (c) {
            if (c[0] >= r) return;
          } else c = [n, a * n + u];
          o = [r, a * r + u];
        } else {
          if (c) {
            if (c[0] < n) return;
          } else c = [r, a * r + u];
          o = [n, a * n + u];
        }
        return (t[0] = c), (t[1] = o), !0;
      }
      function PA(t, n, e, r) {
        var i,
          o = nE.length;
        while (o--)
          (NA((i = nE[o]), t, n, e, r) &&
            OA(i, t, n, e, r) &&
            (Math.abs(i[0][0] - i[1][0]) > eE || Math.abs(i[0][1] - i[1][1]) > eE)) ||
            delete nE[o];
      }
      function RA(t) {
        return (JA[t.index] = { site: t, halfedges: [] });
      }
      function jA(t, n) {
        var e = t.site,
          r = n.left,
          i = n.right;
        return (
          e === i && ((i = r), (r = e)),
          i
            ? Math.atan2(i[1] - r[1], i[0] - r[0])
            : (e === r ? ((r = n[1]), (i = n[0])) : ((r = n[0]), (i = n[1])), Math.atan2(r[0] - i[0], i[1] - r[1]))
        );
      }
      function LA(t, n) {
        return n[+(n.left !== t.site)];
      }
      function IA(t, n) {
        return n[+(n.left === t.site)];
      }
      function $A() {
        for (var t, n, e, r, i = 0, o = JA.length; i < o; ++i)
          if ((t = JA[i]) && (r = (n = t.halfedges).length)) {
            var a = new Array(r),
              u = new Array(r);
            for (e = 0; e < r; ++e) (a[e] = e), (u[e] = jA(t, nE[n[e]]));
            for (
              a.sort(function(t, n) {
                return u[n] - u[t];
              }),
                e = 0;
              e < r;
              ++e
            )
              u[e] = n[a[e]];
            for (e = 0; e < r; ++e) n[e] = u[e];
          }
      }
      function FA(t, n, e, r) {
        var i,
          o,
          a,
          u,
          c,
          f,
          s,
          l,
          h,
          d,
          p,
          v,
          y = JA.length,
          g = !0;
        for (i = 0; i < y; ++i)
          if ((o = JA[i])) {
            (a = o.site), (c = o.halfedges), (u = c.length);
            while (u--) nE[c[u]] || c.splice(u, 1);
            (u = 0), (f = c.length);
            while (u < f)
              (d = IA(o, nE[c[u]])),
                (p = d[0]),
                (v = d[1]),
                (s = LA(o, nE[c[++u % f]])),
                (l = s[0]),
                (h = s[1]),
                (Math.abs(p - l) > eE || Math.abs(v - h) > eE) &&
                  (c.splice(
                    u,
                    0,
                    nE.push(
                      CA(
                        a,
                        d,
                        Math.abs(p - t) < eE && r - v > eE
                          ? [t, Math.abs(l - t) < eE ? h : r]
                          : Math.abs(v - r) < eE && e - p > eE
                            ? [Math.abs(h - r) < eE ? l : e, r]
                            : Math.abs(p - e) < eE && v - n > eE
                              ? [e, Math.abs(l - e) < eE ? h : n]
                              : Math.abs(v - n) < eE && p - t > eE
                                ? [Math.abs(h - n) < eE ? l : t, n]
                                : null
                      )
                    ) - 1
                  ),
                  ++f);
            f && (g = !1);
          }
        if (g) {
          var b,
            m,
            _,
            w = 1 / 0;
          for (i = 0, g = null; i < y; ++i)
            (o = JA[i]) &&
              ((a = o.site), (b = a[0] - t), (m = a[1] - n), (_ = b * b + m * m), _ < w && ((w = _), (g = o)));
          if (g) {
            var x = [t, n],
              M = [t, r],
              S = [e, r],
              A = [e, n];
            g.halfedges.push(
              nE.push(CA((a = g.site), x, M)) - 1,
              nE.push(CA(a, M, S)) - 1,
              nE.push(CA(a, S, A)) - 1,
              nE.push(CA(a, A, x)) - 1
            );
          }
        }
        for (i = 0; i < y; ++i) (o = JA[i]) && (o.halfedges.length || delete JA[i]);
      }
      var DA,
        zA = [];
      function UA() {
        xA(this), (this.x = this.y = this.arc = this.site = this.cy = null);
      }
      function BA(t) {
        var n = t.P,
          e = t.N;
        if (n && e) {
          var r = n.site,
            i = t.site,
            o = e.site;
          if (r !== o) {
            var a = i[0],
              u = i[1],
              c = r[0] - a,
              f = r[1] - u,
              s = o[0] - a,
              l = o[1] - u,
              h = 2 * (c * l - f * s);
            if (!(h >= -rE)) {
              var d = c * c + f * f,
                p = s * s + l * l,
                v = (l * d - f * p) / h,
                y = (c * p - s * d) / h,
                g = zA.pop() || new UA();
              (g.arc = t),
                (g.site = i),
                (g.x = v + a),
                (g.y = (g.cy = y + u) + Math.sqrt(v * v + y * y)),
                (t.circle = g);
              var b = null,
                m = tE._;
              while (m)
                if (g.y < m.y || (g.y === m.y && g.x <= m.x)) {
                  if (!m.L) {
                    b = m.P;
                    break;
                  }
                  m = m.L;
                } else {
                  if (!m.R) {
                    b = m;
                    break;
                  }
                  m = m.R;
                }
              tE.insert(b, g), b || (DA = g);
            }
          }
        }
      }
      function qA(t) {
        var n = t.circle;
        n && (n.P || (DA = n.N), tE.remove(n), zA.push(n), xA(n), (t.circle = null));
      }
      var VA = [];
      function HA() {
        xA(this), (this.edge = this.site = this.circle = null);
      }
      function YA(t) {
        var n = VA.pop() || new HA();
        return (n.site = t), n;
      }
      function GA(t) {
        qA(t), ZA.remove(t), VA.push(t), xA(t);
      }
      function WA(t) {
        var n = t.circle,
          e = n.x,
          r = n.cy,
          i = [e, r],
          o = t.P,
          a = t.N,
          u = [t];
        GA(t);
        var c = o;
        while (c.circle && Math.abs(e - c.circle.x) < eE && Math.abs(r - c.circle.cy) < eE)
          (o = c.P), u.unshift(c), GA(c), (c = o);
        u.unshift(c), qA(c);
        var f = a;
        while (f.circle && Math.abs(e - f.circle.x) < eE && Math.abs(r - f.circle.cy) < eE)
          (a = f.N), u.push(f), GA(f), (f = a);
        u.push(f), qA(f);
        var s,
          l = u.length;
        for (s = 1; s < l; ++s) (f = u[s]), (c = u[s - 1]), TA(f.edge, c.site, f.site, i);
        (c = u[0]), (f = u[l - 1]), (f.edge = kA(c.site, f.site, null, i)), BA(c), BA(f);
      }
      function XA(t) {
        var n,
          e,
          r,
          i,
          o = t[0],
          a = t[1],
          u = ZA._;
        while (u)
          if (((r = KA(u, a) - o), r > eE)) u = u.L;
          else {
            if (((i = o - QA(u, a)), !(i > eE))) {
              r > -eE ? ((n = u.P), (e = u)) : i > -eE ? ((n = u), (e = u.N)) : (n = e = u);
              break;
            }
            if (!u.R) {
              n = u;
              break;
            }
            u = u.R;
          }
        RA(t);
        var c = YA(t);
        if ((ZA.insert(n, c), n || e)) {
          if (n === e)
            return qA(n), (e = YA(n.site)), ZA.insert(c, e), (c.edge = e.edge = kA(n.site, c.site)), BA(n), void BA(e);
          if (e) {
            qA(n), qA(e);
            var f = n.site,
              s = f[0],
              l = f[1],
              h = t[0] - s,
              d = t[1] - l,
              p = e.site,
              v = p[0] - s,
              y = p[1] - l,
              g = 2 * (h * y - d * v),
              b = h * h + d * d,
              m = v * v + y * y,
              _ = [(y * b - d * m) / g + s, (h * m - v * b) / g + l];
            TA(e.edge, f, p, _), (c.edge = kA(f, t, null, _)), (e.edge = kA(t, p, null, _)), BA(n), BA(e);
          } else c.edge = kA(n.site, c.site);
        }
      }
      function KA(t, n) {
        var e = t.site,
          r = e[0],
          i = e[1],
          o = i - n;
        if (!o) return r;
        var a = t.P;
        if (!a) return -1 / 0;
        e = a.site;
        var u = e[0],
          c = e[1],
          f = c - n;
        if (!f) return u;
        var s = u - r,
          l = 1 / o - 1 / f,
          h = s / f;
        return l ? (-h + Math.sqrt(h * h - 2 * l * ((s * s) / (-2 * f) - c + f / 2 + i - o / 2))) / l + r : (r + u) / 2;
      }
      function QA(t, n) {
        var e = t.N;
        if (e) return KA(e, n);
        var r = t.site;
        return r[1] === n ? r[0] : 1 / 0;
      }
      var ZA,
        JA,
        tE,
        nE,
        eE = 1e-6,
        rE = 1e-12;
      function iE(t, n, e) {
        return (t[0] - e[0]) * (n[1] - t[1]) - (t[0] - n[0]) * (e[1] - t[1]);
      }
      function oE(t, n) {
        return n[1] - t[1] || n[0] - t[0];
      }
      function aE(t, n) {
        var e,
          r,
          i,
          o = t.sort(oE).pop();
        (nE = []), (JA = new Array(t.length)), (ZA = new EA()), (tE = new EA());
        while (1)
          if (((i = DA), o && (!i || o[1] < i.y || (o[1] === i.y && o[0] < i.x))))
            (o[0] === e && o[1] === r) || (XA(o), (e = o[0]), (r = o[1])), (o = t.pop());
          else {
            if (!i) break;
            WA(i.arc);
          }
        if (($A(), n)) {
          var a = +n[0][0],
            u = +n[0][1],
            c = +n[1][0],
            f = +n[1][1];
          PA(a, u, c, f), FA(a, u, c, f);
        }
        (this.edges = nE), (this.cells = JA), (ZA = tE = nE = JA = null);
      }
      aE.prototype = {
        constructor: aE,
        polygons: function() {
          var t = this.edges;
          return this.cells.map(function(n) {
            var e = n.halfedges.map(function(e) {
              return LA(n, t[e]);
            });
            return (e.data = n.site.data), e;
          });
        },
        triangles: function() {
          var t = [],
            n = this.edges;
          return (
            this.cells.forEach(function(e, r) {
              if ((o = (i = e.halfedges).length)) {
                var i,
                  o,
                  a,
                  u = e.site,
                  c = -1,
                  f = n[i[o - 1]],
                  s = f.left === u ? f.right : f.left;
                while (++c < o)
                  (a = s),
                    (f = n[i[c]]),
                    (s = f.left === u ? f.right : f.left),
                    a && s && r < a.index && r < s.index && iE(u, a, s) < 0 && t.push([u.data, a.data, s.data]);
              }
            }),
            t
          );
        },
        links: function() {
          return this.edges
            .filter(function(t) {
              return t.right;
            })
            .map(function(t) {
              return { source: t.left.data, target: t.right.data };
            });
        },
        find: function(t, n, e) {
          var r,
            i,
            o = this,
            a = o._found || 0,
            u = o.cells.length;
          while (!(i = o.cells[a])) if (++a >= u) return null;
          var c = t - i.site[0],
            f = n - i.site[1],
            s = c * c + f * f;
          do {
            (i = o.cells[(r = a)]),
              (a = null),
              i.halfedges.forEach(function(e) {
                var r = o.edges[e],
                  u = r.left;
                if ((u !== i.site && u) || (u = r.right)) {
                  var c = t - u[0],
                    f = n - u[1],
                    l = c * c + f * f;
                  l < s && ((s = l), (a = u.index));
                }
              });
          } while (null !== a);
          return (o._found = r), null == e || s <= e * e ? i.site : null;
        },
      };
      var uE = function() {
          var t = mA,
            n = _A,
            e = null;
          function r(r) {
            return new aE(
              r.map(function(e, i) {
                var o = [Math.round(t(e, i, r) / eE) * eE, Math.round(n(e, i, r) / eE) * eE];
                return (o.index = i), (o.data = e), o;
              }),
              e
            );
          }
          return (
            (r.polygons = function(t) {
              return r(t).polygons();
            }),
            (r.links = function(t) {
              return r(t).links();
            }),
            (r.triangles = function(t) {
              return r(t).triangles();
            }),
            (r.x = function(n) {
              return arguments.length ? ((t = 'function' === typeof n ? n : bA(+n)), r) : t;
            }),
            (r.y = function(t) {
              return arguments.length ? ((n = 'function' === typeof t ? t : bA(+t)), r) : n;
            }),
            (r.extent = function(t) {
              return arguments.length
                ? ((e = null == t ? null : [[+t[0][0], +t[0][1]], [+t[1][0], +t[1][1]]]), r)
                : e && [[e[0][0], e[0][1]], [e[1][0], e[1][1]]];
            }),
            (r.size = function(t) {
              return arguments.length
                ? ((e = null == t ? null : [[0, 0], [+t[0], +t[1]]]), r)
                : e && [e[1][0] - e[0][0], e[1][1] - e[0][1]];
            }),
            r
          );
        },
        cE = function(t) {
          return function() {
            return t;
          };
        };
      function fE(t, n, e) {
        (this.target = t), (this.type = n), (this.transform = e);
      }
      function sE(t, n, e) {
        (this.k = t), (this.x = n), (this.y = e);
      }
      sE.prototype = {
        constructor: sE,
        scale: function(t) {
          return 1 === t ? this : new sE(this.k * t, this.x, this.y);
        },
        translate: function(t, n) {
          return (0 === t) & (0 === n) ? this : new sE(this.k, this.x + this.k * t, this.y + this.k * n);
        },
        apply: function(t) {
          return [t[0] * this.k + this.x, t[1] * this.k + this.y];
        },
        applyX: function(t) {
          return t * this.k + this.x;
        },
        applyY: function(t) {
          return t * this.k + this.y;
        },
        invert: function(t) {
          return [(t[0] - this.x) / this.k, (t[1] - this.y) / this.k];
        },
        invertX: function(t) {
          return (t - this.x) / this.k;
        },
        invertY: function(t) {
          return (t - this.y) / this.k;
        },
        rescaleX: function(t) {
          return t.copy().domain(
            t
              .range()
              .map(this.invertX, this)
              .map(t.invert, t)
          );
        },
        rescaleY: function(t) {
          return t.copy().domain(
            t
              .range()
              .map(this.invertY, this)
              .map(t.invert, t)
          );
        },
        toString: function() {
          return 'translate(' + this.x + ',' + this.y + ') scale(' + this.k + ')';
        },
      };
      var lE = new sE(1, 0, 0);
      function hE(t) {
        return t.__zoom || lE;
      }
      function dE() {
        Xn.stopImmediatePropagation();
      }
      hE.prototype = sE.prototype;
      var pE = function() {
        Xn.preventDefault(), Xn.stopImmediatePropagation();
      };
      function vE() {
        return !Xn.button;
      }
      function yE() {
        var t,
          n,
          e = this;
        return (
          e instanceof SVGElement
            ? ((e = e.ownerSVGElement || e), (t = e.width.baseVal.value), (n = e.height.baseVal.value))
            : ((t = e.clientWidth), (n = e.clientHeight)),
          [[0, 0], [t, n]]
        );
      }
      function gE() {
        return this.__zoom || lE;
      }
      function bE() {
        return (-Xn.deltaY * (Xn.deltaMode ? 120 : 1)) / 500;
      }
      function mE() {
        return 'ontouchstart' in this;
      }
      function _E(t, n, e) {
        var r = t.invertX(n[0][0]) - e[0][0],
          i = t.invertX(n[1][0]) - e[1][0],
          o = t.invertY(n[0][1]) - e[0][1],
          a = t.invertY(n[1][1]) - e[1][1];
        return t.translate(
          i > r ? (r + i) / 2 : Math.min(0, r) || Math.max(0, i),
          a > o ? (o + a) / 2 : Math.min(0, o) || Math.max(0, a)
        );
      }
      var wE = function() {
        var t,
          n,
          e = vE,
          r = yE,
          i = _E,
          o = bE,
          a = mE,
          u = [0, 1 / 0],
          c = [[-1 / 0, -1 / 0], [1 / 0, 1 / 0]],
          f = 250,
          s = Ri,
          l = [],
          h = gt('start', 'zoom', 'end'),
          d = 500,
          p = 150,
          v = 0;
        function y(t) {
          t.property('__zoom', gE)
            .on('wheel.zoom', M)
            .on('mousedown.zoom', S)
            .on('dblclick.zoom', A)
            .filter(a)
            .on('touchstart.zoom', E)
            .on('touchmove.zoom', k)
            .on('touchend.zoom touchcancel.zoom', C)
            .style('touch-action', 'none')
            .style('-webkit-tap-highlight-color', 'rgba(0,0,0,0)');
        }
        function g(t, n) {
          return (n = Math.max(u[0], Math.min(u[1], n))), n === t.k ? t : new sE(n, t.x, t.y);
        }
        function b(t, n, e) {
          var r = n[0] - e[0] * t.k,
            i = n[1] - e[1] * t.k;
          return r === t.x && i === t.y ? t : new sE(t.k, r, i);
        }
        function m(t) {
          return [(+t[0][0] + +t[1][0]) / 2, (+t[0][1] + +t[1][1]) / 2];
        }
        function _(t, n, e) {
          t.on('start.zoom', function() {
            w(this, arguments).start();
          })
            .on('interrupt.zoom end.zoom', function() {
              w(this, arguments).end();
            })
            .tween('zoom', function() {
              var t = this,
                i = arguments,
                o = w(t, i),
                a = r.apply(t, i),
                u = e || m(a),
                c = Math.max(a[1][0] - a[0][0], a[1][1] - a[0][1]),
                f = t.__zoom,
                l = 'function' === typeof n ? n.apply(t, i) : n,
                h = s(f.invert(u).concat(c / f.k), l.invert(u).concat(c / l.k));
              return function(t) {
                if (1 === t) t = l;
                else {
                  var n = h(t),
                    e = c / n[2];
                  t = new sE(e, u[0] - n[0] * e, u[1] - n[1] * e);
                }
                o.zoom(null, t);
              };
            });
        }
        function w(t, n) {
          for (var e, r = 0, i = l.length; r < i; ++r) if ((e = l[r]).that === t) return e;
          return new x(t, n);
        }
        function x(t, n) {
          (this.that = t), (this.args = n), (this.index = -1), (this.active = 0), (this.extent = r.apply(t, n));
        }
        function M() {
          if (e.apply(this, arguments)) {
            var t = w(this, arguments),
              n = this.__zoom,
              r = Math.max(u[0], Math.min(u[1], n.k * Math.pow(2, o.apply(this, arguments)))),
              a = me(this);
            if (t.wheel)
              (t.mouse[0][0] === a[0] && t.mouse[0][1] === a[1]) || (t.mouse[1] = n.invert((t.mouse[0] = a))),
                clearTimeout(t.wheel);
            else {
              if (n.k === r) return;
              (t.mouse = [a, n.invert(a)]), To(this), t.start();
            }
            pE(), (t.wheel = setTimeout(f, p)), t.zoom('mouse', i(b(g(n, r), t.mouse[0], t.mouse[1]), t.extent, c));
          }
          function f() {
            (t.wheel = null), t.end();
          }
        }
        function S() {
          if (!n && e.apply(this, arguments)) {
            var t = w(this, arguments),
              r = he(Xn.view)
                .on('mousemove.zoom', f, !0)
                .on('mouseup.zoom', s, !0),
              o = me(this),
              a = Xn.clientX,
              u = Xn.clientY;
            Ae(Xn.view), dE(), (t.mouse = [o, this.__zoom.invert(o)]), To(this), t.start();
          }
          function f() {
            if ((pE(), !t.moved)) {
              var n = Xn.clientX - a,
                e = Xn.clientY - u;
              t.moved = n * n + e * e > v;
            }
            t.zoom('mouse', i(b(t.that.__zoom, (t.mouse[0] = me(t.that)), t.mouse[1]), t.extent, c));
          }
          function s() {
            r.on('mousemove.zoom mouseup.zoom', null), Ee(Xn.view, t.moved), pE(), t.end();
          }
        }
        function A() {
          if (e.apply(this, arguments)) {
            var t = this.__zoom,
              n = me(this),
              o = t.invert(n),
              a = t.k * (Xn.shiftKey ? 0.5 : 2),
              u = i(b(g(t, a), n, o), r.apply(this, arguments), c);
            pE(),
              f > 0
                ? he(this)
                    .transition()
                    .duration(f)
                    .call(_, u, n)
                : he(this).call(y.transform, u);
          }
        }
        function E() {
          if (e.apply(this, arguments)) {
            var n,
              r,
              i,
              o,
              a = w(this, arguments),
              u = Xn.changedTouches,
              c = u.length;
            for (dE(), r = 0; r < c; ++r)
              (i = u[r]),
                (o = we(this, u, i.identifier)),
                (o = [o, this.__zoom.invert(o), i.identifier]),
                a.touch0 ? a.touch1 || (a.touch1 = o) : ((a.touch0 = o), (n = !0));
            if (t && ((t = clearTimeout(t)), !a.touch1))
              return a.end(), (o = he(this).on('dblclick.zoom')), void (o && o.apply(this, arguments));
            n &&
              ((t = setTimeout(function() {
                t = null;
              }, d)),
              To(this),
              a.start());
          }
        }
        function k() {
          var n,
            e,
            r,
            o,
            a = w(this, arguments),
            u = Xn.changedTouches,
            f = u.length;
          for (pE(), t && (t = clearTimeout(t)), n = 0; n < f; ++n)
            (e = u[n]),
              (r = we(this, u, e.identifier)),
              a.touch0 && a.touch0[2] === e.identifier
                ? (a.touch0[0] = r)
                : a.touch1 && a.touch1[2] === e.identifier && (a.touch1[0] = r);
          if (((e = a.that.__zoom), a.touch1)) {
            var s = a.touch0[0],
              l = a.touch0[1],
              h = a.touch1[0],
              d = a.touch1[1],
              p = (p = h[0] - s[0]) * p + (p = h[1] - s[1]) * p,
              v = (v = d[0] - l[0]) * v + (v = d[1] - l[1]) * v;
            (e = g(e, Math.sqrt(p / v))),
              (r = [(s[0] + h[0]) / 2, (s[1] + h[1]) / 2]),
              (o = [(l[0] + d[0]) / 2, (l[1] + d[1]) / 2]);
          } else {
            if (!a.touch0) return;
            (r = a.touch0[0]), (o = a.touch0[1]);
          }
          a.zoom('touch', i(b(e, r, o), a.extent, c));
        }
        function C() {
          var t,
            e,
            r = w(this, arguments),
            i = Xn.changedTouches,
            o = i.length;
          for (
            dE(),
              n && clearTimeout(n),
              n = setTimeout(function() {
                n = null;
              }, d),
              t = 0;
            t < o;
            ++t
          )
            (e = i[t]),
              r.touch0 && r.touch0[2] === e.identifier
                ? delete r.touch0
                : r.touch1 && r.touch1[2] === e.identifier && delete r.touch1;
          r.touch1 && !r.touch0 && ((r.touch0 = r.touch1), delete r.touch1),
            r.touch0 ? (r.touch0[1] = this.__zoom.invert(r.touch0[0])) : r.end();
        }
        return (
          (y.transform = function(t, n) {
            var e = t.selection ? t.selection() : t;
            e.property('__zoom', gE),
              t !== e
                ? _(t, n)
                : e.interrupt().each(function() {
                    w(this, arguments)
                      .start()
                      .zoom(null, 'function' === typeof n ? n.apply(this, arguments) : n)
                      .end();
                  });
          }),
          (y.scaleBy = function(t, n) {
            y.scaleTo(t, function() {
              var t = this.__zoom.k,
                e = 'function' === typeof n ? n.apply(this, arguments) : n;
              return t * e;
            });
          }),
          (y.scaleTo = function(t, n) {
            y.transform(t, function() {
              var t = r.apply(this, arguments),
                e = this.__zoom,
                o = m(t),
                a = e.invert(o),
                u = 'function' === typeof n ? n.apply(this, arguments) : n;
              return i(b(g(e, u), o, a), t, c);
            });
          }),
          (y.translateBy = function(t, n, e) {
            y.transform(t, function() {
              return i(
                this.__zoom.translate(
                  'function' === typeof n ? n.apply(this, arguments) : n,
                  'function' === typeof e ? e.apply(this, arguments) : e
                ),
                r.apply(this, arguments),
                c
              );
            });
          }),
          (y.translateTo = function(t, n, e) {
            y.transform(t, function() {
              var t = r.apply(this, arguments),
                o = this.__zoom,
                a = m(t);
              return i(
                lE
                  .translate(a[0], a[1])
                  .scale(o.k)
                  .translate(
                    'function' === typeof n ? -n.apply(this, arguments) : -n,
                    'function' === typeof e ? -e.apply(this, arguments) : -e
                  ),
                t,
                c
              );
            });
          }),
          (x.prototype = {
            start: function() {
              return 1 === ++this.active && ((this.index = l.push(this) - 1), this.emit('start')), this;
            },
            zoom: function(t, n) {
              return (
                this.mouse && 'mouse' !== t && (this.mouse[1] = n.invert(this.mouse[0])),
                this.touch0 && 'touch' !== t && (this.touch0[1] = n.invert(this.touch0[0])),
                this.touch1 && 'touch' !== t && (this.touch1[1] = n.invert(this.touch1[0])),
                (this.that.__zoom = n),
                this.emit('zoom'),
                this
              );
            },
            end: function() {
              return 0 === --this.active && (l.splice(this.index, 1), (this.index = -1), this.emit('end')), this;
            },
            emit: function(t) {
              re(new fE(y, t, this.that.__zoom), h.apply, h, [t, this.that, this.args]);
            },
          }),
          (y.wheelDelta = function(t) {
            return arguments.length ? ((o = 'function' === typeof t ? t : cE(+t)), y) : o;
          }),
          (y.filter = function(t) {
            return arguments.length ? ((e = 'function' === typeof t ? t : cE(!!t)), y) : e;
          }),
          (y.touchable = function(t) {
            return arguments.length ? ((a = 'function' === typeof t ? t : cE(!!t)), y) : a;
          }),
          (y.extent = function(t) {
            return arguments.length
              ? ((r = 'function' === typeof t ? t : cE([[+t[0][0], +t[0][1]], [+t[1][0], +t[1][1]]])), y)
              : r;
          }),
          (y.scaleExtent = function(t) {
            return arguments.length ? ((u[0] = +t[0]), (u[1] = +t[1]), y) : [u[0], u[1]];
          }),
          (y.translateExtent = function(t) {
            return arguments.length
              ? ((c[0][0] = +t[0][0]), (c[1][0] = +t[1][0]), (c[0][1] = +t[0][1]), (c[1][1] = +t[1][1]), y)
              : [[c[0][0], c[0][1]], [c[1][0], c[1][1]]];
          }),
          (y.constrain = function(t) {
            return arguments.length ? ((i = t), y) : i;
          }),
          (y.duration = function(t) {
            return arguments.length ? ((f = +t), y) : f;
          }),
          (y.interpolate = function(t) {
            return arguments.length ? ((s = t), y) : s;
          }),
          (y.on = function() {
            var t = h.on.apply(h, arguments);
            return t === h ? y : t;
          }),
          (y.clickDistance = function(t) {
            return arguments.length ? ((v = (t = +t) * t), y) : Math.sqrt(v);
          }),
          y
        );
      };
      e.d(n, 'version', function() {
        return r;
      }),
        e.d(n, 'bisect', function() {
          return s;
        }),
        e.d(n, 'bisectRight', function() {
          return c;
        }),
        e.d(n, 'bisectLeft', function() {
          return f;
        }),
        e.d(n, 'ascending', function() {
          return i;
        }),
        e.d(n, 'bisector', function() {
          return o;
        }),
        e.d(n, 'cross', function() {
          return d;
        }),
        e.d(n, 'descending', function() {
          return p;
        }),
        e.d(n, 'deviation', function() {
          return g;
        }),
        e.d(n, 'extent', function() {
          return b;
        }),
        e.d(n, 'histogram', function() {
          return P;
        }),
        e.d(n, 'thresholdFreedmanDiaconis', function() {
          return j;
        }),
        e.d(n, 'thresholdScott', function() {
          return L;
        }),
        e.d(n, 'thresholdSturges', function() {
          return N;
        }),
        e.d(n, 'max', function() {
          return I;
        }),
        e.d(n, 'mean', function() {
          return $;
        }),
        e.d(n, 'median', function() {
          return F;
        }),
        e.d(n, 'merge', function() {
          return D;
        }),
        e.d(n, 'min', function() {
          return z;
        }),
        e.d(n, 'pairs', function() {
          return l;
        }),
        e.d(n, 'permute', function() {
          return U;
        }),
        e.d(n, 'quantile', function() {
          return R;
        }),
        e.d(n, 'range', function() {
          return S;
        }),
        e.d(n, 'scan', function() {
          return B;
        }),
        e.d(n, 'shuffle', function() {
          return q;
        }),
        e.d(n, 'sum', function() {
          return V;
        }),
        e.d(n, 'ticks', function() {
          return C;
        }),
        e.d(n, 'tickIncrement', function() {
          return T;
        }),
        e.d(n, 'tickStep', function() {
          return O;
        }),
        e.d(n, 'transpose', function() {
          return H;
        }),
        e.d(n, 'variance', function() {
          return y;
        }),
        e.d(n, 'zip', function() {
          return G;
        }),
        e.d(n, 'axisTop', function() {
          return ut;
        }),
        e.d(n, 'axisRight', function() {
          return ct;
        }),
        e.d(n, 'axisBottom', function() {
          return ft;
        }),
        e.d(n, 'axisLeft', function() {
          return st;
        }),
        e.d(n, 'brush', function() {
          return Gu;
        }),
        e.d(n, 'brushX', function() {
          return Hu;
        }),
        e.d(n, 'brushY', function() {
          return Yu;
        }),
        e.d(n, 'brushSelection', function() {
          return Vu;
        }),
        e.d(n, 'chord', function() {
          return ec;
        }),
        e.d(n, 'ribbon', function() {
          return gc;
        }),
        e.d(n, 'nest', function() {
          return xc;
        }),
        e.d(n, 'set', function() {
          return Oc;
        }),
        e.d(n, 'map', function() {
          return wc;
        }),
        e.d(n, 'keys', function() {
          return Nc;
        }),
        e.d(n, 'values', function() {
          return Pc;
        }),
        e.d(n, 'entries', function() {
          return Rc;
        }),
        e.d(n, 'color', function() {
          return Qe;
        }),
        e.d(n, 'rgb', function() {
          return nr;
        }),
        e.d(n, 'hsl', function() {
          return ar;
        }),
        e.d(n, 'lab', function() {
          return wr;
        }),
        e.d(n, 'hcl', function() {
          return Tr;
        }),
        e.d(n, 'lch', function() {
          return Cr;
        }),
        e.d(n, 'gray', function() {
          return _r;
        }),
        e.d(n, 'cubehelix', function() {
          return zr;
        }),
        e.d(n, 'contours', function() {
          return Yc;
        }),
        e.d(n, 'contourDensity', function() {
          return Zc;
        }),
        e.d(n, 'dispatch', function() {
          return gt;
        }),
        e.d(n, 'drag', function() {
          return Re;
        }),
        e.d(n, 'dragDisable', function() {
          return Ae;
        }),
        e.d(n, 'dragEnable', function() {
          return Ee;
        }),
        e.d(n, 'dsvFormat', function() {
          return cf;
        }),
        e.d(n, 'csvParse', function() {
          return sf;
        }),
        e.d(n, 'csvParseRows', function() {
          return lf;
        }),
        e.d(n, 'csvFormat', function() {
          return hf;
        }),
        e.d(n, 'csvFormatRows', function() {
          return df;
        }),
        e.d(n, 'tsvParse', function() {
          return vf;
        }),
        e.d(n, 'tsvParseRows', function() {
          return yf;
        }),
        e.d(n, 'tsvFormat', function() {
          return gf;
        }),
        e.d(n, 'tsvFormatRows', function() {
          return bf;
        }),
        e.d(n, 'easeLinear', function() {
          return ka;
        }),
        e.d(n, 'easeQuad', function() {
          return Oa;
        }),
        e.d(n, 'easeQuadIn', function() {
          return Ca;
        }),
        e.d(n, 'easeQuadOut', function() {
          return Ta;
        }),
        e.d(n, 'easeQuadInOut', function() {
          return Oa;
        }),
        e.d(n, 'easeCubic', function() {
          return Ra;
        }),
        e.d(n, 'easeCubicIn', function() {
          return Na;
        }),
        e.d(n, 'easeCubicOut', function() {
          return Pa;
        }),
        e.d(n, 'easeCubicInOut', function() {
          return Ra;
        }),
        e.d(n, 'easePoly', function() {
          return $a;
        }),
        e.d(n, 'easePolyIn', function() {
          return La;
        }),
        e.d(n, 'easePolyOut', function() {
          return Ia;
        }),
        e.d(n, 'easePolyInOut', function() {
          return $a;
        }),
        e.d(n, 'easeSin', function() {
          return Ba;
        }),
        e.d(n, 'easeSinIn', function() {
          return za;
        }),
        e.d(n, 'easeSinOut', function() {
          return Ua;
        }),
        e.d(n, 'easeSinInOut', function() {
          return Ba;
        }),
        e.d(n, 'easeExp', function() {
          return Ha;
        }),
        e.d(n, 'easeExpIn', function() {
          return qa;
        }),
        e.d(n, 'easeExpOut', function() {
          return Va;
        }),
        e.d(n, 'easeExpInOut', function() {
          return Ha;
        }),
        e.d(n, 'easeCircle', function() {
          return Wa;
        }),
        e.d(n, 'easeCircleIn', function() {
          return Ya;
        }),
        e.d(n, 'easeCircleOut', function() {
          return Ga;
        }),
        e.d(n, 'easeCircleInOut', function() {
          return Wa;
        }),
        e.d(n, 'easeBounce', function() {
          return au;
        }),
        e.d(n, 'easeBounceIn', function() {
          return ou;
        }),
        e.d(n, 'easeBounceOut', function() {
          return au;
        }),
        e.d(n, 'easeBounceInOut', function() {
          return uu;
        }),
        e.d(n, 'easeBack', function() {
          return lu;
        }),
        e.d(n, 'easeBackIn', function() {
          return fu;
        }),
        e.d(n, 'easeBackOut', function() {
          return su;
        }),
        e.d(n, 'easeBackInOut', function() {
          return lu;
        }),
        e.d(n, 'easeElastic', function() {
          return yu;
        }),
        e.d(n, 'easeElasticIn', function() {
          return vu;
        }),
        e.d(n, 'easeElasticOut', function() {
          return yu;
        }),
        e.d(n, 'easeElasticInOut', function() {
          return gu;
        }),
        e.d(n, 'blob', function() {
          return _f;
        }),
        e.d(n, 'buffer', function() {
          return xf;
        }),
        e.d(n, 'dsv', function() {
          return Ef;
        }),
        e.d(n, 'csv', function() {
          return kf;
        }),
        e.d(n, 'tsv', function() {
          return Cf;
        }),
        e.d(n, 'image', function() {
          return Tf;
        }),
        e.d(n, 'json', function() {
          return Nf;
        }),
        e.d(n, 'text', function() {
          return Sf;
        }),
        e.d(n, 'xml', function() {
          return Rf;
        }),
        e.d(n, 'html', function() {
          return jf;
        }),
        e.d(n, 'svg', function() {
          return Lf;
        }),
        e.d(n, 'forceCenter', function() {
          return If;
        }),
        e.d(n, 'forceCollide', function() {
          return fs;
        }),
        e.d(n, 'forceLink', function() {
          return hs;
        }),
        e.d(n, 'forceManyBody', function() {
          return bs;
        }),
        e.d(n, 'forceRadial', function() {
          return ms;
        }),
        e.d(n, 'forceSimulation', function() {
          return gs;
        }),
        e.d(n, 'forceX', function() {
          return _s;
        }),
        e.d(n, 'forceY', function() {
          return ws;
        }),
        e.d(n, 'formatDefaultLocale', function() {
          return zs;
        }),
        e.d(n, 'format', function() {
          return Ns;
        }),
        e.d(n, 'formatPrefix', function() {
          return Ps;
        }),
        e.d(n, 'formatLocale', function() {
          return Ds;
        }),
        e.d(n, 'formatSpecifier', function() {
          return ks;
        }),
        e.d(n, 'precisionFixed', function() {
          return Us;
        }),
        e.d(n, 'precisionPrefix', function() {
          return Bs;
        }),
        e.d(n, 'precisionRound', function() {
          return qs;
        }),
        e.d(n, 'geoArea', function() {
          return Il;
        }),
        e.d(n, 'geoBounds', function() {
          return Ch;
        }),
        e.d(n, 'geoCentroid', function() {
          return zh;
        }),
        e.d(n, 'geoCircle', function() {
          return Qh;
        }),
        e.d(n, 'geoClipAntimeridian', function() {
          return cd;
        }),
        e.d(n, 'geoClipCircle', function() {
          return hd;
        }),
        e.d(n, 'geoClipExtent', function() {
          return _d;
        }),
        e.d(n, 'geoClipRectangle', function() {
          return yd;
        }),
        e.d(n, 'geoContains', function() {
          return Dd;
        }),
        e.d(n, 'geoDistance', function() {
          return Od;
        }),
        e.d(n, 'geoGraticule', function() {
          return Bd;
        }),
        e.d(n, 'geoGraticule10', function() {
          return qd;
        }),
        e.d(n, 'geoInterpolate', function() {
          return Wd;
        }),
        e.d(n, 'geoLength', function() {
          return kd;
        }),
        e.d(n, 'geoPath', function() {
          return Wp;
        }),
        e.d(n, 'geoAlbers', function() {
          return bv;
        }),
        e.d(n, 'geoAlbersUsa', function() {
          return _v;
        }),
        e.d(n, 'geoAzimuthalEqualArea', function() {
          return Sv;
        }),
        e.d(n, 'geoAzimuthalEqualAreaRaw', function() {
          return Mv;
        }),
        e.d(n, 'geoAzimuthalEquidistant', function() {
          return Ev;
        }),
        e.d(n, 'geoAzimuthalEquidistantRaw', function() {
          return Av;
        }),
        e.d(n, 'geoConicConformal', function() {
          return Pv;
        }),
        e.d(n, 'geoConicConformalRaw', function() {
          return Nv;
        }),
        e.d(n, 'geoConicEqualArea', function() {
          return gv;
        }),
        e.d(n, 'geoConicEqualAreaRaw', function() {
          return yv;
        }),
        e.d(n, 'geoConicEquidistant', function() {
          return Iv;
        }),
        e.d(n, 'geoConicEquidistantRaw', function() {
          return Lv;
        }),
        e.d(n, 'geoEqualEarth', function() {
          return Vv;
        }),
        e.d(n, 'geoEqualEarthRaw', function() {
          return qv;
        }),
        e.d(n, 'geoEquirectangular', function() {
          return jv;
        }),
        e.d(n, 'geoEquirectangularRaw', function() {
          return Rv;
        }),
        e.d(n, 'geoGnomonic', function() {
          return Yv;
        }),
        e.d(n, 'geoGnomonicRaw', function() {
          return Hv;
        }),
        e.d(n, 'geoIdentity', function() {
          return Wv;
        }),
        e.d(n, 'geoProjection', function() {
          return hv;
        }),
        e.d(n, 'geoProjectionMutator', function() {
          return dv;
        }),
        e.d(n, 'geoMercator', function() {
          return Cv;
        }),
        e.d(n, 'geoMercatorRaw', function() {
          return kv;
        }),
        e.d(n, 'geoNaturalEarth1', function() {
          return Kv;
        }),
        e.d(n, 'geoNaturalEarth1Raw', function() {
          return Xv;
        }),
        e.d(n, 'geoOrthographic', function() {
          return Zv;
        }),
        e.d(n, 'geoOrthographicRaw', function() {
          return Qv;
        }),
        e.d(n, 'geoStereographic', function() {
          return ty;
        }),
        e.d(n, 'geoStereographicRaw', function() {
          return Jv;
        }),
        e.d(n, 'geoTransverseMercator', function() {
          return ey;
        }),
        e.d(n, 'geoTransverseMercatorRaw', function() {
          return ny;
        }),
        e.d(n, 'geoRotation', function() {
          return Wh;
        }),
        e.d(n, 'geoStream', function() {
          return Cl;
        }),
        e.d(n, 'geoTransform', function() {
          return Xp;
        }),
        e.d(n, 'cluster', function() {
          return sy;
        }),
        e.d(n, 'hierarchy', function() {
          return Sy;
        }),
        e.d(n, 'pack', function() {
          return Zy;
        }),
        e.d(n, 'packSiblings', function() {
          return Yy;
        }),
        e.d(n, 'packEnclose', function() {
          return Py;
        }),
        e.d(n, 'partition', function() {
          return ig;
        }),
        e.d(n, 'stratify', function() {
          return sg;
        }),
        e.d(n, 'tree', function() {
          return mg;
        }),
        e.d(n, 'treemap', function() {
          return Sg;
        }),
        e.d(n, 'treemapBinary', function() {
          return Ag;
        }),
        e.d(n, 'treemapDice', function() {
          return rg;
        }),
        e.d(n, 'treemapSlice', function() {
          return _g;
        }),
        e.d(n, 'treemapSliceDice', function() {
          return Eg;
        }),
        e.d(n, 'treemapSquarify', function() {
          return Mg;
        }),
        e.d(n, 'treemapResquarify', function() {
          return kg;
        }),
        e.d(n, 'interpolate', function() {
          return pi;
        }),
        e.d(n, 'interpolateArray', function() {
          return ni;
        }),
        e.d(n, 'interpolateBasis', function() {
          return qr;
        }),
        e.d(n, 'interpolateBasisClosed', function() {
          return Vr;
        }),
        e.d(n, 'interpolateDate', function() {
          return ei;
        }),
        e.d(n, 'interpolateDiscrete', function() {
          return vi;
        }),
        e.d(n, 'interpolateHue', function() {
          return yi;
        }),
        e.d(n, 'interpolateNumber', function() {
          return ri;
        }),
        e.d(n, 'interpolateObject', function() {
          return ii;
        }),
        e.d(n, 'interpolateRound', function() {
          return gi;
        }),
        e.d(n, 'interpolateString', function() {
          return di;
        }),
        e.d(n, 'interpolateTransformCss', function() {
          return Si;
        }),
        e.d(n, 'interpolateTransformSvg', function() {
          return Ai;
        }),
        e.d(n, 'interpolateZoom', function() {
          return Ri;
        }),
        e.d(n, 'interpolateRgb', function() {
          return Qr;
        }),
        e.d(n, 'interpolateRgbBasis', function() {
          return Jr;
        }),
        e.d(n, 'interpolateRgbBasisClosed', function() {
          return ti;
        }),
        e.d(n, 'interpolateHsl', function() {
          return Li;
        }),
        e.d(n, 'interpolateHslLong', function() {
          return Ii;
        }),
        e.d(n, 'interpolateLab', function() {
          return $i;
        }),
        e.d(n, 'interpolateHcl', function() {
          return Di;
        }),
        e.d(n, 'interpolateHclLong', function() {
          return zi;
        }),
        e.d(n, 'interpolateCubehelix', function() {
          return Bi;
        }),
        e.d(n, 'interpolateCubehelixLong', function() {
          return qi;
        }),
        e.d(n, 'piecewise', function() {
          return Vi;
        }),
        e.d(n, 'quantize', function() {
          return Gi;
        }),
        e.d(n, 'path', function() {
          return lc;
        }),
        e.d(n, 'polygonArea', function() {
          return Cg;
        }),
        e.d(n, 'polygonCentroid', function() {
          return Tg;
        }),
        e.d(n, 'polygonHull', function() {
          return Rg;
        }),
        e.d(n, 'polygonContains', function() {
          return jg;
        }),
        e.d(n, 'polygonLength', function() {
          return Lg;
        }),
        e.d(n, 'quadtree', function() {
          return rs;
        }),
        e.d(n, 'randomUniform', function() {
          return $g;
        }),
        e.d(n, 'randomNormal', function() {
          return Fg;
        }),
        e.d(n, 'randomLogNormal', function() {
          return Dg;
        }),
        e.d(n, 'randomBates', function() {
          return Ug;
        }),
        e.d(n, 'randomIrwinHall', function() {
          return zg;
        }),
        e.d(n, 'randomExponential', function() {
          return Bg;
        }),
        e.d(n, 'scaleBand', function() {
          return Wg;
        }),
        e.d(n, 'scalePoint', function() {
          return Kg;
        }),
        e.d(n, 'scaleIdentity', function() {
          return sb;
        }),
        e.d(n, 'scaleLinear', function() {
          return fb;
        }),
        e.d(n, 'scaleLog', function() {
          return bb;
        }),
        e.d(n, 'scaleOrdinal', function() {
          return Gg;
        }),
        e.d(n, 'scaleImplicit', function() {
          return Yg;
        }),
        e.d(n, 'scalePow', function() {
          return _b;
        }),
        e.d(n, 'scaleSqrt', function() {
          return wb;
        }),
        e.d(n, 'scaleQuantile', function() {
          return xb;
        }),
        e.d(n, 'scaleQuantize', function() {
          return Mb;
        }),
        e.d(n, 'scaleThreshold', function() {
          return Sb;
        }),
        e.d(n, 'scaleTime', function() {
          return Cw;
        }),
        e.d(n, 'scaleUtc', function() {
          return Tw;
        }),
        e.d(n, 'scaleSequential', function() {
          return Ow;
        }),
        e.d(n, 'scaleDiverging', function() {
          return Nw;
        }),
        e.d(n, 'schemeCategory10', function() {
          return Rw;
        }),
        e.d(n, 'schemeAccent', function() {
          return jw;
        }),
        e.d(n, 'schemeDark2', function() {
          return Lw;
        }),
        e.d(n, 'schemePaired', function() {
          return Iw;
        }),
        e.d(n, 'schemePastel1', function() {
          return $w;
        }),
        e.d(n, 'schemePastel2', function() {
          return Fw;
        }),
        e.d(n, 'schemeSet1', function() {
          return Dw;
        }),
        e.d(n, 'schemeSet2', function() {
          return zw;
        }),
        e.d(n, 'schemeSet3', function() {
          return Uw;
        }),
        e.d(n, 'interpolateBrBG', function() {
          return Vw;
        }),
        e.d(n, 'schemeBrBG', function() {
          return qw;
        }),
        e.d(n, 'interpolatePRGn', function() {
          return Yw;
        }),
        e.d(n, 'schemePRGn', function() {
          return Hw;
        }),
        e.d(n, 'interpolatePiYG', function() {
          return Ww;
        }),
        e.d(n, 'schemePiYG', function() {
          return Gw;
        }),
        e.d(n, 'interpolatePuOr', function() {
          return Kw;
        }),
        e.d(n, 'schemePuOr', function() {
          return Xw;
        }),
        e.d(n, 'interpolateRdBu', function() {
          return Zw;
        }),
        e.d(n, 'schemeRdBu', function() {
          return Qw;
        }),
        e.d(n, 'interpolateRdGy', function() {
          return tx;
        }),
        e.d(n, 'schemeRdGy', function() {
          return Jw;
        }),
        e.d(n, 'interpolateRdYlBu', function() {
          return ex;
        }),
        e.d(n, 'schemeRdYlBu', function() {
          return nx;
        }),
        e.d(n, 'interpolateRdYlGn', function() {
          return ix;
        }),
        e.d(n, 'schemeRdYlGn', function() {
          return rx;
        }),
        e.d(n, 'interpolateSpectral', function() {
          return ax;
        }),
        e.d(n, 'schemeSpectral', function() {
          return ox;
        }),
        e.d(n, 'interpolateBuGn', function() {
          return cx;
        }),
        e.d(n, 'schemeBuGn', function() {
          return ux;
        }),
        e.d(n, 'interpolateBuPu', function() {
          return sx;
        }),
        e.d(n, 'schemeBuPu', function() {
          return fx;
        }),
        e.d(n, 'interpolateGnBu', function() {
          return hx;
        }),
        e.d(n, 'schemeGnBu', function() {
          return lx;
        }),
        e.d(n, 'interpolateOrRd', function() {
          return px;
        }),
        e.d(n, 'schemeOrRd', function() {
          return dx;
        }),
        e.d(n, 'interpolatePuBuGn', function() {
          return yx;
        }),
        e.d(n, 'schemePuBuGn', function() {
          return vx;
        }),
        e.d(n, 'interpolatePuBu', function() {
          return bx;
        }),
        e.d(n, 'schemePuBu', function() {
          return gx;
        }),
        e.d(n, 'interpolatePuRd', function() {
          return _x;
        }),
        e.d(n, 'schemePuRd', function() {
          return mx;
        }),
        e.d(n, 'interpolateRdPu', function() {
          return xx;
        }),
        e.d(n, 'schemeRdPu', function() {
          return wx;
        }),
        e.d(n, 'interpolateYlGnBu', function() {
          return Sx;
        }),
        e.d(n, 'schemeYlGnBu', function() {
          return Mx;
        }),
        e.d(n, 'interpolateYlGn', function() {
          return Ex;
        }),
        e.d(n, 'schemeYlGn', function() {
          return Ax;
        }),
        e.d(n, 'interpolateYlOrBr', function() {
          return Cx;
        }),
        e.d(n, 'schemeYlOrBr', function() {
          return kx;
        }),
        e.d(n, 'interpolateYlOrRd', function() {
          return Ox;
        }),
        e.d(n, 'schemeYlOrRd', function() {
          return Tx;
        }),
        e.d(n, 'interpolateBlues', function() {
          return Px;
        }),
        e.d(n, 'schemeBlues', function() {
          return Nx;
        }),
        e.d(n, 'interpolateGreens', function() {
          return jx;
        }),
        e.d(n, 'schemeGreens', function() {
          return Rx;
        }),
        e.d(n, 'interpolateGreys', function() {
          return Ix;
        }),
        e.d(n, 'schemeGreys', function() {
          return Lx;
        }),
        e.d(n, 'interpolatePurples', function() {
          return Fx;
        }),
        e.d(n, 'schemePurples', function() {
          return $x;
        }),
        e.d(n, 'interpolateReds', function() {
          return zx;
        }),
        e.d(n, 'schemeReds', function() {
          return Dx;
        }),
        e.d(n, 'interpolateOranges', function() {
          return Bx;
        }),
        e.d(n, 'schemeOranges', function() {
          return Ux;
        }),
        e.d(n, 'interpolateCubehelixDefault', function() {
          return qx;
        }),
        e.d(n, 'interpolateRainbow', function() {
          return Gx;
        }),
        e.d(n, 'interpolateWarm', function() {
          return Vx;
        }),
        e.d(n, 'interpolateCool', function() {
          return Hx;
        }),
        e.d(n, 'interpolateSinebow', function() {
          return Qx;
        }),
        e.d(n, 'interpolateViridis', function() {
          return Jx;
        }),
        e.d(n, 'interpolateMagma', function() {
          return tM;
        }),
        e.d(n, 'interpolateInferno', function() {
          return nM;
        }),
        e.d(n, 'interpolatePlasma', function() {
          return eM;
        }),
        e.d(n, 'create', function() {
          return de;
        }),
        e.d(n, 'creator', function() {
          return Mt;
        }),
        e.d(n, 'local', function() {
          return ve;
        }),
        e.d(n, 'matcher', function() {
          return Rt;
        }),
        e.d(n, 'mouse', function() {
          return me;
        }),
        e.d(n, 'namespace', function() {
          return _t;
        }),
        e.d(n, 'namespaces', function() {
          return mt;
        }),
        e.d(n, 'clientPoint', function() {
          return be;
        }),
        e.d(n, 'select', function() {
          return he;
        }),
        e.d(n, 'selectAll', function() {
          return _e;
        }),
        e.d(n, 'selection', function() {
          return le;
        }),
        e.d(n, 'selector', function() {
          return At;
        }),
        e.d(n, 'selectorAll', function() {
          return Ct;
        }),
        e.d(n, 'style', function() {
          return dn;
        }),
        e.d(n, 'touch', function() {
          return we;
        }),
        e.d(n, 'touches', function() {
          return xe;
        }),
        e.d(n, 'window', function() {
          return cn;
        }),
        e.d(n, 'event', function() {
          return Xn;
        }),
        e.d(n, 'customEvent', function() {
          return re;
        }),
        e.d(n, 'arc', function() {
          return SM;
        }),
        e.d(n, 'area', function() {
          return OM;
        }),
        e.d(n, 'line', function() {
          return TM;
        }),
        e.d(n, 'pie', function() {
          return RM;
        }),
        e.d(n, 'areaRadial', function() {
          return DM;
        }),
        e.d(n, 'radialArea', function() {
          return DM;
        }),
        e.d(n, 'lineRadial', function() {
          return FM;
        }),
        e.d(n, 'radialLine', function() {
          return FM;
        }),
        e.d(n, 'pointRadial', function() {
          return zM;
        }),
        e.d(n, 'linkHorizontal', function() {
          return WM;
        }),
        e.d(n, 'linkVertical', function() {
          return XM;
        }),
        e.d(n, 'linkRadial', function() {
          return KM;
        }),
        e.d(n, 'symbol', function() {
          return yS;
        }),
        e.d(n, 'symbols', function() {
          return vS;
        }),
        e.d(n, 'symbolCircle', function() {
          return QM;
        }),
        e.d(n, 'symbolCross', function() {
          return ZM;
        }),
        e.d(n, 'symbolDiamond', function() {
          return nS;
        }),
        e.d(n, 'symbolSquare', function() {
          return uS;
        }),
        e.d(n, 'symbolStar', function() {
          return aS;
        }),
        e.d(n, 'symbolTriangle', function() {
          return fS;
        }),
        e.d(n, 'symbolWye', function() {
          return pS;
        }),
        e.d(n, 'curveBasisClosed', function() {
          return xS;
        }),
        e.d(n, 'curveBasisOpen', function() {
          return SS;
        }),
        e.d(n, 'curveBasis', function() {
          return _S;
        }),
        e.d(n, 'curveBundle', function() {
          return ES;
        }),
        e.d(n, 'curveCardinalClosed', function() {
          return NS;
        }),
        e.d(n, 'curveCardinalOpen', function() {
          return RS;
        }),
        e.d(n, 'curveCardinal', function() {
          return TS;
        }),
        e.d(n, 'curveCatmullRomClosed', function() {
          return FS;
        }),
        e.d(n, 'curveCatmullRomOpen', function() {
          return zS;
        }),
        e.d(n, 'curveCatmullRom', function() {
          return IS;
        }),
        e.d(n, 'curveLinearClosed', function() {
          return BS;
        }),
        e.d(n, 'curveLinear', function() {
          return EM;
        }),
        e.d(n, 'curveMonotoneX', function() {
          return KS;
        }),
        e.d(n, 'curveMonotoneY', function() {
          return QS;
        }),
        e.d(n, 'curveNatural', function() {
          return tA;
        }),
        e.d(n, 'curveStep', function() {
          return eA;
        }),
        e.d(n, 'curveStepAfter', function() {
          return iA;
        }),
        e.d(n, 'curveStepBefore', function() {
          return rA;
        }),
        e.d(n, 'stack', function() {
          return cA;
        }),
        e.d(n, 'stackOffsetExpand', function() {
          return fA;
        }),
        e.d(n, 'stackOffsetDiverging', function() {
          return sA;
        }),
        e.d(n, 'stackOffsetNone', function() {
          return oA;
        }),
        e.d(n, 'stackOffsetSilhouette', function() {
          return lA;
        }),
        e.d(n, 'stackOffsetWiggle', function() {
          return hA;
        }),
        e.d(n, 'stackOrderAscending', function() {
          return dA;
        }),
        e.d(n, 'stackOrderDescending', function() {
          return vA;
        }),
        e.d(n, 'stackOrderInsideOut', function() {
          return yA;
        }),
        e.d(n, 'stackOrderNone', function() {
          return aA;
        }),
        e.d(n, 'stackOrderReverse', function() {
          return gA;
        }),
        e.d(n, 'timeInterval', function() {
          return kb;
        }),
        e.d(n, 'timeMillisecond', function() {
          return Tb;
        }),
        e.d(n, 'timeMilliseconds', function() {
          return Ob;
        }),
        e.d(n, 'utcMillisecond', function() {
          return Tb;
        }),
        e.d(n, 'utcMilliseconds', function() {
          return Ob;
        }),
        e.d(n, 'timeSecond', function() {
          return $b;
        }),
        e.d(n, 'timeSeconds', function() {
          return Fb;
        }),
        e.d(n, 'utcSecond', function() {
          return $b;
        }),
        e.d(n, 'utcSeconds', function() {
          return Fb;
        }),
        e.d(n, 'timeMinute', function() {
          return zb;
        }),
        e.d(n, 'timeMinutes', function() {
          return Ub;
        }),
        e.d(n, 'timeHour', function() {
          return qb;
        }),
        e.d(n, 'timeHours', function() {
          return Vb;
        }),
        e.d(n, 'timeDay', function() {
          return Yb;
        }),
        e.d(n, 'timeDays', function() {
          return Gb;
        }),
        e.d(n, 'timeWeek', function() {
          return Xb;
        }),
        e.d(n, 'timeWeeks', function() {
          return em;
        }),
        e.d(n, 'timeSunday', function() {
          return Xb;
        }),
        e.d(n, 'timeSundays', function() {
          return em;
        }),
        e.d(n, 'timeMonday', function() {
          return Kb;
        }),
        e.d(n, 'timeMondays', function() {
          return rm;
        }),
        e.d(n, 'timeTuesday', function() {
          return Qb;
        }),
        e.d(n, 'timeTuesdays', function() {
          return im;
        }),
        e.d(n, 'timeWednesday', function() {
          return Zb;
        }),
        e.d(n, 'timeWednesdays', function() {
          return om;
        }),
        e.d(n, 'timeThursday', function() {
          return Jb;
        }),
        e.d(n, 'timeThursdays', function() {
          return am;
        }),
        e.d(n, 'timeFriday', function() {
          return tm;
        }),
        e.d(n, 'timeFridays', function() {
          return um;
        }),
        e.d(n, 'timeSaturday', function() {
          return nm;
        }),
        e.d(n, 'timeSaturdays', function() {
          return cm;
        }),
        e.d(n, 'timeMonth', function() {
          return sm;
        }),
        e.d(n, 'timeMonths', function() {
          return lm;
        }),
        e.d(n, 'timeYear', function() {
          return dm;
        }),
        e.d(n, 'timeYears', function() {
          return pm;
        }),
        e.d(n, 'utcMinute', function() {
          return ym;
        }),
        e.d(n, 'utcMinutes', function() {
          return gm;
        }),
        e.d(n, 'utcHour', function() {
          return mm;
        }),
        e.d(n, 'utcHours', function() {
          return _m;
        }),
        e.d(n, 'utcDay', function() {
          return xm;
        }),
        e.d(n, 'utcDays', function() {
          return Mm;
        }),
        e.d(n, 'utcWeek', function() {
          return Am;
        }),
        e.d(n, 'utcWeeks', function() {
          return Pm;
        }),
        e.d(n, 'utcSunday', function() {
          return Am;
        }),
        e.d(n, 'utcSundays', function() {
          return Pm;
        }),
        e.d(n, 'utcMonday', function() {
          return Em;
        }),
        e.d(n, 'utcMondays', function() {
          return Rm;
        }),
        e.d(n, 'utcTuesday', function() {
          return km;
        }),
        e.d(n, 'utcTuesdays', function() {
          return jm;
        }),
        e.d(n, 'utcWednesday', function() {
          return Cm;
        }),
        e.d(n, 'utcWednesdays', function() {
          return Lm;
        }),
        e.d(n, 'utcThursday', function() {
          return Tm;
        }),
        e.d(n, 'utcThursdays', function() {
          return Im;
        }),
        e.d(n, 'utcFriday', function() {
          return Om;
        }),
        e.d(n, 'utcFridays', function() {
          return $m;
        }),
        e.d(n, 'utcSaturday', function() {
          return Nm;
        }),
        e.d(n, 'utcSaturdays', function() {
          return Fm;
        }),
        e.d(n, 'utcMonth', function() {
          return zm;
        }),
        e.d(n, 'utcMonths', function() {
          return Um;
        }),
        e.d(n, 'utcYear', function() {
          return qm;
        }),
        e.d(n, 'utcYears', function() {
          return Vm;
        }),
        e.d(n, 'timeFormatDefaultLocale', function() {
          return sw;
        }),
        e.d(n, 'timeFormat', function() {
          return Km;
        }),
        e.d(n, 'timeParse', function() {
          return Qm;
        }),
        e.d(n, 'utcFormat', function() {
          return Zm;
        }),
        e.d(n, 'utcParse', function() {
          return Jm;
        }),
        e.d(n, 'timeFormatLocale', function() {
          return Wm;
        }),
        e.d(n, 'isoFormat', function() {
          return pw;
        }),
        e.d(n, 'isoParse', function() {
          return gw;
        }),
        e.d(n, 'now', function() {
          return ro;
        }),
        e.d(n, 'timer', function() {
          return ao;
        }),
        e.d(n, 'timerFlush', function() {
          return uo;
        }),
        e.d(n, 'timeout', function() {
          return ho;
        }),
        e.d(n, 'interval', function() {
          return po;
        }),
        e.d(n, 'transition', function() {
          return Sa;
        }),
        e.d(n, 'active', function() {
          return xu;
        }),
        e.d(n, 'interrupt', function() {
          return To;
        }),
        e.d(n, 'voronoi', function() {
          return uE;
        }),
        e.d(n, 'zoom', function() {
          return wE;
        }),
        e.d(n, 'zoomTransform', function() {
          return hE;
        }),
        e.d(n, 'zoomIdentity', function() {
          return lE;
        });
    },
    '57f0': function(t, n, e) {
      var r = e('d3f4');
      e('5eda')('isSealed', function(t) {
        return function(n) {
          return !r(n) || (!!t && t(n));
        };
      });
    },
    '5ca1': function(t, n, e) {
      var r = e('7726'),
        i = e('8378'),
        o = e('32e9'),
        a = e('2aba'),
        u = e('9b43'),
        c = 'prototype',
        f = function(t, n, e) {
          var s,
            l,
            h,
            d,
            p = t & f.F,
            v = t & f.G,
            y = t & f.S,
            g = t & f.P,
            b = t & f.B,
            m = v ? r : y ? r[n] || (r[n] = {}) : (r[n] || {})[c],
            _ = v ? i : i[n] || (i[n] = {}),
            w = _[c] || (_[c] = {});
          for (s in (v && (e = n), e))
            (l = !p && m && void 0 !== m[s]),
              (h = (l ? m : e)[s]),
              (d = b && l ? u(h, r) : g && 'function' == typeof h ? u(Function.call, h) : h),
              m && a(m, s, h, t & f.U),
              _[s] != h && o(_, s, d),
              g && w[s] != h && (w[s] = h);
        };
      (r.core = i),
        (f.F = 1),
        (f.G = 2),
        (f.S = 4),
        (f.P = 8),
        (f.B = 16),
        (f.W = 32),
        (f.U = 64),
        (f.R = 128),
        (t.exports = f);
    },
    '5cc5': function(t, n, e) {
      var r = e('2b4c')('iterator'),
        i = !1;
      try {
        var o = [7][r]();
        (o['return'] = function() {
          i = !0;
        }),
          Array.from(o, function() {
            throw 2;
          });
      } catch (a) {}
      t.exports = function(t, n) {
        if (!n && !i) return !1;
        var e = !1;
        try {
          var o = [7],
            u = o[r]();
          (u.next = function() {
            return { done: (e = !0) };
          }),
            (o[r] = function() {
              return u;
            }),
            t(o);
        } catch (a) {}
        return e;
      };
    },
    '5dbc': function(t, n, e) {
      var r = e('d3f4'),
        i = e('8b97').set;
      t.exports = function(t, n, e) {
        var o,
          a = n.constructor;
        return a !== e && 'function' == typeof a && (o = a.prototype) !== e.prototype && r(o) && i && i(t, o), t;
      };
    },
    '5df2': function(t, n, e) {
      var r = e('5ca1'),
        i = e('d752');
      r(r.S + r.F * (Number.parseFloat != i), 'Number', { parseFloat: i });
    },
    '5df3': function(t, n, e) {
      'use strict';
      var r = e('02f4')(!0);
      e('01f9')(
        String,
        'String',
        function(t) {
          (this._t = String(t)), (this._i = 0);
        },
        function() {
          var t,
            n = this._t,
            e = this._i;
          return e >= n.length
            ? { value: void 0, done: !0 }
            : ((t = r(n, e)), (this._i += t.length), { value: t, done: !1 });
        }
      );
    },
    '5eda': function(t, n, e) {
      var r = e('5ca1'),
        i = e('8378'),
        o = e('79e5');
      t.exports = function(t, n) {
        var e = (i.Object || {})[t] || Object[t],
          a = {};
        (a[t] = n(e)),
          r(
            r.S +
              r.F *
                o(function() {
                  e(1);
                }),
            'Object',
            a
          );
      };
    },
    '5f1b': function(t, n, e) {
      'use strict';
      var r = e('23c6'),
        i = RegExp.prototype.exec;
      t.exports = function(t, n) {
        var e = t.exec;
        if ('function' === typeof e) {
          var o = e.call(t, n);
          if ('object' !== typeof o)
            throw new TypeError('RegExp exec method returned something other than an Object or null');
          return o;
        }
        if ('RegExp' !== r(t)) throw new TypeError('RegExp#exec called on incompatible receiver');
        return i.call(t, n);
      };
    },
    '613b': function(t, n, e) {
      var r = e('5537')('keys'),
        i = e('ca5a');
      t.exports = function(t) {
        return r[t] || (r[t] = i(t));
      };
    },
    '626a': function(t, n, e) {
      var r = e('2d95');
      t.exports = Object('z').propertyIsEnumerable(0)
        ? Object
        : function(t) {
            return 'String' == r(t) ? t.split('') : Object(t);
          };
    },
    '63d9': function(t, n, e) {
      e('ec30')('Float32', 4, function(t) {
        return function(n, e, r) {
          return t(this, n, e, r);
        };
      });
    },
    '643e': function(t, n, e) {
      'use strict';
      var r = e('dcbc'),
        i = e('67ab').getWeak,
        o = e('cb7c'),
        a = e('d3f4'),
        u = e('f605'),
        c = e('4a59'),
        f = e('0a49'),
        s = e('69a8'),
        l = e('b39a'),
        h = f(5),
        d = f(6),
        p = 0,
        v = function(t) {
          return t._l || (t._l = new y());
        },
        y = function() {
          this.a = [];
        },
        g = function(t, n) {
          return h(t.a, function(t) {
            return t[0] === n;
          });
        };
      (y.prototype = {
        get: function(t) {
          var n = g(this, t);
          if (n) return n[1];
        },
        has: function(t) {
          return !!g(this, t);
        },
        set: function(t, n) {
          var e = g(this, t);
          e ? (e[1] = n) : this.a.push([t, n]);
        },
        delete: function(t) {
          var n = d(this.a, function(n) {
            return n[0] === t;
          });
          return ~n && this.a.splice(n, 1), !!~n;
        },
      }),
        (t.exports = {
          getConstructor: function(t, n, e, o) {
            var f = t(function(t, r) {
              u(t, f, n, '_i'), (t._t = n), (t._i = p++), (t._l = void 0), void 0 != r && c(r, e, t[o], t);
            });
            return (
              r(f.prototype, {
                delete: function(t) {
                  if (!a(t)) return !1;
                  var e = i(t);
                  return !0 === e ? v(l(this, n))['delete'](t) : e && s(e, this._i) && delete e[this._i];
                },
                has: function(t) {
                  if (!a(t)) return !1;
                  var e = i(t);
                  return !0 === e ? v(l(this, n)).has(t) : e && s(e, this._i);
                },
              }),
              f
            );
          },
          def: function(t, n, e) {
            var r = i(o(n), !0);
            return !0 === r ? v(t).set(n, e) : (r[t._i] = e), t;
          },
          ufstore: v,
        });
    },
    '64d5': function(t, n, e) {
      'use strict';
      var r = e('5ca1'),
        i = e('4bf8'),
        o = e('6a99'),
        a = e('38fd'),
        u = e('11e9').f;
      e('9e1e') &&
        r(r.P + e('c5b4'), 'Object', {
          __lookupSetter__: function(t) {
            var n,
              e = i(this),
              r = o(t, !0);
            do {
              if ((n = u(e, r))) return n.set;
            } while ((e = a(e)));
          },
        });
    },
    '66c8': function(t, n, e) {
      var r = e('d3f4');
      e('5eda')('isFrozen', function(t) {
        return function(n) {
          return !r(n) || (!!t && t(n));
        };
      });
    },
    '673e': function(t, n, e) {
      'use strict';
      e('386b')('sub', function(t) {
        return function() {
          return t(this, 'sub', '', '');
        };
      });
    },
    6762: function(t, n, e) {
      'use strict';
      var r = e('5ca1'),
        i = e('c366')(!0);
      r(r.P, 'Array', {
        includes: function(t) {
          return i(this, t, arguments.length > 1 ? arguments[1] : void 0);
        },
      }),
        e('9c6c')('includes');
    },
    '67ab': function(t, n, e) {
      var r = e('ca5a')('meta'),
        i = e('d3f4'),
        o = e('69a8'),
        a = e('86cc').f,
        u = 0,
        c =
          Object.isExtensible ||
          function() {
            return !0;
          },
        f = !e('79e5')(function() {
          return c(Object.preventExtensions({}));
        }),
        s = function(t) {
          a(t, r, { value: { i: 'O' + ++u, w: {} } });
        },
        l = function(t, n) {
          if (!i(t)) return 'symbol' == typeof t ? t : ('string' == typeof t ? 'S' : 'P') + t;
          if (!o(t, r)) {
            if (!c(t)) return 'F';
            if (!n) return 'E';
            s(t);
          }
          return t[r].i;
        },
        h = function(t, n) {
          if (!o(t, r)) {
            if (!c(t)) return !0;
            if (!n) return !1;
            s(t);
          }
          return t[r].w;
        },
        d = function(t) {
          return f && p.NEED && c(t) && !o(t, r) && s(t), t;
        },
        p = (t.exports = { KEY: r, NEED: !1, fastKey: l, getWeak: h, onFreeze: d });
    },
    6821: function(t, n, e) {
      var r = e('626a'),
        i = e('be13');
      t.exports = function(t) {
        return r(i(t));
      };
    },
    '69a8': function(t, n) {
      var e = {}.hasOwnProperty;
      t.exports = function(t, n) {
        return e.call(t, n);
      };
    },
    '6a99': function(t, n, e) {
      var r = e('d3f4');
      t.exports = function(t, n) {
        if (!r(t)) return t;
        var e, i;
        if (n && 'function' == typeof (e = t.toString) && !r((i = e.call(t)))) return i;
        if ('function' == typeof (e = t.valueOf) && !r((i = e.call(t)))) return i;
        if (!n && 'function' == typeof (e = t.toString) && !r((i = e.call(t)))) return i;
        throw TypeError("Can't convert object to primitive value");
      };
    },
    '6aa2': function(t, n, e) {
      e('ec30')(
        'Uint8',
        1,
        function(t) {
          return function(n, e, r) {
            return t(this, n, e, r);
          };
        },
        !0
      );
    },
    '6b54': function(t, n, e) {
      'use strict';
      e('3846');
      var r = e('cb7c'),
        i = e('0bfb'),
        o = e('9e1e'),
        a = 'toString',
        u = /./[a],
        c = function(t) {
          e('2aba')(RegExp.prototype, a, t, !0);
        };
      e('79e5')(function() {
        return '/a/b' != u.call({ source: 'a', flags: 'b' });
      })
        ? c(function() {
            var t = r(this);
            return '/'.concat(t.source, '/', 'flags' in t ? t.flags : !o && t instanceof RegExp ? i.call(t) : void 0);
          })
        : u.name != a &&
          c(function() {
            return u.call(this);
          });
    },
    '6c1a': function(t, n, e) {
      var r = e('5ca1'),
        i = e('2d5c'),
        o = Math.exp;
      r(
        r.S +
          r.F *
            e('79e5')(function() {
              return -2e-17 != !Math.sinh(-2e-17);
            }),
        'Math',
        {
          sinh: function(t) {
            return Math.abs((t = +t)) < 1 ? (i(t) - i(-t)) / 2 : (o(t - 1) - o(-t - 1)) * (Math.E / 2);
          },
        }
      );
    },
    '6c37': function(t, n, e) {
      'use strict';
      e('386b')('fontcolor', function(t) {
        return function(n) {
          return t(this, 'font', 'color', n);
        };
      });
    },
    '6c7b': function(t, n, e) {
      var r = e('5ca1');
      r(r.P, 'Array', { fill: e('36bd') }), e('9c6c')('fill');
    },
    '6eb0': function(t, n, e) {},
    7333: function(t, n, e) {
      'use strict';
      var r = e('0d58'),
        i = e('2621'),
        o = e('52a7'),
        a = e('4bf8'),
        u = e('626a'),
        c = Object.assign;
      t.exports =
        !c ||
        e('79e5')(function() {
          var t = {},
            n = {},
            e = Symbol(),
            r = 'abcdefghijklmnopqrst';
          return (
            (t[e] = 7),
            r.split('').forEach(function(t) {
              n[t] = t;
            }),
            7 != c({}, t)[e] || Object.keys(c({}, n)).join('') != r
          );
        })
          ? function(t, n) {
              var e = a(t),
                c = arguments.length,
                f = 1,
                s = i.f,
                l = o.f;
              while (c > f) {
                var h,
                  d = u(arguments[f++]),
                  p = s ? r(d).concat(s(d)) : r(d),
                  v = p.length,
                  y = 0;
                while (v > y) l.call(d, (h = p[y++])) && (e[h] = d[h]);
              }
              return e;
            }
          : c;
    },
    '744f': function(t, n, e) {
      var r = e('5ca1');
      r(r.P, 'Array', { copyWithin: e('ba92') }), e('9c6c')('copyWithin');
    },
    7514: function(t, n, e) {
      'use strict';
      var r = e('5ca1'),
        i = e('0a49')(5),
        o = 'find',
        a = !0;
      o in [] &&
        Array(1)[o](function() {
          a = !1;
        }),
        r(r.P + r.F * a, 'Array', {
          find: function(t) {
            return i(this, t, arguments.length > 1 ? arguments[1] : void 0);
          },
        }),
        e('9c6c')(o);
    },
    7726: function(t, n) {
      var e = (t.exports =
        'undefined' != typeof window && window.Math == Math
          ? window
          : 'undefined' != typeof self && self.Math == Math
            ? self
            : Function('return this')());
      'number' == typeof __g && (__g = e);
    },
    '77f1': function(t, n, e) {
      var r = e('4588'),
        i = Math.max,
        o = Math.min;
      t.exports = function(t, n) {
        return (t = r(t)), t < 0 ? i(t + n, 0) : o(t, n);
      };
    },
    7872: function(t, n, e) {
      var r = e('5ca1');
      r(r.S, 'Math', {
        log10: function(t) {
          return Math.log(t) * Math.LOG10E;
        },
      });
    },
    '788d': function(t, n, e) {
      var r = e('5ca1'),
        i = e('6821'),
        o = e('9def');
      r(r.S, 'String', {
        raw: function(t) {
          var n = i(t.raw),
            e = o(n.length),
            r = arguments.length,
            a = [],
            u = 0;
          while (e > u) a.push(String(n[u++])), u < r && a.push(String(arguments[u]));
          return a.join('');
        },
      });
    },
    '79e5': function(t, n) {
      t.exports = function(t) {
        try {
          return !!t();
        } catch (n) {
          return !0;
        }
      };
    },
    '7a56': function(t, n, e) {
      'use strict';
      var r = e('7726'),
        i = e('86cc'),
        o = e('9e1e'),
        a = e('2b4c')('species');
      t.exports = function(t) {
        var n = r[t];
        o &&
          n &&
          !n[a] &&
          i.f(n, a, {
            configurable: !0,
            get: function() {
              return this;
            },
          });
      };
    },
    '7bbc': function(t, n, e) {
      var r = e('6821'),
        i = e('9093').f,
        o = {}.toString,
        a = 'object' == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [],
        u = function(t) {
          try {
            return i(t);
          } catch (n) {
            return a.slice();
          }
        };
      t.exports.f = function(t) {
        return a && '[object Window]' == o.call(t) ? u(t) : i(r(t));
      };
    },
    '7cdf': function(t, n, e) {
      var r = e('5ca1');
      r(r.S, 'Number', { isInteger: e('9c12') });
    },
    '7f20': function(t, n, e) {
      var r = e('86cc').f,
        i = e('69a8'),
        o = e('2b4c')('toStringTag');
      t.exports = function(t, n, e) {
        t && !i((t = e ? t : t.prototype), o) && r(t, o, { configurable: !0, value: n });
      };
    },
    '7f25': function(t, n, e) {
      var r = e('5ca1'),
        i = e('d6c6'),
        o = Math.sqrt,
        a = Math.acosh;
      r(r.S + r.F * !(a && 710 == Math.floor(a(Number.MAX_VALUE)) && a(1 / 0) == 1 / 0), 'Math', {
        acosh: function(t) {
          return (t = +t) < 1 ? NaN : t > 94906265.62425156 ? Math.log(t) + Math.LN2 : i(t - 1 + o(t - 1) * o(t + 1));
        },
      });
    },
    '7f7f': function(t, n, e) {
      var r = e('86cc').f,
        i = Function.prototype,
        o = /^\s*function ([^ (]*)/,
        a = 'name';
      a in i ||
        (e('9e1e') &&
          r(i, a, {
            configurable: !0,
            get: function() {
              try {
                return ('' + this).match(o)[1];
              } catch (t) {
                return '';
              }
            },
          }));
    },
    8079: function(t, n, e) {
      var r = e('7726'),
        i = e('1991').set,
        o = r.MutationObserver || r.WebKitMutationObserver,
        a = r.process,
        u = r.Promise,
        c = 'process' == e('2d95')(a);
      t.exports = function() {
        var t,
          n,
          e,
          f = function() {
            var r, i;
            c && (r = a.domain) && r.exit();
            while (t) {
              (i = t.fn), (t = t.next);
              try {
                i();
              } catch (o) {
                throw (t ? e() : (n = void 0), o);
              }
            }
            (n = void 0), r && r.enter();
          };
        if (c)
          e = function() {
            a.nextTick(f);
          };
        else if (!o || (r.navigator && r.navigator.standalone))
          if (u && u.resolve) {
            var s = u.resolve(void 0);
            e = function() {
              s.then(f);
            };
          } else
            e = function() {
              i.call(r, f);
            };
        else {
          var l = !0,
            h = document.createTextNode('');
          new o(f).observe(h, { characterData: !0 }),
            (e = function() {
              h.data = l = !l;
            });
        }
        return function(r) {
          var i = { fn: r, next: void 0 };
          n && (n.next = i), t || ((t = i), e()), (n = i);
        };
      };
    },
    8378: function(t, n) {
      var e = (t.exports = { version: '2.6.1' });
      'number' == typeof __e && (__e = e);
    },
    8381: function(t, n, e) {
      'use strict';
      var r = e('cb7c'),
        i = e('6a99'),
        o = 'number';
      t.exports = function(t) {
        if ('string' !== t && t !== o && 'default' !== t) throw TypeError('Incorrect hint');
        return i(r(this), t != o);
      };
    },
    '83a1': function(t, n) {
      t.exports =
        Object.is ||
        function(t, n) {
          return t === n ? 0 !== t || 1 / t === 1 / n : t != t && n != n;
        };
    },
    8449: function(t, n, e) {
      'use strict';
      e('386b')('anchor', function(t) {
        return function(n) {
          return t(this, 'a', 'name', n);
        };
      });
    },
    '84b4': function(t, n, e) {
      var r = e('5ca1');
      r(r.S, 'Math', {
        trunc: function(t) {
          return (t > 0 ? Math.floor : Math.ceil)(t);
        },
      });
    },
    '84f2': function(t, n) {
      t.exports = {};
    },
    8615: function(t, n, e) {
      var r = e('5ca1'),
        i = e('504c')(!1);
      r(r.S, 'Object', {
        values: function(t) {
          return i(t);
        },
      });
    },
    '86cc': function(t, n, e) {
      var r = e('cb7c'),
        i = e('c69a'),
        o = e('6a99'),
        a = Object.defineProperty;
      n.f = e('9e1e')
        ? Object.defineProperty
        : function(t, n, e) {
            if ((r(t), (n = o(n, !0)), r(e), i))
              try {
                return a(t, n, e);
              } catch (u) {}
            if ('get' in e || 'set' in e) throw TypeError('Accessors not supported!');
            return 'value' in e && (t[n] = e.value), t;
          };
    },
    '87f3': function(t, n, e) {
      var r = e('5ca1');
      r(r.S, 'Number', { MAX_SAFE_INTEGER: 9007199254740991 });
    },
    '88ca': function(t, n, e) {
      var r = e('86cc'),
        i = e('5ca1'),
        o = e('cb7c'),
        a = e('6a99');
      i(
        i.S +
          i.F *
            e('79e5')(function() {
              Reflect.defineProperty(r.f({}, 1, { value: 1 }), 1, { value: 2 });
            }),
        'Reflect',
        {
          defineProperty: function(t, n, e) {
            o(t), (n = a(n, !0)), o(e);
            try {
              return r.f(t, n, e), !0;
            } catch (i) {
              return !1;
            }
          },
        }
      );
    },
    '8a81': function(t, n, e) {
      'use strict';
      var r = e('7726'),
        i = e('69a8'),
        o = e('9e1e'),
        a = e('5ca1'),
        u = e('2aba'),
        c = e('67ab').KEY,
        f = e('79e5'),
        s = e('5537'),
        l = e('7f20'),
        h = e('ca5a'),
        d = e('2b4c'),
        p = e('37c8'),
        v = e('3a72'),
        y = e('d4c0'),
        g = e('1169'),
        b = e('cb7c'),
        m = e('d3f4'),
        _ = e('6821'),
        w = e('6a99'),
        x = e('4630'),
        M = e('2aeb'),
        S = e('7bbc'),
        A = e('11e9'),
        E = e('86cc'),
        k = e('0d58'),
        C = A.f,
        T = E.f,
        O = S.f,
        N = r.Symbol,
        P = r.JSON,
        R = P && P.stringify,
        j = 'prototype',
        L = d('_hidden'),
        I = d('toPrimitive'),
        $ = {}.propertyIsEnumerable,
        F = s('symbol-registry'),
        D = s('symbols'),
        z = s('op-symbols'),
        U = Object[j],
        B = 'function' == typeof N,
        q = r.QObject,
        V = !q || !q[j] || !q[j].findChild,
        H =
          o &&
          f(function() {
            return (
              7 !=
              M(
                T({}, 'a', {
                  get: function() {
                    return T(this, 'a', { value: 7 }).a;
                  },
                })
              ).a
            );
          })
            ? function(t, n, e) {
                var r = C(U, n);
                r && delete U[n], T(t, n, e), r && t !== U && T(U, n, r);
              }
            : T,
        Y = function(t) {
          var n = (D[t] = M(N[j]));
          return (n._k = t), n;
        },
        G =
          B && 'symbol' == typeof N.iterator
            ? function(t) {
                return 'symbol' == typeof t;
              }
            : function(t) {
                return t instanceof N;
              },
        W = function(t, n, e) {
          return (
            t === U && W(z, n, e),
            b(t),
            (n = w(n, !0)),
            b(e),
            i(D, n)
              ? (e.enumerable
                  ? (i(t, L) && t[L][n] && (t[L][n] = !1), (e = M(e, { enumerable: x(0, !1) })))
                  : (i(t, L) || T(t, L, x(1, {})), (t[L][n] = !0)),
                H(t, n, e))
              : T(t, n, e)
          );
        },
        X = function(t, n) {
          b(t);
          var e,
            r = y((n = _(n))),
            i = 0,
            o = r.length;
          while (o > i) W(t, (e = r[i++]), n[e]);
          return t;
        },
        K = function(t, n) {
          return void 0 === n ? M(t) : X(M(t), n);
        },
        Q = function(t) {
          var n = $.call(this, (t = w(t, !0)));
          return (
            !(this === U && i(D, t) && !i(z, t)) && (!(n || !i(this, t) || !i(D, t) || (i(this, L) && this[L][t])) || n)
          );
        },
        Z = function(t, n) {
          if (((t = _(t)), (n = w(n, !0)), t !== U || !i(D, n) || i(z, n))) {
            var e = C(t, n);
            return !e || !i(D, n) || (i(t, L) && t[L][n]) || (e.enumerable = !0), e;
          }
        },
        J = function(t) {
          var n,
            e = O(_(t)),
            r = [],
            o = 0;
          while (e.length > o) i(D, (n = e[o++])) || n == L || n == c || r.push(n);
          return r;
        },
        tt = function(t) {
          var n,
            e = t === U,
            r = O(e ? z : _(t)),
            o = [],
            a = 0;
          while (r.length > a) !i(D, (n = r[a++])) || (e && !i(U, n)) || o.push(D[n]);
          return o;
        };
      B ||
        ((N = function() {
          if (this instanceof N) throw TypeError('Symbol is not a constructor!');
          var t = h(arguments.length > 0 ? arguments[0] : void 0),
            n = function(e) {
              this === U && n.call(z, e), i(this, L) && i(this[L], t) && (this[L][t] = !1), H(this, t, x(1, e));
            };
          return o && V && H(U, t, { configurable: !0, set: n }), Y(t);
        }),
        u(N[j], 'toString', function() {
          return this._k;
        }),
        (A.f = Z),
        (E.f = W),
        (e('9093').f = S.f = J),
        (e('52a7').f = Q),
        (e('2621').f = tt),
        o && !e('2d00') && u(U, 'propertyIsEnumerable', Q, !0),
        (p.f = function(t) {
          return Y(d(t));
        })),
        a(a.G + a.W + a.F * !B, { Symbol: N });
      for (
        var nt = 'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'.split(
            ','
          ),
          et = 0;
        nt.length > et;

      )
        d(nt[et++]);
      for (var rt = k(d.store), it = 0; rt.length > it; ) v(rt[it++]);
      a(a.S + a.F * !B, 'Symbol', {
        for: function(t) {
          return i(F, (t += '')) ? F[t] : (F[t] = N(t));
        },
        keyFor: function(t) {
          if (!G(t)) throw TypeError(t + ' is not a symbol!');
          for (var n in F) if (F[n] === t) return n;
        },
        useSetter: function() {
          V = !0;
        },
        useSimple: function() {
          V = !1;
        },
      }),
        a(a.S + a.F * !B, 'Object', {
          create: K,
          defineProperty: W,
          defineProperties: X,
          getOwnPropertyDescriptor: Z,
          getOwnPropertyNames: J,
          getOwnPropertySymbols: tt,
        }),
        P &&
          a(
            a.S +
              a.F *
                (!B ||
                  f(function() {
                    var t = N();
                    return '[null]' != R([t]) || '{}' != R({ a: t }) || '{}' != R(Object(t));
                  })),
            'JSON',
            {
              stringify: function(t) {
                var n,
                  e,
                  r = [t],
                  i = 1;
                while (arguments.length > i) r.push(arguments[i++]);
                if (((e = n = r[1]), (m(n) || void 0 !== t) && !G(t)))
                  return (
                    g(n) ||
                      (n = function(t, n) {
                        if (('function' == typeof e && (n = e.call(this, t, n)), !G(n))) return n;
                      }),
                    (r[1] = n),
                    R.apply(P, r)
                  );
              },
            }
          ),
        N[j][I] || e('32e9')(N[j], I, N[j].valueOf),
        l(N, 'Symbol'),
        l(Math, 'Math', !0),
        l(r.JSON, 'JSON', !0);
    },
    '8b97': function(t, n, e) {
      var r = e('d3f4'),
        i = e('cb7c'),
        o = function(t, n) {
          if ((i(t), !r(n) && null !== n)) throw TypeError(n + ": can't set as prototype!");
        };
      t.exports = {
        set:
          Object.setPrototypeOf ||
          ('__proto__' in {}
            ? (function(t, n, r) {
                try {
                  (r = e('9b43')(Function.call, e('11e9').f(Object.prototype, '__proto__').set, 2)),
                    r(t, []),
                    (n = !(t instanceof Array));
                } catch (i) {
                  n = !0;
                }
                return function(t, e) {
                  return o(t, e), n ? (t.__proto__ = e) : r(t, e), t;
                };
              })({}, !1)
            : void 0),
        check: o,
      };
    },
    '8c4f': function(t, n, e) {
      'use strict';
      /*!
  * vue-router v3.0.2
  * (c) 2018 Evan You
  * @license MIT
  */ function r(t, n) {
        0;
      }
      function i(t) {
        return Object.prototype.toString.call(t).indexOf('Error') > -1;
      }
      function o(t, n) {
        for (var e in n) t[e] = n[e];
        return t;
      }
      var a = {
        name: 'RouterView',
        functional: !0,
        props: { name: { type: String, default: 'default' } },
        render: function(t, n) {
          var e = n.props,
            r = n.children,
            i = n.parent,
            a = n.data;
          a.routerView = !0;
          var c = i.$createElement,
            f = e.name,
            s = i.$route,
            l = i._routerViewCache || (i._routerViewCache = {}),
            h = 0,
            d = !1;
          while (i && i._routerRoot !== i)
            i.$vnode && i.$vnode.data.routerView && h++, i._inactive && (d = !0), (i = i.$parent);
          if (((a.routerViewDepth = h), d)) return c(l[f], a, r);
          var p = s.matched[h];
          if (!p) return (l[f] = null), c();
          var v = (l[f] = p.components[f]);
          (a.registerRouteInstance = function(t, n) {
            var e = p.instances[f];
            ((n && e !== t) || (!n && e === t)) && (p.instances[f] = n);
          }),
            ((a.hook || (a.hook = {})).prepatch = function(t, n) {
              p.instances[f] = n.componentInstance;
            });
          var y = (a.props = u(s, p.props && p.props[f]));
          if (y) {
            y = a.props = o({}, y);
            var g = (a.attrs = a.attrs || {});
            for (var b in y) (v.props && b in v.props) || ((g[b] = y[b]), delete y[b]);
          }
          return c(v, a, r);
        },
      };
      function u(t, n) {
        switch (typeof n) {
          case 'undefined':
            return;
          case 'object':
            return n;
          case 'function':
            return n(t);
          case 'boolean':
            return n ? t.params : void 0;
          default:
            0;
        }
      }
      var c = /[!'()*]/g,
        f = function(t) {
          return '%' + t.charCodeAt(0).toString(16);
        },
        s = /%2C/g,
        l = function(t) {
          return encodeURIComponent(t)
            .replace(c, f)
            .replace(s, ',');
        },
        h = decodeURIComponent;
      function d(t, n, e) {
        void 0 === n && (n = {});
        var r,
          i = e || p;
        try {
          r = i(t || '');
        } catch (a) {
          r = {};
        }
        for (var o in n) r[o] = n[o];
        return r;
      }
      function p(t) {
        var n = {};
        return (
          (t = t.trim().replace(/^(\?|#|&)/, '')),
          t
            ? (t.split('&').forEach(function(t) {
                var e = t.replace(/\+/g, ' ').split('='),
                  r = h(e.shift()),
                  i = e.length > 0 ? h(e.join('=')) : null;
                void 0 === n[r] ? (n[r] = i) : Array.isArray(n[r]) ? n[r].push(i) : (n[r] = [n[r], i]);
              }),
              n)
            : n
        );
      }
      function v(t) {
        var n = t
          ? Object.keys(t)
              .map(function(n) {
                var e = t[n];
                if (void 0 === e) return '';
                if (null === e) return l(n);
                if (Array.isArray(e)) {
                  var r = [];
                  return (
                    e.forEach(function(t) {
                      void 0 !== t && (null === t ? r.push(l(n)) : r.push(l(n) + '=' + l(t)));
                    }),
                    r.join('&')
                  );
                }
                return l(n) + '=' + l(e);
              })
              .filter(function(t) {
                return t.length > 0;
              })
              .join('&')
          : null;
        return n ? '?' + n : '';
      }
      var y = /\/?$/;
      function g(t, n, e, r) {
        var i = r && r.options.stringifyQuery,
          o = n.query || {};
        try {
          o = b(o);
        } catch (u) {}
        var a = {
          name: n.name || (t && t.name),
          meta: (t && t.meta) || {},
          path: n.path || '/',
          hash: n.hash || '',
          query: o,
          params: n.params || {},
          fullPath: w(n, i),
          matched: t ? _(t) : [],
        };
        return e && (a.redirectedFrom = w(e, i)), Object.freeze(a);
      }
      function b(t) {
        if (Array.isArray(t)) return t.map(b);
        if (t && 'object' === typeof t) {
          var n = {};
          for (var e in t) n[e] = b(t[e]);
          return n;
        }
        return t;
      }
      var m = g(null, { path: '/' });
      function _(t) {
        var n = [];
        while (t) n.unshift(t), (t = t.parent);
        return n;
      }
      function w(t, n) {
        var e = t.path,
          r = t.query;
        void 0 === r && (r = {});
        var i = t.hash;
        void 0 === i && (i = '');
        var o = n || v;
        return (e || '/') + o(r) + i;
      }
      function x(t, n) {
        return n === m
          ? t === n
          : !!n &&
              (t.path && n.path
                ? t.path.replace(y, '') === n.path.replace(y, '') && t.hash === n.hash && M(t.query, n.query)
                : !(!t.name || !n.name) &&
                  (t.name === n.name && t.hash === n.hash && M(t.query, n.query) && M(t.params, n.params)));
      }
      function M(t, n) {
        if ((void 0 === t && (t = {}), void 0 === n && (n = {}), !t || !n)) return t === n;
        var e = Object.keys(t),
          r = Object.keys(n);
        return (
          e.length === r.length &&
          e.every(function(e) {
            var r = t[e],
              i = n[e];
            return 'object' === typeof r && 'object' === typeof i ? M(r, i) : String(r) === String(i);
          })
        );
      }
      function S(t, n) {
        return (
          0 === t.path.replace(y, '/').indexOf(n.path.replace(y, '/')) &&
          (!n.hash || t.hash === n.hash) &&
          A(t.query, n.query)
        );
      }
      function A(t, n) {
        for (var e in n) if (!(e in t)) return !1;
        return !0;
      }
      var E,
        k = [String, Object],
        C = [String, Array],
        T = {
          name: 'RouterLink',
          props: {
            to: { type: k, required: !0 },
            tag: { type: String, default: 'a' },
            exact: Boolean,
            append: Boolean,
            replace: Boolean,
            activeClass: String,
            exactActiveClass: String,
            event: { type: C, default: 'click' },
          },
          render: function(t) {
            var n = this,
              e = this.$router,
              r = this.$route,
              i = e.resolve(this.to, r, this.append),
              a = i.location,
              u = i.route,
              c = i.href,
              f = {},
              s = e.options.linkActiveClass,
              l = e.options.linkExactActiveClass,
              h = null == s ? 'router-link-active' : s,
              d = null == l ? 'router-link-exact-active' : l,
              p = null == this.activeClass ? h : this.activeClass,
              v = null == this.exactActiveClass ? d : this.exactActiveClass,
              y = a.path ? g(null, a, null, e) : u;
            (f[v] = x(r, y)), (f[p] = this.exact ? f[v] : S(r, y));
            var b = function(t) {
                O(t) && (n.replace ? e.replace(a) : e.push(a));
              },
              m = { click: O };
            Array.isArray(this.event)
              ? this.event.forEach(function(t) {
                  m[t] = b;
                })
              : (m[this.event] = b);
            var _ = { class: f };
            if ('a' === this.tag) (_.on = m), (_.attrs = { href: c });
            else {
              var w = N(this.$slots.default);
              if (w) {
                w.isStatic = !1;
                var M = (w.data = o({}, w.data));
                M.on = m;
                var A = (w.data.attrs = o({}, w.data.attrs));
                A.href = c;
              } else _.on = m;
            }
            return t(this.tag, _, this.$slots.default);
          },
        };
      function O(t) {
        if (
          !(t.metaKey || t.altKey || t.ctrlKey || t.shiftKey) &&
          !t.defaultPrevented &&
          (void 0 === t.button || 0 === t.button)
        ) {
          if (t.currentTarget && t.currentTarget.getAttribute) {
            var n = t.currentTarget.getAttribute('target');
            if (/\b_blank\b/i.test(n)) return;
          }
          return t.preventDefault && t.preventDefault(), !0;
        }
      }
      function N(t) {
        if (t)
          for (var n, e = 0; e < t.length; e++) {
            if (((n = t[e]), 'a' === n.tag)) return n;
            if (n.children && (n = N(n.children))) return n;
          }
      }
      function P(t) {
        if (!P.installed || E !== t) {
          (P.installed = !0), (E = t);
          var n = function(t) {
              return void 0 !== t;
            },
            e = function(t, e) {
              var r = t.$options._parentVnode;
              n(r) && n((r = r.data)) && n((r = r.registerRouteInstance)) && r(t, e);
            };
          t.mixin({
            beforeCreate: function() {
              n(this.$options.router)
                ? ((this._routerRoot = this),
                  (this._router = this.$options.router),
                  this._router.init(this),
                  t.util.defineReactive(this, '_route', this._router.history.current))
                : (this._routerRoot = (this.$parent && this.$parent._routerRoot) || this),
                e(this, this);
            },
            destroyed: function() {
              e(this);
            },
          }),
            Object.defineProperty(t.prototype, '$router', {
              get: function() {
                return this._routerRoot._router;
              },
            }),
            Object.defineProperty(t.prototype, '$route', {
              get: function() {
                return this._routerRoot._route;
              },
            }),
            t.component('RouterView', a),
            t.component('RouterLink', T);
          var r = t.config.optionMergeStrategies;
          r.beforeRouteEnter = r.beforeRouteLeave = r.beforeRouteUpdate = r.created;
        }
      }
      var R = 'undefined' !== typeof window;
      function j(t, n, e) {
        var r = t.charAt(0);
        if ('/' === r) return t;
        if ('?' === r || '#' === r) return n + t;
        var i = n.split('/');
        (e && i[i.length - 1]) || i.pop();
        for (var o = t.replace(/^\//, '').split('/'), a = 0; a < o.length; a++) {
          var u = o[a];
          '..' === u ? i.pop() : '.' !== u && i.push(u);
        }
        return '' !== i[0] && i.unshift(''), i.join('/');
      }
      function L(t) {
        var n = '',
          e = '',
          r = t.indexOf('#');
        r >= 0 && ((n = t.slice(r)), (t = t.slice(0, r)));
        var i = t.indexOf('?');
        return i >= 0 && ((e = t.slice(i + 1)), (t = t.slice(0, i))), { path: t, query: e, hash: n };
      }
      function I(t) {
        return t.replace(/\/\//g, '/');
      }
      var $ =
          Array.isArray ||
          function(t) {
            return '[object Array]' == Object.prototype.toString.call(t);
          },
        F = rt,
        D = V,
        z = H,
        U = W,
        B = et,
        q = new RegExp(
          [
            '(\\\\.)',
            '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))',
          ].join('|'),
          'g'
        );
      function V(t, n) {
        var e,
          r = [],
          i = 0,
          o = 0,
          a = '',
          u = (n && n.delimiter) || '/';
        while (null != (e = q.exec(t))) {
          var c = e[0],
            f = e[1],
            s = e.index;
          if (((a += t.slice(o, s)), (o = s + c.length), f)) a += f[1];
          else {
            var l = t[o],
              h = e[2],
              d = e[3],
              p = e[4],
              v = e[5],
              y = e[6],
              g = e[7];
            a && (r.push(a), (a = ''));
            var b = null != h && null != l && l !== h,
              m = '+' === y || '*' === y,
              _ = '?' === y || '*' === y,
              w = e[2] || u,
              x = p || v;
            r.push({
              name: d || i++,
              prefix: h || '',
              delimiter: w,
              optional: _,
              repeat: m,
              partial: b,
              asterisk: !!g,
              pattern: x ? K(x) : g ? '.*' : '[^' + X(w) + ']+?',
            });
          }
        }
        return o < t.length && (a += t.substr(o)), a && r.push(a), r;
      }
      function H(t, n) {
        return W(V(t, n));
      }
      function Y(t) {
        return encodeURI(t).replace(/[\/?#]/g, function(t) {
          return (
            '%' +
            t
              .charCodeAt(0)
              .toString(16)
              .toUpperCase()
          );
        });
      }
      function G(t) {
        return encodeURI(t).replace(/[?#]/g, function(t) {
          return (
            '%' +
            t
              .charCodeAt(0)
              .toString(16)
              .toUpperCase()
          );
        });
      }
      function W(t) {
        for (var n = new Array(t.length), e = 0; e < t.length; e++)
          'object' === typeof t[e] && (n[e] = new RegExp('^(?:' + t[e].pattern + ')$'));
        return function(e, r) {
          for (var i = '', o = e || {}, a = r || {}, u = a.pretty ? Y : encodeURIComponent, c = 0; c < t.length; c++) {
            var f = t[c];
            if ('string' !== typeof f) {
              var s,
                l = o[f.name];
              if (null == l) {
                if (f.optional) {
                  f.partial && (i += f.prefix);
                  continue;
                }
                throw new TypeError('Expected "' + f.name + '" to be defined');
              }
              if ($(l)) {
                if (!f.repeat)
                  throw new TypeError(
                    'Expected "' + f.name + '" to not repeat, but received `' + JSON.stringify(l) + '`'
                  );
                if (0 === l.length) {
                  if (f.optional) continue;
                  throw new TypeError('Expected "' + f.name + '" to not be empty');
                }
                for (var h = 0; h < l.length; h++) {
                  if (((s = u(l[h])), !n[c].test(s)))
                    throw new TypeError(
                      'Expected all "' +
                        f.name +
                        '" to match "' +
                        f.pattern +
                        '", but received `' +
                        JSON.stringify(s) +
                        '`'
                    );
                  i += (0 === h ? f.prefix : f.delimiter) + s;
                }
              } else {
                if (((s = f.asterisk ? G(l) : u(l)), !n[c].test(s)))
                  throw new TypeError(
                    'Expected "' + f.name + '" to match "' + f.pattern + '", but received "' + s + '"'
                  );
                i += f.prefix + s;
              }
            } else i += f;
          }
          return i;
        };
      }
      function X(t) {
        return t.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1');
      }
      function K(t) {
        return t.replace(/([=!:$\/()])/g, '\\$1');
      }
      function Q(t, n) {
        return (t.keys = n), t;
      }
      function Z(t) {
        return t.sensitive ? '' : 'i';
      }
      function J(t, n) {
        var e = t.source.match(/\((?!\?)/g);
        if (e)
          for (var r = 0; r < e.length; r++)
            n.push({
              name: r,
              prefix: null,
              delimiter: null,
              optional: !1,
              repeat: !1,
              partial: !1,
              asterisk: !1,
              pattern: null,
            });
        return Q(t, n);
      }
      function tt(t, n, e) {
        for (var r = [], i = 0; i < t.length; i++) r.push(rt(t[i], n, e).source);
        var o = new RegExp('(?:' + r.join('|') + ')', Z(e));
        return Q(o, n);
      }
      function nt(t, n, e) {
        return et(V(t, e), n, e);
      }
      function et(t, n, e) {
        $(n) || ((e = n || e), (n = [])), (e = e || {});
        for (var r = e.strict, i = !1 !== e.end, o = '', a = 0; a < t.length; a++) {
          var u = t[a];
          if ('string' === typeof u) o += X(u);
          else {
            var c = X(u.prefix),
              f = '(?:' + u.pattern + ')';
            n.push(u),
              u.repeat && (f += '(?:' + c + f + ')*'),
              (f = u.optional ? (u.partial ? c + '(' + f + ')?' : '(?:' + c + '(' + f + '))?') : c + '(' + f + ')'),
              (o += f);
          }
        }
        var s = X(e.delimiter || '/'),
          l = o.slice(-s.length) === s;
        return (
          r || (o = (l ? o.slice(0, -s.length) : o) + '(?:' + s + '(?=$))?'),
          (o += i ? '$' : r && l ? '' : '(?=' + s + '|$)'),
          Q(new RegExp('^' + o, Z(e)), n)
        );
      }
      function rt(t, n, e) {
        return (
          $(n) || ((e = n || e), (n = [])),
          (e = e || {}),
          t instanceof RegExp ? J(t, n) : $(t) ? tt(t, n, e) : nt(t, n, e)
        );
      }
      (F.parse = D), (F.compile = z), (F.tokensToFunction = U), (F.tokensToRegExp = B);
      var it = Object.create(null);
      function ot(t, n, e) {
        try {
          var r = it[t] || (it[t] = F.compile(t));
          return r(n || {}, { pretty: !0 });
        } catch (i) {
          return '';
        }
      }
      function at(t, n, e, r) {
        var i = n || [],
          o = e || Object.create(null),
          a = r || Object.create(null);
        t.forEach(function(t) {
          ut(i, o, a, t);
        });
        for (var u = 0, c = i.length; u < c; u++) '*' === i[u] && (i.push(i.splice(u, 1)[0]), c--, u--);
        return { pathList: i, pathMap: o, nameMap: a };
      }
      function ut(t, n, e, r, i, o) {
        var a = r.path,
          u = r.name;
        var c = r.pathToRegexpOptions || {},
          f = ft(a, i, c.strict);
        'boolean' === typeof r.caseSensitive && (c.sensitive = r.caseSensitive);
        var s = {
          path: f,
          regex: ct(f, c),
          components: r.components || { default: r.component },
          instances: {},
          name: u,
          parent: i,
          matchAs: o,
          redirect: r.redirect,
          beforeEnter: r.beforeEnter,
          meta: r.meta || {},
          props: null == r.props ? {} : r.components ? r.props : { default: r.props },
        };
        if (
          (r.children &&
            r.children.forEach(function(r) {
              var i = o ? I(o + '/' + r.path) : void 0;
              ut(t, n, e, r, s, i);
            }),
          void 0 !== r.alias)
        ) {
          var l = Array.isArray(r.alias) ? r.alias : [r.alias];
          l.forEach(function(o) {
            var a = { path: o, children: r.children };
            ut(t, n, e, a, i, s.path || '/');
          });
        }
        n[s.path] || (t.push(s.path), (n[s.path] = s)), u && (e[u] || (e[u] = s));
      }
      function ct(t, n) {
        var e = F(t, [], n);
        return e;
      }
      function ft(t, n, e) {
        return e || (t = t.replace(/\/$/, '')), '/' === t[0] ? t : null == n ? t : I(n.path + '/' + t);
      }
      function st(t, n, e, r) {
        var i = 'string' === typeof t ? { path: t } : t;
        if (i.name || i._normalized) return i;
        if (!i.path && i.params && n) {
          (i = o({}, i)), (i._normalized = !0);
          var a = o(o({}, n.params), i.params);
          if (n.name) (i.name = n.name), (i.params = a);
          else if (n.matched.length) {
            var u = n.matched[n.matched.length - 1].path;
            i.path = ot(u, a, 'path ' + n.path);
          } else 0;
          return i;
        }
        var c = L(i.path || ''),
          f = (n && n.path) || '/',
          s = c.path ? j(c.path, f, e || i.append) : f,
          l = d(c.query, i.query, r && r.options.parseQuery),
          h = i.hash || c.hash;
        return h && '#' !== h.charAt(0) && (h = '#' + h), { _normalized: !0, path: s, query: l, hash: h };
      }
      function lt(t, n) {
        var e = at(t),
          r = e.pathList,
          i = e.pathMap,
          o = e.nameMap;
        function a(t) {
          at(t, r, i, o);
        }
        function u(t, e, a) {
          var u = st(t, e, !1, n),
            c = u.name;
          if (c) {
            var f = o[c];
            if (!f) return s(null, u);
            var l = f.regex.keys
              .filter(function(t) {
                return !t.optional;
              })
              .map(function(t) {
                return t.name;
              });
            if (('object' !== typeof u.params && (u.params = {}), e && 'object' === typeof e.params))
              for (var h in e.params) !(h in u.params) && l.indexOf(h) > -1 && (u.params[h] = e.params[h]);
            if (f) return (u.path = ot(f.path, u.params, 'named route "' + c + '"')), s(f, u, a);
          } else if (u.path) {
            u.params = {};
            for (var d = 0; d < r.length; d++) {
              var p = r[d],
                v = i[p];
              if (ht(v.regex, u.path, u.params)) return s(v, u, a);
            }
          }
          return s(null, u);
        }
        function c(t, e) {
          var r = t.redirect,
            i = 'function' === typeof r ? r(g(t, e, null, n)) : r;
          if (('string' === typeof i && (i = { path: i }), !i || 'object' !== typeof i)) return s(null, e);
          var a = i,
            c = a.name,
            f = a.path,
            l = e.query,
            h = e.hash,
            d = e.params;
          if (
            ((l = a.hasOwnProperty('query') ? a.query : l),
            (h = a.hasOwnProperty('hash') ? a.hash : h),
            (d = a.hasOwnProperty('params') ? a.params : d),
            c)
          ) {
            o[c];
            return u({ _normalized: !0, name: c, query: l, hash: h, params: d }, void 0, e);
          }
          if (f) {
            var p = dt(f, t),
              v = ot(p, d, 'redirect route with path "' + p + '"');
            return u({ _normalized: !0, path: v, query: l, hash: h }, void 0, e);
          }
          return s(null, e);
        }
        function f(t, n, e) {
          var r = ot(e, n.params, 'aliased route with path "' + e + '"'),
            i = u({ _normalized: !0, path: r });
          if (i) {
            var o = i.matched,
              a = o[o.length - 1];
            return (n.params = i.params), s(a, n);
          }
          return s(null, n);
        }
        function s(t, e, r) {
          return t && t.redirect ? c(t, r || e) : t && t.matchAs ? f(t, e, t.matchAs) : g(t, e, r, n);
        }
        return { match: u, addRoutes: a };
      }
      function ht(t, n, e) {
        var r = n.match(t);
        if (!r) return !1;
        if (!e) return !0;
        for (var i = 1, o = r.length; i < o; ++i) {
          var a = t.keys[i - 1],
            u = 'string' === typeof r[i] ? decodeURIComponent(r[i]) : r[i];
          a && (e[a.name || 'pathMatch'] = u);
        }
        return !0;
      }
      function dt(t, n) {
        return j(t, n.parent ? n.parent.path : '/', !0);
      }
      var pt = Object.create(null);
      function vt() {
        window.history.replaceState({ key: Tt() }, '', window.location.href.replace(window.location.origin, '')),
          window.addEventListener('popstate', function(t) {
            gt(), t.state && t.state.key && Ot(t.state.key);
          });
      }
      function yt(t, n, e, r) {
        if (t.app) {
          var i = t.options.scrollBehavior;
          i &&
            t.app.$nextTick(function() {
              var o = bt(),
                a = i.call(t, n, e, r ? o : null);
              a &&
                ('function' === typeof a.then
                  ? a
                      .then(function(t) {
                        St(t, o);
                      })
                      .catch(function(t) {
                        0;
                      })
                  : St(a, o));
            });
        }
      }
      function gt() {
        var t = Tt();
        t && (pt[t] = { x: window.pageXOffset, y: window.pageYOffset });
      }
      function bt() {
        var t = Tt();
        if (t) return pt[t];
      }
      function mt(t, n) {
        var e = document.documentElement,
          r = e.getBoundingClientRect(),
          i = t.getBoundingClientRect();
        return { x: i.left - r.left - n.x, y: i.top - r.top - n.y };
      }
      function _t(t) {
        return Mt(t.x) || Mt(t.y);
      }
      function wt(t) {
        return { x: Mt(t.x) ? t.x : window.pageXOffset, y: Mt(t.y) ? t.y : window.pageYOffset };
      }
      function xt(t) {
        return { x: Mt(t.x) ? t.x : 0, y: Mt(t.y) ? t.y : 0 };
      }
      function Mt(t) {
        return 'number' === typeof t;
      }
      function St(t, n) {
        var e = 'object' === typeof t;
        if (e && 'string' === typeof t.selector) {
          var r = document.querySelector(t.selector);
          if (r) {
            var i = t.offset && 'object' === typeof t.offset ? t.offset : {};
            (i = xt(i)), (n = mt(r, i));
          } else _t(t) && (n = wt(t));
        } else e && _t(t) && (n = wt(t));
        n && window.scrollTo(n.x, n.y);
      }
      var At =
          R &&
          (function() {
            var t = window.navigator.userAgent;
            return (
              ((-1 === t.indexOf('Android 2.') && -1 === t.indexOf('Android 4.0')) ||
                -1 === t.indexOf('Mobile Safari') ||
                -1 !== t.indexOf('Chrome') ||
                -1 !== t.indexOf('Windows Phone')) &&
              (window.history && 'pushState' in window.history)
            );
          })(),
        Et = R && window.performance && window.performance.now ? window.performance : Date,
        kt = Ct();
      function Ct() {
        return Et.now().toFixed(3);
      }
      function Tt() {
        return kt;
      }
      function Ot(t) {
        kt = t;
      }
      function Nt(t, n) {
        gt();
        var e = window.history;
        try {
          n ? e.replaceState({ key: kt }, '', t) : ((kt = Ct()), e.pushState({ key: kt }, '', t));
        } catch (r) {
          window.location[n ? 'replace' : 'assign'](t);
        }
      }
      function Pt(t) {
        Nt(t, !0);
      }
      function Rt(t, n, e) {
        var r = function(i) {
          i >= t.length
            ? e()
            : t[i]
              ? n(t[i], function() {
                  r(i + 1);
                })
              : r(i + 1);
        };
        r(0);
      }
      function jt(t) {
        return function(n, e, r) {
          var o = !1,
            a = 0,
            u = null;
          Lt(t, function(t, n, e, c) {
            if ('function' === typeof t && void 0 === t.cid) {
              (o = !0), a++;
              var f,
                s = Dt(function(n) {
                  Ft(n) && (n = n.default),
                    (t.resolved = 'function' === typeof n ? n : E.extend(n)),
                    (e.components[c] = n),
                    a--,
                    a <= 0 && r();
                }),
                l = Dt(function(t) {
                  var n = 'Failed to resolve async component ' + c + ': ' + t;
                  u || ((u = i(t) ? t : new Error(n)), r(u));
                });
              try {
                f = t(s, l);
              } catch (d) {
                l(d);
              }
              if (f)
                if ('function' === typeof f.then) f.then(s, l);
                else {
                  var h = f.component;
                  h && 'function' === typeof h.then && h.then(s, l);
                }
            }
          }),
            o || r();
        };
      }
      function Lt(t, n) {
        return It(
          t.map(function(t) {
            return Object.keys(t.components).map(function(e) {
              return n(t.components[e], t.instances[e], t, e);
            });
          })
        );
      }
      function It(t) {
        return Array.prototype.concat.apply([], t);
      }
      var $t = 'function' === typeof Symbol && 'symbol' === typeof Symbol.toStringTag;
      function Ft(t) {
        return t.__esModule || ($t && 'Module' === t[Symbol.toStringTag]);
      }
      function Dt(t) {
        var n = !1;
        return function() {
          var e = [],
            r = arguments.length;
          while (r--) e[r] = arguments[r];
          if (!n) return (n = !0), t.apply(this, e);
        };
      }
      var zt = function(t, n) {
        (this.router = t),
          (this.base = Ut(n)),
          (this.current = m),
          (this.pending = null),
          (this.ready = !1),
          (this.readyCbs = []),
          (this.readyErrorCbs = []),
          (this.errorCbs = []);
      };
      function Ut(t) {
        if (!t)
          if (R) {
            var n = document.querySelector('base');
            (t = (n && n.getAttribute('href')) || '/'), (t = t.replace(/^https?:\/\/[^\/]+/, ''));
          } else t = '/';
        return '/' !== t.charAt(0) && (t = '/' + t), t.replace(/\/$/, '');
      }
      function Bt(t, n) {
        var e,
          r = Math.max(t.length, n.length);
        for (e = 0; e < r; e++) if (t[e] !== n[e]) break;
        return { updated: n.slice(0, e), activated: n.slice(e), deactivated: t.slice(e) };
      }
      function qt(t, n, e, r) {
        var i = Lt(t, function(t, r, i, o) {
          var a = Vt(t, n);
          if (a)
            return Array.isArray(a)
              ? a.map(function(t) {
                  return e(t, r, i, o);
                })
              : e(a, r, i, o);
        });
        return It(r ? i.reverse() : i);
      }
      function Vt(t, n) {
        return 'function' !== typeof t && (t = E.extend(t)), t.options[n];
      }
      function Ht(t) {
        return qt(t, 'beforeRouteLeave', Gt, !0);
      }
      function Yt(t) {
        return qt(t, 'beforeRouteUpdate', Gt);
      }
      function Gt(t, n) {
        if (n)
          return function() {
            return t.apply(n, arguments);
          };
      }
      function Wt(t, n, e) {
        return qt(t, 'beforeRouteEnter', function(t, r, i, o) {
          return Xt(t, i, o, n, e);
        });
      }
      function Xt(t, n, e, r, i) {
        return function(o, a, u) {
          return t(o, a, function(t) {
            u(t),
              'function' === typeof t &&
                r.push(function() {
                  Kt(t, n.instances, e, i);
                });
          });
        };
      }
      function Kt(t, n, e, r) {
        n[e] && !n[e]._isBeingDestroyed
          ? t(n[e])
          : r() &&
            setTimeout(function() {
              Kt(t, n, e, r);
            }, 16);
      }
      (zt.prototype.listen = function(t) {
        this.cb = t;
      }),
        (zt.prototype.onReady = function(t, n) {
          this.ready ? t() : (this.readyCbs.push(t), n && this.readyErrorCbs.push(n));
        }),
        (zt.prototype.onError = function(t) {
          this.errorCbs.push(t);
        }),
        (zt.prototype.transitionTo = function(t, n, e) {
          var r = this,
            i = this.router.match(t, this.current);
          this.confirmTransition(
            i,
            function() {
              r.updateRoute(i),
                n && n(i),
                r.ensureURL(),
                r.ready ||
                  ((r.ready = !0),
                  r.readyCbs.forEach(function(t) {
                    t(i);
                  }));
            },
            function(t) {
              e && e(t),
                t &&
                  !r.ready &&
                  ((r.ready = !0),
                  r.readyErrorCbs.forEach(function(n) {
                    n(t);
                  }));
            }
          );
        }),
        (zt.prototype.confirmTransition = function(t, n, e) {
          var o = this,
            a = this.current,
            u = function(t) {
              i(t) &&
                (o.errorCbs.length
                  ? o.errorCbs.forEach(function(n) {
                      n(t);
                    })
                  : (r(!1, 'uncaught error during route navigation:'), console.error(t))),
                e && e(t);
            };
          if (x(t, a) && t.matched.length === a.matched.length) return this.ensureURL(), u();
          var c = Bt(this.current.matched, t.matched),
            f = c.updated,
            s = c.deactivated,
            l = c.activated,
            h = [].concat(
              Ht(s),
              this.router.beforeHooks,
              Yt(f),
              l.map(function(t) {
                return t.beforeEnter;
              }),
              jt(l)
            );
          this.pending = t;
          var d = function(n, e) {
            if (o.pending !== t) return u();
            try {
              n(t, a, function(t) {
                !1 === t || i(t)
                  ? (o.ensureURL(!0), u(t))
                  : 'string' === typeof t ||
                    ('object' === typeof t && ('string' === typeof t.path || 'string' === typeof t.name))
                    ? (u(), 'object' === typeof t && t.replace ? o.replace(t) : o.push(t))
                    : e(t);
              });
            } catch (r) {
              u(r);
            }
          };
          Rt(h, d, function() {
            var e = [],
              r = function() {
                return o.current === t;
              },
              i = Wt(l, e, r),
              a = i.concat(o.router.resolveHooks);
            Rt(a, d, function() {
              if (o.pending !== t) return u();
              (o.pending = null),
                n(t),
                o.router.app &&
                  o.router.app.$nextTick(function() {
                    e.forEach(function(t) {
                      t();
                    });
                  });
            });
          });
        }),
        (zt.prototype.updateRoute = function(t) {
          var n = this.current;
          (this.current = t),
            this.cb && this.cb(t),
            this.router.afterHooks.forEach(function(e) {
              e && e(t, n);
            });
        });
      var Qt = (function(t) {
        function n(n, e) {
          var r = this;
          t.call(this, n, e);
          var i = n.options.scrollBehavior,
            o = At && i;
          o && vt();
          var a = Zt(this.base);
          window.addEventListener('popstate', function(t) {
            var e = r.current,
              i = Zt(r.base);
            (r.current === m && i === a) ||
              r.transitionTo(i, function(t) {
                o && yt(n, t, e, !0);
              });
          });
        }
        return (
          t && (n.__proto__ = t),
          (n.prototype = Object.create(t && t.prototype)),
          (n.prototype.constructor = n),
          (n.prototype.go = function(t) {
            window.history.go(t);
          }),
          (n.prototype.push = function(t, n, e) {
            var r = this,
              i = this,
              o = i.current;
            this.transitionTo(
              t,
              function(t) {
                Nt(I(r.base + t.fullPath)), yt(r.router, t, o, !1), n && n(t);
              },
              e
            );
          }),
          (n.prototype.replace = function(t, n, e) {
            var r = this,
              i = this,
              o = i.current;
            this.transitionTo(
              t,
              function(t) {
                Pt(I(r.base + t.fullPath)), yt(r.router, t, o, !1), n && n(t);
              },
              e
            );
          }),
          (n.prototype.ensureURL = function(t) {
            if (Zt(this.base) !== this.current.fullPath) {
              var n = I(this.base + this.current.fullPath);
              t ? Nt(n) : Pt(n);
            }
          }),
          (n.prototype.getCurrentLocation = function() {
            return Zt(this.base);
          }),
          n
        );
      })(zt);
      function Zt(t) {
        var n = decodeURI(window.location.pathname);
        return (
          t && 0 === n.indexOf(t) && (n = n.slice(t.length)), (n || '/') + window.location.search + window.location.hash
        );
      }
      var Jt = (function(t) {
        function n(n, e, r) {
          t.call(this, n, e), (r && tn(this.base)) || nn();
        }
        return (
          t && (n.__proto__ = t),
          (n.prototype = Object.create(t && t.prototype)),
          (n.prototype.constructor = n),
          (n.prototype.setupListeners = function() {
            var t = this,
              n = this.router,
              e = n.options.scrollBehavior,
              r = At && e;
            r && vt(),
              window.addEventListener(At ? 'popstate' : 'hashchange', function() {
                var n = t.current;
                nn() &&
                  t.transitionTo(en(), function(e) {
                    r && yt(t.router, e, n, !0), At || an(e.fullPath);
                  });
              });
          }),
          (n.prototype.push = function(t, n, e) {
            var r = this,
              i = this,
              o = i.current;
            this.transitionTo(
              t,
              function(t) {
                on(t.fullPath), yt(r.router, t, o, !1), n && n(t);
              },
              e
            );
          }),
          (n.prototype.replace = function(t, n, e) {
            var r = this,
              i = this,
              o = i.current;
            this.transitionTo(
              t,
              function(t) {
                an(t.fullPath), yt(r.router, t, o, !1), n && n(t);
              },
              e
            );
          }),
          (n.prototype.go = function(t) {
            window.history.go(t);
          }),
          (n.prototype.ensureURL = function(t) {
            var n = this.current.fullPath;
            en() !== n && (t ? on(n) : an(n));
          }),
          (n.prototype.getCurrentLocation = function() {
            return en();
          }),
          n
        );
      })(zt);
      function tn(t) {
        var n = Zt(t);
        if (!/^\/#/.test(n)) return window.location.replace(I(t + '/#' + n)), !0;
      }
      function nn() {
        var t = en();
        return '/' === t.charAt(0) || (an('/' + t), !1);
      }
      function en() {
        var t = window.location.href,
          n = t.indexOf('#');
        return -1 === n ? '' : decodeURI(t.slice(n + 1));
      }
      function rn(t) {
        var n = window.location.href,
          e = n.indexOf('#'),
          r = e >= 0 ? n.slice(0, e) : n;
        return r + '#' + t;
      }
      function on(t) {
        At ? Nt(rn(t)) : (window.location.hash = t);
      }
      function an(t) {
        At ? Pt(rn(t)) : window.location.replace(rn(t));
      }
      var un = (function(t) {
          function n(n, e) {
            t.call(this, n, e), (this.stack = []), (this.index = -1);
          }
          return (
            t && (n.__proto__ = t),
            (n.prototype = Object.create(t && t.prototype)),
            (n.prototype.constructor = n),
            (n.prototype.push = function(t, n, e) {
              var r = this;
              this.transitionTo(
                t,
                function(t) {
                  (r.stack = r.stack.slice(0, r.index + 1).concat(t)), r.index++, n && n(t);
                },
                e
              );
            }),
            (n.prototype.replace = function(t, n, e) {
              var r = this;
              this.transitionTo(
                t,
                function(t) {
                  (r.stack = r.stack.slice(0, r.index).concat(t)), n && n(t);
                },
                e
              );
            }),
            (n.prototype.go = function(t) {
              var n = this,
                e = this.index + t;
              if (!(e < 0 || e >= this.stack.length)) {
                var r = this.stack[e];
                this.confirmTransition(r, function() {
                  (n.index = e), n.updateRoute(r);
                });
              }
            }),
            (n.prototype.getCurrentLocation = function() {
              var t = this.stack[this.stack.length - 1];
              return t ? t.fullPath : '/';
            }),
            (n.prototype.ensureURL = function() {}),
            n
          );
        })(zt),
        cn = function(t) {
          void 0 === t && (t = {}),
            (this.app = null),
            (this.apps = []),
            (this.options = t),
            (this.beforeHooks = []),
            (this.resolveHooks = []),
            (this.afterHooks = []),
            (this.matcher = lt(t.routes || [], this));
          var n = t.mode || 'hash';
          switch (
            ((this.fallback = 'history' === n && !At && !1 !== t.fallback),
            this.fallback && (n = 'hash'),
            R || (n = 'abstract'),
            (this.mode = n),
            n)
          ) {
            case 'history':
              this.history = new Qt(this, t.base);
              break;
            case 'hash':
              this.history = new Jt(this, t.base, this.fallback);
              break;
            case 'abstract':
              this.history = new un(this, t.base);
              break;
            default:
              0;
          }
        },
        fn = { currentRoute: { configurable: !0 } };
      function sn(t, n) {
        return (
          t.push(n),
          function() {
            var e = t.indexOf(n);
            e > -1 && t.splice(e, 1);
          }
        );
      }
      function ln(t, n, e) {
        var r = 'hash' === e ? '#' + n : n;
        return t ? I(t + '/' + r) : r;
      }
      (cn.prototype.match = function(t, n, e) {
        return this.matcher.match(t, n, e);
      }),
        (fn.currentRoute.get = function() {
          return this.history && this.history.current;
        }),
        (cn.prototype.init = function(t) {
          var n = this;
          if ((this.apps.push(t), !this.app)) {
            this.app = t;
            var e = this.history;
            if (e instanceof Qt) e.transitionTo(e.getCurrentLocation());
            else if (e instanceof Jt) {
              var r = function() {
                e.setupListeners();
              };
              e.transitionTo(e.getCurrentLocation(), r, r);
            }
            e.listen(function(t) {
              n.apps.forEach(function(n) {
                n._route = t;
              });
            });
          }
        }),
        (cn.prototype.beforeEach = function(t) {
          return sn(this.beforeHooks, t);
        }),
        (cn.prototype.beforeResolve = function(t) {
          return sn(this.resolveHooks, t);
        }),
        (cn.prototype.afterEach = function(t) {
          return sn(this.afterHooks, t);
        }),
        (cn.prototype.onReady = function(t, n) {
          this.history.onReady(t, n);
        }),
        (cn.prototype.onError = function(t) {
          this.history.onError(t);
        }),
        (cn.prototype.push = function(t, n, e) {
          this.history.push(t, n, e);
        }),
        (cn.prototype.replace = function(t, n, e) {
          this.history.replace(t, n, e);
        }),
        (cn.prototype.go = function(t) {
          this.history.go(t);
        }),
        (cn.prototype.back = function() {
          this.go(-1);
        }),
        (cn.prototype.forward = function() {
          this.go(1);
        }),
        (cn.prototype.getMatchedComponents = function(t) {
          var n = t ? (t.matched ? t : this.resolve(t).route) : this.currentRoute;
          return n
            ? [].concat.apply(
                [],
                n.matched.map(function(t) {
                  return Object.keys(t.components).map(function(n) {
                    return t.components[n];
                  });
                })
              )
            : [];
        }),
        (cn.prototype.resolve = function(t, n, e) {
          var r = st(t, n || this.history.current, e, this),
            i = this.match(r, n),
            o = i.redirectedFrom || i.fullPath,
            a = this.history.base,
            u = ln(a, o, this.mode);
          return { location: r, route: i, href: u, normalizedTo: r, resolved: i };
        }),
        (cn.prototype.addRoutes = function(t) {
          this.matcher.addRoutes(t),
            this.history.current !== m && this.history.transitionTo(this.history.getCurrentLocation());
        }),
        Object.defineProperties(cn.prototype, fn),
        (cn.install = P),
        (cn.version = '3.0.2'),
        R && window.Vue && window.Vue.use(cn),
        (n['a'] = cn);
    },
    '8e6e': function(t, n, e) {
      var r = e('5ca1'),
        i = e('990b'),
        o = e('6821'),
        a = e('11e9'),
        u = e('f1ae');
      r(r.S, 'Object', {
        getOwnPropertyDescriptors: function(t) {
          var n,
            e,
            r = o(t),
            c = a.f,
            f = i(r),
            s = {},
            l = 0;
          while (f.length > l) (e = c(r, (n = f[l++]))), void 0 !== e && u(s, n, e);
          return s;
        },
      });
    },
    9093: function(t, n, e) {
      var r = e('ce10'),
        i = e('e11e').concat('length', 'prototype');
      n.f =
        Object.getOwnPropertyNames ||
        function(t) {
          return r(t, i);
        };
    },
    '91ca': function(t, n, e) {
      var r = e('96fb'),
        i = Math.pow,
        o = i(2, -52),
        a = i(2, -23),
        u = i(2, 127) * (2 - a),
        c = i(2, -126),
        f = function(t) {
          return t + 1 / o - 1 / o;
        };
      t.exports =
        Math.fround ||
        function(t) {
          var n,
            e,
            i = Math.abs(t),
            s = r(t);
          return i < c
            ? s * f(i / c / a) * c * a
            : ((n = (1 + a / o) * i), (e = n - (n - i)), e > u || e != e ? s * (1 / 0) : s * e);
        };
    },
    9253: function(t, n, e) {
      var r = e('86cc'),
        i = e('11e9'),
        o = e('38fd'),
        a = e('69a8'),
        u = e('5ca1'),
        c = e('4630'),
        f = e('cb7c'),
        s = e('d3f4');
      function l(t, n, e) {
        var u,
          h,
          d = arguments.length < 4 ? t : arguments[3],
          p = i.f(f(t), n);
        if (!p) {
          if (s((h = o(t)))) return l(h, n, e, d);
          p = c(0);
        }
        if (a(p, 'value')) {
          if (!1 === p.writable || !s(d)) return !1;
          if ((u = i.f(d, n))) {
            if (u.get || u.set || !1 === u.writable) return !1;
            (u.value = e), r.f(d, n, u);
          } else r.f(d, n, c(0, e));
          return !0;
        }
        return void 0 !== p.set && (p.set.call(d, e), !0);
      }
      u(u.S, 'Reflect', { set: l });
    },
    9275: function(t, n, e) {
      var r = e('5ca1'),
        i = e('8b97');
      i &&
        r(r.S, 'Reflect', {
          setPrototypeOf: function(t, n) {
            i.check(t, n);
            try {
              return i.set(t, n), !0;
            } catch (e) {
              return !1;
            }
          },
        });
    },
    9278: function(t, n, e) {
      var r = e('5ca1');
      r(r.S, 'Number', { MIN_SAFE_INTEGER: -9007199254740991 });
    },
    '96cf': function(t, n) {
      !(function(n) {
        'use strict';
        var e,
          r = Object.prototype,
          i = r.hasOwnProperty,
          o = 'function' === typeof Symbol ? Symbol : {},
          a = o.iterator || '@@iterator',
          u = o.asyncIterator || '@@asyncIterator',
          c = o.toStringTag || '@@toStringTag',
          f = 'object' === typeof t,
          s = n.regeneratorRuntime;
        if (s) f && (t.exports = s);
        else {
          (s = n.regeneratorRuntime = f ? t.exports : {}), (s.wrap = _);
          var l = 'suspendedStart',
            h = 'suspendedYield',
            d = 'executing',
            p = 'completed',
            v = {},
            y = {};
          y[a] = function() {
            return this;
          };
          var g = Object.getPrototypeOf,
            b = g && g(g(P([])));
          b && b !== r && i.call(b, a) && (y = b);
          var m = (S.prototype = x.prototype = Object.create(y));
          (M.prototype = m.constructor = S),
            (S.constructor = M),
            (S[c] = M.displayName = 'GeneratorFunction'),
            (s.isGeneratorFunction = function(t) {
              var n = 'function' === typeof t && t.constructor;
              return !!n && (n === M || 'GeneratorFunction' === (n.displayName || n.name));
            }),
            (s.mark = function(t) {
              return (
                Object.setPrototypeOf
                  ? Object.setPrototypeOf(t, S)
                  : ((t.__proto__ = S), c in t || (t[c] = 'GeneratorFunction')),
                (t.prototype = Object.create(m)),
                t
              );
            }),
            (s.awrap = function(t) {
              return { __await: t };
            }),
            A(E.prototype),
            (E.prototype[u] = function() {
              return this;
            }),
            (s.AsyncIterator = E),
            (s.async = function(t, n, e, r) {
              var i = new E(_(t, n, e, r));
              return s.isGeneratorFunction(n)
                ? i
                : i.next().then(function(t) {
                    return t.done ? t.value : i.next();
                  });
            }),
            A(m),
            (m[c] = 'Generator'),
            (m[a] = function() {
              return this;
            }),
            (m.toString = function() {
              return '[object Generator]';
            }),
            (s.keys = function(t) {
              var n = [];
              for (var e in t) n.push(e);
              return (
                n.reverse(),
                function e() {
                  while (n.length) {
                    var r = n.pop();
                    if (r in t) return (e.value = r), (e.done = !1), e;
                  }
                  return (e.done = !0), e;
                }
              );
            }),
            (s.values = P),
            (N.prototype = {
              constructor: N,
              reset: function(t) {
                if (
                  ((this.prev = 0),
                  (this.next = 0),
                  (this.sent = this._sent = e),
                  (this.done = !1),
                  (this.delegate = null),
                  (this.method = 'next'),
                  (this.arg = e),
                  this.tryEntries.forEach(O),
                  !t)
                )
                  for (var n in this) 't' === n.charAt(0) && i.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = e);
              },
              stop: function() {
                this.done = !0;
                var t = this.tryEntries[0],
                  n = t.completion;
                if ('throw' === n.type) throw n.arg;
                return this.rval;
              },
              dispatchException: function(t) {
                if (this.done) throw t;
                var n = this;
                function r(r, i) {
                  return (u.type = 'throw'), (u.arg = t), (n.next = r), i && ((n.method = 'next'), (n.arg = e)), !!i;
                }
                for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                  var a = this.tryEntries[o],
                    u = a.completion;
                  if ('root' === a.tryLoc) return r('end');
                  if (a.tryLoc <= this.prev) {
                    var c = i.call(a, 'catchLoc'),
                      f = i.call(a, 'finallyLoc');
                    if (c && f) {
                      if (this.prev < a.catchLoc) return r(a.catchLoc, !0);
                      if (this.prev < a.finallyLoc) return r(a.finallyLoc);
                    } else if (c) {
                      if (this.prev < a.catchLoc) return r(a.catchLoc, !0);
                    } else {
                      if (!f) throw new Error('try statement without catch or finally');
                      if (this.prev < a.finallyLoc) return r(a.finallyLoc);
                    }
                  }
                }
              },
              abrupt: function(t, n) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                  var r = this.tryEntries[e];
                  if (r.tryLoc <= this.prev && i.call(r, 'finallyLoc') && this.prev < r.finallyLoc) {
                    var o = r;
                    break;
                  }
                }
                o && ('break' === t || 'continue' === t) && o.tryLoc <= n && n <= o.finallyLoc && (o = null);
                var a = o ? o.completion : {};
                return (
                  (a.type = t),
                  (a.arg = n),
                  o ? ((this.method = 'next'), (this.next = o.finallyLoc), v) : this.complete(a)
                );
              },
              complete: function(t, n) {
                if ('throw' === t.type) throw t.arg;
                return (
                  'break' === t.type || 'continue' === t.type
                    ? (this.next = t.arg)
                    : 'return' === t.type
                      ? ((this.rval = this.arg = t.arg), (this.method = 'return'), (this.next = 'end'))
                      : 'normal' === t.type && n && (this.next = n),
                  v
                );
              },
              finish: function(t) {
                for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                  var e = this.tryEntries[n];
                  if (e.finallyLoc === t) return this.complete(e.completion, e.afterLoc), O(e), v;
                }
              },
              catch: function(t) {
                for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                  var e = this.tryEntries[n];
                  if (e.tryLoc === t) {
                    var r = e.completion;
                    if ('throw' === r.type) {
                      var i = r.arg;
                      O(e);
                    }
                    return i;
                  }
                }
                throw new Error('illegal catch attempt');
              },
              delegateYield: function(t, n, r) {
                return (
                  (this.delegate = { iterator: P(t), resultName: n, nextLoc: r }),
                  'next' === this.method && (this.arg = e),
                  v
                );
              },
            });
        }
        function _(t, n, e, r) {
          var i = n && n.prototype instanceof x ? n : x,
            o = Object.create(i.prototype),
            a = new N(r || []);
          return (o._invoke = k(t, e, a)), o;
        }
        function w(t, n, e) {
          try {
            return { type: 'normal', arg: t.call(n, e) };
          } catch (r) {
            return { type: 'throw', arg: r };
          }
        }
        function x() {}
        function M() {}
        function S() {}
        function A(t) {
          ['next', 'throw', 'return'].forEach(function(n) {
            t[n] = function(t) {
              return this._invoke(n, t);
            };
          });
        }
        function E(t) {
          function n(e, r, o, a) {
            var u = w(t[e], t, r);
            if ('throw' !== u.type) {
              var c = u.arg,
                f = c.value;
              return f && 'object' === typeof f && i.call(f, '__await')
                ? Promise.resolve(f.__await).then(
                    function(t) {
                      n('next', t, o, a);
                    },
                    function(t) {
                      n('throw', t, o, a);
                    }
                  )
                : Promise.resolve(f).then(
                    function(t) {
                      (c.value = t), o(c);
                    },
                    function(t) {
                      return n('throw', t, o, a);
                    }
                  );
            }
            a(u.arg);
          }
          var e;
          function r(t, r) {
            function i() {
              return new Promise(function(e, i) {
                n(t, r, e, i);
              });
            }
            return (e = e ? e.then(i, i) : i());
          }
          this._invoke = r;
        }
        function k(t, n, e) {
          var r = l;
          return function(i, o) {
            if (r === d) throw new Error('Generator is already running');
            if (r === p) {
              if ('throw' === i) throw o;
              return R();
            }
            (e.method = i), (e.arg = o);
            while (1) {
              var a = e.delegate;
              if (a) {
                var u = C(a, e);
                if (u) {
                  if (u === v) continue;
                  return u;
                }
              }
              if ('next' === e.method) e.sent = e._sent = e.arg;
              else if ('throw' === e.method) {
                if (r === l) throw ((r = p), e.arg);
                e.dispatchException(e.arg);
              } else 'return' === e.method && e.abrupt('return', e.arg);
              r = d;
              var c = w(t, n, e);
              if ('normal' === c.type) {
                if (((r = e.done ? p : h), c.arg === v)) continue;
                return { value: c.arg, done: e.done };
              }
              'throw' === c.type && ((r = p), (e.method = 'throw'), (e.arg = c.arg));
            }
          };
        }
        function C(t, n) {
          var r = t.iterator[n.method];
          if (r === e) {
            if (((n.delegate = null), 'throw' === n.method)) {
              if (t.iterator.return && ((n.method = 'return'), (n.arg = e), C(t, n), 'throw' === n.method)) return v;
              (n.method = 'throw'), (n.arg = new TypeError("The iterator does not provide a 'throw' method"));
            }
            return v;
          }
          var i = w(r, t.iterator, n.arg);
          if ('throw' === i.type) return (n.method = 'throw'), (n.arg = i.arg), (n.delegate = null), v;
          var o = i.arg;
          return o
            ? o.done
              ? ((n[t.resultName] = o.value),
                (n.next = t.nextLoc),
                'return' !== n.method && ((n.method = 'next'), (n.arg = e)),
                (n.delegate = null),
                v)
              : o
            : ((n.method = 'throw'),
              (n.arg = new TypeError('iterator result is not an object')),
              (n.delegate = null),
              v);
        }
        function T(t) {
          var n = { tryLoc: t[0] };
          1 in t && (n.catchLoc = t[1]),
            2 in t && ((n.finallyLoc = t[2]), (n.afterLoc = t[3])),
            this.tryEntries.push(n);
        }
        function O(t) {
          var n = t.completion || {};
          (n.type = 'normal'), delete n.arg, (t.completion = n);
        }
        function N(t) {
          (this.tryEntries = [{ tryLoc: 'root' }]), t.forEach(T, this), this.reset(!0);
        }
        function P(t) {
          if (t) {
            var n = t[a];
            if (n) return n.call(t);
            if ('function' === typeof t.next) return t;
            if (!isNaN(t.length)) {
              var r = -1,
                o = function n() {
                  while (++r < t.length) if (i.call(t, r)) return (n.value = t[r]), (n.done = !1), n;
                  return (n.value = e), (n.done = !0), n;
                };
              return (o.next = o);
            }
          }
          return { next: R };
        }
        function R() {
          return { value: e, done: !0 };
        }
      })(
        (function() {
          return this || ('object' === typeof self && self);
        })() || Function('return this')()
      );
    },
    '96fb': function(t, n) {
      t.exports =
        Math.sign ||
        function(t) {
          return 0 == (t = +t) || t != t ? t : t < 0 ? -1 : 1;
        };
    },
    9744: function(t, n, e) {
      'use strict';
      var r = e('4588'),
        i = e('be13');
      t.exports = function(t) {
        var n = String(i(this)),
          e = '',
          o = r(t);
        if (o < 0 || o == 1 / 0) throw RangeError("Count can't be negative");
        for (; o > 0; (o >>>= 1) && (n += n)) 1 & o && (e += n);
        return e;
      };
    },
    '990b': function(t, n, e) {
      var r = e('9093'),
        i = e('2621'),
        o = e('cb7c'),
        a = e('7726').Reflect;
      t.exports =
        (a && a.ownKeys) ||
        function(t) {
          var n = r.f(o(t)),
            e = i.f;
          return e ? n.concat(e(t)) : n;
        };
    },
    9986: function(t, n, e) {
      var r = e('6821'),
        i = e('11e9').f;
      e('5eda')('getOwnPropertyDescriptor', function() {
        return function(t, n) {
          return i(r(t), n);
        };
      });
    },
    '9aea': function(t, n, e) {
      var r = e('d3f4'),
        i = e('67ab').onFreeze;
      e('5eda')('preventExtensions', function(t) {
        return function(n) {
          return t && r(n) ? t(i(n)) : n;
        };
      });
    },
    '9b43': function(t, n, e) {
      var r = e('d8e8');
      t.exports = function(t, n, e) {
        if ((r(t), void 0 === n)) return t;
        switch (e) {
          case 1:
            return function(e) {
              return t.call(n, e);
            };
          case 2:
            return function(e, r) {
              return t.call(n, e, r);
            };
          case 3:
            return function(e, r, i) {
              return t.call(n, e, r, i);
            };
        }
        return function() {
          return t.apply(n, arguments);
        };
      };
    },
    '9c12': function(t, n, e) {
      var r = e('d3f4'),
        i = Math.floor;
      t.exports = function(t) {
        return !r(t) && isFinite(t) && i(t) === t;
      };
    },
    '9c29': function(t, n, e) {
      e('ec30')('Uint32', 4, function(t) {
        return function(n, e, r) {
          return t(this, n, e, r);
        };
      });
    },
    '9c6c': function(t, n, e) {
      var r = e('2b4c')('unscopables'),
        i = Array.prototype;
      void 0 == i[r] && e('32e9')(i, r, {}),
        (t.exports = function(t) {
          i[r][t] = !0;
        });
    },
    '9c80': function(t, n) {
      t.exports = function(t) {
        try {
          return { e: !1, v: t() };
        } catch (n) {
          return { e: !0, v: n };
        }
      };
    },
    '9c86': function(t, n, e) {
      'use strict';
      e('386b')('big', function(t) {
        return function() {
          return t(this, 'big', '', '');
        };
      });
    },
    '9def': function(t, n, e) {
      var r = e('4588'),
        i = Math.min;
      t.exports = function(t) {
        return t > 0 ? i(r(t), 9007199254740991) : 0;
      };
    },
    '9e1e': function(t, n, e) {
      t.exports = !e('79e5')(function() {
        return (
          7 !=
          Object.defineProperty({}, 'a', {
            get: function() {
              return 7;
            },
          }).a
        );
      });
    },
    '9ec8': function(t, n, e) {
      'use strict';
      e('386b')('fontsize', function(t) {
        return function(n) {
          return t(this, 'font', 'size', n);
        };
      });
    },
    '9f3c': function(t, n, e) {
      var r = e('5ca1'),
        i = e('2d5c');
      r(r.S + r.F * (i != Math.expm1), 'Math', { expm1: i });
    },
    a032: function(t, n, e) {
      'use strict';
      var r = e('5ca1'),
        i = e('02f4')(!1);
      r(r.P, 'String', {
        codePointAt: function(t) {
          return i(this, t);
        },
      });
    },
    a19f: function(t, n, e) {
      var r = e('5ca1'),
        i = e('cb7c'),
        o = Object.preventExtensions;
      r(r.S, 'Reflect', {
        preventExtensions: function(t) {
          i(t);
          try {
            return o && o(t), !0;
          } catch (n) {
            return !1;
          }
        },
      });
    },
    a25f: function(t, n, e) {
      var r = e('7726'),
        i = r.navigator;
      t.exports = (i && i.userAgent) || '';
    },
    a481: function(t, n, e) {
      'use strict';
      var r = e('cb7c'),
        i = e('4bf8'),
        o = e('9def'),
        a = e('4588'),
        u = e('0390'),
        c = e('5f1b'),
        f = Math.max,
        s = Math.min,
        l = Math.floor,
        h = /\$([$&`']|\d\d?|<[^>]*>)/g,
        d = /\$([$&`']|\d\d?)/g,
        p = function(t) {
          return void 0 === t ? t : String(t);
        };
      e('214f')('replace', 2, function(t, n, e, v) {
        return [
          function(r, i) {
            var o = t(this),
              a = void 0 == r ? void 0 : r[n];
            return void 0 !== a ? a.call(r, o, i) : e.call(String(o), r, i);
          },
          function(t, n) {
            var i = v(e, t, this, n);
            if (i.done) return i.value;
            var l = r(t),
              h = String(this),
              d = 'function' === typeof n;
            d || (n = String(n));
            var g = l.global;
            if (g) {
              var b = l.unicode;
              l.lastIndex = 0;
            }
            var m = [];
            while (1) {
              var _ = c(l, h);
              if (null === _) break;
              if ((m.push(_), !g)) break;
              var w = String(_[0]);
              '' === w && (l.lastIndex = u(h, o(l.lastIndex), b));
            }
            for (var x = '', M = 0, S = 0; S < m.length; S++) {
              _ = m[S];
              for (var A = String(_[0]), E = f(s(a(_.index), h.length), 0), k = [], C = 1; C < _.length; C++)
                k.push(p(_[C]));
              var T = _.groups;
              if (d) {
                var O = [A].concat(k, E, h);
                void 0 !== T && O.push(T);
                var N = String(n.apply(void 0, O));
              } else N = y(A, h, E, k, T, n);
              E >= M && ((x += h.slice(M, E) + N), (M = E + A.length));
            }
            return x + h.slice(M);
          },
        ];
        function y(t, n, r, o, a, u) {
          var c = r + t.length,
            f = o.length,
            s = d;
          return (
            void 0 !== a && ((a = i(a)), (s = h)),
            e.call(u, s, function(e, i) {
              var u;
              switch (i.charAt(0)) {
                case '$':
                  return '$';
                case '&':
                  return t;
                case '`':
                  return n.slice(0, r);
                case "'":
                  return n.slice(c);
                case '<':
                  u = a[i.slice(1, -1)];
                  break;
                default:
                  var s = +i;
                  if (0 === s) return i;
                  if (s > f) {
                    var h = l(s / 10);
                    return 0 === h ? i : h <= f ? (void 0 === o[h - 1] ? i.charAt(1) : o[h - 1] + i.charAt(1)) : i;
                  }
                  u = o[s - 1];
              }
              return void 0 === u ? '' : u;
            })
          );
        }
      });
    },
    a5b8: function(t, n, e) {
      'use strict';
      var r = e('d8e8');
      function i(t) {
        var n, e;
        (this.promise = new t(function(t, r) {
          if (void 0 !== n || void 0 !== e) throw TypeError('Bad Promise constructor');
          (n = t), (e = r);
        })),
          (this.resolve = r(n)),
          (this.reject = r(e));
      }
      t.exports.f = function(t) {
        return new i(t);
      };
    },
    a69f: function(t, n, e) {
      var r = e('5ca1');
      r(r.S, 'Math', {
        log2: function(t) {
          return Math.log(t) / Math.LN2;
        },
      });
    },
    aa77: function(t, n, e) {
      var r = e('5ca1'),
        i = e('be13'),
        o = e('79e5'),
        a = e('fdef'),
        u = '[' + a + ']',
        c = '​',
        f = RegExp('^' + u + u + '*'),
        s = RegExp(u + u + '*$'),
        l = function(t, n, e) {
          var i = {},
            u = o(function() {
              return !!a[t]() || c[t]() != c;
            }),
            f = (i[t] = u ? n(h) : a[t]);
          e && (i[e] = f), r(r.P + r.F * u, 'String', i);
        },
        h = (l.trim = function(t, n) {
          return (t = String(i(t))), 1 & n && (t = t.replace(f, '')), 2 & n && (t = t.replace(s, '')), t;
        });
      t.exports = l;
    },
    aae3: function(t, n, e) {
      var r = e('d3f4'),
        i = e('2d95'),
        o = e('2b4c')('match');
      t.exports = function(t) {
        var n;
        return r(t) && (void 0 !== (n = t[o]) ? !!n : 'RegExp' == i(t));
      };
    },
    ac4d: function(t, n, e) {
      e('3a72')('asyncIterator');
    },
    ac6a: function(t, n, e) {
      for (
        var r = e('cadf'),
          i = e('0d58'),
          o = e('2aba'),
          a = e('7726'),
          u = e('32e9'),
          c = e('84f2'),
          f = e('2b4c'),
          s = f('iterator'),
          l = f('toStringTag'),
          h = c.Array,
          d = {
            CSSRuleList: !0,
            CSSStyleDeclaration: !1,
            CSSValueList: !1,
            ClientRectList: !1,
            DOMRectList: !1,
            DOMStringList: !1,
            DOMTokenList: !0,
            DataTransferItemList: !1,
            FileList: !1,
            HTMLAllCollection: !1,
            HTMLCollection: !1,
            HTMLFormElement: !1,
            HTMLSelectElement: !1,
            MediaList: !0,
            MimeTypeArray: !1,
            NamedNodeMap: !1,
            NodeList: !0,
            PaintRequestList: !1,
            Plugin: !1,
            PluginArray: !1,
            SVGLengthList: !1,
            SVGNumberList: !1,
            SVGPathSegList: !1,
            SVGPointList: !1,
            SVGStringList: !1,
            SVGTransformList: !1,
            SourceBufferList: !1,
            StyleSheetList: !0,
            TextTrackCueList: !1,
            TextTrackList: !1,
            TouchList: !1,
          },
          p = i(d),
          v = 0;
        v < p.length;
        v++
      ) {
        var y,
          g = p[v],
          b = d[g],
          m = a[g],
          _ = m && m.prototype;
        if (_ && (_[s] || u(_, s, h), _[l] || u(_, l, g), (c[g] = h), b)) for (y in r) _[y] || o(_, y, r[y], !0);
      }
    },
    aef6: function(t, n, e) {
      'use strict';
      var r = e('5ca1'),
        i = e('9def'),
        o = e('d2c8'),
        a = 'endsWith',
        u = ''[a];
      r(r.P + r.F * e('5147')(a), 'String', {
        endsWith: function(t) {
          var n = o(this, t, a),
            e = arguments.length > 1 ? arguments[1] : void 0,
            r = i(n.length),
            c = void 0 === e ? r : Math.min(i(e), r),
            f = String(t);
          return u ? u.call(n, f, c) : n.slice(c - f.length, c) === f;
        },
      });
    },
    af56: function(t, n, e) {
      e('ec30')('Uint16', 2, function(t) {
        return function(n, e, r) {
          return t(this, n, e, r);
        };
      });
    },
    b05c: function(t, n, e) {
      e('ec30')('Int8', 1, function(t) {
        return function(n, e, r) {
          return t(this, n, e, r);
        };
      });
    },
    b0c5: function(t, n, e) {
      'use strict';
      var r = e('520a');
      e('5ca1')({ target: 'RegExp', proto: !0, forced: r !== /./.exec }, { exec: r });
    },
    b1b1: function(t, n, e) {
      var r = e('5ca1'),
        i = e('9c12'),
        o = Math.abs;
      r(r.S, 'Number', {
        isSafeInteger: function(t) {
          return i(t) && o(t) <= 9007199254740991;
        },
      });
    },
    b39a: function(t, n, e) {
      var r = e('d3f4');
      t.exports = function(t, n) {
        if (!r(t) || t._t !== n) throw TypeError('Incompatible receiver, ' + n + ' required!');
        return t;
      };
    },
    b54a: function(t, n, e) {
      'use strict';
      e('386b')('link', function(t) {
        return function(n) {
          return t(this, 'a', 'href', n);
        };
      });
    },
    b6e4: function(t, n, e) {
      e('ec30')('Int32', 4, function(t) {
        return function(n, e, r) {
          return t(this, n, e, r);
        };
      });
    },
    b9a1: function(t, n, e) {
      'use strict';
      var r = e('5ca1'),
        i = e('4bf8'),
        o = e('6a99'),
        a = e('38fd'),
        u = e('11e9').f;
      e('9e1e') &&
        r(r.P + e('c5b4'), 'Object', {
          __lookupGetter__: function(t) {
            var n,
              e = i(this),
              r = o(t, !0);
            do {
              if ((n = u(e, r))) return n.get;
            } while ((e = a(e)));
          },
        });
    },
    ba16: function(t, n, e) {
      var r = e('5ca1'),
        i = e('11e9').f,
        o = e('cb7c');
      r(r.S, 'Reflect', {
        deleteProperty: function(t, n) {
          var e = i(o(t), n);
          return !(e && !e.configurable) && delete t[n];
        },
      });
    },
    ba92: function(t, n, e) {
      'use strict';
      var r = e('4bf8'),
        i = e('77f1'),
        o = e('9def');
      t.exports =
        [].copyWithin ||
        function(t, n) {
          var e = r(this),
            a = o(e.length),
            u = i(t, a),
            c = i(n, a),
            f = arguments.length > 2 ? arguments[2] : void 0,
            s = Math.min((void 0 === f ? a : i(f, a)) - c, a - u),
            l = 1;
          c < u && u < c + s && ((l = -1), (c += s - 1), (u += s - 1));
          while (s-- > 0) c in e ? (e[u] = e[c]) : delete e[u], (u += l), (c += l);
          return e;
        };
    },
    bc05: function(t, n, e) {
      'use strict';
      var r, i;
      (function() {
        var e = n || {} || this || window;
        (r = []),
          (i = function() {
            return e;
          }.apply(n, r)),
          void 0 === i || (t.exports = i),
          (e.default = e);
        var o = 'http://www.w3.org/2000/xmlns/',
          a =
            '<?xml version="1.0" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd" [<!ENTITY nbsp "&#160;">]>',
          u = /url\(["']?(.+?)["']?\)/,
          c = {
            woff2: 'font/woff2',
            woff: 'font/woff',
            otf: 'application/x-font-opentype',
            ttf: 'application/x-font-ttf',
            eot: 'application/vnd.ms-fontobject',
            sfnt: 'application/font-sfnt',
            svg: 'image/svg+xml',
          },
          f = function(t) {
            return t instanceof HTMLElement || t instanceof SVGElement;
          },
          s = function(t) {
            if (!f(t)) throw new Error('an HTMLElement or SVGElement is required; got ' + t);
          },
          l = function(t) {
            return t && 0 === t.lastIndexOf('http', 0) && -1 === t.lastIndexOf(window.location.host);
          },
          h = function(t) {
            var n = Object.keys(c)
              .filter(function(n) {
                return t.indexOf('.' + n) > 0;
              })
              .map(function(t) {
                return c[t];
              });
            return n
              ? n[0]
              : (console.error('Unknown font format for ' + t + '. Fonts may not be working correctly.'),
                'application/octet-stream');
          },
          d = function(t) {
            for (var n = '', e = new Uint8Array(t), r = 0; r < e.byteLength; r++) n += String.fromCharCode(e[r]);
            return window.btoa(n);
          },
          p = function(t, n, e) {
            var r =
              (t.viewBox && t.viewBox.baseVal && t.viewBox.baseVal[e]) ||
              (null !== n.getAttribute(e) && !n.getAttribute(e).match(/%$/) && parseInt(n.getAttribute(e))) ||
              t.getBoundingClientRect()[e] ||
              parseInt(n.style[e]) ||
              parseInt(window.getComputedStyle(t).getPropertyValue(e));
            return 'undefined' === typeof r || null === r || isNaN(parseFloat(r)) ? 0 : r;
          },
          v = function(t, n, e, r) {
            if ('svg' === t.tagName) return { width: e || p(t, n, 'width'), height: r || p(t, n, 'height') };
            if (t.getBBox) {
              var i = t.getBBox(),
                o = i.x,
                a = i.y,
                u = i.width,
                c = i.height;
              return { width: o + u, height: a + c };
            }
          },
          y = function(t) {
            return decodeURIComponent(
              encodeURIComponent(t).replace(/%([0-9A-F]{2})/g, function(t, n) {
                var e = String.fromCharCode('0x' + n);
                return '%' === e ? '%25' : e;
              })
            );
          },
          g = function(t) {
            for (
              var n = window.atob(t.split(',')[1]),
                e = t
                  .split(',')[0]
                  .split(':')[1]
                  .split(';')[0],
                r = new ArrayBuffer(n.length),
                i = new Uint8Array(r),
                o = 0;
              o < n.length;
              o++
            )
              i[o] = n.charCodeAt(o);
            return new Blob([r], { type: e });
          },
          b = function(t, n) {
            if (n)
              try {
                return t.querySelector(n) || (t.parentNode && t.parentNode.querySelector(n));
              } catch (e) {
                console.warn('Invalid CSS selector "' + n + '"', e);
              }
          },
          m = function(t, n) {
            var e = t.cssText.match(u),
              r = (e && e[1]) || '';
            if (r && !r.match(/^data:/) && 'about:blank' !== r) {
              var i = r.startsWith('../') ? n + '/../' + r : r.startsWith('./') ? n + '/.' + r : r;
              return { text: t.cssText, format: h(i), url: i };
            }
          },
          _ = function(t) {
            return Promise.all(
              Array.from(t.querySelectorAll('image')).map(function(t) {
                var n = t.getAttributeNS('http://www.w3.org/1999/xlink', 'href') || t.getAttribute('href');
                return n
                  ? (l(n) && (n += (-1 === n.indexOf('?') ? '?' : '&') + 't=' + new Date().valueOf()),
                    new Promise(function(e, r) {
                      var i = document.createElement('canvas'),
                        o = new Image();
                      (o.crossOrigin = 'anonymous'),
                        (o.src = n),
                        (o.onerror = function() {
                          return r(new Error('Could not load ' + n));
                        }),
                        (o.onload = function() {
                          (i.width = o.width),
                            (i.height = o.height),
                            i.getContext('2d').drawImage(o, 0, 0),
                            t.setAttributeNS('http://www.w3.org/1999/xlink', 'href', i.toDataURL('image/png')),
                            e(!0);
                        });
                    }))
                  : Promise.resolve(null);
              })
            );
          },
          w = {},
          x = function(t) {
            return Promise.all(
              t.map(function(t) {
                return new Promise(function(n, e) {
                  if (w[t.url]) return n(w[t.url]);
                  var r = new XMLHttpRequest();
                  r.addEventListener('load', function() {
                    var e = d(r.response),
                      i = t.text.replace(u, 'url("data:' + t.format + ';base64,' + e + '")') + '\n';
                    (w[t.url] = i), n(i);
                  }),
                    r.addEventListener('error', function(e) {
                      console.warn('Failed to load font from: ' + t.url, e), (w[t.url] = null), n(null);
                    }),
                    r.addEventListener('abort', function(e) {
                      console.warn('Aborted loading font from: ' + t.url, e), n(null);
                    }),
                    r.open('GET', t.url),
                    (r.responseType = 'arraybuffer'),
                    r.send();
                });
              })
            ).then(function(t) {
              return t
                .filter(function(t) {
                  return t;
                })
                .join('');
            });
          },
          M = null,
          S = function() {
            return (
              M ||
              (M = Array.from(document.styleSheets).map(function(t) {
                try {
                  return { rules: t.cssRules, href: t.href };
                } catch (n) {
                  return console.warn('Stylesheet could not be loaded: ' + t.href, n), {};
                }
              }))
            );
          },
          A = function(t, n) {
            var e = n || {},
              r = e.selectorRemap,
              i = e.modifyStyle,
              o = e.modifyCss,
              a = e.fonts,
              u =
                o ||
                function(t, n) {
                  var e = r ? r(t) : t,
                    o = i ? i(n) : n;
                  return e + '{' + o + '}\n';
                },
              c = [],
              f = 'undefined' === typeof a,
              s = a || [];
            return (
              S().forEach(function(n) {
                var e = n.rules,
                  r = n.href;
                e &&
                  Array.from(e).forEach(function(n) {
                    if ('undefined' != typeof n.style)
                      if (b(t, n.selectorText)) c.push(u(n.selectorText, n.style.cssText));
                      else if (f && n.cssText.match(/^@font-face/)) {
                        var e = m(n, r);
                        e && s.push(e);
                      } else c.push(n.cssText);
                  });
              }),
              x(s).then(function(t) {
                return c.join('\n') + t;
              })
            );
          };
        (e.prepareSvg = function(t, n, e) {
          s(t);
          var r = n || {},
            i = r.left,
            a = void 0 === i ? 0 : i,
            u = r.top,
            c = void 0 === u ? 0 : u,
            f = r.width,
            l = r.height,
            h = r.scale,
            d = void 0 === h ? 1 : h,
            p = r.responsive,
            y = void 0 !== p && p;
          return _(t).then(function() {
            var r = t.cloneNode(!0),
              i = n || {},
              u = i.backgroundColor,
              s = void 0 === u ? 'transparent' : u;
            r.style.backgroundColor = s;
            var h = v(t, r, f, l),
              p = h.width,
              g = h.height;
            if ('svg' !== t.tagName) {
              if (!t.getBBox) return void console.error('Attempted to render non-SVG element', t);
              r.setAttribute('transform', r.getAttribute('transform').replace(/translate\(.*?\)/, ''));
              var b = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
              b.appendChild(r), (r = b);
            }
            return (
              r.setAttribute('version', '1.1'),
              r.setAttribute('viewBox', [a, c, p, g].join(' ')),
              r.getAttribute('xmlns') || r.setAttributeNS(o, 'xmlns', 'http://www.w3.org/2000/svg'),
              r.getAttribute('xmlns:xlink') || r.setAttributeNS(o, 'xmlns:xlink', 'http://www.w3.org/1999/xlink'),
              y
                ? (r.removeAttribute('width'),
                  r.removeAttribute('height'),
                  r.setAttribute('preserveAspectRatio', 'xMinYMin meet'))
                : (r.setAttribute('width', p * d), r.setAttribute('height', g * d)),
              Array.from(r.querySelectorAll('foreignObject > *')).forEach(function(t) {
                t.getAttribute('xmlns') || t.setAttributeNS(o, 'xmlns', 'http://www.w3.org/1999/xhtml');
              }),
              A(t, n).then(function(t) {
                var n = document.createElement('style');
                n.setAttribute('type', 'text/css'), (n.innerHTML = '<![CDATA[\n' + t + '\n]]>');
                var i = document.createElement('defs');
                i.appendChild(n), r.insertBefore(i, r.firstChild);
                var o = document.createElement('div');
                o.appendChild(r);
                var a = o.innerHTML.replace(/NS\d+:href/gi, 'xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href');
                if ('function' !== typeof e) return { src: a, width: p, height: g };
                e(a, p, g);
              })
            );
          });
        }),
          (e.svgAsDataUri = function(t, n, r) {
            s(t);
            var i = e.prepareSvg(t, n).then(function(t) {
              var n = t.src,
                e = t.width,
                i = t.height,
                o = 'data:image/svg+xml;base64,' + window.btoa(y(a + n));
              return 'function' === typeof r && r(o, e, i), o;
            });
            return i;
          }),
          (e.svgAsPngUri = function(t, n, r) {
            s(t);
            var i = n || {},
              o = i.encoderType,
              a = void 0 === o ? 'image/png' : o,
              u = i.encoderOptions,
              c = void 0 === u ? 0.8 : u,
              f = i.canvg,
              l = function(t) {
                var n = t.src,
                  e = t.width,
                  i = t.height,
                  o = document.createElement('canvas'),
                  u = o.getContext('2d'),
                  s = window.devicePixelRatio || 1;
                (o.width = e * s),
                  (o.height = i * s),
                  (o.style.width = o.width + 'px'),
                  (o.style.height = o.height + 'px'),
                  u.setTransform(s, 0, 0, s, 0, 0),
                  f ? f(o, n) : u.drawImage(n, 0, 0);
                var l = void 0;
                try {
                  l = o.toDataURL(a, c);
                } catch (h) {
                  if (
                    ('undefined' !== typeof SecurityError && h instanceof SecurityError) ||
                    'SecurityError' === h.name
                  )
                    return void console.error('Rendered SVG images cannot be downloaded in this browser.');
                  throw h;
                }
                return 'function' === typeof r && r(l, o.width, o.height), Promise.resolve(l);
              };
            return f
              ? e.prepareSvg(t, n).then(l)
              : e.svgAsDataUri(t, n).then(function(t) {
                  return new Promise(function(n, e) {
                    var r = new Image();
                    (r.onload = function() {
                      return n(l({ src: r, width: r.width, height: r.height }));
                    }),
                      (r.onerror = function() {
                        e(
                          'There was an error loading the data URI as an image on the following SVG\n' +
                            window.atob(t.slice(26)) +
                            "Open the following link to see browser's diagnosis\n" +
                            t
                        );
                      }),
                      (r.src = t);
                  });
                });
          }),
          (e.download = function(t, n) {
            if (navigator.msSaveOrOpenBlob) navigator.msSaveOrOpenBlob(g(n), t);
            else {
              var e = document.createElement('a');
              if ('download' in e) {
                (e.download = t), (e.style.display = 'none'), document.body.appendChild(e);
                try {
                  var r = g(n),
                    i = URL.createObjectURL(r);
                  (e.href = i),
                    (e.onclick = function() {
                      return requestAnimationFrame(function() {
                        return URL.revokeObjectURL(i);
                      });
                    });
                } catch (o) {
                  console.warn('This browser does not support object URLs. Falling back to string URL.'), (e.href = n);
                }
                e.click(), document.body.removeChild(e);
              } else window.open(n, '_temp', 'menubar=no,toolbar=no,status=no');
            }
          }),
          (e.saveSvg = function(t, n, r) {
            s(t),
              e.svgAsDataUri(t, r || {}, function(t) {
                return e.download(n, t);
              });
          }),
          (e.saveSvgAsPng = function(t, n, r) {
            s(t),
              e.svgAsPngUri(t, r || {}, function(t) {
                return e.download(n, t);
              });
          });
      })();
    },
    bcaa: function(t, n, e) {
      var r = e('cb7c'),
        i = e('d3f4'),
        o = e('a5b8');
      t.exports = function(t, n) {
        if ((r(t), i(n) && n.constructor === t)) return n;
        var e = o.f(t),
          a = e.resolve;
        return a(n), e.promise;
      };
    },
    be13: function(t, n) {
      t.exports = function(t) {
        if (void 0 == t) throw TypeError("Can't call method on  " + t);
        return t;
      };
    },
    c02b: function(t, n, e) {
      'use strict';
      var r = e('643e'),
        i = e('b39a'),
        o = 'WeakSet';
      e('e0b8')(
        o,
        function(t) {
          return function() {
            return t(this, arguments.length > 0 ? arguments[0] : void 0);
          };
        },
        {
          add: function(t) {
            return r.def(i(this, o), t, !0);
          },
        },
        r,
        !1,
        !0
      );
    },
    c26b: function(t, n, e) {
      'use strict';
      var r = e('86cc').f,
        i = e('2aeb'),
        o = e('dcbc'),
        a = e('9b43'),
        u = e('f605'),
        c = e('4a59'),
        f = e('01f9'),
        s = e('d53b'),
        l = e('7a56'),
        h = e('9e1e'),
        d = e('67ab').fastKey,
        p = e('b39a'),
        v = h ? '_s' : 'size',
        y = function(t, n) {
          var e,
            r = d(n);
          if ('F' !== r) return t._i[r];
          for (e = t._f; e; e = e.n) if (e.k == n) return e;
        };
      t.exports = {
        getConstructor: function(t, n, e, f) {
          var s = t(function(t, r) {
            u(t, s, n, '_i'),
              (t._t = n),
              (t._i = i(null)),
              (t._f = void 0),
              (t._l = void 0),
              (t[v] = 0),
              void 0 != r && c(r, e, t[f], t);
          });
          return (
            o(s.prototype, {
              clear: function() {
                for (var t = p(this, n), e = t._i, r = t._f; r; r = r.n)
                  (r.r = !0), r.p && (r.p = r.p.n = void 0), delete e[r.i];
                (t._f = t._l = void 0), (t[v] = 0);
              },
              delete: function(t) {
                var e = p(this, n),
                  r = y(e, t);
                if (r) {
                  var i = r.n,
                    o = r.p;
                  delete e._i[r.i],
                    (r.r = !0),
                    o && (o.n = i),
                    i && (i.p = o),
                    e._f == r && (e._f = i),
                    e._l == r && (e._l = o),
                    e[v]--;
                }
                return !!r;
              },
              forEach: function(t) {
                p(this, n);
                var e,
                  r = a(t, arguments.length > 1 ? arguments[1] : void 0, 3);
                while ((e = e ? e.n : this._f)) {
                  r(e.v, e.k, this);
                  while (e && e.r) e = e.p;
                }
              },
              has: function(t) {
                return !!y(p(this, n), t);
              },
            }),
            h &&
              r(s.prototype, 'size', {
                get: function() {
                  return p(this, n)[v];
                },
              }),
            s
          );
        },
        def: function(t, n, e) {
          var r,
            i,
            o = y(t, n);
          return (
            o
              ? (o.v = e)
              : ((t._l = o = { i: (i = d(n, !0)), k: n, v: e, p: (r = t._l), n: void 0, r: !1 }),
                t._f || (t._f = o),
                r && (r.n = o),
                t[v]++,
                'F' !== i && (t._i[i] = o)),
            t
          );
        },
        getEntry: y,
        setStrong: function(t, n, e) {
          f(
            t,
            n,
            function(t, e) {
              (this._t = p(t, n)), (this._k = e), (this._l = void 0);
            },
            function() {
              var t = this,
                n = t._k,
                e = t._l;
              while (e && e.r) e = e.p;
              return t._t && (t._l = e = e ? e.n : t._t._f)
                ? s(0, 'keys' == n ? e.k : 'values' == n ? e.v : [e.k, e.v])
                : ((t._t = void 0), s(1));
            },
            e ? 'entries' : 'values',
            !e,
            !0
          ),
            l(n);
        },
      };
    },
    c366: function(t, n, e) {
      var r = e('6821'),
        i = e('9def'),
        o = e('77f1');
      t.exports = function(t) {
        return function(n, e, a) {
          var u,
            c = r(n),
            f = i(c.length),
            s = o(a, f);
          if (t && e != e) {
            while (f > s) if (((u = c[s++]), u != u)) return !0;
          } else for (; f > s; s++) if ((t || s in c) && c[s] === e) return t || s || 0;
          return !t && -1;
        };
      };
    },
    c5b4: function(t, n, e) {
      'use strict';
      t.exports =
        e('2d00') ||
        !e('79e5')(function() {
          var t = Math.random();
          __defineSetter__.call(null, t, function() {}), delete e('7726')[t];
        });
    },
    c5f6: function(t, n, e) {
      'use strict';
      var r = e('7726'),
        i = e('69a8'),
        o = e('2d95'),
        a = e('5dbc'),
        u = e('6a99'),
        c = e('79e5'),
        f = e('9093').f,
        s = e('11e9').f,
        l = e('86cc').f,
        h = e('aa77').trim,
        d = 'Number',
        p = r[d],
        v = p,
        y = p.prototype,
        g = o(e('2aeb')(y)) == d,
        b = 'trim' in String.prototype,
        m = function(t) {
          var n = u(t, !1);
          if ('string' == typeof n && n.length > 2) {
            n = b ? n.trim() : h(n, 3);
            var e,
              r,
              i,
              o = n.charCodeAt(0);
            if (43 === o || 45 === o) {
              if (((e = n.charCodeAt(2)), 88 === e || 120 === e)) return NaN;
            } else if (48 === o) {
              switch (n.charCodeAt(1)) {
                case 66:
                case 98:
                  (r = 2), (i = 49);
                  break;
                case 79:
                case 111:
                  (r = 8), (i = 55);
                  break;
                default:
                  return +n;
              }
              for (var a, c = n.slice(2), f = 0, s = c.length; f < s; f++)
                if (((a = c.charCodeAt(f)), a < 48 || a > i)) return NaN;
              return parseInt(c, r);
            }
          }
          return +n;
        };
      if (!p(' 0o1') || !p('0b1') || p('+0x1')) {
        p = function(t) {
          var n = arguments.length < 1 ? 0 : t,
            e = this;
          return e instanceof p &&
            (g
              ? c(function() {
                  y.valueOf.call(e);
                })
              : o(e) != d)
            ? a(new v(m(n)), e, p)
            : m(n);
        };
        for (
          var _,
            w = e('9e1e')
              ? f(v)
              : 'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'.split(
                  ','
                ),
            x = 0;
          w.length > x;
          x++
        )
          i(v, (_ = w[x])) && !i(p, _) && l(p, _, s(v, _));
        (p.prototype = y), (y.constructor = p), e('2aba')(r, d, p);
      }
    },
    c66f: function(t, n, e) {
      'use strict';
      var r = e('5ca1'),
        i = e('0f88'),
        o = e('ed0b'),
        a = e('cb7c'),
        u = e('77f1'),
        c = e('9def'),
        f = e('d3f4'),
        s = e('7726').ArrayBuffer,
        l = e('ebd6'),
        h = o.ArrayBuffer,
        d = o.DataView,
        p = i.ABV && s.isView,
        v = h.prototype.slice,
        y = i.VIEW,
        g = 'ArrayBuffer';
      r(r.G + r.W + r.F * (s !== h), { ArrayBuffer: h }),
        r(r.S + r.F * !i.CONSTR, g, {
          isView: function(t) {
            return (p && p(t)) || (f(t) && y in t);
          },
        }),
        r(
          r.P +
            r.U +
            r.F *
              e('79e5')(function() {
                return !new h(2).slice(1, void 0).byteLength;
              }),
          g,
          {
            slice: function(t, n) {
              if (void 0 !== v && void 0 === n) return v.call(a(this), t);
              var e = a(this).byteLength,
                r = u(t, e),
                i = u(void 0 === n ? e : n, e),
                o = new (l(this, h))(c(i - r)),
                f = new d(this),
                s = new d(o),
                p = 0;
              while (r < i) s.setUint8(p++, f.getUint8(r++));
              return o;
            },
          }
        ),
        e('7a56')(g);
    },
    c698: function(t, n, e) {
      var r = e('5ca1');
      r(r.S, 'Reflect', { ownKeys: e('990b') });
    },
    c69a: function(t, n, e) {
      t.exports =
        !e('9e1e') &&
        !e('79e5')(function() {
          return (
            7 !=
            Object.defineProperty(e('230e')('div'), 'a', {
              get: function() {
                return 7;
              },
            }).a
          );
        });
    },
    c7c6: function(t, n, e) {
      var r = e('5ca1'),
        i = Math.abs;
      r(r.S, 'Math', {
        hypot: function(t, n) {
          var e,
            r,
            o = 0,
            a = 0,
            u = arguments.length,
            c = 0;
          while (a < u)
            (e = i(arguments[a++])),
              c < e ? ((r = c / e), (o = o * r * r + 1), (c = e)) : e > 0 ? ((r = e / c), (o += r * r)) : (o += e);
          return c === 1 / 0 ? 1 / 0 : c * Math.sqrt(o);
        },
      });
    },
    c7c62: function(t, n, e) {
      var r = e('5ca1'),
        i = e('2d5c'),
        o = Math.exp;
      r(r.S, 'Math', {
        tanh: function(t) {
          var n = i((t = +t)),
            e = i(-t);
          return n == 1 / 0 ? 1 : e == 1 / 0 ? -1 : (n - e) / (o(t) + o(-t));
        },
      });
    },
    c8ba: function(t, n) {
      var e;
      e = (function() {
        return this;
      })();
      try {
        e = e || new Function('return this')();
      } catch (r) {
        'object' === typeof window && (e = window);
      }
      t.exports = e;
    },
    c8ce: function(t, n, e) {
      var r = e('2b4c')('toPrimitive'),
        i = Date.prototype;
      r in i || e('32e9')(i, r, e('8381'));
    },
    ca5a: function(t, n) {
      var e = 0,
        r = Math.random();
      t.exports = function(t) {
        return 'Symbol('.concat(void 0 === t ? '' : t, ')_', (++e + r).toString(36));
      };
    },
    cadf: function(t, n, e) {
      'use strict';
      var r = e('9c6c'),
        i = e('d53b'),
        o = e('84f2'),
        a = e('6821');
      (t.exports = e('01f9')(
        Array,
        'Array',
        function(t, n) {
          (this._t = a(t)), (this._i = 0), (this._k = n);
        },
        function() {
          var t = this._t,
            n = this._k,
            e = this._i++;
          return !t || e >= t.length
            ? ((this._t = void 0), i(1))
            : i(0, 'keys' == n ? e : 'values' == n ? t[e] : [e, t[e]]);
        },
        'values'
      )),
        (o.Arguments = o.Array),
        r('keys'),
        r('values'),
        r('entries');
    },
    cb7c: function(t, n, e) {
      var r = e('d3f4');
      t.exports = function(t) {
        if (!r(t)) throw TypeError(t + ' is not an object!');
        return t;
      };
    },
    cd1c: function(t, n, e) {
      var r = e('e853');
      t.exports = function(t, n) {
        return new (r(t))(n);
      };
    },
    ce10: function(t, n, e) {
      var r = e('69a8'),
        i = e('6821'),
        o = e('c366')(!1),
        a = e('613b')('IE_PROTO');
      t.exports = function(t, n) {
        var e,
          u = i(t),
          c = 0,
          f = [];
        for (e in u) e != a && r(u, e) && f.push(e);
        while (n.length > c) r(u, (e = n[c++])) && (~o(f, e) || f.push(e));
        return f;
      };
    },
    cf6a: function(t, n, e) {
      var r = e('d3f4'),
        i = e('67ab').onFreeze;
      e('5eda')('seal', function(t) {
        return function(n) {
          return t && r(n) ? t(i(n)) : n;
        };
      });
    },
    d04f: function(t, n, e) {
      e('7a56')('Array');
    },
    d0b0: function(t, n, e) {
      'use strict';
      e('386b')('italics', function(t) {
        return function() {
          return t(this, 'i', '', '');
        };
      });
    },
    d185: function(t, n, e) {
      var r = e('11e9'),
        i = e('38fd'),
        o = e('69a8'),
        a = e('5ca1'),
        u = e('d3f4'),
        c = e('cb7c');
      function f(t, n) {
        var e,
          a,
          s = arguments.length < 3 ? t : arguments[2];
        return c(t) === s
          ? t[n]
          : (e = r.f(t, n))
            ? o(e, 'value')
              ? e.value
              : void 0 !== e.get
                ? e.get.call(s)
                : void 0
            : u((a = i(t)))
              ? f(a, n, s)
              : void 0;
      }
      a(a.S, 'Reflect', { get: f });
    },
    d263: function(t, n, e) {
      'use strict';
      e('386b')('fixed', function(t) {
        return function() {
          return t(this, 'tt', '', '');
        };
      });
    },
    d2c8: function(t, n, e) {
      var r = e('aae3'),
        i = e('be13');
      t.exports = function(t, n, e) {
        if (r(n)) throw TypeError('String#' + e + " doesn't accept regex!");
        return String(i(t));
      };
    },
    d3f4: function(t, n) {
      t.exports = function(t) {
        return 'object' === typeof t ? null !== t : 'function' === typeof t;
      };
    },
    d4c0: function(t, n, e) {
      var r = e('0d58'),
        i = e('2621'),
        o = e('52a7');
      t.exports = function(t) {
        var n = r(t),
          e = i.f;
        if (e) {
          var a,
            u = e(t),
            c = o.f,
            f = 0;
          while (u.length > f) c.call(t, (a = u[f++])) && n.push(a);
        }
        return n;
      };
    },
    d53b: function(t, n) {
      t.exports = function(t, n) {
        return { value: n, done: !!t };
      };
    },
    d6c6: function(t, n) {
      t.exports =
        Math.log1p ||
        function(t) {
          return (t = +t) > -1e-8 && t < 1e-8 ? t - (t * t) / 2 : Math.log(1 + t);
        };
    },
    d752: function(t, n, e) {
      var r = e('7726').parseFloat,
        i = e('aa77').trim;
      t.exports =
        1 / r(e('fdef') + '-0') !== -1 / 0
          ? function(t) {
              var n = i(String(t), 3),
                e = r(n);
              return 0 === e && '-' == n.charAt(0) ? -0 : e;
            }
          : r;
    },
    d8e8: function(t, n) {
      t.exports = function(t) {
        if ('function' != typeof t) throw TypeError(t + ' is not a function!');
        return t;
      };
    },
    d9ab: function(t, n, e) {
      var r = e('5ca1'),
        i = Math.atanh;
      r(r.S + r.F * !(i && 1 / i(-0) < 0), 'Math', {
        atanh: function(t) {
          return 0 == (t = +t) ? t : Math.log((1 + t) / (1 - t)) / 2;
        },
      });
    },
    db97: function(t, n, e) {
      var r = e('5ca1');
      r(r.S, 'Object', { is: e('83a1') });
    },
    dcbc: function(t, n, e) {
      var r = e('2aba');
      t.exports = function(t, n, e) {
        for (var i in n) r(t, i, n[i], e);
        return t;
      };
    },
    df1b: function(t, n, e) {
      var r = e('5ca1'),
        i = e('d8e8'),
        o = e('cb7c'),
        a = (e('7726').Reflect || {}).apply,
        u = Function.apply;
      r(
        r.S +
          r.F *
            !e('79e5')(function() {
              a(function() {});
            }),
        'Reflect',
        {
          apply: function(t, n, e) {
            var r = i(t),
              c = o(e);
            return a ? a(r, n, c) : u.call(r, n, c);
          },
        }
      );
    },
    e0b8: function(t, n, e) {
      'use strict';
      var r = e('7726'),
        i = e('5ca1'),
        o = e('2aba'),
        a = e('dcbc'),
        u = e('67ab'),
        c = e('4a59'),
        f = e('f605'),
        s = e('d3f4'),
        l = e('79e5'),
        h = e('5cc5'),
        d = e('7f20'),
        p = e('5dbc');
      t.exports = function(t, n, e, v, y, g) {
        var b = r[t],
          m = b,
          _ = y ? 'set' : 'add',
          w = m && m.prototype,
          x = {},
          M = function(t) {
            var n = w[t];
            o(
              w,
              t,
              'delete' == t
                ? function(t) {
                    return !(g && !s(t)) && n.call(this, 0 === t ? 0 : t);
                  }
                : 'has' == t
                  ? function(t) {
                      return !(g && !s(t)) && n.call(this, 0 === t ? 0 : t);
                    }
                  : 'get' == t
                    ? function(t) {
                        return g && !s(t) ? void 0 : n.call(this, 0 === t ? 0 : t);
                      }
                    : 'add' == t
                      ? function(t) {
                          return n.call(this, 0 === t ? 0 : t), this;
                        }
                      : function(t, e) {
                          return n.call(this, 0 === t ? 0 : t, e), this;
                        }
            );
          };
        if (
          'function' == typeof m &&
          (g ||
            (w.forEach &&
              !l(function() {
                new m().entries().next();
              })))
        ) {
          var S = new m(),
            A = S[_](g ? {} : -0, 1) != S,
            E = l(function() {
              S.has(1);
            }),
            k = h(function(t) {
              new m(t);
            }),
            C =
              !g &&
              l(function() {
                var t = new m(),
                  n = 5;
                while (n--) t[_](n, n);
                return !t.has(-0);
              });
          k ||
            ((m = n(function(n, e) {
              f(n, m, t);
              var r = p(new b(), n, m);
              return void 0 != e && c(e, y, r[_], r), r;
            })),
            (m.prototype = w),
            (w.constructor = m)),
            (E || C) && (M('delete'), M('has'), y && M('get')),
            (C || A) && M(_),
            g && w.clear && delete w.clear;
        } else (m = v.getConstructor(n, t, y, _)), a(m.prototype, e), (u.NEED = !0);
        return d(m, t), (x[t] = m), i(i.G + i.W + i.F * (m != b), x), g || v.setStrong(m, t, y), m;
      };
    },
    e11e: function(t, n) {
      t.exports = 'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'.split(
        ','
      );
    },
    e4f7: function(t, n, e) {
      var r = e('4bf8'),
        i = e('38fd');
      e('5eda')('getPrototypeOf', function() {
        return function(t) {
          return i(r(t));
        };
      });
    },
    e804: function(t, n, e) {
      'use strict';
      var r = e('5ca1'),
        i = e('f1ae');
      r(
        r.S +
          r.F *
            e('79e5')(function() {
              function t() {}
              return !(Array.of.call(t) instanceof t);
            }),
        'Array',
        {
          of: function() {
            var t = 0,
              n = arguments.length,
              e = new ('function' == typeof this ? this : Array)(n);
            while (n > t) i(e, t, arguments[t++]);
            return (e.length = n), e;
          },
        }
      );
    },
    e853: function(t, n, e) {
      var r = e('d3f4'),
        i = e('1169'),
        o = e('2b4c')('species');
      t.exports = function(t) {
        var n;
        return (
          i(t) &&
            ((n = t.constructor),
            'function' != typeof n || (n !== Array && !i(n.prototype)) || (n = void 0),
            r(n) && ((n = n[o]), null === n && (n = void 0))),
          void 0 === n ? Array : n
        );
      };
    },
    ebd6: function(t, n, e) {
      var r = e('cb7c'),
        i = e('d8e8'),
        o = e('2b4c')('species');
      t.exports = function(t, n) {
        var e,
          a = r(t).constructor;
        return void 0 === a || void 0 == (e = r(a)[o]) ? n : i(e);
      };
    },
    ebde: function(t, n, e) {
      var r = e('11e9'),
        i = e('5ca1'),
        o = e('cb7c');
      i(i.S, 'Reflect', {
        getOwnPropertyDescriptor: function(t, n) {
          return r.f(o(t), n);
        },
      });
    },
    ec30: function(t, n, e) {
      'use strict';
      if (e('9e1e')) {
        var r = e('2d00'),
          i = e('7726'),
          o = e('79e5'),
          a = e('5ca1'),
          u = e('0f88'),
          c = e('ed0b'),
          f = e('9b43'),
          s = e('f605'),
          l = e('4630'),
          h = e('32e9'),
          d = e('dcbc'),
          p = e('4588'),
          v = e('9def'),
          y = e('09fa'),
          g = e('77f1'),
          b = e('6a99'),
          m = e('69a8'),
          _ = e('23c6'),
          w = e('d3f4'),
          x = e('4bf8'),
          M = e('33a4'),
          S = e('2aeb'),
          A = e('38fd'),
          E = e('9093').f,
          k = e('27ee'),
          C = e('ca5a'),
          T = e('2b4c'),
          O = e('0a49'),
          N = e('c366'),
          P = e('ebd6'),
          R = e('cadf'),
          j = e('84f2'),
          L = e('5cc5'),
          I = e('7a56'),
          $ = e('36bd'),
          F = e('ba92'),
          D = e('86cc'),
          z = e('11e9'),
          U = D.f,
          B = z.f,
          q = i.RangeError,
          V = i.TypeError,
          H = i.Uint8Array,
          Y = 'ArrayBuffer',
          G = 'Shared' + Y,
          W = 'BYTES_PER_ELEMENT',
          X = 'prototype',
          K = Array[X],
          Q = c.ArrayBuffer,
          Z = c.DataView,
          J = O(0),
          tt = O(2),
          nt = O(3),
          et = O(4),
          rt = O(5),
          it = O(6),
          ot = N(!0),
          at = N(!1),
          ut = R.values,
          ct = R.keys,
          ft = R.entries,
          st = K.lastIndexOf,
          lt = K.reduce,
          ht = K.reduceRight,
          dt = K.join,
          pt = K.sort,
          vt = K.slice,
          yt = K.toString,
          gt = K.toLocaleString,
          bt = T('iterator'),
          mt = T('toStringTag'),
          _t = C('typed_constructor'),
          wt = C('def_constructor'),
          xt = u.CONSTR,
          Mt = u.TYPED,
          St = u.VIEW,
          At = 'Wrong length!',
          Et = O(1, function(t, n) {
            return Nt(P(t, t[wt]), n);
          }),
          kt = o(function() {
            return 1 === new H(new Uint16Array([1]).buffer)[0];
          }),
          Ct =
            !!H &&
            !!H[X].set &&
            o(function() {
              new H(1).set({});
            }),
          Tt = function(t, n) {
            var e = p(t);
            if (e < 0 || e % n) throw q('Wrong offset!');
            return e;
          },
          Ot = function(t) {
            if (w(t) && Mt in t) return t;
            throw V(t + ' is not a typed array!');
          },
          Nt = function(t, n) {
            if (!(w(t) && _t in t)) throw V('It is not a typed array constructor!');
            return new t(n);
          },
          Pt = function(t, n) {
            return Rt(P(t, t[wt]), n);
          },
          Rt = function(t, n) {
            var e = 0,
              r = n.length,
              i = Nt(t, r);
            while (r > e) i[e] = n[e++];
            return i;
          },
          jt = function(t, n, e) {
            U(t, n, {
              get: function() {
                return this._d[e];
              },
            });
          },
          Lt = function(t) {
            var n,
              e,
              r,
              i,
              o,
              a,
              u = x(t),
              c = arguments.length,
              s = c > 1 ? arguments[1] : void 0,
              l = void 0 !== s,
              h = k(u);
            if (void 0 != h && !M(h)) {
              for (a = h.call(u), r = [], n = 0; !(o = a.next()).done; n++) r.push(o.value);
              u = r;
            }
            for (l && c > 2 && (s = f(s, arguments[2], 2)), n = 0, e = v(u.length), i = Nt(this, e); e > n; n++)
              i[n] = l ? s(u[n], n) : u[n];
            return i;
          },
          It = function() {
            var t = 0,
              n = arguments.length,
              e = Nt(this, n);
            while (n > t) e[t] = arguments[t++];
            return e;
          },
          $t =
            !!H &&
            o(function() {
              gt.call(new H(1));
            }),
          Ft = function() {
            return gt.apply($t ? vt.call(Ot(this)) : Ot(this), arguments);
          },
          Dt = {
            copyWithin: function(t, n) {
              return F.call(Ot(this), t, n, arguments.length > 2 ? arguments[2] : void 0);
            },
            every: function(t) {
              return et(Ot(this), t, arguments.length > 1 ? arguments[1] : void 0);
            },
            fill: function(t) {
              return $.apply(Ot(this), arguments);
            },
            filter: function(t) {
              return Pt(this, tt(Ot(this), t, arguments.length > 1 ? arguments[1] : void 0));
            },
            find: function(t) {
              return rt(Ot(this), t, arguments.length > 1 ? arguments[1] : void 0);
            },
            findIndex: function(t) {
              return it(Ot(this), t, arguments.length > 1 ? arguments[1] : void 0);
            },
            forEach: function(t) {
              J(Ot(this), t, arguments.length > 1 ? arguments[1] : void 0);
            },
            indexOf: function(t) {
              return at(Ot(this), t, arguments.length > 1 ? arguments[1] : void 0);
            },
            includes: function(t) {
              return ot(Ot(this), t, arguments.length > 1 ? arguments[1] : void 0);
            },
            join: function(t) {
              return dt.apply(Ot(this), arguments);
            },
            lastIndexOf: function(t) {
              return st.apply(Ot(this), arguments);
            },
            map: function(t) {
              return Et(Ot(this), t, arguments.length > 1 ? arguments[1] : void 0);
            },
            reduce: function(t) {
              return lt.apply(Ot(this), arguments);
            },
            reduceRight: function(t) {
              return ht.apply(Ot(this), arguments);
            },
            reverse: function() {
              var t,
                n = this,
                e = Ot(n).length,
                r = Math.floor(e / 2),
                i = 0;
              while (i < r) (t = n[i]), (n[i++] = n[--e]), (n[e] = t);
              return n;
            },
            some: function(t) {
              return nt(Ot(this), t, arguments.length > 1 ? arguments[1] : void 0);
            },
            sort: function(t) {
              return pt.call(Ot(this), t);
            },
            subarray: function(t, n) {
              var e = Ot(this),
                r = e.length,
                i = g(t, r);
              return new (P(e, e[wt]))(
                e.buffer,
                e.byteOffset + i * e.BYTES_PER_ELEMENT,
                v((void 0 === n ? r : g(n, r)) - i)
              );
            },
          },
          zt = function(t, n) {
            return Pt(this, vt.call(Ot(this), t, n));
          },
          Ut = function(t) {
            Ot(this);
            var n = Tt(arguments[1], 1),
              e = this.length,
              r = x(t),
              i = v(r.length),
              o = 0;
            if (i + n > e) throw q(At);
            while (o < i) this[n + o] = r[o++];
          },
          Bt = {
            entries: function() {
              return ft.call(Ot(this));
            },
            keys: function() {
              return ct.call(Ot(this));
            },
            values: function() {
              return ut.call(Ot(this));
            },
          },
          qt = function(t, n) {
            return w(t) && t[Mt] && 'symbol' != typeof n && n in t && String(+n) == String(n);
          },
          Vt = function(t, n) {
            return qt(t, (n = b(n, !0))) ? l(2, t[n]) : B(t, n);
          },
          Ht = function(t, n, e) {
            return !(qt(t, (n = b(n, !0))) && w(e) && m(e, 'value')) ||
              m(e, 'get') ||
              m(e, 'set') ||
              e.configurable ||
              (m(e, 'writable') && !e.writable) ||
              (m(e, 'enumerable') && !e.enumerable)
              ? U(t, n, e)
              : ((t[n] = e.value), t);
          };
        xt || ((z.f = Vt), (D.f = Ht)),
          a(a.S + a.F * !xt, 'Object', { getOwnPropertyDescriptor: Vt, defineProperty: Ht }),
          o(function() {
            yt.call({});
          }) &&
            (yt = gt = function() {
              return dt.call(this);
            });
        var Yt = d({}, Dt);
        d(Yt, Bt),
          h(Yt, bt, Bt.values),
          d(Yt, { slice: zt, set: Ut, constructor: function() {}, toString: yt, toLocaleString: Ft }),
          jt(Yt, 'buffer', 'b'),
          jt(Yt, 'byteOffset', 'o'),
          jt(Yt, 'byteLength', 'l'),
          jt(Yt, 'length', 'e'),
          U(Yt, mt, {
            get: function() {
              return this[Mt];
            },
          }),
          (t.exports = function(t, n, e, c) {
            c = !!c;
            var f = t + (c ? 'Clamped' : '') + 'Array',
              l = 'get' + t,
              d = 'set' + t,
              p = i[f],
              g = p || {},
              b = p && A(p),
              m = !p || !u.ABV,
              x = {},
              M = p && p[X],
              k = function(t, e) {
                var r = t._d;
                return r.v[l](e * n + r.o, kt);
              },
              C = function(t, e, r) {
                var i = t._d;
                c && (r = (r = Math.round(r)) < 0 ? 0 : r > 255 ? 255 : 255 & r), i.v[d](e * n + i.o, r, kt);
              },
              T = function(t, n) {
                U(t, n, {
                  get: function() {
                    return k(this, n);
                  },
                  set: function(t) {
                    return C(this, n, t);
                  },
                  enumerable: !0,
                });
              };
            m
              ? ((p = e(function(t, e, r, i) {
                  s(t, p, f, '_d');
                  var o,
                    a,
                    u,
                    c,
                    l = 0,
                    d = 0;
                  if (w(e)) {
                    if (!(e instanceof Q || (c = _(e)) == Y || c == G)) return Mt in e ? Rt(p, e) : Lt.call(p, e);
                    (o = e), (d = Tt(r, n));
                    var g = e.byteLength;
                    if (void 0 === i) {
                      if (g % n) throw q(At);
                      if (((a = g - d), a < 0)) throw q(At);
                    } else if (((a = v(i) * n), a + d > g)) throw q(At);
                    u = a / n;
                  } else (u = y(e)), (a = u * n), (o = new Q(a));
                  h(t, '_d', { b: o, o: d, l: a, e: u, v: new Z(o) });
                  while (l < u) T(t, l++);
                })),
                (M = p[X] = S(Yt)),
                h(M, 'constructor', p))
              : (o(function() {
                  p(1);
                }) &&
                  o(function() {
                    new p(-1);
                  }) &&
                  L(function(t) {
                    new p(), new p(null), new p(1.5), new p(t);
                  }, !0)) ||
                ((p = e(function(t, e, r, i) {
                  var o;
                  return (
                    s(t, p, f),
                    w(e)
                      ? e instanceof Q || (o = _(e)) == Y || o == G
                        ? void 0 !== i
                          ? new g(e, Tt(r, n), i)
                          : void 0 !== r
                            ? new g(e, Tt(r, n))
                            : new g(e)
                        : Mt in e
                          ? Rt(p, e)
                          : Lt.call(p, e)
                      : new g(y(e))
                  );
                })),
                J(b !== Function.prototype ? E(g).concat(E(b)) : E(g), function(t) {
                  t in p || h(p, t, g[t]);
                }),
                (p[X] = M),
                r || (M.constructor = p));
            var O = M[bt],
              N = !!O && ('values' == O.name || void 0 == O.name),
              P = Bt.values;
            h(p, _t, !0),
              h(M, Mt, f),
              h(M, St, !0),
              h(M, wt, p),
              (c ? new p(1)[mt] == f : mt in M) ||
                U(M, mt, {
                  get: function() {
                    return f;
                  },
                }),
              (x[f] = p),
              a(a.G + a.W + a.F * (p != g), x),
              a(a.S, f, { BYTES_PER_ELEMENT: n }),
              a(
                a.S +
                  a.F *
                    o(function() {
                      g.of.call(p, 1);
                    }),
                f,
                { from: Lt, of: It }
              ),
              W in M || h(M, W, n),
              a(a.P, f, Dt),
              I(f),
              a(a.P + a.F * Ct, f, { set: Ut }),
              a(a.P + a.F * !N, f, Bt),
              r || M.toString == yt || (M.toString = yt),
              a(
                a.P +
                  a.F *
                    o(function() {
                      new p(1).slice();
                    }),
                f,
                { slice: zt }
              ),
              a(
                a.P +
                  a.F *
                    (o(function() {
                      return [1, 2].toLocaleString() != new p([1, 2]).toLocaleString();
                    }) ||
                      !o(function() {
                        M.toLocaleString.call([1, 2]);
                      })),
                f,
                { toLocaleString: Ft }
              ),
              (j[f] = N ? O : P),
              r || N || h(M, bt, P);
          });
      } else t.exports = function() {};
    },
    ed0b: function(t, n, e) {
      'use strict';
      var r = e('7726'),
        i = e('9e1e'),
        o = e('2d00'),
        a = e('0f88'),
        u = e('32e9'),
        c = e('dcbc'),
        f = e('79e5'),
        s = e('f605'),
        l = e('4588'),
        h = e('9def'),
        d = e('09fa'),
        p = e('9093').f,
        v = e('86cc').f,
        y = e('36bd'),
        g = e('7f20'),
        b = 'ArrayBuffer',
        m = 'DataView',
        _ = 'prototype',
        w = 'Wrong length!',
        x = 'Wrong index!',
        M = r[b],
        S = r[m],
        A = r.Math,
        E = r.RangeError,
        k = r.Infinity,
        C = M,
        T = A.abs,
        O = A.pow,
        N = A.floor,
        P = A.log,
        R = A.LN2,
        j = 'buffer',
        L = 'byteLength',
        I = 'byteOffset',
        $ = i ? '_b' : j,
        F = i ? '_l' : L,
        D = i ? '_o' : I;
      function z(t, n, e) {
        var r,
          i,
          o,
          a = new Array(e),
          u = 8 * e - n - 1,
          c = (1 << u) - 1,
          f = c >> 1,
          s = 23 === n ? O(2, -24) - O(2, -77) : 0,
          l = 0,
          h = t < 0 || (0 === t && 1 / t < 0) ? 1 : 0;
        for (
          t = T(t),
            t != t || t === k
              ? ((i = t != t ? 1 : 0), (r = c))
              : ((r = N(P(t) / R)),
                t * (o = O(2, -r)) < 1 && (r--, (o *= 2)),
                (t += r + f >= 1 ? s / o : s * O(2, 1 - f)),
                t * o >= 2 && (r++, (o /= 2)),
                r + f >= c
                  ? ((i = 0), (r = c))
                  : r + f >= 1
                    ? ((i = (t * o - 1) * O(2, n)), (r += f))
                    : ((i = t * O(2, f - 1) * O(2, n)), (r = 0)));
          n >= 8;
          a[l++] = 255 & i, i /= 256, n -= 8
        );
        for (r = (r << n) | i, u += n; u > 0; a[l++] = 255 & r, r /= 256, u -= 8);
        return (a[--l] |= 128 * h), a;
      }
      function U(t, n, e) {
        var r,
          i = 8 * e - n - 1,
          o = (1 << i) - 1,
          a = o >> 1,
          u = i - 7,
          c = e - 1,
          f = t[c--],
          s = 127 & f;
        for (f >>= 7; u > 0; s = 256 * s + t[c], c--, u -= 8);
        for (r = s & ((1 << -u) - 1), s >>= -u, u += n; u > 0; r = 256 * r + t[c], c--, u -= 8);
        if (0 === s) s = 1 - a;
        else {
          if (s === o) return r ? NaN : f ? -k : k;
          (r += O(2, n)), (s -= a);
        }
        return (f ? -1 : 1) * r * O(2, s - n);
      }
      function B(t) {
        return (t[3] << 24) | (t[2] << 16) | (t[1] << 8) | t[0];
      }
      function q(t) {
        return [255 & t];
      }
      function V(t) {
        return [255 & t, (t >> 8) & 255];
      }
      function H(t) {
        return [255 & t, (t >> 8) & 255, (t >> 16) & 255, (t >> 24) & 255];
      }
      function Y(t) {
        return z(t, 52, 8);
      }
      function G(t) {
        return z(t, 23, 4);
      }
      function W(t, n, e) {
        v(t[_], n, {
          get: function() {
            return this[e];
          },
        });
      }
      function X(t, n, e, r) {
        var i = +e,
          o = d(i);
        if (o + n > t[F]) throw E(x);
        var a = t[$]._b,
          u = o + t[D],
          c = a.slice(u, u + n);
        return r ? c : c.reverse();
      }
      function K(t, n, e, r, i, o) {
        var a = +e,
          u = d(a);
        if (u + n > t[F]) throw E(x);
        for (var c = t[$]._b, f = u + t[D], s = r(+i), l = 0; l < n; l++) c[f + l] = s[o ? l : n - l - 1];
      }
      if (a.ABV) {
        if (
          !f(function() {
            M(1);
          }) ||
          !f(function() {
            new M(-1);
          }) ||
          f(function() {
            return new M(), new M(1.5), new M(NaN), M.name != b;
          })
        ) {
          M = function(t) {
            return s(this, M), new C(d(t));
          };
          for (var Q, Z = (M[_] = C[_]), J = p(C), tt = 0; J.length > tt; ) (Q = J[tt++]) in M || u(M, Q, C[Q]);
          o || (Z.constructor = M);
        }
        var nt = new S(new M(2)),
          et = S[_].setInt8;
        nt.setInt8(0, 2147483648),
          nt.setInt8(1, 2147483649),
          (!nt.getInt8(0) && nt.getInt8(1)) ||
            c(
              S[_],
              {
                setInt8: function(t, n) {
                  et.call(this, t, (n << 24) >> 24);
                },
                setUint8: function(t, n) {
                  et.call(this, t, (n << 24) >> 24);
                },
              },
              !0
            );
      } else
        (M = function(t) {
          s(this, M, b);
          var n = d(t);
          (this._b = y.call(new Array(n), 0)), (this[F] = n);
        }),
          (S = function(t, n, e) {
            s(this, S, m), s(t, M, m);
            var r = t[F],
              i = l(n);
            if (i < 0 || i > r) throw E('Wrong offset!');
            if (((e = void 0 === e ? r - i : h(e)), i + e > r)) throw E(w);
            (this[$] = t), (this[D] = i), (this[F] = e);
          }),
          i && (W(M, L, '_l'), W(S, j, '_b'), W(S, L, '_l'), W(S, I, '_o')),
          c(S[_], {
            getInt8: function(t) {
              return (X(this, 1, t)[0] << 24) >> 24;
            },
            getUint8: function(t) {
              return X(this, 1, t)[0];
            },
            getInt16: function(t) {
              var n = X(this, 2, t, arguments[1]);
              return (((n[1] << 8) | n[0]) << 16) >> 16;
            },
            getUint16: function(t) {
              var n = X(this, 2, t, arguments[1]);
              return (n[1] << 8) | n[0];
            },
            getInt32: function(t) {
              return B(X(this, 4, t, arguments[1]));
            },
            getUint32: function(t) {
              return B(X(this, 4, t, arguments[1])) >>> 0;
            },
            getFloat32: function(t) {
              return U(X(this, 4, t, arguments[1]), 23, 4);
            },
            getFloat64: function(t) {
              return U(X(this, 8, t, arguments[1]), 52, 8);
            },
            setInt8: function(t, n) {
              K(this, 1, t, q, n);
            },
            setUint8: function(t, n) {
              K(this, 1, t, q, n);
            },
            setInt16: function(t, n) {
              K(this, 2, t, V, n, arguments[2]);
            },
            setUint16: function(t, n) {
              K(this, 2, t, V, n, arguments[2]);
            },
            setInt32: function(t, n) {
              K(this, 4, t, H, n, arguments[2]);
            },
            setUint32: function(t, n) {
              K(this, 4, t, H, n, arguments[2]);
            },
            setFloat32: function(t, n) {
              K(this, 4, t, G, n, arguments[2]);
            },
            setFloat64: function(t, n) {
              K(this, 8, t, Y, n, arguments[2]);
            },
          });
      g(M, b), g(S, m), u(S[_], a.VIEW, !0), (n[b] = M), (n[m] = S);
    },
    ed50: function(t, n, e) {
      'use strict';
      var r = e('5ca1'),
        i = e('2e08'),
        o = e('a25f');
      r(r.P + r.F * /Version\/10\.\d+(\.\d+)? Safari\//.test(o), 'String', {
        padEnd: function(t) {
          return i(this, t, arguments.length > 1 ? arguments[1] : void 0, !1);
        },
      });
    },
    ee1d: function(t, n, e) {
      var r = e('5ca1');
      r(r.S, 'Number', {
        isNaN: function(t) {
          return t != t;
        },
      });
    },
    f0c1: function(t, n, e) {
      'use strict';
      var r = e('d8e8'),
        i = e('d3f4'),
        o = e('31f4'),
        a = [].slice,
        u = {},
        c = function(t, n, e) {
          if (!(n in u)) {
            for (var r = [], i = 0; i < n; i++) r[i] = 'a[' + i + ']';
            u[n] = Function('F,a', 'return new F(' + r.join(',') + ')');
          }
          return u[n](t, e);
        };
      t.exports =
        Function.bind ||
        function(t) {
          var n = r(this),
            e = a.call(arguments, 1),
            u = function() {
              var r = e.concat(a.call(arguments));
              return this instanceof u ? c(n, r.length, r) : o(n, r, t);
            };
          return i(n.prototype) && (u.prototype = n.prototype), u;
        };
    },
    f1ae: function(t, n, e) {
      'use strict';
      var r = e('86cc'),
        i = e('4630');
      t.exports = function(t, n, e) {
        n in t ? r.f(t, n, i(0, e)) : (t[n] = e);
      };
    },
    f386: function(t, n, e) {
      'use strict';
      e('386b')('small', function(t) {
        return function() {
          return t(this, 'small', '', '');
        };
      });
    },
    f400: function(t, n, e) {
      'use strict';
      var r = e('c26b'),
        i = e('b39a'),
        o = 'Map';
      t.exports = e('e0b8')(
        o,
        function(t) {
          return function() {
            return t(this, arguments.length > 0 ? arguments[0] : void 0);
          };
        },
        {
          get: function(t) {
            var n = r.getEntry(i(this, o), t);
            return n && n.v;
          },
          set: function(t, n) {
            return r.def(i(this, o), 0 === t ? 0 : t, n);
          },
        },
        r,
        !0
      );
    },
    f4ff: function(t, n, e) {
      var r = e('5ca1'),
        i = Math.imul;
      r(
        r.S +
          r.F *
            e('79e5')(function() {
              return -5 != i(4294967295, 5) || 2 != i.length;
            }),
        'Math',
        {
          imul: function(t, n) {
            var e = 65535,
              r = +t,
              i = +n,
              o = e & r,
              a = e & i;
            return 0 | (o * a + ((((e & (r >>> 16)) * a + o * (e & (i >>> 16))) << 16) >>> 0));
          },
        }
      );
    },
    f559: function(t, n, e) {
      'use strict';
      var r = e('5ca1'),
        i = e('9def'),
        o = e('d2c8'),
        a = 'startsWith',
        u = ''[a];
      r(r.P + r.F * e('5147')(a), 'String', {
        startsWith: function(t) {
          var n = o(this, t, a),
            e = i(Math.min(arguments.length > 1 ? arguments[1] : void 0, n.length)),
            r = String(t);
          return u ? u.call(n, r, e) : n.slice(e, e + r.length) === r;
        },
      });
    },
    f576: function(t, n, e) {
      'use strict';
      var r = e('5ca1'),
        i = e('2e08'),
        o = e('a25f');
      r(r.P + r.F * /Version\/10\.\d+(\.\d+)? Safari\//.test(o), 'String', {
        padStart: function(t) {
          return i(this, t, arguments.length > 1 ? arguments[1] : void 0, !0);
        },
      });
    },
    f605: function(t, n) {
      t.exports = function(t, n, e, r) {
        if (!(t instanceof n) || (void 0 !== r && r in t)) throw TypeError(e + ': incorrect invocation!');
        return t;
      };
    },
    f6b3: function(t, n, e) {
      var r = e('5ca1');
      r(r.S, 'Reflect', {
        has: function(t, n) {
          return n in t;
        },
      });
    },
    f751: function(t, n, e) {
      var r = e('5ca1');
      r(r.S + r.F, 'Object', { assign: e('7333') });
    },
    f9ab: function(t, n, e) {
      var r = e('5ca1'),
        i = e('96fb');
      r(r.S, 'Math', {
        cbrt: function(t) {
          return i((t = +t)) * Math.pow(Math.abs(t), 1 / 3);
        },
      });
    },
    fa83: function(t, n, e) {
      'use strict';
      e('386b')('blink', function(t) {
        return function() {
          return t(this, 'blink', '', '');
        };
      });
    },
    fab2: function(t, n, e) {
      var r = e('7726').document;
      t.exports = r && r.documentElement;
    },
    fca0: function(t, n, e) {
      var r = e('5ca1'),
        i = e('7726').isFinite;
      r(r.S, 'Number', {
        isFinite: function(t) {
          return 'number' == typeof t && i(t);
        },
      });
    },
    fd24: function(t, n, e) {
      var r = e('5ca1');
      r(r.S, 'Object', { setPrototypeOf: e('8b97').set });
    },
    fdef: function(t, n) {
      t.exports = '\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff';
    },
    fee7: function(t, n, e) {
      'use strict';
      var r = e('5ca1'),
        i = e('4bf8'),
        o = e('d8e8'),
        a = e('86cc');
      e('9e1e') &&
        r(r.P + e('c5b4'), 'Object', {
          __defineSetter__: function(t, n) {
            a.f(i(this), t, { set: o(n), enumerable: !0, configurable: !0 });
          },
        });
    },
    ffc1: function(t, n, e) {
      var r = e('5ca1'),
        i = e('504c')(!0);
      r(r.S, 'Object', {
        entries: function(t) {
          return i(t);
        },
      });
    },
  },
]);
//# sourceMappingURL=chunk-vendors.257a1545.js.map
