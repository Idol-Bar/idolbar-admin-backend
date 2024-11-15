"use strict"
function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _createSuper(e){var t=_isNativeReflectConstruct()
return function(){var n,i=_getPrototypeOf(e)
if(t){var r=_getPrototypeOf(this).constructor
n=Reflect.construct(i,arguments,r)}else n=i.apply(this,arguments)
return _possibleConstructorReturn(this,n)}}function _possibleConstructorReturn(e,t){return!t||"object"!==_typeof(t)&&"function"!=typeof t?_assertThisInitialized(e):t}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _createForOfIteratorHelper(e,t){var n
if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=_unsupportedIterableToArray(e))||t&&e&&"number"==typeof e.length){n&&(e=n)
var i=0,r=function(){}
return{s:r,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a=!0,s=!1
return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next()
return a=e.done,e},e:function(e){s=!0,o=e},f:function(){try{a||null==n.return||n.return()}finally{if(s)throw o}}}}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t)
var n=Object.prototype.toString.call(e).slice(8,-1)
return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(e,t):void 0}}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length)
for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n]
return i}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var i=t[n]
i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}var Emitter=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"on",value:function(e,t){return this._callbacks=this._callbacks||{},this._callbacks[e]||(this._callbacks[e]=[]),this._callbacks[e].push(t),this}},{key:"emit",value:function(e){this._callbacks=this._callbacks||{}
var t=this._callbacks[e]
if(t){for(var n=arguments.length,i=new Array(1<n?n-1:0),r=1;r<n;r++)i[r-1]=arguments[r]
var o,a=_createForOfIteratorHelper(t)
try{for(a.s();!(o=a.n()).done;)o.value.apply(this,i)}catch(e){a.e(e)}finally{a.f()}}return this}},{key:"off",value:function(e,t){if(!this._callbacks||0===arguments.length)return this._callbacks={},this
var n=this._callbacks[e]
if(!n)return this
if(1===arguments.length)return delete this._callbacks[e],this
for(var i=0;i<n.length;i++)if(n[i]===t){n.splice(i,1)
break}return this}}]),e}(),Dropzone=function(){_inherits(t,Emitter)
var e=_createSuper(t)
function t(n,i){var r,o,a
if(_classCallCheck(this,t),(r=e.call(this)).element=n,r.version=t.version,r.defaultOptions.previewTemplate=r.defaultOptions.previewTemplate.replace(/\n*/g,""),r.clickableElements=[],r.listeners=[],r.files=[],"string"==typeof r.element&&(r.element=document.querySelector(r.element)),!r.element||null==r.element.nodeType)throw new Error("Invalid dropzone element.")
if(r.element.dropzone)throw new Error("Dropzone already attached.")
t.instances.push(_assertThisInitialized(r)),r.element.dropzone=_assertThisInitialized(r)
var s=null!=(a=t.optionsForElement(r.element))?a:{}
if(r.options=t.extend({},r.defaultOptions,s,null!=i?i:{}),r.options.forceFallback||!t.isBrowserSupported())return _possibleConstructorReturn(r,r.options.fallback.call(_assertThisInitialized(r)))
if(null==r.options.url&&(r.options.url=r.element.getAttribute("action")),!r.options.url)throw new Error("No URL provided.")
if(r.options.acceptedFiles&&r.options.acceptedMimeTypes)throw new Error("You can't provide both 'acceptedFiles' and 'acceptedMimeTypes'. 'acceptedMimeTypes' is deprecated.")
if(r.options.uploadMultiple&&r.options.chunking)throw new Error("You cannot set both: uploadMultiple and chunking.")
return r.options.acceptedMimeTypes&&(r.options.acceptedFiles=r.options.acceptedMimeTypes,delete r.options.acceptedMimeTypes),null!=r.options.renameFilename&&(r.options.renameFile=function(e){return r.options.renameFilename.call(_assertThisInitialized(r),e.name,e)}),"string"==typeof r.options.method&&(r.options.method=r.options.method.toUpperCase()),(o=r.getExistingFallback())&&o.parentNode&&o.parentNode.removeChild(o),!1!==r.options.previewsContainer&&(r.options.previewsContainer?r.previewsContainer=t.getElement(r.options.previewsContainer,"previewsContainer"):r.previewsContainer=r.element),r.options.clickable&&(!0===r.options.clickable?r.clickableElements=[r.element]:r.clickableElements=t.getElements(r.options.clickable,"clickable")),r.init(),r}return _createClass(t,null,[{key:"initClass",value:function(){this.prototype.Emitter=Emitter,this.prototype.events=["drop","dragstart","dragend","dragenter","dragover","dragleave","addedfile","addedfiles","removedfile","thumbnail","error","errormultiple","processing","processingmultiple","uploadprogress","totaluploadprogress","sending","sendingmultiple","success","successmultiple","canceled","canceledmultiple","complete","completemultiple","reset","maxfilesexceeded","maxfilesreached","queuecomplete"],this.prototype.defaultOptions={url:null,method:"post",withCredentials:!1,timeout:3e4,parallelUploads:2,uploadMultiple:!1,chunking:!1,forceChunking:!1,chunkSize:2e6,parallelChunkUploads:!1,retryChunks:!1,retryChunksLimit:3,maxFilesize:256,paramName:"file",createImageThumbnails:!0,maxThumbnailFilesize:10,thumbnailWidth:120,thumbnailHeight:120,thumbnailMethod:"crop",resizeWidth:null,resizeHeight:null,resizeMimeType:null,resizeQuality:.8,resizeMethod:"contain",filesizeBase:1e3,maxFiles:null,headers:null,clickable:!0,ignoreHiddenFiles:!0,acceptedFiles:null,acceptedMimeTypes:null,autoProcessQueue:!0,autoQueue:!0,addRemoveLinks:!1,previewsContainer:null,hiddenInputContainer:"body",capture:null,renameFilename:null,renameFile:null,forceFallback:!1,dictDefaultMessage:"Drop files here to upload",dictFallbackMessage:"Your browser does not support drag'n'drop file uploads.",dictFallbackText:"Please use the fallback form below to upload your files like in the olden days.",dictFileTooBig:"File is too big ({{filesize}}MiB). Max filesize: {{maxFilesize}}MiB.",dictInvalidFileType:"You can't upload files of this type.",dictResponseError:"Server responded with {{statusCode}} code.",dictCancelUpload:"Cancel upload",dictUploadCanceled:"Upload canceled.",dictCancelUploadConfirmation:"Are you sure you want to cancel this upload?",dictRemoveFile:"Remove file",dictRemoveFileConfirmation:null,dictMaxFilesExceeded:"You can not upload any more files.",dictFileSizeUnits:{tb:"TB",gb:"GB",mb:"MB",kb:"KB",b:"b"},init:function(){},params:function(e,t,n){if(n)return{dzuuid:n.file.upload.uuid,dzchunkindex:n.index,dztotalfilesize:n.file.size,dzchunksize:this.options.chunkSize,dztotalchunkcount:n.file.upload.totalChunkCount,dzchunkbyteoffset:n.index*this.options.chunkSize}},accept:function(e,t){return t()},chunksUploaded:function(e,t){t()},fallback:function(){var e
this.element.className="".concat(this.element.className," dz-browser-not-supported")
var n,i=_createForOfIteratorHelper(this.element.getElementsByTagName("div"))
try{for(i.s();!(n=i.n()).done;){var r=n.value
if(/(^| )dz-message($| )/.test(r.className)){(e=r).className="dz-message"
break}}}catch(e){i.e(e)}finally{i.f()}e||(e=t.createElement('<div class="dz-message"><span></span></div>'),this.element.appendChild(e))
var o=e.getElementsByTagName("span")[0]
return o&&(null!=o.textContent?o.textContent=this.options.dictFallbackMessage:null!=o.innerText&&(o.innerText=this.options.dictFallbackMessage)),this.element.appendChild(this.getFallbackForm())},resize:function(e,t,n,i){var r={srcX:0,srcY:0,srcWidth:e.width,srcHeight:e.height},o=e.width/e.height
null==t&&null==n?(t=r.srcWidth,n=r.srcHeight):null==t?t=n*o:null==n&&(n=t/o)
var a=(t=Math.min(t,r.srcWidth))/(n=Math.min(n,r.srcHeight))
if(r.srcWidth>t||r.srcHeight>n)if("crop"===i)a<o?(r.srcHeight=e.height,r.srcWidth=r.srcHeight*a):(r.srcWidth=e.width,r.srcHeight=r.srcWidth/a)
else{if("contain"!==i)throw new Error("Unknown resizeMethod '".concat(i,"'"))
a<o?n=t/o:t=n*o}return r.srcX=(e.width-r.srcWidth)/2,r.srcY=(e.height-r.srcHeight)/2,r.trgWidth=t,r.trgHeight=n,r},transformFile:function(e,t){return(this.options.resizeWidth||this.options.resizeHeight)&&e.type.match(/image.*/)?this.resizeImage(e,this.options.resizeWidth,this.options.resizeHeight,this.options.resizeMethod,t):t(e)},previewTemplate:'<div class="dz-preview dz-file-preview">\n  <div class="dz-image"><img data-dz-thumbnail /></div>\n  <div class="dz-details">\n    <div class="dz-size"><span data-dz-size></span></div>\n    <div class="dz-filename"><span data-dz-name></span></div>\n  </div>\n  <div class="dz-progress"><span class="dz-upload" data-dz-uploadprogress></span></div>\n  <div class="dz-error-message"><span data-dz-errormessage></span></div>\n  <div class="dz-success-mark">\n    <svg width="54px" height="54px" viewBox="0 0 54 54" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n      <title>Check</title>\n      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n        <path d="M23.5,31.8431458 L17.5852419,25.9283877 C16.0248253,24.3679711 13.4910294,24.366835 11.9289322,25.9289322 C10.3700136,27.4878508 10.3665912,30.0234455 11.9283877,31.5852419 L20.4147581,40.0716123 C20.5133999,40.1702541 20.6159315,40.2626649 20.7218615,40.3488435 C22.2835669,41.8725651 24.794234,41.8626202 26.3461564,40.3106978 L43.3106978,23.3461564 C44.8771021,21.7797521 44.8758057,19.2483887 43.3137085,17.6862915 C41.7547899,16.1273729 39.2176035,16.1255422 37.6538436,17.6893022 L23.5,31.8431458 Z M27,53 C41.3594035,53 53,41.3594035 53,27 C53,12.6405965 41.3594035,1 27,1 C12.6405965,1 1,12.6405965 1,27 C1,41.3594035 12.6405965,53 27,53 Z" stroke-opacity="0.198794158" stroke="#747474" fill-opacity="0.816519475" fill="#FFFFFF"></path>\n      </g>\n    </svg>\n  </div>\n  <div class="dz-error-mark">\n    <svg width="54px" height="54px" viewBox="0 0 54 54" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n      <title>Error</title>\n      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n        <g stroke="#747474" stroke-opacity="0.198794158" fill="#FFFFFF" fill-opacity="0.816519475">\n          <path d="M32.6568542,29 L38.3106978,23.3461564 C39.8771021,21.7797521 39.8758057,19.2483887 38.3137085,17.6862915 C36.7547899,16.1273729 34.2176035,16.1255422 32.6538436,17.6893022 L27,23.3431458 L21.3461564,17.6893022 C19.7823965,16.1255422 17.2452101,16.1273729 15.6862915,17.6862915 C14.1241943,19.2483887 14.1228979,21.7797521 15.6893022,23.3461564 L21.3431458,29 L15.6893022,34.6538436 C14.1228979,36.2202479 14.1241943,38.7516113 15.6862915,40.3137085 C17.2452101,41.8726271 19.7823965,41.8744578 21.3461564,40.3106978 L27,34.6568542 L32.6538436,40.3106978 C34.2176035,41.8744578 36.7547899,41.8726271 38.3137085,40.3137085 C39.8758057,38.7516113 39.8771021,36.2202479 38.3106978,34.6538436 L32.6568542,29 Z M27,53 C41.3594035,53 53,41.3594035 53,27 C53,12.6405965 41.3594035,1 27,1 C12.6405965,1 1,12.6405965 1,27 C1,41.3594035 12.6405965,53 27,53 Z"></path>\n        </g>\n      </g>\n    </svg>\n  </div>\n</div>',drop:function(){return this.element.classList.remove("dz-drag-hover")},dragstart:function(){},dragend:function(){return this.element.classList.remove("dz-drag-hover")},dragenter:function(){return this.element.classList.add("dz-drag-hover")},dragover:function(){return this.element.classList.add("dz-drag-hover")},dragleave:function(){return this.element.classList.remove("dz-drag-hover")},paste:function(){},reset:function(){return this.element.classList.remove("dz-started")},addedfile:function(e){var n=this
if(this.element===this.previewsContainer&&this.element.classList.add("dz-started"),this.previewsContainer){e.previewElement=t.createElement(this.options.previewTemplate.trim()),e.previewTemplate=e.previewElement,this.previewsContainer.appendChild(e.previewElement)
var i,r=_createForOfIteratorHelper(e.previewElement.querySelectorAll("[data-dz-name]"))
try{for(r.s();!(i=r.n()).done;){var o=i.value
o.textContent=e.name}}catch(i){r.e(i)}finally{r.f()}var a,s=_createForOfIteratorHelper(e.previewElement.querySelectorAll("[data-dz-size]"))
try{for(s.s();!(a=s.n()).done;)(o=a.value).innerHTML=this.filesize(e.size)}catch(i){s.e(i)}finally{s.f()}this.options.addRemoveLinks&&(e._removeLink=t.createElement('<a class="dz-remove" href="javascript:undefined;" data-dz-remove>'.concat(this.options.dictRemoveFile,"</a>")),e.previewElement.appendChild(e._removeLink))
var l,u=function(i){return i.preventDefault(),i.stopPropagation(),e.status===t.UPLOADING?t.confirm(n.options.dictCancelUploadConfirmation,(function(){return n.removeFile(e)})):n.options.dictRemoveFileConfirmation?t.confirm(n.options.dictRemoveFileConfirmation,(function(){return n.removeFile(e)})):n.removeFile(e)},c=_createForOfIteratorHelper(e.previewElement.querySelectorAll("[data-dz-remove]"))
try{for(c.s();!(l=c.n()).done;)l.value.addEventListener("click",u)}catch(i){c.e(i)}finally{c.f()}}},removedfile:function(e){return null!=e.previewElement&&null!=e.previewElement.parentNode&&e.previewElement.parentNode.removeChild(e.previewElement),this._updateMaxFilesReachedClass()},thumbnail:function(e,t){if(e.previewElement){e.previewElement.classList.remove("dz-file-preview")
var n,i=_createForOfIteratorHelper(e.previewElement.querySelectorAll("[data-dz-thumbnail]"))
try{for(i.s();!(n=i.n()).done;){var r=n.value
r.alt=e.name,r.src=t}}catch(e){i.e(e)}finally{i.f()}return setTimeout((function(){return e.previewElement.classList.add("dz-image-preview")}),1)}},error:function(e,t){if(e.previewElement){e.previewElement.classList.add("dz-error"),"string"!=typeof t&&t.error&&(t=t.error)
var n,i=_createForOfIteratorHelper(e.previewElement.querySelectorAll("[data-dz-errormessage]"))
try{for(i.s();!(n=i.n()).done;)n.value.textContent=t}catch(e){i.e(e)}finally{i.f()}}},errormultiple:function(){},processing:function(e){if(e.previewElement&&(e.previewElement.classList.add("dz-processing"),e._removeLink))return e._removeLink.innerHTML=this.options.dictCancelUpload},processingmultiple:function(){},uploadprogress:function(e,t){if(e.previewElement){var n,i=_createForOfIteratorHelper(e.previewElement.querySelectorAll("[data-dz-uploadprogress]"))
try{for(i.s();!(n=i.n()).done;){var r=n.value
"PROGRESS"===r.nodeName?r.value=t:r.style.width="".concat(t,"%")}}catch(e){i.e(e)}finally{i.f()}}},totaluploadprogress:function(){},sending:function(){},sendingmultiple:function(){},success:function(e){if(e.previewElement)return e.previewElement.classList.add("dz-success")},successmultiple:function(){},canceled:function(e){return this.emit("error",e,this.options.dictUploadCanceled)},canceledmultiple:function(){},complete:function(e){if(e._removeLink&&(e._removeLink.innerHTML=this.options.dictRemoveFile),e.previewElement)return e.previewElement.classList.add("dz-complete")},completemultiple:function(){},maxfilesexceeded:function(){},maxfilesreached:function(){},queuecomplete:function(){},addedfiles:function(){}},this.prototype._thumbnailQueue=[],this.prototype._processingThumbnail=!1}},{key:"extend",value:function(e){for(var t=arguments.length,n=new Array(1<t?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i]
for(var r=0,o=n;r<o.length;r++){var a=o[r]
for(var s in a){var l=a[s]
e[s]=l}}return e}}]),_createClass(t,[{key:"getAcceptedFiles",value:function(){return this.files.filter((function(e){return e.accepted})).map((function(e){return e}))}},{key:"getRejectedFiles",value:function(){return this.files.filter((function(e){return!e.accepted})).map((function(e){return e}))}},{key:"getFilesWithStatus",value:function(e){return this.files.filter((function(t){return t.status===e})).map((function(e){return e}))}},{key:"getQueuedFiles",value:function(){return this.getFilesWithStatus(t.QUEUED)}},{key:"getUploadingFiles",value:function(){return this.getFilesWithStatus(t.UPLOADING)}},{key:"getAddedFiles",value:function(){return this.getFilesWithStatus(t.ADDED)}},{key:"getActiveFiles",value:function(){return this.files.filter((function(e){return e.status===t.UPLOADING||e.status===t.QUEUED})).map((function(e){return e}))}},{key:"init",value:function(){var e=this
"form"===this.element.tagName&&this.element.setAttribute("enctype","multipart/form-data"),this.element.classList.contains("dropzone")&&!this.element.querySelector(".dz-message")&&this.element.appendChild(t.createElement('<div class="dz-default dz-message"><button class="dz-button" type="button">'.concat(this.options.dictDefaultMessage,"</button></div>"))),this.clickableElements.length&&function n(){return e.hiddenFileInput&&e.hiddenFileInput.parentNode.removeChild(e.hiddenFileInput),e.hiddenFileInput=document.createElement("input"),e.hiddenFileInput.setAttribute("type","file"),(null===e.options.maxFiles||1<e.options.maxFiles)&&e.hiddenFileInput.setAttribute("multiple","multiple"),e.hiddenFileInput.className="dz-hidden-input",null!==e.options.acceptedFiles&&e.hiddenFileInput.setAttribute("accept",e.options.acceptedFiles),null!==e.options.capture&&e.hiddenFileInput.setAttribute("capture",e.options.capture),e.hiddenFileInput.style.visibility="hidden",e.hiddenFileInput.style.position="absolute",e.hiddenFileInput.style.top="0",e.hiddenFileInput.style.left="0",e.hiddenFileInput.style.height="0",e.hiddenFileInput.style.width="0",t.getElement(e.options.hiddenInputContainer,"hiddenInputContainer").appendChild(e.hiddenFileInput),e.hiddenFileInput.addEventListener("change",(function(){var t=e.hiddenFileInput.files
if(t.length){var i,r=_createForOfIteratorHelper(t)
try{for(r.s();!(i=r.n()).done;){var o=i.value
e.addFile(o)}}catch(t){r.e(t)}finally{r.f()}}return e.emit("addedfiles",t),n()}))}(),this.URL=null!==window.URL?window.URL:window.webkitURL
var n,i=_createForOfIteratorHelper(this.events)
try{for(i.s();!(n=i.n()).done;){var r=n.value
this.on(r,this.options[r])}}catch(n){i.e(n)}finally{i.f()}function o(e){return function(e){if(e.dataTransfer.types)for(var t=0;t<e.dataTransfer.types.length;t++)if("Files"===e.dataTransfer.types[t])return!0
return!1}(e)&&(e.stopPropagation(),e.preventDefault?e.preventDefault():e.returnValue=!1)}return this.on("uploadprogress",(function(){return e.updateTotalUploadProgress()})),this.on("removedfile",(function(){return e.updateTotalUploadProgress()})),this.on("canceled",(function(t){return e.emit("complete",t)})),this.on("complete",(function(t){if(0===e.getAddedFiles().length&&0===e.getUploadingFiles().length&&0===e.getQueuedFiles().length)return setTimeout((function(){return e.emit("queuecomplete")}),0)})),this.listeners=[{element:this.element,events:{dragstart:function(t){return e.emit("dragstart",t)},dragenter:function(t){return o(t),e.emit("dragenter",t)},dragover:function(t){var n
try{n=t.dataTransfer.effectAllowed}catch(t){}return t.dataTransfer.dropEffect="move"===n||"linkMove"===n?"move":"copy",o(t),e.emit("dragover",t)},dragleave:function(t){return e.emit("dragleave",t)},drop:function(t){return o(t),e.drop(t)},dragend:function(t){return e.emit("dragend",t)}}}],this.clickableElements.forEach((function(n){return e.listeners.push({element:n,events:{click:function(i){return n===e.element&&i.target!==e.element&&!t.elementInside(i.target,e.element.querySelector(".dz-message"))||e.hiddenFileInput.click(),!0}}})})),this.enable(),this.options.init.call(this)}},{key:"destroy",value:function(){return this.disable(),this.removeAllFiles(!0),null!=this.hiddenFileInput&&this.hiddenFileInput.parentNode&&(this.hiddenFileInput.parentNode.removeChild(this.hiddenFileInput),this.hiddenFileInput=null),delete this.element.dropzone,t.instances.splice(t.instances.indexOf(this),1)}},{key:"updateTotalUploadProgress",value:function(){var e,t=0,n=0
if(this.getActiveFiles().length){var i,r=_createForOfIteratorHelper(this.getActiveFiles())
try{for(r.s();!(i=r.n()).done;){var o=i.value
t+=o.upload.bytesSent,n+=o.upload.total}}catch(e){r.e(e)}finally{r.f()}e=100*t/n}else e=100
return this.emit("totaluploadprogress",e,n,t)}},{key:"_getParamName",value:function(e){return"function"==typeof this.options.paramName?this.options.paramName(e):"".concat(this.options.paramName).concat(this.options.uploadMultiple?"[".concat(e,"]"):"")}},{key:"_renameFile",value:function(e){return"function"!=typeof this.options.renameFile?e.name:this.options.renameFile(e)}},{key:"getFallbackForm",value:function(){var e,n
if(e=this.getExistingFallback())return e
var i='<div class="dz-fallback">'
this.options.dictFallbackText&&(i+="<p>".concat(this.options.dictFallbackText,"</p>")),i+='<input type="file" name="'.concat(this._getParamName(0),'" ').concat(this.options.uploadMultiple?'multiple="multiple"':void 0,' /><input type="submit" value="Upload!"></div>')
var r=t.createElement(i)
return"FORM"!==this.element.tagName?(n=t.createElement('<form action="'.concat(this.options.url,'" enctype="multipart/form-data" method="').concat(this.options.method,'"></form>'))).appendChild(r):(this.element.setAttribute("enctype","multipart/form-data"),this.element.setAttribute("method",this.options.method)),null!=n?n:r}},{key:"getExistingFallback",value:function(){for(var e=function(e){var t,n=_createForOfIteratorHelper(e)
try{for(n.s();!(t=n.n()).done;){var i=t.value
if(/(^| )fallback($| )/.test(i.className))return i}}catch(e){n.e(e)}finally{n.f()}},t=0,n=["div","form"];t<n.length;t++){var i,r=n[t]
if(i=e(this.element.getElementsByTagName(r)))return i}}},{key:"setupEventListeners",value:function(){return this.listeners.map((function(e){return function(){var t=[]
for(var n in e.events){var i=e.events[n]
t.push(e.element.addEventListener(n,i,!1))}return t}()}))}},{key:"removeEventListeners",value:function(){return this.listeners.map((function(e){return function(){var t=[]
for(var n in e.events){var i=e.events[n]
t.push(e.element.removeEventListener(n,i,!1))}return t}()}))}},{key:"disable",value:function(){var e=this
return this.clickableElements.forEach((function(e){return e.classList.remove("dz-clickable")})),this.removeEventListeners(),this.disabled=!0,this.files.map((function(t){return e.cancelUpload(t)}))}},{key:"enable",value:function(){return delete this.disabled,this.clickableElements.forEach((function(e){return e.classList.add("dz-clickable")})),this.setupEventListeners()}},{key:"filesize",value:function(e){var t=0,n="b"
if(0<e){for(var i=["tb","gb","mb","kb","b"],r=0;r<i.length;r++){var o=i[r]
if(Math.pow(this.options.filesizeBase,4-r)/10<=e){t=e/Math.pow(this.options.filesizeBase,4-r),n=o
break}}t=Math.round(10*t)/10}return"<strong>".concat(t,"</strong> ").concat(this.options.dictFileSizeUnits[n])}},{key:"_updateMaxFilesReachedClass",value:function(){return null!=this.options.maxFiles&&this.getAcceptedFiles().length>=this.options.maxFiles?(this.getAcceptedFiles().length===this.options.maxFiles&&this.emit("maxfilesreached",this.files),this.element.classList.add("dz-max-files-reached")):this.element.classList.remove("dz-max-files-reached")}},{key:"drop",value:function(e){if(e.dataTransfer){this.emit("drop",e)
for(var t=[],n=0;n<e.dataTransfer.files.length;n++)t[n]=e.dataTransfer.files[n]
if(t.length){var i=e.dataTransfer.items
i&&i.length&&null!=i[0].webkitGetAsEntry?this._addFilesFromItems(i):this.handleFiles(t)}this.emit("addedfiles",t)}}},{key:"paste",value:function(e){if(null!=__guard__(null!=e?e.clipboardData:void 0,(function(e){return e.items}))){this.emit("paste",e)
var t=e.clipboardData.items
return t.length?this._addFilesFromItems(t):void 0}}},{key:"handleFiles",value:function(e){var t,n=_createForOfIteratorHelper(e)
try{for(n.s();!(t=n.n()).done;){var i=t.value
this.addFile(i)}}catch(e){n.e(e)}finally{n.f()}}},{key:"_addFilesFromItems",value:function(e){var t=this
return function(){var n,i=[],r=_createForOfIteratorHelper(e)
try{for(r.s();!(n=r.n()).done;){var o,a=n.value
null!=a.webkitGetAsEntry&&(o=a.webkitGetAsEntry())?o.isFile?i.push(t.addFile(a.getAsFile())):o.isDirectory?i.push(t._addFilesFromDirectory(o,o.name)):i.push(void 0):null==a.getAsFile||null!=a.kind&&"file"!==a.kind?i.push(void 0):i.push(t.addFile(a.getAsFile()))}}catch(n){r.e(n)}finally{r.f()}return i}()}},{key:"_addFilesFromDirectory",value:function(e,t){function n(e){return __guardMethod__(console,"log",(function(t){return t.log(e)}))}var i=this,r=e.createReader()
return function e(){return r.readEntries((function(n){if(0<n.length){var r,o=_createForOfIteratorHelper(n)
try{for(o.s();!(r=o.n()).done;){var a=r.value
a.isFile?a.file((function(e){if(!i.options.ignoreHiddenFiles||"."!==e.name.substring(0,1))return e.fullPath="".concat(t,"https://coderthemes.com/").concat(e.name),i.addFile(e)})):a.isDirectory&&i._addFilesFromDirectory(a,"".concat(t,"https://coderthemes.com/").concat(a.name))}}catch(n){o.e(n)}finally{o.f()}e()}return null}),n)}()}},{key:"accept",value:function(e,n){this.options.maxFilesize&&e.size>1024*this.options.maxFilesize*1024?n(this.options.dictFileTooBig.replace("{{filesize}}",Math.round(e.size/1024/10.24)/100).replace("{{maxFilesize}}",this.options.maxFilesize)):t.isValidFile(e,this.options.acceptedFiles)?null!=this.options.maxFiles&&this.getAcceptedFiles().length>=this.options.maxFiles?(n(this.options.dictMaxFilesExceeded.replace("{{maxFiles}}",this.options.maxFiles)),this.emit("maxfilesexceeded",e)):this.options.accept.call(this,e,n):n(this.options.dictInvalidFileType)}},{key:"addFile",value:function(e){var n=this
e.upload={uuid:t.uuidv4(),progress:0,total:e.size,bytesSent:0,filename:this._renameFile(e)},this.files.push(e),e.status=t.ADDED,this.emit("addedfile",e),this._enqueueThumbnail(e),this.accept(e,(function(t){t?(e.accepted=!1,n._errorProcessing([e],t)):(e.accepted=!0,n.options.autoQueue&&n.enqueueFile(e)),n._updateMaxFilesReachedClass()}))}},{key:"enqueueFiles",value:function(e){var t,n=_createForOfIteratorHelper(e)
try{for(n.s();!(t=n.n()).done;){var i=t.value
this.enqueueFile(i)}}catch(e){n.e(e)}finally{n.f()}return null}},{key:"enqueueFile",value:function(e){var n=this
if(e.status!==t.ADDED||!0!==e.accepted)throw new Error("This file can't be queued because it has already been processed or was rejected.")
if(e.status=t.QUEUED,this.options.autoProcessQueue)return setTimeout((function(){return n.processQueue()}),0)}},{key:"_enqueueThumbnail",value:function(e){var t=this
if(this.options.createImageThumbnails&&e.type.match(/image.*/)&&e.size<=1024*this.options.maxThumbnailFilesize*1024)return this._thumbnailQueue.push(e),setTimeout((function(){return t._processThumbnailQueue()}),0)}},{key:"_processThumbnailQueue",value:function(){var e=this
if(!this._processingThumbnail&&0!==this._thumbnailQueue.length){this._processingThumbnail=!0
var t=this._thumbnailQueue.shift()
return this.createThumbnail(t,this.options.thumbnailWidth,this.options.thumbnailHeight,this.options.thumbnailMethod,!0,(function(n){return e.emit("thumbnail",t,n),e._processingThumbnail=!1,e._processThumbnailQueue()}))}}},{key:"removeFile",value:function(e){if(e.status===t.UPLOADING&&this.cancelUpload(e),this.files=without(this.files,e),this.emit("removedfile",e),0===this.files.length)return this.emit("reset")}},{key:"removeAllFiles",value:function(e){null==e&&(e=!1)
var n,i=_createForOfIteratorHelper(this.files.slice())
try{for(i.s();!(n=i.n()).done;){var r=n.value
r.status===t.UPLOADING&&!e||this.removeFile(r)}}catch(e){i.e(e)}finally{i.f()}return null}},{key:"resizeImage",value:function(e,n,i,r,o){var a=this
return this.createThumbnail(e,n,i,r,!0,(function(n,i){if(null==i)return o(e)
var r=a.options.resizeMimeType
null==r&&(r=e.type)
var s=i.toDataURL(r,a.options.resizeQuality)
return"image/jpeg"!==r&&"image/jpg"!==r||(s=ExifRestore.restore(e.dataURL,s)),o(t.dataURItoBlob(s))}))}},{key:"createThumbnail",value:function(e,t,n,i,r,o){var a=this,s=new FileReader
s.onload=function(){e.dataURL=s.result,"image/svg+xml"!==e.type?a.createThumbnailFromUrl(e,t,n,i,r,o):null!=o&&o(s.result)},s.readAsDataURL(e)}},{key:"displayExistingFile",value:function(e,t,n,i,r){var o=this,a=!(4<arguments.length&&void 0!==r)||r
this.emit("addedfile",e),this.emit("complete",e),a?(e.dataURL=t,this.createThumbnailFromUrl(e,this.options.thumbnailWidth,this.options.thumbnailHeight,this.options.resizeMethod,this.options.fixOrientation,(function(t){o.emit("thumbnail",e,t),n&&n()}),i)):(this.emit("thumbnail",e,t),n&&n())}},{key:"createThumbnailFromUrl",value:function(e,t,n,i,r,o,a){var s=this,l=document.createElement("img")
return a&&(l.crossOrigin=a),r="from-image"!=getComputedStyle(document.body).imageOrientation&&r,l.onload=function(){var a=function(e){return e(1)}
return"undefined"!=typeof EXIF&&null!==EXIF&&r&&(a=function(e){return EXIF.getData(l,(function(){return e(EXIF.getTag(this,"Orientation"))}))}),a((function(r){e.width=l.width,e.height=l.height
var a=s.options.resize.call(s,e,t,n,i),u=document.createElement("canvas"),c=u.getContext("2d")
switch(u.width=a.trgWidth,u.height=a.trgHeight,4<r&&(u.width=a.trgHeight,u.height=a.trgWidth),r){case 2:c.translate(u.width,0),c.scale(-1,1)
break
case 3:c.translate(u.width,u.height),c.rotate(Math.PI)
break
case 4:c.translate(0,u.height),c.scale(1,-1)
break
case 5:c.rotate(.5*Math.PI),c.scale(1,-1)
break
case 6:c.rotate(.5*Math.PI),c.translate(0,-u.width)
break
case 7:c.rotate(.5*Math.PI),c.translate(u.height,-u.width),c.scale(-1,1)
break
case 8:c.rotate(-.5*Math.PI),c.translate(-u.height,0)}drawImageIOSFix(c,l,null!=a.srcX?a.srcX:0,null!=a.srcY?a.srcY:0,a.srcWidth,a.srcHeight,null!=a.trgX?a.trgX:0,null!=a.trgY?a.trgY:0,a.trgWidth,a.trgHeight)
var d=u.toDataURL("image/png")
if(null!=o)return o(d,u)}))},null!=o&&(l.onerror=o),l.src=e.dataURL}},{key:"processQueue",value:function(){var e=this.options.parallelUploads,t=this.getUploadingFiles().length,n=t
if(!(e<=t)){var i=this.getQueuedFiles()
if(0<i.length){if(this.options.uploadMultiple)return this.processFiles(i.slice(0,e-t))
for(;n<e;){if(!i.length)return
this.processFile(i.shift()),n++}}}}},{key:"processFile",value:function(e){return this.processFiles([e])}},{key:"processFiles",value:function(e){var n,i=_createForOfIteratorHelper(e)
try{for(i.s();!(n=i.n()).done;){var r=n.value
r.processing=!0,r.status=t.UPLOADING,this.emit("processing",r)}}catch(e){i.e(e)}finally{i.f()}return this.options.uploadMultiple&&this.emit("processingmultiple",e),this.uploadFiles(e)}},{key:"_getFilesWithXhr",value:function(e){return this.files.filter((function(t){return t.xhr===e})).map((function(e){return e}))}},{key:"cancelUpload",value:function(e){if(e.status===t.UPLOADING){var n,i=this._getFilesWithXhr(e.xhr),r=_createForOfIteratorHelper(i)
try{for(r.s();!(n=r.n()).done;)n.value.status=t.CANCELED}catch(e){r.e(e)}finally{r.f()}void 0!==e.xhr&&e.xhr.abort()
var o,a=_createForOfIteratorHelper(i)
try{for(a.s();!(o=a.n()).done;){var s=o.value
this.emit("canceled",s)}}catch(e){a.e(e)}finally{a.f()}this.options.uploadMultiple&&this.emit("canceledmultiple",i)}else e.status!==t.ADDED&&e.status!==t.QUEUED||(e.status=t.CANCELED,this.emit("canceled",e),this.options.uploadMultiple&&this.emit("canceledmultiple",[e]))
if(this.options.autoProcessQueue)return this.processQueue()}},{key:"resolveOption",value:function(e){if("function"!=typeof e)return e
for(var t=arguments.length,n=new Array(1<t?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i]
return e.apply(this,n)}},{key:"uploadFile",value:function(e){return this.uploadFiles([e])}},{key:"uploadFiles",value:function(e){var n=this
this._transformFiles(e,(function(i){if(n.options.chunking){var r=i[0]
e[0].upload.chunked=n.options.chunking&&(n.options.forceChunking||r.size>n.options.chunkSize),e[0].upload.totalChunkCount=Math.ceil(r.size/n.options.chunkSize)}if(e[0].upload.chunked){var o=e[0],a=i[0]
o.upload.chunks=[]
var s=function(){for(var i=0;void 0!==o.upload.chunks[i];)i++
if(!(i>=o.upload.totalChunkCount)){var r=i*n.options.chunkSize,s=Math.min(r+n.options.chunkSize,a.size),l={name:n._getParamName(0),data:a.webkitSlice?a.webkitSlice(r,s):a.slice(r,s),filename:o.upload.filename,chunkIndex:i}
o.upload.chunks[i]={file:o,index:i,dataBlock:l,status:t.UPLOADING,progress:0,retries:0},n._uploadData(e,[l])}}
if(o.upload.finishedChunkUpload=function(i){var r=!0
i.status=t.SUCCESS,i.dataBlock=null,i.xhr=null
for(var a=0;a<o.upload.totalChunkCount;a++){if(void 0===o.upload.chunks[a])return s()
o.upload.chunks[a].status!==t.SUCCESS&&(r=!1)}r&&n.options.chunksUploaded(o,(function(){n._finished(e,"",null)}))},n.options.parallelChunkUploads)for(var l=0;l<o.upload.totalChunkCount;l++)s()
else s()}else{for(var u=[],c=0;c<e.length;c++)u[c]={name:n._getParamName(c),data:i[c],filename:e[c].upload.filename}
n._uploadData(e,u)}}))}},{key:"_getChunk",value:function(e,t){for(var n=0;n<e.upload.totalChunkCount;n++)if(void 0!==e.upload.chunks[n]&&e.upload.chunks[n].xhr===t)return e.upload.chunks[n]}},{key:"_uploadData",value:function(e,n){var i,r=this,o=new XMLHttpRequest,a=_createForOfIteratorHelper(e)
try{for(a.s();!(i=a.n()).done;)i.value.xhr=o}catch(n){a.e(n)}finally{a.f()}e[0].upload.chunked&&(e[0].upload.chunks[n[0].chunkIndex].xhr=o)
var s=this.resolveOption(this.options.method,e),l=this.resolveOption(this.options.url,e)
o.open(s,l,!0),o.timeout=this.resolveOption(this.options.timeout,e),o.withCredentials=!!this.options.withCredentials,o.onload=function(t){r._finishedUploading(e,o,t)},o.ontimeout=function(){r._handleUploadError(e,o,"Request timedout after ".concat(r.options.timeout/1e3," seconds"))},o.onerror=function(){r._handleUploadError(e,o)},(null!=o.upload?o.upload:o).onprogress=function(t){return r._updateFilesUploadProgress(e,o,t)}
var u={Accept:"application/json","Cache-Control":"no-cache","X-Requested-With":"XMLHttpRequest"}
for(var c in this.options.headers&&t.extend(u,this.options.headers),u){var d=u[c]
d&&o.setRequestHeader(c,d)}var p=new FormData
if(this.options.params){var h=this.options.params
for(var f in"function"==typeof h&&(h=h.call(this,e,o,e[0].upload.chunked?this._getChunk(e[0],o):null)),h){var m=h[f]
if(Array.isArray(m))for(var v=0;v<m.length;v++)p.append(f,m[v])
else p.append(f,m)}}var g,y=_createForOfIteratorHelper(e)
try{for(y.s();!(g=y.n()).done;){var F=g.value
this.emit("sending",F,o,p)}}catch(n){y.e(n)}finally{y.f()}this.options.uploadMultiple&&this.emit("sendingmultiple",e,o,p),this._addFormElementData(p)
for(var k=0;k<n.length;k++){var b=n[k]
p.append(b.name,b.data,b.filename)}this.submitRequest(o,p,e)}},{key:"_transformFiles",value:function(e,t){for(var n=this,i=[],r=0,o=function(o){n.options.transformFile.call(n,e[o],(function(n){i[o]=n,++r===e.length&&t(i)}))},a=0;a<e.length;a++)o(a)}},{key:"_addFormElementData",value:function(e){if("FORM"===this.element.tagName){var t,n=_createForOfIteratorHelper(this.element.querySelectorAll("input, textarea, select, button"))
try{for(n.s();!(t=n.n()).done;){var i=t.value,r=i.getAttribute("name"),o=i.getAttribute("type")
if(o=o&&o.toLowerCase(),null!=r)if("SELECT"===i.tagName&&i.hasAttribute("multiple")){var a,s=_createForOfIteratorHelper(i.options)
try{for(s.s();!(a=s.n()).done;){var l=a.value
l.selected&&e.append(r,l.value)}}catch(e){s.e(e)}finally{s.f()}}else(!o||"checkbox"!==o&&"radio"!==o||i.checked)&&e.append(r,i.value)}}catch(e){n.e(e)}finally{n.f()}}}},{key:"_updateFilesUploadProgress",value:function(e,t,n){var i
if(void 0!==n){if(i=100*n.loaded/n.total,e[0].upload.chunked){var r=e[0],o=this._getChunk(r,t)
o.progress=i,o.total=n.total,o.bytesSent=n.loaded,r.upload.progress=0,r.upload.total=0
for(var a=r.upload.bytesSent=0;a<r.upload.totalChunkCount;a++)void 0!==r.upload.chunks[a]&&void 0!==r.upload.chunks[a].progress&&(r.upload.progress+=r.upload.chunks[a].progress,r.upload.total+=r.upload.chunks[a].total,r.upload.bytesSent+=r.upload.chunks[a].bytesSent)
r.upload.progress=r.upload.progress/r.upload.totalChunkCount}else{var s,l=_createForOfIteratorHelper(e)
try{for(l.s();!(s=l.n()).done;){var u=s.value
u.upload.progress=i,u.upload.total=n.total,u.upload.bytesSent=n.loaded}}catch(e){l.e(e)}finally{l.f()}}var c,d=_createForOfIteratorHelper(e)
try{for(d.s();!(c=d.n()).done;){var p=c.value
this.emit("uploadprogress",p,p.upload.progress,p.upload.bytesSent)}}catch(e){d.e(e)}finally{d.f()}}else{var h=!0
i=100
var f,m=_createForOfIteratorHelper(e)
try{for(m.s();!(f=m.n()).done;){var v=f.value
100===v.upload.progress&&v.upload.bytesSent===v.upload.total||(h=!1),v.upload.progress=i,v.upload.bytesSent=v.upload.total}}catch(e){m.e(e)}finally{m.f()}if(h)return
var g,y=_createForOfIteratorHelper(e)
try{for(y.s();!(g=y.n()).done;){var F=g.value
this.emit("uploadprogress",F,i,F.upload.bytesSent)}}catch(e){y.e(e)}finally{y.f()}}}},{key:"_finishedUploading",value:function(e,n,i){var r
if(e[0].status!==t.CANCELED&&4===n.readyState){if("arraybuffer"!==n.responseType&&"blob"!==n.responseType&&(r=n.responseText,n.getResponseHeader("content-type")&&~n.getResponseHeader("content-type").indexOf("application/json")))try{r=JSON.parse(r)}catch(e){i=e,r="Invalid JSON response from server."}this._updateFilesUploadProgress(e),200<=n.status&&n.status<300?e[0].upload.chunked?e[0].upload.finishedChunkUpload(this._getChunk(e[0],n)):this._finished(e,r,i):this._handleUploadError(e,n,r)}}},{key:"_handleUploadError",value:function(e,n,i){if(e[0].status!==t.CANCELED){if(e[0].upload.chunked&&this.options.retryChunks){var r=this._getChunk(e[0],n)
if(r.retries++<this.options.retryChunksLimit)return void this._uploadData(e,[r.dataBlock])
console.warn("Retried this chunk too often. Giving up.")}this._errorProcessing(e,i||this.options.dictResponseError.replace("{{statusCode}}",n.status),n)}}},{key:"submitRequest",value:function(e,t){e.send(t)}},{key:"_finished",value:function(e,n,i){var r,o=_createForOfIteratorHelper(e)
try{for(o.s();!(r=o.n()).done;){var a=r.value
a.status=t.SUCCESS,this.emit("success",a,n,i),this.emit("complete",a)}}catch(e){o.e(e)}finally{o.f()}if(this.options.uploadMultiple&&(this.emit("successmultiple",e,n,i),this.emit("completemultiple",e)),this.options.autoProcessQueue)return this.processQueue()}},{key:"_errorProcessing",value:function(e,n,i){var r,o=_createForOfIteratorHelper(e)
try{for(o.s();!(r=o.n()).done;){var a=r.value
a.status=t.ERROR,this.emit("error",a,n,i),this.emit("complete",a)}}catch(e){o.e(e)}finally{o.f()}if(this.options.uploadMultiple&&(this.emit("errormultiple",e,n,i),this.emit("completemultiple",e)),this.options.autoProcessQueue)return this.processQueue()}}],[{key:"uuidv4",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(e){var t=16*Math.random()|0
return("x"===e?t:3&t|8).toString(16)}))}}]),t}()
Dropzone.initClass(),Dropzone.version="5.7.2",Dropzone.options={},Dropzone.optionsForElement=function(e){return e.getAttribute("id")?Dropzone.options[camelize(e.getAttribute("id"))]:void 0},Dropzone.instances=[],Dropzone.forElement=function(e){if("string"==typeof e&&(e=document.querySelector(e)),null==(null!=e?e.dropzone:void 0))throw new Error("No Dropzone found for given element. This is probably because you're trying to access it before Dropzone had the time to initialize. Use the `init` option to setup any additional observers on your Dropzone.")
return e.dropzone},Dropzone.autoDiscover=!0,Dropzone.discover=function(){var e
if(document.querySelectorAll)e=document.querySelectorAll(".dropzone")
else{e=[]
var t=function(t){return function(){var n,i=[],r=_createForOfIteratorHelper(t)
try{for(r.s();!(n=r.n()).done;){var o=n.value;/(^| )dropzone($| )/.test(o.className)?i.push(e.push(o)):i.push(void 0)}}catch(n){r.e(n)}finally{r.f()}return i}()}
t(document.getElementsByTagName("div")),t(document.getElementsByTagName("form"))}return function(){var t,n=[],i=_createForOfIteratorHelper(e)
try{for(i.s();!(t=i.n()).done;){var r=t.value
!1!==Dropzone.optionsForElement(r)?n.push(new Dropzone(r)):n.push(void 0)}}catch(t){i.e(t)}finally{i.f()}return n}()},Dropzone.blacklistedBrowsers=[/opera.*(Macintosh|Windows Phone).*version\/12/i],Dropzone.isBrowserSupported=function(){var e=!0
if(window.File&&window.FileReader&&window.FileList&&window.Blob&&window.FormData&&document.querySelector)if("classList"in document.createElement("a")){var t,n=_createForOfIteratorHelper(Dropzone.blacklistedBrowsers)
try{for(n.s();!(t=n.n()).done;)t.value.test(navigator.userAgent)&&(e=!1)}catch(e){n.e(e)}finally{n.f()}}else e=!1
else e=!1
return e},Dropzone.dataURItoBlob=function(e){for(var t=atob(e.split(",")[1]),n=e.split(",")[0].split(":")[1].split(";")[0],i=new ArrayBuffer(t.length),r=new Uint8Array(i),o=0,a=t.length,s=0<=a;s?o<=a:a<=o;s?o++:o--)r[o]=t.charCodeAt(o)
return new Blob([i],{type:n})}
var without=function(e,t){return e.filter((function(e){return e!==t})).map((function(e){return e}))},camelize=function(e){return e.replace(/[\-_](\w)/g,(function(e){return e.charAt(1).toUpperCase()}))}
Dropzone.createElement=function(e){var t=document.createElement("div")
return t.innerHTML=e,t.childNodes[0]},Dropzone.elementInside=function(e,t){if(e===t)return!0
for(;e=e.parentNode;)if(e===t)return!0
return!1},Dropzone.getElement=function(e,t){var n
if("string"==typeof e?n=document.querySelector(e):null!=e.nodeType&&(n=e),null==n)throw new Error("Invalid `".concat(t,"` option provided. Please provide a CSS selector or a plain HTML element."))
return n},Dropzone.getElements=function(e,t){var n,i
if(e instanceof Array){i=[]
try{var r,o=_createForOfIteratorHelper(e)
try{for(o.s();!(r=o.n()).done;)n=r.value,i.push(this.getElement(n,t))}catch(e){o.e(e)}finally{o.f()}}catch(e){i=null}}else if("string"==typeof e){i=[]
var a,s=_createForOfIteratorHelper(document.querySelectorAll(e))
try{for(s.s();!(a=s.n()).done;)n=a.value,i.push(n)}catch(e){s.e(e)}finally{s.f()}}else null!=e.nodeType&&(i=[e])
if(null==i||!i.length)throw new Error("Invalid `".concat(t,"` option provided. Please provide a CSS selector, a plain HTML element or a list of those."))
return i},Dropzone.confirm=function(e,t,n){return window.confirm(e)?t():null!=n?n():void 0},Dropzone.isValidFile=function(e,t){if(!t)return!0
t=t.split(",")
var n,i=e.type,r=i.replace(/\/.*$/,""),o=_createForOfIteratorHelper(t)
try{for(o.s();!(n=o.n()).done;){var a=n.value
if("."===(a=a.trim()).charAt(0)){if(-1!==e.name.toLowerCase().indexOf(a.toLowerCase(),e.name.length-a.length))return!0}else if(/\/\*$/.test(a)){if(r===a.replace(/\/.*$/,""))return!0}else if(i===a)return!0}}catch(e){o.e(e)}finally{o.f()}return!1},"undefined"!=typeof jQuery&&null!==jQuery&&(jQuery.fn.dropzone=function(e){return this.each((function(){return new Dropzone(this,e)}))}),"undefined"!=typeof module&&null!==module?module.exports=Dropzone:window.Dropzone=Dropzone,Dropzone.ADDED="added",Dropzone.QUEUED="queued",Dropzone.ACCEPTED=Dropzone.QUEUED,Dropzone.UPLOADING="uploading",Dropzone.PROCESSING=Dropzone.UPLOADING,Dropzone.CANCELED="canceled",Dropzone.ERROR="error",Dropzone.SUCCESS="success"
var detectVerticalSquash=function(e){e.naturalWidth
var t=e.naturalHeight,n=document.createElement("canvas")
n.width=1,n.height=t
var i=n.getContext("2d")
i.drawImage(e,0,0)
for(var r=i.getImageData(1,0,1,t).data,o=0,a=t,s=t;o<s;)0===r[4*(s-1)+3]?a=s:o=s,s=a+o>>1
var l=s/t
return 0==l?1:l},drawImageIOSFix=function(e,t,n,i,r,o,a,s,l,u){var c=detectVerticalSquash(t)
return e.drawImage(t,n,i,r,o,a,s,l,u/c)},ExifRestore=function(){function e(){_classCallCheck(this,e)}return _createClass(e,null,[{key:"initClass",value:function(){this.KEY_STR="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="}},{key:"encode64",value:function(e){for(var t="",n=void 0,i=void 0,r="",o=void 0,a=void 0,s=void 0,l="",u=0;o=(n=e[u++])>>2,a=(3&n)<<4|(i=e[u++])>>4,s=(15&i)<<2|(r=e[u++])>>6,l=63&r,isNaN(i)?s=l=64:isNaN(r)&&(l=64),t=t+this.KEY_STR.charAt(o)+this.KEY_STR.charAt(a)+this.KEY_STR.charAt(s)+this.KEY_STR.charAt(l),n=i=r="",o=a=s=l="",u<e.length;);return t}},{key:"restore",value:function(e,t){if(!e.match("data:image/jpeg;base64,"))return t
var n=this.decode64(e.replace("data:image/jpeg;base64,","")),i=this.slice2Segments(n),r=this.exifManipulation(t,i)
return"data:image/jpeg;base64,".concat(this.encode64(r))}},{key:"exifManipulation",value:function(e,t){var n=this.getExifArray(t),i=this.insertExif(e,n)
return new Uint8Array(i)}},{key:"getExifArray",value:function(e){for(var t=void 0,n=0;n<e.length;){if(255===(t=e[n])[0]&225===t[1])return t
n++}return[]}},{key:"insertExif",value:function(e,t){var n=e.replace("data:image/jpeg;base64,",""),i=this.decode64(n),r=i.indexOf(255,3),o=i.slice(0,r),a=i.slice(r),s=o
return(s=s.concat(t)).concat(a)}},{key:"slice2Segments",value:function(e){for(var t=0,n=[];!(255===e[t]&218===e[t+1]);){if(255===e[t]&216===e[t+1])t+=2
else{var i=t+(256*e[t+2]+e[t+3])+2,r=e.slice(t,i)
n.push(r),t=i}if(t>e.length)break}return n}},{key:"decode64",value:function(e){var t=void 0,n=void 0,i="",r=void 0,o=void 0,a="",s=0,l=[]
for(/[^A-Za-z0-9\+\/\=]/g.exec(e)&&console.warn("There were invalid base64 characters in the input text.\nValid base64 characters are A-Z, a-z, 0-9, '+', 'https://coderthemes.com/',and '='\nExpect errors in decoding."),e=e.replace(/[^A-Za-z0-9\+\/\=]/g,"");t=this.KEY_STR.indexOf(e.charAt(s++))<<2|(r=this.KEY_STR.indexOf(e.charAt(s++)))>>4,n=(15&r)<<4|(o=this.KEY_STR.indexOf(e.charAt(s++)))>>2,i=(3&o)<<6|(a=this.KEY_STR.indexOf(e.charAt(s++))),l.push(t),64!==o&&l.push(n),64!==a&&l.push(i),t=n=i="",r=o=a="",s<e.length;);return l}}]),e}()
ExifRestore.initClass()
var contentLoaded=function(e,t){function n(r){if("readystatechange"!==r.type||"complete"===o.readyState)return("load"===r.type?e:o)[l](u+r.type,n,!1),!i&&(i=!0)?t.call(e,r.type||r):void 0}var i=!1,r=!0,o=e.document,a=o.documentElement,s=o.addEventListener?"addEventListener":"attachEvent",l=o.addEventListener?"removeEventListener":"detachEvent",u=o.addEventListener?"":"on"
if("complete"!==o.readyState){if(o.createEventObject&&a.doScroll){try{r=!e.frameElement}catch(r){}r&&function e(){try{a.doScroll("left")}catch(r){return void setTimeout(e,50)}return n("poll")}()}return o[s](u+"DOMContentLoaded",n,!1),o[s](u+"readystatechange",n,!1),e[s](u+"load",n,!1)}}
function __guard__(e,t){return null!=e?t(e):void 0}function __guardMethod__(e,t,n){return null!=e&&"function"==typeof e[t]?n(e,t):void 0}Dropzone._autoDiscoverFunction=function(){if(Dropzone.autoDiscover)return Dropzone.discover()},contentLoaded(window,Dropzone._autoDiscoverFunction)
