/*! DataTables Bootstrap 4 integration
 * ©2011-2017 SpryMedia Ltd - datatables.net/license
 */
(function(e){"function"==typeof define&&define.amd?define(["jquery","datatables.net"],(function(a){return e(a,window,document)})):"object"==typeof exports?module.exports=function(a,t){return a||(a=window),t&&t.fn.dataTable||(t=require("datatables.net")(a,t).$),e(t,a,a.document)}:e(jQuery,window,document)})((function(e,a,t,s){"use strict"
var n=e.fn.dataTable
return e.extend(!0,n.defaults,{dom:"<'row'<'col-sm-12 col-md-6'l><'col-sm-12 col-md-6'f>><'row'<'col-sm-12'tr>><'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7'p>>",renderer:"bootstrap"}),e.extend(n.ext.classes,{sWrapper:"dataTables_wrapper dt-bootstrap4",sFilterInput:"form-control form-control-sm",sLengthSelect:"custom-select custom-select-sm form-control form-control-sm",sProcessing:"dataTables_processing card",sPageButton:"paginate_button page-item"}),n.ext.renderer.pageButton.bootstrap=function(a,o,r,i,d,l){var c,u,p,f=new n.Api(a),m=a.oClasses,b=a.oLanguage.oPaginate,g=a.oLanguage.oAria.paginate||{},x=0,w=function(t,s){var n,o,i,p,h=function(a){a.preventDefault(),e(a.currentTarget).hasClass("disabled")||f.page()==a.data.action||f.page(a.data.action).draw("page")}
for(n=0,o=s.length;n<o;n++)if(p=s[n],e.isArray(p))w(t,p)
else{switch(c="",u="",p){case"ellipsis":c="&#x2026;",u="disabled"
break
case"first":c=b.sFirst,u=p+(d>0?"":" disabled")
break
case"previous":c=b.sPrevious,u=p+(d>0?"":" disabled")
break
case"next":c=b.sNext,u=p+(d<l-1?"":" disabled")
break
case"last":c=b.sLast,u=p+(d<l-1?"":" disabled")
break
default:c=p+1,u=d===p?"active":""}c&&(i=e("<li>",{class:m.sPageButton+" "+u,id:0===r&&"string"==typeof p?a.sTableId+"_"+p:null}).append(e("<a>",{href:"#","aria-controls":a.sTableId,"aria-label":g[p],"data-dt-idx":x,tabindex:a.iTabIndex,class:"page-link"}).html(c)).appendTo(t),a.oApi._fnBindAction(i,{action:p},h),x++)}}
try{p=e(o).find(t.activeElement).data("dt-idx")}catch(h){}w(e(o).empty().html('<ul class="pagination"/>').children("ul"),i),p!==s&&e(o).find("[data-dt-idx="+p+"]").trigger("focus")},n}))
