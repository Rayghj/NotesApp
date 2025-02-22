(() => {
    var t = {
            56: (t, e, n) => {
                'use strict';
                t.exports = function (t) {
                    var e = n.nc;
                    e && t.setAttribute('nonce', e);
                };
            },
            72: (t) => {
                'use strict';
                var e = [];
                function n(t) {
                    for (var n = -1, r = 0; r < e.length; r++)
                        if (e[r].identifier === t) {
                            n = r;
                            break;
                        }
                    return n;
                }
                function r(t, r) {
                    for (var i = {}, a = [], u = 0; u < t.length; u++) {
                        var c = t[u],
                            l = r.base ? c[0] + r.base : c[0],
                            s = i[l] || 0,
                            f = ''.concat(l, ' ').concat(s);
                        i[l] = s + 1;
                        var p = n(f),
                            d = {
                                css: c[1],
                                media: c[2],
                                sourceMap: c[3],
                                supports: c[4],
                                layer: c[5],
                            };
                        if (-1 !== p) e[p].references++, e[p].updater(d);
                        else {
                            var y = o(d, r);
                            (r.byIndex = u),
                                e.splice(u, 0, {
                                    identifier: f,
                                    updater: y,
                                    references: 1,
                                });
                        }
                        a.push(f);
                    }
                    return a;
                }
                function o(t, e) {
                    var n = e.domAPI(e);
                    return (
                        n.update(t),
                        function (e) {
                            if (e) {
                                if (
                                    e.css === t.css &&
                                    e.media === t.media &&
                                    e.sourceMap === t.sourceMap &&
                                    e.supports === t.supports &&
                                    e.layer === t.layer
                                )
                                    return;
                                n.update((t = e));
                            } else n.remove();
                        }
                    );
                }
                t.exports = function (t, o) {
                    var i = r((t = t || []), (o = o || {}));
                    return function (t) {
                        t = t || [];
                        for (var a = 0; a < i.length; a++) {
                            var u = n(i[a]);
                            e[u].references--;
                        }
                        for (var c = r(t, o), l = 0; l < i.length; l++) {
                            var s = n(i[l]);
                            0 === e[s].references &&
                                (e[s].updater(), e.splice(s, 1));
                        }
                        i = c;
                    };
                };
            },
            113: (t) => {
                'use strict';
                t.exports = function (t, e) {
                    if (e.styleSheet) e.styleSheet.cssText = t;
                    else {
                        for (; e.firstChild; ) e.removeChild(e.firstChild);
                        e.appendChild(document.createTextNode(t));
                    }
                };
            },
            159: (t, e, n) => {
                'use strict';
                n.d(e, { A: () => u });
                var r = n(601),
                    o = n.n(r),
                    i = n(314),
                    a = n.n(i)()(o());
                a.push([
                    t.id,
                    '* {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n}\n\nbody {\n    background: #FCE7C8;\n    font-family: "Dekko", cursive;\n}\n\n#inputNewNote {\n    margin: 20px;\n    padding: 28px;\n    display: grid;\n    justify-items: center;\n}\n\n#inputNewNote > h2 {\n    font-size: 1.4rem;\n    padding: 0 0 20px 0;\n}\n\n.note-form {\n    padding: 30px 80px;\n    border: 2px solid #000;\n    box-shadow: 15px 15px 1px #ffa580, 15px 15px 1px 2px #000;\n    width: 50vw;\n}\n\n.note-form .input-note {\n    display: grid;\n}\n\n.note-form .input-note > label {\n    font-size: 1.05rem;\n    padding: 10px 0;\n}\n\n.note-form .input-note > input, .note-form .input-note > textarea {\n    display: block;\n    width: 100%;\n    font-size: 1rem;\n    line-height: 2rem;\n    font-family: "dekko", cursive;\n    margin-bottom: 0.5rem;\n    border: none;\n    border-bottom: 4px solid #000;\n    background: #f8f4e5;\n    min-width: 250px;\n    padding-left: 5px;\n    outline: none;\n    color: #000;\n}\n\n.note-form .input-note > input:focus, .note-form .input-note > textarea:focus {\n    border-bottom: 5px solid #ffa580;\n}\n\n.note-form .input-submit button {\n    display: flex;\n    justify-self: center;\n    padding-top: 10px;\n    font-size: 1.05rem;\n    font-weight: 600;\n    letter-spacing: 1px;\n    border: none;\n    font-family: "Dekko", cursive;\n    background-color: transparent;\n    cursor: pointer;\n    transition: 0.2s all ease-in-out;\n}\n.note-form .input-submit button:hover {\n    color: #ff4800;\n}\n\n.note-form .input-submit button i {\n    font-size: 20px;\n}\n\n.title-validation, .body-validation {\n    margin-block-start: 0.2rem;\n    color: red;\n}\n\n/* RESPONSIVE WEB */\n\n@media only screen and (max-width: 778px) {\n    #inputNewNote > h2 {\n        font-size: 1.2rem;\n    }\n\n    .note-form {\n        width: 100%;\n    }\n}\n\n@media only screen and (max-width: 992px) {\n    .note-form {\n        padding: 20px 50px;\n    }\n\n    .note-form .input-submit button {\n        padding: 20px 0 5px 0;\n    }\n\n    .title-validation, .body-validation {\n        font-size: 14px;\n    }\n} ',
                    '',
                ]);
                const u = a;
            },
            206: (t) => {
                'use strict';
                t.exports = function (t) {
                    if ('undefined' == typeof document)
                        return {
                            update: function () {},
                            remove: function () {},
                        };
                    var e = t.insertStyleElement(t);
                    return {
                        update: function (n) {
                            !(function (t, e, n) {
                                var r = '';
                                n.supports &&
                                    (r += '@supports ('.concat(
                                        n.supports,
                                        ') {'
                                    )),
                                    n.media &&
                                        (r += '@media '.concat(n.media, ' {'));
                                var o = void 0 !== n.layer;
                                o &&
                                    (r += '@layer'.concat(
                                        n.layer.length > 0
                                            ? ' '.concat(n.layer)
                                            : '',
                                        ' {'
                                    )),
                                    (r += n.css),
                                    o && (r += '}'),
                                    n.media && (r += '}'),
                                    n.supports && (r += '}');
                                var i = n.sourceMap;
                                i &&
                                    'undefined' != typeof btoa &&
                                    (r +=
                                        '\n/*# sourceMappingURL=data:application/json;base64,'.concat(
                                            btoa(
                                                unescape(
                                                    encodeURIComponent(
                                                        JSON.stringify(i)
                                                    )
                                                )
                                            ),
                                            ' */'
                                        )),
                                    e.styleTagTransform(r, t, e.options);
                            })(e, t, n);
                        },
                        remove: function () {
                            !(function (t) {
                                if (null === t.parentNode) return !1;
                                t.parentNode.removeChild(t);
                            })(e);
                        },
                    };
                };
            },
            314: (t) => {
                'use strict';
                t.exports = function (t) {
                    var e = [];
                    return (
                        (e.toString = function () {
                            return this.map(function (e) {
                                var n = '',
                                    r = void 0 !== e[5];
                                return (
                                    e[4] &&
                                        (n += '@supports ('.concat(
                                            e[4],
                                            ') {'
                                        )),
                                    e[2] && (n += '@media '.concat(e[2], ' {')),
                                    r &&
                                        (n += '@layer'.concat(
                                            e[5].length > 0
                                                ? ' '.concat(e[5])
                                                : '',
                                            ' {'
                                        )),
                                    (n += t(e)),
                                    r && (n += '}'),
                                    e[2] && (n += '}'),
                                    e[4] && (n += '}'),
                                    n
                                );
                            }).join('');
                        }),
                        (e.i = function (t, n, r, o, i) {
                            'string' == typeof t && (t = [[null, t, void 0]]);
                            var a = {};
                            if (r)
                                for (var u = 0; u < this.length; u++) {
                                    var c = this[u][0];
                                    null != c && (a[c] = !0);
                                }
                            for (var l = 0; l < t.length; l++) {
                                var s = [].concat(t[l]);
                                (r && a[s[0]]) ||
                                    (void 0 !== i &&
                                        (void 0 === s[5] ||
                                            (s[1] = '@layer'
                                                .concat(
                                                    s[5].length > 0
                                                        ? ' '.concat(s[5])
                                                        : '',
                                                    ' {'
                                                )
                                                .concat(s[1], '}')),
                                        (s[5] = i)),
                                    n &&
                                        (s[2]
                                            ? ((s[1] = '@media '
                                                  .concat(s[2], ' {')
                                                  .concat(s[1], '}')),
                                              (s[2] = n))
                                            : (s[2] = n)),
                                    o &&
                                        (s[4]
                                            ? ((s[1] = '@supports ('
                                                  .concat(s[4], ') {')
                                                  .concat(s[1], '}')),
                                              (s[4] = o))
                                            : (s[4] = ''.concat(o))),
                                    e.push(s));
                            }
                        }),
                        e
                    );
                };
            },
            470: () => {
                function t(e) {
                    return (
                        (t =
                            'function' == typeof Symbol &&
                            'symbol' == typeof Symbol.iterator
                                ? function (t) {
                                      return typeof t;
                                  }
                                : function (t) {
                                      return t &&
                                          'function' == typeof Symbol &&
                                          t.constructor === Symbol &&
                                          t !== Symbol.prototype
                                          ? 'symbol'
                                          : typeof t;
                                  }),
                        t(e)
                    );
                }
                function e(t, e) {
                    for (var r = 0; r < e.length; r++) {
                        var o = e[r];
                        (o.enumerable = o.enumerable || !1),
                            (o.configurable = !0),
                            'value' in o && (o.writable = !0),
                            Object.defineProperty(t, n(o.key), o);
                    }
                }
                function n(e) {
                    var n = (function (e) {
                        if ('object' != t(e) || !e) return e;
                        var n = e[Symbol.toPrimitive];
                        if (void 0 !== n) {
                            var r = n.call(e, 'string');
                            if ('object' != t(r)) return r;
                            throw new TypeError(
                                '@@toPrimitive must return a primitive value.'
                            );
                        }
                        return String(e);
                    })(e);
                    return 'symbol' == t(n) ? n : n + '';
                }
                function r(t) {
                    var e = 'function' == typeof Map ? new Map() : void 0;
                    return (
                        (r = function (t) {
                            if (
                                null === t ||
                                !(function (t) {
                                    try {
                                        return (
                                            -1 !==
                                            Function.toString
                                                .call(t)
                                                .indexOf('[native code]')
                                        );
                                    } catch (e) {
                                        return 'function' == typeof t;
                                    }
                                })(t)
                            )
                                return t;
                            if ('function' != typeof t)
                                throw new TypeError(
                                    'Super expression must either be null or a function'
                                );
                            if (void 0 !== e) {
                                if (e.has(t)) return e.get(t);
                                e.set(t, n);
                            }
                            function n() {
                                return (function (t, e, n) {
                                    if (o())
                                        return Reflect.construct.apply(
                                            null,
                                            arguments
                                        );
                                    var r = [null];
                                    r.push.apply(r, e);
                                    var a = new (t.bind.apply(t, r))();
                                    return n && i(a, n.prototype), a;
                                })(t, arguments, a(this).constructor);
                            }
                            return (
                                (n.prototype = Object.create(t.prototype, {
                                    constructor: {
                                        value: n,
                                        enumerable: !1,
                                        writable: !0,
                                        configurable: !0,
                                    },
                                })),
                                i(n, t)
                            );
                        }),
                        r(t)
                    );
                }
                function o() {
                    try {
                        var t = !Boolean.prototype.valueOf.call(
                            Reflect.construct(Boolean, [], function () {})
                        );
                    } catch (t) {}
                    return (o = function () {
                        return !!t;
                    })();
                }
                function i(t, e) {
                    return (
                        (i = Object.setPrototypeOf
                            ? Object.setPrototypeOf.bind()
                            : function (t, e) {
                                  return (t.__proto__ = e), t;
                              }),
                        i(t, e)
                    );
                }
                function a(t) {
                    return (
                        (a = Object.setPrototypeOf
                            ? Object.getPrototypeOf.bind()
                            : function (t) {
                                  return (
                                      t.__proto__ || Object.getPrototypeOf(t)
                                  );
                              }),
                        a(t)
                    );
                }
                var u = (function (n) {
                    function r() {
                        var e;
                        return (
                            (function (t, e) {
                                if (!(t instanceof e))
                                    throw new TypeError(
                                        'Cannot call a class as a function'
                                    );
                            })(this, r),
                            ((e = (function (e, n, r) {
                                return (
                                    (n = a(n)),
                                    (function (e, n) {
                                        if (
                                            n &&
                                            ('object' == t(n) ||
                                                'function' == typeof n)
                                        )
                                            return n;
                                        if (void 0 !== n)
                                            throw new TypeError(
                                                'Derived constructors may only return object or undefined'
                                            );
                                        return (function (t) {
                                            if (void 0 === t)
                                                throw new ReferenceError(
                                                    "this hasn't been initialised - super() hasn't been called"
                                                );
                                            return t;
                                        })(e);
                                    })(
                                        e,
                                        o()
                                            ? Reflect.construct(
                                                  n,
                                                  r || [],
                                                  a(e).constructor
                                              )
                                            : n.apply(e, r)
                                    )
                                );
                            })(this, r))._note = {
                                id: 0,
                                title: 'NEED_TITLE',
                                body: 'NEED_DESCRIPTION',
                            }),
                            (e._style = document.createElement('style')),
                            e
                        );
                    }
                    return (
                        (function (t, e) {
                            if ('function' != typeof e && null !== e)
                                throw new TypeError(
                                    'Super expression must either be null or a function'
                                );
                            (t.prototype = Object.create(e && e.prototype, {
                                constructor: {
                                    value: t,
                                    writable: !0,
                                    configurable: !0,
                                },
                            })),
                                Object.defineProperty(t, 'prototype', {
                                    writable: !1,
                                }),
                                e && i(t, e);
                        })(r, n),
                        (u = r),
                        (c = [
                            {
                                key: 'setNote',
                                value: function (t) {
                                    (this._note.id = t.id),
                                        (this._note.title = t.title),
                                        (this._note.body = t.body),
                                        this.render();
                                },
                            },
                            {
                                key: 'connectedCallback',
                                value: function () {
                                    this.render();
                                },
                            },
                            {
                                key: 'updateStyle',
                                value: function () {
                                    this._style.textContent =
                                        '\n            note-item {\n                display: block;\n                padding: 0.8rem;\n                border-radius: 4px;\n                background-color:rgba(250, 172, 141, 0.15);\n                border: 2px solid #000;\n                box-shadow: 15px 15px 1px #ffa580, 15px 15px 1px 2px #000;\n                transition: 0.2s all ease-in-out;\n            }\n\n            note-item:hover {\n                box-shadow: none;\n            }\n\n            .note__title {\n                margin-block-start: 0;\n                margin-block-end: 1rem;\n                font-size: 1.3rem;\n                font-weight: bold;\n                font-family: "Dekko", serif;\n            }\n\n            p {\n                margin-block-start: 0;\n            }\n\n            @media only screen and (max-width: 772px) {\n                .note__title {\n                    font-size: 1.2rem;\n                }\n\n                p {\n                    font-size: 14px;\n                }\n            }\n        ';
                                },
                            },
                            {
                                key: 'render',
                                value: function () {
                                    this.updateStyle(),
                                        this.setAttribute(
                                            'data-id',
                                            this._note.id
                                        ),
                                        (this.innerHTML = '\n            '
                                            .concat(
                                                this._style.outerHTML,
                                                '\n\n            <h5 class="note__title">'
                                            )
                                            .concat(
                                                this._note.title,
                                                '</h5>\n            <div class="note__body">\n            <p>'
                                            )
                                            .concat(
                                                this._note.body,
                                                '</p>\n            </div>\n            <div class="item__button">\n        '
                                            ));
                                },
                            },
                        ]) && e(u.prototype, c),
                        Object.defineProperty(u, 'prototype', { writable: !1 }),
                        u
                    );
                    var u, c;
                })(r(HTMLElement));
                customElements.define('note-item', u);
            },
            540: (t) => {
                'use strict';
                t.exports = function (t) {
                    var e = document.createElement('style');
                    return (
                        t.setAttributes(e, t.attributes),
                        t.insert(e, t.options),
                        e
                    );
                };
            },
            553: () => {
                function t(e) {
                    return (
                        (t =
                            'function' == typeof Symbol &&
                            'symbol' == typeof Symbol.iterator
                                ? function (t) {
                                      return typeof t;
                                  }
                                : function (t) {
                                      return t &&
                                          'function' == typeof Symbol &&
                                          t.constructor === Symbol &&
                                          t !== Symbol.prototype
                                          ? 'symbol'
                                          : typeof t;
                                  }),
                        t(e)
                    );
                }
                function e(t, e) {
                    (null == e || e > t.length) && (e = t.length);
                    for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
                    return r;
                }
                function n(t, e) {
                    for (var n = 0; n < e.length; n++) {
                        var o = e[n];
                        (o.enumerable = o.enumerable || !1),
                            (o.configurable = !0),
                            'value' in o && (o.writable = !0),
                            Object.defineProperty(t, r(o.key), o);
                    }
                }
                function r(e) {
                    var n = (function (e) {
                        if ('object' != t(e) || !e) return e;
                        var n = e[Symbol.toPrimitive];
                        if (void 0 !== n) {
                            var r = n.call(e, 'string');
                            if ('object' != t(r)) return r;
                            throw new TypeError(
                                '@@toPrimitive must return a primitive value.'
                            );
                        }
                        return String(e);
                    })(e);
                    return 'symbol' == t(n) ? n : n + '';
                }
                function o(t) {
                    var e = 'function' == typeof Map ? new Map() : void 0;
                    return (
                        (o = function (t) {
                            if (
                                null === t ||
                                !(function (t) {
                                    try {
                                        return (
                                            -1 !==
                                            Function.toString
                                                .call(t)
                                                .indexOf('[native code]')
                                        );
                                    } catch (e) {
                                        return 'function' == typeof t;
                                    }
                                })(t)
                            )
                                return t;
                            if ('function' != typeof t)
                                throw new TypeError(
                                    'Super expression must either be null or a function'
                                );
                            if (void 0 !== e) {
                                if (e.has(t)) return e.get(t);
                                e.set(t, n);
                            }
                            function n() {
                                return (function (t, e, n) {
                                    if (i())
                                        return Reflect.construct.apply(
                                            null,
                                            arguments
                                        );
                                    var r = [null];
                                    r.push.apply(r, e);
                                    var o = new (t.bind.apply(t, r))();
                                    return n && a(o, n.prototype), o;
                                })(t, arguments, u(this).constructor);
                            }
                            return (
                                (n.prototype = Object.create(t.prototype, {
                                    constructor: {
                                        value: n,
                                        enumerable: !1,
                                        writable: !0,
                                        configurable: !0,
                                    },
                                })),
                                a(n, t)
                            );
                        }),
                        o(t)
                    );
                }
                function i() {
                    try {
                        var t = !Boolean.prototype.valueOf.call(
                            Reflect.construct(Boolean, [], function () {})
                        );
                    } catch (t) {}
                    return (i = function () {
                        return !!t;
                    })();
                }
                function a(t, e) {
                    return (
                        (a = Object.setPrototypeOf
                            ? Object.setPrototypeOf.bind()
                            : function (t, e) {
                                  return (t.__proto__ = e), t;
                              }),
                        a(t, e)
                    );
                }
                function u(t) {
                    return (
                        (u = Object.setPrototypeOf
                            ? Object.getPrototypeOf.bind()
                            : function (t) {
                                  return (
                                      t.__proto__ || Object.getPrototypeOf(t)
                                  );
                              }),
                        u(t)
                    );
                }
                var c = (function (r) {
                    function o() {
                        var e;
                        return (
                            (function (t, e) {
                                if (!(t instanceof e))
                                    throw new TypeError(
                                        'Cannot call a class as a function'
                                    );
                            })(this, o),
                            ((e = (function (e, n, r) {
                                return (
                                    (n = u(n)),
                                    (function (e, n) {
                                        if (
                                            n &&
                                            ('object' == t(n) ||
                                                'function' == typeof n)
                                        )
                                            return n;
                                        if (void 0 !== n)
                                            throw new TypeError(
                                                'Derived constructors may only return object or undefined'
                                            );
                                        return (function (t) {
                                            if (void 0 === t)
                                                throw new ReferenceError(
                                                    "this hasn't been initialised - super() hasn't been called"
                                                );
                                            return t;
                                        })(e);
                                    })(
                                        e,
                                        i()
                                            ? Reflect.construct(
                                                  n,
                                                  r || [],
                                                  u(e).constructor
                                              )
                                            : n.apply(e, r)
                                    )
                                );
                            })(this, o))._noteData = []),
                            (e._style = document.createElement('style')),
                            e
                        );
                    }
                    return (
                        (function (t, e) {
                            if ('function' != typeof e && null !== e)
                                throw new TypeError(
                                    'Super expression must either be null or a function'
                                );
                            (t.prototype = Object.create(e && e.prototype, {
                                constructor: {
                                    value: t,
                                    writable: !0,
                                    configurable: !0,
                                },
                            })),
                                Object.defineProperty(t, 'prototype', {
                                    writable: !1,
                                }),
                                e && a(t, e);
                        })(o, r),
                        (c = o),
                        (l = [
                            {
                                key: 'setNoteData',
                                value: function (t) {
                                    (this._noteData = t), this.render();
                                },
                            },
                            {
                                key: 'connectedCallback',
                                value: function () {
                                    this.render();
                                },
                            },
                            {
                                key: 'updateStyle',
                                value: function () {
                                    this._style.textContent =
                                        '\n          note-data {\n            display: grid;\n            grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));\n            gap: 2rem;\n            padding: 42px;\n          }\n\n          @media only screen and (max-width: 772px) {\n            note-data {\n            grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));\n            }\n          }\n\n          @media only screen and (max-width: 692px) {\n            note-data {\n                grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n            }\n          }\n        ';
                                },
                            },
                            {
                                key: 'render',
                                value: function () {
                                    this.updateStyle();
                                    var t = this._noteData.map(function (t) {
                                        var e =
                                            document.createElement('note-item');
                                        return e.setNote(t), e;
                                    });
                                    (this.innerHTML = ''),
                                        this.append.apply(
                                            this,
                                            [this._style].concat(
                                                (function (t) {
                                                    return (
                                                        (function (t) {
                                                            if (
                                                                Array.isArray(t)
                                                            )
                                                                return e(t);
                                                        })(t) ||
                                                        (function (t) {
                                                            if (
                                                                ('undefined' !=
                                                                    typeof Symbol &&
                                                                    null !=
                                                                        t[
                                                                            Symbol
                                                                                .iterator
                                                                        ]) ||
                                                                null !=
                                                                    t[
                                                                        '@@iterator'
                                                                    ]
                                                            )
                                                                return Array.from(
                                                                    t
                                                                );
                                                        })(t) ||
                                                        (function (t, n) {
                                                            if (t) {
                                                                if (
                                                                    'string' ==
                                                                    typeof t
                                                                )
                                                                    return e(
                                                                        t,
                                                                        n
                                                                    );
                                                                var r =
                                                                    {}.toString
                                                                        .call(t)
                                                                        .slice(
                                                                            8,
                                                                            -1
                                                                        );
                                                                return (
                                                                    'Object' ===
                                                                        r &&
                                                                        t.constructor &&
                                                                        (r =
                                                                            t
                                                                                .constructor
                                                                                .name),
                                                                    'Map' ===
                                                                        r ||
                                                                    'Set' === r
                                                                        ? Array.from(
                                                                              t
                                                                          )
                                                                        : 'Arguments' ===
                                                                                r ||
                                                                            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                                                                r
                                                                            )
                                                                          ? e(
                                                                                t,
                                                                                n
                                                                            )
                                                                          : void 0
                                                                );
                                                            }
                                                        })(t) ||
                                                        (function () {
                                                            throw new TypeError(
                                                                'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
                                                            );
                                                        })()
                                                    );
                                                })(t)
                                            )
                                        );
                                },
                            },
                        ]) && n(c.prototype, l),
                        Object.defineProperty(c, 'prototype', { writable: !1 }),
                        c
                    );
                    var c, l;
                })(o(HTMLElement));
                customElements.define('note-data', c);
            },
            601: (t) => {
                'use strict';
                t.exports = function (t) {
                    return t[1];
                };
            },
            659: (t) => {
                'use strict';
                var e = {};
                t.exports = function (t, n) {
                    var r = (function (t) {
                        if (void 0 === e[t]) {
                            var n = document.querySelector(t);
                            if (
                                window.HTMLIFrameElement &&
                                n instanceof window.HTMLIFrameElement
                            )
                                try {
                                    n = n.contentDocument.head;
                                } catch (t) {
                                    n = null;
                                }
                            e[t] = n;
                        }
                        return e[t];
                    })(t);
                    if (!r)
                        throw new Error(
                            "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
                        );
                    r.appendChild(n);
                };
            },
            693: () => {
                var t = document.querySelector('form'),
                    e = t.elements.formTitle,
                    n = t.elements.formBody;
                t.addEventListener('submit', function (t) {
                    t.preventDefault();
                });
                var r = function (t) {
                    t.target.setCustomValidity(''),
                        t.target.validity.valueMissing
                            ? t.target.setCustomValidity(
                                  'Judul tidak boleh kosong!'
                              )
                            : t.target.validity.tooShort
                              ? t.target.setCustomValidity(
                                    'Judul minimal memiliki 4 karakter.'
                                )
                              : t.target.validity.patternMismatch &&
                                t.target.setCustomValidity(
                                    'Tidak boleh diawali dengan simbol,      mengandung white space atau spasi, dan      mengandung karakter spesial seperti dolar ($)!'
                                );
                };
                e.addEventListener('change', r),
                    e.addEventListener('invalid', r),
                    e.addEventListener('blur', function (t) {
                        var e = t.target.validity.valid,
                            n = t.target.validationMessage,
                            r = t.target.getAttribute('aria-describedby'),
                            o = r ? document.getElementById(r) : null;
                        o.innerText = o && n && !e ? n : '';
                    });
                var o = function (t) {
                    t.target.setCustomValidity(''),
                        t.target.validity.valueMissing
                            ? t.target.setCustomValidity(
                                  'Isi tidak boleh kosong!'
                              )
                            : t.target.validity.tooShort &&
                              t.target.setCustomValidity(
                                  'Isi minimal memiliki 10 karakter!'
                              );
                };
                n.addEventListener('change', o),
                    n.addEventListener('invalid', o),
                    n.addEventListener('blur', function (t) {
                        var e = t.target.validity.valid,
                            n = t.target.validationMessage,
                            r = t.target.getAttribute('aria-describedby'),
                            o = r ? document.getElementById(r) : null;
                        o.innerText = o && n && !e ? n : '';
                    });
            },
            756: () => {
                function t(e) {
                    return (
                        (t =
                            'function' == typeof Symbol &&
                            'symbol' == typeof Symbol.iterator
                                ? function (t) {
                                      return typeof t;
                                  }
                                : function (t) {
                                      return t &&
                                          'function' == typeof Symbol &&
                                          t.constructor === Symbol &&
                                          t !== Symbol.prototype
                                          ? 'symbol'
                                          : typeof t;
                                  }),
                        t(e)
                    );
                }
                function e(t, e) {
                    for (var r = 0; r < e.length; r++) {
                        var o = e[r];
                        (o.enumerable = o.enumerable || !1),
                            (o.configurable = !0),
                            'value' in o && (o.writable = !0),
                            Object.defineProperty(t, n(o.key), o);
                    }
                }
                function n(e) {
                    var n = (function (e) {
                        if ('object' != t(e) || !e) return e;
                        var n = e[Symbol.toPrimitive];
                        if (void 0 !== n) {
                            var r = n.call(e, 'string');
                            if ('object' != t(r)) return r;
                            throw new TypeError(
                                '@@toPrimitive must return a primitive value.'
                            );
                        }
                        return String(e);
                    })(e);
                    return 'symbol' == t(n) ? n : n + '';
                }
                function r(t) {
                    var e = 'function' == typeof Map ? new Map() : void 0;
                    return (
                        (r = function (t) {
                            if (
                                null === t ||
                                !(function (t) {
                                    try {
                                        return (
                                            -1 !==
                                            Function.toString
                                                .call(t)
                                                .indexOf('[native code]')
                                        );
                                    } catch (e) {
                                        return 'function' == typeof t;
                                    }
                                })(t)
                            )
                                return t;
                            if ('function' != typeof t)
                                throw new TypeError(
                                    'Super expression must either be null or a function'
                                );
                            if (void 0 !== e) {
                                if (e.has(t)) return e.get(t);
                                e.set(t, n);
                            }
                            function n() {
                                return (function (t, e, n) {
                                    if (o())
                                        return Reflect.construct.apply(
                                            null,
                                            arguments
                                        );
                                    var r = [null];
                                    r.push.apply(r, e);
                                    var a = new (t.bind.apply(t, r))();
                                    return n && i(a, n.prototype), a;
                                })(t, arguments, a(this).constructor);
                            }
                            return (
                                (n.prototype = Object.create(t.prototype, {
                                    constructor: {
                                        value: n,
                                        enumerable: !1,
                                        writable: !0,
                                        configurable: !0,
                                    },
                                })),
                                i(n, t)
                            );
                        }),
                        r(t)
                    );
                }
                function o() {
                    try {
                        var t = !Boolean.prototype.valueOf.call(
                            Reflect.construct(Boolean, [], function () {})
                        );
                    } catch (t) {}
                    return (o = function () {
                        return !!t;
                    })();
                }
                function i(t, e) {
                    return (
                        (i = Object.setPrototypeOf
                            ? Object.setPrototypeOf.bind()
                            : function (t, e) {
                                  return (t.__proto__ = e), t;
                              }),
                        i(t, e)
                    );
                }
                function a(t) {
                    return (
                        (a = Object.setPrototypeOf
                            ? Object.getPrototypeOf.bind()
                            : function (t) {
                                  return (
                                      t.__proto__ || Object.getPrototypeOf(t)
                                  );
                              }),
                        a(t)
                    );
                }
                var u = (function (n) {
                    function r() {
                        var e;
                        return (
                            (function (t, e) {
                                if (!(t instanceof e))
                                    throw new TypeError(
                                        'Cannot call a class as a function'
                                    );
                            })(this, r),
                            ((e = (function (e, n, r) {
                                return (
                                    (n = a(n)),
                                    (function (e, n) {
                                        if (
                                            n &&
                                            ('object' == t(n) ||
                                                'function' == typeof n)
                                        )
                                            return n;
                                        if (void 0 !== n)
                                            throw new TypeError(
                                                'Derived constructors may only return object or undefined'
                                            );
                                        return (function (t) {
                                            if (void 0 === t)
                                                throw new ReferenceError(
                                                    "this hasn't been initialised - super() hasn't been called"
                                                );
                                            return t;
                                        })(e);
                                    })(
                                        e,
                                        o()
                                            ? Reflect.construct(
                                                  n,
                                                  r || [],
                                                  a(e).constructor
                                              )
                                            : n.apply(e, r)
                                    )
                                );
                            })(this, r))._shadowRoot = e.attachShadow({
                                mode: 'open',
                            })),
                            (e._style = document.createElement('style')),
                            (e._imgUrl = e.getAttribute('img')),
                            (e._altImg = e.getAttribute('imgAlt')),
                            e
                        );
                    }
                    return (
                        (function (t, e) {
                            if ('function' != typeof e && null !== e)
                                throw new TypeError(
                                    'Super expression must either be null or a function'
                                );
                            (t.prototype = Object.create(e && e.prototype, {
                                constructor: {
                                    value: t,
                                    writable: !0,
                                    configurable: !0,
                                },
                            })),
                                Object.defineProperty(t, 'prototype', {
                                    writable: !1,
                                }),
                                e && i(t, e);
                        })(r, n),
                        (u = r),
                        (c = [
                            {
                                key: 'connectedCallback',
                                value: function () {
                                    this.render();
                                },
                            },
                            {
                                key: 'updateStyle',
                                value: function () {
                                    this._style.textContent =
                                        '\n            :host {\n                display: grid;\n                }\n                \n            div {\n                display: grid;\n                background-color: #DF9755;\n                align-items: center;\n                padding: 0.5rem 1rem;\n                border-bottom-left-radius: 40px;\n                border-bottom-right-radius: 40px;\n            }\n\n            img {\n                height: 5rem;\n                margin: 0;\n                padding-left: 2rem;\n            }\n  \n            .logo-text {\n                margin: 0;\n                padding-left: 1rem;\n                font-size: 1.5rem;\n                font-family: "Dekko", cursive;\n                color: #6B240C;\n                font-weight: 900;\n            }\n\n            @media only screen and (max-width: 678px) {\n                div {\n                    padding-top: 0;\n                } \n            \n                img {\n                    padding-left: 1.5rem;\n                }\n\n                .logo-text {\n                    font-size: 1.2rem;\n                }\n            }\n        ';
                                },
                            },
                            {
                                key: 'render',
                                value: function () {
                                    this.updateStyle();
                                    var t = '\n            '
                                        .concat(
                                            this._style.outerHTML,
                                            "\n\n            <div>\n                <img src='"
                                        )
                                        .concat(this._imgUrl, "' alt='")
                                        .concat(
                                            this._imgAlt,
                                            "'/>\n                <h1 class='logo-text'>My Notes</h1>\n            </div>\n        "
                                        );
                                    this._shadowRoot.innerHTML = t;
                                },
                            },
                        ]) && e(u.prototype, c),
                        Object.defineProperty(u, 'prototype', { writable: !1 }),
                        u
                    );
                    var u, c;
                })(r(HTMLElement));
                customElements.define('note-nav', u);
            },
            825: () => {
                function t(e) {
                    return (
                        (t =
                            'function' == typeof Symbol &&
                            'symbol' == typeof Symbol.iterator
                                ? function (t) {
                                      return typeof t;
                                  }
                                : function (t) {
                                      return t &&
                                          'function' == typeof Symbol &&
                                          t.constructor === Symbol &&
                                          t !== Symbol.prototype
                                          ? 'symbol'
                                          : typeof t;
                                  }),
                        t(e)
                    );
                }
                function e(t, e) {
                    for (var r = 0; r < e.length; r++) {
                        var o = e[r];
                        (o.enumerable = o.enumerable || !1),
                            (o.configurable = !0),
                            'value' in o && (o.writable = !0),
                            Object.defineProperty(t, n(o.key), o);
                    }
                }
                function n(e) {
                    var n = (function (e) {
                        if ('object' != t(e) || !e) return e;
                        var n = e[Symbol.toPrimitive];
                        if (void 0 !== n) {
                            var r = n.call(e, 'string');
                            if ('object' != t(r)) return r;
                            throw new TypeError(
                                '@@toPrimitive must return a primitive value.'
                            );
                        }
                        return String(e);
                    })(e);
                    return 'symbol' == t(n) ? n : n + '';
                }
                function r(t) {
                    var e = 'function' == typeof Map ? new Map() : void 0;
                    return (
                        (r = function (t) {
                            if (
                                null === t ||
                                !(function (t) {
                                    try {
                                        return (
                                            -1 !==
                                            Function.toString
                                                .call(t)
                                                .indexOf('[native code]')
                                        );
                                    } catch (e) {
                                        return 'function' == typeof t;
                                    }
                                })(t)
                            )
                                return t;
                            if ('function' != typeof t)
                                throw new TypeError(
                                    'Super expression must either be null or a function'
                                );
                            if (void 0 !== e) {
                                if (e.has(t)) return e.get(t);
                                e.set(t, n);
                            }
                            function n() {
                                return (function (t, e, n) {
                                    if (o())
                                        return Reflect.construct.apply(
                                            null,
                                            arguments
                                        );
                                    var r = [null];
                                    r.push.apply(r, e);
                                    var a = new (t.bind.apply(t, r))();
                                    return n && i(a, n.prototype), a;
                                })(t, arguments, a(this).constructor);
                            }
                            return (
                                (n.prototype = Object.create(t.prototype, {
                                    constructor: {
                                        value: n,
                                        enumerable: !1,
                                        writable: !0,
                                        configurable: !0,
                                    },
                                })),
                                i(n, t)
                            );
                        }),
                        r(t)
                    );
                }
                function o() {
                    try {
                        var t = !Boolean.prototype.valueOf.call(
                            Reflect.construct(Boolean, [], function () {})
                        );
                    } catch (t) {}
                    return (o = function () {
                        return !!t;
                    })();
                }
                function i(t, e) {
                    return (
                        (i = Object.setPrototypeOf
                            ? Object.setPrototypeOf.bind()
                            : function (t, e) {
                                  return (t.__proto__ = e), t;
                              }),
                        i(t, e)
                    );
                }
                function a(t) {
                    return (
                        (a = Object.setPrototypeOf
                            ? Object.getPrototypeOf.bind()
                            : function (t) {
                                  return (
                                      t.__proto__ || Object.getPrototypeOf(t)
                                  );
                              }),
                        a(t)
                    );
                }
                var u = (function (n) {
                    function r() {
                        var e;
                        return (
                            (function (t, e) {
                                if (!(t instanceof e))
                                    throw new TypeError(
                                        'Cannot call a class as a function'
                                    );
                            })(this, r),
                            ((e = (function (e, n, r) {
                                return (
                                    (n = a(n)),
                                    (function (e, n) {
                                        if (
                                            n &&
                                            ('object' == t(n) ||
                                                'function' == typeof n)
                                        )
                                            return n;
                                        if (void 0 !== n)
                                            throw new TypeError(
                                                'Derived constructors may only return object or undefined'
                                            );
                                        return (function (t) {
                                            if (void 0 === t)
                                                throw new ReferenceError(
                                                    "this hasn't been initialised - super() hasn't been called"
                                                );
                                            return t;
                                        })(e);
                                    })(
                                        e,
                                        o()
                                            ? Reflect.construct(
                                                  n,
                                                  r || [],
                                                  a(e).constructor
                                              )
                                            : n.apply(e, r)
                                    )
                                );
                            })(this, r))._shadowRoot = e.attachShadow({
                                mode: 'open',
                            })),
                            (e._style = document.createElement('style')),
                            e
                        );
                    }
                    return (
                        (function (t, e) {
                            if ('function' != typeof e && null !== e)
                                throw new TypeError(
                                    'Super expression must either be null or a function'
                                );
                            (t.prototype = Object.create(e && e.prototype, {
                                constructor: {
                                    value: t,
                                    writable: !0,
                                    configurable: !0,
                                },
                            })),
                                Object.defineProperty(t, 'prototype', {
                                    writable: !1,
                                }),
                                e && i(t, e);
                        })(r, n),
                        (u = r),
                        (c = [
                            {
                                key: 'connectedCallback',
                                value: function () {
                                    this.render();
                                },
                            },
                            {
                                key: 'updateStyle',
                                value: function () {
                                    this._style.textContent =
                                        "\n            :host {\n                display: grid;\n            }\n\n            div {\n                padding: 1rem;\n                background-color: #6B240C;\n                border-top-left-radius: 50px;\n                border-top-right-radius: 50px;\n            }\n\n            p {\n                font-family: 'Lato', serif;\n                color: #DF9755;\n                font-size: 0.9rem;\n                font-weight: 400;\n                text-align: center;\n                word-spacing: 2.5px;\n            }\n\n            span {\n                font-style: italic;\n                font-weight: 600;\n            }\n        ";
                                },
                            },
                            {
                                key: 'render',
                                value: function () {
                                    this.updateStyle();
                                    var t = '\n            '.concat(
                                        this._style.outerHTML,
                                        '\n\n            <div>\n                <p>My Note Apps - <span>Ray Immanuel D</span></p>\n            </div>\n        '
                                    );
                                    this._shadowRoot.innerHTML = t;
                                },
                            },
                        ]) && e(u.prototype, c),
                        Object.defineProperty(u, 'prototype', { writable: !1 }),
                        u
                    );
                    var u, c;
                })(r(HTMLElement));
                customElements.define('note-foot', u);
            },
        },
        e = {};
    function n(r) {
        var o = e[r];
        if (void 0 !== o) return o.exports;
        var i = (e[r] = { id: r, exports: {} });
        return t[r](i, i.exports, n), i.exports;
    }
    (n.n = (t) => {
        var e = t && t.__esModule ? () => t.default : () => t;
        return n.d(e, { a: e }), e;
    }),
        (n.d = (t, e) => {
            for (var r in e)
                n.o(e, r) &&
                    !n.o(t, r) &&
                    Object.defineProperty(t, r, { enumerable: !0, get: e[r] });
        }),
        (n.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e)),
        (n.nc = void 0),
        (() => {
            'use strict';
            n(553), n(470), n(756), n(825);
            var t = [
                {
                    id: 'notes-jT-jjsyz61J8XKiI',
                    title: 'Welcome to Notes, Dimas!',
                    body: 'Welcome to Notes! This is your first note. You can archive it, delete it, or create new ones.',
                    createdAt: '2022-07-28T10:03:12.594Z',
                    archived: !1,
                },
                {
                    id: 'notes-aB-cdefg12345',
                    title: 'Meeting Agenda',
                    body: 'Discuss project updates and assign tasks for the upcoming week.',
                    createdAt: '2022-08-05T15:30:00.000Z',
                    archived: !1,
                },
                {
                    id: 'notes-XyZ-789012345',
                    title: 'Shopping List',
                    body: 'Milk, eggs, bread, fruits, and vegetables.',
                    createdAt: '2022-08-10T08:45:23.120Z',
                    archived: !1,
                },
                {
                    id: 'notes-1a-2b3c4d5e6f',
                    title: 'Personal Goals',
                    body: 'Read two books per month, exercise three times a week, learn a new language.',
                    createdAt: '2022-08-15T18:12:55.789Z',
                    archived: !1,
                },
                {
                    id: 'notes-LMN-456789',
                    title: 'Recipe: Spaghetti Bolognese',
                    body: 'Ingredients: ground beef, tomatoes, onions, garlic, pasta. Steps:...',
                    createdAt: '2022-08-20T12:30:40.200Z',
                    archived: !1,
                },
                {
                    id: 'notes-QwErTyUiOp',
                    title: 'Workout Routine',
                    body: 'Monday: Cardio, Tuesday: Upper body, Wednesday: Rest, Thursday: Lower body, Friday: Cardio.',
                    createdAt: '2022-08-25T09:15:17.890Z',
                    archived: !1,
                },
                {
                    id: 'notes-abcdef-987654',
                    title: 'Book Recommendations',
                    body: "1. 'The Alchemist' by Paulo Coelho\n2. '1984' by George Orwell\n3. 'To Kill a Mockingbird' by Harper Lee",
                    createdAt: '2022-09-01T14:20:05.321Z',
                    archived: !1,
                },
                {
                    id: 'notes-zyxwv-54321',
                    title: 'Daily Reflections',
                    body: 'Write down three positive things that happened today and one thing to improve tomorrow.',
                    createdAt: '2022-09-07T20:40:30.150Z',
                    archived: !1,
                },
                {
                    id: 'notes-poiuyt-987654',
                    title: 'Travel Bucket List',
                    body: '1. Paris, France\n2. Kyoto, Japan\n3. Santorini, Greece\n4. New York City, USA',
                    createdAt: '2022-09-15T11:55:44.678Z',
                    archived: !1,
                },
                {
                    id: 'notes-asdfgh-123456',
                    title: 'Coding Projects',
                    body: '1. Build a personal website\n2. Create a mobile app\n3. Contribute to an open-source project',
                    createdAt: '2022-09-20T17:10:12.987Z',
                    archived: !1,
                },
                {
                    id: 'notes-5678-abcd-efgh',
                    title: 'Project Deadline',
                    body: 'Complete project tasks by the deadline on October 1st.',
                    createdAt: '2022-09-28T14:00:00.000Z',
                    archived: !1,
                },
                {
                    id: 'notes-9876-wxyz-1234',
                    title: 'Health Checkup',
                    body: 'Schedule a routine health checkup with the doctor.',
                    createdAt: '2022-10-05T09:30:45.600Z',
                    archived: !1,
                },
                {
                    id: 'notes-qwerty-8765-4321',
                    title: 'Financial Goals',
                    body: '1. Create a monthly budget\n2. Save 20% of income\n3. Invest in a retirement fund.',
                    createdAt: '2022-10-12T12:15:30.890Z',
                    archived: !1,
                },
                {
                    id: 'notes-98765-54321-12345',
                    title: 'Holiday Plans',
                    body: 'Research and plan for the upcoming holiday destination.',
                    createdAt: '2022-10-20T16:45:00.000Z',
                    archived: !1,
                },
                {
                    id: 'notes-1234-abcd-5678',
                    title: 'Language Learning',
                    body: 'Practice Spanish vocabulary for 30 minutes every day.',
                    createdAt: '2022-10-28T08:00:20.120Z',
                    archived: !1,
                },
            ];
            console.log(t),
                document.querySelector('note-data').setNoteData(t),
                n(693);
            var e = n(72),
                r = n.n(e),
                o = n(206),
                i = n.n(o),
                a = n(659),
                u = n.n(a),
                c = n(56),
                l = n.n(c),
                s = n(540),
                f = n.n(s),
                p = n(113),
                d = n.n(p),
                y = n(159),
                m = {};
            (m.styleTagTransform = d()),
                (m.setAttributes = l()),
                (m.insert = u().bind(null, 'head')),
                (m.domAPI = i()),
                (m.insertStyleElement = f()),
                r()(y.A, m),
                y.A && y.A.locals && y.A.locals;
        })();
})();
