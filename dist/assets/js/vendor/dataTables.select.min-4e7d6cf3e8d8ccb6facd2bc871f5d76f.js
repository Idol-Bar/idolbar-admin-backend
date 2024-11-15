/*!
 Select for DataTables 1.3.1
 2015-2019 SpryMedia Ltd - datatables.net/license/mit
*/
(function(e){"function"==typeof define&&define.amd?define(["jquery","datatables.net"],(function(t){return e(t,window,document)})):"object"==typeof exports?module.exports=function(t,l){return t||(t=window),l&&l.fn.dataTable||(l=require("datatables.net")(t,l).$),e(l,t,t.document)}:e(jQuery,window,document)})((function(e,t,l,s){function c(e,t,l){var s
s=function(t,l){if(t>l){var s=l
l=t,t=s}var c=!1
return e.columns(":visible").indexes().filter((function(e){return e===t&&(c=!0),e===l?(c=!1,!0):c}))}
var c=function(t,l){var s=e.rows({search:"applied"}).indexes()
if(s.indexOf(t)>s.indexOf(l)){var c=l
l=t,t=c}var n=!1
return s.filter((function(e){return e===t&&(n=!0),e===l?(n=!1,!0):n}))}
e.cells({selected:!0}).any()||l?(s=s(l.column,t.column),l=c(l.row,t.row)):(s=s(0,t.column),l=c(0,t.row)),l=e.cells(l,s).flatten(),e.cells(t,{selected:!0}).any()?e.cells(l).deselect():e.cells(l).select()}function n(t){var l=t.settings()[0]._select.selector
e(t.table().container()).off("mousedown.dtSelect",l).off("mouseup.dtSelect",l).off("click.dtSelect",l),e("body").off("click.dtSelect"+f(t.table().node()))}function a(l){var s,c=e(l.table().container()),n=l.settings()[0],a=n._select.selector
c.on("mousedown.dtSelect",a,(function(e){(e.shiftKey||e.metaKey||e.ctrlKey)&&c.css("-moz-user-select","none").one("selectstart.dtSelect",a,(function(){return!1})),t.getSelection&&(s=t.getSelection())})).on("mouseup.dtSelect",a,(function(){c.css("-moz-user-select","")})).on("click.dtSelect",a,(function(c){var n=l.select.items()
if(s&&((!(a=t.getSelection()).anchorNode||e(a.anchorNode).closest("table")[0]===l.table().node())&&a!==s))return
var a=l.settings()[0],i=e.trim(l.settings()[0].oClasses.sWrapper).replace(/ +/g,".")
if(e(c.target).closest("div."+i)[0]==l.table().container()&&(i=l.cell(e(c.target).closest("td, th"))).any()){var r=e.Event("user-select.dt")
o(l,r,[n,i,c]),r.isDefaultPrevented()||(r=i.index(),"row"===n?(n=r.row,d(c,l,a,"row",n)):"column"===n?(n=i.index().column,d(c,l,a,"column",n)):"cell"===n&&(n=i.index(),d(c,l,a,"cell",n)),a._select_lastCell=r)}})),e("body").on("click.dtSelect"+f(l.table().node()),(function(t){n._select.blurable&&!e(t.target).parents().filter(l.table().container()).length&&0!==e(t.target).parents("html").length&&!e(t.target).parents("div.DTE").length&&u(n,!0)}))}function o(t,l,s,c){c&&!t.flatten().length||("string"==typeof l&&(l+=".dt"),s.unshift(t),e(t.table().node()).trigger(l,s))}function i(t){var l=t.settings()[0]
if(l._select.info&&l.aanFeatures.i&&"api"!==t.select.style()){var s=t.rows({selected:!0}).flatten().length,c=t.columns({selected:!0}).flatten().length,n=t.cells({selected:!0}).flatten().length,a=function(l,s,c){l.append(e('<span class="select-item"/>').append(t.i18n("select."+s+"s",{_:"%d "+s+"s selected",0:"",1:"1 "+s+" selected"},c)))}
e.each(l.aanFeatures.i,(function(t,l){l=e(l)
var o=e('<span class="select-info"/>')
a(o,"row",s),a(o,"column",c),a(o,"cell",n)
var i=l.children("span.select-info")
i.length&&i.remove(),""!==o.text()&&l.append(o)}))}}function r(t,l,s,c){var n=t[l+"s"]({search:"applied"}).indexes(),a=(c=e.inArray(c,n),e.inArray(s,n))
if(t[l+"s"]({selected:!0}).any()||-1!==c){if(c>a){var o=a
a=c,c=o}n.splice(a+1,n.length),n.splice(0,c)}else n.splice(e.inArray(s,n)+1,n.length)
t[l](s,{selected:!0}).any()?(n.splice(e.inArray(s,n),1),t[l+"s"](n).deselect()):t[l+"s"](n).select()}function u(e,t){if(t||"single"===e._select.style){var l=new _.Api(e)
l.rows({selected:!0}).deselect(),l.columns({selected:!0}).deselect(),l.cells({selected:!0}).deselect()}}function d(e,t,l,s,n){var a=t.select.style(),o=t.select.toggleable(),i=t[s](n,{selected:!0}).any()
i&&!o||("os"===a?e.ctrlKey||e.metaKey?t[s](n).select(!i):e.shiftKey?"cell"===s?c(t,n,l._select_lastCell||null):r(t,s,n,l._select_lastCell?l._select_lastCell[s]:null):(e=t[s+"s"]({selected:!0}),i&&1===e.flatten().length?t[s](n).deselect():(e.deselect(),t[s](n).select())):"multi+shift"==a&&e.shiftKey?"cell"===s?c(t,n,l._select_lastCell||null):r(t,s,n,l._select_lastCell?l._select_lastCell[s]:null):t[s](n).select(!i))}function f(e){return e.id.replace(/[^a-zA-Z0-9\-\_]/g,"-")}function m(e,t){return function(l){return l.i18n("buttons."+e,t)}}function h(e){return"draw.dt.DT"+(e=e._eventNamespace)+" select.dt.DT"+e+" deselect.dt.DT"+e}var _=e.fn.dataTable
_.select={},_.select.version="1.3.1",_.select.init=function(t){var l=t.settings()[0],c=l.oInit.select,n=_.defaults.select,a=(c=c===s?n:c,n="row","api"),o=!1,i=!0,r=!0,u="td, th",d="selected",f=!1
l._select={},!0===c?(a="os",f=!0):"string"==typeof c?(a=c,f=!0):e.isPlainObject(c)&&(c.blurable!==s&&(o=c.blurable),c.toggleable!==s&&(i=c.toggleable),c.info!==s&&(r=c.info),c.items!==s&&(n=c.items),a=c.style!==s?c.style:"os",f=!0,c.selector!==s&&(u=c.selector),c.className!==s)&&(d=c.className),t.select.selector(u),t.select.items(n),t.select.style(a),t.select.blurable(o),t.select.toggleable(i),t.select.info(r),l._select.className=d,e.fn.dataTable.ext.order["select-checkbox"]=function(t,l){return this.api().column(l,{order:"index"}).nodes().map((function(l){return"row"===t._select.items?e(l).parent().hasClass(t._select.className):"cell"===t._select.items&&e(l).hasClass(t._select.className)}))},!f&&e(t.table().node()).hasClass("selectable")&&t.select.style("os")},e.each([{type:"row",prop:"aoData"},{type:"column",prop:"aoColumns"}],(function(e,t){_.ext.selector[t.type].push((function(e,l,s){var c,n=[]
if(!0!==(l=l.selected)&&!1!==l)return s
for(var a=0,o=s.length;a<o;a++)c=e[t.prop][s[a]],(!0===l&&!0===c._select_selected||!1===l&&!c._select_selected)&&n.push(s[a])
return n}))})),_.ext.selector.cell.push((function(e,t,l){var c,n=[]
if((t=t.selected)===s)return l
for(var a=0,o=l.length;a<o;a++)c=e.aoData[l[a].row],(!0===t&&c._selected_cells&&!0===c._selected_cells[l[a].column]||!1===t&&(!c._selected_cells||!c._selected_cells[l[a].column]))&&n.push(l[a])
return n}))
var p=_.Api.register,b=_.Api.registerPlural
p("select()",(function(){return this.iterator("table",(function(e){_.select.init(new _.Api(e))}))})),p("select.blurable()",(function(e){return e===s?this.context[0]._select.blurable:this.iterator("table",(function(t){t._select.blurable=e}))})),p("select.toggleable()",(function(e){return e===s?this.context[0]._select.toggleable:this.iterator("table",(function(t){t._select.toggleable=e}))})),p("select.info()",(function(e){return i===s?this.context[0]._select.info:this.iterator("table",(function(t){t._select.info=e}))})),p("select.items()",(function(e){return e===s?this.context[0]._select.items:this.iterator("table",(function(t){t._select.items=e,o(new _.Api(t),"selectItems",[e])}))})),p("select.style()",(function(t){return t===s?this.context[0]._select.style:this.iterator("table",(function(l){if(l._select.style=t,!l._select_init){var c=new _.Api(l)
l.aoRowCreatedCallback.push({fn:function(t,s,c){for((s=l.aoData[c])._select_selected&&e(t).addClass(l._select.className),t=0,c=l.aoColumns.length;t<c;t++)(l.aoColumns[t]._select_selected||s._selected_cells&&s._selected_cells[t])&&e(s.anCells[t]).addClass(l._select.className)},sName:"select-deferRender"}),c.on("preXhr.dt.dtSelect",(function(){var e=c.rows({selected:!0}).ids(!0).filter((function(e){return e!==s})),t=c.cells({selected:!0}).eq(0).map((function(e){var t=c.row(e.row).id(!0)
return t?{row:t,column:e.column}:s})).filter((function(e){return e!==s}))
c.one("draw.dt.dtSelect",(function(){c.rows(e).select(),t.any()&&t.each((function(e){c.cells(e.row,e.column).select()}))}))})),c.on("draw.dtSelect.dt select.dtSelect.dt deselect.dtSelect.dt info.dt",(function(){i(c)})),c.on("destroy.dtSelect",(function(){n(c),c.off(".dtSelect")}))}var r=new _.Api(l)
n(r),"api"!==t&&a(r),o(new _.Api(l),"selectStyle",[t])}))})),p("select.selector()",(function(e){return e===s?this.context[0]._select.selector:this.iterator("table",(function(t){n(new _.Api(t)),t._select.selector=e,"api"!==t._select.style&&a(new _.Api(t))}))})),b("rows().select()","row().select()",(function(t){var l=this
return!1===t?this.deselect():(this.iterator("row",(function(t,l){u(t),t.aoData[l]._select_selected=!0,e(t.aoData[l].nTr).addClass(t._select.className)})),this.iterator("table",(function(e,t){o(l,"select",["row",l[t]],!0)})),this)})),b("columns().select()","column().select()",(function(t){var l=this
return!1===t?this.deselect():(this.iterator("column",(function(t,l){u(t),t.aoColumns[l]._select_selected=!0
var s=new _.Api(t).column(l)
e(s.header()).addClass(t._select.className),e(s.footer()).addClass(t._select.className),s.nodes().to$().addClass(t._select.className)})),this.iterator("table",(function(e,t){o(l,"select",["column",l[t]],!0)})),this)})),b("cells().select()","cell().select()",(function(t){var l=this
return!1===t?this.deselect():(this.iterator("cell",(function(t,l,c){u(t),(l=t.aoData[l])._selected_cells===s&&(l._selected_cells=[]),l._selected_cells[c]=!0,l.anCells&&e(l.anCells[c]).addClass(t._select.className)})),this.iterator("table",(function(e,t){o(l,"select",["cell",l[t]],!0)})),this)})),b("rows().deselect()","row().deselect()",(function(){var t=this
return this.iterator("row",(function(t,l){t.aoData[l]._select_selected=!1,e(t.aoData[l].nTr).removeClass(t._select.className)})),this.iterator("table",(function(e,l){o(t,"deselect",["row",t[l]],!0)})),this})),b("columns().deselect()","column().deselect()",(function(){var t=this
return this.iterator("column",(function(t,l){t.aoColumns[l]._select_selected=!1
var s=new _.Api(t),c=s.column(l)
e(c.header()).removeClass(t._select.className),e(c.footer()).removeClass(t._select.className),s.cells(null,l).indexes().each((function(l){var s=t.aoData[l.row],c=s._selected_cells
s.anCells&&(!c||!c[l.column])&&e(s.anCells[l.column]).removeClass(t._select.className)}))})),this.iterator("table",(function(e,l){o(t,"deselect",["column",t[l]],!0)})),this})),b("cells().deselect()","cell().deselect()",(function(){var t=this
return this.iterator("cell",(function(t,l,s){(l=t.aoData[l])._selected_cells[s]=!1,l.anCells&&!t.aoColumns[s]._select_selected&&e(l.anCells[s]).removeClass(t._select.className)})),this.iterator("table",(function(e,l){o(t,"deselect",["cell",t[l]],!0)})),this}))
var v=0
return e.extend(_.ext.buttons,{selected:{text:m("selected","Selected"),className:"buttons-selected",limitTo:["rows","columns","cells"],init:function(t,l,s){var c=this
s._eventNamespace=".select"+v++,t.on(h(s),(function(){c.enable(!!(-1!==e.inArray("rows",s.limitTo)&&t.rows({selected:!0}).any()||-1!==e.inArray("columns",s.limitTo)&&t.columns({selected:!0}).any()||-1!==e.inArray("cells",s.limitTo)&&t.cells({selected:!0}).any()))})),this.disable()},destroy:function(e,t,l){e.off(l._eventNamespace)}},selectedSingle:{text:m("selectedSingle","Selected single"),className:"buttons-selected-single",init:function(e,t,l){var s=this
l._eventNamespace=".select"+v++,e.on(h(l),(function(){var t=e.rows({selected:!0}).flatten().length+e.columns({selected:!0}).flatten().length+e.cells({selected:!0}).flatten().length
s.enable(1===t)})),this.disable()},destroy:function(e,t,l){e.off(l._eventNamespace)}},selectAll:{text:m("selectAll","Select all"),className:"buttons-select-all",action:function(){this[this.select.items()+"s"]().select()}},selectNone:{text:m("selectNone","Deselect all"),className:"buttons-select-none",action:function(){u(this.settings()[0],!0)},init:function(e,t,l){var s=this
l._eventNamespace=".select"+v++,e.on(h(l),(function(){var t=e.rows({selected:!0}).flatten().length+e.columns({selected:!0}).flatten().length+e.cells({selected:!0}).flatten().length
s.enable(0<t)})),this.disable()},destroy:function(e,t,l){e.off(l._eventNamespace)}}}),e.each(["Row","Column","Cell"],(function(e,t){var l=t.toLowerCase()
_.ext.buttons["select"+t+"s"]={text:m("select"+t+"s","Select "+l+"s"),className:"buttons-select-"+l+"s",action:function(){this.select.items(l)},init:function(e){var t=this
e.on("selectItems.dt.DT",(function(e,s,c){t.active(c===l)}))}}})),e(l).on("preInit.dt.dtSelect",(function(e,t){"dt"===e.namespace&&_.select.init(new _.Api(t))})),_.select}))
