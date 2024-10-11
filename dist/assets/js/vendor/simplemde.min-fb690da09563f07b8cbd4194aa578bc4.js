/**
 * simplemde v1.11.2
 * Copyright Next Step Webs, Inc.
 * @link https://github.com/NextStepWebs/simplemde-markdown-editor
 * @license MIT
 */
!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e()
else if("function"==typeof define&&define.amd)define([],e)
else{("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).SimpleMDE=e()}}((function(){return function e(t,n,r){function i(l,a){if(!n[l]){if(!t[l]){var s="function"==typeof require&&require
if(!a&&s)return s(l,!0)
if(o)return o(l,!0)
var c=new Error("Cannot find module '"+l+"'")
throw c.code="MODULE_NOT_FOUND",c}var u=n[l]={exports:{}}
t[l][0].call(u.exports,(function(e){var n=t[l][1][e]
return i(n||e)}),u,u.exports,e,t,n,r)}return n[l].exports}for(var o="function"==typeof require&&require,l=0;l<r.length;l++)i(r[l])
return i}({1:[function(e,t,n){"use strict"
function r(e){return o[e>>18&63]+o[e>>12&63]+o[e>>6&63]+o[63&e]}function i(e,t,n){for(var i,o=[],l=t;n>l;l+=3)i=(e[l]<<16)+(e[l+1]<<8)+e[l+2],o.push(r(i))
return o.join("")}n.toByteArray=function(e){var t,n,r,i,o,s,c=e.length
if(c%4>0)throw new Error("Invalid string. Length must be a multiple of 4")
o="="===e[c-2]?2:"="===e[c-1]?1:0,s=new a(3*c/4-o),r=o>0?c-4:c
var u=0
for(t=0,n=0;r>t;t+=4,n+=3)i=l[e.charCodeAt(t)]<<18|l[e.charCodeAt(t+1)]<<12|l[e.charCodeAt(t+2)]<<6|l[e.charCodeAt(t+3)],s[u++]=i>>16&255,s[u++]=i>>8&255,s[u++]=255&i
return 2===o?(i=l[e.charCodeAt(t)]<<2|l[e.charCodeAt(t+1)]>>4,s[u++]=255&i):1===o&&(i=l[e.charCodeAt(t)]<<10|l[e.charCodeAt(t+1)]<<4|l[e.charCodeAt(t+2)]>>2,s[u++]=i>>8&255,s[u++]=255&i),s},n.fromByteArray=function(e){for(var t,n=e.length,r=n%3,l="",a=[],s=16383,c=0,u=n-r;u>c;c+=s)a.push(i(e,c,c+s>u?u:c+s))
return 1===r?(t=e[n-1],l+=o[t>>2],l+=o[t<<4&63],l+="=="):2===r&&(t=(e[n-2]<<8)+e[n-1],l+=o[t>>10],l+=o[t>>4&63],l+=o[t<<2&63],l+="="),a.push(l),a.join("")}
var o=[],l=[],a="undefined"!=typeof Uint8Array?Uint8Array:Array;(function(){for(var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789%2b/index.html",t=0;76>t;++t)o[t]=e[t],l[e.charCodeAt(t)]=t
l["-".charCodeAt(0)]=62,l["_".charCodeAt(0)]=63})()},{}],2:[function(e,t,n){},{}],3:[function(e,t,n){(function(t){"use strict"
function r(){return o.TYPED_ARRAY_SUPPORT?2147483647:1073741823}function i(e,t){if(r()<t)throw new RangeError("Invalid typed array length")
return o.TYPED_ARRAY_SUPPORT?(e=new Uint8Array(t)).__proto__=o.prototype:(null===e&&(e=new o(t)),e.length=t),e}function o(e,t,n){if(!(o.TYPED_ARRAY_SUPPORT||this instanceof o))return new o(e,t,n)
if("number"==typeof e){if("string"==typeof t)throw new Error("If encoding is specified then the first argument must be a string")
return s(this,e)}return l(this,e,t,n)}function l(e,t,n,r){if("number"==typeof t)throw new TypeError('"value" argument must not be a number')
return"undefined"!=typeof ArrayBuffer&&t instanceof ArrayBuffer?function(e,t,n,r){if(t.byteLength,0>n||t.byteLength<n)throw new RangeError("'offset' is out of bounds")
if(t.byteLength<n+(r||0))throw new RangeError("'length' is out of bounds")
return t=void 0===r?new Uint8Array(t,n):new Uint8Array(t,n,r),o.TYPED_ARRAY_SUPPORT?(e=t,e.__proto__=o.prototype):e=c(e,t),e}(e,t,n,r):"string"==typeof t?function(e,t,n){if("string"==typeof n&&""!==n||(n="utf8"),!o.isEncoding(n))throw new TypeError('"encoding" must be a valid string encoding')
var r=0|h(t,n)
return e=i(e,r),e.write(t,n),e}(e,t,n):function(e,t){if(o.isBuffer(t)){var n=0|u(t.length)
return 0===(e=i(e,n)).length||t.copy(e,0,0,n),e}if(t){if("undefined"!=typeof ArrayBuffer&&t.buffer instanceof ArrayBuffer||"length"in t)return"number"!=typeof t.length||function(e){return e!=e}(t.length)?i(e,0):c(e,t)
if("Buffer"===t.type&&F(t.data))return c(e,t.data)}throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")}(e,t)}function a(e){if("number"!=typeof e)throw new TypeError('"size" argument must be a number')}function s(e,t){if(a(t),e=i(e,0>t?0:0|u(t)),!o.TYPED_ARRAY_SUPPORT)for(var n=0;t>n;n++)e[n]=0
return e}function c(e,t){var n=0|u(t.length)
e=i(e,n)
for(var r=0;n>r;r+=1)e[r]=255&t[r]
return e}function u(e){if(e>=r())throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+r().toString(16)+" bytes")
return 0|e}function h(e,t){if(o.isBuffer(e))return e.length
if("undefined"!=typeof ArrayBuffer&&"function"==typeof ArrayBuffer.isView&&(ArrayBuffer.isView(e)||e instanceof ArrayBuffer))return e.byteLength
"string"!=typeof e&&(e=""+e)
var n=e.length
if(0===n)return 0
for(var r=!1;;)switch(t){case"ascii":case"binary":case"raw":case"raws":return n
case"utf8":case"utf-8":case void 0:return D(e).length
case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*n
case"hex":return n>>>1
case"base64":return H(e).length
default:if(r)return D(e).length
t=(""+t).toLowerCase(),r=!0}}function f(e,t,n){var r=!1
if((void 0===t||0>t)&&(t=0),t>this.length)return""
if((void 0===n||n>this.length)&&(n=this.length),0>=n)return""
if((t>>>=0)>=(n>>>=0))return""
for(e||(e="utf8");;)switch(e){case"hex":return L(this,t,n)
case"utf8":case"utf-8":return k(this,t,n)
case"ascii":return S(this,t,n)
case"binary":return C(this,t,n)
case"base64":return w(this,t,n)
case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return T(this,t,n)
default:if(r)throw new TypeError("Unknown encoding: "+e)
e=(e+"").toLowerCase(),r=!0}}function d(e,t,n){var r=e[t]
e[t]=e[n],e[n]=r}function p(e,t,n,r){function i(e,t){return 1===o?e[t]:e.readUInt16BE(t*o)}var o=1,l=e.length,a=t.length
if(void 0!==r&&("ucs2"===(r=String(r).toLowerCase())||"ucs-2"===r||"utf16le"===r||"utf-16le"===r)){if(e.length<2||t.length<2)return-1
o=2,l/=2,a/=2,n/=2}for(var s=-1,c=0;l>n+c;c++)if(i(e,n+c)===i(t,-1===s?0:c-s)){if(-1===s&&(s=c),c-s+1===a)return(n+s)*o}else-1!==s&&(c-=c-s),s=-1
return-1}function m(e,t,n,r){n=Number(n)||0
var i=e.length-n
r?(r=Number(r))>i&&(r=i):r=i
var o=t.length
if(o%2!=0)throw new Error("Invalid hex string")
r>o/2&&(r=o/2)
for(var l=0;r>l;l++){var a=parseInt(t.substr(2*l,2),16)
if(isNaN(a))return l
e[n+l]=a}return l}function g(e,t,n,r){return W(D(t,e.length-n),e,n,r)}function v(e,t,n,r){return W(function(e){for(var t=[],n=0;n<e.length;n++)t.push(255&e.charCodeAt(n))
return t}(t),e,n,r)}function y(e,t,n,r){return v(e,t,n,r)}function x(e,t,n,r){return W(H(t),e,n,r)}function b(e,t,n,r){return W(function(e,t){for(var n,r,i,o=[],l=0;l<e.length&&!((t-=2)<0);l++)n=e.charCodeAt(l),r=n>>8,i=n%256,o.push(i),o.push(r)
return o}(t,e.length-n),e,n,r)}function w(e,t,n){return 0===t&&n===e.length?B.fromByteArray(e):B.fromByteArray(e.slice(t,n))}function k(e,t,n){n=Math.min(e.length,n)
for(var r=[],i=t;n>i;){var o,l,a,s,c=e[i],u=null,h=c>239?4:c>223?3:c>191?2:1
if(n>=i+h)switch(h){case 1:128>c&&(u=c)
break
case 2:128==(192&(o=e[i+1]))&&((s=(31&c)<<6|63&o)>127&&(u=s))
break
case 3:o=e[i+1],l=e[i+2],128==(192&o)&&128==(192&l)&&((s=(15&c)<<12|(63&o)<<6|63&l)>2047&&(55296>s||s>57343)&&(u=s))
break
case 4:o=e[i+1],l=e[i+2],a=e[i+3],128==(192&o)&&128==(192&l)&&128==(192&a)&&((s=(15&c)<<18|(63&o)<<12|(63&l)<<6|63&a)>65535&&1114112>s&&(u=s))}null===u?(u=65533,h=1):u>65535&&(u-=65536,r.push(u>>>10&1023|55296),u=56320|1023&u),r.push(u),i+=h}return function(e){var t=e.length
if(z>=t)return String.fromCharCode.apply(String,e)
for(var n="",r=0;t>r;)n+=String.fromCharCode.apply(String,e.slice(r,r+=z))
return n}(r)}function S(e,t,n){var r=""
n=Math.min(e.length,n)
for(var i=t;n>i;i++)r+=String.fromCharCode(127&e[i])
return r}function C(e,t,n){var r=""
n=Math.min(e.length,n)
for(var i=t;n>i;i++)r+=String.fromCharCode(e[i])
return r}function L(e,t,n){var r=e.length;(!t||0>t)&&(t=0),(!n||0>n||n>r)&&(n=r)
for(var i="",o=t;n>o;o++)i+=R(e[o])
return i}function T(e,t,n){for(var r=e.slice(t,n),i="",o=0;o<r.length;o+=2)i+=String.fromCharCode(r[o]+256*r[o+1])
return i}function M(e,t,n){if(e%1!=0||0>e)throw new RangeError("offset is not uint")
if(e+t>n)throw new RangeError("Trying to access beyond buffer length")}function N(e,t,n,r,i,l){if(!o.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance')
if(t>i||l>t)throw new RangeError('"value" argument is out of bounds')
if(n+r>e.length)throw new RangeError("Index out of range")}function A(e,t,n,r){0>t&&(t=65535+t+1)
for(var i=0,o=Math.min(e.length-n,2);o>i;i++)e[n+i]=(t&255<<8*(r?i:1-i))>>>8*(r?i:1-i)}function E(e,t,n,r){0>t&&(t=4294967295+t+1)
for(var i=0,o=Math.min(e.length-n,4);o>i;i++)e[n+i]=t>>>8*(r?i:3-i)&255}function O(e,t,n,r,i,o){if(n+r>e.length)throw new RangeError("Index out of range")
if(0>n)throw new RangeError("Index out of range")}function I(e,t,n,r,i){return i||O(e,0,n,4),_.write(e,t,n,r,23,4),n+4}function P(e,t,n,r,i){return i||O(e,0,n,8),_.write(e,t,n,r,52,8),n+8}function R(e){return 16>e?"0"+e.toString(16):e.toString(16)}function D(e,t){t=t||1/0
for(var n,r=e.length,i=null,o=[],l=0;r>l;l++){if((n=e.charCodeAt(l))>55295&&57344>n){if(!i){if(n>56319){(t-=3)>-1&&o.push(239,191,189)
continue}if(l+1===r){(t-=3)>-1&&o.push(239,191,189)
continue}i=n
continue}if(56320>n){(t-=3)>-1&&o.push(239,191,189),i=n
continue}n=65536+(i-55296<<10|n-56320)}else i&&(t-=3)>-1&&o.push(239,191,189)
if(i=null,128>n){if((t-=1)<0)break
o.push(n)}else if(2048>n){if((t-=2)<0)break
o.push(n>>6|192,63&n|128)}else if(65536>n){if((t-=3)<0)break
o.push(n>>12|224,n>>6&63|128,63&n|128)}else{if(!(1114112>n))throw new Error("Invalid code point")
if((t-=4)<0)break
o.push(n>>18|240,n>>12&63|128,n>>6&63|128,63&n|128)}}return o}function H(e){return B.toByteArray(function(e){if((e=function(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")}(e).replace(j,"")).length<2)return""
for(;e.length%4!=0;)e+="="
return e}(e))}function W(e,t,n,r){for(var i=0;r>i&&!(i+n>=t.length||i>=e.length);i++)t[i+n]=e[i]
return i}var B=e("base64-js"),_=e("ieee754"),F=e("isarray")
n.Buffer=o,n.SlowBuffer=function(e){return+e!=e&&(e=0),o.alloc(+e)},n.INSPECT_MAX_BYTES=50,o.TYPED_ARRAY_SUPPORT=void 0!==t.TYPED_ARRAY_SUPPORT?t.TYPED_ARRAY_SUPPORT:function(){try{var e=new Uint8Array(1)
return e.foo=function(){return 42},42===e.foo()&&"function"==typeof e.subarray&&0===e.subarray(1,1).byteLength}catch(t){return!1}}(),n.kMaxLength=r(),o.poolSize=8192,o._augment=function(e){return e.__proto__=o.prototype,e},o.from=function(e,t,n){return l(null,e,t,n)},o.TYPED_ARRAY_SUPPORT&&(o.prototype.__proto__=Uint8Array.prototype,o.__proto__=Uint8Array,"undefined"!=typeof Symbol&&Symbol.species&&o[Symbol.species]===o&&Object.defineProperty(o,Symbol.species,{value:null,configurable:!0})),o.alloc=function(e,t,n){return function(e,t,n,r){return a(t),0>=t?i(e,t):void 0!==n?"string"==typeof r?i(e,t).fill(n,r):i(e,t).fill(n):i(e,t)}(null,e,t,n)},o.allocUnsafe=function(e){return s(null,e)},o.allocUnsafeSlow=function(e){return s(null,e)},o.isBuffer=function(e){return!(null==e||!e._isBuffer)},o.compare=function(e,t){if(!o.isBuffer(e)||!o.isBuffer(t))throw new TypeError("Arguments must be Buffers")
if(e===t)return 0
for(var n=e.length,r=t.length,i=0,l=Math.min(n,r);l>i;++i)if(e[i]!==t[i]){n=e[i],r=t[i]
break}return r>n?-1:n>r?1:0},o.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"binary":case"base64":case"raw":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0
default:return!1}},o.concat=function(e,t){if(!F(e))throw new TypeError('"list" argument must be an Array of Buffers')
if(0===e.length)return o.alloc(0)
var n
if(void 0===t)for(t=0,n=0;n<e.length;n++)t+=e[n].length
var r=o.allocUnsafe(t),i=0
for(n=0;n<e.length;n++){var l=e[n]
if(!o.isBuffer(l))throw new TypeError('"list" argument must be an Array of Buffers')
l.copy(r,i),i+=l.length}return r},o.byteLength=h,o.prototype._isBuffer=!0,o.prototype.swap16=function(){var e=this.length
if(e%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits")
for(var t=0;e>t;t+=2)d(this,t,t+1)
return this},o.prototype.swap32=function(){var e=this.length
if(e%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits")
for(var t=0;e>t;t+=4)d(this,t,t+3),d(this,t+1,t+2)
return this},o.prototype.toString=function(){var e=0|this.length
return 0===e?"":0===arguments.length?k(this,0,e):f.apply(this,arguments)},o.prototype.equals=function(e){if(!o.isBuffer(e))throw new TypeError("Argument must be a Buffer")
return this===e||0===o.compare(this,e)},o.prototype.inspect=function(){var e="",t=n.INSPECT_MAX_BYTES
return this.length>0&&(e=this.toString("hex",0,t).match(/.{2}/g).join(" "),this.length>t&&(e+=" ... ")),"<Buffer "+e+">"},o.prototype.compare=function(e,t,n,r,i){if(!o.isBuffer(e))throw new TypeError("Argument must be a Buffer")
if(void 0===t&&(t=0),void 0===n&&(n=e?e.length:0),void 0===r&&(r=0),void 0===i&&(i=this.length),0>t||n>e.length||0>r||i>this.length)throw new RangeError("out of range index")
if(r>=i&&t>=n)return 0
if(r>=i)return-1
if(t>=n)return 1
if(this===e)return 0
for(var l=(i>>>=0)-(r>>>=0),a=(n>>>=0)-(t>>>=0),s=Math.min(l,a),c=this.slice(r,i),u=e.slice(t,n),h=0;s>h;++h)if(c[h]!==u[h]){l=c[h],a=u[h]
break}return a>l?-1:l>a?1:0},o.prototype.indexOf=function(e,t,n){if("string"==typeof t?(n=t,t=0):t>2147483647?t=2147483647:-2147483648>t&&(t=-2147483648),t>>=0,0===this.length)return-1
if(t>=this.length)return-1
if(0>t&&(t=Math.max(this.length+t,0)),"string"==typeof e&&(e=o.from(e,n)),o.isBuffer(e))return 0===e.length?-1:p(this,e,t,n)
if("number"==typeof e)return o.TYPED_ARRAY_SUPPORT&&"function"===Uint8Array.prototype.indexOf?Uint8Array.prototype.indexOf.call(this,e,t):p(this,[e],t,n)
throw new TypeError("val must be string, number or Buffer")},o.prototype.includes=function(e,t,n){return-1!==this.indexOf(e,t,n)},o.prototype.write=function(e,t,n,r){if(void 0===t)r="utf8",n=this.length,t=0
else if(void 0===n&&"string"==typeof t)r=t,n=this.length,t=0
else{if(!isFinite(t))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported")
t|=0,isFinite(n)?(n|=0,void 0===r&&(r="utf8")):(r=n,n=void 0)}var i=this.length-t
if((void 0===n||n>i)&&(n=i),e.length>0&&(0>n||0>t)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds")
r||(r="utf8")
for(var o=!1;;)switch(r){case"hex":return m(this,e,t,n)
case"utf8":case"utf-8":return g(this,e,t,n)
case"ascii":return v(this,e,t,n)
case"binary":return y(this,e,t,n)
case"base64":return x(this,e,t,n)
case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return b(this,e,t,n)
default:if(o)throw new TypeError("Unknown encoding: "+r)
r=(""+r).toLowerCase(),o=!0}},o.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}}
var z=4096
o.prototype.slice=function(e,t){var n,r=this.length
if(0>(e=~~e)?0>(e+=r)&&(e=0):e>r&&(e=r),0>(t=void 0===t?r:~~t)?0>(t+=r)&&(t=0):t>r&&(t=r),e>t&&(t=e),o.TYPED_ARRAY_SUPPORT)(n=this.subarray(e,t)).__proto__=o.prototype
else{var i=t-e
n=new o(i,void 0)
for(var l=0;i>l;l++)n[l]=this[l+e]}return n},o.prototype.readUIntLE=function(e,t,n){e|=0,t|=0,n||M(e,t,this.length)
for(var r=this[e],i=1,o=0;++o<t&&(i*=256);)r+=this[e+o]*i
return r},o.prototype.readUIntBE=function(e,t,n){e|=0,t|=0,n||M(e,t,this.length)
for(var r=this[e+--t],i=1;t>0&&(i*=256);)r+=this[e+--t]*i
return r},o.prototype.readUInt8=function(e,t){return t||M(e,1,this.length),this[e]},o.prototype.readUInt16LE=function(e,t){return t||M(e,2,this.length),this[e]|this[e+1]<<8},o.prototype.readUInt16BE=function(e,t){return t||M(e,2,this.length),this[e]<<8|this[e+1]},o.prototype.readUInt32LE=function(e,t){return t||M(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+16777216*this[e+3]},o.prototype.readUInt32BE=function(e,t){return t||M(e,4,this.length),16777216*this[e]+(this[e+1]<<16|this[e+2]<<8|this[e+3])},o.prototype.readIntLE=function(e,t,n){e|=0,t|=0,n||M(e,t,this.length)
for(var r=this[e],i=1,o=0;++o<t&&(i*=256);)r+=this[e+o]*i
return r>=(i*=128)&&(r-=Math.pow(2,8*t)),r},o.prototype.readIntBE=function(e,t,n){e|=0,t|=0,n||M(e,t,this.length)
for(var r=t,i=1,o=this[e+--r];r>0&&(i*=256);)o+=this[e+--r]*i
return o>=(i*=128)&&(o-=Math.pow(2,8*t)),o},o.prototype.readInt8=function(e,t){return t||M(e,1,this.length),128&this[e]?-1*(255-this[e]+1):this[e]},o.prototype.readInt16LE=function(e,t){t||M(e,2,this.length)
var n=this[e]|this[e+1]<<8
return 32768&n?4294901760|n:n},o.prototype.readInt16BE=function(e,t){t||M(e,2,this.length)
var n=this[e+1]|this[e]<<8
return 32768&n?4294901760|n:n},o.prototype.readInt32LE=function(e,t){return t||M(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},o.prototype.readInt32BE=function(e,t){return t||M(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},o.prototype.readFloatLE=function(e,t){return t||M(e,4,this.length),_.read(this,e,!0,23,4)},o.prototype.readFloatBE=function(e,t){return t||M(e,4,this.length),_.read(this,e,!1,23,4)},o.prototype.readDoubleLE=function(e,t){return t||M(e,8,this.length),_.read(this,e,!0,52,8)},o.prototype.readDoubleBE=function(e,t){return t||M(e,8,this.length),_.read(this,e,!1,52,8)},o.prototype.writeUIntLE=function(e,t,n,r){(e=+e,t|=0,n|=0,r)||N(this,e,t,n,Math.pow(2,8*n)-1,0)
var i=1,o=0
for(this[t]=255&e;++o<n&&(i*=256);)this[t+o]=e/i&255
return t+n},o.prototype.writeUIntBE=function(e,t,n,r){(e=+e,t|=0,n|=0,r)||N(this,e,t,n,Math.pow(2,8*n)-1,0)
var i=n-1,o=1
for(this[t+i]=255&e;--i>=0&&(o*=256);)this[t+i]=e/o&255
return t+n},o.prototype.writeUInt8=function(e,t,n){return e=+e,t|=0,n||N(this,e,t,1,255,0),o.TYPED_ARRAY_SUPPORT||(e=Math.floor(e)),this[t]=255&e,t+1},o.prototype.writeUInt16LE=function(e,t,n){return e=+e,t|=0,n||N(this,e,t,2,65535,0),o.TYPED_ARRAY_SUPPORT?(this[t]=255&e,this[t+1]=e>>>8):A(this,e,t,!0),t+2},o.prototype.writeUInt16BE=function(e,t,n){return e=+e,t|=0,n||N(this,e,t,2,65535,0),o.TYPED_ARRAY_SUPPORT?(this[t]=e>>>8,this[t+1]=255&e):A(this,e,t,!1),t+2},o.prototype.writeUInt32LE=function(e,t,n){return e=+e,t|=0,n||N(this,e,t,4,4294967295,0),o.TYPED_ARRAY_SUPPORT?(this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=255&e):E(this,e,t,!0),t+4},o.prototype.writeUInt32BE=function(e,t,n){return e=+e,t|=0,n||N(this,e,t,4,4294967295,0),o.TYPED_ARRAY_SUPPORT?(this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e):E(this,e,t,!1),t+4},o.prototype.writeIntLE=function(e,t,n,r){if(e=+e,t|=0,!r){var i=Math.pow(2,8*n-1)
N(this,e,t,n,i-1,-i)}var o=0,l=1,a=0
for(this[t]=255&e;++o<n&&(l*=256);)0>e&&0===a&&0!==this[t+o-1]&&(a=1),this[t+o]=(e/l>>0)-a&255
return t+n},o.prototype.writeIntBE=function(e,t,n,r){if(e=+e,t|=0,!r){var i=Math.pow(2,8*n-1)
N(this,e,t,n,i-1,-i)}var o=n-1,l=1,a=0
for(this[t+o]=255&e;--o>=0&&(l*=256);)0>e&&0===a&&0!==this[t+o+1]&&(a=1),this[t+o]=(e/l>>0)-a&255
return t+n},o.prototype.writeInt8=function(e,t,n){return e=+e,t|=0,n||N(this,e,t,1,127,-128),o.TYPED_ARRAY_SUPPORT||(e=Math.floor(e)),0>e&&(e=255+e+1),this[t]=255&e,t+1},o.prototype.writeInt16LE=function(e,t,n){return e=+e,t|=0,n||N(this,e,t,2,32767,-32768),o.TYPED_ARRAY_SUPPORT?(this[t]=255&e,this[t+1]=e>>>8):A(this,e,t,!0),t+2},o.prototype.writeInt16BE=function(e,t,n){return e=+e,t|=0,n||N(this,e,t,2,32767,-32768),o.TYPED_ARRAY_SUPPORT?(this[t]=e>>>8,this[t+1]=255&e):A(this,e,t,!1),t+2},o.prototype.writeInt32LE=function(e,t,n){return e=+e,t|=0,n||N(this,e,t,4,2147483647,-2147483648),o.TYPED_ARRAY_SUPPORT?(this[t]=255&e,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24):E(this,e,t,!0),t+4},o.prototype.writeInt32BE=function(e,t,n){return e=+e,t|=0,n||N(this,e,t,4,2147483647,-2147483648),0>e&&(e=4294967295+e+1),o.TYPED_ARRAY_SUPPORT?(this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e):E(this,e,t,!1),t+4},o.prototype.writeFloatLE=function(e,t,n){return I(this,e,t,!0,n)},o.prototype.writeFloatBE=function(e,t,n){return I(this,e,t,!1,n)},o.prototype.writeDoubleLE=function(e,t,n){return P(this,e,t,!0,n)},o.prototype.writeDoubleBE=function(e,t,n){return P(this,e,t,!1,n)},o.prototype.copy=function(e,t,n,r){if(n||(n=0),r||0===r||(r=this.length),t>=e.length&&(t=e.length),t||(t=0),r>0&&n>r&&(r=n),r===n)return 0
if(0===e.length||0===this.length)return 0
if(0>t)throw new RangeError("targetStart out of bounds")
if(0>n||n>=this.length)throw new RangeError("sourceStart out of bounds")
if(0>r)throw new RangeError("sourceEnd out of bounds")
r>this.length&&(r=this.length),e.length-t<r-n&&(r=e.length-t+n)
var i,l=r-n
if(this===e&&t>n&&r>t)for(i=l-1;i>=0;i--)e[i+t]=this[i+n]
else if(1e3>l||!o.TYPED_ARRAY_SUPPORT)for(i=0;l>i;i++)e[i+t]=this[i+n]
else Uint8Array.prototype.set.call(e,this.subarray(n,n+l),t)
return l},o.prototype.fill=function(e,t,n,r){if("string"==typeof e){if("string"==typeof t?(r=t,t=0,n=this.length):"string"==typeof n&&(r=n,n=this.length),1===e.length){var i=e.charCodeAt(0)
256>i&&(e=i)}if(void 0!==r&&"string"!=typeof r)throw new TypeError("encoding must be a string")
if("string"==typeof r&&!o.isEncoding(r))throw new TypeError("Unknown encoding: "+r)}else"number"==typeof e&&(e&=255)
if(0>t||this.length<t||this.length<n)throw new RangeError("Out of range index")
if(t>=n)return this
var l
if(t>>>=0,n=void 0===n?this.length:n>>>0,e||(e=0),"number"==typeof e)for(l=t;n>l;l++)this[l]=e
else{var a=o.isBuffer(e)?e:D(new o(e,r).toString()),s=a.length
for(l=0;n-t>l;l++)this[l+t]=a[l%s]}return this}
var j=/[^+\/0-9A-Za-z-_]/g}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"base64-js":1,ieee754:15,isarray:16}],4:[function(e,t,n){"use strict"
function r(e){return"function"!=typeof(e=e||{}).codeMirrorInstance||"function"!=typeof e.codeMirrorInstance.defineMode?void console.log("CodeMirror Spell Checker: You must provide an instance of CodeMirror via the option `codeMirrorInstance`"):(String.prototype.includes||(String.prototype.includes=function(){return-1!==String.prototype.indexOf.apply(this,arguments)}),void e.codeMirrorInstance.defineMode("spell-checker",(function(t){if(!r.aff_loading){r.aff_loading=!0
var n=new XMLHttpRequest
n.open("GET.html","https://cdn.jsdelivr.net/codemirror.spell-checker/latest/en_US.aff",!0),n.onload=function(){4===n.readyState&&200===n.status&&(r.aff_data=n.responseText,r.num_loaded++,2==r.num_loaded&&(r.typo=new i("en_US",r.aff_data,r.dic_data,{platform:"any"})))},n.send(null)}if(!r.dic_loading){r.dic_loading=!0
var o=new XMLHttpRequest
o.open("GET.html","https://cdn.jsdelivr.net/codemirror.spell-checker/latest/en_US.dic",!0),o.onload=function(){4===o.readyState&&200===o.status&&(r.dic_data=o.responseText,r.num_loaded++,2==r.num_loaded&&(r.typo=new i("en_US",r.aff_data,r.dic_data,{platform:"any"})))},o.send(null)}var l='!"#$%&()*+,-./:;<=>?@[\\]^_`{|}~ ',a={token:function(e){var t=e.peek(),n=""
if(l.includes(t))return e.next(),null
for(;null!=(t=e.peek())&&!l.includes(t);)n+=t,e.next()
return r.typo&&!r.typo.check(n)?"spell-error":null}},s=e.codeMirrorInstance.getMode(t,t.backdrop||"text/plain")
return e.codeMirrorInstance.overlayMode(s,a,!0)})))}var i=e("typo-js")
r.num_loaded=0,r.aff_loading=!1,r.dic_loading=!1,r.aff_data="",r.dic_data="",r.typo,t.exports=r},{"typo-js":18}],5:[function(e,t,n){var r
r=function(e){"use strict"
e.defineOption("fullScreen",!1,(function(t,n,r){r==e.Init&&(r=!1),!r!=!n&&(n?function(e){var t=e.getWrapperElement()
e.state.fullScreenRestore={scrollTop:window.pageYOffset,scrollLeft:window.pageXOffset,width:t.style.width,height:t.style.height},t.style.width="",t.style.height="auto",t.className+=" CodeMirror-fullscreen",document.documentElement.style.overflow="hidden",e.refresh()}(t):function(e){var t=e.getWrapperElement()
t.className=t.className.replace(/\s*CodeMirror-fullscreen\b/,""),document.documentElement.style.overflow=""
var n=e.state.fullScreenRestore
t.style.width=n.width,t.style.height=n.height,window.scrollTo(n.scrollLeft,n.scrollTop),e.refresh()}(t))}))},r("object"==typeof n&&"object"==typeof t?e("../../lib/codemirror"):CodeMirror)},{"../../lib/codemirror":10}],6:[function(e,t,n){var r
r=function(e){function t(e){e.state.placeholder&&(e.state.placeholder.parentNode.removeChild(e.state.placeholder),e.state.placeholder=null)}function n(e){t(e)
var n=e.state.placeholder=document.createElement("pre")
n.style.cssText="height: 0; overflow: visible",n.className="CodeMirror-placeholder"
var r=e.getOption("placeholder")
"string"==typeof r&&(r=document.createTextNode(r)),n.appendChild(r),e.display.lineSpace.insertBefore(n,e.display.lineSpace.firstChild)}function r(e){o(e)&&n(e)}function i(e){var r=e.getWrapperElement(),i=o(e)
r.className=r.className.replace(" CodeMirror-empty","")+(i?" CodeMirror-empty":""),i?n(e):t(e)}function o(e){return 1===e.lineCount()&&""===e.getLine(0)}e.defineOption("placeholder","",(function(n,o,l){var a=l&&l!=e.Init
if(o&&!a)n.on("blur",r),n.on("change",i),n.on("swapDoc",i),i(n)
else if(!o&&a){n.off("blur",r),n.off("change",i),n.off("swapDoc",i),t(n)
var s=n.getWrapperElement()
s.className=s.className.replace(" CodeMirror-empty","")}o&&!n.hasFocus()&&r(n)}))},r("object"==typeof n&&"object"==typeof t?e("../../lib/codemirror"):CodeMirror)},{"../../lib/codemirror":10}],7:[function(e,t,n){var r
r=function(e){"use strict"
var t=/^(\s*)(>[> ]*|[*+-]\s|(\d+)([.)]))(\s*)/,n=/^(\s*)(>[> ]*|[*+-]|(\d+)[.)])(\s*)$/,r=/[*+-]\s/
e.commands.newlineAndIndentContinueMarkdownList=function(i){if(i.getOption("disableInput"))return e.Pass
for(var o=i.listSelections(),l=[],a=0;a<o.length;a++){var s=o[a].head,c=i.getStateAfter(s.line),u=!1!==c.list,h=0!==c.quote,f=i.getLine(s.line),d=t.exec(f)
if(!o[a].empty()||!u&&!h||!d)return void i.execCommand("newlineAndIndent")
if(n.test(f))i.replaceRange("",{line:s.line,ch:0},{line:s.line,ch:s.ch+1}),l[a]="\n"
else{var p=d[1],m=d[5],g=r.test(d[2])||d[2].indexOf(">")>=0?d[2]:parseInt(d[3],10)+1+d[4]
l[a]="\n"+p+g+m}}i.replaceSelections(l)}},r("object"==typeof n&&"object"==typeof t?e("../../lib/codemirror"):CodeMirror)},{"../../lib/codemirror":10}],8:[function(e,t,n){var r
r=function(e){"use strict"
e.overlayMode=function(t,n,r){return{startState:function(){return{base:e.startState(t),overlay:e.startState(n),basePos:0,baseCur:null,overlayPos:0,overlayCur:null,streamSeen:null}},copyState:function(r){return{base:e.copyState(t,r.base),overlay:e.copyState(n,r.overlay),basePos:r.basePos,baseCur:null,overlayPos:r.overlayPos,overlayCur:null}},token:function(e,i){return(e!=i.streamSeen||Math.min(i.basePos,i.overlayPos)<e.start)&&(i.streamSeen=e,i.basePos=i.overlayPos=e.start),e.start==i.basePos&&(i.baseCur=t.token(e,i.base),i.basePos=e.pos),e.start==i.overlayPos&&(e.pos=e.start,i.overlayCur=n.token(e,i.overlay),i.overlayPos=e.pos),e.pos=Math.min(i.basePos,i.overlayPos),null==i.overlayCur?i.baseCur:null!=i.baseCur&&i.overlay.combineTokens||r&&null==i.overlay.combineTokens?i.baseCur+" "+i.overlayCur:i.overlayCur},indent:t.indent&&function(e,n){return t.indent(e.base,n)},electricChars:t.electricChars,innerMode:function(e){return{state:e.base,mode:t}},blankLine:function(e){t.blankLine&&t.blankLine(e.base),n.blankLine&&n.blankLine(e.overlay)}}}},r("object"==typeof n&&"object"==typeof t?e("../../lib/codemirror"):CodeMirror)},{"../../lib/codemirror":10}],9:[function(e,t,n){var r
r=function(e){"use strict"
function t(e){e.operation((function(){(function(e){if(!e.somethingSelected())return i(e)
if(e.listSelections().length>1)return o(e)
var t=e.getCursor("start"),n=e.getCursor("end"),a=e.state.markedSelection
if(!a.length)return r(e,t,n)
var c=a[0].find(),u=a[a.length-1].find()
if(!c||!u||n.line-t.line<l||s(t,u.to)>=0||s(n,c.from)<=0)return o(e)
for(;s(t,c.from)>0;)a.shift().clear(),c=a[0].find()
for(s(t,c.from)<0&&(c.to.line-t.line<l?(a.shift().clear(),r(e,t,c.to,0)):r(e,t,c.from,0));s(n,u.to)<0;)a.pop().clear(),u=a[a.length-1].find()
s(n,u.to)>0&&(n.line-u.from.line<l?(a.pop().clear(),r(e,u.from,n)):r(e,u.to,n))})(e)}))}function n(e){e.state.markedSelection.length&&e.operation((function(){i(e)}))}function r(e,t,n,r){if(0!=s(t,n))for(var i=e.state.markedSelection,o=e.state.markedSelectionStyle,c=t.line;;){var u=c==t.line?t:a(c,0),h=c+l,f=h>=n.line,d=f?n:a(h,0),p=e.markText(u,d,{className:o})
if(null==r?i.push(p):i.splice(r++,0,p),f)break
c=h}}function i(e){for(var t=e.state.markedSelection,n=0;n<t.length;++n)t[n].clear()
t.length=0}function o(e){i(e)
for(var t=e.listSelections(),n=0;n<t.length;n++)r(e,t[n].from(),t[n].to())}e.defineOption("styleSelectedText",!1,(function(r,l,a){var s=a&&a!=e.Init
l&&!s?(r.state.markedSelection=[],r.state.markedSelectionStyle="string"==typeof l?l:"CodeMirror-selectedtext",o(r),r.on("cursorActivity",t),r.on("change",n)):!l&&s&&(r.off("cursorActivity",t),r.off("change",n),i(r),r.state.markedSelection=r.state.markedSelectionStyle=null)}))
var l=8,a=e.Pos,s=e.cmpPos},r("object"==typeof n&&"object"==typeof t?e("../../lib/codemirror"):CodeMirror)},{"../../lib/codemirror":10}],10:[function(e,t,n){!function(e){"object"==typeof n&&"object"==typeof t?t.exports=e():(this||window).CodeMirror=e()}((function(){"use strict"
function e(n,r){if(!(this instanceof e))return new e(n,r)
this.options=r=r?Yr(r):{},Yr(ro,r,!1),f(r)
var i=r.value
"string"==typeof i&&(i=new No(i,r.mode,null,r.lineSeparator)),this.doc=i
var o=new e.inputStyles[r.inputStyle](this),a=this.display=new t(n,i,o)
a.wrapper.CodeMirror=this,s(this),l(this),r.lineWrapping&&(this.display.wrapper.className+=" CodeMirror-wrap"),r.autofocus&&!Ii&&a.input.focus(),g(this),this.state={keyMaps:[],overlays:[],modeGen:0,overwrite:!1,delayingBlurEvent:!1,focused:!1,suppressEdits:!1,pasteIncoming:!1,cutIncoming:!1,selectingText:!1,draggingText:!1,highlight:new _r,keySeq:null,specialChars:null}
var c=this
for(var u in ki&&11>Si&&setTimeout((function(){c.display.input.reset(!0)}),20),function(e){function t(){i.activeTouch&&(o=setTimeout((function(){i.activeTouch=null}),1e3),(l=i.activeTouch).end=+new Date)}function n(e){if(1!=e.touches.length)return!1
var t=e.touches[0]
return t.radiusX<=1&&t.radiusY<=1}function r(e,t){if(null==t.left)return!0
var n=t.left-e.left,r=t.top-e.top
return n*n+r*r>400}var i=e.display
Ro(i.scroller,"mousedown",gt(e,Et)),Ro(i.scroller,"dblclick",ki&&11>Si?gt(e,(function(t){if(!Dr(e,t)){var n=At(e,t)
if(n&&!It(e,t)&&!Nt(e.display,t)){Oo(t)
var r=e.findWordAt(n)
pe(e.doc,r.anchor,r.head)}}})):function(t){Dr(e,t)||Oo(t)}),Bi||Ro(i.scroller,"contextmenu",(function(t){Yt(e,t)}))
var o,l={end:0}
Ro(i.scroller,"touchstart",(function(t){if(!Dr(e,t)&&!n(t)){clearTimeout(o)
var r=+new Date
i.activeTouch={start:r,moved:!1,prev:r-l.end<=300?l:null},1==t.touches.length&&(i.activeTouch.left=t.touches[0].pageX,i.activeTouch.top=t.touches[0].pageY)}})),Ro(i.scroller,"touchmove",(function(){i.activeTouch&&(i.activeTouch.moved=!0)})),Ro(i.scroller,"touchend",(function(n){var o=i.activeTouch
if(o&&!Nt(i,n)&&null!=o.left&&!o.moved&&new Date-o.start<300){var l,a=e.coordsChar(i.activeTouch,"page")
l=!o.prev||r(o,o.prev)?new le(a,a):!o.prev.prev||r(o,o.prev.prev)?e.findWordAt(a):new le(zi(a.line,0),ue(e.doc,zi(a.line+1,0))),e.setSelection(l.anchor,l.head),e.focus(),Oo(n)}t()})),Ro(i.scroller,"touchcancel",t),Ro(i.scroller,"scroll",(function(){i.scroller.clientHeight&&(Dt(e,i.scroller.scrollTop),Ht(e,i.scroller.scrollLeft,!0),Wo(e,"scroll",e))})),Ro(i.scroller,"mousewheel",(function(t){Wt(e,t)})),Ro(i.scroller,"DOMMouseScroll",(function(t){Wt(e,t)})),Ro(i.wrapper,"scroll",(function(){i.wrapper.scrollTop=i.wrapper.scrollLeft=0})),i.dragFunctions={enter:function(t){Dr(e,t)||Po(t)},over:function(t){Dr(e,t)||(function(e,t){var n=At(e,t)
if(n){var r=document.createDocumentFragment()
Ae(e,n,r),e.display.dragCursor||(e.display.dragCursor=Zr("div",null,"CodeMirror-cursors CodeMirror-dragcursors"),e.display.lineSpace.insertBefore(e.display.dragCursor,e.display.cursorDiv)),Qr(e.display.dragCursor,r)}}(e,t),Po(t))},start:function(t){(function(e,t){if(ki&&(!e.state.draggingText||+new Date-Xi<100))return void Po(t)
if(!Dr(e,t)&&!Nt(e.display,t)&&(t.dataTransfer.setData("Text",e.getSelection()),t.dataTransfer.effectAllowed="copyMove",t.dataTransfer.setDragImage&&!Ni)){var n=Zr("img",null,null,"position: fixed; left: 0; top: 0;")
n.src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",Mi&&(n.width=n.height=1,e.display.wrapper.appendChild(n),n._top=n.offsetTop),t.dataTransfer.setDragImage(n,0,0),Mi&&n.parentNode.removeChild(n)}})(e,t)},drop:gt(e,Pt),leave:function(t){Dr(e,t)||Rt(e)}}
var a=i.input.getField()
Ro(a,"keyup",(function(t){jt.call(e,t)})),Ro(a,"keydown",gt(e,zt)),Ro(a,"keypress",gt(e,Ut)),Ro(a,"focus",$r(qt,e)),Ro(a,"blur",$r(Gt,e))}(this),rl||(function(){var e
Ro(window,"resize",(function(){null==e&&(e=setTimeout((function(){e=null,ri(Mt)}),100))})),Ro(window,"blur",(function(){ri(Gt)}))}(),rl=!0),st(this),this.curOp.forceUpdate=!0,cr(this,i),r.autofocus&&!Ii||c.hasFocus()?setTimeout($r(qt,this),20):Gt(this),io)io.hasOwnProperty(u)&&io[u](this,r[u],oo)
w(this),r.finishInit&&r.finishInit(this)
for(var h=0;h<co.length;++h)co[h](this)
ct(this),Ci&&r.lineWrapping&&"optimizelegibility"==getComputedStyle(a.lineDiv).textRendering&&(a.lineDiv.style.textRendering="auto")}function t(e,t,n){var r=this
this.input=n,r.scrollbarFiller=Zr("div",null,"CodeMirror-scrollbar-filler"),r.scrollbarFiller.setAttribute("cm-not-content","true"),r.gutterFiller=Zr("div",null,"CodeMirror-gutter-filler"),r.gutterFiller.setAttribute("cm-not-content","true"),r.lineDiv=Zr("div",null,"CodeMirror-code"),r.selectionDiv=Zr("div",null,null,"position: relative; z-index: 1"),r.cursorDiv=Zr("div",null,"CodeMirror-cursors"),r.measure=Zr("div",null,"CodeMirror-measure"),r.lineMeasure=Zr("div",null,"CodeMirror-measure"),r.lineSpace=Zr("div",[r.measure,r.lineMeasure,r.selectionDiv,r.cursorDiv,r.lineDiv],null,"position: relative; outline: none"),r.mover=Zr("div",[Zr("div",[r.lineSpace],"CodeMirror-lines")],null,"position: relative"),r.sizer=Zr("div",[r.mover],"CodeMirror-sizer"),r.sizerWidth=null,r.heightForcer=Zr("div",null,null,"position: absolute; height: "+_o+"px; width: 1px;"),r.gutters=Zr("div",null,"CodeMirror-gutters"),r.lineGutter=null,r.scroller=Zr("div",[r.sizer,r.heightForcer,r.gutters],"CodeMirror-scroll"),r.scroller.setAttribute("tabIndex","-1"),r.wrapper=Zr("div",[r.scrollbarFiller,r.gutterFiller,r.scroller],"CodeMirror"),ki&&8>Si&&(r.gutters.style.zIndex=-1,r.scroller.style.paddingRight=0),Ci||xi&&Ii||(r.scroller.draggable=!0),e&&(e.appendChild?e.appendChild(r.wrapper):e(r.wrapper)),r.viewFrom=r.viewTo=t.first,r.reportedViewFrom=r.reportedViewTo=t.first,r.view=[],r.renderedView=null,r.externalMeasured=null,r.viewOffset=0,r.lastWrapHeight=r.lastWrapWidth=0,r.updateLineNumbers=null,r.nativeBarWidth=r.barHeight=r.barWidth=0,r.scrollbarsClipped=!1,r.lineNumWidth=r.lineNumInnerWidth=r.lineNumChars=null,r.alignWidgets=!1,r.cachedCharWidth=r.cachedTextHeight=r.cachedPaddingH=null,r.maxLine=null,r.maxLineLength=0,r.maxLineChanged=!1,r.wheelDX=r.wheelDY=r.wheelStartX=r.wheelStartY=null,r.shift=!1,r.selForContextMenu=null,r.activeTouch=null,n.init(r)}function n(t){t.doc.mode=e.getMode(t.options,t.doc.modeOption),r(t)}function r(e){e.doc.iter((function(e){e.stateAfter&&(e.stateAfter=null),e.styles&&(e.styles=null)})),e.doc.frontier=e.doc.first,Ie(e,100),e.state.modeGen++,e.curOp&&wt(e)}function i(e){var t=lt(e.display),n=e.options.lineWrapping,r=n&&Math.max(5,e.display.scroller.clientWidth/at(e.display)-3)
return function(i){if(Bn(e.doc,i))return 0
var o=0
if(i.widgets)for(var l=0;l<i.widgets.length;l++)i.widgets[l].height&&(o+=i.widgets[l].height)
return n?o+(Math.ceil(i.text.length/r)||1)*t:o+t}}function o(e){var t=e.doc,n=i(e)
t.iter((function(e){var t=n(e)
t!=e.height&&dr(e,t)}))}function l(e){e.display.wrapper.className=e.display.wrapper.className.replace(/\s*cm-s-\S+/g,"")+e.options.theme.replace(/(^|\s)\s*/g," cm-s-"),Ke(e)}function a(e){s(e),wt(e),setTimeout((function(){b(e)}),20)}function s(e){var t=e.display.gutters,n=e.options.gutters
Jr(t)
for(var r=0;r<n.length;++r){var i=n[r],o=t.appendChild(Zr("div",null,"CodeMirror-gutter "+i))
"CodeMirror-linenumbers"==i&&(e.display.lineGutter=o,o.style.width=(e.display.lineNumWidth||1)+"px")}t.style.display=r?"":"none",c(e)}function c(e){var t=e.display.gutters.offsetWidth
e.display.sizer.style.marginLeft=t+"px"}function u(e){if(0==e.height)return 0
for(var t,n=e.text.length,r=e;t=In(r);){r=(i=t.find(0,!0)).from.line,n+=i.from.ch-i.to.ch}for(r=e;t=Pn(r);){var i=t.find(0,!0)
n-=r.text.length-i.from.ch,n+=(r=i.to.line).text.length-i.to.ch}return n}function h(e){var t=e.display,n=e.doc
t.maxLine=ur(n,n.first),t.maxLineLength=u(t.maxLine),t.maxLineChanged=!0,n.iter((function(e){var n=u(e)
n>t.maxLineLength&&(t.maxLineLength=n,t.maxLine=e)}))}function f(e){var t=jr(e.gutters,"CodeMirror-linenumbers");-1==t&&e.lineNumbers?e.gutters=e.gutters.concat(["CodeMirror-linenumbers"]):t>-1&&!e.lineNumbers&&(e.gutters=e.gutters.slice(0),e.gutters.splice(t,1))}function d(e){var t=e.display,n=t.gutters.offsetWidth,r=Math.round(e.doc.height+He(e.display))
return{clientHeight:t.scroller.clientHeight,viewHeight:t.wrapper.clientHeight,scrollWidth:t.scroller.scrollWidth,clientWidth:t.scroller.clientWidth,viewWidth:t.wrapper.clientWidth,barLeft:e.options.fixedGutter?n:0,docHeight:r,scrollHeight:r+Be(e)+t.barHeight,nativeBarWidth:t.nativeBarWidth,gutterWidth:n}}function p(e,t,n){this.cm=n
var r=this.vert=Zr("div",[Zr("div",null,null,"min-width: 1px")],"CodeMirror-vscrollbar"),i=this.horiz=Zr("div",[Zr("div",null,null,"height: 100%; min-height: 1px")],"CodeMirror-hscrollbar")
e(r),e(i),Ro(r,"scroll",(function(){r.clientHeight&&t(r.scrollTop,"vertical")})),Ro(i,"scroll",(function(){i.clientWidth&&t(i.scrollLeft,"horizontal")})),this.checkedZeroWidth=!1,ki&&8>Si&&(this.horiz.style.minHeight=this.vert.style.minWidth="18px")}function m(){}function g(t){t.display.scrollbars&&(t.display.scrollbars.clear(),t.display.scrollbars.addClass&&tl(t.display.wrapper,t.display.scrollbars.addClass)),t.display.scrollbars=new e.scrollbarModel[t.options.scrollbarStyle]((function(e){t.display.wrapper.insertBefore(e,t.display.scrollbarFiller),Ro(e,"mousedown",(function(){t.state.focused&&setTimeout((function(){t.display.input.focus()}),0)})),e.setAttribute("cm-not-content","true")}),(function(e,n){"horizontal"==n?Ht(t,e):Dt(t,e)}),t),t.display.scrollbars.addClass&&nl(t.display.wrapper,t.display.scrollbars.addClass)}function v(e,t){t||(t=d(e))
var n=e.display.barWidth,r=e.display.barHeight
y(e,t)
for(var i=0;4>i&&n!=e.display.barWidth||r!=e.display.barHeight;i++)n!=e.display.barWidth&&e.options.lineWrapping&&A(e),y(e,d(e)),n=e.display.barWidth,r=e.display.barHeight}function y(e,t){var n=e.display,r=n.scrollbars.update(t)
n.sizer.style.paddingRight=(n.barWidth=r.right)+"px",n.sizer.style.paddingBottom=(n.barHeight=r.bottom)+"px",n.heightForcer.style.borderBottom=r.bottom+"px solid transparent",r.right&&r.bottom?(n.scrollbarFiller.style.display="block",n.scrollbarFiller.style.height=r.bottom+"px",n.scrollbarFiller.style.width=r.right+"px"):n.scrollbarFiller.style.display="",r.bottom&&e.options.coverGutterNextToScrollbar&&e.options.fixedGutter?(n.gutterFiller.style.display="block",n.gutterFiller.style.height=r.bottom+"px",n.gutterFiller.style.width=t.gutterWidth+"px"):n.gutterFiller.style.display=""}function x(e,t,n){var r=n&&null!=n.top?Math.max(0,n.top):e.scroller.scrollTop
r=Math.floor(r-De(e))
var i=n&&null!=n.bottom?n.bottom:r+e.wrapper.clientHeight,o=mr(t,r),l=mr(t,i)
if(n&&n.ensure){var a=n.ensure.from.line,s=n.ensure.to.line
o>a?(o=a,l=mr(t,gr(ur(t,a))+e.wrapper.clientHeight)):Math.min(s,t.lastLine())>=l&&(o=mr(t,gr(ur(t,s))-e.wrapper.clientHeight),l=s)}return{from:o,to:Math.max(l,o+1)}}function b(e){var t=e.display,n=t.view
if(t.alignWidgets||t.gutters.firstChild&&e.options.fixedGutter){for(var r=S(t)-t.scroller.scrollLeft+e.doc.scrollLeft,i=t.gutters.offsetWidth,o=r+"px",l=0;l<n.length;l++)if(!n[l].hidden){e.options.fixedGutter&&n[l].gutter&&(n[l].gutter.style.left=o)
var a=n[l].alignable
if(a)for(var s=0;s<a.length;s++)a[s].style.left=o}e.options.fixedGutter&&(t.gutters.style.left=r+i+"px")}}function w(e){if(!e.options.lineNumbers)return!1
var t=e.doc,n=k(e.options,t.first+t.size-1),r=e.display
if(n.length!=r.lineNumChars){var i=r.measure.appendChild(Zr("div",[Zr("div",n)],"CodeMirror-linenumber CodeMirror-gutter-elt")),o=i.firstChild.offsetWidth,l=i.offsetWidth-o
return r.lineGutter.style.width="",r.lineNumInnerWidth=Math.max(o,r.lineGutter.offsetWidth-l)+1,r.lineNumWidth=r.lineNumInnerWidth+l,r.lineNumChars=r.lineNumInnerWidth?n.length:-1,r.lineGutter.style.width=r.lineNumWidth+"px",c(e),!0}return!1}function k(e,t){return String(e.lineNumberFormatter(t+e.firstLineNumber))}function S(e){return e.scroller.getBoundingClientRect().left-e.sizer.getBoundingClientRect().left}function C(e,t,n){var r=e.display
this.viewport=t,this.visible=x(r,e.doc,t),this.editorIsHidden=!r.wrapper.offsetWidth,this.wrapperHeight=r.wrapper.clientHeight,this.wrapperWidth=r.wrapper.clientWidth,this.oldDisplayWidth=_e(e),this.force=n,this.dims=O(e),this.events=[]}function L(e,t){var n=e.display,r=e.doc
if(t.editorIsHidden)return St(e),!1
if(!t.force&&t.visible.from>=n.viewFrom&&t.visible.to<=n.viewTo&&(null==n.updateLineNumbers||n.updateLineNumbers>=n.viewTo)&&n.renderedView==n.view&&0==Tt(e))return!1
w(e)&&(St(e),t.dims=O(e))
var i=r.first+r.size,o=Math.max(t.visible.from-e.options.viewportMargin,r.first),l=Math.min(i,t.visible.to+e.options.viewportMargin)
n.viewFrom<o&&o-n.viewFrom<20&&(o=Math.max(r.first,n.viewFrom)),n.viewTo>l&&n.viewTo-l<20&&(l=Math.min(i,n.viewTo)),Fi&&(o=Hn(e.doc,o),l=Wn(e.doc,l))
var a=o!=n.viewFrom||l!=n.viewTo||n.lastWrapHeight!=t.wrapperHeight||n.lastWrapWidth!=t.wrapperWidth;(function(e,t,n){var r=e.display,i=r.view
0==i.length||t>=r.viewTo||n<=r.viewFrom?(r.view=bt(e,t,n),r.viewFrom=t):(r.viewFrom>t?r.view=bt(e,t,r.viewFrom).concat(r.view):r.viewFrom<t&&(r.view=r.view.slice(Ct(e,t))),r.viewFrom=t,r.viewTo<n?r.view=r.view.concat(bt(e,r.viewTo,n)):r.viewTo>n&&(r.view=r.view.slice(0,Ct(e,n)))),r.viewTo=n})(e,o,l),n.viewOffset=gr(ur(e.doc,n.viewFrom)),e.display.mover.style.top=n.viewOffset+"px"
var s=Tt(e)
if(!a&&0==s&&!t.force&&n.renderedView==n.view&&(null==n.updateLineNumbers||n.updateLineNumbers>=n.viewTo))return!1
var c=ei()
return s>4&&(n.lineDiv.style.display="none"),function(e,t,n){function r(t){var n=t.nextSibling
return Ci&&Pi&&e.display.currentWheelTarget==t?t.style.display="none":t.parentNode.removeChild(t),n}for(var i=e.display,o=e.options.lineNumbers,l=i.lineDiv,a=l.firstChild,s=i.view,c=i.viewFrom,u=0;u<s.length;u++){var h=s[u]
if(h.hidden);else if(h.node&&h.node.parentNode==l){for(;a!=h.node;)a=r(a)
var f=o&&null!=t&&c>=t&&h.lineNumber
h.changes&&(jr(h.changes,"gutter")>-1&&(f=!1),I(e,h,c,n)),f&&(Jr(h.lineNumber),h.lineNumber.appendChild(document.createTextNode(k(e.options,c)))),a=h.node.nextSibling}else{var d=_(e,h,c,n)
l.insertBefore(d,a)}c+=h.size}for(;a;)a=r(a)}(e,n.updateLineNumbers,t.dims),s>4&&(n.lineDiv.style.display=""),n.renderedView=n.view,c&&ei()!=c&&c.offsetHeight&&c.focus(),Jr(n.cursorDiv),Jr(n.selectionDiv),n.gutters.style.height=n.sizer.style.minHeight=0,a&&(n.lastWrapHeight=t.wrapperHeight,n.lastWrapWidth=t.wrapperWidth,Ie(e,400)),n.updateLineNumbers=null,!0}function T(e,t){for(var n=t.viewport,r=!0;(r&&e.options.lineWrapping&&t.oldDisplayWidth!=_e(e)||(n&&null!=n.top&&(n={top:Math.min(e.doc.height+He(e.display)-Fe(e),n.top)}),t.visible=x(e.display,e.doc,n),!(t.visible.from>=e.display.viewFrom&&t.visible.to<=e.display.viewTo)))&&L(e,t);r=!1){A(e)
var i=d(e)
Me(e),v(e,i),N(e,i)}t.signal(e,"update",e),e.display.viewFrom==e.display.reportedViewFrom&&e.display.viewTo==e.display.reportedViewTo||(t.signal(e,"viewportChange",e,e.display.viewFrom,e.display.viewTo),e.display.reportedViewFrom=e.display.viewFrom,e.display.reportedViewTo=e.display.viewTo)}function M(e,t){var n=new C(e,t)
if(L(e,n)){A(e),T(e,n)
var r=d(e)
Me(e),v(e,r),N(e,r),n.finish()}}function N(e,t){e.display.sizer.style.minHeight=t.docHeight+"px",e.display.heightForcer.style.top=t.docHeight+"px",e.display.gutters.style.height=t.docHeight+e.display.barHeight+Be(e)+"px"}function A(e){for(var t=e.display,n=t.lineDiv.offsetTop,r=0;r<t.view.length;r++){var i,o=t.view[r]
if(!o.hidden){if(ki&&8>Si){var l=o.node.offsetTop+o.node.offsetHeight
i=l-n,n=l}else{var a=o.node.getBoundingClientRect()
i=a.bottom-a.top}var s=o.line.height-i
if(2>i&&(i=lt(t)),(s>.001||-.001>s)&&(dr(o.line,i),E(o.line),o.rest))for(var c=0;c<o.rest.length;c++)E(o.rest[c])}}}function E(e){if(e.widgets)for(var t=0;t<e.widgets.length;++t)e.widgets[t].height=e.widgets[t].node.parentNode.offsetHeight}function O(e){for(var t=e.display,n={},r={},i=t.gutters.clientLeft,o=t.gutters.firstChild,l=0;o;o=o.nextSibling,++l)n[e.options.gutters[l]]=o.offsetLeft+o.clientLeft+i,r[e.options.gutters[l]]=o.clientWidth
return{fixedPos:S(t),gutterTotalWidth:t.gutters.offsetWidth,gutterLeft:n,gutterWidth:r,wrapperWidth:t.wrapper.clientWidth}}function I(e,t,n,r){for(var i=0;i<t.changes.length;i++){var o=t.changes[i]
"text"==o?D(e,t):"gutter"==o?W(e,t,n,r):"class"==o?H(t):"widget"==o&&B(e,t,r)}t.changes=null}function P(e){return e.node==e.text&&(e.node=Zr("div",null,null,"position: relative"),e.text.parentNode&&e.text.parentNode.replaceChild(e.node,e.text),e.node.appendChild(e.text),ki&&8>Si&&(e.node.style.zIndex=2)),e.node}function R(e,t){var n=e.display.externalMeasured
return n&&n.line==t.line?(e.display.externalMeasured=null,t.measure=n.measure,n.built):Jn(e,t)}function D(e,t){var n=t.text.className,r=R(e,t)
t.text==t.node&&(t.node=r.pre),t.text.parentNode.replaceChild(r.pre,t.text),t.text=r.pre,r.bgClass!=t.bgClass||r.textClass!=t.textClass?(t.bgClass=r.bgClass,t.textClass=r.textClass,H(t)):n&&(t.text.className=n)}function H(e){(function(e){var t=e.bgClass?e.bgClass+" "+(e.line.bgClass||""):e.line.bgClass
if(t&&(t+=" CodeMirror-linebackground"),e.background)t?e.background.className=t:(e.background.parentNode.removeChild(e.background),e.background=null)
else if(t){var n=P(e)
e.background=n.insertBefore(Zr("div",null,t),n.firstChild)}})(e),e.line.wrapClass?P(e).className=e.line.wrapClass:e.node!=e.text&&(e.node.className="")
var t=e.textClass?e.textClass+" "+(e.line.textClass||""):e.line.textClass
e.text.className=t||""}function W(e,t,n,r){if(t.gutter&&(t.node.removeChild(t.gutter),t.gutter=null),t.gutterBackground&&(t.node.removeChild(t.gutterBackground),t.gutterBackground=null),t.line.gutterClass){var i=P(t)
t.gutterBackground=Zr("div",null,"CodeMirror-gutter-background "+t.line.gutterClass,"left: "+(e.options.fixedGutter?r.fixedPos:-r.gutterTotalWidth)+"px; width: "+r.gutterTotalWidth+"px"),i.insertBefore(t.gutterBackground,t.text)}var o=t.line.gutterMarkers
if(e.options.lineNumbers||o){i=P(t)
var l=t.gutter=Zr("div",null,"CodeMirror-gutter-wrapper","left: "+(e.options.fixedGutter?r.fixedPos:-r.gutterTotalWidth)+"px")
if(e.display.input.setUneditable(l),i.insertBefore(l,t.text),t.line.gutterClass&&(l.className+=" "+t.line.gutterClass),!e.options.lineNumbers||o&&o["CodeMirror-linenumbers"]||(t.lineNumber=l.appendChild(Zr("div",k(e.options,n),"CodeMirror-linenumber CodeMirror-gutter-elt","left: "+r.gutterLeft["CodeMirror-linenumbers"]+"px; width: "+e.display.lineNumInnerWidth+"px"))),o)for(var a=0;a<e.options.gutters.length;++a){var s=e.options.gutters[a],c=o.hasOwnProperty(s)&&o[s]
c&&l.appendChild(Zr("div",[c],"CodeMirror-gutter-elt","left: "+r.gutterLeft[s]+"px; width: "+r.gutterWidth[s]+"px"))}}}function B(e,t,n){t.alignable&&(t.alignable=null)
for(var r=t.node.firstChild;r;r=i){var i=r.nextSibling
"CodeMirror-linewidget"==r.className&&t.node.removeChild(r)}F(e,t,n)}function _(e,t,n,r){var i=R(e,t)
return t.text=t.node=i.pre,i.bgClass&&(t.bgClass=i.bgClass),i.textClass&&(t.textClass=i.textClass),H(t),W(e,t,n,r),F(e,t,r),t.node}function F(e,t,n){if(z(e,t.line,t,n,!0),t.rest)for(var r=0;r<t.rest.length;r++)z(e,t.rest[r],t,n,!1)}function z(e,t,n,r,i){if(t.widgets)for(var o=P(n),l=0,a=t.widgets;l<a.length;++l){var s=a[l],c=Zr("div",[s.node],"CodeMirror-linewidget")
s.handleMouseEvents||c.setAttribute("cm-ignore-events","true"),j(s,c,n,r),e.display.input.setUneditable(c),i&&s.above?o.insertBefore(c,n.gutter||n.text):o.appendChild(c),Pr(s,"redraw")}}function j(e,t,n,r){if(e.noHScroll){(n.alignable||(n.alignable=[])).push(t)
var i=r.wrapperWidth
t.style.left=r.fixedPos+"px",e.coverGutter||(i-=r.gutterTotalWidth,t.style.paddingLeft=r.gutterTotalWidth+"px"),t.style.width=i+"px"}e.coverGutter&&(t.style.zIndex=5,t.style.position="relative",e.noHScroll||(t.style.marginLeft=-r.gutterTotalWidth+"px"))}function U(e){return zi(e.line,e.ch)}function q(e,t){return ji(e,t)<0?t:e}function G(e,t){return ji(e,t)<0?e:t}function Y(e){e.state.focused||(e.display.input.focus(),qt(e))}function $(e,t,n,r,i){var o=e.doc
e.display.shift=!1,r||(r=o.sel)
var l=e.state.pasteIncoming||"paste"==i,a=o.splitLines(t),s=null
if(l&&r.ranges.length>1)if(Ui&&Ui.text.join("\n")==t){if(r.ranges.length%Ui.text.length==0){s=[]
for(var c=0;c<Ui.text.length;c++)s.push(o.splitLines(Ui.text[c]))}}else a.length==r.ranges.length&&(s=Ur(a,(function(e){return[e]})))
for(c=r.ranges.length-1;c>=0;c--){var u=r.ranges[c],h=u.from(),f=u.to()
u.empty()&&(n&&n>0?h=zi(h.line,h.ch-n):e.state.overwrite&&!l?f=zi(f.line,Math.min(ur(o,f.line).text.length,f.ch+zr(a).length)):Ui&&Ui.lineWise&&Ui.text.join("\n")==t&&(h=f=zi(h.line,0)))
var d=e.curOp.updateInput,p={from:h,to:f,text:s?s[c%s.length]:a,origin:i||(l?"paste":e.state.cutIncoming?"cut":"+input")}
Zt(e.doc,p),Pr(e,"inputRead",e,p)}t&&!l&&K(e,t),an(e),e.curOp.updateInput=d,e.curOp.typing=!0,e.state.pasteIncoming=e.state.cutIncoming=!1}function V(e,t){var n=e.clipboardData&&e.clipboardData.getData("text/plain")
return n?(e.preventDefault(),t.isReadOnly()||t.options.disableInput||mt(t,(function(){$(t,n,0,null,"paste")})),!0):void 0}function K(e,t){if(e.options.electricChars&&e.options.smartIndent)for(var n=e.doc.sel,r=n.ranges.length-1;r>=0;r--){var i=n.ranges[r]
if(!(i.head.ch>100||r&&n.ranges[r-1].head.line==i.head.line)){var o=e.getModeAt(i.head),l=!1
if(o.electricChars){for(var a=0;a<o.electricChars.length;a++)if(t.indexOf(o.electricChars.charAt(a))>-1){l=cn(e,i.head.line,"smart")
break}}else o.electricInput&&o.electricInput.test(ur(e.doc,i.head.line).text.slice(0,i.head.ch))&&(l=cn(e,i.head.line,"smart"))
l&&Pr(e,"electricInput",e,i.head.line)}}}function X(e){for(var t=[],n=[],r=0;r<e.doc.sel.ranges.length;r++){var i=e.doc.sel.ranges[r].head.line,o={anchor:zi(i,0),head:zi(i+1,0)}
n.push(o),t.push(e.getRange(o.anchor,o.head))}return{text:t,ranges:n}}function Z(e){e.setAttribute("autocorrect","off"),e.setAttribute("autocapitalize","off"),e.setAttribute("spellcheck","false")}function J(e){this.cm=e,this.prevInput="",this.pollingFast=!1,this.polling=new _r,this.inaccurateSelection=!1,this.hasSelection=!1,this.composing=null}function Q(){var e=Zr("textarea",null,null,"position: absolute; padding: 0; width: 1px; height: 1em; outline: none"),t=Zr("div",[e],null,"overflow: hidden; position: relative; width: 3px; height: 0px;")
return Ci?e.style.width="1000px":e.setAttribute("wrap","off"),Oi&&(e.style.border="1px solid black"),Z(e),t}function ee(e){this.cm=e,this.lastAnchorNode=this.lastAnchorOffset=this.lastFocusNode=this.lastFocusOffset=null,this.polling=new _r,this.gracePeriod=!1}function te(e,t){var n=Ue(e,t.line)
if(!n||n.hidden)return null
var r=ur(e.doc,t.line),i=ze(n,r,t.line),o=vr(r),l="left"
o&&(l=di(o,t.ch)%2?"right":"left")
var a=Ye(i.map,t.ch,l)
return a.offset="right"==a.collapse?a.end:a.start,a}function ne(e,t){return t&&(e.bad=!0),e}function re(e,t,n){var r
if(t==e.display.lineDiv){if(!(r=e.display.lineDiv.childNodes[n]))return ne(e.clipPos(zi(e.display.viewTo-1)),!0)
t=null,n=0}else for(r=t;;r=r.parentNode){if(!r||r==e.display.lineDiv)return null
if(r.parentNode&&r.parentNode==e.display.lineDiv)break}for(var i=0;i<e.display.view.length;i++){var o=e.display.view[i]
if(o.node==r)return ie(o,t,n)}}function ie(e,t,n){function r(t,n,r){for(var i=-1;i<(u?u.length:0);i++)for(var o=0>i?c.map:u[i],l=0;l<o.length;l+=3){var a=o[l+2]
if(a==t||a==n){var s=pr(0>i?e.line:e.rest[i]),h=o[l]+r
return(0>r||a!=t)&&(h=o[l+(r?1:0)]),zi(s,h)}}}var i=e.text.firstChild,o=!1
if(!t||!Jo(i,t))return ne(zi(pr(e.line),0),!0)
if(t==i&&(o=!0,t=i.childNodes[n],n=0,!t)){var l=e.rest?zr(e.rest):e.line
return ne(zi(pr(l),l.text.length),o)}var a=3==t.nodeType?t:null,s=t
for(a||1!=t.childNodes.length||3!=t.firstChild.nodeType||(a=t.firstChild,n&&(n=a.nodeValue.length));s.parentNode!=i;)s=s.parentNode
var c=e.measure,u=c.maps,h=r(a,s,n)
if(h)return ne(h,o)
for(var f=s.nextSibling,d=a?a.nodeValue.length-n:0;f;f=f.nextSibling){if(h=r(f,f.firstChild,0))return ne(zi(h.line,h.ch-d),o)
d+=f.textContent.length}var p=s.previousSibling
for(d=n;p;p=p.previousSibling){if(h=r(p,p.firstChild,-1))return ne(zi(h.line,h.ch+d),o)
d+=f.textContent.length}}function oe(e,t){this.ranges=e,this.primIndex=t}function le(e,t){this.anchor=e,this.head=t}function ae(e,t){var n=e[t]
e.sort((function(e,t){return ji(e.from(),t.from())})),t=jr(e,n)
for(var r=1;r<e.length;r++){var i=e[r],o=e[r-1]
if(ji(o.to(),i.from())>=0){var l=G(o.from(),i.from()),a=q(o.to(),i.to()),s=o.empty()?i.from()==i.head:o.from()==o.head
t>=r&&--t,e.splice(--r,2,new le(s?a:l,s?l:a))}}return new oe(e,t)}function se(e,t){return new oe([new le(e,t||e)],0)}function ce(e,t){return Math.max(e.first,Math.min(t,e.first+e.size-1))}function ue(e,t){if(t.line<e.first)return zi(e.first,0)
var n=e.first+e.size-1
return t.line>n?zi(n,ur(e,n).text.length):function(e,t){var n=e.ch
return null==n||n>t?zi(e.line,t):0>n?zi(e.line,0):e}(t,ur(e,t.line).text.length)}function he(e,t){return t>=e.first&&t<e.first+e.size}function fe(e,t){for(var n=[],r=0;r<t.length;r++)n[r]=ue(e,t[r])
return n}function de(e,t,n,r){if(e.cm&&e.cm.display.shift||e.extend){var i=t.anchor
if(r){var o=ji(n,i)<0
o!=ji(r,i)<0?(i=n,n=r):o!=ji(n,r)<0&&(n=r)}return new le(i,n)}return new le(r||n,n)}function pe(e,t,n,r){xe(e,new oe([de(e,e.sel.primary(),t,n)],0),r)}function me(e,t,n){for(var r=[],i=0;i<e.sel.ranges.length;i++)r[i]=de(e,e.sel.ranges[i],t[i],null)
xe(e,ae(r,e.sel.primIndex),n)}function ge(e,t,n,r){var i=e.sel.ranges.slice(0)
i[t]=n,xe(e,ae(i,e.sel.primIndex),r)}function ve(e,t,n,r){xe(e,se(t,n),r)}function ye(e,t,n){var r=e.history.done,i=zr(r)
i&&i.ranges?(r[r.length-1]=t,be(e,t,n)):xe(e,t,n)}function xe(e,t,n){be(e,t,n),function(e,t,n,r){var i=e.history,o=r&&r.origin
n==i.lastSelOp||o&&i.lastSelOrigin==o&&(i.lastModTime==i.lastSelTime&&i.lastOrigin==o||function(e,t,n,r){var i=t.charAt(0)
return"*"==i||"+"==i&&n.ranges.length==r.ranges.length&&n.somethingSelected()==r.somethingSelected()&&new Date-e.history.lastSelTime<=(e.cm?e.cm.options.historyEventDelay:500)}(e,o,zr(i.done),t))?i.done[i.done.length-1]=t:kr(t,i.done),i.lastSelTime=+new Date,i.lastSelOrigin=o,i.lastSelOp=n,r&&!1!==r.clearRedo&&br(i.undone)}(e,e.sel,e.cm?e.cm.curOp.id:NaN,n)}function be(e,t,n){(Wr(e,"beforeSelectionChange")||e.cm&&Wr(e.cm,"beforeSelectionChange"))&&(t=function(e,t,n){var r={ranges:t.ranges,update:function(t){this.ranges=[]
for(var n=0;n<t.length;n++)this.ranges[n]=new le(ue(e,t[n].anchor),ue(e,t[n].head))},origin:n&&n.origin}
return Wo(e,"beforeSelectionChange",e,r),e.cm&&Wo(e.cm,"beforeSelectionChange",e.cm,r),r.ranges!=t.ranges?ae(r.ranges,r.ranges.length-1):t}(e,t,n))
var r=n&&n.bias||(ji(t.primary().head,e.sel.primary().head)<0?-1:1)
we(e,Se(e,t,r,!0)),n&&!1===n.scroll||!e.cm||an(e.cm)}function we(e,t){t.equals(e.sel)||(e.sel=t,e.cm&&(e.cm.curOp.updateInput=e.cm.curOp.selectionChanged=!0,Hr(e.cm)),Pr(e,"cursorActivity",e))}function ke(e){we(e,Se(e,e.sel,null,!1))}function Se(e,t,n,r){for(var i,o=0;o<t.ranges.length;o++){var l=t.ranges[o],a=t.ranges.length==e.sel.ranges.length&&e.sel.ranges[o],s=Le(e,l.anchor,a&&a.anchor,n,r),c=Le(e,l.head,a&&a.head,n,r);(i||s!=l.anchor||c!=l.head)&&(i||(i=t.ranges.slice(0,o)),i[o]=new le(s,c))}return i?ae(i,t.primIndex):t}function Ce(e,t,n,r,i){var o=ur(e,t.line)
if(o.markedSpans)for(var l=0;l<o.markedSpans.length;++l){var a=o.markedSpans[l],s=a.marker
if((null==a.from||(s.inclusiveLeft?a.from<=t.ch:a.from<t.ch))&&(null==a.to||(s.inclusiveRight?a.to>=t.ch:a.to>t.ch))){if(i&&(Wo(s,"beforeCursorEnter"),s.explicitlyCleared)){if(o.markedSpans){--l
continue}break}if(!s.atomic)continue
if(n){var c,u=s.find(0>r?1:-1)
if((0>r?s.inclusiveRight:s.inclusiveLeft)&&(u=Te(e,u,-r,u&&u.line==t.line?o:null)),u&&u.line==t.line&&(c=ji(u,n))&&(0>r?0>c:c>0))return Ce(e,u,t,r,i)}var h=s.find(0>r?-1:1)
return(0>r?s.inclusiveLeft:s.inclusiveRight)&&(h=Te(e,h,r,h.line==t.line?o:null)),h?Ce(e,h,t,r,i):null}}return t}function Le(e,t,n,r,i){var o=r||1,l=Ce(e,t,n,o,i)||!i&&Ce(e,t,n,o,!0)||Ce(e,t,n,-o,i)||!i&&Ce(e,t,n,-o,!0)
return l||(e.cantEdit=!0,zi(e.first,0))}function Te(e,t,n,r){return 0>n&&0==t.ch?t.line>e.first?ue(e,zi(t.line-1)):null:n>0&&t.ch==(r||ur(e,t.line)).text.length?t.line<e.first+e.size-1?zi(t.line+1,0):null:new zi(t.line,t.ch+n)}function Me(e){e.display.input.showSelection(e.display.input.prepareSelection())}function Ne(e,t){for(var n=e.doc,r={},i=r.cursors=document.createDocumentFragment(),o=r.selection=document.createDocumentFragment(),l=0;l<n.sel.ranges.length;l++)if(!1!==t||l!=n.sel.primIndex){var a=n.sel.ranges[l]
if(!(a.from().line>=e.display.viewTo||a.to().line<e.display.viewFrom)){var s=a.empty();(s||e.options.showCursorWhenSelecting)&&Ae(e,a.head,i),s||Ee(e,a,o)}}return r}function Ae(e,t,n){var r=tt(e,t,"div",null,null,!e.options.singleCursorHeightPerLine),i=n.appendChild(Zr("div"," ","CodeMirror-cursor"))
if(i.style.left=r.left+"px",i.style.top=r.top+"px",i.style.height=Math.max(0,r.bottom-r.top)*e.options.cursorHeight+"px",r.other){var o=n.appendChild(Zr("div"," ","CodeMirror-cursor CodeMirror-secondarycursor"))
o.style.display="",o.style.left=r.other.left+"px",o.style.top=r.other.top+"px",o.style.height=.85*(r.other.bottom-r.other.top)+"px"}}function Ee(e,t,n){function r(e,t,n,r){0>t&&(t=0),t=Math.round(t),r=Math.round(r),a.appendChild(Zr("div",null,"CodeMirror-selected","position: absolute; left: "+e+"px; top: "+t+"px; width: "+(null==n?u-e:n)+"px; height: "+(r-t)+"px"))}function i(t,n,i){function o(n,r){return et(e,zi(t,n),"div",h,r)}var a,s,h=ur(l,t),f=h.text.length
return function(e,t,n,r){if(!e)return r(t,n,"ltr")
for(var i=!1,o=0;o<e.length;++o){var l=e[o];(l.from<n&&l.to>t||t==n&&l.to==t)&&(r(Math.max(l.from,t),Math.min(l.to,n),1==l.level?"rtl":"ltr"),i=!0)}i||r(t,n,"ltr")}(vr(h),n||0,null==i?f:i,(function(e,t,l){var h,d,p,m=o(e,"left")
if(e==t)h=m,d=p=m.left
else{if(h=o(t-1,"right"),"rtl"==l){var g=m
m=h,h=g}d=m.left,p=h.right}null==n&&0==e&&(d=c),h.top-m.top>3&&(r(d,m.top,null,m.bottom),d=c,m.bottom<h.top&&r(d,m.bottom,null,h.top)),null==i&&t==f&&(p=u),(!a||m.top<a.top||m.top==a.top&&m.left<a.left)&&(a=m),(!s||h.bottom>s.bottom||h.bottom==s.bottom&&h.right>s.right)&&(s=h),c+1>d&&(d=c),r(d,h.top,p-d,h.bottom)})),{start:a,end:s}}var o=e.display,l=e.doc,a=document.createDocumentFragment(),s=We(e.display),c=s.left,u=Math.max(o.sizerWidth,_e(e)-o.sizer.offsetLeft)-s.right,h=t.from(),f=t.to()
if(h.line==f.line)i(h.line,h.ch,f.ch)
else{var d=ur(l,h.line),p=ur(l,f.line),m=Dn(d)==Dn(p),g=i(h.line,h.ch,m?d.text.length+1:null).end,v=i(f.line,m?0:null,f.ch).start
m&&(g.top<v.top-2?(r(g.right,g.top,null,g.bottom),r(c,v.top,v.left,v.bottom)):r(g.right,g.top,v.left-g.right,g.bottom)),g.bottom<v.top&&r(c,g.bottom,null,v.top)}n.appendChild(a)}function Oe(e){if(e.state.focused){var t=e.display
clearInterval(t.blinker)
var n=!0
t.cursorDiv.style.visibility="",e.options.cursorBlinkRate>0?t.blinker=setInterval((function(){t.cursorDiv.style.visibility=(n=!n)?"":"hidden"}),e.options.cursorBlinkRate):e.options.cursorBlinkRate<0&&(t.cursorDiv.style.visibility="hidden")}}function Ie(e,t){e.doc.mode.startState&&e.doc.frontier<e.display.viewTo&&e.state.highlight.set(t,$r(Pe,e))}function Pe(e){var t=e.doc
if(t.frontier<t.first&&(t.frontier=t.first),!(t.frontier>=e.display.viewTo)){var n=+new Date+e.options.workTime,r=ho(t.mode,Re(e,t.frontier)),i=[]
t.iter(t.frontier,Math.min(t.first+t.size,e.display.viewTo+500),(function(o){if(t.frontier>=e.display.viewFrom){var l=o.styles,a=o.text.length>e.options.maxHighlightLength,s=Vn(e,o,a?ho(t.mode,r):r,!0)
o.styles=s.styles
var c=o.styleClasses,u=s.classes
u?o.styleClasses=u:c&&(o.styleClasses=null)
for(var h=!l||l.length!=o.styles.length||c!=u&&(!c||!u||c.bgClass!=u.bgClass||c.textClass!=u.textClass),f=0;!h&&f<l.length;++f)h=l[f]!=o.styles[f]
h&&i.push(t.frontier),o.stateAfter=a?r:ho(t.mode,r)}else o.text.length<=e.options.maxHighlightLength&&Xn(e,o.text,r),o.stateAfter=t.frontier%5==0?ho(t.mode,r):null
return++t.frontier,+new Date>n?(Ie(e,e.options.workDelay),!0):void 0})),i.length&&mt(e,(function(){for(var t=0;t<i.length;t++)kt(e,i[t],"text")}))}}function Re(e,t,n){var r=e.doc,i=e.display
if(!r.mode.startState)return!0
var o=function(e,t,n){for(var r,i,o=e.doc,l=n?-1:t-(e.doc.mode.innerMode?1e3:100),a=t;a>l;--a){if(a<=o.first)return o.first
var s=ur(o,a-1)
if(s.stateAfter&&(!n||a<=o.frontier))return a
var c=qo(s.text,null,e.options.tabSize);(null==i||r>c)&&(i=a-1,r=c)}return i}(e,t,n),l=o>r.first&&ur(r,o-1).stateAfter
return l=l?ho(r.mode,l):fo(r.mode),r.iter(o,t,(function(n){Xn(e,n.text,l)
var a=o==t-1||o%5==0||o>=i.viewFrom&&o<i.viewTo
n.stateAfter=a?ho(r.mode,l):null,++o})),n&&(r.frontier=o),l}function De(e){return e.lineSpace.offsetTop}function He(e){return e.mover.offsetHeight-e.lineSpace.offsetHeight}function We(e){if(e.cachedPaddingH)return e.cachedPaddingH
var t=Qr(e.measure,Zr("pre","x")),n=window.getComputedStyle?window.getComputedStyle(t):t.currentStyle,r={left:parseInt(n.paddingLeft),right:parseInt(n.paddingRight)}
return isNaN(r.left)||isNaN(r.right)||(e.cachedPaddingH=r),r}function Be(e){return _o-e.display.nativeBarWidth}function _e(e){return e.display.scroller.clientWidth-Be(e)-e.display.barWidth}function Fe(e){return e.display.scroller.clientHeight-Be(e)-e.display.barHeight}function ze(e,t,n){if(e.line==t)return{map:e.measure.map,cache:e.measure.cache}
for(var r=0;r<e.rest.length;r++)if(e.rest[r]==t)return{map:e.measure.maps[r],cache:e.measure.caches[r]}
for(r=0;r<e.rest.length;r++)if(pr(e.rest[r])>n)return{map:e.measure.maps[r],cache:e.measure.caches[r],before:!0}}function je(e,t,n,r){return Ge(e,qe(e,t),n,r)}function Ue(e,t){if(t>=e.display.viewFrom&&t<e.display.viewTo)return e.display.view[Ct(e,t)]
var n=e.display.externalMeasured
return n&&t>=n.lineN&&t<n.lineN+n.size?n:void 0}function qe(e,t){var n=pr(t),r=Ue(e,n)
r&&!r.text?r=null:r&&r.changes&&(I(e,r,n,O(e)),e.curOp.forceUpdate=!0),r||(r=function(e,t){var n=pr(t=Dn(t)),r=e.display.externalMeasured=new xt(e.doc,t,n)
r.lineN=n
var i=r.built=Jn(e,r)
return r.text=i.pre,Qr(e.display.lineMeasure,i.pre),r}(e,t))
var i=ze(r,t,n)
return{line:t,view:r,rect:null,map:i.map,cache:i.cache,before:i.before,hasHeights:!1}}function Ge(e,t,n,r,i){t.before&&(n=-1)
var o,l=n+(r||"")
return t.cache.hasOwnProperty(l)?o=t.cache[l]:(t.rect||(t.rect=t.view.text.getBoundingClientRect()),t.hasHeights||(function(e,t,n){var r=e.options.lineWrapping,i=r&&_e(e)
if(!t.measure.heights||r&&t.measure.width!=i){var o=t.measure.heights=[]
if(r){t.measure.width=i
for(var l=t.text.firstChild.getClientRects(),a=0;a<l.length-1;a++){var s=l[a],c=l[a+1]
Math.abs(s.bottom-c.bottom)>2&&o.push((s.bottom+c.top)/2-n.top)}}o.push(n.bottom-n.top)}}(e,t.view,t.rect),t.hasHeights=!0),o=function(e,t,n,r){var i,o=Ye(t.map,n,r),l=o.node,a=o.start,s=o.end,c=o.collapse
if(3==l.nodeType){for(var u=0;4>u;u++){for(;a&&Xr(t.line.text.charAt(o.coverStart+a));)--a
for(;o.coverStart+s<o.coverEnd&&Xr(t.line.text.charAt(o.coverStart+s));)++s
if(ki&&9>Si&&0==a&&s==o.coverEnd-o.coverStart)i=l.parentNode.getBoundingClientRect()
else if(ki&&e.options.lineWrapping){i=(h=Vo(l,a,s).getClientRects()).length?h["right"==r?h.length-1:0]:$i}else i=Vo(l,a,s).getBoundingClientRect()||$i
if(i.left||i.right||0==a)break
s=a,a-=1,c="right"}ki&&11>Si&&(i=function(e,t){if(!window.screen||null==screen.logicalXDPI||screen.logicalXDPI==screen.deviceXDPI||!function(e){if(null!=sl)return sl
var t=Qr(e,Zr("span","x")),n=t.getBoundingClientRect(),r=Vo(t,0,1).getBoundingClientRect()
return sl=Math.abs(n.left-r.left)>1}(e))return t
var n=screen.logicalXDPI/screen.deviceXDPI,r=screen.logicalYDPI/screen.deviceYDPI
return{left:t.left*n,right:t.right*n,top:t.top*r,bottom:t.bottom*r}}(e.display.measure,i))}else{var h
a>0&&(c=r="right"),i=e.options.lineWrapping&&(h=l.getClientRects()).length>1?h["right"==r?h.length-1:0]:l.getBoundingClientRect()}if(ki&&9>Si&&!a&&(!i||!i.left&&!i.right)){var f=l.parentNode.getClientRects()[0]
i=f?{left:f.left,right:f.left+at(e.display),top:f.top,bottom:f.bottom}:$i}var d=i.top-t.rect.top,p=i.bottom-t.rect.top,m=(d+p)/2,g=t.view.measure.heights
for(u=0;u<g.length-1&&!(m<g[u]);u++);var v=u?g[u-1]:0,y=g[u],x={left:("right"==c?i.right:i.left)-t.rect.left,right:("left"==c?i.left:i.right)-t.rect.left,top:v,bottom:y}
return i.left||i.right||(x.bogus=!0),e.options.singleCursorHeightPerLine||(x.rtop=d,x.rbottom=p),x}(e,t,n,r),o.bogus||(t.cache[l]=o)),{left:o.left,right:o.right,top:i?o.rtop:o.top,bottom:i?o.rbottom:o.bottom}}function Ye(e,t,n){for(var r,i,o,l,a=0;a<e.length;a+=3){var s=e[a],c=e[a+1]
if(s>t?(i=0,o=1,l="left"):c>t?o=(i=t-s)+1:(a==e.length-3||t==c&&e[a+3]>t)&&(i=(o=c-s)-1,t>=c&&(l="right")),null!=i){if(r=e[a+2],s==c&&n==(r.insertLeft?"left":"right")&&(l=n),"left"==n&&0==i)for(;a&&e[a-2]==e[a-3]&&e[a-1].insertLeft;)r=e[2+(a-=3)],l="left"
if("right"==n&&i==c-s)for(;a<e.length-3&&e[a+3]==e[a+4]&&!e[a+5].insertLeft;)r=e[(a+=3)+2],l="right"
break}}return{node:r,start:i,end:o,collapse:l,coverStart:s,coverEnd:c}}function $e(e){if(e.measure&&(e.measure.cache={},e.measure.heights=null,e.rest))for(var t=0;t<e.rest.length;t++)e.measure.caches[t]={}}function Ve(e){e.display.externalMeasure=null,Jr(e.display.lineMeasure)
for(var t=0;t<e.display.view.length;t++)$e(e.display.view[t])}function Ke(e){Ve(e),e.display.cachedCharWidth=e.display.cachedTextHeight=e.display.cachedPaddingH=null,e.options.lineWrapping||(e.display.maxLineChanged=!0),e.display.lineNumChars=null}function Xe(){return window.pageXOffset||(document.documentElement||document.body).scrollLeft}function Ze(){return window.pageYOffset||(document.documentElement||document.body).scrollTop}function Je(e,t,n,r){if(t.widgets)for(var i=0;i<t.widgets.length;++i)if(t.widgets[i].above){var o=zn(t.widgets[i])
n.top+=o,n.bottom+=o}if("line"==r)return n
r||(r="local")
var l=gr(t)
if("local"==r?l+=De(e.display):l-=e.display.viewOffset,"page"==r||"window"==r){var a=e.display.lineSpace.getBoundingClientRect()
l+=a.top+("window"==r?0:Ze())
var s=a.left+("window"==r?0:Xe())
n.left+=s,n.right+=s}return n.top+=l,n.bottom+=l,n}function Qe(e,t,n){if("div"==n)return t
var r=t.left,i=t.top
if("page"==n)r-=Xe(),i-=Ze()
else if("local"==n||!n){var o=e.display.sizer.getBoundingClientRect()
r+=o.left,i+=o.top}var l=e.display.lineSpace.getBoundingClientRect()
return{left:r-l.left,top:i-l.top}}function et(e,t,n,r,i){return r||(r=ur(e.doc,t.line)),Je(e,r,je(e,r,t.ch,i),n)}function tt(e,t,n,r,i,o){function l(t,l){var a=Ge(e,i,t,l?"right":"left",o)
return l?a.left=a.right:a.right=a.left,Je(e,r,a,n)}function a(e,t){var n=s[t],r=n.level%2
return e==li(n)&&t&&n.level<s[t-1].level?(e=ai(n=s[--t])-(n.level%2?0:1),r=!0):e==ai(n)&&t<s.length-1&&n.level<s[t+1].level&&(e=li(n=s[++t])-n.level%2,r=!1),r&&e==n.to&&e>n.from?l(e-1):l(e,r)}r=r||ur(e.doc,t.line),i||(i=qe(e,r))
var s=vr(r),c=t.ch
if(!s)return l(c)
var u=a(c,di(s,c))
return null!=ul&&(u.other=a(c,ul)),u}function nt(e,t){var n=0
t=ue(e.doc,t)
e.options.lineWrapping||(n=at(e.display)*t.ch)
var r=ur(e.doc,t.line),i=gr(r)+De(e.display)
return{left:n,right:n,top:i,bottom:i+r.height}}function rt(e,t,n,r){var i=zi(e,t)
return i.xRel=r,n&&(i.outside=!0),i}function it(e,t,n){var r=e.doc
if(0>(n+=e.display.viewOffset))return rt(r.first,0,!0,-1)
var i=mr(r,n),o=r.first+r.size-1
if(i>o)return rt(r.first+r.size-1,ur(r,o).text.length,!0,1)
0>t&&(t=0)
for(var l=ur(r,i);;){var a=ot(e,l,i,t,n),s=Pn(l),c=s&&s.find(0,!0)
if(!s||!(a.ch>c.from.ch||a.ch==c.from.ch&&a.xRel>0))return a
i=pr(l=c.to.line)}}function ot(e,t,n,r,i){function o(r){var i=tt(e,zi(n,r),"line",t,c)
return a=!0,l>i.bottom?i.left-s:l<i.top?i.left+s:(a=!1,i.left)}var l=i-gr(t),a=!1,s=2*e.display.wrapper.clientWidth,c=qe(e,t),u=vr(t),h=t.text.length,f=si(t),d=ci(t),p=o(f),m=a,g=o(d),v=a
if(r>g)return rt(n,d,v,1)
for(;;){if(u?d==f||d==mi(t,f,1):1>=d-f){for(var y=p>r||g-r>=r-p?f:d,x=r-(y==f?p:g);Xr(t.text.charAt(y));)++y
return rt(n,y,y==f?m:v,-1>x?-1:x>1?1:0)}var b=Math.ceil(h/2),w=f+b
if(u){w=f
for(var k=0;b>k;++k)w=mi(t,w,1)}var S=o(w)
S>r?(d=w,g=S,(v=a)&&(g+=1e3),h=b):(f=w,p=S,m=a,h-=b)}}function lt(e){if(null!=e.cachedTextHeight)return e.cachedTextHeight
if(null==qi){qi=Zr("pre")
for(var t=0;49>t;++t)qi.appendChild(document.createTextNode("x")),qi.appendChild(Zr("br"))
qi.appendChild(document.createTextNode("x"))}Qr(e.measure,qi)
var n=qi.offsetHeight/50
return n>3&&(e.cachedTextHeight=n),Jr(e.measure),n||1}function at(e){if(null!=e.cachedCharWidth)return e.cachedCharWidth
var t=Zr("span","xxxxxxxxxx"),n=Zr("pre",[t])
Qr(e.measure,n)
var r=t.getBoundingClientRect(),i=(r.right-r.left)/10
return i>2&&(e.cachedCharWidth=i),i||10}function st(e){e.curOp={cm:e,viewChanged:!1,startHeight:e.doc.height,forceUpdate:!1,updateInput:null,typing:!1,changeObjs:null,cursorActivityHandlers:null,cursorActivityCalled:0,selectionChanged:!1,updateMaxLine:!1,scrollLeft:null,scrollTop:null,scrollToPos:null,focus:!1,id:++Ki},Vi?Vi.ops.push(e.curOp):e.curOp.ownsGroup=Vi={ops:[e.curOp],delayedCallbacks:[]}}function ct(e){var t=e.curOp.ownsGroup
if(t)try{(function(e){var t=e.delayedCallbacks,n=0
do{for(;n<t.length;n++)t[n].call(null)
for(var r=0;r<e.ops.length;r++){var i=e.ops[r]
if(i.cursorActivityHandlers)for(;i.cursorActivityCalled<i.cursorActivityHandlers.length;)i.cursorActivityHandlers[i.cursorActivityCalled++].call(null,i.cm)}}while(n<t.length)})(t)}finally{Vi=null
for(var n=0;n<t.ops.length;n++)t.ops[n].cm.curOp=null;(function(e){for(var t=e.ops,n=0;n<t.length;n++)ut(t[n])
for(n=0;n<t.length;n++)ht(t[n])
for(n=0;n<t.length;n++)ft(t[n])
for(n=0;n<t.length;n++)dt(t[n])
for(n=0;n<t.length;n++)pt(t[n])})(t)}}function ut(e){var t=e.cm,n=t.display;(function(e){var t=e.display
!t.scrollbarsClipped&&t.scroller.offsetWidth&&(t.nativeBarWidth=t.scroller.offsetWidth-t.scroller.clientWidth,t.heightForcer.style.height=Be(e)+"px",t.sizer.style.marginBottom=-t.nativeBarWidth+"px",t.sizer.style.borderRightWidth=Be(e)+"px",t.scrollbarsClipped=!0)})(t),e.updateMaxLine&&h(t),e.mustUpdate=e.viewChanged||e.forceUpdate||null!=e.scrollTop||e.scrollToPos&&(e.scrollToPos.from.line<n.viewFrom||e.scrollToPos.to.line>=n.viewTo)||n.maxLineChanged&&t.options.lineWrapping,e.update=e.mustUpdate&&new C(t,e.mustUpdate&&{top:e.scrollTop,ensure:e.scrollToPos},e.forceUpdate)}function ht(e){e.updatedDisplay=e.mustUpdate&&L(e.cm,e.update)}function ft(e){var t=e.cm,n=t.display
e.updatedDisplay&&A(t),e.barMeasure=d(t),n.maxLineChanged&&!t.options.lineWrapping&&(e.adjustWidthTo=je(t,n.maxLine,n.maxLine.text.length).left+3,t.display.sizerWidth=e.adjustWidthTo,e.barMeasure.scrollWidth=Math.max(n.scroller.clientWidth,n.sizer.offsetLeft+e.adjustWidthTo+Be(t)+t.display.barWidth),e.maxScrollLeft=Math.max(0,n.sizer.offsetLeft+e.adjustWidthTo-_e(t))),(e.updatedDisplay||e.selectionChanged)&&(e.preparedSelection=n.input.prepareSelection(e.focus))}function dt(e){var t=e.cm
null!=e.adjustWidthTo&&(t.display.sizer.style.minWidth=e.adjustWidthTo+"px",e.maxScrollLeft<t.doc.scrollLeft&&Ht(t,Math.min(t.display.scroller.scrollLeft,e.maxScrollLeft),!0),t.display.maxLineChanged=!1)
var n=e.focus&&e.focus==ei()&&(!document.hasFocus||document.hasFocus())
e.preparedSelection&&t.display.input.showSelection(e.preparedSelection,n),(e.updatedDisplay||e.startHeight!=t.doc.height)&&v(t,e.barMeasure),e.updatedDisplay&&N(t,e.barMeasure),e.selectionChanged&&Oe(t),t.state.focused&&e.updateInput&&t.display.input.reset(e.typing),n&&Y(e.cm)}function pt(e){var t=e.cm,n=t.display,r=t.doc
if(e.updatedDisplay&&T(t,e.update),null==n.wheelStartX||null==e.scrollTop&&null==e.scrollLeft&&!e.scrollToPos||(n.wheelStartX=n.wheelStartY=null),null==e.scrollTop||n.scroller.scrollTop==e.scrollTop&&!e.forceScroll||(r.scrollTop=Math.max(0,Math.min(n.scroller.scrollHeight-n.scroller.clientHeight,e.scrollTop)),n.scrollbars.setScrollTop(r.scrollTop),n.scroller.scrollTop=r.scrollTop),null==e.scrollLeft||n.scroller.scrollLeft==e.scrollLeft&&!e.forceScroll||(r.scrollLeft=Math.max(0,Math.min(n.scroller.scrollWidth-n.scroller.clientWidth,e.scrollLeft)),n.scrollbars.setScrollLeft(r.scrollLeft),n.scroller.scrollLeft=r.scrollLeft,b(t)),e.scrollToPos){var i=function(e,t,n,r){null==r&&(r=0)
for(var i=0;5>i;i++){var o=!1,l=tt(e,t),a=n&&n!=t?tt(e,n):l,s=on(e,Math.min(l.left,a.left),Math.min(l.top,a.top)-r,Math.max(l.left,a.left),Math.max(l.bottom,a.bottom)+r),c=e.doc.scrollTop,u=e.doc.scrollLeft
if(null!=s.scrollTop&&(Dt(e,s.scrollTop),Math.abs(e.doc.scrollTop-c)>1&&(o=!0)),null!=s.scrollLeft&&(Ht(e,s.scrollLeft),Math.abs(e.doc.scrollLeft-u)>1&&(o=!0)),!o)break}return l}(t,ue(r,e.scrollToPos.from),ue(r,e.scrollToPos.to),e.scrollToPos.margin)
e.scrollToPos.isCursor&&t.state.focused&&function(e,t){if(!Dr(e,"scrollCursorIntoView")){var n=e.display,r=n.sizer.getBoundingClientRect(),i=null
if(t.top+r.top<0?i=!0:t.bottom+r.top>(window.innerHeight||document.documentElement.clientHeight)&&(i=!1),null!=i&&!Ei){var o=Zr("div","​",null,"position: absolute; top: "+(t.top-n.viewOffset-De(e.display))+"px; height: "+(t.bottom-t.top+Be(e)+n.barHeight)+"px; left: "+t.left+"px; width: 2px;")
e.display.lineSpace.appendChild(o),o.scrollIntoView(i),e.display.lineSpace.removeChild(o)}}}(t,i)}var o=e.maybeHiddenMarkers,l=e.maybeUnhiddenMarkers
if(o)for(var a=0;a<o.length;++a)o[a].lines.length||Wo(o[a],"hide")
if(l)for(a=0;a<l.length;++a)l[a].lines.length&&Wo(l[a],"unhide")
n.wrapper.offsetHeight&&(r.scrollTop=t.display.scroller.scrollTop),e.changeObjs&&Wo(t,"changes",t,e.changeObjs),e.update&&e.update.finish()}function mt(e,t){if(e.curOp)return t()
st(e)
try{return t()}finally{ct(e)}}function gt(e,t){return function(){if(e.curOp)return t.apply(e,arguments)
st(e)
try{return t.apply(e,arguments)}finally{ct(e)}}}function vt(e){return function(){if(this.curOp)return e.apply(this,arguments)
st(this)
try{return e.apply(this,arguments)}finally{ct(this)}}}function yt(e){return function(){var t=this.cm
if(!t||t.curOp)return e.apply(this,arguments)
st(t)
try{return e.apply(this,arguments)}finally{ct(t)}}}function xt(e,t,n){this.line=t,this.rest=function(e){for(var t,n;t=Pn(e);)e=t.find(1,!0).line,(n||(n=[])).push(e)
return n}(t),this.size=this.rest?pr(zr(this.rest))-n+1:1,this.node=this.text=null,this.hidden=Bn(e,t)}function bt(e,t,n){for(var r,i=[],o=t;n>o;o=r){var l=new xt(e.doc,ur(e.doc,o),o)
r=o+l.size,i.push(l)}return i}function wt(e,t,n,r){null==t&&(t=e.doc.first),null==n&&(n=e.doc.first+e.doc.size),r||(r=0)
var i=e.display
if(r&&n<i.viewTo&&(null==i.updateLineNumbers||i.updateLineNumbers>t)&&(i.updateLineNumbers=t),e.curOp.viewChanged=!0,t>=i.viewTo)Fi&&Hn(e.doc,t)<i.viewTo&&St(e)
else if(n<=i.viewFrom)Fi&&Wn(e.doc,n+r)>i.viewFrom?St(e):(i.viewFrom+=r,i.viewTo+=r)
else if(t<=i.viewFrom&&n>=i.viewTo)St(e)
else if(t<=i.viewFrom){(o=Lt(e,n,n+r,1))?(i.view=i.view.slice(o.index),i.viewFrom=o.lineN,i.viewTo+=r):St(e)}else if(n>=i.viewTo){var o;(o=Lt(e,t,t,-1))?(i.view=i.view.slice(0,o.index),i.viewTo=o.lineN):St(e)}else{var l=Lt(e,t,t,-1),a=Lt(e,n,n+r,1)
l&&a?(i.view=i.view.slice(0,l.index).concat(bt(e,l.lineN,a.lineN)).concat(i.view.slice(a.index)),i.viewTo+=r):St(e)}var s=i.externalMeasured
s&&(n<s.lineN?s.lineN+=r:t<s.lineN+s.size&&(i.externalMeasured=null))}function kt(e,t,n){e.curOp.viewChanged=!0
var r=e.display,i=e.display.externalMeasured
if(i&&t>=i.lineN&&t<i.lineN+i.size&&(r.externalMeasured=null),!(t<r.viewFrom||t>=r.viewTo)){var o=r.view[Ct(e,t)]
if(null!=o.node){var l=o.changes||(o.changes=[]);-1==jr(l,n)&&l.push(n)}}}function St(e){e.display.viewFrom=e.display.viewTo=e.doc.first,e.display.view=[],e.display.viewOffset=0}function Ct(e,t){if(t>=e.display.viewTo)return null
if(0>(t-=e.display.viewFrom))return null
for(var n=e.display.view,r=0;r<n.length;r++)if(0>(t-=n[r].size))return r}function Lt(e,t,n,r){var i,o=Ct(e,t),l=e.display.view
if(!Fi||n==e.doc.first+e.doc.size)return{index:o,lineN:n}
for(var a=0,s=e.display.viewFrom;o>a;a++)s+=l[a].size
if(s!=t){if(r>0){if(o==l.length-1)return null
i=s+l[o].size-t,o++}else i=s-t
t+=i,n+=i}for(;Hn(e.doc,n)!=n;){if(o==(0>r?0:l.length-1))return null
n+=r*l[o-(0>r?1:0)].size,o+=r}return{index:o,lineN:n}}function Tt(e){for(var t=e.display.view,n=0,r=0;r<t.length;r++){var i=t[r]
i.hidden||i.node&&!i.changes||++n}return n}function Mt(e){var t=e.display
t.lastWrapHeight==t.wrapper.clientHeight&&t.lastWrapWidth==t.wrapper.clientWidth||(t.cachedCharWidth=t.cachedTextHeight=t.cachedPaddingH=null,t.scrollbarsClipped=!1,e.setSize())}function Nt(e,t){for(var n=Er(t);n!=e.wrapper;n=n.parentNode)if(!n||1==n.nodeType&&"true"==n.getAttribute("cm-ignore-events")||n.parentNode==e.sizer&&n!=e.mover)return!0}function At(e,t,n,r){var i=e.display
if(!n&&"true"==Er(t).getAttribute("cm-not-content"))return null
var o,l,a=i.lineSpace.getBoundingClientRect()
try{o=t.clientX-a.left,l=t.clientY-a.top}catch(t){return null}var s,c=it(e,o,l)
if(r&&1==c.xRel&&(s=ur(e.doc,c.line).text).length==c.ch){var u=qo(s,s.length,e.options.tabSize)-s.length
c=zi(c.line,Math.max(0,Math.round((o-We(e.display).left)/at(e.display))-u))}return c}function Et(e){var t=this,n=t.display
if(!(Dr(t,e)||n.activeTouch&&n.input.supportsTouch())){if(n.shift=e.shiftKey,Nt(n,e))return void(Ci||(n.scroller.draggable=!1,setTimeout((function(){n.scroller.draggable=!0}),100)))
if(!It(t,e)){var r=At(t,e)
switch(window.focus(),Or(e)){case 1:t.state.selectingText?t.state.selectingText(e):r?function(e,t,n){ki?setTimeout($r(Y,e),0):e.curOp.focus=ei()
var r,i=+new Date
Yi&&Yi.time>i-400&&0==ji(Yi.pos,n)?r="triple":Gi&&Gi.time>i-400&&0==ji(Gi.pos,n)?(r="double",Yi={time:i,pos:n}):(r="single",Gi={time:i,pos:n})
var o,l=e.doc.sel,a=Pi?t.metaKey:t.ctrlKey
e.options.dragDrop&&il&&!e.isReadOnly()&&"single"==r&&(o=l.contains(n))>-1&&(ji((o=l.ranges[o]).from(),n)<0||n.xRel>0)&&(ji(o.to(),n)>0||n.xRel<0)?function(e,t,n,r){var i=e.display,o=+new Date,l=gt(e,(function(a){Ci&&(i.scroller.draggable=!1),e.state.draggingText=!1,Ho(document,"mouseup",l),Ho(i.scroller,"drop",l),Math.abs(t.clientX-a.clientX)+Math.abs(t.clientY-a.clientY)<10&&(Oo(a),!r&&+new Date-200<o&&pe(e.doc,n),Ci||ki&&9==Si?setTimeout((function(){document.body.focus(),i.input.focus()}),20):i.input.focus())}))
Ci&&(i.scroller.draggable=!0),e.state.draggingText=l,i.scroller.dragDrop&&i.scroller.dragDrop(),Ro(document,"mouseup",l),Ro(i.scroller,"drop",l)}(e,t,n,a):function(e,t,n,r,i){function o(t){if(0!=ji(g,t))if(g=t,"rect"==r){for(var i=[],o=e.options.tabSize,l=qo(ur(c,n.line).text,n.ch,o),a=qo(ur(c,t.line).text,t.ch,o),s=Math.min(l,a),d=Math.max(l,a),p=Math.min(n.line,t.line),m=Math.min(e.lastLine(),Math.max(n.line,t.line));m>=p;p++){var v=ur(c,p).text,y=Go(v,s,o)
s==d?i.push(new le(zi(p,y),zi(p,y))):v.length>y&&i.push(new le(zi(p,y),zi(p,Go(v,d,o))))}i.length||i.push(new le(n,n)),xe(c,ae(f.ranges.slice(0,h).concat(i),h),{origin:"*mouse",scroll:!1}),e.scrollIntoView(t)}else{var x=u,b=x.anchor,w=t
if("single"!=r){if("double"==r)var k=e.findWordAt(t)
else k=new le(zi(t.line,0),ue(c,zi(t.line+1,0)))
ji(k.anchor,b)>0?(w=k.head,b=G(x.from(),k.anchor)):(w=k.anchor,b=q(x.to(),k.head))}(i=f.ranges.slice(0))[h]=new le(ue(c,b),w),xe(c,ae(i,h),jo)}}function l(t){var n=++y,i=At(e,t,!0,"rect"==r)
if(i)if(0!=ji(i,g)){e.curOp.focus=ei(),o(i)
var a=x(s,c);(i.line>=a.to||i.line<a.from)&&setTimeout(gt(e,(function(){y==n&&l(t)})),150)}else{var u=t.clientY<v.top?-20:t.clientY>v.bottom?20:0
u&&setTimeout(gt(e,(function(){y==n&&(s.scroller.scrollTop+=u,l(t))})),50)}}function a(t){e.state.selectingText=!1,y=1/0,Oo(t),s.input.focus(),Ho(document,"mousemove",b),Ho(document,"mouseup",w),c.history.lastSelOrigin=null}var s=e.display,c=e.doc
Oo(t)
var u,h,f=c.sel,d=f.ranges
if(i&&!t.shiftKey?(h=c.sel.contains(n),u=h>-1?d[h]:new le(n,n)):(u=c.sel.primary(),h=c.sel.primIndex),Ri?t.shiftKey&&t.metaKey:t.altKey)r="rect",i||(u=new le(n,n)),n=At(e,t,!0,!0),h=-1
else if("double"==r){var p=e.findWordAt(n)
u=e.display.shift||c.extend?de(c,u,p.anchor,p.head):p}else if("triple"==r){var m=new le(zi(n.line,0),ue(c,zi(n.line+1,0)))
u=e.display.shift||c.extend?de(c,u,m.anchor,m.head):m}else u=de(c,u,n)
i?-1==h?(h=d.length,xe(c,ae(d.concat([u]),h),{scroll:!1,origin:"*mouse"})):d.length>1&&d[h].empty()&&"single"==r&&!t.shiftKey?(xe(c,ae(d.slice(0,h).concat(d.slice(h+1)),0),{scroll:!1,origin:"*mouse"}),f=c.sel):ge(c,h,u,jo):(h=0,xe(c,new oe([u],0),jo),f=c.sel)
var g=n,v=s.wrapper.getBoundingClientRect(),y=0,b=gt(e,(function(e){Or(e)?l(e):a(e)})),w=gt(e,a)
e.state.selectingText=w,Ro(document,"mousemove",b),Ro(document,"mouseup",w)}(e,t,n,r,a)}(t,e,r):Er(e)==n.scroller&&Oo(e)
break
case 2:Ci&&(t.state.lastMiddleDown=+new Date),r&&pe(t.doc,r),setTimeout((function(){n.input.focus()}),20),Oo(e)
break
case 3:Bi?Yt(t,e):function(e){e.state.delayingBlurEvent=!0,setTimeout((function(){e.state.delayingBlurEvent&&(e.state.delayingBlurEvent=!1,Gt(e))}),100)}(t)}}}}function Ot(e,t,n,r){try{var i=t.clientX,o=t.clientY}catch(t){return!1}if(i>=Math.floor(e.display.gutters.getBoundingClientRect().right))return!1
r&&Oo(t)
var l=e.display,a=l.lineDiv.getBoundingClientRect()
if(o>a.bottom||!Wr(e,n))return Ar(t)
o-=a.top-l.viewOffset
for(var s=0;s<e.options.gutters.length;++s){var c=l.gutters.childNodes[s]
if(c&&c.getBoundingClientRect().right>=i){var u=mr(e.doc,o),h=e.options.gutters[s]
return Wo(e,n,e,u,h,t),Ar(t)}}}function It(e,t){return Ot(e,t,"gutterClick",!0)}function Pt(e){var t=this
if(Rt(t),!Dr(t,e)&&!Nt(t.display,e)){Oo(e),ki&&(Xi=+new Date)
var n=At(t,e,!0),r=e.dataTransfer.files
if(n&&!t.isReadOnly())if(r&&r.length&&window.FileReader&&window.File)for(var i=r.length,o=Array(i),l=0,a=function(e,r){if(!t.options.allowDropFileTypes||-1!=jr(t.options.allowDropFileTypes,e.type)){var a=new FileReader
a.onload=gt(t,(function(){var e=a.result
if(/[\x00-\x08\x0e-\x1f]{2}/.test(e)&&(e=""),o[r]=e,++l==i){var s={from:n=ue(t.doc,n),to:n,text:t.doc.splitLines(o.join(t.doc.lineSeparator())),origin:"paste"}
Zt(t.doc,s),ye(t.doc,se(n,no(s)))}})),a.readAsText(e)}},s=0;i>s;++s)a(r[s],s)
else{if(t.state.draggingText&&t.doc.sel.contains(n)>-1)return t.state.draggingText(e),void setTimeout((function(){t.display.input.focus()}),20)
try{if(o=e.dataTransfer.getData("Text")){if(t.state.draggingText&&!(Pi?e.altKey:e.ctrlKey))var c=t.listSelections()
if(be(t.doc,se(n,n)),c)for(s=0;s<c.length;++s)rn(t.doc,"",c[s].anchor,c[s].head,"drag")
t.replaceSelection(o,"around","paste"),t.display.input.focus()}}catch(e){}}}}function Rt(e){e.display.dragCursor&&(e.display.lineSpace.removeChild(e.display.dragCursor),e.display.dragCursor=null)}function Dt(e,t){Math.abs(e.doc.scrollTop-t)<2||(e.doc.scrollTop=t,xi||M(e,{top:t}),e.display.scroller.scrollTop!=t&&(e.display.scroller.scrollTop=t),e.display.scrollbars.setScrollTop(t),xi&&M(e),Ie(e,100))}function Ht(e,t,n){(n?t==e.doc.scrollLeft:Math.abs(e.doc.scrollLeft-t)<2)||(t=Math.min(t,e.display.scroller.scrollWidth-e.display.scroller.clientWidth),e.doc.scrollLeft=t,b(e),e.display.scroller.scrollLeft!=t&&(e.display.scroller.scrollLeft=t),e.display.scrollbars.setScrollLeft(t))}function Wt(e,t){var n=Qi(t),r=n.x,i=n.y,o=e.display,l=o.scroller,a=l.scrollWidth>l.clientWidth,s=l.scrollHeight>l.clientHeight
if(r&&a||i&&s){if(i&&Pi&&Ci)e:for(var c=t.target,u=o.view;c!=l;c=c.parentNode)for(var h=0;h<u.length;h++)if(u[h].node==c){e.display.currentWheelTarget=c
break e}if(r&&!xi&&!Mi&&null!=Ji)return i&&s&&Dt(e,Math.max(0,Math.min(l.scrollTop+i*Ji,l.scrollHeight-l.clientHeight))),Ht(e,Math.max(0,Math.min(l.scrollLeft+r*Ji,l.scrollWidth-l.clientWidth))),(!i||i&&s)&&Oo(t),void(o.wheelStartX=null)
if(i&&null!=Ji){var f=i*Ji,d=e.doc.scrollTop,p=d+o.wrapper.clientHeight
0>f?d=Math.max(0,d+f-50):p=Math.min(e.doc.height,p+f+50),M(e,{top:d,bottom:p})}20>Zi&&(null==o.wheelStartX?(o.wheelStartX=l.scrollLeft,o.wheelStartY=l.scrollTop,o.wheelDX=r,o.wheelDY=i,setTimeout((function(){if(null!=o.wheelStartX){var e=l.scrollLeft-o.wheelStartX,t=l.scrollTop-o.wheelStartY,n=t&&o.wheelDY&&t/o.wheelDY||e&&o.wheelDX&&e/o.wheelDX
o.wheelStartX=o.wheelStartY=null,n&&(Ji=(Ji*Zi+n)/(Zi+1),++Zi)}}),200)):(o.wheelDX+=r,o.wheelDY+=i))}}function Bt(e,t,n){if("string"==typeof t&&!(t=po[t]))return!1
e.display.input.ensurePolled()
var r=e.display.shift,i=!1
try{e.isReadOnly()&&(e.state.suppressEdits=!0),n&&(e.display.shift=!1),i=t(e)!=Fo}finally{e.display.shift=r,e.state.suppressEdits=!1}return i}function _t(e,t,n,r){var i=e.state.keySeq
if(i){if(vo(t))return"handled"
eo.set(50,(function(){e.state.keySeq==i&&(e.state.keySeq=null,e.display.input.reset())})),t=i+" "+t}var o=function(e,t,n){for(var r=0;r<e.state.keyMaps.length;r++){var i=go(t,e.state.keyMaps[r],n,e)
if(i)return i}return e.options.extraKeys&&go(t,e.options.extraKeys,n,e)||go(t,e.options.keyMap,n,e)}(e,t,r)
return"multi"==o&&(e.state.keySeq=t),"handled"==o&&Pr(e,"keyHandled",e,t,n),"handled"!=o&&"multi"!=o||(Oo(n),Oe(e)),i&&!o&&/\'$/.test(t)?(Oo(n),!0):!!o}function Ft(e,t){var n=yo(t,!0)
return!!n&&(t.shiftKey&&!e.state.keySeq?_t(e,"Shift-"+n,t,(function(t){return Bt(e,t,!0)}))||_t(e,n,t,(function(t){return("string"==typeof t?/^go[A-Z]/.test(t):t.motion)?Bt(e,t):void 0})):_t(e,n,t,(function(t){return Bt(e,t)})))}function zt(e){var t=this
if(t.curOp.focus=ei(),!Dr(t,e)){ki&&11>Si&&27==e.keyCode&&(e.returnValue=!1)
var n=e.keyCode
t.display.shift=16==n||e.shiftKey
var r=Ft(t,e)
Mi&&(to=r?n:null,!r&&88==n&&!al&&(Pi?e.metaKey:e.ctrlKey)&&t.replaceSelection("",null,"cut")),18!=n||/\bCodeMirror-crosshair\b/.test(t.display.lineDiv.className)||function(e){function t(e){18!=e.keyCode&&e.altKey||(tl(n,"CodeMirror-crosshair"),Ho(document,"keyup",t),Ho(document,"mouseover",t))}var n=e.display.lineDiv
nl(n,"CodeMirror-crosshair"),Ro(document,"keyup",t),Ro(document,"mouseover",t)}(t)}}function jt(e){16==e.keyCode&&(this.doc.sel.shift=!1),Dr(this,e)}function Ut(e){var t=this
if(!(Nt(t.display,e)||Dr(t,e)||e.ctrlKey&&!e.altKey||Pi&&e.metaKey)){var n=e.keyCode,r=e.charCode
if(Mi&&n==to)return to=null,void Oo(e)
if(!Mi||e.which&&!(e.which<10)||!Ft(t,e))(function(e,t,n){return _t(e,"'"+n+"'",t,(function(t){return Bt(e,t,!0)}))})(t,e,String.fromCharCode(null==r?n:r))||t.display.input.onKeyPress(e)}}function qt(e){e.state.delayingBlurEvent&&(e.state.delayingBlurEvent=!1),"nocursor"!=e.options.readOnly&&(e.state.focused||(Wo(e,"focus",e),e.state.focused=!0,nl(e.display.wrapper,"CodeMirror-focused"),e.curOp||e.display.selForContextMenu==e.doc.sel||(e.display.input.reset(),Ci&&setTimeout((function(){e.display.input.reset(!0)}),20)),e.display.input.receivedFocus()),Oe(e))}function Gt(e){e.state.delayingBlurEvent||(e.state.focused&&(Wo(e,"blur",e),e.state.focused=!1,tl(e.display.wrapper,"CodeMirror-focused")),clearInterval(e.display.blinker),setTimeout((function(){e.state.focused||(e.display.shift=!1)}),150))}function Yt(e,t){Nt(e.display,t)||function(e,t){return!!Wr(e,"gutterContextMenu")&&Ot(e,t,"gutterContextMenu",!1)}(e,t)||Dr(e,t,"contextmenu")||e.display.input.onContextMenu(t)}function $t(e,t){if(ji(e,t.from)<0)return e
if(ji(e,t.to)<=0)return no(t)
var n=e.line+t.text.length-(t.to.line-t.from.line)-1,r=e.ch
return e.line==t.to.line&&(r+=no(t).ch-t.to.ch),zi(n,r)}function Vt(e,t){for(var n=[],r=0;r<e.sel.ranges.length;r++){var i=e.sel.ranges[r]
n.push(new le($t(i.anchor,t),$t(i.head,t)))}return ae(n,e.sel.primIndex)}function Kt(e,t,n){return e.line==t.line?zi(n.line,e.ch-t.ch+n.ch):zi(n.line+(e.line-t.line),e.ch)}function Xt(e,t,n){var r={canceled:!1,from:t.from,to:t.to,text:t.text,origin:t.origin,cancel:function(){this.canceled=!0}}
return n&&(r.update=function(t,n,r,i){t&&(this.from=ue(e,t)),n&&(this.to=ue(e,n)),r&&(this.text=r),void 0!==i&&(this.origin=i)}),Wo(e,"beforeChange",e,r),e.cm&&Wo(e.cm,"beforeChange",e.cm,r),r.canceled?null:{from:r.from,to:r.to,text:r.text,origin:r.origin}}function Zt(e,t,n){if(e.cm){if(!e.cm.curOp)return gt(e.cm,Zt)(e,t,n)
if(e.cm.state.suppressEdits)return}if(!(Wr(e,"beforeChange")||e.cm&&Wr(e.cm,"beforeChange"))||(t=Xt(e,t,!0))){var r=_i&&!n&&function(e,t,n){var r=null
if(e.iter(t.line,n.line+1,(function(e){if(e.markedSpans)for(var t=0;t<e.markedSpans.length;++t){var n=e.markedSpans[t].marker
!n.readOnly||r&&-1!=jr(r,n)||(r||(r=[])).push(n)}})),!r)return null
for(var i=[{from:t,to:n}],o=0;o<r.length;++o)for(var l=r[o],a=l.find(0),s=0;s<i.length;++s){var c=i[s]
if(!(ji(c.to,a.from)<0||ji(c.from,a.to)>0)){var u=[s,1],h=ji(c.from,a.from),f=ji(c.to,a.to);(0>h||!l.inclusiveLeft&&!h)&&u.push({from:c.from,to:a.from}),(f>0||!l.inclusiveRight&&!f)&&u.push({from:a.to,to:c.to}),i.splice.apply(i,u),s+=u.length-1}}return i}(e,t.from,t.to)
if(r)for(var i=r.length-1;i>=0;--i)Jt(e,{from:r[i].from,to:r[i].to,text:i?[""]:t.text})
else Jt(e,t)}}function Jt(e,t){if(1!=t.text.length||""!=t.text[0]||0!=ji(t.from,t.to)){var n=Vt(e,t)
wr(e,t,n,e.cm?e.cm.curOp.id:NaN),tn(e,t,n,Sn(e,t))
var r=[]
sr(e,(function(e,n){n||-1!=jr(r,e.history)||(Nr(e.history,t),r.push(e.history)),tn(e,t,null,Sn(e,t))}))}}function Qt(e,t,n){if(!e.cm||!e.cm.state.suppressEdits){for(var r,i=e.history,o=e.sel,l="undo"==t?i.done:i.undone,a="undo"==t?i.undone:i.done,s=0;s<l.length&&(r=l[s],n?!r.ranges||r.equals(e.sel):r.ranges);s++);if(s!=l.length){for(i.lastOrigin=i.lastSelOrigin=null;(r=l.pop()).ranges;){if(kr(r,a),n&&!r.equals(e.sel))return void xe(e,r,{clearRedo:!1})
o=r}var c=[]
kr(o,a),a.push({changes:c,generation:i.generation}),i.generation=r.generation||++i.maxGeneration
var u=Wr(e,"beforeChange")||e.cm&&Wr(e.cm,"beforeChange")
for(s=r.changes.length-1;s>=0;--s){var h=r.changes[s]
if(h.origin=t,u&&!Xt(e,h,!1))return void(l.length=0)
c.push(xr(e,h))
var f=s?Vt(e,h):zr(l)
tn(e,h,f,Ln(e,h)),!s&&e.cm&&e.cm.scrollIntoView({from:h.from,to:no(h)})
var d=[]
sr(e,(function(e,t){t||-1!=jr(d,e.history)||(Nr(e.history,h),d.push(e.history)),tn(e,h,null,Ln(e,h))}))}}}}function en(e,t){if(0!=t&&(e.first+=t,e.sel=new oe(Ur(e.sel.ranges,(function(e){return new le(zi(e.anchor.line+t,e.anchor.ch),zi(e.head.line+t,e.head.ch))})),e.sel.primIndex),e.cm)){wt(e.cm,e.first,e.first-t,t)
for(var n=e.cm.display,r=n.viewFrom;r<n.viewTo;r++)kt(e.cm,r,"gutter")}}function tn(e,t,n,r){if(e.cm&&!e.cm.curOp)return gt(e.cm,tn)(e,t,n,r)
if(t.to.line<e.first)en(e,t.text.length-1-(t.to.line-t.from.line))
else if(!(t.from.line>e.lastLine())){if(t.from.line<e.first){var i=t.text.length-1-(e.first-t.from.line)
en(e,i),t={from:zi(e.first,0),to:zi(t.to.line+i,t.to.ch),text:[zr(t.text)],origin:t.origin}}var o=e.lastLine()
t.to.line>o&&(t={from:t.from,to:zi(o,ur(e,o).text.length),text:[t.text[0]],origin:t.origin}),t.removed=hr(e,t.from,t.to),n||(n=Vt(e,t)),e.cm?nn(e.cm,t,r):or(e,t,r),be(e,n,zo)}}function nn(e,t,n){var r=e.doc,o=e.display,l=t.from,a=t.to,s=!1,c=l.line
e.options.lineWrapping||(c=pr(Dn(ur(r,l.line))),r.iter(c,a.line+1,(function(e){return e==o.maxLine?(s=!0,!0):void 0}))),r.sel.contains(t.from,t.to)>-1&&Hr(e),or(r,t,n,i(e)),e.options.lineWrapping||(r.iter(c,l.line+t.text.length,(function(e){var t=u(e)
t>o.maxLineLength&&(o.maxLine=e,o.maxLineLength=t,o.maxLineChanged=!0,s=!1)})),s&&(e.curOp.updateMaxLine=!0)),r.frontier=Math.min(r.frontier,l.line),Ie(e,400)
var h=t.text.length-(a.line-l.line)-1
t.full?wt(e):l.line!=a.line||1!=t.text.length||ir(e.doc,t)?wt(e,l.line,a.line+1,h):kt(e,l.line,"text")
var f=Wr(e,"changes"),d=Wr(e,"change")
if(d||f){var p={from:l,to:a,text:t.text,removed:t.removed,origin:t.origin}
d&&Pr(e,"change",e,p),f&&(e.curOp.changeObjs||(e.curOp.changeObjs=[])).push(p)}e.display.selForContextMenu=null}function rn(e,t,n,r,i){if(r||(r=n),ji(r,n)<0){var o=r
r=n,n=o}"string"==typeof t&&(t=e.splitLines(t)),Zt(e,{from:n,to:r,text:t,origin:i})}function on(e,t,n,r,i){var o=e.display,l=lt(e.display)
0>n&&(n=0)
var a=e.curOp&&null!=e.curOp.scrollTop?e.curOp.scrollTop:o.scroller.scrollTop,s=Fe(e),c={}
i-n>s&&(i=n+s)
var u=e.doc.height+He(o),h=l>n,f=i>u-l
if(a>n)c.scrollTop=h?0:n
else if(i>a+s){var d=Math.min(n,(f?u:i)-s)
d!=a&&(c.scrollTop=d)}var p=e.curOp&&null!=e.curOp.scrollLeft?e.curOp.scrollLeft:o.scroller.scrollLeft,m=_e(e)-(e.options.fixedGutter?o.gutters.offsetWidth:0),g=r-t>m
return g&&(r=t+m),10>t?c.scrollLeft=0:p>t?c.scrollLeft=Math.max(0,t-(g?0:10)):r>m+p-3&&(c.scrollLeft=r+(g?0:10)-m),c}function ln(e,t,n){null==t&&null==n||sn(e),null!=t&&(e.curOp.scrollLeft=(null==e.curOp.scrollLeft?e.doc.scrollLeft:e.curOp.scrollLeft)+t),null!=n&&(e.curOp.scrollTop=(null==e.curOp.scrollTop?e.doc.scrollTop:e.curOp.scrollTop)+n)}function an(e){sn(e)
var t=e.getCursor(),n=t,r=t
e.options.lineWrapping||(n=t.ch?zi(t.line,t.ch-1):t,r=zi(t.line,t.ch+1)),e.curOp.scrollToPos={from:n,to:r,margin:e.options.cursorScrollMargin,isCursor:!0}}function sn(e){var t=e.curOp.scrollToPos
if(t){e.curOp.scrollToPos=null
var n=nt(e,t.from),r=nt(e,t.to),i=on(e,Math.min(n.left,r.left),Math.min(n.top,r.top)-t.margin,Math.max(n.right,r.right),Math.max(n.bottom,r.bottom)+t.margin)
e.scrollTo(i.scrollLeft,i.scrollTop)}}function cn(e,t,n,r){var i,o=e.doc
null==n&&(n="add"),"smart"==n&&(o.mode.indent?i=Re(e,t):n="prev")
var l=e.options.tabSize,a=ur(o,t),s=qo(a.text,null,l)
a.stateAfter&&(a.stateAfter=null)
var c,u=a.text.match(/^\s*/)[0]
if(r||/\S/.test(a.text)){if("smart"==n&&((c=o.mode.indent(i,a.text.slice(u.length),a.text))==Fo||c>150)){if(!r)return
n="prev"}}else c=0,n="not"
"prev"==n?c=t>o.first?qo(ur(o,t-1).text,null,l):0:"add"==n?c=s+e.options.indentUnit:"subtract"==n?c=s-e.options.indentUnit:"number"==typeof n&&(c=s+n),c=Math.max(0,c)
var h="",f=0
if(e.options.indentWithTabs)for(var d=Math.floor(c/l);d;--d)f+=l,h+="\t"
if(c>f&&(h+=Fr(c-f)),h!=u)return rn(o,h,zi(t,0),zi(t,u.length),"+input"),a.stateAfter=null,!0
for(d=0;d<o.sel.ranges.length;d++){var p=o.sel.ranges[d]
if(p.head.line==t&&p.head.ch<u.length){ge(o,d,new le(f=zi(t,u.length),f))
break}}}function un(e,t,n,r){var i=t,o=t
return"number"==typeof t?o=ur(e,ce(e,t)):i=pr(t),null==i?null:(r(o,i)&&e.cm&&kt(e.cm,i,n),o)}function hn(e,t){for(var n=e.doc.sel.ranges,r=[],i=0;i<n.length;i++){for(var o=t(n[i]);r.length&&ji(o.from,zr(r).to)<=0;){var l=r.pop()
if(ji(l.from,o.from)<0){o.from=l.from
break}}r.push(o)}mt(e,(function(){for(var t=r.length-1;t>=0;t--)rn(e.doc,"",r[t].from,r[t].to,"+delete")
an(e)}))}function fn(e,t,n,r,i){function o(){var t=a+n
return!(t<e.first||t>=e.first+e.size)&&(a=t,u=ur(e,t))}function l(e){var t=(i?mi:gi)(u,s,n,!0)
if(null==t){if(e||!o())return!1
s=i?(0>n?ci:si)(u):0>n?u.text.length:0}else s=t
return!0}var a=t.line,s=t.ch,c=n,u=ur(e,a)
if("char"==r)l()
else if("column"==r)l(!0)
else if("word"==r||"group"==r)for(var h=null,f="group"==r,d=e.cm&&e.cm.getHelper(t,"wordChars"),p=!0;!(0>n)||l(!p);p=!1){var m=u.text.charAt(s)||"\n",g=Vr(m,d)?"w":f&&"\n"==m?"n":!f||/\s/.test(m)?null:"p"
if(!f||p||g||(g="s"),h&&h!=g){0>n&&(n=1,l())
break}if(g&&(h=g),n>0&&!l(!p))break}var v=Le(e,zi(a,s),t,c,!0)
return ji(t,v)||(v.hitSide=!0),v}function dn(e,t,n,r){var i,o=e.doc,l=t.left
if("page"==r){var a=Math.min(e.display.wrapper.clientHeight,window.innerHeight||document.documentElement.clientHeight)
i=t.top+n*(a-(0>n?1.5:.5)*lt(e.display))}else"line"==r&&(i=n>0?t.bottom+3:t.top-3)
for(;;){var s=it(e,l,i)
if(!s.outside)break
if(0>n?0>=i:i>=o.height){s.hitSide=!0
break}i+=5*n}return s}function pn(t,n,r,i){e.defaults[t]=n,r&&(io[t]=i?function(e,t,n){n!=oo&&r(e,t,n)}:r)}function mn(e){for(var t,n,r,i,o=e.split(/-(?!$)/),l=(e=o[o.length-1],0);l<o.length-1;l++){var a=o[l]
if(/^(cmd|meta|m)$/i.test(a))i=!0
else if(/^a(lt)?$/i.test(a))t=!0
else if(/^(c|ctrl|control)$/i.test(a))n=!0
else{if(!/^s(hift)$/i.test(a))throw new Error("Unrecognized modifier name: "+a)
r=!0}}return t&&(e="Alt-"+e),n&&(e="Ctrl-"+e),i&&(e="Cmd-"+e),r&&(e="Shift-"+e),e}function gn(e){return"string"==typeof e?mo[e]:e}function vn(e,t,n,r,i){if(r&&r.shared)return function(e,t,n,r,i){r=Yr(r),r.shared=!1
var o=[vn(e,t,n,r,i)],l=o[0],a=r.widgetNode
return sr(e,(function(e){a&&(r.widgetNode=a.cloneNode(!0)),o.push(vn(e,ue(e,t),ue(e,n),r,i))
for(var s=0;s<e.linked.length;++s)if(e.linked[s].isParent)return
l=zr(o)})),new ko(o,l)}(e,t,n,r,i)
if(e.cm&&!e.cm.curOp)return gt(e.cm,vn)(e,t,n,r,i)
var o=new wo(e,i),l=ji(t,n)
if(r&&Yr(r,o,!1),l>0||0==l&&!1!==o.clearWhenEmpty)return o
if(o.replacedWith&&(o.collapsed=!0,o.widgetNode=Zr("span",[o.replacedWith],"CodeMirror-widget"),r.handleMouseEvents||o.widgetNode.setAttribute("cm-ignore-events","true"),r.insertLeft&&(o.widgetNode.insertLeft=!0)),o.collapsed){if(Rn(e,t.line,t,n,o)||t.line!=n.line&&Rn(e,n.line,t,n,o))throw new Error("Inserting collapsed marker partially overlapping an existing one")
Fi=!0}o.addToHistory&&wr(e,{from:t,to:n,origin:"markText"},e.sel,NaN)
var a,s=t.line,c=e.cm
if(e.iter(s,n.line+1,(function(e){c&&o.collapsed&&!c.options.lineWrapping&&Dn(e)==c.display.maxLine&&(a=!0),o.collapsed&&s!=t.line&&dr(e,0),function(e,t){e.markedSpans=e.markedSpans?e.markedSpans.concat([t]):[t],t.marker.attachLine(e)}(e,new bn(o,s==t.line?t.ch:null,s==n.line?n.ch:null)),++s})),o.collapsed&&e.iter(t.line,n.line+1,(function(t){Bn(e,t)&&dr(t,0)})),o.clearOnEnter&&Ro(o,"beforeCursorEnter",(function(){o.clear()})),o.readOnly&&(_i=!0,(e.history.done.length||e.history.undone.length)&&e.clearHistory()),o.collapsed&&(o.id=++bo,o.atomic=!0),c){if(a&&(c.curOp.updateMaxLine=!0),o.collapsed)wt(c,t.line,n.line+1)
else if(o.className||o.title||o.startStyle||o.endStyle||o.css)for(var u=t.line;u<=n.line;u++)kt(c,u,"text")
o.atomic&&ke(c.doc),Pr(c,"markerAdded",c,o)}return o}function yn(e){return e.findMarks(zi(e.first,0),e.clipPos(zi(e.lastLine())),(function(e){return e.parent}))}function xn(e){for(var t=0;t<e.length;t++){var n=e[t],r=[n.primary.doc]
sr(n.primary.doc,(function(e){r.push(e)}))
for(var i=0;i<n.markers.length;i++){var o=n.markers[i];-1==jr(r,o.doc)&&(o.parent=null,n.markers.splice(i--,1))}}}function bn(e,t,n){this.marker=e,this.from=t,this.to=n}function wn(e,t){if(e)for(var n=0;n<e.length;++n){var r=e[n]
if(r.marker==t)return r}}function kn(e,t){for(var n,r=0;r<e.length;++r)e[r]!=t&&(n||(n=[])).push(e[r])
return n}function Sn(e,t){if(t.full)return null
var n=he(e,t.from.line)&&ur(e,t.from.line).markedSpans,r=he(e,t.to.line)&&ur(e,t.to.line).markedSpans
if(!n&&!r)return null
var i=t.from.ch,o=t.to.ch,l=0==ji(t.from,t.to),a=function(e,t,n){if(e)for(var r,i=0;i<e.length;++i){var o=e[i],l=o.marker
if(null==o.from||(l.inclusiveLeft?o.from<=t:o.from<t)||o.from==t&&"bookmark"==l.type&&(!n||!o.marker.insertLeft)){var a=null==o.to||(l.inclusiveRight?o.to>=t:o.to>t);(r||(r=[])).push(new bn(l,o.from,a?null:o.to))}}return r}(n,i,l),s=function(e,t,n){if(e)for(var r,i=0;i<e.length;++i){var o=e[i],l=o.marker
if(null==o.to||(l.inclusiveRight?o.to>=t:o.to>t)||o.from==t&&"bookmark"==l.type&&(!n||o.marker.insertLeft)){var a=null==o.from||(l.inclusiveLeft?o.from<=t:o.from<t);(r||(r=[])).push(new bn(l,a?null:o.from-t,null==o.to?null:o.to-t))}}return r}(r,o,l),c=1==t.text.length,u=zr(t.text).length+(c?i:0)
if(a)for(var h=0;h<a.length;++h){if(null==(f=a[h]).to)(d=wn(s,f.marker))?c&&(f.to=null==d.to?null:d.to+u):f.to=i}if(s)for(h=0;h<s.length;++h){var f,d
if(null!=(f=s[h]).to&&(f.to+=u),null==f.from)(d=wn(a,f.marker))||(f.from=u,c&&(a||(a=[])).push(f))
else f.from+=u,c&&(a||(a=[])).push(f)}a&&(a=Cn(a)),s&&s!=a&&(s=Cn(s))
var p=[a]
if(!c){var m,g=t.text.length-2
if(g>0&&a)for(h=0;h<a.length;++h)null==a[h].to&&(m||(m=[])).push(new bn(a[h].marker,null,null))
for(h=0;g>h;++h)p.push(m)
p.push(s)}return p}function Cn(e){for(var t=0;t<e.length;++t){var n=e[t]
null!=n.from&&n.from==n.to&&!1!==n.marker.clearWhenEmpty&&e.splice(t--,1)}return e.length?e:null}function Ln(e,t){var n=function(e,t){var n=t["spans_"+e.id]
if(!n)return null
for(var r=0,i=[];r<t.text.length;++r)i.push(Cr(n[r]))
return i}(e,t),r=Sn(e,t)
if(!n)return r
if(!r)return n
for(var i=0;i<n.length;++i){var o=n[i],l=r[i]
if(o&&l)e:for(var a=0;a<l.length;++a){for(var s=l[a],c=0;c<o.length;++c)if(o[c].marker==s.marker)continue e
o.push(s)}else l&&(n[i]=l)}return n}function Tn(e){var t=e.markedSpans
if(t){for(var n=0;n<t.length;++n)t[n].marker.detachLine(e)
e.markedSpans=null}}function Mn(e,t){if(t){for(var n=0;n<t.length;++n)t[n].marker.attachLine(e)
e.markedSpans=t}}function Nn(e){return e.inclusiveLeft?-1:0}function An(e){return e.inclusiveRight?1:0}function En(e,t){var n=e.lines.length-t.lines.length
if(0!=n)return n
var r=e.find(),i=t.find(),o=ji(r.from,i.from)||Nn(e)-Nn(t)
if(o)return-o
var l=ji(r.to,i.to)||An(e)-An(t)
return l||t.id-e.id}function On(e,t){var n,r=Fi&&e.markedSpans
if(r)for(var i,o=0;o<r.length;++o)(i=r[o]).marker.collapsed&&null==(t?i.from:i.to)&&(!n||En(n,i.marker)<0)&&(n=i.marker)
return n}function In(e){return On(e,!0)}function Pn(e){return On(e,!1)}function Rn(e,t,n,r,i){var o=ur(e,t),l=Fi&&o.markedSpans
if(l)for(var a=0;a<l.length;++a){var s=l[a]
if(s.marker.collapsed){var c=s.marker.find(0),u=ji(c.from,n)||Nn(s.marker)-Nn(i),h=ji(c.to,r)||An(s.marker)-An(i)
if(!(u>=0&&0>=h||0>=u&&h>=0)&&(0>=u&&(s.marker.inclusiveRight&&i.inclusiveLeft?ji(c.to,n)>=0:ji(c.to,n)>0)||u>=0&&(s.marker.inclusiveRight&&i.inclusiveLeft?ji(c.from,r)<=0:ji(c.from,r)<0)))return!0}}}function Dn(e){for(var t;t=In(e);)e=t.find(-1,!0).line
return e}function Hn(e,t){var n=ur(e,t),r=Dn(n)
return n==r?t:pr(r)}function Wn(e,t){if(t>e.lastLine())return t
var n,r=ur(e,t)
if(!Bn(e,r))return t
for(;n=Pn(r);)r=n.find(1,!0).line
return pr(r)+1}function Bn(e,t){var n=Fi&&t.markedSpans
if(n)for(var r,i=0;i<n.length;++i)if((r=n[i]).marker.collapsed){if(null==r.from)return!0
if(!r.marker.widgetNode&&0==r.from&&r.marker.inclusiveLeft&&_n(e,t,r))return!0}}function _n(e,t,n){if(null==n.to){var r=n.marker.find(1,!0)
return _n(e,r.line,wn(r.line.markedSpans,n.marker))}if(n.marker.inclusiveRight&&n.to==t.text.length)return!0
for(var i,o=0;o<t.markedSpans.length;++o)if((i=t.markedSpans[o]).marker.collapsed&&!i.marker.widgetNode&&i.from==n.to&&(null==i.to||i.to!=n.from)&&(i.marker.inclusiveLeft||n.marker.inclusiveRight)&&_n(e,t,i))return!0}function Fn(e,t,n){gr(t)<(e.curOp&&e.curOp.scrollTop||e.doc.scrollTop)&&ln(e,null,n)}function zn(e){if(null!=e.height)return e.height
var t=e.doc.cm
if(!t)return 0
if(!Jo(document.body,e.node)){var n="position: relative;"
e.coverGutter&&(n+="margin-left: -"+t.display.gutters.offsetWidth+"px;"),e.noHScroll&&(n+="width: "+t.display.wrapper.clientWidth+"px;"),Qr(t.display.measure,Zr("div",[e.node],null,n))}return e.height=e.node.parentNode.offsetHeight}function jn(e){e.parent=null,Tn(e)}function Un(e,t){if(e)for(;;){var n=e.match(/(?:^|\s+)line-(background-)?(\S+)/)
if(!n)break
e=e.slice(0,n.index)+e.slice(n.index+n[0].length)
var r=n[1]?"bgClass":"textClass"
null==t[r]?t[r]=n[2]:new RegExp("(?:^|s)"+n[2]+"(?:$|s)").test(t[r])||(t[r]+=" "+n[2])}return e}function qn(t,n){if(t.blankLine)return t.blankLine(n)
if(t.innerMode){var r=e.innerMode(t,n)
return r.mode.blankLine?r.mode.blankLine(r.state):void 0}}function Gn(t,n,r,i){for(var o=0;10>o;o++){i&&(i[0]=e.innerMode(t,r).mode)
var l=t.token(n,r)
if(n.pos>n.start)return l}throw new Error("Mode "+t.name+" failed to advance stream.")}function Yn(e,t,n,r){function i(e){return{start:h.start,end:h.pos,string:h.current(),type:o||null,state:e?ho(l.mode,u):u}}var o,l=e.doc,a=l.mode
t=ue(l,t)
var s,c=ur(l,t.line),u=Re(e,t.line,n),h=new xo(c.text,e.options.tabSize)
for(r&&(s=[]);(r||h.pos<t.ch)&&!h.eol();)h.start=h.pos,o=Gn(a,h,u),r&&s.push(i(!0))
return r?s:i()}function $n(e,t,n,r,i,o,l){var a=n.flattenSpans
null==a&&(a=e.options.flattenSpans)
var s,c=0,u=null,h=new xo(t,e.options.tabSize),f=e.options.addModeClass&&[null]
for(""==t&&Un(qn(n,r),o);!h.eol();){if(h.pos>e.options.maxHighlightLength?(a=!1,l&&Xn(e,t,r,h.pos),h.pos=t.length,s=null):s=Un(Gn(n,h,r,f),o),f){var d=f[0].name
d&&(s="m-"+(s?d+" "+s:d))}if(!a||u!=s){for(;c<h.start;)i(c=Math.min(h.start,c+5e4),u)
u=s}h.start=h.pos}for(;c<h.pos;){var p=Math.min(h.pos,c+5e4)
i(p,u),c=p}}function Vn(e,t,n,r){var i=[e.state.modeGen],o={}
$n(e,t.text,e.doc.mode,n,(function(e,t){i.push(e,t)}),o,r)
for(var l=0;l<e.state.overlays.length;++l){var a=e.state.overlays[l],s=1,c=0
$n(e,t.text,a.mode,!0,(function(e,t){for(var n=s;e>c;){var r=i[s]
r>e&&i.splice(s,1,e,i[s+1],r),s+=2,c=Math.min(e,r)}if(t)if(a.opaque)i.splice(n,s-n,e,"cm-overlay "+t),s=n+2
else for(;s>n;n+=2){var o=i[n+1]
i[n+1]=(o?o+" ":"")+"cm-overlay "+t}}),o)}return{styles:i,classes:o.bgClass||o.textClass?o:null}}function Kn(e,t,n){if(!t.styles||t.styles[0]!=e.state.modeGen){var r=Re(e,pr(t)),i=Vn(e,t,t.text.length>e.options.maxHighlightLength?ho(e.doc.mode,r):r)
t.stateAfter=r,t.styles=i.styles,i.classes?t.styleClasses=i.classes:t.styleClasses&&(t.styleClasses=null),n===e.doc.frontier&&e.doc.frontier++}return t.styles}function Xn(e,t,n,r){var i=e.doc.mode,o=new xo(t,e.options.tabSize)
for(o.start=o.pos=r||0,""==t&&qn(i,n);!o.eol();)Gn(i,o,n),o.start=o.pos}function Zn(e,t){if(!e||/^\s*$/.test(e))return null
var n=t.addModeClass?To:Lo
return n[e]||(n[e]=e.replace(/\S+/g,"cm-$&"))}function Jn(e,t){var n=Zr("span",null,null,Ci?"padding-right: .1px":null),r={pre:Zr("pre",[n],"CodeMirror-line"),content:n,col:0,pos:0,cm:e,splitSpaces:(ki||Ci)&&e.getOption("lineWrapping")}
t.measure={}
for(var i=0;i<=(t.rest?t.rest.length:0);i++){var o,l=i?t.rest[i-1]:t.line
r.pos=0,r.addToken=Qn,oi(e.display.measure)&&(o=vr(l))&&(r.addToken=tr(r.addToken,o)),r.map=[],rr(l,r,Kn(e,l,t!=e.display.externalMeasured&&pr(l))),l.styleClasses&&(l.styleClasses.bgClass&&(r.bgClass=ni(l.styleClasses.bgClass,r.bgClass||"")),l.styleClasses.textClass&&(r.textClass=ni(l.styleClasses.textClass,r.textClass||""))),0==r.map.length&&r.map.push(0,0,r.content.appendChild(ii(e.display.measure))),0==i?(t.measure.map=r.map,t.measure.cache={}):((t.measure.maps||(t.measure.maps=[])).push(r.map),(t.measure.caches||(t.measure.caches=[])).push({}))}if(Ci){var a=r.content.lastChild;(/\bcm-tab\b/.test(a.className)||a.querySelector&&a.querySelector(".cm-tab"))&&(r.content.className="cm-tab-wrap-hack")}return Wo(e,"renderLine",e,t.line,r.pre),r.pre.className&&(r.textClass=ni(r.pre.className,r.textClass||"")),r}function Qn(e,t,n,r,i,o,l){if(t){var a=e.splitSpaces?t.replace(/ {3,}/g,er):t,s=e.cm.state.specialChars,c=!1
if(s.test(t))for(var u=document.createDocumentFragment(),h=0;;){s.lastIndex=h
var f=s.exec(t),d=f?f.index-h:t.length-h
if(d){var p=document.createTextNode(a.slice(h,h+d))
ki&&9>Si?u.appendChild(Zr("span",[p])):u.appendChild(p),e.map.push(e.pos,e.pos+d,p),e.col+=d,e.pos+=d}if(!f)break
if(h+=d+1,"\t"==f[0]){var m=e.cm.options.tabSize,g=m-e.col%m;(p=u.appendChild(Zr("span",Fr(g),"cm-tab"))).setAttribute("role","presentation"),p.setAttribute("cm-text","\t"),e.col+=g}else if("\r"==f[0]||"\n"==f[0]){(p=u.appendChild(Zr("span","\r"==f[0]?"␍":"␤","cm-invalidchar"))).setAttribute("cm-text",f[0]),e.col+=1}else{(p=e.cm.options.specialCharPlaceholder(f[0])).setAttribute("cm-text",f[0]),ki&&9>Si?u.appendChild(Zr("span",[p])):u.appendChild(p),e.col+=1}e.map.push(e.pos,e.pos+1,p),e.pos++}else{e.col+=t.length
u=document.createTextNode(a)
e.map.push(e.pos,e.pos+t.length,u),ki&&9>Si&&(c=!0),e.pos+=t.length}if(n||r||i||c||l){var v=n||""
r&&(v+=r),i&&(v+=i)
var y=Zr("span",[u],v,l)
return o&&(y.title=o),e.content.appendChild(y)}e.content.appendChild(u)}}function er(e){for(var t=" ",n=0;n<e.length-2;++n)t+=n%2?" ":" "
return t+" "}function tr(e,t){return function(n,r,i,o,l,a,s){i=i?i+" cm-force-border":"cm-force-border"
for(var c=n.pos,u=c+r.length;;){for(var h=0;h<t.length;h++){var f=t[h]
if(f.to>c&&f.from<=c)break}if(f.to>=u)return e(n,r,i,o,l,a,s)
e(n,r.slice(0,f.to-c),i,o,null,a,s),o=null,r=r.slice(f.to-c),c=f.to}}}function nr(e,t,n,r){var i=!r&&n.widgetNode
i&&e.map.push(e.pos,e.pos+t,i),!r&&e.cm.display.input.needsContentAttribute&&(i||(i=e.content.appendChild(document.createElement("span"))),i.setAttribute("cm-marker",n.id)),i&&(e.cm.display.input.setUneditable(i),e.content.appendChild(i)),e.pos+=t}function rr(e,t,n){var r=e.markedSpans,i=e.text,o=0
if(r)for(var l,a,s,c,u,h,f,d=i.length,p=0,m=1,g="",v=0;;){if(v==p){s=c=u=h=a="",f=null,v=1/0
for(var y,x=[],b=0;b<r.length;++b){var w=r[b],k=w.marker
"bookmark"==k.type&&w.from==p&&k.widgetNode?x.push(k):w.from<=p&&(null==w.to||w.to>p||k.collapsed&&w.to==p&&w.from==p)?(null!=w.to&&w.to!=p&&v>w.to&&(v=w.to,c=""),k.className&&(s+=" "+k.className),k.css&&(a=(a?a+";":"")+k.css),k.startStyle&&w.from==p&&(u+=" "+k.startStyle),k.endStyle&&w.to==v&&(y||(y=[])).push(k.endStyle,w.to),k.title&&!h&&(h=k.title),k.collapsed&&(!f||En(f.marker,k)<0)&&(f=w)):w.from>p&&v>w.from&&(v=w.from)}if(y)for(b=0;b<y.length;b+=2)y[b+1]==v&&(c+=" "+y[b])
if(!f||f.from==p)for(b=0;b<x.length;++b)nr(t,0,x[b])
if(f&&(f.from||0)==p){if(nr(t,(null==f.to?d+1:f.to)-p,f.marker,null==f.from),null==f.to)return
f.to==p&&(f=!1)}}if(p>=d)break
for(var S=Math.min(d,v);;){if(g){var C=p+g.length
if(!f){var L=C>S?g.slice(0,S-p):g
t.addToken(t,L,l?l+s:s,u,p+L.length==v?c:"",h,a)}if(C>=S){g=g.slice(S-p),p=S
break}p=C,u=""}g=i.slice(o,o=n[m++]),l=Zn(n[m++],t.cm.options)}}else for(m=1;m<n.length;m+=2)t.addToken(t,i.slice(o,o=n[m]),Zn(n[m+1],t.cm.options))}function ir(e,t){return 0==t.from.ch&&0==t.to.ch&&""==zr(t.text)&&(!e.cm||e.cm.options.wholeLineUpdateBefore)}function or(e,t,n,r){function i(e){return n?n[e]:null}function o(e,n,i){(function(e,t,n,r){e.text=t,e.stateAfter&&(e.stateAfter=null),e.styles&&(e.styles=null),null!=e.order&&(e.order=null),Tn(e),Mn(e,n)
var i=r?r(e):1
i!=e.height&&dr(e,i)})(e,n,i,r),Pr(e,"change",e,t)}function l(e,t){for(var n=e,o=[];t>n;++n)o.push(new Co(c[n],i(n),r))
return o}var a=t.from,s=t.to,c=t.text,u=ur(e,a.line),h=ur(e,s.line),f=zr(c),d=i(c.length-1),p=s.line-a.line
if(t.full)e.insert(0,l(0,c.length)),e.remove(c.length,e.size-c.length)
else if(ir(e,t)){var m=l(0,c.length-1)
o(h,h.text,d),p&&e.remove(a.line,p),m.length&&e.insert(a.line,m)}else if(u==h)if(1==c.length)o(u,u.text.slice(0,a.ch)+f+u.text.slice(s.ch),d)
else{(m=l(1,c.length-1)).push(new Co(f+u.text.slice(s.ch),d,r)),o(u,u.text.slice(0,a.ch)+c[0],i(0)),e.insert(a.line+1,m)}else if(1==c.length)o(u,u.text.slice(0,a.ch)+c[0]+h.text.slice(s.ch),i(0)),e.remove(a.line+1,p)
else{o(u,u.text.slice(0,a.ch)+c[0],i(0)),o(h,f+h.text.slice(s.ch),d)
m=l(1,c.length-1)
p>1&&e.remove(a.line+1,p-1),e.insert(a.line+1,m)}Pr(e,"change",e,t)}function lr(e){this.lines=e,this.parent=null
for(var t=0,n=0;t<e.length;++t)e[t].parent=this,n+=e[t].height
this.height=n}function ar(e){this.children=e
for(var t=0,n=0,r=0;r<e.length;++r){var i=e[r]
t+=i.chunkSize(),n+=i.height,i.parent=this}this.size=t,this.height=n,this.parent=null}function sr(e,t,n){(function e(r,i,o){if(r.linked)for(var l=0;l<r.linked.length;++l){var a=r.linked[l]
if(a.doc!=i){var s=o&&a.sharedHist
n&&!s||(t(a.doc,s),e(a.doc,r,s))}}})(e,null,!0)}function cr(e,t){if(t.cm)throw new Error("This document is already in use.")
e.doc=t,t.cm=e,o(e),n(e),e.options.lineWrapping||h(e),e.options.mode=t.modeOption,wt(e)}function ur(e,t){if(0>(t-=e.first)||t>=e.size)throw new Error("There is no line "+(t+e.first)+" in the document.")
for(var n=e;!n.lines;)for(var r=0;;++r){var i=n.children[r],o=i.chunkSize()
if(o>t){n=i
break}t-=o}return n.lines[t]}function hr(e,t,n){var r=[],i=t.line
return e.iter(t.line,n.line+1,(function(e){var o=e.text
i==n.line&&(o=o.slice(0,n.ch)),i==t.line&&(o=o.slice(t.ch)),r.push(o),++i})),r}function fr(e,t,n){var r=[]
return e.iter(t,n,(function(e){r.push(e.text)})),r}function dr(e,t){var n=t-e.height
if(n)for(var r=e;r;r=r.parent)r.height+=n}function pr(e){if(null==e.parent)return null
for(var t=e.parent,n=jr(t.lines,e),r=t.parent;r;t=r,r=r.parent)for(var i=0;r.children[i]!=t;++i)n+=r.children[i].chunkSize()
return n+t.first}function mr(e,t){var n=e.first
e:do{for(var r=0;r<e.children.length;++r){var i=e.children[r],o=i.height
if(o>t){e=i
continue e}t-=o,n+=i.chunkSize()}return n}while(!e.lines)
for(r=0;r<e.lines.length;++r){var l=e.lines[r].height
if(l>t)break
t-=l}return n+r}function gr(e){for(var t=0,n=(e=Dn(e)).parent,r=0;r<n.lines.length;++r){var i=n.lines[r]
if(i==e)break
t+=i.height}for(var o=n.parent;o;o=(n=o).parent)for(r=0;r<o.children.length;++r){var l=o.children[r]
if(l==n)break
t+=l.height}return t}function vr(e){var t=e.order
return null==t&&(t=e.order=hl(e.text)),t}function yr(e){this.done=[],this.undone=[],this.undoDepth=1/0,this.lastModTime=this.lastSelTime=0,this.lastOp=this.lastSelOp=null,this.lastOrigin=this.lastSelOrigin=null,this.generation=this.maxGeneration=e||1}function xr(e,t){var n={from:U(t.from),to:no(t),text:hr(e,t.from,t.to)}
return Sr(e,n,t.from.line,t.to.line+1),sr(e,(function(e){Sr(e,n,t.from.line,t.to.line+1)}),!0),n}function br(e){for(;e.length;){if(!zr(e).ranges)break
e.pop()}}function wr(e,t,n,r){var i=e.history
i.undone.length=0
var o,l=+new Date
if((i.lastOp==r||i.lastOrigin==t.origin&&t.origin&&("+"==t.origin.charAt(0)&&e.cm&&i.lastModTime>l-e.cm.options.historyEventDelay||"*"==t.origin.charAt(0)))&&(o=function(e,t){return t?(br(e.done),zr(e.done)):e.done.length&&!zr(e.done).ranges?zr(e.done):e.done.length>1&&!e.done[e.done.length-2].ranges?(e.done.pop(),zr(e.done)):void 0}(i,i.lastOp==r))){var a=zr(o.changes)
0==ji(t.from,t.to)&&0==ji(t.from,a.to)?a.to=no(t):o.changes.push(xr(e,t))}else{var s=zr(i.done)
for(s&&s.ranges||kr(e.sel,i.done),o={changes:[xr(e,t)],generation:i.generation},i.done.push(o);i.done.length>i.undoDepth;)i.done.shift(),i.done[0].ranges||i.done.shift()}i.done.push(n),i.generation=++i.maxGeneration,i.lastModTime=i.lastSelTime=l,i.lastOp=i.lastSelOp=r,i.lastOrigin=i.lastSelOrigin=t.origin,a||Wo(e,"historyAdded")}function kr(e,t){var n=zr(t)
n&&n.ranges&&n.equals(e)||t.push(e)}function Sr(e,t,n,r){var i=t["spans_"+e.id],o=0
e.iter(Math.max(e.first,n),Math.min(e.first+e.size,r),(function(n){n.markedSpans&&((i||(i=t["spans_"+e.id]={}))[o]=n.markedSpans),++o}))}function Cr(e){if(!e)return null
for(var t,n=0;n<e.length;++n)e[n].marker.explicitlyCleared?t||(t=e.slice(0,n)):t&&t.push(e[n])
return t?t.length?t:null:e}function Lr(e,t,n){for(var r=0,i=[];r<e.length;++r){var o=e[r]
if(o.ranges)i.push(n?oe.prototype.deepCopy.call(o):o)
else{var l=o.changes,a=[]
i.push({changes:a})
for(var s=0;s<l.length;++s){var c,u=l[s]
if(a.push({from:u.from,to:u.to,text:u.text}),t)for(var h in u)(c=h.match(/^spans_(\d+)$/))&&jr(t,Number(c[1]))>-1&&(zr(a)[h]=u[h],delete u[h])}}}return i}function Tr(e,t,n,r){n<e.line?e.line+=r:t<e.line&&(e.line=t,e.ch=0)}function Mr(e,t,n,r){for(var i=0;i<e.length;++i){var o=e[i],l=!0
if(o.ranges){o.copied||((o=e[i]=o.deepCopy()).copied=!0)
for(var a=0;a<o.ranges.length;a++)Tr(o.ranges[a].anchor,t,n,r),Tr(o.ranges[a].head,t,n,r)}else{for(a=0;a<o.changes.length;++a){var s=o.changes[a]
if(n<s.from.line)s.from=zi(s.from.line+r,s.from.ch),s.to=zi(s.to.line+r,s.to.ch)
else if(t<=s.to.line){l=!1
break}}l||(e.splice(0,i+1),i=0)}}}function Nr(e,t){var n=t.from.line,r=t.to.line,i=t.text.length-(r-n)-1
Mr(e.done,n,r,i),Mr(e.undone,n,r,i)}function Ar(e){return null!=e.defaultPrevented?e.defaultPrevented:0==e.returnValue}function Er(e){return e.target||e.srcElement}function Or(e){var t=e.which
return null==t&&(1&e.button?t=1:2&e.button?t=3:4&e.button&&(t=2)),Pi&&e.ctrlKey&&1==t&&(t=3),t}function Ir(e,t,n){var r=e._handlers&&e._handlers[t]
return n?r&&r.length>0?r.slice():Do:r||Do}function Pr(e,t){function n(e){return function(){e.apply(null,o)}}var r=Ir(e,t,!1)
if(r.length){var i,o=Array.prototype.slice.call(arguments,2)
Vi?i=Vi.delayedCallbacks:Bo?i=Bo:(i=Bo=[],setTimeout(Rr,0))
for(var l=0;l<r.length;++l)i.push(n(r[l]))}}function Rr(){var e=Bo
Bo=null
for(var t=0;t<e.length;++t)e[t]()}function Dr(e,t,n){return"string"==typeof t&&(t={type:t,preventDefault:function(){this.defaultPrevented=!0}}),Wo(e,n||t.type,e,t),Ar(t)||t.codemirrorIgnore}function Hr(e){var t=e._handlers&&e._handlers.cursorActivity
if(t)for(var n=e.curOp.cursorActivityHandlers||(e.curOp.cursorActivityHandlers=[]),r=0;r<t.length;++r)-1==jr(n,t[r])&&n.push(t[r])}function Wr(e,t){return Ir(e,t).length>0}function Br(e){e.prototype.on=function(e,t){Ro(this,e,t)},e.prototype.off=function(e,t){Ho(this,e,t)}}function _r(){this.id=null}function Fr(e){for(;Yo.length<=e;)Yo.push(zr(Yo)+" ")
return Yo[e]}function zr(e){return e[e.length-1]}function jr(e,t){for(var n=0;n<e.length;++n)if(e[n]==t)return n
return-1}function Ur(e,t){for(var n=[],r=0;r<e.length;r++)n[r]=t(e[r],r)
return n}function qr(){}function Gr(e,t){var n
return Object.create?n=Object.create(e):(qr.prototype=e,n=new qr),t&&Yr(t,n),n}function Yr(e,t,n){for(var r in t||(t={}),e)!e.hasOwnProperty(r)||!1===n&&t.hasOwnProperty(r)||(t[r]=e[r])
return t}function $r(e){var t=Array.prototype.slice.call(arguments,1)
return function(){return e.apply(null,t)}}function Vr(e,t){return t?!!(t.source.indexOf("\\w")>-1&&Xo(e))||t.test(e):Xo(e)}function Kr(e){for(var t in e)if(e.hasOwnProperty(t)&&e[t])return!1
return!0}function Xr(e){return e.charCodeAt(0)>=768&&Zo.test(e)}function Zr(e,t,n,r){var i=document.createElement(e)
if(n&&(i.className=n),r&&(i.style.cssText=r),"string"==typeof t)i.appendChild(document.createTextNode(t))
else if(t)for(var o=0;o<t.length;++o)i.appendChild(t[o])
return i}function Jr(e){for(var t=e.childNodes.length;t>0;--t)e.removeChild(e.firstChild)
return e}function Qr(e,t){return Jr(e).appendChild(t)}function ei(){for(var e=document.activeElement;e&&e.root&&e.root.activeElement;)e=e.root.activeElement
return e}function ti(e){return new RegExp("(^|\\s)"+e+"(?:$|\\s)\\s*")}function ni(e,t){for(var n=e.split(" "),r=0;r<n.length;r++)n[r]&&!ti(n[r]).test(t)&&(t+=" "+n[r])
return t}function ri(e){if(document.body.getElementsByClassName)for(var t=document.body.getElementsByClassName("CodeMirror"),n=0;n<t.length;n++){var r=t[n].CodeMirror
r&&e(r)}}function ii(e){if(null==Qo){var t=Zr("span","​")
Qr(e,Zr("span",[t,document.createTextNode("x")])),0!=e.firstChild.offsetHeight&&(Qo=t.offsetWidth<=1&&t.offsetHeight>2&&!(ki&&8>Si))}var n=Qo?Zr("span","​"):Zr("span"," ",null,"display: inline-block; width: 1px; margin-right: -1px")
return n.setAttribute("cm-text",""),n}function oi(e){if(null!=el)return el
var t=Qr(e,document.createTextNode("AخA")),n=Vo(t,0,1).getBoundingClientRect()
if(!n||n.left==n.right)return!1
var r=Vo(t,1,2).getBoundingClientRect()
return el=r.right-n.right<3}function li(e){return e.level%2?e.to:e.from}function ai(e){return e.level%2?e.from:e.to}function si(e){var t=vr(e)
return t?li(t[0]):0}function ci(e){var t=vr(e)
return t?ai(zr(t)):e.text.length}function ui(e,t){var n=ur(e.doc,t),r=Dn(n)
r!=n&&(t=pr(r))
var i=vr(r),o=i?i[0].level%2?ci(r):si(r):0
return zi(t,o)}function hi(e,t){var n=ui(e,t.line),r=ur(e.doc,n.line),i=vr(r)
if(!i||0==i[0].level){var o=Math.max(0,r.text.search(/\S/)),l=t.line==n.line&&t.ch<=o&&t.ch
return zi(n.line,l?0:o)}return n}function fi(e,t,n){var r=e[0].level
return t==r||n!=r&&n>t}function di(e,t){ul=null
for(var n,r=0;r<e.length;++r){var i=e[r]
if(i.from<t&&i.to>t)return r
if(i.from==t||i.to==t){if(null!=n)return fi(e,i.level,e[n].level)?(i.from!=i.to&&(ul=n),r):(i.from!=i.to&&(ul=r),n)
n=r}}return n}function pi(e,t,n,r){if(!r)return t+n
do{t+=n}while(t>0&&Xr(e.text.charAt(t)))
return t}function mi(e,t,n,r){var i=vr(e)
if(!i)return gi(e,t,n,r)
for(var o=di(i,t),l=i[o],a=pi(e,t,l.level%2?-n:n,r);;){if(a>l.from&&a<l.to)return a
if(a==l.from||a==l.to)return di(i,a)==o?a:n>0==(l=i[o+=n]).level%2?l.to:l.from
if(!(l=i[o+=n]))return null
a=n>0==l.level%2?pi(e,l.to,-1,r):pi(e,l.from,1,r)}}function gi(e,t,n,r){var i=t+n
if(r)for(;i>0&&Xr(e.text.charAt(i));)i+=n
return 0>i||i>e.text.length?null:i}var vi=navigator.userAgent,yi=navigator.platform,xi=/gecko\/\d/i.test(vi),bi=/MSIE \d/.test(vi),wi=/Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(vi),ki=bi||wi,Si=ki&&(bi?document.documentMode||6:wi[1]),Ci=/WebKit\//.test(vi),Li=Ci&&/Qt\/\d+\.\d+/.test(vi),Ti=/Chrome\//.test(vi),Mi=/Opera\//.test(vi),Ni=/Apple Computer/.test(navigator.vendor),Ai=/Mac OS X 1\d\D([8-9]|\d\d)\D/.test(vi),Ei=/PhantomJS/.test(vi),Oi=/AppleWebKit/.test(vi)&&/Mobile\/\w+/.test(vi),Ii=Oi||/Android|webOS|BlackBerry|Opera Mini|Opera Mobi|IEMobile/i.test(vi),Pi=Oi||/Mac/.test(yi),Ri=/\bCrOS\b/.test(vi),Di=/win/i.test(yi),Hi=Mi&&vi.match(/Version\/(\d*\.\d*)/)
Hi&&(Hi=Number(Hi[1])),Hi&&Hi>=15&&(Mi=!1,Ci=!0)
var Wi=Pi&&(Li||Mi&&(null==Hi||12.11>Hi)),Bi=xi||ki&&Si>=9,_i=!1,Fi=!1
p.prototype=Yr({update:function(e){var t=e.scrollWidth>e.clientWidth+1,n=e.scrollHeight>e.clientHeight+1,r=e.nativeBarWidth
if(n){this.vert.style.display="block",this.vert.style.bottom=t?r+"px":"0"
var i=e.viewHeight-(t?r:0)
this.vert.firstChild.style.height=Math.max(0,e.scrollHeight-e.clientHeight+i)+"px"}else this.vert.style.display="",this.vert.firstChild.style.height="0"
if(t){this.horiz.style.display="block",this.horiz.style.right=n?r+"px":"0",this.horiz.style.left=e.barLeft+"px"
var o=e.viewWidth-e.barLeft-(n?r:0)
this.horiz.firstChild.style.width=e.scrollWidth-e.clientWidth+o+"px"}else this.horiz.style.display="",this.horiz.firstChild.style.width="0"
return!this.checkedZeroWidth&&e.clientHeight>0&&(0==r&&this.zeroWidthHack(),this.checkedZeroWidth=!0),{right:n?r:0,bottom:t?r:0}},setScrollLeft:function(e){this.horiz.scrollLeft!=e&&(this.horiz.scrollLeft=e),this.disableHoriz&&this.enableZeroWidthBar(this.horiz,this.disableHoriz)},setScrollTop:function(e){this.vert.scrollTop!=e&&(this.vert.scrollTop=e),this.disableVert&&this.enableZeroWidthBar(this.vert,this.disableVert)},zeroWidthHack:function(){var e=Pi&&!Ai?"12px":"18px"
this.horiz.style.height=this.vert.style.width=e,this.horiz.style.pointerEvents=this.vert.style.pointerEvents="none",this.disableHoriz=new _r,this.disableVert=new _r},enableZeroWidthBar:function(e,t){e.style.pointerEvents="auto",t.set(1e3,(function n(){var r=e.getBoundingClientRect()
document.elementFromPoint(r.left+1,r.bottom-1)!=e?e.style.pointerEvents="none":t.set(1e3,n)}))},clear:function(){var e=this.horiz.parentNode
e.removeChild(this.horiz),e.removeChild(this.vert)}},p.prototype),m.prototype=Yr({update:function(){return{bottom:0,right:0}},setScrollLeft:function(){},setScrollTop:function(){},clear:function(){}},m.prototype),e.scrollbarModel={native:p,null:m},C.prototype.signal=function(e,t){Wr(e,t)&&this.events.push(arguments)},C.prototype.finish=function(){for(var e=0;e<this.events.length;e++)Wo.apply(null,this.events[e])}
var zi=e.Pos=function(e,t){return this instanceof zi?(this.line=e,void(this.ch=t)):new zi(e,t)},ji=e.cmpPos=function(e,t){return e.line-t.line||e.ch-t.ch},Ui=null
J.prototype=Yr({init:function(e){function t(e){if(!Dr(r,e)){if(r.somethingSelected())Ui={lineWise:!1,text:r.getSelections()},n.inaccurateSelection&&(n.prevInput="",n.inaccurateSelection=!1,o.value=Ui.text.join("\n"),$o(o))
else{if(!r.options.lineWiseCopyCut)return
var t=X(r)
Ui={lineWise:!0,text:t.text},"cut"==e.type?r.setSelections(t.ranges,null,zo):(n.prevInput="",o.value=t.text.join("\n"),$o(o))}"cut"==e.type&&(r.state.cutIncoming=!0)}}var n=this,r=this.cm,i=this.wrapper=Q(),o=this.textarea=i.firstChild
e.wrapper.insertBefore(i,e.wrapper.firstChild),Oi&&(o.style.width="0px"),Ro(o,"input",(function(){ki&&Si>=9&&n.hasSelection&&(n.hasSelection=null),n.poll()})),Ro(o,"paste",(function(e){Dr(r,e)||V(e,r)||(r.state.pasteIncoming=!0,n.fastPoll())})),Ro(o,"cut",t),Ro(o,"copy",t),Ro(e.scroller,"paste",(function(t){Nt(e,t)||Dr(r,t)||(r.state.pasteIncoming=!0,n.focus())})),Ro(e.lineSpace,"selectstart",(function(t){Nt(e,t)||Oo(t)})),Ro(o,"compositionstart",(function(){var e=r.getCursor("from")
n.composing&&n.composing.range.clear(),n.composing={start:e,range:r.markText(e,r.getCursor("to"),{className:"CodeMirror-composing"})}})),Ro(o,"compositionend",(function(){n.composing&&(n.poll(),n.composing.range.clear(),n.composing=null)}))},prepareSelection:function(){var e=this.cm,t=e.display,n=e.doc,r=Ne(e)
if(e.options.moveInputWithCursor){var i=tt(e,n.sel.primary().head,"div"),o=t.wrapper.getBoundingClientRect(),l=t.lineDiv.getBoundingClientRect()
r.teTop=Math.max(0,Math.min(t.wrapper.clientHeight-10,i.top+l.top-o.top)),r.teLeft=Math.max(0,Math.min(t.wrapper.clientWidth-10,i.left+l.left-o.left))}return r},showSelection:function(e){var t=this.cm.display
Qr(t.cursorDiv,e.cursors),Qr(t.selectionDiv,e.selection),null!=e.teTop&&(this.wrapper.style.top=e.teTop+"px",this.wrapper.style.left=e.teLeft+"px")},reset:function(e){if(!this.contextMenuPending){var t,n,r=this.cm,i=r.doc
if(r.somethingSelected()){this.prevInput=""
var o=i.sel.primary(),l=(t=al&&(o.to().line-o.from().line>100||(n=r.getSelection()).length>1e3))?"-":n||r.getSelection()
this.textarea.value=l,r.state.focused&&$o(this.textarea),ki&&Si>=9&&(this.hasSelection=l)}else e||(this.prevInput=this.textarea.value="",ki&&Si>=9&&(this.hasSelection=null))
this.inaccurateSelection=t}},getField:function(){return this.textarea},supportsTouch:function(){return!1},focus:function(){if("nocursor"!=this.cm.options.readOnly&&(!Ii||ei()!=this.textarea))try{this.textarea.focus()}catch(e){}},blur:function(){this.textarea.blur()},resetPosition:function(){this.wrapper.style.top=this.wrapper.style.left=0},receivedFocus:function(){this.slowPoll()},slowPoll:function(){var e=this
e.pollingFast||e.polling.set(this.cm.options.pollInterval,(function(){e.poll(),e.cm.state.focused&&e.slowPoll()}))},fastPoll:function(){var e=!1,t=this
t.pollingFast=!0,t.polling.set(20,(function n(){t.poll()||e?(t.pollingFast=!1,t.slowPoll()):(e=!0,t.polling.set(60,n))}))},poll:function(){var e=this.cm,t=this.textarea,n=this.prevInput
if(this.contextMenuPending||!e.state.focused||ll(t)&&!n&&!this.composing||e.isReadOnly()||e.options.disableInput||e.state.keySeq)return!1
var r=t.value
if(r==n&&!e.somethingSelected())return!1
if(ki&&Si>=9&&this.hasSelection===r||Pi&&/[\uf700-\uf7ff]/.test(r))return e.display.input.reset(),!1
if(e.doc.sel==e.display.selForContextMenu){var i=r.charCodeAt(0)
if(8203!=i||n||(n="​"),8666==i)return this.reset(),this.cm.execCommand("undo")}for(var o=0,l=Math.min(n.length,r.length);l>o&&n.charCodeAt(o)==r.charCodeAt(o);)++o
var a=this
return mt(e,(function(){$(e,r.slice(o),n.length-o,null,a.composing?"*compose":null),r.length>1e3||r.indexOf("\n")>-1?t.value=a.prevInput="":a.prevInput=r,a.composing&&(a.composing.range.clear(),a.composing.range=e.markText(a.composing.start,e.getCursor("to"),{className:"CodeMirror-composing"}))})),!0},ensurePolled:function(){this.pollingFast&&this.poll()&&(this.pollingFast=!1)},onKeyPress:function(){ki&&Si>=9&&(this.hasSelection=null),this.fastPoll()},onContextMenu:function(e){function t(){if(null!=l.selectionStart){var e=i.somethingSelected(),t="​"+(e?l.value:"")
l.value="⇚",l.value=t,r.prevInput=e?"":"​",l.selectionStart=1,l.selectionEnd=t.length,o.selForContextMenu=i.doc.sel}}function n(){if(r.contextMenuPending=!1,r.wrapper.style.cssText=u,l.style.cssText=c,ki&&9>Si&&o.scrollbars.setScrollTop(o.scroller.scrollTop=s),null!=l.selectionStart){(!ki||ki&&9>Si)&&t()
var e=0,n=function(){o.selForContextMenu==i.doc.sel&&0==l.selectionStart&&l.selectionEnd>0&&"​"==r.prevInput?gt(i,po.selectAll)(i):e++<10?o.detectingSelectAll=setTimeout(n,500):o.input.reset()}
o.detectingSelectAll=setTimeout(n,200)}}var r=this,i=r.cm,o=i.display,l=r.textarea,a=At(i,e),s=o.scroller.scrollTop
if(a&&!Mi){i.options.resetSelectionOnContextMenu&&-1==i.doc.sel.contains(a)&&gt(i,xe)(i.doc,se(a),zo)
var c=l.style.cssText,u=r.wrapper.style.cssText
r.wrapper.style.cssText="position: absolute"
var h=r.wrapper.getBoundingClientRect()
if(l.style.cssText="position: absolute; width: 30px; height: 30px; top: "+(e.clientY-h.top-5)+"px; left: "+(e.clientX-h.left-5)+"px; z-index: 1000; background: "+(ki?"rgba(255, 255, 255, .05)":"transparent")+"; outline: none; border-width: 0; outline: none; overflow: hidden; opacity: .05; filter: alpha(opacity=5);",Ci)var f=window.scrollY
if(o.input.focus(),Ci&&window.scrollTo(null,f),o.input.reset(),i.somethingSelected()||(l.value=r.prevInput=" "),r.contextMenuPending=!0,o.selForContextMenu=i.doc.sel,clearTimeout(o.detectingSelectAll),ki&&Si>=9&&t(),Bi){Po(e)
var d=function(){Ho(window,"mouseup",d),setTimeout(n,20)}
Ro(window,"mouseup",d)}else setTimeout(n,50)}},readOnlyChanged:function(e){e||this.reset()},setUneditable:qr,needsContentAttribute:!1},J.prototype),ee.prototype=Yr({init:function(e){function t(e){if(!Dr(r,e)){if(r.somethingSelected())Ui={lineWise:!1,text:r.getSelections()},"cut"==e.type&&r.replaceSelection("",null,"cut")
else{if(!r.options.lineWiseCopyCut)return
var t=X(r)
Ui={lineWise:!0,text:t.text},"cut"==e.type&&r.operation((function(){r.setSelections(t.ranges,0,zo),r.replaceSelection("",null,"cut")}))}if(e.clipboardData&&!Oi)e.preventDefault(),e.clipboardData.clearData(),e.clipboardData.setData("text/plain",Ui.text.join("\n"))
else{var n=Q(),i=n.firstChild
r.display.lineSpace.insertBefore(n,r.display.lineSpace.firstChild),i.value=Ui.text.join("\n")
var o=document.activeElement
$o(i),setTimeout((function(){r.display.lineSpace.removeChild(n),o.focus()}),50)}}}var n=this,r=n.cm,i=n.div=e.lineDiv
Z(i),Ro(i,"paste",(function(e){Dr(r,e)||V(e,r)})),Ro(i,"compositionstart",(function(e){var t=e.data
if(n.composing={sel:r.doc.sel,data:t,startData:t},t){var i=r.doc.sel.primary(),o=r.getLine(i.head.line).indexOf(t,Math.max(0,i.head.ch-t.length))
o>-1&&o<=i.head.ch&&(n.composing.sel=se(zi(i.head.line,o),zi(i.head.line,o+t.length)))}})),Ro(i,"compositionupdate",(function(e){n.composing.data=e.data})),Ro(i,"compositionend",(function(e){var t=n.composing
t&&(e.data==t.startData||/\u200b/.test(e.data)||(t.data=e.data),setTimeout((function(){t.handled||n.applyComposition(t),n.composing==t&&(n.composing=null)}),50))})),Ro(i,"touchstart",(function(){n.forceCompositionEnd()})),Ro(i,"input",(function(){n.composing||!r.isReadOnly()&&n.pollContent()||mt(n.cm,(function(){wt(r)}))})),Ro(i,"copy",t),Ro(i,"cut",t)},prepareSelection:function(){var e=Ne(this.cm,!1)
return e.focus=this.cm.state.focused,e},showSelection:function(e,t){e&&this.cm.display.view.length&&((e.focus||t)&&this.showPrimarySelection(),this.showMultipleSelections(e))},showPrimarySelection:function(){var e=window.getSelection(),t=this.cm.doc.sel.primary(),n=re(this.cm,e.anchorNode,e.anchorOffset),r=re(this.cm,e.focusNode,e.focusOffset)
if(!n||n.bad||!r||r.bad||0!=ji(G(n,r),t.from())||0!=ji(q(n,r),t.to())){var i=te(this.cm,t.from()),o=te(this.cm,t.to())
if(i||o){var l=this.cm.display.view,a=e.rangeCount&&e.getRangeAt(0)
if(i){if(!o){var s=l[l.length-1].measure,c=s.maps?s.maps[s.maps.length-1]:s.map
o={node:c[c.length-1],offset:c[c.length-2]-c[c.length-3]}}}else i={node:l[0].measure.map[2],offset:0}
try{var h=Vo(i.node,i.offset,o.offset,o.node)}catch(u){}h&&(!xi&&this.cm.state.focused?(e.collapse(i.node,i.offset),h.collapsed||e.addRange(h)):(e.removeAllRanges(),e.addRange(h)),a&&null==e.anchorNode?e.addRange(a):xi&&this.startGracePeriod()),this.rememberSelection()}}},startGracePeriod:function(){var e=this
clearTimeout(this.gracePeriod),this.gracePeriod=setTimeout((function(){e.gracePeriod=!1,e.selectionChanged()&&e.cm.operation((function(){e.cm.curOp.selectionChanged=!0}))}),20)},showMultipleSelections:function(e){Qr(this.cm.display.cursorDiv,e.cursors),Qr(this.cm.display.selectionDiv,e.selection)},rememberSelection:function(){var e=window.getSelection()
this.lastAnchorNode=e.anchorNode,this.lastAnchorOffset=e.anchorOffset,this.lastFocusNode=e.focusNode,this.lastFocusOffset=e.focusOffset},selectionInEditor:function(){var e=window.getSelection()
if(!e.rangeCount)return!1
var t=e.getRangeAt(0).commonAncestorContainer
return Jo(this.div,t)},focus:function(){"nocursor"!=this.cm.options.readOnly&&this.div.focus()},blur:function(){this.div.blur()},getField:function(){return this.div},supportsTouch:function(){return!0},receivedFocus:function(){var e=this
this.selectionInEditor()?this.pollSelection():mt(this.cm,(function(){e.cm.curOp.selectionChanged=!0})),this.polling.set(this.cm.options.pollInterval,(function t(){e.cm.state.focused&&(e.pollSelection(),e.polling.set(e.cm.options.pollInterval,t))}))},selectionChanged:function(){var e=window.getSelection()
return e.anchorNode!=this.lastAnchorNode||e.anchorOffset!=this.lastAnchorOffset||e.focusNode!=this.lastFocusNode||e.focusOffset!=this.lastFocusOffset},pollSelection:function(){if(!this.composing&&!this.gracePeriod&&this.selectionChanged()){var e=window.getSelection(),t=this.cm
this.rememberSelection()
var n=re(t,e.anchorNode,e.anchorOffset),r=re(t,e.focusNode,e.focusOffset)
n&&r&&mt(t,(function(){xe(t.doc,se(n,r),zo),(n.bad||r.bad)&&(t.curOp.selectionChanged=!0)}))}},pollContent:function(){var e,t=this.cm,n=t.display,r=t.doc.sel.primary(),i=r.from(),o=r.to()
if(i.line<n.viewFrom||o.line>n.viewTo-1)return!1
if(i.line==n.viewFrom||0==(e=Ct(t,i.line)))var l=pr(n.view[0].line),a=n.view[0].node
else l=pr(n.view[e].line),a=n.view[e-1].node.nextSibling
var s=Ct(t,o.line)
if(s==n.view.length-1)var c=n.viewTo-1,u=n.lineDiv.lastChild
else c=pr(n.view[s+1].line)-1,u=n.view[s+1].node.previousSibling
for(var h=t.doc.splitLines(function(e,t,n,r,i){function o(t){if(1==t.nodeType){var n=t.getAttribute("cm-text")
if(null!=n)return""==n&&(n=t.textContent.replace(/\u200b/g,"")),void(l+=n)
var c,u=t.getAttribute("cm-marker")
if(u){var h=e.findMarks(zi(r,0),zi(i+1,0),function(e){return function(t){return t.id==e}}(+u))
return void(h.length&&(c=h[0].find())&&(l+=hr(e.doc,c.from,c.to).join(s)))}if("false"==t.getAttribute("contenteditable"))return
for(var f=0;f<t.childNodes.length;f++)o(t.childNodes[f]);/^(pre|div|p)$/i.test(t.nodeName)&&(a=!0)}else if(3==t.nodeType){var d=t.nodeValue
if(!d)return
a&&(l+=s,a=!1),l+=d}}for(var l="",a=!1,s=e.doc.lineSeparator();o(t),t!=n;)t=t.nextSibling
return l}(t,a,u,l,c)),f=hr(t.doc,zi(l,0),zi(c,ur(t.doc,c).text.length));h.length>1&&f.length>1;)if(zr(h)==zr(f))h.pop(),f.pop(),c--
else{if(h[0]!=f[0])break
h.shift(),f.shift(),l++}for(var d=0,p=0,m=h[0],g=f[0],v=Math.min(m.length,g.length);v>d&&m.charCodeAt(d)==g.charCodeAt(d);)++d
for(var y=zr(h),x=zr(f),b=Math.min(y.length-(1==h.length?d:0),x.length-(1==f.length?d:0));b>p&&y.charCodeAt(y.length-p-1)==x.charCodeAt(x.length-p-1);)++p
h[h.length-1]=y.slice(0,y.length-p),h[0]=h[0].slice(d)
var w=zi(l,d),k=zi(c,f.length?zr(f).length-p:0)
return h.length>1||h[0]||ji(w,k)?(rn(t.doc,h,w,k,"+input"),!0):void 0},ensurePolled:function(){this.forceCompositionEnd()},reset:function(){this.forceCompositionEnd()},forceCompositionEnd:function(){this.composing&&!this.composing.handled&&(this.applyComposition(this.composing),this.composing.handled=!0,this.div.blur(),this.div.focus())},applyComposition:function(e){this.cm.isReadOnly()?gt(this.cm,wt)(this.cm):e.data&&e.data!=e.startData&&gt(this.cm,$)(this.cm,e.data,0,e.sel)},setUneditable:function(e){e.contentEditable="false"},onKeyPress:function(e){e.preventDefault(),this.cm.isReadOnly()||gt(this.cm,$)(this.cm,String.fromCharCode(null==e.charCode?e.keyCode:e.charCode),0)},readOnlyChanged:function(e){this.div.contentEditable=String("nocursor"!=e)},onContextMenu:qr,resetPosition:qr,needsContentAttribute:!0},ee.prototype),e.inputStyles={textarea:J,contenteditable:ee},oe.prototype={primary:function(){return this.ranges[this.primIndex]},equals:function(e){if(e==this)return!0
if(e.primIndex!=this.primIndex||e.ranges.length!=this.ranges.length)return!1
for(var t=0;t<this.ranges.length;t++){var n=this.ranges[t],r=e.ranges[t]
if(0!=ji(n.anchor,r.anchor)||0!=ji(n.head,r.head))return!1}return!0},deepCopy:function(){for(var e=[],t=0;t<this.ranges.length;t++)e[t]=new le(U(this.ranges[t].anchor),U(this.ranges[t].head))
return new oe(e,this.primIndex)},somethingSelected:function(){for(var e=0;e<this.ranges.length;e++)if(!this.ranges[e].empty())return!0
return!1},contains:function(e,t){t||(t=e)
for(var n=0;n<this.ranges.length;n++){var r=this.ranges[n]
if(ji(t,r.from())>=0&&ji(e,r.to())<=0)return n}return-1}},le.prototype={from:function(){return G(this.anchor,this.head)},to:function(){return q(this.anchor,this.head)},empty:function(){return this.head.line==this.anchor.line&&this.head.ch==this.anchor.ch}}
var qi,Gi,Yi,$i={left:0,right:0,top:0,bottom:0},Vi=null,Ki=0,Xi=0,Zi=0,Ji=null
ki?Ji=-.53:xi?Ji=15:Ti?Ji=-.7:Ni&&(Ji=-1/3)
var Qi=function(e){var t=e.wheelDeltaX,n=e.wheelDeltaY
return null==t&&e.detail&&e.axis==e.HORIZONTAL_AXIS&&(t=e.detail),null==n&&e.detail&&e.axis==e.VERTICAL_AXIS?n=e.detail:null==n&&(n=e.wheelDelta),{x:t,y:n}}
e.wheelEventPixels=function(e){var t=Qi(e)
return t.x*=Ji,t.y*=Ji,t}
var eo=new _r,to=null,no=e.changeEnd=function(e){return e.text?zi(e.from.line+e.text.length-1,zr(e.text).length+(1==e.text.length?e.from.ch:0)):e.to}
e.prototype={constructor:e,focus:function(){window.focus(),this.display.input.focus()},setOption:function(e,t){var n=this.options,r=n[e]
n[e]==t&&"mode"!=e||(n[e]=t,io.hasOwnProperty(e)&&gt(this,io[e])(this,t,r))},getOption:function(e){return this.options[e]},getDoc:function(){return this.doc},addKeyMap:function(e,t){this.state.keyMaps[t?"push":"unshift"](gn(e))},removeKeyMap:function(e){for(var t=this.state.keyMaps,n=0;n<t.length;++n)if(t[n]==e||t[n].name==e)return t.splice(n,1),!0},addOverlay:vt((function(t,n){var r=t.token?t:e.getMode(this.options,t)
if(r.startState)throw new Error("Overlays may not be stateful.")
this.state.overlays.push({mode:r,modeSpec:t,opaque:n&&n.opaque}),this.state.modeGen++,wt(this)})),removeOverlay:vt((function(e){for(var t=this.state.overlays,n=0;n<t.length;++n){var r=t[n].modeSpec
if(r==e||"string"==typeof e&&r.name==e)return t.splice(n,1),this.state.modeGen++,void wt(this)}})),indentLine:vt((function(e,t,n){"string"!=typeof t&&"number"!=typeof t&&(t=null==t?this.options.smartIndent?"smart":"prev":t?"add":"subtract"),he(this.doc,e)&&cn(this,e,t,n)})),indentSelection:vt((function(e){for(var t=this.doc.sel.ranges,n=-1,r=0;r<t.length;r++){var i=t[r]
if(i.empty())i.head.line>n&&(cn(this,i.head.line,e,!0),n=i.head.line,r==this.doc.sel.primIndex&&an(this))
else{var o=i.from(),l=i.to(),a=Math.max(n,o.line)
n=Math.min(this.lastLine(),l.line-(l.ch?0:1))+1
for(var s=a;n>s;++s)cn(this,s,e)
var c=this.doc.sel.ranges
0==o.ch&&t.length==c.length&&c[r].from().ch>0&&ge(this.doc,r,new le(o,c[r].to()),zo)}}})),getTokenAt:function(e,t){return Yn(this,e,t)},getLineTokens:function(e,t){return Yn(this,zi(e),t,!0)},getTokenTypeAt:function(e){e=ue(this.doc,e)
var t,n=Kn(this,ur(this.doc,e.line)),r=0,i=(n.length-1)/2,o=e.ch
if(0==o)t=n[2]
else for(;;){var l=r+i>>1
if((l?n[2*l-1]:0)>=o)i=l
else{if(!(n[2*l+1]<o)){t=n[2*l+2]
break}r=l+1}}var a=t?t.indexOf("cm-overlay "):-1
return 0>a?t:0==a?null:t.slice(0,a-1)},getModeAt:function(t){var n=this.doc.mode
return n.innerMode?e.innerMode(n,this.getTokenAt(t).state).mode:n},getHelper:function(e,t){return this.getHelpers(e,t)[0]},getHelpers:function(e,t){var n=[]
if(!uo.hasOwnProperty(t))return n
var r=uo[t],i=this.getModeAt(e)
if("string"==typeof i[t])r[i[t]]&&n.push(r[i[t]])
else if(i[t])for(var o=0;o<i[t].length;o++){var l=r[i[t][o]]
l&&n.push(l)}else i.helperType&&r[i.helperType]?n.push(r[i.helperType]):r[i.name]&&n.push(r[i.name])
for(o=0;o<r._global.length;o++){var a=r._global[o]
a.pred(i,this)&&-1==jr(n,a.val)&&n.push(a.val)}return n},getStateAfter:function(e,t){var n=this.doc
return Re(this,(e=ce(n,null==e?n.first+n.size-1:e))+1,t)},cursorCoords:function(e,t){var n=this.doc.sel.primary()
return tt(this,null==e?n.head:"object"==typeof e?ue(this.doc,e):e?n.from():n.to(),t||"page")},charCoords:function(e,t){return et(this,ue(this.doc,e),t||"page")},coordsChar:function(e,t){return it(this,(e=Qe(this,e,t||"page")).left,e.top)},lineAtHeight:function(e,t){return e=Qe(this,{top:e,left:0},t||"page").top,mr(this.doc,e+this.display.viewOffset)},heightAtLine:function(e,t){var n,r=!1
if("number"==typeof e){var i=this.doc.first+this.doc.size-1
e<this.doc.first?e=this.doc.first:e>i&&(e=i,r=!0),n=ur(this.doc,e)}else n=e
return Je(this,n,{top:0,left:0},t||"page").top+(r?this.doc.height-gr(n):0)},defaultTextHeight:function(){return lt(this.display)},defaultCharWidth:function(){return at(this.display)},setGutterMarker:vt((function(e,t,n){return un(this.doc,e,"gutter",(function(e){var r=e.gutterMarkers||(e.gutterMarkers={})
return r[t]=n,!n&&Kr(r)&&(e.gutterMarkers=null),!0}))})),clearGutter:vt((function(e){var t=this,n=t.doc,r=n.first
n.iter((function(n){n.gutterMarkers&&n.gutterMarkers[e]&&(n.gutterMarkers[e]=null,kt(t,r,"gutter"),Kr(n.gutterMarkers)&&(n.gutterMarkers=null)),++r}))})),lineInfo:function(e){if("number"==typeof e){if(!he(this.doc,e))return null
var t=e
if(!(e=ur(this.doc,e)))return null}else{if(null==(t=pr(e)))return null}return{line:t,handle:e,text:e.text,gutterMarkers:e.gutterMarkers,textClass:e.textClass,bgClass:e.bgClass,wrapClass:e.wrapClass,widgets:e.widgets}},getViewport:function(){return{from:this.display.viewFrom,to:this.display.viewTo}},addWidget:function(e,t,n,r,i){var o=this.display,l=(e=tt(this,ue(this.doc,e))).bottom,a=e.left
if(t.style.position="absolute",t.setAttribute("cm-ignore-events","true"),this.display.input.setUneditable(t),o.sizer.appendChild(t),"over"==r)l=e.top
else if("above"==r||"near"==r){var s=Math.max(o.wrapper.clientHeight,this.doc.height),c=Math.max(o.sizer.clientWidth,o.lineSpace.clientWidth);("above"==r||e.bottom+t.offsetHeight>s)&&e.top>t.offsetHeight?l=e.top-t.offsetHeight:e.bottom+t.offsetHeight<=s&&(l=e.bottom),a+t.offsetWidth>c&&(a=c-t.offsetWidth)}t.style.top=l+"px",t.style.left=t.style.right="","right"==i?(a=o.sizer.clientWidth-t.offsetWidth,t.style.right="0px"):("left"==i?a=0:"middle"==i&&(a=(o.sizer.clientWidth-t.offsetWidth)/2),t.style.left=a+"px"),n&&function(e,t,n,r,i){var o=on(e,t,n,r,i)
null!=o.scrollTop&&Dt(e,o.scrollTop),null!=o.scrollLeft&&Ht(e,o.scrollLeft)}(this,a,l,a+t.offsetWidth,l+t.offsetHeight)},triggerOnKeyDown:vt(zt),triggerOnKeyPress:vt(Ut),triggerOnKeyUp:jt,execCommand:function(e){return po.hasOwnProperty(e)?po[e].call(null,this):void 0},triggerElectric:vt((function(e){K(this,e)})),findPosH:function(e,t,n,r){var i=1
0>t&&(i=-1,t=-t)
for(var o=0,l=ue(this.doc,e);t>o&&!(l=fn(this.doc,l,i,n,r)).hitSide;++o);return l},moveH:vt((function(e,t){var n=this
n.extendSelectionsBy((function(r){return n.display.shift||n.doc.extend||r.empty()?fn(n.doc,r.head,e,t,n.options.rtlMoveVisually):0>e?r.from():r.to()}),Uo)})),deleteH:vt((function(e,t){var n=this.doc.sel,r=this.doc
n.somethingSelected()?r.replaceSelection("",null,"+delete"):hn(this,(function(n){var i=fn(r,n.head,e,t,!1)
return 0>e?{from:i,to:n.head}:{from:n.head,to:i}}))})),findPosV:function(e,t,n,r){var i=1,o=r
0>t&&(i=-1,t=-t)
for(var l=0,a=ue(this.doc,e);t>l;++l){var s=tt(this,a,"div")
if(null==o?o=s.left:s.left=o,(a=dn(this,s,i,n)).hitSide)break}return a},moveV:vt((function(e,t){var n=this,r=this.doc,i=[],o=!n.display.shift&&!r.extend&&r.sel.somethingSelected()
if(r.extendSelectionsBy((function(l){if(o)return 0>e?l.from():l.to()
var a=tt(n,l.head,"div")
null!=l.goalColumn&&(a.left=l.goalColumn),i.push(a.left)
var s=dn(n,a,e,t)
return"page"==t&&l==r.sel.primary()&&ln(n,null,et(n,s,"div").top-a.top),s}),Uo),i.length)for(var l=0;l<r.sel.ranges.length;l++)r.sel.ranges[l].goalColumn=i[l]})),findWordAt:function(e){var t=ur(this.doc,e.line).text,n=e.ch,r=e.ch
if(t){var i=this.getHelper(e,"wordChars");(e.xRel<0||r==t.length)&&n?--n:++r
for(var o=t.charAt(n),l=Vr(o,i)?function(e){return Vr(e,i)}:/\s/.test(o)?function(e){return/\s/.test(e)}:function(e){return!/\s/.test(e)&&!Vr(e)};n>0&&l(t.charAt(n-1));)--n
for(;r<t.length&&l(t.charAt(r));)++r}return new le(zi(e.line,n),zi(e.line,r))},toggleOverwrite:function(e){null!=e&&e==this.state.overwrite||((this.state.overwrite=!this.state.overwrite)?nl(this.display.cursorDiv,"CodeMirror-overwrite"):tl(this.display.cursorDiv,"CodeMirror-overwrite"),Wo(this,"overwriteToggle",this,this.state.overwrite))},hasFocus:function(){return this.display.input.getField()==ei()},isReadOnly:function(){return!(!this.options.readOnly&&!this.doc.cantEdit)},scrollTo:vt((function(e,t){null==e&&null==t||sn(this),null!=e&&(this.curOp.scrollLeft=e),null!=t&&(this.curOp.scrollTop=t)})),getScrollInfo:function(){var e=this.display.scroller
return{left:e.scrollLeft,top:e.scrollTop,height:e.scrollHeight-Be(this)-this.display.barHeight,width:e.scrollWidth-Be(this)-this.display.barWidth,clientHeight:Fe(this),clientWidth:_e(this)}},scrollIntoView:vt((function(e,t){if(null==e?(e={from:this.doc.sel.primary().head,to:null},null==t&&(t=this.options.cursorScrollMargin)):"number"==typeof e?e={from:zi(e,0),to:null}:null==e.from&&(e={from:e,to:null}),e.to||(e.to=e.from),e.margin=t||0,null!=e.from.line)sn(this),this.curOp.scrollToPos=e
else{var n=on(this,Math.min(e.from.left,e.to.left),Math.min(e.from.top,e.to.top)-e.margin,Math.max(e.from.right,e.to.right),Math.max(e.from.bottom,e.to.bottom)+e.margin)
this.scrollTo(n.scrollLeft,n.scrollTop)}})),setSize:vt((function(e,t){function n(e){return"number"==typeof e||/^\d+$/.test(String(e))?e+"px":e}var r=this
null!=e&&(r.display.wrapper.style.width=n(e)),null!=t&&(r.display.wrapper.style.height=n(t)),r.options.lineWrapping&&Ve(this)
var i=r.display.viewFrom
r.doc.iter(i,r.display.viewTo,(function(e){if(e.widgets)for(var t=0;t<e.widgets.length;t++)if(e.widgets[t].noHScroll){kt(r,i,"widget")
break}++i})),r.curOp.forceUpdate=!0,Wo(r,"refresh",this)})),operation:function(e){return mt(this,e)},refresh:vt((function(){var e=this.display.cachedTextHeight
wt(this),this.curOp.forceUpdate=!0,Ke(this),this.scrollTo(this.doc.scrollLeft,this.doc.scrollTop),c(this),(null==e||Math.abs(e-lt(this.display))>.5)&&o(this),Wo(this,"refresh",this)})),swapDoc:vt((function(e){var t=this.doc
return t.cm=null,cr(this,e),Ke(this),this.display.input.reset(),this.scrollTo(e.scrollLeft,e.scrollTop),this.curOp.forceScroll=!0,Pr(this,"swapDoc",this,t),t})),getInputField:function(){return this.display.input.getField()},getWrapperElement:function(){return this.display.wrapper},getScrollerElement:function(){return this.display.scroller},getGutterElement:function(){return this.display.gutters}},Br(e)
var ro=e.defaults={},io=e.optionHandlers={},oo=e.Init={toString:function(){return"CodeMirror.Init"}}
pn("value","",(function(e,t){e.setValue(t)}),!0),pn("mode",null,(function(e,t){e.doc.modeOption=t,n(e)}),!0),pn("indentUnit",2,n,!0),pn("indentWithTabs",!1),pn("smartIndent",!0),pn("tabSize",4,(function(e){r(e),Ke(e),wt(e)}),!0),pn("lineSeparator",null,(function(e,t){if(e.doc.lineSep=t,t){var n=[],r=e.doc.first
e.doc.iter((function(e){for(var i=0;;){var o=e.text.indexOf(t,i)
if(-1==o)break
i=o+t.length,n.push(zi(r,o))}r++}))
for(var i=n.length-1;i>=0;i--)rn(e.doc,t,n[i],zi(n[i].line,n[i].ch+t.length))}})),pn("specialChars",/[\u0000-\u001f\u007f\u00ad\u200b-\u200f\u2028\u2029\ufeff]/g,(function(t,n,r){t.state.specialChars=new RegExp(n.source+(n.test("\t")?"":"|\t"),"g"),r!=e.Init&&t.refresh()})),pn("specialCharPlaceholder",(function(e){var t=Zr("span","•","cm-invalidchar")
return t.title="\\u"+e.charCodeAt(0).toString(16),t.setAttribute("aria-label",t.title),t}),(function(e){e.refresh()}),!0),pn("electricChars",!0),pn("inputStyle",Ii?"contenteditable":"textarea",(function(){throw new Error("inputStyle can not (yet) be changed in a running editor")}),!0),pn("rtlMoveVisually",!Di),pn("wholeLineUpdateBefore",!0),pn("theme","default",(function(e){l(e),a(e)}),!0),pn("keyMap","default",(function(t,n,r){var i=gn(n),o=r!=e.Init&&gn(r)
o&&o.detach&&o.detach(t,i),i.attach&&i.attach(t,o||null)})),pn("extraKeys",null),pn("lineWrapping",!1,(function(e){e.options.lineWrapping?(nl(e.display.wrapper,"CodeMirror-wrap"),e.display.sizer.style.minWidth="",e.display.sizerWidth=null):(tl(e.display.wrapper,"CodeMirror-wrap"),h(e)),o(e),wt(e),Ke(e),setTimeout((function(){v(e)}),100)}),!0),pn("gutters",[],(function(e){f(e.options),a(e)}),!0),pn("fixedGutter",!0,(function(e,t){e.display.gutters.style.left=t?S(e.display)+"px":"0",e.refresh()}),!0),pn("coverGutterNextToScrollbar",!1,(function(e){v(e)}),!0),pn("scrollbarStyle","native",(function(e){g(e),v(e),e.display.scrollbars.setScrollTop(e.doc.scrollTop),e.display.scrollbars.setScrollLeft(e.doc.scrollLeft)}),!0),pn("lineNumbers",!1,(function(e){f(e.options),a(e)}),!0),pn("firstLineNumber",1,a,!0),pn("lineNumberFormatter",(function(e){return e}),a,!0),pn("showCursorWhenSelecting",!1,Me,!0),pn("resetSelectionOnContextMenu",!0),pn("lineWiseCopyCut",!0),pn("readOnly",!1,(function(e,t){"nocursor"==t?(Gt(e),e.display.input.blur(),e.display.disabled=!0):e.display.disabled=!1,e.display.input.readOnlyChanged(t)})),pn("disableInput",!1,(function(e,t){t||e.display.input.reset()}),!0),pn("dragDrop",!0,(function(t,n,r){if(!n!=!(r&&r!=e.Init)){var i=t.display.dragFunctions,o=n?Ro:Ho
o(t.display.scroller,"dragstart",i.start),o(t.display.scroller,"dragenter",i.enter),o(t.display.scroller,"dragover",i.over),o(t.display.scroller,"dragleave",i.leave),o(t.display.scroller,"drop",i.drop)}})),pn("allowDropFileTypes",null),pn("cursorBlinkRate",530),pn("cursorScrollMargin",0),pn("cursorHeight",1,Me,!0),pn("singleCursorHeightPerLine",!0,Me,!0),pn("workTime",100),pn("workDelay",100),pn("flattenSpans",!0,r,!0),pn("addModeClass",!1,r,!0),pn("pollInterval",100),pn("undoDepth",200,(function(e,t){e.doc.history.undoDepth=t})),pn("historyEventDelay",1250),pn("viewportMargin",10,(function(e){e.refresh()}),!0),pn("maxHighlightLength",1e4,r,!0),pn("moveInputWithCursor",!0,(function(e,t){t||e.display.input.resetPosition()})),pn("tabindex",null,(function(e,t){e.display.input.getField().tabIndex=t||""})),pn("autofocus",null)
var lo=e.modes={},ao=e.mimeModes={}
e.defineMode=function(t,n){e.defaults.mode||"null"==t||(e.defaults.mode=t),arguments.length>2&&(n.dependencies=Array.prototype.slice.call(arguments,2)),lo[t]=n},e.defineMIME=function(e,t){ao[e]=t},e.resolveMode=function(t){if("string"==typeof t&&ao.hasOwnProperty(t))t=ao[t]
else if(t&&"string"==typeof t.name&&ao.hasOwnProperty(t.name)){var n=ao[t.name]
"string"==typeof n&&(n={name:n}),(t=Gr(n,t)).name=n.name}else if("string"==typeof t&&/^[\w\-]+\/[\w\-]+\+xml$/.test(t))return e.resolveMode("application/xml")
return"string"==typeof t?{name:t}:t||{name:"null"}},e.getMode=function(t,n){n=e.resolveMode(n)
var r=lo[n.name]
if(!r)return e.getMode(t,"text/plain")
var i=r(t,n)
if(so.hasOwnProperty(n.name)){var o=so[n.name]
for(var l in o)o.hasOwnProperty(l)&&(i.hasOwnProperty(l)&&(i["_"+l]=i[l]),i[l]=o[l])}if(i.name=n.name,n.helperType&&(i.helperType=n.helperType),n.modeProps)for(var l in n.modeProps)i[l]=n.modeProps[l]
return i},e.defineMode("null",(function(){return{token:function(e){e.skipToEnd()}}})),e.defineMIME("text/plain","null")
var so=e.modeExtensions={}
e.extendMode=function(e,t){Yr(t,so.hasOwnProperty(e)?so[e]:so[e]={})},e.defineExtension=function(t,n){e.prototype[t]=n},e.defineDocExtension=function(e,t){No.prototype[e]=t},e.defineOption=pn
var co=[]
e.defineInitHook=function(e){co.push(e)}
var uo=e.helpers={}
e.registerHelper=function(t,n,r){uo.hasOwnProperty(t)||(uo[t]=e[t]={_global:[]}),uo[t][n]=r},e.registerGlobalHelper=function(t,n,r,i){e.registerHelper(t,n,i),uo[t]._global.push({pred:r,val:i})}
var ho=e.copyState=function(e,t){if(!0===t)return t
if(e.copyState)return e.copyState(t)
var n={}
for(var r in t){var i=t[r]
i instanceof Array&&(i=i.concat([])),n[r]=i}return n},fo=e.startState=function(e,t,n){return!e.startState||e.startState(t,n)}
e.innerMode=function(e,t){for(;e.innerMode;){var n=e.innerMode(t)
if(!n||n.mode==e)break
t=n.state,e=n.mode}return n||{mode:e,state:t}}
var po=e.commands={selectAll:function(e){e.setSelection(zi(e.firstLine(),0),zi(e.lastLine()),zo)},singleSelection:function(e){e.setSelection(e.getCursor("anchor"),e.getCursor("head"),zo)},killLine:function(e){hn(e,(function(t){if(t.empty()){var n=ur(e.doc,t.head.line).text.length
return t.head.ch==n&&t.head.line<e.lastLine()?{from:t.head,to:zi(t.head.line+1,0)}:{from:t.head,to:zi(t.head.line,n)}}return{from:t.from(),to:t.to()}}))},deleteLine:function(e){hn(e,(function(t){return{from:zi(t.from().line,0),to:ue(e.doc,zi(t.to().line+1,0))}}))},delLineLeft:function(e){hn(e,(function(e){return{from:zi(e.from().line,0),to:e.from()}}))},delWrappedLineLeft:function(e){hn(e,(function(t){var n=e.charCoords(t.head,"div").top+5
return{from:e.coordsChar({left:0,top:n},"div"),to:t.from()}}))},delWrappedLineRight:function(e){hn(e,(function(t){var n=e.charCoords(t.head,"div").top+5,r=e.coordsChar({left:e.display.lineDiv.offsetWidth+100,top:n},"div")
return{from:t.from(),to:r}}))},undo:function(e){e.undo()},redo:function(e){e.redo()},undoSelection:function(e){e.undoSelection()},redoSelection:function(e){e.redoSelection()},goDocStart:function(e){e.extendSelection(zi(e.firstLine(),0))},goDocEnd:function(e){e.extendSelection(zi(e.lastLine()))},goLineStart:function(e){e.extendSelectionsBy((function(t){return ui(e,t.head.line)}),{origin:"+move",bias:1})},goLineStartSmart:function(e){e.extendSelectionsBy((function(t){return hi(e,t.head)}),{origin:"+move",bias:1})},goLineEnd:function(e){e.extendSelectionsBy((function(t){return function(e,t){for(var n,r=ur(e.doc,t);n=Pn(r);)r=n.find(1,!0).line,t=null
var i=vr(r),o=i?i[0].level%2?si(r):ci(r):r.text.length
return zi(null==t?pr(r):t,o)}(e,t.head.line)}),{origin:"+move",bias:-1})},goLineRight:function(e){e.extendSelectionsBy((function(t){var n=e.charCoords(t.head,"div").top+5
return e.coordsChar({left:e.display.lineDiv.offsetWidth+100,top:n},"div")}),Uo)},goLineLeft:function(e){e.extendSelectionsBy((function(t){var n=e.charCoords(t.head,"div").top+5
return e.coordsChar({left:0,top:n},"div")}),Uo)},goLineLeftSmart:function(e){e.extendSelectionsBy((function(t){var n=e.charCoords(t.head,"div").top+5,r=e.coordsChar({left:0,top:n},"div")
return r.ch<e.getLine(r.line).search(/\S/)?hi(e,t.head):r}),Uo)},goLineUp:function(e){e.moveV(-1,"line")},goLineDown:function(e){e.moveV(1,"line")},goPageUp:function(e){e.moveV(-1,"page")},goPageDown:function(e){e.moveV(1,"page")},goCharLeft:function(e){e.moveH(-1,"char")},goCharRight:function(e){e.moveH(1,"char")},goColumnLeft:function(e){e.moveH(-1,"column")},goColumnRight:function(e){e.moveH(1,"column")},goWordLeft:function(e){e.moveH(-1,"word")},goGroupRight:function(e){e.moveH(1,"group")},goGroupLeft:function(e){e.moveH(-1,"group")},goWordRight:function(e){e.moveH(1,"word")},delCharBefore:function(e){e.deleteH(-1,"char")},delCharAfter:function(e){e.deleteH(1,"char")},delWordBefore:function(e){e.deleteH(-1,"word")},delWordAfter:function(e){e.deleteH(1,"word")},delGroupBefore:function(e){e.deleteH(-1,"group")},delGroupAfter:function(e){e.deleteH(1,"group")},indentAuto:function(e){e.indentSelection("smart")},indentMore:function(e){e.indentSelection("add")},indentLess:function(e){e.indentSelection("subtract")},insertTab:function(e){e.replaceSelection("\t")},insertSoftTab:function(e){for(var t=[],n=e.listSelections(),r=e.options.tabSize,i=0;i<n.length;i++){var o=n[i].from(),l=qo(e.getLine(o.line),o.ch,r)
t.push(Fr(r-l%r))}e.replaceSelections(t)},defaultTab:function(e){e.somethingSelected()?e.indentSelection("add"):e.execCommand("insertTab")},transposeChars:function(e){mt(e,(function(){for(var t=e.listSelections(),n=[],r=0;r<t.length;r++){var i=t[r].head,o=ur(e.doc,i.line).text
if(o)if(i.ch==o.length&&(i=new zi(i.line,i.ch-1)),i.ch>0)i=new zi(i.line,i.ch+1),e.replaceRange(o.charAt(i.ch-1)+o.charAt(i.ch-2),zi(i.line,i.ch-2),i,"+transpose")
else if(i.line>e.doc.first){var l=ur(e.doc,i.line-1).text
l&&e.replaceRange(o.charAt(0)+e.doc.lineSeparator()+l.charAt(l.length-1),zi(i.line-1,l.length-1),zi(i.line,1),"+transpose")}n.push(new le(i,i))}e.setSelections(n)}))},newlineAndIndent:function(e){mt(e,(function(){for(var t=e.listSelections().length,n=0;t>n;n++){var r=e.listSelections()[n]
e.replaceRange(e.doc.lineSeparator(),r.anchor,r.head,"+input"),e.indentLine(r.from().line+1,null,!0)}an(e)}))},openLine:function(e){e.replaceSelection("\n","start")},toggleOverwrite:function(e){e.toggleOverwrite()}},mo=e.keyMap={}
mo.basic={Left:"goCharLeft",Right:"goCharRight",Up:"goLineUp",Down:"goLineDown",End:"goLineEnd",Home:"goLineStartSmart",PageUp:"goPageUp",PageDown:"goPageDown",Delete:"delCharAfter",Backspace:"delCharBefore","Shift-Backspace":"delCharBefore",Tab:"defaultTab","Shift-Tab":"indentAuto",Enter:"newlineAndIndent",Insert:"toggleOverwrite",Esc:"singleSelection"},mo.pcDefault={"Ctrl-A":"selectAll","Ctrl-D":"deleteLine","Ctrl-Z":"undo","Shift-Ctrl-Z":"redo","Ctrl-Y":"redo","Ctrl-Home":"goDocStart","Ctrl-End":"goDocEnd","Ctrl-Up":"goLineUp","Ctrl-Down":"goLineDown","Ctrl-Left":"goGroupLeft","Ctrl-Right":"goGroupRight","Alt-Left":"goLineStart","Alt-Right":"goLineEnd","Ctrl-Backspace":"delGroupBefore","Ctrl-Delete":"delGroupAfter","Ctrl-S":"save","Ctrl-F":"find","Ctrl-G":"findNext","Shift-Ctrl-G":"findPrev","Shift-Ctrl-F":"replace","Shift-Ctrl-R":"replaceAll","Ctrl-[":"indentLess","Ctrl-]":"indentMore","Ctrl-U":"undoSelection","Shift-Ctrl-U":"redoSelection","Alt-U":"redoSelection",fallthrough:"basic"},mo.emacsy={"Ctrl-F":"goCharRight","Ctrl-B":"goCharLeft","Ctrl-P":"goLineUp","Ctrl-N":"goLineDown","Alt-F":"goWordRight","Alt-B":"goWordLeft","Ctrl-A":"goLineStart","Ctrl-E":"goLineEnd","Ctrl-V":"goPageDown","Shift-Ctrl-V":"goPageUp","Ctrl-D":"delCharAfter","Ctrl-H":"delCharBefore","Alt-D":"delWordAfter","Alt-Backspace":"delWordBefore","Ctrl-K":"killLine","Ctrl-T":"transposeChars","Ctrl-O":"openLine"},mo.macDefault={"Cmd-A":"selectAll","Cmd-D":"deleteLine","Cmd-Z":"undo","Shift-Cmd-Z":"redo","Cmd-Y":"redo","Cmd-Home":"goDocStart","Cmd-Up":"goDocStart","Cmd-End":"goDocEnd","Cmd-Down":"goDocEnd","Alt-Left":"goGroupLeft","Alt-Right":"goGroupRight","Cmd-Left":"goLineLeft","Cmd-Right":"goLineRight","Alt-Backspace":"delGroupBefore","Ctrl-Alt-Backspace":"delGroupAfter","Alt-Delete":"delGroupAfter","Cmd-S":"save","Cmd-F":"find","Cmd-G":"findNext","Shift-Cmd-G":"findPrev","Cmd-Alt-F":"replace","Shift-Cmd-Alt-F":"replaceAll","Cmd-[":"indentLess","Cmd-]":"indentMore","Cmd-Backspace":"delWrappedLineLeft","Cmd-Delete":"delWrappedLineRight","Cmd-U":"undoSelection","Shift-Cmd-U":"redoSelection","Ctrl-Up":"goDocStart","Ctrl-Down":"goDocEnd",fallthrough:["basic","emacsy"]},mo.default=Pi?mo.macDefault:mo.pcDefault,e.normalizeKeyMap=function(e){var t={}
for(var n in e)if(e.hasOwnProperty(n)){var r=e[n]
if(/^(name|fallthrough|(de|at)tach)$/.test(n))continue
if("..."==r){delete e[n]
continue}for(var i=Ur(n.split(" "),mn),o=0;o<i.length;o++){var l,a
o==i.length-1?(a=i.join(" "),l=r):(a=i.slice(0,o+1).join(" "),l="...")
var s=t[a]
if(s){if(s!=l)throw new Error("Inconsistent bindings for "+a)}else t[a]=l}delete e[n]}for(var c in t)e[c]=t[c]
return e}
var go=e.lookupKey=function(e,t,n,r){var i=(t=gn(t)).call?t.call(e,r):t[e]
if(!1===i)return"nothing"
if("..."===i)return"multi"
if(null!=i&&n(i))return"handled"
if(t.fallthrough){if("[object Array]"!=Object.prototype.toString.call(t.fallthrough))return go(e,t.fallthrough,n,r)
for(var o=0;o<t.fallthrough.length;o++){var l=go(e,t.fallthrough[o],n,r)
if(l)return l}}},vo=e.isModifierKey=function(e){var t="string"==typeof e?e:cl[e.keyCode]
return"Ctrl"==t||"Alt"==t||"Shift"==t||"Mod"==t},yo=e.keyName=function(e,t){if(Mi&&34==e.keyCode&&e.char)return!1
var n=cl[e.keyCode],r=n
return null!=r&&!e.altGraphKey&&(e.altKey&&"Alt"!=n&&(r="Alt-"+r),(Wi?e.metaKey:e.ctrlKey)&&"Ctrl"!=n&&(r="Ctrl-"+r),(Wi?e.ctrlKey:e.metaKey)&&"Cmd"!=n&&(r="Cmd-"+r),!t&&e.shiftKey&&"Shift"!=n&&(r="Shift-"+r),r)}
e.fromTextArea=function(t,n){function r(){t.value=c.getValue()}if((n=n?Yr(n):{}).value=t.value,!n.tabindex&&t.tabIndex&&(n.tabindex=t.tabIndex),!n.placeholder&&t.placeholder&&(n.placeholder=t.placeholder),null==n.autofocus){var i=ei()
n.autofocus=i==t||null!=t.getAttribute("autofocus")&&i==document.body}if(t.form&&(Ro(t.form,"submit",r),!n.leaveSubmitMethodAlone)){var o=t.form,l=o.submit
try{var s=o.submit=function(){r(),o.submit=l,o.submit(),o.submit=s}}catch(a){}}n.finishInit=function(e){e.save=r,e.getTextArea=function(){return t},e.toTextArea=function(){e.toTextArea=isNaN,r(),t.parentNode.removeChild(e.getWrapperElement()),t.style.display="",t.form&&(Ho(t.form,"submit",r),"function"==typeof t.form.submit&&(t.form.submit=l))}},t.style.display="none"
var c=e((function(e){t.parentNode.insertBefore(e,t.nextSibling)}),n)
return c}
var xo=e.StringStream=function(e,t){this.pos=this.start=0,this.string=e,this.tabSize=t||8,this.lastColumnPos=this.lastColumnValue=0,this.lineStart=0}
xo.prototype={eol:function(){return this.pos>=this.string.length},sol:function(){return this.pos==this.lineStart},peek:function(){return this.string.charAt(this.pos)||void 0},next:function(){return this.pos<this.string.length?this.string.charAt(this.pos++):void 0},eat:function(e){var t=this.string.charAt(this.pos)
if("string"==typeof e)var n=t==e
else n=t&&(e.test?e.test(t):e(t))
return n?(++this.pos,t):void 0},eatWhile:function(e){for(var t=this.pos;this.eat(e););return this.pos>t},eatSpace:function(){for(var e=this.pos;/[\s\u00a0]/.test(this.string.charAt(this.pos));)++this.pos
return this.pos>e},skipToEnd:function(){this.pos=this.string.length},skipTo:function(e){var t=this.string.indexOf(e,this.pos)
return t>-1?(this.pos=t,!0):void 0},backUp:function(e){this.pos-=e},column:function(){return this.lastColumnPos<this.start&&(this.lastColumnValue=qo(this.string,this.start,this.tabSize,this.lastColumnPos,this.lastColumnValue),this.lastColumnPos=this.start),this.lastColumnValue-(this.lineStart?qo(this.string,this.lineStart,this.tabSize):0)},indentation:function(){return qo(this.string,null,this.tabSize)-(this.lineStart?qo(this.string,this.lineStart,this.tabSize):0)},match:function(e,t,n){if("string"!=typeof e){var r=this.string.slice(this.pos).match(e)
return r&&r.index>0?null:(r&&!1!==t&&(this.pos+=r[0].length),r)}var i=function(e){return n?e.toLowerCase():e}
return i(this.string.substr(this.pos,e.length))==i(e)?(!1!==t&&(this.pos+=e.length),!0):void 0},current:function(){return this.string.slice(this.start,this.pos)},hideFirstChars:function(e,t){this.lineStart+=e
try{return t()}finally{this.lineStart-=e}}}
var bo=0,wo=e.TextMarker=function(e,t){this.lines=[],this.type=t,this.doc=e,this.id=++bo}
Br(wo),wo.prototype.clear=function(){if(!this.explicitlyCleared){var e=this.doc.cm,t=e&&!e.curOp
if(t&&st(e),Wr(this,"clear")){var n=this.find()
n&&Pr(this,"clear",n.from,n.to)}for(var r=null,i=null,o=0;o<this.lines.length;++o){var l=this.lines[o],a=wn(l.markedSpans,this)
e&&!this.collapsed?kt(e,pr(l),"text"):e&&(null!=a.to&&(i=pr(l)),null!=a.from&&(r=pr(l))),l.markedSpans=kn(l.markedSpans,a),null==a.from&&this.collapsed&&!Bn(this.doc,l)&&e&&dr(l,lt(e.display))}if(e&&this.collapsed&&!e.options.lineWrapping)for(o=0;o<this.lines.length;++o){var s=Dn(this.lines[o]),c=u(s)
c>e.display.maxLineLength&&(e.display.maxLine=s,e.display.maxLineLength=c,e.display.maxLineChanged=!0)}null!=r&&e&&this.collapsed&&wt(e,r,i+1),this.lines.length=0,this.explicitlyCleared=!0,this.atomic&&this.doc.cantEdit&&(this.doc.cantEdit=!1,e&&ke(e.doc)),e&&Pr(e,"markerCleared",e,this),t&&ct(e),this.parent&&this.parent.clear()}},wo.prototype.find=function(e,t){null==e&&"bookmark"==this.type&&(e=1)
for(var n,r,i=0;i<this.lines.length;++i){var o=this.lines[i],l=wn(o.markedSpans,this)
if(null!=l.from&&(n=zi(t?o:pr(o),l.from),-1==e))return n
if(null!=l.to&&(r=zi(t?o:pr(o),l.to),1==e))return r}return n&&{from:n,to:r}},wo.prototype.changed=function(){var e=this.find(-1,!0),t=this,n=this.doc.cm
e&&n&&mt(n,(function(){var r=e.line,i=pr(e.line),o=Ue(n,i)
if(o&&($e(o),n.curOp.selectionChanged=n.curOp.forceUpdate=!0),n.curOp.updateMaxLine=!0,!Bn(t.doc,r)&&null!=t.height){var l=t.height
t.height=null
var a=zn(t)-l
a&&dr(r,r.height+a)}}))},wo.prototype.attachLine=function(e){if(!this.lines.length&&this.doc.cm){var t=this.doc.cm.curOp
t.maybeHiddenMarkers&&-1!=jr(t.maybeHiddenMarkers,this)||(t.maybeUnhiddenMarkers||(t.maybeUnhiddenMarkers=[])).push(this)}this.lines.push(e)},wo.prototype.detachLine=function(e){if(this.lines.splice(jr(this.lines,e),1),!this.lines.length&&this.doc.cm){var t=this.doc.cm.curOp;(t.maybeHiddenMarkers||(t.maybeHiddenMarkers=[])).push(this)}}
bo=0
var ko=e.SharedTextMarker=function(e,t){this.markers=e,this.primary=t
for(var n=0;n<e.length;++n)e[n].parent=this}
Br(ko),ko.prototype.clear=function(){if(!this.explicitlyCleared){this.explicitlyCleared=!0
for(var e=0;e<this.markers.length;++e)this.markers[e].clear()
Pr(this,"clear")}},ko.prototype.find=function(e,t){return this.primary.find(e,t)}
var So=e.LineWidget=function(e,t,n){if(n)for(var r in n)n.hasOwnProperty(r)&&(this[r]=n[r])
this.doc=e,this.node=t}
Br(So),So.prototype.clear=function(){var e=this.doc.cm,t=this.line.widgets,n=this.line,r=pr(n)
if(null!=r&&t){for(var i=0;i<t.length;++i)t[i]==this&&t.splice(i--,1)
t.length||(n.widgets=null)
var o=zn(this)
dr(n,Math.max(0,n.height-o)),e&&mt(e,(function(){Fn(e,n,-o),kt(e,r,"widget")}))}},So.prototype.changed=function(){var e=this.height,t=this.doc.cm,n=this.line
this.height=null
var r=zn(this)-e
r&&(dr(n,n.height+r),t&&mt(t,(function(){t.curOp.forceUpdate=!0,Fn(t,n,r)})))}
var Co=e.Line=function(e,t,n){this.text=e,Mn(this,t),this.height=n?n(this):1}
Br(Co),Co.prototype.lineNo=function(){return pr(this)}
var Lo={},To={}
lr.prototype={chunkSize:function(){return this.lines.length},removeInner:function(e,t){for(var n=e,r=e+t;r>n;++n){var i=this.lines[n]
this.height-=i.height,jn(i),Pr(i,"delete")}this.lines.splice(e,t)},collapse:function(e){e.push.apply(e,this.lines)},insertInner:function(e,t,n){this.height+=n,this.lines=this.lines.slice(0,e).concat(t).concat(this.lines.slice(e))
for(var r=0;r<t.length;++r)t[r].parent=this},iterN:function(e,t,n){for(var r=e+t;r>e;++e)if(n(this.lines[e]))return!0}},ar.prototype={chunkSize:function(){return this.size},removeInner:function(e,t){this.size-=t
for(var n=0;n<this.children.length;++n){var r=this.children[n],i=r.chunkSize()
if(i>e){var o=Math.min(t,i-e),l=r.height
if(r.removeInner(e,o),this.height-=l-r.height,i==o&&(this.children.splice(n--,1),r.parent=null),0==(t-=o))break
e=0}else e-=i}if(this.size-t<25&&(this.children.length>1||!(this.children[0]instanceof lr))){var a=[]
this.collapse(a),this.children=[new lr(a)],this.children[0].parent=this}},collapse:function(e){for(var t=0;t<this.children.length;++t)this.children[t].collapse(e)},insertInner:function(e,t,n){this.size+=t.length,this.height+=n
for(var r=0;r<this.children.length;++r){var i=this.children[r],o=i.chunkSize()
if(o>=e){if(i.insertInner(e,t,n),i.lines&&i.lines.length>50){for(var l=i.lines.length%25+25,a=l;a<i.lines.length;){var s=new lr(i.lines.slice(a,a+=25))
i.height-=s.height,this.children.splice(++r,0,s),s.parent=this}i.lines=i.lines.slice(0,l),this.maybeSpill()}break}e-=o}},maybeSpill:function(){if(!(this.children.length<=10)){var e=this
do{var t=new ar(e.children.splice(e.children.length-5,5))
if(e.parent){e.size-=t.size,e.height-=t.height
var n=jr(e.parent.children,e)
e.parent.children.splice(n+1,0,t)}else{var r=new ar(e.children)
r.parent=e,e.children=[r,t],e=r}t.parent=e.parent}while(e.children.length>10)
e.parent.maybeSpill()}},iterN:function(e,t,n){for(var r=0;r<this.children.length;++r){var i=this.children[r],o=i.chunkSize()
if(o>e){var l=Math.min(t,o-e)
if(i.iterN(e,l,n))return!0
if(0==(t-=l))break
e=0}else e-=o}}}
var Mo=0,No=e.Doc=function(e,t,n,r){if(!(this instanceof No))return new No(e,t,n,r)
null==n&&(n=0),ar.call(this,[new lr([new Co("",null)])]),this.first=n,this.scrollTop=this.scrollLeft=0,this.cantEdit=!1,this.cleanGeneration=1,this.frontier=n
var i=zi(n,0)
this.sel=se(i),this.history=new yr(null),this.id=++Mo,this.modeOption=t,this.lineSep=r,this.extend=!1,"string"==typeof e&&(e=this.splitLines(e)),or(this,{from:i,to:i,text:e}),xe(this,se(i),zo)}
No.prototype=Gr(ar.prototype,{constructor:No,iter:function(e,t,n){n?this.iterN(e-this.first,t-e,n):this.iterN(this.first,this.first+this.size,e)},insert:function(e,t){for(var n=0,r=0;r<t.length;++r)n+=t[r].height
this.insertInner(e-this.first,t,n)},remove:function(e,t){this.removeInner(e-this.first,t)},getValue:function(e){var t=fr(this,this.first,this.first+this.size)
return!1===e?t:t.join(e||this.lineSeparator())},setValue:yt((function(e){var t=zi(this.first,0),n=this.first+this.size-1
Zt(this,{from:t,to:zi(n,ur(this,n).text.length),text:this.splitLines(e),origin:"setValue",full:!0},!0),xe(this,se(t))})),replaceRange:function(e,t,n,r){rn(this,e,t=ue(this,t),n=n?ue(this,n):t,r)},getRange:function(e,t,n){var r=hr(this,ue(this,e),ue(this,t))
return!1===n?r:r.join(n||this.lineSeparator())},getLine:function(e){var t=this.getLineHandle(e)
return t&&t.text},getLineHandle:function(e){return he(this,e)?ur(this,e):void 0},getLineNumber:function(e){return pr(e)},getLineHandleVisualStart:function(e){return"number"==typeof e&&(e=ur(this,e)),Dn(e)},lineCount:function(){return this.size},firstLine:function(){return this.first},lastLine:function(){return this.first+this.size-1},clipPos:function(e){return ue(this,e)},getCursor:function(e){var t=this.sel.primary()
return null==e||"head"==e?t.head:"anchor"==e?t.anchor:"end"==e||"to"==e||!1===e?t.to():t.from()},listSelections:function(){return this.sel.ranges},somethingSelected:function(){return this.sel.somethingSelected()},setCursor:yt((function(e,t,n){ve(this,ue(this,"number"==typeof e?zi(e,t||0):e),null,n)})),setSelection:yt((function(e,t,n){ve(this,ue(this,e),ue(this,t||e),n)})),extendSelection:yt((function(e,t,n){pe(this,ue(this,e),t&&ue(this,t),n)})),extendSelections:yt((function(e,t){me(this,fe(this,e),t)})),extendSelectionsBy:yt((function(e,t){me(this,fe(this,Ur(this.sel.ranges,e)),t)})),setSelections:yt((function(e,t,n){if(e.length){for(var r=0,i=[];r<e.length;r++)i[r]=new le(ue(this,e[r].anchor),ue(this,e[r].head))
null==t&&(t=Math.min(e.length-1,this.sel.primIndex)),xe(this,ae(i,t),n)}})),addSelection:yt((function(e,t,n){var r=this.sel.ranges.slice(0)
r.push(new le(ue(this,e),ue(this,t||e))),xe(this,ae(r,r.length-1),n)})),getSelection:function(e){for(var t,n=this.sel.ranges,r=0;r<n.length;r++){var i=hr(this,n[r].from(),n[r].to())
t=t?t.concat(i):i}return!1===e?t:t.join(e||this.lineSeparator())},getSelections:function(e){for(var t=[],n=this.sel.ranges,r=0;r<n.length;r++){var i=hr(this,n[r].from(),n[r].to())
!1!==e&&(i=i.join(e||this.lineSeparator())),t[r]=i}return t},replaceSelection:function(e,t,n){for(var r=[],i=0;i<this.sel.ranges.length;i++)r[i]=e
this.replaceSelections(r,t,n||"+input")},replaceSelections:yt((function(e,t,n){for(var r=[],i=this.sel,o=0;o<i.ranges.length;o++){var l=i.ranges[o]
r[o]={from:l.from(),to:l.to(),text:this.splitLines(e[o]),origin:n}}var a=t&&"end"!=t&&function(e,t,n){for(var r=[],i=zi(e.first,0),o=i,l=0;l<t.length;l++){var a=t[l],s=Kt(a.from,i,o),c=Kt(no(a),i,o)
if(i=a.to,o=c,"around"==n){var u=e.sel.ranges[l],h=ji(u.head,u.anchor)<0
r[l]=new le(h?c:s,h?s:c)}else r[l]=new le(s,s)}return new oe(r,e.sel.primIndex)}(this,r,t)
for(o=r.length-1;o>=0;o--)Zt(this,r[o])
a?ye(this,a):this.cm&&an(this.cm)})),undo:yt((function(){Qt(this,"undo")})),redo:yt((function(){Qt(this,"redo")})),undoSelection:yt((function(){Qt(this,"undo",!0)})),redoSelection:yt((function(){Qt(this,"redo",!0)})),setExtending:function(e){this.extend=e},getExtending:function(){return this.extend},historySize:function(){for(var e=this.history,t=0,n=0,r=0;r<e.done.length;r++)e.done[r].ranges||++t
for(r=0;r<e.undone.length;r++)e.undone[r].ranges||++n
return{undo:t,redo:n}},clearHistory:function(){this.history=new yr(this.history.maxGeneration)},markClean:function(){this.cleanGeneration=this.changeGeneration(!0)},changeGeneration:function(e){return e&&(this.history.lastOp=this.history.lastSelOp=this.history.lastOrigin=null),this.history.generation},isClean:function(e){return this.history.generation==(e||this.cleanGeneration)},getHistory:function(){return{done:Lr(this.history.done),undone:Lr(this.history.undone)}},setHistory:function(e){var t=this.history=new yr(this.history.maxGeneration)
t.done=Lr(e.done.slice(0),null,!0),t.undone=Lr(e.undone.slice(0),null,!0)},addLineClass:yt((function(e,t,n){return un(this,e,"gutter"==t?"gutter":"class",(function(e){var r="text"==t?"textClass":"background"==t?"bgClass":"gutter"==t?"gutterClass":"wrapClass"
if(e[r]){if(ti(n).test(e[r]))return!1
e[r]+=" "+n}else e[r]=n
return!0}))})),removeLineClass:yt((function(e,t,n){return un(this,e,"gutter"==t?"gutter":"class",(function(e){var r="text"==t?"textClass":"background"==t?"bgClass":"gutter"==t?"gutterClass":"wrapClass",i=e[r]
if(!i)return!1
if(null==n)e[r]=null
else{var o=i.match(ti(n))
if(!o)return!1
var l=o.index+o[0].length
e[r]=i.slice(0,o.index)+(o.index&&l!=i.length?" ":"")+i.slice(l)||null}return!0}))})),addLineWidget:yt((function(e,t,n){return function(e,t,n,r){var i=new So(e,n,r),o=e.cm
return o&&i.noHScroll&&(o.display.alignWidgets=!0),un(e,t,"widget",(function(t){var n=t.widgets||(t.widgets=[])
if(null==i.insertAt?n.push(i):n.splice(Math.min(n.length-1,Math.max(0,i.insertAt)),0,i),i.line=t,o&&!Bn(e,t)){var r=gr(t)<e.scrollTop
dr(t,t.height+zn(i)),r&&ln(o,null,i.height),o.curOp.forceUpdate=!0}return!0})),i}(this,e,t,n)})),removeLineWidget:function(e){e.clear()},markText:function(e,t,n){return vn(this,ue(this,e),ue(this,t),n,n&&n.type||"range")},setBookmark:function(e,t){var n={replacedWith:t&&(null==t.nodeType?t.widget:t),insertLeft:t&&t.insertLeft,clearWhenEmpty:!1,shared:t&&t.shared,handleMouseEvents:t&&t.handleMouseEvents}
return vn(this,e=ue(this,e),e,n,"bookmark")},findMarksAt:function(e){var t=[],n=ur(this,(e=ue(this,e)).line).markedSpans
if(n)for(var r=0;r<n.length;++r){var i=n[r];(null==i.from||i.from<=e.ch)&&(null==i.to||i.to>=e.ch)&&t.push(i.marker.parent||i.marker)}return t},findMarks:function(e,t,n){e=ue(this,e),t=ue(this,t)
var r=[],i=e.line
return this.iter(e.line,t.line+1,(function(o){var l=o.markedSpans
if(l)for(var a=0;a<l.length;a++){var s=l[a]
null!=s.to&&i==e.line&&e.ch>=s.to||null==s.from&&i!=e.line||null!=s.from&&i==t.line&&s.from>=t.ch||n&&!n(s.marker)||r.push(s.marker.parent||s.marker)}++i})),r},getAllMarks:function(){var e=[]
return this.iter((function(t){var n=t.markedSpans
if(n)for(var r=0;r<n.length;++r)null!=n[r].from&&e.push(n[r].marker)})),e},posFromIndex:function(e){var t,n=this.first,r=this.lineSeparator().length
return this.iter((function(i){var o=i.text.length+r
return o>e?(t=e,!0):(e-=o,void++n)})),ue(this,zi(n,t))},indexFromPos:function(e){var t=(e=ue(this,e)).ch
if(e.line<this.first||e.ch<0)return 0
var n=this.lineSeparator().length
return this.iter(this.first,e.line,(function(e){t+=e.text.length+n})),t},copy:function(e){var t=new No(fr(this,this.first,this.first+this.size),this.modeOption,this.first,this.lineSep)
return t.scrollTop=this.scrollTop,t.scrollLeft=this.scrollLeft,t.sel=this.sel,t.extend=!1,e&&(t.history.undoDepth=this.history.undoDepth,t.setHistory(this.getHistory())),t},linkedDoc:function(e){e||(e={})
var t=this.first,n=this.first+this.size
null!=e.from&&e.from>t&&(t=e.from),null!=e.to&&e.to<n&&(n=e.to)
var r=new No(fr(this,t,n),e.mode||this.modeOption,t,this.lineSep)
return e.sharedHist&&(r.history=this.history),(this.linked||(this.linked=[])).push({doc:r,sharedHist:e.sharedHist}),r.linked=[{doc:this,isParent:!0,sharedHist:e.sharedHist}],function(e,t){for(var n=0;n<t.length;n++){var r=t[n],i=r.find(),o=e.clipPos(i.from),l=e.clipPos(i.to)
if(ji(o,l)){var a=vn(e,o,l,r.primary,r.primary.type)
r.markers.push(a),a.parent=r}}}(r,yn(this)),r},unlinkDoc:function(t){if(t instanceof e&&(t=t.doc),this.linked)for(var n=0;n<this.linked.length;++n){if(this.linked[n].doc==t){this.linked.splice(n,1),t.unlinkDoc(this),xn(yn(this))
break}}if(t.history==this.history){var r=[t.id]
sr(t,(function(e){r.push(e.id)}),!0),t.history=new yr(null),t.history.done=Lr(this.history.done,r),t.history.undone=Lr(this.history.undone,r)}},iterLinkedDocs:function(e){sr(this,e)},getMode:function(){return this.mode},getEditor:function(){return this.cm},splitLines:function(e){return this.lineSep?e.split(this.lineSep):ol(e)},lineSeparator:function(){return this.lineSep||"\n"}}),No.prototype.eachLine=No.prototype.iter
var Ao="iter insert remove copy getEditor constructor".split(" ")
for(var Eo in No.prototype)No.prototype.hasOwnProperty(Eo)&&jr(Ao,Eo)<0&&(e.prototype[Eo]=function(e){return function(){return e.apply(this.doc,arguments)}}(No.prototype[Eo]))
Br(No)
var Oo=e.e_preventDefault=function(e){e.preventDefault?e.preventDefault():e.returnValue=!1},Io=e.e_stopPropagation=function(e){e.stopPropagation?e.stopPropagation():e.cancelBubble=!0},Po=e.e_stop=function(e){Oo(e),Io(e)},Ro=e.on=function(e,t,n){if(e.addEventListener)e.addEventListener(t,n,!1)
else if(e.attachEvent)e.attachEvent("on"+t,n)
else{var r=e._handlers||(e._handlers={});(r[t]||(r[t]=[])).push(n)}},Do=[],Ho=e.off=function(e,t,n){if(e.removeEventListener)e.removeEventListener(t,n,!1)
else if(e.detachEvent)e.detachEvent("on"+t,n)
else for(var r=Ir(e,t,!1),i=0;i<r.length;++i)if(r[i]==n){r.splice(i,1)
break}},Wo=e.signal=function(e,t){var n=Ir(e,t,!0)
if(n.length)for(var r=Array.prototype.slice.call(arguments,2),i=0;i<n.length;++i)n[i].apply(null,r)},Bo=null,_o=30,Fo=e.Pass={toString:function(){return"CodeMirror.Pass"}},zo={scroll:!1},jo={origin:"*mouse"},Uo={origin:"+move"}
_r.prototype.set=function(e,t){clearTimeout(this.id),this.id=setTimeout(t,e)}
var qo=e.countColumn=function(e,t,n,r,i){null==t&&(-1==(t=e.search(/[^\s\u00a0]/))&&(t=e.length))
for(var o=r||0,l=i||0;;){var a=e.indexOf("\t",o)
if(0>a||a>=t)return l+(t-o)
l+=a-o,l+=n-l%n,o=a+1}},Go=e.findColumn=function(e,t,n){for(var r=0,i=0;;){var o=e.indexOf("\t",r);-1==o&&(o=e.length)
var l=o-r
if(o==e.length||i+l>=t)return r+Math.min(l,t-i)
if(i+=o-r,r=o+1,(i+=n-i%n)>=t)return r}},Yo=[""],$o=function(e){e.select()}
Oi?$o=function(e){e.selectionStart=0,e.selectionEnd=e.value.length}:ki&&($o=function(e){try{e.select()}catch(t){}})
var Vo,Ko=/[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/,Xo=e.isWordChar=function(e){return/\w/.test(e)||e>""&&(e.toUpperCase()!=e.toLowerCase()||Ko.test(e))},Zo=/[\u0300-\u036f\u0483-\u0489\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u065e\u0670\u06d6-\u06dc\u06de-\u06e4\u06e7\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0900-\u0902\u093c\u0941-\u0948\u094d\u0951-\u0955\u0962\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2\u09e3\u0a01\u0a02\u0a3c\u0a41\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a70\u0a71\u0a75\u0a81\u0a82\u0abc\u0ac1-\u0ac5\u0ac7\u0ac8\u0acd\u0ae2\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0f18\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86\u0f87\u0f90-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039\u103a\u103d\u103e\u1058\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085\u1086\u108d\u109d\u135f\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193b\u1a17\u1a18\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80\u1b81\u1ba2-\u1ba5\u1ba8\u1ba9\u1c2c-\u1c33\u1c36\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1dc0-\u1de6\u1dfd-\u1dff\u200c\u200d\u20d0-\u20f0\u2cef-\u2cf1\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua66f-\ua672\ua67c\ua67d\ua6f0\ua6f1\ua802\ua806\ua80b\ua825\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\uaa29-\uaa2e\uaa31\uaa32\uaa35\uaa36\uaa43\uaa4c\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uabe5\uabe8\uabed\udc00-\udfff\ufb1e\ufe00-\ufe0f\ufe20-\ufe26\uff9e\uff9f]/
Vo=document.createRange?function(e,t,n,r){var i=document.createRange()
return i.setEnd(r||e,n),i.setStart(e,t),i}:function(e,t,n){var r=document.body.createTextRange()
try{r.moveToElementText(e.parentNode)}catch(i){return r}return r.collapse(!0),r.moveEnd("character",n),r.moveStart("character",t),r}
var Jo=e.contains=function(e,t){if(3==t.nodeType&&(t=t.parentNode),e.contains)return e.contains(t)
do{if(11==t.nodeType&&(t=t.host),t==e)return!0}while(t=t.parentNode)}
ki&&11>Si&&(ei=function(){try{return document.activeElement}catch(e){return document.body}})
var Qo,el,tl=e.rmClass=function(e,t){var n=e.className,r=ti(t).exec(n)
if(r){var i=n.slice(r.index+r[0].length)
e.className=n.slice(0,r.index)+(i?r[1]+i:"")}},nl=e.addClass=function(e,t){var n=e.className
ti(t).test(n)||(e.className+=(n?" ":"")+t)},rl=!1,il=function(){if(ki&&9>Si)return!1
var e=Zr("div")
return"draggable"in e||"dragDrop"in e}(),ol=e.splitLines=3!="\n\nb".split(/\n/).length?function(e){for(var t=0,n=[],r=e.length;r>=t;){var i=e.indexOf("\n",t);-1==i&&(i=e.length)
var o=e.slice(t,"\r"==e.charAt(i-1)?i-1:i),l=o.indexOf("\r");-1!=l?(n.push(o.slice(0,l)),t+=l+1):(n.push(o),t=i+1)}return n}:function(e){return e.split(/\r\n?|\n/)},ll=window.getSelection?function(e){try{return e.selectionStart!=e.selectionEnd}catch(t){return!1}}:function(e){try{var t=e.ownerDocument.selection.createRange()}catch(n){}return!(!t||t.parentElement()!=e)&&0!=t.compareEndPoints("StartToEnd",t)},al=function(){var e=Zr("div")
return"oncopy"in e||(e.setAttribute("oncopy","return;"),"function"==typeof e.oncopy)}(),sl=null,cl=e.keyNames={3:"Enter",8:"Backspace",9:"Tab",13:"Enter",16:"Shift",17:"Ctrl",18:"Alt",19:"Pause",20:"CapsLock",27:"Esc",32:"Space",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"Left",38:"Up",39:"Right",40:"Down",44:"PrintScrn",45:"Insert",46:"Delete",59:";",61:"=",91:"Mod",92:"Mod",93:"Mod",106:"*",107:"=",109:"-",110:".",111:"/",127:"Delete",173:"-",186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'",63232:"Up",63233:"Down",63234:"Left",63235:"Right",63272:"Delete",63273:"Home",63275:"End",63276:"PageUp",63277:"PageDown",63302:"Insert"}
!function(){for(var e=0;10>e;e++)cl[e+48]=cl[e+96]=String(e)
for(e=65;90>=e;e++)cl[e]=String.fromCharCode(e)
for(e=1;12>=e;e++)cl[e+111]=cl[e+63235]="F"+e}()
var ul,hl=function(){function e(e){return 247>=e?n.charAt(e):e>=1424&&1524>=e?"R":e>=1536&&1773>=e?r.charAt(e-1536):e>=1774&&2220>=e?"r":e>=8192&&8203>=e?"w":8204==e?"b":"L"}function t(e,t,n){this.level=e,this.from=t,this.to=n}var n="bbbbbbbbbtstwsbbbbbbbbbbbbbbssstwNN%%%NNNNNN,N,N1111111111NNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNbbbbbbsbbbbbbbbbbbbbbbbbbbbbbbbbb,N%%%%NNNNLNNNNN%%11NLNNN1LNNNNNLLLLLLLLLLLLLLLLLLLLLLLNLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLN",r="rrrrrrrrrrrr,rNNmmmmmmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmrrrrrrrnnnnnnnnnn%nnrrrmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmmmmmmNmmmm",i=/[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/,o=/[stwN]/,l=/[LRr]/,a=/[Lb1n]/,s=/[1n]/,c="L"
return function(n){if(!i.test(n))return!1
for(var r=n.length,u=[],h=0;r>h;++h)u.push(v=e(n.charCodeAt(h)))
h=0
for(var f=c;r>h;++h){"m"==(v=u[h])?u[h]=f:f=v}h=0
for(var d=c;r>h;++h){"1"==(v=u[h])&&"r"==d?u[h]="n":l.test(v)&&(d=v,"r"==v&&(u[h]="R"))}for(h=1,f=u[0];r-1>h;++h){"+"==(v=u[h])&&"1"==f&&"1"==u[h+1]?u[h]="1":","!=v||f!=u[h+1]||"1"!=f&&"n"!=f||(u[h]=f),f=v}for(h=0;r>h;++h){if(","==(v=u[h]))u[h]="N"
else if("%"==v){for(var p=h+1;r>p&&"%"==u[p];++p);for(var m=h&&"!"==u[h-1]||r>p&&"1"==u[p]?"1":"N",g=h;p>g;++g)u[g]=m
h=p-1}}for(h=0,d=c;r>h;++h){var v=u[h]
"L"==d&&"1"==v?u[h]="L":l.test(v)&&(d=v)}for(h=0;r>h;++h)if(o.test(u[h])){for(p=h+1;r>p&&o.test(u[p]);++p);var y="L"==(h?u[h-1]:c),x="L"==(r>p?u[p]:c)
for(m=y||x?"L":"R",g=h;p>g;++g)u[g]=m
h=p-1}var b,w=[]
for(h=0;r>h;)if(a.test(u[h])){var k=h
for(++h;r>h&&a.test(u[h]);++h);w.push(new t(0,k,h))}else{var S=h,C=w.length
for(++h;r>h&&"L"!=u[h];++h);for(g=S;h>g;)if(s.test(u[g])){g>S&&w.splice(C,0,new t(1,S,g))
var L=g
for(++g;h>g&&s.test(u[g]);++g);w.splice(C,0,new t(2,L,g)),S=g}else++g
h>S&&w.splice(C,0,new t(1,S,h))}return 1==w[0].level&&(b=n.match(/^\s+/))&&(w[0].from=b[0].length,w.unshift(new t(0,0,b[0].length))),1==zr(w).level&&(b=n.match(/\s+$/))&&(zr(w).to-=b[0].length,w.push(new t(0,r-b[0].length,r))),2==w[0].level&&w.unshift(new t(1,w[0].to,w[0].to)),w[0].level!=zr(w).level&&w.push(new t(w[0].level,r,r)),w}}()
return e.version="5.15.2",e}))},{}],11:[function(e,t,n){var r
r=function(e){"use strict"
var t=/^((?:(?:aaas?|about|acap|adiumxtra|af[ps]|aim|apt|attachment|aw|beshare|bitcoin|bolo|callto|cap|chrome(?:-extension)?|cid|coap|com-eventbrite-attendee|content|crid|cvs|data|dav|dict|dlna-(?:playcontainer|playsingle)|dns|doi|dtn|dvb|ed2k|facetime|feed|file|finger|fish|ftp|geo|gg|git|gizmoproject|go|gopher|gtalk|h323|hcp|https?|iax|icap|icon|im|imap|info|ipn|ipp|irc[6s]?|iris(?:\.beep|\.lwz|\.xpc|\.xpcs)?|itms|jar|javascript|jms|keyparc|lastfm|ldaps?|magnet|mailto|maps|market|message|mid|mms|ms-help|msnim|msrps?|mtqp|mumble|mupdate|mvn|news|nfs|nih?|nntp|notes|oid|opaquelocktoken|palm|paparazzi|platform|pop|pres|proxy|psyc|query|res(?:ource)?|rmi|rsync|rtmp|rtsp|secondlife|service|session|sftp|sgn|shttp|sieve|sips?|skype|sm[bs]|snmp|soap\.beeps?|soldat|spotify|ssh|steam|svn|tag|teamspeak|tel(?:net)?|tftp|things|thismessage|tip|tn3270|tv|udp|unreal|urn|ut2004|vemmi|ventrilo|view-source|webcal|wss?|wtai|wyciwyg|xcon(?:-userid)?|xfire|xmlrpc\.beeps?|xmpp|xri|ymsgr|z39\.50[rs]?):(?:\/{1,3}|[a-z0-9%])|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]|\([^\s()<>]*\))+(?:\([^\s()<>]*\)|[^\s`*!()\[\]{};:'".,<>?«»“”‘’]))/i
e.defineMode("gfm",(function(n,r){var i=0,o={startState:function(){return{code:!1,codeBlock:!1,ateSpace:!1}},copyState:function(e){return{code:e.code,codeBlock:e.codeBlock,ateSpace:e.ateSpace}},token:function(e,n){if(n.combineTokens=null,n.codeBlock)return e.match(/^```+/)?(n.codeBlock=!1,null):(e.skipToEnd(),null)
if(e.sol()&&(n.code=!1),e.sol()&&e.match(/^```+/))return e.skipToEnd(),n.codeBlock=!0,null
if("`"===e.peek()){e.next()
var o=e.pos
e.eatWhile("`")
var l=1+e.pos-o
return n.code?l===i&&(n.code=!1):(i=l,n.code=!0),null}if(n.code)return e.next(),null
if(e.eatSpace())return n.ateSpace=!0,null
if((e.sol()||n.ateSpace)&&(n.ateSpace=!1,!1!==r.gitHubSpice)){if(e.match(/^(?:[a-zA-Z0-9\-_]+\/)?(?:[a-zA-Z0-9\-_]+@)?(?:[a-f0-9]{7,40}\b)/))return n.combineTokens=!0,"link"
if(e.match(/^(?:[a-zA-Z0-9\-_]+\/)?(?:[a-zA-Z0-9\-_]+)?#[0-9]+\b/))return n.combineTokens=!0,"link"}return e.match(t)&&"]("!=e.string.slice(e.start-2,e.start)&&(0==e.start||/\W/.test(e.string.charAt(e.start-1)))?(n.combineTokens=!0,"link"):(e.next(),null)},blankLine:function(e){return e.code=!1,null}},l={underscoresBreakWords:!1,taskLists:!0,fencedCodeBlocks:"```",strikethrough:!0}
for(var a in r)l[a]=r[a]
return l.name="markdown",e.overlayMode(e.getMode(n,l),o)}),"markdown"),e.defineMIME("text/x-gfm","gfm")},"object"==typeof n&&"object"==typeof t?r(e("../../lib/codemirror"),e("../markdown/markdown"),e("../../addon/mode/overlay")):r(CodeMirror)},{"../../addon/mode/overlay":8,"../../lib/codemirror":10,"../markdown/markdown":12}],12:[function(e,t,n){var r
r=function(e){"use strict"
e.defineMode("markdown",(function(t,n){function r(n){if(e.findModeByName){var r=e.findModeByName(n)
r&&(n=r.mime||r.mimes[0])}var i=e.getMode(t,n)
return"null"==i.name?null:i}function i(e,t,n){return t.f=t.inline=n,n(e,t)}function o(e){return!e||!/\S/.test(e.string)}function l(e){return e.linkTitle=!1,e.em=!1,e.strong=!1,e.strikethrough=!1,e.quote=0,e.indentedCode=!1,b&&e.f==s&&(e.f=d,e.block=a),e.trailingSpace=0,e.trailingSpaceNewLine=!1,e.prevLine=e.thisLine,e.thisLine=null,null}function a(t,l){var a=t.sol(),s=!1!==l.list,u=l.indentedCode
l.indentedCode=!1,s&&(l.indentationDiff>=0?(l.indentationDiff<4&&(l.indentation-=l.indentationDiff),l.list=null):l.indentation>0?l.list=null:l.list=!1)
var f=null
if(l.indentationDiff>=4)return t.skipToEnd(),u||o(l.prevLine)?(l.indentation-=4,l.indentedCode=!0,w.code):null
if(t.eatSpace())return null
if((f=t.match(M))&&f[1].length<=6)return l.header=f[1].length,n.highlightFormatting&&(l.formatting="header"),l.f=l.inline,h(l)
if(!(o(l.prevLine)||l.quote||s||u)&&(f=t.match(N)))return l.header="="==f[0].charAt(0)?1:2,n.highlightFormatting&&(l.formatting="header"),l.f=l.inline,h(l)
if(t.eat(">"))return l.quote=a?1:l.quote+1,n.highlightFormatting&&(l.formatting="quote"),t.eatSpace(),h(l)
if("["===t.peek())return i(t,l,g)
if(t.match(S,!0))return l.hr=!0,w.hr
if((o(l.prevLine)||s)&&(t.match(C,!1)||t.match(L,!1))){var d=null
for(t.match(C,!0)?d="ul":(t.match(L,!0),d="ol"),l.indentation=t.column()+t.current().length,l.list=!0;l.listStack&&t.column()<l.listStack[l.listStack.length-1];)l.listStack.pop()
return l.listStack.push(l.indentation),n.taskLists&&t.match(T,!1)&&(l.taskList=!0),l.f=l.inline,n.highlightFormatting&&(l.formatting=["list","list-"+d]),h(l)}return n.fencedCodeBlocks&&(f=t.match(E,!0))?(l.fencedChars=f[1],l.localMode=r(f[2]),l.localMode&&(l.localState=e.startState(l.localMode)),l.f=l.block=c,n.highlightFormatting&&(l.formatting="code-block"),l.code=-1,h(l)):i(t,l,l.inline)}function s(t,n){var r=x.token(t,n.htmlState)
if(!b){var i=e.innerMode(x,n.htmlState);("xml"==i.mode.name&&null===i.state.tagStart&&!i.state.context&&i.state.tokenize.isInText||n.md_inside&&t.current().indexOf(">")>-1)&&(n.f=d,n.block=a,n.htmlState=null)}return r}function c(e,t){return t.fencedChars&&e.match(t.fencedChars,!1)?(t.localMode=t.localState=null,t.f=t.block=u,null):t.localMode?t.localMode.token(e,t.localState):(e.skipToEnd(),w.code)}function u(e,t){e.match(t.fencedChars),t.block=a,t.f=d,t.fencedChars=null,n.highlightFormatting&&(t.formatting="code-block"),t.code=1
var r=h(t)
return t.code=0,r}function h(e){var t=[]
if(e.formatting){t.push(w.formatting),"string"==typeof e.formatting&&(e.formatting=[e.formatting])
for(var r=0;r<e.formatting.length;r++)t.push(w.formatting+"-"+e.formatting[r]),"header"===e.formatting[r]&&t.push(w.formatting+"-"+e.formatting[r]+"-"+e.header),"quote"===e.formatting[r]&&(!n.maxBlockquoteDepth||n.maxBlockquoteDepth>=e.quote?t.push(w.formatting+"-"+e.formatting[r]+"-"+e.quote):t.push("error"))}if(e.taskOpen)return t.push("meta"),t.length?t.join(" "):null
if(e.taskClosed)return t.push("property"),t.length?t.join(" "):null
if(e.linkHref?t.push(w.linkHref,"url"):(e.strong&&t.push(w.strong),e.em&&t.push(w.em),e.strikethrough&&t.push(w.strikethrough),e.linkText&&t.push(w.linkText),e.code&&t.push(w.code)),e.header&&t.push(w.header,w.header+"-"+e.header),e.quote&&(t.push(w.quote),!n.maxBlockquoteDepth||n.maxBlockquoteDepth>=e.quote?t.push(w.quote+"-"+e.quote):t.push(w.quote+"-"+n.maxBlockquoteDepth)),!1!==e.list){var i=(e.listStack.length-1)%3
i?1===i?t.push(w.list2):t.push(w.list3):t.push(w.list1)}return e.trailingSpaceNewLine?t.push("trailing-space-new-line"):e.trailingSpace&&t.push("trailing-space-"+(e.trailingSpace%2?"a":"b")),t.length?t.join(" "):null}function f(e,t){return e.match(A,!0)?h(t):void 0}function d(t,r){var i=r.text(t,r)
if(void 0!==i)return i
if(r.list)return r.list=null,h(r)
if(r.taskList)return"x"!==t.match(T,!0)[1]?r.taskOpen=!0:r.taskClosed=!0,n.highlightFormatting&&(r.formatting="task"),r.taskList=!1,h(r)
if(r.taskOpen=!1,r.taskClosed=!1,r.header&&t.match(/^#+$/,!0))return n.highlightFormatting&&(r.formatting="header"),h(r)
var o=t.sol(),l=t.next()
if(r.linkTitle){r.linkTitle=!1
var a=l
"("===l&&(a=")")
var c="^\\s*(?:[^"+(a=(a+"").replace(/([.?*+^$[\]\\(){}|-])/g,"\\$1"))+"\\\\]+|\\\\\\\\|\\\\.)"+a
if(t.match(new RegExp(c),!0))return w.linkHref}if("`"===l){var u=r.formatting
n.highlightFormatting&&(r.formatting="code"),t.eatWhile("`")
var f=t.current().length
if(0==r.code)return r.code=f,h(r)
if(f==r.code){var d=h(r)
return r.code=0,d}return r.formatting=u,h(r)}if(r.code)return h(r)
if("\\"===l&&(t.next(),n.highlightFormatting)){var g=h(r),v=w.formatting+"-escape"
return g?g+" "+v:v}if("!"===l&&t.match(/\[[^\]]*\] ?(?:\(|\[)/,!1))return t.match(/\[[^\]]*\]/),r.inline=r.f=m,w.image
if("["===l&&t.match(/[^\]]*\](\(.*\)| ?\[.*?\])/,!1))return r.linkText=!0,n.highlightFormatting&&(r.formatting="link"),h(r)
if("]"===l&&r.linkText&&t.match(/\(.*?\)| ?\[.*?\]/,!1)){n.highlightFormatting&&(r.formatting="link")
var g=h(r)
return r.linkText=!1,r.inline=r.f=m,g}if("<"===l&&t.match(/^(https?|ftps?):\/\/(?:[^\\>]|\\.)+>/,!1))return r.f=r.inline=p,n.highlightFormatting&&(r.formatting="link"),(g=h(r))?g+=" ":g="",g+w.linkInline
if("<"===l&&t.match(/^[^> \\]+@(?:[^\\>]|\\.)+>/,!1))return r.f=r.inline=p,n.highlightFormatting&&(r.formatting="link"),(g=h(r))?g+=" ":g="",g+w.linkEmail
if("<"===l&&t.match(/^(!--|\w)/,!1)){var y=t.string.indexOf(">",t.pos)
if(-1!=y){var b=t.string.substring(t.start,y);/markdown\s*=\s*('|"){0,1}1('|"){0,1}/.test(b)&&(r.md_inside=!0)}return t.backUp(1),r.htmlState=e.startState(x),function(e,t,n){return t.f=t.block=n,n(e,t)}(t,r,s)}if("<"===l&&t.match(/^\/\w*?>/))return r.md_inside=!1,"tag"
var k=!1
if(!n.underscoresBreakWords&&"_"===l&&"_"!==t.peek()&&t.match(/(\w)/,!1)){var S=t.pos-2
if(S>=0){var C=t.string.charAt(S)
"_"!==C&&C.match(/(\w)/,!1)&&(k=!0)}}if("*"===l||"_"===l&&!k)if(o&&" "===t.peek());else{if(r.strong===l&&t.eat(l))return n.highlightFormatting&&(r.formatting="strong"),d=h(r),r.strong=!1,d
if(!r.strong&&t.eat(l))return r.strong=l,n.highlightFormatting&&(r.formatting="strong"),h(r)
if(r.em===l)return n.highlightFormatting&&(r.formatting="em"),d=h(r),r.em=!1,d
if(!r.em)return r.em=l,n.highlightFormatting&&(r.formatting="em"),h(r)}else if(" "===l&&(t.eat("*")||t.eat("_"))){if(" "===t.peek())return h(r)
t.backUp(1)}if(n.strikethrough)if("~"===l&&t.eatWhile(l)){if(r.strikethrough)return n.highlightFormatting&&(r.formatting="strikethrough"),d=h(r),r.strikethrough=!1,d
if(t.match(/^[^\s]/,!1))return r.strikethrough=!0,n.highlightFormatting&&(r.formatting="strikethrough"),h(r)}else if(" "===l&&t.match(/^~~/,!0)){if(" "===t.peek())return h(r)
t.backUp(2)}return" "===l&&(t.match(/ +$/,!1)?r.trailingSpace++:r.trailingSpace&&(r.trailingSpaceNewLine=!0)),h(r)}function p(e,t){if(">"===e.next()){t.f=t.inline=d,n.highlightFormatting&&(t.formatting="link")
var r=h(t)
return r?r+=" ":r="",r+w.linkInline}return e.match(/^[^>]+/,!0),w.linkInline}function m(e,t){if(e.eatSpace())return null
var r=e.next()
return"("===r||"["===r?(t.f=t.inline=function(e){return function(t,r){if(t.next()===e){r.f=r.inline=d,n.highlightFormatting&&(r.formatting="link-string")
var i=h(r)
return r.linkHref=!1,i}return t.match(O[e]),r.linkHref=!0,h(r)}}("("===r?")":"]"),n.highlightFormatting&&(t.formatting="link-string"),t.linkHref=!0,h(t)):"error"}function g(e,t){return e.match(/^([^\]\\]|\\.)*\]:/,!1)?(t.f=v,e.next(),n.highlightFormatting&&(t.formatting="link"),t.linkText=!0,h(t)):i(e,t,d)}function v(e,t){if(e.match(/^\]:/,!0)){t.f=t.inline=y,n.highlightFormatting&&(t.formatting="link")
var r=h(t)
return t.linkText=!1,r}return e.match(/^([^\]\\]|\\.)+/,!0),w.linkText}function y(e,t){return e.eatSpace()?null:(e.match(/^[^\s]+/,!0),void 0===e.peek()?t.linkTitle=!0:e.match(/^(?:\s+(?:"(?:[^"\\]|\\\\|\\.)+"|'(?:[^'\\]|\\\\|\\.)+'|\((?:[^)\\]|\\\\|\\.)+\)))?/,!0),t.f=t.inline=d,w.linkHref+" url")}var x=e.getMode(t,"text/html"),b="null"==x.name
void 0===n.highlightFormatting&&(n.highlightFormatting=!1),void 0===n.maxBlockquoteDepth&&(n.maxBlockquoteDepth=0),void 0===n.underscoresBreakWords&&(n.underscoresBreakWords=!0),void 0===n.taskLists&&(n.taskLists=!1),void 0===n.strikethrough&&(n.strikethrough=!1),void 0===n.tokenTypeOverrides&&(n.tokenTypeOverrides={})
var w={header:"header",code:"comment",quote:"quote",list1:"variable-2",list2:"variable-3",list3:"keyword",hr:"hr",image:"tag",formatting:"formatting",linkInline:"link",linkEmail:"link",linkText:"link",linkHref:"string",em:"em",strong:"strong",strikethrough:"strikethrough"}
for(var k in w)w.hasOwnProperty(k)&&n.tokenTypeOverrides[k]&&(w[k]=n.tokenTypeOverrides[k])
var S=/^([*\-_])(?:\s*\1){2,}\s*$/,C=/^[*\-+]\s+/,L=/^[0-9]+([.)])\s+/,T=/^\[(x| )\](?=\s)/,M=n.allowAtxHeaderWithoutSpace?/^(#+)/:/^(#+)(?: |$)/,N=/^ *(?:\={1,}|-{1,})\s*$/,A=/^[^#!\[\]*_\\<>` "'(~]+/,E=new RegExp("^("+(!0===n.fencedCodeBlocks?"~~~+|```+":n.fencedCodeBlocks)+")[ \\t]*([\\w+#-]*)"),O={")":/^(?:[^\\\(\)]|\\.|\((?:[^\\\(\)]|\\.)*\))*?(?=\))/,"]":/^(?:[^\\\[\]]|\\.|\[(?:[^\\\[\\]]|\\.)*\])*?(?=\])/},I={startState:function(){return{f:a,prevLine:null,thisLine:null,block:a,htmlState:null,indentation:0,inline:d,text:f,formatting:!1,linkText:!1,linkHref:!1,linkTitle:!1,code:0,em:!1,strong:!1,header:0,hr:!1,taskList:!1,list:!1,listStack:[],quote:0,trailingSpace:0,trailingSpaceNewLine:!1,strikethrough:!1,fencedChars:null}},copyState:function(t){return{f:t.f,prevLine:t.prevLine,thisLine:t.thisLine,block:t.block,htmlState:t.htmlState&&e.copyState(x,t.htmlState),indentation:t.indentation,localMode:t.localMode,localState:t.localMode?e.copyState(t.localMode,t.localState):null,inline:t.inline,text:t.text,formatting:!1,linkTitle:t.linkTitle,code:t.code,em:t.em,strong:t.strong,strikethrough:t.strikethrough,header:t.header,hr:t.hr,taskList:t.taskList,list:t.list,listStack:t.listStack.slice(0),quote:t.quote,indentedCode:t.indentedCode,trailingSpace:t.trailingSpace,trailingSpaceNewLine:t.trailingSpaceNewLine,md_inside:t.md_inside,fencedChars:t.fencedChars}},token:function(e,t){if(t.formatting=!1,e!=t.thisLine){var n=t.header||t.hr
if(t.header=0,t.hr=!1,e.match(/^\s*$/,!0)||n){if(l(t),!n)return null
t.prevLine=null}t.prevLine=t.thisLine,t.thisLine=e,t.taskList=!1,t.trailingSpace=0,t.trailingSpaceNewLine=!1,t.f=t.block
var r=e.match(/^\s*/,!0)[0].replace(/\t/g,"    ").length
if(t.indentationDiff=Math.min(r-t.indentation,4),t.indentation=t.indentation+t.indentationDiff,r>0)return null}return t.f(e,t)},innerMode:function(e){return e.block==s?{state:e.htmlState,mode:x}:e.localState?{state:e.localState,mode:e.localMode}:{state:e,mode:I}},blankLine:l,getType:h,fold:"markdown"}
return I}),"xml"),e.defineMIME("text/x-markdown","markdown")},"object"==typeof n&&"object"==typeof t?r(e("../../lib/codemirror"),e("../xml/xml"),e("../meta")):r(CodeMirror)},{"../../lib/codemirror":10,"../meta":13,"../xml/xml":14}],13:[function(e,t,n){var r
r=function(e){"use strict"
e.modeInfo=[{name:"APL",mime:"text/apl",mode:"apl",ext:["dyalog","apl"]},{name:"PGP",mimes:["application/pgp","application/pgp-keys","application/pgp-signature"],mode:"asciiarmor",ext:["pgp"]},{name:"ASN.1",mime:"text/x-ttcn-asn",mode:"asn.1",ext:["asn","asn1"]},{name:"Asterisk",mime:"text/x-asterisk",mode:"asterisk",file:/^extensions\.conf$/i},{name:"Brainfuck",mime:"text/x-brainfuck",mode:"brainfuck",ext:["b","bf"]},{name:"C",mime:"text/x-csrc",mode:"clike",ext:["c","h"]},{name:"C++",mime:"text/x-c++src",mode:"clike",ext:["cpp","c++","cc","cxx","hpp","h++","hh","hxx"],alias:["cpp"]},{name:"Cobol",mime:"text/x-cobol",mode:"cobol",ext:["cob","cpy"]},{name:"C#",mime:"text/x-csharp",mode:"clike",ext:["cs"],alias:["csharp"]},{name:"Clojure",mime:"text/x-clojure",mode:"clojure",ext:["clj","cljc","cljx"]},{name:"ClojureScript",mime:"text/x-clojurescript",mode:"clojure",ext:["cljs"]},{name:"Closure Stylesheets (GSS)",mime:"text/x-gss",mode:"css",ext:["gss"]},{name:"CMake",mime:"text/x-cmake",mode:"cmake",ext:["cmake","cmake.in"],file:/^CMakeLists.txt$/},{name:"CoffeeScript",mime:"text/x-coffeescript",mode:"coffeescript",ext:["coffee"],alias:["coffee","coffee-script"]},{name:"Common Lisp",mime:"text/x-common-lisp",mode:"commonlisp",ext:["cl","lisp","el"],alias:["lisp"]},{name:"Cypher",mime:"application/x-cypher-query",mode:"cypher",ext:["cyp","cypher"]},{name:"Cython",mime:"text/x-cython",mode:"python",ext:["pyx","pxd","pxi"]},{name:"Crystal",mime:"text/x-crystal",mode:"crystal",ext:["cr"]},{name:"CSS",mime:"text/css",mode:"css",ext:["css"]},{name:"CQL",mime:"text/x-cassandra",mode:"sql",ext:["cql"]},{name:"D",mime:"text/x-d",mode:"d",ext:["d"]},{name:"Dart",mimes:["application/dart","text/x-dart"],mode:"dart",ext:["dart"]},{name:"diff",mime:"text/x-diff",mode:"diff",ext:["diff","patch"]},{name:"Django",mime:"text/x-django",mode:"django"},{name:"Dockerfile",mime:"text/x-dockerfile",mode:"dockerfile",file:/^Dockerfile$/},{name:"DTD",mime:"application/xml-dtd",mode:"dtd",ext:["dtd"]},{name:"Dylan",mime:"text/x-dylan",mode:"dylan",ext:["dylan","dyl","intr"]},{name:"EBNF",mime:"text/x-ebnf",mode:"ebnf"},{name:"ECL",mime:"text/x-ecl",mode:"ecl",ext:["ecl"]},{name:"edn",mime:"application/edn",mode:"clojure",ext:["edn"]},{name:"Eiffel",mime:"text/x-eiffel",mode:"eiffel",ext:["e"]},{name:"Elm",mime:"text/x-elm",mode:"elm",ext:["elm"]},{name:"Embedded Javascript",mime:"application/x-ejs",mode:"htmlembedded",ext:["ejs"]},{name:"Embedded Ruby",mime:"application/x-erb",mode:"htmlembedded",ext:["erb"]},{name:"Erlang",mime:"text/x-erlang",mode:"erlang",ext:["erl"]},{name:"Factor",mime:"text/x-factor",mode:"factor",ext:["factor"]},{name:"FCL",mime:"text/x-fcl",mode:"fcl"},{name:"Forth",mime:"text/x-forth",mode:"forth",ext:["forth","fth","4th"]},{name:"Fortran",mime:"text/x-fortran",mode:"fortran",ext:["f","for","f77","f90"]},{name:"F#",mime:"text/x-fsharp",mode:"mllike",ext:["fs"],alias:["fsharp"]},{name:"Gas",mime:"text/x-gas",mode:"gas",ext:["s"]},{name:"Gherkin",mime:"text/x-feature",mode:"gherkin",ext:["feature"]},{name:"GitHub Flavored Markdown",mime:"text/x-gfm",mode:"gfm",file:/^(readme|contributing|history).md$/i},{name:"Go",mime:"text/x-go",mode:"go",ext:["go"]},{name:"Groovy",mime:"text/x-groovy",mode:"groovy",ext:["groovy","gradle"]},{name:"HAML",mime:"text/x-haml",mode:"haml",ext:["haml"]},{name:"Haskell",mime:"text/x-haskell",mode:"haskell",ext:["hs"]},{name:"Haskell (Literate)",mime:"text/x-literate-haskell",mode:"haskell-literate",ext:["lhs"]},{name:"Haxe",mime:"text/x-haxe",mode:"haxe",ext:["hx"]},{name:"HXML",mime:"text/x-hxml",mode:"haxe",ext:["hxml"]},{name:"ASP.NET",mime:"application/x-aspx",mode:"htmlembedded",ext:["aspx"],alias:["asp","aspx"]},{name:"HTML",mime:"text/html",mode:"htmlmixed",ext:["html","htm"],alias:["xhtml"]},{name:"HTTP",mime:"message/http",mode:"http"},{name:"IDL",mime:"text/x-idl",mode:"idl",ext:["pro"]},{name:"Jade",mime:"text/x-jade",mode:"jade",ext:["jade"]},{name:"Java",mime:"text/x-java",mode:"clike",ext:["java"]},{name:"Java Server Pages",mime:"application/x-jsp",mode:"htmlembedded",ext:["jsp"],alias:["jsp"]},{name:"JavaScript",mimes:["text/javascript","text/ecmascript","application/javascript","application/x-javascript","application/ecmascript"],mode:"javascript",ext:["js"],alias:["ecmascript","js","node"]},{name:"JSON",mimes:["application/json","application/x-json"],mode:"javascript",ext:["json","map"],alias:["json5"]},{name:"JSON-LD",mime:"application/ld+json",mode:"javascript",ext:["jsonld"],alias:["jsonld"]},{name:"JSX",mime:"text/jsx",mode:"jsx",ext:["jsx"]},{name:"Jinja2",mime:"null",mode:"jinja2"},{name:"Julia",mime:"text/x-julia",mode:"julia",ext:["jl"]},{name:"Kotlin",mime:"text/x-kotlin",mode:"clike",ext:["kt"]},{name:"LESS",mime:"text/x-less",mode:"css",ext:["less"]},{name:"LiveScript",mime:"text/x-livescript",mode:"livescript",ext:["ls"],alias:["ls"]},{name:"Lua",mime:"text/x-lua",mode:"lua",ext:["lua"]},{name:"Markdown",mime:"text/x-markdown",mode:"markdown",ext:["markdown","md","mkd"]},{name:"mIRC",mime:"text/mirc",mode:"mirc"},{name:"MariaDB SQL",mime:"text/x-mariadb",mode:"sql"},{name:"Mathematica",mime:"text/x-mathematica",mode:"mathematica",ext:["m","nb"]},{name:"Modelica",mime:"text/x-modelica",mode:"modelica",ext:["mo"]},{name:"MUMPS",mime:"text/x-mumps",mode:"mumps",ext:["mps"]},{name:"MS SQL",mime:"text/x-mssql",mode:"sql"},{name:"mbox",mime:"application/mbox",mode:"mbox",ext:["mbox"]},{name:"MySQL",mime:"text/x-mysql",mode:"sql"},{name:"Nginx",mime:"text/x-nginx-conf",mode:"nginx",file:/nginx.*\.conf$/i},{name:"NSIS",mime:"text/x-nsis",mode:"nsis",ext:["nsh","nsi"]},{name:"NTriples",mime:"text/n-triples",mode:"ntriples",ext:["nt"]},{name:"Objective C",mime:"text/x-objectivec",mode:"clike",ext:["m","mm"],alias:["objective-c","objc"]},{name:"OCaml",mime:"text/x-ocaml",mode:"mllike",ext:["ml","mli","mll","mly"]},{name:"Octave",mime:"text/x-octave",mode:"octave",ext:["m"]},{name:"Oz",mime:"text/x-oz",mode:"oz",ext:["oz"]},{name:"Pascal",mime:"text/x-pascal",mode:"pascal",ext:["p","pas"]},{name:"PEG.js",mime:"null",mode:"pegjs",ext:["jsonld"]},{name:"Perl",mime:"text/x-perl",mode:"perl",ext:["pl","pm"]},{name:"PHP",mime:"application/x-httpd-php",mode:"php",ext:["php","php3","php4","php5","phtml"]},{name:"Pig",mime:"text/x-pig",mode:"pig",ext:["pig"]},{name:"Plain Text",mime:"text/plain",mode:"null",ext:["txt","text","conf","def","list","log"]},{name:"PLSQL",mime:"text/x-plsql",mode:"sql",ext:["pls"]},{name:"PowerShell",mime:"application/x-powershell",mode:"powershell",ext:["ps1","psd1","psm1"]},{name:"Properties files",mime:"text/x-properties",mode:"properties",ext:["properties","ini","in"],alias:["ini","properties"]},{name:"ProtoBuf",mime:"text/x-protobuf",mode:"protobuf",ext:["proto"]},{name:"Python",mime:"text/x-python",mode:"python",ext:["BUILD","bzl","py","pyw"],file:/^(BUCK|BUILD)$/},{name:"Puppet",mime:"text/x-puppet",mode:"puppet",ext:["pp"]},{name:"Q",mime:"text/x-q",mode:"q",ext:["q"]},{name:"R",mime:"text/x-rsrc",mode:"r",ext:["r"],alias:["rscript"]},{name:"reStructuredText",mime:"text/x-rst",mode:"rst",ext:["rst"],alias:["rst"]},{name:"RPM Changes",mime:"text/x-rpm-changes",mode:"rpm"},{name:"RPM Spec",mime:"text/x-rpm-spec",mode:"rpm",ext:["spec"]},{name:"Ruby",mime:"text/x-ruby",mode:"ruby",ext:["rb"],alias:["jruby","macruby","rake","rb","rbx"]},{name:"Rust",mime:"text/x-rustsrc",mode:"rust",ext:["rs"]},{name:"SAS",mime:"text/x-sas",mode:"sas",ext:["sas"]},{name:"Sass",mime:"text/x-sass",mode:"sass",ext:["sass"]},{name:"Scala",mime:"text/x-scala",mode:"clike",ext:["scala"]},{name:"Scheme",mime:"text/x-scheme",mode:"scheme",ext:["scm","ss"]},{name:"SCSS",mime:"text/x-scss",mode:"css",ext:["scss"]},{name:"Shell",mime:"text/x-sh",mode:"shell",ext:["sh","ksh","bash"],alias:["bash","sh","zsh"],file:/^PKGBUILD$/},{name:"Sieve",mime:"application/sieve",mode:"sieve",ext:["siv","sieve"]},{name:"Slim",mimes:["text/x-slim","application/x-slim"],mode:"slim",ext:["slim"]},{name:"Smalltalk",mime:"text/x-stsrc",mode:"smalltalk",ext:["st"]},{name:"Smarty",mime:"text/x-smarty",mode:"smarty",ext:["tpl"]},{name:"Solr",mime:"text/x-solr",mode:"solr"},{name:"Soy",mime:"text/x-soy",mode:"soy",ext:["soy"],alias:["closure template"]},{name:"SPARQL",mime:"application/sparql-query",mode:"sparql",ext:["rq","sparql"],alias:["sparul"]},{name:"Spreadsheet",mime:"text/x-spreadsheet",mode:"spreadsheet",alias:["excel","formula"]},{name:"SQL",mime:"text/x-sql",mode:"sql",ext:["sql"]},{name:"Squirrel",mime:"text/x-squirrel",mode:"clike",ext:["nut"]},{name:"Swift",mime:"text/x-swift",mode:"swift",ext:["swift"]},{name:"sTeX",mime:"text/x-stex",mode:"stex"},{name:"LaTeX",mime:"text/x-latex",mode:"stex",ext:["text","ltx"],alias:["tex"]},{name:"SystemVerilog",mime:"text/x-systemverilog",mode:"verilog",ext:["v"]},{name:"Tcl",mime:"text/x-tcl",mode:"tcl",ext:["tcl"]},{name:"Textile",mime:"text/x-textile",mode:"textile",ext:["textile"]},{name:"TiddlyWiki ",mime:"text/x-tiddlywiki",mode:"tiddlywiki"},{name:"Tiki wiki",mime:"text/tiki",mode:"tiki"},{name:"TOML",mime:"text/x-toml",mode:"toml",ext:["toml"]},{name:"Tornado",mime:"text/x-tornado",mode:"tornado"},{name:"troff",mime:"text/troff",mode:"troff",ext:["1","2","3","4","5","6","7","8","9"]},{name:"TTCN",mime:"text/x-ttcn",mode:"ttcn",ext:["ttcn","ttcn3","ttcnpp"]},{name:"TTCN_CFG",mime:"text/x-ttcn-cfg",mode:"ttcn-cfg",ext:["cfg"]},{name:"Turtle",mime:"text/turtle",mode:"turtle",ext:["ttl"]},{name:"TypeScript",mime:"application/typescript",mode:"javascript",ext:["ts"],alias:["ts"]},{name:"Twig",mime:"text/x-twig",mode:"twig"},{name:"Web IDL",mime:"text/x-webidl",mode:"webidl",ext:["webidl"]},{name:"VB.NET",mime:"text/x-vb",mode:"vb",ext:["vb"]},{name:"VBScript",mime:"text/vbscript",mode:"vbscript",ext:["vbs"]},{name:"Velocity",mime:"text/velocity",mode:"velocity",ext:["vtl"]},{name:"Verilog",mime:"text/x-verilog",mode:"verilog",ext:["v"]},{name:"VHDL",mime:"text/x-vhdl",mode:"vhdl",ext:["vhd","vhdl"]},{name:"XML",mimes:["application/xml","text/xml"],mode:"xml",ext:["xml","xsl","xsd"],alias:["rss","wsdl","xsd"]},{name:"XQuery",mime:"application/xquery",mode:"xquery",ext:["xy","xquery"]},{name:"Yacas",mime:"text/x-yacas",mode:"yacas",ext:["ys"]},{name:"YAML",mime:"text/x-yaml",mode:"yaml",ext:["yaml","yml"],alias:["yml"]},{name:"Z80",mime:"text/x-z80",mode:"z80",ext:["z80"]},{name:"mscgen",mime:"text/x-mscgen",mode:"mscgen",ext:["mscgen","mscin","msc"]},{name:"xu",mime:"text/x-xu",mode:"mscgen",ext:["xu"]},{name:"msgenny",mime:"text/x-msgenny",mode:"mscgen",ext:["msgenny"]}]
for(var t=0;t<e.modeInfo.length;t++){var n=e.modeInfo[t]
n.mimes&&(n.mime=n.mimes[0])}e.findModeByMIME=function(t){t=t.toLowerCase()
for(var n=0;n<e.modeInfo.length;n++){var r=e.modeInfo[n]
if(r.mime==t)return r
if(r.mimes)for(var i=0;i<r.mimes.length;i++)if(r.mimes[i]==t)return r}},e.findModeByExtension=function(t){for(var n=0;n<e.modeInfo.length;n++){var r=e.modeInfo[n]
if(r.ext)for(var i=0;i<r.ext.length;i++)if(r.ext[i]==t)return r}},e.findModeByFileName=function(t){for(var n=0;n<e.modeInfo.length;n++){var r=e.modeInfo[n]
if(r.file&&r.file.test(t))return r}var i=t.lastIndexOf("."),o=i>-1&&t.substring(i+1,t.length)
return o?e.findModeByExtension(o):void 0},e.findModeByName=function(t){t=t.toLowerCase()
for(var n=0;n<e.modeInfo.length;n++){var r=e.modeInfo[n]
if(r.name.toLowerCase()==t)return r
if(r.alias)for(var i=0;i<r.alias.length;i++)if(r.alias[i].toLowerCase()==t)return r}}},r("object"==typeof n&&"object"==typeof t?e("../lib/codemirror"):CodeMirror)},{"../lib/codemirror":10}],14:[function(e,t,n){var r
r=function(e){"use strict"
var t={autoSelfClosers:{area:!0,base:!0,br:!0,col:!0,command:!0,embed:!0,frame:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0,menuitem:!0},implicitlyClosed:{dd:!0,li:!0,optgroup:!0,option:!0,p:!0,rp:!0,rt:!0,tbody:!0,td:!0,tfoot:!0,th:!0,tr:!0},contextGrabbers:{dd:{dd:!0,dt:!0},dt:{dd:!0,dt:!0},li:{li:!0},option:{option:!0,optgroup:!0},optgroup:{optgroup:!0},p:{address:!0,article:!0,aside:!0,blockquote:!0,dir:!0,div:!0,dl:!0,fieldset:!0,footer:!0,form:!0,h1:!0,h2:!0,h3:!0,h4:!0,h5:!0,h6:!0,header:!0,hgroup:!0,hr:!0,menu:!0,nav:!0,ol:!0,p:!0,pre:!0,section:!0,table:!0,ul:!0},rp:{rp:!0,rt:!0},rt:{rp:!0,rt:!0},tbody:{tbody:!0,tfoot:!0},td:{td:!0,th:!0},tfoot:{tbody:!0},th:{td:!0,th:!0},thead:{tbody:!0,tfoot:!0},tr:{tr:!0}},doNotIndent:{pre:!0},allowUnquoted:!0,allowMissing:!0,caseFold:!0},n={autoSelfClosers:{},implicitlyClosed:{},contextGrabbers:{},doNotIndent:{},allowUnquoted:!1,allowMissing:!1,caseFold:!1}
e.defineMode("xml",(function(r,i){function o(e,t){function n(n){return t.tokenize=n,n(e,t)}var r=e.next()
return"<"==r?e.eat("!")?e.eat("[")?e.match("CDATA[")?n(a("atom","]]>")):null:e.match("--")?n(a("comment","--\x3e")):e.match("DOCTYPE",!0,!0)?(e.eatWhile(/[\w\._\-]/),n(s(1))):null:e.eat("?")?(e.eatWhile(/[\w\._\-]/),t.tokenize=a("meta","?>"),"meta"):(w=e.eat("https://coderthemes.com/")?"closeTag":"openTag",t.tokenize=l,"tag bracket"):"&"==r?(e.eat("#")?e.eat("x")?e.eatWhile(/[a-fA-F\d]/)&&e.eat(";"):e.eatWhile(/[\d]/)&&e.eat(";"):e.eatWhile(/[\w\.\-:]/)&&e.eat(";"))?"atom":"error":(e.eatWhile(/[^&<]/),null)}function l(e,t){var n=e.next()
if(">"==n||"/"==n&&e.eat(">"))return t.tokenize=o,w=">"==n?"endTag":"selfcloseTag","tag bracket"
if("="==n)return w="equals",null
if("<"==n){t.tokenize=o,t.state=f,t.tagName=t.tagStart=null
var r=t.tokenize(e,t)
return r?r+" tag error":"tag error"}return/[\'\"]/.test(n)?(t.tokenize=function(e){var t=function(t,n){for(;!t.eol();)if(t.next()==e){n.tokenize=l
break}return"string"}
return t.isInAttribute=!0,t}(n),t.stringStartCol=e.column(),t.tokenize(e,t)):(e.match(/^[^\s\u00a0=<>\"\']*[^\s\u00a0=<>\"\'\/]/),"word")}function a(e,t){return function(n,r){for(;!n.eol();){if(n.match(t)){r.tokenize=o
break}n.next()}return e}}function s(e){return function(t,n){for(var r;null!=(r=t.next());){if("<"==r)return n.tokenize=s(e+1),n.tokenize(t,n)
if(">"==r){if(1==e){n.tokenize=o
break}return n.tokenize=s(e-1),n.tokenize(t,n)}}return"meta"}}function c(e,t,n){this.prev=e.context,this.tagName=t,this.indent=e.indented,this.startOfLine=n,(C.doNotIndent.hasOwnProperty(t)||e.context&&e.context.noIndent)&&(this.noIndent=!0)}function u(e){e.context&&(e.context=e.context.prev)}function h(e,t){for(var n;;){if(!e.context)return
if(n=e.context.tagName,!C.contextGrabbers.hasOwnProperty(n)||!C.contextGrabbers[n].hasOwnProperty(t))return
u(e)}}function f(e,t,n){return"openTag"==e?(n.tagStart=t.column(),d):"closeTag"==e?p:f}function d(e,t,n){return"word"==e?(n.tagName=t.current(),k="tag",v):(k="error",d)}function p(e,t,n){if("word"==e){var r=t.current()
return n.context&&n.context.tagName!=r&&C.implicitlyClosed.hasOwnProperty(n.context.tagName)&&u(n),n.context&&n.context.tagName==r||!1===C.matchClosing?(k="tag",m):(k="tag error",g)}return k="error",g}function m(e,t,n){return"endTag"!=e?(k="error",m):(u(n),f)}function g(e,t,n){return k="error",m(e,0,n)}function v(e,t,n){if("word"==e)return k="attribute",y
if("endTag"==e||"selfcloseTag"==e){var r=n.tagName,i=n.tagStart
return n.tagName=n.tagStart=null,"selfcloseTag"==e||C.autoSelfClosers.hasOwnProperty(r)?h(n,r):(h(n,r),n.context=new c(n,r,i==n.indented)),f}return k="error",v}function y(e,t,n){return"equals"==e?x:(C.allowMissing||(k="error"),v(e,0,n))}function x(e,t,n){return"string"==e?b:"word"==e&&C.allowUnquoted?(k="string",v):(k="error",v(e,0,n))}function b(e,t,n){return"string"==e?b:v(e,0,n)}var w,k,S=r.indentUnit,C={},L=i.htmlMode?t:n
for(var T in L)C[T]=L[T]
for(var T in i)C[T]=i[T]
return o.isInText=!0,{startState:function(e){var t={tokenize:o,state:f,indented:e||0,tagName:null,tagStart:null,context:null}
return null!=e&&(t.baseIndent=e),t},token:function(e,t){if(!t.tagName&&e.sol()&&(t.indented=e.indentation()),e.eatSpace())return null
w=null
var n=t.tokenize(e,t)
return(n||w)&&"comment"!=n&&(k=null,t.state=t.state(w||n,e,t),k&&(n="error"==k?n+" error":k)),n},indent:function(t,n,r){var i=t.context
if(t.tokenize.isInAttribute)return t.tagStart==t.indented?t.stringStartCol+1:t.indented+S
if(i&&i.noIndent)return e.Pass
if(t.tokenize!=l&&t.tokenize!=o)return r?r.match(/^(\s*)/)[0].length:0
if(t.tagName)return!1!==C.multilineTagIndentPastTag?t.tagStart+t.tagName.length+2:t.tagStart+S*(C.multilineTagIndentFactor||1)
if(C.alignCDATA&&/<!\[CDATA\[/.test(n))return 0
var a=n&&/^<(\/)?([\w_:\.-]*)/.exec(n)
if(a&&a[1])for(;i;){if(i.tagName==a[2]){i=i.prev
break}if(!C.implicitlyClosed.hasOwnProperty(i.tagName))break
i=i.prev}else if(a)for(;i;){var s=C.contextGrabbers[i.tagName]
if(!s||!s.hasOwnProperty(a[2]))break
i=i.prev}for(;i&&i.prev&&!i.startOfLine;)i=i.prev
return i?i.indent+S:t.baseIndent||0},electricInput:/<\/[\s\w:]+>$/,blockCommentStart:"\x3c!--",blockCommentEnd:"--\x3e",configuration:C.htmlMode?"html":"xml",helperType:C.htmlMode?"html":"xml",skipAttribute:function(e){e.state==x&&(e.state=v)}}})),e.defineMIME("text/xml","xml"),e.defineMIME("application/xml","xml"),e.mimeModes.hasOwnProperty("text/html")||e.defineMIME("text/html",{name:"xml",htmlMode:!0})},r("object"==typeof n&&"object"==typeof t?e("../../lib/codemirror"):CodeMirror)},{"../../lib/codemirror":10}],15:[function(e,t,n){n.read=function(e,t,n,r,i){var o,l,a=8*i-r-1,s=(1<<a)-1,c=s>>1,u=-7,h=n?i-1:0,f=n?-1:1,d=e[t+h]
for(h+=f,o=d&(1<<-u)-1,d>>=-u,u+=a;u>0;o=256*o+e[t+h],h+=f,u-=8);for(l=o&(1<<-u)-1,o>>=-u,u+=r;u>0;l=256*l+e[t+h],h+=f,u-=8);if(0===o)o=1-c
else{if(o===s)return l?NaN:1/0*(d?-1:1)
l+=Math.pow(2,r),o-=c}return(d?-1:1)*l*Math.pow(2,o-r)},n.write=function(e,t,n,r,i,o){var l,a,s,c=8*o-i-1,u=(1<<c)-1,h=u>>1,f=23===i?Math.pow(2,-24)-Math.pow(2,-77):0,d=r?0:o-1,p=r?1:-1,m=0>t||0===t&&0>1/t?1:0
for(t=Math.abs(t),isNaN(t)||t===1/0?(a=isNaN(t)?1:0,l=u):(l=Math.floor(Math.log(t)/Math.LN2),t*(s=Math.pow(2,-l))<1&&(l--,s*=2),(t+=l+h>=1?f/s:f*Math.pow(2,1-h))*s>=2&&(l++,s/=2),l+h>=u?(a=0,l=u):l+h>=1?(a=(t*s-1)*Math.pow(2,i),l+=h):(a=t*Math.pow(2,h-1)*Math.pow(2,i),l=0));i>=8;e[n+d]=255&a,d+=p,a/=256,i-=8);for(l=l<<i|a,c+=i;c>0;e[n+d]=255&l,d+=p,l/=256,c-=8);e[n+d-p]|=128*m}},{}],16:[function(e,t,n){var r={}.toString
t.exports=Array.isArray||function(e){return"[object Array]"==r.call(e)}},{}],17:[function(e,t,n){(function(e){(function(){function e(e){this.tokens=[],this.tokens.links={},this.options=e||u.defaults,this.rules=h.normal,this.options.gfm&&(this.options.tables?this.rules=h.tables:this.rules=h.gfm)}function r(e,t){if(this.options=t||u.defaults,this.links=e,this.rules=f.normal,this.renderer=this.options.renderer||new i,this.renderer.options=this.options,!this.links)throw new Error("Tokens array requires a `links` property.")
this.options.gfm?this.options.breaks?this.rules=f.breaks:this.rules=f.gfm:this.options.pedantic&&(this.rules=f.pedantic)}function i(e){this.options=e||{}}function o(e){this.tokens=[],this.token=null,this.options=e||u.defaults,this.options.renderer=this.options.renderer||new i,this.renderer=this.options.renderer,this.renderer.options=this.options}function l(e,t){return e.replace(t?/&/g:/&(?!#?\w+;)/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function a(e,t){return e=e.source,t=t||"",function n(r,i){return r?(i=(i=i.source||i).replace(/(^|[^\[])\^/g,"$1"),e=e.replace(r,i),n):new RegExp(e,t)}}function s(){}function c(e){for(var t,n,r=1;r<arguments.length;r++)for(n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])
return e}function u(t,n,r){if(r||"function"==typeof n){r||(r=n,n=null)
var i,a,h=(n=c({},u.defaults,n||{})).highlight,f=0
try{i=e.lex(t,n)}catch(s){return r(s)}a=i.length
var d=function(e){if(e)return n.highlight=h,r(e)
var t
try{t=o.parse(i,n)}catch(a){e=a}return n.highlight=h,e?r(e):r(null,t)}
if(!h||h.length<3)return d()
if(delete n.highlight,!a)return d()
for(;f<i.length;f++)!function(e){"code"!==e.type?--a||d():h(e.text,e.lang,(function(t,n){return t?d(t):null==n||n===e.text?--a||d():(e.text=n,e.escaped=!0,void(--a||d()))}))}(i[f])}else try{return n&&(n=c({},u.defaults,n)),o.parse(e.lex(t,n),n)}catch(s){if(s.message+="\nPlease report this to https://github.com/chjj/marked.",(n||u.defaults).silent)return"<p>An error occured:</p><pre>"+l(s.message+"",!0)+"</pre>"
throw s}}var h={newline:/^\n+/,code:/^( {4}[^\n]+\n*)+/,fences:s,hr:/^( *[-*_]){3,} *(?:\n+|$)/,heading:/^ *(#{1,6}) *([^\n]+?) *#* *(?:\n+|$)/,nptable:s,lheading:/^([^\n]+)\n *(=|-){2,} *(?:\n+|$)/,blockquote:/^( *>[^\n]+(\n(?!def)[^\n]+)*\n*)+/,list:/^( *)(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,html:/^ *(?:comment *(?:\n|\s*$)|closed *(?:\n{2,}|\s*$)|closing *(?:\n{2,}|\s*$))/,def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +["(]([^\n]+)[")])? *(?:\n+|$)/,table:s,paragraph:/^((?:[^\n]+\n?(?!hr|heading|lheading|blockquote|tag|def))+)\n*/,text:/^[^\n]+/,bullet:/(?:[*+-]|\d+\.)/,item:/^( *)(bull) [^\n]*(?:\n(?!\1bull )[^\n]*)*/}
h.item=a(h.item,"gm")(/bull/g,h.bullet)(),h.list=a(h.list)(/bull/g,h.bullet)("hr","\\n+(?=\\1?(?:[-*_] *){3,}(?:\\n+|$))")("def","\\n+(?="+h.def.source+")")(),h.blockquote=a(h.blockquote)("def",h.def)(),h._tag="(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:/|[^\\w\\s@]*@)\\b",h.html=a(h.html)("comment",/<!--[\s\S]*?-->/)("closed",/<(tag)[\s\S]+?<\/\1>/)("closing",/<tag(?:"[^"]*"|'[^']*'|[^'">])*?>/)(/tag/g,h._tag)(),h.paragraph=a(h.paragraph)("hr",h.hr)("heading",h.heading)("lheading",h.lheading)("blockquote",h.blockquote)("tag","<"+h._tag)("def",h.def)(),h.normal=c({},h),h.gfm=c({},h.normal,{fences:/^ *(`{3,}|~{3,})[ \.]*(\S+)? *\n([\s\S]*?)\s*\1 *(?:\n+|$)/,paragraph:/^/,heading:/^ *(#{1,6}) +([^\n]+?) *#* *(?:\n+|$)/}),h.gfm.paragraph=a(h.paragraph)("(?!","(?!"+h.gfm.fences.source.replace("\\1","\\2")+"|"+h.list.source.replace("\\1","\\3")+"|")(),h.tables=c({},h.gfm,{nptable:/^ *(\S.*\|.*)\n *([-:]+ *\|[-| :]*)\n((?:.*\|.*(?:\n|$))*)\n*/,table:/^ *\|(.+)\n *\|( *[-:]+[-| :]*)\n((?: *\|.*(?:\n|$))*)\n*/}),e.rules=h,e.lex=function(t,n){return new e(n).lex(t)},e.prototype.lex=function(e){return e=e.replace(/\r\n|\r/g,"\n").replace(/\t/g,"    ").replace(/\u00a0/g," ").replace(/\u2424/g,"\n"),this.token(e,!0)},e.prototype.token=function(e,t,n){var r,i,o,l,a,s,c,u,f
for(e=e.replace(/^ +$/gm,"");e;)if((o=this.rules.newline.exec(e))&&(e=e.substring(o[0].length),o[0].length>1&&this.tokens.push({type:"space"})),o=this.rules.code.exec(e))e=e.substring(o[0].length),o=o[0].replace(/^ {4}/gm,""),this.tokens.push({type:"code",text:this.options.pedantic?o:o.replace(/\n+$/,"")})
else if(o=this.rules.fences.exec(e))e=e.substring(o[0].length),this.tokens.push({type:"code",lang:o[2],text:o[3]||""})
else if(o=this.rules.heading.exec(e))e=e.substring(o[0].length),this.tokens.push({type:"heading",depth:o[1].length,text:o[2]})
else if(t&&(o=this.rules.nptable.exec(e))){for(e=e.substring(o[0].length),s={type:"table",header:o[1].replace(/^ *| *\| *$/g,"").split(/ *\| */),align:o[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:o[3].replace(/\n$/,"").split("\n")},u=0;u<s.align.length;u++)/^ *-+: *$/.test(s.align[u])?s.align[u]="right":/^ *:-+: *$/.test(s.align[u])?s.align[u]="center":/^ *:-+ *$/.test(s.align[u])?s.align[u]="left":s.align[u]=null
for(u=0;u<s.cells.length;u++)s.cells[u]=s.cells[u].split(/ *\| */)
this.tokens.push(s)}else if(o=this.rules.lheading.exec(e))e=e.substring(o[0].length),this.tokens.push({type:"heading",depth:"="===o[2]?1:2,text:o[1]})
else if(o=this.rules.hr.exec(e))e=e.substring(o[0].length),this.tokens.push({type:"hr"})
else if(o=this.rules.blockquote.exec(e))e=e.substring(o[0].length),this.tokens.push({type:"blockquote_start"}),o=o[0].replace(/^ *> ?/gm,""),this.token(o,t,!0),this.tokens.push({type:"blockquote_end"})
else if(o=this.rules.list.exec(e)){for(e=e.substring(o[0].length),l=o[2],this.tokens.push({type:"list_start",ordered:l.length>1}),r=!1,f=(o=o[0].match(this.rules.item)).length,u=0;f>u;u++)c=(s=o[u]).length,~(s=s.replace(/^ *([*+-]|\d+\.) +/,"")).indexOf("\n ")&&(c-=s.length,s=this.options.pedantic?s.replace(/^ {1,4}/gm,""):s.replace(new RegExp("^ {1,"+c+"}","gm"),"")),this.options.smartLists&&u!==f-1&&(l===(a=h.bullet.exec(o[u+1])[0])||l.length>1&&a.length>1||(e=o.slice(u+1).join("\n")+e,u=f-1)),i=r||/\n\n(?!\s*$)/.test(s),u!==f-1&&(r="\n"===s.charAt(s.length-1),i||(i=r)),this.tokens.push({type:i?"loose_item_start":"list_item_start"}),this.token(s,!1,n),this.tokens.push({type:"list_item_end"})
this.tokens.push({type:"list_end"})}else if(o=this.rules.html.exec(e))e=e.substring(o[0].length),this.tokens.push({type:this.options.sanitize?"paragraph":"html",pre:!this.options.sanitizer&&("pre"===o[1]||"script"===o[1]||"style"===o[1]),text:o[0]})
else if(!n&&t&&(o=this.rules.def.exec(e)))e=e.substring(o[0].length),this.tokens.links[o[1].toLowerCase()]={href:o[2],title:o[3]}
else if(t&&(o=this.rules.table.exec(e))){for(e=e.substring(o[0].length),s={type:"table",header:o[1].replace(/^ *| *\| *$/g,"").split(/ *\| */),align:o[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:o[3].replace(/(?: *\| *)?\n$/,"").split("\n")},u=0;u<s.align.length;u++)/^ *-+: *$/.test(s.align[u])?s.align[u]="right":/^ *:-+: *$/.test(s.align[u])?s.align[u]="center":/^ *:-+ *$/.test(s.align[u])?s.align[u]="left":s.align[u]=null
for(u=0;u<s.cells.length;u++)s.cells[u]=s.cells[u].replace(/^ *\| *| *\| *$/g,"").split(/ *\| */)
this.tokens.push(s)}else if(t&&(o=this.rules.paragraph.exec(e)))e=e.substring(o[0].length),this.tokens.push({type:"paragraph",text:"\n"===o[1].charAt(o[1].length-1)?o[1].slice(0,-1):o[1]})
else if(o=this.rules.text.exec(e))e=e.substring(o[0].length),this.tokens.push({type:"text",text:o[0]})
else if(e)throw new Error("Infinite loop on byte: "+e.charCodeAt(0))
return this.tokens}
var f={escape:/^\\([\\`*{}\[\]()#+\-.!_>])/,autolink:/^<([^ >]+(@|:\/)[^ >]+)>/,url:s,tag:/^<!--[\s\S]*?-->|^<\/?\w+(?:"[^"]*"|'[^']*'|[^'">])*?>/,link:/^!?\[(inside)\]\(href\)/,reflink:/^!?\[(inside)\]\s*\[([^\]]*)\]/,nolink:/^!?\[((?:\[[^\]]*\]|[^\[\]])*)\]/,strong:/^__([\s\S]+?)__(?!_)|^\*\*([\s\S]+?)\*\*(?!\*)/,em:/^\b_((?:[^_]|__)+?)_\b|^\*((?:\*\*|[\s\S])+?)\*(?!\*)/,code:/^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,br:/^ {2,}\n(?!\s*$)/,del:s,text:/^[\s\S]+?(?=[\\<!\[_*`]| {2,}\n|$)/,_inside:/(?:\[[^\]]*\]|[^\[\]]|\](?=[^\[]*\]))*/,_href:/\s*<?([\s\S]*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*/}
f.link=a(f.link)("inside",f._inside)("href",f._href)(),f.reflink=a(f.reflink)("inside",f._inside)(),f.normal=c({},f),f.pedantic=c({},f.normal,{strong:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,em:/^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/}),f.gfm=c({},f.normal,{escape:a(f.escape)("])","~|])")(),url:/^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,del:/^~~(?=\S)([\s\S]*?\S)~~/,text:a(f.text)("]|","~]|")("|","|https?://|")()}),f.breaks=c({},f.gfm,{br:a(f.br)("{2,}","*")(),text:a(f.gfm.text)("{2,}","*")()}),r.rules=f,r.output=function(e,t,n){return new r(t,n).output(e)},r.prototype.output=function(e){for(var t,n,r,i,o="";e;)if(i=this.rules.escape.exec(e))e=e.substring(i[0].length),o+=i[1]
else if(i=this.rules.autolink.exec(e))e=e.substring(i[0].length),"@"===i[2]?(n=":"===i[1].charAt(6)?this.mangle(i[1].substring(7)):this.mangle(i[1]),r=this.mangle("mailto:")+n):r=n=l(i[1]),o+=this.renderer.link(r,null,n)
else if(this.inLink||!(i=this.rules.url.exec(e))){if(i=this.rules.tag.exec(e))!this.inLink&&/^<a /i.test(i[0])?this.inLink=!0:this.inLink&&/^<\/a>/i.test(i[0])&&(this.inLink=!1),e=e.substring(i[0].length),o+=this.options.sanitize?this.options.sanitizer?this.options.sanitizer(i[0]):l(i[0]):i[0]
else if(i=this.rules.link.exec(e))e=e.substring(i[0].length),this.inLink=!0,o+=this.outputLink(i,{href:i[2],title:i[3]}),this.inLink=!1
else if((i=this.rules.reflink.exec(e))||(i=this.rules.nolink.exec(e))){if(e=e.substring(i[0].length),t=(i[2]||i[1]).replace(/\s+/g," "),!(t=this.links[t.toLowerCase()])||!t.href){o+=i[0].charAt(0),e=i[0].substring(1)+e
continue}this.inLink=!0,o+=this.outputLink(i,t),this.inLink=!1}else if(i=this.rules.strong.exec(e))e=e.substring(i[0].length),o+=this.renderer.strong(this.output(i[2]||i[1]))
else if(i=this.rules.em.exec(e))e=e.substring(i[0].length),o+=this.renderer.em(this.output(i[2]||i[1]))
else if(i=this.rules.code.exec(e))e=e.substring(i[0].length),o+=this.renderer.codespan(l(i[2],!0))
else if(i=this.rules.br.exec(e))e=e.substring(i[0].length),o+=this.renderer.br()
else if(i=this.rules.del.exec(e))e=e.substring(i[0].length),o+=this.renderer.del(this.output(i[1]))
else if(i=this.rules.text.exec(e))e=e.substring(i[0].length),o+=this.renderer.text(l(this.smartypants(i[0])))
else if(e)throw new Error("Infinite loop on byte: "+e.charCodeAt(0))}else e=e.substring(i[0].length),r=n=l(i[1]),o+=this.renderer.link(r,null,n)
return o},r.prototype.outputLink=function(e,t){var n=l(t.href),r=t.title?l(t.title):null
return"!"!==e[0].charAt(0)?this.renderer.link(n,r,this.output(e[1])):this.renderer.image(n,r,l(e[1]))},r.prototype.smartypants=function(e){return this.options.smartypants?e.replace(/---/g,"—").replace(/--/g,"–").replace(/(^|[-\u2014\/(\[{"\s])'/g,"$1‘").replace(/'/g,"’").replace(/(^|[-\u2014\/(\[{\u2018\s])"/g,"$1“").replace(/"/g,"”").replace(/\.{3}/g,"…"):e},r.prototype.mangle=function(e){if(!this.options.mangle)return e
for(var t,n="",r=e.length,i=0;r>i;i++)t=e.charCodeAt(i),Math.random()>.5&&(t="x"+t.toString(16)),n+="&#"+t+";"
return n},i.prototype.code=function(e,t,n){if(this.options.highlight){var r=this.options.highlight(e,t)
null!=r&&r!==e&&(n=!0,e=r)}return t?'<pre><code class="'+this.options.langPrefix+l(t,!0)+'">'+(n?e:l(e,!0))+"\n</code></pre>\n":"<pre><code>"+(n?e:l(e,!0))+"\n</code></pre>"},i.prototype.blockquote=function(e){return"<blockquote>\n"+e+"</blockquote>\n"},i.prototype.html=function(e){return e},i.prototype.heading=function(e,t,n){return"<h"+t+' id="'+this.options.headerPrefix+n.toLowerCase().replace(/[^\w]+/g,"-")+'">'+e+"</h"+t+">\n"},i.prototype.hr=function(){return this.options.xhtml?"<hr/>\n":"<hr>\n"},i.prototype.list=function(e,t){var n=t?"ol":"ul"
return"<"+n+">\n"+e+"</"+n+">\n"},i.prototype.listitem=function(e){return"<li>"+e+"</li>\n"},i.prototype.paragraph=function(e){return"<p>"+e+"</p>\n"},i.prototype.table=function(e,t){return"<table>\n<thead>\n"+e+"</thead>\n<tbody>\n"+t+"</tbody>\n</table>\n"},i.prototype.tablerow=function(e){return"<tr>\n"+e+"</tr>\n"},i.prototype.tablecell=function(e,t){var n=t.header?"th":"td"
return(t.align?"<"+n+' style="text-align:'+t.align+'">':"<"+n+">")+e+"</"+n+">\n"},i.prototype.strong=function(e){return"<strong>"+e+"</strong>"},i.prototype.em=function(e){return"<em>"+e+"</em>"},i.prototype.codespan=function(e){return"<code>"+e+"</code>"},i.prototype.br=function(){return this.options.xhtml?"<br/>":"<br>"},i.prototype.del=function(e){return"<del>"+e+"</del>"},i.prototype.link=function(e,t,n){if(this.options.sanitize){try{var i=decodeURIComponent(function(e){return e.replace(/&([#\w]+);/g,(function(e,t){return"colon"===(t=t.toLowerCase())?":":"#"===t.charAt(0)?"x"===t.charAt(1)?String.fromCharCode(parseInt(t.substring(2),16)):String.fromCharCode(+t.substring(1)):""}))}(e)).replace(/[^\w:]/g,"").toLowerCase()}catch(r){return""}if(0===i.indexOf("javascript:")||0===i.indexOf("vbscript:"))return""}var o='<a href="'+e+'"'
return t&&(o+=' title="'+t+'"'),o+">"+n+"</a>"},i.prototype.image=function(e,t,n){var r='<img src="'+e+'" alt="'+n+'"'
return t&&(r+=' title="'+t+'"'),r+(this.options.xhtml?"/>":">")},i.prototype.text=function(e){return e},o.parse=function(e,t,n){return new o(t,n).parse(e)},o.prototype.parse=function(e){this.inline=new r(e.links,this.options,this.renderer),this.tokens=e.reverse()
for(var t="";this.next();)t+=this.tok()
return t},o.prototype.next=function(){return this.token=this.tokens.pop()},o.prototype.peek=function(){return this.tokens[this.tokens.length-1]||0},o.prototype.parseText=function(){for(var e=this.token.text;"text"===this.peek().type;)e+="\n"+this.next().text
return this.inline.output(e)},o.prototype.tok=function(){switch(this.token.type){case"space":return""
case"hr":return this.renderer.hr()
case"heading":return this.renderer.heading(this.inline.output(this.token.text),this.token.depth,this.token.text)
case"code":return this.renderer.code(this.token.text,this.token.lang,this.token.escaped)
case"table":var e,t,n,r,i="",o=""
for(n="",e=0;e<this.token.header.length;e++)({header:!0,align:this.token.align[e]}),n+=this.renderer.tablecell(this.inline.output(this.token.header[e]),{header:!0,align:this.token.align[e]})
for(i+=this.renderer.tablerow(n),e=0;e<this.token.cells.length;e++){for(t=this.token.cells[e],n="",r=0;r<t.length;r++)n+=this.renderer.tablecell(this.inline.output(t[r]),{header:!1,align:this.token.align[r]})
o+=this.renderer.tablerow(n)}return this.renderer.table(i,o)
case"blockquote_start":for(o="";"blockquote_end"!==this.next().type;)o+=this.tok()
return this.renderer.blockquote(o)
case"list_start":o=""
for(var l=this.token.ordered;"list_end"!==this.next().type;)o+=this.tok()
return this.renderer.list(o,l)
case"list_item_start":for(o="";"list_item_end"!==this.next().type;)o+="text"===this.token.type?this.parseText():this.tok()
return this.renderer.listitem(o)
case"loose_item_start":for(o="";"list_item_end"!==this.next().type;)o+=this.tok()
return this.renderer.listitem(o)
case"html":var a=this.token.pre||this.options.pedantic?this.token.text:this.inline.output(this.token.text)
return this.renderer.html(a)
case"paragraph":return this.renderer.paragraph(this.inline.output(this.token.text))
case"text":return this.renderer.paragraph(this.parseText())}},s.exec=s,u.options=u.setOptions=function(e){return c(u.defaults,e),u},u.defaults={gfm:!0,tables:!0,breaks:!1,pedantic:!1,sanitize:!1,sanitizer:null,mangle:!0,smartLists:!1,silent:!1,highlight:null,langPrefix:"lang-",smartypants:!1,headerPrefix:"",renderer:new i,xhtml:!1},u.Parser=o,u.parser=o.parse,u.Renderer=i,u.Lexer=e,u.lexer=e.lex,u.InlineLexer=r,u.inlineLexer=r.output,u.parse=u,void 0!==t&&"object"==typeof n?t.exports=u:this.marked=u}).call(function(){return this||("undefined"!=typeof window?window:e)}())}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],18:[function(e,t,n){(function(n,r){"use strict"
var i=function(e,t,n,i){if(i=i||{},this.dictionary=null,this.rules={},this.dictionaryTable={},this.compoundRules=[],this.compoundRuleCodes={},this.replacementTable=[],this.flags=i.flags||{},e){if(this.dictionary=e,"undefined"!=typeof window&&"chrome"in window&&"extension"in window.chrome&&"getURL"in window.chrome.extension)t||(t=this._readFile(chrome.extension.getURL("lib/typo/dictionaries/"+e+"/"+e+".aff"))),n||(n=this._readFile(chrome.extension.getURL("lib/typo/dictionaries/"+e+"/"+e+".dic")))
else{if(i.dictionaryPath)var o=i.dictionaryPath
else if(void 0!==r)o=r+"/dictionaries"
else o="./dictionaries"
t||(t=this._readFile(o+"/"+e+"/"+e+".aff")),n||(n=this._readFile(o+"/"+e+"/"+e+".dic"))}this.rules=this._parseAFF(t),this.compoundRuleCodes={}
for(var l=0,a=this.compoundRules.length;a>l;l++)for(var s=this.compoundRules[l],c=0,u=s.length;u>c;c++)this.compoundRuleCodes[s[c]]=[]
for(var l in"ONLYINCOMPOUND"in this.flags&&(this.compoundRuleCodes[this.flags.ONLYINCOMPOUND]=[]),this.dictionaryTable=this._parseDIC(n),this.compoundRuleCodes)0==this.compoundRuleCodes[l].length&&delete this.compoundRuleCodes[l]
for(l=0,a=this.compoundRules.length;a>l;l++){var h=this.compoundRules[l],f=""
for(c=0,u=h.length;u>c;c++){var d=h[c]
f+=d in this.compoundRuleCodes?"("+this.compoundRuleCodes[d].join("|")+")":d}this.compoundRules[l]=new RegExp(f,"i")}}return this}
i.prototype={load:function(e){for(var t in e)this[t]=e[t]
return this},_readFile:function(t,r){if(r||(r="utf8"),"undefined"!=typeof XMLHttpRequest){var i=new XMLHttpRequest
return i.open("GET.html",t,!1),i.overrideMimeType&&i.overrideMimeType("text/plain; charset="+r),i.send(null),i.responseText}if(void 0!==e){var o=e("fs")
try{if(o.existsSync(t)){var l=o.statSync(t),a=o.openSync(t,"r"),s=new n(l.size)
return o.readSync(a,s,0,s.length,null),s.toString(r,0,s.length)}console.log("Path "+t+" does not exist.")}catch(c){return console.log(c),""}}},_parseAFF:function(e){for(var t={},n=(e=this._removeAffixComments(e)).split("\n"),r=0,i=n.length;i>r;r++){var o=(x=n[r]).split(/\s+/),l=o[0]
if("PFX"==l||"SFX"==l){for(var a=o[1],s=o[2],c=[],u=r+1,h=r+1+(y=parseInt(o[3],10));h>u;u++){var f=(b=(x=n[u]).split(/\s+/))[2],d=b[3].split("https://coderthemes.com/"),p=d[0]
"0"===p&&(p="")
var m=this.parseRuleCodes(d[1]),g=b[4],v={}
v.add=p,m.length>0&&(v.continuationClasses=m),"."!==g&&(v.match="SFX"===l?new RegExp(g+"$"):new RegExp("^"+g)),"0"!=f&&(v.remove="SFX"===l?new RegExp(f+"$"):f),c.push(v)}t[a]={type:l,combineable:"Y"==s,entries:c},r+=y}else if("COMPOUNDRULE"===l){var y
for(u=r+1,h=r+1+(y=parseInt(o[1],10));h>u;u++){var x,b=(x=n[u]).split(/\s+/)
this.compoundRules.push(b[1])}r+=y}else if("REP"===l){3===(b=x.split(/\s+/)).length&&this.replacementTable.push([b[1],b[2]])}else this.flags[l]=o[1]}return t},_removeAffixComments:function(e){return(e=(e=(e=e.replace(/#.*$/gm,"")).replace(/^\s\s*/m,"").replace(/\s\s*$/m,"")).replace(/\n{2,}/g,"\n")).replace(/^\s\s*/,"").replace(/\s\s*$/,"")},_parseDIC:function(e){function t(e,t){e in r&&"object"==typeof r[e]||(r[e]=[]),r[e].push(t)}for(var n=(e=this._removeDicComments(e)).split("\n"),r={},i=1,o=n.length;o>i;i++){var l=n[i].split("https://coderthemes.com/",2),a=l[0]
if(l.length>1){var s=this.parseRuleCodes(l[1])
"NEEDAFFIX"in this.flags&&-1!=s.indexOf(this.flags.NEEDAFFIX)||t(a,s)
for(var c=0,u=s.length;u>c;c++){var h=s[c],f=this.rules[h]
if(f)for(var d=this._applyRule(a,f),p=0,m=d.length;m>p;p++){var g=d[p]
if(t(g,[]),f.combineable)for(var v=c+1;u>v;v++){var y=s[v],x=this.rules[y]
if(x&&x.combineable&&f.type!=x.type)for(var b=this._applyRule(g,x),w=0,k=b.length;k>w;w++){t(b[w],[])}}}h in this.compoundRuleCodes&&this.compoundRuleCodes[h].push(a)}}else t(a.trim(),[])}return r},_removeDicComments:function(e){return e.replace(/^\t.*$/gm,"")},parseRuleCodes:function(e){if(!e)return[]
if(!("FLAG"in this.flags))return e.split("")
if("long"===this.flags.FLAG){for(var t=[],n=0,r=e.length;r>n;n+=2)t.push(e.substr(n,2))
return t}return"num"===this.flags.FLAG?textCode.split(","):void 0},_applyRule:function(e,t){for(var n=t.entries,r=[],i=0,o=n.length;o>i;i++){var l=n[i]
if(!l.match||e.match(l.match)){var a=e
if(l.remove&&(a=a.replace(l.remove,"")),"SFX"===t.type?a+=l.add:a=l.add+a,r.push(a),"continuationClasses"in l)for(var s=0,c=l.continuationClasses.length;c>s;s++){var u=this.rules[l.continuationClasses[s]]
u&&(r=r.concat(this._applyRule(a,u)))}}}return r},check:function(e){var t=e.replace(/^\s\s*/,"").replace(/\s\s*$/,"")
if(this.checkExact(t))return!0
if(t.toUpperCase()===t){var n=t[0]+t.substring(1).toLowerCase()
if(this.hasFlag(n,"KEEPCASE"))return!1
if(this.checkExact(n))return!0}var r=t.toLowerCase()
if(r!==t){if(this.hasFlag(r,"KEEPCASE"))return!1
if(this.checkExact(r))return!0}return!1},checkExact:function(e){var t=this.dictionaryTable[e]
if(void 0===t){if("COMPOUNDMIN"in this.flags&&e.length>=this.flags.COMPOUNDMIN)for(var n=0,r=this.compoundRules.length;r>n;n++)if(e.match(this.compoundRules[n]))return!0
return!1}if("object"==typeof t){for(n=0,r=t.length;r>n;n++)if(!this.hasFlag(e,"ONLYINCOMPOUND",t[n]))return!0
return!1}},hasFlag:function(e,t,n){if(t in this.flags){if(void 0===n)n=Array.prototype.concat.apply([],this.dictionaryTable[e])
if(n&&-1!==n.indexOf(this.flags[t]))return!0}return!1},alphabet:"",suggest:function(e,t){function n(e){for(var t=[],n=0,r=e.length;r>n;n++){for(var i=e[n],o=[],l=0,a=i.length+1;a>l;l++)o.push([i.substring(0,l),i.substring(l,i.length)])
var c=[]
for(l=0,a=o.length;a>l;l++){(p=o[l])[1]&&c.push(p[0]+p[1].substring(1))}var u=[]
for(l=0,a=o.length;a>l;l++){(p=o[l])[1].length>1&&u.push(p[0]+p[1][1]+p[1][0]+p[1].substring(2))}var h=[]
for(l=0,a=o.length;a>l;l++){if((p=o[l])[1])for(var f=0,d=s.alphabet.length;d>f;f++)h.push(p[0]+s.alphabet[f]+p[1].substring(1))}for(l=0,a=o.length;a>l;l++){var p
if((p=o[l])[1])for(f=0,d=s.alphabet.length;d>f;f++)h.push(p[0]+s.alphabet[f]+p[1])}t=(t=(t=(t=t.concat(c)).concat(u)).concat(h)).concat([])}return t}function r(e){for(var t=[],n=0;n<e.length;n++)s.check(e[n])&&t.push(e[n])
return t}if(t||(t=5),this.check(e))return[]
for(var i=0,o=this.replacementTable.length;o>i;i++){var l=this.replacementTable[i]
if(-1!==e.indexOf(l[0])){var a=e.replace(l[0],l[1])
if(this.check(a))return[a]}}var s=this
return s.alphabet="abcdefghijklmnopqrstuvwxyz",function(e){for(var i=n([e]),o=n(i),l=r(i).concat(r(o)),a={},c=0,u=l.length;u>c;c++)l[c]in a?a[l[c]]+=1:a[l[c]]=1
var h=[]
for(var c in a)h.push([c,a[c]])
h.sort((function(e,t){return e[1]<t[1]?-1:1})).reverse()
var f=[]
for(c=0,u=Math.min(t,h.length);u>c;c++)s.hasFlag(h[c][0],"NOSUGGEST")||f.push(h[c][0])
return f}(e)}},void 0!==t&&(t.exports=i)}).call(this,e("buffer").Buffer,"/node_modules/typo-js")},{buffer:3,fs:2}],19:[function(e,t,n){var r=e("codemirror")
r.commands.tabAndIndentMarkdownList=function(e){var t=e.listSelections()[0].head
if(!1!==e.getStateAfter(t.line).list)e.execCommand("indentMore")
else if(e.options.indentWithTabs)e.execCommand("insertTab")
else{var n=Array(e.options.tabSize+1).join(" ")
e.replaceSelection(n)}},r.commands.shiftTabAndUnindentMarkdownList=function(e){var t=e.listSelections()[0].head
if(!1!==e.getStateAfter(t.line).list)e.execCommand("indentLess")
else if(e.options.indentWithTabs)e.execCommand("insertTab")
else{var n=Array(e.options.tabSize+1).join(" ")
e.replaceSelection(n)}}},{codemirror:10}],20:[function(e,t,n){"use strict"
function r(e){return j?e.replace("Ctrl","Cmd"):e.replace("Cmd","Ctrl")}function i(e,t,n){e=e||{}
var r=document.createElement("a")
return t=null==t||t,e.title&&t&&(r.title=l(e.title,e.action,n),j&&(r.title=r.title.replace("Ctrl","⌘"),r.title=r.title.replace("Alt","⌥"))),r.tabIndex=-1,r.className=e.className,r}function o(){var e=document.createElement("i")
return e.className="separator",e.innerHTML="|",e}function l(e,t,n){var i,o=e
return t&&(n[i=G(t)]&&(o+=" ("+r(n[i])+")")),o}function a(e,t){t=t||e.getCursor("start")
var n=e.getTokenAt(t)
if(!n.type)return{}
for(var r,i,o=n.type.split(" "),l={},a=0;a<o.length;a++)"strong"===(r=o[a])?l.bold=!0:"variable-2"===r?(i=e.getLine(t.line),/^\s*\d+\.\s/.test(i)?l["ordered-list"]=!0:l["unordered-list"]=!0):"atom"===r?l.quote=!0:"em"===r?l.italic=!0:"quote"===r?l.quote=!0:"strikethrough"===r?l.strikethrough=!0:"comment"===r?l.code=!0:"link"===r?l.link=!0:"tag"===r?l.image=!0:r.match(/^header(\-[1-6])?$/)&&(l[r.replace("header","heading")]=!0)
return l}function s(e){var t=e.codemirror
t.setOption("fullScreen",!t.getOption("fullScreen")),t.getOption("fullScreen")?($=document.body.style.overflow,document.body.style.overflow="hidden"):document.body.style.overflow=$
var n=t.getWrapperElement();/fullscreen/.test(n.previousSibling.className)?n.previousSibling.className=n.previousSibling.className.replace(/\s*fullscreen\b/,""):n.previousSibling.className+=" fullscreen"
var r=e.toolbarElements.fullscreen;/active/.test(r.className)?r.className=r.className.replace(/\s*active\s*/g,""):r.className+=" active"
var i=t.getWrapperElement().nextSibling;/editor-preview-active-side/.test(i.className)&&N(e)}function c(e){P(e,"bold",e.options.blockStyles.bold)}function u(e){P(e,"italic",e.options.blockStyles.italic)}function h(e){P(e,"strikethrough","~~")}function f(e){function t(e){if("object"!=typeof e)throw"fencing_line() takes a 'line' object (not a line number, or line text).  Got: "+typeof e+": "+e
return e.styles&&e.styles[2]&&-1!==e.styles[2].indexOf("formatting-code-block")}function n(e){return e.state.base.base||e.state.base}function r(e,r,i,o,l){i=i||e.getLineHandle(r),o=o||e.getTokenAt({line:r,ch:1}),l=l||!!i.text&&e.getTokenAt({line:r,ch:i.text.length-1})
var a=o.type?o.type.split(" "):[]
return l&&n(l).indentedCode?"indented":-1!==a.indexOf("comment")&&(n(o).fencedChars||n(l).fencedChars||t(i)?"fenced":"single")}var i,o,l,a=e.options.blockStyles.code,s=e.codemirror,c=s.getCursor("start"),u=s.getCursor("end"),h=s.getTokenAt({line:c.line,ch:c.ch||1}),f=s.getLineHandle(c.line),d=r(s,c.line,f,h)
if("single"===d){var p=f.text.slice(0,c.ch).replace("`",""),m=f.text.slice(c.ch).replace("`","")
s.replaceRange(p+m,{line:c.line,ch:0},{line:c.line,ch:99999999999999}),c.ch--,c!==u&&u.ch--,s.setSelection(c,u),s.focus()}else if("fenced"===d)if(c.line!==u.line||c.ch!==u.ch){for(i=c.line;i>=0&&!t(f=s.getLineHandle(i));i--);var g,v,y,x,b=n(s.getTokenAt({line:i,ch:1})).fencedChars
t(s.getLineHandle(c.line))?(g="",v=c.line):t(s.getLineHandle(c.line-1))?(g="",v=c.line-1):(g=b+"\n",v=c.line),t(s.getLineHandle(u.line))?(y="",x=u.line,0===u.ch&&(x+=1)):0!==u.ch&&t(s.getLineHandle(u.line+1))?(y="",x=u.line+1):(y=b+"\n",x=u.line+1),0===u.ch&&(x-=1),s.operation((function(){s.replaceRange(y,{line:x,ch:0},{line:x+(y?0:1),ch:0}),s.replaceRange(g,{line:v,ch:0},{line:v+(g?0:1),ch:0})})),s.setSelection({line:v+(g?1:0),ch:0},{line:x+(g?1:-1),ch:0}),s.focus()}else{var w=c.line
if(t(s.getLineHandle(c.line))&&("fenced"===r(s,c.line+1)?(i=c.line,w=c.line+1):(o=c.line,w=c.line-1)),void 0===i)for(i=w;i>=0&&!t(f=s.getLineHandle(i));i--);if(void 0===o)for(l=s.lineCount(),o=w;l>o&&!t(f=s.getLineHandle(o));o++);s.operation((function(){s.replaceRange("",{line:i,ch:0},{line:i+1,ch:0}),s.replaceRange("",{line:o-1,ch:0},{line:o,ch:0})})),s.focus()}else if("indented"===d){if(c.line!==u.line||c.ch!==u.ch)i=c.line,o=u.line,0===u.ch&&o--
else{for(i=c.line;i>=0;i--)if(!(f=s.getLineHandle(i)).text.match(/^\s*$/)&&"indented"!==r(s,i,f)){i+=1
break}for(l=s.lineCount(),o=c.line;l>o;o++)if(!(f=s.getLineHandle(o)).text.match(/^\s*$/)&&"indented"!==r(s,o,f)){o-=1
break}}var k=s.getLineHandle(o+1),S=k&&s.getTokenAt({line:o+1,ch:k.text.length-1})
S&&n(S).indentedCode&&s.replaceRange("\n",{line:o+1,ch:0})
for(var C=i;o>=C;C++)s.indentLine(C,"subtract")
s.focus()}else{var L=c.line===u.line&&c.ch===u.ch&&0===c.ch,T=c.line!==u.line
L||T?function(e,t,n,r){var i=t.line+1,o=n.line+1,l=t.line!==n.line,a=r+"\n",s="\n"+r
l&&o++,l&&0===n.ch&&(s=r+"\n",o--),E(e,!1,[a,s]),e.setSelection({line:i,ch:0},{line:o,ch:0})}(s,c,u,a):E(s,!1,["`","`"])}}function d(e){I(e.codemirror,"quote")}function p(e){O(e.codemirror,"smaller")}function m(e){O(e.codemirror,"bigger")}function g(e){O(e.codemirror,void 0,1)}function v(e){O(e.codemirror,void 0,2)}function y(e){O(e.codemirror,void 0,3)}function x(e){I(e.codemirror,"unordered-list")}function b(e){I(e.codemirror,"ordered-list")}function w(e){(function(e){if(!/editor-preview-active/.test(e.getWrapperElement().lastChild.className))for(var t,n=e.getCursor("start"),r=e.getCursor("end"),i=n.line;i<=r.line;i++)t=(t=e.getLine(i)).replace(/^[ ]*([# ]+|\*|\-|[> ]+|[0-9]+(.|\)))[ ]*/,""),e.replaceRange(t,{line:i,ch:0},{line:i,ch:99999999999999})})(e.codemirror)}function k(e){var t=e.codemirror,n=a(t),r=e.options,i="http://"
return!(r.promptURLs&&(i=prompt(r.promptTexts.link),!i))&&void E(t,n.link,r.insertTexts.link,i)}function S(e){var t=e.codemirror,n=a(t),r=e.options,i="http://"
return!(r.promptURLs&&(i=prompt(r.promptTexts.image),!i))&&void E(t,n.image,r.insertTexts.image,i)}function C(e){var t=e.codemirror,n=a(t),r=e.options
E(t,n.table,r.insertTexts.table)}function L(e){var t=e.codemirror,n=a(t),r=e.options
E(t,n.image,r.insertTexts.horizontalRule)}function T(e){var t=e.codemirror
t.undo(),t.focus()}function M(e){var t=e.codemirror
t.redo(),t.focus()}function N(e){var t=e.codemirror,n=t.getWrapperElement(),r=n.nextSibling,i=e.toolbarElements["side-by-side"],o=!1;/editor-preview-active-side/.test(r.className)?(r.className=r.className.replace(/\s*editor-preview-active-side\s*/g,""),i.className=i.className.replace(/\s*active\s*/g,""),n.className=n.className.replace(/\s*CodeMirror-sided\s*/g," ")):(setTimeout((function(){t.getOption("fullScreen")||s(e),r.className+=" editor-preview-active-side"}),1),i.className+=" active",n.className+=" CodeMirror-sided",o=!0)
var l=n.lastChild
if(/editor-preview-active/.test(l.className)){l.className=l.className.replace(/\s*editor-preview-active\s*/g,"")
var a=e.toolbarElements.preview,c=n.previousSibling
a.className=a.className.replace(/\s*active\s*/g,""),c.className=c.className.replace(/\s*disabled-for-preview*/g,"")}t.sideBySideRenderingFunction||(t.sideBySideRenderingFunction=function(){r.innerHTML=e.options.previewRender(e.value(),r)}),o?(r.innerHTML=e.options.previewRender(e.value(),r),t.on("update",t.sideBySideRenderingFunction)):t.off("update",t.sideBySideRenderingFunction),t.refresh()}function A(e){var t=e.codemirror,n=t.getWrapperElement(),r=n.previousSibling,i=!!e.options.toolbar&&e.toolbarElements.preview,o=n.lastChild
o&&/editor-preview/.test(o.className)||((o=document.createElement("div")).className="editor-preview",n.appendChild(o)),/editor-preview-active/.test(o.className)?(o.className=o.className.replace(/\s*editor-preview-active\s*/g,""),i&&(i.className=i.className.replace(/\s*active\s*/g,""),r.className=r.className.replace(/\s*disabled-for-preview*/g,""))):(setTimeout((function(){o.className+=" editor-preview-active"}),1),i&&(i.className+=" active",r.className+=" disabled-for-preview")),o.innerHTML=e.options.previewRender(e.value(),o)
var l=t.getWrapperElement().nextSibling;/editor-preview-active-side/.test(l.className)&&N(e)}function E(e,t,n,r){if(!/editor-preview-active/.test(e.getWrapperElement().lastChild.className)){var i,o=n[0],l=n[1],a=e.getCursor("start"),s=e.getCursor("end")
r&&(l=l.replace("#url#",r)),t?(o=(i=e.getLine(a.line)).slice(0,a.ch),l=i.slice(a.ch),e.replaceRange(o+l,{line:a.line,ch:0})):(i=e.getSelection(),e.replaceSelection(o+i+l),a.ch+=o.length,a!==s&&(s.ch+=o.length)),e.setSelection(a,s),e.focus()}}function O(e,t,n){if(!/editor-preview-active/.test(e.getWrapperElement().lastChild.className)){for(var r=e.getCursor("start"),i=e.getCursor("end"),o=r.line;o<=i.line;o++)!function(r){var i=e.getLine(r),o=i.search(/[^#]/)
i=void 0!==t?0>=o?"bigger"==t?"###### "+i:"# "+i:6==o&&"smaller"==t?i.substr(7):1==o&&"bigger"==t?i.substr(2):"bigger"==t?i.substr(1):"#"+i:1==n?0>=o?"# "+i:o==n?i.substr(o+1):"# "+i.substr(o+1):2==n?0>=o?"## "+i:o==n?i.substr(o+1):"## "+i.substr(o+1):0>=o?"### "+i:o==n?i.substr(o+1):"### "+i.substr(o+1),e.replaceRange(i,{line:r,ch:0},{line:r,ch:99999999999999})}(o)
e.focus()}}function I(e,t){if(!/editor-preview-active/.test(e.getWrapperElement().lastChild.className)){for(var n=a(e),r=e.getCursor("start"),i=e.getCursor("end"),o={quote:/^(\s*)\>\s+/,"unordered-list":/^(\s*)(\*|\-|\+)\s+/,"ordered-list":/^(\s*)\d+\.\s+/},l={quote:"> ","unordered-list":"* ","ordered-list":"1. "},s=r.line;s<=i.line;s++)!function(r){var i=e.getLine(r)
i=n[t]?i.replace(o[t],"$1"):l[t]+i,e.replaceRange(i,{line:r,ch:0},{line:r,ch:99999999999999})}(s)
e.focus()}}function P(e,t,n,r){if(!/editor-preview-active/.test(e.codemirror.getWrapperElement().lastChild.className)){r=void 0===r?n:r
var i,o=e.codemirror,l=a(o),s=n,c=r,u=o.getCursor("start"),h=o.getCursor("end")
l[t]?(s=(i=o.getLine(u.line)).slice(0,u.ch),c=i.slice(u.ch),"bold"==t?(s=s.replace(/(\*\*|__)(?![\s\S]*(\*\*|__))/,""),c=c.replace(/(\*\*|__)/,"")):"italic"==t?(s=s.replace(/(\*|_)(?![\s\S]*(\*|_))/,""),c=c.replace(/(\*|_)/,"")):"strikethrough"==t&&(s=s.replace(/(\*\*|~~)(?![\s\S]*(\*\*|~~))/,""),c=c.replace(/(\*\*|~~)/,"")),o.replaceRange(s+c,{line:u.line,ch:0},{line:u.line,ch:99999999999999}),"bold"==t||"strikethrough"==t?(u.ch-=2,u!==h&&(h.ch-=2)):"italic"==t&&(u.ch-=1,u!==h&&(h.ch-=1))):(i=o.getSelection(),"bold"==t?i=(i=i.split("**").join("")).split("__").join(""):"italic"==t?i=(i=i.split("*").join("")).split("_").join(""):"strikethrough"==t&&(i=i.split("~~").join("")),o.replaceSelection(s+i+c),u.ch+=n.length,h.ch=u.ch+i.length),o.setSelection(u,h),o.focus()}}function R(e,t){for(var n in t)t.hasOwnProperty(n)&&(t[n]instanceof Array?e[n]=t[n].concat(e[n]instanceof Array?e[n]:[]):null!==t[n]&&"object"==typeof t[n]&&t[n].constructor===Object?e[n]=R(e[n]||{},t[n]):e[n]=t[n])
return e}function D(e){for(var t=1;t<arguments.length;t++)e=R(e,arguments[t])
return e}function H(e){var t=e.match(/[a-zA-Z0-9_\u0392-\u03c9\u0410-\u04F9]+|[\u4E00-\u9FFF\u3400-\u4dbf\uf900-\ufaff\u3040-\u309f\uac00-\ud7af]+/g),n=0
if(null===t)return n
for(var r=0;r<t.length;r++)n+=t[r].charCodeAt(0)>=19968?t[r].length:1
return n}function W(e){(e=e||{}).parent=this
var t=!0
if(!1===e.autoDownloadFontAwesome&&(t=!1),!0!==e.autoDownloadFontAwesome)for(var n=document.styleSheets,r=0;r<n.length;r++)n[r].href&&n[r].href.indexOf("http://maxcdn.bootstrapcdn.com/font-awesome/")>-1&&(t=!1)
if(t){var i=document.createElement("link")
i.rel="stylesheet",i.href="../../../maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css",document.getElementsByTagName("head")[0].appendChild(i)}if(e.element)this.element=e.element
else if(null===e.element)return void console.log("SimpleMDE: Error. No element was found.")
if(void 0===e.toolbar)for(var o in e.toolbar=[],V)V.hasOwnProperty(o)&&(-1!=o.indexOf("separator-")&&e.toolbar.push("|"),(!0===V[o].default||e.showIcons&&e.showIcons.constructor===Array&&-1!=e.showIcons.indexOf(o))&&e.toolbar.push(o))
e.hasOwnProperty("status")||(e.status=["autosave","lines","words","cursor"]),e.previewRender||(e.previewRender=function(e){return this.parent.markdown(e)}),e.parsingConfig=D({highlightFormatting:!0},e.parsingConfig||{}),e.insertTexts=D({},K,e.insertTexts||{}),e.promptTexts=X,e.blockStyles=D({},Z,e.blockStyles||{}),e.shortcuts=D({},q,e.shortcuts||{}),null!=e.autosave&&null!=e.autosave.unique_id&&""!=e.autosave.unique_id&&(e.autosave.uniqueId=e.autosave.unique_id),this.options=e,this.render(),!e.initialValue||this.options.autosave&&!0===this.options.autosave.foundSavedValue||this.value(e.initialValue)}function B(){if("object"!=typeof localStorage)return!1
try{localStorage.setItem("smde_localStorage",1),localStorage.removeItem("smde_localStorage")}catch(e){return!1}return!0}var _=e("codemirror")
e("codemirror/addon/edit/continuelist.html"),e("./codemirror/tablist"),e("codemirror/addon/display/fullscreen.html"),e("codemirror/mode/markdown/markdown.html"),e("codemirror/addon/mode/overlay.html"),e("codemirror/addon/display/placeholder.html"),e("codemirror/addon/selection/mark-selection.html"),e("codemirror/mode/gfm/gfm.html"),e("codemirror/mode/xml/xml.html")
var F=e("codemirror-spell-checker"),z=e("marked"),j=/Mac/.test(navigator.platform),U={toggleBold:c,toggleItalic:u,drawLink:k,toggleHeadingSmaller:p,toggleHeadingBigger:m,drawImage:S,toggleBlockquote:d,toggleOrderedList:b,toggleUnorderedList:x,toggleCodeBlock:f,togglePreview:A,toggleStrikethrough:h,toggleHeading1:g,toggleHeading2:v,toggleHeading3:y,cleanBlock:w,drawTable:C,drawHorizontalRule:L,undo:T,redo:M,toggleSideBySide:N,toggleFullScreen:s},q={toggleBold:"Cmd-B",toggleItalic:"Cmd-I",drawLink:"Cmd-K",toggleHeadingSmaller:"Cmd-H",toggleHeadingBigger:"Shift-Cmd-H",cleanBlock:"Cmd-E",drawImage:"Cmd-Alt-I",toggleBlockquote:"Cmd-'",toggleOrderedList:"Cmd-Alt-L",toggleUnorderedList:"Cmd-L",toggleCodeBlock:"Cmd-Alt-C",togglePreview:"Cmd-P",toggleSideBySide:"F9",toggleFullScreen:"F11"},G=function(e){for(var t in U)if(U[t]===e)return t
return null},Y=function(){var e=!1
return function(t){(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(t)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0,4)))&&(e=!0)}(navigator.userAgent||navigator.vendor||window.opera),e},$="",V={bold:{name:"bold",action:c,className:"fa fa-bold",title:"Bold",default:!0},italic:{name:"italic",action:u,className:"fa fa-italic",title:"Italic",default:!0},strikethrough:{name:"strikethrough",action:h,className:"fa fa-strikethrough",title:"Strikethrough"},heading:{name:"heading",action:p,className:"fa fa-header",title:"Heading",default:!0},"heading-smaller":{name:"heading-smaller",action:p,className:"fa fa-header fa-header-x fa-header-smaller",title:"Smaller Heading"},"heading-bigger":{name:"heading-bigger",action:m,className:"fa fa-header fa-header-x fa-header-bigger",title:"Bigger Heading"},"heading-1":{name:"heading-1",action:g,className:"fa fa-header fa-header-x fa-header-1",title:"Big Heading"},"heading-2":{name:"heading-2",action:v,className:"fa fa-header fa-header-x fa-header-2",title:"Medium Heading"},"heading-3":{name:"heading-3",action:y,className:"fa fa-header fa-header-x fa-header-3",title:"Small Heading"},"separator-1":{name:"separator-1"},code:{name:"code",action:f,className:"fa fa-code",title:"Code"},quote:{name:"quote",action:d,className:"fa fa-quote-left",title:"Quote",default:!0},"unordered-list":{name:"unordered-list",action:x,className:"fa fa-list-ul",title:"Generic List",default:!0},"ordered-list":{name:"ordered-list",action:b,className:"fa fa-list-ol",title:"Numbered List",default:!0},"clean-block":{name:"clean-block",action:w,className:"fa fa-eraser fa-clean-block",title:"Clean block"},"separator-2":{name:"separator-2"},link:{name:"link",action:k,className:"fa fa-link",title:"Create Link",default:!0},image:{name:"image",action:S,className:"fa fa-picture-o",title:"Insert Image",default:!0},table:{name:"table",action:C,className:"fa fa-table",title:"Insert Table"},"horizontal-rule":{name:"horizontal-rule",action:L,className:"fa fa-minus",title:"Insert Horizontal Line"},"separator-3":{name:"separator-3"},preview:{name:"preview",action:A,className:"fa fa-eye no-disable",title:"Toggle Preview",default:!0},"side-by-side":{name:"side-by-side",action:N,className:"fa fa-columns no-disable no-mobile",title:"Toggle Side by Side",default:!0},fullscreen:{name:"fullscreen",action:s,className:"fa fa-arrows-alt no-disable no-mobile",title:"Toggle Fullscreen",default:!0},"separator-4":{name:"separator-4"},guide:{name:"guide",action:"https://simplemde.com/markdown-guide",className:"fa fa-question-circle",title:"Markdown Guide",default:!0},"separator-5":{name:"separator-5"},undo:{name:"undo",action:T,className:"fa fa-undo no-disable",title:"Undo"},redo:{name:"redo",action:M,className:"fa fa-repeat no-disable",title:"Redo"}},K={link:["[","](#url#)"],image:["![](","#url#)"],table:["","\n\n| Column 1 | Column 2 | Column 3 |\n| -------- | -------- | -------- |\n| Text     | Text     | Text     |\n\n"],horizontalRule:["","\n\n-----\n\n"]},X={link:"URL for the link:",image:"URL of the image:"},Z={bold:"**",code:"```",italic:"*"}
W.prototype.markdown=function(e){if(z){var t={}
return this.options&&this.options.renderingConfig&&!1===this.options.renderingConfig.singleLineBreaks?t.breaks=!1:t.breaks=!0,this.options&&this.options.renderingConfig&&!0===this.options.renderingConfig.codeSyntaxHighlighting&&window.hljs&&(t.highlight=function(e){return window.hljs.highlightAuto(e).value}),z.setOptions(t),z(e)}},W.prototype.render=function(e){if(e||(e=this.element||document.getElementsByTagName("textarea")[0]),!this._rendered||this._rendered!==e){this.element=e
var t,n,i=this.options,o=this,l={}
for(var a in i.shortcuts)null!==i.shortcuts[a]&&null!==U[a]&&function(e){l[r(i.shortcuts[e])]=function(){U[e](o)}}(a)
if(l.Enter="newlineAndIndentContinueMarkdownList",l.Tab="tabAndIndentMarkdownList",l["Shift-Tab"]="shiftTabAndUnindentMarkdownList",l.Esc=function(e){e.getOption("fullScreen")&&s(o)},document.addEventListener("keydown",(function(e){27==(e=e||window.event).keyCode&&o.codemirror.getOption("fullScreen")&&s(o)}),!1),!1!==i.spellChecker?(t="spell-checker",(n=i.parsingConfig).name="gfm",n.gitHubSpice=!1,F({codeMirrorInstance:_})):((t=i.parsingConfig).name="gfm",t.gitHubSpice=!1),this.codemirror=_.fromTextArea(e,{mode:t,backdrop:n,theme:"paper",tabSize:null!=i.tabSize?i.tabSize:2,indentUnit:null!=i.tabSize?i.tabSize:2,indentWithTabs:!1!==i.indentWithTabs,lineNumbers:!1,autofocus:!0===i.autofocus,extraKeys:l,lineWrapping:!1!==i.lineWrapping,allowDropFileTypes:["text/plain"],placeholder:i.placeholder||e.getAttribute("placeholder")||"",styleSelectedText:null==i.styleSelectedText||i.styleSelectedText}),!0===i.forceSync){var c=this.codemirror
c.on("change",(function(){c.save()}))}this.gui={},!1!==i.toolbar&&(this.gui.toolbar=this.createToolbar()),!1!==i.status&&(this.gui.statusbar=this.createStatusbar()),null!=i.autosave&&!0===i.autosave.enabled&&this.autosave(),this.gui.sideBySide=this.createSideBySide(),this._rendered=this.element
var u=this.codemirror
setTimeout(function(){u.refresh()}.bind(u),0)}},W.prototype.autosave=function(){if(B()){var e=this
if(null==this.options.autosave.uniqueId||""==this.options.autosave.uniqueId)return void console.log("SimpleMDE: You must set a uniqueId to use the autosave feature")
null!=e.element.form&&null!=e.element.form&&e.element.form.addEventListener("submit",(function(){localStorage.removeItem("smde_"+e.options.autosave.uniqueId)})),!0!==this.options.autosave.loaded&&("string"==typeof localStorage.getItem("smde_"+this.options.autosave.uniqueId)&&""!=localStorage.getItem("smde_"+this.options.autosave.uniqueId)&&(this.codemirror.setValue(localStorage.getItem("smde_"+this.options.autosave.uniqueId)),this.options.autosave.foundSavedValue=!0),this.options.autosave.loaded=!0),localStorage.setItem("smde_"+this.options.autosave.uniqueId,e.value())
var t=document.getElementById("autosaved")
if(null!=t&&null!=t&&""!=t){var n=new Date,r=n.getHours(),i=n.getMinutes(),o="am",l=r
l>=12&&(l=r-12,o="pm"),0==l&&(l=12),i=10>i?"0"+i:i,t.innerHTML="Autosaved: "+l+":"+i+" "+o}this.autosaveTimeoutId=setTimeout((function(){e.autosave()}),this.options.autosave.delay||1e4)}else console.log("SimpleMDE: localStorage not available, cannot autosave")},W.prototype.clearAutosavedValue=function(){if(B()){if(null==this.options.autosave||null==this.options.autosave.uniqueId||""==this.options.autosave.uniqueId)return void console.log("SimpleMDE: You must set a uniqueId to clear the autosave value")
localStorage.removeItem("smde_"+this.options.autosave.uniqueId)}else console.log("SimpleMDE: localStorage not available, cannot autosave")},W.prototype.createSideBySide=function(){var e=this.codemirror,t=e.getWrapperElement(),n=t.nextSibling
n&&/editor-preview-side/.test(n.className)||((n=document.createElement("div")).className="editor-preview-side",t.parentNode.insertBefore(n,t.nextSibling))
var r=!1,i=!1
return e.on("scroll",(function(e){if(r)r=!1
else{i=!0
var t=e.getScrollInfo().height-e.getScrollInfo().clientHeight,o=parseFloat(e.getScrollInfo().top)/t,l=(n.scrollHeight-n.clientHeight)*o
n.scrollTop=l}})),n.onscroll=function(){if(i)i=!1
else{r=!0
var t=n.scrollHeight-n.clientHeight,o=parseFloat(n.scrollTop)/t,l=(e.getScrollInfo().height-e.getScrollInfo().clientHeight)*o
e.scrollTo(0,l)}},n},W.prototype.createToolbar=function(e){if((e=e||this.options.toolbar)&&0!==e.length){var t
for(t=0;t<e.length;t++)null!=V[e[t]]&&(e[t]=V[e[t]])
var n=document.createElement("div")
n.className="editor-toolbar"
var r=this,l={}
for(r.toolbar=e,t=0;t<e.length;t++)if(("guide"!=e[t].name||!1!==r.options.toolbarGuideIcon)&&!(r.options.hideIcons&&-1!=r.options.hideIcons.indexOf(e[t].name)||("fullscreen"==e[t].name||"side-by-side"==e[t].name)&&Y())){if("|"===e[t]){for(var s=!1,c=t+1;c<e.length;c++)"|"===e[c]||r.options.hideIcons&&-1!=r.options.hideIcons.indexOf(e[c].name)||(s=!0)
if(!s)continue}!function(e){var t
t="|"===e?o():i(e,r.options.toolbarTips,r.options.shortcuts),e.action&&("function"==typeof e.action?t.onclick=function(t){t.preventDefault(),e.action(r)}:"string"==typeof e.action&&(t.href=e.action,t.target="_blank")),l[e.name||e]=t,n.appendChild(t)}(e[t])}r.toolbarElements=l
var u=this.codemirror
u.on("cursorActivity",(function(){var e=a(u)
for(var t in l)!function(t){var n=l[t]
e[t]?n.className+=" active":"fullscreen"!=t&&"side-by-side"!=t&&(n.className=n.className.replace(/\s*active\s*/g,""))}(t)}))
var h=u.getWrapperElement()
return h.parentNode.insertBefore(n,h),n}},W.prototype.createStatusbar=function(e){e=e||this.options.status
var t=this.options,n=this.codemirror
if(e&&0!==e.length){var r,i,o,l=[]
for(r=0;r<e.length;r++)if(i=void 0,o=void 0,"object"==typeof e[r])l.push({className:e[r].className,defaultValue:e[r].defaultValue,onUpdate:e[r].onUpdate})
else{var a=e[r]
"words"===a?(o=function(e){e.innerHTML=H(n.getValue())},i=function(e){e.innerHTML=H(n.getValue())}):"lines"===a?(o=function(e){e.innerHTML=n.lineCount()},i=function(e){e.innerHTML=n.lineCount()}):"cursor"===a?(o=function(e){e.innerHTML="0:0"},i=function(e){var t=n.getCursor()
e.innerHTML=t.line+":"+t.ch}):"autosave"===a&&(o=function(e){null!=t.autosave&&!0===t.autosave.enabled&&e.setAttribute("id","autosaved")}),l.push({className:a,defaultValue:o,onUpdate:i})}var s=document.createElement("div")
for(s.className="editor-statusbar",r=0;r<l.length;r++){var c=l[r],u=document.createElement("span")
u.className=c.className,"function"==typeof c.defaultValue&&c.defaultValue(u),"function"==typeof c.onUpdate&&this.codemirror.on("update",function(e,t){return function(){t.onUpdate(e)}}(u,c)),s.appendChild(u)}var h=this.codemirror.getWrapperElement()
return h.parentNode.insertBefore(s,h.nextSibling),s}},W.prototype.value=function(e){return void 0===e?this.codemirror.getValue():(this.codemirror.getDoc().setValue(e),this)},W.toggleBold=c,W.toggleItalic=u,W.toggleStrikethrough=h,W.toggleBlockquote=d,W.toggleHeadingSmaller=p,W.toggleHeadingBigger=m,W.toggleHeading1=g,W.toggleHeading2=v,W.toggleHeading3=y,W.toggleCodeBlock=f,W.toggleUnorderedList=x,W.toggleOrderedList=b,W.cleanBlock=w,W.drawLink=k,W.drawImage=S,W.drawTable=C,W.drawHorizontalRule=L,W.undo=T,W.redo=M,W.togglePreview=A,W.toggleSideBySide=N,W.toggleFullScreen=s,W.prototype.toggleBold=function(){c(this)},W.prototype.toggleItalic=function(){u(this)},W.prototype.toggleStrikethrough=function(){h(this)},W.prototype.toggleBlockquote=function(){d(this)},W.prototype.toggleHeadingSmaller=function(){p(this)},W.prototype.toggleHeadingBigger=function(){m(this)},W.prototype.toggleHeading1=function(){g(this)},W.prototype.toggleHeading2=function(){v(this)},W.prototype.toggleHeading3=function(){y(this)},W.prototype.toggleCodeBlock=function(){f(this)},W.prototype.toggleUnorderedList=function(){x(this)},W.prototype.toggleOrderedList=function(){b(this)},W.prototype.cleanBlock=function(){w(this)},W.prototype.drawLink=function(){k(this)},W.prototype.drawImage=function(){S(this)},W.prototype.drawTable=function(){C(this)},W.prototype.drawHorizontalRule=function(){L(this)},W.prototype.undo=function(){T(this)},W.prototype.redo=function(){M(this)},W.prototype.togglePreview=function(){A(this)},W.prototype.toggleSideBySide=function(){N(this)},W.prototype.toggleFullScreen=function(){s(this)},W.prototype.isPreviewActive=function(){var e=this.codemirror.getWrapperElement().lastChild
return/editor-preview-active/.test(e.className)},W.prototype.isSideBySideActive=function(){var e=this.codemirror.getWrapperElement().nextSibling
return/editor-preview-active-side/.test(e.className)},W.prototype.isFullscreenActive=function(){return this.codemirror.getOption("fullScreen")},W.prototype.getState=function(){return a(this.codemirror)},W.prototype.toTextArea=function(){var e=this.codemirror,t=e.getWrapperElement()
t.parentNode&&(this.gui.toolbar&&t.parentNode.removeChild(this.gui.toolbar),this.gui.statusbar&&t.parentNode.removeChild(this.gui.statusbar),this.gui.sideBySide&&t.parentNode.removeChild(this.gui.sideBySide)),e.toTextArea(),this.autosaveTimeoutId&&(clearTimeout(this.autosaveTimeoutId),this.autosaveTimeoutId=void 0,this.clearAutosavedValue())},t.exports=W},{"./codemirror/tablist":19,codemirror:10,"codemirror-spell-checker":4,"codemirror/addon/display/fullscreen.js":5,"codemirror/addon/display/placeholder.js":6,"codemirror/addon/edit/continuelist.js":7,"codemirror/addon/mode/overlay.js":8,"codemirror/addon/selection/mark-selection.js":9,"codemirror/mode/gfm/gfm.js":11,"codemirror/mode/markdown/markdown.js":12,"codemirror/mode/xml/xml.js":14,marked:17}]},{},[20])(20)}))
