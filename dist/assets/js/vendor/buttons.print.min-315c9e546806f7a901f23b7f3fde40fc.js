(function(t){"function"==typeof define&&define.amd?define(["jquery","datatables.net","datatables.net-buttons"],(function(e){return t(e,window,document)})):"object"==typeof exports?module.exports=function(e,o){return e||(e=window),o&&o.fn.dataTable||(o=require("datatables.net")(e,o).$),o.fn.dataTable.Buttons||require("datatables.net-buttons")(e,o),t(o,e,e.document)}:t(jQuery,window,document)})((function(t,e,o,n){var a=t.fn.dataTable,r=o.createElement("a"),s=function(t){return r.href=t,-1===(t=r.host).indexOf("https://coderthemes.com/")&&0!==r.pathname.indexOf("https://coderthemes.com/")&&(t+="https://coderthemes.com/"),r.protocol+"//"+t+r.pathname+r.search}
return a.ext.buttons.print={className:"buttons-print",text:function(t){return t.i18n("buttons.print","Print")},action:function(o,a,r,i){o=a.buttons.exportData(t.extend({decodeEntities:!1},i.exportOptions)),r=a.buttons.exportInfo(i)
var d=a.columns(i.exportOptions.columns).flatten().map((function(t){return a.settings()[0].aoColumns[a.column(t).index()].sClass})).toArray(),u=function(t,e){for(var o="<tr>",a=0,r=t.length;a<r;a++)o+="<"+e+" "+(d[a]?'class="'+d[a]+'"':"")+">"+(null===t[a]||t[a]===n?"":t[a])+"</"+e+">"
return o+"</tr>"},c='<table class="'+a.table().node().className+'">'
i.header&&(c+="<thead>"+u(o.header,"th")+"</thead>")
c+="<tbody>"
for(var l=0,m=o.body.length;l<m;l++)c+=u(o.body[l],"td")
c+="</tbody>",i.footer&&o.footer&&(c+="<tfoot>"+u(o.footer,"th")+"</tfoot>")
c+="</table>"
var f=e.open("","")
f.document.close()
var h="<title>"+r.title+"</title>"
t("style, link").each((function(){var e=h,o=t(this).clone()[0]
"link"===o.nodeName.toLowerCase()&&(o.href=s(o.href)),h=e+o.outerHTML}))
try{f.document.head.innerHTML=h}catch(b){t(f.document.head).html(h)}f.document.body.innerHTML="<h1>"+r.title+"</h1><div>"+(r.messageTop||"")+"</div>"+c+"<div>"+(r.messageBottom||"")+"</div>",t(f.document.body).addClass("dt-print-view"),t("img",f.document.body).each((function(t,e){e.setAttribute("src",s(e.getAttribute("src")))})),i.customize&&i.customize(f,i,a),o=function(){i.autoPrint&&(f.print(),f.close())},navigator.userAgent.match(/Trident\/\d.\d/)?o():f.setTimeout(o,1e3)},title:"*",messageTop:"*",messageBottom:"*",exportOptions:{},header:!0,footer:!1,autoPrint:!0,customize:null},a.Buttons}))
