/*!
 Bootstrap 4 integration for DataTables' Responsive
 ©2016 SpryMedia Ltd - datatables.net/license
*/
(function(e){"function"==typeof define&&define.amd?define(["jquery","datatables.net-bs4","datatables.net-responsive"],(function(d){return e(d,window,document)})):"object"==typeof exports?module.exports=function(d,a){return d||(d=window),a&&a.fn.dataTable||(a=require("datatables.net-bs4")(d,a).$),a.fn.dataTable.Responsive||require("datatables.net-responsive")(d,a),e(a,d.document)}:e(jQuery,window,document)})((function(e){var d=e.fn.dataTable,a=d.Responsive.display,n=a.modal,t=e('<div class="modal fade dtr-bs-modal" role="dialog"><div class="modal-dialog" role="document"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button></div><div class="modal-body"/></div></div></div>')
return a.modal=function(d){return function(a,o,i){if(e.fn.modal){if(!o){if(d&&d.header){var s=(o=t.find("div.modal-header")).find("button").detach()
o.empty().append('<h4 class="modal-title">'+d.header(a)+"</h4>").append(s)}t.find("div.modal-body").empty().append(i()),t.appendTo("body").modal()}}else n(a,o,i)}},d.Responsive}))
