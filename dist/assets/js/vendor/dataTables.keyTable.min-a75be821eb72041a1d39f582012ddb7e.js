/*!
 KeyTable 2.5.2
 ©2009-2020 SpryMedia Ltd - datatables.net/license
*/
(function(e){"function"==typeof define&&define.amd?define(["jquery","datatables.net"],(function(t){return e(t,window,document)})):"object"==typeof exports?module.exports=function(t,n){return t||(t=window),n&&n.fn.dataTable||(n=require("datatables.net")(t,n).$),e(n,t,t.document)}:e(jQuery,window,document)})((function(e,t,n,s){var i=e.fn.dataTable,o=0,l=function(t,n){if(!i.versionCheck||!i.versionCheck("1.10.8"))throw"KeyTable requires DataTables 1.10.8 or newer"
this.c=e.extend(!0,{},i.defaults.keyTable,l.defaults,n),this.s={dt:new i.Api(t),enable:!0,focusDraw:!1,waitingForDraw:!1,lastFocus:null,namespace:".keyTable-"+o++,tabInput:null},this.dom={}
var s=this.s.dt.settings()[0],a=s.keytable
if(a)return a
s.keytable=this,this._constructor()}
return e.extend(l.prototype,{blur:function(){this._blur()},enable:function(e){this.s.enable=e},focus:function(e,t){this._focus(this.s.dt.cell(e,t))},focused:function(e){if(!this.s.lastFocus)return!1
var t=this.s.lastFocus.cell.index()
return e.row===t.row&&e.column===t.column},_constructor:function(){this._tabInput()
var t=this,s=this.s.dt,i=e(s.table().node()),o=this.s.namespace,l=!1
if("static"===i.css("position")&&i.css("position","relative"),e(s.table().body()).on("click"+o,"th, td",(function(e){if(!1!==t.s.enable){var n=s.cell(this)
n.any()&&t._focus(n,null,!1,e)}})),e(n).on("keydown"+o,(function(e){l||t._key(e)})),this.c.blurable&&e(n).on("mousedown"+o,(function(n){e(n.target).parents(".dataTables_filter").length&&t._blur(),e(n.target).parents().filter(s.table().container()).length||e(n.target).parents("div.DTE").length||e(n.target).parents("div.editor-datetime").length||e(n.target).parents().filter(".DTFC_Cloned").length||t._blur()})),this.c.editor){var a=this.c.editor
a.on("open.keyTableMain",(function(e,n){"inline"!==n&&t.s.enable&&(t.enable(!1),a.one("close"+o,(function(){t.enable(!0)})))})),this.c.editOnFocus&&s.on("key-focus"+o+" key-refocus"+o,(function(e,n,s,i){t._editor(null,i,!0)})),s.on("key"+o,(function(e,n,s,i,o){t._editor(s,o,!1)})),e(s.table().body()).on("dblclick"+o,"th, td",(function(e){!1!==t.s.enable&&s.cell(this).any()&&t._editor(null,e,!0)})),a.on("preSubmit",(function(){l=!0})).on("preSubmitCancelled",(function(){l=!1})).on("submitComplete",(function(){l=!1}))}s.settings()[0].oFeatures.bStateSave&&s.on("stateSaveParams"+o,(function(e,n,s){s.keyTable=t.s.lastFocus?t.s.lastFocus.cell.index():null})),s.on("column-visibility"+o,(function(){t._tabInput()})),s.on("draw"+o,(function(i){if((t._tabInput(),!t.s.focusDraw)&&((o=t.s.lastFocus)&&o.node&&e(o.node).closest("body")===n.body)){var o=t.s.lastFocus.relative,l=s.page.info(),a=o.row+l.start
0!==l.recordsDisplay&&(a>=l.recordsDisplay&&(a=l.recordsDisplay-1),t._focus(a,o.column,!0,i))}})),this.c.clipboard&&this._clipboard(),s.on("destroy"+o,(function(){t._blur(!0),s.off(o),e(s.table().body()).off("click"+o,"th, td").off("dblclick"+o,"th, td"),e(n).off("mousedown"+o).off("keydown"+o).off("copy"+o).off("paste"+o)}))
var r=s.state.loaded()
r&&r.keyTable?s.one("init",(function(){var e=s.cell(r.keyTable)
e.any()&&e.focus()})):this.c.focus&&s.cell(this.c.focus).focus()},_blur:function(t){if(this.s.enable&&this.s.lastFocus){var n=this.s.lastFocus.cell
e(n.node()).removeClass(this.c.className),this.s.lastFocus=null,t||(this._updateFixedColumns(n.index().column),this._emitEvent("key-blur",[this.s.dt,n]))}},_clipboard:function(){var s=this.s.dt,i=this,o=this.s.namespace
t.getSelection&&(e(n).on("copy"+o,(function(e){e=e.originalEvent
var n=t.getSelection().toString(),s=i.s.lastFocus
!n&&s&&(e.clipboardData.setData("text/plain",s.cell.render(i.c.clipboardOrthogonal)),e.preventDefault())})),e(n).on("paste"+o,(function(e){e=e.originalEvent
var o,l=i.s.lastFocus,a=n.activeElement,r=i.c.editor
!l||a&&"body"!==a.nodeName.toLowerCase()||(e.preventDefault(),t.clipboardData&&t.clipboardData.getData?o=t.clipboardData.getData("Text"):e.clipboardData&&e.clipboardData.getData&&(o=e.clipboardData.getData("text/plain")),r?r.inline(l.cell.index()).set(r.displayed()[0],o).submit():(l.cell.data(o),s.draw(!1)))})))},_columns:function(){var e=this.s.dt,t=e.columns(this.c.columns).indexes(),n=[]
return e.columns(":visible").every((function(e){-1!==t.indexOf(e)&&n.push(e)})),n},_editor:function(t,s,i){if(this.s.lastFocus){var o=this,l=this.s.dt,a=this.c.editor,r=this.s.lastFocus.cell,c=this.s.namespace
if(!(e("div.DTE",r.node()).length||null!==t&&(0<=t&&9>=t||11===t||12===t||14<=t&&31>=t||112<=t&&123>=t||127<=t&&159>=t))){s.stopPropagation(),13===t&&s.preventDefault()
var u=function(){a.one("open"+c,(function(){a.off("cancelOpen"+c),i||e("div.DTE_Field_InputControl input, div.DTE_Field_InputControl textarea").select(),l.keys.enable(i?"tab-only":"navigation-only"),l.on("key-blur.editor",(function(e,t,n){a.displayed()&&n.node()===r.node()&&a.submit()})),i&&e(l.table().container()).addClass("dtk-focus-alt"),a.on("preSubmitCancelled"+c,(function(){setTimeout((function(){o._focus(r,null,!1)}),50)})),a.on("submitUnsuccessful"+c,(function(){o._focus(r,null,!1)})),a.one("close",(function(){l.keys.enable(!0),l.off("key-blur.editor"),a.off(c),e(l.table().container()).removeClass("dtk-focus-alt")}))})).one("cancelOpen"+c,(function(){a.off(c)})).inline(r.index())}
13===t?(i=!0,e(n).one("keyup",(function(){u()}))):u()}}},_emitEvent:function(t,n){this.s.dt.iterator("table",(function(s){e(s.nTable).triggerHandler(t,n)}))},_focus:function(i,o,l,a){var r=this,c=this.s.dt,u=c.page.info(),d=this.s.lastFocus
if(a||(a=null),this.s.enable){if("number"!=typeof i){if(!i.any())return
var f=i.index()
o=f.column
if(0>(i=c.rows({filter:"applied",order:"applied"}).indexes().indexOf(f.row)))return
u.serverSide&&(i+=u.start)}if(-1!==u.length&&(i<u.start||i>=u.start+u.length))this.s.focusDraw=!0,this.s.waitingForDraw=!0,c.one("draw",(function(){r.s.focusDraw=!1,r.s.waitingForDraw=!1,r._focus(i,o,s,a)})).page(Math.floor(i/u.length)).draw(!1)
else if(-1!==e.inArray(o,this._columns())){if(u.serverSide&&(i-=u.start),u=c.cells(null,o,{search:"applied",order:"applied"}).flatten(),u=c.cell(u[i]),d){if(d.node===u.node())return void this._emitEvent("key-refocus",[this.s.dt,u,a||null])
this._blur()}this._removeOtherFocus(),(d=e(u.node())).addClass(this.c.className),this._updateFixedColumns(o),l!==s&&!0!==l||(this._scroll(e(t),e(n.body),d,"offset"),(l=c.table().body().parentNode)!==c.table().header().parentNode&&(l=e(l.parentNode),this._scroll(l,l,d,"position"))),this.s.lastFocus={cell:u,node:u.node(),relative:{row:c.rows({page:"current"}).indexes().indexOf(u.index().row),column:u.index().column}},this._emitEvent("key-focus",[this.s.dt,u,a||null]),c.state.save()}}},_key:function(t){if(this.s.waitingForDraw)t.preventDefault()
else{var n=this.s.enable,s=!0===n||"navigation-only"===n
if(n&&(!(0===t.keyCode||t.ctrlKey||t.metaKey||t.altKey)||t.ctrlKey&&t.altKey))if(i=this.s.lastFocus)if(this.s.dt.cell(i.node).any()){var i=this.s.dt,o=!!this.s.dt.settings()[0].oScroll.sY
if(!this.c.keys||-1!==e.inArray(t.keyCode,this.c.keys))switch(t.keyCode){case 9:this._shift(t,t.shiftKey?"left":"right",!0)
break
case 27:this.s.blurable&&!0===n&&this._blur()
break
case 33:case 34:s&&!o&&(t.preventDefault(),i.page(33===t.keyCode?"previous":"next").draw(!1))
break
case 35:case 36:s&&(t.preventDefault(),n=i.cells({page:"current"}).indexes(),s=this._columns(),this._focus(i.cell(n[35===t.keyCode?n.length-1:s[0]]),null,!0,t))
break
case 37:s&&this._shift(t,"left")
break
case 38:s&&this._shift(t,"up")
break
case 39:s&&this._shift(t,"right")
break
case 40:s&&this._shift(t,"down")
break
case 113:if(this.c.editor){this._editor(null,t,!0)
break}default:!0===n&&this._emitEvent("key",[i,t.keyCode,this.s.lastFocus.cell,t])}}else this.s.lastFocus=null}},_removeOtherFocus:function(){var t=this.s.dt.table().node()
e.fn.dataTable.tables({api:!0}).iterator("table",(function(){this.table().node()!==t&&this.cell.blur()}))},_scroll:function(e,t,n,s){var i=n[s](),o=n.outerHeight(),l=n.outerWidth(),a=t.scrollTop(),r=t.scrollLeft(),c=e.height()
e=e.width()
"position"===s&&(i.top+=parseInt(n.closest("table").css("top"),10)),i.top<a&&t.scrollTop(i.top),i.left<r&&t.scrollLeft(i.left),i.top+o>a+c&&o<c&&t.scrollTop(i.top+o-c),i.left+l>r+e&&l<e&&t.scrollLeft(i.left+l-e)},_shift:function(t,n,s){var i=this.s.dt,o=i.page.info(),l=o.recordsDisplay,a=this.s.lastFocus.cell,r=this._columns()
if(a){var c=i.rows({filter:"applied",order:"applied"}).indexes().indexOf(a.index().row)
o.serverSide&&(c+=o.start),o=r[i=i.columns(r).indexes().indexOf(a.index().column)],"right"===n?i>=r.length-1?(c++,o=r[0]):o=r[i+1]:"left"===n?0===i?(c--,o=r[r.length-1]):o=r[i-1]:"up"===n?c--:"down"===n&&c++,0<=c&&c<l&&-1!==e.inArray(o,r)?(t&&t.preventDefault(),this._focus(c,o,!0,t)):s&&this.c.blurable?this._blur():t&&t.preventDefault()}},_tabInput:function(){var t=this,n=this.s.dt,s=null!==this.c.tabIndex?this.c.tabIndex:n.settings()[0].iTabIndex;-1!=s&&(this.s.tabInput||((s=e('<div><input type="text" tabindex="'+s+'"/></div>').css({position:"absolute",height:1,width:0,overflow:"hidden"})).children().on("focus",(function(e){var s=n.cell(":eq(0)",t._columns(),{page:"current"})
s.any()&&t._focus(s,null,!0,e)})),this.s.tabInput=s),(s=this.s.dt.cell(":eq(0)","0:visible",{page:"current",order:"current"}).node())&&e(s).prepend(this.s.tabInput))},_updateFixedColumns:function(e){var t=this.s.dt,n=t.settings()[0]
if(n._oFixedColumns){var s=n.aoColumns.length-n._oFixedColumns.s.iRightColumns;(e<n._oFixedColumns.s.iLeftColumns||e>=s)&&t.fixedColumns().update()}}}),l.defaults={blurable:!0,className:"focus",clipboard:!0,clipboardOrthogonal:"display",columns:"",editor:null,editOnFocus:!1,focus:null,keys:null,tabIndex:null},l.version="2.5.2",e.fn.dataTable.KeyTable=l,e.fn.DataTable.KeyTable=l,i.Api.register("cell.blur()",(function(){return this.iterator("table",(function(e){e.keytable&&e.keytable.blur()}))})),i.Api.register("cell().focus()",(function(){return this.iterator("cell",(function(e,t,n){e.keytable&&e.keytable.focus(t,n)}))})),i.Api.register("keys.disable()",(function(){return this.iterator("table",(function(e){e.keytable&&e.keytable.enable(!1)}))})),i.Api.register("keys.enable()",(function(e){return this.iterator("table",(function(t){t.keytable&&t.keytable.enable(e===s||e)}))})),i.Api.register("keys.move()",(function(e){return this.iterator("table",(function(t){t.keytable&&t.keytable._shift(null,e,!1)}))})),i.ext.selector.cell.push((function(e,t,n){t=t.focused
var i=[]
if(!(e=e.keytable)||t===s)return n
for(var o=0,l=n.length;o<l;o++)(!0===t&&e.focused(n[o])||!1===t&&!e.focused(n[o]))&&i.push(n[o])
return i})),e(n).on("preInit.dt.dtk",(function(t,n){if("dt"===t.namespace){var s=n.oInit.keys,o=i.defaults.keys;(s||o)&&(o=e.extend({},o,s),!1!==s&&new l(n,o))}})),l}))
