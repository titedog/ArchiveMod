/*! For license information please see renderer.js.LICENSE.txt */
module.exports = function(e) {
    var t = {};

    function __webpack_require__(n) {
        if (t[n]) return t[n].exports;
        var r = t[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return e[n].call(r.exports, r, r.exports, __webpack_require__), r.l = !0, r.exports
    }
    return __webpack_require__.m = e, __webpack_require__.c = t, __webpack_require__.d = function(e, t, n) {
        __webpack_require__.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
        })
    }, __webpack_require__.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, __webpack_require__.t = function(e, t) {
        if (1 & t && (e = __webpack_require__(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (__webpack_require__.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var r in e) __webpack_require__.d(n, r, function(t) {
                return e[t]
            }.bind(null, r));
        return n
    }, __webpack_require__.n = function(e) {
        var t = e && e.__esModule ? function getDefault() {
            return e.default
        } : function getModuleExports() {
            return e
        };
        return __webpack_require__.d(t, "a", t), t
    }, __webpack_require__.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, __webpack_require__.p = "", __webpack_require__(__webpack_require__.s = 27)
}([function(e, t) {
    e.exports = require("electron")
}, function(e, t, n) {
    "use strict";
    var r = Object.freeze({});

    function isUndef(e) {
        return null == e
    }

    function isDef(e) {
        return null != e
    }

    function isTrue(e) {
        return !0 === e
    }

    function isPrimitive(e) {
        return "string" == typeof e || "number" == typeof e || "symbol" == typeof e || "boolean" == typeof e
    }

    function isObject(e) {
        return null !== e && "object" == typeof e
    }
    var i = Object.prototype.toString;

    function isPlainObject(e) {
        return "[object Object]" === i.call(e)
    }

    function isRegExp(e) {
        return "[object RegExp]" === i.call(e)
    }

    function isValidArrayIndex(e) {
        var t = parseFloat(String(e));
        return t >= 0 && Math.floor(t) === t && isFinite(e)
    }

    function isPromise(e) {
        return isDef(e) && "function" == typeof e.then && "function" == typeof e.catch
    }

    function toString(e) {
        return null == e ? "" : Array.isArray(e) || isPlainObject(e) && e.toString === i ? JSON.stringify(e, null, 2) : String(e)
    }

    function toNumber(e) {
        var t = parseFloat(e);
        return isNaN(t) ? e : t
    }

    function makeMap(e, t) {
        for (var n = Object.create(null), r = e.split(","), i = 0; i < r.length; i++) n[r[i]] = !0;
        return t ? function(e) {
            return n[e.toLowerCase()]
        } : function(e) {
            return n[e]
        }
    }
    var a = makeMap("slot,component", !0),
        s = makeMap("key,ref,slot,slot-scope,is");

    function remove(e, t) {
        if (e.length) {
            var n = e.indexOf(t);
            if (n > -1) return e.splice(n, 1)
        }
    }
    var o = Object.prototype.hasOwnProperty;

    function hasOwn(e, t) {
        return o.call(e, t)
    }

    function cached(e) {
        var t = Object.create(null);
        return function cachedFn(n) {
            return t[n] || (t[n] = e(n))
        }
    }
    var l = /-(\w)/g,
        c = cached((function(e) {
            return e.replace(l, (function(e, t) {
                return t ? t.toUpperCase() : ""
            }))
        })),
        d = cached((function(e) {
            return e.charAt(0).toUpperCase() + e.slice(1)
        })),
        u = /\B([A-Z])/g,
        f = cached((function(e) {
            return e.replace(u, "-$1").toLowerCase()
        }));
    var p = Function.prototype.bind ? function nativeBind(e, t) {
        return e.bind(t)
    } : function polyfillBind(e, t) {
        function boundFn(n) {
            var r = arguments.length;
            return r ? r > 1 ? e.apply(t, arguments) : e.call(t, n) : e.call(t)
        }
        return boundFn._length = e.length, boundFn
    };

    function toArray(e, t) {
        t = t || 0;
        for (var n = e.length - t, r = new Array(n); n--;) r[n] = e[n + t];
        return r
    }

    function extend(e, t) {
        for (var n in t) e[n] = t[n];
        return e
    }

    function toObject(e) {
        for (var t = {}, n = 0; n < e.length; n++) e[n] && extend(t, e[n]);
        return t
    }

    function noop(e, t, n) {}
    var no = function(e, t, n) {
            return !1
        },
        identity = function(e) {
            return e
        };

    function looseEqual(e, t) {
        if (e === t) return !0;
        var n = isObject(e),
            r = isObject(t);
        if (!n || !r) return !n && !r && String(e) === String(t);
        try {
            var i = Array.isArray(e),
                a = Array.isArray(t);
            if (i && a) return e.length === t.length && e.every((function(e, n) {
                return looseEqual(e, t[n])
            }));
            if (e instanceof Date && t instanceof Date) return e.getTime() === t.getTime();
            if (i || a) return !1;
            var s = Object.keys(e),
                o = Object.keys(t);
            return s.length === o.length && s.every((function(n) {
                return looseEqual(e[n], t[n])
            }))
        } catch (e) {
            return !1
        }
    }

    function looseIndexOf(e, t) {
        for (var n = 0; n < e.length; n++)
            if (looseEqual(e[n], t)) return n;
        return -1
    }

    function once(e) {
        var t = !1;
        return function() {
            t || (t = !0, e.apply(this, arguments))
        }
    }
    var m = ["component", "directive", "filter"],
        h = ["beforeCreate", "created", "beforeMount", "mounted", "beforeUpdate", "updated", "beforeDestroy", "destroyed", "activated", "deactivated", "errorCaptured", "serverPrefetch"],
        v = {
            optionMergeStrategies: Object.create(null),
            silent: !1,
            productionTip: !1,
            devtools: !1,
            performance: !1,
            errorHandler: null,
            warnHandler: null,
            ignoredElements: [],
            keyCodes: Object.create(null),
            isReservedTag: no,
            isReservedAttr: no,
            isUnknownElement: no,
            getTagNamespace: noop,
            parsePlatformTagName: identity,
            mustUseProp: no,
            async: !0,
            _lifecycleHooks: h
        },
        g = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;

    function isReserved(e) {
        var t = (e + "").charCodeAt(0);
        return 36 === t || 95 === t
    }

    function def(e, t, n, r) {
        Object.defineProperty(e, t, {
            value: n,
            enumerable: !!r,
            writable: !0,
            configurable: !0
        })
    }
    var y = new RegExp("[^" + g.source + ".$_\\d]");
    var _, b = "__proto__" in {},
        w = "undefined" != typeof window,
        C = "undefined" != typeof WXEnvironment && !!WXEnvironment.platform,
        x = C && WXEnvironment.platform.toLowerCase(),
        k = w && window.navigator.userAgent.toLowerCase(),
        $ = k && /msie|trident/.test(k),
        S = k && k.indexOf("msie 9.0") > 0,
        A = k && k.indexOf("edge/") > 0,
        D = (k && k.indexOf("android"), k && /iphone|ipad|ipod|ios/.test(k) || "ios" === x),
        T = (k && /chrome\/\d+/.test(k), k && /phantomjs/.test(k), k && k.match(/firefox\/(\d+)/)),
        O = {}.watch,
        E = !1;
    if (w) try {
        var R = {};
        Object.defineProperty(R, "passive", {
            get: function get() {
                E = !0
            }
        }), window.addEventListener("test-passive", null, R)
    } catch (e) {}
    var isServerRendering = function() {
            return void 0 === _ && (_ = !w && !C && "undefined" != typeof global && (global.process && "server" === global.process.env.VUE_ENV)), _
        },
        N = w && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

    function isNative(e) {
        return "function" == typeof e && /native code/.test(e.toString())
    }
    var j, F = "undefined" != typeof Symbol && isNative(Symbol) && "undefined" != typeof Reflect && isNative(Reflect.ownKeys);
    j = "undefined" != typeof Set && isNative(Set) ? Set : function() {
        function Set() {
            this.set = Object.create(null)
        }
        return Set.prototype.has = function has(e) {
            return !0 === this.set[e]
        }, Set.prototype.add = function add(e) {
            this.set[e] = !0
        }, Set.prototype.clear = function clear() {
            this.set = Object.create(null)
        }, Set
    }();
    var I = noop,
        P = 0,
        L = function Dep() {
            this.id = P++, this.subs = []
        };
    L.prototype.addSub = function addSub(e) {
        this.subs.push(e)
    }, L.prototype.removeSub = function removeSub(e) {
        remove(this.subs, e)
    }, L.prototype.depend = function depend() {
        L.target && L.target.addDep(this)
    }, L.prototype.notify = function notify() {
        var e = this.subs.slice();
        for (var t = 0, n = e.length; t < n; t++) e[t].update()
    }, L.target = null;
    var M = [];

    function pushTarget(e) {
        M.push(e), L.target = e
    }

    function popTarget() {
        M.pop(), L.target = M[M.length - 1]
    }
    var U = function VNode(e, t, n, r, i, a, s, o) {
            this.tag = e, this.data = t, this.children = n, this.text = r, this.elm = i, this.ns = void 0, this.context = a, this.fnContext = void 0, this.fnOptions = void 0, this.fnScopeId = void 0, this.key = t && t.key, this.componentOptions = s, this.componentInstance = void 0, this.parent = void 0, this.raw = !1, this.isStatic = !1, this.isRootInsert = !0, this.isComment = !1, this.isCloned = !1, this.isOnce = !1, this.asyncFactory = o, this.asyncMeta = void 0, this.isAsyncPlaceholder = !1
        },
        B = {
            child: {
                configurable: !0
            }
        };
    B.child.get = function() {
        return this.componentInstance
    }, Object.defineProperties(U.prototype, B);
    var createEmptyVNode = function(e) {
        void 0 === e && (e = "");
        var t = new U;
        return t.text = e, t.isComment = !0, t
    };

    function createTextVNode(e) {
        return new U(void 0, void 0, void 0, String(e))
    }

    function cloneVNode(e) {
        var t = new U(e.tag, e.data, e.children && e.children.slice(), e.text, e.elm, e.context, e.componentOptions, e.asyncFactory);
        return t.ns = e.ns, t.isStatic = e.isStatic, t.key = e.key, t.isComment = e.isComment, t.fnContext = e.fnContext, t.fnOptions = e.fnOptions, t.fnScopeId = e.fnScopeId, t.asyncMeta = e.asyncMeta, t.isCloned = !0, t
    }
    var H = Array.prototype,
        V = Object.create(H);
    ["push", "pop", "shift", "unshift", "splice", "sort", "reverse"].forEach((function(e) {
        var t = H[e];
        def(V, e, (function mutator() {
            for (var n = [], r = arguments.length; r--;) n[r] = arguments[r];
            var i, a = t.apply(this, n),
                s = this.__ob__;
            switch (e) {
                case "push":
                case "unshift":
                    i = n;
                    break;
                case "splice":
                    i = n.slice(2)
            }
            return i && s.observeArray(i), s.dep.notify(), a
        }))
    }));
    var q = Object.getOwnPropertyNames(V),
        z = !0;

    function toggleObserving(e) {
        z = e
    }
    var W = function Observer(e) {
        this.value = e, this.dep = new L, this.vmCount = 0, def(e, "__ob__", this), Array.isArray(e) ? (b ? function protoAugment(e, t) {
            e.__proto__ = t
        }(e, V) : function copyAugment(e, t, n) {
            for (var r = 0, i = n.length; r < i; r++) {
                var a = n[r];
                def(e, a, t[a])
            }
        }(e, V, q), this.observeArray(e)) : this.walk(e)
    };

    function observe(e, t) {
        var n;
        if (isObject(e) && !(e instanceof U)) return hasOwn(e, "__ob__") && e.__ob__ instanceof W ? n = e.__ob__ : z && !isServerRendering() && (Array.isArray(e) || isPlainObject(e)) && Object.isExtensible(e) && !e._isVue && (n = new W(e)), t && n && n.vmCount++, n
    }

    function defineReactive$$1(e, t, n, r, i) {
        var a = new L,
            s = Object.getOwnPropertyDescriptor(e, t);
        if (!s || !1 !== s.configurable) {
            var o = s && s.get,
                l = s && s.set;
            o && !l || 2 !== arguments.length || (n = e[t]);
            var c = !i && observe(n);
            Object.defineProperty(e, t, {
                enumerable: !0,
                configurable: !0,
                get: function reactiveGetter() {
                    var t = o ? o.call(e) : n;
                    return L.target && (a.depend(), c && (c.dep.depend(), Array.isArray(t) && dependArray(t))), t
                },
                set: function reactiveSetter(t) {
                    var r = o ? o.call(e) : n;
                    t === r || t != t && r != r || o && !l || (l ? l.call(e, t) : n = t, c = !i && observe(t), a.notify())
                }
            })
        }
    }

    function set(e, t, n) {
        if (Array.isArray(e) && isValidArrayIndex(t)) return e.length = Math.max(e.length, t), e.splice(t, 1, n), n;
        if (t in e && !(t in Object.prototype)) return e[t] = n, n;
        var r = e.__ob__;
        return e._isVue || r && r.vmCount ? n : r ? (defineReactive$$1(r.value, t, n), r.dep.notify(), n) : (e[t] = n, n)
    }

    function del(e, t) {
        if (Array.isArray(e) && isValidArrayIndex(t)) e.splice(t, 1);
        else {
            var n = e.__ob__;
            e._isVue || n && n.vmCount || hasOwn(e, t) && (delete e[t], n && n.dep.notify())
        }
    }

    function dependArray(e) {
        for (var t = void 0, n = 0, r = e.length; n < r; n++)(t = e[n]) && t.__ob__ && t.__ob__.dep.depend(), Array.isArray(t) && dependArray(t)
    }
    W.prototype.walk = function walk(e) {
        for (var t = Object.keys(e), n = 0; n < t.length; n++) defineReactive$$1(e, t[n])
    }, W.prototype.observeArray = function observeArray(e) {
        for (var t = 0, n = e.length; t < n; t++) observe(e[t])
    };
    var G = v.optionMergeStrategies;

    function mergeData(e, t) {
        if (!t) return e;
        for (var n, r, i, a = F ? Reflect.ownKeys(t) : Object.keys(t), s = 0; s < a.length; s++) "__ob__" !== (n = a[s]) && (r = e[n], i = t[n], hasOwn(e, n) ? r !== i && isPlainObject(r) && isPlainObject(i) && mergeData(r, i) : set(e, n, i));
        return e
    }

    function mergeDataOrFn(e, t, n) {
        return n ? function mergedInstanceDataFn() {
            var r = "function" == typeof t ? t.call(n, n) : t,
                i = "function" == typeof e ? e.call(n, n) : e;
            return r ? mergeData(r, i) : i
        } : t ? e ? function mergedDataFn() {
            return mergeData("function" == typeof t ? t.call(this, this) : t, "function" == typeof e ? e.call(this, this) : e)
        } : t : e
    }

    function mergeHook(e, t) {
        var n = t ? e ? e.concat(t) : Array.isArray(t) ? t : [t] : e;
        return n ? function dedupeHooks(e) {
            for (var t = [], n = 0; n < e.length; n++) - 1 === t.indexOf(e[n]) && t.push(e[n]);
            return t
        }(n) : n
    }

    function mergeAssets(e, t, n, r) {
        var i = Object.create(e || null);
        return t ? extend(i, t) : i
    }
    G.data = function(e, t, n) {
        return n ? mergeDataOrFn(e, t, n) : t && "function" != typeof t ? e : mergeDataOrFn(e, t)
    }, h.forEach((function(e) {
        G[e] = mergeHook
    })), m.forEach((function(e) {
        G[e + "s"] = mergeAssets
    })), G.watch = function(e, t, n, r) {
        if (e === O && (e = void 0), t === O && (t = void 0), !t) return Object.create(e || null);
        if (!e) return t;
        var i = {};
        for (var a in extend(i, e), t) {
            var s = i[a],
                o = t[a];
            s && !Array.isArray(s) && (s = [s]), i[a] = s ? s.concat(o) : Array.isArray(o) ? o : [o]
        }
        return i
    }, G.props = G.methods = G.inject = G.computed = function(e, t, n, r) {
        if (!e) return t;
        var i = Object.create(null);
        return extend(i, e), t && extend(i, t), i
    }, G.provide = mergeDataOrFn;
    var defaultStrat = function(e, t) {
        return void 0 === t ? e : t
    };

    function mergeOptions(e, t, n) {
        if ("function" == typeof t && (t = t.options), function normalizeProps(e, t) {
                var n = e.props;
                if (n) {
                    var r, i, a = {};
                    if (Array.isArray(n))
                        for (r = n.length; r--;) "string" == typeof(i = n[r]) && (a[c(i)] = {
                            type: null
                        });
                    else if (isPlainObject(n))
                        for (var s in n) i = n[s], a[c(s)] = isPlainObject(i) ? i : {
                            type: i
                        };
                    else 0;
                    e.props = a
                }
            }(t), function normalizeInject(e, t) {
                var n = e.inject;
                if (n) {
                    var r = e.inject = {};
                    if (Array.isArray(n))
                        for (var i = 0; i < n.length; i++) r[n[i]] = {
                            from: n[i]
                        };
                    else if (isPlainObject(n))
                        for (var a in n) {
                            var s = n[a];
                            r[a] = isPlainObject(s) ? extend({
                                from: a
                            }, s) : {
                                from: s
                            }
                        } else 0
                }
            }(t), function normalizeDirectives(e) {
                var t = e.directives;
                if (t)
                    for (var n in t) {
                        var r = t[n];
                        "function" == typeof r && (t[n] = {
                            bind: r,
                            update: r
                        })
                    }
            }(t), !t._base && (t.extends && (e = mergeOptions(e, t.extends, n)), t.mixins))
            for (var r = 0, i = t.mixins.length; r < i; r++) e = mergeOptions(e, t.mixins[r], n);
        var a, s = {};
        for (a in e) mergeField(a);
        for (a in t) hasOwn(e, a) || mergeField(a);

        function mergeField(r) {
            var i = G[r] || defaultStrat;
            s[r] = i(e[r], t[r], n, r)
        }
        return s
    }

    function resolveAsset(e, t, n, r) {
        if ("string" == typeof n) {
            var i = e[t];
            if (hasOwn(i, n)) return i[n];
            var a = c(n);
            if (hasOwn(i, a)) return i[a];
            var s = d(a);
            return hasOwn(i, s) ? i[s] : i[n] || i[a] || i[s]
        }
    }

    function validateProp(e, t, n, r) {
        var i = t[e],
            a = !hasOwn(n, e),
            s = n[e],
            o = getTypeIndex(Boolean, i.type);
        if (o > -1)
            if (a && !hasOwn(i, "default")) s = !1;
            else if ("" === s || s === f(e)) {
            var l = getTypeIndex(String, i.type);
            (l < 0 || o < l) && (s = !0)
        }
        if (void 0 === s) {
            s = function getPropDefaultValue(e, t, n) {
                if (!hasOwn(t, "default")) return;
                var r = t.default;
                0;
                if (e && e.$options.propsData && void 0 === e.$options.propsData[n] && void 0 !== e._props[n]) return e._props[n];
                return "function" == typeof r && "Function" !== getType(t.type) ? r.call(e) : r
            }(r, i, e);
            var c = z;
            toggleObserving(!0), observe(s), toggleObserving(c)
        }
        return s
    }

    function getType(e) {
        var t = e && e.toString().match(/^\s*function (\w+)/);
        return t ? t[1] : ""
    }

    function isSameType(e, t) {
        return getType(e) === getType(t)
    }

    function getTypeIndex(e, t) {
        if (!Array.isArray(t)) return isSameType(t, e) ? 0 : -1;
        for (var n = 0, r = t.length; n < r; n++)
            if (isSameType(t[n], e)) return n;
        return -1
    }

    function handleError(e, t, n) {
        pushTarget();
        try {
            if (t)
                for (var r = t; r = r.$parent;) {
                    var i = r.$options.errorCaptured;
                    if (i)
                        for (var a = 0; a < i.length; a++) try {
                            if (!1 === i[a].call(r, e, t, n)) return
                        } catch (e) {
                            globalHandleError(e, r, "errorCaptured hook")
                        }
                }
            globalHandleError(e, t, n)
        } finally {
            popTarget()
        }
    }

    function invokeWithErrorHandling(e, t, n, r, i) {
        var a;
        try {
            (a = n ? e.apply(t, n) : e.call(t)) && !a._isVue && isPromise(a) && !a._handled && (a.catch((function(e) {
                return handleError(e, r, i + " (Promise/async)")
            })), a._handled = !0)
        } catch (e) {
            handleError(e, r, i)
        }
        return a
    }

    function globalHandleError(e, t, n) {
        if (v.errorHandler) try {
            return v.errorHandler.call(null, e, t, n)
        } catch (t) {
            t !== e && logError(t, null, "config.errorHandler")
        }
        logError(e, t, n)
    }

    function logError(e, t, n) {
        if (!w && !C || "undefined" == typeof console) throw e;
        console.error(e)
    }
    var K, J = !1,
        X = [],
        Y = !1;

    function flushCallbacks() {
        Y = !1;
        var e = X.slice(0);
        X.length = 0;
        for (var t = 0; t < e.length; t++) e[t]()
    }
    if ("undefined" != typeof Promise && isNative(Promise)) {
        var Z = Promise.resolve();
        K = function() {
            Z.then(flushCallbacks), D && setTimeout(noop)
        }, J = !0
    } else if ($ || "undefined" == typeof MutationObserver || !isNative(MutationObserver) && "[object MutationObserverConstructor]" !== MutationObserver.toString()) K = "undefined" != typeof setImmediate && isNative(setImmediate) ? function() {
        setImmediate(flushCallbacks)
    } : function() {
        setTimeout(flushCallbacks, 0)
    };
    else {
        var Q = 1,
            ee = new MutationObserver(flushCallbacks),
            te = document.createTextNode(String(Q));
        ee.observe(te, {
            characterData: !0
        }), K = function() {
            Q = (Q + 1) % 2, te.data = String(Q)
        }, J = !0
    }

    function nextTick(e, t) {
        var n;
        if (X.push((function() {
                if (e) try {
                    e.call(t)
                } catch (e) {
                    handleError(e, t, "nextTick")
                } else n && n(t)
            })), Y || (Y = !0, K()), !e && "undefined" != typeof Promise) return new Promise((function(e) {
            n = e
        }))
    }
    var ne = new j;

    function traverse(e) {
        ! function _traverse(e, t) {
            var n, r, i = Array.isArray(e);
            if (!i && !isObject(e) || Object.isFrozen(e) || e instanceof U) return;
            if (e.__ob__) {
                var a = e.__ob__.dep.id;
                if (t.has(a)) return;
                t.add(a)
            }
            if (i)
                for (n = e.length; n--;) _traverse(e[n], t);
            else
                for (r = Object.keys(e), n = r.length; n--;) _traverse(e[r[n]], t)
        }(e, ne), ne.clear()
    }
    var re = cached((function(e) {
        var t = "&" === e.charAt(0),
            n = "~" === (e = t ? e.slice(1) : e).charAt(0),
            r = "!" === (e = n ? e.slice(1) : e).charAt(0);
        return {
            name: e = r ? e.slice(1) : e,
            once: n,
            capture: r,
            passive: t
        }
    }));

    function createFnInvoker(e, t) {
        function invoker() {
            var e = arguments,
                n = invoker.fns;
            if (!Array.isArray(n)) return invokeWithErrorHandling(n, null, arguments, t, "v-on handler");
            for (var r = n.slice(), i = 0; i < r.length; i++) invokeWithErrorHandling(r[i], null, e, t, "v-on handler")
        }
        return invoker.fns = e, invoker
    }

    function updateListeners(e, t, n, r, i, a) {
        var s, o, l, c;
        for (s in e) o = e[s], l = t[s], c = re(s), isUndef(o) || (isUndef(l) ? (isUndef(o.fns) && (o = e[s] = createFnInvoker(o, a)), isTrue(c.once) && (o = e[s] = i(c.name, o, c.capture)), n(c.name, o, c.capture, c.passive, c.params)) : o !== l && (l.fns = o, e[s] = l));
        for (s in t) isUndef(e[s]) && r((c = re(s)).name, t[s], c.capture)
    }

    function mergeVNodeHook(e, t, n) {
        var r;
        e instanceof U && (e = e.data.hook || (e.data.hook = {}));
        var i = e[t];

        function wrappedHook() {
            n.apply(this, arguments), remove(r.fns, wrappedHook)
        }
        isUndef(i) ? r = createFnInvoker([wrappedHook]) : isDef(i.fns) && isTrue(i.merged) ? (r = i).fns.push(wrappedHook) : r = createFnInvoker([i, wrappedHook]), r.merged = !0, e[t] = r
    }

    function checkProp(e, t, n, r, i) {
        if (isDef(t)) {
            if (hasOwn(t, n)) return e[n] = t[n], i || delete t[n], !0;
            if (hasOwn(t, r)) return e[n] = t[r], i || delete t[r], !0
        }
        return !1
    }

    function normalizeChildren(e) {
        return isPrimitive(e) ? [createTextVNode(e)] : Array.isArray(e) ? function normalizeArrayChildren(e, t) {
            var n, r, i, a, s = [];
            for (n = 0; n < e.length; n++) isUndef(r = e[n]) || "boolean" == typeof r || (i = s.length - 1, a = s[i], Array.isArray(r) ? r.length > 0 && (isTextNode((r = normalizeArrayChildren(r, (t || "") + "_" + n))[0]) && isTextNode(a) && (s[i] = createTextVNode(a.text + r[0].text), r.shift()), s.push.apply(s, r)) : isPrimitive(r) ? isTextNode(a) ? s[i] = createTextVNode(a.text + r) : "" !== r && s.push(createTextVNode(r)) : isTextNode(r) && isTextNode(a) ? s[i] = createTextVNode(a.text + r.text) : (isTrue(e._isVList) && isDef(r.tag) && isUndef(r.key) && isDef(t) && (r.key = "__vlist" + t + "_" + n + "__"), s.push(r)));
            return s
        }(e) : void 0
    }

    function isTextNode(e) {
        return isDef(e) && isDef(e.text) && function isFalse(e) {
            return !1 === e
        }(e.isComment)
    }

    function resolveInject(e, t) {
        if (e) {
            for (var n = Object.create(null), r = F ? Reflect.ownKeys(e) : Object.keys(e), i = 0; i < r.length; i++) {
                var a = r[i];
                if ("__ob__" !== a) {
                    for (var s = e[a].from, o = t; o;) {
                        if (o._provided && hasOwn(o._provided, s)) {
                            n[a] = o._provided[s];
                            break
                        }
                        o = o.$parent
                    }
                    if (!o)
                        if ("default" in e[a]) {
                            var l = e[a].default;
                            n[a] = "function" == typeof l ? l.call(t) : l
                        } else 0
                }
            }
            return n
        }
    }

    function resolveSlots(e, t) {
        if (!e || !e.length) return {};
        for (var n = {}, r = 0, i = e.length; r < i; r++) {
            var a = e[r],
                s = a.data;
            if (s && s.attrs && s.attrs.slot && delete s.attrs.slot, a.context !== t && a.fnContext !== t || !s || null == s.slot)(n.default || (n.default = [])).push(a);
            else {
                var o = s.slot,
                    l = n[o] || (n[o] = []);
                "template" === a.tag ? l.push.apply(l, a.children || []) : l.push(a)
            }
        }
        for (var c in n) n[c].every(isWhitespace) && delete n[c];
        return n
    }

    function isWhitespace(e) {
        return e.isComment && !e.asyncFactory || " " === e.text
    }

    function normalizeScopedSlots(e, t, n) {
        var i, a = Object.keys(t).length > 0,
            s = e ? !!e.$stable : !a,
            o = e && e.$key;
        if (e) {
            if (e._normalized) return e._normalized;
            if (s && n && n !== r && o === n.$key && !a && !n.$hasNormal) return n;
            for (var l in i = {}, e) e[l] && "$" !== l[0] && (i[l] = normalizeScopedSlot(t, l, e[l]))
        } else i = {};
        for (var c in t) c in i || (i[c] = proxyNormalSlot(t, c));
        return e && Object.isExtensible(e) && (e._normalized = i), def(i, "$stable", s), def(i, "$key", o), def(i, "$hasNormal", a), i
    }

    function normalizeScopedSlot(e, t, n) {
        var normalized = function() {
            var e = arguments.length ? n.apply(null, arguments) : n({});
            return (e = e && "object" == typeof e && !Array.isArray(e) ? [e] : normalizeChildren(e)) && (0 === e.length || 1 === e.length && e[0].isComment) ? void 0 : e
        };
        return n.proxy && Object.defineProperty(e, t, {
            get: normalized,
            enumerable: !0,
            configurable: !0
        }), normalized
    }

    function proxyNormalSlot(e, t) {
        return function() {
            return e[t]
        }
    }

    function renderList(e, t) {
        var n, r, i, a, s;
        if (Array.isArray(e) || "string" == typeof e)
            for (n = new Array(e.length), r = 0, i = e.length; r < i; r++) n[r] = t(e[r], r);
        else if ("number" == typeof e)
            for (n = new Array(e), r = 0; r < e; r++) n[r] = t(r + 1, r);
        else if (isObject(e))
            if (F && e[Symbol.iterator]) {
                n = [];
                for (var o = e[Symbol.iterator](), l = o.next(); !l.done;) n.push(t(l.value, n.length)), l = o.next()
            } else
                for (a = Object.keys(e), n = new Array(a.length), r = 0, i = a.length; r < i; r++) s = a[r], n[r] = t(e[s], s, r);
        return isDef(n) || (n = []), n._isVList = !0, n
    }

    function renderSlot(e, t, n, r) {
        var i, a = this.$scopedSlots[e];
        a ? (n = n || {}, r && (n = extend(extend({}, r), n)), i = a(n) || t) : i = this.$slots[e] || t;
        var s = n && n.slot;
        return s ? this.$createElement("template", {
            slot: s
        }, i) : i
    }

    function resolveFilter(e) {
        return resolveAsset(this.$options, "filters", e) || identity
    }

    function isKeyNotMatch(e, t) {
        return Array.isArray(e) ? -1 === e.indexOf(t) : e !== t
    }

    function checkKeyCodes(e, t, n, r, i) {
        var a = v.keyCodes[t] || n;
        return i && r && !v.keyCodes[t] ? isKeyNotMatch(i, r) : a ? isKeyNotMatch(a, e) : r ? f(r) !== t : void 0
    }

    function bindObjectProps(e, t, n, r, i) {
        if (n)
            if (isObject(n)) {
                var a;
                Array.isArray(n) && (n = toObject(n));
                var loop = function(o) {
                    if ("class" === o || "style" === o || s(o)) a = e;
                    else {
                        var l = e.attrs && e.attrs.type;
                        a = r || v.mustUseProp(t, l, o) ? e.domProps || (e.domProps = {}) : e.attrs || (e.attrs = {})
                    }
                    var d = c(o),
                        u = f(o);
                    d in a || u in a || (a[o] = n[o], i && ((e.on || (e.on = {}))["update:" + o] = function(e) {
                        n[o] = e
                    }))
                };
                for (var o in n) loop(o)
            } else;
        return e
    }

    function renderStatic(e, t) {
        var n = this._staticTrees || (this._staticTrees = []),
            r = n[e];
        return r && !t || markStatic(r = n[e] = this.$options.staticRenderFns[e].call(this._renderProxy, null, this), "__static__" + e, !1), r
    }

    function markOnce(e, t, n) {
        return markStatic(e, "__once__" + t + (n ? "_" + n : ""), !0), e
    }

    function markStatic(e, t, n) {
        if (Array.isArray(e))
            for (var r = 0; r < e.length; r++) e[r] && "string" != typeof e[r] && markStaticNode(e[r], t + "_" + r, n);
        else markStaticNode(e, t, n)
    }

    function markStaticNode(e, t, n) {
        e.isStatic = !0, e.key = t, e.isOnce = n
    }

    function bindObjectListeners(e, t) {
        if (t)
            if (isPlainObject(t)) {
                var n = e.on = e.on ? extend({}, e.on) : {};
                for (var r in t) {
                    var i = n[r],
                        a = t[r];
                    n[r] = i ? [].concat(i, a) : a
                }
            } else;
        return e
    }

    function resolveScopedSlots(e, t, n, r) {
        t = t || {
            $stable: !n
        };
        for (var i = 0; i < e.length; i++) {
            var a = e[i];
            Array.isArray(a) ? resolveScopedSlots(a, t, n) : a && (a.proxy && (a.fn.proxy = !0), t[a.key] = a.fn)
        }
        return r && (t.$key = r), t
    }

    function bindDynamicKeys(e, t) {
        for (var n = 0; n < t.length; n += 2) {
            var r = t[n];
            "string" == typeof r && r && (e[t[n]] = t[n + 1])
        }
        return e
    }

    function prependModifier(e, t) {
        return "string" == typeof e ? t + e : e
    }

    function installRenderHelpers(e) {
        e._o = markOnce, e._n = toNumber, e._s = toString, e._l = renderList, e._t = renderSlot, e._q = looseEqual, e._i = looseIndexOf, e._m = renderStatic, e._f = resolveFilter, e._k = checkKeyCodes, e._b = bindObjectProps, e._v = createTextVNode, e._e = createEmptyVNode, e._u = resolveScopedSlots, e._g = bindObjectListeners, e._d = bindDynamicKeys, e._p = prependModifier
    }

    function FunctionalRenderContext(e, t, n, i, a) {
        var s, o = this,
            l = a.options;
        hasOwn(i, "_uid") ? (s = Object.create(i))._original = i : (s = i, i = i._original);
        var c = isTrue(l._compiled),
            d = !c;
        this.data = e, this.props = t, this.children = n, this.parent = i, this.listeners = e.on || r, this.injections = resolveInject(l.inject, i), this.slots = function() {
            return o.$slots || normalizeScopedSlots(e.scopedSlots, o.$slots = resolveSlots(n, i)), o.$slots
        }, Object.defineProperty(this, "scopedSlots", {
            enumerable: !0,
            get: function get() {
                return normalizeScopedSlots(e.scopedSlots, this.slots())
            }
        }), c && (this.$options = l, this.$slots = this.slots(), this.$scopedSlots = normalizeScopedSlots(e.scopedSlots, this.$slots)), l._scopeId ? this._c = function(e, t, n, r) {
            var a = createElement(s, e, t, n, r, d);
            return a && !Array.isArray(a) && (a.fnScopeId = l._scopeId, a.fnContext = i), a
        } : this._c = function(e, t, n, r) {
            return createElement(s, e, t, n, r, d)
        }
    }

    function cloneAndMarkFunctionalResult(e, t, n, r, i) {
        var a = cloneVNode(e);
        return a.fnContext = n, a.fnOptions = r, t.slot && ((a.data || (a.data = {})).slot = t.slot), a
    }

    function mergeProps(e, t) {
        for (var n in t) e[c(n)] = t[n]
    }
    installRenderHelpers(FunctionalRenderContext.prototype);
    var ie = {
            init: function init(e, t) {
                if (e.componentInstance && !e.componentInstance._isDestroyed && e.data.keepAlive) {
                    var n = e;
                    ie.prepatch(n, n)
                } else {
                    (e.componentInstance = function createComponentInstanceForVnode(e, t) {
                        var n = {
                                _isComponent: !0,
                                _parentVnode: e,
                                parent: t
                            },
                            r = e.data.inlineTemplate;
                        isDef(r) && (n.render = r.render, n.staticRenderFns = r.staticRenderFns);
                        return new e.componentOptions.Ctor(n)
                    }(e, le)).$mount(t ? e.elm : void 0, t)
                }
            },
            prepatch: function prepatch(e, t) {
                var n = t.componentOptions;
                ! function updateChildComponent(e, t, n, i, a) {
                    0;
                    var s = i.data.scopedSlots,
                        o = e.$scopedSlots,
                        l = !!(s && !s.$stable || o !== r && !o.$stable || s && e.$scopedSlots.$key !== s.$key),
                        c = !!(a || e.$options._renderChildren || l);
                    e.$options._parentVnode = i, e.$vnode = i, e._vnode && (e._vnode.parent = i);
                    if (e.$options._renderChildren = a, e.$attrs = i.data.attrs || r, e.$listeners = n || r, t && e.$options.props) {
                        toggleObserving(!1);
                        for (var d = e._props, u = e.$options._propKeys || [], f = 0; f < u.length; f++) {
                            var p = u[f],
                                m = e.$options.props;
                            d[p] = validateProp(p, m, t, e)
                        }
                        toggleObserving(!0), e.$options.propsData = t
                    }
                    n = n || r;
                    var h = e.$options._parentListeners;
                    e.$options._parentListeners = n, updateComponentListeners(e, n, h), c && (e.$slots = resolveSlots(a, i.context), e.$forceUpdate());
                    0
                }(t.componentInstance = e.componentInstance, n.propsData, n.listeners, t, n.children)
            },
            insert: function insert(e) {
                var t = e.context,
                    n = e.componentInstance;
                n._isMounted || (n._isMounted = !0, callHook(n, "mounted")), e.data.keepAlive && (t._isMounted ? function queueActivatedComponent(e) {
                    e._inactive = !1, de.push(e)
                }(n) : activateChildComponent(n, !0))
            },
            destroy: function destroy(e) {
                var t = e.componentInstance;
                t._isDestroyed || (e.data.keepAlive ? function deactivateChildComponent(e, t) {
                    if (t && (e._directInactive = !0, isInInactiveTree(e))) return;
                    if (!e._inactive) {
                        e._inactive = !0;
                        for (var n = 0; n < e.$children.length; n++) deactivateChildComponent(e.$children[n]);
                        callHook(e, "deactivated")
                    }
                }(t, !0) : t.$destroy())
            }
        },
        ae = Object.keys(ie);

    function createComponent(e, t, n, i, a) {
        if (!isUndef(e)) {
            var s = n.$options._base;
            if (isObject(e) && (e = s.extend(e)), "function" == typeof e) {
                var o;
                if (isUndef(e.cid) && void 0 === (e = function resolveAsyncComponent(e, t) {
                        if (isTrue(e.error) && isDef(e.errorComp)) return e.errorComp;
                        if (isDef(e.resolved)) return e.resolved;
                        var n = oe;
                        n && isDef(e.owners) && -1 === e.owners.indexOf(n) && e.owners.push(n);
                        if (isTrue(e.loading) && isDef(e.loadingComp)) return e.loadingComp;
                        if (n && !isDef(e.owners)) {
                            var r = e.owners = [n],
                                i = !0,
                                a = null,
                                s = null;
                            n.$on("hook:destroyed", (function() {
                                return remove(r, n)
                            }));
                            var forceRender = function(e) {
                                    for (var t = 0, n = r.length; t < n; t++) r[t].$forceUpdate();
                                    e && (r.length = 0, null !== a && (clearTimeout(a), a = null), null !== s && (clearTimeout(s), s = null))
                                },
                                o = once((function(n) {
                                    e.resolved = ensureCtor(n, t), i ? r.length = 0 : forceRender(!0)
                                })),
                                l = once((function(t) {
                                    isDef(e.errorComp) && (e.error = !0, forceRender(!0))
                                })),
                                c = e(o, l);
                            return isObject(c) && (isPromise(c) ? isUndef(e.resolved) && c.then(o, l) : isPromise(c.component) && (c.component.then(o, l), isDef(c.error) && (e.errorComp = ensureCtor(c.error, t)), isDef(c.loading) && (e.loadingComp = ensureCtor(c.loading, t), 0 === c.delay ? e.loading = !0 : a = setTimeout((function() {
                                a = null, isUndef(e.resolved) && isUndef(e.error) && (e.loading = !0, forceRender(!1))
                            }), c.delay || 200)), isDef(c.timeout) && (s = setTimeout((function() {
                                s = null, isUndef(e.resolved) && l(null)
                            }), c.timeout)))), i = !1, e.loading ? e.loadingComp : e.resolved
                        }
                    }(o = e, s))) return function createAsyncPlaceholder(e, t, n, r, i) {
                    var a = createEmptyVNode();
                    return a.asyncFactory = e, a.asyncMeta = {
                        data: t,
                        context: n,
                        children: r,
                        tag: i
                    }, a
                }(o, t, n, i, a);
                t = t || {}, resolveConstructorOptions(e), isDef(t.model) && function transformModel(e, t) {
                    var n = e.model && e.model.prop || "value",
                        r = e.model && e.model.event || "input";
                    (t.attrs || (t.attrs = {}))[n] = t.model.value;
                    var i = t.on || (t.on = {}),
                        a = i[r],
                        s = t.model.callback;
                    isDef(a) ? (Array.isArray(a) ? -1 === a.indexOf(s) : a !== s) && (i[r] = [s].concat(a)) : i[r] = s
                }(e.options, t);
                var l = function extractPropsFromVNodeData(e, t, n) {
                    var r = t.options.props;
                    if (!isUndef(r)) {
                        var i = {},
                            a = e.attrs,
                            s = e.props;
                        if (isDef(a) || isDef(s))
                            for (var o in r) {
                                var l = f(o);
                                checkProp(i, s, o, l, !0) || checkProp(i, a, o, l, !1)
                            }
                        return i
                    }
                }(t, e);
                if (isTrue(e.options.functional)) return function createFunctionalComponent(e, t, n, i, a) {
                    var s = e.options,
                        o = {},
                        l = s.props;
                    if (isDef(l))
                        for (var c in l) o[c] = validateProp(c, l, t || r);
                    else isDef(n.attrs) && mergeProps(o, n.attrs), isDef(n.props) && mergeProps(o, n.props);
                    var d = new FunctionalRenderContext(n, o, a, i, e),
                        u = s.render.call(null, d._c, d);
                    if (u instanceof U) return cloneAndMarkFunctionalResult(u, n, d.parent, s, d);
                    if (Array.isArray(u)) {
                        for (var f = normalizeChildren(u) || [], p = new Array(f.length), m = 0; m < f.length; m++) p[m] = cloneAndMarkFunctionalResult(f[m], n, d.parent, s, d);
                        return p
                    }
                }(e, l, t, n, i);
                var c = t.on;
                if (t.on = t.nativeOn, isTrue(e.options.abstract)) {
                    var d = t.slot;
                    t = {}, d && (t.slot = d)
                }! function installComponentHooks(e) {
                    for (var t = e.hook || (e.hook = {}), n = 0; n < ae.length; n++) {
                        var r = ae[n],
                            i = t[r],
                            a = ie[r];
                        i === a || i && i._merged || (t[r] = i ? mergeHook$1(a, i) : a)
                    }
                }(t);
                var u = e.options.name || a;
                return new U("vue-component-" + e.cid + (u ? "-" + u : ""), t, void 0, void 0, void 0, n, {
                    Ctor: e,
                    propsData: l,
                    listeners: c,
                    tag: a,
                    children: i
                }, o)
            }
        }
    }

    function mergeHook$1(e, t) {
        var merged = function(n, r) {
            e(n, r), t(n, r)
        };
        return merged._merged = !0, merged
    }

    function createElement(e, t, n, r, i, a) {
        return (Array.isArray(n) || isPrimitive(n)) && (i = r, r = n, n = void 0), isTrue(a) && (i = 2),
            function _createElement(e, t, n, r, i) {
                if (isDef(n) && isDef(n.__ob__)) return createEmptyVNode();
                isDef(n) && isDef(n.is) && (t = n.is);
                if (!t) return createEmptyVNode();
                0;
                Array.isArray(r) && "function" == typeof r[0] && ((n = n || {}).scopedSlots = {
                    default: r[0]
                }, r.length = 0);
                2 === i ? r = normalizeChildren(r) : 1 === i && (r = function simpleNormalizeChildren(e) {
                    for (var t = 0; t < e.length; t++)
                        if (Array.isArray(e[t])) return Array.prototype.concat.apply([], e);
                    return e
                }(r));
                var a, s;
                if ("string" == typeof t) {
                    var o;
                    s = e.$vnode && e.$vnode.ns || v.getTagNamespace(t), a = v.isReservedTag(t) ? new U(v.parsePlatformTagName(t), n, r, void 0, void 0, e) : n && n.pre || !isDef(o = resolveAsset(e.$options, "components", t)) ? new U(t, n, r, void 0, void 0, e) : createComponent(o, n, e, r, t)
                } else a = createComponent(t, n, e, r);
                return Array.isArray(a) ? a : isDef(a) ? (isDef(s) && function applyNS(e, t, n) {
                    e.ns = t, "foreignObject" === e.tag && (t = void 0, n = !0);
                    if (isDef(e.children))
                        for (var r = 0, i = e.children.length; r < i; r++) {
                            var a = e.children[r];
                            isDef(a.tag) && (isUndef(a.ns) || isTrue(n) && "svg" !== a.tag) && applyNS(a, t, n)
                        }
                }(a, s), isDef(n) && function registerDeepBindings(e) {
                    isObject(e.style) && traverse(e.style);
                    isObject(e.class) && traverse(e.class)
                }(n), a) : createEmptyVNode()
            }(e, t, n, r, i)
    }
    var se, oe = null;

    function ensureCtor(e, t) {
        return (e.__esModule || F && "Module" === e[Symbol.toStringTag]) && (e = e.default), isObject(e) ? t.extend(e) : e
    }

    function isAsyncPlaceholder(e) {
        return e.isComment && e.asyncFactory
    }

    function getFirstComponentChild(e) {
        if (Array.isArray(e))
            for (var t = 0; t < e.length; t++) {
                var n = e[t];
                if (isDef(n) && (isDef(n.componentOptions) || isAsyncPlaceholder(n))) return n
            }
    }

    function add(e, t) {
        se.$on(e, t)
    }

    function remove$1(e, t) {
        se.$off(e, t)
    }

    function createOnceHandler(e, t) {
        var n = se;
        return function onceHandler() {
            var r = t.apply(null, arguments);
            null !== r && n.$off(e, onceHandler)
        }
    }

    function updateComponentListeners(e, t, n) {
        se = e, updateListeners(t, n || {}, add, remove$1, createOnceHandler, e), se = void 0
    }
    var le = null;

    function setActiveInstance(e) {
        var t = le;
        return le = e,
            function() {
                le = t
            }
    }

    function isInInactiveTree(e) {
        for (; e && (e = e.$parent);)
            if (e._inactive) return !0;
        return !1
    }

    function activateChildComponent(e, t) {
        if (t) {
            if (e._directInactive = !1, isInInactiveTree(e)) return
        } else if (e._directInactive) return;
        if (e._inactive || null === e._inactive) {
            e._inactive = !1;
            for (var n = 0; n < e.$children.length; n++) activateChildComponent(e.$children[n]);
            callHook(e, "activated")
        }
    }

    function callHook(e, t) {
        pushTarget();
        var n = e.$options[t],
            r = t + " hook";
        if (n)
            for (var i = 0, a = n.length; i < a; i++) invokeWithErrorHandling(n[i], e, null, e, r);
        e._hasHookEvent && e.$emit("hook:" + t), popTarget()
    }
    var ce = [],
        de = [],
        ue = {},
        fe = !1,
        pe = !1,
        me = 0;
    var he = 0,
        ve = Date.now;
    if (w && !$) {
        var ge = window.performance;
        ge && "function" == typeof ge.now && ve() > document.createEvent("Event").timeStamp && (ve = function() {
            return ge.now()
        })
    }

    function flushSchedulerQueue() {
        var e, t;
        for (he = ve(), pe = !0, ce.sort((function(e, t) {
                return e.id - t.id
            })), me = 0; me < ce.length; me++)(e = ce[me]).before && e.before(), t = e.id, ue[t] = null, e.run();
        var n = de.slice(),
            r = ce.slice();
        ! function resetSchedulerState() {
            me = ce.length = de.length = 0, ue = {}, fe = pe = !1
        }(),
        function callActivatedHooks(e) {
            for (var t = 0; t < e.length; t++) e[t]._inactive = !0, activateChildComponent(e[t], !0)
        }(n),
        function callUpdatedHooks(e) {
            var t = e.length;
            for (; t--;) {
                var n = e[t],
                    r = n.vm;
                r._watcher === n && r._isMounted && !r._isDestroyed && callHook(r, "updated")
            }
        }(r), N && v.devtools && N.emit("flush")
    }
    var ye = 0,
        _e = function Watcher(e, t, n, r, i) {
            this.vm = e, i && (e._watcher = this), e._watchers.push(this), r ? (this.deep = !!r.deep, this.user = !!r.user, this.lazy = !!r.lazy, this.sync = !!r.sync, this.before = r.before) : this.deep = this.user = this.lazy = this.sync = !1, this.cb = n, this.id = ++ye, this.active = !0, this.dirty = this.lazy, this.deps = [], this.newDeps = [], this.depIds = new j, this.newDepIds = new j, this.expression = "", "function" == typeof t ? this.getter = t : (this.getter = function parsePath(e) {
                if (!y.test(e)) {
                    var t = e.split(".");
                    return function(e) {
                        for (var n = 0; n < t.length; n++) {
                            if (!e) return;
                            e = e[t[n]]
                        }
                        return e
                    }
                }
            }(t), this.getter || (this.getter = noop)), this.value = this.lazy ? void 0 : this.get()
        };
    _e.prototype.get = function get() {
        var e;
        pushTarget(this);
        var t = this.vm;
        try {
            e = this.getter.call(t, t)
        } catch (e) {
            if (!this.user) throw e;
            handleError(e, t, 'getter for watcher "' + this.expression + '"')
        } finally {
            this.deep && traverse(e), popTarget(), this.cleanupDeps()
        }
        return e
    }, _e.prototype.addDep = function addDep(e) {
        var t = e.id;
        this.newDepIds.has(t) || (this.newDepIds.add(t), this.newDeps.push(e), this.depIds.has(t) || e.addSub(this))
    }, _e.prototype.cleanupDeps = function cleanupDeps() {
        for (var e = this.deps.length; e--;) {
            var t = this.deps[e];
            this.newDepIds.has(t.id) || t.removeSub(this)
        }
        var n = this.depIds;
        this.depIds = this.newDepIds, this.newDepIds = n, this.newDepIds.clear(), n = this.deps, this.deps = this.newDeps, this.newDeps = n, this.newDeps.length = 0
    }, _e.prototype.update = function update() {
        this.lazy ? this.dirty = !0 : this.sync ? this.run() : function queueWatcher(e) {
            var t = e.id;
            if (null == ue[t]) {
                if (ue[t] = !0, pe) {
                    for (var n = ce.length - 1; n > me && ce[n].id > e.id;) n--;
                    ce.splice(n + 1, 0, e)
                } else ce.push(e);
                fe || (fe = !0, nextTick(flushSchedulerQueue))
            }
        }(this)
    }, _e.prototype.run = function run() {
        if (this.active) {
            var e = this.get();
            if (e !== this.value || isObject(e) || this.deep) {
                var t = this.value;
                if (this.value = e, this.user) try {
                    this.cb.call(this.vm, e, t)
                } catch (e) {
                    handleError(e, this.vm, 'callback for watcher "' + this.expression + '"')
                } else this.cb.call(this.vm, e, t)
            }
        }
    }, _e.prototype.evaluate = function evaluate() {
        this.value = this.get(), this.dirty = !1
    }, _e.prototype.depend = function depend() {
        for (var e = this.deps.length; e--;) this.deps[e].depend()
    }, _e.prototype.teardown = function teardown() {
        if (this.active) {
            this.vm._isBeingDestroyed || remove(this.vm._watchers, this);
            for (var e = this.deps.length; e--;) this.deps[e].removeSub(this);
            this.active = !1
        }
    };
    var be = {
        enumerable: !0,
        configurable: !0,
        get: noop,
        set: noop
    };

    function proxy(e, t, n) {
        be.get = function proxyGetter() {
            return this[t][n]
        }, be.set = function proxySetter(e) {
            this[t][n] = e
        }, Object.defineProperty(e, n, be)
    }

    function initState(e) {
        e._watchers = [];
        var t = e.$options;
        t.props && function initProps(e, t) {
            var n = e.$options.propsData || {},
                r = e._props = {},
                i = e.$options._propKeys = [];
            e.$parent && toggleObserving(!1);
            var loop = function(a) {
                i.push(a);
                var s = validateProp(a, t, n, e);
                defineReactive$$1(r, a, s), a in e || proxy(e, "_props", a)
            };
            for (var a in t) loop(a);
            toggleObserving(!0)
        }(e, t.props), t.methods && function initMethods(e, t) {
            e.$options.props;
            for (var n in t) e[n] = "function" != typeof t[n] ? noop : p(t[n], e)
        }(e, t.methods), t.data ? function initData(e) {
            var t = e.$options.data;
            isPlainObject(t = e._data = "function" == typeof t ? function getData(e, t) {
                pushTarget();
                try {
                    return e.call(t, t)
                } catch (e) {
                    return handleError(e, t, "data()"), {}
                } finally {
                    popTarget()
                }
            }(t, e) : t || {}) || (t = {});
            var n = Object.keys(t),
                r = e.$options.props,
                i = (e.$options.methods, n.length);
            for (; i--;) {
                var a = n[i];
                0, r && hasOwn(r, a) || isReserved(a) || proxy(e, "_data", a)
            }
            observe(t, !0)
        }(e) : observe(e._data = {}, !0), t.computed && function initComputed(e, t) {
            var n = e._computedWatchers = Object.create(null),
                r = isServerRendering();
            for (var i in t) {
                var a = t[i],
                    s = "function" == typeof a ? a : a.get;
                0, r || (n[i] = new _e(e, s || noop, noop, we)), i in e || defineComputed(e, i, a)
            }
        }(e, t.computed), t.watch && t.watch !== O && function initWatch(e, t) {
            for (var n in t) {
                var r = t[n];
                if (Array.isArray(r))
                    for (var i = 0; i < r.length; i++) createWatcher(e, n, r[i]);
                else createWatcher(e, n, r)
            }
        }(e, t.watch)
    }
    var we = {
        lazy: !0
    };

    function defineComputed(e, t, n) {
        var r = !isServerRendering();
        "function" == typeof n ? (be.get = r ? createComputedGetter(t) : createGetterInvoker(n), be.set = noop) : (be.get = n.get ? r && !1 !== n.cache ? createComputedGetter(t) : createGetterInvoker(n.get) : noop, be.set = n.set || noop), Object.defineProperty(e, t, be)
    }

    function createComputedGetter(e) {
        return function computedGetter() {
            var t = this._computedWatchers && this._computedWatchers[e];
            if (t) return t.dirty && t.evaluate(), L.target && t.depend(), t.value
        }
    }

    function createGetterInvoker(e) {
        return function computedGetter() {
            return e.call(this, this)
        }
    }

    function createWatcher(e, t, n, r) {
        return isPlainObject(n) && (r = n, n = n.handler), "string" == typeof n && (n = e[n]), e.$watch(t, n, r)
    }
    var Ce = 0;

    function resolveConstructorOptions(e) {
        var t = e.options;
        if (e.super) {
            var n = resolveConstructorOptions(e.super);
            if (n !== e.superOptions) {
                e.superOptions = n;
                var r = function resolveModifiedOptions(e) {
                    var t, n = e.options,
                        r = e.sealedOptions;
                    for (var i in n) n[i] !== r[i] && (t || (t = {}), t[i] = n[i]);
                    return t
                }(e);
                r && extend(e.extendOptions, r), (t = e.options = mergeOptions(n, e.extendOptions)).name && (t.components[t.name] = e)
            }
        }
        return t
    }

    function Vue(e) {
        this._init(e)
    }

    function initExtend(e) {
        e.cid = 0;
        var t = 1;
        e.extend = function(e) {
            e = e || {};
            var n = this,
                r = n.cid,
                i = e._Ctor || (e._Ctor = {});
            if (i[r]) return i[r];
            var a = e.name || n.options.name;
            var s = function VueComponent(e) {
                this._init(e)
            };
            return (s.prototype = Object.create(n.prototype)).constructor = s, s.cid = t++, s.options = mergeOptions(n.options, e), s.super = n, s.options.props && function initProps$1(e) {
                var t = e.options.props;
                for (var n in t) proxy(e.prototype, "_props", n)
            }(s), s.options.computed && function initComputed$1(e) {
                var t = e.options.computed;
                for (var n in t) defineComputed(e.prototype, n, t[n])
            }(s), s.extend = n.extend, s.mixin = n.mixin, s.use = n.use, m.forEach((function(e) {
                s[e] = n[e]
            })), a && (s.options.components[a] = s), s.superOptions = n.options, s.extendOptions = e, s.sealedOptions = extend({}, s.options), i[r] = s, s
        }
    }

    function getComponentName(e) {
        return e && (e.Ctor.options.name || e.tag)
    }

    function matches(e, t) {
        return Array.isArray(e) ? e.indexOf(t) > -1 : "string" == typeof e ? e.split(",").indexOf(t) > -1 : !!isRegExp(e) && e.test(t)
    }

    function pruneCache(e, t) {
        var n = e.cache,
            r = e.keys,
            i = e._vnode;
        for (var a in n) {
            var s = n[a];
            if (s) {
                var o = getComponentName(s.componentOptions);
                o && !t(o) && pruneCacheEntry(n, a, r, i)
            }
        }
    }

    function pruneCacheEntry(e, t, n, r) {
        var i = e[t];
        !i || r && i.tag === r.tag || i.componentInstance.$destroy(), e[t] = null, remove(n, t)
    }! function initMixin(e) {
        e.prototype._init = function(e) {
            var t = this;
            t._uid = Ce++, t._isVue = !0, e && e._isComponent ? function initInternalComponent(e, t) {
                    var n = e.$options = Object.create(e.constructor.options),
                        r = t._parentVnode;
                    n.parent = t.parent, n._parentVnode = r;
                    var i = r.componentOptions;
                    n.propsData = i.propsData, n._parentListeners = i.listeners, n._renderChildren = i.children, n._componentTag = i.tag, t.render && (n.render = t.render, n.staticRenderFns = t.staticRenderFns)
                }(t, e) : t.$options = mergeOptions(resolveConstructorOptions(t.constructor), e || {}, t), t._renderProxy = t, t._self = t,
                function initLifecycle(e) {
                    var t = e.$options,
                        n = t.parent;
                    if (n && !t.abstract) {
                        for (; n.$options.abstract && n.$parent;) n = n.$parent;
                        n.$children.push(e)
                    }
                    e.$parent = n, e.$root = n ? n.$root : e, e.$children = [], e.$refs = {}, e._watcher = null, e._inactive = null, e._directInactive = !1, e._isMounted = !1, e._isDestroyed = !1, e._isBeingDestroyed = !1
                }(t),
                function initEvents(e) {
                    e._events = Object.create(null), e._hasHookEvent = !1;
                    var t = e.$options._parentListeners;
                    t && updateComponentListeners(e, t)
                }(t),
                function initRender(e) {
                    e._vnode = null, e._staticTrees = null;
                    var t = e.$options,
                        n = e.$vnode = t._parentVnode,
                        i = n && n.context;
                    e.$slots = resolveSlots(t._renderChildren, i), e.$scopedSlots = r, e._c = function(t, n, r, i) {
                        return createElement(e, t, n, r, i, !1)
                    }, e.$createElement = function(t, n, r, i) {
                        return createElement(e, t, n, r, i, !0)
                    };
                    var a = n && n.data;
                    defineReactive$$1(e, "$attrs", a && a.attrs || r, null, !0), defineReactive$$1(e, "$listeners", t._parentListeners || r, null, !0)
                }(t), callHook(t, "beforeCreate"),
                function initInjections(e) {
                    var t = resolveInject(e.$options.inject, e);
                    t && (toggleObserving(!1), Object.keys(t).forEach((function(n) {
                        defineReactive$$1(e, n, t[n])
                    })), toggleObserving(!0))
                }(t), initState(t),
                function initProvide(e) {
                    var t = e.$options.provide;
                    t && (e._provided = "function" == typeof t ? t.call(e) : t)
                }(t), callHook(t, "created"), t.$options.el && t.$mount(t.$options.el)
        }
    }(Vue),
    function stateMixin(e) {
        var t = {
                get: function() {
                    return this._data
                }
            },
            n = {
                get: function() {
                    return this._props
                }
            };
        Object.defineProperty(e.prototype, "$data", t), Object.defineProperty(e.prototype, "$props", n), e.prototype.$set = set, e.prototype.$delete = del, e.prototype.$watch = function(e, t, n) {
            if (isPlainObject(t)) return createWatcher(this, e, t, n);
            (n = n || {}).user = !0;
            var r = new _e(this, e, t, n);
            if (n.immediate) try {
                t.call(this, r.value)
            } catch (e) {
                handleError(e, this, 'callback for immediate watcher "' + r.expression + '"')
            }
            return function unwatchFn() {
                r.teardown()
            }
        }
    }(Vue),
    function eventsMixin(e) {
        var t = /^hook:/;
        e.prototype.$on = function(e, n) {
            var r = this;
            if (Array.isArray(e))
                for (var i = 0, a = e.length; i < a; i++) r.$on(e[i], n);
            else(r._events[e] || (r._events[e] = [])).push(n), t.test(e) && (r._hasHookEvent = !0);
            return r
        }, e.prototype.$once = function(e, t) {
            var n = this;

            function on() {
                n.$off(e, on), t.apply(n, arguments)
            }
            return on.fn = t, n.$on(e, on), n
        }, e.prototype.$off = function(e, t) {
            var n = this;
            if (!arguments.length) return n._events = Object.create(null), n;
            if (Array.isArray(e)) {
                for (var r = 0, i = e.length; r < i; r++) n.$off(e[r], t);
                return n
            }
            var a, s = n._events[e];
            if (!s) return n;
            if (!t) return n._events[e] = null, n;
            for (var o = s.length; o--;)
                if ((a = s[o]) === t || a.fn === t) {
                    s.splice(o, 1);
                    break
                } return n
        }, e.prototype.$emit = function(e) {
            var t = this,
                n = t._events[e];
            if (n) {
                n = n.length > 1 ? toArray(n) : n;
                for (var r = toArray(arguments, 1), i = 'event handler for "' + e + '"', a = 0, s = n.length; a < s; a++) invokeWithErrorHandling(n[a], t, r, t, i)
            }
            return t
        }
    }(Vue),
    function lifecycleMixin(e) {
        e.prototype._update = function(e, t) {
            var n = this,
                r = n.$el,
                i = n._vnode,
                a = setActiveInstance(n);
            n._vnode = e, n.$el = i ? n.__patch__(i, e) : n.__patch__(n.$el, e, t, !1), a(), r && (r.__vue__ = null), n.$el && (n.$el.__vue__ = n), n.$vnode && n.$parent && n.$vnode === n.$parent._vnode && (n.$parent.$el = n.$el)
        }, e.prototype.$forceUpdate = function() {
            this._watcher && this._watcher.update()
        }, e.prototype.$destroy = function() {
            var e = this;
            if (!e._isBeingDestroyed) {
                callHook(e, "beforeDestroy"), e._isBeingDestroyed = !0;
                var t = e.$parent;
                !t || t._isBeingDestroyed || e.$options.abstract || remove(t.$children, e), e._watcher && e._watcher.teardown();
                for (var n = e._watchers.length; n--;) e._watchers[n].teardown();
                e._data.__ob__ && e._data.__ob__.vmCount--, e._isDestroyed = !0, e.__patch__(e._vnode, null), callHook(e, "destroyed"), e.$off(), e.$el && (e.$el.__vue__ = null), e.$vnode && (e.$vnode.parent = null)
            }
        }
    }(Vue),
    function renderMixin(e) {
        installRenderHelpers(e.prototype), e.prototype.$nextTick = function(e) {
            return nextTick(e, this)
        }, e.prototype._render = function() {
            var e, t = this,
                n = t.$options,
                r = n.render,
                i = n._parentVnode;
            i && (t.$scopedSlots = normalizeScopedSlots(i.data.scopedSlots, t.$slots, t.$scopedSlots)), t.$vnode = i;
            try {
                oe = t, e = r.call(t._renderProxy, t.$createElement)
            } catch (n) {
                handleError(n, t, "render"), e = t._vnode
            } finally {
                oe = null
            }
            return Array.isArray(e) && 1 === e.length && (e = e[0]), e instanceof U || (e = createEmptyVNode()), e.parent = i, e
        }
    }(Vue);
    var xe = [String, RegExp, Array],
        ke = {
            KeepAlive: {
                name: "keep-alive",
                abstract: !0,
                props: {
                    include: xe,
                    exclude: xe,
                    max: [String, Number]
                },
                created: function created() {
                    this.cache = Object.create(null), this.keys = []
                },
                destroyed: function destroyed() {
                    for (var e in this.cache) pruneCacheEntry(this.cache, e, this.keys)
                },
                mounted: function mounted() {
                    var e = this;
                    this.$watch("include", (function(t) {
                        pruneCache(e, (function(e) {
                            return matches(t, e)
                        }))
                    })), this.$watch("exclude", (function(t) {
                        pruneCache(e, (function(e) {
                            return !matches(t, e)
                        }))
                    }))
                },
                render: function render() {
                    var e = this.$slots.default,
                        t = getFirstComponentChild(e),
                        n = t && t.componentOptions;
                    if (n) {
                        var r = getComponentName(n),
                            i = this.include,
                            a = this.exclude;
                        if (i && (!r || !matches(i, r)) || a && r && matches(a, r)) return t;
                        var s = this.cache,
                            o = this.keys,
                            l = null == t.key ? n.Ctor.cid + (n.tag ? "::" + n.tag : "") : t.key;
                        s[l] ? (t.componentInstance = s[l].componentInstance, remove(o, l), o.push(l)) : (s[l] = t, o.push(l), this.max && o.length > parseInt(this.max) && pruneCacheEntry(s, o[0], o, this._vnode)), t.data.keepAlive = !0
                    }
                    return t || e && e[0]
                }
            }
        };
    ! function initGlobalAPI(e) {
        var t = {
            get: function() {
                return v
            }
        };
        Object.defineProperty(e, "config", t), e.util = {
                warn: I,
                extend: extend,
                mergeOptions: mergeOptions,
                defineReactive: defineReactive$$1
            }, e.set = set, e.delete = del, e.nextTick = nextTick, e.observable = function(e) {
                return observe(e), e
            }, e.options = Object.create(null), m.forEach((function(t) {
                e.options[t + "s"] = Object.create(null)
            })), e.options._base = e, extend(e.options.components, ke),
            function initUse(e) {
                e.use = function(e) {
                    var t = this._installedPlugins || (this._installedPlugins = []);
                    if (t.indexOf(e) > -1) return this;
                    var n = toArray(arguments, 1);
                    return n.unshift(this), "function" == typeof e.install ? e.install.apply(e, n) : "function" == typeof e && e.apply(null, n), t.push(e), this
                }
            }(e),
            function initMixin$1(e) {
                e.mixin = function(e) {
                    return this.options = mergeOptions(this.options, e), this
                }
            }(e), initExtend(e),
            function initAssetRegisters(e) {
                m.forEach((function(t) {
                    e[t] = function(e, n) {
                        return n ? ("component" === t && isPlainObject(n) && (n.name = n.name || e, n = this.options._base.extend(n)), "directive" === t && "function" == typeof n && (n = {
                            bind: n,
                            update: n
                        }), this.options[t + "s"][e] = n, n) : this.options[t + "s"][e]
                    }
                }))
            }(e)
    }(Vue), Object.defineProperty(Vue.prototype, "$isServer", {
        get: isServerRendering
    }), Object.defineProperty(Vue.prototype, "$ssrContext", {
        get: function get() {
            return this.$vnode && this.$vnode.ssrContext
        }
    }), Object.defineProperty(Vue, "FunctionalRenderContext", {
        value: FunctionalRenderContext
    }), Vue.version = "2.6.12";
    var $e = makeMap("style,class"),
        Se = makeMap("input,textarea,option,select,progress"),
        mustUseProp = function(e, t, n) {
            return "value" === n && Se(e) && "button" !== t || "selected" === n && "option" === e || "checked" === n && "input" === e || "muted" === n && "video" === e
        },
        Ae = makeMap("contenteditable,draggable,spellcheck"),
        De = makeMap("events,caret,typing,plaintext-only"),
        Te = makeMap("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,translate,truespeed,typemustmatch,visible"),
        Oe = "http://www.w3.org/1999/xlink",
        isXlink = function(e) {
            return ":" === e.charAt(5) && "xlink" === e.slice(0, 5)
        },
        getXlinkProp = function(e) {
            return isXlink(e) ? e.slice(6, e.length) : ""
        },
        isFalsyAttrValue = function(e) {
            return null == e || !1 === e
        };

    function genClassForVnode(e) {
        for (var t = e.data, n = e, r = e; isDef(r.componentInstance);)(r = r.componentInstance._vnode) && r.data && (t = mergeClassData(r.data, t));
        for (; isDef(n = n.parent);) n && n.data && (t = mergeClassData(t, n.data));
        return function renderClass(e, t) {
            if (isDef(e) || isDef(t)) return concat(e, stringifyClass(t));
            return ""
        }(t.staticClass, t.class)
    }

    function mergeClassData(e, t) {
        return {
            staticClass: concat(e.staticClass, t.staticClass),
            class: isDef(e.class) ? [e.class, t.class] : t.class
        }
    }

    function concat(e, t) {
        return e ? t ? e + " " + t : e : t || ""
    }

    function stringifyClass(e) {
        return Array.isArray(e) ? function stringifyArray(e) {
            for (var t, n = "", r = 0, i = e.length; r < i; r++) isDef(t = stringifyClass(e[r])) && "" !== t && (n && (n += " "), n += t);
            return n
        }(e) : isObject(e) ? function stringifyObject(e) {
            var t = "";
            for (var n in e) e[n] && (t && (t += " "), t += n);
            return t
        }(e) : "string" == typeof e ? e : ""
    }
    var Ee = {
            svg: "http://www.w3.org/2000/svg",
            math: "http://www.w3.org/1998/Math/MathML"
        },
        Re = makeMap("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot"),
        Ne = makeMap("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view", !0),
        isReservedTag = function(e) {
            return Re(e) || Ne(e)
        };

    function getTagNamespace(e) {
        return Ne(e) ? "svg" : "math" === e ? "math" : void 0
    }
    var je = Object.create(null);
    var Fe = makeMap("text,number,password,search,email,tel,url");

    function query(e) {
        if ("string" == typeof e) {
            var t = document.querySelector(e);
            return t || document.createElement("div")
        }
        return e
    }
    var Ie = Object.freeze({
            createElement: function createElement$1(e, t) {
                var n = document.createElement(e);
                return "select" !== e || t.data && t.data.attrs && void 0 !== t.data.attrs.multiple && n.setAttribute("multiple", "multiple"), n
            },
            createElementNS: function createElementNS(e, t) {
                return document.createElementNS(Ee[e], t)
            },
            createTextNode: function createTextNode(e) {
                return document.createTextNode(e)
            },
            createComment: function createComment(e) {
                return document.createComment(e)
            },
            insertBefore: function insertBefore(e, t, n) {
                e.insertBefore(t, n)
            },
            removeChild: function removeChild(e, t) {
                e.removeChild(t)
            },
            appendChild: function appendChild(e, t) {
                e.appendChild(t)
            },
            parentNode: function parentNode(e) {
                return e.parentNode
            },
            nextSibling: function nextSibling(e) {
                return e.nextSibling
            },
            tagName: function tagName(e) {
                return e.tagName
            },
            setTextContent: function setTextContent(e, t) {
                e.textContent = t
            },
            setStyleScope: function setStyleScope(e, t) {
                e.setAttribute(t, "")
            }
        }),
        Pe = {
            create: function create(e, t) {
                registerRef(t)
            },
            update: function update(e, t) {
                e.data.ref !== t.data.ref && (registerRef(e, !0), registerRef(t))
            },
            destroy: function destroy(e) {
                registerRef(e, !0)
            }
        };

    function registerRef(e, t) {
        var n = e.data.ref;
        if (isDef(n)) {
            var r = e.context,
                i = e.componentInstance || e.elm,
                a = r.$refs;
            t ? Array.isArray(a[n]) ? remove(a[n], i) : a[n] === i && (a[n] = void 0) : e.data.refInFor ? Array.isArray(a[n]) ? a[n].indexOf(i) < 0 && a[n].push(i) : a[n] = [i] : a[n] = i
        }
    }
    var Le = new U("", {}, []),
        Me = ["create", "activate", "update", "remove", "destroy"];

    function sameVnode(e, t) {
        return e.key === t.key && (e.tag === t.tag && e.isComment === t.isComment && isDef(e.data) === isDef(t.data) && function sameInputType(e, t) {
            if ("input" !== e.tag) return !0;
            var n, r = isDef(n = e.data) && isDef(n = n.attrs) && n.type,
                i = isDef(n = t.data) && isDef(n = n.attrs) && n.type;
            return r === i || Fe(r) && Fe(i)
        }(e, t) || isTrue(e.isAsyncPlaceholder) && e.asyncFactory === t.asyncFactory && isUndef(t.asyncFactory.error))
    }

    function createKeyToOldIdx(e, t, n) {
        var r, i, a = {};
        for (r = t; r <= n; ++r) isDef(i = e[r].key) && (a[i] = r);
        return a
    }
    var Ue = {
        create: updateDirectives,
        update: updateDirectives,
        destroy: function unbindDirectives(e) {
            updateDirectives(e, Le)
        }
    };

    function updateDirectives(e, t) {
        (e.data.directives || t.data.directives) && function _update(e, t) {
            var n, r, i, a = e === Le,
                s = t === Le,
                o = normalizeDirectives$1(e.data.directives, e.context),
                l = normalizeDirectives$1(t.data.directives, t.context),
                c = [],
                d = [];
            for (n in l) r = o[n], i = l[n], r ? (i.oldValue = r.value, i.oldArg = r.arg, callHook$1(i, "update", t, e), i.def && i.def.componentUpdated && d.push(i)) : (callHook$1(i, "bind", t, e), i.def && i.def.inserted && c.push(i));
            if (c.length) {
                var callInsert = function() {
                    for (var n = 0; n < c.length; n++) callHook$1(c[n], "inserted", t, e)
                };
                a ? mergeVNodeHook(t, "insert", callInsert) : callInsert()
            }
            d.length && mergeVNodeHook(t, "postpatch", (function() {
                for (var n = 0; n < d.length; n++) callHook$1(d[n], "componentUpdated", t, e)
            }));
            if (!a)
                for (n in o) l[n] || callHook$1(o[n], "unbind", e, e, s)
        }(e, t)
    }
    var Be = Object.create(null);

    function normalizeDirectives$1(e, t) {
        var n, r, i = Object.create(null);
        if (!e) return i;
        for (n = 0; n < e.length; n++)(r = e[n]).modifiers || (r.modifiers = Be), i[getRawDirName(r)] = r, r.def = resolveAsset(t.$options, "directives", r.name);
        return i
    }

    function getRawDirName(e) {
        return e.rawName || e.name + "." + Object.keys(e.modifiers || {}).join(".")
    }

    function callHook$1(e, t, n, r, i) {
        var a = e.def && e.def[t];
        if (a) try {
            a(n.elm, e, n, r, i)
        } catch (r) {
            handleError(r, n.context, "directive " + e.name + " " + t + " hook")
        }
    }
    var He = [Pe, Ue];

    function updateAttrs(e, t) {
        var n = t.componentOptions;
        if (!(isDef(n) && !1 === n.Ctor.options.inheritAttrs || isUndef(e.data.attrs) && isUndef(t.data.attrs))) {
            var r, i, a = t.elm,
                s = e.data.attrs || {},
                o = t.data.attrs || {};
            for (r in isDef(o.__ob__) && (o = t.data.attrs = extend({}, o)), o) i = o[r], s[r] !== i && setAttr(a, r, i);
            for (r in ($ || A) && o.value !== s.value && setAttr(a, "value", o.value), s) isUndef(o[r]) && (isXlink(r) ? a.removeAttributeNS(Oe, getXlinkProp(r)) : Ae(r) || a.removeAttribute(r))
        }
    }

    function setAttr(e, t, n) {
        e.tagName.indexOf("-") > -1 ? baseSetAttr(e, t, n) : Te(t) ? isFalsyAttrValue(n) ? e.removeAttribute(t) : (n = "allowfullscreen" === t && "EMBED" === e.tagName ? "true" : t, e.setAttribute(t, n)) : Ae(t) ? e.setAttribute(t, function(e, t) {
            return isFalsyAttrValue(t) || "false" === t ? "false" : "contenteditable" === e && De(t) ? t : "true"
        }(t, n)) : isXlink(t) ? isFalsyAttrValue(n) ? e.removeAttributeNS(Oe, getXlinkProp(t)) : e.setAttributeNS(Oe, t, n) : baseSetAttr(e, t, n)
    }

    function baseSetAttr(e, t, n) {
        if (isFalsyAttrValue(n)) e.removeAttribute(t);
        else {
            if ($ && !S && "TEXTAREA" === e.tagName && "placeholder" === t && "" !== n && !e.__ieph) {
                var blocker = function(t) {
                    t.stopImmediatePropagation(), e.removeEventListener("input", blocker)
                };
                e.addEventListener("input", blocker), e.__ieph = !0
            }
            e.setAttribute(t, n)
        }
    }
    var Ve = {
        create: updateAttrs,
        update: updateAttrs
    };

    function updateClass(e, t) {
        var n = t.elm,
            r = t.data,
            i = e.data;
        if (!(isUndef(r.staticClass) && isUndef(r.class) && (isUndef(i) || isUndef(i.staticClass) && isUndef(i.class)))) {
            var a = genClassForVnode(t),
                s = n._transitionClasses;
            isDef(s) && (a = concat(a, stringifyClass(s))), a !== n._prevClass && (n.setAttribute("class", a), n._prevClass = a)
        }
    }
    var qe, ze, We, Ge, Ke, Je, Xe = {
            create: updateClass,
            update: updateClass
        },
        Ye = /[\w).+\-_$\]]/;

    function parseFilters(e) {
        var t, n, r, i, a, s = !1,
            o = !1,
            l = !1,
            c = !1,
            d = 0,
            u = 0,
            f = 0,
            p = 0;
        for (r = 0; r < e.length; r++)
            if (n = t, t = e.charCodeAt(r), s) 39 === t && 92 !== n && (s = !1);
            else if (o) 34 === t && 92 !== n && (o = !1);
        else if (l) 96 === t && 92 !== n && (l = !1);
        else if (c) 47 === t && 92 !== n && (c = !1);
        else if (124 !== t || 124 === e.charCodeAt(r + 1) || 124 === e.charCodeAt(r - 1) || d || u || f) {
            switch (t) {
                case 34:
                    o = !0;
                    break;
                case 39:
                    s = !0;
                    break;
                case 96:
                    l = !0;
                    break;
                case 40:
                    f++;
                    break;
                case 41:
                    f--;
                    break;
                case 91:
                    u++;
                    break;
                case 93:
                    u--;
                    break;
                case 123:
                    d++;
                    break;
                case 125:
                    d--
            }
            if (47 === t) {
                for (var m = r - 1, h = void 0; m >= 0 && " " === (h = e.charAt(m)); m--);
                h && Ye.test(h) || (c = !0)
            }
        } else void 0 === i ? (p = r + 1, i = e.slice(0, r).trim()) : pushFilter();

        function pushFilter() {
            (a || (a = [])).push(e.slice(p, r).trim()), p = r + 1
        }
        if (void 0 === i ? i = e.slice(0, r).trim() : 0 !== p && pushFilter(), a)
            for (r = 0; r < a.length; r++) i = wrapFilter(i, a[r]);
        return i
    }

    function wrapFilter(e, t) {
        var n = t.indexOf("(");
        if (n < 0) return '_f("' + t + '")(' + e + ")";
        var r = t.slice(0, n),
            i = t.slice(n + 1);
        return '_f("' + r + '")(' + e + (")" !== i ? "," + i : i)
    }

    function baseWarn(e, t) {
        console.error("[Vue compiler]: " + e)
    }

    function pluckModuleFunction(e, t) {
        return e ? e.map((function(e) {
            return e[t]
        })).filter((function(e) {
            return e
        })) : []
    }

    function addProp(e, t, n, r, i) {
        (e.props || (e.props = [])).push(rangeSetItem({
            name: t,
            value: n,
            dynamic: i
        }, r)), e.plain = !1
    }

    function addAttr(e, t, n, r, i) {
        (i ? e.dynamicAttrs || (e.dynamicAttrs = []) : e.attrs || (e.attrs = [])).push(rangeSetItem({
            name: t,
            value: n,
            dynamic: i
        }, r)), e.plain = !1
    }

    function addRawAttr(e, t, n, r) {
        e.attrsMap[t] = n, e.attrsList.push(rangeSetItem({
            name: t,
            value: n
        }, r))
    }

    function addDirective(e, t, n, r, i, a, s, o) {
        (e.directives || (e.directives = [])).push(rangeSetItem({
            name: t,
            rawName: n,
            value: r,
            arg: i,
            isDynamicArg: a,
            modifiers: s
        }, o)), e.plain = !1
    }

    function prependModifierMarker(e, t, n) {
        return n ? "_p(" + t + ',"' + e + '")' : e + t
    }

    function addHandler(e, t, n, i, a, s, o, l) {
        var c;
        (i = i || r).right ? l ? t = "(" + t + ")==='click'?'contextmenu':(" + t + ")" : "click" === t && (t = "contextmenu", delete i.right) : i.middle && (l ? t = "(" + t + ")==='click'?'mouseup':(" + t + ")" : "click" === t && (t = "mouseup")), i.capture && (delete i.capture, t = prependModifierMarker("!", t, l)), i.once && (delete i.once, t = prependModifierMarker("~", t, l)), i.passive && (delete i.passive, t = prependModifierMarker("&", t, l)), i.native ? (delete i.native, c = e.nativeEvents || (e.nativeEvents = {})) : c = e.events || (e.events = {});
        var d = rangeSetItem({
            value: n.trim(),
            dynamic: l
        }, o);
        i !== r && (d.modifiers = i);
        var u = c[t];
        Array.isArray(u) ? a ? u.unshift(d) : u.push(d) : c[t] = u ? a ? [d, u] : [u, d] : d, e.plain = !1
    }

    function getBindingAttr(e, t, n) {
        var r = getAndRemoveAttr(e, ":" + t) || getAndRemoveAttr(e, "v-bind:" + t);
        if (null != r) return parseFilters(r);
        if (!1 !== n) {
            var i = getAndRemoveAttr(e, t);
            if (null != i) return JSON.stringify(i)
        }
    }

    function getAndRemoveAttr(e, t, n) {
        var r;
        if (null != (r = e.attrsMap[t]))
            for (var i = e.attrsList, a = 0, s = i.length; a < s; a++)
                if (i[a].name === t) {
                    i.splice(a, 1);
                    break
                } return n && delete e.attrsMap[t], r
    }

    function getAndRemoveAttrByRegex(e, t) {
        for (var n = e.attrsList, r = 0, i = n.length; r < i; r++) {
            var a = n[r];
            if (t.test(a.name)) return n.splice(r, 1), a
        }
    }

    function rangeSetItem(e, t) {
        return t && (null != t.start && (e.start = t.start), null != t.end && (e.end = t.end)), e
    }

    function genComponentModel(e, t, n) {
        var r = n || {},
            i = r.number,
            a = "$$v";
        r.trim && (a = "(typeof $$v === 'string'? $$v.trim(): $$v)"), i && (a = "_n(" + a + ")");
        var s = genAssignmentCode(t, a);
        e.model = {
            value: "(" + t + ")",
            expression: JSON.stringify(t),
            callback: "function ($$v) {" + s + "}"
        }
    }

    function genAssignmentCode(e, t) {
        var n = function parseModel(e) {
            if (e = e.trim(), qe = e.length, e.indexOf("[") < 0 || e.lastIndexOf("]") < qe - 1) return (Ge = e.lastIndexOf(".")) > -1 ? {
                exp: e.slice(0, Ge),
                key: '"' + e.slice(Ge + 1) + '"'
            } : {
                exp: e,
                key: null
            };
            ze = e, Ge = Ke = Je = 0;
            for (; !eof();) isStringStart(We = next()) ? parseString(We) : 91 === We && parseBracket(We);
            return {
                exp: e.slice(0, Ke),
                key: e.slice(Ke + 1, Je)
            }
        }(e);
        return null === n.key ? e + "=" + t : "$set(" + n.exp + ", " + n.key + ", " + t + ")"
    }

    function next() {
        return ze.charCodeAt(++Ge)
    }

    function eof() {
        return Ge >= qe
    }

    function isStringStart(e) {
        return 34 === e || 39 === e
    }

    function parseBracket(e) {
        var t = 1;
        for (Ke = Ge; !eof();)
            if (isStringStart(e = next())) parseString(e);
            else if (91 === e && t++, 93 === e && t--, 0 === t) {
            Je = Ge;
            break
        }
    }

    function parseString(e) {
        for (var t = e; !eof() && (e = next()) !== t;);
    }
    var Ze;

    function createOnceHandler$1(e, t, n) {
        var r = Ze;
        return function onceHandler() {
            var i = t.apply(null, arguments);
            null !== i && remove$2(e, onceHandler, n, r)
        }
    }
    var Qe = J && !(T && Number(T[1]) <= 53);

    function add$1(e, t, n, r) {
        if (Qe) {
            var i = he,
                a = t;
            t = a._wrapper = function(e) {
                if (e.target === e.currentTarget || e.timeStamp >= i || e.timeStamp <= 0 || e.target.ownerDocument !== document) return a.apply(this, arguments)
            }
        }
        Ze.addEventListener(e, t, E ? {
            capture: n,
            passive: r
        } : n)
    }

    function remove$2(e, t, n, r) {
        (r || Ze).removeEventListener(e, t._wrapper || t, n)
    }

    function updateDOMListeners(e, t) {
        if (!isUndef(e.data.on) || !isUndef(t.data.on)) {
            var n = t.data.on || {},
                r = e.data.on || {};
            Ze = t.elm,
                function normalizeEvents(e) {
                    if (isDef(e.__r)) {
                        var t = $ ? "change" : "input";
                        e[t] = [].concat(e.__r, e[t] || []), delete e.__r
                    }
                    isDef(e.__c) && (e.change = [].concat(e.__c, e.change || []), delete e.__c)
                }(n), updateListeners(n, r, add$1, remove$2, createOnceHandler$1, t.context), Ze = void 0
        }
    }
    var et, tt = {
        create: updateDOMListeners,
        update: updateDOMListeners
    };

    function updateDOMProps(e, t) {
        if (!isUndef(e.data.domProps) || !isUndef(t.data.domProps)) {
            var n, r, i = t.elm,
                a = e.data.domProps || {},
                s = t.data.domProps || {};
            for (n in isDef(s.__ob__) && (s = t.data.domProps = extend({}, s)), a) n in s || (i[n] = "");
            for (n in s) {
                if (r = s[n], "textContent" === n || "innerHTML" === n) {
                    if (t.children && (t.children.length = 0), r === a[n]) continue;
                    1 === i.childNodes.length && i.removeChild(i.childNodes[0])
                }
                if ("value" === n && "PROGRESS" !== i.tagName) {
                    i._value = r;
                    var o = isUndef(r) ? "" : String(r);
                    shouldUpdateValue(i, o) && (i.value = o)
                } else if ("innerHTML" === n && Ne(i.tagName) && isUndef(i.innerHTML)) {
                    (et = et || document.createElement("div")).innerHTML = "<svg>" + r + "</svg>";
                    for (var l = et.firstChild; i.firstChild;) i.removeChild(i.firstChild);
                    for (; l.firstChild;) i.appendChild(l.firstChild)
                } else if (r !== a[n]) try {
                    i[n] = r
                } catch (e) {}
            }
        }
    }

    function shouldUpdateValue(e, t) {
        return !e.composing && ("OPTION" === e.tagName || function isNotInFocusAndDirty(e, t) {
            var n = !0;
            try {
                n = document.activeElement !== e
            } catch (e) {}
            return n && e.value !== t
        }(e, t) || function isDirtyWithModifiers(e, t) {
            var n = e.value,
                r = e._vModifiers;
            if (isDef(r)) {
                if (r.number) return toNumber(n) !== toNumber(t);
                if (r.trim) return n.trim() !== t.trim()
            }
            return n !== t
        }(e, t))
    }
    var nt = {
            create: updateDOMProps,
            update: updateDOMProps
        },
        rt = cached((function(e) {
            var t = {},
                n = /:(.+)/;
            return e.split(/;(?![^(]*\))/g).forEach((function(e) {
                if (e) {
                    var r = e.split(n);
                    r.length > 1 && (t[r[0].trim()] = r[1].trim())
                }
            })), t
        }));

    function normalizeStyleData(e) {
        var t = normalizeStyleBinding(e.style);
        return e.staticStyle ? extend(e.staticStyle, t) : t
    }

    function normalizeStyleBinding(e) {
        return Array.isArray(e) ? toObject(e) : "string" == typeof e ? rt(e) : e
    }
    var it, at = /^--/,
        st = /\s*!important$/,
        setProp = function(e, t, n) {
            if (at.test(t)) e.style.setProperty(t, n);
            else if (st.test(n)) e.style.setProperty(f(t), n.replace(st, ""), "important");
            else {
                var r = lt(t);
                if (Array.isArray(n))
                    for (var i = 0, a = n.length; i < a; i++) e.style[r] = n[i];
                else e.style[r] = n
            }
        },
        ot = ["Webkit", "Moz", "ms"],
        lt = cached((function(e) {
            if (it = it || document.createElement("div").style, "filter" !== (e = c(e)) && e in it) return e;
            for (var t = e.charAt(0).toUpperCase() + e.slice(1), n = 0; n < ot.length; n++) {
                var r = ot[n] + t;
                if (r in it) return r
            }
        }));

    function updateStyle(e, t) {
        var n = t.data,
            r = e.data;
        if (!(isUndef(n.staticStyle) && isUndef(n.style) && isUndef(r.staticStyle) && isUndef(r.style))) {
            var i, a, s = t.elm,
                o = r.staticStyle,
                l = r.normalizedStyle || r.style || {},
                c = o || l,
                d = normalizeStyleBinding(t.data.style) || {};
            t.data.normalizedStyle = isDef(d.__ob__) ? extend({}, d) : d;
            var u = function getStyle(e, t) {
                var n, r = {};
                if (t)
                    for (var i = e; i.componentInstance;)(i = i.componentInstance._vnode) && i.data && (n = normalizeStyleData(i.data)) && extend(r, n);
                (n = normalizeStyleData(e.data)) && extend(r, n);
                for (var a = e; a = a.parent;) a.data && (n = normalizeStyleData(a.data)) && extend(r, n);
                return r
            }(t, !0);
            for (a in c) isUndef(u[a]) && setProp(s, a, "");
            for (a in u)(i = u[a]) !== c[a] && setProp(s, a, null == i ? "" : i)
        }
    }
    var ct = {
            create: updateStyle,
            update: updateStyle
        },
        dt = /\s+/;

    function addClass(e, t) {
        if (t && (t = t.trim()))
            if (e.classList) t.indexOf(" ") > -1 ? t.split(dt).forEach((function(t) {
                return e.classList.add(t)
            })) : e.classList.add(t);
            else {
                var n = " " + (e.getAttribute("class") || "") + " ";
                n.indexOf(" " + t + " ") < 0 && e.setAttribute("class", (n + t).trim())
            }
    }

    function removeClass(e, t) {
        if (t && (t = t.trim()))
            if (e.classList) t.indexOf(" ") > -1 ? t.split(dt).forEach((function(t) {
                return e.classList.remove(t)
            })) : e.classList.remove(t), e.classList.length || e.removeAttribute("class");
            else {
                for (var n = " " + (e.getAttribute("class") || "") + " ", r = " " + t + " "; n.indexOf(r) >= 0;) n = n.replace(r, " ");
                (n = n.trim()) ? e.setAttribute("class", n): e.removeAttribute("class")
            }
    }

    function resolveTransition(e) {
        if (e) {
            if ("object" == typeof e) {
                var t = {};
                return !1 !== e.css && extend(t, ut(e.name || "v")), extend(t, e), t
            }
            return "string" == typeof e ? ut(e) : void 0
        }
    }
    var ut = cached((function(e) {
            return {
                enterClass: e + "-enter",
                enterToClass: e + "-enter-to",
                enterActiveClass: e + "-enter-active",
                leaveClass: e + "-leave",
                leaveToClass: e + "-leave-to",
                leaveActiveClass: e + "-leave-active"
            }
        })),
        ft = w && !S,
        pt = "transition",
        mt = "transitionend",
        ht = "animation",
        vt = "animationend";
    ft && (void 0 === window.ontransitionend && void 0 !== window.onwebkittransitionend && (pt = "WebkitTransition", mt = "webkitTransitionEnd"), void 0 === window.onanimationend && void 0 !== window.onwebkitanimationend && (ht = "WebkitAnimation", vt = "webkitAnimationEnd"));
    var gt = w ? window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : setTimeout : function(e) {
        return e()
    };

    function nextFrame(e) {
        gt((function() {
            gt(e)
        }))
    }

    function addTransitionClass(e, t) {
        var n = e._transitionClasses || (e._transitionClasses = []);
        n.indexOf(t) < 0 && (n.push(t), addClass(e, t))
    }

    function removeTransitionClass(e, t) {
        e._transitionClasses && remove(e._transitionClasses, t), removeClass(e, t)
    }

    function whenTransitionEnds(e, t, n) {
        var r = getTransitionInfo(e, t),
            i = r.type,
            a = r.timeout,
            s = r.propCount;
        if (!i) return n();
        var o = "transition" === i ? mt : vt,
            l = 0,
            end = function() {
                e.removeEventListener(o, onEnd), n()
            },
            onEnd = function(t) {
                t.target === e && ++l >= s && end()
            };
        setTimeout((function() {
            l < s && end()
        }), a + 1), e.addEventListener(o, onEnd)
    }
    var yt = /\b(transform|all)(,|$)/;

    function getTransitionInfo(e, t) {
        var n, r = window.getComputedStyle(e),
            i = (r[pt + "Delay"] || "").split(", "),
            a = (r[pt + "Duration"] || "").split(", "),
            s = getTimeout(i, a),
            o = (r[ht + "Delay"] || "").split(", "),
            l = (r[ht + "Duration"] || "").split(", "),
            c = getTimeout(o, l),
            d = 0,
            u = 0;
        return "transition" === t ? s > 0 && (n = "transition", d = s, u = a.length) : "animation" === t ? c > 0 && (n = "animation", d = c, u = l.length) : u = (n = (d = Math.max(s, c)) > 0 ? s > c ? "transition" : "animation" : null) ? "transition" === n ? a.length : l.length : 0, {
            type: n,
            timeout: d,
            propCount: u,
            hasTransform: "transition" === n && yt.test(r[pt + "Property"])
        }
    }

    function getTimeout(e, t) {
        for (; e.length < t.length;) e = e.concat(e);
        return Math.max.apply(null, t.map((function(t, n) {
            return toMs(t) + toMs(e[n])
        })))
    }

    function toMs(e) {
        return 1e3 * Number(e.slice(0, -1).replace(",", "."))
    }

    function enter(e, t) {
        var n = e.elm;
        isDef(n._leaveCb) && (n._leaveCb.cancelled = !0, n._leaveCb());
        var r = resolveTransition(e.data.transition);
        if (!isUndef(r) && !isDef(n._enterCb) && 1 === n.nodeType) {
            for (var i = r.css, a = r.type, s = r.enterClass, o = r.enterToClass, l = r.enterActiveClass, c = r.appearClass, d = r.appearToClass, u = r.appearActiveClass, f = r.beforeEnter, p = r.enter, m = r.afterEnter, h = r.enterCancelled, v = r.beforeAppear, g = r.appear, y = r.afterAppear, _ = r.appearCancelled, b = r.duration, w = le, C = le.$vnode; C && C.parent;) w = C.context, C = C.parent;
            var x = !w._isMounted || !e.isRootInsert;
            if (!x || g || "" === g) {
                var k = x && c ? c : s,
                    $ = x && u ? u : l,
                    A = x && d ? d : o,
                    D = x && v || f,
                    T = x && "function" == typeof g ? g : p,
                    O = x && y || m,
                    E = x && _ || h,
                    R = toNumber(isObject(b) ? b.enter : b);
                0;
                var N = !1 !== i && !S,
                    j = getHookArgumentsLength(T),
                    F = n._enterCb = once((function() {
                        N && (removeTransitionClass(n, A), removeTransitionClass(n, $)), F.cancelled ? (N && removeTransitionClass(n, k), E && E(n)) : O && O(n), n._enterCb = null
                    }));
                e.data.show || mergeVNodeHook(e, "insert", (function() {
                    var t = n.parentNode,
                        r = t && t._pending && t._pending[e.key];
                    r && r.tag === e.tag && r.elm._leaveCb && r.elm._leaveCb(), T && T(n, F)
                })), D && D(n), N && (addTransitionClass(n, k), addTransitionClass(n, $), nextFrame((function() {
                    removeTransitionClass(n, k), F.cancelled || (addTransitionClass(n, A), j || (isValidDuration(R) ? setTimeout(F, R) : whenTransitionEnds(n, a, F)))
                }))), e.data.show && (t && t(), T && T(n, F)), N || j || F()
            }
        }
    }

    function leave(e, t) {
        var n = e.elm;
        isDef(n._enterCb) && (n._enterCb.cancelled = !0, n._enterCb());
        var r = resolveTransition(e.data.transition);
        if (isUndef(r) || 1 !== n.nodeType) return t();
        if (!isDef(n._leaveCb)) {
            var i = r.css,
                a = r.type,
                s = r.leaveClass,
                o = r.leaveToClass,
                l = r.leaveActiveClass,
                c = r.beforeLeave,
                d = r.leave,
                u = r.afterLeave,
                f = r.leaveCancelled,
                p = r.delayLeave,
                m = r.duration,
                h = !1 !== i && !S,
                v = getHookArgumentsLength(d),
                g = toNumber(isObject(m) ? m.leave : m);
            0;
            var y = n._leaveCb = once((function() {
                n.parentNode && n.parentNode._pending && (n.parentNode._pending[e.key] = null), h && (removeTransitionClass(n, o), removeTransitionClass(n, l)), y.cancelled ? (h && removeTransitionClass(n, s), f && f(n)) : (t(), u && u(n)), n._leaveCb = null
            }));
            p ? p(performLeave) : performLeave()
        }

        function performLeave() {
            y.cancelled || (!e.data.show && n.parentNode && ((n.parentNode._pending || (n.parentNode._pending = {}))[e.key] = e), c && c(n), h && (addTransitionClass(n, s), addTransitionClass(n, l), nextFrame((function() {
                removeTransitionClass(n, s), y.cancelled || (addTransitionClass(n, o), v || (isValidDuration(g) ? setTimeout(y, g) : whenTransitionEnds(n, a, y)))
            }))), d && d(n, y), h || v || y())
        }
    }

    function isValidDuration(e) {
        return "number" == typeof e && !isNaN(e)
    }

    function getHookArgumentsLength(e) {
        if (isUndef(e)) return !1;
        var t = e.fns;
        return isDef(t) ? getHookArgumentsLength(Array.isArray(t) ? t[0] : t) : (e._length || e.length) > 1
    }

    function _enter(e, t) {
        !0 !== t.data.show && enter(t)
    }
    var _t = function createPatchFunction(e) {
        var t, n, r = {},
            i = e.modules,
            a = e.nodeOps;
        for (t = 0; t < Me.length; ++t)
            for (r[Me[t]] = [], n = 0; n < i.length; ++n) isDef(i[n][Me[t]]) && r[Me[t]].push(i[n][Me[t]]);

        function removeNode(e) {
            var t = a.parentNode(e);
            isDef(t) && a.removeChild(t, e)
        }

        function createElm(e, t, n, i, s, o, l) {
            if (isDef(e.elm) && isDef(o) && (e = o[l] = cloneVNode(e)), e.isRootInsert = !s, ! function createComponent(e, t, n, i) {
                    var a = e.data;
                    if (isDef(a)) {
                        var s = isDef(e.componentInstance) && a.keepAlive;
                        if (isDef(a = a.hook) && isDef(a = a.init) && a(e, !1), isDef(e.componentInstance)) return initComponent(e, t), insert(n, e.elm, i), isTrue(s) && function reactivateComponent(e, t, n, i) {
                            var a, s = e;
                            for (; s.componentInstance;)
                                if (s = s.componentInstance._vnode, isDef(a = s.data) && isDef(a = a.transition)) {
                                    for (a = 0; a < r.activate.length; ++a) r.activate[a](Le, s);
                                    t.push(s);
                                    break
                                } insert(n, e.elm, i)
                        }(e, t, n, i), !0
                    }
                }(e, t, n, i)) {
                var c = e.data,
                    d = e.children,
                    u = e.tag;
                isDef(u) ? (e.elm = e.ns ? a.createElementNS(e.ns, u) : a.createElement(u, e), setScope(e), createChildren(e, d, t), isDef(c) && invokeCreateHooks(e, t), insert(n, e.elm, i)) : isTrue(e.isComment) ? (e.elm = a.createComment(e.text), insert(n, e.elm, i)) : (e.elm = a.createTextNode(e.text), insert(n, e.elm, i))
            }
        }

        function initComponent(e, t) {
            isDef(e.data.pendingInsert) && (t.push.apply(t, e.data.pendingInsert), e.data.pendingInsert = null), e.elm = e.componentInstance.$el, isPatchable(e) ? (invokeCreateHooks(e, t), setScope(e)) : (registerRef(e), t.push(e))
        }

        function insert(e, t, n) {
            isDef(e) && (isDef(n) ? a.parentNode(n) === e && a.insertBefore(e, t, n) : a.appendChild(e, t))
        }

        function createChildren(e, t, n) {
            if (Array.isArray(t)) {
                0;
                for (var r = 0; r < t.length; ++r) createElm(t[r], n, e.elm, null, !0, t, r)
            } else isPrimitive(e.text) && a.appendChild(e.elm, a.createTextNode(String(e.text)))
        }

        function isPatchable(e) {
            for (; e.componentInstance;) e = e.componentInstance._vnode;
            return isDef(e.tag)
        }

        function invokeCreateHooks(e, n) {
            for (var i = 0; i < r.create.length; ++i) r.create[i](Le, e);
            isDef(t = e.data.hook) && (isDef(t.create) && t.create(Le, e), isDef(t.insert) && n.push(e))
        }

        function setScope(e) {
            var t;
            if (isDef(t = e.fnScopeId)) a.setStyleScope(e.elm, t);
            else
                for (var n = e; n;) isDef(t = n.context) && isDef(t = t.$options._scopeId) && a.setStyleScope(e.elm, t), n = n.parent;
            isDef(t = le) && t !== e.context && t !== e.fnContext && isDef(t = t.$options._scopeId) && a.setStyleScope(e.elm, t)
        }

        function addVnodes(e, t, n, r, i, a) {
            for (; r <= i; ++r) createElm(n[r], a, e, t, !1, n, r)
        }

        function invokeDestroyHook(e) {
            var t, n, i = e.data;
            if (isDef(i))
                for (isDef(t = i.hook) && isDef(t = t.destroy) && t(e), t = 0; t < r.destroy.length; ++t) r.destroy[t](e);
            if (isDef(t = e.children))
                for (n = 0; n < e.children.length; ++n) invokeDestroyHook(e.children[n])
        }

        function removeVnodes(e, t, n) {
            for (; t <= n; ++t) {
                var r = e[t];
                isDef(r) && (isDef(r.tag) ? (removeAndInvokeRemoveHook(r), invokeDestroyHook(r)) : removeNode(r.elm))
            }
        }

        function removeAndInvokeRemoveHook(e, t) {
            if (isDef(t) || isDef(e.data)) {
                var n, i = r.remove.length + 1;
                for (isDef(t) ? t.listeners += i : t = function createRmCb(e, t) {
                        function remove$$1() {
                            0 == --remove$$1.listeners && removeNode(e)
                        }
                        return remove$$1.listeners = t, remove$$1
                    }(e.elm, i), isDef(n = e.componentInstance) && isDef(n = n._vnode) && isDef(n.data) && removeAndInvokeRemoveHook(n, t), n = 0; n < r.remove.length; ++n) r.remove[n](e, t);
                isDef(n = e.data.hook) && isDef(n = n.remove) ? n(e, t) : t()
            } else removeNode(e.elm)
        }

        function findIdxInOld(e, t, n, r) {
            for (var i = n; i < r; i++) {
                var a = t[i];
                if (isDef(a) && sameVnode(e, a)) return i
            }
        }

        function patchVnode(e, t, n, i, s, o) {
            if (e !== t) {
                isDef(t.elm) && isDef(i) && (t = i[s] = cloneVNode(t));
                var l = t.elm = e.elm;
                if (isTrue(e.isAsyncPlaceholder)) isDef(t.asyncFactory.resolved) ? hydrate(e.elm, t, n) : t.isAsyncPlaceholder = !0;
                else if (isTrue(t.isStatic) && isTrue(e.isStatic) && t.key === e.key && (isTrue(t.isCloned) || isTrue(t.isOnce))) t.componentInstance = e.componentInstance;
                else {
                    var c, d = t.data;
                    isDef(d) && isDef(c = d.hook) && isDef(c = c.prepatch) && c(e, t);
                    var u = e.children,
                        f = t.children;
                    if (isDef(d) && isPatchable(t)) {
                        for (c = 0; c < r.update.length; ++c) r.update[c](e, t);
                        isDef(c = d.hook) && isDef(c = c.update) && c(e, t)
                    }
                    isUndef(t.text) ? isDef(u) && isDef(f) ? u !== f && function updateChildren(e, t, n, r, i) {
                        var s, o, l, c = 0,
                            d = 0,
                            u = t.length - 1,
                            f = t[0],
                            p = t[u],
                            m = n.length - 1,
                            h = n[0],
                            v = n[m],
                            g = !i;
                        for (0; c <= u && d <= m;) isUndef(f) ? f = t[++c] : isUndef(p) ? p = t[--u] : sameVnode(f, h) ? (patchVnode(f, h, r, n, d), f = t[++c], h = n[++d]) : sameVnode(p, v) ? (patchVnode(p, v, r, n, m), p = t[--u], v = n[--m]) : sameVnode(f, v) ? (patchVnode(f, v, r, n, m), g && a.insertBefore(e, f.elm, a.nextSibling(p.elm)), f = t[++c], v = n[--m]) : sameVnode(p, h) ? (patchVnode(p, h, r, n, d), g && a.insertBefore(e, p.elm, f.elm), p = t[--u], h = n[++d]) : (isUndef(s) && (s = createKeyToOldIdx(t, c, u)), isUndef(o = isDef(h.key) ? s[h.key] : findIdxInOld(h, t, c, u)) ? createElm(h, r, e, f.elm, !1, n, d) : sameVnode(l = t[o], h) ? (patchVnode(l, h, r, n, d), t[o] = void 0, g && a.insertBefore(e, l.elm, f.elm)) : createElm(h, r, e, f.elm, !1, n, d), h = n[++d]);
                        c > u ? addVnodes(e, isUndef(n[m + 1]) ? null : n[m + 1].elm, n, d, m, r) : d > m && removeVnodes(t, c, u)
                    }(l, u, f, n, o) : isDef(f) ? (isDef(e.text) && a.setTextContent(l, ""), addVnodes(l, null, f, 0, f.length - 1, n)) : isDef(u) ? removeVnodes(u, 0, u.length - 1) : isDef(e.text) && a.setTextContent(l, "") : e.text !== t.text && a.setTextContent(l, t.text), isDef(d) && isDef(c = d.hook) && isDef(c = c.postpatch) && c(e, t)
                }
            }
        }

        function invokeInsertHook(e, t, n) {
            if (isTrue(n) && isDef(e.parent)) e.parent.data.pendingInsert = t;
            else
                for (var r = 0; r < t.length; ++r) t[r].data.hook.insert(t[r])
        }
        var s = makeMap("attrs,class,staticClass,staticStyle,key");

        function hydrate(e, t, n, r) {
            var i, a = t.tag,
                o = t.data,
                l = t.children;
            if (r = r || o && o.pre, t.elm = e, isTrue(t.isComment) && isDef(t.asyncFactory)) return t.isAsyncPlaceholder = !0, !0;
            if (isDef(o) && (isDef(i = o.hook) && isDef(i = i.init) && i(t, !0), isDef(i = t.componentInstance))) return initComponent(t, n), !0;
            if (isDef(a)) {
                if (isDef(l))
                    if (e.hasChildNodes())
                        if (isDef(i = o) && isDef(i = i.domProps) && isDef(i = i.innerHTML)) {
                            if (i !== e.innerHTML) return !1
                        } else {
                            for (var c = !0, d = e.firstChild, u = 0; u < l.length; u++) {
                                if (!d || !hydrate(d, l[u], n, r)) {
                                    c = !1;
                                    break
                                }
                                d = d.nextSibling
                            }
                            if (!c || d) return !1
                        }
                else createChildren(t, l, n);
                if (isDef(o)) {
                    var f = !1;
                    for (var p in o)
                        if (!s(p)) {
                            f = !0, invokeCreateHooks(t, n);
                            break
                        }! f && o.class && traverse(o.class)
                }
            } else e.data !== t.text && (e.data = t.text);
            return !0
        }
        return function patch(e, t, n, i) {
            if (!isUndef(t)) {
                var s = !1,
                    o = [];
                if (isUndef(e)) s = !0, createElm(t, o);
                else {
                    var l = isDef(e.nodeType);
                    if (!l && sameVnode(e, t)) patchVnode(e, t, o, null, null, i);
                    else {
                        if (l) {
                            if (1 === e.nodeType && e.hasAttribute("data-server-rendered") && (e.removeAttribute("data-server-rendered"), n = !0), isTrue(n) && hydrate(e, t, o)) return invokeInsertHook(t, o, !0), e;
                            e = function emptyNodeAt(e) {
                                return new U(a.tagName(e).toLowerCase(), {}, [], void 0, e)
                            }(e)
                        }
                        var c = e.elm,
                            d = a.parentNode(c);
                        if (createElm(t, o, c._leaveCb ? null : d, a.nextSibling(c)), isDef(t.parent))
                            for (var u = t.parent, f = isPatchable(t); u;) {
                                for (var p = 0; p < r.destroy.length; ++p) r.destroy[p](u);
                                if (u.elm = t.elm, f) {
                                    for (var m = 0; m < r.create.length; ++m) r.create[m](Le, u);
                                    var h = u.data.hook.insert;
                                    if (h.merged)
                                        for (var v = 1; v < h.fns.length; v++) h.fns[v]()
                                } else registerRef(u);
                                u = u.parent
                            }
                        isDef(d) ? removeVnodes([e], 0, 0) : isDef(e.tag) && invokeDestroyHook(e)
                    }
                }
                return invokeInsertHook(t, o, s), t.elm
            }
            isDef(e) && invokeDestroyHook(e)
        }
    }({
        nodeOps: Ie,
        modules: [Ve, Xe, tt, nt, ct, w ? {
            create: _enter,
            activate: _enter,
            remove: function remove$$1(e, t) {
                !0 !== e.data.show ? leave(e, t) : t()
            }
        } : {}].concat(He)
    });
    S && document.addEventListener("selectionchange", (function() {
        var e = document.activeElement;
        e && e.vmodel && trigger(e, "input")
    }));
    var bt = {
        inserted: function inserted(e, t, n, r) {
            "select" === n.tag ? (r.elm && !r.elm._vOptions ? mergeVNodeHook(n, "postpatch", (function() {
                bt.componentUpdated(e, t, n)
            })) : setSelected(e, t, n.context), e._vOptions = [].map.call(e.options, getValue)) : ("textarea" === n.tag || Fe(e.type)) && (e._vModifiers = t.modifiers, t.modifiers.lazy || (e.addEventListener("compositionstart", onCompositionStart), e.addEventListener("compositionend", onCompositionEnd), e.addEventListener("change", onCompositionEnd), S && (e.vmodel = !0)))
        },
        componentUpdated: function componentUpdated(e, t, n) {
            if ("select" === n.tag) {
                setSelected(e, t, n.context);
                var r = e._vOptions,
                    i = e._vOptions = [].map.call(e.options, getValue);
                if (i.some((function(e, t) {
                        return !looseEqual(e, r[t])
                    })))(e.multiple ? t.value.some((function(e) {
                    return hasNoMatchingOption(e, i)
                })) : t.value !== t.oldValue && hasNoMatchingOption(t.value, i)) && trigger(e, "change")
            }
        }
    };

    function setSelected(e, t, n) {
        actuallySetSelected(e, t, n), ($ || A) && setTimeout((function() {
            actuallySetSelected(e, t, n)
        }), 0)
    }

    function actuallySetSelected(e, t, n) {
        var r = t.value,
            i = e.multiple;
        if (!i || Array.isArray(r)) {
            for (var a, s, o = 0, l = e.options.length; o < l; o++)
                if (s = e.options[o], i) a = looseIndexOf(r, getValue(s)) > -1, s.selected !== a && (s.selected = a);
                else if (looseEqual(getValue(s), r)) return void(e.selectedIndex !== o && (e.selectedIndex = o));
            i || (e.selectedIndex = -1)
        }
    }

    function hasNoMatchingOption(e, t) {
        return t.every((function(t) {
            return !looseEqual(t, e)
        }))
    }

    function getValue(e) {
        return "_value" in e ? e._value : e.value
    }

    function onCompositionStart(e) {
        e.target.composing = !0
    }

    function onCompositionEnd(e) {
        e.target.composing && (e.target.composing = !1, trigger(e.target, "input"))
    }

    function trigger(e, t) {
        var n = document.createEvent("HTMLEvents");
        n.initEvent(t, !0, !0), e.dispatchEvent(n)
    }

    function locateNode(e) {
        return !e.componentInstance || e.data && e.data.transition ? e : locateNode(e.componentInstance._vnode)
    }
    var wt = {
            model: bt,
            show: {
                bind: function bind(e, t, n) {
                    var r = t.value,
                        i = (n = locateNode(n)).data && n.data.transition,
                        a = e.__vOriginalDisplay = "none" === e.style.display ? "" : e.style.display;
                    r && i ? (n.data.show = !0, enter(n, (function() {
                        e.style.display = a
                    }))) : e.style.display = r ? a : "none"
                },
                update: function update(e, t, n) {
                    var r = t.value;
                    !r != !t.oldValue && ((n = locateNode(n)).data && n.data.transition ? (n.data.show = !0, r ? enter(n, (function() {
                        e.style.display = e.__vOriginalDisplay
                    })) : leave(n, (function() {
                        e.style.display = "none"
                    }))) : e.style.display = r ? e.__vOriginalDisplay : "none")
                },
                unbind: function unbind(e, t, n, r, i) {
                    i || (e.style.display = e.__vOriginalDisplay)
                }
            }
        },
        Ct = {
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
            duration: [Number, String, Object]
        };

    function getRealChild(e) {
        var t = e && e.componentOptions;
        return t && t.Ctor.options.abstract ? getRealChild(getFirstComponentChild(t.children)) : e
    }

    function extractTransitionData(e) {
        var t = {},
            n = e.$options;
        for (var r in n.propsData) t[r] = e[r];
        var i = n._parentListeners;
        for (var a in i) t[c(a)] = i[a];
        return t
    }

    function placeholder(e, t) {
        if (/\d-keep-alive$/.test(t.tag)) return e("keep-alive", {
            props: t.componentOptions.propsData
        })
    }
    var isNotTextNode = function(e) {
            return e.tag || isAsyncPlaceholder(e)
        },
        isVShowDirective = function(e) {
            return "show" === e.name
        },
        xt = {
            name: "transition",
            props: Ct,
            abstract: !0,
            render: function render(e) {
                var t = this,
                    n = this.$slots.default;
                if (n && (n = n.filter(isNotTextNode)).length) {
                    0;
                    var r = this.mode;
                    0;
                    var i = n[0];
                    if (function hasParentTransition(e) {
                            for (; e = e.parent;)
                                if (e.data.transition) return !0
                        }(this.$vnode)) return i;
                    var a = getRealChild(i);
                    if (!a) return i;
                    if (this._leaving) return placeholder(e, i);
                    var s = "__transition-" + this._uid + "-";
                    a.key = null == a.key ? a.isComment ? s + "comment" : s + a.tag : isPrimitive(a.key) ? 0 === String(a.key).indexOf(s) ? a.key : s + a.key : a.key;
                    var o = (a.data || (a.data = {})).transition = extractTransitionData(this),
                        l = this._vnode,
                        c = getRealChild(l);
                    if (a.data.directives && a.data.directives.some(isVShowDirective) && (a.data.show = !0), c && c.data && ! function isSameChild(e, t) {
                            return t.key === e.key && t.tag === e.tag
                        }(a, c) && !isAsyncPlaceholder(c) && (!c.componentInstance || !c.componentInstance._vnode.isComment)) {
                        var d = c.data.transition = extend({}, o);
                        if ("out-in" === r) return this._leaving = !0, mergeVNodeHook(d, "afterLeave", (function() {
                            t._leaving = !1, t.$forceUpdate()
                        })), placeholder(e, i);
                        if ("in-out" === r) {
                            if (isAsyncPlaceholder(a)) return l;
                            var u, performLeave = function() {
                                u()
                            };
                            mergeVNodeHook(o, "afterEnter", performLeave), mergeVNodeHook(o, "enterCancelled", performLeave), mergeVNodeHook(d, "delayLeave", (function(e) {
                                u = e
                            }))
                        }
                    }
                    return i
                }
            }
        },
        kt = extend({
            tag: String,
            moveClass: String
        }, Ct);

    function callPendingCbs(e) {
        e.elm._moveCb && e.elm._moveCb(), e.elm._enterCb && e.elm._enterCb()
    }

    function recordPosition(e) {
        e.data.newPos = e.elm.getBoundingClientRect()
    }

    function applyTranslation(e) {
        var t = e.data.pos,
            n = e.data.newPos,
            r = t.left - n.left,
            i = t.top - n.top;
        if (r || i) {
            e.data.moved = !0;
            var a = e.elm.style;
            a.transform = a.WebkitTransform = "translate(" + r + "px," + i + "px)", a.transitionDuration = "0s"
        }
    }
    delete kt.mode;
    var $t = {
        Transition: xt,
        TransitionGroup: {
            props: kt,
            beforeMount: function beforeMount() {
                var e = this,
                    t = this._update;
                this._update = function(n, r) {
                    var i = setActiveInstance(e);
                    e.__patch__(e._vnode, e.kept, !1, !0), e._vnode = e.kept, i(), t.call(e, n, r)
                }
            },
            render: function render(e) {
                for (var t = this.tag || this.$vnode.data.tag || "span", n = Object.create(null), r = this.prevChildren = this.children, i = this.$slots.default || [], a = this.children = [], s = extractTransitionData(this), o = 0; o < i.length; o++) {
                    var l = i[o];
                    if (l.tag)
                        if (null != l.key && 0 !== String(l.key).indexOf("__vlist")) a.push(l), n[l.key] = l, (l.data || (l.data = {})).transition = s;
                        else;
                }
                if (r) {
                    for (var c = [], d = [], u = 0; u < r.length; u++) {
                        var f = r[u];
                        f.data.transition = s, f.data.pos = f.elm.getBoundingClientRect(), n[f.key] ? c.push(f) : d.push(f)
                    }
                    this.kept = e(t, null, c), this.removed = d
                }
                return e(t, null, a)
            },
            updated: function updated() {
                var e = this.prevChildren,
                    t = this.moveClass || (this.name || "v") + "-move";
                e.length && this.hasMove(e[0].elm, t) && (e.forEach(callPendingCbs), e.forEach(recordPosition), e.forEach(applyTranslation), this._reflow = document.body.offsetHeight, e.forEach((function(e) {
                    if (e.data.moved) {
                        var n = e.elm,
                            r = n.style;
                        addTransitionClass(n, t), r.transform = r.WebkitTransform = r.transitionDuration = "", n.addEventListener(mt, n._moveCb = function cb(e) {
                            e && e.target !== n || e && !/transform$/.test(e.propertyName) || (n.removeEventListener(mt, cb), n._moveCb = null, removeTransitionClass(n, t))
                        })
                    }
                })))
            },
            methods: {
                hasMove: function hasMove(e, t) {
                    if (!ft) return !1;
                    if (this._hasMove) return this._hasMove;
                    var n = e.cloneNode();
                    e._transitionClasses && e._transitionClasses.forEach((function(e) {
                        removeClass(n, e)
                    })), addClass(n, t), n.style.display = "none", this.$el.appendChild(n);
                    var r = getTransitionInfo(n);
                    return this.$el.removeChild(n), this._hasMove = r.hasTransform
                }
            }
        }
    };
    Vue.config.mustUseProp = mustUseProp, Vue.config.isReservedTag = isReservedTag, Vue.config.isReservedAttr = $e, Vue.config.getTagNamespace = getTagNamespace, Vue.config.isUnknownElement = function isUnknownElement(e) {
        if (!w) return !0;
        if (isReservedTag(e)) return !1;
        if (e = e.toLowerCase(), null != je[e]) return je[e];
        var t = document.createElement(e);
        return e.indexOf("-") > -1 ? je[e] = t.constructor === window.HTMLUnknownElement || t.constructor === window.HTMLElement : je[e] = /HTMLUnknownElement/.test(t.toString())
    }, extend(Vue.options.directives, wt), extend(Vue.options.components, $t), Vue.prototype.__patch__ = w ? _t : noop, Vue.prototype.$mount = function(e, t) {
        return function mountComponent(e, t, n) {
            var r;
            return e.$el = t, e.$options.render || (e.$options.render = createEmptyVNode), callHook(e, "beforeMount"), r = function() {
                e._update(e._render(), n)
            }, new _e(e, r, noop, {
                before: function before() {
                    e._isMounted && !e._isDestroyed && callHook(e, "beforeUpdate")
                }
            }, !0), n = !1, null == e.$vnode && (e._isMounted = !0, callHook(e, "mounted")), e
        }(this, e = e && w ? query(e) : void 0, t)
    }, w && setTimeout((function() {
        v.devtools && N && N.emit("init", Vue)
    }), 0);
    var St = /\{\{((?:.|\r?\n)+?)\}\}/g,
        At = /[-.*+?^${}()|[\]\/\\]/g,
        Dt = cached((function(e) {
            var t = e[0].replace(At, "\\$&"),
                n = e[1].replace(At, "\\$&");
            return new RegExp(t + "((?:.|\\n)+?)" + n, "g")
        }));
    var Tt = {
        staticKeys: ["staticClass"],
        transformNode: function transformNode(e, t) {
            t.warn;
            var n = getAndRemoveAttr(e, "class");
            n && (e.staticClass = JSON.stringify(n));
            var r = getBindingAttr(e, "class", !1);
            r && (e.classBinding = r)
        },
        genData: function genData(e) {
            var t = "";
            return e.staticClass && (t += "staticClass:" + e.staticClass + ","), e.classBinding && (t += "class:" + e.classBinding + ","), t
        }
    };
    var Ot, Et = {
            staticKeys: ["staticStyle"],
            transformNode: function transformNode$1(e, t) {
                t.warn;
                var n = getAndRemoveAttr(e, "style");
                n && (e.staticStyle = JSON.stringify(rt(n)));
                var r = getBindingAttr(e, "style", !1);
                r && (e.styleBinding = r)
            },
            genData: function genData$1(e) {
                var t = "";
                return e.staticStyle && (t += "staticStyle:" + e.staticStyle + ","), e.styleBinding && (t += "style:(" + e.styleBinding + "),"), t
            }
        },
        Rt = function decode(e) {
            return (Ot = Ot || document.createElement("div")).innerHTML = e, Ot.textContent
        },
        Nt = makeMap("area,base,br,col,embed,frame,hr,img,input,isindex,keygen,link,meta,param,source,track,wbr"),
        jt = makeMap("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source"),
        Ft = makeMap("address,article,aside,base,blockquote,body,caption,col,colgroup,dd,details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,title,tr,track"),
        It = /^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/,
        Pt = /^\s*((?:v-[\w-]+:|@|:|#)\[[^=]+\][^\s"'<>\/=]*)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/,
        Lt = "[a-zA-Z_][\\-\\.0-9_a-zA-Z" + g.source + "]*",
        Mt = "((?:" + Lt + "\\:)?" + Lt + ")",
        Ut = new RegExp("^<" + Mt),
        Bt = /^\s*(\/?)>/,
        Ht = new RegExp("^<\\/" + Mt + "[^>]*>"),
        Vt = /^<!DOCTYPE [^>]+>/i,
        qt = /^<!\--/,
        zt = /^<!\[/,
        Wt = makeMap("script,style,textarea", !0),
        Gt = {},
        Kt = {
            "&lt;": "<",
            "&gt;": ">",
            "&quot;": '"',
            "&amp;": "&",
            "&#10;": "\n",
            "&#9;": "\t",
            "&#39;": "'"
        },
        Jt = /&(?:lt|gt|quot|amp|#39);/g,
        Xt = /&(?:lt|gt|quot|amp|#39|#10|#9);/g,
        Yt = makeMap("pre,textarea", !0),
        shouldIgnoreFirstNewline = function(e, t) {
            return e && Yt(e) && "\n" === t[0]
        };

    function decodeAttr(e, t) {
        var n = t ? Xt : Jt;
        return e.replace(n, (function(e) {
            return Kt[e]
        }))
    }
    var Zt, Qt, en, tn, nn, rn, an, sn, ln = /^@|^v-on:/,
        cn = /^v-|^@|^:|^#/,
        dn = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/,
        un = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/,
        fn = /^\(|\)$/g,
        pn = /^\[.*\]$/,
        mn = /:(.*)$/,
        hn = /^:|^\.|^v-bind:/,
        vn = /\.[^.\]]+(?=[^\]]*$)/g,
        gn = /^v-slot(:|$)|^#/,
        yn = /[\r\n]/,
        _n = /\s+/g,
        bn = cached(Rt);

    function createASTElement(e, t, n) {
        return {
            type: 1,
            tag: e,
            attrsList: t,
            attrsMap: makeAttrsMap(t),
            rawAttrsMap: {},
            parent: n,
            children: []
        }
    }

    function parse(e, t) {
        Zt = t.warn || baseWarn, rn = t.isPreTag || no, an = t.mustUseProp || no, sn = t.getTagNamespace || no;
        var n = t.isReservedTag || no;
        (function(e) {
            return !!e.component || !n(e.tag)
        }), en = pluckModuleFunction(t.modules, "transformNode"), tn = pluckModuleFunction(t.modules, "preTransformNode"), nn = pluckModuleFunction(t.modules, "postTransformNode"), Qt = t.delimiters;
        var r, i, a = [],
            s = !1 !== t.preserveWhitespace,
            o = t.whitespace,
            l = !1,
            c = !1;

        function closeElement(e) {
            if (trimEndingWhitespace(e), l || e.processed || (e = processElement(e, t)), a.length || e === r || r.if && (e.elseif || e.else) && addIfCondition(r, {
                    exp: e.elseif,
                    block: e
                }), i && !e.forbidden)
                if (e.elseif || e.else) ! function processIfConditions(e, t) {
                    var n = function findPrevElement(e) {
                        var t = e.length;
                        for (; t--;) {
                            if (1 === e[t].type) return e[t];
                            e.pop()
                        }
                    }(t.children);
                    n && n.if && addIfCondition(n, {
                        exp: e.elseif,
                        block: e
                    })
                }(e, i);
                else {
                    if (e.slotScope) {
                        var n = e.slotTarget || '"default"';
                        (i.scopedSlots || (i.scopedSlots = {}))[n] = e
                    }
                    i.children.push(e), e.parent = i
                } e.children = e.children.filter((function(e) {
                return !e.slotScope
            })), trimEndingWhitespace(e), e.pre && (l = !1), rn(e.tag) && (c = !1);
            for (var s = 0; s < nn.length; s++) nn[s](e, t)
        }

        function trimEndingWhitespace(e) {
            if (!c)
                for (var t;
                    (t = e.children[e.children.length - 1]) && 3 === t.type && " " === t.text;) e.children.pop()
        }
        return function parseHTML(e, t) {
            for (var n, r, i = [], a = t.expectHTML, s = t.isUnaryTag || no, o = t.canBeLeftOpenTag || no, l = 0; e;) {
                if (n = e, r && Wt(r)) {
                    var c = 0,
                        d = r.toLowerCase(),
                        u = Gt[d] || (Gt[d] = new RegExp("([\\s\\S]*?)(</" + d + "[^>]*>)", "i")),
                        f = e.replace(u, (function(e, n, r) {
                            return c = r.length, Wt(d) || "noscript" === d || (n = n.replace(/<!\--([\s\S]*?)-->/g, "$1").replace(/<!\[CDATA\[([\s\S]*?)]]>/g, "$1")), shouldIgnoreFirstNewline(d, n) && (n = n.slice(1)), t.chars && t.chars(n), ""
                        }));
                    l += e.length - f.length, e = f, parseEndTag(d, l - c, l)
                } else {
                    var p = e.indexOf("<");
                    if (0 === p) {
                        if (qt.test(e)) {
                            var m = e.indexOf("--\x3e");
                            if (m >= 0) {
                                t.shouldKeepComment && t.comment(e.substring(4, m), l, l + m + 3), advance(m + 3);
                                continue
                            }
                        }
                        if (zt.test(e)) {
                            var h = e.indexOf("]>");
                            if (h >= 0) {
                                advance(h + 2);
                                continue
                            }
                        }
                        var v = e.match(Vt);
                        if (v) {
                            advance(v[0].length);
                            continue
                        }
                        var g = e.match(Ht);
                        if (g) {
                            var y = l;
                            advance(g[0].length), parseEndTag(g[1], y, l);
                            continue
                        }
                        var _ = parseStartTag();
                        if (_) {
                            handleStartTag(_), shouldIgnoreFirstNewline(_.tagName, e) && advance(1);
                            continue
                        }
                    }
                    var b = void 0,
                        w = void 0,
                        C = void 0;
                    if (p >= 0) {
                        for (w = e.slice(p); !(Ht.test(w) || Ut.test(w) || qt.test(w) || zt.test(w) || (C = w.indexOf("<", 1)) < 0);) p += C, w = e.slice(p);
                        b = e.substring(0, p)
                    }
                    p < 0 && (b = e), b && advance(b.length), t.chars && b && t.chars(b, l - b.length, l)
                }
                if (e === n) {
                    t.chars && t.chars(e);
                    break
                }
            }

            function advance(t) {
                l += t, e = e.substring(t)
            }

            function parseStartTag() {
                var t = e.match(Ut);
                if (t) {
                    var n, r, i = {
                        tagName: t[1],
                        attrs: [],
                        start: l
                    };
                    for (advance(t[0].length); !(n = e.match(Bt)) && (r = e.match(Pt) || e.match(It));) r.start = l, advance(r[0].length), r.end = l, i.attrs.push(r);
                    if (n) return i.unarySlash = n[1], advance(n[0].length), i.end = l, i
                }
            }

            function handleStartTag(e) {
                var n = e.tagName,
                    l = e.unarySlash;
                a && ("p" === r && Ft(n) && parseEndTag(r), o(n) && r === n && parseEndTag(n));
                for (var c = s(n) || !!l, d = e.attrs.length, u = new Array(d), f = 0; f < d; f++) {
                    var p = e.attrs[f],
                        m = p[3] || p[4] || p[5] || "",
                        h = "a" === n && "href" === p[1] ? t.shouldDecodeNewlinesForHref : t.shouldDecodeNewlines;
                    u[f] = {
                        name: p[1],
                        value: decodeAttr(m, h)
                    }
                }
                c || (i.push({
                    tag: n,
                    lowerCasedTag: n.toLowerCase(),
                    attrs: u,
                    start: e.start,
                    end: e.end
                }), r = n), t.start && t.start(n, u, c, e.start, e.end)
            }

            function parseEndTag(e, n, a) {
                var s, o;
                if (null == n && (n = l), null == a && (a = l), e)
                    for (o = e.toLowerCase(), s = i.length - 1; s >= 0 && i[s].lowerCasedTag !== o; s--);
                else s = 0;
                if (s >= 0) {
                    for (var c = i.length - 1; c >= s; c--) t.end && t.end(i[c].tag, n, a);
                    i.length = s, r = s && i[s - 1].tag
                } else "br" === o ? t.start && t.start(e, [], !0, n, a) : "p" === o && (t.start && t.start(e, [], !1, n, a), t.end && t.end(e, n, a))
            }
            parseEndTag()
        }(e, {
            warn: Zt,
            expectHTML: t.expectHTML,
            isUnaryTag: t.isUnaryTag,
            canBeLeftOpenTag: t.canBeLeftOpenTag,
            shouldDecodeNewlines: t.shouldDecodeNewlines,
            shouldDecodeNewlinesForHref: t.shouldDecodeNewlinesForHref,
            shouldKeepComment: t.comments,
            outputSourceRange: t.outputSourceRange,
            start: function start(e, n, s, o, d) {
                var u = i && i.ns || sn(e);
                $ && "svg" === u && (n = function guardIESVGBug(e) {
                    for (var t = [], n = 0; n < e.length; n++) {
                        var r = e[n];
                        wn.test(r.name) || (r.name = r.name.replace(Cn, ""), t.push(r))
                    }
                    return t
                }(n));
                var f = createASTElement(e, n, i);
                u && (f.ns = u),
                    function isForbiddenTag(e) {
                        return "style" === e.tag || "script" === e.tag && (!e.attrsMap.type || "text/javascript" === e.attrsMap.type)
                    }(f) && !isServerRendering() && (f.forbidden = !0);
                for (var p = 0; p < tn.length; p++) f = tn[p](f, t) || f;
                l || (! function processPre(e) {
                    null != getAndRemoveAttr(e, "v-pre") && (e.pre = !0)
                }(f), f.pre && (l = !0)), rn(f.tag) && (c = !0), l ? function processRawAttrs(e) {
                    var t = e.attrsList,
                        n = t.length;
                    if (n)
                        for (var r = e.attrs = new Array(n), i = 0; i < n; i++) r[i] = {
                            name: t[i].name,
                            value: JSON.stringify(t[i].value)
                        }, null != t[i].start && (r[i].start = t[i].start, r[i].end = t[i].end);
                    else e.pre || (e.plain = !0)
                }(f) : f.processed || (processFor(f), function processIf(e) {
                    var t = getAndRemoveAttr(e, "v-if");
                    if (t) e.if = t, addIfCondition(e, {
                        exp: t,
                        block: e
                    });
                    else {
                        null != getAndRemoveAttr(e, "v-else") && (e.else = !0);
                        var n = getAndRemoveAttr(e, "v-else-if");
                        n && (e.elseif = n)
                    }
                }(f), function processOnce(e) {
                    null != getAndRemoveAttr(e, "v-once") && (e.once = !0)
                }(f)), r || (r = f), s ? closeElement(f) : (i = f, a.push(f))
            },
            end: function end(e, t, n) {
                var r = a[a.length - 1];
                a.length -= 1, i = a[a.length - 1], closeElement(r)
            },
            chars: function chars(e, t, n) {
                if (i && (!$ || "textarea" !== i.tag || i.attrsMap.placeholder !== e)) {
                    var r, a, d = i.children;
                    if (e = c || e.trim() ? function isTextTag(e) {
                            return "script" === e.tag || "style" === e.tag
                        }(i) ? e : bn(e) : d.length ? o ? "condense" === o && yn.test(e) ? "" : " " : s ? " " : "" : "") c || "condense" !== o || (e = e.replace(_n, " ")), !l && " " !== e && (r = function parseText(e, t) {
                        var n = t ? Dt(t) : St;
                        if (n.test(e)) {
                            for (var r, i, a, s = [], o = [], l = n.lastIndex = 0; r = n.exec(e);) {
                                (i = r.index) > l && (o.push(a = e.slice(l, i)), s.push(JSON.stringify(a)));
                                var c = parseFilters(r[1].trim());
                                s.push("_s(" + c + ")"), o.push({
                                    "@binding": c
                                }), l = i + r[0].length
                            }
                            return l < e.length && (o.push(a = e.slice(l)), s.push(JSON.stringify(a))), {
                                expression: s.join("+"),
                                tokens: o
                            }
                        }
                    }(e, Qt)) ? a = {
                        type: 2,
                        expression: r.expression,
                        tokens: r.tokens,
                        text: e
                    } : " " === e && d.length && " " === d[d.length - 1].text || (a = {
                        type: 3,
                        text: e
                    }), a && d.push(a)
                }
            },
            comment: function comment(e, t, n) {
                if (i) {
                    var r = {
                        type: 3,
                        text: e,
                        isComment: !0
                    };
                    0, i.children.push(r)
                }
            }
        }), r
    }

    function processElement(e, t) {
        ! function processKey(e) {
            var t = getBindingAttr(e, "key");
            if (t) {
                e.key = t
            }
        }(e), e.plain = !e.key && !e.scopedSlots && !e.attrsList.length,
            function processRef(e) {
                var t = getBindingAttr(e, "ref");
                t && (e.ref = t, e.refInFor = function checkInFor(e) {
                    var t = e;
                    for (; t;) {
                        if (void 0 !== t.for) return !0;
                        t = t.parent
                    }
                    return !1
                }(e))
            }(e),
            function processSlotContent(e) {
                var t;
                "template" === e.tag ? (t = getAndRemoveAttr(e, "scope"), e.slotScope = t || getAndRemoveAttr(e, "slot-scope")) : (t = getAndRemoveAttr(e, "slot-scope")) && (e.slotScope = t);
                var n = getBindingAttr(e, "slot");
                n && (e.slotTarget = '""' === n ? '"default"' : n, e.slotTargetDynamic = !(!e.attrsMap[":slot"] && !e.attrsMap["v-bind:slot"]), "template" === e.tag || e.slotScope || addAttr(e, "slot", n, function getRawBindingAttr(e, t) {
                    return e.rawAttrsMap[":" + t] || e.rawAttrsMap["v-bind:" + t] || e.rawAttrsMap[t]
                }(e, "slot")));
                if ("template" === e.tag) {
                    var r = getAndRemoveAttrByRegex(e, gn);
                    if (r) {
                        0;
                        var i = getSlotName(r),
                            a = i.name,
                            s = i.dynamic;
                        e.slotTarget = a, e.slotTargetDynamic = s, e.slotScope = r.value || "_empty_"
                    }
                } else {
                    var o = getAndRemoveAttrByRegex(e, gn);
                    if (o) {
                        0;
                        var l = e.scopedSlots || (e.scopedSlots = {}),
                            c = getSlotName(o),
                            d = c.name,
                            u = c.dynamic,
                            f = l[d] = createASTElement("template", [], e);
                        f.slotTarget = d, f.slotTargetDynamic = u, f.children = e.children.filter((function(e) {
                            if (!e.slotScope) return e.parent = f, !0
                        })), f.slotScope = o.value || "_empty_", e.children = [], e.plain = !1
                    }
                }
            }(e),
            function processSlotOutlet(e) {
                "slot" === e.tag && (e.slotName = getBindingAttr(e, "name"))
            }(e),
            function processComponent(e) {
                var t;
                (t = getBindingAttr(e, "is")) && (e.component = t);
                null != getAndRemoveAttr(e, "inline-template") && (e.inlineTemplate = !0)
            }(e);
        for (var n = 0; n < en.length; n++) e = en[n](e, t) || e;
        return function processAttrs(e) {
            var t, n, r, i, a, s, o, l, d = e.attrsList;
            for (t = 0, n = d.length; t < n; t++) {
                if (r = i = d[t].name, a = d[t].value, cn.test(r))
                    if (e.hasBindings = !0, (s = parseModifiers(r.replace(cn, ""))) && (r = r.replace(vn, "")), hn.test(r)) r = r.replace(hn, ""), a = parseFilters(a), (l = pn.test(r)) && (r = r.slice(1, -1)), s && (s.prop && !l && "innerHtml" === (r = c(r)) && (r = "innerHTML"), s.camel && !l && (r = c(r)), s.sync && (o = genAssignmentCode(a, "$event"), l ? addHandler(e, '"update:"+(' + r + ")", o, null, !1, 0, d[t], !0) : (addHandler(e, "update:" + c(r), o, null, !1, 0, d[t]), f(r) !== c(r) && addHandler(e, "update:" + f(r), o, null, !1, 0, d[t])))), s && s.prop || !e.component && an(e.tag, e.attrsMap.type, r) ? addProp(e, r, a, d[t], l) : addAttr(e, r, a, d[t], l);
                    else if (ln.test(r)) r = r.replace(ln, ""), (l = pn.test(r)) && (r = r.slice(1, -1)), addHandler(e, r, a, s, !1, 0, d[t], l);
                else {
                    var u = (r = r.replace(cn, "")).match(mn),
                        p = u && u[1];
                    l = !1, p && (r = r.slice(0, -(p.length + 1)), pn.test(p) && (p = p.slice(1, -1), l = !0)), addDirective(e, r, i, a, p, l, s, d[t])
                } else addAttr(e, r, JSON.stringify(a), d[t]), !e.component && "muted" === r && an(e.tag, e.attrsMap.type, r) && addProp(e, r, "true", d[t])
            }
        }(e), e
    }

    function processFor(e) {
        var t;
        if (t = getAndRemoveAttr(e, "v-for")) {
            var n = function parseFor(e) {
                var t = e.match(dn);
                if (!t) return;
                var n = {};
                n.for = t[2].trim();
                var r = t[1].trim().replace(fn, ""),
                    i = r.match(un);
                i ? (n.alias = r.replace(un, "").trim(), n.iterator1 = i[1].trim(), i[2] && (n.iterator2 = i[2].trim())) : n.alias = r;
                return n
            }(t);
            n && extend(e, n)
        }
    }

    function addIfCondition(e, t) {
        e.ifConditions || (e.ifConditions = []), e.ifConditions.push(t)
    }

    function getSlotName(e) {
        var t = e.name.replace(gn, "");
        return t || "#" !== e.name[0] && (t = "default"), pn.test(t) ? {
            name: t.slice(1, -1),
            dynamic: !0
        } : {
            name: '"' + t + '"',
            dynamic: !1
        }
    }

    function parseModifiers(e) {
        var t = e.match(vn);
        if (t) {
            var n = {};
            return t.forEach((function(e) {
                n[e.slice(1)] = !0
            })), n
        }
    }

    function makeAttrsMap(e) {
        for (var t = {}, n = 0, r = e.length; n < r; n++) t[e[n].name] = e[n].value;
        return t
    }
    var wn = /^xmlns:NS\d+/,
        Cn = /^NS\d+:/;

    function cloneASTElement(e) {
        return createASTElement(e.tag, e.attrsList.slice(), e.parent)
    }
    var xn = [Tt, Et, {
        preTransformNode: function preTransformNode(e, t) {
            if ("input" === e.tag) {
                var n, r = e.attrsMap;
                if (!r["v-model"]) return;
                if ((r[":type"] || r["v-bind:type"]) && (n = getBindingAttr(e, "type")), r.type || n || !r["v-bind"] || (n = "(" + r["v-bind"] + ").type"), n) {
                    var i = getAndRemoveAttr(e, "v-if", !0),
                        a = i ? "&&(" + i + ")" : "",
                        s = null != getAndRemoveAttr(e, "v-else", !0),
                        o = getAndRemoveAttr(e, "v-else-if", !0),
                        l = cloneASTElement(e);
                    processFor(l), addRawAttr(l, "type", "checkbox"), processElement(l, t), l.processed = !0, l.if = "(" + n + ")==='checkbox'" + a, addIfCondition(l, {
                        exp: l.if,
                        block: l
                    });
                    var c = cloneASTElement(e);
                    getAndRemoveAttr(c, "v-for", !0), addRawAttr(c, "type", "radio"), processElement(c, t), addIfCondition(l, {
                        exp: "(" + n + ")==='radio'" + a,
                        block: c
                    });
                    var d = cloneASTElement(e);
                    return getAndRemoveAttr(d, "v-for", !0), addRawAttr(d, ":type", n), processElement(d, t), addIfCondition(l, {
                        exp: i,
                        block: d
                    }), s ? l.else = !0 : o && (l.elseif = o), l
                }
            }
        }
    }];
    var kn, $n, Sn = {
            expectHTML: !0,
            modules: xn,
            directives: {
                model: function model(e, t, n) {
                    n;
                    var r = t.value,
                        i = t.modifiers,
                        a = e.tag,
                        s = e.attrsMap.type;
                    if (e.component) return genComponentModel(e, r, i), !1;
                    if ("select" === a) ! function genSelect(e, t, n) {
                        var r = 'var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return ' + (n && n.number ? "_n(val)" : "val") + "});";
                        r = r + " " + genAssignmentCode(t, "$event.target.multiple ? $$selectedVal : $$selectedVal[0]"), addHandler(e, "change", r, null, !0)
                    }(e, r, i);
                    else if ("input" === a && "checkbox" === s) ! function genCheckboxModel(e, t, n) {
                        var r = n && n.number,
                            i = getBindingAttr(e, "value") || "null",
                            a = getBindingAttr(e, "true-value") || "true",
                            s = getBindingAttr(e, "false-value") || "false";
                        addProp(e, "checked", "Array.isArray(" + t + ")?_i(" + t + "," + i + ")>-1" + ("true" === a ? ":(" + t + ")" : ":_q(" + t + "," + a + ")")), addHandler(e, "change", "var $$a=" + t + ",$$el=$event.target,$$c=$$el.checked?(" + a + "):(" + s + ");if(Array.isArray($$a)){var $$v=" + (r ? "_n(" + i + ")" : i) + ",$$i=_i($$a,$$v);if($$el.checked){$$i<0&&(" + genAssignmentCode(t, "$$a.concat([$$v])") + ")}else{$$i>-1&&(" + genAssignmentCode(t, "$$a.slice(0,$$i).concat($$a.slice($$i+1))") + ")}}else{" + genAssignmentCode(t, "$$c") + "}", null, !0)
                    }(e, r, i);
                    else if ("input" === a && "radio" === s) ! function genRadioModel(e, t, n) {
                        var r = n && n.number,
                            i = getBindingAttr(e, "value") || "null";
                        addProp(e, "checked", "_q(" + t + "," + (i = r ? "_n(" + i + ")" : i) + ")"), addHandler(e, "change", genAssignmentCode(t, i), null, !0)
                    }(e, r, i);
                    else if ("input" === a || "textarea" === a) ! function genDefaultModel(e, t, n) {
                        var r = e.attrsMap.type;
                        0;
                        var i = n || {},
                            a = i.lazy,
                            s = i.number,
                            o = i.trim,
                            l = !a && "range" !== r,
                            c = a ? "change" : "range" === r ? "__r" : "input",
                            d = "$event.target.value";
                        o && (d = "$event.target.value.trim()");
                        s && (d = "_n(" + d + ")");
                        var u = genAssignmentCode(t, d);
                        l && (u = "if($event.target.composing)return;" + u);
                        addProp(e, "value", "(" + t + ")"), addHandler(e, c, u, null, !0), (o || s) && addHandler(e, "blur", "$forceUpdate()")
                    }(e, r, i);
                    else {
                        if (!v.isReservedTag(a)) return genComponentModel(e, r, i), !1
                    }
                    return !0
                },
                text: function text(e, t) {
                    t.value && addProp(e, "textContent", "_s(" + t.value + ")", t)
                },
                html: function html(e, t) {
                    t.value && addProp(e, "innerHTML", "_s(" + t.value + ")", t)
                }
            },
            isPreTag: function(e) {
                return "pre" === e
            },
            isUnaryTag: Nt,
            mustUseProp: mustUseProp,
            canBeLeftOpenTag: jt,
            isReservedTag: isReservedTag,
            getTagNamespace: getTagNamespace,
            staticKeys: function genStaticKeys(e) {
                return e.reduce((function(e, t) {
                    return e.concat(t.staticKeys || [])
                }), []).join(",")
            }(xn)
        },
        An = cached((function genStaticKeys$1(e) {
            return makeMap("type,tag,attrsList,attrsMap,plain,parent,children,attrs,start,end,rawAttrsMap" + (e ? "," + e : ""))
        }));

    function optimize(e, t) {
        e && (kn = An(t.staticKeys || ""), $n = t.isReservedTag || no, function markStatic$1(e) {
            if (e.static = function isStatic(e) {
                    if (2 === e.type) return !1;
                    if (3 === e.type) return !0;
                    return !(!e.pre && (e.hasBindings || e.if || e.for || a(e.tag) || !$n(e.tag) || function isDirectChildOfTemplateFor(e) {
                        for (; e.parent;) {
                            if ("template" !== (e = e.parent).tag) return !1;
                            if (e.for) return !0
                        }
                        return !1
                    }(e) || !Object.keys(e).every(kn)))
                }(e), 1 === e.type) {
                if (!$n(e.tag) && "slot" !== e.tag && null == e.attrsMap["inline-template"]) return;
                for (var t = 0, n = e.children.length; t < n; t++) {
                    var r = e.children[t];
                    markStatic$1(r), r.static || (e.static = !1)
                }
                if (e.ifConditions)
                    for (var i = 1, s = e.ifConditions.length; i < s; i++) {
                        var o = e.ifConditions[i].block;
                        markStatic$1(o), o.static || (e.static = !1)
                    }
            }
        }(e), function markStaticRoots(e, t) {
            if (1 === e.type) {
                if ((e.static || e.once) && (e.staticInFor = t), e.static && e.children.length && (1 !== e.children.length || 3 !== e.children[0].type)) return void(e.staticRoot = !0);
                if (e.staticRoot = !1, e.children)
                    for (var n = 0, r = e.children.length; n < r; n++) markStaticRoots(e.children[n], t || !!e.for);
                if (e.ifConditions)
                    for (var i = 1, a = e.ifConditions.length; i < a; i++) markStaticRoots(e.ifConditions[i].block, t)
            }
        }(e, !1))
    }
    var Dn = /^([\w$_]+|\([^)]*?\))\s*=>|^function(?:\s+[\w$]+)?\s*\(/,
        Tn = /\([^)]*?\);*$/,
        On = /^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['[^']*?']|\["[^"]*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*$/,
        En = {
            esc: 27,
            tab: 9,
            enter: 13,
            space: 32,
            up: 38,
            left: 37,
            right: 39,
            down: 40,
            delete: [8, 46]
        },
        Rn = {
            esc: ["Esc", "Escape"],
            tab: "Tab",
            enter: "Enter",
            space: [" ", "Spacebar"],
            up: ["Up", "ArrowUp"],
            left: ["Left", "ArrowLeft"],
            right: ["Right", "ArrowRight"],
            down: ["Down", "ArrowDown"],
            delete: ["Backspace", "Delete", "Del"]
        },
        genGuard = function(e) {
            return "if(" + e + ")return null;"
        },
        Nn = {
            stop: "$event.stopPropagation();",
            prevent: "$event.preventDefault();",
            self: genGuard("$event.target !== $event.currentTarget"),
            ctrl: genGuard("!$event.ctrlKey"),
            shift: genGuard("!$event.shiftKey"),
            alt: genGuard("!$event.altKey"),
            meta: genGuard("!$event.metaKey"),
            left: genGuard("'button' in $event && $event.button !== 0"),
            middle: genGuard("'button' in $event && $event.button !== 1"),
            right: genGuard("'button' in $event && $event.button !== 2")
        };

    function genHandlers(e, t) {
        var n = t ? "nativeOn:" : "on:",
            r = "",
            i = "";
        for (var a in e) {
            var s = genHandler(e[a]);
            e[a] && e[a].dynamic ? i += a + "," + s + "," : r += '"' + a + '":' + s + ","
        }
        return r = "{" + r.slice(0, -1) + "}", i ? n + "_d(" + r + ",[" + i.slice(0, -1) + "])" : n + r
    }

    function genHandler(e) {
        if (!e) return "function(){}";
        if (Array.isArray(e)) return "[" + e.map((function(e) {
            return genHandler(e)
        })).join(",") + "]";
        var t = On.test(e.value),
            n = Dn.test(e.value),
            r = On.test(e.value.replace(Tn, ""));
        if (e.modifiers) {
            var i = "",
                a = "",
                s = [];
            for (var o in e.modifiers)
                if (Nn[o]) a += Nn[o], En[o] && s.push(o);
                else if ("exact" === o) {
                var l = e.modifiers;
                a += genGuard(["ctrl", "shift", "alt", "meta"].filter((function(e) {
                    return !l[e]
                })).map((function(e) {
                    return "$event." + e + "Key"
                })).join("||"))
            } else s.push(o);
            return s.length && (i += function genKeyFilter(e) {
                return "if(!$event.type.indexOf('key')&&" + e.map(genFilterCode).join("&&") + ")return null;"
            }(s)), a && (i += a), "function($event){" + i + (t ? "return " + e.value + "($event)" : n ? "return (" + e.value + ")($event)" : r ? "return " + e.value : e.value) + "}"
        }
        return t || n ? e.value : "function($event){" + (r ? "return " + e.value : e.value) + "}"
    }

    function genFilterCode(e) {
        var t = parseInt(e, 10);
        if (t) return "$event.keyCode!==" + t;
        var n = En[e],
            r = Rn[e];
        return "_k($event.keyCode," + JSON.stringify(e) + "," + JSON.stringify(n) + ",$event.key," + JSON.stringify(r) + ")"
    }
    var jn = {
            on: function on(e, t) {
                e.wrapListeners = function(e) {
                    return "_g(" + e + "," + t.value + ")"
                }
            },
            bind: function bind$1(e, t) {
                e.wrapData = function(n) {
                    return "_b(" + n + ",'" + e.tag + "'," + t.value + "," + (t.modifiers && t.modifiers.prop ? "true" : "false") + (t.modifiers && t.modifiers.sync ? ",true" : "") + ")"
                }
            },
            cloak: noop
        },
        Fn = function CodegenState(e) {
            this.options = e, this.warn = e.warn || baseWarn, this.transforms = pluckModuleFunction(e.modules, "transformCode"), this.dataGenFns = pluckModuleFunction(e.modules, "genData"), this.directives = extend(extend({}, jn), e.directives);
            var t = e.isReservedTag || no;
            this.maybeComponent = function(e) {
                return !!e.component || !t(e.tag)
            }, this.onceId = 0, this.staticRenderFns = [], this.pre = !1
        };

    function generate(e, t) {
        var n = new Fn(t);
        return {
            render: "with(this){return " + (e ? genElement(e, n) : '_c("div")') + "}",
            staticRenderFns: n.staticRenderFns
        }
    }

    function genElement(e, t) {
        if (e.parent && (e.pre = e.pre || e.parent.pre), e.staticRoot && !e.staticProcessed) return genStatic(e, t);
        if (e.once && !e.onceProcessed) return genOnce(e, t);
        if (e.for && !e.forProcessed) return genFor(e, t);
        if (e.if && !e.ifProcessed) return genIf(e, t);
        if ("template" !== e.tag || e.slotTarget || t.pre) {
            if ("slot" === e.tag) return function genSlot(e, t) {
                var n = e.slotName || '"default"',
                    r = genChildren(e, t),
                    i = "_t(" + n + (r ? "," + r : ""),
                    a = e.attrs || e.dynamicAttrs ? genProps((e.attrs || []).concat(e.dynamicAttrs || []).map((function(e) {
                        return {
                            name: c(e.name),
                            value: e.value,
                            dynamic: e.dynamic
                        }
                    }))) : null,
                    s = e.attrsMap["v-bind"];
                !a && !s || r || (i += ",null");
                a && (i += "," + a);
                s && (i += (a ? "" : ",null") + "," + s);
                return i + ")"
            }(e, t);
            var n;
            if (e.component) n = function genComponent(e, t, n) {
                var r = t.inlineTemplate ? null : genChildren(t, n, !0);
                return "_c(" + e + "," + genData$2(t, n) + (r ? "," + r : "") + ")"
            }(e.component, e, t);
            else {
                var r;
                (!e.plain || e.pre && t.maybeComponent(e)) && (r = genData$2(e, t));
                var i = e.inlineTemplate ? null : genChildren(e, t, !0);
                n = "_c('" + e.tag + "'" + (r ? "," + r : "") + (i ? "," + i : "") + ")"
            }
            for (var a = 0; a < t.transforms.length; a++) n = t.transforms[a](e, n);
            return n
        }
        return genChildren(e, t) || "void 0"
    }

    function genStatic(e, t) {
        e.staticProcessed = !0;
        var n = t.pre;
        return e.pre && (t.pre = e.pre), t.staticRenderFns.push("with(this){return " + genElement(e, t) + "}"), t.pre = n, "_m(" + (t.staticRenderFns.length - 1) + (e.staticInFor ? ",true" : "") + ")"
    }

    function genOnce(e, t) {
        if (e.onceProcessed = !0, e.if && !e.ifProcessed) return genIf(e, t);
        if (e.staticInFor) {
            for (var n = "", r = e.parent; r;) {
                if (r.for) {
                    n = r.key;
                    break
                }
                r = r.parent
            }
            return n ? "_o(" + genElement(e, t) + "," + t.onceId++ + "," + n + ")" : genElement(e, t)
        }
        return genStatic(e, t)
    }

    function genIf(e, t, n, r) {
        return e.ifProcessed = !0,
            function genIfConditions(e, t, n, r) {
                if (!e.length) return r || "_e()";
                var i = e.shift();
                return i.exp ? "(" + i.exp + ")?" + genTernaryExp(i.block) + ":" + genIfConditions(e, t, n, r) : "" + genTernaryExp(i.block);

                function genTernaryExp(e) {
                    return n ? n(e, t) : e.once ? genOnce(e, t) : genElement(e, t)
                }
            }(e.ifConditions.slice(), t, n, r)
    }

    function genFor(e, t, n, r) {
        var i = e.for,
            a = e.alias,
            s = e.iterator1 ? "," + e.iterator1 : "",
            o = e.iterator2 ? "," + e.iterator2 : "";
        return e.forProcessed = !0, (r || "_l") + "((" + i + "),function(" + a + s + o + "){return " + (n || genElement)(e, t) + "})"
    }

    function genData$2(e, t) {
        var n = "{",
            r = function genDirectives(e, t) {
                var n = e.directives;
                if (!n) return;
                var r, i, a, s, o = "directives:[",
                    l = !1;
                for (r = 0, i = n.length; r < i; r++) {
                    a = n[r], s = !0;
                    var c = t.directives[a.name];
                    c && (s = !!c(e, a, t.warn)), s && (l = !0, o += '{name:"' + a.name + '",rawName:"' + a.rawName + '"' + (a.value ? ",value:(" + a.value + "),expression:" + JSON.stringify(a.value) : "") + (a.arg ? ",arg:" + (a.isDynamicArg ? a.arg : '"' + a.arg + '"') : "") + (a.modifiers ? ",modifiers:" + JSON.stringify(a.modifiers) : "") + "},")
                }
                if (l) return o.slice(0, -1) + "]"
            }(e, t);
        r && (n += r + ","), e.key && (n += "key:" + e.key + ","), e.ref && (n += "ref:" + e.ref + ","), e.refInFor && (n += "refInFor:true,"), e.pre && (n += "pre:true,"), e.component && (n += 'tag:"' + e.tag + '",');
        for (var i = 0; i < t.dataGenFns.length; i++) n += t.dataGenFns[i](e);
        if (e.attrs && (n += "attrs:" + genProps(e.attrs) + ","), e.props && (n += "domProps:" + genProps(e.props) + ","), e.events && (n += genHandlers(e.events, !1) + ","), e.nativeEvents && (n += genHandlers(e.nativeEvents, !0) + ","), e.slotTarget && !e.slotScope && (n += "slot:" + e.slotTarget + ","), e.scopedSlots && (n += function genScopedSlots(e, t, n) {
                var r = e.for || Object.keys(t).some((function(e) {
                        var n = t[e];
                        return n.slotTargetDynamic || n.if || n.for || containsSlotChild(n)
                    })),
                    i = !!e.if;
                if (!r)
                    for (var a = e.parent; a;) {
                        if (a.slotScope && "_empty_" !== a.slotScope || a.for) {
                            r = !0;
                            break
                        }
                        a.if && (i = !0), a = a.parent
                    }
                var s = Object.keys(t).map((function(e) {
                    return genScopedSlot(t[e], n)
                })).join(",");
                return "scopedSlots:_u([" + s + "]" + (r ? ",null,true" : "") + (!r && i ? ",null,false," + function hash(e) {
                    var t = 5381,
                        n = e.length;
                    for (; n;) t = 33 * t ^ e.charCodeAt(--n);
                    return t >>> 0
                }(s) : "") + ")"
            }(e, e.scopedSlots, t) + ","), e.model && (n += "model:{value:" + e.model.value + ",callback:" + e.model.callback + ",expression:" + e.model.expression + "},"), e.inlineTemplate) {
            var a = function genInlineTemplate(e, t) {
                var n = e.children[0];
                0;
                if (n && 1 === n.type) {
                    var r = generate(n, t.options);
                    return "inlineTemplate:{render:function(){" + r.render + "},staticRenderFns:[" + r.staticRenderFns.map((function(e) {
                        return "function(){" + e + "}"
                    })).join(",") + "]}"
                }
            }(e, t);
            a && (n += a + ",")
        }
        return n = n.replace(/,$/, "") + "}", e.dynamicAttrs && (n = "_b(" + n + ',"' + e.tag + '",' + genProps(e.dynamicAttrs) + ")"), e.wrapData && (n = e.wrapData(n)), e.wrapListeners && (n = e.wrapListeners(n)), n
    }

    function containsSlotChild(e) {
        return 1 === e.type && ("slot" === e.tag || e.children.some(containsSlotChild))
    }

    function genScopedSlot(e, t) {
        var n = e.attrsMap["slot-scope"];
        if (e.if && !e.ifProcessed && !n) return genIf(e, t, genScopedSlot, "null");
        if (e.for && !e.forProcessed) return genFor(e, t, genScopedSlot);
        var r = "_empty_" === e.slotScope ? "" : String(e.slotScope),
            i = "function(" + r + "){return " + ("template" === e.tag ? e.if && n ? "(" + e.if+")?" + (genChildren(e, t) || "undefined") + ":undefined" : genChildren(e, t) || "undefined" : genElement(e, t)) + "}",
            a = r ? "" : ",proxy:true";
        return "{key:" + (e.slotTarget || '"default"') + ",fn:" + i + a + "}"
    }

    function genChildren(e, t, n, r, i) {
        var a = e.children;
        if (a.length) {
            var s = a[0];
            if (1 === a.length && s.for && "template" !== s.tag && "slot" !== s.tag) {
                var o = n ? t.maybeComponent(s) ? ",1" : ",0" : "";
                return "" + (r || genElement)(s, t) + o
            }
            var l = n ? function getNormalizationType(e, t) {
                    for (var n = 0, r = 0; r < e.length; r++) {
                        var i = e[r];
                        if (1 === i.type) {
                            if (needsNormalization(i) || i.ifConditions && i.ifConditions.some((function(e) {
                                    return needsNormalization(e.block)
                                }))) {
                                n = 2;
                                break
                            }(t(i) || i.ifConditions && i.ifConditions.some((function(e) {
                                return t(e.block)
                            }))) && (n = 1)
                        }
                    }
                    return n
                }(a, t.maybeComponent) : 0,
                c = i || genNode;
            return "[" + a.map((function(e) {
                return c(e, t)
            })).join(",") + "]" + (l ? "," + l : "")
        }
    }

    function needsNormalization(e) {
        return void 0 !== e.for || "template" === e.tag || "slot" === e.tag
    }

    function genNode(e, t) {
        return 1 === e.type ? genElement(e, t) : 3 === e.type && e.isComment ? function genComment(e) {
            return "_e(" + JSON.stringify(e.text) + ")"
        }(e) : function genText(e) {
            return "_v(" + (2 === e.type ? e.expression : transformSpecialNewlines(JSON.stringify(e.text))) + ")"
        }(e)
    }

    function genProps(e) {
        for (var t = "", n = "", r = 0; r < e.length; r++) {
            var i = e[r],
                a = transformSpecialNewlines(i.value);
            i.dynamic ? n += i.name + "," + a + "," : t += '"' + i.name + '":' + a + ","
        }
        return t = "{" + t.slice(0, -1) + "}", n ? "_d(" + t + ",[" + n.slice(0, -1) + "])" : t
    }

    function transformSpecialNewlines(e) {
        return e.replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029")
    }
    new RegExp("\\b" + "do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,super,throw,while,yield,delete,export,import,return,switch,default,extends,finally,continue,debugger,function,arguments".split(",").join("\\b|\\b") + "\\b"), new RegExp("\\b" + "delete,typeof,void".split(",").join("\\s*\\([^\\)]*\\)|\\b") + "\\s*\\([^\\)]*\\)");

    function createFunction(e, t) {
        try {
            return new Function(e)
        } catch (n) {
            return t.push({
                err: n,
                code: e
            }), noop
        }
    }

    function createCompileToFunctionFn(e) {
        var t = Object.create(null);
        return function compileToFunctions(n, r, i) {
            (r = extend({}, r)).warn;
            delete r.warn;
            var a = r.delimiters ? String(r.delimiters) + n : n;
            if (t[a]) return t[a];
            var s = e(n, r);
            var o = {},
                l = [];
            return o.render = createFunction(s.render, l), o.staticRenderFns = s.staticRenderFns.map((function(e) {
                return createFunction(e, l)
            })), t[a] = o
        }
    }
    var In, Pn = function createCompilerCreator(e) {
            return function createCompiler(t) {
                function compile(n, r) {
                    var i = Object.create(t),
                        a = [],
                        s = [];
                    if (r)
                        for (var o in r.modules && (i.modules = (t.modules || []).concat(r.modules)), r.directives && (i.directives = extend(Object.create(t.directives || null), r.directives)), r) "modules" !== o && "directives" !== o && (i[o] = r[o]);
                    i.warn = function(e, t, n) {
                        (n ? s : a).push(e)
                    };
                    var l = e(n.trim(), i);
                    return l.errors = a, l.tips = s, l
                }
                return {
                    compile: compile,
                    compileToFunctions: createCompileToFunctionFn(compile)
                }
            }
        }((function baseCompile(e, t) {
            var n = parse(e.trim(), t);
            !1 !== t.optimize && optimize(n, t);
            var r = generate(n, t);
            return {
                ast: n,
                render: r.render,
                staticRenderFns: r.staticRenderFns
            }
        }))(Sn),
        Ln = (Pn.compile, Pn.compileToFunctions);

    function getShouldDecode(e) {
        return (In = In || document.createElement("div")).innerHTML = e ? '<a href="\n"/>' : '<div a="\n"/>', In.innerHTML.indexOf("&#10;") > 0
    }
    var Mn = !!w && getShouldDecode(!1),
        Un = !!w && getShouldDecode(!0),
        Bn = cached((function(e) {
            var t = query(e);
            return t && t.innerHTML
        })),
        Hn = Vue.prototype.$mount;
    Vue.prototype.$mount = function(e, t) {
        if ((e = e && query(e)) === document.body || e === document.documentElement) return this;
        var n = this.$options;
        if (!n.render) {
            var r = n.template;
            if (r)
                if ("string" == typeof r) "#" === r.charAt(0) && (r = Bn(r));
                else {
                    if (!r.nodeType) return this;
                    r = r.innerHTML
                }
            else e && (r = function getOuterHTML(e) {
                if (e.outerHTML) return e.outerHTML;
                var t = document.createElement("div");
                return t.appendChild(e.cloneNode(!0)), t.innerHTML
            }(e));
            if (r) {
                0;
                var i = Ln(r, {
                        outputSourceRange: !1,
                        shouldDecodeNewlines: Mn,
                        shouldDecodeNewlinesForHref: Un,
                        delimiters: n.delimiters,
                        comments: n.comments
                    }, this),
                    a = i.render,
                    s = i.staticRenderFns;
                n.render = a, n.staticRenderFns = s
            }
        }
        return Hn.call(this, e, t)
    }, Vue.compile = Ln, t.a = Vue
}, function(e, t) {
    e.exports = require("path")
}, function(e, t, n) {
    "use strict";
    var r = n(8),
        i = Object.prototype.toString;

    function isArray(e) {
        return "[object Array]" === i.call(e)
    }

    function isUndefined(e) {
        return void 0 === e
    }

    function isObject(e) {
        return null !== e && "object" == typeof e
    }

    function isPlainObject(e) {
        if ("[object Object]" !== i.call(e)) return !1;
        var t = Object.getPrototypeOf(e);
        return null === t || t === Object.prototype
    }

    function isFunction(e) {
        return "[object Function]" === i.call(e)
    }

    function forEach(e, t) {
        if (null != e)
            if ("object" != typeof e && (e = [e]), isArray(e))
                for (var n = 0, r = e.length; n < r; n++) t.call(null, e[n], n, e);
            else
                for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && t.call(null, e[i], i, e)
    }
    e.exports = {
        isArray: isArray,
        isArrayBuffer: function isArrayBuffer(e) {
            return "[object ArrayBuffer]" === i.call(e)
        },
        isBuffer: function isBuffer(e) {
            return null !== e && !isUndefined(e) && null !== e.constructor && !isUndefined(e.constructor) && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e)
        },
        isFormData: function isFormData(e) {
            return "undefined" != typeof FormData && e instanceof FormData
        },
        isArrayBufferView: function isArrayBufferView(e) {
            return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer && e.buffer instanceof ArrayBuffer
        },
        isString: function isString(e) {
            return "string" == typeof e
        },
        isNumber: function isNumber(e) {
            return "number" == typeof e
        },
        isObject: isObject,
        isPlainObject: isPlainObject,
        isUndefined: isUndefined,
        isDate: function isDate(e) {
            return "[object Date]" === i.call(e)
        },
        isFile: function isFile(e) {
            return "[object File]" === i.call(e)
        },
        isBlob: function isBlob(e) {
            return "[object Blob]" === i.call(e)
        },
        isFunction: isFunction,
        isStream: function isStream(e) {
            return isObject(e) && isFunction(e.pipe)
        },
        isURLSearchParams: function isURLSearchParams(e) {
            return "undefined" != typeof URLSearchParams && e instanceof URLSearchParams
        },
        isStandardBrowserEnv: function isStandardBrowserEnv() {
            return ("undefined" == typeof navigator || "ReactNative" !== navigator.product && "NativeScript" !== navigator.product && "NS" !== navigator.product) && ("undefined" != typeof window && "undefined" != typeof document)
        },
        forEach: forEach,
        merge: function merge() {
            var e = {};

            function assignValue(t, n) {
                isPlainObject(e[n]) && isPlainObject(t) ? e[n] = merge(e[n], t) : isPlainObject(t) ? e[n] = merge({}, t) : isArray(t) ? e[n] = t.slice() : e[n] = t
            }
            for (var t = 0, n = arguments.length; t < n; t++) forEach(arguments[t], assignValue);
            return e
        },
        extend: function extend(e, t, n) {
            return forEach(t, (function assignValue(t, i) {
                e[i] = n && "function" == typeof t ? r(t, n) : t
            })), e
        },
        trim: function trim(e) {
            return e.replace(/^\s*/, "").replace(/\s*$/, "")
        },
        stripBOM: function stripBOM(e) {
            return 65279 === e.charCodeAt(0) && (e = e.slice(1)), e
        }
    }
}, function(e, t) {
    e.exports = require("electron-store")
}, function(e, t, n) {
    e.exports = n(29)
}, function(e, t) {
    e.exports = require("fs")
}, function(e, t) {
    e.exports = require("vue-tippy")
}, function(e, t, n) {
    "use strict";
    e.exports = function bind(e, t) {
        return function wrap() {
            for (var n = new Array(arguments.length), r = 0; r < n.length; r++) n[r] = arguments[r];
            return e.apply(t, n)
        }
    }
}, function(e, t, n) {
    "use strict";
    var r = n(3);

    function encode(e) {
        return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
    }
    e.exports = function buildURL(e, t, n) {
        if (!t) return e;
        var i;
        if (n) i = n(t);
        else if (r.isURLSearchParams(t)) i = t.toString();
        else {
            var a = [];
            r.forEach(t, (function serialize(e, t) {
                null != e && (r.isArray(e) ? t += "[]" : e = [e], r.forEach(e, (function parseValue(e) {
                    r.isDate(e) ? e = e.toISOString() : r.isObject(e) && (e = JSON.stringify(e)), a.push(encode(t) + "=" + encode(e))
                })))
            })), i = a.join("&")
        }
        if (i) {
            var s = e.indexOf("#"); - 1 !== s && (e = e.slice(0, s)), e += (-1 === e.indexOf("?") ? "?" : "&") + i
        }
        return e
    }
}, function(e, t, n) {
    "use strict";
    e.exports = function isCancel(e) {
        return !(!e || !e.__CANCEL__)
    }
}, function(e, t, n) {
    "use strict";
    var r = n(3),
        i = n(34),
        a = {
            "Content-Type": "application/x-www-form-urlencoded"
        };

    function setContentTypeIfUnset(e, t) {
        !r.isUndefined(e) && r.isUndefined(e["Content-Type"]) && (e["Content-Type"] = t)
    }
    var s = {
        adapter: function getDefaultAdapter() {
            var e;
            return ("undefined" != typeof XMLHttpRequest || "undefined" != typeof process && "[object process]" === Object.prototype.toString.call(process)) && (e = n(12)), e
        }(),
        transformRequest: [function transformRequest(e, t) {
            return i(t, "Accept"), i(t, "Content-Type"), r.isFormData(e) || r.isArrayBuffer(e) || r.isBuffer(e) || r.isStream(e) || r.isFile(e) || r.isBlob(e) ? e : r.isArrayBufferView(e) ? e.buffer : r.isURLSearchParams(e) ? (setContentTypeIfUnset(t, "application/x-www-form-urlencoded;charset=utf-8"), e.toString()) : r.isObject(e) ? (setContentTypeIfUnset(t, "application/json;charset=utf-8"), JSON.stringify(e)) : e
        }],
        transformResponse: [function transformResponse(e) {
            if ("string" == typeof e) try {
                e = JSON.parse(e)
            } catch (e) {}
            return e
        }],
        timeout: 0,
        xsrfCookieName: "XSRF-TOKEN",
        xsrfHeaderName: "X-XSRF-TOKEN",
        maxContentLength: -1,
        maxBodyLength: -1,
        validateStatus: function validateStatus(e) {
            return e >= 200 && e < 300
        },
        headers: {
            common: {
                Accept: "application/json, text/plain, */*"
            }
        }
    };
    r.forEach(["delete", "get", "head"], (function forEachMethodNoData(e) {
        s.headers[e] = {}
    })), r.forEach(["post", "put", "patch"], (function forEachMethodWithData(e) {
        s.headers[e] = r.merge(a)
    })), e.exports = s
}, function(e, t, n) {
    "use strict";
    var r = n(3),
        i = n(35),
        a = n(37),
        s = n(9),
        o = n(38),
        l = n(41),
        c = n(42),
        d = n(13);
    e.exports = function xhrAdapter(e) {
        return new Promise((function dispatchXhrRequest(t, n) {
            var u = e.data,
                f = e.headers;
            r.isFormData(u) && delete f["Content-Type"];
            var p = new XMLHttpRequest;
            if (e.auth) {
                var m = e.auth.username || "",
                    h = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
                f.Authorization = "Basic " + btoa(m + ":" + h)
            }
            var v = o(e.baseURL, e.url);
            if (p.open(e.method.toUpperCase(), s(v, e.params, e.paramsSerializer), !0), p.timeout = e.timeout, p.onreadystatechange = function handleLoad() {
                    if (p && 4 === p.readyState && (0 !== p.status || p.responseURL && 0 === p.responseURL.indexOf("file:"))) {
                        var r = "getAllResponseHeaders" in p ? l(p.getAllResponseHeaders()) : null,
                            a = {
                                data: e.responseType && "text" !== e.responseType ? p.response : p.responseText,
                                status: p.status,
                                statusText: p.statusText,
                                headers: r,
                                config: e,
                                request: p
                            };
                        i(t, n, a), p = null
                    }
                }, p.onabort = function handleAbort() {
                    p && (n(d("Request aborted", e, "ECONNABORTED", p)), p = null)
                }, p.onerror = function handleError() {
                    n(d("Network Error", e, null, p)), p = null
                }, p.ontimeout = function handleTimeout() {
                    var t = "timeout of " + e.timeout + "ms exceeded";
                    e.timeoutErrorMessage && (t = e.timeoutErrorMessage), n(d(t, e, "ECONNABORTED", p)), p = null
                }, r.isStandardBrowserEnv()) {
                var g = (e.withCredentials || c(v)) && e.xsrfCookieName ? a.read(e.xsrfCookieName) : void 0;
                g && (f[e.xsrfHeaderName] = g)
            }
            if ("setRequestHeader" in p && r.forEach(f, (function setRequestHeader(e, t) {
                    void 0 === u && "content-type" === t.toLowerCase() ? delete f[t] : p.setRequestHeader(t, e)
                })), r.isUndefined(e.withCredentials) || (p.withCredentials = !!e.withCredentials), e.responseType) try {
                p.responseType = e.responseType
            } catch (t) {
                if ("json" !== e.responseType) throw t
            }
            "function" == typeof e.onDownloadProgress && p.addEventListener("progress", e.onDownloadProgress), "function" == typeof e.onUploadProgress && p.upload && p.upload.addEventListener("progress", e.onUploadProgress), e.cancelToken && e.cancelToken.promise.then((function onCanceled(e) {
                p && (p.abort(), n(e), p = null)
            })), u || (u = null), p.send(u)
        }))
    }
}, function(e, t, n) {
    "use strict";
    var r = n(36);
    e.exports = function createError(e, t, n, i, a) {
        var s = new Error(e);
        return r(s, t, n, i, a)
    }
}, function(e, t, n) {
    "use strict";
    var r = n(3);
    e.exports = function mergeConfig(e, t) {
        t = t || {};
        var n = {},
            i = ["url", "method", "data"],
            a = ["headers", "auth", "proxy", "params"],
            s = ["baseURL", "transformRequest", "transformResponse", "paramsSerializer", "timeout", "timeoutMessage", "withCredentials", "adapter", "responseType", "xsrfCookieName", "xsrfHeaderName", "onUploadProgress", "onDownloadProgress", "decompress", "maxContentLength", "maxBodyLength", "maxRedirects", "transport", "httpAgent", "httpsAgent", "cancelToken", "socketPath", "responseEncoding"],
            o = ["validateStatus"];

        function getMergedValue(e, t) {
            return r.isPlainObject(e) && r.isPlainObject(t) ? r.merge(e, t) : r.isPlainObject(t) ? r.merge({}, t) : r.isArray(t) ? t.slice() : t
        }

        function mergeDeepProperties(i) {
            r.isUndefined(t[i]) ? r.isUndefined(e[i]) || (n[i] = getMergedValue(void 0, e[i])) : n[i] = getMergedValue(e[i], t[i])
        }
        r.forEach(i, (function valueFromConfig2(e) {
            r.isUndefined(t[e]) || (n[e] = getMergedValue(void 0, t[e]))
        })), r.forEach(a, mergeDeepProperties), r.forEach(s, (function defaultToConfig2(i) {
            r.isUndefined(t[i]) ? r.isUndefined(e[i]) || (n[i] = getMergedValue(void 0, e[i])) : n[i] = getMergedValue(void 0, t[i])
        })), r.forEach(o, (function merge(r) {
            r in t ? n[r] = getMergedValue(e[r], t[r]) : r in e && (n[r] = getMergedValue(void 0, e[r]))
        }));
        var l = i.concat(a).concat(s).concat(o),
            c = Object.keys(e).concat(Object.keys(t)).filter((function filterAxiosKeys(e) {
                return -1 === l.indexOf(e)
            }));
        return r.forEach(c, mergeDeepProperties), n
    }
}, function(e, t, n) {
    "use strict";

    function Cancel(e) {
        this.message = e
    }
    Cancel.prototype.toString = function toString() {
        return "Cancel" + (this.message ? ": " + this.message : "")
    }, Cancel.prototype.__CANCEL__ = !0, e.exports = Cancel
}, function(e, t, n) {}, function(e, t, n) {}, function(e, t, n) {}, function(e, t, n) {}, function(e, t, n) {}, function(e, t, n) {}, function(e, t, n) {}, function(e, t, n) {}, function(e, t) {
    e.exports = require("vue-js-modal")
}, function(e, t) {
    e.exports = require("vue-waves-effect")
}, function(e, t) {
    e.exports = require("hasha")
}, function(e, t, n) {
    n(28), e.exports = n(66)
}, function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n(1);
    r.a.config.productionTip = !1, r.a.config.devtools = !1
}, function(e, t, n) {
    "use strict";
    var r = n(3),
        i = n(8),
        a = n(30),
        s = n(14);

    function createInstance(e) {
        var t = new a(e),
            n = i(a.prototype.request, t);
        return r.extend(n, a.prototype, t), r.extend(n, t), n
    }
    var o = createInstance(n(11));
    o.Axios = a, o.create = function create(e) {
        return createInstance(s(o.defaults, e))
    }, o.Cancel = n(15), o.CancelToken = n(43), o.isCancel = n(10), o.all = function all(e) {
        return Promise.all(e)
    }, o.spread = n(44), o.isAxiosError = n(45), e.exports = o, e.exports.default = o
}, function(e, t, n) {
    "use strict";
    var r = n(3),
        i = n(9),
        a = n(31),
        s = n(32),
        o = n(14);

    function Axios(e) {
        this.defaults = e, this.interceptors = {
            request: new a,
            response: new a
        }
    }
    Axios.prototype.request = function request(e) {
        "string" == typeof e ? (e = arguments[1] || {}).url = arguments[0] : e = e || {}, (e = o(this.defaults, e)).method ? e.method = e.method.toLowerCase() : this.defaults.method ? e.method = this.defaults.method.toLowerCase() : e.method = "get";
        var t = [s, void 0],
            n = Promise.resolve(e);
        for (this.interceptors.request.forEach((function unshiftRequestInterceptors(e) {
                t.unshift(e.fulfilled, e.rejected)
            })), this.interceptors.response.forEach((function pushResponseInterceptors(e) {
                t.push(e.fulfilled, e.rejected)
            })); t.length;) n = n.then(t.shift(), t.shift());
        return n
    }, Axios.prototype.getUri = function getUri(e) {
        return e = o(this.defaults, e), i(e.url, e.params, e.paramsSerializer).replace(/^\?/, "")
    }, r.forEach(["delete", "get", "head", "options"], (function forEachMethodNoData(e) {
        Axios.prototype[e] = function(t, n) {
            return this.request(o(n || {}, {
                method: e,
                url: t,
                data: (n || {}).data
            }))
        }
    })), r.forEach(["post", "put", "patch"], (function forEachMethodWithData(e) {
        Axios.prototype[e] = function(t, n, r) {
            return this.request(o(r || {}, {
                method: e,
                url: t,
                data: n
            }))
        }
    })), e.exports = Axios
}, function(e, t, n) {
    "use strict";
    var r = n(3);

    function InterceptorManager() {
        this.handlers = []
    }
    InterceptorManager.prototype.use = function use(e, t) {
        return this.handlers.push({
            fulfilled: e,
            rejected: t
        }), this.handlers.length - 1
    }, InterceptorManager.prototype.eject = function eject(e) {
        this.handlers[e] && (this.handlers[e] = null)
    }, InterceptorManager.prototype.forEach = function forEach(e) {
        r.forEach(this.handlers, (function forEachHandler(t) {
            null !== t && e(t)
        }))
    }, e.exports = InterceptorManager
}, function(e, t, n) {
    "use strict";
    var r = n(3),
        i = n(33),
        a = n(10),
        s = n(11);

    function throwIfCancellationRequested(e) {
        e.cancelToken && e.cancelToken.throwIfRequested()
    }
    e.exports = function dispatchRequest(e) {
        return throwIfCancellationRequested(e), e.headers = e.headers || {}, e.data = i(e.data, e.headers, e.transformRequest), e.headers = r.merge(e.headers.common || {}, e.headers[e.method] || {}, e.headers), r.forEach(["delete", "get", "head", "post", "put", "patch", "common"], (function cleanHeaderConfig(t) {
            delete e.headers[t]
        })), (e.adapter || s.adapter)(e).then((function onAdapterResolution(t) {
            return throwIfCancellationRequested(e), t.data = i(t.data, t.headers, e.transformResponse), t
        }), (function onAdapterRejection(t) {
            return a(t) || (throwIfCancellationRequested(e), t && t.response && (t.response.data = i(t.response.data, t.response.headers, e.transformResponse))), Promise.reject(t)
        }))
    }
}, function(e, t, n) {
    "use strict";
    var r = n(3);
    e.exports = function transformData(e, t, n) {
        return r.forEach(n, (function transform(n) {
            e = n(e, t)
        })), e
    }
}, function(e, t, n) {
    "use strict";
    var r = n(3);
    e.exports = function normalizeHeaderName(e, t) {
        r.forEach(e, (function processHeader(n, r) {
            r !== t && r.toUpperCase() === t.toUpperCase() && (e[t] = n, delete e[r])
        }))
    }
}, function(e, t, n) {
    "use strict";
    var r = n(13);
    e.exports = function settle(e, t, n) {
        var i = n.config.validateStatus;
        n.status && i && !i(n.status) ? t(r("Request failed with status code " + n.status, n.config, null, n.request, n)) : e(n)
    }
}, function(e, t, n) {
    "use strict";
    e.exports = function enhanceError(e, t, n, r, i) {
        return e.config = t, n && (e.code = n), e.request = r, e.response = i, e.isAxiosError = !0, e.toJSON = function toJSON() {
            return {
                message: this.message,
                name: this.name,
                description: this.description,
                number: this.number,
                fileName: this.fileName,
                lineNumber: this.lineNumber,
                columnNumber: this.columnNumber,
                stack: this.stack,
                config: this.config,
                code: this.code
            }
        }, e
    }
}, function(e, t, n) {
    "use strict";
    var r = n(3);
    e.exports = r.isStandardBrowserEnv() ? function standardBrowserEnv() {
        return {
            write: function write(e, t, n, i, a, s) {
                var o = [];
                o.push(e + "=" + encodeURIComponent(t)), r.isNumber(n) && o.push("expires=" + new Date(n).toGMTString()), r.isString(i) && o.push("path=" + i), r.isString(a) && o.push("domain=" + a), !0 === s && o.push("secure"), document.cookie = o.join("; ")
            },
            read: function read(e) {
                var t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
                return t ? decodeURIComponent(t[3]) : null
            },
            remove: function remove(e) {
                this.write(e, "", Date.now() - 864e5)
            }
        }
    }() : {
        write: function write() {},
        read: function read() {
            return null
        },
        remove: function remove() {}
    }
}, function(e, t, n) {
    "use strict";
    var r = n(39),
        i = n(40);
    e.exports = function buildFullPath(e, t) {
        return e && !r(t) ? i(e, t) : t
    }
}, function(e, t, n) {
    "use strict";
    e.exports = function isAbsoluteURL(e) {
        return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)
    }
}, function(e, t, n) {
    "use strict";
    e.exports = function combineURLs(e, t) {
        return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e
    }
}, function(e, t, n) {
    "use strict";
    var r = n(3),
        i = ["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"];
    e.exports = function parseHeaders(e) {
        var t, n, a, s = {};
        return e ? (r.forEach(e.split("\n"), (function parser(e) {
            if (a = e.indexOf(":"), t = r.trim(e.substr(0, a)).toLowerCase(), n = r.trim(e.substr(a + 1)), t) {
                if (s[t] && i.indexOf(t) >= 0) return;
                s[t] = "set-cookie" === t ? (s[t] ? s[t] : []).concat([n]) : s[t] ? s[t] + ", " + n : n
            }
        })), s) : s
    }
}, function(e, t, n) {
    "use strict";
    var r = n(3);
    e.exports = r.isStandardBrowserEnv() ? function standardBrowserEnv() {
        var e, t = /(msie|trident)/i.test(navigator.userAgent),
            n = document.createElement("a");

        function resolveURL(e) {
            var r = e;
            return t && (n.setAttribute("href", r), r = n.href), n.setAttribute("href", r), {
                href: n.href,
                protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
                host: n.host,
                search: n.search ? n.search.replace(/^\?/, "") : "",
                hash: n.hash ? n.hash.replace(/^#/, "") : "",
                hostname: n.hostname,
                port: n.port,
                pathname: "/" === n.pathname.charAt(0) ? n.pathname : "/" + n.pathname
            }
        }
        return e = resolveURL(window.location.href),
            function isURLSameOrigin(t) {
                var n = r.isString(t) ? resolveURL(t) : t;
                return n.protocol === e.protocol && n.host === e.host
            }
    }() : function isURLSameOrigin() {
        return !0
    }
}, function(e, t, n) {
    "use strict";
    var r = n(15);

    function CancelToken(e) {
        if ("function" != typeof e) throw new TypeError("executor must be a function.");
        var t;
        this.promise = new Promise((function promiseExecutor(e) {
            t = e
        }));
        var n = this;
        e((function cancel(e) {
            n.reason || (n.reason = new r(e), t(n.reason))
        }))
    }
    CancelToken.prototype.throwIfRequested = function throwIfRequested() {
        if (this.reason) throw this.reason
    }, CancelToken.source = function source() {
        var e;
        return {
            token: new CancelToken((function executor(t) {
                e = t
            })),
            cancel: e
        }
    }, e.exports = CancelToken
}, function(e, t, n) {
    "use strict";
    e.exports = function spread(e) {
        return function wrap(t) {
            return e.apply(null, t)
        }
    }
}, function(e, t, n) {
    "use strict";
    e.exports = function isAxiosError(e) {
        return "object" == typeof e && !0 === e.isAxiosError
    }
}, function(e, t) {
    e.exports = require("jquery")
}, function(e, t) {
    e.exports = require("popper.js")
}, function(e, t) {
    e.exports = require("bootstrap")
}, function(e, t, n) {}, function(e, t, n) {}, function(e, t, n) {}, function(e, t, n) {
    "use strict";
    n(16)
}, function(e, t, n) {
    "use strict";
    n(17)
}, function(e, t, n) {
    "use strict";
    n(18)
}, function(e, t) {
    e.exports = require("lodash.throttle")
}, function(e, t, n) {
    "use strict";
    n(19)
}, function(e, t, n) {
    "use strict";
    n(20)
}, function(e, t, n) {
    "use strict";
    n(21)
}, function(e, t) {
    e.exports = require("lodash.debounce")
}, function(e, t, n) {
    "use strict";
    n(22)
}, function(e, t, n) {
    "use strict";
    n(23)
}, function(e, t, n) {}, function(e, t, n) {}, function(e, t) {
    e.exports = require("libamf")
}, function(e, t) {
    e.exports = require("glob")
}, function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n(5),
        i = n.n(r),
        a = (n(47), n(48), n(49), n(50), n(51), n(1)),
        s = n(2),
        o = n.n(s),
        l = n(0);
    new(n(4));
    var c = {
        data() {
            return {
                iapData: null,
                tierData: null,
                loading: !1,
                iapPurchased: !1,
                loggedIn: !1,
                isMacOS: "darwin" === this.$electron.remote.process.platform,
                xsollaURL: "",
                xsollaIframe: !1
            }
        },
        methods: {
            login() {
                window.open("https://ninjakiwi.com/login", "_blank"), this.$modal.hide("store")
            }
        },
        created() {
            if (!this.$mynk.loggedIn) return this.loggedIn = !1, void(this.username = "");
            this.loggedIn = !0, this.username = this.$mynk.user;
            const e = this;
            if (e.iapPurchased = !1, l.remote.getGlobal("xsollaSuccess")) return this.iapPurchased = !0, void l.ipcRenderer.send("xsolla-reset");
            e.$link.iapData ? (e.loading = !1, e.iapData = e.$link.iapData, e.tierData = e.$link.tierData) : (e.loading = !0, e.$link.request("/payment/steam/iaps", {
                steamid: e.$steamBuild ? e.$link.steam.currentUser.id : "0"
            }, t => {
                t.iaps && (e.loading = !1, e.$.each(t.iaps, (function(e, n) {
                    n.nkcoins < 220 ? t.iaps[e].img = o.a.join("darwin" === l.remote.process.platform && "production" !== l.remote.process.env.NODE_ENV ? "file://" : "", process.resourcesPath + "/src/static", "/img/icon/nkcoin_1.png") : n.nkcoins < 1200 ? t.iaps[e].img = o.a.join("darwin" === l.remote.process.platform && "production" !== l.remote.process.env.NODE_ENV ? "file://" : "", process.resourcesPath + "/src/static", "/img/icon/nkcoin_2.png") : t.iaps[e].img = o.a.join("darwin" === l.remote.process.platform && "production" !== l.remote.process.env.NODE_ENV ? "file://" : "", process.resourcesPath + "/src/static", "/img/icon/nkcoin_3.png")
                })), e.iapData = t.iaps, e.tierData = t.tiers, e.$link.iapData = t.iaps, e.$link.tierData = t.tiers)
            })), e.$link.steam.initialised && e.$steamBuild && e.$link.steam.greenworks.on("micro-txn-authorization-response", (function(t, n, r) {
                let i = r;
                e.$link.steam.currentUser.flashID || console.error("Could not verify payment. Flash user ID not found"), i && n == e.$link.currentTransaction.orderID ? e.$link.request("/payment/steam/end", {
                    orderid: "" + e.$link.currentTransaction.orderID,
                    identifier: "" + e.$link.steam.currentUser.flashID,
                    itemid: "" + e.$link.currentTransaction.itemID
                }, t => {
                    e.iapPurchased = !0
                }) : console.error("Payment Not Authorised")
            }))
        },
        mounted() {
            this.$(".store_close").click(() => {
                this.$modal.hide("store")
            }), this.$steamBuild || l.ipcRenderer.on("render-xsolla-success", e => {
                this.iapPurchased = !0, l.ipcRenderer.send("xsolla-reset")
            })
        }
    };
    n(52);

    function normalizeComponent(e, t, n, r, i, a, s, o) {
        var l, c = "function" == typeof e ? e.options : e;
        if (t && (c.render = t, c.staticRenderFns = n, c._compiled = !0), r && (c.functional = !0), a && (c._scopeId = "data-v-" + a), s ? (l = function(e) {
                (e = e || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) || "undefined" == typeof __VUE_SSR_CONTEXT__ || (e = __VUE_SSR_CONTEXT__), i && i.call(this, e), e && e._registeredComponents && e._registeredComponents.add(s)
            }, c._ssrRegister = l) : i && (l = o ? function() {
                i.call(this, (c.functional ? this.parent : this).$root.$options.shadowRoot)
            } : i), l)
            if (c.functional) {
                c._injectStyles = l;
                var d = c.render;
                c.render = function renderWithStyleInjection(e, t) {
                    return l.call(t), d(e, t)
                }
            } else {
                var u = c.beforeCreate;
                c.beforeCreate = u ? [].concat(u, l) : [l]
            } return {
            exports: e,
            options: c
        }
    }
    var d = normalizeComponent(c, (function() {
            var e = this,
                t = e.$createElement,
                n = e._self._c || t;
            return e.loggedIn ? e.iapPurchased || e.xsollaIframe ? !e.iapPurchased && e.xsollaIframe ? n("div", {
                staticClass: "w-100 h-100 store"
            }, [e.loading ? n("div", {
                staticClass: "store_catalogue d-flex justify-content-center align-items-center"
            }, [e._m(4)]) : n("webview", {
                staticStyle: {
                    width: "100%",
                    height: "100%"
                },
                attrs: {
                    id: "xsollaIframe",
                    src: e.xsollaURL,
                    frameborder: "0"
                }
            }, [e._v(">")])], 1) : n("div", {
                staticClass: "w-100 h-100 store"
            }, [e._m(5), e._v(" "), n("div", {
                staticClass: "store_complete text-center"
            }, [n("svg", {
                attrs: {
                    version: "1.1",
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 130.2 130.2"
                }
            }, [n("circle", {
                staticClass: "path circle",
                attrs: {
                    fill: "none",
                    stroke: "#73AF55",
                    "stroke-width": "6",
                    "stroke-miterlimit": "10",
                    cx: "65.1",
                    cy: "65.1",
                    r: "62.1"
                }
            }), e._v(" "), n("polyline", {
                staticClass: "path check",
                attrs: {
                    fill: "none",
                    stroke: "#73AF55",
                    "stroke-width": "6",
                    "stroke-linecap": "round",
                    "stroke-miterlimit": "10",
                    points: "100.2,40.2 51.5,88.8 29.8,67.5 "
                }
            })]), e._v(" "), n("p", {
                staticClass: "store_success"
            }, [e._v("Purchase Successful")]), e._v(" "), n("div", {
                staticStyle: {
                    color: "#a9a9a9"
                }
            }, [e._v("Please relaunch any open games")]), e._v(" "), n("button", {
                staticClass: "mt-3 btn btn-small btn-outline-light",
                staticStyle: {
                    opacity: "0.75"
                },
                attrs: {
                    type: "button"
                },
                on: {
                    click: function(t) {
                        return e.$modal.hide("store")
                    }
                }
            }, [e._v("\n            Okay\n        ")])])]) : n("div", {
                staticClass: "w-100 h-100 store"
            }, [e._m(1), e._v(" "), n("span", {
                staticClass: "store_header_desc align-self-start ml-4"
            }, [e._v("Use Ninja Kiwi Coins to buy power-ups, special items and heaps of\n        other cool stuff.")]), e._v(" "), e.loading ? n("div", {
                staticClass: "store_catalogue d-flex justify-content-center align-items-center"
            }, [e._m(3)]) : n("div", {
                staticClass: "store_catalogue row pb-1 pt-0 px-2"
            }, [e._m(2), e._v(" "), e._l(e.iapData, (function(t, r) {
                return n("div", {
                    key: r,
                    staticClass: "store_catalogue_item text-center text-white p-2"
                }, [n("div", {
                    directives: [{
                        name: "waves",
                        rawName: "v-waves.flex.light",
                        modifiers: {
                            flex: !0,
                            light: !0
                        }
                    }],
                    class: {
                        store_catalogue_item_container: !0,
                        most_valuable: "value" === t.label,
                        most_popular: "popular" === t.label
                    },
                    attrs: {
                        "data-iap": r,
                        "data-description": t.description
                    },
                    on: {
                        click: e.$link.startIAP
                    }
                }, [n("img", {
                    staticClass: "store_catalogue_item_img",
                    attrs: {
                        src: t.img
                    }
                }), e._v(" "), n("div", {
                    staticClass: "store_catalogue_item_coins"
                }, [e._v("\n                    " + e._s(t.nkcoins) + "\n                ")]), e._v(" "), n("div", {
                    staticClass: "store_catalogue_item_title"
                }, [e._v("NK Coins")]), e._v(" "), n("div", {
                    staticClass: "store_catalogue_item_desc"
                }, [e._v("\n                    " + e._s(t.description) + "\n                ")]), e._v(" "), n("div", {
                    staticClass: "store_catalogue_item_cost"
                }, [e._v("\n                    " + e._s(e.tierData[t.tier].localized) + "\n                ")]), e._v(" "), "value" === t.label ? n("div", {
                    staticClass: "most_valuable_label"
                }, [e._v("\n                    Best Value\n                    "), n("i", {
                    staticClass: "ml-2 fa-sm fas fa-star"
                })]) : "popular" === t.label ? n("div", {
                    staticClass: "most_popular_label"
                }, [e._v("\n                    Most Popular\n                    "), n("i", {
                    staticClass: "ml-2 fa-sm fas fa-heart"
                })]) : e._e()])])
            }))], 2)]) : n("div", {
                staticClass: "w-100 h-100 store text-white text-center"
            }, [n("i", {
                staticClass: "fad fa-store-slash fa-3x mb-2",
                staticStyle: {
                    opacity: "0.85",
                    color: "#fff"
                }
            }), e._v(" "), e._m(0), e._v(" "), n("button", {
                staticClass: "mt-3 btn btn-small btn-outline-light",
                staticStyle: {
                    opacity: "0.95"
                },
                attrs: {
                    type: "button"
                },
                on: {
                    click: e.login
                }
            }, [e._v("\n        Login\n    ")])])
        }), [function() {
            var e = this.$createElement,
                t = this._self._c || e;
            return t("div", {
                staticStyle: {
                    "font-size": "1.2rem",
                    "fpnt-weight": "300",
                    opacity: "0.95"
                }
            }, [this._v("\n        Please log in to your Ninja Kiwi account\n        "), t("br"), this._v("to access the NK Coin store.\n    ")])
        }, function() {
            var e = this.$createElement,
                t = this._self._c || e;
            return t("div", {
                staticClass: "store_header text-white px-4 pt-1"
            }, [t("div", [this._v("Store")]), this._v(" "), t("div", {
                staticClass: "store_close"
            }, [t("i", {
                staticClass: "fal fa-times"
            })])])
        }, function() {
            var e = this.$createElement,
                t = this._self._c || e;
            return t("div", {
                staticStyle: {
                    width: "100%",
                    height: "100%",
                    position: "absolute",
                    display: "none",
                    "align-items": "center",
                    "justify-content": "center",
                    "z-index": "3"
                },
                attrs: {
                    id: "iapPendingSpinner"
                }
            }, [t("div", {
                staticClass: "spinner-border text-danger",
                attrs: {
                    role: "status"
                }
            }, [t("span", {
                staticClass: "sr-only"
            }, [this._v("Loading...")])])])
        }, function() {
            var e = this.$createElement,
                t = this._self._c || e;
            return t("div", {
                staticClass: "spinner-border text-danger",
                attrs: {
                    role: "status"
                }
            }, [t("span", {
                staticClass: "sr-only"
            }, [this._v("Loading...")])])
        }, function() {
            var e = this.$createElement,
                t = this._self._c || e;
            return t("div", {
                staticClass: "spinner-border text-danger",
                attrs: {
                    role: "status"
                }
            }, [t("span", {
                staticClass: "sr-only"
            }, [this._v("Loading...")])])
        }, function() {
            var e = this.$createElement,
                t = this._self._c || e;
            return t("div", {
                staticClass: "store_close text-white p-1 mr-3 mt-1",
                staticStyle: {
                    position: "absolute",
                    right: "0",
                    top: "0",
                    "font-size": "1.3rem"
                }
            }, [t("i", {
                staticClass: "fal fa-times"
            })])
        }], !1, null, null, null).exports,
        u = n(4),
        f = n.n(u);
    const p = new f.a;
    var m = {
            data: () => ({
                loggedIn: !1,
                url: "https://ninjakiwi.com/flash/register#login",
                showCloseButton: !0,
                preloaderPath: "file://" + process.resourcesPath + "/src/static/Preloader.js"
            }),
            methods: {},
            created() {},
            mounted() {
                const e = this.$,
                    t = document.getElementById("loginFlowWebview");
                e(".archive_flow_close").click(() => {
                    this.$modal.hide("loginFlow")
                }), this.loggedIn = this.$mynk.loggedIn, this.loggedIn && (this.url = "https://ninjakiwi.com/flash/logout"), t.addEventListener("load-commit", e => {
                    e.url.includes("logged_in") || e.url.includes("logout") ? this.showCloseButton = !1 : this.showCloseButton = !0
                });
                var n = !1;
                t.addEventListener("did-finish-load", () => {
                    let e = t.getURL();
                    return e.includes("profile") ? (t.loadURL("https://ninjakiwi.com/flash/logout"), void(n = !0)) : e.includes("logout") && n ? (t.loadURL("https://ninjakiwi.com/flash/register#login"), void(n = !1)) : void setTimeout(() => {
                        if (l.ipcRenderer.send("login-flow-end", {
                                loggedIn: this.loggedIn,
                                endURL: e
                            }), e.includes("logged_in") && t.executeJavaScript('\n                        if (window.nkarchive)\n                            window.nkarchive.sendUserData(flashvars);\n                        else\n                            console.error("Interop API not found!", flashvars);\n                    '), this.loggedIn) this.$modal.hide("loginFlow");
                        else if (e.includes("logged_in") || e.includes("logout")) {
                            let n = t.getTitle();
                            e.includes("logged_in") && /\S+@\S+\.\S+/.test(n) && p.set("mynkEmail", n), this.$modal.hide("loginFlow")
                        }
                    }, 1e3)
                })
            },
            methods: {}
        },
        h = (n(53), normalizeComponent(m, (function() {
            var e = this.$createElement,
                t = this._self._c || e;
            return t("div", {
                staticClass: "w-100 h-100",
                staticStyle: {
                    position: "relative"
                }
            }, [this.showCloseButton ? t("div", {
                staticClass: "archive_flow_close"
            }, [t("i", {
                staticClass: "fal fa-fw fa-times"
            })]) : this._e(), this._v(" "), t("webview", {
                staticStyle: {
                    height: "100%",
                    width: "100%"
                },
                attrs: {
                    useragent: "flashArchive",
                    plugins: "",
                    id: "loginFlowWebview",
                    src: this.url,
                    enableremotemodule: "false",
                    contextisolation: "true",
                    preload: this.preloaderPath
                }
            })], 1)
        }), [], !1, null, null, null).exports),
        v = null,
        g = {
            props: ["game"],
            data() {
                return {
                    flashLoc: "file://" + process.resourcesPath + "/src/static/games/" + this.game + ".swf",
                    swfWidth: 0,
                    swfHeight: 0,
                    swfURL: null,
                    swfHeightNKBar: 0,
                    preloaderPath: o.a.join(process.resourcesPath + "/src/static", "preloader.js")
                }
            },
            created() {
                let e = this.$electron.remote.getCurrentWindow().accessibleTitle.split(":")[1],
                    t = this.$gameData[e];
                this.swfWidth = t.swfSize.width, this.swfHeight = t.swfSize.height, this.swfURL = t.swfURL, this.swfHeightNKBar = "100vh", this.flashLoc = t.swfURL
            },
            mounted() {
                let e = this.$;
                navigator.onLine || this.$modal.show("internetRequired"), "sas4" !== this.game && "bloonstd5" !== this.game && "bloonstdbattles" !== this.game && "monkeycity" !== this.game || this.showPopup(`\n            This is the Flash version of ${this.$gameData[this.game].gameTitle}, for the Steam version please visit\n                <a\n                    class="steamPromo_body_link"\n                    href="https://store.steampowered.com/developer/ninjakiwigames"\n                    target="_blank"\n                >\n                    <i class="fab fa-steam"></i> here\n                </a>\n            `, 200, 6e3), l.ipcRenderer.on("link-blocked", () => {
                    this.showPopup('\n            <div style="display:flex; align-items:center; justify-content:center; text-align:center; height:80%; width:100%">\n            This feature is no longer available.\n            </div>\n            ', 200, 5e3)
                });
                let t = this.$gameData[this.game];
                if (!0 === t.maintainAspectRatio ? this.$("<style>").prop("type", "text/css").html(`    .gameAspectRatio {        width:100%;        height:100%;        max-width:calc((100vh - ${"darwin"===this.$electron.remote.process.platform?"20px":"30px"}) * ${this.swfWidth/this.swfHeight});        max-height:calc(100vw * ${this.swfHeight/this.swfWidth});    }`).appendTo("head") : this.$("<style>").prop("type", "text/css").html("    .gameAspectRatio {        width:100%;        height:100%;    }").appendTo("head"), "darwin" === this.$electron.remote.process.platform ? (e(".flashContent").css("height", "calc(100vh - 20px)"), e(".flashContent").css("max-height", "calc(100vh - 20px)")) : (e(".flashContent").css("height", "calc(100vh - 30px)"), e(".flashContent").css("max-height", "calc(100vh - 30px)")), l.remote.getCurrentWindow().isFullScreen() && !t.fullscreenable && l.remote.getCurrentWindow().setFullScreen(!1), "bsm2" !== this.game) {
                    let e = document.querySelector("webview");
                    e.addEventListener("dom-ready", () => {
                        e.executeJavaScript(`\n                // var throttle = require("lodash.throttle");\n                // var ipcRenderer = require('electron').ipcRenderer;\n                // var remote = require('electron').remote;\n                // remote.getCurrentWebContents().openDevTools();\n\n                // Listen for mouse move, and send coords to main process\n                // var mousePos = { x: -1, y: -1 };\n                // window.addEventListener('mousemove', throttle(e => {\n                //     mousePos.x = e.pageX;\n                //     mousePos.y = e.pageY;\n                //     ipcRenderer.send('webview-mousemove', mousePos);\n                //     ipcRenderer.sendToHost('webview-mousemove', mousePos);\n                // }, 200));\n\n                // Set webview title\n                var gameTitle = "${this.game}";\n\n                // Exit fullscreen\n                document.onkeydown = function(evt) {\n                    evt = evt || window.event;\n                    var isEscape = false;\n                    if ("key" in evt) {\n                        isEscape = (evt.key === "Escape" || evt.key === "Esc");\n                    } else {\n                        isEscape = (evt.keyCode === 27);\n                    }\n                    if (isEscape) {\n                        // if (remote.getCurrentWindow().isFullScreen()) {\n                        //     remote.getCurrentWindow().setFullScreen(false);\n                        // }\n                        // Use preload api to escape fullscreen\n                        // if (window.nkarchive && window.nkarchive.isFullscreen()) {\n                            window.nkarchive.exitFullscreen(gameTitle);\n                        // }\n                    }\n                };\n\n                // Listen for new window, destroy the default window and send window data to main process\n                // remote.getCurrentWebContents().on('new-window', (event, url, disposition, options, additionalFeatures) => {\n                //     // console.log(additionalFeatures)\n                //     // return;\n                //     // console.log(event)\n                //     // alert(url)\n                //     let data = {\n                //         event: event,\n                //         url: url,\n                //         disposition: disposition,\n                //         options: options,\n                //         additionalFeatures: additionalFeatures,\n                //         window: remote.getCurrentWindow()\n                //     };\n                //     additionalFeatures.webContents.destroy();\n                //     ipcRenderer.send("webview-new-window", data);\n                //     // ipcRenderer.sendToHost("webview-new-window", data);                    \n                // });\n            `)
                    })
                }
                this.$(document).keyup((function(e) {
                    "Escape" === e.key && l.remote.getCurrentWindow().isFullScreen() && l.remote.getCurrentWindow().setFullScreen(!1)
                }))
            },
            methods: {
                retryInternet() {
                    location.reload()
                },
                showPopup(e, t = 200, n = 5e3) {
                    let r = this.$;
                    r("#game_popupMessage > .steamPromo_body").html(e), r(".steamPromo_body_link, .steamPromo_header_close").click(() => {
                        r(".steamPromo").fadeOut(t), null != v && clearTimeout(v)
                    }), r("#game_popupMessage").fadeIn(t), null != v && (clearTimeout(v), r("#game_popupMessage").css("background-color", "#1d1d1de5"), setTimeout(() => {
                        r("#game_popupMessage").css("background-color", "#0f0f0fe5")
                    }, 50)), v = setTimeout(() => {
                        r("#game_popupMessage").fadeOut(t), v = null
                    }, n)
                }
            }
        },
        y = (n(54), normalizeComponent(g, (function() {
            var e = this,
                t = e.$createElement,
                n = e._self._c || t;
            return n("div", {
                staticClass: "flashContent"
            }, [n("modal", {
                attrs: {
                    name: "internetRequired",
                    width: "375px",
                    height: "200px"
                }
            }, [n("div", {
                staticClass: "d-flex flex-column w-100 h-100",
                staticStyle: {
                    "background-color": "#1d1d1d"
                }
            }, [n("div", {
                staticStyle: {
                    flex: "1",
                    padding: "1rem",
                    display: "flex",
                    "align-items": "center",
                    "justify-content": "center",
                    "text-align": "center",
                    color: "#efefef",
                    "font-size": "0.925rem"
                }
            }, [e._v("\n                This game requires an internet connection to play.\n                "), n("br"), e._v("Would you like to retry the connection?\n            ")]), e._v(" "), n("div", {
                staticStyle: {
                    height: "40px",
                    display: "flex"
                }
            }, [n("div", {
                staticClass: "flash_conf_btn",
                staticStyle: {
                    width: "100%"
                },
                on: {
                    click: e.retryInternet
                }
            }, [e._v("\n                    Retry Connection\n                ")])])])]), e._v(" "), "bsm2" === this.game ? n("object", {
                staticClass: "gameAspectRatio",
                attrs: {
                    type: "application/x-shockwave-flash",
                    data: "https://games.nkstatic.com/Games/gameswfs/BSM2-dat-2016.swf"
                }
            }, [n("param", {
                attrs: {
                    name: "movie",
                    value: "https://games.nkstatic.com/Games/gameswfs/BSM2-dat-2016.swf"
                }
            }), e._v(" "), n("param", {
                attrs: {
                    name: "allowfullscreen",
                    value: "true"
                }
            }), e._v(" "), n("param", {
                attrs: {
                    name: "allowscriptaccess",
                    value: "always"
                }
            }), e._v(" "), n("param", {
                attrs: {
                    name: "wmode",
                    value: "direct"
                }
            }), e._v(" "), n("param", {
                attrs: {
                    name: "quality",
                    value: "best"
                }
            }), e._v(" "), n("param", {
                attrs: {
                    name: "bgcolor",
                    value: "#1d1d1d"
                }
            })]) : n("webview", {
                staticClass: "gameAspectRatio",
                attrs: {
                    id: "game",
                    name: "game",
                    src: e.flashLoc,
                    plugins: "",
                    allowpopups: "",
                    enableremotemodule: "false",
                    contextisolation: "true",
                    preload: e.preloaderPath
                }
            }), e._v(" "), n("div", {
                staticClass: "steamPromo",
                staticStyle: {
                    display: "none"
                },
                attrs: {
                    id: "game_popupMessage"
                }
            }, [e._m(0), e._v(" "), n("div", {
                staticClass: "steamPromo_body"
            }, [e._v("\n            This is the Flash version of\n            " + e._s(this.$gameData[this.game].gameTitle) + ", for the Steam version\n            please visit\n            "), e._m(1)])])], 1)
        }), [function() {
            var e = this.$createElement,
                t = this._self._c || e;
            return t("div", {
                staticClass: "steamPromo_header"
            }, [t("div", {
                staticClass: "steamPromo_header_title"
            }), this._v(" "), t("div", {
                staticClass: "steamPromo_header_close"
            }, [t("i", {
                staticClass: "fal fa-fw fa-times"
            })])])
        }, function() {
            var e = this.$createElement,
                t = this._self._c || e;
            return t("a", {
                staticClass: "steamPromo_body_link",
                attrs: {
                    href: "https://store.steampowered.com/developer/ninjakiwigames",
                    target: "_blank"
                }
            }, [t("i", {
                staticClass: "fab fa-steam"
            }), this._v(" here\n            ")])
        }], !1, null, null, null).exports),
        _ = (n(55), {
            props: ["disableMenu", "disableMinimise", "disableMaximise"],
            data() {
                return {
                    windowTitle: " ",
                    window: this.$electron.remote.getCurrentWindow(),
                    ipcRenderer: this.$electron.ipcRenderer,
                    titleBar: "titleBar",
                    isFlashWindow: this.$electron.remote.getCurrentWindow().accessibleTitle.startsWith("flash"),
                    game: this.$electron.remote.getCurrentWindow().accessibleTitle.split(":")[1],
                    enableNKBar: !1,
                    isWin32: "win32" === this.$electron.remote.process.platform,
                    isMacOS: "darwin" === this.$electron.remote.process.platform,
                    fullscreenable: !0,
                    showMinimiseBtn: !this.$electron.remote.getCurrentWindow().isFullScreen()
                }
            },
            methods: {
                titleBar_readFlash() {
                    this.ipcRenderer.send("test-readdir")
                },
                titleBar_saveFlash() {
                    this.$mynk.saveFlashData()
                },
                titleBar_openDevTools() {
                    this.$electron.remote.getCurrentWindow().toggleDevTools()
                },
                titleBar_fullscreen() {
                    this.$electron.remote.getCurrentWindow().setFullScreen(!this.$electron.remote.getCurrentWindow().isFullScreen()), this.showMinimiseBtn = !this.$electron.remote.getCurrentWindow().isFullScreen()
                },
                titleBar_openMenu(e) {
                    this.ipcRenderer.send("display-app-menu", {
                        x: e.x,
                        y: e.y,
                        window: this.window
                    })
                },
                titleBar_closeWindow() {
                    this.window.close()
                },
                titleBar_maximiseWindow() {
                    this.window.isMaximized() ? this.window.unmaximize() : this.window.maximize()
                },
                titleBar_minimiseWindow() {
                    this.window.minimize()
                }
            },
            created() {
                let e = this.$electron.remote.getCurrentWindow().getTitle();
                this.windowTitle = e, this.game && this.$gameData[this.game] && (this.enableNKBar = this.$gameData[this.game].nkBar, this.fullscreenable = this.$gameData[this.game].fullscreenable)
            },
            mounted() {
                this.isFlashWindow, this.isWin32;
                this.isFlashWindow, this.isFlashWindow && this.game
            }
        }),
        b = (n(56), normalizeComponent(_, (function() {
            var e = this,
                t = e.$createElement,
                n = e._self._c || t;
            return n("div", {
                class: [{
                        titleBar_flash: e.isFlashWindow
                    }, {
                        titleBar_mac: e.isMacOS
                    },
                    [e.titleBar]
                ],
                staticStyle: {
                    display: "flex",
                    "align-items": "center",
                    color: "white",
                    "z-index": "10000"
                }
            }, [!e.isWin32 || e.isFlashWindow || this.disableMenu ? e.isMacOS ? n("div", {
                staticClass: "titleBar_section"
            }, [n("div", {
                staticClass: "d-flex align-items-center h-100 pl-2 focus"
            }, [n("div", {
                staticClass: "traffic-lights"
            }, [n("button", {
                staticClass: "traffic-light traffic-light-close",
                attrs: {
                    id: "close"
                },
                on: {
                    click: e.titleBar_closeWindow
                }
            }), e._v(" "), !this.disableMinimise && this.showMinimiseBtn ? n("button", {
                staticClass: "traffic-light traffic-light-minimize",
                attrs: {
                    id: "minimize"
                },
                on: {
                    click: e.titleBar_minimiseWindow
                }
            }) : e._e(), e._v(" "), this.fullscreenable && "bloonstd2" !== this.game ? n("button", {
                staticClass: "traffic-light traffic-light-maximize",
                attrs: {
                    id: "maximize"
                },
                on: {
                    click: e.titleBar_fullscreen
                }
            }) : e._e(), e._v(" "), !0 === this.$electron.remote.getGlobal("stagingBuild") ? n("button", {
                staticClass: "traffic-light traffic-light-dev",
                attrs: {
                    id: "dev"
                },
                on: {
                    click: e.titleBar_openDevTools
                }
            }) : e._e()])])]) : n("div", {
                staticClass: "titleBar_section pr-2"
            }) : n("div", {
                staticClass: "titleBar_section"
            }, [n("div", {
                staticClass: "titleBar_btn",
                attrs: {
                    title: "Menu"
                },
                on: {
                    click: e.titleBar_openMenu
                }
            }, [n("i", {
                staticClass: "fal fa-bars mx-2",
                attrs: {
                    "aria-label": "Menu"
                }
            })])]), e._v(" "), n("div", {
                staticClass: "titleBar_section titleBar_section_fade",
                staticStyle: {
                    flex: "1"
                }
            }, [n("div", {
                staticClass: "windowTitle_text"
            }, [e._v(e._s(e.windowTitle))])]), e._v(" "), e.isWin32 ? n("div", {
                staticClass: "titleBar_section"
            }, [n("div", {
                staticClass: "d-flex justify-content-center align-items-center h-100"
            }, [!0 === this.$electron.remote.getGlobal("stagingBuild") ? n("div", {
                staticClass: "titleBar_btn",
                attrs: {
                    title: "Dev Tools"
                },
                on: {
                    click: e.titleBar_openDevTools
                }
            }, [n("i", {
                staticClass: "ms-Icon ms-Icon--WebComponents mx-2",
                attrs: {
                    "aria-label": "Dev Tools"
                }
            })]) : e._e(), e._v(" "), this.disableMinimise ? e._e() : n("div", {
                staticClass: "titleBar_btn",
                attrs: {
                    title: "Minimize"
                },
                on: {
                    click: e.titleBar_minimiseWindow
                }
            }, [n("i", {
                staticClass: "ms-Icon ms-Icon--ChromeMinimize mx-2",
                attrs: {
                    "aria-label": "Minimize"
                }
            })]), e._v(" "), !this.disableMaximise && this.showMinimiseBtn ? n("div", {
                staticClass: "titleBar_btn",
                attrs: {
                    title: "Maximize"
                },
                on: {
                    click: e.titleBar_maximiseWindow
                }
            }, [n("i", {
                staticClass: "ms-Icon ms-Icon--ChromeRestore mx-2",
                attrs: {
                    "aria-label": "Maximize"
                }
            })]) : e._e(), e._v(" "), this.fullscreenable && "Settings" !== this.$electron.remote.getCurrentWindow().getTitle() ? n("div", {
                staticClass: "titleBar_btn",
                attrs: {
                    title: "Fullscreen"
                },
                on: {
                    click: e.titleBar_fullscreen
                }
            }, [n("i", {
                staticClass: "ms-Icon ms-Icon--ChromeFullScreen mx-2",
                attrs: {
                    "aria-label": "Fullscreen"
                }
            })]) : e._e(), e._v(" "), n("div", {
                staticClass: "titleBar_btn titleBar_btn_close",
                attrs: {
                    title: "Close"
                },
                on: {
                    click: e.titleBar_closeWindow
                }
            }, [n("i", {
                staticClass: "ms-Icon ms-Icon--ChromeClose mx-2",
                attrs: {
                    "aria-label": "Close"
                }
            })])])]) : e._e()])
        }), [], !1, null, null, null).exports);
    const w = new(n(4)),
        C = n(6);
    var x = {
            data() {
                return {
                    username: "",
                    loggedIn: !1,
                    iaps: null,
                    currentCategory: "category_all",
                    logoURL: o.a.join("file://", process.resourcesPath + "/src/static", "/img/NK_Archive.svg"),
                    avatarURL: this.$link.steam.currentUser.avatarSrc,
                    xsollaURL: null
                }
            },
            methods: {
                login() {
                    window.open("https://ninjakiwi.com/login", "_blank")
                },
                openSettings() {
                    l.ipcRenderer.send("settings")
                },
                openStore: function() {
                    this.$modal.show("store")
                }
            },
            mounted() {
                if (this.$mynk.loggedIn)
                    if (this.loggedIn = !0, this.username = this.$mynk.user, w.get(this.$link.steam.currentUser.id) && this.$steamBuild) this.avatarURL = w.get(this.$link.steam.currentUser.id);
                    else {
                        const e = C.readdirSync(o.a.join(process.resourcesPath + "/src/static", "img", "avatar"));
                        let t = e[Math.floor(Math.random() * e.length)];
                        this.avatarURL = o.a.join("darwin" === this.$electron.remote.process.platform ? "file://" : "", process.resourcesPath + "/src/static", "img", "avatar", t)
                    }
                else this.loggedIn = !1, this.username = "";
                l.ipcRenderer.on("logged-in", n => {
                    setTimeout(() => {
                        if (this.$mynk.getFlashData(), this.$mynk.loggedIn)
                            if (this.loggedIn = !0, this.username = this.$mynk.user, this.$link.steam.currentUser.avatarSrc) this.avatarURL = e.$link.steam.currentUser.avatarSrc;
                            else {
                                const e = C.readdirSync(o.a.join(process.resourcesPath + "/src/static", "img", "avatar"));
                                let t = e[Math.floor(Math.random() * e.length)];
                                this.avatarURL = o.a.join("darwin" === this.$electron.remote.process.platform ? "file://" : "", process.resourcesPath + "/src/static", "img", "avatar", t)
                            }
                        else t(".utility_btn_logout").addClass("utility_btn_logout_hide"), setTimeout(() => {
                            this.loggedIn = !1, this.username = ""
                        }, 150)
                    }, 500)
                });
                const e = this,
                    t = this.$;
                for (const n in e.$gameData)
                    for (const r in e.$gameData[n].categories) {
                        let i = e.$gameData[n].categories[r],
                            a = i.replace(/\s+/g, "").toLowerCase();
                        0 === t("#category_" + a).length && t("#sidebar_categories").append(t(`<div id="category_${a}" class="category_link">${i}</div>`))
                    }
                t(".category_link").click((function() {
                    if (t(".game_search_results_div").hide(), t("#gameGridNoGames").hide(), t(this).attr("id") === e.currentCategory) return;
                    if (t("#" + e.currentCategory).removeClass("selected"), e.currentCategory = t(this).attr("id"), t(this).addClass("selected"), "category_all" === e.currentCategory) {
                        for (const n in e.$gameData) t("#" + e.$gameData[n].game).show();
                        return
                    }
                    if ("category_favs" === e.currentCategory) {
                        let e = 0;
                        if (w.get("favorites")) {
                            let n = JSON.parse(w.get("favorites"));
                            t(".flashGridItem").each((r, i) => {
                                t(i).hide();
                                let a = t(i).attr("id");
                                n[a] && (t(i).show(), e++)
                            })
                        }
                        return void(0 === e && t("#gameGridNoGames").show())
                    }
                    let n = e.currentCategory.split("_")[1];
                    for (const r in e.$gameData) {
                        t("#" + e.$gameData[r].game).hide();
                        for (const i in e.$gameData[r].categories) {
                            if (e.$gameData[r].categories[i].replace(/\s+/g, "").toLowerCase() === n) {
                                t("#" + e.$gameData[r].game).show();
                                break
                            }
                        }
                    }
                }))
            }
        },
        k = (n(57), normalizeComponent(x, (function() {
            var e = this,
                t = e.$createElement,
                n = e._self._c || t;
            return n("div", {
                staticClass: "h-100 sidebar text-center",
                staticStyle: {
                    width: "240px"
                }
            }, [n("div", {
                staticClass: "h-100 d-flex",
                staticStyle: {
                    "flex-direction": "column"
                }
            }, [n("div", [n("img", {
                staticClass: "w-100 p-4",
                attrs: {
                    src: e.logoURL
                }
            })]), e._v(" "), e._m(0), e._v(" "), n("div", {
                staticClass: "utility_container"
            }, [this.loggedIn ? n("div", {
                directives: [{
                    name: "tippy",
                    rawName: "v-tippy",
                    value: {
                        theme: "light",
                        distance: 5,
                        duration: 150
                    },
                    expression: "{ theme: 'light', distance: 5, duration: 150 }"
                }, {
                    name: "waves",
                    rawName: "v-waves.flex.light",
                    modifiers: {
                        flex: !0,
                        light: !0
                    }
                }],
                staticClass: "utility_btn utility_btn_logout",
                attrs: {
                    content: "Logout"
                },
                on: {
                    click: function(t) {
                        return e.$modal.show("logoutConf")
                    }
                }
            }, [n("img", {
                staticClass: "ml-1",
                staticStyle: {
                    "border-raidus": "50%"
                },
                attrs: {
                    width: "40",
                    src: this.avatarURL
                }
            }), e._v(" "), n("div", {
                staticClass: "px-1",
                staticStyle: {
                    flex: "1",
                    "text-overflow": "ellipsis",
                    overflow: "hidden"
                }
            }, [e._v("\n                    " + e._s(e.username) + "\n                ")]), e._v(" "), n("i", {
                staticClass: "mr-2 fal fa-sign-out"
            })]) : e._e(), e._v(" "), this.loggedIn && !this.$appSettings.disableShop.disableShop ? n("div", {
                directives: [{
                    name: "waves",
                    rawName: "v-waves.flex.light",
                    modifiers: {
                        flex: !0,
                        light: !0
                    }
                }],
                staticClass: "utility_btn",
                on: {
                    click: this.openStore
                }
            }, [n("i", {
                staticClass: "fal fa-shopping-cart"
            }), e._v(" "), n("div", {
                staticClass: "ml-2"
            }, [e._v("Store")])]) : this.loggedIn && this.$appSettings.disableShop.disableShop ? n("div", {
                directives: [{
                    name: "waves",
                    rawName: "v-waves.flex.light",
                    modifiers: {
                        flex: !0,
                        light: !0
                    }
                }, {
                    name: "tippy",
                    rawName: "v-tippy",
                    value: {
                        theme: "light",
                        distance: 5,
                        duration: 150
                    },
                    expression: "{ theme: 'light', distance: 5, duration: 150 }"
                }],
                staticClass: "utility_btn utility_btn_disabled",
                attrs: {
                    content: this.$appSettings.disableShop.html
                }
            }, [n("i", {
                staticClass: "fal fa-shopping-cart"
            }), e._v(" "), n("div", {
                staticClass: "ml-2"
            }, [e._v("Store")])]) : e._e(), e._v(" "), this.loggedIn ? e._e() : n("div", {
                directives: [{
                    name: "waves",
                    rawName: "v-waves.flex.light",
                    modifiers: {
                        flex: !0,
                        light: !0
                    }
                }],
                staticClass: "utility_btn",
                on: {
                    click: function(t) {
                        return e.$modal.show("loginFlow")
                    }
                }
            }, [n("i", {
                staticClass: "fal fa-sign-in"
            }), e._v(" "), n("div", {
                staticClass: "ml-2"
            }, [e._v("Login")])])])])])
        }), [function() {
            var e = this.$createElement,
                t = this._self._c || e;
            return t("div", {
                staticClass: "align-items-center justify-content-center px-4 pt-2 text-white text-left",
                staticStyle: {
                    flex: "1"
                },
                attrs: {
                    id: "sidebar_categories"
                }
            }, [t("div", {
                staticClass: "category_title"
            }, [this._v("Categories")]), this._v(" "), t("div", {
                staticClass: "category_link selected",
                attrs: {
                    id: "category_all"
                }
            }, [this._v("\n                All Games\n            ")]), this._v(" "), t("div", {
                staticClass: "category_link",
                attrs: {
                    id: "category_favs"
                }
            }, [this._v("\n                Favorite Games\n            ")])])
        }], !1, null, null, null).exports);
    const $ = l.remote.app,
        S = n(6),
        A = n(2);
    var D = {
            data: () => ({
                username: "",
                loggedIn: !1,
                version: "v1.1.0" + (l.remote.getGlobal("stagingBuild") ? " [staging]" : ""),
                appName: "Ninja Kiwi Archive",
                flashVersion: null,
                devMode: "production" !== l.remote.process.env.NODE_ENV
            }),
            methods: {
                forceLogout() {
                    this.$modal.hide("flashConf"), S.rmdir(A.join($.getPath("userData"), "/Pepper Data"), {
                        recursive: !0
                    }, () => {
                        l.ipcRenderer.send("reset-data", {
                            logout: "yes",
                            username: ""
                        })
                    })
                },
                forceLogoutConf() {
                    this.$modal.show("flashConf")
                },
                cancelFlash() {
                    this.$modal.hide("flashConf")
                },
                openSystemFlash() {
                    l.remote.getGlobal("systemFlashLoc") ? l.shell.showItemInFolder(l.remote.getGlobal("systemFlashLoc")) : this.$modal.show("flashNotFound")
                },
                cancelFlashNotFound() {
                    this.$modal.hide("flashNotFound")
                },
                openArchiveFlash() {
                    l.shell.openItem(A.join(l.remote.getGlobal("userDataPath"), "flash", "system"))
                }
            },
            mounted() {
                const e = this.$;
                e("a").click((function(t) {
                    e(this).hasClass("link_external") && (t.preventDefault(), l.shell.openExternal(e(this).attr("href")))
                }))
            }
        },
        T = (n(58), normalizeComponent(D, (function() {
            var e = this,
                t = e.$createElement,
                n = e._self._c || t;
            return n("div", {
                staticClass: "px-4 py-3 h-100 d-flex flex-column justify-content-between text-left"
            }, [n("modal", {
                attrs: {
                    name: "flashConf",
                    width: "100%",
                    height: "40%"
                }
            }, [n("div", {
                staticClass: "d-flex flex-column w-100 h-100",
                staticStyle: {
                    "background-color": "#1d1d1d"
                }
            }, [n("div", {
                staticStyle: {
                    flex: "1",
                    padding: "1rem",
                    display: "flex",
                    "align-items": "center",
                    "text-align": "center",
                    color: "#efefef",
                    "font-size": "0.925rem"
                }
            }, [e._v("\n                Are you sure you want clear all Flash game data and logout?\n            ")]), e._v(" "), n("div", {
                staticStyle: {
                    height: "40px",
                    display: "flex"
                }
            }, [n("div", {
                staticClass: "flash_conf_btn",
                on: {
                    click: e.cancelFlash
                }
            }, [e._v("No")]), e._v(" "), n("div", {
                staticClass: "flash_conf_btn flash_conf_yes",
                on: {
                    click: e.forceLogout
                }
            }, [e._v("\n                    Yes\n                ")])])])]), e._v(" "), n("modal", {
                attrs: {
                    name: "flashNotFound",
                    width: "100%",
                    height: "40%"
                }
            }, [n("div", {
                staticClass: "d-flex flex-column w-100 h-100",
                staticStyle: {
                    "background-color": "#1d1d1d"
                }
            }, [n("div", {
                staticStyle: {
                    flex: "1",
                    padding: "1rem",
                    display: "flex",
                    "align-items": "center",
                    "text-align": "center",
                    color: "#efefef",
                    "font-size": "0.925rem",
                    "justify-content": "center"
                }
            }, [e._v("\n                System Flash not found!\n            ")]), e._v(" "), n("div", {
                staticStyle: {
                    height: "40px",
                    display: "flex"
                }
            }, [n("div", {
                staticClass: "flash_conf_btn",
                staticStyle: {
                    width: "100%"
                },
                on: {
                    click: e.cancelFlashNotFound
                }
            }, [e._v("\n                    Okay\n                ")])])])]), e._v(" "), n("div", [n("div", {
                staticClass: "settings_title"
            }, [e._v("Flash")]), e._v(" "), n("div", {
                staticClass: "settings_para mt-1"
            }, [e._v("\n            Clear Flash Storage:\n            "), n("div", {
                directives: [{
                    name: "tippy",
                    rawName: "v-tippy",
                    value: {
                        theme: "light",
                        distance: 5,
                        duration: 150
                    },
                    expression: "{ theme: 'light', distance: 5, duration: 150 }"
                }],
                staticClass: "resetDataBtn",
                attrs: {
                    content: "Resets local flash game storage"
                },
                on: {
                    click: e.forceLogoutConf
                }
            }, [e._v("\n                Clear\n                "), n("i", {
                staticClass: "fad ml-1 fa-exclamation-circle"
            })])],
            
            // ArchiveMod reload mods button
            [e._v("\n            ArchiveMod:\n            "), n("div", {
                directives: [{
                    name: "tippy",
                    rawName: "v-tippy",
                    value: {
                        theme: "light",
                        distance: 5,
                        duration: 150
                    },
                    expression: "{ theme: 'light', distance: 5, duration: 150 }"
                }],
                staticClass: "resetDataBtn",
                attrs: {
                    content: "Reloads your modifications"
                },
                on: {
                    click: e.forceLogoutConf
                }
            }, [e._v("\n                Reload\n                "), n("i", {
                staticClass: "fad ml-1 fa-exclamation-circle"
            })])]
            // ---*---*---*--- END OF LINE ---*---*---*---

            ), e._v(" "), e.$electron.remote.getGlobal("stagingBuild") ? n("div", {
                staticClass: "settings_para mt-1 d-flex flex-column"
            }, [n("span", {
                staticClass: "w-100"
            }, [e._v("Open Flash Location:")]), e._v(" "), n("div", {
                staticClass: "flex-row"
            }, [n("div", {
                directives: [{
                    name: "tippy",
                    rawName: "v-tippy",
                    value: {
                        theme: "light",
                        distance: 5,
                        duration: 150
                    },
                    expression: "{ theme: 'light', distance: 5, duration: 150 }"
                }],
                staticClass: "resetDataBtn",
                attrs: {
                    content: "Open the location of the System's flash"
                },
                on: {
                    click: e.openSystemFlash
                }
            }, [e._v("\n                    System\n                    "), n("i", {
                staticClass: "fad ml-1 fa-folder-open"
            })]), e._v(" "), n("div", {
                directives: [{
                    name: "tippy",
                    rawName: "v-tippy",
                    value: {
                        theme: "light",
                        distance: 5,
                        duration: 150
                    },
                    expression: "{ theme: 'light', distance: 5, duration: 150 }"
                }],
                staticClass: "resetDataBtn",
                attrs: {
                    content: "Open the location of the Archive's flash"
                },
                on: {
                    click: e.openArchiveFlash
                }
            }, [e._v("\n                    Archive\n                    "), n("i", {
                staticClass: "fad ml-1 fa-folder-open"
            })])])]) : e._e()]), e._v(" "), e._m(0), e._v(" "), n("div", [n("div", {
                staticClass: "settings_title"
            }, [e._v("Keep In Touch")]), e._v(" "), n("div", {
                staticClass: "d-flex align-items-center my-2"
            }, [n("a", {
                directives: [{
                    name: "tippy",
                    rawName: "v-tippy",
                    value: {
                        theme: "light",
                        distance: 5,
                        duration: 150
                    },
                    expression: "{ theme: 'light', distance: 5, duration: 150 }"
                }],
                staticClass: "settings_link_social settings_link_social_dc mr-2 link_external",
                attrs: {
                    href: "https://discord.gg/ninjakiwi",
                    content: "Join our Discord community"
                }
            }, [n("i", {
                staticClass: "fab fa-2x fa-discord"
            })]), e._v(" "), n("a", {
                directives: [{
                    name: "tippy",
                    rawName: "v-tippy",
                    value: {
                        theme: "light",
                        distance: 5,
                        duration: 150
                    },
                    expression: "{ theme: 'light', distance: 5, duration: 150 }"
                }],
                staticClass: "settings_link_social settings_link_social_rd mx-2 link_external",
                attrs: {
                    href: "https://www.reddit.com/r/btd6/",
                    content: "Subscribe to our Subreddit"
                }
            }, [n("i", {
                staticClass: "fab fa-2x fa-reddit-square"
            })]), e._v(" "), n("a", {
                directives: [{
                    name: "tippy",
                    rawName: "v-tippy",
                    value: {
                        theme: "light",
                        distance: 5,
                        duration: 150
                    },
                    expression: "{ theme: 'light', distance: 5, duration: 150 }"
                }],
                staticClass: "settings_link_social settings_link_social_tw mx-2 link_external",
                attrs: {
                    href: "https://twitter.com/ninjakiwigames/",
                    content: "Follow us on Twitter"
                }
            }, [n("i", {
                staticClass: "fab fa-2x fa-twitter-square"
            })]), e._v(" "), n("a", {
                directives: [{
                    name: "tippy",
                    rawName: "v-tippy",
                    value: {
                        theme: "light",
                        distance: 5,
                        duration: 150
                    },
                    expression: "{ theme: 'light', distance: 5, duration: 150 }"
                }],
                staticClass: "settings_link_social settings_link_social_fb mx-2 link_external",
                attrs: {
                    href: "https://www.facebook.com/ninjakiwigames",
                    content: "Follow our Facebook page"
                }
            }, [n("i", {
                staticClass: "fab fa-2x fa-facebook-square"
            })]), e._v(" "), n("a", {
                directives: [{
                    name: "tippy",
                    rawName: "v-tippy",
                    value: {
                        theme: "light",
                        distance: 5,
                        duration: 150
                    },
                    expression: "{ theme: 'light', distance: 5, duration: 150 }"
                }],
                staticClass: "settings_link_social settings_link_social_yt mx-2 link_external",
                attrs: {
                    href: "https://www.youtube.com/user/NinjaKiwiVideos",
                    content: "Subscribe to our YouTube channel"
                }
            }, [n("i", {
                staticClass: "fab fa-2x fa-youtube-square"
            })]), e._v(" "), n("a", {
                directives: [{
                    name: "tippy",
                    rawName: "v-tippy",
                    value: {
                        theme: "light",
                        distance: 5,
                        duration: 150
                    },
                    expression: "{ theme: 'light', distance: 5, duration: 150 }"
                }],
                staticClass: "settings_link_social settings_link_social_in mx-2 link_external",
                attrs: {
                    href: "https://www.instagram.com/realninjakiwi/",
                    content: "Follow us on Instagram"
                }
            }, [n("i", {
                staticClass: "fab fa-2x fa-instagram-square"
            })])])]), e._v(" "), n("div", [n("div", {
                staticClass: "settings_title"
            }, [e._v("About")]), e._v(" "), n("div", {
                staticClass: "settings_para"
            }, [e._v("\n            " + e._s(this.appName) + "\n            "), n("span", {
                staticClass: "settings_muted"
            }, [e._v(e._s(this.version))])]), e._v(" "), e._m(1), e._v(" "), e._m(2)])], 1)
        }), [function() {
            var e = this.$createElement,
                t = this._self._c || e;
            return t("div", [t("div", {
                staticClass: "settings_title"
            }, [this._v("Help/Feedback")]), this._v(" "), t("a", {
                staticClass: "settings_link link_external",
                attrs: {
                    href: "https://support.ninjakiwi.com/"
                }
            }, [this._v("Ninja Kiwi Support")])])
        }, function() {
            var e = this.$createElement,
                t = this._self._c || e;
            return t("div", {
                staticClass: "d-flex my-1"
            }, [t("a", {
                staticClass: "settings_link link_external",
                attrs: {
                    href: "https://ninjakiwi.com/privacy_policy"
                }
            }, [this._v("Privacy Policy")]), this._v(" "), t("div", {
                staticClass: "settings_para mx-2"
            }, [this._v("|")]), this._v(" "), t("a", {
                staticClass: "settings_link link_external",
                attrs: {
                    href: "https://ninjakiwi.com/terms"
                }
            }, [this._v("Terms & Conditions")])])
        }, function() {
            var e = this.$createElement,
                t = this._self._c || e;
            return t("div", {
                staticClass: "settings_para settings_muted"
            }, [t("i", {
                staticClass: "far fa-copyright"
            }), this._v(" 2020 Ninja Kiwi Ltd.\n        ")])
        }], !1, null, null, null).exports),
        O = n(59);
    const E = new f.a;
    var R = {
            data: () => ({}),
            created() {
                "win32" === this.$electron.remote.process.platform ? this.$(".mainContent").addClass("height_titleBar") : this.$(".mainContent").addClass("height_noTitleBar")
            },
            mounted() {
                Waves.attach(".flashCard", ["waves-light"]), Waves.init();
                const e = this.$;
                e(".favorite").each((t, n) => {
                    let r = e(n).parent().parent().attr("id");
                    this.isGameFavorite(r) ? (e(n).addClass("favorite_selected"), e(n).attr("content", "Remove from Favorites")) : (e(n).removeClass("favorite_selected"), e(n).attr("content", "Add to Favorites"))
                });
                const t = this;
                e("#game_search").keyup(O((function() {
                    let n = e(this).val();
                    if (n) {
                        let r = 0;
                        for (const i in t.$gameData) e("#" + t.$gameData[i].game).hide(), (t.$gameData[i].game.toLowerCase().includes(n.toLowerCase()) || t.$gameData[i].gameTitle.toLowerCase().includes(n.toLowerCase())) && (e("#" + t.$gameData[i].game).show(), r++);
                        if (e(".game_search_results_amount").text(r + " Games Found"), e(".game_search_results_div").slideDown(300), 0 == r)
                            for (const n in t.$gameData) e("#" + t.$gameData[n].game).show()
                    } else {
                        for (const n in t.$gameData) e("#" + t.$gameData[n].game).show();
                        e(".game_search_results_div").hide()
                    }
                }), 250)), e((function() {
                    e(".mainContent").hover((function() {
                        e(".mainContent").removeClass("fade-scrollbar")
                    }), (function() {
                        e(".mainContent").addClass("fade-scrollbar")
                    }))
                })), e("#game_search_icon").click(() => {
                    e("#game_search").focus()
                }), e("#game_search_clear").click(() => {
                    if (e("#game_search").val()) {
                        e("#game_search").val("");
                        for (const n in t.$gameData) e("#" + t.$gameData[n].game).show()
                    }
                    e("#game_search").focus(), e(".game_search_results_div").hide()
                })
            },
            methods: {
                onFavoriteClick(e) {
                    const t = this.$;
                    let n = t(e.target),
                        r = n.parent().parent().attr("id"),
                        i = {};
                    E.get("favorites") ? i = JSON.parse(E.get("favorites")) : E.set("favorites", JSON.stringify(i)), n.hasClass("favorite_selected") ? (i[r] = !1, n.removeClass("favorite_selected"), n[0]._tippy.setContent("Add to Favorites"), t("#category_favs").hasClass("selected") && (t("#" + r).fadeOut(200, () => {
                        0 === t(".flashGridItem:visible").length && t("#gameGridNoGames").show()
                    }), n[0]._tippy.hide())) : (i[r] = !0, n.addClass("favorite_selected"), n[0]._tippy.setContent("Remove from Favorites")), E.set("favorites", JSON.stringify(i))
                },
                isGameFavorite(e) {
                    let t = e,
                        n = {};
                    return !!E.get("favorites") && (n = JSON.parse(E.get("favorites")), !!n[t])
                },
                onGameClick(e) {
                    this.$electron.ipcRenderer.send("openGame", e), this.$steamBuild && (this.$link.steam.greenworks.setRichPresence("game", "" + e.gameTitle), this.$link.steam.greenworks.setRichPresence("steam_display", "#Playing"), l.ipcRenderer.on("clear-presence", () => {
                        this.$link.steam.greenworks.setRichPresence("steam_display", "#ClearPresence")
                    }))
                }
            }
        },
        N = (n(60), normalizeComponent(R, (function() {
            var e = this,
                t = e.$createElement,
                n = e._self._c || t;
            return n("div", {
                staticClass: "mainContent height_titleBar p-2 fade-scrollbar",
                staticStyle: {
                    flex: "1",
                    display: "flex",
                    "flex-direction": "column"
                }
            }, [e._m(0), e._v(" "), e._m(1), e._v(" "), e._m(2), e._v(" "), n("div", {
                staticClass: "row m-0",
                staticStyle: {
                    "overflow-y": "overlay"
                },
                attrs: {
                    id: "gameGrid"
                }
            }, e._l(this.$gameData, (function(t) {
                return n("div", {
                    key: t.game,
                    staticClass: "col-xs-6 col-sm-4 col-lg-3 col-xl-2 px-3 pb-3 pt-2 flashGridItem",
                    staticStyle: {
                        transition: "0.1s"
                    },
                    attrs: {
                        id: t.game
                    }
                }, [n("div", {
                    directives: [{
                        name: "waves",
                        rawName: "v-waves.light",
                        modifiers: {
                            light: !0
                        }
                    }],
                    staticClass: "flashCard",
                    on: {
                        click: function(n) {
                            return e.onGameClick(t)
                        }
                    }
                }, [n("div", {
                    staticClass: "flashCard_image"
                }, [n("img", {
                    attrs: {
                        width: "100%",
                        src: t.resolvedThumb
                    }
                }), e._v(" "), n("i", {
                    staticClass: "flashCard_icon fas fa-play"
                })]), e._v(" "), n("div", {
                    staticClass: "flashCard_title"
                }, [e._v(e._s(t.gameTitle))]), e._v(" "), n("i", {
                    directives: [{
                        name: "tippy",
                        rawName: "v-tippy",
                        value: {
                            placement: "top",
                            distance: 3,
                            duration: 150,
                            animation: "shift-away"
                        },
                        expression: "{\n                        placement: 'top',\n                        distance: 3,\n                        duration: 150,\n                        animation: 'shift-away',\n                    }"
                    }],
                    staticClass: "favorite fal fa-star",
                    attrs: {
                        content: "Add to Favorites"
                    },
                    on: {
                        click: function(t) {
                            return t.stopPropagation(), e.onFavoriteClick(t)
                        }
                    }
                })])])
            })), 0)])
        }), [function() {
            var e = this.$createElement,
                t = this._self._c || e;
            return t("div", {
                staticStyle: {
                    "margin-left": "1rem",
                    "margin-right": "1rem",
                    "margin-bottom": "0.5rem",
                    display: "flex",
                    "align-items": "center"
                }
            }, [t("input", {
                staticClass: "game_search",
                attrs: {
                    maxlength: "40",
                    id: "game_search",
                    type: "text",
                    placeholder: "Search Games"
                }
            }), this._v(" "), t("div", {
                attrs: {
                    id: "game_search_icon"
                }
            }, [t("i", {
                staticClass: "far fa-search game_search_icon"
            })]), this._v(" "), t("div", {
                attrs: {
                    id: "game_search_clear"
                }
            }, [t("i", {
                staticClass: "far fa-times game_search_clear"
            })])])
        }, function() {
            var e = this.$createElement,
                t = this._self._c || e;
            return t("div", {
                staticClass: "game_search_results_div",
                staticStyle: {
                    display: "none"
                }
            }, [t("div", {
                staticClass: "game_search_results"
            }, [t("div", {
                staticClass: "game_search_results_amount"
            }, [this._v("6 Games Found")]), this._v(" "), t("div", {
                staticClass: "game_search_results_divider"
            })])])
        }, function() {
            var e = this.$createElement,
                t = this._self._c || e;
            return t("div", {
                staticClass: "row m-0",
                staticStyle: {
                    display: "none",
                    height: "100%",
                    width: "100%"
                },
                attrs: {
                    id: "gameGridNoGames"
                }
            }, [t("div", {
                staticClass: "h-100 w-100 d-flex justify-content-center align-items-center flex-column text-white-50"
            }, [t("i", {
                staticClass: "fad fa-gamepad fa-3x mb-1"
            }), this._v(" "), t("p", {
                staticStyle: {
                    "font-size": "1.25rem",
                    "font-weight": "300"
                }
            }, [this._v("\n                You have no games favorited\n            ")])])])
        }], !1, null, null, null).exports),
        j = n(6),
        F = n.n(j);
    const {
        dialog: I
    } = n(0).remote, P = new(n(4));
    var L = {
            components: {
                Store: d,
                LoginFlow: h,
                FlashGame: y,
                TitleBar: b,
                SideBar: k,
                GameGrid: N,
                Settings: T
            },
            data() {
                var e, t, n, r;
                return {
                    game: "",
                    appHeight: "100%",
                    isWin32: "win32" === this.$electron.remote.process.platform,
                    isMacOS: "darwin" === this.$electron.remote.process.platform,
                    fpsLoop: null,
                    maxHeight: 500,
                    maxWidth: 825,
                    dataLoaded: this.$dataLoaded,
                    appSettings: this.$appSettings,
                    flashSKULoaded: !1,
                    forceManualFlash: !1,
                    flashInstalling: !1,
                    flashLinks: null,
                    mainWindow: !this.$electron.remote.getCurrentWindow().accessibleTitle.includes(":"),
                    appDisabledHTML: (null == this || null === (e = this.$appSettins) || void 0 === e || null === (t = e.disableApp) || void 0 === t ? void 0 : t.html) ? null === (n = this.$appSettings) || void 0 === n || null === (r = n.disableApp) || void 0 === r ? void 0 : r.html : "\n                <i class='fad fa-3x fa-exclamation-triangle mb-2'></i>\n                <div>\n                    Due to problems with Adobe Flash End-of-Life,<br>the Ninja Kiwi Archive has been disabled.<br>\n                    <a class='text-danger' target='_blank' href='https://www.adobe.com/uk/products/flashplayer/end-of-life.html'>Flash EOL</a><br>\n                    <a class='text-danger' target='_blank' href='https://support.ninjakiwi.com'>Ninja Kiwi Support</a>\n                </div>  \n                ",
                    flashRequired: this.$electron.remote.getGlobal("flashRequired")
                }
            },
            created() {
                const e = this;
                if (e.$steamBuild && this.mainWindow) {
                    e.setFPS(30);
                    var t = null;
                    (t = require(process.resourcesPath + "/src/static/greenworks/greenworks.js")).init() ? (console.log("Steam API initialized successfully."), e.$link.steam.initialised = !0, e.$link.steam.greenworks = t, e.$link.steam.currentUser.id = t.getSteamId().steamId, e.$link.steam.currentUser.name = t.getSteamId().screenName, e.$link.steam.currentUser.level = t.getSteamId().level, i.a.get("http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=CFD414390E82E71055277B9A415F9748&steamids=" + e.$link.steam.currentUser.id).then(t => {
                        e.$link.steam.currentUser.avatarURL = t.data.response.players[0].avatarmedium, P.get(e.$link.steam.currentUser.id) ? e.$link.steam.currentUser.avatarSrc = P.get(e.$link.steam.currentUser.id) : (async () => {
                            e.$link.steam.currentUser.avatarSrc = await this.downloadImage(e.$link.steam.currentUser.avatarURL), P.set(e.$link.steam.currentUser.id, e.$link.steam.currentUser.avatarSrc)
                        })()
                    }).catch(t => {
                        console.log("Failed to get Steam Web API", t);
                        const n = F.a.readdirSync(o.a.join(process.resourcesPath + "/src/static", "img", "avatar"));
                        let r = n[Math.floor(Math.random() * n.length)];
                        e.$link.steam.currentUser.avatarSrc = o.a.join(process.resourcesPath + "/src/static", "img", "avatar", r)
                    }), t.on("game-overlay-activated", (function(e) {})), l.ipcRenderer.on("update-presence", (e, t) => {
                        this.$link.steam.greenworks.setRichPresence("game", "" + t), this.$link.steam.greenworks.setRichPresence("steam_display", "#Playing")
                    })) : (console.log("Error on initializing steam API."), e.$link.steam.initialised = !1)
                }
                l.ipcRenderer.on("login-flow", (t, n) => {
                    e.$modal.show("loginFlow")
                });
                let n = e.$electron.remote.getCurrentWindow().accessibleTitle;
                n.startsWith("flash") && (e.game = n.split(":")[1]), e.isWin32 ? e.appHeight = "calc(100% - 30px)" : e.isMacOS && (e.appHeight = "calc(100% - 20px)"), l.ipcRenderer.on("get-coins", () => {
                    e.$modal.show("store")
                }), l.ipcRenderer.on("close-app", e => {
                    this.$modal.show("closeAppConf")
                })
            },
            mounted() {
                var e, t, n, r, i, a;
                if (!this.dataLoaded) {
                    if (!navigator.onLine) return this.$("#dataLoading_spinner").append('<div style="color: white; text-align: center; margin-top:10px;">An active internet connection is needed to run the Ninja Kiwi Archive.<br><span id="loading_link" style="color:#DB3448; cursor: pointer">Retry Connection</span></div>'), void this.$("#loading_link").click(() => {
                        l.remote.app.relaunch(), l.remote.app.exit()
                    });
                    setTimeout(() => {
                        this.dataLoaded = l.remote.getGlobal("dataLoaded"), this.dataLoaded || setTimeout(() => {
                            this.dataLoaded = l.remote.getGlobal("dataLoaded"), this.dataLoaded || (this.$("#dataLoading_spinner").append('<div style="color: white; text-align: center; margin-top:10px;">Loading game data..<br>If this fails to load, please contact <span id="loading_link" style="color:#DB3448; cursor: pointer">Ninja Kiwi Support</span></div>'), this.$("#loading_link").click(() => {
                                window.open("https://support.ninjakiwi.com/")
                            }))
                        }, 7e3)
                    }, 1e3)
                }
                if (this.dataLoaded && (null === (e = this.$appSettings) || void 0 === e || null === (t = e.disableApp) || void 0 === t ? void 0 : t.disableApp) && !this.$electron.remote.getGlobal("reenableApp"))(null === (n = this.$appSettings) || void 0 === n || null === (r = n.disableApp) || void 0 === r ? void 0 : r.html) && (this.appDisabledHTML = null === (i = this.$appSettings) || void 0 === i || null === (a = i.disableApp) || void 0 === a ? void 0 : a.html);
                else if (l.remote.getGlobal("flashRequired")) {
                    l.ipcRenderer.on("flash-update", (e, t) => {
                        this.$("#flashReqUpdates").html(t)
                    }), l.ipcRenderer.send("get-flash-sku");
                    let e = setTimeout(() => {
                        l.ipcRenderer.send("get-flash-sku"), this.$("#flashReqUpdates").html("Loading SKU Settings..")
                    }, 3e3);
                    l.ipcRenderer.on("flash-sku", (t, n) => {
                        clearTimeout(e), n.win32URL || n.darwinURL ? (this.flashSKULoaded = !0, this.forceManualFlash = n.forceManualFlash, "win32" === l.remote.process.platform ? this.flashLinks = n.win32URL : this.flashLinks = n.darwinURL) : (this.flashSKULoaded = !0, this.forceManualFlash = !0, this.flashLinks = null)
                    })
                } else this.mainWindow && l.remote.getGlobal("xsollaSuccess") && this.$modal.show("store"), this.mainWindow && l.ipcRenderer.on("test-login", (e, t) => {
                    console.log("Login Flow: Received Data", t)
                })
            },
            methods: {
                flashDLLater() {
                    window.open("https://get.adobe.com/flashplayer/"), this.$("#flashReqSpinner").css("opacity", 1), this.$("#flashReqUpdates").html("Please restart the application once you have manually <br>installed Flash Player. <a id='manualInstallRestart' class='text-danger' style='cursor:pointer' target='_blank'>Restart App</a>"), this.$("#manualInstallRestart").click(() => {
                        l.remote.app.relaunch(), l.remote.app.exit()
                    }), this.$("#flashReqBtns").hide()
                },
                flashDLNow() {
                    l.ipcRenderer.send("download-flash"), this.$("#flashReqSpinner").css("opacity", 1), this.$("#flashReqBtns").hide()
                },
                setFPS(e) {
                    this.fpsLoop && clearInterval(this.fpsLoop), this.fpsLoop = setInterval(() => {
                        this.$electron.remote.getCurrentWebContents().invalidate()
                    }, 1e3 / e)
                },
                async downloadImage(e) {
                    return "data:image/jpeg;base64, " + await i.a.get(e, {
                        responseType: "arraybuffer"
                    }).then(e => Buffer.from(e.data, "binary").toString("base64")).catch(e => {
                        const t = F.a.readdirSync(o.a.join(process.resourcesPath + "/src/static", "img", "avatar"));
                        let n = t[Math.floor(Math.random() * t.length)];
                        this.$link.steam.currentUser.avatarSrc = o.a.join("darwin" === $app.$electron.remote.process ? "file:/" : "", process.resourcesPath + "/src/static", "img", "avatar", n)
                    })
                },
                cancelLogout() {
                    this.$modal.hide("logoutConf")
                },
                acceptLogout() {
                    this.$modal.hide("logoutConf"), this.$mynk.logout()
                },
                cancelCloseApp() {
                    this.$modal.hide("closeAppConf")
                },
                acceptCloseApp() {
                    this.$modal.hide("closeAppConf"), l.remote.app.exit()
                },
                closeApp() {
                    l.remote.app.exit()
                },
                beforeClose(e) {
                    let t = document.getElementById("loginFlowWebview").getURL();
                    (t.includes("logged_in") || t.includes("logout")) && setTimeout(() => {
                        l.ipcRenderer.send("reset-data")
                    }, 100)
                },
                flashDLBrowse() {
                    I.showOpenDialog({
                        properties: ["openFile"],
                        filters: [{
                            name: "Flash Installer",
                            extensions: ["exe", "dmg"]
                        }]
                    }).then(e => {
                        if (e.canceled || !e.filePaths);
                        else {
                            let t = e.filePaths[0];
                            l.ipcRenderer.send("download-flash", {
                                path: t,
                                url: null
                            }), this.flashInstalling = !0
                        }
                    }).catch(e => {
                        console.log(e)
                    })
                },
                flashDownload(e) {
                    this.flashInstalling = !0, l.ipcRenderer.send("download-flash", {
                        path: null,
                        url: e.link
                    })
                }
            }
        },
        M = (n(61), normalizeComponent(L, (function() {
            var e = this,
                t = e.$createElement,
                n = e._self._c || t;
            return this.dataLoaded ? this.dataLoaded && this.appSettings && this.appSettings.disableApp && this.appSettings.disableApp.disableApp && !this.$electron.remote.getGlobal("reenableApp") ? n("div", {
                staticClass: "vh-100 vw-100 flex justify-content-center align-items-center",
                attrs: {
                    name: "appDisabled"
                }
            }, [n("div", {
                staticStyle: {
                    position: "absolute",
                    right: "10px",
                    top: "5px",
                    padding: "0.5rem",
                    margin: "0.25rem",
                    cursor: "pointer",
                    color: "#565656",
                    "font-size": "1.5rem"
                },
                on: {
                    click: e.closeApp
                }
            }, [n("i", {
                staticClass: "fal fa-times"
            })]), e._v(" "), n("div", {
                staticClass: "w-100 h-100 d-flex justify-content-center align-items-center text-center text-white-50 flex-column",
                domProps: {
                    innerHTML: e._s(e.appDisabledHTML)
                }
            })]) : this.flashRequired ? n("div", {
                staticClass: "vh-100 vw-100 flex justify-content-center align-items-center",
                attrs: {
                    name: "flashRequired"
                }
            }, [n("div", {
                staticClass: "close_app_btn",
                on: {
                    click: e.closeApp
                }
            }, [n("i", {
                staticClass: "fal fa-times"
            })]), e._v(" "), e.flashSKULoaded ? e.flashSKULoaded && e.forceManualFlash ? n("div", {
                staticClass: "text-white-50 w-100 h-100 d-flex justify-content-center align-items-center flex-column"
            }, [n("i", {
                staticClass: "fad fa-3x fa-download mb-3"
            }), e._v(" "), e.flashInstalling ? n("div", {
                staticClass: "text-center"
            }, [e._m(3), e._v(" "), n("p", {
                staticStyle: {
                    "font-size": "0.85rem",
                    "font-weight": "300",
                    opacity: "0.75",
                    "margin-top": "0.5rem",
                    "text-align": "center"
                },
                attrs: {
                    id: "flashReqUpdates"
                }
            }, [e._v("\n                 \n            ")])]) : n("div", {
                staticClass: "d-flex justify-content-center align-items-center flex-column"
            }, [e.flashLinks ? n("div", {
                staticClass: "d-flex align-items-center flex-column"
            }, [e._m(2), e._v(" "), n("div", {
                staticClass: "d-flex flex-column justify-content-center mb-2"
            }, [n("div", {
                staticClass: "dropdown text-center"
            }, [n("button", {
                staticClass: "btn btn-danger dropdown-toggle",
                attrs: {
                    type: "button",
                    id: "dropdownMenuButton",
                    "data-toggle": "dropdown",
                    "aria-haspopup": "true",
                    "aria-expanded": "false"
                }
            }, [e._v("\n                            Mirrors..\n                        ")]), e._v(" "), n("div", {
                staticClass: "dropdown-menu",
                attrs: {
                    "aria-labelledby": "dropdownMenuButton"
                }
            }, e._l(e.flashLinks, (function(t) {
                return n("a", {
                    key: t.link,
                    staticClass: "dropdown-item",
                    attrs: {
                        href: t.link
                    },
                    on: {
                        click: function(n) {
                            return n.preventDefault(), e.flashDownload(t)
                        }
                    }
                }, [e._v(e._s(t.title))])
            })), 0)])]), e._v(" "), n("p", {
                staticClass: "my-2",
                staticStyle: {
                    "font-size": "0.9rem",
                    opacity: "0.6"
                }
            }, [e._v("\n                    OR\n                ")])]) : e._e(), e._v(" "), n("div", {
                staticClass: "text-center d-flex align-items-center"
            }, [n("p", {
                staticClass: "m-0 mr-2"
            }, [e._v("\n                    Browse for a local file Flash Installer:\n                ")]), e._v(" "), n("button", {
                staticClass: "btn btn-sm btn-danger mx-2",
                staticStyle: {
                    width: "80px"
                },
                on: {
                    click: e.flashDLBrowse
                }
            }, [e._v("\n                    Browse..\n                ")])])]), e._v(" "), e._m(4)]) : e.flashSKULoaded && !e.forceManualFlash ? n("div", {
                staticClass: "text-white-50 w-100 h-100 d-flex justify-content-center align-items-center flex-column"
            }, [n("i", {
                staticClass: "fad fa-3x fa-download mb-3"
            }), e._v(" "), e._m(5), e._v(" "), n("div", {
                attrs: {
                    id: "flashReqBtns"
                }
            }, [n("button", {
                directives: [{
                    name: "tippy",
                    rawName: "v-tippy"
                }],
                staticClass: "btn btn-danger mx-2",
                staticStyle: {
                    width: "100px"
                },
                attrs: {
                    content: "Manual Installation"
                },
                on: {
                    click: e.flashDLLater
                }
            }, [e._v("\n                No\n            ")]), e._v(" "), n("button", {
                directives: [{
                    name: "tippy",
                    rawName: "v-tippy"
                }],
                staticClass: "btn btn-danger mx-2",
                staticStyle: {
                    width: "100px"
                },
                attrs: {
                    content: "Automatic Installation"
                },
                on: {
                    click: e.flashDLNow
                }
            }, [e._v("\n                Yes\n            ")])]), e._v(" "), e._m(6)]) : e._e() : n("div", {
                staticClass: "text-white-50 w-100 h-100 d-flex justify-content-center align-items-center flex-column"
            }, [n("i", {
                staticClass: "fad fa-3x fa-download mb-3"
            }), e._v(" "), e._m(1), e._v(" "), n("p", {
                staticStyle: {
                    "font-size": "0.85rem",
                    "font-weight": "300",
                    opacity: "0.75",
                    "margin-top": "0.5rem",
                    "text-align": "center"
                },
                attrs: {
                    id: "flashReqUpdates"
                }
            }, [e._v("\n             \n        ")])])]) : this.mainWindow ? n("div", {
                staticClass: "d-flex",
                staticStyle: {
                    height: "100vh",
                    "flex-direction": "column"
                }
            }, [n("TitleBar"), e._v(" "), n("div", {
                staticClass: "d-flex",
                staticStyle: {
                    "flex-direction": "row",
                    flex: "1"
                },
                style: {
                    height: this.appHeight
                }
            }, [n("SideBar"), e._v(" "), n("GameGrid"), e._v(" "), n("modal", {
                attrs: {
                    width: "80%",
                    height: "80%",
                    maxWidth: e.maxWidth,
                    maxHeight: e.maxHeight,
                    name: "store"
                }
            }, [n("Store")], 1), e._v(" "), n("modal", {
                attrs: {
                    width: "60%",
                    height: "80%",
                    name: "loginFlow"
                },
                on: {
                    "before-close": e.beforeClose
                }
            }, [n("LoginFlow")], 1), e._v(" "), n("modal", {
                attrs: {
                    name: "logoutConf",
                    width: "350px",
                    height: "200px"
                }
            }, [n("div", {
                staticClass: "d-flex flex-column w-100 h-100",
                staticStyle: {
                    "background-color": "#1d1d1d"
                }
            }, [n("div", {
                staticStyle: {
                    flex: "1",
                    padding: "1rem",
                    display: "flex",
                    "align-items": "center",
                    "justify-content": "center",
                    "text-align": "center",
                    color: "#efefef",
                    "font-size": "0.925rem"
                }
            }, [e._v("\n                    Are you sure you want to logout from\n                    "), n("br"), e._v("your Ninja Kiwi account?\n                ")]), e._v(" "), n("div", {
                staticStyle: {
                    height: "40px",
                    display: "flex"
                }
            }, [n("div", {
                staticClass: "flash_conf_btn",
                on: {
                    click: e.cancelLogout
                }
            }, [e._v("\n                        No\n                    ")]), e._v(" "), n("div", {
                staticClass: "flash_conf_btn flash_conf_yes",
                on: {
                    click: e.acceptLogout
                }
            }, [e._v("\n                        Yes\n                    ")])])])]), e._v(" "), n("modal", {
                attrs: {
                    name: "closeAppConf",
                    width: "375px",
                    height: "200px"
                }
            }, [n("div", {
                staticClass: "d-flex flex-column w-100 h-100",
                staticStyle: {
                    "background-color": "#1d1d1d"
                }
            }, [n("div", {
                staticStyle: {
                    flex: "1",
                    padding: "1rem",
                    display: "flex",
                    "align-items": "center",
                    "justify-content": "center",
                    "text-align": "center",
                    color: "#efefef",
                    "font-size": "0.925rem"
                }
            }, [e._v("\n                    Are you sure you want to quit Ninja Kiwi Archive?\n                    "), n("br"), e._v("This will also close any open games.\n                ")]), e._v(" "), n("div", {
                staticStyle: {
                    height: "40px",
                    display: "flex"
                }
            }, [n("div", {
                staticClass: "flash_conf_btn",
                on: {
                    click: e.cancelCloseApp
                }
            }, [e._v("\n                        No\n                    ")]), e._v(" "), n("div", {
                staticClass: "flash_conf_btn flash_conf_yes",
                on: {
                    click: e.acceptCloseApp
                }
            }, [e._v("\n                        Yes\n                    ")])])])])], 1)], 1) : this.$electron.remote.getCurrentWindow().accessibleTitle.startsWith("flash") ? n("div", [n("TitleBar", {
                attrs: {
                    disableMaximise: !this.$gameData[this.game].resizable
                }
            }), e._v(" "), n("FlashGame", {
                attrs: {
                    game: e.game
                }
            })], 1) : this.$electron.remote.getCurrentWindow().accessibleTitle.startsWith("settings") ? n("div", {
                staticClass: "d-flex flex-column",
                staticStyle: {
                    height: "100vh"
                }
            }, [n("TitleBar", {
                attrs: {
                    disableMenu: "true",
                    disableMinimise: "true",
                    disableMaximise: "true"
                }
            }), e._v(" "), n("Settings", {
                staticStyle: {
                    flex: "1"
                }
            })], 1) : e._e() : n("div", {
                staticClass: "d-flex justify-content-center align-items-center flex-column",
                staticStyle: {
                    height: "100vh",
                    width: "100vw"
                },
                attrs: {
                    id: "dataLoading_spinner"
                }
            }, [n("div", {
                staticStyle: {
                    position: "absolute",
                    right: "10px",
                    top: "5px",
                    padding: "0.5rem",
                    margin: "0.25rem",
                    cursor: "pointer",
                    color: "#565656",
                    "font-size": "1.5rem"
                },
                on: {
                    click: e.closeApp
                }
            }, [n("i", {
                staticClass: "fal fa-times"
            })]), e._v(" "), e._m(0)])
        }), [function() {
            var e = this.$createElement,
                t = this._self._c || e;
            return t("div", {
                staticClass: "spinner-border text-danger",
                attrs: {
                    role: "status"
                }
            }, [t("span", {
                staticClass: "sr-only"
            }, [this._v("Loading...")])])
        }, function() {
            var e = this.$createElement,
                t = this._self._c || e;
            return t("div", {
                staticClass: "spinner-border text-danger",
                attrs: {
                    role: "status"
                }
            }, [t("span", {
                staticClass: "sr-only"
            }, [this._v("Loading...")])])
        }, function() {
            var e = this.$createElement,
                t = this._self._c || e;
            return t("p", {
                staticClass: "mb-1",
                staticStyle: {
                    "font-size": "1.25rem",
                    "font-weight": "300",
                    "text-align": "center"
                }
            }, [this._v("\n                    Flash Player is required to play games on this app.\n                    "), t("br"), this._v("Please select a download mirror from this list:\n                ")])
        }, function() {
            var e = this.$createElement,
                t = this._self._c || e;
            return t("div", {
                staticClass: "spinner-border text-danger",
                attrs: {
                    role: "status"
                }
            }, [t("span", {
                staticClass: "sr-only"
            }, [this._v("Loading...")])])
        }, function() {
            var e = this.$createElement,
                t = this._self._c || e;
            return t("p", {
                staticClass: "mt-3",
                staticStyle: {
                    "font-size": "0.8rem",
                    "font-weight": "300",
                    "text-align": "center",
                    opacity: "0.6"
                }
            }, [this._v("\n            For further help, please find guides and community support here:\n            "), t("a", {
                staticClass: "text-danger",
                attrs: {
                    target: "_blank",
                    href: "https://www.reddit.com/r/NinjaKiwiOfficial/"
                }
            }, [this._v("Ninja Kiwi Reddit")])])
        }, function() {
            var e = this.$createElement,
                t = this._self._c || e;
            return t("p", {
                staticClass: "mb-3",
                staticStyle: {
                    "font-size": "1.25rem",
                    "font-weight": "300",
                    "text-align": "center"
                }
            }, [this._v("\n            Flash Player is required to play games on this app.\n            "), t("br"), this._v("Would you like to download & install it now?\n        ")])
        }, function() {
            var e = this.$createElement,
                t = this._self._c || e;
            return t("div", {
                staticClass: "text-center",
                staticStyle: {
                    opacity: "0"
                },
                attrs: {
                    id: "flashReqSpinner"
                }
            }, [t("div", {
                staticClass: "spinner-border text-danger",
                attrs: {
                    role: "status"
                }
            }, [t("span", {
                staticClass: "sr-only"
            }, [this._v("Loading...")])]), this._v(" "), t("p", {
                staticStyle: {
                    "font-size": "0.85rem",
                    "font-weight": "300",
                    opacity: "0.75",
                    "margin-top": "0.5rem",
                    "text-align": "center"
                },
                attrs: {
                    id: "flashReqUpdates"
                }
            }, [this._v("\n                 \n            ")])])
        }], !1, null, null, null).exports),
        U = n(24),
        B = n.n(U),
        H = n(7),
        V = n.n(H),
        q = (n(62), n(25)),
        z = n.n(q),
        W = (n(63), n(26)),
        G = n.n(W);
    let K = n(46);
    a.a.use(V.a), a.a.component("tippy", H.TippyComponent), a.a.use(z.a);
    const J = n(6),
        X = n(64),
        Y = n(65),
        Z = l.remote.app,
        Q = n(0).ipcRenderer,
        ee = new f.a;
    a.a.use(B.a), a.a.prototype.$electron = n(0), a.a.prototype.$ = K, a.a.prototype.$steamBuild = l.remote.getGlobal("steamBuild"), a.a.prototype.$stagingBuild = l.remote.getGlobal("stagingBuild"), a.a.prototype.$platform = l.remote.process.platform, l.remote.getGlobal("dataLoaded") ? (a.a.prototype.$dataLoaded = l.remote.getGlobal("dataLoaded"), a.a.prototype.$gameData = l.remote.getGlobal("gameData"), a.a.prototype.$appSettings = l.remote.getGlobal("appSettings")) : a.a.prototype.$electron.remote.getCurrentWindow().accessibleTitle.includes(":") || Q.on("game-data-loaded", (e, t) => {
        a.a.prototype.$dataLoaded = t, a.a.prototype.$gameData = l.remote.getGlobal("gameData"), a.a.prototype.$appSettings = l.remote.getGlobal("appSettings")
    }), a.a.prototype.$mynk = {}, a.a.prototype.$mynk.getFlashData = function() {
        ee.get("mynkEmail") && (a.a.prototype.$mynk.email = ee.get("mynkEmail"));
        let e = Y.sync(Z.getPath("userData") + "/Pepper Data/Shockwave Flash/WritableRoot/#SharedObjects/**/mynk_data.sol");
        if (e.length)
            for (let t of e) {
                let e = J.readFileSync(t),
                    n = X.SOL.read(e).body;
                if (n.obj && Object.keys(n.obj).length > 0) {
                    a.a.prototype.$mynk.user = n.obj.mynk_user, a.a.prototype.$mynk.id = n.obj.mynk_id, a.a.prototype.$mynk.token = n.obj.mynk_token, a.a.prototype.$mynk.loggedIn = !0;
                    break
                }
                a.a.prototype.$mynk.loggedIn = !1
            } else a.a.prototype.$mynk.loggedIn = !1
    }, a.a.prototype.$mynk.clearFlashData = async function() {
        ee.delete("mynkEmail"), a.a.prototype.$mynk.email = null;
        let e = Y.sync(Z.getPath("userData") + "/Pepper Data/Shockwave Flash/WritableRoot/#SharedObjects/**/mynk_data.sol");
        if (e.length)
            for (let t of e) J.unlinkSync(t);
        else a.a.prototype.$mynk.loggedIn = !1
    }, a.a.prototype.$mynk.logout = async function() {
        window.open("https://ninjakiwi.com/logout", "_blank"), a.a.prototype.$mynk.clearFlashData()
    }, a.a.prototype.$mynk.getFlashData(), a.a.prototype.$link = {}, a.a.prototype.$link.request = function(e, t, n, r) {
        var a = JSON.stringify(t),
            s = (new Date).getTime().toString(36) + Math.random();
        var o = {
            data: a,
            auth: {
                appID: 18,
                skuID: 1802,
                session: void 0
            },
            sig: G()("A32DEDOEN821HHOR" + a + s, {
                algorithm: "md5",
                encoding: "hex"
            }),
            nonce: s
        };
        let c = "";
        c = l.remote.getGlobal("stagingBuild") ? "https://api-staging.ninjakiwi.com" : "https://api.ninjakiwi.com", i()({
            method: "post",
            url: c + e,
            responseType: "json",
            headers: {
                nk_locale: "en"
            },
            data: o,
            timeout: 18e4
        }).then((function(e) {
            var t = e.data;
            if (null === t.error) n(JSON.parse(t.data));
            else {
                var i = {
                    type: "NETWORK ERROR",
                    error: e
                };
                r ? r(i) : console.error("API Error:", i)
            }
        })).catch((function(e) {
            var t = {
                type: "NETWORK ERROR",
                error: e.message
            };
            r ? r(t) : console.error("API Error:", t)
        }))
    }, a.a.prototype.$link.currentTransaction = {}, a.a.prototype.$link.steam = {
        initialised: !1,
        greenworks: null,
        currentUser: {}
    }, a.a.prototype.$link.startIAP = function(e) {
        if (K(".store_catalogue_item_container").each((e, t) => {
                K(t).css({
                    opacity: "0.5",
                    "pointer-events": "none"
                })
            }), K("#iapPendingSpinner").css("display", "flex"), setTimeout(() => {
                K(".store_catalogue_item_container").each((e, t) => {
                    K(t).css({
                        opacity: "1",
                        "pointer-events": "auto"
                    })
                }), K("#iapPendingSpinner").css("display", "none")
            }, 5e3), a.a.prototype.$mynk.loggedIn)
            if (a.a.prototype.$link.steam.currentUser.flashID = a.a.prototype.$mynk.id, a.a.prototype.$link.steam.initialised && a.a.prototype.$link.steam.currentUser.id && a.a.prototype.$steamBuild) {
                let t = e.currentTarget.dataset.iap,
                    n = e.currentTarget.dataset.description;
                a.a.prototype.$link.request("/payment/steam/start", {
                    steamid: a.a.prototype.$link.steam.currentUser.id,
                    language: "EN",
                    itemid: t,
                    description: n
                }, e => {
                    a.a.prototype.$link.currentTransaction = {
                        orderID: e.orderid,
                        itemID: t,
                        success: e.success
                    }, e.success || console.error("Error starting payment")
                })
            } else {
                let n = e.currentTarget.dataset.iap,
                    r = a.a.prototype.$link.iapData[n].nkcoins;
                var t = {
                    user: {
                        id: {
                            value: a.a.prototype.$mynk.id
                        },
                        name: {
                            value: a.a.prototype.$mynk.user
                        },
                        email: {
                            value: a.a.prototype.$mynk.email ? a.a.prototype.$mynk.email : "noemail"
                        }
                    },
                    settings: {
                        project_id: 24500,
                        ui: {
                            version: "desktop",
                            theme: "dark",
                            size: "medium",
                            desktop: {
                                header: {
                                    is_visible: !0,
                                    visible_name: !0,
                                    type: "normal",
                                    visible_logo: !0,
                                    close_button: !1
                                }
                            }
                        }
                    },
                    purchase: {
                        virtual_currency: {
                            quantity: r,
                            currency: "USD"
                        }
                    }
                };
                if ("noemail" === t.user.email.value) return void console.error("No email found");
                a.a.prototype.$stagingBuild && (t.settings.mode = "sandbox");
                let s = atob("MzM1NjY6Nmo1a1IxbURGVnhRWFdETw==").split(":");
                i.a.post(`https://api.xsolla.com/merchant/merchants/${s[0]}/token`, t, {
                    headers: {
                        "Content-Type": "application/json",
                        authorization: "Basic " + btoa(s[0] + ":" + s[1])
                    }
                }).then(e => {
                    a.a.prototype.loading = !1;
                    let t = e.data.token;
                    var n = null;
                    (n = require(process.resourcesPath + "/src/static/widget.min.js")).init({
                        access_token: t,
                        project_id: 24500,
                        sandbox: a.a.prototype.$stagingBuild,
                        lightbox: {
                            zIndex: 10001,
                            overlayBackground: "#1b1b1b",
                            overlayOpacity: 0,
                            contentBackground: "#292929",
                            spinner: "none",
                            width: "80%",
                            height: "80%"
                        }
                    }), n.open(), n.on(n.eventTypes.STATUS, (function(e, t) {
                        "done" === t.paymentInfo.status && Q.send("xsolla-success", "success")
                    })), n.on(n.eventTypes.CLOSE, (function(e) {
                        Q.send("xsolla-success", "closed")
                    }))
                }).catch(e => {
                    console.log(e)
                })
            }
        else console.error("Cannot proceed with transaction. Please login first")
    }, new a.a({
        el: "#app",
        render: e => e(M)
    }), Q.on("settings", () => {
        Q.send("settings")
    })
}]);
//# sourceMappingURL=renderer.js.map