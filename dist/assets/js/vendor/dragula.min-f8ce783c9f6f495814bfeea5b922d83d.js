!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e()
else if("function"==typeof define&&define.amd)define([],e)
else{("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).dragula=e()}}((function(){return function e(n,t,o){function r(u,c){if(!t[u]){if(!n[u]){var a="function"==typeof require&&require
if(!c&&a)return a(u,!0)
if(i)return i(u,!0)
var f=new Error("Cannot find module '"+u+"'")
throw f.code="MODULE_NOT_FOUND",f}var l=t[u]={exports:{}}
n[u][0].call(l.exports,(function(e){var t=n[u][1][e]
return r(t||e)}),l,l.exports,e,n,t,o)}return t[u].exports}for(var i="function"==typeof require&&require,u=0;u<o.length;u++)r(o[u])
return r}({1:[function(e,n,t){"use strict"
function o(e){var n=r[e]
return n?n.lastIndex=0:r[e]=n=new RegExp(i+e+u,"g"),n}var r={},i="(?:^|\\s)",u="(?:\\s|$)"
n.exports={add:function(e,n){var t=e.className
t.length?o(n).test(t)||(e.className+=" "+n):e.className=n},rm:function(e,n){e.className=e.className.replace(o(n)," ").trim()}}},{}],2:[function(e,n,t){(function(t){"use strict"
function o(e,n,o,r){t.navigator.pointerEnabled?y[n](e,{mouseup:"pointerup",mousedown:"pointerdown",mousemove:"pointermove"}[o],r):t.navigator.msPointerEnabled?y[n](e,{mouseup:"MSPointerUp",mousedown:"MSPointerDown",mousemove:"MSPointerMove"}[o],r):(y[n](e,{mouseup:"touchend",mousedown:"touchstart",mousemove:"touchmove"}[o],r),y[n](e,o,r))}function r(e){if(void 0!==e.touches)return e.touches.length
if(void 0!==e.which&&0!==e.which)return e.which
if(void 0!==e.buttons)return e.buttons
var n=e.button
return void 0!==n?1&n?1:2&n?3:4&n?2:0:void 0}function i(e){var n=e.getBoundingClientRect()
return{left:n.left+u("scrollLeft","pageXOffset"),top:n.top+u("scrollTop","pageYOffset")}}function u(e,n){return void 0!==t[n]?t[n]:E.clientHeight?E[e]:w.body[e]}function c(e,n,t){var o,r=e||{},i=r.className
return r.className+=" gu-hide",o=w.elementFromPoint(n,t),r.className=i,o}function a(){return!1}function f(){return!0}function l(e){return e.width||e.right-e.left}function d(e){return e.height||e.bottom-e.top}function s(e){return e.parentNode===w?null:e.parentNode}function v(e){return"INPUT"===e.tagName||"TEXTAREA"===e.tagName||"SELECT"===e.tagName||p(e)}function p(e){return!!e&&("false"!==e.contentEditable&&("true"===e.contentEditable||p(s(e))))}function m(e){return e.nextElementSibling||function(){var n=e
do{n=n.nextSibling}while(n&&1!==n.nodeType)
return n}()}function g(e,n){var t=function(e){return e.targetTouches&&e.targetTouches.length?e.targetTouches[0]:e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:e}(n),o={pageX:"clientX",pageY:"clientY"}
return e in o&&!(e in t)&&o[e]in t&&(e=o[e]),t[e]}var h=e("contra/emitter"),y=e("crossvent"),b=e("./classes"),w=document,E=w.documentElement
n.exports=function(e,n){function t(e){return-1!==ne.containers.indexOf(e)||ee.isContainer(e)}function u(e){var n=e?"remove":"add"
o(E,n,"mousedown",C),o(E,n,"mouseup",B)}function p(e){o(E,e?"remove":"add","mousemove",O)}function x(e){var n=e?"remove":"add"
y[n](E,"selectstart",S),y[n](E,"click",S)}function S(e){W&&e.preventDefault()}function C(e){if(H=e.clientX,V=e.clientY,!(1!==r(e)||e.metaKey||e.ctrlKey)){var n=e.target,t=N(n)
t&&(W=t,p(),"mousedown"===e.type&&(v(n)?n.focus():e.preventDefault()))}}function O(e){if(W){if(0===r(e))return void B({})
if(void 0===e.clientX||e.clientX!==H||void 0===e.clientY||e.clientY!==V){if(ee.ignoreInputTextSelection){var n=g("clientX",e),t=g("clientY",e)
if(v(w.elementFromPoint(n,t)))return}var o=W
p(!0),x(),X(),T(o)
var u=i(F)
K=g("pageX",e)-u.left,z=g("pageY",e)-u.top,b.add(J||F,"gu-transit"),j(),A(e)}}}function N(e){if(!(ne.dragging&&U||t(e))){for(var n=e;s(e)&&!1===t(s(e));){if(ee.invalid(e,n))return
if(!(e=s(e)))return}var o=s(e)
if(o&&!ee.invalid(e,n))if(ee.moves(e,o,n,m(e)))return{item:e,source:o}}}function T(e){(function(e,n){return"boolean"==typeof ee.copy?ee.copy:ee.copy(e,n)})(e.item,e.source)&&(J=e.item.cloneNode(!0),ne.emit("cloned",J,e.item,"copy")),_=e.source,F=e.item,$=G=m(e.item),ne.dragging=!0,ne.emit("drag",F,_)}function X(){if(ne.dragging){var e=J||F
P(e,s(e))}}function Y(){W=!1,p(!0),x(!0)}function B(e){if(Y(),ne.dragging){var n=J||F,t=g("clientX",e),o=g("clientY",e),r=R(c(U,t,o),t,o)
r&&(J&&ee.copySortSource||!J||r!==_)?P(n,r):ee.removeOnSpill?D():I()}}function P(e,n){var t=s(e)
J&&ee.copySortSource&&n===_&&t.removeChild(F),M(n)?ne.emit("cancel",e,_,_):ne.emit("drop",e,n,_,G),L()}function D(){if(ne.dragging){var e=J||F,n=s(e)
n&&n.removeChild(e),ne.emit(J?"cancel":"remove",e,n,_),L()}}function I(e){if(ne.dragging){var n=arguments.length>0?e:ee.revertOnSpill,t=J||F,o=s(t),r=M(o)
!1===r&&n&&(J?o&&o.removeChild(J):_.insertBefore(t,$)),r||n?ne.emit("cancel",t,_,_):ne.emit("drop",t,o,_,G),L()}}function L(){var e=J||F
Y(),U&&(b.rm(ee.mirrorContainer,"gu-unselectable"),o(E,"remove","mousemove",A),s(U).removeChild(U),U=null),e&&b.rm(e,"gu-transit"),Q&&clearTimeout(Q),ne.dragging=!1,Z&&ne.emit("out",e,Z,_),ne.emit("dragend",e),_=F=J=$=G=Q=Z=null}function M(e,n){var t
return t=void 0!==n?n:U?G:m(J||F),e===_&&t===$}function R(e,n,o){function r(){if(!1===t(i))return!1
var r=k(i,e),u=q(i,r,n,o)
return!!M(i,u)||ee.accepts(F,i,_,u)}for(var i=e;i&&!r();)i=s(i)
return i}function A(e){function n(e){ne.emit(e,u,Z,_)}if(U){e.preventDefault()
var t=g("clientX",e),o=g("clientY",e),r=t-K,i=o-z
U.style.left=r+"px",U.style.top=i+"px"
var u=J||F,a=c(U,t,o),f=R(a,t,o),l=null!==f&&f!==Z;(l||null===f)&&(Z&&n("out"),Z=f,l&&n("over"))
var d=s(u)
if(f===_&&J&&!ee.copySortSource)return void(d&&d.removeChild(u))
var v,p=k(f,a)
if(null!==p)v=q(f,p,t,o)
else{if(!0!==ee.revertOnSpill||J)return void(J&&d&&d.removeChild(u))
v=$,f=_}(null===v&&l||v!==u&&v!==m(u))&&(G=v,f.insertBefore(u,v),ne.emit("shadow",u,f,_))}}function j(){if(!U){var e=F.getBoundingClientRect();(U=F.cloneNode(!0)).style.width=l(e)+"px",U.style.height=d(e)+"px",b.rm(U,"gu-transit"),b.add(U,"gu-mirror"),ee.mirrorContainer.appendChild(U),o(E,"add","mousemove",A),b.add(ee.mirrorContainer,"gu-unselectable"),ne.emit("cloned",U,F,"mirror")}}function k(e,n){for(var t=n;t!==e&&s(t)!==e;)t=s(t)
return t===E?null:t}function q(e,n,t,o){var r="horizontal"===ee.direction,i=n!==e?function(){var e=n.getBoundingClientRect()
return function(e){return e?m(n):n}(r?t>e.left+l(e)/2:o>e.top+d(e)/2)}():function(){var n,i,u,c=e.children.length
for(n=0;c>n;n++){if(u=(i=e.children[n]).getBoundingClientRect(),r&&u.left+u.width/2>t)return i
if(!r&&u.top+u.height/2>o)return i}return null}()
return i}1===arguments.length&&!1===Array.isArray(e)&&(n=e,e=[])
var U,_,F,K,z,H,V,$,G,J,Q,W,Z=null,ee=n||{}
void 0===ee.moves&&(ee.moves=f),void 0===ee.accepts&&(ee.accepts=f),void 0===ee.invalid&&(ee.invalid=function(){return!1}),void 0===ee.containers&&(ee.containers=e||[]),void 0===ee.isContainer&&(ee.isContainer=a),void 0===ee.copy&&(ee.copy=!1),void 0===ee.copySortSource&&(ee.copySortSource=!1),void 0===ee.revertOnSpill&&(ee.revertOnSpill=!1),void 0===ee.removeOnSpill&&(ee.removeOnSpill=!1),void 0===ee.direction&&(ee.direction="vertical"),void 0===ee.ignoreInputTextSelection&&(ee.ignoreInputTextSelection=!0),void 0===ee.mirrorContainer&&(ee.mirrorContainer=w.body)
var ne=h({containers:ee.containers,start:function(e){var n=N(e)
n&&T(n)},end:X,cancel:I,remove:D,destroy:function(){u(!0),B({})},canMove:function(e){return!!N(e)},dragging:!1})
return!0===ee.removeOnSpill&&ne.on("over",(function(e){b.rm(e,"gu-hide")})).on("out",(function(e){ne.dragging&&b.add(e,"gu-hide")})),u(),ne}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"./classes":1,"contra/emitter":5,crossvent:6}],3:[function(e,n,t){n.exports=function(e,n){return Array.prototype.slice.call(e,n)}},{}],4:[function(e,n,t){"use strict"
var o=e("ticky")
n.exports=function(e,n,t){e&&o((function(){e.apply(t||null,n||[])}))}},{ticky:9}],5:[function(e,n,t){"use strict"
var o=e("atoa"),r=e("./debounce")
n.exports=function(e,n){var t=n||{},i={}
return void 0===e&&(e={}),e.on=function(n,t){return i[n]?i[n].push(t):i[n]=[t],e},e.once=function(n,t){return t._once=!0,e.on(n,t),e},e.off=function(n,t){var o=arguments.length
if(1===o)delete i[n]
else if(0===o)i={}
else{var r=i[n]
if(!r)return e
r.splice(r.indexOf(t),1)}return e},e.emit=function(){var n=o(arguments)
return e.emitterSnapshot(n.shift()).apply(this,n)},e.emitterSnapshot=function(n){var u=(i[n]||[]).slice(0)
return function(){var i=o(arguments),c=this||e
if("error"===n&&!1!==t.throws&&!u.length)throw 1===i.length?i[0]:i
return u.forEach((function(o){t.async?r(o,i,c):o.apply(c,i),o._once&&e.off(n,o)})),e}},e}},{"./debounce":4,atoa:3}],6:[function(e,n,t){(function(t){"use strict"
function o(e,n,o){return function(n){var r=n||t.event
r.target=r.target||r.srcElement,r.preventDefault=r.preventDefault||function(){r.returnValue=!1},r.stopPropagation=r.stopPropagation||function(){r.cancelBubble=!0},r.which=r.which||r.keyCode,o.call(e,r)}}function r(e,n,t){var o=function(e,n,t){var o,r
for(o=0;o<l.length;o++)if((r=l[o]).element===e&&r.type===n&&r.fn===t)return o}(e,n,t)
if(o){var r=l[o].wrapper
return l.splice(o,1),r}}var i=e("custom-event"),u=e("./eventmap"),c=t.document,a=function(e,n,t,o){return e.addEventListener(n,t,o)},f=function(e,n,t,o){return e.removeEventListener(n,t,o)},l=[]
t.addEventListener||(a=function(e,n,t){return e.attachEvent("on"+n,function(e,n,t){var i=r(e,n,t)||o(e,n,t)
return l.push({wrapper:i,element:e,type:n,fn:t}),i}(e,n,t))},f=function(e,n,t){var o=r(e,n,t)
return o?e.detachEvent("on"+n,o):void 0}),n.exports={add:a,remove:f,fabricate:function(e,n,t){var o=-1===u.indexOf(n)?new i(n,{detail:t}):function(){var e
return c.createEvent?(e=c.createEvent("Event")).initEvent(n,!0,!0):c.createEventObject&&(e=c.createEventObject()),e}()
e.dispatchEvent?e.dispatchEvent(o):e.fireEvent("on"+n,o)}}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"./eventmap":7,"custom-event":8}],7:[function(e,n,t){(function(e){"use strict"
var t=[],o="",r=/^on/
for(o in e)r.test(o)&&t.push(o.slice(2))
n.exports=t}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],8:[function(e,n,t){(function(e){var t=e.CustomEvent
n.exports=function(){try{var e=new t("cat",{detail:{foo:"bar"}})
return"cat"===e.type&&"bar"===e.detail.foo}catch(n){}return!1}()?t:"function"==typeof document.createEvent?function(e,n){var t=document.createEvent("CustomEvent")
return n?t.initCustomEvent(e,n.bubbles,n.cancelable,n.detail):t.initCustomEvent(e,!1,!1,void 0),t}:function(e,n){var t=document.createEventObject()
return t.type=e,n?(t.bubbles=Boolean(n.bubbles),t.cancelable=Boolean(n.cancelable),t.detail=n.detail):(t.bubbles=!1,t.cancelable=!1,t.detail=void 0),t}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],9:[function(e,n,t){var o
o="function"==typeof setImmediate?function(e){setImmediate(e)}:function(e){setTimeout(e,0)},n.exports=o},{}]},{},[2])(2)}))
