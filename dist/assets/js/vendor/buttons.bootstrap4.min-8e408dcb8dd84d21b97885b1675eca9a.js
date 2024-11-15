/*!
 Bootstrap integration for DataTables' Buttons
 ©2016 SpryMedia Ltd - datatables.net/license
*/
(function(t){"function"==typeof define&&define.amd?define(["jquery","datatables.net-bs4","datatables.net-buttons"],(function(e){return t(e,window,document)})):"object"==typeof exports?module.exports=function(e,n){return e||(e=window),n&&n.fn.dataTable||(n=require("datatables.net-bs4")(e,n).$),n.fn.dataTable.Buttons||require("datatables.net-buttons")(e,n),t(n,e.document)}:t(jQuery,window,document)})((function(t){var e=t.fn.dataTable
return t.extend(!0,e.Buttons.defaults,{dom:{container:{className:"dt-buttons btn-group flex-wrap"},button:{className:"btn btn-secondary"},collection:{tag:"div",className:"dropdown-menu",button:{tag:"a",className:"dt-button dropdown-item",active:"active",disabled:"disabled"}}},buttonCreated:function(e,n){return e.buttons?t('<div class="btn-group"/>').append(n):n}}),e.ext.buttons.collection.className+=" dropdown-toggle",e.ext.buttons.collection.rightAlignClassName="dropdown-menu-right",e.Buttons}))
