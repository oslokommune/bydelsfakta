(function(t) {
  function e(e) {
    for (var i, s, o = e[0], l = e[1], h = e[2], d = 0, u = []; d < o.length; d++)
      (s = o[d]), n[s] && u.push(n[s][0]), (n[s] = 0);
    for (i in l) Object.prototype.hasOwnProperty.call(l, i) && (t[i] = l[i]);
    c && c(e);
    while (u.length) u.shift()();
    return r.push.apply(r, h || []), a();
  }
  function a() {
    for (var t, e = 0; e < r.length; e++) {
      for (var a = r[e], i = !0, o = 1; o < a.length; o++) {
        var l = a[o];
        0 !== n[l] && (i = !1);
      }
      i && (r.splice(e--, 1), (t = s((s.s = a[0]))));
    }
    return t;
  }
  var i = {},
    n = { app: 0 },
    r = [];
  function s(e) {
    if (i[e]) return i[e].exports;
    var a = (i[e] = { i: e, l: !1, exports: {} });
    return t[e].call(a.exports, a, a.exports, s), (a.l = !0), a.exports;
  }
  (s.m = t),
    (s.c = i),
    (s.d = function(t, e, a) {
      s.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: a });
    }),
    (s.r = function(t) {
      'undefined' !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(t, '__esModule', { value: !0 });
    }),
    (s.t = function(t, e) {
      if ((1 & e && (t = s(t)), 8 & e)) return t;
      if (4 & e && 'object' === typeof t && t && t.__esModule) return t;
      var a = Object.create(null);
      if ((s.r(a), Object.defineProperty(a, 'default', { enumerable: !0, value: t }), 2 & e && 'string' != typeof t))
        for (var i in t)
          s.d(
            a,
            i,
            function(e) {
              return t[e];
            }.bind(null, i)
          );
      return a;
    }),
    (s.n = function(t) {
      var e =
        t && t.__esModule
          ? function() {
              return t['default'];
            }
          : function() {
              return t;
            };
      return s.d(e, 'a', e), e;
    }),
    (s.o = function(t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (s.p = '/bydelsfakta/');
  var o = (window['webpackJsonp'] = window['webpackJsonp'] || []),
    l = o.push.bind(o);
  (o.push = e), (o = o.slice());
  for (var h = 0; h < o.length; h++) e(o[h]);
  var c = l;
  r.push([0, 'chunk-vendors']), a();
})({
  0: function(t, e, a) {
    t.exports = a('56d7');
  },
  '05a7': function(t, e, a) {},
  '0bc3': function(t, e, a) {},
  '0c6e': function(t, e, a) {
    'use strict';
    var i = a('9ea6'),
      n = a.n(i);
    n.a;
  },
  '3c7a': function(t, e, a) {},
  '43ed': function(t, e, a) {
    'use strict';
    var i = a('4a91'),
      n = a.n(i);
    n.a;
  },
  '44ee': function(t, e, a) {},
  '489b': function(t, e, a) {},
  '4a91': function(t, e, a) {},
  '4f46': function(t, e, a) {
    'use strict';
    var i = a('68f4'),
      n = a.n(i);
    n.a;
  },
  5464: function(t, e, a) {
    'use strict';
    var i = a('d31f'),
      n = a.n(i);
    n.a;
  },
  '56d7': function(t, e, a) {
    'use strict';
    a.r(e);
    a('744f'),
      a('6c7b'),
      a('7514'),
      a('20d6'),
      a('1c4c'),
      a('6762'),
      a('cadf'),
      a('e804'),
      a('55dd'),
      a('d04f'),
      a('c8ce'),
      a('217b'),
      a('7f7f'),
      a('f400'),
      a('7f25'),
      a('536b'),
      a('d9ab'),
      a('f9ab'),
      a('32d7'),
      a('25c9'),
      a('9f3c'),
      a('042e'),
      a('c7c6'),
      a('f4ff'),
      a('049f'),
      a('7872'),
      a('a69f'),
      a('0b21'),
      a('6c1a'),
      a('c7c62'),
      a('84b4'),
      a('c5f6'),
      a('2e37'),
      a('fca0'),
      a('7cdf'),
      a('ee1d'),
      a('b1b1'),
      a('87f3'),
      a('9278'),
      a('5df2'),
      a('04ff'),
      a('f751'),
      a('4504'),
      a('fee7'),
      a('ffc1'),
      a('0d6d'),
      a('9986'),
      a('8e6e'),
      a('25db'),
      a('e4f7'),
      a('b9a1'),
      a('64d5'),
      a('9aea'),
      a('db97'),
      a('66c8'),
      a('57f0'),
      a('165b'),
      a('456d'),
      a('cf6a'),
      a('fd24'),
      a('8615'),
      a('551c'),
      a('097d'),
      a('df1b'),
      a('2397'),
      a('88ca'),
      a('ba16'),
      a('d185'),
      a('ebde'),
      a('2d34'),
      a('f6b3'),
      a('2251'),
      a('c698'),
      a('a19f'),
      a('9253'),
      a('9275'),
      a('3b2b'),
      a('3846'),
      a('4917'),
      a('a481'),
      a('28a5'),
      a('386d'),
      a('6b54'),
      a('4f7f'),
      a('8a81'),
      a('ac4d'),
      a('8449'),
      a('9c86'),
      a('fa83'),
      a('48c0'),
      a('a032'),
      a('aef6'),
      a('d263'),
      a('6c37'),
      a('9ec8'),
      a('5695'),
      a('2fdb'),
      a('d0b0'),
      a('5df3'),
      a('b54a'),
      a('f576'),
      a('ed50'),
      a('788d'),
      a('14b9'),
      a('f386'),
      a('f559'),
      a('1448'),
      a('673e'),
      a('242a'),
      a('c66f'),
      a('b05c'),
      a('34ef'),
      a('6aa2'),
      a('15ac'),
      a('af56'),
      a('b6e4'),
      a('9c29'),
      a('63d9'),
      a('4dda'),
      a('10ad'),
      a('c02b'),
      a('4795'),
      a('130f'),
      a('ac6a'),
      a('96cf');
    var i = a('2b0e'),
      n = a('252c'),
      r = function() {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a(
          'div',
          { attrs: { id: 'app' } },
          [
            a('navigation-drawer'),
            a('div', { attrs: { id: 'content' } }, [a('navigation-topbar'), a('main', [a('router-view')], 1)], 1),
          ],
          1
        );
      },
      s = [],
      o = function() {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a('aside', { attrs: { id: 'navbar' } }, [
          a('img', {
            staticClass: 'oslo__logo',
            attrs: { src: t.osloIcon, alt: 'oslo-logo' },
            on: { click: t.onClickHome },
          }),
          a(
            'nav',
            { attrs: { role: 'navigation' } },
            [
              t._l(t.links, function(e) {
                return a(
                  'div',
                  {
                    key: e.key,
                    staticClass: 'navigation-link',
                    class: {
                      'navigation-link--active': t.checkActiveBydel(e.uri),
                      'navigation-link--compare': t.checkMultipleBydeler(e.key),
                    },
                  },
                  [
                    a('input', {
                      directives: [{ name: 'model', rawName: 'v-model', value: t.selected, expression: 'selected' }],
                      attrs: { type: 'checkbox', id: 'checkbox-' + e.key, disabled: t.disableChecbox(e.key) },
                      domProps: {
                        value: e.key,
                        checked: Array.isArray(t.selected) ? t._i(t.selected, e.key) > -1 : t.selected,
                      },
                      on: {
                        change: [
                          function(a) {
                            var i = t.selected,
                              n = a.target,
                              r = !!n.checked;
                            if (Array.isArray(i)) {
                              var s = e.key,
                                o = t._i(i, s);
                              n.checked
                                ? o < 0 && (t.selected = i.concat([s]))
                                : o > -1 && (t.selected = i.slice(0, o).concat(i.slice(o + 1)));
                            } else t.selected = r;
                          },
                          t.onChangeCheckbox,
                        ],
                      },
                    }),
                    a('label', { attrs: { for: 'checkbox-' + e.key } }),
                    a(
                      'span',
                      {
                        staticClass: 'navigation-link__label',
                        on: {
                          click: function(a) {
                            t.onClickBydel(e.uri);
                          },
                        },
                      },
                      [t._v(t._s(e.value))]
                    ),
                  ]
                );
              }),
              a(
                'div',
                {
                  staticClass: 'navigation-link navigation-link__label-compare',
                  class: { 'navigation-link--active': t.$route.path.includes('sammenlign') },
                  attrs: { role: 'button' },
                  on: { click: t.onClickSammenlign },
                },
                [a('span', { staticClass: 'navigation-link__label' }, [t._v('Sammenlign bydeler')])]
              ),
              a('transition', { attrs: { name: 'fade' } }, [
                t.$route.path.includes('sammenlign')
                  ? a('div', { staticClass: 'navigation-drawer__buttons' }, [
                      a('div', { staticClass: 'navigation-drawer__button-container' }, [
                        a('button', { staticClass: 'navigation-drawer__button', on: { click: t.selectAll } }, [
                          t._v('Velg alle'),
                        ]),
                        a(
                          'button',
                          {
                            staticClass: 'navigation-drawer__button',
                            attrs: { disabled: 0 === t.selected.length },
                            on: { click: t.unselectAll },
                          },
                          [t._v('Fjern alle')]
                        ),
                      ]),
                      a('div', { staticClass: 'navigation-drawer__select-container' }, [
                        a(
                          'select',
                          {
                            directives: [
                              {
                                name: 'model',
                                rawName: 'v-model',
                                value: t.selectedPredefinedOption,
                                expression: 'selectedPredefinedOption',
                              },
                            ],
                            staticClass: 'navigation-drawer__select',
                            on: {
                              change: function(e) {
                                var a = Array.prototype.filter
                                  .call(e.target.options, function(t) {
                                    return t.selected;
                                  })
                                  .map(function(t) {
                                    var e = '_value' in t ? t._value : t.value;
                                    return e;
                                  });
                                t.selectedPredefinedOption = e.target.multiple ? a : a[0];
                              },
                            },
                          },
                          t._l(t.options, function(e, i) {
                            return a(
                              'option',
                              {
                                key: i,
                                attrs: { disabled: e.disabled },
                                domProps: { value: e.option, selected: e.selected },
                              },
                              [t._v(t._s(e.label))]
                            );
                          }),
                          0
                        ),
                      ]),
                    ])
                  : t._e(),
              ]),
            ],
            2
          ),
        ]);
      },
      l = [],
      h = [
        { key: '1', value: 'Bydel Gamle Oslo', uri: 'gamleoslo' },
        { key: '2', value: 'Bydel Grünerløkka', uri: 'grunerlokka' },
        { key: '3', value: 'Bydel Sagene', uri: 'sagene' },
        { key: '4', value: 'Bydel St. Hanshaugen', uri: 'sthanshaugen' },
        { key: '5', value: 'Bydel Frogner', uri: 'frogner' },
        { key: '6', value: 'Bydel Ullern', uri: 'ullern' },
        { key: '7', value: 'Bydel Vestre Aker', uri: 'vestreaker' },
        { key: '8', value: 'Bydel Nordre Aker', uri: 'nordreaker' },
        { key: '9', value: 'Bydel Bjerke', uri: 'bjerke' },
        { key: '10', value: 'Bydel Grorud', uri: 'grorud' },
        { key: '11', value: 'Bydel Stovner', uri: 'stovner' },
        { key: '12', value: 'Bydel Alna', uri: 'alna' },
        { key: '13', value: 'Bydel Østensjø', uri: 'ostensjo' },
        { key: '14', value: 'Bydel Nordstrand', uri: 'nordstrand' },
        { key: '15', value: 'Bydel Søndre Nordstrand', uri: 'sondrenordstrand' },
      ],
      c = h,
      d = [
        { option: [], label: '- Forhåndsvalg -', selected: !0, disabled: !0 },
        { option: ['5', '6', '7', '8'], label: 'Øst' },
        { option: ['1', '2', '3', '4'], label: 'Nord' },
        { option: ['9', '10', '11', '12'], label: 'Vest' },
        { option: ['13', '14', '15'], label: 'Sør' },
      ],
      u = a('56da'),
      p = a.n(u),
      g = {
        name: 'NavigationDrawer',
        data: function() {
          return {
            links: c,
            osloIcon: p.a,
            showAllCheckbox: !1,
            showDropdown: !1,
            selected: [],
            options: d,
            selectedPredefinedOption: [],
          };
        },
        mounted: function() {
          var t = this,
            e = this.$route.path.split('/'),
            a = this.$route.path;
          if (void 0 !== this.$route.params.bydel) {
            if (a.includes('sammenlign')) {
              var i = this.$route.params.bydel.split('-');
              this.selected = 'alle' === i[0] ? [] : i;
            } else if (a.includes('bydel')) {
              var n = c.find(function(e) {
                return e.uri === t.$route.params.bydel;
              }).key;
              this.selected = [n];
            }
            e.length > 3 && (this.selectedSubpage = e[3]);
          }
        },
        methods: {
          checkActiveBydel: function(t) {
            return this.$route.params.bydel === t && this.$route.path.includes('bydel');
          },
          checkMultipleBydeler: function(t) {
            return this.$route.path.includes('sammenlign') && this.selected.includes(t);
          },
          disableChecbox: function(t) {
            return this.$route.path.includes('bydel') && 1 === this.selected.length && this.selected[0] === t;
          },
          onChangeCheckbox: function() {
            var t = this.$route.path.split('/');
            0 === this.selected.length
              ? ((this.showAllCheckbox = !1),
                t.length > 3
                  ? this.$router.push({ path: '/sammenlign/alle/'.concat(t[3]) })
                  : this.$router.push({ path: '/sammenlign/alle' }))
              : this.selected.length === c.length
                ? ((this.showAllCheckbox = !0),
                  t.length > 3
                    ? this.$router.push({ path: '/sammenlign/alle/'.concat(t[3]) })
                    : this.$router.push({ path: '/sammenlign/alle' }))
                : this.selected.length > 0 &&
                  (t.length > 3
                    ? this.$router.push({ path: '/sammenlign/'.concat(this.selected.join('-'), '/').concat(t[3]) })
                    : this.$router.push({ path: '/sammenlign/'.concat(this.selected.join('-')) }));
          },
          onClickBydel: function(t) {
            var e = this.$route.path.split('/'),
              a = this.links.find(function(e) {
                return e.uri === t;
              }).uri;
            e.length > 3
              ? this.$router.push({ path: '/bydel/'.concat(a, '/').concat(e[3]) })
              : this.$router.push({ path: '/bydel/'.concat(a) });
          },
          onClickHome: function() {
            (this.selected = []), this.$router.push({ name: 'Home' });
          },
          onClickSammenlign: function() {
            var t = this.$route.path.split('/');
            this.selected.length < 2
              ? ((this.selected = []),
                t.length > 3
                  ? this.$router.push({ path: '/sammenlign/alle/'.concat(t[3]) })
                  : this.$router.push({ path: '/sammenlign/alle' }))
              : this.selected.length === c.length
                ? t.length > 3
                  ? this.$router.push({ path: '/sammenlign/alle/'.concat(t[3]) })
                  : this.$router.push({ path: '/sammenlign/alle' })
                : t.length > 3
                  ? this.$router.push({ path: '/sammenlign/'.concat(this.selected.join('-'), '/').concat(t[3]) })
                  : this.$router.push({ path: '/sammenlign/'.concat(this.selected.join('-')) });
          },
          selectAll: function() {
            var t = this,
              e = this.$route.path.split('/');
            (this.selected = []),
              (this.showAllCheckbox = !0),
              (this.selectedPredefinedOption = []),
              c.forEach(function(e) {
                return t.selected.push(e.key);
              }),
              e.length > 3
                ? this.$router.push({ path: '/sammenlign/alle/'.concat(e[3]) })
                : this.$router.push({ path: '/sammenlign/alle' });
          },
          unselectAll: function() {
            var t = this.$route.path.split('/');
            (this.selected = []),
              (this.selectedPredefinedOption = []),
              t.length > 3
                ? this.$router.push({ path: '/sammenlign/alle/'.concat(t[3]) })
                : this.$router.push({ path: '/sammenlign/alle' });
          },
        },
        watch: {
          $route: function(t) {
            var e = this.$route.path.split('/');
            if (t.path.includes('bydel')) {
              var a = c.find(function(t) {
                return t.uri === e[2];
              }).key;
              this.selected = [a];
            } else if (t.path.includes('sammenlign') && !this.showAllCheckbox) {
              var i = e[2].split('-');
              this.selected = i;
            }
          },
          selectedPredefinedOption: function() {
            var t = this.$route.path.split('/');
            0 !== this.selectedPredefinedOption.length &&
              ((this.selected = this.selectedPredefinedOption),
              t.length > 3
                ? this.$router.push({ path: '/sammenlign/'.concat(this.selected.join('-'), '/').concat(t[3]) })
                : this.$router.push({ path: '/sammenlign/'.concat(this.selected.join('-')) }));
          },
        },
      },
      f = g,
      m = (a('f0ee'), a('2877')),
      v = Object(m['a'])(f, o, l, !1, null, '0e28da7a', null);
    v.options.__file = 'NavigationDrawer.vue';
    var b = v.exports,
      x = function() {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a('header', { staticClass: 'oslo__navigation-topbar' }, [
          a(
            'div',
            { staticClass: 'oslo__navigation-topbar-button', attrs: { role: 'button' }, on: { click: t.backButton } },
            [
              a('i', { staticClass: 'material-icons oslo__topbar' }, [t._v('arrow_back')]),
              a('h4', { staticClass: 'oslo__topbar oslo__topbar-text' }, [
                t._v(t._s(t.getBydel(this.$route.params.bydel))),
              ]),
            ]
          ),
          a(
            'div',
            { staticClass: 'navigation-topbar' },
            [
              a(
                'div',
                {
                  staticClass: 'navigation-topbar__select',
                  attrs: { id: 'select', tabindex: '0' },
                  on: {
                    click: function(e) {
                      t.showDropdown = !t.showDropdown;
                    },
                  },
                },
                [
                  a('label', { staticClass: 'label', class: { 'label--active': null !== t.selectedSubpage } }, [
                    t._v('VELG TEMA'),
                  ]),
                  a('span', [t._v(t._s(t.selectedSubpage))]),
                  a('i', { staticClass: 'material-icons' }, [
                    t._v(t._s(t.showDropdown ? 'arrow_drop_up' : 'arrow_drop_down')),
                  ]),
                ]
              ),
              a('transition', { attrs: { name: 'fade' } }, [
                t.showDropdown
                  ? a(
                      'div',
                      { staticClass: 'navigation-topbar__dropdown', attrs: { id: 'dropdown' } },
                      t._l(t.dropdown, function(e, i) {
                        return a('div', { key: i, staticClass: 'navigation-topbar__dropdown-column' }, [
                          a(
                            'div',
                            {
                              staticClass: 'navigation-topbar__dropdown-column--heading',
                              style: { color: e.color, 'border-top': '3px solid ' + e.color },
                            },
                            [a('span', [t._v(t._s(e.kategori))])]
                          ),
                          a(
                            'div',
                            { staticClass: 'navigation-topbar__dropdown-items' },
                            t._l(e.links, function(e, i) {
                              return a(
                                'a',
                                {
                                  key: i,
                                  staticClass: 'navigation-topbar__dropdown-item',
                                  class: { 'navigation-topbar__dropdown-item--active': t.checkActiveSubpage(e.value) },
                                  on: {
                                    click: function(a) {
                                      t.onClickSubpage(e.value);
                                    },
                                  },
                                },
                                [t._v('\n              ' + t._s(e.text) + '\n            ')]
                              );
                            }),
                            0
                          ),
                        ]);
                      }),
                      0
                    )
                  : t._e(),
              ]),
            ],
            1
          ),
        ]);
      },
      y = [],
      w = function() {
        return '/bydelsfakta';
      },
      k = w,
      _ = [
        {
          text: 'Folkemengde',
          value: 'folkemengde',
          options: {
            kategori: 'Befolkning',
            tema: 'Folkemengde',
            bgImage: ''.concat(k(), '/img/folkemengde.png'),
            bgColor: 'rgb(255, 129, 116)',
            txtColor: 'rgb(245, 173, 165)',
          },
        },
        {
          text: 'Alder',
          value: 'alder',
          options: {
            kategori: 'Befolkning',
            tema: 'Alder',
            bgImage: ''.concat(k(), '/img/alder.png'),
            bgColor: 'rgb(255, 129, 116)',
            txtColor: 'rgb(245, 173, 165)',
          },
        },
        {
          text: 'Innvandrerbefolkningen',
          value: 'innvandrerbefolkningen',
          options: {
            kategori: 'Befolkning',
            tema: 'Innvandrer&shy;befolkningen',
            bgImage: ''.concat(k(), '/img/innvandring.png'),
            bgColor: 'rgb(255, 129, 116)',
            txtColor: 'rgb(245, 173, 165)',
          },
        },
        {
          text: 'Husholdninger',
          value: 'husholdninger',
          options: {
            kategori: 'Bomiljø',
            tema: 'Husholdninger',
            bgImage: ''.concat(k(), '/img/husholdninger.png'),
            bgColor: 'rgb(66, 248, 182)',
            txtColor: 'rgb(199, 247, 201)',
          },
        },
        {
          text: 'Trangboddhet',
          value: 'trangboddhet',
          options: {
            kategori: 'Bomiljø',
            tema: 'Trangboddhet',
            bgImage: ''.concat(k(), '/img/trangboddhet.png'),
            bgColor: 'rgb(66, 248, 182)',
            txtColor: 'rgb(199, 247, 201)',
          },
        },
        {
          text: 'Eierform',
          value: 'eierform',
          options: {
            kategori: 'Bomiljø',
            tema: 'Eierform',
            bgImage: ''.concat(k(), '/img/eierform.png'),
            bgColor: 'rgb(66, 248, 182)',
            txtColor: 'rgb(199, 247, 201)',
          },
        },
        {
          text: 'Kommunale boliger',
          value: 'kommunaleboliger',
          options: {
            kategori: 'Bomiljø',
            tema: 'Kommunale boliger',
            bgImage: ''.concat(k(), '/img/kommunale-boliger.png'),
            bgColor: 'rgb(66, 248, 182)',
            txtColor: 'rgb(199, 247, 201)',
          },
        },
        {
          text: 'Flytting',
          value: 'flytting',
          options: {
            kategori: 'Bomiljø',
            tema: 'Flytting',
            bgImage: ''.concat(k(), '/img/flytting.png'),
            bgColor: 'rgb(66, 248, 182)',
            txtColor: 'rgb(199, 247, 201)',
          },
        },
        {
          text: 'Bygningstyper',
          value: 'bygningstyper',
          options: {
            kategori: 'Bomiljø',
            tema: 'Bygningstyper',
            bgImage: ''.concat(k(), '/img/bygningstyper.png'),
            bgColor: 'rgb(66, 248, 182)',
            txtColor: 'rgb(199, 247, 201)',
          },
        },
        {
          text: 'Boligpriser',
          value: 'boligpriser',
          options: {
            kategori: 'Bomiljø',
            tema: 'Boligpriser',
            bgImage: ''.concat(k(), '/img/boligpriser.png'),
            bgColor: 'rgb(66, 248, 182)',
            txtColor: 'rgb(199, 247, 201)',
          },
        },
        {
          text: 'Levekår',
          value: 'levekaar',
          options: {
            kategori: 'Levekår',
            tema: 'Levekår',
            bgImage: ''.concat(k(), '/img/levekaar.png'),
            bgColor: 'rgb(248, 198, 107)',
            txtColor: 'rgb(244, 206, 138)',
          },
        },
      ],
      C = _,
      A = [
        {
          kategori: 'Befolkning',
          color: 'rgb(182, 63, 50)',
          links: [
            {
              text: 'Folkemengde',
              value: 'folkemengde',
              options: {
                kategori: 'Befolkning',
                tema: 'Folkemengde',
                bgImage: ''.concat(k(), '/img/folkemengde.png'),
                bgColor: 'rgb(255, 129, 116)',
                txtColor: 'rgb(245, 173, 165)',
              },
            },
            {
              text: 'Alder',
              value: 'alder',
              options: {
                kategori: 'Befolkning',
                tema: 'Alder',
                bgImage: ''.concat(k(), '/img/alder.png'),
                bgColor: 'rgb(255, 129, 116)',
                txtColor: 'rgb(245, 173, 165)',
              },
            },
            {
              text: 'Innvandrerbefolkningen',
              value: 'innvandrerbefolkningen',
              options: {
                kategori: 'Befolkning',
                tema: 'Innvandrer&shy;befolkningen',
                bgImage: ''.concat(k(), '/img/innvandring.png'),
                bgColor: 'rgb(255, 129, 116)',
                txtColor: 'rgb(245, 173, 165)',
              },
            },
          ],
        },
        {
          kategori: 'Bomiljø',
          color: 'rgb(27, 173, 120)',
          links: [
            {
              text: 'Husholdninger',
              value: 'husholdninger',
              options: {
                kategori: 'Bomiljø',
                tema: 'Husholdninger',
                bgImage: ''.concat(k(), '/img/husholdninger.png'),
                bgColor: 'rgb(66, 248, 182)',
                txtColor: 'rgb(199, 247, 201)',
              },
            },
            {
              text: 'Trangboddhet',
              value: 'trangboddhet',
              options: {
                kategori: 'Bomiljø',
                tema: 'Trangboddhet',
                bgImage: ''.concat(k(), '/img/trangboddhet.png'),
                bgColor: 'rgb(66, 248, 182)',
                txtColor: 'rgb(199, 247, 201)',
              },
            },
            {
              text: 'Eierform',
              value: 'eierform',
              options: {
                kategori: 'Bomiljø',
                tema: 'Eierform',
                bgImage: ''.concat(k(), '/img/eierform.png'),
                bgColor: 'rgb(66, 248, 182)',
                txtColor: 'rgb(199, 247, 201)',
              },
            },
            {
              text: 'Kommunale boliger',
              value: 'kommunaleboliger',
              options: {
                kategori: 'Bomiljø',
                tema: 'Kommunale boliger',
                bgImage: ''.concat(k(), '/img/kommunale-boliger.png'),
                bgColor: 'rgb(66, 248, 182)',
                txtColor: 'rgb(199, 247, 201)',
              },
            },
            {
              text: 'Flytting',
              value: 'flytting',
              options: {
                kategori: 'Bomiljø',
                tema: 'Flytting',
                bgImage: ''.concat(k(), '/img/flytting.png'),
                bgColor: 'rgb(66, 248, 182)',
                txtColor: 'rgb(199, 247, 201)',
              },
            },
            {
              text: 'Bygningstyper',
              value: 'bygningstyper',
              options: {
                kategori: 'Bomiljø',
                tema: 'Bygningstyper',
                bgImage: ''.concat(k(), '/img/bygningstyper.png'),
                bgColor: 'rgb(66, 248, 182)',
                txtColor: 'rgb(199, 247, 201)',
              },
            },
            {
              text: 'Boligpriser',
              value: 'boligpriser',
              options: {
                kategori: 'Bomiljø',
                tema: 'Boligpriser',
                bgImage: ''.concat(k(), '/img/boligpriser.png'),
                bgColor: 'rgb(66, 248, 182)',
                txtColor: 'rgb(199, 247, 201)',
              },
            },
          ],
        },
        {
          kategori: 'Levekår',
          color: 'rgb(219, 160, 52)',
          links: [
            {
              text: 'Levekår',
              value: 'levekaar',
              options: {
                kategori: 'Levekår',
                tema: 'Levekår',
                bgImage: ''.concat(k(), '/img/levekaar.png'),
                bgColor: 'rgb(248, 198, 107)',
                txtColor: 'rgb(244, 206, 138)',
              },
            },
          ],
        },
      ],
      D = A,
      j = {
        name: 'NavigationTopbar',
        data: function() {
          return { items: C, selectedSubpage: null, dropdown: D, bydeler: c, showDropdown: !1 };
        },
        mounted: function() {
          var t = this.$route.path.split('/');
          t.length > 3 && (this.selectedSubpage = t[3]);
        },
        methods: {
          getBydel: function(t) {
            return this.$route.path.includes('sammenlign')
              ? 'Sammenligne bydeler'
              : void 0 !== t
                ? this.bydeler.find(function(e) {
                    return e.uri === t;
                  }).value
                : 'Velg bydel';
          },
          backButton: function() {
            var t = this.$route;
            null === this.selectedSubpage
              ? ((this.selected = []), this.$router.push({ path: '/' }))
              : t.path.includes('bydel')
                ? this.$router.push({ path: '/bydel/'.concat(t.params.bydel) })
                : t.path.includes('sammenlign') && this.$router.push({ path: '/sammenlign/'.concat(t.params.bydel) }),
              (this.selectedSubpage = null);
          },
          checkActiveSubpage: function(t) {
            return this.$route.path.includes(t);
          },
          onClickSubpage: function(t) {
            (this.selectedSubpage = t), (this.showDropdown = !1);
          },
        },
        watch: {
          $route: function(t) {
            var e = this.$route.path.split('/');
            t.path.includes('bydel') && (this.selectedSubpage = null), e.length > 3 && (this.selectedSubpage = e[3]);
          },
          selectedSubpage: function(t) {
            this.$route.path.includes('sammenlign') && null !== t
              ? this.$router.push({ path: '/sammenlign/'.concat(this.$route.params.bydel, '/').concat(t) })
              : this.$route.path.includes('bydel') &&
                null !== t &&
                this.$router.push({ path: '/bydel/'.concat(this.$route.params.bydel, '/').concat(t) });
          },
        },
      },
      B = j,
      H = (a('0c6e'), Object(m['a'])(B, x, y, !1, null, 'ce4c1ff0', null));
    H.options.__file = 'NavigationTopbar.vue';
    var L = H.exports,
      R = { name: 'App', components: { NavigationTopbar: L, NavigationDrawer: b } },
      S = R,
      T = (a('d5ac'), Object(m['a'])(S, r, s, !1, null, '11fcb6bd', null));
    T.options.__file = 'App.vue';
    var E = T.exports,
      $ = a('8c4f'),
      z = function() {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a(
          'div',
          { staticClass: 'graph__container' },
          [
            t.showDropdown
              ? a(
                  'select',
                  {
                    staticClass: 'graph__dropdown',
                    on: {
                      input: function(e) {
                        t.svg.render(t.data, { method: t.settings.method, range: e.target.value });
                      },
                    },
                  },
                  t._l(t.dropDownList, function(e, i) {
                    return a('option', { key: i, domProps: { value: e.range, selected: e.selected } }, [
                      t._v(t._s(e.label)),
                    ]);
                  }),
                  0
                )
              : t._e(),
            a('svg', { ref: 'svg', staticClass: 'graph__svg' }),
            a('resize-observer', {
              on: {
                notify: function(e) {
                  t.svg.resize(t.data, { method: t.settings.method });
                },
              },
            }),
          ],
          1
        );
      },
      O = [],
      F = a('5698'),
      M = [
        { range: '[0, 119]', label: 'Alle', selected: !0 },
        { range: '[0, 1]', label: '0–1 år' },
        { range: '[0, 5]', label: '0–5 år' },
        { range: '[6, 12]', label: '6–12 år' },
        { range: '[6, 15]', label: '6–15 år' },
        { range: '[6, 17]', label: '6–17 år' },
        { range: '[12, 15]', label: '12–15 år' },
        { range: '[16, 18]', label: '16–18 år' },
        { range: '[16, 18]', label: '19–29 år' },
        { range: '[16, 18]', label: '19–29 år' },
        { range: '[30, 49]', label: '30–49 år' },
        { range: '[50, 66]', label: '50–66 år' },
        { range: '[67, 119]', label: '67+ år' },
        { range: '[60, 79]', label: '60–79 år' },
        { range: '[80, 119]', label: '80+ år' },
        { range: '[80, 89]', label: '80–89 år' },
        { range: '[90, 119]', label: '90+ år' },
      ],
      I = F,
      G = function(t, e, a) {
        var i;
        return function() {
          var n = this,
            r = arguments,
            s = function() {
              (i = null), a || t.apply(n, r);
            },
            o = a && !i;
          clearTimeout(i), (i = setTimeout(s, e)), o && t.apply(n, r);
        };
      },
      P = {
        yellow: '#F8C66B',
        light_yellow: '#F8F0DC',
        purple: '#292858',
        grey: '#cccccc',
        light_grey: '#F0F1F1',
        red: '#FF8174',
        blue: '#6EE9FF',
        positive: '#06AFCD',
      },
      N = {
        dateTime: '%A %e %B %Y %H:%M:%S',
        date: '%d.%m.%Y',
        time: '%H:%M:%S',
        periods: ['AM', 'PM'],
        days: ['Søndag', 'Mandag', 'Tirsdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lørdag'],
        shortDays: ['Søn', 'Man', 'Tir', 'Ons', 'Tor', 'Fre', 'Lør'],
        months: [
          'Januar',
          'Februar',
          'Mars',
          'April',
          'Mai',
          'Juni',
          'Juli',
          'August',
          'September',
          'Oktober',
          'November',
          'Desember',
        ],
        shortMonths: ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Des'],
      },
      W = { decimal: ',', thousands: '', grouping: [3], currency: ['', ' kr'], percent: '%' };
    function K(t) {
      (this.data = {}),
        (this.height = 0),
        (this.width = 0),
        (this.padding = { top: 30, right: 40, bottom: 40, left: 120 }),
        (this.height2 = 0),
        (this.yGutter = 0),
        (this.x = I.scaleLinear()),
        (this.y = I.scaleBand()),
        (this.max = 0),
        (this.min = 0),
        (this.rowHeight = 43),
        (this.barHeight = 24),
        (this.tabWidth = 120),
        (this.tabGap = 10),
        (this.strokeWidth = 4),
        (this.strokeWidthHighlight = 6),
        (this.parseDate = I.timeParse('%Y-%m-%d')),
        (this.formatYear = I.timeFormat('%Y')),
        (this.sourceHeight = 25),
        (this.duration = 100),
        (this.resize = G(function() {
          this.render(this.data, {
            method: this.method,
            series: this.series,
            highlight: this.highlight,
            event: 'resize',
          });
        }, 250)),
        (this.init = function() {
          (this.svg = I.select(t).style('font-family', 'OsloSans')),
            this.svg.selectAll('*').remove(),
            (this.heading = this.svg
              .append('text')
              .attr('class', 'heading')
              .attr('font-size', 14)
              .attr('font-weight', 'bold')
              .attr('y', 14)),
            (this.canvas = this.svg
              .append('g')
              .attr('class', 'canvas')
              .attr('transform', 'translate('.concat(this.padding.left, ', ').concat(this.padding.top, ')'))),
            (this.xAxis = this.canvas.append('g').attr('class', 'axis x')),
            (this.yAxis = this.canvas.append('g').attr('class', 'axis y')),
            (this.x2Axis = this.canvas.append('g').attr('class', 'axis x2')),
            (this.y2Axis = this.canvas.append('g').attr('class', 'axis y2')),
            this.created(),
            this.addSourceElement();
        }),
        (this.addSourceElement = function() {
          var t = this.svg
            .append('g')
            .attr('class', 'sourceGroup')
            .attr('fill', P.purple)
            .attr('opacity', 0);
          t
            .append('text')
            .attr('class', 'source-label')
            .attr('font-size', 10)
            .text('Kilde: '),
            t
              .append('text')
              .attr('class', 'source')
              .attr('font-size', 10)
              .attr('transform', function() {
                var e = t
                  .select('.source-label')
                  .node()
                  .getBBox().width;
                return 'translate('.concat(e + 4, ', 0)');
              });
        }),
        (this.drawSource = function(t) {
          this.svg.select('text.source').text(t);
          var e = this.svg.node().parentNode.getBoundingClientRect(),
            a = this.svg
              .select('g.sourceGroup')
              .node()
              .getBBox(),
            i = e.width - a.width;
          this.svg
            .select('g.sourceGroup')
            .attr('opacity', 1)
            .attr('transform', 'translate('.concat(i, ', ').concat(e.height - 9, ')'));
        }),
        (this.parentWidth = function() {
          return t.parentNode.getBoundingClientRect().width;
        }),
        (this.created = function() {}),
        (this.commonRender = function(t) {
          var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (void 0 !== t && void 0 !== t.data)
            return (
              (t.data = Array.isArray(t.data)
                ? t.data.sort(function(t, e) {
                    return t.totalRow - e.totalRow;
                  })
                : t.data),
              (this.data = t),
              this.heading.text(this.data.meta.heading),
              this.canvas.attr('transform', 'translate('.concat(this.padding.left, ', ').concat(this.padding.top, ')')),
              (this.method = e.method || 'value'),
              (this.highlight = void 0 === e.highlight || null == e.highlight ? -1 : e.highlight),
              (this.series = e.series || 0),
              (this.selected = void 0 === e.selected || null === e.selected ? -1 : e.selected),
              (this.width = this.parentWidth() - this.padding.left - this.padding.right),
              (this.height = this.data.data.length * this.rowHeight),
              !0
            );
        }),
        (this.render = function() {});
    }
    I.timeFormatDefaultLocale(N), I.formatDefaultLocale(W);
    var q = K,
      U = {
        truncate: function(t, e) {
          var a,
            i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 14,
            n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 400;
          e = 2 === e.length ? e[1] - e[0] : e;
          var r = I.select('body').append('svg');
          r
            .append('text')
            .text(t)
            .attr('font-size', i)
            .attr('font-weight', n)
            .each(function() {
              a = this.getComputedTextLength();
            }),
            r.remove();
          var s = Math.max(t.length - Math.floor((e / a) * t.length), 0);
          return s && ((t = t.substring(0, t.length - s - 1)), (t += '...')), t;
        },
      },
      X = U;
    function Y(t) {
      q.apply(this, arguments),
        (this.padding = { top: 100, left: 190, right: 20, bottom: 30 }),
        (this.gutter = 30),
        (this.x2 = I.scaleLinear()),
        (this.x = []),
        this.filteredData;
      var e = I.format('.0%');
      (this.render = function(t) {
        var e = this,
          a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.commonRender(t, a) &&
          ((this.filteredData = JSON.parse(JSON.stringify(this.data))),
          this.selected > -1 &&
            ((this.filteredData.meta.series = [this.data.meta.series[this.selected]]),
            (this.filteredData.data = this.filteredData.data.map(function(t) {
              return (t.values = [t.values[e.selected]]), t;
            }))),
          (this.padding.top = this.data.meta.series.length <= 1 && -1 === this.selected ? 40 : 100),
          this.svg
            .transition()
            .duration(this.duration)
            .attr('height', this.padding.top + this.height + this.padding.bottom + this.sourceHeight)
            .attr('width', this.padding.left + this.width + this.padding.right),
          this.canvas
            .select('g.close')
            .style('display', function() {
              return e.selected > -1 ? 'block' : 'none';
            })
            .attr('transform', 'translate('.concat(this.width - 30, ', -60)'))
            .attr('tabindex', -1 !== this.selected && 0),
          this.setScales(),
          this.drawAxis(),
          this.drawColumns(),
          this.drawRows(),
          this.drawSource('Statistisk sentralbyrå (test)'));
      }),
        (this.created = function() {
          var t = this;
          this.canvas.append('g').attr('class', 'columns'), this.canvas.append('g').attr('class', 'rows');
          var e = this.canvas
            .append('g')
            .attr('class', 'close')
            .style('display', 'none')
            .on('click keyup', function() {
              (I.event && 'keyup' === I.event.type && 'Enter' !== I.event.key) || t.render(t.data);
            });
          e
            .append('rect')
            .attr('width', 30)
            .attr('height', 30)
            .attr('fill', P.red)
            .style('cursor', 'pointer')
            .attr('opacity', 0.7)
            .on('mouseenter', function() {
              I.select(this)
                .transition()
                .duration(this.duration)
                .attr('opacity', 1);
            })
            .on('mouseleave', function() {
              I.select(this)
                .transition()
                .duration(this.duration)
                .attr('opacity', 0.7);
            }),
            e
              .append('text')
              .attr('fill', P.purple)
              .style('pointer-events', 'none')
              .text('x')
              .attr('font-weight', 700)
              .attr('font-size', 20)
              .attr('text-anchor', 'middle')
              .attr('transform', 'translate(15, 20)');
        }),
        (this.initRowElements = function(t) {
          t
            .append('rect')
            .attr('class', 'rowFill')
            .attr('fill', P.purple)
            .attr('height', this.rowHeight)
            .attr('x', -this.padding.left)
            .attr('width', this.width + this.padding.left),
            t
              .append('rect')
              .attr('class', 'divider')
              .attr('fill', P.purple)
              .attr('x', -this.padding.left)
              .attr('width', this.width + this.padding.left)
              .attr('height', 1)
              .attr('y', this.rowHeight);
          var e = t.append('a').attr('class', 'hyperlink');
          e.append('text')
            .attr('class', 'geography')
            .attr('fill', P.purple)
            .attr('y', this.rowHeight / 2 + 6);
        }),
        (this.drawRows = function() {
          var t = this,
            e = this.canvas
              .select('g.rows')
              .selectAll('g.row')
              .data(this.filteredData.data),
            a = e
              .enter()
              .append('g')
              .attr('class', 'row');
          e.exit().remove(),
            (e = e.merge(a)),
            this.initRowElements(a),
            e.select('rect.rowFill').attr('fill-opacity', function(t) {
              return t.avgRow || t.totalRow, 0;
            }),
            e.select('rect.divider').attr('fill-opacity', function(t) {
              return t.avgRow || t.totalRow ? 0.5 : 0.2;
            }),
            e.attr('transform', function(e, a) {
              return 'translate(0, '.concat(a * t.rowHeight, ')');
            }),
            e.select('a.hyperlink').attr('xlink:href', '/bydelsfakta#/bydel/sthanshaugen/folkemengde'),
            e
              .select('a.hyperlink')
              .select('text')
              .text(function(e) {
                return X.truncate(e.geography, t.padding.left);
              })
              .attr('x', function() {
                return t.data.meta.series.length > 1 ? 10 - t.padding.left : -10;
              })
              .attr('text-anchor', function() {
                return t.data.meta.series.length > 1 ? 'start' : 'end';
              }),
            e.select('text.geography').attr('font-weight', function(t) {
              return t.avgRow || t.totalRow ? 700 : 400;
            }),
            e
              .select('text.geography')
              .append('title')
              .html(function(t) {
                return t.geography;
              }),
            e.attr('data-total', function(t) {
              return t.totalRow;
            }),
            e.attr('data-avg', function(t) {
              return t.avgRow;
            });
          var i = e.selectAll('rect.bar').data(function(t) {
              return t.values;
            }),
            n = i
              .enter()
              .append('rect')
              .attr('class', 'bar')
              .attr('width', 0);
          i.exit().remove(),
            (i = i.merge(n)),
            i
              .attr('height', function(e, a, i) {
                return i[0].parentNode.getAttribute('data-total') ? 1 : t.barHeight;
              })
              .attr('y', function(e, a, i) {
                return i[0].parentNode.getAttribute('data-total') ? t.rowHeight / 2 : (t.rowHeight - t.barHeight) / 2;
              })
              .attr('fill', function(t, e, a) {
                return a[0].parentNode.getAttribute('data-avg') ? P.yellow : P.purple;
              })
              .attr('opacity', function(e, a) {
                return a === t.highlight || -1 === t.highlight || void 0 === t.highlight ? 1 : 0.2;
              }),
            i
              .transition()
              .duration(this.duration)
              .attr('width', function(e) {
                return t.x[0](e);
              })
              .attr('x', function(e, a) {
                return t.x[a](0);
              });
        }),
        (this.setScales = function() {
          var t = this,
            e = this.filteredData.meta.series.map(function(e, a) {
              return I.max(
                t.filteredData.data.map(function(t) {
                  return t.values[a];
                })
              );
            });
          (this.x2 = I.scaleLinear()
            .range([0, this.width - (this.gutter * this.filteredData.meta.series.length - 1)])
            .domain([0, I.sum(e)])),
            (this.x = this.filteredData.meta.series.map(function(a, i) {
              for (var n = I.scaleLinear(), r = 0, s = 0; s < i; s++) (r += t.x2(e[s])), (r += t.gutter);
              var o = r + t.x2(e[i]);
              return n.domain([0, e[i]]).range([r, o]), n;
            })),
            this.x2
              .domain(
                this.filteredData.meta.series.map(function(t, e) {
                  return e;
                })
              )
              .range([0, this.width]);
        }),
        (this.drawAxis = function() {
          var t = this,
            a = this.canvas.selectAll('g.axis.x').data(this.x),
            i = a
              .enter()
              .append('g')
              .attr('class', 'axis x')
              .attr('transform', 'translate('.concat(0, ', ', this.height + 10, ')'));
          a.exit().remove(),
            (a = a.merge(i)),
            a.each(function(a, i, n) {
              I.select(n[i])
                .attr('transform', 'translate('.concat(0, ', ', t.height + 10, ')'))
                .attr('opacity', function() {
                  return i === t.highlight || -1 === t.highlight || void 0 === t.highlight ? 1 : 0.2;
                })
                .transition()
                .duration(t.duration)
                .call(
                  I.axisBottom(t.x[i])
                    .ticks((t.x[i].range()[1] - t.x[i].range()[0]) / 60)
                    .tickFormat(e)
                );
            });
        }),
        (this.drawColumns = function() {
          var t = this,
            e = this.canvas
              .select('g.columns')
              .selectAll('g.column')
              .data(this.filteredData.meta.series),
            a = e
              .enter()
              .append('g')
              .attr('class', 'column');
          e.exit().remove(),
            (e = e.merge(a)),
            e
              .transition()
              .duration(this.duration)
              .attr('transform', function(e, a) {
                return 'translate('.concat(t.x[a](0), ',0)');
              }),
            a.append('rect').attr('fill', P.light_grey),
            a
              .append('rect')
              .attr('class', 'arrow')
              .attr('width', 1)
              .attr('height', 11),
            a
              .append('text')
              .attr('class', 'colHeading')
              .attr('transform', 'translate(0, -40)'),
            a
              .append('text')
              .attr('class', 'colSubheading')
              .attr('transform', 'translate(0, -20)'),
            a.append('rect').attr('class', 'clickTrigger'),
            e
              .select('rect.clickTrigger')
              .style('cursor', function() {
                if (t.data.meta.series.length > 1) return 'pointer';
              })
              .attr('width', function(e, a) {
                return t.x[a].range()[1] - t.x[a].range()[0] + t.gutter;
              })
              .attr('height', this.height + 80)
              .attr('transform', 'translate(0, -60)')
              .attr('fill', 'black')
              .attr('opacity', 0)
              .on('mouseover', function(e, a) {
                t.render(t.data, { highlight: a, selected: t.selected });
              })
              .on('mouseleave', function() {
                t.render(t.data, { highlight: -1, selected: t.selected });
              })
              .on('click keyup', function(e, a, i) {
                if (
                  (!I.event || 'keyup' !== I.event.type || 'Enter' === I.event.key) &&
                  1 !== t.data.meta.series.length
                ) {
                  var n = t.selected > -1 ? -1 : a,
                    r = i[a].parentElement;
                  r.parentElement.prepend(r);
                  var s = t.canvas
                    .select('g.rows')
                    .selectAll('g.row')
                    .selectAll('rect.bar')
                    .filter(function(t, e) {
                      return e === a;
                    });
                  s.each(function() {
                    var t = I.select(this).node();
                    t.parentElement.prepend(t);
                  }),
                    t.render(t.data, { selected: n });
                }
              })
              .attr('tabindex', this.filteredData.meta.series.length > 1 && 0),
            e
              .select('text.colHeading')
              .style('display', function() {
                return t.filteredData.meta.series.length > 1 || t.selected > -1 ? 'inherit' : 'none';
              })
              .text(function(t) {
                return t.heading;
              })
              .append('title')
              .html(function(t) {
                return t.heading;
              }),
            e
              .select('text.colSubheading')
              .text(function(e, a) {
                return X.truncate(e.subheading, t.x[a].range());
              })
              .style('display', function() {
                return t.filteredData.meta.series.length > 1 || t.selected > -1 ? 'inherit' : 'none';
              })
              .append('title')
              .html(function(t) {
                return t.subheading;
              }),
            e.select('text.colHeading').attr('opacity', function(e, a) {
              return a === t.highlight || -1 === t.highlight || void 0 === t.highlight ? 1 : 0.2;
            }),
            e.select('text.colSubheading').attr('opacity', function(e, a) {
              return a === t.highlight || -1 === t.highlight || void 0 === t.highlight ? 1 : 0.2;
            }),
            e
              .select('rect')
              .attr('y', -10)
              .attr('height', this.height + 10)
              .transition()
              .duration(this.duration)
              .attr('width', function(e, a) {
                return t.filteredData.data.filter(function(t) {
                  return t.totalRow;
                }).length
                  ? t.x[0](
                      t.filteredData.data.filter(function(t) {
                        return t.totalRow;
                      })[0].values[a]
                    )
                  : 0;
              }),
            e
              .select('rect.arrow')
              .attr('y', function() {
                var e = t.filteredData.data.findIndex(function(t) {
                  return t.totalRow;
                });
                return e * t.rowHeight;
              })
              .attr('transform', 'translate(0, '.concat(this.rowHeight / 2 - 5, ')'))
              .transition()
              .duration(this.duration)
              .attr('x', function(e, a) {
                return t.x[0](
                  t.filteredData.data.filter(function(t) {
                    return t.totalRow;
                  })[0].values[a]
                );
              });
        }),
        this.init(t);
    }
    var V = Y;
    function J(t) {
      var e = this;
      q.apply(this, arguments), (this.padding.top = 50), (this.padding.left = 60), (this.padding.right = 220);
      var a = this.strokeWidth,
        i = this.strokeWidthHighlight;
      (this.render = function(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.commonRender(t, e) &&
          ((this.height = I.max([300, 0.5 * this.width])),
          this.svg
            .transition()
            .duration(this.duration)
            .attr('height', this.padding.top + this.height + this.padding.bottom + this.sourceHeight)
            .attr('width', this.padding.left + this.width + this.padding.right),
          this.setScales(),
          this.drawLines(),
          this.drawAxis(),
          this.drawLabels(),
          this.drawInfobox(),
          this.drawSource('Statistisk sentralbyrå (test)'));
      }),
        (this.created = function() {
          this.createInfoBoxElements();
        }),
        (this.line = I.line()
          .x(function(t) {
            return e.x(e.parseDate(t.date));
          })
          .y(function(t) {
            return e.y(t[e.method]);
          })),
        (this.drawLabels = function() {
          var t = this,
            e = this.canvas.selectAll('text.label').data(
              this.data.data.filter(function(t) {
                return t.avgRow || t.totalRow;
              })
            ),
            a = e
              .enter()
              .append('text')
              .attr('class', 'label');
          e.exit().remove(),
            (e = e.merge(a)),
            a.append('title'),
            e
              .text(function(e) {
                return X.truncate(e.geography, t.padding.right - 30);
              })
              .attr('x', this.width + 10)
              .attr('font-weight', 'bold')
              .attr('y', function(e) {
                return t.y(e.values[e.values.length - 1][t.method]) + 5;
              }),
            e
              .selectAll('title')
              .data(function(t) {
                return [t.geography];
              })
              .enter()
              .append('title')
              .html(function(t) {
                return t;
              });
        }),
        (this.createInfoBoxElements = function() {
          (this.infobox = this.svg.append('g').attr('class', 'infobox')),
            (this.infoboxBody = this.infobox.append('g').attr('class', 'infobox__body')),
            this.infoboxBody.append('rect').attr('class', 'background'),
            (this.infoboxHead = this.infobox.append('g').attr('class', 'infobox__head')),
            this.infoboxHead.append('rect').attr('class', 'background'),
            (this.infoboxTitle = this.infoboxHead.append('text')),
            (this.infoboxContent = this.infoboxBody.append('g').attr('class', 'infobox__content')),
            (this.infoboxHeading = this.infoboxContent.append('text').attr('class', 'infobox__heading')),
            this.infoboxContent.append('rect').attr('class', 'infobox__rule'),
            (this.infoboxTable = this.infoboxContent.append('g').attr('class', 'infobox__table'));
        }),
        (this.drawInfobox = function() {
          if (-1 !== this.highlight) {
            var t = I.timeFormat('%Y'),
              e = this.data.data[this.highlight].values,
              a = this.data.data[this.highlight].geography,
              i = e.reduce(function(t, e) {
                return t.value > e.value ? t : e;
              }),
              n = e.reduce(function(t, e) {
                return t.value < e.value ? t : e;
              });
            this.infobox
              .attr(
                'transform',
                'translate('.concat(this.padding.left + this.width, ', ').concat(this.padding.top, ')')
              )
              .transition()
              .duration(this.duration)
              .attr('opacity', 1),
              this.infoboxHead
                .select('rect.background')
                .attr('height', 30)
                .attr('width', this.padding.right - 22)
                .attr('x', 11)
                .attr('fill', P.purple),
              this.infoboxTitle
                .attr('y', 20)
                .attr('x', 21)
                .attr('font-size', 14)
                .attr('font-weight', 700)
                .text(X.truncate(a, this.padding.right - 55, 14, 700))
                .attr('fill', P.blue),
              this.infoboxBody
                .select('rect.background')
                .attr('height', this.height - 40)
                .attr('y', 20)
                .attr('x', 4)
                .attr('width', this.padding.right - 8)
                .attr('fill', P.light_yellow)
                .attr('stroke', P.purple),
              this.infoboxContent.attr('transform', 'translate(20, 60)'),
              this.infoboxHeading
                .attr('font-size', 12)
                .attr('font-weight', 700)
                .attr('text-transform', 'uppercase')
                .attr('fill', P.purple)
                .text(X.truncate(this.data.meta.heading, this.padding.right - 90, 12, 700).toUpperCase()),
              this.infoboxTable.selectAll('*').remove(),
              this.infoboxTable
                .append('text')
                .attr('y', 50)
                .text('Utvikling'),
              this.infoboxTable
                .append('text')
                .attr('y', 75)
                .text('Utvikling (p.p.)'),
              this.infoboxTable
                .append('text')
                .attr('y', 100)
                .text('Høyest ('.concat(t(this.parseDate(i.date)), ')')),
              this.infoboxTable
                .append('text')
                .attr('y', 125)
                .text('Lavest ('.concat(t(this.parseDate(n.date)), ')')),
              this.infoboxTable
                .append('text')
                .attr('font-weight', 700)
                .attr('y', 50)
                .attr('x', this.padding.right - 40)
                .attr('text-anchor', 'end')
                .text(Math.round(((e[e.length - 1].value - e[0].value) / e[0].value) * 100) + '%'),
              this.infoboxTable
                .append('text')
                .attr('font-weight', 700)
                .attr('y', 75)
                .attr('x', this.padding.right - 40)
                .attr('text-anchor', 'end')
                .text(Math.round(1e4 * (e[e.length - 1].ratio - e[0].ratio)) / 100),
              this.infoboxTable
                .append('text')
                .attr('font-weight', 700)
                .attr('y', 100)
                .attr('x', this.padding.right - 40)
                .attr('text-anchor', 'end')
                .text(Math.round(1e4 * i.ratio) / 100 + '%'),
              this.infoboxTable
                .append('text')
                .attr('font-weight', 700)
                .attr('y', 125)
                .attr('x', this.padding.right - 40)
                .attr('text-anchor', 'end')
                .text(Math.round(1e4 * n.ratio) / 100 + '%');
          } else this.infobox.attr('opacity', 0);
        }),
        (this.drawLines = function() {
          var t = this,
            e = this.canvas.selectAll('path.row').data(this.data.data),
            n = e
              .enter()
              .append('path')
              .attr('class', 'row');
          e.exit().remove(),
            (e = e.merge(n)),
            e
              .attr('d', function(e) {
                return t.line(e.values);
              })
              .attr('stroke', function(e, a) {
                return t.highlight >= 0 && a === t.highlight
                  ? P.yellow
                  : t.highlight >= 0 && a !== t.highlight
                    ? P.grey
                    : e.totalRow
                      ? P.blue
                      : e.avgRow
                        ? P.red
                        : P.grey;
              })
              .attr('stroke-width', 3)
              .attr('fill', 'none'),
            e.on('mouseover', function() {
              I.select(this).attr('stroke-width', i);
            }),
            e.on('mouseleave', function() {
              I.select(this).attr('stroke-width', a);
            }),
            e
              .on('click keyup', function(e, a, i) {
                I.event && 'click' === I.event.type && i[a].blur(),
                  (I.event && 'keyup' === I.event.type && 'Enter' !== I.event.key) ||
                    (a === t.highlight
                      ? t.render(t.data, { method: t.method, highlight: -1 })
                      : t.render(t.data, { method: t.method, highlight: a }));
              })
              .attr('tabindex', 0);
        }),
        (this.setScales = function() {
          var t = this;
          (this.y.max =
            1.1 *
            I.max(
              this.data.data.map(function(e) {
                return I.max(
                  e.values.map(function(e) {
                    return e[t.method];
                  })
                );
              })
            )),
            (this.y.min =
              I.min(
                this.data.data.map(function(e) {
                  return I.min(
                    e.values.map(function(e) {
                      return e[t.method];
                    })
                  );
                })
              ) / 1.2),
            (this.x = I.scaleTime()
              .domain([
                I.timeMonth.offset(this.parseDate(this.data.data[0].values[0].date), -1),
                this.parseDate(this.data.data[0].values[this.data.data[0].values.length - 1].date),
              ])
              .range([0, this.width])),
            (this.y = I.scaleLinear()
              .domain([this.y.min, this.y.max])
              .range([this.height, 0]));
        }),
        (this.drawAxis = function() {
          this.yAxis.call(I.axisLeft(this.y).ticks(this.height / 30)),
            this.xAxis
              .call(I.axisBottom(this.x).ticks(this.width / 90))
              .attr('transform', 'translate(0, '.concat(this.height, ')'));
        }),
        this.init(t);
    }
    var Q = J;
    function Z(t) {
      var e = this;
      q.apply(this, arguments), (this.padding.top = 130), (this.padding.left = 60), (this.padding.right = 220);
      var a = I.line()
        .x(function(t) {
          return e.x(e.parseDate(t.date));
        })
        .y(function(t) {
          return e.y(t[e.method]);
        });
      (this.render = function(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.commonRender(t, e) &&
          (this.heading.attr('y', 90).text(this.data.meta.heading[this.series]),
          (this.height = 400),
          this.svg
            .transition()
            .duration(this.duration)
            .attr('height', this.padding.top + this.height + this.padding.bottom + this.sourceHeight)
            .attr('width', this.padding.left + this.width + this.padding.right),
          this.setScales(),
          this.drawAxis(),
          this.drawLines(),
          this.drawTabs(),
          this.drawLabels(),
          this.drawInfobox(),
          this.drawSource('Statistisk sentralbyrå (test)'));
      }),
        (this.created = function() {
          (this.tabs = this.svg
            .insert('g')
            .attr('class', 'tabs')
            .attr('transform', 'translate(0, 20)')),
            this.tabs.append('rect').attr('class', 'rule'),
            this.createInfoBoxElements();
        }),
        (this.createInfoBoxElements = function() {
          (this.infobox = this.svg.append('g').attr('class', 'infobox')),
            (this.infoboxBody = this.infobox.append('g').attr('class', 'infobox__body')),
            this.infoboxBody.append('rect').attr('class', 'background'),
            (this.infoboxHead = this.infobox.append('g').attr('class', 'infobox__head')),
            this.infoboxHead.append('rect').attr('class', 'background'),
            (this.infoboxTitle = this.infoboxHead.append('text')),
            (this.infoboxContent = this.infoboxBody.append('g').attr('class', 'infobox__content')),
            (this.infoboxHeading = this.infoboxContent.append('text').attr('class', 'infobox__heading')),
            this.infoboxContent.append('rect').attr('class', 'infobox__rule'),
            (this.infoboxTable = this.infoboxContent.append('g').attr('class', 'infobox__table'));
        }),
        (this.drawInfobox = function() {
          var t = this;
          if (-1 !== this.highlight) {
            var e = I.timeFormat('%Y'),
              a = this.data.data[this.highlight].values.filter(function(e, a) {
                return a === t.series;
              })[0],
              i = this.data.data[this.highlight].geography,
              n = this.data.data.reduce(function(t, e) {
                return t.value > e.value ? t : e;
              }),
              r = this.data.data.reduce(function(t, e) {
                return t.value < e.value ? t : e;
              });
            this.infobox
              .attr(
                'transform',
                'translate('.concat(this.padding.left + this.width, ', ').concat(this.padding.top, ')')
              )
              .transition()
              .duration(this.duration)
              .attr('opacity', 1),
              this.infoboxHead
                .select('rect.background')
                .attr('height', 30)
                .attr('width', this.padding.right - 22)
                .attr('x', 11)
                .attr('fill', P.purple),
              this.infoboxTitle
                .attr('y', 20)
                .attr('x', 21)
                .attr('font-size', 14)
                .attr('font-weight', 700)
                .text(X.truncate(i, this.padding.right - 55, 14, 700))
                .attr('fill', P.blue),
              this.infoboxBody
                .select('rect.background')
                .attr('height', this.height - 40)
                .attr('y', 20)
                .attr('x', 4)
                .attr('width', this.padding.right - 8)
                .attr('fill', P.light_yellow)
                .attr('stroke', P.purple),
              this.infoboxContent.attr('transform', 'translate(20, 60)'),
              this.infoboxHeading
                .attr('font-size', 12)
                .attr('font-weight', 700)
                .attr('text-transform', 'uppercase')
                .attr('fill', P.purple)
                .text(
                  X.truncate(
                    ''
                      .concat(this.data.meta.series[this.series].heading, ' (')
                      .concat(this.data.meta.series[this.series].subheading, ')'),
                    this.padding.right - 90,
                    12,
                    700
                  ).toUpperCase()
                ),
              this.infoboxTable.selectAll('*').remove(),
              this.infoboxTable
                .append('text')
                .attr('y', 50)
                .text('Utvikling'),
              this.infoboxTable
                .append('text')
                .attr('y', 75)
                .text('Utvikling (p.p.)'),
              this.infoboxTable
                .append('text')
                .attr('y', 100)
                .text('Høyest ('.concat(e(this.parseDate(n.date)), ')')),
              this.infoboxTable
                .append('text')
                .attr('y', 125)
                .text('Lavest ('.concat(e(this.parseDate(r.date)), ')')),
              this.infoboxTable
                .append('text')
                .attr('font-weight', 700)
                .attr('y', 50)
                .attr('x', this.padding.right - 40)
                .attr('text-anchor', 'end')
                .text(Math.round(((a[a.length - 1].value - a[0].value) / a[0].value) * 100) + '%'),
              this.infoboxTable
                .append('text')
                .attr('font-weight', 700)
                .attr('y', 75)
                .attr('x', this.padding.right - 40)
                .attr('text-anchor', 'end')
                .text(Math.round(1e4 * (a[a.length - 1].ratio - a[0].ratio)) / 100),
              this.infoboxTable
                .append('text')
                .attr('font-weight', 700)
                .attr('y', 100)
                .attr('x', this.padding.right - 40)
                .attr('text-anchor', 'end')
                .text(Math.round(1e4 * n.ratio) / 100 + '%'),
              this.infoboxTable
                .append('text')
                .attr('font-weight', 700)
                .attr('y', 125)
                .attr('x', this.padding.right - 40)
                .attr('text-anchor', 'end')
                .text(Math.round(1e4 * r.ratio) / 100 + '%');
          } else this.infobox.attr('opacity', 0);
        }),
        (this.drawTabs = function() {
          var t = this;
          this.tabs
            .select('rect.rule')
            .attr('height', 1)
            .attr('width', this.width + this.padding.left + this.padding.right)
            .attr('fill', P.purple)
            .attr('opacity', 0.2)
            .attr('y', 40);
          var e = this.tabs.selectAll('g.tab').data(this.data.meta.series),
            a = e
              .enter()
              .append('g')
              .attr('class', 'tab');
          a
            .append('rect')
            .attr('class', 'bar')
            .attr('height', 4)
            .attr('width', this.tabWidth)
            .attr('y', 37)
            .attr('fill', P.blue),
            a
              .append('text')
              .attr('class', 'heading')
              .attr('font-size', 16)
              .attr('y', 5),
            a
              .append('text')
              .attr('class', 'subHeading')
              .attr('font-size', 12)
              .attr('y', 20),
            a
              .append('rect')
              .attr('class', 'tabOverlay')
              .attr('width', this.tabWidth)
              .attr('height', 60)
              .attr('opacity', 0)
              .attr('y', -20),
            e.exit().remove(),
            (e = e.merge(a)),
            e.attr('transform', function(e, a) {
              return 'translate('.concat(a * (t.tabWidth + t.tabGap), ', 0)');
            }),
            e
              .select('text.heading')
              .attr('font-weight', function(e, a) {
                return t.series === a ? '500' : '400';
              })
              .text(function(t) {
                return t.heading;
              }),
            e
              .select('text.subHeading')
              .attr('font-weight', function(e, a) {
                return t.series === a ? '500' : '400';
              })
              .text(function(t) {
                return t.subheading;
              }),
            e
              .select('rect.tabOverlay')
              .on('click keyup', function(e, a) {
                (I.event && 'keyup' === I.event.type && 'Enter' !== I.event.key) ||
                  t.render(t.data, { method: t.method, series: a });
              })
              .attr('tabindex', 0),
            e.select('rect.bar').attr('opacity', function(e, a) {
              return t.series === a ? 1 : 0;
            });
        }),
        (this.drawLabels = function() {
          var t = this,
            e = (function() {
              return t.highlight >= 0
                ? t.data.data.filter(function(e, a) {
                    return a === t.highlight;
                  })
                : t.data.data.filter(function(t) {
                    return t.avgRow || t.totalRow;
                  });
            })(),
            a = this.canvas.selectAll('text.label').data(e),
            i = a
              .enter()
              .append('text')
              .attr('class', 'label');
          a.exit().remove(),
            (a = a.merge(i)),
            i.append('title'),
            a
              .text(function(e) {
                return X.truncate(e.geography, t.padding.right - 30);
              })
              .attr('x', this.width + 5)
              .attr('font-weight', 'bold')
              .transition()
              .duration(this.duration)
              .attr('y', function(e) {
                return t.y(e.values[t.series][e.values[t.series].length - 1][t.method]) + 5;
              }),
            a
              .selectAll('title')
              .data(function(t) {
                return [t.geography];
              })
              .enter()
              .append('title')
              .html(function(t) {
                return t;
              });
        }),
        (this.drawLines = function() {
          var t = this,
            e = this.strokeWidth,
            i = this.strokeWidthHighlight,
            n = this.canvas.selectAll('path.row').data(this.data.data),
            r = n
              .enter()
              .append('path')
              .attr('class', 'row');
          n.exit().remove(),
            (n = n.merge(r)),
            n
              .attr('stroke', function(e, a) {
                return t.highlight >= 0 && a === t.highlight
                  ? P.yellow
                  : t.highlight >= 0 && a !== t.highlight
                    ? P.grey
                    : e.totalRow
                      ? P.blue
                      : e.avgRow
                        ? P.red
                        : P.grey;
              })
              .attr('stroke-width', this.strokeWidth)
              .attr('fill', 'none')
              .transition()
              .duration(this.duration)
              .attr('d', function(e) {
                return a(e.values[t.series]);
              }),
            n.on('mouseover', function() {
              I.select(this).attr('stroke-width', i);
            }),
            n.on('mouseleave', function() {
              I.select(this).attr('stroke-width', e);
            }),
            n
              .on('click keyup', function(e, a, i) {
                (I.event && 'keyup' === I.event.type && 'Enter' !== I.event.key) ||
                  (I.event && 'click' === I.event.type && i[a].blur(),
                  a === t.highlight
                    ? t.render(t.data, { method: t.method, series: t.series, highlight: -1 })
                    : t.render(t.data, { method: t.method, series: t.series, highlight: a }));
              })
              .attr('tabindex', 0);
        }),
        (this.setScales = function() {
          var t = this;
          (this.y.max =
            1.05 *
            I.max(
              this.data.data.map(function(e) {
                return I.max(
                  e.values[t.series].map(function(e) {
                    return e[t.method];
                  })
                );
              })
            )),
            (this.y.min =
              I.min(
                this.data.data.map(function(e) {
                  return I.min(
                    e.values[t.series].map(function(e) {
                      return e[t.method];
                    })
                  );
                })
              ) / 1.05),
            (this.x = I.scaleTime()
              .domain([
                this.parseDate(this.data.data[0].values[0][0].date),
                this.parseDate(
                  this.data.data[0].values[this.series][this.data.data[0].values[this.series].length - 1].date
                ),
              ])
              .range([0, this.width])),
            (this.y = I.scaleLinear()
              .domain([this.y.min, this.y.max])
              .range([this.height, 0]));
        }),
        (this.drawAxis = function() {
          this.yAxis
            .transition()
            .duration(this.duration)
            .call(I.axisLeft(this.y).ticks(this.height / 30)),
            this.xAxis
              .attr('transform', 'translate(0, '.concat(this.height, ')'))
              .transition()
              .duration(this.duration)
              .call(I.axisBottom(this.x).ticks(this.width / 110));
        }),
        this.init(t);
    }
    var tt = Z;
    function et(t) {
      var e = this;
      q.apply(this, arguments),
        (this.padding = { top: 50, right: 20, bottom: 1, left: 0 }),
        (this.height = 0),
        (this.height2 = 100),
        (this.width = 1e3),
        (this.paddingUpperLeft = 160),
        (this.paddingLowerLeft = 300),
        (this.yGutter = 130),
        (this.y = I.scaleLinear()),
        this.handle;
      var a,
        i,
        n = [0, 119];
      this.age = I.scaleLinear().domain(n);
      var r = I.formatDefaultLocale({ decimal: ',', thousands: '', grouping: [3], currency: ['', 'NOK'] }),
        s = r.format('.1%'),
        o = r.format(',.0f');
      (this.sortData = function(t) {
        var e = this;
        return (
          (t = t.sort(function(t, a) {
            var i = I.sum(
                t.values
                  .filter(function(t, e) {
                    return e >= n[0] && e <= n[1];
                  })
                  .map(function(t) {
                    return t[e.method];
                  })
              ),
              r = I.sum(
                a.values
                  .filter(function(t, e) {
                    return e >= n[0] && e <= n[1];
                  })
                  .map(function(t) {
                    return t[e.method];
                  })
              );
            return r - i;
          })),
          (t = t.sort(function(t, e) {
            return t.avgRow - e.avgRow;
          })),
          (t = t.sort(function(t, e) {
            return t.totalRow - e.totalRow;
          })),
          t
        );
      }),
        (this.render = function(t, e) {
          var r = this;
          if (this.commonRender(t, e) && ((this.data.data = this.sortData(this.data.data)), t.data)) {
            l.extent([[0, 0], [this.width - this.paddingUpperLeft, this.height2]]),
              h.extent([[0, 0], [this.width - this.paddingUpperLeft, 19]]),
              this.age.range([0, this.width - this.paddingUpperLeft]),
              this.svg
                .attr(
                  'height',
                  this.padding.top + this.height2 + this.yGutter + this.height + this.padding.bottom + this.sourceHeight
                )
                .attr('width', this.padding.left + this.width + this.padding.right),
              e.range &&
                ((n = JSON.parse(e.range)),
                i
                  .transition()
                  .duration(this.duration)
                  .call(l.move, n.map(this.age)),
                a
                  .transition()
                  .duration(this.duration)
                  .call(h.move, n.map(this.age)));
            var c = this.getMaxAccumulated(),
              d = this.getMax();
            this.y.domain([0, d]).range([this.height2, 0]),
              this.x.domain([0, c]).range([0, this.width - this.paddingLowerLeft]),
              this.upperYAxis
                .transition()
                .duration(this.duration)
                .call(
                  I.axisLeft(this.y)
                    .ticks(4)
                    .tickFormat(function(t) {
                      return 'ratio' == r.method ? s(t) : o(t);
                    })
                ),
              this.upperXAxis
                .transition()
                .duration(this.duration)
                .call(
                  I.axisBottom(this.age)
                    .ticks((this.width - this.paddingUpperLeft) / 100)
                    .tickFormat(function(t) {
                      return t + ' år';
                    })
                ),
              this.lowerXAxis
                .transition()
                .duration(this.duration)
                .call(
                  I.axisTop(this.x)
                    .tickFormat(function(t) {
                      return 'ratio' == r.method ? s(t) : o(t);
                    })
                    .ticks((this.width - this.paddingLowerLeft) / 70)
                ),
              'resize' === e.event && this.brushed(this),
              this.drawRows(),
              this.drawLines(),
              this.drawSource('Statistisk sentralbyrå (test)');
          }
        }),
        (this.brushed = function(t) {
          var e;
          I.event
            ? ((e = I.event.selection || t.age.range()),
              (n = e.map(function(e) {
                return Math.round(t.age.invert(e));
              })))
            : (e = n.map(t.age)),
            i.call(l),
            a.call(h),
            I.event &&
              null === I.event.selection &&
              (a
                .transition()
                .duration(this.duration)
                .call(h.move, t.age.range()),
              i
                .transition()
                .duration(this.duration)
                .call(l.move, t.age.range())),
            I.selectAll('rect.selection')
              .attr('x', e[0])
              .attr('opacity', 1)
              .attr('width', e[1] - e[0]),
            I.selectAll('.handle--e')
              .attr('width', 21)
              .attr('x', e[1]),
            I.selectAll('.handle--w')
              .attr('width', 21)
              .attr('x', e[0] - 21),
            t.handle.attr('transform', function(t) {
              return 'e' === t.type ? 'translate('.concat(e[1], ', -9)') : 'translate('.concat(e[0] - 21, ', -9)');
            }),
            t.render(t.data, { method: t.method });
        }),
        (this.line = I.line()
          .curve(I.curveBasis)
          .x(function(t, a) {
            return e.age(a);
          })
          .y(function(t) {
            return e.y(t[e.method]);
          }));
      var l = I.brushX().on('brush end', function() {
          e.brushed(e);
        }),
        h = I.brushX().on('brush end', function() {
          e.brushed(e);
        });
      (this.drawHandles = function() {
        (this.handle = a
          .selectAll('path.handle')
          .data([{ type: 'w' }, { type: 'e' }])
          .enter()
          .append('g')
          .attr('class', 'handleIcon')
          .attr('transform', 'translate(0, -9)')),
          this.handle
            .append('path')
            .attr('fill', P.purple)
            .style('pointer-events', 'none')
            .attr('d', function(t) {
              return 'e' === t.type
                ? 'M0 0h11c6 0 10 4 10 10v17c0 6-4 10-10 10H0V0z'
                : 'M21 0H10C4 0 0 4 0 10v17c0 6 4 10 10 10h11V0z';
            }),
          this.handle
            .append('rect')
            .style('pointer-events', 'none')
            .attr('height', 11)
            .attr('width', 1)
            .attr('x', 6)
            .attr('y', 13)
            .attr('fill', 'white')
            .attr('fill-opacity', '0.75'),
          this.handle
            .append('rect')
            .style('pointer-events', 'none')
            .attr('height', 11)
            .attr('width', 1)
            .attr('x', 10)
            .attr('y', 13)
            .attr('fill', 'white')
            .attr('fill-opacity', '0.75'),
          this.handle
            .append('rect')
            .style('pointer-events', 'none')
            .attr('height', 11)
            .attr('width', 1)
            .attr('x', 14)
            .attr('y', 13)
            .attr('fill', 'white')
            .attr('fill-opacity', '0.75');
      }),
        (this.created = function() {
          (this.upper = this.canvas.append('g').attr('class', 'upper')),
            (this.middle = this.canvas
              .append('g')
              .attr('class', 'middle')
              .attr('transform', 'translate(0, '.concat(this.height2 + 40, ')'))),
            (this.lower = this.canvas
              .append('g')
              .attr('class', 'lower')
              .attr('transform', 'translate(0, '.concat(this.height2 + this.yGutter, ')'))),
            this.lower
              .append('text')
              .attr('class', 'xAxis-title')
              .attr('font-size', 12)
              .attr('font-weight', 700)
              .attr('fill', P.purple)
              .attr('transform', 'translate('.concat(this.paddingLowerLeft, ', ').concat(-28, ')')),
            l.extent([[0, 0], [this.width - this.paddingUpperLeft, this.height2]]),
            h.extent([[0, 0], [this.width - this.paddingUpperLeft, 19]]),
            (i = this.upper
              .append('g')
              .attr('class', 'brush')
              .attr('transform', 'translate('.concat(this.paddingUpperLeft, ', 0)'))
              .call(l)),
            i
              .select('.selection')
              .attr('fill', P.yellow)
              .attr('stroke', P.yellow)
              .attr('stroke-width', 2)
              .attr('stroke-opacity', 1)
              .attr('fill-opacity', 0.15),
            (a = this.middle
              .append('g')
              .attr('class', 'brush')
              .attr('transform', 'translate('.concat(this.paddingUpperLeft, ', 0)'))
              .call(h)),
            a
              .select('.selection')
              .attr('fill', P.yellow)
              .attr('fill-opacity', 1),
            a
              .select('.overlay')
              .attr('stroke', P.purple)
              .attr('rx', 6),
            (this.upperXAxis = this.upper
              .append('g')
              .attr('class', 'axis x')
              .attr('transform', 'translate('.concat(this.paddingUpperLeft, ', ').concat(this.height2, ')'))),
            (this.upperYAxis = this.upper
              .append('g')
              .attr('class', 'axis y')
              .attr('transform', 'translate('.concat(this.paddingUpperLeft, ', 0)'))),
            (this.lowerXAxis = this.lower
              .append('g')
              .attr('class', 'axis x')
              .attr('transform', 'translate('.concat(this.paddingLowerLeft, ', 0)'))),
            this.drawHandles(),
            i
              .transition()
              .duration(this.duration)
              .call(l.move, [0, 50].map(this.age)),
            a
              .transition()
              .duration(this.duration)
              .call(h.move, [0, 50].map(this.age));
        }),
        (this.drawRows = function() {
          var t = this,
            e = this.lower.selectAll('g.row').data(this.data.data),
            a = e
              .enter()
              .append('g')
              .attr('class', 'row');
          e.exit().remove(),
            (e = e.merge(a)),
            a
              .append('rect')
              .attr('class', 'rowFill')
              .attr('fill', P.purple)
              .attr('height', this.rowHeight)
              .attr('width', this.width),
            a
              .append('text')
              .attr('class', 'geography')
              .attr('fill', P.purple)
              .attr('x', 10)
              .attr('y', this.rowHeight / 2 + 7),
            a
              .append('text')
              .attr('class', 'value')
              .attr('y', this.rowHeight / 2 + 7)
              .attr('fill', P.purple)
              .attr('x', this.paddingLowerLeft - 40)
              .attr('text-anchor', 'end'),
            a
              .append('rect')
              .attr('class', 'bar')
              .attr('height', this.barHeight),
            a
              .append('rect')
              .attr('class', 'divider')
              .attr('fill', P.purple)
              .attr('width', this.width)
              .attr('height', 1)
              .attr('y', this.rowHeight),
            e.select('rect.rowFill').attr('width', this.width),
            e.select('text.geography').attr('font-weight', function(t) {
              return t.avgRow || t.totalRow ? 700 : 400;
            }),
            e.select('rect.rowFill').attr('fill-opacity', function(t) {
              return t.avgRow || t.totalRow ? 0.05 : 0;
            }),
            e.select('rect.divider').attr('fill-opacity', function(t) {
              return t.avgRow || t.totalRow ? 0.5 : 0.2;
            }),
            e.attr('transform', function(e, a) {
              return 'translate(0, '.concat(a * t.rowHeight, ')');
            }),
            e.select('text.geography').text(function(t) {
              return t.geography;
            }),
            e.select('text.value').text(function(e) {
              var a = I.sum(
                e.values
                  .filter(function(t, e) {
                    return e >= n[0] && e <= n[1];
                  })
                  .map(function(e) {
                    return e[t.method];
                  })
              );
              return 'ratio' == t.method ? s(a) : o(a);
            }),
            e.select('rect.rowFill').attr('width', this.padding.left + this.width + this.padding.right),
            e.select('rect.divider').attr('width', this.padding.left + this.width + this.padding.right),
            e
              .select('rect.bar')
              .transition()
              .duration(this.duration)
              .attr('width', function(e) {
                return 'value' == t.method && (e.avgRow || e.totalRow)
                  ? 0
                  : t.x(
                      I.sum(
                        e.values
                          .filter(function(t, e) {
                            return e >= n[0] && e <= n[1];
                          })
                          .map(function(e) {
                            return e[t.method];
                          })
                      )
                    );
              })
              .attr('x', this.paddingLowerLeft)
              .attr('y', (this.rowHeight - this.barHeight) / 2 + 1)
              .attr('fill', function(t) {
                return t.totalRow || t.avgRow ? P.purple : P.blue;
              }),
            this.lower.select('text.xAxis-title').text(function() {
              return 'ratio' === t.method && n[1] - n[0] >= 1
                ? 'Andel av befolkningen mellom '.concat(n[0], ' og ').concat(n[1], ' år')
                : 'ratio' === t.method && n[1] - n[0] === 0
                  ? 'Andel av befolkningen som er '.concat(n[0], ' år')
                  : 'ratio' !== t.method && n[1] - n[0] >= 1
                    ? 'Størrelse av befolkningen mellom '.concat(n[0], ' og ').concat(n[1], ' år')
                    : 'ratio' !== t.method && n[1] - n[0] === 0
                      ? 'Størrelse av befolkningen på '.concat(n[0], ' år')
                      : void 0;
            });
        }),
        (this.drawLines = function() {
          var t = this,
            e = this.upper.selectAll('path.line').data(
              this.data.data.filter(function(e) {
                return 'ratio' == t.method ? e : !e.avgRow && !e.totalRow;
              })
            ),
            a = e
              .enter()
              .append('path')
              .attr('class', 'line')
              .attr('fill', 'none')
              .attr('transform', 'translate('.concat(this.paddingUpperLeft, ', 0)'))
              .attr('opacity', 0);
          e
            .exit()
            .attr('opacity', 0)
            .remove(),
            (e = e.merge(a)),
            e
              .attr('opacity', 1)
              .attr('d', function(e) {
                return t.line(e.values);
              })
              .attr('stroke-width', function(t) {
                return t.avgRow || t.totalRow ? 3 : 2;
              })
              .attr('stroke', function(t) {
                return t.avgRow || t.totalRow ? P.purple : P.blue;
              })
              .attr('stroke-opacity', function(t) {
                return t.avgRow || t.totalRow ? 1 : 0.5;
              });
        }),
        (this.getMaxAccumulated = function() {
          var t = this;
          return (
            1.05 *
            I.max(
              this.data.data
                .filter(function(e) {
                  return 'ratio' == t.method ? e : !e.totalRow && !e.avgRow;
                })
                .map(function(e) {
                  return I.sum(
                    e.values
                      .filter(function(t, e) {
                        return e >= n[0] && e <= n[1];
                      })
                      .map(function(e) {
                        return e[t.method];
                      })
                  );
                })
            )
          );
        }),
        (this.getMax = function() {
          var t = this;
          return (
            1.05 *
            I.max(
              this.data.data
                .filter(function(e) {
                  return 'ratio' == t.method ? e : !e.totalRow && !e.avgRow;
                })
                .map(function(e) {
                  return I.max(
                    e.values.map(function(e) {
                      return e[t.method];
                    })
                  );
                })
            )
          );
        }),
        this.init(t);
    }
    var at = et;
    function it(t) {
      var e = this;
      q.apply(this, arguments),
        (this.padding.top = 70),
        (this.padding.bottom = 50),
        (this.padding.left = 300),
        (this.padding.right = 55),
        (this.y = I.scaleLinear()),
        (this.x = I.scaleLinear()),
        (this.selected = null),
        this.list,
        this.pyramid,
        (this.gutter = 100),
        (this.yAxis = []),
        this.selected,
        (this.render = function(t, e) {
          this.commonRender(t, e) &&
            ((this.selected =
              null == e.selected || void 0 == e.selected
                ? this.data.data.findIndex(function(t) {
                    return t.avgRow || t.totalRow;
                  })
                : e.selected),
            (this.height = 400),
            this.svg
              .transition()
              .duration(this.duration)
              .attr('height', this.padding.top + this.height + this.padding.bottom + this.sourceHeight)
              .attr('width', this.padding.left + this.width + this.padding.right),
            this.drawAxis(),
            this.drawPyramid(),
            this.drawList(),
            this.drawSource('Statistisk sentralbyrå (test)'));
        }),
        (this.created = function() {
          (this.list = this.svg
            .append('g')
            .attr('class', 'list')
            .attr('transform', 'translate(3, '.concat(this.padding.top, ')'))),
            this.list
              .append('text')
              .text('Velg delbydel')
              .attr('font-size', 12)
              .style('text-transform', 'uppercase')
              .attr('font-weight', 700)
              .attr('fill', P.purple)
              .attr('transform', 'translate(10, -16)'),
            this.canvas.selectAll('*').remove(),
            (this.pyramid = this.canvas.append('g').attr('class', 'pyramid')),
            (this.yAxis = this.canvas
              .selectAll('g.axis.y')
              .data([{ type: 'left' }, { type: 'right' }, { type: 'lines' }])
              .enter()
              .append('g')),
            (this.xAxis = this.canvas
              .append('g')
              .attr('class', 'axis x')
              .attr('transform', 'translate(0, '.concat(this.height, ')'))),
            this.yAxis.attr('class', function(t) {
              return 'axis y axis-'.concat(t.type);
            }),
            this.canvas
              .append('g')
              .attr('class', 'yAxis-title')
              .attr('transform', 'translate(-50, '.concat(this.height / 2, ')'))
              .append('text')
              .attr('font-size', 12)
              .attr('font-weight', 700)
              .attr('fill', P.purple)
              .text('Alder')
              .attr('text-anchor', 'middle')
              .attr('transform', 'rotate(-90)'),
            this.canvas
              .append('text')
              .attr('class', 'xAxis-title')
              .attr('font-size', 12)
              .attr('font-weight', 700)
              .attr('fill', P.purple)
              .attr('text-anchor', 'middle')
              .attr('transform', 'translate('.concat(this.width / 2, ', ').concat(this.height + 36, ')'))
              .text('Folkemengde');
        }),
        (this.drawList = function() {
          var t = this,
            e = this.selected,
            a = this.list.selectAll('g.row').data(this.data.data),
            i = a
              .enter()
              .append('g')
              .attr('class', 'row');
          a.exit().remove(),
            (a = a.merge(i)),
            i
              .append('rect')
              .attr('class', 'fill')
              .attr('width', this.padding.left - this.gutter)
              .attr('height', this.rowHeight)
              .attr('fill', P.blue)
              .style('cursor', 'pointer')
              .attr('rx', 3),
            i.append('text').attr('class', 'label'),
            a
              .attr('transform', function(e, a) {
                return 'translate(0, '.concat(a * t.rowHeight, ')');
              })
              .on('click keyup', function(e, a, i) {
                (I.event && 'keyup' === I.event.type && 'Enter' !== I.event.key) ||
                  (I.event && 'click' === I.event.type && i[a].blur(), t.render(t.data, { selected: a }));
              })
              .attr('tabindex', 0),
            a
              .select('rect.fill')
              .attr('fill-opacity', function(e, a) {
                return a == t.selected ? 1 : 0;
              })
              .on('mouseenter', function(t, a) {
                a != e && I.select(this).attr('fill-opacity', 0.15);
              })
              .on('mouseleave', function(t, a) {
                a != e && I.select(this).attr('fill-opacity', 0);
              }),
            a
              .select('text.label')
              .text(function(t) {
                return t.geography;
              })
              .attr('y', this.rowHeight / 2 + 5)
              .attr('x', 10)
              .attr('font-weight', function(t) {
                return t.totalRow || t.avgRow ? 700 : 400;
              })
              .attr('fill', P.purple)
              .style('pointer-events', 'none');
        }),
        (this.area = I.area()
          .curve(I.curveStep)
          .x0(function() {
            return e.x(0);
          })
          .x1(function(t) {
            return 'Kvinne' == t.gender ? e.x(t.value) : e.x(-t.value);
          })
          .y(function(t, a) {
            return e.y(a);
          })),
        (this.drawPyramid = function() {
          var t = this,
            e = ['Mann', 'Kvinne'].map(function(e) {
              return t.data.data[t.selected].values.map(function(t) {
                return { gender: e, value: t[e] };
              });
            }),
            a = this.pyramid.selectAll('g.gender').data(e),
            i = a
              .enter()
              .append('g')
              .attr('class', 'gender');
          a.exit().remove(),
            (a = a.merge(i)),
            i
              .append('text')
              .datum(function(t) {
                return t;
              })
              .attr('transform', 'translate('.concat(this.width / 2, ', 23)'))
              .attr('x', function(t, e) {
                return 0 === e ? -20 : 20;
              }),
            i.append('path').datum(function(t) {
              return t;
            }),
            a
              .select('text')
              .text(function(t) {
                return t[0].gender;
              })
              .attr('text-anchor', function(t, e) {
                return 0 === e ? 'end' : 'start';
              })
              .attr('font-size', 16)
              .attr('font-weight', 700)
              .attr('fill', P.purple)
              .transition()
              .duration(this.duration)
              .attr('transform', 'translate('.concat(this.width / 2, ', 23)'))
              .attr('x', function(t, e) {
                return 0 === e ? -20 : 20;
              }),
            a
              .select('path')
              .attr('fill', function(t) {
                return 'Kvinne' == t[0].gender ? P.red : P.positive;
              })
              .transition()
              .duration(this.duration)
              .attr('d', this.area);
        }),
        (this.drawAxis = function() {
          var t = this,
            e = I.max(
              this.data.data[this.selected].values.map(function(t) {
                return t.value;
              })
            );
          this.y.range([this.height, 0]).domain([0, 120]),
            this.x.range([0, this.width]).domain([-e, e]),
            this.xAxis
              .attr('transform', 'translate(0, '.concat(this.height, ')'))
              .transition()
              .duration(this.duration)
              .call(
                I.axisBottom(this.x)
                  .ticks(this.width / 65)
                  .tickFormat(function(t) {
                    return Math.abs(t);
                  })
              ),
            this.yAxis.each(function(e, a, i) {
              if ('left' == e.type)
                I.select(i[a])
                  .call(
                    I.axisLeft(t.y).tickFormat(function(t) {
                      return t + ' år';
                    })
                  )
                  .selectAll('text');
              else if ('right' == e.type)
                I.select(i[a])
                  .call(
                    I.axisRight(t.y).tickFormat(function(t) {
                      return t + ' år';
                    })
                  )
                  .attr('transform', 'translate('.concat(t.width, ', 0)'))
                  .selectAll('text');
              else if ('lines' == e.type) {
                var n = I.select(i[a]);
                n.call(I.axisLeft(t.y).tickSize(-t.width)),
                  n.selectAll('text').remove(),
                  n.selectAll('.tick').attr('opacity', 0.15),
                  n.selectAll('.domain').remove();
              }
            }),
            this.canvas
              .select('text.xAxis-title')
              .transition()
              .duration(this.duration)
              .attr('transform', 'translate('.concat(this.width / 2, ', ').concat(this.height + 36, ')')),
            this.canvas
              .select('g.yAxis-title')
              .transition()
              .duration(this.duration)
              .attr('transform', 'translate(-50, '.concat(this.height / 2, ')'));
        }),
        this.init(t);
    }
    var nt = it;
    function rt(t) {
      q.apply(this, arguments),
        (this.padding = { top: 90, left: 240, right: 20, bottom: 1 }),
        (this.gapX = 80),
        (this.width = this.parentWidth() - this.padding.left - this.padding.right),
        (this.width1 = (this.width - this.gapX) / 2),
        (this.width2 = (this.width - this.gapX) / 2),
        (this.x = I.scaleLinear()),
        (this.x2 = I.scaleLinear()),
        (this.render = function(t) {
          var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          this.commonRender(t, e) &&
            ((t.data = t.data.map(function(t) {
              if (t.low) return t;
              var e = [];
              return (
                t.values.forEach(function(t, a) {
                  for (var i = 0; i < t.value; i++) e.push(a);
                }),
                (t.low = I.quantile(e, 0.25)),
                (t.median = I.quantile(e, 0.5)),
                (t.high = I.quantile(e, 0.75)),
                (t.mean = Math.round(100 * I.mean(e)) / 100),
                t
              );
            })),
            this.svg
              .attr('height', this.padding.top + this.height + this.padding.bottom + this.sourceHeight)
              .attr('width', this.width + this.padding.left + this.padding.right),
            (this.width1 = (this.width - this.gapX) / 2),
            (this.width2 = (this.width - this.gapX) / 2),
            this.x2.range([0, this.width2]).domain([0, 70]),
            this.x2Axis
              .transition()
              .duration(this.duration)
              .call(
                I.axisTop(this.x2)
                  .tickFormat(function(t) {
                    return ''.concat(t, ' år');
                  })
                  .ticks(this.width2 / 60)
              )
              .attr('transform', 'translate('.concat(this.width1 + this.gapX, ')')),
            this.x.range([0, this.width1]).domain([
              I.min(
                this.data.data.map(function(t) {
                  return t.mean;
                })
              ) / 1.05,
              1.05 *
                I.max(
                  this.data.data.map(function(t) {
                    return t.mean;
                  })
                ),
            ]),
            this.xAxis
              .transition()
              .duration(this.duration)
              .call(
                I.axisTop(this.x)
                  .tickFormat(function(t) {
                    return ''.concat(t, ' år');
                  })
                  .ticks(this.width2 / 60)
              ),
            this.canvas
              .select('text.label-median')
              .transition()
              .duration(this.duration)
              .attr('x', this.width1 + this.gapX + this.width2 / 2),
            this.canvas
              .select('text.label-mean')
              .transition()
              .duration(this.duration)
              .attr('x', this.width1 / 2),
            this.drawRows(),
            this.drawSource('Statistisk sentralbyrå (test)'));
        }),
        (this.created = function() {
          this.canvas
            .append('text')
            .attr('class', 'label-median')
            .attr('font-size', 13)
            .attr('y', -40)
            .attr('x', this.width1 + this.gapX + this.width2 / 2)
            .attr('text-anchor', 'middle')
            .text('Aldersfordeling og medianalder'),
            this.canvas
              .append('text')
              .attr('class', 'label-mean')
              .attr('font-size', 13)
              .attr('y', -40)
              .attr('x', this.width1 / 2)
              .attr('text-anchor', 'middle')
              .text('Gjennomsnittsalder');
        }),
        (this.initRowElements = function(t) {
          var e = this;
          t.attr('transform', function(t, a) {
            return 'translate(0, '.concat(a * e.rowHeight, ')');
          }),
            t
              .append('rect')
              .attr('class', 'rowFill')
              .attr('fill', P.purple)
              .attr('height', this.rowHeight)
              .attr('x', -this.padding.left)
              .attr('width', this.width + this.padding.left + this.padding.right),
            t
              .append('rect')
              .attr('class', 'divider')
              .attr('fill', P.purple)
              .attr('x', -this.padding.left)
              .attr('width', this.width + this.padding.left + this.padding.right)
              .attr('height', 1)
              .attr('y', this.rowHeight),
            t
              .append('text')
              .attr('class', 'geography')
              .attr('fill', P.purple)
              .attr('y', this.rowHeight / 2 + 6)
              .attr('x', 10 - this.padding.left),
            t
              .append('rect')
              .attr('class', 'box')
              .attr('fill', P.purple)
              .attr('stroke', P.purple)
              .attr('stroke-width', 1)
              .attr('fill-opacity', 0.2)
              .attr('rx', 2)
              .attr('shape-rendering', 'geometricPrecision')
              .attr('height', this.barHeight)
              .attr('x', function(t) {
                return e.gapX + e.width1 + e.x2(t.low);
              })
              .attr('y', (this.rowHeight - this.barHeight) / 2),
            t
              .append('text')
              .attr('class', 'median-value')
              .attr('text-anchor', 'start')
              .attr('font-size', 12)
              .attr('font-weight', 700)
              .attr('y', this.rowHeight / 2 + 5),
            t
              .append('rect')
              .attr('class', 'median-stroke')
              .attr('fill', P.purple)
              .attr('height', this.rowHeight)
              .attr('width', 3)
              .attr('shape-rendering', 'geometricPrecision')
              .attr('transform', 'translate(-1.5, 0)')
              .attr('y', 0)
              .attr('x', this.gapX + this.width1),
            t
              .append('text')
              .attr('class', 'mean-value')
              .attr('text-anchor', 'start')
              .attr('font-size', 12)
              .attr('font-weight', 700)
              .attr('y', this.rowHeight / 2 + 5),
            t
              .append('rect')
              .attr('class', 'mean-stroke')
              .attr('fill', P.purple)
              .attr('height', this.rowHeight)
              .attr('width', 3)
              .attr('shape-rendering', 'geometricPrecision')
              .attr('transform', 'translate(-1.5, 0)')
              .attr('y', 0);
        }),
        (this.drawRows = function() {
          var t = this,
            e = this.canvas.selectAll('g.row').data(this.data.data),
            a = e
              .enter()
              .append('g')
              .attr('class', 'row');
          e.exit().remove(),
            (e = e.merge(a)),
            this.initRowElements(a),
            e.select('text.geography').attr('font-weight', function(t) {
              return t.avgRow || t.totalRow ? 700 : 400;
            }),
            e.select('rect.rowFill').attr('fill-opacity', function(t) {
              return t.avgRow || t.totalRow ? 0.05 : 0;
            }),
            e.select('rect.divider').attr('fill-opacity', function(t) {
              return t.avgRow || t.totalRow ? 0.5 : 0.2;
            }),
            e
              .transition()
              .duration(this.duration)
              .attr('transform', function(e, a) {
                return 'translate(0, '.concat(a * t.rowHeight, ')');
              }),
            e.select('text.geography').text(function(e) {
              return X.truncate(e.geography, t.padding.left);
            }),
            e
              .select('text.median-value')
              .text(function(t) {
                return t.median;
              })
              .transition()
              .duration(this.duration)
              .attr('x', function(e) {
                return t.gapX + t.width1 + t.x2(e.median) + 6;
              }),
            e
              .select('text.mean-value')
              .text(function(t) {
                return t.mean;
              })
              .transition()
              .duration(this.duration)
              .attr('x', function(e) {
                return t.x(e.mean) + 6;
              }),
            e
              .select('rect.mean-stroke')
              .transition()
              .duration(this.duration)
              .attr('x', function(e) {
                return t.x(e.mean);
              }),
            e
              .select('rect.median-stroke')
              .transition()
              .duration(this.duration)
              .attr('x', function(e) {
                return t.gapX + t.width1 + t.x2(e.median);
              }),
            e
              .select('rect.box')
              .transition()
              .duration(this.duration)
              .attr('x', function(e) {
                return t.gapX + t.width1 + t.x2(e.low);
              })
              .attr('width', function(e) {
                return t.x2(e.high) - t.x2(e.low);
              }),
            e
              .select('rect.rowFill')
              .transition()
              .duration(this.duration)
              .attr('width', this.width + this.padding.left + this.padding.right),
            e
              .select('rect.divider')
              .transition()
              .duration(this.duration)
              .attr('width', this.width + this.padding.left + this.padding.right);
        }),
        this.init(t);
    }
    var st = rt;
    function ot(t) {
      q.apply(this, arguments),
        (this.padding = { top: 90, left: 0, right: 20, bottom: 1 }),
        (this.paddingLeft = 180),
        (this.height = 0),
        (this.width = 0),
        (this.y = I.scaleLinear()),
        (this.x = I.scaleBand());
      var e = {
        up: 'M1 2V1 0h12v12l-1 1h-1v-1h-1V5l-8 8H1l-1-1v-1l8-8H1V2z',
        down: 'M11 1h2v12H1v-2l1-1h6L0 2V1l1-1h1l8 8V2l1-1z',
      };
      (this.render = function(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.commonRender(t, e) &&
          (this.svg
            .transition()
            .duration(this.duration)
            .attr('height', this.padding.top + this.height + this.padding.bottom + this.sourceHeight)
            .attr('width', this.padding.left + this.width + this.padding.right),
          this.x
            .domain(
              this.data.meta.series.map(function(t, e) {
                return e;
              })
            )
            .range([this.paddingLeft, this.width]),
          this.drawRows(),
          this.drawColumnHeaders(),
          this.drawSource('Statistisk sentralbyrå (test)'));
      }),
        (this.created = function() {}),
        (this.initRowElements = function(t) {
          t
            .append('rect')
            .attr('class', 'rowFill')
            .attr('fill', P.purple)
            .attr('height', this.rowHeight)
            .attr('width', this.width),
            t
              .append('rect')
              .attr('class', 'divider')
              .attr('fill', P.purple)
              .attr('width', this.width)
              .attr('height', 1)
              .attr('y', this.rowHeight),
            t
              .append('text')
              .attr('class', 'geography')
              .attr('fill', P.purple)
              .attr('y', this.rowHeight / 2 + 6)
              .attr('x', 10),
            t
              .append('text')
              .attr('class', 'population__value')
              .attr('text-anchor', 'end')
              .attr('y', this.rowHeight / 2 + 6),
            t
              .append('rect')
              .attr('class', 'population__bar')
              .attr('fill', P.purple)
              .attr('height', this.barHeight)
              .attr('y', (this.rowHeight - this.barHeight) / 2),
            t
              .append('text')
              .attr('class', 'density__value')
              .attr('text-anchor', 'end')
              .attr('y', this.rowHeight / 2 + 6),
            t
              .append('rect')
              .attr('class', 'density__bar')
              .attr('fill', P.purple)
              .attr('height', this.barHeight)
              .attr('y', (this.rowHeight - this.barHeight) / 2),
            t
              .append('text')
              .attr('class', 'progress-year__value')
              .attr('text-anchor', 'end')
              .attr('y', this.rowHeight / 2 + 6),
            t
              .append('g')
              .attr('class', 'progress-year__arrow')
              .append('path'),
            t
              .append('rect')
              .attr('class', 'progress-year__bar')
              .attr('height', this.barHeight)
              .attr('y', (this.rowHeight - this.barHeight) / 2),
            t
              .append('text')
              .attr('class', 'progress-period__value')
              .attr('text-anchor', 'end')
              .attr('y', this.rowHeight / 2 + 6),
            t
              .append('g')
              .attr('class', 'progress-period__arrow')
              .append('path'),
            t
              .append('path')
              .attr('class', 'progress-year__line')
              .attr('fill', 'none')
              .attr('stroke', P.purple)
              .attr('stroke-width', 2);
        }),
        (this.renderPopulation = function(t) {
          var e = I.scaleLinear()
            .range([0, this.x.bandwidth() / 2])
            .domain([
              0,
              I.max(
                this.data.data
                  .filter(function(t) {
                    return !t.avgRow && !t.totalRow && t;
                  })
                  .map(function(t) {
                    return t.values[0];
                  })
              ),
            ]);
          t
            .select('text.population__value')
            .attr('font-weight', function(t) {
              return t.avgRow || t.totalRow ? 500 : 400;
            })
            .text(function(t) {
              return t.values[0];
            })
            .attr('x', this.x(0) + this.x.bandwidth() / 2 - 8),
            t
              .filter(function(t) {
                return !t.avgRow && !t.totalRow;
              })
              .select('rect.population__bar')
              .attr('x', this.x(0) + this.x.bandwidth() / 2)
              .attr('width', function(t) {
                return e(t.values[0]);
              });
        }),
        (this.renderDensity = function(t) {
          var e = I.scaleLinear()
            .range([0, this.x.bandwidth() / 2])
            .domain([
              0,
              I.max(
                this.data.data.map(function(t) {
                  return t.values[1];
                })
              ),
            ]);
          t
            .select('text.density__value')
            .attr('font-weight', function(t) {
              return t.avgRow || t.totalRow ? 500 : 400;
            })
            .attr('x', this.x(1) + this.x.bandwidth() / 2 - 8)
            .text(function(t) {
              return t.values[1];
            }),
            t
              .select('rect.density__bar')
              .attr('x', this.x(1) + this.x.bandwidth() / 2)
              .attr('width', function(t) {
                return e(t.values[1]);
              });
        }),
        (this.renderProgressYear = function(t) {
          var a = I.scaleLinear()
            .range([0, this.x.bandwidth() / 2])
            .domain([
              0,
              I.max(
                this.data.data
                  .filter(function(t) {
                    return !t.avgRow && !t.totalRow && t;
                  })
                  .map(function(t) {
                    return Math.abs(t.values[2]);
                  })
              ),
            ]);
          t
            .select('text.progress-year__value')
            .attr('font-weight', function(t) {
              return t.avgRow || t.totalRow ? 500 : 400;
            })
            .attr('x', this.x(2) + this.x.bandwidth() / 2 - 30)
            .text(function(t) {
              return t.values[2];
            }),
            t
              .filter(function(t) {
                return !t.avgRow && !t.totalRow;
              })
              .select('rect.progress-year__bar')
              .attr('fill', function(t) {
                return t.values[2] > 0 ? P.positive : P.red;
              })
              .attr('x', this.x(2) + this.x.bandwidth() / 2)
              .attr('width', function(t) {
                return a(Math.abs(t.values[2]));
              }),
            t
              .select('g.progress-year__arrow path')
              .attr('fill', function(t) {
                return t.values[2] > 0 ? P.positive : P.red;
              })
              .attr(
                'transform',
                'translate('
                  .concat(this.x(2) + this.x.bandwidth() / 2 - 22, ', ')
                  .concat((this.rowHeight - this.barHeight) / 2 + 4, ')')
              )
              .attr('d', function(t) {
                return t.values[2] > 0 ? e.up : e.down;
              });
        }),
        (this.renderProgressPeriod = function(t, a, i) {
          var n = I.min(t.values[3]) / 1.05,
            r = 1.05 * I.max(t.values[3]),
            s = I.select(i[a]),
            o = I.scaleLinear()
              .range([0, this.x.bandwidth() / 2])
              .domain([0, t.values[3].length]),
            l = I.scaleLinear()
              .range([this.rowHeight, 0])
              .domain([n, r]),
            h = I.line()
              .x(function(t, e) {
                return o(e);
              })
              .y(function(t) {
                return l(t);
              });
          s
            .select('text.progress-period__value')
            .attr('x', this.x(3) + this.x.bandwidth() / 2 - 30)
            .attr('font-weight', function(t) {
              return t.avgRow || t.totalRow ? 500 : 400;
            })
            .text(function(t) {
              return t.values[3][t.values[3].length - 1] - t.values[3][0];
            }),
            s
              .select('g.progress-period__arrow path')
              .attr('fill', function(t) {
                return t.values[3][t.values[3].length - 1] - t.values[3][0] > 0 ? P.positive : P.red;
              })
              .attr(
                'transform',
                'translate('
                  .concat(this.x(3) + this.x.bandwidth() / 2 - 22, ', ')
                  .concat((this.rowHeight - this.barHeight) / 2 + 4, ')')
              )
              .attr('d', function(t) {
                return t.values[3][t.values[3].length - 1] - t.values[3][0] > 0 ? e.up : e.down;
              }),
            s
              .select('path.progress-year__line')
              .attr('d', function(t) {
                return h(t.values[3]);
              })
              .attr('transform', 'translate('.concat(this.x(3) + this.x.bandwidth() / 2, ', 0)'));
        }),
        (this.drawRows = function() {
          var t = this,
            e = this.canvas.selectAll('g.row').data(
              this.data.data.sort(function(t, e) {
                return t.avgRow - e.avgRow;
              })
            ),
            a = e
              .enter()
              .append('g')
              .attr('class', 'row');
          e.exit().remove(),
            (e = e.merge(a)),
            this.initRowElements(a),
            e.select('text.geography').attr('font-weight', function(t) {
              return t.avgRow || t.totalRow ? 700 : 400;
            }),
            e
              .select('rect.rowFill')
              .attr('fill-opacity', function(t) {
                return t.avgRow || t.totalRow ? 0.05 : 0;
              })
              .attr('width', this.width),
            e
              .select('rect.divider')
              .attr('fill-opacity', function(t) {
                return t.avgRow || t.totalRow ? 0.5 : 0.2;
              })
              .attr('width', this.width),
            e.attr('transform', function(e, a) {
              return 'translate(0, '.concat(a * t.rowHeight, ')');
            }),
            e.select('text.geography').text(function(e) {
              return X.truncate(e.geography, t.paddingLeft);
            }),
            this.renderPopulation(e),
            this.renderDensity(e),
            this.renderProgressYear(e),
            e.each(function(e, a, i) {
              return t.renderProgressPeriod(e, a, i);
            });
        }),
        (this.drawColumnHeaders = function() {
          var t = this,
            e = this.canvas.selectAll('g.column').data(this.data.meta.series),
            a = e
              .enter()
              .append('g')
              .attr('class', 'column');
          e.exit().remove(),
            (e = e.merge(a)),
            a
              .append('text')
              .attr('class', 'heading')
              .attr('font-size', 14)
              .attr('font-weight', 400)
              .attr('text-anchor', 'middle'),
            a
              .append('text')
              .attr('class', 'subHeading')
              .attr('font-size', 12.5)
              .attr('font-weight', 400)
              .attr('text-anchor', 'middle')
              .attr('y', 16),
            e.attr('transform', function(e, a) {
              return 'translate('.concat(t.x(a) + t.x.bandwidth() / 2, ', -30)');
            }),
            e.select('text.heading').text(function(t) {
              return t.heading ? t.heading : '';
            }),
            e.select('text.subHeading').text(function(t) {
              return t.subheading ? t.subheading : '';
            });
        }),
        this.init(t);
    }
    var lt = ot;
    function ht(t) {
      var e = this;
      q.apply(this, arguments),
        (this.padding = { top: 40, left: 80, right: 20, bottom: 20 }),
        (this.height1 = 400),
        (this.gapX = 50),
        (this.gapY = 70),
        (this.height2 = 80),
        (this.height = this.height1 + this.gapY + this.height2),
        (this.sidebarWidth = 250),
        (this.width1 = 750),
        (this.width = this.width1 + this.gapX + this.sidebarWidth),
        (this.x = I.scaleTime()),
        (this.y = I.scaleLinear()),
        (this.y2 = I.scaleLinear()),
        this.barWidth,
        this.sidebar,
        this.upper,
        this.lower,
        this.triggersContainer,
        this.selected,
        (this.line = I.line()
          .x(function(t) {
            return e.x(e.parseDate(t.date));
          })
          .y(function(t) {
            return e.y(t.population);
          })),
        (this.render = function(t) {
          var e = this,
            a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          this.commonRender(t, a) &&
            ((this.highlight = a.highlight || this.data.data.actual[this.data.data.actual.length - 1].date),
            (this.selected = this.data.data.actual.filter(function(t) {
              return t.date === e.highlight;
            })[0]),
            (this.width1 = this.parentWidth() - this.padding.left - this.padding.right - this.gapX - this.sidebarWidth),
            (this.width = this.width1 + this.gapX + this.sidebarWidth),
            (this.height = this.height1 + this.gapY + this.height2),
            this.svg
              .transition()
              .duration(this.duration)
              .attr('height', this.padding.top + this.height + this.padding.bottom + this.sourceHeight)
              .attr('width', this.padding.left + this.width + this.padding.right),
            this.resetScales(),
            this.drawSidebar(),
            this.drawUpper(),
            this.drawLower(),
            this.drawTriggers(),
            this.drawSource('Statistisk sentralbyrå (test)'));
        }),
        (this.created = function() {
          this.canvas.selectAll('*').remove(),
            this.canvas.remove(),
            this.createSidebarElements(),
            this.createUpperElements(),
            this.createLowerElements(),
            (this.triggersContainer = this.svg.append('g').attr('class', 'triggers'));
        }),
        (this.createSidebarElements = function() {
          this.sidebar = this.svg.append('g').attr('class', 'sidebar');
          var t = this.sidebar.append('g').attr('class', 'section-year');
          t
            .append('rect')
            .attr('class', 'section-year__bg')
            .attr('width', 88)
            .attr('rx', 4)
            .attr('height', 40)
            .attr('fill', P.purple),
            t
              .append('text')
              .attr('class', 'section-year__text')
              .attr('fill', 'white')
              .attr('y', 30)
              .attr('font-size', 26)
              .attr('font-weight', 700)
              .attr('text-anchor', 'middle')
              .attr('x', 44);
          var e = this.sidebar
            .append('g')
            .attr('class', 'section-population')
            .attr('transform', 'translate(0, 70)');
          e.append('rect').attr('class', 'divider'),
            e
              .append('text')
              .attr('class', 'label')
              .text('Befolkning'),
            e.append('text').attr('class', 'value');
          var a = this.sidebar
            .append('g')
            .attr('class', 'section-change')
            .attr('transform', 'translate(0, 140)');
          a.append('rect').attr('class', 'divider'),
            a
              .append('text')
              .attr('class', 'label')
              .text('Befolkningsvekst'),
            a.append('text').attr('class', 'value'),
            a.append('rect').attr('class', 'bar'),
            this.sidebar
              .selectAll('rect.divider')
              .attr('height', 2)
              .attr('width', this.sidebarWidth)
              .attr('fill', P.purple),
            this.sidebar
              .selectAll('text.value')
              .attr('font-size', 16)
              .attr('y', 26)
              .attr('font-weight', '700')
              .attr('fill', P.purple)
              .attr('text-anchor', 'end')
              .attr('x', this.sidebarWidth)
              .text('70'),
            this.sidebar
              .selectAll('text.label')
              .attr('font-size', 16)
              .attr('font-weight', '400')
              .attr('y', 26)
              .attr('fill', P.purple);
        }),
        (this.createUpperElements = function() {
          (this.upper = this.svg.append('g').attr('class', 'upper')),
            (this.xAxis = this.upper.append('g').attr('class', 'axis x')),
            (this.yAxis = this.upper.append('g').attr('class', 'axis y')),
            this.upper
              .append('path')
              .attr('class', 'projection')
              .attr('fill', P.blue),
            this.upper
              .append('path')
              .attr('class', 'expected')
              .attr('fill', 'none')
              .attr('stroke', P.purple),
            this.upper
              .append('path')
              .attr('class', 'valueLine')
              .attr('fill', 'none')
              .attr('stroke', P.purple)
              .attr('stroke-width', 3),
            this.upper
              .append('line')
              .attr('class', 'currentDate')
              .attr('stroke', P.purple)
              .attr('opacity', 0.7)
              .attr('stroke-width', 1)
              .style('stroke-dasharray', '3,3'),
            this.upper
              .append('text')
              .attr('class', 'populationTooltip')
              .attr('font-size', 12)
              .attr('text-anchor', 'end')
              .attr('transform', 'translate(-10, -3)'),
            this.upper
              .append('line')
              .attr('class', 'highlightLine')
              .attr('stroke-width', 5)
              .attr('stroke-opacity', 0.1)
              .attr('stroke', P.yellow),
            this.upper
              .append('line')
              .attr('class', 'highlightLine')
              .attr('stroke-width', 2)
              .attr('stroke', P.yellow);
          var t = this.upper.append('g').attr('class', 'highlightContainer');
          t
            .append('rect')
            .attr('class', 'highlightDateBox')
            .attr('fill', P.yellow)
            .attr('height', 26)
            .attr('width', 48)
            .attr('transform', 'translate(-24, 0)'),
            t
              .append('text')
              .attr('class', 'highlightText')
              .attr('fill', P.purple)
              .attr('font-size', 12)
              .attr('font-weight', 700)
              .attr('y', 18)
              .attr('text-anchor', 'middle');
        }),
        (this.createLowerElements = function() {
          (this.lower = this.svg.append('g').attr('class', 'lower')),
            this.lower.append('g').attr('class', 'bars'),
            this.lower
              .append('line')
              .attr('class', 'zeroline')
              .attr('stroke-width', 1)
              .attr('stroke', P.purple),
            (this.y2Axis = this.lower.append('g').attr('class', 'axis y')),
            this.lower
              .append('text')
              .attr('class', 'sectionHeading')
              .attr('fill', P.purple)
              .attr('font-weight', 500)
              .text('Befolkningsendring per år');
        }),
        (this.drawSidebar = function() {
          this.sidebar.attr(
            'transform',
            'translate('.concat(this.padding.left + this.width1 + this.gapX, ', ').concat(this.padding.top, ')')
          ),
            this.sidebar.select('text.section-year__text').text(this.formatYear(this.parseDate(this.selected.date))),
            this.sidebar.select('g.section-population text.value').text(this.selected.population),
            this.sidebar.select('g.section-change text.value').text(this.selected.change);
        }),
        (this.drawUpper = function() {
          var t = this;
          this.upper.attr('transform', 'translate('.concat(this.padding.left, ', ').concat(this.padding.top, ')')),
            this.xAxis.attr('transform', 'translate(0, '.concat(this.height1, ')')),
            this.upper.select('text.highlightText').text(this.formatYear(this.parseDate(this.highlight))),
            this.upper
              .select('g.highlightContainer')
              .attr(
                'transform',
                'translate('.concat(this.x(this.parseDate(this.highlight)), ', ').concat(this.height1, ')')
              ),
            this.upper
              .select('text.populationTooltip')
              .text(this.selected.population)
              .attr('y', this.y(this.selected.population))
              .attr('x', this.x(this.parseDate(this.selected.date))),
            this.upper
              .selectAll('line.highlightLine')
              .attr('x1', this.x(this.parseDate(this.highlight)))
              .attr('x2', this.x(this.parseDate(this.highlight)))
              .attr('y1', 0)
              .attr('y2', this.height1),
            this.upper
              .select('line.currentDate')
              .attr('x1', this.x(new Date()))
              .attr('x2', this.x(new Date()))
              .attr('y1', 0)
              .attr('y2', this.height1),
            this.upper
              .select('path.valueLine')
              .datum(this.data.data)
              .attr('d', function(e) {
                return t.line(e.actual);
              }),
            this.drawProjection();
        }),
        (this.drawLower = function() {
          var t = this;
          (this.barWidth = this.x(this.parseDate('2018-01-01')) - this.x(this.parseDate('2017-01-01')) - 1),
            this.lower.attr(
              'transform',
              'translate('.concat(this.padding.left, ', ').concat(this.padding.top + this.height1 + this.gapY, ')')
            ),
            this.lower
              .select('line.zeroline')
              .attr('x1', 0)
              .attr('x2', this.width1)
              .attr('y1', this.y2(0))
              .attr('y2', this.y2(0));
          var e = this.lower
              .select('g.bars')
              .selectAll('rect.bar')
              .data(this.data.data.actual),
            a = e
              .enter()
              .append('rect')
              .attr('class', 'bar');
          e.exit().remove(),
            (e = e.merge(a)),
            e
              .attr('width', this.barWidth)
              .attr('x', function(e) {
                return t.x(t.parseDate(e.date)) - t.barWidth / 2;
              })
              .attr('height', function(e) {
                return Math.abs(t.y2(0) - t.y2(e.change));
              })
              .attr('y', function(e) {
                return e.change > 0 ? t.y2(e.change) : t.y2(0);
              })
              .attr('fill', function(e) {
                return e.date === t.highlight ? P.purple : e.change > 0 ? P.blue : P.red;
              }),
            this.lower
              .select('text.sectionHeading')
              .attr('y', -5)
              .attr('x', 20);
        }),
        (this.drawProjection = function() {
          var t = this.data.data.actual[this.data.data.actual.length - 1],
            e = { x: this.x(this.parseDate(t.date)), y: this.y(t.population) },
            a = { x: this.x(this.parseDate(this.data.data.projection.date)), y: this.y(this.data.data.projection.low) },
            i = {
              x: this.x(this.parseDate(this.data.data.projection.date)),
              y: this.y(this.data.data.projection.expected),
            },
            n = {
              x: this.x(this.parseDate(this.data.data.projection.date)),
              y: this.y(this.data.data.projection.high),
            },
            r = 'M'
              .concat(e.x, ',')
              .concat(e.y, ' L')
              .concat(a.x, ',')
              .concat(a.y, ' L')
              .concat(n.x, ',')
              .concat(n.y, 'z'),
            s = 'M'
              .concat(e.x, ',')
              .concat(e.y, ' L')
              .concat(i.x, ',')
              .concat(i.y);
          this.upper.select('path.projection').attr('d', r), this.upper.select('path.expected').attr('d', s);
        }),
        (this.drawTriggers = function() {
          var t = this;
          this.triggersContainer.attr(
            'transform',
            'translate('.concat(this.padding.left, ', ').concat(this.padding.top, ')')
          );
          var e = this.triggersContainer.selectAll('rect').data(this.data.data.actual),
            a = e.enter().append('rect');
          e.exit().remove(),
            (e = e.merge(a)),
            e
              .attr('width', this.barWidth + 1)
              .attr('height', this.height1 + this.gapY + this.height2)
              .attr('x', function(e) {
                return t.x(t.parseDate(e.date)) - t.barWidth / 2;
              })
              .style('cursor', 'pointer')
              .on('mouseover', function(e) {
                t.render(t.data, { highlight: e.date });
              })
              .on('click keyup', function(e, a, i) {
                (I.event && 'keyup' === I.event.type && 'Enter' !== I.event.key) ||
                  (I.event && 'click' === I.event.type && i[a].blur(), t.render(t.data, { highlight: e.date }));
              })
              .on('mouseover', function() {
                I.select(this).attr('fill-opacity', 0.03);
              })
              .on('mouseleave', function() {
                I.select(this)
                  .transition()
                  .duration(this.duration)
                  .duration(40)
                  .attr('fill-opacity', 0);
              })
              .transition()
              .duration(this.duration)
              .duration(1e3)
              .attr('fill-opacity', 0)
              .attr('tabindex', 0);
        }),
        (this.resetScales = function() {
          var t = this,
            e = I.extent(
              this.data.data.actual.concat(this.data.data.projection).map(function(e) {
                return t.parseDate(e.date);
              })
            );
          e[0] = I.timeYear.offset(e[0], -2);
          var a =
              I.min(
                this.data.data.actual.concat(this.data.data.projection).map(function(t) {
                  return t.population || t.low;
                })
              ) / 1.5,
            i =
              1.15 *
              I.max(
                this.data.data.actual.concat(this.data.data.projection).map(function(t) {
                  return t.population || t.high;
                })
              );
          this.y2.range([this.height2, 0]).domain(
            I.extent(
              this.data.data.actual
                .map(function(t) {
                  return t.change;
                })
                .map(function(t, e) {
                  return 1 == e ? 1.3 * t : t;
                })
            )
          ),
            this.x.range([0, this.width1]).domain(e),
            this.y.range([this.height1, 0]).domain([a, i]),
            this.xAxis.call(I.axisBottom(this.x).ticks(this.width1 / 60)),
            this.yAxis.call(I.axisLeft(this.y).ticks(this.height1 / 40)),
            this.y2Axis.call(I.axisLeft(this.y2).ticks(this.height2 / 20));
        }),
        this.init(t);
    }
    var ct = ht,
      dt = [{ x: -1, y: 0 }, { x: 1, y: 0 }, { x: 0, y: 1 }, { x: -1, y: 0 }],
      ut = [
        [{ x: -0.9, y: 0.1 }, { x: -0.8, y: 0 }],
        [{ x: -0.8, y: 0.2 }, { x: -0.6, y: 0 }],
        [{ x: -0.7, y: 0.3 }, { x: -0.4, y: 0 }],
        [{ x: -0.6, y: 0.4 }, { x: -0.2, y: 0 }],
        [{ x: -0.5, y: 0.5 }, { x: 0, y: 0 }],
        [{ x: -0.4, y: 0.6 }, { x: 0.2, y: 0 }],
        [{ x: -0.3, y: 0.7 }, { x: 0.4, y: 0 }],
        [{ x: -0.2, y: 0.8 }, { x: 0.6, y: 0 }],
        [{ x: -0.1, y: 0.9 }, { x: 0.8, y: 0 }],
        [{ x: 0.1, y: 0.9 }, { x: -0.8, y: 0 }],
        [{ x: 0.2, y: 0.8 }, { x: -0.6, y: 0 }],
        [{ x: 0.3, y: 0.7 }, { x: -0.4, y: 0 }],
        [{ x: 0.4, y: 0.6 }, { x: -0.2, y: 0 }],
        [{ x: 0.5, y: 0.5 }, { x: 0, y: 0 }],
        [{ x: 0.6, y: 0.4 }, { x: 0.2, y: 0 }],
        [{ x: 0.7, y: 0.3 }, { x: 0.4, y: 0 }],
        [{ x: 0.8, y: 0.2 }, { x: 0.6, y: 0 }],
        [{ x: 0.9, y: 0.1 }, { x: 0.8, y: 0 }],
        [{ x: -0.9, y: 0.1 }, { x: 0.9, y: 0.1 }],
        [{ x: -0.8, y: 0.2 }, { x: 0.8, y: 0.2 }],
        [{ x: -0.7, y: 0.3 }, { x: 0.7, y: 0.3 }],
        [{ x: -0.6, y: 0.4 }, { x: 0.6, y: 0.4 }],
        [{ x: -0.5, y: 0.5 }, { x: 0.5, y: 0.5 }],
        [{ x: -0.4, y: 0.6 }, { x: 0.4, y: 0.6 }],
        [{ x: -0.3, y: 0.7 }, { x: 0.3, y: 0.7 }],
        [{ x: -0.2, y: 0.8 }, { x: 0.2, y: 0.8 }],
        [{ x: -0.1, y: 0.9 }, { x: 0.1, y: 0.9 }],
      ];
    function pt(t) {
      q.apply(this, arguments),
        (this.padding = { top: 70, bottom: 70, left: 200, right: 105 }),
        (this.width = 400),
        (this.height = Math.sqrt(this.width * this.width - (this.width / 2) * (this.width / 2))),
        (this.y = I.scaleLinear()),
        (this.x = I.scaleLinear()),
        (this.selected = null),
        this.list,
        this.matrix,
        (this.gutter = (this.parentWidth() - this.padding.left - this.width) / 2),
        (this.yAxis = []),
        (this.max = 0),
        this.dotContainer,
        this.lineContainer;
      var e = 0.3,
        a = 0.8,
        i = I.scaleLinear()
          .range([0, this.width])
          .domain([-1, 1]),
        n = I.scaleLinear()
          .range([this.height, 0])
          .domain([0, 1]),
        r = I.line()
          .x(function(t) {
            return i(t.x);
          })
          .y(function(t) {
            return n(t.y);
          });
      (this.render = function(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.commonRender(t, e) &&
          ((this.gutter = (this.parentWidth() - this.padding.left - 400) / 2),
          this.matrix
            .transition()
            .duration(this.duration)
            .attr('transform', 'translate('.concat(this.gutter, ', 0)')),
          this.dotContainer
            .transition()
            .duration(this.duration)
            .attr('transform', 'translate('.concat(this.gutter, ', 0)')),
          this.lineContainer
            .transition()
            .duration(this.duration)
            .attr('transform', 'translate('.concat(this.gutter, ', 0)')),
          this.svg
            .transition()
            .duration(this.duration)
            .attr('height', 500 + this.sourceHeight)
            .attr('width', this.parentWidth()),
          this.drawMatrix(),
          this.drawList(),
          this.updateAxisLabels(),
          this.drawLines(),
          this.drawSource('Statistisk sentralbyrå (test)'));
      }),
        (this.created = function() {
          (this.list = this.svg
            .append('g')
            .attr('class', 'list')
            .attr('transform', 'translate(3, '.concat(this.padding.top, ')'))),
            this.list
              .append('text')
              .text('Velg delbydel')
              .attr('font-size', 12)
              .style('text-transform', 'uppercase')
              .attr('font-weight', 700)
              .attr('fill', P.purple)
              .attr('transform', 'translate(10, -16)'),
            this.canvas.selectAll('*').remove(),
            this.canvas.attr(
              'transform',
              'translate('.concat(this.padding.left + this.gutter, ', ').concat(this.padding.top, ')')
            ),
            this.drawGrid(),
            (this.lineContainer = this.canvas.append('g').attr('class', 'lineContainer')),
            (this.dotContainer = this.canvas.append('g').attr('class', 'dotcontainer'));
        }),
        (this.drawList = function() {
          var t = this,
            i = this.selected,
            n = this.dotContainer.selectAll('g'),
            r = this.list.selectAll('g.row').data(this.data.data),
            s = r
              .enter()
              .append('g')
              .attr('class', 'row');
          r.exit().remove(),
            (r = r.merge(s)),
            s
              .append('rect')
              .attr('class', 'fill')
              .attr('width', this.padding.left)
              .attr('height', this.rowHeight)
              .attr('fill', P.blue)
              .style('cursor', 'pointer')
              .attr('rx', 3),
            s.append('text').attr('class', 'label'),
            r
              .attr('transform', function(e, a) {
                return 'translate(0, '.concat(a * t.rowHeight, ')');
              })
              .on('click keyup', function(e, a, i) {
                (I.event && 'keyup' === I.event.type && 'Enter' !== I.event.key) ||
                  (I.event && 'click' === I.event.type && i[a].blur(),
                  t.selected === a ? t.render(t.data, { selected: null }) : t.render(t.data, { selected: a }));
              })
              .attr('tabindex', 0),
            r
              .select('rect.fill')
              .attr('fill-opacity', function(e, a) {
                return a == t.selected ? 1 : 0;
              })
              .on('mouseenter', function(t, e) {
                e != i &&
                  (I.select(this).attr('fill-opacity', 0.25),
                  n
                    .filter(function(t, a) {
                      return e == a;
                    })
                    .select('circle')
                    .attr('r', 8)
                    .attr('fill', P.blue)
                    .attr('fill-opacity', 1)
                    .attr('stroke-opacity', 1));
              })
              .on('mouseleave', function(t, r) {
                r != i &&
                  (I.select(this).attr('fill-opacity', 0),
                  n
                    .filter(function(t, e) {
                      return r == e;
                    })
                    .select('circle')
                    .attr('r', 6)
                    .attr('fill', P.blue)
                    .attr('fill-opacity', e)
                    .attr('stroke-opacity', a));
              }),
            r
              .select('text.label')
              .text(function(t) {
                return t.geography;
              })
              .attr('y', this.rowHeight / 2 + 5)
              .attr('x', 10)
              .attr('font-weight', function(t) {
                return t.totalRow || t.avgRow ? 700 : 400;
              })
              .attr('fill', P.purple)
              .style('pointer-events', 'none');
        }),
        (this.drawGrid = function() {
          (this.matrix = this.canvas.append('g').attr('class', 'matrix')),
            this.matrix
              .selectAll('text.label-1')
              .data(
                s.filter(function(t, e) {
                  return e < 9;
                })
              )
              .enter()
              .append('text')
              .text(function(t, e) {
                return 10 * (e + 1);
              })
              .attr('text-anchor', 'end')
              .style('font-size', 13)
              .style('font-weight', 'bold')
              .attr('x', function(t) {
                return i(t[1].x) - 6;
              })
              .attr('y', function(t) {
                return n(t[1].y) + 4;
              }),
            this.matrix
              .selectAll('text.label-2')
              .data(
                s.filter(function(t, e) {
                  return e >= 9 && e < 18;
                })
              )
              .enter()
              .append('text')
              .attr('class', 'label-2')
              .attr('x', function(t) {
                return i(t[1].x) + 4;
              })
              .attr('y', function(t) {
                return n(t[1].y) + 4;
              })
              .attr('transform', function(t) {
                return 'rotate(300, '.concat(i(t[1].x), ', ').concat(n(t[1].y), ')');
              })
              .text(function(t, e) {
                return 10 * (e + 1);
              })
              .attr('text-anchor', 'start')
              .style('font-size', 13)
              .style('font-weight', 'bold'),
            this.matrix
              .selectAll('text.label-3')
              .data(
                s.filter(function(t, e) {
                  return e >= 18;
                })
              )
              .enter()
              .append('text')
              .attr('class', 'label-3')
              .attr('x', function(t) {
                return i(t[1].x) + 4;
              })
              .attr('y', function(t) {
                return n(t[1].y) + 4;
              })
              .attr('transform', function(t) {
                return 'rotate(60, '.concat(i(t[1].x), ', ').concat(n(t[1].y), ')');
              })
              .text(function(t, e) {
                return 10 * (e + 1);
              })
              .attr('text-anchor', 'start')
              .style('font-size', 13)
              .style('font-weight', 'bold'),
            this.matrix
              .selectAll('.tickLine')
              .data(s)
              .enter()
              .append('path')
              .attr('class', 'tickLine')
              .attr('stroke', 'black')
              .attr('stroke-width', 2)
              .attr('d', function(t) {
                return r(t);
              }),
            this.matrix
              .append('path')
              .datum(dt)
              .attr('d', r)
              .attr('fill', P.light_grey),
            this.matrix
              .selectAll('.line')
              .data(ut)
              .enter()
              .append('path')
              .attr('class', 'line')
              .attr('stroke-width', 2)
              .attr('stroke', 'white')
              .attr('d', function(t) {
                return r(t);
              }),
            this.matrix
              .append('path')
              .datum(dt)
              .attr('d', r)
              .attr('stroke-width', 2)
              .attr('stroke', 'black')
              .attr('fill', 'none'),
            this.matrix
              .append('text')
              .attr('class', 'label2')
              .text('% sand')
              .attr('text-anchor', 'middle')
              .style('font-size', 15)
              .style('font-weight', 'bold')
              .attr('x', i(s[4][1].x) - 12)
              .attr('y', n(s[4][1].y) - 40)
              .attr('transform', 'rotate(300, '.concat(i(s[4][1].x), ', ').concat(n(s[4][1].y), ')')),
            this.matrix
              .append('text')
              .attr('class', 'label3')
              .text('% dirt')
              .attr('text-anchor', 'middle')
              .style('font-size', 15)
              .style('font-weight', 'bold')
              .attr('x', i(s[13][1].x) - 12)
              .attr('y', n(s[13][1].y) - 32)
              .attr('transform', 'rotate(60, '.concat(i(s[13][1].x), ', ').concat(n(s[4][1].y), ')')),
            this.matrix
              .append('text')
              .attr('class', 'label1')
              .text('% water')
              .attr('text-anchor', 'middle')
              .style('font-size', 15)
              .style('font-weight', 'bold')
              .attr('x', i(s[22][1].x))
              .attr('y', n(s[22][1].y) + 42);
        }),
        (this.drawLines = function() {
          var t = this;
          if (null !== this.selected && -1 !== this.selected && void 0 !== this.selected) {
            var e = this.dotContainer.selectAll('g').filter(function(e, a) {
                return a == t.selected;
              }),
              a = e.select('circle'),
              s = +e.attr('data-x'),
              o = +e.attr('data-y'),
              l = I.scaleLinear()
                .range([-1, 1])
                .domain([1, 0]),
              h = [
                [{ x: i.invert(s), y: n.invert(o) }, { x: l(a.attr('data-0')), y: 0 }],
                [{ x: i.invert(s), y: n.invert(o) }, { x: a.attr('data-1') - 1, y: a.attr('data-1') }],
                [{ x: i.invert(s), y: n.invert(o) }, { x: a.attr('data-2'), y: 1 - a.attr('data-2') }],
              ],
              c = this.lineContainer.selectAll('path.lines').data(h);
            c.exit().remove();
            var d = c
              .enter()
              .append('path')
              .attr('class', 'lines');
            (c = c.merge(d)),
              c
                .attr('fill', 'none')
                .attr('stroke', 'black')
                .attr('stroke-width', 2)
                .style('pointer-events', 'none')
                .transition()
                .duration(this.duration)
                .attr('opacity', 1)
                .attr('d', r);
          } else
            this.lineContainer
              .selectAll('path.lines')
              .transition()
              .duration(this.duration)
              .attr('opacity', 0);
        }),
        (this.drawMatrix = function() {
          var t = this,
            r = this.dotContainer.selectAll('g').data(this.data.data);
          r.exit().remove();
          var s = r.enter().append('g');
          s.append('circle'),
            (r = r.merge(s)),
            r
              .attr('transform', function(t) {
                var e = n(t.values[1].ratio),
                  a = i(t.values[2].ratio - t.values[0].ratio);
                return 'translate('.concat(a, ', ').concat(e, ')');
              })
              .attr('data-x', function(t) {
                return i(t.values[2].ratio - t.values[0].ratio);
              })
              .attr('data-y', function(t) {
                return n(t.values[1].ratio);
              }),
            r
              .select('circle')
              .attr('stroke-width', 2)
              .attr('data-0', function(t) {
                return +t.values[0].ratio;
              })
              .attr('data-1', function(t) {
                return +t.values[1].ratio;
              })
              .attr('data-2', function(t) {
                return +t.values[2].ratio;
              })
              .transition()
              .duration(this.duration)
              .attr('fill', function(e, a) {
                return a === t.selected ? P.purple : P.blue;
              })
              .attr('r', function(e, a) {
                return a === t.selected ? 9 : 6;
              })
              .attr('fill-opacity', function(a, i) {
                return i === t.selected ? 1 : e;
              })
              .attr('stroke-opacity', function(e, i) {
                return i === t.selected ? 1 : a;
              })
              .attr('stroke', function(e, a) {
                return a === t.selected ? P.light_grey : P.purple;
              });
        }),
        (this.updateAxisLabels = function() {
          this.matrix.select('text.label1').text('% '.concat(this.data.meta.series[0])),
            this.matrix.select('text.label2').text('% '.concat(this.data.meta.series[1])),
            this.matrix.select('text.label3').text('% '.concat(this.data.meta.series[2]));
        }),
        (this.getTick = function(t, e, a, r) {
          var s = I.scaleLinear()
              .domain([0, 1])
              .range([0, this.height]),
            o = a * (Math.PI / 180),
            l = s(r) * Math.cos(o),
            h = s(r) * Math.sin(o),
            c = i.invert(l + i(t)),
            d = n.invert(h + n(e));
          return [{ x: t, y: e }, { x: c, y: d }];
        });
      var s = [
        this.getTick(-0.9, 0.1, 180, 0.02),
        this.getTick(-0.8, 0.2, 180, 0.02),
        this.getTick(-0.7, 0.3, 180, 0.02),
        this.getTick(-0.6, 0.4, 180, 0.02),
        this.getTick(-0.5, 0.5, 180, 0.02),
        this.getTick(-0.4, 0.6, 180, 0.02),
        this.getTick(-0.3, 0.7, 180, 0.02),
        this.getTick(-0.2, 0.8, 180, 0.02),
        this.getTick(-0.1, 0.9, 180, 0.02),
        this.getTick(0.1, 0.9, 300, 0.02),
        this.getTick(0.2, 0.8, 300, 0.02),
        this.getTick(0.3, 0.7, 300, 0.02),
        this.getTick(0.4, 0.6, 300, 0.02),
        this.getTick(0.5, 0.5, 300, 0.02),
        this.getTick(0.6, 0.4, 300, 0.02),
        this.getTick(0.7, 0.3, 300, 0.02),
        this.getTick(0.8, 0.2, 300, 0.02),
        this.getTick(0.9, 0.1, 300, 0.02),
        this.getTick(0.8, 0, 60, 0.02),
        this.getTick(0.6, 0, 60, 0.02),
        this.getTick(0.4, 0, 60, 0.02),
        this.getTick(0.2, 0, 60, 0.02),
        this.getTick(0, 0, 60, 0.02),
        this.getTick(-0.2, 0, 60, 0.02),
        this.getTick(-0.4, 0, 60, 0.02),
        this.getTick(-0.6, 0, 60, 0.02),
        this.getTick(-0.8, 0, 60, 0.02),
      ];
      this.init(t);
    }
    I.selection.prototype.moveToFront = function() {
      return this.each(function() {
        this.parentNode.appendChild(this);
      });
    };
    var gt = pt;
    function ft(t) {
      q.apply(this, arguments),
        (this.padding = { top: 90, left: 240, right: 20, bottom: 58 }),
        (this.x = I.scaleLinear()),
        this.bars,
        this.legendBox,
        (this.colors = I.scaleOrdinal()
          .domain([0, 1, 2, 3])
          .range(['#C57066', '#834B44', '#838296', '#4F4E6A'])),
        (this.render = function(t) {
          this.commonRender(t) &&
            ((this.data.data = t.data.map(function(t) {
              return (
                (t.values = t.values.map(function(t, e) {
                  return t < 0 ? t : e < 2 ? -1 * t : t;
                })),
                t
              );
            })),
            this.svg
              .transition()
              .duration(this.duration)
              .attr('height', this.padding.top + this.height + this.padding.bottom + this.sourceHeight)
              .attr('width', this.width + this.padding.left + this.padding.right),
            this.drawRows(),
            this.drawLegend(),
            this.drawSource('Statistisk sentralbyrå (test)'),
            this.canvas
              .select('line.zero')
              .attr('y1', 0)
              .attr('y2', this.height)
              .transition()
              .duration(this.duration)
              .attr('x1', this.x(0))
              .attr('x2', this.x(0)),
            this.canvas.select('text.label-min').attr('x', this.x(0) - 15),
            this.canvas.select('text.label-max').attr('x', this.x(0) + 15));
        }),
        (this.created = function() {
          (this.legendBox = this.svg.append('g').attr('class', 'legend')),
            this.canvas
              .append('text')
              .attr('class', 'label-min')
              .attr('font-size', 13)
              .attr('y', -40)
              .attr('text-anchor', 'end')
              .text('Trangbodde husstander'),
            this.canvas
              .append('text')
              .attr('class', 'label-max')
              .attr('font-size', 13)
              .attr('y', -40)
              .attr('text-anchor', 'start')
              .text('Ikke trangbodde husstander'),
            (this.bars = this.canvas.append('g').attr('class', 'bars')),
            this.canvas
              .append('line')
              .attr('class', 'zero')
              .attr('stroke-width', 1.5)
              .attr('stroke', 'black');
        }),
        (this.initRowElements = function(t) {
          t
            .append('rect')
            .attr('class', 'rowFill')
            .attr('fill', P.purple)
            .attr('height', this.rowHeight)
            .attr('x', -this.padding.left)
            .attr('width', this.width + this.padding.left),
            t
              .append('rect')
              .attr('class', 'divider')
              .attr('fill', P.purple)
              .attr('x', -this.padding.left)
              .attr('width', this.width + this.padding.left)
              .attr('height', 1)
              .attr('y', this.rowHeight),
            t
              .append('text')
              .attr('class', 'geography')
              .attr('fill', P.purple)
              .attr('y', this.rowHeight / 2 + 6)
              .attr('x', 10 - this.padding.left);
        }),
        (this.drawRows = function() {
          var t = this,
            e = this.canvas.selectAll('g.row').data(this.data.data),
            a = e
              .enter()
              .append('g')
              .attr('class', 'row');
          e.exit().remove(),
            (e = e.merge(a)),
            this.initRowElements(a),
            e.select('text.geography').attr('font-weight', function(t) {
              return t.avgRow || t.totalRow ? 700 : 400;
            }),
            e
              .select('rect.rowFill')
              .transition()
              .duration(this.duration)
              .attr('width', this.padding.left + this.width + this.padding.right)
              .attr('fill-opacity', function(t) {
                return t.avgRow || t.totalRow ? 0.05 : 0;
              }),
            e
              .select('rect.divider')
              .transition()
              .duration(this.duration)
              .attr('width', this.padding.left + this.width + this.padding.right)
              .attr('fill-opacity', function(t) {
                return t.avgRow || t.totalRow ? 0.5 : 0.2;
              }),
            e.attr('transform', function(e, a) {
              return 'translate(0, '.concat(a * t.rowHeight, ')');
            }),
            e.select('text.geography').text(function(e) {
              return X.truncate(e.geography, t.padding.left);
            });
          var i = I.stack()
              .keys([1, 0, 2, 3])
              .offset(I.stackOffsetDiverging)(
              this.data.data.map(function(t) {
                return t.values;
              })
            ),
            n =
              1.1 *
              I.min(
                i.map(function(t) {
                  return I.min(
                    t.map(function(t) {
                      return t[0];
                    })
                  );
                })
              ),
            r =
              1.1 *
              I.max(
                i.map(function(t) {
                  return I.max(
                    t.map(function(t) {
                      return t[1];
                    })
                  );
                })
              );
          this.x.domain([n, r]).range([0, this.width]),
            this.xAxis.call(
              I.axisTop(this.x)
                .ticks(this.width / 60)
                .tickFormat(function(t) {
                  return 100 * Math.abs(t) + '%';
                })
            );
          var s = this.bars.selectAll('g.series').data(i),
            o = s
              .enter()
              .append('g')
              .attr('class', 'series');
          s.exit().remove(),
            (s = s.merge(o)),
            s.attr('fill', function(e, a) {
              return t.colors(a);
            });
          var l = s.selectAll('rect').data(function(t) {
              return t;
            }),
            h = l.enter().append('rect');
          l.exit().remove(),
            (l = l.merge(h)),
            l
              .attr('y', function(e, a) {
                return a * t.rowHeight + (t.rowHeight - t.barHeight) / 2;
              })
              .attr('height', this.barHeight)
              .transition()
              .duration(this.duration)
              .attr('x', function(e) {
                return t.x(e[0]);
              })
              .attr('width', function(e) {
                return t.x(e[1]) - t.x(e[0]);
              });
        }),
        (this.drawLegend = function() {
          var t = this;
          this.legendBox.attr(
            'transform',
            'translate(0, '.concat(this.height + this.padding.top + this.padding.bottom / 2 - 8, ')')
          );
          var e = this.legendBox.selectAll('g.group').data(this.data.meta.series),
            a = e
              .enter()
              .append('g')
              .attr('class', 'group');
          e.exit().remove(),
            (e = e.merge(a)),
            a
              .append('rect')
              .attr('height', 16)
              .attr('width', 16)
              .attr('rx', 3)
              .attr('fill', function(e, a) {
                return 0 === a ? t.colors(1) : 1 === a ? t.colors(0) : t.colors(a);
              }),
            a.append('text').attr('y', 8),
            e
              .select('text')
              .text(function(t) {
                return t.heading;
              })
              .attr('y', 12)
              .attr('x', 20)
              .attr('font-size', 12),
            e.attr('transform', function(e, a) {
              return 'translate('.concat(a * ((t.width + t.padding.left + t.padding.right) / 4), ', 0)');
            });
        }),
        this.init(t);
    }
    var mt = ft,
      vt = {
        data: function() {
          return {
            svg: !1,
            data: null,
            currentTemplate: !1,
            heading: 'loading ...',
            showDropdown: !1,
            dropDownList: M,
          };
        },
        watch: {
          settings: function() {
            this.draw();
          },
        },
        mounted: function() {
          this.draw();
        },
        methods: {
          draw: function() {
            var t = this,
              e = performance.now();
            if (this.currentTemplate !== this.settings.template)
              switch (((this.showDropdown = 'd' === this.settings.template), this.settings.template)) {
                case 'a':
                  this.svg = new V(this.$refs['svg']);
                  break;
                case 'b':
                  this.svg = new Q(this.$refs['svg']);
                  break;
                case 'c':
                  this.svg = new tt(this.$refs['svg']);
                  break;
                case 'd':
                  this.svg = new at(this.$refs['svg']);
                  break;
                case 'e':
                  this.svg = new nt(this.$refs['svg']);
                  break;
                case 'f':
                  this.svg = new st(this.$refs['svg']);
                  break;
                case 'g':
                  this.svg = new lt(this.$refs['svg']);
                  break;
                case 'h':
                  this.svg = new ct(this.$refs['svg']);
                  break;
                case 'i':
                  this.svg = new gt(this.$refs['svg']);
                  break;
                case 'j':
                  this.svg = new mt(this.$refs['svg']);
                  break;
                default:
                  break;
              }
            F['json'](this.settings.url).then(function(e) {
              t.data = e;
              var a = performance.now();
              t.svg.render(t.data, { method: t.settings.method, range: '[0, 50]' });
              var i = performance.now(),
                n = i - a;
              n > 100 &&
                console.warn(
                  'SLOW RENDER:',
                  'Initial rendering of template',
                  t.settings.template,
                  'for',
                  t.settings.id,
                  'took',
                  Math.round(n),
                  'ms'
                ),
                (t.currentTemplate = t.settings.template);
            });
            var a = performance.now(),
              i = a - e;
            i > 300 && console.warn('SLOW LOAD:', 'Fetching data', this.settings.id, 'took', Math.round(i), 'ms');
          },
        },
        props: { settings: { type: Object, required: !0 } },
      },
      bt = vt,
      xt = (a('8115'), Object(m['a'])(bt, z, O, !1, null, '0f0599a0', null));
    xt.options.__file = 'Graph.vue';
    var yt = xt.exports,
      wt = {
        folkemengde: {
          name: 'folkemengde',
          fremskriving: [
            {
              size: 'large',
              tabs: [
                {
                  active: !1,
                  label: 'Historisk',
                  id: 'folkemengde_utvikling_historisk',
                  template: 'h',
                  url: ''.concat(k(), '/mockDataH.json'),
                },
                {
                  active: !1,
                  label: 'Historisk (prosent)',
                  id: 'folkemengde_utvikling_historisk-prosent',
                  template: 'b',
                  url: ''.concat(k(), '/mockDataB.json'),
                },
              ],
            },
          ],
          utvikling: [
            {
              size: 'large',
              tabs: [
                {
                  active: !1,
                  label: 'Historisk',
                  id: 'folkemengde_utvikling_historisk',
                  template: 'b',
                  url: ''.concat(k(), '/mockDataB.json'),
                },
                {
                  active: !1,
                  label: 'Historisk (prosent)',
                  id: 'folkemengde_utvikling_historisk-prosent',
                  template: 'b',
                  url: ''.concat(k(), '/mockDataB.json'),
                },
              ],
            },
          ],
          nokkeltall: [
            {
              size: 'large',
              tabs: [
                {
                  active: !1,
                  label: 'Nøkkeltall',
                  id: 'folkemengde_nokkeltall',
                  template: 'g',
                  url: ''.concat(k(), '/mockDataG.json'),
                },
              ],
            },
          ],
        },
        alder: {
          name: 'alder',
          aldersgrupper: [
            {
              size: 'large',
              tabs: [
                {
                  active: !1,
                  label: 'Antall',
                  id: 'alder_segment_antall',
                  template: 'd',
                  url: ''.concat(k(), '/mockDataD2.json'),
                  method: 'value',
                },
                {
                  active: !1,
                  label: 'Andel',
                  id: 'alder_segment_andel',
                  template: 'd',
                  url: ''.concat(k(), '/mockDataD2.json'),
                  method: 'ratio',
                },
              ],
            },
          ],
          populasjonspyramide: [
            {
              size: 'large',
              tabs: [
                {
                  active: !1,
                  label: 'Status',
                  id: 'alder_distribusjon_status',
                  template: 'e',
                  url: ''.concat(k(), '/mockDataD2.json'),
                },
                {
                  active: !1,
                  label: 'Historisk',
                  id: 'alder_distribusjon_historisk',
                  template: 'b',
                  url: ''.concat(k(), '/mockDataB.json'),
                },
              ],
            },
          ],
          median: [
            {
              size: 'large',
              tabs: [
                {
                  active: !1,
                  label: 'Status',
                  id: 'alder_medianalder_status',
                  template: 'f',
                  url: ''.concat(k(), '/mockDataD2.json'),
                },
              ],
            },
          ],
        },
        innvandring: {
          name: 'innvandring',
          befolkning: [
            {
              size: 'large',
              tabs: [
                {
                  active: !1,
                  label: 'Status',
                  id: 'innvandring_befolkning_status',
                  template: 'a',
                  url: ''.concat(k(), '/mockDataA2.json'),
                },
                {
                  active: !1,
                  label: 'Historisk',
                  id: 'innvandring_befolkning_historisk',
                  template: 'c',
                  url: ''.concat(k(), '/mockDataC.json'),
                },
              ],
            },
          ],
          under16: [
            {
              size: 'small',
              tabs: [
                {
                  active: !1,
                  label: 'Status',
                  id: 'innvandring_under16-totalt_status',
                  template: 'a',
                  url: ''.concat(k(), '/mockDataAinnvandrer1.json'),
                },
                {
                  active: !1,
                  label: 'Historisk',
                  id: 'innvandring_under16-totalt_historisk',
                  template: 'b',
                  url: ''.concat(k(), '/mockDataB.json'),
                },
              ],
            },
            {
              size: 'small',
              tabs: [
                {
                  active: !1,
                  label: 'Status',
                  id: 'innvandring_under16-en-innvandrerforelder_status',
                  template: 'a',
                  url: ''.concat(k(), '/mockDataAinnvandrer2.json'),
                },
                {
                  active: !1,
                  label: 'Historisk',
                  id: 'innvandring_under16-en-innvandrerforelder_historisk',
                  template: 'b',
                  url: ''.concat(k(), '/mockDataB.json'),
                },
              ],
            },
            {
              size: 'small',
              tabs: [
                {
                  active: !1,
                  label: 'Status',
                  id: 'innvandring_under16-to-innvandrerforeldre_status',
                  template: 'a',
                  url: ''.concat(k(), '/mockDataAinnvandrer3.json'),
                },
                {
                  active: !1,
                  label: 'Historisk',
                  id: 'innvandring_under16-to-innvandrerforeldre_historisk',
                  template: 'b',
                  url: ''.concat(k(), '/mockDataB.json'),
                },
              ],
            },
          ],
        },
        eierform: {
          name: 'eierform',
          eierform: [
            {
              size: 'large',
              tabs: [
                {
                  active: !1,
                  label: 'Status',
                  id: 'eierform_status',
                  template: 'a',
                  url: ''.concat(k(), '/mockDataAinnvandrer3.json'),
                },
                {
                  active: !1,
                  label: 'Matrise',
                  id: 'eierform_matrise',
                  template: 'i',
                  url: ''.concat(k(), '/mockDataI.json'),
                },
                {
                  active: !1,
                  label: 'Historisk',
                  id: 'eierform_historisk',
                  template: 'b',
                  url: ''.concat(k(), '/mockDataB.json'),
                },
              ],
            },
          ],
        },
        boligpriser: {
          name: 'boligpriser',
          boligpriser: [
            {
              size: 'large',
              tabs: [
                {
                  active: !1,
                  label: 'Status',
                  id: 'boligpriser_status',
                  template: 'a',
                  url: ''.concat(k(), '/mockDataAinnvandrer3.json'),
                },
                {
                  active: !1,
                  label: 'Historisk',
                  id: 'boligpriser_historisk',
                  template: 'b',
                  url: ''.concat(k(), '/mockDataB.json'),
                },
              ],
            },
          ],
        },
        trangboddhet: {
          name: 'trangboddhet',
          helhet: [
            {
              size: 'large',
              tabs: [
                {
                  active: !1,
                  label: 'Status',
                  id: 'trangboddhet_alle_status',
                  template: 'j',
                  url: ''.concat(k(), '/mockDataJ.json'),
                  method: 'ratio',
                },
                {
                  active: !1,
                  label: 'Historisk',
                  id: 'trangboddhet_alle_historisk',
                  template: 'b',
                  url: ''.concat(k(), '/mockDataB.json'),
                },
              ],
            },
          ],
          spesifikk: [
            {
              size: 'small',
              tabs: [
                {
                  active: !1,
                  label: 'Status',
                  id: 'trangboddhet_under0.5_status',
                  template: 'a',
                  url: ''.concat(k(), '/mockDataAinnvandrer3.json'),
                },
                {
                  active: !1,
                  label: 'Historisk',
                  id: 'trangboddhet_under0.5_historisk',
                  template: 'b',
                  url: ''.concat(k(), '/mockDataB.json'),
                },
              ],
            },
            {
              size: 'small',
              tabs: [
                {
                  active: !1,
                  label: 'Status',
                  id: 'trangboddhet_0.5-0.9_status',
                  template: 'a',
                  url: ''.concat(k(), '/mockDataAinnvandrer3.json'),
                },
                {
                  active: !1,
                  label: 'Historisk',
                  id: 'trangboddhet_0.5-0.9_historisk',
                  template: 'b',
                  url: ''.concat(k(), '/mockDataB.json'),
                },
              ],
            },
            {
              size: 'small',
              tabs: [
                {
                  active: !1,
                  label: 'Status',
                  id: 'trangboddhet_1.0-1.9_status',
                  template: 'a',
                  url: ''.concat(k(), '/mockDataAinnvandrer3.json'),
                },
                {
                  active: !1,
                  label: 'Historisk',
                  id: 'trangboddhet_1.0-1.9_historisk',
                  template: 'b',
                  url: ''.concat(k(), '/mockDataB.json'),
                },
              ],
            },
            {
              size: 'small',
              tabs: [
                {
                  active: !1,
                  label: 'Status',
                  id: 'trangboddhet_over2_status',
                  template: 'a',
                  url: ''.concat(k(), '/mockDataAinnvandrer3.json'),
                },
                {
                  active: !1,
                  label: 'Historisk',
                  id: 'trangboddhet_over2_historisk',
                  template: 'b',
                  url: ''.concat(k(), '/mockDataB.json'),
                },
              ],
            },
          ],
        },
        kommunale_boliger: {
          name: 'kommunale_boliger',
          blokk: [
            {
              size: 'large',
              tabs: [
                {
                  active: !1,
                  label: 'Status',
                  id: 'blokkleilighet_status',
                  template: 'a',
                  url: ''.concat(k(), '/mockDataAinnvandrer3.json'),
                },
                {
                  active: !1,
                  label: 'Historisk',
                  id: 'blokkleilighet_historisk',
                  template: 'b',
                  url: ''.concat(k(), '/mockDataB.json'),
                },
              ],
            },
          ],
        },
        flytting: {
          name: 'flytting',
          hyppighet: [
            {
              size: 'large',
              tabs: [
                {
                  active: !1,
                  label: 'Status',
                  id: 'flyttehyppighet_status',
                  template: 'a',
                  url: ''.concat(k(), '/mockDataAinnvandrer3.json'),
                },
                {
                  active: !1,
                  label: 'Historisk',
                  id: 'flyttehyppighet_historisk',
                  template: 'b',
                  url: ''.concat(k(), '/mockDataB.json'),
                },
              ],
            },
          ],
        },
        bygningstyper: {
          name: 'bygningstyper',
          totalt: [
            {
              size: 'large',
              tabs: [
                {
                  active: !1,
                  label: 'Status',
                  id: 'eierform_totalt_status',
                  template: 'a',
                  url: ''.concat(k(), '/mockDataAinnvandrer3.json'),
                },
                {
                  active: !1,
                  label: 'Historisk',
                  id: 'eierform_totalt_historisk',
                  template: 'b',
                  url: ''.concat(k(), '/mockDataB.json'),
                },
                {
                  active: !1,
                  label: 'Matrise',
                  id: 'eierform_totalt_matrise',
                  template: 'i',
                  url: ''.concat(k(), '/mockDataI.json'),
                },
              ],
            },
          ],
          spesifikk: [
            {
              size: 'small',
              tabs: [
                {
                  active: !1,
                  label: 'Andel',
                  id: 'eierform_blokk_andel',
                  template: 'a',
                  url: ''.concat(k(), '/mockDataAinnvandrer3.json'),
                },
                {
                  active: !1,
                  label: 'Antall',
                  id: 'eierform_blokk_antall',
                  template: 'a',
                  url: ''.concat(k(), '/mockDataAinnvandrer3.json'),
                },
              ],
            },
            {
              size: 'small',
              tabs: [
                {
                  active: !1,
                  label: 'Andel',
                  id: 'eierform_rekkehus_andel',
                  template: 'a',
                  url: ''.concat(k(), '/mockDataAinnvandrer3.json'),
                },
                {
                  active: !1,
                  label: 'Antall',
                  id: 'eierform_rekkehus_antall',
                  template: 'a',
                  url: ''.concat(k(), '/mockDataAinnvandrer3.json'),
                },
              ],
            },
            {
              size: 'small',
              tabs: [
                {
                  active: !1,
                  label: 'Andel',
                  id: 'eierform_enebolig_andel',
                  template: 'a',
                  url: ''.concat(k(), '/mockDataAinnvandrer3.json'),
                },
                {
                  active: !1,
                  label: 'Antall',
                  id: 'eierform_enebolig_antall',
                  template: 'a',
                  url: ''.concat(k(), '/mockDataAinnvandrer3.json'),
                },
              ],
            },
          ],
        },
        husholdninger: {
          name: 'husholdninger',
          totalt: [
            {
              size: 'large',
              tabs: [
                {
                  active: !1,
                  label: 'Status',
                  id: 'husholdning_totalt_status',
                  template: 'a',
                  url: ''.concat(k(), '/mockDataA.json'),
                },
                {
                  active: !1,
                  label: 'Historisk',
                  id: 'husholdning_totalt_historisk',
                  template: 'c',
                  url: ''.concat(k(), '/mockDataC.json'),
                },
                {
                  active: !1,
                  label: 'Matrise',
                  id: 'husholdning_totalt_matrise',
                  template: 'i',
                  url: ''.concat(k(), '/mockDataI.json'),
                },
              ],
            },
          ],
          spesifikk: [
            {
              size: 'small',
              tabs: [
                {
                  active: !1,
                  label: 'Andel',
                  id: 'husholdning_1-barn_andel',
                  template: 'a',
                  url: ''.concat(k(), '/mockDataAinnvandrer3.json'),
                },
                {
                  active: !1,
                  label: 'Antall',
                  id: 'husholdning_1-barn_antall',
                  template: 'a',
                  url: ''.concat(k(), '/mockDataAinnvandrer3.json'),
                },
              ],
            },
            {
              size: 'small',
              tabs: [
                {
                  active: !1,
                  label: 'Andel',
                  id: 'husholdning_2-barn_andel',
                  template: 'a',
                  url: ''.concat(k(), '/mockDataAinnvandrer3.json'),
                },
                {
                  active: !1,
                  label: 'Antall',
                  id: 'husholdning_2-barn_antall',
                  template: 'a',
                  url: ''.concat(k(), '/mockDataAinnvandrer3.json'),
                },
              ],
            },
            {
              size: 'small',
              tabs: [
                {
                  active: !1,
                  label: 'Andel',
                  id: 'husholdning_3-barn_andel',
                  template: 'a',
                  url: ''.concat(k(), '/mockDataAinnvandrer3.json'),
                },
                {
                  active: !1,
                  label: 'Antall',
                  id: 'husholdning_3-barn_antall',
                  template: 'a',
                  url: ''.concat(k(), '/mockDataAinnvandrer3.json'),
                },
              ],
            },
          ],
        },
        levekaar: {
          name: 'levekaar',
          spesifikk: [
            {
              size: 'small',
              tabs: [
                {
                  active: !1,
                  label: 'Andel',
                  id: 'levekar_funksjonsevne_andel',
                  template: 'a',
                  url: ''.concat(k(), '/mockDataAinnvandrer3.json'),
                },
                {
                  active: !1,
                  label: 'Historisk',
                  id: 'levekar_funksjonsevne_historisk',
                  template: 'b',
                  url: ''.concat(k(), '/mockDataB.json'),
                },
              ],
            },
            {
              size: 'small',
              tabs: [
                {
                  active: !1,
                  label: 'Andel',
                  id: 'levekar_lav-utdanning_andel',
                  template: 'a',
                  url: ''.concat(k(), '/mockDataAinnvandrer3.json'),
                },
                {
                  active: !1,
                  label: 'Historisk',
                  id: 'levekar_lav-utdanning_historisk',
                  template: 'b',
                  url: ''.concat(k(), '/mockDataB.json'),
                },
              ],
            },
            {
              size: 'small',
              tabs: [
                {
                  active: !1,
                  label: 'Andel',
                  id: 'levekar_fattige_andel',
                  template: 'a',
                  url: ''.concat(k(), '/mockDataAinnvandrer3.json'),
                },
                {
                  active: !1,
                  label: 'Historisk',
                  id: 'levekar_fattige_historisk',
                  template: 'b',
                  url: ''.concat(k(), '/mockDataB.json'),
                },
              ],
            },
            {
              size: 'small',
              tabs: [
                {
                  active: !1,
                  label: 'Andel',
                  id: 'levekar_ikke-sysselsatte_andel',
                  template: 'a',
                  url: ''.concat(k(), '/mockDataAinnvandrer3.json'),
                },
                {
                  active: !1,
                  label: 'Historisk',
                  id: 'levekar_ikke-sysselsatte_historisk',
                  template: 'b',
                  url: ''.concat(k(), '/mockDataB.json'),
                },
              ],
            },
            {
              size: 'small',
              tabs: [
                {
                  active: !1,
                  label: 'Andel',
                  id: 'levekar_vgs_andel',
                  template: 'a',
                  url: ''.concat(k(), '/mockDataAinnvandrer3.json'),
                },
                {
                  active: !1,
                  label: 'Historisk',
                  id: 'levekar_vgs_historisk',
                  template: 'b',
                  url: ''.concat(k(), '/mockDataB.json'),
                },
              ],
            },
            {
              size: 'small',
              tabs: [
                {
                  active: !1,
                  label: 'Andel',
                  id: 'levekar_dodsrate_andel',
                  template: 'a',
                  url: ''.concat(k(), '/mockDataAinnvandrer3.json'),
                },
                {
                  active: !1,
                  label: 'Historisk',
                  id: 'levekar_dodsrate_historisk',
                  template: 'b',
                  url: ''.concat(k(), '/mockDataB.json'),
                },
              ],
            },
            {
              size: 'small',
              tabs: [
                {
                  active: !1,
                  label: 'Andel',
                  id: 'levekar_trangbodde_andel',
                  template: 'a',
                  url: ''.concat(k(), '/mockDataAinnvandrer3.json'),
                },
                {
                  active: !1,
                  label: 'Historisk',
                  id: 'levekar_trangbodde_historisk',
                  template: 'b',
                  url: ''.concat(k(), '/mockDataB.json'),
                },
              ],
            },
            {
              size: 'small',
              tabs: [
                {
                  active: !1,
                  label: 'Andel',
                  id: 'levekar_innvandrere_andel',
                  template: 'a',
                  url: ''.concat(k(), '/mockDataAinnvandrer3.json'),
                },
                {
                  active: !1,
                  label: 'Historisk',
                  id: 'levekar_innvandrere_historisk',
                  template: 'b',
                  url: ''.concat(k(), '/mockDataB.json'),
                },
              ],
            },
          ],
        },
      },
      kt = wt,
      _t = function() {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a('h1', [t._v('Forside')]);
      },
      Ct = [],
      At = { name: 'Home' },
      Dt = At,
      jt = Object(m['a'])(Dt, _t, Ct, !1, null, null, null);
    jt.options.__file = 'Home.vue';
    var Bt = jt.exports,
      Ht = function() {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a('div', { staticClass: 'main-container' }, [
          a(
            'div',
            { staticClass: 'main-container__cards' },
            t._l(t.items, function(e) {
              return a('card-image', {
                key: e.value,
                attrs: {
                  id: e.value,
                  kategori: e.options.kategori,
                  tema: e.options.tema,
                  'bg-image': e.options.bgImage,
                  'bg-color': e.options.bgColor,
                  'txt-color': e.options.txtColor,
                  'click-bydel': t.onClickCard,
                },
              });
            }),
            1
          ),
          t._m(0),
        ]);
      },
      Lt = [
        function() {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a('div', { staticClass: 'main-container__map' }, [a('h3', [t._v('Bydelskart')])]);
        },
      ],
      Rt = function() {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a('div', { staticClass: 'main-container__item' }, [
          a(
            'div',
            {
              staticClass: 'oslo__card-image',
              style: { backgroundImage: 'url(' + t.dataBgImage + ')', backgroundColor: t.dataBgColor },
              on: {
                click: function(e) {
                  t.clickBydel(t.id);
                },
              },
            },
            [
              a('span', { staticClass: 'oslo__category', style: { backgroundColor: t.dataTxtColor } }, [
                t._v('\n      ' + t._s(t.dataKategori) + '\n    '),
              ]),
              a('span', { staticClass: 'oslo__tema', domProps: { innerHTML: t._s(t.dataTema) } }),
              a('span', { staticClass: 'oslo__see-more-text' }, [t._v('Se mer ----------\x3e')]),
            ]
          ),
        ]);
      },
      St = [],
      Tt = {
        name: 'CardImage',
        props: {
          kategori: { type: String, required: !0 },
          tema: { type: String, required: !0 },
          bgImage: { type: String, required: !0 },
          bgColor: { type: String, required: !0 },
          txtColor: { type: String, required: !0 },
          clickBydel: { type: Function, required: !0 },
          id: { type: String, required: !0 },
        },
        data: function() {
          return {
            dataKategori: this.kategori,
            dataTema: this.tema,
            dataBgImage: this.bgImage,
            dataBgColor: this.bgColor,
            dataTxtColor: this.txtColor,
            dataId: this.id,
          };
        },
      },
      Et = Tt,
      $t = (a('e539'), Object(m['a'])(Et, Rt, St, !1, null, '2b2d6098', null));
    $t.options.__file = 'CardImage.vue';
    var zt = $t.exports,
      Ot = {
        name: 'Bydel',
        components: { CardImage: zt },
        data: function() {
          return { items: C };
        },
        methods: {
          onClickCard: function(t) {
            this.$router.push({ path: ''.concat(this.$route.path, '/').concat(t) });
          },
        },
      },
      Ft = Ot,
      Mt = Object(m['a'])(Ft, Ht, Lt, !1, null, null, null);
    Mt.options.__file = 'Bydel.vue';
    var It = Mt.exports,
      Gt = function() {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a('div', { staticClass: 'main-container' }, [
          a(
            'div',
            { staticClass: 'main-container__cards' },
            [
              a('h2', { staticClass: 'section-heading' }, [t._v('Utvalgte aldersgrupper')]),
              t._l(t.settings.aldersgrupper, function(t, e) {
                return a('graph-card', { key: 'alder-grupper-' + e, attrs: { settings: t } });
              }),
              a('h2', { staticClass: 'section-heading' }, [t._v('Medianalder i Bydel BYDELSNAVN')]),
              t._l(t.settings.median, function(t, e) {
                return a('graph-card', { key: 'alder-median-' + e, attrs: { settings: t } });
              }),
              a('h2', { staticClass: 'section-heading' }, [t._v('Populasjonspyramide')]),
              t._l(t.settings.populasjonspyramide, function(t, e) {
                return a('graph-card', { key: 'alder-pyramide-' + e, attrs: { settings: t } });
              }),
            ],
            2
          ),
          t._m(0),
        ]);
      },
      Pt = [
        function() {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a('div', { staticClass: 'main-container__map' }, [a('h3', [t._v('Kart')])]);
        },
      ],
      Nt = function() {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a('div', { staticClass: 'card-container', class: { large: 'large' === t.settings.size } }, [
          a(
            'div',
            { staticClass: 'card' },
            [
              a('div', { staticClass: 'tabs' }, [
                a(
                  'div',
                  t._l(t.settings.tabs, function(e, i) {
                    return a(
                      'button',
                      {
                        key: i,
                        staticClass: 'tabs__button',
                        class: { active: t.active === i },
                        attrs: { 'aria-label': 'tab-button' },
                        on: {
                          click: function(e) {
                            t.activeTab(i);
                          },
                        },
                      },
                      [t._v(t._s(e.label))]
                    );
                  }),
                  0
                ),
                a(
                  'div',
                  {
                    directives: [
                      {
                        name: 'click-outside',
                        rawName: 'v-click-outside',
                        value: t.closeMenu,
                        expression: 'closeMenu',
                      },
                    ],
                    staticClass: 'context-menu',
                    on: {
                      keydown: function(e) {
                        if (!('button' in e) && t._k(e.keyCode, 'escape', void 0, e.key, void 0)) return null;
                        t.closeMenu();
                      },
                    },
                  },
                  [
                    a(
                      'button',
                      {
                        staticClass: 'context-menu__button',
                        attrs: { 'aria-label': 'context-menu-button' },
                        on: {
                          click: function(e) {
                            t.showDropdown = !t.showDropdown;
                          },
                        },
                      },
                      [
                        a('i', { staticClass: 'material-icons context-menu__button-icon' }, [
                          t._v(t._s(t.showDropdown ? 'close' : 'menu')),
                        ]),
                      ]
                    ),
                    t.showDropdown
                      ? a('div', { staticClass: 'context-menu__dropdown' }, [
                          a(
                            'a',
                            {
                              staticClass: 'context-menu__dropdown-item',
                              attrs: { role: 'button', tabIndex: '0', 'aria-label': 'lagre graf som png' },
                              on: {
                                click: function(e) {
                                  t.savePng(t.settings.tabs[t.active].id);
                                },
                              },
                            },
                            [
                              a('i', { staticClass: 'material-icons context-menu__dropdown-item-icon' }, [
                                t._v('photo_size_select_actual'),
                              ]),
                              a('span', [t._v('Last ned som PNG')]),
                            ]
                          ),
                        ])
                      : t._e(),
                  ]
                ),
              ]),
              void 0 !== t.settings.tabs[t.active]
                ? a('graph', { ref: 'graph', attrs: { settings: t.settings.tabs[t.active] } })
                : t._e(),
            ],
            1
          ),
        ]);
      },
      Wt = [],
      Kt = a('bc05'),
      qt = {
        name: 'GraphCard',
        components: { Graph: yt },
        data: function() {
          return { active: 0, showDropdown: !1 };
        },
        props: { settings: { type: Object, required: !0 } },
        methods: {
          closeMenu: function() {
            this.showDropdown && (this.showDropdown = !1);
          },
          activeTab: function(t) {
            this.active = t;
          },
          savePng: function(t) {
            var e = this.$refs.graph.$refs.svg,
              a = ''.concat(this.$route.params.bydel, '_').concat(t, '.png');
            Object(Kt['saveSvgAsPng'])(e, a, {
              backgroundColor: 'white',
              encoderOptions: 1,
              width: e.width.baseVal.value + 40,
              height: e.height.baseVal.value + 40,
              top: -20,
              left: -20,
            });
          },
        },
      },
      Ut = qt,
      Xt = (a('c6bb'), Object(m['a'])(Ut, Nt, Wt, !1, null, '31fc81be', null));
    Xt.options.__file = 'GraphCard.vue';
    var Yt = Xt.exports,
      Vt = { name: 'Alder', components: { GraphCard: Yt }, props: { settings: { type: Object, required: !0 } } },
      Jt = Vt,
      Qt = (a('43ed'), Object(m['a'])(Jt, Gt, Pt, !1, null, '583aeae5', null));
    Qt.options.__file = 'Alder.vue';
    var Zt = Qt.exports,
      te = function() {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a('div', { staticClass: 'main-container' }, [
          a(
            'div',
            { staticClass: 'main-container__cards' },
            [
              a('h2', { staticClass: 'section-heading' }, [t._v('Blokkleilighet')]),
              t._l(t.settings.boligpriser, function(t, e) {
                return a('graph-card', { key: 'boligpriser-' + e, attrs: { settings: t } });
              }),
            ],
            2
          ),
          t._m(0),
        ]);
      },
      ee = [
        function() {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a('div', { staticClass: 'main-container__map' }, [a('h3', [t._v('Kart')])]);
        },
      ],
      ae = { name: 'Boligpriser', components: { GraphCard: Yt }, props: { settings: { type: Object, required: !0 } } },
      ie = ae,
      ne = (a('74ae'), Object(m['a'])(ie, te, ee, !1, null, 'c7f1b1a2', null));
    ne.options.__file = 'Boligpriser.vue';
    var re = ne.exports,
      se = function() {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a('div', { staticClass: 'main-container' }, [
          a(
            'div',
            { staticClass: 'main-container__cards' },
            [
              a('h2', { staticClass: 'section-heading' }, [t._v('Eierform')]),
              t._l(t.settings.totalt, function(t, e) {
                return a('graph-card', { key: 'bygningstyper-totalt-' + e, attrs: { settings: t } });
              }),
              t._l(t.settings.spesifikk, function(t, e) {
                return a('graph-card', { key: 'bygningstyper-spesifikk-' + e, attrs: { settings: t } });
              }),
            ],
            2
          ),
          t._m(0),
        ]);
      },
      oe = [
        function() {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a('div', { staticClass: 'main-container__map' }, [a('h3', [t._v('Kart')])]);
        },
      ],
      le = {
        name: 'Bygningstyper',
        components: { GraphCard: Yt },
        props: { settings: { type: Object, required: !0 } },
      },
      he = le,
      ce = (a('4f46'), Object(m['a'])(he, se, oe, !1, null, '42000a91', null));
    ce.options.__file = 'Bygningstyper.vue';
    var de = ce.exports,
      ue = function() {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a('div', { staticClass: 'main-container' }, [
          a(
            'div',
            { staticClass: 'main-container__cards' },
            [
              a('h2', { staticClass: 'section-heading' }, [t._v('Eierform')]),
              t._l(t.settings.eierform, function(t, e) {
                return a('graph-card', { key: 'eierform-' + e, attrs: { settings: t } });
              }),
            ],
            2
          ),
          t._m(0),
        ]);
      },
      pe = [
        function() {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a('div', { staticClass: 'main-container__map' }, [a('h3', [t._v('Kart')])]);
        },
      ],
      ge = { name: 'Eierform', components: { GraphCard: Yt }, props: { settings: { type: Object, required: !0 } } },
      fe = ge,
      me = (a('5da7'), Object(m['a'])(fe, ue, pe, !1, null, '67aa4db0', null));
    me.options.__file = 'Eierform.vue';
    var ve = me.exports,
      be = function() {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a('div', { staticClass: 'main-container' }, [
          a(
            'div',
            { staticClass: 'main-container__cards' },
            [
              a('h2', { staticClass: 'section-heading' }, [t._v('Flyttehyppighet')]),
              t._l(t.settings.hyppighet, function(t, e) {
                return a('graph-card', { key: 'flytting-' + e, attrs: { settings: t } });
              }),
            ],
            2
          ),
          t._m(0),
        ]);
      },
      xe = [
        function() {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a('div', { staticClass: 'main-container__map' }, [a('h3', [t._v('Kart')])]);
        },
      ],
      ye = { name: 'Flytting', components: { GraphCard: Yt }, props: { settings: { type: Object, required: !0 } } },
      we = ye,
      ke = (a('b178'), Object(m['a'])(we, be, xe, !1, null, 'cb6bbf48', null));
    ke.options.__file = 'Flytting.vue';
    var _e = ke.exports,
      Ce = function() {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a('div', { staticClass: 'main-container' }, [
          a(
            'div',
            { staticClass: 'main-container__cards' },
            [
              a('h2', { staticClass: 'section-heading' }, [t._v('Befolkningsutvikling og fremskriving')]),
              t._l(t.settings.fremskriving, function(t, e) {
                return a('graph-card', { key: 'folkemengde-fremskriving-' + e, attrs: { settings: t } });
              }),
              t._l(t.settings.utvikling, function(t, e) {
                return a('graph-card', { key: 'folkemengde-utvikling-' + e, attrs: { settings: t } });
              }),
              a('h2', { staticClass: 'section-heading' }, [t._v('Nøkkeltall for delbydelene')]),
              t._l(t.settings.nokkeltall, function(t, e) {
                return a('graph-card', { key: 'folkemengde-nokkeltall-' + e, attrs: { settings: t } });
              }),
            ],
            2
          ),
          t._m(0),
        ]);
      },
      Ae = [
        function() {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a('div', { staticClass: 'main-container__map' }, [a('h3', [t._v('Kart')])]);
        },
      ],
      De = { name: 'Folkemengde', components: { GraphCard: Yt }, props: { settings: { type: Object, required: !0 } } },
      je = De,
      Be = (a('f3d2'), Object(m['a'])(je, Ce, Ae, !1, null, 'a89de6ea', null));
    Be.options.__file = 'Folkemengde.vue';
    var He = Be.exports,
      Le = function() {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a('div', { staticClass: 'main-container' }, [
          a(
            'div',
            { staticClass: 'main-container__cards' },
            [
              a('h2', { staticClass: 'section-heading' }, [t._v('Husholdningstype')]),
              t._l(t.settings.totalt, function(t, e) {
                return a('graph-card', { key: 'husholdninger-totalt-' + e, attrs: { settings: t } });
              }),
              t._l(t.settings.spesifikk, function(t, e) {
                return a('graph-card', { key: 'husholdninger-spesifikk-' + e, attrs: { settings: t } });
              }),
            ],
            2
          ),
          t._m(0),
        ]);
      },
      Re = [
        function() {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a('div', { staticClass: 'main-container__map' }, [a('h3', [t._v('Kart')])]);
        },
      ],
      Se = {
        name: 'Husholdninger',
        components: { GraphCard: Yt },
        props: { settings: { type: Object, required: !0 } },
      },
      Te = Se,
      Ee = (a('5464'), Object(m['a'])(Te, Le, Re, !1, null, 'dbf07ea0', null));
    Ee.options.__file = 'Husholdninger.vue';
    var $e = Ee.exports,
      ze = function() {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a('div', { staticClass: 'main-container' }, [
          a(
            'div',
            { staticClass: 'main-container__cards' },
            [
              a('h2', { staticClass: 'section-heading' }, [t._v('Innvandrerbefolkningen i bydelene')]),
              t._l(t.settings.befolkning, function(t, e) {
                return a('graph-card', { key: 'innvandrer-befolkning-' + e, attrs: { settings: t } });
              }),
              a('h2', { staticClass: 'section-heading' }, [
                t._v('Befolkning under 16 år fordelt på innvandrerbakgrunn'),
              ]),
              t._l(t.settings.under16, function(t, e) {
                return a('graph-card', { key: 'innvandrer-under16-' + e, attrs: { settings: t } });
              }),
            ],
            2
          ),
          t._m(0),
        ]);
      },
      Oe = [
        function() {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a('div', { staticClass: 'main-container__map' }, [a('h3', [t._v('Kart')])]);
        },
      ],
      Fe = {
        name: 'Innvandrerbefolkningen',
        components: { GraphCard: Yt },
        props: { settings: { type: Object, required: !0 } },
      },
      Me = Fe,
      Ie = (a('9aa1'), Object(m['a'])(Me, ze, Oe, !1, null, '927c500a', null));
    Ie.options.__file = 'Innvandrerbefolkningen.vue';
    var Ge = Ie.exports,
      Pe = function() {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a('div', { staticClass: 'main-container' }, [
          a(
            'div',
            { staticClass: 'main-container__cards' },
            [
              a('h2', { staticClass: 'section-heading' }, [t._v('Blokkleilighet')]),
              t._l(t.settings.blokk, function(t, e) {
                return a('graph-card', { key: 'kommunale-boliger-' + e, attrs: { settings: t } });
              }),
            ],
            2
          ),
          t._m(0),
        ]);
      },
      Ne = [
        function() {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a('div', { staticClass: 'main-container__map' }, [a('h3', [t._v('Kart')])]);
        },
      ],
      We = {
        name: 'Kommunaleboliger',
        components: { GraphCard: Yt },
        props: { settings: { type: Object, required: !0 } },
      },
      Ke = We,
      qe = (a('60ce'), Object(m['a'])(Ke, Pe, Ne, !1, null, '0a609640', null));
    qe.options.__file = 'Kommunaleboliger.vue';
    var Ue = qe.exports,
      Xe = function() {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a('div', { staticClass: 'main-container' }, [
          a(
            'div',
            { staticClass: 'main-container__cards' },
            t._l(t.settings.spesifikk, function(t, e) {
              return a('graph-card', { key: 'levekaar-' + e, attrs: { settings: t } });
            }),
            1
          ),
          t._m(0),
        ]);
      },
      Ye = [
        function() {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a('div', { staticClass: 'main-container__map' }, [a('h3', [t._v('Kart')])]);
        },
      ],
      Ve = { name: 'Levekaar', components: { GraphCard: Yt }, props: { settings: { type: Object, required: !0 } } },
      Je = Ve,
      Qe = (a('c2d9'), Object(m['a'])(Je, Xe, Ye, !1, null, 'a4e0180e', null));
    Qe.options.__file = 'Levekaar.vue';
    var Ze = Qe.exports,
      ta = function() {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a('div', { staticClass: 'main-container' }, [
          a(
            'div',
            { staticClass: 'main-container__cards' },
            [
              a('h2', { staticClass: 'section-heading' }, [t._v('Trangboddhet i Bydel BYDELSNAVN')]),
              t._l(t.settings.helhet, function(t, e) {
                return a('graph-card', { key: 'trangboddhet-helhet-' + e, attrs: { settings: t } });
              }),
              a('h2', { staticClass: 'section-heading' }, [t._v('Mellomtittel test')]),
              t._l(t.settings.spesifikk, function(t, e) {
                return a('graph-card', { key: 'trangboddhet-spesifikk-' + e, attrs: { settings: t } });
              }),
            ],
            2
          ),
          t._m(0),
        ]);
      },
      ea = [
        function() {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a('div', { staticClass: 'main-container__map' }, [a('h3', [t._v('Kart')])]);
        },
      ],
      aa = { name: 'Trangboddhet', components: { GraphCard: Yt }, props: { settings: { type: Object, required: !0 } } },
      ia = aa,
      na = Object(m['a'])(ia, ta, ea, !1, null, null, null);
    na.options.__file = 'Trangboddhet.vue';
    var ra = na.exports;
    i['a'].use($['a']);
    var sa = new $['a']({
        routes: [
          { path: '/', name: 'Home', component: Bt },
          {
            path: '/graphA',
            name: 'Graph1',
            props: { settings: { url: ''.concat(k(), '/mockDataA.json'), template: 'a' } },
            component: yt,
          },
          {
            path: '/graphB',
            name: 'Graph2',
            props: { settings: { url: ''.concat(k(), '/mockDataB.json'), template: 'b' } },
            component: yt,
          },
          {
            path: '/graphC',
            name: 'Graph3',
            props: { settings: { url: ''.concat(k(), '/mockDataC.json'), template: 'c' } },
            component: yt,
          },
          {
            path: '/graphD',
            name: 'Graph4',
            props: { settings: { url: ''.concat(k(), '/mockDataD2.json'), method: 'ratio', template: 'd' } },
            component: yt,
          },
          {
            path: '/graphD2',
            name: 'Graph5b',
            props: { settings: { url: ''.concat(k(), '/mockDataD2.json'), method: 'value', template: 'd' } },
            component: yt,
          },
          {
            path: '/graphE',
            name: 'Graph5',
            props: { settings: { url: ''.concat(k(), '/mockDataD2.json'), template: 'e' } },
            component: yt,
          },
          {
            path: '/graphF',
            name: 'Graph8',
            props: { settings: { url: ''.concat(k(), '/mockDataD2.json'), template: 'f' } },
            component: yt,
          },
          {
            path: '/graphG',
            name: 'Graph7',
            props: { settings: { url: ''.concat(k(), '/mockDataG.json'), template: 'g' } },
            component: yt,
          },
          {
            path: '/graphH',
            name: 'Graph10',
            props: { settings: { url: ''.concat(k(), '/mockDataH.json'), template: 'h' } },
            component: yt,
          },
          {
            path: '/graphI',
            name: 'Graph6',
            props: { settings: { url: ''.concat(k(), '/mockDataI.json'), template: 'i' } },
            component: yt,
          },
          {
            path: '/graphJ',
            name: 'Graph9',
            props: { settings: { url: ''.concat(k(), '/mockDataJ.json'), template: 'j' } },
            component: yt,
          },
          { path: '/bydel/:bydel', name: 'Bydel', component: It },
          {
            path: '/bydel/:bydel/folkemengde',
            name: 'BydelFolkemengde',
            props: { settings: kt.folkemengde },
            component: He,
          },
          { path: '/bydel/:bydel/alder', name: 'BydelAlder', props: { settings: kt.alder }, component: Zt },
          {
            path: '/bydel/:bydel/innvandrerbefolkningen',
            name: 'BydelInnvandrerbefolkningen',
            props: { settings: kt.innvandring },
            component: Ge,
          },
          {
            path: '/bydel/:bydel/husholdninger',
            name: 'BydelHusholdninger',
            props: { settings: kt.husholdninger },
            component: $e,
          },
          {
            path: '/bydel/:bydel/trangboddhet',
            name: 'BydelTrandboddhet',
            props: { settings: kt.trangboddhet },
            component: ra,
          },
          { path: '/bydel/:bydel/eierform', name: 'BydelEierform', props: { settings: kt.eierform }, component: ve },
          {
            path: '/bydel/:bydel/kommunaleboliger',
            name: 'BydelKommunaleboliger',
            props: { settings: kt.kommunale_boliger },
            component: Ue,
          },
          { path: '/bydel/:bydel/flytting', name: 'BydelFlytting', props: { settings: kt.flytting }, component: _e },
          {
            path: '/bydel/:bydel/bygningstyper',
            name: 'BydelBygningstyper',
            props: { settings: kt.bygningstyper },
            component: de,
          },
          {
            path: '/bydel/:bydel/boligpriser',
            name: 'BydelBoligpriser',
            props: { settings: kt.boligpriser },
            component: re,
          },
          { path: '/bydel/:bydel/levekaar', name: 'Bydellevekaar', props: { settings: kt.levekaar }, component: Ze },
          { path: '/sammenlign/:bydel', name: 'Sammenlign', component: It },
          {
            path: '/sammenlign/:bydel/folkemengde',
            name: 'Folkemengde',
            props: { settings: kt.folkemengde },
            component: He,
          },
          { path: '/sammenlign/:bydel/alder', name: 'Alder', props: { settings: kt.alder }, component: Zt },
          {
            path: '/sammenlign/:bydel/innvandrerbefolkningen',
            name: 'Innvandrerbefolkningen',
            props: { settings: kt.innvandring },
            component: Ge,
          },
          {
            path: '/sammenlign/:bydel/husholdninger',
            name: 'Husholdninger',
            props: { settings: kt.husholdninger },
            component: $e,
          },
          {
            path: '/sammenlign/:bydel/trangboddhet',
            name: 'Trandboddhet',
            props: { settings: kt.trangboddhet },
            component: ra,
          },
          { path: '/sammenlign/:bydel/eierform', name: 'Eierform', props: { settings: kt.eierform }, component: ve },
          {
            path: '/sammenlign/:bydel/kommunaleboliger',
            name: 'Kommunaleboliger',
            props: { settings: kt.kommunale_boliger },
            component: Ue,
          },
          { path: '/sammenlign/:bydel/flytting', name: 'Flytting', props: { settings: kt.flytting }, component: _e },
          {
            path: '/sammenlign/:bydel/bygningstyper',
            name: 'Bygningstyper',
            props: { settings: kt.bygningstyper },
            component: de,
          },
          {
            path: '/sammenlign/:bydel/boligpriser',
            name: 'Boligpriser',
            props: { settings: kt.boligpriser },
            component: re,
          },
          { path: '/sammenlign/:bydel/levekaar', name: 'levekaar', props: { settings: kt.levekaar }, component: Ze },
        ],
      }),
      oa = a('2f62');
    i['a'].use(oa['a']);
    var la = !1,
      ha = new oa['a'].Store({
        state: { selectedBydel: [] },
        debug: la,
        mutations: {
          SET_SELECTED_BYDEL: function(t, e) {
            var a = e.selectedBydel,
              i = t;
            i.selectedBydel = a;
          },
        },
        actions: {
          SET_SELECTED_BYDEL: function(t, e) {
            var a = t.commit,
              i = e.selectedBydel;
            return a('SET_SELECTED_BYDEL', { selectedBydel: i }), Promise.resolve();
          },
        },
      }),
      ca = {
        bind: function(t, e, a) {
          (t.clickOutsideEvent = function(i) {
            t === i.target || t.contains(i.target) || a.context[e.expression](i);
          }),
            document.body.addEventListener('click', t.clickOutsideEvent);
        },
        unbind: function(t) {
          document.body.removeEventListener('click', t.clickOutsideEvent);
        },
      };
    a('6eb0'), a('fb98');
    i['a'].use(n['a']),
      (i['a'].config.productionTip = !1),
      (i['a'].config.devtools = !0),
      (i['a'].config.performance = !1),
      i['a'].directive('click-outside', ca),
      new i['a']({
        router: sa,
        store: ha,
        render: function(t) {
          return t(E);
        },
      }).$mount('#app');
  },
  '56da': function(t, e, a) {
    t.exports = a.p + 'img/oslo-logo.f788c641.svg';
  },
  '5a0b': function(t, e, a) {},
  '5da7': function(t, e, a) {
    'use strict';
    var i = a('5a0b'),
      n = a.n(i);
    n.a;
  },
  '60ce': function(t, e, a) {
    'use strict';
    var i = a('dd4c'),
      n = a.n(i);
    n.a;
  },
  '68f4': function(t, e, a) {},
  '697f': function(t, e, a) {},
  '74ae': function(t, e, a) {
    'use strict';
    var i = a('0bc3'),
      n = a.n(i);
    n.a;
  },
  8115: function(t, e, a) {
    'use strict';
    var i = a('92b5'),
      n = a.n(i);
    n.a;
  },
  '8cbd': function(t, e, a) {},
  '92b5': function(t, e, a) {},
  '9aa1': function(t, e, a) {
    'use strict';
    var i = a('ec16'),
      n = a.n(i);
    n.a;
  },
  '9ea6': function(t, e, a) {},
  b178: function(t, e, a) {
    'use strict';
    var i = a('489b'),
      n = a.n(i);
    n.a;
  },
  c2d9: function(t, e, a) {
    'use strict';
    var i = a('8cbd'),
      n = a.n(i);
    n.a;
  },
  c6bb: function(t, e, a) {
    'use strict';
    var i = a('05a7'),
      n = a.n(i);
    n.a;
  },
  d31f: function(t, e, a) {},
  d5ac: function(t, e, a) {
    'use strict';
    var i = a('f1ba'),
      n = a.n(i);
    n.a;
  },
  dd4c: function(t, e, a) {},
  e539: function(t, e, a) {
    'use strict';
    var i = a('3c7a'),
      n = a.n(i);
    n.a;
  },
  ec16: function(t, e, a) {},
  f0ee: function(t, e, a) {
    'use strict';
    var i = a('44ee'),
      n = a.n(i);
    n.a;
  },
  f1ba: function(t, e, a) {},
  f3d2: function(t, e, a) {
    'use strict';
    var i = a('697f'),
      n = a.n(i);
    n.a;
  },
  fb98: function(t, e, a) {},
});
//# sourceMappingURL=app.b36ba6c3.js.map
