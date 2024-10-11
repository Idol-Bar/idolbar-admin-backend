/*!
 DataTables 1.10.21
 ©2008-2020 SpryMedia Ltd - datatables.net/license
*/
(function(t){"function"==typeof define&&define.amd?define(["jquery"],(function(e){return t(e,window,document)})):"object"==typeof exports?module.exports=function(e,n){return e||(e=window),n||(n="undefined"!=typeof window?require("jquery"):require("jquery")(e)),t(n,e,e.document)}:t(jQuery,window,document)})((function(t,e,n,a){function r(e){var n,a,o={}
t.each(e,(function(t){(n=t.match(/^([^A-Z]+?)([A-Z])/))&&-1!=="a aa ai ao as b fn i m o s ".indexOf(n[1]+" ")&&(a=t.replace(n[0],n[2].toLowerCase()),o[a]=t,"o"===n[1]&&r(e[t]))})),e._hungarianMap=o}function o(e,n,i){var l
e._hungarianMap||r(e),t.each(n,(function(r){(l=e._hungarianMap[r])===a||!i&&n[l]!==a||("o"===l.charAt(0)?(n[l]||(n[l]={}),t.extend(!0,n[l],n[r]),o(e[l],n[l],i)):n[l]=n[r])}))}function i(t){var e=qt.defaults.oLanguage,n=e.sDecimal
if(n&&Et(n),t){var a=t.sZeroRecords
!t.sEmptyTable&&a&&"No data available in table"===e.sEmptyTable&&Rt(t,t,"sZeroRecords","sEmptyTable"),!t.sLoadingRecords&&a&&"Loading..."===e.sLoadingRecords&&Rt(t,t,"sZeroRecords","sLoadingRecords"),t.sInfoThousands&&(t.sThousands=t.sInfoThousands),(t=t.sDecimal)&&n!==t&&Et(t)}}function l(t){if(ue(t,"ordering","bSort"),ue(t,"orderMulti","bSortMulti"),ue(t,"orderClasses","bSortClasses"),ue(t,"orderCellsTop","bSortCellsTop"),ue(t,"order","aaSorting"),ue(t,"orderFixed","aaSortingFixed"),ue(t,"paging","bPaginate"),ue(t,"pagingType","sPaginationType"),ue(t,"pageLength","iDisplayLength"),ue(t,"searching","bFilter"),"boolean"==typeof t.sScrollX&&(t.sScrollX=t.sScrollX?"100%":""),"boolean"==typeof t.scrollX&&(t.scrollX=t.scrollX?"100%":""),t=t.aoSearchCols)for(var e=0,n=t.length;e<n;e++)t[e]&&o(qt.models.oSearch,t[e])}function s(e){ue(e,"orderable","bSortable"),ue(e,"orderData","aDataSort"),ue(e,"orderSequence","asSorting"),ue(e,"orderDataType","sortDataType")
var n=e.aDataSort
"number"==typeof n&&!t.isArray(n)&&(e.aDataSort=[n])}function u(n){if(!qt.__browser){var a={}
qt.__browser=a
var r=t("<div/>").css({position:"fixed",top:0,left:-1*t(e).scrollLeft(),height:1,width:1,overflow:"hidden"}).append(t("<div/>").css({position:"absolute",top:1,left:1,width:100,overflow:"scroll"}).append(t("<div/>").css({width:"100%",height:10}))).appendTo("body"),o=r.children(),i=o.children()
a.barWidth=o[0].offsetWidth-o[0].clientWidth,a.bScrollOversize=100===i[0].offsetWidth&&100!==o[0].clientWidth,a.bScrollbarLeft=1!==Math.round(i.offset().left),a.bBounding=!!r[0].getBoundingClientRect().width,r.remove()}t.extend(n.oBrowser,qt.__browser),n.oScroll.iBarWidth=qt.__browser.barWidth}function c(t,e,n,r,o,i){var l,s=!1
for(n!==a&&(l=n,s=!0);r!==o;)t.hasOwnProperty(r)&&(l=s?e(l,t[r],r,t):t[r],s=!0,r+=i)
return l}function f(e,a){var r=qt.defaults.column,o=e.aoColumns.length
r=t.extend({},qt.models.oColumn,r,{nTh:a||n.createElement("th"),sTitle:r.sTitle?r.sTitle:a?a.innerHTML:"",aDataSort:r.aDataSort?r.aDataSort:[o],mData:r.mData?r.mData:o,idx:o})
e.aoColumns.push(r),(r=e.aoPreSearchCols)[o]=t.extend({},qt.models.oSearch,r[o]),d(e,o,t(a).data())}function d(e,n,r){n=e.aoColumns[n]
var i=e.oClasses,l=t(n.nTh)
if(!n.sWidthOrig){n.sWidthOrig=l.attr("width")||null
var u=(l.attr("style")||"").match(/width:\s*(\d+[pxem%]+)/)
u&&(n.sWidthOrig=u[1])}r!==a&&null!==r&&(s(r),o(qt.defaults.column,r,!0),r.mDataProp!==a&&!r.mData&&(r.mData=r.mDataProp),r.sType&&(n._sManualType=r.sType),r.className&&!r.sClass&&(r.sClass=r.className),r.sClass&&l.addClass(r.sClass),t.extend(n,r),Rt(n,r,"sWidth","sWidthOrig"),r.iDataSort!==a&&(n.aDataSort=[r.iDataSort]),Rt(n,r,"aDataSort"))
var c=n.mData,f=w(c),d=n.mRender?w(n.mRender):null
r=function(t){return"string"==typeof t&&-1!==t.indexOf("@")}
n._bAttrSrc=t.isPlainObject(c)&&(r(c.sort)||r(c.type)||r(c.filter)),n._setter=null,n.fnGetData=function(t,e,n){var r=f(t,e,a,n)
return d&&e?d(r,e,t,n):r},n.fnSetData=function(t,e,n){return x(c)(t,e,n)},"number"!=typeof c&&(e._rowReadObject=!0),e.oFeatures.bSort||(n.bSortable=!1,l.addClass(i.sSortableNone)),e=-1!==t.inArray("asc",n.asSorting),r=-1!==t.inArray("desc",n.asSorting),n.bSortable&&(e||r)?e&&!r?(n.sSortingClass=i.sSortableAsc,n.sSortingClassJUI=i.sSortJUIAscAllowed):!e&&r?(n.sSortingClass=i.sSortableDesc,n.sSortingClassJUI=i.sSortJUIDescAllowed):(n.sSortingClass=i.sSortable,n.sSortingClassJUI=i.sSortJUI):(n.sSortingClass=i.sSortableNone,n.sSortingClassJUI="")}function h(t){if(!1!==t.oFeatures.bAutoWidth){var e=t.aoColumns
gt(t)
for(var n=0,a=e.length;n<a;n++)e[n].nTh.style.width=e[n].sWidth}(""!==(e=t.oScroll).sY||""!==e.sX)&&ht(t),Ht(t,null,"column-sizing",[t])}function p(t,e){var n=m(t,"bVisible")
return"number"==typeof n[e]?n[e]:null}function g(e,n){var a=m(e,"bVisible")
return-1!==(a=t.inArray(n,a))?a:null}function b(e){var n=0
return t.each(e.aoColumns,(function(e,a){a.bVisible&&"none"!==t(a.nTh).css("display")&&n++})),n}function m(e,n){var a=[]
return t.map(e.aoColumns,(function(t,e){t[n]&&a.push(e)})),a}function S(t){var e,n,r,o,i,l,s,u,c,f=t.aoColumns,d=t.aoData,h=qt.ext.type.detect
for(e=0,n=f.length;e<n;e++)if(c=[],!(s=f[e]).sType&&s._sManualType)s.sType=s._sManualType
else if(!s.sType){for(r=0,o=h.length;r<o;r++){for(i=0,l=d.length;i<l&&(c[i]===a&&(c[i]=_(t,i,e,"type")),(u=h[r](c[i],t))||r===h.length-1)&&"html"!==u;i++);if(u){s.sType=u
break}}s.sType||(s.sType="string")}}function v(e,n,r,o){var i,l,s,u,c,d,h=e.aoColumns
if(n)for(i=n.length-1;0<=i;i--){var p=(d=n[i]).targets!==a?d.targets:d.aTargets
for(t.isArray(p)||(p=[p]),l=0,s=p.length;l<s;l++)if("number"==typeof p[l]&&0<=p[l]){for(;h.length<=p[l];)f(e)
o(p[l],d)}else if("number"==typeof p[l]&&0>p[l])o(h.length+p[l],d)
else if("string"==typeof p[l])for(u=0,c=h.length;u<c;u++)("_all"==p[l]||t(h[u].nTh).hasClass(p[l]))&&o(u,d)}if(r)for(i=0,e=r.length;i<e;i++)o(i,r[i])}function D(e,n,r,o){var i=e.aoData.length,l=t.extend(!0,{},qt.models.oRow,{src:r?"dom":"data",idx:i})
l._aData=n,e.aoData.push(l)
for(var s=e.aoColumns,u=0,c=s.length;u<c;u++)s[u].sType=null
return e.aiDisplayMaster.push(i),(n=e.rowIdFn(n))!==a&&(e.aIds[n]=l),(r||!e.oFeatures.bDeferRender)&&P(e,i,r,o),i}function y(e,n){var a
return n instanceof t||(n=t(n)),n.map((function(t,n){return a=R(e,n),D(e,a.data,n,a.cells)}))}function _(t,e,n,r){var o=t.iDraw,i=t.aoColumns[n],l=t.aoData[e]._aData,s=i.sDefaultContent,u=i.fnGetData(l,r,{settings:t,row:e,col:n})
if(u===a)return t.iDrawError!=o&&null===s&&(Lt(t,0,"Requested unknown parameter "+("function"==typeof i.mData?"{function}":"'"+i.mData+"'")+" for row "+e+", column "+n,4),t.iDrawError=o),s
if(u!==l&&null!==u||null===s||r===a){if("function"==typeof u)return u.call(l)}else u=s
return null===u&&"display"==r?"":u}function T(t,e,n,a){t.aoColumns[n].fnSetData(t.aoData[e]._aData,a,{settings:t,row:e,col:n})}function C(e){return t.map(e.match(/(\\.|[^\.])+/g)||[""],(function(t){return t.replace(/\\\./g,".")}))}function w(e){if(t.isPlainObject(e)){var n={}
return t.each(e,(function(t,e){e&&(n[t]=w(e))})),function(t,e,r,o){var i=n[e]||n._
return i!==a?i(t,e,r,o):t}}if(null===e)return function(t){return t}
if("function"==typeof e)return function(t,n,a,r){return e(t,n,a,r)}
if("string"==typeof e&&(-1!==e.indexOf(".")||-1!==e.indexOf("[")||-1!==e.indexOf("("))){var r=function(e,n,o){var i,l
if(""!==o)for(var s=0,u=(l=C(o)).length;s<u;s++){if(o=l[s].match(ce),i=l[s].match(fe),o){if(l[s]=l[s].replace(ce,""),""!==l[s]&&(e=e[l[s]]),i=[],l.splice(0,s+1),l=l.join("."),t.isArray(e))for(s=0,u=e.length;s<u;s++)i.push(r(e[s],n,l))
e=""===(e=o[0].substring(1,o[0].length-1))?i:i.join(e)
break}if(i)l[s]=l[s].replace(fe,""),e=e[l[s]]()
else{if(null===e||e[l[s]]===a)return a
e=e[l[s]]}}return e}
return function(t,n){return r(t,n,e)}}return function(t){return t[e]}}function x(e){if(t.isPlainObject(e))return x(e._)
if(null===e)return function(){}
if("function"==typeof e)return function(t,n,a){e(t,"set",n,a)}
if("string"==typeof e&&(-1!==e.indexOf(".")||-1!==e.indexOf("[")||-1!==e.indexOf("("))){var n=function(e,r,o){var i
i=(o=C(o))[o.length-1]
for(var l,s,u=0,c=o.length-1;u<c;u++){if(l=o[u].match(ce),s=o[u].match(fe),l){if(o[u]=o[u].replace(ce,""),e[o[u]]=[],(i=o.slice()).splice(0,u+1),l=i.join("."),t.isArray(r))for(s=0,c=r.length;s<c;s++)n(i={},r[s],l),e[o[u]].push(i)
else e[o[u]]=r
return}s&&(o[u]=o[u].replace(fe,""),e=e[o[u]](r)),null!==e[o[u]]&&e[o[u]]!==a||(e[o[u]]={}),e=e[o[u]]}i.match(fe)?e[i.replace(fe,"")](r):e[i.replace(ce,"")]=r}
return function(t,a){return n(t,a,e)}}return function(t,n){t[e]=n}}function I(t){return re(t.aoData,"_aData")}function A(t){t.aoData.length=0,t.aiDisplayMaster.length=0,t.aiDisplay.length=0,t.aIds={}}function F(t,e,n){for(var r=-1,o=0,i=t.length;o<i;o++)t[o]==e?r=o:t[o]>e&&t[o]--;-1!=r&&n===a&&t.splice(r,1)}function L(t,e,n,r){var o,i=t.aoData[e],l=function(n,a){for(;n.childNodes.length;)n.removeChild(n.firstChild)
n.innerHTML=_(t,e,a,"display")}
if("dom"!==n&&(n&&"auto"!==n||"dom"!==i.src)){var s=i.anCells
if(s)if(r!==a)l(s[r],r)
else for(n=0,o=s.length;n<o;n++)l(s[n],n)}else i._aData=R(t,i,r,r===a?a:i._aData).data
if(i._aSortData=null,i._aFilterData=null,l=t.aoColumns,r!==a)l[r].sType=null
else{for(n=0,o=l.length;n<o;n++)l[n].sType=null
j(t,i)}}function R(e,n,r,o){var i,l,s,u=[],c=n.firstChild,f=0,d=e.aoColumns,h=e._rowReadObject,p=(o=o!==a?o:h?{}:[],function(t,e){if("string"==typeof t){var n=t.indexOf("@");-1!==n&&(n=t.substring(n+1),x(t)(o,e.getAttribute(n)))}}),g=function(e){r!==a&&r!==f||(l=d[f],s=t.trim(e.innerHTML),l&&l._bAttrSrc?(x(l.mData._)(o,s),p(l.mData.sort,e),p(l.mData.type,e),p(l.mData.filter,e)):h?(l._setter||(l._setter=x(l.mData)),l._setter(o,s)):o[f]=s),f++}
if(c)for(;c;)"TD"!=(i=c.nodeName.toUpperCase())&&"TH"!=i||(g(c),u.push(c)),c=c.nextSibling
else for(c=0,i=(u=n.anCells).length;c<i;c++)g(u[c])
return(n=n.firstChild?n:n.nTr)&&(n=n.getAttribute("id"))&&x(e.rowId)(o,n),{data:o,cells:u}}function P(e,a,r,o){var i,l,s,u,c,f,d=e.aoData[a],h=d._aData,p=[]
if(null===d.nTr){for(i=r||n.createElement("tr"),d.nTr=i,d.anCells=p,i._DT_RowIndex=a,j(e,d),u=0,c=e.aoColumns.length;u<c;u++)s=e.aoColumns[u],(l=(f=!r)?n.createElement(s.sCellType):o[u])._DT_CellIndex={row:a,column:u},p.push(l),!f&&(r&&!s.mRender&&s.mData===u||t.isPlainObject(s.mData)&&s.mData._===u+".display")||(l.innerHTML=_(e,a,u,"display")),s.sClass&&(l.className+=" "+s.sClass),s.bVisible&&!r?i.appendChild(l):!s.bVisible&&r&&l.parentNode.removeChild(l),s.fnCreatedCell&&s.fnCreatedCell.call(e.oInstance,l,_(e,a,u),h,a,u)
Ht(e,"aoRowCreatedCallback",null,[i,h,a,p])}d.nTr.setAttribute("role","row")}function j(e,n){var a=n.nTr,r=n._aData
if(a){var o=e.rowIdFn(r)
o&&(a.id=o),r.DT_RowClass&&(o=r.DT_RowClass.split(" "),n.__rowc=n.__rowc?se(n.__rowc.concat(o)):o,t(a).removeClass(n.__rowc.join(" ")).addClass(r.DT_RowClass)),r.DT_RowAttr&&t(a).attr(r.DT_RowAttr),r.DT_RowData&&t(a).data(r.DT_RowData)}}function N(e){var n,a,r,o,i,l=e.nTHead,s=e.nTFoot,u=0===t("th, td",l).length,c=e.oClasses,f=e.aoColumns
for(u&&(o=t("<tr/>").appendTo(l)),n=0,a=f.length;n<a;n++)i=f[n],r=t(i.nTh).addClass(i.sClass),u&&r.appendTo(o),e.oFeatures.bSort&&(r.addClass(i.sSortingClass),!1!==i.bSortable&&(r.attr("tabindex",e.iTabIndex).attr("aria-controls",e.sTableId),Ct(e,i.nTh,n))),i.sTitle!=r[0].innerHTML&&r.html(i.sTitle),kt(e,"header")(e,r,i,c)
if(u&&W(e.aoHeader,l),t(l).find(">tr").attr("role","row"),t(l).find(">tr>th, >tr>td").addClass(c.sHeaderTH),t(s).find(">tr>th, >tr>td").addClass(c.sFooterTH),null!==s)for(n=0,a=(e=e.aoFooter[0]).length;n<a;n++)(i=f[n]).nTf=e[n].cell,i.sClass&&t(i.nTf).addClass(i.sClass)}function H(e,n,r){var o,i,l,s,u=[],c=[],f=e.aoColumns.length
if(n){for(r===a&&(r=!1),o=0,i=n.length;o<i;o++){for(u[o]=n[o].slice(),u[o].nTr=n[o].nTr,l=f-1;0<=l;l--)!e.aoColumns[l].bVisible&&!r&&u[o].splice(l,1)
c.push([])}for(o=0,i=u.length;o<i;o++){if(e=u[o].nTr)for(;l=e.firstChild;)e.removeChild(l)
for(l=0,n=u[o].length;l<n;l++)if(s=f=1,c[o][l]===a){for(e.appendChild(u[o][l].cell),c[o][l]=1;u[o+f]!==a&&u[o][l].cell==u[o+f][l].cell;)c[o+f][l]=1,f++
for(;u[o][l+s]!==a&&u[o][l].cell==u[o][l+s].cell;){for(r=0;r<f;r++)c[o+r][l+s]=1
s++}t(u[o][l].cell).attr("rowspan",f).attr("colspan",s)}}}}function O(e){var n=Ht(e,"aoPreDrawCallback","preDraw",[e])
if(-1!==t.inArray(!1,n))ft(e,!1)
else{n=[]
var r=0,o=e.asStripeClasses,i=o.length,l=e.oLanguage,s=e.iInitDisplayStart,u="ssp"==Mt(e),c=e.aiDisplay
e.bDrawing=!0,s!==a&&-1!==s&&(e._iDisplayStart=u?s:s>=e.fnRecordsDisplay()?0:s,e.iInitDisplayStart=-1)
s=e._iDisplayStart
var f=e.fnDisplayEnd()
if(e.bDeferLoading)e.bDeferLoading=!1,e.iDraw++,ft(e,!1)
else if(u){if(!e.bDestroying&&!U(e))return}else e.iDraw++
if(0!==c.length)for(l=u?e.aoData.length:f,u=u?0:s;u<l;u++){var d=c[u],h=e.aoData[d]
null===h.nTr&&P(e,d)
var p=h.nTr
if(0!==i){var g=o[r%i]
h._sRowStripe!=g&&(t(p).removeClass(h._sRowStripe).addClass(g),h._sRowStripe=g)}Ht(e,"aoRowCallback",null,[p,h._aData,r,u,d]),n.push(p),r++}else r=l.sZeroRecords,1==e.iDraw&&"ajax"==Mt(e)?r=l.sLoadingRecords:l.sEmptyTable&&0===e.fnRecordsTotal()&&(r=l.sEmptyTable),n[0]=t("<tr/>",{class:i?o[0]:""}).append(t("<td />",{valign:"top",colSpan:b(e),class:e.oClasses.sRowEmpty}).html(r))[0]
Ht(e,"aoHeaderCallback","header",[t(e.nTHead).children("tr")[0],I(e),s,f,c]),Ht(e,"aoFooterCallback","footer",[t(e.nTFoot).children("tr")[0],I(e),s,f,c]),(o=t(e.nTBody)).children().detach(),o.append(t(n)),Ht(e,"aoDrawCallback","draw",[e]),e.bSorted=!1,e.bFiltered=!1,e.bDrawing=!1}}function k(t,e){var n=t.oFeatures,a=n.bFilter
n.bSort&&yt(t),a?G(t,t.oPreviousSearch):t.aiDisplay=t.aiDisplayMaster.slice(),!0!==e&&(t._iDisplayStart=0),t._drawHold=e,O(t),t._drawHold=!1}function M(e){var n=e.oClasses,a=t(e.nTable),r=(a=t("<div/>").insertBefore(a),e.oFeatures),o=t("<div/>",{id:e.sTableId+"_wrapper",class:n.sWrapper+(e.nTFoot?"":" "+n.sNoFooter)})
e.nHolding=a[0],e.nTableWrapper=o[0],e.nTableReinsertBefore=e.nTable.nextSibling
for(var i,l,s,u,c,f,d=e.sDom.split(""),h=0;h<d.length;h++){if(i=null,"<"==(l=d[h])){if(s=t("<div/>")[0],"'"==(u=d[h+1])||'"'==u){for(c="",f=2;d[h+f]!=u;)c+=d[h+f],f++
"H"==c?c=n.sJUIHeader:"F"==c&&(c=n.sJUIFooter),-1!=c.indexOf(".")?(u=c.split("."),s.id=u[0].substr(1,u[0].length-1),s.className=u[1]):"#"==c.charAt(0)?s.id=c.substr(1,c.length-1):s.className=c,h+=f}o.append(s),o=t(s)}else if(">"==l)o=o.parent()
else if("l"==l&&r.bPaginate&&r.bLengthChange)i=lt(e)
else if("f"==l&&r.bFilter)i=q(e)
else if("r"==l&&r.bProcessing)i=ct(e)
else if("t"==l)i=dt(e)
else if("i"==l&&r.bInfo)i=et(e)
else if("p"==l&&r.bPaginate)i=st(e)
else if(0!==qt.ext.feature.length)for(f=0,u=(s=qt.ext.feature).length;f<u;f++)if(l==s[f].cFeature){i=s[f].fnInit(e)
break}i&&((s=e.aanFeatures)[l]||(s[l]=[]),s[l].push(i),o.append(i))}a.replaceWith(o),e.nHolding=null}function W(e,n){var a,r,o,i,l,s,u,c,f,d,h=t(n).children("tr")
for(e.splice(0,e.length),o=0,s=h.length;o<s;o++)e.push([])
for(o=0,s=h.length;o<s;o++)for(r=(a=h[o]).firstChild;r;){if("TD"==r.nodeName.toUpperCase()||"TH"==r.nodeName.toUpperCase()){for(c=(c=1*r.getAttribute("colspan"))&&0!==c&&1!==c?c:1,f=(f=1*r.getAttribute("rowspan"))&&0!==f&&1!==f?f:1,i=0,l=e[o];l[i];)i++
for(u=i,d=1===c,l=0;l<c;l++)for(i=0;i<f;i++)e[o+i][u+l]={cell:r,unique:d},e[o+i].nTr=a}r=r.nextSibling}}function E(t,e,n){var a=[]
n||(n=t.aoHeader,e&&W(n=[],e))
e=0
for(var r=n.length;e<r;e++)for(var o=0,i=n[e].length;o<i;o++)!n[e][o].unique||a[o]&&t.bSortCellsTop||(a[o]=n[e][o].cell)
return a}function B(e,n,a){if(Ht(e,"aoServerParams","serverParams",[n]),n&&t.isArray(n)){var r={},o=/(.*?)\[\]$/
t.each(n,(function(t,e){var n=e.name.match(o)
n?(n=n[0],r[n]||(r[n]=[]),r[n].push(e.value)):r[e.name]=e.value})),n=r}var i,l=e.ajax,s=e.oInstance,u=function(t){Ht(e,null,"xhr",[e,t,e.jqXHR]),a(t)}
if(t.isPlainObject(l)&&l.data){var c="function"==typeof(i=l.data)?i(n,e):i
n="function"==typeof i&&c?c:t.extend(!0,n,c)
delete l.data}c={data:n,success:function(t){var n=t.error||t.sError
n&&Lt(e,0,n),e.json=t,u(t)},dataType:"json",cache:!1,type:e.sServerMethod,error:function(n,a){var r=Ht(e,null,"xhr",[e,null,e.jqXHR]);-1===t.inArray(!0,r)&&("parsererror"==a?Lt(e,0,"Invalid JSON response",1):4===n.readyState&&Lt(e,0,"Ajax error",7)),ft(e,!1)}},e.oAjaxData=n,Ht(e,null,"preXhr",[e,n]),e.fnServerData?e.fnServerData.call(s,e.sAjaxSource,t.map(n,(function(t,e){return{name:e,value:t}})),u,e):e.sAjaxSource||"string"==typeof l?e.jqXHR=t.ajax(t.extend(c,{url:l||e.sAjaxSource})):"function"==typeof l?e.jqXHR=l.call(s,n,u,e):(e.jqXHR=t.ajax(t.extend(c,l)),l.data=i)}function U(t){return!t.bAjaxDataGet||(t.iDraw++,ft(t,!0),B(t,V(t),(function(e){X(t,e)})),!1)}function V(e){var n,a,r,o,i=e.aoColumns,l=i.length,s=e.oFeatures,u=e.oPreviousSearch,c=e.aoPreSearchCols,f=[],d=Dt(e)
n=e._iDisplayStart,a=!1!==s.bPaginate?e._iDisplayLength:-1
var h=function(t,e){f.push({name:t,value:e})}
h("sEcho",e.iDraw),h("iColumns",l),h("sColumns",re(i,"sName").join(",")),h("iDisplayStart",n),h("iDisplayLength",a)
var p={draw:e.iDraw,columns:[],order:[],start:n,length:a,search:{value:u.sSearch,regex:u.bRegex}}
for(n=0;n<l;n++)r=i[n],o=c[n],a="function"==typeof r.mData?"function":r.mData,p.columns.push({data:a,name:r.sName,searchable:r.bSearchable,orderable:r.bSortable,search:{value:o.sSearch,regex:o.bRegex}}),h("mDataProp_"+n,a),s.bFilter&&(h("sSearch_"+n,o.sSearch),h("bRegex_"+n,o.bRegex),h("bSearchable_"+n,r.bSearchable)),s.bSort&&h("bSortable_"+n,r.bSortable)
return s.bFilter&&(h("sSearch",u.sSearch),h("bRegex",u.bRegex)),s.bSort&&(t.each(d,(function(t,e){p.order.push({column:e.col,dir:e.dir}),h("iSortCol_"+t,e.col),h("sSortDir_"+t,e.dir)})),h("iSortingCols",d.length)),null===(i=qt.ext.legacy.ajax)?e.sAjaxSource?f:p:i?f:p}function X(t,e){var n=J(t,e),r=e.sEcho!==a?e.sEcho:e.draw,o=e.iTotalRecords!==a?e.iTotalRecords:e.recordsTotal,i=e.iTotalDisplayRecords!==a?e.iTotalDisplayRecords:e.recordsFiltered
if(r!==a){if(1*r<t.iDraw)return
t.iDraw=1*r}for(A(t),t._iRecordsTotal=parseInt(o,10),t._iRecordsDisplay=parseInt(i,10),r=0,o=n.length;r<o;r++)D(t,n[r])
t.aiDisplay=t.aiDisplayMaster.slice(),t.bAjaxDataGet=!1,O(t),t._bInitComplete||ot(t,e),t.bAjaxDataGet=!0,ft(t,!1)}function J(e,n){var r=t.isPlainObject(e.ajax)&&e.ajax.dataSrc!==a?e.ajax.dataSrc:e.sAjaxDataProp
return"data"===r?n.aaData||n[r]:""!==r?w(r)(n):n}function q(e){var a=e.oClasses,r=e.sTableId,o=e.oLanguage,i=e.oPreviousSearch,l=e.aanFeatures,s='<input type="search" class="'+a.sFilterInput+'"/>',u=(u=o.sSearch).match(/_INPUT_/)?u.replace("_INPUT_",s):u+s,c=(a=t("<div/>",{id:l.f?null:r+"_filter",class:a.sFilter}).append(t("<label/>").append(u)),function(){var t=this.value?this.value:""
t!=i.sSearch&&(G(e,{sSearch:t,bRegex:i.bRegex,bSmart:i.bSmart,bCaseInsensitive:i.bCaseInsensitive}),e._iDisplayStart=0,O(e))}),f=(l=null!==e.searchDelay?e.searchDelay:"ssp"===Mt(e)?400:0,t("input",a).val(i.sSearch).attr("placeholder",o.sSearchPlaceholder).on("keyup.DT search.DT input.DT paste.DT cut.DT",l?be(c,l):c).on("mouseup",(function(){setTimeout((function(){c.call(f[0])}),10)})).on("keypress.DT",(function(t){if(13==t.keyCode)return!1})).attr("aria-controls",r))
return t(e.nTable).on("search.dt.DT",(function(t,a){if(e===a)try{f[0]!==n.activeElement&&f.val(i.sSearch)}catch(o){}})),a[0]}function G(t,e,n){var r=t.oPreviousSearch,o=t.aoPreSearchCols,i=function(t){r.sSearch=t.sSearch,r.bRegex=t.bRegex,r.bSmart=t.bSmart,r.bCaseInsensitive=t.bCaseInsensitive}
if(S(t),"ssp"!=Mt(t)){for(Y(t,e.sSearch,n,e.bEscapeRegex!==a?!e.bEscapeRegex:e.bRegex,e.bSmart,e.bCaseInsensitive),i(e),e=0;e<o.length;e++)z(t,o[e].sSearch,e,o[e].bEscapeRegex!==a?!o[e].bEscapeRegex:o[e].bRegex,o[e].bSmart,o[e].bCaseInsensitive)
$(t)}else i(e)
t.bFiltered=!0,Ht(t,null,"search",[t])}function $(e){for(var n,a,r=qt.ext.search,o=e.aiDisplay,i=0,l=r.length;i<l;i++){for(var s=[],u=0,c=o.length;u<c;u++)a=o[u],n=e.aoData[a],r[i](e,n._aFilterData,a,n._aData,u)&&s.push(a)
o.length=0,t.merge(o,s)}}function z(t,e,n,a,r,o){if(""!==e){var i=[],l=t.aiDisplay
for(a=Z(e,a,r,o),r=0;r<l.length;r++)e=t.aoData[l[r]]._aFilterData[n],a.test(e)&&i.push(l[r])
t.aiDisplay=i}}function Y(t,e,n,a,r,o){r=Z(e,a,r,o)
var i,l=t.oPreviousSearch.sSearch,s=t.aiDisplayMaster
o=[]
if(0!==qt.ext.search.length&&(n=!0),i=K(t),0>=e.length)t.aiDisplay=s.slice()
else{for((i||n||a||l.length>e.length||0!==e.indexOf(l)||t.bSorted)&&(t.aiDisplay=s.slice()),e=t.aiDisplay,n=0;n<e.length;n++)r.test(t.aoData[e[n]]._sFilterRow)&&o.push(e[n])
t.aiDisplay=o}}function Z(e,n,a,r){return e=n?e:de(e),a&&(e="^(?=.*?"+t.map(e.match(/"[^"]+"|[^ ]+/g)||[""],(function(t){if('"'===t.charAt(0)){var e=t.match(/^"(.*)"$/)
t=e?e[1]:t}return t.replace('"',"")})).join(")(?=.*?")+").*$"),RegExp(e,r?"i":"")}function K(t){var e,n,a,r,o,i,l,s,u=t.aoColumns,c=qt.ext.type.search
for(e=!1,n=0,r=t.aoData.length;n<r;n++)if(!(s=t.aoData[n])._aFilterData){for(i=[],a=0,o=u.length;a<o;a++)(e=u[a]).bSearchable?(l=_(t,n,a,"filter"),c[e.sType]&&(l=c[e.sType](l)),null===l&&(l=""),"string"!=typeof l&&l.toString&&(l=l.toString())):l="",l.indexOf&&-1!==l.indexOf("&")&&(he.innerHTML=l,l=pe?he.textContent:he.innerText),l.replace&&(l=l.replace(/[\r\n\u2028]/g,"")),i.push(l)
s._aFilterData=i,s._sFilterRow=i.join("  "),e=!0}return e}function Q(t){return{search:t.sSearch,smart:t.bSmart,regex:t.bRegex,caseInsensitive:t.bCaseInsensitive}}function tt(t){return{sSearch:t.search,bSmart:t.smart,bRegex:t.regex,bCaseInsensitive:t.caseInsensitive}}function et(e){var n=e.sTableId,a=e.aanFeatures.i,r=t("<div/>",{class:e.oClasses.sInfo,id:a?null:n+"_info"})
return a||(e.aoDrawCallback.push({fn:nt,sName:"information"}),r.attr("role","status").attr("aria-live","polite"),t(e.nTable).attr("aria-describedby",n+"_info")),r[0]}function nt(e){var n=e.aanFeatures.i
if(0!==n.length){var a=e.oLanguage,r=e._iDisplayStart+1,o=e.fnDisplayEnd(),i=e.fnRecordsTotal(),l=e.fnRecordsDisplay(),s=l?a.sInfo:a.sInfoEmpty
l!==i&&(s+=" "+a.sInfoFiltered),s=at(e,s+=a.sInfoPostFix),null!==(a=a.fnInfoCallback)&&(s=a.call(e.oInstance,e,r,o,i,l,s)),t(n).html(s)}}function at(t,e){var n=t.fnFormatNumber,a=t._iDisplayStart+1,r=t._iDisplayLength,o=t.fnRecordsDisplay(),i=-1===r
return e.replace(/_START_/g,n.call(t,a)).replace(/_END_/g,n.call(t,t.fnDisplayEnd())).replace(/_MAX_/g,n.call(t,t.fnRecordsTotal())).replace(/_TOTAL_/g,n.call(t,o)).replace(/_PAGE_/g,n.call(t,i?1:Math.ceil(a/r))).replace(/_PAGES_/g,n.call(t,i?1:Math.ceil(o/r)))}function rt(t){var e,n,a,r=t.iInitDisplayStart,o=t.aoColumns
n=t.oFeatures
var i=t.bDeferLoading
if(t.bInitialised){for(M(t),N(t),H(t,t.aoHeader),H(t,t.aoFooter),ft(t,!0),n.bAutoWidth&&gt(t),e=0,n=o.length;e<n;e++)(a=o[e]).sWidth&&(a.nTh.style.width=vt(a.sWidth))
Ht(t,null,"preInit",[t]),k(t),("ssp"!=(o=Mt(t))||i)&&("ajax"==o?B(t,[],(function(n){var a=J(t,n)
for(e=0;e<a.length;e++)D(t,a[e])
t.iInitDisplayStart=r,k(t),ft(t,!1),ot(t,n)})):(ft(t,!1),ot(t)))}else setTimeout((function(){rt(t)}),200)}function ot(t,e){t._bInitComplete=!0,(e||t.oInit.aaData)&&h(t),Ht(t,null,"plugin-init",[t,e]),Ht(t,"aoInitComplete","init",[t,e])}function it(t,e){var n=parseInt(e,10)
t._iDisplayLength=n,Ot(t),Ht(t,null,"length",[t,n])}function lt(e){for(var n=e.oClasses,a=e.sTableId,r=e.aLengthMenu,o=(i=t.isArray(r[0]))?r[0]:r,i=(r=i?r[1]:r,t("<select/>",{name:a+"_length","aria-controls":a,class:n.sLengthSelect})),l=0,s=o.length;l<s;l++)i[0][l]=new Option("number"==typeof r[l]?e.fnFormatNumber(r[l]):r[l],o[l])
var u=t("<div><label/></div>").addClass(n.sLength)
return e.aanFeatures.l||(u[0].id=a+"_length"),u.children().append(e.oLanguage.sLengthMenu.replace("_MENU_",i[0].outerHTML)),t("select",u).val(e._iDisplayLength).on("change.DT",(function(){it(e,t(this).val()),O(e)})),t(e.nTable).on("length.dt.DT",(function(n,a,r){e===a&&t("select",u).val(r)})),u[0]}function st(e){var n=e.sPaginationType,a=qt.ext.pager[n],r="function"==typeof a,o=function(t){O(t)},i=(n=t("<div/>").addClass(e.oClasses.sPaging+n)[0],e.aanFeatures)
return r||a.fnInit(e,n,o),i.p||(n.id=e.sTableId+"_paginate",e.aoDrawCallback.push({fn:function(t){if(r){var e,n=t._iDisplayStart,l=t._iDisplayLength,s=t.fnRecordsDisplay(),u=(n=(u=-1===l)?0:Math.ceil(n/l),l=u?1:Math.ceil(s/l),s=a(n,l),0)
for(e=i.p.length;u<e;u++)kt(t,"pageButton")(t,i.p[u],u,s,n,l)}else a.fnUpdate(t,o)},sName:"pagination"})),n}function ut(t,e,n){var a=t._iDisplayStart,r=t._iDisplayLength,o=t.fnRecordsDisplay()
return 0===o||-1===r?a=0:"number"==typeof e?(a=e*r)>o&&(a=0):"first"==e?a=0:"previous"==e?0>(a=0<=r?a-r:0)&&(a=0):"next"==e?a+r<o&&(a+=r):"last"==e?a=Math.floor((o-1)/r)*r:Lt(t,0,"Unknown paging action: "+e,5),e=t._iDisplayStart!==a,t._iDisplayStart=a,e&&(Ht(t,null,"page",[t]),n&&O(t)),e}function ct(e){return t("<div/>",{id:e.aanFeatures.r?null:e.sTableId+"_processing",class:e.oClasses.sProcessing}).html(e.oLanguage.sProcessing).insertBefore(e.nTable)[0]}function ft(e,n){e.oFeatures.bProcessing&&t(e.aanFeatures.r).css("display",n?"block":"none"),Ht(e,null,"processing",[e,n])}function dt(e){(f=t(e.nTable)).attr("role","grid")
var n=e.oScroll
if(""===n.sX&&""===n.sY)return e.nTable
var a=n.sX,r=n.sY,o=e.oClasses,i=f.children("caption"),l=i.length?i[0]._captionSide:null,s=t(f[0].cloneNode(!1)),u=t(f[0].cloneNode(!1)),c=f.children("tfoot")
c.length||(c=null),s=t("<div/>",{class:o.sScrollWrapper}).append(t("<div/>",{class:o.sScrollHead}).css({overflow:"hidden",position:"relative",border:0,width:a?a?vt(a):null:"100%"}).append(t("<div/>",{class:o.sScrollHeadInner}).css({"box-sizing":"content-box",width:n.sXInner||"100%"}).append(s.removeAttr("id").css("margin-left",0).append("top"===l?i:null).append(f.children("thead"))))).append(t("<div/>",{class:o.sScrollBody}).css({position:"relative",overflow:"auto",width:a?vt(a):null}).append(f)),c&&s.append(t("<div/>",{class:o.sScrollFoot}).css({overflow:"hidden",border:0,width:a?a?vt(a):null:"100%"}).append(t("<div/>",{class:o.sScrollFootInner}).append(u.removeAttr("id").css("margin-left",0).append("bottom"===l?i:null).append(f.children("tfoot")))))
var f,d=(f=s.children())[0],h=(o=f[1],c?f[2]:null)
return a&&t(o).on("scroll.DT",(function(){var t=this.scrollLeft
d.scrollLeft=t,c&&(h.scrollLeft=t)})),t(o).css("max-height",r),n.bCollapse||t(o).css("height",r),e.nScrollHead=d,e.nScrollBody=o,e.nScrollFoot=h,e.aoDrawCallback.push({fn:ht,sName:"scrolling"}),s[0]}function ht(e){var n,r,o,i,l,s=(f=e.oScroll).sX,u=f.sXInner,c=f.sY,f=f.iBarWidth,d=t(e.nScrollHead),g=d[0].style,b=(S=d.children("div"))[0].style,m=S.children("table"),S=e.nScrollBody,v=t(S),D=S.style,y=t(e.nScrollFoot).children("div"),_=y.children("table"),T=t(e.nTHead),C=t(e.nTable),w=C[0],x=w.style,I=e.nTFoot?t(e.nTFoot):null,A=e.oBrowser,F=A.bScrollOversize,L=re(e.aoColumns,"nTh"),R=[],P=[],j=[],N=[],H=function(t){(t=t.style).paddingTop="0",t.paddingBottom="0",t.borderTopWidth="0",t.borderBottomWidth="0",t.height=0}
r=S.scrollHeight>S.clientHeight,e.scrollBarVis!==r&&e.scrollBarVis!==a?(e.scrollBarVis=r,h(e)):(e.scrollBarVis=r,C.children("thead, tfoot").remove(),I&&(o=I.clone().prependTo(C),n=I.find("tr"),o=o.find("tr")),i=T.clone().prependTo(C),T=T.find("tr"),r=i.find("tr"),i.find("th, td").removeAttr("tabindex"),s||(D.width="100%",d[0].style.width="100%"),t.each(E(e,i),(function(t,n){l=p(e,t),n.style.width=e.aoColumns[l].sWidth})),I&&pt((function(t){t.style.width=""}),o),d=C.outerWidth(),""===s?(x.width="100%",F&&(C.find("tbody").height()>S.offsetHeight||"scroll"==v.css("overflow-y"))&&(x.width=vt(C.outerWidth()-f)),d=C.outerWidth()):""!==u&&(x.width=vt(u),d=C.outerWidth()),pt(H,r),pt((function(e){j.push(e.innerHTML),R.push(vt(t(e).css("width")))}),r),pt((function(e,n){-1!==t.inArray(e,L)&&(e.style.width=R[n])}),T),t(r).height(0),I&&(pt(H,o),pt((function(e){N.push(e.innerHTML),P.push(vt(t(e).css("width")))}),o),pt((function(t,e){t.style.width=P[e]}),n),t(o).height(0)),pt((function(t,e){t.innerHTML='<div class="dataTables_sizing">'+j[e]+"</div>",t.childNodes[0].style.height="0",t.childNodes[0].style.overflow="hidden",t.style.width=R[e]}),r),I&&pt((function(t,e){t.innerHTML='<div class="dataTables_sizing">'+N[e]+"</div>",t.childNodes[0].style.height="0",t.childNodes[0].style.overflow="hidden",t.style.width=P[e]}),o),C.outerWidth()<d?(n=S.scrollHeight>S.offsetHeight||"scroll"==v.css("overflow-y")?d+f:d,F&&(S.scrollHeight>S.offsetHeight||"scroll"==v.css("overflow-y"))&&(x.width=vt(n-f)),(""===s||""!==u)&&Lt(e,1,"Possible column misalignment",6)):n="100%",D.width=vt(n),g.width=vt(n),I&&(e.nScrollFoot.style.width=vt(n)),!c&&F&&(D.height=vt(w.offsetHeight+f)),s=C.outerWidth(),m[0].style.width=vt(s),b.width=vt(s),u=C.height()>S.clientHeight||"scroll"==v.css("overflow-y"),b[c="padding"+(A.bScrollbarLeft?"Left":"Right")]=u?f+"px":"0px",I&&(_[0].style.width=vt(s),y[0].style.width=vt(s),y[0].style[c]=u?f+"px":"0px"),C.children("colgroup").insertBefore(C.children("thead")),v.trigger("scroll"),!e.bSorted&&!e.bFiltered||e._drawHold||(S.scrollTop=0))}function pt(t,e,n){for(var a,r,o=0,i=0,l=e.length;i<l;){for(a=e[i].firstChild,r=n?n[i].firstChild:null;a;)1===a.nodeType&&(n?t(a,r,o):t(a,o),o++),a=a.nextSibling,r=n?r.nextSibling:null
i++}}function gt(n){var a,r,o=n.nTable,i=n.aoColumns,l=(y=n.oScroll).sY,s=y.sX,u=y.sXInner,c=i.length,f=m(n,"bVisible"),d=t("th",n.nTHead),g=o.getAttribute("width"),S=o.parentNode,v=!1,D=n.oBrowser,y=D.bScrollOversize
for((a=o.style.width)&&-1!==a.indexOf("%")&&(g=a),a=0;a<f.length;a++)null!==(r=i[f[a]]).sWidth&&(r.sWidth=bt(r.sWidthOrig,S),v=!0)
if(y||!v&&!s&&!l&&c==b(n)&&c==d.length)for(a=0;a<c;a++)null!==(f=p(n,a))&&(i[f].sWidth=vt(d.eq(a).width()))
else{(c=t(o).clone().css("visibility","hidden").removeAttr("id")).find("tbody tr").remove()
var _=t("<tr/>").appendTo(c.find("tbody"))
for(c.find("thead, tfoot").remove(),c.append(t(n.nTHead).clone()).append(t(n.nTFoot).clone()),c.find("tfoot th, tfoot td").css("width",""),d=E(n,c.find("thead")[0]),a=0;a<f.length;a++)r=i[f[a]],d[a].style.width=null!==r.sWidthOrig&&""!==r.sWidthOrig?vt(r.sWidthOrig):"",r.sWidthOrig&&s&&t(d[a]).append(t("<div/>").css({width:r.sWidthOrig,margin:0,padding:0,border:0,height:1}))
if(n.aoData.length)for(a=0;a<f.length;a++)r=i[v=f[a]],t(mt(n,v)).clone(!1).append(r.sContentPadding).appendTo(_)
for(t("[name]",c).removeAttr("name"),r=t("<div/>").css(s||l?{position:"absolute",top:0,left:0,height:1,right:0,overflow:"hidden"}:{}).append(c).appendTo(S),s&&u?c.width(u):s?(c.css("width","auto"),c.removeAttr("width"),c.width()<S.clientWidth&&g&&c.width(S.clientWidth)):l?c.width(S.clientWidth):g&&c.width(g),a=l=0;a<f.length;a++)u=(S=t(d[a])).outerWidth()-S.width(),l+=S=D.bBounding?Math.ceil(d[a].getBoundingClientRect().width):S.outerWidth(),i[f[a]].sWidth=vt(S-u)
o.style.width=vt(l),r.remove()}g&&(o.style.width=vt(g)),!g&&!s||n._reszEvt||(o=function(){t(e).on("resize.DT-"+n.sInstance,be((function(){h(n)})))},y?setTimeout(o,1e3):o(),n._reszEvt=!0)}function bt(e,a){if(!e)return 0
var r=t("<div/>").css("width",vt(e)).appendTo(a||n.body),o=r[0].offsetWidth
return r.remove(),o}function mt(e,n){var a=St(e,n)
if(0>a)return null
var r=e.aoData[a]
return r.nTr?r.anCells[n]:t("<td/>").html(_(e,a,n,"display"))[0]}function St(t,e){for(var n,a=-1,r=-1,o=0,i=t.aoData.length;o<i;o++)(n=(n=(n=_(t,o,e,"display")+"").replace(ge,"")).replace(/&nbsp;/g," ")).length>a&&(a=n.length,r=o)
return r}function vt(t){return null===t?"0px":"number"==typeof t?0>t?"0px":t+"px":t.match(/\d$/)?t+"px":t}function Dt(e){var n,r,o,i,l,s,u=[],c=e.aoColumns
n=e.aaSortingFixed,r=t.isPlainObject(n)
var f=[]
for(o=function(e){e.length&&!t.isArray(e[0])?f.push(e):t.merge(f,e)},t.isArray(n)&&o(n),r&&n.pre&&o(n.pre),o(e.aaSorting),r&&n.post&&o(n.post),e=0;e<f.length;e++)for(n=0,r=(o=c[s=f[e][0]].aDataSort).length;n<r;n++)l=c[i=o[n]].sType||"string",f[e]._idx===a&&(f[e]._idx=t.inArray(f[e][1],c[i].asSorting)),u.push({src:s,col:i,dir:f[e][1],index:f[e]._idx,type:l,formatter:qt.ext.type.order[l+"-pre"]})
return u}function yt(t){var e,n,a,r,o=[],i=qt.ext.type.order,l=t.aoData,s=0,u=t.aiDisplayMaster
for(S(t),e=0,n=(r=Dt(t)).length;e<n;e++)(a=r[e]).formatter&&s++,xt(t,a.col)
if("ssp"!=Mt(t)&&0!==r.length){for(e=0,n=u.length;e<n;e++)o[u[e]]=e
s===r.length?u.sort((function(t,e){var n,a,i,s,u=r.length,c=l[t]._aSortData,f=l[e]._aSortData
for(i=0;i<u;i++)if(0!==(n=(n=c[(s=r[i]).col])<(a=f[s.col])?-1:n>a?1:0))return"asc"===s.dir?n:-n
return(n=o[t])<(a=o[e])?-1:n>a?1:0})):u.sort((function(t,e){var n,a,s,u,c=r.length,f=l[t]._aSortData,d=l[e]._aSortData
for(s=0;s<c;s++)if(n=f[(u=r[s]).col],a=d[u.col],0!==(n=(u=i[u.type+"-"+u.dir]||i["string-"+u.dir])(n,a)))return n
return(n=o[t])<(a=o[e])?-1:n>a?1:0}))}t.bSorted=!0}function _t(t){for(var e,n,a=t.aoColumns,r=Dt(t),o=(t=t.oLanguage.oAria,0),i=a.length;o<i;o++){var l=(n=a[o]).asSorting
e=n.sTitle.replace(/<.*?>/g,"")
var s=n.nTh
s.removeAttribute("aria-sort"),n.bSortable&&(0<r.length&&r[0].col==o?(s.setAttribute("aria-sort","asc"==r[0].dir?"ascending":"descending"),n=l[r[0].index+1]||l[0]):n=l[0],e+="asc"===n?t.sSortAscending:t.sSortDescending),s.setAttribute("aria-label",e)}}function Tt(e,n,r,o){var i=e.aaSorting,l=e.aoColumns[n].asSorting,s=function(e,n){var r=e._idx
return r===a&&(r=t.inArray(e[1],l)),r+1<l.length?r+1:n?null:0}
"number"==typeof i[0]&&(i=e.aaSorting=[i]),r&&e.oFeatures.bSortMulti?-1!==(r=t.inArray(n,re(i,"0")))?(null===(n=s(i[r],!0))&&1===i.length&&(n=0),null===n?i.splice(r,1):(i[r][1]=l[n],i[r]._idx=n)):(i.push([n,l[0],0]),i[i.length-1]._idx=0):i.length&&i[0][0]==n?(n=s(i[0]),i.length=1,i[0][1]=l[n],i[0]._idx=n):(i.length=0,i.push([n,l[0]]),i[0]._idx=0),k(e),"function"==typeof o&&o(e)}function Ct(t,e,n,a){var r=t.aoColumns[n]
jt(e,{},(function(e){!1!==r.bSortable&&(t.oFeatures.bProcessing?(ft(t,!0),setTimeout((function(){Tt(t,n,e.shiftKey,a),"ssp"!==Mt(t)&&ft(t,!1)}),0)):Tt(t,n,e.shiftKey,a))}))}function wt(e){var n,a,r=e.aLastSort,o=e.oClasses.sSortColumn,i=Dt(e),l=e.oFeatures
if(l.bSort&&l.bSortClasses){for(l=0,n=r.length;l<n;l++)a=r[l].src,t(re(e.aoData,"anCells",a)).removeClass(o+(2>l?l+1:3))
for(l=0,n=i.length;l<n;l++)a=i[l].src,t(re(e.aoData,"anCells",a)).addClass(o+(2>l?l+1:3))}e.aLastSort=i}function xt(t,e){var n,a=t.aoColumns[e],r=qt.ext.order[a.sSortDataType]
r&&(n=r.call(t.oInstance,t,e,g(t,e)))
for(var o,i=qt.ext.type.order[a.sType+"-pre"],l=0,s=t.aoData.length;l<s;l++)(a=t.aoData[l])._aSortData||(a._aSortData=[]),(!a._aSortData[e]||r)&&(o=r?n[l]:_(t,l,e,"sort"),a._aSortData[e]=i?i(o):o)}function It(e){if(e.oFeatures.bStateSave&&!e.bDestroying){var n={time:+new Date,start:e._iDisplayStart,length:e._iDisplayLength,order:t.extend(!0,[],e.aaSorting),search:Q(e.oPreviousSearch),columns:t.map(e.aoColumns,(function(t,n){return{visible:t.bVisible,search:Q(e.aoPreSearchCols[n])}}))}
Ht(e,"aoStateSaveParams","stateSaveParams",[e,n]),e.oSavedState=n,e.fnStateSaveCallback.call(e.oInstance,e,n)}}function At(e,n,r){var o,i,l=e.aoColumns
n=function(n){if(n&&n.time){var s=Ht(e,"aoStateLoadParams","stateLoadParams",[e,n])
if(-1===t.inArray(!1,s)&&!(0<(s=e.iStateDuration)&&n.time<+new Date-1e3*s||n.columns&&l.length!==n.columns.length)){if(e.oLoadedState=t.extend(!0,{},n),n.start!==a&&(e._iDisplayStart=n.start,e.iInitDisplayStart=n.start),n.length!==a&&(e._iDisplayLength=n.length),n.order!==a&&(e.aaSorting=[],t.each(n.order,(function(t,n){e.aaSorting.push(n[0]>=l.length?[0,n[1]]:n)}))),n.search!==a&&t.extend(e.oPreviousSearch,tt(n.search)),n.columns)for(o=0,i=n.columns.length;o<i;o++)(s=n.columns[o]).visible!==a&&(l[o].bVisible=s.visible),s.search!==a&&t.extend(e.aoPreSearchCols[o],tt(s.search))
Ht(e,"aoStateLoaded","stateLoaded",[e,n])}}r()}
if(e.oFeatures.bStateSave){var s=e.fnStateLoadCallback.call(e.oInstance,e,n)
s!==a&&n(s)}else r()}function Ft(e){var n=qt.settings
return-1!==(e=t.inArray(e,re(n,"nTable")))?n[e]:null}function Lt(t,n,a,r){if(a="DataTables warning: "+(t?"table id="+t.sTableId+" - ":"")+a,r&&(a+=". For more information about this error, please see http://datatables.net/tn/"+r),n)e.console&&console.log&&console.log(a)
else if(n=(n=qt.ext).sErrMode||n.errMode,t&&Ht(t,null,"error",[t,r,a]),"alert"==n)alert(a)
else{if("throw"==n)throw Error(a)
"function"==typeof n&&n(t,r,a)}}function Rt(e,n,r,o){t.isArray(r)?t.each(r,(function(a,r){t.isArray(r)?Rt(e,n,r[0],r[1]):Rt(e,n,r)})):(o===a&&(o=r),n[r]!==a&&(e[o]=n[r]))}function Pt(e,n,a){var r,o
for(o in n)n.hasOwnProperty(o)&&(r=n[o],t.isPlainObject(r)?(t.isPlainObject(e[o])||(e[o]={}),t.extend(!0,e[o],r)):e[o]=a&&"data"!==o&&"aaData"!==o&&t.isArray(r)?r.slice():r)
return e}function jt(e,n,a){t(e).on("click.DT",n,(function(n){t(e).trigger("blur"),a(n)})).on("keypress.DT",n,(function(t){13===t.which&&(t.preventDefault(),a(t))})).on("selectstart.DT",(function(){return!1}))}function Nt(t,e,n,a){n&&t[e].push({fn:n,sName:a})}function Ht(e,n,a,r){var o=[]
return n&&(o=t.map(e[n].slice().reverse(),(function(t){return t.fn.apply(e.oInstance,r)}))),null!==a&&(n=t.Event(a+".dt"),t(e.nTable).trigger(n,r),o.push(n.result)),o}function Ot(t){var e=t._iDisplayStart,n=t.fnDisplayEnd(),a=t._iDisplayLength
e>=n&&(e=n-a),e-=e%a,(-1===a||0>e)&&(e=0),t._iDisplayStart=e}function kt(e,n){var a=e.renderer,r=qt.ext.renderer[n]
return t.isPlainObject(a)&&a[n]?r[a[n]]||r._:"string"==typeof a&&r[a]||r._}function Mt(t){return t.oFeatures.bServerSide?"ssp":t.ajax||t.sAjaxSource?"ajax":"dom"}function Wt(t,e){var n=[],a=(n=Fe.numbers_length,Math.floor(n/2))
return e<=n?n=ie(0,e):t<=a?((n=ie(0,n-2)).push("ellipsis"),n.push(e-1)):(t>=e-1-a?n=ie(e-(n-2),e):((n=ie(t-a+2,t+a-1)).push("ellipsis"),n.push(e-1)),n.splice(0,0,"ellipsis"),n.splice(0,0,0)),n.DT_el="span",n}function Et(e){t.each({num:function(t){return Le(t,e)},"num-fmt":function(t){return Le(t,e,Kt)},"html-num":function(t){return Le(t,e,zt)},"html-num-fmt":function(t){return Le(t,e,zt,Kt)}},(function(t,n){Ut.type.order[t+e+"-pre"]=n,t.match(/^html\-/)&&(Ut.type.search[t+e]=Ut.type.search.html)}))}function Bt(t){return function(){var e=[Ft(this[qt.ext.iApiIndex])].concat(Array.prototype.slice.call(arguments))
return qt.ext.internal[t].apply(this,e)}}var Ut,Vt,Xt,Jt,qt=function(e){this.$=function(t,e){return this.api(!0).$(t,e)},this._=function(t,e){return this.api(!0).rows(t,e).data()},this.api=function(t){return new Vt(t?Ft(this[Ut.iApiIndex]):this)},this.fnAddData=function(e,n){var r=this.api(!0),o=t.isArray(e)&&(t.isArray(e[0])||t.isPlainObject(e[0]))?r.rows.add(e):r.row.add(e)
return(n===a||n)&&r.draw(),o.flatten().toArray()},this.fnAdjustColumnSizing=function(t){var e=this.api(!0).columns.adjust(),n=e.settings()[0],r=n.oScroll
t===a||t?e.draw(!1):(""!==r.sX||""!==r.sY)&&ht(n)},this.fnClearTable=function(t){var e=this.api(!0).clear();(t===a||t)&&e.draw()},this.fnClose=function(t){this.api(!0).row(t).child.hide()},this.fnDeleteRow=function(t,e,n){var r=this.api(!0),o=(t=r.rows(t)).settings()[0],i=o.aoData[t[0][0]]
return t.remove(),e&&e.call(this,o,i),(n===a||n)&&r.draw(),i},this.fnDestroy=function(t){this.api(!0).destroy(t)},this.fnDraw=function(t){this.api(!0).draw(t)},this.fnFilter=function(t,e,n,r,o,i){o=this.api(!0),null===e||e===a?o.search(t,n,r,i):o.column(e).search(t,n,r,i),o.draw()},this.fnGetData=function(t,e){var n=this.api(!0)
if(t!==a){var r=t.nodeName?t.nodeName.toLowerCase():""
return e!==a||"td"==r||"th"==r?n.cell(t,e).data():n.row(t).data()||null}return n.data().toArray()},this.fnGetNodes=function(t){var e=this.api(!0)
return t!==a?e.row(t).node():e.rows().nodes().flatten().toArray()},this.fnGetPosition=function(t){var e=this.api(!0),n=t.nodeName.toUpperCase()
return"TR"==n?e.row(t).index():"TD"==n||"TH"==n?[(t=e.cell(t).index()).row,t.columnVisible,t.column]:null},this.fnIsOpen=function(t){return this.api(!0).row(t).child.isShown()},this.fnOpen=function(t,e,n){return this.api(!0).row(t).child(e,n).show().child()[0]},this.fnPageChange=function(t,e){var n=this.api(!0).page(t);(e===a||e)&&n.draw(!1)},this.fnSetColumnVis=function(t,e,n){t=this.api(!0).column(t).visible(e),(n===a||n)&&t.columns.adjust().draw()},this.fnSettings=function(){return Ft(this[Ut.iApiIndex])},this.fnSort=function(t){this.api(!0).order(t).draw()},this.fnSortListener=function(t,e,n){this.api(!0).order.listener(t,e,n)},this.fnUpdate=function(t,e,n,r,o){var i=this.api(!0)
return n===a||null===n?i.row(e).data(t):i.cell(e,n).data(t),(o===a||o)&&i.columns.adjust(),(r===a||r)&&i.draw(),0},this.fnVersionCheck=Ut.fnVersionCheck
var n=this,r=e===a,c=this.length
for(var h in r&&(e={}),this.oApi=this.internal=Ut.internal,qt.ext.internal)h&&(this[h]=Bt(h))
return this.each((function(){var h,p={},g=1<c?Pt(p,e,!0):e,b=0,m=(p=this.getAttribute("id"),!1),S=qt.defaults,_=t(this)
if("table"!=this.nodeName.toLowerCase())Lt(null,0,"Non-table node initialisation ("+this.nodeName+")",2)
else{l(S),s(S.column),o(S,S,!0),o(S.column,S.column,!0),o(S,t.extend(g,_.data()),!0)
var T=qt.settings
b=0
for(h=T.length;b<h;b++){var C=T[b]
if(C.nTable==this||C.nTHead&&C.nTHead.parentNode==this||C.nTFoot&&C.nTFoot.parentNode==this){var x=g.bRetrieve!==a?g.bRetrieve:S.bRetrieve
if(r||x)return C.oInstance
if(g.bDestroy!==a?g.bDestroy:S.bDestroy){C.oInstance.fnDestroy()
break}return void Lt(C,0,"Cannot reinitialise DataTable",3)}if(C.sTableId==this.id){T.splice(b,1)
break}}null!==p&&""!==p||(this.id=p="DataTables_Table_"+qt.ext._unique++)
var I=t.extend(!0,{},qt.models.oSettings,{sDestroyWidth:_[0].style.width,sInstance:p,sTableId:p})
I.nTable=this,I.oApi=n.internal,I.oInit=g,T.push(I),I.oInstance=1===n.length?n:_.dataTable(),l(g),i(g.oLanguage),g.aLengthMenu&&!g.iDisplayLength&&(g.iDisplayLength=t.isArray(g.aLengthMenu[0])?g.aLengthMenu[0][0]:g.aLengthMenu[0]),g=Pt(t.extend(!0,{},S),g),Rt(I.oFeatures,g,"bPaginate bLengthChange bFilter bSort bSortMulti bInfo bProcessing bAutoWidth bSortClasses bServerSide bDeferRender".split(" ")),Rt(I,g,["asStripeClasses","ajax","fnServerData","fnFormatNumber","sServerMethod","aaSorting","aaSortingFixed","aLengthMenu","sPaginationType","sAjaxSource","sAjaxDataProp","iStateDuration","sDom","bSortCellsTop","iTabIndex","fnStateLoadCallback","fnStateSaveCallback","renderer","searchDelay","rowId",["iCookieDuration","iStateDuration"],["oSearch","oPreviousSearch"],["aoSearchCols","aoPreSearchCols"],["iDisplayLength","_iDisplayLength"]]),Rt(I.oScroll,g,[["sScrollX","sX"],["sScrollXInner","sXInner"],["sScrollY","sY"],["bScrollCollapse","bCollapse"]]),Rt(I.oLanguage,g,"fnInfoCallback"),Nt(I,"aoDrawCallback",g.fnDrawCallback,"user"),Nt(I,"aoServerParams",g.fnServerParams,"user"),Nt(I,"aoStateSaveParams",g.fnStateSaveParams,"user"),Nt(I,"aoStateLoadParams",g.fnStateLoadParams,"user"),Nt(I,"aoStateLoaded",g.fnStateLoaded,"user"),Nt(I,"aoRowCallback",g.fnRowCallback,"user"),Nt(I,"aoRowCreatedCallback",g.fnCreatedRow,"user"),Nt(I,"aoHeaderCallback",g.fnHeaderCallback,"user"),Nt(I,"aoFooterCallback",g.fnFooterCallback,"user"),Nt(I,"aoInitComplete",g.fnInitComplete,"user"),Nt(I,"aoPreDrawCallback",g.fnPreDrawCallback,"user"),I.rowIdFn=w(g.rowId),u(I)
var A=I.oClasses
t.extend(A,qt.ext.classes,g.oClasses),_.addClass(A.sTable),I.iInitDisplayStart===a&&(I.iInitDisplayStart=g.iDisplayStart,I._iDisplayStart=g.iDisplayStart),null!==g.iDeferLoading&&(I.bDeferLoading=!0,p=t.isArray(g.iDeferLoading),I._iRecordsDisplay=p?g.iDeferLoading[0]:g.iDeferLoading,I._iRecordsTotal=p?g.iDeferLoading[1]:g.iDeferLoading)
var F=I.oLanguage
t.extend(!0,F,g.oLanguage),F.sUrl&&(t.ajax({dataType:"json",url:F.sUrl,success:function(e){i(e),o(S.oLanguage,e),t.extend(!0,F,e),rt(I)},error:function(){rt(I)}}),m=!0),null===g.asStripeClasses&&(I.asStripeClasses=[A.sStripeOdd,A.sStripeEven])
p=I.asStripeClasses
var L=_.children("tbody").find("tr").eq(0)
if(-1!==t.inArray(!0,t.map(p,(function(t){return L.hasClass(t)})))&&(t("tbody tr",this).removeClass(p.join(" ")),I.asDestroyStripes=p.slice()),p=[],0!==(T=this.getElementsByTagName("thead")).length&&(W(I.aoHeader,T[0]),p=E(I)),null===g.aoColumns)for(T=[],b=0,h=p.length;b<h;b++)T.push(null)
else T=g.aoColumns
for(b=0,h=T.length;b<h;b++)f(I,p?p[b]:null)
if(v(I,g.aoColumnDefs,T,(function(t,e){d(I,t,e)})),L.length){var R=function(t,e){return null!==t.getAttribute("data-"+e)?e:null}
t(L[0]).children("th, td").each((function(t,e){var n=I.aoColumns[t]
if(n.mData===t){var r=R(e,"sort")||R(e,"order"),o=R(e,"filter")||R(e,"search")
null===r&&null===o||(n.mData={_:t+".display",sort:null!==r?t+".@data-"+r:a,type:null!==r?t+".@data-"+r:a,filter:null!==o?t+".@data-"+o:a},d(I,t))}}))}var P=I.oFeatures
p=function(){if(g.aaSorting===a){var e=I.aaSorting
for(b=0,h=e.length;b<h;b++)e[b][1]=I.aoColumns[b].asSorting[0]}wt(I),P.bSort&&Nt(I,"aoDrawCallback",(function(){if(I.bSorted){var e=Dt(I),n={}
t.each(e,(function(t,e){n[e.src]=e.dir})),Ht(I,null,"order",[I,e,n]),_t(I)}})),Nt(I,"aoDrawCallback",(function(){(I.bSorted||"ssp"===Mt(I)||P.bDeferRender)&&wt(I)}),"sc")
e=_.children("caption").each((function(){this._captionSide=t(this).css("caption-side")}))
var n=_.children("thead")
if(0===n.length&&(n=t("<thead/>").appendTo(_)),I.nTHead=n[0],0===(n=_.children("tbody")).length&&(n=t("<tbody/>").appendTo(_)),I.nTBody=n[0],0===(n=_.children("tfoot")).length&&e.length>0&&(""!==I.oScroll.sX||""!==I.oScroll.sY)&&(n=t("<tfoot/>").appendTo(_)),0===n.length||0===n.children().length?_.addClass(A.sNoFooter):n.length>0&&(I.nTFoot=n[0],W(I.aoFooter,I.nTFoot)),g.aaData)for(b=0;b<g.aaData.length;b++)D(I,g.aaData[b])
else(I.bDeferLoading||"dom"==Mt(I))&&y(I,t(I.nTBody).children("tr"))
I.aiDisplay=I.aiDisplayMaster.slice(),I.bInitialised=!0,!1===m&&rt(I)}
g.bStateSave?(P.bStateSave=!0,Nt(I,"aoDrawCallback",It,"state_save"),At(I,g,p)):p()}})),n=null,this},Gt={},$t=/[\r\n\u2028]/g,zt=/<.*?>/g,Yt=/^\d{2,4}[\.\/\-]\d{1,2}[\.\/\-]\d{1,2}([T ]{1}\d{1,2}[:\.]\d{2}([\.:]\d{2})?)?$/,Zt=RegExp("(\\/|\\.|\\*|\\+|\\?|\\||\\(|\\)|\\[|\\]|\\{|\\}|\\\\|\\$|\\^|\\-)","g"),Kt=/[',$£€¥%\u2009\u202F\u20BD\u20a9\u20BArfkɃΞ]/gi,Qt=function(t){return!t||!0===t||"-"===t},te=function(t){var e=parseInt(t,10)
return!isNaN(e)&&isFinite(t)?e:null},ee=function(t,e){return Gt[e]||(Gt[e]=RegExp(de(e),"g")),"string"==typeof t&&"."!==e?t.replace(/\./g,"").replace(Gt[e],"."):t},ne=function(t,e,n){var a="string"==typeof t
return!!Qt(t)||(e&&a&&(t=ee(t,e)),n&&a&&(t=t.replace(Kt,"")),!isNaN(parseFloat(t))&&isFinite(t))},ae=function(t,e,n){return!!Qt(t)||((Qt(t)||"string"==typeof t)&&!!ne(t.replace(zt,""),e,n)||null)},re=function(t,e,n){var r=[],o=0,i=t.length
if(n!==a)for(;o<i;o++)t[o]&&t[o][e]&&r.push(t[o][e][n])
else for(;o<i;o++)t[o]&&r.push(t[o][e])
return r},oe=function(t,e,n,r){var o=[],i=0,l=e.length
if(r!==a)for(;i<l;i++)t[e[i]][n]&&o.push(t[e[i]][n][r])
else for(;i<l;i++)o.push(t[e[i]][n])
return o},ie=function(t,e){var n,r=[]
e===a?(e=0,n=t):(n=e,e=t)
for(var o=e;o<n;o++)r.push(o)
return r},le=function(t){for(var e=[],n=0,a=t.length;n<a;n++)t[n]&&e.push(t[n])
return e},se=function(t){var e
t:{if(!(2>t.length))for(var n=(e=t.slice().sort())[0],a=1,r=e.length;a<r;a++){if(e[a]===n){e=!1
break t}n=e[a]}e=!0}if(e)return t.slice()
e=[]
r=t.length
var o,i=0
a=0
t:for(;a<r;a++){for(n=t[a],o=0;o<i;o++)if(e[o]===n)continue t
e.push(n),i++}return e}
qt.util={throttle:function(t,e){var n,r,o=e!==a?e:200
return function(){var e=this,i=+new Date,l=arguments
n&&i<n+o?(clearTimeout(r),r=setTimeout((function(){n=a,t.apply(e,l)}),o)):(n=i,t.apply(e,l))}},escapeRegex:function(t){return t.replace(Zt,"\\$1")}}
var ue=function(t,e,n){t[e]!==a&&(t[n]=t[e])},ce=/\[.*?\]$/,fe=/\(\)$/,de=qt.util.escapeRegex,he=t("<div>")[0],pe=he.textContent!==a,ge=/<.*?>/g,be=qt.util.throttle,me=[],Se=Array.prototype
Vt=function(e,n){if(!(this instanceof Vt))return new Vt(e,n)
var a=[],r=function(e){(e=function(e){var n,a,r=qt.settings,o=t.map(r,(function(t){return t.nTable}))
return e?e.nTable&&e.oApi?[e]:e.nodeName&&"table"===e.nodeName.toLowerCase()?-1!==(n=t.inArray(e,o))?[r[n]]:null:e&&"function"==typeof e.settings?e.settings().toArray():("string"==typeof e?a=t(e):e instanceof t&&(a=e),a?a.map((function(){return-1!==(n=t.inArray(this,o))?r[n]:null})).toArray():void 0):[]}(e))&&a.push.apply(a,e)}
if(t.isArray(e))for(var o=0,i=e.length;o<i;o++)r(e[o])
else r(e)
this.context=se(a),n&&t.merge(this,n),this.selector={rows:null,cols:null,opts:null},Vt.extend(this,this,me)},qt.Api=Vt,t.extend(Vt.prototype,{any:function(){return 0!==this.count()},concat:Se.concat,context:[],count:function(){return this.flatten().length},each:function(t){for(var e=0,n=this.length;e<n;e++)t.call(this,this[e],e,this)
return this},eq:function(t){var e=this.context
return e.length>t?new Vt(e[t],this[t]):null},filter:function(t){var e=[]
if(Se.filter)e=Se.filter.call(this,t,this)
else for(var n=0,a=this.length;n<a;n++)t.call(this,this[n],n,this)&&e.push(this[n])
return new Vt(this.context,e)},flatten:function(){var t=[]
return new Vt(this.context,t.concat.apply(t,this.toArray()))},join:Se.join,indexOf:Se.indexOf||function(t,e){for(var n=e||0,a=this.length;n<a;n++)if(this[n]===t)return n
return-1},iterator:function(t,e,n,r){var o,i,l,s,u,c,f,d=[],h=this.context,p=this.selector
for("string"==typeof t&&(r=n,n=e,e=t,t=!1),i=0,l=h.length;i<l;i++){var g=new Vt(h[i])
if("table"===e)(o=n.call(g,h[i],i))!==a&&d.push(o)
else if("columns"===e||"rows"===e)(o=n.call(g,h[i],this[i],i))!==a&&d.push(o)
else if("column"===e||"column-rows"===e||"row"===e||"cell"===e)for(f=this[i],"column-rows"===e&&(c=Ce(h[i],p.opts)),s=0,u=f.length;s<u;s++)o=f[s],(o="cell"===e?n.call(g,h[i],o.row,o.column,i,s):n.call(g,h[i],o,i,s,c))!==a&&d.push(o)}return d.length||r?((e=(t=new Vt(h,t?d.concat.apply([],d):d)).selector).rows=p.rows,e.cols=p.cols,e.opts=p.opts,t):this},lastIndexOf:Se.lastIndexOf||function(t,e){return this.indexOf.apply(this.toArray.reverse(),arguments)},length:0,map:function(t){var e=[]
if(Se.map)e=Se.map.call(this,t,this)
else for(var n=0,a=this.length;n<a;n++)e.push(t.call(this,this[n],n))
return new Vt(this.context,e)},pluck:function(t){return this.map((function(e){return e[t]}))},pop:Se.pop,push:Se.push,reduce:Se.reduce||function(t,e){return c(this,t,e,0,this.length,1)},reduceRight:Se.reduceRight||function(t,e){return c(this,t,e,this.length-1,-1,-1)},reverse:Se.reverse,selector:null,shift:Se.shift,slice:function(){return new Vt(this.context,this)},sort:Se.sort,splice:Se.splice,toArray:function(){return Se.slice.call(this)},to$:function(){return t(this)},toJQuery:function(){return t(this)},unique:function(){return new Vt(this.context,se(this))},unshift:Se.unshift}),Vt.extend=function(t,e,n){if(n.length&&e&&(e instanceof Vt||e.__dt_wrapper)){var a,r,o,i=function(t,e,n){return function(){var a=e.apply(t,arguments)
return Vt.extend(a,a,n.methodExt),a}}
for(a=0,r=n.length;a<r;a++)e[(o=n[a]).name]="function"===o.type?i(t,o.val,o):"object"===o.type?{}:o.val,e[o.name].__dt_wrapper=!0,Vt.extend(t,e[o.name],o.propExt)}},Vt.register=Xt=function(e,n){if(t.isArray(e))for(var a=0,r=e.length;a<r;a++)Vt.register(e[a],n)
else{var o,i,l=e.split("."),s=me
for(a=0,r=l.length;a<r;a++){var u
o=(i=-1!==l[a].indexOf("()"))?l[a].replace("()",""):l[a]
t:{u=0
for(var c=s.length;u<c;u++)if(s[u].name===o){u=s[u]
break t}u=null}u||(u={name:o,val:{},methodExt:[],propExt:[],type:"object"},s.push(u)),a===r-1?(u.val=n,u.type="function"==typeof n?"function":t.isPlainObject(n)?"object":"other"):s=i?u.methodExt:u.propExt}}},Vt.registerPlural=Jt=function(e,n,r){Vt.register(e,r),Vt.register(n,(function(){var e=r.apply(this,arguments)
return e===this?this:e instanceof Vt?e.length?t.isArray(e[0])?new Vt(e.context,e[0]):e[0]:a:e}))}
var ve=function(e,n){if(t.isArray(e))return t.map(e,(function(t){return ve(t,n)}))
if("number"==typeof e)return[n[e]]
var a=t.map(n,(function(t){return t.nTable}))
return t(a).filter(e).map((function(){var e=t.inArray(this,a)
return n[e]})).toArray()}
Xt("tables()",(function(t){return t!==a&&null!==t?new Vt(ve(t,this.context)):this})),Xt("table()",(function(t){var e=(t=this.tables(t)).context
return e.length?new Vt(e[0]):t})),Jt("tables().nodes()","table().node()",(function(){return this.iterator("table",(function(t){return t.nTable}),1)})),Jt("tables().body()","table().body()",(function(){return this.iterator("table",(function(t){return t.nTBody}),1)})),Jt("tables().header()","table().header()",(function(){return this.iterator("table",(function(t){return t.nTHead}),1)})),Jt("tables().footer()","table().footer()",(function(){return this.iterator("table",(function(t){return t.nTFoot}),1)})),Jt("tables().containers()","table().container()",(function(){return this.iterator("table",(function(t){return t.nTableWrapper}),1)})),Xt("draw()",(function(t){return this.iterator("table",(function(e){"page"===t?O(e):("string"==typeof t&&(t="full-hold"!==t),k(e,!1===t))}))})),Xt("page()",(function(t){return t===a?this.page.info().page:this.iterator("table",(function(e){ut(e,t)}))})),Xt("page.info()",(function(){if(0===this.context.length)return a
var t=this.context[0],e=t._iDisplayStart,n=t.oFeatures.bPaginate?t._iDisplayLength:-1,r=t.fnRecordsDisplay(),o=-1===n
return{page:o?0:Math.floor(e/n),pages:o?1:Math.ceil(r/n),start:e,end:t.fnDisplayEnd(),length:n,recordsTotal:t.fnRecordsTotal(),recordsDisplay:r,serverSide:"ssp"===Mt(t)}})),Xt("page.len()",(function(t){return t===a?0!==this.context.length?this.context[0]._iDisplayLength:a:this.iterator("table",(function(e){it(e,t)}))}))
var De=function(t,e,n){if(n){var a=new Vt(t)
a.one("draw",(function(){n(a.ajax.json())}))}if("ssp"==Mt(t))k(t,e)
else{ft(t,!0)
var r=t.jqXHR
r&&4!==r.readyState&&r.abort(),B(t,[],(function(n){A(t)
for(var a=0,r=(n=J(t,n)).length;a<r;a++)D(t,n[a])
k(t,e),ft(t,!1)}))}}
Xt("ajax.json()",(function(){var t=this.context
if(0<t.length)return t[0].json})),Xt("ajax.params()",(function(){var t=this.context
if(0<t.length)return t[0].oAjaxData})),Xt("ajax.reload()",(function(t,e){return this.iterator("table",(function(n){De(n,!1===e,t)}))})),Xt("ajax.url()",(function(e){var n=this.context
return e===a?0===n.length?a:(n=n[0]).ajax?t.isPlainObject(n.ajax)?n.ajax.url:n.ajax:n.sAjaxSource:this.iterator("table",(function(n){t.isPlainObject(n.ajax)?n.ajax.url=e:n.ajax=e}))})),Xt("ajax.url().load()",(function(t,e){return this.iterator("table",(function(n){De(n,!1===e,t)}))}))
var ye=function(e,n,r,o,i){var l,s,u,c,f,d,h=[]
for(u=typeof n,n&&"string"!==u&&"function"!==u&&n.length!==a||(n=[n]),u=0,c=n.length;u<c;u++)for(f=0,d=(s=n[u]&&n[u].split&&!n[u].match(/[\[\(:]/)?n[u].split(","):[n[u]]).length;f<d;f++)(l=r("string"==typeof s[f]?t.trim(s[f]):s[f]))&&l.length&&(h=h.concat(l))
if((e=Ut.selector[e]).length)for(u=0,c=e.length;u<c;u++)h=e[u](o,i,h)
return se(h)},_e=function(e){return e||(e={}),e.filter&&e.search===a&&(e.search=e.filter),t.extend({search:"none",order:"current",page:"all"},e)},Te=function(t){for(var e=0,n=t.length;e<n;e++)if(0<t[e].length)return t[0]=t[e],t[0].length=1,t.length=1,t.context=[t.context[e]],t
return t.length=0,t},Ce=function(e,n){var a,r,o,i=[],l=e.aiDisplay
o=e.aiDisplayMaster
var s=n.search
if(a=n.order,r=n.page,"ssp"==Mt(e))return"removed"===s?[]:ie(0,o.length)
if("current"==r)for(a=e._iDisplayStart,r=e.fnDisplayEnd();a<r;a++)i.push(l[a])
else if("current"==a||"applied"==a){if("none"==s)i=o.slice()
else if("applied"==s)i=l.slice()
else if("removed"==s){var u={}
for(a=0,r=l.length;a<r;a++)u[l[a]]=null
i=t.map(o,(function(t){return u.hasOwnProperty(t)?null:t}))}}else if("index"==a||"original"==a)for(a=0,r=e.aoData.length;a<r;a++)"none"==s?i.push(a):(-1===(o=t.inArray(a,l))&&"removed"==s||0<=o&&"applied"==s)&&i.push(a)
return i}
Xt("rows()",(function(e,n){e===a?e="":t.isPlainObject(e)&&(n=e,e="")
n=_e(n)
var r=this.iterator("table",(function(r){var o,i=n
return ye("row",e,(function(e){var n=te(e),l=r.aoData
if(null!==n&&!i)return[n]
if(o||(o=Ce(r,i)),null!==n&&-1!==t.inArray(n,o))return[n]
if(null===e||e===a||""===e)return o
if("function"==typeof e)return t.map(o,(function(t){var n=l[t]
return e(t,n._aData,n.nTr)?t:null}))
if(e.nodeName){n=e._DT_RowIndex
var s=e._DT_CellIndex
return n!==a?l[n]&&l[n].nTr===e?[n]:[]:s?l[s.row]&&l[s.row].nTr===e.parentNode?[s.row]:[]:(n=t(e).closest("*[data-dt-row]")).length?[n.data("dt-row")]:[]}return"string"==typeof e&&"#"===e.charAt(0)&&(n=r.aIds[e.replace(/^#/,"")])!==a?[n.idx]:(n=le(oe(r.aoData,o,"nTr")),t(n).filter(e).map((function(){return this._DT_RowIndex})).toArray())}),r,i)}),1)
return r.selector.rows=e,r.selector.opts=n,r})),Xt("rows().nodes()",(function(){return this.iterator("row",(function(t,e){return t.aoData[e].nTr||a}),1)})),Xt("rows().data()",(function(){return this.iterator(!0,"rows",(function(t,e){return oe(t.aoData,e,"_aData")}),1)})),Jt("rows().cache()","row().cache()",(function(t){return this.iterator("row",(function(e,n){var a=e.aoData[n]
return"search"===t?a._aFilterData:a._aSortData}),1)})),Jt("rows().invalidate()","row().invalidate()",(function(t){return this.iterator("row",(function(e,n){L(e,n,t)}))})),Jt("rows().indexes()","row().index()",(function(){return this.iterator("row",(function(t,e){return e}),1)})),Jt("rows().ids()","row().id()",(function(t){for(var e=[],n=this.context,a=0,r=n.length;a<r;a++)for(var o=0,i=this[a].length;o<i;o++){var l=n[a].rowIdFn(n[a].aoData[this[a][o]]._aData)
e.push((!0===t?"#":"")+l)}return new Vt(n,e)})),Jt("rows().remove()","row().remove()",(function(){var t=this
return this.iterator("row",(function(e,n,r){var o,i,l,s,u,c=e.aoData,f=c[n]
for(c.splice(n,1),o=0,i=c.length;o<i;o++)if(u=(l=c[o]).anCells,null!==l.nTr&&(l.nTr._DT_RowIndex=o),null!==u)for(l=0,s=u.length;l<s;l++)u[l]._DT_CellIndex.row=o
F(e.aiDisplayMaster,n),F(e.aiDisplay,n),F(t[r],n,!1),0<e._iRecordsDisplay&&e._iRecordsDisplay--,Ot(e),(n=e.rowIdFn(f._aData))!==a&&delete e.aIds[n]})),this.iterator("table",(function(t){for(var e=0,n=t.aoData.length;e<n;e++)t.aoData[e].idx=e})),this})),Xt("rows.add()",(function(e){var n=this.iterator("table",(function(t){var n,a,r,o=[]
for(a=0,r=e.length;a<r;a++)(n=e[a]).nodeName&&"TR"===n.nodeName.toUpperCase()?o.push(y(t,n)[0]):o.push(D(t,n))
return o}),1),a=this.rows(-1)
return a.pop(),t.merge(a,n),a})),Xt("row()",(function(t,e){return Te(this.rows(t,e))})),Xt("row().data()",(function(e){var n=this.context
if(e===a)return n.length&&this.length?n[0].aoData[this[0]]._aData:a
var r=n[0].aoData[this[0]]
return r._aData=e,t.isArray(e)&&r.nTr&&r.nTr.id&&x(n[0].rowId)(e,r.nTr.id),L(n[0],this[0],"data"),this})),Xt("row().node()",(function(){var t=this.context
return t.length&&this.length&&t[0].aoData[this[0]].nTr||null})),Xt("row.add()",(function(e){e instanceof t&&e.length&&(e=e[0])
var n=this.iterator("table",(function(t){return e.nodeName&&"TR"===e.nodeName.toUpperCase()?y(t,e)[0]:D(t,e)}))
return this.row(n[0])}))
var we=function(t,e){var n=t.context
n.length&&(n=n[0].aoData[e!==a?e:t[0]])&&n._details&&(n._details.remove(),n._detailsShow=a,n._details=a)},xe=function(t,e){var n=t.context
if(n.length&&t.length){var a=n[0].aoData[t[0]]
if(a._details){(a._detailsShow=e)?a._details.insertAfter(a.nTr):a._details.detach()
var r=n[0],o=new Vt(r),i=r.aoData
o.off("draw.dt.DT_details column-visibility.dt.DT_details destroy.dt.DT_details"),0<re(i,"_details").length&&(o.on("draw.dt.DT_details",(function(t,e){r===e&&o.rows({page:"current"}).eq(0).each((function(t){(t=i[t])._detailsShow&&t._details.insertAfter(t.nTr)}))})),o.on("column-visibility.dt.DT_details",(function(t,e){if(r===e)for(var n,a=b(e),o=0,l=i.length;o<l;o++)(n=i[o])._details&&n._details.children("td[colspan]").attr("colspan",a)})),o.on("destroy.dt.DT_details",(function(t,e){if(r===e)for(var n=0,a=i.length;n<a;n++)i[n]._details&&we(o,n)})))}}}
Xt("row().child()",(function(e,n){var r=this.context
if(e===a)return r.length&&this.length?r[0].aoData[this[0]]._details:a
if(!0===e)this.child.show()
else if(!1===e)we(this)
else if(r.length&&this.length){var o=r[0],i=(r=r[0].aoData[this[0]],[]),l=function(e,n){if(t.isArray(e)||e instanceof t)for(var a=0,r=e.length;a<r;a++)l(e[a],n)
else e.nodeName&&"tr"===e.nodeName.toLowerCase()?i.push(e):(a=t("<tr><td/></tr>").addClass(n),t("td",a).addClass(n).html(e)[0].colSpan=b(o),i.push(a[0]))}
l(e,n),r._details&&r._details.detach(),r._details=t(i),r._detailsShow&&r._details.insertAfter(r.nTr)}return this})),Xt(["row().child.show()","row().child().show()"],(function(){return xe(this,!0),this})),Xt(["row().child.hide()","row().child().hide()"],(function(){return xe(this,!1),this})),Xt(["row().child.remove()","row().child().remove()"],(function(){return we(this),this})),Xt("row().child.isShown()",(function(){var t=this.context
return t.length&&this.length&&t[0].aoData[this[0]]._detailsShow||!1}))
var Ie=/^([^:]+):(name|visIdx|visible)$/,Ae=function(t,e,n,a,r){n=[],a=0
for(var o=r.length;a<o;a++)n.push(_(t,r[a],e))
return n}
Xt("columns()",(function(e,n){e===a?e="":t.isPlainObject(e)&&(n=e,e="")
n=_e(n)
var r=this.iterator("table",(function(a){var r=e,o=n,i=a.aoColumns,l=re(i,"sName"),s=re(i,"nTh")
return ye("column",r,(function(e){var n=te(e)
if(""===e)return ie(i.length)
if(null!==n)return[n>=0?n:i.length+n]
if("function"==typeof e){var r=Ce(a,o)
return t.map(i,(function(t,n){return e(n,Ae(a,n,0,0,r),s[n])?n:null}))}var u="string"==typeof e?e.match(Ie):""
if(u)switch(u[2]){case"visIdx":case"visible":if((n=parseInt(u[1],10))<0){var c=t.map(i,(function(t,e){return t.bVisible?e:null}))
return[c[c.length+n]]}return[p(a,n)]
case"name":return t.map(l,(function(t,e){return t===u[1]?e:null}))
default:return[]}return e.nodeName&&e._DT_CellIndex?[e._DT_CellIndex.column]:(n=t(s).filter(e).map((function(){return t.inArray(this,s)})).toArray()).length||!e.nodeName?n:(n=t(e).closest("*[data-dt-column]")).length?[n.data("dt-column")]:[]}),a,o)}),1)
return r.selector.cols=e,r.selector.opts=n,r})),Jt("columns().header()","column().header()",(function(){return this.iterator("column",(function(t,e){return t.aoColumns[e].nTh}),1)})),Jt("columns().footer()","column().footer()",(function(){return this.iterator("column",(function(t,e){return t.aoColumns[e].nTf}),1)})),Jt("columns().data()","column().data()",(function(){return this.iterator("column-rows",Ae,1)})),Jt("columns().dataSrc()","column().dataSrc()",(function(){return this.iterator("column",(function(t,e){return t.aoColumns[e].mData}),1)})),Jt("columns().cache()","column().cache()",(function(t){return this.iterator("column-rows",(function(e,n,a,r,o){return oe(e.aoData,o,"search"===t?"_aFilterData":"_aSortData",n)}),1)})),Jt("columns().nodes()","column().nodes()",(function(){return this.iterator("column-rows",(function(t,e,n,a,r){return oe(t.aoData,r,"anCells",e)}),1)})),Jt("columns().visible()","column().visible()",(function(e,n){var r=this,o=this.iterator("column",(function(n,r){if(e===a)return n.aoColumns[r].bVisible
var o,i,l,s=n.aoColumns,u=s[r],c=n.aoData
if(e!==a&&u.bVisible!==e){if(e){var f=t.inArray(!0,re(s,"bVisible"),r+1)
for(o=0,i=c.length;o<i;o++)l=c[o].nTr,s=c[o].anCells,l&&l.insertBefore(s[r],s[f]||null)}else t(re(n.aoData,"anCells",r)).detach()
u.bVisible=e}}))
return e!==a&&this.iterator("table",(function(o){H(o,o.aoHeader),H(o,o.aoFooter),o.aiDisplay.length||t(o.nTBody).find("td[colspan]").attr("colspan",b(o)),It(o),r.iterator("column",(function(t,a){Ht(t,null,"column-visibility",[t,a,e,n])})),(n===a||n)&&r.columns.adjust()})),o})),Jt("columns().indexes()","column().index()",(function(t){return this.iterator("column",(function(e,n){return"visible"===t?g(e,n):n}),1)})),Xt("columns.adjust()",(function(){return this.iterator("table",(function(t){h(t)}),1)})),Xt("column.index()",(function(t,e){if(0!==this.context.length){var n=this.context[0]
if("fromVisible"===t||"toData"===t)return p(n,e)
if("fromData"===t||"toVisible"===t)return g(n,e)}})),Xt("column()",(function(t,e){return Te(this.columns(t,e))})),Xt("cells()",(function(e,n,r){if(t.isPlainObject(e)&&(e.row===a?(r=e,e=null):(r=n,n=null)),t.isPlainObject(n)&&(r=n,n=null),null===n||n===a)return this.iterator("table",(function(n){var o,i,l,s,u,c,f,d=e,h=_e(r),p=n.aoData,g=Ce(n,h),b=le(oe(p,g,"anCells")),m=t([].concat.apply([],b)),S=n.aoColumns.length
return ye("cell",d,(function(e){var r="function"==typeof e
if(null===e||e===a||r){for(i=[],l=0,s=g.length;l<s;l++)for(o=g[l],u=0;u<S;u++)c={row:o,column:u},r?(f=p[o],e(c,_(n,o,u),f.anCells?f.anCells[u]:null)&&i.push(c)):i.push(c)
return i}return t.isPlainObject(e)?e.column!==a&&e.row!==a&&-1!==t.inArray(e.row,g)?[e]:[]:(r=m.filter(e).map((function(t,e){return{row:e._DT_CellIndex.row,column:e._DT_CellIndex.column}})).toArray(),r.length||!e.nodeName?r:(f=t(e).closest("*[data-dt-row]")).length?[{row:f.data("dt-row"),column:f.data("dt-column")}]:[])}),n,h)}))
var o,i,l,s,u=r?{page:r.page,order:r.order,search:r.search}:{},c=this.columns(n,u),f=this.rows(e,u)
u=this.iterator("table",(function(t,e){var n=[]
for(o=0,i=f[e].length;o<i;o++)for(l=0,s=c[e].length;l<s;l++)n.push({row:f[e][o],column:c[e][l]})
return n}),1),u=r&&r.selected?this.cells(u,r):u
return t.extend(u.selector,{cols:n,rows:e,opts:r}),u})),Jt("cells().nodes()","cell().node()",(function(){return this.iterator("cell",(function(t,e,n){return(t=t.aoData[e])&&t.anCells?t.anCells[n]:a}),1)})),Xt("cells().data()",(function(){return this.iterator("cell",(function(t,e,n){return _(t,e,n)}),1)})),Jt("cells().cache()","cell().cache()",(function(t){return t="search"===t?"_aFilterData":"_aSortData",this.iterator("cell",(function(e,n,a){return e.aoData[n][t][a]}),1)})),Jt("cells().render()","cell().render()",(function(t){return this.iterator("cell",(function(e,n,a){return _(e,n,a,t)}),1)})),Jt("cells().indexes()","cell().index()",(function(){return this.iterator("cell",(function(t,e,n){return{row:e,column:n,columnVisible:g(t,n)}}),1)})),Jt("cells().invalidate()","cell().invalidate()",(function(t){return this.iterator("cell",(function(e,n,a){L(e,n,t,a)}))})),Xt("cell()",(function(t,e,n){return Te(this.cells(t,e,n))})),Xt("cell().data()",(function(t){var e=this.context,n=this[0]
return t===a?e.length&&n.length?_(e[0],n[0].row,n[0].column):a:(T(e[0],n[0].row,n[0].column,t),L(e[0],n[0].row,"data",n[0].column),this)})),Xt("order()",(function(e,n){var r=this.context
return e===a?0!==r.length?r[0].aaSorting:a:("number"==typeof e?e=[[e,n]]:e.length&&!t.isArray(e[0])&&(e=Array.prototype.slice.call(arguments)),this.iterator("table",(function(t){t.aaSorting=e.slice()})))})),Xt("order.listener()",(function(t,e,n){return this.iterator("table",(function(a){Ct(a,t,e,n)}))})),Xt("order.fixed()",(function(e){if(!e){var n=(n=this.context).length?n[0].aaSortingFixed:a
return t.isArray(n)?{pre:n}:n}return this.iterator("table",(function(n){n.aaSortingFixed=t.extend(!0,{},e)}))})),Xt(["columns().order()","column().order()"],(function(e){var n=this
return this.iterator("table",(function(a,r){var o=[]
t.each(n[r],(function(t,n){o.push([n,e])})),a.aaSorting=o}))})),Xt("search()",(function(e,n,r,o){var i=this.context
return e===a?0!==i.length?i[0].oPreviousSearch.sSearch:a:this.iterator("table",(function(a){a.oFeatures.bFilter&&G(a,t.extend({},a.oPreviousSearch,{sSearch:e+"",bRegex:null!==n&&n,bSmart:null===r||r,bCaseInsensitive:null===o||o}),1)}))})),Jt("columns().search()","column().search()",(function(e,n,r,o){return this.iterator("column",(function(i,l){var s=i.aoPreSearchCols
if(e===a)return s[l].sSearch
i.oFeatures.bFilter&&(t.extend(s[l],{sSearch:e+"",bRegex:null!==n&&n,bSmart:null===r||r,bCaseInsensitive:null===o||o}),G(i,i.oPreviousSearch,1))}))})),Xt("state()",(function(){return this.context.length?this.context[0].oSavedState:null})),Xt("state.clear()",(function(){return this.iterator("table",(function(t){t.fnStateSaveCallback.call(t.oInstance,t,{})}))})),Xt("state.loaded()",(function(){return this.context.length?this.context[0].oLoadedState:null}))
Xt("state.save()",(function(){return this.iterator("table",(function(t){It(t)}))})),qt.versionCheck=qt.fnVersionCheck=function(t){for(var e,n,a=qt.version.split("."),r=0,o=(t=t.split(".")).length;r<o;r++)if((e=parseInt(a[r],10)||0)!==(n=parseInt(t[r],10)||0))return e>n
return!0},qt.isDataTable=qt.fnIsDataTable=function(e){var n=t(e).get(0),a=!1
return e instanceof qt.Api||(t.each(qt.settings,(function(e,r){var o=r.nScrollHead?t("table",r.nScrollHead)[0]:null,i=r.nScrollFoot?t("table",r.nScrollFoot)[0]:null
r.nTable!==n&&o!==n&&i!==n||(a=!0)})),a)},qt.tables=qt.fnTables=function(e){var n=!1
t.isPlainObject(e)&&(n=e.api,e=e.visible)
var a=t.map(qt.settings,(function(n){if(!e||e&&t(n.nTable).is(":visible"))return n.nTable}))
return n?new Vt(a):a},qt.camelToHungarian=o,Xt("$()",(function(e,n){var a=this.rows(n).nodes()
a=t(a)
return t([].concat(a.filter(e).toArray(),a.find(e).toArray()))})),t.each(["on","one","off"],(function(e,n){Xt(n+"()",(function(){var e=Array.prototype.slice.call(arguments)
e[0]=t.map(e[0].split(/\s/),(function(t){return t.match(/\.dt\b/)?t:t+".dt"})).join(" ")
var a=t(this.tables().nodes())
return a[n].apply(a,e),this}))})),Xt("clear()",(function(){return this.iterator("table",(function(t){A(t)}))})),Xt("settings()",(function(){return new Vt(this.context,this.context)})),Xt("init()",(function(){var t=this.context
return t.length?t[0].oInit:null})),Xt("data()",(function(){return this.iterator("table",(function(t){return re(t.aoData,"_aData")})).flatten()})),Xt("destroy()",(function(n){return n=n||!1,this.iterator("table",(function(a){var r,o=a.nTableWrapper.parentNode,i=a.oClasses,l=a.nTable,s=a.nTBody,u=a.nTHead,c=a.nTFoot,f=t(l),d=(s=t(s),t(a.nTableWrapper)),h=t.map(a.aoData,(function(t){return t.nTr}))
a.bDestroying=!0,Ht(a,"aoDestroyCallback","destroy",[a]),n||new Vt(a).columns().visible(!0),d.off(".DT").find(":not(tbody *)").off(".DT"),t(e).off(".DT-"+a.sInstance),l!=u.parentNode&&(f.children("thead").detach(),f.append(u)),c&&l!=c.parentNode&&(f.children("tfoot").detach(),f.append(c)),a.aaSorting=[],a.aaSortingFixed=[],wt(a),t(h).removeClass(a.asStripeClasses.join(" ")),t("th, td",u).removeClass(i.sSortable+" "+i.sSortableAsc+" "+i.sSortableDesc+" "+i.sSortableNone),s.children().detach(),s.append(h),f[u=n?"remove":"detach"](),d[u](),!n&&o&&(o.insertBefore(l,a.nTableReinsertBefore),f.css("width",a.sDestroyWidth).removeClass(i.sTable),(r=a.asDestroyStripes.length)&&s.children().each((function(e){t(this).addClass(a.asDestroyStripes[e%r])}))),-1!==(o=t.inArray(a,qt.settings))&&qt.settings.splice(o,1)}))})),t.each(["column","row","cell"],(function(t,e){Xt(e+"s().every()",(function(t){var n=this.selector.opts,r=this
return this.iterator(e,(function(o,i,l,s,u){t.call(r[e](i,"cell"===e?l:n,"cell"===e?n:a),i,l,s,u)}))}))})),Xt("i18n()",(function(e,n,r){var o=this.context[0]
return(e=w(e)(o.oLanguage))===a&&(e=n),r!==a&&t.isPlainObject(e)&&(e=e[r]!==a?e[r]:e._),e.replace("%d",r)})),qt.version="1.10.21",qt.settings=[],qt.models={},qt.models.oSearch={bCaseInsensitive:!0,sSearch:"",bRegex:!1,bSmart:!0},qt.models.oRow={nTr:null,anCells:null,_aData:[],_aSortData:null,_aFilterData:null,_sFilterRow:null,_sRowStripe:"",src:null,idx:-1},qt.models.oColumn={idx:null,aDataSort:null,asSorting:null,bSearchable:null,bSortable:null,bVisible:null,_sManualType:null,_bAttrSrc:!1,fnCreatedCell:null,fnGetData:null,fnSetData:null,mData:null,mRender:null,nTh:null,nTf:null,sClass:null,sContentPadding:null,sDefaultContent:null,sName:null,sSortDataType:"std",sSortingClass:null,sSortingClassJUI:null,sTitle:null,sType:null,sWidth:null,sWidthOrig:null},qt.defaults={aaData:null,aaSorting:[[0,"asc"]],aaSortingFixed:[],ajax:null,aLengthMenu:[10,25,50,100],aoColumns:null,aoColumnDefs:null,aoSearchCols:[],asStripeClasses:null,bAutoWidth:!0,bDeferRender:!1,bDestroy:!1,bFilter:!0,bInfo:!0,bLengthChange:!0,bPaginate:!0,bProcessing:!1,bRetrieve:!1,bScrollCollapse:!1,bServerSide:!1,bSort:!0,bSortMulti:!0,bSortCellsTop:!1,bSortClasses:!0,bStateSave:!1,fnCreatedRow:null,fnDrawCallback:null,fnFooterCallback:null,fnFormatNumber:function(t){return t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,this.oLanguage.sThousands)},fnHeaderCallback:null,fnInfoCallback:null,fnInitComplete:null,fnPreDrawCallback:null,fnRowCallback:null,fnServerData:null,fnServerParams:null,fnStateLoadCallback:function(t){try{return JSON.parse((-1===t.iStateDuration?sessionStorage:localStorage).getItem("DataTables_"+t.sInstance+"_"+location.pathname))}catch(e){return{}}},fnStateLoadParams:null,fnStateLoaded:null,fnStateSaveCallback:function(t,e){try{(-1===t.iStateDuration?sessionStorage:localStorage).setItem("DataTables_"+t.sInstance+"_"+location.pathname,JSON.stringify(e))}catch(n){}},fnStateSaveParams:null,iStateDuration:7200,iDeferLoading:null,iDisplayLength:10,iDisplayStart:0,iTabIndex:0,oClasses:{},oLanguage:{oAria:{sSortAscending:": activate to sort column ascending",sSortDescending:": activate to sort column descending"},oPaginate:{sFirst:"First",sLast:"Last",sNext:"Next",sPrevious:"Previous"},sEmptyTable:"No data available in table",sInfo:"Showing _START_ to _END_ of _TOTAL_ entries",sInfoEmpty:"Showing 0 to 0 of 0 entries",sInfoFiltered:"(filtered from _MAX_ total entries)",sInfoPostFix:"",sDecimal:"",sThousands:",",sLengthMenu:"Show _MENU_ entries",sLoadingRecords:"Loading...",sProcessing:"Processing...",sSearch:"Search:",sSearchPlaceholder:"",sUrl:"",sZeroRecords:"No matching records found"},oSearch:t.extend({},qt.models.oSearch),sAjaxDataProp:"data",sAjaxSource:null,sDom:"lfrtip",searchDelay:null,sPaginationType:"simple_numbers",sScrollX:"",sScrollXInner:"",sScrollY:"",sServerMethod:"GET",renderer:null,rowId:"DT_RowId"},r(qt.defaults),qt.defaults.column={aDataSort:null,iDataSort:-1,asSorting:["asc","desc"],bSearchable:!0,bSortable:!0,bVisible:!0,fnCreatedCell:null,mData:null,mRender:null,sCellType:"td",sClass:"",sContentPadding:"",sDefaultContent:null,sName:"",sSortDataType:"std",sTitle:null,sType:null,sWidth:null},r(qt.defaults.column),qt.models.oSettings={oFeatures:{bAutoWidth:null,bDeferRender:null,bFilter:null,bInfo:null,bLengthChange:null,bPaginate:null,bProcessing:null,bServerSide:null,bSort:null,bSortMulti:null,bSortClasses:null,bStateSave:null},oScroll:{bCollapse:null,iBarWidth:0,sX:null,sXInner:null,sY:null},oLanguage:{fnInfoCallback:null},oBrowser:{bScrollOversize:!1,bScrollbarLeft:!1,bBounding:!1,barWidth:0},ajax:null,aanFeatures:[],aoData:[],aiDisplay:[],aiDisplayMaster:[],aIds:{},aoColumns:[],aoHeader:[],aoFooter:[],oPreviousSearch:{},aoPreSearchCols:[],aaSorting:null,aaSortingFixed:[],asStripeClasses:null,asDestroyStripes:[],sDestroyWidth:0,aoRowCallback:[],aoHeaderCallback:[],aoFooterCallback:[],aoDrawCallback:[],aoRowCreatedCallback:[],aoPreDrawCallback:[],aoInitComplete:[],aoStateSaveParams:[],aoStateLoadParams:[],aoStateLoaded:[],sTableId:"",nTable:null,nTHead:null,nTFoot:null,nTBody:null,nTableWrapper:null,bDeferLoading:!1,bInitialised:!1,aoOpenRows:[],sDom:null,searchDelay:null,sPaginationType:"two_button",iStateDuration:0,aoStateSave:[],aoStateLoad:[],oSavedState:null,oLoadedState:null,sAjaxSource:null,sAjaxDataProp:null,bAjaxDataGet:!0,jqXHR:null,json:a,oAjaxData:a,fnServerData:null,aoServerParams:[],sServerMethod:null,fnFormatNumber:null,aLengthMenu:null,iDraw:0,bDrawing:!1,iDrawError:-1,_iDisplayLength:10,_iDisplayStart:0,_iRecordsTotal:0,_iRecordsDisplay:0,oClasses:{},bFiltered:!1,bSorted:!1,bSortCellsTop:null,oInit:null,aoDestroyCallback:[],fnRecordsTotal:function(){return"ssp"==Mt(this)?1*this._iRecordsTotal:this.aiDisplayMaster.length},fnRecordsDisplay:function(){return"ssp"==Mt(this)?1*this._iRecordsDisplay:this.aiDisplay.length},fnDisplayEnd:function(){var t=this._iDisplayLength,e=this._iDisplayStart,n=e+t,a=this.aiDisplay.length,r=this.oFeatures,o=r.bPaginate
return r.bServerSide?!1===o||-1===t?e+a:Math.min(e+t,this._iRecordsDisplay):!o||n>a||-1===t?a:n},oInstance:null,sInstance:null,iTabIndex:0,nScrollHead:null,nScrollFoot:null,aLastSort:[],oPlugins:{},rowIdFn:null,rowId:null},qt.ext=Ut={buttons:{},classes:{},builder:"-source-",errMode:"alert",feature:[],search:[],selector:{cell:[],column:[],row:[]},internal:{},legacy:{ajax:null},pager:{},renderer:{pageButton:{},header:{}},order:{},type:{detect:[],search:{},order:{}},_unique:0,fnVersionCheck:qt.fnVersionCheck,iApiIndex:0,oJUIClasses:{},sVersion:qt.version},t.extend(Ut,{afnFiltering:Ut.search,aTypes:Ut.type.detect,ofnSearch:Ut.type.search,oSort:Ut.type.order,afnSortData:Ut.order,aoFeatures:Ut.feature,oApi:Ut.internal,oStdClasses:Ut.classes,oPagination:Ut.pager}),t.extend(qt.ext.classes,{sTable:"dataTable",sNoFooter:"no-footer",sPageButton:"paginate_button",sPageButtonActive:"current",sPageButtonDisabled:"disabled",sStripeOdd:"odd",sStripeEven:"even",sRowEmpty:"dataTables_empty",sWrapper:"dataTables_wrapper",sFilter:"dataTables_filter",sInfo:"dataTables_info",sPaging:"dataTables_paginate paging_",sLength:"dataTables_length",sProcessing:"dataTables_processing",sSortAsc:"sorting_asc",sSortDesc:"sorting_desc",sSortable:"sorting",sSortableAsc:"sorting_asc_disabled",sSortableDesc:"sorting_desc_disabled",sSortableNone:"sorting_disabled",sSortColumn:"sorting_",sFilterInput:"",sLengthSelect:"",sScrollWrapper:"dataTables_scroll",sScrollHead:"dataTables_scrollHead",sScrollHeadInner:"dataTables_scrollHeadInner",sScrollBody:"dataTables_scrollBody",sScrollFoot:"dataTables_scrollFoot",sScrollFootInner:"dataTables_scrollFootInner",sHeaderTH:"",sFooterTH:"",sSortJUIAsc:"",sSortJUIDesc:"",sSortJUI:"",sSortJUIAscAllowed:"",sSortJUIDescAllowed:"",sSortJUIWrapper:"",sSortIcon:"",sJUIHeader:"",sJUIFooter:""})
var Fe=qt.ext.pager
t.extend(Fe,{simple:function(){return["previous","next"]},full:function(){return["first","previous","next","last"]},numbers:function(t,e){return[Wt(t,e)]},simple_numbers:function(t,e){return["previous",Wt(t,e),"next"]},full_numbers:function(t,e){return["first","previous",Wt(t,e),"next","last"]},first_last_numbers:function(t,e){return["first",Wt(t,e),"last"]},_numbers:Wt,numbers_length:7}),t.extend(!0,qt.ext.renderer,{pageButton:{_:function(e,r,o,i,l,s){var u,c,f,d=e.oClasses,h=e.oLanguage.oPaginate,p=e.oLanguage.oAria.paginate||{},g=0,b=function(n,a){var r,i,f,m,S=d.sPageButtonDisabled,v=function(t){ut(e,t.data.action,!0)}
for(r=0,i=a.length;r<i;r++)if(m=a[r],t.isArray(m))f=t("<"+(m.DT_el||"div")+"/>").appendTo(n),b(f,m)
else{switch(u=null,c=m,f=e.iTabIndex,m){case"ellipsis":n.append('<span class="ellipsis">&#x2026;</span>')
break
case"first":u=h.sFirst,0===l&&(f=-1,c=c+" "+S)
break
case"previous":u=h.sPrevious,0===l&&(f=-1,c=c+" "+S)
break
case"next":u=h.sNext,0!==s&&l!==s-1||(f=-1,c=c+" "+S)
break
case"last":u=h.sLast,l===s-1&&(f=-1,c=c+" "+S)
break
default:u=m+1,c=l===m?d.sPageButtonActive:""}null!==u&&(jt(f=t("<a>",{class:d.sPageButton+" "+c,"aria-controls":e.sTableId,"aria-label":p[m],"data-dt-idx":g,tabindex:f,id:0===o&&"string"==typeof m?e.sTableId+"_"+m:null}).html(u).appendTo(n),{action:m},v),g++)}}
try{f=t(r).find(n.activeElement).data("dt-idx")}catch(Vt){}b(t(r).empty(),i),f!==a&&t(r).find("[data-dt-idx="+f+"]").trigger("focus")}}}),t.extend(qt.ext.type.detect,[function(t,e){var n=e.oLanguage.sDecimal
return ne(t,n)?"num"+n:null},function(t){if(t&&!(t instanceof Date)&&!Yt.test(t))return null
var e=Date.parse(t)
return null!==e&&!isNaN(e)||Qt(t)?"date":null},function(t,e){var n=e.oLanguage.sDecimal
return ne(t,n,!0)?"num-fmt"+n:null},function(t,e){var n=e.oLanguage.sDecimal
return ae(t,n)?"html-num"+n:null},function(t,e){var n=e.oLanguage.sDecimal
return ae(t,n,!0)?"html-num-fmt"+n:null},function(t){return Qt(t)||"string"==typeof t&&-1!==t.indexOf("<")?"html":null}]),t.extend(qt.ext.type.search,{html:function(t){return Qt(t)?t:"string"==typeof t?t.replace($t," ").replace(zt,""):""},string:function(t){return Qt(t)?t:"string"==typeof t?t.replace($t," "):t}})
var Le=function(t,e,n,a){return 0===t||t&&"-"!==t?(e&&(t=ee(t,e)),t.replace&&(n&&(t=t.replace(n,"")),a&&(t=t.replace(a,""))),1*t):-1/0}
t.extend(Ut.type.order,{"date-pre":function(t){return t=Date.parse(t),isNaN(t)?-1/0:t},"html-pre":function(t){return Qt(t)?"":t.replace?t.replace(/<.*?>/g,"").toLowerCase():t+""},"string-pre":function(t){return Qt(t)?"":"string"==typeof t?t.toLowerCase():t.toString?t.toString():""},"string-asc":function(t,e){return t<e?-1:t>e?1:0},"string-desc":function(t,e){return t<e?1:t>e?-1:0}}),Et(""),t.extend(!0,qt.ext.renderer,{header:{_:function(e,n,a,r){t(e.nTable).on("order.dt.DT",(function(t,o,i,l){e===o&&(t=a.idx,n.removeClass(a.sSortingClass+" "+r.sSortAsc+" "+r.sSortDesc).addClass("asc"==l[t]?r.sSortAsc:"desc"==l[t]?r.sSortDesc:a.sSortingClass))}))},jqueryui:function(e,n,a,r){t("<div/>").addClass(r.sSortJUIWrapper).append(n.contents()).append(t("<span/>").addClass(r.sSortIcon+" "+a.sSortingClassJUI)).appendTo(n),t(e.nTable).on("order.dt.DT",(function(t,o,i,l){e===o&&(t=a.idx,n.removeClass(r.sSortAsc+" "+r.sSortDesc).addClass("asc"==l[t]?r.sSortAsc:"desc"==l[t]?r.sSortDesc:a.sSortingClass),n.find("span."+r.sSortIcon).removeClass(r.sSortJUIAsc+" "+r.sSortJUIDesc+" "+r.sSortJUI+" "+r.sSortJUIAscAllowed+" "+r.sSortJUIDescAllowed).addClass("asc"==l[t]?r.sSortJUIAsc:"desc"==l[t]?r.sSortJUIDesc:a.sSortingClassJUI))}))}}})
var Re=function(t){return"string"==typeof t?t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"):t}
return qt.render={number:function(t,e,n,a,r){return{display:function(o){if("number"!=typeof o&&"string"!=typeof o)return o
var i=0>o?"-":"",l=parseFloat(o)
return isNaN(l)?Re(o):(l=l.toFixed(n),o=Math.abs(l),l=parseInt(o,10),o=n?e+(o-l).toFixed(n).substring(2):"",i+(a||"")+l.toString().replace(/\B(?=(\d{3})+(?!\d))/g,t)+o+(r||""))}}},text:function(){return{display:Re,filter:Re}}},t.extend(qt.ext.internal,{_fnExternApiFunc:Bt,_fnBuildAjax:B,_fnAjaxUpdate:U,_fnAjaxParameters:V,_fnAjaxUpdateDraw:X,_fnAjaxDataSrc:J,_fnAddColumn:f,_fnColumnOptions:d,_fnAdjustColumnSizing:h,_fnVisibleToColumnIndex:p,_fnColumnIndexToVisible:g,_fnVisbleColumns:b,_fnGetColumns:m,_fnColumnTypes:S,_fnApplyColumnDefs:v,_fnHungarianMap:r,_fnCamelToHungarian:o,_fnLanguageCompat:i,_fnBrowserDetect:u,_fnAddData:D,_fnAddTr:y,_fnNodeToDataIndex:function(t,e){return e._DT_RowIndex!==a?e._DT_RowIndex:null},_fnNodeToColumnIndex:function(e,n,a){return t.inArray(a,e.aoData[n].anCells)},_fnGetCellData:_,_fnSetCellData:T,_fnSplitObjNotation:C,_fnGetObjectDataFn:w,_fnSetObjectDataFn:x,_fnGetDataMaster:I,_fnClearTable:A,_fnDeleteIndex:F,_fnInvalidate:L,_fnGetRowElements:R,_fnCreateTr:P,_fnBuildHead:N,_fnDrawHead:H,_fnDraw:O,_fnReDraw:k,_fnAddOptionsHtml:M,_fnDetectHeader:W,_fnGetUniqueThs:E,_fnFeatureHtmlFilter:q,_fnFilterComplete:G,_fnFilterCustom:$,_fnFilterColumn:z,_fnFilter:Y,_fnFilterCreateSearch:Z,_fnEscapeRegex:de,_fnFilterData:K,_fnFeatureHtmlInfo:et,_fnUpdateInfo:nt,_fnInfoMacros:at,_fnInitialise:rt,_fnInitComplete:ot,_fnLengthChange:it,_fnFeatureHtmlLength:lt,_fnFeatureHtmlPaginate:st,_fnPageChange:ut,_fnFeatureHtmlProcessing:ct,_fnProcessingDisplay:ft,_fnFeatureHtmlTable:dt,_fnScrollDraw:ht,_fnApplyToChildren:pt,_fnCalculateColumnWidths:gt,_fnThrottle:be,_fnConvertToWidth:bt,_fnGetWidestNode:mt,_fnGetMaxLenString:St,_fnStringToCss:vt,_fnSortFlatten:Dt,_fnSort:yt,_fnSortAria:_t,_fnSortListener:Tt,_fnSortAttachListener:Ct,_fnSortingClasses:wt,_fnSortData:xt,_fnSaveState:It,_fnLoadState:At,_fnSettingsFromNode:Ft,_fnLog:Lt,_fnMap:Rt,_fnBindAction:jt,_fnCallbackReg:Nt,_fnCallbackFire:Ht,_fnLengthOverflow:Ot,_fnRenderer:kt,_fnDataSource:Mt,_fnRowAttributes:j,_fnExtend:Pt,_fnCalculateEnd:function(){}}),t.fn.dataTable=qt,qt.$=t,t.fn.dataTableSettings=qt.settings,t.fn.dataTableExt=qt.ext,t.fn.DataTable=function(e){return t(this).dataTable(e).api()},t.each(qt,(function(e,n){t.fn.DataTable[e]=n})),t.fn.dataTable}))
