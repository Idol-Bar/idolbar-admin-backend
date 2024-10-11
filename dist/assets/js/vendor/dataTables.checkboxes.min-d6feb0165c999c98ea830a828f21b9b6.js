/*! jQuery DataTables Checkboxes v1.2.12 - www.gyrocode.com/projects/jquery-datatables-checkboxes/ - License: MIT - Author: Gyrocode LLC / www.gyrocode.com */
!function(e){"function"==typeof define&&define.amd?define(["jquery","datatables.net"],(function(t){return e(t,window,document)})):"object"==typeof exports?module.exports=function(t,c){return t=t||window,c&&c.fn.dataTable||(c=require("datatables.net")(t,c).$),e(c,0,t.document)}:e(jQuery,window,document)}((function(e,t,c){"use strict"
function s(e){if(!o.versionCheck||!o.versionCheck("1.10.8"))throw"DataTables Checkboxes requires DataTables 1.10.8 or newer"
this.s={dt:new o.Api(e),columns:[],data:[],dataDisabled:[],ignoreSelect:!1},this.s.ctx=this.s.dt.settings()[0],this.s.ctx.checkboxes||(e.checkboxes=this)._constructor()}var o=e.fn.dataTable
s.prototype={_constructor:function(){for(var t,l,a,n,d,i,h,u=this,r=u.s.dt,b=u.s.ctx,x=!1,k=!1,f=0;f<b.aoColumns.length;f++)b.aoColumns[f].checkboxes&&(t=e(r.column(f).header()),x=!0,e.isPlainObject(b.aoColumns[f].checkboxes)||(b.aoColumns[f].checkboxes={}),b.aoColumns[f].checkboxes=e.extend({},s.defaults,b.aoColumns[f].checkboxes),l={searchable:!1,orderable:!1},""===b.aoColumns[f].sClass?l.className="dt-checkboxes-cell":l.className=b.aoColumns[f].sClass+" dt-checkboxes-cell",null===b.aoColumns[f].sWidthOrig&&(l.width="1%"),null===b.aoColumns[f].mRender&&(l.render=function(){return'<input type="checkbox" class="dt-checkboxes" autocomplete="off">'}),o.ext.internal._fnColumnOptions(b,f,l),t.removeClass("sorting"),t.off(".dt"),null===b.sAjaxSource&&((a=r.cells("tr",f)).invalidate("data"),e(a.nodes()).addClass(l.className)),u.s.data[f]={},u.s.dataDisabled[f]={},u.s.columns.push(f),b.aoColumns[f].checkboxes.selectRow&&(b._select?k=!0:b.aoColumns[f].checkboxes.selectRow=!1),b.aoColumns[f].checkboxes.selectAll&&(t.data("html",t.html()),null!==b.aoColumns[f].checkboxes.selectAllRender&&(n="",e.isFunction(b.aoColumns[f].checkboxes.selectAllRender)?n=b.aoColumns[f].checkboxes.selectAllRender():"string"==typeof b.aoColumns[f].checkboxes.selectAllRender&&(n=b.aoColumns[f].checkboxes.selectAllRender),t.html(n).addClass("dt-checkboxes-select-all").attr("data-col",f))))
x&&(u.loadState(),d=e(r.table().node()),i=e(r.table().body()),h=e(r.table().container()),k&&(d.addClass("dt-checkboxes-select"),d.on("user-select.dt.dtCheckboxes",(function(e,t,c,s,o){u.onDataTablesUserSelect(e,t,c,s,o)})),d.on("select.dt.dtCheckboxes deselect.dt.dtCheckboxes",(function(e,t,c,s){u.onDataTablesSelectDeselect(e,c,s)})),b._select.info&&(r.select.info(!1),d.on("draw.dt.dtCheckboxes select.dt.dtCheckboxes deselect.dt.dtCheckboxes",(function(){u.showInfoSelected()})))),d.on("draw.dt.dtCheckboxes",(function(e){u.onDataTablesDraw(e)})),i.on("click.dtCheckboxes","input.dt-checkboxes",(function(e){u.onClick(e,this)})),h.on("click.dtCheckboxes",'thead th.dt-checkboxes-select-all input[type="checkbox"]',(function(e){u.onClickSelectAll(e,this)})),h.on("click.dtCheckboxes","thead th.dt-checkboxes-select-all",(function(){e('input[type="checkbox"]',this).not(":disabled").trigger("click")})),k||h.on("click.dtCheckboxes","tbody td.dt-checkboxes-cell",(function(){e('input[type="checkbox"]',this).not(":disabled").trigger("click")})),h.on("click.dtCheckboxes","thead th.dt-checkboxes-select-all label, tbody td.dt-checkboxes-cell label",(function(e){e.preventDefault()})),e(c).on("click.dtCheckboxes",'.fixedHeader-floating thead th.dt-checkboxes-select-all input[type="checkbox"]',(function(e){b._fixedHeader&&b._fixedHeader.dom.header.floating&&u.onClickSelectAll(e,this)})),e(c).on("click.dtCheckboxes",".fixedHeader-floating thead th.dt-checkboxes-select-all",(function(){b._fixedHeader&&b._fixedHeader.dom.header.floating&&e('input[type="checkbox"]',this).trigger("click")})),d.on("init.dt.dtCheckboxes",(function(){setTimeout((function(){u.onDataTablesInit()}),0)})),d.on("stateSaveParams.dt.dtCheckboxes",(function(e,t,c){u.onDataTablesStateSave(e,t,c)})),d.one("destroy.dt.dtCheckboxes",(function(e,t){u.onDataTablesDestroy(e,t)})))},onDataTablesInit:function(){var t=this,c=t.s.dt,s=t.s.ctx
s.oFeatures.bServerSide||(s.oFeatures.bStateSave&&t.updateState(),e(c.table().node()).on("xhr.dt.dtCheckboxes",(function(e,c,s,o){t.onDataTablesXhr(e.settings,s,o)})))},onDataTablesUserSelect:function(e,t,c,s){var o=s.index().row,l=this.getSelectRowColIndex(),a=t.cell({row:o,column:l}).data()
this.isCellSelectable(l,a)||e.preventDefault()},onDataTablesSelectDeselect:function(e,t,c){var s,o,l=this,a=l.s.dt
l.s.ignoreSelect||"row"!==t||null!==(s=l.getSelectRowColIndex())&&(o=a.cells(c,s),l.updateData(o,s,"select"===e.type),l.updateCheckbox(o,s,"select"===e.type),l.updateSelectAll(s))},onDataTablesStateSave:function(t,c,s){var o=this,l=o.s.ctx
s.checkboxes=[],e.each(o.s.columns,(function(e,t){l.aoColumns[t].checkboxes.stateSave&&(s.checkboxes[t]=o.s.data[t])}))},onDataTablesDestroy:function(){var t=this.s.dt,s=e(t.table().node()),o=e(t.table().body()),l=e(t.table().container())
e(c).off("click.dtCheckboxes"),l.off(".dtCheckboxes"),o.off(".dtCheckboxes"),s.off(".dtCheckboxes"),this.s.data={},this.s.dataDisabled={},e(".dt-checkboxes-select-all",s).each((function(t,c){e(c).html(e(c).data("html")).removeClass("dt-checkboxes-select-all")}))},onDataTablesDraw:function(){var t=this,c=t.s.ctx;(c.oFeatures.bServerSide||c.oFeatures.bDeferRender)&&t.updateStateCheckboxes({page:"current",search:"none"}),e.each(t.s.columns,(function(e,c){t.updateSelectAll(c)}))},onDataTablesXhr:function(){var t=this,c=t.s.dt,s=t.s.ctx,o=e(c.table().node())
e.each(t.s.columns,(function(e,c){t.s.data[c]={},t.s.dataDisabled[c]={}})),s.oFeatures.bStateSave&&(t.loadState(),o.one("draw.dt.dtCheckboxes",(function(){t.updateState()})))},updateData:function(e,t,c){var s=this.s.dt,o=this.s.ctx
o.aoColumns[t].checkboxes&&(e.data().each((function(e){c?o.checkboxes.s.data[t][e]=1:delete o.checkboxes.s.data[t][e]})),o.oFeatures.bStateSave&&o.aoColumns[t].checkboxes.stateSave&&s.state.save())},updateSelect:function(e,t){var c=this.s.dt
this.s.ctx._select&&(this.s.ignoreSelect=!0,t?c.rows(e).select():c.rows(e).deselect(),this.s.ignoreSelect=!1)},updateCheckbox:function(t,c,s){var o=this.s.ctx,l=t.nodes()
l.length&&(e("input.dt-checkboxes",l).not(":disabled").prop("checked",s),e.isFunction(o.aoColumns[c].checkboxes.selectCallback)&&o.aoColumns[c].checkboxes.selectCallback(l,s))},updateState:function(){var t=this,c=(t.s.dt,t.s.ctx)
t.updateStateCheckboxes({page:"all",search:"none"}),c._oFixedColumns&&setTimeout((function(){e.each(t.s.columns,(function(e,c){t.updateSelectAll(c)}))}),0)},updateStateCheckboxes:function(t){var c=this,s=c.s.dt,o=c.s.ctx
s.cells("tr",c.s.columns,t).every((function(t,s){var l=this.data(),a=c.isCellSelectable(s,l)
o.checkboxes.s.data[s].hasOwnProperty(l)&&(c.updateCheckbox(this,s,!0),o.aoColumns[s].checkboxes.selectRow&&a&&c.updateSelect(t,!0)),a||e("input.dt-checkboxes",this.node()).prop("disabled",!0)}))},onClick:function(t,c){var s=this,o=s.s.dt,l=s.s.ctx,a=e(c).closest("td"),n=a.parents(".DTFC_Cloned").length?o.fixedColumns().cellIndex(a):a,d=o.cell(n),i=d.index().column
l.aoColumns[i].checkboxes.selectRow?setTimeout((function(){var e=d.data(),t=s.s.data[i].hasOwnProperty(e)
t!==c.checked&&(s.updateCheckbox(d,i,t),s.updateSelectAll(i))}),0):(d.checkboxes.select(c.checked),t.stopPropagation())},onClickSelectAll:function(t,c){var s,o=this.s.dt,l=this.s.ctx,a=e(c).closest("th")
s=a.parents(".DTFC_Cloned").length?o.fixedColumns().cellIndex(a).column:o.column(a).index(),e(c).data("is-changed",!0),o.column(s,{page:l.aoColumns[s].checkboxes&&l.aoColumns[s].checkboxes.selectAllPages?"all":"current",search:"applied"}).checkboxes.select(c.checked),t.stopPropagation()},loadState:function(){var t,c=this,s=c.s.dt,o=c.s.ctx
o.oFeatures.bStateSave&&(t=s.state.loaded(),e.each(c.s.columns,(function(e,s){t&&t.checkboxes&&t.checkboxes.hasOwnProperty(s)&&o.aoColumns[s].checkboxes.stateSave&&(c.s.data[s]=t.checkboxes[s])})))},updateSelectAll:function(t){var c,s,o,l,a,n,d,i,h,u,r,b=this,x=b.s.dt,k=b.s.ctx
k.aoColumns[t].checkboxes&&k.aoColumns[t].checkboxes.selectAll&&(c=x.cells("tr",t,{page:k.aoColumns[t].checkboxes.selectAllPages?"all":"current",search:"applied"}),s=x.table().container(),o=e('.dt-checkboxes-select-all[data-col="'+t+'"] input[type="checkbox"]',s),a=l=0,n=c.data(),e.each(n,(function(e,c){b.isCellSelectable(t,c)?b.s.data[t].hasOwnProperty(c)&&l++:a++})),k._fixedHeader&&k._fixedHeader.dom.header.floating&&(o=e('.fixedHeader-floating .dt-checkboxes-select-all[data-col="'+t+'"] input[type="checkbox"]')),i=0===l?d=!1:l+a===n.length?!(d=!0):d=!0,h=o.data("is-changed"),u=o.prop("checked"),r=o.prop("indeterminate"),!h&&u===d&&r===i||(o.data("is-changed",!1),o.prop({checked:!i&&d,indeterminate:i}),e.isFunction(k.aoColumns[t].checkboxes.selectAllCallback)&&k.aoColumns[t].checkboxes.selectAllCallback(o.closest("th").get(0),d,i)))},showInfoSelected:function(){var t=this.s.dt,c=this.s.ctx
if(c.aanFeatures.i){var s=this.getSelectRowColIndex()
if(null!==s){var o=0
for(var l in c.checkboxes.s.data[s])c.checkboxes.s.data[s].hasOwnProperty(l)&&o++
e.each(c.aanFeatures.i,(function(c,s){var l,a=e(s),n=e('<span class="select-info"/>')
l=o,n.append(e('<span class="select-item"/>').append(t.i18n("select.rows",{_:"%d rows selected",0:"",1:"1 row selected"},l)))
var d=a.children("span.select-info")
d.length&&d.remove(),""!==n.text()&&a.append(n)}))}}},isCellSelectable:function(e,t){return!this.s.ctx.checkboxes.s.dataDisabled[e].hasOwnProperty(t)},getCellIndex:function(e){var t=this.s.dt
return this.s.ctx._oFixedColumns?t.fixedColumns().cellIndex(e):t.cell(e).index()},getSelectRowColIndex:function(){for(var e=this.s.ctx,t=null,c=0;c<e.aoColumns.length;c++)if(e.aoColumns[c].checkboxes&&e.aoColumns[c].checkboxes.selectRow){t=c
break}return t},updateFixedColumn:function(t){var c,s,o=this,l=o.s.dt,a=o.s.ctx
a._oFixedColumns&&(c=a._oFixedColumns.s.iLeftColumns,s=a.aoColumns.length-a._oFixedColumns.s.iRightColumns-1,(t<c||s<t)&&(l.fixedColumns().update(),setTimeout((function(){e.each(o.s.columns,(function(e,t){o.updateSelectAll(t)}))}),0)))}},s.defaults={stateSave:!0,selectRow:!1,selectAll:!0,selectAllPages:!0,selectCallback:null,selectAllCallback:null,selectAllRender:'<input type="checkbox" autocomplete="off">'}
var l=e.fn.dataTable.Api
return l.register("checkboxes()",(function(){return this})),l.registerPlural("columns().checkboxes.select()","column().checkboxes.select()",(function(t){return void 0===t&&(t=!0),this.iterator("column-rows",(function(c,s,o,l,a){var n,d,i,h
c.aoColumns[s].checkboxes&&(h=[],e.each(a,(function(e,t){h.push({row:t,column:s})})),d=(n=this.cells(h)).data(),i=[],h=[],e.each(d,(function(e,t){c.checkboxes.isCellSelectable(s,t)&&(h.push({row:a[e],column:s}),i.push(a[e]))})),n=this.cells(h),c.checkboxes.updateData(n,s,t),c.checkboxes.updateCheckbox(n,s,t),c.aoColumns[s].checkboxes.selectRow&&c.checkboxes.updateSelect(i,t),c.checkboxes.updateSelectAll(s),c.checkboxes.updateFixedColumn(s))}),1)})),l.registerPlural("cells().checkboxes.select()","cell().checkboxes.select()",(function(e){return void 0===e&&(e=!0),this.iterator("cell",(function(t,c,s){var o,l
t.aoColumns[s].checkboxes&&(o=this.cells([{row:c,column:s}]),l=this.cell({row:c,column:s}).data(),t.checkboxes.isCellSelectable(s,l)&&(t.checkboxes.updateData(o,s,e),t.checkboxes.updateCheckbox(o,s,e),t.aoColumns[s].checkboxes.selectRow&&t.checkboxes.updateSelect(c,e),t.checkboxes.updateSelectAll(s),t.checkboxes.updateFixedColumn(s)))}),1)})),l.registerPlural("cells().checkboxes.enable()","cell().checkboxes.enable()",(function(t){return void 0===t&&(t=!0),this.iterator("cell",(function(c,s,o){var l,a,n
c.aoColumns[o].checkboxes&&(a=(l=this.cell({row:s,column:o})).data(),t?delete c.checkboxes.s.dataDisabled[o][a]:c.checkboxes.s.dataDisabled[o][a]=1,(n=l.node())&&e("input.dt-checkboxes",n).prop("disabled",!t),c.aoColumns[o].checkboxes.selectRow&&c.checkboxes.s.data[o].hasOwnProperty(a)&&c.checkboxes.updateSelect(s,t))}),1)})),l.registerPlural("cells().checkboxes.disable()","cell().checkboxes.disable()",(function(e){return void 0===e&&(e=!0),this.checkboxes.enable(!e)})),l.registerPlural("columns().checkboxes.deselect()","column().checkboxes.deselect()",(function(e){return void 0===e&&(e=!0),this.checkboxes.select(!e)})),l.registerPlural("cells().checkboxes.deselect()","cell().checkboxes.deselect()",(function(e){return void 0===e&&(e=!0),this.checkboxes.select(!e)})),l.registerPlural("columns().checkboxes.deselectAll()","column().checkboxes.deselectAll()",(function(){return this.iterator("column",(function(e,t){e.aoColumns[t].checkboxes&&(e.checkboxes.s.data[t]={},this.column(t).checkboxes.select(!1))}),1)})),l.registerPlural("columns().checkboxes.selected()","column().checkboxes.selected()",(function(){return this.iterator("column-rows",(function(t,c,s,o,l){if(t.aoColumns[c].checkboxes){var a,n,d=[]
return t.oFeatures.bServerSide?e.each(t.checkboxes.s.data[c],(function(e){t.checkboxes.isCellSelectable(c,e)&&d.push(e)})):(a=[],e.each(l,(function(e,t){a.push({row:t,column:c})})),n=this.cells(a).data(),e.each(n,(function(e,s){t.checkboxes.s.data[c].hasOwnProperty(s)&&t.checkboxes.isCellSelectable(c,s)&&d.push(s)}))),d}return[]}),1)})),s.version="1.2.12",e.fn.DataTable.Checkboxes=s,e.fn.dataTable.Checkboxes=s,e(c).on("preInit.dt.dtCheckboxes",(function(e,t){"dt"===e.namespace&&new s(t)})),s}))
