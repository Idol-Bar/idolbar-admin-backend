!function(t,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports.britecharts=n():t.britecharts=n()}(window,(function(){return function(t){var n={}
function e(r){if(n[r])return n[r].exports
var i=n[r]={i:r,l:!1,exports:{}}
return t[r].call(i.exports,i,i.exports,e),i.l=!0,i.exports}return e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t
if(4&n&&"object"==typeof t&&t&&t.__esModule)return t
var r=Object.create(null)
if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var i in t)e.d(r,i,function(n){return t[n]}.bind(null,i))
return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t}
return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=88)}([function(t,n,e){"use strict"
e.r(n)
var r=function(t,n){return t<n?-1:t>n?1:t>=n?0:NaN},i=function(t){var n
return 1===t.length&&(n=t,t=function(t,e){return r(n(t),e)}),{left:function(n,e,r,i){for(null==r&&(r=0),null==i&&(i=n.length);r<i;){var a=r+i>>>1
t(n[a],e)<0?r=a+1:i=a}return r},right:function(n,e,r,i){for(null==r&&(r=0),null==i&&(i=n.length);r<i;){var a=r+i>>>1
t(n[a],e)>0?i=a:r=a+1}return r}}},a=i(r),o=a.right,u=a.left,c=o,l=function(t,n){null==n&&(n=s)
for(var e=0,r=t.length-1,i=t[0],a=new Array(r<0?0:r);e<r;)a[e]=n(i,i=t[++e])
return a}
function s(t,n){return[t,n]}var f=function(t,n,e){var r,i,a,o,u=t.length,c=n.length,l=new Array(u*c)
for(null==e&&(e=s),r=a=0;r<u;++r)for(o=t[r],i=0;i<c;++i,++a)l[a]=e(o,n[i])
return l},h=function(t,n){return n<t?-1:n>t?1:n>=t?0:NaN},d=function(t){return null===t?NaN:+t},p=function(t,n){var e,r,i=t.length,a=0,o=-1,u=0,c=0
if(null==n)for(;++o<i;)isNaN(e=d(t[o]))||(c+=(r=e-u)*(e-(u+=r/++a)))
else for(;++o<i;)isNaN(e=d(n(t[o],o,t)))||(c+=(r=e-u)*(e-(u+=r/++a)))
if(a>1)return c/(a-1)},g=function(t,n){var e=p(t,n)
return e?Math.sqrt(e):e},v=function(t,n){var e,r,i,a=t.length,o=-1
if(null==n){for(;++o<a;)if(null!=(e=t[o])&&e>=e)for(r=i=e;++o<a;)null!=(e=t[o])&&(r>e&&(r=e),i<e&&(i=e))}else for(;++o<a;)if(null!=(e=n(t[o],o,t))&&e>=e)for(r=i=e;++o<a;)null!=(e=n(t[o],o,t))&&(r>e&&(r=e),i<e&&(i=e))
return[r,i]},y=Array.prototype,m=y.slice,x=y.map,b=function(t){return function(){return t}},_=function(t){return t},w=function(t,n,e){t=+t,n=+n,e=(i=arguments.length)<2?(n=t,t=0,1):i<3?1:+e
for(var r=-1,i=0|Math.max(0,Math.ceil((n-t)/e)),a=new Array(i);++r<i;)a[r]=t+r*e
return a},M=Math.sqrt(50),A=Math.sqrt(10),k=Math.sqrt(2),O=function(t,n,e){var r,i,a,o,u=-1
if(e=+e,(t=+t)==(n=+n)&&e>0)return[t]
if((r=n<t)&&(i=t,t=n,n=i),0===(o=T(t,n,e))||!isFinite(o))return[]
if(o>0)for(t=Math.ceil(t/o),n=Math.floor(n/o),a=new Array(i=Math.ceil(n-t+1));++u<i;)a[u]=(t+u)*o
else for(t=Math.floor(t*o),n=Math.ceil(n*o),a=new Array(i=Math.ceil(t-n+1));++u<i;)a[u]=(t-u)/o
return r&&a.reverse(),a}
function T(t,n,e){var r=(n-t)/Math.max(0,e),i=Math.floor(Math.log(r)/Math.LN10),a=r/Math.pow(10,i)
return i>=0?(a>=M?10:a>=A?5:a>=k?2:1)*Math.pow(10,i):-Math.pow(10,-i)/(a>=M?10:a>=A?5:a>=k?2:1)}function C(t,n,e){var r=Math.abs(n-t)/Math.max(0,e),i=Math.pow(10,Math.floor(Math.log(r)/Math.LN10)),a=r/i
return a>=M?i*=10:a>=A?i*=5:a>=k&&(i*=2),n<t?-i:i}var S=function(t){return Math.ceil(Math.log(t.length)/Math.LN2)+1},N=function(){var t=_,n=v,e=S
function r(r){var i,a,o=r.length,u=new Array(o)
for(i=0;i<o;++i)u[i]=t(r[i],i,r)
var l=n(u),s=l[0],f=l[1],h=e(u,s,f)
Array.isArray(h)||(h=C(s,f,h),h=w(Math.ceil(s/h)*h,f,h))
for(var d=h.length;h[0]<=s;)h.shift(),--d
for(;h[d-1]>f;)h.pop(),--d
var p,g=new Array(d+1)
for(i=0;i<=d;++i)(p=g[i]=[]).x0=i>0?h[i-1]:s,p.x1=i<d?h[i]:f
for(i=0;i<o;++i)s<=(a=u[i])&&a<=f&&g[c(h,a,0,d)].push(r[i])
return g}return r.value=function(n){return arguments.length?(t="function"==typeof n?n:b(n),r):t},r.domain=function(t){return arguments.length?(n="function"==typeof t?t:b([t[0],t[1]]),r):n},r.thresholds=function(t){return arguments.length?(e="function"==typeof t?t:Array.isArray(t)?b(m.call(t)):b(t),r):e},r},j=function(t,n,e){if(null==e&&(e=d),r=t.length){if((n=+n)<=0||r<2)return+e(t[0],0,t)
if(n>=1)return+e(t[r-1],r-1,t)
var r,i=(r-1)*n,a=Math.floor(i),o=+e(t[a],a,t)
return o+(+e(t[a+1],a+1,t)-o)*(i-a)}},D=function(t,n,e){return t=x.call(t,d).sort(r),Math.ceil((e-n)/(2*(j(t,.75)-j(t,.25))*Math.pow(t.length,-1/3)))},E=function(t,n,e){return Math.ceil((e-n)/(3.5*g(t)*Math.pow(t.length,-1/3)))},L=function(t,n){var e,r,i=t.length,a=-1
if(null==n){for(;++a<i;)if(null!=(e=t[a])&&e>=e)for(r=e;++a<i;)null!=(e=t[a])&&e>r&&(r=e)}else for(;++a<i;)if(null!=(e=n(t[a],a,t))&&e>=e)for(r=e;++a<i;)null!=(e=n(t[a],a,t))&&e>r&&(r=e)
return r},F=function(t,n){var e,r=t.length,i=r,a=-1,o=0
if(null==n)for(;++a<r;)isNaN(e=d(t[a]))?--i:o+=e
else for(;++a<r;)isNaN(e=d(n(t[a],a,t)))?--i:o+=e
if(i)return o/i},R=function(t,n){var e,i=t.length,a=-1,o=[]
if(null==n)for(;++a<i;)isNaN(e=d(t[a]))||o.push(e)
else for(;++a<i;)isNaN(e=d(n(t[a],a,t)))||o.push(e)
return j(o.sort(r),.5)},P=function(t){for(var n,e,r,i=t.length,a=-1,o=0;++a<i;)o+=t[a].length
for(e=new Array(o);--i>=0;)for(n=(r=t[i]).length;--n>=0;)e[--o]=r[n]
return e},B=function(t,n){var e,r,i=t.length,a=-1
if(null==n){for(;++a<i;)if(null!=(e=t[a])&&e>=e)for(r=e;++a<i;)null!=(e=t[a])&&r>e&&(r=e)}else for(;++a<i;)if(null!=(e=n(t[a],a,t))&&e>=e)for(r=e;++a<i;)null!=(e=n(t[a],a,t))&&r>e&&(r=e)
return r},I=function(t,n){for(var e=n.length,r=new Array(e);e--;)r[e]=t[n[e]]
return r},U=function(t,n){if(e=t.length){var e,i,a=0,o=0,u=t[o]
for(null==n&&(n=r);++a<e;)(n(i=t[a],u)<0||0!==n(u,u))&&(u=i,o=a)
return 0===n(u,u)?o:void 0}},H=function(t,n,e){for(var r,i,a=(null==e?t.length:e)-(n=null==n?0:+n);a;)i=Math.random()*a--|0,r=t[a+n],t[a+n]=t[i+n],t[i+n]=r
return t},z=function(t,n){var e,r=t.length,i=-1,a=0
if(null==n)for(;++i<r;)(e=+t[i])&&(a+=e)
else for(;++i<r;)(e=+n(t[i],i,t))&&(a+=e)
return a},q=function(t){if(!(i=t.length))return[]
for(var n=-1,e=B(t,Y),r=new Array(e);++n<e;)for(var i,a=-1,o=r[n]=new Array(i);++a<i;)o[a]=t[a][n]
return r}
function Y(t){return t.length}var G=function(){return q(arguments)}
e.d(n,"bisect",(function(){return c})),e.d(n,"bisectRight",(function(){return o})),e.d(n,"bisectLeft",(function(){return u})),e.d(n,"ascending",(function(){return r})),e.d(n,"bisector",(function(){return i})),e.d(n,"cross",(function(){return f})),e.d(n,"descending",(function(){return h})),e.d(n,"deviation",(function(){return g})),e.d(n,"extent",(function(){return v})),e.d(n,"histogram",(function(){return N})),e.d(n,"thresholdFreedmanDiaconis",(function(){return D})),e.d(n,"thresholdScott",(function(){return E})),e.d(n,"thresholdSturges",(function(){return S})),e.d(n,"max",(function(){return L})),e.d(n,"mean",(function(){return F})),e.d(n,"median",(function(){return R})),e.d(n,"merge",(function(){return P})),e.d(n,"min",(function(){return B})),e.d(n,"pairs",(function(){return l})),e.d(n,"permute",(function(){return I})),e.d(n,"quantile",(function(){return j})),e.d(n,"range",(function(){return w})),e.d(n,"scan",(function(){return U})),e.d(n,"shuffle",(function(){return H})),e.d(n,"sum",(function(){return z})),e.d(n,"ticks",(function(){return O})),e.d(n,"tickIncrement",(function(){return T})),e.d(n,"tickStep",(function(){return C})),e.d(n,"transpose",(function(){return q})),e.d(n,"variance",(function(){return p})),e.d(n,"zip",(function(){return G}))},function(t,n,e){"use strict"
e.d(n,"a",(function(){return a}))
var r=new Date,i=new Date
function a(t,n,e,o){function u(n){return t(n=0===arguments.length?new Date:new Date(+n)),n}return u.floor=function(n){return t(n=new Date(+n)),n},u.ceil=function(e){return t(e=new Date(e-1)),n(e,1),t(e),e},u.round=function(t){var n=u(t),e=u.ceil(t)
return t-n<e-t?n:e},u.offset=function(t,e){return n(t=new Date(+t),null==e?1:Math.floor(e)),t},u.range=function(e,r,i){var a,o=[]
if(e=u.ceil(e),i=null==i?1:Math.floor(i),!(e<r&&i>0))return o
do{o.push(a=new Date(+e)),n(e,i),t(e)}while(a<e&&e<r)
return o},u.filter=function(e){return a((function(n){if(n>=n)for(;t(n),!e(n);)n.setTime(n-1)}),(function(t,r){if(t>=t)if(r<0)for(;++r<=0;)for(;n(t,-1),!e(t););else for(;--r>=0;)for(;n(t,1),!e(t););}))},e&&(u.count=function(n,a){return r.setTime(+n),i.setTime(+a),t(r),t(i),Math.floor(e(r,i))},u.every=function(t){return t=Math.floor(t),isFinite(t)&&t>0?t>1?u.filter(o?function(n){return o(n)%t==0}:function(n){return u.count(0,n)%t==0}):u:null}),u}},function(t,n,e){"use strict"
e.r(n)
var r=e(28),i=e(63),a=function(t){return Object(i.a)(Object(r.a)(t).call(document.documentElement))},o=0
function u(){return new c}function c(){this._="@"+(++o).toString(36)}c.prototype=u.prototype={constructor:c,get:function(t){for(var n=this._;!(n in t);)if(!(t=t.parentNode))return
return t[n]},set:function(t,n){return t[this._]=n},remove:function(t){return this._ in t&&delete t[this._]},toString:function(){return this._}}
var l=e(65),s=e(84),f=e(43),h=e(31),d=e(29),p=e(21),g=function(t){return"string"==typeof t?new p.a([document.querySelectorAll(t)],[document.documentElement]):new p.a([null==t?[]:t],p.c)},v=e(42),y=e(64),m=e(66),x=e(85),b=e(45),_=function(t,n){null==n&&(n=Object(b.a)().touches)
for(var e=0,r=n?n.length:0,i=new Array(r);e<r;++e)i[e]=Object(d.a)(t,n[e])
return i},w=e(44),M=e(36)
e.d(n,"create",(function(){return a})),e.d(n,"creator",(function(){return r.a})),e.d(n,"local",(function(){return u})),e.d(n,"matcher",(function(){return l.a})),e.d(n,"mouse",(function(){return s.a})),e.d(n,"namespace",(function(){return f.a})),e.d(n,"namespaces",(function(){return h.a})),e.d(n,"clientPoint",(function(){return d.a})),e.d(n,"select",(function(){return i.a})),e.d(n,"selectAll",(function(){return g})),e.d(n,"selection",(function(){return p.b})),e.d(n,"selector",(function(){return v.a})),e.d(n,"selectorAll",(function(){return y.a})),e.d(n,"style",(function(){return m.b})),e.d(n,"touch",(function(){return x.a})),e.d(n,"touches",(function(){return _})),e.d(n,"window",(function(){return w.a})),e.d(n,"event",(function(){return M.c})),e.d(n,"customEvent",(function(){return M.a}))},function(t,n,e){"use strict"
e.d(n,"d",(function(){return r})),e.d(n,"c",(function(){return i})),e.d(n,"b",(function(){return a})),e.d(n,"a",(function(){return o})),e.d(n,"e",(function(){return u}))
var r=1e3,i=6e4,a=36e5,o=864e5,u=6048e5},function(t,n,e){"use strict"
e.d(n,"c",(function(){return a})),e.d(n,"b",(function(){return o})),e.d(n,"a",(function(){return u}))
var r=e(47)
function i(t,n){return function(e){return t+e*n}}function a(t,n){var e=n-t
return e?i(t,e>180||e<-180?e-360*Math.round(e/360):e):Object(r.a)(isNaN(t)?n:t)}function o(t){return 1==(t=+t)?u:function(n,e){return e-n?function(t,n,e){return t=Math.pow(t,e),n=Math.pow(n,e)-t,e=1/e,function(r){return Math.pow(t+r*n,e)}}(n,e,t):Object(r.a)(isNaN(n)?e:n)}}function u(t,n){var e=n-t
return e?i(t,e):Object(r.a)(isNaN(t)?n:t)}},function(t,n,e){"use strict"
e.d(n,"g",(function(){return o})),e.d(n,"c",(function(){return u})),e.d(n,"k",(function(){return c})),e.d(n,"m",(function(){return l})),e.d(n,"i",(function(){return s})),e.d(n,"a",(function(){return f})),e.d(n,"e",(function(){return h})),e.d(n,"h",(function(){return d})),e.d(n,"d",(function(){return p})),e.d(n,"l",(function(){return g})),e.d(n,"n",(function(){return v})),e.d(n,"j",(function(){return y})),e.d(n,"b",(function(){return m})),e.d(n,"f",(function(){return x}))
var r=e(1),i=e(3)
function a(t){return Object(r.a)((function(n){n.setDate(n.getDate()-(n.getDay()+7-t)%7),n.setHours(0,0,0,0)}),(function(t,n){t.setDate(t.getDate()+7*n)}),(function(t,n){return(n-t-(n.getTimezoneOffset()-t.getTimezoneOffset())*i.c)/i.e}))}var o=a(0),u=a(1),c=a(2),l=a(3),s=a(4),f=a(5),h=a(6),d=o.range,p=u.range,g=c.range,v=l.range,y=s.range,m=f.range,x=h.range},function(t,n,e){"use strict"
e.d(n,"g",(function(){return o})),e.d(n,"c",(function(){return u})),e.d(n,"k",(function(){return c})),e.d(n,"m",(function(){return l})),e.d(n,"i",(function(){return s})),e.d(n,"a",(function(){return f})),e.d(n,"e",(function(){return h})),e.d(n,"h",(function(){return d})),e.d(n,"d",(function(){return p})),e.d(n,"l",(function(){return g})),e.d(n,"n",(function(){return v})),e.d(n,"j",(function(){return y})),e.d(n,"b",(function(){return m})),e.d(n,"f",(function(){return x}))
var r=e(1),i=e(3)
function a(t){return Object(r.a)((function(n){n.setUTCDate(n.getUTCDate()-(n.getUTCDay()+7-t)%7),n.setUTCHours(0,0,0,0)}),(function(t,n){t.setUTCDate(t.getUTCDate()+7*n)}),(function(t,n){return(n-t)/i.e}))}var o=a(0),u=a(1),c=a(2),l=a(3),s=a(4),f=a(5),h=a(6),d=o.range,p=u.range,g=c.range,v=l.range,y=s.range,m=f.range,x=h.range},function(t,n,e){"use strict"
e.d(n,"a",(function(){return i})),e.d(n,"d",(function(){return a})),e.d(n,"c",(function(){return o})),e.d(n,"e",(function(){return b})),e.d(n,"h",(function(){return M})),e.d(n,"g",(function(){return A})),e.d(n,"b",(function(){return k})),e.d(n,"f",(function(){return j}))
var r=e(13)
function i(){}var a=.7,o=1/a,u="\\s*([+-]?\\d+)\\s*",c="\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",l="\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",s=/^#([0-9a-f]{3,8})$/,f=new RegExp("^rgb\\("+[u,u,u]+"\\)$"),h=new RegExp("^rgb\\("+[l,l,l]+"\\)$"),d=new RegExp("^rgba\\("+[u,u,u,c]+"\\)$"),p=new RegExp("^rgba\\("+[l,l,l,c]+"\\)$"),g=new RegExp("^hsl\\("+[c,l,l]+"\\)$"),v=new RegExp("^hsla\\("+[c,l,l,c]+"\\)$"),y={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074}
function m(){return this.rgb().formatHex()}function x(){return this.rgb().formatRgb()}function b(t){var n,e
return t=(t+"").trim().toLowerCase(),(n=s.exec(t))?(e=n[1].length,n=parseInt(n[1],16),6===e?_(n):3===e?new k(n>>8&15|n>>4&240,n>>4&15|240&n,(15&n)<<4|15&n,1):8===e?new k(n>>24&255,n>>16&255,n>>8&255,(255&n)/255):4===e?new k(n>>12&15|n>>8&240,n>>8&15|n>>4&240,n>>4&15|240&n,((15&n)<<4|15&n)/255):null):(n=f.exec(t))?new k(n[1],n[2],n[3],1):(n=h.exec(t))?new k(255*n[1]/100,255*n[2]/100,255*n[3]/100,1):(n=d.exec(t))?w(n[1],n[2],n[3],n[4]):(n=p.exec(t))?w(255*n[1]/100,255*n[2]/100,255*n[3]/100,n[4]):(n=g.exec(t))?S(n[1],n[2]/100,n[3]/100,1):(n=v.exec(t))?S(n[1],n[2]/100,n[3]/100,n[4]):y.hasOwnProperty(t)?_(y[t]):"transparent"===t?new k(NaN,NaN,NaN,0):null}function _(t){return new k(t>>16&255,t>>8&255,255&t,1)}function w(t,n,e,r){return r<=0&&(t=n=e=NaN),new k(t,n,e,r)}function M(t){return t instanceof i||(t=b(t)),t?new k((t=t.rgb()).r,t.g,t.b,t.opacity):new k}function A(t,n,e,r){return 1===arguments.length?M(t):new k(t,n,e,null==r?1:r)}function k(t,n,e,r){this.r=+t,this.g=+n,this.b=+e,this.opacity=+r}function O(){return"#"+C(this.r)+C(this.g)+C(this.b)}function T(){var t=this.opacity
return(1===(t=isNaN(t)?1:Math.max(0,Math.min(1,t)))?"rgb(":"rgba(")+Math.max(0,Math.min(255,Math.round(this.r)||0))+", "+Math.max(0,Math.min(255,Math.round(this.g)||0))+", "+Math.max(0,Math.min(255,Math.round(this.b)||0))+(1===t?")":", "+t+")")}function C(t){return((t=Math.max(0,Math.min(255,Math.round(t)||0)))<16?"0":"")+t.toString(16)}function S(t,n,e,r){return r<=0?t=n=e=NaN:e<=0||e>=1?t=n=NaN:n<=0&&(t=NaN),new D(t,n,e,r)}function N(t){if(t instanceof D)return new D(t.h,t.s,t.l,t.opacity)
if(t instanceof i||(t=b(t)),!t)return new D
if(t instanceof D)return t
var n=(t=t.rgb()).r/255,e=t.g/255,r=t.b/255,a=Math.min(n,e,r),o=Math.max(n,e,r),u=NaN,c=o-a,l=(o+a)/2
return c?(u=n===o?(e-r)/c+6*(e<r):e===o?(r-n)/c+2:(n-e)/c+4,c/=l<.5?o+a:2-o-a,u*=60):c=l>0&&l<1?0:u,new D(u,c,l,t.opacity)}function j(t,n,e,r){return 1===arguments.length?N(t):new D(t,n,e,null==r?1:r)}function D(t,n,e,r){this.h=+t,this.s=+n,this.l=+e,this.opacity=+r}function E(t,n,e){return 255*(t<60?n+(e-n)*t/60:t<180?e:t<240?n+(e-n)*(240-t)/60:n)}Object(r.a)(i,b,{copy:function(t){return Object.assign(new this.constructor,this,t)},displayable:function(){return this.rgb().displayable()},hex:m,formatHex:m,formatHsl:function(){return N(this).formatHsl()},formatRgb:x,toString:x}),Object(r.a)(k,A,Object(r.b)(i,{brighter:function(t){return t=null==t?o:Math.pow(o,t),new k(this.r*t,this.g*t,this.b*t,this.opacity)},darker:function(t){return t=null==t?a:Math.pow(a,t),new k(this.r*t,this.g*t,this.b*t,this.opacity)},rgb:function(){return this},displayable:function(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:O,formatHex:O,formatRgb:T,toString:T})),Object(r.a)(D,j,Object(r.b)(i,{brighter:function(t){return t=null==t?o:Math.pow(o,t),new D(this.h,this.s,this.l*t,this.opacity)},darker:function(t){return t=null==t?a:Math.pow(a,t),new D(this.h,this.s,this.l*t,this.opacity)},rgb:function(){var t=this.h%360+360*(this.h<0),n=isNaN(t)||isNaN(this.s)?0:this.s,e=this.l,r=e+(e<.5?e:1-e)*n,i=2*e-r
return new k(E(t>=240?t-240:t+120,i,r),E(t,i,r),E(t<120?t+240:t-120,i,r),this.opacity)},displayable:function(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl:function(){var t=this.opacity
return(1===(t=isNaN(t)?1:Math.max(0,Math.min(1,t)))?"hsl(":"hsla(")+(this.h||0)+", "+100*(this.s||0)+"%, "+100*(this.l||0)+"%"+(1===t?")":", "+t+")")}}))},function(t,n,e){"use strict"
e.r(n)
var r,i,a=e(21),o=e(79),u=0,c=0,l=0,s=0,f=0,h=0,d="object"==typeof performance&&performance.now?performance:Date,p="object"==typeof window&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(t){setTimeout(t,17)}
function g(){return f||(p(v),f=d.now()+h)}function v(){f=0}function y(){this._call=this._time=this._next=null}function m(t,n,e){var r=new y
return r.restart(t,n,e),r}function x(){f=(s=d.now())+h,u=c=0
try{!function(){g(),++u
for(var t,n=r;n;)(t=f-n._time)>=0&&n._call.call(null,t),n=n._next;--u}()}finally{u=0,function(){for(var t,n,e=r,a=1/0;e;)e._call?(a>e._time&&(a=e._time),t=e,e=e._next):(n=e._next,e._next=null,e=t?t._next=n:r=n)
i=t,_(a)}(),f=0}}function b(){var t=d.now(),n=t-s
n>1e3&&(h-=n,s=t)}function _(t){u||(c&&(c=clearTimeout(c)),t-f>24?(t<1/0&&(c=setTimeout(x,t-d.now()-h)),l&&(l=clearInterval(l))):(l||(s=d.now(),l=setInterval(b,1e3)),u=1,p(x)))}y.prototype=m.prototype={constructor:y,restart:function(t,n,e){if("function"!=typeof t)throw new TypeError("callback is not a function")
e=(null==e?g():+e)+(null==n?0:+n),this._next||i===this||(i?i._next=this:r=this,i=this),this._call=t,this._time=e,_()},stop:function(){this._call&&(this._call=null,this._time=1/0,_())}}
var w=function(t,n,e){var r=new y
return n=null==n?0:+n,r.restart((function(e){r.stop(),t(e+n)}),n,e),r},M=Object(o.a)("start","end","cancel","interrupt"),A=[],k=function(t,n,e,r,i,a){var o=t.__transition
if(o){if(e in o)return}else t.__transition={}
!function(t,n,e){var r,i=t.__transition
function a(c){var l,s,f,h
if(1!==e.state)return u()
for(l in i)if((h=i[l]).name===e.name){if(3===h.state)return w(a)
4===h.state?(h.state=6,h.timer.stop(),h.on.call("interrupt",t,t.__data__,h.index,h.group),delete i[l]):+l<n&&(h.state=6,h.timer.stop(),h.on.call("cancel",t,t.__data__,h.index,h.group),delete i[l])}if(w((function(){3===e.state&&(e.state=4,e.timer.restart(o,e.delay,e.time),o(c))})),e.state=2,e.on.call("start",t,t.__data__,e.index,e.group),2===e.state){for(e.state=3,r=new Array(f=e.tween.length),l=0,s=-1;l<f;++l)(h=e.tween[l].value.call(t,t.__data__,e.index,e.group))&&(r[++s]=h)
r.length=s+1}}function o(n){for(var i=n<e.duration?e.ease.call(null,n/e.duration):(e.timer.restart(u),e.state=5,1),a=-1,o=r.length;++a<o;)r[a].call(t,i)
5===e.state&&(e.on.call("end",t,t.__data__,e.index,e.group),u())}function u(){for(var r in e.state=6,e.timer.stop(),delete i[n],i)return
delete t.__transition}i[n]=e,e.timer=m((function(t){e.state=1,e.timer.restart(a,e.delay,e.time),e.delay<=t&&a(t-e.delay)}),0,e.time)}(t,e,{name:n,index:r,group:i,on:M,tween:A,time:a.time,delay:a.delay,duration:a.duration,ease:a.ease,timer:null,state:0})}
function O(t,n){var e=C(t,n)
if(e.state>0)throw new Error("too late; already scheduled")
return e}function T(t,n){var e=C(t,n)
if(e.state>3)throw new Error("too late; already running")
return e}function C(t,n){var e=t.__transition
if(!e||!(e=e[n]))throw new Error("transition not found")
return e}var S=function(t,n){var e,r,i,a=t.__transition,o=!0
if(a){for(i in n=null==n?null:n+"",a)(e=a[i]).name===n?(r=e.state>2&&e.state<5,e.state=6,e.timer.stop(),e.on.call(r?"interrupt":"cancel",t,t.__data__,e.index,e.group),delete a[i]):o=!1
o&&delete t.__transition}},N=e(77),j=e(43)
function D(t,n){var e,r
return function(){var i=T(this,t),a=i.tween
if(a!==e)for(var o=0,u=(r=e=a).length;o<u;++o)if(r[o].name===n){(r=r.slice()).splice(o,1)
break}i.tween=r}}function E(t,n,e){var r,i
if("function"!=typeof e)throw new Error
return function(){var a=T(this,t),o=a.tween
if(o!==r){i=(r=o).slice()
for(var u={name:n,value:e},c=0,l=i.length;c<l;++c)if(i[c].name===n){i[c]=u
break}c===l&&i.push(u)}a.tween=i}}function L(t,n,e){var r=t._id
return t.each((function(){var t=T(this,r);(t.value||(t.value={}))[n]=e.apply(this,arguments)})),function(t){return C(t,r).value[n]}}var F=e(7),R=e(12),P=e(35),B=e(58),I=function(t,n){var e
return("number"==typeof n?R.a:n instanceof F.e?P.a:(e=Object(F.e)(n))?(n=e,P.a):B.a)(t,n)}
function U(t){return function(){this.removeAttribute(t)}}function H(t){return function(){this.removeAttributeNS(t.space,t.local)}}function z(t,n,e){var r,i,a=e+""
return function(){var o=this.getAttribute(t)
return o===a?null:o===r?i:i=n(r=o,e)}}function q(t,n,e){var r,i,a=e+""
return function(){var o=this.getAttributeNS(t.space,t.local)
return o===a?null:o===r?i:i=n(r=o,e)}}function Y(t,n,e){var r,i,a
return function(){var o,u,c=e(this)
if(null!=c)return(o=this.getAttribute(t))===(u=c+"")?null:o===r&&u===i?a:(i=u,a=n(r=o,c))
this.removeAttribute(t)}}function G(t,n,e){var r,i,a
return function(){var o,u,c=e(this)
if(null!=c)return(o=this.getAttributeNS(t.space,t.local))===(u=c+"")?null:o===r&&u===i?a:(i=u,a=n(r=o,c))
this.removeAttributeNS(t.space,t.local)}}function V(t,n){var e,r
function i(){var i=n.apply(this,arguments)
return i!==r&&(e=(r=i)&&function(t,n){return function(e){this.setAttributeNS(t.space,t.local,n.call(this,e))}}(t,i)),e}return i._value=n,i}function W(t,n){var e,r
function i(){var i=n.apply(this,arguments)
return i!==r&&(e=(r=i)&&function(t,n){return function(e){this.setAttribute(t,n.call(this,e))}}(t,i)),e}return i._value=n,i}function X(t,n){return function(){O(this,t).delay=+n.apply(this,arguments)}}function $(t,n){return n=+n,function(){O(this,t).delay=n}}function Q(t,n){return function(){T(this,t).duration=+n.apply(this,arguments)}}function Z(t,n){return n=+n,function(){T(this,t).duration=n}}var K=e(65)
var J=e(42),tt=e(64),nt=a.b.prototype.constructor,et=e(66)
function rt(t){return function(){this.style.removeProperty(t)}}var it=0
function at(t,n,e,r){this._groups=t,this._parents=n,this._name=e,this._id=r}function ot(t){return Object(a.b)().transition(t)}function ut(){return++it}var ct=a.b.prototype
at.prototype=ot.prototype={constructor:at,select:function(t){var n=this._name,e=this._id
"function"!=typeof t&&(t=Object(J.a)(t))
for(var r=this._groups,i=r.length,a=new Array(i),o=0;o<i;++o)for(var u,c,l=r[o],s=l.length,f=a[o]=new Array(s),h=0;h<s;++h)(u=l[h])&&(c=t.call(u,u.__data__,h,l))&&("__data__"in u&&(c.__data__=u.__data__),f[h]=c,k(f[h],n,e,h,f,C(u,e)))
return new at(a,this._parents,n,e)},selectAll:function(t){var n=this._name,e=this._id
"function"!=typeof t&&(t=Object(tt.a)(t))
for(var r=this._groups,i=r.length,a=[],o=[],u=0;u<i;++u)for(var c,l=r[u],s=l.length,f=0;f<s;++f)if(c=l[f]){for(var h,d=t.call(c,c.__data__,f,l),p=C(c,e),g=0,v=d.length;g<v;++g)(h=d[g])&&k(h,n,e,g,d,p)
a.push(d),o.push(c)}return new at(a,o,n,e)},filter:function(t){"function"!=typeof t&&(t=Object(K.a)(t))
for(var n=this._groups,e=n.length,r=new Array(e),i=0;i<e;++i)for(var a,o=n[i],u=o.length,c=r[i]=[],l=0;l<u;++l)(a=o[l])&&t.call(a,a.__data__,l,o)&&c.push(a)
return new at(r,this._parents,this._name,this._id)},merge:function(t){if(t._id!==this._id)throw new Error
for(var n=this._groups,e=t._groups,r=n.length,i=e.length,a=Math.min(r,i),o=new Array(r),u=0;u<a;++u)for(var c,l=n[u],s=e[u],f=l.length,h=o[u]=new Array(f),d=0;d<f;++d)(c=l[d]||s[d])&&(h[d]=c)
for(;u<r;++u)o[u]=n[u]
return new at(o,this._parents,this._name,this._id)},selection:function(){return new nt(this._groups,this._parents)},transition:function(){for(var t=this._name,n=this._id,e=ut(),r=this._groups,i=r.length,a=0;a<i;++a)for(var o,u=r[a],c=u.length,l=0;l<c;++l)if(o=u[l]){var s=C(o,n)
k(o,t,e,l,u,{time:s.time+s.delay+s.duration,delay:0,duration:s.duration,ease:s.ease})}return new at(r,this._parents,t,e)},call:ct.call,nodes:ct.nodes,node:ct.node,size:ct.size,empty:ct.empty,each:ct.each,on:function(t,n){var e=this._id
return arguments.length<2?C(this.node(),e).on.on(t):this.each(function(t,n,e){var r,i,a=function(t){return(t+"").trim().split(/^|\s+/).every((function(t){var n=t.indexOf(".")
return n>=0&&(t=t.slice(0,n)),!t||"start"===t}))}(n)?O:T
return function(){var o=a(this,t),u=o.on
u!==r&&(i=(r=u).copy()).on(n,e),o.on=i}}(e,t,n))},attr:function(t,n){var e=Object(j.a)(t),r="transform"===e?N.b:I
return this.attrTween(t,"function"==typeof n?(e.local?G:Y)(e,r,L(this,"attr."+t,n)):null==n?(e.local?H:U)(e):(e.local?q:z)(e,r,n))},attrTween:function(t,n){var e="attr."+t
if(arguments.length<2)return(e=this.tween(e))&&e._value
if(null==n)return this.tween(e,null)
if("function"!=typeof n)throw new Error
var r=Object(j.a)(t)
return this.tween(e,(r.local?V:W)(r,n))},style:function(t,n,e){var r="transform"==(t+="")?N.a:I
return null==n?this.styleTween(t,function(t,n){var e,r,i
return function(){var a=Object(et.b)(this,t),o=(this.style.removeProperty(t),Object(et.b)(this,t))
return a===o?null:a===e&&o===r?i:i=n(e=a,r=o)}}(t,r)).on("end.style."+t,rt(t)):"function"==typeof n?this.styleTween(t,function(t,n,e){var r,i,a
return function(){var o=Object(et.b)(this,t),u=e(this),c=u+""
return null==u&&(this.style.removeProperty(t),c=u=Object(et.b)(this,t)),o===c?null:o===r&&c===i?a:(i=c,a=n(r=o,u))}}(t,r,L(this,"style."+t,n))).each(function(t,n){var e,r,i,a,o="style."+n,u="end."+o
return function(){var c=T(this,t),l=c.on,s=null==c.value[o]?a||(a=rt(n)):void 0
l===e&&i===s||(r=(e=l).copy()).on(u,i=s),c.on=r}}(this._id,t)):this.styleTween(t,function(t,n,e){var r,i,a=e+""
return function(){var o=Object(et.b)(this,t)
return o===a?null:o===r?i:i=n(r=o,e)}}(t,r,n),e).on("end.style."+t,null)},styleTween:function(t,n,e){var r="style."+(t+="")
if(arguments.length<2)return(r=this.tween(r))&&r._value
if(null==n)return this.tween(r,null)
if("function"!=typeof n)throw new Error
return this.tween(r,function(t,n,e){var r,i
function a(){var a=n.apply(this,arguments)
return a!==i&&(r=(i=a)&&function(t,n,e){return function(r){this.style.setProperty(t,n.call(this,r),e)}}(t,a,e)),r}return a._value=n,a}(t,n,null==e?"":e))},text:function(t){return this.tween("text","function"==typeof t?function(t){return function(){var n=t(this)
this.textContent=null==n?"":n}}(L(this,"text",t)):function(t){return function(){this.textContent=t}}(null==t?"":t+""))},textTween:function(t){var n="text"
if(arguments.length<1)return(n=this.tween(n))&&n._value
if(null==t)return this.tween(n,null)
if("function"!=typeof t)throw new Error
return this.tween(n,function(t){var n,e
function r(){var r=t.apply(this,arguments)
return r!==e&&(n=(e=r)&&function(t){return function(n){this.textContent=t.call(this,n)}}(r)),n}return r._value=t,r}(t))},remove:function(){return this.on("end.remove",(t=this._id,function(){var n=this.parentNode
for(var e in this.__transition)if(+e!==t)return
n&&n.removeChild(this)}))
var t},tween:function(t,n){var e=this._id
if(t+="",arguments.length<2){for(var r,i=C(this.node(),e).tween,a=0,o=i.length;a<o;++a)if((r=i[a]).name===t)return r.value
return null}return this.each((null==n?D:E)(e,t,n))},delay:function(t){var n=this._id
return arguments.length?this.each(("function"==typeof t?X:$)(n,t)):C(this.node(),n).delay},duration:function(t){var n=this._id
return arguments.length?this.each(("function"==typeof t?Q:Z)(n,t)):C(this.node(),n).duration},ease:function(t){var n=this._id
return arguments.length?this.each(function(t,n){if("function"!=typeof n)throw new Error
return function(){T(this,t).ease=n}}(n,t)):C(this.node(),n).ease},end:function(){var t,n,e=this,r=e._id,i=e.size()
return new Promise((function(a,o){var u={value:o},c={value:function(){0==--i&&a()}}
e.each((function(){var e=T(this,r),i=e.on
i!==t&&((n=(t=i).copy())._.cancel.push(u),n._.interrupt.push(u),n._.end.push(c)),e.on=n}))}))}}
var lt={time:null,delay:0,duration:250,ease:e(48).b}
function st(t,n){for(var e;!(e=t.__transition)||!(e=e[n]);)if(!(t=t.parentNode))return lt.time=g(),lt
return e}a.b.prototype.interrupt=function(t){return this.each((function(){S(this,t)}))},a.b.prototype.transition=function(t){var n,e
t instanceof at?(n=t._id,t=t._name):(n=ut(),(e=lt).time=g(),t=null==t?null:t+"")
for(var r=this._groups,i=r.length,a=0;a<i;++a)for(var o,u=r[a],c=u.length,l=0;l<c;++l)(o=u[l])&&k(o,t,n,l,u,e||st(o,n))
return new at(r,this._parents,t,n)}
var ft=[null],ht=function(t,n){var e,r,i=t.__transition
if(i)for(r in n=null==n?null:n+"",i)if((e=i[r]).state>1&&e.name===n)return new at([[t]],ft,n,+r)
return null}
e.d(n,"transition",(function(){return ot})),e.d(n,"active",(function(){return ht})),e.d(n,"interrupt",(function(){return S}))},function(t,n,e){"use strict"
e.r(n)
var r=e(55)
e.d(n,"formatDefaultLocale",(function(){return r.a})),e.d(n,"format",(function(){return r.b})),e.d(n,"formatPrefix",(function(){return r.c}))
var i=e(67)
e.d(n,"formatLocale",(function(){return i.a}))
var a=e(39)
e.d(n,"formatSpecifier",(function(){return a.b})),e.d(n,"FormatSpecifier",(function(){return a.a}))
var o=e(80)
e.d(n,"precisionFixed",(function(){return o.a}))
var u=e(81)
e.d(n,"precisionPrefix",(function(){return u.a}))
var c=e(82)
e.d(n,"precisionRound",(function(){return c.a}))},function(t,n,e){"use strict"
var r
void 0===(r=function(){return{colorSchemas:{britecharts:["#6aedc7","#39c2c9","#ffce00","#ffa71a","#f866b9","#998ce3"],grey:["#F8F8FA","#EFF2F5","#D2D6DF","#C3C6CF","#ADB0B6","#666A73","#45494E","#363A43","#282C35"],orange:["#fcc870","#ffa71a","#fb8825","#f6682f","#db5a2c","#bf4c28","#a43b1c","#892a10","#f9e9c5"],blueGreen:["#ccf7f6","#70e4e0","#00d8d2","#00acaf","#007f8c","#005e66","#003c3f","#002d2f","#0d2223"],teal:["#ccfffe","#94f7f4","#00fff8","#1de1e1","#39c2c9","#2e9a9d","#227270","#1a5957","#133f3e"],green:["#edfff7","#d7ffef","#c0ffe7","#95f5d7","#6aedc7","#59c3a3","#479980","#34816a","#206953"],yellow:["#f9f2b3","#fbe986","#fce05a","#fed72d","#ffce00","#fcc11c","#f9b438","#eda629","#e09819"],pink:["#fdd1ea","#fb9cd2","#f866b9","#fc40b6","#ff1ab3","#e3239d","#c62c86","#a62073","#85135f"],purple:["#ddd6fc","#bbb1f0","#998ce3","#8e6bc1","#824a9e","#77337f","#6b1c60","#591650","#470f3f"],red:["#ffd8d4","#ffb5b0","#ff938c","#ff766c","#ff584c","#f04b42","#e03d38","#be2e29","#9c1e19"]},colorSchemasHuman:{britecharts:"Britecharts Default",grey:"Britecharts Grey",orange:"Orange",blueGreen:"Blue",teal:"Light Blue",green:"Green",yellow:"Yellow",pink:"Pink",purple:"Purple",red:"Red"},colorGradients:{greenBlue:["#39C7EA","#4CDCBA"],orangePink:["#FBC670","#F766B8"],bluePurple:["#3DC3C9","#824a9e"]},colorGradientsHuman:{greenBlue:"Green to Blue",orangePink:"Orange to Pink",bluePurple:"Blue to Purple"},singleColors:{aloeGreen:["#7bdcc0"],greenColor:["#6aedc7"],blueColor:["#39c2c9"],yellowColor:["#ffce00"],orangeColor:["#ffa71a"],pinkColor:["#f866b9"],purpleColor:["#998ce3"]},singleColorsHuman:{aloeGreen:"Aloe Green",greenColor:"Green",blueColor:"Blue",yellowColor:"Yellow",orangeColor:"Orange",pinkColor:"Pink",purpleColor:"Purple"}}}.call(n,e,n,t))||(t.exports=r)},function(t,n,e){"use strict"
function r(t){return+t}function i(t){return t*t}function a(t){return t*(2-t)}function o(t){return((t*=2)<=1?t*t:--t*(2-t)+1)/2}e.r(n)
var u=e(48),c=function t(n){function e(t){return Math.pow(t,n)}return n=+n,e.exponent=t,e}(3),l=function t(n){function e(t){return 1-Math.pow(1-t,n)}return n=+n,e.exponent=t,e}(3),s=function t(n){function e(t){return((t*=2)<=1?Math.pow(t,n):2-Math.pow(2-t,n))/2}return n=+n,e.exponent=t,e}(3),f=Math.PI,h=f/2
function d(t){return 1-Math.cos(t*h)}function p(t){return Math.sin(t*h)}function g(t){return(1-Math.cos(f*t))/2}function v(t){return Math.pow(2,10*t-10)}function y(t){return 1-Math.pow(2,-10*t)}function m(t){return((t*=2)<=1?Math.pow(2,10*t-10):2-Math.pow(2,10-10*t))/2}function x(t){return 1-Math.sqrt(1-t*t)}function b(t){return Math.sqrt(1- --t*t)}function _(t){return((t*=2)<=1?1-Math.sqrt(1-t*t):Math.sqrt(1-(t-=2)*t)+1)/2}var w=7.5625
function M(t){return 1-A(1-t)}function A(t){return(t=+t)<4/11?w*t*t:t<8/11?w*(t-=6/11)*t+.75:t<10/11?w*(t-=9/11)*t+.9375:w*(t-=21/22)*t+63/64}function k(t){return((t*=2)<=1?1-A(1-t):A(t-1)+1)/2}var O=function t(n){function e(t){return t*t*((n+1)*t-n)}return n=+n,e.overshoot=t,e}(1.70158),T=function t(n){function e(t){return--t*t*((n+1)*t+n)+1}return n=+n,e.overshoot=t,e}(1.70158),C=function t(n){function e(t){return((t*=2)<1?t*t*((n+1)*t-n):(t-=2)*t*((n+1)*t+n)+2)/2}return n=+n,e.overshoot=t,e}(1.70158),S=2*Math.PI,N=function t(n,e){var r=Math.asin(1/(n=Math.max(1,n)))*(e/=S)
function i(t){return n*Math.pow(2,10*--t)*Math.sin((r-t)/e)}return i.amplitude=function(n){return t(n,e*S)},i.period=function(e){return t(n,e)},i}(1,.3),j=function t(n,e){var r=Math.asin(1/(n=Math.max(1,n)))*(e/=S)
function i(t){return 1-n*Math.pow(2,-10*(t=+t))*Math.sin((t+r)/e)}return i.amplitude=function(n){return t(n,e*S)},i.period=function(e){return t(n,e)},i}(1,.3),D=function t(n,e){var r=Math.asin(1/(n=Math.max(1,n)))*(e/=S)
function i(t){return((t=2*t-1)<0?n*Math.pow(2,10*t)*Math.sin((r-t)/e):2-n*Math.pow(2,-10*t)*Math.sin((r+t)/e))/2}return i.amplitude=function(n){return t(n,e*S)},i.period=function(e){return t(n,e)},i}(1,.3)
e.d(n,"easeLinear",(function(){return r})),e.d(n,"easeQuad",(function(){return o})),e.d(n,"easeQuadIn",(function(){return i})),e.d(n,"easeQuadOut",(function(){return a})),e.d(n,"easeQuadInOut",(function(){return o})),e.d(n,"easeCubic",(function(){return u.b})),e.d(n,"easeCubicIn",(function(){return u.a})),e.d(n,"easeCubicOut",(function(){return u.c})),e.d(n,"easeCubicInOut",(function(){return u.b})),e.d(n,"easePoly",(function(){return s})),e.d(n,"easePolyIn",(function(){return c})),e.d(n,"easePolyOut",(function(){return l})),e.d(n,"easePolyInOut",(function(){return s})),e.d(n,"easeSin",(function(){return g})),e.d(n,"easeSinIn",(function(){return d})),e.d(n,"easeSinOut",(function(){return p})),e.d(n,"easeSinInOut",(function(){return g})),e.d(n,"easeExp",(function(){return m})),e.d(n,"easeExpIn",(function(){return v})),e.d(n,"easeExpOut",(function(){return y})),e.d(n,"easeExpInOut",(function(){return m})),e.d(n,"easeCircle",(function(){return _})),e.d(n,"easeCircleIn",(function(){return x})),e.d(n,"easeCircleOut",(function(){return b})),e.d(n,"easeCircleInOut",(function(){return _})),e.d(n,"easeBounce",(function(){return A})),e.d(n,"easeBounceIn",(function(){return M})),e.d(n,"easeBounceOut",(function(){return A})),e.d(n,"easeBounceInOut",(function(){return k})),e.d(n,"easeBack",(function(){return C})),e.d(n,"easeBackIn",(function(){return O})),e.d(n,"easeBackOut",(function(){return T})),e.d(n,"easeBackInOut",(function(){return C})),e.d(n,"easeElastic",(function(){return j})),e.d(n,"easeElasticIn",(function(){return N})),e.d(n,"easeElasticOut",(function(){return j})),e.d(n,"easeElasticInOut",(function(){return D}))},function(t,n,e){"use strict"
n.a=function(t,n){return t=+t,n=+n,function(e){return t*(1-e)+n*e}}},function(t,n,e){"use strict"
function r(t,n){var e=Object.create(t.prototype)
for(var r in n)e[r]=n[r]
return e}e.d(n,"b",(function(){return r})),n.a=function(t,n,e){t.prototype=n.prototype=e,e.constructor=t}},function(t,n,e){"use strict"
e.r(n)
var r=e(0)
function i(t,n){switch(arguments.length){case 0:break
case 1:this.range(t)
break
default:this.range(n).domain(t)}return this}function a(t,n){switch(arguments.length){case 0:break
case 1:this.interpolator(t)
break
default:this.interpolator(n).domain(t)}return this}var o=e(27),u=Array.prototype,c=u.map,l=u.slice,s={name:"implicit"}
function f(){var t=Object(o.map)(),n=[],e=[],r=s
function a(i){var a=i+"",o=t.get(a)
if(!o){if(r!==s)return r
t.set(a,o=n.push(i))}return e[(o-1)%e.length]}return a.domain=function(e){if(!arguments.length)return n.slice()
n=[],t=Object(o.map)()
for(var r,i,u=-1,c=e.length;++u<c;)t.has(i=(r=e[u])+"")||t.set(i,n.push(r))
return a},a.range=function(t){return arguments.length?(e=l.call(t),a):e.slice()},a.unknown=function(t){return arguments.length?(r=t,a):r},a.copy=function(){return f(n,e).unknown(r)},i.apply(a,arguments),a}function h(){var t,n,e=f().unknown(void 0),a=e.domain,o=e.range,u=[0,1],c=!1,l=0,s=0,d=.5
function p(){var e=a().length,i=u[1]<u[0],f=u[i-0],h=u[1-i]
t=(h-f)/Math.max(1,e-l+2*s),c&&(t=Math.floor(t)),f+=(h-f-t*(e-l))*d,n=t*(1-l),c&&(f=Math.round(f),n=Math.round(n))
var p=Object(r.range)(e).map((function(n){return f+t*n}))
return o(i?p.reverse():p)}return delete e.unknown,e.domain=function(t){return arguments.length?(a(t),p()):a()},e.range=function(t){return arguments.length?(u=[+t[0],+t[1]],p()):u.slice()},e.rangeRound=function(t){return u=[+t[0],+t[1]],c=!0,p()},e.bandwidth=function(){return n},e.step=function(){return t},e.round=function(t){return arguments.length?(c=!!t,p()):c},e.padding=function(t){return arguments.length?(l=Math.min(1,s=+t),p()):l},e.paddingInner=function(t){return arguments.length?(l=Math.min(1,t),p()):l},e.paddingOuter=function(t){return arguments.length?(s=+t,p()):s},e.align=function(t){return arguments.length?(d=Math.max(0,Math.min(1,t)),p()):d},e.copy=function(){return h(a(),u).round(c).paddingInner(l).paddingOuter(s).align(d)},i.apply(p(),arguments)}function d(t){var n=t.copy
return t.padding=t.paddingOuter,delete t.paddingInner,delete t.paddingOuter,t.copy=function(){return d(n())},t}function p(){return d(h.apply(null,arguments).paddingInner(1))}var g=e(40),v=e(12),y=e(83),m=function(t){return+t},x=[0,1]
function b(t){return t}function _(t,n){return(n-=t=+t)?function(e){return(e-t)/n}:(e=isNaN(n)?NaN:.5,function(){return e})
var e}function w(t){var n,e=t[0],r=t[t.length-1]
return e>r&&(n=e,e=r,r=n),function(t){return Math.max(e,Math.min(r,t))}}function M(t,n,e){var r=t[0],i=t[1],a=n[0],o=n[1]
return i<r?(r=_(i,r),a=e(o,a)):(r=_(r,i),a=e(a,o)),function(t){return a(r(t))}}function A(t,n,e){var i=Math.min(t.length,n.length)-1,a=new Array(i),o=new Array(i),u=-1
for(t[i]<t[0]&&(t=t.slice().reverse(),n=n.slice().reverse());++u<i;)a[u]=_(t[u],t[u+1]),o[u]=e(n[u],n[u+1])
return function(n){var e=Object(r.bisect)(t,n,1,i)-1
return o[e](a[e](n))}}function k(t,n){return n.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp()).unknown(t.unknown())}function O(){var t,n,e,r,i,a,o=x,u=x,s=g.a,f=b
function h(){return r=Math.min(o.length,u.length)>2?A:M,i=a=null,d}function d(n){return isNaN(n=+n)?e:(i||(i=r(o.map(t),u,s)))(t(f(n)))}return d.invert=function(e){return f(n((a||(a=r(u,o.map(t),v.a)))(e)))},d.domain=function(t){return arguments.length?(o=c.call(t,m),f===b||(f=w(o)),h()):o.slice()},d.range=function(t){return arguments.length?(u=l.call(t),h()):u.slice()},d.rangeRound=function(t){return u=l.call(t),s=y.a,h()},d.clamp=function(t){return arguments.length?(f=t?w(o):b,d):f!==b},d.interpolate=function(t){return arguments.length?(s=t,h()):s},d.unknown=function(t){return arguments.length?(e=t,d):e},function(e,r){return t=e,n=r,h()}}function T(t,n){return O()(t,n)}var C=e(39),S=e(81),N=e(55),j=e(82),D=e(80),E=function(t,n,e,i){var a,o=Object(r.tickStep)(t,n,e)
switch((i=Object(C.b)(null==i?",f":i)).type){case"s":var u=Math.max(Math.abs(t),Math.abs(n))
return null!=i.precision||isNaN(a=Object(S.a)(o,u))||(i.precision=a),Object(N.c)(i,u)
case"":case"e":case"g":case"p":case"r":null!=i.precision||isNaN(a=Object(j.a)(o,Math.max(Math.abs(t),Math.abs(n))))||(i.precision=a-("e"===i.type))
break
case"f":case"%":null!=i.precision||isNaN(a=Object(D.a)(o))||(i.precision=a-2*("%"===i.type))}return Object(N.b)(i)}
function L(t){var n=t.domain
return t.ticks=function(t){var e=n()
return Object(r.ticks)(e[0],e[e.length-1],null==t?10:t)},t.tickFormat=function(t,e){var r=n()
return E(r[0],r[r.length-1],null==t?10:t,e)},t.nice=function(e){null==e&&(e=10)
var i,a=n(),o=0,u=a.length-1,c=a[o],l=a[u]
return l<c&&(i=c,c=l,l=i,i=o,o=u,u=i),(i=Object(r.tickIncrement)(c,l,e))>0?(c=Math.floor(c/i)*i,l=Math.ceil(l/i)*i,i=Object(r.tickIncrement)(c,l,e)):i<0&&(c=Math.ceil(c*i)/i,l=Math.floor(l*i)/i,i=Object(r.tickIncrement)(c,l,e)),i>0?(a[o]=Math.floor(c/i)*i,a[u]=Math.ceil(l/i)*i,n(a)):i<0&&(a[o]=Math.ceil(c*i)/i,a[u]=Math.floor(l*i)/i,n(a)),t},t}function F(){var t=T(b,b)
return t.copy=function(){return k(t,F())},i.apply(t,arguments),L(t)}function R(t){var n
function e(t){return isNaN(t=+t)?n:t}return e.invert=e,e.domain=e.range=function(n){return arguments.length?(t=c.call(n,m),e):t.slice()},e.unknown=function(t){return arguments.length?(n=t,e):n},e.copy=function(){return R(t).unknown(n)},t=arguments.length?c.call(t,m):[0,1],L(e)}var P=function(t,n){var e,r=0,i=(t=t.slice()).length-1,a=t[r],o=t[i]
return o<a&&(e=r,r=i,i=e,e=a,a=o,o=e),t[r]=n.floor(a),t[i]=n.ceil(o),t}
function B(t){return Math.log(t)}function I(t){return Math.exp(t)}function U(t){return-Math.log(-t)}function H(t){return-Math.exp(-t)}function z(t){return isFinite(t)?+("1e"+t):t<0?0:t}function q(t){return function(n){return-t(-n)}}function Y(t){var n,e,i=t(B,I),a=i.domain,o=10
function u(){return n=function(t){return t===Math.E?Math.log:10===t&&Math.log10||2===t&&Math.log2||(t=Math.log(t),function(n){return Math.log(n)/t})}(o),e=function(t){return 10===t?z:t===Math.E?Math.exp:function(n){return Math.pow(t,n)}}(o),a()[0]<0?(n=q(n),e=q(e),t(U,H)):t(B,I),i}return i.base=function(t){return arguments.length?(o=+t,u()):o},i.domain=function(t){return arguments.length?(a(t),u()):a()},i.ticks=function(t){var i,u=a(),c=u[0],l=u[u.length-1];(i=l<c)&&(d=c,c=l,l=d)
var s,f,h,d=n(c),p=n(l),g=null==t?10:+t,v=[]
if(!(o%1)&&p-d<g){if(d=Math.round(d)-1,p=Math.round(p)+1,c>0){for(;d<p;++d)for(f=1,s=e(d);f<o;++f)if(!((h=s*f)<c)){if(h>l)break
v.push(h)}}else for(;d<p;++d)for(f=o-1,s=e(d);f>=1;--f)if(!((h=s*f)<c)){if(h>l)break
v.push(h)}}else v=Object(r.ticks)(d,p,Math.min(p-d,g)).map(e)
return i?v.reverse():v},i.tickFormat=function(t,r){if(null==r&&(r=10===o?".0e":","),"function"!=typeof r&&(r=Object(N.b)(r)),t===1/0)return r
null==t&&(t=10)
var a=Math.max(1,o*t/i.ticks().length)
return function(t){var i=t/e(Math.round(n(t)))
return i*o<o-.5&&(i*=o),i<=a?r(t):""}},i.nice=function(){return a(P(a(),{floor:function(t){return e(Math.floor(n(t)))},ceil:function(t){return e(Math.ceil(n(t)))}}))},i}function G(){var t=Y(O()).domain([1,10])
return t.copy=function(){return k(t,G()).base(t.base())},i.apply(t,arguments),t}function V(t){return function(n){return Math.sign(n)*Math.log1p(Math.abs(n/t))}}function W(t){return function(n){return Math.sign(n)*Math.expm1(Math.abs(n))*t}}function X(t){var n=1,e=t(V(n),W(n))
return e.constant=function(e){return arguments.length?t(V(n=+e),W(n)):n},L(e)}function $(){var t=X(O())
return t.copy=function(){return k(t,$()).constant(t.constant())},i.apply(t,arguments)}function Q(t){return function(n){return n<0?-Math.pow(-n,t):Math.pow(n,t)}}function Z(t){return t<0?-Math.sqrt(-t):Math.sqrt(t)}function K(t){return t<0?-t*t:t*t}function J(t){var n=t(b,b),e=1
function r(){return 1===e?t(b,b):.5===e?t(Z,K):t(Q(e),Q(1/e))}return n.exponent=function(t){return arguments.length?(e=+t,r()):e},L(n)}function tt(){var t=J(O())
return t.copy=function(){return k(t,tt()).exponent(t.exponent())},i.apply(t,arguments),t}function nt(){return tt.apply(null,arguments).exponent(.5)}function et(){var t,n=[],e=[],a=[]
function o(){var t=0,i=Math.max(1,e.length)
for(a=new Array(i-1);++t<i;)a[t-1]=Object(r.quantile)(n,t/i)
return u}function u(n){return isNaN(n=+n)?t:e[Object(r.bisect)(a,n)]}return u.invertExtent=function(t){var r=e.indexOf(t)
return r<0?[NaN,NaN]:[r>0?a[r-1]:n[0],r<a.length?a[r]:n[n.length-1]]},u.domain=function(t){if(!arguments.length)return n.slice()
n=[]
for(var e,i=0,a=t.length;i<a;++i)null==(e=t[i])||isNaN(e=+e)||n.push(e)
return n.sort(r.ascending),o()},u.range=function(t){return arguments.length?(e=l.call(t),o()):e.slice()},u.unknown=function(n){return arguments.length?(t=n,u):t},u.quantiles=function(){return a.slice()},u.copy=function(){return et().domain(n).range(e).unknown(t)},i.apply(u,arguments)}function rt(){var t,n=0,e=1,a=1,o=[.5],u=[0,1]
function c(n){return n<=n?u[Object(r.bisect)(o,n,0,a)]:t}function s(){var t=-1
for(o=new Array(a);++t<a;)o[t]=((t+1)*e-(t-a)*n)/(a+1)
return c}return c.domain=function(t){return arguments.length?(n=+t[0],e=+t[1],s()):[n,e]},c.range=function(t){return arguments.length?(a=(u=l.call(t)).length-1,s()):u.slice()},c.invertExtent=function(t){var r=u.indexOf(t)
return r<0?[NaN,NaN]:r<1?[n,o[0]]:r>=a?[o[a-1],e]:[o[r-1],o[r]]},c.unknown=function(n){return arguments.length?(t=n,c):c},c.thresholds=function(){return o.slice()},c.copy=function(){return rt().domain([n,e]).range(u).unknown(t)},i.apply(L(c),arguments)}function it(){var t,n=[.5],e=[0,1],a=1
function o(i){return i<=i?e[Object(r.bisect)(n,i,0,a)]:t}return o.domain=function(t){return arguments.length?(n=l.call(t),a=Math.min(n.length,e.length-1),o):n.slice()},o.range=function(t){return arguments.length?(e=l.call(t),a=Math.min(n.length,e.length-1),o):e.slice()},o.invertExtent=function(t){var r=e.indexOf(t)
return[n[r-1],n[r]]},o.unknown=function(n){return arguments.length?(t=n,o):t},o.copy=function(){return it().domain(n).range(e).unknown(t)},i.apply(o,arguments)}var at=e(32),ot=e(68),ut=e(5),ct=e(52),lt=e(69),st=e(70),ft=e(50),ht=e(51),dt=e(19)
function pt(t){return new Date(t)}function gt(t){return t instanceof Date?+t:+new Date(+t)}function vt(t,n,e,i,a,o,u,l,s){var f=T(b,b),h=f.invert,d=f.domain,p=s(".%L"),g=s(":%S"),v=s("%I:%M"),y=s("%I %p"),m=s("%a %d"),x=s("%b %d"),_=s("%B"),w=s("%Y"),M=[[u,1,1e3],[u,5,5e3],[u,15,15e3],[u,30,3e4],[o,1,6e4],[o,5,3e5],[o,15,9e5],[o,30,18e5],[a,1,36e5],[a,3,108e5],[a,6,216e5],[a,12,432e5],[i,1,864e5],[i,2,1728e5],[e,1,6048e5],[n,1,2592e6],[n,3,7776e6],[t,1,31536e6]]
function A(r){return(u(r)<r?p:o(r)<r?g:a(r)<r?v:i(r)<r?y:n(r)<r?e(r)<r?m:x:t(r)<r?_:w)(r)}function O(n,e,i,a){if(null==n&&(n=10),"number"==typeof n){var o=Math.abs(i-e)/n,u=Object(r.bisector)((function(t){return t[2]})).right(M,o)
u===M.length?(a=Object(r.tickStep)(e/31536e6,i/31536e6,n),n=t):u?(a=(u=M[o/M[u-1][2]<M[u][2]/o?u-1:u])[1],n=u[0]):(a=Math.max(Object(r.tickStep)(e,i,n),1),n=l)}return null==a?n:n.every(a)}return f.invert=function(t){return new Date(h(t))},f.domain=function(t){return arguments.length?d(c.call(t,gt)):d().map(pt)},f.ticks=function(t,n){var e,r=d(),i=r[0],a=r[r.length-1],o=a<i
return o&&(e=i,i=a,a=e),e=(e=O(t,i,a,n))?e.range(i,a+1):[],o?e.reverse():e},f.tickFormat=function(t,n){return null==n?A:s(n)},f.nice=function(t,n){var e=d()
return(t=O(t,e[0],e[e.length-1],n))?d(P(e,t)):f},f.copy=function(){return k(f,vt(t,n,e,i,a,o,u,l,s))},f}var yt=function(){return i.apply(vt(at.a,ot.a,ut.g,ct.b,lt.a,st.a,ft.a,ht.a,dt.b).domain([new Date(2e3,0,1),new Date(2e3,0,2)]),arguments)},mt=e(33),xt=e(71),bt=e(6),_t=e(53),wt=e(72),Mt=e(73),At=function(){return i.apply(vt(mt.a,xt.a,bt.g,_t.a,wt.a,Mt.a,ft.a,ht.a,dt.d).domain([Date.UTC(2e3,0,1),Date.UTC(2e3,0,2)]),arguments)}
function kt(){var t,n,e,r,i,a=0,o=1,u=b,c=!1
function l(n){return isNaN(n=+n)?i:u(0===e?.5:(n=(r(n)-t)*e,c?Math.max(0,Math.min(1,n)):n))}return l.domain=function(i){return arguments.length?(t=r(a=+i[0]),n=r(o=+i[1]),e=t===n?0:1/(n-t),l):[a,o]},l.clamp=function(t){return arguments.length?(c=!!t,l):c},l.interpolator=function(t){return arguments.length?(u=t,l):u},l.unknown=function(t){return arguments.length?(i=t,l):i},function(i){return r=i,t=i(a),n=i(o),e=t===n?0:1/(n-t),l}}function Ot(t,n){return n.domain(t.domain()).interpolator(t.interpolator()).clamp(t.clamp()).unknown(t.unknown())}function Tt(){var t=L(kt()(b))
return t.copy=function(){return Ot(t,Tt())},a.apply(t,arguments)}function Ct(){var t=Y(kt()).domain([1,10])
return t.copy=function(){return Ot(t,Ct()).base(t.base())},a.apply(t,arguments)}function St(){var t=X(kt())
return t.copy=function(){return Ot(t,St()).constant(t.constant())},a.apply(t,arguments)}function Nt(){var t=J(kt())
return t.copy=function(){return Ot(t,Nt()).exponent(t.exponent())},a.apply(t,arguments)}function jt(){return Nt.apply(null,arguments).exponent(.5)}function Dt(){var t=[],n=b
function e(e){if(!isNaN(e=+e))return n((Object(r.bisect)(t,e)-1)/(t.length-1))}return e.domain=function(n){if(!arguments.length)return t.slice()
t=[]
for(var i,a=0,o=n.length;a<o;++a)null==(i=n[a])||isNaN(i=+i)||t.push(i)
return t.sort(r.ascending),e},e.interpolator=function(t){return arguments.length?(n=t,e):n},e.copy=function(){return Dt(n).domain(t)},a.apply(e,arguments)}function Et(){var t,n,e,r,i,a,o,u=0,c=.5,l=1,s=b,f=!1
function h(t){return isNaN(t=+t)?o:(t=.5+((t=+a(t))-n)*(t<n?r:i),s(f?Math.max(0,Math.min(1,t)):t))}return h.domain=function(o){return arguments.length?(t=a(u=+o[0]),n=a(c=+o[1]),e=a(l=+o[2]),r=t===n?0:.5/(n-t),i=n===e?0:.5/(e-n),h):[u,c,l]},h.clamp=function(t){return arguments.length?(f=!!t,h):f},h.interpolator=function(t){return arguments.length?(s=t,h):s},h.unknown=function(t){return arguments.length?(o=t,h):o},function(o){return a=o,t=o(u),n=o(c),e=o(l),r=t===n?0:.5/(n-t),i=n===e?0:.5/(e-n),h}}function Lt(){var t=L(Et()(b))
return t.copy=function(){return Ot(t,Lt())},a.apply(t,arguments)}function Ft(){var t=Y(Et()).domain([.1,1,10])
return t.copy=function(){return Ot(t,Ft()).base(t.base())},a.apply(t,arguments)}function Rt(){var t=X(Et())
return t.copy=function(){return Ot(t,Rt()).constant(t.constant())},a.apply(t,arguments)}function Pt(){var t=J(Et())
return t.copy=function(){return Ot(t,Pt()).exponent(t.exponent())},a.apply(t,arguments)}function Bt(){return Pt.apply(null,arguments).exponent(.5)}e.d(n,"scaleBand",(function(){return h})),e.d(n,"scalePoint",(function(){return p})),e.d(n,"scaleIdentity",(function(){return R})),e.d(n,"scaleLinear",(function(){return F})),e.d(n,"scaleLog",(function(){return G})),e.d(n,"scaleSymlog",(function(){return $})),e.d(n,"scaleOrdinal",(function(){return f})),e.d(n,"scaleImplicit",(function(){return s})),e.d(n,"scalePow",(function(){return tt})),e.d(n,"scaleSqrt",(function(){return nt})),e.d(n,"scaleQuantile",(function(){return et})),e.d(n,"scaleQuantize",(function(){return rt})),e.d(n,"scaleThreshold",(function(){return it})),e.d(n,"scaleTime",(function(){return yt})),e.d(n,"scaleUtc",(function(){return At})),e.d(n,"scaleSequential",(function(){return Tt})),e.d(n,"scaleSequentialLog",(function(){return Ct})),e.d(n,"scaleSequentialPow",(function(){return Nt})),e.d(n,"scaleSequentialSqrt",(function(){return jt})),e.d(n,"scaleSequentialSymlog",(function(){return St})),e.d(n,"scaleSequentialQuantile",(function(){return Dt})),e.d(n,"scaleDiverging",(function(){return Lt})),e.d(n,"scaleDivergingLog",(function(){return Ft})),e.d(n,"scaleDivergingPow",(function(){return Pt})),e.d(n,"scaleDivergingSqrt",(function(){return Bt})),e.d(n,"scaleDivergingSymlog",(function(){return Rt})),e.d(n,"tickFormat",(function(){return E}))},function(t,n,e){"use strict"
e.r(n)
var r=e(79)
e.d(n,"dispatch",(function(){return r.a}))},function(t,n,e){"use strict"
e.r(n)
var r=e(7)
e.d(n,"color",(function(){return r.e})),e.d(n,"rgb",(function(){return r.g})),e.d(n,"hsl",(function(){return r.f}))
var i=e(49)
e.d(n,"lab",(function(){return i.a})),e.d(n,"hcl",(function(){return i.c})),e.d(n,"lch",(function(){return i.d})),e.d(n,"gray",(function(){return i.b}))
var a=e(78)
e.d(n,"cubehelix",(function(){return a.a}))},function(t,n,e){"use strict"
var r
void 0===(r=function(t){var n=e(10).colorSchemas,r=(e(34),e(91)),i="undefined"!=typeof window,a=navigator.msSaveOrOpenBlob,o=i&&window.btoa
o||(o=e(92).encode)
var u={styleClass:"britechartStyle",defaultFilename:"britechart.png",chartBackground:"white",imageSourceBase:"data:image/svg+xml;base64,",titleFontSize:"15px",titleFontFamily:"'Benton Sans', sans-serif",titleTopOffset:15,get styleBackgroundString(){return"<style>svg{background:"+this.chartBackground+";}</style>"}}
function c(t,n){if(t){t.attr("version",1.1).attr("xmlns","http://www.w3.org/2000/svg")
var e=r.initializeSerializer()(t.node())
return e=function(t){return navigator.userAgent.search("FireFox")>-1?t.replace(/url.*&quot;\)/,'url(&quot;linearGradient[id*="-gradient-"]&quot;);'):t}(e),function(t){return t.replace(">",">"+u.styleBackgroundString)}(e=h.call(this,e,n,parseInt(t.attr("width"),10)))}}function l(t){var n=new Image
return n.src=""+u.imageSourceBase+o(encodeURIComponent(t).replace(/%([0-9A-F]{2})/g,(function(t,n){return String.fromCharCode("0x"+n)}))),n}function s(t,n){return n.getContext("2d").drawImage(t,0,0),n}function f(t,n,e){e.preventDefault(),function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:u.defaultFilename,e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"image/png",r=t.toDataURL(e),i=document.createElement("a")
i.href=r,i.download=n,document.body.appendChild(i),i.click(),document.body.removeChild(i)}(s(this,t),n)}function h(t,e,r){if(!e||!r)return t
var i=n.grey
return t.replace(/<g/,'<text x="'+this.margin().left+'" y="'+u.titleTopOffset+'" font-family="'+u.titleFontFamily+'" font-size="'+u.titleFontSize+'" fill="'+i[6]+'"> '+e+" </text><g ")}return{exportChart:function(t,n,e){if(a)return console.error("Sorry, this feature is not available for IE. If you require this to work, check this issue https://github.com/britecharts/britecharts/pull/652"),!1
var r,i,o,u=l(c.call(this,t,e))
u.onload=f.bind(u,(r=this.width(),i=this.height(),(o=document.createElement("canvas")).height=i,o.width=r,o),n)},convertSvgToHtml:c,createImage:l,drawImageOnCanvas:s}}.call(n,e,n,t))||(t.exports=r)},function(t,n,e){"use strict"
var r
void 0===(r=function(){return{bar:'\n            <svg class="load-state bar-load-state" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 711 325">\n              \n            <defs>\n                <linearGradient id="lgrad" x1="0%" y1="50%" x2="100%" y2="50%" >\n                    <stop offset="0" stop-color="#ffffff" stop-opacity="0.8" />\n                    <stop offset="33.33%" stop-color="#ffffff" stop-opacity="0.8" />\n                    <stop offset="50%" stop-color="#ffffff" stop-opacity="0" />\n                    <stop offset="66.66%" stop-color="#ffffff" stop-opacity="0.8" />\n                    <stop offset="100%" stop-color="#ffffff" stop-opacity="0.8" />\n                </linearGradient>\n            </defs>\n        \n                <g fill="none" fill-rule="evenodd">\n                    <g transform="translate(0 29)">\n                        <g stroke="#EFF2F5" stroke-dasharray="4 4">\n                            <path d="M.400592911 200.302477L710.674315 200.302477M.400592884 131.172748L710.674315 131.172748M.324410282 64.2071321L710.621499 64.2071321M.291004517.563888874L709.82431.563888889"/>\n                        </g>\n                        <g fill="#D2D6DF" transform="translate(63.08 11)">\n                            <polygon points="-.08 176 23.92 176 23.92 255 -.08 255"/>\n                            <polygon points="50.829 147 74.829 147 74.829 255 50.829 255"/>\n                            <polygon points="254.465 0 278.465 0 278.465 255 254.465 255"/>\n                            <polygon points="458.102 169 482.102 169 482.102 255 458.102 255"/>\n                            <polygon points="152.647 82 176.647 82 176.647 255 152.647 255"/>\n                            <polygon points="356.283 66 380.283 66 380.283 255 356.283 255"/>\n                            <polygon points="559.92 229 583.92 229 583.92 255 559.92 255"/>\n                            <polygon points="101.738 115 125.738 115 125.738 255 101.738 255"/>\n                            <polygon points="305.374 42 329.374 42 329.374 255 305.374 255"/>\n                            <polygon points="509.011 201 533.011 201 533.011 255 509.011 255"/>\n                            <polygon points="203.556 19 227.556 19 227.556 255 203.556 255"/>\n                            <polygon points="407.192 115 431.192 115 431.192 255 407.192 255"/>\n                        </g>\n                    </g>\n                    <polygon fill="#D2D6DF" fill-rule="nonzero" points="0 295 711 295 711 294 0 294"/>\n                </g>\n                <rect class="chart-filter" fill="url(#lgrad)" x="-100%" y="0" width="300%" height="100%"></rect>\n            </svg>\n        ',donut:'\n            <svg class="load-state donut-load-state" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 376 331">\n                \n            <defs>\n                <linearGradient id="lgrad" x1="0%" y1="50%" x2="100%" y2="50%" >\n                    <stop offset="0" stop-color="#ffffff" stop-opacity="0.8" />\n                    <stop offset="33.33%" stop-color="#ffffff" stop-opacity="0.8" />\n                    <stop offset="50%" stop-color="#ffffff" stop-opacity="0" />\n                    <stop offset="66.66%" stop-color="#ffffff" stop-opacity="0.8" />\n                    <stop offset="100%" stop-color="#ffffff" stop-opacity="0.8" />\n                </linearGradient>\n            </defs>\n        \n                <g fill="none" fill-rule="evenodd">\n                    <g transform="translate(116 107)">\n                        <circle cx="72" cy="72" r="72" stroke="#EFF2F5" stroke-linecap="round" stroke-width="9.6"/>\n                        <path stroke="#D2D6DF" stroke-width="19.2" d="M126.153559,119.524055 C137.264629,106.845712 144,90.2321371 144,72.0444604 C144,32.2554036 111.764502,0 72,0"/>\n                        <circle cx="72" cy="72" r="67.2" fill="#FFF"/>\n                    </g>\n                </g>\n                <rect class="chart-filter" fill="url(#lgrad)" x="-100%" y="0" width="300%" height="100%"></rect>\n            </svg>\n        ',line:'\n            <svg\n                class="load-state line-load-state"\n                xmlns="http://www.w3.org/2000/svg"\n                viewBox="0 0 711 325"\n            >\n                \n            <defs>\n                <linearGradient id="lgrad" x1="0%" y1="50%" x2="100%" y2="50%" >\n                    <stop offset="0" stop-color="#ffffff" stop-opacity="0.8" />\n                    <stop offset="33.33%" stop-color="#ffffff" stop-opacity="0.8" />\n                    <stop offset="50%" stop-color="#ffffff" stop-opacity="0" />\n                    <stop offset="66.66%" stop-color="#ffffff" stop-opacity="0.8" />\n                    <stop offset="100%" stop-color="#ffffff" stop-opacity="0.8" />\n                </linearGradient>\n            </defs>\n        \n                <path\n                    id="chart-bg"\n                    class="chart-bg"\n                    style="stroke:#C3C6CF;"\n                    d="M3.4,216.5h707.3 M3.4,160.5h707.3 M3.3,103.5h707.3 M3.3,48.5h707.6 M0.4,276.6H710H0.4z"\n                />\n                <polyline\n                    id="chart-line"\n                    class="chart-line"\n                    style="stroke:#C3C6CF;stroke-width:4;fill:none;"\n                    points="8.8,175.8 62.4,237.7 116.1,184.7 169.7,175.8 223.3,57 277,176.8 330.6,176.8 384.3,122.5 437.9,176.8 491.6,176.8 545.2,218.4 598.8,122.5 652.5,184.7 706.1,135.1 "\n                />\n                <rect class="chart-filter" fill="url(#lgrad)" x="-100%" y="0" width="300%" height="100%"></rect>\n            </svg>\n        ',stackedArea:'\n            <svg\n                class="load-state stacked-area-load-state"\n                xmlns="http://www.w3.org/2000/svg"\n                viewBox="0 0 711 325"\n            >\n                \n            <defs>\n                <linearGradient id="lgrad" x1="0%" y1="50%" x2="100%" y2="50%" >\n                    <stop offset="0" stop-color="#ffffff" stop-opacity="0.8" />\n                    <stop offset="33.33%" stop-color="#ffffff" stop-opacity="0.8" />\n                    <stop offset="50%" stop-color="#ffffff" stop-opacity="0" />\n                    <stop offset="66.66%" stop-color="#ffffff" stop-opacity="0.8" />\n                    <stop offset="100%" stop-color="#ffffff" stop-opacity="0.8" />\n                </linearGradient>\n            </defs>\n        \n                <path\n                    id="chart-bg"\n                    class="chart-bg"\n                    style="stroke:#C3C6CF;"\n                    d="M3.4,216.5h707.3 M3.4,160.5h707.3 M3.3,103.5h707.3 M3.3,48.5h707.6 M0.4,276.6H710H0.4z"\n                />\n                <g transform="translate(20 50)">\n                    <path\n                        id="chart-area"\n                        strokeLinecap="square"\n                        d="M0.34233103,0.593688165 L709.977885,0.593688189"\n                        transform="translate(.01 227.976)"\n                    />\n                    <path fill="#C3C6CF" d="M0.528124801,224.014648 L0.528124801,177.734375 L53.3834796,177.734375 C71.5390789,177.734375 86.8277373,168.972754 101.240241,151.662202 C112.578335,138.044258 121.139826,123.110227 136.974507,91.596773 C137.343842,90.8617404 139.300293,86.9654028 139.856735,85.8583549 C155.041692,55.6476711 163.354313,41.0906306 174.319873,27.7179171 C188.951312,9.87459412 204.885845,0.5 223.830634,0.5 C242.123071,0.5 257.291724,8.27027858 270.907992,23.1359289 C281.228683,34.4036118 289.135925,47.1272372 302.542017,72.085092 C303.275893,73.4513345 306.289669,79.0766612 307.063369,80.5168656 C321.41025,107.222876 330.088083,120.97663 341.470704,132.92446 C355.88994,148.05969 371.908861,155.792969 391.654853,155.792969 C412.142049,155.792969 428.763593,152.325614 442.880698,145.765582 C454.197328,140.506893 463.373931,133.679865 473.786035,123.626931 C476.528659,120.978915 486.44777,110.911455 488.791866,108.6483 C502.907223,95.0203436 514.194325,88.9355469 530.135322,88.9355469 C546.532652,88.9355469 559.505909,97.338499 575.973261,115.41103 C579.723508,119.526837 593.103621,135.086814 592.915496,134.871799 C605.09738,148.794859 614.368835,157.635549 625.072091,164.58539 C638.386599,173.230769 652.701021,177.734375 669.279853,177.734375 L673.779853,177.734375 L673.779853,224.014648 L0.528124801,224.014648 Z" />\n                </g>\n                <rect class="chart-filter" fill="url(#lgrad)" x="-100%" y="0" width="300%" height="100%"></rect>\n            </svg>\n        '}}.call(n,e,n,t))||(t.exports=r)},function(t,n,e){"use strict"
e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return a})),e.d(n,"d",(function(){return o})),e.d(n,"e",(function(){return u})),e.d(n,"a",(function(){return l}))
var r,i,a,o,u,c=e(62)
function l(t){return r=Object(c.a)(t),i=r.format,a=r.parse,o=r.utcFormat,u=r.utcParse,r}l({dateTime:"%x, %X",date:"%-m/%-d/%Y",time:"%-I:%M:%S %p",periods:["AM","PM"],days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],shortDays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],shortMonths:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]})},function(t,n,e){"use strict"
var r=e(37)
n.a=function(t){return(t=Object(r.a)(Math.abs(t)))?t[1]:NaN}},function(t,n,e){"use strict"
var r=e(42),i=e(64),a=e(65),o=function(t){return new Array(t.length)}
function u(t,n){this.ownerDocument=t.ownerDocument,this.namespaceURI=t.namespaceURI,this._next=null,this._parent=t,this.__data__=n}function c(t,n,e,r,i,a){for(var o,c=0,l=n.length,s=a.length;c<s;++c)(o=n[c])?(o.__data__=a[c],r[c]=o):e[c]=new u(t,a[c])
for(;c<l;++c)(o=n[c])&&(i[c]=o)}function l(t,n,e,r,i,a,o){var c,l,s,f={},h=n.length,d=a.length,p=new Array(h)
for(c=0;c<h;++c)(l=n[c])&&(p[c]=s="$"+o.call(l,l.__data__,c,n),s in f?i[c]=l:f[s]=l)
for(c=0;c<d;++c)(l=f[s="$"+o.call(t,a[c],c,a)])?(r[c]=l,l.__data__=a[c],f[s]=null):e[c]=new u(t,a[c])
for(c=0;c<h;++c)(l=n[c])&&f[p[c]]===l&&(i[c]=l)}function s(t,n){return t<n?-1:t>n?1:t>=n?0:NaN}u.prototype={constructor:u,appendChild:function(t){return this._parent.insertBefore(t,this._next)},insertBefore:function(t,n){return this._parent.insertBefore(t,n)},querySelector:function(t){return this._parent.querySelector(t)},querySelectorAll:function(t){return this._parent.querySelectorAll(t)}}
var f=e(43)
function h(t){return function(){this.removeAttribute(t)}}function d(t){return function(){this.removeAttributeNS(t.space,t.local)}}function p(t,n){return function(){this.setAttribute(t,n)}}function g(t,n){return function(){this.setAttributeNS(t.space,t.local,n)}}function v(t,n){return function(){var e=n.apply(this,arguments)
null==e?this.removeAttribute(t):this.setAttribute(t,e)}}function y(t,n){return function(){var e=n.apply(this,arguments)
null==e?this.removeAttributeNS(t.space,t.local):this.setAttributeNS(t.space,t.local,e)}}var m=e(66)
function x(t){return function(){delete this[t]}}function b(t,n){return function(){this[t]=n}}function _(t,n){return function(){var e=n.apply(this,arguments)
null==e?delete this[t]:this[t]=e}}function w(t){return t.trim().split(/^|\s+/)}function M(t){return t.classList||new A(t)}function A(t){this._node=t,this._names=w(t.getAttribute("class")||"")}function k(t,n){for(var e=M(t),r=-1,i=n.length;++r<i;)e.add(n[r])}function O(t,n){for(var e=M(t),r=-1,i=n.length;++r<i;)e.remove(n[r])}function T(t){return function(){k(this,t)}}function C(t){return function(){O(this,t)}}function S(t,n){return function(){(n.apply(this,arguments)?k:O)(this,t)}}function N(){this.textContent=""}function j(t){return function(){this.textContent=t}}function D(t){return function(){var n=t.apply(this,arguments)
this.textContent=null==n?"":n}}function E(){this.innerHTML=""}function L(t){return function(){this.innerHTML=t}}function F(t){return function(){var n=t.apply(this,arguments)
this.innerHTML=null==n?"":n}}function R(){this.nextSibling&&this.parentNode.appendChild(this)}function P(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}A.prototype={add:function(t){this._names.indexOf(t)<0&&(this._names.push(t),this._node.setAttribute("class",this._names.join(" ")))},remove:function(t){var n=this._names.indexOf(t)
n>=0&&(this._names.splice(n,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(t){return this._names.indexOf(t)>=0}}
var B=e(28)
function I(){return null}function U(){var t=this.parentNode
t&&t.removeChild(this)}function H(){var t=this.cloneNode(!1),n=this.parentNode
return n?n.insertBefore(t,this.nextSibling):t}function z(){var t=this.cloneNode(!0),n=this.parentNode
return n?n.insertBefore(t,this.nextSibling):t}var q=e(36),Y=e(44)
function G(t,n,e){var r=Object(Y.a)(t),i=r.CustomEvent
"function"==typeof i?i=new i(n,e):(i=r.document.createEvent("Event"),e?(i.initEvent(n,e.bubbles,e.cancelable),i.detail=e.detail):i.initEvent(n,!1,!1)),t.dispatchEvent(i)}function V(t,n){return function(){return G(this,t,n)}}function W(t,n){return function(){return G(this,t,n.apply(this,arguments))}}e.d(n,"c",(function(){return X})),e.d(n,"a",(function(){return $}))
var X=[null]
function $(t,n){this._groups=t,this._parents=n}function Q(){return new $([[document.documentElement]],X)}$.prototype=Q.prototype={constructor:$,select:function(t){"function"!=typeof t&&(t=Object(r.a)(t))
for(var n=this._groups,e=n.length,i=new Array(e),a=0;a<e;++a)for(var o,u,c=n[a],l=c.length,s=i[a]=new Array(l),f=0;f<l;++f)(o=c[f])&&(u=t.call(o,o.__data__,f,c))&&("__data__"in o&&(u.__data__=o.__data__),s[f]=u)
return new $(i,this._parents)},selectAll:function(t){"function"!=typeof t&&(t=Object(i.a)(t))
for(var n=this._groups,e=n.length,r=[],a=[],o=0;o<e;++o)for(var u,c=n[o],l=c.length,s=0;s<l;++s)(u=c[s])&&(r.push(t.call(u,u.__data__,s,c)),a.push(u))
return new $(r,a)},filter:function(t){"function"!=typeof t&&(t=Object(a.a)(t))
for(var n=this._groups,e=n.length,r=new Array(e),i=0;i<e;++i)for(var o,u=n[i],c=u.length,l=r[i]=[],s=0;s<c;++s)(o=u[s])&&t.call(o,o.__data__,s,u)&&l.push(o)
return new $(r,this._parents)},data:function(t,n){if(!t)return v=new Array(this.size()),h=-1,this.each((function(t){v[++h]=t})),v
var e,r=n?l:c,i=this._parents,a=this._groups
"function"!=typeof t&&(e=t,t=function(){return e})
for(var o=a.length,u=new Array(o),s=new Array(o),f=new Array(o),h=0;h<o;++h){var d=i[h],p=a[h],g=p.length,v=t.call(d,d&&d.__data__,h,i),y=v.length,m=s[h]=new Array(y),x=u[h]=new Array(y)
r(d,p,m,x,f[h]=new Array(g),v,n)
for(var b,_,w=0,M=0;w<y;++w)if(b=m[w]){for(w>=M&&(M=w+1);!(_=x[M])&&++M<y;);b._next=_||null}}return(u=new $(u,i))._enter=s,u._exit=f,u},enter:function(){return new $(this._enter||this._groups.map(o),this._parents)},exit:function(){return new $(this._exit||this._groups.map(o),this._parents)},join:function(t,n,e){var r=this.enter(),i=this,a=this.exit()
return r="function"==typeof t?t(r):r.append(t+""),null!=n&&(i=n(i)),null==e?a.remove():e(a),r&&i?r.merge(i).order():i},merge:function(t){for(var n=this._groups,e=t._groups,r=n.length,i=e.length,a=Math.min(r,i),o=new Array(r),u=0;u<a;++u)for(var c,l=n[u],s=e[u],f=l.length,h=o[u]=new Array(f),d=0;d<f;++d)(c=l[d]||s[d])&&(h[d]=c)
for(;u<r;++u)o[u]=n[u]
return new $(o,this._parents)},order:function(){for(var t=this._groups,n=-1,e=t.length;++n<e;)for(var r,i=t[n],a=i.length-1,o=i[a];--a>=0;)(r=i[a])&&(o&&4^r.compareDocumentPosition(o)&&o.parentNode.insertBefore(r,o),o=r)
return this},sort:function(t){function n(n,e){return n&&e?t(n.__data__,e.__data__):!n-!e}t||(t=s)
for(var e=this._groups,r=e.length,i=new Array(r),a=0;a<r;++a){for(var o,u=e[a],c=u.length,l=i[a]=new Array(c),f=0;f<c;++f)(o=u[f])&&(l[f]=o)
l.sort(n)}return new $(i,this._parents).order()},call:function(){var t=arguments[0]
return arguments[0]=this,t.apply(null,arguments),this},nodes:function(){var t=new Array(this.size()),n=-1
return this.each((function(){t[++n]=this})),t},node:function(){for(var t=this._groups,n=0,e=t.length;n<e;++n)for(var r=t[n],i=0,a=r.length;i<a;++i){var o=r[i]
if(o)return o}return null},size:function(){var t=0
return this.each((function(){++t})),t},empty:function(){return!this.node()},each:function(t){for(var n=this._groups,e=0,r=n.length;e<r;++e)for(var i,a=n[e],o=0,u=a.length;o<u;++o)(i=a[o])&&t.call(i,i.__data__,o,a)
return this},attr:function(t,n){var e=Object(f.a)(t)
if(arguments.length<2){var r=this.node()
return e.local?r.getAttributeNS(e.space,e.local):r.getAttribute(e)}return this.each((null==n?e.local?d:h:"function"==typeof n?e.local?y:v:e.local?g:p)(e,n))},style:m.a,property:function(t,n){return arguments.length>1?this.each((null==n?x:"function"==typeof n?_:b)(t,n)):this.node()[t]},classed:function(t,n){var e=w(t+"")
if(arguments.length<2){for(var r=M(this.node()),i=-1,a=e.length;++i<a;)if(!r.contains(e[i]))return!1
return!0}return this.each(("function"==typeof n?S:n?T:C)(e,n))},text:function(t){return arguments.length?this.each(null==t?N:("function"==typeof t?D:j)(t)):this.node().textContent},html:function(t){return arguments.length?this.each(null==t?E:("function"==typeof t?F:L)(t)):this.node().innerHTML},raise:function(){return this.each(R)},lower:function(){return this.each(P)},append:function(t){var n="function"==typeof t?t:Object(B.a)(t)
return this.select((function(){return this.appendChild(n.apply(this,arguments))}))},insert:function(t,n){var e="function"==typeof t?t:Object(B.a)(t),i=null==n?I:"function"==typeof n?n:Object(r.a)(n)
return this.select((function(){return this.insertBefore(e.apply(this,arguments),i.apply(this,arguments)||null)}))},remove:function(){return this.each(U)},clone:function(t){return this.select(t?z:H)},datum:function(t){return arguments.length?this.property("__data__",t):this.node().__data__},on:q.b,dispatch:function(t,n){return this.each(("function"==typeof n?W:V)(t,n))}},n.b=Q},function(t,n,e){"use strict"
e.r(n)
var r=e(40),i=e(60),a=e(41),o=e(57),u=e(59),c=function(t){var n=t.length
return function(e){return t[Math.max(0,Math.min(n-1,Math.floor(e*n)))]}},l=e(4),s=function(t,n){var e=Object(l.c)(+t,+n)
return function(t){var n=e(t)
return n-360*Math.floor(n/360)}},f=e(12),h=e(30),d=e(61),p=e(83),g=e(58),v=e(77),y=Math.SQRT2
function m(t){return((t=Math.exp(t))+1/t)/2}var x=function(t,n){var e,r,i=t[0],a=t[1],o=t[2],u=n[0],c=n[1],l=n[2],s=u-i,f=c-a,h=s*s+f*f
if(h<1e-12)r=Math.log(l/o)/y,e=function(t){return[i+t*s,a+t*f,o*Math.exp(y*t*r)]}
else{var d=Math.sqrt(h),p=(l*l-o*o+4*h)/(2*o*2*d),g=(l*l-o*o-4*h)/(2*l*2*d),v=Math.log(Math.sqrt(p*p+1)-p),x=Math.log(Math.sqrt(g*g+1)-g)
r=(x-v)/y,e=function(t){var n,e=t*r,u=m(v),c=o/(2*d)*(u*(n=y*e+v,((n=Math.exp(2*n))-1)/(n+1))-function(t){return((t=Math.exp(t))-1/t)/2}(v))
return[i+c*s,a+c*f,o*u/m(y*e+v)]}}return e.duration=1e3*r,e},b=e(35),_=e(7)
function w(t){return function(n,e){var r=t((n=Object(_.f)(n)).h,(e=Object(_.f)(e)).h),i=Object(l.a)(n.s,e.s),a=Object(l.a)(n.l,e.l),o=Object(l.a)(n.opacity,e.opacity)
return function(t){return n.h=r(t),n.s=i(t),n.l=a(t),n.opacity=o(t),n+""}}}var M=w(l.c),A=w(l.a),k=e(49)
function O(t,n){var e=Object(l.a)((t=Object(k.a)(t)).l,(n=Object(k.a)(n)).l),r=Object(l.a)(t.a,n.a),i=Object(l.a)(t.b,n.b),a=Object(l.a)(t.opacity,n.opacity)
return function(n){return t.l=e(n),t.a=r(n),t.b=i(n),t.opacity=a(n),t+""}}function T(t){return function(n,e){var r=t((n=Object(k.c)(n)).h,(e=Object(k.c)(e)).h),i=Object(l.a)(n.c,e.c),a=Object(l.a)(n.l,e.l),o=Object(l.a)(n.opacity,e.opacity)
return function(t){return n.h=r(t),n.c=i(t),n.l=a(t),n.opacity=o(t),n+""}}}var C=T(l.c),S=T(l.a),N=e(78)
function j(t){return function n(e){function r(n,r){var i=t((n=Object(N.a)(n)).h,(r=Object(N.a)(r)).h),a=Object(l.a)(n.s,r.s),o=Object(l.a)(n.l,r.l),u=Object(l.a)(n.opacity,r.opacity)
return function(t){return n.h=i(t),n.s=a(t),n.l=o(Math.pow(t,e)),n.opacity=u(t),n+""}}return e=+e,r.gamma=n,r}(1)}var D=j(l.c),E=j(l.a)
function L(t,n){for(var e=0,r=n.length-1,i=n[0],a=new Array(r<0?0:r);e<r;)a[e]=t(i,i=n[++e])
return function(t){var n=Math.max(0,Math.min(r-1,Math.floor(t*=r)))
return a[n](t-n)}}var F=function(t,n){for(var e=new Array(n),r=0;r<n;++r)e[r]=t(r/(n-1))
return e}
e.d(n,"interpolate",(function(){return r.a})),e.d(n,"interpolateArray",(function(){return i.a})),e.d(n,"interpolateBasis",(function(){return a.b})),e.d(n,"interpolateBasisClosed",(function(){return o.a})),e.d(n,"interpolateDate",(function(){return u.a})),e.d(n,"interpolateDiscrete",(function(){return c})),e.d(n,"interpolateHue",(function(){return s})),e.d(n,"interpolateNumber",(function(){return f.a})),e.d(n,"interpolateNumberArray",(function(){return h.a})),e.d(n,"interpolateObject",(function(){return d.a})),e.d(n,"interpolateRound",(function(){return p.a})),e.d(n,"interpolateString",(function(){return g.a})),e.d(n,"interpolateTransformCss",(function(){return v.a})),e.d(n,"interpolateTransformSvg",(function(){return v.b})),e.d(n,"interpolateZoom",(function(){return x})),e.d(n,"interpolateRgb",(function(){return b.a})),e.d(n,"interpolateRgbBasis",(function(){return b.b})),e.d(n,"interpolateRgbBasisClosed",(function(){return b.c})),e.d(n,"interpolateHsl",(function(){return M})),e.d(n,"interpolateHslLong",(function(){return A})),e.d(n,"interpolateLab",(function(){return O})),e.d(n,"interpolateHcl",(function(){return C})),e.d(n,"interpolateHclLong",(function(){return S})),e.d(n,"interpolateCubehelix",(function(){return D})),e.d(n,"interpolateCubehelixLong",(function(){return E})),e.d(n,"piecewise",(function(){return L})),e.d(n,"quantize",(function(){return F}))},function(t,n,e){"use strict"
e.r(n)
var r=Array.prototype.slice,i=function(t){return t}
function a(t){return"translate("+(t+.5)+",0)"}function o(t){return"translate(0,"+(t+.5)+")"}function u(t){return function(n){return+t(n)}}function c(t){var n=Math.max(0,t.bandwidth()-1)/2
return t.round()&&(n=Math.round(n)),function(e){return+t(e)+n}}function l(){return!this.__axis}function s(t,n){var e=[],s=null,f=null,h=6,d=6,p=3,g=1===t||4===t?-1:1,v=4===t||2===t?"x":"y",y=1===t||3===t?a:o
function m(r){var a=null==s?n.ticks?n.ticks.apply(n,e):n.domain():s,o=null==f?n.tickFormat?n.tickFormat.apply(n,e):i:f,m=Math.max(h,0)+p,x=n.range(),b=+x[0]+.5,_=+x[x.length-1]+.5,w=(n.bandwidth?c:u)(n.copy()),M=r.selection?r.selection():r,A=M.selectAll(".domain").data([null]),k=M.selectAll(".tick").data(a,n).order(),O=k.exit(),T=k.enter().append("g").attr("class","tick"),C=k.select("line"),S=k.select("text")
A=A.merge(A.enter().insert("path",".tick").attr("class","domain").attr("stroke","currentColor")),k=k.merge(T),C=C.merge(T.append("line").attr("stroke","currentColor").attr(v+"2",g*h)),S=S.merge(T.append("text").attr("fill","currentColor").attr(v,g*m).attr("dy",1===t?"0em":3===t?"0.71em":"0.32em")),r!==M&&(A=A.transition(r),k=k.transition(r),C=C.transition(r),S=S.transition(r),O=O.transition(r).attr("opacity",1e-6).attr("transform",(function(t){return isFinite(t=w(t))?y(t):this.getAttribute("transform")})),T.attr("opacity",1e-6).attr("transform",(function(t){var n=this.parentNode.__axis
return y(n&&isFinite(n=n(t))?n:w(t))}))),O.remove(),A.attr("d",4===t||2==t?d?"M"+g*d+","+b+"H0.5V"+_+"H"+g*d:"M0.5,"+b+"V"+_:d?"M"+b+","+g*d+"V0.5H"+_+"V"+g*d:"M"+b+",0.5H"+_),k.attr("opacity",1).attr("transform",(function(t){return y(w(t))})),C.attr(v+"2",g*h),S.attr(v,g*m).text(o),M.filter(l).attr("fill","none").attr("font-size",10).attr("font-family","sans-serif").attr("text-anchor",2===t?"start":4===t?"end":"middle"),M.each((function(){this.__axis=w}))}return m.scale=function(t){return arguments.length?(n=t,m):n},m.ticks=function(){return e=r.call(arguments),m},m.tickArguments=function(t){return arguments.length?(e=null==t?[]:r.call(t),m):e.slice()},m.tickValues=function(t){return arguments.length?(s=null==t?null:r.call(t),m):s&&s.slice()},m.tickFormat=function(t){return arguments.length?(f=t,m):f},m.tickSize=function(t){return arguments.length?(h=d=+t,m):h},m.tickSizeInner=function(t){return arguments.length?(h=+t,m):h},m.tickSizeOuter=function(t){return arguments.length?(d=+t,m):d},m.tickPadding=function(t){return arguments.length?(p=+t,m):p},m}function f(t){return s(1,t)}function h(t){return s(2,t)}function d(t){return s(3,t)}function p(t){return s(4,t)}e.d(n,"axisTop",(function(){return f})),e.d(n,"axisRight",(function(){return h})),e.d(n,"axisBottom",(function(){return d})),e.d(n,"axisLeft",(function(){return p}))},function(t,n,e){"use strict"
var r
void 0===(r=function(t){var n=e(9),r=0,i={small:{limit:10,format:n.format("")},medium:{limit:1e3,format:n.format("")},large:{limit:null,format:n.format(".2s")}},a={small:{limit:10,format:n.format(".3f")},medium:{limit:100,format:n.format(".1f")},large:{limit:null,format:n.format(".2s")}},o=function(t,n){var e="large"
return t<n.small.limit?e="small":t<n.medium.limit&&(e="medium"),e}
return{calculatePercent:function(t,e,r){var i=e?t/e*100:0
return n.format(r)(i)},isInteger:function(t){return t%1==0},formatDecimalValue:function(t){var n=o(t,a)
return(0,a[n].format)(t)},formatIntegerValue:function(t){var n=o(t,i)
return(0,i[n].format)(t)},uniqueId:function(t){var n=++r
return t.toString()+"-"+n}}}.call(n,e,n,t))||(t.exports=r)},function(t,n,e){"use strict"
e.r(n)
var r=Math.PI,i=2*r,a=i-1e-6
function o(){this._x0=this._y0=this._x1=this._y1=null,this._=""}function u(){return new o}o.prototype=u.prototype={constructor:o,moveTo:function(t,n){this._+="M"+(this._x0=this._x1=+t)+","+(this._y0=this._y1=+n)},closePath:function(){null!==this._x1&&(this._x1=this._x0,this._y1=this._y0,this._+="Z")},lineTo:function(t,n){this._+="L"+(this._x1=+t)+","+(this._y1=+n)},quadraticCurveTo:function(t,n,e,r){this._+="Q"+ +t+","+ +n+","+(this._x1=+e)+","+(this._y1=+r)},bezierCurveTo:function(t,n,e,r,i,a){this._+="C"+ +t+","+ +n+","+ +e+","+ +r+","+(this._x1=+i)+","+(this._y1=+a)},arcTo:function(t,n,e,i,a){t=+t,n=+n,e=+e,i=+i,a=+a
var o=this._x1,u=this._y1,c=e-t,l=i-n,s=o-t,f=u-n,h=s*s+f*f
if(a<0)throw new Error("negative radius: "+a)
if(null===this._x1)this._+="M"+(this._x1=t)+","+(this._y1=n)
else if(h>1e-6)if(Math.abs(f*c-l*s)>1e-6&&a){var d=e-o,p=i-u,g=c*c+l*l,v=d*d+p*p,y=Math.sqrt(g),m=Math.sqrt(h),x=a*Math.tan((r-Math.acos((g+h-v)/(2*y*m)))/2),b=x/m,_=x/y
Math.abs(b-1)>1e-6&&(this._+="L"+(t+b*s)+","+(n+b*f)),this._+="A"+a+","+a+",0,0,"+ +(f*d>s*p)+","+(this._x1=t+_*c)+","+(this._y1=n+_*l)}else this._+="L"+(this._x1=t)+","+(this._y1=n)},arc:function(t,n,e,o,u,c){t=+t,n=+n,c=!!c
var l=(e=+e)*Math.cos(o),s=e*Math.sin(o),f=t+l,h=n+s,d=1^c,p=c?o-u:u-o
if(e<0)throw new Error("negative radius: "+e)
null===this._x1?this._+="M"+f+","+h:(Math.abs(this._x1-f)>1e-6||Math.abs(this._y1-h)>1e-6)&&(this._+="L"+f+","+h),e&&(p<0&&(p=p%i+i),p>a?this._+="A"+e+","+e+",0,1,"+d+","+(t-l)+","+(n-s)+"A"+e+","+e+",0,1,"+d+","+(this._x1=f)+","+(this._y1=h):p>1e-6&&(this._+="A"+e+","+e+",0,"+ +(p>=r)+","+d+","+(this._x1=t+e*Math.cos(u))+","+(this._y1=n+e*Math.sin(u))))},rect:function(t,n,e,r){this._+="M"+(this._x0=this._x1=+t)+","+(this._y0=this._y1=+n)+"h"+ +e+"v"+ +r+"h"+-e+"Z"},toString:function(){return this._}}
var c=u,l=function(t){return function(){return t}},s=Math.abs,f=Math.atan2,h=Math.cos,d=Math.max,p=Math.min,g=Math.sin,v=Math.sqrt,y=Math.PI,m=y/2,x=2*y
function b(t){return t>=1?m:t<=-1?-m:Math.asin(t)}function _(t){return t.innerRadius}function w(t){return t.outerRadius}function M(t){return t.startAngle}function A(t){return t.endAngle}function k(t){return t&&t.padAngle}function O(t,n,e,r,i,a,o){var u=t-e,c=n-r,l=(o?a:-a)/v(u*u+c*c),s=l*c,f=-l*u,h=t+s,p=n+f,g=e+s,y=r+f,m=(h+g)/2,x=(p+y)/2,b=g-h,_=y-p,w=b*b+_*_,M=i-a,A=h*y-g*p,k=(_<0?-1:1)*v(d(0,M*M*w-A*A)),O=(A*_-b*k)/w,T=(-A*b-_*k)/w,C=(A*_+b*k)/w,S=(-A*b+_*k)/w,N=O-m,j=T-x,D=C-m,E=S-x
return N*N+j*j>D*D+E*E&&(O=C,T=S),{cx:O,cy:T,x01:-s,y01:-f,x11:O*(i/M-1),y11:T*(i/M-1)}}var T=function(){var t=_,n=w,e=l(0),r=null,i=M,a=A,o=k,u=null
function d(){var l,d,_=+t.apply(this,arguments),w=+n.apply(this,arguments),M=i.apply(this,arguments)-m,A=a.apply(this,arguments)-m,k=s(A-M),T=A>M
if(u||(u=l=c()),w<_&&(d=w,w=_,_=d),w>1e-12)if(k>x-1e-12)u.moveTo(w*h(M),w*g(M)),u.arc(0,0,w,M,A,!T),_>1e-12&&(u.moveTo(_*h(A),_*g(A)),u.arc(0,0,_,A,M,T))
else{var C,S,N=M,j=A,D=M,E=A,L=k,F=k,R=o.apply(this,arguments)/2,P=R>1e-12&&(r?+r.apply(this,arguments):v(_*_+w*w)),B=p(s(w-_)/2,+e.apply(this,arguments)),I=B,U=B
if(P>1e-12){var H=b(P/_*g(R)),z=b(P/w*g(R));(L-=2*H)>1e-12?(D+=H*=T?1:-1,E-=H):(L=0,D=E=(M+A)/2),(F-=2*z)>1e-12?(N+=z*=T?1:-1,j-=z):(F=0,N=j=(M+A)/2)}var q=w*h(N),Y=w*g(N),G=_*h(E),V=_*g(E)
if(B>1e-12){var W,X=w*h(j),$=w*g(j),Q=_*h(D),Z=_*g(D)
if(k<y&&(W=function(t,n,e,r,i,a,o,u){var c=e-t,l=r-n,s=o-i,f=u-a,h=f*c-s*l
if(!(h*h<1e-12))return[t+(h=(s*(n-a)-f*(t-i))/h)*c,n+h*l]}(q,Y,Q,Z,X,$,G,V))){var K=q-W[0],J=Y-W[1],tt=X-W[0],nt=$-W[1],et=1/g(function(t){return t>1?0:t<-1?y:Math.acos(t)}((K*tt+J*nt)/(v(K*K+J*J)*v(tt*tt+nt*nt)))/2),rt=v(W[0]*W[0]+W[1]*W[1])
I=p(B,(_-rt)/(et-1)),U=p(B,(w-rt)/(et+1))}}F>1e-12?U>1e-12?(C=O(Q,Z,q,Y,w,U,T),S=O(X,$,G,V,w,U,T),u.moveTo(C.cx+C.x01,C.cy+C.y01),U<B?u.arc(C.cx,C.cy,U,f(C.y01,C.x01),f(S.y01,S.x01),!T):(u.arc(C.cx,C.cy,U,f(C.y01,C.x01),f(C.y11,C.x11),!T),u.arc(0,0,w,f(C.cy+C.y11,C.cx+C.x11),f(S.cy+S.y11,S.cx+S.x11),!T),u.arc(S.cx,S.cy,U,f(S.y11,S.x11),f(S.y01,S.x01),!T))):(u.moveTo(q,Y),u.arc(0,0,w,N,j,!T)):u.moveTo(q,Y),_>1e-12&&L>1e-12?I>1e-12?(C=O(G,V,X,$,_,-I,T),S=O(q,Y,Q,Z,_,-I,T),u.lineTo(C.cx+C.x01,C.cy+C.y01),I<B?u.arc(C.cx,C.cy,I,f(C.y01,C.x01),f(S.y01,S.x01),!T):(u.arc(C.cx,C.cy,I,f(C.y01,C.x01),f(C.y11,C.x11),!T),u.arc(0,0,_,f(C.cy+C.y11,C.cx+C.x11),f(S.cy+S.y11,S.cx+S.x11),T),u.arc(S.cx,S.cy,I,f(S.y11,S.x11),f(S.y01,S.x01),!T))):u.arc(0,0,_,E,D,T):u.lineTo(G,V)}else u.moveTo(0,0)
if(u.closePath(),l)return u=null,l+""||null}return d.centroid=function(){var e=(+t.apply(this,arguments)+ +n.apply(this,arguments))/2,r=(+i.apply(this,arguments)+ +a.apply(this,arguments))/2-y/2
return[h(r)*e,g(r)*e]},d.innerRadius=function(n){return arguments.length?(t="function"==typeof n?n:l(+n),d):t},d.outerRadius=function(t){return arguments.length?(n="function"==typeof t?t:l(+t),d):n},d.cornerRadius=function(t){return arguments.length?(e="function"==typeof t?t:l(+t),d):e},d.padRadius=function(t){return arguments.length?(r=null==t?null:"function"==typeof t?t:l(+t),d):r},d.startAngle=function(t){return arguments.length?(i="function"==typeof t?t:l(+t),d):i},d.endAngle=function(t){return arguments.length?(a="function"==typeof t?t:l(+t),d):a},d.padAngle=function(t){return arguments.length?(o="function"==typeof t?t:l(+t),d):o},d.context=function(t){return arguments.length?(u=null==t?null:t,d):u},d}
function C(t){this._context=t}C.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n)
break
case 1:this._point=2
default:this._context.lineTo(t,n)}}}
var S=function(t){return new C(t)}
function N(t){return t[0]}function j(t){return t[1]}var D=function(){var t=N,n=j,e=l(!0),r=null,i=S,a=null
function o(o){var u,l,s,f=o.length,h=!1
for(null==r&&(a=i(s=c())),u=0;u<=f;++u)!(u<f&&e(l=o[u],u,o))===h&&((h=!h)?a.lineStart():a.lineEnd()),h&&a.point(+t(l,u,o),+n(l,u,o))
if(s)return a=null,s+""||null}return o.x=function(n){return arguments.length?(t="function"==typeof n?n:l(+n),o):t},o.y=function(t){return arguments.length?(n="function"==typeof t?t:l(+t),o):n},o.defined=function(t){return arguments.length?(e="function"==typeof t?t:l(!!t),o):e},o.curve=function(t){return arguments.length?(i=t,null!=r&&(a=i(r)),o):i},o.context=function(t){return arguments.length?(null==t?r=a=null:a=i(r=t),o):r},o},E=function(){var t=N,n=null,e=l(0),r=j,i=l(!0),a=null,o=S,u=null
function s(l){var s,f,h,d,p,g=l.length,v=!1,y=new Array(g),m=new Array(g)
for(null==a&&(u=o(p=c())),s=0;s<=g;++s){if(!(s<g&&i(d=l[s],s,l))===v)if(v=!v)f=s,u.areaStart(),u.lineStart()
else{for(u.lineEnd(),u.lineStart(),h=s-1;h>=f;--h)u.point(y[h],m[h])
u.lineEnd(),u.areaEnd()}v&&(y[s]=+t(d,s,l),m[s]=+e(d,s,l),u.point(n?+n(d,s,l):y[s],r?+r(d,s,l):m[s]))}if(p)return u=null,p+""||null}function f(){return D().defined(i).curve(o).context(a)}return s.x=function(e){return arguments.length?(t="function"==typeof e?e:l(+e),n=null,s):t},s.x0=function(n){return arguments.length?(t="function"==typeof n?n:l(+n),s):t},s.x1=function(t){return arguments.length?(n=null==t?null:"function"==typeof t?t:l(+t),s):n},s.y=function(t){return arguments.length?(e="function"==typeof t?t:l(+t),r=null,s):e},s.y0=function(t){return arguments.length?(e="function"==typeof t?t:l(+t),s):e},s.y1=function(t){return arguments.length?(r=null==t?null:"function"==typeof t?t:l(+t),s):r},s.lineX0=s.lineY0=function(){return f().x(t).y(e)},s.lineY1=function(){return f().x(t).y(r)},s.lineX1=function(){return f().x(n).y(e)},s.defined=function(t){return arguments.length?(i="function"==typeof t?t:l(!!t),s):i},s.curve=function(t){return arguments.length?(o=t,null!=a&&(u=o(a)),s):o},s.context=function(t){return arguments.length?(null==t?a=u=null:u=o(a=t),s):a},s},L=function(t,n){return n<t?-1:n>t?1:n>=t?0:NaN},F=function(t){return t},R=function(){var t=F,n=L,e=null,r=l(0),i=l(x),a=l(0)
function o(o){var u,c,l,s,f,h=o.length,d=0,p=new Array(h),g=new Array(h),v=+r.apply(this,arguments),y=Math.min(x,Math.max(-x,i.apply(this,arguments)-v)),m=Math.min(Math.abs(y)/h,a.apply(this,arguments)),b=m*(y<0?-1:1)
for(u=0;u<h;++u)(f=g[p[u]=u]=+t(o[u],u,o))>0&&(d+=f)
for(null!=n?p.sort((function(t,e){return n(g[t],g[e])})):null!=e&&p.sort((function(t,n){return e(o[t],o[n])})),u=0,l=d?(y-h*b)/d:0;u<h;++u,v=s)c=p[u],s=v+((f=g[c])>0?f*l:0)+b,g[c]={data:o[c],index:u,value:f,startAngle:v,endAngle:s,padAngle:m}
return g}return o.value=function(n){return arguments.length?(t="function"==typeof n?n:l(+n),o):t},o.sortValues=function(t){return arguments.length?(n=t,e=null,o):n},o.sort=function(t){return arguments.length?(e=t,n=null,o):e},o.startAngle=function(t){return arguments.length?(r="function"==typeof t?t:l(+t),o):r},o.endAngle=function(t){return arguments.length?(i="function"==typeof t?t:l(+t),o):i},o.padAngle=function(t){return arguments.length?(a="function"==typeof t?t:l(+t),o):a},o},P=I(S)
function B(t){this._curve=t}function I(t){function n(n){return new B(t(n))}return n._curve=t,n}function U(t){var n=t.curve
return t.angle=t.x,delete t.x,t.radius=t.y,delete t.y,t.curve=function(t){return arguments.length?n(I(t)):n()._curve},t}B.prototype={areaStart:function(){this._curve.areaStart()},areaEnd:function(){this._curve.areaEnd()},lineStart:function(){this._curve.lineStart()},lineEnd:function(){this._curve.lineEnd()},point:function(t,n){this._curve.point(n*Math.sin(t),n*-Math.cos(t))}}
var H=function(){return U(D().curve(P))},z=function(){var t=E().curve(P),n=t.curve,e=t.lineX0,r=t.lineX1,i=t.lineY0,a=t.lineY1
return t.angle=t.x,delete t.x,t.startAngle=t.x0,delete t.x0,t.endAngle=t.x1,delete t.x1,t.radius=t.y,delete t.y,t.innerRadius=t.y0,delete t.y0,t.outerRadius=t.y1,delete t.y1,t.lineStartAngle=function(){return U(e())},delete t.lineX0,t.lineEndAngle=function(){return U(r())},delete t.lineX1,t.lineInnerRadius=function(){return U(i())},delete t.lineY0,t.lineOuterRadius=function(){return U(a())},delete t.lineY1,t.curve=function(t){return arguments.length?n(I(t)):n()._curve},t},q=function(t,n){return[(n=+n)*Math.cos(t-=Math.PI/2),n*Math.sin(t)]},Y=Array.prototype.slice
function G(t){return t.source}function V(t){return t.target}function W(t){var n=G,e=V,r=N,i=j,a=null
function o(){var o,u=Y.call(arguments),l=n.apply(this,u),s=e.apply(this,u)
if(a||(a=o=c()),t(a,+r.apply(this,(u[0]=l,u)),+i.apply(this,u),+r.apply(this,(u[0]=s,u)),+i.apply(this,u)),o)return a=null,o+""||null}return o.source=function(t){return arguments.length?(n=t,o):n},o.target=function(t){return arguments.length?(e=t,o):e},o.x=function(t){return arguments.length?(r="function"==typeof t?t:l(+t),o):r},o.y=function(t){return arguments.length?(i="function"==typeof t?t:l(+t),o):i},o.context=function(t){return arguments.length?(a=null==t?null:t,o):a},o}function X(t,n,e,r,i){t.moveTo(n,e),t.bezierCurveTo(n=(n+r)/2,e,n,i,r,i)}function $(t,n,e,r,i){t.moveTo(n,e),t.bezierCurveTo(n,e=(e+i)/2,r,e,r,i)}function Q(t,n,e,r,i){var a=q(n,e),o=q(n,e=(e+i)/2),u=q(r,e),c=q(r,i)
t.moveTo(a[0],a[1]),t.bezierCurveTo(o[0],o[1],u[0],u[1],c[0],c[1])}function Z(){return W(X)}function K(){return W($)}function J(){var t=W(Q)
return t.angle=t.x,delete t.x,t.radius=t.y,delete t.y,t}var tt={draw:function(t,n){var e=Math.sqrt(n/y)
t.moveTo(e,0),t.arc(0,0,e,0,x)}},nt={draw:function(t,n){var e=Math.sqrt(n/5)/2
t.moveTo(-3*e,-e),t.lineTo(-e,-e),t.lineTo(-e,-3*e),t.lineTo(e,-3*e),t.lineTo(e,-e),t.lineTo(3*e,-e),t.lineTo(3*e,e),t.lineTo(e,e),t.lineTo(e,3*e),t.lineTo(-e,3*e),t.lineTo(-e,e),t.lineTo(-3*e,e),t.closePath()}},et=Math.sqrt(1/3),rt=2*et,it={draw:function(t,n){var e=Math.sqrt(n/rt),r=e*et
t.moveTo(0,-e),t.lineTo(r,0),t.lineTo(0,e),t.lineTo(-r,0),t.closePath()}},at=Math.sin(y/10)/Math.sin(7*y/10),ot=Math.sin(x/10)*at,ut=-Math.cos(x/10)*at,ct={draw:function(t,n){var e=Math.sqrt(.8908130915292852*n),r=ot*e,i=ut*e
t.moveTo(0,-e),t.lineTo(r,i)
for(var a=1;a<5;++a){var o=x*a/5,u=Math.cos(o),c=Math.sin(o)
t.lineTo(c*e,-u*e),t.lineTo(u*r-c*i,c*r+u*i)}t.closePath()}},lt={draw:function(t,n){var e=Math.sqrt(n),r=-e/2
t.rect(r,r,e,e)}},st=Math.sqrt(3),ft={draw:function(t,n){var e=-Math.sqrt(n/(3*st))
t.moveTo(0,2*e),t.lineTo(-st*e,-e),t.lineTo(st*e,-e),t.closePath()}},ht=Math.sqrt(3)/2,dt=1/Math.sqrt(12),pt=3*(dt/2+1),gt={draw:function(t,n){var e=Math.sqrt(n/pt),r=e/2,i=e*dt,a=r,o=e*dt+e,u=-a,c=o
t.moveTo(r,i),t.lineTo(a,o),t.lineTo(u,c),t.lineTo(-.5*r-ht*i,ht*r+-.5*i),t.lineTo(-.5*a-ht*o,ht*a+-.5*o),t.lineTo(-.5*u-ht*c,ht*u+-.5*c),t.lineTo(-.5*r+ht*i,-.5*i-ht*r),t.lineTo(-.5*a+ht*o,-.5*o-ht*a),t.lineTo(-.5*u+ht*c,-.5*c-ht*u),t.closePath()}},vt=[tt,nt,it,lt,ct,ft,gt],yt=function(){var t=l(tt),n=l(64),e=null
function r(){var r
if(e||(e=r=c()),t.apply(this,arguments).draw(e,+n.apply(this,arguments)),r)return e=null,r+""||null}return r.type=function(n){return arguments.length?(t="function"==typeof n?n:l(n),r):t},r.size=function(t){return arguments.length?(n="function"==typeof t?t:l(+t),r):n},r.context=function(t){return arguments.length?(e=null==t?null:t,r):e},r},mt=function(){}
function xt(t,n,e){t._context.bezierCurveTo((2*t._x0+t._x1)/3,(2*t._y0+t._y1)/3,(t._x0+2*t._x1)/3,(t._y0+2*t._y1)/3,(t._x0+4*t._x1+n)/6,(t._y0+4*t._y1+e)/6)}function bt(t){this._context=t}bt.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=NaN,this._point=0},lineEnd:function(){switch(this._point){case 3:xt(this,this._x1,this._y1)
case 2:this._context.lineTo(this._x1,this._y1)}(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n)
break
case 1:this._point=2
break
case 2:this._point=3,this._context.lineTo((5*this._x0+this._x1)/6,(5*this._y0+this._y1)/6)
default:xt(this,t,n)}this._x0=this._x1,this._x1=t,this._y0=this._y1,this._y1=n}}
var _t=function(t){return new bt(t)}
function wt(t){this._context=t}wt.prototype={areaStart:mt,areaEnd:mt,lineStart:function(){this._x0=this._x1=this._x2=this._x3=this._x4=this._y0=this._y1=this._y2=this._y3=this._y4=NaN,this._point=0},lineEnd:function(){switch(this._point){case 1:this._context.moveTo(this._x2,this._y2),this._context.closePath()
break
case 2:this._context.moveTo((this._x2+2*this._x3)/3,(this._y2+2*this._y3)/3),this._context.lineTo((this._x3+2*this._x2)/3,(this._y3+2*this._y2)/3),this._context.closePath()
break
case 3:this.point(this._x2,this._y2),this.point(this._x3,this._y3),this.point(this._x4,this._y4)}},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1,this._x2=t,this._y2=n
break
case 1:this._point=2,this._x3=t,this._y3=n
break
case 2:this._point=3,this._x4=t,this._y4=n,this._context.moveTo((this._x0+4*this._x1+t)/6,(this._y0+4*this._y1+n)/6)
break
default:xt(this,t,n)}this._x0=this._x1,this._x1=t,this._y0=this._y1,this._y1=n}}
var Mt=function(t){return new wt(t)}
function At(t){this._context=t}At.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=NaN,this._point=0},lineEnd:function(){(this._line||0!==this._line&&3===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1
break
case 1:this._point=2
break
case 2:this._point=3
var e=(this._x0+4*this._x1+t)/6,r=(this._y0+4*this._y1+n)/6
this._line?this._context.lineTo(e,r):this._context.moveTo(e,r)
break
case 3:this._point=4
default:xt(this,t,n)}this._x0=this._x1,this._x1=t,this._y0=this._y1,this._y1=n}}
var kt=function(t){return new At(t)}
function Ot(t,n){this._basis=new bt(t),this._beta=n}Ot.prototype={lineStart:function(){this._x=[],this._y=[],this._basis.lineStart()},lineEnd:function(){var t=this._x,n=this._y,e=t.length-1
if(e>0)for(var r,i=t[0],a=n[0],o=t[e]-i,u=n[e]-a,c=-1;++c<=e;)r=c/e,this._basis.point(this._beta*t[c]+(1-this._beta)*(i+r*o),this._beta*n[c]+(1-this._beta)*(a+r*u))
this._x=this._y=null,this._basis.lineEnd()},point:function(t,n){this._x.push(+t),this._y.push(+n)}}
var Tt=function t(n){function e(t){return 1===n?new bt(t):new Ot(t,n)}return e.beta=function(n){return t(+n)},e}(.85)
function Ct(t,n,e){t._context.bezierCurveTo(t._x1+t._k*(t._x2-t._x0),t._y1+t._k*(t._y2-t._y0),t._x2+t._k*(t._x1-n),t._y2+t._k*(t._y1-e),t._x2,t._y2)}function St(t,n){this._context=t,this._k=(1-n)/6}St.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x2,this._y2)
break
case 3:Ct(this,this._x1,this._y1)}(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n)
break
case 1:this._point=2,this._x1=t,this._y1=n
break
case 2:this._point=3
default:Ct(this,t,n)}this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=n}}
var Nt=function t(n){function e(t){return new St(t,n)}return e.tension=function(n){return t(+n)},e}(0)
function jt(t,n){this._context=t,this._k=(1-n)/6}jt.prototype={areaStart:mt,areaEnd:mt,lineStart:function(){this._x0=this._x1=this._x2=this._x3=this._x4=this._x5=this._y0=this._y1=this._y2=this._y3=this._y4=this._y5=NaN,this._point=0},lineEnd:function(){switch(this._point){case 1:this._context.moveTo(this._x3,this._y3),this._context.closePath()
break
case 2:this._context.lineTo(this._x3,this._y3),this._context.closePath()
break
case 3:this.point(this._x3,this._y3),this.point(this._x4,this._y4),this.point(this._x5,this._y5)}},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1,this._x3=t,this._y3=n
break
case 1:this._point=2,this._context.moveTo(this._x4=t,this._y4=n)
break
case 2:this._point=3,this._x5=t,this._y5=n
break
default:Ct(this,t,n)}this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=n}}
var Dt=function t(n){function e(t){return new jt(t,n)}return e.tension=function(n){return t(+n)},e}(0)
function Et(t,n){this._context=t,this._k=(1-n)/6}Et.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._point=0},lineEnd:function(){(this._line||0!==this._line&&3===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1
break
case 1:this._point=2
break
case 2:this._point=3,this._line?this._context.lineTo(this._x2,this._y2):this._context.moveTo(this._x2,this._y2)
break
case 3:this._point=4
default:Ct(this,t,n)}this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=n}}
var Lt=function t(n){function e(t){return new Et(t,n)}return e.tension=function(n){return t(+n)},e}(0)
function Ft(t,n,e){var r=t._x1,i=t._y1,a=t._x2,o=t._y2
if(t._l01_a>1e-12){var u=2*t._l01_2a+3*t._l01_a*t._l12_a+t._l12_2a,c=3*t._l01_a*(t._l01_a+t._l12_a)
r=(r*u-t._x0*t._l12_2a+t._x2*t._l01_2a)/c,i=(i*u-t._y0*t._l12_2a+t._y2*t._l01_2a)/c}if(t._l23_a>1e-12){var l=2*t._l23_2a+3*t._l23_a*t._l12_a+t._l12_2a,s=3*t._l23_a*(t._l23_a+t._l12_a)
a=(a*l+t._x1*t._l23_2a-n*t._l12_2a)/s,o=(o*l+t._y1*t._l23_2a-e*t._l12_2a)/s}t._context.bezierCurveTo(r,i,a,o,t._x2,t._y2)}function Rt(t,n){this._context=t,this._alpha=n}Rt.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._l01_a=this._l12_a=this._l23_a=this._l01_2a=this._l12_2a=this._l23_2a=this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x2,this._y2)
break
case 3:this.point(this._x2,this._y2)}(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){if(t=+t,n=+n,this._point){var e=this._x2-t,r=this._y2-n
this._l23_a=Math.sqrt(this._l23_2a=Math.pow(e*e+r*r,this._alpha))}switch(this._point){case 0:this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n)
break
case 1:this._point=2
break
case 2:this._point=3
default:Ft(this,t,n)}this._l01_a=this._l12_a,this._l12_a=this._l23_a,this._l01_2a=this._l12_2a,this._l12_2a=this._l23_2a,this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=n}}
var Pt=function t(n){function e(t){return n?new Rt(t,n):new St(t,0)}return e.alpha=function(n){return t(+n)},e}(.5)
function Bt(t,n){this._context=t,this._alpha=n}Bt.prototype={areaStart:mt,areaEnd:mt,lineStart:function(){this._x0=this._x1=this._x2=this._x3=this._x4=this._x5=this._y0=this._y1=this._y2=this._y3=this._y4=this._y5=NaN,this._l01_a=this._l12_a=this._l23_a=this._l01_2a=this._l12_2a=this._l23_2a=this._point=0},lineEnd:function(){switch(this._point){case 1:this._context.moveTo(this._x3,this._y3),this._context.closePath()
break
case 2:this._context.lineTo(this._x3,this._y3),this._context.closePath()
break
case 3:this.point(this._x3,this._y3),this.point(this._x4,this._y4),this.point(this._x5,this._y5)}},point:function(t,n){if(t=+t,n=+n,this._point){var e=this._x2-t,r=this._y2-n
this._l23_a=Math.sqrt(this._l23_2a=Math.pow(e*e+r*r,this._alpha))}switch(this._point){case 0:this._point=1,this._x3=t,this._y3=n
break
case 1:this._point=2,this._context.moveTo(this._x4=t,this._y4=n)
break
case 2:this._point=3,this._x5=t,this._y5=n
break
default:Ft(this,t,n)}this._l01_a=this._l12_a,this._l12_a=this._l23_a,this._l01_2a=this._l12_2a,this._l12_2a=this._l23_2a,this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=n}}
var It=function t(n){function e(t){return n?new Bt(t,n):new jt(t,0)}return e.alpha=function(n){return t(+n)},e}(.5)
function Ut(t,n){this._context=t,this._alpha=n}Ut.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._l01_a=this._l12_a=this._l23_a=this._l01_2a=this._l12_2a=this._l23_2a=this._point=0},lineEnd:function(){(this._line||0!==this._line&&3===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){if(t=+t,n=+n,this._point){var e=this._x2-t,r=this._y2-n
this._l23_a=Math.sqrt(this._l23_2a=Math.pow(e*e+r*r,this._alpha))}switch(this._point){case 0:this._point=1
break
case 1:this._point=2
break
case 2:this._point=3,this._line?this._context.lineTo(this._x2,this._y2):this._context.moveTo(this._x2,this._y2)
break
case 3:this._point=4
default:Ft(this,t,n)}this._l01_a=this._l12_a,this._l12_a=this._l23_a,this._l01_2a=this._l12_2a,this._l12_2a=this._l23_2a,this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=n}}
var Ht=function t(n){function e(t){return n?new Ut(t,n):new Et(t,0)}return e.alpha=function(n){return t(+n)},e}(.5)
function zt(t){this._context=t}zt.prototype={areaStart:mt,areaEnd:mt,lineStart:function(){this._point=0},lineEnd:function(){this._point&&this._context.closePath()},point:function(t,n){t=+t,n=+n,this._point?this._context.lineTo(t,n):(this._point=1,this._context.moveTo(t,n))}}
var qt=function(t){return new zt(t)}
function Yt(t){return t<0?-1:1}function Gt(t,n,e){var r=t._x1-t._x0,i=n-t._x1,a=(t._y1-t._y0)/(r||i<0&&-0),o=(e-t._y1)/(i||r<0&&-0),u=(a*i+o*r)/(r+i)
return(Yt(a)+Yt(o))*Math.min(Math.abs(a),Math.abs(o),.5*Math.abs(u))||0}function Vt(t,n){var e=t._x1-t._x0
return e?(3*(t._y1-t._y0)/e-n)/2:n}function Wt(t,n,e){var r=t._x0,i=t._y0,a=t._x1,o=t._y1,u=(a-r)/3
t._context.bezierCurveTo(r+u,i+u*n,a-u,o-u*e,a,o)}function Xt(t){this._context=t}function $t(t){this._context=new Qt(t)}function Qt(t){this._context=t}function Zt(t){return new Xt(t)}function Kt(t){return new $t(t)}function Jt(t){this._context=t}function tn(t){var n,e,r=t.length-1,i=new Array(r),a=new Array(r),o=new Array(r)
for(i[0]=0,a[0]=2,o[0]=t[0]+2*t[1],n=1;n<r-1;++n)i[n]=1,a[n]=4,o[n]=4*t[n]+2*t[n+1]
for(i[r-1]=2,a[r-1]=7,o[r-1]=8*t[r-1]+t[r],n=1;n<r;++n)e=i[n]/a[n-1],a[n]-=e,o[n]-=e*o[n-1]
for(i[r-1]=o[r-1]/a[r-1],n=r-2;n>=0;--n)i[n]=(o[n]-i[n+1])/a[n]
for(a[r-1]=(t[r]+i[r-1])/2,n=0;n<r-1;++n)a[n]=2*t[n+1]-i[n+1]
return[i,a]}Xt.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=this._t0=NaN,this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x1,this._y1)
break
case 3:Wt(this,this._t0,Vt(this,this._t0))}(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){var e=NaN
if(n=+n,(t=+t)!==this._x1||n!==this._y1){switch(this._point){case 0:this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n)
break
case 1:this._point=2
break
case 2:this._point=3,Wt(this,Vt(this,e=Gt(this,t,n)),e)
break
default:Wt(this,this._t0,e=Gt(this,t,n))}this._x0=this._x1,this._x1=t,this._y0=this._y1,this._y1=n,this._t0=e}}},($t.prototype=Object.create(Xt.prototype)).point=function(t,n){Xt.prototype.point.call(this,n,t)},Qt.prototype={moveTo:function(t,n){this._context.moveTo(n,t)},closePath:function(){this._context.closePath()},lineTo:function(t,n){this._context.lineTo(n,t)},bezierCurveTo:function(t,n,e,r,i,a){this._context.bezierCurveTo(n,t,r,e,a,i)}},Jt.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x=[],this._y=[]},lineEnd:function(){var t=this._x,n=this._y,e=t.length
if(e)if(this._line?this._context.lineTo(t[0],n[0]):this._context.moveTo(t[0],n[0]),2===e)this._context.lineTo(t[1],n[1])
else for(var r=tn(t),i=tn(n),a=0,o=1;o<e;++a,++o)this._context.bezierCurveTo(r[0][a],i[0][a],r[1][a],i[1][a],t[o],n[o]);(this._line||0!==this._line&&1===e)&&this._context.closePath(),this._line=1-this._line,this._x=this._y=null},point:function(t,n){this._x.push(+t),this._y.push(+n)}}
var nn=function(t){return new Jt(t)}
function en(t,n){this._context=t,this._t=n}en.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x=this._y=NaN,this._point=0},lineEnd:function(){0<this._t&&this._t<1&&2===this._point&&this._context.lineTo(this._x,this._y),(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line>=0&&(this._t=1-this._t,this._line=1-this._line)},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n)
break
case 1:this._point=2
default:if(this._t<=0)this._context.lineTo(this._x,n),this._context.lineTo(t,n)
else{var e=this._x*(1-this._t)+t*this._t
this._context.lineTo(e,this._y),this._context.lineTo(e,n)}}this._x=t,this._y=n}}
var rn=function(t){return new en(t,.5)}
function an(t){return new en(t,0)}function on(t){return new en(t,1)}var un=function(t,n){if((i=t.length)>1)for(var e,r,i,a=1,o=t[n[0]],u=o.length;a<i;++a)for(r=o,o=t[n[a]],e=0;e<u;++e)o[e][1]+=o[e][0]=isNaN(r[e][1])?r[e][0]:r[e][1]},cn=function(t){for(var n=t.length,e=new Array(n);--n>=0;)e[n]=n
return e}
function ln(t,n){return t[n]}var sn=function(){var t=l([]),n=cn,e=un,r=ln
function i(i){var a,o,u=t.apply(this,arguments),c=i.length,l=u.length,s=new Array(l)
for(a=0;a<l;++a){for(var f,h=u[a],d=s[a]=new Array(c),p=0;p<c;++p)d[p]=f=[0,+r(i[p],h,p,i)],f.data=i[p]
d.key=h}for(a=0,o=n(s);a<l;++a)s[o[a]].index=a
return e(s,o),s}return i.keys=function(n){return arguments.length?(t="function"==typeof n?n:l(Y.call(n)),i):t},i.value=function(t){return arguments.length?(r="function"==typeof t?t:l(+t),i):r},i.order=function(t){return arguments.length?(n=null==t?cn:"function"==typeof t?t:l(Y.call(t)),i):n},i.offset=function(t){return arguments.length?(e=null==t?un:t,i):e},i},fn=function(t,n){if((r=t.length)>0){for(var e,r,i,a=0,o=t[0].length;a<o;++a){for(i=e=0;e<r;++e)i+=t[e][a][1]||0
if(i)for(e=0;e<r;++e)t[e][a][1]/=i}un(t,n)}},hn=function(t,n){if((u=t.length)>0)for(var e,r,i,a,o,u,c=0,l=t[n[0]].length;c<l;++c)for(a=o=0,e=0;e<u;++e)(i=(r=t[n[e]][c])[1]-r[0])>0?(r[0]=a,r[1]=a+=i):i<0?(r[1]=o,r[0]=o+=i):(r[0]=0,r[1]=i)},dn=function(t,n){if((e=t.length)>0){for(var e,r=0,i=t[n[0]],a=i.length;r<a;++r){for(var o=0,u=0;o<e;++o)u+=t[o][r][1]||0
i[r][1]+=i[r][0]=-u/2}un(t,n)}},pn=function(t,n){if((i=t.length)>0&&(r=(e=t[n[0]]).length)>0){for(var e,r,i,a=0,o=1;o<r;++o){for(var u=0,c=0,l=0;u<i;++u){for(var s=t[n[u]],f=s[o][1]||0,h=(f-(s[o-1][1]||0))/2,d=0;d<u;++d){var p=t[n[d]]
h+=(p[o][1]||0)-(p[o-1][1]||0)}c+=f,l+=h*f}e[o-1][1]+=e[o-1][0]=a,c&&(a-=l/c)}e[o-1][1]+=e[o-1][0]=a,un(t,n)}},gn=function(t){var n=t.map(vn)
return cn(t).sort((function(t,e){return n[t]-n[e]}))}
function vn(t){for(var n,e=-1,r=0,i=t.length,a=-1/0;++e<i;)(n=+t[e][1])>a&&(a=n,r=e)
return r}var yn=function(t){var n=t.map(mn)
return cn(t).sort((function(t,e){return n[t]-n[e]}))}
function mn(t){for(var n,e=0,r=-1,i=t.length;++r<i;)(n=+t[r][1])&&(e+=n)
return e}var xn=function(t){return yn(t).reverse()},bn=function(t){var n,e,r=t.length,i=t.map(mn),a=gn(t),o=0,u=0,c=[],l=[]
for(n=0;n<r;++n)e=a[n],o<u?(o+=i[e],c.push(e)):(u+=i[e],l.push(e))
return l.reverse().concat(c)},_n=function(t){return cn(t).reverse()}
e.d(n,"arc",(function(){return T})),e.d(n,"area",(function(){return E})),e.d(n,"line",(function(){return D})),e.d(n,"pie",(function(){return R})),e.d(n,"areaRadial",(function(){return z})),e.d(n,"radialArea",(function(){return z})),e.d(n,"lineRadial",(function(){return H})),e.d(n,"radialLine",(function(){return H})),e.d(n,"pointRadial",(function(){return q})),e.d(n,"linkHorizontal",(function(){return Z})),e.d(n,"linkVertical",(function(){return K})),e.d(n,"linkRadial",(function(){return J})),e.d(n,"symbol",(function(){return yt})),e.d(n,"symbols",(function(){return vt})),e.d(n,"symbolCircle",(function(){return tt})),e.d(n,"symbolCross",(function(){return nt})),e.d(n,"symbolDiamond",(function(){return it})),e.d(n,"symbolSquare",(function(){return lt})),e.d(n,"symbolStar",(function(){return ct})),e.d(n,"symbolTriangle",(function(){return ft})),e.d(n,"symbolWye",(function(){return gt})),e.d(n,"curveBasisClosed",(function(){return Mt})),e.d(n,"curveBasisOpen",(function(){return kt})),e.d(n,"curveBasis",(function(){return _t})),e.d(n,"curveBundle",(function(){return Tt})),e.d(n,"curveCardinalClosed",(function(){return Dt})),e.d(n,"curveCardinalOpen",(function(){return Lt})),e.d(n,"curveCardinal",(function(){return Nt})),e.d(n,"curveCatmullRomClosed",(function(){return It})),e.d(n,"curveCatmullRomOpen",(function(){return Ht})),e.d(n,"curveCatmullRom",(function(){return Pt})),e.d(n,"curveLinearClosed",(function(){return qt})),e.d(n,"curveLinear",(function(){return S})),e.d(n,"curveMonotoneX",(function(){return Zt})),e.d(n,"curveMonotoneY",(function(){return Kt})),e.d(n,"curveNatural",(function(){return nn})),e.d(n,"curveStep",(function(){return rn})),e.d(n,"curveStepAfter",(function(){return on})),e.d(n,"curveStepBefore",(function(){return an})),e.d(n,"stack",(function(){return sn})),e.d(n,"stackOffsetExpand",(function(){return fn})),e.d(n,"stackOffsetDiverging",(function(){return hn})),e.d(n,"stackOffsetNone",(function(){return un})),e.d(n,"stackOffsetSilhouette",(function(){return dn})),e.d(n,"stackOffsetWiggle",(function(){return pn})),e.d(n,"stackOrderAppearance",(function(){return gn})),e.d(n,"stackOrderAscending",(function(){return yn})),e.d(n,"stackOrderDescending",(function(){return xn})),e.d(n,"stackOrderInsideOut",(function(){return bn})),e.d(n,"stackOrderNone",(function(){return cn})),e.d(n,"stackOrderReverse",(function(){return _n}))},function(t,n,e){"use strict"
e.r(n)
var r=e(19),i=e(62),a=Date.prototype.toISOString?function(t){return t.toISOString()}:Object(r.d)("%Y-%m-%dT%H:%M:%S.%LZ"),o=+new Date("2000-01-01T00:00:00.000Z")?function(t){var n=new Date(t)
return isNaN(n)?null:n}:Object(r.e)("%Y-%m-%dT%H:%M:%S.%LZ")
e.d(n,"timeFormatDefaultLocale",(function(){return r.a})),e.d(n,"timeFormat",(function(){return r.b})),e.d(n,"timeParse",(function(){return r.c})),e.d(n,"utcFormat",(function(){return r.d})),e.d(n,"utcParse",(function(){return r.e})),e.d(n,"timeFormatLocale",(function(){return i.a})),e.d(n,"isoFormat",(function(){return a})),e.d(n,"isoParse",(function(){return o}))},function(t,n,e){"use strict"
function r(){}function i(t,n){var e=new r
if(t instanceof r)t.each((function(t,n){e.set(n,t)}))
else if(Array.isArray(t)){var i,a=-1,o=t.length
if(null==n)for(;++a<o;)e.set(a,t[a])
else for(;++a<o;)e.set(n(i=t[a],a,t),i)}else if(t)for(var u in t)e.set(u,t[u])
return e}e.r(n),r.prototype=i.prototype={constructor:r,has:function(t){return"$"+t in this},get:function(t){return this["$"+t]},set:function(t,n){return this["$"+t]=n,this},remove:function(t){var n="$"+t
return n in this&&delete this[n]},clear:function(){for(var t in this)"$"===t[0]&&delete this[t]},keys:function(){var t=[]
for(var n in this)"$"===n[0]&&t.push(n.slice(1))
return t},values:function(){var t=[]
for(var n in this)"$"===n[0]&&t.push(this[n])
return t},entries:function(){var t=[]
for(var n in this)"$"===n[0]&&t.push({key:n.slice(1),value:this[n]})
return t},size:function(){var t=0
for(var n in this)"$"===n[0]&&++t
return t},empty:function(){for(var t in this)if("$"===t[0])return!1
return!0},each:function(t){for(var n in this)"$"===n[0]&&t(this[n],n.slice(1),this)}}
var a=i,o=function(){var t,n,e,r=[],i=[]
function o(e,i,u,c){if(i>=r.length)return null!=t&&e.sort(t),null!=n?n(e):e
for(var l,s,f,h=-1,d=e.length,p=r[i++],g=a(),v=u();++h<d;)(f=g.get(l=p(s=e[h])+""))?f.push(s):g.set(l,[s])
return g.each((function(t,n){c(v,n,o(t,i,u,c))})),v}return e={object:function(t){return o(t,0,u,c)},map:function(t){return o(t,0,l,s)},entries:function(t){return function t(e,a){if(++a>r.length)return e
var o,u=i[a-1]
return null!=n&&a>=r.length?o=e.entries():(o=[],e.each((function(n,e){o.push({key:e,values:t(n,a)})}))),null!=u?o.sort((function(t,n){return u(t.key,n.key)})):o}(o(t,0,l,s),0)},key:function(t){return r.push(t),e},sortKeys:function(t){return i[r.length-1]=t,e},sortValues:function(n){return t=n,e},rollup:function(t){return n=t,e}}}
function u(){return{}}function c(t,n,e){t[n]=e}function l(){return a()}function s(t,n,e){t.set(n,e)}function f(){}var h=a.prototype
function d(t,n){var e=new f
if(t instanceof f)t.each((function(t){e.add(t)}))
else if(t){var r=-1,i=t.length
if(null==n)for(;++r<i;)e.add(t[r])
else for(;++r<i;)e.add(n(t[r],r,t))}return e}f.prototype=d.prototype={constructor:f,has:h.has,add:function(t){return this["$"+(t+="")]=t,this},remove:h.remove,clear:h.clear,values:h.keys,size:h.size,empty:h.empty,each:h.each}
var p=d,g=function(t){var n=[]
for(var e in t)n.push(e)
return n},v=function(t){var n=[]
for(var e in t)n.push(t[e])
return n},y=function(t){var n=[]
for(var e in t)n.push({key:e,value:t[e]})
return n}
e.d(n,"nest",(function(){return o})),e.d(n,"set",(function(){return p})),e.d(n,"map",(function(){return a})),e.d(n,"keys",(function(){return g})),e.d(n,"values",(function(){return v})),e.d(n,"entries",(function(){return y}))},function(t,n,e){"use strict"
var r=e(43),i=e(31)
function a(t){return function(){var n=this.ownerDocument,e=this.namespaceURI
return e===i.b&&n.documentElement.namespaceURI===i.b?n.createElement(t):n.createElementNS(e,t)}}function o(t){return function(){return this.ownerDocument.createElementNS(t.space,t.local)}}n.a=function(t){var n=Object(r.a)(t)
return(n.local?o:a)(n)}},function(t,n,e){"use strict"
n.a=function(t,n){var e=t.ownerSVGElement||t
if(e.createSVGPoint){var r=e.createSVGPoint()
return r.x=n.clientX,r.y=n.clientY,[(r=r.matrixTransform(t.getScreenCTM().inverse())).x,r.y]}var i=t.getBoundingClientRect()
return[n.clientX-i.left-t.clientLeft,n.clientY-i.top-t.clientTop]}},function(t,n,e){"use strict"
function r(t){return ArrayBuffer.isView(t)&&!(t instanceof DataView)}e.d(n,"b",(function(){return r})),n.a=function(t,n){n||(n=[])
var e,r=t?Math.min(n.length,t.length):0,i=n.slice()
return function(a){for(e=0;e<r;++e)i[e]=t[e]*(1-a)+n[e]*a
return i}}},function(t,n,e){"use strict"
e.d(n,"b",(function(){return r}))
var r="http://www.w3.org/1999/xhtml"
n.a={svg:"http://www.w3.org/2000/svg",xhtml:r,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"}},function(t,n,e){"use strict"
e.d(n,"b",(function(){return a}))
var r=e(1),i=Object(r.a)((function(t){t.setMonth(0,1),t.setHours(0,0,0,0)}),(function(t,n){t.setFullYear(t.getFullYear()+n)}),(function(t,n){return n.getFullYear()-t.getFullYear()}),(function(t){return t.getFullYear()}))
i.every=function(t){return isFinite(t=Math.floor(t))&&t>0?Object(r.a)((function(n){n.setFullYear(Math.floor(n.getFullYear()/t)*t),n.setMonth(0,1),n.setHours(0,0,0,0)}),(function(n,e){n.setFullYear(n.getFullYear()+e*t)})):null},n.a=i
var a=i.range},function(t,n,e){"use strict"
e.d(n,"b",(function(){return a}))
var r=e(1),i=Object(r.a)((function(t){t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0)}),(function(t,n){t.setUTCFullYear(t.getUTCFullYear()+n)}),(function(t,n){return n.getUTCFullYear()-t.getUTCFullYear()}),(function(t){return t.getUTCFullYear()}))
i.every=function(t){return isFinite(t=Math.floor(t))&&t>0?Object(r.a)((function(n){n.setUTCFullYear(Math.floor(n.getUTCFullYear()/t)*t),n.setUTCMonth(0,1),n.setUTCHours(0,0,0,0)}),(function(n,e){n.setUTCFullYear(n.getUTCFullYear()+e*t)})):null},n.a=i
var a=i.range},function(t,n,e){"use strict"
var r
void 0===(r=function(){var t=e(25),n=e(38)
return{axisTimeCombinations:{MINUTE_HOUR:"minute-hour",HOUR_DAY:"hour-daymonth",DAY_MONTH:"day-month",MONTH_YEAR:"month-year",CUSTOM:"custom"},curveMap:{linear:t.curveLinear,basis:t.curveBasis,cardinal:t.curveCardinal,catmullRom:t.curveCatmullRom,monotoneX:t.curveMonotoneX,monotoneY:t.curveMonotoneY,natural:t.curveNatural,step:t.curveStep,stepAfter:t.curveStepAfter,stepBefore:t.curveStepBefore},emptyDonutData:[{quantity:1,percentage:100}],timeBenchmarks:{ONE_AND_A_HALF_YEARS:47304e6,ONE_YEAR:31536000365,ONE_DAY:86400001},lineGradientId:"lineGradientId",timeIntervals:{timeMillisecond:n.timeMillisecond,utcMillisecond:n.utcMillisecond,timeSecond:n.timeSecond,utcSecond:n.utcSecond,timeMinute:n.timeMinute,utcMinute:n.utcMinute,timeHour:n.timeHour,utcHour:n.utcHour,timeDay:n.timeDay,utcDay:n.utcDay,timeWeek:n.timeWeek,utcWeek:n.utcWeek,timeSunday:n.timeSunday,utcSunday:n.utcSunday,timeMonday:n.timeMonday,utcMonday:n.utcMonday,timeTuesday:n.timeTuesday,utcTuesday:n.utcTuesday,timeWednesday:n.timeWednesday,utcWednesday:n.utcWednesday,timeThursday:n.timeThursday,utcThursday:n.utcThursday,timeFriday:n.timeFriday,utcFriday:n.utcFriday,timeSaturday:n.timeSaturday,utcSaturday:n.utcSaturday,timeMonth:n.timeMonth,utcMonth:n.utcMonth,timeYear:n.timeYear,utcYear:n.utcYear},FORMAT_LOCALE_URL:"https://cdn.jsdelivr.net/npm/d3-format/locale"}}.call(n,e,n,t))||(t.exports=r)},function(t,n,e){"use strict"
e.d(n,"b",(function(){return c})),e.d(n,"c",(function(){return l}))
var r=e(7),i=e(41),a=e(57),o=e(4)
function u(t){return function(n){var e,i,a=n.length,o=new Array(a),u=new Array(a),c=new Array(a)
for(e=0;e<a;++e)i=Object(r.g)(n[e]),o[e]=i.r||0,u[e]=i.g||0,c[e]=i.b||0
return o=t(o),u=t(u),c=t(c),i.opacity=1,function(t){return i.r=o(t),i.g=u(t),i.b=c(t),i+""}}}n.a=function t(n){var e=Object(o.b)(n)
function i(t,n){var i=e((t=Object(r.g)(t)).r,(n=Object(r.g)(n)).r),a=e(t.g,n.g),u=e(t.b,n.b),c=Object(o.a)(t.opacity,n.opacity)
return function(n){return t.r=i(n),t.g=a(n),t.b=u(n),t.opacity=c(n),t+""}}return i.gamma=t,i}(1)
var c=u(i.b),l=u(a.a)},function(t,n,e){"use strict"
e.d(n,"c",(function(){return i})),e.d(n,"a",(function(){return l}))
var r={},i=null
function a(t,n,e){return t=o(t,n,e),function(n){var e=n.relatedTarget
e&&(e===this||8&e.compareDocumentPosition(this))||t.call(this,n)}}function o(t,n,e){return function(r){var a=i
i=r
try{t.call(this,this.__data__,n,e)}finally{i=a}}}function u(t){return function(){var n=this.__on
if(n){for(var e,r=0,i=-1,a=n.length;r<a;++r)e=n[r],t.type&&e.type!==t.type||e.name!==t.name?n[++i]=e:this.removeEventListener(e.type,e.listener,e.capture);++i?n.length=i:delete this.__on}}}function c(t,n,e){var i=r.hasOwnProperty(t.type)?a:o
return function(r,a,o){var u,c=this.__on,l=i(n,a,o)
if(c)for(var s=0,f=c.length;s<f;++s)if((u=c[s]).type===t.type&&u.name===t.name)return this.removeEventListener(u.type,u.listener,u.capture),this.addEventListener(u.type,u.listener=l,u.capture=e),void(u.value=n)
this.addEventListener(t.type,l,e),u={type:t.type,name:t.name,value:n,listener:l,capture:e},c?c.push(u):this.__on=[u]}}function l(t,n,e,r){var a=i
t.sourceEvent=i,i=t
try{return n.apply(e,r)}finally{i=a}}"undefined"!=typeof document&&("onmouseenter"in document.documentElement||(r={mouseenter:"mouseover",mouseleave:"mouseout"})),n.b=function(t,n,e){var r,i,a=function(t){return t.trim().split(/^|\s+/).map((function(t){var n="",e=t.indexOf(".")
return e>=0&&(n=t.slice(e+1),t=t.slice(0,e)),{type:t,name:n}}))}(t+""),o=a.length
if(!(arguments.length<2)){for(l=n?c:u,null==e&&(e=!1),r=0;r<o;++r)this.each(l(a[r],n,e))
return this}var l=this.node().__on
if(l)for(var s,f=0,h=l.length;f<h;++f)for(r=0,s=l[f];r<o;++r)if((i=a[r]).type===s.type&&i.name===s.name)return s.value}},function(t,n,e){"use strict"
n.a=function(t,n){if((e=(t=n?t.toExponential(n-1):t.toExponential()).indexOf("e"))<0)return null
var e,r=t.slice(0,e)
return[r.length>1?r[0]+r.slice(2):r,+t.slice(e+1)]}},function(t,n,e){"use strict"
e.r(n)
var r=e(1)
e.d(n,"timeInterval",(function(){return r.a}))
var i=e(51)
e.d(n,"timeMillisecond",(function(){return i.a})),e.d(n,"timeMilliseconds",(function(){return i.b})),e.d(n,"utcMillisecond",(function(){return i.a})),e.d(n,"utcMilliseconds",(function(){return i.b}))
var a=e(50)
e.d(n,"timeSecond",(function(){return a.a})),e.d(n,"timeSeconds",(function(){return a.b})),e.d(n,"utcSecond",(function(){return a.a})),e.d(n,"utcSeconds",(function(){return a.b}))
var o=e(70)
e.d(n,"timeMinute",(function(){return o.a})),e.d(n,"timeMinutes",(function(){return o.b}))
var u=e(69)
e.d(n,"timeHour",(function(){return u.a})),e.d(n,"timeHours",(function(){return u.b}))
var c=e(52)
e.d(n,"timeDay",(function(){return c.b})),e.d(n,"timeDays",(function(){return c.a}))
var l=e(5)
e.d(n,"timeWeek",(function(){return l.g})),e.d(n,"timeWeeks",(function(){return l.h})),e.d(n,"timeSunday",(function(){return l.g})),e.d(n,"timeSundays",(function(){return l.h})),e.d(n,"timeMonday",(function(){return l.c})),e.d(n,"timeMondays",(function(){return l.d})),e.d(n,"timeTuesday",(function(){return l.k})),e.d(n,"timeTuesdays",(function(){return l.l})),e.d(n,"timeWednesday",(function(){return l.m})),e.d(n,"timeWednesdays",(function(){return l.n})),e.d(n,"timeThursday",(function(){return l.i})),e.d(n,"timeThursdays",(function(){return l.j})),e.d(n,"timeFriday",(function(){return l.a})),e.d(n,"timeFridays",(function(){return l.b})),e.d(n,"timeSaturday",(function(){return l.e})),e.d(n,"timeSaturdays",(function(){return l.f}))
var s=e(68)
e.d(n,"timeMonth",(function(){return s.a})),e.d(n,"timeMonths",(function(){return s.b}))
var f=e(32)
e.d(n,"timeYear",(function(){return f.a})),e.d(n,"timeYears",(function(){return f.b}))
var h=e(73)
e.d(n,"utcMinute",(function(){return h.a})),e.d(n,"utcMinutes",(function(){return h.b}))
var d=e(72)
e.d(n,"utcHour",(function(){return d.a})),e.d(n,"utcHours",(function(){return d.b}))
var p=e(53)
e.d(n,"utcDay",(function(){return p.a})),e.d(n,"utcDays",(function(){return p.b}))
var g=e(6)
e.d(n,"utcWeek",(function(){return g.g})),e.d(n,"utcWeeks",(function(){return g.h})),e.d(n,"utcSunday",(function(){return g.g})),e.d(n,"utcSundays",(function(){return g.h})),e.d(n,"utcMonday",(function(){return g.c})),e.d(n,"utcMondays",(function(){return g.d})),e.d(n,"utcTuesday",(function(){return g.k})),e.d(n,"utcTuesdays",(function(){return g.l})),e.d(n,"utcWednesday",(function(){return g.m})),e.d(n,"utcWednesdays",(function(){return g.n})),e.d(n,"utcThursday",(function(){return g.i})),e.d(n,"utcThursdays",(function(){return g.j})),e.d(n,"utcFriday",(function(){return g.a})),e.d(n,"utcFridays",(function(){return g.b})),e.d(n,"utcSaturday",(function(){return g.e})),e.d(n,"utcSaturdays",(function(){return g.f}))
var v=e(71)
e.d(n,"utcMonth",(function(){return v.a})),e.d(n,"utcMonths",(function(){return v.b}))
var y=e(33)
e.d(n,"utcYear",(function(){return y.a})),e.d(n,"utcYears",(function(){return y.b}))},function(t,n,e){"use strict"
e.d(n,"b",(function(){return i})),e.d(n,"a",(function(){return a}))
var r=/^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i
function i(t){if(!(n=r.exec(t)))throw new Error("invalid format: "+t)
var n
return new a({fill:n[1],align:n[2],sign:n[3],symbol:n[4],zero:n[5],width:n[6],comma:n[7],precision:n[8]&&n[8].slice(1),trim:n[9],type:n[10]})}function a(t){this.fill=void 0===t.fill?" ":t.fill+"",this.align=void 0===t.align?">":t.align+"",this.sign=void 0===t.sign?"-":t.sign+"",this.symbol=void 0===t.symbol?"":t.symbol+"",this.zero=!!t.zero,this.width=void 0===t.width?void 0:+t.width,this.comma=!!t.comma,this.precision=void 0===t.precision?void 0:+t.precision,this.trim=!!t.trim,this.type=void 0===t.type?"":t.type+""}i.prototype=a.prototype,a.prototype.toString=function(){return this.fill+this.align+this.sign+this.symbol+(this.zero?"0":"")+(void 0===this.width?"":Math.max(1,0|this.width))+(this.comma?",":"")+(void 0===this.precision?"":"."+Math.max(0,0|this.precision))+(this.trim?"~":"")+this.type}},function(t,n,e){"use strict"
var r=e(7),i=e(35),a=e(60),o=e(59),u=e(12),c=e(61),l=e(58),s=e(47),f=e(30)
n.a=function(t,n){var e,h=typeof n
return null==n||"boolean"===h?Object(s.a)(n):("number"===h?u.a:"string"===h?(e=Object(r.e)(n))?(n=e,i.a):l.a:n instanceof r.e?i.a:n instanceof Date?o.a:Object(f.b)(n)?f.a:Array.isArray(n)?a.b:"function"!=typeof n.valueOf&&"function"!=typeof n.toString||isNaN(n)?c.a:u.a)(t,n)}},function(t,n,e){"use strict"
function r(t,n,e,r,i){var a=t*t,o=a*t
return((1-3*t+3*a-o)*n+(4-6*a+3*o)*e+(1+3*t+3*a-3*o)*r+o*i)/6}e.d(n,"a",(function(){return r})),n.b=function(t){var n=t.length-1
return function(e){var i=e<=0?e=0:e>=1?(e=1,n-1):Math.floor(e*n),a=t[i],o=t[i+1],u=i>0?t[i-1]:2*a-o,c=i<n-1?t[i+2]:2*o-a
return r((e-i/n)*n,u,a,o,c)}}},function(t,n,e){"use strict"
function r(){}n.a=function(t){return null==t?r:function(){return this.querySelector(t)}}},function(t,n,e){"use strict"
var r=e(31)
n.a=function(t){var n=t+="",e=n.indexOf(":")
return e>=0&&"xmlns"!==(n=t.slice(0,e))&&(t=t.slice(e+1)),r.a.hasOwnProperty(n)?{space:r.a[n],local:t}:t}},function(t,n,e){"use strict"
n.a=function(t){return t.ownerDocument&&t.ownerDocument.defaultView||t.document&&t||t.defaultView}},function(t,n,e){"use strict"
var r=e(36)
n.a=function(){for(var t,n=r.c;t=n.sourceEvent;)n=t
return n}},function(t,n,e){"use strict"
e.d(n,"a",(function(){return r})),e.d(n,"b",(function(){return i}))
var r=Math.PI/180,i=180/Math.PI},function(t,n,e){"use strict"
n.a=function(t){return function(){return t}}},function(t,n,e){"use strict"
function r(t){return t*t*t}function i(t){return--t*t*t+1}function a(t){return((t*=2)<=1?t*t*t:(t-=2)*t*t+2)/2}e.d(n,"a",(function(){return r})),e.d(n,"c",(function(){return i})),e.d(n,"b",(function(){return a}))},function(t,n,e){"use strict"
e.d(n,"b",(function(){return l})),e.d(n,"a",(function(){return s})),e.d(n,"d",(function(){return y})),e.d(n,"c",(function(){return m}))
var r=e(13),i=e(7),a=e(46),o=6/29,u=3*o*o
function c(t){if(t instanceof f)return new f(t.l,t.a,t.b,t.opacity)
if(t instanceof x)return b(t)
t instanceof i.b||(t=Object(i.h)(t))
var n,e,r=g(t.r),a=g(t.g),o=g(t.b),u=h((.2225045*r+.7168786*a+.0606169*o)/1)
return r===a&&a===o?n=e=u:(n=h((.4360747*r+.3850649*a+.1430804*o)/.96422),e=h((.0139322*r+.0971045*a+.7141733*o)/.82521)),new f(116*u-16,500*(n-u),200*(u-e),t.opacity)}function l(t,n){return new f(t,0,0,null==n?1:n)}function s(t,n,e,r){return 1===arguments.length?c(t):new f(t,n,e,null==r?1:r)}function f(t,n,e,r){this.l=+t,this.a=+n,this.b=+e,this.opacity=+r}function h(t){return t>.008856451679035631?Math.pow(t,1/3):t/u+4/29}function d(t){return t>o?t*t*t:u*(t-4/29)}function p(t){return 255*(t<=.0031308?12.92*t:1.055*Math.pow(t,1/2.4)-.055)}function g(t){return(t/=255)<=.04045?t/12.92:Math.pow((t+.055)/1.055,2.4)}function v(t){if(t instanceof x)return new x(t.h,t.c,t.l,t.opacity)
if(t instanceof f||(t=c(t)),0===t.a&&0===t.b)return new x(NaN,0<t.l&&t.l<100?0:NaN,t.l,t.opacity)
var n=Math.atan2(t.b,t.a)*a.b
return new x(n<0?n+360:n,Math.sqrt(t.a*t.a+t.b*t.b),t.l,t.opacity)}function y(t,n,e,r){return 1===arguments.length?v(t):new x(e,n,t,null==r?1:r)}function m(t,n,e,r){return 1===arguments.length?v(t):new x(t,n,e,null==r?1:r)}function x(t,n,e,r){this.h=+t,this.c=+n,this.l=+e,this.opacity=+r}function b(t){if(isNaN(t.h))return new f(t.l,0,0,t.opacity)
var n=t.h*a.a
return new f(t.l,Math.cos(n)*t.c,Math.sin(n)*t.c,t.opacity)}Object(r.a)(f,s,Object(r.b)(i.a,{brighter:function(t){return new f(this.l+18*(null==t?1:t),this.a,this.b,this.opacity)},darker:function(t){return new f(this.l-18*(null==t?1:t),this.a,this.b,this.opacity)},rgb:function(){var t=(this.l+16)/116,n=isNaN(this.a)?t:t+this.a/500,e=isNaN(this.b)?t:t-this.b/200
return n=.96422*d(n),t=1*d(t),e=.82521*d(e),new i.b(p(3.1338561*n-1.6168667*t-.4906146*e),p(-.9787684*n+1.9161415*t+.033454*e),p(.0719453*n-.2289914*t+1.4052427*e),this.opacity)}})),Object(r.a)(x,m,Object(r.b)(i.a,{brighter:function(t){return new x(this.h,this.c,this.l+18*(null==t?1:t),this.opacity)},darker:function(t){return new x(this.h,this.c,this.l-18*(null==t?1:t),this.opacity)},rgb:function(){return b(this).rgb()}}))},function(t,n,e){"use strict"
e.d(n,"b",(function(){return o}))
var r=e(1),i=e(3),a=Object(r.a)((function(t){t.setTime(t-t.getMilliseconds())}),(function(t,n){t.setTime(+t+n*i.d)}),(function(t,n){return(n-t)/i.d}),(function(t){return t.getUTCSeconds()}))
n.a=a
var o=a.range},function(t,n,e){"use strict"
e.d(n,"b",(function(){return a}))
var r=e(1),i=Object(r.a)((function(){}),(function(t,n){t.setTime(+t+n)}),(function(t,n){return n-t}))
i.every=function(t){return t=Math.floor(t),isFinite(t)&&t>0?t>1?Object(r.a)((function(n){n.setTime(Math.floor(n/t)*t)}),(function(n,e){n.setTime(+n+e*t)}),(function(n,e){return(e-n)/t})):i:null},n.a=i
var a=i.range},function(t,n,e){"use strict"
e.d(n,"a",(function(){return o}))
var r=e(1),i=e(3),a=Object(r.a)((function(t){t.setHours(0,0,0,0)}),(function(t,n){t.setDate(t.getDate()+n)}),(function(t,n){return(n-t-(n.getTimezoneOffset()-t.getTimezoneOffset())*i.c)/i.a}),(function(t){return t.getDate()-1}))
n.b=a
var o=a.range},function(t,n,e){"use strict"
e.d(n,"b",(function(){return o}))
var r=e(1),i=e(3),a=Object(r.a)((function(t){t.setUTCHours(0,0,0,0)}),(function(t,n){t.setUTCDate(t.getUTCDate()+n)}),(function(t,n){return(n-t)/i.a}),(function(t){return t.getUTCDate()-1}))
n.a=a
var o=a.range},,function(t,n,e){"use strict"
e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return a})),e.d(n,"a",(function(){return u}))
var r,i,a,o=e(67)
function u(t){return r=Object(o.a)(t),i=r.format,a=r.formatPrefix,r}u({decimal:".",thousands:",",grouping:[3],currency:["$",""],minus:"-"})},function(t,n,e){"use strict"
var r
void 0===(r=function(t){var n=e(2),r="label"
return{getTextWidth:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:12,e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"Arial",r=document.createElement("canvas").getContext("2d")
return r.font=n+"px "+e,r.measureText(t).width},wrapText:function(t,e,i,a){var o=n.select(a),u=o.text().split(/\s+/).reverse(),c=void 0,l=[],s=0,f=o.attr("y"),h=parseFloat(o.attr("dy")),d=.6*e,p=o.text(null).append("tspan").attr("x",t).attr("y",f-5).attr("dy",h+"em").classed("value",!0).style("font-size",e+"px")
for(p.text(u.pop()),p=o.append("tspan").classed(r,!0).attr("x",t).attr("y",f+10).attr("dy",1.08*++s+h+"em").style("font-size",d+"px");c=u.pop();)l.push(c),p.text(l.join(" ")),p.node()&&p.node().getComputedTextLength()>i-50&&(l.pop(),p.text(l.join(" ")),l=[c],p=o.append("tspan").classed(r,!0).attr("x",t).attr("y",f+10).attr("dy",1.08*++s+h+"em").text(c).style("font-size",d+"px"))},wrapTextWithEllipses:function(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:2
t.each((function(){var a,o,u,c,l,s,f
for(a=(t=n.select(this)).text().split(/\s+/).reverse(),u=[],c=0,l=t.attr("y"),s=parseFloat(t.attr("dy")),f=t.text(null).append("tspan").attr("x",r).attr("y",l).attr("dy",s+"em");o=a.pop();)if(u.push(o),f.text(u.join(" ")),f.node()&&f.node().getComputedTextLength()>e){if(u.pop(),f.text(u.join(" ")),!(c<i-1)){u.push("..."),f.text(u.join(" "))
break}u=[o],f=t.append("tspan").attr("x",r).attr("y",l).attr("dy",1.2*++c+s+"em").text(o),t.classed("adjust-upwards",!0)}}))}}}.call(n,e,n,t))||(t.exports=r)},function(t,n,e){"use strict"
var r=e(41)
n.a=function(t){var n=t.length
return function(e){var i=Math.floor(((e%=1)<0?++e:e)*n),a=t[(i+n-1)%n],o=t[i%n],u=t[(i+1)%n],c=t[(i+2)%n]
return Object(r.a)((e-i/n)*n,a,o,u,c)}}},function(t,n,e){"use strict"
var r=e(12),i=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,a=new RegExp(i.source,"g")
n.a=function(t,n){var e,o,u,c=i.lastIndex=a.lastIndex=0,l=-1,s=[],f=[]
for(t+="",n+="";(e=i.exec(t))&&(o=a.exec(n));)(u=o.index)>c&&(u=n.slice(c,u),s[l]?s[l]+=u:s[++l]=u),(e=e[0])===(o=o[0])?s[l]?s[l]+=o:s[++l]=o:(s[++l]=null,f.push({i:l,x:Object(r.a)(e,o)})),c=a.lastIndex
return c<n.length&&(u=n.slice(c),s[l]?s[l]+=u:s[++l]=u),s.length<2?f[0]?function(t){return function(n){return t(n)+""}}(f[0].x):function(t){return function(){return t}}(n):(n=f.length,function(t){for(var e,r=0;r<n;++r)s[(e=f[r]).i]=e.x(t)
return s.join("")})}},function(t,n,e){"use strict"
n.a=function(t,n){var e=new Date
return t=+t,n=+n,function(r){return e.setTime(t*(1-r)+n*r),e}}},function(t,n,e){"use strict"
e.d(n,"b",(function(){return a}))
var r=e(40),i=e(30)
function a(t,n){var e,i=n?n.length:0,a=t?Math.min(i,t.length):0,o=new Array(a),u=new Array(i)
for(e=0;e<a;++e)o[e]=Object(r.a)(t[e],n[e])
for(;e<i;++e)u[e]=n[e]
return function(t){for(e=0;e<a;++e)u[e]=o[e](t)
return u}}n.a=function(t,n){return(Object(i.b)(n)?i.a:a)(t,n)}},function(t,n,e){"use strict"
var r=e(40)
n.a=function(t,n){var e,i={},a={}
for(e in null!==t&&"object"==typeof t||(t={}),null!==n&&"object"==typeof n||(n={}),n)e in t?i[e]=Object(r.a)(t[e],n[e]):a[e]=n[e]
return function(t){for(e in i)a[e]=i[e](t)
return a}}},function(t,n,e){"use strict"
e.d(n,"a",(function(){return h}))
var r=e(6),i=e(53),a=e(5),o=e(52),u=e(32),c=e(33)
function l(t){if(0<=t.y&&t.y<100){var n=new Date(-1,t.m,t.d,t.H,t.M,t.S,t.L)
return n.setFullYear(t.y),n}return new Date(t.y,t.m,t.d,t.H,t.M,t.S,t.L)}function s(t){if(0<=t.y&&t.y<100){var n=new Date(Date.UTC(-1,t.m,t.d,t.H,t.M,t.S,t.L))
return n.setUTCFullYear(t.y),n}return new Date(Date.UTC(t.y,t.m,t.d,t.H,t.M,t.S,t.L))}function f(t,n,e){return{y:t,m:n,d:e,H:0,M:0,S:0,L:0}}function h(t){var n=t.dateTime,e=t.date,u=t.time,c=t.periods,h=t.days,p=t.shortDays,g=t.months,v=t.shortMonths,y=x(c),m=b(c),At=x(h),kt=b(h),Ot=x(p),Tt=b(p),Ct=x(g),St=b(g),Nt=x(v),jt=b(v),Dt={a:function(t){return p[t.getDay()]},A:function(t){return h[t.getDay()]},b:function(t){return v[t.getMonth()]},B:function(t){return g[t.getMonth()]},c:null,d:H,e:H,f:V,H:z,I:q,j:Y,L:G,m:W,M:X,p:function(t){return c[+(t.getHours()>=12)]},q:function(t){return 1+~~(t.getMonth()/3)},Q:wt,s:Mt,S:$,u:Q,U:Z,V:K,w:J,W:tt,x:null,X:null,y:nt,Y:et,Z:rt,"%":_t},Et={a:function(t){return p[t.getUTCDay()]},A:function(t){return h[t.getUTCDay()]},b:function(t){return v[t.getUTCMonth()]},B:function(t){return g[t.getUTCMonth()]},c:null,d:it,e:it,f:lt,H:at,I:ot,j:ut,L:ct,m:st,M:ft,p:function(t){return c[+(t.getUTCHours()>=12)]},q:function(t){return 1+~~(t.getUTCMonth()/3)},Q:wt,s:Mt,S:ht,u:dt,U:pt,V:gt,w:vt,W:yt,x:null,X:null,y:mt,Y:xt,Z:bt,"%":_t},Lt={a:function(t,n,e){var r=Ot.exec(n.slice(e))
return r?(t.w=Tt[r[0].toLowerCase()],e+r[0].length):-1},A:function(t,n,e){var r=At.exec(n.slice(e))
return r?(t.w=kt[r[0].toLowerCase()],e+r[0].length):-1},b:function(t,n,e){var r=Nt.exec(n.slice(e))
return r?(t.m=jt[r[0].toLowerCase()],e+r[0].length):-1},B:function(t,n,e){var r=Ct.exec(n.slice(e))
return r?(t.m=St[r[0].toLowerCase()],e+r[0].length):-1},c:function(t,e,r){return Pt(t,n,e,r)},d:j,e:j,f:P,H:E,I:E,j:D,L:R,m:N,M:L,p:function(t,n,e){var r=y.exec(n.slice(e))
return r?(t.p=m[r[0].toLowerCase()],e+r[0].length):-1},q:S,Q:I,s:U,S:F,u:w,U:M,V:A,w:_,W:k,x:function(t,n,r){return Pt(t,e,n,r)},X:function(t,n,e){return Pt(t,u,n,e)},y:T,Y:O,Z:C,"%":B}
function Ft(t,n){return function(e){var r,i,a,o=[],u=-1,c=0,l=t.length
for(e instanceof Date||(e=new Date(+e));++u<l;)37===t.charCodeAt(u)&&(o.push(t.slice(c,u)),null!=(i=d[r=t.charAt(++u)])?r=t.charAt(++u):i="e"===r?" ":"0",(a=n[r])&&(r=a(e,i)),o.push(r),c=u+1)
return o.push(t.slice(c,u)),o.join("")}}function Rt(t,n){return function(e){var u,c,h=f(1900,void 0,1)
if(Pt(h,t,e+="",0)!=e.length)return null
if("Q"in h)return new Date(h.Q)
if("s"in h)return new Date(1e3*h.s+("L"in h?h.L:0))
if(!n||"Z"in h||(h.Z=0),"p"in h&&(h.H=h.H%12+12*h.p),void 0===h.m&&(h.m="q"in h?h.q:0),"V"in h){if(h.V<1||h.V>53)return null
"w"in h||(h.w=1),"Z"in h?(c=(u=s(f(h.y,0,1))).getUTCDay(),u=c>4||0===c?r.c.ceil(u):Object(r.c)(u),u=i.a.offset(u,7*(h.V-1)),h.y=u.getUTCFullYear(),h.m=u.getUTCMonth(),h.d=u.getUTCDate()+(h.w+6)%7):(c=(u=l(f(h.y,0,1))).getDay(),u=c>4||0===c?a.c.ceil(u):Object(a.c)(u),u=o.b.offset(u,7*(h.V-1)),h.y=u.getFullYear(),h.m=u.getMonth(),h.d=u.getDate()+(h.w+6)%7)}else("W"in h||"U"in h)&&("w"in h||(h.w="u"in h?h.u%7:"W"in h?1:0),c="Z"in h?s(f(h.y,0,1)).getUTCDay():l(f(h.y,0,1)).getDay(),h.m=0,h.d="W"in h?(h.w+6)%7+7*h.W-(c+5)%7:h.w+7*h.U-(c+6)%7)
return"Z"in h?(h.H+=h.Z/100|0,h.M+=h.Z%100,s(h)):l(h)}}function Pt(t,n,e,r){for(var i,a,o=0,u=n.length,c=e.length;o<u;){if(r>=c)return-1
if(37===(i=n.charCodeAt(o++))){if(i=n.charAt(o++),!(a=Lt[i in d?n.charAt(o++):i])||(r=a(t,e,r))<0)return-1}else if(i!=e.charCodeAt(r++))return-1}return r}return Dt.x=Ft(e,Dt),Dt.X=Ft(u,Dt),Dt.c=Ft(n,Dt),Et.x=Ft(e,Et),Et.X=Ft(u,Et),Et.c=Ft(n,Et),{format:function(t){var n=Ft(t+="",Dt)
return n.toString=function(){return t},n},parse:function(t){var n=Rt(t+="",!1)
return n.toString=function(){return t},n},utcFormat:function(t){var n=Ft(t+="",Et)
return n.toString=function(){return t},n},utcParse:function(t){var n=Rt(t+="",!0)
return n.toString=function(){return t},n}}}var d={"-":"",_:" ",0:"0"},p=/^\s*\d+/,g=/^%/,v=/[\\^$*+?|[\]().{}]/g
function y(t,n,e){var r=t<0?"-":"",i=(r?-t:t)+"",a=i.length
return r+(a<e?new Array(e-a+1).join(n)+i:i)}function m(t){return t.replace(v,"\\$&")}function x(t){return new RegExp("^(?:"+t.map(m).join("|")+")","i")}function b(t){for(var n={},e=-1,r=t.length;++e<r;)n[t[e].toLowerCase()]=e
return n}function _(t,n,e){var r=p.exec(n.slice(e,e+1))
return r?(t.w=+r[0],e+r[0].length):-1}function w(t,n,e){var r=p.exec(n.slice(e,e+1))
return r?(t.u=+r[0],e+r[0].length):-1}function M(t,n,e){var r=p.exec(n.slice(e,e+2))
return r?(t.U=+r[0],e+r[0].length):-1}function A(t,n,e){var r=p.exec(n.slice(e,e+2))
return r?(t.V=+r[0],e+r[0].length):-1}function k(t,n,e){var r=p.exec(n.slice(e,e+2))
return r?(t.W=+r[0],e+r[0].length):-1}function O(t,n,e){var r=p.exec(n.slice(e,e+4))
return r?(t.y=+r[0],e+r[0].length):-1}function T(t,n,e){var r=p.exec(n.slice(e,e+2))
return r?(t.y=+r[0]+(+r[0]>68?1900:2e3),e+r[0].length):-1}function C(t,n,e){var r=/^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(n.slice(e,e+6))
return r?(t.Z=r[1]?0:-(r[2]+(r[3]||"00")),e+r[0].length):-1}function S(t,n,e){var r=p.exec(n.slice(e,e+1))
return r?(t.q=3*r[0]-3,e+r[0].length):-1}function N(t,n,e){var r=p.exec(n.slice(e,e+2))
return r?(t.m=r[0]-1,e+r[0].length):-1}function j(t,n,e){var r=p.exec(n.slice(e,e+2))
return r?(t.d=+r[0],e+r[0].length):-1}function D(t,n,e){var r=p.exec(n.slice(e,e+3))
return r?(t.m=0,t.d=+r[0],e+r[0].length):-1}function E(t,n,e){var r=p.exec(n.slice(e,e+2))
return r?(t.H=+r[0],e+r[0].length):-1}function L(t,n,e){var r=p.exec(n.slice(e,e+2))
return r?(t.M=+r[0],e+r[0].length):-1}function F(t,n,e){var r=p.exec(n.slice(e,e+2))
return r?(t.S=+r[0],e+r[0].length):-1}function R(t,n,e){var r=p.exec(n.slice(e,e+3))
return r?(t.L=+r[0],e+r[0].length):-1}function P(t,n,e){var r=p.exec(n.slice(e,e+6))
return r?(t.L=Math.floor(r[0]/1e3),e+r[0].length):-1}function B(t,n,e){var r=g.exec(n.slice(e,e+1))
return r?e+r[0].length:-1}function I(t,n,e){var r=p.exec(n.slice(e))
return r?(t.Q=+r[0],e+r[0].length):-1}function U(t,n,e){var r=p.exec(n.slice(e))
return r?(t.s=+r[0],e+r[0].length):-1}function H(t,n){return y(t.getDate(),n,2)}function z(t,n){return y(t.getHours(),n,2)}function q(t,n){return y(t.getHours()%12||12,n,2)}function Y(t,n){return y(1+o.b.count(Object(u.a)(t),t),n,3)}function G(t,n){return y(t.getMilliseconds(),n,3)}function V(t,n){return G(t,n)+"000"}function W(t,n){return y(t.getMonth()+1,n,2)}function X(t,n){return y(t.getMinutes(),n,2)}function $(t,n){return y(t.getSeconds(),n,2)}function Q(t){var n=t.getDay()
return 0===n?7:n}function Z(t,n){return y(a.g.count(Object(u.a)(t)-1,t),n,2)}function K(t,n){var e=t.getDay()
return t=e>=4||0===e?Object(a.i)(t):a.i.ceil(t),y(a.i.count(Object(u.a)(t),t)+(4===Object(u.a)(t).getDay()),n,2)}function J(t){return t.getDay()}function tt(t,n){return y(a.c.count(Object(u.a)(t)-1,t),n,2)}function nt(t,n){return y(t.getFullYear()%100,n,2)}function et(t,n){return y(t.getFullYear()%1e4,n,4)}function rt(t){var n=t.getTimezoneOffset()
return(n>0?"-":(n*=-1,"+"))+y(n/60|0,"0",2)+y(n%60,"0",2)}function it(t,n){return y(t.getUTCDate(),n,2)}function at(t,n){return y(t.getUTCHours(),n,2)}function ot(t,n){return y(t.getUTCHours()%12||12,n,2)}function ut(t,n){return y(1+i.a.count(Object(c.a)(t),t),n,3)}function ct(t,n){return y(t.getUTCMilliseconds(),n,3)}function lt(t,n){return ct(t,n)+"000"}function st(t,n){return y(t.getUTCMonth()+1,n,2)}function ft(t,n){return y(t.getUTCMinutes(),n,2)}function ht(t,n){return y(t.getUTCSeconds(),n,2)}function dt(t){var n=t.getUTCDay()
return 0===n?7:n}function pt(t,n){return y(r.g.count(Object(c.a)(t)-1,t),n,2)}function gt(t,n){var e=t.getUTCDay()
return t=e>=4||0===e?Object(r.i)(t):r.i.ceil(t),y(r.i.count(Object(c.a)(t),t)+(4===Object(c.a)(t).getUTCDay()),n,2)}function vt(t){return t.getUTCDay()}function yt(t,n){return y(r.c.count(Object(c.a)(t)-1,t),n,2)}function mt(t,n){return y(t.getUTCFullYear()%100,n,2)}function xt(t,n){return y(t.getUTCFullYear()%1e4,n,4)}function bt(){return"+0000"}function _t(){return"%"}function wt(t){return+t}function Mt(t){return Math.floor(+t/1e3)}},function(t,n,e){"use strict"
var r=e(21)
n.a=function(t){return"string"==typeof t?new r.a([[document.querySelector(t)]],[document.documentElement]):new r.a([[t]],r.c)}},function(t,n,e){"use strict"
function r(){return[]}n.a=function(t){return null==t?r:function(){return this.querySelectorAll(t)}}},function(t,n,e){"use strict"
n.a=function(t){return function(){return this.matches(t)}}},function(t,n,e){"use strict"
e.d(n,"b",(function(){return u}))
var r=e(44)
function i(t){return function(){this.style.removeProperty(t)}}function a(t,n,e){return function(){this.style.setProperty(t,n,e)}}function o(t,n,e){return function(){var r=n.apply(this,arguments)
null==r?this.style.removeProperty(t):this.style.setProperty(t,r,e)}}function u(t,n){return t.style.getPropertyValue(n)||Object(r.a)(t).getComputedStyle(t,null).getPropertyValue(n)}n.a=function(t,n,e){return arguments.length>1?this.each((null==n?i:"function"==typeof n?o:a)(t,n,null==e?"":e)):u(this.node(),t)}},function(t,n,e){"use strict"
var r,i=e(20),a=e(39),o=e(37),u=function(t,n){var e=Object(o.a)(t,n)
if(!e)return t+""
var r=e[0],i=e[1]
return i<0?"0."+new Array(-i).join("0")+r:r.length>i+1?r.slice(0,i+1)+"."+r.slice(i+1):r+new Array(i-r.length+2).join("0")},c={"%":function(t,n){return(100*t).toFixed(n)},b:function(t){return Math.round(t).toString(2)},c:function(t){return t+""},d:function(t){return Math.round(t).toString(10)},e:function(t,n){return t.toExponential(n)},f:function(t,n){return t.toFixed(n)},g:function(t,n){return t.toPrecision(n)},o:function(t){return Math.round(t).toString(8)},p:function(t,n){return u(100*t,n)},r:u,s:function(t,n){var e=Object(o.a)(t,n)
if(!e)return t+""
var i=e[0],a=e[1],u=a-(r=3*Math.max(-8,Math.min(8,Math.floor(a/3))))+1,c=i.length
return u===c?i:u>c?i+new Array(u-c+1).join("0"):u>0?i.slice(0,u)+"."+i.slice(u):"0."+new Array(1-u).join("0")+Object(o.a)(t,Math.max(0,n+u-1))[0]},X:function(t){return Math.round(t).toString(16).toUpperCase()},x:function(t){return Math.round(t).toString(16)}},l=function(t){return t},s=Array.prototype.map,f=["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"]
n.a=function(t){var n,e,o=void 0===t.grouping||void 0===t.thousands?l:(n=s.call(t.grouping,Number),e=t.thousands+"",function(t,r){for(var i=t.length,a=[],o=0,u=n[0],c=0;i>0&&u>0&&(c+u+1>r&&(u=Math.max(1,r-c)),a.push(t.substring(i-=u,i+u)),!((c+=u+1)>r));)u=n[o=(o+1)%n.length]
return a.reverse().join(e)}),u=void 0===t.currency?"":t.currency[0]+"",h=void 0===t.currency?"":t.currency[1]+"",d=void 0===t.decimal?".":t.decimal+"",p=void 0===t.numerals?l:function(t){return function(n){return n.replace(/[0-9]/g,(function(n){return t[+n]}))}}(s.call(t.numerals,String)),g=void 0===t.percent?"%":t.percent+"",v=void 0===t.minus?"-":t.minus+"",y=void 0===t.nan?"NaN":t.nan+""
function m(t){var n=(t=Object(a.b)(t)).fill,e=t.align,i=t.sign,l=t.symbol,s=t.zero,m=t.width,x=t.comma,b=t.precision,_=t.trim,w=t.type
"n"===w?(x=!0,w="g"):c[w]||(void 0===b&&(b=12),_=!0,w="g"),(s||"0"===n&&"="===e)&&(s=!0,n="0",e="=")
var M="$"===l?u:"#"===l&&/[boxX]/.test(w)?"0"+w.toLowerCase():"",A="$"===l?h:/[%p]/.test(w)?g:"",k=c[w],O=/[defgprs%]/.test(w)
function T(t){var a,u,c,l=M,h=A
if("c"===w)h=k(t)+h,t=""
else{var g=(t=+t)<0
if(t=isNaN(t)?y:k(Math.abs(t),b),_&&(t=function(t){t:for(var n,e=t.length,r=1,i=-1;r<e;++r)switch(t[r]){case".":i=n=r
break
case"0":0===i&&(i=r),n=r
break
default:if(!+t[r])break t
i>0&&(i=0)}return i>0?t.slice(0,i)+t.slice(n+1):t}(t)),g&&0==+t&&(g=!1),l=(g?"("===i?i:v:"-"===i||"("===i?"":i)+l,h=("s"===w?f[8+r/3]:"")+h+(g&&"("===i?")":""),O)for(a=-1,u=t.length;++a<u;)if(48>(c=t.charCodeAt(a))||c>57){h=(46===c?d+t.slice(a+1):t.slice(a))+h,t=t.slice(0,a)
break}}x&&!s&&(t=o(t,1/0))
var T=l.length+t.length+h.length,C=T<m?new Array(m-T+1).join(n):""
switch(x&&s&&(t=o(C+t,C.length?m-h.length:1/0),C=""),e){case"<":t=l+t+h+C
break
case"=":t=l+C+t+h
break
case"^":t=C.slice(0,T=C.length>>1)+l+t+h+C.slice(T)
break
default:t=C+l+t+h}return p(t)}return b=void 0===b?6:/[gprs]/.test(w)?Math.max(1,Math.min(21,b)):Math.max(0,Math.min(20,b)),T.toString=function(){return t+""},T}return{format:m,formatPrefix:function(t,n){var e=m(((t=Object(a.b)(t)).type="f",t)),r=3*Math.max(-8,Math.min(8,Math.floor(Object(i.a)(n)/3))),o=Math.pow(10,-r),u=f[8+r/3]
return function(t){return e(o*t)+u}}}}},function(t,n,e){"use strict"
e.d(n,"b",(function(){return a}))
var r=e(1),i=Object(r.a)((function(t){t.setDate(1),t.setHours(0,0,0,0)}),(function(t,n){t.setMonth(t.getMonth()+n)}),(function(t,n){return n.getMonth()-t.getMonth()+12*(n.getFullYear()-t.getFullYear())}),(function(t){return t.getMonth()}))
n.a=i
var a=i.range},function(t,n,e){"use strict"
e.d(n,"b",(function(){return o}))
var r=e(1),i=e(3),a=Object(r.a)((function(t){t.setTime(t-t.getMilliseconds()-t.getSeconds()*i.d-t.getMinutes()*i.c)}),(function(t,n){t.setTime(+t+n*i.b)}),(function(t,n){return(n-t)/i.b}),(function(t){return t.getHours()}))
n.a=a
var o=a.range},function(t,n,e){"use strict"
e.d(n,"b",(function(){return o}))
var r=e(1),i=e(3),a=Object(r.a)((function(t){t.setTime(t-t.getMilliseconds()-t.getSeconds()*i.d)}),(function(t,n){t.setTime(+t+n*i.c)}),(function(t,n){return(n-t)/i.c}),(function(t){return t.getMinutes()}))
n.a=a
var o=a.range},function(t,n,e){"use strict"
e.d(n,"b",(function(){return a}))
var r=e(1),i=Object(r.a)((function(t){t.setUTCDate(1),t.setUTCHours(0,0,0,0)}),(function(t,n){t.setUTCMonth(t.getUTCMonth()+n)}),(function(t,n){return n.getUTCMonth()-t.getUTCMonth()+12*(n.getUTCFullYear()-t.getUTCFullYear())}),(function(t){return t.getUTCMonth()}))
n.a=i
var a=i.range},function(t,n,e){"use strict"
e.d(n,"b",(function(){return o}))
var r=e(1),i=e(3),a=Object(r.a)((function(t){t.setUTCMinutes(0,0,0)}),(function(t,n){t.setTime(+t+n*i.b)}),(function(t,n){return(n-t)/i.b}),(function(t){return t.getUTCHours()}))
n.a=a
var o=a.range},function(t,n,e){"use strict"
e.d(n,"b",(function(){return o}))
var r=e(1),i=e(3),a=Object(r.a)((function(t){t.setUTCSeconds(0,0)}),(function(t,n){t.setTime(+t+n*i.c)}),(function(t,n){return(n-t)/i.c}),(function(t){return t.getUTCMinutes()}))
n.a=a
var o=a.range},function(t,n,e){"use strict"
var r,i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t}
function a(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}void 0===(r=function(t){var n,r=e(38),o=e(26),u=e(34),c=u.axisTimeCombinations,l=u.timeBenchmarks,s=e(86),f=s.convertMillisecondsToDays,h=s.getLocaleDateFormatter,d={minute:o.timeFormat("%M m"),hour:o.timeFormat("%H %p"),day:o.timeFormat("%e"),daymonth:o.timeFormat("%d %b"),month:o.timeFormat("%b"),year:o.timeFormat("%Y")},p=(a(n={},c.MINUTE_HOUR,r.timeHour.every(1)),a(n,c.HOUR_DAY,r.timeDay.every(1)),a(n,c.DAY_MONTH,r.timeMonth.every(1)),a(n,c.MONTH_YEAR,r.timeYear.every(1)),n),g=function(t){var n=l.ONE_YEAR
return t<l.ONE_DAY?c.HOUR_DAY:t<n?c.DAY_MONTH:c.MONTH_YEAR},v=function(t,n){var e=Math.ceil(t/70)
return n<5?r.timeDay:Math.min(n,e)}
return{getTimeSeriesAxis:function(t,n){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,a=new Date(t[0].date),o=new Date(t[t.length-1].date)-a
r&&("undefined"==typeof Intl||"object"===("undefined"==typeof Intl?"undefined":i(Intl))&&!Intl.DateTimeFormat)&&(r=null),e||(e=g(o))
var u=function(t,n){if(Array.isArray(t))return t
if(Symbol.iterator in Object(t))return function(t,n){var e=[],r=!0,i=!1,a=void 0
try{for(var o,u=t[Symbol.iterator]();!(r=(o=u.next()).done)&&(e.push(o.value),!n||e.length!==n);r=!0);}catch(t){i=!0,a=t}finally{try{!r&&u.return&&u.return()}finally{if(i)throw a}}return e}(t,n)
throw new TypeError("Invalid attempt to destructure non-iterable instance")}(e.split("-"),2),c=u[0],l=u[1],s=p[e],y=v(n,f(o))
return{minor:{format:r?h(r,c):d[c],tick:y},major:{format:r?h(r,l):d[l],tick:s}}},getSortedNumberAxis:function(t,n){var e=t[0].date
return{tick:function(t,n){var e=Math.ceil(t/70)
return Math.min(n,e)}(n,t[t.length-1].date-e)}}}}.call(n,e,n,t))||(t.exports=r)},function(t,n,e){"use strict"
var r
void 0===(r=function(t){e(2)
var n="highlight-filter"
return{bounceCircleHighlight:function(t,n,e){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:2*e
t.transition().ease(n).duration(100).attr("r",r).transition().ease(n).delay(50).duration(100).attr("r",e)},createFilterContainer:function(t){return t.append("defs").append("filter").attr("id",n)},createGausianBlur:function(t){return t.append("feGaussianBlur").attr("stdDeviation",1).attr("result","coloredBlur"),n},createWhiteGlow:function(t){t.attr("x","-5000%").attr("y","-5000%").attr("width","10000%").attr("height","10000%"),t.append("feFlood").attr("result","flood").attr("flood-color","#ffffff").attr("flood-opacity","1"),t.append("feComposite").attr("result","mask").attr("in2","SourceGraphic").attr("operator","in").attr("in","flood"),t.append("feMorphology").attr("result","dilated").attr("operator","dilate").attr("radius","2").attr("in","mask"),t.append("feGaussianBlur").attr("result","blurred").attr("stdDeviation","5").attr("in","dilated")
var e=t.append("feMerge")
return e.append("feMergeNode").attr("in","blurred"),e.append("feMergeNode").attr("in","SourceGraphic"),n},createGlow:function(t){t.attr("x","-30%").attr("y","-30%").attr("width","160%").attr("height","160%"),t.append("feGaussianBlur").attr("stdDeviation","0.9 0.9").attr("result","glow")
var e=t.append("feMerge")
return e.append("feMergeNode").attr("in","glow"),e.append("feMergeNode").attr("in","glow"),e.append("feMergeNode").attr("in","glow"),n},createGlowWithMatrix:function(t){t.attr("x","-500%").attr("y","-500%").attr("width","1800%").attr("height","1800%"),t.append("feColorMatrix").attr("type","matrix").attr("values","0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"),t.append("feGaussianBlur").attr("stdDeviation","1").attr("result","coloredBlur").attr("in","SourceGraphic")
var e=t.append("feMerge")
return e.append("feMergeNode").attr("in","coloredBlur"),e.append("feMergeNode").attr("in","SourceGraphic"),n}}}.call(n,e,n,t))||(t.exports=r)},function(t,n){var e=/^(?:0|[1-9]\d*)$/
var r,i,a=Object.prototype,o=a.hasOwnProperty,u=a.toString,c=a.propertyIsEnumerable,l=(r=Object.keys,i=Object,function(t){return r(i(t))}),s=Math.max,f=!c.call({valueOf:1},"valueOf")
function h(t,n,e){var r=t[n]
o.call(t,n)&&g(r,e)&&(void 0!==e||n in t)||(t[n]=e)}function d(t,n){return!!(n=null==n?9007199254740991:n)&&("number"==typeof t||e.test(t))&&t>-1&&t%1==0&&t<n}function p(t){var n=t&&t.constructor
return t===("function"==typeof n&&n.prototype||a)}function g(t,n){return t===n||t!=t&&n!=n}var v=Array.isArray
function y(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991}(t.length)&&!function(t){var n=m(t)?u.call(t):""
return"[object Function]"==n||"[object GeneratorFunction]"==n}(t)}function m(t){var n=typeof t
return!!t&&("object"==n||"function"==n)}var x,b=(x=function(t,n){if(f||p(n)||y(n))!function(t,n,e,r){e||(e={})
for(var i=-1,a=n.length;++i<a;){var o=n[i]
h(e,o,t[o])}}(n,function(t){return y(t)?function(t,n){var e=v(t)||function(t){return function(t){return function(t){return!!t&&"object"==typeof t}(t)&&y(t)}(t)&&o.call(t,"callee")&&(!c.call(t,"callee")||"[object Arguments]"==u.call(t))}(t)?function(t,n){for(var e=-1,r=Array(t);++e<t;)r[e]=n(e)
return r}(t.length,String):[],r=e.length,i=!!r
for(var a in t)!n&&!o.call(t,a)||i&&("length"==a||d(a,r))||e.push(a)
return e}(t):function(t){if(!p(t))return l(t)
var n=[]
for(var e in Object(t))o.call(t,e)&&"constructor"!=e&&n.push(e)
return n}(t)}(n),t)
else for(var e in n)o.call(n,e)&&h(t,e,n[e])},function(t,n){return n=s(void 0===n?t.length-1:n,0),function(){for(var e=arguments,r=-1,i=s(e.length-n,0),a=Array(i);++r<i;)a[r]=e[n+r]
r=-1
for(var o=Array(n+1);++r<n;)o[r]=e[r]
return o[n]=a,function(t,n,e){switch(e.length){case 0:return t.call(n)
case 1:return t.call(n,e[0])
case 2:return t.call(n,e[0],e[1])
case 3:return t.call(n,e[0],e[1],e[2])}return t.apply(n,e)}(t,this,o)}}((function(t,n){var e=-1,r=n.length,i=r>1?n[r-1]:void 0,a=r>2?n[2]:void 0
for(i=x.length>3&&"function"==typeof i?(r--,i):void 0,a&&function(t,n,e){if(!m(e))return!1
var r=typeof n
return!!("number"==r?y(e)&&d(n,e.length):"string"==r&&n in e)&&g(e[n],t)}(n[0],n[1],a)&&(i=r<3?void 0:i,r=1),t=Object(t);++e<r;){var o=n[e]
o&&x(t,o)}return t})))
t.exports=b},function(t,n,e){"use strict"
var r,i,a,o,u=e(12),c=180/Math.PI,l={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1},s=function(t,n,e,r,i,a){var o,u,l
return(o=Math.sqrt(t*t+n*n))&&(t/=o,n/=o),(l=t*e+n*r)&&(e-=t*l,r-=n*l),(u=Math.sqrt(e*e+r*r))&&(e/=u,r/=u,l/=u),t*r<n*e&&(t=-t,n=-n,l=-l,o=-o),{translateX:i,translateY:a,rotate:Math.atan2(n,t)*c,skewX:Math.atan(l)*c,scaleX:o,scaleY:u}}
function f(t,n,e,r){function i(t){return t.length?t.pop()+" ":""}return function(a,o){var c=[],l=[]
return a=t(a),o=t(o),function(t,r,i,a,o,c){if(t!==i||r!==a){var l=o.push("translate(",null,n,null,e)
c.push({i:l-4,x:Object(u.a)(t,i)},{i:l-2,x:Object(u.a)(r,a)})}else(i||a)&&o.push("translate("+i+n+a+e)}(a.translateX,a.translateY,o.translateX,o.translateY,c,l),function(t,n,e,a){t!==n?(t-n>180?n+=360:n-t>180&&(t+=360),a.push({i:e.push(i(e)+"rotate(",null,r)-2,x:Object(u.a)(t,n)})):n&&e.push(i(e)+"rotate("+n+r)}(a.rotate,o.rotate,c,l),function(t,n,e,a){t!==n?a.push({i:e.push(i(e)+"skewX(",null,r)-2,x:Object(u.a)(t,n)}):n&&e.push(i(e)+"skewX("+n+r)}(a.skewX,o.skewX,c,l),function(t,n,e,r,a,o){if(t!==e||n!==r){var c=a.push(i(a)+"scale(",null,",",null,")")
o.push({i:c-4,x:Object(u.a)(t,e)},{i:c-2,x:Object(u.a)(n,r)})}else 1===e&&1===r||a.push(i(a)+"scale("+e+","+r+")")}(a.scaleX,a.scaleY,o.scaleX,o.scaleY,c,l),a=o=null,function(t){for(var n,e=-1,r=l.length;++e<r;)c[(n=l[e]).i]=n.x(t)
return c.join("")}}}e.d(n,"a",(function(){return h})),e.d(n,"b",(function(){return d}))
var h=f((function(t){return"none"===t?l:(r||(r=document.createElement("DIV"),i=document.documentElement,a=document.defaultView),r.style.transform=t,t=a.getComputedStyle(i.appendChild(r),null).getPropertyValue("transform"),i.removeChild(r),t=t.slice(7,-1).split(","),s(+t[0],+t[1],+t[2],+t[3],+t[4],+t[5]))}),"px, ","px)","deg)"),d=f((function(t){return null==t?l:(o||(o=document.createElementNS("http://www.w3.org/2000/svg","g")),o.setAttribute("transform",t),(t=o.transform.baseVal.consolidate())?(t=t.matrix,s(t.a,t.b,t.c,t.d,t.e,t.f)):l)}),", ",")",")")},function(t,n,e){"use strict"
e.d(n,"a",(function(){return p}))
var r=e(13),i=e(7),a=e(46),o=-.14861,u=1.78277,c=-.29227,l=-.90649,s=1.97294,f=s*l,h=s*u,d=u*c-l*o
function p(t,n,e,r){return 1===arguments.length?function(t){if(t instanceof g)return new g(t.h,t.s,t.l,t.opacity)
t instanceof i.b||(t=Object(i.h)(t))
var n=t.r/255,e=t.g/255,r=t.b/255,o=(d*r+f*n-h*e)/(d+f-h),u=r-o,p=(s*(e-o)-c*u)/l,v=Math.sqrt(p*p+u*u)/(s*o*(1-o)),y=v?Math.atan2(p,u)*a.b-120:NaN
return new g(y<0?y+360:y,v,o,t.opacity)}(t):new g(t,n,e,null==r?1:r)}function g(t,n,e,r){this.h=+t,this.s=+n,this.l=+e,this.opacity=+r}Object(r.a)(g,p,Object(r.b)(i.a,{brighter:function(t){return t=null==t?i.c:Math.pow(i.c,t),new g(this.h,this.s,this.l*t,this.opacity)},darker:function(t){return t=null==t?i.d:Math.pow(i.d,t),new g(this.h,this.s,this.l*t,this.opacity)},rgb:function(){var t=isNaN(this.h)?0:(this.h+120)*a.a,n=+this.l,e=isNaN(this.s)?0:this.s*n*(1-n),r=Math.cos(t),f=Math.sin(t)
return new i.b(255*(n+e*(o*r+u*f)),255*(n+e*(c*r+l*f)),255*(n+e*(s*r)),this.opacity)}}))},function(t,n,e){"use strict"
var r={value:function(){}}
function i(){for(var t,n=0,e=arguments.length,r={};n<e;++n){if(!(t=arguments[n]+"")||t in r||/[\s.]/.test(t))throw new Error("illegal type: "+t)
r[t]=[]}return new a(r)}function a(t){this._=t}function o(t,n){for(var e,r=0,i=t.length;r<i;++r)if((e=t[r]).name===n)return e.value}function u(t,n,e){for(var i=0,a=t.length;i<a;++i)if(t[i].name===n){t[i]=r,t=t.slice(0,i).concat(t.slice(i+1))
break}return null!=e&&t.push({name:n,value:e}),t}a.prototype=i.prototype={constructor:a,on:function(t,n){var e,r=this._,i=function(t,n){return t.trim().split(/^|\s+/).map((function(t){var e="",r=t.indexOf(".")
if(r>=0&&(e=t.slice(r+1),t=t.slice(0,r)),t&&!n.hasOwnProperty(t))throw new Error("unknown type: "+t)
return{type:t,name:e}}))}(t+"",r),a=-1,c=i.length
if(!(arguments.length<2)){if(null!=n&&"function"!=typeof n)throw new Error("invalid callback: "+n)
for(;++a<c;)if(e=(t=i[a]).type)r[e]=u(r[e],t.name,n)
else if(null==n)for(e in r)r[e]=u(r[e],t.name,null)
return this}for(;++a<c;)if((e=(t=i[a]).type)&&(e=o(r[e],t.name)))return e},copy:function(){var t={},n=this._
for(var e in n)t[e]=n[e].slice()
return new a(t)},call:function(t,n){if((e=arguments.length-2)>0)for(var e,r,i=new Array(e),a=0;a<e;++a)i[a]=arguments[a+2]
if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t)
for(a=0,e=(r=this._[t]).length;a<e;++a)r[a].value.apply(n,i)},apply:function(t,n,e){if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t)
for(var r=this._[t],i=0,a=r.length;i<a;++i)r[i].value.apply(n,e)}},n.a=i},function(t,n,e){"use strict"
var r=e(20)
n.a=function(t){return Math.max(0,-Object(r.a)(Math.abs(t)))}},function(t,n,e){"use strict"
var r=e(20)
n.a=function(t,n){return Math.max(0,3*Math.max(-8,Math.min(8,Math.floor(Object(r.a)(n)/3)))-Object(r.a)(Math.abs(t)))}},function(t,n,e){"use strict"
var r=e(20)
n.a=function(t,n){return t=Math.abs(t),n=Math.abs(n)-t,Math.max(0,Object(r.a)(n)-Object(r.a)(t))+1}},function(t,n,e){"use strict"
n.a=function(t,n){return t=+t,n=+n,function(e){return Math.round(t*(1-e)+n*e)}}},function(t,n,e){"use strict"
var r=e(45),i=e(29)
n.a=function(t){var n=Object(r.a)()
return n.changedTouches&&(n=n.changedTouches[0]),Object(i.a)(t,n)}},function(t,n,e){"use strict"
var r=e(45),i=e(29)
n.a=function(t,n,e){arguments.length<3&&(e=n,n=Object(r.a)().changedTouches)
for(var a,o=0,u=n?n.length:0;o<u;++o)if((a=n[o]).identifier===e)return Object(i.a)(t,a)
return null}},function(t,n,e){"use strict"
var r
void 0===(r=function(t){return e(9),{addDays:function(t,n){var e=new Date(t)
return e.setDate(e.getDate()+n),String(e)},convertMillisecondsToDays:function(t){return Math.ceil(t/864e5)},diffDays:function(t,n){return Math.ceil(Math.abs((new Date(t).getTime()-new Date(n).getTime())/864e5))},getLocaleDateFormatter:function(t){var n=localeTimeMap[arguments.length>1&&void 0!==arguments[1]?arguments[1]:"day"],e=new Intl.DateTimeFormat(t,n)
return function(t){return e.format(t)}}}}.call(n,e,n,t))||(t.exports=r)},function(t,n,e){"use strict"
var r
void 0===(r=function(t){return{castValueToType:function(t,n){return"number"===n?Number(t):new Date(t)}}}.call(n,e,n,t))||(t.exports=r)},function(t,n,e){"use strict"
Object.defineProperty(n,"__esModule",{value:!0}),n.colors=n.bullet=n.brush=n.step=n.heatmap=n.stackedBar=n.groupedBar=n.scatterPlot=n.stackedArea=n.sparkline=n.miniTooltip=n.tooltip=n.loadingStates=n.line=n.legend=n.donut=n.bar=void 0
var r=b(e(90)),i=b(e(96)),a=b(e(97)),o=b(e(98)),u=b(e(18)),c=b(e(99)),l=b(e(100)),s=b(e(101)),f=b(e(102)),h=b(e(103)),d=b(e(104)),p=b(e(105)),g=b(e(106)),v=b(e(107)),y=b(e(108)),m=b(e(109)),x=b(e(10))
function b(t){return t&&t.__esModule?t:{default:t}}n.bar=r.default,n.donut=i.default,n.legend=a.default,n.line=o.default,n.loadingStates=u.default,n.tooltip=c.default,n.miniTooltip=l.default,n.sparkline=s.default,n.stackedArea=f.default,n.scatterPlot=h.default,n.groupedBar=d.default,n.stackedBar=p.default,n.heatmap=g.default,n.step=v.default,n.brush=y.default,n.bullet=m.default,n.colors=x.default},,function(t,n,e){"use strict"
var r,i=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n]
for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t}
void 0===(r=function(t){var n=e(0),r=e(11),a=e(23),o=e(16),u=e(15),c=e(9),l=e(14),s=e(2),f=(e(8),e(56)),h=e(17).exportChart,d=e(10),p=e(18).bar,g=e(24).uniqueId,v=e(95).setDefaultLocale
return function(){var t={top:20,right:20,bottom:30,left:40},e=960,y=500,m=p,x=void 0,b=void 0,_=void 0,w=void 0,M=void 0,A=void 0,k=d.singleColors.aloeGreen,O=void 0,T=void 0,C=null,S=void 0,N=g("bar-gradient"),j=5,D=5,E=1,L=",f",F=!1,R=7,P=",f",B=12,I=.1,U=void 0,H=void 0,z=10,q=!1,Y=void 0,G=!0,V=!1,W=r.easeQuadInOut,X=function(t,n){return 70*n},$=function(t){return t.attr("fill",(function(t){var n=t.name
return o.color(C?C[1]:T(n)).darker()}))},Q=void 0,Z="value",K="name",J=void 0,tt=null,nt=null,et=30,rt=null,it=null,at=-30,ot=!0,ut=null,ct=c,lt=u.dispatch("customMouseOver","customMouseOut","customMouseMove","customClick"),st=function(t){return t.name},ft=function(t){return t.value},ht=function(t){var n=t.value
return M(n)+R},dt=function(t){var n=t.name
return A(n)+A.bandwidth()/2+B*(3/8)},pt=function(t){var n=t.name
return M(n)},gt=function(t){var n=t.value
return A(n)-R}
function vt(r){ut&&(ct=v(ut)),r.each((function(r){_=e-t.left-t.right-1.2*z,w=y-t.top-t.bottom
var i,o=function(t){var n=t.data,e=t.dataZeroed
return Q&&(n.sort(Q),e.sort(Q)),{data:n,dataZeroed:e}}(function(t){var n=t.reduce((function(t,n){return n.value=+n[Z],n.name=String(n[K]),[].concat(function(t){if(Array.isArray(t)){for(var n=0,e=Array(t.length);n<t.length;n++)e[n]=t[n]
return e}return Array.from(t)}(t),[n])}),[]),e=n.map((function(t){return{value:0,name:String(t[K])}}))
return{data:n,dataZeroed:e}}(r))
x=o.data,b=o.dataZeroed,function(){var t=function(){var t=new Set(x.map(ft))
return 1===t.size&&t.has(0)?E:Math.min(E*n.max(x,ft))}()
q?(M=l.scaleLinear().domain([0,t]).rangeRound([0,_]),A=l.scaleBand().domain(x.map(st)).rangeRound([w,0]).padding(I)):(M=l.scaleBand().domain(x.map(st)).rangeRound([0,_]).padding(I),A=l.scaleLinear().domain([0,t]).rangeRound([w,0])),O=ot?x.map((function(t){return t})).reverse().map((function(t,n){return{name:t.name,color:k[n%k.length]}})):x.map((function(t){return t})).map((function(t,n){return{name:t.name,color:k[n%k.length]}})),T=function(t){return O.filter((function(n){return n.name===t}))[0].color}}(),function(t){q?(U=a.axisBottom(M).ticks(D,t.format(L)).tickSizeInner([-w]),H=a.axisLeft(A)):(U=a.axisBottom(M),H=a.axisLeft(A).ticks(j,t.format(L)))}(ct),function(n){Y||(Y=s.select(n).append("svg").classed("britechart bar-chart",!0),function(){var n=Y.append("g").classed("container-group",!0).attr("transform","translate("+(t.left+z)+", "+t.top+")")
n.append("g").classed("grid-lines-group",!0),n.append("g").classed("chart-group",!0),n.append("g").classed("x-axis-group axis",!0).append("g").classed("x-axis-label",!0),n.append("g").attr("transform","translate("+-1*z+", 0)").classed("y-axis-group axis",!0).append("g").classed("y-axis-label",!0),n.append("g").classed("metadata-group",!0)}()),Y.attr("width",e).attr("height",y)}(this),!S&&C&&(S=Y.select(".metadata-group").append("linearGradient").attr("id",N).attr("x1","0%").attr("y1","0%").attr("x2","100%").attr("y2","100%").attr("gradientUnits","userSpaceOnUse").selectAll("stop").data([{offset:"0%",color:C[0]},{offset:"50%",color:C[1]}]).enter().append("stop").attr("offset",(function(t){return t.offset})).attr("stop-color",(function(t){return t.color}))),Y.select(".grid-lines-group").selectAll("line").remove(),q?(Y.select(".grid-lines-group").selectAll("line.vertical-grid-line").data(M.ticks(D).slice(1)).enter().append("line").attr("class","vertical-grid-line").attr("y1",0).attr("y2",w).attr("x1",(function(t){return M(t)})).attr("x2",(function(t){return M(t)})),Y.select(".grid-lines-group").selectAll("line.extended-y-line").data([0]).enter().append("line").attr("class","extended-y-line").attr("y1",0).attr("y2",w).attr("x1",0).attr("x2",0)):(Y.select(".grid-lines-group").selectAll("line.horizontal-grid-line").data(A.ticks(j).slice(1)).enter().append("line").attr("class","horizontal-grid-line").attr("x1",0).attr("x2",_).attr("y1",(function(t){return A(t)})).attr("y2",(function(t){return A(t)})),Y.select(".grid-lines-group").selectAll("line.extended-x-line").data([0]).enter().append("line").attr("class","extended-x-line").attr("x1",0).attr("x2",_).attr("y1",w).attr("y2",w)),Y.select(".x-axis-group.axis").attr("transform","translate(0, "+w+")").call(U),Y.select(".y-axis-group.axis").call(H),Y.selectAll(".y-axis-group .tick text").call(mt,t.left-z),it&&(rt&&rt.remove(),rt=Y.select(".y-axis-label").append("text").classed("y-axis-label-text",!0).attr("x",-w/2).attr("y",at).attr("text-anchor","middle").attr("transform","rotate(270 0 0)").text(it)),nt&&(tt&&tt.remove(),tt=Y.select(".x-axis-label").append("text").attr("y",et).attr("text-anchor","middle").classed("x-axis-label-text",!0).attr("x",_/2).text(nt)),i=void 0,V?(i=Y.select(".chart-group").selectAll(".bar").data(b),q?xt(i):bt(i),i=Y.select(".chart-group").selectAll(".bar").data(x),q?function(t){t.enter().append("rect").classed("bar",!0).attr("x",0).attr("y",w).attr("height",A.bandwidth()).attr("width",(function(t){var n=t.value
return M(n)})).on("mouseover",(function(t,n,e){_t(this,t,e,_,w)})).on("mousemove",(function(t){wt(this,t,_,w)})).on("mouseout",(function(t,n,e){Mt(this,t,e,_,w)})).on("click",(function(t){At(this,t,_,w)})),t.attr("x",0).attr("y",(function(t){var n=t.name
return A(n)})).attr("height",A.bandwidth()).attr("fill",(function(t){return yt(t.name)})).transition().duration(800).delay(X).ease(W).attr("width",(function(t){var n=t.value
return M(n)}))}(i):function(t){t.enter().append("rect").classed("bar",!0).attr("x",_).attr("y",(function(t){var n=t.value
return A(n)})).attr("width",M.bandwidth()).attr("height",(function(t){var n=t.value
return w-A(n)})).on("mouseover",(function(t,n,e){_t(this,t,e,_,w)})).on("mousemove",(function(t){wt(this,t,_,w)})).on("mouseout",(function(t,n,e){Mt(this,t,e,_,w)})).on("click",(function(t){At(this,t,_,w)})).merge(t).attr("x",(function(t){var n=t.name
return M(n)})).attr("width",M.bandwidth()).attr("fill",(function(t){return yt(t.name)})).transition().duration(800).delay(X).ease(W).attr("y",(function(t){var n=t.value
return A(n)})).attr("height",(function(t){var n=t.value
return w-A(n)}))}(i),i.exit().transition().style("opacity",0).remove()):(i=Y.select(".chart-group").selectAll(".bar").data(x),q?xt(i):bt(i),i.exit().remove()),F&&function(t){var n=q?ht:pt,e=q?dt:gt
J&&Y.selectAll(".percentage-label-group").remove(),(J=Y.select(".metadata-group").append("g").classed("percentage-label-group",!0).selectAll("text").data(x.reverse()).enter().append("text")).classed("percentage-label",!0).attr("x",n).attr("y",e).text((function(n){var e=n.value
return t.format(P)(e)})).attr("font-size",B+"px")}(ct)}))}function yt(t){return C?"url(#"+N+")":T(t)}function mt(t,n){f.wrapTextWithEllipses(t,n,0,1)}function xt(t){t.enter().append("rect").classed("bar",!0).attr("y",w).attr("x",0).attr("height",A.bandwidth()).attr("width",(function(t){var n=t.value
return M(n)})).on("mouseover",(function(t,n,e){_t(this,t,e,_,w)})).on("mousemove",(function(t){wt(this,t,_,w)})).on("mouseout",(function(t,n,e){Mt(this,t,e,_,w)})).on("click",(function(t){At(this,t,_,w)})).merge(t).attr("x",0).attr("y",(function(t){var n=t.name
return A(n)})).attr("height",A.bandwidth()).attr("width",(function(t){var n=t.value
return M(n)})).attr("fill",(function(t){return yt(t.name)}))}function bt(t){t.enter().append("rect").classed("bar",!0).attr("x",_).attr("y",(function(t){var n=t.value
return A(n)})).attr("width",M.bandwidth()).attr("height",(function(t){var n=t.value
return w-A(n)})).on("mouseover",(function(t,n,e){_t(this,t,e,_,w)})).on("mousemove",(function(t){wt(this,t,_,w)})).on("mouseout",(function(t,n,e){Mt(this,t,e,_,w)})).on("click",(function(t){At(this,t,_,w)})).merge(t).attr("x",(function(t){var n=t.name
return M(n)})).attr("y",(function(t){var n=t.value
return A(n)})).attr("width",M.bandwidth()).attr("height",(function(t){var n=t.value
return w-A(n)})).attr("fill",(function(t){return yt(t.name)}))}function _t(t,n,e,r,i){lt.call("customMouseOver",t,n,s.mouse(t),[r,i]),$=$||function(){},G?$(s.select(t)):e.forEach((function(n){n!==t&&$(s.select(n))}))}function wt(t,n,e,r){lt.call("customMouseMove",t,n,s.mouse(t),[e,r])}function Mt(t,n,e,r,i){lt.call("customMouseOut",t,n,s.mouse(t),[r,i]),e.forEach((function(t){s.select(t).attr("fill",(function(t){return yt(t.name)}))}))}function At(t,n,e,r){lt.call("customClick",t,n,s.mouse(t),[e,r])}return vt.chartGradient=function(t){return arguments.length?(C=t,this):C},vt.betweenBarsPadding=function(t){return arguments.length?(I=t,this):I},vt.colorSchema=function(t){return arguments.length?(k=t,this):k},vt.enableLabels=function(t){return arguments.length?(F=t,this):F},vt.exportChart=function(t,n){h.call(vt,Y,t,n)},vt.hasPercentage=function(t){return arguments.length?(L=t?"%":",f",this):"%"===L},vt.hasSingleBarHighlight=function(t){return arguments.length?(G=t,this):G},vt.height=function(t){return arguments.length?(y=t,this):y},vt.highlightBarFunction=function(t){return arguments.length?($=t,this):$},vt.isAnimated=function(t){return arguments.length?(V=t,this):V},vt.isHorizontal=function(t){return arguments.length?(q=t,this):q},vt.labelsMargin=function(t){return arguments.length?(R=t,this):R},vt.labelsNumberFormat=function(t){return arguments.length?(P=t,this):P},vt.labelsSize=function(t){return arguments.length?(B=t,this):B},vt.loadingState=function(t){return arguments.length?(m=t,this):m},vt.margin=function(n){return arguments.length?(t=i({},t,n),this):t},vt.nameLabel=function(t){return arguments.length?(K=t,this):K},vt.numberFormat=function(t){return arguments.length?(L=t,this):L},vt.on=function(){var t=lt.on.apply(lt,arguments)
return t===lt?vt:t},vt.percentageAxisToMaxRatio=function(t){return arguments.length?(E=t,this):E},vt.shouldReverseColorList=function(t){return arguments.length?(ot=t,this):ot},vt.orderingFunction=function(t){return arguments.length?(Q=t,this):Q},vt.valueLabel=function(t){return arguments.length?(Z=t,this):Z},vt.width=function(t){return arguments.length?(e=t,this):e},vt.xAxisLabel=function(t){return arguments.length?(nt=t,this):nt},vt.xAxisLabelOffset=function(t){return arguments.length?(et=t,this):et},vt.xTicks=function(t){return arguments.length?(D=t,this):D},vt.yAxisLabel=function(t){return arguments.length?(it=t,this):it},vt.yAxisLabelOffset=function(t){return arguments.length?(at=t,this):at},vt.yAxisPaddingBetweenChart=function(t){return arguments.length?(z=t,this):z},vt.yTicks=function(t){return arguments.length?(j=t,this):j},vt.locale=function(t){return arguments.length?(ut=t,this):ut},vt}}.call(n,e,n,t))||(t.exports=r)},function(t,n,e){"use strict"
var r,i,a
t.exports=(r={BASE:!0,HEAD:!0,HTML:!0,META:!0,NOFRAME:!0,NOSCRIPT:!0,PARAM:!0,SCRIPT:!0,STYLE:!0,TITLE:!0},i=["A","ABBR","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BASE","BDI","BDO","BLOCKQUOTE","BODY","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATALIST","DD","DEL","DETAILS","DFN","DIV","DL","DT","EM","EMBED","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEAD","HEADER","HGROUP","HR","HTML","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","LINK","MAP","MARK","MATH","MENU","META","METER","NAV","NOBR","NOSCRIPT","OBJECT","OL","OPTION","OPTGROUP","OUTPUT","P","PARAM","PRE","PROGRESS","Q","RP","RT","RUBY","S","SAMP","SCRIPT","SECTION","SELECT","SMALL","SOURCE","SPAN","STRONG","STYLE","SUB","SUMMARY","SUP","SVG","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TITLE","TR","TRACK","U","UL","VAR","VIDEO","WBR"],a=function(t){var n={},e=document.body.appendChild(document.createElement(t)),r=window.getComputedStyle(e)
return[].forEach.call(r,(function(t){n[t]=r[t]})),document.body.removeChild(e),n},{initializeSerializer:function(){var t={}
return[].forEach.call(i,(function(n){r[n]||(t[n]=a(n))})),function(n){var e,i=[],o=void 0,u=void 0,c=void 0
if(n&&n.nodeType===Node.ELEMENT_NODE)return i=[],o=n.querySelectorAll("*"),[].forEach.call(o,(function(n,e){var o
r[n.tagName]||(u=window.getComputedStyle(n),o=(o=n.tagName).toUpperCase(),t[o]||(t[o]=a(o)),c=t[o],i[e]=n.style.cssText,[].forEach.call(u,(function(t){u[t]!==c[t]&&(n.style[t]=u[t])})))})),e=n.outerHTML,o=[].map.call(o,(function(t,n){return t.style.cssText=i[n],t})),e}}})},function(t,n,e){(function(t,r){var i;/*! http://mths.be/base64 v0.1.0 by @mathias | MIT license */!function(a){var o=(t&&t.exports,"object"==typeof r&&r)
o.global!==o&&o.window
var u=function(t){this.message=t};(u.prototype=new Error).name="InvalidCharacterError"
var c=function(t){throw new u(t)},l="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789%2b/index.html",s=/[\t\n\f\r ]/g,f={encode:function(t){t=String(t),/[^\0-\xFF]/.test(t)&&c("The string to be encoded contains characters outside of the Latin1 range.")
for(var n,e,r,i,a=t.length%3,o="",u=-1,s=t.length-a;++u<s;)n=t.charCodeAt(u)<<16,e=t.charCodeAt(++u)<<8,r=t.charCodeAt(++u),o+=l.charAt((i=n+e+r)>>18&63)+l.charAt(i>>12&63)+l.charAt(i>>6&63)+l.charAt(63&i)
return 2==a?(n=t.charCodeAt(u)<<8,e=t.charCodeAt(++u),o+=l.charAt((i=n+e)>>10)+l.charAt(i>>4&63)+l.charAt(i<<2&63)+"="):1==a&&(i=t.charCodeAt(u),o+=l.charAt(i>>2)+l.charAt(i<<4&63)+"=="),o},decode:function(t){var n=(t=String(t).replace(s,"")).length
n%4==0&&(n=(t=t.replace(/==?$/,"")).length),(n%4==1||/[^+a-zA-Z0-9/]/.test(t))&&c("Invalid character: the string to be decoded is not correctly encoded.")
for(var e,r,i=0,a="",o=-1;++o<n;)r=l.indexOf(t.charAt(o)),e=i%4?64*e+r:r,i++%4&&(a+=String.fromCharCode(255&e>>(-2*i&6)))
return a},version:"0.1.0"}
void 0===(i=function(){return f}.call(n,e,n,t))||(t.exports=i)}()}).call(this,e(93)(t),e(94))},function(t,n){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},function(t,n){var e
e=function(){return this}()
try{e=e||new Function("return this")()}catch(t){"object"==typeof window&&(e=window)}t.exports=e},function(t,n,e){"use strict"
var r,i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t}
void 0===(r=function(t){var n=e(9).formatDefaultLocale,r=["decimal","thousands","grouping","currency"]
return{setDefaultLocale:function(t){if(function(t){return"object"==(void 0===t?"undefined":i(t))&&r.every((function(n){return t.hasOwnProperty(n)}))}(t))return n(t)
throw new Error("Please pass in a valid locale object definition")}}}.call(n,e,n,t))||(t.exports=r)},function(t,n,e){"use strict"
var r,i=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n]
for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t}
void 0===(r=function(t){var n=e(15),r=e(11),a=(e(9),e(22)),o=e(14),u=e(25),c=e(2),l=(e(8),e(17).exportChart),s=e(56),f=e(10),h=e(24).calculatePercent,d=e(34).emptyDonutData,p=e(18).donut
return function(){var t={top:0,right:0,bottom:0,left:0},e=300,g=300,v=p,y=r.easeCubicInOut,m=12,x=void 0,b=void 0,_=void 0,w=140,M=45.5,A=w+M,k=void 0,O=void 0,T=void 0,C=void 0,S=!1,N=!1,j=void 0,D=void 0,E=!1,L=!0,F=!1,R=null,P={emptySliceColor:"#EFF2F5",showEmptySlice:!1},B=".1f",I=void 0,U=void 0,H=f.colorSchemas.britecharts,z=function(t){return t.percentage+"% "+t.name},q=function(t){this._current=t},Y=function(t){t.outerRadius=w-m},G=function(t,n){return n.quantity-t.quantity},V=function(t){return t.quantity},W=function(t){var n=t.data
return U(n.name)},X=n.dispatch("customMouseOver","customMouseOut","customMouseMove","customClick")
function $(n){n.each((function(n){b=e-t.left-t.right,_=g-t.top-t.bottom,x=function(t){var n=t.reduce((function(t,n){return void 0===n.quantity||null===n.quantity?t:(n.quantity=+n.quantity,n.name=String(n.name),n.percentage=n.percentage||null,[].concat(function(t){if(Array.isArray(t)){for(var n=0,e=Array(t.length);n<t.length;n++)e[n]=t[n]
return e}return Array.from(t)}(t),[n]))}),[]),e=function(t){return t.reduce((function(t,n){return n.quantity+t}),0)}(n)
return 0===e&&P.showEmptySlice&&(N=!0),n.map((function(t){return t.percentage=String(t.percentage||h(t.quantity,e,B)),t}))}(n),k=u.pie().padAngle(0).value(V).sort(G),H&&(U=o.scaleOrdinal().range(H)),O=u.arc().innerRadius(M).padRadius(w),function(t){C||(C=c.select(t).append("svg").classed("britechart donut-chart",!0),function(){var t=C.append("g").classed("container-group",!0)
t.append("g").classed("chart-group",!0),t.append("g").classed("legend-group",!0)}()),C.select(".container-group").attr("transform","translate("+e/2+", "+g/2+")"),C.attr("width",e).attr("height",g)}(this),function(){T&&C.selectAll("g.arc").remove()
var t=(T=C.select(".chart-group").selectAll("g.arc").data(k(x))).enter().append("g").each(q).each(Y).classed("arc",!0).append("path")
S?t.merge(T).attr("fill",W).on("mouseover",(function(t){K(this,t,b,_)})).on("mousemove",(function(t){J(this,t,b,_)})).on("mouseout",(function(t){tt(this,t,b,_)})).on("click",(function(t){nt(this,t,b,_)})).transition().ease(y).duration(1200).attrTween("d",rt):t.merge(T).attr("fill",W).attr("d",O).on("mouseover",(function(t){K(this,t,b,_)})).on("mousemove",(function(t){J(this,t,b,_)})).on("mouseout",(function(t){tt(this,t,b,_)})).on("click",(function(t){nt(this,t,b,_)})),T.exit().remove()}(),C.select(".legend-group").append("text").attr("class","donut-text"),j&&(D=C.selectAll(".chart-group .arc path").select(Z).node())&&(Q(D.__data__),et(D,w,1200)),N&&P.showEmptySlice&&(T&&C.selectAll("g.arc").remove(),(T=C.select(".chart-group").selectAll("g.arc").data(k(d))).enter().append("g").each(q).each(Y).classed("arc",!0).append("path").merge(T).attr("fill",P.emptySliceColor).attr("d",O).transition().ease(y).duration(1200).attrTween("d",rt),T.exit().remove())}))}function Q(t){t.data&&(C.select(".donut-text").text((function(){return z(t.data)})).attr("dy",".2em").attr("text-anchor","middle"),C.select(".donut-text").call(it,A))}function Z(t){if(t.data.id===j)return this}function K(t,n,e,r){Q(n),X.call("customMouseOver",t,n,c.mouse(t),[e,r]),L&&(R&&t!==R&&et(R,w-m,150),D&&t!==D&&et(D,w-m),et(t,w))}function J(t,n,e,r){X.call("customMouseMove",t,n,c.mouse(t),[e,r])}function tt(t,n,e,r){C.select(".donut-text").text(""),D&&E&&!F&&(Q(D.__data__),et(D,w)),(t!==D||!E&&t===D)&&et(t,w-m,150),F&&(Q(t.__data__),et(t,w),R=t),X.call("customMouseOut",t,n,c.mouse(t),[e,r])}function nt(t,n,e,r){X.call("customClick",t,n,c.mouse(t),[e,r])}function et(t,n){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0
c.select(t).transition().delay(e).attrTween("d",(function(t){var e=a.interpolate(t.outerRadius,n)
return function(n){return t.outerRadius=e(n),O(t)}}))}function rt(t){var n=void 0
return t.innerRadius=0,n=a.interpolate({startAngle:0,endAngle:0},t),function(t){return O(n(t))}}function it(t,n){var e=w/5
s.wrapText.call(null,0,e,n,t.node())}return $.centeredTextFunction=function(t){return arguments.length?(z=t,this):z},$.colorSchema=function(t){return arguments.length?(H=t,this):H},$.emptyDataConfig=function(t){return arguments.length?(P=t,this):P},$.exportChart=function(t,n){l.call($,C,t,n)},$.externalRadius=function(t){return arguments.length?(w=t,this):w},$.hasHoverAnimation=function(t){return arguments.length?(L=t,this):L},$.hasFixedHighlightedSlice=function(t){return arguments.length?(E=t,this):E},$.hasLastHoverSliceHighlighted=function(t){return arguments.length?(F=t,this):F},$.height=function(t){return arguments.length?(g=t,this):g},$.highlightSliceById=function(t){return arguments.length?(j=t,this):j},$.internalRadius=function(t){return arguments.length?(M=t,this):M},$.isAnimated=function(t){return arguments.length?(S=t,this):S},$.loadingState=function(t){return arguments.length?(v=t,this):v},$.margin=function(n){return arguments.length?(t=i({},t,n),this):t},$.numberFormat=function(t){return arguments.length?(I=t,this):I},$.on=function(){var t=X.on.apply(X,arguments)
return t===X?$:t},$.orderingFunction=function(t){return arguments.length?(G=t,this):G},$.percentageFormat=function(t){return arguments.length?(B=t,this):B},$.radiusHoverOffset=function(t){return arguments.length?(m=t,this):m},$.width=function(t){return arguments.length?(e=t,this):e},$}}.call(n,e,n,t))||(t.exports=r)},function(t,n,e){"use strict"
var r,i=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n]
for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t}
void 0===(r=function(t){var n=e(9),r=e(14),a=e(2),o=(e(8),e(56)),u=e(10)
return function(){var t={top:5,right:5,bottom:5,left:5},e=320,c=180,l=16,s=1.5,f="s",h="",d=!1,p=null,g=!0,v=void 0,y=u.colorSchemas.britecharts,m=function(t){return t.id},x=function(t){return t.name},b=function(t){var e=t.quantity
return n.format(f)(e)+h},_=function(t){var n=t.name
return v(n)},w=function(t){var n=t.quantity
return"number"==typeof n||"string"==typeof n},M=void 0,A=void 0,k=void 0,O=void 0,T=void 0
function C(n){n.each((function(n){var i,u,s,f,h,C,D,E,L,F
A=e-t.left-t.right,k=c-t.top-t.bottom,O=function(t){return g=t.filter(w).length===t.length,t.reduce((function(t,n){return void 0!==n.quantity&&null!==n.quantity&&(n.quantity=+n.quantity),n.name=String(n.name),n.id=+n.id,[].concat(function(t){if(Array.isArray(t)){for(var n=0,e=Array(t.length);n<t.length;n++)e[n]=t[n]
return e}return Array.from(t)}(t),[n])}),[])}(n),v=r.scaleOrdinal().range(y),function(n){T||(T=a.select(n).append("svg").classed("britechart britechart-legend",!0)).append("g").classed("legend-container-group",!0).attr("transform","translate("+t.left+","+t.top+")").append("g").classed("legend-group",!0),T.attr("width",e).attr("height",c)}(this),d?(F=l,T.select(".legend-group").selectAll("g").remove(),T.select(".legend-group").append("g").classed("legend-line",!0),(M=T.select(".legend-line").selectAll("g.legend-entry").data(O)).enter().append("g").classed("legend-entry",!0).attr("data-item",m).attr("transform",(function(t){var n=t.name,e=F,r=k/2,i=o.getTextWidth(n,12)
return F+=l+2*j()+i,"translate("+e+","+r+")"})).merge(M).append("circle").classed("legend-circle",!0).attr("cx",l/2).attr("cy",-5).attr("r",l/2).style("fill",_).style("stroke-width",1),T.select(".legend-group").selectAll("g.legend-entry").append("text").classed("legend-entry-name",!0).text(x).attr("x",j()).style("font-size","12px").style("letter-spacing","0.5px"),T.select(".legend-group").selectAll("g.legend-entry").exit().transition().style("opacity",0).remove(),L=T.select(".legend-line").node().getBoundingClientRect().width+l,A-L<=0&&(u=(i=T.selectAll(".legend-entry")).size(),s=k/2*1.7,f=T.select(".legend-group").append("g").classed("legend-line",!0).attr("transform","translate(0, "+s+")"),(h=i.filter(":nth-child("+u+")")).attr("transform","translate("+l+",0)"),f.append((function(){return h.node()}))),C=T.select("g.legend-container-group").node().getBoundingClientRect().width+j(),E=(D=e-C)/2,D>0&&T.select("g.legend-container-group").attr("transform","translate("+E+",0)")):(T.select(".legend-group").selectAll("g").remove(),(M=T.select(".legend-group").selectAll("g.legend-line").data(O)).enter().append("g").classed("legend-line",!0).append("g").classed("legend-entry",!0).attr("data-item",m).attr("transform",(function(t,n){return"translate("+(l+j())+","+(n+1)*(k/(O.length+1))+")"})).merge(M).append("circle").classed("legend-circle",!0).attr("cx",l/2).attr("cy",-5).attr("r",l/2).style("fill",_).style("stroke-width",1),T.select(".legend-group").selectAll("g.legend-line").selectAll("g.legend-entry").append("text").classed("legend-entry-name",!0).text(x).attr("x",j()).style("font-size","12px").style("letter-spacing","0.5px"),g?T.select(".legend-group").selectAll("g.legend-line").selectAll("g.legend-entry").append("text").classed("legend-entry-value",!0).text(b).attr("x",A-40).style("font-size","12px").style("letter-spacing","0.8px").style("text-anchor","end").style("startOffset","100%"):function(){var t=T.select("g.legend-container-group").node().getBoundingClientRect().width,n=e-t,r=n/2-t/2
n>0&&T.select("g.legend-container-group").attr("transform","translate("+r+",0)")}(),T.select(".legend-group").selectAll("g.legend-line").exit().transition().style("opacity",0).remove()),p&&(S(),N(p))}))}function S(){T.select(".legend-group").selectAll("g.legend-entry").classed("is-faded",!1)}function N(t){var n=T.select('[data-item="'+t+'"]')
n.nodes().length&&(T.select(".legend-group").selectAll("g.legend-entry").classed("is-faded",!0),n.classed("is-faded",!1))}function j(){return s*l}return C.clearHighlight=function(){S()},C.colorSchema=function(t){return arguments.length?(y=t,this):y},C.height=function(t){return arguments.length?(c=t,this):c},C.highlight=function(t){S(),N(t)},C.highlightEntryById=function(t){return arguments.length?(p=t,this):p},C.isHorizontal=function(t){return arguments.length?(d=t,this):d},C.margin=function(n){return arguments.length?(t=i({},t,n),this):t},C.marginRatio=function(t){return arguments.length?(s=t,this):s},C.markerSize=function(t){return arguments.length?(l=t,this):l},C.numberFormat=function(t){return arguments.length?(f=t,this):f},C.unit=function(t){return arguments.length?(h=t,this):h},C.width=function(t){return arguments.length?(e=t,this):e},C}}.call(n,e,n,t))||(t.exports=r)},function(t,n,e){"use strict"
var r,i=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n]
for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t}
function a(t){if(Array.isArray(t)){for(var n=0,e=Array(t.length);n<t.length;n++)e[n]=t[n]
return e}return Array.from(t)}void 0===(r=function(t){var n=e(0),r=e(23),o=e(27),u=e(15),c=e(11),l=e(9),s=e(14),f=e(25),h=e(2),d=(e(8),e(26)),p=e(17).exportChart,g=e(10),v=e(18).line,y=e(74),m=y.getTimeSeriesAxis,x=y.getSortedNumberAxis,b=e(87).castValueToType,_=e(34),w=_.axisTimeCombinations,M=_.curveMap,A=e(75),k=A.createFilterContainer,O=A.createGlowWithMatrix,T=A.bounceCircleHighlight,C=e(24),S=C.formatIntegerValue,N=C.formatDecimalValue,j=C.isInteger,D=C.uniqueId
return function(){var t={top:60,right:30,bottom:40,left:70},e=960,y=500,_=v,A=null,C=480,E=void 0,L=void 0,F=void 0,R=void 0,P=void 0,B=void 0,I=void 0,U=void 0,H=void 0,z=void 0,q=g.colorSchemas.britecharts,Y=g.colorGradients.greenBlue,G=void 0,V=void 0,W=D("one-line-gradient"),X=null,$=null,Q="date",Z="linear",K=null,J=null,tt=null,nt=void 0,et=!1,rt=!1,it=c.easeQuadInOut,at=void 0,ot="linear",ut=void 0,ct=void 0,lt="date",st="value",ft="topic",ht=null,dt=null,pt=null,gt=null,vt=36,yt=5,mt=void 0,xt=void 0,bt=void 0,_t=void 0,wt=[],Mt=null,At={},kt=function(t){return t.date},Ot=function(t){return t.value},Tt=function(t){return t.topic},Ct=function(t){return t.topicName},St=u.dispatch("customMouseOver","customMouseOut","customMouseMove","customDataEntryClick","customTouchMove")
function Nt(u){u.each((function(u){var c,l,p=function(t){var n=t.dataByTopic,e=t.dataSorted,r=t.data
if(!n&&!r)throw new Error("Data%20needs%20to%20have%20a%20dataByTopic%20or%20data%20property.%20See%20more%20in%20http_/britecharts.github.io/britecharts/global.html#LineChartData__anchor")
return n?r=n.reduce((function(t,n){return n.dates.forEach((function(e){t.push({topicName:n.topicName,name:n[ft],date:e[lt],value:e[st]})})),t}),[]):n=o.nest().key(Ct).entries(r).map((function(t){return{topic:t.values[0].name,topicName:t.key,dates:t.values}})),e=o.nest().key(kt).entries(r).map((function(t){return{date:b(t.key,Q),topics:t.values}})),{dataByTopic:n.reduce((function(t,n){var e=n.dates,r=function(t,n){var e={}
for(var r in t)n.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])
return e}(n,["dates"]),a=e.map((function(t){return{date:b(t[lt],Q),value:(n=t[st],null===n?null:+n)}
var n}))
return t.push(i({dates:a},r)),t}),[]),dataSorted:e}}(u)
ut=p.dataByTopic,ct=p.dataSorted,F=e-t.left-t.right,R=y-t.top-t.bottom,function(){var t,e,r,i,a
i=n.min(ut,(function(t){var e=t.dates
return n.min(e,kt)})),a=n.max(ut,(function(t){var e=t.dates
return n.max(e,kt)})),P="number"===Q?"logarithmic"===Z?s.scaleLog().domain([i,a]).rangeRound([0,F]):s.scaleLinear().domain([i,a]).rangeRound([0,F]):s.scaleTime().domain([i,a]).rangeRound([0,F]),t=n.max(ut,(function(t){var e=t.dates
return n.max(e,Ot)})),e=n.min(ut,(function(t){var e=t.dates
return n.min(e,Ot)})),r=e<0?e:0,B=s.scaleLinear().domain([r,t]).rangeRound([R,0]).nice()
var o=(I=s.scaleOrdinal().range(q).domain(ut.map(Tt))).range()
G=I.domain().reduce((function(t,n,e){return t[n]=o[e],t}),{})}(),function(n){E||(E=h.select(n).append("svg").classed("britechart line-chart",!0),function(){var n=E.append("g").classed("container-group",!0).attr("transform","translate("+t.left+","+t.top+")")
n.append("g").classed("x-axis-group",!0).append("g").classed("axis x",!0),n.selectAll(".x-axis-group").append("g").classed("month-axis",!0),n.append("g").classed("y-axis-group",!0).append("g").classed("axis y",!0),n.append("g").classed("grid-lines-group",!0),n.append("g").classed("custom-lines-group",!0),n.append("g").classed("chart-group",!0),n.append("g").classed("metadata-group",!0)}()),E.attr("width",e).attr("height",y)}(this),function(){var i=void 0,a=void 0
if("number"===Q)i=x(ct,e),a=null,U="logarithmic"===Z?r.axisBottom(P).ticks(i.tick,"e").tickFormat((function(t){var n=Math.log(t)/Math.LN10
return Math.abs(Math.round(n)-n)<1e-6?"10^"+Math.round(n):""})):r.axisBottom(P).ticks(i.tick).tickFormat(Dt)
else{if("custom"===K&&"string"==typeof tt)i={tick:J,format:d.timeFormat(tt)},a=null
else{var o=m(ct,e,K,nt)
i=o.minor,a=o.major,H=r.axisBottom(P).ticks(a.tick).tickSize(0,0).tickFormat(a.format)}U=r.axisBottom(P).ticks(i.tick).tickSize(10,0).tickPadding(5).tickFormat(i.format)}z=r.axisLeft(B).ticks(yt).tickSize([0]).tickPadding(5).tickFormat(Dt),function(e,r){E.select(".grid-lines-group").selectAll("line").remove()
var i=n.min(ut,(function(t){var e=t.dates
return n.min(e,Ot)}))<0
"horizontal"!==Mt&&"full"!==Mt||E.select(".grid-lines-group").selectAll("line.horizontal-grid-line").data(B.ticks(r)).enter().append("line").attr("class","horizontal-grid-line").attr("x1",-45).attr("x2",F).attr("y1",(function(t){return B(t)})).attr("y2",(function(t){return B(t)})).classed("horizontal-grid-line--highlighted",(function(t){return i&&0===t})),"vertical"!==Mt&&"full"!==Mt||E.select(".grid-lines-group").selectAll("line.vertical-grid-line").data(P.ticks(e)).enter().append("line").attr("class","vertical-grid-line").attr("y1",0).attr("y2",R).attr("x1",(function(t){return P(t)})).attr("x2",(function(t){return P(t)})),E.select(".grid-lines-group").selectAll("line.extended-x-line").data([0]).enter().append("line").attr("class","extended-x-line").attr("x1",-45).attr("x2",F).attr("y1",y-t.bottom-t.top).attr("y2",y-t.bottom-t.top)}(i.tick,yt),function(){E.select(".custom-lines-group").selectAll("line").remove()
var t=wt.map((function(t){return t.y}))
E.select(".custom-lines-group").selectAll("line.custom-line").data(t).enter().append("line").attr("class","custom-line").attr("x1",0).attr("x2",F).attr("y1",(function(t){return B(t)})).attr("y2",(function(t){return B(t)})).attr("stroke",(function(t){return n=t,wt.find((function(t){return t.y===n})).color||"#C3C6CF"
var n}))
var n=!0,e=!1,r=void 0
try{for(var i,a=wt[Symbol.iterator]();!(n=(i=a.next()).done);n=!0){var o=i.value
o.name&&E.select(".custom-lines-group").append("text").attr("x",F).attr("y",B(o.y)-6).attr("class","custom-line-annotation").attr("text-anchor","end").attr("dominant-baseline","baseline").text(o.name)}}catch(t){e=!0,r=t}finally{try{!n&&a.return&&a.return()}finally{if(e)throw r}}}()}(),function(){if(E.select(".x-axis-group .axis.x").attr("transform","translate(0, "+R+")").call(U),"custom"!==K&&"number"!==Q&&E.select(".x-axis-group .month-axis").attr("transform","translate(0, "+(R+28)+")").call(H),ht){dt&&E.selectAll(".x-axis-label").remove()
var t=F/2,n=R+28+36
dt=E.select(".x-axis-group").append("text").attr("x",t).attr("y",n).attr("text-anchor","middle").attr("class","x-axis-label").text(ht)}if(E.select(".y-axis-group .axis.y").attr("transform","translate(-15, 0)").call(z).call(jt),pt){gt&&E.selectAll(".y-axis-label").remove()
var e=-vt-15,r=-R/2
gt=E.select(".y-axis-group").append("text").attr("x",r).attr("y",e).attr("text-anchor","middle").attr("transform","rotate(270)").attr("class","y-axis-label").text(pt)}}(),V||(V=E.select(".metadata-group").append("linearGradient").attr("id",W).attr("x1","0%").attr("y1","0%").attr("x2","100%").attr("y2","0%").attr("gradientUnits","userSpaceOnUse").selectAll("stop").data([{offset:"0%",color:Y[0]},{offset:"100%",color:Y[1]}]).enter().append("stop").attr("offset",(function(t){return t.offset})).attr("stop-color",(function(t){return t.color}))),c=void 0,l=void 0,At={},l=f.line().curve(M[ot]).x((function(t){var n=t.date
return P(n)})).defined((function(t){return null!==t.value})).y((function(t){var n=t.value
return B(n)})),c=E.select(".chart-group").selectAll(".line").data(ut,Tt),L=c.enter().append("g").attr("class","topic").append("path").attr("class","line").merge(c).attr("id",(function(t){return t.topic})).attr("d",(function(t){var n=t.dates
return l(n)})).style("stroke",(function(t){return 1===ut.length?"url(#"+W+")":(n=t.topic,I(n))
var n})),c.exit().remove(),rt&&(at=E.append("rect").attr("class","masking-rectangle").attr("width",e).attr("height",y).attr("x",0).attr("y",0)).transition().duration(1500).ease(it).attr("x",e).on("end",(function(){return at.remove()})),e>C&&(mt||(mt=E.select(".metadata-group").append("rect").attr("class","overlay").attr("y1",0).attr("y2",y).attr("height",R).attr("width",F).attr("fill","rgba(0, 0, 0, 0)").style("display","none")),xt||(xt=E.select(".metadata-group").append("g").attr("class","hover-marker vertical-marker-container").attr("transform","translate(9999, 0)"),bt=xt.selectAll("path").data([{x1:0,y1:0,x2:0,y2:0}]).enter().append("line").classed("vertical-marker",!0).attr("x1",0).attr("y1",R).attr("x2",0).attr("y2",0)),E.on("mouseover",(function(t){!function(t,n){mt.style("display","block"),bt.classed("bc-is-active",!0),St.call("customMouseOver",t,n,h.mouse(t))}(this,t)})).on("mouseout",(function(t){!function(t,n){mt.style("display","none"),bt.classed("bc-is-active",!1),xt.attr("transform","translate(9999, 0)"),St.call("customMouseOut",t,n,h.mouse(t))}(this,t)})).on("mousemove",(function(e){var r,i,a,o,u,c,l,s,f,d,p,g,v,y
f=function(t,n){if(Array.isArray(t))return t
if(Symbol.iterator in Object(t))return function(t,n){var e=[],r=!0,i=!1,a=void 0
try{for(var o,u=t[Symbol.iterator]();!(r=(o=u.next()).done)&&(e.push(o.value),!n||e.length!==n);r=!0);}catch(t){i=!0,a=t}finally{try{!r&&u.return&&u.return()}finally{if(i)throw a}}return e}(t,n)
throw new TypeError("Invalid attempt to destructure non-iterable instance")}(h.mouse(this),2),d=f[0],p=f[1],r=d+-t.left,u=P.invert(r),c=(0,n.bisector(kt).left)(ct,u,1),l=ct[c],v=void 0,(g=(s=ct[c-1])&&l?(i=u,a=l,o=s,"number"===Q?i-a.date>o.date-i?a:o:new Date(i).getTime()-new Date(a.date).getTime()>new Date(o.date).getTime()-new Date(i).getTime()?a:o):l)&&(y=v=P(b(g.date,Q)),xt.attr("transform","translate("+y+",0)"),function(t){xt.selectAll(".circle-container").remove()
var n=L.nodes().reduce((function(t,n){return t[n.id]=n,t}),{}),e=t.topics.map((function(t){return{topic:t,node:n[t.name]}})).filter((function(t){return!!t.topic})).sort((function(t,n){return G[t.topic.name]<G[n.topic.name]}))
t.topics=e.map((function(t){return t.topic})),t.topics.forEach((function(n,r){var i=xt.append("g").classed("circle-container",!0).append("circle").classed("data-point-highlighter",!0).attr("cx",12).attr("cy",0).attr("r",5).style("stroke-width",(function(){return et?5:2})).style("stroke",G[n.name]).style("cursor","pointer").on("click",(function(){!function(t){X||(X=k(E.select(".metadata-group")),$=O(X))
var n=h.select(t)
n.style("stroke-width",5).style("stroke-opacity",.6).attr("filter","url(#"+$+")"),T(n,it,5)}(this),function(t,n){St.call("customDataEntryClick",t,n,h.mouse(t))}(this,n)})).on("mouseout",(function(){h.select(this).attr("filter","none")})),a=e[r].node,o=Et(P(b(t.topics[r].date,Q)),a,n.name)
i.attr("transform","translate( -12, "+o+" )")}))}(g),St.call("customMouseMove",this,g,G,v,p))}))),et&&function(){E.select(".chart-group").selectAll(".data-points-container").remove()
var t=L.nodes().reduce((function(t,n){return t[n.id]=n,t}),{}),n=ct.reduce((function(n,e){var r=e.topics.map((function(n){return{topic:n,node:t[n.name]}}))
return[].concat(a(n),a(r))}),[])
E.select(".chart-group").append("g").classed("data-points-container",!0).selectAll("circle").data(n).enter().append("circle").classed("data-point-mark",!0).attr("r",5).style("stroke-width",2).style("stroke",(function(t){return G[t.topic.name]})).style("cursor","pointer").attr("cx",(function(t){return P(b(t.topic.date,Q))})).attr("cy",(function(t){return Et(P(b(t.topic.date,Q)),t.node,t.topic.name)}))}(),E.on("touchmove",(function(t){!function(t,n){St.call("customTouchMove",t,n,h.touch(t))}(this,t)}))}))}function jt(t){t.selectAll(".tick text").attr("transform","translate(0, -7)")}function Dt(t){var n=void 0
return n=j(t)?S:N,_t&&(n=l.format(_t)),n(t)}function Et(t,n,e,r){var i=e+"-"+t
if(i in At)return At[i]
r=r||.01
var a=0,o=n.getTotalLength(),u=void 0
try{u=n.getPointAtLength((o+a)/2)}catch(t){u={x:0,y:0}}for(var c=0;t<u.x-r||t>u.x+r;){var l=(a+o)/2
try{u=n.getPointAtLength(l)}catch(t){u={x:0,y:0}}if(t<u.x?o=l:a=l,100<(c+=1))break}return At[i]=u.y,At[i]}return Nt.aspectRatio=function(t){return arguments.length?(A=t,this):A},Nt.xAxisLabel=function(t){return arguments.length?(ht=t,this):ht},Nt.yAxisLabel=function(t){return arguments.length?(pt=t,this):pt},Nt.colorSchema=function(t){return arguments.length?(q=t,this):q},Nt.dateLabel=function(t){return arguments.length?(lt=t,this):lt},Nt.xAxisFormat=function(t){return arguments.length?(K=t,this):K},Nt.xAxisCustomFormat=function(t){return arguments.length?(tt=t,this):tt},Nt.xTicks=function(t){return arguments.length?(J=t,this):J},Nt.grid=function(t){return arguments.length?(Mt=t,this):Mt},Nt.height=function(t){return arguments.length?(A&&(e=Math.ceil(t/A)),y=t,this):y},Nt.isAnimated=function(t){return arguments.length?(rt=t,this):rt},Nt.loadingState=function(t){return arguments.length?(_=t,this):_},Nt.margin=function(n){return arguments.length?(t=i({},t,n),this):t},Nt.numberFormat=function(t){return arguments.length?(_t=t,this):_t},Nt.lineCurve=function(t){return arguments.length?(ot=t,this):ot},Nt.lineGradient=function(t){return arguments.length?(Y=t,this):Y},Nt.shouldShowAllDataPoints=function(t){return arguments.length?(et=t,this):et},Nt.tooltipThreshold=function(t){return arguments.length?(C=t,this):C},Nt.topicLabel=function(t){return arguments.length?(ft=t,this):ft},Nt.valueLabel=function(t){return arguments.length?(st=t,this):st},Nt.yAxisLabelPadding=function(t){return arguments.length?(vt=t,this):vt},Nt.yTicks=function(t){return arguments.length?(yt=t,this):yt},Nt.width=function(t){return arguments.length?(A&&(y=Math.ceil(t*A)),e=t,this):e},Nt.locale=function(t){return arguments.length?(nt=t,this):nt},Nt.lines=function(t){return arguments.length?(wt=t,this):wt},Nt.exportChart=function(t,n){p.call(Nt,E,t,n)},Nt.on=function(){var t=St.on.apply(St,arguments)
return t===St?Nt:t},Nt.axisTimeCombinations=w,Nt.xAxisValueType=function(t){return arguments.length?(Q=t,this):Q},Nt.xAxisScale=function(t){return arguments.length?(Z=t,this):Z},Nt}}.call(n,e,n,t))||(t.exports=r)},function(t,n,e){"use strict"
var r,i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a=function(t,n){if(Array.isArray(t))return t
if(Symbol.iterator in Object(t))return function(t,n){var e=[],r=!0,i=!1,a=void 0
try{for(var o,u=t[Symbol.iterator]();!(r=(o=u.next()).done)&&(e.push(o.value),!n||e.length!==n);r=!0);}catch(t){i=!0,a=t}finally{try{!r&&u.return&&u.return()}finally{if(i)throw a}}return e}(t,n)
throw new TypeError("Invalid attempt to destructure non-iterable instance")}
void 0===(r=function(t){var n=e(11),r=e(9),o=e(2),u=(e(8),e(26)),c=e(34).axisTimeCombinations,l=e(24),s=l.formatIntegerValue,f=l.formatDecimalValue,h=l.isInteger,d=e(56).getTextWidth
return function(){var t="Tooltip title",e=!0,l=void 0,p={y:-55,x:0},g=void 0,v=void 0,y=void 0,m=void 0,x=48,b=0,_=37,w=void 0,M=void 0,A=n.easeQuadInOut,k=void 0,O="date",T="value",C="name",S="topics",N=c.DAY_MONTH,j="date",D=null,E=null,L=[],F=null,R=null,P=u.timeFormat("%b %d, %Y"),B=u.timeFormat("%b %d, %I %p"),I=void 0,U=void 0
function H(t){t.each((function(t){(function(t){U||((U=o.select(t).append("g").classed("britechart britechart-tooltip",!0).style("visibility","hidden")).append("g").classed("tooltip-container-group select-disable",!0).attr("transform","translate( 2, 2)").append("g").classed("tooltip-group",!0),g=U.selectAll(".tooltip-group").append("g").classed("tooltip-text",!0),l=g.append("rect").classed("tooltip-text-container",!0).attr("x",-54.5).attr("y",0).attr("width",250).attr("height",x).attr("rx",3).attr("ry",3).style("fill","#FFFFFF").style("stroke","#D2D6DF").style("stroke-width",1),m=g.append("text").classed("tooltip-title",!0).attr("x",-46.5).attr("dy",".35em").attr("y",16).style("fill","#6D717A"),v=g.append("line").classed("tooltip-divider",!0).attr("x1",-46.5).attr("x2",265).attr("y1",31).attr("y2",31).style("stroke","#D2D6DF"),y=g.append("g").classed("tooltip-body",!0).style("transform","translateY(8px)").style("fill","#282C35")),U.transition().attr("width",250).attr("height",45),H.hide()})(this)}))}function z(t){var n=t[T]
return t.missingValue?"-":function(t){if(null!==R)return R(t)
var n=f
return t?(null!==F?n=r.format(F):h(t)&&(n=s),n(t)):0}(n).toString()}function q(t){var n,e,r=t[C],i=void 0,a=void 0
n=t.topicName||r,e=z(t),a=y.append("text").classed("tooltip-left-text",!0).attr("dy","1em").attr("x",b).attr("y",_).style("fill","#000000").text(n).call(Y,170,-25),i=y.append("text").classed("tooltip-right-text",!0).attr("dy","1em").attr("x",b).attr("y",_).style("fill","#000000").text(e),w=a.node().getBBox().height?a.node().getBBox().height:w,x+=w+5,M=i.node().getBBox().width?i.node().getBBox().width:M,i.attr("x",250-M-10-62.5),y.append("circle").classed("tooltip-circle",!0).attr("cx",-39.5).attr("cy",_+8).attr("r",5).style("fill",k[r]).style("stroke-width",1),_+=w+7}function Y(t,n){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0
t.each((function(){var r,i,a,u,c,l,s
for(r=(t=o.select(this)).text().split(/\s+/).reverse(),a=[],u=0,c=t.attr("y"),l=parseFloat(t.attr("dy")),s=t.text(null).append("tspan").attr("x",e).attr("y",c).attr("dy",l+"em");i=r.pop();)a.push(i),s.text(a.join(" ")),d(a.join(" "),16,"Karla, sans-serif")>n&&(a.pop(),s.text(a.join(" ")),u<2&&(a=[i],s=t.append("tspan").attr("x",e).attr("y",c).attr("dy",1.2*++u+l+"em").text(i)))}))}function G(n){var r=n[S]
L.length?r=function(t){return(arguments.length>1&&void 0!==arguments[1]?arguments[1]:L).map((function(n){return t.filter((function(t){return t.name===n}))[0]}))}(r):r.length&&r[0].name&&(r=function(t){return t.map((function(t){return t})).sort((function(t,n){return t.name>n.name?1:t.name===n.name?0:-1}))}(r)),y.selectAll("text").remove(),y.selectAll("circle").remove(),function(n){var r=t,a=function(t){return"number"===j?Number(t):function(t){var n=D||N,e=null,r={month:"short",day:"numeric"}
return n===c.DAY_MONTH||n===c.MONTH_YEAR?(e=P,r.year="numeric"):n===c.HOUR_DAY||n===c.MINUTE_HOUR?(e=B,r.hour="numeric"):n===c.CUSTOM&&"string"==typeof E&&(e=u.timeFormat(E)),I&&"undefined"!=typeof Intl&&"object"===("undefined"==typeof Intl?"undefined":i(Intl))&&Intl.DateTimeFormat?Intl.DateTimeFormat(I,r).format(t):e(t)}(new Date(t))}(n[O])
r.length?e&&(r=r+" - "+a):r=a,m.text(r)}(n),x=48,_=37,b=0,r.forEach(q)}function V(t,n,e){G(t),function(t,n,e){var r,i,o=(i=(r=a([n,e],2))[0],r[1],[i-250<0?65:-205,p.y]),u=a(o,2),c=u[0],s=u[1]
l.attr("width",250).attr("height",x+10),g.transition().duration(100).ease(A).attr("transform","translate("+c+", "+s+")"),v.attr("x2",190)}(0,n,e)}return H.axisTimeCombinations=c,H.dateFormat=function(t){return arguments.length?(D=t,this):D||N},H.dateCustomFormat=function(t){return arguments.length?(E=t,this):E},H.dateLabel=function(t){return arguments.length?(O=t,this):O},H.hide=function(){return U.style("visibility","hidden"),this},H.locale=function(t){return arguments.length?(I=t,this):I},H.nameLabel=function(t){return arguments.length?(C=t,this):C},H.numberFormat=function(t){return arguments.length?(F=t,this):F},H.valueFormatter=function(t){return arguments.length?(R=t,this):R},H.shouldShowDateInTitle=function(t){return arguments.length?(e=t,this):e},H.show=function(){return U.style("visibility","visible"),this},H.title=function(n){return arguments.length?(t=n,this):t},H.tooltipOffset=function(t){return arguments.length?(p=t,this):p},H.topicsOrder=function(t){return arguments.length?(L=t,this):L},H.topicLabel=function(t){return arguments.length?(S=t,this):S},H.update=function(t,n,e){return k=n,V(t,e,arguments.length>3&&void 0!==arguments[3]?arguments[3]:null),this},H.valueLabel=function(t){return arguments.length?(T=t,this):T},H.xAxisValueType=function(t){return arguments.length?(j=t,this):j},H}}.call(n,e,n,t))||(t.exports=r)},function(t,n,e){"use strict"
var r,i=function(t,n){if(Array.isArray(t))return t
if(Symbol.iterator in Object(t))return function(t,n){var e=[],r=!0,i=!1,a=void 0
try{for(var o,u=t[Symbol.iterator]();!(r=(o=u.next()).done)&&(e.push(o.value),!n||e.length!==n);r=!0);}catch(t){i=!0,a=t}finally{try{!r&&u.return&&u.return()}finally{if(i)throw a}}return e}(t,n)
throw new TypeError("Invalid attempt to destructure non-iterable instance")}
void 0===(r=function(t){var n=e(0),r=e(11),a=e(9),o=e(2)
return e(8),function(){var t=12,e=12,u=12,c=12,l="",s="value",f="name",h=r.easeQuadInOut,d=void 0,p=void 0,g=0,v=20,y=".2f",m=function(t){return a.format(y)(t)},x=void 0,b=void 0,_=void 0
function w(n){n.each((function(){x=100-c-e,b=100-t-u,function(n){_||(_=o.select(n).append("g").classed("britechart britechart-mini-tooltip",!0)).append("g").classed("tooltip-container-group",!0).attr("transform","translate( "+c+", "+t+")").append("g").classed("tooltip-group",!0),_.transition().attr("width",100).attr("height",100),w.hide()}(this),p=_.selectAll(".tooltip-group").append("g").classed("tooltip-text select-disable",!0),d=p.append("rect").classed("tooltip-background",!0).attr("width",100).attr("height",100).attr("rx",1).attr("ry",1).attr("y",-t).attr("x",-c).style("fill","#FFFFFF").style("stroke","#D2D6DF").style("stroke-width",1).style("pointer-events","none").style("opacity",.9)}))}function M(){for(var t=arguments.length,e=Array(t),r=0;r<t;r++)e[r]=arguments[r]
var i=e.filter((function(t){return!!t})).map((function(t){return t.node().getBBox().width}))
return n.max(i)}function A(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t[s]||"",e=t[f]||"",r="1em",i=0,a=void 0,o=void 0,u=void 0
p.selectAll("text").remove(),l&&(u=p.append("text").classed("mini-tooltip-title",!0).attr("dy",r).attr("y",0).style("fill","#666a73").style("font-size",14).text(l),i=21+i),e&&(o=p.append("text").classed("mini-tooltip-name",!0).attr("dy",r).attr("y",i||0).style("fill","#666a73").style("font-size",14).text(e),i=21+i),n&&(a=p.append("text").classed("mini-tooltip-value",!0).attr("dy",r).attr("y",i||0).style("fill","#45494E").style("font-size",27).style("font-weight",200).text(m(n)),i=31.86+i),x=M(o,u,a),b=i}function k(n,r,a){var o,l,s,f
A(n),o=function(n,r){var a=i(n,2),o=a[0],l=a[1],s=i(r,2),f=s[0],h=s[1]
return[function(t,n){return t-c-e-x-n>0}(f,o)?o+v:o-x-v-e,function(n,e){return n-t-u-b-e>0}(h,l)?l+g:l-b-g-u]}(r,a),s=(l=i(o,2))[0],f=l[1],_.transition().duration(100).ease(h).attr("height",b+t+u).attr("width",x+c+e).attr("transform","translate("+s+","+f+")"),d.attr("height",b+t+u).attr("width",x+c+e)}return w.hide=function(){return _.style("visibility","hidden"),this},w.nameLabel=function(t){return arguments.length?(f=t,this):f},w.numberFormat=function(t){return arguments.length?(y=t,this):y},w.valueFormatter=function(t){return arguments.length?(m=t,this):m},w.show=function(){return A(undefined),_.style("visibility","visible"),this},w.title=function(t){return arguments.length?(l=t,this):l},w.update=function(t,n,e){return k(t,n,e),this},w.valueLabel=function(t){return arguments.length?(s=t,this):s},w}}.call(n,e,n,t))||(t.exports=r)},function(t,n,e){"use strict"
var r,i=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n]
for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t}
void 0===(r=function(t){var n=e(0),r=e(11),a=e(14),o=e(25),u=e(2),c=(e(8),e(17).exportChart),l=e(10),s=e(18).stackedArea,f=e(24).uniqueId,h={"font-size":"22px","font-family":"sans-serif","font-style":"normal","font-weight":0}
return function(){var t={left:5,right:5,top:5,bottom:5},e=100,d=30,p=s,g=void 0,v=void 0,y=["#F5FDFF","#F6FEFC"],m=void 0,x=f("sparkline-area-gradient"),b=l.colorGradients.greenBlue,_=void 0,w=f("sparkline-line-gradient"),M=void 0,A=f("maskingClip"),k=void 0,O=void 0,T=void 0,C=void 0,S=!1,N=3e3,j=r.easeQuadInOut,D=void 0,E=void 0,L=void 0,F=void 0,R=void 0,P=h,B="value",I="date",U=function(t){return t.date},H=function(t){return t.value}
function z(r){r.each((function(r){O=e-t.left-t.right,T=d-t.top-t.bottom,C=r.reduce((function(t,n){return n.date=new Date(n[I]),n.value=+n[B],[].concat(function(t){if(Array.isArray(t)){for(var n=0,e=Array(t.length);n<t.length;n++)e[n]=t[n]
return e}return Array.from(t)}(t),[n])}),[]),g=a.scaleLinear().domain(n.extent(C,U)).range([0,O]),v=a.scaleLinear().domain(n.extent(C,H)).range([T,0]),function(n){k||(k=u.select(n).append("svg").classed("britechart sparkline",!0),function(){var n=k.append("g").classed("container-group",!0).attr("transform","translate("+t.left+","+t.top+")")
n.append("g").classed("text-group",!0),n.append("g").classed("chart-group",!0),n.append("g").classed("metadata-group",!0)}()),k.attr("width",e).attr("height",d)}(this),function(){var t=k.select(".metadata-group");(m||_)&&(k.selectAll("#"+x).remove(),k.selectAll("#"+w).remove()),m=t.append("linearGradient").attr("id",x).attr("class","area-gradient").attr("gradientUnits","userSpaceOnUse").attr("x1",0).attr("x2",g(C[C.length-1].date)).attr("y1",0).attr("y2",0).selectAll("stop").data([{offset:"0%",color:y[0]},{offset:"100%",color:y[1]}]).enter().append("stop").attr("offset",(function(t){return t.offset})).attr("stop-color",(function(t){return t.color})),_=t.append("linearGradient").attr("id",w).attr("class","line-gradient").attr("gradientUnits","userSpaceOnUse").attr("x1",0).attr("x2",g(C[C.length-1].date)).attr("y1",0).attr("y2",0).selectAll("stop").data([{offset:"0%",color:b[0]},{offset:"100%",color:b[1]}]).enter().append("stop").attr("offset",(function(t){return t.offset})).attr("stop-color",(function(t){return t.color}))}(),M&&k.selectAll("#"+A).remove(),S&&(M=k.select(".metadata-group").append("clipPath").attr("id",A).attr("class","clip-path").append("rect").attr("width",0).attr("height",d),u.select("#"+A+" rect").transition().ease(j).duration(N).attr("width",e)),E&&k.selectAll(".sparkline-area").remove(),E=o.area().x((function(t){var n=t.date
return g(n)})).y0((function(){return v(0)+1})).y1((function(t){var n=t.value
return v(n)})).curve(o.curveBasis),k.select(".chart-group").append("path").datum(C).attr("class","sparkline-area").attr("fill","url(#"+x+")").attr("d",E).attr("clip-path","url(#"+A+")"),D&&k.selectAll(".line").remove(),D=o.line().curve(o.curveBasis).x((function(t){var n=t.date
return g(n)})).y((function(t){var n=t.value
return v(n)})),k.select(".chart-group").append("path").datum(C).attr("class","line").attr("stroke","url(#"+w+")").attr("d",D).attr("clip-path","url(#"+A+")"),L&&k.selectAll(".sparkline-circle").remove(),L=k.selectAll(".chart-group").append("circle").attr("class","sparkline-circle").attr("cx",g(C[C.length-1].date)).attr("cy",v(C[C.length-1].value)).attr("r",1.5),R&&(F&&k.selectAll(".sparkline-text").remove(),F=k.selectAll(".text-group").append("text").attr("x",O/2).attr("y",T/6).attr("text-anchor","middle").attr("class","sparkline-text").style("font-size",P["font-size"]||h["font-size"]).style("fill",P.fill||b[0]).style("font-family",P["font-family"]||h["font-family"]).style("font-weight",P["font-weight"]||h["font-weight"]).style("font-style",P["font-style"]||h["font-style"]).text(R))}))}return z.areaGradient=function(t){return arguments.length?(y=t,this):y},z.dateLabel=function(t){return arguments.length?(I=t,this):I},z.duration=function(t){return arguments.length?(N=t,this):N},z.exportChart=function(t,n){c.call(z,k,t,n)},z.height=function(t){return arguments.length?(d=t,this):d},z.isAnimated=function(t){return arguments.length?(S=t,this):S},z.lineGradient=function(t){return arguments.length?(b=t,this):b},z.loadingState=function(t){return arguments.length?(p=t,this):p},z.margin=function(n){return arguments.length?(t=i({},t,n),this):t},z.titleText=function(t){return arguments.length?(R=t,this):R},z.titleTextStyle=function(t){return arguments.length?(P=t,this):P},z.valueLabel=function(t){return arguments.length?(B=t,this):B},z.width=function(t){return arguments.length?(e=t,this):e},z}}.call(n,e,n,t))||(t.exports=r)},function(t,n,e){"use strict"
var r,i=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n]
for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t}
function a(t){if(Array.isArray(t)){for(var n=0,e=Array(t.length);n<t.length;n++)e[n]=t[n]
return e}return Array.from(t)}function o(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}void 0===(r=function(t){var n=e(0),r=e(23),u=e(27),c=e(15),l=e(11),s=e(14),f=e(25),h=e(2),d=(e(8),e(26)),p=e(76),g=e(17).exportChart,v=e(10),y=e(74),m=y.getTimeSeriesAxis,x=y.getSortedNumberAxis,b=e(87).castValueToType,_=e(34),w=_.axisTimeCombinations,M=_.curveMap,A=e(24),k=A.formatIntegerValue,O=A.formatDecimalValue,T=A.isInteger,C=e(75),S=C.createFilterContainer,N=C.createGlowWithMatrix,j=C.bounceCircleHighlight,D=e(86),E=D.addDays,L=D.diffDays,F=e(18).stackedArea,R=function(t){return t.filter((function(t,n,e){return e.indexOf(t)===n}))}
return function(){var t={top:70,right:30,bottom:60,left:70},e=960,y=500,_=F,A=void 0,C=void 0,D=void 0,P=void 0,B=void 0,I=null,U="date",H="linear",z=5,q=0,Y=void 0,G=void 0,V=-60,W=v.colorSchemas.britecharts,X=v.colorGradients.greenBlue,$=null,Q=null,Z=.24,K=void 0,J=void 0,tt=void 0,nt=null,et=null,rt=null,it=void 0,at="monotoneX",ot=void 0,ut=void 0,ct=void 0,lt=void 0,st=void 0,ft=n.range(20,200,20),ht=void 0,dt=void 0,pt=void 0,gt=void 0,vt=!1,yt=l.easeQuadInOut,mt=!0,xt=void 0,bt=void 0,_t=void 0,wt=void 0,Mt=void 0,At=void 0,kt=void 0,Ot=null,Tt=480,Ct="date",St="value",Nt="name",jt={minDate:new Date((new Date).setDate((new Date).getDate()-30)),maxDate:new Date,minY:0,maxY:500},Dt=!1,Et=function(t){return t.name},Lt=function(t){return t.date},Ft=c.dispatch("customMouseOver","customMouseOut","customMouseMove","customDataEntryClick","customTouchMove")
function Rt(i){i.each((function(i){var c,l,g,v,_,w,k
bt=e-t.left-t.right,_t=y-t.top-t.bottom,wt=(g=0===(g=i).length?(c=L(jt.minDate,jt.maxDate),l=Array.apply(null,Array(c)),Dt=!0,[].concat(a(l.map((function(t,n){var e
return o(e={},Ct,E(jt.minDate,n)),o(e,St,0),o(e,Nt,"1"),e}))),a(l.map((function(t,n){var e
return o(e={},Ct,E(jt.minDate,n)),o(e,St,0),o(e,Nt,"2"),e}))))):g).reduce((function(t,n){return n.date=b(n[Ct],U),n.value=+n[St],[].concat(a(t),[n])}),[]),Mt=function(t){return u.nest().key(Lt).entries(t.sort((function(t,n){return t.date-n.date}))).map((function(t){return p({},t,{date:b(t.key,U)})}))}(wt),function(){At=Mt.map((function(t){return p({},t,t.values)})).map((function(t){return Object.keys(t).forEach((function(n){var e=t[n]
e&&e.name&&(t[e.name]=e.value)})),p({},t,{date:b(t.key,U)})})),kt=Mt.map((function(t){return p({},t,t.values)})).map((function(t){return Object.keys(t).forEach((function(n){var e=t[n]
e&&e.name&&(t[e.name]=0)})),p({},t,{date:b(t.key,U)})}))
var t=R(wt.map(Et)).reduce((function(t,n){return p({},t,o({},n,0))}),{}),n=wt.reduce((function(t,n){return p({},t,o({},n.name,t[n.name]+=n.value))}),t)
J=tt||function(t){var n=Object.keys(t).sort((function(n,e){return t[n]>t[e]?-1:t[n]===t[e]?0:1})),e=n.indexOf("Other")
if(e>=0){var r=n.splice(e,1)
n=n.concat(r)}return n}(n)
var e=f.stack().keys(J).order(f.stackOrderNone).offset(f.stackOffsetNone)
ct=e(kt),ot=function(t){return 0===q?t:t.map((function(t){return t.map((function(t){return t[0]=q,t})),t}))}(e(At))}(),A="number"===U?"logarithmic"===H?s.scaleLog().domain(n.extent(Mt,(function(t){return t.date}))).rangeRound([0,bt]):s.scaleLinear().domain(n.extent(Mt,(function(t){return t.date}))).rangeRound([0,bt]):s.scaleTime().domain(n.extent(Mt,(function(t){return t.date}))).rangeRound([0,bt]),w=It(),k=Dt?jt.maxY:n.max([(v=R(wt.map((function(t){return t.name}))),_=n.max(At,(function(t){var e=v.map((function(n){return t[n]}))
return n.sum(e)})),_),q]),P=s.scaleLinear().domain([w,k]).rangeRound([_t,0]).nice(),K=J.reduce((function(t,n,e){return p({},t,o({},n,W[e]))}),{}),function(n){xt||(xt=h.select(n).append("svg").classed("britechart stacked-area",!0),function(){var n=xt.append("g").classed("container-group",!0).attr("transform","translate("+t.left+","+t.top+")")
n.append("g").classed("x-axis-group",!0).append("g").classed("x axis",!0),n.selectAll(".x-axis-group").append("g").classed("month-axis",!0),n.append("g").classed("y-axis-group axis",!0),n.append("g").classed("grid-lines-group",!0),n.append("g").classed("y-axis-label",!0),n.append("g").classed("chart-group",!0),n.append("g").classed("metadata-group",!0)}()),xt.attr("width",e).attr("height",y)}(this),function(){var n=void 0,i=void 0
if("number"===U)n=x(Mt,e),i=null,C="logarithmic"===H?r.axisBottom(A).ticks(n.tick,"e").tickFormat((function(t){var n=Math.log(t)/Math.LN10
return Math.abs(Math.round(n)-n)<1e-6?"10^"+Math.round(n):""})):r.axisBottom(A).ticks(n.tick).tickFormat(Pt)
else{if("custom"===nt&&"string"==typeof rt)n={tick:et,format:d.timeFormat(rt)},i=null
else{var a=m(Mt,e,nt,it)
n=a.minor,i=a.major,D=r.axisBottom(A).ticks(i.tick).tickSize(0,0).tickFormat(i.format)}C=r.axisBottom(A).ticks(n.tick).tickSize(10,0).tickPadding(5).tickFormat(n.format)}B=r.axisRight(P).ticks(z).tickSize([0]).tickPadding(5).tickFormat(Pt),function(n,e){xt.select(".grid-lines-group").selectAll("line").remove()
var r=It()<0
"horizontal"!==Ot&&"full"!==Ot||xt.select(".grid-lines-group").selectAll("line.horizontal-grid-line").data(P.ticks(e)).enter().append("line").attr("class","horizontal-grid-line").attr("x1",-45).attr("x2",bt).attr("y1",(function(t){return P(t)})).attr("y2",(function(t){return P(t)})).classed("horizontal-grid-line--highlighted",(function(t){return r&&0===t})),"vertical"!==Ot&&"full"!==Ot||xt.select(".grid-lines-group").selectAll("line.vertical-grid-line").data(A.ticks(n)).enter().append("line").attr("class","vertical-grid-line").attr("y1",0).attr("y2",_t).attr("x1",(function(t){return A(t)})).attr("x2",(function(t){return A(t)})),xt.select(".grid-lines-group").selectAll("line.extended-x-line").data([0]).enter().append("line").attr("class","extended-x-line").attr("x1",-45).attr("x2",bt).attr("y1",y-t.bottom-t.top).attr("y2",y-t.bottom-t.top)}(n.tick,z)}(),xt.select(".x-axis-group .axis.x").attr("transform","translate( 0, "+_t+" )").call(C),"custom"!==nt&&"number"!==U&&xt.select(".x-axis-group .month-axis").attr("transform","translate(0, "+(_t+30)+")").call(D),xt.select(".y-axis-group.axis").attr("transform","translate( -15, 0)").call(B).call(Bt),Y&&(G&&xt.selectAll(".y-axis-label-text").remove(),G=xt.select(".y-axis-label").append("text").classed("y-axis-label-text",!0).attr("x",-_t/2).attr("y",V).attr("text-anchor","middle").attr("transform","rotate(270 0 0)").text(Y)),function(){if(ut&&(xt.selectAll(".layer-container").remove(),xt.selectAll(".layer").remove(),xt.selectAll(".area-outline").remove()),Dt)return t=f.line().x((function(t){return A(t.date)})).y((function(){return P(0)-1})),(n=xt.select(".chart-group")).append("path").attr("class","empty-data-line").attr("d",t(At)).style("stroke","url(#empty-data-line-gradient)"),void n.append("linearGradient").attr("id","empty-data-line-gradient").attr("gradientUnits","userSpaceOnUse").attr("x1",0).attr("x2",A(wt[wt.length-1].date)).attr("y1",0).attr("y2",0).selectAll("stop").data([{offset:"0%",color:X[0]},{offset:"100%",color:X[1]}]).enter().append("stop").attr("offset",(function(t){return t.offset})).attr("stop-color",(function(t){return t.color}))
var t,n
lt=f.area().curve(M[at]).x((function(t){var n=t.data
return A(n.date)})).y0((function(t){return P(t[0])})).y1((function(t){return P(t[1])})),st=f.line().curve(lt.curve()).x((function(t){var n=t.data
return A(n.date)})).y((function(t){return P(t[1])})),vt?((ut=xt.select(".chart-group").selectAll(".layer").data(ct,Et).enter().append("g").classed("layer-container",!0)).append("path").attr("class","layer").attr("d",lt).style("opacity",Z).style("fill",(function(t){var n=t.key
return K[n]})),ut.append("path").attr("class","area-outline").attr("d",st).style("stroke",(function(t){var n=t.key
return K[n]})),xt.select(".chart-group").selectAll(".layer").data(ot).transition().delay((function(t,n){return ft[n]})).duration(1e3).ease(yt).attr("d",lt).style("opacity",Z).style("fill",(function(t){var n=t.key
return K[n]})),xt.select(".chart-group").selectAll(".area-outline").data(ot).transition().delay((function(t,n){return ft[n]})).duration(1e3).ease(yt).attr("d",st)):((ut=xt.select(".chart-group").selectAll(".layer").data(ot).enter().append("g").classed("layer-container",!0)).append("path").attr("class","layer").attr("d",lt).style("opacity",Z).style("fill",(function(t){var n=t.key
return K[n]})),ut.append("path").attr("class","area-outline").attr("d",st).style("stroke",(function(t){var n=t.key
return K[n]})),xt.select(".chart-group").selectAll(".layer").attr("d",lt).style("opacity",Z).style("fill",(function(t){var n=t.key
return K[n]})),xt.select(".chart-group").selectAll(".area-outline").attr("class","area-outline").attr("d",st).style("stroke",(function(t){var n=t.key
return K[n]}))),mt||xt.select(".chart-group").selectAll(".area-outline").style("display","none"),ut.exit().transition().style("opacity",0).remove()}(),xt.on("touchmove",(function(t){!function(t,n){Ft.call("customTouchMove",t,n,h.touch(t))}(this,t)})),e>Tt&&!Dt&&(ht&&xt.selectAll(".overlay").remove(),ht=xt.select(".metadata-group").append("rect").attr("class","overlay").attr("y1",0).attr("y2",_t).attr("height",_t).attr("width",bt).attr("fill","rgba(0, 0, 0, 0)").style("display","none"),dt&&xt.selectAll(".vertical-marker-container").remove(),dt=xt.select(".metadata-group").append("g").attr("class","vertical-marker-container").attr("transform","translate(9999, 0)"),pt=dt.selectAll("path").data([{x1:0,y1:0,x2:0,y2:0}]).enter().append("line").classed("vertical-marker",!0).attr("x1",0).attr("y1",_t).attr("x2",0).attr("y2",0),xt.on("mouseover",(function(t){!function(t,n){ht.style("display","block"),pt.classed("bc-is-active",!0),Ft.call("customMouseOver",t,n,h.mouse(t))}(this,t)})).on("mouseout",(function(t){!function(t,n){ht.style("display","none"),pt.classed("bc-is-active",!1),dt.attr("transform","translate(9999, 0)"),Ft.call("customMouseOut",t,n,h.mouse(t))}(this,t)})).on("mousemove",(function(n){!function(n){var e
gt||(e=Mt.map((function(t){return t.date})),gt=(A(e[1])-A(e[0]))/2)
var r,i=function(t,n){if(Array.isArray(t))return t
if(Symbol.iterator in Object(t))return function(t,n){var e=[],r=!0,i=!1,a=void 0
try{for(var o,u=t[Symbol.iterator]();!(r=(o=u.next()).done)&&(e.push(o.value),!n||e.length!==n);r=!0);}catch(t){i=!0,a=t}finally{try{!r&&u.return&&u.return()}finally{if(i)throw a}}return e}(t,n)
throw new TypeError("Invalid attempt to destructure non-iterable instance")}(h.mouse(n),2),o=i[0],u=i[1],c=function(t){var n=Mt.filter((function(n){var e=n.date
return Math.abs(A(e)-t)<=gt}))
if(n.length)return n[0]}(o-t.left),l=void 0
c&&(r=l=A(b(c.key)),dt.attr("transform","translate("+r+",0)"),function(t){var n=t.values,e=0
dt.selectAll(".circle-container").remove()
var r=J.reduce((function(t,e){return[].concat(a(t),[n.find((function(t){return t.name===e}))])}),[])
r.forEach((function(t,n){var i=dt.append("g").classed("circle-container",!0).append("circle").classed("data-point-highlighter",!0).attr("cx",12).attr("cy",0).attr("r",5).style("stroke-width",1.2).style("stroke",K[t.name]).style("cursor","pointer").on("click",(function(){!function(t){$||($=S(xt.select(".metadata-group")),Q=N($))
var n=h.select(t)
n.style("stroke-width",5).style("stroke-opacity",.6).attr("filter","url(#"+Q+")"),j(n,yt,7)}(this),function(t,n){Ft.call("customDataEntryClick",t,n,h.mouse(t))}(this,t)})).on("mouseout",(function(){h.select(this).attr("filter","none")}))
e+=r[n][St],i.attr("transform","translate( -12, "+P(e)+" )")}))}(c),Ft.call("customMouseMove",n,c,K,l,u))}(this)})))}))}function Pt(t){return(T(t)?k:O)(t)}function Bt(t){t.selectAll(".tick text").attr("transform","translate(-20, -8)")}function It(){return Dt?jt.minY:n.min([n.min(wt.map((function(t){return t.value}))),(t=R(wt.map((function(t){return t.name}))),n.min(At,(function(e){var r=t.map((function(t){return e[t]}))
return n.sum(r)}))),q,0])
var t}return Rt.areaCurve=function(t){return arguments.length?(at=t,this):at},Rt.areaOpacity=function(t){return arguments.length?(Z=t,this):Z},Rt.aspectRatio=function(t){return arguments.length?(I=t,this):I},Rt.axisTimeCombinations=w,Rt.colorSchema=function(t){return arguments.length?(W=t,this):W},Rt.dateLabel=function(t){return arguments.length?(Ct=t,this):Ct},Rt.emptyDataConfig=function(t){return arguments.length?(jt=t,this):jt},Rt.grid=function(t){return arguments.length?(Ot=t,this):Ot},Rt.hasOutline=function(t){return arguments.length?(mt=t,this):mt},Rt.height=function(t){return arguments.length?(I&&(e=Math.ceil(t/I)),y=t,this):y},Rt.isAnimated=function(t){return arguments.length?(vt=t,this):vt},Rt.keyLabel=function(t){return arguments.length?(Nt=t,this):Nt},Rt.margin=function(n){return arguments.length?(t=i({},t,n),this):t},Rt.tooltipThreshold=function(t){return arguments.length?(Tt=t,this):Tt},Rt.topicsOrder=function(t){return arguments.length?(tt=t,this):tt},Rt.loadingState=function(t){return arguments.length?(_=t,this):_},Rt.locale=function(t){return arguments.length?(it=t,this):it},Rt.exportChart=function(t,n){g.call(Rt,xt,t,n)},Rt.on=function(){var t=Ft.on.apply(Ft,arguments)
return t===Ft?Rt:t},Rt.valueLabel=function(t){return arguments.length?(St=t,this):St},Rt.width=function(t){return arguments.length?(I&&(y=Math.ceil(t*I)),e=t,this):e},Rt.xAxisCustomFormat=function(t){return arguments.length?(rt=t,this):rt},Rt.xAxisFormat=function(t){return arguments.length?(nt=t,this):nt},Rt.xTicks=function(t){return arguments.length?(et=t,this):et},Rt.yAxisLabel=function(t){return arguments.length?(Y=t,this):Y},Rt.yAxisLabelOffset=function(t){return arguments.length?(V=t,this):V},Rt.yTicks=function(t){return arguments.length?(z=t,this):z},Rt.yAxisBaseline=function(t){return arguments.length?(q=t,this):q},Rt.xAxisValueType=function(t){return arguments.length?(U=t,this):U},Rt.xAxisScale=function(t){return arguments.length?(H=t,this):H},Rt}}.call(n,e,n,t))||(t.exports=r)},function(t,n,e){"use strict"
var r,i=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n]
for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t}
void 0===(r=function(t){var n=e(0),r=e(23),a=(e(27),e(15)),o=e(11),u=e(9),c=e(14),l=e(25),s=e(2),f=(e(8),e(26),e(110)),h=e(17).exportChart,d=e(10),p=e(75),g=p.createFilterContainer,v=p.createGlowWithMatrix,y=p.bounceCircleHighlight,m=e(24)
return m.formatIntegerValue,m.formatDecimalValue,m.isInteger,m.uniqueId,function(){var t={top:20,right:10,bottom:20,left:40},e=960,p=500,m=null,x=void 0,b=void 0,_=6,w=null,M=null,A=void 0,k=void 0,O="",T=void 0,C=void 0,S="",N=void 0,j=void 0,D=void 0,E=void 0,L=void 0,F=-40,R=void 0,P=void 0,B=-40,I=void 0,U=l.curveBasis,H=void 0,z=void 0,q=void 0,Y=void 0,G=-45,V=.24,W=null,X=V,$=10,Q=d.colorSchemas.britecharts,Z=!0,K=!1,J=!1,tt=o.easeCircleIn,nt=!1,et=void 0,rt=void 0,it=void 0,at=a.dispatch("customClick","customMouseMove","customMouseOver","customMouseOut"),ot=function(t){return t.name},ut=function(t){return t.data}
function ct(i){i.each((function(i){var a
b=i.reduce((function(t,n){return n.name=String(n.name),n.x=n.x,n.y=n.y,[].concat(function(t){if(Array.isArray(t)){for(var n=0,e=Array(t.length);n<t.length;n++)e[n]=t[n]
return e}return Array.from(t)}(t),[n])}),[]),rt=e-t.left-t.right,it=p-t.top-t.bottom,function(){var t=[n.min(b,(function(t){return t.x})),n.min(b,(function(t){return t.y}))],e=t[0],r=t[1],i=[n.max(b,(function(t){return t.x})),n.max(b,(function(t){return t.y}))],a=i[0],o=i[1],u=Math.abs(r)<0?Math.abs(r):0
T=c.scaleLinear().domain([e,a]).rangeRound([0,rt]).nice(),N=c.scaleLinear().domain([u,o]).rangeRound([it,0]).nice(),D=c.scaleOrdinal().domain(b.map(ot)).range(Q),j=c.scaleSqrt().domain([u,o]).range([0,$])
var l=D.range()
x=D.domain().reduce((function(t,n,e){return t[n]=l[e],t}),{})}(),function(n){et||(et=s.select(n).append("svg").classed("britechart scatter-plot",!0),function(){var n=et.append("g").classed("container-group",!0).attr("transform","translate("+t.left+", "+t.top+")")
n.append("g").classed("grid-lines-group",!0),n.append("g").classed("chart-group",!0),n.append("g").classed("x-axis-group",!0).append("g").classed("axis x",!0),n.append("g").classed("y-axis-group",!0).append("g").classed("axis y",!0),n.append("g").classed("axis-labels-group",!0),n.append("g").classed("metadata-group",!0)}()),et.attr("width",e).attr("height",p)}(this),k=r.axisBottom(T).ticks(_).tickPadding(5).tickFormat(u.format(O)),C=r.axisLeft(N).ticks(w).tickPadding(5).tickFormat(u.format(S)),A=f.voronoi().x((function(t){return T(t.x)})).y((function(t){return N(t.y)})).extent([[0,0],[rt,it]])(b),et.select(".x-axis-group .axis.x").attr("transform","translate(0, "+it+")").call(k),et.select(".y-axis-group .axis.y").call(C),E&&(L&&et.selectAll(".y-axis-label-text").remove(),L=et.select(".axis-labels-group").append("g").attr("class","y-axis-label").append("text").classed("y-axis-label-text",!0).attr("x",-it/2).attr("y",F-0).attr("text-anchor","middle").attr("transform","rotate(270 0 0)").text(E)),R&&(P&&et.selectAll(".x-axis-label-text").remove(),P=et.selectAll(".axis-labels-group").append("g").attr("class","x-axis-label").append("text").classed("x-axis-label-text",!0).attr("x",rt/2).attr("y",it-B).attr("text-anchor","middle").text(R)),et.select(".grid-lines-group").selectAll("line").remove(),("horizontal"===M||"full"===M)&&et.select(".grid-lines-group").selectAll("line.horizontal-grid-line").data(N.ticks(w)).enter().append("line").attr("class","horizontal-grid-line").attr("x1",0).attr("x2",rt).attr("y1",(function(t){return N(t)})).attr("y2",(function(t){return N(t)})),"vertical"!==M&&"full"!==M||et.select(".grid-lines-group").selectAll("line.vertical-grid-line").data(T.ticks(_)).enter().append("line").attr("class","vertical-grid-line").attr("y1",0).attr("y2",it).attr("x1",(function(t){return T(t)})).attr("x2",(function(t){return T(t)})),et.select(".grid-lines-group").selectAll("line.extended-x-line").data([0]).enter().append("line").attr("class","extended-x-line").attr("x1",0).attr("x2",rt).attr("y1",it).attr("y2",it),W=et.select(".metadata-group").selectAll("circle.highlight-circle").data([1]).enter().append("circle").attr("class","highlight-circle").attr("cursor","pointer"),K&&(q=et.select(".chart-group").append("g").attr("class","crosshair-lines-container"),Y=et.select(".metadata-group").append("g").attr("class","crosshair-labels-container"),q.selectAll("line.highlight-y-line").data([1]).enter().append("line").attr("class","highlight-y-line"),q.selectAll("line.highlight-x-line").data([1]).enter().append("line").attr("class","highlight-x-line"),Y.selectAll("text.highlight-y-legend").data([1]).enter().append("text").attr("class","highlight-y-legend"),Y.selectAll("text.highlight-x-legend").data([1]).enter().append("text").attr("class","highlight-x-legend")),a=et.select(".chart-group").attr("clip-path","url(#scatter-clip-path)").selectAll("circle").data(b).enter(),Z?a.append("circle").attr("class","data-point data-point-highlighter").transition().delay(500).duration(500).ease(tt).style("stroke",(function(t){return x[t.name]})).attr("fill",(function(t){return nt?"#fff":x[t.name]})).attr("fill-opacity",V).attr("r",(function(t){return j(t.y)})).attr("cx",(function(t){return T(t.x)})).attr("cy",(function(t){return N(t.y)})).style("cursor","pointer"):a.append("circle").attr("class","point").attr("class","data-point-highlighter").style("stroke",(function(t){return x[t.name]})).attr("fill",(function(t){return nt?"#fff":x[t.name]})).attr("fill-opacity",V).attr("r",(function(t){return j(t.y)})).attr("cx",(function(t){return T(t.x)})).attr("cy",(function(t){return N(t.y)})).style("cursor","pointer"),et.selectAll(".chart-group").append("clipPath").attr("id","scatter-clip-path").append("rect").attr("width",rt).attr("height",it).attr("x",0).attr("y",0),J&&function(t){I&&I.remove()
var n=[{x:t.x1,y:t.y1},{x:t.x2,y:t.y2}],e=l.line().curve(U).x((function(t){var n=t.x
return T(n)})).y((function(t){var n=t.y
return N(n)})),r=(I=et.selectAll(".chart-group").append("path").attr("class","scatter-trendline").attr("d",e(n)).attr("stroke",Q[0]).attr("stroke-width","2").attr("fill","none")).node().getTotalLength()
I.attr("stroke-dasharray",r+" "+r).attr("stroke-dashoffset",r).transition().delay(1500).duration(2e3).ease(tt).attr("stroke-dashoffset",0)}(function(){var t=b.length,e=0,r=0,i=0,a=0
b.forEach((function(t){e+=t.x,r+=t.y,i+=t.x*t.y,a+=t.x*t.x}))
var o=t*a-e*e,u=(r*a-e*i)/o,c=(t*i-e*r)/o,l=n.min(b,(function(t){return t.x})),s=n.max(b,(function(t){return t.x}))
return{x1:l,y1:c*t+u,x2:s,y2:c*s+u}}()),et.on("mousemove",(function(t){var n,e,r,i;(e=lt(this)).mousePos,r=e.closestPoint,i=ut(r),K&&(n=i,ft(!0),q.selectAll("line.highlight-y-line").attr("stroke",x[n.name]).attr("class","highlight-y-line").attr("x1",T(n.x)-j(n.y)).attr("x2",0).attr("y1",N(n.y)).attr("y2",N(n.y)),q.selectAll("line.highlight-x-line").attr("stroke",x[n.name]).attr("class","highlight-x-line").attr("x1",T(n.x)).attr("x2",T(n.x)).attr("y1",N(n.y)+j(n.y)).attr("y2",it),Y.selectAll("text.highlight-y-legend").attr("text-anchor","middle").attr("fill",x[n.name]).attr("class","highlight-y-legend").attr("y",N(n.y)+j(n.y)/2).attr("x",G).text(""+u.format(S)(n.y)),Y.selectAll("text.highlight-x-legend").attr("text-anchor","middle").attr("fill",x[n.name]).attr("class","highlight-x-legend").attr("transform","translate(0, "+(it-G)+")").attr("x",T(n.x)-j(n.y)/2).text(""+u.format(O)(n.x))),function(t){st(),H||(H=g(et.select(".metadata-group")),z=v(H)),W.attr("opacity",1).attr("stroke",(function(){return x[t.name]})).attr("fill",(function(){return x[t.name]})).attr("fill-opacity",V).attr("cx",(function(){return T(t.x)})).attr("cy",(function(){return N(t.y)})).attr("r",(function(){return j(t.y)})).style("stroke-width",10).style("stroke-opacity",X),W.attr("filter","url(#"+z+")")}(i),at.call("customMouseMove",this,i,s.mouse(this),[rt,it])})).on("mouseover",(function(t){!function(t,n){at.call("customMouseOver",t,n,s.mouse(t))}(this,t)})).on("mouseout",(function(t){!function(t,n){st(),K&&ft(!1),at.call("customMouseOut",t,n,s.mouse(t))}(this,t)})).on("click",(function(){var t,n,e
t=lt(this).closestPoint,n=ut(t),y(W,tt,j((e=n).y),j(2*e.y)),at.call("customClick",this,n,s.mouse(this),[rt,it])}))}))}function lt(n){var e=s.mouse(n)
return e[0]-=t.left,e[1]-=t.top,{closestPoint:A.find(e[0],e[1]),mousePos:e}}function st(){et.selectAll("circle.highlight-circle").attr("opacity",0)}function ft(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0]?1:0
q.attr("opacity",t),Y.attr("opacity",t)}return ct.aspectRatio=function(t){return arguments.length?(m=t,this):m},ct.circleOpacity=function(t){return arguments.length?(V=t,this):V},ct.colorSchema=function(t){return arguments.length?(Q=t,this):Q},ct.exportChart=function(t,n){h.call(ct,et,t,n)},ct.grid=function(t){return arguments.length?(M=t,this):M},ct.hasCrossHairs=function(t){return arguments.length?(K=t,this):K},ct.hasHollowCircles=function(t){return arguments.length?(nt=t,this):nt},ct.hasTrendline=function(t){return arguments.length?(J=t,this):J},ct.height=function(t){return arguments.length?(m&&(e=Math.ceil(t/m)),p=t,this):p},ct.highlightTextLegendOffset=function(t){return arguments.length?(G=t,this):G},ct.isAnimated=function(t){return arguments.length?(Z=t,this):Z},ct.margin=function(n){return arguments.length?(t=i({},t,n),this):t},ct.maxCircleArea=function(t){return arguments.length?($=t,this):$},ct.on=function(){var t=at.on.apply(at,arguments)
return t===at?ct:t},ct.width=function(t){return arguments.length?(m&&(p=Math.ceil(t*m)),e=t,this):e},ct.xAxisLabel=function(t){return arguments.length?(R=t,this):R},ct.xAxisLabelOffset=function(t){return arguments.length?(B=t,this):B},ct.xAxisFormat=function(t){return arguments.length?(O=t,this):O},ct.xTicks=function(t){return arguments.length?(_=t,this):_},ct.yAxisFormat=function(t){return arguments.length?(S=t,this):S},ct.yAxisLabel=function(t){return arguments.length?(E=t,this):E},ct.yAxisLabelOffset=function(t){return arguments.length?(F=t,this):F},ct.yTicks=function(t){return arguments.length?(w=t,this):w},ct}}.call(n,e,n,t))||(t.exports=r)},function(t,n,e){"use strict"
var r,i=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n]
for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t},a=function(t,n){if(Array.isArray(t))return t
if(Symbol.iterator in Object(t))return function(t,n){var e=[],r=!0,i=!1,a=void 0
try{for(var o,u=t[Symbol.iterator]();!(r=(o=u.next()).done)&&(e.push(o.value),!n||e.length!==n);r=!0);}catch(t){i=!0,a=t}finally{try{!r&&u.return&&u.return()}finally{if(i)throw a}}return e}(t,n)
throw new TypeError("Invalid attempt to destructure non-iterable instance")}
void 0===(r=function(t){var n=e(0),r=e(23),o=e(16),u=e(27),c=e(15),l=e(11),s=e(22),f=e(14),h=e(2),d=e(76),p=(e(8),e(17).exportChart),g=e(10),v=e(18).bar
return function(){var t={top:40,right:30,bottom:60,left:70},e=960,y=500,m=v,x=void 0,b=void 0,_=void 0,w=void 0,M=void 0,A=void 0,k=null,O={y:-8,x:-20},T=5,C=5,S=g.colorSchemas.britecharts,N=void 0,j=void 0,D=void 0,E=l.easeQuadInOut,L=!1,F=void 0,R=void 0,P=void 0,B=void 0,I=void 0,U=void 0,H=void 0,z=480,q=void 0,Y=void 0,G=-60,V=void 0,W=null,X="name",$="value",Q="group",Z=",f",K=function(t){return t.name},J=function(t){return t.value},tt=function(t){return t.group},nt=!1,et=c.dispatch("customMouseOver","customMouseOut","customMouseMove","customClick")
function rt(i){i.each((function(i){R=e-t.left-t.right,P=y-t.top-t.bottom,function(t){var e
e=t.map((function(t){return tt(t)})),I=e.filter((function(t,n,e){return e.indexOf(t)==n})),H=u.nest().key(K).rollup((function(t){var n={}
return t.forEach((function(t){t&&t[Q]&&(n[t[Q]]=J(t))})),n.values=t,n})).entries(t).map((function(t){return d({},{total:n.sum(n.permute(t.value,I)),key:t.key},t.value)}))}(B=i.reduce((function(t,n){return n.value=+n[$],n.group=n[Q],n.topicName=tt(n),n.name=n[X],[].concat(function(t){if(Array.isArray(t)){for(var n=0,e=Array(t.length);n<t.length;n++)e[n]=t[n]
return e}return Array.from(t)}(t),[n])}),[])),function(){var t=n.max(B.map(J))
L?(x=f.scaleLinear().domain([0,t]).rangeRound([0,R-1]),w=f.scaleBand().domain(B.map(K)).rangeRound([P,0]).padding(.1),M=f.scaleBand().domain(B.map(tt)).rangeRound([w.bandwidth(),0]).padding(.1)):(x=f.scaleBand().domain(B.map(K)).rangeRound([0,R]).padding(.1),b=f.scaleBand().domain(B.map(tt)).rangeRound([0,x.bandwidth()]).padding(.1),w=f.scaleLinear().domain([0,t]).rangeRound([P,0]).nice()),N=f.scaleOrdinal().range(S).domain(B.map(tt)),j=N.domain(B.map(K)).domain().reduce((function(t,n){return B.forEach((function(e){K(e)==n&&(t[e.name]=N(e.group),t[e.group]=N(e.group),t[e.group+n]=N(e.group))})),t}),{})}(),D=H.map((function(t){var n={}
return I.forEach((function(e){n[e]=t[e]})),d({},t,n)})),function(n){F||(F=h.select(n).append("svg").classed("britechart grouped-bar",!0),function(){var n=F.append("g").classed("container-group",!0).attr("transform","translate("+t.left+","+t.top+")")
n.append("g").classed("x-axis-group",!0).append("g").classed("x axis",!0),n.selectAll(".x-axis-group").append("g").classed("month-axis",!0),n.append("g").classed("y-axis-group axis",!0),n.append("g").classed("y-axis-label",!0),n.append("g").classed("grid-lines-group",!0),n.append("g").classed("chart-group",!0),n.append("g").classed("metadata-group",!0)}()),F.attr("width",e).attr("height",y)}(this),function(){var t=L?x:w
F.select(".grid-lines-group").selectAll("line").remove(),("horizontal"===W||"full"===W)&&F.select(".grid-lines-group").selectAll("line.horizontal-grid-line").data(t.ticks(T).slice(1)).enter().append("line").attr("class","horizontal-grid-line").attr("x1",1).attr("x2",R).attr("y1",(function(t){return w(t)})).attr("y2",(function(t){return w(t)})),"vertical"!==W&&"full"!==W||F.select(".grid-lines-group").selectAll("line.vertical-grid-line").data(t.ticks(C).slice(1)).enter().append("line").attr("class","vertical-grid-line").attr("y1",0).attr("y2",P).attr("x1",(function(t){return x(t)})).attr("x2",(function(t){return x(t)})),L?F.select(".grid-lines-group").selectAll("line.extended-y-line").data([0]).enter().append("line").attr("class","extended-y-line").attr("y1",0).attr("y2",P).attr("x1",0).attr("x2",0):F.select(".grid-lines-group").selectAll("line.extended-x-line").data([0]).enter().append("line").attr("class","extended-x-line").attr("x1",0).attr("x2",R).attr("y1",P).attr("y2",P)}(),L?(_=r.axisBottom(x).ticks(C,Z),A=r.axisLeft(w)):(_=r.axisBottom(x),A=r.axisLeft(w).ticks(T,Z)),L?(F.select(".x-axis-group .axis.x").attr("transform","translate( 0, "+P+" )").call(_),F.select(".y-axis-group.axis").attr("transform","translate( 0, 0)").call(A)):(F.select(".x-axis-group .axis.x").attr("transform","translate( 0, "+P+" )").call(_),F.select(".y-axis-group.axis").attr("transform","translate( 0, 0)").call(A).call(it)),q&&(Y&&F.selectAll(".y-axis-label-text").remove(),Y=F.select(".y-axis-label").append("text").classed("y-axis-label-text",!0).attr("x",-P/2).attr("y",G).attr("text-anchor","middle").attr("transform","rotate(270 0 0)").text(q)),function(){U&&F.selectAll(".layer").remove()
var t,e,r=F.select(".chart-group").selectAll(".layer")
V=n.range(20,20*(D.length+1),20),L?(t=r.data(D),e=(U=t.enter().append("g").attr("transform",(function(t){var n=t.key
return"translate(0,"+w(n)+")"})).classed("layer",!0)).selectAll(".bar").data((function(t){return t.values})).enter().append("rect").classed("bar",!0).attr("x",1).attr("y",(function(t){return M(tt(t))})).attr("height",M.bandwidth()).attr("fill",(function(t){var n=t.group
return j[n]})),nt?e.style("opacity",.24).transition().delay((function(t,n){return V[n]})).duration(1e3).ease(E).tween("attr.width",ct):e.attr("width",(function(t){return x(J(t))}))):function(t){var n=t.data(D),e=(U=n.enter().append("g").attr("transform",(function(t){var n=t.key
return"translate("+x(n)+",0)"})).classed("layer",!0)).selectAll(".bar").data((function(t){return t.values})).enter().append("rect").classed("bar",!0).attr("x",(function(t){return b(tt(t))})).attr("y",(function(t){var n=t.value
return w(n)})).attr("width",b.bandwidth).attr("fill",(function(t){var n=t.group
return j[n]}))
nt?e.style("opacity",.24).transition().delay((function(t,n){return V[n]})).duration(1e3).ease(E).tween("attr.height",lt):e.attr("height",(function(t){return P-w(J(t))}))}(r),r.exit().transition().style("opacity",0).remove()}(),e>z&&F.on("mouseover",(function(t){!function(t,n){et.call("customMouseOver",t,n,h.mouse(t))}(this,t)})).on("mouseout",(function(t){!function(t,n){F.select(".metadata-group").attr("transform","translate(9999, 0)"),et.call("customMouseOut",t,n,h.mouse(t))}(this,t)})).on("mousemove",(function(n){var e,r,i,o,u,c,l,s,f
e=at(this),i=(r=a(e,2))[0],o=r[1],c=void 0,l=void 0,(u=L?ut(o):ot(i))&&(L?(c=i-t.left,l=w(u.key)+w.bandwidth()/2):(c=x(u.key)+b(u[Q]),l=o-t.bottom),s=c,f=l,F.select(".metadata-group").attr("transform","translate("+s+","+f+")"),et.call("customMouseMove",this,u,j,c,l))})).on("click",(function(t){var n,e,r,i,o
n=at(this),r=(e=a(n,2))[0],i=e[1],o=L?ut(i):ot(r),et.call("customClick",this,o,h.mouse(this))})),F.selectAll(".bar").on("mouseover",(function(t){!function(t,n){h.select(t).attr("fill",(function(){return o.color(j[n.group]).darker()}))}(this,t)})).on("mouseout",(function(t){!function(t,n){h.select(t).attr("fill",(function(){return j[n.group]}))}(this,t)}))}))}function it(t){t.selectAll(".tick text").attr("transform","translate("+O.x+", "+O.y+")")}function at(t){return h.mouse(t)}function ot(n){var e=n-t.left,r=b.bandwidth(),i=[]
return D.forEach((function(t){var n=t.values.find((function(t){return Math.abs(e>=x(t[X])+b(t[Q]))&&Math.abs(e-b(t[Q])-x(t[X])<=r)}))
n&&(n.values=t.values,n.key=n.name,i.push(n))})),i.length?i[0]:void 0}function ut(n){var e=n-t.bottom,r=w.bandwidth(),i=[]
return D.map((function(t){var n=t.values.find((function(t){return Math.abs(e>=w(t[X]))&&Math.abs(e-w(t[X])<=2*r)}))
n&&(n.values=t.values,n.key=n.name,i.push(n))})),i.length?i[0]:void 0}function ct(t){var n=h.select(this),e=s.interpolateRound(0,x(J(t))),r=s.interpolateNumber(0,1)
return function(t){n.attr("width",e(t)).style("opacity",r(t))}}function lt(t){var n=h.select(this),e=s.interpolateRound(0,P-w(J(t))),r=s.interpolateRound(P,w(J(t))),i=s.interpolateNumber(0,1)
return function(t){n.attr("y",r(t)).attr("height",e(t)).style("opacity",i(t))}}return rt.aspectRatio=function(t){return arguments.length?(k=t,this):k},rt.colorSchema=function(t){return arguments.length?(S=t,this):S},rt.exportChart=function(t,n){p.call(rt,F,t,n)},rt.groupLabel=function(t){return arguments.length?(Q=t,this):Q},rt.grid=function(t){return arguments.length?(W=t,this):W},rt.height=function(t){return arguments.length?(k&&(e=Math.ceil(t/k)),y=t,this):y},rt.isHorizontal=function(t){return arguments.length?(L=t,this):L},rt.isAnimated=function(t){return arguments.length?(nt=t,this):nt},rt.loadingState=function(t){return arguments.length?(m=t,this):m},rt.margin=function(n){return arguments.length?(t=i({},t,n),this):t},rt.nameLabel=function(t){return arguments.length?(X=t,this):X},rt.yTicks=function(t){return arguments.length?(T=t,this):T},rt.on=function(){var t=et.on.apply(et,arguments)
return t===et?rt:t},rt.tooltipThreshold=function(t){return arguments.length?(z=t,this):z},rt.valueLabel=function(t){return arguments.length?($=t,this):$},rt.valueLabelFormat=function(t){return arguments.length?(Z=t,this):Z},rt.width=function(t){return arguments.length?(k&&(y=Math.ceil(t*k)),e=t,this):e},rt.xTicks=function(t){return arguments.length?(C=t,this):C},rt.yAxisLabel=function(t){return arguments.length?(q=t,this):q},rt.yAxisLabelOffset=function(t){return arguments.length?(G=t,this):G},rt.yTickTextOffset=function(t){return arguments.length?(O=t,this):O},rt}}.call(n,e,n,t))||(t.exports=r)},function(t,n,e){"use strict"
var r,i=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n]
for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t},a=function(t,n){if(Array.isArray(t))return t
if(Symbol.iterator in Object(t))return function(t,n){var e=[],r=!0,i=!1,a=void 0
try{for(var o,u=t[Symbol.iterator]();!(r=(o=u.next()).done)&&(e.push(o.value),!n||e.length!==n);r=!0);}catch(t){i=!0,a=t}finally{try{!r&&u.return&&u.return()}finally{if(i)throw a}}return e}(t,n)
throw new TypeError("Invalid attempt to destructure non-iterable instance")}
void 0===(r=function(t){var n=e(0),r=e(23),o=e(16),u=e(27),c=e(15),l=e(11),s=e(22),f=e(14),h=e(25),d=e(2),p=e(76),g=(e(8),e(17).exportChart),v=e(10),y=e(18).bar
return function(){var t={top:40,right:30,bottom:60,left:70},e=960,m=500,x=y,b=void 0,_=void 0,w=void 0,M=void 0,A=null,k=.1,O=void 0,T=5,C=5,S=1,N=v.colorSchemas.britecharts,j=void 0,D=void 0,E=void 0,L=l.easeQuadInOut,F=!1,R=void 0,P=void 0,B=void 0,I=void 0,U=void 0,H=void 0,z=void 0,q=!1,Y=480,G=void 0,V=void 0,W=-60,X=void 0,$=null,Q="name",Z="value",K="stack",J=",f",tt=function(t){return t[Q]},nt=function(t){return t[K]},et=function(t){return isNaN(t)||t<0?0:t},rt=!1,it=c.dispatch("customMouseOver","customMouseOut","customMouseMove","customClick")
function at(i){i.each((function(i){var o,c
P=e-t.left-t.right,B=m-t.top-t.bottom,function(t){H=function(t){return t.filter((function(t,n,e){return e.indexOf(t)==n}))}(t.map((function(t){return t.stack}))),q&&(H=H.reverse()),U=u.nest().key(tt).rollup((function(t){var n={}
return t.forEach((function(t){t&&t[K]&&(n[t[K]]=function(t){return t[Z]}(t))})),n.values=t,n})).entries(t).map((function(t){return p({},{total:n.sum(n.permute(t.value,H)),key:t.key},t.value)}))}(I=i.reduce((function(t,n){return n.value=+n[Z],n.stack=n[K],n.topicName=nt(n),n.name=n[Q],[].concat(function(t){if(Array.isArray(t)){for(var n=0,e=Array(t.length);n<t.length;n++)e[n]=t[n]
return e}return Array.from(t)}(t),[n])}),[])),function(){var t=n.max(U.map((function(t){return t.total})))
F?(b=f.scaleLinear().domain([0,t]).rangeRound([0,P-1]),w=f.scaleBand().domain(I.map(tt)).rangeRound([B,0]).padding(k)):(b=f.scaleBand().domain(I.map(tt)).rangeRound([0,P]).padding(k),w=f.scaleLinear().domain([0,t]).rangeRound([B,0]).nice()),j=f.scaleOrdinal().range(N).domain(I.map(nt)),D=j.domain(I.map(nt)).domain().reduce((function(t,n){return t[n]=j(n),t}),{})}(),o=h.stack().keys(H),c=U.map((function(t){var n={}
return H.forEach((function(e){n[e]=t[e]})),p({},t,n)})),E=o(c),function(n){R||(R=d.select(n).append("svg").classed("britechart stacked-bar",!0),function(){var n=R.append("g").classed("container-group",!0).attr("transform","translate("+t.left+","+t.top+")")
n.append("g").classed("x-axis-group",!0).append("g").classed("x axis",!0),n.selectAll(".x-axis-group").append("g").classed("month-axis",!0),n.append("g").classed("y-axis-group axis",!0),n.append("g").classed("grid-lines-group",!0),n.append("g").classed("chart-group",!0),n.append("g").classed("y-axis-label",!0),n.append("g").classed("metadata-group",!0)}()),R.attr("width",e).attr("height",m)}(this),function(){var t=F?b:w
R.select(".grid-lines-group").selectAll("line").remove(),("horizontal"===$||"full"===$)&&R.select(".grid-lines-group").selectAll("line.horizontal-grid-line").data(t.ticks(T).slice(1)).enter().append("line").attr("class","horizontal-grid-line").attr("x1",1).attr("x2",P).attr("y1",(function(t){return w(t)})).attr("y2",(function(t){return w(t)})),"vertical"!==$&&"full"!==$||R.select(".grid-lines-group").selectAll("line.vertical-grid-line").data(t.ticks(C).slice(1)).enter().append("line").attr("class","vertical-grid-line").attr("y1",0).attr("y2",B).attr("x1",(function(t){return b(t)})).attr("x2",(function(t){return b(t)})),F?R.select(".grid-lines-group").selectAll("line.extended-y-line").data([0]).enter().append("line").attr("class","extended-y-line").attr("y1",0).attr("y2",B).attr("x1",0).attr("x2",0):R.select(".grid-lines-group").selectAll("line.extended-x-line").data([0]).enter().append("line").attr("class","extended-x-line").attr("x1",0).attr("x2",P).attr("y1",B).attr("y2",B)}(),F?(_=r.axisBottom(b).ticks(C,J),M=r.axisLeft(w)):(_=r.axisBottom(b),M=r.axisLeft(w).ticks(T,J)),F?(R.select(".x-axis-group .axis.x").attr("transform","translate( 0, "+B+" )").call(_),R.select(".y-axis-group.axis").attr("transform","translate( 0, 0)").call(M)):(R.select(".x-axis-group .axis.x").attr("transform","translate( 0, "+B+" )").call(_),R.select(".y-axis-group.axis").attr("transform","translate( 0, 0)").call(M).call(ot)),G&&(V&&R.selectAll(".y-axis-label-text").remove(),V=R.select(".y-axis-label").append("text").classed("y-axis-label-text",!0).attr("x",-B/2).attr("y",W).attr("text-anchor","middle").attr("transform","rotate(270 0 0)").text(G)),function(){z&&R.selectAll(".layer").remove()
var t,e,r=R.select(".chart-group").selectAll(".layer")
X=n.range(20,20*(E[0].length+1),20),F?(t=r.data(E),e=(z=t.enter().append("g").attr("fill",(function(t){var n=t.key
return D[n]})).classed("layer",!0)).selectAll(".bar").data((function(t){return ut(t)})).enter().append("rect").classed("bar",!0).attr("x",(function(t){return b(t[0])})).attr("y",(function(t){return w(t.data.key)})).attr("height",w.bandwidth()),rt?e.style("opacity",.24).transition().delay((function(t,n){return X[n]})).duration(1e3).ease(L).tween("attr.width",dt):e.attr("width",(function(t){return b(t[1]-t[0])}))):function(t){var n=t.data(E),e=(z=n.enter().append("g").attr("fill",(function(t){var n=t.key
return D[n]})).classed("layer",!0)).selectAll(".bar").data((function(t){return ut(t)})).enter().append("rect").classed("bar",!0).attr("x",(function(t){return b(t.data.key)})).attr("y",(function(t){return w(t[1])})).attr("width",b.bandwidth)
rt?e.style("opacity",.24).transition().delay((function(t,n){return X[n]})).duration(1e3).ease(L).tween("attr.height",pt):e.attr("height",(function(t){return w(t[0])-w(t[1])}))}(r),r.exit().transition().style("opacity",0).remove()}(),e>Y&&R.on("mouseover",(function(t){!function(t,n){it.call("customMouseOver",t,n,d.mouse(t))}(this,t)})).on("mouseout",(function(t){!function(t,n){R.select(".metadata-group").attr("transform","translate(9999, 0)"),it.call("customMouseOut",t,n,d.mouse(t))}(this,t)})).on("mousemove",(function(n){var e,r,i,o,u,c,l,s,f
e=ct(this),i=(r=a(e,2))[0],o=r[1],c=void 0,l=void 0,(u=F?st(o):lt(i))&&(F?(c=i-t.left,l=w(u.key)+w.bandwidth()/2):(c=b(u.key)+t.left,l=o-t.bottom),s=c,f=l,R.select(".metadata-group").attr("transform","translate("+s+","+f+")"),it.call("customMouseMove",this,u,D,c,l))})).on("click",(function(t){var n,e,r,i,o
n=ct(this),r=(e=a(n,2))[0],i=e[1],o=F?st(i):lt(r),it.call("customClick",this,o,d.mouse(this))})),R.selectAll(".bar").on("mouseover",ft).on("mouseout",ht)}))}function ot(t){t.selectAll(".tick text").attr("transform","translate(-20, -8)")}function ut(t){return t.map((function(t){for(var n=0;n<t.length;n++)t[n]=et(t[n])
return t}))}function ct(t){return d.mouse(t)}function lt(n){var e=n-t.left
return U.find((function(t){var n=t.key,r=b(n),i=r+b.bandwidth()
return e>=r&&e<i}))}function st(n){var e=n-t.top
return U.find((function(t){var n=t.key,r=w(n),i=r+w.bandwidth()
return e>=r&&e<i}))}function ft(){var t=this
d.select(this).attr("fill",(function(){return o.color(d.select(t.parentNode).attr("fill")).darker()}))}function ht(){var t=this
d.select(this).attr("fill",(function(){return d.select(t.parentNode).attr("fill")}))}function dt(t){var n=d.select(this),e=s.interpolateRound(0,b(t[1]-t[0])),r=s.interpolateNumber(0,1)
return function(t){n.attr("width",e(t)).style("opacity",r(t))}}function pt(t){var n=w(t[0])-w(t[1]),e=d.select(this),r=s.interpolateRound(0,et(n)),i=s.interpolateNumber(0,1)
return function(t){e.attr("height",r(t)).style("opacity",i(t))}}return at.aspectRatio=function(t){return arguments.length?(A=t,this):A},at.betweenBarsPadding=function(t){return arguments.length?(k=t,this):k},at.colorSchema=function(t){return arguments.length?(N=t,this):N},at.exportChart=function(t,n){g.call(at,R,t,n)},at.grid=function(t){return arguments.length?($=t,this):$},at.hasPercentage=function(t){return arguments.length?(J=t?"%":",f",this):"%"===J},at.height=function(t){return arguments.length?(A&&(e=Math.ceil(t/A)),m=t,this):m},at.isHorizontal=function(t){return arguments.length?(F=t,this):F},at.hasReversedStacks=function(t){return arguments.length?(q=t,this):q},at.isAnimated=function(t){return arguments.length?(rt=t,this):rt},at.locale=function(t){return arguments.length?(O=t,this):O},at.margin=function(n){return arguments.length?(t=i({},t,n),this):t},at.nameLabel=function(t){return arguments.length?(Q=t,this):Q},at.xTicks=function(t){return arguments.length?(C=t,this):C},at.yTicks=function(t){return arguments.length?(T=t,this):T},at.loadingState=function(t){return arguments.length?(x=t,this):x},at.on=function(){var t=it.on.apply(it,arguments)
return t===it?at:t},at.percentageAxisToMaxRatio=function(t){return arguments.length?(S=t,this):S},at.stackLabel=function(t){return arguments.length?(K=t,this):K},at.tooltipThreshold=function(t){return arguments.length?(Y=t,this):Y},at.valueLabel=function(t){return arguments.length?(Z=t,this):Z},at.valueLabelFormat=function(t){return arguments.length?(J=t,this):J},at.width=function(t){return arguments.length?(A&&(m=Math.ceil(t*A)),e=t,this):e},at.yAxisLabel=function(t){return arguments.length?(G=t,this):G},at.yAxisLabelOffset=function(t){return arguments.length?(W=t,this):W},at}}.call(n,e,n,t))||(t.exports=r)},function(t,n,e){"use strict"
var r,i=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n]
for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t}
void 0===(r=function(t){var n=e(0),r=e(2),a=e(14),o=(e(8),e(22)),u=e(17).exportChart,c=e(10)
return function(){var t={top:40,right:20,bottom:20,left:40},e=780,l=270,s=void 0,f=void 0,h=void 0,d=30,p=void 0,g=c.colorSchemas.red,v=void 0,y=["Mo","Tu","We","Th","Fr","Sa","Su"],m=["00h","01h","02h","03h","04h","05h","06h","07h","08h","09h","10h","11h","12h","13h","14h","15h","16h","17h","18h","19h","20h","21h","22h","23h"],x=function(t){return t.value}
function b(i){i.each((function(i){var u,c
f=i.reduce((function(t,n){var e=n.day,r=n.hour,i=n.value
return[].concat(function(t){if(Array.isArray(t)){for(var n=0,e=Array(t.length);n<t.length;n++)e[n]=t[n]
return e}return Array.from(t)}(t),[{day:+e,hour:+r,value:+i}])}),[]),t.left,t.right,t.top,t.bottom,p=a.scaleLinear().range([g[0],g[g.length-1]]).domain(n.extent(f,x)).interpolate(o.interpolateHcl),function(n){s||(s=r.select(n).append("svg").classed("britechart heatmap",!0),function(){var n=s.append("g").classed("container-group",!0).attr("transform","translate("+t.left+", "+t.top+")")
n.append("g").classed("chart-group",!0),n.append("g").classed("day-labels-group",!0),n.append("g").classed("hour-labels-group",!0),n.append("g").classed("metadata-group",!0)}()),s.attr("width",e).attr("height",l)}(this),u=s.select(".day-labels-group"),s.select(".day-labels-group").selectAll(".day-label").data(y).enter().append("text").text((function(t){return t})).attr("x",0).attr("y",(function(t,n){return n*d})).style("text-anchor","start").style("dominant-baseline","central").attr("class","day-label"),u.attr("transform","translate(-30, "+d/2+")"),c=s.select(".hour-labels-group"),s.select(".hour-labels-group").selectAll(".hour-label").data(m).enter().append("text").text((function(t){return t})).attr("y",0).attr("x",(function(t,n){return n*d})).style("text-anchor","middle").style("dominant-baseline","central").attr("class","hour-label"),c.attr("transform","translate("+d/2+", -20)"),(h=s.select(".chart-group").selectAll(".box").data(f)).enter().append("rect").classed("box",!0).attr("width",d).attr("height",d).attr("x",(function(t){return t.hour*d})).attr("y",(function(t){return t.day*d})).style("opacity",.2).style("fill","#BBBBBB").style("stroke","#FFFFFF").style("stroke-width",2).transition().duration(2e3).style("fill",(function(t){var n=t.value
return p(n)})).style("opacity",1),h.exit().remove()}))}return b.boxSize=function(t){return arguments.length?(d=t,this):d},b.colorSchema=function(t){return arguments.length?(g=t,this):g},b.exportChart=function(t,n){u.call(b,s,t,n)},b.yAxisLabels=function(t){return arguments.length?(v=t,this):v},b.height=function(t){return arguments.length?(l=t,this):l},b.margin=function(n){return arguments.length?(t=i({},t,n),this):t},b.width=function(t){return arguments.length?(e=t,this):e},b}}.call(n,e,n,t))||(t.exports=r)},function(t,n,e){"use strict"
var r,i=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n]
for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t}
void 0===(r=function(t){var n=e(0),r=e(23),a=e(15),o=e(11),u=e(9),c=e(14),l=e(2),s=(e(8),e(17).exportChart),f=e(18).line
return function(){var t={top:20,right:20,bottom:30,left:40},e=960,h=500,d=f,p=o.easeQuadInOut,g=void 0,v=void 0,y=void 0,m=void 0,x=void 0,b=6,_=void 0,w=void 0,M=void 0,A=void 0,k=void 0,O=void 0,T=80,C=-20,S=void 0,N=void 0,j=void 0,D=a.dispatch("customMouseOver","customMouseOut","customMouseMove"),E=u.format(".3"),L=function(t){return t.key},F=function(t){return t.value}
function R(i){i.each((function(i){var a
v=e-t.left-t.right,y=h-t.top-t.bottom,g=i.reduce((function(t,n){return n.value=+n.value,n.key=String(n.key),[].concat(function(t){if(Array.isArray(t)){for(var n=0,e=Array(t.length);n<t.length;n++)e[n]=t[n]
return e}return Array.from(t)}(t),[n])}),[]),m=c.scaleBand().domain(g.map(L)).rangeRound([0,v]).paddingInner(0),x=c.scaleLinear().domain([0,n.max(g,F)]).rangeRound([y,0]),_=r.axisBottom(m),A=r.axisLeft(x).ticks(b).tickPadding(8).tickFormat(E),function(n){S||(S=l.select(n).append("svg").classed("britechart step-chart",!0),function(){var n=S.append("g").classed("container-group",!0).attr("transform","translate("+t.left+", "+t.top+")")
n.append("g").classed("grid-lines-group",!0),n.append("g").classed("chart-group",!0),n.append("g").classed("x-axis-group axis",!0).append("g").classed("x-axis-label",!0),n.append("g").classed("y-axis-group axis",!0).append("g").classed("y-axis-label",!0),n.append("g").classed("metadata-group",!0)}()),S.attr("width",e).attr("height",h)}(this),N&&S.selectAll(".horizontal-grid-line").remove(),j&&S.selectAll(".extended-x-line").remove(),N=S.select(".grid-lines-group").selectAll("line.horizontal-grid-line").data(x.ticks(b)).enter().append("line").attr("class","horizontal-grid-line").attr("x1",0).attr("x2",v).attr("y1",(function(t){return x(t)})).attr("y2",(function(t){return x(t)})),j&&S.selectAll(".extended-x-line").remove(),j=S.select(".grid-lines-group").selectAll("line.extended-x-line").data([0]).enter().append("line").attr("class","extended-x-line").attr("x1",0).attr("x2",v).attr("y1",y).attr("y2",y),(a=S.select(".chart-group").selectAll(".step").data(g)).enter().append("rect").classed("step",!0).attr("x",v).attr("y",(function(t){var n=t.value
return x(n)})).attr("width",m.bandwidth()).attr("height",(function(t){return y-x(t.value)})).on("mouseover",(function(t){!function(t,n,e,r){D.call("customMouseOver",t,n,l.mouse(t),[e,r])}(this,t,v,y)})).on("mousemove",(function(t){!function(t,n,e,r){D.call("customMouseMove",t,n,l.mouse(t),[e,r])}(this,t,v,y)})).on("mouseout",(function(t){!function(t,n,e,r){D.call("customMouseOut",t,n,l.mouse(t),[e,r])}(this,t,v,y)})).merge(a).transition().ease(p).attr("x",(function(t){var n=t.key
return m(n)})).attr("y",(function(t){return x(t.value)})).attr("width",m.bandwidth()).attr("height",(function(t){return y-x(t.value)})),a.exit().transition().style("opacity",0).remove(),S.select(".x-axis-group.axis").attr("transform","translate(0, "+y+")").call(_),S.selectAll(".x-axis-group .tick text").style("text-anchor","start").attr("transform","rotate(45 -1 10)"),w&&(M&&S.selectAll(".x-axis-label-text").remove(),M=S.select(".x-axis-label").append("text").attr("y",T).attr("text-anchor","middle").classed("x-axis-label-text",!0).attr("x",v/2).text(w)),S.select(".y-axis-group.axis").call(A),k&&(O&&S.selectAll(".y-axis-label-text").remove(),O=S.select(".y-axis-label").append("text").classed("y-axis-label-text",!0).attr("x",-y/2).attr("y",C).attr("text-anchor","middle").attr("transform","rotate(270 0 0)").text(k))}))}return R.exportChart=function(t){s.call(R,S,t)},R.margin=function(n){return arguments.length?(t=i({},t,n),this):t},R.yTicks=function(t){return arguments.length?(b=t,this):b},R.height=function(t){return arguments.length?(h=t,this):h},R.loadingState=function(t){return arguments.length?(d=t,this):d},R.on=function(){var t=D.on.apply(D,arguments)
return t===D?R:t},R.width=function(t){return arguments.length?(e=t,this):e},R.xAxisLabel=function(t){return arguments.length?(w=t,this):w},R.xAxisLabelOffset=function(t){return arguments.length?(T=t,this):T},R.yAxisLabel=function(t){return arguments.length?(k=t,this):k},R.yAxisLabelOffset=function(t){return arguments.length?(C=t,this):C},R}}.call(n,e,n,t))||(t.exports=r)},function(t,n,e){"use strict"
var r,i=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n]
for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t}
function a(t){if(Array.isArray(t)){for(var n=0,e=Array(t.length);n<t.length;n++)e[n]=t[n]
return e}return Array.from(t)}void 0===(r=function(t){var n=e(0),r=e(23),o=e(111),u=e(11),c=e(14),l=e(25),s=e(15),f=e(2),h=(e(38),e(8),e(26)),d=e(10),p=e(74),g=e(34),v=g.axisTimeCombinations,y=g.timeIntervals,m=e(24).uniqueId,x=e(18).line
return function(){var t={top:20,right:20,bottom:30,left:20},e=960,g=500,b=x,_=void 0,w=void 0,M=(u.easeQuadOut,[null,null]),A=void 0,k=void 0,O=void 0,T=void 0,C=void 0,S=null,N=null,j=null,D=void 0,E=void 0,L=void 0,F=void 0,R=void 0,P=d.colorGradients.greenBlue,B=m("brush-area-gradient"),I="timeDay",U=s.dispatch("customBrushStart","customBrushEnd"),H=function(t){return t.value},z=function(t){return t.date}
function q(i){i.each((function(i){var u,s,v
A=e-t.left-t.right,k=g-t.top-t.bottom,s=i,u=JSON.parse(JSON.stringify(s)),_=u.reduce((function(t,n){return n.date=new Date(n.date),n.value=+n.value,[].concat(a(t),[n])}),[]),O=c.scaleTime().domain(n.extent(_,z)).range([0,A]),T=c.scaleLinear().domain([0,n.max(_,H)]).range([k,0]),function(){var t=void 0
if("custom"===S&&"string"==typeof j)t={tick:N,format:h.timeFormat(j)}
else{var n=p.getTimeSeriesAxis(_,e,S)
t=n.minor,n.major}C=r.axisBottom(O).ticks(t.tick).tickSize(10,0).tickPadding([5]).tickFormat(t.format)}(),function(n){w||(w=f.select(n).append("svg").classed("britechart brush-chart",!0),function(){var n=w.append("g").classed("container-group",!0).attr("transform","translate("+t.left+", "+t.top+")")
n.append("g").classed("chart-group",!0),n.append("g").classed("x-axis-group",!0).append("g").classed("x axis",!0),n.append("g").classed("brush-group",!0),n.append("g").classed("metadata-group",!0)}()),w.attr("width",e).attr("height",g)}(this),R||(R=w.select(".metadata-group").append("linearGradient").attr("id",B).attr("gradientUnits","userSpaceOnUse").attr("x1",0).attr("x2",O(_[_.length-1].date)).attr("y1",0).attr("y2",0).selectAll("stop").data([{offset:"0%",color:P[0]},{offset:"100%",color:P[1]}]).enter().append("stop").attr("offset",(function(t){return t.offset})).attr("stop-color",(function(t){return t.color}))),E=o.brushX().extent([[0,0],[A,k]]).on("brush",Y).on("end",G),F&&w.selectAll(".brush-area").remove(),F=l.area().x((function(t){var n=t.date
return O(n)})).y0(k).y1((function(t){var n=t.value
return T(n)})).curve(l.curveBasis),w.select(".chart-group").append("path").datum(_).attr("class","brush-area").attr("d",F),w.select(".x-axis-group .axis.x").attr("transform","translate(0, "+k+")").call(C),(L=w.select(".brush-group").call(E)).selectAll("rect").classed("brush-rect",!0).attr("height",k),L.selectAll(".selection").attr("fill","url(#"+B+")"),v=d.colorSchemasHuman.grey[1],L.selectAll(".handle.brush-rect").style("fill",v)}))}function Y(){var t=f.event.selection
t&&U.call("customBrushStart",this,t.map(O.invert))}function G(){if(f.event.sourceEvent){var t=[null,null],n=f.event.selection
if(n){var e=n.map(O.invert);(t=e.map(y[I].round))[0]>=t[1]&&(t[0]=y[I].floor(e[0]),t[1]=y[I].offset(t[0])),f.select(this).transition().call(f.event.target.move,t.map(O))}U.call("customBrushEnd",this,t)}}function V(t,n){var e=null
null!==t&&(e=[O(new Date(t)),O(new Date(n))]),E.move(L,e)}return q.axisTimeCombinations=v,q.dateRange=function(t){return arguments.length?(M=t,Array.isArray(M)&&V.apply(void 0,a(M)),this):M},q.gradient=function(t){return arguments.length?(P=t,this):P},q.height=function(t){return arguments.length?(g=t,this):g},q.loadingState=function(t){return arguments.length?(b=t,this):b},q.locale=function(t){return arguments.length?(D=t,this):D},q.margin=function(n){return arguments.length?(t=i({},t,n),this):t},q.on=function(){var t=U.on.apply(U,arguments)
return t===U?q:t},q.width=function(t){return arguments.length?(e=t,this):e},q.xAxisCustomFormat=function(t){return arguments.length?(j=t,this):j},q.xAxisFormat=function(t){return arguments.length?(S=t,this):S},q.xTicks=function(t){return arguments.length?(N=t,this):N},q.roundingTimeInterval=function(t){return arguments.length?(I=t,this):I},q}}.call(n,e,n,t))||(t.exports=r)},function(t,n,e){"use strict"
var r,i=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n]
for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t}
void 0===(r=function(t){e(0)
var n=e(11),r=e(23),a=(e(16),e(15),e(9)),o=e(14),u=e(2),c=(e(8),e(17).exportChart),l=e(10)
return function(){var t={top:20,right:20,bottom:30,left:20},e=960,s=150,f=void 0,h=void 0,d=void 0,p=void 0,g=void 0,v=l.colorSchemas.britecharts,y=void 0,m=void 0,x="",b=null,_=6,w=void 0,M=5,A=.5,k=void 0,O=!1,T=void 0,C=void 0,S=void 0,N=void 0,j=void 0,D=void 0,E=void 0,L=void 0,F=[],R=[],P=[],B=void 0,I=(n.easeQuadInOut,function(){return j||D}),U=function(){return h/3}
function H(n){n.each((function(n){var i,c,l,b,H,z
f=e-t.left-t.right,h=s-t.top-t.bottom,c={ranges:(i=n).ranges.slice().sort().reverse(),measures:i.measures.slice().sort().reverse(),markers:i.markers.slice().sort().reverse(),subtitle:i.subtitle,title:i.title},j=c.title,E=c.subtitle,F=c.ranges,P=c.measures,R=c.markers,I()&&(f-=100),l=O?[f,0]:[0,f],d=o.scaleLinear().domain([0,Math.max(F[0],R[0],P[0])]).rangeRound(l).nice(),H=(b=d)(0),k=function(t){return Math.abs(b(t)-H)},p=F.map((function(t,n){return A-.2*n})).reverse(),g=F.map((function(t,n){return.9-.3*n})).reverse(),y=v[0],m=v[1],function(n){B||(B=u.select(n).append("svg").classed("britechart bullet-chart",!0),function(){var n=B.append("g").classed("container-group",!0).attr("transform","translate("+t.left+", "+t.top+")")
n.append("g").classed("grid-lines-group",!0),n.append("g").classed("chart-group",!0),n.append("g").classed("axis-group",!0),n.append("g").classed("metadata-group",!0),I()&&n.selectAll(".chart-group").attr("transform","translate(100, 0)")}()),B.attr("width",e).attr("height",s)}(this),w=r.axisBottom(d).ticks(_).tickPadding(5).tickFormat(a.format(x)),C&&(C.remove(),S.remove(),N.remove()),C=B.select(".chart-group").selectAll("rect.range").data(F).enter().append("rect").attr("fill",y).attr("opacity",(function(t,n){return p[n]})).attr("class",(function(t,n){return"range r"+n})).attr("width",k).attr("height",h).attr("x",O?d:0),S=B.select(".chart-group").selectAll("rect.measure").data(P).enter().append("rect").attr("fill",m).attr("fill-opacity",(function(t,n){return g[n]})).attr("class",(function(t,n){return"measure m"+n})).attr("width",k).attr("height",U).attr("x",O?d:0).attr("y",U),N=B.select(".chart-group").selectAll("line.marker-line").data(R).enter().append("line").attr("class","marker-line").attr("stroke",m).attr("stroke-width",5).attr("opacity",g[0]).attr("x1",d).attr("x2",d).attr("y1",0).attr("y2",h),I()&&(T&&T.remove(),T=B.select(".metadata-group").append("g").classed("legend-group",!0).attr("transform","translate(0, "+h/2+")"),D&&(j=D),T.selectAll("text.bullet-title").data([1]).enter().append("text").attr("class","bullet-title x-axis-label").text(j),(E||L)&&(L&&(E=L),T.selectAll("text.bullet-subtitle").data([1]).enter().append("text").attr("class","bullet-subtitle x-axis-label").attr("y",15).text(E))),z=I()?100:0,B.select(".axis-group").attr("transform","translate("+z+", "+(h+M)+")").call(w),B.select(".axis-group").selectAll("line.extended-x-line").data([0]).enter().append("line").attr("class","extended-x-line").attr("x1",0).attr("x2",f)}))}return H.aspectRatio=function(t){return arguments.length?(b=t,this):b},H.colorSchema=function(t){return arguments.length?(v=t,this):v},H.customTitle=function(t){return arguments.length?(D=t,this):D},H.customSubtitle=function(t){return arguments.length?(L=t,this):L},H.exportChart=function(t,n){c.call(H,B,t,n)},H.height=function(t){return arguments.length?(b&&(e=Math.ceil(t/b)),s=t,this):s},H.isReverse=function(t){return arguments.length?(O=t,this):O},H.margin=function(n){return arguments.length?(t=i({},t,n),this):t},H.numberFormat=function(t){return arguments.length?(x=t,this):x},H.paddingBetweenAxisAndChart=function(t){return arguments.length?(M=t,this):M},H.startMaxRangeOpacity=function(t){return arguments.length?(A=t,this):A},H.ticks=function(t){return arguments.length?(_=t,this):_},H.width=function(t){return arguments.length?(b&&(s=Math.ceil(t*b)),e=t,this):e},H}}.call(n,e,n,t))||(t.exports=r)},function(t,n,e){"use strict"
e.r(n)
var r=function(t){return function(){return t}}
function i(t){return t[0]}function a(t){return t[1]}function o(){this._=null}function u(t){t.U=t.C=t.L=t.R=t.P=t.N=null}function c(t,n){var e=n,r=n.R,i=e.U
i?i.L===e?i.L=r:i.R=r:t._=r,r.U=i,e.U=r,e.R=r.L,e.R&&(e.R.U=e),r.L=e}function l(t,n){var e=n,r=n.L,i=e.U
i?i.L===e?i.L=r:i.R=r:t._=r,r.U=i,e.U=r,e.L=r.R,e.L&&(e.L.U=e),r.R=e}function s(t){for(;t.L;)t=t.L
return t}o.prototype={constructor:o,insert:function(t,n){var e,r,i
if(t){if(n.P=t,n.N=t.N,t.N&&(t.N.P=n),t.N=n,t.R){for(t=t.R;t.L;)t=t.L
t.L=n}else t.R=n
e=t}else this._?(t=s(this._),n.P=null,n.N=t,t.P=t.L=n,e=t):(n.P=n.N=null,this._=n,e=null)
for(n.L=n.R=null,n.U=e,n.C=!0,t=n;e&&e.C;)e===(r=e.U).L?(i=r.R)&&i.C?(e.C=i.C=!1,r.C=!0,t=r):(t===e.R&&(c(this,e),e=(t=e).U),e.C=!1,r.C=!0,l(this,r)):(i=r.L)&&i.C?(e.C=i.C=!1,r.C=!0,t=r):(t===e.L&&(l(this,e),e=(t=e).U),e.C=!1,r.C=!0,c(this,r)),e=t.U
this._.C=!1},remove:function(t){t.N&&(t.N.P=t.P),t.P&&(t.P.N=t.N),t.N=t.P=null
var n,e,r,i=t.U,a=t.L,o=t.R
if(e=a?o?s(o):a:o,i?i.L===t?i.L=e:i.R=e:this._=e,a&&o?(r=e.C,e.C=t.C,e.L=a,a.U=e,e!==o?(i=e.U,e.U=t.U,t=e.R,i.L=t,e.R=o,o.U=e):(e.U=i,i=e,t=e.R)):(r=t.C,t=e),t&&(t.U=i),!r)if(t&&t.C)t.C=!1
else{do{if(t===this._)break
if(t===i.L){if((n=i.R).C&&(n.C=!1,i.C=!0,c(this,i),n=i.R),n.L&&n.L.C||n.R&&n.R.C){n.R&&n.R.C||(n.L.C=!1,n.C=!0,l(this,n),n=i.R),n.C=i.C,i.C=n.R.C=!1,c(this,i),t=this._
break}}else if((n=i.L).C&&(n.C=!1,i.C=!0,l(this,i),n=i.L),n.L&&n.L.C||n.R&&n.R.C){n.L&&n.L.C||(n.R.C=!1,n.C=!0,c(this,n),n=i.L),n.C=i.C,i.C=n.L.C=!1,l(this,i),t=this._
break}n.C=!0,t=i,i=i.U}while(!t.C)
t&&(t.C=!1)}}}
var f=o
function h(t,n,e,r){var i=[null,null],a=R.push(i)-1
return i.left=t,i.right=n,e&&p(i,t,n,e),r&&p(i,n,t,r),L[t.index].halfedges.push(a),L[n.index].halfedges.push(a),i}function d(t,n,e){var r=[n,e]
return r.left=t,r}function p(t,n,e,r){t[0]||t[1]?t.left===e?t[1]=r:t[0]=r:(t[0]=r,t.left=n,t.right=e)}function g(t,n,e,r,i){var a,o=t[0],u=t[1],c=o[0],l=o[1],s=0,f=1,h=u[0]-c,d=u[1]-l
if(a=n-c,h||!(a>0)){if(a/=h,h<0){if(a<s)return
a<f&&(f=a)}else if(h>0){if(a>f)return
a>s&&(s=a)}if(a=r-c,h||!(a<0)){if(a/=h,h<0){if(a>f)return
a>s&&(s=a)}else if(h>0){if(a<s)return
a<f&&(f=a)}if(a=e-l,d||!(a>0)){if(a/=d,d<0){if(a<s)return
a<f&&(f=a)}else if(d>0){if(a>f)return
a>s&&(s=a)}if(a=i-l,d||!(a<0)){if(a/=d,d<0){if(a>f)return
a>s&&(s=a)}else if(d>0){if(a<s)return
a<f&&(f=a)}return!(s>0||f<1)||(s>0&&(t[0]=[c+s*h,l+s*d]),f<1&&(t[1]=[c+f*h,l+f*d]),!0)}}}}}function v(t,n,e,r,i){var a=t[1]
if(a)return!0
var o,u,c=t[0],l=t.left,s=t.right,f=l[0],h=l[1],d=s[0],p=s[1],g=(f+d)/2,v=(h+p)/2
if(p===h){if(g<n||g>=r)return
if(f>d){if(c){if(c[1]>=i)return}else c=[g,e]
a=[g,i]}else{if(c){if(c[1]<e)return}else c=[g,i]
a=[g,e]}}else if(u=v-(o=(f-d)/(p-h))*g,o<-1||o>1)if(f>d){if(c){if(c[1]>=i)return}else c=[(e-u)/o,e]
a=[(i-u)/o,i]}else{if(c){if(c[1]<e)return}else c=[(i-u)/o,i]
a=[(e-u)/o,e]}else if(h<p){if(c){if(c[0]>=r)return}else c=[n,o*n+u]
a=[r,o*r+u]}else{if(c){if(c[0]<n)return}else c=[r,o*r+u]
a=[n,o*n+u]}return t[0]=c,t[1]=a,!0}function y(t,n){var e=t.site,r=n.left,i=n.right
return e===i&&(i=r,r=e),i?Math.atan2(i[1]-r[1],i[0]-r[0]):(e===r?(r=n[1],i=n[0]):(r=n[0],i=n[1]),Math.atan2(r[0]-i[0],i[1]-r[1]))}function m(t,n){return n[+(n.left!==t.site)]}function x(t,n){return n[+(n.left===t.site)]}var b,_=[]
function w(){u(this),this.x=this.y=this.arc=this.site=this.cy=null}function M(t){var n=t.P,e=t.N
if(n&&e){var r=n.site,i=t.site,a=e.site
if(r!==a){var o=i[0],u=i[1],c=r[0]-o,l=r[1]-u,s=a[0]-o,f=a[1]-u,h=2*(c*f-l*s)
if(!(h>=-B)){var d=c*c+l*l,p=s*s+f*f,g=(f*d-l*p)/h,v=(c*p-s*d)/h,y=_.pop()||new w
y.arc=t,y.site=i,y.x=g+o,y.y=(y.cy=v+u)+Math.sqrt(g*g+v*v),t.circle=y
for(var m=null,x=F._;x;)if(y.y<x.y||y.y===x.y&&y.x<=x.x){if(!x.L){m=x.P
break}x=x.L}else{if(!x.R){m=x
break}x=x.R}F.insert(m,y),m||(b=y)}}}}function A(t){var n=t.circle
n&&(n.P||(b=n.N),F.remove(n),_.push(n),u(n),t.circle=null)}var k=[]
function O(){u(this),this.edge=this.site=this.circle=null}function T(t){var n=k.pop()||new O
return n.site=t,n}function C(t){A(t),E.remove(t),k.push(t),u(t)}function S(t){var n=t.circle,e=n.x,r=n.cy,i=[e,r],a=t.P,o=t.N,u=[t]
C(t)
for(var c=a;c.circle&&Math.abs(e-c.circle.x)<P&&Math.abs(r-c.circle.cy)<P;)a=c.P,u.unshift(c),C(c),c=a
u.unshift(c),A(c)
for(var l=o;l.circle&&Math.abs(e-l.circle.x)<P&&Math.abs(r-l.circle.cy)<P;)o=l.N,u.push(l),C(l),l=o
u.push(l),A(l)
var s,f=u.length
for(s=1;s<f;++s)l=u[s],c=u[s-1],p(l.edge,c.site,l.site,i)
c=u[0],(l=u[f-1]).edge=h(c.site,l.site,null,i),M(c),M(l)}function N(t){for(var n,e,r,i,a=t[0],o=t[1],u=E._;u;)if((r=j(u,o)-a)>P)u=u.L
else{if(!((i=a-D(u,o))>P)){r>-P?(n=u.P,e=u):i>-P?(n=u,e=u.N):n=e=u
break}if(!u.R){n=u
break}u=u.R}!function(t){L[t.index]={site:t,halfedges:[]}}(t)
var c=T(t)
if(E.insert(n,c),n||e){if(n===e)return A(n),e=T(n.site),E.insert(c,e),c.edge=e.edge=h(n.site,c.site),M(n),void M(e)
if(e){A(n),A(e)
var l=n.site,s=l[0],f=l[1],d=t[0]-s,g=t[1]-f,v=e.site,y=v[0]-s,m=v[1]-f,x=2*(d*m-g*y),b=d*d+g*g,_=y*y+m*m,w=[(m*b-g*_)/x+s,(d*_-y*b)/x+f]
p(e.edge,l,v,w),c.edge=h(l,t,null,w),e.edge=h(t,v,null,w),M(n),M(e)}else c.edge=h(n.site,c.site)}}function j(t,n){var e=t.site,r=e[0],i=e[1],a=i-n
if(!a)return r
var o=t.P
if(!o)return-1/0
var u=(e=o.site)[0],c=e[1],l=c-n
if(!l)return u
var s=u-r,f=1/a-1/l,h=s/l
return f?(-h+Math.sqrt(h*h-2*f*(s*s/(-2*l)-c+l/2+i-a/2)))/f+r:(r+u)/2}function D(t,n){var e=t.N
if(e)return j(e,n)
var r=t.site
return r[1]===n?r[0]:1/0}var E,L,F,R,P=1e-6,B=1e-12
function I(t,n){return n[1]-t[1]||n[0]-t[0]}function U(t,n){var e,r,i,a=t.sort(I).pop()
for(R=[],L=new Array(t.length),E=new f,F=new f;;)if(i=b,a&&(!i||a[1]<i.y||a[1]===i.y&&a[0]<i.x))a[0]===e&&a[1]===r||(N(a),e=a[0],r=a[1]),a=t.pop()
else{if(!i)break
S(i.arc)}if(function(){for(var t,n,e,r,i=0,a=L.length;i<a;++i)if((t=L[i])&&(r=(n=t.halfedges).length)){var o=new Array(r),u=new Array(r)
for(e=0;e<r;++e)o[e]=e,u[e]=y(t,R[n[e]])
for(o.sort((function(t,n){return u[n]-u[t]})),e=0;e<r;++e)u[e]=n[o[e]]
for(e=0;e<r;++e)n[e]=u[e]}}(),n){var o=+n[0][0],u=+n[0][1],c=+n[1][0],l=+n[1][1]
!function(t,n,e,r){for(var i,a=R.length;a--;)v(i=R[a],t,n,e,r)&&g(i,t,n,e,r)&&(Math.abs(i[0][0]-i[1][0])>P||Math.abs(i[0][1]-i[1][1])>P)||delete R[a]}(o,u,c,l),function(t,n,e,r){var i,a,o,u,c,l,s,f,h,p,g,v,y=L.length,b=!0
for(i=0;i<y;++i)if(a=L[i]){for(o=a.site,u=(c=a.halfedges).length;u--;)R[c[u]]||c.splice(u,1)
for(u=0,l=c.length;u<l;)g=(p=x(a,R[c[u]]))[0],v=p[1],f=(s=m(a,R[c[++u%l]]))[0],h=s[1],(Math.abs(g-f)>P||Math.abs(v-h)>P)&&(c.splice(u,0,R.push(d(o,p,Math.abs(g-t)<P&&r-v>P?[t,Math.abs(f-t)<P?h:r]:Math.abs(v-r)<P&&e-g>P?[Math.abs(h-r)<P?f:e,r]:Math.abs(g-e)<P&&v-n>P?[e,Math.abs(f-e)<P?h:n]:Math.abs(v-n)<P&&g-t>P?[Math.abs(h-n)<P?f:t,n]:null))-1),++l)
l&&(b=!1)}if(b){var _,w,M,A=1/0
for(i=0,b=null;i<y;++i)(a=L[i])&&(M=(_=(o=a.site)[0]-t)*_+(w=o[1]-n)*w)<A&&(A=M,b=a)
if(b){var k=[t,n],O=[t,r],T=[e,r],C=[e,n]
b.halfedges.push(R.push(d(o=b.site,k,O))-1,R.push(d(o,O,T))-1,R.push(d(o,T,C))-1,R.push(d(o,C,k))-1)}}for(i=0;i<y;++i)(a=L[i])&&(a.halfedges.length||delete L[i])}(o,u,c,l)}this.edges=R,this.cells=L,E=F=R=L=null}U.prototype={constructor:U,polygons:function(){var t=this.edges
return this.cells.map((function(n){var e=n.halfedges.map((function(e){return m(n,t[e])}))
return e.data=n.site.data,e}))},triangles:function(){var t=[],n=this.edges
return this.cells.forEach((function(e,r){if(a=(i=e.halfedges).length)for(var i,a,o,u,c,l,s=e.site,f=-1,h=n[i[a-1]],d=h.left===s?h.right:h.left;++f<a;)o=d,d=(h=n[i[f]]).left===s?h.right:h.left,o&&d&&r<o.index&&r<d.index&&(c=o,l=d,((u=s)[0]-l[0])*(c[1]-u[1])-(u[0]-c[0])*(l[1]-u[1])<0)&&t.push([s.data,o.data,d.data])})),t},links:function(){return this.edges.filter((function(t){return t.right})).map((function(t){return{source:t.left.data,target:t.right.data}}))},find:function(t,n,e){for(var r,i,a=this,o=a._found||0,u=a.cells.length;!(i=a.cells[o]);)if(++o>=u)return null
var c=t-i.site[0],l=n-i.site[1],s=c*c+l*l
do{i=a.cells[r=o],o=null,i.halfedges.forEach((function(e){var r=a.edges[e],u=r.left
if(u!==i.site&&u||(u=r.right)){var c=t-u[0],l=n-u[1],f=c*c+l*l
f<s&&(s=f,o=u.index)}}))}while(null!==o)
return a._found=r,null==e||s<=e*e?i.site:null}}
var H=function(){var t=i,n=a,e=null
function o(r){return new U(r.map((function(e,i){var a=[Math.round(t(e,i,r)/P)*P,Math.round(n(e,i,r)/P)*P]
return a.index=i,a.data=e,a})),e)}return o.polygons=function(t){return o(t).polygons()},o.links=function(t){return o(t).links()},o.triangles=function(t){return o(t).triangles()},o.x=function(n){return arguments.length?(t="function"==typeof n?n:r(+n),o):t},o.y=function(t){return arguments.length?(n="function"==typeof t?t:r(+t),o):n},o.extent=function(t){return arguments.length?(e=null==t?null:[[+t[0][0],+t[0][1]],[+t[1][0],+t[1][1]]],o):e&&[[e[0][0],e[0][1]],[e[1][0],e[1][1]]]},o.size=function(t){return arguments.length?(e=null==t?null:[[0,0],[+t[0],+t[1]]],o):e&&[e[1][0]-e[0][0],e[1][1]-e[0][1]]},o}
e.d(n,"voronoi",(function(){return H}))},function(t,n,e){"use strict"
e.r(n)
var r=e(79),i=e(63),a=e(36),o=function(){a.c.preventDefault(),a.c.stopImmediatePropagation()},u=function(t){var n=t.document.documentElement,e=Object(i.a)(t).on("dragstart.drag",o,!0)
"onselectstart"in n?e.on("selectstart.drag",o,!0):(n.__noselect=n.style.MozUserSelect,n.style.MozUserSelect="none")}
function c(t,n){var e=t.document.documentElement,r=Object(i.a)(t).on("dragstart.drag",null)
n&&(r.on("click.drag",o,!0),setTimeout((function(){r.on("click.drag",null)}),0)),"onselectstart"in e?r.on("selectstart.drag",null):(e.style.MozUserSelect=e.__noselect,delete e.__noselect)}var l=e(40),s=e(85),f=e(84),h=e(8),d=function(t){return function(){return t}},p=function(t,n,e){this.target=t,this.type=n,this.selection=e}
function g(){a.c.stopImmediatePropagation()}var v=function(){a.c.preventDefault(),a.c.stopImmediatePropagation()},y={name:"drag"},m={name:"space"},x={name:"handle"},b={name:"center"}
function _(t){return[+t[0],+t[1]]}function w(t){return[_(t[0]),_(t[1])]}function M(t){return function(n){return Object(s.a)(n,a.c.touches,t)}}var A={name:"x",handles:["w","e"].map(D),input:function(t,n){return null==t?null:[[+t[0],n[0][1]],[+t[1],n[1][1]]]},output:function(t){return t&&[t[0][0],t[1][0]]}},k={name:"y",handles:["n","s"].map(D),input:function(t,n){return null==t?null:[[n[0][0],+t[0]],[n[1][0],+t[1]]]},output:function(t){return t&&[t[0][1],t[1][1]]}},O={name:"xy",handles:["n","w","e","s","nw","ne","sw","se"].map(D),input:function(t){return null==t?null:w(t)},output:function(t){return t}},T={overlay:"crosshair",selection:"move",n:"ns-resize",e:"ew-resize",s:"ns-resize",w:"ew-resize",nw:"nwse-resize",ne:"nesw-resize",se:"nwse-resize",sw:"nesw-resize"},C={e:"w",w:"e",nw:"ne",ne:"nw",se:"sw",sw:"se"},S={n:"s",s:"n",nw:"sw",ne:"se",se:"ne",sw:"nw"},N={overlay:1,selection:1,n:null,e:1,s:null,w:-1,nw:-1,ne:1,se:1,sw:-1},j={overlay:1,selection:1,n:-1,e:null,s:1,w:null,nw:-1,ne:-1,se:1,sw:1}
function D(t){return{type:t}}function E(){return!a.c.ctrlKey&&!a.c.button}function L(){var t=this.ownerSVGElement||this
return t.hasAttribute("viewBox")?[[(t=t.viewBox.baseVal).x,t.y],[t.x+t.width,t.y+t.height]]:[[0,0],[t.width.baseVal.value,t.height.baseVal.value]]}function F(){return navigator.maxTouchPoints||"ontouchstart"in this}function R(t){for(;!t.__brush;)if(!(t=t.parentNode))return
return t.__brush}function P(t){var n=t.__brush
return n?n.dim.output(n.selection):null}function B(){return H(A)}function I(){return H(k)}var U=function(){return H(O)}
function H(t){var n,e=L,o=E,s=F,_=!0,O=Object(r.a)("start","brush","end"),P=6
function B(n){var e=n.property("__brush",G).selectAll(".overlay").data([D("overlay")])
e.enter().append("rect").attr("class","overlay").attr("pointer-events","all").attr("cursor",T.overlay).merge(e).each((function(){var t=R(this).extent
Object(i.a)(this).attr("x",t[0][0]).attr("y",t[0][1]).attr("width",t[1][0]-t[0][0]).attr("height",t[1][1]-t[0][1])})),n.selectAll(".selection").data([D("selection")]).enter().append("rect").attr("class","selection").attr("cursor",T.selection).attr("fill","#777").attr("fill-opacity",.3).attr("stroke","#fff").attr("shape-rendering","crispEdges")
var r=n.selectAll(".handle").data(t.handles,(function(t){return t.type}))
r.exit().remove(),r.enter().append("rect").attr("class",(function(t){return"handle handle--"+t.type})).attr("cursor",(function(t){return T[t.type]})),n.each(I).attr("fill","none").attr("pointer-events","all").on("mousedown.brush",z).filter(s).on("touchstart.brush",z).on("touchmove.brush",q).on("touchend.brush touchcancel.brush",Y).style("touch-action","none").style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}function I(){var t=Object(i.a)(this),n=R(this).selection
n?(t.selectAll(".selection").style("display",null).attr("x",n[0][0]).attr("y",n[0][1]).attr("width",n[1][0]-n[0][0]).attr("height",n[1][1]-n[0][1]),t.selectAll(".handle").style("display",null).attr("x",(function(t){return"e"===t.type[t.type.length-1]?n[1][0]-P/2:n[0][0]-P/2})).attr("y",(function(t){return"s"===t.type[0]?n[1][1]-P/2:n[0][1]-P/2})).attr("width",(function(t){return"n"===t.type||"s"===t.type?n[1][0]-n[0][0]+P:P})).attr("height",(function(t){return"e"===t.type||"w"===t.type?n[1][1]-n[0][1]+P:P}))):t.selectAll(".selection,.handle").style("display","none").attr("x",null).attr("y",null).attr("width",null).attr("height",null)}function U(t,n,e){return!e&&t.__brush.emitter||new H(t,n)}function H(t,n){this.that=t,this.args=n,this.state=t.__brush,this.active=0}function z(){if((!n||a.c.touches)&&o.apply(this,arguments)){var e,r,l,s,d,p,w,O,D,E,L,F=this,P=a.c.target.__data__.type,B="selection"===(_&&a.c.metaKey?P="overlay":P)?y:_&&a.c.altKey?b:x,H=t===k?null:N[P],z=t===A?null:j[P],q=R(F),Y=q.extent,G=q.selection,V=Y[0][0],W=Y[0][1],X=Y[1][0],$=Y[1][1],Q=0,Z=0,K=H&&z&&_&&a.c.shiftKey,J=a.c.touches?M(a.c.changedTouches[0].identifier):f.a,tt=J(F),nt=tt,et=U(F,arguments,!0).beforestart()
"overlay"===P?(G&&(D=!0),q.selection=G=[[e=t===k?V:tt[0],l=t===A?W:tt[1]],[d=t===k?X:e,w=t===A?$:l]]):(e=G[0][0],l=G[0][1],d=G[1][0],w=G[1][1]),r=e,s=l,p=d,O=w
var rt=Object(i.a)(F).attr("pointer-events","none"),it=rt.selectAll(".overlay").attr("cursor",T[P])
if(a.c.touches)et.moved=ot,et.ended=ct
else{var at=Object(i.a)(a.c.view).on("mousemove.brush",ot,!0).on("mouseup.brush",ct,!0)
_&&at.on("keydown.brush",(function(){switch(a.c.keyCode){case 16:K=H&&z
break
case 18:B===x&&(H&&(d=p-Q*H,e=r+Q*H),z&&(w=O-Z*z,l=s+Z*z),B=b,ut())
break
case 32:B!==x&&B!==b||(H<0?d=p-Q:H>0&&(e=r-Q),z<0?w=O-Z:z>0&&(l=s-Z),B=m,it.attr("cursor",T.selection),ut())
break
default:return}v()}),!0).on("keyup.brush",(function(){switch(a.c.keyCode){case 16:K&&(E=L=K=!1,ut())
break
case 18:B===b&&(H<0?d=p:H>0&&(e=r),z<0?w=O:z>0&&(l=s),B=x,ut())
break
case 32:B===m&&(a.c.altKey?(H&&(d=p-Q*H,e=r+Q*H),z&&(w=O-Z*z,l=s+Z*z),B=b):(H<0?d=p:H>0&&(e=r),z<0?w=O:z>0&&(l=s),B=x),it.attr("cursor",T[P]),ut())
break
default:return}v()}),!0),u(a.c.view)}g(),Object(h.interrupt)(F),I.call(F),et.start()}function ot(){var t=J(F)
!K||E||L||(Math.abs(t[0]-nt[0])>Math.abs(t[1]-nt[1])?L=!0:E=!0),nt=t,D=!0,v(),ut()}function ut(){var t
switch(Q=nt[0]-tt[0],Z=nt[1]-tt[1],B){case m:case y:H&&(Q=Math.max(V-e,Math.min(X-d,Q)),r=e+Q,p=d+Q),z&&(Z=Math.max(W-l,Math.min($-w,Z)),s=l+Z,O=w+Z)
break
case x:H<0?(Q=Math.max(V-e,Math.min(X-e,Q)),r=e+Q,p=d):H>0&&(Q=Math.max(V-d,Math.min(X-d,Q)),r=e,p=d+Q),z<0?(Z=Math.max(W-l,Math.min($-l,Z)),s=l+Z,O=w):z>0&&(Z=Math.max(W-w,Math.min($-w,Z)),s=l,O=w+Z)
break
case b:H&&(r=Math.max(V,Math.min(X,e-Q*H)),p=Math.max(V,Math.min(X,d+Q*H))),z&&(s=Math.max(W,Math.min($,l-Z*z)),O=Math.max(W,Math.min($,w+Z*z)))}p<r&&(H*=-1,t=e,e=d,d=t,t=r,r=p,p=t,P in C&&it.attr("cursor",T[P=C[P]])),O<s&&(z*=-1,t=l,l=w,w=t,t=s,s=O,O=t,P in S&&it.attr("cursor",T[P=S[P]])),q.selection&&(G=q.selection),E&&(r=G[0][0],p=G[1][0]),L&&(s=G[0][1],O=G[1][1]),G[0][0]===r&&G[0][1]===s&&G[1][0]===p&&G[1][1]===O||(q.selection=[[r,s],[p,O]],I.call(F),et.brush())}function ct(){if(g(),a.c.touches){if(a.c.touches.length)return
n&&clearTimeout(n),n=setTimeout((function(){n=null}),500)}else c(a.c.view,D),at.on("keydown.brush keyup.brush mousemove.brush mouseup.brush",null)
rt.attr("pointer-events","all"),it.attr("cursor",T.overlay),q.selection&&(G=q.selection),function(t){return t[0][0]===t[1][0]||t[0][1]===t[1][1]}(G)&&(q.selection=null,I.call(F)),et.end()}}function q(){U(this,arguments).moved()}function Y(){U(this,arguments).ended()}function G(){var n=this.__brush||{selection:null}
return n.extent=w(e.apply(this,arguments)),n.dim=t,n}return B.move=function(n,e){n.selection?n.on("start.brush",(function(){U(this,arguments).beforestart().start()})).on("interrupt.brush end.brush",(function(){U(this,arguments).end()})).tween("brush",(function(){var n=this,r=n.__brush,i=U(n,arguments),a=r.selection,o=t.input("function"==typeof e?e.apply(this,arguments):e,r.extent),u=Object(l.a)(a,o)
function c(t){r.selection=1===t&&null===o?null:u(t),I.call(n),i.brush()}return null!==a&&null!==o?c:c(1)})):n.each((function(){var n=this,r=arguments,i=n.__brush,a=t.input("function"==typeof e?e.apply(n,r):e,i.extent),o=U(n,r).beforestart()
Object(h.interrupt)(n),i.selection=null===a?null:a,I.call(n),o.start().brush().end()}))},B.clear=function(t){B.move(t,null)},H.prototype={beforestart:function(){return 1==++this.active&&(this.state.emitter=this,this.starting=!0),this},start:function(){return this.starting?(this.starting=!1,this.emit("start")):this.emit("brush"),this},brush:function(){return this.emit("brush"),this},end:function(){return 0==--this.active&&(delete this.state.emitter,this.emit("end")),this},emit:function(n){Object(a.a)(new p(B,n,t.output(this.state.selection)),O.apply,O,[n,this.that,this.args])}},B.extent=function(t){return arguments.length?(e="function"==typeof t?t:d(w(t)),B):e},B.filter=function(t){return arguments.length?(o="function"==typeof t?t:d(!!t),B):o},B.touchable=function(t){return arguments.length?(s="function"==typeof t?t:d(!!t),B):s},B.handleSize=function(t){return arguments.length?(P=+t,B):P},B.keyModifiers=function(t){return arguments.length?(_=!!t,B):_},B.on=function(){var t=O.on.apply(O,arguments)
return t===O?B:t},B}e.d(n,"brush",(function(){return U})),e.d(n,"brushX",(function(){return B})),e.d(n,"brushY",(function(){return I})),e.d(n,"brushSelection",(function(){return P}))}])}))
