(function(){var PLATFORM_VERSION_BUILD_LABEL="9.1.0",require,define,modules,requireStack,inProgressModules
modules={},requireStack=[],inProgressModules={},require=function(e){if(!modules[e])throw new Error("module "+e+" not found")
if(e in inProgressModules){var n=requireStack.slice(inProgressModules[e]).join("->")+"->"+e
throw new Error("Cycle in require graph: "+n)}if(modules[e].factory)try{return inProgressModules[e]=requireStack.length,requireStack.push(e),function(e){var n=e.factory
return e.exports={},delete e.factory,n((function(n){var o=n
return"."===n.charAt(0)&&(o=e.id.slice(0,e.id.lastIndexOf("."))+"."+n.slice(2)),require(o)}),e.exports,e),e.exports}(modules[e])}finally{delete inProgressModules[e],requireStack.pop()}return modules[e].exports},(define=function(e,n){if(Object.prototype.hasOwnProperty.call(modules,e))throw new Error("module "+e+" already defined")
modules[e]={id:e,factory:n}}).remove=function(e){delete modules[e]},define.moduleMap=modules,"object"==typeof module&&"function"==typeof require&&(module.exports.require=require,module.exports.define=define),define("cordova",(function(e,n,o){if(window.cordova&&!(window.cordova instanceof HTMLElement))throw new Error("cordova already defined")
var r=e("cordova/channel"),t=e("cordova/platform"),i=document.addEventListener,a=document.removeEventListener,s=window.addEventListener,c=window.removeEventListener,d={},l={}
function u(e,n){var o=document.createEvent("Events")
if(o.initEvent(e,!1,!1),n)for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(o[r]=n[r])
return o}document.addEventListener=function(e,n,o){var r=e.toLowerCase()
void 0!==d[r]?d[r].subscribe(n):i.call(document,e,n,o)},window.addEventListener=function(e,n,o){var r=e.toLowerCase()
void 0!==l[r]?l[r].subscribe(n):s.call(window,e,n,o)},document.removeEventListener=function(e,n,o){var r=e.toLowerCase()
void 0!==d[r]?d[r].unsubscribe(n):a.call(document,e,n,o)},window.removeEventListener=function(e,n,o){var r=e.toLowerCase()
void 0!==l[r]?l[r].unsubscribe(n):c.call(window,e,n,o)}
var f={define:define,require:e,version:PLATFORM_VERSION_BUILD_LABEL,platformVersion:PLATFORM_VERSION_BUILD_LABEL,platformId:t.id,addWindowEventHandler:function(e){return l[e]=r.create(e)},addStickyDocumentEventHandler:function(e){return d[e]=r.createSticky(e)},addDocumentEventHandler:function(e){return d[e]=r.create(e)},removeWindowEventHandler:function(e){delete l[e]},removeDocumentEventHandler:function(e){delete d[e]},getOriginalHandlers:function(){return{document:{addEventListener:i,removeEventListener:a},window:{addEventListener:s,removeEventListener:c}}},fireDocumentEvent:function(e,n,o){var r=u(e,n)
void 0!==d[e]?o?d[e].fire(r):setTimeout((function(){"deviceready"===e&&document.dispatchEvent(r),d[e].fire(r)}),0):document.dispatchEvent(r)},fireWindowEvent:function(e,n){var o=u(e,n)
void 0!==l[e]?setTimeout((function(){l[e].fire(o)}),0):window.dispatchEvent(o)},callbackId:Math.floor(2e9*Math.random()),callbacks:{},callbackStatus:{NO_RESULT:0,OK:1,CLASS_NOT_FOUND_EXCEPTION:2,ILLEGAL_ACCESS_EXCEPTION:3,INSTANTIATION_EXCEPTION:4,MALFORMED_URL_EXCEPTION:5,IO_EXCEPTION:6,INVALID_ACTION:7,JSON_EXCEPTION:8,ERROR:9},callbackSuccess:function(e,n){f.callbackFromNative(e,!0,n.status,[n.message],n.keepCallback)},callbackError:function(e,n){f.callbackFromNative(e,!1,n.status,[n.message],n.keepCallback)},callbackFromNative:function(e,n,o,r,t){try{var i=f.callbacks[e]
i&&(n&&o===f.callbackStatus.OK?i.success&&i.success.apply(null,r):n||i.fail&&i.fail.apply(null,r),t||delete f.callbacks[e])}catch(s){var a="Error in "+(n?"Success":"Error")+" callbackId: "+e+" : "+s
throw f.fireWindowEvent("cordovacallbackerror",{message:a,error:s}),s}},addConstructor:function(e){r.onCordovaReady.subscribe((function(){try{e()}catch(n){console.log("Failed to run constructor: "+n)}}))}}
o.exports=f})),define("cordova/android/nativeapiprovider",(function(e,n,o){var r=this._cordovaNative||e("cordova/android/promptbasednativeapi"),t=r
o.exports={get:function(){return t},setPreferPrompt:function(n){t=n?e("cordova/android/promptbasednativeapi"):r},set:function(e){t=e}}})),define("cordova/android/promptbasednativeapi",(function(e,n,o){o.exports={exec:function(e,n,o,r,t){return prompt(t,"gap:"+JSON.stringify([e,n,o,r]))},setNativeToJsBridgeMode:function(e,n){prompt(n,"gap_bridge_mode:"+e)},retrieveJsMessages:function(e,n){return prompt(+n,"gap_poll:"+e)}}})),define("cordova/argscheck",(function(e,n,o){var r=e("cordova/utils"),t=o.exports,i={A:"Array",D:"Date",N:"Number",S:"String",F:"Function",O:"Object"}
t.checkArgs=function(e,n,o,a){if(t.enableChecks){for(var s,c,d,l=null,u=0;u<e.length;++u){var f=e.charAt(u),v=f.toUpperCase(),p=o[u]
if("*"!==f&&(s=r.typeName(p),(null!=p||f!==v)&&s!==i[v])){l="Expected "+i[v]
break}}if(l)throw l+=", but got "+s+".",l='Wrong type for parameter "'+(c=a||o.callee,d=u,/\(\s*([^)]*?)\s*\)/.exec(c)[1].split(/\s*,\s*/)[d]+'" of ')+n+": "+l,"undefined"==typeof jasmine&&console.error(l),TypeError(l)}},t.getValue=function(e,n){return void 0===e?n:e},t.enableChecks=!0})),define("cordova/base64",(function(e,n,o){var r=n
r.fromArrayBuffer=function(e){return function(e){for(var n,o=e.byteLength,r="",t=a(),s=0;s<o-2;s+=3)r+=t[(n=(e[s]<<16)+(e[s+1]<<8)+e[s+2])>>12],r+=t[4095&n]
o-s==2?(r+=t[(n=(e[s]<<16)+(e[s+1]<<8))>>12],r+=i[(4095&n)>>6],r+="="):o-s==1&&(r+=t[(n=e[s]<<16)>>12],r+="==")
return r}(new Uint8Array(e))},r.toArrayBuffer=function(e){for(var n=atob(e),o=new ArrayBuffer(n.length),r=new Uint8Array(o),t=0,i=n.length;t<i;t++)r[t]=n.charCodeAt(t)
return o}
var t,i="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",a=function(){t=[]
for(var e=0;e<64;e++)for(var n=0;n<64;n++)t[64*e+n]=i[e]+i[n]
return a=function(){return t},t}})),define("cordova/builder",(function(e,n,o){var r=e("cordova/utils")
function t(e,n,o){var t=!1
try{e[n]=o}catch(i){t=!0}(t||e[n]!==o)&&r.defineGetter(e,n,(function(){return o}))}function i(e,n,o,i){i?r.defineGetter(e,n,(function(){return console.log(i),delete e[n],t(e,n,o),o})):t(e,n,o)}function a(n,o,t,c){(function(e,n,o){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.apply(o,[e[r],r])})(o,(function(o,d){try{var l=o.path?e(o.path):{}
t?(void 0===n[d]?i(n,d,l,o.deprecated):void 0!==o.path&&(c?s(n[d],l):i(n,d,l,o.deprecated)),l=n[d]):void 0===n[d]?i(n,d,l,o.deprecated):l=n[d],o.children&&a(l,o.children,t,c)}catch(u){r.alert("Exception building Cordova JS globals: "+u+' for key "'+d+'"')}}))}function s(e,n){for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e.prototype&&e.prototype.constructor===e?t(e.prototype,o,n[o]):"object"==typeof n[o]&&"object"==typeof e[o]?s(e[o],n[o]):t(e,o,n[o]))}n.buildIntoButDoNotClobber=function(e,n){a(n,e,!1,!1)},n.buildIntoAndClobber=function(e,n){a(n,e,!0,!1)},n.buildIntoAndMerge=function(e,n){a(n,e,!0,!0)},n.recursiveMerge=s,n.assignOrWrapInDeprecateGetter=i})),define("cordova/channel",(function(e,n,o){var r=e("cordova/utils"),t=1,i=function(e,n){this.type=e,this.handlers={},this.state=n?1:0,this.fireArgs=null,this.numHandlers=0,this.onHasSubscribersChange=null},a={join:function(e,n){for(var o=n.length,r=o,t=function(){--r||e()},i=0;i<o;i++){if(0===n[i].state)throw Error("Can only use join with sticky channels.")
n[i].subscribe(t)}o||e()},create:function(e){return a[e]=new i(e,!1)},createSticky:function(e){return a[e]=new i(e,!0)},deviceReadyChannelsArray:[],deviceReadyChannelsMap:{},waitForInitialization:function(e){if(e){var n=a[e]||this.createSticky(e)
this.deviceReadyChannelsMap[e]=n,this.deviceReadyChannelsArray.push(n)}},initializationComplete:function(e){var n=this.deviceReadyChannelsMap[e]
n&&n.fire()}}
function s(e){if("function"!=typeof e&&"function"!=typeof e.handleEvent)throw new Error("Must provide a function or an EventListener object implementing the handleEvent interface.")}i.prototype.subscribe=function(e,n){var o,i
s(e),e&&"object"==typeof e?(o=e.handleEvent,n=e):o=e,2!==this.state?(i=e.observer_guid,"object"==typeof n&&(o=r.close(n,o)),i||(i=""+t++),o.observer_guid=i,e.observer_guid=i,this.handlers[i]||(this.handlers[i]=o,this.numHandlers++,1===this.numHandlers&&this.onHasSubscribersChange&&this.onHasSubscribersChange())):o.apply(n||this,this.fireArgs)},i.prototype.unsubscribe=function(e){var n
s(e),n=(e&&"object"==typeof e?e.handleEvent:e).observer_guid,this.handlers[n]&&(delete this.handlers[n],this.numHandlers--,0===this.numHandlers&&this.onHasSubscribersChange&&this.onHasSubscribersChange())},i.prototype.fire=function(e){var n=Array.prototype.slice.call(arguments)
if(1===this.state&&(this.state=2,this.fireArgs=n),this.numHandlers){var o=[]
for(var r in this.handlers)o.push(this.handlers[r])
for(var t=0;t<o.length;++t)o[t].apply(this,n)
2===this.state&&this.numHandlers&&(this.numHandlers=0,this.handlers={},this.onHasSubscribersChange&&this.onHasSubscribersChange())}},a.createSticky("onDOMContentLoaded"),a.createSticky("onNativeReady"),a.createSticky("onCordovaReady"),a.createSticky("onPluginsReady"),a.createSticky("onDeviceReady"),a.create("onResume"),a.create("onPause"),a.waitForInitialization("onCordovaReady"),a.waitForInitialization("onDOMContentLoaded"),o.exports=a})),define("cordova/exec",(function(require,exports,module){var cordova=require("cordova"),nativeApiProvider=require("cordova/android/nativeapiprovider"),utils=require("cordova/utils"),base64=require("cordova/base64"),channel=require("cordova/channel"),jsToNativeModes={PROMPT:0,JS_OBJECT:1},nativeToJsModes={POLLING:0,LOAD_URL:1,ONLINE_EVENT:2,EVAL_BRIDGE:3},jsToNativeBridgeMode,nativeToJsBridgeMode=nativeToJsModes.EVAL_BRIDGE,pollEnabled=!1,bridgeSecret=-1,messagesFromNative=[],isProcessing=!1,resolvedPromise="undefined"==typeof Promise?null:Promise.resolve(),nextTick=resolvedPromise?function(e){resolvedPromise.then(e)}:function(e){setTimeout(e)}
function androidExec(e,n,o,r,t){if(bridgeSecret<0)throw new Error("exec() called without bridgeSecret")
void 0===jsToNativeBridgeMode&&androidExec.setJsToNativeBridgeMode(jsToNativeModes.JS_OBJECT),t=t||[]
for(var i=0;i<t.length;i++)"ArrayBuffer"===utils.typeName(t[i])&&(t[i]=base64.fromArrayBuffer(t[i]))
var a=o+cordova.callbackId++,s=JSON.stringify(t);(e||n)&&(cordova.callbacks[a]={success:e,fail:n})
var c=nativeApiProvider.get().exec(bridgeSecret,o,r,a,s)
jsToNativeBridgeMode===jsToNativeModes.JS_OBJECT&&"@Null arguments."===c?(androidExec.setJsToNativeBridgeMode(jsToNativeModes.PROMPT),androidExec(e,n,o,r,t),androidExec.setJsToNativeBridgeMode(jsToNativeModes.JS_OBJECT)):c&&(messagesFromNative.push(c),nextTick(processMessages))}function pollOnceFromOnlineEvent(){pollOnce(!0)}function pollOnce(e){if(!(bridgeSecret<0)){var n=nativeApiProvider.get().retrieveJsMessages(bridgeSecret,!!e)
n&&(messagesFromNative.push(n),processMessages())}}function pollingTimerFunc(){pollEnabled&&(pollOnce(),setTimeout(pollingTimerFunc,50))}function hookOnlineApis(){function e(e){cordova.fireWindowEvent(e.type)}window.addEventListener("online",pollOnceFromOnlineEvent,!1),window.addEventListener("offline",pollOnceFromOnlineEvent,!1),cordova.addWindowEventHandler("online"),cordova.addWindowEventHandler("offline"),document.addEventListener("online",e,!1),document.addEventListener("offline",e,!1)}function buildPayload(e,n){var o=n.charAt(0)
if("s"===o)e.push(n.slice(1))
else if("t"===o)e.push(!0)
else if("f"===o)e.push(!1)
else if("N"===o)e.push(null)
else if("n"===o)e.push(+n.slice(1))
else if("A"===o){var r=n.slice(1)
e.push(base64.toArrayBuffer(r))}else if("S"===o)e.push(window.atob(n.slice(1)))
else if("M"===o)for(var t=n.slice(1);""!==t;){var i=t.indexOf(" "),a=+t.slice(0,i),s=t.substr(i+1,a)
t=t.slice(i+a+1),buildPayload(e,s)}else e.push(JSON.parse(n))}function processMessage(message){var firstChar=message.charAt(0)
if("J"===firstChar)eval(message.slice(1))
else if("S"===firstChar||"F"===firstChar){var success="S"===firstChar,keepCallback="1"===message.charAt(1),spaceIdx=message.indexOf(" ",2),status=+message.slice(2,spaceIdx),nextSpaceIdx=message.indexOf(" ",spaceIdx+1),callbackId=message.slice(spaceIdx+1,nextSpaceIdx),payloadMessage=message.slice(nextSpaceIdx+1),payload=[]
buildPayload(payload,payloadMessage),cordova.callbackFromNative(callbackId,success,status,payload,keepCallback)}else console.log("processMessage failed: invalid message: "+JSON.stringify(message))}function processMessages(){if(!isProcessing&&0!==messagesFromNative.length){isProcessing=!0
try{var e=popMessageFromQueue()
if("*"===e&&0===messagesFromNative.length)return void nextTick(pollOnce)
processMessage(e)}finally{isProcessing=!1,messagesFromNative.length>0&&nextTick(processMessages)}}}function popMessageFromQueue(){var e=messagesFromNative.shift()
if("*"===e)return"*"
var n=e.indexOf(" "),o=+e.slice(0,n),r=e.substr(n+1,o)
return(e=e.slice(n+o+1))&&messagesFromNative.unshift(e),r}androidExec.init=function(){bridgeSecret=+prompt("","gap_init:"+nativeToJsBridgeMode),channel.onNativeReady.fire()},hookOnlineApis(),androidExec.jsToNativeModes=jsToNativeModes,androidExec.nativeToJsModes=nativeToJsModes,androidExec.setJsToNativeBridgeMode=function(e){e!==jsToNativeModes.JS_OBJECT||window._cordovaNative||(e=jsToNativeModes.PROMPT),nativeApiProvider.setPreferPrompt(e===jsToNativeModes.PROMPT),jsToNativeBridgeMode=e},androidExec.setNativeToJsBridgeMode=function(e){e!==nativeToJsBridgeMode&&(nativeToJsBridgeMode===nativeToJsModes.POLLING&&(pollEnabled=!1),nativeToJsBridgeMode=e,bridgeSecret>=0&&nativeApiProvider.get().setNativeToJsBridgeMode(bridgeSecret,e),e===nativeToJsModes.POLLING&&(pollEnabled=!0,setTimeout(pollingTimerFunc,1)))},module.exports=androidExec})),define("cordova/exec/proxy",(function(e,n,o){var r={}
o.exports={add:function(e,n){return console.log("adding proxy for "+e),r[e]=n,n},remove:function(e){var n=r[e]
return delete r[e],r[e]=null,n},get:function(e,n){return r[e]?r[e][n]:null}}})),define("cordova/init",(function(e,n,o){var r=e("cordova/channel"),t=e("cordova"),i=e("cordova/modulemapper"),a=e("cordova/platform"),s=e("cordova/pluginloader"),c=[r.onNativeReady,r.onPluginsReady]
function d(e){for(var n=0;n<e.length;++n)2!==e[n].state&&console.log("Channel not fired: "+e[n].type)}window.setTimeout((function(){2!==r.onDeviceReady.state&&(console.log("deviceready has not fired after 5 seconds."),d(c),d(r.deviceReadyChannelsArray))}),5e3),window.console||(window.console={log:function(){}}),window.console.warn||(window.console.warn=function(e){this.log("warn: "+e)}),r.onPause=t.addDocumentEventHandler("pause"),r.onResume=t.addDocumentEventHandler("resume"),r.onActivated=t.addDocumentEventHandler("activated"),r.onDeviceReady=t.addStickyDocumentEventHandler("deviceready"),"complete"===document.readyState||"interactive"===document.readyState?r.onDOMContentLoaded.fire():document.addEventListener("DOMContentLoaded",(function(){r.onDOMContentLoaded.fire()}),!1),window._nativeReady&&r.onNativeReady.fire(),i.clobbers("cordova","cordova"),i.clobbers("cordova/exec","cordova.exec"),i.clobbers("cordova/exec","Cordova.exec"),a.bootstrap&&a.bootstrap(),setTimeout((function(){s.load((function(){r.onPluginsReady.fire()}))}),0),r.join((function(){i.mapModules(window),a.initialize&&a.initialize(),r.onCordovaReady.fire(),r.join((function(){e("cordova").fireDocumentEvent("deviceready")}),r.deviceReadyChannelsArray)}),c)})),define("cordova/modulemapper",(function(e,n,o){var r,t,i=e("cordova/builder"),a=define.moduleMap
function s(e,n,o,i){if(!(n in a))throw new Error("Module "+n+" does not exist.")
r.push(e,n,o),i&&(t[o]=i)}function c(e,n){return e?e.split(".").reduce((function(e,n){return e[n]=e[n]||{}}),n):n}n.reset=function(){r=[],t={}},n.clobbers=function(e,n,o){s("c",e,n,o)},n.merges=function(e,n,o){s("m",e,n,o)},n.defaults=function(e,n,o){s("d",e,n,o)},n.runs=function(e){s("r",e,null)},n.mapModules=function(n){var o={}
n.CDV_origSymbols=o
for(var a=0,s=r.length;a<s;a+=3){var d=r[a],l=r[a+1],u=e(l)
if("r"!==d){var f=r[a+2],v=f.lastIndexOf("."),p=f.substr(0,v),m=f.substr(v+1),g=f in t?"Access made to deprecated symbol: "+f+". "+g:null,h=c(p,n),b=h[m]
"m"===d&&b?i.recursiveMerge(b,u):("d"===d&&!b||"d"!==d)&&(f in o||(o[f]=b),i.assignOrWrapInDeprecateGetter(h,m,u,g))}}},n.getOriginalSymbol=function(e,n){var o=e.CDV_origSymbols
if(o&&n in o)return o[n]
for(var r=n.split("."),t=e,i=0;i<r.length;++i)t=t&&t[r[i]]
return t},n.reset()})),define("cordova/platform",(function(e,n,o){var r=null
function t(n){var o=e("cordova"),t=n.action
switch(t){case"backbutton":case"menubutton":case"searchbutton":case"pause":case"volumedownbutton":case"volumeupbutton":o.fireDocumentEvent(t)
break
case"resume":if(arguments.length>1&&n.pendingResult){if(2===arguments.length)n.pendingResult.result=arguments[1]
else{for(var i=[],a=1;a<arguments.length;a++)i.push(arguments[a])
n.pendingResult.result=i}r=n}o.fireDocumentEvent(t,n)
break
default:throw new Error("Unknown event action "+t)}}o.exports={id:"android",bootstrap:function(){var n=e("cordova/channel"),o=e("cordova"),i=e("cordova/exec"),a=e("cordova/modulemapper")
i.init(),a.clobbers("cordova/plugin/android/app","navigator.app")
var s=Number(o.platformVersion.split(".")[0])>=4?"CoreAndroid":"App"
function c(e){o.addDocumentEventHandler(e+"button").onHasSubscribersChange=function(){i(null,null,s,"overrideButton",[e,1===this.numHandlers])}}o.addDocumentEventHandler("backbutton").onHasSubscribersChange=function(){i(null,null,s,"overrideBackbutton",[1===this.numHandlers])},o.addDocumentEventHandler("menubutton"),o.addDocumentEventHandler("searchbutton"),c("volumeup"),c("volumedown")
var d=document.addEventListener
document.addEventListener=function(e,n,o){d(e,n,o),"resume"===e&&r&&n(r)},n.onCordovaReady.subscribe((function(){i(t,null,s,"messageChannel",[]),i(null,null,s,"show",[])}))}}})),define("cordova/plugin/android/app",(function(e,n,o){var r=e("cordova/exec"),t=Number(e("cordova").platformVersion.split(".")[0])>=4?"CoreAndroid":"App"
o.exports={clearCache:function(){r(null,null,t,"clearCache",[])},loadUrl:function(e,n){r(null,null,t,"loadUrl",[e,n])},cancelLoadUrl:function(){r(null,null,t,"cancelLoadUrl",[])},clearHistory:function(){r(null,null,t,"clearHistory",[])},backHistory:function(){r(null,null,t,"backHistory",[])},overrideBackbutton:function(e){r(null,null,t,"overrideBackbutton",[e])},overrideButton:function(e,n){r(null,null,t,"overrideButton",[e,n])},exitApp:function(){return r(null,null,t,"exitApp",[])}}})),define("cordova/pluginloader",(function(e,n,o){var r=e("cordova/modulemapper")
function t(e,o,r,t){t=t||r,e in define.moduleMap?r():n.injectScript(o,(function(){e in define.moduleMap?r():t()}),t)}function i(e,n,o){var i=n.length
if(i)for(var a=0;a<n.length;a++)t(n[a].id,e+n[a].file,s)
else o()
function s(){--i||function(e,n){for(var o,t=0;o=e[t];t++){if(o.clobbers&&o.clobbers.length)for(var i=0;i<o.clobbers.length;i++)r.clobbers(o.id,o.clobbers[i])
if(o.merges&&o.merges.length)for(var a=0;a<o.merges.length;a++)r.merges(o.id,o.merges[a])
o.runs&&r.runs(o.id)}n()}(n,o)}}n.injectScript=function(e,n,o){var r=document.createElement("script")
r.onload=n,r.onerror=o,r.src=e,document.head.appendChild(r)},n.load=function(n){var o=function(){for(var e=null,n=document.getElementsByTagName("script"),o="/cordova-80d7e5de10f1e0e801644680e636d109.js",r=n.length-1;r>-1;r--){var t=n[r].src.replace(/\?.*$/,"")
if(t.indexOf(o)===t.length-44){e=t.substring(0,t.length-44)+"/"
break}}return e}()
null===o&&(console.log("Could not find cordova-80d7e5de10f1e0e801644680e636d109.js script tag. Plugin loading may fail."),o=""),t("cordova/plugin_list",o+"cordova_plugins.js",(function(){var r=e("cordova/plugin_list")
i(o,r,n)}),n)}})),define("cordova/urlutil",(function(e,n,o){n.makeAbsolute=function(e){var n=document.createElement("a")
return n.href=e,n.href}})),define("cordova/utils",(function(e,n,o){var r,t=n
function i(e){for(var n="",o=0;o<e;o++){var r=parseInt(256*Math.random(),10).toString(16)
1===r.length&&(r="0"+r),n+=r}return n}t.defineGetterSetter=function(e,n,o,r){if(Object.defineProperty){var t={get:o,configurable:!0}
r&&(t.set=r),Object.defineProperty(e,n,t)}else e.__defineGetter__(n,o),r&&e.__defineSetter__(n,r)},t.defineGetter=t.defineGetterSetter,t.arrayIndexOf=function(e,n){if(e.indexOf)return e.indexOf(n)
for(var o=e.length,r=0;r<o;++r)if(e[r]===n)return r
return-1},t.arrayRemove=function(e,n){var o=t.arrayIndexOf(e,n)
return-1!==o&&e.splice(o,1),-1!==o},t.typeName=function(e){return Object.prototype.toString.call(e).slice(8,-1)},t.isArray=Array.isArray||function(e){return"Array"===t.typeName(e)},t.isDate=function(e){return e instanceof Date},t.clone=function(e){if(!e||"function"==typeof e||t.isDate(e)||"object"!=typeof e)return e
var n,o
if(t.isArray(e)){for(n=[],o=0;o<e.length;++o)n.push(t.clone(e[o]))
return n}for(o in n={},e)o in n&&n[o]===e[o]||void 0===e[o]||"unknown"==typeof e[o]||(n[o]=t.clone(e[o]))
return n},t.close=function(e,n,o){return function(){var r=o||arguments
return n.apply(e,r)}},t.createUUID=function(){return i(4)+"-"+i(2)+"-"+i(2)+"-"+i(2)+"-"+i(6)},t.extend=(r=function(){},function(e,n){r.prototype=n.prototype,e.prototype=new r,e.__super__=n.prototype,e.prototype.constructor=e}),t.alert=function(e){window.alert?window.alert(e):console&&console.log&&console.log(e)}})),window.cordova=require("cordova"),require("cordova/init")})()
