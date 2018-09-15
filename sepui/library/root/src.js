///<jscompress sourcefile="vue.js" />
/*!
 * Vue.js v2.3.0
 * (c) 2014-2017 Evan You
 * Released under the MIT License.
 */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.Vue=t()}(this,function(){"use strict";function e(e){return void 0===e||null===e}function t(e){return void 0!==e&&null!==e}function n(e){return!0===e}function r(e){return"string"==typeof e||"number"==typeof e}function i(e){return null!==e&&"object"==typeof e}function o(e){return"[object Object]"===Ai.call(e)}function a(e){return"[object RegExp]"===Ai.call(e)}function s(e){return null==e?"":"object"==typeof e?JSON.stringify(e,null,2):String(e)}function c(e){var t=parseFloat(e);return isNaN(t)?e:t}function u(e,t){for(var n=Object.create(null),r=e.split(","),i=0;i<r.length;i++)n[r[i]]=!0;return t?function(e){return n[e.toLowerCase()]}:function(e){return n[e]}}function l(e,t){if(e.length){var n=e.indexOf(t);if(n>-1)return e.splice(n,1)}}function f(e,t){return Si.call(e,t)}function p(e){var t=Object.create(null);return function(n){return t[n]||(t[n]=e(n))}}function d(e,t){function n(n){var r=arguments.length;return r?r>1?e.apply(t,arguments):e.call(t,n):e.call(t)}return n._length=e.length,n}function v(e,t){t=t||0;for(var n=e.length-t,r=new Array(n);n--;)r[n]=e[n+t];return r}function h(e,t){for(var n in t)e[n]=t[n];return e}function m(e){for(var t={},n=0;n<e.length;n++)e[n]&&h(t,e[n]);return t}function g(){}function y(e,t){var n=i(e),r=i(t);if(!n||!r)return!n&&!r&&String(e)===String(t);try{return JSON.stringify(e)===JSON.stringify(t)}catch(n){return e===t}}function _(e,t){for(var n=0;n<e.length;n++)if(y(e[n],t))return n;return-1}function b(e){var t=!1;return function(){t||(t=!0,e.apply(this,arguments))}}function $(e){var t=(e+"").charCodeAt(0);return 36===t||95===t}function x(e,t,n,r){Object.defineProperty(e,t,{value:n,enumerable:!!r,writable:!0,configurable:!0})}function w(e){if(!Fi.test(e)){var t=e.split(".");return function(e){for(var n=0;n<t.length;n++){if(!e)return;e=e[t[n]]}return e}}}function C(e,t,n){if(Pi.errorHandler)Pi.errorHandler.call(null,e,t,n);else{if(!Ui||"undefined"==typeof console)throw e;console.error(e)}}function k(e){return"function"==typeof e&&/native code/.test(e.toString())}function A(e){oo.target&&ao.push(oo.target),oo.target=e}function O(){oo.target=ao.pop()}function S(e,t){e.__proto__=t}function T(e,t,n){for(var r=0,i=n.length;r<i;r++){var o=n[r];x(e,o,t[o])}}function E(e,t){if(i(e)){var n;return f(e,"__ob__")&&e.__ob__ instanceof fo?n=e.__ob__:lo.shouldConvert&&!eo()&&(Array.isArray(e)||o(e))&&Object.isExtensible(e)&&!e._isVue&&(n=new fo(e)),t&&n&&n.vmCount++,n}}function j(e,t,n,r){var i=new oo,o=Object.getOwnPropertyDescriptor(e,t);if(!o||!1!==o.configurable){var a=o&&o.get,s=o&&o.set,c=E(n);Object.defineProperty(e,t,{enumerable:!0,configurable:!0,get:function(){var t=a?a.call(e):n;return oo.target&&(i.depend(),c&&c.dep.depend(),Array.isArray(t)&&I(t)),t},set:function(t){var r=a?a.call(e):n;t===r||t!==t&&r!==r||(s?s.call(e,t):n=t,c=E(t),i.notify())}})}}function N(e,t,n){if(Array.isArray(e)&&"number"==typeof t)return e.length=Math.max(e.length,t),e.splice(t,1,n),n;if(f(e,t))return e[t]=n,n;var r=e.__ob__;return e._isVue||r&&r.vmCount?n:r?(j(r.value,t,n),r.dep.notify(),n):(e[t]=n,n)}function L(e,t){if(Array.isArray(e)&&"number"==typeof t)return void e.splice(t,1);var n=e.__ob__;e._isVue||n&&n.vmCount||f(e,t)&&(delete e[t],n&&n.dep.notify())}function I(e){for(var t=void 0,n=0,r=e.length;n<r;n++)t=e[n],t&&t.__ob__&&t.__ob__.dep.depend(),Array.isArray(t)&&I(t)}function D(e,t){if(!t)return e;for(var n,r,i,a=Object.keys(t),s=0;s<a.length;s++)n=a[s],r=e[n],i=t[n],f(e,n)?o(r)&&o(i)&&D(r,i):N(e,n,i);return e}function M(e,t){return t?e?e.concat(t):Array.isArray(t)?t:[t]:e}function P(e,t){var n=Object.create(e||null);return t?h(n,t):n}function R(e){var t=e.props;if(t){var n,r,i,a={};if(Array.isArray(t))for(n=t.length;n--;)"string"==typeof(r=t[n])&&(i=Ti(r),a[i]={type:null});else if(o(t))for(var s in t)r=t[s],i=Ti(s),a[i]=o(r)?r:{type:r};e.props=a}}function F(e){var t=e.directives;if(t)for(var n in t){var r=t[n];"function"==typeof r&&(t[n]={bind:r,update:r})}}function B(e,t,n){function r(r){var i=po[r]||vo;c[r]=i(e[r],t[r],n,r)}"function"==typeof t&&(t=t.options),R(t),F(t);var i=t.extends;if(i&&(e=B(e,i,n)),t.mixins)for(var o=0,a=t.mixins.length;o<a;o++)e=B(e,t.mixins[o],n);var s,c={};for(s in e)r(s);for(s in t)f(e,s)||r(s);return c}function H(e,t,n,r){if("string"==typeof n){var i=e[t];if(f(i,n))return i[n];var o=Ti(n);if(f(i,o))return i[o];var a=Ei(o);if(f(i,a))return i[a];var s=i[n]||i[o]||i[a];return s}}function U(e,t,n,r){var i=t[e],o=!f(n,e),a=n[e];if(J(Boolean,i.type)&&(o&&!f(i,"default")?a=!1:J(String,i.type)||""!==a&&a!==ji(e)||(a=!0)),void 0===a){a=V(r,i,e);var s=lo.shouldConvert;lo.shouldConvert=!0,E(a),lo.shouldConvert=s}return a}function V(e,t,n){if(f(t,"default")){var r=t.default;return e&&e.$options.propsData&&void 0===e.$options.propsData[n]&&void 0!==e._props[n]?e._props[n]:"function"==typeof r&&"Function"!==z(t.type)?r.call(e):r}}function z(e){var t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:""}function J(e,t){if(!Array.isArray(t))return z(t)===z(e);for(var n=0,r=t.length;n<r;n++)if(z(t[n])===z(e))return!0;return!1}function K(e){return new ho(void 0,void 0,void 0,String(e))}function q(e){var t=new ho(e.tag,e.data,e.children,e.text,e.elm,e.context,e.componentOptions);return t.ns=e.ns,t.isStatic=e.isStatic,t.key=e.key,t.isCloned=!0,t}function W(e){for(var t=e.length,n=new Array(t),r=0;r<t;r++)n[r]=q(e[r]);return n}function Z(e){function t(){var e=arguments,n=t.fns;if(!Array.isArray(n))return n.apply(null,arguments);for(var r=0;r<n.length;r++)n[r].apply(null,e)}return t.fns=e,t}function G(t,n,r,i,o){var a,s,c,u;for(a in t)s=t[a],c=n[a],u=_o(a),e(s)||(e(c)?(e(s.fns)&&(s=t[a]=Z(s)),r(u.name,s,u.once,u.capture,u.passive)):s!==c&&(c.fns=s,t[a]=c));for(a in n)e(t[a])&&(u=_o(a),i(u.name,n[a],u.capture))}function Y(r,i,o){function a(){o.apply(this,arguments),l(s.fns,a)}var s,c=r[i];e(c)?s=Z([a]):t(c.fns)&&n(c.merged)?(s=c,s.fns.push(a)):s=Z([c,a]),s.merged=!0,r[i]=s}function Q(n,r,i){var o=r.options.props;if(!e(o)){var a={},s=n.attrs,c=n.props;if(t(s)||t(c))for(var u in o){var l=ji(u);X(a,c,u,l,!0)||X(a,s,u,l,!1)}return a}}function X(e,n,r,i,o){if(t(n)){if(f(n,r))return e[r]=n[r],o||delete n[r],!0;if(f(n,i))return e[r]=n[i],o||delete n[i],!0}return!1}function ee(e){for(var t=0;t<e.length;t++)if(Array.isArray(e[t]))return Array.prototype.concat.apply([],e);return e}function te(e){return r(e)?[K(e)]:Array.isArray(e)?ne(e):void 0}function ne(n,i){var o,a,s,c=[];for(o=0;o<n.length;o++)a=n[o],e(a)||"boolean"==typeof a||(s=c[c.length-1],Array.isArray(a)?c.push.apply(c,ne(a,(i||"")+"_"+o)):r(a)?t(s)&&t(s.text)?s.text+=String(a):""!==a&&c.push(K(a)):t(a.text)&&t(s)&&t(s.text)?c[c.length-1]=K(s.text+a.text):(t(a.tag)&&e(a.key)&&t(i)&&(a.key="__vlist"+i+"_"+o+"__"),c.push(a)));return c}function re(e,t){return i(e)?t.extend(e):e}function ie(r,o,a){if(n(r.error)&&t(r.errorComp))return r.errorComp;if(t(r.resolved))return r.resolved;if(n(r.loading)&&t(r.loadingComp))return r.loadingComp;if(!t(r.contexts)){var s=r.contexts=[a],c=!0,u=function(){for(var e=0,t=s.length;e<t;e++)s[e].$forceUpdate()},l=b(function(e){r.resolved=re(e,o),c||u()}),f=b(function(e){t(r.errorComp)&&(r.error=!0,u())}),p=r(l,f);return i(p)&&("function"==typeof p.then?e(r.resolved)&&p.then(l,f):t(p.component)&&"function"==typeof p.component.then&&(p.component.then(l,f),t(p.error)&&(r.errorComp=re(p.error,o)),t(p.loading)&&(r.loadingComp=re(p.loading,o),0===p.delay?r.loading=!0:setTimeout(function(){e(r.resolved)&&e(r.error)&&(r.loading=!0,u())},p.delay||200)),t(p.timeout)&&setTimeout(function(){f(null)},p.timeout))),c=!1,r.loading?r.loadingComp:r.resolved}r.contexts.push(a)}function oe(e){if(Array.isArray(e))for(var n=0;n<e.length;n++){var r=e[n];if(t(r)&&t(r.componentOptions))return r}}function ae(e){e._events=Object.create(null),e._hasHookEvent=!1;var t=e.$options._parentListeners;t&&ue(e,t)}function se(e,t,n){n?go.$once(e,t):go.$on(e,t)}function ce(e,t){go.$off(e,t)}function ue(e,t,n){go=e,G(t,n||{},se,ce,e)}function le(e,t){var n={};if(!e)return n;for(var r=[],i=0,o=e.length;i<o;i++){var a=e[i];if(a.context!==t&&a.functionalContext!==t||!a.data||null==a.data.slot)r.push(a);else{var s=a.data.slot,c=n[s]||(n[s]=[]);"template"===a.tag?c.push.apply(c,a.children):c.push(a)}}return r.every(fe)||(n.default=r),n}function fe(e){return e.isComment||" "===e.text}function pe(e){for(var t={},n=0;n<e.length;n++)t[e[n][0]]=e[n][1];return t}function de(e){var t=e.$options,n=t.parent;if(n&&!t.abstract){for(;n.$options.abstract&&n.$parent;)n=n.$parent;n.$children.push(e)}e.$parent=n,e.$root=n?n.$root:e,e.$children=[],e.$refs={},e._watcher=null,e._inactive=null,e._directInactive=!1,e._isMounted=!1,e._isDestroyed=!1,e._isBeingDestroyed=!1}function ve(e,t,n){e.$el=t,e.$options.render||(e.$options.render=yo),_e(e,"beforeMount");var r;return r=function(){e._update(e._render(),n)},e._watcher=new So(e,r,g),n=!1,null==e.$vnode&&(e._isMounted=!0,_e(e,"mounted")),e}function he(e,t,n,r,i){var o=!!(i||e.$options._renderChildren||r.data.scopedSlots||e.$scopedSlots!==Ri);if(e.$options._parentVnode=r,e.$vnode=r,e._vnode&&(e._vnode.parent=r),e.$options._renderChildren=i,t&&e.$options.props){lo.shouldConvert=!1;for(var a=e._props,s=e.$options._propKeys||[],c=0;c<s.length;c++){var u=s[c];a[u]=U(u,e.$options.props,t,e)}lo.shouldConvert=!0,e.$options.propsData=t}if(n){var l=e.$options._parentListeners;e.$options._parentListeners=n,ue(e,n,l)}o&&(e.$slots=le(i,r.context),e.$forceUpdate())}function me(e){for(;e&&(e=e.$parent);)if(e._inactive)return!0;return!1}function ge(e,t){if(t){if(e._directInactive=!1,me(e))return}else if(e._directInactive)return;if(e._inactive||null===e._inactive){e._inactive=!1;for(var n=0;n<e.$children.length;n++)ge(e.$children[n]);_e(e,"activated")}}function ye(e,t){if(!(t&&(e._directInactive=!0,me(e))||e._inactive)){e._inactive=!0;for(var n=0;n<e.$children.length;n++)ye(e.$children[n]);_e(e,"deactivated")}}function _e(e,t){var n=e.$options[t];if(n)for(var r=0,i=n.length;r<i;r++)try{n[r].call(e)}catch(n){C(n,e,t+" hook")}e._hasHookEvent&&e.$emit("hook:"+t)}function be(){$o.length=xo.length=0,wo={},Co=ko=!1}function $e(){ko=!0;var e,t;for($o.sort(function(e,t){return e.id-t.id}),Ao=0;Ao<$o.length;Ao++)e=$o[Ao],t=e.id,wo[t]=null,e.run();var n=xo.slice(),r=$o.slice();be(),Ce(n),xe(r),to&&Pi.devtools&&to.emit("flush")}function xe(e){for(var t=e.length;t--;){var n=e[t],r=n.vm;r._watcher===n&&r._isMounted&&_e(r,"updated")}}function we(e){e._inactive=!1,xo.push(e)}function Ce(e){for(var t=0;t<e.length;t++)e[t]._inactive=!0,ge(e[t],!0)}function ke(e){var t=e.id;if(null==wo[t]){if(wo[t]=!0,ko){for(var n=$o.length-1;n>=0&&$o[n].id>e.id;)n--;$o.splice(Math.max(n,Ao)+1,0,e)}else $o.push(e);Co||(Co=!0,ro($e))}}function Ae(e){To.clear(),Oe(e,To)}function Oe(e,t){var n,r,o=Array.isArray(e);if((o||i(e))&&Object.isExtensible(e)){if(e.__ob__){var a=e.__ob__.dep.id;if(t.has(a))return;t.add(a)}if(o)for(n=e.length;n--;)Oe(e[n],t);else for(r=Object.keys(e),n=r.length;n--;)Oe(e[r[n]],t)}}function Se(e,t,n){Eo.get=function(){return this[t][n]},Eo.set=function(e){this[t][n]=e},Object.defineProperty(e,n,Eo)}function Te(e){e._watchers=[];var t=e.$options;t.props&&Ee(e,t.props),t.methods&&Me(e,t.methods),t.data?je(e):E(e._data={},!0),t.computed&&Le(e,t.computed),t.watch&&Pe(e,t.watch)}function Ee(e,t){var n=e.$options.propsData||{},r=e._props={},i=e.$options._propKeys=[],o=!e.$parent;lo.shouldConvert=o;for(var a in t)!function(o){i.push(o);var a=U(o,t,n,e);j(r,o,a),o in e||Se(e,"_props",o)}(a);lo.shouldConvert=!0}function je(e){var t=e.$options.data;t=e._data="function"==typeof t?Ne(t,e):t||{},o(t)||(t={});for(var n=Object.keys(t),r=e.$options.props,i=n.length;i--;)r&&f(r,n[i])||$(n[i])||Se(e,"_data",n[i]);E(t,!0)}function Ne(e,t){try{return e.call(t)}catch(e){return C(e,t,"data()"),{}}}function Le(e,t){var n=e._computedWatchers=Object.create(null);for(var r in t){var i=t[r],o="function"==typeof i?i:i.get;n[r]=new So(e,o,g,jo),r in e||Ie(e,r,i)}}function Ie(e,t,n){"function"==typeof n?(Eo.get=De(t),Eo.set=g):(Eo.get=n.get?!1!==n.cache?De(t):n.get:g,Eo.set=n.set?n.set:g),Object.defineProperty(e,t,Eo)}function De(e){return function(){var t=this._computedWatchers&&this._computedWatchers[e];if(t)return t.dirty&&t.evaluate(),oo.target&&t.depend(),t.value}}function Me(e,t){e.$options.props;for(var n in t)e[n]=null==t[n]?g:d(t[n],e)}function Pe(e,t){for(var n in t){var r=t[n];if(Array.isArray(r))for(var i=0;i<r.length;i++)Re(e,n,r[i]);else Re(e,n,r)}}function Re(e,t,n){var r;o(n)&&(r=n,n=n.handler),"string"==typeof n&&(n=e[n]),e.$watch(t,n,r)}function Fe(e){var t=e.$options.provide;t&&(e._provided="function"==typeof t?t.call(e):t)}function Be(e){var t=He(e.$options.inject,e);t&&Object.keys(t).forEach(function(n){j(e,n,t[n])})}function He(e,t){if(e){for(var n=Array.isArray(e),r=Object.create(null),i=n?e:no?Reflect.ownKeys(e):Object.keys(e),o=0;o<i.length;o++)for(var a=i[o],s=n?a:e[a],c=t;c;){if(c._provided&&s in c._provided){r[a]=c._provided[s];break}c=c.$parent}return r}}function Ue(e,n,r,i,o){var a={},s=e.options.props;if(t(s))for(var c in s)a[c]=U(c,s,n);else t(r.attrs)&&Ve(a,r.attrs),t(r.props)&&Ve(a,r.props);var u=Object.create(i),l=function(e,t,n,r){return Ze(u,e,t,n,r,!0)},f=e.options.render.call(null,l,{data:r,props:a,children:o,parent:i,listeners:r.on||{},injections:He(e.options.inject,i),slots:function(){return le(o,i)}});return f instanceof ho&&(f.functionalContext=i,r.slot&&((f.data||(f.data={})).slot=r.slot)),f}function Ve(e,t){for(var n in t)e[Ti(n)]=t[n]}function ze(r,o,a,s,c){if(!e(r)){var u=a.$options._base;if(i(r)&&(r=u.extend(r)),"function"==typeof r&&(!e(r.cid)||void 0!==(r=ie(r,u,a)))){ut(r),o=o||{},t(o.model)&&We(r.options,o);var l=Q(o,r,c);if(n(r.options.functional))return Ue(r,l,o,a,s);var f=o.on;o.on=o.nativeOn,n(r.options.abstract)&&(o={}),Ke(o);var p=r.options.name||c;return new ho("vue-component-"+r.cid+(p?"-"+p:""),o,void 0,void 0,void 0,a,{Ctor:r,propsData:l,listeners:f,tag:c,children:s})}}}function Je(e,n,r,i){var o=e.componentOptions,a={_isComponent:!0,parent:n,propsData:o.propsData,_componentTag:o.tag,_parentVnode:e,_parentListeners:o.listeners,_renderChildren:o.children,_parentElm:r||null,_refElm:i||null},s=e.data.inlineTemplate;return t(s)&&(a.render=s.render,a.staticRenderFns=s.staticRenderFns),new o.Ctor(a)}function Ke(e){e.hook||(e.hook={});for(var t=0;t<Lo.length;t++){var n=Lo[t],r=e.hook[n],i=No[n];e.hook[n]=r?qe(i,r):i}}function qe(e,t){return function(n,r,i,o){e(n,r,i,o),t(n,r,i,o)}}function We(e,n){var r=e.model&&e.model.prop||"value",i=e.model&&e.model.event||"input";(n.props||(n.props={}))[r]=n.model.value;var o=n.on||(n.on={});t(o[i])?o[i]=[n.model.callback].concat(o[i]):o[i]=n.model.callback}function Ze(e,t,i,o,a,s){return(Array.isArray(i)||r(i))&&(a=o,o=i,i=void 0),n(s)&&(a=Do),Ge(e,t,i,o,a)}function Ge(e,n,r,i,o){if(t(r)&&t(r.__ob__))return yo();if(!n)return yo();Array.isArray(i)&&"function"==typeof i[0]&&(r=r||{},r.scopedSlots={default:i[0]},i.length=0),o===Do?i=te(i):o===Io&&(i=ee(i));var a,s;if("string"==typeof n){var c;s=Pi.getTagNamespace(n),a=Pi.isReservedTag(n)?new ho(Pi.parsePlatformTagName(n),r,i,void 0,void 0,e):t(c=H(e.$options,"components",n))?ze(c,r,e,i,n):new ho(n,r,i,void 0,void 0,e)}else a=ze(n,r,e,i);return void 0!==a?(s&&Ye(a,s),a):yo()}function Ye(n,r){if(n.ns=r,"foreignObject"!==n.tag&&Array.isArray(n.children))for(var i=0,o=n.children.length;i<o;i++){var a=n.children[i];t(a.tag)&&e(a.ns)&&Ye(a,r)}}function Qe(e,t){var n,r,o,a,s;if(Array.isArray(e)||"string"==typeof e)for(n=new Array(e.length),r=0,o=e.length;r<o;r++)n[r]=t(e[r],r);else if("number"==typeof e)for(n=new Array(e),r=0;r<e;r++)n[r]=t(r+1,r);else if(i(e))for(a=Object.keys(e),n=new Array(a.length),r=0,o=a.length;r<o;r++)s=a[r],n[r]=t(e[s],s,r);return n}function Xe(e,t,n,r){var i=this.$scopedSlots[e];if(i)return n=n||{},r&&h(n,r),i(n)||t;var o=this.$slots[e];return o||t}function et(e){return H(this.$options,"filters",e,!0)||Li}function tt(e,t,n){var r=Pi.keyCodes[t]||n;return Array.isArray(r)?-1===r.indexOf(e):r!==e}function nt(e,t,n,r){if(n)if(i(n)){Array.isArray(n)&&(n=m(n));var o;for(var a in n){if("class"===a||"style"===a)o=e;else{var s=e.attrs&&e.attrs.type;o=r||Pi.mustUseProp(t,s,a)?e.domProps||(e.domProps={}):e.attrs||(e.attrs={})}a in o||(o[a]=n[a])}}else;return e}function rt(e,t){var n=this._staticTrees[e];return n&&!t?Array.isArray(n)?W(n):q(n):(n=this._staticTrees[e]=this.$options.staticRenderFns[e].call(this._renderProxy),ot(n,"__static__"+e,!1),n)}function it(e,t,n){return ot(e,"__once__"+t+(n?"_"+n:""),!0),e}function ot(e,t,n){if(Array.isArray(e))for(var r=0;r<e.length;r++)e[r]&&"string"!=typeof e[r]&&at(e[r],t+"_"+r,n);else at(e,t,n)}function at(e,t,n){e.isStatic=!0,e.key=t,e.isOnce=n}function st(e){e._vnode=null,e._staticTrees=null;var t=e.$vnode=e.$options._parentVnode,n=t&&t.context;e.$slots=le(e.$options._renderChildren,n),e.$scopedSlots=Ri,e._c=function(t,n,r,i){return Ze(e,t,n,r,i,!1)},e.$createElement=function(t,n,r,i){return Ze(e,t,n,r,i,!0)}}function ct(e,t){var n=e.$options=Object.create(e.constructor.options);n.parent=t.parent,n.propsData=t.propsData,n._parentVnode=t._parentVnode,n._parentListeners=t._parentListeners,n._renderChildren=t._renderChildren,n._componentTag=t._componentTag,n._parentElm=t._parentElm,n._refElm=t._refElm,t.render&&(n.render=t.render,n.staticRenderFns=t.staticRenderFns)}function ut(e){var t=e.options;if(e.super){var n=ut(e.super);if(n!==e.superOptions){e.superOptions=n;var r=lt(e);r&&h(e.extendOptions,r),t=e.options=B(n,e.extendOptions),t.name&&(t.components[t.name]=e)}}return t}function lt(e){var t,n=e.options,r=e.extendOptions,i=e.sealedOptions;for(var o in n)n[o]!==i[o]&&(t||(t={}),t[o]=ft(n[o],r[o],i[o]));return t}function ft(e,t,n){if(Array.isArray(e)){var r=[];n=Array.isArray(n)?n:[n],t=Array.isArray(t)?t:[t];for(var i=0;i<e.length;i++)(t.indexOf(e[i])>=0||n.indexOf(e[i])<0)&&r.push(e[i]);return r}return e}function pt(e){this._init(e)}function dt(e){e.use=function(e){if(!e.installed){var t=v(arguments,1);return t.unshift(this),"function"==typeof e.install?e.install.apply(e,t):"function"==typeof e&&e.apply(null,t),e.installed=!0,this}}}function vt(e){e.mixin=function(e){this.options=B(this.options,e)}}function ht(e){e.cid=0;var t=1;e.extend=function(e){e=e||{};var n=this,r=n.cid,i=e._Ctor||(e._Ctor={});if(i[r])return i[r];var o=e.name||n.options.name,a=function(e){this._init(e)};return a.prototype=Object.create(n.prototype),a.prototype.constructor=a,a.cid=t++,a.options=B(n.options,e),a.super=n,a.options.props&&mt(a),a.options.computed&&gt(a),a.extend=n.extend,a.mixin=n.mixin,a.use=n.use,Di.forEach(function(e){a[e]=n[e]}),o&&(a.options.components[o]=a),a.superOptions=n.options,a.extendOptions=e,a.sealedOptions=h({},a.options),i[r]=a,a}}function mt(e){var t=e.options.props;for(var n in t)Se(e.prototype,"_props",n)}function gt(e){var t=e.options.computed;for(var n in t)Ie(e.prototype,n,t[n])}function yt(e){Di.forEach(function(t){e[t]=function(e,n){return n?("component"===t&&o(n)&&(n.name=n.name||e,n=this.options._base.extend(n)),"directive"===t&&"function"==typeof n&&(n={bind:n,update:n}),this.options[t+"s"][e]=n,n):this.options[t+"s"][e]}})}function _t(e){return e&&(e.Ctor.options.name||e.tag)}function bt(e,t){return"string"==typeof e?e.split(",").indexOf(t)>-1:!!a(e)&&e.test(t)}function $t(e,t,n){for(var r in e){var i=e[r];if(i){var o=_t(i.componentOptions);o&&!n(o)&&(i!==t&&xt(i),e[r]=null)}}}function xt(e){e&&e.componentInstance.$destroy()}function wt(e){for(var n=e.data,r=e,i=e;t(i.componentInstance);)i=i.componentInstance._vnode,i.data&&(n=Ct(i.data,n));for(;t(r=r.parent);)r.data&&(n=Ct(n,r.data));return kt(n)}function Ct(e,n){return{staticClass:At(e.staticClass,n.staticClass),class:t(e.class)?[e.class,n.class]:n.class}}function kt(e){var n=e.class,r=e.staticClass;return t(r)||t(n)?At(r,Ot(n)):""}function At(e,t){return e?t?e+" "+t:e:t||""}function Ot(n){if(e(n))return"";if("string"==typeof n)return n;var r="";if(Array.isArray(n)){for(var o,a=0,s=n.length;a<s;a++)t(n[a])&&t(o=Ot(n[a]))&&""!==o&&(r+=o+" ");return r.slice(0,-1)}if(i(n)){for(var c in n)n[c]&&(r+=c+" ");return r.slice(0,-1)}return r}function St(e){return aa(e)?"svg":"math"===e?"math":void 0}function Tt(e){if(!Ui)return!0;if(ca(e))return!1;if(e=e.toLowerCase(),null!=ua[e])return ua[e];var t=document.createElement(e);return e.indexOf("-")>-1?ua[e]=t.constructor===window.HTMLUnknownElement||t.constructor===window.HTMLElement:ua[e]=/HTMLUnknownElement/.test(t.toString())}function Et(e){if("string"==typeof e){var t=document.querySelector(e);return t||document.createElement("div")}return e}function jt(e,t){var n=document.createElement(e);return"select"!==e?n:(t.data&&t.data.attrs&&void 0!==t.data.attrs.multiple&&n.setAttribute("multiple","multiple"),n)}function Nt(e,t){return document.createElementNS(ia[e],t)}function Lt(e){return document.createTextNode(e)}function It(e){return document.createComment(e)}function Dt(e,t,n){e.insertBefore(t,n)}function Mt(e,t){e.removeChild(t)}function Pt(e,t){e.appendChild(t)}function Rt(e){return e.parentNode}function Ft(e){return e.nextSibling}function Bt(e){return e.tagName}function Ht(e,t){e.textContent=t}function Ut(e,t,n){e.setAttribute(t,n)}function Vt(e,t){var n=e.data.ref;if(n){var r=e.context,i=e.componentInstance||e.elm,o=r.$refs;t?Array.isArray(o[n])?l(o[n],i):o[n]===i&&(o[n]=void 0):e.data.refInFor?Array.isArray(o[n])&&o[n].indexOf(i)<0?o[n].push(i):o[n]=[i]:o[n]=i}}function zt(e,n){return e.key===n.key&&e.tag===n.tag&&e.isComment===n.isComment&&t(e.data)===t(n.data)&&Jt(e,n)}function Jt(e,n){if("input"!==e.tag)return!0;var r;return(t(r=e.data)&&t(r=r.attrs)&&r.type)===(t(r=n.data)&&t(r=r.attrs)&&r.type)}function Kt(e,n,r){var i,o,a={};for(i=n;i<=r;++i)o=e[i].key,t(o)&&(a[o]=i);return a}function qt(e,t){(e.data.directives||t.data.directives)&&Wt(e,t)}function Wt(e,t){var n,r,i,o=e===pa,a=t===pa,s=Zt(e.data.directives,e.context),c=Zt(t.data.directives,t.context),u=[],l=[];for(n in c)r=s[n],i=c[n],r?(i.oldValue=r.value,Yt(i,"update",t,e),i.def&&i.def.componentUpdated&&l.push(i)):(Yt(i,"bind",t,e),i.def&&i.def.inserted&&u.push(i));if(u.length){var f=function(){for(var n=0;n<u.length;n++)Yt(u[n],"inserted",t,e)};o?Y(t.data.hook||(t.data.hook={}),"insert",f):f()}if(l.length&&Y(t.data.hook||(t.data.hook={}),"postpatch",function(){for(var n=0;n<l.length;n++)Yt(l[n],"componentUpdated",t,e)}),!o)for(n in s)c[n]||Yt(s[n],"unbind",e,e,a)}function Zt(e,t){var n=Object.create(null);if(!e)return n;var r,i;for(r=0;r<e.length;r++)i=e[r],i.modifiers||(i.modifiers=ha),n[Gt(i)]=i,i.def=H(t.$options,"directives",i.name,!0);return n}function Gt(e){return e.rawName||e.name+"."+Object.keys(e.modifiers||{}).join(".")}function Yt(e,t,n,r,i){var o=e.def&&e.def[t];if(o)try{o(n.elm,e,n,r,i)}catch(r){C(r,n.context,"directive "+e.name+" "+t+" hook")}}function Qt(n,r){if(!e(n.data.attrs)||!e(r.data.attrs)){var i,o,a=r.elm,s=n.data.attrs||{},c=r.data.attrs||{};t(c.__ob__)&&(c=r.data.attrs=h({},c));for(i in c)o=c[i],s[i]!==o&&Xt(a,i,o);Ji&&c.value!==s.value&&Xt(a,"value",c.value);for(i in s)e(c[i])&&(ta(i)?a.removeAttributeNS(ea,na(i)):Qo(i)||a.removeAttribute(i))}}function Xt(e,t,n){Xo(t)?ra(n)?e.removeAttribute(t):e.setAttribute(t,t):Qo(t)?e.setAttribute(t,ra(n)||"false"===n?"false":"true"):ta(t)?ra(n)?e.removeAttributeNS(ea,na(t)):e.setAttributeNS(ea,t,n):ra(n)?e.removeAttribute(t):e.setAttribute(t,n)}function en(n,r){var i=r.elm,o=r.data,a=n.data;if(!(e(o.staticClass)&&e(o.class)&&(e(a)||e(a.staticClass)&&e(a.class)))){var s=wt(r),c=i._transitionClasses;t(c)&&(s=At(s,Ot(c))),s!==i._prevClass&&(i.setAttribute("class",s),i._prevClass=s)}}function tn(e){function t(){(a||(a=[])).push(e.slice(v,i).trim()),v=i+1}var n,r,i,o,a,s=!1,c=!1,u=!1,l=!1,f=0,p=0,d=0,v=0;for(i=0;i<e.length;i++)if(r=n,n=e.charCodeAt(i),s)39===n&&92!==r&&(s=!1);else if(c)34===n&&92!==r&&(c=!1);else if(u)96===n&&92!==r&&(u=!1);else if(l)47===n&&92!==r&&(l=!1);else if(124!==n||124===e.charCodeAt(i+1)||124===e.charCodeAt(i-1)||f||p||d){switch(n){case 34:c=!0;break;case 39:s=!0;break;case 96:u=!0;break;case 40:d++;break;case 41:d--;break;case 91:p++;break;case 93:p--;break;case 123:f++;break;case 125:f--}if(47===n){for(var h=i-1,m=void 0;h>=0&&" "===(m=e.charAt(h));h--);m&&_a.test(m)||(l=!0)}}else void 0===o?(v=i+1,o=e.slice(0,i).trim()):t();if(void 0===o?o=e.slice(0,i).trim():0!==v&&t(),a)for(i=0;i<a.length;i++)o=nn(o,a[i]);return o}function nn(e,t){var n=t.indexOf("(");return n<0?'_f("'+t+'")('+e+")":'_f("'+t.slice(0,n)+'")('+e+","+t.slice(n+1)}function rn(e){console.error("[Vue compiler]: "+e)}function on(e,t){return e?e.map(function(e){return e[t]}).filter(function(e){return e}):[]}function an(e,t,n){(e.props||(e.props=[])).push({name:t,value:n})}function sn(e,t,n){(e.attrs||(e.attrs=[])).push({name:t,value:n})}function cn(e,t,n,r,i,o){(e.directives||(e.directives=[])).push({name:t,rawName:n,value:r,arg:i,modifiers:o})}function un(e,t,n,r,i,o){r&&r.capture&&(delete r.capture,t="!"+t),r&&r.once&&(delete r.once,t="~"+t),r&&r.passive&&(delete r.passive,t="&"+t);var a;r&&r.native?(delete r.native,a=e.nativeEvents||(e.nativeEvents={})):a=e.events||(e.events={});var s={value:n,modifiers:r},c=a[t];Array.isArray(c)?i?c.unshift(s):c.push(s):a[t]=c?i?[s,c]:[c,s]:s}function ln(e,t,n){var r=fn(e,":"+t)||fn(e,"v-bind:"+t);if(null!=r)return tn(r);if(!1!==n){var i=fn(e,t);if(null!=i)return JSON.stringify(i)}}function fn(e,t){var n;if(null!=(n=e.attrsMap[t]))for(var r=e.attrsList,i=0,o=r.length;i<o;i++)if(r[i].name===t){r.splice(i,1);break}return n}function pn(e,t,n){var r=n||{},i=r.number,o=r.trim,a="$$v";o&&(a="(typeof $$v === 'string'? $$v.trim(): $$v)"),i&&(a="_n("+a+")");var s=dn(t,a);e.model={value:"("+t+")",expression:'"'+t+'"',callback:"function ($$v) {"+s+"}"}}function dn(e,t){var n=vn(e);return null===n.idx?e+"="+t:"var $$exp = "+n.exp+", $$idx = "+n.idx+";if (!Array.isArray($$exp)){"+e+"="+t+"}else{$$exp.splice($$idx, 1, "+t+")}"}function vn(e){if(Ho=e,Bo=Ho.length,Vo=zo=Jo=0,e.indexOf("[")<0||e.lastIndexOf("]")<Bo-1)return{exp:e,idx:null};for(;!mn();)Uo=hn(),gn(Uo)?_n(Uo):91===Uo&&yn(Uo);return{exp:e.substring(0,zo),idx:e.substring(zo+1,Jo)}}function hn(){return Ho.charCodeAt(++Vo)}function mn(){return Vo>=Bo}function gn(e){return 34===e||39===e}function yn(e){var t=1;for(zo=Vo;!mn();)if(e=hn(),gn(e))_n(e);else if(91===e&&t++,93===e&&t--,0===t){Jo=Vo;break}}function _n(e){for(var t=e;!mn()&&(e=hn())!==t;);}function bn(e,t,n){Ko=n;var r=t.value,i=t.modifiers,o=e.tag,a=e.attrsMap.type;if("select"===o)wn(e,r,i);else if("input"===o&&"checkbox"===a)$n(e,r,i);else if("input"===o&&"radio"===a)xn(e,r,i);else if("input"===o||"textarea"===o)Cn(e,r,i);else if(!Pi.isReservedTag(o))return pn(e,r,i),!1;return!0}function $n(e,t,n){var r=n&&n.number,i=ln(e,"value")||"null",o=ln(e,"true-value")||"true",a=ln(e,"false-value")||"false";an(e,"checked","Array.isArray("+t+")?_i("+t+","+i+")>-1"+("true"===o?":("+t+")":":_q("+t+","+o+")")),un(e,$a,"var $$a="+t+",$$el=$event.target,$$c=$$el.checked?("+o+"):("+a+");if(Array.isArray($$a)){var $$v="+(r?"_n("+i+")":i)+",$$i=_i($$a,$$v);if($$c){$$i<0&&("+t+"=$$a.concat($$v))}else{$$i>-1&&("+t+"=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}}else{"+dn(t,"$$c")+"}",null,!0)}function xn(e,t,n){var r=n&&n.number,i=ln(e,"value")||"null";i=r?"_n("+i+")":i,an(e,"checked","_q("+t+","+i+")"),un(e,$a,dn(t,i),null,!0)}function wn(e,t,n){var r=n&&n.number,i='Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return '+(r?"_n(val)":"val")+"})",o="var $$selectedVal = "+i+";";o=o+" "+dn(t,"$event.target.multiple ? $$selectedVal : $$selectedVal[0]"),un(e,"change",o,null,!0)}function Cn(e,t,n){var r=e.attrsMap.type,i=n||{},o=i.lazy,a=i.number,s=i.trim,c=!o&&"range"!==r,u=o?"change":"range"===r?ba:"input",l="$event.target.value";s&&(l="$event.target.value.trim()"),a&&(l="_n("+l+")");var f=dn(t,l);c&&(f="if($event.target.composing)return;"+f),an(e,"value","("+t+")"),un(e,u,f,null,!0),(s||a||"number"===r)&&un(e,"blur","$forceUpdate()")}function kn(e){var n;t(e[ba])&&(n=zi?"change":"input",e[n]=[].concat(e[ba],e[n]||[]),delete e[ba]),t(e[$a])&&(n=Zi?"click":"change",e[n]=[].concat(e[$a],e[n]||[]),delete e[$a])}function An(e,t,n,r,i){if(n){var o=t,a=qo;t=function(n){null!==(1===arguments.length?o(n):o.apply(null,arguments))&&On(e,t,r,a)}}qo.addEventListener(e,t,Gi?{capture:r,passive:i}:r)}function On(e,t,n,r){(r||qo).removeEventListener(e,t,n)}function Sn(t,n){if(!e(t.data.on)||!e(n.data.on)){var r=n.data.on||{},i=t.data.on||{};qo=n.elm,kn(r),G(r,i,An,On,n.context)}}function Tn(n,r){if(!e(n.data.domProps)||!e(r.data.domProps)){var i,o,a=r.elm,s=n.data.domProps||{},c=r.data.domProps||{};t(c.__ob__)&&(c=r.data.domProps=h({},c));for(i in s)e(c[i])&&(a[i]="");for(i in c)if(o=c[i],"textContent"!==i&&"innerHTML"!==i||(r.children&&(r.children.length=0),o!==s[i]))if("value"===i){a._value=o;var u=null==o?"":String(o);En(a,r,u)&&(a.value=u)}else a[i]=o}}function En(e,t,n){return!e.composing&&("option"===t.tag||jn(e,n)||Nn(e,n))}function jn(e,t){return document.activeElement!==e&&e.value!==t}function Nn(e,n){var r=e.value,i=e._vModifiers;return t(i)&&i.number||"number"===e.type?c(r)!==c(n):t(i)&&i.trim?r.trim()!==n.trim():r!==n}function Ln(e){var t=In(e.style);return e.staticStyle?h(e.staticStyle,t):t}function In(e){return Array.isArray(e)?m(e):"string"==typeof e?Ca(e):e}function Dn(e,t){var n,r={};if(t)for(var i=e;i.componentInstance;)i=i.componentInstance._vnode,i.data&&(n=Ln(i.data))&&h(r,n);(n=Ln(e.data))&&h(r,n);for(var o=e;o=o.parent;)o.data&&(n=Ln(o.data))&&h(r,n);return r}function Mn(n,r){var i=r.data,o=n.data;if(!(e(i.staticStyle)&&e(i.style)&&e(o.staticStyle)&&e(o.style))){var a,s,c=r.elm,u=o.staticStyle,l=o.normalizedStyle||o.style||{},f=u||l,p=In(r.data.style)||{};r.data.normalizedStyle=t(p.__ob__)?h({},p):p;var d=Dn(r,!0);for(s in f)e(d[s])&&Oa(c,s,"");for(s in d)(a=d[s])!==f[s]&&Oa(c,s,null==a?"":a)}}function Pn(e,t){if(t&&(t=t.trim()))if(e.classList)t.indexOf(" ")>-1?t.split(/\s+/).forEach(function(t){return e.classList.add(t)}):e.classList.add(t);else{var n=" "+(e.getAttribute("class")||"")+" ";n.indexOf(" "+t+" ")<0&&e.setAttribute("class",(n+t).trim())}}function Rn(e,t){if(t&&(t=t.trim()))if(e.classList)t.indexOf(" ")>-1?t.split(/\s+/).forEach(function(t){return e.classList.remove(t)}):e.classList.remove(t);else{for(var n=" "+(e.getAttribute("class")||"")+" ",r=" "+t+" ";n.indexOf(r)>=0;)n=n.replace(r," ");e.setAttribute("class",n.trim())}}function Fn(e){if(e){if("object"==typeof e){var t={};return!1!==e.css&&h(t,ja(e.name||"v")),h(t,e),t}return"string"==typeof e?ja(e):void 0}}function Bn(e){Fa(function(){Fa(e)})}function Hn(e,t){(e._transitionClasses||(e._transitionClasses=[])).push(t),Pn(e,t)}function Un(e,t){e._transitionClasses&&l(e._transitionClasses,t),Rn(e,t)}function Vn(e,t,n){var r=zn(e,t),i=r.type,o=r.timeout,a=r.propCount;if(!i)return n();var s=i===La?Ma:Ra,c=0,u=function(){e.removeEventListener(s,l),n()},l=function(t){t.target===e&&++c>=a&&u()};setTimeout(function(){c<a&&u()},o+1),e.addEventListener(s,l)}function zn(e,t){var n,r=window.getComputedStyle(e),i=r[Da+"Delay"].split(", "),o=r[Da+"Duration"].split(", "),a=Jn(i,o),s=r[Pa+"Delay"].split(", "),c=r[Pa+"Duration"].split(", "),u=Jn(s,c),l=0,f=0;return t===La?a>0&&(n=La,l=a,f=o.length):t===Ia?u>0&&(n=Ia,l=u,f=c.length):(l=Math.max(a,u),n=l>0?a>u?La:Ia:null,f=n?n===La?o.length:c.length:0),{type:n,timeout:l,propCount:f,hasTransform:n===La&&Ba.test(r[Da+"Property"])}}function Jn(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max.apply(null,t.map(function(t,n){return Kn(t)+Kn(e[n])}))}function Kn(e){return 1e3*Number(e.slice(0,-1))}function qn(n,r){var o=n.elm;t(o._leaveCb)&&(o._leaveCb.cancelled=!0,o._leaveCb());var a=Fn(n.data.transition);if(!e(a)&&!t(o._enterCb)&&1===o.nodeType){
for(var s=a,u=s.css,l=s.type,f=s.enterClass,p=s.enterToClass,d=s.enterActiveClass,v=s.appearClass,h=s.appearToClass,m=s.appearActiveClass,g=s.beforeEnter,y=s.enter,_=s.afterEnter,$=s.enterCancelled,x=s.beforeAppear,w=s.appear,C=s.afterAppear,k=s.appearCancelled,A=s.duration,O=bo,S=bo.$vnode;S&&S.parent;)S=S.parent,O=S.context;var T=!O._isMounted||!n.isRootInsert;if(!T||w||""===w){var E=T&&v?v:f,j=T&&m?m:d,N=T&&h?h:p,L=T?x||g:g,I=T&&"function"==typeof w?w:y,D=T?C||_:_,M=T?k||$:$,P=c(i(A)?A.enter:A),R=!1!==u&&!Ji,F=Gn(I),B=o._enterCb=b(function(){R&&(Un(o,N),Un(o,j)),B.cancelled?(R&&Un(o,E),M&&M(o)):D&&D(o),o._enterCb=null});n.data.show||Y(n.data.hook||(n.data.hook={}),"insert",function(){var e=o.parentNode,t=e&&e._pending&&e._pending[n.key];t&&t.tag===n.tag&&t.elm._leaveCb&&t.elm._leaveCb(),I&&I(o,B)}),L&&L(o),R&&(Hn(o,E),Hn(o,j),Bn(function(){Hn(o,N),Un(o,E),B.cancelled||F||(Zn(P)?setTimeout(B,P):Vn(o,l,B))})),n.data.show&&(r&&r(),I&&I(o,B)),R||F||B()}}}function Wn(n,r){function o(){k.cancelled||(n.data.show||((a.parentNode._pending||(a.parentNode._pending={}))[n.key]=n),h&&h(a),x&&(Hn(a,p),Hn(a,v),Bn(function(){Hn(a,d),Un(a,p),k.cancelled||w||(Zn(C)?setTimeout(k,C):Vn(a,f,k))})),m&&m(a,k),x||w||k())}var a=n.elm;t(a._enterCb)&&(a._enterCb.cancelled=!0,a._enterCb());var s=Fn(n.data.transition);if(e(s))return r();if(!t(a._leaveCb)&&1===a.nodeType){var u=s,l=u.css,f=u.type,p=u.leaveClass,d=u.leaveToClass,v=u.leaveActiveClass,h=u.beforeLeave,m=u.leave,g=u.afterLeave,y=u.leaveCancelled,_=u.delayLeave,$=u.duration,x=!1!==l&&!Ji,w=Gn(m),C=c(i($)?$.leave:$),k=a._leaveCb=b(function(){a.parentNode&&a.parentNode._pending&&(a.parentNode._pending[n.key]=null),x&&(Un(a,d),Un(a,v)),k.cancelled?(x&&Un(a,p),y&&y(a)):(r(),g&&g(a)),a._leaveCb=null});_?_(o):o()}}function Zn(e){return"number"==typeof e&&!isNaN(e)}function Gn(n){if(e(n))return!1;var r=n.fns;return t(r)?Gn(Array.isArray(r)?r[0]:r):(n._length||n.length)>1}function Yn(e,t){!0!==t.data.show&&qn(t)}function Qn(e,t,n){var r=t.value,i=e.multiple;if(!i||Array.isArray(r)){for(var o,a,s=0,c=e.options.length;s<c;s++)if(a=e.options[s],i)o=_(r,er(a))>-1,a.selected!==o&&(a.selected=o);else if(y(er(a),r))return void(e.selectedIndex!==s&&(e.selectedIndex=s));i||(e.selectedIndex=-1)}}function Xn(e,t){for(var n=0,r=t.length;n<r;n++)if(y(er(t[n]),e))return!1;return!0}function er(e){return"_value"in e?e._value:e.value}function tr(e){e.target.composing=!0}function nr(e){e.target.composing=!1,rr(e.target,"input")}function rr(e,t){var n=document.createEvent("HTMLEvents");n.initEvent(t,!0,!0),e.dispatchEvent(n)}function ir(e){return!e.componentInstance||e.data&&e.data.transition?e:ir(e.componentInstance._vnode)}function or(e){var t=e&&e.componentOptions;return t&&t.Ctor.options.abstract?or(oe(t.children)):e}function ar(e){var t={},n=e.$options;for(var r in n.propsData)t[r]=e[r];var i=n._parentListeners;for(var o in i)t[Ti(o)]=i[o];return t}function sr(e,t){if(/\d-keep-alive$/.test(t.tag))return e("keep-alive",{props:t.componentOptions.propsData})}function cr(e){for(;e=e.parent;)if(e.data.transition)return!0}function ur(e,t){return t.key===e.key&&t.tag===e.tag}function lr(e){e.elm._moveCb&&e.elm._moveCb(),e.elm._enterCb&&e.elm._enterCb()}function fr(e){e.data.newPos=e.elm.getBoundingClientRect()}function pr(e){var t=e.data.pos,n=e.data.newPos,r=t.left-n.left,i=t.top-n.top;if(r||i){e.data.moved=!0;var o=e.elm.style;o.transform=o.WebkitTransform="translate("+r+"px,"+i+"px)",o.transitionDuration="0s"}}function dr(e){return Xa=Xa||document.createElement("div"),Xa.innerHTML=e,Xa.textContent}function vr(e,t){var n=t?Ms:Ds;return e.replace(n,function(e){return Is[e]})}function hr(e,t){function n(t){l+=t,e=e.substring(t)}function r(e,n,r){var i,s;if(null==n&&(n=l),null==r&&(r=l),e&&(s=e.toLowerCase()),e)for(i=a.length-1;i>=0&&a[i].lowerCasedTag!==s;i--);else i=0;if(i>=0){for(var c=a.length-1;c>=i;c--)t.end&&t.end(a[c].tag,n,r);a.length=i,o=i&&a[i-1].tag}else"br"===s?t.start&&t.start(e,[],!0,n,r):"p"===s&&(t.start&&t.start(e,[],!1,n,r),t.end&&t.end(e,n,r))}for(var i,o,a=[],s=t.expectHTML,c=t.isUnaryTag||Ni,u=t.canBeLeftOpenTag||Ni,l=0;e;){if(i=e,o&&Ns(o)){var f=o.toLowerCase(),p=Ls[f]||(Ls[f]=new RegExp("([\\s\\S]*?)(</"+f+"[^>]*>)","i")),d=0,v=e.replace(p,function(e,n,r){return d=r.length,Ns(f)||"noscript"===f||(n=n.replace(/<!--([\s\S]*?)-->/g,"$1").replace(/<!\[CDATA\[([\s\S]*?)]]>/g,"$1")),t.chars&&t.chars(n),""});l+=e.length-v.length,e=v,r(f,l-d,l)}else{var h=e.indexOf("<");if(0===h){if(fs.test(e)){var m=e.indexOf("--\x3e");if(m>=0){n(m+3);continue}}if(ps.test(e)){var g=e.indexOf("]>");if(g>=0){n(g+2);continue}}var y=e.match(ls);if(y){n(y[0].length);continue}var _=e.match(us);if(_){var b=l;n(_[0].length),r(_[1],b,l);continue}var $=function(){var t=e.match(ss);if(t){var r={tagName:t[1],attrs:[],start:l};n(t[0].length);for(var i,o;!(i=e.match(cs))&&(o=e.match(os));)n(o[0].length),r.attrs.push(o);if(i)return r.unarySlash=i[1],n(i[0].length),r.end=l,r}}();if($){!function(e){var n=e.tagName,i=e.unarySlash;s&&("p"===o&&rs(n)&&r(o),u(n)&&o===n&&r(n));for(var l=c(n)||"html"===n&&"head"===o||!!i,f=e.attrs.length,p=new Array(f),d=0;d<f;d++){var v=e.attrs[d];ds&&-1===v[0].indexOf('""')&&(""===v[3]&&delete v[3],""===v[4]&&delete v[4],""===v[5]&&delete v[5]);var h=v[3]||v[4]||v[5]||"";p[d]={name:v[1],value:vr(h,t.shouldDecodeNewlines)}}l||(a.push({tag:n,lowerCasedTag:n.toLowerCase(),attrs:p}),o=n),t.start&&t.start(n,p,l,e.start,e.end)}($);continue}}var x=void 0,w=void 0,C=void 0;if(h>=0){for(w=e.slice(h);!(us.test(w)||ss.test(w)||fs.test(w)||ps.test(w)||(C=w.indexOf("<",1))<0);)h+=C,w=e.slice(h);x=e.substring(0,h),n(h)}h<0&&(x=e,e=""),t.chars&&x&&t.chars(x)}if(e===i){t.chars&&t.chars(e);break}}r()}function mr(e,t){var n=t?Rs(t):Ps;if(n.test(e)){for(var r,i,o=[],a=n.lastIndex=0;r=n.exec(e);){i=r.index,i>a&&o.push(JSON.stringify(e.slice(a,i)));var s=tn(r[1].trim());o.push("_s("+s+")"),a=i+r[0].length}return a<e.length&&o.push(JSON.stringify(e.slice(a))),o.join("+")}}function gr(e,t){function n(e){e.pre&&(s=!1),_s(e.tag)&&(c=!1)}vs=t.warn||rn,$s=t.getTagNamespace||Ni,bs=t.mustUseProp||Ni,_s=t.isPreTag||Ni,gs=on(t.modules,"preTransformNode"),ms=on(t.modules,"transformNode"),ys=on(t.modules,"postTransformNode"),hs=t.delimiters;var r,i,o=[],a=!1!==t.preserveWhitespace,s=!1,c=!1;return hr(e,{warn:vs,expectHTML:t.expectHTML,isUnaryTag:t.isUnaryTag,canBeLeftOpenTag:t.canBeLeftOpenTag,shouldDecodeNewlines:t.shouldDecodeNewlines,start:function(e,a,u){var l=i&&i.ns||$s(e);zi&&"svg"===l&&(a=Mr(a));var f={type:1,tag:e,attrsList:a,attrsMap:Lr(a),parent:i,children:[]};l&&(f.ns=l),Dr(f)&&!eo()&&(f.forbidden=!0);for(var p=0;p<gs.length;p++)gs[p](f,t);if(s||(yr(f),f.pre&&(s=!0)),_s(f.tag)&&(c=!0),s)_r(f);else{xr(f),wr(f),Or(f),br(f),f.plain=!f.key&&!a.length,$r(f),Sr(f),Tr(f);for(var d=0;d<ms.length;d++)ms[d](f,t);Er(f)}if(r?o.length||r.if&&(f.elseif||f.else)&&Ar(r,{exp:f.elseif,block:f}):r=f,i&&!f.forbidden)if(f.elseif||f.else)Cr(f,i);else if(f.slotScope){i.plain=!1;var v=f.slotTarget||'"default"';(i.scopedSlots||(i.scopedSlots={}))[v]=f}else i.children.push(f),f.parent=i;u?n(f):(i=f,o.push(f));for(var h=0;h<ys.length;h++)ys[h](f,t)},end:function(){var e=o[o.length-1],t=e.children[e.children.length-1];t&&3===t.type&&" "===t.text&&!c&&e.children.pop(),o.length-=1,i=o[o.length-1],n(e)},chars:function(e){if(i&&(!zi||"textarea"!==i.tag||i.attrsMap.placeholder!==e)){var t=i.children;if(e=c||e.trim()?Ir(i)?e:Ks(e):a&&t.length?" ":""){var n;!s&&" "!==e&&(n=mr(e,hs))?t.push({type:2,expression:n,text:e}):" "===e&&t.length&&" "===t[t.length-1].text||t.push({type:3,text:e})}}}}),r}function yr(e){null!=fn(e,"v-pre")&&(e.pre=!0)}function _r(e){var t=e.attrsList.length;if(t)for(var n=e.attrs=new Array(t),r=0;r<t;r++)n[r]={name:e.attrsList[r].name,value:JSON.stringify(e.attrsList[r].value)};else e.pre||(e.plain=!0)}function br(e){var t=ln(e,"key");t&&(e.key=t)}function $r(e){var t=ln(e,"ref");t&&(e.ref=t,e.refInFor=jr(e))}function xr(e){var t;if(t=fn(e,"v-for")){var n=t.match(Hs);if(!n)return;e.for=n[2].trim();var r=n[1].trim(),i=r.match(Us);i?(e.alias=i[1].trim(),e.iterator1=i[2].trim(),i[3]&&(e.iterator2=i[3].trim())):e.alias=r}}function wr(e){var t=fn(e,"v-if");if(t)e.if=t,Ar(e,{exp:t,block:e});else{null!=fn(e,"v-else")&&(e.else=!0);var n=fn(e,"v-else-if");n&&(e.elseif=n)}}function Cr(e,t){var n=kr(t.children);n&&n.if&&Ar(n,{exp:e.elseif,block:e})}function kr(e){for(var t=e.length;t--;){if(1===e[t].type)return e[t];e.pop()}}function Ar(e,t){e.ifConditions||(e.ifConditions=[]),e.ifConditions.push(t)}function Or(e){null!=fn(e,"v-once")&&(e.once=!0)}function Sr(e){if("slot"===e.tag)e.slotName=ln(e,"name");else{var t=ln(e,"slot");t&&(e.slotTarget='""'===t?'"default"':t),"template"===e.tag&&(e.slotScope=fn(e,"scope"))}}function Tr(e){var t;(t=ln(e,"is"))&&(e.component=t),null!=fn(e,"inline-template")&&(e.inlineTemplate=!0)}function Er(e){var t,n,r,i,o,a,s,c=e.attrsList;for(t=0,n=c.length;t<n;t++)if(r=i=c[t].name,o=c[t].value,Bs.test(r))if(e.hasBindings=!0,a=Nr(r),a&&(r=r.replace(Js,"")),zs.test(r))r=r.replace(zs,""),o=tn(o),s=!1,a&&(a.prop&&(s=!0,"innerHtml"===(r=Ti(r))&&(r="innerHTML")),a.camel&&(r=Ti(r)),a.sync&&un(e,"update:"+Ti(r),dn(o,"$event"))),s||bs(e.tag,e.attrsMap.type,r)?an(e,r,o):sn(e,r,o);else if(Fs.test(r))r=r.replace(Fs,""),un(e,r,o,a,!1,vs);else{r=r.replace(Bs,"");var u=r.match(Vs),l=u&&u[1];l&&(r=r.slice(0,-(l.length+1))),cn(e,r,i,o,l,a)}else sn(e,r,JSON.stringify(o))}function jr(e){for(var t=e;t;){if(void 0!==t.for)return!0;t=t.parent}return!1}function Nr(e){var t=e.match(Js);if(t){var n={};return t.forEach(function(e){n[e.slice(1)]=!0}),n}}function Lr(e){for(var t={},n=0,r=e.length;n<r;n++)t[e[n].name]=e[n].value;return t}function Ir(e){return"script"===e.tag||"style"===e.tag}function Dr(e){return"style"===e.tag||"script"===e.tag&&(!e.attrsMap.type||"text/javascript"===e.attrsMap.type)}function Mr(e){for(var t=[],n=0;n<e.length;n++){var r=e[n];qs.test(r.name)||(r.name=r.name.replace(Ws,""),t.push(r))}return t}function Pr(e,t){e&&(xs=Zs(t.staticKeys||""),ws=t.isReservedTag||Ni,Fr(e),Br(e,!1))}function Rr(e){return u("type,tag,attrsList,attrsMap,plain,parent,children,attrs"+(e?","+e:""))}function Fr(e){if(e.static=Ur(e),1===e.type){if(!ws(e.tag)&&"slot"!==e.tag&&null==e.attrsMap["inline-template"])return;for(var t=0,n=e.children.length;t<n;t++){var r=e.children[t];Fr(r),r.static||(e.static=!1)}}}function Br(e,t){if(1===e.type){if((e.static||e.once)&&(e.staticInFor=t),e.static&&e.children.length&&(1!==e.children.length||3!==e.children[0].type))return void(e.staticRoot=!0);if(e.staticRoot=!1,e.children)for(var n=0,r=e.children.length;n<r;n++)Br(e.children[n],t||!!e.for);e.ifConditions&&Hr(e.ifConditions,t)}}function Hr(e,t){for(var n=1,r=e.length;n<r;n++)Br(e[n].block,t)}function Ur(e){return 2!==e.type&&(3===e.type||!(!e.pre&&(e.hasBindings||e.if||e.for||Oi(e.tag)||!ws(e.tag)||Vr(e)||!Object.keys(e).every(xs))))}function Vr(e){for(;e.parent;){if(e=e.parent,"template"!==e.tag)return!1;if(e.for)return!0}return!1}function zr(e,t,n){var r=t?"nativeOn:{":"on:{";for(var i in e){var o=e[i];r+='"'+i+'":'+Jr(i,o)+","}return r.slice(0,-1)+"}"}function Jr(e,t){if(!t)return"function(){}";if(Array.isArray(t))return"["+t.map(function(t){return Jr(e,t)}).join(",")+"]";var n=Ys.test(t.value),r=Gs.test(t.value);if(t.modifiers){var i="",o="",a=[];for(var s in t.modifiers)ec[s]?(o+=ec[s],Qs[s]&&a.push(s)):a.push(s);a.length&&(i+=Kr(a)),o&&(i+=o);return"function($event){"+i+(n?t.value+"($event)":r?"("+t.value+")($event)":t.value)+"}"}return n||r?t.value:"function($event){"+t.value+"}"}function Kr(e){return"if(!('button' in $event)&&"+e.map(qr).join("&&")+")return null;"}function qr(e){var t=parseInt(e,10);if(t)return"$event.keyCode!=="+t;var n=Qs[e];return"_k($event.keyCode,"+JSON.stringify(e)+(n?","+JSON.stringify(n):"")+")"}function Wr(e,t){e.wrapData=function(n){return"_b("+n+",'"+e.tag+"',"+t.value+(t.modifiers&&t.modifiers.prop?",true":"")+")"}}function Zr(e,t){var n=Ts,r=Ts=[],i=Es;Es=0,js=t,Cs=t.warn||rn,ks=on(t.modules,"transformCode"),As=on(t.modules,"genData"),Os=t.directives||{},Ss=t.isReservedTag||Ni;var o=e?Gr(e):'_c("div")';return Ts=n,Es=i,{render:"with(this){return "+o+"}",staticRenderFns:r}}function Gr(e){if(e.staticRoot&&!e.staticProcessed)return Yr(e);if(e.once&&!e.onceProcessed)return Qr(e);if(e.for&&!e.forProcessed)return ti(e);if(e.if&&!e.ifProcessed)return Xr(e);if("template"!==e.tag||e.slotTarget){if("slot"===e.tag)return di(e);var t;if(e.component)t=vi(e.component,e);else{var n=e.plain?void 0:ni(e),r=e.inlineTemplate?null:si(e,!0);t="_c('"+e.tag+"'"+(n?","+n:"")+(r?","+r:"")+")"}for(var i=0;i<ks.length;i++)t=ks[i](e,t);return t}return si(e)||"void 0"}function Yr(e){return e.staticProcessed=!0,Ts.push("with(this){return "+Gr(e)+"}"),"_m("+(Ts.length-1)+(e.staticInFor?",true":"")+")"}function Qr(e){if(e.onceProcessed=!0,e.if&&!e.ifProcessed)return Xr(e);if(e.staticInFor){for(var t="",n=e.parent;n;){if(n.for){t=n.key;break}n=n.parent}return t?"_o("+Gr(e)+","+Es+++(t?","+t:"")+")":Gr(e)}return Yr(e)}function Xr(e){return e.ifProcessed=!0,ei(e.ifConditions.slice())}function ei(e){function t(e){return e.once?Qr(e):Gr(e)}if(!e.length)return"_e()";var n=e.shift();return n.exp?"("+n.exp+")?"+t(n.block)+":"+ei(e):""+t(n.block)}function ti(e){var t=e.for,n=e.alias,r=e.iterator1?","+e.iterator1:"",i=e.iterator2?","+e.iterator2:"";return e.forProcessed=!0,"_l(("+t+"),function("+n+r+i+"){return "+Gr(e)+"})"}function ni(e){var t="{",n=ri(e);n&&(t+=n+","),e.key&&(t+="key:"+e.key+","),e.ref&&(t+="ref:"+e.ref+","),e.refInFor&&(t+="refInFor:true,"),e.pre&&(t+="pre:true,"),e.component&&(t+='tag:"'+e.tag+'",');for(var r=0;r<As.length;r++)t+=As[r](e);if(e.attrs&&(t+="attrs:{"+hi(e.attrs)+"},"),e.props&&(t+="domProps:{"+hi(e.props)+"},"),e.events&&(t+=zr(e.events,!1,Cs)+","),e.nativeEvents&&(t+=zr(e.nativeEvents,!0,Cs)+","),e.slotTarget&&(t+="slot:"+e.slotTarget+","),e.scopedSlots&&(t+=oi(e.scopedSlots)+","),e.model&&(t+="model:{value:"+e.model.value+",callback:"+e.model.callback+",expression:"+e.model.expression+"},"),e.inlineTemplate){var i=ii(e);i&&(t+=i+",")}return t=t.replace(/,$/,"")+"}",e.wrapData&&(t=e.wrapData(t)),t}function ri(e){var t=e.directives;if(t){var n,r,i,o,a="directives:[",s=!1;for(n=0,r=t.length;n<r;n++){i=t[n],o=!0;var c=Os[i.name]||tc[i.name];c&&(o=!!c(e,i,Cs)),o&&(s=!0,a+='{name:"'+i.name+'",rawName:"'+i.rawName+'"'+(i.value?",value:("+i.value+"),expression:"+JSON.stringify(i.value):"")+(i.arg?',arg:"'+i.arg+'"':"")+(i.modifiers?",modifiers:"+JSON.stringify(i.modifiers):"")+"},")}return s?a.slice(0,-1)+"]":void 0}}function ii(e){var t=e.children[0];if(1===t.type){var n=Zr(t,js);return"inlineTemplate:{render:function(){"+n.render+"},staticRenderFns:["+n.staticRenderFns.map(function(e){return"function(){"+e+"}"}).join(",")+"]}"}}function oi(e){return"scopedSlots:_u(["+Object.keys(e).map(function(t){return ai(t,e[t])}).join(",")+"])"}function ai(e,t){return"["+e+",function("+String(t.attrsMap.scope)+"){return "+("template"===t.tag?si(t)||"void 0":Gr(t))+"}]"}function si(e,t){var n=e.children;if(n.length){var r=n[0];if(1===n.length&&r.for&&"template"!==r.tag&&"slot"!==r.tag)return Gr(r);var i=t?ci(n):0;return"["+n.map(fi).join(",")+"]"+(i?","+i:"")}}function ci(e){for(var t=0,n=0;n<e.length;n++){var r=e[n];if(1===r.type){if(ui(r)||r.ifConditions&&r.ifConditions.some(function(e){return ui(e.block)})){t=2;break}(li(r)||r.ifConditions&&r.ifConditions.some(function(e){return li(e.block)}))&&(t=1)}}return t}function ui(e){return void 0!==e.for||"template"===e.tag||"slot"===e.tag}function li(e){return!Ss(e.tag)}function fi(e){return 1===e.type?Gr(e):pi(e)}function pi(e){return"_v("+(2===e.type?e.expression:mi(JSON.stringify(e.text)))+")"}function di(e){var t=e.slotName||'"default"',n=si(e),r="_t("+t+(n?","+n:""),i=e.attrs&&"{"+e.attrs.map(function(e){return Ti(e.name)+":"+e.value}).join(",")+"}",o=e.attrsMap["v-bind"];return!i&&!o||n||(r+=",null"),i&&(r+=","+i),o&&(r+=(i?"":",null")+","+o),r+")"}function vi(e,t){var n=t.inlineTemplate?null:si(t,!0);return"_c("+e+","+ni(t)+(n?","+n:"")+")"}function hi(e){for(var t="",n=0;n<e.length;n++){var r=e[n];t+='"'+r.name+'":'+mi(r.value)+","}return t.slice(0,-1)}function mi(e){return e.replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029")}function gi(e,t){var n=gr(e.trim(),t);Pr(n,t);var r=Zr(n,t);return{ast:n,render:r.render,staticRenderFns:r.staticRenderFns}}function yi(e,t){try{return new Function(e)}catch(n){return t.push({err:n,code:e}),g}}function _i(e,t){var n=(t.warn,fn(e,"class"));n&&(e.staticClass=JSON.stringify(n));var r=ln(e,"class",!1);r&&(e.classBinding=r)}function bi(e){var t="";return e.staticClass&&(t+="staticClass:"+e.staticClass+","),e.classBinding&&(t+="class:"+e.classBinding+","),t}function $i(e,t){var n=(t.warn,fn(e,"style"));n&&(e.staticStyle=JSON.stringify(Ca(n)));var r=ln(e,"style",!1);r&&(e.styleBinding=r)}function xi(e){var t="";return e.staticStyle&&(t+="staticStyle:"+e.staticStyle+","),e.styleBinding&&(t+="style:("+e.styleBinding+"),"),t}function wi(e,t){t.value&&an(e,"textContent","_s("+t.value+")")}function Ci(e,t){t.value&&an(e,"innerHTML","_s("+t.value+")")}function ki(e){if(e.outerHTML)return e.outerHTML;var t=document.createElement("div");return t.appendChild(e.cloneNode(!0)),t.innerHTML}var Ai=Object.prototype.toString,Oi=u("slot,component",!0),Si=Object.prototype.hasOwnProperty,Ti=p(function(e){return e.replace(/-(\w)/g,function(e,t){return t?t.toUpperCase():""})}),Ei=p(function(e){return e.charAt(0).toUpperCase()+e.slice(1)}),ji=p(function(e){return e.replace(/([^-])([A-Z])/g,"$1-$2").replace(/([^-])([A-Z])/g,"$1-$2").toLowerCase()}),Ni=function(){return!1},Li=function(e){return e},Ii="data-server-rendered",Di=["component","directive","filter"],Mi=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated"],Pi={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:Ni,isReservedAttr:Ni,isUnknownElement:Ni,getTagNamespace:g,parsePlatformTagName:Li,mustUseProp:Ni,_lifecycleHooks:Mi},Ri=Object.freeze({}),Fi=/[^\w.$]/,Bi=g,Hi="__proto__"in{},Ui="undefined"!=typeof window,Vi=Ui&&window.navigator.userAgent.toLowerCase(),zi=Vi&&/msie|trident/.test(Vi),Ji=Vi&&Vi.indexOf("msie 9.0")>0,Ki=Vi&&Vi.indexOf("edge/")>0,qi=Vi&&Vi.indexOf("android")>0,Wi=Vi&&/iphone|ipad|ipod|ios/.test(Vi),Zi=Vi&&/chrome\/\d+/.test(Vi)&&!Ki,Gi=!1;if(Ui)try{var Yi={};Object.defineProperty(Yi,"passive",{get:function(){Gi=!0}}),window.addEventListener("test-passive",null,Yi)}catch(e){}var Qi,Xi,eo=function(){return void 0===Qi&&(Qi=!Ui&&"undefined"!=typeof global&&"server"===global.process.env.VUE_ENV),Qi},to=Ui&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__,no="undefined"!=typeof Symbol&&k(Symbol)&&"undefined"!=typeof Reflect&&k(Reflect.ownKeys),ro=function(){function e(){r=!1;var e=n.slice(0);n.length=0;for(var t=0;t<e.length;t++)e[t]()}var t,n=[],r=!1;if("undefined"!=typeof Promise&&k(Promise)){var i=Promise.resolve(),o=function(e){console.error(e)};t=function(){i.then(e).catch(o),Wi&&setTimeout(g)}}else if("undefined"==typeof MutationObserver||!k(MutationObserver)&&"[object MutationObserverConstructor]"!==MutationObserver.toString())t=function(){setTimeout(e,0)};else{var a=1,s=new MutationObserver(e),c=document.createTextNode(String(a));s.observe(c,{characterData:!0}),t=function(){a=(a+1)%2,c.data=String(a)}}return function(e,i){var o;if(n.push(function(){if(e)try{e.call(i)}catch(e){C(e,i,"nextTick")}else o&&o(i)}),r||(r=!0,t()),!e&&"undefined"!=typeof Promise)return new Promise(function(e,t){o=e})}}();Xi="undefined"!=typeof Set&&k(Set)?Set:function(){function e(){this.set=Object.create(null)}return e.prototype.has=function(e){return!0===this.set[e]},e.prototype.add=function(e){this.set[e]=!0},e.prototype.clear=function(){this.set=Object.create(null)},e}();var io=0,oo=function(){this.id=io++,this.subs=[]};oo.prototype.addSub=function(e){this.subs.push(e)},oo.prototype.removeSub=function(e){l(this.subs,e)},oo.prototype.depend=function(){oo.target&&oo.target.addDep(this)},oo.prototype.notify=function(){for(var e=this.subs.slice(),t=0,n=e.length;t<n;t++)e[t].update()},oo.target=null;var ao=[],so=Array.prototype,co=Object.create(so);["push","pop","shift","unshift","splice","sort","reverse"].forEach(function(e){var t=so[e];x(co,e,function(){for(var n=arguments,r=arguments.length,i=new Array(r);r--;)i[r]=n[r];var o,a=t.apply(this,i),s=this.__ob__;switch(e){case"push":case"unshift":o=i;break;case"splice":o=i.slice(2)}return o&&s.observeArray(o),s.dep.notify(),a})});var uo=Object.getOwnPropertyNames(co),lo={shouldConvert:!0,isSettingProps:!1},fo=function(e){if(this.value=e,this.dep=new oo,this.vmCount=0,x(e,"__ob__",this),Array.isArray(e)){(Hi?S:T)(e,co,uo),this.observeArray(e)}else this.walk(e)};fo.prototype.walk=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)j(e,t[n],e[t[n]])},fo.prototype.observeArray=function(e){for(var t=0,n=e.length;t<n;t++)E(e[t])};var po=Pi.optionMergeStrategies;po.data=function(e,t,n){return n?e||t?function(){var r="function"==typeof t?t.call(n):t,i="function"==typeof e?e.call(n):void 0;return r?D(r,i):i}:void 0:t?"function"!=typeof t?e:e?function(){return D(t.call(this),e.call(this))}:t:e},Mi.forEach(function(e){po[e]=M}),Di.forEach(function(e){po[e+"s"]=P}),po.watch=function(e,t){if(!t)return Object.create(e||null);if(!e)return t;var n={};h(n,e);for(var r in t){var i=n[r],o=t[r];i&&!Array.isArray(i)&&(i=[i]),n[r]=i?i.concat(o):[o]}return n},po.props=po.methods=po.computed=function(e,t){if(!t)return Object.create(e||null);if(!e)return t;var n=Object.create(null);return h(n,e),h(n,t),n};var vo=function(e,t){return void 0===t?e:t},ho=function(e,t,n,r,i,o,a){this.tag=e,this.data=t,this.children=n,this.text=r,this.elm=i,this.ns=void 0,this.context=o,this.functionalContext=void 0,this.key=t&&t.key,this.componentOptions=a,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1},mo={child:{}};mo.child.get=function(){return this.componentInstance},Object.defineProperties(ho.prototype,mo);var go,yo=function(){var e=new ho;return e.text="",e.isComment=!0,e},_o=p(function(e){var t="&"===e.charAt(0);e=t?e.slice(1):e;var n="~"===e.charAt(0);e=n?e.slice(1):e;var r="!"===e.charAt(0);return e=r?e.slice(1):e,{name:e,once:n,capture:r,passive:t}}),bo=null,$o=[],xo=[],wo={},Co=!1,ko=!1,Ao=0,Oo=0,So=function(e,t,n,r){this.vm=e,e._watchers.push(this),r?(this.deep=!!r.deep,this.user=!!r.user,this.lazy=!!r.lazy,this.sync=!!r.sync):this.deep=this.user=this.lazy=this.sync=!1,this.cb=n,this.id=++Oo,this.active=!0,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new Xi,this.newDepIds=new Xi,this.expression="","function"==typeof t?this.getter=t:(this.getter=w(t),this.getter||(this.getter=function(){})),this.value=this.lazy?void 0:this.get()};So.prototype.get=function(){A(this);var e,t=this.vm;if(this.user)try{e=this.getter.call(t,t)}catch(e){C(e,t,'getter for watcher "'+this.expression+'"')}else e=this.getter.call(t,t);return this.deep&&Ae(e),O(),this.cleanupDeps(),e},So.prototype.addDep=function(e){var t=e.id;this.newDepIds.has(t)||(this.newDepIds.add(t),this.newDeps.push(e),this.depIds.has(t)||e.addSub(this))},So.prototype.cleanupDeps=function(){for(var e=this,t=this.deps.length;t--;){var n=e.deps[t];e.newDepIds.has(n.id)||n.removeSub(e)}var r=this.depIds;this.depIds=this.newDepIds,this.newDepIds=r,this.newDepIds.clear(),r=this.deps,this.deps=this.newDeps,this.newDeps=r,this.newDeps.length=0},So.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():ke(this)},So.prototype.run=function(){if(this.active){var e=this.get();if(e!==this.value||i(e)||this.deep){var t=this.value;if(this.value=e,this.user)try{this.cb.call(this.vm,e,t)}catch(e){C(e,this.vm,'callback for watcher "'+this.expression+'"')}else this.cb.call(this.vm,e,t)}}},So.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},So.prototype.depend=function(){for(var e=this,t=this.deps.length;t--;)e.deps[t].depend()},So.prototype.teardown=function(){var e=this;if(this.active){this.vm._isBeingDestroyed||l(this.vm._watchers,this);for(var t=this.deps.length;t--;)e.deps[t].removeSub(e);this.active=!1}};var To=new Xi,Eo={enumerable:!0,configurable:!0,get:g,set:g},jo={lazy:!0},No={init:function(e,t,n,r){if(!e.componentInstance||e.componentInstance._isDestroyed){(e.componentInstance=Je(e,bo,n,r)).$mount(t?e.elm:void 0,t)}else if(e.data.keepAlive){var i=e;No.prepatch(i,i)}},prepatch:function(e,t){var n=t.componentOptions;he(t.componentInstance=e.componentInstance,n.propsData,n.listeners,t,n.children)},insert:function(e){var t=e.context,n=e.componentInstance;n._isMounted||(n._isMounted=!0,_e(n,"mounted")),e.data.keepAlive&&(t._isMounted?we(n):ge(n,!0))},destroy:function(e){var t=e.componentInstance;t._isDestroyed||(e.data.keepAlive?ye(t,!0):t.$destroy())}},Lo=Object.keys(No),Io=1,Do=2,Mo=0;!function(e){e.prototype._init=function(e){var t=this;t._uid=Mo++,t._isVue=!0,e&&e._isComponent?ct(t,e):t.$options=B(ut(t.constructor),e||{},t),t._renderProxy=t,t._self=t,de(t),ae(t),st(t),_e(t,"beforeCreate"),Be(t),Te(t),Fe(t),_e(t,"created"),t.$options.el&&t.$mount(t.$options.el)}}(pt),function(e){var t={};t.get=function(){return this._data};var n={};n.get=function(){return this._props},Object.defineProperty(e.prototype,"$data",t),Object.defineProperty(e.prototype,"$props",n),e.prototype.$set=N,e.prototype.$delete=L,e.prototype.$watch=function(e,t,n){var r=this;n=n||{},n.user=!0;var i=new So(r,e,t,n);return n.immediate&&t.call(r,i.value),function(){i.teardown()}}}(pt),function(e){var t=/^hook:/;e.prototype.$on=function(e,n){var r=this,i=this;if(Array.isArray(e))for(var o=0,a=e.length;o<a;o++)r.$on(e[o],n);else(i._events[e]||(i._events[e]=[])).push(n),t.test(e)&&(i._hasHookEvent=!0);return i},e.prototype.$once=function(e,t){function n(){r.$off(e,n),t.apply(r,arguments)}var r=this;return n.fn=t,r.$on(e,n),r},e.prototype.$off=function(e,t){var n=this,r=this;if(!arguments.length)return r._events=Object.create(null),r;if(Array.isArray(e)){for(var i=0,o=e.length;i<o;i++)n.$off(e[i],t);return r}var a=r._events[e];if(!a)return r;if(1===arguments.length)return r._events[e]=null,r;for(var s,c=a.length;c--;)if((s=a[c])===t||s.fn===t){a.splice(c,1);break}return r},e.prototype.$emit=function(e){var t=this,n=t._events[e];if(n){n=n.length>1?v(n):n;for(var r=v(arguments,1),i=0,o=n.length;i<o;i++)n[i].apply(t,r)}return t}}(pt),function(e){e.prototype._update=function(e,t){var n=this;n._isMounted&&_e(n,"beforeUpdate");var r=n.$el,i=n._vnode,o=bo;bo=n,n._vnode=e,n.$el=i?n.__patch__(i,e):n.__patch__(n.$el,e,t,!1,n.$options._parentElm,n.$options._refElm),bo=o,r&&(r.__vue__=null),n.$el&&(n.$el.__vue__=n),n.$vnode&&n.$parent&&n.$vnode===n.$parent._vnode&&(n.$parent.$el=n.$el)},e.prototype.$forceUpdate=function(){var e=this;e._watcher&&e._watcher.update()},e.prototype.$destroy=function(){var e=this;if(!e._isBeingDestroyed){_e(e,"beforeDestroy"),e._isBeingDestroyed=!0;var t=e.$parent;!t||t._isBeingDestroyed||e.$options.abstract||l(t.$children,e),e._watcher&&e._watcher.teardown();for(var n=e._watchers.length;n--;)e._watchers[n].teardown();e._data.__ob__&&e._data.__ob__.vmCount--,e._isDestroyed=!0,e.__patch__(e._vnode,null),_e(e,"destroyed"),e.$off(),e.$el&&(e.$el.__vue__=null),e.$options._parentElm=e.$options._refElm=null}}}(pt),function(e){e.prototype.$nextTick=function(e){return ro(e,this)},e.prototype._render=function(){var e=this,t=e.$options,n=t.render,r=t.staticRenderFns,i=t._parentVnode;if(e._isMounted)for(var o in e.$slots)e.$slots[o]=W(e.$slots[o]);e.$scopedSlots=i&&i.data.scopedSlots||Ri,r&&!e._staticTrees&&(e._staticTrees=[]),e.$vnode=i;var a;try{a=n.call(e._renderProxy,e.$createElement)}catch(t){C(t,e,"render function"),a=e._vnode}return a instanceof ho||(a=yo()),a.parent=i,a},e.prototype._o=it,e.prototype._n=c,e.prototype._s=s,e.prototype._l=Qe,e.prototype._t=Xe,e.prototype._q=y,e.prototype._i=_,e.prototype._m=rt,e.prototype._f=et,e.prototype._k=tt,e.prototype._b=nt,e.prototype._v=K,e.prototype._e=yo,e.prototype._u=pe}(pt);var Po=[String,RegExp],Ro={name:"keep-alive",abstract:!0,props:{include:Po,exclude:Po},created:function(){this.cache=Object.create(null)},destroyed:function(){var e=this;for(var t in e.cache)xt(e.cache[t])},watch:{include:function(e){$t(this.cache,this._vnode,function(t){return bt(e,t)})},exclude:function(e){$t(this.cache,this._vnode,function(t){return!bt(e,t)})}},render:function(){var e=oe(this.$slots.default),t=e&&e.componentOptions;if(t){var n=_t(t);if(n&&(this.include&&!bt(this.include,n)||this.exclude&&bt(this.exclude,n)))return e;var r=null==e.key?t.Ctor.cid+(t.tag?"::"+t.tag:""):e.key;this.cache[r]?e.componentInstance=this.cache[r].componentInstance:this.cache[r]=e,e.data.keepAlive=!0}return e}},Fo={KeepAlive:Ro};!function(e){var t={};t.get=function(){return Pi},Object.defineProperty(e,"config",t),e.util={warn:Bi,extend:h,mergeOptions:B,defineReactive:j},e.set=N,e.delete=L,e.nextTick=ro,e.options=Object.create(null),Di.forEach(function(t){e.options[t+"s"]=Object.create(null)}),e.options._base=e,h(e.options.components,Fo),dt(e),vt(e),ht(e),yt(e)}(pt),Object.defineProperty(pt.prototype,"$isServer",{get:eo}),pt.version="2.3.0";var Bo,Ho,Uo,Vo,zo,Jo,Ko,qo,Wo,Zo=u("style,class"),Go=u("input,textarea,option,select"),Yo=function(e,t,n){return"value"===n&&Go(e)&&"button"!==t||"selected"===n&&"option"===e||"checked"===n&&"input"===e||"muted"===n&&"video"===e},Qo=u("contenteditable,draggable,spellcheck"),Xo=u("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,translate,truespeed,typemustmatch,visible"),ea="http://www.w3.org/1999/xlink",ta=function(e){return":"===e.charAt(5)&&"xlink"===e.slice(0,5)},na=function(e){return ta(e)?e.slice(6,e.length):""},ra=function(e){return null==e||!1===e},ia={svg:"http://www.w3.org/2000/svg",math:"http://www.w3.org/1998/Math/MathML"},oa=u("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template"),aa=u("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view",!0),sa=function(e){return"pre"===e},ca=function(e){return oa(e)||aa(e)},ua=Object.create(null),la=Object.freeze({createElement:jt,createElementNS:Nt,createTextNode:Lt,createComment:It,insertBefore:Dt,removeChild:Mt,appendChild:Pt,parentNode:Rt,nextSibling:Ft,tagName:Bt,setTextContent:Ht,setAttribute:Ut}),fa={create:function(e,t){Vt(t)},update:function(e,t){e.data.ref!==t.data.ref&&(Vt(e,!0),Vt(t))},destroy:function(e){Vt(e,!0)}},pa=new ho("",{},[]),da=["create","activate","update","remove","destroy"],va={create:qt,update:qt,destroy:function(e){qt(e,pa)}},ha=Object.create(null),ma=[fa,va],ga={create:Qt,update:Qt},ya={create:en,update:en},_a=/[\w).+\-_$\]]/,ba="__r",$a="__c",xa={create:Sn,update:Sn},wa={create:Tn,update:Tn},Ca=p(function(e){var t={};return e.split(/;(?![^(]*\))/g).forEach(function(e){if(e){var n=e.split(/:(.+)/)
;n.length>1&&(t[n[0].trim()]=n[1].trim())}}),t}),ka=/^--/,Aa=/\s*!important$/,Oa=function(e,t,n){if(ka.test(t))e.style.setProperty(t,n);else if(Aa.test(n))e.style.setProperty(t,n.replace(Aa,""),"important");else{var r=Ta(t);if(Array.isArray(n))for(var i=0,o=n.length;i<o;i++)e.style[r]=n[i];else e.style[r]=n}},Sa=["Webkit","Moz","ms"],Ta=p(function(e){if(Wo=Wo||document.createElement("div"),"filter"!==(e=Ti(e))&&e in Wo.style)return e;for(var t=e.charAt(0).toUpperCase()+e.slice(1),n=0;n<Sa.length;n++){var r=Sa[n]+t;if(r in Wo.style)return r}}),Ea={create:Mn,update:Mn},ja=p(function(e){return{enterClass:e+"-enter",enterToClass:e+"-enter-to",enterActiveClass:e+"-enter-active",leaveClass:e+"-leave",leaveToClass:e+"-leave-to",leaveActiveClass:e+"-leave-active"}}),Na=Ui&&!Ji,La="transition",Ia="animation",Da="transition",Ma="transitionend",Pa="animation",Ra="animationend";Na&&(void 0===window.ontransitionend&&void 0!==window.onwebkittransitionend&&(Da="WebkitTransition",Ma="webkitTransitionEnd"),void 0===window.onanimationend&&void 0!==window.onwebkitanimationend&&(Pa="WebkitAnimation",Ra="webkitAnimationEnd"));var Fa=Ui&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):setTimeout,Ba=/\b(transform|all)(,|$)/,Ha=Ui?{create:Yn,activate:Yn,remove:function(e,t){!0!==e.data.show?Wn(e,t):t()}}:{},Ua=[ga,ya,xa,wa,Ea,Ha],Va=Ua.concat(ma),za=function(i){function o(e){return new ho(E.tagName(e).toLowerCase(),{},[],void 0,e)}function a(e,t){function n(){0==--n.listeners&&s(e)}return n.listeners=t,n}function s(e){var n=E.parentNode(e);t(n)&&E.removeChild(n,e)}function c(e,r,i,o,a){if(e.isRootInsert=!a,!l(e,r,i,o)){var s=e.data,c=e.children,u=e.tag;t(u)?(e.elm=e.ns?E.createElementNS(e.ns,u):E.createElement(u,e),g(e),v(e,c,r),t(s)&&m(e,r),d(i,e.elm,o)):n(e.isComment)?(e.elm=E.createComment(e.text),d(i,e.elm,o)):(e.elm=E.createTextNode(e.text),d(i,e.elm,o))}}function l(e,r,i,o){var a=e.data;if(t(a)){var s=t(e.componentInstance)&&a.keepAlive;if(t(a=a.hook)&&t(a=a.init)&&a(e,!1,i,o),t(e.componentInstance))return f(e,r),n(s)&&p(e,r,i,o),!0}}function f(e,n){t(e.data.pendingInsert)&&n.push.apply(n,e.data.pendingInsert),e.elm=e.componentInstance.$el,h(e)?(m(e,n),g(e)):(Vt(e),n.push(e))}function p(e,n,r,i){for(var o,a=e;a.componentInstance;)if(a=a.componentInstance._vnode,t(o=a.data)&&t(o=o.transition)){for(o=0;o<S.activate.length;++o)S.activate[o](pa,a);n.push(a);break}d(r,e.elm,i)}function d(e,n,r){t(e)&&(t(r)?r.parentNode===e&&E.insertBefore(e,n,r):E.appendChild(e,n))}function v(e,t,n){if(Array.isArray(t))for(var i=0;i<t.length;++i)c(t[i],n,e.elm,null,!0);else r(e.text)&&E.appendChild(e.elm,E.createTextNode(e.text))}function h(e){for(;e.componentInstance;)e=e.componentInstance._vnode;return t(e.tag)}function m(e,n){for(var r=0;r<S.create.length;++r)S.create[r](pa,e);A=e.data.hook,t(A)&&(t(A.create)&&A.create(pa,e),t(A.insert)&&n.push(e))}function g(e){for(var n,r=e;r;)t(n=r.context)&&t(n=n.$options._scopeId)&&E.setAttribute(e.elm,n,""),r=r.parent;t(n=bo)&&n!==e.context&&t(n=n.$options._scopeId)&&E.setAttribute(e.elm,n,"")}function y(e,t,n,r,i,o){for(;r<=i;++r)c(n[r],o,e,t)}function _(e){var n,r,i=e.data;if(t(i))for(t(n=i.hook)&&t(n=n.destroy)&&n(e),n=0;n<S.destroy.length;++n)S.destroy[n](e);if(t(n=e.children))for(r=0;r<e.children.length;++r)_(e.children[r])}function b(e,n,r,i){for(;r<=i;++r){var o=n[r];t(o)&&(t(o.tag)?($(o),_(o)):s(o.elm))}}function $(e,n){if(t(n)||t(e.data)){var r,i=S.remove.length+1;for(t(n)?n.listeners+=i:n=a(e.elm,i),t(r=e.componentInstance)&&t(r=r._vnode)&&t(r.data)&&$(r,n),r=0;r<S.remove.length;++r)S.remove[r](e,n);t(r=e.data.hook)&&t(r=r.remove)?r(e,n):n()}else s(e.elm)}function x(n,r,i,o,a){for(var s,u,l,f,p=0,d=0,v=r.length-1,h=r[0],m=r[v],g=i.length-1,_=i[0],$=i[g],x=!a;p<=v&&d<=g;)e(h)?h=r[++p]:e(m)?m=r[--v]:zt(h,_)?(w(h,_,o),h=r[++p],_=i[++d]):zt(m,$)?(w(m,$,o),m=r[--v],$=i[--g]):zt(h,$)?(w(h,$,o),x&&E.insertBefore(n,h.elm,E.nextSibling(m.elm)),h=r[++p],$=i[--g]):zt(m,_)?(w(m,_,o),x&&E.insertBefore(n,m.elm,h.elm),m=r[--v],_=i[++d]):(e(s)&&(s=Kt(r,p,v)),u=t(_.key)?s[_.key]:null,e(u)?(c(_,o,n,h.elm),_=i[++d]):(l=r[u],zt(l,_)?(w(l,_,o),r[u]=void 0,x&&E.insertBefore(n,_.elm,h.elm),_=i[++d]):(c(_,o,n,h.elm),_=i[++d])));p>v?(f=e(i[g+1])?null:i[g+1].elm,y(n,f,i,d,g,o)):d>g&&b(n,r,p,v)}function w(r,i,o,a){if(r!==i){if(n(i.isStatic)&&n(r.isStatic)&&i.key===r.key&&(n(i.isCloned)||n(i.isOnce)))return i.elm=r.elm,void(i.componentInstance=r.componentInstance);var s,c=i.data;t(c)&&t(s=c.hook)&&t(s=s.prepatch)&&s(r,i);var u=i.elm=r.elm,l=r.children,f=i.children;if(t(c)&&h(i)){for(s=0;s<S.update.length;++s)S.update[s](r,i);t(s=c.hook)&&t(s=s.update)&&s(r,i)}e(i.text)?t(l)&&t(f)?l!==f&&x(u,l,f,o,a):t(f)?(t(r.text)&&E.setTextContent(u,""),y(u,null,f,0,f.length-1,o)):t(l)?b(u,l,0,l.length-1):t(r.text)&&E.setTextContent(u,""):r.text!==i.text&&E.setTextContent(u,i.text),t(c)&&t(s=c.hook)&&t(s=s.postpatch)&&s(r,i)}}function C(e,r,i){if(n(i)&&t(e.parent))e.parent.data.pendingInsert=r;else for(var o=0;o<r.length;++o)r[o].data.hook.insert(r[o])}function k(e,n,r){n.elm=e;var i=n.tag,o=n.data,a=n.children;if(t(o)&&(t(A=o.hook)&&t(A=A.init)&&A(n,!0),t(A=n.componentInstance)))return f(n,r),!0;if(t(i)){if(t(a))if(e.hasChildNodes()){for(var s=!0,c=e.firstChild,u=0;u<a.length;u++){if(!c||!k(c,a[u],r)){s=!1;break}c=c.nextSibling}if(!s||c)return!1}else v(n,a,r);if(t(o))for(var l in o)if(!j(l)){m(n,r);break}}else e.data!==n.text&&(e.data=n.text);return!0}var A,O,S={},T=i.modules,E=i.nodeOps;for(A=0;A<da.length;++A)for(S[da[A]]=[],O=0;O<T.length;++O)t(T[O][da[A]])&&S[da[A]].push(T[O][da[A]]);var j=u("attrs,style,class,staticClass,staticStyle,key");return function(r,i,a,s,u,l){if(e(i))return void(t(r)&&_(r));var f=!1,p=[];if(e(r))f=!0,c(i,p,u,l);else{var d=t(r.nodeType);if(!d&&zt(r,i))w(r,i,p,s);else{if(d){if(1===r.nodeType&&r.hasAttribute(Ii)&&(r.removeAttribute(Ii),a=!0),n(a)&&k(r,i,p))return C(i,p,!0),r;r=o(r)}var v=r.elm,m=E.parentNode(v);if(c(i,p,v._leaveCb?null:m,E.nextSibling(v)),t(i.parent)){for(var g=i.parent;g;)g.elm=i.elm,g=g.parent;if(h(i))for(var y=0;y<S.create.length;++y)S.create[y](pa,i.parent)}t(m)?b(m,[r],0,0):t(r.tag)&&_(r)}}return C(i,p,f),i.elm}}({nodeOps:la,modules:Va});Ji&&document.addEventListener("selectionchange",function(){var e=document.activeElement;e&&e.vmodel&&rr(e,"input")});var Ja={inserted:function(e,t,n){if("select"===n.tag){var r=function(){Qn(e,t,n.context)};r(),(zi||Ki)&&setTimeout(r,0)}else"textarea"!==n.tag&&"text"!==e.type&&"password"!==e.type||(e._vModifiers=t.modifiers,t.modifiers.lazy||(e.addEventListener("change",nr),qi||(e.addEventListener("compositionstart",tr),e.addEventListener("compositionend",nr)),Ji&&(e.vmodel=!0)))},componentUpdated:function(e,t,n){if("select"===n.tag){Qn(e,t,n.context);(e.multiple?t.value.some(function(t){return Xn(t,e.options)}):t.value!==t.oldValue&&Xn(t.value,e.options))&&rr(e,"change")}}},Ka={bind:function(e,t,n){var r=t.value;n=ir(n);var i=n.data&&n.data.transition,o=e.__vOriginalDisplay="none"===e.style.display?"":e.style.display;r&&i&&!Ji?(n.data.show=!0,qn(n,function(){e.style.display=o})):e.style.display=r?o:"none"},update:function(e,t,n){var r=t.value;r!==t.oldValue&&(n=ir(n),n.data&&n.data.transition&&!Ji?(n.data.show=!0,r?qn(n,function(){e.style.display=e.__vOriginalDisplay}):Wn(n,function(){e.style.display="none"})):e.style.display=r?e.__vOriginalDisplay:"none")},unbind:function(e,t,n,r,i){i||(e.style.display=e.__vOriginalDisplay)}},qa={model:Ja,show:Ka},Wa={name:String,appear:Boolean,css:Boolean,mode:String,type:String,enterClass:String,leaveClass:String,enterToClass:String,leaveToClass:String,enterActiveClass:String,leaveActiveClass:String,appearClass:String,appearActiveClass:String,appearToClass:String,duration:[Number,String,Object]},Za={name:"transition",props:Wa,abstract:!0,render:function(e){var t=this,n=this.$slots.default;if(n&&(n=n.filter(function(e){return e.tag}),n.length)){var i=this.mode,o=n[0];if(cr(this.$vnode))return o;var a=or(o);if(!a)return o;if(this._leaving)return sr(e,o);var s="__transition-"+this._uid+"-";a.key=null==a.key?s+a.tag:r(a.key)?0===String(a.key).indexOf(s)?a.key:s+a.key:a.key;var c=(a.data||(a.data={})).transition=ar(this),u=this._vnode,l=or(u);if(a.data.directives&&a.data.directives.some(function(e){return"show"===e.name})&&(a.data.show=!0),l&&l.data&&!ur(a,l)){var f=l&&(l.data.transition=h({},c));if("out-in"===i)return this._leaving=!0,Y(f,"afterLeave",function(){t._leaving=!1,t.$forceUpdate()}),sr(e,o);if("in-out"===i){var p,d=function(){p()};Y(c,"afterEnter",d),Y(c,"enterCancelled",d),Y(f,"delayLeave",function(e){p=e})}}return o}}},Ga=h({tag:String,moveClass:String},Wa);delete Ga.mode;var Ya={props:Ga,render:function(e){for(var t=this.tag||this.$vnode.data.tag||"span",n=Object.create(null),r=this.prevChildren=this.children,i=this.$slots.default||[],o=this.children=[],a=ar(this),s=0;s<i.length;s++){var c=i[s];c.tag&&null!=c.key&&0!==String(c.key).indexOf("__vlist")&&(o.push(c),n[c.key]=c,(c.data||(c.data={})).transition=a)}if(r){for(var u=[],l=[],f=0;f<r.length;f++){var p=r[f];p.data.transition=a,p.data.pos=p.elm.getBoundingClientRect(),n[p.key]?u.push(p):l.push(p)}this.kept=e(t,null,u),this.removed=l}return e(t,null,o)},beforeUpdate:function(){this.__patch__(this._vnode,this.kept,!1,!0),this._vnode=this.kept},updated:function(){var e=this.prevChildren,t=this.moveClass||(this.name||"v")+"-move";if(e.length&&this.hasMove(e[0].elm,t)){e.forEach(lr),e.forEach(fr),e.forEach(pr);var n=document.body;n.offsetHeight;e.forEach(function(e){if(e.data.moved){var n=e.elm,r=n.style;Hn(n,t),r.transform=r.WebkitTransform=r.transitionDuration="",n.addEventListener(Ma,n._moveCb=function e(r){r&&!/transform$/.test(r.propertyName)||(n.removeEventListener(Ma,e),n._moveCb=null,Un(n,t))})}})}},methods:{hasMove:function(e,t){if(!Na)return!1;if(null!=this._hasMove)return this._hasMove;var n=e.cloneNode();e._transitionClasses&&e._transitionClasses.forEach(function(e){Rn(n,e)}),Pn(n,t),n.style.display="none",this.$el.appendChild(n);var r=zn(n);return this.$el.removeChild(n),this._hasMove=r.hasTransform}}},Qa={Transition:Za,TransitionGroup:Ya};pt.config.mustUseProp=Yo,pt.config.isReservedTag=ca,pt.config.isReservedAttr=Zo,pt.config.getTagNamespace=St,pt.config.isUnknownElement=Tt,h(pt.options.directives,qa),h(pt.options.components,Qa),pt.prototype.__patch__=Ui?za:g,pt.prototype.$mount=function(e,t){return e=e&&Ui?Et(e):void 0,ve(this,e,t)},setTimeout(function(){Pi.devtools&&to&&to.emit("init",pt)},0);var Xa,es=!!Ui&&function(e,t){var n=document.createElement("div");return n.innerHTML='<div a="'+e+'">',n.innerHTML.indexOf(t)>0}("\n","&#10;"),ts=u("area,base,br,col,embed,frame,hr,img,input,isindex,keygen,link,meta,param,source,track,wbr"),ns=u("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source"),rs=u("address,article,aside,base,blockquote,body,caption,col,colgroup,dd,details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,title,tr,track"),is=[/"([^"]*)"+/.source,/'([^']*)'+/.source,/([^\s"'=<>`]+)/.source],os=new RegExp("^\\s*"+/([^\s"'<>\/=]+)/.source+"(?:\\s*("+/(?:=)/.source+")\\s*(?:"+is.join("|")+"))?"),as="[a-zA-Z_][\\w\\-\\.]*",ss=new RegExp("^<((?:"+as+"\\:)?"+as+")"),cs=/^\s*(\/?)>/,us=new RegExp("^<\\/((?:"+as+"\\:)?"+as+")[^>]*>"),ls=/^<!DOCTYPE [^>]+>/i,fs=/^<!--/,ps=/^<!\[/,ds=!1;"x".replace(/x(.)?/g,function(e,t){ds=""===t});var vs,hs,ms,gs,ys,_s,bs,$s,xs,ws,Cs,ks,As,Os,Ss,Ts,Es,js,Ns=u("script,style,textarea",!0),Ls={},Is={"&lt;":"<","&gt;":">","&quot;":'"',"&amp;":"&","&#10;":"\n"},Ds=/&(?:lt|gt|quot|amp);/g,Ms=/&(?:lt|gt|quot|amp|#10);/g,Ps=/\{\{((?:.|\n)+?)\}\}/g,Rs=p(function(e){var t=e[0].replace(/[-.*+?^${}()|[\]\/\\]/g,"\\$&"),n=e[1].replace(/[-.*+?^${}()|[\]\/\\]/g,"\\$&");return new RegExp(t+"((?:.|\\n)+?)"+n,"g")}),Fs=/^@|^v-on:/,Bs=/^v-|^@|^:/,Hs=/(.*?)\s+(?:in|of)\s+(.*)/,Us=/\((\{[^}]*\}|[^,]*),([^,]*)(?:,([^,]*))?\)/,Vs=/:(.*)$/,zs=/^:|^v-bind:/,Js=/\.[^.]+/g,Ks=p(dr),qs=/^xmlns:NS\d+/,Ws=/^NS\d+:/,Zs=p(Rr),Gs=/^\s*([\w$_]+|\([^)]*?\))\s*=>|^function\s*\(/,Ys=/^\s*[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['.*?']|\[".*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*\s*$/,Qs={esc:27,tab:9,enter:13,space:32,up:38,left:37,right:39,down:40,delete:[8,46]},Xs=function(e){return"if("+e+")return null;"},ec={stop:"$event.stopPropagation();",prevent:"$event.preventDefault();",self:Xs("$event.target !== $event.currentTarget"),ctrl:Xs("!$event.ctrlKey"),shift:Xs("!$event.shiftKey"),alt:Xs("!$event.altKey"),meta:Xs("!$event.metaKey"),left:Xs("'button' in $event && $event.button !== 0"),middle:Xs("'button' in $event && $event.button !== 1"),right:Xs("'button' in $event && $event.button !== 2")},tc={bind:Wr,cloak:g},nc={staticKeys:["staticClass"],transformNode:_i,genData:bi},rc={staticKeys:["staticStyle"],transformNode:$i,genData:xi},ic=[nc,rc],oc={model:bn,text:wi,html:Ci},ac={expectHTML:!0,modules:ic,directives:oc,isPreTag:sa,isUnaryTag:ts,mustUseProp:Yo,canBeLeftOpenTag:ns,isReservedTag:ca,getTagNamespace:St,staticKeys:function(e){return e.reduce(function(e,t){return e.concat(t.staticKeys||[])},[]).join(",")}(ic)},sc=function(e){function t(t,n){var r=Object.create(e),i=[],o=[];if(r.warn=function(e,t){(t?o:i).push(e)},n){n.modules&&(r.modules=(e.modules||[]).concat(n.modules)),n.directives&&(r.directives=h(Object.create(e.directives),n.directives));for(var a in n)"modules"!==a&&"directives"!==a&&(r[a]=n[a])}var s=gi(t,r);return s.errors=i,s.tips=o,s}function n(e,n,i){n=n||{};var o=n.delimiters?String(n.delimiters)+e:e;if(r[o])return r[o];var a=t(e,n),s={},c=[];s.render=yi(a.render,c);var u=a.staticRenderFns.length;s.staticRenderFns=new Array(u);for(var l=0;l<u;l++)s.staticRenderFns[l]=yi(a.staticRenderFns[l],c);return r[o]=s}var r=Object.create(null);return{compile:t,compileToFunctions:n}}(ac),cc=sc.compileToFunctions,uc=p(function(e){var t=Et(e);return t&&t.innerHTML}),lc=pt.prototype.$mount;return pt.prototype.$mount=function(e,t){if((e=e&&Et(e))===document.body||e===document.documentElement)return this;var n=this.$options;if(!n.render){var r=n.template;if(r)if("string"==typeof r)"#"===r.charAt(0)&&(r=uc(r));else{if(!r.nodeType)return this;r=r.innerHTML}else e&&(r=ki(e));if(r){var i=cc(r,{shouldDecodeNewlines:es,delimiters:n.delimiters},this),o=i.render,a=i.staticRenderFns;n.render=o,n.staticRenderFns=a}}return lc.call(this,e,t)},pt.compile=cc,pt});;
///<jscompress sourcefile="promise.js" />
; (function () {
    function ok(val) {
        return val
    }
    function ng(e) {
        throw e
    }

    function done(onSuccess) {//添加成功回调
        return this.then(onSuccess, ng)
    }
    function fail(onFail) {//添加出错回调
        return this.then(ok, onFail)
    }
    function defer() {
        var ret = {};
        ret.promise = new this(function (resolve, reject) {
            ret.resolve = resolve
            ret.reject = reject
        });
        return ret
    }
    var Promise = function (executor) {
        this._callbacks = []
        var me = this
        if (typeof this !== "object")
            throw new TypeError("Promises must be constructed via new")
        if (typeof executor !== "function")
            throw new TypeError("not a function")

        executor(function (value) {
            _resolve(me, value)
        }, function (reason) {
            _reject(me, reason)
        })
    }
    function fireCallbacks(promise, fn) {
        if (typeof promise.async === "boolean") {
            var isAsync = promise.async
        } else {
            isAsync = promise.async = true
        }
        if (isAsync) {
            window.setTimeout(fn, 0)
        } else {
            fn()
        }
    }
//返回一个已经处于`resolved`状态的Promise对象
    Promise.resolve = function (value) {
        return new Promise(function (resolve) {
            resolve(value)
        })
    }
//返回一个已经处于`rejected`状态的Promise对象
    Promise.reject = function (reason) {
        return new Promise(function (resolve, reject) {
            reject(reason)
        })
    }

    Promise.prototype = {
//一个Promise对象一共有3个状态：
//- `pending`：还处在等待状态，并没有明确最终结果
//- `resolved`：任务已经完成，处在成功状态
//- `rejected`：任务已经完成，处在失败状态
        constructor: Promise,
        _state: "pending",
        _fired: false, //判定是否已经被触发
        _fire: function (onSuccess, onFail) {
            if (this._state === "rejected") {
                if (typeof onFail === "function") {
                    onFail(this._value)
                } else {
                    throw this._value
                }
            } else {
                if (typeof onSuccess === "function") {
                    onSuccess(this._value)
                }
            }
        },
        _then: function (onSuccess, onFail) {
            if (this._fired) {//在已有Promise上添加回调
                var me = this
                fireCallbacks(me, function () {
                    me._fire(onSuccess, onFail)
                });
            } else {
                this._callbacks.push({onSuccess: onSuccess, onFail: onFail})
            }
        },
        then: function (onSuccess, onFail) {
            onSuccess = typeof onSuccess === "function" ? onSuccess : ok
            onFail = typeof onFail === "function" ? onFail : ng
            var me = this//在新的Promise上添加回调
            var nextPromise = new Promise(function (resolve, reject) {
                me._then(function (value) {
                    try {
                        value = onSuccess(value)
                    } catch (e) {
                        // https://promisesaplus.com/#point-55
                        reject(e)
                        return
                    }
                    resolve(value)
                }, function (value) {
                    try {
                        value = onFail(value)
                    } catch (e) {
                        reject(e)
                        return
                    }
                    resolve(value)
                })
            })
            for (var i in me) {
                if (!personal[i]) {
                    nextPromise[i] = me[i]
                }
            }
            return nextPromise
        },
        "done": done,
        "catch": fail,
        "fail": fail
    }
    var personal = {
        _state: 1,
        _fired: 1,
        _value: 1,
        _callbacks: 1
    }
    function _resolve(promise, value) {//触发成功回调
        if (promise._state !== "pending")
            return;
        if (value && typeof value.then === "function") {
//thenable对象使用then，Promise实例使用_then
            var method = value instanceof Promise ? "_then" : "then"
            value[method](function (val) {
                _transmit(promise, val, true)
            }, function (reason) {
                _transmit(promise, reason, false)
            });
        } else {
            _transmit(promise, value, true);
        }
    }
    function _reject(promise, value) {//触发失败回调
        if (promise._state !== "pending")
            return
        _transmit(promise, value, false)
    }
//改变Promise的_fired值，并保持用户传参，触发所有回调
    function _transmit(promise, value, isResolved) {
        promise._fired = true;
        promise._value = value;
        promise._state = isResolved ? "fulfilled" : "rejected"
        fireCallbacks(promise, function () {
            promise._callbacks.forEach(function (data) {
                promise._fire(data.onSuccess, data.onFail);
            })
        })
    }
    function _some(any, iterable) {
        iterable = Array.isArray(iterable) ? iterable : []
        var n = 0, result = [], end
        return new Promise(function (resolve, reject) {
            // 空数组直接resolve
            if (!iterable.length)
                resolve(result)
            function loop(a, index) {
                a.then(function (ret) {
                    if (!end) {
                        result[index] = ret//保证回调的顺序
                        n++
                        if (any || n >= iterable.length) {
                            resolve(any ? ret : result)
                            end = true
                        }
                    }
                }, function (e) {
                    end = true
                    reject(e)
                })
            }
            for (var i = 0, l = iterable.length; i < l; i++) {
                loop(iterable[i], i)
            }
        })
    }

    Promise.all = function (iterable) {
        return _some(false, iterable)
    }
    Promise.race = function (iterable) {
        return _some(true, iterable)
    }
    Promise.defer = defer

    var nativePromise = window.Promise
    if (/native code/.test(nativePromise)) {
        nativePromise.prototype.done = done
        nativePromise.prototype.fail = fail
        if (!nativePromise.defer) { //chrome实现的私有方法
            nativePromise.defer = defer
        }
    }
    return window.Promise = nativePromise || Promise

})() ;
//https://github.com/ecomfe/er/blob/master/src/Deferred.js
//http://jser.info/post/77696682011/es6-promises
;
///<jscompress sourcefile="utils.js" />
;(function() {
	
	window.__lazyimage = "data:image/gif;base64,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" ;
    window.__lazyimage_small = "data:image/jpg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAA8AAD/4QMraHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjMtYzAxMSA2Ni4xNDU2NjEsIDIwMTIvMDIvMDYtMTQ6NTY6MjcgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDUzYgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjRBNjgwOENGNTlGMzExRTZCMUMwRUZEMERDRjdBMEVDIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjRBNjgwOEQwNTlGMzExRTZCMUMwRUZEMERDRjdBMEVDIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NEE2ODA4Q0Q1OUYzMTFFNkIxQzBFRkQwRENGN0EwRUMiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NEE2ODA4Q0U1OUYzMTFFNkIxQzBFRkQwRENGN0EwRUMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7/7gAOQWRvYmUAZMAAAAAB/9sAhAAGBAQEBQQGBQUGCQYFBgkLCAYGCAsMCgoLCgoMEAwMDAwMDBAMDg8QDw4MExMUFBMTHBsbGxwfHx8fHx8fHx8fAQcHBw0MDRgQEBgaFREVGh8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx//wAARCABkAGQDAREAAhEBAxEB/8QAfQABAAMBAQEBAAAAAAAAAAAAAAQFBgIDAQgBAQEAAAAAAAAAAAAAAAAAAAABEAABAwMBBQUFBAsBAAAAAAABAAIDEQQFITFRYRIiQXGREwahscEyUoFyMxTw0UJikrLCI0MkFSURAQEBAAMAAAAAAAAAAAAAAAARAUFxkf/aAAwDAQACEQMRAD8A/VKAgICAgICAgICAgICAgICAgICAgICAgICAgICAgEgCp0AQVN56it45PJtWG5mOgDPlr3itfsQeIl9UXHUxjLdp1AdSvt5kWOnQ+qW6ieJ/CjR/SEHH/Zylof8A0LT+32yx7PiESLWzv7W8j54Hh1PmbscO8IJCAgICAgIBIAqdAEGcvcg7J3RtIZmwWbfxZXEDmHCu3gEWJYu8LibcCAtkkd9BDnu7z2IKu49UZCRx8kMhb2acx8T+pBxBnc3JJyxu8530BgPuogsLT1Qwu8q+iDNeUyM6m/aNUI5vrSzjf+dxlzHFO3qMQeA1w4a+xCLPE5SO/g5vlmZpIz4jgUROQEBAQEFR6lvjBaCBhpJPUHgwbfFBkkCiCficTLkJTryQM/Ef8BxRUvM3UFq042xaI2Af7DxtcfpJ96FUqIUG5BLxd66zvGTA9FeWQb2nag3IIIBGoOoKAgICAgyPqaUvyZZ2Rta0DvHN8UEGxfA25a24FYJOiTgD+0O46oua9clibmxdVw8yE/JMNh3V3FCNTbxMxuJ2CsUZe/i+lT7UOWKc9z3Oe81c4lzjxOpRH1jHveGMaXPdo1oFSUEi8sjaNjjlP+y8cz4xqGN7AeJRUVEbjDymXGW7zqeXlJ+6eX4IJiAgICDHeogRl5uIZT+EIKxBoMJnI2xizvT0DSOR2op9LkVf3VvHdWz4HkhkgoS3bREVbPSuPBq58jhuqB7gil1dYrDxuZbRtN0Ro0anvc7bRBl5ZZJpXSyO5pHmrnHeiOEG1wAIxFvXc72uKCegICAgzXqu1LZorkDpeORx4jUexBRFjwKlpA30NEHKDW+n8i26tPyz3UuIW8vEt2Bw7kVR32Ry7JpLea4eCwlpDaNqOw9IG0IK7j2naUR9AJNACTuGqDpsUjntYGnmcaNBFKk6IN5awCC2ihH+Nob4BB6oCAgII9/Zx3lq+B+nMOl25w2FBWYm8pzYq/aBKwFjObY9u7wRVblsBPaudLbtMlttoNXM7944oKqKWSKRskTi2Rpq1w2hETb6/iv42yTN8u8YKF7R0yDjuKKi29tPcyCKBhkeewdneexEjT2Fha4e1fc3LgZSOt2791qK88XDNkL05O4byxN6baM9lO39O1EXiAgICAgIIOTxMF/GObomb+HKNo7+CCvZk8njSIshEZ4Ro24ZtpxOw/aivR1x6aveqTyw87eYcjvHRRcfPyvpaPqLojTe8u9lShNfX5/HwN8mwhMr9jWRt5W18KlVHMOLvshM24yjuWNurLZunju96FXbWta0NaAGgUAGwBEfUBAQEBAQEAgEUIqDtBQQ5cPjJTV9u2p7W1b/ACkIPNuAxINfIr3veR7XIu714lwWttAKQxNj+6AER6oCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIP/9k=" ;
    
	String.prototype.startWith=function(str){     
	  var reg=new RegExp("^"+str);     
	  return reg.test(this);        
	}  
	String.prototype.endWith=function(str){     
	  var reg=new RegExp(str+"$");     
	  return reg.test(this);        
	}
	function CanvasProgress(canvas, color) {
		var _2d = canvas.getContext('2d') ;
		var _center_x = 0 ;
		var _center_y = 0 ;
		var _v = 0 ;
		var _rad = Math.PI * 2 / 100 ;
		function _m_init() {
			_center_x = canvas.width / 2 ;
			_center_y = canvas.height / 2 ;
		}
		this.m_to = function(v) {
			_v = v ;
			_2d.clearRect(0, 0, canvas.width, canvas.height) ;
			_2d.save() ;
            _2d.strokeStyle = color ; //设置描边样式
            _2d.lineWidth = 2 ; //设置线宽
            _2d.beginPath() ; //路径开始
            _2d.arc(_center_x, _center_y, canvas.width / 2 - _2d.lineWidth , -Math.PI / 2, -Math.PI / 2 + v * _rad, false) ; //用于绘制圆弧context.arc(x坐标，y坐标，半径，起始角度，终止角度，顺时针/逆时针)
            _2d.stroke() ; //绘制
            _2d.closePath() ; //路径结束
            _2d.restore() ;
		}
		this.m_full = function() {
			var _self = this ;
			var _copy_v = _v ;
			return new Promise(function(next) {
				(function drawFrame() {
	                var _raf = window.requestAnimationFrame(drawFrame, canvas) ;
	                _copy_v += 4 ;
	                _copy_v = _copy_v >= 100 ? 100 : _copy_v ;
	                if(_copy_v >= 100) {
	                	cancelAnimationFrame(_raf) ;
	                	next() ;
	                } else {
	                	_self.m_to(_copy_v) ;
	                }
	            }()) ;
            }) ;
		}
		this.m_reset = function() {
			var _self = this ;
			var _copy_v = _v ;
			return new Promise(function(next) {
				(function drawFrame() {
	                var _raf = window.requestAnimationFrame(drawFrame, canvas) ;
	                _copy_v-= 4 ;
	                _copy_v = _copy_v <= 0 ? 0 : _copy_v ;
	                if(_copy_v <= 0) {
	                	cancelAnimationFrame(_raf) ;
	                	next() ;
	                } else {
	                	_self.m_to(_copy_v) ;
	                }
	            }()) ;
            }) ;
		}
		_m_init() ;
	}
	window.CanvasProgress = CanvasProgress ;
	
	function heredoc(fn) {
        return fn.toString()
            .replace(/^[^\/]+\/\*!?\s?/, '')
            .replace(/\*\/[^\/]+$/, '')
    }

    
    window.m_create_object_url = function(buffer) {
		var _blob = new Blob([buffer], {type: "application/octet-binary"}) ;
		var _url = URL.createObjectURL(_blob) ;
		var _image = new Image() ;
		_image.src = _url ;
		return _url ;
	}
    window.requestAnimFrame = (function(){
	  return  window.requestAnimationFrame       ||
	          window.webkitRequestAnimationFrame ||
	          window.mozRequestAnimationFrame    ||
	          function( callback ){
	            window.setTimeout(callback, 1000 / 60);
	          };
	})() ;

    function m_shake(callback) {
    	var _shake = 4000 ;
      	var _last_update = 0 ;
      	var _count = 0 ;
      	var _x = 0 ;
      	var _y = 0 ;
      	var _z = 0 ;
      	var _last_x = 0 ;
      	var _last_y = 0 ;
      	var _last_z = 0 ;
        if(window.DeviceMotionEvent) {
       		window.addEventListener("devicemotion", function(ev) {
       			var _acceleration = ev.accelerationIncludingGravity ;
                var _curr_time = new Date().valueOf() ;
                var _diff_time = _curr_time - _last_update ;

                if(_diff_time > 100) {
                   _last_update = _curr_time ; 
                   _x = _acceleration.x ;
                   _y = _acceleration.y ;
                   _z = _acceleration.z ;

                   var _speed = Math.abs(_x + _y + _z - _last_x - _last_y - _last_z) / _diff_time * 15000 ;
                   if(_speed > _shake) {
                   		if($.isFunction(callback)) {
                   			callback() ;
                   		}
                   }
                   _last_x = _x ;  
                   _last_y = _y ;  
                   _last_z = _z ;  
                } 
       		}, false) ;
        } else {
       		
        }
    }

    window.m_shake = m_shake ;
    window.heredoc = heredoc ;

    String.prototype.zh_cn_number = function() { // 中文数字
    	var _text = this.toString() ;
    	_text = _text.replace("1", "一")
    		 .replace("2", "二")
    		 .replace("3", "三")
    		 .replace("4", "四")
    		 .replace("5", "五")
    		 .replace("6", "六")
    		 .replace("7", "七")
    		 .replace("8", "八")
    		 .replace("9", "九")
    		 .replace("10", "十") ;

    	return _text ;
    }
    Date.prototype.diff = function(format) {
    	var _time = this.getTime() ;
    	var _days = Math.floor(_time / (24*3600*1000)) ;
		//计算出小时数
		var _leave1 = _time % ( 24 * 3600 * 1000) ;    //计算天数后剩余的毫秒数
		var _hours = Math.floor(_leave1 / (3600 * 1000)) ;
		//计算相差分钟数
		var _leave2 = _leave1 % (3600 * 1000) ;       //计算小时数后剩余的毫秒数
		var _minutes = Math.floor(_leave2 / (60 * 1000)) ;
		 
		//计算相差秒数
		var _leave3 = _leave2 % (60 * 1000) ;      //计算分钟数后剩余的毫秒数
		var _seconds = Math.round(_leave3 / 1000) ;

		return format.replace("days", _days)
					.replace("hours", _hours)
					.replace("minutes", _minutes)
					.replace("seconds", _seconds)
					.replace("ms", _leave3) ;
    }

	Date.prototype.format = function (formatStr) {
	    var str = formatStr;
	    var Week = ['日', '一', '二', '三', '四', '五', '六'];
	    str = str.replace(/yyyy|YYYY/, this.getFullYear());
	    str = str.replace(/yy|YY/, (this.getYear() % 100) > 9 ? (this.getYear() % 100).toString() : '0' + (this.getYear() % 100));
	    var month = this.getMonth() + 1;
	    str = str.replace(/MM/, month > 9 ? month.toString() : '0' + month);
	    str = str.replace(/M/g, month);
	    str = str.replace(/w|W/g, Week[this.getDay()]);
	    str = str.replace(/dd|DD/, this.getDate() > 9 ? this.getDate().toString() : '0' + this.getDate());
	    str = str.replace(/d|D/g, this.getDate());
	    str = str.replace(/hh|HH/, this.getHours() > 9 ? this.getHours().toString() : '0' + this.getHours());
	    str = str.replace(/h|H/g, this.getHours());
	    str = str.replace(/mm/, this.getMinutes() > 9 ? this.getMinutes().toString() : '0' + this.getMinutes());
	    str = str.replace(/m/g, this.getMinutes());
	    str = str.replace(/ss|SS/, this.getSeconds() > 9 ? this.getSeconds().toString() : '0' + this.getSeconds());
	    str = str.replace(/s|S/g, this.getSeconds());
	    return str;
	}

	function SepPromise() {
		var _promise = this ;
		this.m_promise = function(callback) {
			return new Promise(function(next, fail) {
				callback.call(_promise, next, fail) ;
			}).catch(function(err) {
				throw err ;
			}) ;
		}
	}
	function _m_device() { // 判断设置
	    var _ua = navigator.userAgent.toLowerCase() ;	
		if (/iphone|ipad|ipod/.test(_ua)) {
			return "iOS" ;		
		} else if (/android/.test(_ua)) {
			return "android" ;	
		} else {
			return "pc" ;
		}
	}
	window.SepPromise = SepPromise ;
	/*
		事件管理器
	*/
	function SepEvents() {
		var _events = [] ;
		this.m_list_events = function() {
			return _events ;
		}
		function _m_push(name, callback, alias, one) {
			var _names = name.replace(/ /g, "").split(",") ;
			for(var i = 0; i < _names.length; i++) {
				var _name = _names[i] ;
				_events.push({name : _name, callback : callback, one : one, alias : alias}) ;
			}
		}
		this.m_on = function(name, callback, alias) {
			_m_push(name, callback, alias, false) ;
			return this ;
		}
		this.m_off = function(name, alias) {
			for(var i = 0; i < _events.length; i++) {
				if(_events[i].name == name && _events[i].alias == alias) {
					_events.splice(i, 1) ;
				}
			}
			return this ;
		}
		this.m_one = function(name, callback, alias) {
			_m_push(name, callback, alias, true) ;
			return this ;
		}
		this.m_trigger = function(name, params) {
			var _self = this ;
			var _vs = [] ; // 返回
			var _names = name.replace(/ /g, "").split(",") ;
			var _ones = [] ;
			_events.forEach(function(evt, x) {
				for(var i = 0; i < _names.length; i++) {
					var _name = _names[i] ;
					var _one = false ;
					if(evt.name == _name) {
						if(false == _one && true == evt.one) {
							_one = true ;
						}
						var _v = evt.callback.call(_self, evt, params) ;
						if(_v && _v.then) {
							_vs.push(_v) ;	
						}
					}
					if(true == _one) {
						_ones.push(x) ;
					}
				}
			}) ;
			for(var i = 0; i < _ones.length; i++) {
				var _index = _ones[i] ;
				_events.splice(_index, 1) ;
			}
			return new Promise(function(next, fail) {
				if(0 == _vs.length) {
					next(params) ;	
				} else {
					Promise.all(_vs).then(function() {
						next(params) ;
					}).catch(function(e) {
						fail(e) ;
					}) ;
				}
			}).catch(function(err) {
				throw err ;
			}) ;
		}
	}
	window.SepEvents = SepEvents ;
	Array.prototype.contains = function(item) {
		for(var i = 0; i < this.length; i++) {
			if(this[i] == item) {
				return true ;
			}
		}
		return false ;
	} ;
	Array.prototype.attach_list = function(list) {
		if(list instanceof Array) {
			for(var i = 0; i < list.length; i++) {
				var _item = list[i] ;
				this.push(_item) ;
			}
		}
		return this ;
	}
	Array.prototype.insert = function (index, item) {  
	  this.splice(index, 0, item);  
	} ;  
	Array.prototype.remove = function(item) {
		for(var i = 0; i < this.length; i++) {
			if(this[i] == item) {
				this.splice(i, 1) ;
				break ;
			}
		}
		return this ;
	}
	Array.prototype.empty = function() {
		var _counter = 0 ;
		for(var i = 0; i < this.length; i++) {
			if(null == this[i]) {
				_counter ++ ;
			}
		}
		return _counter ;
	}
	function uuid() {
		var s = [];
		var hexDigits = "0123456789abcdef";
		for (var i = 0; i < 36; i++) {
		s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
		}
		s[14] = "4"; // bits 12-15 of the time_hi_and_version field to 0010
		s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1); // bits 6-7 of the clock_seq_hi_and_reserved to 01
		s[8] = s[13] = s[18] = s[23] = "-";
		var uuid = s.join("");
		return uuid;
	}


	$.fn.m_cursor_end = function() { // 光标移动最后
		this.each(function() {
			var _r = this.createTextRange() ;
			var _len = this.value.length || this.innerText.length ;
			_r.moveStart('character', _len) ;
			_r.collapse(true) ;
			_r.select() ; 
		}) ;
	}

	$.fn.m_slide_up = function() {
		return this.each(function() {
			clearTimeout(this.tm) ;
			var _h = $(this).height() ;
			$(this).height(_h) ;
			// 需要等于 0
			$(this).height(0) ; // 保存属性

		}) ;
	}
	$.fn.m_slide_down = function() {
		return this.each(function() {
			var _self = this ;
			var _height = $(this).children().height() ;
			$(this).height(_height) ;
			clearTimeout(this.tm) ;
			this.tm = setTimeout(function() {
				$(_self).height("auto") ;
			}, $(this).m_css3_duration())
		}) ;
	}

	$.fn.m_stouch = function(ontrigger, selector) {
		return this.each(function() {
			var _touch = new JSimpleTouch(selector, this) ;
			_touch.ontrigger = ontrigger ;
		}) ;
	}

	$.fn.m_slide_toggle = function() {
		return this.each(function() {
			var _h = $(this).height() ;
			if(0 != _h) {
				$(this).m_slide_up() ;
				// 保存属性
			} else {
				$(this).m_slide_down() ;
			}
		}) ;
	}

	$.fn.m_css3_clear_duration = function() {
		$(this).css({
			'transition' : '',
			'-webkit-transition' : '',
		}) ;
	}
	$.fn.m_css3_clear_transform = function() {
		$(this).css({
			"transform" : '',
			"-webkit-transform" : ''
		}) ;
		return this ;
	}	
	
	$.fn.m_clear_z_index = function() {
		$(this).css({
			"z-index" : ""
		}) ;
		return this ;
	}	

	$.fn.m_get_x = function() {
	   var _v = $(this).css("transform") || $(this).css("-webkit-transform") ;
	   if(-1 != _v.indexOf("translate3d")) {
	   		return _v.replace(/translate3d\((.*)\)/, "$1").replace(/ /g, "").split(",")[0].replace(/px/, "").replace(/%/, "") ;
	   } else if(-1 != _v.indexOf("matrix")) {
	   		return _v.replace(/matrix\((.*)\)/, "$1").replace(/ /g, "").split(",")[4].replace(/px/, "").replace(/%/, "")  ;
	   }
	}

	$.fn.m_css3_duration = function() {
		var _animate_duration = parseFloat(($(this).css("-webkit-animation-duration") || $(this).css("animation-duration")).replace("s", "")) * 1000 ;
		var _duration = parseFloat(($(this).css("-webkit-transition-duration") || $(this).css("transition-duration")).replace("s", "")) * 1000 ;
		return _animate_duration || _duration ;	
	}

	$.fn.m_css3_translate3d = function(x, y, z) {
		$(this).css({
			"transform" : "translate3d("+ x +", "+ y +", "+ z +")",
			"-webkit-transform" : "translate3d("+ x +", "+ y +", "+ z +")"
		}) ;
	}



	$.fn.m_scale = function(scale, duration, callback) {
		return this.each(function() {
			var _mv = move(this).scale(scale) ;
			if("number" == typeof duration) {
				_mv.duration(duration) ;
			} else {
				_mv.duration(0) ;
			}
			_mv.end(callback) ;
		}) ;
	}


	function getObjectURL(buffer) {
		var url = null ; 
		if (window.createObjectURL!=undefined) { // basic
			url = window.createObjectURL(buffer) ;
		} else if (window.URL!=undefined) { // mozilla(firefox)
			url = window.URL.createObjectURL(buffer) ;
		} else if (window.webkitURL!=undefined) { // webkit or chrome
			url = window.webkitURL.createObjectURL(buffer) ;
		}
		return url ;
	}

	function m_get_object_url(buffer) {
	 	return getObjectURL(buffer) ;
	}
    function m_get_object_urls(files) {
    	var _urls = [] ;
    	var _files = files ;
    	for(var i = 0; i < _files.length; i++) {
    		var _file = _files[i] ;
    		_urls.push(getObjectURL(_file)) ;
    	}
    	return _urls ;
    }
    function clone(obj) {
	    var o;
	    if (typeof obj == "object") {
	        if (obj == null) {
	            o = null;
	        } else {
	            if (obj instanceof Array) {
	                o = [];
	                for (var i = 0, len = obj.length; i < len; i++) {
	                    o.push(clone(obj[i]));
	                }
	            } else {
	                o = {};
	                for (var j in obj) {
	                    o[j] = clone(obj[j]);
	                }
	            }
	        }
	    } else {
	        o = obj;
	    }
	    return o;
	}
	$.fn.m_set_scale = function(x, y, duration, callback) {
		var _self = this ;
    	duration = duration ? duration : 0 ;
    	$(this).css({
    		'transform' : 'scale('+ x +', ' + y + ')',
			'-webkit-transform' : 'scale('+ x +', ' + y + ')'
		}) ;
    	if(duration) {
    		$(this).css({
				'-webkit-transition' : duration + 'ms',
    			'transition' : duration + 'ms',	
			}) ;
    	}
		setTimeout(function() {
			if($.isFunction(callback)) {
				callback.call(_self) ;
			}
			if(duration) {
				$(_self).m_css3_clear_duration() ;	
			}
		}, duration) ;
	}
	$.fn.m_set_rotate = function(value, duration, callback) {
		var _self = this ;
    	duration = duration ? duration : 0 ;
    	$(this).css({
    		'transform' : 'rotate('+ value +'deg)',
			'-webkit-transform' : 'rotate('+ value +'deg)'
		}) ;
    	if(duration) {
    		$(this).css({
				'-webkit-transition' : duration + 'ms',
    			'transition' : duration + 'ms',	
			}) ;
    	}
		setTimeout(function() {
			if($.isFunction(callback)) {
				callback.call(_self) ;
			}
			if(duration) {
				$(_self).m_css3_clear_duration() ;	
			}
		}, duration) ;
	}
	$.fn.m_set_point = function(x, y, duration, callback) {
		this.each(function() {
			var _self = this ;
	    	duration = duration ? duration : 0 ;
	    	var _x = 'number' == typeof x ? x + 'px' : x ;
	    	var _y = 'number' == typeof y ? y + 'px' : y ;
	    	$(this).css({
				'-webkit-transform' : 'translate3d('+ _x +', ' + _y + ', 0)',
				'transform' : 'translate3d('+ _x +', ' + _y + ', 0)'
			}) ;
			if(duration) {
				$(this).css({
					'-webkit-transition' : duration + 'ms',
	    			'transition' : duration + 'ms',	
				}) ;
			}
			setTimeout(function() {
				if($.isFunction(callback)) {
					callback.call(_self) ;
				}
				if(duration) {
					$(_self).m_css3_clear_duration() ;	
				}
			}, duration) ;
		}) ;
		return this ;
    }
    $.fn.m_css3_clear_props = function() {
    	$(this).m_css3_clear_duration() ;
    	$(this).m_css3_clear_transform() ;
    	return this ;
    }
    $.fn.m_set_y = function(y, duration, callback) {
    	$(this).m_set_point(0, y, duration, callback) ;
		return this ;
    }
    $.fn.m_set_x = function(x, duration, callback) {
    	$(this).m_set_point(x, 0, duration, callback) ;
		return this ;
    }
    $.fn.m_set_scale_y = function(y, duration, callback) {
    	$(this).m_set_scale(0, y, duration, callback) ;
		return this ;
    }
    $.fn.m_valid = function(istip) {
    	var _r = false ;
    	if($.isFunction(this[0].m_valid)) {
    		var _result = this[0].m_valid(istip) ;
    		_r = _result.r ;
    	}
    	return _r ;
    }
    $.fn.m_set_scale_x = function(x, duration, callback) {
    	$(this).m_set_scale(x, 0, duration, callback) ;
		return this ;
    }
    function SepScroll(scroll) {
    	SepEvents.apply(this) ;
    	var _e = null ;
    	var _e_box = null ;
    	var _e_wrap = null ;
    	var _scroll = this ;
    	var _h = 0 ;
    	function _m_init() {
    		_e = $(scroll.$el) ;
    		_e.prop('$sep', _scroll) ;
    		_e_box = _e.children('.box') ;
    		_e_wrap = _e_box.children('.wrap') ;
    		var _current_scroll_top = _scroll.m_get_scroll_top() ;
    		var _ir = null ;
    		_h = _e.height() ;
    		_e_box.on('scroll', function() {
    			if($.isFunction(_scroll.onscroll)) {
    				_scroll.onscroll(_scroll.m_get_scroll_top()) ;
    			}
    			_scroll.m_trigger('scroll', _scroll.m_get_scroll_top()) ;
    			scroll.m_send('scroll.start') ;
    			clearInterval(_ir) ;
    			_ir = setInterval(function() {
    				if(_current_scroll_top == _scroll.m_get_scroll_top()) {
    					clearInterval(_ir) ;
    					scroll.m_send('scroll.end') ;
    				} else {
    					_current_scroll_top = _scroll.m_get_scroll_top() ;
    				}
    			}, 600) ;
    		}) ;
    		_e_box.change(function() {
    			_h = _e.height() ;
    		}) ;
    	}
    	this.m_get_ele = function() {
    		return _e ;
    	}
    	this.m_get_scroll_top = function() {
    		return _e_box.scrollTop() ;
    	}
    	this.m_scroll_to = function(x, y, duration) {
    		_e_box.prop('scrollLeft', x).prop('scrollTop', y) ;
    		return this ;
    	}
    	this.m_get_offset_top = function() {
    		return _e.offset().top ;
    	}
    	this.m_scroll_to_top = function() {
    		this.m_scroll_to(0, 0, 0) ;
    		return this ;
    	}
    	this.m_scroll_to_bottom = function() {
    		this.m_scroll_to(0, this.m_get_max_scroll_top(), 0) ;
    		return this ;
    	}
    	this.m_get_wrap_height = function() {
    		return _e_wrap.height() ;
    	}
    	this.m_get_wrap_ele = function() {
    		return _e_wrap ;
    	}
    	this.m_set_wrap_height = function(height) {
    		_e_wrap.height(height) ;
    		return this ;
    	}
    	this.m_get_box_width = function() {
    		return _e_box.width() ;
    	}
    	this.m_get_max_scroll_top = function() {
    		return _e_box.prop('scrollHeight') - _e_box.height() ;
    	}
    	this.m_get_min_scroll_top = function() {
    		return 0 ;
    	}
    	this.m_get_height = function() {
    		return _h ;
    	}
    	this.m_is_top_overflow = function() {
    		return this.m_get_min_scroll_top() > this.m_get_scroll_top() ;
    	}
    	this.m_is_bottom_overflow = function() {
    		return this.m_get_max_scroll_top() < this.m_get_scroll_top() ;
    	}
    	this.m_is_top = function() {
    		return this.m_get_min_scroll_top() == this.m_get_scroll_top() ;
    	}
    	this.m_is_bottom = function() {
    		return this.m_get_max_scroll_top() == this.m_get_scroll_top() ;
    	}
    	this.m_reset = function() {
    		_e_box.prop('scrollTop', 0) ;
    		_e_box.prop('scrollLeft', 0) ;
    		return this ;
    	}
    	_m_init() ;
    }
    window.SepScroll = SepScroll ;
	window.clone = clone ;
    window.uuid = uuid ;
    window.m_get_object_url = m_get_object_url ;
    window.m_get_object_urls = m_get_object_urls ;

    Vue.directive("base64", {
    	bind : function() {
    		this.ctx = this.el.getContext('2d') ;
    		this.auto = undefined != $(this.el).attr('auto') ? true : false ;
    		this.w = this.el.width ;
    		this.h = this.el.height ;
    	},
    	update : function(buffer) {
    		var _ctx = this.ctx ;
    		var _image = new Image() ;
    		var _w = this.w ;
    		var _h = this.h ;
    		var _auto = this.auto ;
    		_image.src = m_create_object_url(buffer) ;
    		_image.onload = function() {
    			if(true == _auto) {
    				_ctx.drawImage(this, 0, 0, this.width, this.height) ;	
    			} else {
    				_ctx.drawImage(this, 0, 0, _w, _h) ;	
    			}
    		}
    	},
    	unbind : function() { // 停止绘制
    		
    	}
    }) ;

})($) ;;
///<jscompress sourcefile="directives.js" />
/*
	插件：vue 表单验证插件
	时间：2016-07-22
	作者：Spam、
	公司：坤晖软件
*/
; (function() {
	function MillisecondToDate(timer) {  
	    var days    = timer / 1000 / 60 / 60 / 24;
		var daysRound   = Math.floor(days);
		var hours    = timer/ 1000 / 60 / 60 - (24 * daysRound);
		var hoursRound   = Math.floor(hours);
		var minutes   = timer / 1000 /60 - (24 * 60 * daysRound) - (60 * hoursRound);
		var minutesRound  = Math.floor(minutes);
		var seconds   = Math.floor(timer/ 1000 - (24 * 60 * 60 * daysRound) - (60 * 60 * hoursRound) - (60 * minutesRound)) ;
		return {
			dd : daysRound,
			hh : hoursRound,
			mm : minutesRound,
			ss : seconds
		}
	}
	var _install = function() {
		var _verifications = {
			required : function(value) {
				if('checkbox' == this.type || 'radio' == this.type) {
					return this.checked ;
				} else if(value instanceof Array) {
					return 0 != value.length ;
				} else {
					if(typeof value == "boolean") return value ;
					return !((value == null) || (value.length == 0)) ;
				}
			},
			lte : function(value, lte) {
				return value <= lte ;
			},
			min : function(value, min) {
				if(value instanceof Array) {
					return value.length >= min ;
				} else {
					return value >= min ;
				}
			},
			tel : function(value) {
				return (/(^(([0\+]\d{2,3}-)?(0\d{2,3})-)(\d{7,8})(-(\d{3,}))?$)|(^0{0,1}1[3|4|5|6|7|8|9][0-9]{9}$)/).test(value) ;
			},
			max : function(value, max) {
				return value <= max ;
			},
			eq : function(value, eq) {
				return value == eq ;
			},
			alpha : function(value) {
				return (/^[a-zA-Z]+$/).test(value) ;
			},
			numeric: function (value) {
				return (/^-?(?:0$0(?=\d*\.)|[1-9]|0)\d*(\.\d+)?$/).test(value) ;
			},
			email: function (value) {
				return (/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test(value) ;
			},
			url: function (value) {
				if("" === value) {
					return true ;
				} else {
					return (/^(https?|ftp|rmtp|mms):\/\/(([A-Z0-9][A-Z0-9_-]*)(\.[A-Z0-9][A-Z0-9_-]*)+)(:(\d+))?\/?/i).test(value) ;	
				}
			},
			alphaNum: function (value) {
				return !(/\W/).test(value);
			},
			integer: function (value) {
				return (/^(-?[1-9]\d*|0)$/).test(value) ;
			},
			digits: function (value) {
				return (/^[\d() \.\:\-\+#]+$/).test(value) ;
			},
			minlength : function(value, min) {
				return null != value && value.length >= min ;
			},
			maxlength : function(value, max) {
				return null != value && value.length <= max ;
			},
			password : function(value) {
				return /^[\w]{6,16}$/.test(value) ;
			},
			pattern: function (value, expression) {
				var _rep = new Function('return' + expression)() ;
				return _rep.test(value) ;
			}
		} ;


		Vue.directive('lazyload', {
			bind : function(el, binding, src) {
				if(!$(el).attr('cache-src')) {
					$(el).attr('cache-src', $(el).attr('src')) ;
				}
				$(el).attr('desc-src', binding.value) ;
            	var _e_scroll = $(el).parents('.scroll') ;
            	var _sep_scroll = null ;
            	if(_e_scroll.length) {
            		_sep_scroll = _e_scroll.prop('$sep') ;
            	}
            	if(_sep_scroll) {
	            	_sep_scroll.onscroll = function() {
	            		el.m_auto_load() ;
	            	} ;
            	}
            	el.m_load = function() {
            		var _src = $(el).attr('desc-src') ;
            		if(_src) {
            			el.src = _src ;	
            		}
            	}
            	el.m_auto_load = function() { // 自动加载
            		if(_sep_scroll) {
            			var _src_top = _sep_scroll.m_get_scroll_top() + _sep_scroll.m_get_height() + _sep_scroll.m_get_offset_top() ;
            			var _desc_top = $(this).offset().top ;
            			if(_src_top >= _desc_top) {
            				this.m_load() ;
            			}
            		} else {
            			this.m_load() ;	
            		}
            	}
            	el.m_auto_load() ;
			},
			update : function(el, binding, src) {
				$(el).attr('desc-src', binding.value) ; // 新的值
				// el.onload = el.m_load ;
				el.m_load() ;
				// el.m_load() ;
			}
		})

		Vue.directive('touchstart', {
			bind : function(el, binding, src) {
				$(el).on('touchstart mousedown', function(ev) {
					if($.isFunction(binding.value)) {
						binding.value.call(el, ev) ;
					}
				}) ;
			}
		}) ;

		Vue.directive("click", {
			bind : function(el, binding, src) {
				binding.def.update(el, binding, src) ;
				
			},
			update : function(el, binding) {
				var _value = binding.value ;
				if(!_value) {
					return false ;
				}
				var _method = null ;
				var _args = null ;
				if($.isFunction(_value)) {
					_method = _value ;
				} else if($.isFunction(_value.method)) {
					_method = _value.method ;
					_args = _value.args ;
				}
				if(!$(el).hasClass('button')) {
					$(el).attr("click", "yes") ;	
				}
				el.$onclick = function(ev) {
					if($.isFunction(_method)) {
						if(null != _args) {
							_method.call(this, _args, ev) ;
						} else {
							_method.call(this, null, ev) ;
						}	
					}
				}
			},
			unbind : function(el, binding) {
				el.$onclick = null ;
				$(el).removeAttr("click") ;

			}
		}) ;
		

		

		Vue.directive('shortcut-menu', {
			inserted : function(el, binding, src) {
				var _stop = true ;
				var _value = binding.value ;
				var _e_shortcut_menu = $$(_value.selector) ;
				var _e_button = null ;
				var _classname = 'shortcut-menu' ;
				var _lock = _value.lock ;
				$(el).prop('model', _value.model) ;
				$(document).on('mouseup', function(ev) {
					if(0 == ev.button) {
						var _e_target = $(ev.target) ;
						if((!$(_e_target).hasClass(_classname) || _e_target.parents('.' + _classname).length)) {
							_e_shortcut_menu.hide() ;
						}
					}
				}) ;
				_e_shortcut_menu.find('.button').each(function() {
					$(this).on('__click', function() {
						_e_shortcut_menu.hide() ;
					}) ;
				}) ;
				if(_value.lock) {
					document.oncontextmenu = function() {
						return false ;
					}
				} else {
					document.oncontextmenu = function() {
						return true ;
					}
				}
				$(el).on('mousedown', function(ev) {
					if(ev && 2 == ev.button) {
						$$('.' + _classname).hide() ;
						var _e_views = ___sep_svc.m_get_ele() ;
						var _width = _e_views.width() ; 
						var _height = _e_views.height() ;
						var _client_x = ev.clientX ;
						var _client_y = ev.clientY ;
						var _left = _client_x - _e_views.offset().left ;
						var _top = _client_y - _e_views.offset().top ;
						var _full_left = _left + _e_shortcut_menu.width() ;
						var _full_top = _top + _e_shortcut_menu.height() ;
						if(_full_left >= _width) {
							_left = (_width - _e_shortcut_menu.width()) - 10 ;
						}
						if(_full_top >= _height) {
							_top = (_height - _e_shortcut_menu.height()) - 10 ;
						}
						_e_shortcut_menu.show().css({
							left : _left ,
							top : _top
						}) ;
						var _model = $(el).prop('model') ;
						if($.isFunction(_value.onchoose)) {
							_value.onchoose(_model) ;
						}
						setTimeout(function() {
							_stop = !_value.lock ;
						}, 300) ;
						_stop = false ;
						document.oncontextmenu = function() {
							return _stop ;
						}
						return _stop ;
					}
				}) ;
			},
			update : function(el, binding, src) {
				var _value = binding.value ;
				$(el).prop('model', _value.model) ;
			}
		}) ;
		
	
		Vue.directive('calc-width', {
			bind : function(el, binding, src) {
				binding.def.update(el, binding, src) ;
			},
			update : function(el, binding, src) {
				Vue.nextTick(function() {
					$(el).width('auto') ;
					var _e_childs = $(el).children() ;
					var _widths = 0 ;
					for(var i = 0; i < _e_childs.length; i++) {
						var _e_item = _e_childs.eq(i) ;
						var _w = $(_e_item).innerWidth() ;
						_widths += _w ;
						$(_e_item).width(_w) ;
					}
					$(el).width(_widths) ;
				}) ;
			}
		}) ;
		
		Vue.directive('remind', {
			update : function(el, binding, src) {
				var _value = binding.value ;
				$(el).attr('remind-text', _value.text) ;
			},
			bind : function(el, binding, src) { // 提示信息
				var _value = binding.value ;
				var _e_info = null ;
				var _mt = _value.mt ;
				var _ml = _value.ml ;
				var _mb = _value.mb ;
				var _mr = _value.mr ;
				var _tm = null ;
				$(el).attr('remind-text', _value.text) ;
				function _m_remove() {
					if(null == _e_info) return ;
					_e_info.removeClass('on') ;
					_tm = setTimeout(function() {
						_e_info.remove() ;	
						_tm = null ;
					}, _e_info.m_css3_duration()) ;
				}

				$(el).hover(function() {
					if(null != _tm) return ;
					$('.remind', document.body).remove() ; // 删除原先的
					_e_info = $("<p class = 'remind'></p>").addClass(_value.dr) ;
					_e_info.appendTo(document.body) ;
					_e_info.text($(el).attr('remind-text')) ;
					switch(_value.dr) {
						case 'bottom' : {
							_e_info.css({
								marginTop : _mt,
								left : ($(this).offset().left + $(el).outerWidth() / 2) - (_e_info.outerWidth() / 2),
								top : $(this).offset().top + $(el).outerHeight()
							}) ;
							break ;
						}
						case 'top' : {
							_e_info.css({
								marginTop : '-' + _mb,
								left : ($(this).offset().left + $(el).outerWidth() / 2) - (_e_info.outerWidth() / 2),
								top : $(this).offset().top - $(_e_info).outerHeight()
							}) ;
							break ;
						}
						case 'left' : {
							_e_info.css({
								marginLeft : _ml,
								left : $(this).offset().left - _e_info.outerWidth(),
								top : ($(this).offset().top + $(el).outerHeight() / 2) - $(_e_info).outerHeight() / 2
							}) ;
							break ;
						}
					}
					setTimeout(function() {
						_e_info.addClass('ready').addClass('on') ;
					}, 60) ;
				}, _m_remove).click(_m_remove) ;
			},
			unbind : function(el, binding, src) {
				$(el).off('mouseover').off('mouseout') ;
			}
		}) ;
		
		Vue.directive('visible', {
			bind : function(el, binding, src) { 
				binding.def.update(el, binding, src) ;
			},
			update : function(el, binding) {
				if(binding.value) {
					$(el).css({
						'opacity' : '1',
						zIndex : ''
					}) ;
				} else {
					$(el).css({
						'opacity' : '0',
						zIndex : -999
					}) ;
				}
			}
		}) ;
		
		Vue.directive('count-down', { // 倒计时
			bind : function(el, binding, src) { // 只做一次
				var _value = binding.value ;
				var _self = this ;
				var _callback = _value.callback ;
				var _scope = _value.scope || src.context ; // root
				var _sub = _value.sub ;
				_sub = _sub ? _sub : 1000 ;
				var _timer = _scope[_value.name] ;
				_scope['out_' + _value.name] = MillisecondToDate(_timer) ;
				clearInterval(this.ir) ;
				this.ir = setInterval(function() {
					if(0 >= _timer) { // 完成了
						clearInterval(_self.ir) ;
						if($.isFunction(_callback)) {
							var _v = _callback() ;
							if(_v) {
								setTimeout(function() {
									binding.def.bind(el, binding, src) ;
								}, _value.sleep + 300) ;
							}
						}
					} else {
						_timer -= _sub ;
					}
					_scope[_value.name] = _timer ;
					// 存入一个新的
					_scope['out_' + _value.name] = MillisecondToDate(_timer) ;
				}, _value.sleep) ;
			},
			update : function() {
			},
			unbind : function() {
				clearInterval(this.ir) ;
			}
		}) ;
		
	    Vue.directive('canvas', {
	        update : function(el, binding) {
	            var _value = binding.value ;
	            var _blob = new Blob([_value.src]);
	            var _src = m_get_object_url(_blob) ;
	            var _image = new Image() ;
	            // _image.src = _value.src ;
	            _image.src = _src ;
	            var _2d = el.getContext('2d') ;
	            _image.onload = function() {
	                _2d.drawImage(this, 0, 0, _value.w, _value.h) ;
	            }
	        },
	        bind : function(el, binding, src) {
	            binding.def.update(el, binding, src) ;
	        }
	    }) ;

	    Vue.directive('form', {
	    	bind : function(el, binding, src) {
	    		$(el).on('keypress', function(ev) {
					if(13 == ev.keyCode) {
						var _e_submit = $(el).find('.button.submit') ;
						_e_submit.trigger('$method') ;
						_e_submit.trigger('$onclick') ;
						var _value = binding.value ;
						if($.isFunction(_value.onenter)) {
							_value.onenter.call(_value) ; // 按下回车
						}
						return false ;
					}
				}) ;
	    		var _form = binding.value ;
	    		SepEvents.apply(_form) ; // 对 form 进行扩展
	    		var _root = src.context.$root ;
	    		var _save_model = null ;
	    		if(_form.model) {
	    			_save_model = clone(_form.model) ;	
	    			var _msgs = {} ;
		    		Object.keys(_save_model).forEach(function(item) {
		    			_msgs[item] = null ;
		    		}) ;
		    		Vue.set(_form, 'msgs', _msgs) ;
	    		}
	    		// 开始动态添加熟悉
	    		var _extends = {
	    			status : 0,
	    			valids : {},
	    			m_add_valid : function(data) { // 添加验证规格
	    				_form.valids[data.id] = data.vd ;
	    			},
	    			m_remove_valid : function(id) {
	    				delete _form.valids[id] ;
	    				return this ;
	    			},
	    			m_realtime_valids : function() { // 实时验证多个
	    				_form.m_validate_all(function(result, msg) {
	    					if(result) {
		    					_form.status = 1 ;
		    				} else {
		    					_form.status = 0 ;
		    				}
	    				}) ;
	    			},
	    			m_refresh : function() {
	    				return new Promise(function(next, fail) {
	    					if($.isFunction(_form.onrefresh)) {
		    					_form.onrefresh().then(function(data) {
		    						$.extend(_form.model, data) ;
		    						next() ;
		    					}).catch(fail) ;
		    				} else {
		    					next() ;
		    				}
	    				}) ;
	    			},
	    			m_validate_all : function(callback) { // 验证全部
	    				var _keys = Object.keys(_form.valids) ;
	    				var _result = null ;
	    				var _msg = null ;
	    				for(var i = 0; i < _keys.length; i++) {
	    					var _id = _keys[i] ;
	    					var _vd = _form.valids[_id] ;
	    					var _v = _vd() ;
	    					if(!_v.r && null == _result) {
	    						_msg = _v.msg ;
	    						_result = false ;
	    						// break ;
	    					}
	    				}
	    				_result = null == _result ? true : _result ;
	    				if($.isFunction(callback)) {
	    					callback(_result, _msg) ;
	    				}
	    				
	    			},
	    			m_reset : function() { // 重置表单
	    				_form.model = clone(_save_model) ;
	    				return this ;
	    			},
	    			m_submit : function() { // 提交
	    				_form.m_validate_all(function(r, msg) { // 开始验证结果
	    					if(r) {
	    						_form.m_trigger("submit.before").then(function(ev) { // 表单提交之前
									var _model = _form.model || _root.$model ;
									if(_model) {
										_model = JSON.parse(JSON.stringify(_model)) ;
									}
	                                m_func(_form.onsubmit, _model, _form, {ev : ev, src : _form}).then(function() {
	                                	
	                                }) ;
	                            }) ;
	    					} else {
	    						if(!r && msg) {
			    					app.toast.m_show_text(msg) ;
			    				}
	    						_form.oninvalid(msg) ;
	    					}
	    				}, true) ;
	    			}
	    		} ;
	    		for(var key in _extends) {
	    			Vue.set(_form, key, _extends[key]) ;
	    		}
	    		$(el).prop('$sep', _form) ;
	    	},
	    	unbind : function(el, binding, src) {
	    		$(el).off('keypress') ;
	    		var _form_sep = $(el).prop('$sep') ;
	    	},
	    	update : function(el) {
	    		Vue.nextTick(function() {
	    			var _form_sep = $(el).prop('$sep') ;
	    			if(_form_sep) {
		    			_form_sep.m_realtime_valids() ;
		    		}
	    		}) ;
	    		
	    	}
	    }) ;
	    Vue.directive('rules', {
	    	bind : function(el, binding, src) {
	    		Vue.nextTick(function() {
		    		var _e_form = $(el).parents('form').eq(0) ;
					if(!_e_form.length) return ;
					var _form_sep = _e_form.prop('$sep') ;
					// 开始添加自己的验证规则 
					var _rules = binding.value ;
					el.form_sep = _form_sep ;
					var _expression = null ;
					var _directives = src.data.directives ;
					for(var i = 0; i < _directives.length; i++) {
						var _item = _directives[i] ;
						if('v-model' == _item.rawName) {
							_expression = _item.expression ;
							if(-1 != _expression.indexOf('.length')) { // 找到长度字段
								_expression = _expression.replace('.length', '') ;
							}
							_expression = _expression.substring(_expression.lastIndexOf('.') + 1) ;
							break ;
						}
					}
					if(!_expression) {
						_expression = src.data.model.expression ;
						_expression = _expression.substring(_expression.lastIndexOf('.') + 1) ;
					}
					var _id = uuid() ;
					var _index = $(el).attr('index') ;
					$(el).prop('id', _id) ;
					function _m_notify(data) {
						if(_expression) { // 找到
							// 注入数学
							if(_form_sep.msgs) {
								_index = _index ? _index : '' ;
								Vue.set(_form_sep.msgs, _expression + _index, data) ;
								// _form_sep.msgs[_expression + _index] = data ;
							}
						}
					}
					function _m_vd_ok() {
						var _msg = "<small class = 'ok'><i class = '{icon}'></i></small>".replace('{icon}', 'icon-roundcheckfill') ;
						_m_notify(_msg) ;
					}

					function _m_vd_no(msg) {
						var _msg = "<small class = 'no'><i class = '{icon}'></i></small>".replace('{icon}', 'icon-infofill') ;
						_m_notify(_msg) ;
					}
					el.m_valid = function(istip) { // 自身验证
						var _result = true ;
						var _msg = null ;
						var _keys = Object.keys(_rules) ;
						for(var i = 0; i < _keys.length; i++) {
							var _name = _keys[i] ;
							var _m = _verifications[_name] ;
							var _args = _rules[_name] ;
							_result = _m.call(el, el.value, _args, el) ;
							if(!_result) {
								_msg = el.dataset[_name + "Msg"] ;
								break ;
							}
						}
						if(istip && !_result && _msg) {
							app.toast.m_show_text(_msg) ;
						}
						if(_result) { // 通过
							_m_vd_ok() ;
						} else {
							_m_vd_no() ;
						}
						return {
							r : _result,
							msg : _msg
						}
					}
					el.m_clear = function() { // 清除
						_form_sep.m_remove_valid(_id) ;
						_m_notify('') ;
					}
					function _m_init() {
						_form_sep.m_add_valid({
							id : _id,
							vd : function() {
								return el.m_valid(null) ;
							}
						}) ;
						_form_sep.m_realtime_valids() ;
					}
					_m_init() ;
				}) ;
	    	},
	    	update : function(el) {
	    		Vue.nextTick(function() {
	    			if(el.form_sep) {
		    			el.form_sep.m_realtime_valids() ;
		    		}
	    		}) ;
	    	},
	    	unbind : function(el, binding, src) {
	    		if(el.form_sep) {
	    			el.form_sep.m_realtime_valids() ;
	    		}
	    		el.m_clear() ;
	    	}
	    	
	    })

	}
	if(typeof exports === "object") {
		module.exports = _install ;
	} else if(typeof define === "function" && define.amd) {
		define([], function() {
			return _install ;
		})
	} else if(window.Vue) {
		Vue.use(_install) ;
	}
})() ;
;
///<jscompress sourcefile="request.js" />
; (function(window, document, Math) {
	SepRequest.onsend_before = function() {

	}
	SepRequest.onsend_after = function() {

	}
	SepRequest.keys = {
		status : 'status',
		info : 'info'
	}
	SepRequest.codes = {
		oks : [200],
		nos : [101],
		errors : [500],
		sessionlesses : [100],
		timeouts : [300]
	} ;
	function SepRequest() {
		var _SepRequest = this ;
		this.m_send = function(api, type, data, onok, onno, opts) { // 请求地址
			var _defaults = {
				async : true
			} ;
			var _settings = $.extend(_defaults, opts) ;
			var _args = {
				async : _settings.async,
				url : api,
				type : type,
				data : data,
				timeout : 1000 * 10, // 10 秒
				error : function(xr, status) {
					var _ds = {} ;
					var _status = SepRequest.keys.status ;
					if("timeout" == status) {
						$(SepRequest).trigger("timeout") ; // 请求异常
						_ds[SepRequest.keys.msg] = '请求超时' ;
						_ds[_status] = SepRequest.codes.timeouts[0] ;
						if($.isFunction(onno)) { // 有自己的处理方式
							onno(_ds) ;
						}
					} else if('abort' == status) {
						_ds[SepRequest.keys.msg] = '请求中断' ;
						_ds[_status] = SepRequest.codes.errors[0] ;
						if($.isFunction(onno)) { // 有自己的处理方式
							onno(_ds) ;
						}
						$(SepRequest).trigger("error", _ds) ; // 请求错误
					} else if('error' == status) {
						_ds[SepRequest.keys.msg] = '接口错误' ;
						_ds[_status] = SepRequest.codes.errors[0] ;
						if($.isFunction(onno)) { // 有自己的处理方式
							onno(_ds) ;
						}
						$(SepRequest).trigger("error", _ds) ; // 请求错误
					}
				},
				ontimeout : function() {
					
				},
				complete : function() { // 完成请求
					SepRequest.onsend_after() ;
				},
				success : function(ds) {
					var _codes = SepRequest.codes ;
					if(null == _codes) {
						throw Error('请配置状态码!') ;
					} else {

					}
					if(-1 != _codes.oks.indexOf(ds[SepRequest.keys.status])) {
						if($.isFunction(onok)) {
							onok(ds) ;
						}
						$(SepRequest).trigger("success", ds) ; // 请求成功
					} else {
						if($.isFunction(onno)) { // 有自己的处理方式
							onno(ds) ;
						} else {
							
						}
						$(SepRequest).trigger("error", ds) ;
					}
				}
			} ;
			SepRequest.onsend_before(_args) ;
			$.ajax(_args) ;
		}
	}
	window.SepRequest = SepRequest ;
})(window, document, Math) ;;
///<jscompress sourcefile="framework.js" />

function SepTpl(opts, stc, view, svc) {
	SepPromise.apply(this) ;
	SepEvents.apply(this) ;
	var _tpl = this ;
	var _once = false ;
	var _e = null ;
	this.view = view ;
	this.opts = opts ;
	this.scroll = {} ; // 存储滚动条
	this.swipers = {} ;
	this.m_get_ele = function() {
		return view.m_get_ele().find('.' + this.m_get_class_name()) ;
	}
	/*
		下拉刷新
	*/
	this.m_downpull = function(istrigger) {
		return this.m_promise(function(next, fail) {
			if(!this.scroll.downpull_lock && $.isFunction(this.scroll.m_downpull)) {
				this.scroll.m_downpull(istrigger).then(next) ;
			} else {
				fail() ;
			}
		}) ;
	}
	/*
		获取类型
	*/
	this.m_get_class_name = function() {
		var _name = this.opts.mapping || this.opts.name ;
		return _name.replace(/\./g, "-") ;
	}
	this.m_use = function(install) { // 使用一个插件
		install.m_init(this) ;
		return this ;
	}
	this.m_var_name = function() {
		return this.opts.name.replace(/\./g, "_") ;
	}
	this.m_get_id = function() {
		return opts.name.replace(/\./g, '-') ;
	}
	function _m_create() {
		var _e = $("<div></div>") ;
		_e.addClass("tpl").addClass(_tpl.m_get_class_name()).attr('id', _tpl.m_get_id()) ;
		return _e ;
	}
	/*
		添加
	*/
	function _m_add() {
		var _e = _m_create() ;
		_e.appendTo(stc.m_get_ele()) ;
		return _e ;
	}
	this.m_show = function() {
		this.m_get_ele().addClass("on") ;
		return this ;
	}
	this.m_hide = function() {
		this.m_get_ele().removeClass("on") ;
		return this ;
	}

	function _m_load(html) { // 加载
		return new Promise(function(next) {
			_tpl.m_trigger("downtpl.after") ;
			_e.html(html) ;
			next() ; // 模板下载完成
		}) ;
	}

	/*
		添加 ajax
	*/
	function _m_ajax() {
		return new Promise(function(next, fail) {
			var _cache_name = opts.cache_name ;
			var _html = svc.html_caches[_cache_name] ;
			var _url = opts.html_url + '?v=' + window.__cache_ver ;
			$.ajax({
				url : _url,
				cache : false,
				success : function(html) {
					// if(_cache_name) {
					// 	svc.html_caches[_cache_name] = html ;	
					// }
					// setTimeout(function() {
						_m_load(html).then(next) ;
					// }, 1000) ;
					
				}
			}) ;
		}) ;
	}
	/*
		下载模板
	*/
	function _m_down_html() {
		return new Promise(function(next, fail) {
			var _cache_name = opts.cache_name ;
			var _html = svc.html_caches[_cache_name] ;
			if(_html) {
				_m_load(_html).then(next) ;
			} else {
				_tpl.m_trigger("down.html.before").then(function() {
					return _m_ajax() ;
				}).then(function() {
					return _tpl.m_trigger("down.html.after") ;
				}).then(next) ;
			}
		}) ;
	}

	/*
		加载模块
	*/
	function _m_down_module() {
		return _tpl.m_promise(function(next, fail) {
			function _m() {
				return _tpl.m_promise(function(next, fail) {
					var _url = this.opts.module_url + "?v=" + window.__cache_ver ;
					seajs.use(_url, function($class) {
						if($.isFunction($class)) {
							var _v = new $class(_tpl, view, stc, svc) ;
							if(_v && _v.then) {
								_v.then(function() {
									next() ;
								}) ;
							} else {
								next() ;
							}
						}
					}) ;
				}) ;
			}
			_tpl.m_trigger("down.module.before").then(function() {
				return _m() ;
			}).then(function() {
				return _tpl.m_trigger("down.module.after") ;
			}).then(next).catch(fail) ;
			
		}) ;
	}
	this.m_apply = function() {
		return this.m_promise(function(next) {
			// 1 、下载模板
			// 2、 加载模块
			if(_once) {
				_tpl.m_show() ;
				next(_tpl) ;
			} else {
				_once = true ;
				// 初始化Sep
				_tpl.m_use(new SepTplRequest(svc)) ;
				_m_down_html().then(function() {
					return _m_down_module() ; // 加载模块
				}).then(function() {
					_tpl.m_show() ;
				}).then(function() {
					_tpl.m_use(new SepTplHeader()) ;
					_tpl.m_use(new SepTplFooter()) ;
					_tpl.m_use(new SepTplUtil(svc)) ;
					_tpl.m_use(new SepTplSimpleVM(view)) ;
					_tpl.m_use(new SepImageLazy()) ;
					return _tpl.m_trigger("init") ; // 出货后完成
				}).then(function() {
					next(_tpl) ;
				}).catch(function(e) {
					throw e ;
				}) ;
			}
		}) ;
	}
	/*
		追加
	*/
	// 作为模板， 只需要判断是否需要刷新
	function _m_init() {
		_e = _m_add() ;
		// 开始监视视图行为
		// 1、 模板只需要监视刷新..
	}
	_m_init() ;
}
function SepTplController(view, svc) {
	SepEvents.apply(this) ;
	SepPromise.apply(this) ;
	var _tpls = {} ;
	var _e = null ;
	this.curr_tpl = null ;
	this.prev_tpl = null ;
	var _stc = this ;
	function _m_create() {
		var _e = $("<div></div>") ;
		_e.addClass("tpls") ;
		return _e ;
	}
	this.m_get_ele = function() {
		return _e ;
	}
	function _m_add() {
		var _e = _m_create() ;
		_e.appendTo(view.m_get_ele()) ;
		return _e ;
	}
	function _m_init() {
		_e = _m_add() ;
	}
	this.m_add_tpl = function(name) {
		var _view = svc.m_get_view_config_from_name(name) ;
		var _tpl = new SepTpl(_view, this, view, svc) ;
		return _tpl ;
	}
	this.m_apply = function(name) {
		// 先隐藏
		return this.m_promise(function(next) {
			this.m_get_or_add(name).then(function(tpl) {
				_stc.prev_tpl = _stc.curr_tpl ;	
				_stc.curr_tpl = tpl ;
				return tpl.m_apply() ;
			}).then(function(tpl) {
				if(_stc.prev_tpl && _stc.prev_tpl != _stc.curr_tpl) {
					_stc.prev_tpl.m_hide() ;
				}
				next(tpl) ;
			}) ;
		}) ;
	}
	this.m_get_tpl = function(name) {
		var _tpl = _tpls[name] ;
		return _tpl ;
	}
	this.m_get_or_add = function(name) {
		return this.m_promise(function(next) {
			var _tpl = _tpls[name] ;
			if(_tpl) {
				next(_tpl) ;
			} else {
				_tpl = this.m_add_tpl(name) ;
				_tpls[name] = _tpl ;
				next(_tpl) ;
			}
		}) ;
	}
	_m_init() ;
}

function SepView(opts, svc) {
	SepEvents.apply(this) ;
	SepPromise.apply(this) ;
	this.stc = null ;
	var _e = null ;
	var _view = this ;
	var _tplname = null ;
	this.e_body = null ;
	this.e_header = null ;
	this.once = false ;
	this.down_x = 0 ;
	this.svc = svc ;
	this.opts = opts ;
	this.query = {} ;
	this.hasfirst = false ;
	this.params = {} ;
	this.location = null ;
	this.stoages = {} ;
	this.status = false ;
	this.animate_class = null ;
	this.active_once = false ;
	this.enter_once = false ;
	this.action = svc.action ;
	this.anim_name = svc.anim_name ;
	var _refresh_once = false ;
	var _baseclass = "view" ;
	this.prev = null ;
	this.m_get_class_name = function() {
		var _name = this.opts.mapping || this.opts.name ;
		return _name.replace(/\./g, "-") ;
	}
	// 提供一个获取滚动条的方法
	this.m_width = function() {
		return _e.width() ;
	}
	this.m_var_name = function() {
		return this.opts.name.replace(/\./g, "_") ;
	}
	this.m_get_ele = function() {
		return _e ;
	}
	this.m_motion = function() {
		_e.addClass('motion') ;
		return this ;
	}
	function _m_create() {
		var _e = $("<div></div>") ;
		_e.addClass(_baseclass) ; // .addClass(opts.type) ;
		_e.attr('type', opts.type) ;
		return _e ;
	}
	function _m_add() {
		var _e = _m_create() ;
		_e.appendTo(svc.m_get_ele()) ;
		if('inner' == svc.action) {
			if(opts.width) {
				if('auto' == opts.width) {
					_e.addClass('w-auto') ;
				}
				_e.width(opts.width) ;
				if('pop' == svc.anim_name) {
					_e.css({
						left : '50%',
						marginLeft : -_e.width() / 2,
						// right : 'auto',
						// bottom : 'auto'
					}) ;	
				}
			}
			if(opts.height) {
				if('auto' == opts.height) {
					_e.addClass('h-auto') ;
				}
				_e.height(opts.height) ;
				// _e.css({
				// 	top : '50%',
				// 	marginTop : -_e.offsetHeight / 2
				// }) ;
			}
		}
		return _e ;
	}
	function _m_init() {
		if('inner' == _view.action) {
			opts.type = 'inner' ;
		} else {
			opts.type = 'normal' ;
		}
		_tplname = opts.name ;
		_e = _m_add() ;
		_view.stc = new SepTplController(_view, svc) ;
	}
	/*
		重置
	*/
	this.m_reset = function() {
		_e.css({ opacity : "" }).removeClass('motion') ;
		_e.m_clear_z_index() ;
		_e.m_css3_clear_props() ;
	}
	/*
		显示
	*/
	this.m_show = function() {
		this.opts.location = window.location.href.split('#')[1] ;
		_e.addClass("on") ;
		return this ;
	}
	/*
		清除动画
	*/
	this.m_clear_anim = function() {
		if(this.animate_class) {
			_e.removeClass(this.animate_class) ;
		}
	}
	/*
		清除掉
	*/
	this.m_clear = function() {
		_e.css({
			zIndex : "",
			opacity : ""
		}).removeClass('motion') ;
		if('inner' == opts.type) {
			_e.css({
				zIndex : 200
			}) ;
		}
		if('inner' != svc.action) {
			this.m_clear_anim() ;
		}
		_e.m_css3_clear_props() ;
	}
	this.m_hide = function() {
		_e.removeClass("on") ;
		return this ;
	}
	function _m_set_tpl() {
		return _view.m_promise(function(next) {
			_view.stc.m_apply(_tplname).then(function(tpl) {
				next(tpl) ; // 使用完成
			}) ;
		}) ;
	}
	this.m_set_tpl = function(tplname) { // 设置模板
		this.stc.curr_tpl.m_hide() ;
		if("undefined" != tplname) {
			_tplname = tplname ;
		}
		return this.m_promise(function(next) {
			_m_set_tpl().then(function(tpl) {
				next() ;
			}) ;
		}) ;
	}
	this.m_downpull = function(istrigger) {
		return this.m_promise(function(next, fail) {
			// 找到滚动条
			this.stc.curr_tpl.m_downpull(istrigger).then(next).catch(function() {
				_view.m_refresh().then(next).catch(fail) ;
			}) ;
		}) ;
	}
	function _m_apply() {
		// 1、 加载默认模板
		_view.action = svc.action ;
		return _view.m_promise(function(next) {
			if(true == this.once) {
				_m_set_tpl().then(function() {
					next(_view) ;
				}) ;
			} else {
				this.m_use(new SepViewUtil(svc)) ;
				// _view.m_use(new JMiniLoading()) ;
				this.once = true ;
				this.m_on('message', function(ev, msg) {
					switch(msg.name) {
						case 'refresh' : {
							Promise.resolve(this.m_refresh()) ;
							break ;
						}
						// case 'user.login' : { // 用户登陆
						// 	var _flag = msg.params.flag ;
						// 	if(!_flag) {
						// 		Promise.resolve(this.m_refresh()) ;
						// 	} else if('2' == _flag) {
						// 		Promise.resolve(this.m_downpull()) ;
						// 	} else {
						// 		Promise.resolve(this.m_refresh()) ;
						// 	}
						// 	break ;
						// }
						case 'downpull' : { // 存在下拉摔性能
							if(this.opts.downpull) {
								var _self = this ;
								this.m_downpull().then(function() {
									
								});
							} else {
								Promise.resolve(this.m_refresh()) ; // 直接刷新
							}
							break ;
						}
					}
				}) ;
				_m_set_tpl().then(function() {
					_view.m_use(new SepViewUtil(svc)) ;
					_view.e_body = _e.find('.body') ;
					_view.e_header = _e.find('.header') ;
					return _view.m_trigger("init") ;
				}).then(function() {
					next(_view) ;
				}) ;
			}
		}) ;
	}
	function _m_query_string(query) {
		var _query_string = "" ;
		if(Object.keys(query).length) {
			for(var key in query) {
				_query_string += key + "=" + query[key] + "&" ;
			}
		}
		if(_query_string) {
			_query_string = _query_string.substring(0, _query_string.length - 1) ;
		}
		return _query_string ;
	}

	this.m_apply = function() { // 开始使用我这个视图
		this.action = svc.action ;
		var _query = svc.router.current.query ;
		if(Object.keys(_query).length) {
			this.query = _query ;	
		}
		this.params = svc.router.current.params ;
		return this.m_promise(function(next) {
			svc.m_trigger("view.apply.before", _view).then(function() {
				return _m_apply() ;
			}).then(function() {
				return svc.m_trigger("view.apply.after", _view) ;
			}).then(next) ;
		}) ;
	}
	this.m_refresh = function() { // 刷新, 实际上就是刷新模板
		return this.m_promise(function(next) {
			var _curr_tpl = this.stc.curr_tpl ;
			_curr_tpl.m_trigger("refresh", _curr_tpl).then(next) ;
		}) ;
	}
	
	this.m_refresh_type = function() { // 是否刷新
		var _refresh = _view.opts.refresh ;
		var _type = _refresh.type ;
		if("default" == _type) {
			// 重定向刷新和前进刷新
			return 1 == svc.dr || 'redirect' == svc.action ;
		} else if("loop" == _type) { // 循环刷新
			return true ;
		} else if("once" == _type) {
			if(false == _refresh_once) { // 只刷新一次
				_refresh_once = true ;
				return true ;
			} else {
				return false ;
			}
		} else {
			return true ;
		}
	}
	function __m_active() {
		return _view.m_promise(function(next) {
			if(false == _view.opts.async && (_view.m_refresh_type() || null == this.action || false == this.active_once)) { // 异步的
				// 先刷新
				_view.m_refresh().then(function() {
					next(_view) ;
				}) ;
			} else {
				next(_view) ;	
			}
		}) ;
	}
	function _m_active() {
		return _view.m_promise(function(next) {
			_e.on('focus', 'input', function() {
				$(this).blur() ; 
				return false ;
			}) ;
			this.status = true ;
			// 开始设置动画

			_e.attr('anim-class', this.anim_name) ;

			if(1 == svc.dr) {
				this.action = "push" ;
			} else if(-1 == svc.dr) {
				this.action = "back" ;
			}
			var _action = this.action ;
			if("push" == _view.action) {
				_view.m_trigger("active.push").then(function() {
					__m_active().then(next)
				}) ;
			} else {
				__m_active().then(next) ;
			}
			this.active_once = true ;
		}) ;
	}
	this.m_active = function() { // 激活一下视图
		// _view.m_get_ele().focus().find("input, textarea").attr("disable", "disable") ;
		return this.m_promise(function(next, fail) {
			svc.m_trigger("view.active.before", _view).then(function() {
				return _view.m_trigger("active") ;
			}).then(function() {
				return _m_active() ;
			}).then(function() {
				return svc.m_trigger("view.active.after", _view) ;
			}).then(function() {
				next(_view) ;
			}).catch(function(e) {
				fail(e) ;
			}) ;
		}) ;
	}
	this.m_end = function() {
		return _view.m_promise(function(next) {
			setTimeout(function() {
				_e.off('focus', 'input') ;
				// _view.m_get_ele().find("input, textarea").removeAttr("disable") ;
				next() ;
			}, 150) ;
		}) ;
	}
	function _m_enter() {
		return _view.m_promise(function(next) {
			var _action = this.action ;
			_view.m_show() ;
			if(true == _view.opts.async && (_view.m_refresh_type() || null == _action || false == this.enter_once)) { // 异步的
				// 先刷新
				next(_view) ;
				if(_view.opts.async) {
					var _downpull_config = _view.opts.downpull ;
					switch(_downpull_config.type) {
						case 'loop' : {
							_view.m_downpull() ;
							break ;
						}
						case 'once' : {
							if(!_downpull_config.once) {
								_downpull_config.once = true ;
								_view.m_downpull() ;
							} else {
								Promise.resolve(_view.m_refresh()) ;
							}
							break ;
						}
						default : {
							Promise.resolve(_view.m_refresh()) ;
							break ;
						}
					}
					
				} else {
					Promise.resolve(_view.m_refresh()) ;
				}
			} else {
				next(_view) ;
			}
			this.enter_once = true ;
		}) ;
	}
	this.m_enter = function() { // 激活一下视图
		return this.m_promise(function(next, fail) {
			svc.m_trigger("view.enter.before", _view).then(function() {
				return _view.m_trigger("enter") ;
			}).then(function() {
				return _m_enter() ;
			}).then(function() {
				return svc.m_trigger("view.enter.after", _view) ;
			}).then(function() {
				next(_view) ;
				_view.m_clear() ;
				setTimeout(function() {
					_view.status = false ;
				}, 120) ;
			}).catch(function(e) {
				fail(e) ;
			}) ;
		}) ;
	}

	this.m_frozen = function() {
		return this.m_promise(function(next, fail) {
			this.m_trigger("frozen").then(function() {
				if(-1 == svc.dr) {
					_view.m_trigger("frozen.back").then(next) ;
				} else {
					next() ;
				}
			}).catch(function(e) {
				fail(e) ;
			}) ;
		}) ;
	}
	
	/*
		释放
	*/
	this.m_release = function() {
		svc.m_release_view(opts.name) ;
	}

	this.m_leave = function() {
		return this.m_promise(function(next, fail) {
			this.m_trigger("leave").then(function() {
				_view.m_hide() ;
				if(-1 == svc.dr || 'inner' == _view.opts.type) { // 后退
					_view.m_trigger("leave.back").then(next) ;
					// 从界面中删除
					_view.m_release() ;
				} else {
					next() ;
				}
			}).catch(function(e) {
				fail(e) ;
			}) ;
		}) ;
	}
	
	this.m_exit = function() { // 退出
		this.m_reset() ;
		this.m_clear() ;
		this.m_trigger("exit") ;
		return this ;
	}
	this.m_use = function(install) {
		install.m_init(this) ;
	}
	this.m_disable_slide_back = function() {
		this.opts.slide_back = false ;
		return this ;
	}
	this.m_enable_slide_back = function() {
		this.opts.slide_back = true ;
		return this ;
	}
	_m_init() ;
}

function _m_default_value(object, prop, default_value) {
	if("undefined" == typeof object[prop]) {
		object[prop] = default_value ;
	}
}
function SepViewAnimate() {
	var _svc = null ;
	this.m_init = function(svc) {
		_svc = svc ;
		var _mode = svc.m_get_mode() ;
		svc.m_animate = function() {
			return _svc.m_promise(function(next) {
				if("redirect" == this.action) {
					if(this.prev_view) {
						this.m_exit() ;
					} 
					next(this.curr_view) ;
				} else if(this.hr_is_boundary) {
					if(this.prev_view) {
						this.prev_view.m_release() ;
					}
					next(this.curr_view) ;
				} else {
					if('inner' == this.curr_view.opts.type) {
						svc.m_show_mask() ;
					}
					if(this.prev_view && false == _svc.m_is_catch()) {
						var _curr_view = this.curr_view ;
						var _prev_view = this.prev_view ;
						var _curr_view_index = _curr_view.opts.index ;
						var _prev_view_index = _prev_view.opts.index ;
						var _e_curr_view = _curr_view.m_get_ele() ;
						var _e_prev_view = _prev_view.m_get_ele() ;
						_prev_view.m_motion() ;
						_curr_view.m_motion() ;
						if(_curr_view_index > _prev_view_index) { // 前进
							var _animate_name = null ;
							if('inner' == _curr_view.opts.type) {
								_animate_name = _curr_view.opts.anim_name || this.anim_name ;
								_curr_view.m_clear_anim() ;
								_prev_view.m_clear_anim() ;
							} else {
								_animate_name = _curr_view.opts.animate.name ;
							}
							var _curr_animate_class = "{anim.name}-forward-curr".replace('{anim.name}', _animate_name) ;
							var _prev_animate_class = "{anim.name}-forward-prev".replace('{anim.name}', _animate_name) ;
							_curr_view.animate_class = _curr_animate_class ;
							_prev_view.animate_class = _prev_animate_class ;
							_e_curr_view.addClass(_curr_animate_class) ;
							_e_prev_view.addClass(_prev_animate_class) ;
							setTimeout(function() {
								next(_curr_view) ;
							}, _e_curr_view.m_css3_duration() + 60) ;
						} else if(_curr_view_index < _prev_view_index) { // 后退
							var _animate_name = null ;
							if('inner' == _prev_view.opts.type) {
								_animate_name = this.prev_view.anim_name || this.anim_name ;
								_curr_view.m_clear_anim() ;
								_prev_view.m_clear_anim() ;
							} else {
								_animate_name = _prev_view.opts.animate.name ;
							}
							var _curr_animate_class = "{anim.name}-back-curr".replace('{anim.name}', _animate_name) ;
							var _prev_animate_class = "{anim.name}-back-prev".replace('{anim.name}', _animate_name) ;
							_prev_view.animate_class = _prev_animate_class ;
							_curr_view.animate_class = _curr_animate_class ;
							_e_curr_view.addClass(_curr_animate_class) ;
							if(_e_prev_view.hasClass('_')) {
								setTimeout(function() {
									next(_curr_view) ;
								}, _e_curr_view.m_css3_duration() + 60) ;
							} else {
								_e_prev_view.addClass(_prev_animate_class) ;
								setTimeout(function() {
									next(_curr_view) ;
								}, _e_prev_view.m_css3_duration() + 60) ;
							}
						}
					} else {
						next(this.curr_view) ;
					}
				}
			}) ;
		}
	}
}
function SepViewController(e_container) { // 视图管理器
	SepPromise.apply(this) ;
	SepEvents.apply(this) ;
	var _views = {} ;
	var _e = null ;
	var _svc = this ;
	var _defs = {
		root : "",
		vms_dir : "./vms",
		modules_dir : "./modules",
		async : true
	} ;

	var _e_mask = null ;
	var _settings = {} ;
	var _is_continue_back = false ;
	var _go = null ;
	this.html_caches = {} ; // 缓存 html
	this.router = null ;
	this.action = null ;
	this.curr_view = null ;
	this.prev_view = null ;
	this.last_view = null ;
	this.anim_name = null ;
	this.dr = null ;
	this.nav = null ; // 拿到导航条
	this.status = 0 ;
	this.h = 0 ;
	this.w = 0 ;
	var _onback = null ;
	var _preloaders = [] ;
	var _msgs = [] ;
	var _status = 0 ;
	this.hr_is_boundary = 0 ;
	var _is_ghost = false ;
	var _mode = "fluent" ;
	var _view_names = [] ;
	this.m_set_mode = function(mode) {
		_mode = mode ;
		return this ;
	}
	this.m_exit = function() { // 关闭控制器
		sessionStorage.removeItem("#last.view.opts") ;
		sessionStorage.removeItem("#last.prev.view.opts") ;
	}
	/*
		显示遮罩
	*/
	this.m_show_mask = function() {
		_e_mask.show() ;
		setTimeout(function() {
			_e_mask.addClass('on') ;
		}, 60) ;
	}
	/*
		隐藏遮罩
	*/
	this.m_hide_mask = function() {
		_e_mask.removeClass('on') ;
		setTimeout(function() {
			_e_mask.hide() ;
		}, _e_mask.m_css3_duration()) ;
	}
	this.m_release_view = function(name) { // 释放视图
		var _view = this.m_get_view(name) ;
		if(_view) {
			_view.m_get_ele().remove() ;	
			delete _views[name] ;
			_view_names.remove(name) ;
			this.m_save_view_names() ;		
		}
		return this ;
	}
	this.m_get_mode = function() {
		return _mode ;
	}
	function _onghost() {

	}
	this.m_get_ele = function() {
		return _e ;
	}
	function _m_create() {
		var _e = $("<div></div>") ;
		_e.addClass("views") ;
		return _e ;
	}

	function _m_add() {
		var _e = _m_create() ;
		_e.appendTo(e_container) ;
		_svc.w = _e.width() ;
		_svc.h = _e.height() ;
		_e_mask = $('<div></div>').addClass('ev-prevent').addClass('mask') ;
		_e_mask.appendTo(e_container) ;
		new SepSimpleTouch(_e_mask, {
			ontrigger : function() {
				if(false == _svc.curr_view.opts.modal && 'inner' == _svc.curr_view.opts.type) { // 后退
					_svc.m_back() ;
				}	
			}
		}) ;
		return _e ;
	}
	function _m_init() {
		_e = _m_add() ;
		var _mx = 0 ;
		new SepTouch(_svc.m_get_ele(), {
			onstart : function(ev, args) {
				_mx = 0 ;
			},
			onmove : function(ev, args) {
				_mx = args.move_x ;
			},
			onend : function(ev, args) {
				if(_mx < 0) {
					_svc.hr_is_boundary = true ;
				} else {
					_svc.hr_is_boundary = false ;
				}
			}
		}) ;
	}
	this.m_exit_view = function(name) { // 视图名称
		var _view = _views[name] ;
		if(_view) {
			_view.m_exit() ;
		}
		return this ;
	}
	this.m_get_view_config_from_name = function(name) {
		var _opts = null ;
		var _views = _settings.views ;
		for(var i = 0; i < _views.length; i++) {
			var _view = _views[i] ;
			if(_view.name == name || ("$root" == _view.path && name == _settings.root)) {
				_opts = _view ;
				break ;
			}
		}
		return _opts ;
	}
	function _m_convert_path(path) {
		if(path) {
			var _pos = path.indexOf('#') ;
			if(-1 != _pos) {
				path = path.substring(_pos + 1) ;
			}
			_pos = path.indexOf("/") ;
			if(-1 !== _pos) {
				path = path.substring(0, _pos) ;
			}
			_pos = path.indexOf('?') ;
			if(-1 != _pos) {
				path = path.substring(0, _pos) ;	
			}
		}
		return path ;
	}
	this.m_get_view_config_from_path = function(path) {
		var _opts = null ;
		var _views = _settings.views ;
		for(var i = 0; i < _views.length; i++) {
			var _view = _views[i] ;
			if(_m_convert_path(_view.path) == _m_convert_path(path)) {
				_opts = _view ;
				break ;
			}
		}
		return _opts ;
	}
	this.m_add_view = function(name) { // 添加视图
		// 通过名字查找
		var _opts = this.m_get_view_config_from_name(name) ;
		var _view = new SepView(_opts, this) ;
		return _view ;
	}
	this.m_get_msg = function(view, name) {
		var _msg = null ;
		for(var i = 0; i < _msgs.length; i++) {
			_msg = _msgs[i] ;
			if(_msg.view == view && _msg.name == name) {
				return true ;
			}
		}
		return false ;
	}
	/*
		压入消息
	*/
	this.m_put_msg = function(view, name, params) {
		if(!this.m_get_msg(view, name) && _views[view]) { // 视图已加载
			_msgs.push({view : view, name : name, params : params}) ;	
		}
		return this ;
	}
	this.m_force_put_msg = function(view, name, params) {
		if(!this.m_get_msg(view, name)) { // 视图已加载
			_msgs.push({view : view, name : name, params : params}) ;	
		}
		return this ;
	}
	/*
		处理消息
	*/
	function _m_pop_msg(msg) {
		return _svc.m_promise(function(next) {
			this.curr_view.m_trigger("message", msg).then(function() {
				next() ;
			}) ;
		}) ;
	}
	function _m_pop_msgs() { // 处理消息
		var _pop_msgs = [] ;
		for(var i = 0; i < _msgs.length; i++) {
			if(_msgs[i].view == _svc.curr_view.opts.name) {
				_pop_msgs.push(_msgs[i]) ;
				_msgs.splice(i, 1) ;
				i -- ;
			}
		}
		return _svc.m_promise(function(next) {
			(function _ () {
				var _msg = _pop_msgs.pop() ;
				if(_msg) {
					_m_pop_msg(_msg).then(_) ;
				} else {
					next() ;
				}
			})() ;
		}) ;
	}
	this.m_get = function(name) {
		return _views[name] ;
	}
	this.m_save_view_names = function() {
		sessionStorage.setItem('#svc.view.names#', JSON.stringify(_view_names)) ;
	}
	/*
		获取视图名称集合
	*/
	this.m_get_view_names = function() {
		var _names = sessionStorage.getItem('#svc.view.names#') ;
		if(_names) {
			_names = JSON.parse(_names) ;
		} else {
			_names = [] ;
		}
		return _names ;
	}
	this.m_get_first_viewname = function() {
		var _name = sessionStorage.getItem('#svc.first.viewname') ;
		return _name ;
	}
	this.m_get_or_add = function(name) { // 获取或者添加
		return this.m_promise(function(next) {
			var _view = _views[name] ;
			if(_view) {
				next(_view) ;
			} else {
				_view = this.m_add_view(name) ;
				_views[name] = _view ;
				if(1 == Object.keys(_views).length) {
					_view.hasfirst = true ;
				}
				next(_view) ;
				// if(('dispatch' != this.action && 'redirect' != this.action) && -1 == _view_names.indexOf(name)) {
				// 	_view_names.push(name) ;
				// 	this.m_save_view_names() ;
				// }
				// 保存配置信息
			}
			if(('dispatch' != this.action) && -1 == _view_names.indexOf(name)) {
				// 先删除
				var _config = this.m_get_view_config_from_name(name) ;
				if(!_config.fake) {
					if(this.nav.m_get(_config.path)) { // 存在
						for(var i = 0; i < _view_names.length; i++) {
							var _config = this.m_get_view_config_from_name(_view_names[i]) ;
							var _nav_item = this.nav.m_get(_config.path) ;
							if(_nav_item) { // 存在
								_view_names.splice(i, 1) ;
							}
						}
					}
				}
				_view_names.push(name) ;
				this.m_save_view_names() ;
			}
			// 开始替换
		}) ;
	}
	this.m_get_view = function(name) {
		var _v = _views[name] ;
		return _v ;
	}
	this.m_back_and_refresh = function(params) { // 上个页面刷新
		var _opts = null ;
		if(this.curr_view.prev) {
			_opts = this.curr_view.prev.opts ;
		} else {
			_opts = this.m_get_prev_view_opts() ;
		}
		if(_opts) {
			this.m_put_msg(_opts.name, 'refresh', params) ;
			this.m_back(_opts.location) ;
		} else {
			this.m_back() ;
		}
		return this ;
	}

	this.m_back_and_downpull = function(params) { // 上个页面下拉刷新
		var _opts = null ;
		if(this.curr_view.prev) {
			_opts = this.curr_view.prev.opts ;
		} else {
			_opts = this.m_get_prev_view_opts() ;
		}
		if(_opts) {
			this.m_put_msg(_opts.name, 'downpull', params) ;
			this.m_back(_opts.location) ;
		} else {
			this.m_back("$root") ;
		}
		return this ;
	}
	function _m_frozen() {
		return _svc.m_promise(function(next) {
			if(this.prev_view && 'normal' == this.curr_view.opts.type) {
				this.prev_view.m_frozen().then(function() {
					next(_svc.curr_view) ;
				}) ;
			} else if('inner' == this.curr_view.opts.type) {
				_svc.prev_view.m_show() ;
				next(_svc.curr_view) ;
			} else {
				next(_svc.curr_view) ;
			}
		}) ;
	}
	function _m_leave() {
		return _svc.m_promise(function(next) {
			if(this.prev_view) {
				if(-1 == this.dr || null == this.dr) { // 后退
					_svc.prev_view.m_leave().then(function() {
						_svc.prev_view.m_reset() ;
						next(_svc.curr_view) ;
					}) ;
				} else if(1 == this.dr && 'inner' != _svc.curr_view.opts.type) {
					_svc.prev_view.m_hide() ;
					next(_svc.curr_view) ;
				} else {
					next(_svc.curr_view) ;
				}
			} else {
				next(_svc.curr_view) ;
			}
		}) ;
	}
	function _m_animate() { // 启用动画
		return _svc.m_animate() ;
	}
	function _m_start(view) {
		return _svc.m_promise(function(next, fail) {
			this.last_view = view ;
			this.last_view.action = this.action ;
			if(0 == this.status) {
				_svc.prev_view = _svc.curr_view ;
				_svc.curr_view = view ;
				// 开始确认是前进还是后
				if(_svc.prev_view && _svc.prev_view.opts.name == _svc.curr_view.opts.name) {
					// alert("重复压入..") ;
					
				} else {
					this.status = 1 ;
					if("redirect" != _svc.action) {
						if((null == _svc.action || "push" == _svc.action || "go" == _svc.action || "back" == _svc.action || 'inner' == _svc.action) && _svc.prev_view) {
							var _prev_view_index = _svc.prev_view.opts.index ;
							var _curr_view_index = _svc.curr_view.opts.index ;
							// console.log(_svc.curr_view.opts.type, _svc.prev_view.opts.type) ;
							if(_prev_view_index < _curr_view_index) { // 前进
								_svc.dr = 1 ;
							} else if(_prev_view_index > _curr_view_index) { // 后退
								_svc.dr = -1 ;
							}
						}
						// if(1 == _svc.dr) {
						// 	_svc.curr_view.prev = _svc.prev_view ;
						// 	if(false == _svc.curr_view.opts.temp) {
						// 		_svc.m_save_prev_view_opts() ;
						// 	}
						// }
						if(_svc.prev_view) {
							if(1 == _svc.dr || ('inner' == _svc.curr_view.opts.type && 'inner' != _svc.prev_view.opts.type)) {
								_svc.curr_view.prev = _svc.prev_view ;
							}
							if('normal' == _svc.prev_view.opts.type && 1 == _svc.dr) {
								// 保存
								_svc.m_save_prev_view_opts() ;
							}
							// 从最后开始查找
							if('inner' == _svc.prev_view.opts.type && -1 == _svc.dr) {
								for(var i = _view_names.length - 1; i >= 0; i--) {
									var _name = _view_names[i] ;
									var _view = _views[_name] ;
									if(!_view) continue ;
									if('normal' == _view.opts.type) {
										_svc.prev_view = _view ;
										break ;
									} else if('inner' == _view.opts.type) {
										+ (function(view) {
											view.m_clear_anim() ;
											view.m_get_ele().addClass('{anim.name}-back-prev'.replace('{anim.name}', view.anim_name)) ;
											setTimeout(function() {
												view.m_leave() ;
											}, view.m_get_ele().m_css3_duration()) ;		
										})(_view) ;
									}
								}

								// 从最后开始查看
								// var _pos = -1 ;
								// for(var i = _view_names.length - 1; i >= 0; i--) {
								// 	var _view = _views[_view_names[i]] ;
								// 	if('normal' == _view.opts.type) {
								// 		_pos = i ;
								// 		break ;
								// 	}
								// }
								// if(-1 != _pos) {
								// 	_svc.prev_view = _views[_view_names[_pos]] ;

								// 	console.log('视图', _view_names) ;

								// 	for(var i = _pos + 1; i < _view_names.length; i++) {
								// 		var _name = _view_names[i] ;
								// 		var _view = _views[_name] ;
								// 		console.log(_name) ;
								// 		if(_view) {
								// 			+ (function(view) {
								// 				view.m_clear_anim() ;
								// 				view.m_get_ele().addClass('{anim.name}-back-prev'.replace('{anim.name}', view.anim_name)) ;
								// 				setTimeout(function() {
								// 					view.m_leave() ;
								// 					console.log('回去', view.opts.name) ;
								// 				}, view.m_get_ele().m_css3_duration()) ;		
								// 			})(_view) ;
								// 		}
								// 	}
								// }
								_svc.m_hide_mask() ;
							}
						}
						// console.log(_svc.prev_view) ;
						// if(null == _svc.action && -1 == _svc.dr && _svc.prev_view && 'inner' == _svc.prev_view.opts.type) {
						// 	var _opts = _svc.m_get_prev_view_opts() ;
						// 	_svc.prev_view = _svc.m_get_view(_opts.name) ;
						// 	// 循环处理
						// 	var _pos = _view_names.indexOf(_svc.curr_view.opts.name) ;
						// 	var _names = [] ;
						// 	for(var i = _pos + 1; i < _view_names.length - 1; i++) {
						// 		// 全部释放
						// 		_names.push(_view_names[i]) ;
						// 	}
						// 	_names.forEach(function(name) {
						// 		var _view = _views[name] ;
						// 		if(_view) {
						// 			_view.m_get_ele().addClass('{anim.name}-back-prev'.replace('{anim.name}', _view.opts.animate.name)) ;
						// 			setTimeout(function() {
						// 				_view.m_leave() ;
						// 			}, _view.m_get_ele().m_css3_duration()) ;		
						// 		}
						// 	}) ;
						// 	_svc.m_hide_mask() ;
						// }
					}
					next(view) ;
				}
			} else {
				
			}
		}) ;
	}
	/*
		视图结束
	*/
	function _m_end() {
		return _svc.m_promise(function(next) {
			if(_svc.prev_view) {
				_svc.prev_view.m_clear() ;
			}
			this.action = null ;
			this.status = 0 ;
			this.hr_is_boundary = false ;
			this.dr = null ;
			_onghost = null ;
			_is_catch = false ;
			// 判断
			_svc.m_trigger("end").then(function() {
				//  a        b          c       d      e 
				//  0        1          2       3      4
				// ghost 3
				if(_go) {
					var _name = _svc.curr_view.opts.name ;
					var _names = _view_names ;
					var _pos = _names.indexOf(_name) ;
					var _start = _pos ;
					var _end = _names.length ;
					var _view = null ;
					for(var i = _start; i < _end; i++) {
						if(_names[i] == _name) {
							continue ;
						}
						_view = _views[_names[i]] ;
						if(_view) {
							_view.m_exit() ;
						}
					}
					_name = _names[_start - 1] ;
					var _view = _svc.m_get_view(_names[_start]) ;
					if(_view && _name) {
						_svc.curr_view.prev = _views[_name] ;
					}
					_go = null ;
				}
				if(_is_continue_back) {
					_is_continue_back = false ;
					_svc.m_back() ;
				}
				if($.isFunction(_onback)) {
					_onback.call(_svc) ;
					_onback = null ;
				}
				next() ;
				var _curr_view_name = _svc.curr_view.opts.name ;
				var _last_view_name = _svc.last_view.opts.name ;
				if(_curr_view_name != _last_view_name) {
					// var _last_view = _svc.m_get(_last_view_name) ;
					// console.log('不一样..', _last_view_name) ;
					// if(_last_view) {
					// 	_svc.action = _last_view.action ;	
					// }
					_svc.action = _svc.last_view.action ;

					var _opts = _svc.m_get_view_config_from_name(_last_view_name) ;
					if("$root" == _opts.path) {
						_svc.m_apply_view(_opts.name) ;
					} else {
						_svc.m_apply_view(_last_view_name) ;
					}
				}
			}) ;
			setTimeout(function() {
				_e.addClass("on") ;
			}, app.m_get_container().m_css3_duration()) ;
		}) ;
	}
	this.once = false ;
	function _m_once() {
		if(!_svc.m_get_once()) {
			_svc.m_set_once() ;
			_svc.set_first_viewname() ;
			_svc.m_trigger("once", _svc.curr_view) ;
		}
	}
	function _m_complete() {
		return _svc.m_promise(function(next) {
			// if(!this.curr_view.opts.temp) {
				
			// } else {
			// 	next() ;
			// }
			_m_once() ;
			if(false == this.once) {
				this.once = true ;
				return this.m_trigger("complete", this.curr_view).then(function() {
					// for(var i = _preloaders.length - 1; i >= 0; i--) {
					// 	var _name = _preloaders[i] ;
					// 	_view_names.insert(0, _name) ;
					// }
					_svc.m_save_view_names() ; // 保存名称
					next() ;
				}) ;
			} else {
				next() ;
			}
		}) ;
	}

	this.set_first_viewname = function() {
		sessionStorage.setItem('#svc.first.viewname', this.curr_view.opts.name) ;
		return this ;
	}
	this.get_first_viewname = function() {
		return sessionStorage.getItem('#svc.first.viewname') ;
	}
	this.m_clear_first_viewname = function() {
		sessionStorage.removeItem('#svc.first.viewname') ;
		return this ;
	}

	this.m_get_once = function() {
		return sessionStorage.getItem('#svc.once') ;
	}
	this.m_set_once = function() {
		sessionStorage.setItem('#svc.once', 1) ;
	}
	this.m_termination = function() {
		this.status = 0 ;
		return this ;
	}
	var _is_catch = false ;

	this.m_is_catch = function() {
		return _is_catch ;
	}
	this.m_apply_view = function(name) { // 使用视图
		// 1、 use // 使用视图 ( 确定模板 )
		// 2、 active  // 激活 ( 判断异步刷新， 还是同步刷新 )
		// 3   frozen // 冻结 ( 清理工作 )
		// 4、 animate // 动画 ( 如果有 2 个以上的页面开始切换 )
		// 5、 enter // 进入 (  判断异步刷新， 还是同步刷新  )
		// 6、 leave // ；离开 ( 清理工作 )
		this.m_get_or_add(name).then(function(view) {
			return _svc.m_trigger("filter", view) ;
		}).then(function(view) {
			return _m_start(view) ;
		}).then(function(view) {
			return view.m_apply() ;
		}).then(function(view) {
			return _m_complete() ; // 初始化完成
		}).then(function() {
			return _m_frozen() ;
		}).then(function(view) {
			return view.m_active() ;
		}).then(function() {
			return _m_animate() ;
		}).then(function(view) {
			return view.m_enter() ;
		}).then(function(view) {
			return view.m_end() ;
		}).then(function() {
			return _m_pop_msgs() ;
		}).then(function() {
			return _m_leave() ;
		}).then(function() {
			return _m_end() ;
		}).catch(function(e) {
			_is_catch = true ;
			// _m_complete() ;
			_svc.m_termination() ;
			Promise.resolve(_svc.m_trigger("catch", e)) ;
			throw e ;
		}) ;
	}
	this.m_get_prev_view_opts = function() {
		var _v = sessionStorage.getItem("#prev.view.opts") ;
		if(_v) {
			return JSON.parse(_v) ;
		} else {
			return null ;
		}
	}
	this.m_save_prev_view_opts = function() {
		var _opts = this.prev_view.opts ;
		sessionStorage.setItem("#prev.view.opts", JSON.stringify(_opts)) ;
		return this ;
	}
	this.m_ghost_back = function(go, onghost) { // 幽灵后退
		if('string' == typeof go) {
			var _end = _view_names.indexOf(this.curr_view.opts.name) ;
			var _start = _view_names.indexOf(go) ;
			go = _end - _start ;
		}
		if(0 == this.status) {
			this.status = 1 ;
			_go = go ;
			// 当前这个页面需要被重置
			_is_ghost = true ;
			_onghost = onghost ;
			window.history.go(-go) ;
			// this.curr_view.prev_view
			// 重新指向
		}
		return this ;
	}
		
	/*
		无缓存后退
	*/
	this.m_nocache_back = function(name) {
		return this._m_back(name, false) ;
	}

	/*
		视图后退
	*/
	this.m_back = function(name, onback) {
		_onback = onback ;
		return this._m_back(name, true) ;
	}

	

	this._m_back = function(name, isref_cache) {
		// 检查当前的 back
		if('inner' == this.curr_view.opts.type) {
			// 当前页面关闭
			if(1 == this.status) {
				_is_continue_back = true ;
				return false ;
			} ;
			var _prev_view = this.curr_view.prev || this.prev_view ;
			this.m_apply_view(_prev_view.opts.name) ;
			this.m_dispatch(_prev_view.opts.name) ;
			if('inner' != _prev_view.opts.type) {
				_svc.m_hide_mask() ;
			}
		} else {
			var _key = isref_cache ? 'nocache-back' : 'back' ;
			var _name =  this.curr_view.stc.curr_tpl.m_get_ele().find("[{key}]".replace('{key}', _key)).attr("{key}".replace('{key}', _key)) ;
			if('undefined' == typeof name) {
				name = _name ;
			}
			this.action = "back" ;
			// 判断预加载列表是否存在
			if(-1 != _preloaders.indexOf(_m_convert_path(_name))) {
				window.history.back() ;
			} else {
				var _opts = this.m_get_view_config_from_path(name) ;
				if(_opts) {
					// 是否存在
					if(isref_cache && -1 != _view_names.indexOf(_opts.name)) { // 如果从缓存里面找到了
						window.history.back() ;
					} else {
						// 如果有上个, 就 back
						this.m_go(name) ;
					}
				} else {
					window.history.back() ;
				}
			}
		}
	}

	this.m_dispatch = function(path) {
		this.action = "dispatch" ;
		this.router.m_dispatch(path) ;
		return this ;
	}
	this.m_slidedown = function(path) {
		this.anim_name = 'slidedown' ;
		this.action = "inner" ;
		this.router.m_dispatch(path) ;
	}
	this.m_slideup = function(path) {
		this.anim_name = 'slideup' ;
		this.action = "inner" ;
		this.router.m_dispatch(path) ;
	}
	this.m_slideleft = function(path) {
		this.anim_name = 'slideleft' ;
		this.action = "inner" ;
		this.router.m_dispatch(path) ;
	}
	this.m_slideright = function(path) {
		this.anim_name = 'slideright' ;
		this.action = "inner" ;
		this.router.m_dispatch(path) ;
	}
	this.m_pop = function(path) {
		this.anim_name = 'pop' ;
		this.action = "inner" ;
		this.router.m_dispatch(path) ;
	}
	this.m_go = function(path) {
		var _opts = this.m_get_view_config_from_path(path) ;
		this.anim_name =_opts.animate.name ;
		this.action = "go" ;
		this.router.m_redirect(path) ;
		return this ;
	}
	this.m_redirect = function(path) { // 重定向
		var _opts = this.m_get_view_config_from_path(path) ;
		if(_opts && _opts.fake) {
			this.m_push(path) ;
		} else {
			this.action = "redirect" ;
			this.router.m_redirect(path) ;
		}
		return this ;
	}
	this.m_push = function(path) { // 加载页面
		var _opts = this.m_get_view_config_from_path(path) ;
		this.anim_name =_opts.animate.name ;
		this.action = "push" ;
		this.router.m_push(path) ;
		return this ;
	}
	// ['$ro' 'goods.list', 'goods.detail']
	this.m_preloader = function(path) {
		var _opts = this.m_get_view_config_from_path(path) ;
		if(_opts) {
			_preloaders.push(_opts.name) ;	
			this.router.m_preloader(path) ;
		}
		// _names.insert(0, path) ;
		// this.m_save_view_names() ;
	}
	this.m_config = function(opts) {
		_settings = $.extend(_defs, opts) ;
		_svc.router = new JRouter({
			root : _settings.root
		}) ;
		_svc.settings = _settings ;
		return this ;
	}
	function _m_to(v) { // 具体的业务处理
		if(false == _is_ghost) {
			_svc.m_apply_view(v.name) ;
		} else if(true == _is_ghost) {
			// 触发当前页面的离开事件
			_is_ghost = false ;
			if($.isFunction(_onghost)) {
				setTimeout(function() {
					_onghost.call(_svc) ;
					_svc.status = 0 ;	
				}, 30) ;
			}
		}
	}
	function _m_device() {
		var _ua = navigator.userAgent.toLowerCase() ;
		if (/iphone|ipad|ipod/.test(_ua)) {
			return "iOS" ;		
		} else if (/android/.test(_ua)) {
			return "android" ;	
		} else {
			return "pc" ;
		}
	}
	
	this.m_init = function() {
		_view_names = this.m_get_view_names() ;
		var _views = _settings.views ;
		var _async = _settings.async ;
		var _configs = {} ;
		for(var i = 0; i < _views.length; i++) {
			var _item = _views[i] ;
			_item.index = i ;
			_m_default_value(_item, "slide_back", 'pc' == app.m_get_mode() ? false : true) ;
			// _m_default_value(_item, 'temp', false) ; // 临时
			_m_default_value(_item, "type", "normal") ;
			_m_default_value(_item, "modal", true) ;
			// _m_default_value(_item, "loading_effect", true) ; // 加载特效
			_m_default_value(_item, "downpull", {
				type : null // 默认不刷新
			}) ;
			_m_default_value(_item, "uppull", null) ;
			_m_default_value(_item, "animate", {
				name : "hr"
			}) ;
			_m_default_value(_item, "refresh", {
				type : "default"
			}) ; // 前进刷新
			_m_default_value(_item, "width", '') ;
			_m_default_value(_item, "height", '') ;
			_m_default_value(_item, "path", _item.name) ;
			_m_default_value(_item, "async", _async) ;
			_m_default_value(_item, "cache_name", _item.name) ;
			_item.module_url = _settings.modules_dir + "/" + _settings.vms_dir +"/" + (_item.mapping || _item.name) + ".js" ;
			_item.html_url = _settings.modules_dir + "/" + (_item.mapping || _item.name) + ".html" ;
			this.router.m_add(_item.path, _item.name) ;
			_configs[_item.name] = _item ;
		}
		for(var key in _configs) { 
			var _item = _configs[key] ; 
			var _mapping = _item.mapping ;
			if(_mapping) {
				// 存在映射关系
				_item.cache_name = _mapping ;
				_configs[_item.mapping].cache_name = _mapping ;
			}
		}
		Promise.resolve(this.m_trigger("init")) ;
		this.router.m_to(_m_to) ;
		this.router.m_listen() ;
		this.m_use(new SepViewControllerUtil()) ;
		this.m_use(new SepComponents()) ;
		this.m_use(new SepViewAnimate()) ;
		if("pc" == app.m_get_mode()) {
//			this.m_use(new SepSlideBackSpeed()) ;
		} else {
			if("speed" == _mode) {
//				this.m_use(new SepSlideBackSpeed()) ;
			} else if("fluent" == _mode) {
//				this.m_use(new SepSlideBackFluent()) ;
			}
		}
		// 初始化完成
	}
	this.m_use = function(install) {
		install.m_init(this) ;
		return this ;
	}
	_m_init() ;
}
window.SepViewController = SepViewController ;
// 附加;
///<jscompress sourcefile="path.js" />
var Path = {
    'version': "0.8.4",
    'map': function (path) {
        if (Path.routes.defined.hasOwnProperty(path)) {
            return Path.routes.defined[path];
        } else {
            return new Path.core.route(path);
        }
    },
    'root': function (path) {
        Path.routes.root = path;
    },
    'rescue': function (fn) {
        Path.routes.rescue = fn;
    },
    'history': {
        'initial':{}, // Empty container for "Initial Popstate" checking variables.
        'pushState': function(state, title, path){
            if(Path.history.supported){
                if(Path.dispatch(path)){
                    history.pushState(state, title, path);
                }
            } else {
                if(Path.history.fallback){
                    window.location.hash = "#" + path;
                }
            }
        },
        'replaceState': function(state, title, path){
            if(Path.history.supported){
                if(Path.dispatch(path)){
                    history.replaceState(state, title, path);
                }
            } else {
                if(Path.history.fallback){
                    window.location.hash = "#" + path;
                }
            }
        },
        'popState': function(event){
            var initialPop = !Path.history.initial.popped && location.href == Path.history.initial.URL;
            Path.history.initial.popped = true;
            var _path = null ;
            if(initialPop) {
                _path = document.location.pathname ;
            } else {
                _path = document.location.hash ;                
            }
            Path.dispatch(_path) ;
        },
        'listen': function(fallback){
            Path.history.supported = !!(window.history && window.history.pushState);
            Path.history.fallback  = fallback;
            if(Path.history.supported){
                Path.history.initial.popped = ('state' in window.history), Path.history.initial.URL = location.href;
                // window.onpopstate = Path.history.popState;
                window.addEventListener("popstate", Path.history.popState) ;
            } else {
                if(Path.history.fallback){
                    for(route in Path.routes.defined){
                        if(route.charAt(0) != "#"){
                          Path.routes.defined["#"+route] = Path.routes.defined[route];
                          Path.routes.defined["#"+route].path = "#"+route;
                        }
                    }
                    Path.listen();
                }
            }
        }
    },

    'querystring' : function(url) {
        var _pos = url.indexOf("?") ;
        var _url = null ;
        if(-1 == _pos) {
            _url = url ;
        } else {
            _url = url.substring(_pos + 1) ;
        }
        var _params = _url.split("&") ;
        var _param = null ;
        var _reg = null ;
        var _rs = null ;
        var _name = null ;
        var _value = null ;
        var _query = {} ;
        for(var i = 0; i < _params.length; i++) {
            _param = _params[i].split("=") ;
            _reg = new RegExp("(^|&)" + _param[0] + "=([^&]*)(&|$)", "i") ;
            _rs = _url.match(_reg) ;
            if(null != _rs){
                _name = _param[0] ;
                _value = _rs[2] ;
                _query[_name] = decodeURI(_value) ;
            }
        }
        return _query ;
    },

    'match': function (path, parameterize) {
        var _pos = path.indexOf("?") ;
        if(-1 !== _pos) {
            var _search = path.substring(_pos) ;
            path = path.substring(0, _pos) ;
        }
        
        var params = {}, route = null, possible_routes, slice, i, j, compare;
        for (route in Path.routes.defined) {
            if (route !== null && route !== undefined) {
                route = Path.routes.defined[route];
                possible_routes = route.partition();
                for (j = 0; j < possible_routes.length; j++) {
                    slice = possible_routes[j];
                    compare = path;
                    if (slice.search(/:/) > 0) {
                        for (i = 0; i < slice.split("/").length; i++) {
                            if ((i < compare.split("/").length) && (slice.split("/")[i].charAt(0) === ":")) {
                                params[slice.split('/')[i].replace(/:/, '')] = compare.split("/")[i];
                                compare = compare.replace(compare.split("/")[i], slice.split("/")[i]);
                            }
                        }
                    }
                    if (slice === compare) {
                        if (parameterize) {
                            route.params = params;
                        }
                        return route;
                    }
                }
            }
        }
        return null;
    },
    'dispatch': function (passed_route, isupdate) {
        var previous_route, matched_route ;
        if (Path.routes.current != passed_route) {
            Path.routes.previous = Path.routes.current;
            // if(false != isupdate) {
                Path.routes.current = passed_route;    
            // }

            matched_route = Path.match(passed_route, true);
            var _path = passed_route ;
            var _pos = _path.indexOf("?") ;
            var _query = {} ;


            if(-1 !== _pos) {
                var _search = _path.substring(_pos) ;
                _path = _path.substring(0, _pos) ;
                _query = this.querystring(_search) ;
                // 解析 query
            }
            if(matched_route) {
                matched_route.query = _query ;    
            }
            if (Path.routes.previous) {
                previous_route = Path.match(Path.routes.previous);
                if (previous_route !== null && previous_route.do_exit !== null) {
                    previous_route.do_exit();
                }
            }


            if (matched_route !== null) {
                matched_route.run();
                return true;
            } else {
                if (Path.routes.rescue !== null) {
                    Path.routes.rescue();
                }
            }
        }
    },
    'listen': function () {
        var fn = function() {
            Path.dispatch(location.hash);
        }
        Path.routes.root = Path.routes.root ? Path.routes.root : "/" ;
        if (location.hash === "") {
            if (Path.routes.root !== null) {
                location.hash = Path.routes.root;
            }
        }
        // The 'document.documentMode' checks below ensure that PathJS fires the right events
        // even in IE "Quirks Mode".


        if ("onhashchange" in window && (!document.documentMode || document.documentMode >= 8)) {
            window.onhashchange = fn;
        } else {
            Path.ir = setInterval(fn, 50);
        }

        if(location.hash !== "") {
            Path.dispatch(location.hash);
        }
    },
    'core': {
        'route': function (path) {
            this.path = path;
            this.action = null;
            this.do_enter = [];
            this.do_exit = null;
            this.params = {};
            Path.routes.defined[path] = this;
        }
    },
    'routes': {
        'current': null,
        'root': null,
        'rescue': null,
        'previous': null,
        'defined': {}
    }
};
Path.core.route.prototype = {
    'to': function (fn) {
        this.action = fn;
        return this;
    },
    'enter': function (fns) {
        if (fns instanceof Array) {
            this.do_enter = this.do_enter.concat(fns);
        } else {
            this.do_enter.push(fns);
        }
        return this;
    },
    'exit': function (fn) {
        this.do_exit = fn;
        return this;
    },
    'partition': function () {
        var parts = [], options = [], re = /\(([^}]+?)\)/g, text, i;
        while (text = re.exec(this.path)) {
            parts.push(text[1]);
        }
        options.push(this.path.split("(")[0]);
        for (i = 0; i < parts.length; i++) {
            options.push(options[options.length - 1] + parts[i]);
        }
        return options;
    },
    'run': function () {
        var halt_execution = false, i, result, previous;
        if (Path.routes.defined[this.path].hasOwnProperty("do_enter")) {
            if (Path.routes.defined[this.path].do_enter.length > 0) {
                for (i = 0; i < Path.routes.defined[this.path].do_enter.length; i++) {
                    result = Path.routes.defined[this.path].do_enter[i].apply(this, null);
                    if (result === false) {
                        halt_execution = true;
                        break;
                    }
                }
            }
        }
        if (!halt_execution) {
            Path.routes.defined[this.path].action();
        }
    }
};;
///<jscompress sourcefile="router.js" />
function JRouter(opts) { // 路由器
	var _defs = {
		root : "",
		prefix : "#",
		async : false
	} ;
	var _router = this ;
	var _settings = $.extend(_defs, opts) ;
	this.current = null ;
	this.previous = null ;
	var _to = null ;
	function _m_init() {
		
	}
	function _m_convert_path(path) {
		// $root?id=1
		var _pos = path.indexOf("?") ;
		var _path = null ;
		var _search = "" ;
		if(-1 != _pos) {
			_path = path.substring(0, _pos) ;
			_search = path.substring(_pos) ;
		} else {
			_path = path ;
		}
		if(_settings.root) {
			if(-1 != _path.indexOf("$root")) {
				path = _settings.prefix + _settings.root + _search ;
			} else {
				path = _settings.prefix + _settings.root + "." + path ;	
			}
		} else {
			if(-1 != _path.indexOf("$root")) {
				path = _settings.prefix + "/" + _search ;
			} else {
				path = _settings.prefix + path ;
			}
		}
		return path ;
	}
	this.m_push = function(path) {
		Path.history.pushState(null, "", _m_convert_path(path)) ;
	}
	this.m_redirect = function(path) {
		Path.history.replaceState(null, "", _m_convert_path(path)) ;	
	}
	this.m_dispatch = function(path) {
		Path.dispatch(_m_convert_path(path)) ;
	}
	
	this.m_preloader = function(path) { // 预加载
		var _path = _m_convert_path(path) ;
		var _href = window.location.href ;
		window.history.replaceState(null, '', _path) ;
		window.history.pushState(null, '', _href) ;
		return _path ;
	}
	this.m_to = function(to) {
		_to = to ;
		return this ;
	}
	this.m_add = function(path, name) { // 添加路由
		Path.map(_m_convert_path(path)).to(function() {
			if($.isFunction(_to)) {
				var _current = {
					query : this.query,
					params : this.params,
					name : name,
					path : path
				} ;
				_to.call(_router, _current) ;
				_router.previous = _router.current ;
				_router.current = _current ;
			}
		}) ;
		return this ;
	}
	this.m_listen = function() {
		Path.history.listen() ;
		Path.listen() ;
	}
}
window.JRouter = JRouter ;;
///<jscompress sourcefile="sepui.js" />
// --------------------- 输出(end) -----------------------
// 开始开发组件

// 创建导航条
function SepTplSimpleVM(view) {
	this.m_init = function(tpl) {
		tpl.m_vm = function(opts) {
			var _vm = new SepSimpleVM(view, tpl, opts) ;
			return _vm ;
		}
	}
}

function SepImageLazy() {
	this.m_init = function(tpl) {
		if(tpl.scrolls && Object.keys(tpl.scrolls).length) {
			for(key in tpl.scrolls) {
				var _scroll = tpl.scrolls[key] ;
				var _tm = null ;
				_scroll.$el.m_on("scroll", function() {
					var _self = this ;
					clearTimeout(_tm) ;
					_tm = setTimeout(function() {
						$(_self).find(".image").each(function() {
							if($.isFunction(this.m_valid)) {
								this.m_valid() ;	
							}
						}) ;
					}, 150) ;
				}) ;
			}
		}
	}
}

function SepGlobalVM() {
	
}
SepGlobalVM.m_create = function(opts) {
	opts.data.events = new Vue() ;
	return new Vue(opts) ;
}

window.SepGlobalVM = SepGlobalVM ;

function SepSimpleVM(view, tpl, opts) {
    var _view = view ;
    var _defs = {
        el : tpl.m_get_ele().get(0),
        data : {
            renders : {
                
            }
        },
        methods : {},
        computed : {}
    } ;
    var _settings = $.extend(_defs, opts) ;
    $.extend(_settings.computed, {
        "$model" : {
        	get : function() {
        		if(this.renders && Object.keys(this.renders).length) {
                    return this.renders.default.model ;
                }
        	},
        	set : function(v) {
        		this.renders.default.model = v ;
        		return v ;
        	}
        }
    }) ;
    $.extend(_settings.data, {
    	app : app,
        forms_ : [],
        other : {
        	user : app.data.user,
        	theme_bg_class : app.data.__theme_bg_class,
        	theme_color : app.data.__theme_color,
        	theme_fg_class : app.data.__theme_fg_class,
        	theme_name : app.data.__theme_name
        },
        events : new Vue()
    }) ;
    $.extend(_settings.methods, {
        m_get_model : function(name) {
            if(_vm.renders && _vm.renders[name] && _vm.renders[name].model) {
                return JSON.parse(JSON.stringify(_vm.renders[name].model)) ;
            } else if(this.model) {
                return JSON.parse(JSON.stringify(this.model)) ;
            } else {
            	return null ;
            }
        },
        m_refresh : function() {
            // 开始刷新
            var _self = this ;
            return new Promise(function(next, fail) {
	            var _methods = [] ;
	            for(var key in _self.renders) {
	            	var _render = _self.renders[key] ;
	            	_methods.push(_render.m_refresh()) ;
	            }
	            Promise.all(_methods).then(next).catch(fail) ;
            }) ;
        },
        m_refresh_end : function() {
            if($.isFunction(this.onrefresh_end)) {
                this.onrefresh_end() ;
            }
        },
        m_get_title : function() {
        	return this.title ;
        }
    }) ;
    _view.m_on("leave.back, exit", function() {
        _vm.$emit("reset") ;
    }) ;
     _view.m_on("leave", function() {
        _vm.$emit("leave") ;
    }) ;
    _view.m_on("frozen", function() {
        _vm.$emit("frozen") ;
    }) ;
    _view.m_on("leave", function() {
        _vm.$emit("leave") ;
    }) ;
    _view.m_on("request.error", function(ev, ds) {
        if(-1 != SepRequest.codes.errors.indexOf(ds[SepRequest.keys.status]) && ds.info) {
            app.toast.m_show_text(ds.info) ; // 服务器内部错误    
        }
        if(-1 != SepRequest.codes.sessionlesses.indexOf(ds[SepRequest.keys.status])) {
        	_vm.other.user = null  ;
        	app.data.user = null ;
        }
    }) ;
    _view.m_on("request.timeout", function(ev, ds) {
        app.toast.m_show_text("请求超时,请重试") ;
    }) ;
    var _vm = new Vue(_settings) ;
    _view.vm = _vm ;
    return _vm ;
}

//function SepSlideBackSpeed() {
//	var _svc = null ;
//	var _slide_back = this ;
//	var _status = 1 ;
//	// function _m_add() {
//	// 	var _e = _m_create() ;
//	// 	_e.appendTo(_svc.m_get_ele()) ;
//	// 	return _e ;
//	// }
//	function _m_create() {
//		var _e = $("<div></div>") ;
//		_e.addClass("slide-back") ;
//		return _e ;
//	}
//	this.m_disable = function() {
//		_status = 0 ;
//	}
//	this.m_enable = function() {
//		_status = 1 ;
//	}
//	this.m_init = function(svc) {
//		_svc = svc ;
//		var _e = _m_create() ;
//		var _x = 0 ;
//		var _is_slideback = null ;
//		var _is_valid = false ;
//		new SepTouch(svc.m_get_ele(), {
//			onstart : function(ev, args) {
//				_e.appendTo(_svc.curr_view.m_get_ele()) ; // 附加到该元素
//				_is_valid = false ;
//				if(svc.hr_is_boundary) {
//					return false ;					
//				}
//				var _e_target = $(ev.target) ;
//				if(_e_target.hasClass('ev-stop') || 0 != _e_target.parents('.ev-stop').length) {
//					return false ;
//				}
//				_is_slideback = svc.curr_view.opts.slide_back  ;
//				if('hr' == svc.curr_view.opts.animate.name) {
//					_is_valid = true ;
//				}
//				if(_e_target.parents().hasClass('swiper')) {
//					_is_valid = false ;
//				}
//			},
//			onmove : function(ev, args) {
//				var _e_focus = $('*:focus', svc.curr_view.m_get_ele()) ;
//				if(_e_focus.length) return false ;
//				if(!_is_slideback) return false ;
//				if(!_is_valid) return false ;
//				if(0 == _status) return false ;
//				if(Math.abs(args.vr_distance) > 20) return false ;
//				if('left' == args.first_dr) {
//					_x = args.hr_distance ;
//					_x *= 0.85 ;
//					_x = _x >= _e.width() ? _e.width() : _x ;
//					_e.m_set_x(_x) ;
//					if(Math.abs(_x) > 5) {
//						ev.preventDefault() ;
//					}
//				}
//			},
//			onend : function(ev, args) {
//				if(!_is_slideback) return false ;
//				if(0 == _status) return false ;
//				if(!_is_valid) return false ;
//				if(0 == args.hr_distance) return false ;
//				if(_x >= _e.width()) {
//					// ok
//					svc.m_back() ;
//				}
//				_e.m_set_x(0, 300, function() { // 开始移除
//					$(this).detach() ;
//				}) ;
//				_x = 0 ;
//			}
//		}) ;
//	}
//}
/*
	滑动后退
*/
//function SepSlideBackFluent() {
//	var _svc = null ;
//	var _status = 1 ;
//	this.m_disable = function() {
//		_status = 0 ;
//	}
//	this.m_enable = function() {
//		_status = 1 ;
//	}
//	this.m_init = function(svc) {
//		var _sbs = new SepSlideBackSpeed() ;
//		_sbs.m_init(svc) ;
//		_sbs.m_disable() ;
//		_svc = svc ;
//		var _x = 0 ;
//		var _is_slideback = null ;
//		var _w = 0 ;
//		var _prev_view = null ;
//		var _curr_view = null ;
//		var _e_prev_view = null ;
//		var _e_curr_view = null ;
//		var _is_valid = false ;
//		var _is_motion = null ;
//		new SepTouch(svc.m_get_ele(), {
//			onstart : function(ev, args) {
//				_is_valid = false ;
//				if(args.down_x < 15) {
//					return false ;					
//				}
//				var _e_target = $(ev.target) ;
//				if(_e_target.hasClass('ev-stop') || 0 != _e_target.parents('.ev-stop').length) {
//					return false ;
//				}
//				_curr_view = _svc.curr_view ;
//				_prev_view = _curr_view.prev ;
//				_w = svc.curr_view.m_width() ;
//				if(_prev_view) {
//					_e_prev_view = _prev_view.m_get_ele() ;	
//					_sbs.m_disable() ;
//				} else {
//					_e_prev_view = null ;
//					_sbs.m_enable() ;
//				}
//				if('hr' != _curr_view.opts.animate.name) {
//					_is_valid = false ;
//				}
//				_e_curr_view = _curr_view.m_get_ele() ;
//				_is_slideback = svc.curr_view.opts.slide_back ;
//				_is_motion = svc.curr_view.status ; // 正在运行中
//				if('hr' == svc.curr_view.opts.animate.name) {
//					_is_valid = true ;
//				}
//				if(_e_target.parents().hasClass('swiper')) {
//					_is_valid = false ;
//				}
//			},
//			onmove : function(ev, args) {
//				if(!_is_slideback) return false ;
//				if(!_is_valid) return false ;
//				if(0 == _status) return false ;
//				if(_is_motion) return false ;
//				if(Math.abs(args.vr_distance) > 20) return false ;
//				if('left' == args.first_dr) {
//					if(_prev_view) {
//						_x = args.hr_distance ;
//						_x *= 0.85 ;
//						_x = _x <= 0 ? 0 : _x ;
//						var _v = -30 + (_x / _w) * 30 ;
//						var _opacity = 0.7 + (_x / _w) * 0.7 ;
//						var _scale = 0.95 + (_x / _w) * 0.05 ;
//						_scale = _scale >= 1 ? 1 : _scale ;
//						_prev_view.m_motion() ;
//						_e_prev_view.css({
//							zIndex : 4,
//							opacity : _opacity,
//						}) ;
//						_e_prev_view.m_set_scale(_scale, _scale) ;
//						_e_curr_view.css({
//							zIndex : 5
//						}).m_set_x(_x) ;
//						if(Math.abs(_x) > 5) {
//							ev.preventDefault() ;
//						}
//					}
//				}
//			},
//			onend : function(ev, args) {
//				if(!_is_slideback) return false ;
//				if(!_is_valid) return false ;
//				if(0 == _status) return false ;
//				if(_is_motion) return false ;
//				if(_x > 25 && (_x >= _w / 4 || (args.hr_power < -25 && 'left' == args.first_dr))) {
//					// ok 
//					_e_curr_view.addClass('_').m_set_x('100%', 300, function() {
//
//					}) ;
//					svc.m_back() ;
//				} else if(_x > 0) {
//					if(_prev_view) {
//						_e_prev_view.m_set_scale(0.95, 0.95, 150, function() {
//							_prev_view.m_reset() ;
//						}) ;
//					}
//					if(_curr_view) {
//						_e_curr_view.m_set_x(0, 150, function() {
//							_curr_view.m_reset() ;
//						}) ;
//					}
//				}
//				_x = 0 ;
//			}
//		}) ;
//	}
//}

function SepHeader(ele) {
	function _m_init() {
		$(ele).on("touchstart", function(ev) {
			// ev.preventDefault() ;
		}) ;
	}
	_m_init() ;
}

function SepFooter(ele) {
	function _m_init() {
		$(ele).on("touchstart", function(ev) {
			// ev.preventDefault() ;
		}) ;
	}
	_m_init() ;
}
/*
	全局点击
*/
function m_ui_kernel(svc) { // ui 内核
	new SepInputTouch() ;
	new SepSystemTouch() ;
	new SepClick('[click=yes],input[type=text]') ;
	new SepPowerTouch('[push],[back],[redirect],[dispatch],[go],[pop],[slideup],[slidedown],[slideleft],[slideright],[nocache-back]', {
		ontrigger : function(ev) {
			svc.util.m_to($(this)) ;
		}
	}) ;
	new SepButton('.button', function(ev) {
		
	}) ;
}

function SepTplRequest(svc) {
	this.m_init = function(tpl) {
		tpl.m_on("down.html.before", function() {
			// app.loader.m_show(300) ;
			svc.loader.shows.m_down_html() ;
		}) ;
		tpl.m_on("down.html.after", function() {
			// app.loader.m_hide() ;
			svc.loader.m_hide() ;
		}) ;
		tpl.m_on("down.module.before", function() {
			// app.loader.m_show(600) ;
			svc.loader.shows.m_down_module() ;
		}) ;
		tpl.m_on("down.module.after", function() {
			// app.loader.m_hide() ;
			svc.loader.m_hide() ;
		}) ;
	}
}

function SepTplUtil(svc) {
	var _svc = null ;
	this.m_init = function(tpl) {
		_svc = svc ;
		tpl.m_swipers_stop_autoplay = function() {
			if(this.swipers) {
				var _keys = Object.keys(this.swipers) ;
				for(var i = 0; i < _keys.length; i++) {
					var _key = _keys[i] ;
					this.swipers[_key].m_stop_autoplay() ;
				}
			}
		}
		tpl.m_submit_button = function(selector) {
			SepComponents.button.m_submit($$(selector)) ;
		}
		tpl.m_reset_button = function(selector) {
			SepComponents.button.m_reset($$(selector)) ;
			return this ;
		}
		tpl.m_swipers_start_autoplay = function() {
			if(this.swipers) {
				var _keys = Object.keys(this.swipers) ;
				for(var i = 0; i < _keys.length; i++) {
					var _key = _keys[i] ;
					this.swipers[_key].m_start_autoplay() ;
				}
			}
		}

	}
}


function SepTplHeader() {
	this.m_init = function(tpl) {
		var _e = tpl.m_get_ele().find(".header") ;
		SepHeader.apply(this, [_e]) ;
	}
}
function SepTplFooter() {
	this.m_init = function(tpl) {
		var _e = tpl.m_get_ele().find(".footer") ;
		SepFooter.apply(this, [_e]) ;
	}
}



function SepNav(svc, selector, navs, onfilter) {
	var _vm = new Vue({
		el : selector,
		data : {
			navs : navs,
			current : null,
			previous : null,
			status : 0
		},
		watch : {
			current : function() {
				var _nav = null ;
				if(this.previous) {
					_nav = this.m_get(this.previous) ;
					if(_nav._save_icon) {
						_nav.icon = _nav._save_icon ;
					}
				}
				var _config = this.m_get(this.current) ;
				if(_config) {
					if(_config.onicon) {
						_config._save_icon = _config.icon ;
						_config.icon = _config.onicon ;
					}
					this.$nextTick(function() {
						this.previous = this.current ;
						var _item = this.m_get_button(this.current) ;
						if(_item) {
							_item.removeClass("dot") ;	
						}
					}) ;
				}
				
			}
		},
		methods : {
			m_to : function(name, fake) {
				if(fake) { // 伪造的
					svc.m_push(name) ;
				} else {
					svc.m_redirect(name) ;
				}
			},
			m_filter : function(data) {
				if($.isFunction(onfilter)) {
					return onfilter.call(this, data) ;
				} else {
					return true ;
				}
			},
			m_get : function(name) {
				var _configs = this.navs ;
				for(var i = 0; i < _configs.length; i++) {
					if(_configs[i].name === name) {
						return _configs[i] ;
					}
				}
				return null ;
			},
			m_hide : function() {
				this.status = 0 ;
				var _self = this ;
				clearTimeout(this.tm) ;
                var _el = $(this.$el) ;
                if("pc" == app.m_get_mode()) {
					var _e_view_controller = svc.m_get_ele() ;
					_e_view_controller.removeClass("move") ;
				}
				_el.addClass('anim').removeClass("on").addClass("off") ;
                this.tm = setTimeout(function() {
                    _el.hide() ;
                    _el.removeClass('anim') ;
                    Promise.resolve(_self.m_trigger("hide.after")) ;
                }, _el.m_css3_duration()) ;

			},
			m_show : function() {
				this.status = 1 ;
				var _self = this ;
				clearTimeout(this.tm) ;
				var _el = $(this.$el) ;
				_el.show() ;
				if(!svc.hr_is_boundary) {
					_el.addClass('anim') ;
					setTimeout(function() {
						_el.removeClass("off") ;
						_el.addClass("on") ;
					}, 60) ;
				} else {
					_el.addClass("on") ;
				}
				// 当前视图移动
				 if("pc" == app.m_get_mode()) {
					var _e_view_controller = svc.m_get_ele() ;
					_e_view_controller.addClass("move") ;
				}
				this.tm = setTimeout(function() {
					_el.removeClass('anim') ;
					Promise.resolve(_self.m_trigger("show.after")) ;
				}, _el.m_css3_duration()) ;
			},
			m_get_button : function(name) {
				for(var i = 0; i < this.e_buttons.length; i++) {
					if(this.e_buttons.eq(i).find("input[type=radio]").val() === name) {
						return this.e_buttons.eq(i) ;
					}
				}
				return null ;
			},
			m_remove_dot : function(name) {
				var _e_button = this.m_get_button(name) ;
				if(_e_button) {
					_e_button.removeClass("dot") ;	
				}
				return this ;
			},
			m_get_height : function() {
				return $(this.$el).height() ;
			},
			m_update : function() { // 开始更新
				Vue.set(this.navs, this.navs) ;
				return this ;
			},
			m_set_dot : function(name) { // 开始设置点
				var _e_button = this.m_get_button(name) ;
				if(_e_button) {
					_e_button.addClass("dot") ;
				}
				return this ;
			},
			m_back_nav : function() { // 重置导航
				var _item = this.m_get(this.current) ;
				if(_item && _item._save_icon) {
					_item.icon = _item._save_icon ;
				}
				this.current = this.previous ;
				return this ;
			}
		},
		beforeCreate : function() {
			SepEvents.apply(this) ;
			SepPromise.apply(this) ;
		},
		mounted : function() {
			svc.nav = this ;
			var _nav = this ;
			this.e_buttons = $(this.$el).find(".button") ;
			this.e_buttons.each(function(index) {
				var _index = index ;
				this.$onclick = function() {
					var _func = navs[_index].onclick ;
					if($.isFunction(_func)) {
						var _v = _func.call(_nav, this) ;
						if(false == _v) {
							_nav.m_back_nav() ;
							$(this).children('input').prop('checked', false) ;
						}
					}
				}
			}) ;
			svc.m_on("view.active.after", function(ev, v) { // 每当视图激活结束触发
				var _path = v.opts.path ;
				var _fake = v.opts.fake ;
				// 开始处理
				if('normal' == v.opts.type) {
					
					_nav.current = _path ;
					if(_nav.m_get(_path) && !_fake) {
						_nav.m_show() ;
						v.m_get_ele().addClass("occupy-nav") ;
					} else {
						_nav.m_hide() ;
						v.m_get_ele().removeClass("occupy-nav") ;
					}
				}
				
			}) ;
			window.___sep_app.nav = this ;
		}
	}) ;
	return _vm ;
}

function PullCtrl(scroll, svc) { // 下拉控件
	var _x = 0 ;
	var _y = 0 ;
	var _self = scroll ;
	var _curr_view = svc.curr_view ;
	var _el = scroll.$el ; // 给原生扩展方法
	var _e_box = $(_el).children('.box') ;
	var _scroll = new SepScroll(scroll) ;
	var _e_downpull = _e_box.find('.downpull') ;
	var _e_downpull_logo = _e_downpull.find('.logo') ;
	var _e_uppull = _e_box.find('.uppull') ;
	var _downpull_height = _e_downpull.height() ;
	var _uppull_height = _e_uppull.height() ;
	var _e_downpull_canvas = _e_downpull.find('canvas') ;
	var _color = scroll.downpull_canvas_color || app.data.__theme_color ;
	var _downpull_cp = new CanvasProgress(_e_downpull_canvas.get(0), _color) ;
	var _status = 0 ;
	var _is_valid = false ;
	var _duration = 300 ;
	var _is_prevent = false ;
	function _m_set_y(y) {
		return new Promise(function(next) {
			$(_e_box).m_set_y(y, _duration, next) ;
		}) ;
	}
	function _m_reset_y(args) { // 重置 y
		return new Promise(function(next) {
			_downpull_cp.m_reset().then(function() {
				_self.m_trigger('reset.before', args)
			}).then(function() {
				return _m_set_y(0, _duration) ;
			}).then(function() {
				return _self.m_trigger('reset.after', args) ;
			}).then(function() {
				next() ;
			}) ;
		}) ;
	}
	function _m_process_vr_move(args) { // 处理垂直
		if(!('top' == args.first_dr || 'bottom' == args.first_dr)) return false ;
		var _is_top = _scroll.m_is_top() ;
		var _is_bottom = _scroll.m_is_bottom() ;
		var _is_top_overflow = _scroll.m_is_top_overflow() ;
		var _is_bottom_overflow = _scroll.m_is_bottom_overflow() ;
		if((_is_top && 'bottom' == args.vr_dr || _is_top_overflow) && !scroll.downpull_lock) {
			_y = args.vr_distance ;
			_y = _y * 0.4 ;
			_y = _y <= 0 ? 0 : _y ;
			_y = _y >= _e_downpull.height() ? _e_downpull.height() : _y ;
			if(!_is_top_overflow) {
				$(this).m_set_y(_y) ;	
			}
			scroll.vr_scale = _y / _e_downpull.height() ;
			scroll.vr_scale = scroll.vr_scale > 1 ? 1 : scroll.vr_scale ;
			_downpull_cp.m_to(scroll.vr_scale * 100) ;
			_e_downpull_logo.m_set_rotate(scroll.vr_scale * 180) ;
		} else if((_is_bottom && 'top' == args.vr_dr || _is_bottom_overflow) && !scroll.uppull_lock) {
			_y = args.vr_distance ;
			_y = _y * 0.4 ;
			if(!_is_bottom_overflow) {
				$(this).m_set_y(_y) ;	
			}
			scroll.vr_scale = _y / _e_uppull.height() ;
			scroll.vr_scale = scroll.vr_scale < -1 ? -1 : scroll.vr_scale ;
			scroll.vr_scale = Math.abs(scroll.vr_scale) ;
		}
		scroll.vr_scale = parseFloat(scroll.vr_scale).toFixed(2) ;

	}
	function _m_downpull() { // 处理下拉
		return new Promise(function(next) {
			_downpull_cp.m_full() ;
			_m_process_vr_task('bottom').then(next) ;
		}) ;
	}
	function _m_uppull() { // 上拉
		return new Promise(function(next) { 
			_m_process_vr_task('top').then(next) ;
		}) ;
	}
	/*
		处理水平任务
	*/
	function _m_process_vr_task(dr) {
		return new Promise(function(next) {
			_status = 1 ;
			var _to_y = 0 ;
			var _on = null ;
			switch(dr) {
				case 'bottom' : {
					_e_downpull_logo.m_set_rotate(180, _duration) ;
					_to_y = _downpull_height ;
					_on = _self.ondownpull ;
					break ;
				}
				case 'top' : {
					_to_y = -_uppull_height ;
					_on = _self.onuppull ;
					break ;
				}
			}
			_m_set_y(_to_y, _duration).then(function() {
				// 调用刷新的方法
				if('bottom' == dr) {
					_self.downpull_trigger = true ;
					return _self.m_trigger('downpull.start') ;
				} else if('top' == dr) {
					_self.uppull_trigger = true ;
					return _self.m_trigger('uppull.start') ;
				}
				// 去调用刷新的方法
			}).then(function() {
				return _on() ;
			}).then(function() {
				return new Promise(function(next) {
					setTimeout(function() {
						_m_reset_y(dr).then(next) ;
					}, 300) ;
				}) ;
			}).then(function() {
				_status = 0 ;
				if('bottom' == dr) {
					_self.downpull_trigger = false ;
					return _self.m_trigger('downpull.end') ;
				} else if('top' == dr) {
					_self.uppull_trigger = false ;
					return _self.m_trigger('uppull.end') ;
				}
			}).then(function() {
				next() ; // 处理完成
			}) ;
		}) ;
	}
	/*
		取消处理
	*/
	function _m_process_vr_cancel(args) { 
		return new Promise(function(next) {
			_status = 1 ;
			_e_downpull_logo.m_set_rotate(0, 300) ;
			_m_reset_y(args).then(function() {
				_status = 0 ;
				next() ;
			}) ;
		}) ;
	}
	function _m_process_vr_end(args) {
		_downpull_height = _e_downpull.height() ;
		if(0 == _y) return false ; // 压根没动
		if(_y >= _downpull_height) { // 
			_m_process_vr_task(args.vr_dr).then(function() {

			}) ;
		} else if(_y <= -_uppull_height) {
			_m_process_vr_task(args.vr_dr).then(function() {

			}) ;
		} else {
			_m_process_vr_cancel(args.vr_dr).then(function() {

			}) ;
		}
		_y = 0 ;
	}
	new SepTouch(_e_box, {
		e_parent : _e_box,
		onstart : function(ev, args) {
			// ev.preventDefault() ;
			_is_valid = !_status ;
			// 发送事件
			if("pc" != app.m_get_mode()) {
				if(($(ev.target).hasClass('allow-scroll') || $(ev.target).parents('.allow-scroll').length)) {
					_is_prevent = false ;
				} else {
					_is_prevent = true ;
				}
			}
			_self.m_send('touch.start') ;
		},
		onmove : function(ev, args) {
			if(_is_prevent) {
				if((_scroll.m_is_top() || _scroll.m_is_top_overflow()) && 'bottom' == args.vr_dr) {
					ev.preventDefault() ;
				} else if((_scroll.m_is_bottom() || _scroll.m_is_bottom_overflow()) && 'top' == args.vr_dr) {
					ev.preventDefault() ; 
				}
			}	
			if(!_is_valid) return false ; // 无效
			if(1 == _status) return false ;
			_m_process_vr_move.call(this, args) ;
			_self.m_send('touch.move') ;
		},
		onend : function(ev, args) {
			_m_process_vr_end.call(this, args) ;
			_self.m_send('touch.end') ;
		}
	}) ; // 简单触屏处理
	// ------------ 注入方法 -------------
	scroll.m_downpull = _m_downpull ;
	scroll.m_uppull = _m_uppull ;
}

function SepViewUtil() {
	this.m_init = function(view) {
		view.m_reset_button = function(selector) {
			SepComponents.button.m_reset($$(selector)) ;
			return this ;
		}
		view.m_submit_button = function(selector) {
			SepComponents.button.m_submit($$(selector)) ;
		}
		view.onwxshare = function() {
			return new Promise(function(next) {
				next() ;
			}) ;
		}
		// view.m_on("frozen", function() {
		// 	this.m_get_ele().find("*:focus").blur() ; // 离开焦点
		// }) ;
		// view.m_on("draws.before", function() {
		// 	if(false == this.opts.async) {
		// 		app.loader.m_show(60) ;	
		// 	}
		// }) ;
		// view.m_on("request.timeout", function() {
		// 	if(false == this.opts.async) {
		// 		app.loader.m_hide() ;
		// 	}
		// }) ;
		// view.m_on("draws.after", function() {
		// 	if(false == this.opts.async) {
		// 		app.loader.m_hide() ;
		// 	}
		// }) ;
	}
}

function SepViewControllerUtil() {
	var _svc = null ;
	this.m_init = function(svc) {
		m_ui_kernel(svc) ; // 初始化 ui 内核
		_svc = svc ;
		_svc.m_on("view.active.before", function(ev, v) {
			if(false == v.opts.async) { // 同步
			}
		}) ;
		_svc.m_on("view.enter.after", function(ev, v) {
			if(false == v.opts.async) {
				app.loader.m_hide() ;	
			} 
		}) ;
		_svc.m_on("complete", function() {
			
		}) ;
		_svc.loader = { // 加载函数集合
			shows : {
				m_down_html : function() { // 下载HTML
					if(window.__other && 'lively' == window.__other.loadtype) { // 活泼的加载
						app.loader.m_show(300) ;
					} else {
						app.toast.m_show_mini_loading(300) ; // 显示迷你加载
					}
				},
				m_down_module : function() { // 下载模块
					if(window.__other && 'lively' == window.__other.loadtype) { // 活泼的加载
						app.loader.m_show(600) ;
					} else {
						app.toast.m_show_mini_loading(600) ; // 显示迷你加载
					}
				},
				m_active : function() {
					if(window.__other && 'lively' == window.__other.loadtype) { // 活泼的加载
						app.loader.m_show(600) ;
					} else {
						app.toast.m_show_mini_loading(600) ; // 显示迷你加载
					}
				}	
			},
			m_hide : function() {
				if(window.__other && 'lively' == window.__other.loadtype) { // 活泼的加载
					app.loader.m_hide() ;
				} else {
					app.toast.m_hide() ; // 显示迷你加载
				}
			}
		} ;
		_svc.util = {
			m_to : function(e) {
				var _e = e ;
				var _push = $(_e).attr("push") ;
				var _slideup = $(_e).attr("slideup") ;
				var _slidedown = $(_e).attr("slidedown") ;
				var _slideleft = $(_e).attr("slideleft") ;
				var _slideright = $(_e).attr("slideright") ;
				var _back = $(_e).attr("back") ;
				var _nocache_back = $(_e).attr("nocache-back") ;
				var _redirect = $(_e).attr("redirect") ;
				var _dispatch = $(_e).attr("dispatch") ;
				var _pop = $(_e).attr("pop") ;
				if(_redirect) {
					svc.m_redirect(_redirect) ;
				} else if(_push) {
					svc.m_push(_push) ;
				} else if(_dispatch) {
					svc.m_dispatch(_dispatch) ;
				} else if(null != _nocache_back) {
					svc.m_nocache_back(_nocache_back) ;
				} else if(null != _back) {
					svc.m_back(_back) ;
				} else if(null != _pop) {
					svc.m_pop(_pop) ;
				} else if(null != _slideup) {
					svc.m_slideup(_slideup) ;
				} else if(null != _slidedown) {
					svc.m_slidedown(_slidedown) ;
				} else if(null != _slideleft) {
					svc.m_slideleft(_slideleft) ;
				} else if(null != _slideright) {
					svc.m_slideleft(_slideright) ;
				}
			}
		} ;
		return this ;
	}
	function _m_init() {
		$(SepRequest).on("error", function(ev, ds) { // 请求异常
			if(_svc.curr_view) {
				_svc.curr_view.m_trigger("request.error", ds) ;
			}
			_svc.m_termination() ;
			app.loader.m_hide() ;
		}) ;
		$(SepRequest).on("timeout", function(ev, ds) { // 请求异常
			if(_svc.curr_view) {
				_svc.curr_view.m_trigger("request.timeout", ds) ;
			}
			_svc.m_termination() ;
		}) ;
		$(SepRequest).on("success", function(ev, ds) {
			if(_svc.curr_view) {
				_svc.curr_view.m_trigger("request.success", ds) ;
			}
		}) ;
	}
	_m_init() ;
}

/*
	性能调优
*/
function SepTP(svc, component, opts) {
	var _defaults = {
		onstart : function() {

		},
		onend : function() {

		}
	}
	var _settings = $.extend(_defaults, opts) ;
	function _m_init() {
		component.m_recive('touch.start', _settings.onend) ;
		component.m_recive('touch.move', _settings.onend) ;
		component.m_recive('scroll.start', _settings.onend) ;
		component.m_recive('scroll.end',_settings.onstart) ;
		component.m_recive('touch.end', _settings.onstart) ;
		svc.curr_view.m_on('leave', function(ev) { // 页面离开
			_settings.onend.call(component, ev) ;
		}) ;
		svc.curr_view.m_on('enter', function(ev) {
			_settings.onstart.call(component, ev) ;
		}) ;
	}
	_m_init() ;
}

function m_dev_component(config) {
	if(config.props) {
		if(config.props) {
			if(!config.props.scope) {
				config.props.scope = {
					type : String,
					default : 'root'
				}
			}
			config.props.scope_object = {
				type : Object,
				default : null
			}
		}
	}
	if(!config.methods) {
		config.methods = {} ;
	}
	config.destroyed = function() { // 恢复现场
		if(this.name && this._object) {
			this._scope_[this.name] = this._object ;
		} else if(this.scope_object) {
			// this.scope_object.$sep = null ;
		}
	}
	config.methods.m_send = function(name, params) {
		if(this.$root.events) {
			this.$root.events.$emit(name, params) ;
		}
		return this ;
	}
	config.methods.m_recive = function(name, callback) {
		var _self = this ;
		if(this.$root) {
			this.$root.events.$on(name, function(ev) {
    			if($.isFunction(callback)) {
    				callback.call(_self, ev) ;
    			}
    		}) ;
		}
		return this ;
	}
	config.methods.m_ready = function() { // 初始化
		var _scope = null ;
		if(this.scope_object) {
			var _params = this.scope_object.params ;
			var _model = this.scope_object.model ;
			this.params = _params ? _params : {} ;
			this.model = _model ? _model : {} ;
			this.scope_object.$sep = this ;
			_scope = this ;
		} else {
			_scope = this['$' + this.scope] ;
		}
		this._scope_ = _scope ;
		if(this.name) {
            var _object = _scope[this.name] ;
            if(_object) {
            	this._object = clone(_object) ;
            	$.extend(this, _object) ;
            	_scope[this.name] = this ;
            }
        }
	}
	return Vue.extend(config) ;
}

window.PullCtrl = PullCtrl ;
window.SepNav = SepNav ;
window.SepHeader = SepHeader ;
window.SepFooter = SepFooter ;
window.SepSimpleVM = SepSimpleVM ;
window.SepTplSimpleVM = SepTplSimpleVM ;
window.SepImageLazy = SepImageLazy ;
//window.SepSlideBackSpeed = SepSlideBackSpeed ;
//window.SepSlideBackFluent = SepSlideBackFluent ;
window.SepViewControllerUtil = SepViewControllerUtil ;
window.SepViewUtil = SepViewUtil ;
window.SepTP = SepTP ;
window.m_dev_component = m_dev_component ; 
///<jscompress sourcefile="touch.js" />
// SepTouch
function SepTouch(selector, opts) { // touch 插件
	var _defaults = {
		onstart : function() {

		},
		onmove : function() {

		},
		onend : function() {

		},
		e_parent : document,
		stop : false
	} ;
	var _is_down = null ;
	var _down_x = null ;
	var _down_y = null ;
	var _move_x = null ;
	var _move_y = null ;
	var _hr_distance = null ;
	var _vr_distance = null ;
	var _temp_x = 0 ;
	var _temp_y = 0 ;
	var _hr_power = 0 ;
	var _vr_power = 0 ;
	var _vr_dr = null ;
	var _hr_dr = null ;
	var _settings = null ;
	var _e_target = null ;
	var _first_dr = null ;
	var _device = app.m_device() ;
	var _start_event_name = 'pc' == _device ? 'mousedown' : 'touchstart' ;
	var _move_event_name = 'pc' == _device ? 'mousemove' : 'touchmove' ;
	var _end_event_name = 'pc' == _device ? 'mouseup' : 'touchend' ;
	function _m_get_point(ev, ele) {
		var _ev = event ;
		var _x = 0;
		var _y = 0 ;
		if(_ev.touches && _ev.touches.length) {
			_x = _ev.touches[0].pageX ;
		} else {
			_x = _ev.clientX ;
			// _x = _x <= 0 ? 0 : _x ;
			// _x = _x >= $(ele).width() ? $(ele).width() : _x ;
		}
		if(_ev.touches && _ev.touches.length) {
			_y = _ev.touches[0].pageY ;
		} else {
			_y = _ev.clientY ;
			// _y = _y <= 0 ? 0 : _y ;
			// _y = _y >= $(ele).height() ? $(ele).height() : _y ;
		}
		return {
			x : _x,
			y : _y
		}
	}
	function _m_reset() {
		_first_dr = null ;
		_vr_dr = null ;
		_hr_dr = null ;
		_is_down = false ;
		_temp_x = 0 ;
		_move_y = 0 ;
		_down_x = 0 ;
		_down_y = 0 ;
		_move_x = 0 ;
		_move_y = 0 ;
		_hr_distance = 0 ;
		_vr_distance = 0 ;
		_hr_power = 0 ;
		_vr_power = 0 ;
	}

	var _eles = [] ;

	function _m_init() { // 初始化
		var _e = null ;
		_settings = $.extend(_defaults, opts) ;
		if('object' == typeof selector) {
			_e_target = selector ;
			_settings.e_parent = _e_target ;
		} else {
			_e_target = null ;
		}
		$(_settings.e_parent).on(_start_event_name, selector, function(ev) {
			if(2 == ev.button) return true ;
			if(_settings.stop) {
				ev.stopPropagation() ;
			}
			_e = _e_target || this ;
			var _point = _m_get_point(ev, _e) ;
			_down_x = _point.x ;
			_down_y = _point.y ;
			_temp_x = _down_x ;
			_temp_y = _down_y ;
			// 按下
			_is_down = true ;
			_settings.onstart.call(_e, ev, {
				down_x : _down_x,
				down_y : _down_y
			}) ;
		}) ;
		$(document).on(_move_event_name, function(ev) {
			if(!_is_down) return true ;
			if(!_e) return true ;
			var _point = _m_get_point(ev, _e) ;
			_move_x = _point.x ;
			_move_y = _point.y ;
			_hr_distance = _move_x - _down_x ;
			_vr_distance = _move_y - _down_y ;
			_hr_power = _temp_x - _move_x ;
			_vr_power = _temp_y - _move_y ;
			_temp_x = _move_x ;
			_temp_y = _move_y ;
			if(_hr_distance > 0) {
				_hr_dr = 'left' ;
			} else if(_hr_distance < 0) {
				_hr_dr = 'right' ;
			}
			if(_vr_distance > 0) {
				_vr_dr = 'bottom' ;
			} else if(_vr_distance < 0) {
				_vr_dr = 'top' ;
			}
			if(null == _first_dr) {
				if(_hr_distance > 10) {
					_first_dr = 'left' ;	
				} else if(_hr_distance < -10) {
					_first_dr = 'right' ;	
				} else if(_vr_distance > 10) {
					_first_dr = 'bottom' ;	
				} else if(_vr_distance < -10) {
					_first_dr = 'top' ;	
				}
			}
			_settings.onmove.call(_e, ev, {
				down_x : _down_x,
				down_y : _down_y,
				move_x : _move_x,
				move_y : _move_y,
				hr_distance : _hr_distance,
				vr_distance : _vr_distance,
				hr_power : _hr_power,
				vr_power : _vr_power,
				hr_dr : _hr_dr,
				vr_dr : _vr_dr,
				first_dr : _first_dr
			}) ;
		}) ;
		$(document).on(_end_event_name, function(ev) {
			if(!_is_down) return true ;
			if(!_e) return true ;
			_settings.onend.call(_e, ev, {
				down_x : _down_x,
				down_y : _down_y,
				move_x : _move_x,
				move_y : _move_y,
				hr_distance : _hr_distance,
				vr_distance : _vr_distance,
				hr_power : _hr_power,
				vr_power : _vr_power,
				hr_dr : _hr_dr,
				vr_dr : _vr_dr,
				first_dr : _first_dr
			}) ;
			_e = null ;
			_m_reset() ;
		}) ;
	}
	_m_init() ;
}

function SepPowerTouch(selector, opts) {
	var _defaults = {
		ontrigger : function() {

		},
		oncancel : function() {

		},
		onactive : function() {

		},
		e_parent : document
	} ;
	var _tm = null ;
	var _is_cancel = false ;
	var _settings = $.extend(_defaults, opts) ;
	var _hr_distance = null ;
	var _vr_distance = null ;
	var _scroll = null ;
	function _m_reset() {
		_hr_distance = 0 ;
		_vr_distance = 0 ;
	}
	function _m_check() {
		var _e_scroll = $(this).parents('.scroll').get(0) ;
		if(_e_scroll) {
			_scroll = $(_e_scroll).prop('$sep') ;
			var _current_scroll_top = _scroll.m_get_scroll_top() ;
			var _ir = setInterval(function() {
				if(_current_scroll_top == _scroll.m_get_scroll_top()) {
					_m_reset() ;
					clearInterval(_ir) ;
				} else {
					_current_scroll_top = _scroll.m_get_scroll_top() ;
				}
			}, 450) ;
		} else {
			_m_reset() ;
		}
	}
	new SepTouch(selector, {
		stop : _settings.stop,
		e_parent : _settings.e_parent,
		onstart : function(ev) {
			if($(this).hasClass('disable')) {
				_is_cancel = true ;
				return false ;
			}
			var _self = this ;
			_is_cancel = false ;
			if(Math.abs(_hr_distance) > 10 || Math.abs(_vr_distance) > 10) {
				_is_cancel = true ;
			}
			_m_check.call(this) ;
			clearTimeout(_tm) ;
			_tm = setTimeout(function() {
				if(!_is_cancel) {
					_settings.onactive.call(_self, ev) ;	
				}
			}, 150) ;
		},
		onmove : function(ev, args) {
			if(Math.abs(args.hr_distance) > 4 || Math.abs(args.vr_distance) > 5) { // 取消
				clearTimeout(_tm) ;
				_is_cancel = true ;
				_settings.oncancel.call(this, ev) ;
			}
		},
		onend : function(ev, args) {
			_hr_distance = args.hr_distance ;
			_vr_distance = args.vr_distance ;
			_m_check.call(this) ;
			clearTimeout(_tm) ;
			if(_is_cancel) return false ;
			_settings.ontrigger.call(this, ev) ;
		}
	}) ;
}

function SepSimpleTouch(selector, opts) {
	var _defaults = {
		callback : function() {

		},
		ontrigger : function() {

		},
		oncancel : function() {

		},
		onactive : function() {

		},
		e_parent : document
	} ;
	var _settings = $.extend(_defaults, opts) ;
	new SepPowerTouch(selector, {
		stop : _settings.stop,
		e_parent : _settings.e_parent,
		onactive : function(ev) {
			_settings.onactive.call(this, ev) ;
		},
		oncancel : function(ev) {
			_settings.oncancel.call(this, ev)
		},	
		ontrigger : function(ev) {
			var _e = this ;
			var _result = _settings.ontrigger.call(this, ev) ;
			function _m() {
				if($.isFunction(_e.$method)) {
					_e.$method.call(_e, ev) ;	
				}
				if($.isFunction(_e.$onclick)) {
					_e.$onclick.call(_e, ev) ;
				}
				if($.isFunction(_settings.callback)) {
					_settings.callback.call(_e, ev) ;	
				}
			}
			if(_result && $.isFunction(_result.then)) {
				_result.then(function() {
					_m() ;
				}) ;
			} else {
				_m() ;
			}
		}
	}) ;
}

function _m_device() { // 判断设置
    var _ua = navigator.userAgent.toLowerCase() ;	
	if (/iphone|ipad|ipod/.test(_ua)) {
		return "iOS" ;		
	} else if (/android/.test(_ua)) {
		return "android" ;	
	} else {
		return "pc" ;
	}
}

var _e_current_focus = null ;
$('body').on('focus', 'input, textarea', function(e) {
	_e_current_focus = $(this) ;
}) ;

/*
	处理用户点击操作
*/
function SepButton(selector, callback) {
	new SepSimpleTouch(selector, {
		callback : callback,
		// stop : true,
		onactive : function(ev) {
			$(this).removeClass('active').addClass('active') ;
		},
		oncancel : function() {
			$(this).removeClass('active') ;
		},	
		ontrigger : function(ev) {
			if(!$(this).hasClass('active')) {
				$(this).addClass('active') ;
			}
			var _e = this ;
			return new Promise(function(next) {
				var _duration = $(_e).m_css3_duration() ;
				setTimeout(function() {

					setTimeout(function() {
						$(_e).removeClass('active') ;
					}, _duration / 2) ;
					var _e_checkboxs = $(_e).find('input[type=checkbox]');
					var _e_radios = $(_e).find('input[type=radio]') ;
					$(_e).trigger('__click') ;
					_e_checkboxs.trigger('click') ; // 单击复选框
					_e_radios.trigger('click') ; // 单击单选框
					// if('pc' != _m_device()) {
					var _e_files = $(_e).find('input[type=file]') ;
					var _e_selects = $(_e).find('select') ;
					_e_files.trigger('click') ; // 选择文件
					_e_selects.trigger('click') ; // 单击选择框
					// }
					// $('input,textarea').blur() ;
					if(null != _e_current_focus) {
						_e_current_focus.blur() ;
						_e_current_focus = null ;
					}
					next() ;
				}, _duration / 2) ;
			}) ;
		}
	}) ;
}

/*
	处理用户点击操作
*/
function SepClick(selector, callback) {
	new SepSimpleTouch(selector, {
		callback : callback,
		ontrigger : function(ev) {
			var _e = this ;
			return new Promise(function(next) {
				next() ;
			}) ;
		}
	}) ;
}
function SepInputTouch() {
	var _selector = 'input,select,textarea' ;
	new SepSimpleTouch(_selector, {
		stop : true,
		ontrigger : function(ev) {
//			ev.preventDefault() ;
			var _e = this ;
			return new Promise(function(next) {
				next() ;
//				_e.focus() ;
			}) ;
		}
	}) ;
	// new SepSimpleTouch('body', {
	// 	// stop : true,
	// 	ontrigger : function(ev) {
	// 		var _e = ev.target ;
	// 		// if(0 == $(_e).filter('input, textarea').length) {
	// 		// 	$('input, textarea').blur() ;
	// 		// }
	// 	}
	// }) ;
}

function SepSystemTouch() {
	var _selector = '.ev-stop, .ev-prevent, .item.field' ;
	new SepTouch(_selector, {
		// stop : true,
		onstart : function(ev) {
			if($(this).hasClass('ev-stop')) {
				ev.stopPropagation() ;
			}
			if($(this).hasClass('ev-prevent')) {
				ev.preventDefault() ;
			}
			if($(this).hasClass('item') && $(this).hasClass('field')) {
				$(this).find('input').focus() ;
			}
		}
	}) ;
}

window.SepButton = SepButton ;
window.SepSimpleTouch = SepSimpleTouch ;
window.SepTouch = SepTouch ;
window.SepSystemTouch = SepSystemTouch ;
;
///<jscompress sourcefile="filters.js" />
Vue.filter('date', function(value, args) {
	if(value) {
		if('string' == typeof value) {
			value = value.replace(/\-/g, '/') ;
		}
		return new Date(value).format(args) ;	
	} else {
		return value ;
	}
}) ;


/*
	转换 int 类型
*/
Vue.filter('int', function(value) {
	return parseInt(value) ;
}) ;
;
///<jscompress sourcefile="components.js" />
define(function(require, exports, module) {
	function _m_load_js(js) {
		return new Promise(function(next) {
			seajs.use([js], next) ;
		}) ;
	}
	function _m_device() { // 判断设置
	    var _ua = navigator.userAgent.toLowerCase() ;	
		if (/iphone|ipad|ipod/.test(_ua)) {
			return 'iOS' ;		
		} else if (/android/.test(_ua)) {
			return 'android' ;	
		} else {
			return 'pc' ;
		}
	}
    _m_load_js('templates').then(function(tpls) {
	    ; (function() {
		    $.fn.$click = function(onclick) {
		        return this.each(function() {
		            this.m_reciveclick = onclick ;
		        }) ;
		    }
		    function m_func(method, args, object, event) {
		        return new Promise(function(next, fail) {
		            if($.isFunction(method)) {
		                var _v = method.call(object, args, event) ;
		                if(_v && _v.then) {
		                    _v.then(function() {
		                        next(_v) ;
		                    }).catch(fail) ; 
		                } else {
		                    next(_v) ;
		                }
		            } else {
		                next() ;
		            }
		        }) ;
		    }
		    window.m_func = m_func ;
		    // 组件功能： 自动填充界面状态
		    
		})() ;
		function SepLoader(e_container, opts) {
		    var _e = null ;
		    var _e_mask = null ;
		    var _e_box = null ;
		    var _tm = null ;
		    function _m_add() {
		        var _e = _m_create() ;
		        _e.appendTo(e_container) ;
		        return _e ;
		    }
		    function _m_create() {
		        return $(tpls.loader) ;
		    }

		    function _m_show() {
		    	_e.addClass('on') ;
		        _e_box.addClass('on') ;
		    }
		    this.m_show = function(sleep) {
		    	clearTimeout(_tm) ;
		    	if(sleep) { // 存在
		    		_tm = setTimeout(function() {
		    			_m_show() ;
		    		}, sleep) ;
		    	} else {
		    		_m_show() ;
		    	}
		    }
		    this.m_hide = function() {
		    	clearTimeout(_tm) ;
		        _e_box.removeClass('on') ;
		        _tm = setTimeout(function() {
		            _e.removeClass('on') ;    
		        }, _e_box.m_css3_duration()) ;
		    }
		    function _m_init() {
		        _e = _m_add() ;
		        _e_mask = _e.find('.mask') ;
		        _e_box = _e.find('.box') ;
		    }
		    _m_init() ; // 初始化
		}
		function SepNotifySuper(e_container) {
			var _notify = null ;
		    this.m_show_ok = function(text, content, isautohide) {
		    	_notify = new SepNotify(e_container) ;
		        return _notify.m_show_ok(text, content, isautohide) ;
		    }
		    this.m_show_no = function(text, content, isautohide) {
		    	_notify = new SepNotify(e_container) ;
		        return _notify.m_show_no(text, content, isautohide) ;
		    }
		    this.m_show_warn = function(text, content, isautohide) {
		    	_notify = new SepNotify(e_container) ;
		        return _notify.m_show_warn(text, content, isautohide) ;
		    }
		    this.m_hide = function() {
		    	if(_notify) {
		    		_notify.m_hide() ;	
		    	}
		    	return this ;
		    }
		}
		function SepToastSuper(e_container) {
			var _toast = null ;
		    this.m_show_text = function(text, icon) {
		    	_toast = new SepToast(e_container) ;
		        return _toast.m_show_text(text, icon) ;
		    }
		    this.m_show_ok = function(text) {
		    	_toast = new SepToast(e_container) ;
		        return _toast.m_show_ok(text) ;
		    }
		    this.m_show_no = function(text) {
		    	_toast = new SepToast(e_container) ;
		        return _toast.m_show_no(text) ;
		    }
		    this.m_hide = function() {
		    	if(_toast) {
		    		_toast.m_hide() ;	
		    	}
		    	return this ;
		    }
		    this.m_set_text = function(text) {
		    	_toast.m_set_text(text) ;
		    }
		    this.m_show_loading = function(text, sleep) {
		    	_toast = new SepToast(e_container) ;
		    	return _toast.m_show_loading(text, sleep) ;
		    }
		    this.m_show_mini_loading = function(sleep) {
		    	_toast = new SepToast(e_container) ;
		    	return _toast.m_show_mini_loading(sleep) ;	
		    }

		    this.m_show_warn = function(text) {
		    	_toast = new SepToast(e_container) ;
		        return _toast.m_show_warn(text) ;
		    }
		}
		function SepModalSuper(e_container) {
			var _modal_super = this ;
			this.status = null ;
		    this.m_alert = function(title, content, onok, oktext) {
		    	if('alert' != this.status) {
		    		this.status = 'alert' ;
		    		this.modal = new SepModal(e_container).m_alert(title, content, onok, oktext) ;
		    		this.modal.onhide_before = function() {
		    			_modal_super.status = null ;
		    		}
		    		return this.modal ;
		    	}
		    }
		    this.m_error = function(title, err) {
		    	if(-1 == SepRequest.codes.errors.indexOf(err[SepRequest.keys.status])) {
		    		app.modal.m_alert(title, err[SepRequest.keys.info]) ;
		    	}
		    }
		    this.m_confirm = function(title, content, onok, onno, oktext, notext) {
		    	if('confirm' != this.status) {
		    		this.status = 'confirm' ;
		    		this.modal = new SepModal(e_container).m_confirm(title, content, onok, onno, oktext, notext) ;	
		    		this.modal.onhide_before = function() {
		    			_modal_super.status = null ;
		    		}
		    		return this.modal ;
		    	}
		    }
		    this.m_editor = function(title, type, value, place, onok, onno, oktext, notext) { // 编辑器
		    	if('editor' != this.status) {
		    		this.status = 'editor' ;
		    		this.modal = new SepModal(e_container).m_editor(title, type, value, place, onok, onno, oktext, notext) ;	
		    		this.modal.onhide_before = function() {
		    			_modal_super.status = null ;
		    		}
		    		return this.modal ;
		    	}
		    }
		}
		function SepToast(e_container) { // toast 效果
		    var _e = null ;
		    var _e_box = null ;
		    var _e_mask = null ;
		    var _toast = this ;
		    var _e_i = null ;
		    var _e_text = null ;
		    var _tm = null ;
		    var _self = this ;
		    var _tm = null ;
		    var _e_loader = null ;
		    function _m_add() {
		        var _e = _m_create() ;
		        _e.appendTo(e_container) ;
		        return _e ;
		    }
		    function _m_create() {
		        return $(tpls.toast) ;
		    }
		    this.m_hide = function() {
		    	clearTimeout(_tm) ;
		        _e_box.removeClass('on') ;
		        setTimeout(function() {
		        	_e.remove() ;
		        	_e.removeClass('on') ;
		        	if($.isFunction(_self.onhide)) {
			            _self.onhide() ;
			        }
		        }, _e_box.m_css3_duration()) ;
		        this.onhide = function() {
		        	
		        }
		    }
		    this.onhide = function() {

		    }
		    this.m_set_text = function(text) {
		    	_e_text.text(text) ;
		    	return this ;
		    }
		    this.m_show_loading = function(text, sleep) {
		    	_tm = setTimeout(function() {
		    		_e.addClass('on') ;
			    	_e_box.addClass('on') ;
			        _e_mask.hide() ;
			        _e.addClass('loading')
			        _e_text.text(text) ;
			        _e_loader = $("<em class = 'loader'></em>") ;
			        _e_loader.insertBefore(_e_text) ;
		    	}, sleep) ;
		    }
		    this.m_show_mini_loading = function(sleep) {
		    	_tm = setTimeout(function() {
		    		_e.addClass('on') ;
			    	_e_box.addClass('on') ;
			        _e_mask.hide() ;
			        _e.addClass('mini') ;
			        _e.addClass('loading')
			        _e_loader = $("<em class = 'loader'></em>") ;
			        _e_loader.appendTo(_e_box) ;
		    	}, sleep) ;
		    }
		    this.m_show_text = function(text, icon) {
		        _e.addClass('on') ;
		        _e_box.addClass('on') ;
		        _e_mask.hide() ;
		        _e.addClass('mini') ;
		        _e_i.addClass(icon) ;
		        _e_text.text(text) ;
		        _tm = setTimeout(function() {
		            _toast.m_hide() ;
		        }, 2000) ;
		        return this ;
		    }
		    function _m_show_media(text) {
		        clearTimeout(_tm) ;
		        _e.addClass('on') ;
		        _e_mask.hide() ;
		        _e_box.addClass('on') ;
		        _e.addClass('media') ;
		        _e_text.text(text) ;
		        _tm = setTimeout(function() {
		            _toast.m_hide() ;
		        }, 2000) ;
		    }
		    this.m_show_ok = function(text) {
		        _m_show_media(text) ;
		        _e_i.addClass('ok') ;
		    }
		    this.m_show_no = function(text) {
		        _m_show_media(text) ;
		        _e_i.addClass('no') ;
		    }
		    this.m_show_warn = function(text) {
		        _m_show_media(text) ;
		        _e_i.addClass('warn') ;
		    }
		    function _m_init() {
		        _e = _m_add() ;
		        _e_mask = _e.find('.mask') ;
		        _e_box = _e.find('.box') ;
		        _e_i = _e.find('i') ;
		        _e_text = _e.find('small') ;

		    }
		    _m_init() ;
		}
		window.SepToast = SepToast ;

		SepNotify.status = 0 ;
		SepNotify.queue = [] ;
		/*
			创建通知
		*/
		function SepNotify(e_container) {
			var _e = null ;
			var _e_title = null ;
			var _e_content = null ;
			var _e_icon = null ;
			var _e_close = null ;
			var _e_notifys = null ;
			function _m_create() { // 创建
		        return $(tpls.notify) ;
		    }
		    function _m_add() { // 添加
		        var _e = _m_create() ;
		        _e.appendTo(e_container) ;
		        _e_icon = _e.find('.media i') ;
		        _e_title = _e.find('.title') ;
		        _e_content = _e.find('.content') ;
		        _e_close = _e.find('.close') ;
		        _e_close[0].$onclick = function() {
		        	_m_hide() ;
		        }
		        return _e ;
		    }
		    function _m_init() {
		    	_e_notifys = $('.notify') ;
		        _e = _m_add() ;
		    }
		    this.m_hide = function() {
		    	_m_hide() ;
		    }
		    function _m_hide() {
		    	_e.removeClass('on').addClass('off') ;
		    	setTimeout(function() {
		    		_e.remove() ;
		    	}, _e.m_css3_duration())
		    }
		    function _m_show(isautohide) {
		    	// 设置位置
		    	function _m() {
		    		SepNotify.status = 1 ;
		    		_e_notifys.css({
		    			'bottom' : '+=' + _e.height() + 'px'
		    		}) ;
		    		setTimeout(function() {
		    			_e.addClass('on') ;
		    			setTimeout(function() {
		    				if(SepNotify.queue.length) {
		    					SepNotify.queue.shift()() ;	
		    				} else {
		    					SepNotify.status = 0 ;
		    				}
		    			}, _e.m_css3_duration() + 60) ; // 完全显示
		    		}, 60) ;
			    	if(false != isautohide) {
			    		setTimeout(function() {
			    			_m_hide() ;
			    		}, 3000) ;
			    	}
		    	}

		    	if(0 == SepNotify.status) { // 没数据
		    		_m() ;
		    	} else {
		    		SepNotify.queue.push(_m) ; // 添加到队列
		    	}
		    	
		    }
		    this.m_show_ok = function(title, content, isautohide) {
		    	_e.addClass('ok') ;
		    	_e_title.text(title) ;
		    	_e_icon.addClass('icon-roundcheckfill') ;
		    	_e_content.text(content) ;
		    	_m_show(isautohide) ;

		    	return this ;
		    }
		    this.m_show_warn = function(title, content, isautohide) { 
		    	_e.addClass('warn') ;
		    	_e_title.text(title) ;
		    	_e_icon.addClass('icon-infofill') ;
		    	_e_content.text(content) ;
		    	_m_show(isautohide) ;
		    	return this ;
		    }
		    this.m_show_no = function(title, content, isautohide) {
		    	_e_title.text(title) ;
		    	_e.addClass('no') ;
		    	_e_icon.addClass('icon-infofill') ;
		    	_e_content.text(content) ;
		    	_m_show(isautohide) ;
		    	return this ;
		    }
		    _m_init() ;

		}

		function SepModal(e_container) {
		    var _e = null ;
		    var _e_mask = null ;
		    var _e_box = null ;
		    var _e_buttons = null ;
		    var _e_title = null ;
		    var _e_content = null ;
		    var _modal = this ;
		    function _m_create() { // 创建
		        return $(tpls.modal) ;
		    }

		    function _m_create_button() {
		        return $("<a class = 'button'></a>") ;
		    }

		    function _m_add_button(onclick) {
		        var _e = _m_create_button() ;
		        _e.appendTo(_e_buttons) ;
		        _e[0].$onclick = function() {
		            _modal.m_hide() ;
		             if($.isFunction(onclick)) {
		                onclick() ;
		             }
		        }
		        return _e ;
		    }

		    this.m_alert = function(title, content, onok, oktext) {
		    	_status = 1 ;
		        _e.addClass('on') ;
		        _e_title.text(title) ;
		        _e_content.text(content) ;
		        var _e_button = _m_add_button(onok) ;
		        _e_button.text(oktext ? oktext : '确定') ;
		        _e_button.addClass('bold') ;
		        setTimeout(function() {
		            _e_mask.addClass('on') ;
		            _e_box.addClass('on') ;
		        }, 60) ;
		        return this ;
		    }

		    function _m_create_input(type) {
		        return $('<input />') ;
		    }
		    
		    this.m_editor = function(title, type, value, place, onok, onno, oktext, notext) {
		        _e.addClass('on').addClass('editor') ;
		        _e_title.text(title) ;
		        var _e_input = _m_create_input() ;
		        _e_input.attr('type', type).val(value).attr('placeholder', place) ;
		        _e_input.appendTo(_e_content) ;
		        var _e_button_no = _m_add_button(onno) ;
		        var _e_button_ok = _m_add_button(function() {
		            if($.isFunction(onok)) {
		                onok(_e_input.val()) ;    
		            }
		        }) ;
		        _e_button_ok.text(oktext ? oktext : '确定') ;
		        _e_button_no.text(notext ? notext : '取消') ;
		        _e_button_ok.addClass('bold') ;
		        setTimeout(function() {
		            _e_mask.addClass('on') ;
		            _e_box.addClass('on') ;
		        }, 60) ;
		        return this ;
		    }

		    this.m_confirm = function(title, content, onok, onno, oktext, notext) {
	       		_e.addClass('on') ;
		        _e_title.text(title) ;
		        _e_content.text(content) ;
		        var _e_button_no = _m_add_button(onno) ;
		        var _e_button_ok = _m_add_button(onok) ;
		        _e_button_ok.text(oktext ? oktext : '确定') ;
		        _e_button_no.text(notext ? notext : '取消') ;
		        _e_button_ok.addClass('bold') ;
		        setTimeout(function() {
		            _e_mask.addClass('on') ;
		            _e_box.addClass('on') ;
		        }, 60) ;
		        return this ;
		    }

		    this.m_hide = function() {
		        _e_mask.removeClass('on').addClass('off') ;
		        _e_box.removeClass('on').addClass('off') ;
		        var _self = this ;
		    	if($.isFunction(this.onhide_before)) {
		        	this.onhide_before() ;
		        }
		        setTimeout(function() {
		            _e.removeClass('on') ;
		            _e.remove() ;
		            if($.isFunction(_self.onhide_after)) {
			        	_self.onhide_after() ;
			        }
		        }, _e_box.m_css3_duration()) ;
		        return this ;
		    }

		    function _m_add() { // 添加
		        var _e = _m_create() ;
		        _e.appendTo(e_container) ;
		        return _e ;
		    }

		    function _m_init() {
		        _e = _m_add() ;
		        _e_title = _e.find('.title') ;
		        _e_content = _e.find('.content') ;
		        _e_mask = _e.find('.mask') ;
		        _e_box = _e.find('.box') ;
		        _e_buttons = _e.find('.buttons') ;
		        
		        // $(document).on('keypress', function(ev) {
		        // 	if(13 == ev.keyCode) { // 确定
		        // 		var _e_button = _e_buttons.find('.bold') ;
		        // 		if(_e_button.length) {
		        // 			_e_button[0].$onclick() ;
		        // 		} else {
		        // 			_modal.m_hide() ;
		        // 		}
		        // 	}
		        // }) ;
		    }
		    _m_init() ;
		}
		window.SepModal = SepModal ;

		function SepComponents() {
			var _svc = null ;
			SepComponents.button = {
				m_reset : function(element) {
					var _el = $(element) ;
					if(_el.length && $.isFunction(_el.get(0).m_reset)) {
						_el.get(0).m_reset() ;
					}
					return this ;
				},
				m_submit : function(element) {
					var _el = $(element) ;
					if(_el.length && $.isFunction(_el.get(0).m_submit)) {
						_el.get(0).m_submit() ;
					}
					return this ;
				},
				m_filter : function(e, ev) {
					var _e_src = ev.target ; // 实际的
					if($(_e_src).hasClass('disable') || $(e).hasClass('disable')) {
						return false ;	
					} else if(('edit' == $(_e_src).attr('type') || 'edit' == $(e).attr('type')) && e != _e_src) {
						return false ;
					} else {
						return true ;
					}
				},
				m_resets : function(elements) {
					for(var i = 0; i < elements.length; i++) {
						this.m_reset($(elements).eq(i)) ;
					}
					return this ;
				},
				m_click : function(element) {
					if($(element).length) {
						element.get(0).m_click() ;
					}
					return this ;
				}
			} ;

			this.m_simple_transition = function(name) {
				// Vue.transition(name, {
				// 	enterClass : name + '-enter',
				// 	leaveClass : name + '-leave',
				// 	enter : function(el) {
				// 		try {
				// 			if(el) {
				// 				var _duration = $(el).m_css3_duration() ;
				//             	if(!_svc.curr_view.stoages.ANIMATE_DURATION) {
				//             		_svc.curr_view.stoages.ANIMATE_DURATION = 0 ;
				//             	}
				//             	_svc.curr_view.stoages.ANIMATE_DURATION += _duration ;	
				// 			}
				// 		} catch(e) {
							
				// 		}
		               
		  //           }
				// }) ;
			}
		    this.m_init = function(svc) {
		    	window.$$ = function(selector) {
		    		return svc.curr_view.stc.curr_tpl.m_get_ele().find(selector) ;
		    	}
		    	_svc = svc ;
		    	_svc.SepComponents = this ;
		    	this.m_simple_transition('bounce') ;
		    	this.m_simple_transition('fade') ;
		    	this.m_simple_transition('fadein') ;
		        Vue.component('sep-options', m_dev_component({
		        	props : {
		        		name : {
		        			type : String,
		        			default : 'options'
		        		},
		        		title : {
		        			type : String,
		        			default : null
		        		}
		        	},
		        	template : tpls.options,
		        	data : function() {
		        		return {
		        			actionsheet : {}
		        		}
		        	},
		        	mounted : function() {
		        		this.$root[this.name] = this ;
		        	},
		        	methods : {
		        		m_show : function() {
		        			this.actionsheet.m_show() ;
		        		},
		        		m_hide : function() {
		        			this.actionsheet.m_hide() ;
		        		}
		        	}
		        })) ;

		        Vue.component('sep-text-scroll', m_dev_component({
		        	props : {
		        		text : {
		        			type : String,
		        			default : '请输入需要滚动的文字...'
		        		},
		        		icon : {
		        			type : String,
		        			default : ''
		        		},
		        		sleep : {
		        			type : String,
		        			default : 0
		        		}
		        	},
		        	created : function() {
		        		// ---- start ------
		        		// 性能优化
		        		new SepTP(svc, this, { // 性能调优工具
		        			onstart : function() {
		        				var _self = this ;
		            		this.tm = setTimeout(function() {
		            			_self.m_start() ;
		            		}, 600) ;
		        			},
		        			onend : function() {
		        				clearTimeout(this.tm) ;
		            			this.m_stop() ;
		        			}
		        		}) ;
		        		// ---- end ------
		        	},
		        	template : tpls.text_scroll,
		        	mounted : function() {
		        		this.m_ready() ;
		        		var _self = this ;
		        		var _el = this.$el ;
		        		this.status = 0 ;
		        		this.e_em = $(_el).find('em') ;
		        		this.e_i = $(_el).find('i') ;
		        		this.iw = 0 ;
		        		this.w = $(_el).width() ;
		        		this.mw = this.w ;
		        		if(this.e_i.length) {
		        			this.iw = this.e_i.width() ;
		        			this.mw -= this.iw ;
		        		}
		        		this.l = 0 ;
		        		if(this.sleep) {
		        			setTimeout(function() {
		        				_self.m_use() ;
		        			}, this.sleep) ;
		        		} else {
		        			this.m_use() ;	
		        		}
		        	},
		        	methods : {
		        		m_use : function() {
		        			var _self = this ;
		        			_self.isactive = true ;
		        			svc.curr_view.m_on('frozen', function() {
		        				_self.m_stop() ;
		        				_self.isactive = false ;
			                }) ;
			                svc.curr_view.m_on('enter', function() {
			                	_self.isactive = true ;
			                    _self.m_start() ;
			                }) ;
			                this.m_start() ;
		        		},
		        		m_start : function() { // 开始
		        			if(0 == this.status && true == this.isactive) {
		        				this.status = 1 ;
			        			var _self = this ;
			        			; (function m_loop(){
								  	_self.anim = requestAnimationFrame(m_loop) ;
								  	_self.l -- ;
			        				if(_self.l <= - (_self.e_em.width())) {
			        					_self.l = _self.mw ;
			        				}
			        				_self.e_em.css({
			        					'left' : _self.l + 'px'
			        				}) ;
								})() ;
							}
		        		},
		        		m_stop : function() { // 停止
		        			if(1 == this.status && true == this.isactive) {
		        				this.status = 0 ;
		        				cancelAnimationFrame(this.anim) ;
		        			}
		        		}
		        	}
		        })) ;
				
		        Vue.component('sep-heat-scroll', m_dev_component({ // 头条轮播
		            props : {
		                sleep : {
		                    type : Number,
		                    default : 300
		                },
		                skin : {
		                	type : String,
		                	default : ''
		                },
		                title : {
		            		type : String,
		            		default : '头条'
		            	}
		            },
		            template : tpls.heat_scroll,
		            data : function() {
		                return {status : null} ;
		            },
		            created : function() {
		            	new SepTP(svc, this, {
		            		onstart : function() {
		            			this.m_start() ;
		            		},
		            		onend : function() {
		            			this.m_stop() ;
		            		}
		            	}) ;
		            },
		            mounted : function() {
		                var _self = this ;
		                this.e_list = $(this.$el).find('.list') ;
		                this.e_list_wrap = this.e_list.find('.wrap') ;
		                this.e_buttons = this.e_list.find('.button') ;
		                var _e_first_button = this.e_buttons.first() ;
		                var _e_first_next_button =  _e_first_button.next() ;
		                _e_first_button.clone().appendTo(this.e_list_wrap) ;
		                _e_first_next_button.clone().appendTo(this.e_list_wrap) ;
		                this.counter = this.e_buttons.length ;
		                this.index = 0 ;
		                this.m_start() ;
		                svc.curr_view.m_on('frozen', function() {
		                    _self.m_stop() ;
		                }) ;
		                svc.curr_view.m_on('enter', function() {
		                    _self.m_start() ;
		                }) ;
		            },
		            methods : {
		                m_reset_y : function() {
		                    this.e_list_wrap.m_set_y(0, 0) ;
		                    this.index = 0 ;
		                },
		                m_move_y_to : function(index) {
		                    var _self = this ;
		                    var _y = (this.index * 1.5 * 2) ;
		                    this.e_list_wrap.m_set_y(-_y + 'rem', this.sleep) ;
		                },
		                m_start : function() {
		                    clearInterval(this.ir) ;
		                    var _self = this ;
		                    this.ir = setInterval(function() {
	                            _self.index ++ ;
	                            _self.m_move_y_to(_self.index) ;
	                            setTimeout(function() {
	                                if(_self.index == _self.counter - 3) {
	                                    _self.m_reset_y() ;
	                                }
	                            }, _self.sleep) ;
		                    }, 3000) ;
		                },
		                m_stop : function() {
		                	clearInterval(this.ir) ;
		                }
		            }
		        })) ;
				
				Vue.component('sep-fold', m_dev_component({
					template : tpls.fold,
					props : {
						name : {
							type : String,
							default : 'fold'
						},
						single : {
							type : Boolean,
							default : false
						},
						index : {
							type : Number,
							default : -1
						}
					},
					mounted : function() {
						this.e_fold = $(this.$el) ;
						var _self = this ;
						new SepSimpleTouch('h2', {
							e_parent : this.e_fold,
							ontrigger : function() {
								var _e_item = $(this).parent() ;
								_self.m_toggle_item(_e_item) ;
							}
						}) ;
						this.$nextTick(function() {
							_self.m_update() ;
						}) ;
					},
					created : function() {
						this.m_recive('model.change', function() {
							this.m_update() ;
						}) ;
					},
					methods : {
						m_update : function() {
							this.$nextTick(function() {
								var _e_items = this.e_fold.find('.wrap > .item') ;
								if(this.single) {
									// 先隐藏其他的索引
									if(-1 != this.index) {
										var _index = parseInt(this.index) ;
										var _e_item = _e_items.eq(_index) ;
										var _e_box = _e_item.children('.box') ;
										// _e_items.not(_e_item).find('.box').height(0) ;
										// _e_item.height(_e_box) ;
										_e_box.height('auto') ;
										_e_item.addClass('on') ;
									}
								} else {
									_e_items.each(function() {
										var _e_box = $(this).children('.box') ;
										_e_box.height('auto') ;
									}) ;
									_e_items.addClass('on') ;
								}
								setTimeout(function() {
									_e_items.addClass('ready') ;
								}, 60) ;
							}) ;
						},
						m_hide_item : function() {

						},
						m_show_item : function() {

						},
						m_toggle_item : function(e_item) { // 隐藏一个 item
							var _e_box = e_item.find('.box') ;
							_e_box.m_slide_toggle() ;
							if(0 == _e_box.height()) {
								e_item.addClass('on') ;
							} else {
								e_item.removeClass('on') ;
							} 
							if(true == this.single) {
								var _es = e_item.siblings('.item') ;
								_es.each(function() {
									$(this).find('.box').m_slide_up() ;
									$(this).removeClass('on') ; 
								}) ; 
							}
						}
					}
				})) ;
		        Vue.component('sep-swiper', m_dev_component({
		        	beforeCreate : function() {
		        		SepPromise.apply(this) ;
		        	},
		        	created : function() {
		        		new SepTP(svc, this, {
		            		onstart : function() { 
		            			this.m_start_autoplay() ;
		            		}, 
		            		onend : function() {
		            			this.m_stop_autoplay() ;
		            		}
		            	}) ;
		        	},
		            props : {
		            	zoom : {
		            		type : Boolean,
		            		default : false
		            	},
		            	autoheight : {
		            		type : Boolean,
		            		default : false,
		            	},
		                name : {
		                    type : String,
		                    default : 'swiper'
		                },
		                effect : {
		                	type : String,
		                	default : 'slide'
		                },
		                height : {
		                	type : String,
		                	default : 'auto'
		                },
		                mapping : {
		                	type : Object,
		                	default : null
		                },
		                width : {
		                	type : String,
		                	default : 'auto'
		                },
		                pagination : {
		                    type : Boolean,
		                    default : false
		                },
		                autoplay : {
		                    type : Number,
		                    default : 0
		                },
		                loop : {
		                    type : Boolean,
		                    default : false
		                },
		                lazy : {
		                	type : Boolean,
		                	default : true
		                }
		            },
		            template : tpls.swiper,
		            methods : {
		            	m_require : function() {
		            		return new Promise(function(next) {
		            			seajs.use(['swiper.css', 'swiper.js'], next) ;
		            		}) ;
		            	},
		                m_init : function() {
		                	var _loop = this.loop ;
		                	var _self = this ;
			                var _pagination = this.pagination ;
			                this.e_wrapper = $(this.$el).find('.swiper-wrapper') ;
			                this.e_container = $(this.$el).find('.swiper-container') ;
			                this.e_slides = this.e_wrapper.find('.swiper-slide') ;
			                $(this.$el).addClass('on') ;
			                if(true == _loop && 1 == this.e_slides.length) {
			                    _loop = false ;
			                }
			                var _settings = {
			                    effect : this.effect,
			                    lazyLoading : this.lazy,
			                    loop : _loop,
			                    resistanceRatio : 0,
			                    autoplay : this.autoplay,
			                    autoHeight : this.autoheight,
			                    zoom : this.zoom,
	    						centeredSlides: true,
	    						slideToClickedSlide: true,
	    						centeredSlides: true,
	    						slidesPerView: 'auto',
			                    touchMoveStopPropagation : false,
								cube: {
								   shadow: false,
								},
								onSlideChangeEnd : function(swiper) {
									if($.isFunction(_self.params.onslide_change)) {
										_self.params.onslide_change(swiper.activeIndex - 1) ;	
									}
								}
			                }
			                if(true == _pagination && 1 < this.e_slides.length) {
			                    _settings.pagination = '.swiper-pagination' ;
			                }
			                this.swiper = new Swiper(this.e_container, _settings) ;
			                if($.isFunction(this.params.onready)) {
			                	this.params.onready.call(this) ;
			                }
			                if(this.mapping) {
			                	this.swiper.params.control = this.mapping.swiper ;
			                	this.mapping.swiper.params.control = this.swiper ;
			                }
		                },
		                m_stop_autoplay : function() {
		                	if(this.swiper) {
		                		this.swiper.stopAutoplay() ;	
		                	}
		                },
		                m_start_autoplay : function() {
		                	if(this.swiper) {
		                		this.swiper.startAutoplay() ;	
		                	}
		                },
		                m_get_index : function() {
		                    return this.swiper.activeIndex ;
		                },
		                m_slide_to : function(index, speed, callback) {
		                	if(!this.swiper) return this ;
		                	this.swiper.slideTo(index, speed, callback) ;
		                }
		            },
		            data : function() {
		            	return {
		            		params : {
		            			onslide_change : function() {

		            			},
		            			onmounted : function() {

		            			}
		            		}
		            	}
		            },
		            updated : function() {
		            	var _self = this ;
		            	this.m_require().then(function() {
		            		if(_self.swiper) {
			            		_self.swiper.destroy(false) ;
			            	}
		            		_self.m_init() ;
		            	}) ;
		            },
		            mounted : function() {  
		            	this.m_ready() ;
		            	var _self = this ;
		            	this.m_require().then(function() {
		            		_self.m_init() ;
		            	}) ;
		            }
		        })) ;
				Vue.component('sep-hljs', m_dev_component({
					template : tpls.hljs,
					props : {
						symbol : {
							type : String,
							default : 'html'
						},	
					},
					methods : {
						m_require : function() {
							return new Promise(function(next) {
		            			seajs.use(['highlight.css', 'highlight.js'], next) ;
		            		}) ;
						}
					},
					beforeCreate : function() {

		        	},
					mounted : function() { // 组件初始化完成
						var _self = this ;
						this.m_require().then(function() {
							var _e_code = $(_self.$el).find('code') ;
							var _html = _e_code.html() ;
							_e_code.html(_html) ;
							hljs.highlightBlock(_e_code.get(0)) ;
						}) ;
					}
				})) ;
		        
				

				Vue.component('sep-loader', m_dev_component({
					template : tpls.loader,
					mounted : function() {
						$(this.$el).addClass('on').children('.box').addClass('on') ;
					}
				}))
		        Vue.component('sep-zan', m_dev_component({
		            props : {
		            	headimgs : {
		            		type : Array,
		            		default : function() {
		            			return [] ;
		            		}
		            	},
		            	onappend : {
		            		type : Function,
		            		default : function() {

		            		}
		            	}
		            },
		            mounted : function() { 
		                var _self = this ;
		                this.e_zan = $(this.$el) ;
		                this.e_box = this.e_zan.find('.box') ;
		                this.e_mouth = this.e_zan.find('.mouth') ;
		                SepPromise.apply(this) ;
		                SepEvents.apply(this) ;
		                this.i = 0 ;
		                this.animates = ['anim-001', 'anim-002', 'anim-003', 'anim-004'] ;
		                svc.curr_view.m_on('enter', function() {
		                    _self.m_start() ;
		                }) ;
		                svc.curr_view.m_on('leave', function() {
		                    _self.m_stop() ;
		                }) ;
		            },
		            methods : {
		                m_start : function() {
		                    var _self = this ;
		                    this.ir = setInterval(function() {
		                    	if(_self.headimgs.length) {
		                    		var _sleep = parseInt(Math.random() * 1000) ;
			                        _sleep = _sleep < 500 ? 500 : _sleep ;
			                        setTimeout(function() {
			                            _self.m_shoot().then(function() {
			                                _self.m_add() ;
			                            }) ;
			                            _self.i ++ ;
			                            if(_self.i > _self.headimgs.length - 1) {
			                                _self.i = 0 ;
			                                // clearInterval(_self.ir) ;
			                            }
			                        }, _sleep) ;
		                    	}
		                    }, 120) ;
		                },
		                m_shoot : function() {
		                    return this.m_promise(function(next) {
		                        var _self = this ;
		                        var _sleep = this.e_mouth.m_css3_duration() ;
		                        this.e_mouth.addClass('on') ;
		                        setTimeout(function() {
		                            _self.e_mouth.removeClass('on') ;
		                            setTimeout(function() {
		                                next() ;
		                            }, _sleep) ;
		                        }, _sleep) ;
		                    }) ;
		                },
		                m_close : function() {
		                	clearInterval(this.ir) ;
		                	$(this.$el).remove() ;
		                },
		                m_append : function() { // 追加一个赞
		                	var _self = this ;
		                	if($.isFunction(this.onappend)) {
		                		this.onappend(function(image) {
		                			if(image) {
		                				var _e_item = _self.m_add(image, 'self') ;
		                				_self.e_mouth.addClass('trigger') ;
		                				setTimeout(function() {
		                					_self.headimgs.push(image) ;
		                					_self.e_mouth.removeClass('trigger') ;
		                				}, _self.e_mouth.m_css3_duration()) ;
		                			}
		                		}) ;
		                	}
		                },
		                m_add : function(image, classname) {
		                    var _e_item = this.m_create(image, classname) ;
		                    var _anim = this.animates[parseInt(Math.random() * this.animates.length)] ;
		                    _e_item.addClass(_anim) ;
		                    setTimeout(function() {
		                        _e_item.remove() ;
		                    }, _e_item.m_css3_duration()) ;
		                    return _e_item ;
		                },
		                m_create : function(image, classname) {
		                    var _e_item = $('<div></div>') ;
		                    var _e_img = $('<img />') ;
		                    var _image = null ;
		                    _e_item.addClass(classname) ;
		                    _e_item.addClass('item') ;
		                    _e_img.appendTo(_e_item) ;
		                    _e_item.appendTo(this.e_box) ;
		                    if(image) {
		                    	_image = image ;
		                    } else {
		                    	_image = this.headimgs[this.i] ;
		                    }
		                    _e_img.attr('src', _image) ;
		                    return _e_item ;
		                },
		                m_stop : function() {
		                    clearInterval(this.ir) ;
		                }
		            },
		            template : tpls.zan
		        })) ;
						
				Vue.component('sep-window', m_dev_component({ // 窗口
					 props : {
					 	title : {
					 		type : String,
					 		default : null
					 	},
		                modal : {
		                    type : Boolean,
		                    default : true
		                },
		                allowclose : {
		                	type : Boolean,
		                	default : true
		                },
		                width : {
		                	type : String,
		                	default : '80%'
		                },
		                height : {
		                	type : String,
		                	default : 'auto'
		                },
		                src : {
		                	type : String,
		                	default : null
		                },
		                name : {
		                    type : String,
		                    default : 'window'
		                },
		            },
		            data : function() {
		            	var _self = this ;
		            	return {
		            		params : {},
		            		pop : {
		            			params : {
		            				onshow_before : function() {
		            					if($.isFunction(_self.params.onshow_before)) {
		            						_self.params.onshow_before.call(_self) ;
		            					}
		            				},
		            				onshow_after : function() {
		            					if($.isFunction(_self.params.onshow_after)) {
		            						_self.params.onshow_after.call(_self) ;
		            					}
		            				},
		            				onready : function() {
		            					if($.isFunction(_self.params.onready)) {
		            						_self.params.onready.call(_self) ;
		            					}
		            				},
		            				onhide_before : function() {
		            					if($.isFunction(_self.params.onhide_before)) {
		            						_self.params.onhide_before.call(_self) ;
		            					}
		            				},
		            				onhide_after : function() {
		            					if($.isFunction(_self.params.onhide_after)) {
		            						_self.params.onhide_after.call(_self) ;
		            					}
		            				}
		            			}
		            		}
		            	}
		            },
		            mounted : function() {
		            	this.m_ready() ;
		            },
		            methods : {
		            	m_show : function() {
		            		this.pop.m_show() ;
		            	},
		            	m_hide : function() {
		            		this.pop.m_hide() ;
		            	}
		            },
		            template : tpls.window
				})) ;

		        Vue.component('sep-pop', m_dev_component({
		            props : {
		                modal : {
		                    type : Boolean,
		                    default : false
		                },
		                top : {
		                	type : String,
		                	device : null
		                },
		                left : {
		                	type : String,
		                	default : null
		                },
		                right : {
		                	type : String,
		                	default : null
		                },
		                width : {
		                	type : String,
		                	default : '80%'
		                },
		                height : {
		                	default : 'auto'
		                },
		                name : {
		                    type : String,
		                    default : 'pop'
		                },
		                scope : {
		                	type : String,
		                	default : 'parent'
		                }
		            },
		            data : function() {
		                return {
		                    base_on : false,
		                    mask_on : false,
		                    box_class : null,
		                    params : {
		                    	onmounted : function() {

		                    	},
		                    	onhide_before : function() {

		                    	},
		                    	onhide_after : function() {

		                    	},
		                    	onshow_before : function() {

		                    	},
		                    	onshow_after : function() {

		                    	}
		                    }
		                } ;
		            },
		            mounted : function() {
		            	this.m_ready() ;
		            	var _e = $(this.$el) ;
		            	this.$nextTick(function() {
		            		var _e_box = _e.children('.box') ;
			            	_e_box.width(this.width).height(this.height) ;
			            	if(this.left) {
			            		_e_box.css({
			            			left : this.left,
				            	}) ;
			            	} else {
			            		if(-1 != this.width.indexOf('px')) { // 像素
				            		_e_box.css({
				            			left : '50%',
				            			marginLeft : -parseInt((this.width.replace('px', '')) / 2)
					            	}) ;
				            	} else if(-1 != this.width.indexOf('%')) { // 百分比
				            		_e_box.css({
				            			left : (100 - parseInt(this.width.replace('%', ''))) / 2 + '%'
				            		}) ;
				            	}
			            	}
			            	if(this.right) {
			            		_e_box.css({
			            			right : this.right,
				            	}) ;
			            	}
			            	if(this.top) {
			            		_e_box.css({
			            			top : this.top,
				            	}) ;
			            	} else {
			            		if(-1 != this.height.indexOf('px') || 'auto' == this.height) {
				            		_e_box.css({
				            			top : '50%',
				            			marginTop : -_e_box.innerHeight() / 2
					            	}) ;
				            	} else if(-1 != this.height.indexOf('%')) { // 百分比
				            		var _v = parseFloat(this.height.rpelace('%', '')) ;
				            		_e_box.css({
				            			top : '50%',
				            			marginTop : -_v + '%'
				            		}) ;
				            	}
			            	}
			            	
		            	}) ;
		            },
		            template : tpls.pop,
		            methods : {
		                _m_hide : function() {
		                    if(false == this.modal) {
		                        this.m_hide() ;
		                    }
		                },
		                m_show : function() {
		                    this.base_on = true ;
		                    if($.isFunction(this.params.onshow_before)) {
		                    	this.params.onshow_before.call(this) ;	
		                    }
		                    var _self = this ;
		                    setTimeout(function() {
		                    	 _self.mask_on = true ;
		                    }, 30) ;
	                        this.box_class = 'on' ;
		                    setTimeout(function() {
		                    	if($.isFunction(_self.params.onshow_after)) {
		                    		_self.params.onshow_after.call(_self) ;	
		                    	}
		                    }, 300) ;
		                    if($.isFunction(this.params.onready)) {
		                    	this.params.onready.call(this) ;	
		                    }
		                },
		                m_hide : function() {
		                	if($.isFunction(this.params.onhide_before)) {
		                		this.params.onhide_before.call(this) ;	
		                	}
		                    var _self = this ;
		                    this.mask_on = false ;
		                    this.box_class = 'off' ;
		                    setTimeout(function() {
		                        _self.base_on = false ;
		                        if($.isFunction(_self.params.onhide_after)) {
		                        	_self.params.onhide_after.call(_self) ; 
		                        }
		                    }, 300) ;
		                }
		            },
		            created : function() {
		            	this.m_recive('reset', function() {
		            		this.m_hide() ;
		            	}) ;
		            }
		        })) ;

		       

		        Vue.component('sep-spinner', m_dev_component({
		            props : {
		                args : null,
		                onchange : {
		                    type : Function,
		                    default : function() {

		                    }
		                },
		                min : {
		                    type : Number,
		                    default : 1
		                },
		                max : {
		                    type : Number,
		                    default : 5
		                },
		                value : {
		                    type : Number,
		                    default : 1
		                }
		            },
		            mounted : function() {
		                this.m_valid() ;
		            },
		            data : function() {
		                return {
		                    min_disable : false,
		                    max_disable : false,
		                }
		            },
		            watch : {
		                'value' : function() {
		                	this.$nextTick(function() {
		                    	this.m_valid() ;
		                    	this.onchange(this.args, this.value) ;
		                    	this.$emit('input', this.value) ;
		                    }) ;
		                },
		                'min' : function() {
		                    this.m_valid() ;
		                },
		                'max' : function() {
		                    this.m_valid() ;
		                }
		            },
		            created : function() {
		            	this.m_recive('change', function() {

		            	}) ;
		            },
		            methods : {
		            	m_change : function(ev) {
		            		var _value = ev.target.value ;
		            		_value = _value ? _value : 0 ;
		            		this.value = parseInt(_value) ;
		            	},
		                m_valid : function() {
		                    if(this.min > this.value) {
		                        this.value = this.min ;
		                    }
		                    if(this.min == this.value) {
		                        this.min_disable = true ;
		                    } else {
		                        this.min_disable = false ;
		                    }
		                    if(this.max < this.value) {
		                        this.value = this.max ;
		                    }
		                    if(this.max == this.value) {
		                        this.max_disable = true ;
		                    } else {
		                        this.max_disable = false ;
		                    }
		                },
		                m_add : function() {
		                    if(this.value < this.max) {
		                        this.value ++ ; 
		                    }
		                },
		                m_sub : function() {
		                    if(this.value > this.min) {
		                        this.value -- ; 
		                    }
		                }
		            },
		            template : tpls.spinner
		        })) ;
					
				Vue.component('sep-tfooter', m_dev_component({
					props : {
						name : {
							type : String,
							default : 'tfooter'
						}
					},
					mounted : function() { // ready
						this.m_ready() ;
					},
					data : function() {
						return {
							params : {
								index : 1,
								size : 10,
								rows : 0,
								total : 0, // 页码
								onto : function() {

								}
							}
						}
					},
					methods : {
						m_to : function(index) {
							index = index <= 1 ? 1 : index ;
							index = index >= this.params.total ? this.params.total : index ;
							this.params.index = index ;
							app.loader.m_show() ;
							m_func(this.params.onto, index, this).then(function() {
								app.loader.m_hide() ;
							}) ;
						},
						m_set_size : function(ev) {
							this.params.index = 1 ;
							this.params.size = ev.target.value ;
							this.params.onto(this.params.size) ;
						}
					},
					template : tpls.tfooter
				})) ;
				Vue.component('sep-tbody', m_dev_component({
					template : tpls.tbody,
				})) ;
				Vue.component('sep-table', m_dev_component({
					props : {
						ws : {
							type : String,
							default : ''	
						},
						name : {
							type : String,
							default : 'table'
						}
					},
					template : tpls.table,
					beforeUpdate : function() {
						this.m_reset_size() ;
					},
					created : function() {
						var _self = this ;
						$(window).on('resize', function() {
							_self.m_reset_size() ;
						}) ;
						this.m_recive('model.change', function() {
							this.m_reset_size() ;
						}) ;
					},
					data : function() {
						return {
							params : {

							}
						}
					},
					mounted : function() { // ready
						this.m_ready() ;
						this.m_reset_size() ;
						var _self = this ;
						new SepSimpleTouch('.tbody .tr', {
							e_parent : this.$el,
							ontrigger : function(ev) {
								var _e = $(ev.target) ;
								var _e_p = _e.parent() ;
								if(!(_e_p.hasClass('button') || _e.hasClass('button'))) {
									var _e = $(this).find('input') ;
									_e.trigger('click') ;
								}
							}
						}) ;
						var _e_toggle = $(this.$el).find('.thead .tr input') ;
						if(_e_toggle.length) {
							_e_toggle.change(function() {
								// 改变
								if(this.checked) { // 全选
									_self.m_select_all() ;
								} else { // 取消全选
									_self.m_unselect_all() ;
								}
							}) ;
						}
					},
					methods : {
						m_select_all : function() { // 全选
							$(this.$el).find('.tbody .tr input').each(function() {
								// 先变成为选择
								this.checked = false ;
								$(this).trigger('click') ;
							}) ;
							return this ;
						},
						m_unselect_all : function() { // 取消全选
							$(this.$el).find('.tbody .tr input').each(function() {
								this.checked = true ;
								$(this).trigger('click') ;
							}) ;
							return this ;
						},
						m_reset_size : function() {
							this.$nextTick(function() {
								var _e_trs = $(this.$el).find('.tr') ;
								var _ws = this.ws.replace(/ /g, '').split(',') ;
								_e_trs.each(function() {
									$(this).find('.td').each(function(i) {
										$(this).width(_ws[i] + '%') ;
									}) ;
								}) ;
							}) ;
						}
					}
				})) ;

				Vue.component('sep-items', m_dev_component({ // 自动拆分
					template : tpls.items,
					props : {
						list : {
							type : Array,
							default : function() {
								return [
									{min : 300, size : 6},
									{min : 200, size : 5},
									{min : 200, size : 4},
								]
							}
						}
					},
					created : function() {
						var _self = this ;
						svc.curr_view.m_on('enter', function() {
							_self.m_reset_size() ;
						}) ;
						$(window).on('resize', function() {
							_self.m_reset_size() ;
						}) ;
					},
					mounted : function() {
						this.m_reset_size() ;
					},
					methods : {
						m_reset_size : function() {
							var _e_items = $(this.$el).find('.item') ;
							var _len = _e_items.length ;
							var _w = $(this.$el).width() ;
							var _sw = _w / _len ;
							for(var i = 0; i < this.list.length; i++) {
								var _item = this.list[i] ;
								if(parseInt(_sw) < _item.min) {
									_sw = _w / _item.size ;
								}	
							}
							_e_items.width(_sw) ;
						}
					},
					'model.change' : function() {
						this.m_reset_size() ;
						return this ;
					}
				})) ;
		
//				Vue.component('sep-date-picker', m_dev_component({
//					template : tpls.date_picker,
//					props : {
//						type : {
//							type : String,
//							default : 'datetime'
//						},
//						format : {
//							type : String,
//							default : 'YYYY-MM-DD HH:mm'
//						},
//						tip : {
//							type : String,
//							default : '点击设置时间'
//						},
//						value : null
//					},
//					beforeCreate : function() {
//		        		SepPromise.apply(this) ;
//		        	},
//					mounted : function() {
//						this.m_ready() ;
//						// 开始加载控件
//						var _self = this ;
//						this.m_require().then(function() {
//							var _e_input = $(_self.$el).find('input') ;
//							_e_input.on('change', function() {
//								_self.$el.value = this.value ;
//								_self.$emit('input', this.value) ;
//							}) ;
//							_self.$el.value = _e_input.val() ;
//							_self.m_init().then(function() {
//								_e_input.cxCalendar({
//									type: 'datetime',
//	  								format: _self.format
//								}) ;
//								var _val = _e_input.val()  ;
//								_self.$el.value = _val ;
//								_self.$emit('input', _val) ;
//							}) ;
//						}) ;
//					},
//					data : function() {
//						return {
//							
//						}
//					},
//					created : function() {
//						
//					},
//					methods : {
//						m_show : function(ev) {
//							// showcalendar(ev, ev.srcElement) ;
//						},
//						m_require : function() {
//							return new Promise(function(next) {
//								seajs.use(['date.css', 'date.js'], next)
//							}) ;
//						}
//					}
//				})) ;
				
				Vue.component('sep-scroll', m_dev_component({
					props : {
						inject : {
							type : Boolean,
							default : true
						},
						name : {
							type : String,
							default : 'scroll'
						},
						downpull_canvas_color : {
							type : String,
							default : null
						},
						downpull_lock : {
							type : Boolean,
							default : false
						},
						uppull_lock : {
							type : Boolean,
							default : true
						},
						ondownpull : {
							type : Function,
							default : function() {
								return new Promise(function(next) {
									svc.curr_view.m_refresh().then(next) ;
								}) ;
							}
						},
						onreset : {
							type : Function,
							default : function() {
								return new Promise(function(next) {
									next() ;
								}) ;
							}
						},
						onuppull : {
							type : Function,
							default : function() {
								return new Promise(function(next, fail) {
									svc.curr_view.m_append().then(next) ;
								}) ;
							}
						}
					},
					data : function() {
						return {
							vr_scale : 1,
							fg : app.data.__theme_fg_class,
							device : _m_device(),
							downpull_trigger : false,
							uppull_trigger : false,
							params : {
								onscroll_to_bottom : function() {

								}
							}
						}
					},
					template : tpls.scroll,
					beforeCreate : function() {
						SepEvents.apply(this) ;
					},
					mounted : function() {
						this.m_ready() ;
						if(this.inject) {
							svc.curr_view.stc.curr_tpl.scroll = this ;	
						}
						var _pc = new PullCtrl(this, svc) ;
						// 扩展方法
						var _self = this ;
						this.sep_scroll = $(this.$el).prop('$sep') ;
						svc.curr_view.m_on('leave.back', function() {
							_self.sep_scroll.m_scroll_to(0, 0) ;
						}) ;
						if('pc' == this.device) {
							this.m_pc() ;
						}
						this.sep_scroll.m_on('scroll', function() {
							if(this.m_is_bottom()) {
								if($.isFunction(_self.params.onscroll_to_bottom)) {
									_self.params.onscroll_to_bottom.call(_self) ;
								}
							}
						}) ;
					},
					updated : function() {
						this.m_calc_vr_scrollbar() ;
					},
					methods : { // 方法集合
						m_scroll_to_bottom : function() {
							this.sep_scroll.m_scroll_to_bottom() ;
							return this ;
						},
						m_reset : function() {
							this.sep_scroll.m_reset() ;
						},
						m_scroll_to_top : function() {
							this.sep_scroll.m_scroll_to_top() ;
						},
						m_calc_vr_scrollbar : function() { // 计算滚动条
							if('pc' != this.device) return false ;
							var _self = this ;
							var _height = Math.floor((this.e_vr_scrollbar.height() / ( this.sep_scroll.m_get_wrap_height())) * 100) ;
							if(100 <= _height || 0 == _height) {
								this.e_vr_scrollbar.addClass('disable') ;
							} else {
								this.e_vr_scrollbar.removeClass('disable') ;
								this.e_vr_scrollbar_slider.height(_height + '%') ;
								var _scroll_top = this.sep_scroll.m_get_scroll_top() ;
								var _max_top = this.e_vr_scrollbar.height() - this.e_vr_scrollbar_slider.height() ;
								var _scale = (_scroll_top / ( this.sep_scroll.m_get_max_scroll_top())) ;
								this.e_vr_scrollbar_slider.css({
									top : _scale * _max_top
								}) ;
							}
						},
						m_vr_scrollbar_to : function(y) {
							var _y = y ;
							_y = _y <= 0 ? 0 : _y ;
							var _max_top = this.e_vr_scrollbar.height() - this.e_vr_scrollbar_slider.height() ;
							_y = _y >= _max_top ? _max_top : _y ;
							this.e_vr_scrollbar_slider.css('top', _y) ;
							this.sep_scroll.m_scroll_to(0, this.sep_scroll.m_get_max_scroll_top() / _max_top * _y, 0) ;
						},
						m_pc : function() {
							var _self = this ;
							$(window).on('resize', function() {
								_self.m_calc_vr_scrollbar() ;
							}) ;
							var _nav = ___sep_app.nav ;
							if(_nav && _nav.m_get(svc.curr_view.opts.path)) {
								_nav.m_on('show.after, hide_after', function() {
									_self.m_calc_vr_scrollbar()
								}) ;
							}
							this.e_vr_scrollbar = $(this.$el).children('.vr-scrollbar') ;
							this.e_vr_scrollbar.addClass('active') ; // 开始激活
							this.e_vr_scrollbar_bg = this.e_vr_scrollbar.children('.bg') ;
							this.e_vr_scrollbar_slider = this.e_vr_scrollbar.children('.slider') ;
							this.$nextTick(function() {
								this.m_calc_vr_scrollbar() ;
							}) ;

							var _isdown = false ;

							this.sep_scroll.m_on('scroll', function() {
								if(_isdown) return ;
								_self.m_calc_vr_scrollbar() ;
							}) ;
							var _vr_slider_top = 0 ;
							this.e_vr_scrollbar_bg.on('click', function(ev) {
								var _y = ev.offsetY ;
								_self.m_vr_scrollbar_to(_y) ;
							}) ;
							
							new SepTouch(this.e_vr_scrollbar_slider, {
								stop : true,
								e_parent : this.e_vr_scrollbar_slider,
								onstart : function(ev, args) {
									ev.preventDefault() ;
									_self.e_vr_scrollbar.addClass('on') ;
									_vr_slider_top = parseFloat(_self.e_vr_scrollbar_slider.css('top')) ;
									_isdown = true ;
								},
								onmove : function(ev, args) {
									var _v = _vr_slider_top + args.vr_distance ;
									_self.m_vr_scrollbar_to(_v) ;
								},
								onend : function() {
									_self.e_vr_scrollbar.removeClass('on') ;
									_isdown = false ;
								}
							}) ;
							this.m_calc_vr_scrollbar() ;
						}
					}
				})) ;
		        /*
		            actionsheet(start)
		        */
		        Vue.component('sep-actionsheet', m_dev_component({
		            props : {
		                direction : {
		                    type : String,
		                    default : 'bottom'
		                },
		                scope : {
		                	type : String,
		                	default : 'parent'
		                },
		                modal : {
		                	type : Boolean,
		                	default : false
		                },
		                name : {
		                    type : String,
		                    default : 'actionsheet'
		                },
		                width : {
		                	type : String,
		                	default : null
		                },
		                mode : {
		                	type : Number,
		                	default : 0
		                },
		                mask : {
		                	type : Boolean,
		                	default : true
		                }
		            },
		            data : function() {

		            	var _data = {
		            		base_on : false,
		                    mask_on : false,
		                    box_on : false,
		                    status : 0,
		                    viewname : null,
		                    params : {
		                    	onmounted : function() {

		                    	},
		                    	onhide_before : function() {

		                    	},
		                    	onhide_after : function() {

		                    	},
		                    	onshow_before : function() {

		                    	},
		                    	onshow_after : function() {

		                    	}
		                    }
		            	}
		            	if(1 == this.mode) {
		            		_data.viewname = svc.curr_view.m_get_class_name() ;
		            	}
		                return _data ;
		            },
		            created : function() {
		            	this.m_recive('reset', function() {
		            		this.m_hide() ;
		            	}) ;
		            },
		            mounted : function() {
		            	this.m_ready() ;
		            	if($.isFunction(this.params.onready)) {
		            		this.params.onready.call(this) ;	
		            	}
		            	if(1 == this.mode) {
		            		$(this.$el).insertBefore(svc.m_get_ele()) ;
		            	}
		            },
		            template : tpls.actionsheet,
		            methods : {
		            	m_toggle : function() {
		            		if(1 == this.status) {
		            			this.m_hide() ;
		            		} else if(0 == this.status) {
		            			this.m_show() ;
		            		}
		            		return this ;
		            	},
		                m_show : function() {
		                	if(0 == this.status) {
			                	this.status = 1 ;
			                    this.base_on = true ;
			                    if($.isFunction(this.params.onshow_before)) {
			                    	this.params.onshow_before.call(this) ;	
			                    }
			                    var _self = this ;
			                    setTimeout(function() {
			                        _self.mask_on = true ;
			                        _self.box_on = true ;
			                    }, 30) ;
			                    setTimeout(function() {
			                    	if($.isFunction(_self.params.onshow_after)) {
			                    		_self.params.onshow_after.call(_self) ;	
			                    	}
			                    }, 300) ;
		                    }
		                },
		                _m_hide : function() {
		                    if(false == this.modal) {
		                        this.m_hide() ;
		                    }
		                },
		                m_hide : function() {
		                	if(1 == this.status) {
			                	this.status = 0 ;
			                	if($.isFunction(this.params.onhide_before)) {
			                		this.params.onhide_before.call(this) ;	
			                	}
			                    var _self = this ;
			                    this.mask_on = false ;
			                    this.box_on = false ;
			                    setTimeout(function() {
			                        _self.base_on = false ;
			                        if($.isFunction(_self.params.onhide_after)) {
			                        	_self.params.onhide_after.call(_self) ;	
			                        }
			                    }, 300) ;
		                    }
		                }
		            }
		        })) ;


				Vue.component('sep-render', m_dev_component({
					props : {
						name : { // 渲染模型
				            type : String,
				            default : 'default'
				        },
				        anim : {
				        	type : String,
				        	default : 'fade'
				        },
				        login : {
				    		type : Boolean,
				    		default : true
				    	}
					},
					data : function() {
						var _data = {
							type : null,
			              	status : null,
			              	text : null,
						} ;
						if(svc.curr_view.opts.async) {
							_data.status = 100 ;
						}
						return _data ;
					},
					beforeCreate : function() {
				        SepPromise.apply(this) ;
				    },
				    updated : function() {
				    	this.$nextTick(function() {
				    		this.m_send('model.change') ;
				    	}) ;
				    },
				    methods : {
				    	m_entity : function() {
				    		this.status = 1 ;
				    		return this ;
				    	},
				    	m_empty : function() {
				    		this.status = 0 ;
				    		return this ;
				    	},
				    	m_init : function() {
				    		this.status = 100 ;
				    		return this ;
				    	},
				    	m_error : function(msg) { // 服务器错误
				    		this.text = msg ;
				    		this.status = 500 ;
				    	},
				    	m_sessionless : function() { // 未登录
				    		this.status = -1 ;
				    		return this ;
				    	},
				    	m_timeout : function() {
				    		this.status = -2 ;
				    		return this ;
				    	},
				    	m_invalid : function(msg) {
				    		this.text = msg ;
				    		this.status = -3 ;
				    		return this ;
				    	}
				    },
				    mounted : function() {
				    	if(this.name) {
				    		$(this.$el).addClass(this.name) ; // 添加渲染的名字
				    	}
				    	// 开始监视方法
				    	var _scope_object = this.scope_object ;
				    	if(!_scope_object) {
				    		_scope_object = this.$root ;
				    	}
				    	var _ref = _scope_object.renders[this.name] ;
				    	var _render = this ;
				    	// 先保存副本
				    	var _model = _ref.model ;
				    	var _mode = null ;

				    	if($.isArray(_model.list)) {
				    		_mode = 1 ; // 列表
				    	} else {
				    		_mode = 0 ; // 对象
				    	}

				    	this.save_model = clone(_model) ; // 保存副本
				    	this.$nextTick(function() {
				    		if(_model.list instanceof Array) { // 是一个数组
					    		_scope_object.$watch('renders.{name}.model.list'.replace('{name}', this.name), function(data) {
					    			// 判断结果
					    			if(data.length) {
					    				_render.m_entity() ;
					    			} else {
					    				_render.m_empty() ;
					    			}
					    			_render.m_send('model.change') ;
					    		}) ;
					    	} else { // 不是数组 
					    		_scope_object.$watch('renders.{name}.model'.replace('{name}', this.name), function(data) {
					    			// 判断结果
					    			if(data && Object.keys(data).length) {
					    				_render.m_entity() ;
					    			} else {
					    				_render.m_empty() ;
					    			}
					    			_render.m_send('model.change') ;
					    		}) ;
					    	}
				    	}) ;
				    	
				    	function _m_refresh() {
				    		return new Promise(function(next, fail) {
				    			var _tm = setTimeout(function() {
				    				_render.m_init() ;
				    			}, 150) ;
			    				_ref.ondata().then(function(data) {
			    					if(!data && 0 == _mode) {
			    						_ref.model = clone(_render.save_model) ;	
			    					} else {
			    						_ref.model = data ;
			    					}
			    					clearTimeout(_tm) ;
			    					next() ;
			    				}).catch(function(err) { // 出问题了
			    					clearTimeout(_tm) ;
			    					var _status = err[SepRequest.keys.status] ;
			    					var _msg = err[SepRequest.keys.msg] ;
			    					if(-1 != SepRequest.codes.errors.indexOf(_status)) { // 服务器错误
			    						_render.m_error(_msg) ;
			    						next(err) ;
			    					} else if(-1 != SepRequest.codes.timeouts.indexOf(_status)) {
			    						_render.m_timeout(_msg) ;
			    						next(err) ;
			    					} else {
			    						_render.m_invalid(err + '') ;
			    						next(err) ;
			    					}
			    				}) ;
				    		}) ;
				    	}
				    	var _extends = {
				    		isrun : false,
				    		m_refresh : function() { // 开始刷新
				    			return new Promise(function(next, fail) {
				    				// 请求开始
				    				if(_render.login) { // 需要登录
				    					if(app.data.user) { // 存爱
				    						_ref.isrun = true ;
				    						_m_refresh().then(function(data) {
				    							_ref.isrun = false ;
				    							next(data) ;
				    						}).catch(fail) ;	
				    					} else {
				    						_ref.isrun = false ;
				    						_render.m_sessionless() ; // 未登录
				    						next() ;
				    					}
				    				} else {
				    					_ref.isrun = true ;
				    					_m_refresh().then(function(data) {
				    						_ref.isrun = false ;
				    						next(data) ;
				    					}).catch(function(err) {
				    						_ref.isrun = false ;
				    						fail(err) ;
				    					}) ;
				    				}
				    			}) ;
				    		}
				    	} ;
				    	for(var key in _extends) {
				    		Vue.set(_ref, key, _extends[key]) ;
				    	}
				    },
				    template : tpls.render
				})) ;

		        Vue.component('sep-radios', m_dev_component({
		        	props : {
		        		scope : {
		        			type : String,
		        			default : 'root'
		        		},
		        		scope_object : {
		        			type : Object,
		        			default : null
		        		},
		        		value : Number
		        	},
		        	template : tpls.radios,
		        	data : function() {
		        		return {
		        			current_value : this.value
		        		}
		        	},
		        	updated : function() {
		        		this.$nextTick(function() {
		        			this.m_update() ;
		        		}) ;
		        	},
		        	mounted : function() {
		        		var _el = this.$el ;
		        		var _e_radios = null ;
		        		var _val = null ;
		        		var _self = this ;
		        		var _uuid = uuid() ;
		        		this.$watch('value', function(value) {
		        			this.$el.value = this.value ;
							this.$emit('input', this.value) ;
		        		}) ;
		        		this.m_update = function() {
			        		_val = this.current_value,
			        		_el.value = _val ;
			        		_e_radios = $(_el).find('input') ;
			        		$(_el).find('.button').removeClass('radio').addClass('radio') ;
			        		_e_radios.each(function() {
			        			var _value = this.value ;
			        			if(_value != parseInt(_value)) {
			        				_value = this.value ;
			        			} else {
			        				_value = parseInt(this.value) ;
			        			}
			        			this.type = 'radio' ;
			        			this.name = _uuid ;
			        			if(_value == _val) {
			        				this.checked = true ;
			        			}
				        		$(this).off('change').on('change', function() {
				        			var _value = this.value ;
				        			if(_value != parseInt(_value)) {
				        				_value = this.value ;
				        			} else {
				        				_value = parseInt(this.value) ;
				        			}
				        			_el.value = _value ;
				        			_self.current_value = _value ;
				        			_self.$emit('input', _value) ;
				        		}) ;
			        		}) ;
		        		}

		        		this.$nextTick(function() {
		        			this.m_update() ;
		        		}) ;
		        	}
		        })) ;

		        Vue.component('sep-checkboxs', m_dev_component({
		        	template : tpls.checkboxs,
		        	props : {
		        		value : null
		        	},
		        	data : function() {
		        		return {
		        			current_value : this.value
		        		}
		        	},
		        	updated : function() {
		        		this.$nextTick(function() {
		        			this.m_update() ;
		        		}) ;
		        	},
		        	mounted : function() {
		        		var _e_checkboxs = null ;
		        		var _el = this.$el ;
		        		var _vals = null ;
			        	var _self = this ;
			        	var _uuid = uuid() ;
		        		this.$watch('value', function(value) {
		        			this.$el.value = this.value ;
							this.$emit('input', this.value) ;
		        		}) ;
		        		this.m_update = function() {
			        		_e_checkboxs = $(_el).find('input') ;
			        		_vals = this.value ;
			        		$(_el).find('.button').removeClass('checkbox').addClass('checkbox') ;
			        		_e_checkboxs.each(function() {
			        			this.type = 'checkbox' ;
			        			this.name = _uuid ;
			        			var _value = this.value ;
			        			if(_value != parseInt(_value)) {
			        				_value = this.value ;
			        			} else {
			        				_value = parseInt(this.value) ;
			        			}
			        			if($.isArray(_vals) && _vals.contains(_value)) {
			        				this.checked = true ;
			        			}
				        		$(this).off('change').on('change', function() { 
				        			var _value = this.value ;
				        			if(_value != parseInt(_value)) {
				        				_value = this.value ;
				        			} else {
				        				_value = parseInt(this.value) ;
				        			}
				        			if($.isArray(_vals)) {
				        				if(this.checked) {
					        				_vals.push(_value) ;
					        			} else {
					        				// 删除
					        				_vals.remove(_value) ;
					        			}
					        			_self.current_value = _vals ;
					        			_self.$emit('input', _self.current_value) ;
				        			}
				        		}) ;
			        		}) ;	
		        		}
		        		this.$nextTick(function() {
		        			_self.m_update() ;
		        		}) ;
		        	}
		        })) ;

				Vue.component('sep-sortlist', m_dev_component({ // 可排序
					props : {
						onstop : {
							type : Function,
							default : function() {

							}
						},
						name : {
							type : String,
							default : 'sortlist'
						},
						index : {
							type : Number,
							default : 0
						},
						collection : {
							type : Array,
							default : function() {
								return [] ;
							}
						},
						list : {
							type : Array,
							default : function() {
								return [] ;
							}
						},
						selector : {
							type : String,
							default : null
						}
					},
					data : function() {
						return {
							issort : false,
							indexs : []
						}
					},
					mounted : function() {
						this.m_ready() ; // 初始化
		                // 初始化排序组件
					},
					detached : function() {
						var _scope = this._scope_ ;
						if(_scope && $.isFunction(_scope.$delete)) {
							_scope.$delete(this.name) ;			
						}
					},
					methods : {
						m_toggle : function() {
							if(this.issort) { // 已经开始排序
								this.m_stop() ;
							} else { // 未开始排序
								this.m_start() ;
							}
						},
						m_start : function() { // 开始排序
							if(true == this.issort) {
								return false ;
							}
							this.issort = true ;
							this.indexs = [] ;
							if(this.selector) { // 存在选择器
								var _el = $(this.$el) ;
								var _e_sortitems = _el.find(this.selector) ;
								_e_sortitems.each(function() {
									$(tpls.sortitem).insertBefore($(this).children().eq(0)) ;
								}) ;
							}
						},
						m_stop : function() { // 停止排序
							if(false == this.issort) {
								return false ;
							}
							if(this.selector) { // 存在选择器
								var _el = $(this.$el) ;
								var _e_sortitems = _el.find(this.selector) ;
								var _item_classname = 'sortitem' ;
								var _e_list = _e_sortitems.find('.' + _item_classname) ;
								_e_list.remove() ;
							}
							this.issort = false ;
							// 会自动去应用排序
							var _old_list = [] ;
							var _new_list = [] ;
							for(var i = 0; i < this.list.length; i++) {
								_old_list.push(this.list[i]) ;
							}
							var _list_size = _old_list.length ;
							var _indexs_len = this.indexs.length ;
							if(_indexs_len) {
								for(var i = 0; i < _list_size; i++) {
									var _item = null ;
									if(_indexs_len < _list_size) {
										if(i <= (_indexs_len - 1)) {
											var _index = this.indexs[i] ;
											_item = _old_list[_index] ;
											_old_list.splice(_index, 1) ;
											if(null == _item) {
												_item = _old_list.pop() ;
											}
										} else {
											_item = _old_list.pop() ;
										}
									} else {
										_item = _old_list[this.indexs[i]] ;
									}
									_new_list.push(_item) ;
								}
							}
							// 停止排序
							if($.isFunction(this.onstop)) {
								this.onstop(_new_list) ; // 新列表
							}
						},
						m_me : function(args, ev) { // 点击我
							var _e_item = $(ev.srcElement) ;
							if(_e_item.hasClass('index')) {
								_e_item = _e_item.parent() ;
							}
							if(_e_item.hasClass('sortitem')) {
								var _index = _e_item.parent().parent().index() ;
								if(this.issort) {
									 if(-1 == this.indexs.indexOf(_index)) {
									 	this.indexs.push(_index) ;
									 	_e_item.find('.index').html(this.indexs.length) ;
									 }
								}
							}
							ev.stopPropagation() ;
							ev.preventDefault() ;
						}
					},
					template : tpls.sortlist
				})) ;
		
				

				Vue.component('sep-files', m_dev_component({
					props : {
						allowremove : {
							type : Boolean,
							default : true
						},
						allowaddfile : {
							type : Boolean,
							default : true
						},
						allowrepfile : {
							type : Boolean,
							default : true
						},
						name : {
							type : String,
							default : null
						},
						maxcounter : {
							type : Number,
							default : 0
						},
						tip : {
							type : String,
							default : '添加文件'
						},
						value : {
							type : Array,
							default : function() {
								return [] ;
							}
						},
						accept : {
							type : String,
							default : null
						}
					},
					data : function() {
						return {
							sortlist : {
								$sep : {}
							}
						}
					},
					computed : {
						issort : function() {
							return this.sortlist.$sep.issort ;
						}
					},
					watch : {
						value : function() {
							this.$el.value = this.value ;
							this.$emit('input', this.value) ;
						}
					},
					mounted : function() {
						this.m_ready() ;
		                // 初始化排序组件
		                this.$el.value = this.value ;
		                this.$emit('input', this.value) ;
					},
					methods : {
						m_update : function(newlist) { // 更新数据
							if(newlist.length) {
								var _len = this.value.length ;
								for(var i = 0; i < _len; i++) {
									this.value.pop() ;									
								}
								for(var i = 0; i < newlist.length; i++) {
									this.value.push(newlist[i]) ;
								}
							}
						},
						m_remove : function(index) {
		            		this.value.splice(index, 1) ;
		            		return this ;
		            	},
						m_start_sort : function() { // 开始排序
							this.sortlist.$sep.m_start() ;
							this.allowrepfile = false ;
						},
						m_toggle_sort : function() {
							this.sortlist.$sep.m_toggle() ;
							if(this.sortlist.$sep.issort) {
								this.allowrepfile = false ;
							} else {
								this.allowrepfile = true ;
							}
						},
						m_stop_sort : function() {
							this.sortlist.$sep.m_stop() ;
							this.allowrepfile = true ;
						}
					},
					template : tpls.files
				})) ;

				Vue.component('sep-pv', m_dev_component({
					template : tpls.pv,
					props : {
						value : {
							type : Number,
							default : -1
						}
					},
					watch : {
						value : function(v) {
							this.status = 1 ;
							var _self = this ;
							if(100 == v) {
								setTimeout(function() {
									_self.status = 0 ;
								}, 300) ;
							}
						}
					},
					data : function() {
						return {
							status : 0
						}
					}
				})) ;

				Vue.component('sep-file', m_dev_component({
					template : tpls.file,
					props : {
						accept : {
							type : String,
							default : null
						},
						maxcounter : { // 文件最大
							type : Number,
							defualt : 0
						},
						maxsize : { // 文件最大大小
							type : Number,
							default : 0
						},
						singlesize : {
							type : Number,
							default : 0
						},
						value : null,
						onuploader : {
							type : Function,
							default : function(file, onpv) {
								return new Promise(function(next) {
									app.service.uploader.m_start(file, onpv, function(file, key, newurl) {
										next(newurl) ; // 返回新的名称
									}, function(err) {
										next() ;
									}) ;
								}) ;
							}
						}
					},
					'value' : function() {
	                	this.$nextTick(function() {
	                    	this.$emit('input', this.value) ;
	                    	this.$el.value = this.value ;
	                    }) ;
	                },
					data : function() {
						return {
							id : 'id-{uuid}'.replace('{uuid}', uuid()),
							mode : null,
							files : {} // 需要上传的文件
						}
					},
					mounted : function() {
						// this.m_ready() ;
						this.$nextTick(function() {
							var _self = this ;
							if(this.value instanceof Array) {
								this.mode = 2 ;
							} else {
								this.mode = 1 ;
							}
							this.m_reset() ;
							// 监听表单提交
							// 查询自己当前的表单
							var _e_form = $(this.$el).parents('form') ;
							if(_e_form.length) {
								var _form_sep = _e_form.prop('$sep') ;
								_form_sep.m_on('submit.before', function(ev) { // 当表单提交
									return new Promise(function(next) {
										_self.m_uploader({
											onall_pv : function(pv) {
												if($.isFunction(_form_sep.onall_pv)) {
													_form_sep.onall_pv(pv) ;
												}
											},
											onsingle_pv : function(pv) {
												if($.isFunction(_form_sep.onsingle_pv)) {
													_form_sep.onsingle_pv(pv) ;
												}
											}
										}).then(function() {
											next() ;
										}) ;
									}) ;
								}) ;
							}
						}) ;
						this.$emit('input', this.value) ;
						this.$el.value = this.value ;
					},
					methods : {
						m_reset : function() {
							this.files = {} ;
						},
						m_uploader : function(callbacks) { // 开始上传文件
							var _self = this ;
							var _index = 0 ;
							var _key = null ;
							var _file = null ;
							var _keys = Object.keys(this.files) ;
							return new Promise(function(next) {
								var _len = _keys.length ;
								var _progresses = {} ;
								if(_keys.length) {
									function _m_uploader() {
										_key = _keys.pop() ;
										if(_key) {
											_file = _self.files[_key] ;
											_self.onuploader(_file, function(pv) {
												var _pvs = 0 ;
												_progresses[_key] = pv ;
												for(key in _progresses) {
													_pvs += _progresses[key] ;
												}

												var _total_pv = Math.floor((_pvs / (_len * 100)) * 100) ;
												if($.isFunction(callbacks.onall_pv)) {
													callbacks.onall_pv(_total_pv) ;
												}
												if($.isFunction(callbacks.onsingle_pv)) {
													callbacks.onsingle_pv(_key, pv) ;
												}
											}).then(function(newurl) {
												if(1 == _self.mode) {
													_self.$el.value = newurl ;
													_self.$emit('input', newurl) ;
												} else if(2 == _self.mode) {
													_index = _self.m_get_index_from_filename(_key) ;
													Vue.set(_self.value, _index, newurl) ;
													_self.$el.value = _self.value ;
												}
												_m_uploader() ;
											}) ;
										} else { // 完成
											_self.m_reset() ;
											next() ;
										}
									}
									_m_uploader() ; // 开始上传
									// 清空
								} else {
									next() ;
								}
							}) ;
						},
						m_get_index_from_filename : function(name) {
							for(var i = 0; i < this.value.length; i++) {
								if(this.value[i] == name) {
									return i ;
								}
							}
							return -1 ;
						},
						m_choose : function(ev) { // 选择文件
							var _e_file = ev.target ;
							var _files = _e_file.files ;
							// 开始添加
							for(var i = 0; i < _files.length; i++) {
								var _file = _files[i] ;
								var _size = _file.size ;
								if(_size >= this.singlesize && 0 != this.singlesize) { // 大于最大的大小
									app.toast.m_show_text('单个文件最大 ' + (this.singlesize / 1024) + ' kb') ;
									continue ;
								}
								var _name = m_get_object_url(_file) ;
								if(this.files[_name]) {
									app.toast.m_show_text(_file.name + '文件已存在, 请勿重复添加') ;
								} else {
									if(-1 != _file.type.indexOf('video/')) { // 视屏文件
										_name = '*.mp4' ;
									}
									// 判断文件大小
									if(1 == this.mode) {
										this.files[_name] = _file ;
										this.$el.value = _name ;
										this.value = _name ;
										this.$emit('input', _name) ;
									} else if(2 == this.mode) { // 多文件
										if(this.value.length >= this.maxcounter && 0 != this.maxcounter) {
											app.toast.m_show_text('最多可上传' + this.maxcounter + '个文件') ;
											break ;
										} else {
											this.files[_name] = _file ;
											this.value.push(_name) ;
											this.$el.value = this.value ;	
										}
									}
								}
								
							}
							_e_file.value = '' ;
						}
					}
				})) ;
		        // --------------------------------------------- 文件上传 start ------------------------------------
		        // --------------------------------------------- 文件上传 end ------------------------------------
		        Vue.component('sep-button', m_dev_component({
		            props : {
		                wtext : {
		                    type : String,
		                    default : ''
		                },
		                disable : {
		                    type : Boolean,
		                    default : null,
		                },
		                icon : {
		                    type : String,
		                    default : ''
		                },
		                hidetext : {
		                    type : Boolean,
		                    default : null
		                },
		                loading : {
		                	type : Boolean,
		                	default : null
		                },
		                text : {
		                	type : String,
		                	default : null
		                },
		                name : {
		                	type : String,
		                	default : null
		                }
		            },
		            created : function() {
		            	this.m_ready() ;
		            	var _self = this ;
		            	svc.curr_view.m_on('leave', function() {
		            		_self.m_reset() ;
		            	}) ;
		            },
		            mounted : function() {
		                this.$el.$method = this.m_submit ;
		                var _button = this ;
		                this.$el.m_reset = function() {
		                    _button.m_reset() ;
		                }
		                this.$el.m_submit = this.m_submit ;
		            },
		            data : function() {
		                return {
		                    status : 0,
		                    loading_status : 0,
		                    wtext_status : 0,
		                    text_status : 1
		                }
		            },
		            methods : {
		                m_reset : function() {
		                    if(1 == this.status) {
		                        this.status = 0 ;
		                        this.loading_status = 0 ;
		                        this.wtext_status = 0 ;
		                        this.text_status = 1 ;
		                        $(this.$el).removeClass('disable') ;
		                    }
		                },
		                m_submit : function() {
		                    if(0 == this.status) {
		                        var _el = this.$el ;
		                        this.status = 1 ;
		                        if(this.wtext) {
		                        	this.wtext_status = 1 ;
		                        } else {
		                        	this.loading_status = 0 ;
		                        }
		                        if(false != this.loading) {
		                        	this.loading_status = 1 ;
		                        }
		                        if(true == this.wtext_status || this.loading_status) {
		                        	$(_el).addClass('disable') ;
		                        }
		                        if(true == this.hidetext) { // 异常文本
		                        	this.text_status = 0 ;
		                        }
		                    }
		                }
		            },
		            template : tpls.button
		        })) ;

		        Vue.component('sep-empty', m_dev_component({
		            props : {
		            	mt : {
		            		type : String,
		            		default : null
		            	},
		                text : {
		                    type : String,
		                    default : '暂无记录'
		                },
		                icon : {
		                    type : String,
		                    default : 'icon-empty'
		                }
		            },
		            template : tpls.empty
		        })) ;
		        Vue.component('sep-init', m_dev_component({
		            props : {
		            	mt : {
		            		type : String,
		            		default : null
		            	},
		                text : {
		                    type : String,
		                    default : '加载中,请稍后...'
		                },
		                icon : {
		                    type : String,
		                    default : 'icon-creative'
		                }
		            },
		            template : tpls.init
		        })) ;
		        Vue.component('sep-tip', m_dev_component({
		            props : {
		            	mt : {
		            		type : String,
		            		default : null
		            	},
		                text : {
		                    type : String,
		                    default : '提示'
		                },
		                icon : {
		                    type : String,
		                    default : 'icon-creative'
		                }
		            },
		            template : tpls.tip
		        })) ;
 
		        Vue.component('sep-invalid', m_dev_component({
		            props : {
		                text : {
		                    type : String,
		                    default : null
		                },
		                icon : {
		                    type : String,
		                    default : 'icon-creative'
		                }
		            },
		            template : tpls.invalid
		        })) ;

		        Vue.component('sep-sessionless', m_dev_component({
		            props : {
		            	mt : {
		            		type : String,
		            		default : null
		            	},
		                text : {
		                    type : String,
		                    default : '登录过期或尚未登录'
		                },
		                icon : {
		                    type : String,
		                    default : 'icon-my'
		                },
		                onclick : {
		                	type : Function,
		                	defualt : function() {

		                	}
		                }
		            },
		            methods : {
		            	m_login : function() {
		            		if($.isFunction(this.onclick)) {
		            			this.onclick() ;
		            		} else {
		            			svc.m_push('user.login') ;
		            		}
		            	}
		            },
		            template : tpls.sessionless
		        })) ;

		        Vue.component('sep-error', m_dev_component({
		            props : {
		            	mt : {
		            		type : String,
		            		default : null
		            	},
		                text : {
		                    type : String,
		                    default : '服务器异常'
		                },
		                icon : {
		                    type : String,
		                    default : 'icon-error'
		                }
		            },
		            template : tpls.error
		        })) ;
 
		        Vue.component('sep-invalid', m_dev_component({
		        	props : {
		        		mt : {
		            		type : String,
		            		default : null
		            	},
		                text : {
		                    type : String,
		                    default : '未知错误'
		                },
		                icon : {
		                    type : String,
		                    default : 'icon-unknown'
		                }
		            },
		            template : tpls.error
		        })) ;

		        Vue.component('sep-timeout', m_dev_component({
		        	props : {
		        		mt : {
		            		type : String,
		            		default : null
		            	},
		                text : {
		                    type : String,
		                    default : '请求超时'
		                },
		                icon : {
		                    type : String,
		                    default : 'icon-timeout'
		                }
		            },
		            template : tpls.error
		        })) ;

		        Vue.component('sep-lively-loader', m_dev_component({
		            template : tpls.livey_loader
		        })) ;
		        Vue.component('sep-dev', m_dev_component({
		        	data : function() {
		        		var _copyright = window.__copyright ;
		        		if(!_copyright) {
			        		_copyright = {
			        			name : '技术支持 坤晖软件',
			        			logo : 'data:image/png;base64,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'
			        		} ;
			        	}
		        		return {
		        			copyright : _copyright
		        		}
		        	},
		            template : tpls.dev
		        })) ;
		       	

		    }   
		}
		window.SepComponents = SepComponents ;
		window.SepLoader = SepLoader ;
		window.SepModal = SepModal ;
		window.SepToastSuper = SepToastSuper ;
		window.SepModalSuper = SepModalSuper ;
		window.SepNotify = SepNotify ;
		window.SepNotifySuper = SepNotifySuper ;
		+ (function() {
			Vue.directive('svl', {
				inserted : function(el, bingding, src) {
					Vue.nextTick(function() {
						var _svl = bingding.value ;
						_svl.m_init(el, bingding, src) ;
					}) ;
				},
				bind : function(el, bingding, src) {
					
				},
				unbind : function(el, bingding, src) { // 取消绑定
					var _svl = bingding.value ;
					_svl.m_clear() ;
				}
			}) ;
			function SepVirtualList(opts) {
				var _src = null ;
				var _bingding = null ;
				var _el = null ;
				var _collection = null ;
				this.model = null ;
				var _svl = this ;
				var _groups = null ;
				var _defaults = {
					size : 20,
					col : 1,
					buffer : 10,
					ih : null,
					onfilter : function() {
						
					}
				} ;
				var _settings = null ;
				var _index = null ;
				var _buffer = null ;
				var _size = null ;
				var _col = null ;
				var _sep_scroll = null ;
				var _e_child = null ;

				this.m_clear = function() {
					if(_sep_scroll) {
						_sep_scroll.m_off('scroll', 'svl') ;
					}
				}

				/*
					外部初始化
				*/
				this.m_init = function(el, bingding, src) {
					_el = el ;
					_bingding = bingding ;
					_e_scorll = $(_el).parents('.scroll') ;
					if(_e_scorll.length) {
						_sep_scroll = _e_scorll.prop('$sep') ;
					}
					_src = src ;
					_e_child = $(el).children() ;
					this.m_calc() ; // 计算高度
					this.m_display(0) ; // 开始显示
					_index = 0 ;
					if(_sep_scroll) { // 存在
						_sep_scroll.m_off('scroll', 'svl').m_on('scroll', function(ev, scroll_top) {
							// 开始确定组
							if('svl' == ev.alias) {
								var _group = _m_find_group(scroll_top) ;
								if(null == _group) return ;
								if(_group.index != _index) {
									_e_child.css('padding-top', _group.top) ;
									_index = _group.index ;	
									_svl.m_display(_index) ;	
								}
							}
						}, 'svl') ;
					}
					return this ;
				}
				/*
					查找组
				*/
				function _m_find_group(scroll_top) {
					var _group = null ;
					var _keys = Object.keys(_groups).reverse() ;
					for(var i = 0; i < _keys.length; i++) {
						var _key = _keys[i] ;
						_group = _groups[_key] ;
						if(scroll_top > _group.top) {
							_group = _group ;
							break ;
						}
					}
					return _group ;
				}
				/*
					开始显示
				*/
				this.m_display = function(index) {
					var _list = [] ;
					this.model = [] ; // 重置
					var _status = 1 ;
					function _m(index) {
						var _group = _groups[index] ;
						if(_group) {
							_status = 1 ;
							var _data = _group.data ;
							for(var i = 0; i < _data.length; i++) {
								_list.push(_data[i]) ;
							}
						} else {
							_status = 0 ;
						}
					}
					_m.call(this, index) ;
					while(_status && _list.length < _size) {
						index ++ ;
						_m.call(this, index) ;
					}
					this.model = _list ;
					return this ;
				}
				/*
					计算高度
				*/
				this.m_calc = function() {
					var _index = 0 ;
					var _len = 0 ;
					var _height = 0 ;
					_groups = {} ;
					if(!_collection) return ;
					while(_len < _collection.length) {
						var _start = _index * _buffer ;
						var _end = _start + _buffer ;
						var _data = _collection.slice(_start, _end) ;
						var _th = 0 ;
						var _h = 0 ;
						for(var i = 0; i < _data.length; i++) {
							_h = _data[i].height ;
							_h = _h ? _h : _settings.ih ;
							if(0 == i % _col) {
								_th += _h ;
							}
						}
						_groups[_index] = {
							index : _index,
							data : _data,
							top : _height
						} ;
						_height += _th ;
						_len += _data.length ;
						_index ++ ;
					}
					$(_el).innerHeight(_height) ;
					return this ;
				}
				/*
					内部开始初始化
				*/
				function _m_init() {
					_settings = $.extend(_defaults, opts) ;
					_size = _settings.size ;
					_buffer = _settings.buffer ;
					_col = _settings.col ;
					_collection = [] ;
					_index = 0 ;
				}
				this.m_add = function(item) {
					_collection.push(item) ;
					this.m_update() ;
				}
				this.m_adds = function(list) {
					list.forEach(function(item) {
						_collection.push(item) ;
					}) ;
					this.m_update() ;
				}
				this.m_set_buffer = function(buffer) {
					_buffer = parseInt(buffer) ;
					this.m_calc() ;
					return this ;
				}
				this.m_set_size = function(size) {
					_size = size ;
					this.m_display(_index) ; // 开始显示
					return this ;
				}
				this.m_reset = function() {
					_e_child.css('padding-top', 0) ;
					_index = 0 ;
					_collection = [] ;
					this.m_update() ;
				}
				this.m_update = function() { // 更新记录
					this.m_calc() ;
					this.m_display(_index) ; // 开始显示
				}
				this.m_get_len = function() {
					if(_collection) {
						return _collection.length ;
					} else {
						return 0 ;
					}
				}
				this.m_bind = function(data) {
					_collection = data ;
					this.m_calc() ;
					this.m_display(_index) ; // 开始显示
					if(_sep_scroll) {
						_sep_scroll.m_trigger('scroll', _sep_scroll.m_get_scroll_top()) ;
					}
					return this ;
				}
				_m_init() ;
			}
			window.SepVirtualList = SepVirtualList ;
		})() ;

		if($.isFunction(app.oncomponents_load)) { // 组件初始化完成
			app.oncomponents_load() ;
		}
	}).catch(function(e) {
		console.log(e) ;
	}) ;
}) ;;
