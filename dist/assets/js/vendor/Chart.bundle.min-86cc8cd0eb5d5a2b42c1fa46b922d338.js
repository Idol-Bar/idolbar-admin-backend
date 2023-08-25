/*!
 * Chart.js v2.9.3
 * https://www.chartjs.org
 * (c) 2019 Chart.js Contributors
 * Released under the MIT License
 */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t=t||self).Chart=e()}(this,(function(){"use strict"
function t(t,e){return t(e={exports:{}},e.exports),e.exports}"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self&&self
var e={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]},n=t((function(t){var n={}
for(var i in e)e.hasOwnProperty(i)&&(n[e[i]]=i)
var a=t.exports={rgb:{channels:3,labels:"rgb"},hsl:{channels:3,labels:"hsl"},hsv:{channels:3,labels:"hsv"},hwb:{channels:3,labels:"hwb"},cmyk:{channels:4,labels:"cmyk"},xyz:{channels:3,labels:"xyz"},lab:{channels:3,labels:"lab"},lch:{channels:3,labels:"lch"},hex:{channels:1,labels:["hex"]},keyword:{channels:1,labels:["keyword"]},ansi16:{channels:1,labels:["ansi16"]},ansi256:{channels:1,labels:["ansi256"]},hcg:{channels:3,labels:["h","c","g"]},apple:{channels:3,labels:["r16","g16","b16"]},gray:{channels:1,labels:["gray"]}}
for(var r in a)if(a.hasOwnProperty(r)){if(!("channels"in a[r]))throw new Error("missing channels property: "+r)
if(!("labels"in a[r]))throw new Error("missing channel labels property: "+r)
if(a[r].labels.length!==a[r].channels)throw new Error("channel and label counts mismatch: "+r)
var o=a[r].channels,s=a[r].labels
delete a[r].channels,delete a[r].labels,Object.defineProperty(a[r],"channels",{value:o}),Object.defineProperty(a[r],"labels",{value:s})}a.rgb.hsl=function(t){var e,n,i=t[0]/255,a=t[1]/255,r=t[2]/255,o=Math.min(i,a,r),s=Math.max(i,a,r),l=s-o
return s===o?e=0:i===s?e=(a-r)/l:a===s?e=2+(r-i)/l:r===s&&(e=4+(i-a)/l),(e=Math.min(60*e,360))<0&&(e+=360),n=(o+s)/2,[e,100*(s===o?0:n<=.5?l/(s+o):l/(2-s-o)),100*n]},a.rgb.hsv=function(t){var e,n,i,a,r,o=t[0]/255,s=t[1]/255,l=t[2]/255,u=Math.max(o,s,l),d=u-Math.min(o,s,l),h=function(t){return(u-t)/6/d+.5}
return 0===d?a=r=0:(r=d/u,e=h(o),n=h(s),i=h(l),o===u?a=i-n:s===u?a=1/3+e-i:l===u&&(a=2/3+n-e),a<0?a+=1:a>1&&(a-=1)),[360*a,100*r,100*u]},a.rgb.hwb=function(t){var e=t[0],n=t[1],i=t[2]
return[a.rgb.hsl(t)[0],1/255*Math.min(e,Math.min(n,i))*100,100*(i=1-1/255*Math.max(e,Math.max(n,i)))]},a.rgb.cmyk=function(t){var e,n=t[0]/255,i=t[1]/255,a=t[2]/255
return[100*((1-n-(e=Math.min(1-n,1-i,1-a)))/(1-e)||0),100*((1-i-e)/(1-e)||0),100*((1-a-e)/(1-e)||0),100*e]},a.rgb.keyword=function(t){var i=n[t]
if(i)return i
var a,r,o,s=1/0
for(var l in e)if(e.hasOwnProperty(l)){var u=(r=t,o=e[l],Math.pow(r[0]-o[0],2)+Math.pow(r[1]-o[1],2)+Math.pow(r[2]-o[2],2))
u<s&&(s=u,a=l)}return a},a.keyword.rgb=function(t){return e[t]},a.rgb.xyz=function(t){var e=t[0]/255,n=t[1]/255,i=t[2]/255
return[100*(.4124*(e=e>.04045?Math.pow((e+.055)/1.055,2.4):e/12.92)+.3576*(n=n>.04045?Math.pow((n+.055)/1.055,2.4):n/12.92)+.1805*(i=i>.04045?Math.pow((i+.055)/1.055,2.4):i/12.92)),100*(.2126*e+.7152*n+.0722*i),100*(.0193*e+.1192*n+.9505*i)]},a.rgb.lab=function(t){var e=a.rgb.xyz(t),n=e[0],i=e[1],r=e[2]
return i/=100,r/=108.883,n=(n/=95.047)>.008856?Math.pow(n,1/3):7.787*n+16/116,[116*(i=i>.008856?Math.pow(i,1/3):7.787*i+16/116)-16,500*(n-i),200*(i-(r=r>.008856?Math.pow(r,1/3):7.787*r+16/116))]},a.hsl.rgb=function(t){var e,n,i,a,r,o=t[0]/360,s=t[1]/100,l=t[2]/100
if(0===s)return[r=255*l,r,r]
e=2*l-(n=l<.5?l*(1+s):l+s-l*s),a=[0,0,0]
for(var u=0;u<3;u++)(i=o+1/3*-(u-1))<0&&i++,i>1&&i--,r=6*i<1?e+6*(n-e)*i:2*i<1?n:3*i<2?e+(n-e)*(2/3-i)*6:e,a[u]=255*r
return a},a.hsl.hsv=function(t){var e=t[0],n=t[1]/100,i=t[2]/100,a=n,r=Math.max(i,.01)
return n*=(i*=2)<=1?i:2-i,a*=r<=1?r:2-r,[e,100*(0===i?2*a/(r+a):2*n/(i+n)),(i+n)/2*100]},a.hsv.rgb=function(t){var e=t[0]/60,n=t[1]/100,i=t[2]/100,a=Math.floor(e)%6,r=e-Math.floor(e),o=255*i*(1-n),s=255*i*(1-n*r),l=255*i*(1-n*(1-r))
switch(i*=255,a){case 0:return[i,l,o]
case 1:return[s,i,o]
case 2:return[o,i,l]
case 3:return[o,s,i]
case 4:return[l,o,i]
case 5:return[i,o,s]}},a.hsv.hsl=function(t){var e,n,i,a=t[0],r=t[1]/100,o=t[2]/100,s=Math.max(o,.01)
return i=(2-r)*o,n=r*s,[a,100*(n=(n/=(e=(2-r)*s)<=1?e:2-e)||0),100*(i/=2)]},a.hwb.rgb=function(t){var e,n,i,a,r,o,s,l=t[0]/360,u=t[1]/100,d=t[2]/100,h=u+d
switch(h>1&&(u/=h,d/=h),i=6*l-(e=Math.floor(6*l)),0!=(1&e)&&(i=1-i),a=u+i*((n=1-d)-u),e){default:case 6:case 0:r=n,o=a,s=u
break
case 1:r=a,o=n,s=u
break
case 2:r=u,o=n,s=a
break
case 3:r=u,o=a,s=n
break
case 4:r=a,o=u,s=n
break
case 5:r=n,o=u,s=a}return[255*r,255*o,255*s]},a.cmyk.rgb=function(t){var e=t[0]/100,n=t[1]/100,i=t[2]/100,a=t[3]/100
return[255*(1-Math.min(1,e*(1-a)+a)),255*(1-Math.min(1,n*(1-a)+a)),255*(1-Math.min(1,i*(1-a)+a))]},a.xyz.rgb=function(t){var e,n,i,a=t[0]/100,r=t[1]/100,o=t[2]/100
return n=-.9689*a+1.8758*r+.0415*o,i=.0557*a+-.204*r+1.057*o,e=(e=3.2406*a+-1.5372*r+-.4986*o)>.0031308?1.055*Math.pow(e,1/2.4)-.055:12.92*e,n=n>.0031308?1.055*Math.pow(n,1/2.4)-.055:12.92*n,i=i>.0031308?1.055*Math.pow(i,1/2.4)-.055:12.92*i,[255*(e=Math.min(Math.max(0,e),1)),255*(n=Math.min(Math.max(0,n),1)),255*(i=Math.min(Math.max(0,i),1))]},a.xyz.lab=function(t){var e=t[0],n=t[1],i=t[2]
return n/=100,i/=108.883,e=(e/=95.047)>.008856?Math.pow(e,1/3):7.787*e+16/116,[116*(n=n>.008856?Math.pow(n,1/3):7.787*n+16/116)-16,500*(e-n),200*(n-(i=i>.008856?Math.pow(i,1/3):7.787*i+16/116))]},a.lab.xyz=function(t){var e,n,i,a=t[0]
e=t[1]/500+(n=(a+16)/116),i=n-t[2]/200
var r=Math.pow(n,3),o=Math.pow(e,3),s=Math.pow(i,3)
return n=r>.008856?r:(n-16/116)/7.787,e=o>.008856?o:(e-16/116)/7.787,i=s>.008856?s:(i-16/116)/7.787,[e*=95.047,n*=100,i*=108.883]},a.lab.lch=function(t){var e,n=t[0],i=t[1],a=t[2]
return(e=360*Math.atan2(a,i)/2/Math.PI)<0&&(e+=360),[n,Math.sqrt(i*i+a*a),e]},a.lch.lab=function(t){var e,n=t[0],i=t[1]
return e=t[2]/360*2*Math.PI,[n,i*Math.cos(e),i*Math.sin(e)]},a.rgb.ansi16=function(t){var e=t[0],n=t[1],i=t[2],r=1 in arguments?arguments[1]:a.rgb.hsv(t)[2]
if(0===(r=Math.round(r/50)))return 30
var o=30+(Math.round(i/255)<<2|Math.round(n/255)<<1|Math.round(e/255))
return 2===r&&(o+=60),o},a.hsv.ansi16=function(t){return a.rgb.ansi16(a.hsv.rgb(t),t[2])},a.rgb.ansi256=function(t){var e=t[0],n=t[1],i=t[2]
return e===n&&n===i?e<8?16:e>248?231:Math.round((e-8)/247*24)+232:16+36*Math.round(e/255*5)+6*Math.round(n/255*5)+Math.round(i/255*5)},a.ansi16.rgb=function(t){var e=t%10
if(0===e||7===e)return t>50&&(e+=3.5),[e=e/10.5*255,e,e]
var n=.5*(1+~~(t>50))
return[(1&e)*n*255,(e>>1&1)*n*255,(e>>2&1)*n*255]},a.ansi256.rgb=function(t){if(t>=232){var e=10*(t-232)+8
return[e,e,e]}var n
return t-=16,[Math.floor(t/36)/5*255,Math.floor((n=t%36)/6)/5*255,n%6/5*255]},a.rgb.hex=function(t){var e=(((255&Math.round(t[0]))<<16)+((255&Math.round(t[1]))<<8)+(255&Math.round(t[2]))).toString(16).toUpperCase()
return"000000".substring(e.length)+e},a.hex.rgb=function(t){var e=t.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i)
if(!e)return[0,0,0]
var n=e[0]
3===e[0].length&&(n=n.split("").map((function(t){return t+t})).join(""))
var i=parseInt(n,16)
return[i>>16&255,i>>8&255,255&i]},a.rgb.hcg=function(t){var e,n=t[0]/255,i=t[1]/255,a=t[2]/255,r=Math.max(Math.max(n,i),a),o=Math.min(Math.min(n,i),a),s=r-o
return e=s<=0?0:r===n?(i-a)/s%6:r===i?2+(a-n)/s:4+(n-i)/s+4,e/=6,[360*(e%=1),100*s,100*(s<1?o/(1-s):0)]},a.hsl.hcg=function(t){var e,n=t[1]/100,i=t[2]/100,a=0
return(e=i<.5?2*n*i:2*n*(1-i))<1&&(a=(i-.5*e)/(1-e)),[t[0],100*e,100*a]},a.hsv.hcg=function(t){var e=t[1]/100,n=t[2]/100,i=e*n,a=0
return i<1&&(a=(n-i)/(1-i)),[t[0],100*i,100*a]},a.hcg.rgb=function(t){var e=t[0]/360,n=t[1]/100,i=t[2]/100
if(0===n)return[255*i,255*i,255*i]
var a,r=[0,0,0],o=e%1*6,s=o%1,l=1-s
switch(Math.floor(o)){case 0:r[0]=1,r[1]=s,r[2]=0
break
case 1:r[0]=l,r[1]=1,r[2]=0
break
case 2:r[0]=0,r[1]=1,r[2]=s
break
case 3:r[0]=0,r[1]=l,r[2]=1
break
case 4:r[0]=s,r[1]=0,r[2]=1
break
default:r[0]=1,r[1]=0,r[2]=l}return a=(1-n)*i,[255*(n*r[0]+a),255*(n*r[1]+a),255*(n*r[2]+a)]},a.hcg.hsv=function(t){var e=t[1]/100,n=e+t[2]/100*(1-e),i=0
return n>0&&(i=e/n),[t[0],100*i,100*n]},a.hcg.hsl=function(t){var e=t[1]/100,n=t[2]/100*(1-e)+.5*e,i=0
return n>0&&n<.5?i=e/(2*n):n>=.5&&n<1&&(i=e/(2*(1-n))),[t[0],100*i,100*n]},a.hcg.hwb=function(t){var e=t[1]/100,n=e+t[2]/100*(1-e)
return[t[0],100*(n-e),100*(1-n)]},a.hwb.hcg=function(t){var e=t[1]/100,n=1-t[2]/100,i=n-e,a=0
return i<1&&(a=(n-i)/(1-i)),[t[0],100*i,100*a]},a.apple.rgb=function(t){return[t[0]/65535*255,t[1]/65535*255,t[2]/65535*255]},a.rgb.apple=function(t){return[t[0]/255*65535,t[1]/255*65535,t[2]/255*65535]},a.gray.rgb=function(t){return[t[0]/100*255,t[0]/100*255,t[0]/100*255]},a.gray.hsl=a.gray.hsv=function(t){return[0,0,t[0]]},a.gray.hwb=function(t){return[0,100,t[0]]},a.gray.cmyk=function(t){return[0,0,0,t[0]]},a.gray.lab=function(t){return[t[0],0,0]},a.gray.hex=function(t){var e=255&Math.round(t[0]/100*255),n=((e<<16)+(e<<8)+e).toString(16).toUpperCase()
return"000000".substring(n.length)+n},a.rgb.gray=function(t){return[(t[0]+t[1]+t[2])/3/255*100]}}))
function i(t){var e=function(){for(var t={},e=Object.keys(n),i=e.length,a=0;a<i;a++)t[e[a]]={distance:-1,parent:null}
return t}(),i=[t]
for(e[t].distance=0;i.length;)for(var a=i.pop(),r=Object.keys(n[a]),o=r.length,s=0;s<o;s++){var l=r[s],u=e[l];-1===u.distance&&(u.distance=e[a].distance+1,u.parent=a,i.unshift(l))}return e}function a(t,e){return function(n){return e(t(n))}}function r(t,e){for(var i=[e[t].parent,t],r=n[e[t].parent][t],o=e[t].parent;e[o].parent;)i.unshift(e[o].parent),r=a(n[e[o].parent][o],r),o=e[o].parent
return r.conversion=i,r}n.rgb,n.hsl,n.hsv,n.hwb,n.cmyk,n.xyz,n.lab,n.lch,n.hex,n.keyword,n.ansi16,n.ansi256,n.hcg,n.apple,n.gray
var o={}
Object.keys(n).forEach((function(t){o[t]={},Object.defineProperty(o[t],"channels",{value:n[t].channels}),Object.defineProperty(o[t],"labels",{value:n[t].labels})
var e=function(t){for(var e=i(t),n={},a=Object.keys(e),o=a.length,s=0;s<o;s++){var l=a[s]
null!==e[l].parent&&(n[l]=r(l,e))}return n}(t)
Object.keys(e).forEach((function(n){var i=e[n]
o[t][n]=function(t){var e=function(e){if(null==e)return e
arguments.length>1&&(e=Array.prototype.slice.call(arguments))
var n=t(e)
if("object"==typeof n)for(var i=n.length,a=0;a<i;a++)n[a]=Math.round(n[a])
return n}
return"conversion"in t&&(e.conversion=t.conversion),e}(i),o[t][n].raw=function(t){var e=function(e){return null==e?e:(arguments.length>1&&(e=Array.prototype.slice.call(arguments)),t(e))}
return"conversion"in t&&(e.conversion=t.conversion),e}(i)}))}))
var s=o,l={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]},u={getRgba:d,getHsla:h,getRgb:function(t){var e=d(t)
return e&&e.slice(0,3)},getHsl:function(t){var e=h(t)
return e&&e.slice(0,3)},getHwb:c,getAlpha:function(t){var e=d(t)
return e||(e=h(t))||(e=c(t))?e[3]:void 0},hexString:function(t,e){return e=void 0!==e&&3===t.length?e:t[3],"#"+v(t[0])+v(t[1])+v(t[2])+(e>=0&&e<1?v(Math.round(255*e)):"")},rgbString:function(t,e){return e<1||t[3]&&t[3]<1?f(t,e):"rgb("+t[0]+", "+t[1]+", "+t[2]+")"},rgbaString:f,percentString:function(t,e){return e<1||t[3]&&t[3]<1?g(t,e):"rgb("+Math.round(t[0]/255*100)+"%, "+Math.round(t[1]/255*100)+"%, "+Math.round(t[2]/255*100)+"%)"},percentaString:g,hslString:function(t,e){return e<1||t[3]&&t[3]<1?m(t,e):"hsl("+t[0]+", "+t[1]+"%, "+t[2]+"%)"},hslaString:m,hwbString:function(t,e){return void 0===e&&(e=void 0!==t[3]?t[3]:1),"hwb("+t[0]+", "+t[1]+"%, "+t[2]+"%"+(void 0!==e&&1!==e?", "+e:"")+")"},keyword:function(t){return b[t.slice(0,3)]}}
function d(t){if(t){var e=[0,0,0],n=1,i=t.match(/^#([a-fA-F0-9]{3,4})$/i),a=""
if(i){a=(i=i[1])[3]
for(var r=0;r<e.length;r++)e[r]=parseInt(i[r]+i[r],16)
a&&(n=Math.round(parseInt(a+a,16)/255*100)/100)}else if(i=t.match(/^#([a-fA-F0-9]{6}([a-fA-F0-9]{2})?)$/i)){for(a=i[2],i=i[1],r=0;r<e.length;r++)e[r]=parseInt(i.slice(2*r,2*r+2),16)
a&&(n=Math.round(parseInt(a,16)/255*100)/100)}else if(i=t.match(/^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i)){for(r=0;r<e.length;r++)e[r]=parseInt(i[r+1])
n=parseFloat(i[4])}else if(i=t.match(/^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i)){for(r=0;r<e.length;r++)e[r]=Math.round(2.55*parseFloat(i[r+1]))
n=parseFloat(i[4])}else if(i=t.match(/(\w+)/)){if("transparent"==i[1])return[0,0,0,0]
if(!(e=l[i[1]]))return}for(r=0;r<e.length;r++)e[r]=p(e[r],0,255)
return n=n||0==n?p(n,0,1):1,e[3]=n,e}}function h(t){if(t){var e=t.match(/^hsla?\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/)
if(e){var n=parseFloat(e[4])
return[p(parseInt(e[1]),0,360),p(parseFloat(e[2]),0,100),p(parseFloat(e[3]),0,100),p(isNaN(n)?1:n,0,1)]}}}function c(t){if(t){var e=t.match(/^hwb\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/)
if(e){var n=parseFloat(e[4])
return[p(parseInt(e[1]),0,360),p(parseFloat(e[2]),0,100),p(parseFloat(e[3]),0,100),p(isNaN(n)?1:n,0,1)]}}}function f(t,e){return void 0===e&&(e=void 0!==t[3]?t[3]:1),"rgba("+t[0]+", "+t[1]+", "+t[2]+", "+e+")"}function g(t,e){return"rgba("+Math.round(t[0]/255*100)+"%, "+Math.round(t[1]/255*100)+"%, "+Math.round(t[2]/255*100)+"%, "+(e||t[3]||1)+")"}function m(t,e){return void 0===e&&(e=void 0!==t[3]?t[3]:1),"hsla("+t[0]+", "+t[1]+"%, "+t[2]+"%, "+e+")"}function p(t,e,n){return Math.min(Math.max(e,t),n)}function v(t){var e=t.toString(16).toUpperCase()
return e.length<2?"0"+e:e}var b={}
for(var y in l)b[l[y]]=y
var x=function(t){return t instanceof x?t:this instanceof x?(this.valid=!1,this.values={rgb:[0,0,0],hsl:[0,0,0],hsv:[0,0,0],hwb:[0,0,0],cmyk:[0,0,0,0],alpha:1},void("string"==typeof t?(e=u.getRgba(t))?this.setValues("rgb",e):(e=u.getHsla(t))?this.setValues("hsl",e):(e=u.getHwb(t))&&this.setValues("hwb",e):"object"==typeof t&&(void 0!==(e=t).r||void 0!==e.red?this.setValues("rgb",e):void 0!==e.l||void 0!==e.lightness?this.setValues("hsl",e):void 0!==e.v||void 0!==e.value?this.setValues("hsv",e):void 0!==e.w||void 0!==e.whiteness?this.setValues("hwb",e):void 0===e.c&&void 0===e.cyan||this.setValues("cmyk",e)))):new x(t)
var e}
x.prototype={isValid:function(){return this.valid},rgb:function(){return this.setSpace("rgb",arguments)},hsl:function(){return this.setSpace("hsl",arguments)},hsv:function(){return this.setSpace("hsv",arguments)},hwb:function(){return this.setSpace("hwb",arguments)},cmyk:function(){return this.setSpace("cmyk",arguments)},rgbArray:function(){return this.values.rgb},hslArray:function(){return this.values.hsl},hsvArray:function(){return this.values.hsv},hwbArray:function(){var t=this.values
return 1!==t.alpha?t.hwb.concat([t.alpha]):t.hwb},cmykArray:function(){return this.values.cmyk},rgbaArray:function(){var t=this.values
return t.rgb.concat([t.alpha])},hslaArray:function(){var t=this.values
return t.hsl.concat([t.alpha])},alpha:function(t){return void 0===t?this.values.alpha:(this.setValues("alpha",t),this)},red:function(t){return this.setChannel("rgb",0,t)},green:function(t){return this.setChannel("rgb",1,t)},blue:function(t){return this.setChannel("rgb",2,t)},hue:function(t){return t&&(t=(t%=360)<0?360+t:t),this.setChannel("hsl",0,t)},saturation:function(t){return this.setChannel("hsl",1,t)},lightness:function(t){return this.setChannel("hsl",2,t)},saturationv:function(t){return this.setChannel("hsv",1,t)},whiteness:function(t){return this.setChannel("hwb",1,t)},blackness:function(t){return this.setChannel("hwb",2,t)},value:function(t){return this.setChannel("hsv",2,t)},cyan:function(t){return this.setChannel("cmyk",0,t)},magenta:function(t){return this.setChannel("cmyk",1,t)},yellow:function(t){return this.setChannel("cmyk",2,t)},black:function(t){return this.setChannel("cmyk",3,t)},hexString:function(){return u.hexString(this.values.rgb)},rgbString:function(){return u.rgbString(this.values.rgb,this.values.alpha)},rgbaString:function(){return u.rgbaString(this.values.rgb,this.values.alpha)},percentString:function(){return u.percentString(this.values.rgb,this.values.alpha)},hslString:function(){return u.hslString(this.values.hsl,this.values.alpha)},hslaString:function(){return u.hslaString(this.values.hsl,this.values.alpha)},hwbString:function(){return u.hwbString(this.values.hwb,this.values.alpha)},keyword:function(){return u.keyword(this.values.rgb,this.values.alpha)},rgbNumber:function(){var t=this.values.rgb
return t[0]<<16|t[1]<<8|t[2]},luminosity:function(){for(var t=this.values.rgb,e=[],n=0;n<t.length;n++){var i=t[n]/255
e[n]=i<=.03928?i/12.92:Math.pow((i+.055)/1.055,2.4)}return.2126*e[0]+.7152*e[1]+.0722*e[2]},contrast:function(t){var e=this.luminosity(),n=t.luminosity()
return e>n?(e+.05)/(n+.05):(n+.05)/(e+.05)},level:function(t){var e=this.contrast(t)
return e>=7.1?"AAA":e>=4.5?"AA":""},dark:function(){var t=this.values.rgb
return(299*t[0]+587*t[1]+114*t[2])/1e3<128},light:function(){return!this.dark()},negate:function(){for(var t=[],e=0;e<3;e++)t[e]=255-this.values.rgb[e]
return this.setValues("rgb",t),this},lighten:function(t){var e=this.values.hsl
return e[2]+=e[2]*t,this.setValues("hsl",e),this},darken:function(t){var e=this.values.hsl
return e[2]-=e[2]*t,this.setValues("hsl",e),this},saturate:function(t){var e=this.values.hsl
return e[1]+=e[1]*t,this.setValues("hsl",e),this},desaturate:function(t){var e=this.values.hsl
return e[1]-=e[1]*t,this.setValues("hsl",e),this},whiten:function(t){var e=this.values.hwb
return e[1]+=e[1]*t,this.setValues("hwb",e),this},blacken:function(t){var e=this.values.hwb
return e[2]+=e[2]*t,this.setValues("hwb",e),this},greyscale:function(){var t=this.values.rgb,e=.3*t[0]+.59*t[1]+.11*t[2]
return this.setValues("rgb",[e,e,e]),this},clearer:function(t){var e=this.values.alpha
return this.setValues("alpha",e-e*t),this},opaquer:function(t){var e=this.values.alpha
return this.setValues("alpha",e+e*t),this},rotate:function(t){var e=this.values.hsl,n=(e[0]+t)%360
return e[0]=n<0?360+n:n,this.setValues("hsl",e),this},mix:function(t,e){var n=t,i=void 0===e?.5:e,a=2*i-1,r=this.alpha()-n.alpha(),o=((a*r==-1?a:(a+r)/(1+a*r))+1)/2,s=1-o
return this.rgb(o*this.red()+s*n.red(),o*this.green()+s*n.green(),o*this.blue()+s*n.blue()).alpha(this.alpha()*i+n.alpha()*(1-i))},toJSON:function(){return this.rgb()},clone:function(){var t,e,n=new x,i=this.values,a=n.values
for(var r in i)i.hasOwnProperty(r)&&(t=i[r],"[object Array]"===(e={}.toString.call(t))?a[r]=t.slice(0):"[object Number]"===e?a[r]=t:console.error("unexpected color value:",t))
return n}},x.prototype.spaces={rgb:["red","green","blue"],hsl:["hue","saturation","lightness"],hsv:["hue","saturation","value"],hwb:["hue","whiteness","blackness"],cmyk:["cyan","magenta","yellow","black"]},x.prototype.maxes={rgb:[255,255,255],hsl:[360,100,100],hsv:[360,100,100],hwb:[360,100,100],cmyk:[100,100,100,100]},x.prototype.getValues=function(t){for(var e=this.values,n={},i=0;i<t.length;i++)n[t.charAt(i)]=e[t][i]
return 1!==e.alpha&&(n.a=e.alpha),n},x.prototype.setValues=function(t,e){var n,i,a=this.values,r=this.spaces,o=this.maxes,l=1
if(this.valid=!0,"alpha"===t)l=e
else if(e.length)a[t]=e.slice(0,t.length),l=e[t.length]
else if(void 0!==e[t.charAt(0)]){for(n=0;n<t.length;n++)a[t][n]=e[t.charAt(n)]
l=e.a}else if(void 0!==e[r[t][0]]){var u=r[t]
for(n=0;n<t.length;n++)a[t][n]=e[u[n]]
l=e.alpha}if(a.alpha=Math.max(0,Math.min(1,void 0===l?a.alpha:l)),"alpha"===t)return!1
for(n=0;n<t.length;n++)i=Math.max(0,Math.min(o[t][n],a[t][n])),a[t][n]=Math.round(i)
for(var d in r)d!==t&&(a[d]=s[t][d](a[t]))
return!0},x.prototype.setSpace=function(t,e){var n=e[0]
return void 0===n?this.getValues(t):("number"==typeof n&&(n=Array.prototype.slice.call(e)),this.setValues(t,n),this)},x.prototype.setChannel=function(t,e,n){var i=this.values[t]
return void 0===n?i[e]:(n===i[e]||(i[e]=n,this.setValues(t,i)),this)},"undefined"!=typeof window&&(window.Color=x)
var _,w=x,k={noop:function(){},uid:(_=0,function(){return _++}),isNullOrUndef:function(t){return null==t},isArray:function(t){if(Array.isArray&&Array.isArray(t))return!0
var e=Object.prototype.toString.call(t)
return"[object"===e.substr(0,7)&&"Array]"===e.substr(-6)},isObject:function(t){return null!==t&&"[object Object]"===Object.prototype.toString.call(t)},isFinite:function(t){return("number"==typeof t||t instanceof Number)&&isFinite(t)},valueOrDefault:function(t,e){return void 0===t?e:t},valueAtIndexOrDefault:function(t,e,n){return k.valueOrDefault(k.isArray(t)?t[e]:t,n)},callback:function(t,e,n){if(t&&"function"==typeof t.call)return t.apply(n,e)},each:function(t,e,n,i){var a,r,o
if(k.isArray(t))if(r=t.length,i)for(a=r-1;a>=0;a--)e.call(n,t[a],a)
else for(a=0;a<r;a++)e.call(n,t[a],a)
else if(k.isObject(t))for(r=(o=Object.keys(t)).length,a=0;a<r;a++)e.call(n,t[o[a]],o[a])},arrayEquals:function(t,e){var n,i,a,r
if(!t||!e||t.length!==e.length)return!1
for(n=0,i=t.length;n<i;++n)if(a=t[n],r=e[n],a instanceof Array&&r instanceof Array){if(!k.arrayEquals(a,r))return!1}else if(a!==r)return!1
return!0},clone:function(t){if(k.isArray(t))return t.map(k.clone)
if(k.isObject(t)){for(var e={},n=Object.keys(t),i=n.length,a=0;a<i;++a)e[n[a]]=k.clone(t[n[a]])
return e}return t},_merger:function(t,e,n,i){var a=e[t],r=n[t]
k.isObject(a)&&k.isObject(r)?k.merge(a,r,i):e[t]=k.clone(r)},_mergerIf:function(t,e,n){var i=e[t],a=n[t]
k.isObject(i)&&k.isObject(a)?k.mergeIf(i,a):e.hasOwnProperty(t)||(e[t]=k.clone(a))},merge:function(t,e,n){var i,a,r,o,s,l=k.isArray(e)?e:[e],u=l.length
if(!k.isObject(t))return t
for(i=(n=n||{}).merger||k._merger,a=0;a<u;++a)if(e=l[a],k.isObject(e))for(s=0,o=(r=Object.keys(e)).length;s<o;++s)i(r[s],t,e,n)
return t},mergeIf:function(t,e){return k.merge(t,e,{merger:k._mergerIf})},extend:Object.assign||function(t){return k.merge(t,[].slice.call(arguments,1),{merger:function(t,e,n){e[t]=n[t]}})},inherits:function(t){var e=this,n=t&&t.hasOwnProperty("constructor")?t.constructor:function(){return e.apply(this,arguments)},i=function(){this.constructor=n}
return i.prototype=e.prototype,n.prototype=new i,n.extend=k.inherits,t&&k.extend(n.prototype,t),n.__super__=e.prototype,n},_deprecated:function(t,e,n,i){void 0!==e&&console.warn(t+': "'+n+'" is deprecated. Please use "'+i+'" instead')}},M=k
k.callCallback=k.callback,k.indexOf=function(t,e,n){return Array.prototype.indexOf.call(t,e,n)},k.getValueOrDefault=k.valueOrDefault,k.getValueAtIndexOrDefault=k.valueAtIndexOrDefault
var S={linear:function(t){return t},easeInQuad:function(t){return t*t},easeOutQuad:function(t){return-t*(t-2)},easeInOutQuad:function(t){return(t/=.5)<1?.5*t*t:-.5*(--t*(t-2)-1)},easeInCubic:function(t){return t*t*t},easeOutCubic:function(t){return(t-=1)*t*t+1},easeInOutCubic:function(t){return(t/=.5)<1?.5*t*t*t:.5*((t-=2)*t*t+2)},easeInQuart:function(t){return t*t*t*t},easeOutQuart:function(t){return-((t-=1)*t*t*t-1)},easeInOutQuart:function(t){return(t/=.5)<1?.5*t*t*t*t:-.5*((t-=2)*t*t*t-2)},easeInQuint:function(t){return t*t*t*t*t},easeOutQuint:function(t){return(t-=1)*t*t*t*t+1},easeInOutQuint:function(t){return(t/=.5)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2)},easeInSine:function(t){return 1-Math.cos(t*(Math.PI/2))},easeOutSine:function(t){return Math.sin(t*(Math.PI/2))},easeInOutSine:function(t){return-.5*(Math.cos(Math.PI*t)-1)},easeInExpo:function(t){return 0===t?0:Math.pow(2,10*(t-1))},easeOutExpo:function(t){return 1===t?1:1-Math.pow(2,-10*t)},easeInOutExpo:function(t){return 0===t?0:1===t?1:(t/=.5)<1?.5*Math.pow(2,10*(t-1)):.5*(2-Math.pow(2,-10*--t))},easeInCirc:function(t){return t>=1?t:-(Math.sqrt(1-t*t)-1)},easeOutCirc:function(t){return Math.sqrt(1-(t-=1)*t)},easeInOutCirc:function(t){return(t/=.5)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)},easeInElastic:function(t){var e=1.70158,n=0,i=1
return 0===t?0:1===t?1:(n||(n=.3),i<1?(i=1,e=n/4):e=n/(2*Math.PI)*Math.asin(1/i),-i*Math.pow(2,10*(t-=1))*Math.sin((t-e)*(2*Math.PI)/n))},easeOutElastic:function(t){var e=1.70158,n=0,i=1
return 0===t?0:1===t?1:(n||(n=.3),i<1?(i=1,e=n/4):e=n/(2*Math.PI)*Math.asin(1/i),i*Math.pow(2,-10*t)*Math.sin((t-e)*(2*Math.PI)/n)+1)},easeInOutElastic:function(t){var e=1.70158,n=0,i=1
return 0===t?0:2==(t/=.5)?1:(n||(n=.45),i<1?(i=1,e=n/4):e=n/(2*Math.PI)*Math.asin(1/i),t<1?i*Math.pow(2,10*(t-=1))*Math.sin((t-e)*(2*Math.PI)/n)*-.5:i*Math.pow(2,-10*(t-=1))*Math.sin((t-e)*(2*Math.PI)/n)*.5+1)},easeInBack:function(t){var e=1.70158
return t*t*((e+1)*t-e)},easeOutBack:function(t){var e=1.70158
return(t-=1)*t*((e+1)*t+e)+1},easeInOutBack:function(t){var e=1.70158
return(t/=.5)<1?t*t*((1+(e*=1.525))*t-e)*.5:.5*((t-=2)*t*((1+(e*=1.525))*t+e)+2)},easeInBounce:function(t){return 1-S.easeOutBounce(1-t)},easeOutBounce:function(t){return t<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375},easeInOutBounce:function(t){return t<.5?.5*S.easeInBounce(2*t):.5*S.easeOutBounce(2*t-1)+.5}},D={effects:S}
M.easingEffects=S
var C=Math.PI,P=C/180,T=2*C,O=C/2,A=C/4,F=2*C/3,I={clear:function(t){t.ctx.clearRect(0,0,t.width,t.height)},roundedRect:function(t,e,n,i,a,r){if(r){var o=Math.min(r,a/2,i/2),s=e+o,l=n+o,u=e+i-o,d=n+a-o
t.moveTo(e,l),s<u&&l<d?(t.arc(s,l,o,-C,-O),t.arc(u,l,o,-O,0),t.arc(u,d,o,0,O),t.arc(s,d,o,O,C)):s<u?(t.moveTo(s,n),t.arc(u,l,o,-O,O),t.arc(s,l,o,O,C+O)):l<d?(t.arc(s,l,o,-C,0),t.arc(s,d,o,0,C)):t.arc(s,l,o,-C,C),t.closePath(),t.moveTo(e,n)}else t.rect(e,n,i,a)},drawPoint:function(t,e,n,i,a,r){var o,s,l,u,d,h=(r||0)*P
if(e&&"object"==typeof e&&("[object HTMLImageElement]"===(o=e.toString())||"[object HTMLCanvasElement]"===o))return t.save(),t.translate(i,a),t.rotate(h),t.drawImage(e,-e.width/2,-e.height/2,e.width,e.height),void t.restore()
if(!(isNaN(n)||n<=0)){switch(t.beginPath(),e){default:t.arc(i,a,n,0,T),t.closePath()
break
case"triangle":t.moveTo(i+Math.sin(h)*n,a-Math.cos(h)*n),h+=F,t.lineTo(i+Math.sin(h)*n,a-Math.cos(h)*n),h+=F,t.lineTo(i+Math.sin(h)*n,a-Math.cos(h)*n),t.closePath()
break
case"rectRounded":u=n-(d=.516*n),s=Math.cos(h+A)*u,l=Math.sin(h+A)*u,t.arc(i-s,a-l,d,h-C,h-O),t.arc(i+l,a-s,d,h-O,h),t.arc(i+s,a+l,d,h,h+O),t.arc(i-l,a+s,d,h+O,h+C),t.closePath()
break
case"rect":if(!r){u=Math.SQRT1_2*n,t.rect(i-u,a-u,2*u,2*u)
break}h+=A
case"rectRot":s=Math.cos(h)*n,l=Math.sin(h)*n,t.moveTo(i-s,a-l),t.lineTo(i+l,a-s),t.lineTo(i+s,a+l),t.lineTo(i-l,a+s),t.closePath()
break
case"crossRot":h+=A
case"cross":s=Math.cos(h)*n,l=Math.sin(h)*n,t.moveTo(i-s,a-l),t.lineTo(i+s,a+l),t.moveTo(i+l,a-s),t.lineTo(i-l,a+s)
break
case"star":s=Math.cos(h)*n,l=Math.sin(h)*n,t.moveTo(i-s,a-l),t.lineTo(i+s,a+l),t.moveTo(i+l,a-s),t.lineTo(i-l,a+s),h+=A,s=Math.cos(h)*n,l=Math.sin(h)*n,t.moveTo(i-s,a-l),t.lineTo(i+s,a+l),t.moveTo(i+l,a-s),t.lineTo(i-l,a+s)
break
case"line":s=Math.cos(h)*n,l=Math.sin(h)*n,t.moveTo(i-s,a-l),t.lineTo(i+s,a+l)
break
case"dash":t.moveTo(i,a),t.lineTo(i+Math.cos(h)*n,a+Math.sin(h)*n)}t.fill(),t.stroke()}},_isPointInArea:function(t,e){return t.x>e.left-1e-6&&t.x<e.right+1e-6&&t.y>e.top-1e-6&&t.y<e.bottom+1e-6},clipArea:function(t,e){t.save(),t.beginPath(),t.rect(e.left,e.top,e.right-e.left,e.bottom-e.top),t.clip()},unclipArea:function(t){t.restore()},lineTo:function(t,e,n,i){var a=n.steppedLine
if(a){if("middle"===a){var r=(e.x+n.x)/2
t.lineTo(r,i?n.y:e.y),t.lineTo(r,i?e.y:n.y)}else"after"===a&&!i||"after"!==a&&i?t.lineTo(e.x,n.y):t.lineTo(n.x,e.y)
t.lineTo(n.x,n.y)}else n.tension?t.bezierCurveTo(i?e.controlPointPreviousX:e.controlPointNextX,i?e.controlPointPreviousY:e.controlPointNextY,i?n.controlPointNextX:n.controlPointPreviousX,i?n.controlPointNextY:n.controlPointPreviousY,n.x,n.y):t.lineTo(n.x,n.y)}},L=I
M.clear=I.clear,M.drawRoundedRectangle=function(t){t.beginPath(),I.roundedRect.apply(I,arguments)}
var R={_set:function(t,e){return M.merge(this[t]||(this[t]={}),e)}}
R._set("global",{defaultColor:"rgba(0,0,0,0.1)",defaultFontColor:"#666",defaultFontFamily:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",defaultFontSize:12,defaultFontStyle:"normal",defaultLineHeight:1.2,showLines:!0})
var N=R,W=M.valueOrDefault,Y={toLineHeight:function(t,e){var n=(""+t).match(/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/)
if(!n||"normal"===n[1])return 1.2*e
switch(t=+n[2],n[3]){case"px":return t
case"%":t/=100}return e*t},toPadding:function(t){var e,n,i,a
return M.isObject(t)?(e=+t.top||0,n=+t.right||0,i=+t.bottom||0,a=+t.left||0):e=n=i=a=+t||0,{top:e,right:n,bottom:i,left:a,height:e+i,width:a+n}},_parseFont:function(t){var e=N.global,n=W(t.fontSize,e.defaultFontSize),i={family:W(t.fontFamily,e.defaultFontFamily),lineHeight:M.options.toLineHeight(W(t.lineHeight,e.defaultLineHeight),n),size:n,style:W(t.fontStyle,e.defaultFontStyle),weight:null,string:""}
return i.string=function(t){return!t||M.isNullOrUndef(t.size)||M.isNullOrUndef(t.family)?null:(t.style?t.style+" ":"")+(t.weight?t.weight+" ":"")+t.size+"px "+t.family}(i),i},resolve:function(t,e,n,i){var a,r,o,s=!0
for(a=0,r=t.length;a<r;++a)if(void 0!==(o=t[a])&&(void 0!==e&&"function"==typeof o&&(o=o(e),s=!1),void 0!==n&&M.isArray(o)&&(o=o[n],s=!1),void 0!==o))return i&&!s&&(i.cacheable=!1),o}},z={_factorize:function(t){var e,n=[],i=Math.sqrt(t)
for(e=1;e<i;e++)t%e==0&&(n.push(e),n.push(t/e))
return i===(0|i)&&n.push(i),n.sort((function(t,e){return t-e})).pop(),n},log10:Math.log10||function(t){var e=Math.log(t)*Math.LOG10E,n=Math.round(e)
return t===Math.pow(10,n)?n:e}},E=z
M.log10=z.log10
var V=M,H=D,B=L,j=Y,U=E
V.easing=H,V.canvas=B,V.options=j,V.math=U,V.rtl={getRtlAdapter:function(t,e,n){return t?function(t,e){return{x:function(n){return t+t+e-n},setWidth:function(t){e=t},textAlign:function(t){return"center"===t?t:"right"===t?"left":"right"},xPlus:function(t,e){return t-e},leftForLtr:function(t,e){return t-e}}}(e,n):{x:function(t){return t},setWidth:function(t){},textAlign:function(t){return t},xPlus:function(t,e){return t+e},leftForLtr:function(t,e){return t}}},overrideTextDirection:function(t,e){var n,i
"ltr"!==e&&"rtl"!==e||(i=[(n=t.canvas.style).getPropertyValue("direction"),n.getPropertyPriority("direction")],n.setProperty("direction",e,"important"),t.prevTextDirection=i)},restoreTextDirection:function(t){var e=t.prevTextDirection
void 0!==e&&(delete t.prevTextDirection,t.canvas.style.setProperty("direction",e[0],e[1]))}}
var G=function(t){V.extend(this,t),this.initialize.apply(this,arguments)}
V.extend(G.prototype,{_type:void 0,initialize:function(){this.hidden=!1},pivot:function(){var t=this
return t._view||(t._view=V.extend({},t._model)),t._start={},t},transition:function(t){var e=this,n=e._model,i=e._start,a=e._view
return n&&1!==t?(a||(a=e._view={}),i||(i=e._start={}),function(t,e,n,i){var a,r,o,s,l,u,d,h,c,f=Object.keys(n)
for(a=0,r=f.length;a<r;++a)if(u=n[o=f[a]],e.hasOwnProperty(o)||(e[o]=u),(s=e[o])!==u&&"_"!==o[0]){if(t.hasOwnProperty(o)||(t[o]=s),(d=typeof u)==typeof(l=t[o]))if("string"===d){if((h=w(l)).valid&&(c=w(u)).valid){e[o]=c.mix(h,i).rgbString()
continue}}else if(V.isFinite(l)&&V.isFinite(u)){e[o]=l+(u-l)*i
continue}e[o]=u}}(i,a,n,t),e):(e._view=V.extend({},n),e._start=null,e)},tooltipPosition:function(){return{x:this._model.x,y:this._model.y}},hasValue:function(){return V.isNumber(this._model.x)&&V.isNumber(this._model.y)}}),G.extend=V.inherits
var q=G,Z=q.extend({chart:null,currentStep:0,numSteps:60,easing:"",render:null,onAnimationProgress:null,onAnimationComplete:null}),$=Z
Object.defineProperty(Z.prototype,"animationObject",{get:function(){return this}}),Object.defineProperty(Z.prototype,"chartInstance",{get:function(){return this.chart},set:function(t){this.chart=t}}),N._set("global",{animation:{duration:1e3,easing:"easeOutQuart",onProgress:V.noop,onComplete:V.noop}})
var X={animations:[],request:null,addAnimation:function(t,e,n,i){var a,r,o=this.animations
for(e.chart=t,e.startTime=Date.now(),e.duration=n,i||(t.animating=!0),a=0,r=o.length;a<r;++a)if(o[a].chart===t)return void(o[a]=e)
o.push(e),1===o.length&&this.requestAnimationFrame()},cancelAnimation:function(t){var e=V.findIndex(this.animations,(function(e){return e.chart===t}));-1!==e&&(this.animations.splice(e,1),t.animating=!1)},requestAnimationFrame:function(){var t=this
null===t.request&&(t.request=V.requestAnimFrame.call(window,(function(){t.request=null,t.startDigest()})))},startDigest:function(){this.advance(),this.animations.length>0&&this.requestAnimationFrame()},advance:function(){for(var t,e,n,i,a=this.animations,r=0;r<a.length;)e=(t=a[r]).chart,n=t.numSteps,i=Math.floor((Date.now()-t.startTime)/t.duration*n)+1,t.currentStep=Math.min(i,n),V.callback(t.render,[e,t],e),V.callback(t.onAnimationProgress,[t],e),t.currentStep>=n?(V.callback(t.onAnimationComplete,[t],e),e.animating=!1,a.splice(r,1)):++r}},K=V.options.resolve,J=["push","pop","shift","splice","unshift"]
function Q(t,e){var n=t._chartjs
if(n){var i=n.listeners,a=i.indexOf(e);-1!==a&&i.splice(a,1),i.length>0||(J.forEach((function(e){delete t[e]})),delete t._chartjs)}}var tt=function(t,e){this.initialize(t,e)}
V.extend(tt.prototype,{datasetElementType:null,dataElementType:null,_datasetElementOptions:["backgroundColor","borderCapStyle","borderColor","borderDash","borderDashOffset","borderJoinStyle","borderWidth"],_dataElementOptions:["backgroundColor","borderColor","borderWidth","pointStyle"],initialize:function(t,e){var n=this
n.chart=t,n.index=e,n.linkScales(),n.addElements(),n._type=n.getMeta().type},updateIndex:function(t){this.index=t},linkScales:function(){var t=this.getMeta(),e=this.chart,n=e.scales,i=this.getDataset(),a=e.options.scales
null!==t.xAxisID&&t.xAxisID in n&&!i.xAxisID||(t.xAxisID=i.xAxisID||a.xAxes[0].id),null!==t.yAxisID&&t.yAxisID in n&&!i.yAxisID||(t.yAxisID=i.yAxisID||a.yAxes[0].id)},getDataset:function(){return this.chart.data.datasets[this.index]},getMeta:function(){return this.chart.getDatasetMeta(this.index)},getScaleForId:function(t){return this.chart.scales[t]},_getValueScaleId:function(){return this.getMeta().yAxisID},_getIndexScaleId:function(){return this.getMeta().xAxisID},_getValueScale:function(){return this.getScaleForId(this._getValueScaleId())},_getIndexScale:function(){return this.getScaleForId(this._getIndexScaleId())},reset:function(){this._update(!0)},destroy:function(){this._data&&Q(this._data,this)},createMetaDataset:function(){var t=this.datasetElementType
return t&&new t({_chart:this.chart,_datasetIndex:this.index})},createMetaData:function(t){var e=this.dataElementType
return e&&new e({_chart:this.chart,_datasetIndex:this.index,_index:t})},addElements:function(){var t,e,n=this.getMeta(),i=this.getDataset().data||[],a=n.data
for(t=0,e=i.length;t<e;++t)a[t]=a[t]||this.createMetaData(t)
n.dataset=n.dataset||this.createMetaDataset()},addElementAndReset:function(t){var e=this.createMetaData(t)
this.getMeta().data.splice(t,0,e),this.updateElement(e,t,!0)},buildOrUpdateElements:function(){var t,e,n=this,i=n.getDataset(),a=i.data||(i.data=[])
n._data!==a&&(n._data&&Q(n._data,n),a&&Object.isExtensible(a)&&(e=n,(t=a)._chartjs?t._chartjs.listeners.push(e):(Object.defineProperty(t,"_chartjs",{configurable:!0,enumerable:!1,value:{listeners:[e]}}),J.forEach((function(e){var n="onData"+e.charAt(0).toUpperCase()+e.slice(1),i=t[e]
Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:function(){var e=Array.prototype.slice.call(arguments),a=i.apply(this,e)
return V.each(t._chartjs.listeners,(function(t){"function"==typeof t[n]&&t[n].apply(t,e)})),a}})})))),n._data=a),n.resyncElements()},_configure:function(){this._config=V.merge({},[this.chart.options.datasets[this._type],this.getDataset()],{merger:function(t,e,n){"_meta"!==t&&"data"!==t&&V._merger(t,e,n)}})},_update:function(t){this._configure(),this._cachedDataOpts=null,this.update(t)},update:V.noop,transition:function(t){for(var e=this.getMeta(),n=e.data||[],i=n.length,a=0;a<i;++a)n[a].transition(t)
e.dataset&&e.dataset.transition(t)},draw:function(){var t=this.getMeta(),e=t.data||[],n=e.length,i=0
for(t.dataset&&t.dataset.draw();i<n;++i)e[i].draw()},getStyle:function(t){var e,n=this.getMeta(),i=n.dataset
return this._configure(),i&&void 0===t?e=this._resolveDatasetElementOptions(i||{}):(t=t||0,e=this._resolveDataElementOptions(n.data[t]||{},t)),!1!==e.fill&&null!==e.fill||(e.backgroundColor=e.borderColor),e},_resolveDatasetElementOptions:function(t,e){var n,i,a,r,o=this,s=o.chart,l=o._config,u=t.custom||{},d=s.options.elements[o.datasetElementType.prototype._type]||{},h=o._datasetElementOptions,c={},f={chart:s,dataset:o.getDataset(),datasetIndex:o.index,hover:e}
for(n=0,i=h.length;n<i;++n)a=h[n],r=e?"hover"+a.charAt(0).toUpperCase()+a.slice(1):a,c[a]=K([u[r],l[r],d[r]],f)
return c},_resolveDataElementOptions:function(t,e){var n=this,i=t&&t.custom,a=n._cachedDataOpts
if(a&&!i)return a
var r,o,s,l,u=n.chart,d=n._config,h=u.options.elements[n.dataElementType.prototype._type]||{},c=n._dataElementOptions,f={},g={chart:u,dataIndex:e,dataset:n.getDataset(),datasetIndex:n.index},m={cacheable:!i}
if(i=i||{},V.isArray(c))for(o=0,s=c.length;o<s;++o)f[l=c[o]]=K([i[l],d[l],h[l]],g,e,m)
else for(o=0,s=(r=Object.keys(c)).length;o<s;++o)f[l=r[o]]=K([i[l],d[c[l]],d[l],h[l]],g,e,m)
return m.cacheable&&(n._cachedDataOpts=Object.freeze(f)),f},removeHoverStyle:function(t){V.merge(t._model,t.$previousStyle||{}),delete t.$previousStyle},setHoverStyle:function(t){var e=this.chart.data.datasets[t._datasetIndex],n=t._index,i=t.custom||{},a=t._model,r=V.getHoverColor
t.$previousStyle={backgroundColor:a.backgroundColor,borderColor:a.borderColor,borderWidth:a.borderWidth},a.backgroundColor=K([i.hoverBackgroundColor,e.hoverBackgroundColor,r(a.backgroundColor)],void 0,n),a.borderColor=K([i.hoverBorderColor,e.hoverBorderColor,r(a.borderColor)],void 0,n),a.borderWidth=K([i.hoverBorderWidth,e.hoverBorderWidth,a.borderWidth],void 0,n)},_removeDatasetHoverStyle:function(){var t=this.getMeta().dataset
t&&this.removeHoverStyle(t)},_setDatasetHoverStyle:function(){var t,e,n,i,a,r,o=this.getMeta().dataset,s={}
if(o){for(r=o._model,a=this._resolveDatasetElementOptions(o,!0),t=0,e=(i=Object.keys(a)).length;t<e;++t)s[n=i[t]]=r[n],r[n]=a[n]
o.$previousStyle=s}},resyncElements:function(){var t=this.getMeta(),e=this.getDataset().data,n=t.data.length,i=e.length
i<n?t.data.splice(i,n-i):i>n&&this.insertElements(n,i-n)},insertElements:function(t,e){for(var n=0;n<e;++n)this.addElementAndReset(t+n)},onDataPush:function(){var t=arguments.length
this.insertElements(this.getDataset().data.length-t,t)},onDataPop:function(){this.getMeta().data.pop()},onDataShift:function(){this.getMeta().data.shift()},onDataSplice:function(t,e){this.getMeta().data.splice(t,e),this.insertElements(t,arguments.length-2)},onDataUnshift:function(){this.insertElements(0,arguments.length)}}),tt.extend=V.inherits
var et=tt,nt=2*Math.PI
function it(t,e){var n=e.startAngle,i=e.endAngle,a=e.pixelMargin,r=a/e.outerRadius,o=e.x,s=e.y
t.beginPath(),t.arc(o,s,e.outerRadius,n-r,i+r),e.innerRadius>a?(r=a/e.innerRadius,t.arc(o,s,e.innerRadius-a,i+r,n-r,!0)):t.arc(o,s,a,i+Math.PI/2,n-Math.PI/2),t.closePath(),t.clip()}N._set("global",{elements:{arc:{backgroundColor:N.global.defaultColor,borderColor:"#fff",borderWidth:2,borderAlign:"center"}}})
var at=q.extend({_type:"arc",inLabelRange:function(t){var e=this._view
return!!e&&Math.pow(t-e.x,2)<Math.pow(e.radius+e.hoverRadius,2)},inRange:function(t,e){var n=this._view
if(n){for(var i=V.getAngleFromPoint(n,{x:t,y:e}),a=i.angle,r=i.distance,o=n.startAngle,s=n.endAngle;s<o;)s+=nt
for(;a>s;)a-=nt
for(;a<o;)a+=nt
var l=a>=o&&a<=s,u=r>=n.innerRadius&&r<=n.outerRadius
return l&&u}return!1},getCenterPoint:function(){var t=this._view,e=(t.startAngle+t.endAngle)/2,n=(t.innerRadius+t.outerRadius)/2
return{x:t.x+Math.cos(e)*n,y:t.y+Math.sin(e)*n}},getArea:function(){var t=this._view
return Math.PI*((t.endAngle-t.startAngle)/(2*Math.PI))*(Math.pow(t.outerRadius,2)-Math.pow(t.innerRadius,2))},tooltipPosition:function(){var t=this._view,e=t.startAngle+(t.endAngle-t.startAngle)/2,n=(t.outerRadius-t.innerRadius)/2+t.innerRadius
return{x:t.x+Math.cos(e)*n,y:t.y+Math.sin(e)*n}},draw:function(){var t,e=this._chart.ctx,n=this._view,i="inner"===n.borderAlign?.33:0,a={x:n.x,y:n.y,innerRadius:n.innerRadius,outerRadius:Math.max(n.outerRadius-i,0),pixelMargin:i,startAngle:n.startAngle,endAngle:n.endAngle,fullCircles:Math.floor(n.circumference/nt)}
if(e.save(),e.fillStyle=n.backgroundColor,e.strokeStyle=n.borderColor,a.fullCircles){for(a.endAngle=a.startAngle+nt,e.beginPath(),e.arc(a.x,a.y,a.outerRadius,a.startAngle,a.endAngle),e.arc(a.x,a.y,a.innerRadius,a.endAngle,a.startAngle,!0),e.closePath(),t=0;t<a.fullCircles;++t)e.fill()
a.endAngle=a.startAngle+n.circumference%nt}e.beginPath(),e.arc(a.x,a.y,a.outerRadius,a.startAngle,a.endAngle),e.arc(a.x,a.y,a.innerRadius,a.endAngle,a.startAngle,!0),e.closePath(),e.fill(),n.borderWidth&&function(t,e,n){var i="inner"===e.borderAlign
i?(t.lineWidth=2*e.borderWidth,t.lineJoin="round"):(t.lineWidth=e.borderWidth,t.lineJoin="bevel"),n.fullCircles&&function(t,e,n,i){var a,r=n.endAngle
for(i&&(n.endAngle=n.startAngle+nt,it(t,n),n.endAngle=r,n.endAngle===n.startAngle&&n.fullCircles&&(n.endAngle+=nt,n.fullCircles--)),t.beginPath(),t.arc(n.x,n.y,n.innerRadius,n.startAngle+nt,n.startAngle,!0),a=0;a<n.fullCircles;++a)t.stroke()
for(t.beginPath(),t.arc(n.x,n.y,e.outerRadius,n.startAngle,n.startAngle+nt),a=0;a<n.fullCircles;++a)t.stroke()}(t,e,n,i),i&&it(t,n),t.beginPath(),t.arc(n.x,n.y,e.outerRadius,n.startAngle,n.endAngle),t.arc(n.x,n.y,n.innerRadius,n.endAngle,n.startAngle,!0),t.closePath(),t.stroke()}(e,n,a),e.restore()}}),rt=V.valueOrDefault,ot=N.global.defaultColor
N._set("global",{elements:{line:{tension:.4,backgroundColor:ot,borderWidth:3,borderColor:ot,borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",capBezierPoints:!0,fill:!0}}})
var st=q.extend({_type:"line",draw:function(){var t,e,n,i=this,a=i._view,r=i._chart.ctx,o=a.spanGaps,s=i._children.slice(),l=N.global,u=l.elements.line,d=-1,h=i._loop
if(s.length){if(i._loop){for(t=0;t<s.length;++t)if(e=V.previousItem(s,t),!s[t]._view.skip&&e._view.skip){s=s.slice(t).concat(s.slice(0,t)),h=o
break}h&&s.push(s[0])}for(r.save(),r.lineCap=a.borderCapStyle||u.borderCapStyle,r.setLineDash&&r.setLineDash(a.borderDash||u.borderDash),r.lineDashOffset=rt(a.borderDashOffset,u.borderDashOffset),r.lineJoin=a.borderJoinStyle||u.borderJoinStyle,r.lineWidth=rt(a.borderWidth,u.borderWidth),r.strokeStyle=a.borderColor||l.defaultColor,r.beginPath(),(n=s[0]._view).skip||(r.moveTo(n.x,n.y),d=0),t=1;t<s.length;++t)n=s[t]._view,e=-1===d?V.previousItem(s,t):s[d],n.skip||(d!==t-1&&!o||-1===d?r.moveTo(n.x,n.y):V.canvas.lineTo(r,e._view,n),d=t)
h&&r.closePath(),r.stroke(),r.restore()}}}),lt=V.valueOrDefault,ut=N.global.defaultColor
function dt(t){var e=this._view
return!!e&&Math.abs(t-e.x)<e.radius+e.hitRadius}N._set("global",{elements:{point:{radius:3,pointStyle:"circle",backgroundColor:ut,borderColor:ut,borderWidth:1,hitRadius:1,hoverRadius:4,hoverBorderWidth:1}}})
var ht=q.extend({_type:"point",inRange:function(t,e){var n=this._view
return!!n&&Math.pow(t-n.x,2)+Math.pow(e-n.y,2)<Math.pow(n.hitRadius+n.radius,2)},inLabelRange:dt,inXRange:dt,inYRange:function(t){var e=this._view
return!!e&&Math.abs(t-e.y)<e.radius+e.hitRadius},getCenterPoint:function(){var t=this._view
return{x:t.x,y:t.y}},getArea:function(){return Math.PI*Math.pow(this._view.radius,2)},tooltipPosition:function(){var t=this._view
return{x:t.x,y:t.y,padding:t.radius+t.borderWidth}},draw:function(t){var e=this._view,n=this._chart.ctx,i=e.pointStyle,a=e.rotation,r=e.radius,o=e.x,s=e.y,l=N.global,u=l.defaultColor
e.skip||(void 0===t||V.canvas._isPointInArea(e,t))&&(n.strokeStyle=e.borderColor||u,n.lineWidth=lt(e.borderWidth,l.elements.point.borderWidth),n.fillStyle=e.backgroundColor||u,V.canvas.drawPoint(n,i,r,o,s,a))}}),ct=N.global.defaultColor
function ft(t){return t&&void 0!==t.width}function gt(t){var e,n,i,a,r
return ft(t)?(r=t.width/2,e=t.x-r,n=t.x+r,i=Math.min(t.y,t.base),a=Math.max(t.y,t.base)):(r=t.height/2,e=Math.min(t.x,t.base),n=Math.max(t.x,t.base),i=t.y-r,a=t.y+r),{left:e,top:i,right:n,bottom:a}}function mt(t,e,n){return t===e?n:t===n?e:t}function pt(t,e,n){var i=null===e,a=null===n,r=!(!t||i&&a)&&gt(t)
return r&&(i||e>=r.left&&e<=r.right)&&(a||n>=r.top&&n<=r.bottom)}N._set("global",{elements:{rectangle:{backgroundColor:ct,borderColor:ct,borderSkipped:"bottom",borderWidth:0}}})
var vt=q.extend({_type:"rectangle",draw:function(){var t=this._chart.ctx,e=this._view,n=function(t){var e=gt(t),n=e.right-e.left,i=e.bottom-e.top,a=function(t,e,n){var i,a,r,o,s=t.borderWidth,l=function(t){var e=t.borderSkipped,n={}
return e?(t.horizontal?t.base>t.x&&(e=mt(e,"left","right")):t.base<t.y&&(e=mt(e,"bottom","top")),n[e]=!0,n):n}(t)
return V.isObject(s)?(i=+s.top||0,a=+s.right||0,r=+s.bottom||0,o=+s.left||0):i=a=r=o=+s||0,{t:l.top||i<0?0:i>n?n:i,r:l.right||a<0?0:a>e?e:a,b:l.bottom||r<0?0:r>n?n:r,l:l.left||o<0?0:o>e?e:o}}(t,n/2,i/2)
return{outer:{x:e.left,y:e.top,w:n,h:i},inner:{x:e.left+a.l,y:e.top+a.t,w:n-a.l-a.r,h:i-a.t-a.b}}}(e),i=n.outer,a=n.inner
t.fillStyle=e.backgroundColor,t.fillRect(i.x,i.y,i.w,i.h),i.w===a.w&&i.h===a.h||(t.save(),t.beginPath(),t.rect(i.x,i.y,i.w,i.h),t.clip(),t.fillStyle=e.borderColor,t.rect(a.x,a.y,a.w,a.h),t.fill("evenodd"),t.restore())},height:function(){var t=this._view
return t.base-t.y},inRange:function(t,e){return pt(this._view,t,e)},inLabelRange:function(t,e){var n=this._view
return ft(n)?pt(n,t,null):pt(n,null,e)},inXRange:function(t){return pt(this._view,t,null)},inYRange:function(t){return pt(this._view,null,t)},getCenterPoint:function(){var t,e,n=this._view
return ft(n)?(t=n.x,e=(n.y+n.base)/2):(t=(n.x+n.base)/2,e=n.y),{x:t,y:e}},getArea:function(){var t=this._view
return ft(t)?t.width*Math.abs(t.y-t.base):t.height*Math.abs(t.x-t.base)},tooltipPosition:function(){var t=this._view
return{x:t.x,y:t.y}}}),bt={},yt=at,xt=st,_t=ht,wt=vt
bt.Arc=yt,bt.Line=xt,bt.Point=_t,bt.Rectangle=wt
var kt=V._deprecated,Mt=V.valueOrDefault
N._set("bar",{hover:{mode:"label"},scales:{xAxes:[{type:"category",offset:!0,gridLines:{offsetGridLines:!0}}],yAxes:[{type:"linear"}]}}),N._set("global",{datasets:{bar:{categoryPercentage:.8,barPercentage:.9}}})
var St=et.extend({dataElementType:bt.Rectangle,_dataElementOptions:["backgroundColor","borderColor","borderSkipped","borderWidth","barPercentage","barThickness","categoryPercentage","maxBarThickness","minBarLength"],initialize:function(){var t,e,n=this
et.prototype.initialize.apply(n,arguments),(t=n.getMeta()).stack=n.getDataset().stack,t.bar=!0,e=n._getIndexScale().options,kt("bar chart",e.barPercentage,"scales.[x/y]Axes.barPercentage","dataset.barPercentage"),kt("bar chart",e.barThickness,"scales.[x/y]Axes.barThickness","dataset.barThickness"),kt("bar chart",e.categoryPercentage,"scales.[x/y]Axes.categoryPercentage","dataset.categoryPercentage"),kt("bar chart",n._getValueScale().options.minBarLength,"scales.[x/y]Axes.minBarLength","dataset.minBarLength"),kt("bar chart",e.maxBarThickness,"scales.[x/y]Axes.maxBarThickness","dataset.maxBarThickness")},update:function(t){var e,n,i=this.getMeta().data
for(this._ruler=this.getRuler(),e=0,n=i.length;e<n;++e)this.updateElement(i[e],e,t)},updateElement:function(t,e,n){var i=this,a=i.getMeta(),r=i.getDataset(),o=i._resolveDataElementOptions(t,e)
t._xScale=i.getScaleForId(a.xAxisID),t._yScale=i.getScaleForId(a.yAxisID),t._datasetIndex=i.index,t._index=e,t._model={backgroundColor:o.backgroundColor,borderColor:o.borderColor,borderSkipped:o.borderSkipped,borderWidth:o.borderWidth,datasetLabel:r.label,label:i.chart.data.labels[e]},V.isArray(r.data[e])&&(t._model.borderSkipped=null),i._updateElementGeometry(t,e,n,o),t.pivot()},_updateElementGeometry:function(t,e,n,i){var a=this,r=t._model,o=a._getValueScale(),s=o.getBasePixel(),l=o.isHorizontal(),u=a._ruler||a.getRuler(),d=a.calculateBarValuePixels(a.index,e,i),h=a.calculateBarIndexPixels(a.index,e,u,i)
r.horizontal=l,r.base=n?s:d.base,r.x=l?n?s:d.head:h.center,r.y=l?h.center:n?s:d.head,r.height=l?h.size:void 0,r.width=l?void 0:h.size},_getStacks:function(t){var e,n,i=this._getIndexScale(),a=i._getMatchingVisibleMetas(this._type),r=i.options.stacked,o=a.length,s=[]
for(e=0;e<o&&(n=a[e],(!1===r||-1===s.indexOf(n.stack)||void 0===r&&void 0===n.stack)&&s.push(n.stack),n.index!==t);++e);return s},getStackCount:function(){return this._getStacks().length},getStackIndex:function(t,e){var n=this._getStacks(t),i=void 0!==e?n.indexOf(e):-1
return-1===i?n.length-1:i},getRuler:function(){var t,e,n=this._getIndexScale(),i=[]
for(t=0,e=this.getMeta().data.length;t<e;++t)i.push(n.getPixelForValue(null,t,this.index))
return{pixels:i,start:n._startPixel,end:n._endPixel,stackCount:this.getStackCount(),scale:n}},calculateBarValuePixels:function(t,e,n){var i,a,r,o,s,l,u,d=this.chart,h=this._getValueScale(),c=h.isHorizontal(),f=d.data.datasets,g=h._getMatchingVisibleMetas(this._type),m=h._parseValue(f[t].data[e]),p=n.minBarLength,v=h.options.stacked,b=this.getMeta().stack,y=void 0===m.start?0:m.max>=0&&m.min>=0?m.min:m.max,x=void 0===m.start?m.end:m.max>=0&&m.min>=0?m.max-m.min:m.min-m.max,_=g.length
if(v||void 0===v&&void 0!==b)for(i=0;i<_&&(a=g[i]).index!==t;++i)a.stack===b&&(r=void 0===(u=h._parseValue(f[a.index].data[e])).start?u.end:u.min>=0&&u.max>=0?u.max:u.min,(m.min<0&&r<0||m.max>=0&&r>0)&&(y+=r))
return o=h.getPixelForValue(y),l=(s=h.getPixelForValue(y+x))-o,void 0!==p&&Math.abs(l)<p&&(l=p,s=x>=0&&!c||x<0&&c?o-p:o+p),{size:l,base:o,head:s,center:s+l/2}},calculateBarIndexPixels:function(t,e,n,i){var a="flex"===i.barThickness?function(t,e,n){var i,a=e.pixels,r=a[t],o=t>0?a[t-1]:null,s=t<a.length-1?a[t+1]:null,l=n.categoryPercentage
return null===o&&(o=r-(null===s?e.end-e.start:s-r)),null===s&&(s=r+r-o),i=r-(r-Math.min(o,s))/2*l,{chunk:Math.abs(s-o)/2*l/e.stackCount,ratio:n.barPercentage,start:i}}(e,n,i):function(t,e,n){var i,a,r=n.barThickness,o=e.stackCount,s=e.pixels[t],l=V.isNullOrUndef(r)?function(t,e){var n,i,a,r,o=t._length
for(a=1,r=e.length;a<r;++a)o=Math.min(o,Math.abs(e[a]-e[a-1]))
for(a=0,r=t.getTicks().length;a<r;++a)i=t.getPixelForTick(a),o=a>0?Math.min(o,Math.abs(i-n)):o,n=i
return o}(e.scale,e.pixels):-1
return V.isNullOrUndef(r)?(i=l*n.categoryPercentage,a=n.barPercentage):(i=r*o,a=1),{chunk:i/o,ratio:a,start:s-i/2}}(e,n,i),r=this.getStackIndex(t,this.getMeta().stack),o=a.start+a.chunk*r+a.chunk/2,s=Math.min(Mt(i.maxBarThickness,1/0),a.chunk*a.ratio)
return{base:o-s/2,head:o+s/2,center:o,size:s}},draw:function(){var t=this.chart,e=this._getValueScale(),n=this.getMeta().data,i=this.getDataset(),a=n.length,r=0
for(V.canvas.clipArea(t.ctx,t.chartArea);r<a;++r){var o=e._parseValue(i.data[r])
isNaN(o.min)||isNaN(o.max)||n[r].draw()}V.canvas.unclipArea(t.ctx)},_resolveDataElementOptions:function(){var t=this,e=V.extend({},et.prototype._resolveDataElementOptions.apply(t,arguments)),n=t._getIndexScale().options,i=t._getValueScale().options
return e.barPercentage=Mt(n.barPercentage,e.barPercentage),e.barThickness=Mt(n.barThickness,e.barThickness),e.categoryPercentage=Mt(n.categoryPercentage,e.categoryPercentage),e.maxBarThickness=Mt(n.maxBarThickness,e.maxBarThickness),e.minBarLength=Mt(i.minBarLength,e.minBarLength),e}}),Dt=V.valueOrDefault,Ct=V.options.resolve
N._set("bubble",{hover:{mode:"single"},scales:{xAxes:[{type:"linear",position:"bottom",id:"x-axis-0"}],yAxes:[{type:"linear",position:"left",id:"y-axis-0"}]},tooltips:{callbacks:{title:function(){return""},label:function(t,e){var n=e.datasets[t.datasetIndex].label||"",i=e.datasets[t.datasetIndex].data[t.index]
return n+": ("+t.xLabel+", "+t.yLabel+", "+i.r+")"}}}})
var Pt=et.extend({dataElementType:bt.Point,_dataElementOptions:["backgroundColor","borderColor","borderWidth","hoverBackgroundColor","hoverBorderColor","hoverBorderWidth","hoverRadius","hitRadius","pointStyle","rotation"],update:function(t){var e=this,n=e.getMeta().data
V.each(n,(function(n,i){e.updateElement(n,i,t)}))},updateElement:function(t,e,n){var i=this,a=i.getMeta(),r=t.custom||{},o=i.getScaleForId(a.xAxisID),s=i.getScaleForId(a.yAxisID),l=i._resolveDataElementOptions(t,e),u=i.getDataset().data[e],d=i.index,h=n?o.getPixelForDecimal(.5):o.getPixelForValue("object"==typeof u?u:NaN,e,d),c=n?s.getBasePixel():s.getPixelForValue(u,e,d)
t._xScale=o,t._yScale=s,t._options=l,t._datasetIndex=d,t._index=e,t._model={backgroundColor:l.backgroundColor,borderColor:l.borderColor,borderWidth:l.borderWidth,hitRadius:l.hitRadius,pointStyle:l.pointStyle,rotation:l.rotation,radius:n?0:l.radius,skip:r.skip||isNaN(h)||isNaN(c),x:h,y:c},t.pivot()},setHoverStyle:function(t){var e=t._model,n=t._options,i=V.getHoverColor
t.$previousStyle={backgroundColor:e.backgroundColor,borderColor:e.borderColor,borderWidth:e.borderWidth,radius:e.radius},e.backgroundColor=Dt(n.hoverBackgroundColor,i(n.backgroundColor)),e.borderColor=Dt(n.hoverBorderColor,i(n.borderColor)),e.borderWidth=Dt(n.hoverBorderWidth,n.borderWidth),e.radius=n.radius+n.hoverRadius},_resolveDataElementOptions:function(t,e){var n=this,i=n.chart,a=n.getDataset(),r=t.custom||{},o=a.data[e]||{},s=et.prototype._resolveDataElementOptions.apply(n,arguments),l={chart:i,dataIndex:e,dataset:a,datasetIndex:n.index}
return n._cachedDataOpts===s&&(s=V.extend({},s)),s.radius=Ct([r.radius,o.r,n._config.radius,i.options.elements.point.radius],l,e),s}}),Tt=V.valueOrDefault,Ot=Math.PI,At=2*Ot,Ft=Ot/2
N._set("doughnut",{animation:{animateRotate:!0,animateScale:!1},hover:{mode:"single"},legendCallback:function(t){var e,n,i,a=document.createElement("ul"),r=t.data,o=r.datasets,s=r.labels
if(a.setAttribute("class",t.id+"-legend"),o.length)for(e=0,n=o[0].data.length;e<n;++e)(i=a.appendChild(document.createElement("li"))).appendChild(document.createElement("span")).style.backgroundColor=o[0].backgroundColor[e],s[e]&&i.appendChild(document.createTextNode(s[e]))
return a.outerHTML},legend:{labels:{generateLabels:function(t){var e=t.data
return e.labels.length&&e.datasets.length?e.labels.map((function(n,i){var a=t.getDatasetMeta(0),r=a.controller.getStyle(i)
return{text:n,fillStyle:r.backgroundColor,strokeStyle:r.borderColor,lineWidth:r.borderWidth,hidden:isNaN(e.datasets[0].data[i])||a.data[i].hidden,index:i}})):[]}},onClick:function(t,e){var n,i,a,r=e.index,o=this.chart
for(n=0,i=(o.data.datasets||[]).length;n<i;++n)(a=o.getDatasetMeta(n)).data[r]&&(a.data[r].hidden=!a.data[r].hidden)
o.update()}},cutoutPercentage:50,rotation:-Ft,circumference:At,tooltips:{callbacks:{title:function(){return""},label:function(t,e){var n=e.labels[t.index],i=": "+e.datasets[t.datasetIndex].data[t.index]
return V.isArray(n)?(n=n.slice())[0]+=i:n+=i,n}}}})
var It=et.extend({dataElementType:bt.Arc,linkScales:V.noop,_dataElementOptions:["backgroundColor","borderColor","borderWidth","borderAlign","hoverBackgroundColor","hoverBorderColor","hoverBorderWidth"],getRingIndex:function(t){for(var e=0,n=0;n<t;++n)this.chart.isDatasetVisible(n)&&++e
return e},update:function(t){var e,n,i,a,r=this,o=r.chart,s=o.chartArea,l=o.options,u=1,d=1,h=0,c=0,f=r.getMeta(),g=f.data,m=l.cutoutPercentage/100||0,p=l.circumference,v=r._getRingWeight(r.index)
if(p<At){var b=l.rotation%At,y=(b+=b>=Ot?-At:b<-Ot?At:0)+p,x=Math.cos(b),_=Math.sin(b),w=Math.cos(y),k=Math.sin(y),M=b<=0&&y>=0||y>=At,S=b<=Ft&&y>=Ft||y>=At+Ft,D=b<=-Ft&&y>=-Ft||y>=Ot+Ft,C=b===-Ot||y>=Ot?-1:Math.min(x,x*m,w,w*m),P=D?-1:Math.min(_,_*m,k,k*m),T=M?1:Math.max(x,x*m,w,w*m),O=S?1:Math.max(_,_*m,k,k*m)
u=(T-C)/2,d=(O-P)/2,h=-(T+C)/2,c=-(O+P)/2}for(i=0,a=g.length;i<a;++i)g[i]._options=r._resolveDataElementOptions(g[i],i)
for(o.borderWidth=r.getMaxBorderWidth(),e=(s.right-s.left-o.borderWidth)/u,n=(s.bottom-s.top-o.borderWidth)/d,o.outerRadius=Math.max(Math.min(e,n)/2,0),o.innerRadius=Math.max(o.outerRadius*m,0),o.radiusLength=(o.outerRadius-o.innerRadius)/(r._getVisibleDatasetWeightTotal()||1),o.offsetX=h*o.outerRadius,o.offsetY=c*o.outerRadius,f.total=r.calculateTotal(),r.outerRadius=o.outerRadius-o.radiusLength*r._getRingWeightOffset(r.index),r.innerRadius=Math.max(r.outerRadius-o.radiusLength*v,0),i=0,a=g.length;i<a;++i)r.updateElement(g[i],i,t)},updateElement:function(t,e,n){var i=this,a=i.chart,r=a.chartArea,o=a.options,s=o.animation,l=(r.left+r.right)/2,u=(r.top+r.bottom)/2,d=o.rotation,h=o.rotation,c=i.getDataset(),f=n&&s.animateRotate||t.hidden?0:i.calculateCircumference(c.data[e])*(o.circumference/At),g=n&&s.animateScale?0:i.innerRadius,m=n&&s.animateScale?0:i.outerRadius,p=t._options||{}
V.extend(t,{_datasetIndex:i.index,_index:e,_model:{backgroundColor:p.backgroundColor,borderColor:p.borderColor,borderWidth:p.borderWidth,borderAlign:p.borderAlign,x:l+a.offsetX,y:u+a.offsetY,startAngle:d,endAngle:h,circumference:f,outerRadius:m,innerRadius:g,label:V.valueAtIndexOrDefault(c.label,e,a.data.labels[e])}})
var v=t._model
n&&s.animateRotate||(v.startAngle=0===e?o.rotation:i.getMeta().data[e-1]._model.endAngle,v.endAngle=v.startAngle+v.circumference),t.pivot()},calculateTotal:function(){var t,e=this.getDataset(),n=this.getMeta(),i=0
return V.each(n.data,(function(n,a){t=e.data[a],isNaN(t)||n.hidden||(i+=Math.abs(t))})),i},calculateCircumference:function(t){var e=this.getMeta().total
return e>0&&!isNaN(t)?At*(Math.abs(t)/e):0},getMaxBorderWidth:function(t){var e,n,i,a,r,o,s,l,u=0,d=this.chart
if(!t)for(e=0,n=d.data.datasets.length;e<n;++e)if(d.isDatasetVisible(e)){t=(i=d.getDatasetMeta(e)).data,e!==this.index&&(r=i.controller)
break}if(!t)return 0
for(e=0,n=t.length;e<n;++e)a=t[e],r?(r._configure(),o=r._resolveDataElementOptions(a,e)):o=a._options,"inner"!==o.borderAlign&&(s=o.borderWidth,u=(l=o.hoverBorderWidth)>(u=s>u?s:u)?l:u)
return u},setHoverStyle:function(t){var e=t._model,n=t._options,i=V.getHoverColor
t.$previousStyle={backgroundColor:e.backgroundColor,borderColor:e.borderColor,borderWidth:e.borderWidth},e.backgroundColor=Tt(n.hoverBackgroundColor,i(n.backgroundColor)),e.borderColor=Tt(n.hoverBorderColor,i(n.borderColor)),e.borderWidth=Tt(n.hoverBorderWidth,n.borderWidth)},_getRingWeightOffset:function(t){for(var e=0,n=0;n<t;++n)this.chart.isDatasetVisible(n)&&(e+=this._getRingWeight(n))
return e},_getRingWeight:function(t){return Math.max(Tt(this.chart.data.datasets[t].weight,1),0)},_getVisibleDatasetWeightTotal:function(){return this._getRingWeightOffset(this.chart.data.datasets.length)}})
N._set("horizontalBar",{hover:{mode:"index",axis:"y"},scales:{xAxes:[{type:"linear",position:"bottom"}],yAxes:[{type:"category",position:"left",offset:!0,gridLines:{offsetGridLines:!0}}]},elements:{rectangle:{borderSkipped:"left"}},tooltips:{mode:"index",axis:"y"}}),N._set("global",{datasets:{horizontalBar:{categoryPercentage:.8,barPercentage:.9}}})
var Lt=St.extend({_getValueScaleId:function(){return this.getMeta().xAxisID},_getIndexScaleId:function(){return this.getMeta().yAxisID}}),Rt=V.valueOrDefault,Nt=V.options.resolve,Wt=V.canvas._isPointInArea
function Yt(t,e){var n=t&&t.options.ticks||{},i=n.reverse,a=void 0===n.min?e:0,r=void 0===n.max?e:0
return{start:i?r:a,end:i?a:r}}N._set("line",{showLines:!0,spanGaps:!1,hover:{mode:"label"},scales:{xAxes:[{type:"category",id:"x-axis-0"}],yAxes:[{type:"linear",id:"y-axis-0"}]}})
var zt=et.extend({datasetElementType:bt.Line,dataElementType:bt.Point,_datasetElementOptions:["backgroundColor","borderCapStyle","borderColor","borderDash","borderDashOffset","borderJoinStyle","borderWidth","cubicInterpolationMode","fill"],_dataElementOptions:{backgroundColor:"pointBackgroundColor",borderColor:"pointBorderColor",borderWidth:"pointBorderWidth",hitRadius:"pointHitRadius",hoverBackgroundColor:"pointHoverBackgroundColor",hoverBorderColor:"pointHoverBorderColor",hoverBorderWidth:"pointHoverBorderWidth",hoverRadius:"pointHoverRadius",pointStyle:"pointStyle",radius:"pointRadius",rotation:"pointRotation"},update:function(t){var e,n,i=this,a=i.getMeta(),r=a.dataset,o=a.data||[],s=i.chart.options,l=i._config,u=i._showLine=Rt(l.showLine,s.showLines)
for(i._xScale=i.getScaleForId(a.xAxisID),i._yScale=i.getScaleForId(a.yAxisID),u&&(void 0!==l.tension&&void 0===l.lineTension&&(l.lineTension=l.tension),r._scale=i._yScale,r._datasetIndex=i.index,r._children=o,r._model=i._resolveDatasetElementOptions(r),r.pivot()),e=0,n=o.length;e<n;++e)i.updateElement(o[e],e,t)
for(u&&0!==r._model.tension&&i.updateBezierControlPoints(),e=0,n=o.length;e<n;++e)o[e].pivot()},updateElement:function(t,e,n){var i,a,r=this,o=r.getMeta(),s=t.custom||{},l=r.getDataset(),u=r.index,d=l.data[e],h=r._xScale,c=r._yScale,f=o.dataset._model,g=r._resolveDataElementOptions(t,e)
i=h.getPixelForValue("object"==typeof d?d:NaN,e,u),a=n?c.getBasePixel():r.calculatePointY(d,e,u),t._xScale=h,t._yScale=c,t._options=g,t._datasetIndex=u,t._index=e,t._model={x:i,y:a,skip:s.skip||isNaN(i)||isNaN(a),radius:g.radius,pointStyle:g.pointStyle,rotation:g.rotation,backgroundColor:g.backgroundColor,borderColor:g.borderColor,borderWidth:g.borderWidth,tension:Rt(s.tension,f?f.tension:0),steppedLine:!!f&&f.steppedLine,hitRadius:g.hitRadius}},_resolveDatasetElementOptions:function(t){var e=this,n=e._config,i=t.custom||{},a=e.chart.options,r=a.elements.line,o=et.prototype._resolveDatasetElementOptions.apply(e,arguments)
return o.spanGaps=Rt(n.spanGaps,a.spanGaps),o.tension=Rt(n.lineTension,r.tension),o.steppedLine=Nt([i.steppedLine,n.steppedLine,r.stepped]),o.clip=function(t){var e,n,i,a
return V.isObject(t)?(e=t.top,n=t.right,i=t.bottom,a=t.left):e=n=i=a=t,{top:e,right:n,bottom:i,left:a}}(Rt(n.clip,function(t,e,n){var i=n/2,a=Yt(t,i),r=Yt(e,i)
return{top:r.end,right:a.end,bottom:r.start,left:a.start}}(e._xScale,e._yScale,o.borderWidth))),o},calculatePointY:function(t,e,n){var i,a,r,o,s,l,u,d=this.chart,h=this._yScale,c=0,f=0
if(h.options.stacked){for(s=+h.getRightValue(t),u=(l=d._getSortedVisibleDatasetMetas()).length,i=0;i<u&&(r=l[i]).index!==n;++i)a=d.data.datasets[r.index],"line"===r.type&&r.yAxisID===h.id&&((o=+h.getRightValue(a.data[e]))<0?f+=o||0:c+=o||0)
return s<0?h.getPixelForValue(f+s):h.getPixelForValue(c+s)}return h.getPixelForValue(t)},updateBezierControlPoints:function(){var t,e,n,i,a=this.chart,r=this.getMeta(),o=r.dataset._model,s=a.chartArea,l=r.data||[]
function u(t,e,n){return Math.max(Math.min(t,n),e)}if(o.spanGaps&&(l=l.filter((function(t){return!t._model.skip}))),"monotone"===o.cubicInterpolationMode)V.splineCurveMonotone(l)
else for(t=0,e=l.length;t<e;++t)n=l[t]._model,i=V.splineCurve(V.previousItem(l,t)._model,n,V.nextItem(l,t)._model,o.tension),n.controlPointPreviousX=i.previous.x,n.controlPointPreviousY=i.previous.y,n.controlPointNextX=i.next.x,n.controlPointNextY=i.next.y
if(a.options.elements.line.capBezierPoints)for(t=0,e=l.length;t<e;++t)n=l[t]._model,Wt(n,s)&&(t>0&&Wt(l[t-1]._model,s)&&(n.controlPointPreviousX=u(n.controlPointPreviousX,s.left,s.right),n.controlPointPreviousY=u(n.controlPointPreviousY,s.top,s.bottom)),t<l.length-1&&Wt(l[t+1]._model,s)&&(n.controlPointNextX=u(n.controlPointNextX,s.left,s.right),n.controlPointNextY=u(n.controlPointNextY,s.top,s.bottom)))},draw:function(){var t,e=this.chart,n=this.getMeta(),i=n.data||[],a=e.chartArea,r=e.canvas,o=0,s=i.length
for(this._showLine&&(t=n.dataset._model.clip,V.canvas.clipArea(e.ctx,{left:!1===t.left?0:a.left-t.left,right:!1===t.right?r.width:a.right+t.right,top:!1===t.top?0:a.top-t.top,bottom:!1===t.bottom?r.height:a.bottom+t.bottom}),n.dataset.draw(),V.canvas.unclipArea(e.ctx));o<s;++o)i[o].draw(a)},setHoverStyle:function(t){var e=t._model,n=t._options,i=V.getHoverColor
t.$previousStyle={backgroundColor:e.backgroundColor,borderColor:e.borderColor,borderWidth:e.borderWidth,radius:e.radius},e.backgroundColor=Rt(n.hoverBackgroundColor,i(n.backgroundColor)),e.borderColor=Rt(n.hoverBorderColor,i(n.borderColor)),e.borderWidth=Rt(n.hoverBorderWidth,n.borderWidth),e.radius=Rt(n.hoverRadius,n.radius)}}),Et=V.options.resolve
N._set("polarArea",{scale:{type:"radialLinear",angleLines:{display:!1},gridLines:{circular:!0},pointLabels:{display:!1},ticks:{beginAtZero:!0}},animation:{animateRotate:!0,animateScale:!0},startAngle:-.5*Math.PI,legendCallback:function(t){var e,n,i,a=document.createElement("ul"),r=t.data,o=r.datasets,s=r.labels
if(a.setAttribute("class",t.id+"-legend"),o.length)for(e=0,n=o[0].data.length;e<n;++e)(i=a.appendChild(document.createElement("li"))).appendChild(document.createElement("span")).style.backgroundColor=o[0].backgroundColor[e],s[e]&&i.appendChild(document.createTextNode(s[e]))
return a.outerHTML},legend:{labels:{generateLabels:function(t){var e=t.data
return e.labels.length&&e.datasets.length?e.labels.map((function(n,i){var a=t.getDatasetMeta(0),r=a.controller.getStyle(i)
return{text:n,fillStyle:r.backgroundColor,strokeStyle:r.borderColor,lineWidth:r.borderWidth,hidden:isNaN(e.datasets[0].data[i])||a.data[i].hidden,index:i}})):[]}},onClick:function(t,e){var n,i,a,r=e.index,o=this.chart
for(n=0,i=(o.data.datasets||[]).length;n<i;++n)(a=o.getDatasetMeta(n)).data[r].hidden=!a.data[r].hidden
o.update()}},tooltips:{callbacks:{title:function(){return""},label:function(t,e){return e.labels[t.index]+": "+t.yLabel}}}})
var Vt=et.extend({dataElementType:bt.Arc,linkScales:V.noop,_dataElementOptions:["backgroundColor","borderColor","borderWidth","borderAlign","hoverBackgroundColor","hoverBorderColor","hoverBorderWidth"],_getIndexScaleId:function(){return this.chart.scale.id},_getValueScaleId:function(){return this.chart.scale.id},update:function(t){var e,n,i,a=this,r=a.getDataset(),o=a.getMeta(),s=a.chart.options.startAngle||0,l=a._starts=[],u=a._angles=[],d=o.data
for(a._updateRadius(),o.count=a.countVisibleElements(),e=0,n=r.data.length;e<n;e++)l[e]=s,i=a._computeAngle(e),u[e]=i,s+=i
for(e=0,n=d.length;e<n;++e)d[e]._options=a._resolveDataElementOptions(d[e],e),a.updateElement(d[e],e,t)},_updateRadius:function(){var t=this,e=t.chart,n=e.chartArea,i=e.options,a=Math.min(n.right-n.left,n.bottom-n.top)
e.outerRadius=Math.max(a/2,0),e.innerRadius=Math.max(i.cutoutPercentage?e.outerRadius/100*i.cutoutPercentage:1,0),e.radiusLength=(e.outerRadius-e.innerRadius)/e.getVisibleDatasetCount(),t.outerRadius=e.outerRadius-e.radiusLength*t.index,t.innerRadius=t.outerRadius-e.radiusLength},updateElement:function(t,e,n){var i=this,a=i.chart,r=i.getDataset(),o=a.options,s=o.animation,l=a.scale,u=a.data.labels,d=l.xCenter,h=l.yCenter,c=o.startAngle,f=t.hidden?0:l.getDistanceFromCenterForValue(r.data[e]),g=i._starts[e],m=g+(t.hidden?0:i._angles[e]),p=s.animateScale?0:l.getDistanceFromCenterForValue(r.data[e]),v=t._options||{}
V.extend(t,{_datasetIndex:i.index,_index:e,_scale:l,_model:{backgroundColor:v.backgroundColor,borderColor:v.borderColor,borderWidth:v.borderWidth,borderAlign:v.borderAlign,x:d,y:h,innerRadius:0,outerRadius:n?p:f,startAngle:n&&s.animateRotate?c:g,endAngle:n&&s.animateRotate?c:m,label:V.valueAtIndexOrDefault(u,e,u[e])}}),t.pivot()},countVisibleElements:function(){var t=this.getDataset(),e=this.getMeta(),n=0
return V.each(e.data,(function(e,i){isNaN(t.data[i])||e.hidden||n++})),n},setHoverStyle:function(t){var e=t._model,n=t._options,i=V.getHoverColor,a=V.valueOrDefault
t.$previousStyle={backgroundColor:e.backgroundColor,borderColor:e.borderColor,borderWidth:e.borderWidth},e.backgroundColor=a(n.hoverBackgroundColor,i(n.backgroundColor)),e.borderColor=a(n.hoverBorderColor,i(n.borderColor)),e.borderWidth=a(n.hoverBorderWidth,n.borderWidth)},_computeAngle:function(t){var e=this,n=this.getMeta().count,i=e.getDataset(),a=e.getMeta()
if(isNaN(i.data[t])||a.data[t].hidden)return 0
var r={chart:e.chart,dataIndex:t,dataset:i,datasetIndex:e.index}
return Et([e.chart.options.elements.arc.angle,2*Math.PI/n],r,t)}})
N._set("pie",V.clone(N.doughnut)),N._set("pie",{cutoutPercentage:0})
var Ht=It,Bt=V.valueOrDefault
N._set("radar",{spanGaps:!1,scale:{type:"radialLinear"},elements:{line:{fill:"start",tension:0}}})
var jt=et.extend({datasetElementType:bt.Line,dataElementType:bt.Point,linkScales:V.noop,_datasetElementOptions:["backgroundColor","borderWidth","borderColor","borderCapStyle","borderDash","borderDashOffset","borderJoinStyle","fill"],_dataElementOptions:{backgroundColor:"pointBackgroundColor",borderColor:"pointBorderColor",borderWidth:"pointBorderWidth",hitRadius:"pointHitRadius",hoverBackgroundColor:"pointHoverBackgroundColor",hoverBorderColor:"pointHoverBorderColor",hoverBorderWidth:"pointHoverBorderWidth",hoverRadius:"pointHoverRadius",pointStyle:"pointStyle",radius:"pointRadius",rotation:"pointRotation"},_getIndexScaleId:function(){return this.chart.scale.id},_getValueScaleId:function(){return this.chart.scale.id},update:function(t){var e,n,i=this,a=i.getMeta(),r=a.dataset,o=a.data||[],s=i.chart.scale,l=i._config
for(void 0!==l.tension&&void 0===l.lineTension&&(l.lineTension=l.tension),r._scale=s,r._datasetIndex=i.index,r._children=o,r._loop=!0,r._model=i._resolveDatasetElementOptions(r),r.pivot(),e=0,n=o.length;e<n;++e)i.updateElement(o[e],e,t)
for(i.updateBezierControlPoints(),e=0,n=o.length;e<n;++e)o[e].pivot()},updateElement:function(t,e,n){var i=this,a=t.custom||{},r=i.getDataset(),o=i.chart.scale,s=o.getPointPositionForValue(e,r.data[e]),l=i._resolveDataElementOptions(t,e),u=i.getMeta().dataset._model,d=n?o.xCenter:s.x,h=n?o.yCenter:s.y
t._scale=o,t._options=l,t._datasetIndex=i.index,t._index=e,t._model={x:d,y:h,skip:a.skip||isNaN(d)||isNaN(h),radius:l.radius,pointStyle:l.pointStyle,rotation:l.rotation,backgroundColor:l.backgroundColor,borderColor:l.borderColor,borderWidth:l.borderWidth,tension:Bt(a.tension,u?u.tension:0),hitRadius:l.hitRadius}},_resolveDatasetElementOptions:function(){var t=this,e=t._config,n=t.chart.options,i=et.prototype._resolveDatasetElementOptions.apply(t,arguments)
return i.spanGaps=Bt(e.spanGaps,n.spanGaps),i.tension=Bt(e.lineTension,n.elements.line.tension),i},updateBezierControlPoints:function(){var t,e,n,i,a=this.getMeta(),r=this.chart.chartArea,o=a.data||[]
function s(t,e,n){return Math.max(Math.min(t,n),e)}for(a.dataset._model.spanGaps&&(o=o.filter((function(t){return!t._model.skip}))),t=0,e=o.length;t<e;++t)n=o[t]._model,i=V.splineCurve(V.previousItem(o,t,!0)._model,n,V.nextItem(o,t,!0)._model,n.tension),n.controlPointPreviousX=s(i.previous.x,r.left,r.right),n.controlPointPreviousY=s(i.previous.y,r.top,r.bottom),n.controlPointNextX=s(i.next.x,r.left,r.right),n.controlPointNextY=s(i.next.y,r.top,r.bottom)},setHoverStyle:function(t){var e=t._model,n=t._options,i=V.getHoverColor
t.$previousStyle={backgroundColor:e.backgroundColor,borderColor:e.borderColor,borderWidth:e.borderWidth,radius:e.radius},e.backgroundColor=Bt(n.hoverBackgroundColor,i(n.backgroundColor)),e.borderColor=Bt(n.hoverBorderColor,i(n.borderColor)),e.borderWidth=Bt(n.hoverBorderWidth,n.borderWidth),e.radius=Bt(n.hoverRadius,n.radius)}})
N._set("scatter",{hover:{mode:"single"},scales:{xAxes:[{id:"x-axis-1",type:"linear",position:"bottom"}],yAxes:[{id:"y-axis-1",type:"linear",position:"left"}]},tooltips:{callbacks:{title:function(){return""},label:function(t){return"("+t.xLabel+", "+t.yLabel+")"}}}}),N._set("global",{datasets:{scatter:{showLine:!1}}})
var Ut={bar:St,bubble:Pt,doughnut:It,horizontalBar:Lt,line:zt,polarArea:Vt,pie:Ht,radar:jt,scatter:zt}
function Gt(t,e){return t.native?{x:t.x,y:t.y}:V.getRelativePosition(t,e)}function qt(t,e){var n,i,a,r,o,s,l=t._getSortedVisibleDatasetMetas()
for(i=0,r=l.length;i<r;++i)for(a=0,o=(n=l[i].data).length;a<o;++a)(s=n[a])._view.skip||e(s)}function Zt(t,e){var n=[]
return qt(t,(function(t){t.inRange(e.x,e.y)&&n.push(t)})),n}function $t(t,e,n,i){var a=Number.POSITIVE_INFINITY,r=[]
return qt(t,(function(t){if(!n||t.inRange(e.x,e.y)){var o=t.getCenterPoint(),s=i(e,o)
s<a?(r=[t],a=s):s===a&&r.push(t)}})),r}function Xt(t){var e=-1!==t.indexOf("x"),n=-1!==t.indexOf("y")
return function(t,i){var a=e?Math.abs(t.x-i.x):0,r=n?Math.abs(t.y-i.y):0
return Math.sqrt(Math.pow(a,2)+Math.pow(r,2))}}function Kt(t,e,n){var i=Gt(e,t)
n.axis=n.axis||"x"
var a=Xt(n.axis),r=n.intersect?Zt(t,i):$t(t,i,!1,a),o=[]
return r.length?(t._getSortedVisibleDatasetMetas().forEach((function(t){var e=t.data[r[0]._index]
e&&!e._view.skip&&o.push(e)})),o):[]}var Jt={modes:{single:function(t,e){var n=Gt(e,t),i=[]
return qt(t,(function(t){if(t.inRange(n.x,n.y))return i.push(t),i})),i.slice(0,1)},label:Kt,index:Kt,dataset:function(t,e,n){var i=Gt(e,t)
n.axis=n.axis||"xy"
var a=Xt(n.axis),r=n.intersect?Zt(t,i):$t(t,i,!1,a)
return r.length>0&&(r=t.getDatasetMeta(r[0]._datasetIndex).data),r},"x-axis":function(t,e){return Kt(t,e,{intersect:!1})},point:function(t,e){return Zt(t,Gt(e,t))},nearest:function(t,e,n){var i=Gt(e,t)
n.axis=n.axis||"xy"
var a=Xt(n.axis)
return $t(t,i,n.intersect,a)},x:function(t,e,n){var i=Gt(e,t),a=[],r=!1
return qt(t,(function(t){t.inXRange(i.x)&&a.push(t),t.inRange(i.x,i.y)&&(r=!0)})),n.intersect&&!r&&(a=[]),a},y:function(t,e,n){var i=Gt(e,t),a=[],r=!1
return qt(t,(function(t){t.inYRange(i.y)&&a.push(t),t.inRange(i.x,i.y)&&(r=!0)})),n.intersect&&!r&&(a=[]),a}}},Qt=V.extend
function te(t,e){return V.where(t,(function(t){return t.pos===e}))}function ee(t,e){return t.sort((function(t,n){var i=e?n:t,a=e?t:n
return i.weight===a.weight?i.index-a.index:i.weight-a.weight}))}function ne(t,e,n,i){return Math.max(t[n],e[n])+Math.max(t[i],e[i])}function ie(t,e,n){var i,a,r=n.box,o=t.maxPadding
if(n.size&&(t[n.pos]-=n.size),n.size=n.horizontal?r.height:r.width,t[n.pos]+=n.size,r.getPadding){var s=r.getPadding()
o.top=Math.max(o.top,s.top),o.left=Math.max(o.left,s.left),o.bottom=Math.max(o.bottom,s.bottom),o.right=Math.max(o.right,s.right)}if(i=e.outerWidth-ne(o,t,"left","right"),a=e.outerHeight-ne(o,t,"top","bottom"),i!==t.w||a!==t.h)return t.w=i,t.h=a,n.horizontal?i!==t.w:a!==t.h}function ae(t,e){var n=e.maxPadding
return function(t){var i={left:0,top:0,right:0,bottom:0}
return t.forEach((function(t){i[t]=Math.max(e[t],n[t])})),i}(t?["left","right"]:["top","bottom"])}function re(t,e,n){var i,a,r,o,s,l,u=[]
for(i=0,a=t.length;i<a;++i)(o=(r=t[i]).box).update(r.width||e.w,r.height||e.h,ae(r.horizontal,e)),ie(e,n,r)&&(l=!0,u.length&&(s=!0)),o.fullWidth||u.push(r)
return s&&re(u,e,n)||l}function oe(t,e,n){var i,a,r,o,s=n.padding,l=e.x,u=e.y
for(i=0,a=t.length;i<a;++i)o=(r=t[i]).box,r.horizontal?(o.left=o.fullWidth?s.left:e.left,o.right=o.fullWidth?n.outerWidth-s.right:e.left+e.w,o.top=u,o.bottom=u+o.height,o.width=o.right-o.left,u=o.bottom):(o.left=l,o.right=l+o.width,o.top=e.top,o.bottom=e.top+e.h,o.height=o.bottom-o.top,l=o.right)
e.x=l,e.y=u}N._set("global",{layout:{padding:{top:0,right:0,bottom:0,left:0}}})
var se,le={defaults:{},addBox:function(t,e){t.boxes||(t.boxes=[]),e.fullWidth=e.fullWidth||!1,e.position=e.position||"top",e.weight=e.weight||0,e._layers=e._layers||function(){return[{z:0,draw:function(){e.draw.apply(e,arguments)}}]},t.boxes.push(e)},removeBox:function(t,e){var n=t.boxes?t.boxes.indexOf(e):-1;-1!==n&&t.boxes.splice(n,1)},configure:function(t,e,n){for(var i,a=["fullWidth","position","weight"],r=a.length,o=0;o<r;++o)i=a[o],n.hasOwnProperty(i)&&(e[i]=n[i])},update:function(t,e,n){if(t){var i=t.options.layout||{},a=V.options.toPadding(i.padding),r=e-a.width,o=n-a.height,s=function(t){var e=function(t){var e,n,i,a=[]
for(e=0,n=(t||[]).length;e<n;++e)i=t[e],a.push({index:e,box:i,pos:i.position,horizontal:i.isHorizontal(),weight:i.weight})
return a}(t),n=ee(te(e,"left"),!0),i=ee(te(e,"right")),a=ee(te(e,"top"),!0),r=ee(te(e,"bottom"))
return{leftAndTop:n.concat(a),rightAndBottom:i.concat(r),chartArea:te(e,"chartArea"),vertical:n.concat(i),horizontal:a.concat(r)}}(t.boxes),l=s.vertical,u=s.horizontal,d=Object.freeze({outerWidth:e,outerHeight:n,padding:a,availableWidth:r,vBoxMaxWidth:r/2/l.length,hBoxMaxHeight:o/2}),h=Qt({maxPadding:Qt({},a),w:r,h:o,x:a.left,y:a.top},a)
!function(t,e){var n,i,a
for(n=0,i=t.length;n<i;++n)(a=t[n]).width=a.horizontal?a.box.fullWidth&&e.availableWidth:e.vBoxMaxWidth,a.height=a.horizontal&&e.hBoxMaxHeight}(l.concat(u),d),re(l,h,d),re(u,h,d)&&re(l,h,d),function(t){var e=t.maxPadding
function n(n){var i=Math.max(e[n]-t[n],0)
return t[n]+=i,i}t.y+=n("top"),t.x+=n("left"),n("right"),n("bottom")}(h),oe(s.leftAndTop,h,d),h.x+=h.w,h.y+=h.h,oe(s.rightAndBottom,h,d),t.chartArea={left:h.left,top:h.top,right:h.left+h.w,bottom:h.top+h.h},V.each(s.chartArea,(function(e){var n=e.box
Qt(n,t.chartArea),n.update(h.w,h.h)}))}}},ue=(se=Object.freeze({__proto__:null,default:"@keyframes chartjs-render-animation{from{opacity:.99}to{opacity:1}}.chartjs-render-monitor{animation:chartjs-render-animation 1ms}.chartjs-size-monitor,.chartjs-size-monitor-expand,.chartjs-size-monitor-shrink{position:absolute;direction:ltr;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1}.chartjs-size-monitor-expand>div{position:absolute;width:1000000px;height:1000000px;left:0;top:0}.chartjs-size-monitor-shrink>div{position:absolute;width:200%;height:200%;left:0;top:0}"}))&&se.default||se,de="$chartjs",he="chartjs-size-monitor",ce="chartjs-render-monitor",fe=["animationstart","webkitAnimationStart"],ge={touchstart:"mousedown",touchmove:"mousemove",touchend:"mouseup",pointerenter:"mouseenter",pointerdown:"mousedown",pointermove:"mousemove",pointerup:"mouseup",pointerleave:"mouseout",pointerout:"mouseout"}
function me(t,e){var n=V.getStyle(t,e),i=n&&n.match(/^(\d+)(\.\d+)?px$/)
return i?Number(i[1]):void 0}var pe=!!function(){var t=!1
try{var e=Object.defineProperty({},"passive",{get:function(){t=!0}})
window.addEventListener("e",null,e)}catch(t){}return t}()&&{passive:!0}
function ve(t,e,n){t.addEventListener(e,n,pe)}function be(t,e,n){t.removeEventListener(e,n,pe)}function ye(t,e,n,i,a){return{type:t,chart:e,native:a||null,x:void 0!==n?n:null,y:void 0!==i?i:null}}function xe(t){var e=document.createElement("div")
return e.className=t||"",e}var _e={disableCSSInjection:!1,_enabled:"undefined"!=typeof window&&"undefined"!=typeof document,_ensureLoaded:function(t){if(!this.disableCSSInjection){var e=t.getRootNode?t.getRootNode():document
!function(t,e){var n=t[de]||(t[de]={})
if(!n.containsStyles){n.containsStyles=!0,e="/* Chart.js */\n"+e
var i=document.createElement("style")
i.setAttribute("type","text/css"),i.appendChild(document.createTextNode(e)),t.appendChild(i)}}(e.host?e:document.head,ue)}},acquireContext:function(t,e){"string"==typeof t?t=document.getElementById(t):t.length&&(t=t[0]),t&&t.canvas&&(t=t.canvas)
var n=t&&t.getContext&&t.getContext("2d")
return n&&n.canvas===t?(this._ensureLoaded(t),function(t,e){var n=t.style,i=t.getAttribute("height"),a=t.getAttribute("width")
if(t[de]={initial:{height:i,width:a,style:{display:n.display,height:n.height,width:n.width}}},n.display=n.display||"block",null===a||""===a){var r=me(t,"width")
void 0!==r&&(t.width=r)}if(null===i||""===i)if(""===t.style.height)t.height=t.width/(e.options.aspectRatio||2)
else{var o=me(t,"height")
void 0!==r&&(t.height=o)}}(t,e),n):null},releaseContext:function(t){var e=t.canvas
if(e[de]){var n=e[de].initial;["height","width"].forEach((function(t){var i=n[t]
V.isNullOrUndef(i)?e.removeAttribute(t):e.setAttribute(t,i)})),V.each(n.style||{},(function(t,n){e.style[n]=t})),e.width=e.width,delete e[de]}},addEventListener:function(t,e,n){var i=t.canvas
if("resize"!==e){var a=n[de]||(n[de]={})
ve(i,e,(a.proxies||(a.proxies={}))[t.id+"_"+e]=function(e){n(function(t,e){var n=ge[t.type]||t.type,i=V.getRelativePosition(t,e)
return ye(n,e,i.x,i.y,t)}(e,t))})}else(function(t,e,n){var i,a,r,o,s=t[de]||(t[de]={}),l=s.resizer=function(t){var e=xe(he),n=xe(he+"-expand"),i=xe(he+"-shrink")
n.appendChild(xe()),i.appendChild(xe()),e.appendChild(n),e.appendChild(i),e._reset=function(){n.scrollLeft=1e6,n.scrollTop=1e6,i.scrollLeft=1e6,i.scrollTop=1e6}
var a=function(){e._reset(),t()}
return ve(n,"scroll",a.bind(n,"expand")),ve(i,"scroll",a.bind(i,"shrink")),e}((i=function(){if(s.resizer){var i=n.options.maintainAspectRatio&&t.parentNode,a=i?i.clientWidth:0
e(ye("resize",n)),i&&i.clientWidth<a&&n.canvas&&e(ye("resize",n))}},r=!1,o=[],function(){o=Array.prototype.slice.call(arguments),a=a||this,r||(r=!0,V.requestAnimFrame.call(window,(function(){r=!1,i.apply(a,o)})))}))
!function(t,e){var n=t[de]||(t[de]={}),i=n.renderProxy=function(t){"chartjs-render-animation"===t.animationName&&e()}
V.each(fe,(function(e){ve(t,e,i)})),n.reflow=!!t.offsetParent,t.classList.add(ce)}(t,(function(){if(s.resizer){var e=t.parentNode
e&&e!==l.parentNode&&e.insertBefore(l,e.firstChild),l._reset()}}))})(i,n,t)},removeEventListener:function(t,e,n){var i=t.canvas
if("resize"!==e){var a=((n[de]||{}).proxies||{})[t.id+"_"+e]
a&&be(i,e,a)}else(function(t){var e=t[de]||{},n=e.resizer
delete e.resizer,function(t){var e=t[de]||{},n=e.renderProxy
n&&(V.each(fe,(function(e){be(t,e,n)})),delete e.renderProxy),t.classList.remove(ce)}(t),n&&n.parentNode&&n.parentNode.removeChild(n)})(i)}}
V.addEvent=ve,V.removeEvent=be
var we=_e._enabled?_e:{acquireContext:function(t){return t&&t.canvas&&(t=t.canvas),t&&t.getContext("2d")||null}},ke=V.extend({initialize:function(){},acquireContext:function(){},releaseContext:function(){},addEventListener:function(){},removeEventListener:function(){}},we)
N._set("global",{plugins:{}})
var Me={_plugins:[],_cacheId:0,register:function(t){var e=this._plugins;[].concat(t).forEach((function(t){-1===e.indexOf(t)&&e.push(t)})),this._cacheId++},unregister:function(t){var e=this._plugins;[].concat(t).forEach((function(t){var n=e.indexOf(t);-1!==n&&e.splice(n,1)})),this._cacheId++},clear:function(){this._plugins=[],this._cacheId++},count:function(){return this._plugins.length},getAll:function(){return this._plugins},notify:function(t,e,n){var i,a,r,o,s,l=this.descriptors(t),u=l.length
for(i=0;i<u;++i)if("function"==typeof(s=(r=(a=l[i]).plugin)[e])&&((o=[t].concat(n||[])).push(a.options),!1===s.apply(r,o)))return!1
return!0},descriptors:function(t){var e=t.$plugins||(t.$plugins={})
if(e.id===this._cacheId)return e.descriptors
var n=[],i=[],a=t&&t.config||{},r=a.options&&a.options.plugins||{}
return this._plugins.concat(a.plugins||[]).forEach((function(t){if(-1===n.indexOf(t)){var e=t.id,a=r[e]
!1!==a&&(!0===a&&(a=V.clone(N.global.plugins[e])),n.push(t),i.push({plugin:t,options:a||{}}))}})),e.descriptors=i,e.id=this._cacheId,i},_invalidate:function(t){delete t.$plugins}},Se={constructors:{},defaults:{},registerScaleType:function(t,e,n){this.constructors[t]=e,this.defaults[t]=V.clone(n)},getScaleConstructor:function(t){return this.constructors.hasOwnProperty(t)?this.constructors[t]:void 0},getScaleDefaults:function(t){return this.defaults.hasOwnProperty(t)?V.merge({},[N.scale,this.defaults[t]]):{}},updateScaleDefaults:function(t,e){this.defaults.hasOwnProperty(t)&&(this.defaults[t]=V.extend(this.defaults[t],e))},addScalesToLayout:function(t){V.each(t.scales,(function(e){e.fullWidth=e.options.fullWidth,e.position=e.options.position,e.weight=e.options.weight,le.addBox(t,e)}))}},De=V.valueOrDefault,Ce=V.rtl.getRtlAdapter
N._set("global",{tooltips:{enabled:!0,custom:null,mode:"nearest",position:"average",intersect:!0,backgroundColor:"rgba(0,0,0,0.8)",titleFontStyle:"bold",titleSpacing:2,titleMarginBottom:6,titleFontColor:"#fff",titleAlign:"left",bodySpacing:2,bodyFontColor:"#fff",bodyAlign:"left",footerFontStyle:"bold",footerSpacing:2,footerMarginTop:6,footerFontColor:"#fff",footerAlign:"left",yPadding:6,xPadding:6,caretPadding:2,caretSize:5,cornerRadius:6,multiKeyBackground:"#fff",displayColors:!0,borderColor:"rgba(0,0,0,0)",borderWidth:0,callbacks:{beforeTitle:V.noop,title:function(t,e){var n="",i=e.labels,a=i?i.length:0
if(t.length>0){var r=t[0]
r.label?n=r.label:r.xLabel?n=r.xLabel:a>0&&r.index<a&&(n=i[r.index])}return n},afterTitle:V.noop,beforeBody:V.noop,beforeLabel:V.noop,label:function(t,e){var n=e.datasets[t.datasetIndex].label||""
return n&&(n+=": "),V.isNullOrUndef(t.value)?n+=t.yLabel:n+=t.value,n},labelColor:function(t,e){var n=e.getDatasetMeta(t.datasetIndex).data[t.index]._view
return{borderColor:n.borderColor,backgroundColor:n.backgroundColor}},labelTextColor:function(){return this._options.bodyFontColor},afterLabel:V.noop,afterBody:V.noop,beforeFooter:V.noop,footer:V.noop,afterFooter:V.noop}}})
var Pe={average:function(t){if(!t.length)return!1
var e,n,i=0,a=0,r=0
for(e=0,n=t.length;e<n;++e){var o=t[e]
if(o&&o.hasValue()){var s=o.tooltipPosition()
i+=s.x,a+=s.y,++r}}return{x:i/r,y:a/r}},nearest:function(t,e){var n,i,a,r=e.x,o=e.y,s=Number.POSITIVE_INFINITY
for(n=0,i=t.length;n<i;++n){var l=t[n]
if(l&&l.hasValue()){var u=l.getCenterPoint(),d=V.distanceBetweenPoints(e,u)
d<s&&(s=d,a=l)}}if(a){var h=a.tooltipPosition()
r=h.x,o=h.y}return{x:r,y:o}}}
function Te(t,e){return e&&(V.isArray(e)?Array.prototype.push.apply(t,e):t.push(e)),t}function Oe(t){return("string"==typeof t||t instanceof String)&&t.indexOf("\n")>-1?t.split("\n"):t}function Ae(t){var e=N.global
return{xPadding:t.xPadding,yPadding:t.yPadding,xAlign:t.xAlign,yAlign:t.yAlign,rtl:t.rtl,textDirection:t.textDirection,bodyFontColor:t.bodyFontColor,_bodyFontFamily:De(t.bodyFontFamily,e.defaultFontFamily),_bodyFontStyle:De(t.bodyFontStyle,e.defaultFontStyle),_bodyAlign:t.bodyAlign,bodyFontSize:De(t.bodyFontSize,e.defaultFontSize),bodySpacing:t.bodySpacing,titleFontColor:t.titleFontColor,_titleFontFamily:De(t.titleFontFamily,e.defaultFontFamily),_titleFontStyle:De(t.titleFontStyle,e.defaultFontStyle),titleFontSize:De(t.titleFontSize,e.defaultFontSize),_titleAlign:t.titleAlign,titleSpacing:t.titleSpacing,titleMarginBottom:t.titleMarginBottom,footerFontColor:t.footerFontColor,_footerFontFamily:De(t.footerFontFamily,e.defaultFontFamily),_footerFontStyle:De(t.footerFontStyle,e.defaultFontStyle),footerFontSize:De(t.footerFontSize,e.defaultFontSize),_footerAlign:t.footerAlign,footerSpacing:t.footerSpacing,footerMarginTop:t.footerMarginTop,caretSize:t.caretSize,cornerRadius:t.cornerRadius,backgroundColor:t.backgroundColor,opacity:0,legendColorBackground:t.multiKeyBackground,displayColors:t.displayColors,borderColor:t.borderColor,borderWidth:t.borderWidth}}function Fe(t,e){return"center"===e?t.x+t.width/2:"right"===e?t.x+t.width-t.xPadding:t.x+t.xPadding}function Ie(t){return Te([],Oe(t))}var Le=q.extend({initialize:function(){this._model=Ae(this._options),this._lastActive=[]},getTitle:function(){var t=this,e=t._options.callbacks,n=e.beforeTitle.apply(t,arguments),i=e.title.apply(t,arguments),a=e.afterTitle.apply(t,arguments),r=[]
return r=Te(r,Oe(n)),r=Te(r,Oe(i)),Te(r,Oe(a))},getBeforeBody:function(){return Ie(this._options.callbacks.beforeBody.apply(this,arguments))},getBody:function(t,e){var n=this,i=n._options.callbacks,a=[]
return V.each(t,(function(t){var r={before:[],lines:[],after:[]}
Te(r.before,Oe(i.beforeLabel.call(n,t,e))),Te(r.lines,i.label.call(n,t,e)),Te(r.after,Oe(i.afterLabel.call(n,t,e))),a.push(r)})),a},getAfterBody:function(){return Ie(this._options.callbacks.afterBody.apply(this,arguments))},getFooter:function(){var t=this,e=t._options.callbacks,n=e.beforeFooter.apply(t,arguments),i=e.footer.apply(t,arguments),a=e.afterFooter.apply(t,arguments),r=[]
return r=Te(r,Oe(n)),r=Te(r,Oe(i)),Te(r,Oe(a))},update:function(t){var e,n,i,a,r,o,s,l,u,d,h=this,c=h._options,f=h._model,g=h._model=Ae(c),m=h._active,p=h._data,v={xAlign:f.xAlign,yAlign:f.yAlign},b={x:f.x,y:f.y},y={width:f.width,height:f.height},x={x:f.caretX,y:f.caretY}
if(m.length){g.opacity=1
var _=[],w=[]
x=Pe[c.position].call(h,m,h._eventPosition)
var k=[]
for(e=0,n=m.length;e<n;++e)k.push((a=void 0,r=void 0,void 0,void 0,l=void 0,u=void 0,d=void 0,a=(i=m[e])._xScale,r=i._yScale||i._scale,o=i._index,s=i._datasetIndex,u=(l=i._chart.getDatasetMeta(s).controller)._getIndexScale(),d=l._getValueScale(),{xLabel:a?a.getLabelForIndex(o,s):"",yLabel:r?r.getLabelForIndex(o,s):"",label:u?""+u.getLabelForIndex(o,s):"",value:d?""+d.getLabelForIndex(o,s):"",index:o,datasetIndex:s,x:i._model.x,y:i._model.y}))
c.filter&&(k=k.filter((function(t){return c.filter(t,p)}))),c.itemSort&&(k=k.sort((function(t,e){return c.itemSort(t,e,p)}))),V.each(k,(function(t){_.push(c.callbacks.labelColor.call(h,t,h._chart)),w.push(c.callbacks.labelTextColor.call(h,t,h._chart))})),g.title=h.getTitle(k,p),g.beforeBody=h.getBeforeBody(k,p),g.body=h.getBody(k,p),g.afterBody=h.getAfterBody(k,p),g.footer=h.getFooter(k,p),g.x=x.x,g.y=x.y,g.caretPadding=c.caretPadding,g.labelColors=_,g.labelTextColors=w,g.dataPoints=k,y=function(t,e){var n=t._chart.ctx,i=2*e.yPadding,a=0,r=e.body,o=r.reduce((function(t,e){return t+e.before.length+e.lines.length+e.after.length}),0)
o+=e.beforeBody.length+e.afterBody.length
var s=e.title.length,l=e.footer.length,u=e.titleFontSize,d=e.bodyFontSize,h=e.footerFontSize
i+=s*u,i+=s?(s-1)*e.titleSpacing:0,i+=s?e.titleMarginBottom:0,i+=o*d,i+=o?(o-1)*e.bodySpacing:0,i+=l?e.footerMarginTop:0,i+=l*h,i+=l?(l-1)*e.footerSpacing:0
var c=0,f=function(t){a=Math.max(a,n.measureText(t).width+c)}
return n.font=V.fontString(u,e._titleFontStyle,e._titleFontFamily),V.each(e.title,f),n.font=V.fontString(d,e._bodyFontStyle,e._bodyFontFamily),V.each(e.beforeBody.concat(e.afterBody),f),c=e.displayColors?d+2:0,V.each(r,(function(t){V.each(t.before,f),V.each(t.lines,f),V.each(t.after,f)})),c=0,n.font=V.fontString(h,e._footerFontStyle,e._footerFontFamily),V.each(e.footer,f),{width:a+=2*e.xPadding,height:i}}(this,g),b=function(t,e,n,i){var a=t.x,r=t.y,o=t.caretSize,s=t.caretPadding,l=t.cornerRadius,u=n.xAlign,d=n.yAlign,h=o+s,c=l+s
return"right"===u?a-=e.width:"center"===u&&((a-=e.width/2)+e.width>i.width&&(a=i.width-e.width),a<0&&(a=0)),"top"===d?r+=h:r-="bottom"===d?e.height+h:e.height/2,"center"===d?"left"===u?a+=h:"right"===u&&(a-=h):"left"===u?a-=c:"right"===u&&(a+=c),{x:a,y:r}}(g,y,v=function(t,e){var n,i,a,r,o,s=t._model,l=t._chart,u=t._chart.chartArea,d="center",h="center"
s.y<e.height?h="top":s.y>l.height-e.height&&(h="bottom")
var c=(u.left+u.right)/2,f=(u.top+u.bottom)/2
"center"===h?(n=function(t){return t<=c},i=function(t){return t>c}):(n=function(t){return t<=e.width/2},i=function(t){return t>=l.width-e.width/2}),a=function(t){return t+e.width+s.caretSize+s.caretPadding>l.width},r=function(t){return t-e.width-s.caretSize-s.caretPadding<0},o=function(t){return t<=f?"top":"bottom"},n(s.x)?(d="left",a(s.x)&&(d="center",h=o(s.y))):i(s.x)&&(d="right",r(s.x)&&(d="center",h=o(s.y)))
var g=t._options
return{xAlign:g.xAlign?g.xAlign:d,yAlign:g.yAlign?g.yAlign:h}}(this,y),h._chart)}else g.opacity=0
return g.xAlign=v.xAlign,g.yAlign=v.yAlign,g.x=b.x,g.y=b.y,g.width=y.width,g.height=y.height,g.caretX=x.x,g.caretY=x.y,h._model=g,t&&c.custom&&c.custom.call(h,g),h},drawCaret:function(t,e){var n=this._chart.ctx,i=this._view,a=this.getCaretPosition(t,e,i)
n.lineTo(a.x1,a.y1),n.lineTo(a.x2,a.y2),n.lineTo(a.x3,a.y3)},getCaretPosition:function(t,e,n){var i,a,r,o,s,l,u=n.caretSize,d=n.cornerRadius,h=n.xAlign,c=n.yAlign,f=t.x,g=t.y,m=e.width,p=e.height
if("center"===c)s=g+p/2,"left"===h?(a=(i=f)-u,r=i,o=s+u,l=s-u):(a=(i=f+m)+u,r=i,o=s-u,l=s+u)
else if("left"===h?(i=(a=f+d+u)-u,r=a+u):"right"===h?(i=(a=f+m-d-u)-u,r=a+u):(i=(a=n.caretX)-u,r=a+u),"top"===c)s=(o=g)-u,l=o
else{s=(o=g+p)+u,l=o
var v=r
r=i,i=v}return{x1:i,x2:a,x3:r,y1:o,y2:s,y3:l}},drawTitle:function(t,e,n){var i,a,r,o=e.title,s=o.length
if(s){var l=Ce(e.rtl,e.x,e.width)
for(t.x=Fe(e,e._titleAlign),n.textAlign=l.textAlign(e._titleAlign),n.textBaseline="middle",i=e.titleFontSize,a=e.titleSpacing,n.fillStyle=e.titleFontColor,n.font=V.fontString(i,e._titleFontStyle,e._titleFontFamily),r=0;r<s;++r)n.fillText(o[r],l.x(t.x),t.y+i/2),t.y+=i+a,r+1===s&&(t.y+=e.titleMarginBottom-a)}},drawBody:function(t,e,n){var i,a,r,o,s,l,u,d,h=e.bodyFontSize,c=e.bodySpacing,f=e._bodyAlign,g=e.body,m=e.displayColors,p=0,v=m?Fe(e,"left"):0,b=Ce(e.rtl,e.x,e.width),y=function(e){n.fillText(e,b.x(t.x+p),t.y+h/2),t.y+=h+c},x=b.textAlign(f)
for(n.textAlign=f,n.textBaseline="middle",n.font=V.fontString(h,e._bodyFontStyle,e._bodyFontFamily),t.x=Fe(e,x),n.fillStyle=e.bodyFontColor,V.each(e.beforeBody,y),p=m&&"right"!==x?"center"===f?h/2+1:h+2:0,s=0,u=g.length;s<u;++s){for(i=g[s],a=e.labelTextColors[s],r=e.labelColors[s],n.fillStyle=a,V.each(i.before,y),l=0,d=(o=i.lines).length;l<d;++l){if(m){var _=b.x(v)
n.fillStyle=e.legendColorBackground,n.fillRect(b.leftForLtr(_,h),t.y,h,h),n.lineWidth=1,n.strokeStyle=r.borderColor,n.strokeRect(b.leftForLtr(_,h),t.y,h,h),n.fillStyle=r.backgroundColor,n.fillRect(b.leftForLtr(b.xPlus(_,1),h-2),t.y+1,h-2,h-2),n.fillStyle=a}y(o[l])}V.each(i.after,y)}p=0,V.each(e.afterBody,y),t.y-=c},drawFooter:function(t,e,n){var i,a,r=e.footer,o=r.length
if(o){var s=Ce(e.rtl,e.x,e.width)
for(t.x=Fe(e,e._footerAlign),t.y+=e.footerMarginTop,n.textAlign=s.textAlign(e._footerAlign),n.textBaseline="middle",i=e.footerFontSize,n.fillStyle=e.footerFontColor,n.font=V.fontString(i,e._footerFontStyle,e._footerFontFamily),a=0;a<o;++a)n.fillText(r[a],s.x(t.x),t.y+i/2),t.y+=i+e.footerSpacing}},drawBackground:function(t,e,n,i){n.fillStyle=e.backgroundColor,n.strokeStyle=e.borderColor,n.lineWidth=e.borderWidth
var a=e.xAlign,r=e.yAlign,o=t.x,s=t.y,l=i.width,u=i.height,d=e.cornerRadius
n.beginPath(),n.moveTo(o+d,s),"top"===r&&this.drawCaret(t,i),n.lineTo(o+l-d,s),n.quadraticCurveTo(o+l,s,o+l,s+d),"center"===r&&"right"===a&&this.drawCaret(t,i),n.lineTo(o+l,s+u-d),n.quadraticCurveTo(o+l,s+u,o+l-d,s+u),"bottom"===r&&this.drawCaret(t,i),n.lineTo(o+d,s+u),n.quadraticCurveTo(o,s+u,o,s+u-d),"center"===r&&"left"===a&&this.drawCaret(t,i),n.lineTo(o,s+d),n.quadraticCurveTo(o,s,o+d,s),n.closePath(),n.fill(),e.borderWidth>0&&n.stroke()},draw:function(){var t=this._chart.ctx,e=this._view
if(0!==e.opacity){var n={width:e.width,height:e.height},i={x:e.x,y:e.y},a=Math.abs(e.opacity<.001)?0:e.opacity,r=e.title.length||e.beforeBody.length||e.body.length||e.afterBody.length||e.footer.length
this._options.enabled&&r&&(t.save(),t.globalAlpha=a,this.drawBackground(i,e,t,n),i.y+=e.yPadding,V.rtl.overrideTextDirection(t,e.textDirection),this.drawTitle(i,e,t),this.drawBody(i,e,t),this.drawFooter(i,e,t),V.rtl.restoreTextDirection(t,e.textDirection),t.restore())}},handleEvent:function(t){var e,n=this,i=n._options
return n._lastActive=n._lastActive||[],"mouseout"===t.type?n._active=[]:(n._active=n._chart.getElementsAtEventForMode(t,i.mode,i),i.reverse&&n._active.reverse()),(e=!V.arrayEquals(n._active,n._lastActive))&&(n._lastActive=n._active,(i.enabled||i.custom)&&(n._eventPosition={x:t.x,y:t.y},n.update(!0),n.pivot())),e}}),Re=Pe,Ne=Le
Ne.positioners=Re
var We=V.valueOrDefault
function Ye(){return V.merge({},[].slice.call(arguments),{merger:function(t,e,n,i){if("xAxes"===t||"yAxes"===t){var a,r,o,s=n[t].length
for(e[t]||(e[t]=[]),a=0;a<s;++a)o=n[t][a],r=We(o.type,"xAxes"===t?"category":"linear"),a>=e[t].length&&e[t].push({}),!e[t][a].type||o.type&&o.type!==e[t][a].type?V.merge(e[t][a],[Se.getScaleDefaults(r),o]):V.merge(e[t][a],o)}else V._merger(t,e,n,i)}})}function ze(){return V.merge({},[].slice.call(arguments),{merger:function(t,e,n,i){var a=e[t]||{},r=n[t]
"scales"===t?e[t]=Ye(a,r):"scale"===t?e[t]=V.merge(a,[Se.getScaleDefaults(r.type),r]):V._merger(t,e,n,i)}})}function Ee(t,e,n){var i,a=function(t){return t.id===i}
do{i=e+n++}while(V.findIndex(t,a)>=0)
return i}function Ve(t){return"top"===t||"bottom"===t}function He(t,e){return function(n,i){return n[t]===i[t]?n[e]-i[e]:n[t]-i[t]}}N._set("global",{elements:{},events:["mousemove","mouseout","click","touchstart","touchmove"],hover:{onHover:null,mode:"nearest",intersect:!0,animationDuration:400},onClick:null,maintainAspectRatio:!0,responsive:!0,responsiveAnimationDuration:0})
var Be=function(t,e){return this.construct(t,e),this}
V.extend(Be.prototype,{construct:function(t,e){var n=this
e=function(t){var e=(t=t||{}).data=t.data||{}
return e.datasets=e.datasets||[],e.labels=e.labels||[],t.options=ze(N.global,N[t.type],t.options||{}),t}(e)
var i=ke.acquireContext(t,e),a=i&&i.canvas,r=a&&a.height,o=a&&a.width
n.id=V.uid(),n.ctx=i,n.canvas=a,n.config=e,n.width=o,n.height=r,n.aspectRatio=r?o/r:null,n.options=e.options,n._bufferedRender=!1,n._layers=[],n.chart=n,n.controller=n,Be.instances[n.id]=n,Object.defineProperty(n,"data",{get:function(){return n.config.data},set:function(t){n.config.data=t}}),i&&a?(n.initialize(),n.update()):console.error("Failed to create chart: can't acquire context from the given item")},initialize:function(){var t=this
return Me.notify(t,"beforeInit"),V.retinaScale(t,t.options.devicePixelRatio),t.bindEvents(),t.options.responsive&&t.resize(!0),t.initToolTip(),Me.notify(t,"afterInit"),t},clear:function(){return V.canvas.clear(this),this},stop:function(){return X.cancelAnimation(this),this},resize:function(t){var e=this,n=e.options,i=e.canvas,a=n.maintainAspectRatio&&e.aspectRatio||null,r=Math.max(0,Math.floor(V.getMaximumWidth(i))),o=Math.max(0,Math.floor(a?r/a:V.getMaximumHeight(i)))
if((e.width!==r||e.height!==o)&&(i.width=e.width=r,i.height=e.height=o,i.style.width=r+"px",i.style.height=o+"px",V.retinaScale(e,n.devicePixelRatio),!t)){var s={width:r,height:o}
Me.notify(e,"resize",[s]),n.onResize&&n.onResize(e,s),e.stop(),e.update({duration:n.responsiveAnimationDuration})}},ensureScalesHaveIDs:function(){var t=this.options,e=t.scales||{},n=t.scale
V.each(e.xAxes,(function(t,n){t.id||(t.id=Ee(e.xAxes,"x-axis-",n))})),V.each(e.yAxes,(function(t,n){t.id||(t.id=Ee(e.yAxes,"y-axis-",n))})),n&&(n.id=n.id||"scale")},buildOrUpdateScales:function(){var t=this,e=t.options,n=t.scales||{},i=[],a=Object.keys(n).reduce((function(t,e){return t[e]=!1,t}),{})
e.scales&&(i=i.concat((e.scales.xAxes||[]).map((function(t){return{options:t,dtype:"category",dposition:"bottom"}})),(e.scales.yAxes||[]).map((function(t){return{options:t,dtype:"linear",dposition:"left"}})))),e.scale&&i.push({options:e.scale,dtype:"radialLinear",isDefault:!0,dposition:"chartArea"}),V.each(i,(function(e){var i=e.options,r=i.id,o=We(i.type,e.dtype)
Ve(i.position)!==Ve(e.dposition)&&(i.position=e.dposition),a[r]=!0
var s=null
if(r in n&&n[r].type===o)(s=n[r]).options=i,s.ctx=t.ctx,s.chart=t
else{var l=Se.getScaleConstructor(o)
if(!l)return
s=new l({id:r,type:o,options:i,ctx:t.ctx,chart:t}),n[s.id]=s}s.mergeTicksOptions(),e.isDefault&&(t.scale=s)})),V.each(a,(function(t,e){t||delete n[e]})),t.scales=n,Se.addScalesToLayout(this)},buildOrUpdateControllers:function(){var t,e,n=this,i=[],a=n.data.datasets
for(t=0,e=a.length;t<e;t++){var r=a[t],o=n.getDatasetMeta(t),s=r.type||n.config.type
if(o.type&&o.type!==s&&(n.destroyDatasetMeta(t),o=n.getDatasetMeta(t)),o.type=s,o.order=r.order||0,o.index=t,o.controller)o.controller.updateIndex(t),o.controller.linkScales()
else{var l=Ut[o.type]
if(void 0===l)throw new Error('"'+o.type+'" is not a chart type.')
o.controller=new l(n,t),i.push(o.controller)}}return i},resetElements:function(){var t=this
V.each(t.data.datasets,(function(e,n){t.getDatasetMeta(n).controller.reset()}),t)},reset:function(){this.resetElements(),this.tooltip.initialize()},update:function(t){var e,n,i=this
if(t&&"object"==typeof t||(t={duration:t,lazy:arguments[1]}),function(t){var e=t.options
V.each(t.scales,(function(e){le.removeBox(t,e)})),e=ze(N.global,N[t.config.type],e),t.options=t.config.options=e,t.ensureScalesHaveIDs(),t.buildOrUpdateScales(),t.tooltip._options=e.tooltips,t.tooltip.initialize()}(i),Me._invalidate(i),!1!==Me.notify(i,"beforeUpdate")){i.tooltip._data=i.data
var a=i.buildOrUpdateControllers()
for(e=0,n=i.data.datasets.length;e<n;e++)i.getDatasetMeta(e).controller.buildOrUpdateElements()
i.updateLayout(),i.options.animation&&i.options.animation.duration&&V.each(a,(function(t){t.reset()})),i.updateDatasets(),i.tooltip.initialize(),i.lastActive=[],Me.notify(i,"afterUpdate"),i._layers.sort(He("z","_idx")),i._bufferedRender?i._bufferedRequest={duration:t.duration,easing:t.easing,lazy:t.lazy}:i.render(t)}},updateLayout:function(){var t=this
!1!==Me.notify(t,"beforeLayout")&&(le.update(this,this.width,this.height),t._layers=[],V.each(t.boxes,(function(e){e._configure&&e._configure(),t._layers.push.apply(t._layers,e._layers())}),t),t._layers.forEach((function(t,e){t._idx=e})),Me.notify(t,"afterScaleUpdate"),Me.notify(t,"afterLayout"))},updateDatasets:function(){if(!1!==Me.notify(this,"beforeDatasetsUpdate")){for(var t=0,e=this.data.datasets.length;t<e;++t)this.updateDataset(t)
Me.notify(this,"afterDatasetsUpdate")}},updateDataset:function(t){var e=this.getDatasetMeta(t),n={meta:e,index:t}
!1!==Me.notify(this,"beforeDatasetUpdate",[n])&&(e.controller._update(),Me.notify(this,"afterDatasetUpdate",[n]))},render:function(t){var e=this
t&&"object"==typeof t||(t={duration:t,lazy:arguments[1]})
var n=e.options.animation,i=We(t.duration,n&&n.duration),a=t.lazy
if(!1!==Me.notify(e,"beforeRender")){var r=function(t){Me.notify(e,"afterRender"),V.callback(n&&n.onComplete,[t],e)}
if(n&&i){var o=new $({numSteps:i/16.66,easing:t.easing||n.easing,render:function(t,e){var n=V.easing.effects[e.easing],i=e.currentStep,a=i/e.numSteps
t.draw(n(a),a,i)},onAnimationProgress:n.onProgress,onAnimationComplete:r})
X.addAnimation(e,o,i,a)}else e.draw(),r(new $({numSteps:0,chart:e}))
return e}},draw:function(t){var e,n,i=this
if(i.clear(),V.isNullOrUndef(t)&&(t=1),i.transition(t),!(i.width<=0||i.height<=0)&&!1!==Me.notify(i,"beforeDraw",[t])){for(n=i._layers,e=0;e<n.length&&n[e].z<=0;++e)n[e].draw(i.chartArea)
for(i.drawDatasets(t);e<n.length;++e)n[e].draw(i.chartArea)
i._drawTooltip(t),Me.notify(i,"afterDraw",[t])}},transition:function(t){for(var e=0,n=(this.data.datasets||[]).length;e<n;++e)this.isDatasetVisible(e)&&this.getDatasetMeta(e).controller.transition(t)
this.tooltip.transition(t)},_getSortedDatasetMetas:function(t){var e,n,i=[]
for(e=0,n=(this.data.datasets||[]).length;e<n;++e)t&&!this.isDatasetVisible(e)||i.push(this.getDatasetMeta(e))
return i.sort(He("order","index")),i},_getSortedVisibleDatasetMetas:function(){return this._getSortedDatasetMetas(!0)},drawDatasets:function(t){var e,n
if(!1!==Me.notify(this,"beforeDatasetsDraw",[t])){for(n=(e=this._getSortedVisibleDatasetMetas()).length-1;n>=0;--n)this.drawDataset(e[n],t)
Me.notify(this,"afterDatasetsDraw",[t])}},drawDataset:function(t,e){var n={meta:t,index:t.index,easingValue:e}
!1!==Me.notify(this,"beforeDatasetDraw",[n])&&(t.controller.draw(e),Me.notify(this,"afterDatasetDraw",[n]))},_drawTooltip:function(t){var e=this.tooltip,n={tooltip:e,easingValue:t}
!1!==Me.notify(this,"beforeTooltipDraw",[n])&&(e.draw(),Me.notify(this,"afterTooltipDraw",[n]))},getElementAtEvent:function(t){return Jt.modes.single(this,t)},getElementsAtEvent:function(t){return Jt.modes.label(this,t,{intersect:!0})},getElementsAtXAxis:function(t){return Jt.modes["x-axis"](this,t,{intersect:!0})},getElementsAtEventForMode:function(t,e,n){var i=Jt.modes[e]
return"function"==typeof i?i(this,t,n):[]},getDatasetAtEvent:function(t){return Jt.modes.dataset(this,t,{intersect:!0})},getDatasetMeta:function(t){var e=this.data.datasets[t]
e._meta||(e._meta={})
var n=e._meta[this.id]
return n||(n=e._meta[this.id]={type:null,data:[],dataset:null,controller:null,hidden:null,xAxisID:null,yAxisID:null,order:e.order||0,index:t}),n},getVisibleDatasetCount:function(){for(var t=0,e=0,n=this.data.datasets.length;e<n;++e)this.isDatasetVisible(e)&&t++
return t},isDatasetVisible:function(t){var e=this.getDatasetMeta(t)
return"boolean"==typeof e.hidden?!e.hidden:!this.data.datasets[t].hidden},generateLegend:function(){return this.options.legendCallback(this)},destroyDatasetMeta:function(t){var e=this.id,n=this.data.datasets[t],i=n._meta&&n._meta[e]
i&&(i.controller.destroy(),delete n._meta[e])},destroy:function(){var t,e,n=this,i=n.canvas
for(n.stop(),t=0,e=n.data.datasets.length;t<e;++t)n.destroyDatasetMeta(t)
i&&(n.unbindEvents(),V.canvas.clear(n),ke.releaseContext(n.ctx),n.canvas=null,n.ctx=null),Me.notify(n,"destroy"),delete Be.instances[n.id]},toBase64Image:function(){return this.canvas.toDataURL.apply(this.canvas,arguments)},initToolTip:function(){var t=this
t.tooltip=new Ne({_chart:t,_chartInstance:t,_data:t.data,_options:t.options.tooltips},t)},bindEvents:function(){var t=this,e=t._listeners={},n=function(){t.eventHandler.apply(t,arguments)}
V.each(t.options.events,(function(i){ke.addEventListener(t,i,n),e[i]=n})),t.options.responsive&&(n=function(){t.resize()},ke.addEventListener(t,"resize",n),e.resize=n)},unbindEvents:function(){var t=this,e=t._listeners
e&&(delete t._listeners,V.each(e,(function(e,n){ke.removeEventListener(t,n,e)})))},updateHoverStyle:function(t,e,n){var i,a,r,o=n?"set":"remove"
for(a=0,r=t.length;a<r;++a)(i=t[a])&&this.getDatasetMeta(i._datasetIndex).controller[o+"HoverStyle"](i)
"dataset"===e&&this.getDatasetMeta(t[0]._datasetIndex).controller["_"+o+"DatasetHoverStyle"]()},eventHandler:function(t){var e=this,n=e.tooltip
if(!1!==Me.notify(e,"beforeEvent",[t])){e._bufferedRender=!0,e._bufferedRequest=null
var i=e.handleEvent(t)
n&&(i=n._start?n.handleEvent(t):i|n.handleEvent(t)),Me.notify(e,"afterEvent",[t])
var a=e._bufferedRequest
return a?e.render(a):i&&!e.animating&&(e.stop(),e.render({duration:e.options.hover.animationDuration,lazy:!0})),e._bufferedRender=!1,e._bufferedRequest=null,e}},handleEvent:function(t){var e,n=this,i=n.options||{},a=i.hover
return n.lastActive=n.lastActive||[],"mouseout"===t.type?n.active=[]:n.active=n.getElementsAtEventForMode(t,a.mode,a),V.callback(i.onHover||i.hover.onHover,[t.native,n.active],n),"mouseup"!==t.type&&"click"!==t.type||i.onClick&&i.onClick.call(n,t.native,n.active),n.lastActive.length&&n.updateHoverStyle(n.lastActive,a.mode,!1),n.active.length&&a.mode&&n.updateHoverStyle(n.active,a.mode,!0),e=!V.arrayEquals(n.active,n.lastActive),n.lastActive=n.active,e}}),Be.instances={}
var je=Be
function Ue(){throw new Error("This method is not implemented: either no adapter can be found or an incomplete integration was provided.")}function Ge(t){this.options=t||{}}Be.Controller=Be,Be.types={},V.configMerge=ze,V.scaleMerge=Ye,V.extend(Ge.prototype,{formats:Ue,parse:Ue,format:Ue,add:Ue,diff:Ue,startOf:Ue,endOf:Ue,_create:function(t){return t}}),Ge.override=function(t){V.extend(Ge.prototype,t)}
var qe={_date:Ge},Ze={formatters:{values:function(t){return V.isArray(t)?t:""+t},linear:function(t,e,n){var i=n.length>3?n[2]-n[1]:n[1]-n[0]
Math.abs(i)>1&&t!==Math.floor(t)&&(i=t-Math.floor(t))
var a=V.log10(Math.abs(i)),r=""
if(0!==t)if(Math.max(Math.abs(n[0]),Math.abs(n[n.length-1]))<1e-4){var o=V.log10(Math.abs(t)),s=Math.floor(o)-Math.floor(a)
s=Math.max(Math.min(s,20),0),r=t.toExponential(s)}else{var l=-1*Math.floor(a)
l=Math.max(Math.min(l,20),0),r=t.toFixed(l)}else r="0"
return r},logarithmic:function(t,e,n){var i=t/Math.pow(10,Math.floor(V.log10(t)))
return 0===t?"0":1===i||2===i||5===i||0===e||e===n.length-1?t.toExponential():""}}},$e=V.isArray,Xe=V.isNullOrUndef,Ke=V.valueOrDefault,Je=V.valueAtIndexOrDefault
function Qe(t,e,n){var i,a=t.getTicks().length,r=Math.min(e,a-1),o=t.getPixelForTick(r),s=t._startPixel,l=t._endPixel
if(!(n&&(i=1===a?Math.max(o-s,l-o):0===e?(t.getPixelForTick(1)-o)/2:(o-t.getPixelForTick(r-1))/2,(o+=r<e?i:-i)<s-1e-6||o>l+1e-6)))return o}function tn(t){return t.drawTicks?t.tickMarkLength:0}function en(t){var e,n
return t.display?(e=V.options._parseFont(t),n=V.options.toPadding(t.padding),e.lineHeight+n.height):0}function nn(t,e){return V.extend(V.options._parseFont({fontFamily:Ke(e.fontFamily,t.fontFamily),fontSize:Ke(e.fontSize,t.fontSize),fontStyle:Ke(e.fontStyle,t.fontStyle),lineHeight:Ke(e.lineHeight,t.lineHeight)}),{color:V.options.resolve([e.fontColor,t.fontColor,N.global.defaultFontColor])})}function an(t){var e=nn(t,t.minor)
return{minor:e,major:t.major.enabled?nn(t,t.major):e}}function rn(t){var e,n,i,a=[]
for(n=0,i=t.length;n<i;++n)void 0!==(e=t[n])._index&&a.push(e)
return a}function on(t,e,n,i){var a,r,o,s,l=Ke(n,0),u=Math.min(Ke(i,t.length),t.length),d=0
for(e=Math.ceil(e),i&&(e=(a=i-n)/Math.floor(a/e)),s=l;s<0;)d++,s=Math.round(l+d*e)
for(r=Math.max(l,0);r<u;r++)o=t[r],r===s?(o._index=r,d++,s=Math.round(l+d*e)):delete o.label}N._set("scale",{display:!0,position:"left",offset:!1,gridLines:{display:!0,color:"rgba(0,0,0,0.1)",lineWidth:1,drawBorder:!0,drawOnChartArea:!0,drawTicks:!0,tickMarkLength:10,zeroLineWidth:1,zeroLineColor:"rgba(0,0,0,0.25)",zeroLineBorderDash:[],zeroLineBorderDashOffset:0,offsetGridLines:!1,borderDash:[],borderDashOffset:0},scaleLabel:{display:!1,labelString:"",padding:{top:4,bottom:4}},ticks:{beginAtZero:!1,minRotation:0,maxRotation:50,mirror:!1,padding:0,reverse:!1,display:!0,autoSkip:!0,autoSkipPadding:0,labelOffset:0,callback:Ze.formatters.values,minor:{},major:{}}})
var sn=q.extend({zeroLineIndex:0,getPadding:function(){return{left:this.paddingLeft||0,top:this.paddingTop||0,right:this.paddingRight||0,bottom:this.paddingBottom||0}},getTicks:function(){return this._ticks},_getLabels:function(){var t=this.chart.data
return this.options.labels||(this.isHorizontal()?t.xLabels:t.yLabels)||t.labels||[]},mergeTicksOptions:function(){},beforeUpdate:function(){V.callback(this.options.beforeUpdate,[this])},update:function(t,e,n){var i,a,r,o,s,l=this,u=l.options.ticks,d=u.sampleSize
if(l.beforeUpdate(),l.maxWidth=t,l.maxHeight=e,l.margins=V.extend({left:0,right:0,top:0,bottom:0},n),l._ticks=null,l.ticks=null,l._labelSizes=null,l._maxLabelLines=0,l.longestLabelWidth=0,l.longestTextCache=l.longestTextCache||{},l._gridLineItems=null,l._labelItems=null,l.beforeSetDimensions(),l.setDimensions(),l.afterSetDimensions(),l.beforeDataLimits(),l.determineDataLimits(),l.afterDataLimits(),l.beforeBuildTicks(),o=l.buildTicks()||[],(!(o=l.afterBuildTicks(o)||o)||!o.length)&&l.ticks)for(o=[],i=0,a=l.ticks.length;i<a;++i)o.push({value:l.ticks[i],major:!1})
return l._ticks=o,s=d<o.length,r=l._convertTicksToLabels(s?function(t,e){for(var n=[],i=t.length/e,a=0,r=t.length;a<r;a+=i)n.push(t[Math.floor(a)])
return n}(o,d):o),l._configure(),l.beforeCalculateTickRotation(),l.calculateTickRotation(),l.afterCalculateTickRotation(),l.beforeFit(),l.fit(),l.afterFit(),l._ticksToDraw=u.display&&(u.autoSkip||"auto"===u.source)?l._autoSkip(o):o,s&&(r=l._convertTicksToLabels(l._ticksToDraw)),l.ticks=r,l.afterUpdate(),l.minSize},_configure:function(){var t,e,n=this,i=n.options.ticks.reverse
n.isHorizontal()?(t=n.left,e=n.right):(t=n.top,e=n.bottom,i=!i),n._startPixel=t,n._endPixel=e,n._reversePixels=i,n._length=e-t},afterUpdate:function(){V.callback(this.options.afterUpdate,[this])},beforeSetDimensions:function(){V.callback(this.options.beforeSetDimensions,[this])},setDimensions:function(){var t=this
t.isHorizontal()?(t.width=t.maxWidth,t.left=0,t.right=t.width):(t.height=t.maxHeight,t.top=0,t.bottom=t.height),t.paddingLeft=0,t.paddingTop=0,t.paddingRight=0,t.paddingBottom=0},afterSetDimensions:function(){V.callback(this.options.afterSetDimensions,[this])},beforeDataLimits:function(){V.callback(this.options.beforeDataLimits,[this])},determineDataLimits:V.noop,afterDataLimits:function(){V.callback(this.options.afterDataLimits,[this])},beforeBuildTicks:function(){V.callback(this.options.beforeBuildTicks,[this])},buildTicks:V.noop,afterBuildTicks:function(t){var e=this
return $e(t)&&t.length?V.callback(e.options.afterBuildTicks,[e,t]):(e.ticks=V.callback(e.options.afterBuildTicks,[e,e.ticks])||e.ticks,t)},beforeTickToLabelConversion:function(){V.callback(this.options.beforeTickToLabelConversion,[this])},convertTicksToLabels:function(){var t=this.options.ticks
this.ticks=this.ticks.map(t.userCallback||t.callback,this)},afterTickToLabelConversion:function(){V.callback(this.options.afterTickToLabelConversion,[this])},beforeCalculateTickRotation:function(){V.callback(this.options.beforeCalculateTickRotation,[this])},calculateTickRotation:function(){var t,e,n,i,a,r,o,s=this,l=s.options,u=l.ticks,d=s.getTicks().length,h=u.minRotation||0,c=u.maxRotation,f=h
!s._isVisible()||!u.display||h>=c||d<=1||!s.isHorizontal()?s.labelRotation=h:(e=(t=s._getLabelSizes()).widest.width,n=t.highest.height-t.highest.offset,i=Math.min(s.maxWidth,s.chart.width-e),e+6>(a=l.offset?s.maxWidth/d:i/(d-1))&&(a=i/(d-(l.offset?.5:1)),r=s.maxHeight-tn(l.gridLines)-u.padding-en(l.scaleLabel),o=Math.sqrt(e*e+n*n),f=V.toDegrees(Math.min(Math.asin(Math.min((t.highest.height+6)/a,1)),Math.asin(Math.min(r/o,1))-Math.asin(n/o))),f=Math.max(h,Math.min(c,f))),s.labelRotation=f)},afterCalculateTickRotation:function(){V.callback(this.options.afterCalculateTickRotation,[this])},beforeFit:function(){V.callback(this.options.beforeFit,[this])},fit:function(){var t=this,e=t.minSize={width:0,height:0},n=t.chart,i=t.options,a=i.ticks,r=i.scaleLabel,o=i.gridLines,s=t._isVisible(),l="bottom"===i.position,u=t.isHorizontal()
if(u?e.width=t.maxWidth:s&&(e.width=tn(o)+en(r)),u?s&&(e.height=tn(o)+en(r)):e.height=t.maxHeight,a.display&&s){var d=an(a),h=t._getLabelSizes(),c=h.first,f=h.last,g=h.widest,m=h.highest,p=.4*d.minor.lineHeight,v=a.padding
if(u){var b=0!==t.labelRotation,y=V.toRadians(t.labelRotation),x=Math.cos(y),_=Math.sin(y),w=_*g.width+x*(m.height-(b?m.offset:0))+(b?0:p)
e.height=Math.min(t.maxHeight,e.height+w+v)
var k,M,S=t.getPixelForTick(0)-t.left,D=t.right-t.getPixelForTick(t.getTicks().length-1)
b?(k=l?x*c.width+_*c.offset:_*(c.height-c.offset),M=l?_*(f.height-f.offset):x*f.width+_*f.offset):(k=c.width/2,M=f.width/2),t.paddingLeft=Math.max((k-S)*t.width/(t.width-S),0)+3,t.paddingRight=Math.max((M-D)*t.width/(t.width-D),0)+3}else{var C=a.mirror?0:g.width+v+p
e.width=Math.min(t.maxWidth,e.width+C),t.paddingTop=c.height/2,t.paddingBottom=f.height/2}}t.handleMargins(),u?(t.width=t._length=n.width-t.margins.left-t.margins.right,t.height=e.height):(t.width=e.width,t.height=t._length=n.height-t.margins.top-t.margins.bottom)},handleMargins:function(){var t=this
t.margins&&(t.margins.left=Math.max(t.paddingLeft,t.margins.left),t.margins.top=Math.max(t.paddingTop,t.margins.top),t.margins.right=Math.max(t.paddingRight,t.margins.right),t.margins.bottom=Math.max(t.paddingBottom,t.margins.bottom))},afterFit:function(){V.callback(this.options.afterFit,[this])},isHorizontal:function(){var t=this.options.position
return"top"===t||"bottom"===t},isFullWidth:function(){return this.options.fullWidth},getRightValue:function(t){if(Xe(t))return NaN
if(("number"==typeof t||t instanceof Number)&&!isFinite(t))return NaN
if(t)if(this.isHorizontal()){if(void 0!==t.x)return this.getRightValue(t.x)}else if(void 0!==t.y)return this.getRightValue(t.y)
return t},_convertTicksToLabels:function(t){var e,n,i,a=this
for(a.ticks=t.map((function(t){return t.value})),a.beforeTickToLabelConversion(),e=a.convertTicksToLabels(t)||a.ticks,a.afterTickToLabelConversion(),n=0,i=t.length;n<i;++n)t[n].label=e[n]
return e},_getLabelSizes:function(){var t=this,e=t._labelSizes
return e||(t._labelSizes=e=function(t,e,n,i){var a,r,o,s,l,u,d,h,c,f,g,m,p,v=n.length,b=[],y=[],x=[]
for(a=0;a<v;++a){if(s=n[a].label,l=n[a].major?e.major:e.minor,t.font=u=l.string,d=i[u]=i[u]||{data:{},gc:[]},h=l.lineHeight,c=f=0,Xe(s)||$e(s)){if($e(s))for(r=0,o=s.length;r<o;++r)g=s[r],Xe(g)||$e(g)||(c=V.measureText(t,d.data,d.gc,c,g),f+=h)}else c=V.measureText(t,d.data,d.gc,c,s),f=h
b.push(c),y.push(f),x.push(h/2)}function _(t){return{width:b[t]||0,height:y[t]||0,offset:x[t]||0}}return function(t,e){V.each(t,(function(t){var n,i=t.gc,a=i.length/2
if(a>e){for(n=0;n<a;++n)delete t.data[i[n]]
i.splice(0,a)}}))}(i,v),m=b.indexOf(Math.max.apply(null,b)),p=y.indexOf(Math.max.apply(null,y)),{first:_(0),last:_(v-1),widest:_(m),highest:_(p)}}(t.ctx,an(t.options.ticks),t.getTicks(),t.longestTextCache),t.longestLabelWidth=e.widest.width),e},_parseValue:function(t){var e,n,i,a
return $e(t)?(e=+this.getRightValue(t[0]),n=+this.getRightValue(t[1]),i=Math.min(e,n),a=Math.max(e,n)):(e=void 0,n=t=+this.getRightValue(t),i=t,a=t),{min:i,max:a,start:e,end:n}},_getScaleLabel:function(t){var e=this._parseValue(t)
return void 0!==e.start?"["+e.start+", "+e.end+"]":+this.getRightValue(t)},getLabelForIndex:V.noop,getPixelForValue:V.noop,getValueForPixel:V.noop,getPixelForTick:function(t){var e=this.options.offset,n=this._ticks.length,i=1/Math.max(n-(e?0:1),1)
return t<0||t>n-1?null:this.getPixelForDecimal(t*i+(e?i/2:0))},getPixelForDecimal:function(t){return this._reversePixels&&(t=1-t),this._startPixel+t*this._length},getDecimalForPixel:function(t){var e=(t-this._startPixel)/this._length
return this._reversePixels?1-e:e},getBasePixel:function(){return this.getPixelForValue(this.getBaseValue())},getBaseValue:function(){var t=this.min,e=this.max
return this.beginAtZero?0:t<0&&e<0?e:t>0&&e>0?t:0},_autoSkip:function(t){var e,n,i,a,r=this.options.ticks,o=this._length,s=r.maxTicksLimit||o/this._tickSize()+1,l=r.major.enabled?function(t){var e,n,i=[]
for(e=0,n=t.length;e<n;e++)t[e].major&&i.push(e)
return i}(t):[],u=l.length,d=l[0],h=l[u-1]
if(u>s)return function(t,e,n){var i,a,r=0,o=e[0]
for(n=Math.ceil(n),i=0;i<t.length;i++)a=t[i],i===o?(a._index=i,o=e[++r*n]):delete a.label}(t,l,u/s),rn(t)
if(i=function(t,e,n,i){var a,r,o,s,l=function(t){var e,n,i=t.length
if(i<2)return!1
for(n=t[0],e=1;e<i;++e)if(t[e]-t[e-1]!==n)return!1
return n}(t),u=(e.length-1)/i
if(!l)return Math.max(u,1)
for(o=0,s=(a=V.math._factorize(l)).length-1;o<s;o++)if((r=a[o])>u)return r
return Math.max(u,1)}(l,t,0,s),u>0){for(e=0,n=u-1;e<n;e++)on(t,i,l[e],l[e+1])
return a=u>1?(h-d)/(u-1):null,on(t,i,V.isNullOrUndef(a)?0:d-a,d),on(t,i,h,V.isNullOrUndef(a)?t.length:h+a),rn(t)}return on(t,i),rn(t)},_tickSize:function(){var t=this.options.ticks,e=V.toRadians(this.labelRotation),n=Math.abs(Math.cos(e)),i=Math.abs(Math.sin(e)),a=this._getLabelSizes(),r=t.autoSkipPadding||0,o=a?a.widest.width+r:0,s=a?a.highest.height+r:0
return this.isHorizontal()?s*n>o*i?o/n:s/i:s*i<o*n?s/n:o/i},_isVisible:function(){var t,e,n,i=this.chart,a=this.options.display
if("auto"!==a)return!!a
for(t=0,e=i.data.datasets.length;t<e;++t)if(i.isDatasetVisible(t)&&((n=i.getDatasetMeta(t)).xAxisID===this.id||n.yAxisID===this.id))return!0
return!1},_computeGridLineItems:function(t){var e,n,i,a,r,o,s,l,u,d,h,c,f,g,m,p,v,b=this,y=b.chart,x=b.options,_=x.gridLines,w=x.position,k=_.offsetGridLines,M=b.isHorizontal(),S=b._ticksToDraw,D=S.length+(k?1:0),C=tn(_),P=[],T=_.drawBorder?Je(_.lineWidth,0,0):0,O=T/2,A=V._alignPixel,F=function(t){return A(y,t,T)}
for("top"===w?(e=F(b.bottom),s=b.bottom-C,u=e-O,h=F(t.top)+O,f=t.bottom):"bottom"===w?(e=F(b.top),h=t.top,f=F(t.bottom)-O,s=e+O,u=b.top+C):"left"===w?(e=F(b.right),o=b.right-C,l=e-O,d=F(t.left)+O,c=t.right):(e=F(b.left),d=t.left,c=F(t.right)-O,o=e+O,l=b.left+C),n=0;n<D;++n)i=S[n]||{},Xe(i.label)&&n<S.length||(n===b.zeroLineIndex&&x.offset===k?(g=_.zeroLineWidth,m=_.zeroLineColor,p=_.zeroLineBorderDash||[],v=_.zeroLineBorderDashOffset||0):(g=Je(_.lineWidth,n,1),m=Je(_.color,n,"rgba(0,0,0,0.1)"),p=_.borderDash||[],v=_.borderDashOffset||0),void 0!==(a=Qe(b,i._index||n,k))&&(r=A(y,a,g),M?o=l=d=c=r:s=u=h=f=r,P.push({tx1:o,ty1:s,tx2:l,ty2:u,x1:d,y1:h,x2:c,y2:f,width:g,color:m,borderDash:p,borderDashOffset:v})))
return P.ticksLength=D,P.borderValue=e,P},_computeLabelItems:function(){var t,e,n,i,a,r,o,s,l,u,d,h,c=this,f=c.options,g=f.ticks,m=f.position,p=g.mirror,v=c.isHorizontal(),b=c._ticksToDraw,y=an(g),x=g.padding,_=tn(f.gridLines),w=-V.toRadians(c.labelRotation),k=[]
for("top"===m?(r=c.bottom-_-x,o=w?"left":"center"):"bottom"===m?(r=c.top+_+x,o=w?"right":"center"):"left"===m?(a=c.right-(p?0:_)-x,o=p?"left":"right"):(a=c.left+(p?0:_)+x,o=p?"right":"left"),t=0,e=b.length;t<e;++t)i=(n=b[t]).label,Xe(i)||(s=c.getPixelForTick(n._index||t)+g.labelOffset,u=(l=n.major?y.major:y.minor).lineHeight,d=$e(i)?i.length:1,v?(a=s,h="top"===m?((w?1:.5)-d)*u:(w?0:.5)*u):(r=s,h=(1-d)*u/2),k.push({x:a,y:r,rotation:w,label:i,font:l,textOffset:h,textAlign:o}))
return k},_drawGrid:function(t){var e=this,n=e.options.gridLines
if(n.display){var i,a,r,o,s,l=e.ctx,u=e.chart,d=V._alignPixel,h=n.drawBorder?Je(n.lineWidth,0,0):0,c=e._gridLineItems||(e._gridLineItems=e._computeGridLineItems(t))
for(r=0,o=c.length;r<o;++r)i=(s=c[r]).width,a=s.color,i&&a&&(l.save(),l.lineWidth=i,l.strokeStyle=a,l.setLineDash&&(l.setLineDash(s.borderDash),l.lineDashOffset=s.borderDashOffset),l.beginPath(),n.drawTicks&&(l.moveTo(s.tx1,s.ty1),l.lineTo(s.tx2,s.ty2)),n.drawOnChartArea&&(l.moveTo(s.x1,s.y1),l.lineTo(s.x2,s.y2)),l.stroke(),l.restore())
if(h){var f,g,m,p,v=h,b=Je(n.lineWidth,c.ticksLength-1,1),y=c.borderValue
e.isHorizontal()?(f=d(u,e.left,v)-v/2,g=d(u,e.right,b)+b/2,m=p=y):(m=d(u,e.top,v)-v/2,p=d(u,e.bottom,b)+b/2,f=g=y),l.lineWidth=h,l.strokeStyle=Je(n.color,0),l.beginPath(),l.moveTo(f,m),l.lineTo(g,p),l.stroke()}}},_drawLabels:function(){var t=this
if(t.options.ticks.display){var e,n,i,a,r,o,s,l,u=t.ctx,d=t._labelItems||(t._labelItems=t._computeLabelItems())
for(e=0,i=d.length;e<i;++e){if(o=(r=d[e]).font,u.save(),u.translate(r.x,r.y),u.rotate(r.rotation),u.font=o.string,u.fillStyle=o.color,u.textBaseline="middle",u.textAlign=r.textAlign,s=r.label,l=r.textOffset,$e(s))for(n=0,a=s.length;n<a;++n)u.fillText(""+s[n],0,l),l+=o.lineHeight
else u.fillText(s,0,l)
u.restore()}}},_drawTitle:function(){var t=this,e=t.ctx,n=t.options,i=n.scaleLabel
if(i.display){var a,r,o=Ke(i.fontColor,N.global.defaultFontColor),s=V.options._parseFont(i),l=V.options.toPadding(i.padding),u=s.lineHeight/2,d=n.position,h=0
if(t.isHorizontal())a=t.left+t.width/2,r="bottom"===d?t.bottom-u-l.bottom:t.top+u+l.top
else{var c="left"===d
a=c?t.left+u+l.top:t.right-u-l.top,r=t.top+t.height/2,h=c?-.5*Math.PI:.5*Math.PI}e.save(),e.translate(a,r),e.rotate(h),e.textAlign="center",e.textBaseline="middle",e.fillStyle=o,e.font=s.string,e.fillText(i.labelString,0,0),e.restore()}},draw:function(t){this._isVisible()&&(this._drawGrid(t),this._drawTitle(),this._drawLabels())},_layers:function(){var t=this,e=t.options,n=e.ticks&&e.ticks.z||0,i=e.gridLines&&e.gridLines.z||0
return t._isVisible()&&n!==i&&t.draw===t._draw?[{z:i,draw:function(){t._drawGrid.apply(t,arguments),t._drawTitle.apply(t,arguments)}},{z:n,draw:function(){t._drawLabels.apply(t,arguments)}}]:[{z:n,draw:function(){t.draw.apply(t,arguments)}}]},_getMatchingVisibleMetas:function(t){var e=this,n=e.isHorizontal()
return e.chart._getSortedVisibleDatasetMetas().filter((function(i){return(!t||i.type===t)&&(n?i.xAxisID===e.id:i.yAxisID===e.id)}))}})
sn.prototype._draw=sn.prototype.draw
var ln=sn,un=V.isNullOrUndef,dn=ln.extend({determineDataLimits:function(){var t,e=this,n=e._getLabels(),i=e.options.ticks,a=i.min,r=i.max,o=0,s=n.length-1
void 0!==a&&(t=n.indexOf(a))>=0&&(o=t),void 0!==r&&(t=n.indexOf(r))>=0&&(s=t),e.minIndex=o,e.maxIndex=s,e.min=n[o],e.max=n[s]},buildTicks:function(){var t=this._getLabels(),e=this.minIndex,n=this.maxIndex
this.ticks=0===e&&n===t.length-1?t:t.slice(e,n+1)},getLabelForIndex:function(t,e){var n=this.chart
return n.getDatasetMeta(e).controller._getValueScaleId()===this.id?this.getRightValue(n.data.datasets[e].data[t]):this._getLabels()[t]},_configure:function(){var t=this,e=t.options.offset,n=t.ticks
ln.prototype._configure.call(t),t.isHorizontal()||(t._reversePixels=!t._reversePixels),n&&(t._startValue=t.minIndex-(e?.5:0),t._valueRange=Math.max(n.length-(e?0:1),1))},getPixelForValue:function(t,e,n){var i,a,r,o=this
return un(e)||un(n)||(t=o.chart.data.datasets[n].data[e]),un(t)||(i=o.isHorizontal()?t.x:t.y),(void 0!==i||void 0!==t&&isNaN(e))&&(a=o._getLabels(),t=V.valueOrDefault(i,t),e=-1!==(r=a.indexOf(t))?r:e,isNaN(e)&&(e=t)),o.getPixelForDecimal((e-o._startValue)/o._valueRange)},getPixelForTick:function(t){var e=this.ticks
return t<0||t>e.length-1?null:this.getPixelForValue(e[t],t+this.minIndex)},getValueForPixel:function(t){var e=Math.round(this._startValue+this.getDecimalForPixel(t)*this._valueRange)
return Math.min(Math.max(e,0),this.ticks.length-1)},getBasePixel:function(){return this.bottom}})
dn._defaults={position:"bottom"}
var hn=V.noop,cn=V.isNullOrUndef,fn=ln.extend({getRightValue:function(t){return"string"==typeof t?+t:ln.prototype.getRightValue.call(this,t)},handleTickRangeOptions:function(){var t=this,e=t.options.ticks
if(e.beginAtZero){var n=V.sign(t.min),i=V.sign(t.max)
n<0&&i<0?t.max=0:n>0&&i>0&&(t.min=0)}var a=void 0!==e.min||void 0!==e.suggestedMin,r=void 0!==e.max||void 0!==e.suggestedMax
void 0!==e.min?t.min=e.min:void 0!==e.suggestedMin&&(null===t.min?t.min=e.suggestedMin:t.min=Math.min(t.min,e.suggestedMin)),void 0!==e.max?t.max=e.max:void 0!==e.suggestedMax&&(null===t.max?t.max=e.suggestedMax:t.max=Math.max(t.max,e.suggestedMax)),a!==r&&t.min>=t.max&&(a?t.max=t.min+1:t.min=t.max-1),t.min===t.max&&(t.max++,e.beginAtZero||t.min--)},getTickLimit:function(){var t,e=this.options.ticks,n=e.stepSize,i=e.maxTicksLimit
return n?t=Math.ceil(this.max/n)-Math.floor(this.min/n)+1:(t=this._computeTickLimit(),i=i||11),i&&(t=Math.min(i,t)),t},_computeTickLimit:function(){return Number.POSITIVE_INFINITY},handleDirectionalChanges:hn,buildTicks:function(){var t=this,e=t.options.ticks,n=t.getTickLimit(),i={maxTicks:n=Math.max(2,n),min:e.min,max:e.max,precision:e.precision,stepSize:V.valueOrDefault(e.fixedStepSize,e.stepSize)},a=t.ticks=function(t,e){var n,i,a,r,o=[],s=t.stepSize,l=s||1,u=t.maxTicks-1,d=t.min,h=t.max,c=t.precision,f=e.min,g=e.max,m=V.niceNum((g-f)/u/l)*l
if(m<1e-14&&cn(d)&&cn(h))return[f,g];(r=Math.ceil(g/m)-Math.floor(f/m))>u&&(m=V.niceNum(r*m/u/l)*l),s||cn(c)?n=Math.pow(10,V._decimalPlaces(m)):(n=Math.pow(10,c),m=Math.ceil(m*n)/n),i=Math.floor(f/m)*m,a=Math.ceil(g/m)*m,s&&(!cn(d)&&V.almostWhole(d/m,m/1e3)&&(i=d),!cn(h)&&V.almostWhole(h/m,m/1e3)&&(a=h)),r=(a-i)/m,r=V.almostEquals(r,Math.round(r),m/1e3)?Math.round(r):Math.ceil(r),i=Math.round(i*n)/n,a=Math.round(a*n)/n,o.push(cn(d)?i:d)
for(var p=1;p<r;++p)o.push(Math.round((i+p*m)*n)/n)
return o.push(cn(h)?a:h),o}(i,t)
t.handleDirectionalChanges(),t.max=V.max(a),t.min=V.min(a),e.reverse?(a.reverse(),t.start=t.max,t.end=t.min):(t.start=t.min,t.end=t.max)},convertTicksToLabels:function(){var t=this
t.ticksAsNumbers=t.ticks.slice(),t.zeroLineIndex=t.ticks.indexOf(0),ln.prototype.convertTicksToLabels.call(t)},_configure:function(){var t,e=this,n=e.getTicks(),i=e.min,a=e.max
ln.prototype._configure.call(e),e.options.offset&&n.length&&(i-=t=(a-i)/Math.max(n.length-1,1)/2,a+=t),e._startValue=i,e._endValue=a,e._valueRange=a-i}}),gn={position:"left",ticks:{callback:Ze.formatters.linear}}
function mn(t,e,n,i){var a,r,o=t.options,s=function(t,e,n){var i=[n.type,void 0===e&&void 0===n.stack?n.index:"",n.stack].join(".")
return void 0===t[i]&&(t[i]={pos:[],neg:[]}),t[i]}(e,o.stacked,n),l=s.pos,u=s.neg,d=i.length
for(a=0;a<d;++a)r=t._parseValue(i[a]),isNaN(r.min)||isNaN(r.max)||n.data[a].hidden||(l[a]=l[a]||0,u[a]=u[a]||0,o.relativePoints?l[a]=100:r.min<0||r.max<0?u[a]+=r.min:l[a]+=r.max)}function pn(t,e,n){var i,a,r=n.length
for(i=0;i<r;++i)a=t._parseValue(n[i]),isNaN(a.min)||isNaN(a.max)||e.data[i].hidden||(t.min=Math.min(t.min,a.min),t.max=Math.max(t.max,a.max))}var vn=fn.extend({determineDataLimits:function(){var t,e,n,i,a=this,r=a.options,o=a.chart.data.datasets,s=a._getMatchingVisibleMetas(),l=r.stacked,u={},d=s.length
if(a.min=Number.POSITIVE_INFINITY,a.max=Number.NEGATIVE_INFINITY,void 0===l)for(t=0;!l&&t<d;++t)l=void 0!==(e=s[t]).stack
for(t=0;t<d;++t)n=o[(e=s[t]).index].data,l?mn(a,u,e,n):pn(a,e,n)
V.each(u,(function(t){i=t.pos.concat(t.neg),a.min=Math.min(a.min,V.min(i)),a.max=Math.max(a.max,V.max(i))})),a.min=V.isFinite(a.min)&&!isNaN(a.min)?a.min:0,a.max=V.isFinite(a.max)&&!isNaN(a.max)?a.max:1,a.handleTickRangeOptions()},_computeTickLimit:function(){var t
return this.isHorizontal()?Math.ceil(this.width/40):(t=V.options._parseFont(this.options.ticks),Math.ceil(this.height/t.lineHeight))},handleDirectionalChanges:function(){this.isHorizontal()||this.ticks.reverse()},getLabelForIndex:function(t,e){return this._getScaleLabel(this.chart.data.datasets[e].data[t])},getPixelForValue:function(t){return this.getPixelForDecimal((+this.getRightValue(t)-this._startValue)/this._valueRange)},getValueForPixel:function(t){return this._startValue+this.getDecimalForPixel(t)*this._valueRange},getPixelForTick:function(t){var e=this.ticksAsNumbers
return t<0||t>e.length-1?null:this.getPixelForValue(e[t])}}),bn=gn
vn._defaults=bn
var yn=V.valueOrDefault,xn=V.math.log10,_n={position:"left",ticks:{callback:Ze.formatters.logarithmic}}
function wn(t,e){return V.isFinite(t)&&t>=0?t:e}var kn=ln.extend({determineDataLimits:function(){var t,e,n,i,a,r,o=this,s=o.options,l=o.chart,u=l.data.datasets,d=o.isHorizontal()
function h(t){return d?t.xAxisID===o.id:t.yAxisID===o.id}o.min=Number.POSITIVE_INFINITY,o.max=Number.NEGATIVE_INFINITY,o.minNotZero=Number.POSITIVE_INFINITY
var c=s.stacked
if(void 0===c)for(t=0;t<u.length;t++)if(e=l.getDatasetMeta(t),l.isDatasetVisible(t)&&h(e)&&void 0!==e.stack){c=!0
break}if(s.stacked||c){var f={}
for(t=0;t<u.length;t++){var g=[(e=l.getDatasetMeta(t)).type,void 0===s.stacked&&void 0===e.stack?t:"",e.stack].join(".")
if(l.isDatasetVisible(t)&&h(e))for(void 0===f[g]&&(f[g]=[]),a=0,r=(i=u[t].data).length;a<r;a++){var m=f[g]
n=o._parseValue(i[a]),isNaN(n.min)||isNaN(n.max)||e.data[a].hidden||n.min<0||n.max<0||(m[a]=m[a]||0,m[a]+=n.max)}}V.each(f,(function(t){if(t.length>0){var e=V.min(t),n=V.max(t)
o.min=Math.min(o.min,e),o.max=Math.max(o.max,n)}}))}else for(t=0;t<u.length;t++)if(e=l.getDatasetMeta(t),l.isDatasetVisible(t)&&h(e))for(a=0,r=(i=u[t].data).length;a<r;a++)n=o._parseValue(i[a]),isNaN(n.min)||isNaN(n.max)||e.data[a].hidden||n.min<0||n.max<0||(o.min=Math.min(n.min,o.min),o.max=Math.max(n.max,o.max),0!==n.min&&(o.minNotZero=Math.min(n.min,o.minNotZero)))
o.min=V.isFinite(o.min)?o.min:null,o.max=V.isFinite(o.max)?o.max:null,o.minNotZero=V.isFinite(o.minNotZero)?o.minNotZero:null,this.handleTickRangeOptions()},handleTickRangeOptions:function(){var t=this,e=t.options.ticks
t.min=wn(e.min,t.min),t.max=wn(e.max,t.max),t.min===t.max&&(0!==t.min&&null!==t.min?(t.min=Math.pow(10,Math.floor(xn(t.min))-1),t.max=Math.pow(10,Math.floor(xn(t.max))+1)):(t.min=1,t.max=10)),null===t.min&&(t.min=Math.pow(10,Math.floor(xn(t.max))-1)),null===t.max&&(t.max=0!==t.min?Math.pow(10,Math.floor(xn(t.min))+1):10),null===t.minNotZero&&(t.min>0?t.minNotZero=t.min:t.max<1?t.minNotZero=Math.pow(10,Math.floor(xn(t.max))):t.minNotZero=1)},buildTicks:function(){var t=this,e=t.options.ticks,n=!t.isHorizontal(),i={min:wn(e.min),max:wn(e.max)},a=t.ticks=function(t,e){var n,i,a=[],r=yn(t.min,Math.pow(10,Math.floor(xn(e.min)))),o=Math.floor(xn(e.max)),s=Math.ceil(e.max/Math.pow(10,o))
0===r?(n=Math.floor(xn(e.minNotZero)),i=Math.floor(e.minNotZero/Math.pow(10,n)),a.push(r),r=i*Math.pow(10,n)):(n=Math.floor(xn(r)),i=Math.floor(r/Math.pow(10,n)))
var l=n<0?Math.pow(10,Math.abs(n)):1
do{a.push(r),10==++i&&(i=1,l=++n>=0?1:l),r=Math.round(i*Math.pow(10,n)*l)/l}while(n<o||n===o&&i<s)
var u=yn(t.max,r)
return a.push(u),a}(i,t)
t.max=V.max(a),t.min=V.min(a),e.reverse?(n=!n,t.start=t.max,t.end=t.min):(t.start=t.min,t.end=t.max),n&&a.reverse()},convertTicksToLabels:function(){this.tickValues=this.ticks.slice(),ln.prototype.convertTicksToLabels.call(this)},getLabelForIndex:function(t,e){return this._getScaleLabel(this.chart.data.datasets[e].data[t])},getPixelForTick:function(t){var e=this.tickValues
return t<0||t>e.length-1?null:this.getPixelForValue(e[t])},_getFirstTickValue:function(t){var e=Math.floor(xn(t))
return Math.floor(t/Math.pow(10,e))*Math.pow(10,e)},_configure:function(){var t=this,e=t.min,n=0
ln.prototype._configure.call(t),0===e&&(e=t._getFirstTickValue(t.minNotZero),n=yn(t.options.ticks.fontSize,N.global.defaultFontSize)/t._length),t._startValue=xn(e),t._valueOffset=n,t._valueRange=(xn(t.max)-xn(e))/(1-n)},getPixelForValue:function(t){var e=this,n=0
return(t=+e.getRightValue(t))>e.min&&t>0&&(n=(xn(t)-e._startValue)/e._valueRange+e._valueOffset),e.getPixelForDecimal(n)},getValueForPixel:function(t){var e=this,n=e.getDecimalForPixel(t)
return 0===n&&0===e.min?0:Math.pow(10,e._startValue+(n-e._valueOffset)*e._valueRange)}}),Mn=_n
kn._defaults=Mn
var Sn=V.valueOrDefault,Dn=V.valueAtIndexOrDefault,Cn=V.options.resolve,Pn={display:!0,animate:!0,position:"chartArea",angleLines:{display:!0,color:"rgba(0,0,0,0.1)",lineWidth:1,borderDash:[],borderDashOffset:0},gridLines:{circular:!1},ticks:{showLabelBackdrop:!0,backdropColor:"rgba(255,255,255,0.75)",backdropPaddingY:2,backdropPaddingX:2,callback:Ze.formatters.linear},pointLabels:{display:!0,fontSize:10,callback:function(t){return t}}}
function Tn(t){var e=t.ticks
return e.display&&t.display?Sn(e.fontSize,N.global.defaultFontSize)+2*e.backdropPaddingY:0}function On(t,e,n,i,a){return t===i||t===a?{start:e-n/2,end:e+n/2}:t<i||t>a?{start:e-n,end:e}:{start:e,end:e+n}}function An(t){return 0===t||180===t?"center":t<180?"left":"right"}function Fn(t,e,n,i){var a,r,o=n.y+i/2
if(V.isArray(e))for(a=0,r=e.length;a<r;++a)t.fillText(e[a],n.x,o),o+=i
else t.fillText(e,n.x,o)}function In(t,e,n){90===t||270===t?n.y-=e.h/2:(t>270||t<90)&&(n.y-=e.h)}function Ln(t){return V.isNumber(t)?t:0}var Rn=fn.extend({setDimensions:function(){var t=this
t.width=t.maxWidth,t.height=t.maxHeight,t.paddingTop=Tn(t.options)/2,t.xCenter=Math.floor(t.width/2),t.yCenter=Math.floor((t.height-t.paddingTop)/2),t.drawingArea=Math.min(t.height-t.paddingTop,t.width)/2},determineDataLimits:function(){var t=this,e=t.chart,n=Number.POSITIVE_INFINITY,i=Number.NEGATIVE_INFINITY
V.each(e.data.datasets,(function(a,r){if(e.isDatasetVisible(r)){var o=e.getDatasetMeta(r)
V.each(a.data,(function(e,a){var r=+t.getRightValue(e)
isNaN(r)||o.data[a].hidden||(n=Math.min(r,n),i=Math.max(r,i))}))}})),t.min=n===Number.POSITIVE_INFINITY?0:n,t.max=i===Number.NEGATIVE_INFINITY?0:i,t.handleTickRangeOptions()},_computeTickLimit:function(){return Math.ceil(this.drawingArea/Tn(this.options))},convertTicksToLabels:function(){var t=this
fn.prototype.convertTicksToLabels.call(t),t.pointLabels=t.chart.data.labels.map((function(){var e=V.callback(t.options.pointLabels.callback,arguments,t)
return e||0===e?e:""}))},getLabelForIndex:function(t,e){return+this.getRightValue(this.chart.data.datasets[e].data[t])},fit:function(){var t=this.options
t.display&&t.pointLabels.display?function(t){var e,n,i,a=V.options._parseFont(t.options.pointLabels),r={l:0,r:t.width,t:0,b:t.height-t.paddingTop},o={}
t.ctx.font=a.string,t._pointLabelSizes=[]
var s,l,u,d=t.chart.data.labels.length
for(e=0;e<d;e++){i=t.getPointPosition(e,t.drawingArea+5),s=t.ctx,l=a.lineHeight,u=t.pointLabels[e],n=V.isArray(u)?{w:V.longestText(s,s.font,u),h:u.length*l}:{w:s.measureText(u).width,h:l},t._pointLabelSizes[e]=n
var h=t.getIndexAngle(e),c=V.toDegrees(h)%360,f=On(c,i.x,n.w,0,180),g=On(c,i.y,n.h,90,270)
f.start<r.l&&(r.l=f.start,o.l=h),f.end>r.r&&(r.r=f.end,o.r=h),g.start<r.t&&(r.t=g.start,o.t=h),g.end>r.b&&(r.b=g.end,o.b=h)}t.setReductions(t.drawingArea,r,o)}(this):this.setCenterPoint(0,0,0,0)},setReductions:function(t,e,n){var i=this,a=e.l/Math.sin(n.l),r=Math.max(e.r-i.width,0)/Math.sin(n.r),o=-e.t/Math.cos(n.t),s=-Math.max(e.b-(i.height-i.paddingTop),0)/Math.cos(n.b)
a=Ln(a),r=Ln(r),o=Ln(o),s=Ln(s),i.drawingArea=Math.min(Math.floor(t-(a+r)/2),Math.floor(t-(o+s)/2)),i.setCenterPoint(a,r,o,s)},setCenterPoint:function(t,e,n,i){var a=this,r=a.width-e-a.drawingArea,o=t+a.drawingArea,s=n+a.drawingArea,l=a.height-a.paddingTop-i-a.drawingArea
a.xCenter=Math.floor((o+r)/2+a.left),a.yCenter=Math.floor((s+l)/2+a.top+a.paddingTop)},getIndexAngle:function(t){var e=this.chart,n=(t*(360/e.data.labels.length)+((e.options||{}).startAngle||0))%360
return(n<0?n+360:n)*Math.PI*2/360},getDistanceFromCenterForValue:function(t){var e=this
if(V.isNullOrUndef(t))return NaN
var n=e.drawingArea/(e.max-e.min)
return e.options.ticks.reverse?(e.max-t)*n:(t-e.min)*n},getPointPosition:function(t,e){var n=this.getIndexAngle(t)-Math.PI/2
return{x:Math.cos(n)*e+this.xCenter,y:Math.sin(n)*e+this.yCenter}},getPointPositionForValue:function(t,e){return this.getPointPosition(t,this.getDistanceFromCenterForValue(e))},getBasePosition:function(t){var e=this.min,n=this.max
return this.getPointPositionForValue(t||0,this.beginAtZero?0:e<0&&n<0?n:e>0&&n>0?e:0)},_drawGrid:function(){var t,e,n,i=this,a=i.ctx,r=i.options,o=r.gridLines,s=r.angleLines,l=Sn(s.lineWidth,o.lineWidth),u=Sn(s.color,o.color)
if(r.pointLabels.display&&function(t){var e=t.ctx,n=t.options,i=n.pointLabels,a=Tn(n),r=t.getDistanceFromCenterForValue(n.ticks.reverse?t.min:t.max),o=V.options._parseFont(i)
e.save(),e.font=o.string,e.textBaseline="middle"
for(var s=t.chart.data.labels.length-1;s>=0;s--){var l=0===s?a/2:0,u=t.getPointPosition(s,r+l+5),d=Dn(i.fontColor,s,N.global.defaultFontColor)
e.fillStyle=d
var h=t.getIndexAngle(s),c=V.toDegrees(h)
e.textAlign=An(c),In(c,t._pointLabelSizes[s],u),Fn(e,t.pointLabels[s],u,o.lineHeight)}e.restore()}(i),o.display&&V.each(i.ticks,(function(t,n){0!==n&&(e=i.getDistanceFromCenterForValue(i.ticksAsNumbers[n]),function(t,e,n,i){var a,r=t.ctx,o=e.circular,s=t.chart.data.labels.length,l=Dn(e.color,i-1),u=Dn(e.lineWidth,i-1)
if((o||s)&&l&&u){if(r.save(),r.strokeStyle=l,r.lineWidth=u,r.setLineDash&&(r.setLineDash(e.borderDash||[]),r.lineDashOffset=e.borderDashOffset||0),r.beginPath(),o)r.arc(t.xCenter,t.yCenter,n,0,2*Math.PI)
else{a=t.getPointPosition(0,n),r.moveTo(a.x,a.y)
for(var d=1;d<s;d++)a=t.getPointPosition(d,n),r.lineTo(a.x,a.y)}r.closePath(),r.stroke(),r.restore()}}(i,o,e,n))})),s.display&&l&&u){for(a.save(),a.lineWidth=l,a.strokeStyle=u,a.setLineDash&&(a.setLineDash(Cn([s.borderDash,o.borderDash,[]])),a.lineDashOffset=Cn([s.borderDashOffset,o.borderDashOffset,0])),t=i.chart.data.labels.length-1;t>=0;t--)e=i.getDistanceFromCenterForValue(r.ticks.reverse?i.min:i.max),n=i.getPointPosition(t,e),a.beginPath(),a.moveTo(i.xCenter,i.yCenter),a.lineTo(n.x,n.y),a.stroke()
a.restore()}},_drawLabels:function(){var t=this,e=t.ctx,n=t.options.ticks
if(n.display){var i,a,r=t.getIndexAngle(0),o=V.options._parseFont(n),s=Sn(n.fontColor,N.global.defaultFontColor)
e.save(),e.font=o.string,e.translate(t.xCenter,t.yCenter),e.rotate(r),e.textAlign="center",e.textBaseline="middle",V.each(t.ticks,(function(r,l){(0!==l||n.reverse)&&(i=t.getDistanceFromCenterForValue(t.ticksAsNumbers[l]),n.showLabelBackdrop&&(a=e.measureText(r).width,e.fillStyle=n.backdropColor,e.fillRect(-a/2-n.backdropPaddingX,-i-o.size/2-n.backdropPaddingY,a+2*n.backdropPaddingX,o.size+2*n.backdropPaddingY)),e.fillStyle=s,e.fillText(r,0,-i))})),e.restore()}},_drawTitle:V.noop}),Nn=Pn
Rn._defaults=Nn
var Wn=V._deprecated,Yn=V.options.resolve,zn=V.valueOrDefault,En=Number.MIN_SAFE_INTEGER||-9007199254740991,Vn=Number.MAX_SAFE_INTEGER||9007199254740991,Hn={millisecond:{common:!0,size:1,steps:1e3},second:{common:!0,size:1e3,steps:60},minute:{common:!0,size:6e4,steps:60},hour:{common:!0,size:36e5,steps:24},day:{common:!0,size:864e5,steps:30},week:{common:!1,size:6048e5,steps:4},month:{common:!0,size:2628e6,steps:12},quarter:{common:!1,size:7884e6,steps:4},year:{common:!0,size:3154e7}},Bn=Object.keys(Hn)
function jn(t,e){return t-e}function Un(t){return V.valueOrDefault(t.time.min,t.ticks.min)}function Gn(t){return V.valueOrDefault(t.time.max,t.ticks.max)}function qn(t,e,n,i){var a=function(t,e,n){for(var i,a,r,o=0,s=t.length-1;o>=0&&o<=s;){if(a=t[(i=o+s>>1)-1]||null,r=t[i],!a)return{lo:null,hi:r}
if(r[e]<n)o=i+1
else{if(!(a[e]>n))return{lo:a,hi:r}
s=i-1}}return{lo:r,hi:null}}(t,e,n),r=a.lo?a.hi?a.lo:t[t.length-2]:t[0],o=a.lo?a.hi?a.hi:t[t.length-1]:t[1],s=o[e]-r[e],l=s?(n-r[e])/s:0,u=(o[i]-r[i])*l
return r[i]+u}function Zn(t,e){var n=t._adapter,i=t.options.time,a=i.parser,r=a||i.format,o=e
return"function"==typeof a&&(o=a(o)),V.isFinite(o)||(o="string"==typeof r?n.parse(o,r):n.parse(o)),null!==o?+o:(a||"function"!=typeof r||(o=r(e),V.isFinite(o)||(o=n.parse(o))),o)}function $n(t,e){if(V.isNullOrUndef(e))return null
var n=t.options.time,i=Zn(t,t.getRightValue(e))
return null===i||n.round&&(i=+t._adapter.startOf(i,n.round)),i}function Xn(t,e,n,i){var a,r,o,s=Bn.length
for(a=Bn.indexOf(t);a<s-1;++a)if(o=(r=Hn[Bn[a]]).steps?r.steps:Vn,r.common&&Math.ceil((n-e)/(o*r.size))<=i)return Bn[a]
return Bn[s-1]}function Kn(t,e,n){var i,a,r=[],o={},s=e.length
for(i=0;i<s;++i)o[a=e[i]]=i,r.push({value:a,major:!1})
return 0!==s&&n?function(t,e,n,i){var a,r,o=t._adapter,s=+o.startOf(e[0].value,i),l=e[e.length-1].value
for(a=s;a<=l;a=+o.add(a,1,i))(r=n[a])>=0&&(e[r].major=!0)
return e}(t,r,o,n):r}var Jn=ln.extend({initialize:function(){this.mergeTicksOptions(),ln.prototype.initialize.call(this)},update:function(){var t=this,e=t.options,n=e.time||(e.time={}),i=t._adapter=new qe._date(e.adapters.date)
return Wn("time scale",n.format,"time.format","time.parser"),Wn("time scale",n.min,"time.min","ticks.min"),Wn("time scale",n.max,"time.max","ticks.max"),V.mergeIf(n.displayFormats,i.formats()),ln.prototype.update.apply(t,arguments)},getRightValue:function(t){return t&&void 0!==t.t&&(t=t.t),ln.prototype.getRightValue.call(this,t)},determineDataLimits:function(){var t,e,n,i,a,r,o,s=this,l=s.chart,u=s._adapter,d=s.options,h=d.time.unit||"day",c=Vn,f=En,g=[],m=[],p=[],v=s._getLabels()
for(t=0,n=v.length;t<n;++t)p.push($n(s,v[t]))
for(t=0,n=(l.data.datasets||[]).length;t<n;++t)if(l.isDatasetVisible(t))if(a=l.data.datasets[t].data,V.isObject(a[0]))for(m[t]=[],e=0,i=a.length;e<i;++e)r=$n(s,a[e]),g.push(r),m[t][e]=r
else m[t]=p.slice(0),o||(g=g.concat(p),o=!0)
else m[t]=[]
p.length&&(c=Math.min(c,p[0]),f=Math.max(f,p[p.length-1])),g.length&&(g=n>1?function(t){var e,n,i,a={},r=[]
for(e=0,n=t.length;e<n;++e)a[i=t[e]]||(a[i]=!0,r.push(i))
return r}(g).sort(jn):g.sort(jn),c=Math.min(c,g[0]),f=Math.max(f,g[g.length-1])),c=$n(s,Un(d))||c,f=$n(s,Gn(d))||f,c=c===Vn?+u.startOf(Date.now(),h):c,f=f===En?+u.endOf(Date.now(),h)+1:f,s.min=Math.min(c,f),s.max=Math.max(c+1,f),s._table=[],s._timestamps={data:g,datasets:m,labels:p}},buildTicks:function(){var t,e,n,i=this,a=i.min,r=i.max,o=i.options,s=o.ticks,l=o.time,u=i._timestamps,d=[],h=i.getLabelCapacity(a),c=s.source,f=o.distribution
for(u="data"===c||"auto"===c&&"series"===f?u.data:"labels"===c?u.labels:function(t,e,n,i){var a,r=t._adapter,o=t.options,s=o.time,l=s.unit||Xn(s.minUnit,e,n,i),u=Yn([s.stepSize,s.unitStepSize,1]),d="week"===l&&s.isoWeekday,h=e,c=[]
if(d&&(h=+r.startOf(h,"isoWeek",d)),h=+r.startOf(h,d?"day":l),r.diff(n,e,l)>1e5*u)throw e+" and "+n+" are too far apart with stepSize of "+u+" "+l
for(a=h;a<n;a=+r.add(a,u,l))c.push(a)
return a!==n&&"ticks"!==o.bounds||c.push(a),c}(i,a,r,h),"ticks"===o.bounds&&u.length&&(a=u[0],r=u[u.length-1]),a=$n(i,Un(o))||a,r=$n(i,Gn(o))||r,t=0,e=u.length;t<e;++t)(n=u[t])>=a&&n<=r&&d.push(n)
return i.min=a,i.max=r,i._unit=l.unit||(s.autoSkip?Xn(l.minUnit,i.min,i.max,h):function(t,e,n,i,a){var r,o
for(r=Bn.length-1;r>=Bn.indexOf(n);r--)if(o=Bn[r],Hn[o].common&&t._adapter.diff(a,i,o)>=e-1)return o
return Bn[n?Bn.indexOf(n):0]}(i,d.length,l.minUnit,i.min,i.max)),i._majorUnit=s.major.enabled&&"year"!==i._unit?function(t){for(var e=Bn.indexOf(t)+1,n=Bn.length;e<n;++e)if(Hn[Bn[e]].common)return Bn[e]}(i._unit):void 0,i._table=function(t,e,n,i){if("linear"===i||!t.length)return[{time:e,pos:0},{time:n,pos:1}]
var a,r,o,s,l,u=[],d=[e]
for(a=0,r=t.length;a<r;++a)(s=t[a])>e&&s<n&&d.push(s)
for(d.push(n),a=0,r=d.length;a<r;++a)l=d[a+1],o=d[a-1],s=d[a],void 0!==o&&void 0!==l&&Math.round((l+o)/2)===s||u.push({time:s,pos:a/(r-1)})
return u}(i._timestamps.data,a,r,f),i._offsets=function(t,e,n,i,a){var r,o,s=0,l=0
return a.offset&&e.length&&(r=qn(t,"time",e[0],"pos"),s=1===e.length?1-r:(qn(t,"time",e[1],"pos")-r)/2,o=qn(t,"time",e[e.length-1],"pos"),l=1===e.length?o:(o-qn(t,"time",e[e.length-2],"pos"))/2),{start:s,end:l,factor:1/(s+1+l)}}(i._table,d,0,0,o),s.reverse&&d.reverse(),Kn(i,d,i._majorUnit)},getLabelForIndex:function(t,e){var n=this,i=n._adapter,a=n.chart.data,r=n.options.time,o=a.labels&&t<a.labels.length?a.labels[t]:"",s=a.datasets[e].data[t]
return V.isObject(s)&&(o=n.getRightValue(s)),r.tooltipFormat?i.format(Zn(n,o),r.tooltipFormat):"string"==typeof o?o:i.format(Zn(n,o),r.displayFormats.datetime)},tickFormatFunction:function(t,e,n,i){var a=this._adapter,r=this.options,o=r.time.displayFormats,s=o[this._unit],l=this._majorUnit,u=o[l],d=n[e],h=r.ticks,c=l&&u&&d&&d.major,f=a.format(t,i||(c?u:s)),g=c?h.major:h.minor,m=Yn([g.callback,g.userCallback,h.callback,h.userCallback])
return m?m(f,e,n):f},convertTicksToLabels:function(t){var e,n,i=[]
for(e=0,n=t.length;e<n;++e)i.push(this.tickFormatFunction(t[e].value,e,t))
return i},getPixelForOffset:function(t){var e=this._offsets,n=qn(this._table,"time",t,"pos")
return this.getPixelForDecimal((e.start+n)*e.factor)},getPixelForValue:function(t,e,n){var i=null
if(void 0!==e&&void 0!==n&&(i=this._timestamps.datasets[n][e]),null===i&&(i=$n(this,t)),null!==i)return this.getPixelForOffset(i)},getPixelForTick:function(t){var e=this.getTicks()
return t>=0&&t<e.length?this.getPixelForOffset(e[t].value):null},getValueForPixel:function(t){var e=this._offsets,n=this.getDecimalForPixel(t)/e.factor-e.end,i=qn(this._table,"pos",n,"time")
return this._adapter._create(i)},_getLabelSize:function(t){var e=this.options.ticks,n=this.ctx.measureText(t).width,i=V.toRadians(this.isHorizontal()?e.maxRotation:e.minRotation),a=Math.cos(i),r=Math.sin(i),o=zn(e.fontSize,N.global.defaultFontSize)
return{w:n*a+o*r,h:n*r+o*a}},getLabelWidth:function(t){return this._getLabelSize(t).w},getLabelCapacity:function(t){var e=this,n=e.options.time,i=n.displayFormats,a=i[n.unit]||i.millisecond,r=e.tickFormatFunction(t,0,Kn(e,[t],e._majorUnit),a),o=e._getLabelSize(r),s=Math.floor(e.isHorizontal()?e.width/o.w:e.height/o.h)
return e.options.offset&&s--,s>0?s:1}})
Jn._defaults={position:"bottom",distribution:"linear",bounds:"data",adapters:{},time:{parser:!1,unit:!1,round:!1,displayFormat:!1,isoWeekday:!1,minUnit:"millisecond",displayFormats:{}},ticks:{autoSkip:!1,source:"auto",major:{enabled:!1}}}
var Qn={category:dn,linear:vn,logarithmic:kn,radialLinear:Rn,time:Jn},ti=t((function(t,e){t.exports=function(){var e,n
function i(){return e.apply(null,arguments)}function a(t){return t instanceof Array||"[object Array]"===Object.prototype.toString.call(t)}function r(t){return null!=t&&"[object Object]"===Object.prototype.toString.call(t)}function o(t){return void 0===t}function s(t){return"number"==typeof t||"[object Number]"===Object.prototype.toString.call(t)}function l(t){return t instanceof Date||"[object Date]"===Object.prototype.toString.call(t)}function u(t,e){var n,i=[]
for(n=0;n<t.length;++n)i.push(e(t[n],n))
return i}function d(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function h(t,e){for(var n in e)d(e,n)&&(t[n]=e[n])
return d(e,"toString")&&(t.toString=e.toString),d(e,"valueOf")&&(t.valueOf=e.valueOf),t}function c(t,e,n,i){return Fe(t,e,n,i,!0).utc()}function f(t){return null==t._pf&&(t._pf={empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1,parsedDateParts:[],meridiem:null,rfc2822:!1,weekdayMismatch:!1}),t._pf}function g(t){if(null==t._isValid){var e=f(t),i=n.call(e.parsedDateParts,(function(t){return null!=t})),a=!isNaN(t._d.getTime())&&e.overflow<0&&!e.empty&&!e.invalidMonth&&!e.invalidWeekday&&!e.weekdayMismatch&&!e.nullInput&&!e.invalidFormat&&!e.userInvalidated&&(!e.meridiem||e.meridiem&&i)
if(t._strict&&(a=a&&0===e.charsLeftOver&&0===e.unusedTokens.length&&void 0===e.bigHour),null!=Object.isFrozen&&Object.isFrozen(t))return a
t._isValid=a}return t._isValid}function m(t){var e=c(NaN)
return null!=t?h(f(e),t):f(e).userInvalidated=!0,e}n=Array.prototype.some?Array.prototype.some:function(t){for(var e=Object(this),n=e.length>>>0,i=0;i<n;i++)if(i in e&&t.call(this,e[i],i,e))return!0
return!1}
var p=i.momentProperties=[]
function v(t,e){var n,i,a
if(o(e._isAMomentObject)||(t._isAMomentObject=e._isAMomentObject),o(e._i)||(t._i=e._i),o(e._f)||(t._f=e._f),o(e._l)||(t._l=e._l),o(e._strict)||(t._strict=e._strict),o(e._tzm)||(t._tzm=e._tzm),o(e._isUTC)||(t._isUTC=e._isUTC),o(e._offset)||(t._offset=e._offset),o(e._pf)||(t._pf=f(e)),o(e._locale)||(t._locale=e._locale),p.length>0)for(n=0;n<p.length;n++)o(a=e[i=p[n]])||(t[i]=a)
return t}var b=!1
function y(t){v(this,t),this._d=new Date(null!=t._d?t._d.getTime():NaN),this.isValid()||(this._d=new Date(NaN)),!1===b&&(b=!0,i.updateOffset(this),b=!1)}function x(t){return t instanceof y||null!=t&&null!=t._isAMomentObject}function _(t){return t<0?Math.ceil(t)||0:Math.floor(t)}function w(t){var e=+t,n=0
return 0!==e&&isFinite(e)&&(n=_(e)),n}function k(t,e,n){var i,a=Math.min(t.length,e.length),r=Math.abs(t.length-e.length),o=0
for(i=0;i<a;i++)(n&&t[i]!==e[i]||!n&&w(t[i])!==w(e[i]))&&o++
return o+r}function M(t){!1===i.suppressDeprecationWarnings&&"undefined"!=typeof console&&console.warn&&console.warn("Deprecation warning: "+t)}function S(t,e){var n=!0
return h((function(){if(null!=i.deprecationHandler&&i.deprecationHandler(null,t),n){for(var a,r=[],o=0;o<arguments.length;o++){if(a="","object"==typeof arguments[o]){for(var s in a+="\n["+o+"] ",arguments[0])a+=s+": "+arguments[0][s]+", "
a=a.slice(0,-2)}else a=arguments[o]
r.push(a)}M(t+"\nArguments: "+Array.prototype.slice.call(r).join("")+"\n"+(new Error).stack),n=!1}return e.apply(this,arguments)}),e)}var D,C={}
function P(t,e){null!=i.deprecationHandler&&i.deprecationHandler(t,e),C[t]||(M(e),C[t]=!0)}function T(t){return t instanceof Function||"[object Function]"===Object.prototype.toString.call(t)}function O(t,e){var n,i=h({},t)
for(n in e)d(e,n)&&(r(t[n])&&r(e[n])?(i[n]={},h(i[n],t[n]),h(i[n],e[n])):null!=e[n]?i[n]=e[n]:delete i[n])
for(n in t)d(t,n)&&!d(e,n)&&r(t[n])&&(i[n]=h({},i[n]))
return i}function A(t){null!=t&&this.set(t)}i.suppressDeprecationWarnings=!1,i.deprecationHandler=null,D=Object.keys?Object.keys:function(t){var e,n=[]
for(e in t)d(t,e)&&n.push(e)
return n}
var F={}
function I(t,e){var n=t.toLowerCase()
F[n]=F[n+"s"]=F[e]=t}function L(t){return"string"==typeof t?F[t]||F[t.toLowerCase()]:void 0}function R(t){var e,n,i={}
for(n in t)d(t,n)&&(e=L(n))&&(i[e]=t[n])
return i}var N={}
function W(t,e){N[t]=e}function Y(t,e,n){var i=""+Math.abs(t),a=e-i.length
return(t>=0?n?"+":"":"-")+Math.pow(10,Math.max(0,a)).toString().substr(1)+i}var z=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,E=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,V={},H={}
function B(t,e,n,i){var a=i
"string"==typeof i&&(a=function(){return this[i]()}),t&&(H[t]=a),e&&(H[e[0]]=function(){return Y(a.apply(this,arguments),e[1],e[2])}),n&&(H[n]=function(){return this.localeData().ordinal(a.apply(this,arguments),t)})}function j(t,e){return t.isValid()?(e=U(e,t.localeData()),V[e]=V[e]||function(t){var e,n,i,a=t.match(z)
for(e=0,n=a.length;e<n;e++)H[a[e]]?a[e]=H[a[e]]:a[e]=(i=a[e]).match(/\[[\s\S]/)?i.replace(/^\[|\]$/g,""):i.replace(/\\/g,"")
return function(e){var i,r=""
for(i=0;i<n;i++)r+=T(a[i])?a[i].call(e,t):a[i]
return r}}(e),V[e](t)):t.localeData().invalidDate()}function U(t,e){var n=5
function i(t){return e.longDateFormat(t)||t}for(E.lastIndex=0;n>=0&&E.test(t);)t=t.replace(E,i),E.lastIndex=0,n-=1
return t}var G=/\d/,q=/\d\d/,Z=/\d{3}/,$=/\d{4}/,X=/[+-]?\d{6}/,K=/\d\d?/,J=/\d\d\d\d?/,Q=/\d\d\d\d\d\d?/,tt=/\d{1,3}/,et=/\d{1,4}/,nt=/[+-]?\d{1,6}/,it=/\d+/,at=/[+-]?\d+/,rt=/Z|[+-]\d\d:?\d\d/gi,ot=/Z|[+-]\d\d(?::?\d\d)?/gi,st=/[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,lt={}
function ut(t,e,n){lt[t]=T(e)?e:function(t,i){return t&&n?n:e}}function dt(t,e){return d(lt,t)?lt[t](e._strict,e._locale):new RegExp(ht(t.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,(function(t,e,n,i,a){return e||n||i||a}))))}function ht(t){return t.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var ct={}
function ft(t,e){var n,i=e
for("string"==typeof t&&(t=[t]),s(e)&&(i=function(t,n){n[e]=w(t)}),n=0;n<t.length;n++)ct[t[n]]=i}function gt(t,e){ft(t,(function(t,n,i,a){i._w=i._w||{},e(t,i._w,i,a)}))}function mt(t,e,n){null!=e&&d(ct,t)&&ct[t](e,n._a,n,t)}var pt=0,vt=1,bt=2,yt=3,xt=4,_t=5,wt=6,kt=7,Mt=8
function St(t){return Dt(t)?366:365}function Dt(t){return t%4==0&&t%100!=0||t%400==0}B("Y",0,0,(function(){var t=this.year()
return t<=9999?""+t:"+"+t})),B(0,["YY",2],0,(function(){return this.year()%100})),B(0,["YYYY",4],0,"year"),B(0,["YYYYY",5],0,"year"),B(0,["YYYYYY",6,!0],0,"year"),I("year","y"),W("year",1),ut("Y",at),ut("YY",K,q),ut("YYYY",et,$),ut("YYYYY",nt,X),ut("YYYYYY",nt,X),ft(["YYYYY","YYYYYY"],pt),ft("YYYY",(function(t,e){e[pt]=2===t.length?i.parseTwoDigitYear(t):w(t)})),ft("YY",(function(t,e){e[pt]=i.parseTwoDigitYear(t)})),ft("Y",(function(t,e){e[pt]=parseInt(t,10)})),i.parseTwoDigitYear=function(t){return w(t)+(w(t)>68?1900:2e3)}
var Ct,Pt=Tt("FullYear",!0)
function Tt(t,e){return function(n){return null!=n?(At(this,t,n),i.updateOffset(this,e),this):Ot(this,t)}}function Ot(t,e){return t.isValid()?t._d["get"+(t._isUTC?"UTC":"")+e]():NaN}function At(t,e,n){t.isValid()&&!isNaN(n)&&("FullYear"===e&&Dt(t.year())&&1===t.month()&&29===t.date()?t._d["set"+(t._isUTC?"UTC":"")+e](n,t.month(),Ft(n,t.month())):t._d["set"+(t._isUTC?"UTC":"")+e](n))}function Ft(t,e){if(isNaN(t)||isNaN(e))return NaN
var n=function(t,e){return(t%12+12)%12}(e)
return t+=(e-n)/12,1===n?Dt(t)?29:28:31-n%7%2}Ct=Array.prototype.indexOf?Array.prototype.indexOf:function(t){var e
for(e=0;e<this.length;++e)if(this[e]===t)return e
return-1},B("M",["MM",2],"Mo",(function(){return this.month()+1})),B("MMM",0,0,(function(t){return this.localeData().monthsShort(this,t)})),B("MMMM",0,0,(function(t){return this.localeData().months(this,t)})),I("month","M"),W("month",8),ut("M",K),ut("MM",K,q),ut("MMM",(function(t,e){return e.monthsShortRegex(t)})),ut("MMMM",(function(t,e){return e.monthsRegex(t)})),ft(["M","MM"],(function(t,e){e[vt]=w(t)-1})),ft(["MMM","MMMM"],(function(t,e,n,i){var a=n._locale.monthsParse(t,i,n._strict)
null!=a?e[vt]=a:f(n).invalidMonth=t}))
var It=/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,Lt="January_February_March_April_May_June_July_August_September_October_November_December".split("_"),Rt="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_")
function Nt(t,e,n){var i,a,r,o=t.toLocaleLowerCase()
if(!this._monthsParse)for(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[],i=0;i<12;++i)r=c([2e3,i]),this._shortMonthsParse[i]=this.monthsShort(r,"").toLocaleLowerCase(),this._longMonthsParse[i]=this.months(r,"").toLocaleLowerCase()
return n?"MMM"===e?-1!==(a=Ct.call(this._shortMonthsParse,o))?a:null:-1!==(a=Ct.call(this._longMonthsParse,o))?a:null:"MMM"===e?-1!==(a=Ct.call(this._shortMonthsParse,o))||-1!==(a=Ct.call(this._longMonthsParse,o))?a:null:-1!==(a=Ct.call(this._longMonthsParse,o))||-1!==(a=Ct.call(this._shortMonthsParse,o))?a:null}function Wt(t,e){var n
if(!t.isValid())return t
if("string"==typeof e)if(/^\d+$/.test(e))e=w(e)
else if(!s(e=t.localeData().monthsParse(e)))return t
return n=Math.min(t.date(),Ft(t.year(),e)),t._d["set"+(t._isUTC?"UTC":"")+"Month"](e,n),t}function Yt(t){return null!=t?(Wt(this,t),i.updateOffset(this,!0),this):Ot(this,"Month")}var zt=st,Et=st
function Vt(){function t(t,e){return e.length-t.length}var e,n,i=[],a=[],r=[]
for(e=0;e<12;e++)n=c([2e3,e]),i.push(this.monthsShort(n,"")),a.push(this.months(n,"")),r.push(this.months(n,"")),r.push(this.monthsShort(n,""))
for(i.sort(t),a.sort(t),r.sort(t),e=0;e<12;e++)i[e]=ht(i[e]),a[e]=ht(a[e])
for(e=0;e<24;e++)r[e]=ht(r[e])
this._monthsRegex=new RegExp("^("+r.join("|")+")","i"),this._monthsShortRegex=this._monthsRegex,this._monthsStrictRegex=new RegExp("^("+a.join("|")+")","i"),this._monthsShortStrictRegex=new RegExp("^("+i.join("|")+")","i")}function Ht(t,e,n,i,a,r,o){var s
return t<100&&t>=0?(s=new Date(t+400,e,n,i,a,r,o),isFinite(s.getFullYear())&&s.setFullYear(t)):s=new Date(t,e,n,i,a,r,o),s}function Bt(t){var e
if(t<100&&t>=0){var n=Array.prototype.slice.call(arguments)
n[0]=t+400,e=new Date(Date.UTC.apply(null,n)),isFinite(e.getUTCFullYear())&&e.setUTCFullYear(t)}else e=new Date(Date.UTC.apply(null,arguments))
return e}function jt(t,e,n){var i=7+e-n
return-(7+Bt(t,0,i).getUTCDay()-e)%7+i-1}function Ut(t,e,n,i,a){var r,o,s=1+7*(e-1)+(7+n-i)%7+jt(t,i,a)
return s<=0?o=St(r=t-1)+s:s>St(t)?(r=t+1,o=s-St(t)):(r=t,o=s),{year:r,dayOfYear:o}}function Gt(t,e,n){var i,a,r=jt(t.year(),e,n),o=Math.floor((t.dayOfYear()-r-1)/7)+1
return o<1?i=o+qt(a=t.year()-1,e,n):o>qt(t.year(),e,n)?(i=o-qt(t.year(),e,n),a=t.year()+1):(a=t.year(),i=o),{week:i,year:a}}function qt(t,e,n){var i=jt(t,e,n),a=jt(t+1,e,n)
return(St(t)-i+a)/7}function Zt(t,e){return t.slice(e,7).concat(t.slice(0,e))}B("w",["ww",2],"wo","week"),B("W",["WW",2],"Wo","isoWeek"),I("week","w"),I("isoWeek","W"),W("week",5),W("isoWeek",5),ut("w",K),ut("ww",K,q),ut("W",K),ut("WW",K,q),gt(["w","ww","W","WW"],(function(t,e,n,i){e[i.substr(0,1)]=w(t)})),B("d",0,"do","day"),B("dd",0,0,(function(t){return this.localeData().weekdaysMin(this,t)})),B("ddd",0,0,(function(t){return this.localeData().weekdaysShort(this,t)})),B("dddd",0,0,(function(t){return this.localeData().weekdays(this,t)})),B("e",0,0,"weekday"),B("E",0,0,"isoWeekday"),I("day","d"),I("weekday","e"),I("isoWeekday","E"),W("day",11),W("weekday",11),W("isoWeekday",11),ut("d",K),ut("e",K),ut("E",K),ut("dd",(function(t,e){return e.weekdaysMinRegex(t)})),ut("ddd",(function(t,e){return e.weekdaysShortRegex(t)})),ut("dddd",(function(t,e){return e.weekdaysRegex(t)})),gt(["dd","ddd","dddd"],(function(t,e,n,i){var a=n._locale.weekdaysParse(t,i,n._strict)
null!=a?e.d=a:f(n).invalidWeekday=t})),gt(["d","e","E"],(function(t,e,n,i){e[i]=w(t)}))
var $t="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),Xt="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),Kt="Su_Mo_Tu_We_Th_Fr_Sa".split("_")
function Jt(t,e,n){var i,a,r,o=t.toLocaleLowerCase()
if(!this._weekdaysParse)for(this._weekdaysParse=[],this._shortWeekdaysParse=[],this._minWeekdaysParse=[],i=0;i<7;++i)r=c([2e3,1]).day(i),this._minWeekdaysParse[i]=this.weekdaysMin(r,"").toLocaleLowerCase(),this._shortWeekdaysParse[i]=this.weekdaysShort(r,"").toLocaleLowerCase(),this._weekdaysParse[i]=this.weekdays(r,"").toLocaleLowerCase()
return n?"dddd"===e?-1!==(a=Ct.call(this._weekdaysParse,o))?a:null:"ddd"===e?-1!==(a=Ct.call(this._shortWeekdaysParse,o))?a:null:-1!==(a=Ct.call(this._minWeekdaysParse,o))?a:null:"dddd"===e?-1!==(a=Ct.call(this._weekdaysParse,o))||-1!==(a=Ct.call(this._shortWeekdaysParse,o))||-1!==(a=Ct.call(this._minWeekdaysParse,o))?a:null:"ddd"===e?-1!==(a=Ct.call(this._shortWeekdaysParse,o))||-1!==(a=Ct.call(this._weekdaysParse,o))||-1!==(a=Ct.call(this._minWeekdaysParse,o))?a:null:-1!==(a=Ct.call(this._minWeekdaysParse,o))||-1!==(a=Ct.call(this._weekdaysParse,o))||-1!==(a=Ct.call(this._shortWeekdaysParse,o))?a:null}var Qt=st,te=st,ee=st
function ne(){function t(t,e){return e.length-t.length}var e,n,i,a,r,o=[],s=[],l=[],u=[]
for(e=0;e<7;e++)n=c([2e3,1]).day(e),i=this.weekdaysMin(n,""),a=this.weekdaysShort(n,""),r=this.weekdays(n,""),o.push(i),s.push(a),l.push(r),u.push(i),u.push(a),u.push(r)
for(o.sort(t),s.sort(t),l.sort(t),u.sort(t),e=0;e<7;e++)s[e]=ht(s[e]),l[e]=ht(l[e]),u[e]=ht(u[e])
this._weekdaysRegex=new RegExp("^("+u.join("|")+")","i"),this._weekdaysShortRegex=this._weekdaysRegex,this._weekdaysMinRegex=this._weekdaysRegex,this._weekdaysStrictRegex=new RegExp("^("+l.join("|")+")","i"),this._weekdaysShortStrictRegex=new RegExp("^("+s.join("|")+")","i"),this._weekdaysMinStrictRegex=new RegExp("^("+o.join("|")+")","i")}function ie(){return this.hours()%12||12}function ae(t,e){B(t,0,0,(function(){return this.localeData().meridiem(this.hours(),this.minutes(),e)}))}function re(t,e){return e._meridiemParse}B("H",["HH",2],0,"hour"),B("h",["hh",2],0,ie),B("k",["kk",2],0,(function(){return this.hours()||24})),B("hmm",0,0,(function(){return""+ie.apply(this)+Y(this.minutes(),2)})),B("hmmss",0,0,(function(){return""+ie.apply(this)+Y(this.minutes(),2)+Y(this.seconds(),2)})),B("Hmm",0,0,(function(){return""+this.hours()+Y(this.minutes(),2)})),B("Hmmss",0,0,(function(){return""+this.hours()+Y(this.minutes(),2)+Y(this.seconds(),2)})),ae("a",!0),ae("A",!1),I("hour","h"),W("hour",13),ut("a",re),ut("A",re),ut("H",K),ut("h",K),ut("k",K),ut("HH",K,q),ut("hh",K,q),ut("kk",K,q),ut("hmm",J),ut("hmmss",Q),ut("Hmm",J),ut("Hmmss",Q),ft(["H","HH"],yt),ft(["k","kk"],(function(t,e,n){var i=w(t)
e[yt]=24===i?0:i})),ft(["a","A"],(function(t,e,n){n._isPm=n._locale.isPM(t),n._meridiem=t})),ft(["h","hh"],(function(t,e,n){e[yt]=w(t),f(n).bigHour=!0})),ft("hmm",(function(t,e,n){var i=t.length-2
e[yt]=w(t.substr(0,i)),e[xt]=w(t.substr(i)),f(n).bigHour=!0})),ft("hmmss",(function(t,e,n){var i=t.length-4,a=t.length-2
e[yt]=w(t.substr(0,i)),e[xt]=w(t.substr(i,2)),e[_t]=w(t.substr(a)),f(n).bigHour=!0})),ft("Hmm",(function(t,e,n){var i=t.length-2
e[yt]=w(t.substr(0,i)),e[xt]=w(t.substr(i))})),ft("Hmmss",(function(t,e,n){var i=t.length-4,a=t.length-2
e[yt]=w(t.substr(0,i)),e[xt]=w(t.substr(i,2)),e[_t]=w(t.substr(a))}))
var oe,se=Tt("Hours",!0),le={calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},longDateFormat:{LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},invalidDate:"Invalid date",ordinal:"%d",dayOfMonthOrdinalParse:/\d{1,2}/,relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},months:Lt,monthsShort:Rt,week:{dow:0,doy:6},weekdays:$t,weekdaysMin:Kt,weekdaysShort:Xt,meridiemParse:/[ap]\.?m?\.?/i},ue={},de={}
function he(t){return t?t.toLowerCase().replace("_","-"):t}function ce(e){var n=null
if(!ue[e]&&t&&t.exports)try{n=oe._abbr,function(){throw new Error("Dynamic requires are not currently supported by rollup-plugin-commonjs")}(),fe(n)}catch(i){}return ue[e]}function fe(t,e){var n
return t&&((n=o(e)?me(t):ge(t,e))?oe=n:"undefined"!=typeof console&&console.warn&&console.warn("Locale "+t+" not found. Did you forget to load it?")),oe._abbr}function ge(t,e){if(null!==e){var n,i=le
if(e.abbr=t,null!=ue[t])P("defineLocaleOverride","use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),i=ue[t]._config
else if(null!=e.parentLocale)if(null!=ue[e.parentLocale])i=ue[e.parentLocale]._config
else{if(null==(n=ce(e.parentLocale)))return de[e.parentLocale]||(de[e.parentLocale]=[]),de[e.parentLocale].push({name:t,config:e}),null
i=n._config}return ue[t]=new A(O(i,e)),de[t]&&de[t].forEach((function(t){ge(t.name,t.config)})),fe(t),ue[t]}return delete ue[t],null}function me(t){var e
if(t&&t._locale&&t._locale._abbr&&(t=t._locale._abbr),!t)return oe
if(!a(t)){if(e=ce(t))return e
t=[t]}return function(t){for(var e,n,i,a,r=0;r<t.length;){for(e=(a=he(t[r]).split("-")).length,n=(n=he(t[r+1]))?n.split("-"):null;e>0;){if(i=ce(a.slice(0,e).join("-")))return i
if(n&&n.length>=e&&k(a,n,!0)>=e-1)break
e--}r++}return oe}(t)}function pe(t){var e,n=t._a
return n&&-2===f(t).overflow&&(e=n[vt]<0||n[vt]>11?vt:n[bt]<1||n[bt]>Ft(n[pt],n[vt])?bt:n[yt]<0||n[yt]>24||24===n[yt]&&(0!==n[xt]||0!==n[_t]||0!==n[wt])?yt:n[xt]<0||n[xt]>59?xt:n[_t]<0||n[_t]>59?_t:n[wt]<0||n[wt]>999?wt:-1,f(t)._overflowDayOfYear&&(e<pt||e>bt)&&(e=bt),f(t)._overflowWeeks&&-1===e&&(e=kt),f(t)._overflowWeekday&&-1===e&&(e=Mt),f(t).overflow=e),t}function ve(t,e,n){return null!=t?t:null!=e?e:n}function be(t){var e,n,a,r,o,s=[]
if(!t._d){for(a=function(t){var e=new Date(i.now())
return t._useUTC?[e.getUTCFullYear(),e.getUTCMonth(),e.getUTCDate()]:[e.getFullYear(),e.getMonth(),e.getDate()]}(t),t._w&&null==t._a[bt]&&null==t._a[vt]&&function(t){var e,n,i,a,r,o,s,l
if(null!=(e=t._w).GG||null!=e.W||null!=e.E)r=1,o=4,n=ve(e.GG,t._a[pt],Gt(Ie(),1,4).year),i=ve(e.W,1),((a=ve(e.E,1))<1||a>7)&&(l=!0)
else{r=t._locale._week.dow,o=t._locale._week.doy
var u=Gt(Ie(),r,o)
n=ve(e.gg,t._a[pt],u.year),i=ve(e.w,u.week),null!=e.d?((a=e.d)<0||a>6)&&(l=!0):null!=e.e?(a=e.e+r,(e.e<0||e.e>6)&&(l=!0)):a=r}i<1||i>qt(n,r,o)?f(t)._overflowWeeks=!0:null!=l?f(t)._overflowWeekday=!0:(s=Ut(n,i,a,r,o),t._a[pt]=s.year,t._dayOfYear=s.dayOfYear)}(t),null!=t._dayOfYear&&(o=ve(t._a[pt],a[pt]),(t._dayOfYear>St(o)||0===t._dayOfYear)&&(f(t)._overflowDayOfYear=!0),n=Bt(o,0,t._dayOfYear),t._a[vt]=n.getUTCMonth(),t._a[bt]=n.getUTCDate()),e=0;e<3&&null==t._a[e];++e)t._a[e]=s[e]=a[e]
for(;e<7;e++)t._a[e]=s[e]=null==t._a[e]?2===e?1:0:t._a[e]
24===t._a[yt]&&0===t._a[xt]&&0===t._a[_t]&&0===t._a[wt]&&(t._nextDay=!0,t._a[yt]=0),t._d=(t._useUTC?Bt:Ht).apply(null,s),r=t._useUTC?t._d.getUTCDay():t._d.getDay(),null!=t._tzm&&t._d.setUTCMinutes(t._d.getUTCMinutes()-t._tzm),t._nextDay&&(t._a[yt]=24),t._w&&void 0!==t._w.d&&t._w.d!==r&&(f(t).weekdayMismatch=!0)}}var ye=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,xe=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,_e=/Z|[+-]\d\d(?::?\d\d)?/,we=[["YYYYYY-MM-DD",/[+-]\d{6}-\d\d-\d\d/],["YYYY-MM-DD",/\d{4}-\d\d-\d\d/],["GGGG-[W]WW-E",/\d{4}-W\d\d-\d/],["GGGG-[W]WW",/\d{4}-W\d\d/,!1],["YYYY-DDD",/\d{4}-\d{3}/],["YYYY-MM",/\d{4}-\d\d/,!1],["YYYYYYMMDD",/[+-]\d{10}/],["YYYYMMDD",/\d{8}/],["GGGG[W]WWE",/\d{4}W\d{3}/],["GGGG[W]WW",/\d{4}W\d{2}/,!1],["YYYYDDD",/\d{7}/]],ke=[["HH:mm:ss.SSSS",/\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss,SSSS",/\d\d:\d\d:\d\d,\d+/],["HH:mm:ss",/\d\d:\d\d:\d\d/],["HH:mm",/\d\d:\d\d/],["HHmmss.SSSS",/\d\d\d\d\d\d\.\d+/],["HHmmss,SSSS",/\d\d\d\d\d\d,\d+/],["HHmmss",/\d\d\d\d\d\d/],["HHmm",/\d\d\d\d/],["HH",/\d\d/]],Me=/^\/?Date\((\-?\d+)/i
function Se(t){var e,n,i,a,r,o,s=t._i,l=ye.exec(s)||xe.exec(s)
if(l){for(f(t).iso=!0,e=0,n=we.length;e<n;e++)if(we[e][1].exec(l[1])){a=we[e][0],i=!1!==we[e][2]
break}if(null==a)return void(t._isValid=!1)
if(l[3]){for(e=0,n=ke.length;e<n;e++)if(ke[e][1].exec(l[3])){r=(l[2]||" ")+ke[e][0]
break}if(null==r)return void(t._isValid=!1)}if(!i&&null!=r)return void(t._isValid=!1)
if(l[4]){if(!_e.exec(l[4]))return void(t._isValid=!1)
o="Z"}t._f=a+(r||"")+(o||""),Oe(t)}else t._isValid=!1}var De=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/
function Ce(t){var e=parseInt(t,10)
return e<=49?2e3+e:e<=999?1900+e:e}var Pe={UT:0,GMT:0,EDT:-240,EST:-300,CDT:-300,CST:-360,MDT:-360,MST:-420,PDT:-420,PST:-480}
function Te(t){var e,n,i,a,r,o,s,l=De.exec(t._i.replace(/\([^)]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").replace(/^\s\s*/,"").replace(/\s\s*$/,""))
if(l){var u=(e=l[4],n=l[3],i=l[2],a=l[5],r=l[6],o=l[7],s=[Ce(e),Rt.indexOf(n),parseInt(i,10),parseInt(a,10),parseInt(r,10)],o&&s.push(parseInt(o,10)),s)
if(!function(t,e,n){return!t||Xt.indexOf(t)===new Date(e[0],e[1],e[2]).getDay()||(f(n).weekdayMismatch=!0,n._isValid=!1,!1)}(l[1],u,t))return
t._a=u,t._tzm=function(t,e,n){if(t)return Pe[t]
if(e)return 0
var i=parseInt(n,10),a=i%100
return(i-a)/100*60+a}(l[8],l[9],l[10]),t._d=Bt.apply(null,t._a),t._d.setUTCMinutes(t._d.getUTCMinutes()-t._tzm),f(t).rfc2822=!0}else t._isValid=!1}function Oe(t){if(t._f!==i.ISO_8601)if(t._f!==i.RFC_2822){t._a=[],f(t).empty=!0
var e,n,a,r,o,s=""+t._i,l=s.length,u=0
for(a=U(t._f,t._locale).match(z)||[],e=0;e<a.length;e++)r=a[e],(n=(s.match(dt(r,t))||[])[0])&&((o=s.substr(0,s.indexOf(n))).length>0&&f(t).unusedInput.push(o),s=s.slice(s.indexOf(n)+n.length),u+=n.length),H[r]?(n?f(t).empty=!1:f(t).unusedTokens.push(r),mt(r,n,t)):t._strict&&!n&&f(t).unusedTokens.push(r)
f(t).charsLeftOver=l-u,s.length>0&&f(t).unusedInput.push(s),t._a[yt]<=12&&!0===f(t).bigHour&&t._a[yt]>0&&(f(t).bigHour=void 0),f(t).parsedDateParts=t._a.slice(0),f(t).meridiem=t._meridiem,t._a[yt]=function(t,e,n){var i
return null==n?e:null!=t.meridiemHour?t.meridiemHour(e,n):null!=t.isPM?((i=t.isPM(n))&&e<12&&(e+=12),i||12!==e||(e=0),e):e}(t._locale,t._a[yt],t._meridiem),be(t),pe(t)}else Te(t)
else Se(t)}function Ae(t){var e=t._i,n=t._f
return t._locale=t._locale||me(t._l),null===e||void 0===n&&""===e?m({nullInput:!0}):("string"==typeof e&&(t._i=e=t._locale.preparse(e)),x(e)?new y(pe(e)):(l(e)?t._d=e:a(n)?function(t){var e,n,i,a,r
if(0===t._f.length)return f(t).invalidFormat=!0,void(t._d=new Date(NaN))
for(a=0;a<t._f.length;a++)r=0,e=v({},t),null!=t._useUTC&&(e._useUTC=t._useUTC),e._f=t._f[a],Oe(e),g(e)&&(r+=f(e).charsLeftOver,r+=10*f(e).unusedTokens.length,f(e).score=r,(null==i||r<i)&&(i=r,n=e))
h(t,n||e)}(t):n?Oe(t):function(t){var e=t._i
o(e)?t._d=new Date(i.now()):l(e)?t._d=new Date(e.valueOf()):"string"==typeof e?function(t){var e=Me.exec(t._i)
null===e?(Se(t),!1===t._isValid&&(delete t._isValid,Te(t),!1===t._isValid&&(delete t._isValid,i.createFromInputFallback(t)))):t._d=new Date(+e[1])}(t):a(e)?(t._a=u(e.slice(0),(function(t){return parseInt(t,10)})),be(t)):r(e)?function(t){if(!t._d){var e=R(t._i)
t._a=u([e.year,e.month,e.day||e.date,e.hour,e.minute,e.second,e.millisecond],(function(t){return t&&parseInt(t,10)})),be(t)}}(t):s(e)?t._d=new Date(e):i.createFromInputFallback(t)}(t),g(t)||(t._d=null),t))}function Fe(t,e,n,i,o){var s,l={}
return!0!==n&&!1!==n||(i=n,n=void 0),(r(t)&&function(t){if(Object.getOwnPropertyNames)return 0===Object.getOwnPropertyNames(t).length
var e
for(e in t)if(t.hasOwnProperty(e))return!1
return!0}(t)||a(t)&&0===t.length)&&(t=void 0),l._isAMomentObject=!0,l._useUTC=l._isUTC=o,l._l=n,l._i=t,l._f=e,l._strict=i,(s=new y(pe(Ae(l))))._nextDay&&(s.add(1,"d"),s._nextDay=void 0),s}function Ie(t,e,n,i){return Fe(t,e,n,i,!1)}i.createFromInputFallback=S("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",(function(t){t._d=new Date(t._i+(t._useUTC?" UTC":""))})),i.ISO_8601=function(){},i.RFC_2822=function(){}
var Le=S("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",(function(){var t=Ie.apply(null,arguments)
return this.isValid()&&t.isValid()?t<this?this:t:m()})),Re=S("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",(function(){var t=Ie.apply(null,arguments)
return this.isValid()&&t.isValid()?t>this?this:t:m()}))
function Ne(t,e){var n,i
if(1===e.length&&a(e[0])&&(e=e[0]),!e.length)return Ie()
for(n=e[0],i=1;i<e.length;++i)e[i].isValid()&&!e[i][t](n)||(n=e[i])
return n}var We=["year","quarter","month","week","day","hour","minute","second","millisecond"]
function Ye(t){var e=R(t),n=e.year||0,i=e.quarter||0,a=e.month||0,r=e.week||e.isoWeek||0,o=e.day||0,s=e.hour||0,l=e.minute||0,u=e.second||0,d=e.millisecond||0
this._isValid=function(t){for(var e in t)if(-1===Ct.call(We,e)||null!=t[e]&&isNaN(t[e]))return!1
for(var n=!1,i=0;i<We.length;++i)if(t[We[i]]){if(n)return!1
parseFloat(t[We[i]])!==w(t[We[i]])&&(n=!0)}return!0}(e),this._milliseconds=+d+1e3*u+6e4*l+1e3*s*60*60,this._days=+o+7*r,this._months=+a+3*i+12*n,this._data={},this._locale=me(),this._bubble()}function ze(t){return t instanceof Ye}function Ee(t){return t<0?-1*Math.round(-1*t):Math.round(t)}function Ve(t,e){B(t,0,0,(function(){var t=this.utcOffset(),n="+"
return t<0&&(t=-t,n="-"),n+Y(~~(t/60),2)+e+Y(~~t%60,2)}))}Ve("Z",":"),Ve("ZZ",""),ut("Z",ot),ut("ZZ",ot),ft(["Z","ZZ"],(function(t,e,n){n._useUTC=!0,n._tzm=Be(ot,t)}))
var He=/([\+\-]|\d\d)/gi
function Be(t,e){var n=(e||"").match(t)
if(null===n)return null
var i=((n[n.length-1]||[])+"").match(He)||["-",0,0],a=60*i[1]+w(i[2])
return 0===a?0:"+"===i[0]?a:-a}function je(t,e){var n,a
return e._isUTC?(n=e.clone(),a=(x(t)||l(t)?t.valueOf():Ie(t).valueOf())-n.valueOf(),n._d.setTime(n._d.valueOf()+a),i.updateOffset(n,!1),n):Ie(t).local()}function Ue(t){return 15*-Math.round(t._d.getTimezoneOffset()/15)}function Ge(){return!!this.isValid()&&this._isUTC&&0===this._offset}i.updateOffset=function(){}
var qe=/^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,Ze=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/
function $e(t,e){var n,i,a,r,o,l,u=t,h=null
return ze(t)?u={ms:t._milliseconds,d:t._days,M:t._months}:s(t)?(u={},e?u[e]=t:u.milliseconds=t):(h=qe.exec(t))?(n="-"===h[1]?-1:1,u={y:0,d:w(h[bt])*n,h:w(h[yt])*n,m:w(h[xt])*n,s:w(h[_t])*n,ms:w(Ee(1e3*h[wt]))*n}):(h=Ze.exec(t))?(n="-"===h[1]?-1:1,u={y:Xe(h[2],n),M:Xe(h[3],n),w:Xe(h[4],n),d:Xe(h[5],n),h:Xe(h[6],n),m:Xe(h[7],n),s:Xe(h[8],n)}):null==u?u={}:"object"==typeof u&&("from"in u||"to"in u)&&(r=Ie(u.from),o=Ie(u.to),a=r.isValid()&&o.isValid()?(o=je(o,r),r.isBefore(o)?l=Ke(r,o):((l=Ke(o,r)).milliseconds=-l.milliseconds,l.months=-l.months),l):{milliseconds:0,months:0},(u={}).ms=a.milliseconds,u.M=a.months),i=new Ye(u),ze(t)&&d(t,"_locale")&&(i._locale=t._locale),i}function Xe(t,e){var n=t&&parseFloat(t.replace(",","."))
return(isNaN(n)?0:n)*e}function Ke(t,e){var n={}
return n.months=e.month()-t.month()+12*(e.year()-t.year()),t.clone().add(n.months,"M").isAfter(e)&&--n.months,n.milliseconds=+e-+t.clone().add(n.months,"M"),n}function Je(t,e){return function(n,i){var a
return null===i||isNaN(+i)||(P(e,"moment()."+e+"(period, number) is deprecated. Please use moment()."+e+"(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."),a=n,n=i,i=a),Qe(this,$e(n="string"==typeof n?+n:n,i),t),this}}function Qe(t,e,n,a){var r=e._milliseconds,o=Ee(e._days),s=Ee(e._months)
t.isValid()&&(a=null==a||a,s&&Wt(t,Ot(t,"Month")+s*n),o&&At(t,"Date",Ot(t,"Date")+o*n),r&&t._d.setTime(t._d.valueOf()+r*n),a&&i.updateOffset(t,o||s))}$e.fn=Ye.prototype,$e.invalid=function(){return $e(NaN)}
var tn=Je(1,"add"),en=Je(-1,"subtract")
function nn(t,e){var n=12*(e.year()-t.year())+(e.month()-t.month()),i=t.clone().add(n,"months")
return-(n+(e-i<0?(e-i)/(i-t.clone().add(n-1,"months")):(e-i)/(t.clone().add(n+1,"months")-i)))||0}function an(t){var e
return void 0===t?this._locale._abbr:(null!=(e=me(t))&&(this._locale=e),this)}i.defaultFormat="YYYY-MM-DDTHH:mm:ssZ",i.defaultFormatUtc="YYYY-MM-DDTHH:mm:ss[Z]"
var rn=S("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",(function(t){return void 0===t?this.localeData():this.locale(t)}))
function on(){return this._locale}var sn=1e3,ln=6e4,un=60*ln,dn=3506328*un
function hn(t,e){return(t%e+e)%e}function cn(t,e,n){return t<100&&t>=0?new Date(t+400,e,n)-dn:new Date(t,e,n).valueOf()}function fn(t,e,n){return t<100&&t>=0?Date.UTC(t+400,e,n)-dn:Date.UTC(t,e,n)}function gn(t,e){B(0,[t,t.length],0,e)}function mn(t,e,n,i,a){var r
return null==t?Gt(this,i,a).year:(e>(r=qt(t,i,a))&&(e=r),pn.call(this,t,e,n,i,a))}function pn(t,e,n,i,a){var r=Ut(t,e,n,i,a),o=Bt(r.year,0,r.dayOfYear)
return this.year(o.getUTCFullYear()),this.month(o.getUTCMonth()),this.date(o.getUTCDate()),this}B(0,["gg",2],0,(function(){return this.weekYear()%100})),B(0,["GG",2],0,(function(){return this.isoWeekYear()%100})),gn("gggg","weekYear"),gn("ggggg","weekYear"),gn("GGGG","isoWeekYear"),gn("GGGGG","isoWeekYear"),I("weekYear","gg"),I("isoWeekYear","GG"),W("weekYear",1),W("isoWeekYear",1),ut("G",at),ut("g",at),ut("GG",K,q),ut("gg",K,q),ut("GGGG",et,$),ut("gggg",et,$),ut("GGGGG",nt,X),ut("ggggg",nt,X),gt(["gggg","ggggg","GGGG","GGGGG"],(function(t,e,n,i){e[i.substr(0,2)]=w(t)})),gt(["gg","GG"],(function(t,e,n,a){e[a]=i.parseTwoDigitYear(t)})),B("Q",0,"Qo","quarter"),I("quarter","Q"),W("quarter",7),ut("Q",G),ft("Q",(function(t,e){e[vt]=3*(w(t)-1)})),B("D",["DD",2],"Do","date"),I("date","D"),W("date",9),ut("D",K),ut("DD",K,q),ut("Do",(function(t,e){return t?e._dayOfMonthOrdinalParse||e._ordinalParse:e._dayOfMonthOrdinalParseLenient})),ft(["D","DD"],bt),ft("Do",(function(t,e){e[bt]=w(t.match(K)[0])}))
var vn=Tt("Date",!0)
B("DDD",["DDDD",3],"DDDo","dayOfYear"),I("dayOfYear","DDD"),W("dayOfYear",4),ut("DDD",tt),ut("DDDD",Z),ft(["DDD","DDDD"],(function(t,e,n){n._dayOfYear=w(t)})),B("m",["mm",2],0,"minute"),I("minute","m"),W("minute",14),ut("m",K),ut("mm",K,q),ft(["m","mm"],xt)
var bn=Tt("Minutes",!1)
B("s",["ss",2],0,"second"),I("second","s"),W("second",15),ut("s",K),ut("ss",K,q),ft(["s","ss"],_t)
var yn,xn=Tt("Seconds",!1)
for(B("S",0,0,(function(){return~~(this.millisecond()/100)})),B(0,["SS",2],0,(function(){return~~(this.millisecond()/10)})),B(0,["SSS",3],0,"millisecond"),B(0,["SSSS",4],0,(function(){return 10*this.millisecond()})),B(0,["SSSSS",5],0,(function(){return 100*this.millisecond()})),B(0,["SSSSSS",6],0,(function(){return 1e3*this.millisecond()})),B(0,["SSSSSSS",7],0,(function(){return 1e4*this.millisecond()})),B(0,["SSSSSSSS",8],0,(function(){return 1e5*this.millisecond()})),B(0,["SSSSSSSSS",9],0,(function(){return 1e6*this.millisecond()})),I("millisecond","ms"),W("millisecond",16),ut("S",tt,G),ut("SS",tt,q),ut("SSS",tt,Z),yn="SSSS";yn.length<=9;yn+="S")ut(yn,it)
function _n(t,e){e[wt]=w(1e3*("0."+t))}for(yn="S";yn.length<=9;yn+="S")ft(yn,_n)
var wn=Tt("Milliseconds",!1)
B("z",0,0,"zoneAbbr"),B("zz",0,0,"zoneName")
var kn=y.prototype
function Mn(t){return t}kn.add=tn,kn.calendar=function(t,e){var n=t||Ie(),a=je(n,this).startOf("day"),r=i.calendarFormat(this,a)||"sameElse",o=e&&(T(e[r])?e[r].call(this,n):e[r])
return this.format(o||this.localeData().calendar(r,this,Ie(n)))},kn.clone=function(){return new y(this)},kn.diff=function(t,e,n){var i,a,r
if(!this.isValid())return NaN
if(!(i=je(t,this)).isValid())return NaN
switch(a=6e4*(i.utcOffset()-this.utcOffset()),e=L(e)){case"year":r=nn(this,i)/12
break
case"month":r=nn(this,i)
break
case"quarter":r=nn(this,i)/3
break
case"second":r=(this-i)/1e3
break
case"minute":r=(this-i)/6e4
break
case"hour":r=(this-i)/36e5
break
case"day":r=(this-i-a)/864e5
break
case"week":r=(this-i-a)/6048e5
break
default:r=this-i}return n?r:_(r)},kn.endOf=function(t){var e
if(void 0===(t=L(t))||"millisecond"===t||!this.isValid())return this
var n=this._isUTC?fn:cn
switch(t){case"year":e=n(this.year()+1,0,1)-1
break
case"quarter":e=n(this.year(),this.month()-this.month()%3+3,1)-1
break
case"month":e=n(this.year(),this.month()+1,1)-1
break
case"week":e=n(this.year(),this.month(),this.date()-this.weekday()+7)-1
break
case"isoWeek":e=n(this.year(),this.month(),this.date()-(this.isoWeekday()-1)+7)-1
break
case"day":case"date":e=n(this.year(),this.month(),this.date()+1)-1
break
case"hour":e=this._d.valueOf(),e+=un-hn(e+(this._isUTC?0:this.utcOffset()*ln),un)-1
break
case"minute":e=this._d.valueOf(),e+=ln-hn(e,ln)-1
break
case"second":e=this._d.valueOf(),e+=sn-hn(e,sn)-1}return this._d.setTime(e),i.updateOffset(this,!0),this},kn.format=function(t){t||(t=this.isUtc()?i.defaultFormatUtc:i.defaultFormat)
var e=j(this,t)
return this.localeData().postformat(e)},kn.from=function(t,e){return this.isValid()&&(x(t)&&t.isValid()||Ie(t).isValid())?$e({to:this,from:t}).locale(this.locale()).humanize(!e):this.localeData().invalidDate()},kn.fromNow=function(t){return this.from(Ie(),t)},kn.to=function(t,e){return this.isValid()&&(x(t)&&t.isValid()||Ie(t).isValid())?$e({from:this,to:t}).locale(this.locale()).humanize(!e):this.localeData().invalidDate()},kn.toNow=function(t){return this.to(Ie(),t)},kn.get=function(t){return T(this[t=L(t)])?this[t]():this},kn.invalidAt=function(){return f(this).overflow},kn.isAfter=function(t,e){var n=x(t)?t:Ie(t)
return!(!this.isValid()||!n.isValid())&&("millisecond"===(e=L(e)||"millisecond")?this.valueOf()>n.valueOf():n.valueOf()<this.clone().startOf(e).valueOf())},kn.isBefore=function(t,e){var n=x(t)?t:Ie(t)
return!(!this.isValid()||!n.isValid())&&("millisecond"===(e=L(e)||"millisecond")?this.valueOf()<n.valueOf():this.clone().endOf(e).valueOf()<n.valueOf())},kn.isBetween=function(t,e,n,i){var a=x(t)?t:Ie(t),r=x(e)?e:Ie(e)
return!!(this.isValid()&&a.isValid()&&r.isValid())&&("("===(i=i||"()")[0]?this.isAfter(a,n):!this.isBefore(a,n))&&(")"===i[1]?this.isBefore(r,n):!this.isAfter(r,n))},kn.isSame=function(t,e){var n,i=x(t)?t:Ie(t)
return!(!this.isValid()||!i.isValid())&&("millisecond"===(e=L(e)||"millisecond")?this.valueOf()===i.valueOf():(n=i.valueOf(),this.clone().startOf(e).valueOf()<=n&&n<=this.clone().endOf(e).valueOf()))},kn.isSameOrAfter=function(t,e){return this.isSame(t,e)||this.isAfter(t,e)},kn.isSameOrBefore=function(t,e){return this.isSame(t,e)||this.isBefore(t,e)},kn.isValid=function(){return g(this)},kn.lang=rn,kn.locale=an,kn.localeData=on,kn.max=Re,kn.min=Le,kn.parsingFlags=function(){return h({},f(this))},kn.set=function(t,e){if("object"==typeof t)for(var n=function(t){var e=[]
for(var n in t)e.push({unit:n,priority:N[n]})
return e.sort((function(t,e){return t.priority-e.priority})),e}(t=R(t)),i=0;i<n.length;i++)this[n[i].unit](t[n[i].unit])
else if(T(this[t=L(t)]))return this[t](e)
return this},kn.startOf=function(t){var e
if(void 0===(t=L(t))||"millisecond"===t||!this.isValid())return this
var n=this._isUTC?fn:cn
switch(t){case"year":e=n(this.year(),0,1)
break
case"quarter":e=n(this.year(),this.month()-this.month()%3,1)
break
case"month":e=n(this.year(),this.month(),1)
break
case"week":e=n(this.year(),this.month(),this.date()-this.weekday())
break
case"isoWeek":e=n(this.year(),this.month(),this.date()-(this.isoWeekday()-1))
break
case"day":case"date":e=n(this.year(),this.month(),this.date())
break
case"hour":e=this._d.valueOf(),e-=hn(e+(this._isUTC?0:this.utcOffset()*ln),un)
break
case"minute":e=this._d.valueOf(),e-=hn(e,ln)
break
case"second":e=this._d.valueOf(),e-=hn(e,sn)}return this._d.setTime(e),i.updateOffset(this,!0),this},kn.subtract=en,kn.toArray=function(){var t=this
return[t.year(),t.month(),t.date(),t.hour(),t.minute(),t.second(),t.millisecond()]},kn.toObject=function(){var t=this
return{years:t.year(),months:t.month(),date:t.date(),hours:t.hours(),minutes:t.minutes(),seconds:t.seconds(),milliseconds:t.milliseconds()}},kn.toDate=function(){return new Date(this.valueOf())},kn.toISOString=function(t){if(!this.isValid())return null
var e=!0!==t,n=e?this.clone().utc():this
return n.year()<0||n.year()>9999?j(n,e?"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"):T(Date.prototype.toISOString)?e?this.toDate().toISOString():new Date(this.valueOf()+60*this.utcOffset()*1e3).toISOString().replace("Z",j(n,"Z")):j(n,e?"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYY-MM-DD[T]HH:mm:ss.SSSZ")},kn.inspect=function(){if(!this.isValid())return"moment.invalid(/* "+this._i+" */)"
var t="moment",e=""
this.isLocal()||(t=0===this.utcOffset()?"moment.utc":"moment.parseZone",e="Z")
var n="["+t+'("]',i=0<=this.year()&&this.year()<=9999?"YYYY":"YYYYYY",a=e+'[")]'
return this.format(n+i+"-MM-DD[T]HH:mm:ss.SSS"+a)},kn.toJSON=function(){return this.isValid()?this.toISOString():null},kn.toString=function(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")},kn.unix=function(){return Math.floor(this.valueOf()/1e3)},kn.valueOf=function(){return this._d.valueOf()-6e4*(this._offset||0)},kn.creationData=function(){return{input:this._i,format:this._f,locale:this._locale,isUTC:this._isUTC,strict:this._strict}},kn.year=Pt,kn.isLeapYear=function(){return Dt(this.year())},kn.weekYear=function(t){return mn.call(this,t,this.week(),this.weekday(),this.localeData()._week.dow,this.localeData()._week.doy)},kn.isoWeekYear=function(t){return mn.call(this,t,this.isoWeek(),this.isoWeekday(),1,4)},kn.quarter=kn.quarters=function(t){return null==t?Math.ceil((this.month()+1)/3):this.month(3*(t-1)+this.month()%3)},kn.month=Yt,kn.daysInMonth=function(){return Ft(this.year(),this.month())},kn.week=kn.weeks=function(t){var e=this.localeData().week(this)
return null==t?e:this.add(7*(t-e),"d")},kn.isoWeek=kn.isoWeeks=function(t){var e=Gt(this,1,4).week
return null==t?e:this.add(7*(t-e),"d")},kn.weeksInYear=function(){var t=this.localeData()._week
return qt(this.year(),t.dow,t.doy)},kn.isoWeeksInYear=function(){return qt(this.year(),1,4)},kn.date=vn,kn.day=kn.days=function(t){if(!this.isValid())return null!=t?this:NaN
var e=this._isUTC?this._d.getUTCDay():this._d.getDay()
return null!=t?(t=function(t,e){return"string"!=typeof t?t:isNaN(t)?"number"==typeof(t=e.weekdaysParse(t))?t:null:parseInt(t,10)}(t,this.localeData()),this.add(t-e,"d")):e},kn.weekday=function(t){if(!this.isValid())return null!=t?this:NaN
var e=(this.day()+7-this.localeData()._week.dow)%7
return null==t?e:this.add(t-e,"d")},kn.isoWeekday=function(t){if(!this.isValid())return null!=t?this:NaN
if(null!=t){var e=function(t,e){return"string"==typeof t?e.weekdaysParse(t)%7||7:isNaN(t)?null:t}(t,this.localeData())
return this.day(this.day()%7?e:e-7)}return this.day()||7},kn.dayOfYear=function(t){var e=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/864e5)+1
return null==t?e:this.add(t-e,"d")},kn.hour=kn.hours=se,kn.minute=kn.minutes=bn,kn.second=kn.seconds=xn,kn.millisecond=kn.milliseconds=wn,kn.utcOffset=function(t,e,n){var a,r=this._offset||0
if(!this.isValid())return null!=t?this:NaN
if(null!=t){if("string"==typeof t){if(null===(t=Be(ot,t)))return this}else Math.abs(t)<16&&!n&&(t*=60)
return!this._isUTC&&e&&(a=Ue(this)),this._offset=t,this._isUTC=!0,null!=a&&this.add(a,"m"),r!==t&&(!e||this._changeInProgress?Qe(this,$e(t-r,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,i.updateOffset(this,!0),this._changeInProgress=null)),this}return this._isUTC?r:Ue(this)},kn.utc=function(t){return this.utcOffset(0,t)},kn.local=function(t){return this._isUTC&&(this.utcOffset(0,t),this._isUTC=!1,t&&this.subtract(Ue(this),"m")),this},kn.parseZone=function(){if(null!=this._tzm)this.utcOffset(this._tzm,!1,!0)
else if("string"==typeof this._i){var t=Be(rt,this._i)
null!=t?this.utcOffset(t):this.utcOffset(0,!0)}return this},kn.hasAlignedHourOffset=function(t){return!!this.isValid()&&(t=t?Ie(t).utcOffset():0,(this.utcOffset()-t)%60==0)},kn.isDST=function(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()},kn.isLocal=function(){return!!this.isValid()&&!this._isUTC},kn.isUtcOffset=function(){return!!this.isValid()&&this._isUTC},kn.isUtc=Ge,kn.isUTC=Ge,kn.zoneAbbr=function(){return this._isUTC?"UTC":""},kn.zoneName=function(){return this._isUTC?"Coordinated Universal Time":""},kn.dates=S("dates accessor is deprecated. Use date instead.",vn),kn.months=S("months accessor is deprecated. Use month instead",Yt),kn.years=S("years accessor is deprecated. Use year instead",Pt),kn.zone=S("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",(function(t,e){return null!=t?("string"!=typeof t&&(t=-t),this.utcOffset(t,e),this):-this.utcOffset()})),kn.isDSTShifted=S("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",(function(){if(!o(this._isDSTShifted))return this._isDSTShifted
var t={}
if(v(t,this),(t=Ae(t))._a){var e=t._isUTC?c(t._a):Ie(t._a)
this._isDSTShifted=this.isValid()&&k(t._a,e.toArray())>0}else this._isDSTShifted=!1
return this._isDSTShifted}))
var Sn=A.prototype
function Dn(t,e,n,i){var a=me(),r=c().set(i,e)
return a[n](r,t)}function Cn(t,e,n){if(s(t)&&(e=t,t=void 0),t=t||"",null!=e)return Dn(t,e,n,"month")
var i,a=[]
for(i=0;i<12;i++)a[i]=Dn(t,i,n,"month")
return a}function Pn(t,e,n,i){"boolean"==typeof t?(s(e)&&(n=e,e=void 0),e=e||""):(n=e=t,t=!1,s(e)&&(n=e,e=void 0),e=e||"")
var a,r=me(),o=t?r._week.dow:0
if(null!=n)return Dn(e,(n+o)%7,i,"day")
var l=[]
for(a=0;a<7;a++)l[a]=Dn(e,(a+o)%7,i,"day")
return l}Sn.calendar=function(t,e,n){var i=this._calendar[t]||this._calendar.sameElse
return T(i)?i.call(e,n):i},Sn.longDateFormat=function(t){var e=this._longDateFormat[t],n=this._longDateFormat[t.toUpperCase()]
return e||!n?e:(this._longDateFormat[t]=n.replace(/MMMM|MM|DD|dddd/g,(function(t){return t.slice(1)})),this._longDateFormat[t])},Sn.invalidDate=function(){return this._invalidDate},Sn.ordinal=function(t){return this._ordinal.replace("%d",t)},Sn.preparse=Mn,Sn.postformat=Mn,Sn.relativeTime=function(t,e,n,i){var a=this._relativeTime[n]
return T(a)?a(t,e,n,i):a.replace(/%d/i,t)},Sn.pastFuture=function(t,e){var n=this._relativeTime[t>0?"future":"past"]
return T(n)?n(e):n.replace(/%s/i,e)},Sn.set=function(t){var e,n
for(n in t)T(e=t[n])?this[n]=e:this["_"+n]=e
this._config=t,this._dayOfMonthOrdinalParseLenient=new RegExp((this._dayOfMonthOrdinalParse.source||this._ordinalParse.source)+"|"+/\d{1,2}/.source)},Sn.months=function(t,e){return t?a(this._months)?this._months[t.month()]:this._months[(this._months.isFormat||It).test(e)?"format":"standalone"][t.month()]:a(this._months)?this._months:this._months.standalone},Sn.monthsShort=function(t,e){return t?a(this._monthsShort)?this._monthsShort[t.month()]:this._monthsShort[It.test(e)?"format":"standalone"][t.month()]:a(this._monthsShort)?this._monthsShort:this._monthsShort.standalone},Sn.monthsParse=function(t,e,n){var i,a,r
if(this._monthsParseExact)return Nt.call(this,t,e,n)
for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),i=0;i<12;i++){if(a=c([2e3,i]),n&&!this._longMonthsParse[i]&&(this._longMonthsParse[i]=new RegExp("^"+this.months(a,"").replace(".","")+"$","i"),this._shortMonthsParse[i]=new RegExp("^"+this.monthsShort(a,"").replace(".","")+"$","i")),n||this._monthsParse[i]||(r="^"+this.months(a,"")+"|^"+this.monthsShort(a,""),this._monthsParse[i]=new RegExp(r.replace(".",""),"i")),n&&"MMMM"===e&&this._longMonthsParse[i].test(t))return i
if(n&&"MMM"===e&&this._shortMonthsParse[i].test(t))return i
if(!n&&this._monthsParse[i].test(t))return i}},Sn.monthsRegex=function(t){return this._monthsParseExact?(d(this,"_monthsRegex")||Vt.call(this),t?this._monthsStrictRegex:this._monthsRegex):(d(this,"_monthsRegex")||(this._monthsRegex=Et),this._monthsStrictRegex&&t?this._monthsStrictRegex:this._monthsRegex)},Sn.monthsShortRegex=function(t){return this._monthsParseExact?(d(this,"_monthsRegex")||Vt.call(this),t?this._monthsShortStrictRegex:this._monthsShortRegex):(d(this,"_monthsShortRegex")||(this._monthsShortRegex=zt),this._monthsShortStrictRegex&&t?this._monthsShortStrictRegex:this._monthsShortRegex)},Sn.week=function(t){return Gt(t,this._week.dow,this._week.doy).week},Sn.firstDayOfYear=function(){return this._week.doy},Sn.firstDayOfWeek=function(){return this._week.dow},Sn.weekdays=function(t,e){var n=a(this._weekdays)?this._weekdays:this._weekdays[t&&!0!==t&&this._weekdays.isFormat.test(e)?"format":"standalone"]
return!0===t?Zt(n,this._week.dow):t?n[t.day()]:n},Sn.weekdaysMin=function(t){return!0===t?Zt(this._weekdaysMin,this._week.dow):t?this._weekdaysMin[t.day()]:this._weekdaysMin},Sn.weekdaysShort=function(t){return!0===t?Zt(this._weekdaysShort,this._week.dow):t?this._weekdaysShort[t.day()]:this._weekdaysShort},Sn.weekdaysParse=function(t,e,n){var i,a,r
if(this._weekdaysParseExact)return Jt.call(this,t,e,n)
for(this._weekdaysParse||(this._weekdaysParse=[],this._minWeekdaysParse=[],this._shortWeekdaysParse=[],this._fullWeekdaysParse=[]),i=0;i<7;i++){if(a=c([2e3,1]).day(i),n&&!this._fullWeekdaysParse[i]&&(this._fullWeekdaysParse[i]=new RegExp("^"+this.weekdays(a,"").replace(".","\\.?")+"$","i"),this._shortWeekdaysParse[i]=new RegExp("^"+this.weekdaysShort(a,"").replace(".","\\.?")+"$","i"),this._minWeekdaysParse[i]=new RegExp("^"+this.weekdaysMin(a,"").replace(".","\\.?")+"$","i")),this._weekdaysParse[i]||(r="^"+this.weekdays(a,"")+"|^"+this.weekdaysShort(a,"")+"|^"+this.weekdaysMin(a,""),this._weekdaysParse[i]=new RegExp(r.replace(".",""),"i")),n&&"dddd"===e&&this._fullWeekdaysParse[i].test(t))return i
if(n&&"ddd"===e&&this._shortWeekdaysParse[i].test(t))return i
if(n&&"dd"===e&&this._minWeekdaysParse[i].test(t))return i
if(!n&&this._weekdaysParse[i].test(t))return i}},Sn.weekdaysRegex=function(t){return this._weekdaysParseExact?(d(this,"_weekdaysRegex")||ne.call(this),t?this._weekdaysStrictRegex:this._weekdaysRegex):(d(this,"_weekdaysRegex")||(this._weekdaysRegex=Qt),this._weekdaysStrictRegex&&t?this._weekdaysStrictRegex:this._weekdaysRegex)},Sn.weekdaysShortRegex=function(t){return this._weekdaysParseExact?(d(this,"_weekdaysRegex")||ne.call(this),t?this._weekdaysShortStrictRegex:this._weekdaysShortRegex):(d(this,"_weekdaysShortRegex")||(this._weekdaysShortRegex=te),this._weekdaysShortStrictRegex&&t?this._weekdaysShortStrictRegex:this._weekdaysShortRegex)},Sn.weekdaysMinRegex=function(t){return this._weekdaysParseExact?(d(this,"_weekdaysRegex")||ne.call(this),t?this._weekdaysMinStrictRegex:this._weekdaysMinRegex):(d(this,"_weekdaysMinRegex")||(this._weekdaysMinRegex=ee),this._weekdaysMinStrictRegex&&t?this._weekdaysMinStrictRegex:this._weekdaysMinRegex)},Sn.isPM=function(t){return"p"===(t+"").toLowerCase().charAt(0)},Sn.meridiem=function(t,e,n){return t>11?n?"pm":"PM":n?"am":"AM"},fe("en",{dayOfMonthOrdinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(t){var e=t%10
return t+(1===w(t%100/10)?"th":1===e?"st":2===e?"nd":3===e?"rd":"th")}}),i.lang=S("moment.lang is deprecated. Use moment.locale instead.",fe),i.langData=S("moment.langData is deprecated. Use moment.localeData instead.",me)
var Tn=Math.abs
function On(t,e,n,i){var a=$e(e,n)
return t._milliseconds+=i*a._milliseconds,t._days+=i*a._days,t._months+=i*a._months,t._bubble()}function An(t){return t<0?Math.floor(t):Math.ceil(t)}function Fn(t){return 4800*t/146097}function In(t){return 146097*t/4800}function Ln(t){return function(){return this.as(t)}}var Rn=Ln("ms"),Nn=Ln("s"),Wn=Ln("m"),Yn=Ln("h"),zn=Ln("d"),En=Ln("w"),Vn=Ln("M"),Hn=Ln("Q"),Bn=Ln("y")
function jn(t){return function(){return this.isValid()?this._data[t]:NaN}}var Un=jn("milliseconds"),Gn=jn("seconds"),qn=jn("minutes"),Zn=jn("hours"),$n=jn("days"),Xn=jn("months"),Kn=jn("years"),Jn=Math.round,Qn={ss:44,s:45,m:45,h:22,d:26,M:11}
function ti(t,e,n,i,a){return a.relativeTime(e||1,!!n,t,i)}var ei=Math.abs
function ni(t){return(t>0)-(t<0)||+t}function ii(){if(!this.isValid())return this.localeData().invalidDate()
var t,e,n=ei(this._milliseconds)/1e3,i=ei(this._days),a=ei(this._months)
t=_(n/60),e=_(t/60),n%=60,t%=60
var r=_(a/12),o=a%=12,s=i,l=e,u=t,d=n?n.toFixed(3).replace(/\.?0+$/,""):"",h=this.asSeconds()
if(!h)return"P0D"
var c=h<0?"-":"",f=ni(this._months)!==ni(h)?"-":"",g=ni(this._days)!==ni(h)?"-":"",m=ni(this._milliseconds)!==ni(h)?"-":""
return c+"P"+(r?f+r+"Y":"")+(o?f+o+"M":"")+(s?g+s+"D":"")+(l||u||d?"T":"")+(l?m+l+"H":"")+(u?m+u+"M":"")+(d?m+d+"S":"")}var ai=Ye.prototype
return ai.isValid=function(){return this._isValid},ai.abs=function(){var t=this._data
return this._milliseconds=Tn(this._milliseconds),this._days=Tn(this._days),this._months=Tn(this._months),t.milliseconds=Tn(t.milliseconds),t.seconds=Tn(t.seconds),t.minutes=Tn(t.minutes),t.hours=Tn(t.hours),t.months=Tn(t.months),t.years=Tn(t.years),this},ai.add=function(t,e){return On(this,t,e,1)},ai.subtract=function(t,e){return On(this,t,e,-1)},ai.as=function(t){if(!this.isValid())return NaN
var e,n,i=this._milliseconds
if("month"===(t=L(t))||"quarter"===t||"year"===t)switch(e=this._days+i/864e5,n=this._months+Fn(e),t){case"month":return n
case"quarter":return n/3
case"year":return n/12}else switch(e=this._days+Math.round(In(this._months)),t){case"week":return e/7+i/6048e5
case"day":return e+i/864e5
case"hour":return 24*e+i/36e5
case"minute":return 1440*e+i/6e4
case"second":return 86400*e+i/1e3
case"millisecond":return Math.floor(864e5*e)+i
default:throw new Error("Unknown unit "+t)}},ai.asMilliseconds=Rn,ai.asSeconds=Nn,ai.asMinutes=Wn,ai.asHours=Yn,ai.asDays=zn,ai.asWeeks=En,ai.asMonths=Vn,ai.asQuarters=Hn,ai.asYears=Bn,ai.valueOf=function(){return this.isValid()?this._milliseconds+864e5*this._days+this._months%12*2592e6+31536e6*w(this._months/12):NaN},ai._bubble=function(){var t,e,n,i,a,r=this._milliseconds,o=this._days,s=this._months,l=this._data
return r>=0&&o>=0&&s>=0||r<=0&&o<=0&&s<=0||(r+=864e5*An(In(s)+o),o=0,s=0),l.milliseconds=r%1e3,t=_(r/1e3),l.seconds=t%60,e=_(t/60),l.minutes=e%60,n=_(e/60),l.hours=n%24,o+=_(n/24),s+=a=_(Fn(o)),o-=An(In(a)),i=_(s/12),s%=12,l.days=o,l.months=s,l.years=i,this},ai.clone=function(){return $e(this)},ai.get=function(t){return t=L(t),this.isValid()?this[t+"s"]():NaN},ai.milliseconds=Un,ai.seconds=Gn,ai.minutes=qn,ai.hours=Zn,ai.days=$n,ai.weeks=function(){return _(this.days()/7)},ai.months=Xn,ai.years=Kn,ai.humanize=function(t){if(!this.isValid())return this.localeData().invalidDate()
var e=this.localeData(),n=function(t,e,n){var i=$e(t).abs(),a=Jn(i.as("s")),r=Jn(i.as("m")),o=Jn(i.as("h")),s=Jn(i.as("d")),l=Jn(i.as("M")),u=Jn(i.as("y")),d=a<=Qn.ss&&["s",a]||a<Qn.s&&["ss",a]||r<=1&&["m"]||r<Qn.m&&["mm",r]||o<=1&&["h"]||o<Qn.h&&["hh",o]||s<=1&&["d"]||s<Qn.d&&["dd",s]||l<=1&&["M"]||l<Qn.M&&["MM",l]||u<=1&&["y"]||["yy",u]
return d[2]=e,d[3]=+t>0,d[4]=n,ti.apply(null,d)}(this,!t,e)
return t&&(n=e.pastFuture(+this,n)),e.postformat(n)},ai.toISOString=ii,ai.toString=ii,ai.toJSON=ii,ai.locale=an,ai.localeData=on,ai.toIsoString=S("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",ii),ai.lang=rn,B("X",0,0,"unix"),B("x",0,0,"valueOf"),ut("x",at),ut("X",/[+-]?\d+(\.\d{1,3})?/),ft("X",(function(t,e,n){n._d=new Date(1e3*parseFloat(t,10))})),ft("x",(function(t,e,n){n._d=new Date(w(t))})),i.version="2.24.0",e=Ie,i.fn=kn,i.min=function(){return Ne("isBefore",[].slice.call(arguments,0))},i.max=function(){return Ne("isAfter",[].slice.call(arguments,0))},i.now=function(){return Date.now?Date.now():+new Date},i.utc=c,i.unix=function(t){return Ie(1e3*t)},i.months=function(t,e){return Cn(t,e,"months")},i.isDate=l,i.locale=fe,i.invalid=m,i.duration=$e,i.isMoment=x,i.weekdays=function(t,e,n){return Pn(t,e,n,"weekdays")},i.parseZone=function(){return Ie.apply(null,arguments).parseZone()},i.localeData=me,i.isDuration=ze,i.monthsShort=function(t,e){return Cn(t,e,"monthsShort")},i.weekdaysMin=function(t,e,n){return Pn(t,e,n,"weekdaysMin")},i.defineLocale=ge,i.updateLocale=function(t,e){if(null!=e){var n,i,a=le
null!=(i=ce(t))&&(a=i._config),(n=new A(e=O(a,e))).parentLocale=ue[t],ue[t]=n,fe(t)}else null!=ue[t]&&(null!=ue[t].parentLocale?ue[t]=ue[t].parentLocale:null!=ue[t]&&delete ue[t])
return ue[t]},i.locales=function(){return D(ue)},i.weekdaysShort=function(t,e,n){return Pn(t,e,n,"weekdaysShort")},i.normalizeUnits=L,i.relativeTimeRounding=function(t){return void 0===t?Jn:"function"==typeof t&&(Jn=t,!0)},i.relativeTimeThreshold=function(t,e){return void 0!==Qn[t]&&(void 0===e?Qn[t]:(Qn[t]=e,"s"===t&&(Qn.ss=e-1),!0))},i.calendarFormat=function(t,e){var n=t.diff(e,"days",!0)
return n<-6?"sameElse":n<-1?"lastWeek":n<0?"lastDay":n<1?"sameDay":n<2?"nextDay":n<7?"nextWeek":"sameElse"},i.prototype=kn,i.HTML5_FMT={DATETIME_LOCAL:"YYYY-MM-DDTHH:mm",DATETIME_LOCAL_SECONDS:"YYYY-MM-DDTHH:mm:ss",DATETIME_LOCAL_MS:"YYYY-MM-DDTHH:mm:ss.SSS",DATE:"YYYY-MM-DD",TIME:"HH:mm",TIME_SECONDS:"HH:mm:ss",TIME_MS:"HH:mm:ss.SSS",WEEK:"GGGG-[W]WW",MONTH:"YYYY-MM"},i}()})),ei={datetime:"MMM D, YYYY, h:mm:ss a",millisecond:"h:mm:ss.SSS a",second:"h:mm:ss a",minute:"h:mm a",hour:"hA",day:"MMM D",week:"ll",month:"MMM YYYY",quarter:"[Q]Q - YYYY",year:"YYYY"}
qe._date.override("function"==typeof ti?{_id:"moment",formats:function(){return ei},parse:function(t,e){return"string"==typeof t&&"string"==typeof e?t=ti(t,e):t instanceof ti||(t=ti(t)),t.isValid()?t.valueOf():null},format:function(t,e){return ti(t).format(e)},add:function(t,e,n){return ti(t).add(e,n).valueOf()},diff:function(t,e,n){return ti(t).diff(ti(e),n)},startOf:function(t,e,n){return t=ti(t),"isoWeek"===e?t.isoWeekday(n).valueOf():t.startOf(e).valueOf()},endOf:function(t,e){return ti(t).endOf(e).valueOf()},_create:function(t){return ti(t)}}:{}),N._set("global",{plugins:{filler:{propagate:!0}}})
var ni={dataset:function(t){var e=t.fill,n=t.chart,i=n.getDatasetMeta(e),a=i&&n.isDatasetVisible(e)&&i.dataset._children||[],r=a.length||0
return r?function(t,e){return e<r&&a[e]._view||null}:null},boundary:function(t){var e=t.boundary,n=e?e.x:null,i=e?e.y:null
return V.isArray(e)?function(t,n){return e[n]}:function(t){return{x:null===n?t.x:n,y:null===i?t.y:i}}}}
function ii(t,e,n){var i,a=t._model||{},r=a.fill
if(void 0===r&&(r=!!a.backgroundColor),!1===r||null===r)return!1
if(!0===r)return"origin"
if(i=parseFloat(r,10),isFinite(i)&&Math.floor(i)===i)return"-"!==r[0]&&"+"!==r[0]||(i=e+i),!(i===e||i<0||i>=n)&&i
switch(r){case"bottom":return"start"
case"top":return"end"
case"zero":return"origin"
case"origin":case"start":case"end":return r
default:return!1}}function ai(t){return(t.el._scale||{}).getPointPositionForValue?function(t){var e,n,i,a,r,o=t.el._scale,s=o.options,l=o.chart.data.labels.length,u=t.fill,d=[]
if(!l)return null
for(e=s.ticks.reverse?o.max:o.min,n=s.ticks.reverse?o.min:o.max,i=o.getPointPositionForValue(0,e),a=0;a<l;++a)r="start"===u||"end"===u?o.getPointPositionForValue(a,"start"===u?e:n):o.getBasePosition(a),s.gridLines.circular&&(r.cx=i.x,r.cy=i.y,r.angle=o.getIndexAngle(a)-Math.PI/2),d.push(r)
return d}(t):function(t){var e,n=t.el._model||{},i=t.el._scale||{},a=t.fill,r=null
if(isFinite(a))return null
if("start"===a?r=void 0===n.scaleBottom?i.bottom:n.scaleBottom:"end"===a?r=void 0===n.scaleTop?i.top:n.scaleTop:void 0!==n.scaleZero?r=n.scaleZero:i.getBasePixel&&(r=i.getBasePixel()),null!=r){if(void 0!==r.x&&void 0!==r.y)return r
if(V.isFinite(r))return{x:(e=i.isHorizontal())?r:null,y:e?null:r}}return null}(t)}function ri(t,e,n){var i,a=t[e].fill,r=[e]
if(!n)return a
for(;!1!==a&&-1===r.indexOf(a);){if(!isFinite(a))return a
if(!(i=t[a]))return!1
if(i.visible)return a
r.push(a),a=i.fill}return!1}function oi(t){var e=t.fill,n="dataset"
return!1===e?null:(isFinite(e)||(n="boundary"),ni[n](t))}function si(t){return t&&!t.skip}function li(t,e,n,i,a){var r,o,s,l
if(i&&a){for(t.moveTo(e[0].x,e[0].y),r=1;r<i;++r)V.canvas.lineTo(t,e[r-1],e[r])
if(void 0===n[0].angle)for(t.lineTo(n[a-1].x,n[a-1].y),r=a-1;r>0;--r)V.canvas.lineTo(t,n[r],n[r-1],!0)
else for(o=n[0].cx,s=n[0].cy,l=Math.sqrt(Math.pow(n[0].x-o,2)+Math.pow(n[0].y-s,2)),r=a-1;r>0;--r)t.arc(o,s,l,n[r].angle,n[r-1].angle,!0)}}function ui(t,e,n,i,a,r){var o,s,l,u,d,h,c,f,g=e.length,m=i.spanGaps,p=[],v=[],b=0,y=0
for(t.beginPath(),o=0,s=g;o<s;++o)d=n(u=e[l=o%g]._view,l,i),h=si(u),c=si(d),r&&void 0===f&&h&&(s=g+(f=o+1)),h&&c?(b=p.push(u),y=v.push(d)):b&&y&&(m?(h&&p.push(u),c&&v.push(d)):(li(t,p,v,b,y),b=y=0,p=[],v=[]))
li(t,p,v,b,y),t.closePath(),t.fillStyle=a,t.fill()}var di={id:"filler",afterDatasetsUpdate:function(t,e){var n,i,a,r,o=(t.data.datasets||[]).length,s=e.propagate,l=[]
for(i=0;i<o;++i)r=null,(a=(n=t.getDatasetMeta(i)).dataset)&&a._model&&a instanceof bt.Line&&(r={visible:t.isDatasetVisible(i),fill:ii(a,i,o),chart:t,el:a}),n.$filler=r,l.push(r)
for(i=0;i<o;++i)(r=l[i])&&(r.fill=ri(l,i,s),r.boundary=ai(r),r.mapper=oi(r))},beforeDatasetsDraw:function(t){var e,n,i,a,r,o,s,l=t._getSortedVisibleDatasetMetas(),u=t.ctx
for(n=l.length-1;n>=0;--n)(e=l[n].$filler)&&e.visible&&(a=(i=e.el)._view,r=i._children||[],o=e.mapper,s=a.backgroundColor||N.global.defaultColor,o&&s&&r.length&&(V.canvas.clipArea(u,t.chartArea),ui(u,r,o,a,s,i._loop),V.canvas.unclipArea(u)))}},hi=V.rtl.getRtlAdapter,ci=V.noop,fi=V.valueOrDefault
function gi(t,e){return t.usePointStyle&&t.boxWidth>e?e:t.boxWidth}N._set("global",{legend:{display:!0,position:"top",align:"center",fullWidth:!0,reverse:!1,weight:1e3,onClick:function(t,e){var n=e.datasetIndex,i=this.chart,a=i.getDatasetMeta(n)
a.hidden=null===a.hidden?!i.data.datasets[n].hidden:null,i.update()},onHover:null,onLeave:null,labels:{boxWidth:40,padding:10,generateLabels:function(t){var e=t.data.datasets,n=t.options.legend||{},i=n.labels&&n.labels.usePointStyle
return t._getSortedDatasetMetas().map((function(n){var a=n.controller.getStyle(i?0:void 0)
return{text:e[n.index].label,fillStyle:a.backgroundColor,hidden:!t.isDatasetVisible(n.index),lineCap:a.borderCapStyle,lineDash:a.borderDash,lineDashOffset:a.borderDashOffset,lineJoin:a.borderJoinStyle,lineWidth:a.borderWidth,strokeStyle:a.borderColor,pointStyle:a.pointStyle,rotation:a.rotation,datasetIndex:n.index}}),this)}}},legendCallback:function(t){var e,n,i,a=document.createElement("ul"),r=t.data.datasets
for(a.setAttribute("class",t.id+"-legend"),e=0,n=r.length;e<n;e++)(i=a.appendChild(document.createElement("li"))).appendChild(document.createElement("span")).style.backgroundColor=r[e].backgroundColor,r[e].label&&i.appendChild(document.createTextNode(r[e].label))
return a.outerHTML}})
var mi=q.extend({initialize:function(t){V.extend(this,t),this.legendHitBoxes=[],this._hoveredItem=null,this.doughnutMode=!1},beforeUpdate:ci,update:function(t,e,n){var i=this
return i.beforeUpdate(),i.maxWidth=t,i.maxHeight=e,i.margins=n,i.beforeSetDimensions(),i.setDimensions(),i.afterSetDimensions(),i.beforeBuildLabels(),i.buildLabels(),i.afterBuildLabels(),i.beforeFit(),i.fit(),i.afterFit(),i.afterUpdate(),i.minSize},afterUpdate:ci,beforeSetDimensions:ci,setDimensions:function(){var t=this
t.isHorizontal()?(t.width=t.maxWidth,t.left=0,t.right=t.width):(t.height=t.maxHeight,t.top=0,t.bottom=t.height),t.paddingLeft=0,t.paddingTop=0,t.paddingRight=0,t.paddingBottom=0,t.minSize={width:0,height:0}},afterSetDimensions:ci,beforeBuildLabels:ci,buildLabels:function(){var t=this,e=t.options.labels||{},n=V.callback(e.generateLabels,[t.chart],t)||[]
e.filter&&(n=n.filter((function(n){return e.filter(n,t.chart.data)}))),t.options.reverse&&n.reverse(),t.legendItems=n},afterBuildLabels:ci,beforeFit:ci,fit:function(){var t=this,e=t.options,n=e.labels,i=e.display,a=t.ctx,r=V.options._parseFont(n),o=r.size,s=t.legendHitBoxes=[],l=t.minSize,u=t.isHorizontal()
if(u?(l.width=t.maxWidth,l.height=i?10:0):(l.width=i?10:0,l.height=t.maxHeight),i){if(a.font=r.string,u){var d=t.lineWidths=[0],h=0
a.textAlign="left",a.textBaseline="middle",V.each(t.legendItems,(function(t,e){var i=gi(n,o)+o/2+a.measureText(t.text).width;(0===e||d[d.length-1]+i+2*n.padding>l.width)&&(h+=o+n.padding,d[d.length-(e>0?0:1)]=0),s[e]={left:0,top:0,width:i,height:o},d[d.length-1]+=i+n.padding})),l.height+=h}else{var c=n.padding,f=t.columnWidths=[],g=t.columnHeights=[],m=n.padding,p=0,v=0
V.each(t.legendItems,(function(t,e){var i=gi(n,o)+o/2+a.measureText(t.text).width
e>0&&v+o+2*c>l.height&&(m+=p+n.padding,f.push(p),g.push(v),p=0,v=0),p=Math.max(p,i),v+=o+c,s[e]={left:0,top:0,width:i,height:o}})),m+=p,f.push(p),g.push(v),l.width+=m}t.width=l.width,t.height=l.height}else t.width=l.width=t.height=l.height=0},afterFit:ci,isHorizontal:function(){return"top"===this.options.position||"bottom"===this.options.position},draw:function(){var t=this,e=t.options,n=e.labels,i=N.global,a=i.defaultColor,r=i.elements.line,o=t.height,s=t.columnHeights,l=t.width,u=t.lineWidths
if(e.display){var d,h=hi(e.rtl,t.left,t.minSize.width),c=t.ctx,f=fi(n.fontColor,i.defaultFontColor),g=V.options._parseFont(n),m=g.size
c.textAlign=h.textAlign("left"),c.textBaseline="middle",c.lineWidth=.5,c.strokeStyle=f,c.fillStyle=f,c.font=g.string
var p=gi(n,m),v=t.legendHitBoxes,b=function(t,i){switch(e.align){case"start":return n.padding
case"end":return t-i
default:return(t-i+n.padding)/2}},y=t.isHorizontal()
d=y?{x:t.left+b(l,u[0]),y:t.top+n.padding,line:0}:{x:t.left+n.padding,y:t.top+b(o,s[0]),line:0},V.rtl.overrideTextDirection(t.ctx,e.textDirection)
var x=m+n.padding
V.each(t.legendItems,(function(e,i){var f=c.measureText(e.text).width,g=p+m/2+f,_=d.x,w=d.y
h.setWidth(t.minSize.width),y?i>0&&_+g+n.padding>t.left+t.minSize.width&&(w=d.y+=x,d.line++,_=d.x=t.left+b(l,u[d.line])):i>0&&w+x>t.top+t.minSize.height&&(_=d.x=_+t.columnWidths[d.line]+n.padding,d.line++,w=d.y=t.top+b(o,s[d.line]))
var k=h.x(_)
!function(t,e,i){if(!(isNaN(p)||p<=0)){c.save()
var o=fi(i.lineWidth,r.borderWidth)
if(c.fillStyle=fi(i.fillStyle,a),c.lineCap=fi(i.lineCap,r.borderCapStyle),c.lineDashOffset=fi(i.lineDashOffset,r.borderDashOffset),c.lineJoin=fi(i.lineJoin,r.borderJoinStyle),c.lineWidth=o,c.strokeStyle=fi(i.strokeStyle,a),c.setLineDash&&c.setLineDash(fi(i.lineDash,r.borderDash)),n&&n.usePointStyle){var s=p*Math.SQRT2/2,l=h.xPlus(t,p/2),u=e+m/2
V.canvas.drawPoint(c,i.pointStyle,s,l,u,i.rotation)}else c.fillRect(h.leftForLtr(t,p),e,p,m),0!==o&&c.strokeRect(h.leftForLtr(t,p),e,p,m)
c.restore()}}(k,w,e),v[i].left=h.leftForLtr(k,v[i].width),v[i].top=w,function(t,e,n,i){var a=m/2,r=h.xPlus(t,p+a),o=e+a
c.fillText(n.text,r,o),n.hidden&&(c.beginPath(),c.lineWidth=2,c.moveTo(r,o),c.lineTo(h.xPlus(r,i),o),c.stroke())}(k,w,e,f),y?d.x+=g+n.padding:d.y+=x})),V.rtl.restoreTextDirection(t.ctx,e.textDirection)}},_getLegendItemAt:function(t,e){var n,i,a,r=this
if(t>=r.left&&t<=r.right&&e>=r.top&&e<=r.bottom)for(a=r.legendHitBoxes,n=0;n<a.length;++n)if(t>=(i=a[n]).left&&t<=i.left+i.width&&e>=i.top&&e<=i.top+i.height)return r.legendItems[n]
return null},handleEvent:function(t){var e,n=this,i=n.options,a="mouseup"===t.type?"click":t.type
if("mousemove"===a){if(!i.onHover&&!i.onLeave)return}else{if("click"!==a)return
if(!i.onClick)return}e=n._getLegendItemAt(t.x,t.y),"click"===a?e&&i.onClick&&i.onClick.call(n,t.native,e):(i.onLeave&&e!==n._hoveredItem&&(n._hoveredItem&&i.onLeave.call(n,t.native,n._hoveredItem),n._hoveredItem=e),i.onHover&&e&&i.onHover.call(n,t.native,e))}})
function pi(t,e){var n=new mi({ctx:t.ctx,options:e,chart:t})
le.configure(t,n,e),le.addBox(t,n),t.legend=n}var vi={id:"legend",_element:mi,beforeInit:function(t){var e=t.options.legend
e&&pi(t,e)},beforeUpdate:function(t){var e=t.options.legend,n=t.legend
e?(V.mergeIf(e,N.global.legend),n?(le.configure(t,n,e),n.options=e):pi(t,e)):n&&(le.removeBox(t,n),delete t.legend)},afterEvent:function(t,e){var n=t.legend
n&&n.handleEvent(e)}},bi=V.noop
N._set("global",{title:{display:!1,fontStyle:"bold",fullWidth:!0,padding:10,position:"top",text:"",weight:2e3}})
var yi=q.extend({initialize:function(t){V.extend(this,t),this.legendHitBoxes=[]},beforeUpdate:bi,update:function(t,e,n){var i=this
return i.beforeUpdate(),i.maxWidth=t,i.maxHeight=e,i.margins=n,i.beforeSetDimensions(),i.setDimensions(),i.afterSetDimensions(),i.beforeBuildLabels(),i.buildLabels(),i.afterBuildLabels(),i.beforeFit(),i.fit(),i.afterFit(),i.afterUpdate(),i.minSize},afterUpdate:bi,beforeSetDimensions:bi,setDimensions:function(){var t=this
t.isHorizontal()?(t.width=t.maxWidth,t.left=0,t.right=t.width):(t.height=t.maxHeight,t.top=0,t.bottom=t.height),t.paddingLeft=0,t.paddingTop=0,t.paddingRight=0,t.paddingBottom=0,t.minSize={width:0,height:0}},afterSetDimensions:bi,beforeBuildLabels:bi,buildLabels:bi,afterBuildLabels:bi,beforeFit:bi,fit:function(){var t,e=this,n=e.options,i=e.minSize={},a=e.isHorizontal()
n.display?(t=(V.isArray(n.text)?n.text.length:1)*V.options._parseFont(n).lineHeight+2*n.padding,e.width=i.width=a?e.maxWidth:t,e.height=i.height=a?t:e.maxHeight):e.width=i.width=e.height=i.height=0},afterFit:bi,isHorizontal:function(){var t=this.options.position
return"top"===t||"bottom"===t},draw:function(){var t=this,e=t.ctx,n=t.options
if(n.display){var i,a,r,o=V.options._parseFont(n),s=o.lineHeight,l=s/2+n.padding,u=0,d=t.top,h=t.left,c=t.bottom,f=t.right
e.fillStyle=V.valueOrDefault(n.fontColor,N.global.defaultFontColor),e.font=o.string,t.isHorizontal()?(a=h+(f-h)/2,r=d+l,i=f-h):(a="left"===n.position?h+l:f-l,r=d+(c-d)/2,i=c-d,u=Math.PI*("left"===n.position?-.5:.5)),e.save(),e.translate(a,r),e.rotate(u),e.textAlign="center",e.textBaseline="middle"
var g=n.text
if(V.isArray(g))for(var m=0,p=0;p<g.length;++p)e.fillText(g[p],0,m,i),m+=s
else e.fillText(g,0,0,i)
e.restore()}}})
function xi(t,e){var n=new yi({ctx:t.ctx,options:e,chart:t})
le.configure(t,n,e),le.addBox(t,n),t.titleBlock=n}var _i={},wi=di,ki=vi,Mi={id:"title",_element:yi,beforeInit:function(t){var e=t.options.title
e&&xi(t,e)},beforeUpdate:function(t){var e=t.options.title,n=t.titleBlock
e?(V.mergeIf(e,N.global.title),n?(le.configure(t,n,e),n.options=e):xi(t,e)):n&&(le.removeBox(t,n),delete t.titleBlock)}}
for(var Si in _i.filler=wi,_i.legend=ki,_i.title=Mi,je.helpers=V,function(){function t(t,e,n){var i
return"string"==typeof t?(i=parseInt(t,10),-1!==t.indexOf("%")&&(i=i/100*e.parentNode[n])):i=t,i}function e(t){return null!=t&&"none"!==t}function n(n,i,a){var r=document.defaultView,o=V._getParentNode(n),s=r.getComputedStyle(n)[i],l=r.getComputedStyle(o)[i],u=e(s),d=e(l),h=Number.POSITIVE_INFINITY
return u||d?Math.min(u?t(s,n,a):h,d?t(l,o,a):h):"none"}V.where=function(t,e){if(V.isArray(t)&&Array.prototype.filter)return t.filter(e)
var n=[]
return V.each(t,(function(t){e(t)&&n.push(t)})),n},V.findIndex=Array.prototype.findIndex?function(t,e,n){return t.findIndex(e,n)}:function(t,e,n){n=void 0===n?t:n
for(var i=0,a=t.length;i<a;++i)if(e.call(n,t[i],i,t))return i
return-1},V.findNextWhere=function(t,e,n){V.isNullOrUndef(n)&&(n=-1)
for(var i=n+1;i<t.length;i++){var a=t[i]
if(e(a))return a}},V.findPreviousWhere=function(t,e,n){V.isNullOrUndef(n)&&(n=t.length)
for(var i=n-1;i>=0;i--){var a=t[i]
if(e(a))return a}},V.isNumber=function(t){return!isNaN(parseFloat(t))&&isFinite(t)},V.almostEquals=function(t,e,n){return Math.abs(t-e)<n},V.almostWhole=function(t,e){var n=Math.round(t)
return n-e<=t&&n+e>=t},V.max=function(t){return t.reduce((function(t,e){return isNaN(e)?t:Math.max(t,e)}),Number.NEGATIVE_INFINITY)},V.min=function(t){return t.reduce((function(t,e){return isNaN(e)?t:Math.min(t,e)}),Number.POSITIVE_INFINITY)},V.sign=Math.sign?function(t){return Math.sign(t)}:function(t){return 0==(t=+t)||isNaN(t)?t:t>0?1:-1},V.toRadians=function(t){return t*(Math.PI/180)},V.toDegrees=function(t){return t*(180/Math.PI)},V._decimalPlaces=function(t){if(V.isFinite(t)){for(var e=1,n=0;Math.round(t*e)/e!==t;)e*=10,n++
return n}},V.getAngleFromPoint=function(t,e){var n=e.x-t.x,i=e.y-t.y,a=Math.sqrt(n*n+i*i),r=Math.atan2(i,n)
return r<-.5*Math.PI&&(r+=2*Math.PI),{angle:r,distance:a}},V.distanceBetweenPoints=function(t,e){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))},V.aliasPixel=function(t){return t%2==0?0:.5},V._alignPixel=function(t,e,n){var i=t.currentDevicePixelRatio,a=n/2
return Math.round((e-a)*i)/i+a},V.splineCurve=function(t,e,n,i){var a=t.skip?e:t,r=e,o=n.skip?e:n,s=Math.sqrt(Math.pow(r.x-a.x,2)+Math.pow(r.y-a.y,2)),l=Math.sqrt(Math.pow(o.x-r.x,2)+Math.pow(o.y-r.y,2)),u=s/(s+l),d=l/(s+l),h=i*(u=isNaN(u)?0:u),c=i*(d=isNaN(d)?0:d)
return{previous:{x:r.x-h*(o.x-a.x),y:r.y-h*(o.y-a.y)},next:{x:r.x+c*(o.x-a.x),y:r.y+c*(o.y-a.y)}}},V.EPSILON=Number.EPSILON||1e-14,V.splineCurveMonotone=function(t){var e,n,i,a,r,o,s,l,u,d=(t||[]).map((function(t){return{model:t._model,deltaK:0,mK:0}})),h=d.length
for(e=0;e<h;++e)if(!(i=d[e]).model.skip){if(n=e>0?d[e-1]:null,(a=e<h-1?d[e+1]:null)&&!a.model.skip){var c=a.model.x-i.model.x
i.deltaK=0!==c?(a.model.y-i.model.y)/c:0}!n||n.model.skip?i.mK=i.deltaK:!a||a.model.skip?i.mK=n.deltaK:this.sign(n.deltaK)!==this.sign(i.deltaK)?i.mK=0:i.mK=(n.deltaK+i.deltaK)/2}for(e=0;e<h-1;++e)i=d[e],a=d[e+1],i.model.skip||a.model.skip||(V.almostEquals(i.deltaK,0,this.EPSILON)?i.mK=a.mK=0:(r=i.mK/i.deltaK,o=a.mK/i.deltaK,(l=Math.pow(r,2)+Math.pow(o,2))<=9||(s=3/Math.sqrt(l),i.mK=r*s*i.deltaK,a.mK=o*s*i.deltaK)))
for(e=0;e<h;++e)(i=d[e]).model.skip||(n=e>0?d[e-1]:null,a=e<h-1?d[e+1]:null,n&&!n.model.skip&&(u=(i.model.x-n.model.x)/3,i.model.controlPointPreviousX=i.model.x-u,i.model.controlPointPreviousY=i.model.y-u*i.mK),a&&!a.model.skip&&(u=(a.model.x-i.model.x)/3,i.model.controlPointNextX=i.model.x+u,i.model.controlPointNextY=i.model.y+u*i.mK))},V.nextItem=function(t,e,n){return n?e>=t.length-1?t[0]:t[e+1]:e>=t.length-1?t[t.length-1]:t[e+1]},V.previousItem=function(t,e,n){return n?e<=0?t[t.length-1]:t[e-1]:e<=0?t[0]:t[e-1]},V.niceNum=function(t,e){var n=Math.floor(V.log10(t)),i=t/Math.pow(10,n)
return(e?i<1.5?1:i<3?2:i<7?5:10:i<=1?1:i<=2?2:i<=5?5:10)*Math.pow(10,n)},V.requestAnimFrame="undefined"==typeof window?function(t){t()}:window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(t){return window.setTimeout(t,1e3/60)},V.getRelativePosition=function(t,e){var n,i,a=t.originalEvent||t,r=t.target||t.srcElement,o=r.getBoundingClientRect(),s=a.touches
s&&s.length>0?(n=s[0].clientX,i=s[0].clientY):(n=a.clientX,i=a.clientY)
var l=parseFloat(V.getStyle(r,"padding-left")),u=parseFloat(V.getStyle(r,"padding-top")),d=parseFloat(V.getStyle(r,"padding-right")),h=parseFloat(V.getStyle(r,"padding-bottom")),c=o.right-o.left-l-d,f=o.bottom-o.top-u-h
return{x:n=Math.round((n-o.left-l)/c*r.width/e.currentDevicePixelRatio),y:i=Math.round((i-o.top-u)/f*r.height/e.currentDevicePixelRatio)}},V.getConstraintWidth=function(t){return n(t,"max-width","clientWidth")},V.getConstraintHeight=function(t){return n(t,"max-height","clientHeight")},V._calculatePadding=function(t,e,n){return(e=V.getStyle(t,e)).indexOf("%")>-1?n*parseInt(e,10)/100:parseInt(e,10)},V._getParentNode=function(t){var e=t.parentNode
return e&&"[object ShadowRoot]"===e.toString()&&(e=e.host),e},V.getMaximumWidth=function(t){var e=V._getParentNode(t)
if(!e)return t.clientWidth
var n=e.clientWidth,i=n-V._calculatePadding(e,"padding-left",n)-V._calculatePadding(e,"padding-right",n),a=V.getConstraintWidth(t)
return isNaN(a)?i:Math.min(i,a)},V.getMaximumHeight=function(t){var e=V._getParentNode(t)
if(!e)return t.clientHeight
var n=e.clientHeight,i=n-V._calculatePadding(e,"padding-top",n)-V._calculatePadding(e,"padding-bottom",n),a=V.getConstraintHeight(t)
return isNaN(a)?i:Math.min(i,a)},V.getStyle=function(t,e){return t.currentStyle?t.currentStyle[e]:document.defaultView.getComputedStyle(t,null).getPropertyValue(e)},V.retinaScale=function(t,e){var n=t.currentDevicePixelRatio=e||"undefined"!=typeof window&&window.devicePixelRatio||1
if(1!==n){var i=t.canvas,a=t.height,r=t.width
i.height=a*n,i.width=r*n,t.ctx.scale(n,n),i.style.height||i.style.width||(i.style.height=a+"px",i.style.width=r+"px")}},V.fontString=function(t,e,n){return e+" "+t+"px "+n},V.longestText=function(t,e,n,i){var a=(i=i||{}).data=i.data||{},r=i.garbageCollect=i.garbageCollect||[]
i.font!==e&&(a=i.data={},r=i.garbageCollect=[],i.font=e),t.font=e
var o,s,l,u,d,h=0,c=n.length
for(o=0;o<c;o++)if(null!=(u=n[o])&&!0!==V.isArray(u))h=V.measureText(t,a,r,h,u)
else if(V.isArray(u))for(s=0,l=u.length;s<l;s++)null==(d=u[s])||V.isArray(d)||(h=V.measureText(t,a,r,h,d))
var f=r.length/2
if(f>n.length){for(o=0;o<f;o++)delete a[r[o]]
r.splice(0,f)}return h},V.measureText=function(t,e,n,i,a){var r=e[a]
return r||(r=e[a]=t.measureText(a).width,n.push(a)),r>i&&(i=r),i},V.numberOfLabelLines=function(t){var e=1
return V.each(t,(function(t){V.isArray(t)&&t.length>e&&(e=t.length)})),e},V.color=w?function(t){return t instanceof CanvasGradient&&(t=N.global.defaultColor),w(t)}:function(t){return console.error("Color.js not found!"),t},V.getHoverColor=function(t){return t instanceof CanvasPattern||t instanceof CanvasGradient?t:V.color(t).saturate(.5).darken(.1).rgbString()}}(),je._adapters=qe,je.Animation=$,je.animationService=X,je.controllers=Ut,je.DatasetController=et,je.defaults=N,je.Element=q,je.elements=bt,je.Interaction=Jt,je.layouts=le,je.platform=ke,je.plugins=Me,je.Scale=ln,je.scaleService=Se,je.Ticks=Ze,je.Tooltip=Ne,je.helpers.each(Qn,(function(t,e){je.scaleService.registerScaleType(e,t,t._defaults)})),_i)_i.hasOwnProperty(Si)&&je.plugins.register(_i[Si])
je.platform.initialize()
var Di=je
return"undefined"!=typeof window&&(window.Chart=je),je.Chart=je,je.Legend=_i.legend._element,je.Title=_i.title._element,je.pluginService=je.plugins,je.PluginBase=je.Element.extend({}),je.canvasHelpers=je.helpers.canvas,je.layoutService=je.layouts,je.LinearScaleBase=fn,je.helpers.each(["Bar","Bubble","Doughnut","Line","PolarArea","Radar","Scatter"],(function(t){je[t]=function(e,n){return new je(e,je.helpers.merge(n||{},{type:t.charAt(0).toLowerCase()+t.slice(1)}))}})),Di}))
